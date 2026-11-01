import { U } from "./module-NR3.js";
export function e(e, t) {
  if (e) {
    try {
      const itemIdList = JSON.parse(e).item_id_list || [];
      const itemMap = new Map();
      if (t) {
        for (const a of itemIdList) {
          if (t[a]) {
            const n = U(t[a]);
            if (n) {
              itemMap.set(n.id, n);
            }
          }
        }
      }
      return {
        itemIdList,
        itemMap,
      };
    } catch (e) {
      return;
    }
  }
}
