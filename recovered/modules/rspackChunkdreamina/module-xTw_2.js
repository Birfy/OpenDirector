import r from "Qey";
import o from "K8";
import n from "CLF";
import a from "qI";
var s = function (e) {
  let t;
  const i =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { maxFileSize = Infinity } = i;
  const c = (t = e.file) == null ? undefined : t.size;
  if (typeof c !== "number") {
    return o.nj();
  }
  if (c > maxFileSize) {
    const { type } = e;
    const type_1 =
      type === "image" || type === "video" || type === "audio"
        ? a.W[type]
        : a.W.any;
    return o.xz(
      -1,
      r.Ay.t(
        "reference_validation_error_resource_max_file_size",
        {
          num: n.I(maxFileSize),
          type: type_1,
        },
        "{type}文件大小不能超过 {num}MB",
      ),
    );
  }
  return o.nj();
};
export { s as a };
