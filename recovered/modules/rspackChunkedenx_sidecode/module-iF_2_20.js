import n from "./module-A_21.js";
import o from "./module-J_21.js";
import i from "./module-M_2_20.js";
import a from "./module-r9_20.js";
import s from "./module-by_2_20.js";
import c from "./module-vB_22.js";
import u from "./module-ma_21.js";
import f from "./module-A2_21.js";
import l from "./module-w_21.js";
import h from "./module-h_21.js";
import v from "./module-R3_21.js";
import p from "./module-dV_20.js";
import d from "./module-wr_20.js";
import g from "./module-C1_21.js";
import y from "./module-ip_2_20.js";
import m from "./module-Vm_2_20.js";
import b from "./module-D_2_20.js";
import w from "./module-S9_20.js";
import A from "./module-y_2_20.js";
import x from "./module-i_2_20.js";
import S from "./module-Za_20.js";
import E from "./module-e_20.js";
import O from "./module-d4_20.js";
import { f as f_1 } from "./module-vV_20.js";
import M from "./module-pV_2_20.js";
import _I from "./module-JY_20.js";
import _ from "./module-FG_20.js";
import k from "./module-I_21.js";
import T from "./module-t_21.js";
import j from "./module-R_20.js";
import N from "./module-b_20.js";
import D from "./module-JD_21.js";
const _I_forEach = _I.forEach;
const N_get = N.get;
const N_set = N.set;
const N_enforce = N.enforce;
const L = T.f;
const U = j.f;
const o_RangeError = o.RangeError;
const u_ArrayBuffer = u.ArrayBuffer;
const B_prototype = u_ArrayBuffer.prototype;
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
  k(t, r, {
    configurable: true,
    get: function () {
      return N_get(this)[r];
    },
  });
};
const tt = (t) => {
  let r;
  return (
    E(B_prototype, t) ||
    (r = w(t)) === "ArrayBuffer" ||
    r === "SharedArrayBuffer"
  );
};
const tr = (t, r) => c_isTypedArray(t) && !x(r) && r in t && v(+r) && r >= 0;
const getOwnPropertyDescriptor = function (t, r) {
  if (tr(t, (r = m(r)))) {
    return l(2, t[r]);
  }
  return U(t, r);
};
const defineProperty = function (t, r, e) {
  if (
    tr(t, (r = m(r))) &&
    A(e) &&
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
  return L(t, r, e);
};
if (a) {
  if (!c_NATIVE_ARRAY_BUFFER_VIEWS) {
    j.f = getOwnPropertyDescriptor;
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
    let m = v;
    let b = m && m.prototype;
    const w = {};
    const x = (t, r) => {
      const e = N_get(t);
      return e.view[u](r * a + e.byteOffset, true);
    };
    const E = (t, r, n) => {
      const o = N_get(t);
      o.view[l](r * a + o.byteOffset, e ? y(n) : n, true);
    };
    const k = (t, r) => {
      L(t, r, {
        get: function () {
          return x(this, r);
        },
        set: function (t) {
          return E(this, r, t);
        },
        enumerable: true,
      });
    };
    if (c_NATIVE_ARRAY_BUFFER_VIEWS) {
      if (s) {
        m = r(function (t, r, e, n) {
          f(t, b);
          return D(
            A(r)
              ? tt(r)
                ? n !== undefined
                  ? new v(r, g(e, a), n)
                  : e !== undefined
                    ? new v(r, g(e, a))
                    : new v(r)
                : c_isTypedArray(r)
                  ? Z(m, r)
                  : i(M, m, r)
              : new v(d(r)),
            t,
            m,
          );
        });
        if (O) {
          O(m, c_TypedArray);
        }
        _I_forEach(f_1(v), function (t) {
          if (!(t in m)) {
            h(m, t, v[t]);
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
        if (A(r)) {
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
            return Z(m, r);
          } else {
            return i(M, m, r);
          }
        } else {
          buffer = new u_ArrayBuffer((byteLength = (length = d(r)) * a));
        }
        N_set(t, {
          buffer,
          byteOffset,
          byteLength,
          length,
          view: new u_DataView(buffer),
        });
        while (u < length) {
          k(t, u++);
        }
      });
      if (O) {
        O(m, c_TypedArray);
      }
      b = m.prototype = S(c_TypedArrayPrototype);
    }
    if (b.constructor !== m) {
      h(b, "constructor", m);
    }
    N_enforce(b).TypedArrayConstructor = m;
    if (c_TYPED_ARRAY_TAG) {
      h(b, c_TYPED_ARRAY_TAG, c);
    }
    const forced = m !== v;
    w[c] = m;
    n(
      {
        global: true,
        constructor: true,
        forced,
        sham: !c_NATIVE_ARRAY_BUFFER_VIEWS,
      },
      w,
    );
    if (!(K in m)) {
      h(m, K, a);
    }
    if (!(K in b)) {
      h(b, K, a);
    }
    _(c);
  };
} else {
  module.exports = function () {};
}
