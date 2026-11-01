import r from "cV2";
export function E(e, t) {
  let i;
  let o = Infinity;
  e.forEach((e) => {
    var n = r.x(e);
    if (n) {
      var a = Math.abs(t - n.width / n.height);
      if (a < o) {
        i = e;
        o = a;
      }
    }
  });
  return i;
}
