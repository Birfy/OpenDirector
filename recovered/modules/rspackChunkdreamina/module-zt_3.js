import n from "./module-g.js";
import o from "./module-u.js";
import i from "./module-p3.js";
import a from "./module-F.js";
import s from "./module-RR_2.js";
import u from "./module-ga_2.js";
import c from "./module-PR_3.js";
import f from "./module-i9_3.js";
import l from "./module-M.js";
import p from "./module-z3.js";
import h from "./module-PU_3.js";
import v from "./module-L_2.js";
import d from "./module-Xp_2.js";
import g from "./module-im_2.js";
import y from "./module-ob.js";
import m from "./module-c_2.js";
import x from "./module-h.js";
import b from "./module-xE_3.js";
import w from "./module-N.js";
import A from "./module-n_2.js";
import E from "./module-lY_4.js";
import j from "./module-V8.js";
import I from "./module-P.js";
import { f as f_1 } from "./module-Fb_2.js";
import z from "./module-ac_2.js";
import _O from "./module-GK_2.js";
import S from "./module-DP_2.js";
import _ from "./module-Tg_2.js";
import T from "./module-R_2.js";
import k from "./module-y_2.js";
import M from "./module-G_2.js";
import B from "./module-U_2.js";
const _O_forEach = _O.forEach;
const M_get = M.get;
const M_set = M.set;
const M_enforce = M.enforce;
const F = T.f;
const C = k.f;
const o_RangeError = o.RangeError;
const c_ArrayBuffer = c.ArrayBuffer;
const L_prototype = c_ArrayBuffer.prototype;
const c_DataView = c.DataView;
const u_NATIVE_ARRAY_BUFFER_VIEWS = u.NATIVE_ARRAY_BUFFER_VIEWS;
const u_TYPED_ARRAY_TAG = u.TYPED_ARRAY_TAG;
const u_TypedArray = u.TypedArray;
const u_TypedArrayPrototype = u.TypedArrayPrototype;
const u_aTypedArrayConstructor = u.aTypedArrayConstructor;
const u_isTypedArray = u.isTypedArray;
const K = "BYTES_PER_ELEMENT";
const Q = "Wrong length";
const Z = (e, t) => {
  u_aTypedArrayConstructor(e);
  for (var r = 0, n = t.length, o = new e(n); n > r;) {
    o[r] = t[r++];
  }
  return o;
};
const J = (e, t) => {
  _(e, t, {
    configurable: true,
    get: function () {
      return M_get(this)[t];
    },
  });
};
const ee = (e) => {
  let t;
  return (
    j(L_prototype, e) ||
    (t = b(e)) === "ArrayBuffer" ||
    t === "SharedArrayBuffer"
  );
};
const et = (e, t) => u_isTypedArray(e) && !A(t) && t in e && h(+t) && t >= 0;
const getOwnPropertyDescriptor = function (e, t) {
  if (et(e, (t = m(t)))) {
    return l(2, e[t]);
  }
  return C(e, t);
};
const defineProperty = function (e, t, r) {
  if (
    et(e, (t = m(t))) &&
    w(r) &&
    x(r, "value") &&
    !x(r, "get") &&
    !x(r, "set") &&
    !r.configurable &&
    (!x(r, "writable") || r.writable) &&
    (!x(r, "enumerable") || r.enumerable)
  ) {
    e[t] = r.value;
    return e;
  }
  return F(e, t, r);
};
if (a) {
  if (!u_NATIVE_ARRAY_BUFFER_VIEWS) {
    k.f = getOwnPropertyDescriptor;
    T.f = defineProperty;
    J(u_TypedArrayPrototype, "buffer");
    J(u_TypedArrayPrototype, "byteOffset");
    J(u_TypedArrayPrototype, "byteLength");
    J(u_TypedArrayPrototype, "length");
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
  module.exports = function (e, t, r) {
    const a = e.match(/\d+/)[0] / 8;
    const u = `${e + (r ? "Clamped" : "")}Array`;
    const c = "get" + e;
    const l = "set" + e;
    const h = o[u];
    let m = h;
    let x = m && m.prototype;
    const b = {};
    const A = (e, t) => {
      const r = M_get(e);
      return r.view[c](t * a + r.byteOffset, true);
    };
    const j = (e, t, n) => {
      const o = M_get(e);
      o.view[l](t * a + o.byteOffset, r ? y(n) : n, true);
    };
    const _ = (e, t) => {
      F(e, t, {
        get: function () {
          return A(this, t);
        },
        set: function (e) {
          return j(this, t, e);
        },
        enumerable: true,
      });
    };
    if (u_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (s) {
        m = t(function (e, t, r, n) {
          f(e, x);
          return B(
            w(t)
              ? ee(t)
                ? n !== undefined
                  ? new h(t, g(r, a), n)
                  : r !== undefined
                    ? new h(t, g(r, a))
                    : new h(t)
                : u_isTypedArray(t)
                  ? Z(m, t)
                  : i(z, m, t)
              : new h(d(t)),
            e,
            m,
          );
        });
        if (I) {
          I(m, u_TypedArray);
        }
        _O_forEach(f_1(h), function (e) {
          if (!(e in m)) {
            p(m, e, h[e]);
          }
        });
        m.prototype = x;
      }
    } else {
      m = t(function (e, t, r, n) {
        f(e, x);
        let buffer;
        let byteLength;
        let length;
        let c = 0;
        let byteOffset = 0;
        if (w(t)) {
          if (ee(t)) {
            buffer = t;
            byteOffset = g(r, a);
            const p = t.byteLength;
            if (n === undefined) {
              if (p % a || (byteLength = p - byteOffset) < 0) {
                throw o_RangeError(Q);
              }
            } else if ((byteLength = v(n) * a) + byteOffset > p) {
              throw o_RangeError(Q);
            }
            length = byteLength / a;
          } else if (u_isTypedArray(t)) {
            return Z(m, t);
          } else {
            return i(z, m, t);
          }
        } else {
          buffer = new c_ArrayBuffer((byteLength = (length = d(t)) * a));
        }
        M_set(e, {
          buffer,
          byteOffset,
          byteLength,
          length,
          view: new c_DataView(buffer),
        });
        while (c < length) {
          _(e, c++);
        }
      });
      if (I) {
        I(m, u_TypedArray);
      }
      x = m.prototype = E(u_TypedArrayPrototype);
    }
    if (x.constructor !== m) {
      p(x, "constructor", m);
    }
    M_enforce(x).TypedArrayConstructor = m;
    if (u_TYPED_ARRAY_TAG) {
      p(x, u_TYPED_ARRAY_TAG, u);
    }
    const forced = m !== h;
    b[u] = m;
    n(
      {
        global: true,
        constructor: true,
        forced,
        sham: !u_NATIVE_ARRAY_BUFFER_VIEWS,
      },
      b,
    );
    if (!(K in m)) {
      p(m, K, a);
    }
    if (!(K in x)) {
      p(x, K, a);
    }
    S(u);
  };
} else {
  module.exports = function () {};
}
