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
            e_prefixCls + "-icon " + e_prefixCls + "-icon-user-fill " + n,
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
        d: "M12.5 10.833c2.301 0 5 1.786 5 5v2.5c0 .46-.373.834-.833.834H3.333a.833.833 0 01-.833-.834v-2.5c0-3.211 2.699-5 5-5h5zM10 1.25a4.167 4.167 0 110 8.333 4.167 4.167 0 010-8.333z",
        fill: i ? "currentColor" : "#000",
      }),
    );
  });
}
