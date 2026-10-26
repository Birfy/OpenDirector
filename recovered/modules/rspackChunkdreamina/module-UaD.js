import i from "NY";
import n from "oa";
import c from "bk";
import l from "QWK";
import { _ as __1 } from "./module-Kt_2.js";
import { TZ, nj, xz } from "./module-K8.js";
import { v as v_1 } from "./module-A7.js";
import { P as P_1 } from "./module-aMM.js";
import { Ln, MX, Q2, SQ, _3 } from "./module-yh_3.js";
import { Gr, PJ, VR, W, WE, m0, m3 } from "./module-KCc_2.js";
import { i as i_1 } from "./module-jGK.js";
import * as x from "./module-boS.js";
let a;
let o;
class p {
  getEventParams() {
    let { status, duration, code, message, logId } = this._params;
    return {
      status,
      duration,
      code,
      message,
      log_id: logId,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "query_benefit_metadata";
  }
}
function C(_containerService, t) {
  P_1(_containerService, p, [t]);
}
class v {
  getEventParams() {
    let { status, duration, code, message, logId } = this._params;
    return {
      status,
      duration,
      code,
      message,
      log_id: logId,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "batch_get_user_benefit";
  }
}
function _(_containerService, t) {
  P_1(_containerService, v, [t]);
}
class f {
  getEventParams() {
    let { status, duration, code, message, logId } = this._params;
    return {
      status,
      duration,
      code,
      message,
      log_id: logId,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "batch_check_withhold_deduct";
  }
}
function h(_containerService, t) {
  P_1(_containerService, f, [t]);
}
function y(e) {
  return +!!e.includes("aigc");
}
function w(e) {
  for (let t of e.strategies) {
    if (t.subscribeStrategy || t.creditStrategy) {
      return false;
    }
  }
  return true;
}
function I(e) {
  for (let t of e.strategies) {
    if (t.limitStrategy) {
      return true;
    }
  }
  return false;
}
function b(e, t) {
  return e.map((e) => e[t]).join(",");
}
function k(resourceType, resourceId, benefitType) {
  return `${resourceType}_${resourceId}_${benefitType}`;
}
function P(e) {
  let t = new Map();
  for (let r of e) {
    let e = `${r.resourceType}__${r.resourceId}`;
    if (!t.has(e)) {
      t.set(e, {
        resourceType: r.resourceType,
        resourceId: r.resourceId,
        benefitTypeList: [],
      });
    }
    t.get(e).benefitTypeList.push(r.benefitType);
  }
  return Array.from(t.values());
}
a = o || (o = {});
a[(a.MetaDataNotInitialized = 10001)] = "MetaDataNotInitialized";
a[(a.UserBenefitFetchFailed = 10002)] = "UserBenefitFetchFailed";
a[(a.UnknownError = 10003)] = "UnknownError";
export class U {
  _transformBenefitStrategyMap(e, t) {
    let r;
    let a;
    let o;
    let i;
    let l;
    let m;
    let s;
    r = e;
    a = t;
    m =
      ((l = {}),
      (i = r.metadataList) == null ||
        i.forEach((e) => {
          var t;
          var r;
          if ((t = e.benefitsPayStrategy) != null) {
            t.forEach((benefitsPayStrategy) => {
              l[
                k(e.resourceType, e.resourceId, benefitsPayStrategy.benefitType)
              ] = {
                benefitsPayStrategy,
              };
            });
          }
          if ((r = e.benefitsDisplayResource) != null) {
            r.forEach((benefitsDisplayResource) => {
              let r = k(
                e.resourceType,
                e.resourceId,
                benefitsDisplayResource.benefitType,
              );
              l[r] = c._(n._({}, l[r]), {
                benefitsDisplayResource,
              });
            });
          }
        }),
      l);
    s = {};
    if ((o = a.assetList) != null) {
      o.forEach((e) => {
        var t;
        var r;
        var a;
        var o;
        var i;
        var c;
        let l = k(e.resourceType, e.resourceId, e.benefitType);
        if (!s[l]) {
          s[l] = {
            benefitTriplet: {
              resourceType: e.resourceType,
              resourceId: e.resourceId,
              benefitType: e.benefitType,
            },
            useMode: SQ.USE,
            strategies: [],
            unit: Q2.COUNT,
          };
        }
        s[l].useMode =
          ((r = m[l]) == null || (t = r.benefitsPayStrategy) == null
            ? undefined
            : t.useMode) || SQ.USE;
        s[l].unit =
          ((o = m[l]) == null || (a = o.benefitsPayStrategy) == null
            ? undefined
            : a.unit) || Q2.COUNT;
        if ((i = e.assetDetails) != null) {
          i.forEach((e) => {
            var t;
            var r;
            var a;
            var o;
            var i;
            s[l].strategies = s[l].strategies || [];
            if (e.payMode === Ln.LimitFree) {
              let o =
                (a = m[l]) == null ||
                (r = a.benefitsPayStrategy) == null ||
                (t = r.limitfreeStrategy) == null
                  ? undefined
                  : t.limitfreeLimits;
              let i =
                o == null
                  ? undefined
                  : o.find(
                      (t) =>
                        t.role === e.role &&
                        t.limitFreeType === e.limitFreeType,
                    );
              let c =
                (i == null ? undefined : i.isCreditTrial) === true &&
                e.quotaType === MX.TRIAL_TIMES;
              s[l].strategies.push({
                payMode: e.payMode,
                limitStrategy: n._(
                  {
                    role: e.role,
                    quotaAll: e.quotaAll,
                    quotaLeft: e.quotaLeft,
                    quotaType: e.quotaType,
                    limitFreeType: e.limitFreeType,
                    limitDateType: e.limitDateType,
                    remainTime: e.remainTime,
                    limitCredit: e.limitCredits,
                  },
                  c
                    ? {
                        isCreditTrial: true,
                      }
                    : {},
                ),
              });
            }
            if (e.payMode === Ln.UserCredit) {
              let t = m[l];
              s[l].strategies.push({
                payMode: e.payMode,
                creditStrategy: {
                  role: e.role,
                  quotaAll: e.quotaAll,
                  quotaLeft: e.quotaLeft,
                  creditPricingInfo:
                    t == null ||
                    (i = t.benefitsPayStrategy) == null ||
                    (o = i.creditStrategy) == null
                      ? undefined
                      : o.creditPricingInfo,
                },
              });
            }
            if (e.payMode === Ln.Subscribe) {
              s[l].strategies.push({
                payMode: e.payMode,
                subscribeStrategy: {
                  role: e.role,
                  quotaAll: e.quotaAll,
                  quotaLeft: e.quotaLeft,
                },
              });
            }
          });
        }
        s[l].strategies = [
          ...s[l].strategies.filter((e) => {
            var t;
            if ((t = e.limitStrategy) == null) {
              return undefined;
            }
            return t.isCreditTrial;
          }),
          ...s[l].strategies.filter((e) => {
            var t;
            return !((t = e.limitStrategy) == null
              ? undefined
              : t.isCreditTrial);
          }),
        ];
        s[l].benefitsDisplayResource =
          (c = m[l]) == null ? undefined : c.benefitsDisplayResource;
      });
    }
    return s;
  }
  init() {
    const e = this;
    return i._(function* () {
      return yield e.forceUpdateBenefitStrategy({
        refreshMetaData: true,
        refreshUserBenefits: true,
      });
    })();
  }
  forceUpdateBenefitStrategy(e) {
    const t = this;
    return i._(function* () {
      let { refreshMetaData = true, refreshUserBenefits = true } = e || {};
      let i = [
        {
          resourceType: "aigc",
          resourceId: "get_all",
          benefitTypeList: [],
        },
        {
          resourceType: "normal_func",
          resourceId: "get_all",
          benefitTypeList: [],
        },
      ];
      let c = t._getCollectionTriplets();
      let l = {
        queryList: [...i, ...P(c)],
      };
      let [m, d] = yield Promise.all([
        refreshMetaData
          ? t._queryBenefitMetadata({
              queryList: i,
            })
          : t._getCurrentMetaDataOrError(),
        refreshUserBenefits
          ? t._batchGetUserBenefit(l)
          : t._getCurrentUserBenefitsOrError(),
      ]);
      if (!m.ok) {
        return xz(o.MetaDataNotInitialized, "Meta data fetch failed");
      }
      if (!d.ok) {
        return xz(o.UserBenefitFetchFailed, "User benefit fetch failed");
      }
      let m_value = m.value;
      let d_value = d.value;
      if (!m_value) {
        return xz(o.MetaDataNotInitialized, "Meta data is not initialized");
      }
      if (!d_value) {
        return xz(o.UserBenefitFetchFailed, "User benefit is not initialized");
      }
      let C = refreshUserBenefits
        ? t._transformCollectionUpdate(d_value, c)
        : TZ({});
      if (!C.ok) {
        return C;
      }
      let v = t._transformBenefitStrategyMap(m_value, d_value);
      for (let [e, r] of Object.entries(v)) {
        let a = t._patchMetaDataMap[e];
        let o = r.benefitTriplet;
        let i = m_value.metadataList.some((e) => {
          var t;
          return (
            e.resourceType === o.resourceType &&
            e.resourceId === o.resourceId &&
            ((t = e.benefitsPayStrategy) == null
              ? undefined
              : t.some((e) => e.benefitType === o.benefitType))
          );
        });
        if (a && i) {
          delete t._patchMetaDataMap[e];
        } else if (a) {
          let _;
          let r =
            (_ = d_value.assetList) == null
              ? undefined
              : _.find((r) => t._tripletKey(r) === e);
          if (r) {
            v[e] = t._transformBenefitStrategyMap(a, {
              assetList: [r],
            })[e];
          }
        }
      }
      for (let e of ((t._benefitStrategyMap = n._(
        {},
        t._benefitStrategyMap,
        v,
      )),
      c)) {
        delete t._benefitStrategyMap[t._tripletKey(e)];
      }
      Object.assign(t._collectionStrategyMap, C.value);
      t._metaData = m_value;
      t._userBenefits = d_value;
      t.isReady = true;
      t._onBenefitStrategyChange.fire(t.getAllBenefitStrategy());
      return nj();
    })();
  }
  getMetaData() {
    return this._metaData;
  }
  getUserBenefits() {
    return this._userBenefits;
  }
  _getCurrentMetaDataOrError() {
    if (this._metaData) {
      return TZ(this._metaData);
    }
    return xz(o.MetaDataNotInitialized, "Meta data is not initialized");
  }
  _getCurrentUserBenefitsOrError() {
    if (this._userBenefits) {
      return TZ(this._userBenefits);
    }
    return xz(o.UserBenefitFetchFailed, "User benefit is not initialized");
  }
  mergeBenefitStrategyByPatch(e) {
    let {
      singleMetaData,
      singleUserBenefits,
      collectionMetaData,
      collectionUserBenefits,
    } = e;
    if (!singleMetaData || !singleUserBenefits) {
      return xz(o.UnknownError, "Unknown error");
    }
    let c = this._transformBenefitStrategyMap(
      singleMetaData,
      singleUserBenefits,
    );
    for (let e of ((this._benefitStrategyMap = n._(
      {},
      this._benefitStrategyMap,
      c,
    )),
    Object.keys(c))) {
      this._patchMetaDataMap[e] = singleMetaData;
    }
    if (collectionMetaData && collectionUserBenefits) {
      let l;
      let e = this._transformBenefitStrategyMap(
        collectionMetaData,
        collectionUserBenefits,
      );
      for (let t of ((this._collectionStrategyMap = n._(
        {},
        this._collectionStrategyMap,
        e,
      )),
      Object.keys(e))) {
        this._collectionMetaDataMap[t] = collectionMetaData;
      }
      if ((l = collectionUserBenefits.assetList) != null) {
        l.forEach((e) => {
          var t;
          if ((t = singleUserBenefits.assetList) != null) {
            t.forEach((t) => {
              let r = k(t.resourceType, t.resourceId, t.benefitType);
              let a = k(e.resourceType, e.resourceId, e.benefitType);
              if (!this._collectionToSingleMap[a]) {
                this._collectionToSingleMap[a] = [];
              }
              if (!this._collectionToSingleMap[a].includes(r)) {
                this._collectionToSingleMap[a].push(r);
              }
            });
          }
        });
      }
    }
    return nj();
  }
  batchMergeBenefitStrategyByPatch(e) {
    for (let t of e) {
      this.mergeBenefitStrategyByPatch(t);
    }
    this._onBenefitStrategyChange.fire(this.getAllBenefitStrategy());
    return nj();
  }
  batchGetBenefitStrategy(e) {
    return e.map((e) => this.getBenefitStrategy(e));
  }
  getBenefitStrategy(e) {
    let t = k(e.resourceType, e.resourceId, e.benefitType);
    let r = this._benefitStrategyMap[t];
    let a = this._getCollectionStrategy(e);
    if (a) {
      return this._mergeStrategy(
        r != null
          ? r
          : c._(n._({}, a), {
              benefitTriplet: e,
              strategies: [],
            }),
        a,
      );
    }
    return r;
  }
  _mergeStrategy(e, t) {
    let r = x.Go(e);
    let a = t.strategies.filter((e) => e.limitStrategy);
    if (!a.length) {
      return r;
    }
    let o = new Set(
      a.map((e) => {
        var t;
        return (
          ((t = e.limitStrategy) == null ? undefined : t.isCreditTrial) === true
        );
      }),
    );
    let i = (e) =>
      e.limitStrategy && o.has(e.limitStrategy.isCreditTrial === true);
    if (r.strategies.some(i)) {
      r.unit = t.unit;
      r.useMode = t.useMode;
    }
    r.strategies = [...x.Go(a), ...r.strategies.filter((e) => !i(e))];
    return r;
  }
  _getCollectionStrategy(e) {
    let t = k(e.resourceType, e.resourceId, e.benefitType);
    for (let [e, r] of Object.entries(this._collectionToSingleMap)) {
      if (r == null ? undefined : r.includes(t)) {
        return this._collectionStrategyMap[e];
      }
    }
  }
  getAllBenefitStrategy() {
    return Object.values(this._benefitStrategyMap).map((e) => {
      var t;
      if ((t = this.getBenefitStrategy(e.benefitTriplet)) != null) {
        return t;
      }
      return e;
    });
  }
  batchSyncUserBenefitsByTriplets(e) {
    const t = this;
    return i._(function* () {
      if (!t._metaData) {
        return xz(o.MetaDataNotInitialized, "Meta data is not initialized");
      }
      let r = t._getCollectionTriplets(e);
      let queryList = P([
        ...new Map([...e, ...r].map((e) => [t._tripletKey(e), e])).values(),
      ]);
      let i = yield t._batchGetUserBenefit({
        queryList,
      });
      if (!i.ok) {
        return xz(o.UserBenefitFetchFailed, "Failed to fetch user benefit");
      }
      let n = t._transformCollectionUpdate(i.value, r);
      if (!n.ok) {
        return n;
      }
      let c = t._transformBenefitStrategyMap(t._metaData, i.value);
      for (let r of e) {
        let e = t._tripletKey(r);
        let a = t._patchMetaDataMap[e];
        if (a) {
          let r = t._transformBenefitStrategyMap(a, i.value);
          if (r[e]) {
            c[e] = r[e];
          }
        }
      }
      for (let r of e) {
        let e = k(r.resourceType, r.resourceId, r.benefitType);
        if (c[e] && !t._collectionStrategyMap[e]) {
          t._benefitStrategyMap[e] = c[e];
        }
      }
      Object.assign(t._collectionStrategyMap, n.value);
      t._onBenefitStrategyChange.fire(t.getAllBenefitStrategy());
      return nj();
    })();
  }
  _tripletKey(e) {
    return k(e.resourceType, e.resourceId, e.benefitType);
  }
  _getCollectionTriplets(e) {
    let t = e && new Set(e.map((e) => this._tripletKey(e)));
    return Object.entries(this._collectionStrategyMap)
      .filter(([e]) => {
        var r;
        return (
          !t ||
          t.has(e) ||
          ((r = this._collectionToSingleMap[e]) == null
            ? undefined
            : r.some((e) => t.has(e)))
        );
      })
      .map(([, e]) => e.benefitTriplet);
  }
  _transformCollectionUpdate(e, t) {
    let r = {};
    for (let i of t) {
      let a;
      let t = this._tripletKey(i);
      let l =
        (a = e.assetList) == null
          ? undefined
          : a.find((e) => this._tripletKey(e) === t);
      let m = this._collectionMetaDataMap[t];
      if (!l || !m) {
        return xz(
          o.UserBenefitFetchFailed,
          "Collection benefit response is incomplete",
        );
      }
      let d = this._transformBenefitStrategyMap(m, {
        assetList: [l],
      })[t];
      if (!d.strategies.some((e) => e.limitStrategy)) {
        d.strategies = [
          ...this._collectionStrategyMap[t].strategies
            .filter((e) => e.limitStrategy)
            .map((e) =>
              c._(n._({}, e), {
                limitStrategy: c._(n._({}, e.limitStrategy), {
                  quotaAll: 0,
                  quotaLeft: 0,
                  remainTime: 0,
                  limitCredit: 0,
                }),
              }),
            ),
          ...d.strategies,
        ];
      }
      r[t] = d;
    }
    return TZ(r);
  }
  _queryBenefitMetadata(e) {
    const t = this;
    return i._(function* () {
      let r = Date.now();
      let a = yield t._dataService.queryBenefitMetadata(e);
      let o = Date.now() - r;
      if (a.ok) {
        C(t._containerService, {
          status: "success",
          code: 0,
          message: "success",
          duration: o,
        });
      } else {
        let i;
        C(t._containerService, {
          status: "fail",
          code: a.code,
          message: a.msg,
          duration: o,
          logId: (i = a.errorInfo) == null ? undefined : i.logId,
        });
      }
      return a;
    })();
  }
  _batchGetUserBenefit(e) {
    const t = this;
    return i._(function* () {
      let r = Date.now();
      let a = yield t._dataService.batchGetUserBenefit(e);
      let o = Date.now() - r;
      if (a.ok) {
        _(t._containerService, {
          status: "success",
          code: 0,
          message: "success",
          duration: o,
        });
      } else {
        let i;
        _(t._containerService, {
          status: "fail",
          code: a.code,
          message: a.msg,
          duration: o,
          logId: (i = a.errorInfo) == null ? undefined : i.logId,
        });
      }
      return a;
    })();
  }
  batchCheckWithholdDeduct(e) {
    const t = this;
    return i._(function* () {
      let r = Date.now();
      let a = yield t._dataService.batchCheckWithholdDeduct(e);
      let o = Date.now() - r;
      if (a.ok) {
        h(t._containerService, {
          status: "success",
          code: 0,
          message: "success",
          duration: o,
        });
      } else {
        let i;
        h(t._containerService, {
          status: "fail",
          code: a.code,
          message: a.msg,
          duration: o,
          logId: (i = a.errorInfo) == null ? undefined : i.logId,
        });
      }
      return a;
    })();
  }
  batchReportUsage(e) {
    const t = this;
    return i._(function* () {
      return yield t._dataService.batchReportUsage(e);
    })();
  }
  exchangeBenefit(e) {
    const t = this;
    return i._(function* () {
      return yield t._dataService.exchangeBenefit(e);
    })();
  }
  checkQualification(e) {
    const t = this;
    return i._(function* () {
      return yield t._dataService.checkQualification(e);
    })();
  }
  _createBatchGetBenefitReportDataFactory(e, t) {
    let r;
    let a;
    r = this.getBenefitStrategy.bind(this);
    return {
      rightId: b(
        (a = e.map((e, a) => {
          var o;
          var i;
          var n;
          var c;
          var l;
          let m;
          o = e;
          i = r;
          n = t;
          m =
            (c = i(o)) != null
              ? c
              : {
                  benefitTriplet: o,
                  useMode: SQ.USE,
                  unit: Q2.COUNT,
                  strategies: [],
                };
          return {
            rightId: o.benefitType,
            rightType: o.resourceId,
            rightMainType:
              (l = o.resourceType) === "material_artist"
                ? W.Material
                : y(l)
                  ? W.Aigc
                  : W.Function,
            rightIsAigc: y(o.resourceType) ? PJ.True : PJ.False,
            rightBlockType: ((e) => {
              let { useMode } = e;
              switch (useMode) {
                case SQ.EXPORT:
                  return m3.Export;
                case SQ.USE:
                default:
                  return m3.Click;
              }
            })(m),
            rightCountType: ((e) => {
              switch (e.unit) {
                case Q2.COUNT:
                  return m0.Times;
                case Q2.SECOND:
                  return m0.Duration;
                case Q2.WORD:
                  return m0.Words;
                default:
                  return m0.Times;
              }
            })(m),
            rightSubscribeType: ((e, t) => {
              for (let i of e.strategies) {
                let r;
                let a;
                let o;
                let e =
                  (o =
                    (r = i.subscribeStrategy) == null ? undefined : r.role) !=
                  null
                    ? o
                    : (a = i.creditStrategy) == null
                      ? undefined
                      : a.role;
                if (e) {
                  return t(e);
                }
              }
              return "free";
            })(m, n),
            rightOneoffMixType: ((e) => {
              let t;
              let r;
              for (let a of e.strategies) {
                if (a.subscribeStrategy) {
                  t = a.subscribeStrategy;
                }
                if (a.creditStrategy) {
                  r = a.creditStrategy;
                }
              }
              if (r && r.role !== "all") {
                return Gr.SubscribeBeforeCredits;
              }
              if (t) {
                return Gr.SubscribeOnly;
              }
              if (r) {
                return Gr.CreditsOnly;
              }
              w(e);
              return Gr.Free;
            })(m),
            rightIsTrial: ((e) => {
              for (let t of e.strategies) {
                if (t.payMode === Ln.LimitFree) {
                  return PJ.True;
                }
              }
              return PJ.False;
            })(m),
            rightTrialMode: ((e) => {
              for (let r of e.strategies) {
                if (r.payMode === Ln.LimitFree) {
                  let t;
                  let {
                    limitFreeType,
                    limitCredit = 0,
                    quotaAll = 0,
                  } = (t = r.limitStrategy) != null ? t : {};
                  if (
                    limitCredit > 0 ||
                    (limitFreeType === _3.LIMIT_BY_CREDIT && quotaAll > 0)
                  ) {
                    return WE.CreditTrial;
                  }
                  switch (limitFreeType) {
                    case _3.LIMIT_BY_COUNT:
                      return WE.TimesTrial;
                    case _3.LIMIT_BY_ROLE:
                      return WE.RoleTrial;
                    case _3.CYCLE:
                      return WE.CycleTrial;
                    case _3.LIMIT_BY_TIME:
                      return WE.PeriodTrial;
                    default:
                      return WE.NonTrial;
                  }
                }
              }
              if (w(e) || w(e) || I(e)) {
                return WE.Free;
              }
              return WE.NonTrial;
            })(m),
            rightTrialType: ((e) => {
              for (let r of e.strategies) {
                if (r.payMode === Ln.LimitFree) {
                  let t;
                  let {
                    limitFreeType,
                    limitCredit = 0,
                    quotaAll = 0,
                  } = (t = r.limitStrategy) != null ? t : {};
                  if (
                    limitCredit > 0 ||
                    (limitFreeType === _3.LIMIT_BY_CREDIT && quotaAll > 0)
                  ) {
                    return VR.LimitCredits;
                  }
                  if (
                    limitFreeType === _3.LIMIT_BY_COUNT ||
                    limitFreeType === _3.CYCLE
                  ) {
                    return VR.LimitTimes;
                  }
                  if (limitFreeType === _3.LIMIT_BY_ROLE) {
                    return VR.LimitRole;
                  }
                  if (limitFreeType === _3.LIMIT_BY_TIME) {
                    return VR.LimitTimes;
                  }
                }
              }
              if (w(e) || w(e) || I(e)) {
                return VR.Free;
              }
              return VR.NonTrial;
            })(m),
            rightTrialLimitLeft: ((e) => {
              for (let r of e.strategies) {
                if (r.payMode === Ln.LimitFree) {
                  let t;
                  let {
                    quotaLeft = 0,
                    limitCredit = 0,
                    limitFreeType,
                  } = (t = r.limitStrategy) != null ? t : {};
                  if (limitCredit && limitCredit > 0) {
                    return (limitCredit * quotaLeft).toString();
                  }
                  if (quotaLeft > 0) {
                    return quotaLeft.toString();
                  }
                  if (limitFreeType === _3.LIMIT_BY_TIME) {
                    return "-1";
                  }
                }
              }
              if (w(e)) {
                return "-1";
              }
              if (w(e) || I(e)) {
                return "";
              }
              return "non_trial";
            })(m),
          };
        })),
        "rightId",
      ),
      rightType: b(a, "rightType"),
      rightMainType: b(a, "rightMainType"),
      rightIsAigc: b(a, "rightIsAigc"),
      rightBlockType: b(a, "rightBlockType"),
      rightCountType: b(a, "rightCountType"),
      rightSubscribeType: b(a, "rightSubscribeType"),
      rightOneoffMixType: b(a, "rightOneoffMixType"),
      rightIsTrial: b(a, "rightIsTrial"),
      rightTrialMode: b(a, "rightTrialMode"),
      rightTrialType: b(a, "rightTrialType"),
      rightTrialLimitLeft: b(a, "rightTrialLimitLeft"),
    };
  }
  constructor(e, t) {
    this._containerService = e;
    this._dataService = t;
    this._benefitStrategyMap = {};
    this._onBenefitStrategyChange = new v_1();
    this.onBenefitStrategyChange = this._onBenefitStrategyChange.event;
    this.isReady = false;
    this._collectionToSingleMap = {};
    this._collectionStrategyMap = {};
    this._collectionMetaDataMap = {};
    this._patchMetaDataMap = {};
  }
}
U = l.Cg(
  [
    l.Qj(0, __1),
    l.Qj(1, i_1),
    l.Sn("design:type", Function),
    l.Sn("design:paramtypes", [
      __1 === undefined ? Object : __1,
      i_1 === undefined ? Object : i_1,
    ]),
  ],
  U,
);
