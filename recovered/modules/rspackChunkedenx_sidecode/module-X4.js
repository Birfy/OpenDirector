import _n from "./module-iv.js";
import o from "./module-ng.js";
import i from "./module-b.js";
import a from "./module-bY.js";
import s from "./module-V3.js";
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
