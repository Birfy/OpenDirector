import n from "./module-A_14.js";
import o from "./module-up_13.js";
const o_pack = o.pack;
const o_unpack = o.unpack;
const s = isFinite;
n(
  {
    target: "Math",
    stat: true,
  },
  {
    f16round: function (r) {
      const t = +r;
      if (s(t) && t !== 0) {
        return o_unpack(o_pack(t, 10, 2), 10);
      }
      return t;
    },
  },
);
