import $ from "./module-A_13.js";
import tt from "./module-up_12.js";
const tt_pack = tt.pack;
const tt_unpack = tt.unpack;
const tn = isFinite;
$(
  {
    target: "Math",
    stat: true,
  },
  {
    f16round: function (J) {
      const Z = +J;
      if (tn(Z) && Z !== 0) {
        return tt_unpack(tt_pack(Z, 10, 2), 10);
      }
      return Z;
    },
  },
);
