import n from "g";
import i from "o";
import a from "tv";
import o from "IF";
import s from "jA";
const A = i(require("Vzu"));
const c = i([].concat);
const a_keys = a.keys;
const a_toKey = a.toKey;
const h = (t, e) => {
  const r = a_keys(t, e);
  const n = s(t);
  if (n === null) {
    return r;
  }
  const i = h(n, e);
  if (i.length) {
    if (r.length) {
      return A(c(r, i));
    }
    return i;
  }
  return r;
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadataKeys: function (t) {
      const e = arguments.length < 2 ? undefined : a_toKey(arguments[1]);
      return h(o(t), e);
    },
  },
);
