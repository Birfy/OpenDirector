import n from "./module-A_15.js";
import o from "./module-J_15.js";
import i from "./module-M_2_14.js";
import a from "./module-r9_14.js";
import s from "./module-by_2_14.js";
import c from "./module-vB_16.js";
import u from "./module-ma_15.js";
import f from "./module-A2_15.js";
import l from "./module-w_15.js";
import h from "./module-h_15.js";
import v from "./module-R3_15.js";
import p from "./module-dV_14.js";
import d from "./module-wr_14.js";
import g from "./module-C1_15.js";
import y from "./module-ip_2_14.js";
import b from "./module-Vm_2_14.js";
import m from "./module-D_2_14.js";
import A from "./module-S9_14.js";
import x from "./module-y_2_14.js";
import w from "./module-i_2_14.js";
import S from "./module-Za_14.js";
import E from "./module-e_14.js";
import O from "./module-d4_14.js";
import { f as f_1 } from "./module-vV_14.js";
import M from "./module-pV_2_14.js";
import _I from "./module-JY_14.js";
import k from "./module-FG_14.js";
import j from "./module-I_15.js";
import T from "./module-t_15.js";
import N from "./module-R_14.js";
import P from "./module-b_14.js";
import F from "./module-JD_15.js";
const _I_forEach = _I.forEach;
const P_get = P.get;
const P_set = P.set;
const P_enforce = P.enforce;
const U = T.f;
const _ = N.f;
const o_RangeError = o.RangeError;
const u_ArrayBuffer = u.ArrayBuffer;
const Y_prototype = u_ArrayBuffer.prototype;
const u_DataView = u.DataView;
const c_NATIVE_ARRAY_BUFFER_VIEWS = c.NATIVE_ARRAY_BUFFER_VIEWS;
const c_TYPED_ARRAY_TAG = c.TYPED_ARRAY_TAG;
const c_TypedArray = c.TypedArray;
const c_TypedArrayPrototype = c.TypedArrayPrototype;
const c_aTypedArrayConstructor = c.aTypedArrayConstructor;
const c_isTypedArray = c.isTypedArray;
const K = "BYTES_PER_ELEMENT";
const Q = "Wrong length";
const Z = (t, r) => {
  c_aTypedArrayConstructor(t);
  for (var e = 0, n = r.length, o = new t(n); n > e;) {
    o[e] = r[e++];
  }
  return o;
};
const $ = (t, r) => {
  j(t, r, {
    configurable: true,
    get: function () {
      return P_get(this)[r];
    },
  });
};
const tt = (t) => {
  let r;
  return (
    E(Y_prototype, t) ||
    (r = A(t)) === "ArrayBuffer" ||
    r === "SharedArrayBuffer"
  );
};
const tr = (t, r) => c_isTypedArray(t) && !w(r) && r in t && v(+r) && r >= 0;
const getOwnPropertyDescriptor = function (t, r) {
  if (tr(t, (r = b(r)))) {
    return l(2, t[r]);
  }
  return _(t, r);
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
if (a) {
  if (!c_NATIVE_ARRAY_BUFFER_VIEWS) {
    N.f = getOwnPropertyDescriptor;
    T.f = defineProperty;
    $(c_TypedArrayPrototype, "buffer");
    $(c_TypedArrayPrototype, "byteOffset");
    $(c_TypedArrayPrototype, "byteLength");
    $(c_TypedArrayPrototype, "length");
  }
  n(
    {
      target: "Object",
      stat: true,
      forced: !c_NATIVE_ARRAY_BUFFER_VIEWS,
    },
    {
      getOwnPropertyDescriptor,
      defineProperty,
    },
  );
  module.exports = function (t, r, e) {
    const a = t.match(/\d+/)[0] / 8;
    const c = `${t + (e ? "Clamped" : "")}Array`;
    const u = "get" + t;
    const l = "set" + t;
    const v = o[c];
    let b = v;
    let m = b && b.prototype;
    const A = {};
    const w = (t, r) => {
      const e = P_get(t);
      return e.view[u](r * a + e.byteOffset, true);
    };
    const E = (t, r, n) => {
      const o = P_get(t);
      o.view[l](r * a + o.byteOffset, e ? y(n) : n, true);
    };
    const j = (t, r) => {
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
    if (c_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (s) {
        b = r(function (t, r, e, n) {
          f(t, m);
          return F(
            x(r)
              ? tt(r)
                ? n !== undefined
                  ? new v(r, g(e, a), n)
                  : e !== undefined
                    ? new v(r, g(e, a))
                    : new v(r)
                : c_isTypedArray(r)
                  ? Z(b, r)
                  : i(M, b, r)
              : new v(d(r)),
            t,
            b,
          );
        });
        if (O) {
          O(b, c_TypedArray);
        }
        _I_forEach(f_1(v), function (t) {
          if (!(t in b)) {
            h(b, t, v[t]);
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
        let u = 0;
        let byteOffset = 0;
        if (x(r)) {
          if (tt(r)) {
            buffer = r;
            byteOffset = g(e, a);
            const h = r.byteLength;
            if (n === undefined) {
              if (h % a || (byteLength = h - byteOffset) < 0) {
                throw o_RangeError(Q);
              }
            } else if ((byteLength = p(n) * a) + byteOffset > h) {
              throw o_RangeError(Q);
            }
            length = byteLength / a;
          } else if (c_isTypedArray(r)) {
            return Z(b, r);
          } else {
            return i(M, b, r);
          }
        } else {
          buffer = new u_ArrayBuffer((byteLength = (length = d(r)) * a));
        }
        P_set(t, {
          buffer,
          byteOffset,
          byteLength,
          length,
          view: new u_DataView(buffer),
        });
        while (u < length) {
          j(t, u++);
        }
      });
      if (O) {
        O(b, c_TypedArray);
      }
      m = b.prototype = S(c_TypedArrayPrototype);
    }
    if (m.constructor !== b) {
      h(m, "constructor", b);
    }
    P_enforce(m).TypedArrayConstructor = b;
    if (c_TYPED_ARRAY_TAG) {
      h(m, c_TYPED_ARRAY_TAG, c);
    }
    const forced = b !== v;
    A[c] = b;
    n(
      {
        global: true,
        constructor: true,
        forced,
        sham: !c_NATIVE_ARRAY_BUFFER_VIEWS,
      },
      A,
    );
    if (!(K in b)) {
      h(b, K, a);
    }
    if (!(K in m)) {
      h(m, K, a);
    }
    k(c);
  };
} else {
  module.exports = function () {};
}
