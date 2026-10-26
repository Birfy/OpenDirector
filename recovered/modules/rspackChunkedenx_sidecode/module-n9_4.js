import n from "./module-A_5.js";
import _i from "./module-iv_4.js";
import o from "./module-vj_5.js";
import s from "./module-V6_5.js";
import a from "./module-ng_5.js";
const _i_charAt = _i.charAt;
n(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    at: function (t) {
      const r = a(o(this));
      const r_length = r.length;
      const n = s(t);
      const u = n >= 0 ? n : r_length + n;
      if (u < 0 || u >= r_length) {
        return undefined;
      }
      return _i_charAt(r, u);
    },
  },
);
