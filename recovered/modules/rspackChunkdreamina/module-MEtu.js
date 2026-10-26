import a from "oa";
import t from "bk";
import i from "z8";
import "Vx";
import o from "Ix";
import r from "bT";
import _s from "xb";
import d from "yw";
import * as u from "./module-tja.js";
import "uw5";
import m from "VAR";
import * as p from "./module-H6_3.js";
import { o as o_1 } from "./module-oJy.js";
import { h } from "./module-XP3_3.js";
import { A } from "./module-HH_4.js";
function useK(e) {
  const { preview, moreAction, disabled, children } = e;
  const c = r.useContext(o_1);
  const d = c == null ? undefined : c.setActiveId;
  const u = r.useId();
  const k = !disabled && (c == null ? undefined : c.activeId) === u;
  const gRef = r.useRef(null);
  const fRef = r.useRef(null);
  const [x, setX] = r.useState({
    right: 4,
    left: 4,
    top: 0,
  });
  const j = r.useCallback(() => {
    var e;
    var l;
    var n;
    var a;
    var gRef_current = gRef.current;
    if (gRef_current) {
      var i = gRef_current.getBoundingClientRect();
      var o =
        (e =
          (n = gRef_current.closest(".lv-select-popup")) == null
            ? undefined
            : n.getBoundingClientRect()) != null
          ? e
          : i;
      var r =
        (l =
          (a = gRef_current.closest(".lv-select-option")) == null
            ? undefined
            : a.getBoundingClientRect()) != null
          ? l
          : i;
      var s = {
        right: o.right - i.right + 4,
        left: i.left - o.left + 4,
        top: r.top - i.top,
      };
      setX((e) => {
        if (e.right === s.right && e.left === s.left && e.top === s.top) {
          return e;
        }
        return s;
      });
    }
  }, []);
  const onVisibleChange = (e) => {
    if (e && !disabled) {
      j();
      if (d != null) {
        d(u);
      }
    } else if (d != null) {
      d((e) => {
        if (e === u) {
          return undefined;
        }
        return e;
      });
    }
  };
  const y = h({
    preview,
    moreAction,
    visible: k,
    triggerRef: gRef,
    onVisibleChange,
  });
  r.useEffect(() => {
    var gRef_current = gRef.current;
    if (k && gRef_current) {
      j();
      var l = new ResizeObserver(j);
      l.observe(gRef_current);
      var n = gRef_current.closest(".lv-select-popup");
      if (n) {
        l.observe(n);
      }
      window.addEventListener("resize", j);
      return () => {
        l.disconnect();
        window.removeEventListener("resize", j);
      };
    }
  }, [k, j]);
  r.useEffect(() => {
    if (k) {
      var e;
      if ((e = fRef.current) != null) {
        e.updatePopupPosition();
      }
    }
  }, [k, x]);
  r.useEffect(() => {
    if (disabled) {
      if (d != null) {
        d((e) => {
          if (e === u) {
            return undefined;
          }
          return e;
        });
      }
    }
  }, [disabled, d, u]);
  return i.jsx(m.A, {
    ref: fRef,
    position: "rt",
    showArrow: false,
    trigger: moreAction ? "hover" : ["hover", "focus"],
    blurToHide: !moreAction,
    popupVisible: k,
    onVisibleChange: moreAction ? y.onVisibleChange : onVisibleChange,
    triggerProps: t._(
      a._(
        {},
        moreAction
          ? {
              popup: y.popup,
            }
          : {},
      ),
      {
        autoFitPosition: true,
        containerScrollToClose: true,
        mouseEnterDelay: 150,
        popupAlign: {
          right: [x.right, x.top],
          left: [x.left, x.top],
        },
      },
    ),
    className: A.popover,
    content:
      !moreAction && k
        ? i.jsx(
            p.a,
            {
              preview,
            },
            preview.id,
          )
        : null,
    children: r.cloneElement(
      children,
      a._(
        {
          ref: gRef,
        },
        moreAction
          ? {
              onFocus: (e) => {
                if (e.target === e.currentTarget) {
                  y.onVisibleChange(true);
                }
              },
              onBlur: y.onTriggerBlur,
              onKeyDown: y.onTriggerKeyDown,
            }
          : {},
      ),
    ),
  });
}
export function K(e) {
  const {
    preview,
    moreAction,
    label,
    description,
    selected,
    isPlatformSkill,
    isUserSkill,
    platformLabel,
    skillIcon,
    actions = [],
  } = e;
  const [x, setX] = r.useState(false);
  const j = selected || actions.length > 0;
  const triggerProps = r.useMemo(
    () => ({
      containerScrollToClose: true,
    }),
    [],
  );
  const actions_1 = r.useMemo(
    () =>
      actions.map((e) =>
        t._(a._({}, e), {
          onClick: (l) => {
            setX(false);
            e.onClick(l);
          },
        }),
      ),
    [actions],
  );
  const children = i.jsx("div", {
    tabIndex: preview ? 0 : undefined,
    className: _s("option-content-AMKz58", "skill-select-option-content", {
      "user-skill-Vj6v6v": isUserSkill,
      "selected-jb9iST": selected,
      "more-menu-visible-oGq05Z": x,
    }),
    children: i.jsxs("div", {
      className: "option-text-column-uRFYqb",
      children: [
        i.jsxs("div", {
          className: "option-name-row-jjetAJ",
          children: [
            i.jsxs("div", {
              className: "option-name-leading-L8ImHc",
              children: [
                i.jsx("span", {
                  className: "option-icon-berE6C",
                  "aria-hidden": true,
                  children:
                    skillIcon != null
                      ? skillIcon
                      : i.jsx(d.ThK, {
                          size: 16,
                        }),
                }),
                i.jsxs("div", {
                  className: "option-name-meta-_32puS",
                  children: [
                    i.jsx("div", {
                      className: "option-name-wrapper-AcnrI2",
                      children: i.jsx(o.A, {
                        disabled: !!preview,
                        content: label,
                        checkOverflow: true,
                        triggerProps,
                        children: i.jsx("span", {
                          className: "option-name-m_ClDL",
                          children: label,
                        }),
                      }),
                    }),
                    isPlatformSkill
                      ? i.jsx("span", {
                          className: "platform-tag-yzvRUE",
                          children: i.jsx("span", {
                            className: "platform-tag-text-IBvgY8",
                            children: platformLabel,
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            j
              ? i.jsxs("div", {
                  className: "trailing-action-CqyDYJ",
                  children: [
                    selected
                      ? i.jsx("span", {
                          className: "check-icon-sqmZ6S",
                          children: i.jsx(d.iWP, {
                            size: 16,
                          }),
                        })
                      : null,
                    actions_1.length
                      ? i.jsx(u.k, {
                          actions: actions_1,
                          position: "rt",
                          popupVisible: x,
                          triggerClassName: _s("more-button-TaeGuF", {
                            "visible-IRXnvT": x,
                          }),
                          onVisibleChange: setX,
                        })
                      : null,
                  ],
                })
              : null,
          ],
        }),
        i.jsx("div", {
          className: "option-description-wrapper-oIFDQy",
          children: i.jsx(o.A, {
            disabled: !!preview,
            content: description,
            checkOverflow: true,
            triggerProps,
            children: i.jsx("span", {
              className: "option-description-GZprNB",
              children: description,
            }),
          }),
        }),
      ],
    }),
  });
  if (preview) {
    return i.jsx(useK, {
      preview,
      moreAction,
      disabled: x,
      children,
    });
  }
  return children;
}
