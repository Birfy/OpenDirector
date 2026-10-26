import r from "NY";
import n from "ks";
import { Y } from "./module-Gr9.js";
export function t(e) {
  return r._(function* () {
    const t = yield r._(function* () {
      let t;
      const a = yield n.y(e);
      const r = new Y(a.width, a.height);
      r.width = a.width;
      r.height = a.height;
      if ((t = r.ctx) != null) {
        t.drawImage(a, 0, 0);
      }
      return r;
    })();
    const a = t.ctx.getImageData(0, 0, t.width, t.height);
    return [t, a];
  })();
}
