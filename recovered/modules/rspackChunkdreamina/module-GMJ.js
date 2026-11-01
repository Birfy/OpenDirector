import r from "NY";
import n from "oa";
import s from "bk";
import { $c, Ex, I_, Jd, Q_, Rg, lT, vh } from "./module-MjU.js";
import { ny, zE } from "./module-nP.js";
function a(e, t) {
  if (!((i = e.consumption) == null ? undefined : i.teamId)) {
    return "allowed";
  }
  var i;
  const e_teamMembership = e.teamMembership;
  if (
    e_teamMembership &&
    e_teamMembership.teamId === e.consumption.teamId &&
    e_teamMembership.status !== "unknown" &&
    e_teamMembership.role !== "unknown"
  ) {
    if (e_teamMembership.seatLimitExceeded) {
      return "team_seat_limit";
    }
    if (e_teamMembership.status !== "active") {
      return "team_subscription_required";
    }
    if (e.localCredit < t) {
      return "team_credit_insufficient";
    }
    return "allowed";
  }
  return "status_unavailable";
}
const o = "9223372036854775807";
function l(e, t) {
  let i;
  let r;
  const userId =
    ((i = e.userId) == null ? undefined : i.trim()) ||
    ((r = e.uniqueId) == null ? undefined : r.trim());
  if (
    e.hasLogin &&
    userId &&
    t.status !== "unavailable" &&
    Number.isSafeInteger(t.revision) &&
    !(t.revision < 0) &&
    (t.status !== "team" ||
      (/^[1-9]\d*$/.test(t.teamId) &&
        !(t.teamId.length > o.length) &&
        (t.teamId.length !== o.length || !(t.teamId > o))))
  ) {
    return Object.freeze(
      n._(
        {
          userId,
          revision: t.revision,
        },
        t.status === "team"
          ? {
              teamId: t.teamId,
            }
          : {},
      ),
    );
  }
}
function u(e, t) {
  return (
    e !== undefined &&
    t !== undefined &&
    e.userId === t.userId &&
    e.teamId === t.teamId &&
    e.revision === t.revision
  );
}
function d(e) {
  return h({
    credits: 0,
    priceDisplayStatus: "available",
    isFree: true,
    freeReason: "vip_entitlement",
    requiredVipLevel: e.requiredVipLevel,
    policyVersion: e.policyVersion,
  });
}
function c(pricing) {
  let t;
  const e_creditDisplayInfo = pricing.creditDisplayInfo;
  if (Array.isArray(pricing.details) && pricing.details.length !== 0) {
    const r =
      p(pricing.credits) &&
      p(pricing.originalCredits) &&
      p(pricing.benefitAmount) &&
      p(e_creditDisplayInfo.actualCredits) &&
      p(e_creditDisplayInfo.originalCredits);
    const n = pricing.details.every(
      (t) =>
        [t.amount, t.creditsPerUnit, t.credits].every(p) &&
        t.amount === pricing.benefitAmount &&
        (t.originalCreditsPerUnit === undefined ||
          (p(t.originalCreditsPerUnit) &&
            t.originalCreditsPerUnit > t.creditsPerUnit)) &&
        (t.originalCredits === undefined ||
          (p(t.originalCredits) && t.originalCredits >= t.credits)),
    );
    const s = pricing.details.reduce((acc, detail) => acc + detail.credits, 0);
    const a = pricing.details.reduce((acc, detail) => {
      var i;
      return acc + ((i = detail.originalCredits) != null ? i : detail.credits);
    }, 0);
    const o =
      e_creditDisplayInfo.originalCredits > e_creditDisplayInfo.actualCredits;
    const l =
      e_creditDisplayInfo.giftRemainingCount === undefined ||
      (Number.isSafeInteger(e_creditDisplayInfo.giftRemainingCount) &&
        e_creditDisplayInfo.giftRemainingCount > 0);
    const u =
      e_creditDisplayInfo.showOriginalCredits === undefined ||
      typeof e_creditDisplayInfo.showOriginalCredits === "boolean";
    const d =
      e_creditDisplayInfo.partialFreeTrial === undefined ||
      (Number.isSafeInteger(
        e_creditDisplayInfo.partialFreeTrial.remainingCount,
      ) &&
        e_creditDisplayInfo.partialFreeTrial.remainingCount > 0 &&
        Number.isSafeInteger(
          e_creditDisplayInfo.partialFreeTrial.freeUnitsPerUse,
        ) &&
        e_creditDisplayInfo.partialFreeTrial.freeUnitsPerUse > 0 &&
        e_creditDisplayInfo.showOriginalCredits === true);
    if (
      r &&
      n &&
      Number.isFinite(s) &&
      Number.isFinite(a) &&
      pricing.originalCredits === s &&
      e_creditDisplayInfo.originalCredits === a &&
      !(pricing.credits > pricing.originalCredits) &&
      e_creditDisplayInfo.actualCredits === pricing.credits &&
      e_creditDisplayInfo.hasDiscount === o &&
      e_creditDisplayInfo.isFree === (pricing.credits === 0) &&
      l &&
      u &&
      d
    ) {
      return {
        credits: pricing.credits,
        originalCredits:
          o || e_creditDisplayInfo.showOriginalCredits === true
            ? e_creditDisplayInfo.originalCredits
            : undefined,
        discountLabel: o ? v(e_creditDisplayInfo.discountLabel) : undefined,
        freeTrialLabel: e_creditDisplayInfo.partialFreeTrial
          ? v(e_creditDisplayInfo.freeTrialLabel)
          : undefined,
        partialFreeTrial: e_creditDisplayInfo.partialFreeTrial,
        giftRemainingCount:
          Number.isSafeInteger(e_creditDisplayInfo.giftRemainingCount) &&
          ((t = e_creditDisplayInfo.giftRemainingCount) != null ? t : 0) > 0
            ? e_creditDisplayInfo.giftRemainingCount
            : undefined,
        showOriginalCredits:
          e_creditDisplayInfo.showOriginalCredits === true || undefined,
      };
    }
  }
}
function p(e) {
  return typeof e === "number" && Number.isFinite(e) && e >= 0;
}
function v(e) {
  if (typeof e === "string" && e.trim()) {
    return e.trim();
  }
}
function h(e) {
  return Object.fromEntries(
    Object.entries(e).filter((e) => {
      var [, t] = e;
      return t !== undefined;
    }),
  );
}
const m = new Set([
  "prompt",
  "url",
  "uri",
  "vid",
  "token",
  "cookie",
  "header",
  "request",
  "response",
  "payment",
  "authorization",
  "credential",
  "signature",
  "signed",
  "payload",
  "body",
  "text",
  "message",
  "content",
  "conversation",
]);
const f = new Set(["body", "content", "signed", "text", "vid"]);
const g = [...m].filter((e) => !f.has(e));
const y = /(?:[a-z][a-z\d+.-]*:\/\/|blob:|data:|\/\/|www\.)/i;
const b = [
  "benefitAmount",
  "outputCount",
  "durationSeconds",
  "referenceCount",
  "discount",
];
function _(e, t) {
  if (!/^\d+$/.test(e)) {
    return false;
  }
  const i = Number(e);
  return Number.isSafeInteger(i) && i >= 0 && i < t && String(i) === e;
}
function C(e, t) {
  switch (typeof e) {
    case "string":
      return y.test(e);
    case "number":
      return !Number.isFinite(e);
    case "boolean":
      return false;
    case "object":
      break;
    default:
      return true;
  }
  if (e === null) {
    return false;
  }
  if (t.has(e)) {
    return true;
  }
  t.add(e);
  if (Array.isArray(e)) {
    if (
      Reflect.ownKeys(e).some(
        (t) => typeof t !== "string" || (t !== "length" && !_(t, e.length)),
      )
    ) {
      return true;
    }
    for (let i = 0; i < e.length; i += 1) {
      const r = Object.getOwnPropertyDescriptor(e, String(i));
      if (
        !(r == null ? undefined : r.enumerable) ||
        !("value" in r) ||
        C(r.value, t)
      ) {
        return true;
      }
    }
    return false;
  }
  const n = Object.getPrototypeOf(e);
  return (
    (n !== Object.prototype && n !== null) ||
    Reflect.ownKeys(e).some((i) => {
      if (typeof i !== "string") {
        return true;
      }
      var r = Object.getOwnPropertyDescriptor(e, i);
      return (
        !(r == null ? undefined : r.enumerable) ||
        !("value" in r) ||
        ((e) => {
          const t = e
            .replace(/([a-z\d])([A-Z])/g, "$1 $2")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
            .toLowerCase()
            .split(/[^a-z\d]+/)
            .filter(Boolean);
          if (t.some((e) => m.has(e))) {
            return true;
          }
          const i = t.join("");
          return (
            !!(i.startsWith("videoid") || i.endsWith("videoid")) ||
            g.some((e) => i.startsWith(e) || i.endsWith(e))
          );
        })(i) ||
        C(r.value, t)
      );
    })
  );
}
const S = Symbol("materialize-failed");
function T(e) {
  return b.some((t) => {
    var i = e[t];
    return (
      i !== undefined &&
      (!(typeof i === "number" && Number.isFinite(i)) ||
        i < 0 ||
        (t === "outputCount" && (!Number.isInteger(i) || i === 0)))
    );
  });
}
function F(e) {
  const t = Reflect.get(e, "extraBenefits");
  return (
    t !== undefined &&
    (!Array.isArray(t) || t.some((e) => typeof e !== "string"))
  );
}
function k(options) {
  try {
    const t = (function e(t, i) {
      if (t === null || typeof t === "string" || typeof t === "boolean") {
        return t;
      }
      if (typeof t === "number") {
        if (Number.isFinite(t)) {
          return t;
        }
        return S;
      }
      if (typeof t !== "object" || i.has(t)) {
        return S;
      }
      const r = Object.getPrototypeOf(t);
      if (!Array.isArray(t) && r !== Object.prototype && r !== null) {
        return S;
      }
      i.add(t);
      if (Array.isArray(t)) {
        if (
          Reflect.ownKeys(t).some(
            (e) => typeof e !== "string" || (e !== "length" && !_(e, t.length)),
          )
        ) {
          i.delete(t);
          return S;
        }
        const n = [];
        for (let s = 0; s < t.length; s += 1) {
          const a = Object.getOwnPropertyDescriptor(t, String(s));
          if (!(a == null ? undefined : a.enumerable) || !("value" in a)) {
            i.delete(t);
            return S;
          }
          const o = e(a.value, i);
          if (o === S) {
            i.delete(t);
            return S;
          }
          n.push(o);
        }
        i.delete(t);
        return Object.freeze(n);
      }
      const l = {};
      for (const u of Reflect.ownKeys(t)) {
        if (typeof u !== "string") {
          i.delete(t);
          return S;
        }
        const d = Object.getOwnPropertyDescriptor(t, u);
        if (!(d == null ? undefined : d.enumerable) || !("value" in d)) {
          i.delete(t);
          return S;
        }
        const c = e(d.value, i);
        if (c === S) {
          i.delete(t);
          return S;
        }
        Object.defineProperty(l, u, {
          configurable: false,
          enumerable: true,
          value: c,
          writable: false,
        });
      }
      i.delete(t);
      return Object.freeze(l);
    })(options, new WeakSet());
    if (
      t === S ||
      !t ||
      typeof t !== "object" ||
      Array.isArray(t) ||
      T(t) ||
      F(t) ||
      C(t, new WeakSet())
    ) {
      return;
    }
    return t;
  } catch (e) {
    return;
  }
}
function P(e) {
  let t;
  let i;
  let r;
  return {
    benefitAmount:
      (t = (i = e.benefitAmount) != null ? i : e.durationSeconds) != null
        ? t
        : 1,
    batchNumber: (r = e.outputCount) != null ? r : 1,
  };
}
function L(action) {
  try {
    let t;
    if (
      !(
        !(t = action) ||
        typeof t.scene !== "string" ||
        t.scene.length === 0 ||
        typeof t.source !== "string" ||
        t.source.length === 0 ||
        !t.options ||
        typeof t.options !== "object" ||
        Array.isArray(t.options)
      )
    ) {
      if (T(t.options) || F(t.options)) {
        return {
          ok: false,
          reason: "invalid_option",
        };
      }
      if (C(t.options, new WeakSet())) {
        return {
          ok: false,
          reason: "forbidden_option",
        };
      }
      return {
        ok: true,
      };
    }
    return {
      ok: false,
      reason: "invalid_action",
    };
  } catch (e) {
    return {
      ok: false,
      reason: "forbidden_option",
    };
  }
}
function M(e, adapter) {
  const i = {
    scene: e.scene,
    sceneOptions: e.options,
  };
  const benefit = adapter.computeStrategyBenefit(i);
  const config = adapter.getPluginConfig(i);
  if (
    benefit &&
    config &&
    O(benefit.strategyId) &&
    O(benefit.benefitKey) &&
    O(config.strategyId) &&
    O(config.resourceType) &&
    benefit.strategyId === config.strategyId
  ) {
    return {
      adapter,
      benefit,
      config,
    };
  }
}
function A(e) {
  const getRightTrackingData = e.adapter.getRightTrackingData;
  return n._(
    s._(
      n._(
        {
          isReady: e.adapter.isReady,
        },
        e.adapter.isInFreemiumStage === undefined
          ? {}
          : {
              isInFreemiumStage: e.adapter.isInFreemiumStage,
            },
        e.adapter.creditDisplayFormatting === undefined
          ? {}
          : {
              creditDisplayFormatting: e.adapter.creditDisplayFormatting,
            },
      ),
      {
        computeStrategyBenefit: () => e.benefit,
        getPluginConfig: () => e.config,
        getBenefitStrategy: (t) =>
          e.adapter.getBenefitStrategy.call(e.adapter, t),
      },
    ),
    getRightTrackingData
      ? {
          getRightTrackingData: (i) => getRightTrackingData.call(e.adapter, i),
        }
      : {},
  );
}
function O(e) {
  return typeof e === "string" && e.trim().length > 0;
}
function R(e) {
  let t;
  let i;
  let r;
  let a;
  const { action, snapshot, policy, disposed = false } = e;
  if (disposed) {
    return D("disposed");
  }
  if (!L(action).ok) {
    return D("unsupported");
  }
  const p = k(action.options);
  if (!p) {
    return D("unsupported");
  }
  if (snapshot.status !== "anonymous" && !snapshot.data) {
    if (snapshot.status === "error") {
      return D("status_unavailable");
    }
    return {
      status: "checking",
    };
  }
  if (!policy) {
    return D("policy_unavailable");
  }
  if (!policy.adapter || !policy.adapter.isReady) {
    if (policy.status === "error") {
      return D("policy_unavailable");
    }
    return {
      status: "checking",
    };
  }
  if (
    ((t = snapshot.data) == null ? undefined : t.consumption) &&
    !u(snapshot.data.consumption, policy.consumption)
  ) {
    return D("policy_unavailable");
  }
  const v = M(
    s._(n._({}, action), {
      options: p,
    }),
    policy.adapter,
  );
  if (!v) {
    return D("unsupported");
  }
  const h = A(v);
  const { benefitAmount, batchNumber } = P(p);
  const g = {
    scene: action.scene,
    sceneOptions: p,
    extraBenefits: p.extraBenefits,
    strategy: h,
  };
  const y = I_(g);
  const b = $c(g);
  const _ = v.config.requiresVip === true;
  const requirement =
    b || _
      ? {
          kind: "vip",
          requiredVipLevel: y || zE.Standard,
        }
      : {
          kind: "none",
        };
  const S = vh(
    s._(n._({}, g), {
      benefitAmount,
      batchNumber,
    }),
  );
  if (
    (r = snapshot.data) == null || (i = r.consumption) == null
      ? undefined
      : i.teamId
  ) {
    const T = snapshot.data.teamMembership;
    if (
      T &&
      T.teamId === snapshot.data.consumption.teamId &&
      T.status !== "unknown" &&
      T.role !== "unknown"
    ) {
      return {
        status: "ready",
        requirement: {
          kind: "team",
        },
        access:
          T.status !== "active" || T.seatLimitExceeded
            ? "upgrade_required"
            : "available",
      };
    }
    return D("status_unavailable");
  }
  if (_) {
    if (snapshot.status === "anonymous") {
      return {
        status: "ready",
        requirement,
        access: "login_required",
      };
    }
    if (!((a = snapshot.data) == null ? undefined : a.vipReady)) {
      return D("status_unavailable");
    }
    if (!snapshot.data.isVip) {
      return {
        status: "ready",
        requirement,
        access: "upgrade_required",
      };
    }
  }
  if (snapshot.status !== "anonymous" && S.isCreditTrial) {
    const trialTimes = S.creditTrialAvailableTimes;
    if (trialTimes === undefined || w(trialTimes)) {
      return n._(
        {
          status: "ready",
          requirement,
          access: "trial_available",
          trialKind: "credit",
        },
        trialTimes === undefined
          ? {}
          : {
              trialTimes,
            },
      );
    }
    return D("policy_unavailable");
  }
  if (!b) {
    return {
      status: "ready",
      requirement,
      access: "available",
    };
  }
  if (snapshot.status === "anonymous") {
    return {
      status: "ready",
      requirement,
      access: "login_required",
    };
  }
  const snapshot_data = snapshot.data;
  if (snapshot_data) {
    if (snapshot_data.isInFreemiumStage || h.isInFreemiumStage) {
      return {
        status: "ready",
        requirement,
        access: "available",
      };
    }
    if (S.isStrategyFreeTrial) {
      if (S.isUnlimitedUnitCreditFreeTrial) {
        return {
          status: "ready",
          requirement,
          access: "trial_available",
          trialUnlimited: true,
        };
      }
      if (w(S.strategyFreeTrialTimes)) {
        return {
          status: "ready",
          requirement,
          access: "trial_available",
          trialTimes: S.strategyFreeTrialTimes,
        };
      }
      return D("policy_unavailable");
    }
    return {
      status: "ready",
      requirement,
      access:
        snapshot_data.isVip && ny(snapshot_data.vipLevel) >= ny(y)
          ? "available"
          : "upgrade_required",
    };
  }
  return D("status_unavailable");
}
function w(e) {
  return Number.isSafeInteger(e) && e > 0;
}
function D(e) {
  return {
    status: "unavailable",
    reason: e,
  };
}
function U(snapshot_data, t, i) {
  const r = a(snapshot_data, t.credits);
  if (r === "status_unavailable") {
    return B(G(r));
  }
  if (r !== "allowed") {
    return B({
      status: "blocked",
      activation: "guide",
      reason: r,
      intent: "team",
      quote: t,
    });
  }
  return V(t, i);
}
function E(e) {
  if (
    e.payMode !== Q_.LimitFree ||
    ((t = e.limitStrategy) == null ? undefined : t.limitFreeType) !==
      Jd.LimitByTime
  ) {
    return false;
  }
  var t;
  const { quotaAll, quotaLeft } = e.limitStrategy;
  if (quotaAll === -1 || quotaLeft === -1) {
    return quotaAll === -1 && quotaLeft === -1;
  }
  return (
    typeof quotaAll === "number" &&
    typeof quotaLeft === "number" &&
    Number.isSafeInteger(quotaAll) &&
    Number.isSafeInteger(quotaLeft) &&
    quotaAll > 0 &&
    quotaLeft > 0 &&
    quotaLeft <= quotaAll
  );
}
function N(e) {
  if (typeof e === "string" && e.trim()) {
    return e.trim();
  }
}
function x(e) {
  const { limitStrategy } = e;
  return (
    e.payMode === Q_.LimitFree &&
    (limitStrategy == null ? undefined : limitStrategy.limitFreeType) ===
      Jd.LimitByCount &&
    limitStrategy.isGift === true
  );
}
function V(e, t) {
  let i;
  let r;
  let n;
  let s;
  let a;
  let o;
  let l;
  let u;
  let d;
  let c;
  let h;
  let m;
  let f;
  let g;
  let y;
  i =
    e.priceDisplayStatus === "available" ||
    e.priceDisplayStatus === "unavailable";
  r =
    e.originalCredits === undefined ||
    (p(e.originalCredits) &&
      (e.originalCredits > e.credits ||
        (e.showOriginalCredits === true && e.originalCredits === e.credits)));
  n = e.isFree === (e.credits === 0);
  s =
    (e.freeReason === undefined ||
      e.freeReason === "freemium" ||
      e.freeReason === "strategy_trial" ||
      e.freeReason === "vip_entitlement") &&
    (e.freeReason === undefined || e.credits === 0);
  a =
    e.discountLabel === undefined ||
    (!!v(e.discountLabel) && e.originalCredits !== undefined);
  o =
    e.freeTrialLabel === undefined ||
    (!!v(e.freeTrialLabel) && e.partialFreeTrial !== undefined);
  l =
    e.partialFreeTrial === undefined ||
    (Number.isSafeInteger(e.partialFreeTrial.remainingCount) &&
      e.partialFreeTrial.remainingCount > 0 &&
      Number.isSafeInteger(e.partialFreeTrial.freeUnitsPerUse) &&
      e.partialFreeTrial.freeUnitsPerUse > 0 &&
      e.showOriginalCredits === true &&
      e.originalCredits !== undefined);
  u =
    e.giftRemainingCount === undefined ||
    (Number.isSafeInteger(e.giftRemainingCount) &&
      e.giftRemainingCount > 0 &&
      e.showOriginalCredits === true &&
      e.originalCredits !== undefined);
  d =
    e.showOriginalCredits === undefined ||
    (typeof e.showOriginalCredits === "boolean" &&
      (!e.showOriginalCredits || e.originalCredits !== undefined));
  c = e.freeReason === "strategy_trial";
  h = e.trialTimes === undefined && e.trialUnlimited === undefined;
  if (c) {
    h =
      e.trialUnlimited === true
        ? e.trialTimes === undefined
        : e.trialUnlimited === undefined &&
          Number.isInteger(e.trialTimes) &&
          Number(e.trialTimes) > 0;
  }
  m =
    e.freeReason !== "freemium" ||
    (e.originalCredits === undefined &&
      e.discountLabel === undefined &&
      e.freeTrialLabel === undefined &&
      e.partialFreeTrial === undefined &&
      e.giftRemainingCount === undefined &&
      e.showOriginalCredits === undefined);
  f =
    e.priceDisplayStatus !== "unavailable" ||
    (c &&
      e.originalCredits === undefined &&
      e.discountLabel === undefined &&
      e.freeTrialLabel === undefined &&
      e.partialFreeTrial === undefined);
  g =
    !c ||
    e.priceDisplayStatus === "unavailable" ||
    (e.priceDisplayStatus === "available" &&
      e.originalCredits !== undefined &&
      e.originalCredits > 0);
  y =
    e.policyVersion === undefined ||
    (typeof e.policyVersion === "string" && e.policyVersion.trim().length > 0);
  if (
    p(e.credits) &&
    i &&
    r &&
    n &&
    s &&
    a &&
    o &&
    l &&
    u &&
    d &&
    h &&
    m &&
    f &&
    g &&
    y
  ) {
    return {
      state: {
        status: "allowed",
        activation: "execute",
        quote: e,
      },
      executionContext: {
        quote: e,
        selection: {
          resourceType: t.config.resourceType,
          resourceId: t.benefit.strategyId,
          benefitType: t.benefit.benefitKey,
        },
      },
    };
  }
  return B(G("policy_unavailable"));
}
function B(state) {
  return {
    state,
  };
}
function G(e, t) {
  return n._(
    {
      status: "unavailable",
      activation: "disabled",
      reason: e,
    },
    t
      ? {
          error: t,
        }
      : {},
  );
}
const j = Symbol("commerce-action-guide-aborted");
class z {
  executeWithConsumption(e, t, i) {
    return r
      ._(function* () {
        let r;
        let a;
        const o = l(this.dependencies.account.getSnapshot(), i.getSnapshot());
        if (!o) {
          return {
            status: "unavailable",
            state: Q("status_unavailable"),
          };
        }
        const d = new AbortController();
        this.guideAbortControllers.add(d);
        const c = () => {
          if (
            !u(o, l(this.dependencies.account.getSnapshot(), i.getSnapshot()))
          ) {
            d.abort();
          }
        };
        try {
          r = this.dependencies.account.subscribe(c);
          a = i.subscribe(c);
          c();
          return yield this.executeCaptured(
            e,
            (e) => {
              c();
              if (d.signal.aborted) {
                throw Error("Commerce consumption context changed");
              }
              return t(
                s._(n._({}, e), {
                  consumption: o,
                  signal: d.signal,
                }),
              );
            },
            d.signal,
          );
        } finally {
          if (r != null) {
            r();
          }
          if (a != null) {
            a();
          }
          this.guideAbortControllers.delete(d);
        }
      })
      .call(this);
  }
  executeCaptured(e, t, i) {
    return r
      ._(function* () {
        if (this.isDisposed()) {
          return {
            status: "cancelled",
            reason: "disposed",
          };
        }
        try {
          r = yield this.resolveDecision(e);
        } catch (error) {
          if (this.isDisposed()) {
            return {
              status: "cancelled",
              reason: "disposed",
            };
          }
          return {
            status: "error",
            phase: "commerce",
            error,
          };
        }
        if (this.isDisposed()) {
          return {
            status: "cancelled",
            reason: "disposed",
          };
        }
        if (i == null ? undefined : i.aborted) {
          return {
            status: "cancelled",
            reason: "aborted",
          };
        }
        var r;
        const r_state = r.state;
        if (r_state.status === "allowed") {
          if (!r.executionContext) {
            return {
              status: "unavailable",
              state: Q("policy_unavailable"),
            };
          }
          try {
            const a = yield t(
              n._(
                {},
                r.executionContext,
                i
                  ? {
                      signal: i,
                    }
                  : {},
              ),
            );
            return {
              status: "executed",
              value: a,
              quote: r_state.quote,
            };
          } catch (error) {
            return {
              status: "error",
              phase: "operation",
              error,
            };
          }
        }
        if (r_state.status === "unavailable") {
          return {
            status: "unavailable",
            state: r_state,
          };
        }
        if (r_state.status === "checking") {
          return {
            status: "unavailable",
            state: K(r_state),
          };
        }
        const o = yield this.openGuide(e);
        if (o.invoked && !this.isDisposed()) {
          yield this.bestEffortRefreshAfterGuide();
        }
        if (this.isDisposed()) {
          return {
            status: "cancelled",
            reason: "disposed",
          };
        }
        switch (o.result.status) {
          case "cancelled":
          case "unavailable":
            return o.result;
          case "error":
            return {
              status: "error",
              phase: "commerce",
              error: o.result.error,
            };
          case "guided":
          case "not_blocked":
            return {
              status: "blocked",
              state: r_state,
            };
        }
      })
      .call(this);
  }
  resolveState(e) {
    return r
      ._(function* () {
        return (yield this.resolveDecision(e)).state;
      })
      .call(this);
  }
  resolveDecision(e) {
    return r
      ._(function* () {
        const t = this.readDecision(e);
        if (t.state.status !== "checking") {
          return t;
        }
        yield this.dependencies.ensureReady();
        if (this.isDisposed()) {
          return {
            state: Q("disposed"),
          };
        }
        return this.readDecision(e);
      })
      .call(this);
  }
  readDecision(e) {
    if (this.isDisposed()) {
      return {
        state: Q("disposed"),
      };
    }
    try {
      var t;
      const i = this.readConsumptionError();
      if (i) {
        return {
          state: Q(i),
        };
      }
      return ((e) => {
        let t;
        let i;
        let r;
        let originalCredits;
        let o;
        const { action, snapshot, policy, disposed = false } = e;
        if (disposed) {
          return B(G("disposed"));
        }
        if (!L(action).ok) {
          return B(G("unsupported"));
        }
        const f = k(action.options);
        if (!f) {
          return B(G("unsupported"));
        }
        if (snapshot.status === "anonymous") {
          return B({
            status: "blocked",
            activation: "guide",
            reason: "anonymous",
            intent: "login",
          });
        }
        if (!snapshot.data) {
          if (snapshot.status === "error") {
            return B(G("status_unavailable", snapshot.error));
          }
          return B({
            status: "checking",
            activation: "disabled",
            reason: "status_loading",
          });
        }
        if (!policy) {
          return B(G("policy_unavailable"));
        }
        if (!policy.adapter || !policy.adapter.isReady) {
          if (policy.status === "error") {
            return B(G("policy_unavailable", policy.error));
          }
          return B({
            status: "checking",
            activation: "disabled",
            reason: "policy_loading",
          });
        }
        const g = M(
          s._(n._({}, action), {
            options: f,
          }),
          policy.adapter,
        );
        if (!g) {
          return B(G("unsupported"));
        }
        const y = A(g);
        const snapshot_data = snapshot.data;
        if (
          snapshot_data.consumption &&
          !u(snapshot_data.consumption, policy.consumption)
        ) {
          return B(G("policy_unavailable"));
        }
        const _ =
          g.config.requiresVip === true &&
          !((T = snapshot_data.consumption) == null ? undefined : T.teamId);
        if (_ && !snapshot_data.vipReady) {
          return B(G("status_unavailable"));
        }
        const C = _ && !snapshot_data.isVip;
        if (f.entitlementOnly === true) {
          var S;
          var T;
          var F;
          var O;
          let w;
          const D = R({
            action,
            snapshot,
            policy,
          });
          if (D.status === "unavailable") {
            return B(G(D.reason));
          }
          if (D.status === "checking") {
            return B({
              status: "checking",
              activation: "disabled",
              reason: "policy_loading",
            });
          }
          const j = d({
            requiredVipLevel:
              D.requirement.kind === "vip"
                ? D.requirement.requiredVipLevel
                : zE.None,
            policyVersion: policy.version,
          });
          if (D.access === "upgrade_required") {
            if (D.requirement.kind === "team") {
              return B({
                status: "blocked",
                activation: "guide",
                quote: j,
                reason: (
                  (w = snapshot_data.teamMembership) == null
                    ? undefined
                    : w.seatLimitExceeded
                )
                  ? "team_seat_limit"
                  : "team_subscription_required",
                intent: "team",
              });
            }
            return B({
              status: "blocked",
              activation: "guide",
              quote: j,
              reason: "vip_required",
              intent: "vip",
            });
          }
          if (D.access === "login_required") {
            return B({
              status: "blocked",
              activation: "guide",
              reason: "anonymous",
              intent: "login",
            });
          }
          return V(j, g);
        }
        const b_localCredit = snapshot_data.localCredit;
        if (!Number.isFinite(b_localCredit) || b_localCredit < 0) {
          return B(G("status_unavailable"));
        }
        if (!C && (snapshot_data.isInFreemiumStage || y.isInFreemiumStage)) {
          return U(
            snapshot_data,
            h({
              credits: 0,
              priceDisplayStatus: "available",
              isFree: true,
              freeReason: "freemium",
              policyVersion: policy.version,
            }),
            g,
          );
        }
        const extraBenefits = (S = f.extraBenefits) != null ? S : [];
        const { benefitAmount, batchNumber } = P(f);
        const $ = {
          scene: action.scene,
          sceneOptions: f,
          extraBenefits,
          strategy: y,
        };
        const H = vh(
          s._(n._({}, $), {
            benefitAmount,
            batchNumber,
          }),
        );
        const y_creditDisplayFormatting = y.creditDisplayFormatting;
        const pricing = ((e) => {
          try {
            const t = lT(e);
            return ((e, t) => {
              if (t.creditDisplayInfo.partialFreeTrial) {
                return t;
              }
              let i;
              let r;
              let a;
              let o;
              let isOversea;
              const u = new Set(
                t.details.map((e) => {
                  var { benefit } = e;
                  return benefit;
                }),
              );
              if (u.size === 0) {
                return t;
              }
              const resourceType = Rg(e);
              const resourceId = Ex(e);
              const p = Array.from(u).flatMap((t) => {
                var i;
                var r;
                return (
                  (i =
                    (r = e.strategy.getBenefitStrategy({
                      resourceType,
                      resourceId,
                      benefitType: t,
                    })) == null
                      ? undefined
                      : r.strategies) != null
                    ? i
                    : []
                ).filter(x);
              });
              if (p.length === 0) {
                return t;
              }
              const creditDisplayInfo = s._(n._({}, t.creditDisplayInfo), {
                showOriginalCredits: true,
              });
              const h = Math.max(
                0,
                ...p.map((e) => {
                  var t;
                  var { limitStrategy } = e;
                  if (
                    (t =
                      limitStrategy == null
                        ? undefined
                        : limitStrategy.quotaLeft) != null
                  ) {
                    return t;
                  }
                  return 0;
                }),
              );
              if (h <= 0) {
                return s._(n._({}, t), {
                  creditDisplayInfo,
                });
              }
              const m = creditDisplayInfo.isFree
                ? undefined
                : lT(
                    s._(n._({}, e), {
                      strategy: s._(n._({}, e.strategy), {
                        getBenefitStrategy: (t) => {
                          var i;
                          var r = e.strategy.getBenefitStrategy(t);
                          if (r && u.has(t.benefitType)) {
                            return s._(n._({}, r), {
                              strategies:
                                (i = r.strategies) == null
                                  ? undefined
                                  : i.filter((e) => !x(e)),
                            });
                          }
                          return r;
                        },
                      }),
                    }),
                  ).creditDisplayInfo;
              const f = ((e, t, i) => {
                if (
                  (i == null ? undefined : i.discountLabel) &&
                  !(i.originalCredits <= i.actualCredits)
                ) {
                  let r;
                  let n;
                  const s = !!e.isOversea;
                  const discountLabel = ((e, t) => {
                    if (t == null ? undefined : t.isOversea) {
                      return `${100 - Math.round(100 * e)}`;
                    }
                    const i = Math.ceil(100 * e) / 10;
                    if (Number.isInteger(i)) {
                      return i.toFixed(0);
                    }
                    return i.toFixed(1);
                  })(i.actualCredits / i.originalCredits, {
                    isOversea: s,
                  });
                  if (
                    (r = N(
                      (n = e.formatGiftDiscountLabel) == null
                        ? undefined
                        : n.call(e, {
                            actualCredits: i.actualCredits,
                            originalCredits: i.originalCredits,
                            discountLabel,
                            giftRemainingCount: t,
                            isOversea: s,
                          }),
                    )) != null
                  ) {
                    return r;
                  }
                  if (s) {
                    return "Limited-time gift remaining "
                      .concat(t, ", credits ")
                      .concat(discountLabel, "% off");
                  }
                  return "限时赠送剩余"
                    .concat(t, "条，积分消耗")
                    .concat(discountLabel, "折起");
                }
              })(e, h, m);
              i = e;
              r = h;
              isOversea = !!i.isOversea;
              const g =
                (a = N(
                  (o = i.formatGiftRemainingLabel) == null
                    ? undefined
                    : o.call(i, {
                        giftRemainingCount: r,
                        isOversea,
                      }),
                )) != null
                  ? a
                  : isOversea
                    ? "Limited-time gift remaining: ".concat(r)
                    : "限时赠送剩余：".concat(r, "条");
              return s._(n._({}, t), {
                creditDisplayInfo: s._(n._({}, creditDisplayInfo), {
                  giftRemainingCount: h,
                  discountLabel: f != null ? f : g,
                }),
              });
            })(e, t);
          } catch (e) {
            return;
          }
        })(
          n._(
            s._(n._({}, $), {
              benefitAmount,
              batchNumber,
              discount: f.discount,
            }),
            y_creditDisplayFormatting != null ? y_creditDisplayFormatting : {},
          ),
        );
        if (
          !C &&
          H.isStrategyFreeTrial &&
          (pricing == null ? undefined : pricing.credits) === 0
        ) {
          return U(
            snapshot_data,
            ((o =
              (originalCredits =
                ((r = (t = s._(
                  n._(
                    {
                      pricing,
                      includeDiscountLabel: !!y_creditDisplayFormatting,
                    },
                    H.isUnlimitedUnitCreditFreeTrial
                      ? {
                          trialUnlimited: true,
                        }
                      : {
                          trialTimes: H.strategyFreeTrialTimes,
                        },
                  ),
                  {
                    policyVersion: policy.version,
                  },
                )).pricing
                  ? c(t.pricing)
                  : undefined) == null
                  ? undefined
                  : r.credits) === 0 &&
                r.originalCredits !== undefined &&
                r.originalCredits > 0
                  ? r.originalCredits
                  : undefined) !== undefined),
            h({
              credits: 0,
              originalCredits,
              discountLabel:
                o && t.includeDiscountLabel
                  ? (i = r == null ? undefined : r.freeTrialLabel) != null
                    ? i
                    : r == null
                      ? undefined
                      : r.discountLabel
                  : undefined,
              freeTrialLabel:
                o && t.includeDiscountLabel
                  ? r == null
                    ? undefined
                    : r.freeTrialLabel
                  : undefined,
              partialFreeTrial: o
                ? r == null
                  ? undefined
                  : r.partialFreeTrial
                : undefined,
              giftRemainingCount: o
                ? r == null
                  ? undefined
                  : r.giftRemainingCount
                : undefined,
              showOriginalCredits: o
                ? r == null
                  ? undefined
                  : r.showOriginalCredits
                : undefined,
              priceDisplayStatus: o ? "available" : "unavailable",
              isFree: true,
              freeReason: "strategy_trial",
              trialTimes: t.trialTimes,
              trialUnlimited: t.trialUnlimited,
              policyVersion: t.policyVersion,
            })),
            g,
          );
        }
        if (!pricing) {
          return B(G("policy_unavailable"));
        }
        const requiredVipLevel = I_($) || (_ ? zE.Standard : zE.None);
        const X = $c($);
        const requiredBenefits =
          pricing.details.length === 0
            ? ((e, t) => {
                let i;
                const r = [
                  e.benefit.benefitKey,
                  ...((i = e.benefit.extraBenefitKeys) != null ? i : []),
                  ...t,
                ].filter((e, t, i) => i.indexOf(e) === t);
                if (r.length !== 0) {
                  const n = r.map((t) => {
                    var i;
                    var r;
                    return {
                      benefitType: t,
                      strategies:
                        (i =
                          (r = e.adapter.getBenefitStrategy({
                            resourceType: e.config.resourceType,
                            resourceId: e.benefit.strategyId,
                            benefitType: t,
                          })) == null
                            ? undefined
                            : r.strategies) != null
                          ? i
                          : [],
                    };
                  });
                  if (
                    n.every((e) => {
                      var { strategies } = e;
                      return strategies.length > 0;
                    })
                  ) {
                    return n;
                  }
                  return undefined;
                }
              })(g, extraBenefits)
            : undefined;
        const et =
          pricing.details.length === 0
            ? ((e) => {
                if (e.requiredBenefits) {
                  if (
                    e.requiredBenefits.every((e) => {
                      var { strategies } = e;
                      return (
                        strategies.every((e) => e.payMode === Q_.LimitFree) &&
                        strategies.some(E)
                      );
                    })
                  ) {
                    return h({
                      credits: 0,
                      priceDisplayStatus: "available",
                      isFree: true,
                      policyVersion: e.policyVersion,
                    });
                  }
                  if (
                    e.requiredBenefits.every((e) => {
                      var { strategies } = e;
                      return !!(
                        strategies.some((e) => {
                          var t;
                          return (
                            e.payMode === Q_.Subscribe &&
                            typeof ((t = e.subscribeStrategy) == null
                              ? undefined
                              : t.role) === "string" &&
                            e.subscribeStrategy.role.trim().length > 0
                          );
                        }) &&
                        strategies.every(
                          (e) =>
                            e.payMode === Q_.Subscribe ||
                            e.payMode === Q_.LimitFree,
                        )
                      );
                    })
                  ) {
                    return d({
                      requiredVipLevel: e.requiredVipLevel,
                      policyVersion: e.policyVersion,
                    });
                  }
                  return undefined;
                }
              })({
                requiredBenefits,
                requiredVipLevel,
                policyVersion: policy.version,
              })
            : ((e) => {
                let t;
                const i = c(e.pricing);
                if (i) {
                  const isFree = i.credits === 0;
                  return h({
                    credits: i.credits,
                    originalCredits: i.originalCredits,
                    discountLabel: e.includeDiscountLabel
                      ? (t = i.freeTrialLabel) != null
                        ? t
                        : i.discountLabel
                      : undefined,
                    freeTrialLabel: e.includeDiscountLabel
                      ? i.freeTrialLabel
                      : undefined,
                    partialFreeTrial: i.partialFreeTrial,
                    giftRemainingCount: i.giftRemainingCount,
                    showOriginalCredits: i.showOriginalCredits,
                    priceDisplayStatus: "available",
                    isFree,
                    freeReason:
                      isFree && e.needsVip ? "vip_entitlement" : undefined,
                    requiredVipLevel: e.needsVip
                      ? e.requiredVipLevel
                      : undefined,
                    policyVersion: e.policyVersion,
                  });
                }
              })({
                pricing,
                includeDiscountLabel: !!y_creditDisplayFormatting,
                needsVip: _ || (X && !H.isCreditTrial),
                requiredVipLevel,
                policyVersion: policy.version,
              });
        if (et) {
          if (
            !((F = snapshot_data.consumption) == null ? undefined : F.teamId) &&
            (C ||
              (X &&
                !H.isCreditTrial &&
                (!snapshot_data.isVip ||
                  ny(snapshot_data.vipLevel) < ny(requiredVipLevel))))
          ) {
            return B({
              status: "blocked",
              activation: "guide",
              reason: "vip_required",
              intent: "vip",
              quote: et,
            });
          }
          if (
            ((O = snapshot_data.consumption) == null ? undefined : O.teamId) ||
            !(b_localCredit < et.credits)
          ) {
            return U(snapshot_data, et, g);
          }
          return B({
            status: "blocked",
            activation: "guide",
            reason: "credit_insufficient",
            intent: "credit_recharge",
            quote: et,
          });
        }
        return B(G("policy_unavailable"));
      })({
        action: e,
        snapshot: this.dependencies.getSnapshot(),
        policy: this.dependencies.getPolicySnapshot(),
      });
    } catch (error) {
      return {
        state: Q("policy_unavailable", {
          code: "operation_failed",
          message:
            (t = error) instanceof Error
              ? t.message
              : "Commerce action evaluation failed",
          retryable: false,
          cause: t,
        }),
      };
    }
  }
  readConsumptionError() {
    if (this.dependencies.consumption) {
      const e = l(
        this.dependencies.account.getSnapshot(),
        this.dependencies.consumption.getSnapshot(),
      );
      const t = this.dependencies.getSnapshot();
      const i = this.dependencies.getPolicySnapshot();
      if (t.status === "ready" && !u(e, t.data.consumption)) {
        return "status_unavailable";
      }
      if (
        (i == null ? undefined : i.status) === "ready" &&
        !u(e, i.consumption)
      ) {
        return "policy_unavailable";
      }
      if (!e && t.status !== "anonymous") {
        return "status_unavailable";
      }
    }
  }
  resolveEntitlement(e) {
    return r
      ._(function* () {
        const t = this.readEntitlement(e);
        if (t.status !== "checking") {
          return t;
        }
        yield this.dependencies.ensureReady();
        if (this.isDisposed()) {
          return W("disposed");
        }
        return this.readEntitlement(e);
      })
      .call(this);
  }
  readEntitlement(e) {
    if (this.isDisposed()) {
      return W("disposed");
    }
    try {
      const t = this.readConsumptionError();
      if (t) {
        return W(t);
      }
      return R({
        action: e,
        snapshot: this.dependencies.getSnapshot(),
        policy: this.dependencies.getPolicySnapshot(),
      });
    } catch (e) {
      return W("policy_unavailable");
    }
  }
  openEntitlementGuide(e) {
    return r
      ._(function* () {
        if (this.isDisposed()) {
          return {
            result: {
              status: "cancelled",
              reason: "disposed",
            },
            invoked: false,
          };
        }
        try {
          t = yield this.resolveEntitlement(e);
        } catch (e) {
          return {
            result: {
              status: "error",
            },
            invoked: false,
          };
        }
        if (this.isDisposed()) {
          return {
            result: {
              status: "cancelled",
              reason: "disposed",
            },
            invoked: false,
          };
        }
        if (t.status === "unavailable") {
          return {
            result: {
              status: "unavailable",
              reason: t.reason,
            },
            invoked: false,
          };
        }
        if (t.status === "checking") {
          return {
            result: {
              status: "unavailable",
              reason: this.getCheckingEntitlementUnavailableReason(),
            },
            invoked: false,
          };
        }
        if (t.access === "available") {
          return {
            result: {
              status: "not_required",
            },
            invoked: false,
          };
        }
        var t;
        let i;
        const intent = t.access === "login_required" ? "login" : "membership";
        const n = this.getEntitlementGuideInvoker(intent, e);
        if (!n) {
          return {
            result: {
              status: "unavailable",
              reason: "unsupported",
            },
            invoked: false,
          };
        }
        const s = new AbortController();
        this.guideAbortControllers.add(s);
        try {
          i = this.watchConsumption(s);
          if (s.signal.aborted) {
            throw j;
          }
          yield $(n(s.signal), s.signal);
          if (this.isDisposed() || s.signal.aborted) {
            return {
              result: {
                status: "cancelled",
                reason: "disposed",
              },
              invoked: true,
            };
          }
          return {
            result: {
              status: "guided",
              intent,
            },
            invoked: true,
          };
        } catch (error) {
          if (error === j || this.isDisposed() || s.signal.aborted) {
            return {
              result: {
                status: "cancelled",
                reason: this.isDisposed() ? "disposed" : "aborted",
              },
              invoked: true,
            };
          }
          return {
            result: {
              status: "error",
            },
            invoked: true,
          };
        } finally {
          if (i != null) {
            i();
          }
          this.guideAbortControllers.delete(s);
        }
      })
      .call(this);
  }
  getEntitlementGuideInvoker(e, t) {
    if (e === "login") {
      var i;
      const r = this.dependencies.account;
      if (r.requireLogin) {
        return (e) => {
          var i;
          if ((i = r.requireLogin) == null) {
            return undefined;
          }
          return i.call(r, {
            source: t.source,
            closable: true,
            showLoginDialog: true,
            signal: e,
          });
        };
      }
      return undefined;
    }
    const data = this.dependencies.getSnapshot().data;
    if (data == null || (i = data.consumption) == null ? undefined : i.teamId) {
      const s = data.teamMembership;
      const a = this.dependencies.modal;
      if (!s || !(a == null ? undefined : a.openTeamConsumptionGuide)) {
        return;
      }
      const consumption = data.consumption;
      return (e) => {
        var i;
        if ((i = a.openTeamConsumptionGuide) == null) {
          return undefined;
        }
        return i.call(a, {
          source: t.source,
          consumption,
          membership: s,
          reason: s.seatLimitExceeded
            ? "team_seat_limit"
            : "team_subscription_required",
          signal: e,
        });
      };
    }
    const modal = this.dependencies.modal;
    if (modal == null ? undefined : modal.openVipModal) {
      return (e) =>
        modal.openVipModal({
          source: t.source,
          signal: e,
        });
    }
  }
  getCheckingEntitlementUnavailableReason() {
    const e = this.dependencies.getSnapshot();
    if (e.status === "anonymous" || e.data) {
      return "policy_unavailable";
    }
    return "status_unavailable";
  }
  openGuide(e) {
    return r
      ._(function* () {
        if (this.isDisposed()) {
          return {
            result: {
              status: "cancelled",
              reason: "disposed",
            },
            invoked: false,
          };
        }
        try {
          t = yield this.resolveState(e);
        } catch (error) {
          return {
            result: {
              status: "error",
              error,
            },
            invoked: false,
          };
        }
        if (this.isDisposed()) {
          return {
            result: {
              status: "cancelled",
              reason: "disposed",
            },
            invoked: false,
          };
        }
        if (t.status === "allowed") {
          return {
            result: {
              status: "not_blocked",
              state: t,
            },
            invoked: false,
          };
        }
        if (t.status === "unavailable") {
          return {
            result: {
              status: "unavailable",
              state: t,
            },
            invoked: false,
          };
        }
        if (t.status === "checking") {
          return {
            result: {
              status: "unavailable",
              state: K(t),
            },
            invoked: false,
          };
        }
        var t;
        let i;
        const r = this.getGuideInvoker(t, e);
        if (!r) {
          return {
            result: {
              status: "unavailable",
              state: Q("unsupported"),
            },
            invoked: false,
          };
        }
        const n = new AbortController();
        this.guideAbortControllers.add(n);
        try {
          i = this.watchConsumption(n);
          if (n.signal.aborted) {
            throw j;
          }
          yield $(r(n.signal), n.signal);
          if (this.isDisposed() || n.signal.aborted) {
            return {
              result: {
                status: "cancelled",
                reason: "disposed",
              },
              invoked: true,
            };
          }
          return {
            result: {
              status: "guided",
              state: t,
            },
            invoked: true,
          };
        } catch (error) {
          if (error === j || this.isDisposed() || n.signal.aborted) {
            return {
              result: {
                status: "cancelled",
                reason: this.isDisposed() ? "disposed" : "aborted",
              },
              invoked: true,
            };
          }
          return {
            result: {
              status: "error",
              error,
            },
            invoked: true,
          };
        } finally {
          if (i != null) {
            i();
          }
          this.guideAbortControllers.delete(n);
        }
      })
      .call(this);
  }
  watchConsumption(e) {
    const consumption = this.dependencies.consumption;
    if (!consumption) {
      return H;
    }
    const i = l(
      this.dependencies.account.getSnapshot(),
      consumption.getSnapshot(),
    );
    if (!i) {
      return H;
    }
    const r = () => {
      try {
        if (
          !u(
            i,
            l(
              this.dependencies.account.getSnapshot(),
              consumption.getSnapshot(),
            ),
          )
        ) {
          e.abort();
        }
      } catch (t) {
        e.abort();
      }
    };
    const n = [];
    try {
      n.push(this.dependencies.account.subscribe(r));
      n.push(consumption.subscribe(r));
      r();
      return () => {
        for (var e of n) {
          e();
        }
      };
    } catch (error) {
      for (const s of n) {
        s();
      }
      throw error;
    }
  }
  getGuideInvoker(e, t) {
    switch (e.intent) {
      case "team":
        const i = this.dependencies.getSnapshot().data;
        var r = i == null ? undefined : i.consumption;
        var a = i == null ? undefined : i.teamMembership;
        var o = this.dependencies.modal;
        if (
          !(r == null ? undefined : r.teamId) ||
          !a ||
          !(o == null ? undefined : o.openTeamConsumptionGuide)
        ) {
          return;
        }
        return (i) => {
          var n;
          if ((n = o.openTeamConsumptionGuide) == null) {
            return undefined;
          }
          return n.call(o, {
            source: t.source,
            consumption: r,
            membership: a,
            reason: e.reason,
            signal: i,
          });
        };
      case "login":
        var l = this.dependencies.account;
        if (l.requireLogin) {
          return (e) => {
            var i;
            if ((i = l.requireLogin) == null) {
              return undefined;
            }
            return i.call(l, {
              source: t.source,
              closable: true,
              showLoginDialog: true,
              signal: e,
            });
          };
        }
        return undefined;
      case "vip":
        var u = this.dependencies.modal;
        if (u == null ? undefined : u.openVipModal) {
          return (e) =>
            u.openVipModal({
              source: t.source,
              signal: e,
            });
        }
        return undefined;
      case "credit_recharge":
        var d = this.dependencies.modal;
        if (d == null ? undefined : d.openCreditInsufficientModal) {
          const sceneOptions = k(t.options);
          if (!sceneOptions) {
            return;
          }
          const benefitAmount = sceneOptions.benefitAmount;
          const benefits = sceneOptions.extraBenefits;
          const batchNumber = sceneOptions.outputCount;
          return (e) => {
            var i;
            if ((i = d.openCreditInsufficientModal) == null) {
              return undefined;
            }
            return i.call(
              d,
              s._(
                n._(
                  {
                    source: t.source,
                    scene: t.scene,
                    sceneOptions,
                    guidance: "more_credits",
                  },
                  benefitAmount === undefined
                    ? {}
                    : {
                        benefitAmount,
                      },
                  benefits === undefined
                    ? {}
                    : {
                        benefits,
                      },
                  batchNumber === undefined
                    ? {}
                    : {
                        batchNumber,
                      },
                ),
                {
                  signal: e,
                },
              ),
            );
          };
        }
        if (d == null ? undefined : d.openCreditRechargeModal) {
          return (e) => {
            var i;
            if ((i = d.openCreditRechargeModal) == null) {
              return undefined;
            }
            return i.call(d, {
              source: t.source,
              signal: e,
            });
          };
        }
        return undefined;
    }
  }
  bestEffortRefreshAfterGuide() {
    return r
      ._(function* () {
        let e;
        const t = new AbortController();
        try {
          yield Promise.race([
            this.dependencies.refreshAfterGuide(t.signal),
            new Promise((resolve) => {
              e = setTimeout(() => {
                t.abort();
                resolve();
              }, 10000);
            }),
          ]);
        } catch (e) {
        } finally {
          if (e !== undefined) {
            clearTimeout(e);
          }
        }
      })
      .call(this);
  }
  isDisposed() {
    return this.disposed || this.dependencies.isDisposed();
  }
  constructor(e) {
    this.dependencies = e;
    this.guideAbortControllers = new Set();
    this.disposed = false;
    this.consumptionGuidePending = false;
    this.getState = (e) => this.readDecision(e).state;
    this.getEntitlement = (e) => this.readEntitlement(e);
    this.subscribe = (e) => {
      if (this.isDisposed()) {
        return H;
      }
      return this.dependencies.subscribe(e);
    };
    this.guide = (e) =>
      r
        ._(function* () {
          const t = yield this.openGuide(e);
          if (t.invoked && !this.isDisposed()) {
            yield this.bestEffortRefreshAfterGuide();
          }
          if (this.isDisposed()) {
            return {
              status: "cancelled",
              reason: "disposed",
            };
          }
          return t.result;
        })
        .call(this);
    this.guideConsumption = (e) =>
      r
        ._(function* () {
          if (this.isDisposed()) {
            return {
              status: "cancelled",
              reason: "disposed",
            };
          }
          if ((o = e.signal) == null ? undefined : o.aborted) {
            return {
              status: "cancelled",
              reason: "aborted",
            };
          }
          if (this.consumptionGuidePending) {
            return {
              status: "unavailable",
              reason: "busy",
            };
          }
          if (!Number.isFinite(e.requiredCredits) || e.requiredCredits < 0) {
            return {
              status: "unavailable",
              reason: "invalid_credits",
            };
          }
          let t;
          const i = new AbortController();
          const r = () => i.abort();
          const n = [];
          this.consumptionGuidePending = true;
          this.guideAbortControllers.add(i);
          if ((d = e.signal) != null) {
            d.addEventListener("abort", r, {
              once: true,
            });
          }
          let s = false;
          try {
            var o;
            var d;
            let c;
            const p = () => {
              var e;
              var t;
              return l(
                this.dependencies.account.getSnapshot(),
                (e =
                  (t = this.dependencies.consumption) == null
                    ? undefined
                    : t.getSnapshot()) != null
                  ? e
                  : {
                      status: "personal",
                      revision: 0,
                    },
              );
            };
            const v = p();
            if (!v) {
              return {
                status: "unavailable",
                reason: "status_unavailable",
              };
            }
            const h = () => {
              try {
                if (!u(v, p())) {
                  r();
                }
              } catch (e) {
                r();
              }
            };
            n.push(this.dependencies.account.subscribe(h));
            if (this.dependencies.consumption) {
              n.push(this.dependencies.consumption.subscribe(h));
            }
            h();
            if (i.signal.aborted) {
              throw j;
            }
            const m = this.dependencies.getSnapshot();
            if (m.status === "idle" || m.status === "loading") {
              yield $(this.dependencies.ensureReady(), i.signal);
            }
            h();
            if (i.signal.aborted) {
              throw j;
            }
            const f = this.dependencies.getSnapshot();
            const g = f.data;
            if (
              f.status !== "ready" ||
              !g ||
              !g.creditReady ||
              !Number.isFinite(g.localCredit) ||
              ((this.dependencies.consumption || g.consumption) &&
                !u(v, g.consumption))
            ) {
              return {
                status: "unavailable",
                reason: "status_unavailable",
              };
            }
            const y = a(g, e.requiredCredits);
            if (y === "status_unavailable") {
              return {
                status: "unavailable",
                reason: y,
              };
            }
            if (y === "allowed" && g.localCredit >= e.requiredCredits) {
              return {
                status: "not_blocked",
              };
            }
            const b = this.dependencies.modal;
            if (!b || (v.teamId && !b.openTeamConsumptionGuide)) {
              return {
                status: "unavailable",
                reason: "unsupported",
              };
            }
            s = true;
            if (v.teamId && g.teamMembership && y !== "allowed") {
              yield $(
                (c = b.openTeamConsumptionGuide) == null
                  ? undefined
                  : c.call(b, {
                      source: e.source,
                      consumption: v,
                      membership: g.teamMembership,
                      reason: y,
                      signal: i.signal,
                    }),
                i.signal,
              );
            } else {
              yield $(
                b.openVipModal({
                  source: e.source,
                  signal: i.signal,
                }),
                i.signal,
              );
            }
            if (i.signal.aborted) {
              throw j;
            }
            return {
              status: "guided",
            };
          } catch (error) {
            if (i.signal.aborted || this.isDisposed() || error === j) {
              return {
                status: "cancelled",
                reason: this.isDisposed() ? "disposed" : "aborted",
              };
            }
            return {
              status: "error",
              error,
            };
          } finally {
            for (const _ of n) {
              _();
            }
            if ((t = e.signal) != null) {
              t.removeEventListener("abort", r);
            }
            this.guideAbortControllers.delete(i);
            if (!(!s || i.signal.aborted || this.isDisposed())) {
              yield this.bestEffortRefreshAfterGuide();
            }
            this.consumptionGuidePending = false;
          }
        })
        .call(this);
    this.guideEntitlement = (e) =>
      r
        ._(function* () {
          const t = yield this.openEntitlementGuide(e);
          if (t.invoked && !this.isDisposed()) {
            yield this.bestEffortRefreshAfterGuide();
          }
          if (this.isDisposed()) {
            return {
              status: "cancelled",
              reason: "disposed",
            };
          }
          return t.result;
        })
        .call(this);
    this.execute = (e, t) =>
      r
        ._(function* () {
          if (this.isDisposed()) {
            return {
              status: "cancelled",
              reason: "disposed",
            };
          }
          const consumption = this.dependencies.consumption;
          if (!consumption) {
            return this.executeCaptured(e, t);
          }
          try {
            if (!this.dependencies.account.getSnapshot().hasLogin) {
              return yield this.executeCaptured(e, t);
            }
            return yield this.executeWithConsumption(e, t, consumption);
          } catch (error) {
            return {
              status: "error",
              phase: "commerce",
              error,
            };
          }
        })
        .call(this);
    this.dispose = () => {
      if (!this.disposed) {
        this.disposed = true;
        for (var e of this.guideAbortControllers) {
          e.abort();
        }
        this.guideAbortControllers.clear();
      }
    };
  }
}
function K(e) {
  return Q(
    e.reason === "status_loading" ? "status_unavailable" : "policy_unavailable",
  );
}
function Q(e, t) {
  return n._(
    {
      status: "unavailable",
      activation: "disabled",
      reason: e,
    },
    t
      ? {
          error: t,
        }
      : {},
  );
}
function W(e) {
  return {
    status: "unavailable",
    reason: e,
  };
}
function $(e, signal) {
  if (signal.aborted) {
    return Promise.reject(j);
  }
  const i = Promise.resolve(e);
  return new Promise((resolve, reject) => {
    var n = () => reject(j);
    signal.addEventListener("abort", n, {
      once: true,
    });
    i.then(resolve, reject).finally(() => {
      signal.removeEventListener("abort", n);
    });
  });
}
function H() {}
const Z = {
  status: "idle",
  data: null,
  error: null,
};
function J(e, t) {
  if (!e) {
    return er;
  }
  const i = () => t.abort();
  if (e.aborted) {
    i();
    return er;
  }
  e.addEventListener("abort", i, {
    once: true,
  });
  return () => e.removeEventListener("abort", i);
}
function Y(e) {
  return new X(e);
}
export { Y as k };
class X {
  start() {
    if (this.disposed) {
      return Promise.resolve();
    }
    if (!this.startPromise) {
      this.started = true;
      this.startPromise = this.startInternal();
    }
    return this.startPromise;
  }
  refresh(e, t) {
    return r
      ._(function* () {
        if (!this.disposed && this.started && (t == null || !t.aborted)) {
          const i = ++this.requestSeq;
          this.abortStatusRequest();
          const r = ee(this.snapshot);
          try {
            account = this.input.host.account.getSnapshot();
          } catch (error) {
            if (!this.isActive(i)) {
              return;
            }
            const n = ei(
              "account_snapshot_failed",
              error,
              "Commerce account snapshot is unavailable",
              false,
            );
            this.setSnapshot({
              status: "error",
              data: r,
              error: n,
            });
            this.reportError("dreamina_commerce_account_snapshot_failed", n, {
              reason: e,
            });
            return;
          }
          const s = et(account);
          const a =
            this.activeAccountIdentity !== undefined &&
            s !== this.activeAccountIdentity;
          this.activeAccountIdentity = s;
          const data = a ? null : r;
          if (!account.hasLogin) {
            return void this.setSnapshot({
              status: "anonymous",
              data: null,
              error: null,
            });
          }
          this.setSnapshot({
            status: "loading",
            data,
            error: null,
          });
          const l = new AbortController();
          const u = J(t, l);
          this.statusAbortController = l;
          try {
            let d;
            let c;
            let p;
            var account;
            let h;
            const m =
              (h = this.input.host.consumption) == null
                ? undefined
                : h.getSnapshot();
            if (!this.isActive(i) || l.signal.aborted) {
              return;
            }
            d = account;
            if (
              d.hasLogin &&
              (((c = d.userId) == null ? undefined : c.trim()) ||
                ((p = d.uniqueId) == null ? undefined : p.trim())) &&
              (m == null ? undefined : m.status) === "unavailable" &&
              m.unavailableReason === "context_unresolved" &&
              Number.isSafeInteger(m.revision) &&
              m.revision >= 0
            ) {
              return void this.setSnapshot({
                status: "loading",
                data: null,
                error: null,
              });
            }
            const f = yield this.input.host.status.fetchStatus({
              account,
              reason: e,
              signal: l.signal,
            });
            if (!this.isActive(i)) {
              return;
            }
            if (!f || !f.creditReady || !f.vipReady) {
              const g = {
                code: "status_unavailable",
                message: "Commerce status is unavailable",
                retryable: true,
              };
              this.setSnapshot({
                status: "error",
                data,
                error: g,
              });
              this.reportError("dreamina_commerce_status_failed", g, {
                reason: e,
              });
              return;
            }
            this.setSnapshot({
              status: "ready",
              data: f,
              error: null,
            });
            this.reportInfo("dreamina_commerce_status_ready", {
              reason: e,
            });
          } catch (error) {
            if (!this.isActive(i)) {
              return;
            }
            const y = ei(
              "status_request_failed",
              error,
              "Commerce status request failed",
              true,
            );
            this.setSnapshot({
              status: "error",
              data,
              error: y,
            });
            this.reportError("dreamina_commerce_status_failed", y, {
              reason: e,
            });
          } finally {
            u();
            if (this.statusAbortController === l) {
              this.statusAbortController = undefined;
            }
          }
        }
      })
      .call(this);
  }
  getSnapshot() {
    return this.snapshot;
  }
  subscribe(e) {
    if (this.disposed) {
      return er;
    }
    this.listeners.add(e);
    return () => this.listeners.delete(e);
  }
  refreshBenefitStrategy() {
    arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const e = "dreamina_commerce_strategy_refresh";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(e, "disposed"));
    }
    if (this.input.host.policy) {
      return this.runOperation(
        e,
        (e) =>
          r
            ._(function* () {
              if (yield this.refreshPolicy("benefit_strategy_changed")) {
                return {
                  status: "success",
                  value: undefined,
                };
              }
              return {
                status: "skipped",
                reason: this.disposed ? "disposed" : "not_needed",
              };
            })
            .call(this),
        "benefit_strategy_changed",
      );
    }
    return Promise.resolve(this.skipOperation(e, "unsupported"));
  }
  fetchVipInfo() {
    let e;
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const i = "dreamina_commerce_vip_fetch";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(i, "disposed"));
    }
    const vip = this.input.host.vip;
    if (vip) {
      if (
        t.force ||
        ((e = vip.shouldRefreshVipInfo) == null
          ? undefined
          : e.call(vip, {
              snapshot: this.snapshot,
              now: Date.now(),
            })) !== false
      ) {
        return this.runOperation(
          i,
          (e) =>
            vip.fetchVipInfo({
              useMaster: t.useMaster,
              silent: t.silent,
              signal: e,
            }),
          "vip_changed",
        );
      }
      return Promise.resolve(this.skipOperation(i, "not_needed"));
    }
    return Promise.resolve(this.skipOperation(i, "unsupported"));
  }
  receiveDailyCredits() {
    return r
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        if (this.disposed) {
          return {
            status: "skipped",
            reason: "disposed",
          };
        }
        const credit = this.input.host.credit;
        if (!(credit == null ? undefined : credit.receiveDailyCredits)) {
          return {
            status: "skipped",
            reason: "unsupported",
          };
        }
        const account = this.input.host.account;
        const r = account.getSnapshot();
        if (
          !r.hasLogin ||
          !(
            ((l = r.userId) == null ? undefined : l.trim()) ||
            ((u = r.uniqueId) == null ? undefined : u.trim())
          )
        ) {
          return {
            status: "skipped",
            reason: "anonymous",
          };
        }
        const n = et(r);
        const s = new AbortController();
        const a = J(e.signal, s);
        const o = account.subscribe(() => {
          if (n !== et(account.getSnapshot())) {
            s.abort();
          }
        });
        this.operationAbortControllers.add(s);
        try {
          if (s.signal.aborted) {
            return {
              status: "skipped",
              reason: "not_needed",
            };
          }
          var l;
          var u;
          let d;
          const c = yield credit.receiveDailyCredits({
            source: (d = e.source) != null ? d : "manual",
            signal: s.signal,
          });
          if (this.disposed || s.signal.aborted) {
            return {
              status: "skipped",
              reason: "not_needed",
            };
          }
          if (c.status === "error") {
            this.reportError("dreamina_commerce_receive_credits", c.error);
          }
          return c;
        } catch (error) {
          if (this.disposed || s.signal.aborted) {
            return {
              status: "skipped",
              reason: "not_needed",
            };
          }
          const p = ei(
            "operation_failed",
            error,
            "Daily credit result is unknown",
            false,
          );
          this.reportError("dreamina_commerce_receive_credits", p);
          return {
            status: "error",
            error: p,
            effect: "unknown",
          };
        } finally {
          a();
          o();
          this.operationAbortControllers.delete(s);
        }
      })
      .apply(this, arguments);
  }
  receiveCredits() {
    let e;
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const i = "dreamina_commerce_receive_credits";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(i, "disposed"));
    }
    const credit = this.input.host.credit;
    if (!credit) {
      return Promise.resolve(this.skipOperation(i, "unsupported"));
    }
    if (credit.receiveDailyCredits) {
      return this.runOperation(
        i,
        (e) =>
          r
            ._(function* () {
              let i;
              if (
                (i = yield this.receiveDailyCredits(
                  s._(n._({}, t), {
                    signal: e,
                  }),
                )).status === "success"
              ) {
                return {
                  status: "success",
                  value: undefined,
                };
              }
              if (i.status === "error") {
                return {
                  status: "error",
                  error: i.error,
                };
              }
              return {
                status: "skipped",
                reason:
                  i.reason === "access_denied" || i.reason === "cooldown"
                    ? "not_needed"
                    : i.reason,
              };
            })
            .call(this),
        "credit_changed",
      );
    }
    if (this.snapshot.status === "anonymous") {
      return Promise.resolve(this.skipOperation(i, "anonymous"));
    }
    const o = ee(this.snapshot);
    const l =
      (e = this.input.host.policy) == null
        ? undefined
        : e.getSnapshot().adapter;
    if (
      (o == null ? undefined : o.isInFreemiumStage) ||
      (l == null ? undefined : l.isInFreemiumStage)
    ) {
      return Promise.resolve(this.skipOperation(i, "freemium"));
    }
    if (!this.input.host.policy || (l == null ? undefined : l.isReady)) {
      if (o) {
        return this.runOperation(
          i,
          (e) => {
            var i;
            return credit.receiveCredits({
              source: (i = t.source) != null ? i : "manual",
              signal: e,
            });
          },
          "credit_changed",
        );
      }
      return Promise.resolve(this.skipOperation(i, "not_needed"));
    }
    return Promise.resolve(this.skipOperation(i, "strategy_not_ready"));
  }
  fetchTeamMembership(e) {
    return this.fetchTeamResource(
      "dreamina_commerce_team_membership_fetch",
      this.input.host.teamMembership,
      e,
      "Team membership account changed",
    );
  }
  fetchTeamCredit(e) {
    return this.fetchTeamResource(
      "dreamina_commerce_credit_fetch",
      this.input.host.teamCredit,
      e,
      "Team credit account changed",
    );
  }
  fetchTeamResource(e, t, i, r) {
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(e, "disposed"));
    }
    if (!t) {
      return Promise.resolve(this.skipOperation(e, "unsupported"));
    }
    if (!this.input.host.account.getSnapshot().hasLogin) {
      return Promise.resolve(this.skipOperation(e, "anonymous"));
    }
    const account = this.input.host.account;
    const o = et(account.getSnapshot());
    return this.runOperation(e, (e) => {
      var l;
      var u;
      var d = false;
      var c = account.subscribe(() => {
        if (et(account.getSnapshot()) !== o) {
          d = true;
          if (u != null) {
            u();
          }
        }
      });
      return new Promise((resolve, reject) => {
        var v = () => {
          if (d || et(account.getSnapshot()) !== o) {
            throw Error(r);
          }
        };
        u = () => reject(Error(r));
        l = () =>
          resolve({
            status: "skipped",
            reason: "disposed",
          });
        e.addEventListener("abort", l, {
          once: true,
        });
        Promise.resolve()
          .then(() => {
            e.throwIfAborted();
            v();
            return t.fetch(
              s._(n._({}, i), {
                signal: e,
              }),
            );
          })
          .then((e) => {
            v();
            resolve({
              status: "success",
              value: e,
            });
          })
          .catch(reject);
      }).finally(() => {
        c();
        if (l) {
          e.removeEventListener("abort", l);
        }
      });
    });
  }
  getTeamSubscriptionAvailability(e) {
    return r
      ._(function* () {
        if (this.disposed) {
          return {
            available: false,
            reason: "disposed",
          };
        }
        try {
          let t;
          let i;
          let r;
          if (
            (t = yield (r = this.input.host.modal) == null ||
            (i = r.getTeamSubscriptionAvailability) == null
              ? undefined
              : i.call(r, e)) != null
          ) {
            return t;
          }
          return {
            available: false,
            reason: "not_configured",
          };
        } catch (e) {
          return {
            available: false,
            reason: "membership_unavailable",
          };
        }
      })
      .call(this);
  }
  synchronizeTeamSubscription(e) {
    const t = "dreamina_commerce_team_subscription_sync";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(t, "disposed"));
    }
    const modal = this.input.host.modal;
    const r = modal == null ? undefined : modal.synchronizeTeamSubscription;
    if (r) {
      return this.runOperation(t, () => r.call(modal, e));
    }
    return Promise.resolve(this.skipOperation(t, "unsupported"));
  }
  openTeamSubscriptionModal(e) {
    const t = "dreamina_commerce_open_vip_modal";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(t, "disposed"));
    }
    const modal = this.input.host.modal;
    const r = modal == null ? undefined : modal.openTeamSubscriptionModal;
    if (r) {
      return this.runOperation(t, (t) =>
        r.call(
          modal,
          s._(n._({}, e), {
            signal: t,
          }),
        ),
      );
    }
    return Promise.resolve(this.skipOperation(t, "unsupported"));
  }
  openVipModal(e) {
    const t = "dreamina_commerce_open_vip_modal";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(t, "disposed"));
    }
    const modal = this.input.host.modal;
    if (modal && en(modal, "openVipModal")) {
      return this.runVoidOperation(t, (t) =>
        modal.openVipModal(
          s._(n._({}, e), {
            signal: t,
          }),
        ),
      );
    }
    return Promise.resolve(this.skipOperation(t, "unsupported"));
  }
  openCreditRechargeModal(e) {
    const t = "dreamina_commerce_open_credit_recharge_modal";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(t, "disposed"));
    }
    const modal = this.input.host.modal;
    if (modal == null ? undefined : modal.openCreditRechargeModal) {
      return this.runVoidOperation(t, (t) => {
        var r;
        if ((r = modal.openCreditRechargeModal) == null) {
          return undefined;
        }
        return r.call(
          modal,
          s._(n._({}, e), {
            signal: t,
          }),
        );
      });
    }
    return Promise.resolve(this.skipOperation(t, "unsupported"));
  }
  openCreditHistoryModal(e) {
    const t = "dreamina_commerce_open_credit_history_modal";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(t, "disposed"));
    }
    const modal = this.input.host.modal;
    if (modal == null ? undefined : modal.openCreditHistoryModal) {
      return this.runVoidOperation(t, (t) => {
        var r;
        if ((r = modal.openCreditHistoryModal) == null) {
          return undefined;
        }
        return r.call(
          modal,
          s._(n._({}, e), {
            signal: t,
          }),
        );
      });
    }
    return Promise.resolve(this.skipOperation(t, "unsupported"));
  }
  openSubscriptionManageModal(e) {
    const t = "dreamina_commerce_open_subscription_manage_modal";
    if (this.disposed) {
      return Promise.resolve(this.skipOperation(t, "disposed"));
    }
    const modal = this.input.host.modal;
    if (modal == null ? undefined : modal.openSubscriptionManageModal) {
      return this.runVoidOperation(t, (t) => {
        var r;
        if ((r = modal.openSubscriptionManageModal) == null) {
          return undefined;
        }
        return r.call(
          modal,
          s._(n._({}, e), {
            signal: t,
          }),
        );
      });
    }
    return Promise.resolve(this.skipOperation(t, "unsupported"));
  }
  dispose() {
    let e;
    let t;
    let i;
    if (!this.disposed) {
      this.disposed = true;
      this.requestSeq += 1;
      this.policyRequestSeq += 1;
      this.ownedActions.dispose();
      this.abortStatusRequest();
      this.abortPolicyRequest();
      for (const r of this.operationAbortControllers) {
        r.abort();
      }
      this.operationAbortControllers.clear();
      if ((e = this.consumptionUnsubscribe) != null) {
        e.call(this);
      }
      this.consumptionUnsubscribe = undefined;
      if ((t = this.accountUnsubscribe) != null) {
        t.call(this);
      }
      this.accountUnsubscribe = undefined;
      if ((i = this.policyUnsubscribe) != null) {
        i.call(this);
      }
      this.policyUnsubscribe = undefined;
      this.listeners.clear();
    }
  }
  startInternal() {
    return r
      ._(function* () {
        try {
          let e;
          this.accountUnsubscribe = this.input.host.account.subscribe(() => {
            this.refreshAccountAndPolicy();
          });
          this.consumptionUnsubscribe =
            (e = this.input.host.consumption) == null
              ? undefined
              : e.subscribe(() => {
                  this.setSnapshot({
                    status: "loading",
                    data: null,
                    error: null,
                  });
                  this.refreshConsumption();
                });
        } catch (error) {
          if (!this.disposed) {
            const t = ei(
              "account_subscription_failed",
              error,
              "Commerce account subscription is unavailable",
              false,
            );
            this.setSnapshot({
              status: "error",
              data: null,
              error: t,
            });
            this.reportError(
              "dreamina_commerce_account_subscription_failed",
              t,
            );
          }
          return;
        }
        const policy = this.input.host.policy;
        if (policy) {
          try {
            this.policyUnsubscribe = policy.subscribe(() => {
              this.notifyListeners();
            });
          } catch (error) {
            const r = ei(
              "operation_failed",
              error,
              "Commerce policy subscription is unavailable",
              false,
            );
            this.reportError("dreamina_commerce_policy_subscription_failed", r);
          }
        }
        const n = this.refreshPolicy("initialize").catch((e) => {
          this.reportPolicyRefreshFailure(e, "initialize");
          return false;
        });
        yield Promise.all([this.refresh("initialize"), n]);
      })
      .call(this);
  }
  setSnapshot(e) {
    if (!this.disposed) {
      this.snapshot = e;
      this.notifyListeners();
    }
  }
  notifyListeners() {
    if (!this.disposed) {
      for (const e of Array.from(this.listeners)) {
        try {
          e(this.snapshot);
        } catch (e) {}
      }
    }
  }
  refreshConsumption() {
    return r
      ._(function* () {
        const e = this.refreshPolicy("consumption_changed").catch((e) => {
          this.reportPolicyRefreshFailure(e, "consumption_changed");
          return false;
        });
        yield Promise.all([this.refresh("consumption_changed"), e]);
      })
      .call(this);
  }
  refreshAccountAndPolicy() {
    return r
      ._(function* () {
        const e = this.refreshPolicy("account_changed").catch((e) => {
          this.reportPolicyRefreshFailure(e, "account_changed");
          return false;
        });
        yield Promise.all([this.refresh("account_changed"), e]);
      })
      .call(this);
  }
  ensureActionReady() {
    if (this.disposed) {
      return Promise.resolve();
    }
    if (!this.actionCheckPromise) {
      let e;
      e = this.ensureActionReadyInternal().finally(() => {
        if (this.actionCheckPromise === e) {
          this.actionCheckPromise = undefined;
        }
      });
      this.actionCheckPromise = e;
    }
    return this.actionCheckPromise;
  }
  ensureActionReadyInternal() {
    return r
      ._(function* () {
        const started = this.started;
        yield this.start();
        if (!this.disposed && started) {
          let t;
          const i = [];
          if (!(this.snapshot.status === "anonymous" || ee(this.snapshot))) {
            i.push(this.refresh("commercial_blocked"));
          }
          const r = this.input.host.policy;
          if (r) {
            if (
              !((t = r.getSnapshot().adapter) == null ? undefined : t.isReady)
            ) {
              i.push(
                this.refreshPolicy("action_check", true).catch((e) => {
                  this.reportPolicyRefreshFailure(e, "action_check");
                  return false;
                }),
              );
            }
          }
          yield Promise.all(i);
        }
      })
      .call(this);
  }
  refreshAfterGuide(e) {
    return r
      ._(function* () {
        const t = this.refreshPolicy("commercial_blocked", false, e).catch(
          (e) => {
            this.reportPolicyRefreshFailure(e, "commercial_blocked");
            return false;
          },
        );
        yield Promise.all([this.refresh("commercial_blocked", e), t]);
      })
      .call(this);
  }
  refreshPolicy(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const i = arguments.length > 2 ? arguments[2] : undefined;
    if (
      this.disposed ||
      !this.input.host.policy ||
      (i == null ? undefined : i.aborted)
    ) {
      return Promise.resolve(false);
    }
    if (t && this.policyRefreshPromise) {
      return this.policyRefreshPromise;
    }
    const policy = this.input.host.policy;
    const s = ++this.policyRequestSeq;
    this.abortPolicyRequest();
    const a = new AbortController();
    const o = J(i, a);
    this.policyAbortController = a;
    const l = r
      ._(function* () {
        try {
          yield policy.refresh({
            reason: e,
            signal: a.signal,
          });
          return this.isPolicyRequestActive(s, a);
        } catch (error) {
          if (!this.isPolicyRequestActive(s, a)) {
            return false;
          }
          throw error;
        } finally {
          o();
          if (s === this.policyRequestSeq) {
            this.policyAbortController = undefined;
            this.policyRefreshPromise = undefined;
          }
        }
      })
      .call(this);
    this.policyRefreshPromise = l;
    return l;
  }
  isPolicyRequestActive(e, t) {
    return !this.disposed && !t.signal.aborted && e === this.policyRequestSeq;
  }
  reportPolicyRefreshFailure(e, t) {
    const i = ei("operation_failed", e, "Commerce policy refresh failed", true);
    this.reportError("dreamina_commerce_policy_refresh_failed", i, {
      reason: t,
    });
  }
  isActive(e) {
    return !this.disposed && e === this.requestSeq;
  }
  abortStatusRequest() {
    let e;
    if ((e = this.statusAbortController) != null) {
      e.abort();
    }
    this.statusAbortController = undefined;
  }
  abortPolicyRequest() {
    let e;
    if ((e = this.policyAbortController) != null) {
      e.abort();
    }
    this.policyAbortController = undefined;
    this.policyRefreshPromise = undefined;
  }
  reportInfo(e, t) {
    try {
      let i;
      let r;
      if (!((r = this.input.host.reporter) == null || (i = r.info) == null)) {
        i.call(r, e, t);
      }
    } catch (e) {}
  }
  reportError(e, t, i) {
    try {
      let r;
      let n;
      if (!((n = this.input.host.reporter) == null || (r = n.error) == null)) {
        r.call(n, e, t, i);
      }
    } catch (e) {}
  }
  runVoidOperation(e, t) {
    return r
      ._(function* () {
        return this.runOperation(e, (e) =>
          r._(function* () {
            yield t(e);
            return {
              status: "success",
              value: undefined,
            };
          })(),
        );
      })
      .call(this);
  }
  runOperation(e, t, i) {
    return r
      ._(function* () {
        if (this.disposed) {
          return this.skipOperation(e, "disposed");
        }
        const r = new AbortController();
        this.operationAbortControllers.add(r);
        try {
          const s = yield t(r.signal);
          if (
            this.disposed ||
            r.signal.aborted ||
            (s.status === "success" &&
              i &&
              (yield this.refresh(i), this.disposed || r.signal.aborted))
          ) {
            return {
              status: "skipped",
              reason: "disposed",
            };
          }
          if (s.status === "error") {
            this.reportError(e, s.error);
          } else {
            this.reportInfo(
              e,
              n._(
                {
                  status: s.status,
                },
                s.status === "skipped"
                  ? {
                      reason: s.reason,
                    }
                  : {},
              ),
            );
          }
          return s;
        } catch (error) {
          if (this.disposed || r.signal.aborted) {
            return {
              status: "skipped",
              reason: "disposed",
            };
          }
          const a = ei(
            "operation_failed",
            error,
            "Commerce operation failed",
            false,
          );
          this.reportError(e, a);
          return {
            status: "error",
            error: a,
          };
        } finally {
          this.operationAbortControllers.delete(r);
        }
      })
      .call(this);
  }
  skipOperation(e, t) {
    if (!this.disposed) {
      this.reportInfo(e, {
        status: "skipped",
        reason: t,
      });
    }
    return {
      status: "skipped",
      reason: t,
    };
  }
  constructor(e) {
    this.input = e;
    this.snapshot = Z;
    this.listeners = new Set();
    this.operationAbortControllers = new Set();
    this.requestSeq = 0;
    this.policyRequestSeq = 0;
    this.started = false;
    this.disposed = false;
    var t;
    var { host } = e;
    var { modal } = host;
    var a = !!host.policy;
    this.capabilities = Object.freeze(
      s._(
        n._(
          s._(
            n._(
              {},
              host.teamCredit
                ? {
                    teamCredit: true,
                  }
                : {},
              host.teamMembership
                ? {
                    teamMembership: true,
                  }
                : {},
            ),
            {
              policy: a,
              strategy: a,
              vip: !!host.vip,
              credit: !!host.credit,
            },
          ),
          ((t = host.credit) == null ? undefined : t.receiveDailyCredits)
            ? {
                dailyCredits: true,
              }
            : {},
        ),
        {
          modal: Object.freeze(
            n._(
              {
                vip: en(modal, "openVipModal"),
                creditRecharge: en(modal, "openCreditRechargeModal"),
                creditHistory: en(modal, "openCreditHistoryModal"),
                subscriptionManage: en(modal, "openSubscriptionManageModal"),
              },
              (modal == null ? undefined : modal.openTeamSubscriptionModal)
                ? {
                    teamSubscription: true,
                  }
                : {},
            ),
          ),
          i18n: !!host.i18n,
          reporter: !!host.reporter,
        },
      ),
    );
    this.ownedActions = new z({
      account: host.account,
      consumption: host.consumption,
      modal: host.modal,
      getSnapshot: () => this.snapshot,
      getPolicySnapshot: () => {
        var e;
        if ((e = host.policy) == null) {
          return undefined;
        }
        return e.getSnapshot();
      },
      subscribe: (e) => this.subscribe(() => e()),
      isDisposed: () => this.disposed,
      ensureReady: () => this.ensureActionReady(),
      refreshAfterGuide: (e) => this.refreshAfterGuide(e),
    });
    this.actions = this.ownedActions;
  }
}
function ee(snapshot) {
  if (
    snapshot.status === "ready" ||
    snapshot.status === "loading" ||
    snapshot.status === "error"
  ) {
    return snapshot.data;
  }
  return null;
}
function et(e) {
  let t;
  let i;
  if (e.hasLogin) {
    if ((t = (i = e.userId) != null ? i : e.uniqueId) != null) {
      return t;
    }
    return "logged-in-without-id";
  }
  return "anonymous";
}
function ei(code, t, i, retryable) {
  return {
    code,
    message: t instanceof Error ? t.message : i,
    retryable,
    cause: t,
  };
}
function er() {}
function en(modal, t) {
  return modal !== undefined && typeof Reflect.get(modal, t) === "function";
}
