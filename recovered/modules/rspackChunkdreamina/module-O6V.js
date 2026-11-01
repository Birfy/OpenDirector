import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import "GLC";
import i from "mb";
import c from "bT";
import _s from "xb";
export var X = c.memo(
  c.forwardRef(function (e, t) {
    const { className } = e;
    const s = o._(e, ["className"]);
    const ref = c.useCallback(
      (e) => {
        var n;
        var a = (n = e == null ? undefined : e.dom) != null ? n : null;
        if (typeof t === "function") {
          t(a);
        } else if (t) {
          t.current = a;
        }
      },
      [t],
    );
    return l.jsx(
      i.A,
      r._(
        a._(
          {
            ref,
            translate: "no",
          },
          s,
        ),
        {
          className: _s("input-G0G5hz", className),
        },
      ),
    );
  }),
);
