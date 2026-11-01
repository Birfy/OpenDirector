import $ from "./module-b_12.js";
import tt from "./module-L7_12.js";
import te from "./module-V3_12.js";
import tr from "./module-D_2_12.js";
import tn from "./module-II_12.js";
import ti from "./module-aq_12.js";
const to = "Object Iterator";
const $_set = $.set;
const ts = $.getterFor(to);
export default tt(
  function (J, mode) {
    const object = ti(J);
    $_set(this, {
      type: to,
      mode,
      object,
      keys: tn(object),
      index: 0,
    });
  },
  "Object",
  function () {
    const J = ts(this);
    const J_keys = J.keys;
    while (true) {
      if (J_keys === null || J.index >= J_keys.length) {
        J.object = J.keys = null;
        return te(undefined, true);
      }
      const Q = J_keys[J.index++];
      const $ = J.object;
      if (tr($, Q)) {
        switch (J.mode) {
          case "keys":
            return te(Q, false);
          case "values":
            return te($[Q], false);
        }
        return te([Q, $[Q]], false);
      }
    }
  },
);
