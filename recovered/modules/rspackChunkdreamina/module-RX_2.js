import a from "z8";
import n from "zS";
import o from "Qey";
import l from "pr";
import i from "bT";
import _s from "xb";
import d from "yw";
const u = "small-ksSiVp";
const v = "arrow-container-azlzCT";
const m = "arrow-AwxGVm";
const className_1 = "num-k1XTUh";
export var Q = i.memo(function (e) {
  const {
    onPrevious,
    onNext,
    className,
    index,
    length,
    size = "large",
    showPageNumber = false,
    themeMode = "onmedia",
  } = e;
  const x = i.useMemo(() => size === "small", [size]);
  const y = n.A(() => {
    if (onPrevious) {
      onPrevious();
    }
  });
  const k = n.A(() => {
    if (onNext) {
      onNext();
    }
  });
  const _ = n.A((e) => {
    e.stopPropagation();
  });
  return a.jsxs("div", {
    className: _s(
      "container-H_4EOb",
      {
        [u]: x,
        "auto-theme-color-MVXo_L": themeMode === "auto",
      },
      className,
    ),
    onClick: _,
    children: [
      a.jsx("div", {
        className: _s(v, {
          [u]: x,
        }),
        role: "button",
        "aria-label": o.Ay.t(
          "octo_generation_history_locate_previous_label",
          {},
          "上一个",
        ),
        "aria-disabled": !onPrevious,
        tabIndex: onPrevious ? 0 : -1,
        onKeyDown: l.q,
        onClick: y,
        children: a.jsx(d.gu7, {
          className: _s(m, {
            "small-left-ANZ0Tc": x,
          }),
        }),
      }),
      showPageNumber && length > 0
        ? a.jsxs("span", {
            className: "page-number-yO3aNG",
            children: [
              a.jsx("span", {
                className: className_1,
                children: index + 1,
              }),
              a.jsx("span", {
                children: "/",
              }),
              a.jsx("span", {
                className: className_1,
                children: length,
              }),
            ],
          })
        : null,
      a.jsx("div", {
        className: _s(v, {
          [u]: x,
        }),
        role: "button",
        "aria-label": o.Ay.t(
          "octo_generation_history_locate_next_label",
          {},
          "下一个",
        ),
        "aria-disabled": !onNext,
        tabIndex: onNext ? 0 : -1,
        onKeyDown: l.q,
        onClick: k,
        children: a.jsx(d.Vjx, {
          className: _s(m, {
            "small-right-VDgbnr": x,
          }),
        }),
      }),
    ],
  });
});
