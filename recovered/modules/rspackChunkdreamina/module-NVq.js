import n from "z8";
import t from "bT";
import a from "gY";
import o from "Hk9";
import l from "wYv";
export var _ = t.memo(function (e) {
  const {
    children,
    disabled = false,
    contextViewIds = [],
    tipPos = "right",
  } = e;
  const {
    ccpcCommerceLandingModalContent,
    ccpcPopupVisible,
    onCCPCVisibleChange,
    ccpcTooltipClassName,
  } = l.f(contextViewIds);
  const triggerProps = t.useMemo(
    () => ({
      popupAlign: {
        right: 7,
        bottom: 4,
      },
    }),
    [],
  );
  return n.jsx(o.I, {
    popupVisible: ccpcPopupVisible,
    triggerProps,
    position: tipPos,
    trigger: "hover",
    showArrow: false,
    disabled: a.A(ccpcCommerceLandingModalContent) || disabled,
    className: ccpcTooltipClassName,
    content: ccpcCommerceLandingModalContent,
    onVisibleChange: onCCPCVisibleChange,
    children,
  });
});
