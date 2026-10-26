import n from "./module-V6_10.js";
import o from "./module-dV_9.js";
export default function (t) {
  if (t === undefined) {
    return 0;
  }
  const e = n(t);
  const r = o(e);
  if (e !== r) {
    throw RangeError("Wrong length or index");
  }
  return r;
}
