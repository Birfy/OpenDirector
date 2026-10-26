import n from "./module-A_20.js";
import _o from "./module-iv_19.js";
import i from "./module-vj_20.js";
import a from "./module-V6_20.js";
import s from "./module-ng_20.js";
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
