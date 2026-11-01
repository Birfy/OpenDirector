import n from "./module-J_9.js";
import i from "./module-wem_8.js";
import o from "./module-Ts3_8.js";
import s from "./module-PC_8.js";
import a from "./module-h_9.js";
import u from "./module-lN_8.js";
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
