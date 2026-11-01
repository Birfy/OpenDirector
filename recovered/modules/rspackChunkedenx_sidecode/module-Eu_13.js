import $ from "./module-r9_12.js";
import tt from "./module-O9_12.js";
import te from "./module-M_2_12.js";
import tr from "./module-X_13.js";
import tn from "./module-II_12.js";
import { f } from "./module-CR_12.js";
import { f as f_1 } from "./module-P_13.js";
import ta from "./module-aq_12.js";
import ts from "./module-Q_13.js";
const tc = tt([].concat);
export default !Object.assign ||
tr(function () {
  if (
    $ &&
    {
      b: 1,
      ...Object.assign(
        Object.defineProperty({}, "a", {
          enumerable: true,
          get: function () {
            Object.defineProperty(this, "b", {
              value: 3,
              enumerable: false,
            });
          },
        }),
        {
          b: 2,
        },
      ),
    }.b !== 1
  ) {
    return true;
  }
  const J = {};
  const Z = {};
  const Q = Symbol("assign detection");
  const tt = "abcdefghijklmnopqrst";
  J[Q] = 7;
  tt.split("").forEach((J) => {
    Z[J] = J;
  });
  return (
    {
      ...J,
    }[Q] !== 7 ||
    tn({
      ...Z,
    }).join("") !== tt
  );
})
  ? function (J, Z) {
      const Q = ta(J);
      for (let tt = arguments.length, tr = 1, tf = f, tu = f_1; tt > tr;) {
        let th;
        const td = ts(arguments[tr++]);
        const tl = tf ? tc(tn(td), tf(td)) : tn(td);
        for (let tp = tl.length, tb = 0; tp > tb;) {
          th = tl[tb++];
          if (!$ || te(tu, td, th)) {
            Q[th] = td[th];
          }
        }
      }
      return Q;
    }
  : Object.assign;
