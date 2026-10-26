import n from "./module-A_20.js";
import o from "./module-J_20.js";
import i from "./module-M_2_19.js";
import a from "./module-r9_19.js";
import s from "./module-by_2_19.js";
import u from "./module-vB_21.js";
import c from "./module-ma_20.js";
import f from "./module-A2_20.js";
import l from "./module-w_20.js";
import h from "./module-h_20.js";
import v from "./module-R3_20.js";
import p from "./module-dV_19.js";
import d from "./module-wr_19.js";
import g from "./module-C1_20.js";
import y from "./module-ip_2_19.js";
import b from "./module-Vm_2_19.js";
import m from "./module-D_2_19.js";
import A from "./module-S9_19.js";
import x from "./module-y_2_19.js";
import w from "./module-i_2_19.js";
import S from "./module-Za_19.js";
import E from "./module-e_19.js";
import O from "./module-d4_19.js";
import { f as f_1 } from "./module-vV_19.js";
import M from "./module-pV_2_19.js";
import _I from "./module-JY_19.js";
import k from "./module-FG_19.js";
import T from "./module-I_20.js";
import j from "./module-t_20.js";
import N from "./module-R_19.js";
import F from "./module-b_19.js";
import P from "./module-JD_20.js";
const _I_forEach = _I.forEach;
const F_get = F.get;
const F_set = F.set;
const F_enforce = F.enforce;
const U = j.f;
const V = N.f;
const o_RangeError = o.RangeError;
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
      return F_get(this)[t];
    },
  });
};
const rr = (r) => {
  let t;
  return (
    E(B_prototype, r) ||
    (t = A(r)) === "ArrayBuffer" ||
    t === "SharedArrayBuffer"
  );
};
const rt = (r, t) => u_isTypedArray(r) && !w(t) && t in r && v(+t) && t >= 0;
const getOwnPropertyDescriptor = function (r, t) {
  if (rt(r, (t = b(t)))) {
    return l(2, r[t]);
  }
  return V(r, t);
};
const defineProperty = function (r, t, e) {
  if (
    rt(r, (t = b(t))) &&
    x(e) &&
    m(e, "value") &&
    !m(e, "get") &&
    !m(e, "set") &&
    !e.configurable &&
    (!m(e, "writable") || e.writable) &&
    (!m(e, "enumerable") || e.enumerable)
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
    let b = v;
    let m = b && b.prototype;
    const A = {};
    const w = (r, t) => {
      const e = F_get(r);
      return e.view[c](t * a + e.byteOffset, true);
    };
    const E = (r, t, n) => {
      const o = F_get(r);
      o.view[l](t * a + o.byteOffset, e ? y(n) : n, true);
    };
    const T = (r, t) => {
      U(r, t, {
        get: function () {
          return w(this, t);
        },
        set: function (r) {
          return E(this, t, r);
        },
        enumerable: true,
      });
    };
    if (u_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (s) {
        b = t(function (r, t, e, n) {
          f(r, m);
          return P(
            x(t)
              ? rr(t)
                ? n !== undefined
                  ? new v(t, g(e, a), n)
                  : e !== undefined
                    ? new v(t, g(e, a))
                    : new v(t)
                : u_isTypedArray(t)
                  ? Z(b, t)
                  : i(M, b, t)
              : new v(d(t)),
            r,
            b,
          );
        });
        if (O) {
          O(b, u_TypedArray);
        }
        _I_forEach(f_1(v), function (r) {
          if (!(r in b)) {
            h(b, r, v[r]);
          }
        });
        b.prototype = m;
      }
    } else {
      b = t(function (r, t, e, n) {
        f(r, m);
        let buffer;
        let byteLength;
        let length;
        let c = 0;
        let byteOffset = 0;
        if (x(t)) {
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
            return Z(b, t);
          } else {
            return i(M, b, t);
          }
        } else {
          buffer = new c_ArrayBuffer((byteLength = (length = d(t)) * a));
        }
        F_set(r, {
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
        O(b, u_TypedArray);
      }
      m = b.prototype = S(u_TypedArrayPrototype);
    }
    if (m.constructor !== b) {
      h(m, "constructor", b);
    }
    F_enforce(m).TypedArrayConstructor = b;
    if (u_TYPED_ARRAY_TAG) {
      h(m, u_TYPED_ARRAY_TAG, u);
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
      h(b, H, a);
    }
    if (!(H in m)) {
      h(m, H, a);
    }
    k(u);
  };
} else {
  module.exports = function () {};
}
