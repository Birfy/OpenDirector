import r from "bT";
import { Do, Qp, nk, xy, yd } from "./module-uRm.js";
export function A(e) {
  return r.useCallback(function (t) {
    return {
      onKeyDown: function (n) {
        let r;
        let i;
        let l;
        let a;
        let c;
        let u;
        const s = n.keyCode || n.which;
        if (s === xy.code) {
          if ((r = t.onPressEnter) != null) {
            r.call(t, n);
          }
        }
        if (s === yd.code) {
          if ((i = t.onArrowDown) != null) {
            i.call(t, n);
          }
        }
        if (s === nk.code) {
          if ((l = t.onArrowLeft) != null) {
            l.call(t, n);
          }
        }
        if (s === Qp.code) {
          if ((a = t.onArrowRight) != null) {
            a.call(t, n);
          }
        }
        if (s === Do.code) {
          if ((c = t.onArrowUp) != null) {
            c.call(t, n);
          }
        }
        if ((u = e == null ? undefined : e.onKeyDown) != null) {
          u.call(e, n);
        }
      },
    };
  }, []);
}
