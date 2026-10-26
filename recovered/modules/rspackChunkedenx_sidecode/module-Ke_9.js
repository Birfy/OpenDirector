import n from "./module-rG_9.js";
export default function (t) {
  const e = n(t, "number");
  if (typeof e === "number") {
    throw TypeError("Can't convert number to bigint");
  }
  return BigInt(e);
}
