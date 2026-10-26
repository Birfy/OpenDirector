import a from "z8";
import n from "bT";
import { K } from "./module-xz3.js";
function l() {
  return a.jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      a.jsx("path", {
        d: "M4.70004 4.25L2.14024 7.80522C2.05647 7.92156 2.05647 8.07843 2.14024 8.19476L4.70004 11.75",
        stroke: "currentColor",
        strokeWidth: "1.33333",
        strokeLinecap: "round",
      }),
      a.jsx("path", {
        d: "M11 11.8252L13.8291 8.43059C13.929 8.31073 13.9324 8.13762 13.8373 8.01395L11 4.32522",
        stroke: "currentColor",
        strokeWidth: "1.33333",
        strokeLinecap: "round",
      }),
      a.jsx("path", {
        d: "M9.25258 2.0406C9.30822 1.66966 9.0611 1.35083 8.70063 1.32847C8.34016 1.30611 8.00284 1.58868 7.9472 1.95962L8.59989 2.00011L9.25258 2.0406ZM6.14723 13.9596C6.09159 14.3306 6.3387 14.6494 6.69918 14.6717C7.05965 14.6941 7.39697 14.4115 7.45261 14.0406L6.79992 14.0001L6.14723 13.9596ZM8.59989 2.00011L7.9472 1.95962L6.14723 13.9596L6.79992 14.0001L7.45261 14.0406L9.25258 2.0406L8.59989 2.00011Z",
        fill: "currentColor",
      }),
    ],
  });
}
export var V = n.memo(function (e) {
  const { isSourceMode, onToggle } = e;
  const icon = n.useMemo(() => a.jsx(l, {}), []);
  return a.jsx(K, {
    active: isSourceMode,
    icon,
    onClick: onToggle,
  });
});
