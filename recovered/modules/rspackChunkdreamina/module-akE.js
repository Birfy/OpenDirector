import a from "z8";
import "xj";
import t from "R8";
import i from "bT";
import _o from "xb";
import { I } from "./module-u8O.js";
import { W } from "./module-oJy.js";
import d from "oa";
import u from "yw";
import m from "O6V";
import v from "hUS";
const p = i.memo(function (e) {
  const prefix = i.useMemo(
    () =>
      a.jsx(u.C0l, {
        size: 16,
      }),
    [],
  );
  return a.jsx(
    m.X,
    d._(
      {
        prefix,
        allowClear: true,
        autoFocus: false,
      },
      e,
    ),
  );
});
function h(e) {
  const { menu, emptyContent, loading, hasOptions, loadingLabel } = e;
  if (loading) {
    return a.jsxs("div", {
      className: "skill-select-loading-XwK1xF",
      children: [
        a.jsx(v.w, {
          size: 16,
          className: "skill-select-loading-icon-bWAxam",
        }),
        a.jsx("span", {
          className: "skill-select-loading-text-mRFT6o",
          children: loadingLabel,
        }),
      ],
    });
  }
  return a.jsx(a.Fragment, {
    children: hasOptions ? menu : emptyContent,
  });
}
export function V(e) {
  const {
    menu,
    source,
    searchValue,
    searchPlaceholder,
    onSearchChange,
    loading,
    hasOptions,
    loadingLabel,
    emptyLabel,
    emptyAction,
    moreAction,
    footer,
  } = e;
  const w = source === "toolbar";
  const onMouseDown = i.useCallback((e) => {
    e.preventDefault();
  }, []);
  const emptyContent = a.jsxs("div", {
    className: "skill-select-empty-FlZhUI",
    children: [
      a.jsx("span", {
        children: emptyLabel,
      }),
      emptyAction
        ? a.jsx(t.A, {
            type: "secondary",
            size: "mini",
            className: "view-more-action-fnNmR2",
            onMouseDown,
            onClick: emptyAction.onClick,
            children: emptyAction.label,
          })
        : null,
    ],
  });
  return a.jsx(W, {
    children: a.jsxs("div", {
      className: _o(
        "skill-select-dropdown-content-FgPXKU",
        "skill-select-dropdown",
      ),
      children: [
        w
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsxs("div", {
                  className: "search-input-container-JAtbhQ",
                  children: [
                    a.jsx(p, {
                      className: "search-input-lPlZ9p",
                      value: searchValue,
                      placeholder: searchPlaceholder,
                      onChange: onSearchChange,
                    }),
                    moreAction && searchValue.length === 0
                      ? a.jsx(I, {
                          label: moreAction.label,
                          onClick: moreAction.onClick,
                        })
                      : null,
                  ],
                }),
                a.jsx("div", {
                  className: "dropdown-divider-f4okId",
                }),
              ],
            })
          : null,
        a.jsx("div", {
          className: "skill-select-menu-wrapper-Xa8iwW",
          children: a.jsx(h, {
            menu,
            emptyContent,
            loading,
            hasOptions,
            loadingLabel,
          }),
        }),
        w ? footer : null,
      ],
    }),
  });
}
