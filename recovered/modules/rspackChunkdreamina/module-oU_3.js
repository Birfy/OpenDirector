import n from "oa";
import t from "bk";
import a from "z8";
import "EX";
import "WJ";
import o from "tK";
import l from "gei";
import s from "bT";
import _c from "xb";
import d from "A6R";
import m from "wF";
import p from "pf";
import v from "oBs";
import g from "MK";
import _ from "sX9";
import h from "Yex";
import b from "iAN";
import y from "NY";
import f from "bo";
import M from "vUs";
import T from "Iv";
import N from "ATq";
const x = {
  income: "get",
  consumption: "consume",
  allocation: "allocation",
};
function useI(e) {
  let r;
  let i;
  let l;
  const {
    containerService,
    queryScope = p.x8.Member,
    teamId,
    currentUserId,
    restrictToCurrentUser,
    reportParams,
    onClose,
    forceTheme,
  } = e;
  const [scrollElement, setScrollElement] = s.useState();
  const queryScope_1 =
    queryScope === p.x8.TeamPool ? p.x8.TeamPool : p.x8.Member;
  const z =
    queryScope_1 === p.x8.Member
      ? {
          dialogTitle: g.Ay.t(
            "web_team_personal_points_detail_dialog_title",
            {},
            "个人积分详情",
          ),
          remainingTitle: g.Ay.t(
            "web_team_personal_points_remaining_title",
            {},
            "个人剩余积分",
          ),
          purchaseCreditTitle: g.Ay.t(
            "web_team_personal_points_get_title",
            {},
            "被分配积分",
          ),
        }
      : {
          dialogTitle: g.Ay.t(
            "web_team_points_detail_dialog_title",
            {},
            "团队积分详情",
          ),
          remainingTitle: g.Ay.t(
            "web_team_points_remaining_title",
            {},
            "团队剩余积分",
          ),
        };
  const {
    creditInfo,
    creditsDetail,
    hasMore,
    historyList,
    category = "income",
    loading,
    loadMore,
    setCategory,
  } = ((e) => {
    const {
      queryScope,
      teamId,
      currentUserId,
      restrictToCurrentUser = false,
    } = e;
    const l = m.h(M.jP);
    const cRef = s.useRef(0);
    const uRef = s.useRef(0);
    const [d, setD] = s.useState("income");
    const [g, setG] = s.useState([]);
    const [creditInfo_1, setCreditInfo] = s.useState();
    const [creditsDetail_1, setN] = s.useState();
    const [I, setI] = s.useState("");
    const [A, setA] = s.useState(true);
    const [k, setK] = s.useState(false);
    const D = s.useCallback(
      () =>
        y._(function* () {
          const e = uRef.current + 1;
          uRef.current = e;
          if (!teamId) {
            setCreditInfo(undefined);
            setN(undefined);
            return;
          }
          const n = yield l.fetchUserCredit(f.p3(), {
            queryScope,
            teamId,
          });
          if (uRef.current === e) {
            if (!n.ok) {
              setCreditInfo(undefined);
              setN(undefined);
              return;
            }
            setCreditInfo(n.value.credit);
            setN(n.value.creditsDetail);
          }
        })(),
      [l, queryScope, teamId],
    );
    const S = s.useCallback(
      (e) => {
        var { ctx, nextCategory, nextCursor, reset } = e;
        return y._(function* () {
          let e;
          const v = cRef.current + 1;
          cRef.current = v;
          if (!teamId || (restrictToCurrentUser && !currentUserId)) {
            setG([]);
            setA(false);
            setK(false);
            return;
          }
          setK(true);
          const g = yield l.fetchUserCreditHistory(
            ctx,
            ((e) => {
              const {
                queryScope,
                historyType,
                teamId,
                needWithHold,
                needAllUsers,
                cursor,
              } = e;
              return t._(
                n._(
                  {
                    count: 20,
                    cursor,
                    historyType:
                      historyType === undefined
                        ? undefined
                        : historyType === T.Ce.CONSUMED
                          ? 2
                          : historyType === T.Ce.ISSUED
                            ? 1
                            : undefined,
                  },
                  teamId
                    ? {
                        teamId,
                      }
                    : {},
                  needWithHold !== undefined
                    ? {
                        needWithHold,
                      }
                    : {},
                  needAllUsers !== undefined
                    ? {
                        needAllUsers,
                      }
                    : {},
                ),
                {
                  queryScope,
                },
              );
            })({
              queryScope: ((e) => {
                switch (e) {
                  case "income":
                    return p.x8.TeamIncome;
                  case "consumption":
                    return p.x8.TeamConsumption;
                  case "allocation":
                    return p.x8.TeamAllocation;
                }
              })(nextCategory),
              teamId,
              needWithHold: true,
              needAllUsers: queryScope !== p.KL.Member && undefined,
              cursor: nextCursor,
            }),
          );
          if (cRef.current === v) {
            setK(false);
            if (!g.ok) {
              return void setA(false);
            }
            const h = (e = g.value.newCursor) != null ? e : "";
            const b = restrictToCurrentUser
              ? g.value.records.filter((e) => {
                  var r;
                  var i;
                  var n;
                  var t;
                  var o;
                  var l;
                  var s;
                  var c;
                  var u =
                    (r =
                      (i =
                        (n =
                          (t = e.userId) != null
                            ? t
                            : (o = e.groupUserInfo) == null
                              ? undefined
                              : o.uid) != null
                          ? n
                          : (l = e.groupUserInfo) == null
                            ? undefined
                            : l.userId) != null
                        ? i
                        : (s = e.teamUserInfo) == null
                          ? undefined
                          : s.uid) != null
                      ? r
                      : (c = e.teamUserInfo) == null
                        ? undefined
                        : c.userId;
                  return u !== undefined && String(u) === currentUserId;
                })
              : g.value.records;
            setI(h);
            setA(g.value.hasMore && !!h.trim() && h !== nextCursor);
            setG((e) => {
              if (reset) {
                return b;
              }
              return [...e, ...b];
            });
          }
        })();
      },
      [currentUserId, l, queryScope, restrictToCurrentUser, teamId],
    );
    s.useEffect(() => {
      setG([]);
      setI("");
      setA(true);
      S({
        ctx: f.p3(),
        nextCategory: d,
        nextCursor: "",
        reset: true,
      });
      return () => {
        cRef.current += 1;
      };
    }, [d, S]);
    s.useEffect(() => {
      setCreditInfo(undefined);
      setN(undefined);
      D();
      return () => {
        uRef.current += 1;
      };
    }, [D]);
    const loadMore_1 = s.useCallback(() => {
      if (!k && A && I.trim()) {
        S({
          ctx: f.p3(),
          nextCategory: d,
          nextCursor: I,
          reset: false,
        });
      }
    }, [d, I, S, A, k]);
    return {
      creditInfo: creditInfo_1,
      creditsDetail: creditsDetail_1,
      hasMore: A,
      historyList: g,
      category: d,
      loading: k,
      loadMore: loadMore_1,
      setCategory: setD,
    };
  })({
    queryScope: queryScope_1,
    teamId,
    currentUserId,
    restrictToCurrentUser,
  });
  const ZRef = s.useRef(new Set());
  const B = historyList.map((e) => {
    var r;
    var i;
    var a;
    var o;
    var l;
    var s;
    var c;
    var u;
    var d;
    var title;
    s =
      (l = (a = e.action) == null ? undefined : a.trim()) ===
        "member_manual_reclaim" || l === "member_auto_reclaim";
    c = l === "member_manual_allocate" || l === "member_auto_allocate";
    u =
      category === "consumption" ||
      (category === "allocation" &&
        (s || (!c && (e.amount < 0 || e.historyType === 2))));
    d = (r = e.groupUserInfo) != null ? r : e.teamUserInfo;
    title = ((o = e.title) == null ? undefined : o.trim()) || "--";
    if (category === "income") {
      title = ((e) => {
        switch (e) {
          case "TEAMS_VIP_GIFT":
            return g.Ay.t(
              "web_team_credit_history_source_subscription",
              {},
              "团队会员订阅",
            );
          case "ONE_OFF_PURCHASE":
            return g.Ay.t(
              "web_team_credit_history_source_recharge",
              {},
              "充值购买",
            );
          case "VIP_GIFT":
          case "ACTIVITY_GIFT":
          case "FREEMIUM_RECEIVE":
          case "REFUND":
          case "VIMO":
          case "UG_ACTIVITY":
            return g.Ay.t(
              "web_team_credit_history_source_gift",
              {},
              "积分赠送",
            );
          default:
            return "--";
        }
      })(e.tradeSource);
    } else if (category === "allocation") {
      title = ((e) => {
        switch (e) {
          case "member_manual_allocate":
            return g.Ay.t(
              "web_team_credit_history_manual_allocate",
              {},
              "手动分配",
            );
          case "member_auto_allocate":
            return g.Ay.t(
              "web_team_credit_history_auto_allocate",
              {},
              "自动分配",
            );
          case "member_manual_reclaim":
            return g.Ay.t(
              "web_team_credit_history_manual_reclaim",
              {},
              "手动回收",
            );
          case "member_auto_reclaim":
            return g.Ay.t(
              "web_team_credit_history_auto_reclaim",
              {},
              "自动回收",
            );
          default:
            return "--";
        }
      })(l);
    }
    return t._(n._({}, e), {
      amount: Math.abs(e.amount),
      extraContent: "",
      historyType: u ? 2 : 1,
      teamUserInfo: d
        ? t._(n._({}, d), {
            userId:
              (i = d.userId) != null
                ? i
                : d.uid === undefined
                  ? undefined
                  : String(d.uid),
          })
        : undefined,
      title,
    });
  });
  const $ =
    ((r = creditInfo == null ? undefined : creditInfo.vipCredit) != null
      ? r
      : 0) +
    ((i = creditInfo == null ? undefined : creditInfo.purchaseCredit) != null
      ? i
      : 0) +
    ((l = creditInfo == null ? undefined : creditInfo.giftCredit) != null
      ? l
      : 0);
  const J = s.useCallback(
    (tab) => {
      if (!ZRef.current.has(tab)) {
        _.c(
          containerService,
          t._(n._({}, reportParams), {
            tab,
          }),
        );
        ZRef.current.add(tab);
      }
    },
    [containerService, reportParams],
  );
  const onChange = s.useCallback(
    (e) => {
      setCategory(e);
      J(x[e]);
    },
    [J, setCategory],
  );
  const ref = s.useCallback((e) => {
    setScrollElement(e != null ? e : undefined);
  }, []);
  const onScroll = v.W({
    dep: historyList,
    scrollElement,
    onReachEnd: loadMore,
  });
  s.useEffect(() => {
    J("get");
  }, [J]);
  return a.jsxs("div", {
    className: "team-credit-history-modal-f1cl7w",
    children: [
      a.jsxs("div", {
        className: "action-gbW2SO",
        children: [
          a.jsx("div", {
            className: "modal-title-ol80Zm",
            children: z.dialogTitle,
          }),
          a.jsx("div", {
            className: "close-btn-cceKwN",
            onClick: onClose,
            children: a.jsx(d.CX2, {
              className: "close-btn-icon-bZKcfX",
            }),
          }),
        ],
      }),
      a.jsx("div", {
        className: "credit-info-section-oPesnv",
        children:
          queryScope_1 === p.x8.Member
            ? a.jsxs("div", {
                className: "personal-credit-summary-nStrbo",
                children: [
                  a.jsx("div", {
                    className: "personal-credit-summary-label-bPSALg",
                    children: z.remainingTitle,
                  }),
                  a.jsx("div", {
                    className: "personal-credit-summary-amount-dh2_7D",
                    children: $,
                  }),
                ],
              })
            : a.jsx(h.g, {
                creditInfo,
                creditsDetail,
                title: z.remainingTitle,
                purchaseCreditTitle: z.purchaseCreditTitle,
                forceTheme,
              }),
      }),
      a.jsxs("div", {
        className: "content-wrapper-fkCiZZ",
        ref,
        onScroll,
        children: [
          a.jsxs(o.A, {
            className: "tabs-lyOpYx",
            activeTab: category,
            onChange,
            renderTabTitle: (e) =>
              a.jsx("div", {
                className: "tab-title-wrapper-dvswFH",
                children: e,
              }),
            children: [
              a.jsx(
                o.A.TabPane,
                {
                  title: g.Ay.t(
                    "web_team_credit_history_tab_income",
                    {},
                    "入账",
                  ),
                },
                "income",
              ),
              a.jsx(
                o.A.TabPane,
                {
                  title: g.Ay.t("dre_m10n_credits_used", {}, "消耗"),
                },
                "consumption",
              ),
              a.jsx(
                o.A.TabPane,
                {
                  title: g.Ay.t(
                    "web_team_credit_history_tab_allocation",
                    {},
                    "调配",
                  ),
                },
                "allocation",
              ),
            ],
          }),
          a.jsx("div", {
            className: N.A.creditHistoryWrapper,
            children: a.jsx(b.u, {
              historyList: B,
              loading,
              hasMore,
              showTeamMemberInfo: true,
            }),
          }),
        ],
      }),
    ],
  });
}
export { useI as i };
function j(e) {
  const {
    containerService,
    queryScope,
    teamId,
    currentUserId,
    restrictToCurrentUser,
    forceTheme,
    onAfterClose,
  } = e;
  const reportParams = n._(
    {
      team_type: "team",
    },
    teamId
      ? {
          team_id: teamId,
        }
      : {},
  );
  var v = l.A.confirm({
    title: null,
    footer: null,
    icon: null,
    simple: true,
    closable: false,
    maskClosable: true,
    maskStyle: {
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
    afterClose: onAfterClose,
    wrapClassName: _c(
      "team-credit-history-modal-wrapper-EdVylj",
      forceTheme === "light" && "lv-theme-force_light",
      forceTheme === "light" && N.A.standaloneLightTheme,
      forceTheme === "dark" && "lv-theme-force_dark",
      forceTheme === "dark" && N.A.standaloneDarkTheme,
    ),
    content: a.jsx(m.Z, {
      instantiationService: containerService,
      children: a.jsx(useI, {
        containerService,
        queryScope,
        teamId,
        currentUserId,
        restrictToCurrentUser,
        reportParams,
        onClose: () => v.close(),
        forceTheme,
      }),
    }),
  });
  return v;
}
export { j as p };
