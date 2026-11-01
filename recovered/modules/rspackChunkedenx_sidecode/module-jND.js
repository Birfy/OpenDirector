import { Buffer } from "./module-pH.js";
import tt from "./module-aK.js";
import te from "./module-qs_2_2.js";
function tr(J) {
  let Z;
  const Q = J.modulus.byteLength();
  do {
    Z = new tt(te(Q));
  } while (Z.cmp(J.modulus) >= 0 || !Z.umod(J.prime1) || !Z.umod(J.prime2));
  return Z;
}
function tn(J, Z) {
  let Q;
  const te = {
    blinder: (Q = tr(Z))
      .toRed(tt.mont(Z.modulus))
      .redPow(new tt(Z.publicExponent))
      .fromRed(),
    unblinder: Q.invm(Z.modulus),
  };
  const tn = Z.modulus.byteLength();
  const ti = new tt(J).mul(te.blinder).umod(Z.modulus);
  const to = ti.toRed(tt.mont(Z.prime1));
  const ta = ti.toRed(tt.mont(Z.prime2));
  const Z_coefficient = Z.coefficient;
  const Z_prime1 = Z.prime1;
  const Z_prime2 = Z.prime2;
  const tc = to.redPow(Z.exponent1).fromRed();
  const th = ta.redPow(Z.exponent2).fromRed();
  const td = tc.isub(th).imul(Z_coefficient).umod(Z_prime1).imul(Z_prime2);
  return th
    .iadd(td)
    .imul(te.unblinder)
    .umod(Z.modulus)
    .toArrayLike(Buffer, "be", tn);
}
tn.getr = tr;
export default tn;
