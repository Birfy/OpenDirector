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
    forEach: function (t) {
      o(this);
      a(t);
      const e = s(this);
      let r = 0;
      i(
        e,
        function (e) {
          t(e, r++);
        },
        {
          IS_RECORD: true,
        },
      );
    },
  },
);
