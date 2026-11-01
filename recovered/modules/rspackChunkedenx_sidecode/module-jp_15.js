import n from "./module-J_16.js";
import o from "./module-wem_15.js";
import i from "./module-Ts3_15.js";
import a from "./module-YaY_15.js";
import s from "./module-h_16.js";
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
