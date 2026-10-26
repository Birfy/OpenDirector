import $ from "fz";
import ee from "./module-xe_2.js";
import et from "./module-gLn.js";
import { Buffer } from "./module-b58.js";
import en from "./module-qi_5.js";
import ei from "./module-qf.js";
import ea from "./module-DI.js";
const eo = Buffer.alloc(128);
const es = {
  md5: 16,
  sha1: 20,
  sha224: 28,
  sha256: 32,
  sha384: 48,
  sha512: 64,
  rmd160: 20,
  ripemd160: 20,
};
class ef {
  constructor(Z, Q, X) {
    let en;
    const ei =
      (en = Z) === "rmd160" || en === "ripemd160"
        ? function (Z) {
            return new ee().update(Z).digest();
          }
        : en === "md5"
          ? $
          : function (Z) {
              return et(en).update(Z).digest();
            };
    const ea = Z === "sha512" || Z === "sha384" ? 128 : 64;
    if (Q.length > ea) {
      Q = ei(Q);
    } else if (Q.length < ea) {
      Q = Buffer.concat([Q, eo], ea);
    }
    const ef = Buffer.allocUnsafe(ea + es[Z]);
    const eu = Buffer.allocUnsafe(ea + es[Z]);
    for (let ec = 0; ec < ea; ec++) {
      ef[ec] = 54 ^ Q[ec];
      eu[ec] = 92 ^ Q[ec];
    }
    const eh = Buffer.allocUnsafe(ea + X + 4);
    ef.copy(eh, 0, 0, ea);
    this.ipad1 = eh;
    this.ipad2 = ef;
    this.opad = eu;
    this.alg = Z;
    this.blocksize = ea;
    this.hash = ei;
    this.size = es[Z];
  }
  run(Z, Q) {
    Z.copy(Q, this.blocksize);
    this.hash(Q).copy(this.opad, this.blocksize);
    return this.hash(this.opad);
  }
}
export default function (Z, Q, X, $, ee) {
  en(X, $);
  Z = ea(Z, ei, "Password");
  const et = new ef((ee = ee || "sha1"), Z, (Q = ea(Q, ei, "Salt")).length);
  const eo = Buffer.allocUnsafe($);
  const eu = Buffer.allocUnsafe(Q.length + 4);
  Q.copy(eu, 0, 0, Q.length);
  let ec = 0;
  const eh = es[ee];
  for (let el = Math.ceil($ / eh), ed = 1; ed <= el; ed++) {
    eu.writeUInt32BE(ed, Q.length);
    const ep = et.run(eu, et.ipad1);
    let eb = ep;
    for (let eg = 1; eg < X; eg++) {
      eb = et.run(eb, et.ipad2);
      for (let ey = 0; ey < eh; ey++) {
        ep[ey] ^= eb[ey];
      }
    }
    ep.copy(eo, ec);
    ec += eh;
  }
  return eo;
}
