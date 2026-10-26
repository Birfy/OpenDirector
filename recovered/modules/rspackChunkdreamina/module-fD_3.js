import n from "Ut";
export function x(e) {
  if (e) {
    const t = new n.DAVideoGenV2VSuperResolution();
    t.enable = true;
    t.targetHeight = e.targetHeight;
    t.targetWidth = e.targetWidth;
    t.originWidth = e.originWidth;
    t.originHeight = e.originHeight;
    t.resolution = e.resolution;
    t.aigcSr = e.aigcSr;
    return t;
  }
}
export function K(e) {
  let t;
  let i;
  let n;
  let a;
  let o;
  let r;
  let l;
  if (e) {
    return {
      enable: (t = e.enable) != null && t,
      targetWidth: Number((i = e.targetWidth) != null ? i : 0),
      targetHeight: Number((n = e.targetHeight) != null ? n : 0),
      originWidth: Number((a = e.originWidth) != null ? a : 0),
      originHeight: Number((o = e.originHeight) != null ? o : 0),
      resolution: (l = e.resolution) === "2K" || l === "4K" ? l : undefined,
      aigcSr: !!((r = e.aigcSr) != null && r),
    };
  }
}
