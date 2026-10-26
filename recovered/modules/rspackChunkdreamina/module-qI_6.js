import a from "Qey";
export var W = {
  get image() {
    return a.Ay.t("reference_validation_resource_image", {}, "图片");
  },
  get video() {
    return a.Ay.t("reference_validation_resource_video", {}, "视频");
  },
  get audio() {
    return a.Ay.t("reference_validation_resource_audio", {}, "音频");
  },
  get any() {
    return a.Ay.t("reference_validation_resource_any", {}, "素材");
  },
};
