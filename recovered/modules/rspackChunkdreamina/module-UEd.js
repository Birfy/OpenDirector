import a from "Ut";
import i from "yMd";
import n from "aS";
export function m(e) {
  let t;
  let r;
  return (
    n.g(e) &&
    e.generateType === i.ce.VideoDubbing &&
    ((r = e.videoDubbingInfo) == null || (t = r.textToSpeechAbility) == null
      ? undefined
      : t.mode) === a.DAGenerateTTSMode.UnifiedEdit
  );
}
