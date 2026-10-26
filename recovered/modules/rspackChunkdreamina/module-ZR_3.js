import n from "xX";
import i from "o";
import a from "BC";
import o from "lU";
const s = URLSearchParams;
const s_prototype = s.prototype;
const c = i(s_prototype.append);
const u = i(s_prototype.delete);
const l = i(s_prototype.forEach);
const h = i([].push);
const f = new s("a=1&a=2&b=3");
f.delete("a", 1);
f.delete("b", undefined);
if (f + "" != "a=2") {
  n(
    s_prototype,
    "delete",
    function (t) {
      let e;
      const arguments_length = arguments.length;
      const n = arguments_length < 2 ? undefined : arguments[1];
      if (arguments_length && n === undefined) {
        return u(this, t);
      }
      const i = [];
      l(this, function (value, key) {
        h(i, {
          key,
          value,
        });
      });
      o(arguments_length, 1);
      const s = a(t);
      const A = a(n);
      for (var f = 0, g = 0, d = false, p = i.length; f < p;) {
        e = i[f++];
        if (d || e.key === s) {
          d = true;
          u(this, e.key);
        } else {
          g++;
        }
      }
      while (g < p) {
        if ((e = i[g++]).key !== s || e.value !== A) {
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
