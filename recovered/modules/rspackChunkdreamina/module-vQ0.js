import $ from "cGB";
import { Buffer } from "./module-b58.js";
export default function (Z, Q) {
  return Buffer.from(
    Z.toRed($.mont(Q.modulus))
      .redPow(new $(Q.publicExponent))
      .fromRed()
      .toArray(),
  );
}
