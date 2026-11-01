import { Buffer } from "./module-s6_2_2.js";
const tt = Buffer.alloc(16, 0);
function te(J) {
  const Z = Buffer.allocUnsafe(16);
  Z.writeUInt32BE(J[0] >>> 0, 0);
  Z.writeUInt32BE(J[1] >>> 0, 4);
  Z.writeUInt32BE(J[2] >>> 0, 8);
  Z.writeUInt32BE(J[3] >>> 0, 12);
  return Z;
}
class tr {
  constructor(J) {
    this.h = J;
    this.state = Buffer.alloc(16, 0);
    this.cache = Buffer.allocUnsafe(0);
  }
  ghash(J) {
    for (let Z = -1; ++Z < J.length;) {
      this.state[Z] ^= J[Z];
    }
    this._multiply();
  }
  _multiply() {
    let J;
    let Z;
    let Q;
    const $ = [
      (J = this.h).readUInt32BE(0),
      J.readUInt32BE(4),
      J.readUInt32BE(8),
      J.readUInt32BE(12),
    ];
    const tt = [0, 0, 0, 0];
    for (let tr = -1; ++tr < 128;) {
      if ((this.state[~~(tr / 8)] & (1 << (7 - (tr % 8)))) != 0) {
        tt[0] ^= $[0];
        tt[1] ^= $[1];
        tt[2] ^= $[2];
        tt[3] ^= $[3];
      }
      Q = (1 & $[3]) != 0;
      for (Z = 3; Z > 0; Z--) {
        $[Z] = ($[Z] >>> 1) | ((1 & $[Z - 1]) << 31);
      }
      $[0] = $[0] >>> 1;
      if (Q) {
        $[0] = -520093696 ^ $[0];
      }
    }
    this.state = te(tt);
  }
  update(J) {
    let Z;
    for (
      this.cache = Buffer.concat([this.cache, J]);
      this.cache.length >= 16;
    ) {
      Z = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      this.ghash(Z);
    }
  }
  final(J, Z) {
    if (this.cache.length) {
      this.ghash(Buffer.concat([this.cache, tt], 16));
    }
    this.ghash(te([0, J, 0, Z]));
    return this.state;
  }
}
export default tr;
