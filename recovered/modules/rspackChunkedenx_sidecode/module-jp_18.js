import n from "./module-J_19.js";
import o from "./module-wem_18.js";
import i from "./module-Ts3_18.js";
import a from "./module-YaY_18.js";
import s from "./module-h_19.js";
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
