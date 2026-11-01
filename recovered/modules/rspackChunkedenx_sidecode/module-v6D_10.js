import n from "./module-O9_10.js";
import o from "./module-dFV_10.js";
import _i from "./module-Be_2_10.js";
import a from "./module-A2_11.js";
import s from "./module-d_11.js";
import u from "./module-Mi_10.js";
import c from "./module-y_2_10.js";
import f from "./module-xK_10.js";
import l from "./module-JY_10.js";
import h from "./module-D_2_10.js";
import v from "./module-b_10.js";
const _i_getWeakData = _i.getWeakData;
const v_set = v.set;
const v_getterFor = v.getterFor;
const l_find = l.find;
const l_findIndex = l.findIndex;
const b = n([].splice);
let m = 0;
const A = (t) => t.frozen || (t.frozen = new x());
var x = function () {
  this.entries = [];
};
const w = (t, r) =>
  l_find(t.entries, function (t) {
    return t[0] === r;
  });
x.prototype = {
  get: function (t) {
    const r = w(this, t);
    if (r) {
      return r[1];
    }
  },
  has: function (t) {
    return !!w(this, t);
  },
  set: function (t, r) {
    const e = w(this, t);
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
      b(this.entries, r, 1);
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
        id: m++,
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
    const g = v_getterFor(r);
    const y = (t, r, e) => {
      const n = g(t);
      const o = _i_getWeakData(s(r), true);
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
        if (!c(t)) {
          return false;
        }
        const e = _i_getWeakData(t);
        if (e === true) {
          return A(r).delete(t);
        }
        return e && h(e, r.id) && delete e[r.id];
      },
      has: function (t) {
        const r = g(this);
        if (!c(t)) {
          return false;
        }
        const e = _i_getWeakData(t);
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
              if (c(t)) {
                const e = _i_getWeakData(t);
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
