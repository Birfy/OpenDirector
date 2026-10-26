import r from "XJB";
export function Z(e, t) {
  let i;
  let n;
  const a = {};
  const { imageRatio } = t;
  a.ratio = (
    (i =
      (n = r.dv.find((e) => e.type === imageRatio)) == null
        ? undefined
        : n.value) != null
      ? i
      : 1
  ).toString();
  e.setParams(a);
}
