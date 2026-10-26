import n from "./module-M_2_16.js";
import o from "./module-Y_17.js";
import i from "./module-y_2_16.js";
export default function (t, r) {
  let e;
  let s;
  if (
    (r === "string" && o((e = t.toString)) && !i((s = n(e, t)))) ||
    (o((e = t.valueOf)) && !i((s = n(e, t)))) ||
    (r !== "string" && o((e = t.toString)) && !i((s = n(e, t))))
  ) {
    return s;
  }
  throw TypeError("Can't convert object to primitive value");
}
