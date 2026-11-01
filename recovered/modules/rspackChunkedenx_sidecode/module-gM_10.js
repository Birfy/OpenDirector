import n from "./module-A_10.js";
import o from "./module-EV_10.js";
const a = (t, e) => {
  if (!Object.isFrozen || !o(t) || !Object.isFrozen(t)) {
    return false;
  }
  let r;
  for (var n = 0, a = t.length; n < a;) {
    if (!(typeof (r = t[n++]) === "string" || (e && r === undefined))) {
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
