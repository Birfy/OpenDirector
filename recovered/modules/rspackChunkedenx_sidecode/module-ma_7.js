import n from "./module-J_7.js";
import o from "./module-O9_6.js";
import a from "./module-r9_6.js";
import i from "./module-if_7.js";
import s from "./module-Vn_6.js";
import c from "./module-h_7.js";
import u from "./module-I_7.js";
import f from "./module-dFV_6.js";
import l from "./module-X_7.js";
import h from "./module-A2_7.js";
import p from "./module-V6_7.js";
import v from "./module-dV_6.js";
import d from "./module-wr_6.js";
import g from "./module-up_6.js";
import y from "./module-H_2_6.js";
import m from "./module-d4_6.js";
import { f as f_1 } from "./module-vV_6.js";
import A from "./module-ac_7.js";
import w from "./module-wL_6.js";
import x from "./module-HZ_6.js";
import E from "./module-b_6.js";
const s_PROPER = s.PROPER;
const s_CONFIGURABLE = s.CONFIGURABLE;
const R = "ArrayBuffer";
const M = "DataView";
const I = "prototype";
const k = "Wrong index";
const T = E.getterFor(R);
const j = E.getterFor(M);
const E_set = E.set;
const N = n[R];
let ArrayBuffer = N;
let C = ArrayBuffer && ArrayBuffer[I];
let DataView = n[M];
let L = DataView && DataView[I];
const n_Array = n.Array;
const n_RangeError = n.RangeError;
const W = o(A);
const Y = o([].reverse);
const g_pack = g.pack;
const g_unpack = g.unpack;
const X = function (t) {
  return [255 & t];
};
const H = function (t) {
  return [255 & t, (t >> 8) & 255];
};
const G = function (t) {
  return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
};
const J = (t) => (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
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
  const o = j(t);
  const a = d(e);
  if (a + r > o.byteLength) {
    throw n_RangeError(k);
  }
  const o_bytes = o.bytes;
  const s = a + o.byteOffset;
  const c = w(o_bytes, s, s + r);
  if (n) {
    return c;
  }
  return Y(c);
};
const $ = (t, r, e, n, o, a) => {
  const i = j(t);
  const s = d(e);
  const c = n(+o);
  const u = !!a;
  if (s + r > i.byteLength) {
    throw n_RangeError(k);
  }
  const i_bytes = i.bytes;
  const l = s + i.byteOffset;
  for (let h = 0; h < r; h++) {
    i_bytes[l + h] = c[u ? h : r - h - 1];
  }
};
if (i) {
  const tt = s_PROPER && N.name !== R;
  if (
    !l(function () {
      N(1);
    }) ||
    !l(function () {
      new N(-1);
    }) ||
    l(function () {
      new N();
      new N(1.5);
      new N(0 / 0);
      return N.length !== 1 || (tt && !s_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (t) {
      h(this, C);
      return new N(d(t));
    };
    ArrayBuffer[I] = C;
    let tr;
    for (let te = f_1(N), tn = 0; te.length > tn;) {
      if (!((tr = te[tn++]) in ArrayBuffer)) {
        c(ArrayBuffer, tr, N[tr]);
      }
    }
    C.constructor = ArrayBuffer;
  } else {
    if (tt && s_CONFIGURABLE) {
      c(N, "name", R);
    }
  }
  if (m && y(L) !== Object.prototype) {
    m(L, Object.prototype);
  }
  const to = new DataView(new ArrayBuffer(2));
  const ta = o(L.setInt8);
  to.setInt8(0, 2147483648);
  to.setInt8(1, 2147483649);
  if (to.getInt8(0) || !to.getInt8(1)) {
    f(
      L,
      {
        setInt8: function (t, r) {
          ta(this, t, (r << 24) >> 24);
        },
        setUint8: function (t, r) {
          ta(this, t, (r << 24) >> 24);
        },
      },
      {
        unsafe: true,
      },
    );
  }
} else {
  C = (ArrayBuffer = function (t) {
    h(this, C);
    const r = d(t);
    E_set(this, {
      type: R,
      bytes: W(n_Array(r), 0),
      byteLength: r,
    });
    if (!a) {
      this.byteLength = r;
      this.detached = false;
    }
  })[I];
  L = (DataView = function (buffer, r, e) {
    h(this, L);
    h(buffer, C);
    const n = T(buffer);
    const n_byteLength = n.byteLength;
    const byteOffset = p(r);
    if (byteOffset < 0 || byteOffset > n_byteLength) {
      throw n_RangeError("Wrong offset");
    }
    e = e === undefined ? n_byteLength - byteOffset : v(e);
    if (byteOffset + e > n_byteLength) {
      throw n_RangeError("Wrong length");
    }
    E_set(this, {
      type: M,
      buffer,
      byteLength: e,
      byteOffset,
      bytes: n.bytes,
    });
    if (!a) {
      this.buffer = buffer;
      this.byteLength = e;
      this.byteOffset = byteOffset;
    }
  })[I];
  if (a) {
    Q(ArrayBuffer, "byteLength", T);
    Q(DataView, "buffer", j);
    Q(DataView, "byteLength", j);
    Q(DataView, "byteOffset", j);
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
      return J(Z(this, 4, t, arguments.length > 1 && arguments[1]));
    },
    getUint32: function (t) {
      return J(Z(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
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
      $(this, 2, t, H, r, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (t, r) {
      $(this, 2, t, H, r, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (t, r) {
      $(this, 4, t, G, r, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (t, r) {
      $(this, 4, t, G, r, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (t, r) {
      $(this, 4, t, q, r, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function (t, r) {
      $(this, 8, t, K, r, arguments.length > 2 && arguments[2]);
    },
  });
}
x(ArrayBuffer, R);
x(DataView, M);
export default {
  ArrayBuffer,
  DataView,
};
