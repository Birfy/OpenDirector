import n from "./module-A_9.js";
import i from "./module-up_8.js";
const i_pack = i.pack;
const i_unpack = i.unpack;
const a = isFinite;
n(
  {
    target: "Math",
    stat: true,
  },
  {
    f16round: function (t) {
      const r = +t;
      if (a(r) && r !== 0) {
        return i_unpack(i_pack(r, 10, 2), 10);
      }
      return r;
    },
  },
);
