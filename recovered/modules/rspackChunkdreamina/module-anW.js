import r from "NY";
import a from "oa";
import o from "bk";
import s from "QWK";
import n from "Qey";
import u from "o7";
import c from "K8";
import d from "aEB";
import l from "g98";
import h from "eNj";
import { N } from "./module-SB5.js";
export class P extends u.jG {
  validateDuration(e) {
    return (
      e === undefined ||
      (e < h.gF
        ? (this._notificationService.error(
            n.Ay.t(
              "multiframe_upload_dur_min_limit",
              {
                string: h.gF,
              },
              "单个素材最短 ".concat(h.gF, " 秒"),
            ),
          ),
          false)
        : !(e > h.US) ||
          (this._notificationService.error(
            n.Ay.t(
              "subject_audio_upload_dur_lim",
              {
                string: h.US,
              },
              "请上传 ".concat(h.US, " 秒以内的音频"),
            ),
          ),
          false))
    );
  }
  uploadFromLocal(e) {
    return r
      ._(function* () {
        if (e.length > 1) {
          this._notificationService.warning(
            n.Ay.t(
              "subject_upload_audio_limit_toast",
              {
                num: 1,
              },
              "最多上传{num}个音频",
            ),
          );
        }
        let t = e[0];
        if (this.trimAudioFileIfNeeded) {
          const i = yield this.trimAudioFileIfNeeded(t, h.US);
          if (!i) {
            return c.xz(-1, "subject reference voice trim cancelled");
          }
          t = i;
        }
        const r = yield this._voiceUploadManager.uploadFromLocal(t, {
          maxDuration: h.US,
          maxFileSize: h.Dv,
          skipCache: false,
        });
        if (r.ok) {
          return c.TZ(
            o._(a._({}, r.value), {
              title: t.name,
            }),
          );
        }
        return r;
      })
      .call(this);
  }
  uploadVoiceFromLocal(e, t) {
    return r
      ._(function* () {
        return this._voiceUploadManager.uploadFromLocal(e, t);
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._notificationService = t;
    this._voiceUploadManager = new N(e, this._notificationService);
  }
}
P = s.Cg(
  [
    s.Qj(0, l.H),
    s.Qj(1, d.Ot),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      l.H === undefined ? Object : l.H,
      d.Ot === undefined ? Object : d.Ot,
    ]),
  ],
  P,
);
