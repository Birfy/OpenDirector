import _n from "./module-iv_9.js";
import o from "./module-ng_10.js";
import i from "./module-b_9.js";
import a from "./module-bY_10.js";
import s from "./module-V3_9.js";
const _n_charAt = _n.charAt;
const u = "String Iterator";
const i_set = i.set;
const f = i.getterFor(u);
a(
  String,
  "String",
  function (t) {
    i_set(this, {
      type: u,
      string: o(t),
      index: 0,
    });
  },
  function () {
    let t;
    const e = f(this);
    const e_string = e.string;
    const e_index = e.index;
    if (e_index >= e_string.length) {
      return s(undefined, true);
    }
    t = _n_charAt(e_string, e_index);
    e.index += t.length;
    return s(t, false);
  },
);
