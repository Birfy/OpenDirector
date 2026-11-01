import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-O9_12.js";
import tr from "./module-Ze_2_12.js";
import tn from "./module-vE_12.js";
import ti from "./module-Be_2_12.js";
import to from "./module-xK_12.js";
import ta from "./module-A2_13.js";
import ts from "./module-Y_13.js";
import tf from "./module-Mi_12.js";
import tu from "./module-y_2_12.js";
import tc from "./module-X_13.js";
import th from "./module-A3_13.js";
import td from "./module-HZ_12.js";
import tl from "./module-JD_13.js";
export default function (J, Z, Q) {
  const AS_ENTRIES = J.indexOf("Map") !== -1;
  const tb = J.indexOf("Weak") !== -1;
  const tv = AS_ENTRIES ? "set" : "add";
  const tg = tt[J];
  const ty = tg && tg.prototype;
  let tm = tg;
  const tw = {};
  const tx = (J) => {
    const Z = te(ty[J]);
    tn(
      ty,
      J,
      J === "add"
        ? function (J) {
            Z(this, J === 0 ? 0 : J);
            return this;
          }
        : J === "delete"
          ? function (J) {
              return (!tb || !!tu(J)) && Z(this, J === 0 ? 0 : J);
            }
          : J === "get"
            ? function (J) {
                if (tb && !tu(J)) {
                  return undefined;
                }
                return Z(this, J === 0 ? 0 : J);
              }
            : J === "has"
              ? function (J) {
                  return (!tb || !!tu(J)) && Z(this, J === 0 ? 0 : J);
                }
              : function (J, Q) {
                  Z(this, J === 0 ? 0 : J, Q);
                  return this;
                },
    );
  };
  if (
    tr(
      J,
      !ts(tg) ||
        !(
          tb ||
          (ty.forEach &&
            !tc(function () {
              new tg().entries().next();
            }))
        ),
    )
  ) {
    tm = Q.getConstructor(Z, J, AS_ENTRIES, tv);
    ti.enable();
  } else if (tr(J, true)) {
    const t_ = new tm();
    const tM = t_[tv](tb ? {} : -0, 1) !== t_;
    const tS = tc(function () {
      t_.has(1);
    });
    const tA = th(function (J) {
      new tg(J);
    });
    const tE =
      !tb &&
      tc(function () {
        const J = new tg();
        for (let Z = 5; Z--;) {
          J[tv](Z, Z);
        }
        return !J.has(-0);
      });
    if (!tA) {
      tm = Z(function (J, Z) {
        ta(J, ty);
        const that = tl(new tg(), J, tm);
        if (!tf(Z)) {
          to(Z, that[tv], {
            that,
            AS_ENTRIES,
          });
        }
        return that;
      });
      tm.prototype = ty;
      ty.constructor = tm;
    }
    if (tS || tE) {
      tx("delete");
      tx("has");
      if (AS_ENTRIES) {
        tx("get");
      }
    }
    if (tE || tM) {
      tx(tv);
    }
    if (tb && ty.clear) {
      delete ty.clear;
    }
  }
  tw[J] = tm;
  $(
    {
      global: true,
      constructor: true,
      forced: tm !== tg,
    },
    tw,
  );
  td(tm, J);
  if (!tb) {
    Q.setStrong(tm, J, AS_ENTRIES);
  }
  return tm;
}
