import r from "BDO";
import n from "zM";
export function x(e) {
  let t;
  let i;
  return (
    r.S(e) &&
    !!((t = e.canvasInfo) == null ? undefined : t.projectId) &&
    ((i = e.canvasInfo) == null ? undefined : i.reviewStatus) === n.F.Approved
  );
}
