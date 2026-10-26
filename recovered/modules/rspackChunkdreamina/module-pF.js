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
            "-icon-square-unchecked " +
            n,
          width: "1em",
          height: "1em",
          style: e_style,
          fill: i ? "currentColor" : "#000",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
        },
        d,
      ),
      l.createElement("path", {
        d: "M15.6 18H4.4C3.1 18 2 16.9 2 15.6V4.4C2 3.1 3.1 2 4.4 2h11.2C16.9 2 18 3.1 18 4.4v11.2c0 1.3-1.1 2.4-2.4 2.4zM4.4 3C3.6 3 3 3.6 3 4.4v11.2c0 .8.6 1.4 1.4 1.4h11.2c.8 0 1.4-.6 1.4-1.4V4.4c0-.8-.6-1.4-1.4-1.4H4.4z",
      }),
    );
  });
}
