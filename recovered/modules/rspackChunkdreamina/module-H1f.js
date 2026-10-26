export var w = (e, t, a) => {
  var s = Math.max((e /= 255), (t /= 255), (a /= 255));
  var i = s - Math.min(e, t, a);
  var r = 0;
  if (i !== 0) {
    switch (s) {
      case e:
        r = (t - a) / i + 6 * (t < a);
        break;
      case t:
        r = (a - e) / i + 2;
        break;
      case a:
        r = (e - t) / i + 4;
    }
    r /= 6;
  }
  return [r, s === 0 ? 0 : i / s, s];
};
export function c(e, t, a) {
  const [i, r] = w(e, t, a);
  const n = 100 * r;
  return `hsl(${360 * i}deg ${n >= 50 ? 10 + (n - 10) / 4 : 16 + n}% ${30}% / ${32}%)`;
}
