import n from "./module-A_17.js";
import o from "./module-O9_16.js";
import i from "./module-V6_17.js";
import a from "./module-GH_16.js";
import s from "./module-KM_16.js";
import u from "./module-Df_2_16.js";
import c from "./module-X_17.js";
const h = isFinite;
const y = o((1).toExponential);
const m = o(s);
const b = o("".slice);
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
      let r = a(this);
      if (t === undefined) {
        return y(r);
      }
      const e = i(t);
      if (!h(r)) {
        return String(r);
      }
      if (e < 0 || e > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (A) {
        return y(r, e);
      }
      let n = "";
      let o = "";
      let s = 0;
      let c = "";
      let x = "";
      if (r < 0) {
        n = "-";
        r = -r;
      }
      if (r === 0) {
        s = 0;
        o = m("0", e + 1);
      } else {
        s = Math.floor(u(r));
        let w = 0;
        const S = 10 ** (s - e);
        w = Math.round(r / S);
        if (2 * r >= (2 * w + 1) * S) {
          w += 1;
        }
        if (w >= 10 ** (e + 1)) {
          w /= 10;
          s += 1;
        }
        o = String(w);
      }
      if (e !== 0) {
        o = b(o, 0, 1) + "." + b(o, 1);
      }
      if (s === 0) {
        c = "+";
        x = "0";
      } else {
        c = s > 0 ? "+" : "-";
        x = String(Math.abs(s));
      }
      return n + (o += "e" + c + x);
    },
  },
);
