import r from "z8";
import n from "iZ";
import { A } from "./module-M53.js";
const o = ["first", "second", "third", "fourth"];
export function W(e) {
  const { layout = "rail" } = e;
  const i = layout === "hero" ? o.slice(0, 1) : o;
  return r.jsx("div", {
    className: A.skeletonTrack,
    "data-whats-new-layout": layout,
    "aria-hidden": "true",
    children: i.map((e) =>
      r.jsx(
        n.D,
        {
          className: A.skeletonCard,
        },
        e,
      ),
    ),
  });
}
