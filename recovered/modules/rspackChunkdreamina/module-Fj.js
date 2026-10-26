import { S } from "./module-BDO_2.js";
export function E(t, e) {
  let i;
  const canvasProjectId = S(e)
    ? (i = e.canvasInfo) == null
      ? undefined
      : i.projectId
    : undefined;
  if (canvasProjectId) {
    t.setParams({
      canvasProjectId,
    });
  }
}
