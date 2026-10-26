import n from "g";
import { filterReject } from "GK";
import a from "Yz";
n(
  {
    target: "Array",
    proto: true,
    forced: true,
  },
  {
    filterReject: function (t) {
      return filterReject(
        this,
        t,
        arguments.length > 1 ? arguments[1] : undefined,
      );
    },
  },
);
a("filterReject");
