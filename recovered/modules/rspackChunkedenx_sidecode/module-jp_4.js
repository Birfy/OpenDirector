import n from "./module-J_5.js";
import i from "./module-wem_4.js";
import o from "./module-Ts3_4.js";
import s from "./module-YaY_4.js";
import a from "./module-h_5.js";
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
