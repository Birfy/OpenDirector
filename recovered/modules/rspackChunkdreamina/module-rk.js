import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import _c from "xb";
import u from "TFO";
import { E } from "./module-lBB.js";
export var I = i.memo(
  i.forwardRef(function (e, ref) {
    const { checked = false, branded = false, className } = e;
    const u = o._(e, ["checked", "branded", "className"]);
    return l.jsx(
      E,
      r._(
        a._(
          {
            ref,
          },
          u,
        ),
        {
          className: _c("switch-button-sBYAMf", className, {
            "checked-HLoT8i": checked,
            "branded-CfcOa8": branded,
          }),
        },
      ),
    );
  }),
);
u.W(I);
