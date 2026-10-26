import n from "./module-A_21.js";
import o from "./module-O9_20.js";
import i from "./module-V6_21.js";
import a from "./module-GH_20.js";
import s from "./module-KM_20.js";
import c from "./module-Df_2_20.js";
import u from "./module-X_21.js";
const h = isFinite;
const y = o((1).toExponential);
const m = o(s);
const b = o("".slice);
const w =
  y(-6.9e-11, 4) === "-6.9000e-11" &&
  y(1.255, 2) === "1.25e+0" &&
  y(12345, 3) === "1.235e+4" &&
  y(25, 0) === "3e+1";
n(
  {
    target: "Number",
    proto: true,
    forced:
      !w ||
      !(
        u(function () {
          y(1, Infinity);
        }) &&
        u(function () {
          y(1, -Infinity);
        })
      ) ||
      !!u(function () {
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
      if (w) {
        return y(r, e);
      }
      let n = "";
      let o = "";
      let s = 0;
      let u = "";
      let A = "";
      if (r < 0) {
        n = "-";
        r = -r;
      }
      if (r === 0) {
        s = 0;
        o = m("0", e + 1);
      } else {
        s = Math.floor(c(r));
        let x = 0;
        const S = 10 ** (s - e);
        x = Math.round(r / S);
        if (2 * r >= (2 * x + 1) * S) {
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
        u = "+";
        A = "0";
      } else {
        u = s > 0 ? "+" : "-";
        A = String(Math.abs(s));
      }
      return n + (o += "e" + u + A);
    },
  },
);
