import r from "NY";
import a from "QWK";
import o from "z8";
import s from "Qey";
import n from "aEB";
import u from "k4";
import c from "cO";
import d from "bT";
import l from "cz";
const h = d.memo(function () {
  let e;
  const children = s.F2.t("web_precheck_allblock_guide", {}, "平台规则");
  const i = l.SO({
    region: (
      ((e = window.__locationInfo) == null ? undefined : e.code) || ""
    ).toLowerCase(),
    lang: s.F2.language,
  });
  return o.jsx(o.Fragment, {
    children: s.F2.t(
      "web_precheck_reject_reason_toast",
      {
        guide: o.jsx("a", {
          href: c.m(i, null, {
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNW$scFlTakpo$jA1c1kzaz$hMk50$m1oa$-yeDFX$k14-%dSWF$uQmtRekZ3WW01%2JHTnRSbXBr%jJ4Mlltaz$hR1J-$W5Ca1F6Rj$Xb*R3-kZrel$uQmlNalIwWk$jNWFHTXp$WFJaTWpsM$pFZFdk$1JETlRCak0ya*9ZMjFrT$dOM1B%MD0",
          }),
          target: "_blank",
          rel: "noreferrer",
          className: "community-guidelines-link-jRuDL1",
          children,
        }),
      },
      "参考内容不符合{guide}，请修改后重试",
    ),
  });
});
const _ = "dreamina_audit_acknowledged";
export class K {
  ensureAuditAcknowledged() {
    return r
      ._(function* () {
        if (u.b.getItem(_) !== JSON.stringify(true)) {
          let e;
          let t;
          const i = yield (e = (t = this._options)
            .requestAuditAcknowledgement) == null
            ? undefined
            : e.call(t);
          if (i == null ? undefined : i.skipFutureAcknowledgement) {
            u.b.setItem(_, JSON.stringify(true));
          }
        }
      })
      .call(this);
  }
  notifyAuditRequestFailure() {
    this._notificationService.warning(
      s.F2.t(
        "web_precheck_network_error_toast",
        {},
        "审核请求失败，请发送后重试",
      ),
    );
  }
  notifyAuditRejection() {
    this._notificationService.warning(o.jsx(h, {}));
  }
  constructor(e, t) {
    this._options = e;
    this._notificationService = t;
  }
}
K = a.Cg(
  [
    a.Qj(1, n.Ot),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof DreaminaAuditInteractionServiceOptions === "undefined"
        ? Object
        : DreaminaAuditInteractionServiceOptions,
      n.Ot === undefined ? Object : n.Ot,
    ]),
  ],
  K,
);
