import a from "./module-J_7.js";
import i from "./module-Pv_7.js";
let n;
let o;
const a_process = a.process;
const a_Deno = a.Deno;
const u = (a_process && a_process.versions) || (a_Deno && a_Deno.version);
const f = u && u.v8;
if (f) {
  o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1]);
}
if (
  !o &&
  i &&
  (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
  (n = i.match(/Chrome\/(\d+)/))
) {
  o = +n[1];
}
export default o;
