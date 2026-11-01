import { Buffer } from "./module-s6_2_2.js";
export const encrypt = function (J, Z, Q) {
  for (var tt = Z.length, te = Buffer.allocUnsafe(tt), tr = -1; ++tr < tt;) {
    te[tr] = ((J, Z, Q) => {
      const tt = J._cipher.encryptBlock(J._prev)[0] ^ Z;
      J._prev = Buffer.concat([J._prev.slice(1), Buffer.from([Q ? Z : tt])]);
      return tt;
    })(J, Z[tr], Q);
  }
  return te;
};
