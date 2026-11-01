import $ from "./module-A_13.js";
import tt from "./module-vo_12.js";
import te from "./module-ot_13.js";
import tr from "./module-e7_12.js";
const tr_get = tr.get;
const tr_has = tr.has;
const tr_set = tr.set;
$(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    update: function (J, Z) {
      const Q = te(this);
      const arguments_length = arguments.length;
      tt(Z);
      const tr = tr_has(Q, J);
      if (!tr && arguments_length < 3) {
        throw TypeError("Updating absent value");
      }
      const ts = tr
        ? tr_get(Q, J)
        : tt(arguments_length > 2 ? arguments[2] : undefined)(J, Q);
      tr_set(Q, J, Z(ts, J, Q));
      return Q;
    },
  },
);
