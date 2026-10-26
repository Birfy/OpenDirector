import i from "myN";
export function v(e) {
  const { modelReqKey, resolution, videoDuration } = e;
  return i.v({
    modelReqKey,
    resolution,
    durationSeconds: videoDuration,
  });
}
