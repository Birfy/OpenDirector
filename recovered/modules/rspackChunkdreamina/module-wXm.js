import a from "z8";
import r from "bT";
import _o from "xb";
import * as i from "./module-qoD.js";
import { F } from "./module-Wu_2.js";
var s = r.memo(function (e) {
  const {
    className,
    onMouseEnter,
    onMouseLeave,
    renderGeneratorFloatingPanel,
    renderGeneratorMainContent,
    renderGeneratorReferences,
    renderGeneratorSubmitButton,
    renderGeneratorTaskIndicator,
    renderGeneratorToolbar,
    renderGeneratorTypeTabs,
    children,
  } = e;
  const [p, setP] = r.useState(null);
  const contentGeneratorRef = r.useMemo(
    () => ({
      current: p,
    }),
    [p],
  );
  return a.jsxs("div", {
    className: _o("layout-tJRvh4", className),
    "data-generator-layout": "capsule",
    children: [
      a.jsx("div", {
        className: "modes-N5LQ7x",
        children:
          renderGeneratorTypeTabs == null
            ? undefined
            : renderGeneratorTypeTabs(),
      }),
      a.jsxs("div", {
        className: "input-p8fuMh",
        children: [
          a.jsx(F, {
            collapsed: false,
            collapsedClassName: "collapsed-gJarKE",
            contentGeneratorRef,
            floatingPanelClassName: "floating-panel-LLtErs",
            renderGeneratorFloatingPanel,
            renderGeneratorTaskIndicator,
            stackClassName: "floating-stack-a3WfJ1",
            taskIndicatorClassName: "task-indicator-nf3PnS",
            taskIndicatorContainerClassName: "task-indicator-container-v3GVoK",
          }),
          a.jsx(i.d, {
            ref: setP,
            className: "body-ab9gaL",
            onMouseEnter,
            onMouseLeave,
            children: children({
              renderGeneratorMainContent,
              renderGeneratorReferences,
              renderGeneratorSubmitButton,
              renderGeneratorToolbar,
            }),
          }),
        ],
      }),
    ],
  });
});
export { s as i };
