import n from "./module-J_9.js";
import i from "./module-wem_8.js";
import o from "./module-Ts3_8.js";
import s from "./module-YaY_8.js";
import a from "./module-h_9.js";
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
