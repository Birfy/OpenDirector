import _n from "./module-iv_2.js";
import i from "./module-ng_3.js";
import o from "./module-b_2.js";
import s from "./module-bY_3.js";
import a from "./module-V3_2.js";
const _n_charAt = _n.charAt;
const u = "String Iterator";
const o_set = o.set;
const f = o.getterFor(u);
s(
  String,
  "String",
  function (t) {
    o_set(this, {
      type: u,
      string: i(t),
      index: 0,
    });
  },
  function () {
    let t;
    const r = f(this);
    const r_string = r.string;
    const r_index = r.index;
    if (r_index >= r_string.length) {
      return a(undefined, true);
    }
    t = _n_charAt(r_string, r_index);
    r.index += t.length;
    return a(t, false);
  },
);
