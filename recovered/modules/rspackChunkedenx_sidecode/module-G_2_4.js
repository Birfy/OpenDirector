import o from "./module-J_5.js";
import s from "./module-Pv_5.js";
let n;
let i;
const o_process = o.process;
const o_Deno = o.Deno;
const c = (o_process && o_process.versions) || (o_Deno && o_Deno.version);
const f = c && c.v8;
if (f) {
  i = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1]);
}
if (
  !i &&
  s &&
  (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
  (n = s.match(/Chrome\/(\d+)/))
) {
  i = +n[1];
}
export default i;
