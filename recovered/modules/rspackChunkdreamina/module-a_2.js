import n from "./module-p3.js";
import o from "./module-r.js";
import i from "./module-N.js";
export default function (e, t) {
  let r;
  let s;
  if (
    (t === "string" && o((r = e.toString)) && !i((s = n(r, e)))) ||
    (o((r = e.valueOf)) && !i((s = n(r, e)))) ||
    (t !== "string" && o((r = e.toString)) && !i((s = n(r, e))))
  ) {
    return s;
  }
  throw TypeError("Can't convert object to primitive value");
}
