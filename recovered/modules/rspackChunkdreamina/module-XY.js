import n from "NY";
import t from "oa";
import a from "z8";
import "M2c";
import "WJ";
import o from "k7J";
import l from "gei";
import s from "bT";
import c from "ED";
import u from "xb";
import m from "X5";
import p from "rE6";
import v from "FP";
import g from "wF";
import _ from "M8X";
import h from "Kt";
import b from "QSq";
import y from "MWC";
import f from "CQu";
import M from "Vy9";
import T from "gLs";
import N from "bk";
import x from "yI";
import I from "Qn";
import W from "dw4";
const j = {
  light: {
    colors: N._(t._({}, v.gx.colors), {
      "text-brand": "#00CAE0",
      "component-primary-button-bg-default": "#000",
    }),
  },
  dark: {
    colors: N._(t._({}, v.My.colors), {
      "text-brand": "#00A1C2",
      "component-primary-button-bg-default": "#fff",
    }),
  },
};
const A =
  "https://lf3-c%dn-t%os.draf%tstatic.com/obj/ies-hotsoon-draft/vco/7f2123b2-0ccd-4673-9e42-90a0ed10a9d8.html".replace(
    /%/g,
    "",
  );
const C = {
  [I.InvoiceSelectionErrorCode.MIXED_PAYMENT_CHANNELS]:
    "对公转账订单不能与个人支付订单合并开票",
  [I.InvoiceSelectionErrorCode.DIFFERENT_PAYER_ACCOUNTS]:
    "多笔订单付款账户不一致，无法合并开票。请分开订单开票。",
  [I.InvoiceSelectionErrorCode.MULTIPLE_PAYER_BANK_ACCOUNTS]:
    "订单存在多账户名支付，无法自助开票。请联系人工客服",
  [I.InvoiceSelectionErrorCode.MISSING_PAYER_INFO]:
    "订单付款账户信息不完整，无法合并开票。请分开订单开票。",
  [I.InvoiceSelectionErrorCode.ORDER_BLOCKED]:
    "订单暂无法自助开票，请联系人工客服",
};
function k(e) {
  if (e === I.InvoiceType.electronicSpecial) {
    return "exclusive_ticket";
  }
  return "regular_ticket";
}
function w(e) {
  const r =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "submit";
  const i = I.validateInvoiceSelection(e, r);
  if (i) {
    return (
      (i.code === I.InvoiceSelectionErrorCode.ORDER_BLOCKED && i.blockReason) ||
      C[i.code]
    );
  }
}
const D = (e) =>
  e.length > 0 && e.every((e) => e.payChannel === "corporate_payment");
