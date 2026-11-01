import r from "oa";
import n from "bk";
import a from "qa";
import o from "z8";
import "xj";
import s from "R8";
import l from "bT";
import _c from "xb";
import u from "hUS";
import { W } from "./module-TFO.js";
export var K = l.memo(
  l.forwardRef(function (e, ref) {
    const { active = false, branded = false, className, children, onClick } = e;
    const h = a._(e, ["active", "branded", "className", "children", "onClick"]);
    const { loading = false, iconOnly } = h;
    const f = !!children || children === 0;
    return o.jsx(
      s.A,
      n._(
        r._(
          {
            ref,
            "data-active": active || undefined,
          },
          h,
        ),
        {
          className: _c("button-EkZazO", className, {
            "active-ukkiF4": active,
            "branded-rGD0r8": branded,
          }),
          iconOnly:
            iconOnly != null ? iconOnly : (!!loading && !f) || undefined,
          onClick,
          children: loading
            ? o.jsx(u.w, {
                className: "loading-icon-zRjslZ",
                "data-dreamina-button-loading-icon": true,
              })
            : children,
        },
      ),
    );
  }),
);
W(K);
