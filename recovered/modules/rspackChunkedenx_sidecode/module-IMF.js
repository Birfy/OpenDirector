import $ from "./module-fn_2.js";
export function htonl(J) {
  return (
    ((J >>> 24) |
      ((J >>> 8) & 65280) |
      ((J << 8) & 16711680) |
      ((255 & J) << 24)) >>>
    0
  );
}
export function zero2(J) {
  if (J.length === 1) {
    return "0" + J;
  }
  return J;
}
export function zero8(J) {
  if (J.length === 7) {
    return "0" + J;
  }
  if (J.length === 6) {
    return "00" + J;
  }
  if (J.length === 5) {
    return "000" + J;
  }
  if (J.length === 4) {
    return "0000" + J;
  }
  if (J.length === 3) {
    return "00000" + J;
  } else if (J.length === 2) {
    return "000000" + J;
  } else if (J.length === 1) {
    return "0000000" + J;
  } else {
    return J;
  }
}
export const inherits = require("./module-ULy.js");
export const toArray = function (J, Z) {
  if (Array.isArray(J)) {
    return J.slice();
  }
  if (!J) {
    return [];
  }
  const Q = [];
  if (typeof J === "string") {
    if (Z) {
      if (Z === "hex") {
        if ((J = J.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0) {
          J = "0" + J;
        }
        for (tt = 0; tt < J.length; tt += 2) {
          Q.push(parseInt(J[tt] + J[tt + 1], 16));
        }
      }
    } else {
      let $ = 0;
      for (var tt = 0; tt < J.length; tt++) {
        let te;
        let tr;
        let tn = J.charCodeAt(tt);
        if (tn < 128) {
          Q[$++] = tn;
        } else {
          if (tn < 2048) {
            Q[$++] = (tn >> 6) | 192;
          } else {
            te = J;
            tr = tt;
            if (
              (64512 & te.charCodeAt(tr)) != 55296 ||
              tr < 0 ||
              tr + 1 >= te.length
                ? 1
                : (64512 & te.charCodeAt(tr + 1)) != 56320
            ) {
              Q[$++] = (tn >> 12) | 224;
            } else {
              tn = 65536 + ((1023 & tn) << 10) + (1023 & J.charCodeAt(++tt));
              Q[$++] = (tn >> 18) | 240;
              Q[$++] = ((tn >> 12) & 63) | 128;
            }
            Q[$++] = ((tn >> 6) & 63) | 128;
          }
          Q[$++] = (63 & tn) | 128;
        }
      }
    }
  } else {
    for (tt = 0; tt < J.length; tt++) {
      Q[tt] = 0 | J[tt];
    }
  }
  return Q;
};
export const toHex = function (J) {
  let Z = "";
  for (let Q = 0; Q < J.length; Q++) {
    Z += zero2(J[Q].toString(16));
  }
  return Z;
};
export const toHex32 = function (J, Z) {
  let Q = "";
  for (let $ = 0; $ < J.length; $++) {
    let te = J[$];
    if (Z === "little") {
      te = htonl(te);
    }
    Q += zero8(te.toString(16));
  }
  return Q;
};
export const join32 = function (J, Z, Q, tt) {
  let te;
  const tr = Q - Z;
  $(tr % 4 == 0);
  for (var tn = Array(tr / 4), ti = 0, to = Z; ti < tn.length; ti++, to += 4) {
    te =
      tt === "big"
        ? (J[to] << 24) | (J[to + 1] << 16) | (J[to + 2] << 8) | J[to + 3]
        : (J[to + 3] << 24) | (J[to + 2] << 16) | (J[to + 1] << 8) | J[to];
    tn[ti] = te >>> 0;
  }
  return tn;
};
export const split32 = function (J, Z) {
  const Q = Array(4 * J.length);
  for (let $ = 0, tt = 0; $ < J.length; $++, tt += 4) {
    const te = J[$];
    if (Z === "big") {
      Q[tt] = te >>> 24;
      Q[tt + 1] = (te >>> 16) & 255;
      Q[tt + 2] = (te >>> 8) & 255;
      Q[tt + 3] = 255 & te;
    } else {
      Q[tt + 3] = te >>> 24;
      Q[tt + 2] = (te >>> 16) & 255;
      Q[tt + 1] = (te >>> 8) & 255;
      Q[tt] = 255 & te;
    }
  }
  return Q;
};
export const rotr32 = function (J, Z) {
  return (J >>> Z) | (J << (32 - Z));
};
export const rotl32 = function (J, Z) {
  return (J << Z) | (J >>> (32 - Z));
};
export const sum32 = function (J, Z) {
  return (J + Z) >>> 0;
};
export const sum32_3 = function (J, Z, Q) {
  return (J + Z + Q) >>> 0;
};
export const sum32_4 = function (J, Z, Q, $) {
  return (J + Z + Q + $) >>> 0;
};
export const sum32_5 = function (J, Z, Q, $, tt) {
  return (J + Z + Q + $ + tt) >>> 0;
};
export const sum64 = function (J, Z, Q, $) {
  const tt = J[Z];
  const te = ($ + J[Z + 1]) >>> 0;
  J[Z] = (+(te < $) + Q + tt) >>> 0;
  J[Z + 1] = te;
};
export const sum64_hi = function (J, Z, Q, $) {
  return (+((Z + $) >>> 0 < Z) + J + Q) >>> 0;
};
export const sum64_lo = function (J, Z, Q, $) {
  return (Z + $) >>> 0;
};
export const sum64_4_hi = function (J, Z, Q, $, tt, te, tr, tn) {
  let ti;
  let to = Z;
  return (
    (J +
      Q +
      tt +
      tr +
      (ti =
        0 +
        +((to = (to + $) >>> 0) < Z) +
        +((to = (to + te) >>> 0) < te) +
        +((to = (to + tn) >>> 0) < tn))) >>>
    0
  );
};
export const sum64_4_lo = function (J, Z, Q, $, tt, te, tr, tn) {
  return (Z + $ + te + tn) >>> 0;
};
export const sum64_5_hi = function (J, Z, Q, $, tt, te, tr, tn, ti, to) {
  let ta;
  let ts = Z;
  return (
    (J +
      Q +
      tt +
      tr +
      ti +
      (ta =
        0 +
        +((ts = (ts + $) >>> 0) < Z) +
        +((ts = (ts + te) >>> 0) < te) +
        +((ts = (ts + tn) >>> 0) < tn) +
        +((ts = (ts + to) >>> 0) < to))) >>>
    0
  );
};
export const sum64_5_lo = function (J, Z, Q, $, tt, te, tr, tn, ti, to) {
  return (Z + $ + te + tn + to) >>> 0;
};
export const rotr64_hi = function (J, Z, Q) {
  return ((Z << (32 - Q)) | (J >>> Q)) >>> 0;
};
export const rotr64_lo = function (J, Z, Q) {
  return ((J << (32 - Q)) | (Z >>> Q)) >>> 0;
};
export const shr64_hi = function (J, Z, Q) {
  return J >>> Q;
};
export const shr64_lo = function (J, Z, Q) {
  return ((J << (32 - Q)) | (Z >>> Q)) >>> 0;
};
