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
          className: e_prefixCls + "-icon " + e_prefixCls + "-icon-check " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          viewBox: "0 0 20 20",
          fill: i ? "currentColor" : "#000",
          xmlns: "http://www.w3.org/2000/svg",
        },
        d,
      ),
      l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.702 4.47a.5.5 0 00-.705.06L8.33 13.596 3.82 9.724a.5.5 0 00-.705.054l-.652.758a.5.5 0 00.054.706L7.361 15.4a.5.5 0 00.054.053l.526.445.22.188a.5.5 0 00.722-.047l8.641-10.218a.5.5 0 00-.059-.705l-.763-.645z",
        fill: i ? "currentColor" : "#000",
      }),
    );
  });
}
