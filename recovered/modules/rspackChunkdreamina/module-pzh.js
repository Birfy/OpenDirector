import i from "NY";
import a from "qa";
import n from "QWK";
import o from "c8J";
import s from "Qn";
import c from "k6";
import u from "Kt";
import _ from "s1";
import d from "zbK";
import l from "jt";
import p from "wcw";
import m from "I4";
import { h } from "./module-fpt_2.js";
import { l as l_1 } from "./module-O9.js";
import { e as e_1 } from "./module-ta_2.js";
import { a as a_1 } from "./module-wU_3.js";
const S = "query_token_order";
class f extends l_1 {
  generatePayOrder(e, t) {
    if (t.type === "credits") {
      return this._generateCreditPayOrder(e, t);
    }
    if (t.type === a_1.TeamCredits) {
      return this._generateTeamCreditPayOrder(e, t);
    }
    if (t.type === d.NN.Team) {
      return this._generateTeamTradePayOrder(e, t);
    }
    if (t.type === "token") {
      return this._generateTokenPackagePayOrder(e, t);
    }
    if (t.type === "vip" && "scene" in t && t.scene !== d.fq.Teams) {
      return this._generateVipAutoPayOrder(e, t);
    }
    return this._generateVipPayOrder(e, t);
  }
  generatePayTask(e, t) {
    if (t.type === d.NN.Team || t.type === a_1.TeamCredits) {
      return this._generateTeamPayTask(e, t);
    }
    if (t.type === "credits") {
      return this._generateCreditPayTask(e, t);
    }
    if (t.type === "token") {
      return this._generateTokenPackagePayTask(e, t);
    }
    return this._generateVipPayTask(e, t);
  }
  _generateCreditPayOrder(e, t) {
    return this._dreaminaPayDataService.makeCreditOrder(e, t);
  }
  _generateTeamCreditPayOrder(e, t) {
    const { type } = t;
    const i = a._(t, ["type"]);
    return this._dreaminaPayDataService.initTeamCreditTrade(e, i);
  }
  _generateTokenPackagePayOrder(e, t) {
    return this._dreaminaPayDataService.makeTokenPackageOrder(e, t);
  }
  _generateVipPayOrder(e, t) {
    return this._dreaminaPayDataService.makeUnautoVIPOrder(e, t);
  }
  _generateVipAutoPayOrder(e, t) {
    return this._dreaminaPayDataService.makeAutoVIPOrder(e, t);
  }
  _generateTeamTradePayOrder(e, t) {
    const { type } = t;
    const i = a._(t, ["type"]);
    return this._commercialPayTradeDataService.initTrade(i);
  }
  _generateVipPayTask(e, t) {
    const r = this._dreaminaPayDataService.queryVIPOrderStatus.bind(
      this._dreaminaPayDataService,
      e,
    );
    const a = o.A(h, 2000, {
      trailing: false,
    });
    const n = (e) =>
      i
        ._(function* () {
          p.jo("query_vip_order");
          const { orderId } = e;
          const i = yield r(e);
          const n = m.X("query_vip_order");
          a(this._containerService, {
            status: i.ok ? "success" : "error",
            duration: n,
            orderId,
            orderType: "vip",
            errMsg: i.ok ? undefined : i.msg,
            logId: i.ok ? undefined : l.jV(i.cause),
          });
          return i;
        })
        .call(this);
    const s = this._dreaminaPayDataService.cancelVIPOrder.bind(
      this._dreaminaPayDataService,
    );
    return new e_1(t.orderId, n, s, 2000);
  }
  _generateCreditPayTask(e, t) {
    const r = this._dreaminaPayDataService.queryCreditOrderStatus.bind(
      this._dreaminaPayDataService,
      e,
    );
    const a = o.A(h, 2000, {
      trailing: false,
    });
    const n = (e) =>
      i
        ._(function* () {
          p.jo("query_credit_order");
          const { orderId } = e;
          const i = yield r(e);
          const n = m.X("query_credit_order");
          a(this._containerService, {
            status: i.ok ? "success" : "error",
            duration: n,
            orderId,
            orderType: "credit",
            errMsg: i.ok ? undefined : i.msg,
            logId: i.ok ? undefined : l.jV(i.cause),
          });
          return i;
        })
        .call(this);
    const s = this._dreaminaPayDataService.cancelCreditOrder.bind(
      this._dreaminaPayDataService,
    );
    return new e_1(t.orderId, n, s, 2000);
  }
  _generateTeamPayTask(e, t) {
    const r = t.type === a_1.TeamCredits;
    const a = r
      ? this._dreaminaPayDataService.queryTeamCreditOrderStatus.bind(
          this._dreaminaPayDataService,
          e,
        )
      : this._dreaminaPayDataService.queryVIPOrderStatus.bind(
          this._dreaminaPayDataService,
          e,
        );
    const n = r ? "query_credit_order" : "query_vip_order";
    const orderType = r ? "credit" : "vip";
    const c = o.A(h, 2000, {
      trailing: false,
    });
    const u = (e) =>
      i
        ._(function* () {
          p.jo(n);
          const { orderId } = e;
          const r = yield a(e);
          const i = m.X(n);
          c(this._containerService, {
            status: r.ok ? "success" : "error",
            duration: i,
            orderId,
            orderType,
            errMsg: r.ok ? undefined : r.msg,
            logId: r.ok ? undefined : l.jV(r.cause),
          });
          return r;
        })
        .call(this);
    return new e_1(t.orderId, u, undefined, 2000);
  }
  _generateTokenPackagePayTask(e, t) {
    const r = this._dreaminaPayDataService.queryTokenPackageOrderStatus.bind(
      this._dreaminaPayDataService,
      e,
    );
    const a = o.A(h, 2000, {
      trailing: false,
    });
    const n = (e) =>
      i
        ._(function* () {
          p.jo(S);
          let t;
          const { orderId } = e;
          const n = yield r(e);
          const o = m.X(S);
          a(this._containerService, {
            status: n.ok ? "success" : "error",
            duration: o,
            orderId,
            orderType: "token",
            errMsg: n.ok ? undefined : n.msg,
            logId: n.ok || (t = n.cause) == null ? undefined : t.log_id,
          });
          return n;
        })
        .call(this);
    const s = this._dreaminaPayDataService.cancelTokenPackageOrder.bind(
      this._dreaminaPayDataService,
    );
    return new e_1(t.orderId, n, s, 2000);
  }
  constructor(e, t, r) {
    super();
    this._containerService = e;
    this._dreaminaPayDataService = t;
    this._commercialPayTradeDataService = r;
  }
}
export { f as o };
n.Cg(
  [
    c.cx("DomesticPayManager", "generatePayOrder"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof T === "undefined" ? Object : T,
    ]),
    n.Sn("design:returntype", undefined),
  ],
  f.prototype,
  "generatePayOrder",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "generatePayTask"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGeneratePayTask === "undefined" ? Object : IGeneratePayTask,
    ]),
    n.Sn("design:returntype", undefined),
  ],
  f.prototype,
  "generatePayTask",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateCreditPayOrder"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IMakeCreditOrderParams === "undefined"
        ? Object
        : IMakeCreditOrderParams,
    ]),
    n.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  f.prototype,
  "_generateCreditPayOrder",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateTeamCreditPayOrder"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGenerateTeamCreditOrderParams === "undefined"
        ? Object
        : IGenerateTeamCreditOrderParams,
    ]),
    n.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  f.prototype,
  "_generateTeamCreditPayOrder",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateTokenPackagePayOrder"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IMakeTokenPackageOrderParams === "undefined"
        ? Object
        : IMakeTokenPackageOrderParams,
    ]),
    n.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  f.prototype,
  "_generateTokenPackagePayOrder",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateVipPayOrder"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IMakeVIPUnautoOrderParams === "undefined"
        ? Object
        : IMakeVIPUnautoOrderParams,
    ]),
    n.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  f.prototype,
  "_generateVipPayOrder",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateVipAutoPayOrder"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGenerateVipAutoOrderParams === "undefined"
        ? Object
        : IGenerateVipAutoOrderParams,
    ]),
    n.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  f.prototype,
  "_generateVipAutoPayOrder",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateTeamTradePayOrder"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGenerateTeamTradeOrderParams === "undefined"
        ? Object
        : IGenerateTeamTradeOrderParams,
    ]),
    n.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  f.prototype,
  "_generateTeamTradePayOrder",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateVipPayTask"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGeneratePayTask === "undefined" ? Object : IGeneratePayTask,
    ]),
    n.Sn(
      "design:returntype",
      typeof IPayTask === "undefined" ? Object : IPayTask,
    ),
  ],
  f.prototype,
  "_generateVipPayTask",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateCreditPayTask"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGeneratePayTask === "undefined" ? Object : IGeneratePayTask,
    ]),
    n.Sn(
      "design:returntype",
      typeof IPayTask === "undefined" ? Object : IPayTask,
    ),
  ],
  f.prototype,
  "_generateCreditPayTask",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateTeamPayTask"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGeneratePayTask === "undefined" ? Object : IGeneratePayTask,
    ]),
    n.Sn(
      "design:returntype",
      typeof IPayTask === "undefined" ? Object : IPayTask,
    ),
  ],
  f.prototype,
  "_generateTeamPayTask",
  null,
);
n.Cg(
  [
    c.cx("DomesticPayManager", "_generateTokenPackagePayTask"),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof IGeneratePayTask === "undefined" ? Object : IGeneratePayTask,
    ]),
    n.Sn("design:returntype", undefined),
  ],
  f.prototype,
  "_generateTokenPackagePayTask",
  null,
);
f = n.Cg(
  [
    n.Qj(0, u._),
    n.Qj(1, _._l),
    n.Qj(2, s.ICommercialPayTradeDataService),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      u._ === undefined ? Object : u._,
      _._l === undefined ? Object : _._l,
      typeof ICommercialPayTradeDataServiceType === "undefined"
        ? Object
        : ICommercialPayTradeDataServiceType,
    ]),
  ],
  f,
);
