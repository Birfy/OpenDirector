import { PQ } from "./module-Com.js";
class a {
  getEventParams() {
    const { action } = this._params;
    return {
      action,
      url_path: location.pathname,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "newuser_bonus_popup_action";
  }
}
export function X(e, t) {
  PQ(e, a, [t]);
}
