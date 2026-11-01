import n from "./module-O9_21.js";
import i from "./module-dFV_21.js";
import _o from "./module-Be_2_21.js";
import s from "./module-A2_22.js";
import a from "./module-d_22.js";
import u from "./module-Mi_21.js";
import c from "./module-y_2_21.js";
import f from "./module-xK_21.js";
import h from "./module-JY_21.js";
import l from "./module-D_2_21.js";
import v from "./module-b_21.js";
const _o_getWeakData = _o.getWeakData;
const v_set = v.set;
const v_getterFor = v.getterFor;
const h_find = h.find;
const h_findIndex = h.findIndex;
const b = n([].splice);
let m = 0;
const A = (t) => t.frozen || (t.frozen = new x());
var x = function () {
  this.entries = [];
};
const w = (t, r) =>
  h_find(t.entries, function (t) {
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
    const r = h_findIndex(this.entries, function (r) {
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
    const h = t(function (that, i) {
      s(that, h_prototype);
      v_set(that, {
        type: r,
        id: m++,
        frozen: undefined,
      });
      if (!u(i)) {
        f(i, that[n], {
          that,
          AS_ENTRIES,
        });
      }
    });
    var h_prototype = h.prototype;
    const g = v_getterFor(r);
    const y = (t, r, e) => {
      const n = g(t);
      const i = _o_getWeakData(a(r), true);
      if (i === true) {
        A(n).set(r, e);
      } else {
        i[n.id] = e;
      }
      return t;
    };
    i(h_prototype, {
      delete: function (t) {
        const r = g(this);
        if (!c(t)) {
          return false;
        }
        const e = _o_getWeakData(t);
        if (e === true) {
          return A(r).delete(t);
        }
        return e && l(e, r.id) && delete e[r.id];
      },
      has: function (t) {
        const r = g(this);
        if (!c(t)) {
          return false;
        }
        const e = _o_getWeakData(t);
        if (e === true) {
          return A(r).has(t);
        }
        return e && l(e, r.id);
      },
    });
    i(
      h_prototype,
      AS_ENTRIES
        ? {
            get: function (t) {
              const r = g(this);
              if (c(t)) {
                const e = _o_getWeakData(t);
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
    return h;
  },
};
