import n from "./module-J_15.js";
import o from "./module-O9_14.js";
import i from "./module-r9_14.js";
import a from "./module-if_15.js";
import s from "./module-Vn_14.js";
import c from "./module-h_15.js";
import u from "./module-I_15.js";
import f from "./module-dFV_14.js";
import l from "./module-X_15.js";
import h from "./module-A2_15.js";
import v from "./module-V6_15.js";
import p from "./module-dV_14.js";
import d from "./module-wr_14.js";
import g from "./module-up_14.js";
import y from "./module-H_2_14.js";
import b from "./module-d4_14.js";
import { f as f_1 } from "./module-vV_14.js";
import A from "./module-ac_15.js";
import x from "./module-wL_14.js";
import w from "./module-HZ_14.js";
import S from "./module-b_14.js";
const s_PROPER = s.PROPER;
const s_CONFIGURABLE = s.CONFIGURABLE;
const R = "ArrayBuffer";
const M = "DataView";
const I = "prototype";
const k = "Wrong index";
const j = S.getterFor(R);
const T = S.getterFor(M);
const S_set = S.set;
const P = n[R];
let ArrayBuffer = P;
let D = ArrayBuffer && ArrayBuffer[I];
let DataView = n[M];
let L = DataView && DataView[I];
const n_Array = n.Array;
const n_RangeError = n.RangeError;
const Y = o(A);
const B = o([].reverse);
const g_pack = g.pack;
const g_unpack = g.unpack;
const X = function (t) {
  return [255 & t];
};
const G = function (t) {
  return [255 & t, (t >> 8) & 255];
};
const J = function (t) {
  return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
};
const H = (t) => (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
const q = function (t) {
  return g_pack(t, 23, 4);
};
const K = function (t) {
  return g_pack(t, 52, 8);
};
const Q = (t, r, e) => {
  u(t[I], r, {
    configurable: true,
    get: function () {
      return e(this)[r];
    },
  });
};
const Z = (t, r, e, n) => {
  const o = T(t);
  const i = d(e);
  if (i + r > o.byteLength) {
    throw n_RangeError(k);
  }
  const o_bytes = o.bytes;
  const s = i + o.byteOffset;
  const c = x(o_bytes, s, s + r);
  if (n) {
    return c;
  }
  return B(c);
};
const $ = (t, r, e, n, o, i) => {
  const a = T(t);
  const s = d(e);
  const c = n(+o);
  const u = !!i;
  if (s + r > a.byteLength) {
    throw n_RangeError(k);
  }
  const a_bytes = a.bytes;
  const l = s + a.byteOffset;
  for (let h = 0; h < r; h++) {
    a_bytes[l + h] = c[u ? h : r - h - 1];
  }
};
if (a) {
  const tt = s_PROPER && P.name !== R;
  if (
    !l(function () {
      P(1);
    }) ||
    !l(function () {
      new P(-1);
    }) ||
    l(function () {
      new P();
      new P(1.5);
      new P(0 / 0);
      return P.length !== 1 || (tt && !s_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (t) {
      h(this, D);
      return new P(d(t));
    };
    ArrayBuffer[I] = D;
    let tr;
    for (let te = f_1(P), tn = 0; te.length > tn;) {
      if (!((tr = te[tn++]) in ArrayBuffer)) {
        c(ArrayBuffer, tr, P[tr]);
      }
    }
    D.constructor = ArrayBuffer;
  } else {
    if (tt && s_CONFIGURABLE) {
      c(P, "name", R);
    }
  }
  if (b && y(L) !== Object.prototype) {
    b(L, Object.prototype);
  }
  const to = new DataView(new ArrayBuffer(2));
  const ti = o(L.setInt8);
  to.setInt8(0, 2147483648);
  to.setInt8(1, 2147483649);
  if (to.getInt8(0) || !to.getInt8(1)) {
    f(
      L,
      {
        setInt8: function (t, r) {
          ti(this, t, (r << 24) >> 24);
        },
        setUint8: function (t, r) {
          ti(this, t, (r << 24) >> 24);
        },
      },
      {
        unsafe: true,
      },
    );
  }
} else {
  D = (ArrayBuffer = function (t) {
    h(this, D);
    const r = d(t);
    S_set(this, {
      type: R,
      bytes: Y(n_Array(r), 0),
      byteLength: r,
    });
    if (!i) {
      this.byteLength = r;
      this.detached = false;
    }
  })[I];
  L = (DataView = function (buffer, r, e) {
    h(this, L);
    h(buffer, D);
    const n = j(buffer);
    const n_byteLength = n.byteLength;
    const byteOffset = v(r);
    if (byteOffset < 0 || byteOffset > n_byteLength) {
      throw n_RangeError("Wrong offset");
    }
    e = e === undefined ? n_byteLength - byteOffset : p(e);
    if (byteOffset + e > n_byteLength) {
      throw n_RangeError("Wrong length");
    }
    S_set(this, {
      type: M,
      buffer,
      byteLength: e,
      byteOffset,
      bytes: n.bytes,
    });
    if (!i) {
      this.buffer = buffer;
      this.byteLength = e;
      this.byteOffset = byteOffset;
    }
  })[I];
  if (i) {
    Q(ArrayBuffer, "byteLength", j);
    Q(DataView, "buffer", T);
    Q(DataView, "byteLength", T);
    Q(DataView, "byteOffset", T);
  }
  f(L, {
    getInt8: function (t) {
      return (Z(this, 1, t)[0] << 24) >> 24;
    },
    getUint8: function (t) {
      return Z(this, 1, t)[0];
    },
    getInt16: function (t) {
      const r = Z(this, 2, t, arguments.length > 1 && arguments[1]);
      return (((r[1] << 8) | r[0]) << 16) >> 16;
    },
    getUint16: function (t) {
      const r = Z(this, 2, t, arguments.length > 1 && arguments[1]);
      return (r[1] << 8) | r[0];
    },
    getInt32: function (t) {
      return H(Z(this, 4, t, arguments.length > 1 && arguments[1]));
    },
    getUint32: function (t) {
      return H(Z(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
    },
    getFloat32: function (t) {
      return g_unpack(Z(this, 4, t, arguments.length > 1 && arguments[1]), 23);
    },
    getFloat64: function (t) {
      return g_unpack(Z(this, 8, t, arguments.length > 1 && arguments[1]), 52);
    },
    setInt8: function (t, r) {
      $(this, 1, t, X, r);
    },
    setUint8: function (t, r) {
      $(this, 1, t, X, r);
    },
    setInt16: function (t, r) {
      $(this, 2, t, G, r, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (t, r) {
      $(this, 2, t, G, r, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (t, r) {
      $(this, 4, t, J, r, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (t, r) {
      $(this, 4, t, J, r, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (t, r) {
      $(this, 4, t, q, r, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function (t, r) {
      $(this, 8, t, K, r, arguments.length > 2 && arguments[2]);
    },
  });
}
w(ArrayBuffer, R);
w(DataView, M);
export default {
  ArrayBuffer,
  DataView,
};
