import n from "./module-J_10.js";
import o from "./module-wem_9.js";
import i from "./module-Ts3_9.js";
import a from "./module-YaY_9.js";
import s from "./module-h_10.js";
const u = (t) => {
  if (t && t.forEach !== a) {
    try {
      s(t, "forEach", a);
    } catch (e) {
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
