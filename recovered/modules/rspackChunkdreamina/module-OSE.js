import r from "Ut";
export function s(e) {
  return e.lastProcessFlow === r.DAVideoProcessType.GenerateFromDraft;
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
      e.lastProcessFlow === r.DAVideoProcessType.VideoGen ||
      e.lastProcessFlow === r.DAVideoProcessType.VideoEdit)
  );
}
