import i from "NY";
import n from "oa";
import a from "bk";
import o from "bo";
import s from "M8X";
import c from "ar";
import l from "k6";
import d from "bI5";
import u from "eD";
import p from "KVp";
import { W5 } from "./module-e3g.js";
import h from "zbK";
export var Fe = {
  remaining_time: "700101030",
  seat_limit: "700101032",
  tob_order: "700101031",
};
const _ = new Set(Object.values(Fe));
function y(e) {
  const t = ((e) => {
    if ("code" in e && e.code !== undefined) {
      return String(e.code);
    }
  })(e);
  return t !== undefined && _.has(t);
}
export class nE extends Error {
  static fromUnknown(errorInfo) {
    if (errorInfo instanceof nE) {
      return errorInfo;
    }
    return new nE(
      typeof errorInfo === "object" && errorInfo !== null && "code" in errorInfo
        ? {
            code: errorInfo.code,
            msg: errorInfo instanceof Error ? errorInfo.message : undefined,
            errorInfo,
          }
        : {
            msg: errorInfo instanceof Error ? errorInfo.message : undefined,
            errorInfo,
          },
    );
  }
  constructor(e) {
    var t;
    var r;
    var i;
    var n;
    var a;
    super(
      ((r = "code" in e ? e.code : ""),
      (i = "msg" in e ? e.msg : ""),
      (a =
        "errorInfo" in e && typeof (n = e.errorInfo) === "object" && n !== null
          ? e.errorInfo
          : undefined),
      "code: "
        .concat(r, "; msg: ")
        .concat(i, "; logid: ")
        .concat((t = a == null ? undefined : a.log_id) != null ? t : "")),
    );
    this.name = "TeamSeatUpgradeGoodsInfoError";
    this.code = "code" in e ? e.code : undefined;
    this.msg = "msg" in e ? e.msg : undefined;
    this.errorInfo = "errorInfo" in e ? e.errorInfo : undefined;
  }
}
export function ry(e) {
  if (e !== undefined) {
    switch (String(e)) {
      case Fe.remaining_time:
        return "remaining_time";
      case Fe.seat_limit:
        return "seat_limit";
      case Fe.tob_order:
        return "tob_order";
      default:
        return;
    }
  }
}
export function Y_(e) {
  if ((e == null ? undefined : e.status) === "error") {
    return ry(e.error.code);
  }
}
export function en(e) {
  return e instanceof nE && ry(e.code) !== undefined;
}
export var HJ = l.Or(
  "Commercial",
  (ctx, containerService, teamContext) =>
    i._(function* () {
      const n = yield (function (e) {
        return i
          ._(function* (e) {
            const { ctx, containerService, teamContext } = e;
            const a = s.cQ(containerService, d.aH);
            const aid = Number(s.cQ(containerService, c.k).appId);
            const l = u.Z({
              aid,
              teamContext,
              needCompensationPrice: true,
            });
            const p = yield (function (e) {
              return i
                ._(function* (e) {
                  const t =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : 3;
                  let r = yield e();
                  if (r.ok || y(r)) {
                    return r;
                  }
                  for (
                    let i = 0;
                    i < t - 1 && !((r = yield e()).ok || y(r));
                    i++
                  );
                  return r;
                })
                .apply(this, arguments);
            })(() => a.fetchVIPPriceList(ctx, l));
            if (p.ok) {
              return p.value;
            }
            throw new nE(p);
          })
          .apply(this, arguments);
      })({
        ctx,
        containerService,
        teamContext,
      });
      return W5(p.J(n));
    })(),
  "fetchTeamSeatUpgradeGoodsInfo",
);
export function tX(e) {
  let t;
  let r;
  const { containerService, resolveTeamContext, isCurrentTeam, onError } = e;
  let l = 0;
  const d = (e, t) => l === e && isCurrentTeam(t);
  return {
    invalidate: () => {
      l += 1;
      t = undefined;
      r = undefined;
    },
    prefetch: () => {
      var e = l + 1;
      l = e;
      t = undefined;
      r = undefined;
      i._(function* () {
        try {
          const i = yield resolveTeamContext();
          const s = i.currentTeamId;
          if (!s || !d(e, s)) {
            return;
          }
          const request = HJ(o.p3(), containerService, i);
          t = i;
          r = {
            status: "loading",
            prices: [],
            request,
          };
          try {
            const prices = yield request;
            if (!d(e, s)) {
              return;
            }
            r = {
              status: "success",
              prices,
            };
          } catch (error) {
            if (!d(e, s)) {
              return;
            }
            r = {
              status: "error",
              prices: [],
              error: nE.fromUnknown(error),
            };
            if (onError != null) {
              onError(error);
            }
          }
        } catch (error) {
          if (l !== e) {
            return;
          }
          if (onError != null) {
            onError(error);
          }
        }
      })();
    },
    applyBlockError: (error) => {
      l += 1;
      r = {
        status: "error",
        prices: [],
        error,
      };
    },
    getTeamContext: () => t,
    getGoodsSnapshot: () => r,
    getBlockReason: () => Y_(r),
  };
}
export function aY(e) {
  return a._(n._({}, e), {
    purchaseSource: h.UA.SeatUpgrade,
  });
}
