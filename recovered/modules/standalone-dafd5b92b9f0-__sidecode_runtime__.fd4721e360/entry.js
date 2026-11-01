r = function (e, t) {
  let r;
  let o;
  const [i, u, f] = t;
  let a = 0;
  if (i.some((e) => n[e] !== 0)) {
    for (r in u) {
      if (Object.prototype.hasOwnProperty.call(u, r)) {
        require.m[r] = u[r];
      }
    }
    if (f) var s = f(require);
  }
  for (e && e(t); a < i.length; a++) {
    o = i[a];
    if (Object.prototype.hasOwnProperty.call(n, o) && n[o]) {
      n[o][0]();
    }
    n[o] = 0;
  }
  return require.O(s);
};
(o = self.rspackChunkedenx_sidecode =
  self.rspackChunkedenx_sidecode || []).forEach(r.bind(null, 0));
o.push = r.bind(null, o.push.bind(o));
const f = require("./module-O.js");
require.O(f);
