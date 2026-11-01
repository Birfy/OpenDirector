import r from "Ut";
import { s } from "./module-OSE.js";
export function Q(e) {
  let t;
  let i;
  let a;
  if (e.taskExtra.videoStage) {
    return e.taskExtra.videoStage;
  }
  if (
    s(e) ||
    e.processFlows.some((e) =>
      e.curProcessFlows.includes(r.DAVideoProcessType.GenerateFromDraft),
    )
  ) {
    return "final";
  }
  if (
    ((a = e.originalInput) == null ||
    (i = a.videoGenInputs) == null ||
    (t = i[0]) == null
      ? undefined
      : t.isDraftMode) === true
  ) {
    return "draft";
  }
}
function o(e, t) {
  const videoStage = Q(t);
  e.setParams({
    videoStage,
  });
}
export { o };
