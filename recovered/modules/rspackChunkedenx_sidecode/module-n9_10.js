import n from "./module-A_11.js";
import _o from "./module-iv_10.js";
import i from "./module-vj_11.js";
import a from "./module-V6_11.js";
import s from "./module-ng_11.js";
const _o_charAt = _o.charAt;
n(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    at: function (t) {
      const r = s(i(this));
      const r_length = r.length;
      const n = a(t);
      const u = n >= 0 ? n : r_length + n;
      if (u < 0 || u >= r_length) {
        return undefined;
      }
      return _o_charAt(r, u);
    },
  },
);
