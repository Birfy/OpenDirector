import n from "./module-M_2_9.js";
import o from "./module-Y_10.js";
import i from "./module-y_2_9.js";
export default function (t, e) {
  let r;
  let s;
  if (
    (e === "string" && o((r = t.toString)) && !i((s = n(r, t)))) ||
    (o((r = t.valueOf)) && !i((s = n(r, t)))) ||
    (e !== "string" && o((r = t.toString)) && !i((s = n(r, t))))
  ) {
    return s;
  }
  throw TypeError("Can't convert object to primitive value");
}
