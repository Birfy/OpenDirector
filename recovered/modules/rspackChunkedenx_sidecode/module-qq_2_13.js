import n from "./module-J_14.js";
import o from "./module-wem_13.js";
import i from "./module-Ts3_13.js";
import a from "./module-PC_13.js";
import s from "./module-h_14.js";
import u from "./module-lN_13.js";
const c = u("iterator");
const f = u("toStringTag");
const a_values = a.values;
const l = (r, t) => {
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
  l(n[v] && n[v].prototype, v);
}
l(i, "DOMTokenList");
