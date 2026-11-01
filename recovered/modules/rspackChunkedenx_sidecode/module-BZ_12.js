import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-V6_13.js";
import tr from "./module-ZW_12.js";
const tn = "Invalid number representation";
const ts = /^[\da-z]+$/;
const tf = tt("".charAt);
const tu = tt(ts.exec);
const tc = tt((1).toString);
const th = tt("".slice);
$(
  {
    target: "Number",
    stat: true,
    forced: true,
  },
  {
    fromString: function (J, Z) {
      let Q;
      let $;
      let tt = 1;
      if (typeof J !== "string") {
        throw TypeError(tn);
      }
      if (
        !J.length ||
        (tf(J, 0) === "-" && ((tt = -1), !(J = th(J, 1)).length))
      ) {
        throw SyntaxError(tn);
      }
      if ((Q = Z === undefined ? 10 : te(Z)) < 2 || Q > 36) {
        throw RangeError("Invalid radix");
      }
      if (!tu(ts, J) || tc(($ = tr(J, Q)), Q) !== J) {
        throw SyntaxError(tn);
      }
      return tt * $;
    },
  },
);
