import n from "g";
import i from "aa";
import a from "ms";
import o from "Yz";
n(
  {
    target: "Array",
    proto: true,
    forced: !a("groupBy"),
  },
  {
    groupBy: function (t) {
      const e = arguments.length > 1 ? arguments[1] : undefined;
      return i(this, t, e);
    },
  },
);
o("groupBy");
