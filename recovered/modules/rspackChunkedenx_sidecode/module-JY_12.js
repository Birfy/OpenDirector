import $ from "./module-WG_2_12.js";
import tt from "./module-O9_12.js";
import te from "./module-Q_13.js";
import tr from "./module-aq_12.js";
import tn from "./module-F4_13.js";
import ti from "./module-sT_12.js";
const to = tt([].push);
const ta = (J) => {
  const Z = J === 1;
  const Q = J === 2;
  const tt = J === 3;
  const ta = J === 4;
  const ts = J === 6;
  const tf = J === 7;
  const tu = J === 5 || ts;
  return function (tc, th, td, tl) {
    let tp;
    let tb;
    const tv = tr(tc);
    const tg = te(tv);
    const ty = $(th, td);
    for (
      var tm = tn(tg),
        tw = 0,
        tx = tl || ti,
        t_ = Z ? tx(tc, tm) : Q || tf ? tx(tc, 0) : undefined;
      tm > tw;
      tw++
    ) {
      if ((tu || tw in tg) && ((tb = ty((tp = tg[tw]), tw, tv)), J)) {
        if (Z) {
          t_[tw] = tb;
        } else if (tb) {
          switch (J) {
            case 3:
              return true;
            case 5:
              return tp;
            case 6:
              return tw;
            case 2:
              to(t_, tp);
          }
        } else {
          switch (J) {
            case 4:
              return false;
            case 7:
              to(t_, tp);
          }
        }
      }
    }
    if (ts) {
      return -1;
    }
    if (tt || ta) {
      return ta;
    }
    return t_;
  };
};
export default {
  forEach: ta(0),
  map: ta(1),
  filter: ta(2),
  some: ta(3),
  every: ta(4),
  find: ta(5),
  findIndex: ta(6),
  filterReject: ta(7),
};
