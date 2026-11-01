import r from "oa";
import n from "bk";
import i from "qa";
import o from "z8";
import "xj";
import s from "R8";
import c from "A3";
import l from "Nx";
import d from "Qey";
import u from "bT";
import _p from "xb";
import h from "yw";
import { J } from "./module-PR1_2.js";
import { A as A_1 } from "./module-CF_3.js";
export var Z = u.memo(function (e) {
  const {
    className,
    contentClassName,
    scrollButtonClassName,
    disabled = false,
    children,
  } = e;
  const j = i._(e, [
    "className",
    "contentClassName",
    "scrollButtonClassName",
    "disabled",
    "children",
  ]);
  const yRef = u.useRef(null);
  const [w, setW] = u.useState(false);
  const [_, set_] = u.useState(false);
  const x = u.useCallback(() => {
    var yRef_current = yRef.current;
    if (!yRef_current || disabled) {
      setW(false);
      set_(false);
      return;
    }
    var { scrollLeft, clientWidth, scrollWidth } = yRef_current;
    var n = scrollWidth - clientWidth;
    if (n <= 4) {
      if (scrollLeft > 0) {
        yRef_current.scrollLeft = 0;
      }
      setW(false);
      set_(false);
      return;
    }
    var i = Math.min(scrollLeft, n);
    if (i !== scrollLeft) {
      yRef_current.scrollLeft = i;
    }
    setW(i > 4);
    set_(i < n - 4);
  }, [disabled]);
  const S = u.useMemo(
    () =>
      o.jsx(h.gu7, {
        size: 13,
      }),
    [],
  );
  const R = u.useMemo(
    () =>
      o.jsx(h.Vjx, {
        size: 13,
      }),
    [],
  );
  const N = u.useCallback(() => {
    var e;
    if ((e = yRef.current) != null) {
      e.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);
  const A = u.useCallback(() => {
    var yRef_current = yRef.current;
    if (yRef_current) {
      var { clientWidth, scrollWidth } = yRef_current;
      yRef_current.scrollTo({
        left: scrollWidth - clientWidth,
        behavior: "smooth",
      });
    }
  }, []);
  const { run, cancel } = l.A(x, 50);
  const { run: run_1, cancel: cancel_1 } = c.default(x, 100);
  u.useEffect(() => {
    var yRef_current = yRef.current;
    if (yRef_current) {
      var t = new ResizeObserver(run);
      var a = () => {
        t.disconnect();
        t.observe(yRef_current);
        for (var a of yRef_current.querySelectorAll("*")) {
          if (a instanceof HTMLElement) {
            t.observe(a);
          }
        }
        x();
      };
      var r = new MutationObserver(a);
      a();
      r.observe(yRef_current, {
        childList: true,
        characterData: true,
        subtree: true,
      });
      return () => {
        r.disconnect();
        t.disconnect();
        cancel();
      };
    }
  }, [x, run, cancel]);
  u.useEffect(() => {
    x();
  }, [children, x]);
  u.useEffect(() => () => cancel_1(), [cancel_1]);
  return o.jsx(
    J,
    n._(r._({}, j), {
      className,
      contentClassName,
      contentRef: yRef,
      disabled,
      leftScrollable: w,
      onContentScroll: run_1,
      rightScrollable: _,
      scrollControls: o.jsxs(o.Fragment, {
        children: [
          !disabled && w
            ? o.jsx("div", {
                className: _p(
                  A_1.scrollButtonContainer,
                  A_1.scrollLeftButtonContainer,
                ),
                children: o.jsx(s.A, {
                  className: _p(A_1.scrollButton, scrollButtonClassName),
                  "aria-label": d.Ay.t(
                    "web_agent_subject_material_scroll_versions_left",
                    {},
                    "向左滚动",
                  ),
                  icon: S,
                  onClick: N,
                }),
              })
            : null,
          !disabled && _
            ? o.jsx("div", {
                className: _p(
                  A_1.scrollButtonContainer,
                  A_1.scrollRightButtonContainer,
                ),
                children: o.jsx(s.A, {
                  className: _p(A_1.scrollButton, scrollButtonClassName),
                  "aria-label": d.Ay.t(
                    "web_agent_subject_material_scroll_versions_right",
                    {},
                    "向右滚动",
                  ),
                  icon: R,
                  onClick: A,
                }),
              })
            : null,
        ],
      }),
      children,
    }),
  );
});
