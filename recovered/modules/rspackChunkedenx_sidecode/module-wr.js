import n from "./module-V6.js";
import o from "./module-dV.js";
export default function (t) {
  if (t === undefined) {
    return 0;
  }
  const r = n(t);
  const e = o(r);
  if (r !== e) {
    throw RangeError("Wrong length or index");
  }
  return e;
}
