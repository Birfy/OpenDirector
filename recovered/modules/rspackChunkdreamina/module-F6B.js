import r from "NY";
import * as n from "./module-WCZ.js";
import { t as t_1 } from "./module-RV6.js";
export function R(e, t, a) {
  return r._(function* () {
    const [r, s] = yield t_1(e);
    for (let o = s.data, l = 0; l < o.length; l += 4) {
      if (
        (o[l + n.AG] === n.lO[n.AG] &&
          o[l + n.tw] === n.lO[n.tw] &&
          o[l + n.A4] === n.lO[n.A4]) ||
        o[l + n.HG] < n.DJ
      ) {
        o[l + n.AG] = t[n.AG];
        o[l + n.tw] = t[n.tw];
        o[l + n.A4] = t[n.A4];
        o[l + n.HG] = t[n.HG];
      } else {
        o[l] = a[n.AG];
        o[l + 1] = a[n.tw];
        o[l + 2] = a[n.A4];
        o[l + 3] = a[n.HG];
      }
    }
    r.ctx.putImageData(s, 0, 0);
    const c = r.getOriginalDataUrl();
    r.destroy();
    return [c, s];
  })();
}
