import _n from "./module-iv_23.js";
import o from "./module-ng_24.js";
import i from "./module-b_23.js";
import a from "./module-bY_24.js";
import s from "./module-V3_23.js";
const _n_charAt = _n.charAt;
const c = "String Iterator";
const i_set = i.set;
const f = i.getterFor(c);
a(
  String,
  "String",
  function (t) {
    i_set(this, {
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
