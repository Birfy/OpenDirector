import n from "./module-u.js";
import o from "./module-o.js";
import i from "./module-F.js";
import a from "./module-hU_2.js";
import s from "./module-A.js";
import u from "./module-z3.js";
import c from "./module-Tg_2.js";
import f from "./module-IG_3.js";
import l from "./module-VV_4.js";
import p from "./module-i9_3.js";
import h from "./module-Ok_2.js";
import v from "./module-L_2.js";
import d from "./module-Xp_2.js";
import g from "./module-ek_3.js";
import y from "./module-jA_2.js";
import m from "./module-P.js";
import { f as f_1 } from "./module-Fb_2.js";
import b from "./module-WE_2.js";
import w from "./module-us_3.js";
import A from "./module-Ii_2_2.js";
import E from "./module-G_2.js";
const s_PROPER = s.PROPER;
const s_CONFIGURABLE = s.CONFIGURABLE;
const R = "ArrayBuffer";
const z = "DataView";
const O = "prototype";
const S = "Wrong index";
const _ = E.getterFor(R);
const T = E.getterFor(z);
const E_set = E.set;
const M = n[R];
let ArrayBuffer = M;
let q = ArrayBuffer && ArrayBuffer[O];
let DataView = n[z];
let P = DataView && DataView[O];
const n_Array = n.Array;
const n_RangeError = n.RangeError;
const L = o(b);
const U = o([].reverse);
const g_pack = g.pack;
const g_unpack = g.unpack;
const Y = function (e) {
  return [255 & e];
};
const W = function (e) {
  return [255 & e, (e >> 8) & 255];
};
const H = function (e) {
  return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
};
const $ = (e) => (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
const X = function (e) {
  return g_pack(e, 23, 4);
};
const K = function (e) {
  return g_pack(e, 52, 8);
};
const Q = (e, t, r) => {
  c(e[O], t, {
    configurable: true,
    get: function () {
      return r(this)[t];
    },
  });
};
const Z = (e, t, r, n) => {
  const o = T(e);
  const i = d(r);
  if (i + t > o.byteLength) {
    throw n_RangeError(S);
  }
  const o_bytes = o.bytes;
  const s = i + o.byteOffset;
  const u = w(o_bytes, s, s + t);
  if (n) {
    return u;
  }
  return U(u);
};
const J = (e, t, r, n, o, i) => {
  const a = T(e);
  const s = d(r);
  const u = n(+o);
  const c = !!i;
  if (s + t > a.byteLength) {
    throw n_RangeError(S);
  }
  const a_bytes = a.bytes;
  const l = s + a.byteOffset;
  for (let p = 0; p < t; p++) {
    a_bytes[l + p] = u[c ? p : t - p - 1];
  }
};
if (a) {
  const ee = s_PROPER && M.name !== R;
  if (
    !l(function () {
      M(1);
    }) ||
    !l(function () {
      new M(-1);
    }) ||
    l(function () {
      new M();
      new M(1.5);
      new M(0 / 0);
      return M.length !== 1 || (ee && !s_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (e) {
      p(this, q);
      return new M(d(e));
    };
    ArrayBuffer[O] = q;
    let et;
    for (let er = f_1(M), en = 0; er.length > en;) {
      if (!((et = er[en++]) in ArrayBuffer)) {
        u(ArrayBuffer, et, M[et]);
      }
    }
    q.constructor = ArrayBuffer;
  } else {
    if (ee && s_CONFIGURABLE) {
      u(M, "name", R);
    }
  }
  if (m && y(P) !== Object.prototype) {
    m(P, Object.prototype);
  }
  const eo = new DataView(new ArrayBuffer(2));
  const ei = o(P.setInt8);
  eo.setInt8(0, 2147483648);
  eo.setInt8(1, 2147483649);
  if (eo.getInt8(0) || !eo.getInt8(1)) {
    f(
      P,
      {
        setInt8: function (e, t) {
          ei(this, e, (t << 24) >> 24);
        },
        setUint8: function (e, t) {
          ei(this, e, (t << 24) >> 24);
        },
      },
      {
        unsafe: true,
      },
    );
  }
} else {
  q = (ArrayBuffer = function (e) {
    p(this, q);
    const t = d(e);
    E_set(this, {
      type: R,
      bytes: L(n_Array(t), 0),
      byteLength: t,
    });
    if (!i) {
      this.byteLength = t;
      this.detached = false;
    }
  })[O];
  P = (DataView = function (buffer, t, r) {
    p(this, P);
    p(buffer, q);
    const n = _(buffer);
    const n_byteLength = n.byteLength;
    const byteOffset = h(t);
    if (byteOffset < 0 || byteOffset > n_byteLength) {
      throw n_RangeError("Wrong offset");
    }
    r = r === undefined ? n_byteLength - byteOffset : v(r);
    if (byteOffset + r > n_byteLength) {
      throw n_RangeError("Wrong length");
    }
    E_set(this, {
      type: z,
      buffer,
      byteLength: r,
      byteOffset,
      bytes: n.bytes,
    });
    if (!i) {
      this.buffer = buffer;
      this.byteLength = r;
      this.byteOffset = byteOffset;
    }
  })[O];
  if (i) {
    Q(ArrayBuffer, "byteLength", _);
    Q(DataView, "buffer", T);
    Q(DataView, "byteLength", T);
    Q(DataView, "byteOffset", T);
  }
  f(P, {
    getInt8: function (e) {
      return (Z(this, 1, e)[0] << 24) >> 24;
    },
    getUint8: function (e) {
      return Z(this, 1, e)[0];
    },
    getInt16: function (e) {
      const t = Z(this, 2, e, arguments.length > 1 && arguments[1]);
      return (((t[1] << 8) | t[0]) << 16) >> 16;
    },
    getUint16: function (e) {
      const t = Z(this, 2, e, arguments.length > 1 && arguments[1]);
      return (t[1] << 8) | t[0];
    },
    getInt32: function (e) {
      return $(Z(this, 4, e, arguments.length > 1 && arguments[1]));
    },
    getUint32: function (e) {
      return $(Z(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
    },
    getFloat32: function (e) {
      return g_unpack(Z(this, 4, e, arguments.length > 1 && arguments[1]), 23);
    },
    getFloat64: function (e) {
      return g_unpack(Z(this, 8, e, arguments.length > 1 && arguments[1]), 52);
    },
    setInt8: function (e, t) {
      J(this, 1, e, Y, t);
    },
    setUint8: function (e, t) {
      J(this, 1, e, Y, t);
    },
    setInt16: function (e, t) {
      J(this, 2, e, W, t, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (e, t) {
      J(this, 2, e, W, t, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (e, t) {
      J(this, 4, e, H, t, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (e, t) {
      J(this, 4, e, H, t, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (e, t) {
      J(this, 4, e, X, t, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function (e, t) {
      J(this, 8, e, K, t, arguments.length > 2 && arguments[2]);
    },
  });
}
A(ArrayBuffer, R);
A(DataView, z);
export default {
  ArrayBuffer,
  DataView,
};
