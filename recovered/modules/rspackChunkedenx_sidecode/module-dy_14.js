import $ from "./module-J_13.js";
import tt from "./module-Y_13.js";
const te = require("./module-lN_12.js")("observable");
const $_Observable = $.Observable;
const tn = $_Observable && $_Observable.prototype;
export default !tt($_Observable) ||
  !tt($_Observable.from) ||
  !tt($_Observable.of) ||
  !tt(tn.subscribe) ||
  !tt(tn[te]);
