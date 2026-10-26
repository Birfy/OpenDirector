import n from "./module-A_14.js";
import o from "./module-L7_13.js";
import i from "./module-V3_13.js";
import a from "./module-vj_14.js";
import s from "./module-ng_14.js";
import u from "./module-b_13.js";
import c from "./module-iv_13.js";
const c_codeAt = c.codeAt;
const c_charAt = c.charAt;
const l = "String Iterator";
const u_set = u.set;
const p = u.getterFor(l);
const d = o(
  function (string) {
    u_set(this, {
      type: l,
      string,
      index: 0,
    });
  },
  "String",
  function () {
    let r;
    const t = p(this);
    const t_string = t.string;
    const t_index = t.index;
    if (t_index >= t_string.length) {
      return i(undefined, true);
    }
    r = c_charAt(t_string, t_index);
    t.index += r.length;
    return i(
      {
        codePoint: c_codeAt(r, 0),
        position: t_index,
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
