import n from "g";
import { charAt } from "aE";
import a from "H";
import o from "Ok";
import s from "BC";
n(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    at: function (t) {
      const e = s(a(this));
      const e_length = e.length;
      const n = o(t);
      const A = n >= 0 ? n : e_length + n;
      if (A < 0 || A >= e_length) {
        return undefined;
      }
      return charAt(e, A);
    },
  },
);
