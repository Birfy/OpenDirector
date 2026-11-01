import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-DN_2.js";
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
