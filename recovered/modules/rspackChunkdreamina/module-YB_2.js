import n from "oa";
import a from "bk";
import o from "rp";
import r from "Ut";
import { Pn } from "./module-SZS_2.js";
import { I } from "./module-H0.js";
import { B } from "./module-jp.js";
import { r as r_1 } from "./module-jHv.js";
import { I as I_1 } from "./module-gq.js";
import { m as m_1 } from "./module-eg.js";
import p from "PH6";
import c from "yMd";
import { I as I_3 } from "./module-gB_2.js";
import { X } from "./module-NaK.js";
import { r as r_2 } from "./module-Z7.js";
import { G } from "./module-ay.js";
import { U } from "./module-Qq.js";
import { R } from "./module-t6_2.js";
import T from "Dm";
import D from "I3";
import _ from "VH";
import { j } from "./module-Hp.js";
import { B as B_1 } from "./module-Kq_2.js";
import M from "pu";
class P {
  formatBlendImageInfo(e) {
    const t =
      (a = e.promptPlaceholderInfoList) != null
        ? a
        : [
            {
              abilityIndex: 0,
            },
          ];
    const i = [];
    for (const n of t) {
      var a;
      let o;
      const r = (o = e.abilityList) == null ? undefined : o[n.abilityIndex];
      if (r) {
        const l = this._createBlendImageModel(r);
        if (l) {
          i.push(l);
        }
      }
    }
    return i;
  }
  _createBlendImageModel(e) {
    const { name } = e;
    switch (name) {
      case r.DABlendAbilityName.IpKeep:
        return this._createIpKeepModel(e);
      case r.DABlendAbilityName.StyleReference:
        return this._createStyleReferenceModel(e);
      case r.DABlendAbilityName.FaceGan:
        return this._createFaceGanModel(e);
      case r.DABlendAbilityName.ControlNet:
        return this._createControlNetModel(e);
      case r.DABlendAbilityName.ByteEdit:
        return this._createByteEditModel(e);
      case r.DABlendAbilityName.BgPaint:
        return this._createBgPaintModel(e);
      case r.DABlendAbilityName.StyleCode:
        return this._createStyleCodeModel(e);
      default:
        return;
    }
  }
  _createIpKeepModel(e) {
    let t;
    let i;
    const n = this._getImageFromList(e, 0, "ipkeep image");
    return {
      abilityName: r.DABlendAbilityName.IpKeep,
      source: n,
      ipData:
        (t = (i = e.ipKeepList) == null ? undefined : i.map(G)) != null
          ? t
          : [],
    };
  }
  _createStyleReferenceModel(e) {
    T.F4(e.styleReference, "stylereference should not be nil");
    return {
      abilityName: r.DABlendAbilityName.StyleReference,
      styleReference: U(e.styleReference, this._resources),
    };
  }
  _createFaceGanModel(e) {
    let t;
    let i;
    const n = this._getImageFromList(e, 0, "facegan image");
    return {
      abilityName: r.DABlendAbilityName.FaceGan,
      source: n,
      faceData:
        (t =
          (i = e.faceRecognizeList) == null
            ? undefined
            : i.map((e) => e.map(R))[0]) != null
          ? t
          : [],
    };
  }
  _createControlNetModel(e) {
    const _controlNetAbilityIndex = this._controlNetAbilityIndex;
    const i = this._getControlNetItem(e, _controlNetAbilityIndex);
    this._controlNetAbilityIndex++;
    if (i.name === _._.BgPaint) {
      return this._createBgPaintControlNet(e, i, _controlNetAbilityIndex);
    }
    const n = this._getControlNetImageInfo(e, i);
    const a = this._getControlNetExtra(e, _controlNetAbilityIndex);
    const o = this._createNormalControlNet(i, n);
    T.F4(o, "controlnet should not be nil");
    return {
      abilityName: r.DABlendAbilityName.ControlNet,
      controlNet: o,
      extra: a,
    };
  }
  _createByteEditModel(e) {
    const t = this._getImageFromList(e, 0, "byteedit image");
    const { byteEdit, extra } = e;
    const { mask } = byteEdit != null ? byteEdit : {};
    return {
      abilityName: r.DABlendAbilityName.ByteEdit,
      source: t,
      strength: e.strength,
      mask: mask ? X(mask, this._resources) : undefined,
      extra: extra ? D.j(extra) : undefined,
    };
  }
  _createBgPaintModel(e) {
    if (((i = e.imageList) == null ? undefined : i.length) === 2) {
      return this._createLegacyBgPaintModel(e);
    }
    let t;
    var i;
    const n = this._getImageFromList(e, 0, "bgpaint mask image");
    const a = this._getImageFromList(e, 1, "bgpaint image");
    const o = this._getImageFromList(e, 2, "bgpaint source mask image");
    const l = this._getImageFromList(e, 3, "bgpaint source image");
    return {
      abilityName: r.DABlendAbilityName.BgPaint,
      image: a,
      mask: n,
      originImage: l,
      originMask: o,
      extra: D.j((t = e.extra) != null ? t : "{}"),
    };
  }
  _createLegacyBgPaintModel(e) {
    let t;
    const i = this._getImageFromList(e, 0, "legacy bgpaint mask image");
    const n = this._getImageFromList(e, 1, "legacy bgpaint image");
    return {
      abilityName: r.DABlendAbilityName.BgPaint,
      image: undefined,
      mask: undefined,
      originImage: n,
      originMask: i,
      extra: D.j((t = e.extra) != null ? t : "{}"),
    };
  }
  _createStyleCodeModel(e) {
    T.F4(e.commonAsset, "stylecode commonAsset should not be nil");
    const { assetCode, referImageList } = B_1(e.commonAsset, this._resources);
    return {
      abilityName: r.DABlendAbilityName.StyleCode,
      code: assetCode,
      referImageList,
    };
  }
  _getImageFromList(e, t, i) {
    let n;
    const a = X((n = e.imageList) == null ? undefined : n[t], this._resources);
    T.F4(a, i);
    return a;
  }
  _getControlNetItem(e, t) {
    let i;
    const n = (i = e.controlNetList) == null ? undefined : i[t];
    T.F4(n, "controlnet item should not be nil");
    return n;
  }
  _getControlNetImageInfo(e, t) {
    let i;
    const n = (i = t.imageIndex) != null ? i : 0;
    const a = this._getImageFromList(e, n, "depth image");
    return {
      image: a,
      originImage: this._getImageFromList(e, n + 1, "origin depth image"),
      previewImage: this._getImageFromList(e, n + 2, "preview depth image"),
    };
  }
  _createNormalControlNet(e, t) {
    const { name, strength = 0 } = e;
    const r = {
      name,
      strength,
    };
    switch (name) {
      case _._.Depth:
        return a._(n._({}, r), {
          name: _._.Depth,
          depth: t,
        });
      case _._.Pose:
        return a._(n._({}, r), {
          name: _._.Pose,
          pose: t,
        });
      case _._.Canny:
        return a._(n._({}, r), {
          name: _._.Canny,
          canny: t,
        });
    }
  }
  _getControlNetExtra(e, t) {
    let i;
    const n = D.j((i = e.extra) != null ? i : "[]");
    const a = Array.isArray(n) ? n[t] : n;
    return {
      name: "",
      fitMode: j.AdaptToCanvas,
      imageIndex: 0,
      ...(a != null ? a : {}),
    };
  }
  _createBgPaintControlNet(e, t, i) {
    let n;
    let a;
    let o;
    let l;
    let d;
    const u = this._getImageFromList(
      e,
      (n = t.maskIndex) != null ? n : 0,
      "controlnet bgpaint mask image",
    );
    const m = this._getImageFromList(
      e,
      (a = t.imageIndex) != null ? a : 1,
      "controlnet bgpaint image",
    );
    const s = this._getImageFromList(
      e,
      ((o = t.imageIndex) != null ? o : 1) + 1,
      "controlnet bgpaint source mask image",
    );
    const g = this._getImageFromList(
      e,
      ((l = t.imageIndex) != null ? l : 1) + 2,
      "controlnet bgpaint source image",
    );
    const p = D.j((d = e.extra) != null ? d : "[]");
    return {
      abilityName: r.DABlendAbilityName.BgPaint,
      image: m,
      mask: u,
      originImage: g,
      originMask: s,
      extra: p[i],
    };
  }
  constructor(e) {
    this._resources = e;
    this._controlNetAbilityIndex = 0;
  }
}
class S {
  formatBlendImageInfo() {
    if (this._effectItem) {
      let e;
      let t;
      const {
        abilityList = [],
        promptPlaceholderInfoList = [
          {
            abilityIndex: 0,
          },
        ],
      } =
        (e =
          (t = this._effectItem.aigcImageParams) == null
            ? undefined
            : t.blendParams) != null
          ? e
          : {};
      const a = [];
      for (const o of promptPlaceholderInfoList) {
        const r = abilityList[o.abilityIndex];
        if (r) {
          const l = this._createBlendImageModel(r);
          if (l) {
            a.push(l);
          }
        }
      }
      return a;
    }
  }
  _createBlendImageModel(e) {
    const { name } = e;
    switch (name) {
      case r.DABlendAbilityName.IpKeep:
        return this._createIpKeepModel(e);
      case r.DABlendAbilityName.StyleReference:
        return this._createStyleReferenceModel(e);
      case r.DABlendAbilityName.FaceGan:
        return this._createFaceGanModel(e);
      case r.DABlendAbilityName.ControlNet:
        return this._createControlNetModel(e);
      case r.DABlendAbilityName.ByteEdit:
        return this._createByteEditModel(e);
      case r.DABlendAbilityName.BgPaint:
        return this._createBgPaintModel(e);
      case r.DABlendAbilityName.StyleCode:
        return this._createStyleCodeModel(e);
      default:
        return;
    }
  }
  _createIpKeepModel(e) {
    let t;
    const i = this._getAbilityImageItem(e, 0);
    return {
      abilityName: r.DABlendAbilityName.IpKeep,
      source: i,
      ipData: ((t = e.ipKeepList) != null ? t : []).map((e) => {
        var t;
        var i;
        var n;
        var a;
        return {
          characterId: (a = e.characterId) == null ? undefined : a.toString(),
          characterName: e.characterName,
          description: (t = e.description) != null ? t : "",
          refIpWeight: (i = e.refIdWeight) != null ? i : 0,
          refIdWeight: (n = e.refIdWeight) != null ? n : 0,
        };
      }),
    };
  }
  _createStyleReferenceModel(e) {
    let t;
    let i;
    T.F4(
      (i = e.styleReference) == null ? undefined : i.image,
      "stylereference should not be nil",
    );
    return {
      abilityName: r.DABlendAbilityName.StyleReference,
      styleReference: a._(n._({}, e.styleReference), {
        image: e.styleReference.image,
        styleWeight: (t = e.styleReference.styleWeight) != null ? t : 0,
      }),
    };
  }
  _createFaceGanModel(e) {
    let t;
    const i = this._getAbilityImageItem(e, 0);
    return {
      abilityName: r.DABlendAbilityName.FaceGan,
      source: i,
      zipUrl:
        (t = this._effectItem) == null ? undefined : t.commonAttr.itemUrls[0],
      faceData: [],
    };
  }
  _createControlNetModel(e) {
    let t;
    let i;
    let n;
    const _controlNetAbilityIndex = this._controlNetAbilityIndex;
    const o =
      (n = e.controlNetList) == null ? undefined : n[_controlNetAbilityIndex];
    this._controlNetAbilityIndex++;
    T.F4(o, "controlNet item should not be nil");
    if (o.name === _._.BgPaint) {
      return this._createBgPaintControlNet(e, o, _controlNetAbilityIndex);
    }
    const l = D.j((t = e.extra) != null ? t : "[]");
    const d = M.A(l) ? l : l[_controlNetAbilityIndex];
    const controlNet = this._createNormalControlNet(e, o);
    const m = {
      name: o.name,
      fitMode: (i = d.fitMode) != null ? i : j.AdaptToCanvas,
      imageIndex: 0,
    };
    return {
      abilityName: r.DABlendAbilityName.ControlNet,
      controlNet,
      extra: m,
    };
  }
  _createByteEditModel(e) {
    const t = this._getAbilityImageItem(e, 0);
    return {
      abilityName: r.DABlendAbilityName.ByteEdit,
      source: t,
      strength: e.strength,
    };
  }
  _createBgPaintModel(e) {
    if (this._isLegacyBgPaint(e.extra)) {
      a = this._getAbilityImageItem(e, 0);
      o = this._getAbilityImageItem(e, 1);
    } else {
      i = this._getAbilityImageItem(e, 0);
      n = this._getAbilityImageItem(e, 1);
      a = this._getAbilityImageItem(e, 2);
      o = this._getAbilityImageItem(e, 3);
    }
    let t;
    var i;
    var n;
    var a;
    var o;
    const l = {
      moveX: 0,
      moveY: 0,
      scale: 1,
      rotate: 0,
      ...D.j((t = e.extra) != null ? t : "{}"),
    };
    return {
      abilityName: r.DABlendAbilityName.BgPaint,
      image: n,
      mask: i,
      originImage: o,
      originMask: a,
      extra: l,
    };
  }
  _createNormalControlNet(e, t) {
    const { name, strength = 0, imageIndex = 0 } = t;
    const l = {
      name,
      strength,
      imageIndex,
    };
    const d = this._getAbilityImageItem(e, imageIndex);
    const u = this._getAbilityImageItem(e, imageIndex + 1);
    const previewImage = this._getAbilityImageItem(e, imageIndex + 2);
    switch (name) {
      case _._.Depth:
        return a._(n._({}, l), {
          name: _._.Depth,
          depth: {
            image: d,
            originImage: u,
            previewImage,
          },
        });
      case _._.Pose:
        return a._(n._({}, l), {
          name: _._.Pose,
          pose: {
            image: d,
            originImage: u,
            previewImage,
          },
        });
      case _._.Canny:
        return a._(n._({}, l), {
          name: _._.Canny,
          canny: {
            image: d,
            originImage: u,
            previewImage,
          },
        });
      default:
        T.Iv("".concat(name, " unknown controlnet name"));
    }
  }
  _createStyleCodeModel(e) {
    T.F4(e.commonAsset, "stylecode commonAsset should not be nil");
    const { assetCode, referImageList } = e.commonAsset;
    return {
      abilityName: r.DABlendAbilityName.StyleCode,
      code: assetCode,
      referImageList,
    };
  }
  _getAbilityImageItem(e, t) {
    let i;
    let n;
    const a = (i = e.largeImageList) == null ? undefined : i[t];
    T.F4(a, "ability image should not be nil");
    const o = (n = e.coverImageList) == null ? undefined : n[t];
    return {
      imageUri: a.imageUri,
      width: a.width,
      height: a.height,
      imageUrl: a.imageUrl,
      coverUrlMap: o == null ? undefined : o.coverUrlMap,
    };
  }
  _createBgPaintControlNet(e, t, i) {
    let n;
    let a;
    let o;
    let l;
    let d;
    const u = this._getAbilityImageItem(e, (n = t.maskIndex) != null ? n : 0);
    const m = this._getAbilityImageItem(e, (a = t.imageIndex) != null ? a : 1);
    const s = this._getAbilityImageItem(
      e,
      ((o = t.imageIndex) != null ? o : 1) + 1,
    );
    const g = this._getAbilityImageItem(
      e,
      ((l = t.imageIndex) != null ? l : 1) + 2,
    );
    const p = D.j((d = e.extra) != null ? d : "[]");
    return {
      abilityName: r.DABlendAbilityName.BgPaint,
      image: m,
      mask: u,
      originImage: g,
      originMask: s,
      extra: p[i],
    };
  }
  _isLegacyBgPaint(e) {
    return Object.keys(D.j(e != null ? e : "{}")).length === 0;
  }
  constructor(e) {
    this._effectItem = e;
    this._controlNetAbilityIndex = 0;
  }
}
class C {
  get coreParam() {
    return this._getCoreParam(this._mainComponent);
  }
  paintingParam(e) {
    let t;
    let i;
    let o;
    let r;
    const l = this._paintingParam(e);
    const d = this._getUploadedPaintingOriginImage();
    if (d) {
      return a._(n._({}, l), {
        prompt:
          (t =
            (i = l == null ? undefined : l.prompt) != null
              ? i
              : (r = this.coreParam) == null
                ? undefined
                : r.prompt) != null
            ? t
            : "",
        generateCount:
          (o = l == null ? undefined : l.generateCount) != null ? o : 1,
        originImage: d,
      });
    }
    return l;
  }
  _getUploadedPaintingOriginImage() {
    if (
      ((i = this._mainComponent) == null ? undefined : i.generateType) ===
      r.DAImageGenerateType.unifiedGenerate
    ) {
      let e;
      let t;
      var i;
      let n;
      let a;
      let o;
      let l;
      let d;
      let u;
      let m;
      let s;
      let g;
      let p;
      const c =
        (o = this._mainComponent.abilities) == null ||
        (a = o.unifiedGenerate) == null ||
        (n = a.unifiedAbilityList) == null
          ? undefined
          : n.find(
              (e) =>
                e.abilityCode === r.AbilityCode.Inpainting ||
                e.abilityCode === r.AbilityCode.InpaintingRemove ||
                e.abilityCode === r.AbilityCode.OutPainting,
            );
      const v =
        c == null ||
        (s = c.abilityParam) == null ||
        (m = s.resource_list) == null ||
        (u = m.find(
          (e) =>
            e.purpose === r.ResourcePurpose.ORIGINAL_IMAGE &&
            e.resource_type === r.ResourceType.IMAGE,
        )) == null ||
        (d = u.content) == null ||
        (l = d.image) == null
          ? undefined
          : l.image_content;
      if (v == null ? undefined : v.uri) {
        const f =
          (p = this._resources) == null ||
          (g = p.find((e) => e.key === v.uri)) == null
            ? undefined
            : g.imageInfo;
        return {
          imageUri: v.uri,
          imageUrl: f == null ? undefined : f.imageUrl,
          width: (e = f == null ? undefined : f.width) != null ? e : v.width,
          height: (t = f == null ? undefined : f.height) != null ? t : v.height,
        };
      }
    }
  }
  _paintingParam(e) {
    let t;
    let i;
    let o;
    let l;
    let d;
    let u;
    let m;
    let s;
    let g;
    let p;
    let c;
    let v;
    let f;
    let y;
    let h;
    let A;
    let T;
    let D;
    let _;
    let b;
    let R;
    let P;
    let M;
    let S;
    let C;
    let w;
    let V;
    let x;
    const N = this._getServerPaintingParams(e);
    if (!this._mainComponent) {
      return N;
    }
    const G = this._getCoreParam(this._mainComponent);
    const { abilities } = (t = this._mainComponent) != null ? t : {};
    const L =
      this._mainComponent.generateType === r.DAImageGenerateType.unifiedGenerate
        ? abilities == null ||
          (y = abilities.unifiedGenerate) == null ||
          (f = y.unifiedAbilityList) == null ||
          (v = f.find((e) => e.abilityCode === r.AbilityCode.OutPainting)) ==
            null ||
          (c = v.abilityParam) == null ||
          (p = c.option) == null
          ? undefined
          : p.out_painting
        : undefined;
    if (L) {
      return a._(n._({}, N), {
        prompt:
          (w =
            (V = G == null ? undefined : G.prompt) != null
              ? V
              : N == null
                ? undefined
                : N.prompt) != null
            ? w
            : "",
        generateCount:
          (x = N == null ? undefined : N.generateCount) != null ? x : 1,
        upScale: {
          top: L.top,
          bottom: L.bottom,
          left: L.left,
          right: L.right,
          maxSize: L.max_size,
          imageRatio: L.image_ratio,
        },
      });
    }
    if (
      !(abilities == null || (h = abilities.painting) == null
        ? undefined
        : h.posteditParam) ||
      !G
    ) {
      return N;
    }
    const U = (A = this._draft) == null ? undefined : A.findRootComponent();
    const B = U instanceof r.DAImageBaseComponent ? U : undefined;
    return {
      prompt:
        (i = (o = G.prompt) != null ? o : N == null ? undefined : N.prompt) !=
        null
          ? i
          : "",
      originPrompt:
        (l =
          (d =
            B == null ||
            (_ = B.abilities) == null ||
            (D = _.generate) == null ||
            (T = D.coreParam) == null
              ? undefined
              : T.prompt) != null
            ? d
            : B == null ||
                (P = B.abilities) == null ||
                (R = P.blend) == null ||
                (b = R.coreParam) == null
              ? undefined
              : b.prompt) != null
          ? l
          : N == null
            ? undefined
            : N.originPrompt,
      maskUri:
        (u = (M = abilities.painting) == null ? undefined : M.maskUri) != null
          ? u
          : N == null
            ? undefined
            : N.maskUri,
      maskUrl:
        (m = this._getImageResourceUrl(
          (S = abilities.painting) == null ? undefined : S.maskUri,
        )) != null
          ? m
          : N == null
            ? undefined
            : N.maskUrl,
      upScale:
        (s = r_2((C = abilities.painting) == null ? undefined : C.upScale)) !=
        null
          ? s
          : N == null
            ? undefined
            : N.upScale,
      generateCount:
        (g = N == null ? undefined : N.generateCount) != null ? g : 1,
    };
  }
  _getLargeImageInfo(e, t) {
    if (t == null ? undefined : t.largeImageInfo) {
      let i;
      let n;
      let a;
      return {
        width: (i = t.largeImageInfo.width) != null ? i : 1024,
        height: (n = t.largeImageInfo.height) != null ? n : 1024,
        resolutionType: {
          [r.DAImageResolutionType.ImageResolutionType_1k]: m_1.Resolution1k,
          [r.DAImageResolutionType.ImageResolutionType_1_5k]:
            m_1.Resolution1_5k,
          [r.DAImageResolutionType.ImageResolutionType_2k]: m_1.Resolution2k,
          [r.DAImageResolutionType.ImageResolutionType_4k]: m_1.Resolution4k,
          [r.DAImageResolutionType.ImageResolutionType_8k]: m_1.Resolution8k,
        }[
          (a = t.largeImageInfo.resolutionType) != null
            ? a
            : r.DAImageResolutionType.ImageResolutionType_1k
        ],
      };
    }
    const o = X(I(this._mainComponent), this._resources);
    if (o) {
      let l;
      let u;
      let m;
      let s;
      let p;
      const c = {
        [r.DAImageProHDResolutionType.FourK]: m_1.Resolution4k,
        [r.DAImageProHDResolutionType.TwoK]: m_1.Resolution2k,
        [r.DAImageProHDResolutionType.EightK]: m_1.Resolution8k,
      };
      return {
        width: (l = o.width) != null ? l : 1024,
        height: (u = o.height) != null ? u : 1024,
        resolutionType:
          c[
            (m =
              (p = this._mainComponent.abilities) == null ||
              (s = p.proHD) == null
                ? undefined
                : s.resolutionType) != null
              ? m
              : r.DAImageProHDResolutionType.TwoK
          ],
      };
    }
    return e.largeImageInfo;
  }
  _getImageRatio(e, t) {
    if (e == null ? undefined : e.imageRatio) {
      return e.imageRatio;
    }
    const i = this._getMainRatioFromDraftResource(I(this._mainComponent));
    return i || (t == null ? undefined : t.imageRatio);
  }
  _getUnifiedGenerateV2OriginImageRatio() {
    if (
      ((e = this._mainComponent) == null ? undefined : e.generateType) ===
      r.DAImageGenerateType.unifiedGenerateV2
    ) {
      var e;
      let t;
      let i;
      let n;
      let a;
      let o;
      const l =
        (o = this._mainComponent.abilities) == null ||
        (a = o.unifiedGenerateV2) == null ||
        (n = a.unifiedAbilityList) == null ||
        (i = n
          .flatMap((e) => {
            var t;
            if ((t = e.resourceList) != null) {
              return t;
            }
            return [];
          })
          .find(
            (e) =>
              e.resourceType === r.ResourceType.IMAGE &&
              e.purpose === r.ResourcePurpose.ORIGINAL_IMAGE,
          )) == null ||
        (t = i.content) == null
          ? undefined
          : t.image;
      const width = Number(l == null ? undefined : l.width);
      const height = Number(l == null ? undefined : l.height);
      if (
        Number.isFinite(width) &&
        Number.isFinite(height) &&
        !(width <= 0) &&
        !(height <= 0)
      ) {
        return B({
          width,
          height,
        });
      }
    }
  }
  _getMainRatioFromDraftResource(e) {
    const t = X(e, this._resources);
    if (t) {
      let i;
      let n;
      const a = B({
        width: (i = t == null ? undefined : t.width) != null ? i : 0,
        height: (n = t == null ? undefined : t.height) != null ? n : 0,
      });
      if (a) {
        return a;
      }
    }
  }
  textToImageParams(e) {
    let t;
    let i;
    let o;
    let l;
    let d;
    let u;
    let g;
    let p;
    const c = this._getServerTextToImageParams(e);
    if (!this._mainComponent) {
      return a._(n._({}, c), {
        prompt: I_1(c.prompt),
        modelConfig: e == null ? undefined : e.modelConfig,
      });
    }
    const v = this._getCoreParam(this._mainComponent);
    const f = this._getLargeImageInfo(c, v);
    const I =
      this._mainComponent.generateType ===
      r.DAImageGenerateType.unifiedGenerateV2;
    const y =
      I && (t = this._getUnifiedGenerateV2OriginImageRatio()) != null
        ? t
        : this._getImageRatio(v, e);
    const h = y === undefined || !r_1(y, f);
    const isIntelligentAspectRatio = v == null ? undefined : v.intelligentRatio;
    return {
      prompt: I_1(
        (i = v == null ? undefined : v.prompt) != null ? i : c.prompt,
      ),
      modelRewrittenPrompt: c.modelRewrittenPrompt,
      imageRatio: !I && (h || isIntelligentAspectRatio) ? undefined : y,
      isIntelligentAspectRatio,
      largeImageInfo: f,
      sampleStrength:
        (o = v == null ? undefined : v.sampleStrength) != null
          ? o
          : c.sampleStrength,
      userNegativePrompt:
        (l = v == null ? undefined : v.negativePrompt) != null
          ? l
          : c.userNegativePrompt,
      seed: (d = v == null ? undefined : v.seed) != null ? d : c.seed,
      quality: (u = v == null ? undefined : v.quality) != null ? u : c.quality,
      background:
        (g = v == null ? undefined : v.background) != null ? g : c.background,
      stylize: (p = v == null ? undefined : v.stylize) != null ? p : c.stylize,
      modelConfig: e == null ? undefined : e.modelConfig,
    };
  }
  blendImageInfo(e) {
    if (!this._mainComponent) {
      var t;
      var i;
      var n;
      var a;
      var o;
      return new S(e).formatBlendImageInfo();
    }
    const { abilities } = (t = this._mainComponent) != null ? t : {};
    const d = (n = this._draft) == null ? undefined : n.findRootComponent();
    const u = d instanceof r.DAImageBaseComponent ? d : undefined;
    const m =
      (i = abilities == null ? undefined : abilities.blend) != null
        ? i
        : u == null || (a = u.abilities) == null
          ? undefined
          : a.blend;
    if (m) {
      return new P(this._resources).formatBlendImageInfo({
        abilityList: m.abilityList,
        promptPlaceholderInfoList:
          (o = m.promptPlaceholderInfoList) == null
            ? undefined
            : o.map((e) => {
                var t;
                return {
                  abilityIndex: (t = e.abilityIndex) != null ? t : 0,
                };
              }),
      });
    }
    return new S(e).formatBlendImageInfo();
  }
  proHDParams() {
    if (
      this._mainComponent &&
      this._mainComponent.generateType === r.DAImageGenerateType.proHD
    ) {
      let e;
      let t;
      let i;
      let n;
      let a;
      const { abilities } = this._mainComponent;
      const l = abilities == null ? undefined : abilities.proHD;
      if (l) {
        const d = X(
          (a = l.posteditParam) == null ? undefined : a.originImage,
          this._resources,
        );
        if (d) {
          return {
            detailStrength: (e = l.detailStrength) != null ? e : 0.5,
            originalImageStrength:
              (t = l.originalImageStrength) != null ? t : 0.5,
            sceneType:
              (i = l.hdSceneType) != null ? i : r.DAImageProHDSceneType.Auto,
            resolutionType:
              (n = l.resolutionType) != null
                ? n
                : r.DAImageProHDResolutionType.FourK,
            originImage: d,
          };
        }
      }
    }
  }
  viewControlParams(e) {
    if (
      !this._mainComponent ||
      this._mainComponent.generateType !==
        r.DAImageGenerateType.unifiedGenerateV2
    ) {
      if (e == null) {
        return undefined;
      }
      return e.viewControlParams;
    }
    let t;
    let i;
    let n;
    let a;
    let o;
    let l;
    const d =
      (l = this._mainComponent.abilities) == null ||
      (o = l.unifiedGenerateV2) == null ||
      (a = o.unifiedAbilityList) == null ||
      (n = a.find((e) => {
        var t;
        var i;
        if ((i = e.policy) == null || (t = i.abilityOption) == null) {
          return undefined;
        }
        return t.viewControl;
      })) == null ||
      (i = n.policy) == null ||
      (t = i.abilityOption) == null
        ? undefined
        : t.viewControl;
    if (d) {
      return {
        yaw: d.yaw,
        pitch: d.pitch,
        distance: d.distance,
      };
    }
    if (e == null) {
      return undefined;
    }
    return e.viewControlParams;
  }
  canvasDataParams() {
    if (this._mainComponent) {
      const { generateType, abilities } = this._mainComponent;
      if (generateType === r.DAImageGenerateType.painting) {
        const { painting } = abilities != null ? abilities : {};
        if (painting == null ? undefined : painting.canvasData) {
          return {
            draftId: painting.canvasData.draftId,
            workspaceId: painting.canvasData.workspaceId,
          };
        }
      }
    }
  }
  minFeatures() {
    if (this._draft) {
      return this._draft.calculateMinFeatures();
    }
  }
  hasModel() {
    let e;
    const t = (e = this._draft) == null ? undefined : e.findRootComponent();
    const i = t instanceof r.DAImageBaseComponent ? t : undefined;
    return (
      !!(i == null ? undefined : i.genType) &&
      i.generateType !== r.DAImageGenerateType.proHD &&
      ![
        r.DAAIGCGenerateType.imageFineTune,
        r.DAAIGCGenerateType.cutout,
      ].includes(i.genType)
    );
  }
  getUsedPostEditTypes() {
    let e;
    for (var t = this._mainComponent, i = []; t;) {
      if (t instanceof r.DAImageBaseComponent) {
        const n = this._getPostEditTypeFromComponent(t);
        if (n) {
          i.unshift(n);
        }
      }
      t = (e = this._draft) == null ? undefined : e.findParentComponent(t);
    }
    return i;
  }
  getGenerateCount() {
    let e;
    let t;
    let i;
    if (
      (i = this._mainComponent) == null ||
      (t = i.abilities) == null ||
      (e = t.genOption) == null
    ) {
      return undefined;
    }
    return e.genCount;
  }
  getIsForceSingleGeneration() {
    let e;
    let t;
    let i;
    if (
      (i = this._mainComponent) == null ||
      (t = i.abilities) == null ||
      (e = t.genOption) == null
    ) {
      return undefined;
    }
    return e.isForceSingle;
  }
  postEditOriginItemId() {
    let e;
    let t;
    let i;
    let n;
    let a;
    let o;
    let l;
    let d;
    let u;
    let m;
    let s;
    let g;
    let p;
    let c;
    let v;
    const f = [r.DAAIGCGenerateType.blend, r.DAAIGCGenerateType.text2image];
    const I =
      (i = this._draft) == null
        ? undefined
        : i.componentList.find((e) => e.genType && !f.includes(e.genType));
    if (I && I instanceof r.DAImageBaseComponent) {
      const y =
        (e =
          (t = (n = I.abilities) == null ? undefined : n.painting) != null
            ? t
            : (a = I.abilities) == null
              ? undefined
              : a.normalHD) != null
          ? e
          : (o = I.abilities) == null
            ? undefined
            : o.superResolution;
      const h =
        y == null || (d = y.posteditParam) == null || (l = d.itemId) == null
          ? undefined
          : l.toString();
      return (
        h ||
        ((v = I.abilities) == null ||
        (c = v.unifiedGenerateV2) == null ||
        (p = c.unifiedAbilityList) == null ||
        (g = p
          .flatMap((e) => {
            var t;
            if ((t = e.resourceList) != null) {
              return t;
            }
            return [];
          })
          .find(
            (e) =>
              e.resourceType === r.ResourceType.IMAGE &&
              e.purpose === r.ResourcePurpose.ORIGINAL_IMAGE,
          )) == null ||
        (s = g.content) == null ||
        (m = s.image) == null ||
        (u = m.itemId) == null
          ? undefined
          : u.toString())
      );
    }
  }
  _getPostEditTypeFromComponent(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    let l;
    let d;
    let u;
    let m;
    const { abilities, generateType } = e;
    const c =
      abilities == null ||
      (i = abilities.normalHD) == null ||
      (t = i.posteditParam) == null
        ? undefined
        : t.generateType;
    const v =
      abilities == null ||
      (a = abilities.painting) == null ||
      (n = a.posteditParam) == null
        ? undefined
        : n.generateType;
    const f =
      abilities == null ||
      (l = abilities.superResolution) == null ||
      (o = l.posteditParam) == null
        ? undefined
        : o.generateType;
    const I =
      (abilities == null || (d = abilities.unifiedGenerate) == null
        ? undefined
        : d.generateType) === r.DAAIGCGenerateType.cutout;
    const y = this._getUnifiedGenerateV2PostEditType(
      abilities == null || (u = abilities.unifiedGenerateV2) == null
        ? undefined
        : u.generateType,
    );
    switch (generateType) {
      case r.DAImageGenerateType.normalHD:
        if (c) {
          return p.j.SuperDefinition;
        }
        return undefined;
      case r.DAImageGenerateType.painting:
        return this._getPaintingPostEditType(v);
      case r.DAImageGenerateType.superResolution:
        if (f) {
          return p.j.SuperResolution;
        }
        return undefined;
      case r.DAImageGenerateType.proHD:
        return this._getProHDPostEditType(
          abilities == null || (m = abilities.proHD) == null
            ? undefined
            : m.resolutionType,
        );
      case r.DAImageGenerateType.unifiedGenerate:
        if (I) {
          return p.j.Cutout;
        }
        return undefined;
      case r.DAImageGenerateType.unifiedGenerateV2:
        return y;
      default:
        return;
    }
  }
  _getUnifiedGenerateV2PostEditType(e) {
    switch (e) {
      case r.DAAIGCGenerateType.viewControl:
        return p.j.ViewControl;
      case r.DAAIGCGenerateType.smartEdit:
        return p.j.SmartEdit;
      default:
        return;
    }
  }
  _getPaintingPostEditType(e) {
    switch (e) {
      case r.DAAIGCGenerateType.inPainting:
        return p.j.InPainting;
      case r.DAAIGCGenerateType.outPainting:
        return p.j.OutPainting;
      case r.DAAIGCGenerateType.inPaintingRemove:
        return p.j.InPaintRemove;
      case r.DAAIGCGenerateType.byteEditPainting:
        return p.j.ByteEditPainting;
      case r.DAAIGCGenerateType.imageFineTune:
        return p.j.ImageFineTune;
      default:
        return;
    }
  }
  _getProHDPostEditType(e) {
    switch (e) {
      case r.DAImageProHDResolutionType.FourK:
        return p.j.ProHD4K;
      case r.DAImageProHDResolutionType.TwoK:
        return p.j.ProHD2K;
      default:
        return;
    }
  }
  _getCoreParam(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    let l;
    let d;
    let u;
    let m;
    let s;
    let g;
    let p;
    const { abilities, generateType } = e != null ? e : {};
    if (!abilities) {
      return i;
    }
    const f = (e == null ? undefined : e.parentId)
      ? (t = this._draft) == null
        ? undefined
        : t.findRootComponent()
      : undefined;
    const I = f instanceof r.DAImageBaseComponent ? f : undefined;
    switch (generateType) {
      case r.DAImageGenerateType.painting:
        if ((i = this._getCoreParam(I))) {
          i.prompt =
            (n =
              (o = abilities.painting) == null || (a = o.coreParam) == null
                ? undefined
                : a.prompt) != null
              ? n
              : i.prompt;
        } else {
          i = (l = abilities.painting) == null ? undefined : l.coreParam;
        }
        if (i) {
          i.strength =
            (d =
              (m = abilities.painting) == null || (u = m.coreParam) == null
                ? undefined
                : u.strength) != null
              ? d
              : i.strength;
          this._updatePaintingLargeImageInfoAndRatio(i, e);
        }
        break;
      case r.DAImageGenerateType.generate:
        i = this._cloneCoreParam(
          (s = abilities.generate) == null ? undefined : s.coreParam,
        );
        break;
      case r.DAImageGenerateType.blend:
        i = this._cloneCoreParam(
          (g = abilities.blend) == null ? undefined : g.coreParam,
        );
        break;
      case r.DAImageGenerateType.superResolution:
      case r.DAImageGenerateType.normalHD:
        i = this._getCoreParam(I);
        this._updateLargeImageInfoAndRatioWithClosestComponent(i, e);
        break;
      case r.DAImageGenerateType.unifiedGenerate:
        i = this._cloneCoreParam(
          (p = abilities.unifiedGenerate) == null ? undefined : p.coreParam,
        );
        break;
      case r.DAImageGenerateType.unifiedGenerateV2:
        i = this._getCoreParam(I);
        this._updateLargeImageInfoAndRatioWithClosestComponent(i, e);
    }
    return i;
  }
  _findClosestPaintingLargeImageInfoAndRatio(e, largeImageInfo) {
    let i;
    let l;
    if (e) {
      for (
        var d =
          (i = this._draft) == null
            ? undefined
            : i.componentList.find((t) => t.id === e.parentId);
        d;
      ) {
        l = this;
        const u = (() => {
          if (d instanceof r.DAImageBaseComponent) {
            var e;
            let i;
            let o;
            const { coreParam, upScale } =
              (i = (o = d.abilities) == null ? undefined : o.painting) != null
                ? i
                : {};
            const s = coreParam == null ? undefined : coreParam.largeImageInfo;
            if (s) {
              return {
                v: {
                  largeImageInfo: s,
                  ratio: coreParam.imageRatio,
                },
              };
            }
            const g = a._(n._({}, coreParam), {
              largeImageInfo,
            });
            const p = l._cloneCoreParam(g);
            if (p && upScale) {
              l._updateLargeImageInfoByUpScale(p, upScale);
              return {
                v: {
                  largeImageInfo: p.largeImageInfo,
                  ratio: upScale.imageRatio,
                },
              };
            }
          }
          const { parentId } = d;
          d =
            (e = l._draft) == null
              ? undefined
              : e.componentList.find((e) => e.id === parentId);
        })();
        if (o._(u) === "object") {
          return u.v;
        }
      }
    }
  }
  _cloneCoreParam(e) {
    if (e) {
      const t = new r.DAGenCoreParam();
      t.model = e.model;
      t.prompt = e.prompt;
      t.negativePrompt = e.negativePrompt;
      t.sampleSteps = e.sampleSteps;
      t.seed = e.seed;
      t.sampleStrength = e.sampleStrength;
      t.imageRatio = e.imageRatio;
      t.largeImageInfo = e.largeImageInfo;
      t.strength = e.strength;
      t.intelligentRatio = e.intelligentRatio;
      t.quality = e.quality;
      t.background = e.background;
      t.stylize = e.stylize;
      return t;
    }
  }
  _cloneLargeImageInfo(e) {
    if (e) {
      const t = new r.DAReqImageInfo();
      t.format = e.format;
      t.height = e.height;
      t.width = e.width;
      t.resolutionType = e.resolutionType;
      t.imageSceneList = e.imageSceneList;
      return t;
    }
  }
  _updateLargeImageInfoByUpScale(e, t) {
    const {
      imageRatio,
      top = 0,
      left = 0,
      bottom = 0,
      right = 0,
      maxSize = 1920,
    } = t;
    if (imageRatio) {
      let m;
      const s = Pn[imageRatio];
      if (
        ((m = e.largeImageInfo) == null ? undefined : m.width) &&
        e.largeImageInfo.height
      ) {
        e.largeImageInfo.width = Math.round(
          e.largeImageInfo.width * (1 + left + right),
        );
        e.largeImageInfo.height = Math.round(
          e.largeImageInfo.height * (1 + top + bottom),
        );
        if (e.largeImageInfo.width > maxSize) {
          e.largeImageInfo.width = maxSize;
          e.largeImageInfo.height = (maxSize / s.width) * s.height;
        }
        if (e.largeImageInfo.height > maxSize) {
          e.largeImageInfo.height = maxSize;
          e.largeImageInfo.width = (maxSize / s.height) * s.width;
        }
      } else {
        e.largeImageInfo = new r.DAReqImageInfo();
        e.largeImageInfo.width = s.width;
        e.largeImageInfo.height = s.height;
      }
    }
  }
  _updateLargeImageInfoAndRatioWithClosestComponent(e, t) {
    let i;
    const { largeImageInfo, ratio } =
      (i = this._findClosestPaintingLargeImageInfoAndRatio(
        t,
        e == null ? undefined : e.largeImageInfo,
      )) != null
        ? i
        : {};
    if (largeImageInfo && e) {
      const o = this._cloneLargeImageInfo(largeImageInfo);
      e.largeImageInfo = o;
      if (ratio) {
        e.imageRatio = ratio;
        return;
      }
      this._updateRatioByLargeImageInfo(e, o);
    }
  }
  _updatePaintingLargeImageInfoAndRatio(e, t) {
    if (t) {
      let i;
      let n;
      const { upScale, coreParam } =
        (i = (n = t.abilities) == null ? undefined : n.painting) != null
          ? i
          : {};
      if (coreParam == null ? undefined : coreParam.largeImageInfo) {
        const r = this._cloneLargeImageInfo(coreParam.largeImageInfo);
        e.largeImageInfo = r;
        this._updateRatioByLargeImageInfo(e, r);
      } else {
        if (upScale) {
          this._updateLargeImageInfoAndRatioWithClosestComponent(e, t);
          this._updateLargeImageInfoByUpScale(e, upScale);
          e.imageRatio = upScale.imageRatio;
        } else {
          this._updateLargeImageInfoAndRatioWithClosestComponent(e, t);
        }
      }
    }
  }
  _updateRatioByLargeImageInfo(e, t) {
    if (e) {
      const i = B(
        (t == null ? undefined : t.width) && t.height
          ? {
              width: t.width,
              height: t.height,
            }
          : undefined,
      );
      if (i) {
        e.imageRatio = i;
      }
    }
  }
  _getServerPaintingParams(e) {
    let t;
    let maskUri;
    let maskUrl;
    let upScale;
    let originPrompt;
    let r;
    let l;
    let d;
    let u;
    let m;
    let s;
    let g;
    let p;
    const {
      generateCount = 1,
      generateType,
      text2imageParams,
      outPaintingParams,
      inPaintingParams,
      inPaintingRemoveParams,
    } = e != null ? e : {};
    if (generateType && I_3(generateType)) {
      if (generateType === c.ce.InPaint || generateType === c.ce.EttaPainting) {
        maskUri =
          (r =
            inPaintingParams == null ? undefined : inPaintingParams.maskUri) !=
          null
            ? r
            : "";
        maskUrl =
          (l =
            inPaintingParams == null ? undefined : inPaintingParams.maskUrl) !=
          null
            ? l
            : "";
        originPrompt =
          (d =
            inPaintingParams == null
              ? undefined
              : inPaintingParams.originPrompt) != null
            ? d
            : "";
      } else if (generateType === c.ce.InPaintRemove) {
        maskUri =
          (u =
            inPaintingRemoveParams == null
              ? undefined
              : inPaintingRemoveParams.maskUri) != null
            ? u
            : "";
        maskUrl =
          (m =
            inPaintingRemoveParams == null
              ? undefined
              : inPaintingRemoveParams.maskUrl) != null
            ? m
            : "";
        originPrompt =
          (s =
            inPaintingRemoveParams == null
              ? undefined
              : inPaintingRemoveParams.originPrompt) != null
            ? s
            : "";
      } else if (generateType === c.ce.OutPaint) {
        upScale =
          (g =
            outPaintingParams == null
              ? undefined
              : outPaintingParams.upScale) != null
            ? g
            : undefined;
        originPrompt =
          (p =
            outPaintingParams == null
              ? undefined
              : outPaintingParams.originPrompt) != null
            ? p
            : "";
      }
      return {
        prompt:
          (t =
            text2imageParams == null ? undefined : text2imageParams.prompt) !=
          null
            ? t
            : "",
        originPrompt,
        generateCount,
        upScale,
        maskUri,
        maskUrl,
      };
    }
  }
  _getServerTextToImageParams(e) {
    let t;
    let i;
    let n;
    let a;
    let o;
    return {
      prompt: (t = e == null ? undefined : e.prompt) != null ? t : "",
      modelRewrittenPrompt: e == null ? undefined : e.modelRewrittenPrompt,
      largeImageInfo: this._convertLargeImageInfo(
        e == null ? undefined : e.largeImageInfo,
      ),
      imageRatio:
        (i = e == null ? undefined : e.imageRatio) != null ? i : undefined,
      sampleStrength:
        (n = e == null ? undefined : e.sampleStrength) != null ? n : 0.5,
      userNegativePrompt:
        (a = e == null ? undefined : e.userNegativePrompt) != null ? a : "",
      seed: (o = e == null ? undefined : e.seed) != null ? o : -1,
      quality: e == null ? undefined : e.quality,
      background: e == null ? undefined : e.background,
      stylize: e == null ? undefined : e.stylize,
    };
  }
  _getImageResourceUrl(e) {
    if (e) {
      let t;
      let i;
      const n =
        (i = this._resources) == null ||
        (t = i.find((t) => t.key === e)) == null
          ? undefined
          : t.imageInfo;
      if (n == null) {
        return undefined;
      }
      return n.imageUrl;
    }
  }
  _convertLargeImageInfo(e) {
    let t;
    let i;
    let n;
    return {
      width: (t = e == null ? undefined : e.width) != null ? t : 1024,
      height: (i = e == null ? undefined : e.height) != null ? i : 1024,
      resolutionType:
        (n = e == null ? undefined : e.resolutionType) != null
          ? n
          : m_1.Resolution1k,
    };
  }
  constructor(e, t) {
    this._draft = e;
    this._resources = t;
    if (e) {
      var i = e.componentList.find((t) => t.id === e.mainComponentId);
      if (i instanceof r.DAImageBaseComponent) {
        this._mainComponent = i;
      }
    }
  }
}
export { C as o };
