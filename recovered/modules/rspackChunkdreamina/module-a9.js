import o from "./module-yK.js";
export default function (t, e) {
  if (o(t) != "object" || !t) {
    return t;
  }
  const r = t[Symbol.toPrimitive];
  if (r !== undefined) {
    const n = r.call(t, e || "default");
    if (o(n) != "object") {
      return n;
    }
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
