import _r from "fyk";
import _i from "i0l";
import l from "bT";
import u from "rJ";
const c = ["className", "useCurrentColor", "style"];
export function A(e) {
  const e_className = e.className;
  const n = e_className === undefined ? "" : e_className;
  const e_useCurrentColor = e.useCurrentColor;
  const i = e_useCurrentColor === undefined || e_useCurrentColor;
  const e_style = e.style;
  const d = _i(e, c);
  return l.createElement(u.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return l.createElement(
      "svg",
      _r(
        {
          className:
            e_prefixCls + "-icon " + e_prefixCls + "-icon-square-disabled " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          viewBox: "0 0 20 20",
          fill: i ? "currentColor" : "#F7F8FA",
        },
        d,
      ),
      l.createElement("path", {
        stroke: "#E5E6EB",
        d: "M15.6 2.5H4.4c-1 0-1.9.8-1.9 1.9v11.2c0 1 .8 1.9 1.9 1.9h11.2c1 0 1.9-.8 1.9-1.9V4.4c0-1.1-.8-1.9-1.9-1.9z",
      }),
    );
  });
}
