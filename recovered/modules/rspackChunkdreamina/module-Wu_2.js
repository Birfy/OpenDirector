import a from "z8";
import r from "bT";
import _o from "xb";
import { w } from "./module-n5f.js";
import c from "./module-JB.js";
import s from "./module-Ps.js";
const u = r.memo(function (e) {
  let t;
  const {
    collapsed,
    className,
    collapsedClassName,
    renderGeneratorFloatingPanel,
    style,
  } = e;
  const className_1 = _o(className, {
    [collapsedClassName != null ? collapsedClassName : ""]: collapsed,
  });
  if (
    (t =
      renderGeneratorFloatingPanel == null
        ? undefined
        : renderGeneratorFloatingPanel({
            className: className_1,
            style,
          })) != null
  ) {
    return t;
  }
  return null;
});
export var F = r.memo(function (e) {
  const {
    collapsed,
    collapsedClassName,
    contentGeneratorRef,
    floatingPanelClassName,
    renderGeneratorFloatingPanel,
    renderGeneratorTaskIndicator,
    stackClassName,
    taskIndicatorClassName,
    taskIndicatorContainerClassName,
  } = e;
  const p = r.useCallback((e) => e.height, []);
  const g = w(contentGeneratorRef, p, collapsed ? c.w3 : c.gw);
  const style = r.useMemo(
    () => ({
      "--content-generator-collapse-transition-duration": "".concat(s.Pb, "ms"),
      "--content-generator-collapse-transition-timing-function": s.Ir,
      "--content-generator-height": "".concat(g, "px"),
    }),
    [g],
  );
  const children = r.useMemo(() => {
    if (renderGeneratorTaskIndicator == null) {
      return undefined;
    }
    return renderGeneratorTaskIndicator({
      className: taskIndicatorClassName,
    });
  }, [renderGeneratorTaskIndicator, taskIndicatorClassName]);
  return a.jsxs("div", {
    "data-content-generator-floating-panel-stack": true,
    className: _o(stackClassName, {
      [collapsedClassName]: collapsed,
    }),
    style,
    children: [
      a.jsx("div", {
        "data-task-indicator-container": true,
        className: taskIndicatorContainerClassName,
        children,
      }),
      a.jsx(u, {
        collapsed,
        className: floatingPanelClassName,
        collapsedClassName,
        renderGeneratorFloatingPanel,
        style,
      }),
    ],
  });
});
