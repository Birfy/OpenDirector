import i from "NY";
import s from "Qey";
import a from "Dm";
import n from "M8X";
import o from "xi";
import d from "aEB";
import c from "g98";
export function E(e, t) {
  return i._(function* () {
    if (t.videoId) {
      return t;
    }
    try {
      a.X3(t.file, "no file to upload");
      const r = n.cQ(e, c.H);
      const i = yield r.uploadVideo({
        file: t.file,
      });
      if (!i.ok) {
        throw Error(i.msg);
      }
      return Object.assign(t, {
        videoId: i.value.vid,
        duration: i.value.duration,
      });
    } catch (error) {
      const u = error instanceof Error ? error.message : "Unknown error";
      n.cQ(e, d.Ot).error(s.Ay.t("fail_upload_failed", {}, "上传失败，请重试"));
      o.V.error("uploadVideoForInputParams", "Upload failed: ".concat(u));
      throw Error("Upload failed: ".concat(u));
    }
  })();
}
