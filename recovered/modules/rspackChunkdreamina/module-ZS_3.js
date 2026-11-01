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
    reduce: function (t) {
      o(this);
      a(t);
      const e = s(this);
      let r = arguments.length < 2;
      let n = r ? undefined : arguments[1];
      let c = 0;
      i(
        e,
        function (e) {
          if (r) {
            r = false;
            n = e;
          } else {
            n = t(n, e, c);
          }
          c++;
        },
        {
          IS_RECORD: true,
        },
      );
      if (r) {
        throw TypeError("Reduce of empty iterator with no initial value");
      }
      return n;
    },
  },
);
