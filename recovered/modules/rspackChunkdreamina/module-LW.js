if (require.j == "wl4") var a = require("./module-Xb2.js");
export function CG(e) {
  let t;
  if (
    e == null || (t = e.subscriptionInfo) == null ? undefined : t.isExceedLimit
  ) {
    return true;
  }
  let r = e == null ? undefined : e.memberCnt;
  let a = e == null ? undefined : e.memberLimit;
  return typeof r === "number" && typeof a === "number" && r >= a;
}
export function Jw(e) {
  let t;
  let r;
  let a;
  if ((t = e.isExpired) != null) {
    return t;
  }
  return !!(
    ((a = (r = e.team) == null ? undefined : r.subscriptionInfo) == null
      ? undefined
      : a.flag) === false &&
    typeof a.vipEndTime === "number" &&
    a.vipEndTime > 0
  );
}
export function um(e, t, r, o) {
  let i;
  let n;
  let c;
  i = r ? a.V.EXPIRED : e ? undefined : a.V.NO_PERMISSION;
  n = r ? a.V.EXPIRED : t ? undefined : a.V.NO_PERMISSION;
  c = r ? a.V.EXPIRED : o ? a.V.SEAT_FULL : i;
  let l = {};
  if (i) {
    l.manageSpace = i;
    l.audit = i;
    l.removeMember = i;
    l.viewOrder = i;
    l.allocateCredit = i;
  }
  if (n) {
    l.updateRole = n;
    l.renew = n;
    l.addSeat = n;
  }
  if (c) {
    l.invite = c;
  }
  return l;
}
