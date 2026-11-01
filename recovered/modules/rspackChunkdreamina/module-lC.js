import r from "oa";
import n from "bk";
import a from "z8";
import { A } from "./module-aC3.js";
export function X(e) {
  const { title, label, media, buttonRef, interaction } = e;
  const children = a.jsxs(a.Fragment, {
    children: [
      a.jsx("span", {
        className: A.media,
        "aria-hidden": "true",
        children: media,
      }),
      a.jsx("span", {
        className: A.caption,
        title,
        children: title,
      }),
    ],
  });
  if (interaction) {
    return a.jsx(
      "button",
      n._(r._({}, interaction), {
        ref: buttonRef,
        type: "button",
        className: A.card,
        "aria-label": label,
        children,
      }),
    );
  }
  return a.jsx("div", {
    className: A.card,
    children,
  });
}
