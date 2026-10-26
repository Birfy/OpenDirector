import { Buffer } from "b58";
function f(t) {
  if (!Buffer.isBuffer(t)) {
    t = Buffer.from(t);
  }
  for (var e = (t.length / 4) | 0, r = Array(e), f = 0; f < e; f++) {
    r[f] = t.readUInt32BE(4 * f);
  }
  return r;
}
function n(t) {
  for (; t.length > 0; t++) {
    t[0] = 0;
  }
}
function a(t, e, r, i, _nRounds) {
  let n;
  let a;
  let s;
  let o;
  const h = r[0];
  const d = r[1];
  const c = r[2];
  const u = r[3];
  let l = t[0] ^ e[0];
  let b = t[1] ^ e[1];
  let p = t[2] ^ e[2];
  let m = t[3] ^ e[3];
  let v = 4;
  for (let g = 1; g < _nRounds; g++) {
    n =
      h[l >>> 24] ^
      d[(b >>> 16) & 255] ^
      c[(p >>> 8) & 255] ^
      u[255 & m] ^
      e[v++];
    a =
      h[b >>> 24] ^
      d[(p >>> 16) & 255] ^
      c[(m >>> 8) & 255] ^
      u[255 & l] ^
      e[v++];
    s =
      h[p >>> 24] ^
      d[(m >>> 16) & 255] ^
      c[(l >>> 8) & 255] ^
      u[255 & b] ^
      e[v++];
    o =
      h[m >>> 24] ^
      d[(l >>> 16) & 255] ^
      c[(b >>> 8) & 255] ^
      u[255 & p] ^
      e[v++];
    l = n;
    b = a;
    p = s;
    m = o;
  }
  n =
    ((i[l >>> 24] << 24) |
      (i[(b >>> 16) & 255] << 16) |
      (i[(p >>> 8) & 255] << 8) |
      i[255 & m]) ^
    e[v++];
  a =
    ((i[b >>> 24] << 24) |
      (i[(p >>> 16) & 255] << 16) |
      (i[(m >>> 8) & 255] << 8) |
      i[255 & l]) ^
    e[v++];
  s =
    ((i[p >>> 24] << 24) |
      (i[(m >>> 16) & 255] << 16) |
      (i[(l >>> 8) & 255] << 8) |
      i[255 & b]) ^
    e[v++];
  return [
    (n >>>= 0),
    (a >>>= 0),
    (s >>>= 0),
    (o =
      (((i[m >>> 24] << 24) |
        (i[(l >>> 16) & 255] << 16) |
        (i[(b >>> 8) & 255] << 8) |
        i[255 & p]) ^
        e[v++]) >>>
      0),
  ];
}
const s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
const o = (() => {
  const t = Array(256);
  for (let e = 0; e < 256; e++) {
    if (e < 128) {
      t[e] = e << 1;
    } else {
      t[e] = (e << 1) ^ 283;
    }
  }
  const SBOX = [];
  const INV_SBOX = [];
  const SUB_MIX = [[], [], [], []];
  const INV_SUB_MIX = [[], [], [], []];
  let a = 0;
  let s = 0;
  for (let o = 0; o < 256; ++o) {
    let h = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4);
    h = (h >>> 8) ^ (255 & h) ^ 99;
    SBOX[a] = h;
    INV_SBOX[h] = a;
    const d = t[a];
    const c = t[d];
    const u = t[c];
    let l = (257 * t[h]) ^ (16843008 * h);
    SUB_MIX[0][a] = (l << 24) | (l >>> 8);
    SUB_MIX[1][a] = (l << 16) | (l >>> 16);
    SUB_MIX[2][a] = (l << 8) | (l >>> 24);
    SUB_MIX[3][a] = l;
    l = (16843009 * u) ^ (65537 * c) ^ (257 * d) ^ (16843008 * a);
    INV_SUB_MIX[0][h] = (l << 24) | (l >>> 8);
    INV_SUB_MIX[1][h] = (l << 16) | (l >>> 16);
    INV_SUB_MIX[2][h] = (l << 8) | (l >>> 24);
    INV_SUB_MIX[3][h] = l;
    if (a === 0) {
      s = 1;
      a = 1;
    } else {
      a = d ^ t[t[t[u ^ d]]];
      s ^= t[t[s]];
    }
  }
  return {
    SBOX,
    INV_SBOX,
    SUB_MIX,
    INV_SUB_MIX,
  };
})();
export class AES {
  constructor(t) {
    this._key = f(t);
    this._reset();
  }
  _reset() {
    const _key = this._key;
    for (
      var e = _key.length, r = e + 6, i = (r + 1) * 4, f = [], n = 0;
      n < e;
      n++
    ) {
      f[n] = _key[n];
    }
    for (n = e; n < i; n++) {
      let a = f[n - 1];
      if (n % e == 0) {
        a = (a << 8) | (a >>> 24);
        a =
          ((o.SBOX[a >>> 24] << 24) |
            (o.SBOX[(a >>> 16) & 255] << 16) |
            (o.SBOX[(a >>> 8) & 255] << 8) |
            o.SBOX[255 & a]) ^
          (s[(n / e) | 0] << 24);
      } else if (e > 6 && n % e == 4) {
        a =
          (o.SBOX[a >>> 24] << 24) |
          (o.SBOX[(a >>> 16) & 255] << 16) |
          (o.SBOX[(a >>> 8) & 255] << 8) |
          o.SBOX[255 & a];
      }
      f[n] = f[n - e] ^ a;
    }
    const h = [];
    for (let d = 0; d < i; d++) {
      const c = i - d;
      const u = f[c - (d % 4 ? 0 : 4)];
      if (d < 4 || c <= 4) {
        h[d] = u;
      } else {
        h[d] =
          o.INV_SUB_MIX[0][o.SBOX[u >>> 24]] ^
          o.INV_SUB_MIX[1][o.SBOX[(u >>> 16) & 255]] ^
          o.INV_SUB_MIX[2][o.SBOX[(u >>> 8) & 255]] ^
          o.INV_SUB_MIX[3][o.SBOX[255 & u]];
      }
    }
    this._nRounds = r;
    this._keySchedule = f;
    this._invKeySchedule = h;
  }
  encryptBlockRaw(t) {
    return a((t = f(t)), this._keySchedule, o.SUB_MIX, o.SBOX, this._nRounds);
  }
  encryptBlock(t) {
    const e = this.encryptBlockRaw(t);
    const r = Buffer.allocUnsafe(16);
    r.writeUInt32BE(e[0], 0);
    r.writeUInt32BE(e[1], 4);
    r.writeUInt32BE(e[2], 8);
    r.writeUInt32BE(e[3], 12);
    return r;
  }
  decryptBlock(t) {
    const e = (t = f(t))[1];
    t[1] = t[3];
    t[3] = e;
    const r = a(
      t,
      this._invKeySchedule,
      o.INV_SUB_MIX,
      o.INV_SBOX,
      this._nRounds,
    );
    const n = Buffer.allocUnsafe(16);
    n.writeUInt32BE(r[0], 0);
    n.writeUInt32BE(r[3], 4);
    n.writeUInt32BE(r[2], 8);
    n.writeUInt32BE(r[1], 12);
    return n;
  }
  scrub() {
    n(this._keySchedule);
    n(this._invKeySchedule);
    n(this._key);
  }
}
AES.blockSize = 16;
AES.keySize = 32;
AES.prototype.blockSize = AES.blockSize;
AES.prototype.keySize = AES.keySize;
