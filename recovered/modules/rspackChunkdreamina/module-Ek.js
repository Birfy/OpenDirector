import i from "e2";
import n from "X5";
import a from "SC";
import o from "jh7";
export function OR(e, t) {
  if ((t == null ? undefined : t.isOwner) || e === n.TeamRole.OWNER) {
    return "owner";
  }
  if ((t == null ? undefined : t.isAdmin) || e === n.TeamRole.ADMIN) {
    return "admin";
  }
  if (
    (t == null ? undefined : t.isCollaborator) ||
    e === n.TeamRole.COLLABORATOR
  ) {
    return "collaborator";
  }
  return "unknown";
}
export function AY(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : Math.floor(Date.now() / 1000);
  const { subscriptionInfo } = e;
  const status = (function (e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : Math.floor(Date.now() / 1000);
    return i.DO(
      e
        ? {
            active: e.flag,
            expiresAt: e.vipEndTime,
            seatLimitExceeded: e.isExceedLimit,
            hadPaid: e.uidHadPay,
          }
        : undefined,
      t,
    );
  })(subscriptionInfo, t);
  return {
    status,
    expireTime:
      subscriptionInfo == null ? undefined : subscriptionInfo.vipEndTime,
    curLevel: subscriptionInfo == null ? undefined : subscriptionInfo.curLevel,
    teamVipLevel: a.Ee(subscriptionInfo, t),
    isExceedLimit:
      subscriptionInfo == null ? undefined : subscriptionInfo.isExceedLimit,
    uidHadPay:
      subscriptionInfo == null ? undefined : subscriptionInfo.uidHadPay,
    unavailableReason:
      typeof (subscriptionInfo == null
        ? undefined
        : subscriptionInfo.vipEndTime) === "number" &&
      subscriptionInfo.vipEndTime > 0 &&
      t >= subscriptionInfo.vipEndTime
        ? o.ms.Expired
        : (subscriptionInfo == null
              ? undefined
              : subscriptionInfo.isExceedLimit) === true
          ? o.ms.SeatLimitExceeded
          : status === o.lz.Expired
            ? o.ms.Expired
            : undefined,
  };
}
export function l8(e) {
  let t;
  const r = e == null ? undefined : e.subscriptionInfo;
  return [
    r == null ? undefined : r.flag,
    r == null ? undefined : r.vipEndTime,
    r == null ? undefined : r.curLevel,
    r == null ? undefined : r.isExceedLimit,
    r == null ? undefined : r.uidHadPay,
    !Array.isArray((t = r == null ? undefined : r.vipDetail))
      ? ""
      : t
          .map((e) => {
            var t;
            var r;
            var i;
            var n;
            return [
              (t = e.level) != null ? t : "",
              (r = e.memberLimit) != null ? r : "",
              (i = e.beginTime) != null ? i : "",
              (n = e.endTime) != null ? n : "",
            ].join(":");
          })
          .sort()
          .join(","),
  ].join("|");
}
function d(e) {
  if (typeof e === "number" && Number.isFinite(e)) {
    return e;
  }
}
export function Gz(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : Math.floor(Date.now() / 1000);
  const r = arguments.length > 2 ? arguments[2] : undefined;
  const i = e == null ? undefined : e.vipDetail;
  if (Array.isArray(i)) {
    const n = i.find((e) => {
      if (
        d(e.memberLimit) === undefined ||
        (r !== undefined && a.q4(e.level) !== r)
      ) {
        return false;
      }
      var i = typeof e.beginTime === "number" ? e.beginTime : -Infinity;
      var n = typeof e.endTime === "number" ? e.endTime : Infinity;
      return i <= t && t <= n;
    });
    return d(n == null ? undefined : n.memberLimit);
  }
}
export function Wt(e, t) {
  let r;
  let i;
  const n =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : Math.floor(Date.now() / 1000);
  const a = arguments.length > 3 ? arguments[3] : undefined;
  if (
    (r = (i = d(t.memberLimit)) != null ? i : d(e.seat.memberLimit)) != null
  ) {
    return r;
  }
  return Gz(t.subscriptionInfo, n, a);
}
