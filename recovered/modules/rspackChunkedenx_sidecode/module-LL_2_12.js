import $ from "./module-A_13.js";
import tt from "./module-Xy_3_2.js";
import te from "./module-An_13.js";
import tr from "./module-YR_12.js";
import tn from "./module-Za_12.js";
const to = function () {
  const J = tr("Object", "freeze");
  if (J) {
    return J(tn(null));
  }
  return tn(null);
};
$(
  {
    global: true,
    forced: true,
  },
  {
    compositeKey: function () {
      return tt(te, Object, arguments).get("object", to);
    },
  },
);
