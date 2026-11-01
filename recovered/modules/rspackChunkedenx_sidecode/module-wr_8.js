import n from "./module-V6_9.js";
import i from "./module-dV_8.js";
export default function (t) {
  if (t === undefined) {
    return 0;
  }
  const r = n(t);
  const e = i(r);
  if (r !== e) {
    throw RangeError("Wrong length or index");
  }
  return e;
}
