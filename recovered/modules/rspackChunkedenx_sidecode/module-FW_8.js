import n from "./module-A_9.js";
import i from "./module-L7_8.js";
import o from "./module-V3_8.js";
import s from "./module-vj_9.js";
import a from "./module-ng_9.js";
import u from "./module-b_8.js";
import c from "./module-iv_8.js";
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
