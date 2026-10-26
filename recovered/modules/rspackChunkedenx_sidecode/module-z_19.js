import n from "./module-M_2_18.js";
import o from "./module-Y_19.js";
import i from "./module-y_2_18.js";
export default function (r, t) {
  let e;
  let s;
  if (
    (t === "string" && o((e = r.toString)) && !i((s = n(e, r)))) ||
    (o((e = r.valueOf)) && !i((s = n(e, r)))) ||
    (t !== "string" && o((e = r.toString)) && !i((s = n(e, r))))
  ) {
    return s;
  }
  throw TypeError("Can't convert object to primitive value");
}
