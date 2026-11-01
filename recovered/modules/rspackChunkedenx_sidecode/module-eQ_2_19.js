import n from "./module-vE_19.js";
import o from "./module-O9_19.js";
import i from "./module-ng_20.js";
import a from "./module-eXf_19.js";
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
    function (r) {
      let t;
      const arguments_length = arguments.length;
      const n = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && n === undefined) {
        return f(this, r);
      }
      const o = [];
      l(this, function (value, key) {
        h(o, {
          key,
          value,
        });
      });
      a(arguments_length, 1);
      const s = i(r);
      const u = i(n);
      for (var v = 0, p = 0, d = false, g = o.length; v < g;) {
        t = o[v++];
        if (d || t.key === s) {
          d = true;
          f(this, t.key);
        } else {
          p++;
        }
      }
      while (p < g) {
        if ((t = o[p++]).key !== s || t.value !== u) {
          c(this, t.key, t.value);
        }
      }
    },
    {
      enumerable: true,
      unsafe: true,
    },
  );
}
