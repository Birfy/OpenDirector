import i from "oa";
import a from "bk";
import o from "z8";
import n from "bT";
import * as s from "./module-H6_2.js";
import { A } from "./module-HH_2.js";
export function h(e) {
  const { preview, moreAction, visible, triggerRef, onVisibleChange } = e;
  const vRef = n.useRef(null);
  const hRef = n.useRef(false);
  const p = () => {
    var triggerRef_current = triggerRef.current;
    if (
      triggerRef_current == null
        ? undefined
        : triggerRef_current.matches("button, [tabindex]")
    ) {
      return triggerRef_current;
    }
    if (triggerRef_current == null) {
      return undefined;
    }
    return triggerRef_current.querySelector("button");
  };
  const m = () => {
    var e;
    hRef.current = true;
    if ((e = p()) != null) {
      e.focus();
    }
    hRef.current = false;
  };
  return {
    onTriggerKeyDown: (e) => {
      if (
        e.key === "Tab" &&
        !e.shiftKey &&
        visible &&
        moreAction &&
        e.target === p()
      ) {
        var t;
        var i =
          (t = vRef.current) == null ? undefined : t.querySelector("button");
        if (i) {
          e.preventDefault();
          e.stopPropagation();
          i.focus();
        }
      } else {
        if (e.key === "Escape" && visible) {
          e.stopPropagation();
          onVisibleChange(false);
        }
      }
    },
    onTriggerBlur: (e) => {
      var t;
      var r;
      if (
        !(
          ((t = vRef.current) == null
            ? undefined
            : t.contains(e.relatedTarget)) ||
          ((r = triggerRef.current) == null
            ? undefined
            : r.contains(e.relatedTarget))
        )
      ) {
        onVisibleChange(false);
      }
    },
    onVisibleChange: (e) => {
      var t;
      if (
        !(
          (e && hRef.current) ||
          (!e &&
            ((t = vRef.current) == null
              ? undefined
              : t.contains(document.activeElement)))
        )
      ) {
        onVisibleChange(e);
      }
    },
    popup: () =>
      o.jsx("div", {
        ref: vRef,
        className: A.popup,
        onBlur: (e) => {
          var t;
          if (
            !(
              e.currentTarget.contains(e.relatedTarget) ||
              ((t = triggerRef.current) == null
                ? undefined
                : t.contains(e.relatedTarget))
            )
          ) {
            onVisibleChange(false);
          }
        },
        onKeyDown: (e) => {
          if (e.key === "Escape" || e.key === "Tab") {
            e.stopPropagation();
            if (e.key === "Escape" || e.shiftKey) {
              e.preventDefault();
            }
            m();
            onVisibleChange(false);
          }
        },
        children:
          visible && preview
            ? o.jsx(
                s.a,
                {
                  preview,
                  moreAction: moreAction
                    ? a._(i._({}, moreAction), {
                        onClick: () => {
                          m();
                          onVisibleChange(false);
                          moreAction.onClick();
                        },
                      })
                    : undefined,
                },
                preview.id,
              )
            : null,
      }),
  };
}
