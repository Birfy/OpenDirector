import a from "./module-if_10.js";
import s from "./module-r9_9.js";
import u from "./module-J_10.js";
import c from "./module-Y_10.js";
import f from "./module-y_2_9.js";
import l from "./module-D_2_9.js";
import h from "./module-S9_9.js";
import v from "./module-Z_2_9.js";
import d from "./module-h_10.js";
import p from "./module-vE_9.js";
import g from "./module-I_10.js";
import y from "./module-e_9.js";
import m from "./module-H_2_9.js";
import b from "./module-d4_9.js";
import w from "./module-lN_9.js";
import A from "./module-o_9.js";
import x from "./module-b_9.js";
let n;
let o;
let i;
const x_enforce = x.enforce;
const x_get = x.get;
const u_Int8Array = u.Int8Array;
const _ = u_Int8Array && u_Int8Array.prototype;
const u_Uint8ClampedArray = u.Uint8ClampedArray;
const M = u_Uint8ClampedArray && u_Uint8ClampedArray.prototype;
let TypedArray = u_Int8Array && m(u_Int8Array);
let TypedArrayPrototype = _ && m(_);
const u_TypeError = u.TypeError;
const j = w("toStringTag");
const P = A("TYPED_ARRAY_TAG");
const D = "TypedArrayConstructor";
let NATIVE_ARRAY_BUFFER_VIEWS = a && !!b && h(u.opera) !== "Opera";
let C = false;
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
  const e = m(t);
  if (f(e)) {
    const r = x_get(e);
    if (r && l(r, D)) {
      return r[D];
    }
    return getTypedArrayConstructor(e);
  }
};
const isTypedArray = function (t) {
  if (!f(t)) {
    return false;
  }
  const e = h(t);
  return l(L, e) || l(U, e);
};
for (n in L) {
  if ((i = (o = u[n]) && o.prototype)) {
    x_enforce(i)[D] = o;
  } else {
    NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
}
for (n in U) {
  if ((i = (o = u[n]) && o.prototype)) {
    x_enforce(i)[D] = o;
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
  for (n in L) {
    if (u[n]) {
      b(u[n], TypedArray);
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
    if (u[n]) {
      b(u[n].prototype, TypedArrayPrototype);
    }
  }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && m(M) !== TypedArrayPrototype) {
  b(M, TypedArrayPrototype);
}
if (s && !l(TypedArrayPrototype, j)) {
  C = true;
  g(TypedArrayPrototype, j, {
    configurable: true,
    get: function () {
      if (f(this)) {
        return this[P];
      }
    },
  });
  for (n in L) {
    if (u[n]) {
      d(u[n], P, n);
    }
  }
}
export default {
  NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: C && P,
  aTypedArray: function (t) {
    if (isTypedArray(t)) {
      return t;
    }
    throw u_TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (c(t) && (!b || y(TypedArray, t))) {
      return t;
    }
    throw u_TypeError(v(t) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (t, e, r, n) {
    if (s) {
      if (r) {
        for (const o in L) {
          const i = u[o];
          if (i && l(i.prototype, t)) {
            try {
              delete i.prototype[t];
            } catch (r) {
              try {
                i.prototype[t] = e;
              } catch (t) {}
            }
          }
        }
      }
      if (!TypedArrayPrototype[t] || r) {
        p(
          TypedArrayPrototype,
          t,
          r ? e : (NATIVE_ARRAY_BUFFER_VIEWS && _[t]) || e,
          n,
        );
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, e, r) {
    let n;
    let o;
    if (s) {
      if (b) {
        if (r) {
          for (n in L) {
            if ((o = u[n]) && l(o, t)) {
              try {
                delete o[t];
              } catch (t) {}
            }
          }
        }
        if (TypedArray[t] && !r) {
          return;
        }
        try {
          return p(
            TypedArray,
            t,
            r ? e : (NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[t]) || e,
          );
        } catch (t) {}
      }
      for (n in L) {
        if ((o = u[n]) && (!o[t] || r)) {
          p(o, t, e);
        }
      }
    }
  },
  getTypedArrayConstructor,
  isView: function (t) {
    if (!f(t)) {
      return false;
    }
    const e = h(t);
    return e === "DataView" || l(L, e) || l(U, e);
  },
  isTypedArray,
  TypedArray,
  TypedArrayPrototype,
};
