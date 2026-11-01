import n from "./module-J_8.js";
import o from "./module-wem_7.js";
import i from "./module-Ts3_7.js";
import a from "./module-PC_7.js";
import s from "./module-h_8.js";
import u from "./module-lN_7.js";
const c = u("iterator");
const f = u("toStringTag");
const a_values = a.values;
const h = (r, t) => {
  if (r) {
    if (r[c] !== a_values) {
      try {
        s(r, c, a_values);
      } catch (t) {
        r[c] = a_values;
      }
    }
    if (!r[f]) {
      s(r, f, t);
    }
    if (o[t]) {
      for (const e in a) {
        if (r[e] !== a[e]) {
          try {
            s(r, e, a[e]);
          } catch (t) {
            r[e] = a[e];
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
