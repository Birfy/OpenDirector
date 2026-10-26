import n from "NY";
import s from "QWK";
import a from "mN";
import r from "Kt";
import o from "D5";
import c from "z8";
import d from "bE";
import u from "Kpt";
import h from "lj";
import m from "wF";
import p from "o7";
import g from "YC";
import _ from "oa";
import v from "bk";
import "Vx";
import "uw5";
import "qrE";
import b from "Ix";
import f from "VAR";
import k from "RH";
import y from "zS";
import S from "oD";
import w from "pr";
import N from "bT";
import x from "ED";
import j from "Qey";
import $ from "yw";
import T from "TK";
import W from "VA";
import R from "do";
import C from "NVq";
import A from "UN";
import M from "cy";
import F from "Hr";
import Z from "YJ";
import E from "Nd5";
import L from "X8";
import J from "eE";
import O from "W1g";
import D from "xQ9";
import * as P from "./module-jxe.js";
import H from "n3";
import I from "Fe";
import K from "cY";
import X from "bg6";
import "yS";
import "gL";
import B from "cO";
import "M8X";
import "B3";
import "vm";
import "R8S";
import "YR";
import "./module-zMI.js";
import "./module-QRP.js";
import Y from "X3W";
import { R as R_1 } from "tl4";
import eo from "dw4";
import el from "FV";
import ec from "nN";
Object.defineProperty(exports, "UiStaticConfig", {
  enumerable: true,
  get: () => ev.H,
});
class l extends o.O {
  _registerDynamicSharedServices() {}
  _registerChildLevelServices() {
    return Promise.resolve();
  }
}
const Q = "text-IeX3Vy";
const z = "icon-lSNlgD";
const U = "login-benefit-guide-desc-group-rnXkzO";
const V = "login-benefit-guide-desc-LOtXuf";
function useQ(e) {
  const { children, context, onLogin } = e;
  const s = m.h(r._);
  const a = D.Z();
  const oRef = N.useRef(false);
  const [l, setL] = N.useState(!a);
  N.useEffect(() => {
    if (!a) {
      setL(true);
    }
  }, [a]);
  const u = y.A((e, t) => {
    X.IX(s, e, t);
  });
  N.useEffect(() => {
    if (l) {
      if (!oRef.current) {
        oRef.current = true;
        u("show", "none");
      }
      var e = setTimeout(() => setL(false), 3000);
      return () => clearTimeout(e);
    }
  }, [l, u]);
  const h = y.A(() =>
    X.Jm(
      "pc_cc_x_dreamina_m10n_to_claim_profile_banner",
      context.giftDay,
      "Claim your %1-day Dreamina Basic access",
    ),
  );
  const p = y.A(() => {
    u("click_receive", "none");
    setL(false);
    onLogin();
  });
  const g = y.A((e) => {
    e.stopPropagation();
    p();
  });
  return c.jsx(b.A, {
    content: c.jsx("span", {
      role: "button",
      tabIndex: 0,
      className: "cc-gift-login-bubble-content-B586sc",
      onClick: g,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          p();
        }
      },
      children: h(),
    }),
    position: "right",
    trigger: "hover",
    popupVisible: l,
    onVisibleChange: (e) => {
      if (!e) {
        setL(false);
      }
    },
    disabled: !l,
    className: "cc-gift-login-bubble-FdJpNS",
    children,
  });
}
const strong = (children) =>
  c.jsx("span", {
    className: "login-benefit-guide-highlight-U9moF6",
    children,
  });
