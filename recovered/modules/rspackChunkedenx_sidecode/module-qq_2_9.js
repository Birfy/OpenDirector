import n from "./module-J_10.js";
import o from "./module-wem_9.js";
import i from "./module-Ts3_9.js";
import a from "./module-PC_9.js";
import s from "./module-h_10.js";
import u from "./module-lN_9.js";
const c = u("iterator");
const f = u("toStringTag");
const a_values = a.values;
const h = (t, e) => {
  if (t) {
    if (t[c] !== a_values) {
      try {
        s(t, c, a_values);
      } catch (e) {
        t[c] = a_values;
      }
    }
    if (!t[f]) {
      s(t, f, e);
    }
    if (o[e]) {
      for (const r in a) {
        if (t[r] !== a[r]) {
          try {
            s(t, r, a[r]);
          } catch (e) {
            t[r] = a[r];
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
