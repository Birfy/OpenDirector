import n from "u";
import i from "oX";
import a from "If";
import o from "sK";
import s from "z3";
import A from "Nt";
const c = A("iterator");
const u = A("toStringTag");
const o_values = o.values;
const h = (t, e) => {
  if (t) {
    if (t[c] !== o_values) {
      try {
        s(t, c, o_values);
      } catch (e) {
        t[c] = o_values;
      }
    }
    if (!t[u]) {
      s(t, u, e);
    }
    if (i[e]) {
      for (const r in o) {
        if (t[r] !== o[r]) {
          try {
            s(t, r, o[r]);
          } catch (e) {
            t[r] = o[r];
          }
        }
      }
    }
  }
};
for (const f in i) {
  h(n[f] && n[f].prototype, f);
}
h(a, "DOMTokenList");
