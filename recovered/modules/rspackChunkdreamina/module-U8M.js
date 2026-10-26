import a from "oa";
import t from "bk";
import i from "qa";
import o from "z8";
import r from "bT";
import _s from "xb";
import d from "yw";
import u from "oKY";
import m from "dIg";
export var p = r.memo(
  r.forwardRef(function (e, ref) {
    let n;
    const { label, icon, className } = e;
    const h = i._(e, ["label", "icon", "className"]);
    const b = r.useMemo(() => o.jsx(d.ThK, {}), []);
    return o.jsx(
      u.m,
      t._(a._({}, h), {
        className: _s(className, m.A.fullSkillName),
        ref,
        "aria-label": (n = h["aria-label"]) != null ? n : label,
        icon: icon != null ? icon : b,
        label,
      }),
    );
  }),
);
