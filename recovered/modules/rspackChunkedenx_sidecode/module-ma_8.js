import n from "./module-J_8.js";
import o from "./module-O9_7.js";
import i from "./module-r9_7.js";
import a from "./module-if_8.js";
import s from "./module-Vn_7.js";
import u from "./module-h_8.js";
import c from "./module-I_8.js";
import f from "./module-dFV_7.js";
import l from "./module-X_8.js";
import h from "./module-A2_8.js";
import v from "./module-V6_8.js";
import p from "./module-dV_7.js";
import d from "./module-wr_7.js";
import g from "./module-up_7.js";
import y from "./module-H_2_7.js";
import m from "./module-d4_7.js";
import { f as f_1 } from "./module-vV_7.js";
import A from "./module-ac_8.js";
import w from "./module-wL_7.js";
import x from "./module-HZ_7.js";
import E from "./module-b_7.js";
const s_PROPER = s.PROPER;
const s_CONFIGURABLE = s.CONFIGURABLE;
const R = "ArrayBuffer";
const M = "DataView";
const I = "prototype";
const k = "Wrong index";
const T = E.getterFor(R);
const j = E.getterFor(M);
const E_set = E.set;
const P = n[R];
let ArrayBuffer = P;
let C = ArrayBuffer && ArrayBuffer[I];
let DataView = n[M];
let L = DataView && DataView[I];
const n_Array = n.Array;
const n_RangeError = n.RangeError;
const Y = o(A);
const _ = o([].reverse);
const g_pack = g.pack;
const g_unpack = g.unpack;
const G = function (r) {
  return [255 & r];
};
const J = function (r) {
  return [255 & r, (r >> 8) & 255];
};
const z = function (r) {
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
  const u = w(o_bytes, s, s + t);
  if (n) {
    return u;
  }
  return _(u);
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
  const l = s + a.byteOffset;
  for (let h = 0; h < t; h++) {
    a_bytes[l + h] = u[c ? h : t - h - 1];
  }
};
if (a) {
  const rr = s_PROPER && P.name !== R;
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
      return P.length !== 1 || (rr && !s_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (r) {
      h(this, C);
      return new P(d(r));
    };
    ArrayBuffer[I] = C;
    let rt;
    for (let re = f_1(P), rn = 0; re.length > rn;) {
      if (!((rt = re[rn++]) in ArrayBuffer)) {
        u(ArrayBuffer, rt, P[rt]);
      }
    }
    C.constructor = ArrayBuffer;
  } else {
    if (rr && s_CONFIGURABLE) {
      u(P, "name", R);
    }
  }
  if (m && y(L) !== Object.prototype) {
    m(L, Object.prototype);
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
  C = (ArrayBuffer = function (r) {
    h(this, C);
    const t = d(r);
    E_set(this, {
      type: R,
      bytes: Y(n_Array(t), 0),
      byteLength: t,
    });
    if (!i) {
      this.byteLength = t;
      this.detached = false;
    }
  })[I];
  L = (DataView = function (buffer, t, e) {
    h(this, L);
    h(buffer, C);
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
    E_set(this, {
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
      $(this, 2, r, J, t, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (r, t) {
      $(this, 2, r, J, t, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (r, t) {
      $(this, 4, r, z, t, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (r, t) {
      $(this, 4, r, z, t, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (r, t) {
      $(this, 4, r, K, t, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function (r, t) {
      $(this, 8, r, H, t, arguments.length > 2 && arguments[2]);
    },
  });
}
x(ArrayBuffer, R);
x(DataView, M);
export default {
  ArrayBuffer,
  DataView,
};
