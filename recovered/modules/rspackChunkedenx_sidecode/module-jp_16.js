import n from "./module-J_17.js";
import o from "./module-wem_16.js";
import i from "./module-Ts3_16.js";
import a from "./module-YaY_16.js";
import s from "./module-h_17.js";
const u = (t) => {
  if (t && t.forEach !== a) {
    try {
      s(t, "forEach", a);
    } catch (r) {
      t.forEach = a;
    }
  }
};
for (const c in o) {
  if (o[c]) {
    u(n[c] && n[c].prototype);
  }
}
u(i);
