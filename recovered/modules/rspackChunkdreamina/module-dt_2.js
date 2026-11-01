import r from "z8";
import a from "bT";
import o from "xb";
export var X = a.memo(function (e) {
  const { className, type = "secondary", children } = e;
  return r.jsx("div", {
    className: o("title-EXJkwT", className, {
      "primary-RShncZ": type === "primary",
      "secondary-Qev8cY": type === "secondary",
    }),
    children,
  });
});
