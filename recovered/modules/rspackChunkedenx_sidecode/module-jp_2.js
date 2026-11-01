import n from "./module-J_3.js";
import i from "./module-wem_2.js";
import o from "./module-Ts3_2.js";
import s from "./module-YaY_2.js";
import a from "./module-h_3.js";
const u = (t) => {
  if (t && t.forEach !== s) {
    try {
      a(t, "forEach", s);
    } catch (r) {
      t.forEach = s;
    }
  }
};
for (const c in i) {
  if (i[c]) {
    u(n[c] && n[c].prototype);
  }
}
u(o);
