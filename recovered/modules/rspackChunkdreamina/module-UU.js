export function m(e, t, i, r, n) {
  let a;
  const o = function (e, t) {
    const i =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
    const a =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const o = n ? i : t;
    const s = r(e, a, o);
    if (s && s !== e && s !== "[none]") {
      return s;
    }
    return o;
  };
  const type =
    t.includes("image") && t.includes("video")
      ? o("reference_validation_resource_any", "素材", "File")
      : t.includes("video")
        ? o("reference_validation_resource_video", "视频", "Video")
        : o("reference_validation_resource_image", "图片", "Image");
  const l = [
    o(
      "octo_canvas_timeline_imported_assets_drop_hint",
      "将文件拖至此处添加",
      "Drag and drop files here",
    ),
  ];
  if ((i == null ? undefined : i.minDurationSeconds) !== undefined) {
    const d = i.minDurationSeconds;
    l.push(
      o(
        "reference_validation_error_resource_min_duration",
        "视频时长不能短于 ".concat(d, " 秒"),
        "Video duration must be at least ".concat(d, "s"),
        {
          type,
          num: d,
        },
      ),
    );
  }
  if ((i == null ? undefined : i.maxDurationSeconds) !== undefined) {
    const c = i.maxDurationSeconds;
    l.push(
      o(
        "reference_validation_error_resource_max_duration",
        "视频时长不能超过 ".concat(c, " 秒"),
        "Video duration can't exceed ".concat(c, "s"),
        {
          type,
          num: c,
        },
      ),
    );
  }
  const u = e
    ? e.titleKey
      ? r(e.titleKey, {}, e.title)
      : e.title
    : o("seedance_25_edit_upload", "上传素材", "Upload references");
  return {
    title: e && !u.trim() ? e.title : u,
    description: (e == null ? undefined : e.detailDescriptionKey)
      ? r(
          e.detailDescriptionKey,
          {},
          (a = e.detailDescription) != null ? a : "",
        )
      : e == null
        ? undefined
        : e.detailDescription,
    coverUrl: e == null ? undefined : e.coverUrl,
    coverAlt: "",
    uploadHint: l.join(n ? ". " : "，"),
  };
}
