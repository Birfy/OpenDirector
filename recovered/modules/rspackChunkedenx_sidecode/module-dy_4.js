import n from "./module-J_3.js";
import i from "./module-Y_3.js";
const o = require("./module-lN_2.js")("observable");
const n_Observable = n.Observable;
const a = n_Observable && n_Observable.prototype;
export default !i(n_Observable) ||
  !i(n_Observable.from) ||
  !i(n_Observable.of) ||
  !i(a.subscribe) ||
  !i(a[o]);
