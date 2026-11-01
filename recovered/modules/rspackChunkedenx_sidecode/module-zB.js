import { Buffer } from "./module-pH.js";
import tt from "./module-qJ_12.js";
export const encrypt = function (J, Z) {
  while (J._cache.length < Z.length) {
    J._cache = Buffer.concat([
      J._cache,
      ((J._prev = J._cipher.encryptBlock(J._prev)), J._prev),
    ]);
  }
  const Q = J._cache.slice(0, Z.length);
  J._cache = J._cache.slice(Z.length);
  return tt(Z, Q);
};
