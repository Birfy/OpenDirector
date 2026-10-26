import { Buffer } from "./module-s6_2_2.js";
import tt from "./module-jL_2_2.js";
import te from "./module-jND.js";
import { ec } from "./module-jm.js";
import tn from "./module-aK.js";
import ti from "./module-WO_3_2.js";
import to from "./module-JZ_2.js";
export function getKey(J, Z, Q, te) {
  if ((J = Buffer.from(J.toArray())).length < Z.byteLength()) {
    const tr = Buffer.alloc(Z.byteLength() - J.length);
    J = Buffer.concat([tr, J]);
  }
  const Q_length = Q.length;
  const ti = ((J, Z) => {
    J = (J = ts(J, Z)).mod(Z);
    let Q = Buffer.from(J.toArray());
    if (Q.length < Z.byteLength()) {
      const tt = Buffer.alloc(Z.byteLength() - Q.length);
      Q = Buffer.concat([tt, Q]);
    }
    return Q;
  })(Q, Z);
  let v = Buffer.alloc(Q_length);
  v.fill(1);
  let k = Buffer.alloc(Q_length);
  k = tt(te, k)
    .update(v)
    .update(Buffer.from([0]))
    .update(J)
    .update(ti)
    .digest();
  v = tt(te, k).update(v).digest();
  k = tt(te, k)
    .update(v)
    .update(Buffer.from([1]))
    .update(J)
    .update(ti)
    .digest();
  v = tt(te, k).update(v).digest();
  return {
    k,
    v,
  };
}
function ts(J, Z) {
  const Q = new tn(J);
  const $ = (J.length << 3) - Z.bitLength();
  if ($ > 0) {
    Q.ishrn($);
  }
  return Q;
}
export function makeKey(J, Z, Q) {
  let te;
  let tr;
  do {
    for (te = Buffer.alloc(0); 8 * te.length < J.bitLength();) {
      Z.v = tt(Q, Z.k).update(Z.v).digest();
      te = Buffer.concat([te, Z.v]);
    }
    tr = ts(te, J);
    Z.k = tt(Q, Z.k)
      .update(Z.v)
      .update(Buffer.from([0]))
      .digest();
    Z.v = tt(Q, Z.k).update(Z.v).digest();
  } while (tr.cmp(J) !== -1);
  return tr;
}
export default function (J, Z, Q, tt, tu) {
  const tc = ti(Z);
  if (tc.curve) {
    if (tt !== "ecdsa" && tt !== "ecdsa/rsa") {
      throw Error("wrong private key type");
    }
    const th = J;
    const td = tc;
    const tl = to[td.curve.join(".")];
    if (!tl) {
      throw Error("unknown curve " + td.curve.join("."));
    }
    const tp = new ec(tl).keyFromPrivate(td.privateKey).sign(th);
    return Buffer.from(tp.toDER());
  }
  if (tc.type === "dsa") {
    if (tt !== "dsa") {
      throw Error("wrong private key type");
    }
    return ((J, Z, Q) => {
      let tt;
      let te;
      let tr;
      let ti;
      let to;
      let tu;
      let tc;
      let th;
      const priv_key = Z.params.priv_key;
      const tl = Z.params.p;
      const tp = Z.params.q;
      const tb = Z.params.g;
      let tv = new tn(0);
      const tg = ts(J, tp).mod(tp);
      for (var ty = false, tm = getKey(priv_key, tp, J, Q); ty === false;) {
        tt = tb;
        te = th = makeKey(tp, tm, Q);
        tr = tl;
        ti = tp;
        tv = tt.toRed(tn.mont(tr)).redPow(te).fromRed().mod(ti);
        if (
          (ty = th
            .invm(tp)
            .imul(tg.add(priv_key.mul(tv)))
            .mod(tp)).cmpn(0) === 0
        ) {
          ty = false;
          tv = new tn(0);
        }
      }
      to = tv;
      tu = ty;
      to = to.toArray();
      tu = tu.toArray();
      if (128 & to[0]) {
        to = [0].concat(to);
      }
      if (128 & tu[0]) {
        tu = [0].concat(tu);
      }
      tc = (tc = [48, to.length + tu.length + 4, 2, to.length]).concat(
        to,
        [2, tu.length],
        tu,
      );
      return Buffer.from(tc);
    })(J, tc, Q);
  }
  if (tt !== "rsa" && tt !== "ecdsa/rsa") {
    throw Error("wrong private key type");
  }
  if (Z.padding !== undefined && Z.padding !== 1) {
    throw Error("illegal or unsupported padding mode");
  }
  J = Buffer.concat([tu, J]);
  for (
    var tb = tc.modulus.byteLength(), tv = [0, 1];
    J.length + tv.length + 1 < tb;
  ) {
    tv.push(255);
  }
  tv.push(0);
  for (let tg = -1; ++tg < J.length;) {
    tv.push(J[tg]);
  }
  return te(tv, tc);
}
