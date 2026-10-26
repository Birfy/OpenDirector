import n from "./module-vE_5.js";
import i from "./module-O9_5.js";
import o from "./module-ng_6.js";
import s from "./module-eXf_5.js";
const a = URLSearchParams;
const a_prototype = a.prototype;
const c = i(a_prototype.append);
const f = i(a_prototype.delete);
const h = i(a_prototype.forEach);
const l = i([].push);
const v = new a("a=1&a=2&b=3");
v.delete("a", 1);
v.delete("b", undefined);
if (v + "" != "a=2") {
  n(
    a_prototype,
    "delete",
    function (t) {
      let r;
      const arguments_length = arguments.length;
      const n = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && n === undefined) {
        return f(this, t);
      }
      const i = [];
      h(this, function (value, key) {
        l(i, {
          key,
          value,
        });
      });
      s(arguments_length, 1);
      const a = o(t);
      const u = o(n);
      for (var v = 0, p = 0, d = false, g = i.length; v < g;) {
        r = i[v++];
        if (d || r.key === a) {
          d = true;
          f(this, r.key);
        } else {
          p++;
        }
      }
      while (p < g) {
        if ((r = i[p++]).key !== a || r.value !== u) {
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
