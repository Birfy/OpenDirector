import n from "g";
import i from "tv";
import a from "IF";
const i_toKey = i.toKey;
const i_getMap = i.getMap;
const i_store = i.store;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    deleteMetadata: function (t, e) {
      const r = arguments.length < 3 ? undefined : i_toKey(arguments[2]);
      const n = i_getMap(a(e), r, false);
      if (n === undefined || !n.delete(t)) {
        return false;
      }
      if (n.size) {
        return true;
      }
      const i = i_store.get(e);
      i.delete(r);
      return !!i.size || i_store.delete(e);
    },
  },
);
