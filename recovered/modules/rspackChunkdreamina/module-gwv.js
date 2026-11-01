import i from "oa";
import a from "bk";
import { PQ } from "./module-Com.js";
export var U0 = {
  Team: "team",
  CreditPopup: "credit_popup",
  Api: "api",
  TeamOrder: "team_order",
  PersonOrder: "person_order",
  ApiOrder: "api_order",
  TransferPendingPopup: "transfer_pending_popup",
};
export var y3 = {
  Team: "team",
  Personal: "personal",
};
export var Jw = {
  OneMonthAuto: "1_month_auto",
  TwelveMonthAuto: "12_month_auto",
  OneMonth: "1_month",
  ThreeMonth: "3_month",
  TwelveMonth: "12_month",
  Credit: "credit",
  Token: "token",
};
class u {
  getEventParams() {
    const {
      action,
      source,
      teamId,
      teamType,
      productLevel,
      selectedProduct,
      selectedProductName,
      orderStatus,
      orderId,
      errorCode,
      receivingAccount,
      displayAmount,
      orderAmount,
      productId,
    } = this._params;
    return {
      action,
      current_page: "corporate_transfer_popup",
      source,
      team_id: teamId,
      team_type: teamType,
      product_level: productLevel,
      selected_product: selectedProduct,
      selected_product_name: selectedProductName,
      order_status: orderStatus,
      order_id: orderId,
      error_code: errorCode,
      receiving_account: receivingAccount,
      display_amount: displayAmount,
      order_amount: orderAmount,
      product_id: productId,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "vip_related_page";
  }
}
export function ZH(e, t, r) {
  const c = ((e, t) => {
    let r;
    let n;
    let c;
    const action = ((e) => {
      switch (e.type) {
        case "transfer_show":
          return "show";
        case "confirm_click":
          return "click";
        case "close_click":
          return "close";
        case "request_error":
          return "abnormal";
        default:
          return;
      }
    })(t);
    if (action) {
      let _;
      const selectedProductName =
        ((_ = (r = t.productName) != null ? r : e.selectedProductName) == null
          ? undefined
          : _.trim()) || undefined;
      const source =
        t.type === "transfer_show" && t.showReason === "pending_return"
          ? U0.TransferPendingPopup
          : e.source;
      return a._(i._({}, e), {
        action,
        source,
        teamType: e.teamType
          ? e.teamType
          : e.source === U0.Team || e.source === U0.TeamOrder
            ? y3.Team
            : y3.Personal,
        selectedProductName,
        orderStatus: ((e) => {
          if (e !== undefined) {
            if (e === 2) {
              return "pending_supplement";
            }
            return "new_order";
          }
        })(t.payStatus),
        orderId: t.orderId,
        errorCode: t.type === "request_error" ? t.errorCode : undefined,
        receivingAccount: t.receivingAccount,
        displayAmount: t.displayAmount,
        orderAmount: (n = t.orderAmount) != null ? n : e.orderAmount,
        productId: (c = t.productId) != null ? c : e.productId,
      });
    }
  })(t, r);
  if (c) {
    PQ(e, u, [c]);
  }
}
export function pp(e) {
  let t;
  const r = (t = e.cycleUnit) == null ? undefined : t.toUpperCase();
  if (r === "MONTH" && e.subscribeCycle === 3 && e.priceType === "un-auto") {
    return Jw.ThreeMonth;
  }
  const i = r === "YEAR" || (r === "MONTH" && e.subscribeCycle === 12);
  const a =
    r === "MONTH" && (e.subscribeCycle === undefined || e.subscribeCycle === 1);
  if (i || a) {
    const n = e.priceType === "auto";
    if (i) {
      if (n) {
        return Jw.TwelveMonthAuto;
      }
      return Jw.TwelveMonth;
    }
    if (n) {
      return Jw.OneMonthAuto;
    }
    return Jw.OneMonth;
  }
}
export function G9(e) {
  const t = e == null ? undefined : e.toLowerCase();
  if (t === "standard" || t === "artisan" || t === "maestro" || t === "ultra") {
    return t;
  }
}
