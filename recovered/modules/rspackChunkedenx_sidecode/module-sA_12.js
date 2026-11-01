import $ from "./module-J_13.js";
export default function (J, Z) {
  try {
    Object.defineProperty($, J, {
      value: Z,
      configurable: true,
      writable: true,
    });
  } catch (Q) {
    $[J] = Z;
  }
  return Z;
}
