import n from "./module-J_7.js";
import o from "./module-wem_6.js";
import a from "./module-Ts3_6.js";
import i from "./module-YaY_6.js";
import s from "./module-h_7.js";
const c = (t) => {
  if (t && t.forEach !== i) {
    try {
      s(t, "forEach", i);
    } catch (r) {
      t.forEach = i;
    }
  }
};
for (const u in o) {
  if (o[u]) {
    c(n[u] && n[u].prototype);
  }
}
c(a);
