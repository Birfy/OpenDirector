function t(e) {
  if (typeof Float32Array !== "undefined") {
    (() => {
      const t = new Float32Array([-0]);
      const r = new Uint8Array(t.buffer);
      const n = r[3] === 128;
      function i(e, n, i) {
        t[0] = e;
        n[i] = r[0];
        n[i + 1] = r[1];
        n[i + 2] = r[2];
        n[i + 3] = r[3];
      }
      function o(e, n, i) {
        t[0] = e;
        n[i] = r[3];
        n[i + 1] = r[2];
        n[i + 2] = r[1];
        n[i + 3] = r[0];
      }
      function s(e, n) {
        r[0] = e[n];
        r[1] = e[n + 1];
        r[2] = e[n + 2];
        r[3] = e[n + 3];
        return t[0];
      }
      function a(e, n) {
        r[3] = e[n];
        r[2] = e[n + 1];
        r[1] = e[n + 2];
        r[0] = e[n + 3];
        return t[0];
      }
      e.writeFloatLE = n ? i : o;
      e.writeFloatBE = n ? o : i;
      e.readFloatLE = n ? s : a;
      e.readFloatBE = n ? a : s;
    })();
  } else {
    function t(e, t, r, n) {
      const i = +(t < 0);
      if (i) {
        t = -t;
      }
      if (t === 0) {
        e(1 / t > 0 ? 0 : 2147483648, r, n);
      } else if (isNaN(t)) {
        e(2143289344, r, n);
      } else if (t > 3.4028234663852886e38) {
        e(((i << 31) | 2139095040) >>> 0, r, n);
      } else if (t < 1.1754943508222875e-38) {
        e(((i << 31) | Math.round(t / 1.401298464324817e-45)) >>> 0, r, n);
      } else {
        const o = Math.floor(Math.log(t) / Math.LN2);
        const s = 8388607 & Math.round(t * 2 ** -o * 8388608);
        e(((i << 31) | ((o + 127) << 23) | s) >>> 0, r, n);
      }
    }
    function s(e, t, r) {
      const n = e(t, r);
      const i = (n >> 31) * 2 + 1;
      const o = (n >>> 23) & 255;
      const s = 8388607 & n;
      switch (o) {
        case 255:
          if (s) {
            return 0 / 0;
          }
          return Infinity * i;
        case 0:
          return 1.401298464324817e-45 * i * s;
        default:
          return i * 2 ** (o - 150) * (s + 8388608);
      }
    }
    e.writeFloatLE = t.bind(null, r);
    e.writeFloatBE = t.bind(null, n);
    e.readFloatLE = s.bind(null, i);
    e.readFloatBE = s.bind(null, o);
  }
  if (typeof Float64Array !== "undefined") {
    (() => {
      const t = new Float64Array([-0]);
      const r = new Uint8Array(t.buffer);
      const n = r[7] === 128;
      function i(e, n, i) {
        t[0] = e;
        n[i] = r[0];
        n[i + 1] = r[1];
        n[i + 2] = r[2];
        n[i + 3] = r[3];
        n[i + 4] = r[4];
        n[i + 5] = r[5];
        n[i + 6] = r[6];
        n[i + 7] = r[7];
      }
      function o(e, n, i) {
        t[0] = e;
        n[i] = r[7];
        n[i + 1] = r[6];
        n[i + 2] = r[5];
        n[i + 3] = r[4];
        n[i + 4] = r[3];
        n[i + 5] = r[2];
        n[i + 6] = r[1];
        n[i + 7] = r[0];
      }
      function s(e, n) {
        r[0] = e[n];
        r[1] = e[n + 1];
        r[2] = e[n + 2];
        r[3] = e[n + 3];
        r[4] = e[n + 4];
        r[5] = e[n + 5];
        r[6] = e[n + 6];
        r[7] = e[n + 7];
        return t[0];
      }
      function a(e, n) {
        r[7] = e[n];
        r[6] = e[n + 1];
        r[5] = e[n + 2];
        r[4] = e[n + 3];
        r[3] = e[n + 4];
        r[2] = e[n + 5];
        r[1] = e[n + 6];
        r[0] = e[n + 7];
        return t[0];
      }
      e.writeDoubleLE = n ? i : o;
      e.writeDoubleBE = n ? o : i;
      e.readDoubleLE = n ? s : a;
      e.readDoubleBE = n ? a : s;
    })();
  } else {
    function a(e, t, r, n, i, o) {
      let s;
      const a = +(n < 0);
      if (a) {
        n = -n;
      }
      if (n === 0) {
        e(0, i, o + t);
        e(1 / n > 0 ? 0 : 2147483648, i, o + r);
      } else if (isNaN(n)) {
        e(0, i, o + t);
        e(2146959360, i, o + r);
      } else if (n > 1.7976931348623157e308) {
        e(0, i, o + t);
        e(((a << 31) | 2146435072) >>> 0, i, o + r);
      } else if (n < 2.2250738585072014e-308) {
        e((s = n / 5e-324) >>> 0, i, o + t);
        e(((a << 31) | (s / 4294967296)) >>> 0, i, o + r);
      } else {
        let l = Math.floor(Math.log(n) / Math.LN2);
        if (l === 1024) {
          l = 1023;
        }
        e((4503599627370496 * (s = n * 2 ** -l)) >>> 0, i, o + t);
        e(
          ((a << 31) | ((l + 1023) << 20) | ((1048576 * s) & 1048575)) >>> 0,
          i,
          o + r,
        );
      }
    }
    function l(e, t, r, n, i) {
      const o = e(n, i + t);
      const s = e(n, i + r);
      const a = (s >> 31) * 2 + 1;
      const l = (s >>> 20) & 2047;
      const u = 4294967296 * (1048575 & s) + o;
      switch (l) {
        case 2047:
          if (u) {
            return 0 / 0;
          }
          return Infinity * a;
        case 0:
          return 5e-324 * a * u;
        default:
          return a * 2 ** (l - 1075) * (u + 4503599627370496);
      }
    }
    e.writeDoubleLE = a.bind(null, r, 0, 4);
    e.writeDoubleBE = a.bind(null, n, 4, 0);
    e.readDoubleLE = l.bind(null, i, 0, 4);
    e.readDoubleBE = l.bind(null, o, 4, 0);
  }
  return e;
}
function r(e, t, r) {
  t[r] = 255 & e;
  t[r + 1] = (e >>> 8) & 255;
  t[r + 2] = (e >>> 16) & 255;
  t[r + 3] = e >>> 24;
}
function n(e, t, r) {
  t[r] = e >>> 24;
  t[r + 1] = (e >>> 16) & 255;
  t[r + 2] = (e >>> 8) & 255;
  t[r + 3] = 255 & e;
}
function i(e, t) {
  return (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0;
}
function o(e, t) {
  return ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0;
}
export default t(t);
