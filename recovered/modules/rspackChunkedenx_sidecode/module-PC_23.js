import n from "./module-F_24.js";
import o from "./module-mS_24.js";
import i from "./module-at_23.js";
import a from "./module-b_23.js";
import { f as f_1 } from "./module-t_24.js";
import c from "./module-bY_24.js";
import u from "./module-V3_23.js";
import f from "./module-N_23.js";
import l from "./module-r9_23.js";
const h = "Array Iterator";
const a_set = a.set;
const p = a.getterFor(h);
export default c(
  Array,
  "Array",
  function (t, kind) {
    a_set(this, {
      type: h,
      target: n(t),
      index: 0,
      kind,
    });
  },
  function () {
    const t = p(this);
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
const d = (i.Arguments = i.Array);
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
