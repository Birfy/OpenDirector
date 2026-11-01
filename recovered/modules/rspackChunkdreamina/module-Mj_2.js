import i from "oa";
import n from "bk";
import a from "MK";
import o from "MjU";
function c(e) {
  const { limitStrategy } = e;
  return (
    e.payMode === o.Q_.LimitFree &&
    (limitStrategy == null ? undefined : limitStrategy.limitFreeType) ===
      o.Jd.LimitByCount &&
    limitStrategy.isGift === true
  );
}
const l = "m10n_dm_flash_agent_indicator";
var s = (e) => {
  var t;
  var { scene, sceneOptions, commercialStrategyService } = e;
  var u = {
    scene,
    sceneOptions: sceneOptions ? i._({}, sceneOptions) : undefined,
    benefitAmount: e.benefitAmount,
    batchNumber: e.batchNumber,
    extraBenefits: e.extraBenefits,
    discount: e.discount,
    strategy: {
      isReady:
        (t =
          commercialStrategyService == null
            ? undefined
            : commercialStrategyService.isReady) != null && t,
      isInFreemiumStage:
        commercialStrategyService == null
          ? undefined
          : commercialStrategyService.isInFreemiumStage,
      computeStrategyBenefit: () => {
        if (commercialStrategyService == null) {
          return undefined;
        }
        return commercialStrategyService.commercialBenefitsManager.computeStrategyBenefit(
          scene,
          sceneOptions,
        );
      },
      getPluginConfig: () => {
        if (commercialStrategyService == null) {
          return undefined;
        }
        return commercialStrategyService.commercialBenefitsManager.getPluginConfig(
          scene,
          sceneOptions,
        );
      },
      getBenefitStrategy: (e) => {
        if (commercialStrategyService == null) {
          return undefined;
        }
        return commercialStrategyService.getBenefitStrategy(e);
      },
    },
    isOversea: false,
    formatDiscountLabel: (e) => {
      var { actualCredits, discountLabel } = e;
      if (actualCredits === 0) {
        return a.Ay.t("tag_free_label", {}, "限免");
      }
      return a.Ay.t(
        "tag_discount_label",
        {
          discount_label: discountLabel,
        },
        "积分".concat(discountLabel, "折"),
      );
    },
    formatFreeTrialLabel: (e) =>
      a.Ay.t(
        "dre_m10n_lip_sync_freetrial_button",
        {
          num: e,
          number0: e,
        },
        "限免".concat(e, "次"),
      ),
    formatPartialFreeTrialLabel: (e) => {
      var t;
      var r;
      var { remainingCount, freeUnitsPerUse } = e;
      t = "Free "
        .concat(freeUnitsPerUse, "s videos: ")
        .concat(remainingCount, " left");
      if (
        (r = a.Ay.t(
          l,
          {
            num: remainingCount,
            remainingCount,
            freeUnitsPerUse,
          },
          t,
        )) &&
        r !== l
      ) {
        return r;
      }
      return t;
    },
  };
  var f = o.lT(u);
  return n._(i._({}, f), {
    creditDisplayInfo: ((e, t) => {
      if (t.creditDisplayInfo.partialFreeTrial) {
        return t.creditDisplayInfo;
      }
      const r = new Set(
        t.details.map((e) => {
          var { benefit } = e;
          return benefit;
        }),
      );
      if (r.size === 0) {
        return t.creditDisplayInfo;
      }
      const resourceType = o.Rg(e);
      const resourceId = o.Ex(e);
      const d = Array.from(r).flatMap((benefitType) => {
        var r;
        var i;
        return (
          (r =
            (i = e.strategy.getBenefitStrategy({
              resourceType,
              resourceId,
              benefitType,
            })) == null
              ? undefined
              : i.strategies) != null
            ? r
            : []
        ).filter(c);
      });
      if (d.length === 0) {
        return t.creditDisplayInfo;
      }
      const u = n._(i._({}, t.creditDisplayInfo), {
        showOriginalCredits: true,
      });
      const sd25_gift_remaining = Math.max(
        0,
        ...d.map((e) => {
          var t;
          var { limitStrategy } = e;
          if (
            (t = limitStrategy == null ? undefined : limitStrategy.quotaLeft) !=
            null
          ) {
            return t;
          }
          return 0;
        }),
      );
      if (sd25_gift_remaining <= 0) {
        return u;
      }
      const dreaminacn_ultra_yearly_credits_discount = ((e) => {
        if (
          (e == null ? undefined : e.discountLabel) &&
          !(e.originalCredits <= e.actualCredits)
        ) {
          const t = Math.ceil((e.actualCredits / e.originalCredits) * 100) / 10;
          if (Number.isInteger(t)) {
            return t.toFixed(0);
          }
          return t.toFixed(1);
        }
      })(
        u.isFree
          ? undefined
          : o.lT(
              n._(i._({}, e), {
                strategy: n._(i._({}, e.strategy), {
                  getBenefitStrategy: (t) => {
                    var a;
                    var o = e.strategy.getBenefitStrategy(t);
                    if (o && r.has(t.benefitType)) {
                      return n._(i._({}, o), {
                        strategies:
                          (a = o.strategies) == null
                            ? undefined
                            : a.filter((e) => !c(e)),
                      });
                    }
                    return o;
                  },
                }),
              }),
            ).creditDisplayInfo,
      );
      return n._(i._({}, u), {
        freeTrialLabel: dreaminacn_ultra_yearly_credits_discount
          ? undefined
          : a.Ay.t(
              "dreamina_gift_remaining_sd25",
              {
                sd25_gift_remaining,
              },
              "限时赠送剩余：".concat(sd25_gift_remaining, "条"),
            ),
        discountLabel: dreaminacn_ultra_yearly_credits_discount
          ? a.Ay.t(
              "dreamina_yearly_credits_discount_sd25",
              {
                sd25_gift_remaining,
                dreaminacn_ultra_yearly_credits_discount,
              },
              "限时赠送剩余"
                .concat(sd25_gift_remaining, "条，积分消耗")
                .concat(dreaminacn_ultra_yearly_credits_discount, "折起"),
            )
          : undefined,
      });
    })(u, f),
    details: f.details.map((e) => i._({}, e)),
  });
};
export { s as l };
