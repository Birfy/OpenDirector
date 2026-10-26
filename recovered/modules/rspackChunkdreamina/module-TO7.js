import i from "NY";
import n from "oa";
import a from "bk";
import o from "QWK";
import s from "dw4";
import c from "Dm";
import l from "JSz";
import d from "k6";
import u from "zP";
import p from "RJ";
import m from "Kt";
import h from "QSq";
import v from "jt";
import _ from "wcw";
import y from "I4";
import g from "wQa";
import b from "By";
import f from "kDM";
import x from "hag";
import P from "Iv";
import C from "gLs";
import S from "oh";
import { s as s_1 } from "./module-H9.js";
import { X3, ao } from "./module-h2.js";
class I extends s_1 {
  get _reportParams() {
    let e;
    let t;
    let r;
    let i;
    let o;
    return a._(
      n._(
        {
          creditNow: this._commercialCreditService.localCredit,
          selectCreditsAmount:
            (r = this.currentProduct) == null || (t = r.number) == null
              ? undefined
              : t.toString(),
          payAmount: (i = this.currentProduct) == null ? undefined : i.amount,
          payCurrency:
            (o = this.currentProduct) == null ? undefined : o.currencyCode,
        },
        this._injectReportParams,
      ),
      {
        teamType:
          (e = this._injectReportParams.teamType) != null ? e : "personal",
        teamId: this._injectReportParams.teamId,
      },
    );
  }
  get cashierUrl() {
    return this._orderRelatedUrl;
  }
  get isOrderLoading() {
    return this._isOrderLoading;
  }
  get creditPriceList() {
    return this._productList;
  }
  reportPopup(e) {
    const { action, orderId, payChannel } = e;
    const { currentProduct } = this;
    b.Mn(
      this._containerService,
      n._(
        {
          action,
          payChannel,
          orderId,
          sku: currentProduct == null ? undefined : currentProduct.productId,
        },
        this._reportParams,
      ),
    );
  }
  setCurrentProduct(e, t) {
    const r = this;
    const n = () => super.setCurrentProduct;
    return i._(function* () {
      yield n().call(r, e, t, false);
    })();
  }
  setCurrentProductByIndex(e, t) {
    const r = this;
    const n = () => super.setCurrentProductByIndex;
    return i._(function* () {
      yield n().call(r, e, t, false);
    })();
  }
  purchase(e) {
    return i
      ._(function* () {
        let t;
        if (
          !this._disposed &&
          !this._isOrderLoading &&
          this.currentProduct &&
          ((t = this._creditRechargeContext) == null ||
            !t.creditPriceList ||
            !this.currentProduct.disablePurchase)
        ) {
          this._updateIsOrderLoading(true);
          try {
            const r =
              this._commercialEnvironmentService.asyncPaymentWindowFallbackUrl;
            yield h.a(r, () =>
              i
                ._(function* () {
                  if (
                    this._disposed ||
                    (yield this.updateIsAgreeAgreement(e, true, false),
                    this._disposed)
                  ) {
                    return "";
                  }
                  if (this.currentProduct) {
                    yield this.setCurrentProduct(
                      e,
                      this.currentProduct.productId,
                    );
                  }
                  let t;
                  let r;
                  const i = yield this._generateOrder(e);
                  if (i) {
                    this._updateOrderInfo(i);
                    this._startListenOnly(e);
                    if (
                      (t =
                        (r = i.pipoAggregatePayInfo) == null
                          ? undefined
                          : r.cashierUrl) != null
                    ) {
                      return t;
                    }
                    return "";
                  }
                  return "";
                })
                .call(this),
            );
          } finally {
            this._updateIsOrderLoading(false);
          }
        }
      })
      .call(this);
  }
  dispose() {
    this._disposed = true;
    super.dispose();
  }
  get _isOverSea() {
    return this._commercialEnvironmentService.isOversea;
  }
  _generateOrder(e) {
    return i
      ._(function* () {
        if (this.currentProduct) {
          let t;
          const r = l.bz();
          _.jo(`make_order_credit_`.concat(r));
          const userCreateTime =
            (t = this._accountPort.getSnapshot().userProfile) == null
              ? undefined
              : t.createTime;
          c.F4(userCreateTime);
          const n = yield this._overseaPayManager.generatePayOrder(e, {
            type: "credits",
            appId: Number(p.R(this._isOverSea)),
            productId: this.currentProduct.productId,
            tradeType: "consumables",
            payChannel: "aggregate",
            pmsTrade: this.currentProduct.pmsTrade,
            pipoAggregateInfo: {
              userCreateTime,
              language: this._i18nService.currentLocale.split("-")[0],
              gpUnavailable: true,
              requestId: String(Date.now()),
              returnUrl: "".concat(
                location.origin,
                "/ai-tool/third-party-callback?closeImmediately=1",
              ),
            },
            consumablesInfo: {
              consumablesId: this.currentProduct.goodsId,
              consumablesType: this.currentProduct.goodsType,
            },
            extra: ao(
              undefined,
              this._reportParams.customReportParams,
              X3(this._accountPort.getSnapshot()),
            ),
          });
          if (!this._disposed) {
            const duration = y.X(`make_order_credit_`.concat(r));
            f.l(this._containerService, {
              status: n.ok ? "success" : "error",
              productId: this.currentProduct.productId,
              duration,
              orderId: n.ok ? n.value.orderId : "",
              orderType: "credit",
              errMsg: n.ok ? undefined : n.msg,
              logId: n.ok ? undefined : v.jV(n.cause),
              code: n.ok ? undefined : v.xp(n.cause),
            });
            this._updateOrderError(!n.ok);
            if (!n.ok) {
              return void this._onGenerateOrderError.fire(n);
            }
            this._onGenerateOrderSuccess.fire(n.value);
            const o = n.value;
            const { pipoAggregatePayInfo } = n.value;
            const { cashierUrl } =
              pipoAggregatePayInfo != null ? pipoAggregatePayInfo : {};
            if (cashierUrl) {
              s.h5(() => {
                this._observableData.orderRelatedUrl = cashierUrl;
              });
            }
            return o;
          }
        }
      })
      .call(this);
  }
  _generateTask(e) {
    c.F4(this.orderInfo);
    return this._overseaPayManager.generatePayTask(e, {
      type: "credits",
      orderId: this.orderInfo.orderId,
      appId: Number(p.R(this._isOverSea)),
    });
  }
  _updateOrderError(e) {
    super._updateOrderError(e);
  }
  constructor(e, t, r, i, n, a, o, s) {
    var c;
    super(
      r,
      (c = t == null ? undefined : t.creditPriceList) != null
        ? c
        : o.creditPriceList,
      "credit",
    );
    this._injectReportParams = e;
    this._creditRechargeContext = t;
    this._containerService = r;
    this._accountPort = i;
    this._i18nService = n;
    this._commercialEnvironmentService = a;
    this._commercialGoodsService = o;
    this._commercialCreditService = s;
    this._disposed = false;
    this._overseaPayManager = this._containerService.createInstance(g.J);
  }
}
export { I as b };
o.Cg(
  [
    d.cx("OverseaCreditsPayManager", "setCurrentProduct"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      String,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  I.prototype,
  "setCurrentProduct",
  null,
);
o.Cg(
  [
    d.cx("OverseaCreditsPayManager", "setCurrentProductByIndex"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      Number,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  I.prototype,
  "setCurrentProductByIndex",
  null,
);
o.Cg(
  [
    d.cx("OverseaCreditsPayManager", "purchase"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  I.prototype,
  "purchase",
  null,
);
o.Cg(
  [
    d.cx("OverseaCreditsPayManager", "_generateOrder"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  I.prototype,
  "_generateOrder",
  null,
);
o.Cg(
  [
    d.cx("OverseaCreditsPayManager", "_generateTask"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", undefined),
  ],
  I.prototype,
  "_generateTask",
  null,
);
I = o.Cg(
  [
    o.Qj(2, m._),
    o.Qj(3, x.F),
    o.Qj(4, u.n),
    o.Qj(5, C.o),
    o.Qj(6, S.$),
    o.Qj(7, P.sG),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ICreditReportParams === "undefined" ? Object : ICreditReportParams,
      Object,
      m._ === undefined ? Object : m._,
      x.F === undefined ? Object : x.F,
      u.n === undefined ? Object : u.n,
      C.o === undefined ? Object : C.o,
      S.$ === undefined ? Object : S.$,
      P.sG === undefined ? Object : P.sG,
    ]),
  ],
  I,
);
