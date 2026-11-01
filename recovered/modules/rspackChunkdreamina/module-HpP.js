import i from "QWK";
import a from "Iv";
import n from "SI";
import { sq } from "./module-Com.js";
import s from "VN";
class c {
  getEventParams() {
    const {
      status,
      duration,
      stage,
      errMsg,
      primaryFailedTask,
      failedTask,
      taskCount,
      successTaskCount,
      failedTaskCount,
      taskStatus,
      slowestTask,
      slowestTaskDuration,
      errorCategory,
      errorCode,
      errorMsg,
      errorDetail,
      logId,
    } = this._params;
    const { isVip, currentVipLevel } = this._vipService;
    return {
      status,
      duration,
      stage,
      err_msg: errMsg,
      primary_failed_task: primaryFailedTask,
      failed_task: failedTask,
      task_count: taskCount,
      success_task_count: successTaskCount,
      failed_task_count: failedTaskCount,
      task_status: taskStatus,
      slowest_task: slowestTask,
      slowest_task_duration: slowestTaskDuration,
      error_category: errorCategory,
      error_code: errorCode,
      error_msg: errorMsg,
      error_detail: errorDetail,
      log_id: logId,
      is_vip: +!!isVip,
      user_subscribe_type: n.PR[currentVipLevel],
      credit_now: this._commercialCreditService.localCredit,
    };
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._commercialCreditService = r;
    this.eventName = "init_commercial_data_dev";
  }
}
export function V(e, t) {
  sq(e, c, [t]);
}
c = i.Cg(
  [
    i.Qj(1, s._),
    i.Qj(2, a.sG),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof IParams === "undefined" ? Object : IParams,
      s._ === undefined ? Object : s._,
      a.sG === undefined ? Object : a.sG,
    ]),
  ],
  c,
);
class _ {
  getEventParams() {
    const {
      stage,
      task,
      status,
      duration,
      errorCategory,
      errorCode,
      errorMsg,
      errorDetail,
      logId,
    } = this._params;
    const { isVip, currentVipLevel } = this._vipService;
    return {
      stage,
      task,
      status,
      duration,
      error_category: errorCategory,
      error_code: errorCode,
      error_msg: errorMsg,
      error_detail: errorDetail,
      log_id: logId,
      is_vip: +!!isVip,
      user_subscribe_type: n.PR[currentVipLevel],
      credit_now: this._commercialCreditService.localCredit,
    };
  }
  constructor(e, t, r) {
    this._params = e;
    this._vipService = t;
    this._commercialCreditService = r;
    this.eventName = "init_commercial_data_task_dev";
  }
}
export function m(e, t) {
  sq(e, _, [t]);
}
_ = i.Cg(
  [
    i.Qj(1, s._),
    i.Qj(2, a.sG),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof ITaskParams === "undefined" ? Object : ITaskParams,
      s._ === undefined ? Object : s._,
      a.sG === undefined ? Object : a.sG,
    ]),
  ],
  _,
);
