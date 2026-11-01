import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import "xj";
import i from "R8";
import c from "A3";
import s from "Nx";
import u from "Qey";
import d from "bT";
import _m from "xb";
import f from "yw";
import { J } from "./module-PR1.js";
import { A as A_1 } from "./module-CF.js";
export var Z = d.memo(function (e) {
  const {
    className,
    contentClassName,
    scrollButtonClassName,
    disabled = false,
    children,
  } = e;
  const x = o._(e, [
    "className",
    "contentClassName",
    "scrollButtonClassName",
    "disabled",
    "children",
  ]);
  const yRef = d.useRef(null);
  const [k, setK] = d.useState(false);
  const [w, setW] = d.useState(false);
  const _ = d.useCallback(() => {
    var yRef_current = yRef.current;
    if (!yRef_current || disabled) {
      setK(false);
      setW(false);
      return;
    }
    var { scrollLeft, clientWidth, scrollWidth } = yRef_current;
    var r = scrollWidth - clientWidth;
    if (r <= 4) {
      if (scrollLeft > 0) {
        yRef_current.scrollLeft = 0;
      }
      setK(false);
      setW(false);
      return;
    }
    var o = Math.min(scrollLeft, r);
    if (o !== scrollLeft) {
      yRef_current.scrollLeft = o;
    }
    setK(o > 4);
    setW(o < r - 4);
  }, [disabled]);
  const j = d.useMemo(
    () =>
      l.jsx(f.gu7, {
        size: 13,
      }),
    [],
  );
  const T = d.useMemo(
    () =>
      l.jsx(f.Vjx, {
        size: 13,
      }),
    [],
  );
  const A = d.useCallback(() => {
    var e;
    if ((e = yRef.current) != null) {
      e.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);
  const E = d.useCallback(() => {
    var yRef_current = yRef.current;
    if (yRef_current) {
      var { clientWidth, scrollWidth } = yRef_current;
      yRef_current.scrollTo({
        left: scrollWidth - clientWidth,
        behavior: "smooth",
      });
    }
  }, []);
  const { run, cancel } = s.A(_, 50);
  const { run: run_1, cancel: cancel_1 } = c.default(_, 100);
  d.useEffect(() => {
    var yRef_current = yRef.current;
    if (yRef_current) {
      var t = new ResizeObserver(run);
      var n = () => {
        t.disconnect();
        t.observe(yRef_current);
        for (var n of yRef_current.querySelectorAll("*")) {
          if (n instanceof HTMLElement) {
            t.observe(n);
          }
        }
        _();
      };
      var a = new MutationObserver(n);
      n();
      a.observe(yRef_current, {
        childList: true,
        characterData: true,
        subtree: true,
      });
      return () => {
        a.disconnect();
        t.disconnect();
        cancel();
      };
    }
  }, [_, run, cancel]);
  d.useEffect(() => {
    _();
  }, [children, _]);
  d.useEffect(() => () => cancel_1(), [cancel_1]);
  return l.jsx(
    J,
    r._(a._({}, x), {
      className,
      contentClassName,
      contentRef: yRef,
      disabled,
      leftScrollable: k,
      onContentScroll: run_1,
      rightScrollable: w,
      scrollControls: l.jsxs(l.Fragment, {
        children: [
          !disabled && k
            ? l.jsx("div", {
                className: _m(
                  A_1.scrollButtonContainer,
                  A_1.scrollLeftButtonContainer,
                ),
                children: l.jsx(i.A, {
                  className: _m(A_1.scrollButton, scrollButtonClassName),
                  "aria-label": u.Ay.t(
                    "web_agent_subject_material_scroll_versions_left",
                    {},
                    "向左滚动",
                  ),
                  icon: j,
                  onClick: A,
                }),
              })
            : null,
          !disabled && w
            ? l.jsx("div", {
                className: _m(
                  A_1.scrollButtonContainer,
                  A_1.scrollRightButtonContainer,
                ),
                children: l.jsx(i.A, {
                  className: _m(A_1.scrollButton, scrollButtonClassName),
                  "aria-label": u.Ay.t(
                    "web_agent_subject_material_scroll_versions_right",
                    {},
                    "向右滚动",
                  ),
                  icon: T,
                  onClick: E,
                }),
              })
            : null,
        ],
      }),
      children,
    }),
  );
});
