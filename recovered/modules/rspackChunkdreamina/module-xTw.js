import r from "Qey";
import n from "K8";
import { I } from "./module-CLF.js";
import { W } from "./module-qI_3.js";
export var a = function (e) {
  let t;
  const i =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { maxFileSize = Infinity } = i;
  const l = (t = e.file) == null ? undefined : t.size;
  if (typeof l !== "number") {
    return n.nj();
  }
  if (l > maxFileSize) {
    const { type } = e;
    const type_1 =
      type === "image" || type === "video" || type === "audio"
        ? W[type]
        : W.any;
    return n.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_max_file_size",
        {
          num: I(maxFileSize),
          type: type_1,
        },
        "{type}文件大小不能超过 {num}MB",
      ),
    );
  }
  return n.nj();
};
