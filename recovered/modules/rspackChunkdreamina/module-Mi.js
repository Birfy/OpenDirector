let r = typeof window === "undefined" ? global : window;
let r_requestAnimationFrame = r.requestAnimationFrame;
export { r_requestAnimationFrame as e };
export let N = r.cancelAnimationFrame;
if (
  (!r_requestAnimationFrame || !N) &&
  (["webkit", "ms", "moz", "o"].some((e) => {
    r_requestAnimationFrame = r[`${e}RequestAnimationFrame`];
    N = r[`${e}CancelAnimationFrame`] || r[`${e}CancelRequestAnimationFrame`];
    return r_requestAnimationFrame && N;
  }),
  !r_requestAnimationFrame || !N)
) {
  let e = 0;
  r_requestAnimationFrame = function (t) {
    let n = Date.now();
    let r = Math.max(0, 16 - (n - e));
    return setTimeout(() => {
      t();
      e = n + r;
    }, r);
  };
  N = function (e) {
    clearTimeout(e);
  };
}
r_requestAnimationFrame = r_requestAnimationFrame.bind(r);
N = N.bind(r);
