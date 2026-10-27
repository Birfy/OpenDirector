import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import type { CanvasNode } from "./model";
import {
  createLocalStage,
  parseLocalStageValue,
  sampleStage,
} from "./stageDocument";
import type {
  LocalStageDocument,
  StageCamera,
  StageObject,
  StageTransform,
  Vector3Value,
} from "./stageDocument";
import { EditorModal } from "./EditorModal";
import "./director-stage.css";
import { STAGE_MOTIONS, sampleJointPose } from "./stageMotion";
import { encodeMp4 } from "./mp4Export";
import { downloadFile, downloadFilename } from "./assets";
import { withMediaDuration } from "./editorMedia";
import { mediaBlobDataUrl } from "./localMediaRuntime";
import type { LinkedMediaResult } from "./linkedResults";

export interface DirectorStageProps {
  node: CanvasNode;
  onApply: (stage: LocalStageDocument, screenshot?: string) => void;
  onClose: () => void;
  onRender: (result: LinkedMediaResult) => boolean;
}
interface StageRuntime {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  root: THREE.Group;
  grid: THREE.GridHelper;
}
const vector = (value: THREE.Vector3): Vector3Value => ({
  x: value.x,
  y: value.y,
  z: value.z,
});
const axes = ["x", "y", "z"] as const;
const titles = { person: "人物", box: "方块", sphere: "球体" };
function applyTransform(object: THREE.Object3D, value: StageTransform) {
  object.position.set(value.position.x, value.position.y, value.position.z);
  object.rotation.set(value.rotation.x, value.rotation.y, value.rotation.z);
  object.scale.set(value.scale.x, value.scale.y, value.scale.z);
}
function buildObject(value: StageObject): THREE.Group {
  const group = new THREE.Group();
  group.userData.objectId = value.id;
  const material = new THREE.MeshStandardMaterial({
    color: value.color,
    roughness: 0.58,
    metalness: 0.08,
  });
  const add = (
    geometry: THREE.BufferGeometry,
    x: number,
    y: number,
    z: number,
  ) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  };
  if (value.kind === "box") add(new THREE.BoxGeometry(1, 1, 1), 0, 0.5, 0);
  else if (value.kind === "sphere")
    add(new THREE.SphereGeometry(0.6, 32, 24), 0, 0.6, 0);
  else {
    const bone = (
      parent: THREE.Object3D,
      name: string,
      x: number,
      y: number,
      z = 0,
    ) => {
      const joint = new THREE.Bone();
      joint.name = name;
      joint.position.set(x, y, z);
      parent.add(joint);
      return joint;
    };
    const mesh = (
      parent: THREE.Object3D,
      geometry: THREE.BufferGeometry,
      y: number,
    ) => {
      const part = new THREE.Mesh(geometry, material);
      part.position.y = y;
      part.castShadow = true;
      part.receiveShadow = true;
      parent.add(part);
    };
    const hips = bone(group, "hips", 0, 0.9);
    mesh(hips, new THREE.CylinderGeometry(0.23, 0.19, 0.55, 16), 0.28);
    mesh(hips, new THREE.SphereGeometry(0.22, 24, 16), 0.8);
    for (const [side, sign] of [
      ["left", -1],
      ["right", 1],
    ] as const) {
      const hip = bone(hips, `${side}Hip`, sign * 0.13, 0);
      mesh(hip, new THREE.CapsuleGeometry(0.085, 0.25, 6, 12), -0.21);
      const knee = bone(hip, `${side}Knee`, 0, -0.42);
      mesh(knee, new THREE.CapsuleGeometry(0.075, 0.28, 6, 12), -0.22);
      const shoulder = bone(hips, `${side}Shoulder`, sign * 0.3, 0.5);
      mesh(shoulder, new THREE.CapsuleGeometry(0.065, 0.2, 6, 12), -0.16);
      const elbow = bone(shoulder, `${side}Elbow`, 0, -0.32);
      mesh(elbow, new THREE.CapsuleGeometry(0.055, 0.2, 6, 12), -0.15);
    }
  }
  applyTransform(group, value);
  return group;
}
function poseJoints(group: THREE.Object3D, value: StageObject, time: number) {
  if (value.kind !== "person") return;
  const pose = sampleJointPose(value.motion, time);
  const hips = group.getObjectByName("hips");
  if (hips) hips.position.y = 0.9 + pose.hipsY;
  for (const side of ["left", "right"] as const) {
    const hip = group.getObjectByName(`${side}Hip`),
      knee = group.getObjectByName(`${side}Knee`);
    const shoulder = group.getObjectByName(`${side}Shoulder`),
      elbow = group.getObjectByName(`${side}Elbow`);
    if (hip) hip.rotation.x = pose[`${side}Hip`];
    if (knee) knee.rotation.x = pose[`${side}Knee`];
    if (shoulder)
      shoulder.rotation.set(
        pose[`${side}ShoulderX`],
        0,
        side === "right" ? pose.rightShoulderZ : 0,
      );
    if (elbow) elbow.rotation.x = pose[`${side}Elbow`];
  }
}
function disposeObject(object: THREE.Object3D) {
  const materials = new Set<THREE.Material>();
  object.traverse((child) => {
    if (child instanceof THREE.Mesh || child instanceof THREE.LineSegments) {
      child.geometry.dispose();
      (Array.isArray(child.material)
        ? child.material
        : [child.material]
      ).forEach((material) => materials.add(material));
    }
  });
  materials.forEach((material) => material.dispose());
}
function setCamera(runtime: StageRuntime, value: StageCamera) {
  runtime.camera.position.set(
    value.position.x,
    value.position.y,
    value.position.z,
  );
  runtime.camera.fov = value.fov;
  runtime.camera.updateProjectionMatrix();
  runtime.controls.target.set(value.target.x, value.target.y, value.target.z);
  runtime.controls.update();
}
function displayPose(
  runtime: StageRuntime,
  pose: Pick<LocalStageDocument, "camera" | "objects">,
  time = 0,
) {
  setCamera(runtime, pose.camera);
  for (const child of runtime.root.children) {
    const data = pose.objects.find(
      (item) => item.id === child.userData.objectId,
    );
    if (data) {
      applyTransform(child, data);
      poseJoints(child, data, time);
    }
  }
}
const focalLength = (fov: number) =>
  35 / (16 / 9) / (2 * Math.tan(THREE.MathUtils.degToRad(fov) / 2));
