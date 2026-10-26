import { Buffer } from "./module-s6_2_2.js";
export const encrypt = function (J, Z, Q) {
  for (var tt = Z.length, te = Buffer.allocUnsafe(tt), tr = -1; ++tr < tt;) {
    te[tr] = ((J, Z, Q) => {
      let tt;
      let te;
      let tr;
      for (var tn = -1, ti = 0; ++tn < 8;) {
        tt = J._cipher.encryptBlock(J._prev);
        te = Z & (1 << (7 - tn)) ? 128 : 0;
        ti += (128 & (tr = tt[0] ^ te)) >> (tn % 8);
        J._prev = ((J, Z) => {
          const J_length = J.length;
          let tt = -1;
          const te = Buffer.allocUnsafe(J.length);
          for (J = Buffer.concat([J, Buffer.from([Z])]); ++tt < J_length;) {
            te[tt] = (J[tt] << 1) | (J[tt + 1] >> 7);
          }
          return te;
        })(J._prev, Q ? te : tr);
      }
      return ti;
    })(J, Z[tr], Q);
  }
  return te;
};
