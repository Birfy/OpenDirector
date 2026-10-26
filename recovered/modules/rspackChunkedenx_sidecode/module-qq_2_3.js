import n from "./module-J_4.js";
import i from "./module-wem_3.js";
import o from "./module-Ts3_3.js";
import s from "./module-PC_3.js";
import a from "./module-h_4.js";
import u from "./module-lN_3.js";
const c = u("iterator");
const f = u("toStringTag");
const s_values = s.values;
const l = (t, r) => {
  if (t) {
    if (t[c] !== s_values) {
      try {
        a(t, c, s_values);
      } catch (r) {
        t[c] = s_values;
      }
    }
    if (!t[f]) {
      a(t, f, r);
    }
    if (i[r]) {
      for (const e in s) {
        if (t[e] !== s[e]) {
          try {
            a(t, e, s[e]);
          } catch (r) {
            t[e] = s[e];
          }
        }
      }
    }
  }
};
for (const v in i) {
  l(n[v] && n[v].prototype, v);
}
l(o, "DOMTokenList");
