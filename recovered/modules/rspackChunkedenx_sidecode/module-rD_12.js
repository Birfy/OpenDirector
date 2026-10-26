import { Buffer } from "./module-s6_2_2.js";
function tt(J) {
  if (!Buffer.isBuffer(J)) {
    J = Buffer.from(J);
  }
  for (var Z = (J.length / 4) | 0, Q = Array(Z), tt = 0; tt < Z; tt++) {
    Q[tt] = J.readUInt32BE(4 * tt);
  }
  return Q;
}
function te(J) {
  for (; J.length > 0; J++) {
    J[0] = 0;
  }
}
function tr(J, Z, Q, $, _nRounds) {
  let te;
  let tr;
  let tn;
  let ti;
  const to = Q[0];
  const ta = Q[1];
  const ts = Q[2];
  const tf = Q[3];
  let tu = J[0] ^ Z[0];
  let tc = J[1] ^ Z[1];
  let th = J[2] ^ Z[2];
  let td = J[3] ^ Z[3];
  let tl = 4;
  for (let tp = 1; tp < _nRounds; tp++) {
    te =
      to[tu >>> 24] ^
      ta[(tc >>> 16) & 255] ^
      ts[(th >>> 8) & 255] ^
      tf[255 & td] ^
      Z[tl++];
    tr =
      to[tc >>> 24] ^
      ta[(th >>> 16) & 255] ^
      ts[(td >>> 8) & 255] ^
      tf[255 & tu] ^
      Z[tl++];
    tn =
      to[th >>> 24] ^
      ta[(td >>> 16) & 255] ^
      ts[(tu >>> 8) & 255] ^
      tf[255 & tc] ^
      Z[tl++];
    ti =
      to[td >>> 24] ^
      ta[(tu >>> 16) & 255] ^
      ts[(tc >>> 8) & 255] ^
      tf[255 & th] ^
      Z[tl++];
    tu = te;
    tc = tr;
    th = tn;
    td = ti;
  }
  te =
    (($[tu >>> 24] << 24) |
      ($[(tc >>> 16) & 255] << 16) |
      ($[(th >>> 8) & 255] << 8) |
      $[255 & td]) ^
    Z[tl++];
  tr =
    (($[tc >>> 24] << 24) |
      ($[(th >>> 16) & 255] << 16) |
      ($[(td >>> 8) & 255] << 8) |
      $[255 & tu]) ^
    Z[tl++];
  tn =
    (($[th >>> 24] << 24) |
      ($[(td >>> 16) & 255] << 16) |
      ($[(tu >>> 8) & 255] << 8) |
      $[255 & tc]) ^
    Z[tl++];
  return [
    (te >>>= 0),
    (tr >>>= 0),
    (tn >>>= 0),
    (ti =
      ((($[td >>> 24] << 24) |
        ($[(tu >>> 16) & 255] << 16) |
        ($[(tc >>> 8) & 255] << 8) |
        $[255 & th]) ^
        Z[tl++]) >>>
      0),
  ];
}
const tn = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
const ti = (() => {
  const J = Array(256);
  for (let Z = 0; Z < 256; Z++) {
    if (Z < 128) {
      J[Z] = Z << 1;
    } else {
      J[Z] = (Z << 1) ^ 283;
    }
  }
  const SBOX = [];
  const INV_SBOX = [];
  const SUB_MIX = [[], [], [], []];
  const INV_SUB_MIX = [[], [], [], []];
  let tr = 0;
  let tn = 0;
  for (let ti = 0; ti < 256; ++ti) {
    let to = tn ^ (tn << 1) ^ (tn << 2) ^ (tn << 3) ^ (tn << 4);
    to = (to >>> 8) ^ (255 & to) ^ 99;
    SBOX[tr] = to;
    INV_SBOX[to] = tr;
    const ta = J[tr];
    const ts = J[ta];
    const tf = J[ts];
    let tu = (257 * J[to]) ^ (16843008 * to);
    SUB_MIX[0][tr] = (tu << 24) | (tu >>> 8);
    SUB_MIX[1][tr] = (tu << 16) | (tu >>> 16);
    SUB_MIX[2][tr] = (tu << 8) | (tu >>> 24);
    SUB_MIX[3][tr] = tu;
    tu = (16843009 * tf) ^ (65537 * ts) ^ (257 * ta) ^ (16843008 * tr);
    INV_SUB_MIX[0][to] = (tu << 24) | (tu >>> 8);
    INV_SUB_MIX[1][to] = (tu << 16) | (tu >>> 16);
    INV_SUB_MIX[2][to] = (tu << 8) | (tu >>> 24);
    INV_SUB_MIX[3][to] = tu;
    if (tr === 0) {
      tn = 1;
      tr = 1;
    } else {
      tr = ta ^ J[J[J[tf ^ ta]]];
      tn ^= J[J[tn]];
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
  constructor(J) {
    this._key = tt(J);
    this._reset();
  }
  _reset() {
    const _key = this._key;
    for (
      var Z = _key.length, Q = Z + 6, $ = (Q + 1) * 4, tt = [], te = 0;
      te < Z;
      te++
    ) {
      tt[te] = _key[te];
    }
    for (te = Z; te < $; te++) {
      let tr = tt[te - 1];
      if (te % Z == 0) {
        tr = (tr << 8) | (tr >>> 24);
        tr =
          ((ti.SBOX[tr >>> 24] << 24) |
            (ti.SBOX[(tr >>> 16) & 255] << 16) |
            (ti.SBOX[(tr >>> 8) & 255] << 8) |
            ti.SBOX[255 & tr]) ^
          (tn[(te / Z) | 0] << 24);
      } else if (Z > 6 && te % Z == 4) {
        tr =
          (ti.SBOX[tr >>> 24] << 24) |
          (ti.SBOX[(tr >>> 16) & 255] << 16) |
          (ti.SBOX[(tr >>> 8) & 255] << 8) |
          ti.SBOX[255 & tr];
      }
      tt[te] = tt[te - Z] ^ tr;
    }
    const to = [];
    for (let ta = 0; ta < $; ta++) {
      const ts = $ - ta;
      const tf = tt[ts - (ta % 4 ? 0 : 4)];
      if (ta < 4 || ts <= 4) {
        to[ta] = tf;
      } else {
        to[ta] =
          ti.INV_SUB_MIX[0][ti.SBOX[tf >>> 24]] ^
          ti.INV_SUB_MIX[1][ti.SBOX[(tf >>> 16) & 255]] ^
          ti.INV_SUB_MIX[2][ti.SBOX[(tf >>> 8) & 255]] ^
          ti.INV_SUB_MIX[3][ti.SBOX[255 & tf]];
      }
    }
    this._nRounds = Q;
    this._keySchedule = tt;
    this._invKeySchedule = to;
  }
  encryptBlockRaw(J) {
    return tr(
      (J = tt(J)),
      this._keySchedule,
      ti.SUB_MIX,
      ti.SBOX,
      this._nRounds,
    );
  }
  encryptBlock(J) {
    const Z = this.encryptBlockRaw(J);
    const Q = Buffer.allocUnsafe(16);
    Q.writeUInt32BE(Z[0], 0);
    Q.writeUInt32BE(Z[1], 4);
    Q.writeUInt32BE(Z[2], 8);
    Q.writeUInt32BE(Z[3], 12);
    return Q;
  }
  decryptBlock(J) {
    const Z = (J = tt(J))[1];
    J[1] = J[3];
    J[3] = Z;
    const Q = tr(
      J,
      this._invKeySchedule,
      ti.INV_SUB_MIX,
      ti.INV_SBOX,
      this._nRounds,
    );
    const te = Buffer.allocUnsafe(16);
    te.writeUInt32BE(Q[0], 0);
    te.writeUInt32BE(Q[3], 4);
    te.writeUInt32BE(Q[2], 8);
    te.writeUInt32BE(Q[1], 12);
    return te;
  }
  scrub() {
    te(this._keySchedule);
    te(this._invKeySchedule);
    te(this._key);
  }
}
AES.blockSize = 16;
AES.keySize = 32;
AES.prototype.blockSize = AES.blockSize;
AES.prototype.keySize = AES.keySize;
