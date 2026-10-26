import t from "z8";
import n from "bT";
import _i from "xb";
import { M } from "./module-CkM.js";
const l = n.memo(function (e) {
  const { option, active = false, onClick } = e;
  const { value, label } = option;
  const onClick_1 = n.useCallback(() => {
    if (onClick == null) {
      return undefined;
    }
    return onClick(value);
  }, [value, onClick]);
  return t.jsx(M, {
    size: "small",
    className: _i("tab-Hmcxhs", {
      "active-vWlEG0": active,
    }),
    onClick: onClick_1,
    children: label,
  });
});
export var g = n.memo(function (e) {
  const { className, options, value, onChange } = e;
  return t.jsx("div", {
    className: _i("tabs-g0TgPn", className),
    children: options.map((option) =>
      t.jsx(
        l,
        {
          option,
          active: value === option.value,
          onClick: onChange,
        },
        option.value,
      ),
    ),
  });
});
