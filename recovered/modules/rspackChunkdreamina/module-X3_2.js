import i from "z8";
import n from "bT";
import r from "ri";
import o from "vS";
import s from "ti";
import { As, ET, ac } from "./module-nq_3.js";
import d from "cO";
import _ from "t1";
import { ob } from "./module-VA_3.js";
import { o as o_1 } from "./module-FV_3.js";
import { Js } from "./module-Egb.js";
import { ly as resultStorage } from "Ic";
import "FU";
function onResult(e) {
  localStorage.setItem(o_1.oneTapLoginPending, String(Date.now()));
  window.location.reload();
}
function onMoment(e) {
  if (!Array.isArray(window.googleOneTapLogMomentResults)) {
    window.googleOneTapLogMomentResults = [];
  }
  window.googleOneTapLogMomentResults.push(e);
  if (e.type === "display" && e.reason !== "unknown_reason") {
    window.googleNotificationNotDisplayReason = e.reason;
  }
  if (typeof window.handleGoogleOneTapMoment === "function") {
    window.handleGoogleOneTapMoment();
  }
}
function v() {
  return (
    !!window.__userInfoStringify ||
    !!localStorage.getItem("LV_LOGIN_STATUS") ||
    !!localStorage.getItem(o_1.dreaminaHasLogin)
  );
}
function useB(e) {
  const { pathname, isBrowser } = e;
  const [hasLogin, setHasLogin] = n.useState(() => !!isBrowser && v());
  const [s, setS] = n.useState(false);
  const [experimentEnabled, setExperimentEnabled] = n.useState(false);
  n.useEffect(() => {
    if (isBrowser && localStorage.getItem(o_1.oneTapLoginPending)) {
      var e = Date.now();
      var t = setInterval(() => {
        if (v()) {
          localStorage.removeItem(o_1.oneTapLoginPending);
          clearInterval(t);
          return;
        }
        if (localStorage.getItem("__THIRD_PART_SIGNIN_ERROR_FROM_ONETAP__")) {
          localStorage.removeItem(o_1.oneTapLoginPending);
          clearInterval(t);
          window.location.href = d.m("".concat(Js, "/login"), null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1Z$dJelZqQmFXRTEy$1RJNWRHTkhPWFZh$np$d1kzaz$ib%l5T1c1a$Ix$jBZakkx-k$4W$$ta*pRekZ2WWpOT01FeH$$bnBs%jBaN$dqTldlZz09",
          });
          return;
        }
        if (Date.now() - e > 15000) {
          localStorage.removeItem(o_1.oneTapLoginPending);
          clearInterval(t);
        }
      }, 500);
      return () => clearInterval(t);
    }
  }, [isBrowser]);
  n.useEffect(() => {
    if (isBrowser) {
      var e;
      setExperimentEnabled(
        !!((e = window._libra_abtest) == null
          ? undefined
          : e[ob.DreaminaWorkbenchOneTap]),
      );
    }
  }, [isBrowser]);
  n.useEffect(() => {
    if (isBrowser) {
      var e = () => {
        setHasLogin(v());
      };
      e();
      var t = setTimeout(() => {
        e();
        setS(true);
      }, 3000);
      var i = setInterval(e, 2000);
      return () => {
        clearTimeout(t);
        clearInterval(i);
      };
    }
  }, [isBrowser]);
  if (
    s &&
    ((e) => {
      let t;
      const { pathname, hasLogin, isOversea, isBrowser, experimentEnabled } = e;
      return (
        !(
          !isBrowser ||
          !isOversea ||
          hasLogin ||
          !experimentEnabled ||
          localStorage.getItem(resultStorage)
        ) &&
        !(
          ((t = localStorage.getItem(o_1.oneTapLoginPending)) &&
            (Date.now() - Number(t) < 30000 ||
              (localStorage.removeItem(o_1.oneTapLoginPending), 0))) ||
          pathname.startsWith("".concat(Js, "/login")) ||
          pathname.startsWith("".concat(Js, "/third-party-callback"))
        ) &&
        pathname.startsWith(Js)
      );
    })({
      pathname,
      hasLogin,
      isOversea: false,
      isBrowser,
      experimentEnabled,
    })
  ) {
    return i.jsx(_.PQ, {
      client_id:
        "585230750835-c88rnn8kjhkvlgpqt9qo7tf07qkhdnis.apps.googleusercontent.com",
      resultStorage,
      autoPrompt: true,
      autoDisableAutoSelect: true,
      auto_select: false,
      use_fedcm_for_prompt: false,
      itp_support: true,
      cancel_on_tap_outside: false,
      onResult,
      onMoment,
    });
  }
  return null;
}
function useF() {
  const {
    isBrowser,
    requestContext: { request },
  } = n.useContext(r.Iw);
  const pathname = isBrowser ? location.pathname : request.pathname;
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(s.sv, {}),
      i.jsx(useB, {
        pathname,
        isBrowser,
      }),
      (() => {
        if (pathname !== "/ai-tool/business") {
          switch (pathname) {
            case "/ai-tool/explore":
              return i.jsxs(o.m, {
                children: [
                  i.jsx("title", {
                    children: As.title,
                  }),
                  i.jsx("meta", {
                    name: "description",
                    content: As.description,
                  }),
                  i.jsx("meta", {
                    name: "keywords",
                    content: As.keywords,
                  }),
                ],
              });
            case "/ai-tool/login":
              return i.jsxs(o.m, {
                children: [
                  i.jsx("title", {
                    children: ET.title,
                  }),
                  i.jsx("meta", {
                    name: "description",
                    content: ET.description,
                  }),
                  i.jsx("meta", {
                    name: "keywords",
                    content: ET.keywords,
                  }),
                ],
              });
            default:
              return i.jsxs(o.m, {
                children: [
                  i.jsx("title", {
                    children: ac.title,
                  }),
                  i.jsx("meta", {
                    name: "description",
                    content: ac.description,
                  }),
                  i.jsx("meta", {
                    name: "keywords",
                    content: ac.keywords,
                  }),
                ],
              });
          }
        }
      })(),
    ],
  });
}
export { useF as default };
