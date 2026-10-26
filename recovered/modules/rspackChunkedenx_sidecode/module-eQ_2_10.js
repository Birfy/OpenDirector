import n from "./module-vE_10.js";
import o from "./module-O9_10.js";
import i from "./module-ng_11.js";
import a from "./module-eXf_10.js";
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
      let r;
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
      for (var v = 0, p = 0, d = false, g = o.length; v < g;) {
        r = o[v++];
        if (d || r.key === s) {
          d = true;
          f(this, r.key);
        } else {
          p++;
        }
      }
      while (p < g) {
        if ((r = o[p++]).key !== s || r.value !== u) {
          c(this, r.key, r.value);
        }
      }
    },
    {
      enumerable: true,
      unsafe: true,
    },
  );
}
