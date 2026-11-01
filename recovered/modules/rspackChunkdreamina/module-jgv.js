import t from "z8";
import n from "pr";
import i from "bT";
import _r from "xb";
export var s = i.memo(function (e) {
  const { value, label, active = false, onClick } = e;
  const onClick_1 = i.useCallback(() => {
    if (onClick == null) {
      return undefined;
    }
    return onClick(value);
  }, [value, onClick]);
  return t.jsx("div", {
    role: "button",
    tabIndex: 0,
    onKeyDown: n.q,
    "aria-pressed": active,
    className: _r("button-tab-cQuxod", {
      "active-NWaMSp": active,
    }),
    onClick: onClick_1,
    children: label,
  });
});
