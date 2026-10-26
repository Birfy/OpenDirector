import $ from "./module-WO_3_2.js";
import tt from "./module-qs_2_2.js";
import te from "./module-eUY.js";
import tr from "./module-tI.js";
import tn from "./module-E3.js";
import ti from "./module-ai.js";
import to from "./module-N2.js";
import ta from "./module-jND.js";
import { Buffer } from "./module-s6_2_2.js";
export default function (J, Z, Q) {
  let tf;
  const tu = J.padding ? J.padding : Q ? 1 : 4;
  const tc = $(J);
  if (tu === 4) {
    tf = ((J, Z) => {
      const Q = J.modulus.byteLength();
      const Z_length = Z.length;
      const to = te("sha1").update(Buffer.alloc(0)).digest();
      const to_length = to.length;
      const tf = 2 * to_length;
      if (Z_length > Q - tf - 2) {
        throw Error("message too long");
      }
      const tu = Buffer.alloc(Q - Z_length - tf - 2);
      const tc = Q - to_length - 1;
      const th = tt(to_length);
      const td = tn(
        Buffer.concat([to, tu, Buffer.alloc(1, 1), Z], tc),
        tr(th, tc),
      );
      const tl = tn(th, tr(td, to_length));
      return new ti(Buffer.concat([Buffer.alloc(1), tl, td], Q));
    })(tc, Z);
  } else if (tu === 1) {
    tf = ((J, Z, Q) => {
      let $;
      const Z_length = Z.length;
      const tr = J.modulus.byteLength();
      if (Z_length > tr - 11) {
        throw Error("message too long");
      }
      $ = Q
        ? Buffer.alloc(tr - Z_length - 3, 255)
        : ((J) => {
            let Z;
            const Q = Buffer.allocUnsafe(J);
            for (let $ = 0, te = tt(2 * J), tr = 0; $ < J;) {
              if (tr === te.length) {
                te = tt(2 * J);
                tr = 0;
              }
              if ((Z = te[tr++])) {
                Q[$++] = Z;
              }
            }
            return Q;
          })(tr - Z_length - 3);
      return new ti(
        Buffer.concat([Buffer.from([0, Q ? 1 : 2]), $, Buffer.alloc(1), Z], tr),
      );
    })(tc, Z, Q);
  } else if (tu === 3) {
    if ((tf = new ti(Z)).cmp(tc.modulus) >= 0) {
      throw Error("data too long for modulus");
    }
  } else {
    throw Error("unknown padding");
  }
  if (Q) {
    return ta(tf, tc);
  }
  return to(tf, tc);
}
