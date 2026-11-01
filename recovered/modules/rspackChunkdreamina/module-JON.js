import a from "z8";
import _t from "xb";
import o from "Qey";
import r from "yw";
export function m(e) {
  const { className, label } = e;
  const children =
    label != null
      ? label
      : o.Ay.t(
          "skill_publish_market_page_placeholder_not_public",
          {},
          "The creator chose not to share these instructions",
        );
  return a.jsxs("div", {
    className: _t("inaccessible-rg2sMW", className),
    "aria-label": children,
    children: [
      a.jsx(r.XEb, {
        size: 24,
        className: "icon-VmI5Ym",
        "aria-hidden": true,
      }),
      a.jsx("span", {
        className: "label-_Bs_nd",
        children,
      }),
    ],
  });
}
