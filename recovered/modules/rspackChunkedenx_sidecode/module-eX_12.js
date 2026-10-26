import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-EV_13.js";
const tr = tt([].reverse);
const tn = [1, 2];
$(
  {
    target: "Array",
    proto: true,
    forced: String(tn) === String(tn.reverse()),
  },
  {
    reverse: function () {
      if (te(this)) {
        this.length = this.length;
      }
      return tr(this);
    },
  },
);
