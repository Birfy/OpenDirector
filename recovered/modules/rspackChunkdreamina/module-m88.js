import a from "oa";
import r from "bk";
import o from "z8";
import l from "bT";
import _i from "xb";
import { N as N_1 } from "./module-Bxb.js";
import * as u from "./module-qoD.js";
import { F } from "./module-Wu_2.js";
const collapsedClassName = "collapsed-GtuKb_";
const v = "expand-transition-start-kdIFZR";
export var w = l.memo(function (e) {
  const {
    animatedBackground,
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
  const { collapsed, expandTransitionStart } = N_1();
  const _ = l.useMemo(() => {
    if (renderGeneratorTypeTabs == null) {
      return undefined;
    }
    return renderGeneratorTypeTabs();
  }, [renderGeneratorTypeTabs]);
  const [j, setJ] = l.useState(null);
  const contentGeneratorRef = l.useMemo(
    () => ({
      current: j,
    }),
    [j],
  );
  const E = l.useMemo(
    () =>
      o.jsx("div", {
        className: _i("collapsed-submit-button-container-sMjtF7", {
          [collapsedClassName]: collapsed,
        }),
        children:
          renderGeneratorSubmitButton == null
            ? undefined
            : renderGeneratorSubmitButton({
                className: _i("collapsed-submit-button-AWJ29W", {
                  [collapsedClassName]: collapsed,
                  [v]: expandTransitionStart,
                }),
              }),
      }),
    [collapsed, expandTransitionStart, renderGeneratorSubmitButton],
  );
  const renderGeneratorMainContent_1 = l.useCallback(
    (e) =>
      o.jsxs(o.Fragment, {
        children: [
          renderGeneratorMainContent == null
            ? undefined
            : renderGeneratorMainContent(e),
          E,
        ],
      }),
    [renderGeneratorMainContent, E],
  );
  const renderGeneratorSubmitButton_1 = l.useCallback(
    (e) => {
      if (renderGeneratorSubmitButton == null) {
        return undefined;
      }
      return renderGeneratorSubmitButton(
        r._(a._({}, e), {
          className: _i(
            e == null ? undefined : e.className,
            "submit-button-gLfIe7",
            {
              [collapsedClassName]: collapsed,
              [v]: expandTransitionStart,
            },
          ),
        }),
      );
    },
    [collapsed, expandTransitionStart, renderGeneratorSubmitButton],
  );
  const S = l.useMemo(
    () =>
      children({
        renderGeneratorMainContent: renderGeneratorMainContent_1,
        renderGeneratorReferences,
        renderGeneratorSubmitButton: renderGeneratorSubmitButton_1,
        renderGeneratorToolbar,
      }),
    [
      renderGeneratorReferences,
      renderGeneratorMainContent_1,
      renderGeneratorSubmitButton_1,
      renderGeneratorToolbar,
      children,
    ],
  );
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(F, {
        collapsed,
        collapsedClassName,
        contentGeneratorRef,
        floatingPanelClassName: "floating-panel-container-WkqgYu",
        renderGeneratorFloatingPanel,
        renderGeneratorTaskIndicator,
        stackClassName: "floating-panel-stack-Dt6CxT",
        taskIndicatorClassName: "task-indicator-cRTz5I",
        taskIndicatorContainerClassName: "task-indicator-container-G_P2V_",
      }),
      o.jsxs(u.d, {
        ref: setJ,
        className: _i("default-layout-cX8mdn", className, {
          "animated-background-f7kIXK": animatedBackground,
          [collapsedClassName]: collapsed,
        }),
        onMouseEnter,
        onMouseLeave,
        children: [animatedBackground, _, S],
      }),
    ],
  });
});
