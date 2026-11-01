import n from "./module-A_10.js";
import o from "./module-GN_9.js";
import i from "./module-d_10.js";
const o_toKey = o.toKey;
const o_getMap = o.getMap;
const o_store = o.store;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    deleteMetadata: function (t, e) {
      const r = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      const n = o_getMap(i(e), r, false);
      if (n === undefined || !n.delete(t)) {
        return false;
      }
      if (n.size) {
        return true;
      }
      const o = o_store.get(e);
      o.delete(r);
      return !!o.size || o_store.delete(e);
    },
  },
);
