import a from "oa";
import r from "bk";
import i from "qa";
import o from "z8";
import l from "bT";
import s from "yw";
import c from "wF";
import u from "Kt";
import d from "Dla";
import { T } from "./module-Akd.js";
var p = l.memo(function (e) {
  const { audioUrl, duration, icon, label, onClick } = e;
  const g = i._(e, ["audioUrl", "duration", "icon", "label", "onClick"]);
  const f = c.h(u._);
  const icon_1 = l.useMemo(() => {
    if (icon != null) {
      return icon;
    }
    return o.jsx(s.jQO, {});
  }, [icon]);
  const onClick_1 = l.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && audioUrl) {
        d.H(f, {
          items: [
            {
              type: "audio",
              url: audioUrl,
              duration,
              name: label,
            },
          ],
        });
      }
    },
    [f, audioUrl, duration, label, onClick],
  );
  return o.jsx(
    T,
    r._(a._({}, g), {
      icon: icon_1,
      label,
      onClick: onClick_1,
    }),
  );
});
export { p as a };
