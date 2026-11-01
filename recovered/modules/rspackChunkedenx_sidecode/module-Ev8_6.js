import n from "./module-vE_6.js";
import o from "./module-O9_6.js";
import a from "./module-ng_7.js";
import i from "./module-eXf_6.js";
const s = URLSearchParams;
const s_prototype = s.prototype;
const u = o(s_prototype.getAll);
const f = o(s_prototype.has);
const l = new s("a=1");
if (l.has("a", 2) || !l.has("a", undefined)) {
  n(
    s_prototype,
    "has",
    function (t) {
      const arguments_length = arguments.length;
      const e = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && e === undefined) {
        return f(this, t);
      }
      const n = u(this, t);
      i(arguments_length, 1);
      const o = a(e);
      for (let s = 0; s < n.length;) {
        if (n[s++] === o) {
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
