import r from "NY";
import a from "oa";
import o from "QWK";
import s from "Qey";
import n from "o7";
import u from "K8";
import c from "aEB";
import d from "krt";
import l from "H6T";
import h from "g98";
import _ from "eNj";
export class w extends n.jG {
  uploadFromLocal(e) {
    return r
      ._(function* () {
        const t = yield Promise.all(e.map((e) => this._uploadSingleFile(e)));
        const i = t.filter((e) => !e.ok);
        if (i.some((e) => e.code === 1)) {
          this._notificationService.error(
            s.Ay.t(
              "web_new_upload_error_m",
              {
                number0: _.mt,
              },
              "请上传图片大小不超过{number0}MB的图片",
            ),
          );
        }
        if (i.some((e) => e.code === 2)) {
          this._notificationService.error(
            s.Ay.t("fail_upload_failed", {}, "上传失败，请重试"),
          );
        }
        return t;
      })
      .call(this);
  }
  uploadFromAsset(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const i = l.U(e, t);
    if (!i) {
      return {
        imageUri: "",
        imageUrl: "",
      };
    }
    const {
      uri,
      url,
      width,
      height,
      rawWidth,
      rawHeight,
      resolutionUrlMap,
      aigcItemId,
    } = i;
    const _ = Object.keys(resolutionUrlMap).length > 0;
    return a._(
      {
        imageUri: uri,
        imageUrl: url,
        width: rawWidth != null ? rawWidth : width,
        height: rawHeight != null ? rawHeight : height,
        coverUrlMap: _ ? resolutionUrlMap : undefined,
      },
      aigcItemId && {
        aigcImage: {
          itemId: aigcItemId,
        },
      },
    );
  }
  _uploadSingleFile(file) {
    return r
      ._(function* () {
        if (file.size > _.SC) {
          return u.xz(1, "image size is too large");
        }
        try {
          const t = yield this._dreaminaUploadService.uploadImage({
            file,
          });
          if (!t.ok) {
            return u.xz(
              2,
              s.Ay.t(
                "subject_upload_partial_fail_toast",
                {},
                "上传失败，请重试",
              ),
            );
          }
          const { uri, width, height } = t.value;
          const o = yield this._materialDataService.getUrlByUris({
            uris: [uri],
          });
          if (o.ok) {
            var imageUrl_1;
            let c;
            const { imageUrl } = (c = o.value.uri2Image[uri]) != null ? c : {};
            imageUrl_1 = imageUrl;
          }
          const l = {
            imageUri: uri,
            imageUrl: imageUrl_1,
            width,
            height,
          };
          return u.TZ(l);
        } catch (e) {
          return u.xz(
            2,
            s.Ay.t("subject_upload_partial_fail_toast", {}, "上传失败，请重试"),
          );
        }
      })
      .call(this);
  }
  constructor(e, t, i) {
    super();
    this._dreaminaUploadService = e;
    this._materialDataService = t;
    this._notificationService = i;
  }
}
w = o.Cg(
  [
    o.Qj(0, h.H),
    o.Qj(1, d.H),
    o.Qj(2, c.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      h.H === undefined ? Object : h.H,
      d.H === undefined ? Object : d.H,
      c.Ot === undefined ? Object : c.Ot,
    ]),
  ],
  w,
);
