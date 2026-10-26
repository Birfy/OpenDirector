import n from "./module-A_7.js";
import o from "./module-J_7.js";
import a from "./module-M_2_6.js";
import i from "./module-r9_6.js";
import s from "./module-by_2_6.js";
import c from "./module-vB_8.js";
import u from "./module-ma_7.js";
import f from "./module-A2_7.js";
import l from "./module-w_7.js";
import h from "./module-h_7.js";
import p from "./module-R3_7.js";
import v from "./module-dV_6.js";
import d from "./module-wr_6.js";
import g from "./module-C1_7.js";
import y from "./module-ip_2_6.js";
import m from "./module-Vm_2_6.js";
import b from "./module-D_2_6.js";
import A from "./module-S9_6.js";
import w from "./module-y_2_6.js";
import x from "./module-i_2_6.js";
import E from "./module-Za_6.js";
import S from "./module-e_6.js";
import O from "./module-d4_6.js";
import { f as f_1 } from "./module-vV_6.js";
import M from "./module-pV_2_6.js";
import _I from "./module-JY_6.js";
import k from "./module-FG_6.js";
import T from "./module-I_7.js";
import j from "./module-t_7.js";
import F from "./module-R_6.js";
import N from "./module-b_6.js";
import P from "./module-JD_7.js";
const _I_forEach = _I.forEach;
const N_get = N.get;
const N_set = N.set;
const N_enforce = N.enforce;
const _ = j.f;
const U = F.f;
const o_RangeError = o.RangeError;
const u_ArrayBuffer = u.ArrayBuffer;
const W_prototype = u_ArrayBuffer.prototype;
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
  T(t, r, {
    configurable: true,
    get: function () {
      return N_get(this)[r];
    },
  });
};
const tt = (t) => {
  let r;
  return (
    S(W_prototype, t) ||
    (r = A(t)) === "ArrayBuffer" ||
    r === "SharedArrayBuffer"
  );
};
const tr = (t, r) => c_isTypedArray(t) && !x(r) && r in t && p(+r) && r >= 0;
const getOwnPropertyDescriptor = function (t, r) {
  if (tr(t, (r = m(r)))) {
    return l(2, t[r]);
  }
  return U(t, r);
};
const defineProperty = function (t, r, e) {
  if (
    tr(t, (r = m(r))) &&
    w(e) &&
    b(e, "value") &&
    !b(e, "get") &&
    !b(e, "set") &&
    !e.configurable &&
    (!b(e, "writable") || e.writable) &&
    (!b(e, "enumerable") || e.enumerable)
  ) {
    t[r] = e.value;
    return t;
  }
  return _(t, r, e);
};
if (i) {
  if (!c_NATIVE_ARRAY_BUFFER_VIEWS) {
    F.f = getOwnPropertyDescriptor;
    j.f = defineProperty;
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
    const i = t.match(/\d+/)[0] / 8;
    const c = `${t + (e ? "Clamped" : "")}Array`;
    const u = "get" + t;
    const l = "set" + t;
    const p = o[c];
    let m = p;
    let b = m && m.prototype;
    const A = {};
    const x = (t, r) => {
      const e = N_get(t);
      return e.view[u](r * i + e.byteOffset, true);
    };
    const S = (t, r, n) => {
      const o = N_get(t);
      o.view[l](r * i + o.byteOffset, e ? y(n) : n, true);
    };
    const T = (t, r) => {
      _(t, r, {
        get: function () {
          return x(this, r);
        },
        set: function (t) {
          return S(this, r, t);
        },
        enumerable: true,
      });
    };
    if (c_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (s) {
        m = r(function (t, r, e, n) {
          f(t, b);
          return P(
            w(r)
              ? tt(r)
                ? n !== undefined
                  ? new p(r, g(e, i), n)
                  : e !== undefined
                    ? new p(r, g(e, i))
                    : new p(r)
                : c_isTypedArray(r)
                  ? Z(m, r)
                  : a(M, m, r)
              : new p(d(r)),
            t,
            m,
          );
        });
        if (O) {
          O(m, c_TypedArray);
        }
        _I_forEach(f_1(p), function (t) {
          if (!(t in m)) {
            h(m, t, p[t]);
          }
        });
        m.prototype = b;
      }
    } else {
      m = r(function (t, r, e, n) {
        f(t, b);
        let buffer;
        let byteLength;
        let length;
        let u = 0;
        let byteOffset = 0;
        if (w(r)) {
          if (tt(r)) {
            buffer = r;
            byteOffset = g(e, i);
            const h = r.byteLength;
            if (n === undefined) {
              if (h % i || (byteLength = h - byteOffset) < 0) {
                throw o_RangeError(Q);
              }
            } else if ((byteLength = v(n) * i) + byteOffset > h) {
              throw o_RangeError(Q);
            }
            length = byteLength / i;
          } else if (c_isTypedArray(r)) {
            return Z(m, r);
          } else {
            return a(M, m, r);
          }
        } else {
          buffer = new u_ArrayBuffer((byteLength = (length = d(r)) * i));
        }
        N_set(t, {
          buffer,
          byteOffset,
          byteLength,
          length,
          view: new u_DataView(buffer),
        });
        while (u < length) {
          T(t, u++);
        }
      });
      if (O) {
        O(m, c_TypedArray);
      }
      b = m.prototype = E(c_TypedArrayPrototype);
    }
    if (b.constructor !== m) {
      h(b, "constructor", m);
    }
    N_enforce(b).TypedArrayConstructor = m;
    if (c_TYPED_ARRAY_TAG) {
      h(b, c_TYPED_ARRAY_TAG, c);
    }
    const forced = m !== p;
    A[c] = m;
    n(
      {
        global: true,
        constructor: true,
        forced,
        sham: !c_NATIVE_ARRAY_BUFFER_VIEWS,
      },
      A,
    );
    if (!(K in m)) {
      h(m, K, i);
    }
    if (!(K in b)) {
      h(b, K, i);
    }
    k(c);
  };
} else {
  module.exports = function () {};
}
