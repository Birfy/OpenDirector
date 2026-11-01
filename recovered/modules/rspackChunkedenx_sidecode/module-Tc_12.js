import $ from "./module-X_13.js";
import { RegExp } from "./module-J_13.js";
const UNSUPPORTED_Y = $(function () {
  const J = RegExp("a", "y");
  J.lastIndex = 2;
  return J.exec("abcd") !== null;
});
const MISSED_STICKY =
  UNSUPPORTED_Y ||
  $(function () {
    return !RegExp("a", "y").sticky;
  });
export default {
  BROKEN_CARET:
    UNSUPPORTED_Y ||
    $(function () {
      const J = RegExp("^r", "gy");
      J.lastIndex = 2;
      return J.exec("str") !== null;
    }),
  MISSED_STICKY,
  UNSUPPORTED_Y,
};
