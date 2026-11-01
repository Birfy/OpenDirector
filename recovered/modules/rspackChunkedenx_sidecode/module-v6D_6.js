import n from "./module-O9_6.js";
import o from "./module-dFV_6.js";
import _a from "./module-Be_2_6.js";
import i from "./module-A2_7.js";
import s from "./module-d_7.js";
import c from "./module-Mi_6.js";
import u from "./module-y_2_6.js";
import f from "./module-xK_6.js";
import l from "./module-JY_6.js";
import h from "./module-D_2_6.js";
import p from "./module-b_6.js";
const _a_getWeakData = _a.getWeakData;
const p_set = p.set;
const p_getterFor = p.getterFor;
const l_find = l.find;
const l_findIndex = l.findIndex;
const m = n([].splice);
let b = 0;
const A = (t) => t.frozen || (t.frozen = new w());
var w = function () {
  this.entries = [];
};
const x = (t, r) =>
  l_find(t.entries, function (t) {
    return t[0] === r;
  });
w.prototype = {
  get: function (t) {
    const r = x(this, t);
    if (r) {
      return r[1];
    }
  },
  has: function (t) {
    return !!x(this, t);
  },
  set: function (t, r) {
    const e = x(this, t);
    if (e) {
      e[1] = r;
    } else {
      this.entries.push([t, r]);
    }
  },
  delete: function (t) {
    const r = l_findIndex(this.entries, function (r) {
      return r[0] === t;
    });
    if (~r) {
      m(this.entries, r, 1);
    }
    return !!~r;
  },
};
export default {
  getConstructor: function (t, r, AS_ENTRIES, n) {
    const l = t(function (that, o) {
      i(that, l_prototype);
      p_set(that, {
        type: r,
        id: b++,
        frozen: undefined,
      });
      if (!c(o)) {
        f(o, that[n], {
          that,
          AS_ENTRIES,
        });
      }
    });
    var l_prototype = l.prototype;
    const g = p_getterFor(r);
    const y = (t, r, e) => {
      const n = g(t);
      const o = _a_getWeakData(s(r), true);
      if (o === true) {
        A(n).set(r, e);
      } else {
        o[n.id] = e;
      }
      return t;
    };
    o(l_prototype, {
      delete: function (t) {
        const r = g(this);
        if (!u(t)) {
          return false;
        }
        const e = _a_getWeakData(t);
        if (e === true) {
          return A(r).delete(t);
        }
        return e && h(e, r.id) && delete e[r.id];
      },
      has: function (t) {
        const r = g(this);
        if (!u(t)) {
          return false;
        }
        const e = _a_getWeakData(t);
        if (e === true) {
          return A(r).has(t);
        }
        return e && h(e, r.id);
      },
    });
    o(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (t) {
              const r = g(this);
              if (u(t)) {
                const e = _a_getWeakData(t);
                if (e === true) {
                  return A(r).get(t);
                }
                if (e) {
                  return e[r.id];
                }
                return undefined;
              }
            },
            set: function (t, r) {
              return y(this, t, r);
            },
          }
        : {
            add: function (t) {
              return y(this, t, true);
            },
          },
    );
    return l;
  },
};
