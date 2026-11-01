import i from "./module-J_15.js";
import a from "./module-Pv_15.js";
let n;
let o;
const i_process = i.process;
const i_Deno = i.Deno;
const u = (i_process && i_process.versions) || (i_Deno && i_Deno.version);
const f = u && u.v8;
if (f) {
  o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1]);
}
if (
  !o &&
  a &&
  (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
  (n = a.match(/Chrome\/(\d+)/))
) {
  o = +n[1];
}
export default o;
