import _n from "./module-iv_11.js";
import o from "./module-ng_12.js";
import i from "./module-b_11.js";
import a from "./module-bY_12.js";
import s from "./module-V3_11.js";
const _n_charAt = _n.charAt;
const u = "String Iterator";
const i_set = i.set;
const f = i.getterFor(u);
a(
  String,
  "String",
  function (r) {
    i_set(this, {
      type: u,
      string: o(r),
      index: 0,
    });
  },
  function () {
    let r;
    const t = f(this);
    const t_string = t.string;
    const t_index = t.index;
    if (t_index >= t_string.length) {
      return s(undefined, true);
    }
    r = _n_charAt(t_string, t_index);
    t.index += r.length;
    return s(r, false);
  },
);
