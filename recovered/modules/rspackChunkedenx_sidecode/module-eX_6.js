import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-EV_7.js";
const i = o([].reverse);
const s = [1, 2];
n(
  {
    target: "Array",
    proto: true,
    forced: String(s) === String(s.reverse()),
  },
  {
    reverse: function () {
      if (a(this)) {
        this.length = this.length;
      }
      return i(this);
    },
  },
);
