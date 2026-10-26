import r from "z8";
import n from "xb";
import { A } from "./module-HbF.js";
const s = [
  A.coverFallbackBrand,
  A.coverFallbackBlue,
  A.coverFallbackIndigo,
  A.coverFallbackPurple,
  A.coverFallbackOrange,
];
function l(e) {
  const { colorIndex, title } = e;
  return r.jsx("div", {
    className: n(
      A.fallbackCoverTitle,
      A.coverFallback,
      (function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return s[Math.max(0, Math.trunc(e)) % s.length];
      })(colorIndex),
    ),
    children: r.jsx("span", {
      className: A.fallbackCoverTitleText,
      children: title,
    }),
  });
}
export { l };
