import n from "oa";
import o from "bk";
import s from "QWK";
import c from "Jhy";
import u from "fg";
import _ from "Kt";
import d from "SI";
import l from "Ud";
import p from "yK6";
import { PQ } from "./module-Com.js";
import v from "jh7";
import y from "EYk";
import g from "VN";
import { IW, Tz, ey, w7, y7 } from "./module-fAr.js";
import * as S from "./module-zi.js";
export var tW = {
  ClickGenerateButton: "generate",
  ClickTopAccountButtonAddCredits: "click_top_account_button_add_credits",
  CLICK_VIP_FUNCTION_3s: "click_vip_function_+3s",
  CLICK_REGENERATE_BUTTON: "click_regenerate_button",
  CREDIT_LIMIT_POPUP: "credit_limit_popup",
  MULTI_VIP_POPUP_GET_CREDITS: "multi_vip_popup_get_credits",
  SUBSCRIBE_PLAN_CHANGE_POPUP: "subscribe_plan_change_popup",
  TeamPage: "team_page",
};
export var Wd = {
  Show: "show",
  ClickTab: "click_tab",
  SelectProduct: "select_product",
  ClickBuy: "click_buy",
  ClickToVipPopup: "click_to_vip_popup",
  CheckDetail: "check_detail",
  AgreeProtocol: "agree_protocol",
  GetQrCode: "get_qr_code",
  FailToGetQrCode: "fail_to_get_qr_code",
  InvalidQrCode: "invalid_qr_code",
  ShowQrCode: "show_qr_code",
  VIPEnd: "vip_end",
  PaySuccess: "pay_success",
  PayFail: "pay_fail",
  ClickPurchase: "click_purchase",
  ShowCorporateTransfer: "show_corporate_transfer",
  ClickCorporateTransfer: "click_corporate_transfer",
  ShowCorporatePayment: "show_corporate_payment",
  ConfirmCorporatePayment: "confirm_corporate_payment",
};
class P {
  get otherReportParams() {
    return {
      second_page: "work_collection_detail",
    };
  }
  getEventParams() {
    let fallbackRightId;
    let rightTrackingData;
    const {
      source,
      action,
      currentTab,
      creditNow,
      selectCreditsAmount,
      payChannel,
      payCurrency,
      payAmount,
      orderId,
      sku,
      scene,
      sceneOptions,
      benefitAmount,
      isQuickPreview,
      isFromPreview,
      batchNumber,
      teamType,
      teamId,
    } = this._params;
    const j = S.v(this._membershipService);
    const { isVip, currentVipLevel } = this._vipService;
    const user_teams_subscribe_type = S.r(
      this._membershipService.snapshot.team,
    );
    const M = {};
    if (scene) {
      M.vip_function_id = fallbackRightId = l
        .d({
          scene,
          sceneOptions,
          commercialStrategyService: this._commercialStrategyService,
        })
        .join(",");
      const V = p.d({
        scene,
        sceneOptions,
        commercialStrategyService: this._commercialStrategyService,
      });
      rightTrackingData = V ? u.w(V) : undefined;
    }
    const extra = w7({
      baseExtra: n._(
        {},
        benefitAmount !== undefined
          ? {
              benefit_amount: benefitAmount,
            }
          : {},
      ),
      rightTrackingData,
      customReportParams: this._params.customReportParams,
      fallbackRightId,
    });
    const x = y7(ey(this._params.customReportParams));
    const Q = n._(
      o._(
        n._(
          {
            source,
            action,
            current_tab: currentTab,
          },
          j,
        ),
        {
          is_vip: +!!isVip,
          user_subscribe_type: d.PR[currentVipLevel],
          credit_now: creditNow,
          select_credits_amount: selectCreditsAmount,
          pay_channel: payChannel,
          pay_amount: payAmount,
          pay_currency: payCurrency,
          order_id: orderId,
          sku,
          team_type: teamType,
          team_id: teamId,
          user_teams_subscribe_type,
          extra: Tz(extra),
          business_extra: IW({
            customReportParams: this._params.customReportParams,
            extra,
          }),
          is_quick_preview: Number(isQuickPreview != null ? isQuickPreview : 0),
          is_from_preview: Number(isFromPreview != null ? isFromPreview : 0),
          generate_num: batchNumber,
        },
      ),
      M,
      this.otherReportParams,
    );
    const K = c.A(Q, x);
    const B = o._(
      n._(
        {},
        K,
        currentTab !== undefined
          ? {
              current_tab: currentTab,
            }
          : {},
      ),
      {
        user_teams_subscribe_type,
      },
    );
    if (action === "click_tab") {
      delete B.select_credits_amount;
      delete B.pay_amount;
      delete B.pay_currency;
      delete B.sku;
    }
    return B;
  }
  constructor(e, t, r, i, a) {
    this._params = e;
    this._membershipService = t;
    this._vipService = r;
    this._containerService = i;
    this._commercialStrategyService = a;
    this.eventName = "credit_popup";
  }
}
export function Mn(e, t) {
  PQ(e, P, [t]);
}
P = s.Cg(
  [
    s.Qj(1, v.r3),
    s.Qj(2, g._),
    s.Qj(3, _._),
    s.Qj(4, y.a),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof CreditPopupReportParams === "undefined"
        ? Object
        : CreditPopupReportParams,
      typeof ICommercialMembershipServiceType === "undefined"
        ? Object
        : ICommercialMembershipServiceType,
      g._ === undefined ? Object : g._,
      _._ === undefined ? Object : _._,
      y.a === undefined ? Object : y.a,
    ]),
  ],
  P,
);
