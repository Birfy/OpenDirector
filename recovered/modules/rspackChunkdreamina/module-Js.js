import i from "oa";
import n from "bk";
import a from "BxE";
import o from "yh";
import { c } from "./module-c3.js";
import l from "MjU";
import s from "DaQ";
import { Y } from "./module-Fr_2.js";
import { E as E_1 } from "./module-f4l.js";
import { R as R_1 } from "./module-O5D.js";
import { d } from "./module-Ud_2.js";
export var v = (e) => {
  var t;
  var r;
  var {
    scene,
    sceneOptions,
    extraBenefits = [],
    commercialStrategyService,
    benefitAmount,
  } = e;
  if (
    !(commercialStrategyService == null
      ? undefined
      : commercialStrategyService.isReady) ||
    (commercialStrategyService == null
      ? undefined
      : commercialStrategyService.isInFreemiumStage)
  ) {
    return {
      isStrategyFreeTrial: false,
      strategyFreeTrialTimes: 0,
      isCreditTrial: false,
      creditTrialQuotaAll: 0,
      creditTrialQuotaLeft: 0,
      trialType: c.nonTrial,
    };
  }
  var resourceId = E_1({
    scene,
    sceneOptions,
    commercialStrategyService,
  });
  var resourceType = R_1({
    scene,
    sceneOptions,
    commercialStrategyService,
  });
  var b = ((e) => {
    var t;
    var { scene, sceneOptions, commercialStrategyService } = e;
    var a = ((e) => {
      if (e && "batchNumber" in e) {
        const { batchNumber } = e;
        if (
          typeof batchNumber === "number" &&
          Number.isFinite(batchNumber) &&
          batchNumber > 0
        ) {
          return batchNumber;
        }
        return undefined;
      }
    })(sceneOptions);
    if (a) {
      return a;
    }
    var o =
      (t = commercialStrategyService.commercialBenefitsManager.getPluginConfig(
        scene,
        sceneOptions,
      )) == null
        ? undefined
        : t.batchNumber;
    if (o != null) {
      return o;
    }
    return 1;
  })({
    scene,
    sceneOptions,
    commercialStrategyService,
  });
  var C = Math.round(
    Y({
      scene,
      sceneOptions,
      commercialStrategyService,
      benefitAmount,
    }),
  );
  var S = a.A([
    ...d({
      scene,
      sceneOptions,
      commercialStrategyService,
    }),
    ...extraBenefits,
  ]);
  var c_nonTrial = c.nonTrial;
  var E = S.map((benefitType) => {
    var strategies =
      (S =
        (E = commercialStrategyService.getBenefitStrategy({
          resourceType,
          resourceId,
          benefitType,
        })) == null
          ? undefined
          : E.strategies) != null
        ? S
        : [];
    var r = 0;
    var i = 0;
    var hasUnitCreditFreeTrial = false;
    var a = false;
    var d = strategies.find((e) => {
      var t;
      return (
        e.payMode === "LimitFree" &&
        !!((t = e.limitStrategy) == null ? undefined : t.isCreditTrial)
      );
    });
    var hasCreditTrialStrategy = !!d;
    var {
      isTimeLimitedCreditTrial,
      creditTrialQuotaAll,
      creditTrialQuotaLeft,
      creditTrialAvailableTimes,
      hasAvailableCreditTrial,
    } = s.c(d == null ? undefined : d.limitStrategy);
    if (hasCreditTrialStrategy) {
      c_nonTrial = isTimeLimitedCreditTrial ? c.limitDuration : c.limitTimes;
    }
    for (var p of strategies) {
      var S;
      var E;
      var unitCreditAvailableUnits;
      var A;
      var { limitStrategy } = p;
      if (limitStrategy == null || !limitStrategy.isCreditTrial) {
        var R =
          (limitStrategy == null ? undefined : limitStrategy.limitFreeType) &&
          [o._3.LIMIT_BY_COUNT, o._3.CYCLE].includes(
            limitStrategy.limitFreeType,
          );
        var M =
          R &&
          (limitStrategy == null ? undefined : limitStrategy.quotaLeft) > 0;
        if (R) {
          c_nonTrial = c.limitTimes;
        }
        if (M) {
          r = Math.max(
            r,
            (A = limitStrategy == null ? undefined : limitStrategy.quotaLeft) !=
              null
              ? A
              : 0,
          );
        }
      }
    }
    var L = Math.min(b, r);
    var w = Math.max(b - L, 0);
    for (var F of strategies) {
      if (
        F.payMode === "UserCredit" &&
        ((O = F.creditStrategy) == null ? undefined : O.creditPricingInfo)
      ) {
        var N;
        var O;
        var k;
        var { minChargeCnt = 1, creditUnitPrice = 1 } =
          F.creditStrategy.creditPricingInfo;
        var x = l.Z0({
          strategies,
          billingUnits: C * b,
          creditUnitPrice: creditUnitPrice / minChargeCnt,
          role:
            typeof F.creditStrategy.role === "string"
              ? F.creditStrategy.role
              : undefined,
        });
        if (x.matched && x.isFullUnitDiscount) {
          unitCreditAvailableUnits = Math.max(
            unitCreditAvailableUnits != null ? unitCreditAvailableUnits : 0,
            x.unlimited ? Infinity : (k = x.availableUnits) != null ? k : 0,
          );
        }
        if (!(w <= 0)) {
          var G =
            w === b
              ? x
              : l.Z0({
                  strategies,
                  billingUnits: C * w,
                  creditUnitPrice: creditUnitPrice / minChargeCnt,
                  role:
                    typeof F.creditStrategy.role === "string"
                      ? F.creditStrategy.role
                      : undefined,
                });
          if (G.isFullyCovered) {
            c_nonTrial = c.limitTimes;
            hasUnitCreditFreeTrial = true;
            if (!a) {
              a = G.unlimited;
            }
            i = Math.max(i, (N = G.availableBatchTimes) != null ? N : 0);
          }
        }
      }
    }
    if (
      unitCreditAvailableUnits !== undefined &&
      Number.isFinite(unitCreditAvailableUnits) &&
      C > 0 &&
      b > 0
    ) {
      i = Math.floor((r * C + unitCreditAvailableUnits) / (C * b));
    }
    return {
      isFullyCovered: hasUnitCreditFreeTrial || r >= b,
      fiveSecondFreeTrialTimes: 0,
      hasUnitCreditFreeTrial,
      unitCreditAvailableUnits,
      hasCreditTrialStrategy,
      hasAvailableCreditTrial,
      isTimeLimitedCreditTrial,
      creditTrialQuotaAll,
      creditTrialQuotaLeft,
      creditTrialAvailableTimes,
      availableTimes: a ? Infinity : Math.max(r, i),
    };
  });
  var isCreditTrial = E.length > 0 && E.every((e) => e.hasAvailableCreditTrial);
  if (isCreditTrial && E.some((e) => e.isTimeLimitedCreditTrial)) {
    c_nonTrial = c.limitDuration;
  }
  var A = E.length > 0 && E.every((e) => e.isFullyCovered);
  var isStrategyFreeTrial = !isCreditTrial && A;
  var R = E.length > 0 ? Math.min(...E.map((e) => e.availableTimes)) : 0;
  var M = !isCreditTrial && Number.isFinite(R) ? R : 0;
  var L =
    E.length > 0 && E.every((e) => e.fiveSecondFreeTrialTimes > 0)
      ? Math.min(...E.map((e) => e.fiveSecondFreeTrialTimes))
      : 0;
  var w = isStrategyFreeTrial && E.some((e) => e.hasUnitCreditFreeTrial);
  var isUnlimitedUnitCreditFreeTrial =
    w && E.every((e) => Infinity === e.availableTimes);
  var N =
    E.length > 0 && E.every((e) => e.unitCreditAvailableUnits !== undefined)
      ? Math.min(
          ...E.map((e) => {
            var t;
            if ((t = e.unitCreditAvailableUnits) != null) {
              return t;
            }
            return 0;
          }),
        )
      : undefined;
  var unitCreditFreeTrialPieces =
    !isCreditTrial && N !== undefined && Number.isFinite(N) && N > 0
      ? N
      : undefined;
  var k = E.find((e) => e.hasCreditTrialStrategy);
  var creditTrialQuotaAll =
    (t = k == null ? undefined : k.creditTrialQuotaAll) != null ? t : 0;
  var creditTrialQuotaLeft =
    (r = k == null ? undefined : k.creditTrialQuotaLeft) != null ? r : 0;
  var x = E.map((e) => e.creditTrialAvailableTimes).filter(
    (e) => e !== undefined,
  );
  var creditTrialAvailableTimes =
    isCreditTrial && x.length === E.length ? Math.min(...x) : undefined;
  return i._(
    n._(
      i._(
        n._(
          i._(
            {
              isStrategyFreeTrial,
              strategyFreeTrialTimes: M,
            },
            L > 0
              ? {
                  freeTrialDurationSeconds: l.jp,
                }
              : {},
          ),
          {
            isCreditTrial,
            creditTrialQuotaAll,
            creditTrialQuotaLeft,
          },
        ),
        creditTrialAvailableTimes !== undefined
          ? {
              creditTrialAvailableTimes,
            }
          : {},
      ),
      {
        trialType: c_nonTrial,
      },
    ),
    unitCreditFreeTrialPieces !== undefined
      ? {
          unitCreditFreeTrialPieces,
        }
      : {},
    w
      ? {
          isUnitCreditFreeTrial: true,
          unitCreditFreeTrialTimes: M,
          isUnlimitedUnitCreditFreeTrial,
        }
      : {},
  );
};
