import i from "NY";
import n from "oa";
import a from "bk";
import o from "z8";
import "HZH";
import "M2c";
import "WJ";
import s from "I7V";
import c from "k7J";
import l from "gei";
import d from "cO";
import u from "bT";
import _p from "xb";
import h from "gY";
import v from "MK";
import _ from "wF";
import y from "M8X";
import g from "k6";
import b from "bo";
import f from "p21";
import x from "yw";
import P from "A6R";
import C from "hr";
import S from "sX9";
import A from "oBs";
import { A as A_1 } from "./module-ATq.js";
import I from "db";
import { S as S_1 } from "./module-fGo.js";
import w from "Iv";
import N from "gLs";
import M from "m3t";
import { U as U_1 } from "./module-Yex.js";
import { Mg } from "./module-Zap.js";
import * as O from "./module-pIJ.js";
import "L6K";
import L from "olf";
import W from "MWC";
export { g as gv } from "./module-Yex.js";
const E = [
  {
    value: w.Ce.NOT_LIMITED,
    label: () => v.Ay.t("dre_m10n_credits_all", {}, "All"),
  },
  {
    value: w.Ce.CONSUMED,
    label: () => v.Ay.t("dre_m10n_credits_used", {}, "消耗"),
  },
  {
    value: w.Ce.ISSUED,
    label: () => v.Ay.t("dre_m10n_credits_gained", {}, "获得"),
  },
];
const $ = u.memo(function (e) {
  const { value, onChange } = e;
  const i = E.find((e) => e.value === value);
  return o.jsx(L.A, {
    className: A_1.historyTypeSelect,
    size: "default",
    value,
    onChange,
    triggerProps: {
      position: "bl",
      containerScrollToClose: true,
      className: A_1.historyTypeSelectPopup,
    },
    dropdownMenuClassName: A_1.historyTypeSelectMenu,
    defaultActiveFirstOption: false,
    renderFormat: () => {
      if (i == null) {
        return undefined;
      }
      return i.label();
    },
    children: E.map((e) =>
      o.jsx(
        L.A.Option,
        {
          value: e.value,
          children: o.jsxs("span", {
            className: A_1.historyTypeSelectOptionContent,
            children: [
              o.jsx("span", {
                className: A_1.historyTypeSelectOptionLabel,
                children: e.label(),
              }),
              value === e.value &&
                o.jsx(x.iWP, {
                  className: A_1.historyTypeSelectCheckIcon,
                }),
            ],
          }),
        },
        e.value,
      ),
    ),
  });
});
const B = {
  team_type: "personal",
};
var D = (e) => {
  var t;
  var {
    historyList,
    loading,
    hasMore,
    showTeamMemberInfo = false,
    presentation = "list",
    onLocateHistoryRecord,
  } = e;
  var p = _.h(N.o);
  var y = presentation === "table";
  var content = v.Ay.t(
    "web_m10n_anchor_tooltip_find_in_chat",
    {},
    "Find in session",
  );
  if (!(historyList == null ? undefined : historyList.length) && loading) {
    return o.jsx(c.A, {
      className: A_1.spin,
      size: 24,
    });
  }
  if (h.A(historyList) || historyList.length === 0) {
    return o.jsxs("div", {
      className: A_1.placeholder,
      children: [
        o.jsx("div", {
          className: A_1.placeholderTitle,
          children: v.Ay.t(
            "dre_m10n_credits_empty_title",
            {},
            "No credit transactions yet",
          ),
        }),
        o.jsx("div", {
          className: A_1.placeholderText,
          children: v.Ay.t(
            "dre_m10n_credits_empty_desc",
            {},
            "When you consume or gain credits, the transaction will appear here.",
          ),
        }),
      ],
    });
  }
  t = new Map();
  var b = historyList.map((e) => {
    var r;
    var i;
    var n;
    var a;
    var o;
    var s;
    var c;
    s =
      (r =
        (i = (a = e.teamUserInfo) == null ? undefined : a.userId) != null
          ? i
          : (o = e.groupUserInfo) == null
            ? undefined
            : o.userId) != null
        ? r
        : "";
    var l = JSON.stringify([
      e.submitId,
      e.historyType,
      e.tradeSource,
      !!e.isTriplets,
      e.createTime,
      s,
      e.amount,
      e.title,
      e.extraContent,
      (n = e.status) != null ? n : "",
    ]);
    var d = (c = t.get(l)) != null ? c : 0;
    t.set(l, d + 1);
    return "".concat(l, ":").concat(d);
  });
  var f = historyList.map((creditHistory, t) => {
    var r;
    var i;
    var { extraContent, title } = creditHistory;
    var teamMemberInfo = showTeamMemberInfo
      ? ((e) => {
          let t;
          let r;
          const i = (t = e.teamUserInfo) != null ? t : e.groupUserInfo;
          const displayName = [
            i == null ? undefined : i.nickName,
            i == null ? undefined : i.name,
            i == null ? undefined : i.userName,
            i == null ? undefined : i.userId,
          ].find((e) => !!(e == null ? undefined : e.trim()));
          if (displayName) {
            return {
              avatarUrl:
                (r = i == null ? undefined : i.avatarUrl) != null
                  ? r
                  : i == null
                    ? undefined
                    : i.avatar,
              displayName,
            };
          }
        })(creditHistory)
      : undefined;
    var items = Mg(creditHistory.subHistories);
    var d = creditHistory.historyType === 2 && items.length > 0;
    var bizRecordId =
      (i = creditHistory.bizExtra) == null || (r = i.bizRecordId) == null
        ? undefined
        : r.trim();
    var historyAmount = o.jsx(O.hp, {
      disabled: !d,
      items,
      popupZIndex: 1100,
      totalCredits: creditHistory.amount,
      children: o.jsxs("span", {
        className: _p(A_1.historyAmount, {
          [A_1.issued]: creditHistory.historyType === 1,
        }),
        children: [
          creditHistory.historyType === 1 ? "+" : "-",
          y ? creditHistory.amount.toLocaleString() : creditHistory.amount,
        ],
      }),
    });
    var historyTitle = o.jsxs(o.Fragment, {
      children: [
        v.Ay.t(title, {}, title),
        ((e) => {
          var { creditHistory, debugShowCommercialComponentText } = e;
          var { isTriplets, historyType, status } = creditHistory;
          if (!debugShowCommercialComponentText || historyType !== 2) {
            return "";
          }
          var o =
            {
              Init: "未核销",
              Checked: "已核销",
              CheckFailed: "已退还",
              Cancelled: "已取消",
            }["".concat(status)] || "";
          return `【${isTriplets ? "组件化预扣" : "非组件化预扣"}`.concat(
            o ? ",".concat(o) : "",
            "】",
          );
        })({
          creditHistory,
          debugShowCommercialComponentText: p.debugShowCommercialComponentText,
        }),
      ],
    });
    return {
      creditHistory,
      extraContent,
      historyAmount,
      historyTitle,
      bizRecordId,
      key: b[t],
      teamMemberInfo,
    };
  });
  if (y) {
    return o.jsxs(o.Fragment, {
      children: [
        o.jsxs("table", {
          className: A_1.creditHistoryTable,
          children: [
            o.jsx("thead", {
              children: o.jsxs("tr", {
                className: A_1.tableHeader,
                children: [
                  o.jsx("th", {
                    className: A_1.tableNameCell,
                    scope: "col",
                    children: v.Ay.t(
                      "web_m10n_credits_detail_header_item",
                      {},
                      "名称/内容",
                    ),
                  }),
                  o.jsx("th", {
                    className: A_1.tableDateCell,
                    scope: "col",
                    children: v.Ay.t(
                      "web_m10n_credits_detail_header_date",
                      {},
                      "日期",
                    ),
                  }),
                  o.jsx("th", {
                    className: A_1.tableAmountCell,
                    scope: "col",
                    children: v.Ay.t(
                      "web_m10n_credits_detail_header_credtits",
                      {},
                      "积分",
                    ),
                  }),
                ],
              }),
            }),
            o.jsx("tbody", {
              children: f.map((e) => {
                var {
                  bizRecordId,
                  creditHistory,
                  extraContent,
                  historyAmount,
                  historyTitle,
                  key,
                } = e;
                return o.jsxs(
                  "tr",
                  {
                    className: A_1.tableRow,
                    children: [
                      o.jsx("td", {
                        className: A_1.tableNameCell,
                        children: o.jsxs("div", {
                          className: A_1.tableNameContent,
                          children: [
                            o.jsx("span", {
                              className: A_1.tableNameText,
                              children: historyTitle,
                            }),
                            bizRecordId &&
                              onLocateHistoryRecord &&
                              o.jsx(s.A, {
                                content,
                                position: "top",
                                children: o.jsx("button", {
                                  "aria-label": content,
                                  className: A_1.historyLocateButton,
                                  "data-biz-record-id": bizRecordId,
                                  onClick: () => {
                                    onLocateHistoryRecord(bizRecordId);
                                  },
                                  type: "button",
                                  children: o.jsx(x.xoh, {}),
                                }),
                              }),
                          ],
                        }),
                      }),
                      o.jsx("td", {
                        className: A_1.tableDateCell,
                        children: C.i(
                          "yyyy-MM-dd hh:mm",
                          1000 * creditHistory.createTime,
                        ),
                      }),
                      o.jsx("td", {
                        className: A_1.tableAmountCell,
                        children: o.jsxs("div", {
                          className: A_1.tableAmountContent,
                          children: [
                            historyAmount,
                            extraContent &&
                              o.jsx("div", {
                                className: A_1.tableExtraContent,
                                children: v.Ay.t(
                                  extraContent,
                                  {},
                                  extraContent,
                                ),
                              }),
                          ],
                        }),
                      }),
                    ],
                  },
                  key,
                );
              }),
            }),
          ],
        }),
        !hasMore &&
          o.jsx("div", {
            className: _p(A_1.noMoreContent, A_1.tableNoMoreContent),
            children: v.Ay.t(
              "dre_m10n_credit_balance_end",
              {},
              "You’ve reached the end",
            ),
          }),
      ],
    });
  }
  return o.jsxs("div", {
    className: A_1.creditHistory,
    children: [
      f.map((e) => {
        var {
          creditHistory,
          extraContent,
          historyAmount,
          historyTitle,
          key,
          teamMemberInfo,
        } = e;
        return o.jsxs(
          "div",
          {
            className: A_1.historyItem,
            children: [
              o.jsxs("div", {
                children: [
                  o.jsx("div", {
                    className: A_1.historyTitle,
                    children: historyTitle,
                  }),
                  o.jsx("div", {
                    className: A_1.historyTime,
                    children: C.i(
                      "yyyy-MM-dd hh:mm",
                      1000 * creditHistory.createTime,
                    ),
                  }),
                ],
              }),
              o.jsxs("div", {
                className: A_1.historyAmountWrapper,
                children: [
                  o.jsxs("div", {
                    className: _p(A_1.historyAmountRow, {
                      [A_1.withTeamMemberInfo]: !!teamMemberInfo,
                    }),
                    children: [
                      teamMemberInfo &&
                        o.jsxs("div", {
                          className: A_1.historyMemberInfo,
                          children: [
                            o.jsx("span", {
                              className: A_1.historyMemberAvatarWrapper,
                              children: o.jsx(M.e, {
                                enableClick: false,
                                className: A_1.historyMemberAvatar,
                                src: d.m(teamMemberInfo.avatarUrl, null, {
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
                                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWTIx$2EyRll$WFJo%jJ4NlpF-z$l$1Z%T$hSa%1sSm9Za001-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ",
                                }),
                                alt: teamMemberInfo.displayName,
                              }),
                            }),
                            o.jsx("div", {
                              className: A_1.historyMemberName,
                              children: teamMemberInfo.displayName,
                            }),
                          ],
                        }),
                      historyAmount,
                    ],
                  }),
                  extraContent &&
                    o.jsx("div", {
                      className: A_1.extraContent,
                      children: v.Ay.t(extraContent, {}, extraContent),
                    }),
                ],
              }),
            ],
          },
          key,
        );
      }),
      !hasMore &&
        o.jsx("div", {
          className: A_1.noMoreContent,
          children: v.Ay.t(
            "dre_m10n_credit_balance_end",
            {},
            "You’ve reached the end",
          ),
        }),
    ],
  });
};
export { D as u };
export var T7 = (e) => {
  var t;
  var {
    containerService,
    showBackBtn,
    onClose,
    onBeforeLocateNavigate,
    forceTheme,
  } = e;
  var h = y.cQ(containerService, w.sG);
  var x = _.h(N.o);
  var CRef = u.useRef(false);
  var [j, setJ] = u.useState();
  var FRef = u.useRef({
    all: false,
    consume: false,
    get: false,
  });
  var {
    creditInfo,
    creditsDetail,
    historyType,
    loadingCreditHistory,
    creditHistoryList,
  } =
    (t = f.F(h, (e) => ({
      creditInfo: e.creditInfo,
      creditsDetail: e.creditsDetail,
      creditHistoryList: e.creditHistoryList,
      historyType: e.historyType,
      loadingCreditHistory: e.loadingCreditHistory,
    }))) != null
      ? t
      : {};
  var onChange = u.useCallback(
    (e) => {
      if (h) {
        g.RE((t) => h.changeHistoryType(t, e, false), {
          contextType: b.EL.UserInput,
          processName: "CreditHistoryModal",
          operationName: "handleTabChange",
        });
      }
      if (j != null) {
        j.scrollTo({
          top: 0,
        });
      }
      if (e !== w.Ce.CONSUMED || FRef.current.consume) {
        if (!(e !== w.Ce.ISSUED || FRef.current.get)) {
          S.c(
            containerService,
            a._(n._({}, B), {
              tab: "get",
            }),
          );
          FRef.current.get = true;
        }
      } else {
        S.c(
          containerService,
          a._(n._({}, B), {
            tab: "consume",
          }),
        );
        FRef.current.consume = true;
      }
    },
    [h, containerService, j],
  );
  var onReachEnd = u.useCallback(() => {
    if (h == null ? undefined : h.hasMoreCreditHistory()) {
      if (h != null) {
        h.loadMoreCreditHistory(b.p3());
      }
    }
  }, [h]);
  var onScroll = A.W({
    scrollElement: j,
    dep: creditHistoryList,
    onReachEnd,
    triggerLimit: 400,
  });
  var ref = u.useCallback((e) => {
    setJ(e != null ? e : undefined);
  }, []);
  var hasMore = h == null ? undefined : h.hasMoreCreditHistory();
  var X = u.useCallback(
    (e) =>
      i._(function* () {
        const x_locateAgentHistoryRecord = x.locateAgentHistoryRecord;
        if (x_locateAgentHistoryRecord && !CRef.current) {
          CRef.current = true;
          try {
            yield x_locateAgentHistoryRecord(e, {
              onBeforeNavigate: () => {
                if (onClose != null) {
                  onClose();
                }
                if (onBeforeLocateNavigate != null) {
                  onBeforeLocateNavigate();
                }
              },
            });
          } catch (e) {
            W.p.warning(
              v.Ay.t(
                "web_m10n_chat_deleted_toast",
                {},
                "对话结果被删除，无法定位",
              ),
            );
          } finally {
            CRef.current = false;
          }
        }
      })(),
    [x, onBeforeLocateNavigate, onClose],
  );
  u.useEffect(
    () => () => {
      h.resetHistoryData();
    },
    [h],
  );
  u.useEffect(() => {
    if (!FRef.current.all) {
      S.c(
        containerService,
        a._(n._({}, B), {
          tab: "all",
        }),
      );
      FRef.current.all = true;
    }
  }, [containerService]);
  var G = I.W();
  return o.jsxs("div", {
    className: _p(
      A_1.creditHistoryModal,
      forceTheme === "light" && "lv-theme-force_light",
      forceTheme === "light" && A_1.standaloneLightTheme,
      forceTheme === "dark" && "lv-theme-force_dark",
      forceTheme === "dark" && A_1.standaloneDarkTheme,
    ),
    children: [
      o.jsxs("div", {
        className: A_1.action,
        children: [
          showBackBtn
            ? o.jsxs("div", {
                className: A_1.backBtn,
                onClick: onClose,
                children: [
                  o.jsx(P.tqM, {
                    className: A_1.backBtnIcon,
                  }),
                  o.jsx("span", {
                    children: v.Ay.t("dre_m10n_payment_back", {}, "Back"),
                  }),
                ],
              })
            : o.jsx("div", {
                className: A_1.modalTitle,
                children: v.Ay.t(
                  "web_m10n_credits_detail_popup_title",
                  {},
                  "积分详情",
                ),
              }),
          !showBackBtn &&
            o.jsx("div", {
              className: A_1.closeBtn,
              onClick: onClose,
              children: o.jsx(P.CX2, {
                className: A_1.closeBtnIcon,
              }),
            }),
        ],
      }),
      o.jsxs("div", {
        className: A_1.personalContent,
        ref,
        onScroll,
        children: [
          o.jsx(U_1, {
            creditInfo,
            creditsDetail,
            forceTheme,
          }),
          o.jsxs("div", {
            className: A_1.historyToolbar,
            children: [
              o.jsx($, {
                value: historyType,
                onChange,
              }),
              o.jsxs("div", {
                className: A_1.historyTips,
                children: [
                  o.jsx("span", {
                    children: v.Ay.t(
                      "dre_m10n_credits_delay",
                      {},
                      "数据更新可能有延时",
                    ),
                  }),
                  o.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: d.m(G, null, {
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
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWTIx$2EyRll$WFJo%jJ4NlpF-z$l$1Z%T$hSa%1sSm9Za001-0dKdF$te*xRel$3WXpOb2FHTnRaREZqZHowOQ",
                    }),
                    className: A_1.creditRules,
                    children: v.Ay.t(
                      "dre_m10n_purchase_credits_rules",
                      {},
                      "积分规则",
                    ),
                  }),
                ],
              }),
            ],
          }),
          o.jsx("div", {
            className: _p(
              A_1.creditHistoryWrapper,
              A_1.personalCreditHistoryTableWrapper,
            ),
            children: o.jsx(D, {
              historyList: creditHistoryList,
              loading: loadingCreditHistory,
              hasMore,
              onLocateHistoryRecord: x.locateAgentHistoryRecord ? X : undefined,
              presentation: "table",
            }),
          }),
        ],
      }),
    ],
  });
};
export function Yl(e) {
  const { containerService, forceTheme, onBeforeLocateNavigate, onAfterClose } =
    e;
  const s = y.cQ(containerService, w.sG);
  g.RE(
    (e) =>
      i._(function* () {
        yield Promise.all([
          s.changeHistoryType(e, w.Ce.NOT_LIMITED),
          s.syncHistoryData(e, w.Ce.CONSUMED),
          s.syncHistoryData(e, w.Ce.ISSUED),
        ]);
      })(),
    {
      contextType: b.EL.Task,
      processName: "CreditHistoryModal",
      operationName: "showCreditHistoryModal",
    },
  );
  s.syncRemoteCreditHistory();
  var c = l.A.confirm({
    title: null,
    footer: null,
    icon: null,
    simple: true,
    closable: false,
    maskClosable: true,
    maskStyle: S_1(8),
    afterClose: onAfterClose,
    wrapClassName: _p(
      A_1.creditHistoryModalWrapper,
      forceTheme === "light" && "lv-theme-force_light",
      forceTheme === "light" && A_1.standaloneLightTheme,
      forceTheme === "dark" && "lv-theme-force_dark",
      forceTheme === "dark" && A_1.standaloneDarkTheme,
    ),
    content: o.jsx(_.Z, {
      instantiationService: containerService,
      children: o.jsx(T7, {
        onClose: () => c.close(),
        onBeforeLocateNavigate,
        containerService,
        forceTheme,
      }),
    }),
  });
  return c;
}
