import i from "NY";
import s from "oa";
import a from "bk";
import n from "Qey";
import o from "Dm";
import d from "M8X";
import c from "xi";
import u from "aEB";
import l from "g98";
export function Z(e, t) {
  return i._(function* () {
    if (t.vid) {
      return t;
    }
    try {
      o.X3(t.file, "no file to upload");
      const r = d.cQ(e, l.H);
      const i = yield r.uploadVideo({
        file: t.file,
      });
      if (!i.ok) {
        throw Error(i.msg);
      }
      return Object.assign(t, {
        vid: i.value.vid,
        originAudio: a._(s._({}, t.originAudio), {
          vid: i.value.vid,
          duration: i.value.duration,
        }),
      });
    } catch (error) {
      const _ = error instanceof Error ? error.message : "Unknown error";
      d.cQ(e, u.Ot).error(n.Ay.t("fail_upload_failed", {}, "上传失败，请重试"));
      c.V.error("uploadAudioForInputParams", "Upload failed: ".concat(_));
      throw Error("Upload failed: ".concat(_));
    }
  })();
}
