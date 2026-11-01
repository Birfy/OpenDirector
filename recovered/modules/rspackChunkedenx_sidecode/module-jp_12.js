import $ from "./module-J_13.js";
import tt from "./module-wem_12.js";
import te from "./module-Ts3_12.js";
import tr from "./module-YaY_12.js";
import tn from "./module-h_13.js";
const ti = (J) => {
  if (J && J.forEach !== tr) {
    try {
      tn(J, "forEach", tr);
    } catch (Z) {
      J.forEach = tr;
    }
  }
};
for (const to in tt) {
  if (tt[to]) {
    ti($[to] && $[to].prototype);
  }
}
ti(te);
