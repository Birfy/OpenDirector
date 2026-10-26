import n from "./module-vE_9.js";
import o from "./module-O9_9.js";
import i from "./module-ng_10.js";
import a from "./module-eXf_9.js";
const s = URLSearchParams;
const s_prototype = s.prototype;
const c = o(s_prototype.append);
const f = o(s_prototype.delete);
const l = o(s_prototype.forEach);
const h = o([].push);
const v = new s("a=1&a=2&b=3");
v.delete("a", 1);
v.delete("b", undefined);
if (v + "" != "a=2") {
  n(
    s_prototype,
    "delete",
    function (t) {
      let e;
      const arguments_length = arguments.length;
      const n = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && n === undefined) {
        return f(this, t);
      }
      const o = [];
      l(this, function (value, key) {
        h(o, {
          key,
          value,
        });
      });
      a(arguments_length, 1);
      const s = i(t);
      const u = i(n);
      for (var v = 0, d = 0, p = false, g = o.length; v < g;) {
        e = o[v++];
        if (p || e.key === s) {
          p = true;
          f(this, e.key);
        } else {
          d++;
        }
      }
      while (d < g) {
        if ((e = o[d++]).key !== s || e.value !== u) {
          c(this, e.key, e.value);
        }
      }
    },
    {
      enumerable: true,
      unsafe: true,
    },
  );
}
