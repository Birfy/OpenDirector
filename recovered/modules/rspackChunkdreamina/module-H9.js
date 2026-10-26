import i from "NY";
import n from "oa";
import a from "QWK";
import o from "dw4";
import s from "Dm";
import c from "o7";
import l from "K8";
import d from "A7";
import u from "k6";
import p from "Nbm";
import m from "wcw";
import h from "I4";
import v from "jW";
import _ from "o9";
class y extends c.jG {
  registerPaymentPresentation(e) {
    const _closePaymentPresentation = this._closePaymentPresentation;
    this._closePaymentPresentation = e;
    if (_closePaymentPresentation != null) {
      _closePaymentPresentation();
    }
  }
  setRefreshCreditGoodsAfterPayment(e) {
    this._refreshCreditGoodsAfterPayment = e;
  }
  get _selectableProductList() {
    return this._productList;
  }
  setCurrentProduct(e, t) {
    const r =
      !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    return i
      ._(function* () {
        const i = this._selectableProductList.find((e) => e.productId === t);
        s.F4(i, "Please set the valid productId");
        yield this._setCurrentProductItem(e, i, r);
      })
      .call(this);
  }
  _setCurrentProductItem(e, t) {
    const r =
      !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    return i
      ._(function* () {
        this._disposeCurrentTask();
        this._updateOrderResult(undefined);
        this._updateCurrentProduct(t);
        if (r) {
          yield this._generateOrderAndStartListen(e);
        }
      })
      .call(this);
  }
  startPollingOrder(e) {
    return i
      ._(function* () {
        this._isPaymentTaskSuspended = false;
        if (!(this._currentTask || this._isOrderLoading)) {
          yield this._generateOrderAndStartListen(e);
        }
      })
      .call(this);
  }
  _startListenOnly(e) {
    return i
      ._(function* (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : this._creditGoodsTeamContext;
        if (this._observableData.orderInfo) {
          yield this._initCurrentTask(e, t);
        }
      })
      .apply(this, arguments);
  }
  setCurrentProductByIndex(e, t) {
    const r =
      !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    return i
      ._(function* () {
        const _selectableProductList = this._selectableProductList;
        s.X3(
          t >= 0 && t < _selectableProductList.length,
          "Please set the valid index",
        );
        const n = _selectableProductList[t];
        yield this.setCurrentProduct(e, n.productId, r);
      })
      .call(this);
  }
  updateIsAgreeAgreement(e, t) {
    const r =
      !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    return i
      ._(function* () {
        yield new Promise((resolve) => {
          o.h5(() => {
            this._observableData.isAgreeAgreement = t;
            resolve(t);
          });
        });
        if (r) {
          yield this._generateOrderAndStartListen(e);
        }
      })
      .call(this);
  }
  get _orderRelatedUrl() {
    return this._observableData.orderRelatedUrl;
  }
  get _isOrderLoading() {
    return this._observableData.isOrderLoading;
  }
  get orderError() {
    return this._observableData.orderError;
  }
  get orderInfo() {
    return this._observableData.orderInfo;
  }
  get orderResult() {
    return this._observableData.orderResult;
  }
  get currentProduct() {
    return this._observableData.currentProduct;
  }
  get isAgreeAgreement() {
    return this._observableData.isAgreeAgreement;
  }
  get isVipExpiredError() {
    return this._observableData.isVipExpiredError;
  }
  get isOrderFailed() {
    return this._observableData.isOrderFailed;
  }
  _updateIsOrderLoading(e) {
    o.h5(() => {
      this._observableData.isOrderLoading = e;
    });
  }
  _generateOrderAndStartListen(e) {
    return i
      ._(function* () {
        if (this.isAgreeAgreement) {
          this._updateIsOrderLoading(true);
          const t = yield this._generateOrder(e);
          this._updateIsOrderLoading(false);
          s.F4(t, "Generate ".concat(this._type, " Order Failed"));
          this._updateOrderInfo(t);
          if (!this._isPaymentTaskSuspended) {
            yield this._initCurrentTask(e);
          }
        }
      })
      .call(this);
  }
  _updateOrderInfo(e) {
    o.h5(() => {
      this._observableData.orderInfo = e;
    });
  }
  _updateOrderResult(e) {
    o.h5(() => {
      this._observableData.orderResult = e;
    });
  }
  _updateCurrentProduct(e) {
    o.h5(() => {
      this._observableData.currentProduct = e;
    });
  }
  _updateOrderError(e) {
    o.h5(() => {
      this._observableData.orderError = e;
    });
  }
  _updateOrderFailed(e) {
    o.h5(() => {
      this._observableData.isOrderFailed = e;
    });
  }
  _updateIsVipExpiredError(e) {
    o.h5(() => {
      this._observableData.isVipExpiredError = e;
    });
  }
  _initCurrentTask(e) {
    return i
      ._(function* (e) {
        let t;
        const r =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : this._creditGoodsTeamContext;
        this._disposeCurrentTask();
        this._currentTask = this._generateTask(e);
        const orderId =
          (t = this._observableData.orderInfo) == null ? undefined : t.orderId;
        this._updateOrderFailed(false);
        m.jo(`pay_`.concat(orderId));
        const a = new Promise((resolve) => {
          var n;
          if ((n = this._currentTask) != null) {
            n.onSuccess((n) => {
              var a;
              var o = h.X(`pay_`.concat(orderId));
              _.d(this._containerService, {
                status: "success",
                productId:
                  (a = this.currentProduct) == null ? undefined : a.productId,
                duration: o,
                orderId,
                orderType: this._type,
                paymentMethod: n == null ? undefined : n.paymentMethod,
              });
              this._onSuccess.fire(n);
              this._updateOrderResult(l.TZ(n));
              if (this._refreshCreditGoodsAfterPayment) {
                p.K(e, this._containerService, r).catch(() => undefined);
              }
              resolve(n);
            });
          }
        });
        const o = new Promise((resolve, reject) => {
          var r;
          if ((r = this._currentTask) != null) {
            r.onError((e) => {
              var r;
              var a = h.X(`pay_`.concat(orderId));
              _.d(
                this._containerService,
                n._(
                  {
                    status: "error",
                    productId:
                      (r = this.currentProduct) == null
                        ? undefined
                        : r.productId,
                    duration: a,
                    orderId,
                    orderType: this._type,
                  },
                  v.c(e),
                ),
              );
              this._updateOrderFailed(true);
              this._onError.fire(e);
              this._updateOrderResult(e);
              reject(e);
            });
          }
        });
        const s = new Promise((resolve) => {
          var t;
          if ((t = this._currentTask) != null) {
            t.onStop(() => {
              var t;
              var r;
              var i;
              var n = h.X(
                `pay_`.concat(
                  (t = this._currentTask) == null ? undefined : t.orderId,
                ),
              );
              _.d(this._containerService, {
                status: "stop",
                productId:
                  (r = this.currentProduct) == null ? undefined : r.productId,
                duration: n,
                orderId:
                  (i = this._currentTask) == null ? undefined : i.orderId,
                orderType: this._type,
              });
              this._onStop.fire();
              resolve("stop");
            });
          }
        });
        this._currentTask.start();
        yield Promise.race([a, o, s]);
      })
      .apply(this, arguments);
  }
  _disposeCurrentTask() {
    let e;
    if (this._currentTask) {
      if ((e = this._currentTask) != null) {
        e.dispose();
      }
      this._currentTask = undefined;
    }
  }
  disposeCurrentTask() {
    this._disposeCurrentTask();
  }
  suspendCurrentTask() {
    this._isPaymentTaskSuspended = true;
    this._disposeCurrentTask();
  }
  resumeCurrentTask(e) {
    return i
      ._(function* () {
        this._isPaymentTaskSuspended = false;
        if (
          !this._currentTask &&
          !this._isOrderLoading &&
          this.isAgreeAgreement
        ) {
          if (this._observableData.orderInfo) {
            return void (yield this._startListenOnly(e));
          }
          yield this._generateOrderAndStartListen(e);
        }
      })
      .call(this);
  }
  completeExternalPayment(e, t) {
    this.suspendCurrentTask();
    o.h5(() => {
      this._observableData.orderInfo = e;
      this._observableData.orderResult = l.TZ(t);
      this._observableData.orderError = false;
      this._observableData.isOrderFailed = false;
      this._observableData.isOrderLoading = false;
    });
    this._onSuccess.fire(t);
  }
  dispose() {
    this._disposeCurrentTask();
    super.dispose();
  }
  constructor(e, t, r, i) {
    super();
    this._containerService = e;
    this._productList = t;
    this._type = r;
    this._creditGoodsTeamContext = i;
    this._onGenerateOrderSuccess = this._store.add(new d.v());
    this.onGenerateOrderSuccess = this._onGenerateOrderSuccess.event;
    this._onGenerateOrderError = this._store.add(new d.v());
    this.onGenerateOrderError = this._onGenerateOrderError.event;
    this._onError = this._store.add(new d.v());
    this.onError = this._onError.event;
    this._onSuccess = this._store.add(new d.v());
    this.onSuccess = this._onSuccess.event;
    this._onStop = this._store.add(new d.v());
    this.onStop = this._onStop.event;
    this._refreshCreditGoodsAfterPayment = true;
    this._isPaymentTaskSuspended = false;
    this._observableData = o.sH({
      orderRelatedUrl: "",
      isOrderLoading: false,
      orderError: false,
      orderInfo: undefined,
      orderResult: undefined,
      currentProduct: undefined,
      isAgreeAgreement: false,
      isVipExpiredError: false,
      isOrderFailed: false,
    });
    this._store.add({
      dispose: () => {
        var _closePaymentPresentation = this._closePaymentPresentation;
        this._closePaymentPresentation = undefined;
        if (_closePaymentPresentation != null) {
          _closePaymentPresentation();
        }
      },
    });
  }
}
export { y as s };
a.Cg(
  [
    u.cx("CommercialPayManager", "setCurrentProduct"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      String,
      Boolean,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  y.prototype,
  "setCurrentProduct",
  null,
);
a.Cg(
  [
    u.cx("CommercialPayManager", "setCurrentProductItem"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof T === "undefined" ? Object : T,
      Boolean,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  y.prototype,
  "_setCurrentProductItem",
  null,
);
a.Cg(
  [
    u.cx("CommercialPayManager", "startPollingOrder"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  y.prototype,
  "startPollingOrder",
  null,
);
a.Cg(
  [
    u.cx("CommercialPayManager", "startListenOnly"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof CreditGoodsRefreshTeamContext === "undefined"
        ? Object
        : CreditGoodsRefreshTeamContext,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  y.prototype,
  "_startListenOnly",
  null,
);
a.Cg(
  [
    u.cx("CommercialPayManager", "setCurrentProductByIndex"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      Number,
      Boolean,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  y.prototype,
  "setCurrentProductByIndex",
  null,
);
a.Cg(
  [
    u.cx("CommercialPayManager", "updateIsAgreeAgreement"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      Boolean,
      Boolean,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  y.prototype,
  "updateIsAgreeAgreement",
  null,
);
a.Cg(
  [
    u.cx("CommercialPayManager", "_generateOrderAndStartListen"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  y.prototype,
  "_generateOrderAndStartListen",
  null,
);
a.Cg(
  [
    u.cx("CommercialPayManager", "_initCurrentTask"),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      typeof CreditGoodsRefreshTeamContext === "undefined"
        ? Object
        : CreditGoodsRefreshTeamContext,
    ]),
    a.Sn("design:returntype", Promise),
  ],
  y.prototype,
  "_initCurrentTask",
  null,
);
