const o = require("rCO");
(function (t) {
  "use strict";
  let e;
  let n;
  let i;
  let a;
  function c(t, e, r, o) {
    return new (r || (r = Promise))(function (n, i) {
      function a(t) {
        try {
          s(o.next(t));
        } catch (error) {
          i(error);
        }
      }
      function c(t) {
        try {
          s(o.throw(t));
        } catch (error) {
          i(error);
        }
      }
      function s(t) {
        let e;
        if (t.done) {
          n(t.value);
        } else {
          ((e = t.value) instanceof r
            ? e
            : new r(function (t) {
                t(e);
              })
          ).then(a, c);
        }
      }
      s((o = o.apply(t, e || [])).next());
    });
  }
  let s = "";
  function logIDGenerator() {
    return 10000 * Date.now() + Math.floor(10000 * Math.random());
  }
  function d(t) {
    return ("000" + parseInt(t, 2).toString(16)).slice(-4);
  }
  function u(t, e) {
    switch (e) {
      case 0:
        while (128 & y(t));
        break;
      case 2:
        b(t, C(t));
        break;
      case 5:
        b(t, 4);
        break;
      case 1:
        b(t, 8);
        break;
      default:
        throw Error("Unimplemented type: " + e);
    }
  }
  function p(t) {
    return {
      low: (t |= 0),
      high: t >> 31,
      unsigned: t >= 0,
    };
  }
  let v = [];
  function g() {
    let t = v.pop();
    if (t) {
      t.offset = t.limit = 0;
      return t;
    }
    return {
      bytes: new Uint8Array(64),
      offset: 0,
      limit: 0,
    };
  }
  function b(t, e) {
    if (t.offset + e > t.limit) {
      throw Error("Skip past limit");
    }
    t.offset += e;
  }
  function w(t) {
    return t.offset >= t.limit;
  }
  function m(t, e) {
    let t_bytes = t.bytes;
    let t_offset = t.offset;
    let t_limit = t.limit;
    let i = t_offset + e;
    if (i > t_bytes.length) {
      let e = new Uint8Array(2 * i);
      e.set(t_bytes);
      t.bytes = e;
    }
    t.offset = i;
    if (i > t_limit) {
      t.limit = i;
    }
    return t_offset;
  }
  function h(t, e) {
    let t_offset = t.offset;
    if (t_offset + e > t.limit) {
      throw Error("Read past limit");
    }
    t.offset += e;
    return t_offset;
  }
  function f(t, e) {
    let r = h(t, e);
    let String_fromCharCode = String.fromCharCode;
    let t_bytes = t.bytes;
    let i = "";
    for (let t = 0; t < e; t++) {
      let a;
      let c;
      let s;
      let l;
      let d = t_bytes[t + r];
      if ((128 & d) == 0) {
        i += String_fromCharCode(d);
      } else if ((224 & d) == 192) {
        if (
          t + 1 >= e ||
          (192 & (a = t_bytes[t + r + 1])) != 128 ||
          (l = ((31 & d) << 6) | (63 & a)) < 128
        ) {
          i += "\uFFFD";
        } else {
          i += String_fromCharCode(l);
          t++;
        }
      } else if ((240 & d) == 224) {
        if (
          t + 2 >= e ||
          (((a = t_bytes[t + r + 1]) | ((c = t_bytes[t + r + 2]) << 8)) &
            49344) !=
            32896 ||
          (l = ((15 & d) << 12) | ((63 & a) << 6) | (63 & c)) < 2048 ||
          (l >= 55296 && l <= 57343)
        ) {
          i += "\uFFFD";
        } else {
          i += String_fromCharCode(l);
          t += 2;
        }
      } else if ((248 & d) == 240) {
        if (t + 3 >= e) {
          i += "\uFFFD";
        } else {
          a = t_bytes[t + r + 1];
          if (
            ((a |
              ((c = t_bytes[t + r + 2]) << 8) |
              ((s = t_bytes[t + r + 3]) << 16)) &
              12632256) !=
              8421504 ||
            (l =
              ((7 & d) << 18) | ((63 & a) << 12) | ((63 & c) << 6) | (63 & s)) <
              65536 ||
            l > 1114111
          ) {
            i += "\uFFFD";
          } else {
            l -= 65536;
            i += String_fromCharCode((l >> 10) + 55296, (1023 & l) + 56320);
            t += 3;
          }
        }
      } else {
        i += "\uFFFD";
      }
    }
    return i;
  }
  function x(t, e) {
    let e_length = e.length;
    let o = 0;
    for (let t = 0; t < e_length; t++) {
      let n = e.charCodeAt(t);
      if (n >= 55296 && n <= 56319 && t + 1 < e_length) {
        n = (n << 10) + e.charCodeAt(++t) - 56613888;
      }
      o += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    }
    _(t, o);
    let n = m(t, o);
    let t_bytes = t.bytes;
    for (let t = 0; t < e_length; t++) {
      let o = e.charCodeAt(t);
      if (o >= 55296 && o <= 56319 && t + 1 < e_length) {
        o = (o << 10) + e.charCodeAt(++t) - 56613888;
      }
      if (o < 128) {
        t_bytes[n++] = o;
      } else {
        if (o < 2048) {
          t_bytes[n++] = ((o >> 6) & 31) | 192;
        } else {
          if (o < 65536) {
            t_bytes[n++] = ((o >> 12) & 15) | 224;
          } else {
            t_bytes[n++] = ((o >> 18) & 7) | 240;
            t_bytes[n++] = ((o >> 12) & 63) | 128;
          }
          t_bytes[n++] = ((o >> 6) & 63) | 128;
        }
        t_bytes[n++] = (63 & o) | 128;
      }
    }
  }
  function y(t) {
    return t.bytes[h(t, 1)];
  }
  function k(t, e) {
    let r = m(t, 1);
    t.bytes[r] = e;
  }
  function C(t) {
    let e;
    let r = 0;
    let o = 0;
    do {
      e = y(t);
      if (r < 32) {
        o |= (127 & e) << r;
      }
      r += 7;
    } while (128 & e);
    return o;
  }
  function _(t, e) {
    for (e >>>= 0; e >= 128;) {
      k(t, (127 & e) | 128);
      e >>>= 7;
    }
    k(t, e);
  }
  function T(t, unsigned) {
    let r;
    let o = 0;
    let n = 0;
    let i = 0;
    o = 127 & (r = y(t));
    if (128 & r) {
      o |= (127 & (r = y(t))) << 7;
      if (128 & r) {
        o |= (127 & (r = y(t))) << 14;
        if (128 & r) {
          o |= (127 & (r = y(t))) << 21;
          if (128 & r) {
            n = 127 & (r = y(t));
            if (128 & r) {
              n |= (127 & (r = y(t))) << 7;
              if (128 & r) {
                n |= (127 & (r = y(t))) << 14;
                if (128 & r) {
                  n |= (127 & (r = y(t))) << 21;
                  if (128 & r) {
                    i = 127 & (r = y(t));
                    if (128 & r) {
                      i |= (127 & (r = y(t))) << 7;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return {
      low: o | (n << 28),
      high: (n >>> 4) | (i << 24),
      unsigned,
    };
  }
  function S(t, e) {
    let r = e.low >>> 0;
    let o = ((e.low >>> 28) | (e.high << 4)) >>> 0;
    let n = e.high >>> 24;
    let i =
      n === 0
        ? o === 0
          ? r < 16384
            ? r < 128
              ? 1
              : 2
            : r < 2097152
              ? 3
              : 4
          : o < 16384
            ? o < 128
              ? 5
              : 6
            : o < 2097152
              ? 7
              : 8
        : n < 128
          ? 9
          : 10;
    let a = m(t, i);
    let t_bytes = t.bytes;
    switch (i) {
      case 10:
        t_bytes[a + 9] = (n >>> 7) & 1;
      case 9:
        t_bytes[a + 8] = i !== 9 ? 128 | n : 127 & n;
      case 8:
        t_bytes[a + 7] = i !== 8 ? (o >>> 21) | 128 : (o >>> 21) & 127;
      case 7:
        t_bytes[a + 6] = i !== 7 ? (o >>> 14) | 128 : (o >>> 14) & 127;
      case 6:
        t_bytes[a + 5] = i !== 6 ? (o >>> 7) | 128 : (o >>> 7) & 127;
      case 5:
        t_bytes[a + 4] = i !== 5 ? 128 | o : 127 & o;
      case 4:
        t_bytes[a + 3] = i !== 4 ? (r >>> 21) | 128 : (r >>> 21) & 127;
      case 3:
        t_bytes[a + 2] = i !== 3 ? (r >>> 14) | 128 : (r >>> 14) & 127;
      case 2:
        t_bytes[a + 1] = i !== 2 ? (r >>> 7) | 128 : (r >>> 7) & 127;
      case 1:
        t_bytes[a] = i !== 1 ? 128 | r : 127 & r;
    }
  }
  function B(t) {
    let e;
    return ((t) => {
      let e = {};
      t: while (!w(t)) {
        let r = C(t);
        switch (r >>> 3) {
          case 0:
            break t;
          case 1:
            e.SeqID = T(t, true);
            break;
          case 2:
            e.LogID = T(t, true);
            break;
          case 3:
            e.service = C(t);
            break;
          case 4:
            e.method = C(t);
            break;
          case 5: {
            let r = ((t) => {
              let e = C(t);
              let t_limit = t.limit;
              t.limit = t.offset + e;
              return t_limit;
            })(t);
            (e.headers || (e.headers = [])).push(
              ((t) => {
                let e = {};
                t: while (!w(t)) {
                  let r = C(t);
                  switch (r >>> 3) {
                    case 0:
                      break t;
                    case 1:
                      e.key = f(t, C(t));
                      break;
                    case 2:
                      e.value = f(t, C(t));
                      break;
                    default:
                      u(t, 7 & r);
                  }
                }
                if (e.key === undefined) {
                  throw Error("Missing required field: key");
                }
                if (e.value === undefined) {
                  throw Error("Missing required field: value");
                }
                return e;
              })(t),
            );
            t.limit = r;
            break;
          }
          case 6:
            e.payloadEncoding = f(t, C(t));
            break;
          case 7:
            e.payloadType = f(t, C(t));
            break;
          case 8:
            e.payload = ((t, e) => {
              let r = h(t, e);
              return t.bytes.subarray(r, r + e);
            })(t, C(t));
            break;
          case 9:
            e.LogIDNew = f(t, C(t));
            break;
          default:
            u(t, 7 & r);
        }
      }
      if (e.SeqID === undefined) {
        throw Error("Missing required field: SeqID");
      }
      if (e.LogID === undefined) {
        throw Error("Missing required field: LogID");
      }
      if (e.service === undefined) {
        throw Error("Missing required field: service");
      }
      if (e.method === undefined) {
        throw Error("Missing required field: method");
      }
      return e;
    })({
      bytes: (e = t),
      offset: 0,
      limit: e.length,
    });
  }
  function A(t) {
    let e;
    let r;
    let o;
    let n;
    ((t, e) => {
      let r;
      let o;
      let n;
      let i;
      let t_SeqID = t.SeqID;
      if (t_SeqID !== undefined) {
        _(e, 8);
        S(e, t_SeqID);
      }
      let t_LogID = t.LogID;
      if (t_LogID !== undefined) {
        _(e, 16);
        S(e, t_LogID);
      }
      let t_service = t.service;
      if (t_service !== undefined) {
        _(e, 24);
        S(e, p(t_service));
      }
      let t_method = t.method;
      if (t_method !== undefined) {
        _(e, 32);
        S(e, p(t_method));
      }
      let t_headers = t.headers;
      if (t_headers !== undefined) {
        for (let t of t_headers) {
          _(e, 42);
          let o = g();
          ((t, e) => {
            let t_key = t.key;
            if (t_key !== undefined) {
              _(e, 10);
              x(e, t_key);
            }
            let t_value = t.value;
            if (t_value !== undefined) {
              _(e, 18);
              x(e, t_value);
            }
          })(t, o);
          _(e, o.limit);
          ((t, e) => {
            let r = m(t, e.limit);
            let t_bytes = t.bytes;
            let e_bytes = e.bytes;
            for (let t = 0, i = e.limit; t < i; t++) {
              t_bytes[t + r] = e_bytes[t];
            }
          })(e, o);
          r = o;
          v.push(r);
        }
      }
      let t_payloadEncoding = t.payloadEncoding;
      if (t_payloadEncoding !== undefined) {
        _(e, 50);
        x(e, t_payloadEncoding);
      }
      let t_payloadType = t.payloadType;
      if (t_payloadType !== undefined) {
        _(e, 58);
        x(e, t_payloadType);
      }
      let t_payload = t.payload;
      if (t_payload !== undefined) {
        _(e, 66);
        _(e, t_payload.length);
        i = m((o = e), (n = t_payload).length);
        o.bytes.set(n, i);
      }
      let t_LogIDNew = t.LogIDNew;
      if (t_LogIDNew !== undefined) {
        _(e, 74);
        x(e, t_LogIDNew);
      }
    })(t, (r = g()));
    o = (e = r).bytes;
    n = e.limit;
    if (o.length === n) {
      return o;
    }
    return o.subarray(0, n);
  }
  let charCodeAt = String.prototype.charCodeAt;
  class G {
    constructor(t, e, r) {
      this.isLong = true;
      this.low = 0 | t;
      this.high = 0 | e;
      this.unsigned = !!r;
    }
    static isLong(t) {
      return t && t.isLong === true;
    }
    static fromBits(t, e, r) {
      return new G(t, e, r);
    }
    static fromBytes(t, e, r) {
      if (r) {
        return G.fromBytesLE(t, e);
      }
      return G.fromBytesBE(t, e);
    }
    static fromBytesLE(t, e) {
      return new G(
        t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
        t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
        e,
      );
    }
    static fromBytesBE(t, e) {
      return new G(
        (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
        (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
        e,
      );
    }
    static fromHash(t) {
      if (t === "\0\0\0\0\0\0\0\0") {
        return E;
      }
      return new G(
        (charCodeAt.call(t, 0) |
          (charCodeAt.call(t, 1) << 8) |
          (charCodeAt.call(t, 2) << 16) |
          (charCodeAt.call(t, 3) << 24)) >>>
          0,
        (charCodeAt.call(t, 4) |
          (charCodeAt.call(t, 5) << 8) |
          (charCodeAt.call(t, 6) << 16) |
          (charCodeAt.call(t, 7) << 24)) >>>
          0,
        true,
      );
    }
    toHash() {
      return String.fromCharCode(
        255 & this.low,
        (this.low >>> 8) & 255,
        (this.low >>> 16) & 255,
        this.low >>> 24,
        255 & this.high,
        (this.high >>> 8) & 255,
        (this.high >>> 16) & 255,
        this.high >>> 24,
      );
    }
    static fromNumber(t, e = true) {
      if (isNaN(t)) {
        if (e) {
          return P;
        }
        return E;
      }
      if (e) {
        if (t >= 18446744073709552000) {
          return R;
        }
      } else {
        if (t <= -9223372036854776000) {
          return j;
        }
        if (t + 1 >= 9223372036854776000) {
          return L;
        }
      }
      return G.fromBits((t % 4294967296) | 0, (t / 4294967296) | 0, e);
    }
    toNumber() {
      if (this.unsigned) {
        return (this.high >>> 0) * 4294967296 + (this.low >>> 0);
      }
      return 4294967296 * this.high + (this.low >>> 0);
    }
    isZero() {
      return this.high === 0 && this.low === 0;
    }
    add(t) {
      if (!G.isLong(t)) {
        t = G.fromNumber(t);
      }
      let e = this.high >>> 16;
      let r = 65535 & this.high;
      let o = this.low >>> 16;
      let n = 65535 & this.low;
      let i = t.high >>> 16;
      let a = 65535 & t.high;
      let c = t.low >>> 16;
      let s = 65535 & t.low;
      let l = 0;
      let d = 0;
      let u;
      let p;
      u = 0 + ((p = 0 + (n + s)) >>> 16);
      p &= 65535;
      u += o + c;
      d += u >>> 16;
      u &= 65535;
      d += r + a;
      l += d >>> 16;
      d &= 65535;
      l += e + i;
      l &= 65535;
      return G.fromBits((u << 16) | p, (l << 16) | d, this.unsigned);
    }
    equals(t) {
      if (!G.isLong(t)) {
        t = G.fromNumber(t);
      }
      return (
        (this.unsigned === t.unsigned ||
          this.high >>> 31 != 1 ||
          t.high >>> 31 != 1) &&
        this.high === t.high &&
        this.low === t.low
      );
    }
    addOne() {
      if (this.low === -1 && this.high === -1) {
        return G.fromBits(0, 0, this.unsigned);
      }
      if (this.low === -1) {
        return G.fromBits(0, this.high + 1, this.unsigned);
      }
      return G.fromBits(this.low + 1, this.high, this.unsigned);
    }
    toBytes(t) {
      if (t) {
        return this.toBytesLE();
      }
      return this.toBytesBE();
    }
    toBytesLE() {
      let high = this.high;
      let low = this.low;
      return [
        255 & low,
        (low >>> 8) & 255,
        (low >>> 16) & 255,
        low >>> 24,
        255 & high,
        (high >>> 8) & 255,
        (high >>> 16) & 255,
        high >>> 24,
      ];
    }
    toBytesBE() {
      let high = this.high;
      let low = this.low;
      return [
        high >>> 24,
        (high >>> 16) & 255,
        (high >>> 8) & 255,
        255 & high,
        low >>> 24,
        (low >>> 16) & 255,
        (low >>> 8) & 255,
        255 & low,
      ];
    }
  }
  let E = new G(0, 0, false);
  let P = new G(0, 0, true);
  let L = G.fromBits(-1, 2147483647, false);
  let R = G.fromBits(-1, -1, true);
  let j = G.fromBits(0, -2147483648, false);
  t.ErrorCode = undefined;
  e = t.ErrorCode || (t.ErrorCode = {});
  e[(e.NATIVE_ERROR = 5001)] = "NATIVE_ERROR";
  e[(e.CONNECTING_ERROR = 5002)] = "CONNECTING_ERROR";
  e[(e.MAX_RETRIES_ERROR = 5003)] = "MAX_RETRIES_ERROR";
  e[(e.MESSAGE_ERROR = 5004)] = "MESSAGE_ERROR";
  e[(e.OPEN_ERROR = 5005)] = "OPEN_ERROR";
  class O {
    constructor(t) {
      this.type = t;
      this.target = null;
    }
  }
  class D extends O {
    constructor(t, e) {
      super(t);
      this.message = (e && e.message) || null;
    }
  }
  class N extends O {
    constructor(e, r) {
      super(e);
      this.error = (r && r.error) || null;
      this.colno = (r && r.colno) || 0;
      this.filename = (r && r.filename) || "";
      this.lineno = (r && r.lineno) || 0;
      this.message = (r && r.message) || "";
      this.code = (r && r.code) || t.ErrorCode.NATIVE_ERROR;
    }
  }
  class M extends O {
    constructor(t, e) {
      super(t);
      this.code = (e && e.code) || 0;
      this.reason = (e && e.reason) || "";
      this.wasClean = (e && e.wasClean) || false;
      this.willReconnect = (e && e.willReconnect) || false;
    }
  }
  class U extends O {
    constructor(t, e) {
      super(t);
      this.data = (e && e.data) || null;
    }
  }
  class z extends U {
    constructor(t, e) {
      super(t);
      this.data = (e && e.data) || null;
      this.message = (e && e.message) || null;
    }
  }
  class Q extends O {
    constructor(t, e) {
      super(t);
      this.data = (e && e.data) || null;
    }
  }
  function q(t, { message, code }) {
    return new N(t, {
      message,
      code,
    });
  }
  function F(t, { code, reason, wasClean, willReconnect }) {
    return new M(t, {
      code,
      reason,
      wasClean,
      willReconnect,
    });
  }
  function H(t, { data, message }) {
    return new z(t, {
      data,
      message,
    });
  }
  function X(t, { data }) {
    return new Q(t, {
      data,
    });
  }
  function J(t, { message }) {
    return new D(t, {
      message,
    });
  }
  class W {
    constructor(t, e) {
      this.endpoints = t;
      this.maxRetries = e;
      this.currentIndex = 0;
      this.currentEndpointTriesCount = 0;
    }
    resetEndpointConfig() {
      this.currentIndex = 0;
      this.currentEndpointTriesCount = 0;
    }
    resetTries() {
      this.currentEndpointTriesCount = 0;
    }
    getCurrentEndpoint() {
      return this.endpoints[this.currentIndex];
    }
    getCurrentEndpointTriesCount() {
      return this.currentEndpointTriesCount;
    }
    checkReachMaxTries() {
      return (
        this.currentIndex >= this.endpoints.length ||
        (this.currentIndex === this.endpoints.length - 1 &&
          this.currentEndpointTriesCount === this.maxRetries)
      );
    }
    checkCurrentEndpointReachedMaxRetries() {
      return (
        this.currentIndex == this.endpoints.length ||
        this.currentEndpointTriesCount > this.maxRetries
      );
    }
    replaceBackupEndpointAndUpdateCount() {
      this.currentEndpointTriesCount = 1;
      this.currentIndex++;
      return this.endpoints[this.currentIndex];
    }
    getCurrentEndpointAndUpdateCount() {
      this.currentEndpointTriesCount++;
      return this.getCurrentEndpoint();
    }
  }
  let V =
    ((typeof globalThis !== "undefined" &&
      globalThis.constructor.name === "Window") ||
      (typeof window !== "undefined" &&
        window.constructor.name === "Window")) &&
    typeof document !== "undefined";
  let Y =
    typeof globalThis !== "undefined" &&
    (globalThis.constructor.name === "Object" ||
      globalThis.constructor.name === "DedicatedWorkerGlobalScope") &&
    typeof tt !== "undefined";
  let Z =
    ((typeof globalThis !== "undefined" &&
      globalThis.constructor.name === "Object") ||
      typeof globalThis === "undefined" ||
      (typeof globalThis !== "undefined" && !!globalThis.WeixinJSBridge)) &&
    typeof wx !== "undefined";
  let K =
    typeof globalThis !== "undefined" &&
    (globalThis.constructor.name === "DedicatedWorkerGlobalScope" ||
      globalThis.constructor.name === "SharedWorkerGlobalScope" ||
      globalThis.constructor.name === "ServiceWorkerGlobalScope") &&
    typeof self !== "undefined";
  let $ =
    typeof globalThis !== "undefined" &&
    globalThis.constructor.name === "Object" &&
    global !== undefined &&
    global.constructor.name === "Object" &&
    o !== undefined &&
    o.version;
  class te {
    constructor() {
      this._listeners = {};
    }
    emit(t, ...e) {
      let r = this._listeners[t];
      if (r) {
        r.slice().forEach((t) => t.fn.apply(t.ctx, e));
      } else if (t === "error" && !this.onerror) {
        let t = e.length && e[0];
        if (t instanceof Error) {
          throw t;
        }
        Error(`Unhandled error.${t ? " (" + t.message + ")" : ""}`).context = t;
        throw t;
      }
      return this;
    }
    off(t, e) {
      if (t === undefined) {
        this._listeners = {};
      } else if (e === undefined) {
        this._listeners[t] = null;
      } else {
        let r = this._listeners[t];
        if (r) {
          for (let t = 0; t < r.length;) {
            if (r[t].fn === e) {
              r.splice(t, 1);
            } else {
              ++t;
            }
          }
        }
      }
      return this;
    }
    on(t, fn, r) {
      (this._listeners[t] || (this._listeners[t] = [])).push({
        fn,
        ctx: r || this,
      });
      return this;
    }
  }
  class tr extends te {
    constructor(url, protocols, header) {
      super();
      this._socket = null;
      if (Z && wx.connectSocket) {
        this._socket = wx.connectSocket({
          url,
          protocols,
          header,
          fail: this._createSocketFailHandler.bind(this),
          success: this._createSocketSuccessHandler.bind(this),
        });
      }
      if (Y && tt.connectSocket) {
        this._socket = tt.connectSocket({
          url,
          protocols,
          header,
          fail: this._createSocketFailHandler.bind(this),
          success: this._createSocketSuccessHandler.bind(this),
        });
      }
    }
    _createSocketSuccessHandler() {
      Promise.resolve().then(() => {
        this._addWsListeners();
      });
    }
    _createSocketFailHandler(t) {
      Promise.resolve().then(() => {
        let e = q("error", {
          message:
            t.errMsg || t.errNo
              ? `message: ${t.errMsg}` || `code: ${t.errNo}` || ""
              : JSON.stringify(t),
        });
        this.emit("error", e);
        let r = F("close", {
          reason:
            t.errMsg || t.errNo
              ? `message: ${t.errMsg}` || `code: ${t.errNo}` || ""
              : JSON.stringify(t),
        });
        this.emit("close", r);
      });
    }
    _addWsListeners() {
      this._socket.onOpen((t) => {
        this.emit(
          "open",
          X("open", {
            ...t,
            data: t.errMsg || "",
          }),
        );
      });
      this._socket.onClose((t) => {
        this.emit(
          "close",
          F("close", {
            ...t,
          }),
        );
      });
      this._socket.onMessage((t) => {
        this.emit(
          "message",
          H("message", {
            ...t,
          }),
        );
      });
      this._socket.onError((t) => {
        this.emit(
          "error",
          q("error", {
            ...t,
            message: t.errMsg || "",
          }),
        );
      });
    }
    send(t) {
      if (t instanceof Uint8Array) {
        let data = t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset);
        if (this._socket) {
          this._socket.send({
            data,
            fail: (t) => {
              this.emit(
                "error",
                q("error", {
                  message:
                    t.errMsg || t.errNo
                      ? `message: ${t.errMsg}` || `code: ${t.errNo}` || ""
                      : JSON.stringify(t),
                }),
              );
            },
          });
        }
      } else {
        if (this._socket) {
          this._socket.send({
            data: t,
            fail: (t) => {
              this.emit(
                "error",
                q("error", {
                  message:
                    t.errMsg || t.errNo
                      ? `message: ${t.errMsg}` || `code: ${t.errNo}` || ""
                      : JSON.stringify(t),
                }),
              );
            },
          });
        }
      }
    }
    close(code, reason) {
      if (this._socket) {
        this._socket.close({
          code,
          reason,
        });
      }
    }
    addEventListener(t, e) {
      this.on(t, e);
    }
    removeEventListener(t, e) {
      this.off(t, e);
    }
    get readyState() {
      return this._socket.readyState;
    }
    get binaryType() {
      return this._socket.binaryType;
    }
    set binaryType(t) {}
    get url() {
      return this._socket.url;
    }
    get protocol() {
      return this._socket.protocol;
    }
    get extensions() {
      return this._socket.extensions;
    }
    get bufferedAmount() {
      return 0;
    }
  }
  function to(headers, e, r) {
    return !!(headers == null
      ? undefined
      : headers.find((t) => t.key === e && t.value === r));
  }
  function tn(headers, e) {
    let r;
    if (
      (r = headers == null ? undefined : headers.find((t) => t.key === e)) ==
      null
    ) {
      return undefined;
    }
    return r.value;
  }
  function ti(t) {
    return c(this, undefined, undefined, function* () {
      let { enableAutoAck } = this._options;
      let r = to(t.message.headers, "need_ack", "1");
      let o = to(t.message.headers, "is_ack", "1");
      let n = to(t.message.headers, "x_frontier_qos_ack", "1");
      if (enableAutoAck && r) {
        let { SeqID, LogID, service, LogIDNew, method } = t.message;
        this._sendAck({
          SeqID,
          LogID,
          LogIDNew,
          service,
          method,
          headers: [
            {
              key: "is_ack",
              value: "1",
            },
            {
              key: "ack_id",
              value: LogIDNew || "",
            },
            {
              key: "ack_code",
              value: "0",
            },
          ],
        });
      }
      if (o && !n) {
        this._dispatchAckMessageEvent(t);
      }
    });
  }
  function ta(t) {
    return c(this, undefined, undefined, function* () {
      if (typeof t === "string") {
        let e = new Uint8Array(
          ((t) => {
            let e = 0;
            let r = 0;
            for (let o = 0; o < t.length; ++o) {
              if ((r = t.charCodeAt(o)) < 128) {
                e += 1;
              } else if (r < 2048) {
                e += 2;
              } else if (
                (64512 & r) == 55296 &&
                (64512 & t.charCodeAt(o + 1)) == 56320
              ) {
                ++o;
                e += 4;
              } else {
                e += 3;
              }
            }
            return e;
          })(t),
        );
        ((t, e, r) => {
          let o;
          let n;
          for (let i = 0; i < t.length; ++i) {
            if ((o = t.charCodeAt(i)) < 128) {
              e[r++] = o;
            } else {
              if (o < 2048) {
                e[r++] = (o >> 6) | 192;
              } else {
                if (
                  (64512 & o) == 55296 &&
                  (64512 & (n = t.charCodeAt(i + 1))) == 56320
                ) {
                  o = 65536 + ((1023 & o) << 10) + (1023 & n);
                  ++i;
                  e[r++] = (o >> 18) | 240;
                  e[r++] = ((o >> 12) & 63) | 128;
                } else {
                  e[r++] = (o >> 12) | 224;
                }
                e[r++] = ((o >> 6) & 63) | 128;
              }
              e[r++] = (63 & o) | 128;
            }
          }
        })(t, e, 0);
        return e;
      }
      if (t instanceof ArrayBuffer) {
        return new Uint8Array(t);
      }
      return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    });
  }
  function tc(t) {
    return c(this, undefined, undefined, function* () {
      let e = B(yield ta(t.data));
      try {
        if (e.payload instanceof Uint8Array) {
          let t =
            this._options.payloadEncoding instanceof Object
              ? {
                  force: !!this._options.payloadEncoding.force,
                  encoding: this._options.payloadEncoding.encoding
                    ? this._options.payloadEncoding.encoding
                        .replace(/\s/g, "")
                        .toLowerCase()
                    : "",
                }
              : {
                  force: false,
                  encoding: this._options.payloadEncoding
                    ? this._options.payloadEncoding
                        .replace(/\s/g, "")
                        .toLowerCase()
                    : "",
                };
          let r = e.payloadEncoding
            ? e.payloadEncoding.replace(/\s/g, "").toLowerCase()
            : "";
          let o =
            this._options.payloadType instanceof Object
              ? {
                  force: !!this._options.payloadType.force,
                  type: this._options.payloadType.type
                    ? this._options.payloadType.type
                        .replace(/\s/g, "")
                        .toLowerCase()
                    : "",
                }
              : {
                  force: false,
                  type: this._options.payloadType
                    ? this._options.payloadType.replace(/\s/g, "").toLowerCase()
                    : "",
                };
          let n = e.payloadType
            ? e.payloadType.replace(/\s/g, "").toLowerCase()
            : "";
          let i = o.force ? o.type : n || o.type;
          let a = t.force ? t.encoding : r || t.encoding;
          if (
            this._options.enableTransformTextPayload &&
            [
              "text/plain;charset=utf-8",
              "application/json",
              "application/json;charset=utf-8",
              "string",
            ].includes(i) &&
            (!a || ["none_none", "binary"].includes(a))
          ) {
            e.textPayload = ((t, e) => {
              if (e - 0 < 1) {
                return "";
              }
              let r = "";
              for (let o = 0; o < e;) {
                let e = t[o++];
                if (e <= 127) {
                  r += String.fromCharCode(e);
                } else if (e >= 192 && e < 224) {
                  r += String.fromCharCode(((31 & e) << 6) | (63 & t[o++]));
                } else if (e >= 224 && e < 240) {
                  r += String.fromCharCode(
                    ((15 & e) << 12) | ((63 & t[o++]) << 6) | (63 & t[o++]),
                  );
                } else if (e >= 240) {
                  let n =
                    (((7 & e) << 18) |
                      ((63 & t[o++]) << 12) |
                      ((63 & t[o++]) << 6) |
                      (63 & t[o++])) -
                    65536;
                  r += String.fromCharCode(55296 + (n >> 10));
                  r += String.fromCharCode(56320 + (1023 & n));
                }
              }
              return r;
            })(e.payload, e.payload.byteLength);
          } else {
            e.textPayload = "";
          }
        } else {
          e.textPayload = "";
        }
      } catch (error) {
        e.textPayload = "";
        console.log(error);
      }
      t.message = e;
    });
  }
  function ts(t, e, r) {
    let o = -1;
    return (function e(n) {
      if (++o < r.length) {
        return r[o]
          .bind(t)(n)
          .then(() => e(n));
      }
      return Promise.resolve();
    })(e);
  }
  let tl = new WeakMap();
  let td = new WeakMap();
  let tu = new WeakMap();
  let tp = new WeakMap();
  let tv = new WeakMap();
  let tg = {
    get(t, e, r) {
      if (t instanceof IDBTransaction) {
        if (e === "done") {
          return td.get(t);
        }
        if (e === "objectStoreNames") {
          return t.objectStoreNames || tu.get(t);
        }
        if (e === "store") {
          if (r.objectStoreNames[1]) {
            return undefined;
          }
          return r.objectStore(r.objectStoreNames[0]);
        }
      }
      return tb(t[e]);
    },
    set: (t, e, r) => {
      t[e] = r;
      return true;
    },
    has: (t, e) =>
      (t instanceof IDBTransaction && (e === "done" || e === "store")) ||
      e in t,
  };
  function tb(t) {
    if (t instanceof IDBRequest) {
      let e;
      (e = new Promise((resolve, reject) => {
        let o = () => {
          t.removeEventListener("success", n);
          t.removeEventListener("error", i);
        };
        let n = () => {
          resolve(tb(t.result));
          o();
        };
        let i = () => {
          reject(t.error);
          o();
        };
        t.addEventListener("success", n);
        t.addEventListener("error", i);
      }))
        .then((e) => {
          if (e instanceof IDBCursor) {
            tl.set(e, t);
          }
        })
        .catch(() => {});
      tv.set(e, t);
      return e;
    }
    if (tp.has(t)) {
      return tp.get(t);
    }
    let e = ((t) => {
      if (typeof t === "function") {
        if (
          t !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
        ) {
          if (
            (
              i ||
              (i = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
            ).includes(t)
          ) {
            return function (...e) {
              t.apply(tw(this), e);
              return tb(tl.get(this));
            };
          }
          return function (...e) {
            return tb(t.apply(tw(this), e));
          };
        }
        return function (e, ...r) {
          let o = t.call(tw(this), e, ...r);
          tu.set(o, e.sort ? e.sort() : [e]);
          return tb(o);
        };
      }
      if (t instanceof IDBTransaction) {
        ((t) => {
          if (td.has(t)) {
            return;
          }
          let e = new Promise((resolve, reject) => {
            let o = () => {
              t.removeEventListener("complete", n);
              t.removeEventListener("error", i);
              t.removeEventListener("abort", i);
            };
            let n = () => {
              resolve();
              o();
            };
            let i = () => {
              reject(t.error || new DOMException("AbortError", "AbortError"));
              o();
            };
            t.addEventListener("complete", n);
            t.addEventListener("error", i);
            t.addEventListener("abort", i);
          });
          td.set(t, e);
        })(t);
      }
      if (
        (
          n ||
          (n = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
          ])
        ).some((e) => t instanceof e)
      ) {
        return new Proxy(t, tg);
      }
      return t;
    })(t);
    if (e !== t) {
      tp.set(t, e);
      tv.set(e, t);
    }
    return e;
  }
  let tw = (t) => tv.get(t);
  let tm = ["get", "getKey", "getAll", "getAllKeys", "count"];
  let th = ["put", "add", "delete", "clear"];
  let tf = new Map();
  function tx(t, e) {
    if (!(t instanceof IDBDatabase && !(e in t) && typeof e === "string")) {
      return;
    }
    if (tf.get(e)) {
      return tf.get(e);
    }
    let r = e.replace(/FromIndex$/, "");
    let o = e !== r;
    let n = th.includes(r);
    if (
      !(r in (o ? IDBIndex : IDBObjectStore).prototype) ||
      !(n || tm.includes(r))
    ) {
      return;
    }
    let i = async function (t, ...e) {
      let i = this.transaction(t, n ? "readwrite" : "readonly");
      let i_store = i.store;
      if (o) {
        i_store = i_store.index(e.shift());
      }
      return (await Promise.all([i_store[r](...e), n && i.done]))[0];
    };
    tf.set(e, i);
    return i;
  }
  tg = {
    ...(a = tg),
    get: (t, e, r) => tx(t, e) || a.get(t, e, r),
    has: (t, e) => !!tx(t, e) || a.has(t, e),
  };
  class ty extends te {
    constructor() {
      super();
      this._qosDB = undefined;
      this._intervalTimeoutId = null;
      this._interval = 3600000;
      this._init();
    }
    openDB() {
      return c(this, undefined, undefined, function* () {
        yield this._init();
      });
    }
    _init() {
      return c(this, undefined, undefined, function* () {
        return new Promise((resolve) => {
          if (this._qosDB) {
            resolve(this);
          } else {
            ((t, { blocked, upgrade, blocking, terminated } = {}) => {
              let i = indexedDB.open(t, 1);
              let a = tb(i);
              if (upgrade) {
                i.addEventListener("upgradeneeded", (t) => {
                  upgrade(
                    tb(i.result),
                    t.oldVersion,
                    t.newVersion,
                    tb(i.transaction),
                  );
                });
              }
              if (blocked) {
                i.addEventListener("blocked", () => blocked());
              }
              a.then((t) => {
                if (terminated) {
                  t.addEventListener("close", () => terminated());
                }
                if (blocking) {
                  t.addEventListener("versionchange", () => blocking());
                }
              }).catch(() => {});
              return a;
            })("frontier", {
              upgrade(t, e, r, o) {
                t.createObjectStore("qos", {
                  keyPath: "message_id",
                });
              },
            }).then((t) => {
              this._qosDB = t;
              this._intervalFlush();
              this.emit("ready");
            });
            this.on("ready", () => {
              resolve(this);
              this.off();
            });
          }
        });
      });
    }
    _intervalFlush() {
      return c(this, undefined, undefined, function* () {
        clearInterval(this._intervalTimeoutId);
        this._intervalTimeoutId = setInterval(() => {
          this.flushExpired();
        }, this._interval);
      });
    }
    get(t) {
      let e;
      return c(this, undefined, undefined, function* () {
        return yield (e = this._qosDB) == null ? undefined : e.get("qos", t);
      });
    }
    set(message_id, e) {
      let r;
      return c(this, undefined, undefined, function* () {
        return yield (r = this._qosDB) == null
          ? undefined
          : r.put("qos", {
              message_id,
              timestamp: e,
            });
      });
    }
    del(t) {
      let e;
      return c(this, undefined, undefined, function* () {
        return yield (e = this._qosDB) == null ? undefined : e.delete("qos", t);
      });
    }
    clear() {
      let t;
      return c(this, undefined, undefined, function* () {
        return yield (t = this._qosDB) == null ? undefined : t.clear("qos");
      });
    }
    keys() {
      let t;
      return c(this, undefined, undefined, function* () {
        return yield (t = this._qosDB) == null
          ? undefined
          : t.getAllKeys("qos");
      });
    }
    getAll() {
      let t;
      return c(this, undefined, undefined, function* () {
        return yield (t = this._qosDB) == null ? undefined : t.getAll("qos");
      });
    }
    flushExpired() {
      let t;
      return c(this, undefined, undefined, function* () {
        ((yield (t = this._qosDB) == null ? undefined : t.getAll("qos")) || [])
          .filter(({ timestamp }) => timestamp < Date.now())
          .forEach((t) => {
            var e;
            if ((e = this._qosDB) != null) {
              e.delete("qos", t.message_id);
            }
          });
      });
    }
    closeDB() {
      let t;
      return c(this, undefined, undefined, function* () {
        clearInterval(this._intervalTimeoutId);
        if ((t = this._qosDB) != null) {
          t.close();
        }
        this._qosDB = undefined;
      });
    }
    get isReady() {
      return this._qosDB;
    }
  }
  class tk {
    constructor() {
      this._qosDB = localStorage;
      this._intervalTimeoutId = null;
      this._interval = 3600000;
      this._intervalFlush();
    }
    openDB() {
      return c(this, undefined, undefined, function* () {
        if (!this._intervalTimeoutId) {
          this._intervalFlush();
          return this;
        }
      });
    }
    _intervalFlush() {
      return c(this, undefined, undefined, function* () {
        clearInterval(this._intervalTimeoutId);
        this._intervalTimeoutId = setInterval(() => {
          this.flushExpired();
        }, this._interval);
      });
    }
    _add_prefix(t) {
      return `${this._prefix}${t}`;
    }
    get _prefix() {
      return "frontier_qos_msg_id_";
    }
    get(t) {
      return c(this, undefined, undefined, function* () {
        return JSON.parse(this._qosDB.getItem(this._add_prefix(t)) || "{}");
      });
    }
    set(t, e) {
      return c(this, undefined, undefined, function* () {
        return this._qosDB.setItem(
          this._add_prefix(t),
          JSON.stringify({
            message_id: t,
            timestamp: e,
          }),
        );
      });
    }
    del(t) {
      return c(this, undefined, undefined, function* () {
        return this._qosDB.removeItem(this._add_prefix(t));
      });
    }
    clear() {
      return c(this, undefined, undefined, function* () {
        return this._qosDB.clear();
      });
    }
    keys() {
      return c(this, undefined, undefined, function* () {
        let t = [];
        for (let e = 0; e < this._qosDB.length; e++) {
          t.push(this._qosDB.key(e));
        }
        return t.filter((t) => {
          if (t == null) {
            return undefined;
          }
          return t.startsWith(this._prefix);
        });
      });
    }
    getAll() {
      return c(this, undefined, undefined, function* () {
        let t = [];
        let e = yield this.keys();
        for (let r in e) {
          let e = this._qosDB.getItem(r);
          t.push(JSON.parse(e || "{}"));
        }
        return t;
      });
    }
    flushExpired() {
      return c(this, undefined, undefined, function* () {
        ((yield this.getAll()) || [])
          .filter(({ timestamp }) => timestamp < Date.now())
          .forEach((t) => {
            this.del(t.message_id);
          });
      });
    }
    closeDB() {
      clearInterval(this._intervalTimeoutId);
    }
    get isReady() {
      return this._qosDB;
    }
  }
  class tC {
    constructor() {
      this._qosDB = Y ? tt : Z ? wx : null;
      this._intervalTimeoutId = null;
      this._interval = 3600000;
      this._intervalFlush();
    }
    openDB() {
      return c(this, undefined, undefined, function* () {
        if (!this._intervalTimeoutId) {
          this._intervalFlush();
          return this;
        }
      });
    }
    _intervalFlush() {
      return c(this, undefined, undefined, function* () {
        clearInterval(this._intervalTimeoutId);
        this._intervalTimeoutId = setInterval(() => {
          this.flushExpired();
        }, this._interval);
      });
    }
    _add_prefix(t) {
      return `${this._prefix}${t}`;
    }
    get _prefix() {
      return "frontier_qos_msg_id_";
    }
    get(t) {
      return c(this, undefined, undefined, function* () {
        return JSON.parse(
          this._qosDB.getStorageSync(this._add_prefix(t)) || "{}",
        );
      });
    }
    set(t, e) {
      return c(this, undefined, undefined, function* () {
        return this._qosDB.setStorageSync(
          this._add_prefix(t),
          JSON.stringify({
            message_id: t,
            timestamp: e,
          }),
        );
      });
    }
    del(t) {
      return c(this, undefined, undefined, function* () {
        return this._qosDB.removeStorageSync(this._add_prefix(t));
      });
    }
    clear() {
      return c(this, undefined, undefined, function* () {
        return this._qosDB.clearStorageSync();
      });
    }
    keys() {
      return c(this, undefined, undefined, function* () {
        let { keys } = this._qosDB.getStorageInfoSync();
        return keys.filter((t) => {
          if (t == null) {
            return undefined;
          }
          return t.startsWith(this._prefix);
        });
      });
    }
    getAll() {
      return c(this, undefined, undefined, function* () {
        let t = [];
        for (let e of yield this.keys()) {
          let r = yield this.get(e);
          t.push(r);
        }
        return t;
      });
    }
    flushExpired() {
      return c(this, undefined, undefined, function* () {
        ((yield this.getAll()) || [])
          .filter(({ timestamp }) => timestamp < Date.now())
          .forEach((t) => {
            this.del(t.message_id);
          });
      });
    }
    closeDB() {
      clearInterval(this._intervalTimeoutId);
    }
    get isReady() {
      return this._qosDB;
    }
  }
  function t_() {
    if (Y || Y) {
      return new tC();
    }
    if ((V || K) && 1) {
      return new ty();
    }
    if ((V || K) && 1) {
      return new tk();
    }
    return null;
  }
  function tT(t) {
    let e;
    let r;
    let o;
    let n;
    return c(this, undefined, undefined, function* () {
      let i = to(t.message.headers, "code", "-1");
      let a = to(t.message.headers, "is_ack", "1");
      let c = tn(t.message.headers, "x_frontier_msgid");
      let s = Number(tn(t.message.headers, "x_frontier_ttl")) || 0;
      let l = to(t.message.headers, "x_frontier_qos", "2");
      if (!to(t.message.headers, "x_frontier_qos_ack", "1") || !l) {
        if (l && !this._qosDB) {
          this._qosDB = t_();
          if (this._qosDB) {
            yield this._qosDB.openDB();
          }
        }
        if (l && !this._qosDB.isReady) {
          yield this._qosDB.openDB();
        }
        if (t.message.service > 0 && a && !i) {
          return void (c && l
            ? (yield (e = this._qosDB) == null ? undefined : e.get(c)) ||
              (this._dispatchMessageEvent(t),
              yield (r = this._qosDB) == null
                ? undefined
                : r.set(c, Date.now() + s))
            : this._dispatchMessageEvent(t));
        }
        if (t.message.service > 0) {
          return void (c && l
            ? (yield (o = this._qosDB) == null ? undefined : o.get(c)) ||
              (this._dispatchMessageEvent(t),
              yield (n = this._qosDB) == null
                ? undefined
                : n.set(c, Date.now() + s))
            : this._dispatchMessageEvent(t));
        }
      }
    });
  }
  function tS(t) {
    return c(this, undefined, undefined, function* () {
      this._uptimeTimeoutId = setTimeout(
        (() => tB.bind(this)(t)).bind(this),
        this._options.uptimeInterval,
      );
    });
  }
  function tB(t) {
    let e;
    let r;
    return c(this, undefined, undefined, function* () {
      if (!this._ws || this._ws.readyState !== this.OPEN) {
        return;
      }
      let { pingInterval } = this._options;
      if ((e = this._endpointManager) != null) {
        e.resetEndpointConfig();
      }
      for (let t = 0; t < this._messageQueue.length; t++) {
        let e = this._messageQueue[t];
        if (this._ws.readyState === this.OPEN && e !== null) {
          if (this._ws) {
            this._ws.send(e);
          }
          this._messageQueue[t] = null;
        } else {
          break;
        }
      }
      this._messageQueue = this._messageQueue.filter((t) => !!t);
      this._pingPongTimeoutId = setTimeout(() => this._ping(), pingInterval);
      this._dispatchOpenEvent(t);
      if (this._isBrowser && this._ws) {
        this._ws.binaryType = this._binaryType;
      }
      let n =
        (r = this._endpointManager) == null
          ? undefined
          : r.getCurrentEndpoint();
      this._debug(`open ${n} success`);
    });
  }
  function tA() {
    return c(this, undefined, undefined, function* () {
      this._isInit = false;
      clearTimeout(this._connectionTimeoutId);
    });
  }
  function tI(t) {
    let e;
    let r;
    return c(this, undefined, undefined, function* () {
      let o = to(t.message.headers, "x_frontier_qos", "2");
      let n = to(t.message.headers, "x_frontier_is_ack", "1");
      let i =
        (e = tn(t.message.headers, "x_frontier_ack_msgid")) == null
          ? undefined
          : e.split(",");
      if (o && !this._qosDB) {
        this._qosDB = t_();
        if (this._qosDB) {
          yield this._qosDB.openDB();
        }
      }
      if (o && !this._qosDB.isReady) {
        yield this._qosDB.openDB();
      }
      if (o && n && i && i.length) {
        for (let t of i) {
          yield (r = this._qosDB) == null ? undefined : r.del(t);
        }
      }
    });
  }
  class tG {
    constructor(t) {
      this.maxLossCount = t;
      this.count = 0;
    }
    addCount() {
      this.count++;
    }
    checkReachMaxCount() {
      return this.count >= this.maxLossCount;
    }
    resetCounter(t = 0) {
      this.maxLossCount = t;
      this.count = 0;
    }
  }
  t.CustomCloseEvent = M;
  t.CustomErrorEvent = N;
  t.Event = O;
  t.FWS = class extends te {
    constructor(e) {
      super();
      this._miniNavigatorOnline = true;
      this._isBrowser = V;
      this._isNode = $;
      this._isMiniTT = Y;
      this._isMiniWX = Z;
      this._isWorker = K;
      this._messageQueue = [];
      this._endpointManager = null;
      this._readyClosed = false;
      this._binaryType = "arraybuffer";
      this._connectLock = false;
      this._connectionTimeoutId = null;
      this._uptimeTimeoutId = null;
      this._reconnectTimeoutId = null;
      this._pingPongTimeoutId = null;
      this._seqId = 0;
      this._isInit = false;
      this._url = "";
      this._qosDB = null;
      this._pingLossCounter = null;
      this._protocols = "pbbp2";
      this.CLOSED = 3;
      this.CONNECTING = 0;
      this.OPEN = 1;
      this.CLOSING = 2;
      this._onOpen = (e) => {
        ts(this, e, [tA, tS])
          .then(() => {
            var t;
            let e =
              (t = this._endpointManager) == null
                ? undefined
                : t.getCurrentEndpoint();
            this._debug(`open ${e}`);
          })
          .catch((e) => {
            let r = q("error", {
              message: e.message,
              code: t.ErrorCode.OPEN_ERROR,
            });
            this._dispatchErrorEvent(r);
          });
      };
      this._onMessage = (e) =>
        c(this, undefined, undefined, function* () {
          let { pingInterval, pingFrequency } = this._options;
          if (
            (e.data === "hi" && pingFrequency === "always") ||
            pingFrequency === "auto"
          ) {
            this._clearPingTimer();
            this.emit("ping_once_success", "success");
            this._pingPongTimeoutId = setTimeout(
              () => this._ping(),
              pingInterval,
            );
          }
          if (e.data !== "hi") {
            ts(this, e, [tc, ti, tI, tT])
              .then(() => {
                this._debug("received", e.message);
              })
              .catch((e) => {
                let r = q("error", {
                  message: e.message,
                  code: t.ErrorCode.MESSAGE_ERROR,
                });
                this._dispatchErrorEvent(r);
              });
          }
        });
      this._onError = (e) => {
        var r;
        var o;
        let n =
          (r = this._endpointManager) == null
            ? undefined
            : r.checkReachMaxTries();
        let i =
          (o = this._endpointManager) == null
            ? undefined
            : o.getCurrentEndpoint();
        if (n && !e.message) {
          let e = `connect ${i} fail, max retries reached`;
          this._dispatchErrorEvent(
            q("error", {
              message: e,
              code: t.ErrorCode.MAX_RETRIES_ERROR,
            }),
          );
          return;
        }
        if (this._ws && this._ws.readyState === this.OPEN) {
          this._disconnect();
        }
        this._dispatchErrorEvent(
          q("error", {
            message: e.message,
            code: t.ErrorCode.NATIVE_ERROR,
          }),
        );
      };
      this._onClose = (e) =>
        c(this, undefined, undefined, function* () {
          let r;
          let o;
          let n;
          let i;
          let a;
          let s;
          let l;
          let d;
          let u;
          let p;
          let v;
          let g;
          this._clearTimer();
          this._clearPingTimer();
          this._removeWsListeners();
          this._ws = null;
          this._connectLock = false;
          let b =
            (r = this._endpointManager) == null
              ? undefined
              : r.checkReachMaxTries();
          if (!b && this._navigatorOnline() && !this._readyClosed) {
            let t =
              (o = this._endpointManager) == null
                ? undefined
                : o.getCurrentEndpoint();
            let r = this._options.reconnectInterceptor(e.code, e.reason);
            this._dispatchCloseEvent(
              F("close", {
                code: 1006,
                reason:
                  e.reason ||
                  `connecting failed, unknown reason, hostname: ${t}`,
                willReconnect: r,
              }),
            );
            if (r) {
              this._connect();
            }
            return;
          }
          if (e.code !== 1000 && this._readyClosed) {
            this._dispatchCloseEvent(
              F("close", {
                code: 1000,
                reason: "bye",
              }),
            );
            if ((n = this._endpointManager) != null) {
              n.resetEndpointConfig();
            }
            if ((i = this._pingLossCounter) != null) {
              i.resetCounter();
            }
            return;
          }
          if (e.code !== 1000 && b) {
            let r =
              (a = this._endpointManager) == null
                ? undefined
                : a.getCurrentEndpoint();
            let o = e.reason;
            if (!o) {
              o = yield (function (t) {
                return c(this, undefined, undefined, function* () {
                  return new Promise((resolve) => {
                    if (!V) {
                      return resolve("unknown reason");
                    }
                    try {
                      let r = document.createElement("script");
                      window.frontierJSONP = (t) => {
                        document.body.removeChild(r);
                        window.frontierJSONP = undefined;
                        resolve((t && t.msg) || "unknown reason");
                      };
                      r.type = "text/javascript";
                      r.src =
                        t.replace(/^ws/, "http") + "&jscallback=frontierJSONP";
                      try {
                        document.body.appendChild(r);
                      } catch (t) {
                        document.body.removeChild(r);
                      }
                    } catch (t) {
                      window.frontierJSONP = undefined;
                      resolve("unknown reason");
                    }
                  });
                });
              })(this._url);
            }
            o = `connecting failed, ${o}, hostname: ${r}, max retries reached`;
            this._dispatchCloseEvent(
              F("close", {
                code: e.code,
                reason: o,
              }),
            );
            let n = `connect ${r} fail, max retries reached`;
            this._dispatchErrorEvent(
              q("error", {
                message: n,
                code: t.ErrorCode.MAX_RETRIES_ERROR,
              }),
            );
            if ((s = this._endpointManager) != null) {
              s.resetEndpointConfig();
            }
            if ((l = this._pingLossCounter) != null) {
              l.resetCounter();
            }
            return;
          }
          if (e.code !== 1000 && !e.reason) {
            let t =
              (d = this._endpointManager) == null
                ? undefined
                : d.getCurrentEndpoint();
            this._dispatchCloseEvent(
              F("close", {
                code: e.code,
                reason: `connecting failed, unknown reason, hostname: ${t}`,
              }),
            );
            if ((u = this._endpointManager) != null) {
              u.resetEndpointConfig();
            }
            if ((p = this._pingLossCounter) != null) {
              p.resetCounter();
            }
            return;
          }
          this._dispatchCloseEvent(e);
          if ((v = this._endpointManager) != null) {
            v.resetEndpointConfig();
          }
          if ((g = this._pingLossCounter) != null) {
            g.resetCounter();
          }
        });
      this.onclose = null;
      this.onerror = null;
      this.onmessage = null;
      this.onopen = null;
      this.onStartReconnect = null;
      this.onReceiveAck = null;
      this.onStopImmediatelyReconnect = null;
      this._options = {
        url: "",
        automaticOpen: true,
        initReconnectInterval: 1000,
        maxReconnectInterval: 10000,
        reconnectIntervalGrowFactor: 2,
        timeoutInterval: 5000,
        uptimeInterval: 1000,
        maxRetries: 5,
        debug: false,
        maxMessageQueueLength: Infinity,
        service: 0,
        logIDGenerator,
        headers: undefined,
        payloadEncoding: "",
        payloadType: "",
        fpID: "",
        deviceID: "",
        accessKey: "",
        ttwID: "",
        bddID: "",
        aID: "",
        disableAutoReconnect: false,
        customParams: {},
        pingInterval: 15000,
        pingTimeoutInterval: 4000,
        pingFrequency: "auto",
        pingLossCount: 2,
        enableTransformTextPayload: false,
        logIDNewConfig: {
          enableAutoGenerateLogIDNew: false,
          userIp: "",
        },
        miniProgramParams: {
          customHttpHeader: {},
        },
        enableAutoAck: false,
        reconnectInterceptor: () => true,
        enableQoS: false,
        env: {
          xTTEnv: "",
          xUseEnv: "",
        },
        listenNetworkChanged: true,
      };
      let { url, ws } = e;
      let n = Array.isArray(url) ? url : typeof url === "string" ? [url] : [];
      if (!n || n.length === 0) {
        throw Error("please provide valid url");
      }
      if (
        !(
          ws ||
          (Z && wx.connectSocket) ||
          (Y && tt.connectSocket) ||
          ((V || K) && typeof WebSocket !== "undefined" && WebSocket)
        )
      ) {
        throw Error(
          "please provide ws params, WebSocket constructor is undefined",
        );
      }
      Object.assign(this._options, e);
      this._endpointManager = new W(n, this._options.maxRetries);
      this._pingLossCounter = new tG(this._options.pingLossCount);
      if (this._options.automaticOpen) {
        this._isInit = true;
        this._connect();
      }
      if (this._options.listenNetworkChanged) {
        if (this._isMiniTT || this._isMiniWX) {
          this._onPageNetWorkChange();
        } else if (this._isBrowser) {
          this._initGlobalEventListener();
        }
      }
    }
    _handleOnLine() {
      if (!(this._options.disableAutoReconnect || this._readyClosed)) {
        this._handleReconnect();
      }
    }
    _handleOffLine() {
      this._destroyWebSocket();
      let t = J("reconnect", {
        message: "stop immediately reconnect",
      });
      if (this.onStopImmediatelyReconnect) {
        this.onStopImmediatelyReconnect(t);
      }
    }
    _initGlobalEventListener() {
      if (this._isBrowser) {
        window.addEventListener("online", this._handleOnLine.bind(this));
      }
      if (this._isBrowser) {
        window.addEventListener("offline", this._handleOffLine.bind(this));
      }
      if (this._isBrowser) {
        window.addEventListener("pagehide", this._handlePageHide.bind(this));
      }
      if (this._isBrowser) {
        window.addEventListener("pageshow", this._handlePageShow.bind(this));
      }
    }
    _dropGlobalEventListener() {
      if (this._isBrowser) {
        window.removeEventListener("online", this._handleOnLine);
      }
      if (this._isBrowser) {
        window.removeEventListener("offline", this._handleOffLine);
      }
      if (this._isBrowser) {
        window.removeEventListener("pagehide", this._handlePageHide);
      }
      if (this._isBrowser) {
        window.removeEventListener("pageshow", this._handlePageShow);
      }
    }
    _handlePageHide(t) {
      if (!t.persisted) {
        if (this._isBrowser) {
          window.removeEventListener("pagehide", this._handlePageHide);
        }
        if (this._isBrowser) {
          window.removeEventListener("pageshow", this._handlePageShow);
        }
        this.close();
      }
      if (this._isBrowser) {
        window.removeEventListener("online", this._handleOnLine);
      }
      if (this._isBrowser) {
        window.removeEventListener("offline", this._handleOffLine);
      }
    }
    _handlePageShow(t) {
      if (t.persisted) {
        if (
          this._navigatorOnline() &&
          (!this._ws ||
            this._ws.readyState !== this.OPEN ||
            this._ws.readyState !== this.CONNECTING)
        ) {
          this._handleOnLine();
        }
        if (this._isBrowser) {
          window.addEventListener("online", this._handleOnLine.bind(this));
        }
        if (this._isBrowser) {
          window.addEventListener("offline", this._handleOffLine.bind(this));
        }
      }
    }
    _generateUrl(t) {
      return c(this, undefined, undefined, function* () {
        let e;
        let r;
        let o;
        let {
          fpID,
          deviceID,
          bddID,
          ttwID,
          accessKey,
          aID,
          customParams = {},
          enableAutoAck,
          enableQoS,
          env,
        } = this._options;
        if (this._isBrowser || this._isMiniWX || this._isMiniTT) {
          e = location && location.protocol == "https:" ? "wss://" : "ws://";
          r = t.replace(/((^ws)|(^http))((?:[s]*:\/\/))/, "");
          o = /^wss(.*:\/\/)/.test(t) ? t : `${e}${r}`;
        } else {
          e = "wss://";
          r = t.replace(/(^http)((?:[s]*:\/\/))/, "");
          o = /(^ws)((?:[s]*:\/\/))/.test(r) ? r : `${e}${r}`;
        }
        let g = bddID ? "bd_did" : ttwID ? "ttwid" : "device_id";
        let b = bddID || ttwID || deviceID;
        if (!b || !g) {
          throw Error("please provide bddID, deviceID or ttwID");
        }
        let w =
          typeof customParams === "function"
            ? yield customParams()
            : customParams;
        let m = {
          device_platform: "web",
          version_code: "fws_1.0.0",
          access_key: accessKey,
          fpid: fpID,
          aid: aID,
          [g]: b,
          xsack: +!!enableAutoAck,
          xaack: +!!enableAutoAck,
          xsqos: +!!enableQoS,
          ...(env
            ? ((t, e) => {
                switch (t) {
                  case "boe":
                  case "ppe":
                    return {
                      [`x-use-${t}`]: 1,
                      "x-tt-env": e,
                    };
                  default:
                    return {};
                }
              })(env.xUseEnv, env.xTTEnv)
            : {}),
          ...w,
        };
        let h = Object.keys(m).reduce(
          (acc, key) => `${acc}${acc ? "&" : "?"}${key}=${m[key]}`,
          "",
        );
        return `${o}/ws/v2${h}`;
      });
    }
    _connect() {
      let e;
      let r;
      let o;
      let n;
      let i;
      let a;
      let s;
      return c(this, undefined, undefined, function* () {
        if (!this._connectLock && !this._readyClosed) {
          this._connectLock = true;
          try {
            let c;
            let l;
            let d =
              (e = this._endpointManager) == null
                ? undefined
                : e.checkCurrentEndpointReachedMaxRetries();
            let { timeoutInterval } = this._options;
            if (d) {
              let e =
                (r = this._endpointManager) == null
                  ? undefined
                  : r.getCurrentEndpoint();
              let i =
                (o = this._endpointManager) == null
                  ? undefined
                  : o.replaceBackupEndpointAndUpdateCount();
              let a =
                (n = this._endpointManager) == null
                  ? undefined
                  : n.getCurrentEndpointTriesCount();
              if (i) {
                let r = `connect ${e} timeout, max retries reached, will use backup endpoint ${i} to retry`;
                let o = q("error", {
                  message: r,
                  code: t.ErrorCode.MAX_RETRIES_ERROR,
                });
                this._debug(r);
                this._dispatchErrorEvent(o);
                this._url = yield this._generateUrl(i);
                this._debug(`connect ${i} ${a} times`);
                this._removeWsListeners();
              } else {
                let r = `connect ${e} timeout, max retries reached`;
                this._debug(r);
                this._dispatchErrorEvent(
                  q("error", {
                    message: r,
                    code: t.ErrorCode.MAX_RETRIES_ERROR,
                  }),
                );
                return;
              }
            } else {
              let t =
                (i = this._endpointManager) == null
                  ? undefined
                  : i.getCurrentEndpointAndUpdateCount();
              let e =
                (a = this._endpointManager) == null
                  ? undefined
                  : a.getCurrentEndpointTriesCount();
              this._url = yield this._generateUrl(t || "");
              this._debug(`connect ${t} ${e} times`);
              this._removeWsListeners();
            }
            if (this._isInit) {
              this._isInit = false;
            } else {
              let t = J("reconnect", {
                message: "start",
              });
              if (this.onStartReconnect) {
                this.onStartReconnect(t);
              }
            }
            let p =
              ((s = this._endpointManager) == null
                ? undefined
                : s.getCurrentEndpointTriesCount()) || 0;
            if (p > 1) {
              yield this._wait(p - 1);
            }
            this._debug(
              `connecting url: ${this._url} protocols: ${this._protocols}`,
            );
            this._ws =
              ((c = {
                url: this._url,
                protocols: [this._protocols],
                headers: this._options.miniProgramParams.customHttpHeader,
              }),
              (l = this._options.ws)
                ? new l(c.url, c.protocol)
                : Z || Y
                  ? new tr(c.url, c.protocol, c.headers)
                  : (V || K) && typeof WebSocket !== "undefined" && WebSocket
                    ? new WebSocket(c.url, c.protocols)
                    : undefined);
            if ((this._isBrowser || this._isWorker) && this._ws) {
              this._ws.binaryType = this._binaryType;
            }
            this._addWsListeners();
            this._connectionTimeoutId = setTimeout(
              () => this._onTimeout(),
              timeoutInterval,
            );
          } catch (error) {
            this._connectLock = false;
            throw error;
          }
        }
      });
    }
    _clearTimer() {
      clearTimeout(this._connectionTimeoutId);
      clearTimeout(this._uptimeTimeoutId);
      this._connectionTimeoutId = null;
      this._uptimeTimeoutId = null;
    }
    _clearPingTimer() {
      clearTimeout(this._pingPongTimeoutId);
      clearTimeout(this._reconnectTimeoutId);
      this._pingPongTimeoutId = null;
      this._reconnectTimeoutId = null;
    }
    _debug(...t) {
      if (this._options.debug) {
        console.log.apply(console, ["FRONTIER>", ...t]);
      }
    }
    _getIntervalValue(t) {
      let {
        initReconnectInterval,
        maxReconnectInterval,
        reconnectIntervalGrowFactor,
      } = this._options;
      let n = initReconnectInterval * reconnectIntervalGrowFactor ** (t - 1);
      if (n > maxReconnectInterval) {
        return maxReconnectInterval;
      }
      return n;
    }
    _ping() {
      if (this._ws && this._ws.readyState === this.CONNECTING) {
        this._pingPongTimeoutId = setTimeout(
          () => this._ping(),
          this._options.pingInterval,
        );
        return;
      }
      if (this._ws && this._ws.readyState === this.OPEN) {
        if (this._ws) {
          this._ws.send("hi");
        }
        this._reconnectTimeoutId = setTimeout(() => {
          var t;
          var e;
          if ((t = this._pingLossCounter) != null) {
            t.addCount();
          }
          this.emit("ping_once_timeout", "timeout");
          if (
            (e = this._pingLossCounter) == null
              ? undefined
              : e.checkReachMaxCount()
          ) {
            this._handleReconnect();
          } else {
            this._ping();
          }
        }, this._options.pingTimeoutInterval);
      } else {
        this._handleReconnect();
      }
    }
    _navigatorOnline() {
      if (this._isMiniTT || this._isMiniWX) {
        return this._miniNavigatorOnline;
      }
      return (
        (!this._isBrowser && !this._isWorker) ||
        !this._options.listenNetworkChanged ||
        navigator.onLine
      );
    }
    _handleReconnect() {
      let t;
      let e;
      if (this._navigatorOnline() && !this._readyClosed) {
        if ((t = this._endpointManager) != null) {
          t.resetEndpointConfig();
        }
        if ((e = this._pingLossCounter) != null) {
          e.resetCounter();
        }
        if (this._ws) {
          this._disconnect(1001, "going away, try reconnecting server", true);
        } else {
          this._connect();
        }
      }
    }
    _onPageNetWorkChange() {
      if (this._isMiniTT) {
        tt.onNetworkStatusChange(({ isConnected }) => {
          this._miniNavigatorOnline = isConnected;
          if (isConnected) {
            this._handleOnLine();
          } else {
            this._handleOffLine();
          }
        });
      } else if (this._isMiniWX) {
        wx.onNetworkStatusChange(({ isConnected }) => {
          this._miniNavigatorOnline = isConnected;
          if (isConnected) {
            this._handleOnLine();
          } else {
            this._handleOffLine();
          }
        });
      }
    }
    _wait(t) {
      return new Promise((resolve) => {
        setTimeout(resolve, this._getIntervalValue(t));
      });
    }
    _disconnect(t = 1000, e = "", r = false) {
      if (this._ws) {
        this._destroyWebSocket(t, e, r);
      }
    }
    _onTimeout() {
      let t;
      let e =
        (t = this._endpointManager) == null
          ? undefined
          : t.getCurrentEndpoint();
      this._debug(`connect ${e} timeout`);
      this._disconnect(1001, "timeout, try reconnecting", true);
    }
    _sendAck(t) {
      let e = A(t);
      if (this._ws && this._ws.readyState === this.OPEN) {
        if (this._ws) {
          this._ws.send(e);
        }
        this._debug("send_ack", t);
      }
    }
    _removeWsListeners() {
      if (this._ws) {
        this._ws.removeEventListener("open", this._onOpen);
        this._ws.removeEventListener("close", this._onClose);
        this._ws.removeEventListener("message", this._onMessage);
        this._ws.removeEventListener("error", this._onError);
      }
    }
    _addWsListeners() {
      if (this._ws) {
        this._ws.addEventListener("open", this._onOpen);
        this._ws.addEventListener("close", this._onClose);
        this._ws.addEventListener("message", this._onMessage);
        this._ws.addEventListener("error", this._onError);
      }
    }
    _wsInstanceClose(t = 1000, e = "") {
      try {
        if (this._ws) {
          this._ws.close(t, e);
        }
      } catch (t) {}
    }
    _destroyWebSocket(t = 1000, e = "", r = false) {
      let o;
      let n;
      let i;
      let a;
      this._clearPingTimer();
      this._clearTimer();
      this._removeWsListeners();
      this._wsInstanceClose(1000, e);
      this._connectLock = false;
      if (r && this._navigatorOnline() && !this._readyClosed) {
        if (
          (o = this._endpointManager) == null
            ? undefined
            : o.checkReachMaxTries()
        ) {
          let t =
            (n = this._endpointManager) == null
              ? undefined
              : n.getCurrentEndpoint();
          this._dispatchCloseEvent(
            F("close", {
              code: 1006,
              reason: `connect ${t} timeout, max retries reached`,
              wasClean: true,
            }),
          );
        } else {
          let r = this._options.reconnectInterceptor(t, e);
          this._dispatchCloseEvent(
            F("close", {
              code: t,
              reason: e,
              wasClean: true,
              willReconnect: r,
            }),
          );
          if (r) {
            this._connect();
          }
        }
        return;
      }
      if (this._navigatorOnline() || this._readyClosed) {
        this._dispatchCloseEvent(
          F("close", {
            code: t,
            reason: "bye",
          }),
        );
      } else {
        this._dispatchCloseEvent(
          F("close", {
            code: 1006,
            reason: "going away, network offline",
          }),
        );
      }
      this._ws = null;
      if ((i = this._endpointManager) != null) {
        i.resetEndpointConfig();
      }
      if ((a = this._pingLossCounter) != null) {
        a.resetCounter();
      }
    }
    _dispatchOpenEvent(t) {
      this.emit("open", t);
      if (this.onopen) {
        this.onopen(t);
      }
    }
    _dispatchMessageEvent(t) {
      this.emit("message", t);
      if (this.onmessage) {
        this.onmessage(t);
      }
    }
    _dispatchAckMessageEvent(t) {
      this.emit("ack", t);
      if (this.onReceiveAck) {
        this.onReceiveAck(t);
      }
    }
    _dispatchErrorEvent(t) {
      this.emit("error", t);
      if (this.onerror) {
        this.onerror(t);
      }
    }
    _dispatchCloseEvent(t) {
      this.emit("close", t);
      if (this.onclose) {
        this.onclose(t);
      }
    }
    get binaryType() {
      if (this._ws) {
        return this._ws.binaryType;
      }
      return this._binaryType;
    }
    set binaryType(t) {
      this._binaryType = t;
      if (this._ws) {
        this._ws.binaryType = t;
      }
    }
    get retryCount() {
      let t;
      return (
        ((t = this._endpointManager) == null
          ? undefined
          : t.getCurrentEndpointTriesCount()) || 0
      );
    }
    get bufferedAmount() {
      return (
        this._messageQueue.reduce(
          (acc, item) => (acc += (item && item.byteLength) || 0),
          0,
        ) + (this._ws ? this._ws.bufferedAmount : 0)
      );
    }
    get extensions() {
      if (this._ws) {
        return this._ws.extensions;
      }
      return "";
    }
    get protocol() {
      if (this._ws) {
        return this._ws.protocol;
      }
      return "";
    }
    get readyState() {
      if (this._ws) {
        return this._ws.readyState;
      }
      if (this._options.automaticOpen) {
        return this.CONNECTING;
      }
      return this.CLOSED;
    }
    get url() {
      if (this._ws) {
        return this._ws.url;
      }
      return this._url;
    }
    close(t = 1000, e) {
      let r;
      this._readyClosed = true;
      this._clearTimer();
      this._clearPingTimer();
      if ((r = this._qosDB) != null) {
        r.closeDB();
      }
      this._dropGlobalEventListener();
      if (this._ws) {
        if (
          this._ws.readyState === this.CLOSED ||
          this._ws.readyState === this.CLOSING
        ) {
          this._debug("close, ws already closed");
        } else {
          this._destroyWebSocket(t, e);
        }
      } else {
        this._debug("close, ws instance not initialized");
      }
    }
    send(t, e) {
      return c(this, undefined, undefined, function* () {
        if (t == null) {
          throw Error(
            "please provide a valid data, data must be a string or an arraybuffer",
          );
        }
        if (typeof t === "number") {
          t = JSON.stringify(t);
        }
        if (
          !(
            typeof t === "string" ||
            t instanceof ArrayBuffer ||
            (t.buffer && t.buffer instanceof ArrayBuffer)
          )
        ) {
          t = JSON.stringify(t);
        }
        let payload = yield ta(t);
        let o = ((t) => {
          try {
            if (
              typeof t !== "string" &&
              (t instanceof ArrayBuffer ||
                (t.buffer && t.buffer instanceof ArrayBuffer))
            ) {
              return "";
            }
            if (typeof t === "string") {
              JSON.parse(t);
              return "application/json";
            }
            return "";
          } catch (e) {
            if (typeof t === "string") {
              return "text/plain;charset=utf-8";
            }
            return "";
          }
        })(t);
        let {
          method = 0,
          service = this._options.service,
          logID = this._options.logIDGenerator(),
          headers = this._options.headers,
          payloadEncoding = this._options.payloadEncoding,
          payloadType = this._options.payloadType,
          logIDNew = this._options.logIDNewConfig.enableAutoGenerateLogIDNew
            ? ((t = "") => {
                let e;
                let r;
                let o;
                let n;
                let i;
                return (
                  `02${Date.now()}` +
                  (s ||
                    ((e = t),
                    (n =
                      /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/.test(
                        e,
                      )),
                    (i =
                      /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(
                        e,
                      )),
                    (s = n
                      ? ((r = e
                          .split(/\./)
                          .map((t) =>
                            (
                              Array(8).join("0") + parseInt(t, 10).toString(2)
                            ).slice(-8),
                          )),
                        ((o = [])[0] = d(r[0] + r[1])),
                        (o[1] = d(r[2] + r[3])),
                        [
                          "0000",
                          "0000",
                          "0000",
                          "0000",
                          "0000",
                          "ffff",
                          o[0],
                          o[1],
                        ].join(""))
                      : i
                        ? ((t) => {
                            let e = "";
                            let r = [];
                            let o = 0;
                            let n = 0;
                            let i = true;
                            let a = "0000";
                            if (t.indexOf("::") > -1) {
                              let c = t.split("::");
                              for (let t = 0; t < c.length; t++) {
                                let e = c[t];
                                if (e.indexOf(":") > 0) {
                                  let t = e.split(":");
                                  if (i) {
                                    o = t.length;
                                  }
                                  n += t.length;
                                  for (let e = 0; e < t.length; e++) {
                                    if (t[e].length !== 4) {
                                      let o = a
                                        .substring(0, 4 - t[e].length)
                                        .concat(t[e]);
                                      r.push(o);
                                    } else {
                                      r.push(t[e]);
                                    }
                                  }
                                  i = false;
                                } else {
                                  if (e.length !== 4) {
                                    let t = a
                                      .substring(0, 4 - e.length)
                                      .concat(e);
                                    r.push(t);
                                  } else {
                                    r.push(e);
                                  }
                                  if (i) {
                                    o += 1;
                                  }
                                  n += 1;
                                  i = false;
                                }
                              }
                              let s = "";
                              for (let t = 0; t < 8 - n; t++) {
                                s = s.concat(a);
                              }
                              for (let t = 0; t < r.length; t++) {
                                e =
                                  t === o
                                    ? (e = e.concat(s)).concat(r[t])
                                    : e.concat(r[t]);
                              }
                              return e;
                            }
                            {
                              let r = t.split(":");
                              for (let t = 0; t < r.length; t++) {
                                let o = r[t];
                                if (r[t].length !== 4) {
                                  let n = a
                                    .substring(0, 4 - r[t].length)
                                    .concat(o);
                                  e = e.concat(n);
                                } else {
                                  e = e.concat(o);
                                }
                              }
                              return e;
                            }
                          })(e)
                        : "00000000000000000000000000000000"))) +
                  Math.random().toString(16).slice(-6)
                );
              })(this._options.logIDNewConfig.userIp)
            : "",
        } = e || {};
        if (!service) {
          throw Error("please provide a valid service");
        }
        let v = {
          SeqID: G.fromNumber(this._seqId++),
          LogID: G.fromNumber(logID),
          service,
          method,
          headers,
          payloadEncoding:
            payloadEncoding instanceof Object
              ? payloadEncoding.encoding
                ? payloadEncoding.encoding
                : ""
              : payloadEncoding,
          payloadType:
            payloadType instanceof Object
              ? payloadType.type
                ? payloadType.type
                : o
              : payloadType || o,
          payload,
          LogIDNew: logIDNew,
        };
        let g = A(v);
        if (this._ws && this._ws.readyState === this.OPEN) {
          if (this._ws) {
            this._ws.send(g);
          }
          this._debug("sent", v);
        } else if (
          this._messageQueue.length < this._options.maxMessageQueueLength
        ) {
          this._messageQueue.push(g);
          this._debug("enqueue", v);
        } else {
          this._messageQueue.shift();
          this._messageQueue.push(g);
        }
        return {
          seqID: this._seqId,
          logID,
          logIDNew,
        };
      });
    }
    reconnect(t) {
      let e;
      let r;
      return c(this, undefined, undefined, function* () {
        let { url } = t || {};
        let n = Array.isArray(url) ? url : typeof url === "string" ? [url] : [];
        if (t) {
          Object.assign(this._options, t);
        }
        if (n && n.length) {
          this._endpointManager = new W(n, this._options.maxRetries);
        } else if ((e = this._endpointManager) != null) {
          e.resetEndpointConfig();
        }
        if ((r = this._pingLossCounter) != null) {
          r.resetCounter(this._options.pingLossCount);
        }
        this._readyClosed = false;
        if (this._ws && this._ws.readyState !== this.CLOSED) {
          this._disconnect(1000, "manual reconnecting", true);
        } else {
          this._isInit = true;
          this._connect();
        }
      });
    }
    connect() {
      let t;
      let e;
      return c(this, undefined, undefined, function* () {
        if (!this._connectLock) {
          if ((t = this._endpointManager) != null) {
            t.resetEndpointConfig();
          }
          if ((e = this._pingLossCounter) != null) {
            e.resetCounter();
          }
          this._readyClosed = false;
          this._isInit = true;
          this._connect();
        }
      });
    }
    addEventListener(t, e) {
      this.on(t, e);
    }
    dispatchEvent(t) {
      let { type } = t;
      this.emit(type, t);
    }
    removeEventListener(t, e) {
      this.off(t, e);
    }
    pingOnce() {
      return new Promise((resolve, reject) => {
        this._clearPingTimer();
        this._pingPongTimeoutId = setTimeout(
          () => this._ping(),
          this._options.pingInterval,
        );
        let r = () => {
          resolve("success");
          this.off("ping_once_success", r);
          this.off("ping_once_timeout", o);
        };
        let o = () => {
          reject("timeout");
          this.off("ping_once_success", r);
          this.off("ping_once_timeout", o);
        };
        this.on("ping_once_success", r);
        this.on("ping_once_timeout", o);
        this._ping();
      });
    }
  };
  t.FrontierMessageEvent = z;
  t.MessageEvent = U;
  t.OpenEvent = Q;
  t.ReconnectEvent = D;
  t.createCloseEvent = F;
  t.createErrorEvent = q;
  t.createMessageEvent = H;
  t.createOpenEvent = X;
  t.createReconnectEvent = J;
  t.decodedFrame = B;
  t.encodeFrame = A;
  Object.defineProperty(t, "__esModule", {
    value: true,
  });
})(exports);
