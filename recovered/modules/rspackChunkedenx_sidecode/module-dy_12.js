import n from "./module-J_11.js";
import o from "./module-Y_11.js";
const i = require("./module-lN_10.js")("observable");
const n_Observable = n.Observable;
const s = n_Observable && n_Observable.prototype;
export default !o(n_Observable) ||
  !o(n_Observable.from) ||
  !o(n_Observable.of) ||
  !o(s.subscribe) ||
  !o(s[i]);
