import i from "NY";
import { t as t_1 } from "./module-dFP.js";
export function h(e) {
  return i._(function* () {
    const t = yield fetch(e);
    const source = yield t.blob();
    return t_1({
      source,
      fileName: ((e) => {
        const t = e.headers.get("content-disposition");
        if (t) {
          const r = t.match(/filename="?([^"]+)"?/);
          if (r && r.length > 1) {
            return r[1];
          }
        }
        const i = e.url.split("/");
        const a = i[i.length - 1].split("?")[0];
        return a || "downloaded-file";
      })(t),
    });
  })();
}
