import a from "./module-if_15.js";
import s from "./module-r9_14.js";
import c from "./module-J_15.js";
import u from "./module-Y_15.js";
import f from "./module-y_2_14.js";
import l from "./module-D_2_14.js";
import h from "./module-S9_14.js";
import v from "./module-Z_2_14.js";
import p from "./module-h_15.js";
import d from "./module-vE_14.js";
import g from "./module-I_15.js";
import y from "./module-e_14.js";
import b from "./module-H_2_14.js";
import m from "./module-d4_14.js";
import A from "./module-lN_14.js";
import x from "./module-o_14.js";
import w from "./module-b_14.js";
let n;
let o;
let i;
const w_enforce = w.enforce;
const w_get = w.get;
const c_Int8Array = c.Int8Array;
const R = c_Int8Array && c_Int8Array.prototype;
const c_Uint8ClampedArray = c.Uint8ClampedArray;
const I = c_Uint8ClampedArray && c_Uint8ClampedArray.prototype;
let TypedArray = c_Int8Array && b(c_Int8Array);
let TypedArrayPrototype = R && b(R);
const c_TypeError = c.TypeError;
const P = A("toStringTag");
const F = x("TYPED_ARRAY_TAG");
const D = "TypedArrayConstructor";
let NATIVE_ARRAY_BUFFER_VIEWS = a && !!m && h(c.opera) !== "Opera";
let L = false;
const U = {
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
const _ = {
  BigInt64Array: 8,
  BigUint64Array: 8,
};
const getTypedArrayConstructor = function (t) {
  const r = b(t);
  if (f(r)) {
    const e = w_get(r);
    if (e && l(e, D)) {
      return e[D];
    }
    return getTypedArrayConstructor(r);
  }
};
const isTypedArray = function (t) {
  if (!f(t)) {
    return false;
  }
  const r = h(t);
  return l(U, r) || l(_, r);
};
for (n in U) {
  if ((i = (o = c[n]) && o.prototype)) {
    w_enforce(i)[D] = o;
  } else {
    NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
}
for (n in _) {
  if ((i = (o = c[n]) && o.prototype)) {
    w_enforce(i)[D] = o;
  }
}
if (
  (!NATIVE_ARRAY_BUFFER_VIEWS ||
    !u(TypedArray) ||
    TypedArray === Function.prototype) &&
  ((TypedArray = function () {
    throw c_TypeError("Incorrect invocation");
  }),
  NATIVE_ARRAY_BUFFER_VIEWS)
) {
  for (n in U) {
    if (c[n]) {
      m(c[n], TypedArray);
    }
  }
}
if (
  (!NATIVE_ARRAY_BUFFER_VIEWS ||
    !TypedArrayPrototype ||
    TypedArrayPrototype === Object.prototype) &&
  ((TypedArrayPrototype = TypedArray.prototype), NATIVE_ARRAY_BUFFER_VIEWS)
) {
  for (n in U) {
    if (c[n]) {
      m(c[n].prototype, TypedArrayPrototype);
    }
  }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && b(I) !== TypedArrayPrototype) {
  m(I, TypedArrayPrototype);
}
if (s && !l(TypedArrayPrototype, P)) {
  L = true;
  g(TypedArrayPrototype, P, {
    configurable: true,
    get: function () {
      if (f(this)) {
        return this[F];
      }
    },
  });
  for (n in U) {
    if (c[n]) {
      p(c[n], F, n);
    }
  }
}
export default {
  NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: L && F,
  aTypedArray: function (t) {
    if (isTypedArray(t)) {
      return t;
    }
    throw c_TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (u(t) && (!m || y(TypedArray, t))) {
      return t;
    }
    throw c_TypeError(v(t) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (t, r, e, n) {
    if (s) {
      if (e) {
        for (const o in U) {
          const i = c[o];
          if (i && l(i.prototype, t)) {
            try {
              delete i.prototype[t];
            } catch (e) {
              try {
                i.prototype[t] = r;
              } catch (t) {}
            }
          }
        }
      }
      if (!TypedArrayPrototype[t] || e) {
        d(
          TypedArrayPrototype,
          t,
          e ? r : (NATIVE_ARRAY_BUFFER_VIEWS && R[t]) || r,
          n,
        );
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, r, e) {
    let n;
    let o;
    if (s) {
      if (m) {
        if (e) {
          for (n in U) {
            if ((o = c[n]) && l(o, t)) {
              try {
                delete o[t];
              } catch (t) {}
            }
          }
        }
        if (TypedArray[t] && !e) {
          return;
        }
        try {
          return d(
            TypedArray,
            t,
            e ? r : (NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[t]) || r,
          );
        } catch (t) {}
      }
      for (n in U) {
        if ((o = c[n]) && (!o[t] || e)) {
          d(o, t, r);
        }
      }
    }
  },
  getTypedArrayConstructor,
  isView: function (t) {
    if (!f(t)) {
      return false;
    }
    const r = h(t);
    return r === "DataView" || l(U, r) || l(_, r);
  },
  isTypedArray,
  TypedArray,
  TypedArrayPrototype,
};
