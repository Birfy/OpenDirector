import n from "Qey";
const r = {
  5007: () =>
    n.Ay.t("web_team_no_operation_permission", {}, "暂无操作权限，操作失败"),
  5016: () => "暂不支持主动退出团队",
  5021: () =>
    n.Ay.t(
      "web_team_join_failed_team_limit_reached",
      {},
      "加入团队数量已达上限，加入失败",
    ),
  5022: () =>
    n.Ay.t("web_team_member_removal_limit_exceeded", {}, "成员移除次数已超限"),
  0x206f535: () =>
    n.Ay.t(
      "dre_risk_notification_toast",
      {},
      "检测到账号存在异常行为，为保障账号安全，暂时无法操作",
    ),
  0x29bdce6b: () =>
    n.Ay.t(
      "web_team_removed_from_space_operation_failed",
      {},
      "操作失败，你已不在该团队空间",
    ),
};
function a(e) {
  let t;
  let i;
  let n;
  const a =
    (t = e.code) != null ? t : (i = e.error) == null ? undefined : i.code;
  if (a === undefined || (n = r[String(a)]) == null) {
    return undefined;
  }
  return n.call(r);
}
export { a };
export function Z(e, t) {
  let i;
  return (
    a(e) ||
    e.msg ||
    e.message ||
    ((i = e.error) == null ? undefined : i.message) ||
    t
  );
}
