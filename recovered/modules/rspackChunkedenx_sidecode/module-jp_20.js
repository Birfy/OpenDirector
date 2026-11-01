import n from "./module-J_21.js";
import o from "./module-wem_20.js";
import i from "./module-Ts3_20.js";
import a from "./module-YaY_20.js";
import s from "./module-h_21.js";
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
