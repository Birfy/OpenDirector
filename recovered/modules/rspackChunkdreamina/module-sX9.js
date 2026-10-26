import i from "oa";
import { PQ } from "./module-Com.js";
class n {
  getEventParams() {
    return i._({}, this._params);
  }
  constructor(e) {
    this._params = e;
    this.eventName = "credits_detail";
  }
}
export function c(e, t) {
  PQ(e, n, [t]);
}
