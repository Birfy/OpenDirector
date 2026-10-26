import $ from "./module-A_13.js";
import tt from "./module-YR_12.js";
import te from "./module-X_13.js";
import tr from "./module-eXf_12.js";
import tn from "./module-ng_13.js";
import ti from "./module-BZO_12.js";
const to = tt("URL");
$(
  {
    target: "URL",
    stat: true,
    forced: !(
      ti &&
      te(function () {
        to.canParse();
      })
    ),
  },
  {
    canParse: function (J) {
      const Z = tr(arguments.length, 1);
      const Q = tn(J);
      const $ =
        Z < 2 || arguments[1] === undefined ? undefined : tn(arguments[1]);
      try {
        new to(Q, $);
        return true;
      } catch (J) {
        return false;
      }
    },
  },
);
