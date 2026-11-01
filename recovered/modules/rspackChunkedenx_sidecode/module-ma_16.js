import n from "./module-J_16.js";
import o from "./module-O9_15.js";
import i from "./module-r9_15.js";
import a from "./module-if_16.js";
import s from "./module-Vn_15.js";
import u from "./module-h_16.js";
import c from "./module-I_16.js";
import f from "./module-dFV_15.js";
import h from "./module-X_16.js";
import l from "./module-A2_16.js";
import v from "./module-V6_16.js";
import p from "./module-dV_15.js";
import d from "./module-wr_15.js";
import g from "./module-up_15.js";
import y from "./module-H_2_15.js";
import b from "./module-d4_15.js";
import { f as f_1 } from "./module-vV_15.js";
import A from "./module-ac_16.js";
import x from "./module-wL_15.js";
import w from "./module-HZ_15.js";
import S from "./module-b_15.js";
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
let D = ArrayBuffer && ArrayBuffer[I];
let DataView = n[M];
let L = DataView && DataView[I];
const n_Array = n.Array;
const n_RangeError = n.RangeError;
const B = o(A);
const X = o([].reverse);
const g_pack = g.pack;
const g_unpack = g.unpack;
const G = function (r) {
  return [255 & r];
};
const z = function (r) {
  return [255 & r, (r >> 8) & 255];
};
const J = function (r) {
  return [255 & r, (r >> 8) & 255, (r >> 16) & 255, (r >> 24) & 255];
};
const q = (r) => (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0];
const K = function (r) {
  return g_pack(r, 23, 4);
};
const H = function (r) {
  return g_pack(r, 52, 8);
};
const Q = (r, t, e) => {
  c(r[I], t, {
    configurable: true,
    get: function () {
      return e(this)[t];
    },
  });
};
const Z = (r, t, e, n) => {
  const o = j(r);
  const i = d(e);
  if (i + t > o.byteLength) {
    throw n_RangeError(k);
  }
  const o_bytes = o.bytes;
  const s = i + o.byteOffset;
  const u = x(o_bytes, s, s + t);
  if (n) {
    return u;
  }
  return X(u);
};
const $ = (r, t, e, n, o, i) => {
  const a = j(r);
  const s = d(e);
  const u = n(+o);
  const c = !!i;
  if (s + t > a.byteLength) {
    throw n_RangeError(k);
  }
  const a_bytes = a.bytes;
  const h = s + a.byteOffset;
  for (let l = 0; l < t; l++) {
    a_bytes[h + l] = u[c ? l : t - l - 1];
  }
};
if (a) {
  const rr = s_PROPER && F.name !== R;
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
      return F.length !== 1 || (rr && !s_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (r) {
      l(this, D);
      return new F(d(r));
    };
    ArrayBuffer[I] = D;
    let rt;
    for (let re = f_1(F), rn = 0; re.length > rn;) {
      if (!((rt = re[rn++]) in ArrayBuffer)) {
        u(ArrayBuffer, rt, F[rt]);
      }
    }
    D.constructor = ArrayBuffer;
  } else {
    if (rr && s_CONFIGURABLE) {
      u(F, "name", R);
    }
  }
  if (b && y(L) !== Object.prototype) {
    b(L, Object.prototype);
  }
  const ro = new DataView(new ArrayBuffer(2));
  const ri = o(L.setInt8);
  ro.setInt8(0, 2147483648);
  ro.setInt8(1, 2147483649);
  if (ro.getInt8(0) || !ro.getInt8(1)) {
    f(
      L,
      {
        setInt8: function (r, t) {
          ri(this, r, (t << 24) >> 24);
        },
        setUint8: function (r, t) {
          ri(this, r, (t << 24) >> 24);
        },
      },
      {
        unsafe: true,
      },
    );
  }
} else {
  D = (ArrayBuffer = function (r) {
    l(this, D);
    const t = d(r);
    S_set(this, {
      type: R,
      bytes: B(n_Array(t), 0),
      byteLength: t,
    });
    if (!i) {
      this.byteLength = t;
      this.detached = false;
    }
  })[I];
  L = (DataView = function (buffer, t, e) {
    l(this, L);
    l(buffer, D);
    const n = T(buffer);
    const n_byteLength = n.byteLength;
    const byteOffset = v(t);
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
    getInt8: function (r) {
      return (Z(this, 1, r)[0] << 24) >> 24;
    },
    getUint8: function (r) {
      return Z(this, 1, r)[0];
    },
    getInt16: function (r) {
      const t = Z(this, 2, r, arguments.length > 1 && arguments[1]);
      return (((t[1] << 8) | t[0]) << 16) >> 16;
    },
    getUint16: function (r) {
      const t = Z(this, 2, r, arguments.length > 1 && arguments[1]);
      return (t[1] << 8) | t[0];
    },
    getInt32: function (r) {
      return q(Z(this, 4, r, arguments.length > 1 && arguments[1]));
    },
    getUint32: function (r) {
      return q(Z(this, 4, r, arguments.length > 1 && arguments[1])) >>> 0;
    },
    getFloat32: function (r) {
      return g_unpack(Z(this, 4, r, arguments.length > 1 && arguments[1]), 23);
    },
    getFloat64: function (r) {
      return g_unpack(Z(this, 8, r, arguments.length > 1 && arguments[1]), 52);
    },
    setInt8: function (r, t) {
      $(this, 1, r, G, t);
    },
    setUint8: function (r, t) {
      $(this, 1, r, G, t);
    },
    setInt16: function (r, t) {
      $(this, 2, r, z, t, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (r, t) {
      $(this, 2, r, z, t, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (r, t) {
      $(this, 4, r, J, t, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (r, t) {
      $(this, 4, r, J, t, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (r, t) {
      $(this, 4, r, K, t, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function (r, t) {
      $(this, 8, r, H, t, arguments.length > 2 && arguments[2]);
    },
  });
}
w(ArrayBuffer, R);
w(DataView, M);
export default {
  ArrayBuffer,
  DataView,
};
