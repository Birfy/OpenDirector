import a from "z8";
import "Vx";
import t from "Ix";
import i from "bT";
import o from "yw";
import r from "i9P";
import { A } from "./module-Ob9.js";
export function f(e) {
  const { label, menuVisible, menuRef, disabled = false, onClick } = e;
  const [m, setM] = i.useState(false);
  const vRef = i.useRef(null);
  const hRef = i.useRef(null);
  const id = i.useId();
  const popupVisible = menuVisible && !disabled && m;
  i.useEffect(() => {
    if (!menuVisible || disabled) {
      setM(false);
    }
  }, [menuVisible, disabled]);
  const onBlur = (e) => {
    var l;
    if (
      !(
        e.relatedTarget === vRef.current ||
        ((l = hRef.current) == null ? undefined : l.contains(e.relatedTarget))
      )
    ) {
      setM(false);
    }
  };
  return a.jsx(t.A, {
    className: popupVisible ? A.uploadRequirementsTooltip : undefined,
    content: a.jsx("div", {
      ref: hRef,
      id,
      onClick: (e) => {
        e.stopPropagation();
      },
      onKeyDown: (e) => {
        var l;
        if (e.key === "Escape" || (e.key === "Tab" && e.shiftKey)) {
          e.preventDefault();
          e.stopPropagation();
          if ((l = vRef.current) != null) {
            l.focus();
          }
          if (e.key === "Escape") {
            setM(false);
          }
        }
      },
      onBlur,
      children: r.b(A.uploadRequirementsLink),
    }),
    trigger: ["hover", "focus"],
    popupHoverStay: true,
    blurToHide: false,
    disabled,
    popupVisible,
    onVisibleChange: setM,
    getPopupContainer: (e) => {
      var l;
      if ((l = menuRef.current) != null) {
        return l;
      }
      return e;
    },
    children: a.jsxs("button", {
      ref: vRef,
      type: "button",
      role: "menuitem",
      className: A.uploadAction,
      disabled,
      "aria-describedby": m ? id : undefined,
      onClick,
      onKeyDown: (e) => {
        var l = e.key === "Tab" && !e.shiftKey && m;
        var n = e.key === "Escape" && m;
        if (l) {
          var a;
          var t = (a = hRef.current) == null ? undefined : a.querySelector("a");
          if (t) {
            e.preventDefault();
            e.stopPropagation();
            t.focus();
          }
        }
        if (n) {
          e.preventDefault();
          e.stopPropagation();
          setM(false);
        }
      },
      onBlur,
      children: [
        a.jsx(o.nre, {
          size: 16,
          "aria-hidden": "true",
        }),
        a.jsx("span", {
          className: A.menuLabel,
          children: label,
        }),
      ],
    }),
  });
}
