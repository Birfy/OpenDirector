import i from "NY";
import n from "oa";
import a from "bk";
import o from "M8X";
import c from "K8";
import l from "jnc";
import s from "ar";
import d from "k6";
import u from "WzM";
import f from "bI5";
import v from "vUs";
import m from "pf";
import _ from "mgb";
import { fq } from "./module-zbK.js";
import { D as D_1 } from "./module-lH7.js";
import p from "gLs";
import y from "Iv";
import T from "VN";
import b from "xMb";
import C from "Q5x";
import S from "ibs";
import I from "Uze";
import E from "oh";
import D from "EYk";
import { Z } from "./module-eD.js";
import { J } from "./module-KVp.js";
const R = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return i._(function* () {
    let r = yield e();
    if (r.ok) {
      return r;
    }
    for (let i = 0; i < t - 1 && !(r = yield e()).ok; i++);
    return r;
  })();
};
function M(e) {
  let t;
  let r;
  const i = "code" in e ? e.code : "";
  const n = "msg" in e ? e.msg : "";
  const a =
    "errorInfo" in e && typeof (t = e.errorInfo) === "object" && t !== null
      ? e.errorInfo
      : undefined;
  return "code: "
    .concat(i, "; msg: ")
    .concat(n, "; logid: ")
    .concat((r = a == null ? undefined : a.log_id) != null ? r : "");
}
function L() {
  return Object.keys(u.Wo()).length > 0;
}
function w(e) {
  if (typeof e === "number" && Number.isFinite(e) && e >= 0) {
    return e;
  }
  return 0;
}
function F(e) {
  return i
    ._(function* (e) {
      const { ctx, containerService, teamContext, needCompensationPrice } = e;
      const a = o.cQ(containerService, f.aH);
      const c = Number(o.cQ(containerService, s.k).appId);
      const l = Z({
        aid: c,
        teamContext,
        needCompensationPrice,
      });
      const d = yield R(() => a.fetchVIPPriceList(ctx, l));
      if (d.ok) {
        return d.value;
      }
      throw Error(M(d));
    })
    .apply(this, arguments);
}
export var N8 = d.Or(
  "Commercial",
  (e, t) =>
    i._(function* () {
      let r;
      let i;
      const n = o.cQ(t, v.jP);
      const a = o.cQ(t, y.sG);
      const c = a.getCurrentAccountSnapshot();
      const l = c.account.accountType === "team" || L();
      const s = R(() =>
        n.fetchUserCredit(
          e,
          l
            ? {
                queryScope: m.KL.Member,
              }
            : undefined,
        ),
      );
      const d =
        (r = c.account).accountType === "team" &&
        (r.role === "owner" || r.role === "admin")
          ? R(() =>
              n.fetchUserCredit(e, {
                queryScope: m.KL.TeamPool,
              }),
            ).catch(() => undefined)
          : Promise.resolve(undefined);
      const [u, f] = yield Promise.all([s, d]);
      if (f == null ? undefined : f.ok) {
        a.updateTeamTotalCredit(
          w((i = f.value.credit).giftCredit) +
            w(i.purchaseCredit) +
            w(i.vipCredit),
          c.account.accountKey,
          c.version,
        );
      }
      if (u.ok) {
        const _ = u.value;
        a.updateCreditInfo(
          _.credit,
          _.creditsDetail,
          _.expiringCredits,
          c.account.accountKey,
          c.version,
        );
      } else {
        throw Error(M(u));
      }
      return u;
    })(),
  "fetchUserCredit",
);
export var ev = d.Or(
  "Commercial",
  (e, t) =>
    i._(function* () {
      const e = o.cQ(t, _.P);
      const r = Number(o.cQ(t, s.k).appId);
      const n = D_1(t, {
        reuseInFlight: true,
      });
      const a = i._(function* () {
        const n = yield R(() =>
          e.fetchVIPInfo({
            aid: r,
            scene: "vip",
            needSignInfo: true,
          }),
        );
        if (!n.ok) {
          throw Error(M(n));
        }
        const a = o.cQ(t, T._);
        const n_value = n.value;
        yield i._(function* () {
          const e = o.cQ(t, D.a);
          if (o.cQ(t, p.o).isOversea && !e.isReady) {
            const { promise, resolve } = l.v6();
            const n = e.onAllBenefitStrategyChange(() => resolve());
            const a = setTimeout(() => {
              resolve();
            }, 60000);
            yield promise;
            clearTimeout(a);
            n.dispose();
          }
        })();
        a.setVipInfo(n_value);
        return n;
      })();
      const [c, d] = yield Promise.allSettled([n, a]);
      if (c.status === "rejected") {
        throw c.reason;
      }
      if (d.status === "rejected") {
        throw d.reason;
      }
      return d.value;
    })(),
  "fetchVipInfo",
);
export var aW = d.Or(
  "Commercial",
  (e, t) =>
    i._(function* () {
      const e = o.cQ(t, D.a);
      const r = yield i._(function* () {
        const t = yield e.init();
        if (t.ok) {
          return t;
        }
        return c.xz(t.code, t.msg);
      })();
      if (r.ok) {
        return r;
      }
      throw Error("code: ".concat(r.code, "; msg: ").concat(r.msg, "; }"));
    })(),
  "initCommercialStrategy",
);
const U = d.Or(
  "Commercial",
  (e, t) =>
    i._(function* () {
      const r = o.cQ(t, f.aH);
      const i = Number(o.cQ(t, s.k).appId);
      const c = yield R(() =>
        r.fetchOverseaVIPPriceList(e, {
          aid: i,
          scene: fq.Personal,
        }),
      );
      if (c.ok) {
        let l;
        let d;
        let u;
        const v = o.cQ(t, E.$);
        const m = c.value;
        const _ = ((l = m.allPriceList) != null ? l : []).map((e) => {
          if (!e.promoteType && e.promotionType) {
            e.promoteType = e.promotionType;
          }
          if (e.canTrial && e.trialInfo) {
            return a._(n._({}, e), {
              canLowPriceTrial: e.canTrial,
              lowPriceTrialInfo: e.trialInfo,
            });
          }
          return e;
        });
        v.setVipPriceList(_);
        v.setDisplayInfo(
          (d = m == null ? undefined : m.displayInfo) != null ? d : {},
        );
        v.setVipTabList(
          (u = m == null ? undefined : m.tabList) != null ? u : [],
        );
      } else {
        throw Error(M(c));
      }
      return c;
    })(),
  "fetchOverseaVIPGoodsInfo",
);
export var AT = d.Or(
  "Commercial",
  (e, t) =>
    i._(function* () {
      const r = o.cQ(t, f.aH);
      const i = o.cQ(t, p.o);
      const n = o.cQ(t, s.k);
      const { isOversea } = i;
      if (isOversea) {
        return U(e, t);
      }
      const c = Number(n.appId);
      const l = yield R(() =>
        r.fetchVIPPriceList(e, {
          aid: c,
          region: "cn",
          platform: 7,
          scene: fq.Personal,
        }),
      );
      if (l.ok) {
        let d;
        let u;
        const v = o.cQ(t, E.$);
        const m = l.value;
        v.setVipPriceList((d = m.vipPriceList) != null ? d : []);
        v.setVipTabList(
          (u = m == null ? undefined : m.tabList) != null ? u : [],
        );
      } else {
        throw Error(M(l));
      }
      return l;
    })(),
  "fetchVIPGoodsInfo",
);
export var X3 = d.Or(
  "Commercial",
  (e, t, r, n) =>
    i._(function* () {
      let i;
      const a = yield F({
        ctx: e,
        containerService: t,
        teamContext: r,
        needCompensationPrice: n == null ? undefined : n.needCompensationPrice,
      });
      const c = o.cQ(t, E.$);
      c.setVipPriceList(J(a), fq.Teams);
      c.setVipTabList(
        (i = a == null ? undefined : a.tabList) != null ? i : [],
        fq.Teams,
      );
    })(),
  "fetchTeamVIPGoodsInfo",
);
d.Or(
  "Commercial",
  (e, containerService, r) =>
    i._(function* () {
      const i = yield F({
        ctx: e,
        containerService,
        teamContext: r,
        needCompensationPrice: true,
      });
      return J(i);
    })(),
  "fetchTeamVIPGoodsInfoWithoutCache",
);
export var K = d.Or(
  "Commercial",
  (e, t, r) =>
    i._(function* () {
      const i = o.cQ(t, f.aH);
      const n = (r == null ? undefined : r.currentTeamId)
        ? {
            goodsTypes: ["credit"],
            scenes: [fq.Teams],
            groupId: r.currentTeamId,
          }
        : {
            goodsTypes: ["credit"],
          };
      const a = yield R(() => i.fetchCreditPriceList(e, n));
      if (a.ok) {
        let c;
        const l = o.cQ(t, E.$);
        const s = a.value;
        l.setCreditPriceList((c = s.priceList) != null ? c : []);
      } else {
        throw Error(M(a));
      }
      return a;
    })(),
  "fetchCreditGoodsInfo",
);
export var jz = d.Or(
  "Commercial",
  (e, t, r) =>
    i._(function* () {
      if (!(r == null ? undefined : r.currentTeamId)) {
        throw Error("currentTeamId is required for team credit goods");
      }
      const i = o.cQ(t, f.aH);
      const n = yield R(() =>
        i.fetchCreditPriceList(e, {
          goodsTypes: ["credit"],
          scenes: [fq.Teams],
          groupId: r.currentTeamId,
        }),
      );
      if (!n.ok) {
        throw Error(M(n));
      }
      return n;
    })(),
  "fetchTeamCreditGoodsInfoWithoutCache",
);
export var cy = d.Or(
  "Commercial",
  (e, t) =>
    i._(function* () {
      const e = o.cQ(t, b.Bo);
      const r = o.cQ(t, C.bE);
      const i = o.cQ(t, S.o);
      const n = o.cQ(t, I.s);
      const a = L();
      const [l] = yield Promise.all(
        a
          ? [i.fetchResourcePosition(), n.fetchResourcePosition()]
          : [e.fetchResourcePosition(), r.fetchResourcePosition()],
      );
      if (l) {
        return c.nj();
      }
      return c.xz(-1, "fetchSubscribePageResource error");
    })(),
  "fetchSubscribePageResource",
);
