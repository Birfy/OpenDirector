import n from "./module-F.js";
import o from "./module-mS.js";
import i from "./module-at.js";
import a from "./module-b.js";
import { f as f_1 } from "./module-t.js";
import u from "./module-bY.js";
import c from "./module-V3.js";
import f from "./module-N.js";
import h from "./module-r9.js";
const l = "Array Iterator";
const a_set = a.set;
const p = a.getterFor(l);
export default u(
  Array,
  "Array",
  function (t, kind) {
    a_set(this, {
      type: l,
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
const d = (i.Arguments = i.Array);
o("keys");
o("values");
o("entries");
if (!f && h && d.name !== "values") {
  try {
    f_1(d, "name", {
      value: "values",
    });
  } catch (t) {}
}
