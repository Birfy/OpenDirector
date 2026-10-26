import n from "./module-J_21.js";
import o from "./module-O9_20.js";
import i from "./module-r9_20.js";
import a from "./module-if_21.js";
import s from "./module-Vn_20.js";
import c from "./module-h_21.js";
import u from "./module-I_21.js";
import f from "./module-dFV_20.js";
import l from "./module-X_21.js";
import h from "./module-A2_21.js";
import v from "./module-V6_21.js";
import p from "./module-dV_20.js";
import d from "./module-wr_20.js";
import g from "./module-up_20.js";
import y from "./module-H_2_20.js";
import m from "./module-d4_20.js";
import { f as f_1 } from "./module-vV_20.js";
import w from "./module-ac_21.js";
import A from "./module-wL_20.js";
import x from "./module-HZ_20.js";
import S from "./module-b_20.js";
const s_PROPER = s.PROPER;
const s_CONFIGURABLE = s.CONFIGURABLE;
const R = "ArrayBuffer";
const M = "DataView";
const I = "prototype";
const _ = "Wrong index";
const k = S.getterFor(R);
const T = S.getterFor(M);
const S_set = S.set;
const N = n[R];
let ArrayBuffer = N;
let P = ArrayBuffer && ArrayBuffer[I];
let DataView = n[M];
let F = DataView && DataView[I];
const n_Array = n.Array;
const n_RangeError = n.RangeError;
const B = o(w);
const z = o([].reverse);
const g_pack = g.pack;
const g_unpack = g.unpack;
const q = function (t) {
  return [255 & t];
};
const H = function (t) {
  return [255 & t, (t >> 8) & 255];
};
const X = function (t) {
  return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
};
const G = (t) => (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
const J = function (t) {
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
    throw n_RangeError(_);
  }
  const o_bytes = o.bytes;
  const s = i + o.byteOffset;
  const c = A(o_bytes, s, s + r);
  if (n) {
    return c;
  }
  return z(c);
};
const $ = (t, r, e, n, o, i) => {
  const a = T(t);
  const s = d(e);
  const c = n(+o);
  const u = !!i;
  if (s + r > a.byteLength) {
    throw n_RangeError(_);
  }
  const a_bytes = a.bytes;
  const l = s + a.byteOffset;
  for (let h = 0; h < r; h++) {
    a_bytes[l + h] = c[u ? h : r - h - 1];
  }
};
if (a) {
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
      h(this, P);
      return new N(d(t));
    };
    ArrayBuffer[I] = P;
    let tr;
    for (let te = f_1(N), tn = 0; te.length > tn;) {
      if (!((tr = te[tn++]) in ArrayBuffer)) {
        c(ArrayBuffer, tr, N[tr]);
      }
    }
    P.constructor = ArrayBuffer;
  } else {
    if (tt && s_CONFIGURABLE) {
      c(N, "name", R);
    }
  }
  if (m && y(F) !== Object.prototype) {
    m(F, Object.prototype);
  }
  const to = new DataView(new ArrayBuffer(2));
  const ti = o(F.setInt8);
  to.setInt8(0, 2147483648);
  to.setInt8(1, 2147483649);
  if (to.getInt8(0) || !to.getInt8(1)) {
    f(
      F,
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
  P = (ArrayBuffer = function (t) {
    h(this, P);
    const r = d(t);
    S_set(this, {
      type: R,
      bytes: B(n_Array(r), 0),
      byteLength: r,
    });
    if (!i) {
      this.byteLength = r;
      this.detached = false;
    }
  })[I];
  F = (DataView = function (buffer, r, e) {
    h(this, F);
    h(buffer, P);
    const n = k(buffer);
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
    Q(ArrayBuffer, "byteLength", k);
    Q(DataView, "buffer", T);
    Q(DataView, "byteLength", T);
    Q(DataView, "byteOffset", T);
  }
  f(F, {
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
      return G(Z(this, 4, t, arguments.length > 1 && arguments[1]));
    },
    getUint32: function (t) {
      return G(Z(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
    },
    getFloat32: function (t) {
      return g_unpack(Z(this, 4, t, arguments.length > 1 && arguments[1]), 23);
    },
    getFloat64: function (t) {
      return g_unpack(Z(this, 8, t, arguments.length > 1 && arguments[1]), 52);
    },
    setInt8: function (t, r) {
      $(this, 1, t, q, r);
    },
    setUint8: function (t, r) {
      $(this, 1, t, q, r);
    },
    setInt16: function (t, r) {
      $(this, 2, t, H, r, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (t, r) {
      $(this, 2, t, H, r, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (t, r) {
      $(this, 4, t, X, r, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (t, r) {
      $(this, 4, t, X, r, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (t, r) {
      $(this, 4, t, J, r, arguments.length > 2 && arguments[2]);
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
