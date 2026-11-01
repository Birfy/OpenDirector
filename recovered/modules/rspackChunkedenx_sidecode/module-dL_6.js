import n from "./module-A_7.js";
import o from "./module-GN_6.js";
import a from "./module-d_7.js";
const o_toKey = o.toKey;
const o_getMap = o.getMap;
const o_store = o.store;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    deleteMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : o_toKey(arguments[2]);
      const n = o_getMap(a(r), e, false);
      if (n === undefined || !n.delete(t)) {
        return false;
      }
      if (n.size) {
        return true;
      }
      const o = o_store.get(r);
      o.delete(e);
      return !!o.size || o_store.delete(r);
    },
  },
);
