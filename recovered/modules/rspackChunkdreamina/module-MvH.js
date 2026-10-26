import r from "rp";
export function _(e) {
  const t = ((e, t) => {
    if (r._(e) !== "object" || e === null) {
      return e;
    }
    const i = e[Symbol.toPrimitive];
    if (i !== undefined) {
      const a = i.call(e, t || "default");
      if (r._(a) !== "object") {
        return a;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  })(e, "string");
  if (r._(t) === "symbol") {
    return t;
  }
  return String(t);
}
