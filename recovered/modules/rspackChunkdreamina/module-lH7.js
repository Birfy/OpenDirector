import i from "NY";
import n from "X5";
import a from "M8X";
function o(e) {
  let t;
  let r;
  const i = "code" in e ? e.code : "";
  const n = "msg" in e ? e.msg : "";
  const a =
    "errorInfo" in e && typeof (t = e.errorInfo) === "object" && t !== null
      ? e.errorInfo
      : undefined;
  return "code: "
    .concat(i, "; msg: ")
    .concat(n, "; logid: ")
    .concat((r = a == null ? undefined : a.log_id) != null ? r : "");
}
export function D(e, t) {
  return i._(function* () {
    const r = a.cQ(e, n.ICommercialTeamWorkspaceService);
    if (!(yield r.isTeamScene())) {
      return false;
    }
    const i = yield r.initializeIfNeeded();
    if (!i.ok) {
      throw Error(o(i));
    }
    const c = t
      ? yield r.refreshCurrentTeamDetail(t)
      : yield r.refreshCurrentTeamDetail();
    if (!c.ok) {
      throw Error(o(c));
    }
    return true;
  })();
}
