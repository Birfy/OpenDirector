import r from "bT";
import { Do, Qp, nk, xy, yd } from "./module-K6G.js";
export function A(e) {
  return r.useCallback(
    (t) => ({
      onKeyDown: (n) => {
        var r;
        var i;
        var l;
        var s;
        var a;
        var c;
        let u = n.keyCode || n.which;
        if (u === xy.code) {
          if ((i = t.onPressEnter) != null) {
            i.call(t, n);
          }
        }
        if (u === yd.code) {
          if ((l = t.onArrowDown) != null) {
            l.call(t, n);
          }
        }
        if (u === nk.code) {
          if ((s = t.onArrowLeft) != null) {
            s.call(t, n);
          }
        }
        if (u === Qp.code) {
          if ((a = t.onArrowRight) != null) {
            a.call(t, n);
          }
        }
        if (u === Do.code) {
          if ((c = t.onArrowUp) != null) {
            c.call(t, n);
          }
        }
        if (!(e == null || (r = e.onKeyDown) == null)) {
          r.call(e, n);
        }
      },
    }),
    [],
  );
}
