import _n from "./module-aE_2.js";
import o from "./module-BC_2.js";
import i from "./module-G_2.js";
import a from "./module-qc_4.js";
import s from "./module-SM_4.js";
const _n_charAt = _n.charAt;
const u = "String Iterator";
const i_set = i.set;
const f = i.getterFor(u);
a(
  String,
  "String",
  function (e) {
    i_set(this, {
      type: u,
      string: o(e),
      index: 0,
    });
  },
  function () {
    let e;
    const t = f(this);
    const t_string = t.string;
    const t_index = t.index;
    if (t_index >= t_string.length) {
      return s(undefined, true);
    }
    e = _n_charAt(t_string, t_index);
    t.index += e.length;
    return s(e, false);
  },
);
