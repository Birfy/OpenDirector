import n from "NY";
import s from "z8";
import "GLC";
import "tQ";
import a from "mb";
import r from "Vyy";
import o from "cO";
import l from "pr";
import c from "bT";
import d from "ED";
import _u from "xb";
import m from "Qey";
import p from "cz";
import g from "SU";
import { A as A_1 } from "./module-QRP.js";
export var T = d.PA(function (e) {
  let t;
  const { accountService, className, onLoginSuccess } = e;
  const { smsLoginManager } = accountService;
  const {
    setMobile,
    setSmsCode,
    setComplianceConfirmed,
    requestSmsCode,
    submitSmsLogin,
    data: {
      mobile,
      smsCode,
      complianceConfirmed,
      smsCodeSending,
      smsLoginLoading,
      countdown,
      hasSmsCodeError,
      isMobileValid,
      isLoginEnabled,
    },
  } = smsLoginManager;
  const region =
    typeof window === "undefined"
      ? ""
      : (
          ((t = window.__locationInfo) == null ? undefined : t.code) || ""
        ).toLowerCase();
  const language = m.Ay.language;
  const F = c.useMemo(
    () =>
      p.Tz({
        region,
        lang: language,
      }),
    [region, language],
  );
  const Z = c.useMemo(
    () =>
      p.G2({
        region,
        lang: language,
      }),
    [region, language],
  );
  const E = c.useMemo(() => p.KE(), []);
  const onClick = c.useCallback(
    () =>
      n._(function* () {
        if (isLoginEnabled && (yield submitSmsLogin())) {
          onLoginSuccess();
        }
      })(),
    [isLoginEnabled, submitSmsLogin, onLoginSuccess],
  );
  const J = c.useCallback(
    (e) => {
      if (
        e.key === "Enter" &&
        isMobileValid &&
        !smsCodeSending &&
        countdown <= 0
      ) {
        requestSmsCode();
      }
    },
    [isMobileValid, smsCodeSending, countdown, requestSmsCode],
  );
  const O = c.useCallback(
    (e) => {
      if (e.key === "Enter") {
        onClick();
      }
    },
    [onClick],
  );
  const D = c.useCallback((e) => {
    window.open(
      o.m(e, null, {
        logType: "js.window.location",
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZa2M1-m1*WE5IWlpNamwwWTBjNWRWcFhO$EJqZ$RsNllsaE5kR0pIT1c1aFZ6%jBZb*M1-TFsW*QzWmpNak-2$EZkN*Rsb3liSFZN$jFwMlkyMHdk$1JJ$*pSWldFcH$aRmhO%FE9PQ",
      }),
      "_blank",
    );
  }, []);
  const P = c.useCallback(
    (e) => (t) => {
      t.preventDefault();
      t.stopPropagation();
      D(e);
    },
    [D],
  );
  return s.jsxs("div", {
    className,
    children: [
      s.jsxs("div", {
        className: A_1.fields,
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", {
                className: A_1.label,
                children: m.Ay.t("phone_login_phone_label"),
              }),
              s.jsx(a.A, {
                className: _u(A_1.input, A_1["mobile-input"]),
                size: "large",
                "aria-label": m.Ay.t("phone_login_phone_label", {}, "手机号"),
                value: mobile,
                maxLength: 11,
                placeholder: m.Ay.t("phone_login_phone_placeholder"),
                onChange: setMobile,
                onKeyDown: J,
              }),
            ],
          }),
          s.jsxs("div", {
            children: [
              s.jsx("div", {
                className: A_1.label,
                children: m.Ay.t("phone_login_code_label"),
              }),
              s.jsxs("div", {
                className: _u(A_1["sms-row"], {
                  [A_1["sms-row-error"]]: hasSmsCodeError,
                }),
                children: [
                  s.jsx(a.A, {
                    className: _u(A_1.input, A_1["sms-input"]),
                    size: "large",
                    "aria-label": m.Ay.t(
                      "web_deactivate_title_verification_code",
                      {},
                      "验证码",
                    ),
                    value: smsCode,
                    maxLength: 6,
                    placeholder: m.Ay.t("phone_login_code_placeholder"),
                    onChange: setSmsCode,
                    onKeyDown: O,
                  }),
                  s.jsxs("div", {
                    className: A_1["sms-action"],
                    children: [
                      s.jsx("div", {
                        className: A_1["sms-divider"],
                      }),
                      countdown > 0
                        ? s.jsx("div", {
                            className: A_1.countdown,
                            children: m.Ay.t(
                              "phone_login_code_resend_countdown",
                              {
                                num: countdown,
                              },
                            ),
                          })
                        : s.jsx(g.K, {
                            className: A_1["sms-button"],
                            loading: smsCodeSending,
                            disabled: smsCodeSending || !isMobileValid,
                            onClick: requestSmsCode,
                            children: smsCodeSending
                              ? ""
                              : m.Ay.t("phone_login_send_code_btn"),
                          }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: A_1.footer,
        children: [
          s.jsx(g.K, {
            className: A_1["confirm-button"],
            type: "primary",
            size: "large",
            loading: smsLoginLoading,
            disabled: !isLoginEnabled,
            onClick,
            children: smsLoginLoading ? "" : m.Ay.t("phone_login_submit_btn"),
          }),
          s.jsx(r.A, {
            checked: complianceConfirmed,
            onChange: setComplianceConfirmed,
            children: s.jsxs("span", {
              className: A_1["agreement-text"],
              children: [
                s.jsx("span", {
                  children: m.Ay.t("web_new_read_and_agree_with"),
                }),
                s.jsx("span", {
                  role: "link",
                  tabIndex: 0,
                  onKeyDown: l.q,
                  className: A_1["link-text"],
                  onClick: P(F),
                  children: m.Ay.t("dre_m10n_sub_legal_tos"),
                }),
                s.jsx("span", {
                  children: "、",
                }),
                s.jsx("span", {
                  role: "link",
                  tabIndex: 0,
                  onKeyDown: l.q,
                  className: A_1["link-text"],
                  onClick: P(Z),
                  children: m.Ay.t("web_new_my_privacy_policy_tab"),
                }),
                s.jsx("span", {
                  children: "、",
                }),
                s.jsx("span", {
                  role: "link",
                  tabIndex: 0,
                  onKeyDown: l.q,
                  className: A_1["link-text"],
                  onClick: P(E),
                  children: m.Ay.t("web_home_legal_ai_feature_notice"),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
});
