import i from "TnJ";
export function htonl(t) {
  return (
    ((t >>> 24) |
      ((t >>> 8) & 65280) |
      ((t << 8) & 16711680) |
      ((255 & t) << 24)) >>>
    0
  );
}
export function zero2(t) {
  if (t.length === 1) {
    return "0" + t;
  }
  return t;
}
export function zero8(t) {
  if (t.length === 7) {
    return "0" + t;
  }
  if (t.length === 6) {
    return "00" + t;
  }
  if (t.length === 5) {
    return "000" + t;
  }
  if (t.length === 4) {
    return "0000" + t;
  }
  if (t.length === 3) {
    return "00000" + t;
  } else if (t.length === 2) {
    return "000000" + t;
  } else if (t.length === 1) {
    return "0000000" + t;
  } else {
    return t;
  }
}
export const inherits = require("./module-Hs_2.js");
export const toArray = function (t, e) {
  if (Array.isArray(t)) {
    return t.slice();
  }
  if (!t) {
    return [];
  }
  const r = [];
  if (typeof t === "string") {
    if (e) {
      if (e === "hex") {
        if ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0) {
          t = "0" + t;
        }
        for (f = 0; f < t.length; f += 2) {
          r.push(parseInt(t[f] + t[f + 1], 16));
        }
      }
    } else {
      let i = 0;
      for (var f = 0; f < t.length; f++) {
        let n;
        let a;
        let s = t.charCodeAt(f);
        if (s < 128) {
          r[i++] = s;
        } else {
          if (s < 2048) {
            r[i++] = (s >> 6) | 192;
          } else {
            n = t;
            a = f;
            if (
              (64512 & n.charCodeAt(a)) != 55296 || a < 0 || a + 1 >= n.length
                ? 1
                : (64512 & n.charCodeAt(a + 1)) != 56320
            ) {
              r[i++] = (s >> 12) | 224;
            } else {
              s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++f));
              r[i++] = (s >> 18) | 240;
              r[i++] = ((s >> 12) & 63) | 128;
            }
            r[i++] = ((s >> 6) & 63) | 128;
          }
          r[i++] = (63 & s) | 128;
        }
      }
    }
  } else {
    for (f = 0; f < t.length; f++) {
      r[f] = 0 | t[f];
    }
  }
  return r;
};
export const toHex = function (t) {
  let e = "";
  for (let r = 0; r < t.length; r++) {
    e += zero2(t[r].toString(16));
  }
  return e;
};
export const toHex32 = function (t, e) {
  let r = "";
  for (let i = 0; i < t.length; i++) {
    let n = t[i];
    if (e === "little") {
      n = htonl(n);
    }
    r += zero8(n.toString(16));
  }
  return r;
};
export const join32 = function (t, e, r, f) {
  let n;
  const a = r - e;
  i(a % 4 == 0);
  for (var s = Array(a / 4), o = 0, h = e; o < s.length; o++, h += 4) {
    n =
      f === "big"
        ? (t[h] << 24) | (t[h + 1] << 16) | (t[h + 2] << 8) | t[h + 3]
        : (t[h + 3] << 24) | (t[h + 2] << 16) | (t[h + 1] << 8) | t[h];
    s[o] = n >>> 0;
  }
  return s;
};
export const split32 = function (t, e) {
  const r = Array(4 * t.length);
  for (let i = 0, f = 0; i < t.length; i++, f += 4) {
    const n = t[i];
    if (e === "big") {
      r[f] = n >>> 24;
      r[f + 1] = (n >>> 16) & 255;
      r[f + 2] = (n >>> 8) & 255;
      r[f + 3] = 255 & n;
    } else {
      r[f + 3] = n >>> 24;
      r[f + 2] = (n >>> 16) & 255;
      r[f + 1] = (n >>> 8) & 255;
      r[f] = 255 & n;
    }
  }
  return r;
};
export const rotr32 = function (t, e) {
  return (t >>> e) | (t << (32 - e));
};
export const rotl32 = function (t, e) {
  return (t << e) | (t >>> (32 - e));
};
export const sum32 = function (t, e) {
  return (t + e) >>> 0;
};
export const sum32_3 = function (t, e, r) {
  return (t + e + r) >>> 0;
};
export const sum32_4 = function (t, e, r, i) {
  return (t + e + r + i) >>> 0;
};
export const sum32_5 = function (t, e, r, i, f) {
  return (t + e + r + i + f) >>> 0;
};
export const sum64 = function (t, e, r, i) {
  const f = t[e];
  const n = (i + t[e + 1]) >>> 0;
  t[e] = (+(n < i) + r + f) >>> 0;
  t[e + 1] = n;
};
export const sum64_hi = function (t, e, r, i) {
  return (+((e + i) >>> 0 < e) + t + r) >>> 0;
};
export const sum64_lo = function (t, e, r, i) {
  return (e + i) >>> 0;
};
export const sum64_4_hi = function (t, e, r, i, f, n, a, s) {
  let o;
  let h = e;
  return (
    (t +
      r +
      f +
      a +
      (o =
        0 +
        +((h = (h + i) >>> 0) < e) +
        +((h = (h + n) >>> 0) < n) +
        +((h = (h + s) >>> 0) < s))) >>>
    0
  );
};
export const sum64_4_lo = function (t, e, r, i, f, n, a, s) {
  return (e + i + n + s) >>> 0;
};
export const sum64_5_hi = function (t, e, r, i, f, n, a, s, o, h) {
  let d;
  let c = e;
  return (
    (t +
      r +
      f +
      a +
      o +
      (d =
        0 +
        +((c = (c + i) >>> 0) < e) +
        +((c = (c + n) >>> 0) < n) +
        +((c = (c + s) >>> 0) < s) +
        +((c = (c + h) >>> 0) < h))) >>>
    0
  );
};
export const sum64_5_lo = function (t, e, r, i, f, n, a, s, o, h) {
  return (e + i + n + s + h) >>> 0;
};
export const rotr64_hi = function (t, e, r) {
  return ((e << (32 - r)) | (t >>> r)) >>> 0;
};
export const rotr64_lo = function (t, e, r) {
  return ((t << (32 - r)) | (e >>> r)) >>> 0;
};
export const shr64_hi = function (t, e, r) {
  return t >>> r;
};
export const shr64_lo = function (t, e, r) {
  return ((t << (32 - r)) | (e >>> r)) >>> 0;
};
