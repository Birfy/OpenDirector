import n from "./module-A_23.js";
import i from "./module-GN_22.js";
import o from "./module-d_23.js";
const i_toKey = i.toKey;
const i_set = i.set;
n(
  {
    target: "Reflect",
    stat: true,
  },
  {
    defineMetadata: function (t, r, e) {
      const n = arguments.length < 4 ? undefined : i_toKey(arguments[3]);
      i_set(t, r, o(e), n);
    },
  },
);
