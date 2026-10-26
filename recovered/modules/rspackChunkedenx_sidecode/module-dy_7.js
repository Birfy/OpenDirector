import n from "./module-J_6.js";
import i from "./module-Y_6.js";
const o = require("./module-lN_5.js")("observable");
const n_Observable = n.Observable;
const a = n_Observable && n_Observable.prototype;
export default !i(n_Observable) ||
  !i(n_Observable.from) ||
  !i(n_Observable.of) ||
  !i(a.subscribe) ||
  !i(a[o]);
