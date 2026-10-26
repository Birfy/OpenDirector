import n from "MK";
export function Ko(e) {
  return (e == null ? undefined : e.accountType) === "team";
}
function a(e) {
  let r;
  return (
    Ko(e) &&
    !!((r = e.capability) == null ? undefined : r.canRechargeTeamCredit)
  );
}
export function Gs(e, r) {
  return (
    a(e) &&
    (r == null ? undefined : r.enabled) === true &&
    !!r.targetTeamId &&
    !!r.teamCreditTradeType
  );
}
export function Dk(e, r) {
  const t = a(e);
  const i = Gs(e, r);
  return {
    title: n.Ay.t("web_team_points_insufficient", {}, "团队积分不足"),
    content: t
      ? n.Ay.t(
          "web_team_points_insufficient_purchase_more",
          {},
          "你没有足够积分进行此操作，请购买充值更多",
        )
      : n.Ay.t(
          "web_team_points_insufficient_contact_owner_allocate",
          {},
          "你没有足够积分进行此操作，请联系空间创建者分配积分",
        ),
    okText: i
      ? n.Ay.t("web_team_purchase_points", {}, "购买积分")
      : n.Ay.t("web_team_acknowledge", {}, "知道了"),
  };
}
export function gu(e) {
  return !Ko(e);
}
export function xC(e, need_credits) {
  const t =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (e) {
    return {
      account_type: e.accountType,
      team_id: e.teamId,
      role: e.role,
      need_credits,
      membership_subject: t.membershipSubject,
      team_membership_status: t.teamMembershipStatus,
    };
  }
  return {
    need_credits,
    membership_subject: t.membershipSubject,
    team_membership_status: t.teamMembershipStatus,
  };
}
