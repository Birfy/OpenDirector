import n from "./module-F_10.js";
import o from "./module-mS_10.js";
import i from "./module-at_9.js";
import a from "./module-b_9.js";
import { f as f_1 } from "./module-t_10.js";
import u from "./module-bY_10.js";
import c from "./module-V3_9.js";
import f from "./module-N_9.js";
import l from "./module-r9_9.js";
const h = "Array Iterator";
const a_set = a.set;
const d = a.getterFor(h);
export default u(
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
    const t = d(this);
    const t_target = t.target;
    const t_kind = t.kind;
    const n = t.index++;
    if (!t_target || n >= t_target.length) {
      t.target = undefined;
      return c(undefined, true);
    }
    switch (t_kind) {
      case "keys":
        return c(n, false);
      case "values":
        return c(t_target[n], false);
    }
    return c([n, t_target[n]], false);
  },
  "values",
);
const p = (i.Arguments = i.Array);
o("keys");
o("values");
o("entries");
if (!f && l && p.name !== "values") {
  try {
    f_1(p, "name", {
      value: "values",
    });
  } catch (t) {}
}
