import a from "z8";
import { E } from "./module-lBB.js";
export function j(e) {
  const { icon, label } = e;
  return a.jsx(E, {
    icon,
    disabled: true,
    "aria-busy": true,
    "aria-label": label,
    children: a.jsx("span", {
      className: "placeholder-iyTuln",
      "aria-hidden": true,
    }),
  });
}
