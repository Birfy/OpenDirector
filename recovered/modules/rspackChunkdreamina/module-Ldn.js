import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import _l from "xb";
import d from "yw";
import c from "d6Z";
import "Vx";
import m from "Ix";
import p from "zpN";
import v from "xK4";
const F = o.memo(function (e) {
  const { option, className } = e;
  const o = i._(e, ["option", "className"]);
  const { label, disabled, extra: { tag } = {} } = option;
  return r.jsx(
    "div",
    n._(
      t._(
        {
          className: _l("option-content-VN2hsb", className, {
            "disabled-t_eO4c": disabled,
          }),
        },
        o,
      ),
      {
        children: r.jsx(m.A, {
          content: label,
          checkOverflow: true,
          disabled,
          children: r.jsxs("span", {
            className: "option-label-ZxS8_u",
            children: [
              r.jsx(v.d, {
                className: "option-label-text-xlNryH",
                children: label,
              }),
              tag
                ? r.jsx(p.b, {
                    type: tag,
                    className: "option-badge-pufoKc",
                  })
                : null,
            ],
          }),
        }),
      },
    ),
  );
});
export var T = o.memo(function (e) {
  const { triggerProps, arrowIcon, options } = e;
  const m = i._(e, ["triggerProps", "arrowIcon", "options"]);
  const { compact, placeholder, value } = m;
  const arrowIcon_1 = o.useMemo(() => {
    if (arrowIcon === undefined) {
      return r.jsx(d.rIS, {});
    }
    return arrowIcon;
  }, [arrowIcon]);
  const options_1 = o.useMemo(
    () =>
      options.map((option) =>
        n._(t._({}, option), {
          label: r.jsx(F, {
            option,
          }),
        }),
      ),
    [options],
  );
  const renderFormat = o.useCallback(() => {
    var e = options.find((e) => e.value === value);
    if (e) {
      return r.jsxs(r.Fragment, {
        children: [
          e.icon
            ? r.jsx("span", {
                className: "trigger-icon-u_tegU",
                children: e.icon,
              })
            : null,
          compact ? null : e.label,
        ],
      });
    }
    return placeholder;
  }, [compact, options, placeholder, value]);
  const triggerProps_1 = o.useMemo(
    () =>
      n._(t._({}, triggerProps), {
        className: _l(
          "trigger-X_fSxy",
          triggerProps == null ? undefined : triggerProps.className,
        ),
      }),
    [triggerProps],
  );
  return r.jsx(
    c.O,
    n._(t._({}, m), {
      arrowIcon: arrowIcon_1,
      renderFormat,
      triggerProps: triggerProps_1,
      options: options_1,
    }),
  );
});
