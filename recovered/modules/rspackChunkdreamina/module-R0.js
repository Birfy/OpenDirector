import i from "NY";
import n from "oa";
import a from "bk";
import o from "QWK";
import s from "dw4";
import c from "Dm";
import l from "JSz";
import d from "k6";
import u from "RJ";
import p from "Kt";
import m from "zbK";
import h from "mU";
import v from "Up";
import _ from "jt";
import y from "wcw";
import g from "I4";
import b from "pzh";
import f from "LX";
import x from "mYn";
import P from "kDM";
import C from "hag";
import S from "gLs";
import A from "oh";
import { x as x_1 } from "./module-Uf.js";
import { s as s_1 } from "./module-H9.js";
import { Nm, X3, ao } from "./module-h2.js";
class w extends s_1 {
  get _selectableProductList() {
    return this._activeProductList;
  }
  get qrCodeUrl() {
    return this._orderRelatedUrl;
  }
  get qrCodeLoading() {
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
  reportPopup(e) {
    let t;
    let r;
    let i;
    let a;
    let o;
    const { action, payChannel, currentTabKey, clickTabKey, toProduct, extra } =
      e || {};
    f.WS(
      this._containerService,
      n._(
        {
          action,
          source: this._reportParams.source,
          sceneOptions: this.commercialSceneOptions,
          benefitAmount: this._reportParams.benefitAmount,
          payChannel,
          payAmount:
            (r = this.currentProduct) == null ? undefined : r.totalAmount,
          orderId: (i = this.orderInfo) == null ? undefined : i.orderId,
          toProduct: toProduct || this.currentProduct,
          currentTabKey:
            currentTabKey != null
              ? currentTabKey
              : this._reportParams.currentTabKey,
          clickTabKey,
          payCurrency:
            (a = this.currentProduct) == null ? undefined : a.currencyCode,
          sku: (o = this.currentProduct) == null ? undefined : o.productId,
          scene: this._reportParams.scene,
          benefits: this._reportParams.benefits,
          customReportParams: this._reportParams.customReportParams,
          resourceKey: this._reportParams.resourceKey,
          activityId: this._reportParams.activityId,
          activityName: this._reportParams.activityName,
          planId: this._reportParams.planId,
          planName: this._reportParams.planName,
          teamType: (t = this._reportParams.teamType) != null ? t : "personal",
          teamId: this._reportParams.teamId,
          entranceResourceKey: this._reportParams.entranceResourceKey,
          entranceActivityId: this._reportParams.entranceActivityId,
          entranceDeeplink: this._reportParams.entranceDeeplink,
          deeplink: this._reportParams.deeplink,
        },
        h.m(this.currentProduct),
        extra,
      ),
    );
  }
  reportVipPaySuccess() {
    x.v(this._containerService, {});
  }
  updateReportParam(e) {
    this._reportParams = n._({}, this._reportParams, e);
  }
  updateProductScene() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : m.fq.Personal;
    this._activeProductList =
      e === m.fq.Teams
        ? this._commercialGoodsService.teamWorkspaceVipPriceList
        : this._commercialGoodsService.vipPriceList;
  }
  purchaseTeamTrade(e, selectedSku, r) {
    return i
      ._(function* () {
        let i;
        let o;
        const c = this._createPurchaseTeamTradeRequestId();
        this.updateProductScene(m.fq.Teams);
        this._updateCurrentProduct(selectedSku);
        this.disposeCurrentTask();
        this._updateOrderResult(undefined);
        this._updateIsOrderLoading(true);
        const d = l.bz();
        y.jo(`make_order_vip_`.concat(d));
        const p = n._(
          {
            type: m.NN.Team,
          },
          x_1(
            a._(
              n._(
                {
                  appId: Number(u.R(this._isOverSea)),
                  selectedSku,
                },
                r,
              ),
              {
                extraOverrides: Nm(
                  r.extraOverrides,
                  this._reportParams.customReportParams,
                  X3(this._accountPort.getSnapshot()),
                ),
              },
            ),
          ),
        );
        const h = yield this._domesticPayManager.generatePayOrder(e, p);
        if (this._isLatestPurchaseTeamTradeRequest(c, selectedSku)) {
          const b = g.X(`make_order_vip_`.concat(d));
          P.l(this._containerService, {
            status: h.ok ? "success" : "error",
            productId: selectedSku.productId,
            productType: selectedSku.priceType,
            duration: b,
            orderId: h.ok ? h.value.orderId : "",
            orderType: "vip",
            errMsg: h.ok ? undefined : h.msg,
            logId: h.ok ? undefined : _.jV(h.cause),
            code: h.ok ? undefined : _.xp(h.cause),
            retCode: h.ok ? undefined : _.SC(h.cause),
          });
          this._updateIsOrderLoading(false);
          this._updateOrderError(!h.ok);
          if (!h.ok) {
            return void this._onGenerateOrderError.fire(h);
          }
          const f = h.value;
          const x = f.cjThirdPartyResult;
          const C = {
            orderId: f.orderId,
            payParams:
              (i = x == null ? undefined : x.payParams) != null ? i : "",
            codeImgUrl: (o = x == null ? undefined : x.qrCode) != null ? o : "",
          };
          this._onGenerateOrderSuccess.fire(C);
          let S = C.codeImgUrl;
          if (S) {
            try {
              S = yield v.D(S);
            } catch (e) {}
          }
          if (this._isLatestPurchaseTeamTradeRequest(c, selectedSku)) {
            s.h5(() => {
              this._observableData.orderRelatedUrl = S;
            });
            this._updateOrderInfo(C);
            this._currentPayTaskType = m.NN.Team;
            yield this._startListenOnly(e, r.teamContext);
            return f;
          }
        }
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
          this._currentPayTaskType = "vip";
          const t = l.bz();
          y.jo(`make_order_vip_`.concat(t));
          const r = {
            type: "vip",
            aid: Number(u.R(this._isOverSea)),
            platform: 7,
            pmsTrade: this.currentProduct.pmsTrade,
            productId: this.currentProduct.productId,
            region: "cn",
            extra: ao(
              undefined,
              this._reportParams.customReportParams,
              X3(this._accountPort.getSnapshot()),
            ),
          };
          if (this.currentProduct.priceType === "auto") {
            r.scene = "vip";
          }
          const i = yield this._domesticPayManager.generatePayOrder(e, r);
          const n = g.X(`make_order_vip_`.concat(t));
          P.l(this._containerService, {
            status: i.ok ? "success" : "error",
            productId: this.currentProduct.productId,
            productType: this.currentProduct.priceType,
            duration: n,
            orderId: i.ok ? i.value.orderId : "",
            orderType: "vip",
            errMsg: i.ok ? undefined : i.msg,
            logId: i.ok ? undefined : _.jV(i.cause),
            code: i.ok ? undefined : _.xp(i.cause),
            retCode: i.ok ? undefined : _.SC(i.cause),
          });
          this._updateOrderError(!i.ok);
          if (!i.ok) {
            return void this._onGenerateOrderError.fire(i);
          }
          this._onGenerateOrderSuccess.fire(i.value);
          const a = i.value;
          let o = a.codeImgUrl;
          try {
            o = yield v.D(o);
          } catch (e) {}
          s.h5(() => {
            this._observableData.orderRelatedUrl = o;
          });
          return a;
        }
      })
      .call(this);
  }
  _generateTask(e) {
    c.F4(this.orderInfo);
    return this._domesticPayManager.generatePayTask(e, {
      type: this._currentPayTaskType,
      orderId: this.orderInfo.orderId,
    });
  }
  switchPlan(e) {
    return i
      ._(function* () {
        const t = l.bz();
        if (this.currentProduct) {
          y.jo(`make_order_vip_`.concat(t));
          const r = {
            type: "vip",
            aid: Number(u.R(this._isOverSea)),
            platform: 7,
            productId: this.currentProduct.productId,
            pmsTrade: this.currentProduct.pmsTrade,
            region: "cn",
            extra: ao(
              undefined,
              this._reportParams.customReportParams,
              X3(this._accountPort.getSnapshot()),
            ),
          };
          if (this.currentProduct.priceType === "auto") {
            r.scene = "vip";
          }
          const i = yield this._domesticPayManager.generatePayOrder(e, r);
          const n = g.X(`make_order_vip_`.concat(t));
          P.l(this._containerService, {
            status: i.ok ? "success" : "error",
            productId: this.currentProduct.productId,
            productType: this.currentProduct.priceType,
            duration: n,
            orderId: i.ok ? i.value.orderId : "",
            orderType: "vip",
            errMsg: i.ok ? undefined : i.msg,
            logId: i.ok ? undefined : _.jV(i.cause),
            code: i.ok ? undefined : _.xp(i.cause),
            retCode: i.ok ? undefined : _.SC(i.cause),
          });
          return i;
        }
      })
      .call(this);
  }
  _createPurchaseTeamTradeRequestId() {
    this._purchaseTeamTradeRequestId += 1;
    return this._purchaseTeamTradeRequestId;
  }
  _isLatestPurchaseTeamTradeRequest(e, t) {
    let r;
    return (
      e === this._purchaseTeamTradeRequestId &&
      ((r = this.currentProduct) == null ? undefined : r.productId) ===
        t.productId
    );
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
  constructor(e, t, r, i) {
    super(e, r.vipPriceList, "vip");
    this._containerService = e;
    this._commercialEnvironmentService = t;
    this._commercialGoodsService = r;
    this._accountPort = i;
    this._activeProductList = [];
    this._reportParams = {};
    this._currentPayTaskType = "vip";
    this._purchaseTeamTradeRequestId = 0;
    this._activeProductList = r.vipPriceList;
    this._domesticPayManager = this._containerService.createInstance(b.o);
  }
}
export { w as x };
o.Cg(
  [
    d.cx("VipPayManager", "purchaseTeamTrade"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof TeamVipPrice === "undefined" ? Object : TeamVipPrice,
      typeof StartTeamVipTradeInput === "undefined"
        ? Object
        : StartTeamVipTradeInput,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  w.prototype,
  "purchaseTeamTrade",
  null,
);
o.Cg(
  [
    d.cx("VipPayManager", "_generateOrder"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  w.prototype,
  "_generateOrder",
  null,
);
o.Cg(
  [
    d.cx("VipPayManager", "_generateTask"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", undefined),
  ],
  w.prototype,
  "_generateTask",
  null,
);
o.Cg(
  [
    d.cx("VipPayManager", "switchPlan"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  w.prototype,
  "switchPlan",
  null,
);
o.Cg(
  [
    d.cx("VipPayManager", "updateIsAgreeAgreement"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      Boolean,
      Boolean,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  w.prototype,
  "updateIsAgreeAgreement",
  null,
);
w = o.Cg(
  [
    o.Qj(0, p._),
    o.Qj(1, S.o),
    o.Qj(2, A.$),
    o.Qj(3, C.F),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      p._ === undefined ? Object : p._,
      S.o === undefined ? Object : S.o,
      A.$ === undefined ? Object : A.$,
      C.F === undefined ? Object : C.F,
    ]),
  ],
  w,
);
