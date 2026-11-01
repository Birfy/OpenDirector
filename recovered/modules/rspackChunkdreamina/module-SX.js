import a from "oa";
import r from "bk";
import i from "z8";
import o from "bT";
import l from "ED";
import s from "xm3";
import c from "Du8";
import u from "wF";
import d from "qa";
import _m from "xb";
import v from "Qey";
import h from "yw";
import g from "I9";
import f from "YU";
import b from "d6Z";
const _ = o.memo(function (e) {
  let t;
  const { triggerProps } = e;
  const l = d._(e, ["triggerProps"]);
  const options = g.w();
  const arrowIcon = o.useMemo(() => i.jsx(h.rIS, {}), []);
  const triggerProps_1 = o.useMemo(
    () =>
      r._(a._({}, triggerProps), {
        className: _m(
          "trigger-LvIgG5",
          triggerProps == null ? undefined : triggerProps.className,
        ),
      }),
    [triggerProps],
  );
  const m = o.useMemo(() => {
    var e;
    if ((e = options.find((e) => e.value === l.value)) != null) {
      return e;
    }
    return options[0];
  }, [options, l.value]);
  const content = m == null ? undefined : m.label;
  if (options.length <= 1) {
    return null;
  }
  return i.jsx(f.F, {
    content,
    children: i.jsx(
      b.O,
      r._(
        a._(
          {
            dropdownTitle: v.Ay.t(
              "web_home_tool_dropdown_title",
              {},
              "创作类型",
            ),
            arrowIcon,
            branded: true,
          },
          l,
        ),
        {
          value: (t = m == null ? undefined : m.value) != null ? t : l.value,
          triggerProps: triggerProps_1,
          options,
        },
      ),
    ),
  });
});
export var R = l.PA(function (e) {
  const t = u.h(s.V);
  const { modeTabs } = o.useContext(c.R);
  const { contentGeneratorManager } = t;
  const {
    data: { contentGeneratorType },
    switchContentGenerator,
  } = contentGeneratorManager;
  if (modeTabs) {
    return null;
  }
  return i.jsx(
    _,
    r._(a._({}, e), {
      value: contentGeneratorType,
      onChange: (e) => switchContentGenerator(e),
    }),
  );
});
