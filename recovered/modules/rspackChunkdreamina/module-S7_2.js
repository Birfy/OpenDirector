import n from "u";
import i from "oX";
import a from "If";
import o from "l9";
import s from "z3";
const A = (t) => {
  if (t && t.forEach !== o) {
    try {
      s(t, "forEach", o);
    } catch (e) {
      t.forEach = o;
    }
  }
};
for (const c in i) {
  if (i[c]) {
    A(n[c] && n[c].prototype);
  }
}
A(a);