const fovFromFocal = (focal: number) =>
  THREE.MathUtils.radToDeg(2 * Math.atan(35 / (16 / 9) / (2 * focal)));

function VectorFields({
  label,
  value,
  onChange,
  rotation = false,
  min,
}: {
  label: string;
  value: Vector3Value;
  onChange: (value: Vector3Value) => void;
  rotation?: boolean;
  min?: number;
}) {
  return (
    <fieldset className="cw-stage-vector">
      <legend>
        {label}
        {rotation ? "（度）" : ""}
      </legend>
      {axes.map((axis) => (
        <label key={axis}>
          {axis.toUpperCase()}
          <input
            aria-label={`${label} ${axis.toUpperCase()}`}
            type="number"
            step={rotation ? 5 : 0.1}
            min={min}
            value={Number(
              (rotation
                ? THREE.MathUtils.radToDeg(value[axis])
                : value[axis]
              ).toFixed(3),
            )}
            onChange={(event) => {
              const raw = Number(event.target.value);
              if (Number.isFinite(raw) && (min === undefined || raw >= min))
                onChange({
                  ...value,
                  [axis]: rotation ? THREE.MathUtils.degToRad(raw) : raw,
                });
            }}
          />
        </label>
      ))}
    </fieldset>
  );
}

export function DirectorStage({
  node,
  onApply,
  onClose,
  onRender,
}: DirectorStageProps) {
  const [stage, setStage] = useState(() =>
    node.data.localStage
      ? parseLocalStageValue(node.data.localStage)
      : createLocalStage(),
  );
  const [selected, setSelected] = useState<string | null>(
      () => stage.objects[0]?.id ?? null,
    ),
    [error, setError] = useState(""),
    [playing, setPlaying] = useState(false),
    [time, setTime] = useState(0),
    [preview, setPreview] = useState(false),
    [ready, setReady] = useState(false);
  const [inserted, setInserted] = useState(false);
  const [renderProgress, setRenderProgress] = useState<number | null>(null);
  const [rendered, setRendered] = useState<Blob | null>(null);
  const exporting = useRef<AbortController | null>(null);
  const mount = useRef<HTMLDivElement>(null),
    runtime = useRef<StageRuntime | null>(null),
    stageRef = useRef(stage),
    timeRef = useRef(time),
    playingRef = useRef(playing),
    previewRef = useRef(preview),
    importInput = useRef<HTMLInputElement>(null),
    active = useRef(true);
  stageRef.current = stage;
  timeRef.current = time;
  playingRef.current = playing;
  previewRef.current = preview;
  const object = stage.objects.find((item) => item.id === selected);
  const edit = (
    operation: (value: LocalStageDocument) => LocalStageDocument,
  ) => {
    try {
      const next = parseLocalStageValue(operation(stageRef.current));
      stageRef.current = next;
      setStage(next);
      setTime((current) => Math.min(current, next.duration));
      setPlaying(false);
      setPreview(false);
      setError("");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "舞台修改失败。");
    }
  };
  const editObject = (patch: Partial<StageObject>) => {
    if (selected)
      edit((current) => ({
        ...current,
        objects: current.objects.map((item) =>
          item.id === selected ? { ...item, ...patch } : item,
        ),
      }));
  };

  useEffect(() => {
    active.current = true;
    const container = mount.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
      });
    } catch (reason) {
      setError(
        `无法初始化 WebGL：${reason instanceof Error ? reason.message : String(reason)}`,
      );
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.append(renderer.domElement);
    const scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.05, 1000),
      controls = new OrbitControls(camera, renderer.domElement),
      root = new THREE.Group();
    controls.enableDamping = false;
    controls.minDistance = 0.2;
    controls.maxDistance = 200;
    root.name = "stage-objects";
    scene.add(root);
    const grid = new THREE.GridHelper(30, 30, 0x535b76, 0x2b344b);
    scene.add(grid);
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshStandardMaterial({ color: 0x202737, roughness: 1 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    scene.add(ground);
    scene.add(new THREE.HemisphereLight(0xe2e7ff, 0x3c3354, 2.6));
    const light = new THREE.DirectionalLight(0xffffff, 3.5);
    light.position.set(5, 10, 6);
    light.castShadow = true;
    light.shadow.mapSize.set(2048, 2048);
    scene.add(light);
    const fill = new THREE.DirectionalLight(0x8d88ff, 1.8);
    fill.position.set(-6, 5, -5);
    scene.add(fill);
    const current = { renderer, scene, camera, controls, root, grid };
    runtime.current = current;
    setCamera(current, stageRef.current.camera);
    const resize = () => {
      const width = container.clientWidth,
        height = container.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    const orbitStart = () => {
      setPlaying(false);
      playingRef.current = false;
      if (previewRef.current) {
        const sampled = sampleStage(stageRef.current, timeRef.current);
        const next = { ...stageRef.current, ...sampled };
        stageRef.current = next;
        setStage(next);
        setPreview(false);
        previewRef.current = false;
      }
    };
    const orbitEnd = () => {
      const next = {
        ...stageRef.current,
        camera: {
          position: vector(camera.position),
          target: vector(controls.target),
          fov: camera.fov,
        },
      };
      stageRef.current = next;
      setStage(next);
    };
    controls.addEventListener("start", orbitStart);
    controls.addEventListener("end", orbitEnd);
    const raycaster = new THREE.Raycaster(),
      pointer = new THREE.Vector2();
    let start: { x: number; y: number; pointerId: number } | null = null;
    const pointerDown = (event: PointerEvent) => {
      start =
        event.isPrimary && event.button === 0
          ? { x: event.clientX, y: event.clientY, pointerId: event.pointerId }
          : null;
    };
    const pointerUp = (event: PointerEvent) => {
      const down = start;
      start = null;
      if (
        !down ||
        down.pointerId !== event.pointerId ||
        Math.hypot(event.clientX - down.x, event.clientY - down.y) > 4
      )
        return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        (-(event.clientY - rect.top) / rect.height) * 2 + 1,
      );
      raycaster.setFromCamera(pointer, camera);
      let found: THREE.Object3D | undefined = raycaster.intersectObjects(
        root.children,
        true,
      )[0]?.object;
      while (found && !found.userData.objectId)
        found = found.parent ?? undefined;
      if (found) setSelected(found.userData.objectId as string);
    };
    const pointerCancel = () => {
      start = null;
    };
    renderer.domElement.addEventListener("pointercancel", pointerCancel);
    window.addEventListener("blur", pointerCancel);
    renderer.domElement.addEventListener("pointerdown", pointerDown);
    renderer.domElement.addEventListener("pointerup", pointerUp);
    const contextLost = (event: Event) => {
      event.preventDefault();
      setPlaying(false);
      setError("WebGL 上下文已丢失。可先保存舞台数据，重新打开编辑器后继续。");
    };
    renderer.domElement.addEventListener("webglcontextlost", contextLost);
    let frame = 0;
    const render = () => {
      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };
    render();
    setReady(true);
    return () => {
      active.current = false;
      exporting.current?.abort();
      setReady(false);
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.removeEventListener("start", orbitStart);
      controls.removeEventListener("end", orbitEnd);
      controls.dispose();
      renderer.domElement.removeEventListener("pointercancel", pointerCancel);
      window.removeEventListener("blur", pointerCancel);
      renderer.domElement.removeEventListener("pointerdown", pointerDown);
      renderer.domElement.removeEventListener("pointerup", pointerUp);
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      disposeObject(scene);
      light.shadow.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      runtime.current = null;
    };
  }, []);

  useEffect(() => {
    const current = runtime.current;
    if (!current) return;
    for (const child of [...current.root.children]) {
      current.root.remove(child);
      disposeObject(child);
    }
    stage.objects.forEach((item) => current.root.add(buildObject(item)));
  }, [stage.objects, ready]);
  useEffect(() => {
    const current = runtime.current;
    if (!current) return;
    current.scene.background = new THREE.Color(stage.background);
    current.grid.visible = stage.grid;
    if (!previewRef.current) setCamera(current, stage.camera);
  }, [stage.camera, stage.background, stage.grid, ready]);
  useEffect(() => {
    const current = runtime.current;
    if (!current) return;
    current.root.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial;
        let owner: THREE.Object3D | null = child;
        while (owner && !owner.userData.objectId) owner = owner.parent;
        material.emissive.set(
          owner?.userData.objectId === selected ? "#1e1536" : "#000000",
        );
      }
    });
  }, [selected, stage.objects, ready]);
  useEffect(() => {
    if (!runtime.current) return;
    displayPose(
      runtime.current,
      preview ? sampleStage(stage, time) : stage,
      preview ? time : 0,
    );
  }, [stage, time, preview, ready]);
  useEffect(() => {
    if (!playing) return;
    const initial = timeRef.current,
      start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(
        stageRef.current.duration,
        initial + (now - start) / 1000,
      );
      setTime(next);
      if (next >= stageRef.current.duration) {
        setPlaying(false);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  const addObject = (kind: StageObject["kind"]) => {
    const id = crypto.randomUUID();
    edit((current) => ({
      ...current,
      objects: [
        ...current.objects,
        {
          id,
          kind,
          name: `${titles[kind]} ${current.objects.length + 1}`,
          color:
            kind === "person"
              ? "#a09af9"
              : kind === "box"
                ? "#80c9c0"
                : "#e6aa6b",
          position: { x: current.objects.length * 1.3, y: 0, z: 0 },
          rotation: { x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
        },
      ],
    }));
    setSelected(id);
  };
  const removeObject = () => {
    if (!selected) return;
    edit((current) => ({
      ...current,
      objects: current.objects.filter((item) => item.id !== selected),
      keyframes: current.keyframes.map((frame) => ({
        ...frame,
        objects: frame.objects.filter((item) => item.id !== selected),
      })),
    }));
    setSelected(null);
  };
  const captureKeyframe = () => {
    const pose = previewRef.current
        ? sampleStage(stageRef.current, timeRef.current)
        : stageRef.current,
      at = Number(timeRef.current.toFixed(3));
    edit((current) => ({
      ...current,
      ...pose,
      keyframes: [
        ...current.keyframes.filter((frame) => frame.time !== at),
        {
          id: crypto.randomUUID(),
          time: at,
          camera: structuredClone(pose.camera),
          objects: pose.objects.map((item) => ({
            id: item.id,
            transform: {
              position: { ...item.position },
              rotation: { ...item.rotation },
              scale: { ...item.scale },
            },
          })),
        },
      ].sort((a, b) => a.time - b.time),
    }));
  };
  const screenshot = () => {
    const current = runtime.current;
    if (!current) throw new Error("舞台渲染器尚未就绪。");
    current.renderer.render(current.scene, current.camera);
    return current.renderer.domElement.toDataURL("image/png");
  };
  const download = (content: string, name: string, mime: string) => {
    const url = content.startsWith("data:")
      ? content
      : URL.createObjectURL(new Blob([content], { type: mime }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = name;
    anchor.click();
    if (!url.startsWith("data:"))
      setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const snapshot = () => {
    try {
      download(
        screenshot(),
        `${node.data.title || "director-stage"}.png`,
        "image/png",
      );
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "截图失败。");
    }
  };
  const importStage = async (file: File) => {
    try {
      const next = parseLocalStageValue(JSON.parse(await file.text()));
      if (active.current) {
        edit(() => next);
        setTime(0);
        setSelected(next.objects[0]?.id ?? null);
      }
    } catch (reason) {
      if (active.current)
        setError(reason instanceof Error ? reason.message : "导入舞台失败。");
    }
  };

  const renderVideo = async () => {
    if (!runtime.current) return;
    const controller = new AbortController();
    exporting.current?.abort();
    exporting.current = controller;
    const snapshot = parseLocalStageValue(stageRef.current);
    setPlaying(false);
    setError("");
    setRendered(null);
    setInserted(false);
    setRenderProgress(0);
    const scene = runtime.current.scene.clone(true);
    const root = scene.getObjectByName("stage-objects")!;
    const materials = new Map<THREE.Material, THREE.Material>();
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const clone = (source: THREE.Material) => {
        let material = materials.get(source);
        if (!material) {
          material = source.clone();
          if (material instanceof THREE.MeshStandardMaterial)
            material.emissive.set("#000000");
          materials.set(source, material);
        }
        return material;
      };
      child.material = Array.isArray(child.material)
        ? child.material.map(clone)
        : clone(child.material);
    });
    let renderer: THREE.WebGLRenderer | undefined;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(1280, 720);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      const camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.05, 1000);
      const blob = await encodeMp4({
        canvas: renderer.domElement,
        duration: snapshot.duration,
        fps: 30,
        signal: controller.signal,
        progress: setRenderProgress,
        draw: (at) => {
          const pose = sampleStage(snapshot, at);
          camera.position.set(
            pose.camera.position.x,
            pose.camera.position.y,
            pose.camera.position.z,
          );
          camera.fov = pose.camera.fov;
          camera.updateProjectionMatrix();
          camera.lookAt(
            pose.camera.target.x,
            pose.camera.target.y,
            pose.camera.target.z,
          );
          for (const child of root.children) {
            const object = pose.objects.find(
              (item) => item.id === child.userData.objectId,
            );
            if (object) {
              applyTransform(child, object);
              poseJoints(child, object, at);
            }
          }
          renderer!.render(scene, camera);
        },
      });
      if (active.current && !controller.signal.aborted) setRendered(blob);
    } catch (reason) {
      if (active.current && !controller.signal.aborted)
        setError(
          reason instanceof Error ? reason.message : "预演视频导出失败。",
        );
    } finally {
      // Geometry stays shared with the preview; cloned materials, renderer and shadows are export-owned.
      scene.traverse((child) => {
        if (child instanceof THREE.DirectionalLight) child.shadow.dispose();
      });
      materials.forEach((material) => material.dispose());
      renderer?.dispose();
      if (active.current && exporting.current === controller)
        setRenderProgress(null);
    }
  };
  const insertRender = async () => {
    if (!rendered) return;
    const controller = new AbortController();
    exporting.current = controller;
    setRenderProgress(1);
    try {
      const src = await mediaBlobDataUrl(rendered, controller.signal);
      const media = await withMediaDuration(
        { id: "rendered", kind: "video", title: node.data.title, src },
        controller.signal,
      );
      if (active.current && !controller.signal.aborted) {
        setInserted(
          onRender({
            kind: "video",
            src,
            mimeType: "video/mp4",
            title: `${node.data.title} · 动作预演`,
            media: {
              width: media.width,
              height: media.height,
              durationSeconds: media.durationSeconds,
            },
          }),
        );
      }
    } catch (reason) {
      if (active.current && !controller.signal.aborted)
        setError(reason instanceof Error ? reason.message : "加入画布失败。");
    } finally {
      if (active.current) setRenderProgress(null);
    }
  };
  return (
    <EditorModal
      title={`导演预演 · ${node.data.title}`}
      subtitle="本地 3D 舞台 · 镜头与主体关键帧"
      className="cw-stage-dialog"
      onClose={onClose}
      onApply={() => {
        try {
          onApply(
            parseLocalStageValue(stageRef.current),
            runtime.current ? screenshot() : undefined,
          );
          onClose();
        } catch (reason) {
          setError(reason instanceof Error ? reason.message : "保存舞台失败。");
        }
      }}
      disabled={node.locked || renderProgress !== null}
      error={error}
      actions={
        <>
          <button
            disabled={renderProgress !== null}
            onClick={() => importInput.current?.click()}
          >
            导入舞台 JSON
          </button>
          <button
            onClick={() =>
              download(
                JSON.stringify(stageRef.current, null, 2),
                `${node.data.title || "director-stage"}.stage.json`,
                "application/json",
              )
            }
          >
            导出舞台 JSON
          </button>
          <button disabled={!ready} onClick={snapshot}>
            下载镜头截图
          </button>
          <button
            disabled={!ready || renderProgress !== null}
            onClick={() => void renderVideo()}
          >
            合成预演 MP4
          </button>
        </>
      }
    >
      {renderProgress !== null && (
        <div className="cw-render-status" role="status">
          <progress value={renderProgress} max={1} />
          <span>正在合成预演 {Math.round(renderProgress * 100)}%</span>
          <button onClick={() => exporting.current?.abort()}>取消合成</button>
        </div>
      )}
      {rendered && (
        <div className="cw-render-status" role="status">
          <span>预演 MP4 已完成 · 1280×720 · 30 fps</span>
          <button
            disabled={renderProgress !== null}
            onClick={() =>
              downloadFile(
                rendered,
                downloadFilename(node.data.title + "-预演", "video/mp4"),
              )
            }
          >
            下载预演 MP4
          </button>
          <button
            disabled={renderProgress !== null || node.locked || inserted}
            onClick={() => void insertRender()}
          >
            {inserted ? "已加入画布" : "将预演视频加入画布"}
          </button>
        </div>
      )}
      <fieldset className="cw-editor-work" disabled={renderProgress !== null}>
        <div className="cw-stage-layout">
          <aside className="cw-stage-objects">
            <h3>场景主体</h3>
            <div className="cw-stage-add">
              {(["person", "box", "sphere"] as const).map((kind) => (
                <button key={kind} onClick={() => addObject(kind)}>
                  + {titles[kind]}
                </button>
              ))}
            </div>
            <div className="cw-stage-object-list">
              {stage.objects.map((item) => (
                <button
                  key={item.id}
                  aria-pressed={selected === item.id}
                  onClick={() => setSelected(item.id)}
                >
                  <span style={{ background: item.color }} />
                  {item.name}
                </button>
              ))}
            </div>
            <label className="cw-domain-field">
              背景颜色
              <input
                type="color"
                value={stage.background}
                onChange={(event) =>
                  edit((current) => ({
                    ...current,
                    background: event.target.value,
                  }))
                }
              />
            </label>
            <label className="cw-domain-checkbox">
              <input
                type="checkbox"
                checked={stage.grid}
                onChange={(event) =>
                  edit((current) => ({
                    ...current,
                    grid: event.target.checked,
                  }))
                }
              />
              显示地面网格
            </label>
            <p className="cw-domain-note">
              左键环绕 · 右键平移 · 滚轮缩放
              <br />
              点击主体选择，再调整右侧变换。
            </p>
          </aside>
          <section className="cw-stage-center">
            <div
              className="cw-stage-viewport"
              ref={mount}
              role="img"
              aria-label="可交互的三维导演舞台"
            />
            <div className="cw-stage-transport">
              <button
                disabled={!ready}
                onClick={() => {
                  setPreview(true);
                  if (time >= stage.duration) setTime(0);
                  setPlaying((current) => !current);
                }}
              >
                {playing ? "暂停" : "播放动作与关键帧"}
              </button>
              <output>
                {time.toFixed(2)} / {stage.duration.toFixed(2)} 秒
              </output>
              <label>
                总时长
                <input
                  aria-label="舞台总时长"
                  type="number"
                  min={0.1}
                  step={0.5}
                  value={stage.duration}
                  onChange={(event) =>
                    edit((current) => ({
                      ...current,
                      duration: Number(event.target.value),
                    }))
                  }
                />
              </label>
              <button onClick={captureKeyframe} disabled={!ready}>
                在此记录关键帧
              </button>
            </div>
            <input
              aria-label="舞台播放位置"
              type="range"
              min={0}
              max={stage.duration}
              step={0.01}
              value={Math.min(time, stage.duration)}
              onChange={(event) => {
                setPlaying(false);
                setTime(Number(event.target.value));
                setPreview(true);
              }}
            />
            <div className="cw-stage-keyframes">
              {stage.keyframes.map((frame) => (
                <div key={frame.id}>
                  <button
                    onClick={() => {
                      setPlaying(false);
                      setTime(frame.time);
                      setPreview(true);
                    }}
                  >
                    {frame.time.toFixed(2)}s
                  </button>
                  <button
                    aria-label={`删除 ${frame.time} 秒关键帧`}
                    onClick={() =>
                      edit((current) => ({
                        ...current,
                        keyframes: current.keyframes.filter(
                          (item) => item.id !== frame.id,
                        ),
                      }))
                    }
                  >
                    ×
                  </button>
                </div>
              ))}
              {!stage.keyframes.length && (
                <p>在起点和终点分别调整镜头或主体，然后记录关键帧即可预演。</p>
              )}
            </div>
          </section>
          <aside className="cw-stage-inspector">
            <h3>{object ? "主体变换" : "摄像机"}</h3>
            {object && (
              <>
                <label className="cw-domain-field">
                  名称
                  <input
                    value={object.name}
                    onChange={(event) =>
                      editObject({ name: event.target.value })
                    }
                  />
                </label>
                <label className="cw-domain-field">
                  材质颜色
                  <input
                    type="color"
                    value={object.color}
                    onChange={(event) =>
                      editObject({ color: event.target.value })
                    }
                  />
                </label>
                {object.kind === "person" && (
                  <>
                    <label className="cw-domain-field">
                      角色动作
                      <select
                        value={object.motion?.preset ?? "idle"}
                        onChange={(event) =>
                          editObject({
                            motion: {
                              preset: event.target
                                .value as keyof typeof STAGE_MOTIONS,
                              speed: object.motion?.speed ?? 1,
                              amount: object.motion?.amount ?? 1,
                            },
                          })
                        }
                      >
                        {Object.entries(STAGE_MOTIONS).map(([key, title]) => (
                          <option key={key} value={key}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="cw-domain-field">
                      动作速度
                      <input
                        type="number"
                        min={0.1}
                        step={0.1}
                        value={object.motion?.speed ?? 1}
                        onChange={(event) =>
                          editObject({
                            motion: {
                              preset: object.motion?.preset ?? "idle",
                              amount: object.motion?.amount ?? 1,
                              speed: Number(event.target.value),
                            },
                          })
                        }
                      />
                    </label>
                    <label className="cw-domain-field">
                      动作幅度
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={object.motion?.amount ?? 1}
                        onChange={(event) =>
                          editObject({
                            motion: {
                              preset: object.motion?.preset ?? "idle",
                              speed: object.motion?.speed ?? 1,
                              amount: Number(event.target.value),
                            },
                          })
                        }
                      />
                    </label>
                    <p className="cw-domain-note">
                      本地关节人偶，可叠加主体位移和镜头关键帧。
                    </p>
                  </>
                )}
                <VectorFields
                  label="位置"
                  value={object.position}
                  onChange={(position) => editObject({ position })}
                />
                <VectorFields
                  label="旋转"
                  value={object.rotation}
                  rotation
                  onChange={(rotation) => editObject({ rotation })}
                />
                <VectorFields
                  label="缩放"
                  value={object.scale}
                  min={0.01}
                  onChange={(scale) => editObject({ scale })}
                />
                <button onClick={removeObject}>删除此主体</button>
              </>
            )}
            <h3>摄像机</h3>
            <VectorFields
              label="机位"
              value={stage.camera.position}
              onChange={(position) =>
                edit((current) => ({
                  ...current,
                  camera: { ...current.camera, position },
                }))
              }
            />
            <VectorFields
              label="目标"
              value={stage.camera.target}
              onChange={(target) =>
                edit((current) => ({
                  ...current,
                  camera: { ...current.camera, target },
                }))
              }
            />
            <label className="cw-domain-field">
              焦距（35mm 胶片，16:9）
              <input
                type="number"
                min={1}
                step={1}
                value={Number(focalLength(stage.camera.fov).toFixed(1))}
                onChange={(event) => {
                  const focal = Number(event.target.value);
                  if (focal > 0)
                    edit((current) => ({
                      ...current,
                      camera: { ...current.camera, fov: fovFromFocal(focal) },
                    }));
                }}
              />
            </label>
            <label className="cw-domain-field">
              垂直视角 {stage.camera.fov.toFixed(1)}°
              <input
                type="range"
                min={10}
                max={120}
                step={0.1}
                value={stage.camera.fov}
                onChange={(event) =>
                  edit((current) => ({
                    ...current,
                    camera: {
                      ...current.camera,
                      fov: Number(event.target.value),
                    },
                  }))
                }
              />
            </label>
            <button
              onClick={() => {
                setSelected(null);
                edit((current) => ({
                  ...current,
                  camera: createLocalStage().camera,
                }));
              }}
            >
              重置镜头
            </button>
          </aside>
        </div>
        <p className="cw-domain-note">
          镜头与主体关键帧使用本地线性插值，截图来自实际 WebGL
          渲染，支持本地关节动作和 720p MP4 导出。外部 FBX/GLB
          蒙皮角色与云端导演版本尚未接入。
        </p>
        <input
          className="cw-domain-file-input"
          ref={importInput}
          type="file"
          accept="application/json,.json"
          aria-label="导入导演舞台"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void importStage(file);
            event.target.value = "";
          }}
        />
      </fieldset>
    </EditorModal>
  );
}
export default DirectorStage;
