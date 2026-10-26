import $ from "./module-WG_2_12.js";
import tt from "./module-O9_12.js";
import te from "./module-Q_13.js";
import tr from "./module-aq_12.js";
import tn from "./module-F4_13.js";
import ti from "./module-e7_12.js";
const ti_Map = ti.Map;
const ti_get = ti.get;
const ti_has = ti.has;
const ti_set = ti.set;
const tu = tt([].push);
export default function (J) {
  let Z;
  let Q;
  const tt = tr(this);
  const ti = te(tt);
  const tc = $(J, arguments.length > 1 ? arguments[1] : undefined);
  const th = new ti_Map();
  for (let td = tn(ti), tl = 0; td > tl; tl++) {
    if (ti_has(th, (Z = tc((Q = ti[tl]), tl, tt)))) {
      tu(ti_get(th, Z), Q);
    } else {
      ti_set(th, Z, [Q]);
    }
  }
  return th;
}
