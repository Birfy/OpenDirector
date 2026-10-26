import n from "g";
import i from "tv";
import a from "IF";
const i_toKey = i.toKey;
const i_set = i.set;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    defineMetadata: function (t, e, r) {
      const n = arguments.length < 4 ? undefined : i_toKey(arguments[3]);
      i_set(t, e, a(r), n);
    },
  },
);
