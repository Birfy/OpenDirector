import n from "./module-A_9.js";
import i from "./module-J_9.js";
import o from "./module-M_2_8.js";
import s from "./module-r9_8.js";
import a from "./module-by_2_8.js";
import u from "./module-vB_10.js";
import c from "./module-ma_9.js";
import f from "./module-A2_9.js";
import h from "./module-w_9.js";
import l from "./module-h_9.js";
import v from "./module-R3_9.js";
import p from "./module-dV_8.js";
import d from "./module-wr_8.js";
import g from "./module-C1_9.js";
import y from "./module-ip_2_8.js";
import b from "./module-Vm_2_8.js";
import m from "./module-D_2_8.js";
import A from "./module-S9_8.js";
import x from "./module-y_2_8.js";
import w from "./module-i_2_8.js";
import S from "./module-Za_8.js";
import E from "./module-e_8.js";
import O from "./module-d4_8.js";
import { f as f_1 } from "./module-vV_8.js";
import M from "./module-pV_2_8.js";
import _I from "./module-JY_8.js";
import k from "./module-FG_8.js";
import T from "./module-I_9.js";
import j from "./module-t_9.js";
import N from "./module-R_8.js";
import F from "./module-b_8.js";
import P from "./module-JD_9.js";
const _I_forEach = _I.forEach;
const F_get = F.get;
const F_set = F.set;
const F_enforce = F.enforce;
const U = j.f;
const V = N.f;
const i_RangeError = i.RangeError;
const c_ArrayBuffer = c.ArrayBuffer;
const B_prototype = c_ArrayBuffer.prototype;
const c_DataView = c.DataView;
const u_NATIVE_ARRAY_BUFFER_VIEWS = u.NATIVE_ARRAY_BUFFER_VIEWS;
const u_TYPED_ARRAY_TAG = u.TYPED_ARRAY_TAG;
const u_TypedArray = u.TypedArray;
const u_TypedArrayPrototype = u.TypedArrayPrototype;
const u_aTypedArrayConstructor = u.aTypedArrayConstructor;
const u_isTypedArray = u.isTypedArray;
const H = "BYTES_PER_ELEMENT";
const Q = "Wrong length";
const Z = (t, r) => {
  u_aTypedArrayConstructor(t);
  for (var e = 0, n = r.length, i = new t(n); n > e;) {
    i[e] = r[e++];
  }
  return i;
};
const $ = (t, r) => {
  T(t, r, {
    configurable: true,
    get: function () {
      return F_get(this)[r];
    },
  });
};
const tt = (t) => {
  let r;
  return (
    E(B_prototype, t) ||
    (r = A(t)) === "ArrayBuffer" ||
    r === "SharedArrayBuffer"
  );
};
const tr = (t, r) => u_isTypedArray(t) && !w(r) && r in t && v(+r) && r >= 0;
const getOwnPropertyDescriptor = function (t, r) {
  if (tr(t, (r = b(r)))) {
    return h(2, t[r]);
  }
  return V(t, r);
};
const defineProperty = function (t, r, e) {
  if (
    tr(t, (r = b(r))) &&
    x(e) &&
    m(e, "value") &&
    !m(e, "get") &&
    !m(e, "set") &&
    !e.configurable &&
    (!m(e, "writable") || e.writable) &&
    (!m(e, "enumerable") || e.enumerable)
  ) {
    t[r] = e.value;
    return t;
  }
  return U(t, r, e);
};
if (s) {
  if (!u_NATIVE_ARRAY_BUFFER_VIEWS) {
    N.f = getOwnPropertyDescriptor;
    j.f = defineProperty;
    $(u_TypedArrayPrototype, "buffer");
    $(u_TypedArrayPrototype, "byteOffset");
    $(u_TypedArrayPrototype, "byteLength");
    $(u_TypedArrayPrototype, "length");
  }
  n(
    {
      target: "Object",
      stat: true,
      forced: !u_NATIVE_ARRAY_BUFFER_VIEWS,
    },
    {
      getOwnPropertyDescriptor,
      defineProperty,
    },
  );
  module.exports = function (t, r, e) {
    const s = t.match(/\d+/)[0] / 8;
    const u = `${t + (e ? "Clamped" : "")}Array`;
    const c = "get" + t;
    const h = "set" + t;
    const v = i[u];
    let b = v;
    let m = b && b.prototype;
    const A = {};
    const w = (t, r) => {
      const e = F_get(t);
      return e.view[c](r * s + e.byteOffset, true);
    };
    const E = (t, r, n) => {
      const i = F_get(t);
      i.view[h](r * s + i.byteOffset, e ? y(n) : n, true);
    };
    const T = (t, r) => {
      U(t, r, {
        get: function () {
          return w(this, r);
        },
        set: function (t) {
          return E(this, r, t);
        },
        enumerable: true,
      });
    };
    if (u_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (a) {
        b = r(function (t, r, e, n) {
          f(t, m);
          return P(
            x(r)
              ? tt(r)
                ? n !== undefined
                  ? new v(r, g(e, s), n)
                  : e !== undefined
                    ? new v(r, g(e, s))
                    : new v(r)
                : u_isTypedArray(r)
                  ? Z(b, r)
                  : o(M, b, r)
              : new v(d(r)),
            t,
            b,
          );
        });
        if (O) {
          O(b, u_TypedArray);
        }
        _I_forEach(f_1(v), function (t) {
          if (!(t in b)) {
            l(b, t, v[t]);
          }
        });
        b.prototype = m;
      }
    } else {
      b = r(function (t, r, e, n) {
        f(t, m);
        let buffer;
        let byteLength;
        let length;
        let c = 0;
        let byteOffset = 0;
        if (x(r)) {
          if (tt(r)) {
            buffer = r;
            byteOffset = g(e, s);
            const l = r.byteLength;
            if (n === undefined) {
              if (l % s || (byteLength = l - byteOffset) < 0) {
                throw i_RangeError(Q);
              }
            } else if ((byteLength = p(n) * s) + byteOffset > l) {
              throw i_RangeError(Q);
            }
            length = byteLength / s;
          } else if (u_isTypedArray(r)) {
            return Z(b, r);
          } else {
            return o(M, b, r);
          }
        } else {
          buffer = new c_ArrayBuffer((byteLength = (length = d(r)) * s));
        }
        F_set(t, {
          buffer,
          byteOffset,
          byteLength,
          length,
          view: new c_DataView(buffer),
        });
        while (c < length) {
          T(t, c++);
        }
      });
      if (O) {
        O(b, u_TypedArray);
      }
      m = b.prototype = S(u_TypedArrayPrototype);
    }
    if (m.constructor !== b) {
      l(m, "constructor", b);
    }
    F_enforce(m).TypedArrayConstructor = b;
    if (u_TYPED_ARRAY_TAG) {
      l(m, u_TYPED_ARRAY_TAG, u);
    }
    const forced = b !== v;
    A[u] = b;
    n(
      {
        global: true,
        constructor: true,
        forced,
        sham: !u_NATIVE_ARRAY_BUFFER_VIEWS,
      },
      A,
    );
    if (!(H in b)) {
      l(b, H, s);
    }
    if (!(H in m)) {
      l(m, H, s);
    }
    k(u);
  };
} else {
  module.exports = function () {};
}
