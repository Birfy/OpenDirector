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
            e_prefixCls + "-icon " + e_prefixCls + "-icon-circle-checked " + n,
          width: "1em",
          height: "1em",
          style: e_style,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
        },
        d,
      ),
      l.createElement("path", {
        d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm4.9 6.3L10 13.2s0 .1-.1.1l-.6.7c-.1.1-.2.1-.3.2-.1 0-.3 0-.4-.1l-.6-.7-.1-.1-2.8-2.4c-.2-.2-.2-.5-.1-.7l.6-.7c.2-.2.5-.2.7-.1l2.5 2.1L13.5 6c.2-.2.5-.2.7-.1l.7.6c.1.3.2.6 0 .8z",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: i ? "currentColor" : "#000",
      }),
    );
  });
}
