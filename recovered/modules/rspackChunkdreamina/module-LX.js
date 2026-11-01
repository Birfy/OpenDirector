import a from "oa";
import n from "bk";
import o from "QWK";
import s from "Jhy";
import c from "fg";
import u from "Kt";
import _ from "SI";
import d from "c3";
import l from "Js";
import p from "yK6";
import m from "mU";
import v from "Ud";
import y from "wcw";
import { PQ } from "./module-Com.js";
import h from "jh7";
import S from "EYk";
import f from "VN";
import { IW, Tz, ey, w7, y7 } from "./module-fAr.js";
import { G as G_1 } from "./module-gzI.js";
import { r as r_1 } from "./module-zi.js";
export var _Y = {
  Show: "show",
  AgreeProtocol: "agree_protocol",
  GetQrCode: "get_qr_code",
  FailToGetQrCode: "fail_to_get_qr_code",
  InvalidQrCode: "invalid_qr_code",
  ShowQrCode: "show_qr_code",
  CloseQrCodeModal: "close_qr_code_modal",
  VIPEnd: "vip_end",
  PaySuccess: "vip_pay_success",
  PayFail: "vip_pay_fail",
  PayCancel: "vip_pay_cancel",
  ClickTab: "click_tab",
  VIPSelect: "vip_select",
  ClickGetCredits: "click_get_credits",
  ClickPlansAndBilling: "click_plans_and_billing",
  ClickCurrentPlan: "click_current_plan",
  Close: "close",
  VipPay: "vip_pay",
  CancelSubscribe: "cancel_subscribe",
  CLICK_PURCHASE: "click_purchase",
  CreditsDetail: "credits_detail",
  ClickApiButton: "click_api_button",
  CrossChannelBlock: "cross_channel_block",
  ShowTeamMember: "show_team_member",
  ClickTeamMember: "click_team_member",
  ShowCorporateTransfer: "show_corporate_transfer",
  ClickCorporateTransfer: "click_corporate_transfer",
  VIP_EXCHANGE_SHOW: "vip_exchange_show",
  VIP_EXCHANGE_CLICK: "vip_exchange_click",
  WORRY_FREE_PAYMENT_BUBBLE_SHOW: "worry_free_payment_bubble_show",
  ShowPurchaseSeats: "show_purchase_seats",
  ClickPurchaseSeatsPay: "click_purchase_seats_pay",
  ClosePurchaseSeats: "close_purchase_seats",
  ClickContactSales: "click_contact_sales",
  ShowContactSalesPopup: "show_contact_sales_popup",
  ConfirmContactSalesPopup: "confirm_contact_sales_popup",
  CloseContactSalesPopup: "close_contact_sales_popup",
};
function O(e) {
  if (e) {
    if (
      e === "single_quarter_purchase" ||
      e === "single_year_purchase" ||
      Object.values(_.or).includes(e)
    ) {
      return e;
    }
    return _.or[e];
  }
}
function k(currentTabKey, teamType) {
  const r = O(currentTabKey);
  if (
    teamType === "team" &&
    r &&
    [
      "pay_annually",
      "pay_monthly",
      "single_purchase",
      "single_quarter_purchase",
      "single_year_purchase",
    ].includes(r)
  ) {
    return "team_".concat(r);
  }
  return r;
}
class R {
  get otherReportParams() {
    return {
      second_page: "work_collection_detail",
    };
  }
  getEventParams() {
    let baseExtra;
    let fallbackRightId;
    let rightTrackingData;
    const {
      action,
      source,
      scene,
      benefits,
      payChannel,
      payAmount,
      orderId,
      toProduct,
      currentTabKey,
      clickTabKey,
      payCurrency,
      sku,
      sceneOptions,
      benefitAmount,
      isQuickPreview,
      isFromPreview,
      batchNumber,
      vip_service_entrance_position,
      resourceKey,
      activityId,
      activityName,
      planId,
      planName,
      entranceResourceKey,
      entranceActivityId,
      entranceDeeplink,
      deeplink,
      errorCode,
      errorMessage,
      errorStage,
      logId,
      teamType,
      teamId,
    } = this._params;
    const { isVip, currentVipLevel, vipInfo } = this._vipService;
    const { cycleUnit, level, cycle } =
      (vipInfo == null ? undefined : vipInfo.currentAutoRenewPlan) || {};
    const { level: level_1 } = toProduct || {};
    const user_teams_subscribe_type = r_1(
      this._membershipService.snapshot.team,
    );
    let eo = {
      is_freetrial: 0,
      vip_right_trial_type: d.c.nonTrial,
    };
    if (scene) {
      try {
        const es = l.v({
          scene,
          sceneOptions,
          commercialStrategyService: this._commercialStrategyService,
        });
        eo = {
          is_freetrial: Number(es.isStrategyFreeTrial),
          vip_right_trial_type: es.trialType,
        };
        const ec = this._getExtraParam(scene, benefits);
        fallbackRightId = ec.vipFunctionId;
        const eu = p.d({
          scene,
          sceneOptions,
          commercialStrategyService: this._commercialStrategyService,
        });
        rightTrackingData = eu ? c.w(eu) : undefined;
        baseExtra = a._(
          {
            ai_type: ec.aiType,
            ai_sub_type: ec.aiSubType,
          },
          ec.vipFunctionName
            ? {
                vip_function_name: ec.vipFunctionName,
              }
            : {},
          ec.model
            ? {
                model: ec.model,
              }
            : {},
          ec.generateType !== undefined
            ? {
                generate_type: ec.generateType,
              }
            : {},
          benefitAmount !== undefined
            ? {
                benefit_amount: benefitAmount,
              }
            : {},
        );
      } catch (error) {
        y.Ve.error("report `vip_popup` error, cannot get extra param", error);
      }
    }
    const extra = w7({
      baseExtra,
      rightTrackingData,
      customReportParams: this._params.customReportParams,
      fallbackRightId,
    });
    const ed = y7(ey(this._params.customReportParams));
    const el = !!(
      entranceResourceKey ||
      entranceActivityId ||
      entranceDeeplink
    );
    const ep = n._(
      a._(
        n._(a._({}, eo, this.otherReportParams), {
          action,
          is_vip: +!!isVip,
          user_subscribe_type: _.PR[currentVipLevel],
          source,
          current_tab: k(currentTabKey, teamType),
          click_tab: O(clickTabKey),
          membership_type_now: isVip
            ? level
              ? _.PR[level]
              : _.PR[currentVipLevel]
            : _.PR[""],
          membership_pay_type_now: (() => {
            var e;
            if (isVip) {
              if ((e = G_1(cycleUnit, cycle)) != null) {
                return e;
              }
              return "single_purchase";
            }
          })(),
          membership_type_buy:
            level_1 !== undefined ? _.PR[level_1] : undefined,
          membership_pay_type_buy: ((e) => {
            const { toProduct } = e;
            if (
              (toProduct == null ? undefined : toProduct.priceType) ===
              "un-auto"
            ) {
              if (
                toProduct.cycleUnit === "MONTH" &&
                toProduct.subscribeCycle === 3
              ) {
                return "single_quarter_purchase";
              }
              return "single_purchase";
            }
            return G_1(
              toProduct == null ? undefined : toProduct.cycleUnit,
              toProduct == null ? undefined : toProduct.subscribeCycle,
            );
          })({
            toProduct,
          }),
          pay_currency: payCurrency,
          order_id: orderId,
          pay_channel: payChannel,
          pay_amount: payAmount,
          sku,
          extra: Tz(extra),
          business_extra: IW({
            customReportParams: this._params.customReportParams,
            extra,
          }),
          is_quick_preview: Number(isQuickPreview != null ? isQuickPreview : 0),
          is_from_preview: Number(isFromPreview != null ? isFromPreview : 0),
          generate_num: batchNumber,
        }),
        m.m(toProduct),
      ),
      {
        vip_service_entrance_position,
        resource_key: entranceResourceKey || resourceKey,
        activity_id: entranceActivityId || activityId,
        activity_name: el ? undefined : activityName,
        plan_id: el ? undefined : planId,
        plan_name: el ? undefined : planName,
        deeplink: entranceDeeplink || deeplink,
        error_code: errorCode,
        error_message: errorMessage,
        error_stage: errorStage,
        log_id: logId,
        team_type: teamType,
        team_id: teamId,
        user_teams_subscribe_type,
      },
    );
    return n._(
      a._(
        {},
        s.A(ep, ed),
        currentTabKey
          ? {
              current_tab: k(currentTabKey, teamType),
            }
          : {},
        clickTabKey
          ? {
              click_tab: O(clickTabKey),
            }
          : {},
      ),
      {
        user_subscribe_type: _.PR[currentVipLevel],
        user_teams_subscribe_type,
      },
    );
  }
  _getExtraParam(scene) {
    arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let vipFunctionName;
    let model;
    let generateType;
    const { sceneOptions } = this._params;
    return {
      aiType: "",
      aiSubType: "",
      vipFunctionName,
      vipFunctionId: v
        .d({
          scene,
          sceneOptions,
          commercialStrategyService: this._commercialStrategyService,
        })
        .join(","),
      model,
      generateType,
    };
  }
  _getGenerateImageParam() {
    return {
      selectModelKey: "TODO ww 这里从外部传入模型key",
    };
  }
  constructor(e, t, r, i, a) {
    this._params = e;
    this._vipService = t;
    this._membershipService = r;
    this._containerService = i;
    this._commercialStrategyService = a;
    this.eventName = "vip_popup";
  }
}
export function WS(e, t) {
  PQ(e, R, [t]);
}
R = o.Cg(
  [
    o.Qj(1, f._),
    o.Qj(2, h.r3),
    o.Qj(3, u._),
    o.Qj(4, S.a),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof VipPopupReportParams === "undefined"
        ? Object
        : VipPopupReportParams,
      f._ === undefined ? Object : f._,
      typeof ICommercialMembershipServiceType === "undefined"
        ? Object
        : ICommercialMembershipServiceType,
      u._ === undefined ? Object : u._,
      S.a === undefined ? Object : S.a,
    ]),
  ],
  R,
);
