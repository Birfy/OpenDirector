import a from "./module-hU_2.js";
import s from "./module-F.js";
import u from "./module-u.js";
import c from "./module-r.js";
import f from "./module-N.js";
import l from "./module-h.js";
import p from "./module-xE_3.js";
import h from "./module-j_2.js";
import v from "./module-z3.js";
import d from "./module-xX_2.js";
import g from "./module-Tg_2.js";
import y from "./module-V8.js";
import m from "./module-jA_2.js";
import x from "./module-P.js";
import b from "./module-Nt_3.js";
import w from "./module-I_2.js";
import A from "./module-G_2.js";
let n;
let o;
let i;
const A_enforce = A.enforce;
const A_get = A.get;
const u_Int8Array = u.Int8Array;
const R = u_Int8Array && u_Int8Array.prototype;
const u_Uint8ClampedArray = u.Uint8ClampedArray;
const O = u_Uint8ClampedArray && u_Uint8ClampedArray.prototype;
let TypedArray = u_Int8Array && m(u_Int8Array);
let TypedArrayPrototype = R && m(R);
const u_TypeError = u.TypeError;
const M = b("toStringTag");
const B = w("TYPED_ARRAY_TAG");
const q = "TypedArrayConstructor";
let NATIVE_ARRAY_BUFFER_VIEWS = a && !!x && p(u.opera) !== "Opera";
let P = false;
const F = {
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
const C = {
  BigInt64Array: 8,
  BigUint64Array: 8,
};
const getTypedArrayConstructor = function (e) {
  const t = m(e);
  if (f(t)) {
    const r = A_get(t);
    if (r && l(r, q)) {
      return r[q];
    }
    return getTypedArrayConstructor(t);
  }
};
const isTypedArray = function (e) {
  if (!f(e)) {
    return false;
  }
  const t = p(e);
  return l(F, t) || l(C, t);
};
for (n in F) {
  if ((i = (o = u[n]) && o.prototype)) {
    A_enforce(i)[q] = o;
  } else {
    NATIVE_ARRAY_BUFFER_VIEWS = false;
  }
}
for (n in C) {
  if ((i = (o = u[n]) && o.prototype)) {
    A_enforce(i)[q] = o;
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
  for (n in F) {
    if (u[n]) {
      x(u[n], TypedArray);
    }
  }
}
if (
  (!NATIVE_ARRAY_BUFFER_VIEWS ||
    !TypedArrayPrototype ||
    TypedArrayPrototype === Object.prototype) &&
  ((TypedArrayPrototype = TypedArray.prototype), NATIVE_ARRAY_BUFFER_VIEWS)
) {
  for (n in F) {
    if (u[n]) {
      x(u[n].prototype, TypedArrayPrototype);
    }
  }
}
if (NATIVE_ARRAY_BUFFER_VIEWS && m(O) !== TypedArrayPrototype) {
  x(O, TypedArrayPrototype);
}
if (s && !l(TypedArrayPrototype, M)) {
  P = true;
  g(TypedArrayPrototype, M, {
    configurable: true,
    get: function () {
      if (f(this)) {
        return this[B];
      }
    },
  });
  for (n in F) {
    if (u[n]) {
      v(u[n], B, n);
    }
  }
}
export default {
  NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: P && B,
  aTypedArray: function (e) {
    if (isTypedArray(e)) {
      return e;
    }
    throw u_TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (e) {
    if (c(e) && (!x || y(TypedArray, e))) {
      return e;
    }
    throw u_TypeError(h(e) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (e, t, r, n) {
    if (s) {
      if (r) {
        for (const o in F) {
          const i = u[o];
          if (i && l(i.prototype, e)) {
            try {
              delete i.prototype[e];
            } catch (r) {
              try {
                i.prototype[e] = t;
              } catch (e) {}
            }
          }
        }
      }
      if (!TypedArrayPrototype[e] || r) {
        d(
          TypedArrayPrototype,
          e,
          r ? t : (NATIVE_ARRAY_BUFFER_VIEWS && R[e]) || t,
          n,
        );
      }
    }
  },
  exportTypedArrayStaticMethod: function (e, t, r) {
    let n;
    let o;
    if (s) {
      if (x) {
        if (r) {
          for (n in F) {
            if ((o = u[n]) && l(o, e)) {
              try {
                delete o[e];
              } catch (e) {}
            }
          }
        }
        if (TypedArray[e] && !r) {
          return;
        }
        try {
          return d(
            TypedArray,
            e,
            r ? t : (NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[e]) || t,
          );
        } catch (e) {}
      }
      for (n in F) {
        if ((o = u[n]) && (!o[e] || r)) {
          d(o, e, t);
        }
      }
    }
  },
  getTypedArrayConstructor,
  isView: function (e) {
    if (!f(e)) {
      return false;
    }
    const t = p(e);
    return t === "DataView" || l(F, t) || l(C, t);
  },
  isTypedArray,
  TypedArray,
  TypedArrayPrototype,
};
