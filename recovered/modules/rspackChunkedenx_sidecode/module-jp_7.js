import n from "./module-J_8.js";
import o from "./module-wem_7.js";
import i from "./module-Ts3_7.js";
import a from "./module-YaY_7.js";
import s from "./module-h_8.js";
const u = (r) => {
  if (r && r.forEach !== a) {
    try {
      s(r, "forEach", a);
    } catch (t) {
      r.forEach = a;
    }
  }
};
for (const c in o) {
  if (o[c]) {
    u(n[c] && n[c].prototype);
  }
}
u(i);
