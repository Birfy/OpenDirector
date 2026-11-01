import n from "SR";
import { _ } from "./module-Pu.js";
export function j(e) {
  const t = [];
  for (const i of e) {
    if (i instanceof n.NuroToolCallMessage && _(i)) {
      t.push(
        ...((e) => {
          if (!e.toolResult) {
            return [];
          }
          try {
            const t = JSON.parse(e.toolResult);
            if (
              !(t == null ? undefined : t.success) ||
              !Array.isArray(t.files)
            ) {
              return [];
            }
            return t.files
              .filter((e) => e.submit_id)
              .map((t) => ({
                submitId: String(t.submit_id),
                createTime: String(e.createTime),
              }));
          } catch (e) {
            return [];
          }
        })(i),
      );
    }
  }
  return t;
}
