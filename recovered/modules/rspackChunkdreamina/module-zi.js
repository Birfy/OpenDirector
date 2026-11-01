import i from "SC";
export function r(e) {
  if (e.isActive) {
    if (i.ny(e.vipLevel)) {
      return i.dx[e.vipLevel].logType;
    }
    return "teams";
  }
  return "no_teams";
}
export function v(e) {
  const t = "snapshot" in e ? e.snapshot : e;
  return {
    membership_subject: t.effective.subject,
    personal_is_vip: +!!t.personal.isActive,
    team_is_vip: +!!t.team.isActive,
    active_membership_subjects:
      t.effective.activeSubjects.join(",") || undefined,
    team_membership_status: t.team.status,
    team_subscription_status: t.team.status,
  };
}