function S(applyRecords, r) {
  const i = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  if (!applyRecords.length) {
    return "请先选择需要开票的订单";
  }
  const n = w(applyRecords);
  if (n) {
    return n;
  }
  const t = D(applyRecords);
  if (
    t &&
    r.salesType !== I.SalesType.enterprise &&
    r.salesType !== I.SalesType.institution
  ) {
    return "对公转账订单仅支持企业单位或非企业单位开票";
  }
  if (r.invoiceType === I.InvoiceType.electronicSpecial) {
    if (!t && !i) {
      return "个人支付订单不支持开具专用发票";
    }
    if (!((a = r.ein) == null ? undefined : a.trim())) {
      return "请填写纳税人识别号";
    }
    var a;
    let o;
    const l =
      (o = applyRecords[0].corporatePayerInfo) == null
        ? undefined
        : o.payerName;
    if (t && (!(l == null ? undefined : l.trim()) || r.invoiceHead !== l)) {
      return "专用发票抬头须与订单付款方一致，请返回上一步核对";
    }
  }
}
const E = (e) => [...new Set(e.filter(Boolean))].join("\n").trim();
const z = function () {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return e.map((e) => ({
    goodsId: e.goodsId || "",
    title: e.description || "",
    descriptionV2: e.description || "",
    goodsType: 0,
    payChannel: e.payChannel || "",
    corporatePayerInfo: e.corporatePayerInfo,
    canApplyInvoice: e.canApplyInvoice,
    blockReasonCode: e.blockReasonCode,
    blockReason: e.blockReason,
    payChannelText: e.payChannelText || "",
    appId: 0,
    level: "",
    scene: "",
    payTime: e.payTime || 0,
    subscribeType: "",
    cycleUnit: "",
    cycle: 0,
    creditsNumber: 0,
    orderId: e.orderId || "",
    amount: e.amount || 0,
    updateTime: e.updateTime || 0,
    description: e.description || "",
    currencyCode: e.currencyCode,
    icon: e.icon || "",
    platform: e.platform || "",
    isReturn: e.isReturn || false,
    invoiceItem: e.invoiceItem || "",
  }));
};
const className = "loadingContainer-CkJvV8";
const O = c.PA(function (e) {
  let r;
  let i;
  let l;
  let c;
  let u;
  let d;
  let m;
  let p;
  let g;
  let invoiceTypeOptions;
  const {
    invoiceService,
    invoiceRequestContext,
    observableData,
    pageStore,
    invoiceId,
    invoiceContents,
    onBack,
    onLoadFailed,
    onSubmitSuccess,
    onLinkClick,
    onSendLog,
  } = e;
  const [P, setP] = s.useState();
  const [F, setF] = s.useState(false);
  const [U, setU] = s.useState(false);
  const ZRef = s.useRef();
  const B = !!pageStore.editInvoiceId;
  const $ = D(pageStore.applyRecords);
  s.useEffect(() => {
    var e = false;
    n._(function* () {
      ZRef.current = undefined;
      if (pageStore.invoiceFormData) {
        setP(pageStore.invoiceFormData);
        setF(false);
        setU(true);
        return;
      }
      setF(true);
      setP(undefined);
      try {
        if (B && invoiceId) {
          let r;
          const i = t._(
            {
              invoiceIds: [invoiceId],
              needFile: false,
            },
            invoiceRequestContext,
          );
          const n = yield invoiceService.batchGetInvoiceInfo(i);
          if (e) {
            return;
          }
          const a = n == null || (r = n.invoiceList) == null ? undefined : r[0];
          if (!a) {
            throw Error("Missing invoice");
          }
          setP(a);
          return;
        }
        const o = yield invoiceService.getLastTimeInvoiceInfo(
          invoiceRequestContext,
        );
        if (!e && (o == null ? undefined : o.salesType)) {
          setP({
            salesType: $ ? I.SalesType.enterprise : o.salesType,
            invoiceHead: o.invoiceHead,
            ein: o.ein,
          });
        }
      } catch (r) {
        if (!e) {
          y.p.error("开票信息加载失败，请稍后重试");
          onLoadFailed();
        }
      } finally {
        if (!e) {
          setF(false);
          setU(true);
        }
      }
    })();
    return () => {
      e = true;
    };
  }, [
    $,
    invoiceId,
    invoiceRequestContext,
    invoiceService,
    B,
    onLoadFailed,
    pageStore.invoiceFormData,
  ]);
  const onSearchCompany = s.useMemo(
    () =>
      x.A((companyName) => {
        invoiceService.fuzzyQueryEnterpriseInfo(
          t._(
            {
              companyName,
            },
            invoiceRequestContext,
          ),
        );
      }, 300),
    [invoiceRequestContext, invoiceService],
  );
  s.useEffect(
    () => () => {
      onSearchCompany.cancel();
    },
    [onSearchCompany],
  );
  const Q = s.useCallback(
    (e) => {
      var r = S(pageStore.applyRecords, e, B);
      if (r) {
        y.p.error(r);
      } else {
        pageStore.setInvoiceFormData(e);
        onSubmitSuccess(e);
      }
    },
    [B, onSubmitSuccess, pageStore],
  );
  const H = s.useCallback(
    (e) => {
      var r;
      onSendLog(
        N._(t._({}, e), {
          invoice_type: k(
            (r = ZRef.current) != null
              ? r
              : P == null
                ? undefined
                : P.invoiceType,
          ),
        }),
      );
    },
    [P == null ? undefined : P.invoiceType, onSendLog],
  );
  if (F || !U) {
    return a.jsx("div", {
      className,
      children: a.jsx(o.A, {}),
    });
  }
  return a.jsx(
    v.xH,
    N._(
      t._(
        {},
        ((r = pageStore.applyRecords),
        (i = B),
        (l = P == null ? undefined : P.invoiceType),
        (c = P == null ? undefined : P.invoiceHead),
        (g =
          i && l === I.InvoiceType.electronicSpecial
            ? I.InvoiceType.electronicSpecial
            : I.InvoiceType.electronic),
        (invoiceTypeOptions = i ? [g] : undefined),
        D(r)
          ? {
              invoiceTypeOptions:
                invoiceTypeOptions != null
                  ? invoiceTypeOptions
                  : [I.InvoiceType.electronic, I.InvoiceType.electronicSpecial],
              salesTypeOptions: [
                I.SalesType.enterprise,
                I.SalesType.institution,
              ],
              readonlyInvoiceHeads: {
                [I.InvoiceType.electronicSpecial]:
                  i && g === I.InvoiceType.electronicSpecial
                    ? (u = c == null ? undefined : c.trim()) != null
                      ? u
                      : ""
                    : (d =
                          (m = r[0].corporatePayerInfo) == null
                            ? undefined
                            : m.payerName) != null
                      ? d
                      : "",
              },
              requiredEinInvoiceTypes: [I.InvoiceType.electronicSpecial],
            }
          : invoiceTypeOptions
            ? t._(
                {
                  invoiceTypeOptions,
                },
                g === I.InvoiceType.electronicSpecial
                  ? {
                      salesTypeOptions: [
                        I.SalesType.enterprise,
                        I.SalesType.institution,
                      ],
                      readonlyInvoiceHeads: {
                        [I.InvoiceType.electronicSpecial]:
                          (p = c == null ? undefined : c.trim()) != null
                            ? p
                            : "",
                      },
                      requiredEinInvoiceTypes: [
                        I.InvoiceType.electronicSpecial,
                      ],
                    }
                  : {},
              )
            : {}),
      ),
      {
        defaultAgreementChecked: true,
        invoiceContents,
        initialData: P,
        selectedRecords: pageStore.applyRecords,
        getInvoiceHeadWarning: (e) => {
          var { invoiceHead, invoiceType } = e;
          if (
            invoiceType === I.InvoiceType.electronicSpecial &&
            invoiceHead.trim().length < 5
          ) {
            return "个人转账不支持开专票，请切换开具普票";
          }
        },
        searchCompanyList: observableData.enterpriseInfoList,
        onSearchCompany,
        onSubmit: Q,
        onBack,
        onLinkClick,
        onInvoiceTypeChange: (e) => {
          ZRef.current = e;
        },
        onSendLog: H,
        onAgreementClick: () => onLinkClick(A),
      },
    ),
  );
});
const emptyImage = require.p + "static/image/empty.1cd93308b8.png";
const L = c.PA(function (e) {
  const {
    invoiceService,
    invoiceRequestContext,
    invoiceId,
    onBack,
    onLoadFailed,
    onGoApply,
    onLinkClick,
    onSendLog,
  } = e;
  const [g, setG] = s.useState(true);
  const [h, setH] = s.useState(null);
  const [f, setF] = s.useState([]);
  const [T, setT] = s.useState(null);
  s.useEffect(() => {
    if (!invoiceId) {
      return void onLoadFailed();
    }
    var e = false;
    var n = () => {
      if (!e) {
        y.p.error("发票不存在或暂无查看权限");
        onLoadFailed();
      }
    };
    setG(true);
    setT(null);
    var a = t._(
      {
        invoiceIds: [invoiceId],
        needFile: true,
      },
      invoiceRequestContext,
    );
    invoiceService
      .batchGetInvoiceInfo(a)
      .then((r) => {
        if (!e) {
          var i;
          var t = r == null || (i = r.invoiceList) == null ? undefined : i[0];
          if (!t) {
            return void n();
          }
          setH(t);
          setF(z(t.orderInfos));
          setT(invoiceId);
        }
      })
      .catch(() => {
        n();
      })
      .finally(() => {
        if (!e) {
          setG(false);
        }
      });
    return () => {
      e = true;
    };
  }, [invoiceId, invoiceRequestContext, invoiceService, onLoadFailed]);
  const I = s.useMemo(() => E(f.map((e) => e.invoiceItem)), [f]);
  const onApplyRefundInvoice = s.useCallback(() => {
    if (invoiceId) {
      invoiceService
        .applyRefundInvoice(
          t._(
            {
              invoiceId,
            },
            invoiceRequestContext,
          ),
        )
        .then((e) => {
          if (e) {
            y.p.success("申请退票提交成功");
          } else {
            y.p.error("申请退票提交失败");
          }
          onBack();
        });
    }
  }, [invoiceId, invoiceRequestContext, invoiceService, onBack]);
  const onReSendInvoice = s.useCallback(
    (e) =>
      n._(function* () {
        if (invoiceId) {
          const n = yield invoiceService.reSendInvoice(
            t._(
              {
                invoiceId,
                email: e,
              },
              invoiceRequestContext,
            ),
          );
          if (n && String(n.serverErrorCode) !== String(1428)) {
            y.p.success("重新发送邮箱成功");
          } else {
            y.p.error("您今日已超过重发次数上限，请明日再试~");
          }
        }
      })(),
    [invoiceId, invoiceRequestContext, invoiceService],
  );
  const onUpdateInvoice = s.useCallback(() => {
    if (invoiceId) {
      onGoApply(invoiceId, f);
    }
  }, [f, invoiceId, onGoApply]);
  const w = s.useCallback(
    (e) => {
      onSendLog(
        N._(t._({}, e), {
          invoice_type: k(h == null ? undefined : h.invoiceType),
        }),
      );
    },
    [h == null ? undefined : h.invoiceType, onSendLog],
  );
  if (g || !h || T !== invoiceId) {
    return a.jsx("div", {
      className,
      children: a.jsx(o.A, {}),
    });
  }
  return a.jsx(v.fU, {
    showProcess: true,
    pageTitle: "发票详情",
    invoiceContents: I,
    initialData: h,
    selectedRecords: f,
    onApplyRefundInvoice,
    onReSendInvoice,
    onUpdateInvoice,
    onBack,
    onLinkClick,
    onSendLog: w,
  });
});
const F = c.PA(function (e) {
  let r;
  let i;
  const {
    invoiceService,
    invoiceRequestContext,
    observableData,
    pageStore,
    invoiceContents,
    onBack,
    onSubmitDone,
    onViewDetail,
    onLinkClick,
    onSendLog,
  } = e;
  const f = !!pageStore.editInvoiceId;
  const submitting =
    observableData.applyInvoiceLoading || observableData.updateInvoiceLoading;
  const invoice_type = k(
    (i = pageStore.invoiceFormData) == null ? undefined : i.invoiceType,
  );
  const x = s.useCallback(
    (e) =>
      onSendLog(
        N._(t._({}, e), {
          invoice_type,
        }),
      ),
    [invoice_type, onSendLog],
  );
  const I = s.useCallback(
    (e) =>
      n._(function* () {
        if (!submitting) {
          const r = S(pageStore.applyRecords, e, f);
          if (r) {
            return void y.p.error(r);
          }
          try {
            let i = null;
            let n = "";
            if (f && pageStore.editInvoiceId) {
              const a = t._(
                N._(t._({}, e), {
                  salesType: e.salesType,
                  invoiceHead: e.invoiceHead,
                  email: e.email,
                  invoiceId: pageStore.editInvoiceId,
                  orderIds: pageStore.applyRecords.map((e) => e.orderId),
                }),
                invoiceRequestContext,
              );
              i = yield invoiceService.updateInvoice(a);
            } else {
              const s = t._(
                N._(t._({}, e), {
                  salesType: e.salesType,
                  invoiceHead: e.invoiceHead,
                  email: e.email,
                  orderIds: pageStore.applyRecords.map((e) => e.orderId),
                }),
                invoiceRequestContext,
              );
              const u = yield invoiceService.applyInvoice(s);
              i = u.ok ? u.value : null;
              n = u.msg;
            }
            if (!i) {
              x({
                action: "submit_fail",
                current_page: "confirm_invoice_page",
              });
              y.p.error(n || (f ? "更新开票提交失败" : "申请开票提交失败"));
              return;
            }
            x({
              action: "submit_success",
              current_page: "confirm_invoice_page",
            });
            x({
              action: "show",
              current_page: "invoice_success_popup",
              invoice_status: 1,
            });
            l.A.confirm({
              icon: null,
              closeIcon: null,
              title: "提交成功",
              content:
                "发票申请已提交，预计1-3个工作日内开具，届时将发送至您填写的邮箱。",
              className: "confirmModal-1sgAOl",
              okText: "查看进度",
              cancelText: "我知道了",
              onOk: () => {
                var e = i.invoiceId || pageStore.editInvoiceId || "";
                pageStore.reset();
                pageStore.setActiveTab("applied");
                x({
                  action: "click_check_progress",
                  current_page: "invoice_success_popup",
                  invoice_status: 1,
                });
                onViewDetail(e);
              },
              onCancel: () => {
                pageStore.reset();
                x({
                  action: "close",
                  current_page: "invoice_success_popup",
                  invoice_status: 1,
                });
                onSubmitDone();
              },
            });
          } catch (e) {
            x({
              action: "submit_fail",
              current_page: "confirm_invoice_page",
            });
            y.p.error(f ? "更新开票提交失败" : "申请开票提交失败");
          }
        }
      })(),
    [
      invoiceRequestContext,
      invoiceService,
      f,
      x,
      onSubmitDone,
      onViewDetail,
      pageStore,
      submitting,
    ],
  );
  return a.jsx(v.fU, {
    defaultAgreementChecked: true,
    invoiceContents,
    initialData: (r = pageStore.invoiceFormData) != null ? r : undefined,
    selectedRecords: pageStore.applyRecords,
    submitting,
    onSubmit: I,
    onBack,
    onLinkClick,
    onSendLog: x,
    onAgreementClick: () => onLinkClick(A),
  });
});
class U {
  setApplyRecords(e) {
    this.applyRecords = e;
  }
  setInvoiceFormData(e) {
    this.invoiceFormData = e;
  }
  clearInvoiceFormData() {
    this.invoiceFormData = null;
  }
  setEditInvoiceId(e) {
    this.editInvoiceId = e;
  }
  setActiveTab(e) {
    this.activeTab = e;
  }
  reset() {
    this.applyRecords = [];
    this.invoiceFormData = null;
    this.editInvoiceId = null;
    this.activeTab = "pending";
  }
  constructor(e = "pending") {
    this.applyRecords = [];
    this.invoiceFormData = null;
    this.editInvoiceId = null;
    this.activeTab = e;
    W.l_(this);
  }
}
function V(e) {
  const r = w(e);
  if (r) {
    y.p.error(r);
  }
  return !r;
}
export var X = c.PA(function (e) {
  let r;
  const { onClose, reportParam, initialRoute, forceTheme, reqSource, scope } =
    e;
  const T = g.h(h._);
  const invoiceService = g.h(p.y);
  const x = g.h(m.ICommercialTeamWorkspaceService);
  const A =
    (initialRoute == null ? undefined : initialRoute.view) === "list"
      ? initialRoute.tab
      : undefined;
  const pageStore = s.useMemo(() => new U(A), [A]);
  const { observableData } = invoiceService;
  const { source } = reportParam;
  const theme = f.v(forceTheme);
  const themeData = s.useMemo(() => {
    if (theme === "dark") {
      return j.dark;
    }
    return j.light;
  }, [theme]);
  const Z =
    (r = initialRoute == null ? undefined : initialRoute.view) != null
      ? r
      : "list";
  const B =
    (initialRoute == null ? undefined : initialRoute.view) === "detail"
      ? {
          invoiceId: initialRoute.invoiceId,
        }
      : {};
  const [$, set$] = s.useState(Z);
  const [Q, setQ] = s.useState(B);
  const [applyDisabled, setApplyDisabled] = s.useState(false);
  const KRef = s.useRef(undefined);
  const invoiceRequestContext = ((e, reqSource_1, i, a) => {
    const [o, setO] = s.useState();
    const cRef = s.useRef(null);
    s.useEffect(() => {
      var o;
      var s = false;
      var u =
        (o = cRef.current) != null
          ? o
          : n._(function* () {
              if (
                a === "personal" ||
                !(a === "team" || (yield e.isTeamScene()))
              ) {
                return {};
              }
              const teamId = yield e.getTeamId();
              if (!teamId) {
                throw Error("Missing team ID for invoice request");
              }
              return {
                teamId,
                scene: I.InvoiceScene.TEAMS_DEFAULT,
              };
            })();
      cRef.current = u;
      u.then((e) => {
        if (!s) {
          setO(
            t._(
              {},
              e,
              reqSource_1
                ? {
                    reqSource: reqSource_1,
                  }
                : {},
            ),
          );
        }
      }).catch(() => {
        if (!s) {
          y.p.error("发票信息加载失败，请稍后重试");
          if (i != null) {
            i();
          }
        }
      });
      return () => {
        s = true;
      };
    }, [i, reqSource_1, e, a]);
    return o;
  })(x, reqSource, onClose, scope);
  const G = s.useCallback(
    (e) => {
      M._(T, {
        action: e.action,
        currentPage: e.current_page,
        invoiceStatus: e.invoice_status,
        currentTab: e.current_tab,
        invoiceType:
          e.invoice_type === "regular_ticket" ||
          e.invoice_type === "exclusive_ticket"
            ? e.invoice_type
            : undefined,
        source,
      });
    },
    [T, source],
  );
  const ee = s.useCallback(() => {
    if (invoiceRequestContext) {
      invoiceService.queryUnInvoicedOrderList(
        t._(
          {
            cursor: "0",
            count: 20,
          },
          invoiceRequestContext,
        ),
      );
      invoiceService.queryInvoiceHistory(
        t._(
          {
            cursor: "0",
            count: 20,
          },
          invoiceRequestContext,
        ),
      );
    }
  }, [invoiceRequestContext, invoiceService]);
  s.useEffect(() => {
    if ($ === "list") {
      ee();
    }
  }, [$, ee]);
  const er = s.useCallback((e, r) => {
    setQ(r || {});
    set$(e);
  }, []);
  const onClose_1 = s.useCallback(() => {
    M._(T, {
      action: "close",
      currentPage:
        $ === "apply"
          ? "apply_invoice_page"
          : $ === "preview"
            ? "confirm_invoice_page"
            : $ === "detail"
              ? "invoice_detail_page"
              : "invoice_list_page",
      source,
    });
    set$("list");
    setQ({});
    pageStore.reset();
    if (onClose != null) {
      onClose();
    }
  }, [T, $, onClose, pageStore, source]);
  const onTabChange = s.useCallback(
    (e) => {
      pageStore.setActiveTab(e);
    },
    [pageStore],
  );
  const onLoadMore = s.useCallback(() => {
    if (invoiceRequestContext) {
      if (pageStore.activeTab === "pending") {
        return void invoiceService.queryUnInvoicedOrderList(
          t._(
            {
              cursor: observableData.unInvoicedOrdersNextCursor,
              keepData: true,
            },
            invoiceRequestContext,
          ),
        );
      }
      invoiceService.queryInvoiceHistory(
        t._(
          {
            cursor: observableData.invoiceHistoryNextCursor,
            keepData: true,
          },
          invoiceRequestContext,
        ),
      );
    }
  }, [
    invoiceRequestContext,
    invoiceService,
    observableData,
    pageStore.activeTab,
  ]);
  const handleGoApply = s.useCallback(
    (e) => {
      if (V(e)) {
        pageStore.setApplyRecords(e);
        pageStore.setEditInvoiceId(null);
        pageStore.clearInvoiceFormData();
        er("apply");
      }
    },
    [er, pageStore],
  );
  const onSelectionChange = s.useCallback((e) => {
    var r = w(e, "selection");
    setApplyDisabled(!!r);
    if (r && r !== KRef.current) {
      y.p.error(r);
    }
    KRef.current = r;
  }, []);
  const onViewDetail = s.useCallback(
    (e) => {
      er("detail", {
        invoiceId: e,
      });
    },
    [er],
  );
  const onReInvoice = s.useCallback(
    (e) =>
      n._(function* () {
        if (invoiceRequestContext) {
          let r;
          const i = t._(
            {
              invoiceIds: [e],
              needFile: false,
            },
            invoiceRequestContext,
          );
          const n = yield invoiceService.batchGetInvoiceInfo(i);
          const a = n == null || (r = n.invoiceList) == null ? undefined : r[0];
          if (a) {
            const o = z(a.orderInfos);
            if (V(o)) {
              pageStore.setApplyRecords(o);
              pageStore.setEditInvoiceId(e);
              pageStore.clearInvoiceFormData();
              er("apply", {
                invoiceId: e,
              });
            }
          }
        }
      })(),
    [invoiceRequestContext, invoiceService, er, pageStore],
  );
  const onReSendEmail = s.useCallback(
    (e, r) =>
      n._(function* () {
        if (invoiceRequestContext) {
          M._(T, {
            action: "click_resend_email",
            currentPage: "invoice_again_popup",
            source,
          });
          const i = yield invoiceService.reSendInvoice(
            t._(
              {
                invoiceId: e,
                email: r,
              },
              invoiceRequestContext,
            ),
          );
          if (i && String(i.serverErrorCode) !== String(1428)) {
            y.p.success("重新发送邮箱成功");
          } else {
            y.p.error("您今日已超过重发次数上限，请明日再试~");
          }
        }
      })(),
    [T, invoiceRequestContext, invoiceService, source],
  );
  const onLinkClick = s.useCallback((e) => {
    b.$(e);
  }, []);
  const onGoApply = s.useCallback(
    (e, r) => {
      if (V(r)) {
        pageStore.setApplyRecords(r);
        pageStore.setEditInvoiceId(e);
        pageStore.clearInvoiceFormData();
        er("apply", {
          invoiceId: e,
        });
      }
    },
    [er, pageStore],
  );
  const onLoadFailed = s.useCallback(() => {
    er("list");
  }, [er]);
  const loading =
    pageStore.activeTab === "pending"
      ? observableData.unInvoicedOrdersLoading
      : observableData.invoiceHistoryLoading;
  const hasMore =
    pageStore.activeTab === "pending"
      ? observableData.unInvoicedOrdersHasMore
      : observableData.invoiceHistoryHasMore;
  const eg = E(pageStore.applyRecords.map((e) => e.invoiceItem));
  return a.jsx("div", {
    className: "invoiceModal-kNySG7",
    children: a.jsx(v.g1, {
      theme,
      themeData,
      children: (() => {
        if (!invoiceRequestContext) {
          return a.jsx("div", {
            className,
            children: a.jsx(o.A, {}),
          });
        }
        switch ($) {
          case "apply":
            return a.jsx(O, {
              invoiceService,
              invoiceRequestContext,
              observableData,
              pageStore,
              invoiceId: Q.invoiceId,
              invoiceContents: eg,
              onBack: () => er("list"),
              onLoadFailed,
              onSubmitSuccess: () => er("preview"),
              onLinkClick,
              onSendLog: G,
            });
          case "preview":
            return a.jsx(F, {
              invoiceService,
              invoiceRequestContext,
              observableData,
              pageStore,
              invoiceContents: eg,
              onBack: () => er("apply", Q),
              onSubmitDone: () => er("list"),
              onViewDetail: (e) =>
                er("detail", {
                  invoiceId: e,
                }),
              onLinkClick,
              onSendLog: G,
            });
          case "detail":
            return a.jsx(L, {
              invoiceService,
              invoiceRequestContext,
              invoiceId: Q.invoiceId,
              onBack: () => er("list"),
              onLoadFailed,
              onGoApply,
              onLinkClick,
              onSendLog: G,
            });
          default:
            return a.jsx(v.Bo, {
              applyDisabled,
              onSelectionChange,
              activeTab: pageStore.activeTab,
              unInvoicedRecords: observableData.unInvoicedOrdersList,
              historyRecords: observableData.invoiceHistoryList,
              allowApplyInvoice:
                observableData.unInvoicedOrdersAllowApplyInvoice,
              blockReason: observableData.unInvoicedOrdersBlockReason,
              loading,
              hasMore,
              emptyImage,
              onTabChange,
              onLoadMore,
              handleGoApply,
              onViewDetail,
              onReInvoice,
              onReSendEmail,
              onClose: onClose_1,
              onSendLog: G,
            });
        }
      })(),
    }),
  });
});
function B(e) {
  const {
    containerService,
    reportParam,
    initialRoute,
    forceTheme,
    reqSource,
    scope,
  } = e;
  if (containerService && !_.cQ(containerService, T.o).isOversea)
    var c = l.A.confirm({
      title: null,
      footer: null,
      icon: null,
      simple: true,
      closable: false,
      maskClosable: false,
      maskStyle: {
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      },
      wrapClassName: u(
        "invoiceModalWrapper-dvb9Hx",
        forceTheme === "light" && "lv-theme-force_light",
        forceTheme === "light" && "standaloneLightTheme-lFmDTg",
        forceTheme === "dark" && "lv-theme-force_dark",
        forceTheme === "dark" && "standaloneDarkTheme-gjmLfb",
      ),
      content: a.jsx(g.Z, {
        instantiationService: containerService,
        children: a.jsx(X, {
          scope,
          forceTheme,
          initialRoute,
          onClose: () => c.close(),
          reportParam,
          reqSource,
        }),
      }),
    });
}
export { B as m };
