import n from "./module-J_15.js";
import o from "./module-Y_15.js";
const i = require("./module-lN_14.js")("observable");
const n_Observable = n.Observable;
const s = n_Observable && n_Observable.prototype;
export default !o(n_Observable) ||
  !o(n_Observable.from) ||
  !o(n_Observable.of) ||
  !o(s.subscribe) ||
  !o(s[i]);
