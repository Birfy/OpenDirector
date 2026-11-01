import a from "XJB";
export function Z(e, t) {
  let i;
  let n;
  const r = {};
  const { imageRatio } = t;
  r.ratio = (
    (i =
      (n = a.dv.find((e) => e.type === imageRatio)) == null
        ? undefined
        : n.value) != null
      ? i
      : 1
  ).toString();
  e.setParams(r);
}
