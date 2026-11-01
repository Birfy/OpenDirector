import n from "./module-J_12.js";
import o from "./module-wem_11.js";
import i from "./module-Ts3_11.js";
import a from "./module-YaY_11.js";
import s from "./module-h_12.js";
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
