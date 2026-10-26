import n from "./module-A_7.js";
import _o from "./module-iv_6.js";
import a from "./module-vj_7.js";
import i from "./module-V6_7.js";
import s from "./module-ng_7.js";
const _o_charAt = _o.charAt;
n(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    at: function (t) {
      const r = s(a(this));
      const r_length = r.length;
      const n = i(t);
      const c = n >= 0 ? n : r_length + n;
      if (c < 0 || c >= r_length) {
        return undefined;
      }
      return _o_charAt(r, c);
    },
  },
);
