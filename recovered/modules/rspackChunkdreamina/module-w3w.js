import n from "oa";
import i from "bk";
import a from "z8";
import "lUC";
import "WJ";
import s from "se";
import o from "gei";
import c from "cO";
import l from "A6R";
import d from "c8J";
import p from "SJ";
const u = "managerModal-y6xZKI";
const m = require.p + "static/image/logo.d885e808b5.png";
const h = "unique-mask-result-container-id";
export class w {
  static error(e) {
    const r =
      typeof e === "string"
        ? {
            content: e,
          }
        : e;
    return o.A.error(
      i._(n._({}, r), {
        className: "".concat(u, " ").concat(r.className),
      }),
    );
  }
  static confirm(e) {
    const r =
      typeof e === "string"
        ? {
            content: e,
          }
        : e;
    return o.A.confirm(
      i._(n._({}, r), {
        className: ""
          .concat(u, " ")
          .concat("confirmModal-TpYJPS", " ")
          .concat(r.className),
      }),
    );
  }
  static mobileInfo(e) {
    const r =
      typeof e === "string"
        ? {
            content: e,
          }
        : e;
    return o.A.info(
      i._(n._({}, r), {
        className: `mobileManagerModal-ySuEoL mobileInfoModal-XUvsJf `.concat(
          r.className,
        ),
      }),
    );
  }
  static maskResult(e) {
    let r = document.getElementById(h);
    if (!r) {
      r = document.createElement("div");
      r.id = h;
      document.body.appendChild(r);
    }
    p.H(r).render(
      a.jsx(
        () =>
          a.jsxs("div", {
            className: "maskResultWrapper-OK0ffH",
            children: [
              a.jsxs("div", {
                className: "maskResultContent-pEijTi",
                children: [
                  a.jsx("div", {
                    className: "title-mPwM5H",
                    children: e.title,
                  }),
                  a.jsx("div", {
                    className: "text-gebe12",
                    children: e.content,
                  }),
                  a.jsx(s.A, {
                    type: "primary",
                    onClick: () => {
                      var r;
                      if ((r = e.onConfirm) == null) {
                        return undefined;
                      }
                      return r.call(e);
                    },
                    children: e.okText,
                  }),
                ],
              }),
              a.jsx("div", {
                className: "dreamaina-icon",
                children: a.jsx("img", {
                  src: c.m(m, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBX$mhP-k$3e$$uQlpWM2gy$25re*R*bFhO$2hhTWxaN$RESnNk$nBI$mpSTWJsSjZa$WRHZ$ZvelZubz0",
                  }),
                  alt: "",
                  crossOrigin: "anonymous",
                }),
              }),
            ],
          }),
        {},
      ),
    );
    return {
      hide() {
        if (r != null) {
          r.remove();
        }
      },
    };
  }
  static removeMaskResult() {
    let e;
    if ((e = document.getElementById(h)) != null) {
      e.remove();
    }
  }
  static draftError(e) {
    if (e.maskResult) {
      w.maskResult(e);
    } else {
      w.error(
        i._(n._({}, e), {
          maskClosable: false,
          icon: a.jsx(l.fxu, {
            size: 24,
          }),
        }),
      );
    }
  }
}
w.warningByThrottle = d.A(
  (e) => {
    w.warning(e);
  },
  2000,
  {
    trailing: false,
  },
);
w.success = (e) => null;
w.warning = (e) => null;
