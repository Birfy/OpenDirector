import { parseStageMotion, type StageMotion } from "./stageMotion.ts";

/** Local previsualization format. V1 is migrated here, never in consumers. */
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
export interface StageTransformFrame {
  id: string;
  time: number;
  value: StageTransform;
}
export interface StageMotionClip {
  id: string;
  start: number;
  duration: number;
  motion: StageMotion;
}
export interface StageObject extends StageTransform {
  id: string;
  kind: "person" | "box" | "sphere";
  name: string;
  color: string;
  keyframes: StageTransformFrame[];
  motionClips: StageMotionClip[];
}
export interface StageCamera {
  position: Vector3Value;
  target: Vector3Value;
  fov: number;
}
export interface StageCameraRig {
  id: string;
  name: string;
  pose: StageCamera;
  keyframes: { id: string; time: number; value: StageCamera }[];
}
export interface StageShot {
  id: string;
  cameraId: string;
  start: number;
  duration: number;
}
export const STAGE_RATIOS = ["16:9", "9:16", "1:1", "4:3", "3:4"] as const;
export interface LocalStageDocument {
  format: "opendirector-local-stage";
  version: 2;
  background: string;
  grid: boolean;
  duration: number;
  aspectRatio: (typeof STAGE_RATIOS)[number];
  cameras: StageCameraRig[];
  activeCameraId: string;
  cameraSource: "camera" | "storyboard";
  shots: StageShot[];
  objects: StageObject[];
}
export interface StageSampleObject extends StageObject {
  motion?: StageMotion;
  motionTime: number;
}
export interface StageSample {
  camera: StageCamera;
  cameraId: string;
  objects: StageSampleObject[];
}
const record = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);
const finite = (v: unknown): v is number =>
  typeof v === "number" && Number.isFinite(v);
const vector = (v: unknown): v is Vector3Value =>
  record(v) && finite(v.x) && finite(v.y) && finite(v.z);
const nonempty = (v: unknown): v is string =>
  typeof v === "string" && !!v.trim();
const color = (v: unknown): v is string =>
  typeof v === "string" && /^#[0-9a-f]{6}$/i.test(v);
const sameVector = (a: Vector3Value, b: Vector3Value) =>
  a.x === b.x && a.y === b.y && a.z === b.z;
