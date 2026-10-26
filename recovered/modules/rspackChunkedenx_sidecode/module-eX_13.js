import n from "./module-A_14.js";
import o from "./module-O9_13.js";
import i from "./module-EV_14.js";
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
