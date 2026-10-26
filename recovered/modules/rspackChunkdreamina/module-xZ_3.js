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
    metadata: function (t, e) {
      return function (r, n) {
        i_set(t, e, a(r), i_toKey(n));
      };
    },
  },
);
