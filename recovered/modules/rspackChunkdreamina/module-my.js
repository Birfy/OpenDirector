import "./module-cc_2.js";
import "./module-jj.js";
let i;
let s;
let a;
let n;
let c;
let hasher;
let f;
let x;
i = require("./module-kV_2.js");
a = (s = i.lib).Base;
n = s.WordArray;
hasher = (c = i.algo).SHA1;
f = c.HMAC;
x = c.PBKDF2 = a.extend({
  cfg: a.extend({
    keySize: 4,
    hasher,
    iterations: 1,
  }),
  init: function (e) {
    this.cfg = this.cfg.extend(e);
  },
  compute: function (e, t) {
    const cfg = this.cfg;
    const i = f.create(cfg.hasher, e);
    const s = n.create();
    const a = n.create([1]);
    for (
      var c = s.words, o = a.words, x = cfg.keySize, h = cfg.iterations;
      c.length < x;
    ) {
      const l = i.update(t).finalize(a);
      i.reset();
      const d = l.words;
      const p = d.length;
      let u = l;
      for (let _ = 1; _ < h; _++) {
        u = i.finalize(u);
        i.reset();
        const y = u.words;
        for (let v = 0; v < p; v++) {
          d[v] ^= y[v];
        }
      }
      s.concat(l);
      o[0]++;
    }
    s.sigBytes = 4 * x;
    return s;
  },
});
i.PBKDF2 = function (e, t, r) {
  return x.create(r).compute(e, t);
};
export default i.PBKDF2;
