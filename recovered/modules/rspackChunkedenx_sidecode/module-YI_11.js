import n from "./module-O9_11.js";
import o from "./module-ur_12.js";
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
