import { rotl32, split32, sum32, sum32_5, toHex32 } from "./module-IMF.js";
import { BlockHash } from "./module-LVY.js";
import { ft_1 } from "./module-Pe2.js";
const rotl32_1 = rotl32;
const tn = sum32;
const sum32_5_1 = sum32_5;
const ft_1_1 = ft_1;
const BlockHash_1 = BlockHash;
const ts = [1518500249, 1859775393, 2400959708, 3395469782];
class tf extends BlockHash_1 {
  constructor() {
    if (!(this instanceof tf)) {
      return new tf();
    }
    super();
    this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    this.W = Array(80);
  }
  _update(J, Z) {
    const Q = this.W;
    for (var $ = 0; $ < 16; $++) {
      Q[$] = J[Z + $];
    }
    for (; $ < Q.length; $++) {
      Q[$] = rotl32_1(Q[$ - 3] ^ Q[$ - 8] ^ Q[$ - 14] ^ Q[$ - 16], 1);
    }
    let tt = this.h[0];
    let te = this.h[1];
    let ta = this.h[2];
    let tf = this.h[3];
    let tu = this.h[4];
    for ($ = 0; $ < Q.length; $++) {
      const tc = ~~($ / 20);
      const th = sum32_5_1(
        rotl32_1(tt, 5),
        ft_1_1(tc, te, ta, tf),
        tu,
        Q[$],
        ts[tc],
      );
      tu = tf;
      tf = ta;
      ta = rotl32_1(te, 30);
      te = tt;
      tt = th;
    }
    this.h[0] = tn(this.h[0], tt);
    this.h[1] = tn(this.h[1], te);
    this.h[2] = tn(this.h[2], ta);
    this.h[3] = tn(this.h[3], tf);
    this.h[4] = tn(this.h[4], tu);
  }
  _digest(J) {
    if (J === "hex") {
      return toHex32(this.h, "big");
    }
    return split32(this.h, "big");
  }
}
export default tf;
tf.blockSize = 512;
tf.outSize = 160;
tf.hmacStrength = 80;
tf.padLength = 64;
