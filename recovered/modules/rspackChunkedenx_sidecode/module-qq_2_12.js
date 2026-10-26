import $ from "./module-J_13.js";
import tt from "./module-wem_12.js";
import te from "./module-Ts3_12.js";
import tr from "./module-PC_12.js";
import tn from "./module-h_13.js";
import ti from "./module-lN_12.js";
const to = ti("iterator");
const ta = ti("toStringTag");
const tr_values = tr.values;
const tf = (J, Z) => {
  if (J) {
    if (J[to] !== tr_values) {
      try {
        tn(J, to, tr_values);
      } catch (Z) {
        J[to] = tr_values;
      }
    }
    if (!J[ta]) {
      tn(J, ta, Z);
    }
    if (tt[Z]) {
      for (const Q in tr) {
        if (J[Q] !== tr[Q]) {
          try {
            tn(J, Q, tr[Q]);
          } catch (Z) {
            J[Q] = tr[Q];
          }
        }
      }
    }
  }
};
for (const tu in tt) {
  tf($[tu] && $[tu].prototype, tu);
}
tf(te, "DOMTokenList");
