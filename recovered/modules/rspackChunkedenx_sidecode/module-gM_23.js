import n from "./module-A_23.js";
import i from "./module-EV_23.js";
const s = (t, r) => {
  if (!Object.isFrozen || !i(t) || !Object.isFrozen(t)) {
    return false;
  }
  let e;
  for (var n = 0, s = t.length; n < s;) {
    if (!(typeof (e = t[n++]) === "string" || (r && e === undefined))) {
      return false;
    }
  }
  return s !== 0;
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
      if (!s(t, true)) {
        return false;
      }
      const t_raw = t.raw;
      return t_raw.length === t.length && s(t_raw, false);
    },
  },
);
