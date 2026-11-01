import i from "Qey";
import r from "./module-nXV.js";
export function d(e) {
  const t = i.Ay.t(r.K, {}, '"');
  const a = i.Ay.t(r.v, {}, '"');
  return new RegExp(
    "(".concat(t, "[^").concat(t).concat(a, "]+").concat(a, ')|("[^"]+")'),
  ).test(e);
}
