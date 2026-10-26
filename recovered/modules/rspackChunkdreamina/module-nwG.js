import i from "NY";
import { y } from "./module-H1B.js";
export function q(e, t, r) {
  return i._(function* () {
    let i;
    const n = yield y(e);
    let o = document.createElement("canvas");
    const s = o.getContext("2d");
    o.width = t;
    o.height = r;
    if (!s) {
      return "";
    }
    s.drawImage(n, 0, 0, n.width, n.height, 0, 0, t, r);
    const m = (i = o == null ? undefined : o.toDataURL()) != null ? i : "";
    if (o) {
      if (s) {
        s.clearRect(0, 0, o.width, o.height);
      }
      o.width = 0;
      o.height = 0;
      o = null;
    }
    return m;
  })();
}
