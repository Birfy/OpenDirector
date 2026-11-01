import r from "oa";
import s from "bk";
import n from "I3";
export function y(t) {
  let e;
  let i;
  let a;
  return {
    target_team_id: t.targetTeamId,
    base_info: {
      scene: "teams_default",
      app_id: t.appId,
      benefit_target_id: t.targetTeamId,
      benefit_target_type: 2,
      extra: JSON.stringify(
        s._(
          r._(
            {},
            ((i = t.extra),
            (a = n.j(i != null ? i : "")) &&
            typeof a === "object" &&
            !Array.isArray(a)
              ? a
              : {}),
          ),
          {
            page_from: (e = t.pageFrom) != null ? e : "team_credit_recharge",
          },
        ),
      ),
    },
    trade_info: {
      trade_type: t.tradeType,
      pay_channel: "third_party",
      cj_third_party_info: {
        is_agreement_v2: true,
        is_compensate_trade: false,
      },
    },
    product_infos: [
      {
        product_id: t.productId,
        pms_trade: t.pmsTrade,
        consumables_info: {
          consumables_id: t.consumablesId,
          consumables_type: t.consumablesType,
        },
      },
    ],
  };
}
export function q(t) {
  return {
    order_id: t.orderId,
  };
}
