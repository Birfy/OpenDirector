import i from "./module-if_7.js";
import s from "./module-r9_6.js";
import c from "./module-J_7.js";
import u from "./module-Y_7.js";
import f from "./module-y_2_6.js";
import l from "./module-D_2_6.js";
import h from "./module-S9_6.js";
import p from "./module-Z_2_6.js";
import v from "./module-h_7.js";
import d from "./module-vE_6.js";
import g from "./module-I_7.js";
import y from "./module-e_6.js";
import m from "./module-H_2_6.js";
import b from "./module-d4_6.js";
import A from "./module-lN_6.js";
import w from "./module-o_6.js";
import x from "./module-b_6.js";
let n;
let o;
let a;
const x_enforce = x.enforce;
const x_get = x.get;
const c_Int8Array = c.Int8Array;
const R = c_Int8Array && c_Int8Array.prototype;
const c_Uint8ClampedArray = c.Uint8ClampedArray;
const I = c_Uint8ClampedArray && c_Uint8ClampedArray.prototype;
let TypedArray = c_Int8Array && m(c_Int8Array);
let TypedArrayPrototype = R && m(R);
const c_TypeError = c.TypeError;
const N = A("toStringTag");
const P = w("TYPED_ARRAY_TAG");
const C = "TypedArrayConstructor";
let NATIVE_ARRAY_BUFFER_VIEWS = i && !!b && h(c.opera) !== "Opera";
let L = false;
const _ = {
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
    if (e && l(e, C)) {
      return e[C];
    }
    return getTypedArrayConstructor(r);
  }
};
const isTypedArray = function (t) {
  if (!f(t)) {
    return false;
  }
  const r = h(t);
  return l(_, r) || l(U, r);
};
for (n in _) {
  if ((a = (o = c[n]) && o.prototype)) {
    x_enforce(a)[C] = o;
  } else {
    NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
}
for (n in U) {
  if ((a = (o = c[n]) && o.prototype)) {
    x_enforce(a)[C] = o;
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
  for (n in _) {
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
  for (n in _) {
    if (c[n]) {
      b(c[n].prototype, TypedArrayPrototype);
    }
  }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && m(I) !== TypedArrayPrototype) {
  b(I, TypedArrayPrototype);
}
if (s && !l(TypedArrayPrototype, N)) {
  L = true;
  g(TypedArrayPrototype, N, {
    configurable: true,
    get: function () {
      if (f(this)) {
        return this[P];
      }
    },
  });
  for (n in _) {
    if (c[n]) {
      v(c[n], P, n);
    }
  }
}
export default {
  NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: L && P,
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
    throw c_TypeError(p(t) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (t, r, e, n) {
    if (s) {
      if (e) {
        for (const o in _) {
          const a = c[o];
          if (a && l(a.prototype, t)) {
            try {
              delete a.prototype[t];
            } catch (e) {
              try {
                a.prototype[t] = r;
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
          for (n in _) {
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
      for (n in _) {
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
    return r === "DataView" || l(_, r) || l(U, r);
  },
  isTypedArray,
  TypedArray,
  TypedArrayPrototype,
};
