import n from "./module-A_12.js";
import o from "./module-O9_11.js";
import i from "./module-EV_12.js";
const a = o([].reverse);
const s = [1, 2];
n(
  {
    target: "Array",
    proto: true,
    forced: String(s) === String(s.reverse()),
  },
  {
    reverse: function () {
      if (i(this)) {
        this.length = this.length;
      }
      return a(this);
    },
  },
);
