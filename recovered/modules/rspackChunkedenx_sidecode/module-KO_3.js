import n from "./module-A_4.js";
import i from "./module-GN_3.js";
import o from "./module-d_4.js";
import s from "./module-H_2_3.js";
const i_has = i.has;
const i_get = i.get;
const i_toKey = i.toKey;
const f = (t, r, e) => {
  if (i_has(t, r, e)) {
    return i_get(t, r, e);
  }
  const n = s(r);
  if (n !== null) {
    return f(t, n, e);
  }
};
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadata: function (t, r) {
      const e = arguments.length < 3 ? undefined : i_toKey(arguments[2]);
      return f(t, o(r), e);
    },
  },
);
