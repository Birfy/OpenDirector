import n from "./module-J_4.js";
import i from "./module-Y_4.js";
const o = require("./module-lN_3.js")("observable");
const n_Observable = n.Observable;
const a = n_Observable && n_Observable.prototype;
export default !i(n_Observable) ||
  !i(n_Observable.from) ||
  !i(n_Observable.of) ||
  !i(a.subscribe) ||
  !i(a[o]);
