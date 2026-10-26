import n from "./module-J_9.js";
import i from "./module-O9_8.js";
import o from "./module-r9_8.js";
import s from "./module-if_9.js";
import a from "./module-Vn_8.js";
import u from "./module-h_9.js";
import c from "./module-I_9.js";
import f from "./module-dFV_8.js";
import h from "./module-X_9.js";
import l from "./module-A2_9.js";
import v from "./module-V6_9.js";
import p from "./module-dV_8.js";
import d from "./module-wr_8.js";
import g from "./module-up_8.js";
import y from "./module-H_2_8.js";
import b from "./module-d4_8.js";
import { f as f_1 } from "./module-vV_8.js";
import A from "./module-ac_9.js";
import x from "./module-wL_8.js";
import w from "./module-HZ_8.js";
import S from "./module-b_8.js";
const a_PROPER = a.PROPER;
const a_CONFIGURABLE = a.CONFIGURABLE;
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
const B = i(A);
const _ = i([].reverse);
const g_pack = g.pack;
const g_unpack = g.unpack;
const G = function (t) {
  return [255 & t];
};
const z = function (t) {
  return [255 & t, (t >> 8) & 255];
};
const J = function (t) {
  return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
};
const q = (t) => (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
const K = function (t) {
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
  const i = j(t);
  const o = d(e);
  if (o + r > i.byteLength) {
    throw n_RangeError(k);
  }
  const i_bytes = i.bytes;
  const a = o + i.byteOffset;
  const u = x(i_bytes, a, a + r);
  if (n) {
    return u;
  }
  return _(u);
};
const $ = (t, r, e, n, i, o) => {
  const s = j(t);
  const a = d(e);
  const u = n(+i);
  const c = !!o;
  if (a + r > s.byteLength) {
    throw n_RangeError(k);
  }
  const s_bytes = s.bytes;
  const h = a + s.byteOffset;
  for (let l = 0; l < r; l++) {
    s_bytes[h + l] = u[c ? l : r - l - 1];
  }
};
if (s) {
  const tt = a_PROPER && F.name !== R;
  if (
    !h(function () {
      F(1);
    }) ||
    !h(function () {
      new F(-1);
    }) ||
    h(function () {
      new F();
      new F(1.5);
      new F(0 / 0);
      return F.length !== 1 || (tt && !a_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (t) {
      l(this, C);
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
    if (tt && a_CONFIGURABLE) {
      u(F, "name", R);
    }
  }
  if (b && y(L) !== Object.prototype) {
    b(L, Object.prototype);
  }
  const ti = new DataView(new ArrayBuffer(2));
  const to = i(L.setInt8);
  ti.setInt8(0, 2147483648);
  ti.setInt8(1, 2147483649);
  if (ti.getInt8(0) || !ti.getInt8(1)) {
    f(
      L,
      {
        setInt8: function (t, r) {
          to(this, t, (r << 24) >> 24);
        },
        setUint8: function (t, r) {
          to(this, t, (r << 24) >> 24);
        },
      },
      {
        unsafe: true,
      },
    );
  }
} else {
  C = (ArrayBuffer = function (t) {
    l(this, C);
    const r = d(t);
    S_set(this, {
      type: R,
      bytes: B(n_Array(r), 0),
      byteLength: r,
    });
    if (!o) {
      this.byteLength = r;
      this.detached = false;
    }
  })[I];
  L = (DataView = function (buffer, r, e) {
    l(this, L);
    l(buffer, C);
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
    if (!o) {
      this.buffer = buffer;
      this.byteLength = e;
      this.byteOffset = byteOffset;
    }
  })[I];
  if (o) {
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
      return q(Z(this, 4, t, arguments.length > 1 && arguments[1]));
    },
    getUint32: function (t) {
      return q(Z(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
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
      $(this, 2, t, z, r, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (t, r) {
      $(this, 2, t, z, r, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (t, r) {
      $(this, 4, t, J, r, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (t, r) {
      $(this, 4, t, J, r, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (t, r) {
      $(this, 4, t, K, r, arguments.length > 2 && arguments[2]);
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
