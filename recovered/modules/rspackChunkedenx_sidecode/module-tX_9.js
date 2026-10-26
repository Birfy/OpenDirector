import n from "./module-A_10.js";
import o from "./module-up_9.js";
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
      const e = +t;
      if (s(e) && e !== 0) {
        return o_unpack(o_pack(e, 10, 2), 10);
      }
      return e;
    },
  },
);
