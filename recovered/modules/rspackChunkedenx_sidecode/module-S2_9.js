import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-V6_10.js";
import a from "./module-GH_9.js";
import s from "./module-KM_9.js";
import u from "./module-Df_2_9.js";
import c from "./module-X_10.js";
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
      let e = a(this);
      if (t === undefined) {
        return y(e);
      }
      const r = i(t);
      if (!h(e)) {
        return String(e);
      }
      if (r < 0 || r > 20) {
        throw RangeError("Incorrect fraction digits");
      }
      if (w) {
        return y(e, r);
      }
      let n = "";
      let o = "";
      let s = 0;
      let c = "";
      let A = "";
      if (e < 0) {
        n = "-";
        e = -e;
      }
      if (e === 0) {
        s = 0;
        o = m("0", r + 1);
      } else {
        s = Math.floor(u(e));
        let x = 0;
        const E = 10 ** (s - r);
        x = Math.round(e / E);
        if (2 * e >= (2 * x + 1) * E) {
          x += 1;
        }
        if (x >= 10 ** (r + 1)) {
          x /= 10;
          s += 1;
        }
        o = String(x);
      }
      if (r !== 0) {
        o = b(o, 0, 1) + "." + b(o, 1);
      }
      if (s === 0) {
        c = "+";
        A = "0";
      } else {
        c = s > 0 ? "+" : "-";
        A = String(Math.abs(s));
      }
      return n + (o += "e" + c + A);
    },
  },
);
