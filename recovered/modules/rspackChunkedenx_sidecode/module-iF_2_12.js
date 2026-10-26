import $ from "./module-A_13.js";
import tt from "./module-J_13.js";
import te from "./module-M_2_12.js";
import tr from "./module-r9_12.js";
import tn from "./module-by_2_12.js";
import ti from "./module-vB_14.js";
import to from "./module-ma_13.js";
import ta from "./module-A2_13.js";
import ts from "./module-w_13.js";
import tf from "./module-h_13.js";
import tu from "./module-R3_13.js";
import tc from "./module-dV_12.js";
import th from "./module-wr_12.js";
import td from "./module-C1_13.js";
import tl from "./module-ip_2_12.js";
import tp from "./module-Vm_2_12.js";
import tb from "./module-D_2_12.js";
import tv from "./module-S9_12.js";
import tg from "./module-y_2_12.js";
import ty from "./module-i_2_12.js";
import tm from "./module-Za_12.js";
import tw from "./module-e_12.js";
import tx from "./module-d4_12.js";
import { f } from "./module-vV_2_2.js";
import tM from "./module-pV_2_12.js";
import _tS from "./module-JY_12.js";
import tA from "./module-FG_12.js";
import tE from "./module-I_13.js";
import tk from "./module-t_13.js";
import tR from "./module-R_12.js";
import tI from "./module-b_12.js";
import tO from "./module-JD_13.js";
const _tS_forEach = _tS.forEach;
const tI_get = tI.get;
const tI_set = tI.set;
const tI_enforce = tI.enforce;
const tC = tk.f;
const tP = tR.f;
const tt_RangeError = tt.RangeError;
const to_ArrayBuffer = to.ArrayBuffer;
const tN_prototype = to_ArrayBuffer.prototype;
const to_DataView = to.DataView;
const ti_NATIVE_ARRAY_BUFFER_VIEWS = ti.NATIVE_ARRAY_BUFFER_VIEWS;
const ti_TYPED_ARRAY_TAG = ti.TYPED_ARRAY_TAG;
const ti_TypedArray = ti.TypedArray;
const ti_TypedArrayPrototype = ti.TypedArrayPrototype;
const ti_aTypedArrayConstructor = ti.aTypedArrayConstructor;
const ti_isTypedArray = ti.isTypedArray;
const tK = "BYTES_PER_ELEMENT";
const tY = "Wrong length";
const tX = (J, Z) => {
  ti_aTypedArrayConstructor(J);
  for (var Q = 0, $ = Z.length, tt = new J($); $ > Q;) {
    tt[Q] = Z[Q++];
  }
  return tt;
};
const tG = (J, Z) => {
  tE(J, Z, {
    configurable: true,
    get: function () {
      return tI_get(this)[Z];
    },
  });
};
const tJ = (J) => {
  let Z;
  return (
    tw(tN_prototype, J) ||
    (Z = tv(J)) === "ArrayBuffer" ||
    Z === "SharedArrayBuffer"
  );
};
const tZ = (J, Z) => ti_isTypedArray(J) && !ty(Z) && Z in J && tu(+Z) && Z >= 0;
const getOwnPropertyDescriptor = function (J, Z) {
  if (tZ(J, (Z = tp(Z)))) {
    return ts(2, J[Z]);
  }
  return tP(J, Z);
};
const defineProperty = function (J, Z, Q) {
  if (
    tZ(J, (Z = tp(Z))) &&
    tg(Q) &&
    tb(Q, "value") &&
    !tb(Q, "get") &&
    !tb(Q, "set") &&
    !Q.configurable &&
    (!tb(Q, "writable") || Q.writable) &&
    (!tb(Q, "enumerable") || Q.enumerable)
  ) {
    J[Z] = Q.value;
    return J;
  }
  return tC(J, Z, Q);
};
if (tr) {
  if (!ti_NATIVE_ARRAY_BUFFER_VIEWS) {
    tR.f = getOwnPropertyDescriptor;
    tk.f = defineProperty;
    tG(ti_TypedArrayPrototype, "buffer");
    tG(ti_TypedArrayPrototype, "byteOffset");
    tG(ti_TypedArrayPrototype, "byteLength");
    tG(ti_TypedArrayPrototype, "length");
  }
  $(
    {
      target: "Object",
      stat: true,
      forced: !ti_NATIVE_ARRAY_BUFFER_VIEWS,
    },
    {
      getOwnPropertyDescriptor,
      defineProperty,
    },
  );
  module.exports = function (J, Z, Q) {
    const tr = J.match(/\d+/)[0] / 8;
    const ti = `${J + (Q ? "Clamped" : "")}Array`;
    const to = "get" + J;
    const ts = "set" + J;
    const tu = tt[ti];
    let tp = tu;
    let tb = tp && tp.prototype;
    const tv = {};
    const ty = (J, Z) => {
      const Q = tI_get(J);
      return Q.view[to](Z * tr + Q.byteOffset, true);
    };
    const tw = (J, Z, $) => {
      const tt = tI_get(J);
      tt.view[ts](Z * tr + tt.byteOffset, Q ? tl($) : $, true);
    };
    const tE = (J, Z) => {
      tC(J, Z, {
        get: function () {
          return ty(this, Z);
        },
        set: function (J) {
          return tw(this, Z, J);
        },
        enumerable: true,
      });
    };
    if (ti_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (tn) {
        tp = Z(function (J, Z, Q, $) {
          ta(J, tb);
          return tO(
            tg(Z)
              ? tJ(Z)
                ? $ !== undefined
                  ? new tu(Z, td(Q, tr), $)
                  : Q !== undefined
                    ? new tu(Z, td(Q, tr))
                    : new tu(Z)
                : ti_isTypedArray(Z)
                  ? tX(tp, Z)
                  : te(tM, tp, Z)
              : new tu(th(Z)),
            J,
            tp,
          );
        });
        if (tx) {
          tx(tp, ti_TypedArray);
        }
        _tS_forEach(f(tu), function (J) {
          if (!(J in tp)) {
            tf(tp, J, tu[J]);
          }
        });
        tp.prototype = tb;
      }
    } else {
      tp = Z(function (J, Z, Q, $) {
        ta(J, tb);
        let buffer;
        let byteLength;
        let length;
        let to = 0;
        let byteOffset = 0;
        if (tg(Z)) {
          if (tJ(Z)) {
            buffer = Z;
            byteOffset = td(Q, tr);
            const tf = Z.byteLength;
            if ($ === undefined) {
              if (tf % tr || (byteLength = tf - byteOffset) < 0) {
                throw tt_RangeError(tY);
              }
            } else if ((byteLength = tc($) * tr) + byteOffset > tf) {
              throw tt_RangeError(tY);
            }
            length = byteLength / tr;
          } else if (ti_isTypedArray(Z)) {
            return tX(tp, Z);
          } else {
            return te(tM, tp, Z);
          }
        } else {
          buffer = new to_ArrayBuffer((byteLength = (length = th(Z)) * tr));
        }
        tI_set(J, {
          buffer,
          byteOffset,
          byteLength,
          length,
          view: new to_DataView(buffer),
        });
        while (to < length) {
          tE(J, to++);
        }
      });
      if (tx) {
        tx(tp, ti_TypedArray);
      }
      tb = tp.prototype = tm(ti_TypedArrayPrototype);
    }
    if (tb.constructor !== tp) {
      tf(tb, "constructor", tp);
    }
    tI_enforce(tb).TypedArrayConstructor = tp;
    if (ti_TYPED_ARRAY_TAG) {
      tf(tb, ti_TYPED_ARRAY_TAG, ti);
    }
    const forced = tp !== tu;
    tv[ti] = tp;
    $(
      {
        global: true,
        constructor: true,
        forced,
        sham: !ti_NATIVE_ARRAY_BUFFER_VIEWS,
      },
      tv,
    );
    if (!(tK in tp)) {
      tf(tp, tK, tr);
    }
    if (!(tK in tb)) {
      tf(tb, tK, tr);
    }
    tA(ti);
  };
} else {
  module.exports = function () {};
}
