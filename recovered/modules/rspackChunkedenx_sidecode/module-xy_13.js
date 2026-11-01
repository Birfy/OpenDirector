import { Buffer } from "./module-s6_2_2.js";
import tt from "./module-qJ_12.js";
function te(J, Z, Q) {
  const Z_length = Z.length;
  const tr = tt(Z, J._cache);
  J._cache = J._cache.slice(Z_length);
  J._prev = Buffer.concat([J._prev, Q ? Z : tr]);
  return tr;
}
export const encrypt = function (J, Z, Q) {
  let tt;
  let tr = Buffer.allocUnsafe(0);
  while (Z.length) {
    if (J._cache.length === 0) {
      J._cache = J._cipher.encryptBlock(J._prev);
      J._prev = Buffer.allocUnsafe(0);
    }
    if (J._cache.length <= Z.length) {
      tt = J._cache.length;
      tr = Buffer.concat([tr, te(J, Z.slice(0, tt), Q)]);
      Z = Z.slice(tt);
    } else {
      tr = Buffer.concat([tr, te(J, Z, Q)]);
      break;
    }
  }
  return tr;
};
