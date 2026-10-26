import $ from "./module-M_2_12.js";
import tt from "./module-vo_12.js";
import te from "./module-d_13.js";
import tr from "./module-y_2_12.js";
import tn from "./module-MU_12.js";
import ti from "./module-YR_12.js";
import to from "./module-NK_2_2.js";
import ta from "./module-Qd_13.js";
const ts = (J) => {
  const Z = J === 0;
  const Q = J === 1;
  const ts = J === 2;
  const tf = J === 3;
  return function (J, tu, tc) {
    te(J);
    const th = tu !== undefined;
    if (th || !Z) {
      tt(tu);
    }
    const td = to(J);
    const tl = ti("Promise");
    const td_iterator = td.iterator;
    const td_next = td.next;
    let tv = 0;
    return new tl(function (J, tt) {
      const ti = function (J) {
        ta(td_iterator, tt, J, tt);
      };
      const to = () => {
        try {
          if (th) {
            try {
              tn(tv);
            } catch (error) {
              ti(error);
            }
          }
          tl.resolve(te($(td_next, td_iterator))).then(($) => {
            try {
              if (te($).done) {
                if (Z) {
                  tc.length = tv;
                  J(tc);
                } else {
                  J(!tf && (ts || undefined));
                }
              } else {
                const tn = $.value;
                try {
                  if (th) {
                    const td = tu(tn, tv);
                    const tb = function ($) {
                      if (Q) {
                        to();
                      } else if (ts) {
                        if ($) {
                          to();
                        } else {
                          ta(td_iterator, J, false, tt);
                        }
                      } else if (Z) {
                        try {
                          tc[tv++] = $;
                          to();
                        } catch (error) {
                          ti(error);
                        }
                      } else {
                        if ($) {
                          ta(td_iterator, J, tf || tn, tt);
                        } else {
                          to();
                        }
                      }
                    };
                    if (tr(td)) {
                      tl.resolve(td).then(tb, ti);
                    } else {
                      tb(td);
                    }
                  } else {
                    tc[tv++] = tn;
                    to();
                  }
                } catch (error) {
                  ti(error);
                }
              }
            } catch (error) {
              tt(error);
            }
          }, tt);
        } catch (error) {
          tt(error);
        }
      };
      to();
    });
  };
};
export default {
  toArray: ts(0),
  forEach: ts(1),
  every: ts(2),
  some: ts(3),
  find: ts(4),
};
