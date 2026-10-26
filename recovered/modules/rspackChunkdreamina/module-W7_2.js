import n from "g";
import i from "tv";
import a from "IF";
import o from "jA";
const i_has = i.has;
const i_get = i.get;
const i_toKey = i.toKey;
const u = (t, e, r) => {
  if (i_has(t, e, r)) {
    return i_get(t, e, r);
  }
  const n = o(e);
  if (n !== null) {
    return u(t, n, r);
  }
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadata: function (t, e) {
      const r = arguments.length < 3 ? undefined : i_toKey(arguments[2]);
      return u(t, a(e), r);
    },
  },
);
