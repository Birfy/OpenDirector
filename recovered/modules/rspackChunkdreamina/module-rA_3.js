import n from "g";
import i from "ms";
import a from "Yz";
import groupByToMap from "Qa";
n(
  {
    target: "Array",
    proto: true,
    name: "groupToMap",
    forced: require("K") || !i("groupByToMap"),
  },
  {
    groupByToMap,
  },
);
a("groupByToMap");
