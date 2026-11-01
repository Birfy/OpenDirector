import $ from "./module-rG_12.js";
export default function (J) {
  const Z = $(J, "number");
  if (typeof Z === "number") {
    throw TypeError("Can't convert number to bigint");
  }
  return BigInt(Z);
}
