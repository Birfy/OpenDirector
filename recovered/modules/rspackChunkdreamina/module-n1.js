import * as n from "./module-Br.js";
import { f as f_1 } from "./module-BL.js";
import { CC, v8, zu } from "./module-Yh_2.js";
export function Az(e) {
  const t = e == null ? undefined : e.mapping;
  if (!t) {
    return [];
  }
  const i = v8(e, "conversationId", "conversation_id");
  return Object.entries(t).flatMap((e) => {
    var t;
    var o;
    var [s, l] = e;
    if (!zu(l)) {
      return [];
    }
    var d = zu(l.author) ? l.author : undefined;
    if (v8(d, "role") !== "system" || v8(d, "name") !== "compact") {
      return [];
    }
    var u = f_1(l.extra);
    if (!u) {
      return [];
    }
    var messageId = (t = v8(l, "id")) != null ? t : s;
    var c = zu(l.metadata) ? l.metadata : undefined;
    var conversationId =
      (o = v8(c, "conversation_id", "conversationId")) != null ? o : i;
    var createTime = CC(l, "create_time", "createTime");
    var f = [];
    if (u[n.yD] !== undefined) {
      f.push(
        n.bH({
          type: n.yD,
          messageId,
          conversationId,
          createTime,
        }),
      );
    }
    if (u[n.jo] !== undefined) {
      f.push(
        n.bH({
          type: n.jo,
          messageId,
          conversationId,
          createTime,
        }),
      );
    }
    return f;
  });
}
export { jo } from "./module-Br.js";
export { yD } from "./module-Br.js";
