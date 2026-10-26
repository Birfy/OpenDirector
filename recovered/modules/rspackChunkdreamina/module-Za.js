import $ from "io";
import { Buffer } from "./module-b58.js";
export default function (Z, Q) {
  let X;
  for (var et = Buffer.alloc(0), er = 0; et.length < Q;) {
    X = ((Z) => {
      const Q = Buffer.allocUnsafe(4);
      Q.writeUInt32BE(Z, 0);
      return Q;
    })(er++);
    et = Buffer.concat([et, $("sha1").update(Z).update(X).digest()]);
  }
  return et.slice(0, Q);
}
