import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-GN_12.js";
import tr from "./module-d_13.js";
import tn from "./module-H_2_12.js";
const ti = tt(require("./module-qV_13.js"));
const to = tt([].concat);
const te_keys = te.keys;
const te_toKey = te.toKey;
const tf = (J, Z) => {
  const Q = te_keys(J, Z);
  const $ = tn(J);
  if ($ === null) {
    return Q;
  }
  const tt = tf($, Z);
  if (tt.length) {
    if (Q.length) {
      return ti(to(Q, tt));
    }
    return tt;
  }
  return Q;
};
$(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadataKeys: function (J) {
      const Z = arguments.length < 2 ? undefined : te_toKey(arguments[1]);
      return tf(tr(J), Z);
    },
  },
);
