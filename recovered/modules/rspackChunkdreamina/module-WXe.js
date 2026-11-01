import i from "NY";
import n from "oa";
import a from "QWK";
import o from "dw4";
import s from "Dm";
import c from "K8";
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
import b from "LX";
import f from "kDM";
import x from "hag";
import P from "gLs";
import C from "oh";
import S from "VN";
import { s as s_1 } from "./module-H9.js";
import { X3, ao } from "./module-h2.js";
export class U extends s_1 {
  get cashierUrl() {
    return this._orderRelatedUrl;
  }
  get isOrderLoading() {
    return this._isOrderLoading;
  }
  get extraBenefits() {
    return this._reportParams.benefits;
  }
  get commercialScene() {
    return this._reportParams.scene;
  }
  get commercialSource() {
    return this._reportParams.source;
  }
  get currentChannel() {
    let e;
    if ((e = this._vipService.currentAutoRenewPlan) == null) {
      return undefined;
    }
    return e.payChannel;
  }
  get commercialSceneOptions() {
    return this._reportParams.sceneOptions;
  }
  get commercialCustomReportParams() {
    return this._reportParams.customReportParams;
  }
  get interceptionType() {
    return this._reportParams.interceptionType;
  }
  get guideKey() {
    return this._reportParams.guideKey;
  }
  get enableSubscriptionGuide() {
    return this._reportParams.enableSubscriptionGuide;
  }
  get hideCreditPurchaseEntry() {
    return this._reportParams.hideCreditPurchaseEntry;
  }
  get minVipLevel() {
    return this._reportParams.minVipLevel;
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
        const asyncPaymentWindowFallbackUrl =
          this._commercialEnvironmentService.asyncPaymentWindowFallbackUrl;
        yield h.a(asyncPaymentWindowFallbackUrl, () =>
          i
            ._(function* () {
              yield this.updateIsAgreeAgreement(e, true, false);
              if (this.currentProduct) {
                yield this.setCurrentProduct(e, this.currentProduct.productId);
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
      })
      .call(this);
  }
  reportPopup(e) {
    let t;
    let r;
    let i;
    let n;
    let a;
    const {
      action,
      payChannel,
      currentTabKey,
      clickTabKey,
      toProduct,
      errorCode,
      errorMessage,
      errorStage,
      logId,
    } = e;
    b.WS(this._containerService, {
      action,
      source: this._reportParams.source,
      sceneOptions: this.commercialSceneOptions,
      benefitAmount: this._reportParams.benefitAmount,
      payChannel,
      payAmount: (r = this.currentProduct) == null ? undefined : r.totalAmount,
      payCurrency:
        (i = this.currentProduct) == null ? undefined : i.currencyCode,
      orderId: (n = this.orderInfo) == null ? undefined : n.orderId,
      toProduct: toProduct || this.currentProduct,
      currentTabKey:
        currentTabKey != null
          ? currentTabKey
          : this._reportParams.currentTabKey,
      clickTabKey,
      sku: (a = this.currentProduct) == null ? undefined : a.productId,
      scene: this._reportParams.scene,
      benefits: this._reportParams.benefits,
      customReportParams: this._reportParams.customReportParams,
      resourceKey: this._reportParams.resourceKey,
      activityId: this._reportParams.activityId,
      activityName: this._reportParams.activityName,
      planId: this._reportParams.planId,
      planName: this._reportParams.planName,
      entranceResourceKey: this._reportParams.entranceResourceKey,
      entranceActivityId: this._reportParams.entranceActivityId,
      entranceDeeplink: this._reportParams.entranceDeeplink,
      deeplink: this._reportParams.deeplink,
      errorCode,
      errorMessage,
      errorStage,
      logId,
      teamType: (t = this._reportParams.teamType) != null ? t : "personal",
      teamId: this._reportParams.teamId,
    });
  }
  updateReportParam(e) {
    this._reportParams = n._({}, this._reportParams, e);
  }
  get _isOverSea() {
    return this._commercialEnvironmentService.isOversea;
  }
  _generateOrder(e) {
    return i
      ._(function* () {
        if (this.currentProduct) {
          let t;
          let r;
          const i = l.bz();
          _.jo(`make_order_vip_`.concat(i));
          const userCreateTime =
            (t = this._accountPort.getSnapshot().userProfile) == null
              ? undefined
              : t.createTime;
          s.F4(userCreateTime);
          const a = yield this._overseaPayManager.generatePayOrder(e, {
            type: "vip",
            appId: Number(p.R(this._isOverSea)),
            productId: this.currentProduct.productId,
            tradeType:
              this.currentProduct.priceType === "auto"
                ? "subscription"
                : "oneoff",
            pmsTrade: this.currentProduct.pmsTrade,
            payChannel: "aggregate",
            skuId: (r = this.currentProduct) == null ? undefined : r.skuId,
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
            scene: "vip",
            extra: ao(
              undefined,
              this._reportParams.customReportParams,
              X3(this._accountPort.getSnapshot()),
            ),
          });
          const duration = y.X(`make_order_vip_`.concat(i));
          f.l(this._containerService, {
            status: a.ok ? "success" : "error",
            productId: this.currentProduct.productId,
            productType: this.currentProduct.priceType,
            duration,
            orderId: a.ok ? a.value.orderId : "",
            orderType: "vip",
            errMsg: a.ok ? undefined : a.msg,
            logId: a.ok ? undefined : v.jV(a.cause),
            code: a.ok ? undefined : v.xp(a.cause),
          });
          this._updateOrderError(!a.ok);
          if (!a.ok) {
            return void this._onGenerateOrderError.fire(a);
          }
          this._onGenerateOrderSuccess.fire(a.value);
          const d = a.value;
          const { pipoAggregatePayInfo } = a.value;
          const { cashierUrl } =
            pipoAggregatePayInfo != null ? pipoAggregatePayInfo : {};
          if (cashierUrl) {
            o.h5(() => {
              this._observableData.orderRelatedUrl = cashierUrl;
            });
          }
          return d;
        }
      })
      .call(this);
  }
  _generateTask(e) {
    s.F4(this.orderInfo);
    return this._overseaPayManager.generatePayTask(e, {
      type: "vip",
      orderId: this.orderInfo.orderId,
      appId: Number(p.R(this._isOverSea)),
    });
  }
  switchPlan(e) {
    return i
      ._(function* () {
        const t = yield this._generateOrder(e);
        return c.TZ(t);
      })
      .call(this);
  }
  constructor(e, t, r, i, n, a) {
    super(e, r.vipPriceList, "vip");
    this._containerService = e;
    this._commercialEnvironmentService = t;
    this._commercialGoodsService = r;
    this._accountPort = i;
    this._i18nService = n;
    this._vipService = a;
    this._reportParams = {};
    this._overseaPayManager = this._containerService.createInstance(g.J);
  }
}
a.Cg(
  [
    d.cx("OverseaVipPayManager", "setCurrentProduct"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      String,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  U.prototype,
  "setCurrentProduct",
  null,
);
a.Cg(
  [
    d.cx("OverseaVipPayManager", "setCurrentProductByIndex"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      Number,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  U.prototype,
  "setCurrentProductByIndex",
  null,
);
a.Cg(
  [
    d.cx("OverseaVipPayManager", "purchase"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  U.prototype,
  "purchase",
  null,
);
a.Cg(
  [
    d.cx("OverseaVipPayManager", "_generateOrder"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  U.prototype,
  "_generateOrder",
  null,
);
a.Cg(
  [
    d.cx("OverseaVipPayManager", "_generateTask"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    a.Sn("design:returntype", undefined),
  ],
  U.prototype,
  "_generateTask",
  null,
);
a.Cg(
  [
    d.cx("OverseaVipPayManager", "switchPlan"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  U.prototype,
  "switchPlan",
  null,
);
U = a.Cg(
  [
    a.Qj(0, m._),
    a.Qj(1, P.o),
    a.Qj(2, C.$),
    a.Qj(3, x.F),
    a.Qj(4, u.n),
    a.Qj(5, S._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      m._ === undefined ? Object : m._,
      P.o === undefined ? Object : P.o,
      C.$ === undefined ? Object : C.$,
      x.F === undefined ? Object : x.F,
      u.n === undefined ? Object : u.n,
      S._ === undefined ? Object : S._,
    ]),
  ],
  U,
);
