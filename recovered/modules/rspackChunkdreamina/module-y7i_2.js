import a from "Ut";
import { s } from "./module-OSE_2.js";
export function Q(e) {
  let t;
  let i;
  let r;
  if (e.taskExtra.videoStage) {
    return e.taskExtra.videoStage;
  }
  if (
    s(e) ||
    e.processFlows.some((e) =>
      e.curProcessFlows.includes(a.DAVideoProcessType.GenerateFromDraft),
    )
  ) {
    return "final";
  }
  if (
    ((r = e.originalInput) == null ||
    (i = r.videoGenInputs) == null ||
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
