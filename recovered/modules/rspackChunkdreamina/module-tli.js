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
            e_prefixCls +
            "-icon " +
            e_prefixCls +
            "-icon-circle-unchecked " +
            n,
          width: "1em",
          height: "1em",
          style: e_style,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
        },
        d,
      ),
      l.createElement("path", {
        d: "M10 19c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-17c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z",
        fill: i ? "currentColor" : "#000",
      }),
    );
  });
}
