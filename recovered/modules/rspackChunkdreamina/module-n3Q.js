import r from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import "uw5";
import l from "VAR";
import s from "bT";
import { fs } from "./module-SNb.js";
export var I = s.memo(function (e) {
  const { style, triggerProps } = e;
  const u = o._(e, ["style", "triggerProps"]);
  const triggerProps_1 = s.useMemo(
    () =>
      a._(
        r._(
          {
            showArrow: false,
            clickOutsideToClose: true,
            containerScrollToClose: true,
            escToClose: true,
            position: "bl",
            popupAlign: {
              top: fs,
              bottom: fs,
            },
          },
          triggerProps,
        ),
        {
          style: r._(
            {
              maxWidth: "unset",
            },
            style,
            triggerProps == null ? undefined : triggerProps.style,
          ),
        },
      ),
    [style, triggerProps],
  );
  return i.jsx(
    l.A,
    a._(
      r._(
        {
          trigger: "click",
          blurToHide: true,
        },
        u,
      ),
      {
        triggerProps: triggerProps_1,
      },
    ),
  );
});
