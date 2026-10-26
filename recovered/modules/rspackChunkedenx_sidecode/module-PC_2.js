import n from "./module-F_3.js";
import i from "./module-mS_3.js";
import o from "./module-at_2.js";
import s from "./module-b_2.js";
import { f as f_1 } from "./module-t_3.js";
import u from "./module-bY_3.js";
import c from "./module-V3_2.js";
import f from "./module-N_2.js";
import h from "./module-r9_2.js";
const l = "Array Iterator";
const s_set = s.set;
const p = s.getterFor(l);
export default u(
  Array,
  "Array",
  function (t, kind) {
    s_set(this, {
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
const d = (o.Arguments = o.Array);
i("keys");
i("values");
i("entries");
if (!f && h && d.name !== "values") {
  try {
    f_1(d, "name", {
      value: "values",
    });
  } catch (t) {}
}
