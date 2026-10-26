import r from "z8";
import n from "Qey";
import a from "yw";
const classes = {
  CommerceTeamActionConfirmModal_root: "root-tFyedS",
  CommerceTeamActionConfirmModal_panel: "panel-wyu5dV",
  CommerceTeamActionConfirmModal_header: "header-qVAHtu",
  CommerceTeamActionConfirmModal_titleGroup: "title-group-b8JTPZ",
  CommerceTeamActionConfirmModal_title: "title-gRhw7L",
  CommerceTeamActionConfirmModal_description: "description-Zcmwg1",
  CommerceTeamActionConfirmModal_closeButton: "close-button-mgMRm1",
  CommerceTeamActionConfirmModal_actions: "actions-AFlYdX",
  CommerceTeamActionConfirmModal_actionButton: "action-button-wrQwD0",
};
export function E(e) {
  let t;
  if (!e.loading.initializing && !e.loading.teamList) {
    if ((t = e.error.initializing) != null) {
      return t;
    }
    return e.error.teamList;
  }
}
export function e(e) {
  const { open, onClose, onRetry } = e;
  const c = n.Ay.t(
    "web_team_info_fetch_failed_title",
    {},
    "团队信息拉取失败，请刷新重试",
  );
  return {
    open,
    layout: "notice-fixed-actions",
    classes,
    title: r.jsxs("span", {
      className: "title-content-MqYfwh",
      children: [
        r.jsx(a.iQw, {
          "aria-hidden": true,
          className: "warning-icon-SHveTl",
          size: 16,
        }),
        c,
      ],
    }),
    description: n.Ay.t(
      "web_team_info_fetch_failed_desc",
      {},
      "点击重新尝试后，将再次拉取团队信息",
    ),
    confirmAction: {
      key: "retry-team-info-refresh",
      label: n.Ay.t("web_team_info_fetch_failed_retry", {}, "重新尝试"),
      variant: "primary",
      onClick: onRetry,
    },
    closeAction: {
      key: "close-team-info-refresh-failed-confirm",
      label: "关闭",
      icon: r.jsx(a.gzW, {
        size: 20,
        "aria-hidden": true,
      }),
      onClick: onClose,
    },
  };
}
