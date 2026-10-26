import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "bT";
import _c from "xb";
import { R } from "./module-Du8.js";
import d from "TFO";
import * as m from "./module-Pp.js";
export var E = i.memo(
  i.forwardRef(function (e, ref) {
    const { className, readOnly = false, onClick, children } = e;
    const f = o._(e, ["className", "readOnly", "onClick", "children"]);
    const { active, tabIndex } = f;
    const { compact } = i.useContext(R);
    return l.jsx(
      m.b,
      r._(
        a._(
          {
            ref,
          },
          f,
        ),
        {
          className: _c("toolbar-button-J5Ou4K", className, {
            "active-ry0Yny": active,
            "read-only-fm5jaC": readOnly,
          }),
          tabIndex: readOnly ? -1 : tabIndex,
          onClick: readOnly ? undefined : onClick,
          children: compact ? null : children,
        },
      ),
    );
  }),
);
d.W(E);
