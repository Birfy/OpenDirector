import r from "oa";
import n from "bk";
import { c } from "./module-DaQ.js";
import { Y9, ny, zE } from "./module-nP.js";
export var Q_ = {
  LimitFree: "LimitFree",
  Subscribe: "Subscribe",
  UserCredit: "UserCredit",
};
export var Jd = {
  LimitByCount: 1,
  LimitByTime: 2,
  Cycle: 3,
  LimitByRole: 4,
  LimitByCredit: 5,
  AccumulatedCreditCycle: 6,
  UnitCredit: 7,
  UnitCreditByPiece: 8,
};
const u = new Set([
  "seedance_25_720p_output",
  "seedance_25_720p_no_input_video_output",
  "seedance_25_720p_flash_output",
  "seedance_25_720p_flash_no_input_output",
  "seedance_25_draft_480p_output",
  "seedance_25_draft_480p_no_input_video_output",
]);
function d(e) {
  const t =
    Number.isFinite(e.billingUnits) && e.billingUnits > 0
      ? Math.round(e.billingUnits)
      : 0;
  const i =
    Number.isFinite(e.creditUnitPrice) && e.creditUnitPrice > 0
      ? e.creditUnitPrice
      : 0;
  const payableCredits = t * i;
  const result = {
    matched: false,
    appliedUnits: 0,
    deductionCredits: 0,
    payableCredits,
    isFullUnitDiscount: false,
    isFullyCovered: false,
    unlimited: false,
  };
  if (t <= 0 || i <= 0) {
    return {
      result,
    };
  }
  return e.strategies.reduce(
    (acc, strategy) => {
      var a;
      var u;
      var d;
      var c;
      var p;
      var s_limitStrategy = strategy.limitStrategy;
      if (
        strategy.payMode !== Q_.LimitFree ||
        (s_limitStrategy == null
          ? undefined
          : s_limitStrategy.limitFreeType) !== Jd.UnitCreditByPiece ||
        ((a = e.role),
        (u = s_limitStrategy.role) !== "all" &&
          (a === undefined || u === undefined || a !== u))
      ) {
        return acc;
      }
      var v_limitUnitCredit = s_limitStrategy.limitUnitCredit;
      if (
        typeof v_limitUnitCredit !== "number" ||
        !Number.isFinite(v_limitUnitCredit) ||
        v_limitUnitCredit <= 0
      ) {
        return acc;
      }
      var unlimited =
        s_limitStrategy.quotaAll === -1 && s_limitStrategy.quotaLeft === -1;
      var f = 0;
      if (unlimited) {
        f = t;
      } else if (
        typeof s_limitStrategy.quotaLeft === "number" &&
        Number.isFinite(s_limitStrategy.quotaLeft) &&
        s_limitStrategy.quotaLeft >= 0
      ) {
        f = Math.floor(s_limitStrategy.quotaLeft);
      }
      var appliedUnits = Math.min(t, f);
      var deductionCredits = appliedUnits * Math.min(i, v_limitUnitCredit);
      var isFullUnitDiscount = v_limitUnitCredit >= i;
      var _ = {
        matched: true,
        appliedUnits,
        availableUnits: unlimited ? undefined : f,
        deductionCredits,
        payableCredits: Math.max(payableCredits - deductionCredits, 0),
        isFullUnitDiscount,
        isFullyCovered: isFullUnitDiscount && appliedUnits === t,
        unlimited,
        availableBatchTimes:
          !unlimited && isFullUnitDiscount ? Math.floor(f / t) : undefined,
      };
      d = acc.result;
      if (
        _.deductionCredits !== d.deductionCredits
          ? _.deductionCredits > d.deductionCredits
          : _.unlimited !== d.unlimited
            ? _.unlimited
            : _.isFullyCovered !== d.isFullyCovered
              ? _.isFullyCovered
              : ((c = _.availableUnits) != null ? c : 0) >
                ((p = d.availableUnits) != null ? p : 0)
      ) {
        return {
          result: _,
          strategy,
        };
      }
      return acc;
    },
    {
      result,
    },
  );
}
export function Z0(e) {
  return d(e).result;
}
const creditDisplayInfo = {
  actualCredits: 0,
  originalCredits: 0,
  hasDiscount: false,
  isFree: true,
};
function v(e) {
  let t;
  const i = e.strategy.computeStrategyBenefit({
    scene: e.scene,
    sceneOptions: e.sceneOptions,
  });
  if (i == null ? undefined : i.benefitKey) {
    return A([i.benefitKey, ...((t = i.extraBenefitKeys) != null ? t : [])]);
  }
  return [];
}
export function Ex(e) {
  let t;
  let i;
  if (
    (t =
      (i = e.strategy.getPluginConfig({
        scene: e.scene,
        sceneOptions: e.sceneOptions,
      })) == null
        ? undefined
        : i.strategyId) != null
  ) {
    return t;
  }
  return "";
}
export function Rg(e) {
  let t;
  let i;
  if (
    (t =
      (i = e.strategy.getPluginConfig({
        scene: e.scene,
        sceneOptions: e.sceneOptions,
      })) == null
        ? undefined
        : i.resourceType) != null
  ) {
    return t;
  }
  return "";
}
function f(sceneOptions) {
  if (sceneOptions && "batchNumber" in sceneOptions) {
    return M(sceneOptions.batchNumber);
  }
}
function g(e) {
  let t;
  let i;
  const r = (t = e.benefitAmount) != null ? t : 0;
  if (!Number.isFinite(r)) {
    return 3;
  }
  const n =
    (i = e.strategy.getPluginConfig({
      scene: e.scene,
      sceneOptions: e.sceneOptions,
    })) == null
      ? undefined
      : i.maxBenefitAmount;
  if (n) {
    return Math.min(r, n);
  }
  return r;
}
export function I_(e) {
  const { scene, sceneOptions, extraBenefits = [], strategy } = e;
  if (!(strategy == null ? undefined : strategy.isReady)) {
    return zE.None;
  }
  const s = Ex({
    scene,
    sceneOptions,
    strategy,
  });
  const o = Rg({
    scene,
    sceneOptions,
    strategy,
  });
  const l = A([
    ...v({
      scene,
      sceneOptions,
      strategy,
    }),
    ...extraBenefits,
  ]);
  const u = [];
  for (const benefitType of l) {
    var c;
    let p;
    const f = strategy.getBenefitStrategy({
      resourceType: o,
      resourceId: s,
      benefitType,
    });
    if (!(f == null || (p = f.strategies) == null)) {
      p.forEach((e) => {
        var t;
        var i;
        var r;
        var n;
        var s =
          (t =
            (i = (r = e.creditStrategy) == null ? undefined : r.role) != null
              ? i
              : (n = e.subscribeStrategy) == null
                ? undefined
                : n.role) && t !== "all"
            ? Y9(t)
            : zE.None;
        if (s) {
          u.push(s);
        }
      });
    }
  }
  if ((c = A(u).sort((e, t) => ny(e) - ny(t))[0]) != null) {
    return c;
  }
  return zE.None;
}
export function $c(e) {
  let t;
  return (
    !!((t = e.strategy) == null ? undefined : t.isReady) &&
    ny(I_(e)) > ny(zE.None)
  );
}
export function lT(e) {
  let t;
  let i;
  let s;
  let a;
  let u;
  let hasDiscount;
  let y;
  let b;
  const {
    scene,
    sceneOptions,
    strategy,
    extraBenefits = [],
    batchNumber,
    discount = 0,
  } = e;
  const w = r._({}, strategy.creditDisplayFormatting, e);
  const D =
    (y = (b = M(batchNumber)) != null ? b : f(sceneOptions)) != null ? y : 1;
  const benefitAmount = g({
    benefitAmount: e.benefitAmount,
    scene,
    sceneOptions,
    strategy,
  });
  if (!strategy.isReady || strategy.isInFreemiumStage) {
    return {
      credits: 0,
      originalCredits: 0,
      details: [],
      benefitAmount,
      creditDisplayInfo,
    };
  }
  const E = Ex({
    scene,
    sceneOptions,
    strategy,
  });
  const N = Rg({
    scene,
    sceneOptions,
    strategy,
  });
  const x = A([
    ...v({
      scene,
      sceneOptions,
      strategy,
    }),
    ...extraBenefits,
  ]);
  const V = [];
  let B = 0;
  const G = [];
  x.forEach((e) => {
    var t;
    var i;
    var s = (function (benefit, t, amount, s, a, u) {
      const c =
        !(arguments.length > 6) || arguments[6] === undefined || arguments[6];
      const p = [];
      const v = c ? T(benefit, t) : undefined;
      const h = v ? Math.min(s, v.remainingCount) : 0;
      const m = v ? 0 : ((A = t), (O = s), A.some(k) ? O : Math.min(O, P(A)));
      const f = Math.max(s - m, 0);
      const remainingFreeTrialTimes = v ? 0 : P(t);
      const y = Math.min(s, remainingFreeTrialTimes);
      const b = t.filter(F).reduce((acc, item) => {
        var i;
        var r;
        var n;
        var s;
        if (
          ((i = (n = item.limitStrategy) == null ? undefined : n.quotaLeft) !=
          null
            ? i
            : 0) >
          ((r =
            acc == null || (s = acc.limitStrategy) == null
              ? undefined
              : s.quotaLeft) != null
            ? r
            : 0)
        ) {
          return item;
        }
        return acc;
      }, undefined);
      const _ = t
        .filter((e) => {
          var t;
          return (
            e.payMode === Q_.LimitFree &&
            ((t = e.limitStrategy) == null ? undefined : t.limitFreeType) ===
              Jd.AccumulatedCreditCycle
          );
        })
        .reduce((acc, item) => {
          var i;
          var r;
          var n;
          var s;
          if (
            ((i = (n = item.limitStrategy) == null ? undefined : n.quotaLeft) !=
            null
              ? i
              : 0) >
            ((r =
              acc == null || (s = acc.limitStrategy) == null
                ? undefined
                : s.quotaLeft) != null
              ? r
              : 0)
          ) {
            return item;
          }
          return acc;
        }, undefined);
      let usedLimitFree = m > 0 || h > 0;
      let S = t.reduce((acc, item) => {
        var i;
        var r;
        if (
          item.payMode !== Q_.LimitFree ||
          ((r = item.limitStrategy) == null ? undefined : r.limitFreeType) !==
            Jd.AccumulatedCreditCycle
        ) {
          return acc;
        }
        return Math.max(
          acc,
          (i = item.limitStrategy.quotaLeft) != null ? i : 0,
        );
      }, 0);
      for (const M of t) {
        if (
          M.payMode === Q_.UserCredit &&
          ((I = M.creditStrategy) == null ? undefined : I.creditPricingInfo)
        ) {
          var A;
          var O;
          var I;
          const {
            minChargeCnt = 1,
            creditUnitPrice = 1,
            originalCreditUnitPrice,
          } = M.creditStrategy.creditPricingInfo;
          const D = creditUnitPrice / minChargeCnt;
          const originalCreditsPerUnit =
            originalCreditUnitPrice && originalCreditUnitPrice > creditUnitPrice
              ? originalCreditUnitPrice / minChargeCnt
              : undefined;
          const E = L(D, amount, s, a);
          const N = L(D, amount, f, a);
          const x = d({
            strategies: t,
            billingUnits: Math.round(amount) * f,
            creditUnitPrice: D,
            role: M.creditStrategy.role,
          });
          const V = x.result;
          const B = Math.min(N, V.deductionCredits);
          const G = Math.max(N - B, 0);
          const j = Math.min(G, S);
          const z = G - j;
          const K = v
            ? Math.min(
                z,
                L(
                  D,
                  Math.min(Math.max(Math.round(amount), 0), v.freeUnitsPerUse),
                  h,
                  a,
                ),
              )
            : 0;
          const credits = z - K;
          const W = m > 0 || B > 0 || j > 0 || K > 0;
          const $ = originalCreditsPerUnit
            ? L(originalCreditsPerUnit, amount, s, a)
            : undefined;
          S = Math.max(S - j, 0);
          if (B > 0 && x.strategy) {
            if (u != null) {
              u(x.strategy, V.appliedUnits);
            }
          }
          if (j > 0 && _) {
            if (u != null) {
              u(_, j);
            }
          }
          if (!usedLimitFree) {
            usedLimitFree = W;
          }
          p.push({
            benefit,
            amount,
            creditsPerUnit: D,
            originalCreditsPerUnit,
            credits,
            originalCredits: $ != null ? $ : W ? E : undefined,
          });
        }
      }
      if (b && (y > 0 || h > 0) && !t.some(k)) {
        if (u != null) {
          u(b, h || y);
        }
      }
      return n._(
        r._(
          {
            details: p,
            remainingFreeTrialTimes,
          },
          v
            ? {
                partialFreeTrial: v,
              }
            : {},
        ),
        {
          usedLimitFree,
        },
      );
    })(
      e,
      (t =
        (i = strategy.getBenefitStrategy({
          resourceType: N,
          resourceId: E,
          benefitType: e,
        })) == null
          ? undefined
          : i.strategies) != null
        ? t
        : [],
      benefitAmount,
      D,
      discount,
      undefined,
      w.isOversea !== false,
    );
    V.push(...s.details);
    B = Math.max(B, s.remainingFreeTrialTimes);
    if (s.partialFreeTrial) {
      G.push(s.partialFreeTrial);
    }
  });
  const j = G.length
    ? {
        remainingCount: Math.min(...G.map((e) => e.remainingCount)),
        freeUnitsPerUse: Math.min(...G.map((e) => e.freeUnitsPerUse)),
      }
    : undefined;
  const z = V.reduce((acc, item) => acc + item.credits, 0);
  const K = discount ? Math.round((discount * z) / D / 100) * D : Math.floor(z);
  const Q = V.reduce((acc, item) => {
    var i;
    return acc + ((i = item.originalCredits) != null ? i : item.credits);
  }, 0);
  return {
    credits: K,
    originalCredits: z,
    details: V,
    benefitAmount,
    creditDisplayInfo:
      ((t = K),
      (i = Q),
      (s = ((e, t) => {
        if (!(e <= 0)) {
          return S(
            () => {
              var i;
              if ((i = t.formatFreeTrialLabel) == null) {
                return undefined;
              }
              return i.call(t, e);
            },
            t.isOversea ? "".concat(e, " free trials") : "限免".concat(e, "次"),
          );
        }
      })(B, w)),
      (a = j),
      (u = w),
      (hasDiscount = i > t),
      n._(
        r._(
          {
            actualCredits: t,
            originalCredits: hasDiscount ? i : t,
            hasDiscount,
          },
          hasDiscount && !a
            ? {
                discountLabel:
                  s != null
                    ? s
                    : ((e, t, i) => {
                        if (!(t <= 0) && !(t <= e)) {
                          if (e === 0) {
                            return S(
                              () => {
                                var r;
                                if ((r = i.formatDiscountLabel) == null) {
                                  return undefined;
                                }
                                return r.call(i, {
                                  actualCredits: e,
                                  originalCredits: t,
                                  discountLabel: "free",
                                  isOversea: !!i.isOversea,
                                });
                              },
                              i.isOversea ? "Free" : "限免",
                            );
                          }
                          const r = e / t;
                          const n = Math.ceil(100 * r) / 10;
                          const s = Number.isInteger(n)
                            ? n.toFixed(0)
                            : n.toFixed(1);
                          const discountLabel = i.isOversea
                            ? "".concat(Math.max(0, Math.round((1 - r) * 100)))
                            : s;
                          return S(
                            () => {
                              var r;
                              if ((r = i.formatDiscountLabel) == null) {
                                return undefined;
                              }
                              return r.call(i, {
                                actualCredits: e,
                                originalCredits: t,
                                discountLabel,
                                isOversea: !!i.isOversea,
                              });
                            },
                            i.isOversea
                              ? "".concat(discountLabel, "% off")
                              : "积分".concat(discountLabel, "折"),
                          );
                        }
                      })(t, i, u),
              }
            : {},
          a
            ? {
                partialFreeTrial: a,
                freeTrialLabel: ((e, t) => {
                  const { remainingCount, freeUnitsPerUse } = e;
                  return S(
                    () => {
                      var e;
                      if ((e = t.formatPartialFreeTrialLabel) == null) {
                        return undefined;
                      }
                      return e.call(t, {
                        remainingCount,
                        freeUnitsPerUse,
                        isOversea: !!t.isOversea,
                      });
                    },
                    "Free "
                      .concat(freeUnitsPerUse, "s videos: ")
                      .concat(remainingCount, " left"),
                  );
                })(a, u),
                showOriginalCredits: true,
              }
            : {},
        ),
        {
          isFree: t === 0,
        },
      )),
  };
}
export function vh(e) {
  let t;
  let i;
  let a;
  let u;
  let d;
  let p;
  let y;
  let b;
  let _;
  const { scene, sceneOptions, extraBenefits = [], strategy } = e;
  if (!strategy.isReady || strategy.isInFreemiumStage) {
    return {
      isStrategyFreeTrial: false,
      strategyFreeTrialTimes: 0,
      trialType: "non_trial",
    };
  }
  const P = Ex({
    scene,
    sceneOptions,
    strategy,
  });
  const L = Rg({
    scene,
    sceneOptions,
    strategy,
  });
  const O =
    (d = M(e.batchNumber)) != null
      ? d
      : (i =
            (a = f(
              (t = {
                scene,
                sceneOptions,
                strategy,
              }).sceneOptions,
            )) != null
              ? a
              : (u = t.strategy.getPluginConfig({
                    scene: t.scene,
                    sceneOptions: t.sceneOptions,
                  })) == null
                ? undefined
                : u.batchNumber) != null
        ? i
        : 1;
  const I = Math.round(
    g({
      benefitAmount: e.benefitAmount,
      scene,
      sceneOptions,
      strategy,
    }),
  );
  const q = A([
    ...v({
      scene,
      sceneOptions,
      strategy,
    }),
    ...extraBenefits,
  ]);
  let trialType = "non_trial";
  const w =
    (p = e.enablePartialFreeTrial) != null
      ? p
      : ((_ = strategy.creditDisplayFormatting) == null
          ? undefined
          : _.isOversea) !== false;
  const D = q.map((e) => {
    var t =
      (b =
        (_ = strategy.getBenefitStrategy({
          resourceType: L,
          resourceId: P,
          benefitType: e,
        })) == null
          ? undefined
          : _.strategies) != null
        ? b
        : [];
    var i = w ? T(e, t) : undefined;
    var r = 0;
    var n = 0;
    var hasUnitCreditFreeTrial = false;
    var u = false;
    var d = t.find((e) => {
      var t;
      return (
        e.payMode === Q_.LimitFree &&
        ((t = e.limitStrategy) == null ? undefined : t.isCreditTrial) === true
      );
    });
    var hasCreditTrialStrategy = !!d;
    var {
      isTimeLimitedCreditTrial,
      creditTrialQuotaAll,
      creditTrialQuotaLeft,
      creditTrialAvailableTimes,
      hasAvailableCreditTrial,
    } = c(d == null ? undefined : d.limitStrategy);
    if (hasCreditTrialStrategy) {
      trialType = isTimeLimitedCreditTrial ? "limit_duration" : "limit_times";
    }
    for (var y of t) {
      var b;
      var _;
      var unitCreditAvailableUnits;
      var S;
      var F;
      var { limitStrategy } = y;
      if (limitStrategy == null || !limitStrategy.isCreditTrial) {
        var A = !!(
          (limitStrategy == null ? undefined : limitStrategy.limitFreeType) &&
          [Jd.LimitByCount, Jd.Cycle].includes(limitStrategy.limitFreeType)
        );
        var q =
          A &&
          ((S = limitStrategy == null ? undefined : limitStrategy.quotaLeft) !=
          null
            ? S
            : 0) > 0;
        if (A) {
          trialType = "limit_times";
        }
        if (q) {
          r = Math.max(
            r,
            (F = limitStrategy == null ? undefined : limitStrategy.quotaLeft) !=
              null
              ? F
              : 0,
          );
        }
      }
    }
    var D = Math.min(O, r);
    var U = Math.max(O - D, 0);
    for (var E of t) {
      if (
        E.payMode === Q_.UserCredit &&
        ((x = E.creditStrategy) == null ? undefined : x.creditPricingInfo)
      ) {
        var N;
        var x;
        var V;
        var { minChargeCnt = 1, creditUnitPrice = 1 } =
          E.creditStrategy.creditPricingInfo;
        var j = Z0({
          strategies: t,
          billingUnits: I * O,
          creditUnitPrice: creditUnitPrice / minChargeCnt,
          role: E.creditStrategy.role,
        });
        if (j.matched && j.isFullUnitDiscount) {
          unitCreditAvailableUnits = Math.max(
            unitCreditAvailableUnits != null ? unitCreditAvailableUnits : 0,
            j.unlimited ? Infinity : (V = j.availableUnits) != null ? V : 0,
          );
        }
        if (!(U <= 0)) {
          var z =
            U === O
              ? j
              : Z0({
                  strategies: t,
                  billingUnits: I * U,
                  creditUnitPrice: creditUnitPrice / minChargeCnt,
                  role: E.creditStrategy.role,
                });
          if (z.isFullyCovered) {
            trialType = "limit_times";
            hasUnitCreditFreeTrial = true;
            if (!u) {
              u = z.unlimited;
            }
            n = Math.max(n, (N = z.availableBatchTimes) != null ? N : 0);
          }
        }
      }
    }
    if (
      unitCreditAvailableUnits !== undefined &&
      Number.isFinite(unitCreditAvailableUnits) &&
      I > 0 &&
      O > 0
    ) {
      n = Math.floor((r * I + unitCreditAvailableUnits) / (I * O));
    }
    return {
      isFullyCovered:
        hasUnitCreditFreeTrial || (r >= O && (!i || I <= i.freeUnitsPerUse)),
      partialFreeTrial: i,
      hasUnitCreditFreeTrial,
      unitCreditAvailableUnits,
      hasCreditTrialStrategy,
      hasAvailableCreditTrial,
      isTimeLimitedCreditTrial,
      creditTrialQuotaAll,
      creditTrialQuotaLeft,
      creditTrialAvailableTimes,
      availableTimes: u ? Infinity : Math.max(r, n),
    };
  });
  const isCreditTrial =
    D.length > 0 && D.every((e) => e.hasAvailableCreditTrial);
  if (isCreditTrial && D.some((e) => e.isTimeLimitedCreditTrial)) {
    trialType = "limit_duration";
  }
  const E = D.length > 0 && D.every((e) => e.isFullyCovered);
  const isStrategyFreeTrial = !isCreditTrial && E;
  const x = D.length > 0 ? Math.min(...D.map((e) => e.availableTimes)) : 0;
  const V = !isCreditTrial && Number.isFinite(x) ? x : 0;
  const B =
    D.length > 0 && D.every((e) => e.partialFreeTrial !== undefined)
      ? {
          remainingCount: Math.min(
            ...D.map((e) => {
              var t;
              var i;
              if (
                (t =
                  (i = e.partialFreeTrial) == null
                    ? undefined
                    : i.remainingCount) != null
              ) {
                return t;
              }
              return 0;
            }),
          ),
          freeUnitsPerUse: Math.min(
            ...D.map((e) => {
              var t;
              var i;
              if (
                (t =
                  (i = e.partialFreeTrial) == null
                    ? undefined
                    : i.freeUnitsPerUse) != null
              ) {
                return t;
              }
              return 0;
            }),
          ),
        }
      : undefined;
  const G = isStrategyFreeTrial && D.some((e) => e.hasUnitCreditFreeTrial);
  const isUnlimitedUnitCreditFreeTrial =
    G && D.every((e) => Infinity === e.availableTimes);
  const z =
    D.length > 0 && D.every((e) => e.unitCreditAvailableUnits !== undefined)
      ? Math.min(
          ...D.map((e) => {
            var t;
            if ((t = e.unitCreditAvailableUnits) != null) {
              return t;
            }
            return 0;
          }),
        )
      : undefined;
  const unitCreditFreeTrialPieces =
    !isCreditTrial && z !== undefined && Number.isFinite(z) && z > 0
      ? z
      : undefined;
  const Q = D.find((e) => e.hasCreditTrialStrategy);
  const creditTrialQuotaAll =
    (y = Q == null ? undefined : Q.creditTrialQuotaAll) != null ? y : 0;
  const creditTrialQuotaLeft =
    (b = Q == null ? undefined : Q.creditTrialQuotaLeft) != null ? b : 0;
  const H = D.map((e) => e.creditTrialAvailableTimes).filter(
    (e) => e !== undefined,
  );
  const creditTrialAvailableTimes =
    isCreditTrial && H.length === D.length ? Math.min(...H) : undefined;
  return r._(
    n._(
      r._(
        {
          isStrategyFreeTrial,
          strategyFreeTrialTimes: V,
        },
        B
          ? {
              partialFreeTrial: B,
              freeTrialDurationSeconds: B.freeUnitsPerUse,
            }
          : {},
        Q
          ? {
              isCreditTrial,
              creditTrialQuotaAll,
              creditTrialQuotaLeft,
            }
          : {},
        creditTrialAvailableTimes !== undefined
          ? {
              creditTrialAvailableTimes,
            }
          : {},
      ),
      {
        trialType,
      },
    ),
    unitCreditFreeTrialPieces !== undefined
      ? {
          unitCreditFreeTrialPieces,
        }
      : {},
    G
      ? {
          isUnitCreditFreeTrial: true,
          unitCreditFreeTrialTimes: V,
          isUnlimitedUnitCreditFreeTrial,
        }
      : {},
  );
}
function S(e, t) {
  try {
    let i;
    return (e == null || (i = e()) == null ? undefined : i.trim()) || t;
  } catch (e) {
    return t;
  }
}
function T(e, t) {
  if (u.has(e)) {
    const remainingCount = t.reduce((acc, item) => {
      if (
        item.payMode !== Q_.LimitFree ||
        ((i = item.limitStrategy) == null ? undefined : i.limitFreeType) !==
          Jd.LimitByCount ||
        item.limitStrategy.isCreditTrial === true
      ) {
        return acc;
      }
      var i;
      var r;
      var n = (r = item.limitStrategy) == null ? undefined : r.quotaLeft;
      if (typeof n === "number" && Number.isFinite(n) && n > 0) {
        return Math.max(acc, Math.floor(n));
      }
      return acc;
    }, 0);
    if (remainingCount > 0) {
      return {
        remainingCount,
        freeUnitsPerUse: 5,
      };
    }
    return undefined;
  }
}
function F(e) {
  const { limitStrategy } = e;
  return (
    e.payMode === Q_.LimitFree &&
    !!limitStrategy &&
    !limitStrategy.isCreditTrial &&
    [Jd.LimitByCount, Jd.Cycle].includes(limitStrategy.limitFreeType)
  );
}
function k(e) {
  let t;
  const { limitStrategy } = e;
  return (
    !(
      e.payMode !== Q_.LimitFree ||
      !limitStrategy ||
      limitStrategy.isCreditTrial ||
      limitStrategy.limitFreeType === Jd.AccumulatedCreditCycle ||
      limitStrategy.limitFreeType === Jd.UnitCredit ||
      limitStrategy.limitFreeType === Jd.UnitCreditByPiece ||
      F(e)
    ) &&
    (((t = limitStrategy.quotaLeft) != null ? t : 0) > 0 ||
      (limitStrategy.quotaAll === -1 && limitStrategy.quotaLeft === -1))
  );
}
function P(e) {
  return e.reduce((acc, item) => {
    var i;
    var r;
    if (F(item)) {
      return Math.max(
        acc,
        (i = (r = item.limitStrategy) == null ? undefined : r.quotaLeft) != null
          ? i
          : 0,
      );
    }
    return acc;
  }, 0);
}
function L(e, t, i, r) {
  const n = Math.round(t);
  if (r) {
    return e * n * i;
  }
  return Math.floor(e * n) * i;
}
function M(batchNumber) {
  if (
    typeof batchNumber === "number" &&
    Number.isFinite(batchNumber) &&
    batchNumber > 0
  ) {
    return batchNumber;
  }
}
function A(e) {
  return [...new Set(e)];
}
Object.defineProperty(exports, "jp", {
  enumerable: true,
  get: () => 5,
});
