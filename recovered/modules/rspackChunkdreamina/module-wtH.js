import $ from "./module-Of_2.js";
import ee from "./module-Wt.js";
import et from "io";
import er from "./module-Za.js";
import en from "./module-D9.js";
import ei from "cGB";
import ea from "./module-vQ0.js";
import eo from "Et";
import { Buffer } from "./module-b58.js";
export default function (Z, Q, X) {
  let ef;
  const eu = Z.padding ? Z.padding : X ? 1 : 4;
  const ec = $(Z);
  if (eu === 4) {
    ef = ((Z, Q) => {
      const X = Z.modulus.byteLength();
      const Q_length = Q.length;
      const ea = et("sha1").update(Buffer.alloc(0)).digest();
      const ea_length = ea.length;
      const ef = 2 * ea_length;
      if (Q_length > X - ef - 2) {
        throw Error("message too long");
      }
      const eu = Buffer.alloc(X - Q_length - ef - 2);
      const ec = X - ea_length - 1;
      const eh = ee(ea_length);
      const el = en(
        Buffer.concat([ea, eu, Buffer.alloc(1, 1), Q], ec),
        er(eh, ec),
      );
      const ed = en(eh, er(el, ea_length));
      return new ei(Buffer.concat([Buffer.alloc(1), ed, el], X));
    })(ec, Q);
  } else if (eu === 1) {
    ef = ((Z, Q, X) => {
      let $;
      const Q_length = Q.length;
      const er = Z.modulus.byteLength();
      if (Q_length > er - 11) {
        throw Error("message too long");
      }
      $ = X
        ? Buffer.alloc(er - Q_length - 3, 255)
        : ((Z) => {
            let Q;
            const X = Buffer.allocUnsafe(Z);
            for (let $ = 0, et = ee(2 * Z), er = 0; $ < Z;) {
              if (er === et.length) {
                et = ee(2 * Z);
                er = 0;
              }
              if ((Q = et[er++])) {
                X[$++] = Q;
              }
            }
            return X;
          })(er - Q_length - 3);
      return new ei(
        Buffer.concat([Buffer.from([0, X ? 1 : 2]), $, Buffer.alloc(1), Q], er),
      );
    })(ec, Q, X);
  } else if (eu === 3) {
    if ((ef = new ei(Q)).cmp(ec.modulus) >= 0) {
      throw Error("data too long for modulus");
    }
  } else {
    throw Error("unknown padding");
  }
  if (X) {
    return eo(ef, ec);
  }
  return ea(ef, ec);
}
