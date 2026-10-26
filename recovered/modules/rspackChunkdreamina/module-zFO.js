import r from "NY";
import a from "oa";
import n from "bk";
import o from "QWK";
import s from "Ut";
import d from "K8";
import l from "Kt";
import u from "mLc";
import c from "UH9";
import m from "hP";
import g from "GS";
import h from "EpK";
import p from "CR";
import v from "g98";
import { o as o_1 } from "./module-ur_3.js";
class _ {
  constructor(e) {
    this._origin = e;
  }
}
function f(e, t) {
  return r._(function* () {
    const i = yield fetch(e);
    const r = yield i.blob();
    return new File([r], t != null ? t : "file_".concat(Date.now()), {
      type: r.type,
    });
  })();
}
function b(e, t) {
  return e >= t - 1 && e <= t + 1;
}
export class C extends _ {
  process() {
    return r
      ._(function* () {
        const { ability } = this._origin;
        if (ability.abilityName !== s.DABlendAbilityName.ByteEdit) {
          return d.TZ(ability);
        }
        let { mask, source } = ability;
        const r = [];
        if (mask && this._shouldProcessImage(mask)) {
          r.push(
            this._processMaskImage(mask.imageUrl).then((e) => ({
              type: "mask",
              result: e,
            })),
          );
        }
        if (source && this._shouldProcessImage(source)) {
          r.push(
            this._processSourceImage(source.imageUrl).then((e) => ({
              type: "source",
              result: e,
            })),
          );
        }
        if (r.length === 0) {
          return d.TZ(ability);
        }
        for (const { type, result } of yield Promise.all(r)) {
          if (!result.ok) {
            return result;
          }
          if (type === "mask") {
            mask = result.value;
          } else if (type === "source") {
            source = result.value;
          }
        }
        return d.TZ(
          n._(a._({}, ability), {
            mask,
            source,
          }),
        );
      })
      .call(this);
  }
  _shouldProcessImage(e) {
    return !e.imageUri;
  }
  _processMaskImage(e) {
    return r
      ._(function* () {
        const t = yield r._(function* () {
          try {
            const [t, i] = yield h.t(e);
            for (
              let r = i.data,
                [a, n, o, s] = (function (e) {
                  const t =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : 1;
                  return [
                    parseInt(e.substring(1, 3), 16),
                    parseInt(e.substring(3, 5), 16),
                    parseInt(e.substring(5, 7), 16),
                    t,
                  ];
                })("#00cae0", 127),
                d = 0;
              d < r.length;
              d += 4
            ) {
              if (
                b(r[d + u.AG], a) &&
                b(r[d + u.tw], n) &&
                b(r[d + u.A4], o) &&
                b(r[d + u.HG], s)
              ) {
                r[d + u.AG] = u.lO[u.AG];
                r[d + u.tw] = u.lO[u.tw];
                r[d + u.A4] = u.lO[u.A4];
                r[d + u.HG] = u.lO[u.HG];
              } else {
                r[d] = u.df[u.AG];
                r[d + 1] = u.df[u.tw];
                r[d + 2] = u.df[u.A4];
                r[d + 3] = u.df[u.HG];
              }
            }
            t.ctx.putImageData(i, 0, 0);
            const l = t.getOriginalDataUrl();
            t.destroy();
            if (!l) {
              return;
            }
            return l;
          } catch (e) {
            return;
          }
        })();
        if (!t) {
          return d.iX(
            -1,
            "process mask image failed",
            Error("get image data url failed"),
          );
        }
        const i = yield f(t);
        if (i) {
          const a = yield this._dreaminaUploadService.uploadImage({
            file: i,
          });
          if (!a.ok) {
            return d.iX(
              -1,
              "upload mask image failed",
              Error("upload mask image failed"),
            );
          }
          const { uri } = a.value;
          return d.TZ({
            imageUri: uri,
            imageUrl: e,
          });
        }
        return d.iX(
          -1,
          "process mask image failed",
          Error("get image data url failed"),
        );
      })
      .call(this);
  }
  _processSourceImage(e) {
    return r
      ._(function* () {
        const file = yield f(e);
        const i = yield this._dreaminaUploadService.uploadImage({
          file,
        });
        if (!i.ok) {
          return d.iX(
            -1,
            "upload source image failed",
            Error("upload source image failed"),
          );
        }
        if (!(yield this._auditImage(i.value.uri))) {
          return d.iX(
            p.Q.ErrUploadImageCopyrightBlock,
            "audit source image failed",
            Error("audit source image failed"),
          );
        }
        const r = {
          imageUri: i.value.uri,
          imageUrl: e,
        };
        return d.TZ(r);
      })
      .call(this);
  }
  _auditImage(fileUri) {
    return r
      ._(function* () {
        return !!(yield this._algorithmDataService.requestAlgorithm(
          "benchmark_test_user_upload_image_input.image_face_ip",
          {
            params: {},
            fileList: [
              {
                fileUri,
              },
            ],
            options: {
              ipCheck: true,
            },
          },
          {
            babi_param: g.Wu(
              g.OC({
                scenario: "image_video_generation",
                featureKey: "aigc_to_image",
                featureEntranceDetail: "".concat(c.F(), "-algo_proxy"),
                editType: "tool",
                toolId: m.M.ToolImage,
              }),
            ),
          },
        )).ok;
      })
      .call(this);
  }
  constructor(e, t, i, r) {
    super(e);
    this._containerService = t;
    this._dreaminaUploadService = i;
    this._algorithmDataService = r;
  }
}
C = o.Cg(
  [
    o.Qj(1, l._),
    o.Qj(2, v.H),
    o.Qj(3, o_1),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      Object,
      l._ === undefined ? Object : l._,
      v.H === undefined ? Object : v.H,
      o_1 === undefined ? Object : o_1,
    ]),
  ],
  C,
);
