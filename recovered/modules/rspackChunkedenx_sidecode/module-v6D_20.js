import n from "./module-O9_20.js";
import o from "./module-dFV_20.js";
import _i from "./module-Be_2_20.js";
import a from "./module-A2_21.js";
import s from "./module-d_21.js";
import c from "./module-Mi_20.js";
import u from "./module-y_2_20.js";
import f from "./module-xK_20.js";
import l from "./module-JY_20.js";
import h from "./module-D_2_20.js";
import v from "./module-b_20.js";
const _i_getWeakData = _i.getWeakData;
const v_set = v.set;
const v_getterFor = v.getterFor;
const l_find = l.find;
const l_findIndex = l.findIndex;
const m = n([].splice);
let b = 0;
const w = (t) => t.frozen || (t.frozen = new A());
var A = function () {
  this.entries = [];
};
const x = (t, r) =>
  l_find(t.entries, function (t) {
    return t[0] === r;
  });
A.prototype = {
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
      a(that, l_prototype);
      v_set(that, {
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
    const g = v_getterFor(r);
    const y = (t, r, e) => {
      const n = g(t);
      const o = _i_getWeakData(s(r), true);
      if (o === true) {
        w(n).set(r, e);
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
        const e = _i_getWeakData(t);
        if (e === true) {
          return w(r).delete(t);
        }
        return e && h(e, r.id) && delete e[r.id];
      },
      has: function (t) {
        const r = g(this);
        if (!u(t)) {
          return false;
        }
        const e = _i_getWeakData(t);
        if (e === true) {
          return w(r).has(t);
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
                const e = _i_getWeakData(t);
                if (e === true) {
                  return w(r).get(t);
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
