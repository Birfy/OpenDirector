import $ from "./module-F_13.js";
import tt from "./module-mS_13.js";
import te from "./module-at_12.js";
import tr from "./module-b_12.js";
import { f } from "./module-t_13.js";
import ti from "./module-bY_13.js";
import to from "./module-V3_12.js";
import ta from "./module-N_12.js";
import ts from "./module-r9_12.js";
const tf = "Array Iterator";
const tr_set = tr.set;
const tc = tr.getterFor(tf);
export default ti(
  Array,
  "Array",
  function (J, kind) {
    tr_set(this, {
      type: tf,
      target: $(J),
      index: 0,
      kind,
    });
  },
  function () {
    const J = tc(this);
    const J_target = J.target;
    const J_kind = J.kind;
    const $ = J.index++;
    if (!J_target || $ >= J_target.length) {
      J.target = undefined;
      return to(undefined, true);
    }
    switch (J_kind) {
      case "keys":
        return to($, false);
      case "values":
        return to(J_target[$], false);
    }
    return to([$, J_target[$]], false);
  },
  "values",
);
const th = (te.Arguments = te.Array);
tt("keys");
tt("values");
tt("entries");
if (!ta && ts && th.name !== "values") {
  try {
    f(th, "name", {
      value: "values",
    });
  } catch (J) {}
}
