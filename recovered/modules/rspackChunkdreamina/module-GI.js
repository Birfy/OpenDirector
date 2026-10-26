import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import "vFG";
import o from "UX";
import l from "bT";
import _c from "xb";
import u from "uiO";
import "Vx";
import m from "Ix";
const p = l.memo(function (e) {
  const { option, renderOption, checked = false } = e;
  const { disabled, extra } = option;
  const children = l.useMemo(
    () => renderOption(option, checked),
    [option, renderOption, checked],
  );
  return s.jsx(
    m.A,
    n._(r._({}, extra == null ? undefined : extra.tooltipProps), {
      children: s.jsx("div", {
        className: _c("radio-mmPD8l", {
          "checked-lOq3cM": checked,
          "disabled-LrpjIa": disabled,
        }),
        children,
      }),
    }),
  );
});
export var h = l.memo(function (e) {
  const {
    className,
    disabled,
    empty = false,
    options = [],
    renderOption = (e) => {
      var { label } = e;
      return label;
    },
    value,
  } = e;
  const v = i._(e, [
    "className",
    "disabled",
    "empty",
    "options",
    "renderOption",
    "value",
  ]);
  const b = l.useMemo(
    () =>
      options.map((e) => {
        if (u.U(e)) {
          return n._(r._({}, e), {
            disabled: disabled || e.disabled,
          });
        }
        return {
          label: e,
          value: e,
          disabled,
        };
      }),
    [options, disabled],
  );
  const f = l.useMemo(
    () =>
      b.map((option) => {
        var { label } = option;
        var a = i._(option, ["label"]);
        return n._(r._({}, a), {
          children: (t) => {
            var { checked } = t;
            return s.jsx(p, {
              option,
              renderOption,
              checked,
            });
          },
        });
      }),
    [b, renderOption],
  );
  return s.jsx(
    o.A.Group,
    n._(
      r._(
        {
          size: "small",
        },
        v,
      ),
      {
        disabled,
        value: empty ? "__content_generator_radio_group_empty__" : value,
        className: _c("radio-group-nYQa35", className),
        children: f.map((e) => s.jsx(o.A, r._({}, e), e.value)),
      },
    ),
  );
});
