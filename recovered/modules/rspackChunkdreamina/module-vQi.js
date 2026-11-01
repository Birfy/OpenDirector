import a from "Qey";
import r from "K8";
import { Q } from "./module-iOe.js";
import { o } from "./module-i7.js";
export function I(e, t) {
  if (o(e, t)) {
    return r.nj();
  }
  const format = Q(e.name) || e.type || "unknown";
  return r.xz(
    -1,
    a.Ay.t(
      "reference_validation_error_file_format_unsupported",
      {
        format,
      },
      "暂不支持 {format} 格式",
    ),
  );
}
