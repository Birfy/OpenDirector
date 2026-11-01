import n from "./module-A_7.js";
import o from "./module-EV_7.js";
const i = (t, r) => {
  if (!Object.isFrozen || !o(t) || !Object.isFrozen(t)) {
    return false;
  }
  let e;
  for (var n = 0, i = t.length; n < i;) {
    if (!(typeof (e = t[n++]) === "string" || (r && e === undefined))) {
      return false;
    }
  }
  return i !== 0;
};
n(
  {
    target: "Array",
    stat: true,
    sham: true,
    forced: true,
  },
  {
    isTemplateObject: function (t) {
      if (!i(t, true)) {
        return false;
      }
      const t_raw = t.raw;
      return t_raw.length === t.length && i(t_raw, false);
    },
  },
);
