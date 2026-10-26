import n from "./module-vE_17.js";
import o from "./module-O9_17.js";
import i from "./module-ng_18.js";
import a from "./module-eXf_17.js";
const s = URLSearchParams;
const s_prototype = s.prototype;
const c = o(s_prototype.getAll);
const f = o(s_prototype.has);
const h = new s("a=1");
if (h.has("a", 2) || !h.has("a", undefined)) {
  n(
    s_prototype,
    "has",
    function (r) {
      const arguments_length = arguments.length;
      const e = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && e === undefined) {
        return f(this, r);
      }
      const n = c(this, r);
      a(arguments_length, 1);
      const o = i(e);
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
