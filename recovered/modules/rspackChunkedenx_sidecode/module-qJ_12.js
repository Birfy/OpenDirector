import { Buffer } from "./module-pH.js";
export default function (J, Z) {
  for (
    var Q = Math.min(J.length, Z.length), tt = new Buffer(Q), te = 0;
    te < Q;
    ++te
  ) {
    tt[te] = J[te] ^ Z[te];
  }
  return tt;
}
