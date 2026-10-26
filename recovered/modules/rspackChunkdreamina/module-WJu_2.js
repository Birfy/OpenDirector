export function y(e, t) {
  let i;
  let a;
  const n = {};
  n.functionMode = t.taskExtra.functionMode;
  n.descriptionCnt = (
    ((a = t.originalInput) == null || (i = a.videoGenInputs[0]) == null
      ? undefined
      : i.multiFrames) || []
  ).filter((e) => e.prompt && e.prompt.trim() !== "").length;
  e.setParams(n);
}
