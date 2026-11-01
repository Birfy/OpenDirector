import $ from "./module-A_13.js";
import tt from "./module-L7_12.js";
import te from "./module-V3_12.js";
import tr from "./module-vj_13.js";
import tn from "./module-ng_13.js";
import ti from "./module-b_12.js";
import to from "./module-iv_12.js";
const to_codeAt = to.codeAt;
const to_charAt = to.charAt;
const tf = "String Iterator";
const ti_set = ti.set;
const tc = ti.getterFor(tf);
const th = tt(
  function (string) {
    ti_set(this, {
      type: tf,
      string,
      index: 0,
    });
  },
  "String",
  function () {
    let J;
    const Z = tc(this);
    const Z_string = Z.string;
    const Z_index = Z.index;
    if (Z_index >= Z_string.length) {
      return te(undefined, true);
    }
    J = to_charAt(Z_string, Z_index);
    Z.index += J.length;
    return te(
      {
        codePoint: to_codeAt(J, 0),
        position: Z_index,
      },
      false,
    );
  },
);
$(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    codePoints: function () {
      return new th(tn(tr(this)));
    },
  },
);
