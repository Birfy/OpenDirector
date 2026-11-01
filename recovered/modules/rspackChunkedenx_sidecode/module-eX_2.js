import n from "./module-A_3.js";
import i from "./module-O9_2.js";
import o from "./module-EV_3.js";
const s = i([].reverse);
const a = [1, 2];
n(
  {
    target: "Array",
    proto: true,
    forced: String(a) === String(a.reverse()),
  },
  {
    reverse: function () {
      if (o(this)) {
        this.length = this.length;
      }
      return s(this);
    },
  },
);
