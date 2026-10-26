const r = typeof window === "undefined" ? global : window;
var r_requestAnimationFrame = r.requestAnimationFrame;
export { r_requestAnimationFrame as e };
export var N = r.cancelAnimationFrame;
if (
  (!r_requestAnimationFrame || !N) &&
  (["webkit", "ms", "moz", "o"].some((e) => {
    r_requestAnimationFrame = r[e + "RequestAnimationFrame"];
    N = r[e + "CancelAnimationFrame"] || r[e + "CancelRequestAnimationFrame"];
    return r_requestAnimationFrame && N;
  }),
  !r_requestAnimationFrame || !N)
) {
  let l = 0;
  r_requestAnimationFrame = function (e) {
    const t = Date.now();
    const n = Math.max(0, 16 - (t - l));
    return setTimeout(() => {
      e();
      l = t + n;
    }, n);
  };
  N = function (e) {
    clearTimeout(e);
  };
}
r_requestAnimationFrame = r_requestAnimationFrame.bind(r);
N = N.bind(r);
