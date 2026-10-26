import n from "g";
import i from "ek";
const i_pack = i.pack;
const i_unpack = i.unpack;
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
        return i_unpack(i_pack(e, 10, 2), 10);
      }
      return e;
    },
  },
);
