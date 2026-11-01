import n from "./module-O9_22.js";
import i from "./module-ur_23.js";
const o = n(ArrayBuffer.prototype.slice);
export default function (t) {
  if (i(t) !== 0) {
    return false;
  }
  try {
    o(t, 0, 0);
    return false;
  } catch (t) {
    return true;
  }
}
