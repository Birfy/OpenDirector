import n from "./module-O9.js";
import o from "./module-ur.js";
const i = n(ArrayBuffer.prototype.slice);
export default function (t) {
  if (o(t) !== 0) {
    return false;
  }
  try {
    i(t, 0, 0);
    return false;
  } catch (t) {
    return true;
  }
}
