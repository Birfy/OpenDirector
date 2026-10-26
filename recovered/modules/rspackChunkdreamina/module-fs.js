import { split32, toHex32 } from "./module-ial.js";
import f from "./module-wT4.js";
class n extends f {
  constructor() {
    if (!(this instanceof n)) {
      return new n();
    }
    super();
    this.h = [
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ];
  }
  _digest(t) {
    if (t === "hex") {
      return toHex32(this.h.slice(0, 7), "big");
    }
    return split32(this.h.slice(0, 7), "big");
  }
}
export default n;
n.blockSize = 512;
n.outSize = 224;
n.hmacStrength = 192;
n.padLength = 64;
