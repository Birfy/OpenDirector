import n from "g";
import i from "Fm";
import a from "B";
import o from "IF";
import s from "ju";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    find: function (t) {
      o(this);
      a(t);
      const e = s(this);
      let r = 0;
      return i(
        e,
        function (e, n) {
          if (t(e, r++)) {
            return n(e);
          }
        },
        {
          IS_RECORD: true,
          INTERRUPTED: true,
        },
      ).result;
    },
  },
);
