import { Buffer } from "wS";
import f from "./module-Q1.js";
import n from "Wt";
function a(t) {
  let e;
  const r = t.modulus.byteLength();
  do {
    e = new f(n(r));
  } while (e.cmp(t.modulus) >= 0 || !e.umod(t.prime1) || !e.umod(t.prime2));
  return e;
}
function s(t, e) {
  let r;
  const n = {
    blinder: (r = a(e))
      .toRed(f.mont(e.modulus))
      .redPow(new f(e.publicExponent))
      .fromRed(),
    unblinder: r.invm(e.modulus),
  };
  const s = e.modulus.byteLength();
  const o = new f(t).mul(n.blinder).umod(e.modulus);
  const h = o.toRed(f.mont(e.prime1));
  const d = o.toRed(f.mont(e.prime2));
  const e_coefficient = e.coefficient;
  const e_prime1 = e.prime1;
  const e_prime2 = e.prime2;
  const b = h.redPow(e.exponent1).fromRed();
  const p = d.redPow(e.exponent2).fromRed();
  const m = b.isub(p).imul(e_coefficient).umod(e_prime1).imul(e_prime2);
  return p
    .iadd(m)
    .imul(n.unblinder)
    .umod(e.modulus)
    .toArrayLike(Buffer, "be", s);
}
s.getr = a;
export default s;
