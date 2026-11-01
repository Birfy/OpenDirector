import a from "NY";
import o from "QWK";
import { _ } from "./module-Kt_2.js";
import { P } from "./module-aMM.js";
import { G } from "./module-yKf.js";
class c {
  getEventParams() {
    let { status, duration, code, message, logId } = this._params;
    return {
      status,
      duration,
      code,
      message,
      log_id: logId,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "query_resource_position";
  }
}
function l(_containerService, t) {
  P(_containerService, c, [t]);
}
class m {
  getEventParams() {
    let { status, duration, code, message, logId } = this._params;
    return {
      status,
      duration,
      code,
      message,
      log_id: logId,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "record_resource_action";
  }
}
function s(_containerService, t) {
  P(_containerService, m, [t]);
}
export class y {
  queryResourcePosition(e) {
    const t = this;
    return a._(function* () {
      let r = Date.now();
      let a = yield t._dataService.queryResourcePosition(e);
      let o = Date.now() - r;
      if (a.ok) {
        l(t._containerService, {
          status: "success",
          duration: o,
          code: "0",
          message: "success",
        });
      } else {
        let i;
        l(t._containerService, {
          status: "fail",
          code: a.code,
          message: a.msg,
          duration: o,
          logId: (i = a.errorInfo) == null ? undefined : i.logId,
        });
      }
      return a;
    })();
  }
  recordResourceAction(e) {
    const t = this;
    return a._(function* () {
      let r = Date.now();
      let a = yield t._dataService.recordResourceAction(e);
      let o = Date.now() - r;
      if (a.ok) {
        s(t._containerService, {
          status: "success",
          duration: o,
          code: "0",
          message: "success",
        });
      } else {
        let i;
        s(t._containerService, {
          status: "fail",
          code: a.code,
          message: a.msg,
          duration: o,
          logId: (i = a.errorInfo) == null ? undefined : i.logId,
        });
      }
      return a;
    })();
  }
  constructor(e, t) {
    this._containerService = e;
    this._dataService = t;
  }
}
y = o.Cg(
  [
    o.Qj(0, _),
    o.Qj(1, G),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      _ === undefined ? Object : _,
      G === undefined ? Object : G,
    ]),
  ],
  y,
);
