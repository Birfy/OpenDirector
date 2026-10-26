import r from "z8";
import { A } from "./module-M53.js";
export function R(e) {
  const { titleId, title, children, layout = "rail" } = e;
  return r.jsxs("section", {
    className: A.section,
    "aria-labelledby": titleId,
    "data-whats-new-layout": layout,
    children: [
      layout === "rail"
        ? r.jsx("header", {
            className: A.header,
            children: r.jsx("h2", {
              id: titleId,
              className: A.title,
              children: title,
            }),
          })
        : r.jsx("span", {
            id: titleId,
            className: A.visuallyHidden,
            children: title,
          }),
      children,
    ],
  });
}
