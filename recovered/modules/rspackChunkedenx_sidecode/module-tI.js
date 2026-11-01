import $ from "./module-eUY.js";
import { Buffer } from "./module-s6_2_2.js";
export default function (J, Z) {
  let Q;
  for (var te = Buffer.alloc(0), tr = 0; te.length < Z;) {
    Q = ((J) => {
      const Z = Buffer.allocUnsafe(4);
      Z.writeUInt32BE(J, 0);
      return Z;
    })(tr++);
    te = Buffer.concat([te, $("sha1").update(J).update(Q).digest()]);
  }
  return te.slice(0, Z);
}
