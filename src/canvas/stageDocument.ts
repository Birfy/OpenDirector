/** Authored local 3D previsualization format; not the original director-stage cloud schema. */
export interface Vector3Value {
  x: number;
  y: number;
  z: number;
}
export interface StageTransform {
  position: Vector3Value;
  rotation: Vector3Value;
  scale: Vector3Value;
}
export interface StageObject extends StageTransform {
  id: string;
  kind: "person" | "box" | "sphere";
  name: string;
  color: string;
}
export interface StageCamera {
  position: Vector3Value;
  target: Vector3Value;
  fov: number;
}
export interface StageKeyframe {
  id: string;
  time: number;
  camera: StageCamera;
  objects: { id: string; transform: StageTransform }[];
}
export interface LocalStageDocument {
  format: "museshow-local-stage";
  version: 1;
  background: string;
  grid: boolean;
  duration: number;
  camera: StageCamera;
  objects: StageObject[];
  keyframes: StageKeyframe[];
}
const record = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const finite = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value);
const vector = (value: unknown): value is Vector3Value =>
  record(value) && finite(value.x) && finite(value.y) && finite(value.z);
const nonempty = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;
const color = (value: unknown): value is string =>
  typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
const copyVector = (value: Vector3Value): Vector3Value => ({
  x: value.x,
  y: value.y,
  z: value.z,
});
const sameVector = (a: Vector3Value, b: Vector3Value) =>
  a === b || (a.x === b.x && a.y === b.y && a.z === b.z);
function parseTransform(value: unknown): StageTransform {
  if (
    !record(value) ||
    !vector(value.position) ||
    !vector(value.rotation) ||
    !vector(value.scale) ||
    value.scale.x <= 0 ||
    value.scale.y <= 0 ||
    value.scale.z <= 0
  )
    throw new Error("舞台对象的位置、旋转或缩放无效。");
  return {
    position: copyVector(value.position),
    rotation: copyVector(value.rotation),
    scale: copyVector(value.scale),
  };
}
function parseCamera(value: unknown): StageCamera {
  if (
    !record(value) ||
    !vector(value.position) ||
    !vector(value.target) ||
    !finite(value.fov) ||
    value.fov <= 0 ||
    value.fov >= 180 ||
    sameVector(value.position, value.target)
  )
    throw new Error("摄像机位置、目标或视角无效。");
  return {
    position: copyVector(value.position),
    target: copyVector(value.target),
    fov: value.fov,
  };
}
export function createLocalStage(): LocalStageDocument {
  return {
    format: "museshow-local-stage",
    version: 1,
    background: "#151923",
    grid: true,
    duration: 6,
    camera: {
      position: { x: 5, y: 3.5, z: 7 },
      target: { x: 0, y: 1, z: 0 },
      fov: 45,
    },
    objects: [
      {
        id: crypto.randomUUID(),
        kind: "person",
        name: "人物 1",
        color: "#a09af9",
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      },
    ],
    keyframes: [],
  };
}
export function parseLocalStageValue(value: unknown): LocalStageDocument {
  if (
    !record(value) ||
    value.format !== "museshow-local-stage" ||
    value.version !== 1 ||
    !color(value.background) ||
    typeof value.grid !== "boolean" ||
    !finite(value.duration) ||
    value.duration <= 0 ||
    !Array.isArray(value.objects) ||
    !Array.isArray(value.keyframes)
  )
    throw new Error("本地导演预演格式无效。");
  const ids = new Set<string>(),
    frameIds = new Set<string>(),
    times = new Set<number>();
  const objects: StageObject[] = value.objects.map((raw) => {
    if (
      !record(raw) ||
      !nonempty(raw.id) ||
      ids.has(raw.id) ||
      !["person", "box", "sphere"].includes(
        typeof raw.kind === "string" ? raw.kind : "",
      ) ||
      typeof raw.name !== "string" ||
      !color(raw.color)
    )
      throw new Error("舞台对象 ID、类型或颜色无效。");
    ids.add(raw.id);
    return {
      id: raw.id,
      kind: raw.kind as StageObject["kind"],
      name: raw.name,
      color: raw.color,
      ...parseTransform(raw),
    };
  });
  const keyframes: StageKeyframe[] = value.keyframes.map((raw) => {
    if (
      !record(raw) ||
      !nonempty(raw.id) ||
      frameIds.has(raw.id) ||
      !finite(raw.time) ||
      raw.time < 0 ||
      raw.time > (value.duration as number) ||
      times.has(raw.time) ||
      !Array.isArray(raw.objects)
    )
      throw new Error("关键帧标识或时间无效，帧时间不能重复。");
    frameIds.add(raw.id);
    times.add(raw.time);
    const seen = new Set<string>();
    return {
      id: raw.id,
      time: raw.time,
      camera: parseCamera(raw.camera),
      objects: raw.objects.map((item) => {
        if (
          !record(item) ||
          !nonempty(item.id) ||
          !ids.has(item.id) ||
          seen.has(item.id)
        )
          throw new Error("关键帧引用了缺失或重复的舞台对象。");
        seen.add(item.id);
        return { id: item.id, transform: parseTransform(item.transform) };
      }),
    };
  });
  return {
    format: "museshow-local-stage",
    version: 1,
    background: value.background,
    grid: value.grid,
    duration: value.duration,
    camera: parseCamera(value.camera),
    objects,
    keyframes: keyframes.sort((a, b) => a.time - b.time),
  };
}
const sameTransform = (a: StageTransform, b: StageTransform) =>
  sameVector(a.position, b.position) &&
  sameVector(a.rotation, b.rotation) &&
  sameVector(a.scale, b.scale);
