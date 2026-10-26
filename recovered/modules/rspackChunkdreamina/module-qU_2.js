import n from "Ut";
export function k(e) {
  if (e) {
    const t = new n.DAVideoGenV2VInsertFrame();
    t.enable = true;
    t.targetFps = e.targetFps;
    t.originFps = e.originFps;
    t.durationMs = e.durationMs;
    return t;
  }
}
export function X(e) {
  let t;
  let i;
  let n;
  let a;
  if (e) {
    return {
      enable: (t = e.enable) != null && t,
      targetFps: Number((i = e.targetFps) != null ? i : 0),
      originFps: Number((n = e.originFps) != null ? n : 0),
      durationMs: (a = e.durationMs) != null ? a : 0,
    };
  }
}
