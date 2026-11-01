import a from "./module-if_8.js";
import s from "./module-r9_7.js";
import u from "./module-J_8.js";
import c from "./module-Y_8.js";
import f from "./module-y_2_7.js";
import l from "./module-D_2_7.js";
import h from "./module-S9_7.js";
import v from "./module-Z_2_7.js";
import p from "./module-h_8.js";
import d from "./module-vE_7.js";
import g from "./module-I_8.js";
import y from "./module-e_7.js";
import m from "./module-H_2_7.js";
import b from "./module-d4_7.js";
import A from "./module-lN_7.js";
import w from "./module-o_7.js";
import x from "./module-b_7.js";
let n;
let o;
let i;
const x_enforce = x.enforce;
const x_get = x.get;
const u_Int8Array = u.Int8Array;
const R = u_Int8Array && u_Int8Array.prototype;
const u_Uint8ClampedArray = u.Uint8ClampedArray;
const I = u_Uint8ClampedArray && u_Uint8ClampedArray.prototype;
let TypedArray = u_Int8Array && m(u_Int8Array);
let TypedArrayPrototype = R && m(R);
const u_TypeError = u.TypeError;
const P = A("toStringTag");
const F = w("TYPED_ARRAY_TAG");
const C = "TypedArrayConstructor";
let NATIVE_ARRAY_BUFFER_VIEWS = a && !!b && h(u.opera) !== "Opera";
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
const W = {
  BigInt64Array: 8,
  BigUint64Array: 8,
};
const getTypedArrayConstructor = function (r) {
  const t = m(r);
  if (f(t)) {
    const e = x_get(t);
    if (e && l(e, C)) {
      return e[C];
    }
    return getTypedArrayConstructor(t);
  }
};
const isTypedArray = function (r) {
  if (!f(r)) {
    return false;
  }
  const t = h(r);
  return l(U, t) || l(W, t);
};
for (n in U) {
  if ((i = (o = u[n]) && o.prototype)) {
    x_enforce(i)[C] = o;
  } else {
    NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
}
for (n in W) {
  if ((i = (o = u[n]) && o.prototype)) {
    x_enforce(i)[C] = o;
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
  for (n in U) {
    if (u[n]) {
      b(u[n].prototype, TypedArrayPrototype);
    }
  }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && m(I) !== TypedArrayPrototype) {
  b(I, TypedArrayPrototype);
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
    if (u[n]) {
      p(u[n], F, n);
    }
  }
}
export default {
  NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: L && F,
  aTypedArray: function (r) {
    if (isTypedArray(r)) {
      return r;
    }
    throw u_TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (r) {
    if (c(r) && (!b || y(TypedArray, r))) {
      return r;
    }
    throw u_TypeError(v(r) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (r, t, e, n) {
    if (s) {
      if (e) {
        for (const o in U) {
          const i = u[o];
          if (i && l(i.prototype, r)) {
            try {
              delete i.prototype[r];
            } catch (e) {
              try {
                i.prototype[r] = t;
              } catch (r) {}
            }
          }
        }
      }
      if (!TypedArrayPrototype[r] || e) {
        d(
          TypedArrayPrototype,
          r,
          e ? t : (NATIVE_ARRAY_BUFFER_VIEWS && R[r]) || t,
          n,
        );
      }
    }
  },
  exportTypedArrayStaticMethod: function (r, t, e) {
    let n;
    let o;
    if (s) {
      if (b) {
        if (e) {
          for (n in U) {
            if ((o = u[n]) && l(o, r)) {
              try {
                delete o[r];
              } catch (r) {}
            }
          }
        }
        if (TypedArray[r] && !e) {
          return;
        }
        try {
          return d(
            TypedArray,
            r,
            e ? t : (NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[r]) || t,
          );
        } catch (r) {}
      }
      for (n in U) {
        if ((o = u[n]) && (!o[r] || e)) {
          d(o, r, t);
        }
      }
    }
  },
  getTypedArrayConstructor,
  isView: function (r) {
    if (!f(r)) {
      return false;
    }
    const t = h(r);
    return t === "DataView" || l(U, t) || l(W, t);
  },
  isTypedArray,
  TypedArray,
  TypedArrayPrototype,
};
