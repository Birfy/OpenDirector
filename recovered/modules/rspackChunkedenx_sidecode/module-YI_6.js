import n from "./module-O9_6.js";
import o from "./module-ur_7.js";
const a = n(ArrayBuffer.prototype.slice);
export default function (t) {
  if (o(t) !== 0) {
    return false;
  }
  try {
    a(t, 0, 0);
    return false;
  } catch (t) {
    return true;
  }
}
