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

export interface DirectorStageProps {
  node: CanvasNode;
  onApply: (stage: LocalStageDocument, screenshot?: string) => void;
  onClose: () => void;
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
    add(new THREE.SphereGeometry(0.22, 24, 16), 0, 1.68, 0);
    add(new THREE.CylinderGeometry(0.25, 0.19, 0.62, 16), 0, 1.13, 0);
    add(new THREE.CapsuleGeometry(0.085, 0.54, 6, 12), -0.13, 0.42, 0);
    add(new THREE.CapsuleGeometry(0.085, 0.54, 6, 12), 0.13, 0.42, 0);
    add(new THREE.CapsuleGeometry(0.065, 0.49, 6, 12), -0.32, 1.09, 0);
    add(new THREE.CapsuleGeometry(0.065, 0.49, 6, 12), 0.32, 1.09, 0);
  }
  applyTransform(group, value);
  return group;
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
) {
  setCamera(runtime, pose.camera);
  for (const child of runtime.root.children) {
    const data = pose.objects.find(
      (item) => item.id === child.userData.objectId,
    );
    if (data) applyTransform(child, data);
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

export function DirectorStage({ node, onApply, onClose }: DirectorStageProps) {
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
    let start: { x: number; y: number } | null = null;
    const pointerDown = (event: PointerEvent) => {
      start = { x: event.clientX, y: event.clientY };
    };
    const pointerUp = (event: PointerEvent) => {
      if (
        !start ||
        Math.hypot(event.clientX - start.x, event.clientY - start.y) > 4
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
      setReady(false);
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.removeEventListener("start", orbitStart);
      controls.removeEventListener("end", orbitEnd);
      controls.dispose();
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
    if (!preview || !runtime.current) return;
    displayPose(runtime.current, sampleStage(stage, time));
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
      disabled={node.locked}
      error={error}
      actions={
        <>
          <button onClick={() => importInput.current?.click()}>
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
        </>
      }
    >
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
                edit((current) => ({ ...current, grid: event.target.checked }))
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
              disabled={!ready || !stage.keyframes.length}
              onClick={() => {
                setPreview(true);
                if (time >= stage.duration) setTime(0);
                setPlaying((current) => !current);
              }}
            >
              {playing ? "暂停" : "播放关键帧"}
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
                  onChange={(event) => editObject({ name: event.target.value })}
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
        渲染。基础几何体可直接编辑；原站 FBX
        角色资产、云端导演版本和视频渲染服务尚未恢复。
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
    </EditorModal>
  );
}
export default DirectorStage;
