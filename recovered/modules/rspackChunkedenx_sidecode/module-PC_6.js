import n from "./module-F_7.js";
import o from "./module-mS_7.js";
import a from "./module-at_6.js";
import i from "./module-b_6.js";
import { f as f_1 } from "./module-t_7.js";
import c from "./module-bY_7.js";
import u from "./module-V3_6.js";
import f from "./module-N_6.js";
import l from "./module-r9_6.js";
const h = "Array Iterator";
const i_set = i.set;
const v = i.getterFor(h);
export default c(
  Array,
  "Array",
  function (t, kind) {
    i_set(this, {
      type: h,
      target: n(t),
      index: 0,
      kind,
    });
  },
  function () {
    const t = v(this);
    const t_target = t.target;
    const t_kind = t.kind;
    const n = t.index++;
    if (!t_target || n >= t_target.length) {
      t.target = undefined;
      return u(undefined, true);
    }
    switch (t_kind) {
      case "keys":
        return u(n, false);
      case "values":
        return u(t_target[n], false);
    }
    return u([n, t_target[n]], false);
  },
  "values",
);
const d = (a.Arguments = a.Array);
o("keys");
o("values");
o("entries");
if (!f && l && d.name !== "values") {
  try {
    f_1(d, "name", {
      value: "values",
    });
  } catch (t) {}
}
