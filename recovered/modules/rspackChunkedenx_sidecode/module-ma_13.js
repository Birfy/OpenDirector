import $ from "./module-J_13.js";
import tt from "./module-O9_12.js";
import te from "./module-r9_12.js";
import tr from "./module-if_13.js";
import tn from "./module-Vn_12.js";
import ti from "./module-h_13.js";
import to from "./module-I_13.js";
import ta from "./module-dFV_12.js";
import ts from "./module-X_13.js";
import tf from "./module-A2_13.js";
import tu from "./module-V6_13.js";
import tc from "./module-dV_12.js";
import th from "./module-wr_12.js";
import td from "./module-up_12.js";
import tl from "./module-H_2_12.js";
import tp from "./module-d4_12.js";
import { f } from "./module-vV_2_2.js";
import tv from "./module-ac_13.js";
import tg from "./module-wL_12.js";
import ty from "./module-HZ_12.js";
import tm from "./module-b_12.js";
const tn_PROPER = tn.PROPER;
const tn_CONFIGURABLE = tn.CONFIGURABLE;
const t_ = "ArrayBuffer";
const tM = "DataView";
const tS = "prototype";
const tA = "Wrong index";
const tE = tm.getterFor(t_);
const tk = tm.getterFor(tM);
const tm_set = tm.set;
const tI = $[t_];
let ArrayBuffer = tI;
let tT = ArrayBuffer && ArrayBuffer[tS];
let DataView = $[tM];
let tj = DataView && DataView[tS];
const $_Array = $.Array;
const $_RangeError = $.RangeError;
const tN = tt(tv);
const tU = tt([].reverse);
const td_pack = td.pack;
const td_unpack = td.unpack;
const tq = function (J) {
  return [255 & J];
};
const tz = function (J) {
  return [255 & J, (J >> 8) & 255];
};
const tH = function (J) {
  return [255 & J, (J >> 8) & 255, (J >> 16) & 255, (J >> 24) & 255];
};
const tV = (J) => (J[3] << 24) | (J[2] << 16) | (J[1] << 8) | J[0];
const tW = function (J) {
  return td_pack(J, 23, 4);
};
const tK = function (J) {
  return td_pack(J, 52, 8);
};
const tY = (J, Z, Q) => {
  to(J[tS], Z, {
    configurable: true,
    get: function () {
      return Q(this)[Z];
    },
  });
};
const tX = (J, Z, Q, $) => {
  const tt = tk(J);
  const te = th(Q);
  if (te + Z > tt.byteLength) {
    throw $_RangeError(tA);
  }
  const tt_bytes = tt.bytes;
  const tn = te + tt.byteOffset;
  const ti = tg(tt_bytes, tn, tn + Z);
  if ($) {
    return ti;
  }
  return tU(ti);
};
const tG = (J, Z, Q, $, tt, te) => {
  const tr = tk(J);
  const tn = th(Q);
  const ti = $(+tt);
  const to = !!te;
  if (tn + Z > tr.byteLength) {
    throw $_RangeError(tA);
  }
  const tr_bytes = tr.bytes;
  const ts = tn + tr.byteOffset;
  for (let tf = 0; tf < Z; tf++) {
    tr_bytes[ts + tf] = ti[to ? tf : Z - tf - 1];
  }
};
if (tr) {
  const tJ = tn_PROPER && tI.name !== t_;
  if (
    !ts(function () {
      tI(1);
    }) ||
    !ts(function () {
      new tI(-1);
    }) ||
    ts(function () {
      new tI();
      new tI(1.5);
      new tI(0 / 0);
      return tI.length !== 1 || (tJ && !tn_CONFIGURABLE);
    })
  ) {
    ArrayBuffer = function (J) {
      tf(this, tT);
      return new tI(th(J));
    };
    ArrayBuffer[tS] = tT;
    let tZ;
    for (let tQ = f(tI), t$ = 0; tQ.length > t$;) {
      if (!((tZ = tQ[t$++]) in ArrayBuffer)) {
        ti(ArrayBuffer, tZ, tI[tZ]);
      }
    }
    tT.constructor = ArrayBuffer;
  } else {
    if (tJ && tn_CONFIGURABLE) {
      ti(tI, "name", t_);
    }
  }
  if (tp && tl(tj) !== Object.prototype) {
    tp(tj, Object.prototype);
  }
  const t0 = new DataView(new ArrayBuffer(2));
  const t1 = tt(tj.setInt8);
  t0.setInt8(0, 2147483648);
  t0.setInt8(1, 2147483649);
  if (t0.getInt8(0) || !t0.getInt8(1)) {
    ta(
      tj,
      {
        setInt8: function (J, Z) {
          t1(this, J, (Z << 24) >> 24);
        },
        setUint8: function (J, Z) {
          t1(this, J, (Z << 24) >> 24);
        },
      },
      {
        unsafe: true,
      },
    );
  }
} else {
  tT = (ArrayBuffer = function (J) {
    tf(this, tT);
    const Z = th(J);
    tm_set(this, {
      type: t_,
      bytes: tN($_Array(Z), 0),
      byteLength: Z,
    });
    if (!te) {
      this.byteLength = Z;
      this.detached = false;
    }
  })[tS];
  tj = (DataView = function (buffer, Z, Q) {
    tf(this, tj);
    tf(buffer, tT);
    const $ = tE(buffer);
    const $_byteLength = $.byteLength;
    const byteOffset = tu(Z);
    if (byteOffset < 0 || byteOffset > $_byteLength) {
      throw $_RangeError("Wrong offset");
    }
    Q = Q === undefined ? $_byteLength - byteOffset : tc(Q);
    if (byteOffset + Q > $_byteLength) {
      throw $_RangeError("Wrong length");
    }
    tm_set(this, {
      type: tM,
      buffer,
      byteLength: Q,
      byteOffset,
      bytes: $.bytes,
    });
    if (!te) {
      this.buffer = buffer;
      this.byteLength = Q;
      this.byteOffset = byteOffset;
    }
  })[tS];
  if (te) {
    tY(ArrayBuffer, "byteLength", tE);
    tY(DataView, "buffer", tk);
    tY(DataView, "byteLength", tk);
    tY(DataView, "byteOffset", tk);
  }
  ta(tj, {
    getInt8: function (J) {
      return (tX(this, 1, J)[0] << 24) >> 24;
    },
    getUint8: function (J) {
      return tX(this, 1, J)[0];
    },
    getInt16: function (J) {
      const Z = tX(this, 2, J, arguments.length > 1 && arguments[1]);
      return (((Z[1] << 8) | Z[0]) << 16) >> 16;
    },
    getUint16: function (J) {
      const Z = tX(this, 2, J, arguments.length > 1 && arguments[1]);
      return (Z[1] << 8) | Z[0];
    },
    getInt32: function (J) {
      return tV(tX(this, 4, J, arguments.length > 1 && arguments[1]));
    },
    getUint32: function (J) {
      return tV(tX(this, 4, J, arguments.length > 1 && arguments[1])) >>> 0;
    },
    getFloat32: function (J) {
      return td_unpack(
        tX(this, 4, J, arguments.length > 1 && arguments[1]),
        23,
      );
    },
    getFloat64: function (J) {
      return td_unpack(
        tX(this, 8, J, arguments.length > 1 && arguments[1]),
        52,
      );
    },
    setInt8: function (J, Z) {
      tG(this, 1, J, tq, Z);
    },
    setUint8: function (J, Z) {
      tG(this, 1, J, tq, Z);
    },
    setInt16: function (J, Z) {
      tG(this, 2, J, tz, Z, arguments.length > 2 && arguments[2]);
    },
    setUint16: function (J, Z) {
      tG(this, 2, J, tz, Z, arguments.length > 2 && arguments[2]);
    },
    setInt32: function (J, Z) {
      tG(this, 4, J, tH, Z, arguments.length > 2 && arguments[2]);
    },
    setUint32: function (J, Z) {
      tG(this, 4, J, tH, Z, arguments.length > 2 && arguments[2]);
    },
    setFloat32: function (J, Z) {
      tG(this, 4, J, tW, Z, arguments.length > 2 && arguments[2]);
    },
    setFloat64: function (J, Z) {
      tG(this, 8, J, tK, Z, arguments.length > 2 && arguments[2]);
    },
  });
}
ty(ArrayBuffer, t_);
ty(DataView, tM);
export default {
  ArrayBuffer,
  DataView,
};
