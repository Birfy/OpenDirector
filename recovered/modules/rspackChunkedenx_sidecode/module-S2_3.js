import n from "./module-A_4.js";
import i from "./module-O9_3.js";
import o from "./module-V6_4.js";
import s from "./module-GH_3.js";
import a from "./module-KM_3.js";
import u from "./module-Df_2_3.js";
import c from "./module-X_4.js";
const l = isFinite;
const y = i((1).toExponential);
const b = i(a);
const m = i("".slice);
const A =
  y(-6.9e-11, 4) === "-6.9000e-11" &&
  y(1.255, 2) === "1.25e+0" &&
  y(12345, 3) === "1.235e+4" &&
  y(25, 0) === "3e+1";
n(
  {
    target: "Number",
    proto: true,
    forced:
      !A ||
      !(
        c(function () {
          y(1, Infinity);
        }) &&
        c(function () {
          y(1, -Infinity);
        })
      ) ||
      !!c(function () {
        y(Infinity, Infinity);
        y(0 / 0, Infinity);
      }),
  },
  {
    toExponential: function (t) {
      let r = s(this);
      if (t === undefined) {
        return y(r);
      }
      const e = o(t);
      if (!l(r)) {
        return String(r);
      }
      if (e < 0 || e > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (A) {
        return y(r, e);
      }
      let n = "";
      let i = "";
      let a = 0;
      let c = "";
      let x = "";
      if (r < 0) {
        n = "-";
        r = -r;
      }
      if (r === 0) {
        a = 0;
        i = b("0", e + 1);
      } else {
        a = Math.floor(u(r));
        let w = 0;
        const S = 10 ** (a - e);
        w = Math.round(r / S);
        if (2 * r >= (2 * w + 1) * S) {
          w += 1;
        }
        if (w >= 10 ** (e + 1)) {
          w /= 10;
          a += 1;
        }
        i = String(w);
      }
      if (e !== 0) {
        i = m(i, 0, 1) + "." + m(i, 1);
      }
      if (a === 0) {
        c = "+";
        x = "0";
      } else {
        c = a > 0 ? "+" : "-";
        x = String(Math.abs(a));
      }
      return n + (i += "e" + c + x);
    },
  },
);
