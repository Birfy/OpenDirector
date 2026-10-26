import { split32, toHex32 } from "./module-IMF.js";
import tt from "./module-ifQ.js";
class te extends tt {
  constructor() {
    if (!(this instanceof te)) {
      return new te();
    }
    super();
    this.h = [
      3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
      355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
      3675008525, 1694076839, 1203062813, 3204075428,
    ];
  }
  _digest(J) {
    if (J === "hex") {
      return toHex32(this.h.slice(0, 12), "big");
    }
    return split32(this.h.slice(0, 12), "big");
  }
}
export default te;
te.blockSize = 1024;
te.outSize = 384;
te.hmacStrength = 192;
te.padLength = 128;
