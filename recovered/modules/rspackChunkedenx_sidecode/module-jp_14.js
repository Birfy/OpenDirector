import n from "./module-J_15.js";
import o from "./module-wem_14.js";
import i from "./module-Ts3_14.js";
import a from "./module-YaY_14.js";
import s from "./module-h_15.js";
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
