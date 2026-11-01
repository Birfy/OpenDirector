import r from "z8";
import l from "bT";
import n from "xb";
export var W = l.memo(function (e) {
  const { visible = false, className } = e;
  if (visible) {
    return r.jsx("div", {
      className: n("operation-menu-divider-QRo0ov", className),
    });
  }
  return null;
});
