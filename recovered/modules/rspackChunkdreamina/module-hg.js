import { A } from "./module-GV.js";
function n(t) {
  const e = ((t, e) => {
    if (A(t) != "object" || !t) {
      return t;
    }
    const r = t[Symbol.toPrimitive];
    if (r !== undefined) {
      const n = r.call(t, e || "default");
      if (A(n) != "object") {
        return n;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  })(t, "string");
  if (A(e) == "symbol") {
    return e;
  }
  return e + "";
}
export { n as A };
