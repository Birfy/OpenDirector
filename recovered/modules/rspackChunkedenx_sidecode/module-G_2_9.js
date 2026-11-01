import i from "./module-J_10.js";
import a from "./module-Pv_10.js";
let n;
let o;
const i_process = i.process;
const i_Deno = i.Deno;
const c = (i_process && i_process.versions) || (i_Deno && i_Deno.version);
const f = c && c.v8;
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
