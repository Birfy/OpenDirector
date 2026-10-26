import n from "./module-i.js";
export default function (e) {
  const t = n(e, "number");
  if (typeof t === "number") {
    throw TypeError("Can't convert number to bigint");
  }
  return BigInt(t);
}
