import n from "./module-J_17.js";
import o from "./module-wem_16.js";
import i from "./module-Ts3_16.js";
import a from "./module-PC_16.js";
import s from "./module-h_17.js";
import u from "./module-lN_16.js";
const c = u("iterator");
const f = u("toStringTag");
const a_values = a.values;
const h = (t, r) => {
  if (t) {
    if (t[c] !== a_values) {
      try {
        s(t, c, a_values);
      } catch (r) {
        t[c] = a_values;
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
