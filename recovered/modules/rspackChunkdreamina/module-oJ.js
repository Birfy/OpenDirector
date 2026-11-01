import { sq } from "./module-Com.js";
class a {
  getEventParams() {
    const { teamVipLevel, topLevelMemberLimit, detailMemberLimit, source } =
      this._params;
    return {
      team_vip_level: teamVipLevel,
      top_level_member_limit: topLevelMemberLimit,
      detail_member_limit: detailMemberLimit,
      source,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "team_member_limit_mismatch_dev";
  }
}
export function F(e, t) {
  sq(e, a, [t]);
}
