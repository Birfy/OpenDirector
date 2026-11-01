import n from "oa";
import r from "bk";
import a from "qa";
import o from "z8";
import "uw5";
import s from "VAR";
import l from "bT";
var c = l.memo(function (e) {
  const { triggerProps } = e;
  const i = a._(e, ["triggerProps"]);
  const triggerProps_1 = l.useMemo(
    () =>
      r._(
        n._(
          {
            showArrow: false,
            clickOutsideToClose: true,
            containerScrollToClose: true,
            escToClose: true,
            position: "top",
            popupAlign: {
              top: 8,
              bottom: 8,
            },
          },
          triggerProps,
        ),
        {
          style: n._(
            {
              maxWidth: "unset",
            },
            triggerProps == null ? undefined : triggerProps.style,
          ),
        },
      ),
    [triggerProps],
  );
  return o.jsx(
    s.A,
    r._(
      n._(
        {
          trigger: "hover",
          blurToHide: true,
        },
        i,
      ),
      {
        triggerProps: triggerProps_1,
      },
    ),
  );
});
export { c as n };
