import n from "g";
import i from "tv";
import a from "IF";
const i_get = i.get;
const i_toKey = i.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadata: function (t, e) {
      const r = arguments.length < 3 ? undefined : i_toKey(arguments[2]);
      return i_get(t, a(e), r);
    },
  },
);
