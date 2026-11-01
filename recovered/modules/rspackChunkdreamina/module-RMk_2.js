import a from "oa";
import n from "bk";
import o from "qa";
import l from "z8";
import "oOF";
import i from "qpN";
import s from "bT";
import _c from "xb";
import u from "hUS";
export var I = s.memo(
  s.forwardRef(function (e, ref) {
    const { className } = e;
    const c = o._(e, ["className"]);
    const { size, tip, children } = c;
    const element = s.useMemo(
      () =>
        l.jsx(u.w, {
          size,
        }),
      [size],
    );
    return l.jsx(
      i.A,
      n._(
        a._(
          {
            ref,
            element,
          },
          c,
        ),
        {
          className: _c(className, {
            "standalone-GUnf9Y": !children && !tip,
          }),
        },
      ),
    );
  }),
);
