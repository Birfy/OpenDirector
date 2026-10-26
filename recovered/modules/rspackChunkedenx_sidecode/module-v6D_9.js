import n from "./module-O9_9.js";
import o from "./module-dFV_9.js";
import _i from "./module-Be_2_9.js";
import a from "./module-A2_10.js";
import s from "./module-d_10.js";
import u from "./module-Mi_9.js";
import c from "./module-y_2_9.js";
import f from "./module-xK_9.js";
import l from "./module-JY_9.js";
import h from "./module-D_2_9.js";
import v from "./module-b_9.js";
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
const x = (t, e) =>
  l_find(t.entries, function (t) {
    return t[0] === e;
  });
A.prototype = {
  get: function (t) {
    const e = x(this, t);
    if (e) {
      return e[1];
    }
  },
  has: function (t) {
    return !!x(this, t);
  },
  set: function (t, e) {
    const r = x(this, t);
    if (r) {
      r[1] = e;
    } else {
      this.entries.push([t, e]);
    }
  },
  delete: function (t) {
    const e = l_findIndex(this.entries, function (e) {
      return e[0] === t;
    });
    if (~e) {
      m(this.entries, e, 1);
    }
    return !!~e;
  },
};
export default {
  getConstructor: function (t, e, AS_ENTRIES, n) {
    const l = t(function (that, o) {
      a(that, l_prototype);
      v_set(that, {
        type: e,
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
    const g = v_getterFor(e);
    const y = (t, e, r) => {
      const n = g(t);
      const o = _i_getWeakData(s(e), true);
      if (o === true) {
        w(n).set(e, r);
      } else {
        o[n.id] = r;
      }
      return t;
    };
    o(l_prototype, {
      delete: function (t) {
        const e = g(this);
        if (!c(t)) {
          return false;
        }
        const r = _i_getWeakData(t);
        if (r === true) {
          return w(e).delete(t);
        }
        return r && h(r, e.id) && delete r[e.id];
      },
      has: function (t) {
        const e = g(this);
        if (!c(t)) {
          return false;
        }
        const r = _i_getWeakData(t);
        if (r === true) {
          return w(e).has(t);
        }
        return r && h(r, e.id);
      },
    });
    o(
      l_prototype,
      AS_ENTRIES
        ? {
            get: function (t) {
              const e = g(this);
              if (c(t)) {
                const r = _i_getWeakData(t);
                if (r === true) {
                  return w(e).get(t);
                }
                if (r) {
                  return r[e.id];
                }
                return undefined;
              }
            },
            set: function (t, e) {
              return y(this, t, e);
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
