import n from "./module-A_3.js";
import i from "./module-L7_2.js";
import o from "./module-V3_2.js";
import s from "./module-vj_3.js";
import a from "./module-ng_3.js";
import u from "./module-b_2.js";
import c from "./module-iv_2.js";
const c_codeAt = c.codeAt;
const c_charAt = c.charAt;
const l = "String Iterator";
const u_set = u.set;
const p = u.getterFor(l);
const d = i(
  function (string) {
    u_set(this, {
      type: l,
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
      return o(undefined, true);
    }
    t = c_charAt(r_string, r_index);
    r.index += t.length;
    return o(
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
      return new d(a(s(this)));
    },
  },
);
