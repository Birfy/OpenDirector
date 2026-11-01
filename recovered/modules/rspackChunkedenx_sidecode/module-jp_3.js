import n from "./module-J_4.js";
import i from "./module-wem_3.js";
import o from "./module-Ts3_3.js";
import s from "./module-YaY_3.js";
import a from "./module-h_4.js";
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
