import i from "NY";
import a from "oa";
import n from "QWK";
import o from "c8J";
import s from "k6";
import c from "Kt";
import u from "s1";
import _ from "jt";
import d from "wcw";
import l from "I4";
import { h } from "./module-fpt_2.js";
import { l as l_1 } from "./module-O9.js";
import { e as e_1 } from "./module-ta_2.js";
export class J extends l_1 {
  generatePayOrder(e, t) {
    return this._generatePayOrderV3(e, t);
  }
  generatePayTask(e, t) {
    return this._generatePayTaskV3(e, t);
  }
  _generatePayOrderV3(e, t) {
    return this._dreaminaPayDataService.makeOverseaOrderV3(e, t);
  }
  _generatePayTaskV3(e, t) {
    const r = this._dreaminaPayDataService.queryOverseaOrderStatusV3.bind(
      this._dreaminaPayDataService,
      e,
    );
    const n = o.A(h, 2000, {
      trailing: false,
    });
    const s = (e) =>
      i
        ._(function* () {
          d.jo("query_vip_order");
          const { orderId } = e;
          const o = yield r(a._({}, t, e));
          const duration = l.X("query_vip_order");
          n(this._containerService, {
            status: o.ok ? "success" : "error",
            duration,
            orderId,
            orderType: t.type === "credits" ? "credit" : "vip",
            errMsg: o.ok ? undefined : o.msg,
            logId: o.ok ? undefined : _.jV(o.cause),
          });
          return o;
        })
        .call(this);
    return new e_1(t.orderId, s, undefined, 2000);
  }
  constructor(e, t) {
    super();
    this._containerService = e;
    this._dreaminaPayDataService = t;
  }
}
n.Cg(
  [
    s.cx("OverseaPayManager", "generatePayOrder"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGenerateOrderParams === "undefined"
        ? Object
        : IGenerateOrderParams,
    ]),
    n.Sn("design:returntype", undefined),
  ],
  J.prototype,
  "generatePayOrder",
  null,
);
n.Cg(
  [
    s.cx("OverseaPayManager", "generatePayTask"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGetOverseaOrderParams === "undefined"
        ? Object
        : IGetOverseaOrderParams,
    ]),
    n.Sn("design:returntype", undefined),
  ],
  J.prototype,
  "generatePayTask",
  null,
);
n.Cg(
  [
    s.cx("OverseaPayManager", "_generatePayOrderV3"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IMakeOverseaOrderParamsV3 === "undefined"
        ? Object
        : IMakeOverseaOrderParamsV3,
    ]),
    n.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  J.prototype,
  "_generatePayOrderV3",
  null,
);
n.Cg(
  [
    s.cx("OverseaPayManager", "_generatePayTaskV3"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGetOverseaOrderStatusParamsV3 === "undefined"
        ? Object
        : IGetOverseaOrderStatusParamsV3,
    ]),
    n.Sn(
      "design:returntype",
      typeof IPayTask === "undefined" ? Object : IPayTask,
    ),
  ],
  J.prototype,
  "_generatePayTaskV3",
  null,
);
J = n.Cg(
  [
    n.Qj(0, c._),
    n.Qj(1, u._l),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      c._ === undefined ? Object : c._,
      u._l === undefined ? Object : u._l,
    ]),
  ],
  J,
);
