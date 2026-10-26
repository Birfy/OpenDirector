import a from "z8";
import r from "bT";
import o from "yw";
import _l from "xb";
import "Vx";
import "xj";
import c from "Ix";
import s from "R8";
const u = r.memo(function (e) {
  const { className, option, active, onClick } = e;
  const onClick_1 = r.useCallback(() => {
    if (!(option.disabled || onClick == null)) {
      onClick(option.value);
    }
  }, [option, onClick]);
  return a.jsx(s.A, {
    className: _l("tab-usPncn", className, {
      "active-QZlJXN": active,
    }),
    disabled: option.disabled,
    "data-mode-tab-active": active,
    onClick: onClick_1,
    children: a.jsxs("span", {
      className: "content-BqDFno",
      children: [
        a.jsx("span", {
          className: "icon-SyY415",
          "aria-hidden": "true",
          "data-mode-tab-icon": option.value,
          children: option.icon,
        }),
        a.jsx(c.A, {
          content: option.label,
          checkOverflow: true,
          children: a.jsx("span", {
            className: "label-oTRys3",
            children: option.label,
          }),
        }),
      ],
    }),
  });
});
export var R = r.memo(function (e) {
  const {
    options,
    value,
    onChange,
    className,
    collapsed = false,
    modeTabs = false,
    wide = false,
    expanded = false,
    onExpandedChange,
    showExpandToggle = false,
    tabsRef,
    outlineStyle,
  } = e;
  const p = modeTabs && showExpandToggle && options.length > 3;
  const disabled = options.slice(3).some((e) => e.value === value);
  const x = expanded || disabled;
  const y = (option) =>
    a.jsx(
      u,
      {
        className: _l({
          "wide-tab-_NtrQc": wide,
        }),
        option,
        active: option.value === value,
        onClick: onChange,
      },
      option.value,
    );
  return a.jsxs("div", {
    ref: tabsRef,
    style: outlineStyle,
    className: _l("tabs-s4F5ri", className, {
      "home-tabs-jaYcX0": modeTabs,
      "domestic-y4ZcBd": modeTabs && true,
      "collapsed-DcNLAu": collapsed,
      "expanded-zF9uDj": x,
      "outlined-c3Jo13": !!outlineStyle,
    }),
    children: [
      outlineStyle
        ? a.jsx("span", {
            className: "header-outline-WcKk9K",
            "aria-hidden": "true",
          })
        : null,
      (p ? options.slice(0, 3) : options).map(y),
      p
        ? a.jsxs(a.Fragment, {
            children: [
              a.jsx("div", {
                className: "extra-tabs-apJwbD",
                children: a.jsx("div", {
                  className: "extra-clip-bmJ5JX",
                  "data-mode-tabs-extra-clip": true,
                  children: a.jsx("div", {
                    className: "extra-content-T7a4_j",
                    children: options.slice(3).map(y),
                  }),
                }),
              }),
              a.jsx("button", {
                type: "button",
                className: "toggle-cQz7Si",
                "aria-label": x ? "Collapse modes" : "Expand modes",
                "aria-expanded": x,
                disabled,
                onClick: () => {
                  if (onExpandedChange == null) {
                    return undefined;
                  }
                  return onExpandedChange(!x);
                },
                children: a.jsx(o.IuU, {
                  "aria-hidden": "true",
                }),
              }),
            ],
          })
        : null,
    ],
  });
});
