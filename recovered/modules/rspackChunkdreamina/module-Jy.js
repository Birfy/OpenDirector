import n from "yMd";
export var B = {
  "1080p": "1080P",
  "720p": "720P",
  "720p_lite": "720P Lite",
  "480p": "480P",
  "4k": "4K",
};
export function q(e) {
  let i;
  let t;
  let a;
  const { model, resolution } = e;
  if (resolution) {
    const d =
      model == null
        ? undefined
        : model.fields.find((e) => e.type === n.pH.Resolution);
    if (
      (i =
        (t = d == null || (a = d.labels) == null ? undefined : a[resolution]) !=
        null
          ? t
          : B[resolution]) != null
    ) {
      return i;
    }
    return resolution;
  }
}
