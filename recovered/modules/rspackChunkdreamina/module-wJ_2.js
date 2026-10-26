import { rotl32, split32, sum32, sum32_5, toHex32 } from "./module-ial.js";
import { BlockHash } from "./module-kZ.js";
import { ft_1 } from "./module-XbI.js";
const rotl32_1 = rotl32;
const s = sum32;
const sum32_5_1 = sum32_5;
const ft_1_1 = ft_1;
const BlockHash_1 = BlockHash;
const c = [1518500249, 1859775393, 2400959708, 3395469782];
class u extends BlockHash_1 {
  constructor() {
    if (!(this instanceof u)) {
      return new u();
    }
    super();
    this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    this.W = Array(80);
  }
  _update(t, e) {
    const r = this.W;
    for (var i = 0; i < 16; i++) {
      r[i] = t[e + i];
    }
    for (; i < r.length; i++) {
      r[i] = rotl32_1(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
    }
    let f = this.h[0];
    let n = this.h[1];
    let d = this.h[2];
    let u = this.h[3];
    let l = this.h[4];
    for (i = 0; i < r.length; i++) {
      const b = ~~(i / 20);
      const p = sum32_5_1(rotl32_1(f, 5), ft_1_1(b, n, d, u), l, r[i], c[b]);
      l = u;
      u = d;
      d = rotl32_1(n, 30);
      n = f;
      f = p;
    }
    this.h[0] = s(this.h[0], f);
    this.h[1] = s(this.h[1], n);
    this.h[2] = s(this.h[2], d);
    this.h[3] = s(this.h[3], u);
    this.h[4] = s(this.h[4], l);
  }
  _digest(t) {
    if (t === "hex") {
      return toHex32(this.h, "big");
    }
    return split32(this.h, "big");
  }
}
export default u;
u.blockSize = 512;
u.outSize = 160;
u.hmacStrength = 80;
u.padLength = 64;
