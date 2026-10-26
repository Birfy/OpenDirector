import n from "g";
import i from "IF";
import a from "Fm";
import o from "ju";
const push = [].push;
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    toArray: function () {
      const that = [];
      a(o(i(this)), push, {
        that,
        IS_RECORD: true,
      });
      return that;
    },
  },
);
