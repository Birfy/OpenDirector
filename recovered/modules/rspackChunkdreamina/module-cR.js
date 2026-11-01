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
            e_prefixCls + "-icon " + e_prefixCls + "-icon-circle-disabled " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          viewBox: "0 0 20 20",
          fill: i ? "currentColor" : "#F7F8FA",
          xmlns: "http://www.w3.org/2000/svg",
        },
        d,
      ),
      l.createElement("path", {
        d: "M18.375 10a8.375 8.375 0 11-16.75 0 8.375 8.375 0 0116.75 0z",
        stroke: "#E5E6EB",
        strokeWidth: "1.25",
      }),
    );
  });
}
