import $ from "./module-O9_12.js";
import tt from "./module-vo_12.js";
import te from "./module-Mi_12.js";
import tr from "./module-F4_13.js";
import tn from "./module-aq_12.js";
import ti from "./module-e7_12.js";
import to from "./module-JA_13.js";
const ti_Map = ti.Map;
const ti_has = ti.has;
const ti_set = ti.set;
const tu = $([].push);
export default function (J) {
  let Z;
  let Q;
  let $;
  const ti = tn(this);
  const tc = tr(ti);
  const th = [];
  const td = new ti_Map();
  const tl = te(J) ? (J) => J : tt(J);
  for (Z = 0; Z < tc; Z++) {
    if (!ti_has(td, ($ = tl((Q = ti[Z]))))) {
      ti_set(td, $, Q);
    }
  }
  to(td, function (J) {
    tu(th, J);
  });
  return th;
}
