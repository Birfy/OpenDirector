import o from "./module-yK.js";
import n from "./module-a9.js";
export default function (t) {
  const e = n(t, "string");
  if (o(e) == "symbol") {
    return e;
  }
  return e + "";
}
