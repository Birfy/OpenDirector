import n from "g";
import i from "DN";
const o = (t, e) => {
  if (!Object.isFrozen || !i(t) || !Object.isFrozen(t)) {
    return false;
  }
  let r;
  for (var n = 0, o = t.length; n < o;) {
    if (!(typeof (r = t[n++]) === "string" || (e && r === undefined))) {
      return false;
    }
  }
  return o !== 0;
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
      if (!o(t, true)) {
        return false;
      }
      const t_raw = t.raw;
      return t_raw.length === t.length && o(t_raw, false);
    },
  },
);
