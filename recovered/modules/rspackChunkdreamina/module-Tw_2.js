if (require.j == "wl4") var a = require("./module-VF_3.js");
if (require.j == "wl4") var o = require("./module-UK_2.js");
let i = require.j == "wl4" ? -1 : null;
let n = require.j == "wl4" ? 1073741823 : null;
export function Ln() {
  return Date.now();
}
export function uN(e = o.J.NormalPriority) {
  switch (e) {
    case o.J.ImmediatePriority:
      return i;
    case o.J.UserBlockingPriority:
      return 250;
    case o.J.IdlePriority:
      return n;
    case o.J.LowPriority:
      return 10000;
    case o.J.NormalPriority:
    default:
      return 5000;
  }
}
export function Wl(e, t = {}) {
  let r;
  let o = Ln();
  let i = (r = t.delay) != null ? r : 0;
  let n = uN(t.priorityLevel);
  let s = i + o;
  return new a.Y(e, s, s + n);
}
