import n from "./module-X_22.js";
import { RegExp } from "./module-J_22.js";
const UNSUPPORTED_Y = n(function () {
  const t = RegExp("a", "y");
  t.lastIndex = 2;
  return t.exec("abcd") !== null;
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
      const t = RegExp("^r", "gy");
      t.lastIndex = 2;
      return t.exec("str") !== null;
    }),
  MISSED_STICKY,
  UNSUPPORTED_Y,
};
