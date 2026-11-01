import n from "./module-A_24.js";
import _o from "./module-iv_23.js";
import i from "./module-vj_24.js";
import a from "./module-V6_24.js";
import s from "./module-ng_24.js";
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
      const c = n >= 0 ? n : r_length + n;
      if (c < 0 || c >= r_length) {
        return undefined;
      }
      return _o_charAt(r, c);
    },
  },
);
