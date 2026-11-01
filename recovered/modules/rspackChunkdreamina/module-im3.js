let i;
let s;
let a;
let n;
let c;
a = (s = (i = require("./module-kV_2.js")).lib).Base;
n = s.WordArray;
c = i.x64 = {};
c.Word = a.extend({
  init: function (e, t) {
    this.high = e;
    this.low = t;
  },
});
c.WordArray = a.extend({
  init: function (e, t) {
    e = this.words = e || [];
    if (t != undefined) {
      this.sigBytes = t;
    } else {
      this.sigBytes = 8 * e.length;
    }
  },
  toX32: function () {
    const words = this.words;
    for (var t = words.length, r = [], i = 0; i < t; i++) {
      const s = words[i];
      r.push(s.high);
      r.push(s.low);
    }
    return n.create(r, this.sigBytes);
  },
  clone: function () {
    const e = a.clone.call(this);
    const t = (e.words = this.words.slice(0));
    for (let r = t.length, i = 0; i < r; i++) {
      t[i] = t[i].clone();
    }
    return e;
  },
});
export default i;
