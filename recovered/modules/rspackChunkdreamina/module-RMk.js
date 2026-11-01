import r from "oa";
import n from "bk";
import i from "qa";
import o from "z8";
import "oOF";
import s from "qpN";
import c from "bT";
import _l from "xb";
import u from "hUS";
export var I = c.memo(
  c.forwardRef(function (e, ref) {
    const { className } = e;
    const l = i._(e, ["className"]);
    const { size, tip, children } = l;
    const element = c.useMemo(
      () =>
        o.jsx(u.w, {
          size,
        }),
      [size],
    );
    return o.jsx(
      s.A,
      n._(
        r._(
          {
            ref,
            element,
          },
          l,
        ),
        {
          className: _l(className, {
            "standalone-GUnf9Y": !children && !tip,
          }),
        },
      ),
    );
  }),
);
