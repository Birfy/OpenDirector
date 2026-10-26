import t from "z8";
import n from "bT";
import _i from "xb";
import o from "n5f";
export var M = n.memo(function (e) {
  const {
    children,
    className,
    contentClassName,
    transitionDuration = "var(--content-generator-collapse-transition-duration)",
    transitionTimingFunction = "var(--content-generator-collapse-transition-timing-function)",
  } = e;
  const dRef = n.useRef(null);
  const c = n.useCallback((e) => e.height, []);
  const m = o.w(dRef, c, 0);
  const style = n.useMemo(
    () => ({
      height: "".concat(m, "px"),
      "--content-generator-auto-height-transition-duration": transitionDuration,
      "--content-generator-auto-height-transition-timing-function":
        transitionTimingFunction,
    }),
    [m, transitionDuration, transitionTimingFunction],
  );
  return t.jsx("div", {
    className: _i("auto-height-transition-PR4OuQ", className),
    "data-content-generator-auto-height-transition": true,
    style,
    children: t.jsx("div", {
      ref: dRef,
      className: _i("auto-height-transition-content-lBF5NV", contentClassName),
      children,
    }),
  });
});
