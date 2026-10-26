import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-V6_13.js";
import tr from "./module-GH_12.js";
import tn from "./module-KM_12.js";
import ti from "./module-X_13.js";
const tf = tt(tn);
const tu = tt("".slice);
const tc = tt((1).toFixed);
const th = (J, Z, Q) => {
  if (Z === 0) {
    return Q;
  }
  if (Z % 2 == 1) {
    return th(J, Z - 1, Q * J);
  }
  return th(J * J, Z / 2, Q);
};
const td = (J) => {
  let Z = 0;
  for (var Q = J; Q >= 4096;) {
    Z += 12;
    Q /= 4096;
  }
  while (Q >= 2) {
    Z += 1;
    Q /= 2;
  }
  return Z;
};
const tl = (J, Z, Q) => {
  for (let $ = -1, tt = Q; ++$ < 6;) {
    tt += Z * J[$];
    J[$] = tt % 10000000;
    tt = Math.floor(tt / 10000000);
  }
};
const tp = (J, Z) => {
  for (let Q = 6, $ = 0; --Q >= 0;) {
    $ += J[Q];
    J[Q] = Math.floor($ / Z);
    $ = ($ % Z) * 10000000;
  }
};
const tb = (J) => {
  for (var Z = 6, Q = ""; --Z >= 0;) {
    if (Q !== "" || Z === 0 || J[Z] !== 0) {
      const $ = String(J[Z]);
      Q = Q === "" ? $ : Q + tf("0", 7 - $.length) + $;
    }
  }
  return Q;
};
$(
  {
    target: "Number",
    proto: true,
    forced:
      ti(function () {
        return (
          tc(0.00008, 3) !== "0.000" ||
          tc(0.9, 0) !== "1" ||
          tc(1.255, 2) !== "1.25" ||
          tc(1000000000000000100, 0) !== "1000000000000000128"
        );
      }) ||
      !ti(function () {
        tc({});
      }),
  },
  {
    toFixed: function (J) {
      let Z;
      let Q;
      let $;
      let tt;
      let tn = tr(this);
      const ti = te(J);
      const ts = [0, 0, 0, 0, 0, 0];
      let tc = "";
      let tv = "0";
      if (ti < 0 || ti > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (tn != tn) {
        return "NaN";
      }
      if (tn <= -1e21 || tn >= 1e21) {
        return String(tn);
      }
      if (tn < 0) {
        tc = "-";
        tn = -tn;
      }
      if (tn > 1e-21) {
        Q =
          ((Z = td(tn * th(2, 69, 1)) - 69) < 0
            ? tn * th(2, -Z, 1)
            : tn / th(2, Z, 1)) * 4503599627370496;
        if ((Z = 52 - Z) > 0) {
          tl(ts, 0, Q);
          for ($ = ti; $ >= 7;) {
            tl(ts, 10000000, 0);
            $ -= 7;
          }
          tl(ts, th(10, $, 1), 0);
          for ($ = Z - 1; $ >= 23;) {
            tp(ts, 8388608);
            $ -= 23;
          }
          tp(ts, 1 << $);
          tl(ts, 1, 1);
          tp(ts, 2);
          tv = tb(ts);
        } else {
          tl(ts, 0, Q);
          tl(ts, 1 << -Z, 0);
          tv = tb(ts) + tf("0", ti);
        }
      }
      if (ti > 0) {
        return (
          tc +
          ((tt = tv.length) <= ti
            ? "0." + tf("0", ti - tt) + tv
            : tu(tv, 0, tt - ti) + "." + tu(tv, tt - ti))
        );
      }
      return tc + tv;
    },
  },
);
