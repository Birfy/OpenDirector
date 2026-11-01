import n from "./module-O9_7.js";
import o from "./module-ur_8.js";
const i = n(ArrayBuffer.prototype.slice);
export default function (r) {
  if (o(r) !== 0) {
    return false;
  }
  try {
    i(r, 0, 0);
    return false;
  } catch (r) {
    return true;
  }
}
