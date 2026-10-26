import n from "./module-J_14.js";
import o from "./module-wem_13.js";
import i from "./module-Ts3_13.js";
import a from "./module-YaY_13.js";
import s from "./module-h_14.js";
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
