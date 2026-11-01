import r from "z8";
import n from "Qey";
import i from "ED";
import o from "bT";
import s from "wF";
import "xj";
import c from "R8";
import l from "yw";
import * as d from "./module-BDd.js";
import { A } from "./module-Y4F.js";
import { i as i_1 } from "./module-F5u.js";
import v from "VB";
function p(e) {
  const {
    appearance,
    backLabel,
    children,
    className,
    contentClassName,
    contentLayout = "plain",
    hideHeader = false,
    onBack,
  } = e;
  return r.jsx(d.z, {
    appearance,
    className,
    contentClassName,
    contentLayout,
    hideHeader,
    headerContent:
      appearance === "main-frame-2026"
        ? r.jsx(c.A, {
            type: "text",
            className: A.backButton,
            "aria-label": backLabel,
            onClick: onBack,
            children: r.jsx(l.Gk, {
              size: 20,
              "aria-hidden": "true",
            }),
          })
        : null,
    children,
  });
}
function useH(e) {
  const {
    backLabel,
    children,
    className,
    contentClassName,
    contentLayout,
    hideHeader,
    onBack,
    presentation = "standard",
    registerWithMainFrame = true,
  } = e;
  const v = s.h(i_1);
  const g = o.useId();
  o.useLayoutEffect(() => {
    if (registerWithMainFrame) {
      var e = v.registerDetailSurface({
        id: g,
        presentation,
      });
      return () => e.dispose();
    }
  }, [g, presentation, registerWithMainFrame, v]);
  return r.jsx(p, {
    appearance: "main-frame-2026",
    backLabel,
    className,
    contentClassName,
    contentLayout,
    hideHeader,
    onBack,
    children,
  });
}
function useG(e) {
  const {
    backLabel,
    children,
    className,
    contentClassName,
    contentLayout,
    hideHeader,
    onBack,
    presentation = "standard",
    registerWithMainFrame = true,
  } = e;
  const g = s.h(i_1);
  const f = o.useId();
  const [b, setB] = o.useState(false);
  v.f(() => {
    setB(true);
    return () => setB(false);
  });
  o.useLayoutEffect(() => {
    if (b && registerWithMainFrame) {
      var e = g.registerDetailSurface({
        id: f,
        presentation,
      });
      return () => e.dispose();
    }
  }, [f, b, presentation, registerWithMainFrame, g]);
  return r.jsx(p, {
    appearance: "main-frame-2026",
    backLabel,
    className,
    contentClassName,
    contentLayout,
    hideHeader,
    onBack,
    children,
  });
}
export var t = i.PA(function (e) {
  const {
    children,
    className,
    contentClassName,
    contentLayout,
    frameChrome = "preserve",
    hideHeader,
    lifecycle = "mount",
    onBack,
    registerWithMainFrame = true,
  } = e;
  const backLabel = n.Ay.t("web_search_empty_return_to_homepage", {}, "返回");
  return r.jsx(lifecycle === "keep-alive-route" ? useG : useH, {
    backLabel,
    className,
    contentClassName,
    contentLayout,
    hideHeader,
    onBack,
    presentation: frameChrome === "hide" ? "immersive" : "standard",
    registerWithMainFrame,
    children,
  });
});
