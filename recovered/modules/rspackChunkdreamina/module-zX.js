import a from "oa";
import r from "bk";
import o from "z8";
import l from "bT";
import _i from "xb";
import { N as N_1 } from "./module-Bxb.js";
import * as u from "./module-qoD.js";
import { F } from "./module-Wu_2.js";
const collapsedClassName = "collapsed-rWIyCe";
const v = "expand-transition-start-jCEKbp";
export var L = l.memo(function (e) {
  const {
    className,
    renderGeneratorSubmitButton,
    renderGeneratorMainContent,
    renderGeneratorReferences,
    renderGeneratorTaskIndicator,
    renderGeneratorFloatingPanel,
    renderGeneratorToolbar,
    renderGeneratorTypeTabs,
    children,
  } = e;
  const { collapsed, expandTransitionStart } = N_1();
  const C = l.useMemo(() => {
    if (renderGeneratorTypeTabs == null) {
      return undefined;
    }
    return renderGeneratorTypeTabs();
  }, [renderGeneratorTypeTabs]);
  const wRef = l.useRef(null);
  const N = l.useMemo(
    () =>
      o.jsx("div", {
        className: _i("collapsed-submit-button-container-xniC4G", {
          [collapsedClassName]: collapsed,
        }),
        children:
          renderGeneratorSubmitButton == null
            ? undefined
            : renderGeneratorSubmitButton({
                className: _i("collapsed-submit-button-RO2SS1", {
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
          N,
        ],
      }),
    [renderGeneratorMainContent, N],
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
            "submit-button-pPAJYk",
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
  const T = l.useMemo(
    () =>
      children({
        renderGeneratorSubmitButton: renderGeneratorSubmitButton_1,
        renderGeneratorMainContent: renderGeneratorMainContent_1,
        renderGeneratorReferences,
        renderGeneratorToolbar,
      }),
    [
      renderGeneratorSubmitButton_1,
      renderGeneratorReferences,
      renderGeneratorMainContent_1,
      renderGeneratorToolbar,
      children,
    ],
  );
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(F, {
        collapsed,
        collapsedClassName,
        contentGeneratorRef: wRef,
        floatingPanelClassName: "floating-panel-container-ZYO7jY",
        renderGeneratorFloatingPanel,
        renderGeneratorTaskIndicator,
        stackClassName: "floating-panel-stack-whqt5B",
        taskIndicatorClassName: "task-indicator-yuxX6C",
        taskIndicatorContainerClassName: "task-indicator-container-aQvaun",
      }),
      o.jsxs(u.d, {
        ref: wRef,
        className: _i("canvas-layout-LYjkH9", className, {
          [collapsedClassName]: collapsed,
        }),
        children: [C, T],
      }),
    ],
  });
});
