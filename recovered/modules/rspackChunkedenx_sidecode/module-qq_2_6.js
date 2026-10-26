import n from "./module-J_7.js";
import o from "./module-wem_6.js";
import a from "./module-Ts3_6.js";
import i from "./module-PC_6.js";
import s from "./module-h_7.js";
import c from "./module-lN_6.js";
const u = c("iterator");
const f = c("toStringTag");
const i_values = i.values;
const h = (t, r) => {
  if (t) {
    if (t[u] !== i_values) {
      try {
        s(t, u, i_values);
      } catch (r) {
        t[u] = i_values;
      }
    }
    if (!t[f]) {
      s(t, f, r);
    }
    if (o[r]) {
      for (const e in i) {
        if (t[e] !== i[e]) {
          try {
            s(t, e, i[e]);
          } catch (r) {
            t[e] = i[e];
          }
        }
      }
    }
  }
};
for (const p in o) {
  h(n[p] && n[p].prototype, p);
}
h(a, "DOMTokenList");
