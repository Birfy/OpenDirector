import n from "./module-A_20.js";
import o from "./module-EV_20.js";
const a = (r, t) => {
  if (!Object.isFrozen || !o(r) || !Object.isFrozen(r)) {
    return false;
  }
  let e;
  for (var n = 0, a = r.length; n < a;) {
    if (!(typeof (e = r[n++]) === "string" || (t && e === undefined))) {
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
    isTemplateObject: function (r) {
      if (!a(r, true)) {
        return false;
      }
      const r_raw = r.raw;
      return r_raw.length === r.length && a(r_raw, false);
    },
  },
);
