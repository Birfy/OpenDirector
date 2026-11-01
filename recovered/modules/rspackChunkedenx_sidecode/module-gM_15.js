import n from "./module-A_15.js";
import o from "./module-EV_15.js";
const a = (t, r) => {
  if (!Object.isFrozen || !o(t) || !Object.isFrozen(t)) {
    return false;
  }
  let e;
  for (var n = 0, a = t.length; n < a;) {
    if (!(typeof (e = t[n++]) === "string" || (r && e === undefined))) {
      return false;
    }
  }
  return a !== 0;
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
      if (!a(t, true)) {
        return false;
      }
      const t_raw = t.raw;
      return t_raw.length === t.length && a(t_raw, false);
    },
  },
);
