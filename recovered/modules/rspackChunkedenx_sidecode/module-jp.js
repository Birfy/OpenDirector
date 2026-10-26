import n from "./module-J.js";
import o from "./module-wem.js";
import i from "./module-Ts3.js";
import a from "./module-YaY.js";
import s from "./module-h.js";
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
