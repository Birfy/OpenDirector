import n from "./module-X_12.js";
import { RegExp } from "./module-J_12.js";
const UNSUPPORTED_Y = n(function () {
  const r = RegExp("a", "y");
  r.lastIndex = 2;
  return r.exec("abcd") !== null;
});
const MISSED_STICKY =
  UNSUPPORTED_Y ||
  n(function () {
    return !RegExp("a", "y").sticky;
  });
export default {
  BROKEN_CARET:
    UNSUPPORTED_Y ||
    n(function () {
      const r = RegExp("^r", "gy");
      r.lastIndex = 2;
      return r.exec("str") !== null;
    }),
  MISSED_STICKY,
  UNSUPPORTED_Y,
};
