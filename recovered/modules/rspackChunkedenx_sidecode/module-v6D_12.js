import $ from "./module-O9_12.js";
import tt from "./module-dFV_12.js";
import _te from "./module-Be_2_12.js";
import tr from "./module-A2_13.js";
import tn from "./module-d_13.js";
import ti from "./module-Mi_12.js";
import to from "./module-y_2_12.js";
import ta from "./module-xK_12.js";
import ts from "./module-JY_12.js";
import tf from "./module-D_2_12.js";
import tu from "./module-b_12.js";
const _te_getWeakData = _te.getWeakData;
const tu_set = tu.set;
const tu_getterFor = tu.getterFor;
const ts_find = ts.find;
const ts_findIndex = ts.findIndex;
const tp = $([].splice);
let tb = 0;
const tv = (J) => J.frozen || (J.frozen = new tg());
var tg = function () {
  this.entries = [];
};
const ty = (J, Z) =>
  ts_find(J.entries, function (J) {
    return J[0] === Z;
  });
tg.prototype = {
  get: function (J) {
    const Z = ty(this, J);
    if (Z) {
      return Z[1];
    }
  },
  has: function (J) {
    return !!ty(this, J);
  },
  set: function (J, Z) {
    const Q = ty(this, J);
    if (Q) {
      Q[1] = Z;
    } else {
      this.entries.push([J, Z]);
    }
  },
  delete: function (J) {
    const Z = ts_findIndex(this.entries, function (Z) {
      return Z[0] === J;
    });
    if (~Z) {
      tp(this.entries, Z, 1);
    }
    return !!~Z;
  },
};
export default {
  getConstructor: function (J, Z, AS_ENTRIES, $) {
    const ts = J(function (that, tt) {
      tr(that, ts_prototype);
      tu_set(that, {
        type: Z,
        id: tb++,
        frozen: undefined,
      });
      if (!ti(tt)) {
        ta(tt, that[$], {
          that,
          AS_ENTRIES,
        });
      }
    });
    var ts_prototype = ts.prototype;
    const td = tu_getterFor(Z);
    const tl = (J, Z, Q) => {
      const $ = td(J);
      const tt = _te_getWeakData(tn(Z), true);
      if (tt === true) {
        tv($).set(Z, Q);
      } else {
        tt[$.id] = Q;
      }
      return J;
    };
    tt(ts_prototype, {
      delete: function (J) {
        const Z = td(this);
        if (!to(J)) {
          return false;
        }
        const Q = _te_getWeakData(J);
        if (Q === true) {
          return tv(Z).delete(J);
        }
        return Q && tf(Q, Z.id) && delete Q[Z.id];
      },
      has: function (J) {
        const Z = td(this);
        if (!to(J)) {
          return false;
        }
        const Q = _te_getWeakData(J);
        if (Q === true) {
          return tv(Z).has(J);
        }
        return Q && tf(Q, Z.id);
      },
    });
    tt(
      ts_prototype,
      AS_ENTRIES
        ? {
            get: function (J) {
              const Z = td(this);
              if (to(J)) {
                const Q = _te_getWeakData(J);
                if (Q === true) {
                  return tv(Z).get(J);
                }
                if (Q) {
                  return Q[Z.id];
                }
                return undefined;
              }
            },
            set: function (J, Z) {
              return tl(this, J, Z);
            },
          }
        : {
            add: function (J) {
              return tl(this, J, true);
            },
          },
    );
    return ts;
  },
};
