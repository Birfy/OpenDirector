import $ from "./module-A_13.js";
import _tt from "./module-iv_12.js";
import te from "./module-vj_13.js";
import tr from "./module-V6_13.js";
import tn from "./module-ng_13.js";
const _tt_charAt = _tt.charAt;
$(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    at: function (J) {
      const Z = tn(te(this));
      const Z_length = Z.length;
      const $ = tr(J);
      const ti = $ >= 0 ? $ : Z_length + $;
      if (ti < 0 || ti >= Z_length) {
        return undefined;
      }
      return _tt_charAt(Z, ti);
    },
  },
);
