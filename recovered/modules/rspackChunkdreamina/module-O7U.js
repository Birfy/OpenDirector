import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import l from "iq";
var s = o.memo(function (e) {
  const { resource, label, triggerProps, referenceRenderProps = {} } = e;
  const c = i._(e, [
    "resource",
    "label",
    "triggerProps",
    "referenceRenderProps",
  ]);
  const { visualIndex = 0, axisAligned = false } = referenceRenderProps;
  const popupAlign = o.useMemo(() => {
    var e = axisAligned ? 4 : 1 & visualIndex ? 1.5 : 0;
    return {
      top: 16 + e,
      bottom: 16 + e,
    };
  }, [visualIndex, axisAligned]);
  const triggerProps_1 = o.useMemo(
    () =>
      t._(
        {
          popupAlign,
          containerScrollToClose: true,
        },
        triggerProps,
      ),
    [triggerProps, popupAlign],
  );
  return r.jsx(
    l.t,
    n._(t._({}, c), {
      previewItem: resource,
      previewLabel: label,
      triggerProps: triggerProps_1,
    }),
  );
});
export { s as t };
