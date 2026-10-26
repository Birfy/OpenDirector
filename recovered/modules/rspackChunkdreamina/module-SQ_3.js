import n from "g";
import i from "tv";
import a from "IF";
import o from "jA";
const i_has = i.has;
const i_toKey = i.toKey;
const c = (t, e, r) => {
  if (i_has(t, e, r)) {
    return true;
  }
  const n = o(e);
  return n !== null && c(t, n, r);
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasMetadata: function (t, e) {
      const r = arguments.length < 3 ? undefined : i_toKey(arguments[2]);
      return c(t, a(e), r);
    },
  },
);
