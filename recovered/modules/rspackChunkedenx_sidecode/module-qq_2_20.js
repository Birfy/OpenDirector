import n from "./module-J_21.js";
import o from "./module-wem_20.js";
import i from "./module-Ts3_20.js";
import a from "./module-PC_20.js";
import s from "./module-h_21.js";
import c from "./module-lN_20.js";
const u = c("iterator");
const f = c("toStringTag");
const a_values = a.values;
const h = (t, r) => {
  if (t) {
    if (t[u] !== a_values) {
      try {
        s(t, u, a_values);
      } catch (r) {
        t[u] = a_values;
      }
    }
    if (!t[f]) {
      s(t, f, r);
    }
    if (o[r]) {
      for (const e in a) {
        if (t[e] !== a[e]) {
          try {
            s(t, e, a[e]);
          } catch (r) {
            t[e] = a[e];
          }
        }
      }
    }
  }
};
for (const v in o) {
  h(n[v] && n[v].prototype, v);
}
h(i, "DOMTokenList");
