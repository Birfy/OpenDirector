import n from "./module-J_24.js";
import o from "./module-wem_23.js";
import i from "./module-Ts3_23.js";
import a from "./module-PC_23.js";
import s from "./module-h_24.js";
import c from "./module-lN_23.js";
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
