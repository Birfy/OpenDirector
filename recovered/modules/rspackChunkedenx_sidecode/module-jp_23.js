import n from "./module-J_24.js";
import o from "./module-wem_23.js";
import i from "./module-Ts3_23.js";
import a from "./module-YaY_23.js";
import s from "./module-h_24.js";
const c = (t) => {
  if (t && t.forEach !== a) {
    try {
      s(t, "forEach", a);
    } catch (r) {
      t.forEach = a;
    }
  }
};
for (const u in o) {
  if (o[u]) {
    c(n[u] && n[u].prototype);
  }
}
c(i);
