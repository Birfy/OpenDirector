import n from "z8";
import t from "bT";
import { H } from "./module-fmJ.js";
import { A } from "./module-j7F.js";
export function m(e) {
  const { name, showHeading = true } = e;
  const id = "create-inspiration-section-".concat(t.useId());
  return n.jsxs("section", {
    className: A.inspirationSection,
    "aria-labelledby": showHeading ? id : undefined,
    "aria-label": showHeading ? undefined : name,
    children: [
      showHeading
        ? n.jsx("header", {
            className: A.sectionHeader,
            children: n.jsx("h2", {
              id,
              className: A.sectionTitle,
              children: name,
            }),
          })
        : null,
      n.jsx("div", {
        className: A.inspirationViewport,
        children: n.jsx("div", {
          className: A.inspirationClip,
          children: n.jsx(H, {
            count: 28,
            variant: "inspiration",
          }),
        }),
      }),
    ],
  });
}
