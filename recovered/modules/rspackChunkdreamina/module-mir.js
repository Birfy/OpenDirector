import r from "NY";
import o from "Qey";
import n from "K8";
export function A(e) {
  return r._(function* () {
    if (
      (yield Promise.all(
        e.filter((e) => "resolveMetadata" in e).map((e) => e.resolveMetadata()),
      )).some((e) => !e)
    ) {
      return n.xz(
        -1,
        o.Ay.t("upload_material_error", {}, "素材上传失败，请重试"),
      );
    }
    return n.nj();
  })();
}
