import a from "z8";
import r from "xb";
import { A } from "./module-HbF_2.js";
const l = [
  A.coverFallbackBrand,
  A.coverFallbackBlue,
  A.coverFallbackIndigo,
  A.coverFallbackPurple,
  A.coverFallbackOrange,
];
function s(t) {
  const { colorIndex, title } = t;
  return a.jsx("div", {
    className: r(
      A.fallbackCoverTitle,
      A.coverFallback,
      (function () {
        const t =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return l[Math.max(0, Math.trunc(t)) % l.length];
      })(colorIndex),
    ),
    children: a.jsx("span", {
      className: A.fallbackCoverTitleText,
      children: title,
    }),
  });
}
export { s as l };
