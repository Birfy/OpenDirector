import a from "z8";
import r from "bT";
import o from "Qey";
import i from "yw";
import s from "Xik";
import l from "yu9";
import c from "Cl8";
import d from "jrj";
import u from "Oj8";
import p from "IfdP";
export var y = (e) => {
  var t;
  var n;
  var { referenceAuditManager, resource, resourceAuditPolicy = "" } = e;
  var f = u.E(p.n());
  var report = d.I();
  var { uri, url } = resource;
  var b = uri
    ? referenceAuditManager == null ||
      (n = referenceAuditManager.data.resourceAuditRecords) == null ||
      (t = n[resourceAuditPolicy]) == null
      ? undefined
      : t[uri]
    : undefined;
  var j = b == null ? undefined : b.result;
  var isAuditRejected = (j == null ? undefined : j.ok) === false;
  var k = (j == null ? undefined : j.ok) === false ? j.msg : undefined;
  var errorCode = (j == null ? undefined : j.ok) === false ? j.code : undefined;
  var isAuditing =
    !!referenceAuditManager &&
    s.Y &&
    (!uri || !!(b == null ? undefined : b.auditing));
  var C = isAuditRejected && f && l.AC(errorCode);
  var auditTooltipContent = r.useMemo(() => {
    if (C) {
      return a.jsxs(c.u, {
        report,
        children: [
          k,
          a.jsx(l.YI, {
            source: "pre_audit_tooltip",
            errorCode,
            visible: true,
          }),
        ],
      });
    }
    if (isAuditRejected) {
      return k;
    }
    if (isAuditing) {
      return o.Ay.t("web_precheck_material_tooltips", {}, "素材审核中");
    }
  }, [C, isAuditRejected, isAuditing, k, errorCode, report]);
  return {
    isAuditRejected,
    isAuditing,
    isPreviewLoading: isAuditing || !url,
    auditTooltipContent,
    auditIcon: isAuditRejected ? a.jsx(i.woK, {}) : undefined,
    auditLabel: isAuditRejected
      ? o.Ay.t("web_precheck_subject_material_tip", {}, "未通过")
      : undefined,
  };
};
