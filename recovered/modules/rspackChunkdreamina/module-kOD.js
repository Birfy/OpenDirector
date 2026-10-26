import n from "SR";
import { vw } from "./module-WY_2.js";
import { T, f } from "./module-BL.js";
export function c(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    const i = e[t];
    if (i instanceof n.NuroAssistantMessage) {
      const o = f(i.extra);
      const s = o ? T(o, "error_code", "errorCode") : undefined;
      if (o && s) {
        return {
          kind: "failure",
          errorCode: vw(s),
          errorMessage: T(o, "error_message", "errorMessage"),
        };
      }
    }
  }
}
