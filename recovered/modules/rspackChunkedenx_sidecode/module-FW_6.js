import n from "./module-A_7.js";
import o from "./module-L7_6.js";
import a from "./module-V3_6.js";
import i from "./module-vj_7.js";
import s from "./module-ng_7.js";
import c from "./module-b_6.js";
import u from "./module-iv_6.js";
const u_codeAt = u.codeAt;
const u_charAt = u.charAt;
const h = "String Iterator";
const c_set = c.set;
const v = c.getterFor(h);
const d = o(
  function (string) {
    c_set(this, {
      type: h,
      string,
      index: 0,
    });
  },
  "String",
  function () {
    let t;
    const r = v(this);
    const r_string = r.string;
    const r_index = r.index;
    if (r_index >= r_string.length) {
      return a(undefined, true);
    }
    t = u_charAt(r_string, r_index);
    r.index += t.length;
    return a(
      {
        codePoint: u_codeAt(t, 0),
        position: r_index,
      },
      false,
    );
  },
);
n(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    codePoints: function () {
      return new d(s(i(this)));
    },
  },
);
