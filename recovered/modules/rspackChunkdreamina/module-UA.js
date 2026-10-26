import n from "xX";
import i from "o";
import a from "BC";
import o from "lU";
const s = URLSearchParams;
const s_prototype = s.prototype;
const c = i(s_prototype.getAll);
const u = i(s_prototype.has);
const l = new s("a=1");
if (l.has("a", 2) || !l.has("a", undefined)) {
  n(
    s_prototype,
    "has",
    function (t) {
      const arguments_length = arguments.length;
      const r = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && r === undefined) {
        return u(this, t);
      }
      const n = c(this, t);
      o(arguments_length, 1);
      const i = a(r);
      for (let s = 0; s < n.length;) {
        if (n[s++] === i) {
          return true;
        }
      }
      return false;
    },
    {
      enumerable: true,
      unsafe: true,
    },
  );
}
