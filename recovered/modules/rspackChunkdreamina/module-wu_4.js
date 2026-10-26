import n from "./module-VV_4.js";
import { RegExp } from "./module-u.js";
const UNSUPPORTED_Y = n(function () {
  const e = RegExp("a", "y");
  e.lastIndex = 2;
  return e.exec("abcd") !== null;
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
      const e = RegExp("^r", "gy");
      e.lastIndex = 2;
      return e.exec("str") !== null;
    }),
  MISSED_STICKY,
  UNSUPPORTED_Y,
};
