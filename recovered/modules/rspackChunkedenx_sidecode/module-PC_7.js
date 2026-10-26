import n from "./module-F_8.js";
import o from "./module-mS_8.js";
import i from "./module-at_7.js";
import a from "./module-b_7.js";
import { f as f_1 } from "./module-t_8.js";
import u from "./module-bY_8.js";
import c from "./module-V3_7.js";
import f from "./module-N_7.js";
import l from "./module-r9_7.js";
const h = "Array Iterator";
const a_set = a.set;
const p = a.getterFor(h);
export default u(
  Array,
  "Array",
  function (r, kind) {
    a_set(this, {
      type: h,
      target: n(r),
      index: 0,
      kind,
    });
  },
  function () {
    const r = p(this);
    const r_target = r.target;
    const r_kind = r.kind;
    const n = r.index++;
    if (!r_target || n >= r_target.length) {
      r.target = undefined;
      return c(undefined, true);
    }
    switch (r_kind) {
      case "keys":
        return c(n, false);
      case "values":
        return c(r_target[n], false);
    }
    return c([n, r_target[n]], false);
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
  } catch (r) {}
}
