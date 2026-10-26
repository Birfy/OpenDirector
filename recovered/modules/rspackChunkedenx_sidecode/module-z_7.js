import n from "./module-M_2_6.js";
import o from "./module-Y_7.js";
import a from "./module-y_2_6.js";
export default function (t, r) {
  let e;
  let s;
  if (
    (r === "string" && o((e = t.toString)) && !a((s = n(e, t)))) ||
    (o((e = t.valueOf)) && !a((s = n(e, t)))) ||
    (r !== "string" && o((e = t.toString)) && !a((s = n(e, t))))
  ) {
    return s;
  }
  throw TypeError("Can't convert object to primitive value");
}
