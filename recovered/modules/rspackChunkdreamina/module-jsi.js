import { sq } from "./module-Com.js";
class a {
  getEventParams() {
    const { status, duration, logId, errMsg } = this._params;
    return {
      status,
      duration,
      log_id: logId,
      err_msg: errMsg,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "receive_credit_dev";
  }
}
export function V(e, t) {
  sq(e, a, [t]);
}
