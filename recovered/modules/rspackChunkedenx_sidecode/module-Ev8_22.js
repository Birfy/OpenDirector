import n from "./module-vE_22.js";
import i from "./module-O9_22.js";
import o from "./module-ng_23.js";
import s from "./module-eXf_22.js";
const a = URLSearchParams;
const a_prototype = a.prototype;
const c = i(a_prototype.getAll);
const f = i(a_prototype.has);
const h = new a("a=1");
if (h.has("a", 2) || !h.has("a", undefined)) {
  n(
    a_prototype,
    "has",
    function (t) {
      const arguments_length = arguments.length;
      const e = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && e === undefined) {
        return f(this, t);
      }
      const n = c(this, t);
      s(arguments_length, 1);
      const i = o(e);
      for (let a = 0; a < n.length;) {
        if (n[a++] === i) {
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
