import i from "MWC";
import n from "MK";
import a from "NY";
import o from "QWK";
import s from "dw4";
import c from "Dm";
import l from "A7";
import d from "JSz";
import u from "k6";
import p from "Kt";
import m from "Up";
import h from "wcw";
import v from "I4";
import _ from "pzh";
import y from "kDM";
import { s as s_1 } from "./module-H9.js";
const b = "make_order_token";
class f extends s_1 {
  get qrCodeUrl() {
    return this._orderRelatedUrl;
  }
  get qrCodeLoading() {
    return this._isOrderLoading;
  }
  setCurrentProduct(e, t) {
    const r = this;
    const i = () => super.setCurrentProduct;
    return a._(function* () {
      yield i().call(r, e, t, true);
    })();
  }
  updateIsAgreeAgreement(e, t) {
    const r = this;
    const i = () => super.updateIsAgreeAgreement;
    return a
      ._(function* () {
        if (t) {
          this._onAgreeProtocol.fire();
        }
        yield i().call(r, e, t);
      })
      .call(this);
  }
  _generateOrder(e) {
    return a
      ._(function* () {
        if (this.currentProduct) {
          let t;
          let r;
          const i = d.bz();
          h.jo("".concat(b, "_").concat(i));
          const n = yield this._domesticPayManager.generatePayOrder(e, {
            type: "token",
            aid: this.currentProduct.aid,
            platform: this.currentProduct.platform,
            productId: this.currentProduct.productId,
            goodsIdStr: this.currentProduct.goodsIdStr,
            goodsType: this.currentProduct.goodsType,
            pmsTrade: this.currentProduct.pmsTrade,
            purchaseSource: this.currentProduct.purchaseSource,
            amount: this.currentProduct.amount,
            extra: this.currentProduct.extra,
          });
          const duration = v.X("".concat(b, "_").concat(i));
          y.l(this._containerService, {
            status: n.ok ? "success" : "error",
            productId: this.currentProduct.productId,
            duration,
            orderId: n.ok ? n.value.orderId : "",
            orderType: "token",
            errMsg: n.ok ? undefined : n.msg,
            logId: n.ok || (t = n.cause) == null ? undefined : t.log_id,
            code: n.ok
              ? undefined
              : String(((r = n.cause) == null ? undefined : r.code) || ""),
          });
          this._updateOrderError(!n.ok);
          if (!n.ok) {
            return void this._onGenerateOrderError.fire(n);
          }
          this._onGenerateOrderSuccess.fire(n.value);
          const o = n.value;
          let c = o.payParams;
          try {
            c = yield m.D(c);
          } catch (e) {}
          s.h5(() => {
            this._observableData.orderRelatedUrl = c;
          });
          return o;
        }
      })
      .call(this);
  }
  _generateTask(e) {
    c.F4(this.orderInfo);
    return this._domesticPayManager.generatePayTask(e, {
      type: "token",
      orderId: this.orderInfo.orderId,
    });
  }
  _updateOrderError(e) {
    super._updateOrderError(e);
    if (e) {
      this._onQrCodeError.fire();
    }
  }
  _updateIsOrderLoading(e) {
    super._updateIsOrderLoading(e);
    if (e) {
      this._onQrCodeRequest.fire();
    }
  }
  _updateOrderInfo(e) {
    super._updateOrderInfo(e);
    this._onQrCodeReady.fire(e);
  }
  _updateOrderFailed(e) {
    super._updateOrderFailed(e);
    if (e) {
      this._onQrCodeInvalid.fire();
    }
  }
  constructor(e, t) {
    super(t, e, "token");
    this._containerService = t;
    this._onQrCodeRequest = this._store.add(new l.v());
    this.onQrCodeRequest = this._onQrCodeRequest.event;
    this._onQrCodeReady = this._store.add(new l.v());
    this.onQrCodeReady = this._onQrCodeReady.event;
    this._onQrCodeError = this._store.add(new l.v());
    this.onQrCodeError = this._onQrCodeError.event;
    this._onAgreeProtocol = this._store.add(new l.v());
    this.onAgreeProtocol = this._onAgreeProtocol.event;
    this._onQrCodeInvalid = this._store.add(new l.v());
    this.onQrCodeInvalid = this._onQrCodeInvalid.event;
    this._domesticPayManager = this._containerService.createInstance(_.o);
  }
}
o.Cg(
  [
    u.cx("TokenPackagePayManager", "setCurrentProduct"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      String,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  f.prototype,
  "setCurrentProduct",
  null,
);
o.Cg(
  [
    u.cx("TokenPackagePayManager", "updateIsAgreeAgreement"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
      Boolean,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  f.prototype,
  "updateIsAgreeAgreement",
  null,
);
o.Cg(
  [
    u.cx("TokenPackagePayManager", "_generateOrder"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", Promise),
  ],
  f.prototype,
  "_generateOrder",
  null,
);
o.Cg(
  [
    u.cx("TokenPackagePayManager", "_generateTask"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Context === "undefined" ? Object : Context,
    ]),
    o.Sn("design:returntype", undefined),
  ],
  f.prototype,
  "_generateTask",
  null,
);
f = o.Cg(
  [
    o.Qj(1, p._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [Array, p._ === undefined ? Object : p._]),
  ],
  f,
);
const x = require("./module-ez.js");
const P = require("DVK");
var C = (e) => {
  var t;
  var r;
  var a;
  var {
    containerService,
    onAgreeProtocol,
    onError,
    onFailToGetQrCode,
    onGetQrCode,
    onInvalidQrCode,
    onShowQrCode,
    onCorporateTransferShow,
    onCorporateTransferClick,
    onSuccess,
    product,
    successToastClassName,
  } = e;
  if (!containerService) {
    return null;
  }
  var payManager = ((e) => {
    var {
      containerService,
      onAgreeProtocol,
      onError,
      onFailToGetQrCode,
      onGetQrCode,
      onInvalidQrCode,
      onShowQrCode,
      onSuccess,
      product,
      successToastClassName,
    } = e;
    var m = containerService.createInstance(f, [product]);
    m.onAgreeProtocol(() => {
      if (onAgreeProtocol != null) {
        onAgreeProtocol({});
      }
    });
    m.onQrCodeRequest(() => {
      if (onGetQrCode != null) {
        onGetQrCode({});
      }
    });
    m.onQrCodeReady((e) => {
      if (onShowQrCode != null) {
        onShowQrCode({
          orderId: e.orderId,
        });
      }
    });
    m.onQrCodeError(() => {
      if (onFailToGetQrCode != null) {
        onFailToGetQrCode({});
      }
    });
    m.onQrCodeInvalid(() => {
      var e;
      if (onInvalidQrCode != null) {
        onInvalidQrCode({
          orderId: (e = m.orderInfo) == null ? undefined : e.orderId,
        });
      }
    });
    m.onSuccess((e) => {
      var t;
      if (x.M(e)) {
        i.p.success({
          content: n.Ay.t(
            "dre_m10n_payment_details_result_success",
            {},
            "支付成功",
          ),
          className: successToastClassName,
        });
      }
      if (onSuccess != null) {
        onSuccess(e, {
          orderId: (t = m.orderInfo) == null ? undefined : t.orderId,
        });
      }
    });
    m.onError(() => {
      var e;
      i.p.warning(
        n.Ay.t(
          "jimeng_api_sales_token_package_purchase_failed",
          {},
          "购买失败，请稍后重试",
        ),
      );
      if (onError != null) {
        onError({
          orderId: (e = m.orderInfo) == null ? undefined : e.orderId,
        });
      }
    });
    m.onGenerateOrderError((e) => {
      i.p.error(
        e.msg ||
          n.Ay.t(
            "jimeng_api_sales_token_package_create_order_failed",
            {},
            "下单失败，请稍后重试",
          ),
      );
    });
    return m;
  })({
    containerService,
    product,
    onAgreeProtocol,
    onError,
    onFailToGetQrCode,
    onGetQrCode,
    onInvalidQrCode,
    onShowQrCode,
    onSuccess,
    successToastClassName,
  });
  return P.s8({
    containerService,
    payManager,
    price: (a =
      (r = product.priceTips) == null || (t = r.match(/\d+(?:\.\d+)?/)) == null
        ? undefined
        : t[0])
      ? a
      : String(product.amount / 100),
    product,
    onCorporateTransferShow,
    onCorporateTransferClick,
  });
};
export { C as m };
