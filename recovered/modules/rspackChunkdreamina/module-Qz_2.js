import n from "z8";
import "xj";
import s from "R8";
import a from "bT";
import o from "lj";
import r from "wF";
import { ae } from "./module-co_3.js";
const c = {
  domestic: "domestic-mGH4xZ",
  oversea: "oversea-DN1BIi",
  "inner-button": "inner-button-UBmovW",
  innerButton: "inner-button-UBmovW",
  content: "content-L_Quo3",
  icon: "icon-AcNzw7",
  label: "label-V4zjYa",
};
function useD(e) {
  const { configs, variant } = e;
  const d = r.h(o.K);
  const u = a.useContext(ae);
  if (configs.length === 0) {
    return null;
  }
  return n.jsx(n.Fragment, {
    children: configs.map((e) => {
      if (e.type !== "icon") {
        return null;
      }
      var t;
      var a;
      var o;
      var r;
      var l;
      var h;
      var m =
        e.type !== "icon"
          ? null
          : (t =
                (a = (o = e.text) == null ? undefined : o.call(e)) != null
                  ? a
                  : (r = e.tooltips) == null
                    ? undefined
                    : r.call(e)) != null
            ? t
            : null;
      var p = e.id === "SiderMenuApiInvokeEntrance";
      var g = n.jsxs("span", {
        className: c.content,
        children: [
          n.jsx("span", {
            className: c.icon,
            children:
              (l = e.icon) == null
                ? undefined
                : l.call(e, {
                    selected: false,
                    isHover: false,
                  }),
          }),
          n.jsx("span", {
            className: c.label,
            children: m,
          }),
        ],
      });
      if (e.MenuWrapper) {
        var b = p
          ? n.jsx(s.A, {
              type: "text",
              long: true,
              className: c.innerButton,
              children: g,
            })
          : g;
        h = n.jsx(e.MenuWrapper, {
          children: b,
        });
      } else {
        h = n.jsx(s.A, {
          type: "text",
          long: true,
          className: c.innerButton,
          onMouseEnter: () => d.hoverSideMenuItem(e.id),
          onClick: () => d.activateSideMenuItem(e.id),
          children: g,
        });
      }
      return n.jsx(
        "div",
        {
          className: c[variant],
          onFocus: u.clearActiveItem,
          onMouseEnter: u.clearActiveItem,
          children: h,
        },
        e.id,
      );
    }),
  });
}
export { useD as n };
