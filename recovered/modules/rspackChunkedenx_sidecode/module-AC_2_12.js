import $ from "./module-A_13.js";
import tt from "./module-mS_13.js";
import te from "./module-MU_12.js";
import tr from "./module-F4_13.js";
import tn from "./module-j_2_12.js";
import ti from "./module-F_13.js";
import to from "./module-V6_13.js";
$(
  {
    target: "Array",
    proto: true,
  },
  {
    toSpliced: function (J, Z) {
      let Q;
      let $;
      let tt;
      let tu;
      const tc = ti(this);
      const th = tr(tc);
      const td = tn(J, th);
      const arguments_length = arguments.length;
      let tp = 0;
      switch (arguments_length) {
        case 0:
          $ = 0;
          Q = 0;
          break;
        case 1:
          Q = 0;
          $ = th - td;
          break;
        default:
          Q = arguments_length - 2;
          $ = Math.min(Math.max(to(Z), 0), th - td);
      }
      for (tu = Array((tt = te(th + Q - $))); tp < td; tp++) {
        tu[tp] = tc[tp];
      }
      for (; tp < td + Q; tp++) {
        tu[tp] = arguments[tp - td + 2];
      }
      for (; tp < tt; tp++) {
        tu[tp] = tc[tp + $ - Q];
      }
      return tu;
    },
  },
);
tt("toSpliced");
