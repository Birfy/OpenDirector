import a from "z8";
import "Vx";
import "uw5";
import t from "Ix";
import i from "VAR";
import o from "bT";
import _r from "xb";
import c from "Qey";
import d from "yw";
import u from "Rrw";
import m from "Si";
import * as p from "./module-FGG.js";
import { A as A_1 } from "./module-Ob9.js";
export function x(e) {
  const {
    label,
    className,
    onCreateWithAgent,
    onCreateManually,
    onUploadClick,
    onUpload,
  } = e;
  const g = u.F();
  const [f, setF] = o.useState(false);
  const [w, setW] = o.useState(false);
  const ref = o.useRef(null);
  const yRef = o.useRef(null);
  const CRef = o.useRef(null);
  const NRef = o.useRef(false);
  const id = o.useId();
  const T = c.Ay.t("skill_menu_create_with_agent", {}, "Create with agent");
  const S = c.Ay.t("skill_package_menu_manual_create", {}, "Write skill");
  const label_1 = c.Ay.t("skill_package_menu_upload", {}, "Upload skill");
  const F = o.useCallback(() => {
    var e;
    setW(false);
    if ((e = yRef.current) != null) {
      e.focus();
    }
  }, []);
  o.useEffect(() => {
    var _Ref_current = ref.current;
    if (_Ref_current != null) {
      _Ref_current.addEventListener("cancel", F);
    }
    return () => {
      if (_Ref_current == null) {
        return undefined;
      }
      return _Ref_current.removeEventListener("cancel", F);
    };
  }, [F]);
  o.useEffect(() => {
    if (f && NRef.current) {
      var e;
      var l;
      if (
        !((l = CRef.current) == null || (e = l.querySelector("button")) == null)
      ) {
        e.focus();
      }
      NRef.current = false;
    }
  }, [f]);
  const content = a.jsxs("div", {
    ref: CRef,
    id,
    role: "menu",
    "aria-label": label,
    className: _r(A_1.menu, {
      [A_1.menuCn]: true,
    }),
    onKeyDown: (e) => {
      e.stopPropagation();
      if (e.key === "Escape" || e.key === "ArrowLeft") {
        e.preventDefault();
        setF(false);
        if ((n = yRef.current) != null) {
          n.focus();
        }
        return;
      }
      if (e.key === "Tab") {
        setF(false);
        if ((a = yRef.current) != null) {
          a.focus();
        }
        return;
      }
      var l;
      var n;
      var a;
      var t = {
        ArrowDown: 1,
        ArrowUp: -1,
      }[e.key];
      if (t) {
        e.preventDefault();
        var i = Array.from(e.currentTarget.querySelectorAll("button"));
        var o = i.indexOf(document.activeElement);
        if ((l = i[(o + t + i.length) % i.length]) != null) {
          l.focus();
        }
      }
    },
    children: [
      onCreateWithAgent &&
        a.jsxs("button", {
          type: "button",
          role: "menuitem",
          onClick: () => {
            setF(false);
            if (onCreateWithAgent != null) {
              onCreateWithAgent();
            }
          },
          children: [
            a.jsx(d.O1g, {
              size: 16,
              "aria-hidden": "true",
            }),
            a.jsx(t.A, {
              content: T,
              checkOverflow: true,
              children: a.jsx("span", {
                className: A_1.menuLabel,
                children: T,
              }),
            }),
          ],
        }),
      a.jsxs("button", {
        type: "button",
        role: "menuitem",
        onClick: () => {
          setF(false);
          onCreateManually();
        },
        children: [
          a.jsx(d.GI1, {
            size: 16,
            "aria-hidden": "true",
          }),
          a.jsx(t.A, {
            content: S,
            checkOverflow: true,
            children: a.jsx("span", {
              className: A_1.menuLabel,
              children: S,
            }),
          }),
        ],
      }),
      g &&
        a.jsx(p.f, {
          label: label_1,
          menuVisible: f,
          menuRef: CRef,
          onClick: () => {
            var e;
            if (u.F() && onUploadClick()) {
              setW(true);
              setF(false);
              if ((e = ref.current) != null) {
                e.click();
              }
            }
          },
        }),
    ],
  });
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(i.A, {
        content,
        trigger: "hover",
        triggerProps: {
          clickToClose: false,
          popupAlign: {
            right: 8,
          },
        },
        position: "rt",
        showArrow: false,
        className: A_1.popover,
        popupVisible: f,
        onVisibleChange: setF,
        children: a.jsxs("button", {
          ref: yRef,
          type: "button",
          className: _r(A_1.trigger, className, {
            [A_1.pickingFile]: w,
          }),
          onClick: (e) => {
            e.stopPropagation();
            NRef.current = e.detail === 0;
            setF(true);
          },
          onKeyDown: (e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
              e.preventDefault();
              e.stopPropagation();
              if (f) {
                var l;
                var n;
                if (
                  !(
                    (n = CRef.current) == null ||
                    (l = n.querySelector("button")) == null
                  )
                ) {
                  l.focus();
                }
                return;
              }
              NRef.current = true;
              setF(true);
            }
          },
          "aria-haspopup": "menu",
          "aria-expanded": f,
          "aria-controls": f ? id : undefined,
          children: [
            a.jsx(d.xZp, {
              size: 16,
              "aria-hidden": "true",
            }),
            a.jsx("span", {
              children: label,
            }),
            a.jsx(d.Vjx, {
              size: 16,
              "aria-hidden": "true",
            }),
          ],
        }),
      }),
      a.jsx("input", {
        ref,
        type: "file",
        accept: m.ds.join(","),
        hidden: true,
        onChange: (e) => {
          var l;
          var n = (l = e.currentTarget.files) == null ? undefined : l[0];
          e.currentTarget.value = "";
          F();
          if (n !== undefined && u.F()) {
            onUpload(n);
          }
        },
      }),
    ],
  });
}
