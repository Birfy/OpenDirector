import n from "Ut";
export function S(e) {
  if (e) {
    const t = new n.DAVideoGenV2VExtend();
    t.enable = true;
    t.extendDurationMs = e.extendDurationMs;
    t.extendFps = e.extendFps;
    t.extendPrompt = e.extendPrompt;
    return t;
  }
}
export function r(e) {
  let t;
  let i;
  let n;
  let a;
  if (e) {
    return {
      enable: (t = e.enable) != null && t,
      extendDurationMs: Number((i = e.extendDurationMs) != null ? i : 0),
      extendFps: Number((n = e.extendFps) != null ? n : 0),
      extendPrompt: (a = e.extendPrompt) != null ? a : "",
    };
  }
}
