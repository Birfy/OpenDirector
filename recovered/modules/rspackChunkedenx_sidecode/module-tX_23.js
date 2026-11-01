import n from "./module-A_24.js";
import o from "./module-up_23.js";
const o_pack = o.pack;
const o_unpack = o.unpack;
const s = isFinite;
n(
  {
    target: "Math",
    stat: true,
  },
  {
    f16round: function (t) {
      const r = +t;
      if (s(r) && r !== 0) {
        return o_unpack(o_pack(r, 10, 2), 10);
      }
      return r;
    },
  },
);
