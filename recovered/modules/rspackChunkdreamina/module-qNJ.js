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
            e_prefixCls + "-icon " + e_prefixCls + "-icon-arrow-down " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          viewBox: "0 0 1024 1024",
          xmlns: "http://www.w3.org/2000/svg",
        },
        d,
      ),
      l.createElement("path", {
        fill: i ? "currentColor" : "#000",
        d: "M512 676.864l346.944-346.965a21.333 21.333 0 0130.187 0l30.165 30.186a21.333 21.333 0 010 30.166L542.166 767.36a42.667 42.667 0 01-60.331 0L104.704 390.25a21.333 21.333 0 010-30.165l30.165-30.186a21.333 21.333 0 0130.187 0L512 676.864z",
      }),
    );
  });
}
