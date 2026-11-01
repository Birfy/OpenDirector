import n from "Ut";
export function C(e) {
  if (e) {
    const t = new n.DAVideoGenV2VLabSr();
    t.enable = true;
    t.srFps = e.srFps;
    t.srDurationMs = e.srDurationMs;
    return t;
  }
}
function o(e) {
  let t;
  let i;
  let n;
  if (e) {
    return {
      enable: (t = e.enable) != null && t,
      srFps: Number((i = e.srFps) != null ? i : 0),
      srDurationMs: Number((n = e.srDurationMs) != null ? n : 0),
    };
  }
}
export { o as n };
