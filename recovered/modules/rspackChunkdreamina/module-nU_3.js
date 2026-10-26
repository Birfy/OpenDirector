import { Buffer } from "b58";
import f from "./module-Q1.js";
import { ec } from "./module-yR.js";
import a from "Of";
import s from "./module-JZq.js";
function o(t, e) {
  if (t.cmpn(0) <= 0 || t.cmp(e) >= 0) {
    throw Error("invalid sig");
  }
}
export default function (t, e, r, h, d) {
  let c;
  let u;
  let l;
  let b;
  let p;
  let m;
  let v;
  let g;
  let y;
  let M;
  let w;
  let _;
  const x = a(r);
  if (x.type === "ec") {
    if (h !== "ecdsa" && h !== "ecdsa/rsa") {
      throw Error("wrong public key type");
    }
    const S = t;
    const A = e;
    const k = x;
    const B = s[k.data.algorithm.curve.join(".")];
    if (!B) {
      throw Error("unknown curve " + k.data.algorithm.curve.join("."));
    }
    const E = new ec(B);
    const I = k.data.subjectPrivateKey.data;
    return E.verify(A, S, I);
  }
  if (x.type === "dsa") {
    if (h !== "dsa") {
      throw Error("wrong public key type");
    }
    c = t;
    u = e;
    b = (l = x).data.p;
    p = l.data.q;
    m = l.data.g;
    v = l.data.pub_key;
    y = (g = a.signature.decode(c, "der")).s;
    M = g.r;
    o(y, p);
    o(M, p);
    w = f.mont(b);
    _ = y.invm(p);
    return (
      m
        .toRed(w)
        .redPow(new f(u).mul(_).mod(p))
        .fromRed()
        .mul(v.toRed(w).redPow(M.mul(_).mod(p)).fromRed())
        .mod(b)
        .mod(p)
        .cmp(M) === 0
    );
  }
  if (h !== "rsa" && h !== "ecdsa/rsa") {
    throw Error("wrong public key type");
  }
  e = Buffer.concat([d, e]);
  for (
    var R = x.modulus.byteLength(), z = [1], q = 0;
    e.length + z.length + 2 < R;
  ) {
    z.push(255);
    q += 1;
  }
  z.push(0);
  for (var L = -1; ++L < e.length;) {
    z.push(e[L]);
  }
  z = Buffer.from(z);
  const C = f.mont(x.modulus);
  t = (t = new f(t).toRed(C)).redPow(new f(x.publicExponent));
  let P = +(q < 8);
  R = Math.min((t = Buffer.from(t.fromRed().toArray())).length, z.length);
  if (t.length !== z.length) {
    P = 1;
  }
  for (L = -1; ++L < R;) {
    P |= t[L] ^ z[L];
  }
  return P === 0;
}
