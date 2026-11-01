import n from "./module-A_23.js";
import i from "./module-GN_22.js";
import o from "./module-d_23.js";
const i_toKey = i.toKey;
const i_getMap = i.getMap;
const i_store = i.store;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    deleteMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : i_toKey(arguments[2]);
      const n = i_getMap(o(r), e, false);
      if (n === undefined || !n.delete(t)) {
        return false;
      }
      if (n.size) {
        return true;
      }
      const i = i_store.get(r);
      i.delete(e);
      return !!i.size || i_store.delete(r);
    },
  },
);
