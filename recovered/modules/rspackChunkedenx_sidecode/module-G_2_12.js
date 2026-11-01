import te from "./module-J_13.js";
import tr from "./module-Pv_13.js";
let $;
let tt;
const te_process = te.process;
const te_Deno = te.Deno;
const to = (te_process && te_process.versions) || (te_Deno && te_Deno.version);
const ta = to && to.v8;
if (ta) {
  tt = ($ = ta.split("."))[0] > 0 && $[0] < 4 ? 1 : +($[0] + $[1]);
}
if (
  !tt &&
  tr &&
  (!($ = tr.match(/Edge\/(\d+)/)) || $[1] >= 74) &&
  ($ = tr.match(/Chrome\/(\d+)/))
) {
  tt = +$[1];
}
export default tt;
