import i from "TA";
import a from "IRw";
export function r8(resolutionUrlMap, t) {
  let r;
  if (
    (r = i.HM({
      width: 522,
      height: 294,
      resolutionUrlMap,
    })) != null
  ) {
    return r;
  }
  return t;
}
export function ub(e) {
  return (e.type === "image" && e.cardCoverUrl) || e.coverUrl;
}
export function $m(e) {
  const t = e.type === "video" ? a.ID(e) : e.url;
  return r8(a.ES(e), t);
}
