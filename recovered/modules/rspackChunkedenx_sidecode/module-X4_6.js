import _n from "./module-iv_6.js";
import o from "./module-ng_7.js";
import a from "./module-b_6.js";
import i from "./module-bY_7.js";
import s from "./module-V3_6.js";
const _n_charAt = _n.charAt;
const c = "String Iterator";
const a_set = a.set;
const f = a.getterFor(c);
i(
  String,
  "String",
  function (t) {
    a_set(this, {
      type: c,
      string: o(t),
      index: 0,
    });
  },
  function () {
    let t;
    const r = f(this);
    const r_string = r.string;
    const r_index = r.index;
    if (r_index >= r_string.length) {
      return s(undefined, true);
    }
    t = _n_charAt(r_string, r_index);
    r.index += t.length;
    return s(t, false);
  },
);
