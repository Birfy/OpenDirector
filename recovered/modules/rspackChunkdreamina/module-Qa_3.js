import n from "./module-fM_3.js";
import o from "./module-o.js";
import i from "./module-x.js";
import a from "./module-O_2.js";
import s from "./module-OG_2.js";
import u from "./module-UF_2.js";
const u_Map = u.Map;
const u_get = u.get;
const u_has = u.has;
const u_set = u.set;
const h = o([].push);
export default function (e) {
  let t;
  let r;
  const o = a(this);
  const u = i(o);
  const v = n(e, arguments.length > 1 ? arguments[1] : undefined);
  const d = new u_Map();
  for (let g = s(u), y = 0; g > y; y++) {
    if (u_has(d, (t = v((r = u[y]), y, o)))) {
      h(u_get(d, t), r);
    } else {
      u_set(d, t, [r]);
    }
  }
  return d;
}
