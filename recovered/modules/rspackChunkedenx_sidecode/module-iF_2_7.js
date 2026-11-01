import n from "./module-A_8.js";
import o from "./module-J_8.js";
import i from "./module-M_2_7.js";
import a from "./module-r9_7.js";
import s from "./module-by_2_7.js";
import u from "./module-vB_9.js";
import c from "./module-ma_8.js";
import f from "./module-A2_8.js";
import l from "./module-w_8.js";
import h from "./module-h_8.js";
import v from "./module-R3_8.js";
import p from "./module-dV_7.js";
import d from "./module-wr_7.js";
import g from "./module-C1_8.js";
import y from "./module-ip_2_7.js";
import m from "./module-Vm_2_7.js";
import b from "./module-D_2_7.js";
import A from "./module-S9_7.js";
import w from "./module-y_2_7.js";
import x from "./module-i_2_7.js";
import E from "./module-Za_7.js";
import S from "./module-e_7.js";
import O from "./module-d4_7.js";
import { f as f_1 } from "./module-vV_7.js";
import M from "./module-pV_2_7.js";
import _I from "./module-JY_7.js";
import k from "./module-FG_7.js";
import T from "./module-I_8.js";
import j from "./module-t_8.js";
import N from "./module-R_7.js";
import P from "./module-b_7.js";
import F from "./module-JD_8.js";
const _I_forEach = _I.forEach;
const P_get = P.get;
const P_set = P.set;
const P_enforce = P.enforce;
const U = j.f;
const W = N.f;
const o_RangeError = o.RangeError;
const c_ArrayBuffer = c.ArrayBuffer;
const Y_prototype = c_ArrayBuffer.prototype;
const c_DataView = c.DataView;
const u_NATIVE_ARRAY_BUFFER_VIEWS = u.NATIVE_ARRAY_BUFFER_VIEWS;
const u_TYPED_ARRAY_TAG = u.TYPED_ARRAY_TAG;
const u_TypedArray = u.TypedArray;
const u_TypedArrayPrototype = u.TypedArrayPrototype;
const u_aTypedArrayConstructor = u.aTypedArrayConstructor;
const u_isTypedArray = u.isTypedArray;
const H = "BYTES_PER_ELEMENT";
const Q = "Wrong length";
const Z = (r, t) => {
  u_aTypedArrayConstructor(r);
  for (var e = 0, n = t.length, o = new r(n); n > e;) {
    o[e] = t[e++];
  }
  return o;
};
const $ = (r, t) => {
  T(r, t, {
    configurable: true,
    get: function () {
      return P_get(this)[t];
    },
  });
};
const rr = (r) => {
  let t;
  return (
    S(Y_prototype, r) ||
    (t = A(r)) === "ArrayBuffer" ||
    t === "SharedArrayBuffer"
  );
};
const rt = (r, t) => u_isTypedArray(r) && !x(t) && t in r && v(+t) && t >= 0;
const getOwnPropertyDescriptor = function (r, t) {
  if (rt(r, (t = m(t)))) {
    return l(2, r[t]);
  }
  return W(r, t);
};
const defineProperty = function (r, t, e) {
  if (
    rt(r, (t = m(t))) &&
    w(e) &&
    b(e, "value") &&
    !b(e, "get") &&
    !b(e, "set") &&
    !e.configurable &&
    (!b(e, "writable") || e.writable) &&
    (!b(e, "enumerable") || e.enumerable)
  ) {
    r[t] = e.value;
    return r;
  }
  return U(r, t, e);
};
if (a) {
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
  module.exports = function (r, t, e) {
    const a = r.match(/\d+/)[0] / 8;
    const u = `${r + (e ? "Clamped" : "")}Array`;
    const c = "get" + r;
    const l = "set" + r;
    const v = o[u];
    let m = v;
    let b = m && m.prototype;
    const A = {};
    const x = (r, t) => {
      const e = P_get(r);
      return e.view[c](t * a + e.byteOffset, true);
    };
    const S = (r, t, n) => {
      const o = P_get(r);
      o.view[l](t * a + o.byteOffset, e ? y(n) : n, true);
    };
    const T = (r, t) => {
      U(r, t, {
        get: function () {
          return x(this, t);
        },
        set: function (r) {
          return S(this, t, r);
        },
        enumerable: true,
      });
    };
    if (u_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (s) {
        m = t(function (r, t, e, n) {
          f(r, b);
          return F(
            w(t)
              ? rr(t)
                ? n !== undefined
                  ? new v(t, g(e, a), n)
                  : e !== undefined
                    ? new v(t, g(e, a))
                    : new v(t)
                : u_isTypedArray(t)
                  ? Z(m, t)
                  : i(M, m, t)
              : new v(d(t)),
            r,
            m,
          );
        });
        if (O) {
          O(m, u_TypedArray);
        }
        _I_forEach(f_1(v), function (r) {
          if (!(r in m)) {
            h(m, r, v[r]);
          }
        });
        m.prototype = b;
      }
    } else {
      m = t(function (r, t, e, n) {
        f(r, b);
        let buffer;
        let byteLength;
        let length;
        let c = 0;
        let byteOffset = 0;
        if (w(t)) {
          if (rr(t)) {
            buffer = t;
            byteOffset = g(e, a);
            const h = t.byteLength;
            if (n === undefined) {
              if (h % a || (byteLength = h - byteOffset) < 0) {
                throw o_RangeError(Q);
              }
            } else if ((byteLength = p(n) * a) + byteOffset > h) {
              throw o_RangeError(Q);
            }
            length = byteLength / a;
          } else if (u_isTypedArray(t)) {
            return Z(m, t);
          } else {
            return i(M, m, t);
          }
        } else {
          buffer = new c_ArrayBuffer((byteLength = (length = d(t)) * a));
        }
        P_set(r, {
          buffer,
          byteOffset,
          byteLength,
          length,
          view: new c_DataView(buffer),
        });
        while (c < length) {
          T(r, c++);
        }
      });
      if (O) {
        O(m, u_TypedArray);
      }
      b = m.prototype = E(u_TypedArrayPrototype);
    }
    if (b.constructor !== m) {
      h(b, "constructor", m);
    }
    P_enforce(b).TypedArrayConstructor = m;
    if (u_TYPED_ARRAY_TAG) {
      h(b, u_TYPED_ARRAY_TAG, u);
    }
    const forced = m !== v;
    A[u] = m;
    n(
      {
        global: true,
        constructor: true,
        forced,
        sham: !u_NATIVE_ARRAY_BUFFER_VIEWS,
      },
      A,
    );
    if (!(H in m)) {
      h(m, H, a);
    }
    if (!(H in b)) {
      h(b, H, a);
    }
    k(u);
  };
} else {
  module.exports = function () {};
}
