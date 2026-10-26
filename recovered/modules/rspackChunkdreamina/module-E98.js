import { S } from "./module-BDO.js";
import { F } from "./module-zM.js";
export function x(e) {
  let t;
  let i;
  return (
    S(e) &&
    !!((t = e.canvasInfo) == null ? undefined : t.projectId) &&
    ((i = e.canvasInfo) == null ? undefined : i.reviewStatus) === F.Approved
  );
}
