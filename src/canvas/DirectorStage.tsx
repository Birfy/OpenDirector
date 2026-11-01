import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import type { CanvasNode } from "./model";
import { ControlSlider } from "./ControlSlider";
import {
  createLocalStage,
  parseLocalStageValue,
  sampleStage,
  editStageObjectAt,
  editStageCameraAt,
  captureStageFrame,
  stageFrameTimes,
  removeStageFrame,
  stageOutputSize,
  defaultStageCamera,
  STAGE_RATIOS,
} from "./stageDocument";
import type {
  LocalStageDocument,
  StageCamera,
  StageSample,
  StageSampleObject,
  StageMotionClip,
  StageShot,
  StageObject,
  StageTransform,
  Vector3Value,
} from "./stageDocument";
import {
  commitStageHistory,
  createStageHistory,
  navigateStageHistory,
  type StageHistory,
} from "./stageHistory";
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
function poseJoints(group: THREE.Object3D, value: StageSampleObject) {
  if (value.kind !== "person") return;
  const pose = sampleJointPose(value.motion, value.motionTime);
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
function displayPose(runtime: StageRuntime, pose: StageSample) {
  setCamera(runtime, pose.camera);
  for (const child of runtime.root.children) {
    const data = pose.objects.find(
      (item) => item.id === child.userData.objectId,
    );
    if (data) {
      applyTransform(child, data);
      poseJoints(child, data);
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
  const [historyState, setHistoryState] = useState(() =>
    createStageHistory(
      node.data.localStage
        ? parseLocalStageValue(node.data.localStage)
        : createLocalStage(),
    ),
  );
  const stage = historyState.present;
  const history = useRef(historyState);
  const [selected, setSelected] = useState<string | null>(
      () => stage.objects[0]?.id ?? null,
    ),
    [error, setError] = useState(""),
    [playing, setPlaying] = useState(false),
    [time, setTime] = useState(0),
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
    importInput = useRef<HTMLInputElement>(null),
    active = useRef(true);
  stageRef.current = stage;
  timeRef.current = time;
  playingRef.current = playing;
  const sampled = sampleStage(stage, time);
  const object = sampled.objects.find((item) => item.id === selected);
  const cameraValue = sampled.camera;
  const outputSize = stageOutputSize(stage.aspectRatio);
  const frameTimes = stageFrameTimes(stage);
  const installHistory = (next: StageHistory) => {
    if (next === history.current) return;
    history.current = next;
    stageRef.current = next.present;
    setHistoryState(next);
    setTime((current) => Math.min(current, next.present.duration));
    setPlaying(false);
    setRendered(null);
    setInserted(false);
    setError("");
  };
  const edit = (
    operation: (value: LocalStageDocument) => LocalStageDocument,
  ) => {
    try {
      installHistory(
        commitStageHistory(history.current, operation(stageRef.current)),
      );
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "舞台修改失败。");
    }
  };
  const navigate = (direction: "undo" | "redo") => {
    if (renderProgress !== null) return;
    installHistory(navigateStageHistory(history.current, direction));
  };
  const editObject = (patch: Partial<StageObject>) => {
    if (selected)
      edit((current) =>
        editStageObjectAt(current, selected, timeRef.current, patch),
      );
  };
  const editCamera = (patch: Partial<StageCamera>) =>
    edit((current) =>
      editStageCameraAt(
        current,
        sampleStage(current, timeRef.current).cameraId,
        timeRef.current,
        patch,
      ),
    );
  const updateClip = (id: string, patch: Partial<StageMotionClip>) => {
    if (object)
      editObject({
        motionClips: object.motionClips.map((clip) =>
          clip.id === id ? { ...clip, ...patch } : clip,
        ),
      });
  };
  const addMotionClip = () => {
    if (!object) return;
    const start = timeRef.current;
    const next =
      object.motionClips.find((clip) => clip.start > start)?.start ??
      stage.duration;
    editObject({
      motionClips: [
        ...object.motionClips,
        {
          id: crypto.randomUUID(),
          start,
          duration: Math.min(2, next - start),
          motion: { preset: "walk", speed: 1, amount: 1 },
        },
      ],
    });
  };
  const updateShot = (id: string, patch: Partial<StageShot>) =>
    edit((current) => ({
      ...current,
      shots: current.shots.map((shot) =>
        shot.id === id ? { ...shot, ...patch } : shot,
      ),
    }));
  const addShot = () =>
    edit((current) => {
      const start = timeRef.current;
      const next =
        current.shots.find((shot) => shot.start > start)?.start ??
        current.duration;
      return {
        ...current,
        cameraSource: "storyboard",
        shots: [
          ...current.shots,
          {
            id: crypto.randomUUID(),
            cameraId: current.activeCameraId,
            start,
            duration: Math.min(2, next - start),
          },
        ],
      };
    });
  const addCamera = () =>
    edit((current) => {
      const id = crypto.randomUUID();
      return {
        ...current,
        activeCameraId: id,
        cameraSource: "camera",
        cameras: [
          ...current.cameras,
          {
            id,
            name: `摄像机 ${current.cameras.length + 1}`,
            pose: sampleStage(current, timeRef.current).camera,
            keyframes: [],
          },
        ],
      };
    });
  const removeCamera = () =>
    edit((current) => {
      if (current.cameras.length === 1) throw new Error("至少保留一个摄像机。");
      const id = current.activeCameraId;
      if (current.shots.some((shot) => shot.cameraId === id))
        throw new Error("此机位仍被分镜引用，请先更换或删除对应分镜。");
      const cameras = current.cameras.filter((camera) => camera.id !== id);
      return { ...current, cameras, activeCameraId: cameras[0]!.id };
    });
  const gestureEdit = useRef(edit);
  gestureEdit.current = edit;
  const shortcut = useRef(navigate);
  shortcut.current = navigate;
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        !(target instanceof HTMLElement) ||
        !target.closest(".cw-stage-dialog") ||
        target.matches(
          "input:not([type=range]),textarea,select,[contenteditable=true]",
        )
      )
        return;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
        event.preventDefault();
        event.stopPropagation();
        shortcut.current(event.shiftKey ? "redo" : "undo");
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, []);

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
    setCamera(current, sampleStage(stageRef.current, timeRef.current).camera);
    const resize = () => {
      const width = container.clientWidth;
      if (!width) return;
      const size = stageOutputSize(stageRef.current.aspectRatio);
      renderer.setSize(width, (width * size.height) / size.width, false);
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    let gestureCameraId: string | null = null;
    const orbitStart = () => {
      setPlaying(false);
      playingRef.current = false;
      gestureCameraId = sampleStage(stageRef.current, timeRef.current).cameraId;
    };
    const orbitEnd = () => {
      if (!gestureCameraId) return;
      const id = gestureCameraId;
      gestureCameraId = null;
      const pose = {
        position: vector(camera.position),
        target: vector(controls.target),
        fov: camera.fov,
      };
      gestureEdit.current((current) =>
        editStageCameraAt(current, id, timeRef.current, pose),
      );
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
  }, [stage.background, stage.grid, ready]);
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
    runtime.current.controls.enabled = renderProgress === null;
  }, [renderProgress, ready]);
  useEffect(() => {
    if (!runtime.current) return;
    const size = stageOutputSize(stage.aspectRatio);
    runtime.current.camera.aspect = size.width / size.height;
    const width = mount.current?.clientWidth ?? size.width;
    runtime.current.renderer.setSize(
      width,
      (width * size.height) / size.width,
      false,
    );
    displayPose(runtime.current, sampleStage(stage, time));
  }, [stage, time, ready]);
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
          keyframes: [],
          motionClips: [],
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
    }));
    setSelected(null);
  };
  const captureKeyframe = () =>
    edit((current) => captureStageFrame(current, timeRef.current));
  const screenshot = () => {
    const current = runtime.current;
    if (!current) throw new Error("舞台渲染器尚未就绪。");
    displayPose(current, sampleStage(stageRef.current, timeRef.current));
    current.renderer.render(current.scene, current.camera);
    return current.renderer.domElement.toDataURL("image/png");
  };
  const download = (content: string, name: string, mime: string) => {
    downloadFile(
      content.startsWith("data:")
        ? content
        : new Blob([content], { type: mime }),
      name,
    );
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
      const size = stageOutputSize(snapshot.aspectRatio);
      renderer.setSize(size.width, size.height);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      const camera = new THREE.PerspectiveCamera(
        45,
        size.width / size.height,
        0.05,
        1000,
      );
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
              poseJoints(child, object);
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
            disabled={!history.current.past.length || renderProgress !== null}
            onClick={() => navigate("undo")}
          >
            撤销
          </button>
          <button
            disabled={!history.current.future.length || renderProgress !== null}
            onClick={() => navigate("redo")}
          >
            重做
          </button>
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
      <div>
        {renderProgress !== null && (
          <div className="cw-render-status" role="status">
            <progress value={renderProgress} max={1} />
            <span>正在合成预演 {Math.round(renderProgress * 100)}%</span>
            <button onClick={() => exporting.current?.abort()}>取消合成</button>
          </div>
        )}
        {rendered && (
          <div className="cw-render-status" role="status">
            <span>
              预演 MP4 已完成 · {outputSize.width}×{outputSize.height} · 30 fps
            </span>
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
                style={{
                  aspectRatio: `${outputSize.width} / ${outputSize.height}`,
                  width: `min(100%, calc(min(55vh, 480px) * ${outputSize.width / outputSize.height}))`,
                }}
                ref={mount}
                role="img"
                aria-label="可交互的三维导演舞台"
              />
              <div className="cw-stage-transport">
                <button
                  disabled={!ready}
                  onClick={() => {
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
              <ControlSlider
                aria-label="舞台播放位置"
                min={0}
                max={stage.duration}
                step={0.01}
                value={Math.min(time, stage.duration)}
                onChange={(event) => {
                  setPlaying(false);
                  setTime(Number(event.target.value));
                }}
              />
              <div className="cw-stage-keyframes">
                {frameTimes.map((frame) => (
                  <div key={frame}>
                    <button
                      onClick={() => {
                        setPlaying(false);
                        setTime(frame);
                      }}
                    >
                      {frame.toFixed(2)}s
                    </button>
                    <button
                      aria-label={`删除 ${frame} 秒关键帧`}
                      onClick={() =>
                        edit((current) => removeStageFrame(current, frame))
                      }
                    >
                      ×
                    </button>
                  </div>
                ))}
                {!frameTimes.length && (
                  <p>
                    在起点和终点分别调整镜头或主体，然后记录关键帧即可预演。
                  </p>
                )}
              </div>
              <section className="cw-stage-storyboard">
                <h3>分镜轨道</h3>
                <button onClick={addShot}>在播放头添加当前机位</button>
                <p className="cw-domain-note">
                  镜头区间不能重叠；空白区间使用当前机位。切换“分镜硬切”可预览并导出同一镜头序列。
                </p>
                {stage.shots.map((shot, index) => (
                  <div className="cw-stage-shot" key={shot.id}>
                    <label>
                      镜头 {index + 1}
                      <select
                        aria-label={`镜头 ${index + 1} 机位`}
                        value={shot.cameraId}
                        onChange={(event) =>
                          updateShot(shot.id, { cameraId: event.target.value })
                        }
                      >
                        {stage.cameras.map((camera) => (
                          <option key={camera.id} value={camera.id}>
                            {camera.name}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label>
                      开始（秒）
                      <input
                        aria-label={`镜头 ${index + 1} 开始`}
                        type="number"
                        min={0}
                        step={0.1}
                        value={shot.start}
                        onChange={(event) =>
                          updateShot(shot.id, {
                            start: Number(event.target.value),
                          })
                        }
                      />
                    </label>
                    <label>
                      时长（秒）
                      <input
                        aria-label={`镜头 ${index + 1} 时长`}
                        type="number"
                        min={0.1}
                        step={0.1}
                        value={shot.duration}
                        onChange={(event) =>
                          updateShot(shot.id, {
                            duration: Number(event.target.value),
                          })
                        }
                      />
                    </label>
                    <button
                      onClick={() => {
                        setPlaying(false);
                        setTime(shot.start);
                        edit((current) => ({
                          ...current,
                          cameraSource: "storyboard",
                        }));
                      }}
                    >
                      定位
                    </button>
                    <button
                      onClick={() =>
                        edit((current) => ({
                          ...current,
                          shots: current.shots.filter(
                            (item) => item.id !== shot.id,
                          ),
                        }))
                      }
                    >
                      删除镜头 {index + 1}
                    </button>
                  </div>
                ))}
              </section>
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
                    <section className="cw-stage-clips">
                      <h3>角色动作片段</h3>
                      <button onClick={addMotionClip}>在播放头添加动作</button>
                      <p className="cw-domain-note">
                        每个角色的片段不能重叠；空白区间保持站立，动作从片段起点计时。
                      </p>
                      {object.motionClips.map((clip, index) => (
                        <div className="cw-stage-clip" key={clip.id}>
                          <label>
                            动作 {index + 1}
                            <select
                              aria-label={`动作 ${index + 1}`}
                              value={clip.motion.preset}
                              onChange={(event) =>
                                updateClip(clip.id, {
                                  motion: {
                                    ...clip.motion,
                                    preset: event.target
                                      .value as keyof typeof STAGE_MOTIONS,
                                  },
                                })
                              }
                            >
                              {Object.entries(STAGE_MOTIONS).map(
                                ([id, label]) => (
                                  <option key={id} value={id}>
                                    {label}
                                  </option>
                                ),
                              )}
                            </select>
                          </label>
                          <label>
                            开始（秒）
                            <input
                              aria-label={`动作 ${index + 1} 开始`}
                              type="number"
                              min={0}
                              step={0.1}
                              value={clip.start}
                              onChange={(event) =>
                                updateClip(clip.id, {
                                  start: Number(event.target.value),
                                })
                              }
                            />
                          </label>
                          <label>
                            时长（秒）
                            <input
                              aria-label={`动作 ${index + 1} 时长`}
                              type="number"
                              min={0.1}
                              step={0.1}
                              value={clip.duration}
                              onChange={(event) =>
                                updateClip(clip.id, {
                                  duration: Number(event.target.value),
                                })
                              }
                            />
                          </label>
                          <label>
                            速度
                            <input
                              aria-label={`动作 ${index + 1} 速度`}
                              type="number"
                              min={0.1}
                              step={0.1}
                              value={clip.motion.speed}
                              onChange={(event) =>
                                updateClip(clip.id, {
                                  motion: {
                                    ...clip.motion,
                                    speed: Number(event.target.value),
                                  },
                                })
                              }
                            />
                          </label>
                          <label>
                            幅度
                            <input
                              aria-label={`动作 ${index + 1} 幅度`}
                              type="range"
                              min={0}
                              max={1}
                              step={0.05}
                              value={clip.motion.amount}
                              onChange={(event) =>
                                updateClip(clip.id, {
                                  motion: {
                                    ...clip.motion,
                                    amount: Number(event.target.value),
                                  },
                                })
                              }
                            />
                          </label>
                          <button
                            onClick={() => {
                              setPlaying(false);
                              setTime(clip.start);
                            }}
                          >
                            定位
                          </button>
                          <button
                            onClick={() =>
                              editObject({
                                motionClips: object.motionClips.filter(
                                  (item) => item.id !== clip.id,
                                ),
                              })
                            }
                          >
                            删除动作 {index + 1}
                          </button>
                        </div>
                      ))}
                    </section>
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
              <h3>
                摄像机 ·{" "}
                {
                  stage.cameras.find((camera) => camera.id === sampled.cameraId)
                    ?.name
                }
              </h3>
              <label className="cw-domain-field">
                编辑机位
                <select
                  aria-label="编辑机位"
                  value={sampled.cameraId}
                  onChange={(event) =>
                    edit((current) => ({
                      ...current,
                      activeCameraId: event.target.value,
                      cameraSource: "camera",
                    }))
                  }
                >
                  {stage.cameras.map((camera) => (
                    <option value={camera.id} key={camera.id}>
                      {camera.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="cw-domain-field">
                机位名称
                <input
                  aria-label="机位名称"
                  value={
                    stage.cameras.find(
                      (camera) => camera.id === sampled.cameraId,
                    )?.name ?? ""
                  }
                  onChange={(event) =>
                    edit((current) => ({
                      ...current,
                      cameras: current.cameras.map((camera) =>
                        camera.id === sampled.cameraId
                          ? { ...camera, name: event.target.value }
                          : camera,
                      ),
                    }))
                  }
                />
              </label>
              <div className="cw-stage-camera-actions">
                <button onClick={addCamera}>复制为新机位</button>
                <button
                  disabled={
                    stage.cameras.length === 1 ||
                    stage.cameraSource === "storyboard"
                  }
                  onClick={removeCamera}
                >
                  删除当前机位
                </button>
              </div>
              <label className="cw-domain-field">
                输出画幅
                <select
                  aria-label="导演输出画幅"
                  value={stage.aspectRatio}
                  onChange={(event) =>
                    edit((current) => ({
                      ...current,
                      aspectRatio: event.target
                        .value as LocalStageDocument["aspectRatio"],
                    }))
                  }
                >
                  {STAGE_RATIOS.map((ratio) => (
                    <option key={ratio} value={ratio}>
                      {ratio}
                    </option>
                  ))}
                </select>
              </label>
              <label className="cw-domain-field">
                预览与导出来源
                <select
                  aria-label="导演镜头来源"
                  value={stage.cameraSource}
                  onChange={(event) =>
                    edit((current) => ({
                      ...current,
                      cameraSource: event.target
                        .value as LocalStageDocument["cameraSource"],
                    }))
                  }
                >
                  <option value="camera">当前机位全程</option>
                  <option value="storyboard">分镜硬切</option>
                </select>
              </label>
              <VectorFields
                label="机位"
                value={cameraValue.position}
                onChange={(position) => editCamera({ position })}
              />
              <VectorFields
                label="目标"
                value={cameraValue.target}
                onChange={(target) => editCamera({ target })}
              />
              <label className="cw-domain-field">
                焦距（35mm 胶片，16:9 等效）
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={Number(focalLength(cameraValue.fov).toFixed(1))}
                  onChange={(event) => {
                    const focal = Number(event.target.value);
                    if (focal > 0) editCamera({ fov: fovFromFocal(focal) });
                  }}
                />
              </label>
              <label className="cw-domain-field">
                垂直视角 {cameraValue.fov.toFixed(1)}°
                <input
                  type="range"
                  min={10}
                  max={120}
                  step={0.1}
                  value={cameraValue.fov}
                  onChange={(event) =>
                    editCamera({ fov: Number(event.target.value) })
                  }
                />
              </label>
              <button
                onClick={() => {
                  setSelected(null);
                  editCamera(defaultStageCamera());
                }}
              >
                重置镜头
              </button>
            </aside>
          </div>
          <p className="cw-domain-note">
            修改机位或主体会写入当前时间的关键帧；预览、截图与 MP4
            共用画幅和采样。支持分镜硬切、分段关节动作和 30 fps MP4 导出。外部
            FBX/GLB 蒙皮角色与云端导演版本尚未接入。
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
      </div>
    </EditorModal>
  );
}
export default DirectorStage;
