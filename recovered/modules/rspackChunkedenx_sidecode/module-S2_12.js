import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-V6_13.js";
import tr from "./module-GH_12.js";
import tn from "./module-KM_12.js";
import ti from "./module-Df_2_12.js";
import to from "./module-X_13.js";
const tf = isFinite;
const tl = tt((1).toExponential);
const tp = tt(tn);
const tb = tt("".slice);
const tv =
  tl(-6.9e-11, 4) === "-6.9000e-11" &&
  tl(1.255, 2) === "1.25e+0" &&
  tl(12345, 3) === "1.235e+4" &&
  tl(25, 0) === "3e+1";
$(
  {
    target: "Number",
    proto: true,
    forced:
      !tv ||
      !(
        to(function () {
          tl(1, Infinity);
        }) &&
        to(function () {
          tl(1, -Infinity);
        })
      ) ||
      !!to(function () {
        tl(Infinity, Infinity);
        tl(0 / 0, Infinity);
      }),
  },
  {
    toExponential: function (J) {
      let Z = tr(this);
      if (J === undefined) {
        return tl(Z);
      }
      const Q = te(J);
      if (!tf(Z)) {
        return String(Z);
      }
      if (Q < 0 || Q > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (tv) {
        return tl(Z, Q);
      }
      let $ = "";
      let tt = "";
      let tn = 0;
      let to = "";
      let tg = "";
      if (Z < 0) {
        $ = "-";
        Z = -Z;
      }
      if (Z === 0) {
        tn = 0;
        tt = tp("0", Q + 1);
      } else {
        tn = Math.floor(ti(Z));
        let ty = 0;
        const tm = 10 ** (tn - Q);
        ty = Math.round(Z / tm);
        if (2 * Z >= (2 * ty + 1) * tm) {
          ty += 1;
        }
        if (ty >= 10 ** (Q + 1)) {
          ty /= 10;
          tn += 1;
        }
        tt = String(ty);
      }
      if (Q !== 0) {
        tt = tb(tt, 0, 1) + "." + tb(tt, 1);
      }
      if (tn === 0) {
        to = "+";
        tg = "0";
      } else {
        to = tn > 0 ? "+" : "-";
        tg = String(Math.abs(tn));
      }
      return $ + (tt += "e" + to + tg);
    },
  },
);
