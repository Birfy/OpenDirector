import n from "./module-A_21.js";
import o from "./module-L7_20.js";
import i from "./module-V3_20.js";
import a from "./module-vj_21.js";
import s from "./module-ng_21.js";
import c from "./module-b_20.js";
import u from "./module-iv_20.js";
const u_codeAt = u.codeAt;
const u_charAt = u.charAt;
const h = "String Iterator";
const c_set = c.set;
const p = c.getterFor(h);
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
    const r = p(this);
    const r_string = r.string;
    const r_index = r.index;
    if (r_index >= r_string.length) {
      return i(undefined, true);
    }
    t = u_charAt(r_string, r_index);
    r.index += t.length;
    return i(
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
      return new d(s(a(this)));
    },
  },
);
