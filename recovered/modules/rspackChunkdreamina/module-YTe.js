import r from "oa";
import a from "bk";
import o from "z8";
import "Vx";
import i from "Ix";
import l from "cO";
import s from "bT";
import c from "ED";
import u from "yw";
import d from "OQ";
import m from "krN";
import v from "ot";
import p from "Ib";
import g from "wF";
import b from "hUS";
import f from "oKY";
import h from "Lx";
import y from "Jfe";
import * as x from "./module-SNb.js";
import N from "xm3";
import { o as o_1 } from "./module-GzQ.js";
import { I } from "./module-n3Q.js";
import _ from "xb";
import { L } from "./module-IjA.js";
const w = c.PA(function (e) {
  const { className } = e;
  return o.jsx(
    "div",
    a._(r._({}, e), {
      className: _("thumbnail-eiPfSC", className),
    }),
  );
});
const W = "audit-status-icon-wrapper-A8b5_B";
const C = "audit-overlay-LpPy1S";
const k = () => undefined;
function E(subject, subjectMaterialPicker) {
  let t;
  let r;
  const [a] =
    (t =
      subjectMaterialPicker == null
        ? undefined
        : subjectMaterialPicker(subject)) != null
      ? t
      : [];
  if (
    (r = Object.values(m.yC).find(
      (e) => e === (a == null ? undefined : a.type),
    )) != null
  ) {
    return r;
  }
  return m.uZ(subject);
}
var F = c.PA((e) => {
  var n;
  var {
    subject,
    displaySubject,
    loading = false,
    id,
    isAuditRejected = false,
    auditRejectionMessage,
    isAuditing = false,
    auditIcon,
    editable = false,
    onEdit,
    subjectMaterialPicker,
  } = e;
  var j = subject
    ? E(subject, subjectMaterialPicker)
    : displaySubject == null
      ? undefined
      : displaySubject.contentType;
  var F = subject && j !== m.yC.Audio ? v.P(subject) : undefined;
  var S = subject
    ? F
    : displaySubject == null
      ? undefined
      : displaySubject.coverUrl;
  var label =
    (subject == null ? undefined : subject.content.name) ||
    (displaySubject == null ? undefined : displaySubject.title) ||
    id;
  var Z = !!(
    (displaySubject == null ? undefined : displaySubject.title) &&
    displaySubject.coverUrl
  );
  var A = loading && !subject && !Z;
  var triggerProps = {
    position: "bottom",
    popupAlign: {
      bottom: x.vw,
    },
  };
  var content = s.useMemo(() => {
    if (subject) {
      return o.jsx(L, {
        subject,
        contentType: E(subject, subjectMaterialPicker),
        label,
        editable: !!editable,
        onEdit: onEdit != null ? onEdit : k,
      });
    }
    return null;
  }, [subject, subjectMaterialPicker, label, editable, onEdit]);
  var z =
    S && !A
      ? o.jsx(w, {
          children: o.jsx(d.sg, {
            src: l.m(S, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNN%1HRllRakJa$0$*MFdsa*9NRnB-TlhwaFZ6bDFZM2s1ZW1SWFNuRmFWMDR3$EZje*JHSn$$bkJpTWpSMFpFZEdia3d6$*p*WmJ-QnNX$E5SZEdKWFZu$mtSMngyWW1re*$WcFl%blpr$0$wc$dsTXhNRmx-WTNWa1NFNDBX$mhL-m1SW$R%MD0",
            }),
            resolutionUrlMap:
              subject == null || (n = subject.content.mainImage) == null
                ? undefined
                : n.coverUrlMap,
            width: 16,
            height: 16,
            className: "image-UhfE8E",
            draggable: false,
            enableUseSize: false,
            useCache: true,
            sizePickMode: "legacy",
            crossOrigin: "anonymous",
          }),
        })
      : j !== m.yC.Audio || A
        ? o.jsx("div", {
            className: "img-loading-cover-KWGzew",
          })
        : o.jsx(w, {
            className: "audio-icon-cover-POLgp5",
            children: o.jsx(u.jQO, {
              size: 12,
              className: "audio-icon-t9Ewd_",
            }),
          });
  var icon =
    isAuditRejected && !loading
      ? o.jsxs("span", {
          className: W,
          children: [
            z,
            auditIcon
              ? o.jsx("span", {
                  className: C,
                  children: auditIcon,
                })
              : null,
          ],
        })
      : isAuditing && !loading
        ? o.jsxs("span", {
            className: W,
            children: [
              z,
              o.jsx("span", {
                className: C,
                children: o.jsx(b.w, {}),
              }),
            ],
          })
        : z;
  var children = o.jsx(f.m, {
    label: A ? "..." : label,
    icon,
    className: A
      ? "loading-tag-VjqITd"
      : isAuditRejected
        ? "audit-rejected-tag-BAvM5m"
        : undefined,
  });
  if (subject || Z || loading) {
    if (isAuditRejected) {
      if (auditRejectionMessage) {
        return o.jsx(i.A, {
          content: auditRejectionMessage,
          children,
        });
      }
      return children;
    }
    if (subject) {
      return o.jsx(I, {
        trigger: "hover",
        triggerProps,
        className: "popover-YcpYoI",
        content,
        children,
      });
    }
    return children;
  }
  return null;
});
export { F as k };
var S = c.PA((e) => {
  var n;
  var t;
  var i;
  var { subject } = e;
  var c = g.h(h.C);
  n = g.h(N.V);
  var d =
    (t = o_1()) === "image"
      ? {
          referenceAuditManager: n.imageGeneratorManager.referenceAuditManager,
          subjectPreAuditPolicy:
            n.imageGeneratorManager.data.subjectPreAuditPolicy,
        }
      : t === "video"
        ? {
            referenceAuditManager:
              n.videoGeneratorManager.referenceAuditManager,
            subjectPreAuditPolicy:
              n.videoGeneratorManager.data.subjectPreAuditPolicy,
          }
        : {};
  var { isAuditRejected, auditRejectionMessage, isAuditing, auditIcon } = ((
    e,
  ) => {
    var n;
    var { referenceAuditManager, subject, subjectPreAuditPolicy = "" } = e;
    if (!subject || !referenceAuditManager) {
      return {
        isAuditRejected: false,
        auditRejectionMessage: undefined,
        isAuditing: false,
        auditIcon: undefined,
      };
    }
    var {
      data: { subjectAuditRecords },
    } = referenceAuditManager;
    var l =
      (n = subjectAuditRecords[subjectPreAuditPolicy]) == null
        ? undefined
        : n[subject.dataId];
    var s = l == null ? undefined : l.result;
    var isAuditRejected_1 = s !== undefined && !s.ok;
    var auditRejectionMessage_1 = isAuditRejected_1 ? s.msg : undefined;
    return {
      isAuditRejected: isAuditRejected_1,
      auditRejectionMessage: auditRejectionMessage_1,
      isAuditing: !!(l == null ? undefined : l.auditing),
      auditIcon: isAuditRejected_1 ? o.jsx(u.woK, {}) : undefined,
    };
  })({
    referenceAuditManager: d.referenceAuditManager,
    subject,
    subjectPreAuditPolicy: d.subjectPreAuditPolicy,
  });
  var editable =
    (subject == null || (i = subject.subjectControl) == null
      ? undefined
      : i.editable) && !subject.subjectControl.isPublished;
  var onEdit = s.useCallback(() => {
    if (subject) {
      c.getInstance().then((e) => {
        e.showSubjectCreateModal({
          initialData: y.U(subject, {
            includeSelectedVoice: true,
          }),
          subjectId: subject.subjectId,
          dataId: subject.dataId,
          enterFrom: p.B.PreviewHoverEdit,
        });
      });
    }
  }, [c, subject]);
  return o.jsx(
    F,
    a._(r._({}, e), {
      isAuditRejected,
      auditRejectionMessage,
      isAuditing,
      auditIcon,
      editable,
      onEdit,
    }),
  );
});
export { S as v };
