import n from "./module-O9_15.js";
import o from "./module-dFV_15.js";
import _i from "./module-Be_2_15.js";
import a from "./module-A2_16.js";
import s from "./module-d_16.js";
import u from "./module-Mi_15.js";
import c from "./module-y_2_15.js";
import f from "./module-xK_15.js";
import h from "./module-JY_15.js";
import l from "./module-D_2_15.js";
import v from "./module-b_15.js";
const _i_getWeakData = _i.getWeakData;
const v_set = v.set;
const v_getterFor = v.getterFor;
const h_find = h.find;
const h_findIndex = h.findIndex;
const b = n([].splice);
let m = 0;
const A = (r) => r.frozen || (r.frozen = new x());
var x = function () {
  this.entries = [];
};
const w = (r, t) =>
  h_find(r.entries, function (r) {
    return r[0] === t;
  });
x.prototype = {
  get: function (r) {
    const t = w(this, r);
    if (t) {
      return t[1];
    }
  },
  has: function (r) {
    return !!w(this, r);
  },
  set: function (r, t) {
    const e = w(this, r);
    if (e) {
      e[1] = t;
    } else {
      this.entries.push([r, t]);
    }
  },
  delete: function (r) {
    const t = h_findIndex(this.entries, function (t) {
      return t[0] === r;
    });
    if (~t) {
      b(this.entries, t, 1);
    }
    return !!~t;
  },
};
export default {
  getConstructor: function (r, t, AS_ENTRIES, n) {
    const h = r(function (that, o) {
      a(that, h_prototype);
      v_set(that, {
        type: t,
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
    var h_prototype = h.prototype;
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
    o(h_prototype, {
      delete: function (r) {
        const t = g(this);
        if (!c(r)) {
          return false;
        }
        const e = _i_getWeakData(r);
        if (e === true) {
          return A(t).delete(r);
        }
        return e && l(e, t.id) && delete e[t.id];
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
        return e && l(e, t.id);
      },
    });
    o(
      h_prototype,
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
    return h;
  },
};
