import r from "NY";
import a from "oa";
import n from "bk";
import o from "qa";
import s from "Ut";
import d from "K8";
import l from "JSz";
import u from "XJl";
import c from "Os";
import m from "qUo";
import g from "tq";
import { E as E_1 } from "./module-FI.js";
import p from "j6i";
import v from "gu";
import I from "GUP";
import _ from "Nux";
import f from "EQa";
import b from "k1J";
import y from "P2s";
import { X } from "./module-MGT.js";
import { a as a_1 } from "./module-rm3.js";
import { W as W_1 } from "./module-Wga.js";
import { z as z_1 } from "./module-dEP.js";
import T from "UH9";
import A from "k9s";
import R from "c6h";
import P from "y9l";
import D from "gl";
import E from "js";
import G from "Hmo";
import x from "us4";
import w from "MX";
import O from "vN";
import F from "PHr";
import j from "hP";
import H from "GS";
import U from "mL";
import V from "M8X";
import L from "jp";
import K from "yMd";
import N from "hE";
import W from "T8M";
import q from "ELo";
import B from "fg";
import { r as r_1 } from "./module-x2v.js";
import Z from "QWK";
import J from "Kt";
import Y from "gyn";
import $ from "IBM";
import ee from "H1B";
import et from "nwG";
import ei from "pOd";
import er from "Hp";
import en from "IS";
import { r as r_2 } from "./module-K5v.js";
import es from "cO";
import ed from "sXJ";
import el from "E1z";
import eu from "mLc";
import ec from "EpK";
import em from "AJb";
import ep from "CR";
import ev from "g98";
import { o as o_1 } from "./module-ur_3.js";
function Q(e) {
  let t;
  const templateId = (t = e.templateId) && t !== "0" ? t : undefined;
  const r = e.abilityList.reduce((acc, item) => {
    if (A.d(item)) {
      return [...acc, "detection"];
    }
    if (R.q(item)) {
      if (P.Y(item.controlNet)) {
        return [...acc, "pose"];
      }
      if (D.q(item.controlNet)) {
        return [...acc, "depth"];
      }
      if (E.S(item.controlNet)) {
        return [...acc, "edge"];
      }
    }
    if (G.w(item)) {
      return [...acc, "byte_edit"];
    }
    if (x.R(item)) {
      return [...acc, "face"];
    }
    if (w.e(item)) {
      return [...acc, "object_detection"];
    }
    if (O.U(item)) {
      return [...acc, "style_reference"];
    }
    if (F.I(item)) {
      return [...acc, "style_code"];
    }
    return acc;
  }, []);
  return H.OC({
    scenario: "image_video_generation",
    featureKey: "to_image_referenceimage",
    featureEntranceDetail: ""
      .concat(T.F(), "-referenceimage-")
      .concat(r.join(",")),
    editType: templateId ? "template" : "tool",
    toolId: templateId ? j.M.TemplateImage : j.M.ToolImage,
    templateId,
    extraParams: {
      modelId: e.modelKey,
      generateType: r.length > 0 ? "i2i" : "t2i",
    },
  });
}
class z {
  constructor(e) {
    this._origin = e;
  }
}
class ea extends z {
  process() {
    return r
      ._(function* () {
        const { ability } = this._origin;
        if (ability.abilityName !== s.DABlendAbilityName.ControlNet) {
          return d.TZ(ability);
        }
        const { inputParams } = this._origin;
        const { largeImageInfo } = inputParams;
        let imageUrl = this._getControlNetOriginalImage(
          ability.controlNet,
        ).imageUrl;
        if ((yield Y.P(imageUrl)) === "image/png") {
          const a = yield $.q({
            containerService: this._containerService,
            imageUrl,
          });
          if (a.transferredUrl) {
            imageUrl = a.transferredUrl;
          }
        }
        const n = yield ee.y(imageUrl);
        const o =
          ability.extra.fitMode === er.j.AdaptToCanvas
            ? ((e, t) => {
                let i;
                let r;
                let a;
                let n;
                let o = document.createElement("canvas");
                const s = o.getContext("2d");
                if (!s) {
                  throw Error("failure to get canvas context");
                }
                const { width, height } = e;
                const { width: width_1, height: height_1 } = t;
                const m = height / width;
                if (m < height_1 / width_1) {
                  n = Math.floor(width_1 * m);
                  a = width_1;
                  i = 0;
                  r = Math.abs((height_1 - n) / 2);
                } else {
                  a = Math.floor(height_1 / m);
                  n = height_1;
                  i = Math.abs((width_1 - a) / 2);
                  r = 0;
                }
                o.width = width_1;
                o.height = height_1;
                s.fillStyle = "#fff";
                s.fillRect(0, 0, width_1, height_1);
                s.drawImage(e, 0, 0, width, height, i, r, a, n);
                const g = o.toDataURL();
                s.clearRect(0, 0, o.width, o.height);
                o.width = 0;
                o.height = 0;
                o = null;
                return {
                  url: g,
                  width: width_1,
                  height: height_1,
                };
              })(n, largeImageInfo)
            : ((e, t) => {
                let i;
                let r;
                let a;
                let n;
                let o = document.createElement("canvas");
                const s = o.getContext("2d");
                if (!s) {
                  throw Error("failure to get canvas context");
                }
                const { width, height } = e;
                const { width: width_1, height: height_1 } = t;
                const m = height_1 / width_1;
                if (height / width < m) {
                  n = height;
                  i = Math.abs((width - (a = height / m)) / 2);
                  r = 0;
                } else {
                  a = width;
                  i = 0;
                  r = Math.abs((height - (n = width * m)) / 2);
                }
                o.width = width_1;
                o.height = height_1;
                s.drawImage(e, i, r, a, n, 0, 0, width_1, height_1);
                const g = o.toDataURL();
                s.clearRect(0, 0, o.width, o.height);
                o.width = 0;
                o.height = 0;
                o = null;
                return {
                  url: g,
                  width: width_1,
                  height: height_1,
                };
              })(n, largeImageInfo);
        const { url = "", width = 0, height = 0 } = o != null ? o : {};
        const m =
          width !== largeImageInfo.width || height !== largeImageInfo.height
            ? yield et.q(url, width, height)
            : url;
        const g = yield ei.q(this._containerService, m);
        if (!g.ok) {
          throw Error("upload controlNet image failed");
        }
        return d.TZ(this._createControlNetWithUploadedImage(ability, g.value));
      })
      .call(this);
  }
  _getControlNetOriginalImage(e) {
    if (P.Y(e)) {
      return e.pose.originImage;
    }
    if (D.q(e)) {
      return e.depth.originImage;
    }
    if (E.S(e)) {
      return e.canny.originImage;
    }
    throw Error("invalid controlNet type");
  }
  _createControlNetWithUploadedImage(e, t) {
    let i;
    if (P.Y(e.controlNet)) {
      i = "pose";
    }
    if (D.q(e.controlNet)) {
      i = "depth";
    }
    if (E.S(e.controlNet)) {
      i = "canny";
    }
    if (!i) {
      throw Error("invalid controlNet type");
    }
    return n._(a._({}, e), {
      controlNet: n._(a._({}, e.controlNet), {
        [i]: n._(a._({}, e.controlNet[i]), {
          image: {
            imageUri: t.uri,
          },
        }),
      }),
    });
  }
  constructor(e, t) {
    super(e);
    this._containerService = t;
  }
}
ea = Z.Cg(
  [
    Z.Qj(1, J._),
    Z.Sn("design:type", Function),
    Z.Sn("design:paramtypes", [Object, J._ === undefined ? Object : J._]),
  ],
  ea,
);
const eg = "rgba(255, 255, 255, 1)";
class eh extends z {
  process() {
    return r
      ._(function* () {
        const { ability } = this._origin;
        if (ability.abilityName !== s.DABlendAbilityName.BgPaint) {
          return d.TZ(ability);
        }
        if (this._isLegacyExtraReuse(ability.extra)) {
          return this._fixOldVersionData(ability);
        }
        const imageUrl = ability.originImage.imageUrl;
        const imageUrl_1 = ability.originMask.imageUrl;
        const { width, height } =
          (C = ability.paintSize) != null
            ? C
            : {
                width:
                  (M = (A = ability.image) == null ? undefined : A.width) !=
                  null
                    ? M
                    : 1024,
                height:
                  (T = (R = ability.image) == null ? undefined : R.height) !=
                  null
                    ? T
                    : 1024,
              };
        const { moveX = 0, moveY = 0, scale = 1, rotate = 0 } = ability.extra;
        const h = yield ee.y(imageUrl);
        const { width: width_1, height: height_1 } = r_2({
          largeImageInfo: this._origin.inputParams.largeImageInfo,
          rawImageSize: {
            width: h.width,
            height: h.height,
          },
          scale,
        });
        const I = width_1 === width && height_1 === height;
        let _ = moveX;
        let f = moveY;
        if (!I) {
          const { moveX: moveX_1, moveY: moveY_1 } = el.e({
            currentMove: {
              moveX,
              moveY,
            },
            currentSize: {
              width,
              height,
            },
            targetSize: {
              width: width_1,
              height: height_1,
            },
            imageSize: {
              width: h.width,
              height: h.height,
            },
            imageScale: scale,
            imageRotate: rotate,
          });
          _ = moveX_1;
          f = moveY_1;
        }
        const k = en.H(ability.originMask.imageUrl);
        let imageUrl_2 = ability.originMask.imageUrl;
        if (k) {
          var C;
          var M;
          var T;
          var A;
          var R;
          var P;
          let D;
          const [E] = yield (function (e, t) {
            const i =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : 1;
            return r._(function* () {
              let a;
              let n;
              let o;
              const s = yield r._(function* () {
                const t = yield ee.y(e);
                let i = document.createElement("canvas");
                i.width = t.width;
                i.height = t.height;
                const r = i.getContext("2d");
                if (r != null) {
                  r.drawImage(
                    t,
                    0,
                    0,
                    t.width,
                    t.height,
                    0,
                    0,
                    i.width,
                    i.height,
                  );
                }
                const a =
                  r == null
                    ? undefined
                    : r.getImageData(0, 0, i.width, i.height);
                if (r != null) {
                  r.clearRect(0, 0, t.width, t.height);
                }
                i = null;
                return a;
              })();
              const [, d] = yield ec.t(t);
              const d_data = d.data;
              if (!(s == null ? undefined : s.data) || !d_data) {
                return ["", false];
              }
              let u = true;
              for (let c = 0; c < d_data.length; c += 4) {
                if (d_data[c + eu.HG] !== 255) {
                  u = false;
                }
                const m = d_data[c + eu.HG] * i;
                s.data[c + eu.HG] = Math.ceil(m);
                if (
                  d_data[c + eu.AG] === em.M[eu.AG] &&
                  d_data[c + eu.tw] === em.M[eu.tw] &&
                  d_data[c + eu.A4] === em.M[eu.A4]
                ) {
                  s.data[c + eu.AG] = eu.m1[eu.AG];
                  s.data[c + eu.tw] = eu.m1[eu.tw];
                  s.data[c + eu.A4] = eu.m1[eu.A4];
                  s.data[c + eu.HG] = eu.m1[eu.HG];
                }
              }
              return [
                (((a = document.createElement("canvas")).width = s.width),
                (a.height = s.height),
                (n = a.getContext("2d")) == null || n.putImageData(s, 0, 0),
                (o = a.toDataURL("image/png")),
                n == null || n.clearRect(0, 0, a.width, a.height),
                (a = null),
                o),
                u,
              ];
            })();
          })(imageUrl, (D = ability.originMask.imageUrl) != null ? D : "", 2);
          imageUrl_2 = E;
          const G = yield ei.q(this._containerService, imageUrl_2);
          if (!G.ok) {
            throw Error("upload transformed image failed");
          }
          P = G.value.uri;
        } else {
          imageUrl_2 = imageUrl_1;
          P = ability.originMask.imageUri;
        }
        const x = {
          imageMoveX: _,
          imageMoveY: f,
          paintWidth: width_1,
          paintHeight: height_1,
          scale,
          rotate,
        };
        let w = "";
        let O = "";
        if (!k && I) {
          w = ability.mask.imageUri;
          O = ability.image.imageUri;
        } else {
          w = (yield this._getTransformedImageUri(
            n._(a._({}, x), {
              imageUrl: imageUrl_2,
            }),
            eg,
          )).uri;
          O = (yield this._getTransformedImageUri(
            n._(a._({}, x), {
              imageUrl,
            }),
            eg,
          )).uri;
        }
        return d.TZ(
          n._(a._({}, ability), {
            image: {
              imageUri: O,
            },
            mask: {
              imageUri: w,
            },
            originImage: {
              imageUri: ability.originImage.imageUri,
            },
            originMask: {
              imageUri: P,
            },
            extra: {
              moveX: _,
              moveY: f,
              scale,
              rotate,
            },
          }),
        );
      })
      .call(this);
  }
  _fixOldVersionData(e) {
    return r
      ._(function* () {
        const { originImage, originMask } = e;
        const imageUri = e.originMask.imageUri;
        const o = yield ee.y(originImage.imageUrl);
        const { width, height } = r_2({
          largeImageInfo: this._origin.inputParams.largeImageInfo,
          rawImageSize: {
            width: o.width,
            height: o.height,
          },
          scale: 1,
        });
        const u = {
          imageMoveX: width / 2,
          imageMoveY: height / 2,
          scale: 1,
          rotate: 0,
          paintWidth: width,
          paintHeight: height,
        };
        const c = yield this._getTransformedImageUri(
          n._(a._({}, u), {
            imageUrl: originImage.imageUrl,
          }),
          eg,
        );
        const m = yield this._getTransformedImageUri(
          n._(a._({}, u), {
            imageUrl: originMask.imageUrl,
          }),
          eg,
        );
        return d.TZ(
          n._(a._({}, e), {
            image: {
              imageUri: m.uri,
            },
            mask: {
              imageUri: c.uri,
            },
            originImage: {
              imageUri: originMask.imageUri,
            },
            originMask: {
              imageUri,
            },
          }),
        );
      })
      .call(this);
  }
  _isLegacyExtraReuse(e) {
    return Object.keys(e).length === 0;
  }
  _getTransformedImageUri(e, t) {
    return r
      ._(function* () {
        const i = yield ((e, t) => {
          const {
            imageUrl,
            paintWidth,
            paintHeight,
            imageMoveX,
            imageMoveY,
            scale,
            rotate,
          } = e;
          let l = document.createElement("canvas");
          l.width = paintWidth;
          l.height = paintHeight;
          const u = l.getContext("2d");
          if (!u) {
            return Promise.resolve("");
          }
          u.clearRect(0, 0, l.width, l.height);
          u.fillStyle = t;
          u.fillRect(0, 0, l.width, l.height);
          u.translate(imageMoveX, imageMoveY);
          u.rotate((Math.PI / 180) * rotate);
          const c = document.createElement("img");
          c.src = es.m(imageUrl, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNWJWcFhSakJr$0$wc1kzaz$hb%l5TlRC-$Z6$Xd%RmRr-kdKdFZubFpXRkoyWTJreE1*bFl%bkpNTW14M$pFZFdl$0p0%m5OT%0xSm9Zekp6ZEZrelNteFpXRkoyWTI1TmRtRlhN$2hhTWxWMldXMTRiR0p0$$hSaFZ6Rm9XakpWZ*1OS$NuWlpNbFo2WTNre*ExbFl$bWhNTTFaM1lr-z$hRnBET$ds-W$%RnBZa2RXZFZwRE1-QmlWMFp1$2xNNWJscFl$WFJr%0$wb1ltN%9i$0l6%25S-$-xRjBZ$mN4-%Zve$Z-%lpi$$o2$2xSWk1FeH$$bnBa$0$wd$p*aE5Q%T09",
          });
          c.crossOrigin = "anonymous";
          const m = () => {
            if (l) {
              l.width = 0;
              l.height = 0;
              l = null;
            }
          };
          return new Promise((resolve, reject) => {
            c.onload = () => {
              var t;
              var i = ed.$({
                paintWidth,
                paintHeight,
                imageWidth: c.width,
                imageHeight: c.height,
              });
              var n = i.width * scale;
              var o = i.height * scale;
              if (u != null) {
                u.drawImage(c, 0, 0, c.width, c.height, -n / 2, -o / 2, n, o);
              }
              if (u != null) {
                u.setTransform(1, 0, 0, 1, 0, 0);
              }
              resolve(
                (t = l == null ? undefined : l.toDataURL()) != null ? t : "",
              );
              m();
            };
            c.onerror = (e) => {
              reject(e);
              m();
            };
          });
        })(e, t);
        const r = yield ei.q(this._containerService, i);
        if (!r.ok) {
          throw Error("upload transformed image failed");
        }
        return r.value;
      })
      .call(this);
  }
  constructor(e, t) {
    super(e);
    this._containerService = t;
  }
}
eh = Z.Cg(
  [
    Z.Qj(1, J._),
    Z.Sn("design:type", Function),
    Z.Sn("design:paramtypes", [Object, J._ === undefined ? Object : J._]),
  ],
  eh,
);
function e_(e, t) {
  return r._(function* () {
    const i = yield fetch(e);
    const r = yield i.blob();
    return new File([r], t != null ? t : "file_".concat(Date.now()), {
      type: r.type,
    });
  })();
}
function ef(e, t) {
  return e >= t - 1 && e <= t + 1;
}
class eb extends z {
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
            const [t, i] = yield ec.t(e);
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
                ef(r[d + eu.AG], a) &&
                ef(r[d + eu.tw], n) &&
                ef(r[d + eu.A4], o) &&
                ef(r[d + eu.HG], s)
              ) {
                r[d + eu.AG] = eu.lO[eu.AG];
                r[d + eu.tw] = eu.lO[eu.tw];
                r[d + eu.A4] = eu.lO[eu.A4];
                r[d + eu.HG] = eu.lO[eu.HG];
              } else {
                r[d] = eu.df[eu.AG];
                r[d + 1] = eu.df[eu.tw];
                r[d + 2] = eu.df[eu.A4];
                r[d + 3] = eu.df[eu.HG];
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
        const i = yield e_(t);
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
        const file = yield e_(e);
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
            ep.Q.ErrUploadImageCopyrightBlock,
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
            babi_param: H.Wu(
              H.OC({
                scenario: "image_video_generation",
                featureKey: "aigc_to_image",
                featureEntranceDetail: "".concat(T.F(), "-algo_proxy"),
                editType: "tool",
                toolId: j.M.ToolImage,
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
function ey(e) {
  return (
    !!("action" in e && "originAigcData" in e) &&
    (e.action === c.f.Continue || e.action === c.f.Stop)
  );
}
const ek = [
  class extends z {
    process() {
      return r
        ._(function* () {
          let e;
          let t;
          let i;
          const { ability } = this._origin;
          if (
            !(
              ability.abilityName === s.DABlendAbilityName.FaceGan &&
              ability.zipUrl
            )
          ) {
            return d.TZ(ability);
          }
          const l = yield (
            ((e = ability.zipUrl),
            r._(function* () {
              const t = yield fetch(e);
              const i = yield t.arrayBuffer();
              const arrayBuffer = (yield r_1(i, "application/zip"))[
                "config.json"
              ].arrayBuffer;
              const a = JSON.parse(new TextDecoder().decode(arrayBuffer));
              return B.o(a);
            })())
          );
          const faceData =
            (t = Object.values(
              (i = l == null ? undefined : l.faceRecognizeMap) != null ? i : {},
            )[0][0]) != null
              ? t
              : [];
          return d.TZ(
            n._(a._({}, ability), {
              faceData,
            }),
          );
        })
        .call(this);
    }
  },
  ea,
  eh,
  (eb = Z.Cg(
    [
      Z.Qj(1, J._),
      Z.Qj(2, ev.H),
      Z.Qj(3, o_1),
      Z.Sn("design:type", Function),
      Z.Sn("design:paramtypes", [
        Object,
        J._ === undefined ? Object : J._,
        ev.H === undefined ? Object : ev.H,
        o_1 === undefined ? Object : o_1,
      ]),
    ],
    eb,
  )),
];
function eS(containerService, t) {
  let i;
  let r;
  const d = b.W();
  const u = n._(a._({}, d), {
    mode: (i = t.mode) != null ? i : s.DAAIGCMode.workbench,
    sampleStrength: _.Vx,
  });
  if (t.isRegenerate) {
    const { targetAIGCData } = t;
    const {
      prompt,
      text2imageParams,
      modelInfo,
      blendImageInfo,
      agentOptData,
      unifiedEditInput,
    } = targetAIGCData;
    r = n._(
      a._(
        n._(a._({}, u), {
          prompt: prompt || "",
          largeImageInfo: {
            width: text2imageParams.largeImageInfo.width,
            height: text2imageParams.largeImageInfo.height,
            resolutionType: text2imageParams.largeImageInfo.resolutionType,
          },
          isIntelligentAspectRatio: text2imageParams.isIntelligentAspectRatio,
          model: (modelInfo == null ? undefined : modelInfo.modelReqKey) || "",
          abilityList: blendImageInfo != null ? blendImageInfo : [],
          sampleStrength: text2imageParams.sampleStrength || _.Vx,
        }),
        W_1(text2imageParams),
      ),
      {
        unifiedEditInput,
        infiniteCanvasExtend: t.infiniteCanvasExtend,
        workspaceId: t.workspaceId,
        generateCount: t.generateCount,
      },
    );
    if (agentOptData == null ? undefined : agentOptData.conversationId) {
      r.conversationId = agentOptData.conversationId;
    }
  } else {
    const { isRegenerate, metricsExtra } = t;
    const S = o._(t, ["isRegenerate", "metricsExtra"]);
    r = n._(a._({}, S, u), {
      submitId: ey(t) ? t.submitId : u.submitId,
      sampleStrength: _.Vx,
    });
  }
  if (r.conversationId) {
    r.turnId = l.bz();
  }
  const T = y.r(containerService, {
    targetAIGCData: t.isRegenerate ? t.targetAIGCData : undefined,
    metricsExtra: t.isRegenerate ? undefined : t.metricsExtra,
    isRegenerate: t.isRegenerate,
    submitId: r.submitId,
    input: r,
  });
  Object.assign(r, T);
  const benefitCount = z_1({
    containerService,
    isRegenerate: t.isRegenerate,
    targetAIGCData: t.isRegenerate ? t.targetAIGCData : undefined,
    action: ey(t) ? t.action : undefined,
    originAIGCData: ey(t) ? t.originAigcData : undefined,
    modelReqKey: r.model,
    generateCount: r.generateCount,
  });
  return {
    realInput: r,
    benefitCount,
  };
}
function eC(e, inputParams) {
  return r._(function* () {
    try {
      let i;
      let a;
      for (let n = 0; n < inputParams.abilityList.length; n++) {
        for (const o of ek) {
          const ability = inputParams.abilityList[n];
          const l = yield e
            .createInstance(o, {
              ability,
              inputParams,
            })
            .process();
          if (!l.ok) {
            return d.xz(l.code || -1, l.msg || "blend image preprocess failed");
          }
          inputParams.abilityList[n] = l.value;
        }
      }
      yield (
        ((a =
          (i = inputParams.unifiedEditInput) == null
            ? undefined
            : i.materialList),
        r._(function* () {
          if (a) {
            yield Promise.all(
              a.map((t) =>
                r._(function* () {
                  if (t.materialType !== "subject" && t.imageInfo) {
                    const i = t.imageInfo;
                    if (!(i.file || !i.imageUrl || i.imageUri)) {
                      i.file = yield u.h(i.imageUrl);
                    }
                    t.imageInfo = yield f.Y(e, i);
                  }
                })(),
              ),
            );
          }
        })())
      );
      return d.TZ(new m.Z(inputParams).convert());
    } catch (error) {
      return d.xz(
        -1,
        error instanceof Error
          ? error.message
          : "blend image preprocess failed",
      );
    }
  })();
}
export function HV(e, t) {
  return r._(function* () {
    const { realInput } = eS(e, t);
    const r = yield eC(e, realInput);
    if (!r.ok) {
      throw Error(r.msg || "blend image preprocess failed");
    }
    return {
      params: r.value,
      queryParams: {
        babiParam: Q({
          abilityList: realInput.abilityList,
        }),
        webComponentOpenFlag:
          realInput.model === "external_model_gemini_flash_image_v25"
            ? "1"
            : undefined,
      },
    };
  })();
}
export function aY(e, t) {
  let i;
  const { realInput, benefitCount } = eS(e, t);
  const s = t.isPartial ? a_1 : X;
  return e.createInstance(s, {
    mockDataCreator: () => {
      var agentOptData;
      var o;
      var imageRatio;
      if (ey(t)) {
        return t.originAigcData;
      }
      o = V.cQ(e, q.B).getImageModelConfig(realInput.model);
      if (realInput.conversationId && realInput.turnId) {
        agentOptData = {
          conversationId: realInput.conversationId,
          turnId: realInput.turnId,
        };
      }
      imageRatio = L.B(realInput.largeImageInfo);
      return n._(
        a._(
          {},
          N.l({
            submitId: realInput.submitId,
            generateType: K.ce.Blend,
            workspaceId: realInput.workspaceId,
          }),
        ),
        {
          prompt: realInput.prompt,
          blendImageInfo: U.A(realInput.abilityList),
          modelInfo: o ? a._({}, o, W.b(o)) : undefined,
          imageRatio,
          text2imageParams: {
            largeImageInfo: realInput.largeImageInfo,
            isIntelligentAspectRatio: realInput.isIntelligentAspectRatio,
            quality: realInput.quality,
            background: realInput.background,
            stylize: realInput.stylize,
          },
          metricsExtra: realInput.metricsExtra,
          maxGenerateCount: realInput.generateCount,
          isDraftGen: true,
          agentOptData,
          unifiedEditInput: realInput.unifiedEditInput,
        },
      );
    },
    processInputParamsConverter: () => eC(e, realInput),
    submitQueryParams: {
      babiParam: Q({
        abilityList: realInput.abilityList,
        modelKey: realInput.model,
        templateId:
          (i = realInput.metricsExtra) == null ? undefined : i.templateId,
      }),
      webComponentOpenFlag:
        realInput.model === "external_model_gemini_flash_image_v25"
          ? "1"
          : undefined,
    },
    generatorCommerceManager: e.createInstance(E_1, {
      sceneOptions: p.O({
        scene: v.Sk.ImageBasicGenerate,
        abilityList: realInput.abilityList,
        modelReqKey: realInput.model,
        resolutionType: g.S(realInput.largeImageInfo.resolutionType),
        imageInputNum: I.m(realInput.abilityList),
        benefitCount,
      }),
      submitId: realInput.submitId,
    }),
  });
}
