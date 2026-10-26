import n from "./module-Ok_2.js";
import o from "./module-L_2.js";
export default function (e) {
  if (e === undefined) {
    return 0;
  }
  const t = n(e);
  const r = o(t);
  if (t !== r) {
    throw RangeError("Wrong length or index");
  }
  return r;
}
