import n from "./module-A_11.js";
import o from "./module-L7_10.js";
import i from "./module-V3_10.js";
import a from "./module-vj_11.js";
import s from "./module-ng_11.js";
import u from "./module-b_10.js";
import c from "./module-iv_10.js";
const c_codeAt = c.codeAt;
const c_charAt = c.charAt;
const h = "String Iterator";
const u_set = u.set;
const p = u.getterFor(h);
const d = o(
  function (string) {
    u_set(this, {
      type: h,
      string,
      index: 0,
    });
  },
  "String",
  function () {
    let t;
    const r = p(this);
    const r_string = r.string;
    const r_index = r.index;
    if (r_index >= r_string.length) {
      return i(undefined, true);
    }
    t = c_charAt(r_string, r_index);
    r.index += t.length;
    return i(
      {
        codePoint: c_codeAt(t, 0),
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
      return new d(s(a(this)));
    },
  },
);
