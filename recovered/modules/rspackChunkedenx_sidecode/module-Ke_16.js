import n from "./module-rG_16.js";
export default function (t) {
  const r = n(t, "number");
  if (typeof r === "number") {
    throw TypeError("Can't convert number to bigint");
  }
  return BigInt(r);
}
