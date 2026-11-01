import n from "./module-A_10.js";
import o from "./module-L7_9.js";
import i from "./module-V3_9.js";
import a from "./module-vj_10.js";
import s from "./module-ng_10.js";
import u from "./module-b_9.js";
import c from "./module-iv_9.js";
const c_codeAt = c.codeAt;
const c_charAt = c.charAt;
const h = "String Iterator";
const u_set = u.set;
const d = u.getterFor(h);
const p = o(
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
    const e = d(this);
    const e_string = e.string;
    const e_index = e.index;
    if (e_index >= e_string.length) {
      return i(undefined, true);
    }
    t = c_charAt(e_string, e_index);
    e.index += t.length;
    return i(
      {
        codePoint: c_codeAt(t, 0),
        position: e_index,
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
      return new p(s(a(this)));
    },
  },
);
