import { Buffer } from "b58";
const f = Buffer.alloc(16, 0);
function n(t) {
  const e = Buffer.allocUnsafe(16);
  e.writeUInt32BE(t[0] >>> 0, 0);
  e.writeUInt32BE(t[1] >>> 0, 4);
  e.writeUInt32BE(t[2] >>> 0, 8);
  e.writeUInt32BE(t[3] >>> 0, 12);
  return e;
}
class a {
  constructor(t) {
    this.h = t;
    this.state = Buffer.alloc(16, 0);
    this.cache = Buffer.allocUnsafe(0);
  }
  ghash(t) {
    for (let e = -1; ++e < t.length;) {
      this.state[e] ^= t[e];
    }
    this._multiply();
  }
  _multiply() {
    let t;
    let e;
    let r;
    const i = [
      (t = this.h).readUInt32BE(0),
      t.readUInt32BE(4),
      t.readUInt32BE(8),
      t.readUInt32BE(12),
    ];
    const f = [0, 0, 0, 0];
    for (let a = -1; ++a < 128;) {
      if ((this.state[~~(a / 8)] & (1 << (7 - (a % 8)))) != 0) {
        f[0] ^= i[0];
        f[1] ^= i[1];
        f[2] ^= i[2];
        f[3] ^= i[3];
      }
      r = (1 & i[3]) != 0;
      for (e = 3; e > 0; e--) {
        i[e] = (i[e] >>> 1) | ((1 & i[e - 1]) << 31);
      }
      i[0] = i[0] >>> 1;
      if (r) {
        i[0] = -520093696 ^ i[0];
      }
    }
    this.state = n(f);
  }
  update(t) {
    let e;
    for (
      this.cache = Buffer.concat([this.cache, t]);
      this.cache.length >= 16;
    ) {
      e = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      this.ghash(e);
    }
  }
  final(t, e) {
    if (this.cache.length) {
      this.ghash(Buffer.concat([this.cache, f], 16));
    }
    this.ghash(n([0, t, 0, e]));
    return this.state;
  }
}
export default a;
