import n from "./module-rG_15.js";
export default function (r) {
  const t = n(r, "number");
  if (typeof t === "number") {
    throw TypeError("Can't convert number to bigint");
  }
  return BigInt(t);
}
