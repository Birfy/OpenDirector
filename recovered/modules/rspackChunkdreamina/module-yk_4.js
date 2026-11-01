import a from "NY";
import r from "M8X";
import i from "UkV";
import o from "QD";
import { W } from "./module-oHD.js";
import s from "K8";
import { Buffer } from "wS";
export function $(e, t) {
  const n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  return a._(function* () {
    try {
      let u = "";
      const d = yield a._(function* () {
        try {
          const n = r.cQ(e, i.s);
          const a = yield n.getInstance();
          return yield a.calcFileMd5(t);
        } catch (error) {
          return s.xz(
            -1,
            "file md5 calc service cause some error: ".concat(
              error == null ? undefined : error.message,
            ),
          );
        }
      })();
      if (d.ok) {
        u = d.value;
      } else {
        const m = yield t.arrayBuffer();
        u = o.createHash("md5").update(Buffer.from(m)).digest("hex");
      }
      if (n) {
        const p = W(t.name);
        return "".concat(u, "-").concat(p);
      }
      return u;
    } catch (e) {
      return "".concat(t.name, "-").concat(t.size, "-").concat(t.type);
    }
  })();
}
