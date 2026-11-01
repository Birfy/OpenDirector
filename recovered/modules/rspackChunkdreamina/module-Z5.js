import $ from "./module-Of_2.js";
import ee from "./module-Za.js";
import et from "./module-D9.js";
import er from "cGB";
import en from "Et";
import ei from "io";
import ea from "./module-vQ0.js";
import { Buffer } from "./module-b58.js";
export default function (Z, Q, X) {
  let es;
  const ef = Z.padding ? Z.padding : X ? 1 : 4;
  const eu = $(Z);
  const ec = eu.modulus.byteLength();
  if (Q.length > ec || new er(Q).cmp(eu.modulus) >= 0) {
    throw Error("decryption error");
  }
  es = X ? ea(new er(Q), eu) : en(Q, eu);
  const eh = Buffer.alloc(ec - es.length);
  es = Buffer.concat([eh, es], ec);
  if (ef === 4) {
    return ((Z, Q) => {
      const X = Z.modulus.byteLength();
      const $ = ei("sha1").update(Buffer.alloc(0)).digest();
      const $_length = $.length;
      if (Q[0] !== 0) {
        throw Error("decryption error");
      }
      const en = Q.slice(1, $_length + 1);
      const ea = Q.slice($_length + 1);
      const es = et(en, ee(ea, $_length));
      const ef = et(ea, ee(es, X - $_length - 1));
      if (
        ((Z, Q) => {
          Z = Buffer.from(Z);
          Q = Buffer.from(Q);
          let X = 0;
          let Z_length = Z.length;
          if (Z.length !== Q.length) {
            X++;
            Z_length = Math.min(Z.length, Q.length);
          }
          for (let ee = -1; ++ee < Z_length;) {
            X += Z[ee] ^ Q[ee];
          }
          return X;
        })($, ef.slice(0, $_length))
      ) {
        throw Error("decryption error");
      }
      for (var eu = $_length; ef[eu] === 0;) {
        eu++;
      }
      if (ef[eu++] !== 1) {
        throw Error("decryption error");
      }
      return ef.slice(eu);
    })(eu, es);
  }
  if (ef === 1) {
    for (
      var el = es, ed = X, ep = el.slice(0, 2), eb = 2, eg = 0;
      el[eb++] !== 0;
    ) {
      if (eb >= el.length) {
        eg++;
        break;
      }
    }
    const ey = el.slice(2, eb - 1);
    if (
      (ep.toString("hex") !== "0002" && !ed) ||
      (ep.toString("hex") !== "0001" && ed)
    ) {
      eg++;
    }
    if (ey.length < 8) {
      eg++;
    }
    if (eg) {
      throw Error("decryption error");
    }
    return el.slice(eb);
  }
  if (ef === 3) {
    return es;
  }
  throw Error("unknown padding");
}
