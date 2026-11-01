import n from "./module-A_14.js";
import o from "./module-GN_13.js";
import i from "./module-d_14.js";
const o_toKey = o.toKey;
const o_getMap = o.getMap;
const o_store = o.store;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    deleteMetadata: function (r, t) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      const n = o_getMap(i(t), e, false);
      if (n === undefined || !n.delete(r)) {
        return false;
      }
      if (n.size) {
        return true;
      }
      const o = o_store.get(t);
      o.delete(e);
      return !!o.size || o_store.delete(t);
    },
  },
);
