import n from "NY";
import t from "z8";
import "L6K";
import "WJ";
import "Sm";
import "lUC";
import a from "olf";
import o from "gei";
import l from "Ce";
import s from "se";
import c from "cO";
import u from "bT";
import d from "SJ";
import m from "yw";
import p from "A6R";
import v from "p21";
import g from "X5";
import _ from "bo";
import h from "wF";
import b from "JSz";
import y from "vUs";
import f from "pf";
import M from "CFa";
import T from "h4d";
import N from "JZn";
import x from "Ek";
import I from "m3t";
import j from "MWC";
import A from "MK";
import C from "Iv";
function k(e) {
  if (e != null && Number.isFinite(e) && !(e <= 0)) {
    return Math.floor(e);
  }
}
function w(e) {
  const { amount, availableCredit } = e;
  const n = k(amount);
  if (n) {
    if (n > Math.max(availableCredit, 0)) {
      return "amount_over_limit";
    }
    return undefined;
  }
  return "amount_required";
}
function D(e) {
  const {
    selectedMemberId,
    selectedMember,
    amount,
    availableCredit,
    canAllocate = true,
  } = e;
  if (canAllocate) {
    if (selectedMemberId && selectedMember) {
      return w({
        amount,
        availableCredit,
      });
    }
    return "member_required";
  }
  return "permission_required";
}
const S = "points-input-ScjTZd";
const E = "member-option-avatar-wrapper-XIgoW9";
const z = "member-option-avatar-yWGfNM";
const R = "member-option-name-HDZvSw";
function O(e, r) {
  return {
    memberId: e.userId,
    displayName: e.nickname || e.userId,
    avatarUrl: e.avatar,
    role: x.OR(e.role),
    isSelf: e.userId === r,
  };
}
function P(e, memberFilter) {
  if (memberFilter) {
    return e.filter(memberFilter);
  }
  return e;
}
function L(e, r) {
  return (
    e.account.accountKey === r.account.accountKey && e.version === r.version
  );
}
function F() {
  return A.Ay.t("web_team_allocate_points_failed", {}, "分配失败，请重试");
}
function W() {
  return A.Ay.t(
    "web_team_allocate_points_member_placeholder",
    {},
    "请选择要分配的成员",
  );
}
function useU(e) {
  let r;
  let i;
  const {
    initialSelectedMemberId,
    initialTeamMembers,
    initialTeamMembersSourceTeamId,
    memberFilter,
    visible,
    onAction,
    onClose,
    onSuccess,
  } = e;
  const { userProfile } = T.o();
  const J =
    (r = userProfile == null ? undefined : userProfile.uid) != null ? r : "";
  const Q = h.h(g.ICommercialTeamWorkspaceService);
  const H = h.h(y.jP);
  const Y = h.h(C.sG);
  const { currentAccount } = v.F(Y, (e) => ({
    currentAccount: e.currentAccount,
  }));
  const [K, setK] = u.useState();
  const G = u.useMemo(() => {
    if (K != null) {
      return K;
    }
    return 0;
  }, [K]);
  const canAllocate =
    ((i = currentAccount.capability) == null
      ? undefined
      : i.canAllocateTeamCredit) === true;
  const er =
    currentAccount.accountType === "team" ? currentAccount.teamId : undefined;
  const [ei, setEi] = u.useState([]);
  const [et, setEt] = u.useState(false);
  const [eo, setEo] = u.useState();
  const [es, setEs] = u.useState();
  const [eu, setEu] = u.useState(false);
  const emRef = u.useRef(0);
  const epRef = u.useRef(false);
  const ev = u.useMemo(() => {
    var e;
    var prefix;
    var i;
    e = String(G);
    if (
      (i = (prefix = A.Ay.t(
        "web_team_allocate_points_available",
        {
          available_points: G,
        },
        "剩余可分配积分：{available_points}",
      )).indexOf(e)) < 0
    ) {
      return {
        prefix,
        value: "",
        suffix: "",
      };
    }
    return {
      prefix: prefix.slice(0, i),
      value: e,
      suffix: prefix.slice(i + e.length),
    };
  }, [G]);
  const selectedMember = u.useMemo(
    () => ei.find((e) => e.memberId === eo),
    [ei, eo],
  );
  const e_ = D({
    selectedMemberId: eo,
    selectedMember,
    amount: es,
    availableCredit: G,
    canAllocate,
  });
  const error =
    w({
      amount: es,
      availableCredit: G,
    }) === "amount_over_limit";
  const disabled = eu || !!e_;
  const ey = u.useMemo(() => {
    if (
      er &&
      er === initialTeamMembersSourceTeamId &&
      (initialTeamMembers == null ? undefined : initialTeamMembers.length)
    ) {
      var e = P(initialTeamMembers, memberFilter);
      if (e.length) {
        return e.map((e) => O(e, J));
      }
      return undefined;
    }
  }, [er, J, initialTeamMembers, initialTeamMembersSourceTeamId, memberFilter]);
  const ef = u.useCallback(
    () =>
      n._(function* () {
        const e = ++emRef.current;
        if (!er) {
          setEi([]);
          setEt(false);
          return;
        }
        setEt(true);
        const r = yield Q.refreshMembers({
          teamId: er,
          cursor: "0",
          count: 50,
        });
        if (e === emRef.current) {
          setEt(false);
          if (!r.ok) {
            return void j.p.error(r.msg || "成员列表获取失败，请重试");
          }
          const i = P(r.value.list, memberFilter).map((e) => O(e, J));
          if (
            memberFilter &&
            i.length === 0 &&
            (ey == null ? undefined : ey.length)
          ) {
            return void setEi(ey);
          }
          setEi(i);
        }
      })(),
    [er, J, ey, memberFilter, Q],
  );
  u.useEffect(() => {
    var e = visible && !epRef.current;
    epRef.current = visible;
    if (e) {
      if (onAction != null) {
        onAction("show");
      }
    }
  }, [onAction, visible]);
  u.useEffect(() => {
    setEo(undefined);
    setEs(undefined);
    setEi([]);
  }, [er]);
  u.useEffect(() => {
    if (ey) {
      setEi(ey);
    }
    ef();
  }, [ef, ey]);
  u.useEffect(() => {
    var e =
      !!initialSelectedMemberId &&
      er === initialTeamMembersSourceTeamId &&
      ei.some((e) => e.memberId === initialSelectedMemberId);
    setEo((r) => {
      if (r && ei.some((e) => e.memberId === r)) {
        return r;
      }
      if (e) {
        return initialSelectedMemberId;
      }
    });
  }, [er, initialSelectedMemberId, initialTeamMembersSourceTeamId, ei]);
  const eM = u.useCallback(
    () =>
      n._(function* () {
        const e = yield H.fetchUserCredit(_.p3(), {
          queryScope: f.KL.TeamPool,
        });
        if (e.ok) {
          setK(f.$R(e.value));
        }
        return e;
      })(),
    [H],
  );
  u.useEffect(() => {
    setK(undefined);
    if (visible && er) {
      eM();
    }
  }, [er, eM, visible]);
  const renderFormat = u.useCallback(() => {
    if (selectedMember) {
      return t.jsxs("div", {
        className: "member-format-h3XbRK",
        children: [
          t.jsx("span", {
            className: E,
            children: t.jsx(I.e, {
              enableClick: false,
              className: z,
              src: c.m(selectedMember.avatarUrl, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: true,
                bid: "cc_dreamina",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: false,
                escapeRule: "escape-report",
                reportUrl:
                  "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                htmlparserOptions: "{}",
                scmBranch: "-",
                scmName: "-",
                scmVersion: "-",
                webpackPluginVersion: "3.6.0",
                filename:
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*t3$2xkR2RFeFh%bmxh$jFKd1pFTXhhR0pIZ%haWk1rWXdZ$mM1ZF$4WE1-WmFSMFp6$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
              }),
              alt: selectedMember.displayName,
            }),
          }),
          t.jsx("span", {
            className: R,
            children: selectedMember.displayName,
          }),
        ],
      });
    }
    return t.jsx("span", {
      className: "placeholder-bJCCPl",
      children: W(),
    });
  }, [selectedMember]);
  const eN = u.useCallback((e) => {
    setEo(e);
  }, []);
  const ex = u.useCallback((e) => {
    setEs(k(e));
  }, []);
  const eI = u.useCallback(
    (e) =>
      n._(function* () {
        const r = yield H.fetchUserCredit(_.p3(), {
          queryScope: f.KL.Member,
        });
        if (r.ok) {
          if (!L(Y.getCurrentAccountSnapshot(), e)) {
            return;
          }
          Y.updateCreditInfo(
            r.value.credit,
            r.value.creditsDetail,
            r.value.expiringCredits,
            e.account.accountKey,
            e.version,
          );
          Y.resetHistoryData();
        }
      })(),
    [Y, H],
  );
  const ej = u.useCallback(
    () =>
      n._(function* () {
        if (!eu) {
          if (onAction != null) {
            onAction("confirm");
          }
          if (
            D({
              selectedMemberId: eo,
              selectedMember,
              amount: es,
              availableCredit: G,
              canAllocate,
            })
          ) {
            return void j.p.error(F());
          }
          const amount = k(es);
          if (er && eo && amount) {
            setEu(true);
            const r = Y.getCurrentAccountSnapshot();
            const request_id = b.bz();
            if (
              !(yield H.allocateTeamCredit(_.p3(), {
                team_id: er,
                to_uid: eo,
                amount,
                request_id,
              })).ok
            ) {
              yield eM();
              j.p.error(F());
              setEu(false);
              return;
            }
            const n = Y.getCurrentAccountSnapshot();
            if (
              (selectedMember == null ? undefined : selectedMember.isSelf) &&
              L(n, r)
            ) {
              Y.syncRemoteCreditHistory();
            }
            yield Promise.all([
              eM(),
              eI(r),
              onSuccess == null ? undefined : onSuccess(),
            ]);
            j.p.success(
              A.Ay.t("web_team_allocate_points_success", {}, "分配成功"),
            );
            onClose();
          }
        }
      })(),
    [
      es,
      G,
      canAllocate,
      Y,
      er,
      H,
      onAction,
      onClose,
      onSuccess,
      eo,
      selectedMember,
      eu,
      eI,
      eM,
    ],
  );
  const eA = u.useCallback(() => {
    if (onAction != null) {
      onAction("cancel");
    }
    onClose();
  }, [onAction, onClose]);
  const eC = u.useCallback(() => {
    if (onAction != null) {
      onAction("close");
    }
    onClose();
  }, [onAction, onClose]);
  return t.jsx(o.A, {
    visible,
    title: null,
    footer: null,
    closable: false,
    maskClosable: true,
    simple: false,
    className: "team-credit-allocation-modal-dRiYzF",
    wrapClassName: "team-credit-allocation-modal-wrapper-Ei2KZF",
    maskStyle: {
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
    onCancel: eC,
    children: t.jsxs("div", {
      className: "allocation-container-wQoJJ3",
      children: [
        t.jsxs("div", {
          className: "header-BXljT_",
          children: [
            t.jsx("div", {
              className: "header-title-lIjCPb",
              children: A.Ay.t(
                "web_team_allocate_points_to_member_title",
                {},
                "分配积分到成员",
              ),
            }),
            t.jsx("button", {
              className: "close-button-ThYyel",
              type: "button",
              "aria-label": "关闭",
              onClick: eC,
              children: t.jsx(p.CX2, {
                className: "close-icon-esilHJ",
              }),
            }),
          ],
        }),
        t.jsxs("div", {
          className: "content-cU_Z90",
          children: [
            t.jsxs("div", {
              className: "remaining-points-section-yzabRT",
              children: [
                ev.prefix
                  ? t.jsx("span", {
                      className: "remaining-points-label-BfnoUI",
                      children: ev.prefix,
                    })
                  : null,
                ev.value
                  ? t.jsxs("span", {
                      className: "remaining-points-value-wrapper-ExAjBE",
                      children: [
                        t.jsx(m.mC1, {
                          className: "points-icon-g88ZvL",
                          size: 14,
                        }),
                        t.jsx("span", {
                          className: "remaining-points-value-Dryxtk",
                          children: ev.value,
                        }),
                      ],
                    })
                  : null,
                ev.suffix
                  ? t.jsx("span", {
                      className: "remaining-points-suffix-jvGYF3",
                      children: ev.suffix,
                    })
                  : null,
              ],
            }),
            t.jsxs("div", {
              className: "allocation-input-section-TsBD6G",
              children: [
                t.jsx(a.A, {
                  className: "member-select-a98cjK",
                  value: eo,
                  loading: et,
                  disabled: et || eu,
                  placeholder: W(),
                  renderFormat,
                  triggerProps: {
                    className: "member-dropdown-popup-j2QZcD",
                  },
                  dropdownMenuClassName: "member-dropdown-menu-cAZVEM",
                  onChange: eN,
                  notFoundContent: t.jsx("div", {
                    className: "empty-ldbuoW",
                    children: "暂无可分配成员",
                  }),
                  children: ei.map((e) =>
                    t.jsxs(
                      a.A.Option,
                      {
                        value: e.memberId,
                        disabled: !!e.disabledReason,
                        className: "member-option-BImkWa",
                        children: [
                          t.jsx("span", {
                            className: E,
                            children: t.jsx(I.e, {
                              enableClick: false,
                              className: z,
                              src: c.m(e.avatarUrl, null, {
                                logType: "js.href/src",
                                reportOnly: "false",
                                blackConfig: "{}",
                                configMode: "merge",
                                isCloseSSRReport: true,
                                bid: "cc_dreamina",
                                region: "cn",
                                urlLimit: "-1",
                                htmlLimit: "-1",
                                isSaveValidUrl: false,
                                isRuntimeLog: false,
                                isDOMParser: false,
                                escapeRule: "escape-report",
                                reportUrl:
                                  "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                                htmlparserOptions: "{}",
                                scmBranch: "-",
                                scmName: "-",
                                scmVersion: "-",
                                webpackPluginVersion: "3.6.0",
                                filename:
                                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*t3$2xkR2RFeFh%bmxh$jFKd1pFTXhhR0pIZ%haWk1rWXdZ$mM1ZF$4WE1-WmFSMFp6$ERKc2RWcEhWalJN-mxKNlp$ZEdl$m96$m5vPQ",
                              }),
                              alt: e.displayName,
                            }),
                          }),
                          t.jsx("span", {
                            className: R,
                            children: e.displayName,
                          }),
                        ],
                      },
                      e.memberId,
                    ),
                  ),
                }),
                t.jsx(l.A, {
                  className: error ? [S, "points-input-error-rozZwV"] : S,
                  value: es,
                  error,
                  min: 1,
                  precision: 0,
                  hideControl: true,
                  disabled: eu,
                  placeholder: A.Ay.t(
                    "web_team_allocate_points_input_placeholder",
                    {},
                    "请输入分配的积分数",
                  ),
                  onChange: ex,
                }),
              ],
            }),
            t.jsx("div", {
              className: "allocation-notice-RXjYWk",
              children: A.Ay.t(
                "web_team_allocate_points_tip",
                {},
                "温馨提示：分配后不可撤回，仅移除成员或团队过期,已分配余额可重新分配",
              ),
            }),
          ],
        }),
        t.jsxs("div", {
          className: "action-buttons-wrapper-_yurU3",
          children: [
            t.jsx(s.A, {
              className: "cancel-button-PquexL",
              onClick: eA,
              children: A.Ay.t("web_team_cancel", {}, "取消"),
            }),
            t.jsx(s.A, {
              className: "confirm-button-iSq6a3",
              type: "primary",
              disabled,
              loading: eu,
              onClick: ej,
              children: A.Ay.t(
                "web_team_allocate_points_confirm",
                {},
                "确认分配",
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
export { useU as y };
function V(e) {
  const {
    containerService,
    initialSelectedMemberId,
    initialTeamMembers,
    initialTeamMembersSourceTeamId,
    memberFilter,
    onAction,
    onSuccess,
  } = e;
  if (!containerService || typeof document === "undefined") {
    return null;
  }
  const c = document.createElement("div");
  document.body.appendChild(c);
  const u = d.H(c);
  const m = N.Y(containerService, M.u.TEAM_CREDIT_ALLOCATION_MODAL);
  let visible = true;
  let v = false;
  let g = false;
  let _ = () => undefined;
  const b = () => {
    if (!g) {
      g = true;
      u.unmount();
      c.remove();
      m.unmount();
    }
  };
  const y = () => {
    if (!v) {
      v = true;
      visible = false;
      _();
      setTimeout(b, 0);
    }
  };
  (_ = () => {
    u.render(
      t.jsx(h.Z, {
        instantiationService: containerService,
        children: t.jsx(useU, {
          initialSelectedMemberId,
          initialTeamMembers,
          initialTeamMembersSourceTeamId,
          memberFilter,
          onAction,
          visible,
          onClose: y,
          onSuccess,
        }),
      }),
    );
  })();
  m.onUnmount(y);
  return {
    close: y,
  };
}
export { V as j };
