import $ from "./module-ai.js";
import { Buffer } from "./module-s6_2_2.js";
export default function (J, Z) {
  return Buffer.from(
    J.toRed($.mont(Z.modulus))
      .redPow(new $(Z.publicExponent))
      .fromRed()
      .toArray(),
  );
}
