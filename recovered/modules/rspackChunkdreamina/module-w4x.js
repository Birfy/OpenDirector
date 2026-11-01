import n from "z8";
import "Vx";
import s from "Ix";
export var M = require("bT").memo(function (e) {
  const {
    icon,
    tips,
    containerStyle = {},
    className = "",
    disabled = false,
  } = e;
  const children = n.jsx("div", {
    style: containerStyle,
    className,
    children: icon,
  });
  if (tips) {
    return n.jsx(s.A, {
      disabled,
      content: tips,
      position: "bottom",
      className: "tooltip-3bG6v5",
      children,
    });
  }
  return children;
});
