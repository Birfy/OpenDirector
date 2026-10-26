import n from "./module-o.js";
import o from "./module-HN_2.js";
const i = n(ArrayBuffer.prototype.slice);
export default function (e) {
  if (o(e) !== 0) {
    return false;
  }
  try {
    i(e, 0, 0);
    return false;
  } catch (e) {
    return true;
  }
}
