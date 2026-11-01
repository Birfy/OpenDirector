import n from "./module-A_8.js";
import o from "./module-O9_7.js";
import i from "./module-V6_8.js";
import a from "./module-GH_7.js";
import s from "./module-KM_7.js";
import u from "./module-Df_2_7.js";
import c from "./module-X_8.js";
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
    toExponential: function (r) {
      let t = a(this);
      if (r === undefined) {
        return y(t);
      }
      const e = i(r);
      if (!h(t)) {
        return String(t);
      }
      if (e < 0 || e > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (A) {
        return y(t, e);
      }
      let n = "";
      let o = "";
      let s = 0;
      let c = "";
      let w = "";
      if (t < 0) {
        n = "-";
        t = -t;
      }
      if (t === 0) {
        s = 0;
        o = m("0", e + 1);
      } else {
        s = Math.floor(u(t));
        let x = 0;
        const E = 10 ** (s - e);
        x = Math.round(t / E);
        if (2 * t >= (2 * x + 1) * E) {
          x += 1;
        }
        if (x >= 10 ** (e + 1)) {
          x /= 10;
          s += 1;
        }
        o = String(x);
      }
      if (e !== 0) {
        o = b(o, 0, 1) + "." + b(o, 1);
      }
      if (s === 0) {
        c = "+";
        w = "0";
      } else {
        c = s > 0 ? "+" : "-";
        w = String(Math.abs(s));
      }
      return n + (o += "e" + c + w);
    },
  },
);
