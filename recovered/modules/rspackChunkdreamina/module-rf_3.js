import n from "g";
import i from "W1";
import a from "wG";
n(
  {
    target: "Promise",
    stat: true,
    forced: true,
  },
  {
    try: function (t) {
      const e = i.f(this);
      const r = a(t);
      (r.error ? e.reject : e.resolve)(r.value);
      return e.promise;
    },
  },
);
