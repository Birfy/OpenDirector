import n from "./module-J_11.js";
import o from "./module-O9_10.js";
import i from "./module-r9_10.js";
import a from "./module-if_11.js";
import s from "./module-Vn_10.js";
import u from "./module-h_11.js";
import c from "./module-I_11.js";
import f from "./module-dFV_10.js";
import l from "./module-X_11.js";
import h from "./module-A2_11.js";
import v from "./module-V6_11.js";
import p from "./module-dV_10.js";
import d from "./module-wr_10.js";
import g from "./module-up_10.js";
import y from "./module-H_2_10.js";
import b from "./module-d4_10.js";
import { f as f_1 } from "./module-vV_10.js";
import A from "./module-ac_11.js";
import x from "./module-wL_10.js";
import w from "./module-HZ_10.js";
import S from "./module-b_10.js";
const s_PROPER = s.PROPER;
const s_CONFIGURABLE = s.CONFIGURABLE;
const R = "ArrayBuffer";
const M = "DataView";
const I = "prototype";
const k = "Wrong index";
const T = S.getterFor(R);
const j = S.getterFor(M);
const S_set = S.set;
const F = n[R];
let ArrayBuffer = F;
let C = ArrayBuffer && ArrayBuffer[I];
let DataView = n[M];
let L = DataView && DataView[I];
const n_Array = n.Array;
const n_RangeError = n.RangeError;
const B = o(A);
const _ = o([].reverse);
const g_pack = g.pack;
const g_unpack = g.unpack;
const G = function (t) {
  return [255 & t];
};
const J = function (t) {
  return [255 & t, (t >> 8) & 255];
};
const z = function (t) {
  return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
};
const K = (t) => (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
const q = function (t) {
  return g_pack(t, 23, 4);
};
const H = function (t) {
  return g_pack(t, 52, 8);
};
const Q = (t, r, e) => {
  c(t[I], r, {
    configurable: true,
    get: function () {
      return e(this)[r];
    },
  });
};
const Z = (t, r, e, n) => {
  const o = j(t);
  const i = d(e);
  if (i + r > o.byteLength) {
    throw n_RangeError(k);
  }
  const o_bytes = o.bytes;
  const s = i + o.byteOffset;
  const u = x(o_bytes, s, s + r);
  if (n) {
    return u;
  }
  return _(u);
};
const $ = (t, r, e, n, o, i) => {
  const a = j(t);
  const s = d(e);
  const u = n(+o);
  const c = !!i;
  if (s + r > a.byteLength) {
    throw n_RangeError(k);
  }
  const a_bytes = a.bytes;
  const l = s + a.byteOffset;
  for (let h = 0; h < r; h++) {
    a_bytes[l + h] = u[c ? h : r - h - 1];
  }
};
if (a) {
  const tt = s_PROPER && F.name !== R;
  if (
    !l(function () {
      F(1);
    }) ||
    !l(function () {
      new F(-1);
    }) ||
    l(function () {
      new F();
      new F(1.5);
      new F(0 / 0);
      return F.length !== 1 || (tt && !s_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (t) {
      h(this, C);
      return new F(d(t));
    };
    ArrayBuffer[I] = C;
    let tr;
    for (let te = f_1(F), tn = 0; te.length > tn;) {
      if (!((tr = te[tn++]) in ArrayBuffer)) {
        u(ArrayBuffer, tr, F[tr]);
      }
    }
    C.constructor = ArrayBuffer;
  } else {
    if (tt && s_CONFIGURABLE) {
      u(F, "name", R);
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
  C = (ArrayBuffer = function (t) {
    h(this, C);
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
  L = (DataView = function (buffer, r, e) {
    h(this, L);
    h(buffer, C);
    const n = T(buffer);
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
      return K(Z(this, 4, t, arguments.length > 1 && arguments[1]));
    },
    getUint32: function (t) {
      return K(Z(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
    },
    getFloat32: function (t) {
      return g_unpack(Z(this, 4, t, arguments.length > 1 && arguments[1]), 23);
    },
    getFloat64: function (t) {
      return g_unpack(Z(this, 8, t, arguments.length > 1 && arguments[1]), 52);
    },
    setInt8: function (t, r) {
      $(this, 1, t, G, r);
    },
    setUint8: function (t, r) {
      $(this, 1, t, G, r);
    },
    setInt16: function (t, r) {
      $(this, 2, t, J, r, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (t, r) {
      $(this, 2, t, J, r, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (t, r) {
      $(this, 4, t, z, r, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (t, r) {
      $(this, 4, t, z, r, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (t, r) {
      $(this, 4, t, q, r, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function (t, r) {
      $(this, 8, t, H, r, arguments.length > 2 && arguments[2]);
    },
  });
}
w(ArrayBuffer, R);
w(DataView, M);
export default {
  ArrayBuffer,
  DataView,
};
