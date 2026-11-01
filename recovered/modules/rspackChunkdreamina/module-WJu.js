export function y(e, t) {
  let i;
  let r;
  const n = {};
  n.functionMode = t.taskExtra.functionMode;
  n.descriptionCnt = (
    ((r = t.originalInput) == null || (i = r.videoGenInputs[0]) == null
      ? undefined
      : i.multiFrames) || []
  ).filter((e) => e.prompt && e.prompt.trim() !== "").length;
  e.setParams(n);
}
