import a from "z8";
import t from "xb";
import { A } from "./module-HbF_3.js";
const r = [
  A.coverFallbackBrand,
  A.coverFallbackBlue,
  A.coverFallbackIndigo,
  A.coverFallbackPurple,
  A.coverFallbackOrange,
];
export function l(e) {
  const { colorIndex, title } = e;
  return a.jsx("div", {
    className: t(
      A.fallbackCoverTitle,
      A.coverFallback,
      (function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return r[Math.max(0, Math.trunc(e)) % r.length];
      })(colorIndex),
    ),
    children: a.jsx("span", {
      className: A.fallbackCoverTitleText,
      children: title,
    }),
  });
}
