const r = {
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".bmp": "image/bmp",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".gif": "image/gif",
  ".tiff": "image/tiff",
  ".tif": "image/tiff",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
};
export function B(e) {
  let t;
  let file = e;
  if (!e.type || e.type === "application/octet-stream") {
    let n;
    const a =
      r[
        e.name.includes(".")
          ? ".".concat(
              (n = e.name.split(".").pop()) == null
                ? undefined
                : n.toLowerCase(),
            )
          : ""
      ];
    if (a) {
      file = new File([e], e.name, {
        type: a,
        lastModified: e.lastModified,
      });
    }
  }
  if (file.type.startsWith("image/")) {
    t = "image";
  } else if (file.type.startsWith("video/")) {
    t = "video";
  }
  return {
    file,
    type: t,
  };
}
