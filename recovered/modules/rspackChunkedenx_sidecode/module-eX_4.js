import n from "./module-A_5.js";
import i from "./module-O9_4.js";
import o from "./module-EV_5.js";
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
