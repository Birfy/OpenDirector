import n from "./module-A_12.js";
import _o from "./module-iv_11.js";
import i from "./module-vj_12.js";
import a from "./module-V6_12.js";
import s from "./module-ng_12.js";
const _o_charAt = _o.charAt;
n(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    at: function (r) {
      const t = s(i(this));
      const t_length = t.length;
      const n = a(r);
      const u = n >= 0 ? n : t_length + n;
      if (u < 0 || u >= t_length) {
        return undefined;
      }
      return _o_charAt(t, u);
    },
  },
);
