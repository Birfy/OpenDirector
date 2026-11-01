import i from "QWK";
import a from "SI";
import n from "Ek";
import { r as r_1 } from "./module-zi.js";
import { PQ } from "./module-Com.js";
import c from "jh7";
import u from "hag";
import _ from "VN";
export function uM(e) {
  let t;
  let r;
  let i;
  let a;
  const { teamInfo, role, seatCount, memberCount, teamVipState, enterSource } =
    e;
  const l =
    (t = memberCount != null ? memberCount : teamInfo.memberCnt) != null
      ? t
      : 0;
  const p =
    (r =
      (i = seatCount != null ? seatCount : teamInfo.memberLimit) != null
        ? i
        : n.Gz(teamInfo.subscriptionInfo)) != null
      ? r
      : l;
  return {
    teamId: String(teamInfo.teamId),
    teamName: (a = teamInfo.teamName) != null ? a : "",
    role: ((e, t) => {
      if (t) {
        return t;
      }
      const r = n.OR(e.currentRole);
      switch (r) {
        case "owner":
          return "creator";
        case "admin":
          return "manager";
        default:
          return "collaborator";
      }
    })(teamInfo, role),
    seatCount: String(p),
    memberCount: String(l),
    teamVipState:
      teamVipState != null
        ? teamVipState
        : n.AY(teamInfo).unavailableReason === "expired"
          ? "expired"
          : "active",
    enterSource,
  };
}
export function F4(e, t, r, i) {
  const user_teams_subscribe_type = r_1(i);
  return {
    action: e.action,
    sub_page: e.subPage,
    user_subscribe_type: a.PR[r],
    user_teams_subscribe_type,
    team_id: e.teamId,
    team_name: e.teamName,
    user_is_login: +!!t,
    role: e.role,
    seat_count: e.seatCount,
    member_count: e.memberCount,
    team_vip_state: e.teamVipState,
    enter_source: e.enterSource,
    current_tab: e.subPage === "team_page" ? e.currentTab : undefined,
  };
}
class p {
  getEventParams() {
    return F4(
      this._params,
      this._accountPort.getSnapshot().hasLogin,
      this._vipService.currentVipLevel,
      this._membershipService.snapshot.team,
    );
  }
  constructor(e, t, r, i) {
    this._params = e;
    this._accountPort = t;
    this._membershipService = r;
    this._vipService = i;
    this.eventName = "team_page";
  }
}
export function HV(e, t) {
  PQ(e, p, [t]);
}
p = i.Cg(
  [
    i.Qj(1, u.F),
    i.Qj(2, c.r3),
    i.Qj(3, _._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof TeamPageReportParams === "undefined"
        ? Object
        : TeamPageReportParams,
      u.F === undefined ? Object : u.F,
      typeof ICommercialMembershipServiceType === "undefined"
        ? Object
        : ICommercialMembershipServiceType,
      _._ === undefined ? Object : _._,
    ]),
  ],
  p,
);
