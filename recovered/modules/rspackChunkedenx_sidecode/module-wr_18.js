import n from "./module-V6_19.js";
import o from "./module-dV_18.js";
export default function (r) {
  if (r === undefined) {
    return 0;
  }
  const t = n(r);
  const e = o(t);
  if (t !== e) {
    throw RangeError("Wrong length or index");
  }
  return e;
}
