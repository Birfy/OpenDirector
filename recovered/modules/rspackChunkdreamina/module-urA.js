import n from "qa";
import r from "z7R";
export function s(e) {
  let t;
  let i;
  let a;
  let o;
  const { containerService } = e;
  const l = n._(e, ["containerService"]);
  const c = containerService
    .invokeFunction((e) => e.get(r.jV))
    .getInstanceSync();
  if (c) {
    const u = c.membershipService.hasActiveMembership;
    if (
      !(
        (!u &&
          ((i = l.sceneOptions) == null || (t = i.reportParams) == null
            ? undefined
            : t.skipReportVipFunctionDetailsIfNotVip)) ||
        (u &&
          (o = l.sceneOptions) != null &&
          (a = o.reportParams) != null &&
          a.skipReportVipFunctionDetailsIfVip)
      )
    ) {
      c.reportVipFunctionDetails(l);
    }
  }
}
