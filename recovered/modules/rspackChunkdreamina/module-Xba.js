import n from "NY";
import r from "oa";
import a from "bk";
import o from "QWK";
import s from "dw4";
import c from "Qey";
import l from "X5";
import d from "FD";
import u from "o7";
import v from "xi";
import m from "aEB";
import p from "Kt";
import _ from "n3";
import { I as I_1 } from "./module-Kbu.js";
import h from "dx";
import g from "z8";
import f from "yw";
import { Z, a as a_1 } from "./module-v0.js";
function I(e, t) {
  return c.Ay.t(e, {}, t);
}
const b = "web_team_invite_link_expired";
const k = "邀请链接失效，加入团队失败";
const T = {
  5006: l.TeamJoinStatus.EXPIRED,
  5008: l.TeamJoinStatus.SEAT_FULL,
  5011: l.TeamJoinStatus.ALREADY_MEMBER,
};
const J = {
  5006: () => c.Ay.t(b, {}, k),
  5008: () =>
    c.Ay.t(
      "web_team_join_failed_member_limit_reached",
      {},
      "当前团队成员已满，加入团队失败",
    ),
  5011: () => c.Ay.t("web_team_joined_successfully", {}, "你已加入该团队"),
};
function j(e) {
  let t;
  let i;
  if ((t = e.code) != null) {
    return t;
  }
  if ((i = e.error) == null) {
    return undefined;
  }
  return i.code;
}
function C(e, t) {
  let i;
  if ((i = j(e)) != null) {
    return i;
  }
  if (t) {
    return j(t);
  }
}
function w(e, t) {
  const i = C(e, t);
  if (i === undefined) {
    return undefined;
  }
  return T[String(i)];
}
function L(e, t, _inviteJoinStatus, n) {
  let r;
  let a;
  let o;
  const s =
    e.msg || e.message || ((r = e.error) == null ? undefined : r.message);
  const d =
    (o = C(e, t)) === undefined || (a = J[String(o)]) == null
      ? undefined
      : a.call(J);
  const u = a_1(e) || (t ? a_1(t) : undefined);
  return (
    d ||
    u ||
    (_inviteJoinStatus === l.TeamJoinStatus.EXPIRED || s === b
      ? c.Ay.t(b, {}, k)
      : t
        ? Z(t, Z(e, n))
        : Z(e, n))
  );
}
const Others = _.HH.Others;
const A = c.Ay.t(
  "web_team_invite_applied_waiting_owner_approval",
  {},
  "已申请，待管理员审核",
);
const D = c.Ay.t("web_team_joined_successfully", {}, "你已加入该团队");
const R = c.Ay.t("fail_retry", {}, "操作失败，请重试");
export class V extends u.jG {
  get dialogState() {
    let e;
    return ((e) => {
      const {
        inviteJoinDialogOpen,
        inviteJoinFeedbackMessage,
        inviteJoinInviterName,
        inviteJoinStatus,
        inviteJoinTeamInfo,
        workspaceState,
        onApplyJoinByInviteLink,
        onCloseInviteJoinDialog,
      } = e;
      return {
        open: inviteJoinDialogOpen,
        joinState:
          inviteJoinStatus === l.TeamJoinStatus.NEED_LOGIN
            ? "login-required"
            : inviteJoinStatus === l.TeamJoinStatus.PENDING_APPROVAL
              ? "pending"
              : "ready",
        teamName:
          inviteJoinTeamInfo == null ? undefined : inviteJoinTeamInfo.teamName,
        userName: inviteJoinInviterName,
        avatarColor:
          inviteJoinTeamInfo == null
            ? undefined
            : inviteJoinTeamInfo.avatarColor,
        closeAction: {
          key: "close-invite-join-dialog",
          label: "关闭",
          icon: g.jsx(f.gzW, {
            size: 20,
            "aria-hidden": true,
          }),
          onClick: onCloseInviteJoinDialog,
        },
        joinAction: inviteJoinDialogOpen
          ? ((e, t) => {
              let i;
              let n;
              let r;
              let a;
              let o;
              switch (e) {
                case l.TeamJoinStatus.NEED_LOGIN:
                  return {
                    key: "login-and-join-team",
                    label: I(
                      "web_team_invite_login_apply_join_button",
                      "登录后申请加入",
                    ),
                    disabled: t.loading,
                    onClick: t.onApplyJoinByInviteLink,
                    variant: "primary",
                  };
                case l.TeamJoinStatus.PENDING_APPROVAL:
                  return {
                    key: "pending-invite-join",
                    label:
                      (i = t.feedbackMessage) != null
                        ? i
                        : I(
                            "web_team_invite_applied_waiting_owner_approval",
                            "已申请，待管理员审核",
                          ),
                    disabled: true,
                    variant: "primary",
                  };
                case l.TeamJoinStatus.JOINED:
                case l.TeamJoinStatus.ALREADY_MEMBER:
                case l.TeamJoinStatus.OWNER_SELF:
                  return {
                    key: "joined-invite-team",
                    label:
                      (n = t.feedbackMessage) != null
                        ? n
                        : I("web_team_joined_successfully", "你已加入该团队"),
                    disabled: true,
                    variant: "primary",
                  };
                case l.TeamJoinStatus.EXPIRED:
                  return {
                    key: "expired-invite-link",
                    label:
                      (r = t.feedbackMessage) != null
                        ? r
                        : I(
                            "web_team_invite_link_expired",
                            "邀请链接失效，加入团队失败",
                          ),
                    disabled: true,
                    variant: "primary",
                  };
                case l.TeamJoinStatus.SEAT_FULL:
                  return {
                    key: "seat-full-invite-team",
                    label:
                      (a = t.feedbackMessage) != null
                        ? a
                        : I(
                            "web_team_join_failed_member_limit_reached",
                            "当前团队成员已满，加入团队失败",
                          ),
                    disabled: true,
                    variant: "primary",
                  };
                case l.TeamJoinStatus.ERROR:
                  return {
                    key: "retry-invite-join",
                    label:
                      (o = t.feedbackMessage) != null
                        ? o
                        : I("fail_retry", "操作失败，请重试"),
                    disabled: t.loading,
                    onClick: t.onApplyJoinByInviteLink,
                    variant: "primary",
                  };
                case l.TeamJoinStatus.CAN_APPLY:
                default:
                  return {
                    key: "join-invite-team",
                    label: I("web_team_invite_join_button", "加入团队"),
                    disabled: t.loading,
                    onClick: t.onApplyJoinByInviteLink,
                    variant: "primary",
                  };
              }
            })(inviteJoinStatus, {
              feedbackMessage: inviteJoinFeedbackMessage,
              loading: workspaceState.loading.mutation,
              onApplyJoinByInviteLink,
            })
          : null,
      };
    })({
      inviteJoinDialogOpen: this._inviteJoinDialogOpen,
      inviteJoinFeedbackMessage: this._inviteJoinFeedbackMessage,
      inviteJoinInviterName:
        (e = this._inviteJoinInviterInfo) == null ? undefined : e.nickName,
      inviteJoinStatus: this._inviteJoinStatus,
      inviteJoinTeamInfo: this._inviteJoinTeamInfo,
      workspaceState: this._teamWorkspaceService.state,
      onApplyJoinByInviteLink: () => {
        this.applyJoinByInviteLink();
      },
      onCloseInviteJoinDialog: () => {
        this.closeInviteJoinDialog();
      },
    });
  }
  restoreFromCurrentEntry() {
    return n
      ._(function* () {
        const e = h.kb();
        if (e) {
          yield this._openInviteJoinDialog(e);
        } else {
          yield this.restoreInviteJoinDialog();
        }
      })
      .call(this);
  }
  openInviteJoinDialog(e) {
    return n
      ._(function* () {
        yield this._openInviteJoinDialog({
          inviteLink: e,
        });
      })
      .call(this);
  }
  restoreInviteJoinDialog() {
    return n
      ._(function* () {
        const e = this._teamWorkspaceService.restoreInviteSession();
        if (e) {
          const t = h.d2(e.inviteLink);
          if (t) {
            const status =
              this._accountService.hasLogin &&
              e.status === l.TeamJoinStatus.NEED_LOGIN
                ? l.TeamJoinStatus.CAN_APPLY
                : e.status;
            const n = !this._inviteJoinDialogOpen || this._inviteJoinLink !== t;
            this._inviteJoinDialogOpen = true;
            if (n) {
              this._inviteJoinShowReported = false;
              this._pendingInviteJoinClickLoginReport = false;
            }
            this._inviteJoinLink = t;
            this._inviteJoinInviterInfo = e.inviterInfo;
            this._inviteJoinStatus = status;
            this._inviteJoinTeamInfo = e.teamInfo;
            if (e.teamInfo) {
              this._reportInviteJoinShow();
              this._teamWorkspaceService.saveInviteSession(
                r._(
                  {
                    inviteLink: t,
                    status,
                    teamInfo: e.teamInfo,
                  },
                  e.inviterInfo
                    ? {
                        inviterInfo: e.inviterInfo,
                      }
                    : {},
                ),
              );
              return;
            }
            const a = ++this._inviteJoinRequestId;
            yield this._trackInviteJoinDisplayInfoLoad(
              {
                inviteLink: t,
                status,
              },
              a,
            );
          }
        }
      })
      .call(this);
  }
  closeInviteJoinDialog() {
    if (this._inviteJoinDialogOpen) {
      this._reportInviteJoin("close");
    }
    this._inviteJoinDialogOpen = false;
    this._inviteJoinFeedbackMessage = undefined;
    this._inviteJoinShowReported = false;
    this._teamWorkspaceService.clearInviteSession();
    h.KM();
  }
  applyJoinByInviteLink() {
    return n
      ._(function* () {
        const _inviteJoinLink = this._inviteJoinLink;
        if (!_inviteJoinLink) {
          return void this._notificationService.error(R);
        }
        if (!this._accountService.hasLogin) {
          yield this._inviteJoinDisplayInfoPromise;
          this._reportInviteJoin("click_login");
          yield this._startInviteJoinLogin(_inviteJoinLink);
          return;
        }
        this._reportInviteJoin("click_join_team");
        try {
          let t;
          let i;
          let n;
          let r;
          const a = yield this._teamWorkspaceService.applyJoinByInviteLink({
            inviteLink: _inviteJoinLink,
          });
          if (a.ok) {
            this._inviteJoinFeedbackMessage = undefined;
            this._inviteJoinStatus =
              (t = a.value).joinResult === l.JoinTeamResult.SUCCESS
                ? l.TeamJoinStatus.JOINED
                : t.joinResult === l.JoinTeamResult.APPROVING
                  ? l.TeamJoinStatus.PENDING_APPROVAL
                  : l.TeamJoinStatus.ERROR;
            if (this._inviteJoinStatus === l.TeamJoinStatus.PENDING_APPROVAL) {
              this._notificationService.success(A);
            } else if (this._inviteJoinStatus === l.TeamJoinStatus.JOINED) {
              this._notificationService.success(D);
            }
            return;
          }
          const o = this._teamWorkspaceService.state.error.mutation;
          this._inviteJoinStatus =
            (i =
              (n = w(a, o)) != null
                ? n
                : (r = this._teamWorkspaceService.state.inviteSession) == null
                  ? undefined
                  : r.status) != null
              ? i
              : l.TeamJoinStatus.ERROR;
          if (
            this._inviteJoinStatus === l.TeamJoinStatus.ALREADY_MEMBER ||
            this._inviteJoinStatus === l.TeamJoinStatus.OWNER_SELF
          ) {
            this._inviteJoinFeedbackMessage = D;
            this._notificationService.warning(D);
            return;
          }
          this._inviteJoinFeedbackMessage = L(a, o, this._inviteJoinStatus, R);
          this._notificationService.warning(this._inviteJoinFeedbackMessage);
        } finally {
          this._teamWorkspaceService.clearInviteSession();
        }
      })
      .call(this);
  }
  _openInviteJoinDialog(e) {
    return n
      ._(function* () {
        const t = h.d2(e.inviteLink);
        if (!t) {
          return void this._notificationService.error(R);
        }
        const i = !this._inviteJoinDialogOpen || this._inviteJoinLink !== t;
        this._inviteJoinDialogOpen = true;
        if (i) {
          this._inviteJoinShowReported = false;
          this._pendingInviteJoinClickLoginReport = false;
        }
        this._inviteJoinLink = t;
        this._inviteJoinFeedbackMessage = undefined;
        this._inviteJoinInviterInfo = undefined;
        this._inviteJoinStatus = this._accountService.hasLogin
          ? l.TeamJoinStatus.CAN_APPLY
          : l.TeamJoinStatus.NEED_LOGIN;
        this._inviteJoinTeamInfo = undefined;
        const n = ++this._inviteJoinRequestId;
        yield this._trackInviteJoinDisplayInfoLoad(
          a._(r._({}, e), {
            inviteLink: t,
            status: this._inviteJoinStatus,
          }),
          n,
        );
      })
      .call(this);
  }
  _trackInviteJoinDisplayInfoLoad(e, t) {
    return n
      ._(function* () {
        const i = this._loadInviteJoinDisplayInfo(e, t);
        this._inviteJoinDisplayInfoPromise = i;
        try {
          yield i;
        } finally {
          if (this._inviteJoinDisplayInfoPromise === i) {
            this._inviteJoinDisplayInfoPromise = undefined;
          }
        }
      })
      .call(this);
  }
  _loadInviteJoinDisplayInfo(e, t) {
    return n
      ._(function* (e, t) {
        let i;
        const { inviteLink, path, query, status } = e;
        const c = yield this._teamWorkspaceService.getTeamInfoByInviteLink({
          inviteLink,
        });
        if (
          t === this._inviteJoinRequestId &&
          this._inviteJoinLink === inviteLink
        ) {
          if (!c.ok) {
            this._inviteJoinStatus =
              (i = w(c)) != null ? i : l.TeamJoinStatus.ERROR;
            this._notificationService.error(
              L(c, undefined, this._inviteJoinStatus, R),
            );
            return;
          }
          this._syncInviteJoinDisplayInfo(c.value.teamInfo, c.value.inviter);
          this._teamWorkspaceService.saveInviteSession(
            r._(
              {
                inviteLink,
                path,
                query,
                status,
                teamInfo: c.value.teamInfo,
              },
              c.value.inviter
                ? {
                    inviterInfo: c.value.inviter,
                  }
                : {},
            ),
          );
        }
      })
      .apply(this, arguments);
  }
  _syncInviteJoinDisplayInfo(e, t) {
    this._inviteJoinTeamInfo = e;
    this._inviteJoinInviterInfo = t;
    this._reportInviteJoinShow();
    if (this._pendingInviteJoinClickLoginReport) {
      this._pendingInviteJoinClickLoginReport = false;
      this._reportInviteJoin("click_login");
    }
  }
  _reportInviteJoin(action) {
    if (!this._inviteJoinTeamInfo) {
      if (action === "click_login") {
        this._pendingInviteJoinClickLoginReport = true;
      }
      return;
    }
    d.HV(
      this._containerService,
      a._(
        r._(
          {},
          d.uM({
            teamInfo: this._inviteJoinTeamInfo,
            role: "collaborator",
          }),
        ),
        {
          subPage: "invite_member_popup",
          action,
        },
      ),
    );
  }
  _reportInviteJoinShow() {
    if (
      !this._inviteJoinShowReported &&
      this._inviteJoinDialogOpen &&
      this._inviteJoinTeamInfo
    ) {
      this._inviteJoinShowReported = true;
      this._reportInviteJoin("show");
    }
  }
  _startInviteJoinLogin(e) {
    return n
      ._(function* () {
        this._teamWorkspaceService.saveInviteSession(
          r._(
            {
              inviteLink: e,
              status: l.TeamJoinStatus.NEED_LOGIN,
            },
            this._inviteJoinTeamInfo
              ? {
                  teamInfo: this._inviteJoinTeamInfo,
                }
              : {},
            this._inviteJoinInviterInfo
              ? {
                  inviterInfo: this._inviteJoinInviterInfo,
                }
              : {},
          ),
        );
        yield this._accountService.login({
          platform: "douyin",
          source: Others,
        });
      })
      .call(this);
  }
  _setInviteSessionStorage() {
    if (typeof window !== "undefined") {
      try {
        this._teamWorkspaceService.setInviteSessionStorage(
          window.sessionStorage,
        );
      } catch (error) {
        v.V.warn(
          "Failed to set commercial team invite session storage:",
          error,
        );
      }
    }
  }
  constructor(e, t, i, n) {
    super();
    this._teamWorkspaceService = e;
    this._notificationService = t;
    this._accountService = i;
    this._containerService = n;
    this._inviteJoinDialogOpen = false;
    this._inviteJoinDisplayInfoPromise = undefined;
    this._inviteJoinFeedbackMessage = undefined;
    this._inviteJoinInviterInfo = undefined;
    this._inviteJoinLink = undefined;
    this._pendingInviteJoinClickLoginReport = false;
    this._inviteJoinRequestId = 0;
    this._inviteJoinShowReported = false;
    this._inviteJoinStatus = undefined;
    this._inviteJoinTeamInfo = undefined;
    s.Gn(this, {
      _inviteJoinDialogOpen: s.sH,
      _inviteJoinFeedbackMessage: s.sH,
      _inviteJoinInviterInfo: s.sH,
      _inviteJoinLink: s.sH,
      _inviteJoinStatus: s.sH,
      _inviteJoinTeamInfo: s.sH,
      closeInviteJoinDialog: s.XI.bound,
      dialogState: s.EW,
      openInviteJoinDialog: s.XI.bound,
    });
    this._setInviteSessionStorage();
    this._register(
      this._accountService.onDidLogin(() => {
        this.restoreInviteJoinDialog();
      }),
    );
  }
}
V = o.Cg(
  [
    o.Qj(0, l.ICommercialTeamWorkspaceService),
    o.Qj(1, m.Ot),
    o.Qj(2, I_1),
    o.Qj(3, p._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ICommercialTeamWorkspaceServiceType === "undefined"
        ? Object
        : ICommercialTeamWorkspaceServiceType,
      typeof INotificationServiceType === "undefined"
        ? Object
        : INotificationServiceType,
      typeof ITeamManagementAccountAdapterType === "undefined"
        ? Object
        : ITeamManagementAccountAdapterType,
      typeof IContainerServiceType === "undefined"
        ? Object
        : IContainerServiceType,
    ]),
  ],
  V,
);