const sameCamera = (a: StageCamera, b: StageCamera) =>
  sameVector(a.position, b.position) &&
  sameVector(a.target, b.target) &&
  a.fov === b.fov;
export function sameLocalStage(
  a: LocalStageDocument | undefined,
  b: LocalStageDocument | undefined,
): boolean {
  return (
    a === b ||
    (!!a &&
      !!b &&
      a.background === b.background &&
      a.grid === b.grid &&
      a.duration === b.duration &&
      sameCamera(a.camera, b.camera) &&
      a.objects.length === b.objects.length &&
      a.objects.every((object, index) => {
        const other = b.objects[index]!;
        return (
          object.id === other.id &&
          object.kind === other.kind &&
          object.name === other.name &&
          object.color === other.color &&
          sameTransform(object, other)
        );
      }) &&
      a.keyframes.length === b.keyframes.length &&
      a.keyframes.every((frame, index) => {
        const other = b.keyframes[index]!;
        return (
          frame.id === other.id &&
          frame.time === other.time &&
          sameCamera(frame.camera, other.camera) &&
          frame.objects.length === other.objects.length &&
          frame.objects.every(
            (object, index) =>
              object.id === other.objects[index]!.id &&
              sameTransform(object.transform, other.objects[index]!.transform),
          )
        );
      }))
  );
}
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const mixVector = (
  a: Vector3Value,
  b: Vector3Value,
  t: number,
): Vector3Value => ({
  x: lerp(a.x, b.x, t),
  y: lerp(a.y, b.y, t),
  z: lerp(a.z, b.z, t),
});
export function sampleStage(
  stage: LocalStageDocument,
  time: number,
): Pick<LocalStageDocument, "camera" | "objects"> {
  if (!stage.keyframes.length)
    return { camera: stage.camera, objects: stage.objects };
  const frames = [...stage.keyframes].sort((a, b) => a.time - b.time),
    left =
      [...frames].reverse().find((frame) => frame.time <= time) ?? frames[0]!,
    right = frames.find((frame) => frame.time >= time) ?? frames.at(-1)!;
  const t =
    left.time === right.time
      ? 0
      : Math.max(0, Math.min(1, (time - left.time) / (right.time - left.time)));
  return {
    camera: {
      position: mixVector(left.camera.position, right.camera.position, t),
      target: mixVector(left.camera.target, right.camera.target, t),
      fov: lerp(left.camera.fov, right.camera.fov, t),
    },
    objects: stage.objects.map((object) => {
      const a =
          left.objects.find((item) => item.id === object.id)?.transform ??
          object,
        b =
          right.objects.find((item) => item.id === object.id)?.transform ??
          object;
      return {
        ...object,
        position: mixVector(a.position, b.position, t),
        rotation: mixVector(a.rotation, b.rotation, t),
        scale: mixVector(a.scale, b.scale, t),
      };
    }),
  };
}
