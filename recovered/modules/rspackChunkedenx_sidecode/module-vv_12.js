import $ from "./module-qJ_12.js";
import { Buffer } from "./module-s6_2_2.js";
import te from "./module-HK_12.js";
export const encrypt = function (J, Z) {
  const Q = Math.ceil(Z.length / 16);
  const length = J._cache.length;
  J._cache = Buffer.concat([J._cache, Buffer.allocUnsafe(16 * Q)]);
  for (let tn = 0; tn < Q; tn++) {
    const ti = ((J) => {
      const Z = J._cipher.encryptBlockRaw(J._prev);
      te(J._prev);
      return Z;
    })(J);
    const to = length + 16 * tn;
    J._cache.writeUInt32BE(ti[0], to + 0);
    J._cache.writeUInt32BE(ti[1], to + 4);
    J._cache.writeUInt32BE(ti[2], to + 8);
    J._cache.writeUInt32BE(ti[3], to + 12);
  }
  const ta = J._cache.slice(0, Z.length);
  J._cache = J._cache.slice(Z.length);
  return $(Z, ta);
};
