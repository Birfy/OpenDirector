import n from "Rb";
import r from "fg";
import a from "fm";
import { a as a_1 } from "./module-Wqv.js";
class s extends a_1 {
  constructor(e, t) {
    if (t.task) {
      if (!t.task.submitId) {
        var i;
        t.task.submitId = (i = t.submitId) != null ? i : "";
      }
    } else {
      t.task = {
        submitId: t.submitId,
      };
    }
    super(e, t);
  }
}
export function g(e) {
  return new s(n.DMLAigcData.build(JSON.stringify(e)), r.o(e, a.Cb));
}
