import a from "Ut";
export function s(e) {
  return e.lastProcessFlow === a.DAVideoProcessType.GenerateFromDraft;
}
export function X(e) {
  let t;
  let i;
  let n;
  return (
    ((n = e.originalInput) == null ||
    (i = n.videoGenInputs) == null ||
    (t = i[0]) == null
      ? undefined
      : t.isDraftMode) === true &&
    (e.lastProcessFlow === undefined ||
      e.lastProcessFlow === a.DAVideoProcessType.VideoGen ||
      e.lastProcessFlow === a.DAVideoProcessType.VideoEdit)
  );
}
