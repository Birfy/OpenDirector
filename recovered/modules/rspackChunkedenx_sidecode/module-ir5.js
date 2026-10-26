import { split32, toHex32 } from "./module-IMF.js";
import tt from "./module-ZXv.js";
class te extends tt {
  constructor() {
    if (!(this instanceof te)) {
      return new te();
    }
    super();
    this.h = [
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ];
  }
  _digest(J) {
    if (J === "hex") {
      return toHex32(this.h.slice(0, 7), "big");
    }
    return split32(this.h.slice(0, 7), "big");
  }
}
export default te;
te.blockSize = 512;
te.outSize = 224;
te.hmacStrength = 192;
te.padLength = 64;
