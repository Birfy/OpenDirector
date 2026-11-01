import n from "./module-A_10.js";
import o from "./module-J_10.js";
import i from "./module-M_2_9.js";
import a from "./module-r9_9.js";
import s from "./module-by_2_9.js";
import u from "./module-vB_11.js";
import c from "./module-ma_10.js";
import f from "./module-A2_10.js";
import l from "./module-w_10.js";
import h from "./module-h_10.js";
import v from "./module-R3_10.js";
import d from "./module-dV_9.js";
import p from "./module-wr_9.js";
import g from "./module-C1_10.js";
import y from "./module-ip_2_9.js";
import m from "./module-Vm_2_9.js";
import b from "./module-D_2_9.js";
import w from "./module-S9_9.js";
import A from "./module-y_2_9.js";
import x from "./module-i_2_9.js";
import E from "./module-Za_9.js";
import S from "./module-e_9.js";
import O from "./module-d4_9.js";
import { f as f_1 } from "./module-vV_9.js";
import R from "./module-pV_2_9.js";
import _M from "./module-JY_9.js";
import I from "./module-FG_9.js";
import T from "./module-I_10.js";
import k from "./module-t_10.js";
import N from "./module-R_9.js";
import j from "./module-b_9.js";
import P from "./module-JD_10.js";
const _M_forEach = _M.forEach;
const j_get = j.get;
const j_set = j.set;
const j_enforce = j.enforce;
const L = k.f;
const U = N.f;
const o_RangeError = o.RangeError;
const c_ArrayBuffer = c.ArrayBuffer;
const V_prototype = c_ArrayBuffer.prototype;
const c_DataView = c.DataView;
const u_NATIVE_ARRAY_BUFFER_VIEWS = u.NATIVE_ARRAY_BUFFER_VIEWS;
const u_TYPED_ARRAY_TAG = u.TYPED_ARRAY_TAG;
const u_TypedArray = u.TypedArray;
const u_TypedArrayPrototype = u.TypedArrayPrototype;
const u_aTypedArrayConstructor = u.aTypedArrayConstructor;
const u_isTypedArray = u.isTypedArray;
const K = "BYTES_PER_ELEMENT";
const Q = "Wrong length";
const Z = (t, e) => {
  u_aTypedArrayConstructor(t);
  for (var r = 0, n = e.length, o = new t(n); n > r;) {
    o[r] = e[r++];
  }
  return o;
};
const $ = (t, e) => {
  T(t, e, {
    configurable: true,
    get: function () {
      return j_get(this)[e];
    },
  });
};
const tt = (t) => {
  let e;
  return (
    S(V_prototype, t) ||
    (e = w(t)) === "ArrayBuffer" ||
    e === "SharedArrayBuffer"
  );
};
const te = (t, e) => u_isTypedArray(t) && !x(e) && e in t && v(+e) && e >= 0;
const getOwnPropertyDescriptor = function (t, e) {
  if (te(t, (e = m(e)))) {
    return l(2, t[e]);
  }
  return U(t, e);
};
const defineProperty = function (t, e, r) {
  if (
    te(t, (e = m(e))) &&
    A(r) &&
    b(r, "value") &&
    !b(r, "get") &&
    !b(r, "set") &&
    !r.configurable &&
    (!b(r, "writable") || r.writable) &&
    (!b(r, "enumerable") || r.enumerable)
  ) {
    t[e] = r.value;
    return t;
  }
  return L(t, e, r);
};
if (a) {
  if (!u_NATIVE_ARRAY_BUFFER_VIEWS) {
    N.f = getOwnPropertyDescriptor;
    k.f = defineProperty;
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
  module.exports = function (t, e, r) {
    const a = t.match(/\d+/)[0] / 8;
    const u = `${t + (r ? "Clamped" : "")}Array`;
    const c = "get" + t;
    const l = "set" + t;
    const v = o[u];
    let m = v;
    let b = m && m.prototype;
    const w = {};
    const x = (t, e) => {
      const r = j_get(t);
      return r.view[c](e * a + r.byteOffset, true);
    };
    const S = (t, e, n) => {
      const o = j_get(t);
      o.view[l](e * a + o.byteOffset, r ? y(n) : n, true);
    };
    const T = (t, e) => {
      L(t, e, {
        get: function () {
          return x(this, e);
        },
        set: function (t) {
          return S(this, e, t);
        },
        enumerable: true,
      });
    };
    if (u_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (s) {
        m = e(function (t, e, r, n) {
          f(t, b);
          return P(
            A(e)
              ? tt(e)
                ? n !== undefined
                  ? new v(e, g(r, a), n)
                  : r !== undefined
                    ? new v(e, g(r, a))
                    : new v(e)
                : u_isTypedArray(e)
                  ? Z(m, e)
                  : i(R, m, e)
              : new v(p(e)),
            t,
            m,
          );
        });
        if (O) {
          O(m, u_TypedArray);
        }
        _M_forEach(f_1(v), function (t) {
          if (!(t in m)) {
            h(m, t, v[t]);
          }
        });
        m.prototype = b;
      }
    } else {
      m = e(function (t, e, r, n) {
        f(t, b);
        let buffer;
        let byteLength;
        let length;
        let c = 0;
        let byteOffset = 0;
        if (A(e)) {
          if (tt(e)) {
            buffer = e;
            byteOffset = g(r, a);
            const h = e.byteLength;
            if (n === undefined) {
              if (h % a || (byteLength = h - byteOffset) < 0) {
                throw o_RangeError(Q);
              }
            } else if ((byteLength = d(n) * a) + byteOffset > h) {
              throw o_RangeError(Q);
            }
            length = byteLength / a;
          } else if (u_isTypedArray(e)) {
            return Z(m, e);
          } else {
            return i(R, m, e);
          }
        } else {
          buffer = new c_ArrayBuffer((byteLength = (length = p(e)) * a));
        }
        j_set(t, {
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
        O(m, u_TypedArray);
      }
      b = m.prototype = E(u_TypedArrayPrototype);
    }
    if (b.constructor !== m) {
      h(b, "constructor", m);
    }
    j_enforce(b).TypedArrayConstructor = m;
    if (u_TYPED_ARRAY_TAG) {
      h(b, u_TYPED_ARRAY_TAG, u);
    }
    const forced = m !== v;
    w[u] = m;
    n(
      {
        global: true,
        constructor: true,
        forced,
        sham: !u_NATIVE_ARRAY_BUFFER_VIEWS,
      },
      w,
    );
    if (!(K in m)) {
      h(m, K, a);
    }
    if (!(K in b)) {
      h(b, K, a);
    }
    I(u);
  };
} else {
  module.exports = function () {};
}
