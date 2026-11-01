import i from "NY";
import s from "Qey";
import a from "Dm";
import n from "M8X";
import o from "xi";
import d from "aEB";
import c from "g98";
export function Y(e, t) {
  return i._(function* () {
    if (t.imageUri) {
      return t;
    }
    try {
      a.X3(t.file, "no file to upload");
      const r = n.cQ(e, c.H);
      const i = yield r.uploadImage({
        file: t.file,
      });
      if (!i.ok) {
        throw Error(i.msg);
      }
      return Object.assign(t, {
        imageUri: i.value.uri,
        width: i.value.width,
        height: i.value.height,
      });
    } catch (error) {
      const u = error instanceof Error ? error.message : "Unknown error";
      n.cQ(e, d.Ot).error(s.Ay.t("fail_upload_failed", {}, "上传失败，请重试"));
      o.V.error("uploadImageForInputParams", "Upload failed: ".concat(u));
      throw Error("Upload failed: ".concat(u));
    }
  })();
}
