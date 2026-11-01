import n from "Ut";
export function g(e) {
  if (e) {
    const t = new n.DAImageReqOutPaintingUpScale();
    t.top = e.top;
    t.bottom = e.bottom;
    t.left = e.left;
    t.right = e.right;
    t.maxSize = e.maxSize;
    t.imageRatio = e.imageRatio;
    return t;
  }
}
export function r(e) {
  let t;
  let i;
  let n;
  let a;
  let o;
  if (e) {
    return {
      top: (t = e.top) != null ? t : 0,
      bottom: (i = e.bottom) != null ? i : 0,
      left: (n = e.left) != null ? n : 0,
      right: (a = e.right) != null ? a : 0,
      maxSize: (o = e.maxSize) != null ? o : 0,
      imageRatio: e.imageRatio,
    };
  }
}
