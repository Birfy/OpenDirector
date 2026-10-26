import $ from "./module-A_13.js";
import tt from "./module-YR_12.js";
import te from "./module-Xy_3_2.js";
import tr from "./module-M_2_12.js";
import tn from "./module-O9_12.js";
import ti from "./module-X_13.js";
import to from "./module-Y_13.js";
import ta from "./module-i_2_12.js";
import ts from "./module-E6_12.js";
import tf from "./module-x9_12.js";
import tu from "./module-eZ_12.js";
const th = tt("JSON", "stringify");
const td = tn(/./.exec);
const tl = tn("".charAt);
const tp = tn("".charCodeAt);
const tb = tn("".replace);
const tv = tn((1).toString);
const tg = /[\uD800-\uDFFF]/g;
const ty = /^[\uD800-\uDBFF]$/;
const tm = /^[\uDC00-\uDFFF]$/;
const tw =
  !tu ||
  ti(function () {
    const a = tt("Symbol")("stringify detection");
    return (
      th([a]) !== "[null]" ||
      th({
        a,
      }) !== "{}" ||
      th(Object(a)) !== "{}"
    );
  });
const tx = ti(function () {
  return (
    th("\uDF06\uD834") !== '"\\udf06\\ud834"' || th("\uDEAD") !== '"\\udead"'
  );
});
const t_ = function (J, Z) {
  const Q = ts(arguments);
  const $ = tf(Z);
  if (!(!to($) && (J === undefined || ta(J)))) {
    Q[1] = function (J, Z) {
      if (to($)) {
        Z = tr($, this, String(J), Z);
      }
      if (!ta(Z)) {
        return Z;
      }
    };
    return te(th, null, Q);
  }
};
const tM = function (J, Z, Q) {
  const $ = tl(Q, Z - 1);
  const tt = tl(Q, Z + 1);
  if ((td(ty, J) && !td(tm, tt)) || (td(tm, J) && !td(ty, $))) {
    return "\\u" + tv(tp(J, 0), 16);
  }
  return J;
};
if (th) {
  $(
    {
      target: "JSON",
      stat: true,
      arity: 3,
      forced: tw || tx,
    },
    {
      stringify: function (J, Z, Q) {
        const $ = ts(arguments);
        const tt = te(tw ? t_ : th, null, $);
        if (tx && typeof tt === "string") {
          return tb(tt, tg, tM);
        }
        return tt;
      },
    },
  );
}
