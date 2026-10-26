import "./module-cc_2.js";
import "./module-jj.js";
let i;
let s;
let a;
let n;
let c;
let hasher;
let f;
i = require("./module-kV_2.js");
a = (s = i.lib).Base;
n = s.WordArray;
hasher = (c = i.algo).MD5;
f = c.EvpKDF = a.extend({
  cfg: a.extend({
    keySize: 4,
    hasher,
    iterations: 1,
  }),
  init: function (e) {
    this.cfg = this.cfg.extend(e);
  },
  compute: function (e, t) {
    let r;
    const cfg = this.cfg;
    const s = cfg.hasher.create();
    const a = n.create();
    for (var c = a.words, o = cfg.keySize, f = cfg.iterations; c.length < o;) {
      if (r) {
        s.update(r);
      }
      r = s.update(e).finalize(t);
      s.reset();
      for (let x = 1; x < f; x++) {
        r = s.finalize(r);
        s.reset();
      }
      a.concat(r);
    }
    a.sigBytes = 4 * o;
    return a;
  },
});
i.EvpKDF = function (e, t, r) {
  return f.create(r).compute(e, t);
};
export default i.EvpKDF;
