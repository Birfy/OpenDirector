import { Buffer } from "./module-s6_2_2.js";
import tt from "./module-aK.js";
import { ec } from "./module-jm.js";
import tr from "./module-WO_3_2.js";
import tn from "./module-JZ_2.js";
function ti(J, Z) {
  if (J.cmpn(0) <= 0 || J.cmp(Z) >= 0) {
    throw Error("invalid sig");
  }
}
export default function (J, Z, Q, to, ta) {
  let ts;
  let tf;
  let tu;
  let tc;
  let th;
  let td;
  let tl;
  let tp;
  let tb;
  let tv;
  let tg;
  let ty;
  const tm = tr(Q);
  if (tm.type === "ec") {
    if (to !== "ecdsa" && to !== "ecdsa/rsa") {
      throw Error("wrong public key type");
    }
    const tw = J;
    const tx = Z;
    const t_ = tm;
    const tM = tn[t_.data.algorithm.curve.join(".")];
    if (!tM) {
      throw Error("unknown curve " + t_.data.algorithm.curve.join("."));
    }
    const tS = new ec(tM);
    const tA = t_.data.subjectPrivateKey.data;
    return tS.verify(tx, tw, tA);
  }
  if (tm.type === "dsa") {
    if (to !== "dsa") {
      throw Error("wrong public key type");
    }
    ts = J;
    tf = Z;
    tc = (tu = tm).data.p;
    th = tu.data.q;
    td = tu.data.g;
    tl = tu.data.pub_key;
    tb = (tp = tr.signature.decode(ts, "der")).s;
    tv = tp.r;
    ti(tb, th);
    ti(tv, th);
    tg = tt.mont(tc);
    ty = tb.invm(th);
    return (
      td
        .toRed(tg)
        .redPow(new tt(tf).mul(ty).mod(th))
        .fromRed()
        .mul(tl.toRed(tg).redPow(tv.mul(ty).mod(th)).fromRed())
        .mod(tc)
        .mod(th)
        .cmp(tv) === 0
    );
  }
  if (to !== "rsa" && to !== "ecdsa/rsa") {
    throw Error("wrong public key type");
  }
  Z = Buffer.concat([ta, Z]);
  for (
    var tE = tm.modulus.byteLength(), tk = [1], tR = 0;
    Z.length + tk.length + 2 < tE;
  ) {
    tk.push(255);
    tR += 1;
  }
  tk.push(0);
  for (var tI = -1; ++tI < Z.length;) {
    tk.push(Z[tI]);
  }
  tk = Buffer.from(tk);
  const tO = tt.mont(tm.modulus);
  J = (J = new tt(J).toRed(tO)).redPow(new tt(tm.publicExponent));
  let tT = +(tR < 8);
  tE = Math.min((J = Buffer.from(J.fromRed().toArray())).length, tk.length);
  if (J.length !== tk.length) {
    tT = 1;
  }
  for (tI = -1; ++tI < tE;) {
    tT |= J[tI] ^ tk[tI];
  }
  return tT === 0;
}
