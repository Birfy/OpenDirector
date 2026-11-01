import $ from "./module-Za_12.js";
import tt from "./module-I_13.js";
import te from "./module-dFV_12.js";
import tr from "./module-WG_2_12.js";
import tn from "./module-A2_13.js";
import ti from "./module-Mi_12.js";
import to from "./module-xK_12.js";
import ta from "./module-bY_13.js";
import ts from "./module-V3_12.js";
import tf from "./module-FG_12.js";
import tu from "./module-r9_12.js";
import _tc from "./module-Be_2_12.js";
import th from "./module-b_12.js";
const _tc_fastKey = _tc.fastKey;
const th_set = th.set;
const th_getterFor = th.getterFor;
export default {
  getConstructor: function (J, Z, AS_ENTRIES, ta) {
    const ts = J(function (that, tt) {
      tn(that, ts_prototype);
      th_set(that, {
        type: Z,
        index: $(null),
        first: undefined,
        last: undefined,
        size: 0,
      });
      if (!tu) {
        that.size = 0;
      }
      if (!ti(tt)) {
        to(tt, that[ta], {
          that,
          AS_ENTRIES,
        });
      }
    });
    var ts_prototype = ts.prototype;
    const th = th_getterFor(Z);
    const tp = (J, Z, Q) => {
      let $;
      let tt;
      const te = th(J);
      let tr = tb(J, Z);
      if (tr) {
        tr.value = Q;
      } else {
        te.last = tr = {
          index: (tt = _tc_fastKey(Z, true)),
          key: Z,
          value: Q,
          previous: ($ = te.last),
          next: undefined,
          removed: false,
        };
        if (!te.first) {
          te.first = tr;
        }
        if ($) {
          $.next = tr;
        }
        if (tu) {
          te.size++;
        } else {
          J.size++;
        }
        if (tt !== "F") {
          te.index[tt] = tr;
        }
      }
      return J;
    };
    var tb = (J, Z) => {
      let Q;
      const $ = th(J);
      const tt = _tc_fastKey(Z);
      if (tt !== "F") {
        return $.index[tt];
      }
      for (Q = $.first; Q; Q = Q.next) {
        if (Q.key === Z) {
          return Q;
        }
      }
    };
    te(ts_prototype, {
      clear: function () {
        const J = th(this);
        const J_index = J.index;
        for (let Q = J.first; Q;) {
          Q.removed = true;
          if (Q.previous) {
            Q.previous = Q.previous.next = undefined;
          }
          delete J_index[Q.index];
          Q = Q.next;
        }
        J.first = J.last = undefined;
        if (tu) {
          J.size = 0;
        } else {
          this.size = 0;
        }
      },
      delete: function (J) {
        const Z = th(this);
        const Q = tb(this, J);
        if (Q) {
          const $ = Q.next;
          const tt = Q.previous;
          delete Z.index[Q.index];
          Q.removed = true;
          if (tt) {
            tt.next = $;
          }
          if ($) {
            $.previous = tt;
          }
          if (Z.first === Q) {
            Z.first = $;
          }
          if (Z.last === Q) {
            Z.last = tt;
          }
          if (tu) {
            Z.size--;
          } else {
            this.size--;
          }
        }
        return !!Q;
      },
      forEach: function (J) {
        for (
          let Z,
            Q = th(this),
            $ = tr(J, arguments.length > 1 ? arguments[1] : undefined);
          (Z = Z ? Z.next : Q.first);
        ) {
          $(Z.value, Z.key, this);
          while (Z && Z.removed) {
            Z = Z.previous;
          }
        }
      },
      has: function (J) {
        return !!tb(this, J);
      },
    });
    te(
      ts_prototype,
      AS_ENTRIES
        ? {
            get: function (J) {
              const Z = tb(this, J);
              return Z && Z.value;
            },
            set: function (J, Z) {
              return tp(this, J === 0 ? 0 : J, Z);
            },
          }
        : {
            add: function (J) {
              return tp(this, (J = J === 0 ? 0 : J), J);
            },
          },
    );
    if (tu) {
      tt(ts_prototype, "size", {
        configurable: true,
        get: function () {
          return th(this).size;
        },
      });
    }
    return ts;
  },
  setStrong: function (J, Z, Q) {
    const $ = Z + " Iterator";
    const tt = th_getterFor(Z);
    const te = th_getterFor($);
    ta(
      J,
      Z,
      function (target, kind) {
        th_set(this, {
          type: $,
          target,
          state: tt(target),
          kind,
          last: undefined,
        });
      },
      function () {
        const J = te(this);
        const J_kind = J.kind;
        for (var Q = J.last; Q && Q.removed;) {
          Q = Q.previous;
        }
        if (J.target && (J.last = Q = Q ? Q.next : J.state.first)) {
          switch (J_kind) {
            case "keys":
              return ts(Q.key, false);
            case "values":
              return ts(Q.value, false);
            default:
              return ts([Q.key, Q.value], false);
          }
        }
        J.target = undefined;
        return ts(undefined, true);
      },
      Q ? "entries" : "values",
      !Q,
      true,
    );
    tf(Z);
  },
};
