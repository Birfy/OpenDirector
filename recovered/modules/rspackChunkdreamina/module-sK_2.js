import n from "./module-MR.js";
import o from "./module-Yz_2.js";
import i from "./module-uK_4.js";
import a from "./module-G_2.js";
import { f as f_1 } from "./module-R_2.js";
import u from "./module-qc_4.js";
import c from "./module-SM_4.js";
import f from "./module-K.js";
import l from "./module-F.js";
const p = "Array Iterator";
const a_set = a.set;
const v = a.getterFor(p);
export default u(
  Array,
  "Array",
  function (e, kind) {
    a_set(this, {
      type: p,
      target: n(e),
      index: 0,
      kind,
    });
  },
  function () {
    const e = v(this);
    const e_target = e.target;
    const e_kind = e.kind;
    const n = e.index++;
    if (!e_target || n >= e_target.length) {
      e.target = undefined;
      return c(undefined, true);
    }
    switch (e_kind) {
      case "keys":
        return c(n, false);
      case "values":
        return c(e_target[n], false);
    }
    return c([n, e_target[n]], false);
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
  } catch (e) {}
}
