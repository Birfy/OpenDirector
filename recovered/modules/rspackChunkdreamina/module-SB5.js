import r from "NY";
import a from "QWK";
import o from "Qey";
import s from "o7";
import n from "K8";
import u from "aEB";
import { I } from "./module-CLF_3.js";
import d from "g98";
import l from "eNj";
import { F } from "./module-fh_2.js";
export class N extends s.jG {
  get acceptedFileTypes() {
    return l.rt;
  }
  uploadFromLocal(file, t) {
    return r
      ._(function* () {
        const { minDuration = l.gF, maxDuration, maxFileSize } = t;
        const string = Math.round(I(maxFileSize));
        if (file.size > maxFileSize) {
          this._notificationService.error(
            o.Ay.t(
              "subject_audio_upload_size_lim",
              {
                string,
              },
              "请上传 {string} MB以内的音频",
            ),
          );
          return n.xz(1, "voice file size is too large");
        }
        const duration = yield F(file, "audio");
        if (duration === null) {
          this._notificationService.error(
            o.Ay.t("fail_upload_failed", {}, "上传失败，请重试"),
          );
          return n.xz(4, "failed to read audio duration");
        }
        if (duration < minDuration) {
          this._notificationService.error(
            o.Ay.t(
              "multiframe_upload_dur_min_limit",
              {
                string: minDuration,
              },
              "单个素材最短 {string} 秒",
            ),
          );
          return n.xz(3, "voice duration is too short");
        }
        if (duration > maxDuration) {
          this._notificationService.error(
            o.Ay.t(
              "subject_audio_upload_dur_lim",
              {
                string: maxDuration,
              },
              "请上传 {string} 秒以内的音频",
            ),
          );
          return n.xz(2, "voice duration is too long");
        }
        const { skipCache = true } = t;
        try {
          const _ = yield this._dreaminaUploadService.uploadVideo(
            {
              file,
            },
            skipCache
              ? {
                  skipCache: true,
                }
              : undefined,
          );
          if (!_.ok) {
            this._notificationService.error(
              o.Ay.t("fail_upload_failed", {}, "上传失败，请重试"),
            );
            return n.xz(4, _.msg);
          }
          return n.TZ({
            vid: _.value.vid,
            audioUrl: URL.createObjectURL(file),
            duration,
          });
        } catch (e) {
          this._notificationService.error(
            o.Ay.t("fail_upload_failed", {}, "上传失败，请重试"),
          );
          return n.xz(4, "upload failed");
        }
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._dreaminaUploadService = e;
    this._notificationService = t;
  }
}
N = a.Cg(
  [
    a.Qj(0, d.H),
    a.Qj(1, u.Ot),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      d.H === undefined ? Object : d.H,
      u.Ot === undefined ? Object : u.Ot,
    ]),
  ],
  N,
);
