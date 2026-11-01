import $ from "./module-WG_2_12.js";
import tt from "./module-O9_12.js";
import te from "./module-Q_13.js";
import tr from "./module-aq_12.js";
import tn from "./module-Vm_2_12.js";
import ti from "./module-F4_13.js";
import to from "./module-Za_12.js";
import ta from "./module-i1_12.js";
const tf = tt([].push);
export default function (J, Z, Q, tt) {
  let tu;
  let tc;
  let th;
  const td = tr(J);
  const tl = te(td);
  const tp = $(Z, Q);
  const tb = to(null);
  for (let tv = ti(tl), tg = 0; tv > tg; tg++) {
    if ((tc = tn(tp((th = tl[tg]), tg, td))) in tb) {
      tf(tb[tc], th);
    } else {
      tb[tc] = [th];
    }
  }
  if (tt && (tu = tt(td)) !== Array) {
    for (tc in tb) {
      tb[tc] = ta(tu, tb[tc]);
    }
  }
  return tb;
}
