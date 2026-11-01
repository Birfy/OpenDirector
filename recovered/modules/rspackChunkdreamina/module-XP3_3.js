import a from "oa";
import t from "bk";
import i from "z8";
import o from "bT";
import * as r from "./module-H6_3.js";
import { A } from "./module-HH_4.js";
export function h(e) {
  const { preview, moreAction, visible, triggerRef, onVisibleChange } = e;
  const mRef = o.useRef(null);
  const pRef = o.useRef(false);
  const v = () => {
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
  const h = () => {
    var e;
    pRef.current = true;
    if ((e = v()) != null) {
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
        e.target === v()
      ) {
        var l;
        var a =
          (l = mRef.current) == null ? undefined : l.querySelector("button");
        if (a) {
          e.preventDefault();
          e.stopPropagation();
          a.focus();
        }
      } else {
        if (e.key === "Escape" && visible) {
          e.stopPropagation();
          onVisibleChange(false);
        }
      }
    },
    onTriggerBlur: (e) => {
      var l;
      var n;
      if (
        !(
          ((l = mRef.current) == null
            ? undefined
            : l.contains(e.relatedTarget)) ||
          ((n = triggerRef.current) == null
            ? undefined
            : n.contains(e.relatedTarget))
        )
      ) {
        onVisibleChange(false);
      }
    },
    onVisibleChange: (e) => {
      var l;
      if (
        !(
          (e && pRef.current) ||
          (!e &&
            ((l = mRef.current) == null
              ? undefined
              : l.contains(document.activeElement)))
        )
      ) {
        onVisibleChange(e);
      }
    },
    popup: () =>
      i.jsx("div", {
        ref: mRef,
        className: A.popup,
        onBlur: (e) => {
          var l;
          if (
            !(
              e.currentTarget.contains(e.relatedTarget) ||
              ((l = triggerRef.current) == null
                ? undefined
                : l.contains(e.relatedTarget))
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
            h();
            onVisibleChange(false);
          }
        },
        children:
          visible && preview
            ? i.jsx(
                r.a,
                {
                  preview,
                  moreAction: moreAction
                    ? t._(a._({}, moreAction), {
                        onClick: () => {
                          h();
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
