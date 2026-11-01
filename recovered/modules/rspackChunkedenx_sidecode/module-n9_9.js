import n from "./module-A_10.js";
import _o from "./module-iv_9.js";
import i from "./module-vj_10.js";
import a from "./module-V6_10.js";
import s from "./module-ng_10.js";
const _o_charAt = _o.charAt;
n(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    at: function (t) {
      const e = s(i(this));
      const e_length = e.length;
      const n = a(t);
      const u = n >= 0 ? n : e_length + n;
      if (u < 0 || u >= e_length) {
        return undefined;
      }
      return _o_charAt(e, u);
    },
  },
);
