import n from "./module-A_9.js";
import i from "./module-GN_8.js";
import o from "./module-d_9.js";
import s from "./module-H_2_8.js";
const i_has = i.has;
const i_toKey = i.toKey;
const c = (t, r, e) => {
  if (i_has(t, r, e)) {
    return true;
  }
  const n = s(r);
  return n !== null && c(t, n, e);
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : i_toKey(arguments[2]);
      return c(t, o(r), e);
    },
  },
);
