import n from "./module-O9_7.js";
import o from "./module-dFV_7.js";
import _i from "./module-Be_2_7.js";
import a from "./module-A2_8.js";
import s from "./module-d_8.js";
import u from "./module-Mi_7.js";
import c from "./module-y_2_7.js";
import f from "./module-xK_7.js";
import l from "./module-JY_7.js";
import h from "./module-D_2_7.js";
import v from "./module-b_7.js";
const _i_getWeakData = _i.getWeakData;
const v_set = v.set;
const v_getterFor = v.getterFor;
const l_find = l.find;
const l_findIndex = l.findIndex;
const m = n([].splice);
let b = 0;
const A = (r) => r.frozen || (r.frozen = new w());
var w = function () {
  this.entries = [];
};
const x = (r, t) =>
  l_find(r.entries, function (r) {
    return r[0] === t;
  });
w.prototype = {
  get: function (r) {
    const t = x(this, r);
    if (t) {
      return t[1];
    }
  },
  has: function (r) {
    return !!x(this, r);
  },
  set: function (r, t) {
    const e = x(this, r);
    if (e) {
      e[1] = t;
    } else {
      this.entries.push([r, t]);
    }
  },
  delete: function (r) {
    const t = l_findIndex(this.entries, function (t) {
      return t[0] === r;
    });
    if (~t) {
      m(this.entries, t, 1);
    }
    return !!~t;
  },
};
export default {
  getConstructor: function (r, t, AS_ENTRIES, n) {
    const l = r(function (that, o) {
      a(that, l_prototype);
      v_set(that, {
        type: t,
        id: b++,
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
    const g = v_getterFor(t);
    const y = (r, t, e) => {
      const n = g(r);
      const o = _i_getWeakData(s(t), true);
      if (o === true) {
        A(n).set(t, e);
      } else {
        o[n.id] = e;
      }
      return r;
    };
    o(l_prototype, {
      delete: function (r) {
        const t = g(this);
        if (!c(r)) {
          return false;
        }
        const e = _i_getWeakData(r);
        if (e === true) {
          return A(t).delete(r);
        }
        return e && h(e, t.id) && delete e[t.id];
      },
      has: function (r) {
        const t = g(this);
        if (!c(r)) {
          return false;
        }
        const e = _i_getWeakData(r);
        if (e === true) {
          return A(t).has(r);
        }
        return e && h(e, t.id);
      },
    });
    o(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (r) {
              const t = g(this);
              if (c(r)) {
                const e = _i_getWeakData(r);
                if (e === true) {
                  return A(t).get(r);
                }
                if (e) {
                  return e[t.id];
                }
                return undefined;
              }
            },
            set: function (r, t) {
              return y(this, r, t);
            },
          }
        : {
            add: function (r) {
              return y(this, r, true);
            },
          },
    );
    return l;
  },
};
