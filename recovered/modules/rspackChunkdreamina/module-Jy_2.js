import a from "yMd";
export var B = {
  "1080p": "1080P",
  "720p": "720P",
  "720p_lite": "720P Lite",
  "480p": "480P",
  "4k": "4K",
};
export function q(e) {
  let t;
  let n;
  let i;
  const { model, resolution } = e;
  if (resolution) {
    const s =
      model == null
        ? undefined
        : model.fields.find((e) => e.type === a.pH.Resolution);
    if (
      (t =
        (n = s == null || (i = s.labels) == null ? undefined : i[resolution]) !=
        null
          ? n
          : B[resolution]) != null
    ) {
      return t;
    }
    return resolution;
  }
}
