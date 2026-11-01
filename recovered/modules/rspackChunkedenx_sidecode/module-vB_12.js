import a from "./module-if_11.js";
import s from "./module-r9_10.js";
import u from "./module-J_11.js";
import c from "./module-Y_11.js";
import f from "./module-y_2_10.js";
import l from "./module-D_2_10.js";
import h from "./module-S9_10.js";
import v from "./module-Z_2_10.js";
import p from "./module-h_11.js";
import d from "./module-vE_10.js";
import g from "./module-I_11.js";
import y from "./module-e_10.js";
import b from "./module-H_2_10.js";
import m from "./module-d4_10.js";
import A from "./module-lN_10.js";
import x from "./module-o_10.js";
import w from "./module-b_10.js";
let n;
let o;
let i;
const w_enforce = w.enforce;
const w_get = w.get;
const u_Int8Array = u.Int8Array;
const R = u_Int8Array && u_Int8Array.prototype;
const u_Uint8ClampedArray = u.Uint8ClampedArray;
const I = u_Uint8ClampedArray && u_Uint8ClampedArray.prototype;
let TypedArray = u_Int8Array && b(u_Int8Array);
let TypedArrayPrototype = R && b(R);
const u_TypeError = u.TypeError;
const F = A("toStringTag");
const P = x("TYPED_ARRAY_TAG");
const C = "TypedArrayConstructor";
let NATIVE_ARRAY_BUFFER_VIEWS = a && !!m && h(u.opera) !== "Opera";
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
const V = {
  BigInt64Array: 8,
  BigUint64Array: 8,
};
const getTypedArrayConstructor = function (t) {
  const r = b(t);
  if (f(r)) {
    const e = w_get(r);
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
  return l(U, r) || l(V, r);
};
for (n in U) {
  if ((i = (o = u[n]) && o.prototype)) {
    w_enforce(i)[C] = o;
  } else {
    NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
}
for (n in V) {
  if ((i = (o = u[n]) && o.prototype)) {
    w_enforce(i)[C] = o;
  }
}
if (
  (!NATIVE_ARRAY_BUFFER_VIEWS ||
    !c(TypedArray) ||
    TypedArray === Function.prototype) &&
  ((TypedArray = function () {
    throw u_TypeError("Incorrect invocation");
  }),
  NATIVE_ARRAY_BUFFER_VIEWS)
) {
  for (n in U) {
    if (u[n]) {
      m(u[n], TypedArray);
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
    if (u[n]) {
      m(u[n].prototype, TypedArrayPrototype);
    }
  }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && b(I) !== TypedArrayPrototype) {
  m(I, TypedArrayPrototype);
}
if (s && !l(TypedArrayPrototype, F)) {
  L = true;
  g(TypedArrayPrototype, F, {
    configurable: true,
    get: function () {
      if (f(this)) {
        return this[P];
      }
    },
  });
  for (n in U) {
    if (u[n]) {
      p(u[n], P, n);
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
    throw u_TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (c(t) && (!m || y(TypedArray, t))) {
      return t;
    }
    throw u_TypeError(v(t) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (t, r, e, n) {
    if (s) {
      if (e) {
        for (const o in U) {
          const i = u[o];
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
            if ((o = u[n]) && l(o, t)) {
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
        if ((o = u[n]) && (!o[t] || e)) {
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
    return r === "DataView" || l(U, r) || l(V, r);
  },
  isTypedArray,
  TypedArray,
  TypedArrayPrototype,
};