function ee(e) {
  const {
    actions,
    title,
    subtitle,
    sections,
    interpolation = {},
    onActionClick,
  } = e;
  const o = (e) => {
    var t = v._(_._({}, interpolation), {
      strong,
    });
    var i = j.Ay.t(e.key, t, e.fallback);
    if (i === e.key && e.fallback && e.fallback !== e.key) {
      return j.Ay.t(e.fallback, t, e.fallback);
    }
    return i;
  };
  return c.jsxs("div", {
    className: sections
      ? "login-benefit-guide-sections-APTOgk"
      : "login-benefit-guide-hfSeze",
    children: [
      sections
        ? null
        : c.jsx("img", {
            "aria-hidden": true,
            alt: "",
            className: "login-benefit-guide-bg-TXLrtT",
            src: B.m(Y, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZa2M1-m1*WE5IWlpNamwwWTBjNWRWcFhO$EJqZ$RsellqSmtjR0pwT$hS-$Z6$Xh%REo0Z*xveWJI$k1WMHBzWW0x$2JXRll$WFJhTTFad1drZFZk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
            }),
          }),
      c.jsxs("div", {
        className: "login-benefit-guide-text-LvrgDE",
        children: [
          c.jsx("div", {
            className: "login-benefit-guide-title-gsKbae",
            children: title,
          }),
          sections
            ? sections.map((e, t) =>
                c.jsxs(
                  "div",
                  {
                    className: U,
                    children: [
                      c.jsx("div", {
                        className: "login-benefit-guide-section-title-dGtt7Q",
                        children: o(e.title),
                      }),
                      e.items.map((e, t) =>
                        c.jsx(
                          "div",
                          {
                            className: V,
                            children: o(e),
                          },
                          "".concat(e.key, "-").concat(t),
                        ),
                      ),
                    ],
                  },
                  "".concat(e.title.key, "-").concat(t),
                ),
              )
            : c.jsx("div", {
                className: U,
                children: c.jsx("div", {
                  className: V,
                  children: subtitle,
                }),
              }),
        ],
      }),
      actions.length > 0
        ? c.jsx("div", {
            className: `login-benefit-guide-actions-TlaZYI ${actions.length === 1 || actions.length > 2 ? "login-benefit-guide-actions-vertical-luFRMG" : "login-benefit-guide-actions-horizontal-ndFYoH"}`,
            children: actions.map((e) =>
              c.jsx(
                "button",
                {
                  type: "button",
                  className: `login-benefit-guide-action-YOwMGq ${e.primary ? "login-benefit-guide-action-primary-oEyBjf" : ""}`,
                  onClick: () => void onActionClick(e),
                  children: e.content,
                },
                e.key,
              ),
            ),
          })
        : null,
    ],
  });
}
function ei() {
  let e;
  let t;
  const window__libra_server_abtest = window._libra_server_abtest;
  return (
    (window__libra_server_abtest == null ||
    (e = window__libra_server_abtest.onboarding_showcase_enabled) == null
      ? undefined
      : e.enable) === true ||
    (window__libra_server_abtest == null ||
    (t = window__libra_server_abtest.onboarding_task_enabled) == null
      ? undefined
      : t.enable) === true
  );
}
const en = {
  popupAlign: {
    right: 22,
  },
  boundaryOffset: {
    top: 8,
  },
};
const es = {
  popupAlign: {
    bottom: 8,
  },
  boundaryOffset: {
    left: 8,
    top: 8,
  },
};
const ea = v._(_._({}, es), {
  popupAlign: {
    bottom: 16,
  },
});
const er = x.PA(function (e) {
  const { loginBenefitManager, menuWrapperPlacement } = e;
  const s = menuWrapperPlacement === "top-actions";
  const position = s ? "br" : "right";
  const o = s ? es : en;
  const l = m.h(A.k);
  const d = m.h(T.a);
  const u = m.h(M.L2);
  const h = m.h(K.i);
  const presentation = m.h(S.Y);
  const g = m.h(r._);
  const autoOpenBlocked = D.Z();
  const [v, setV] = N.useState(false);
  const loginBenefitManager_panelContent = loginBenefitManager.panelContent;
  const URef = N.useRef(null);
  const VRef = N.useRef(O.D());
  const context = N.useMemo(() => X.b1(window.location.href), []);
  const G = N.useMemo(
    () =>
      new URLSearchParams(window.location.search).get(
        "isExternalNetworkLogin",
      ) === "1",
    [],
  );
  const er = N.useMemo(() => {
    var e = new URLSearchParams(window.location.search).get(
      Z.A.pcJointMembershipUid,
    );
    return (e == null ? undefined : e.trim()) || null;
  }, []);
  const [eo, setEo] = N.useState(!!er && !autoOpenBlocked);
  N.useEffect(() => {
    if (er && !autoOpenBlocked) {
      setEo(true);
    }
  }, [er, autoOpenBlocked]);
  N.useEffect(() => {
    if (eo) {
      var e = setTimeout(() => setEo(false), 5000);
      return () => clearTimeout(e);
    }
  }, [eo]);
  const ec = L.Z();
  const ed = d.abTestManager.getBooleanAbTestValue(
    W.ob.DreaminaPhoneLogin,
    false,
  );
  const eu =
    loginBenefitManager.activityEligible &&
    loginBenefitManager_panelContent !== null &&
    !ec &&
    !er &&
    !context;
  const eh = v && !G && true;
  const onPanelOpen = y.A((e) => {
    if (e === "benefit-guide" && loginBenefitManager_panelContent) {
      I.x(g, {
        source: H.HH.ActivityLogin,
        action: "login_list_show",
        title: loginBenefitManager_panelContent.title,
        activity_id: loginBenefitManager_panelContent.activityId,
      });
    }
  });
  const {
    presentationEnabled,
    loginMenuVisible,
    benefitGuideVisible,
    setPanelVisible,
    releaseAutoOpenedPanel,
    handlePanelVisibleChange,
    handleTriggerMouseEnter,
  } = ((e) => {
    const {
      presentation,
      targetPanel,
      isLoggedIn,
      autoOpenBlocked = false,
      onPanelOpen,
    } = e;
    const [r, setR] = N.useState(
      () => (presentation == null ? undefined : presentation.enabled) === true,
    );
    const [loginMenuVisible_1, setLoginMenuVisible] = N.useState(false);
    const [benefitGuideVisible_1, setBenefitGuideVisible] = N.useState(false);
    const hRef = N.useRef({
      "login-menu": false,
      "benefit-guide": false,
    });
    const mRef = N.useRef(false);
    const pRef = N.useRef(false);
    const gRef = N.useRef(Date.now());
    const _Ref = N.useRef(null);
    const vRef = N.useRef(null);
    const b = N.useMemo(ei, []);
    const current = N.useRef(
      typeof e.modelStageGapMs === "number" &&
        Number.isFinite(e.modelStageGapMs) &&
        e.modelStageGapMs >= 0
        ? e.modelStageGapMs
        : R_1,
    ).current;
    const setPanelVisible_1 = y.A((e, t) => {
      var i = hRef.current[e];
      hRef.current[e] = t;
      if (e === "benefit-guide") {
        setBenefitGuideVisible(t);
      } else {
        setLoginMenuVisible(t);
      }
      if (t && !i) {
        if (onPanelOpen != null) {
          onPanelOpen(e);
        }
      }
    });
    const releaseAutoOpenedPanel_1 = y.A(() => {
      if (vRef.current !== null) {
        window.clearTimeout(vRef.current);
        vRef.current = null;
      }
      _Ref.current = null;
    });
    const w = y.A((e) => {
      releaseAutoOpenedPanel_1();
      _Ref.current = e;
      setPanelVisible_1(e, true);
      vRef.current = window.setTimeout(() => {
        vRef.current = null;
        if (_Ref.current === e) {
          _Ref.current = null;
          setPanelVisible_1(e, false);
        }
      }, 8000);
    });
    const handlePanelVisibleChange_1 = y.A((e, i) => {
      if (
        i ||
        (_Ref.current !== e &&
          (presentation == null ||
            !presentation.enabled ||
            e !== "benefit-guide"))
      ) {
        setPanelVisible_1(e, i);
      }
    });
    const handleTriggerMouseEnter_1 = y.A(() => {
      pRef.current = true;
      if (_Ref.current !== null) {
        releaseAutoOpenedPanel_1();
      }
    });
    N.useEffect(() => {
      if (presentation) {
        var e = () => setR(presentation.enabled);
        e();
        var i = presentation.onDidChangeEnabled(e);
        return () => i.dispose();
      }
    }, [presentation]);
    N.useEffect(() => {
      if (!r && b && !autoOpenBlocked && !mRef.current) {
        var e = Math.max(0, 6000 - (Date.now() - gRef.current));
        var t = window.setTimeout(() => {
          mRef.current = true;
          if (!(pRef.current || isLoggedIn() || targetPanel === null)) {
            w(targetPanel);
          }
        }, e);
        return () => window.clearTimeout(t);
      }
    }, [autoOpenBlocked, b, w, isLoggedIn, targetPanel, r]);
    N.useEffect(() => {
      if (presentation && r) {
        var e;
        var a = new AbortController();
        var o = presentation.onDidCancel(() => {
          a.abort();
          clearTimeout(e);
          mRef.current = true;
          setPanelVisible_1("benefit-guide", false);
        });
        if (!(autoOpenBlocked || mRef.current || targetPanel === null)) {
          presentation.waitForStage("model-promotion", a.signal).then((t) => {
            if (!(t === "cancelled" || a.signal.aborted)) {
              e = setTimeout(() => {
                if (!(a.signal.aborted || isLoggedIn())) {
                  mRef.current = true;
                  setPanelVisible_1(targetPanel, true);
                }
              }, current);
            }
          });
        }
        return () => {
          a.abort();
          clearTimeout(e);
          o.dispose();
        };
      }
    }, [
      presentation,
      r,
      autoOpenBlocked,
      targetPanel,
      isLoggedIn,
      setPanelVisible_1,
      current,
    ]);
    N.useEffect(() => releaseAutoOpenedPanel_1, [releaseAutoOpenedPanel_1]);
    return {
      presentationEnabled: r,
      loginMenuVisible: loginMenuVisible_1,
      benefitGuideVisible: benefitGuideVisible_1,
      setPanelVisible: setPanelVisible_1,
      releaseAutoOpenedPanel: releaseAutoOpenedPanel_1,
      handlePanelVisibleChange: handlePanelVisibleChange_1,
      handleTriggerMouseEnter: handleTriggerMouseEnter_1,
    };
  })({
    presentation,
    targetPanel: eu ? "benefit-guide" : null,
    isLoggedIn: y.A(() => h.hasLogin),
    autoOpenBlocked,
    onPanelOpen,
  });
  const ey =
    presentationEnabled &&
    eu &&
    loginBenefitManager_panelContent.source === "guide-popup";
  N.useEffect(
    () => () => {
      var e;
      if ((e = URef.current) != null) {
        e.close();
      }
      URef.current = null;
    },
    [],
  );
  N.useEffect(() => {
    var e = h.onDidOpenLoginDialog(() => {
      if (presentation.enabled) {
        presentation.cancelPending();
      }
    });
    return () => e.dispose();
  }, [h, presentation]);
  N.useEffect(() => {
    l.getWebId()
      .then((e) => {
        if (e) {
          VRef.current = e;
        }
      })
      .catch(() => undefined);
  }, [l]);
  const eS = y.A(() =>
    n._(function* () {
      if (G) {
        setV(false);
      } else {
        setV(yield u.getIsInternalNet());
      }
    })(),
  );
  N.useEffect(() => {
    eS();
  }, [eS]);
  const onMouseDown = y.A((e) => {
    if (e.button === 2 || (e.button === 0 && e.ctrlKey)) {
      e.preventDefault();
      var t = VRef.current || O.D();
      if (!t) {
        return void F.l.error("webId copy failure");
      }
      VRef.current = t;
      J.$("'".concat(t, "'"))
        .then(() => {
          F.l.success("webId copy success");
        })
        .catch(() => {
          F.l.error("webId copy failure");
        });
    }
  });
  const onContextMenu = y.A((e) => {
    e.preventDefault();
  });
  const ex = y.A((platform) => {
    if (eu && loginBenefitManager_panelContent) {
      return {
        platform,
        source: H.HH.ActivityLogin,
        activityTitle: loginBenefitManager_panelContent.title,
        activityId: loginBenefitManager_panelContent.activityId,
      };
    }
    return {
      platform,
      source: H.HH.Login,
    };
  });
  const ej = y.A(() => {
    releaseAutoOpenedPanel();
    h.login(ex("feishu"));
    setPanelVisible("login-menu", false);
  });
  const e$ = y.A(() => {
    releaseAutoOpenedPanel();
    h.login(ex("douyin"));
    setPanelVisible("login-menu", false);
  });
  const eT = y.A(() => {
    h.openNewLoginDialog(ex("sms"));
    setPanelVisible("login-menu", false);
  });
  const onActionClick = y.A((e) =>
    n._(function* () {
      releaseAutoOpenedPanel();
      setPanelVisible("benefit-guide", false);
      yield e.onClick();
    })(),
  );
  const onVisibleChange = y.A((e) => {
    handlePanelVisibleChange("benefit-guide", e);
  });
  const eC = y.A((e) => {
    handlePanelVisibleChange("login-menu", e);
  });
  const eA = N.useMemo(
    () => [
      ...(eh
        ? [
            {
              key: "feishu",
              onClick: ej,
              content: c.jsxs(c.Fragment, {
                children: [
                  c.jsx($.k8x, {
                    className: z,
                    size: 16,
                  }),
                  c.jsx("span", {
                    className: Q,
                    children: j.Ay.t(
                      "web_new_login_portal_feishu",
                      {},
                      "飞书登录",
                    ),
                  }),
                ],
              }),
            },
          ]
        : []),
      {
        key: "douyin",
        onClick: e$,
        content: c.jsxs(c.Fragment, {
          children: [
            c.jsx($.i6x, {
              className: z,
              size: 16,
            }),
            c.jsx("span", {
              className: Q,
              children: j.Ay.t("web_new_login_douyin", {}, "抖音登录"),
            }),
          ],
        }),
      },
      ...(ed
        ? [
            {
              key: "sms",
              onClick: eT,
              content: c.jsxs(c.Fragment, {
                children: [
                  c.jsx($.izE, {
                    className: z,
                    size: 16,
                  }),
                  c.jsx("span", {
                    className: Q,
                    children: j.Ay.t(
                      "phone_login_sidebar_title",
                      {},
                      "手机号登录",
                    ),
                  }),
                ],
              }),
            },
          ]
        : []),
    ],
    [e$, ej, eT, eh, ed],
  );
  const eM = y.A(() =>
    n._(function* () {
      setPanelVisible("benefit-guide", false);
      if (ec) {
        yield E.Js(g);
      } else {
        setPanelVisible("login-menu", false);
        h.openNewLoginDialog();
      }
    })(),
  );
  const eF = y.A((e) =>
    n._(function* () {
      if (e == null || !e.ctrlKey) {
        return void (yield eM());
      }
    })(),
  );
  const eZ = j.Ay.t("login_guide_claim_button", {}, "登录领好礼");
  const eE =
    (loginBenefitManager_panelContent == null
      ? undefined
      : loginBenefitManager_panelContent.loginButtonText) ||
    (eZ === "login_guide_claim_button" ? "登录领好礼" : eZ);
  const eL = N.useMemo(
    () => [
      {
        key: "claim",
        onClick: eM,
        content: c.jsx("span", {
          className: Q,
          children: eE,
        }),
        primary: true,
      },
    ],
    [eM, eE],
  );
  const eJ = N.useMemo(
    () =>
      c.jsxs(k.A, {
        className: "login-menu-NmJhzw",
        children: [
          c.jsx("div", {
            className: "login-menu-title-VYvs0R",
            children: j.Ay.t("login_method_title", {}, "登录方式"),
          }),
          eA.map((e) =>
            c.jsx(
              k.A.Item,
              {
                className: "login-menu-item-qm9jmi",
                onClick: e.onClick,
                children: e.content,
              },
              e.key,
            ),
          ),
        ],
      }),
    [eA],
  );
  const eO = c.jsxs("div", {
    role: "button",
    tabIndex: 0,
    onKeyDown: w.q,
    className: "login-button-wrapper-_5R_2G",
    onClick: eF,
    onMouseDown,
    onMouseEnter: handleTriggerMouseEnter,
    onContextMenu,
    children: [
      c.jsx("div", {
        className: "login-button-nXKrnY",
        children: j.Ay.t("web_new_log_web_in", {}, "登录"),
      }),
      eu && loginBenefitManager_panelContent.tag
        ? c.jsx(P.u, {
            className: "login-benefit-tag-TTab9V",
            text: loginBenefitManager_panelContent.tag,
          })
        : null,
    ],
  });
  const eD = ec
    ? c.jsx(C._, {
        contextViewIds: Object.values(R.WU),
        children: eO,
      })
    : eO;
  if (er) {
    return c.jsx(b.A, {
      content: "登录领取剪映X即梦联合会员积分权益",
      position: "right",
      trigger: "hover",
      popupVisible: eo,
      onVisibleChange: (e) => {
        if (!e) {
          setEo(false);
        }
      },
      disabled: !eo,
      children: eD,
    });
  }
  if (context) {
    return c.jsx(useQ, {
      context,
      onLogin: eM,
      children: eD,
    });
  }
  if (eu) {
    const showArrow = ey && s;
    return c.jsx(f.A, {
      content: c.jsx(ee, {
        actions: ey ? eL : eA,
        title: loginBenefitManager_panelContent.title,
        subtitle: loginBenefitManager_panelContent.subtitle,
        sections: ey ? loginBenefitManager_panelContent.sections : undefined,
        interpolation: loginBenefitManager_panelContent.interpolation,
        onActionClick,
      }),
      trigger: "hover",
      popupVisible: benefitGuideVisible,
      onVisibleChange,
      position,
      showArrow,
      className: showArrow
        ? "login-benefit-guide-sections-wrapper-fmJd87"
        : "login-benefit-guide-wrapper-gaF2Ih",
      triggerProps: showArrow ? ea : o,
      children: eO,
    });
  }
  return eD;
});
function ed(e) {
  const fallback =
    typeof (e == null ? undefined : e.textFallback) === "string"
      ? e.textFallback
      : "";
  const i =
    typeof (e == null ? undefined : e.starlingKey) === "string" && e.starlingKey
      ? e.starlingKey
      : fallback;
  if (i) {
    return {
      key: i,
      fallback,
    };
  }
}
function eu(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const i = ed(e);
  if (!i) {
    return "";
  }
  const n = j.Ay.t(i.key, t, i.fallback);
  if (n === i.key && i.fallback && i.fallback !== i.key) {
    return j.Ay.t(i.fallback, t, i.fallback);
  }
  return n;
}
function eh(e) {
  if (Number.isFinite(e)) {
    return Math.max(e != null ? e : 0, 0);
  }
  return 0;
}
class em extends p.jG {
  get panelContent() {
    return this._panelContent;
  }
  get activityEligible() {
    return !!(
      this._panelContent &&
      (!this._panelContent.requiresNeverLoggedIn || !this._hasEverLoggedIn)
    );
  }
  init() {
    if (!(this._initialized || this._disposed)) {
      this._initialized = true;
      this._bindEvents();
      if (!this._accountService.hasLogin) {
        this._refreshPanel();
      }
    }
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._requestVersion += 1;
      super.dispose();
    }
  }
  _bindEvents() {
    if (typeof window !== "undefined") {
      const e = (e) => {
        if (e.key === el.o.dreaminaEverLoggedIn) {
          this._setHasEverLoggedIn(e.newValue === "1");
        }
      };
      window.addEventListener("storage", e);
      this._register({
        dispose: () => window.removeEventListener("storage", e),
      });
    }
    this._register(
      this._accountService.onDidLogin(() => {
        this._setHasEverLoggedIn(true);
        this._requestVersion += 1;
        this._setPanelContent(null);
      }),
    );
    this._register(
      this._accountService.onDidLogout(() => {
        this._refreshPanel();
      }),
    );
  }
  _setHasEverLoggedIn(e) {
    this._hasEverLoggedIn = e;
  }
  _setPanelContent(e) {
    this._panelContent = e;
  }
  _refreshPanel() {
    return n
      ._(function* () {
        const e = ++this._requestVersion;
        try {
          let t;
          let i;
          let n;
          let s;
          let a;
          let num2;
          const o = yield this._taskCenterDataService.fetchLoginTaskPanel();
          if (
            this._disposed ||
            e !== this._requestVersion ||
            this._accountService.hasLogin
          ) {
            return;
          }
          const l = this._presentation.enabled
            ? yield this._taskCenterDataService.fetchLoginGuidePopup()
            : undefined;
          if (
            this._disposed ||
            e !== this._requestVersion ||
            this._accountService.hasLogin
          ) {
            return;
          }
          const c = Array.isArray(o == null ? undefined : o.panels)
            ? o.panels[0]
            : undefined;
          this._setPanelContent(
            l
              ? {
                  source: "guide-popup",
                  activityId: (t = l.configKey) != null ? t : "",
                  requiresNeverLoggedIn: false,
                  tag: eu(l.tag),
                  title: eu(l.title),
                  subtitle: "",
                  sections: ((e) => {
                    const t = [];
                    for (const i of e != null ? e : []) {
                      let n;
                      const title = ed(i.title);
                      const items = ((n = i.items) != null ? n : [])
                        .map(ed)
                        .filter((e) => e !== undefined);
                      if (title && items.length > 0) {
                        t.push({
                          title,
                          items,
                        });
                      }
                    }
                    return t;
                  })(l.sections),
                  loginButtonText: eu(l.loginButtonText) || undefined,
                  interpolation: {
                    credit: eh(l.totalPoints),
                    num: eh(l.totalBenefits),
                  },
                }
              : c
                ? ((a = eh(c.totalPoints)),
                  (num2 = eh(c.totalBenefits)),
                  {
                    source: "task-panel",
                    activityId: (i = c.panelKey) != null ? i : "",
                    requiresNeverLoggedIn:
                      (n =
                        (s = c.userType) == null
                          ? undefined
                          : s.includes("new_user")) != null && n,
                    tag: eu(c.tag),
                    title: eu(c.title),
                    subtitle: eu(c.subtitle, {
                      num: a,
                      num1: a,
                      num2,
                    }),
                    sections: [],
                    interpolation: {},
                  })
                : null,
          );
        } catch (t) {
          if (!(this._disposed || e !== this._requestVersion)) {
            this._setPanelContent(null);
          }
        }
      })
      .call(this);
  }
  constructor(e, t, i) {
    super();
    this._taskCenterDataService = e;
    this._accountService = t;
    this._presentation = i;
    this._panelContent = null;
    this._hasEverLoggedIn = (() => {
      try {
        return localStorage.getItem(el.o.dreaminaEverLoggedIn) === "1";
      } catch (e) {
        return false;
      }
    })();
    this._initialized = false;
    this._disposed = false;
    this._requestVersion = 0;
    eo.Gn(this);
  }
}
s.Cg(
  [eo.sH.ref, s.Sn("design:type", Object)],
  em.prototype,
  "_panelContent",
  undefined,
);
s.Cg([eo.sH], em.prototype, "_hasEverLoggedIn", undefined);
s.Cg(
  [eo.EW, s.Sn("design:type", Object), s.Sn("design:paramtypes", [])],
  em.prototype,
  "panelContent",
  null,
);
s.Cg(
  [eo.EW, s.Sn("design:type", Boolean), s.Sn("design:paramtypes", [])],
  em.prototype,
  "activityEligible",
  null,
);
s.Cg(
  [
    eo.XI,
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [Boolean]),
    s.Sn("design:returntype", undefined),
  ],
  em.prototype,
  "_setHasEverLoggedIn",
  null,
);
s.Cg(
  [
    eo.XI,
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [Object]),
    s.Sn("design:returntype", undefined),
  ],
  em.prototype,
  "_setPanelContent",
  null,
);
em = s.Cg(
  [
    s.Qj(0, ec.D),
    s.Qj(1, K.i),
    s.Qj(2, S.Y),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      ec.D === undefined ? Object : ec.D,
      K.i === undefined ? Object : K.i,
      S.Y === undefined ? Object : S.Y,
    ]),
  ],
  em,
);
class ep extends p.jG {
  content() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this._loginBenefitManager) {
      return c.jsx(m.Z, {
        instantiationService: this._containerService,
        children: c.jsx(g.t, {
          fallback: c.jsx("div", {}),
          children: c.jsx(er, {
            loginBenefitManager: this._loginBenefitManager,
            menuWrapperPlacement: e.menuWrapperPlacement,
          }),
        }),
      });
    }
    return c.jsx(c.Fragment, {});
  }
  dispose() {
    let e;
    if ((e = this._loginBenefitManager) != null) {
      e.dispose();
    }
    super.dispose();
  }
  _bindEvents() {
    this._store.add(
      this._accountService.onDidLogin(() => {
        this._dreaminaUiConfigurationService.unRegisterConfig("SiderMenuLogin");
      }),
    );
  }
  constructor(e, t, i) {
    super();
    this._containerService = e;
    this._dreaminaUiConfigurationService = t;
    this._accountService = i;
    if (this._accountService.hasLogin) {
      return;
    }
    this._loginBenefitManager = this._containerService.createInstance(em);
    this._loginBenefitManager.init();
    this._dreaminaUiConfigurationService.registerConfig({
      [u.N.SideMenu]: [
        {
          id: "SiderMenuLogin",
          type: "icon",
          icon: () => null,
          order: 1002,
          position: "bottom",
          MenuWrapper: (e) => this.content(e),
        },
      ],
    });
    this._bindEvents();
  }
}
ep = s.Cg(
  [
    s.Qj(0, r._),
    s.Qj(1, h.K),
    s.Qj(2, d.c),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      r._ === undefined ? Object : r._,
      h.K === undefined ? Object : h.K,
      d.c === undefined ? Object : d.c,
    ]),
  ],
  ep,
);
class eg {
  dispose() {
    let e;
    let t;
    if ((e = this._childContainerService) != null) {
      e.dispose();
    }
    if ((t = this._instance) != null) {
      t.dispose();
    }
  }
  _bootstrap() {
    return n
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(ep);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(l);
    this._bootstrap();
  }
}
export var contribution = {
  id: "sider-menu-login",
  ctor: (eg = s.Cg(
    [
      s.Qj(0, r._),
      s.Sn("design:type", Function),
      s.Sn("design:paramtypes", [r._ === undefined ? Object : r._]),
    ],
    eg,
  )),
  instantiationPhase: a.J.Eager,
  registerWhenLogin: false,
};
var ev = require("./module-xW.js");
