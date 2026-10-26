import n from "./module-J_7.js";
import o from "./module-Y_7.js";
const a = require("./module-lN_6.js")("observable");
const n_Observable = n.Observable;
const s = n_Observable && n_Observable.prototype;
export default !o(n_Observable) ||
  !o(n_Observable.from) ||
  !o(n_Observable.of) ||
  !o(s.subscribe) ||
  !o(s[a]);
