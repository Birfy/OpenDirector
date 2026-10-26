import _$ from "./module-iv_12.js";
import tt from "./module-ng_13.js";
import te from "./module-b_12.js";
import tr from "./module-bY_13.js";
import tn from "./module-V3_12.js";
const _$_charAt = _$.charAt;
const ti = "String Iterator";
const te_set = te.set;
const ta = te.getterFor(ti);
tr(
  String,
  "String",
  function (J) {
    te_set(this, {
      type: ti,
      string: tt(J),
      index: 0,
    });
  },
  function () {
    let J;
    const Z = ta(this);
    const Z_string = Z.string;
    const Z_index = Z.index;
    if (Z_index >= Z_string.length) {
      return tn(undefined, true);
    }
    J = _$_charAt(Z_string, Z_index);
    Z.index += J.length;
    return tn(J, false);
  },
);