function parseTransform(v: unknown): StageTransform {
  if (
    !record(v) ||
    !vector(v.position) ||
    !vector(v.rotation) ||
    !vector(v.scale) ||
    v.scale.x <= 0 ||
    v.scale.y <= 0 ||
    v.scale.z <= 0
  )
    throw new Error("舞台对象的位置、旋转或缩放无效。");
  return {
    position: { ...v.position },
    rotation: { ...v.rotation },
    scale: { ...v.scale },
  };
}
function parseCamera(v: unknown): StageCamera {
  if (
    !record(v) ||
    !vector(v.position) ||
    !vector(v.target) ||
    !finite(v.fov) ||
    v.fov <= 0 ||
    v.fov >= 180 ||
    sameVector(v.position, v.target)
  )
    throw new Error("摄像机位置、目标或视角无效。");
  return { position: { ...v.position }, target: { ...v.target }, fov: v.fov };
}
export function defaultStageCamera(): StageCamera {
  return {
    position: { x: 5, y: 3.5, z: 7 },
    target: { x: 0, y: 1, z: 0 },
    fov: 45,
  };
}
export function createLocalStage(): LocalStageDocument {
  return {
    format: "opendirector-local-stage",
    version: 2,
    background: "#151923",
    grid: true,
    duration: 6,
    aspectRatio: "16:9",
    cameras: [
      {
        id: "camera-1",
        name: "摄像机 1",
        pose: defaultStageCamera(),
        keyframes: [],
      },
    ],
    activeCameraId: "camera-1",
    cameraSource: "camera",
    shots: [],
    objects: [
      {
        id: crypto.randomUUID(),
        kind: "person",
        name: "人物 1",
        color: "#a09af9",
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
        keyframes: [],
        motionClips: [],
      },
    ],
  };
}
function frames<T>(
  raw: unknown,
  duration: number,
  parse: (v: unknown) => T,
): { id: string; time: number; value: T }[] {
  if (!Array.isArray(raw)) throw new Error("关键帧列表无效。");
  const ids = new Set<string>(),
    times = new Set<number>();
  return raw
    .map((v) => {
      if (
        !record(v) ||
        !nonempty(v.id) ||
        ids.has(v.id) ||
        !finite(v.time) ||
        v.time < 0 ||
        v.time > duration ||
        times.has(v.time)
      )
        throw new Error("关键帧标识或时间无效，帧时间不能重复。");
      ids.add(v.id);
      times.add(v.time);
      return { id: v.id, time: v.time, value: parse(v.value) };
    })
    .sort((a, b) => a.time - b.time);
}
function intervals<T extends { id: string; start: number; duration: number }>(
  items: T[],
  duration: number,
  label: string,
): T[] {
  const ids = new Set<string>();
  const sorted = items.sort((a, b) => a.start - b.start);
  for (const [i, v] of sorted.entries()) {
    if (
      !nonempty(v.id) ||
      ids.has(v.id) ||
      !finite(v.start) ||
      !finite(v.duration) ||
      v.start < 0 ||
      v.duration <= 0 ||
      v.start + v.duration > duration + 1e-8
    )
      throw new Error(`${label}标识或区间无效，不能超出舞台时长。`);
    if (i && sorted[i - 1]!.start + sorted[i - 1]!.duration > v.start + 1e-8)
      throw new Error(`${label}区间不能重叠。`);
    ids.add(v.id);
  }
  return sorted;
}
function migrateV1(v: Record<string, unknown>): Record<string, unknown> {
  if (
    !Array.isArray(v.objects) ||
    !Array.isArray(v.keyframes) ||
    !finite(v.duration)
  )
    throw new Error("旧舞台文档无效。");
  const objectIds = new Set(
    v.objects.map((o) => (record(o) ? o.id : undefined)),
  );
  const legacy = frames(
    v.keyframes.map((f) => (record(f) ? { ...f, value: f } : f)),
    v.duration,
    (f) => {
      if (!record(f) || !Array.isArray(f.objects))
        throw new Error("旧舞台关键帧无效。");
      const ids = new Set();
      return {
        camera: parseCamera(f.camera),
        objects: f.objects.map((o) => {
          if (!record(o) || !objectIds.has(o.id) || ids.has(o.id))
            throw new Error("关键帧引用了缺失或重复的舞台对象。");
          ids.add(o.id);
          return { id: o.id, transform: parseTransform(o.transform) };
        }),
      };
    },
  );
  return {
    ...v,
    version: 2,
    aspectRatio: "16:9",
    activeCameraId: "camera-1",
    cameraSource: "camera",
    shots: [],
    cameras: [
      {
        id: "camera-1",
        name: "摄像机 1",
        pose: parseCamera(v.camera),
        keyframes: legacy.map((f) => ({
          id: f.id,
          time: f.time,
          value: f.value.camera,
        })),
      },
    ],
    objects: v.objects.map((o) => {
      if (!record(o)) throw new Error("旧舞台对象无效。");
      if (o.motion !== undefined && o.kind !== "person")
        throw new Error("只有人物支持关节动作。");
      return {
        ...o,
        keyframes: legacy.map((f) => ({
          id: f.id,
          time: f.time,
          value:
            f.value.objects.find((item) => item.id === o.id)?.transform ??
            parseTransform(o),
        })),
        motionClips:
          o.motion === undefined
            ? []
            : [
                {
                  id: `legacy-${String(o.id)}`,
                  start: 0,
                  duration: v.duration,
                  motion: o.motion,
                },
              ],
      };
    }),
  };
}
export function parseLocalStageValue(input: unknown): LocalStageDocument {
  let v = input;
  if (record(v) && v.format === "opendirector-local-stage" && v.version === 1)
    v = migrateV1(v);
  if (
    !record(v) ||
    v.format !== "opendirector-local-stage" ||
    v.version !== 2 ||
    !color(v.background) ||
    typeof v.grid !== "boolean" ||
    !finite(v.duration) ||
    v.duration <= 0 ||
    !Array.isArray(v.objects) ||
    !Array.isArray(v.cameras) ||
    !Array.isArray(v.shots) ||
    !STAGE_RATIOS.includes(
      v.aspectRatio as LocalStageDocument["aspectRatio"],
    ) ||
    !["camera", "storyboard"].includes(String(v.cameraSource))
  )
    throw new Error("本地导演预演格式无效。");
  const duration = v.duration,
    ids = new Set<string>(),
    cameraIds = new Set<string>();
  const objects: StageObject[] = v.objects.map((o) => {
    if (
      !record(o) ||
      !nonempty(o.id) ||
      ids.has(o.id) ||
      !["person", "box", "sphere"].includes(String(o.kind)) ||
      typeof o.name !== "string" ||
      !color(o.color) ||
      !Array.isArray(o.motionClips)
    )
      throw new Error("舞台对象 ID、类型或颜色无效。");
    ids.add(o.id);
    if (o.kind !== "person" && o.motionClips.length)
      throw new Error("只有人物支持关节动作。");
    return {
      id: o.id,
      kind: o.kind as StageObject["kind"],
      name: o.name,
      color: o.color,
      ...parseTransform(o),
      keyframes: frames(o.keyframes, duration, parseTransform),
      motionClips: intervals(
        o.motionClips.map((c) => {
          if (!record(c)) throw new Error("动作片段无效。");
          return {
            id: c.id as string,
            start: c.start as number,
            duration: c.duration as number,
            motion: parseStageMotion(c.motion),
          };
        }),
        duration,
        "动作片段",
      ),
    };
  });
  const cameras: StageCameraRig[] = v.cameras.map((c) => {
    if (
      !record(c) ||
      !nonempty(c.id) ||
      cameraIds.has(c.id) ||
      typeof c.name !== "string"
    )
      throw new Error("摄像机标识无效。");
    cameraIds.add(c.id);
    return {
      id: c.id,
      name: c.name,
      pose: parseCamera(c.pose),
      keyframes: frames(c.keyframes, duration, parseCamera),
    };
  });
  if (!cameras.length || !cameraIds.has(v.activeCameraId as string))
    throw new Error("至少保留一个摄像机，当前摄像机必须存在。");
  const shots = intervals(
    v.shots.map((s) => {
      if (!record(s) || !cameraIds.has(s.cameraId as string))
        throw new Error("分镜引用了不存在的摄像机。");
      return {
        id: s.id as string,
        cameraId: s.cameraId as string,
        start: s.start as number,
        duration: s.duration as number,
      };
    }),
    duration,
    "分镜",
  );
  return {
    format: "opendirector-local-stage",
    version: 2,
    background: v.background,
    grid: v.grid,
    duration,
    aspectRatio: v.aspectRatio as LocalStageDocument["aspectRatio"],
    activeCameraId: v.activeCameraId as string,
    cameraSource: v.cameraSource as LocalStageDocument["cameraSource"],
    objects,
    cameras,
    shots,
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
const sameFrames = <T>(
  a: { id: string; time: number; value: T }[],
  b: { id: string; time: number; value: T }[],
  same: (a: T, b: T) => boolean,
) =>
  a.length === b.length &&
  a.every(
    (f, i) =>
      f.id === b[i]!.id && f.time === b[i]!.time && same(f.value, b[i]!.value),
  );
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
      a.aspectRatio === b.aspectRatio &&
      a.activeCameraId === b.activeCameraId &&
      a.cameraSource === b.cameraSource &&
      a.objects.length === b.objects.length &&
      a.objects.every((o, i) => {
        const p = b.objects[i]!;
        return (
          o.id === p.id &&
          o.name === p.name &&
          o.kind === p.kind &&
          o.color === p.color &&
          sameTransform(o, p) &&
          sameFrames(o.keyframes, p.keyframes, sameTransform) &&
          o.motionClips.length === p.motionClips.length &&
          o.motionClips.every((c, j) => {
            const d = p.motionClips[j]!;
            return (
              c.id === d.id &&
              c.start === d.start &&
              c.duration === d.duration &&
              c.motion.preset === d.motion.preset &&
              c.motion.amount === d.motion.amount &&
              c.motion.speed === d.motion.speed
            );
          })
        );
      }) &&
      a.cameras.length === b.cameras.length &&
      a.cameras.every((c, i) => {
        const d = b.cameras[i]!;
        return (
          c.id === d.id &&
          c.name === d.name &&
          sameCamera(c.pose, d.pose) &&
          sameFrames(c.keyframes, d.keyframes, sameCamera)
        );
      }) &&
      a.shots.length === b.shots.length &&
      a.shots.every((s, i) => {
        const t = b.shots[i]!;
        return (
          s.id === t.id &&
          s.cameraId === t.cameraId &&
          s.start === t.start &&
          s.duration === t.duration
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
function sample<T>(
  base: T,
  frames: { time: number; value: T }[],
  time: number,
  mix: (a: T, b: T, t: number) => T,
): T {
  if (!frames.length) return base;
  const left = [...frames].reverse().find((f) => f.time <= time) ?? frames[0]!,
    right = frames.find((f) => f.time >= time) ?? frames.at(-1)!;
  return mix(
    left.value,
    right.value,
    left.time === right.time
      ? 0
      : (time - left.time) / (right.time - left.time),
  );
}
export function sampleStageCamera(
  stage: LocalStageDocument,
  id: string,
  time: number,
): StageCamera {
  const c = stage.cameras.find((c) => c.id === id);
  if (!c) throw new Error("摄像机不存在。");
  return sample(c.pose, c.keyframes, time, (a, b, t) => ({
    position: mixVector(a.position, b.position, t),
    target: mixVector(a.target, b.target, t),
    fov: lerp(a.fov, b.fov, t),
  }));
}
/** Same global timeline and half-open cut boundaries for editor, screenshots and MP4. */
export function sampleStage(
  stage: LocalStageDocument,
  time: number,
): StageSample {
  const at = Math.max(0, Math.min(stage.duration, time));
  const shot =
    stage.cameraSource === "storyboard"
      ? stage.shots.find(
          (s) =>
            at >= s.start &&
            (at < s.start + s.duration ||
              (at === stage.duration && at === s.start + s.duration)),
        )
      : undefined;
  const cameraId = shot?.cameraId ?? stage.activeCameraId;
  return {
    cameraId,
    camera: sampleStageCamera(stage, cameraId, at),
    objects: stage.objects.map((o) => {
      const transform = sample<StageTransform>(
        o,
        o.keyframes,
        at,
        (a, b, t) => ({
          position: mixVector(a.position, b.position, t),
          rotation: mixVector(a.rotation, b.rotation, t),
          scale: mixVector(a.scale, b.scale, t),
        }),
      );
      const clip = o.motionClips.find(
        (c) =>
          at >= c.start &&
          (at < c.start + c.duration ||
            (at === stage.duration && at === c.start + c.duration)),
      );
      return {
        ...o,
        ...transform,
        motion: clip?.motion,
        motionTime: clip ? at - clip.start : 0,
      };
    }),
  };
}
const putFrame = <T>(
  frames: { id: string; time: number; value: T }[],
  time: number,
  value: T,
) =>
  [
    ...frames.filter((f) => f.time !== time),
    {
      id: frames.find((f) => f.time === time)?.id ?? crypto.randomUUID(),
      time,
      value,
    },
  ].sort((a, b) => a.time - b.time);
function authorFrame<T>(
  frames: { id: string; time: number; value: T }[],
  time: number,
  value: T,
  base: T,
) {
  // The first edit later in time must not retroactively replace the opening pose.
  return putFrame(
    !frames.length && time > 0 ? putFrame([], 0, base) : frames,
    time,
    value,
  );
}
export function editStageObjectAt(
  stage: LocalStageDocument,
  id: string,
  time: number,
  patch: Partial<StageObject>,
): LocalStageDocument {
  const pose = sampleStage(stage, time).objects.find((o) => o.id === id);
  if (!pose) return stage;
  const transform = parseTransform({ ...pose, ...patch });
  const {
    position: _position,
    rotation: _rotation,
    scale: _scale,
    ...metadata
  } = patch;
  const changesTransform =
    !!(patch.position || patch.rotation || patch.scale) &&
    !sameTransform(pose, transform);
  return parseLocalStageValue({
    ...stage,
    objects: stage.objects.map((o) =>
      o.id !== id
        ? o
        : {
            ...o,
            ...metadata,
            ...(changesTransform ? transform : {}),
            keyframes: changesTransform
              ? authorFrame(o.keyframes, time, transform, parseTransform(o))
              : o.keyframes,
          },
    ),
  });
}
export function editStageCameraAt(
  stage: LocalStageDocument,
  id: string,
  time: number,
  patch: Partial<StageCamera>,
): LocalStageDocument {
  const current = sampleStageCamera(stage, id, time);
  const pose = parseCamera({ ...current, ...patch });
  if (sameCamera(current, pose)) return stage;
  return parseLocalStageValue({
    ...stage,
    cameras: stage.cameras.map((c) =>
      c.id !== id
        ? c
        : {
            ...c,
            pose,
            keyframes: authorFrame(c.keyframes, time, pose, c.pose),
          },
    ),
  });
}
export function captureStageFrame(
  stage: LocalStageDocument,
  time: number,
): LocalStageDocument {
  const pose = sampleStage(stage, time);
  return parseLocalStageValue({
    ...stage,
    objects: stage.objects.map((o) => ({
      ...o,
      keyframes: putFrame(
        o.keyframes,
        time,
        parseTransform(pose.objects.find((p) => p.id === o.id)!),
      ),
    })),
    cameras: stage.cameras.map((c) =>
      c.id === pose.cameraId
        ? { ...c, keyframes: putFrame(c.keyframes, time, pose.camera) }
        : c,
    ),
  });
}
export function stageFrameTimes(stage: LocalStageDocument): number[] {
  return [
    ...new Set([
      ...stage.objects.flatMap((o) => o.keyframes.map((f) => f.time)),
      ...stage.cameras.flatMap((c) => c.keyframes.map((f) => f.time)),
    ]),
  ].sort((a, b) => a - b);
}
export function removeStageFrame(
  stage: LocalStageDocument,
  time: number,
): LocalStageDocument {
  return {
    ...stage,
    objects: stage.objects.map((o) => ({
      ...o,
      keyframes: o.keyframes.filter((f) => f.time !== time),
    })),
    cameras: stage.cameras.map((c) => ({
      ...c,
      keyframes: c.keyframes.filter((f) => f.time !== time),
    })),
  };
}
export function stageOutputSize(ratio: LocalStageDocument["aspectRatio"]): {
  width: number;
  height: number;
} {
  const [w, h] = ratio.split(":").map(Number);
  return {
    width: Math.round((1280 * w!) / Math.max(w!, h!) / 2) * 2,
    height: Math.round((1280 * h!) / Math.max(w!, h!) / 2) * 2,
  };
}
