import tr from "./module-if_13.js";
import tn from "./module-r9_12.js";
import ti from "./module-J_13.js";
import to from "./module-Y_13.js";
import ta from "./module-y_2_12.js";
import ts from "./module-D_2_12.js";
import tf from "./module-S9_12.js";
import tu from "./module-Z_2_12.js";
import tc from "./module-h_13.js";
import th from "./module-vE_12.js";
import td from "./module-I_13.js";
import tl from "./module-e_12.js";
import tp from "./module-H_2_12.js";
import tb from "./module-d4_12.js";
import tv from "./module-lN_12.js";
import tg from "./module-o_12.js";
import ty from "./module-b_12.js";
let $;
let tt;
let te;
const ty_enforce = ty.enforce;
const ty_get = ty.get;
const ti_Int8Array = ti.Int8Array;
const t_ = ti_Int8Array && ti_Int8Array.prototype;
const ti_Uint8ClampedArray = ti.Uint8ClampedArray;
const tS = ti_Uint8ClampedArray && ti_Uint8ClampedArray.prototype;
let TypedArray = ti_Int8Array && tp(ti_Int8Array);
let TypedArrayPrototype = t_ && tp(t_);
const ti_TypeError = ti.TypeError;
const tI = tv("toStringTag");
const tO = tg("TYPED_ARRAY_TAG");
const tT = "TypedArrayConstructor";
let NATIVE_ARRAY_BUFFER_VIEWS = tr && !!tb && tf(ti.opera) !== "Opera";
let tj = false;
const tC = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8,
};
const tP = {
  BigInt64Array: 8,
  BigUint64Array: 8,
};
const getTypedArrayConstructor = function (J) {
  const Z = tp(J);
  if (ta(Z)) {
    const Q = ty_get(Z);
    if (Q && ts(Q, tT)) {
      return Q[tT];
    }
    return getTypedArrayConstructor(Z);
  }
};
const isTypedArray = function (J) {
  if (!ta(J)) {
    return false;
  }
  const Z = tf(J);
  return ts(tC, Z) || ts(tP, Z);
};
for ($ in tC) {
  if ((te = (tt = ti[$]) && tt.prototype)) {
    ty_enforce(te)[tT] = tt;
  } else {
    NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
}
for ($ in tP) {
  if ((te = (tt = ti[$]) && tt.prototype)) {
    ty_enforce(te)[tT] = tt;
  }
}
if (
  (!NATIVE_ARRAY_BUFFER_VIEWS ||
    !to(TypedArray) ||
    TypedArray === Function.prototype) &&
  ((TypedArray = function () {
    throw ti_TypeError("Incorrect invocation");
  }),
  NATIVE_ARRAY_BUFFER_VIEWS)
) {
  for ($ in tC) {
    if (ti[$]) {
      tb(ti[$], TypedArray);
    }
  }
}
if (
  (!NATIVE_ARRAY_BUFFER_VIEWS ||
    !TypedArrayPrototype ||
    TypedArrayPrototype === Object.prototype) &&
  ((TypedArrayPrototype = TypedArray.prototype), NATIVE_ARRAY_BUFFER_VIEWS)
) {
  for ($ in tC) {
    if (ti[$]) {
      tb(ti[$].prototype, TypedArrayPrototype);
    }
  }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && tp(tS) !== TypedArrayPrototype) {
  tb(tS, TypedArrayPrototype);
}
if (tn && !ts(TypedArrayPrototype, tI)) {
  tj = true;
  td(TypedArrayPrototype, tI, {
    configurable: true,
    get: function () {
      if (ta(this)) {
        return this[tO];
      }
    },
  });
  for ($ in tC) {
    if (ti[$]) {
      tc(ti[$], tO, $);
    }
  }
}
export default {
  NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: tj && tO,
  aTypedArray: function (J) {
    if (isTypedArray(J)) {
      return J;
    }
    throw ti_TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (J) {
    if (to(J) && (!tb || tl(TypedArray, J))) {
      return J;
    }
    throw ti_TypeError(tu(J) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (J, Z, Q, $) {
    if (tn) {
      if (Q) {
        for (const tt in tC) {
          const te = ti[tt];
          if (te && ts(te.prototype, J)) {
            try {
              delete te.prototype[J];
            } catch (Q) {
              try {
                te.prototype[J] = Z;
              } catch (J) {}
            }
          }
        }
      }
      if (!TypedArrayPrototype[J] || Q) {
        th(
          TypedArrayPrototype,
          J,
          Q ? Z : (NATIVE_ARRAY_BUFFER_VIEWS && t_[J]) || Z,
          $,
        );
      }
    }
  },
  exportTypedArrayStaticMethod: function (J, Z, Q) {
    let $;
    let tt;
    if (tn) {
      if (tb) {
        if (Q) {
          for ($ in tC) {
            if ((tt = ti[$]) && ts(tt, J)) {
              try {
                delete tt[J];
              } catch (J) {}
            }
          }
        }
        if (TypedArray[J] && !Q) {
          return;
        }
        try {
          return th(
            TypedArray,
            J,
            Q ? Z : (NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[J]) || Z,
          );
        } catch (J) {}
      }
      for ($ in tC) {
        if ((tt = ti[$]) && (!tt[J] || Q)) {
          th(tt, J, Z);
        }
      }
    }
  },
  getTypedArrayConstructor,
  isView: function (J) {
    if (!ta(J)) {
      return false;
    }
    const Z = tf(J);
    return Z === "DataView" || ts(tC, Z) || ts(tP, Z);
  },
  isTypedArray,
  TypedArray,
  TypedArrayPrototype,
};
