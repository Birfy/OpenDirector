import a from "z8";
import r from "bT";
import _o from "xb";
var i = r.memo(function (e) {
  const { options, value, onChange, className } = e;
  if (options.length) {
    return a.jsx("div", {
      className: _o("modes-caZC0S", className),
      children: options.map((e) =>
        a.jsxs(
          "button",
          {
            type: "button",
            className: "mode-jMYl8F",
            "aria-pressed": e.value === value,
            disabled: e.disabled || !onChange,
            onClick: () => {
              if (e.value !== value) {
                if (onChange != null) {
                  onChange(e.value);
                }
              }
            },
            children: [
              a.jsx("span", {
                className: "icon-dD5PXT",
                "aria-hidden": "true",
                children: e.icon,
              }),
              a.jsx("span", {
                children: e.label,
              }),
            ],
          },
          e.value,
        ),
      ),
    });
  }
  return null;
});
export { i as a };
