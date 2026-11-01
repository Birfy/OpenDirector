import n from "./module-o.js";
import o from "./module-IG_3.js";
import _i from "./module-C3_2.js";
import a from "./module-i9_3.js";
import s from "./module-IF_2.js";
import u from "./module-D.js";
import c from "./module-N.js";
import f from "./module-Fm_2_2.js";
import l from "./module-GK_2.js";
import p from "./module-h.js";
import h from "./module-G_2.js";
const _i_getWeakData = _i.getWeakData;
const h_set = h.set;
const h_getterFor = h.getterFor;
const l_find = l.find;
const l_findIndex = l.findIndex;
const m = n([].splice);
let x = 0;
const b = (e) => e.frozen || (e.frozen = new w());
var w = function () {
  this.entries = [];
};
const A = (e, t) =>
  l_find(e.entries, function (e) {
    return e[0] === t;
  });
w.prototype = {
  get: function (e) {
    const t = A(this, e);
    if (t) {
      return t[1];
    }
  },
  has: function (e) {
    return !!A(this, e);
  },
  set: function (e, t) {
    const r = A(this, e);
    if (r) {
      r[1] = t;
    } else {
      this.entries.push([e, t]);
    }
  },
  delete: function (e) {
    const t = l_findIndex(this.entries, function (t) {
      return t[0] === e;
    });
    if (~t) {
      m(this.entries, t, 1);
    }
    return !!~t;
  },
};
export default {
  getConstructor: function (e, t, AS_ENTRIES, n) {
    const l = e(function (that, o) {
      a(that, l_prototype);
      h_set(that, {
        type: t,
        id: x++,
        frozen: undefined,
      });
      if (!u(o)) {
        f(o, that[n], {
          that,
          AS_ENTRIES,
        });
      }
    });
    var l_prototype = l.prototype;
    const g = h_getterFor(t);
    const y = (e, t, r) => {
      const n = g(e);
      const o = _i_getWeakData(s(t), true);
      if (o === true) {
        b(n).set(t, r);
      } else {
        o[n.id] = r;
      }
      return e;
    };
    o(l_prototype, {
      delete: function (e) {
        const t = g(this);
        if (!c(e)) {
          return false;
        }
        const r = _i_getWeakData(e);
        if (r === true) {
          return b(t).delete(e);
        }
        return r && p(r, t.id) && delete r[t.id];
      },
      has: function (e) {
        const t = g(this);
        if (!c(e)) {
          return false;
        }
        const r = _i_getWeakData(e);
        if (r === true) {
          return b(t).has(e);
        }
        return r && p(r, t.id);
      },
    });
    o(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (e) {
              const t = g(this);
              if (c(e)) {
                const r = _i_getWeakData(e);
                if (r === true) {
                  return b(t).get(e);
                }
                if (r) {
                  return r[t.id];
                }
                return undefined;
              }
            },
            set: function (e, t) {
              return y(this, e, t);
            },
          }
        : {
            add: function (e) {
              return y(this, e, true);
            },
          },
    );
    return l;
  },
};
