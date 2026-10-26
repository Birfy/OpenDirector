import r from "NY";
import a from "QWK";
import o from "Qey";
import s from "o7";
import n from "K8";
import u from "aEB";
import c from "KI";
import d from "g98";
import l from "eNj";
import { F } from "./module-fh_2.js";
class _ extends s.jG {
  uploadFromLocal(e) {
    return r
      ._(function* () {
        if (e.length > 1) {
          this._notificationService.warning(
            o.Ay.t(
              "subject_upload_video_limit_toast",
              {
                num: 1,
              },
              "最多上传{num}个视频",
            ),
          );
        }
        const file = e[0];
        if (file.size > l.q$) {
          this._notificationService.error(
            o.Ay.t(
              "subject_video_upload_size_lim",
              {
                string: l.q8,
              },
              "请上传视频大小不超过{string}MB的视频",
            ),
          );
          return n.xz(1, "video size is too large");
        }
        const i = yield F(file, "video");
        if (i === null) {
          this._notificationService.error(
            o.Ay.t("fail_upload_failed", {}, "上传失败，请重试"),
          );
          return n.xz(3, "failed to read video duration");
        }
        if (!this.validateDuration(i)) {
          return n.xz(2, "video duration is too long");
        }
        try {
          const r = yield this._dreaminaUploadService.uploadVideo({
            file,
          });
          if (!r.ok) {
            this._notificationService.error(
              o.Ay.t("fail_upload_failed", {}, "上传失败，请重试"),
            );
            return n.xz(3, r.msg);
          }
          const videoUrl = URL.createObjectURL(file);
          const s = yield c.$(videoUrl);
          const coverUrl = s ? URL.createObjectURL(s) : undefined;
          return n.TZ({
            videoId: r.value.vid,
            duration: r.value.duration,
            videoUrl,
            coverUrl,
          });
        } catch (e) {
          this._notificationService.error(
            o.Ay.t("fail_upload_failed", {}, "上传失败，请重试"),
          );
          return n.xz(3, "upload failed");
        }
      })
      .call(this);
  }
  validateDuration(e) {
    return (
      e === undefined ||
      !(e > l.ZQ) ||
      (this._notificationService.error(
        o.Ay.t(
          "subject_video_upload_dur_lim",
          {
            string: l.ZQ,
          },
          "请上传时长不超过{string}s的视频",
        ),
      ),
      false)
    );
  }
  uploadFromAsset(e) {
    if (e.length === 0) {
      return n.xz(3, "no asset provided");
    }
    if (e.length > 1) {
      this._notificationService.warning(
        o.Ay.t(
          "subject_upload_video_limit_toast",
          {
            num: 1,
          },
          "最多上传{num}个视频",
        ),
      );
    }
    const t = e[0];
    if (this.validateDuration(t.duration)) {
      return n.TZ({
        videoId: t.videoId,
        aigcItemId: t.aigcItemId,
        videoUrl: t.videoUrl,
        coverUrl: t.coverUrl,
        duration: t.duration,
      });
    }
    return n.xz(2, "video duration is too long");
  }
  constructor(e, t) {
    super();
    this._dreaminaUploadService = e;
    this._notificationService = t;
  }
}
export { _ as c };
_ = a.Cg(
  [
    a.Qj(0, d.H),
    a.Qj(1, u.Ot),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      d.H === undefined ? Object : d.H,
      u.Ot === undefined ? Object : u.Ot,
    ]),
  ],
  _,
);
