import n from "./module-M_2_2.js";
import i from "./module-Y_3.js";
import o from "./module-y_2_2.js";
export default function (t, r) {
  let e;
  let a;
  if (
    (r === "string" && i((e = t.toString)) && !o((a = n(e, t)))) ||
    (i((e = t.valueOf)) && !o((a = n(e, t)))) ||
    (r !== "string" && i((e = t.toString)) && !o((a = n(e, t))))
  ) {
    return a;
  }
  throw TypeError("Can't convert object to primitive value");
}
