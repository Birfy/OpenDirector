import $ from "./module-Ul_2_2.js";
import tt from "./module-mu_2_2.js";
import te from "./module-ux.js";
import { Buffer } from "./module-s6_2_2.js";
import tn from "./module-qU.js";
import ti from "./module-CO.js";
import to from "./module-Qv_3_2.js";
const ta = Buffer.alloc(128);
const ts = {
  md5: 16,
  sha1: 20,
  sha224: 28,
  sha256: 32,
  sha384: 48,
  sha512: 64,
  rmd160: 20,
  ripemd160: 20,
};
class tf {
  constructor(J, Z, Q) {
    let tn;
    const ti =
      (tn = J) === "rmd160" || tn === "ripemd160"
        ? function (J) {
            return new tt().update(J).digest();
          }
        : tn === "md5"
          ? $
          : function (J) {
              return te(tn).update(J).digest();
            };
    const to = J === "sha512" || J === "sha384" ? 128 : 64;
    if (Z.length > to) {
      Z = ti(Z);
    } else if (Z.length < to) {
      Z = Buffer.concat([Z, ta], to);
    }
    const tf = Buffer.allocUnsafe(to + ts[J]);
    const tu = Buffer.allocUnsafe(to + ts[J]);
    for (let tc = 0; tc < to; tc++) {
      tf[tc] = 54 ^ Z[tc];
      tu[tc] = 92 ^ Z[tc];
    }
    const th = Buffer.allocUnsafe(to + Q + 4);
    tf.copy(th, 0, 0, to);
    this.ipad1 = th;
    this.ipad2 = tf;
    this.opad = tu;
    this.alg = J;
    this.blocksize = to;
    this.hash = ti;
    this.size = ts[J];
  }
  run(J, Z) {
    J.copy(Z, this.blocksize);
    this.hash(Z).copy(this.opad, this.blocksize);
    return this.hash(this.opad);
  }
}
export default function (J, Z, Q, $, tt) {
  tn(Q, $);
  J = to(J, ti, "Password");
  const te = new tf((tt = tt || "sha1"), J, (Z = to(Z, ti, "Salt")).length);
  const ta = Buffer.allocUnsafe($);
  const tu = Buffer.allocUnsafe(Z.length + 4);
  Z.copy(tu, 0, 0, Z.length);
  let tc = 0;
  const th = ts[tt];
  for (let td = Math.ceil($ / th), tl = 1; tl <= td; tl++) {
    tu.writeUInt32BE(tl, Z.length);
    const tp = te.run(tu, te.ipad1);
    let tb = tp;
    for (let tv = 1; tv < Q; tv++) {
      tb = te.run(tb, te.ipad2);
      for (let tg = 0; tg < th; tg++) {
        tp[tg] ^= tb[tg];
      }
    }
    tp.copy(ta, tc);
    tc += th;
  }
  return ta;
}
