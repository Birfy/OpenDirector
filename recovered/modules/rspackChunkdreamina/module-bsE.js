import i from "NY";
import n from "oa";
import a from "bk";
import o from "QWK";
import s from "dw4";
import c from "Dm";
import l from "M8X";
import d from "JSz";
import u from "k6";
import p from "RJ";
import m from "Kt";
import h from "Up";
import v from "jt";
import _ from "wcw";
import y from "I4";
import g from "pzh";
import b from "wU";
import f from "By";
import x from "kDM";
import P from "hag";
import C from "Iv";
import S from "gLs";
import A from "oh";
import k from "jh7";
import { s as s_1 } from "./module-H9.js";
import { X3, ao } from "./module-h2.js";
export class O extends s_1 {
  get _reportParams() {
    let e;
    let t;
    let r;
    const i =
      (e = this._creditPopupReportProduct) != null ? e : this.currentProduct;
    return a._(
      n._(
        {
          creditNow: this._commercialCreditService.localCredit,
          selectCreditsAmount:
            i == null || (r = i.number) == null ? undefined : r.toString(),
          payAmount: i == null ? undefined : i.amount,
          payCurrency: i == null ? undefined : i.currencyCode,
        },
        this._injectReportParams,
      ),
      {
        teamType:
          (t = this._injectReportParams.teamType) != null ? t : "personal",
        teamId: this._injectReportParams.teamId,
      },
    );
  }
  get purchaseEligibility() {
    if (this._creditRechargeContext.creditScene !== "team") {
      return "allowed";
    }
    const e = l.cQ(this._containerService, k.r3);
    return (function (e, t) {
      const r =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : Date.now();
      if (e && t.teamId === e && t.status !== "unknown") {
        if (
          t.status === "expired" ||
          t.status === "none" ||
          (t.expireTime && 1000 * t.expireTime <= r)
        ) {
          return "renew";
        }
        if (t.isActive) {
          return "allowed";
        }
        return "unavailable";
      }
      return "unavailable";
    })(this._creditRechargeContext.targetTeamId, e.team);
  }
  get qrCodeUrl() {
    return this._orderRelatedUrl;
  }
  get qrCodeLoading() {
    return this._isOrderLoading;
  }
  reportPopup(e) {
    let t;
    const {
      action,
      orderId,
      payChannel,
      productId,
      customReportParams,
      currentTab,
    } = e;
    const d = action === "click_tab";
    const _reportParams = this._reportParams;
    const p =
      (t = this._creditPopupReportProduct) != null ? t : this.currentProduct;
    f.Mn(
      this._containerService,
      a._(
        n._(
          {
            action,
          },
          _reportParams,
          d
            ? {
                selectCreditsAmount: undefined,
                payAmount: undefined,
                payCurrency: undefined,
              }
            : {},
        ),
        {
          currentTab:
            currentTab != null ? currentTab : this._creditPopupCurrentTab,
          payChannel,
          orderId,
          sku: d
            ? undefined
            : productId != null
              ? productId
              : p == null
                ? undefined
                : p.productId,
          customReportParams: n._(
            {},
            _reportParams.customReportParams,
            customReportParams,
          ),
        },
      ),
    );
  }
  setCreditPopupReportContext(e, t) {
    this._creditPopupReportProduct = e;
    this._creditPopupCurrentTab = t;
  }
  setCurrentProduct(e, t) {
    const r = this;
    const n = () => super.setCurrentProduct;
    return i._(function* () {
      yield n().call(r, e, t, true);
    })();
  }
  setCurrentCreditProductSnapshot(e, t) {
    const r =
      !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    return i
      ._(function* () {
        yield this._setCurrentProductItem(e, t, r);
      })
      .call(this);
  }
  get _isOverSea() {
    return this._commercialEnvironmentService.isOversea;
  }
  _generateOrder(e) {
    return i
      ._(function* () {
        if (this.currentProduct) {
          const t = d.bz();
          _.jo(`make_order_credit_`.concat(t));
          const r = yield this._generatePayOrderByScene(e);
          const duration = y.X(`make_order_credit_`.concat(t));
          x.l(this._containerService, {
            status: r.ok ? "success" : "error",
            productId: this.currentProduct.productId,
            duration,
            orderId: r.ok ? r.value.orderId : "",
            orderType: "credit",
            errMsg: r.ok ? undefined : r.msg,
            logId: r.ok ? undefined : v.jV(r.cause),
            code: r.ok ? undefined : v.xp(r.cause),
          });
          this._updateOrderError(!r.ok);
          if (!r.ok) {
            return void this._onGenerateOrderError.fire(r);
          }
          this._onGenerateOrderSuccess.fire(r.value);
          const n = r.value;
          let a = this._getOrderRelatedUrl(n);
          try {
            a = yield h.D(a);
          } catch (e) {}
          s.h5(() => {
            this._observableData.orderRelatedUrl = a;
          });
          return n;
        }
      })
      .call(this);
  }
  _generateTask(e) {
    c.F4(this.orderInfo);
    return this._domesticPayManager.generatePayTask(e, {
      type:
        this._creditRechargeContext.creditScene === "team"
          ? b.a.TeamCredits
          : "credits",
      orderId: this.orderInfo.orderId,
    });
  }
  _generatePayOrderByScene(e) {
    if (this._creditRechargeContext.creditScene !== "team") {
      c.F4(this.currentProduct);
      return this._domesticPayManager.generatePayOrder(e, {
        type: "credits",
        aid: Number(p.R(this._isOverSea)),
        platform: 7,
        productId: this.currentProduct.productId,
        goodsIdStr: this.currentProduct.goodsId,
        goodsType: this.currentProduct.goodsType,
        pmsTrade: this.currentProduct.pmsTrade,
        extra: ao(
          undefined,
          this._reportParams.customReportParams,
          X3(this._accountPort.getSnapshot()),
        ),
      });
    }
    c.F4(this.currentProduct);
    c.F4(
      this._creditRechargeContext.targetTeamId,
      "targetTeamId is required for team credit recharge",
    );
    c.F4(
      this._creditRechargeContext.teamCreditTradeType,
      "teamCreditTradeType is required for team credit recharge",
    );
    return this._domesticPayManager.generatePayOrder(e, {
      type: b.a.TeamCredits,
      targetTeamId: this._creditRechargeContext.targetTeamId,
      productId: this.currentProduct.productId,
      pmsTrade: this.currentProduct.pmsTrade,
      amount: this.currentProduct.amount,
      tradeType: this._creditRechargeContext.teamCreditTradeType,
      consumablesId: this.currentProduct.goodsId,
      consumablesType: this.currentProduct.goodsType,
      extra: ao(
        undefined,
        this._reportParams.customReportParams,
        X3(this._accountPort.getSnapshot()),
      ),
    });
  }
  _getOrderRelatedUrl(e) {
    let t;
    let r;
    let i;
    let n;
    if ("payParams" in e) {
      return e.payParams;
    }
    if (
      (t =
        (r = (i = e.cjThirdPartyResult) == null ? undefined : i.qrCode) != null
          ? r
          : (n = e.cjThirdPartyResult) == null
            ? undefined
            : n.payParams) != null
    ) {
      return t;
    }
    return "";
  }
  updateIsAgreeAgreement(e, t) {
    const r =
      !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    const n = this;
    const a = () => super.updateIsAgreeAgreement;
    return i
      ._(function* () {
        try {
          if (t) {
            this.reportPopup({
              action: "agree_protocol",
            });
          }
        } catch (e) {}
        yield a().call(n, e, t, r);
      })
      .call(this);
  }
  _updateIsOrderLoading(e) {
    super._updateIsOrderLoading(e);
    if (e) {
      this.reportPopup({
        action: "get_qr_code",
      });
    }
  }
  _updateOrderInfo(e) {
    super._updateOrderInfo(e);
    this.reportPopup({
      action: "show_qr_code",
    });
  }
  _updateOrderError(e) {
    super._updateOrderError(e);
    if (e) {
      this.reportPopup({
        action: "fail_to_get_qr_code",
      });
    }
  }
  _updateOrderFailed(e) {
    super._updateOrderFailed(e);
    if (e) {
      this.reportPopup({
        action: "invalid_qr_code",
      });
    }
  }
  constructor(e, t = {}, r, i, n, a, o) {
    var s;
    super(
      r,
      (s = t.creditPriceList) != null ? s : n.creditPriceList,
      "credit",
      t.creditScene === "team" && t.targetTeamId
        ? {
            currentTeamId: t.targetTeamId,
          }
        : undefined,
    );
    this._injectReportParams = e;
    this._creditRechargeContext = t;
    this._containerService = r;
    this._commercialEnvironmentService = i;
    this._commercialGoodsService = n;
    this._commercialCreditService = a;
    this._accountPort = o;
    this._domesticPayManager = this._containerService.createInstance(g.o);
  }
}
o.Cg(
  [
    u.cx("CreditsPayManager", "setCurrentProduct"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      String,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  O.prototype,
  "setCurrentProduct",
  null,
);
o.Cg(
  [
    u.cx("CreditsPayManager", "setCurrentCreditProductSnapshot"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof ICreditPrice === "undefined" ? Object : ICreditPrice,
      Boolean,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  O.prototype,
  "setCurrentCreditProductSnapshot",
  null,
);
o.Cg(
  [
    u.cx("CreditsPayManager", "_generateOrder"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  O.prototype,
  "_generateOrder",
  null,
);
o.Cg(
  [
    u.cx("CreditsPayManager", "_generateTask"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", undefined),
  ],
  O.prototype,
  "_generateTask",
  null,
);
o.Cg(
  [
    u.cx("CreditsPayManager", "updateIsAgreeAgreement"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      Boolean,
      Boolean,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  O.prototype,
  "updateIsAgreeAgreement",
  null,
);
O = o.Cg(
  [
    o.Qj(2, m._),
    o.Qj(3, S.o),
    o.Qj(4, A.$),
    o.Qj(5, C.sG),
    o.Qj(6, P.F),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ICreditReportParams === "undefined" ? Object : ICreditReportParams,
      typeof CreditRechargeContext === "undefined"
        ? Object
        : CreditRechargeContext,
      m._ === undefined ? Object : m._,
      S.o === undefined ? Object : S.o,
      A.$ === undefined ? Object : A.$,
      C.sG === undefined ? Object : C.sG,
      P.F === undefined ? Object : P.F,
    ]),
  ],
  O,
);
