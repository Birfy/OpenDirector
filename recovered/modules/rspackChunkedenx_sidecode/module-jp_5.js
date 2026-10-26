import n from "./module-J_6.js";
import i from "./module-wem_5.js";
import o from "./module-Ts3_5.js";
import s from "./module-YaY_5.js";
import a from "./module-h_6.js";
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
