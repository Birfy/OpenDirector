import r from "oa";
import n from "bk";
import a from "z8";
import o from "bT";
import * as s from "./module-H6.js";
import { A } from "./module-HH.js";
export function h(e) {
  const { preview, moreAction, visible, triggerRef, onVisibleChange } = e;
  const mRef = o.useRef(null);
  const pRef = o.useRef(false);
  const h = () => {
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
  const v = () => {
    var e;
    pRef.current = true;
    if ((e = h()) != null) {
      e.focus();
    }
    pRef.current = false;
  };
  return {
    onTriggerKeyDown: (e) => {
      if (
        e.key === "Tab" &&
        !e.shiftKey &&
        visible &&
        moreAction &&
        e.target === h()
      ) {
        var t;
        var r =
          (t = mRef.current) == null ? undefined : t.querySelector("button");
        if (r) {
          e.preventDefault();
          e.stopPropagation();
          r.focus();
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
      var i;
      if (
        !(
          ((t = mRef.current) == null
            ? undefined
            : t.contains(e.relatedTarget)) ||
          ((i = triggerRef.current) == null
            ? undefined
            : i.contains(e.relatedTarget))
        )
      ) {
        onVisibleChange(false);
      }
    },
    onVisibleChange: (e) => {
      var t;
      if (
        !(
          (e && pRef.current) ||
          (!e &&
            ((t = mRef.current) == null
              ? undefined
              : t.contains(document.activeElement)))
        )
      ) {
        onVisibleChange(e);
      }
    },
    popup: () =>
      a.jsx("div", {
        ref: mRef,
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
            v();
            onVisibleChange(false);
          }
        },
        children:
          visible && preview
            ? a.jsx(
                s.a,
                {
                  preview,
                  moreAction: moreAction
                    ? n._(r._({}, moreAction), {
                        onClick: () => {
                          v();
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
