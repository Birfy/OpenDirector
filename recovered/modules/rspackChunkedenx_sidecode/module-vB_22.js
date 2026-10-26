import a from "./module-if_21.js";
import s from "./module-r9_20.js";
import c from "./module-J_21.js";
import u from "./module-Y_21.js";
import f from "./module-y_2_20.js";
import l from "./module-D_2_20.js";
import h from "./module-S9_20.js";
import v from "./module-Z_2_20.js";
import p from "./module-h_21.js";
import d from "./module-vE_20.js";
import g from "./module-I_21.js";
import y from "./module-e_20.js";
import m from "./module-H_2_20.js";
import b from "./module-d4_20.js";
import w from "./module-lN_20.js";
import A from "./module-o_20.js";
import x from "./module-b_20.js";
let n;
let o;
let i;
const x_enforce = x.enforce;
const x_get = x.get;
const c_Int8Array = c.Int8Array;
const R = c_Int8Array && c_Int8Array.prototype;
const c_Uint8ClampedArray = c.Uint8ClampedArray;
const I = c_Uint8ClampedArray && c_Uint8ClampedArray.prototype;
let TypedArray = c_Int8Array && m(c_Int8Array);
let TypedArrayPrototype = R && m(R);
const c_TypeError = c.TypeError;
const N = w("toStringTag");
const D = A("TYPED_ARRAY_TAG");
const P = "TypedArrayConstructor";
let NATIVE_ARRAY_BUFFER_VIEWS = a && !!b && h(c.opera) !== "Opera";
let F = false;
const L = {
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
const U = {
  BigInt64Array: 8,
  BigUint64Array: 8,
};
const getTypedArrayConstructor = function (t) {
  const r = m(t);
  if (f(r)) {
    const e = x_get(r);
    if (e && l(e, P)) {
      return e[P];
    }
    return getTypedArrayConstructor(r);
  }
};
const isTypedArray = function (t) {
  if (!f(t)) {
    return false;
  }
  const r = h(t);
  return l(L, r) || l(U, r);
};
for (n in L) {
  if ((i = (o = c[n]) && o.prototype)) {
    x_enforce(i)[P] = o;
  } else {
    NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
}
for (n in U) {
  if ((i = (o = c[n]) && o.prototype)) {
    x_enforce(i)[P] = o;
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
  for (n in L) {
    if (c[n]) {
      b(c[n], TypedArray);
    }
  }
}
if (
  (!NATIVE_ARRAY_BUFFER_VIEWS ||
    !TypedArrayPrototype ||
    TypedArrayPrototype === Object.prototype) &&
  ((TypedArrayPrototype = TypedArray.prototype), NATIVE_ARRAY_BUFFER_VIEWS)
) {
  for (n in L) {
    if (c[n]) {
      b(c[n].prototype, TypedArrayPrototype);
    }
  }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && m(I) !== TypedArrayPrototype) {
  b(I, TypedArrayPrototype);
}
if (s && !l(TypedArrayPrototype, N)) {
  F = true;
  g(TypedArrayPrototype, N, {
    configurable: true,
    get: function () {
      if (f(this)) {
        return this[D];
      }
    },
  });
  for (n in L) {
    if (c[n]) {
      p(c[n], D, n);
    }
  }
}
export default {
  NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: F && D,
  aTypedArray: function (t) {
    if (isTypedArray(t)) {
      return t;
    }
    throw c_TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (u(t) && (!b || y(TypedArray, t))) {
      return t;
    }
    throw c_TypeError(v(t) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (t, r, e, n) {
    if (s) {
      if (e) {
        for (const o in L) {
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
      if (b) {
        if (e) {
          for (n in L) {
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
      for (n in L) {
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
    return r === "DataView" || l(L, r) || l(U, r);
  },
  isTypedArray,
  TypedArray,
  TypedArrayPrototype,
};
