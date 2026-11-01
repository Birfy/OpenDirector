import n from "g";
import i from "tv";
import a from "IF";
const i_keys = i.keys;
const i_toKey = i.toKey;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadataKeys: function (t) {
      const e = arguments.length < 2 ? undefined : i_toKey(arguments[1]);
      return i_keys(a(t), e);
    },
  },
);
