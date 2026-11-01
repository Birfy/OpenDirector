import n from "./module-J_10.js";
import o from "./module-O9_9.js";
import i from "./module-r9_9.js";
import a from "./module-if_10.js";
import s from "./module-Vn_9.js";
import u from "./module-h_10.js";
import c from "./module-I_10.js";
import f from "./module-dFV_9.js";
import l from "./module-X_10.js";
import h from "./module-A2_10.js";
import v from "./module-V6_10.js";
import d from "./module-dV_9.js";
import p from "./module-wr_9.js";
import g from "./module-up_9.js";
import y from "./module-H_2_9.js";
import m from "./module-d4_9.js";
import { f as f_1 } from "./module-vV_9.js";
import w from "./module-ac_10.js";
import A from "./module-wL_9.js";
import x from "./module-HZ_9.js";
import E from "./module-b_9.js";
const s_PROPER = s.PROPER;
const s_CONFIGURABLE = s.CONFIGURABLE;
const _ = "ArrayBuffer";
const R = "DataView";
const M = "prototype";
const I = "Wrong index";
const T = E.getterFor(_);
const k = E.getterFor(R);
const E_set = E.set;
const j = n[_];
let ArrayBuffer = j;
let D = ArrayBuffer && ArrayBuffer[M];
let DataView = n[R];
let C = DataView && DataView[M];
const n_Array = n.Array;
const n_RangeError = n.RangeError;
const V = o(w);
const Y = o([].reverse);
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
const H = (t) => (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
const q = function (t) {
  return g_pack(t, 23, 4);
};
const K = function (t) {
  return g_pack(t, 52, 8);
};
const Q = (t, e, r) => {
  c(t[M], e, {
    configurable: true,
    get: function () {
      return r(this)[e];
    },
  });
};
const Z = (t, e, r, n) => {
  const o = k(t);
  const i = p(r);
  if (i + e > o.byteLength) {
    throw n_RangeError(I);
  }
  const o_bytes = o.bytes;
  const s = i + o.byteOffset;
  const u = A(o_bytes, s, s + e);
  if (n) {
    return u;
  }
  return Y(u);
};
const $ = (t, e, r, n, o, i) => {
  const a = k(t);
  const s = p(r);
  const u = n(+o);
  const c = !!i;
  if (s + e > a.byteLength) {
    throw n_RangeError(I);
  }
  const a_bytes = a.bytes;
  const l = s + a.byteOffset;
  for (let h = 0; h < e; h++) {
    a_bytes[l + h] = u[c ? h : e - h - 1];
  }
};
if (a) {
  const tt = s_PROPER && j.name !== _;
  if (
    !l(function () {
      j(1);
    }) ||
    !l(function () {
      new j(-1);
    }) ||
    l(function () {
      new j();
      new j(1.5);
      new j(0 / 0);
      return j.length !== 1 || (tt && !s_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (t) {
      h(this, D);
      return new j(p(t));
    };
    ArrayBuffer[M] = D;
    let te;
    for (let tr = f_1(j), tn = 0; tr.length > tn;) {
      if (!((te = tr[tn++]) in ArrayBuffer)) {
        u(ArrayBuffer, te, j[te]);
      }
    }
    D.constructor = ArrayBuffer;
  } else {
    if (tt && s_CONFIGURABLE) {
      u(j, "name", _);
    }
  }
  if (m && y(C) !== Object.prototype) {
    m(C, Object.prototype);
  }
  const to = new DataView(new ArrayBuffer(2));
  const ti = o(C.setInt8);
  to.setInt8(0, 2147483648);
  to.setInt8(1, 2147483649);
  if (to.getInt8(0) || !to.getInt8(1)) {
    f(
      C,
      {
        setInt8: function (t, e) {
          ti(this, t, (e << 24) >> 24);
        },
        setUint8: function (t, e) {
          ti(this, t, (e << 24) >> 24);
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
    const e = p(t);
    E_set(this, {
      type: _,
      bytes: V(n_Array(e), 0),
      byteLength: e,
    });
    if (!i) {
      this.byteLength = e;
      this.detached = false;
    }
  })[M];
  C = (DataView = function (buffer, e, r) {
    h(this, C);
    h(buffer, D);
    const n = T(buffer);
    const n_byteLength = n.byteLength;
    const byteOffset = v(e);
    if (byteOffset < 0 || byteOffset > n_byteLength) {
      throw n_RangeError("Wrong offset");
    }
    r = r === undefined ? n_byteLength - byteOffset : d(r);
    if (byteOffset + r > n_byteLength) {
      throw n_RangeError("Wrong length");
    }
    E_set(this, {
      type: R,
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
  })[M];
  if (i) {
    Q(ArrayBuffer, "byteLength", T);
    Q(DataView, "buffer", k);
    Q(DataView, "byteLength", k);
    Q(DataView, "byteOffset", k);
  }
  f(C, {
    getInt8: function (t) {
      return (Z(this, 1, t)[0] << 24) >> 24;
    },
    getUint8: function (t) {
      return Z(this, 1, t)[0];
    },
    getInt16: function (t) {
      const e = Z(this, 2, t, arguments.length > 1 && arguments[1]);
      return (((e[1] << 8) | e[0]) << 16) >> 16;
    },
    getUint16: function (t) {
      const e = Z(this, 2, t, arguments.length > 1 && arguments[1]);
      return (e[1] << 8) | e[0];
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
    setInt8: function (t, e) {
      $(this, 1, t, G, e);
    },
    setUint8: function (t, e) {
      $(this, 1, t, G, e);
    },
    setInt16: function (t, e) {
      $(this, 2, t, z, e, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (t, e) {
      $(this, 2, t, z, e, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (t, e) {
      $(this, 4, t, J, e, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (t, e) {
      $(this, 4, t, J, e, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (t, e) {
      $(this, 4, t, q, e, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function (t, e) {
      $(this, 8, t, K, e, arguments.length > 2 && arguments[2]);
    },
  });
}
x(ArrayBuffer, _);
x(DataView, R);
export default {
  ArrayBuffer,
  DataView,
};
