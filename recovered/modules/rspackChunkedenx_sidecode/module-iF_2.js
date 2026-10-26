import n from "./module-A.js";
import o from "./module-J.js";
import i from "./module-M_2.js";
import a from "./module-r9.js";
import s from "./module-by_2.js";
import u from "./module-vB.js";
import c from "./module-ma.js";
import f from "./module-A2.js";
import h from "./module-w.js";
import l from "./module-h.js";
import v from "./module-R3.js";
import p from "./module-dV.js";
import d from "./module-wr.js";
import g from "./module-C1.js";
import y from "./module-ip_2.js";
import b from "./module-Vm_2.js";
import m from "./module-D_2.js";
import A from "./module-S9.js";
import x from "./module-y_2.js";
import w from "./module-i_2.js";
import S from "./module-Za.js";
import E from "./module-e.js";
import O from "./module-d4.js";
import { f as f_1 } from "./module-vV.js";
import M from "./module-pV_2.js";
import _I from "./module-JY.js";
import k from "./module-FG.js";
import T from "./module-I.js";
import j from "./module-t.js";
import N from "./module-R.js";
import F from "./module-b.js";
import P from "./module-JD.js";
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
const Z = (t, r) => {
  u_aTypedArrayConstructor(t);
  for (var e = 0, n = r.length, o = new t(n); n > e;) {
    o[e] = r[e++];
  }
  return o;
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
  module.exports = function (t, r, e) {
    const a = t.match(/\d+/)[0] / 8;
    const u = `${t + (e ? "Clamped" : "")}Array`;
    const c = "get" + t;
    const h = "set" + t;
    const v = o[u];
    let b = v;
    let m = b && b.prototype;
    const A = {};
    const w = (t, r) => {
      const e = F_get(t);
      return e.view[c](r * a + e.byteOffset, true);
    };
    const E = (t, r, n) => {
      const o = F_get(t);
      o.view[h](r * a + o.byteOffset, e ? y(n) : n, true);
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
      if (s) {
        b = r(function (t, r, e, n) {
          f(t, m);
          return P(
            x(r)
              ? tt(r)
                ? n !== undefined
                  ? new v(r, g(e, a), n)
                  : e !== undefined
                    ? new v(r, g(e, a))
                    : new v(r)
                : u_isTypedArray(r)
                  ? Z(b, r)
                  : i(M, b, r)
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
            byteOffset = g(e, a);
            const l = r.byteLength;
            if (n === undefined) {
              if (l % a || (byteLength = l - byteOffset) < 0) {
                throw o_RangeError(Q);
              }
            } else if ((byteLength = p(n) * a) + byteOffset > l) {
              throw o_RangeError(Q);
            }
            length = byteLength / a;
          } else if (u_isTypedArray(r)) {
            return Z(b, r);
          } else {
            return i(M, b, r);
          }
        } else {
          buffer = new c_ArrayBuffer((byteLength = (length = d(r)) * a));
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
      l(b, H, a);
    }
    if (!(H in m)) {
      l(m, H, a);
    }
    k(u);
  };
} else {
  module.exports = function () {};
}
