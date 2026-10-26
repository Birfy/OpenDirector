import r from "zS";
import n from "bT";
import { nv } from "./module-vy_2.js";
export function BJ(e) {
  const { anchorRef, enabled } = e;
  const [o, setO] = n.useState(0);
  return [
    o,
    r.A(() => {
      if (enabled) {
        var e;
        var r = anchorRef.current;
        if (r) {
          setO(
            ((e) => {
              const { anchorRight, rightInset, viewportWidth } = e;
              return Math.max(
                0,
                viewportWidth -
                  (Number.isFinite(rightInset) ? Math.max(0, rightInset) : 0) -
                  8 -
                  anchorRight,
              );
            })({
              anchorRight: r.getBoundingClientRect().right,
              rightInset: Number.isFinite(
                (e = Number.parseFloat(
                  getComputedStyle(r).getPropertyValue(nv),
                )),
              )
                ? e
                : 0,
              viewportWidth: document.documentElement.clientWidth,
            }),
          );
        }
      }
    }),
  ];
}
