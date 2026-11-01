import r from "fg";
import a from "fm";
import { q } from "./module-ihc.js";
import { t as t_1 } from "./module-EMo.js";
export function E(e) {
  const t = r.o(JSON.parse(e), a.Cb);
  if (t_1(t)) {
    const i = r.o(JSON.parse(t.customInfo), a.Cb);
    if (q(i)) {
      return {
        type: i.type,
        title: i.type === "frame" ? i.title : i.text,
        layerId: t.layerId,
      };
    }
  }
}
