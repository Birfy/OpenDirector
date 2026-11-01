import { Buffer } from "b58";
import f from "./module-G6.js";
import n from "./module-Et.js";
import { ec } from "./module-yR.js";
import s from "./module-Q1.js";
import o from "Of";
import h from "./module-JZq.js";
export function getKey(t, e, r, n) {
  if ((t = Buffer.from(t.toArray())).length < e.byteLength()) {
    const a = Buffer.alloc(e.byteLength() - t.length);
    t = Buffer.concat([a, t]);
  }
  const r_length = r.length;
  const o = ((t, e) => {
    t = (t = c(t, e)).mod(e);
    let r = Buffer.from(t.toArray());
    if (r.length < e.byteLength()) {
      const f = Buffer.alloc(e.byteLength() - r.length);
      r = Buffer.concat([f, r]);
    }
    return r;
  })(r, e);
  let v = Buffer.alloc(r_length);
  v.fill(1);
  let k = Buffer.alloc(r_length);
  k = f(n, k)
    .update(v)
    .update(Buffer.from([0]))
    .update(t)
    .update(o)
    .digest();
  v = f(n, k).update(v).digest();
  k = f(n, k)
    .update(v)
    .update(Buffer.from([1]))
    .update(t)
    .update(o)
    .digest();
  v = f(n, k).update(v).digest();
  return {
    k,
    v,
  };
}
function c(t, e) {
  const r = new s(t);
  const i = (t.length << 3) - e.bitLength();
  if (i > 0) {
    r.ishrn(i);
  }
  return r;
}
export function makeKey(t, e, r) {
  let n;
  let a;
  do {
    for (n = Buffer.alloc(0); 8 * n.length < t.bitLength();) {
      e.v = f(r, e.k).update(e.v).digest();
      n = Buffer.concat([n, e.v]);
    }
    a = c(n, t);
    e.k = f(r, e.k)
      .update(e.v)
      .update(Buffer.from([0]))
      .digest();
    e.v = f(r, e.k).update(e.v).digest();
  } while (a.cmp(t) !== -1);
  return a;
}
export default function (t, e, r, f, l) {
  const b = o(e);
  if (b.curve) {
    if (f !== "ecdsa" && f !== "ecdsa/rsa") {
      throw Error("wrong private key type");
    }
    const p = t;
    const m = b;
    const v = h[m.curve.join(".")];
    if (!v) {
      throw Error("unknown curve " + m.curve.join("."));
    }
    const g = new ec(v).keyFromPrivate(m.privateKey).sign(p);
    return Buffer.from(g.toDER());
  }
  if (b.type === "dsa") {
    if (f !== "dsa") {
      throw Error("wrong private key type");
    }
    return ((t, e, r) => {
      let f;
      let n;
      let a;
      let o;
      let h;
      let l;
      let b;
      let p;
      const priv_key = e.params.priv_key;
      const v = e.params.p;
      const g = e.params.q;
      const y = e.params.g;
      let M = new s(0);
      const w = c(t, g).mod(g);
      for (var _ = false, x = getKey(priv_key, g, t, r); _ === false;) {
        f = y;
        n = p = makeKey(g, x, r);
        a = v;
        o = g;
        M = f.toRed(s.mont(a)).redPow(n).fromRed().mod(o);
        if (
          (_ = p
            .invm(g)
            .imul(w.add(priv_key.mul(M)))
            .mod(g)).cmpn(0) === 0
        ) {
          _ = false;
          M = new s(0);
        }
      }
      h = M;
      l = _;
      h = h.toArray();
      l = l.toArray();
      if (128 & h[0]) {
        h = [0].concat(h);
      }
      if (128 & l[0]) {
        l = [0].concat(l);
      }
      b = (b = [48, h.length + l.length + 4, 2, h.length]).concat(
        h,
        [2, l.length],
        l,
      );
      return Buffer.from(b);
    })(t, b, r);
  }
  if (f !== "rsa" && f !== "ecdsa/rsa") {
    throw Error("wrong private key type");
  }
  if (e.padding !== undefined && e.padding !== 1) {
    throw Error("illegal or unsupported padding mode");
  }
  t = Buffer.concat([l, t]);
  for (
    var y = b.modulus.byteLength(), M = [0, 1];
    t.length + M.length + 1 < y;
  ) {
    M.push(255);
  }
  M.push(0);
  for (let w = -1; ++w < t.length;) {
    M.push(t[w]);
  }
  return n(M, b);
}
