import i from "oa";
import n from "zbK";
export function x(e) {
  let t;
  const {
    appId,
    selectedSku,
    teamContext,
    tradeType = "oneoff",
    isCompensateTrade = false,
    extraOverrides,
  } = e;
  const compensationPmsTrade =
    (t = selectedSku.compensationPrice) == null
      ? undefined
      : t.compensationPmsTrade;
  return {
    baseInfo: {
      appId,
      scene: n.fq.Teams,
      benefitTargetId: teamContext.currentTeamId,
      benefitTargetType: 2,
      extra: ((e) => {
        const { teamContext, extraOverrides } = e;
        const n = i._(
          {},
          teamContext.enterFrom
            ? {
                enterFrom: teamContext.enterFrom,
              }
            : {},
          teamContext.purchaseSource
            ? {
                purchaseSource: teamContext.purchaseSource,
              }
            : {},
          extraOverrides != null ? extraOverrides : {},
        );
        if (Object.keys(n).length !== 0) {
          return JSON.stringify(n);
        }
      })({
        teamContext,
        extraOverrides,
      }),
    },
    tradeInfo: {
      tradeType,
      payChannel: "third_party",
      cjThirdPartyInfo: i._(
        {
          isCompensateTrade,
        },
        compensationPmsTrade !== undefined
          ? {
              compensationPmsTrade,
            }
          : {},
      ),
    },
    productInfos: [
      {
        productId: selectedSku.productId,
        pmsTrade: selectedSku.pmsTrade,
      },
    ],
  };
}
