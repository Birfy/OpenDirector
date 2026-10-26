import _n from "./module-iv_8.js";
import i from "./module-ng_9.js";
import o from "./module-b_8.js";
import s from "./module-bY_9.js";
import a from "./module-V3_8.js";
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
