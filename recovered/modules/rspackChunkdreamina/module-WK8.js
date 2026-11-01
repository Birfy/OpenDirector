import r from "Qey";
import n from "K8";
import { W } from "./module-qI_3.js";
export var E = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { minDimensions = 0, maxDimensions = Infinity } = t;
  const {
    minWidth = 0,
    maxWidth = Infinity,
    minHeight = 0,
    maxHeight = Infinity,
  } = t;
  const {
    minAspectRatio = 0,
    maxAspectRatio = Infinity,
    minTotalPixels = 0,
    maxTotalPixels = Infinity,
  } = t;
  const { width, height } = e;
  if (!width || !height) {
    return n.nj();
  }
  const type = e.type ? W[e.type] : W.any;
  if (Math.min(width, height) < minDimensions) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_min_short_edge",
        {
          num: minDimensions,
          type,
        },
        "{type}短边不能小于 {num} 像素",
      ),
    );
  }
  if (Math.max(width, height) > maxDimensions) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_max_long_edge",
        {
          num: maxDimensions,
          type,
        },
        "{type}长边不能大于 {num} 像素",
      ),
    );
  }
  if (width < minWidth) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_min_width",
        {
          num: minWidth,
          type,
        },
        "{type}宽度不能小于 {num} 像素",
      ),
    );
  }
  if (width > maxWidth) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_max_width",
        {
          num: maxWidth,
          type,
        },
        "{type}宽度不能大于 {num} 像素",
      ),
    );
  }
  if (height < minHeight) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_min_height",
        {
          num: minHeight,
          type,
        },
        "{type}高度不能小于 {num} 像素",
      ),
    );
  }
  if (height > maxHeight) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_max_height",
        {
          num: maxHeight,
          type,
        },
        "{type}高度不能大于 {num} 像素",
      ),
    );
  }
  const f = width / height;
  if (f < minAspectRatio || f > maxAspectRatio) {
    const y = minAspectRatio > 0;
    const b = Number.isFinite(maxAspectRatio);
    if (y && b) {
      return n.xz(
        -1,
        r.Ay.t(
          "reference_validation_error_resource_aspect_ratio_range",
          {
            min: minAspectRatio,
            max: maxAspectRatio,
            type,
          },
          "{type}宽高比需在 {min}~{max} 之间",
        ),
      );
    }
    const S = y
      ? r.Ay.t(
          "reference_validation_error_resource_min_aspect_ratio",
          {
            num: minAspectRatio,
            type,
          },
          "{type}宽高比不能小于 {num}",
        )
      : r.Ay.t(
          "reference_validation_error_resource_max_aspect_ratio",
          {
            num: maxAspectRatio,
            type,
          },
          "{type}宽高比不能大于 {num}",
        );
    return n.xz(-1, S);
  }
  const I = width * height;
  if (I < minTotalPixels) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_min_total_pixels",
        {
          num: minTotalPixels,
          type,
        },
        "{type}分辨率不能低于 {num} 像素",
      ),
    );
  }
  if (I > maxTotalPixels) {
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_max_total_pixels",
        {
          num: maxTotalPixels,
          type,
        },
        "{type}分辨率不能超过 {num} 像素",
      ),
    );
  }
  return n.nj();
};
