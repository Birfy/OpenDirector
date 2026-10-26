import a from "yMd";
export function $t(e) {
  if (e) {
    return e.includes(a.Mt.Video);
  }
}
export function Ue(e) {
  let t;
  let n;
  let a;
  let i;
  const hasInputVideo =
    (t = (n = e.hasInputVideo) != null ? n : $t(e.materialTypes)) != null
      ? t
      : ((a = e.inputVideoDuration) != null ? a : 0) > 0 || undefined;
  return {
    isLongVideo: e.isLongVideo === true,
    hasInputVideo,
    inputDurationForCharge:
      hasInputVideo === true && (i = e.inputVideoDuration) != null ? i : 0,
  };
}
export function Ge(e) {
  let t;
  let n;
  return (
    ((t =
      e == null || (n = e.resolutionPriceConfigs) == null
        ? undefined
        : n.length) != null
      ? t
      : 0) > 0
  );
}
export function Ld(e) {
  if (e.chargeInputVideoDuration) {
    return e.videoDuration + Ue(e).inputDurationForCharge;
  }
  return e.videoDuration;
}
