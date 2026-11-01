import n from "./module-vE_6.js";
import o from "./module-O9_6.js";
import a from "./module-ng_7.js";
import i from "./module-eXf_6.js";
const s = URLSearchParams;
const s_prototype = s.prototype;
const u = o(s_prototype.append);
const f = o(s_prototype.delete);
const l = o(s_prototype.forEach);
const h = o([].push);
const p = new s("a=1&a=2&b=3");
p.delete("a", 1);
p.delete("b", undefined);
if (p + "" != "a=2") {
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
      i(arguments_length, 1);
      const s = a(t);
      const c = a(n);
      for (var p = 0, v = 0, d = false, g = o.length; p < g;) {
        r = o[p++];
        if (d || r.key === s) {
          d = true;
          f(this, r.key);
        } else {
          v++;
        }
      }
      while (v < g) {
        if ((r = o[v++]).key !== s || r.value !== c) {
          u(this, r.key, r.value);
        }
      }
    },
    {
      enumerable: true,
      unsafe: true,
    },
  );
}
