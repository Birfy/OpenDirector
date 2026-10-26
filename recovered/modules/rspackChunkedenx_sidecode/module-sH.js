import $ from "./module-WO_3_2.js";
import tt from "./module-tI.js";
import te from "./module-E3.js";
import tr from "./module-ai.js";
import tn from "./module-jND.js";
import ti from "./module-eUY.js";
import to from "./module-N2.js";
import { Buffer } from "./module-s6_2_2.js";
export default function (J, Z, Q) {
  let ts;
  const tf = J.padding ? J.padding : Q ? 1 : 4;
  const tu = $(J);
  const tc = tu.modulus.byteLength();
  if (Z.length > tc || new tr(Z).cmp(tu.modulus) >= 0) {
    throw Error("decryption error");
  }
  ts = Q ? to(new tr(Z), tu) : tn(Z, tu);
  const th = Buffer.alloc(tc - ts.length);
  ts = Buffer.concat([th, ts], tc);
  if (tf === 4) {
    return ((J, Z) => {
      const Q = J.modulus.byteLength();
      const $ = ti("sha1").update(Buffer.alloc(0)).digest();
      const $_length = $.length;
      if (Z[0] !== 0) {
        throw Error("decryption error");
      }
      const tn = Z.slice(1, $_length + 1);
      const to = Z.slice($_length + 1);
      const ts = te(tn, tt(to, $_length));
      const tf = te(to, tt(ts, Q - $_length - 1));
      if (
        ((J, Z) => {
          J = Buffer.from(J);
          Z = Buffer.from(Z);
          let Q = 0;
          let J_length = J.length;
          if (J.length !== Z.length) {
            Q++;
            J_length = Math.min(J.length, Z.length);
          }
          for (let tt = -1; ++tt < J_length;) {
            Q += J[tt] ^ Z[tt];
          }
          return Q;
        })($, tf.slice(0, $_length))
      ) {
        throw Error("decryption error");
      }
      for (var tu = $_length; tf[tu] === 0;) {
        tu++;
      }
      if (tf[tu++] !== 1) {
        throw Error("decryption error");
      }
      return tf.slice(tu);
    })(tu, ts);
  }
  if (tf === 1) {
    for (
      var td = ts, tl = Q, tp = td.slice(0, 2), tb = 2, tv = 0;
      td[tb++] !== 0;
    ) {
      if (tb >= td.length) {
        tv++;
        break;
      }
    }
    const tg = td.slice(2, tb - 1);
    if (
      (tp.toString("hex") !== "0002" && !tl) ||
      (tp.toString("hex") !== "0001" && tl)
    ) {
      tv++;
    }
    if (tg.length < 8) {
      tv++;
    }
    if (tv) {
      throw Error("decryption error");
    }
    return td.slice(tb);
  }
  if (tf === 3) {
    return ts;
  }
  throw Error("unknown padding");
}
