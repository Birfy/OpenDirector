import n from "./module-F.js";
import o from "./module-VV_4.js";
import i from "./module-o.js";
import a from "./module-jA_2.js";
import s from "./module-W_2.js";
import u from "./module-MR.js";
const c = i(require("./module-FC_2.js").f);
const f = i([].push);
const l =
  n &&
  o(function () {
    const e = Object.create(null);
    e[2] = 2;
    return !c(e, 2);
  });
const p = (e) =>
  function (t) {
    let r;
    const o = u(t);
    const i = s(o);
    const p = l && a(o) === null;
    for (var h = i.length, v = 0, d = []; h > v;) {
      r = i[v++];
      if (!n || (p ? r in o : c(o, r))) {
        f(d, e ? [r, o[r]] : o[r]);
      }
    }
    return d;
  };
export default {
  entries: p(true),
  values: p(false),
};
