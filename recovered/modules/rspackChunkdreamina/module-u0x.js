import i from "NY";
import r from "oa";
import n from "bk";
import o from "QWK";
import s from "Qey";
import l from "o7";
import d from "K8";
import g from "Ev";
import c from "aEB";
import m from "Kt";
import u from "prY";
import h from "SZS";
import p from "gpv";
import _ from "Ko";
import f from "yMd";
import y from "gG";
import v from "krN";
import b from "iNQ";
import I from "z7R";
import M from "ZX";
import S from "TK";
import P from "rIS";
import R from "wh";
import C from "aF";
import A from "v1T";
import B from "Erm";
import w from "KqD";
import G from "CrL";
import N from "./module-nXV.js";
import { $ as $_1 } from "./module-CmP.js";
import { d as d_1 } from "./module-eZ4.js";
import { J } from "./module-piJ_2.js";
import k from "dw4";
import E from "Ut";
import T from "Dm";
import x from "JSz";
import F from "xi";
import U from "t0F";
import O from "XJl";
import z from "A3I";
import K from "hef";
import { UT, qG } from "./module-YZ.js";
import { t as t_1 } from "./module-Szn.js";
import V from "Ek3";
import Q from "anN";
import { A_, h9 } from "./module-Uxh.js";
import Z from "ibm";
import X from "bc3";
import { M as M_1 } from "./module-f0P.js";
import Y from "xH6";
import ee from "e3";
import et from "LLl";
import ea from "fF";
import ei from "xm";
import er from "gu";
import en from "vcU";
import eo from "Y9q";
import es from "CoI";
import el from "dHI";
import ed from "JEp";
import eg from "z8f";
import ec from "uhr";
import em from "JG";
import eu from "Nru";
import ep from "xI";
import e_ from "b3";
import ef from "qnN";
import ey from "tq";
import ev from "lu4";
import eb from "j6i";
import eI from "GUP";
import eM from "sl";
import eS from "ZHm";
import eP from "ft";
import eR from "at";
import eC from "Hxq";
import eA from "j5o";
import eB from "Xfi";
import ew from "KDr";
import eG from "./module-Oeb.js";
import * as eN from "./module-jfn.js";
import { FL, Uc } from "./module-CyR.js";
import { B as B_1 } from "./module-Qcs.js";
import { H } from "./module-Xim_2.js";
import ez from "U6";
import { L } from "./module-Ymr.js";
class $ extends l.jG {
  _handleAddReferenceImage(e, t) {
    const a = this._createBlendImageModel(e);
    const { abilityList } = this._imageGeneratorManager.data;
    this._imageGeneratorManager.setAbilityList([...abilityList, a], t);
    this._updateBlendImageSettings(e);
    this._checkModelEttaSupport();
  }
  _handleUpdateReferenceImage(e) {
    const { id, coverUrl, blendModel } = e;
    T.F4(blendModel.model, "blendModel.model is required");
    const r = {
      id,
      coverUrl,
      blendModel: blendModel.model,
    };
    this._updateReferenceImageModel(r);
    this._updateBlendImageSettings(blendModel);
  }
  _handleDragReplaceReferenceImage(e) {
    const { visualIndex, coverUrl, blendModel, imageUrlMap, imageCacheKey } = e;
    T.F4(blendModel.model, "blendModel.model is required");
    const { abilityList } = this._imageGeneratorManager.data;
    const s = abilityList[visualIndex];
    if (s) {
      const l = {
        id: s.id,
        coverUrl,
        coverUrlMap: imageUrlMap,
        coverCacheKey: imageCacheKey,
        blendModel: blendModel.model,
      };
      const d = [...abilityList];
      d[visualIndex] = l;
      this._updateAbilityListAfterReferenceImageChange(d);
      const g = blendModel.ratio ? blendModel.ratio : undefined;
      this._imageGeneratorManager.updateAspectRatio(g);
      this._imageGeneratorManager.updateLargeImageInfo({
        width: blendModel.generateWidth,
        height: blendModel.generateHeight,
      });
      this._updateGenerateSizeFromBlendModel(blendModel);
      if (blendModel.isDimensionLocked !== undefined) {
        this._imageGeneratorManager.updateRatioLockState(
          blendModel.isDimensionLocked,
        );
      }
    }
  }
  _createSimpleBlendImageModel(e, t) {
    let a;
    return {
      id: (a = t == null ? undefined : t.id) != null ? a : x.bz(),
      coverUrl: e.imageUrl,
      coverUrlMap: t == null ? undefined : t.coverUrlMap,
      coverCacheKey: t == null ? undefined : t.coverCacheKey,
      blendModel: {
        abilityName: E.DABlendAbilityName.ByteEdit,
        strength: qG.default / qG.max,
        source: {
          imageUrl: e.imageUrl,
          width: e.width,
          height: e.height,
          title: e.title,
        },
      },
    };
  }
  _handleSimpleImageAdd(e, t) {
    const a =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : "click";
    const i = arguments.length > 3 ? arguments[3] : undefined;
    const r = this._createSimpleBlendImageModel(e, t);
    const { abilityList } = this._imageGeneratorManager.data;
    this._imageGeneratorManager.setAbilityList([...abilityList, r], i);
    this._imageGeneratorManager.reportManager.reportImportReferenceImageMaterial(
      {
        status: "success",
        actionType: a,
      },
    );
    return r;
  }
  _handleSimpleImageReplace(e, t, a) {
    const i =
      arguments.length > 3 && arguments[3] !== undefined
        ? arguments[3]
        : "drag";
    const { abilityList } = this._imageGeneratorManager.data;
    if (t.targetId) {
      const o = this._createSimpleBlendImageModel(
        e,
        r._(
          {
            id: t.targetId,
          },
          a,
        ),
      );
      const s = abilityList.map((e) => {
        if (e.id === t.targetId) {
          return o;
        }
        return e;
      });
      this._imageGeneratorManager.setAbilityList(s);
    } else if (t.targetIndex !== undefined) {
      const l = abilityList[t.targetIndex];
      if (!l) {
        return;
      }
      const d = this._createSimpleBlendImageModel(
        e,
        r._(
          {
            id: l.id,
          },
          a,
        ),
      );
      const g = [...abilityList];
      g[t.targetIndex] = d;
      this._imageGeneratorManager.setAbilityList(g);
    }
    if (i === "drag") {
      this._imageGeneratorManager.reportManager.reportImportReferenceImageMaterial(
        {
          status: "success",
          actionType: i,
        },
      );
    }
  }
  _handleSimpleImageBatchAdd(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "click";
    this._imageGeneratorManager.reportManager.reportImportReferenceImageMaterial(
      {
        status: "success",
        actionType: t,
      },
    );
    const a = e.map((e) => {
      var t = URL.createObjectURL(e);
      return this._createSimpleBlendImageModel({
        imageUrl: t,
        title: U.S(e.name) || undefined,
      });
    });
    const abilityList = this._imageGeneratorManager.data.abilityList;
    if (
      abilityList.every(
        (e) => e.blendModel.abilityName === E.DABlendAbilityName.ByteEdit,
      )
    ) {
      this._imageGeneratorManager.setAbilityList([...abilityList, ...a]);
    } else {
      this._imageGeneratorManager.setAbilityList(a);
    }
    return a;
  }
  _createBlendImageModel(e) {
    T.F4(e.model, "blendModel.model is required");
    return {
      id: x.bz(),
      coverUrl: Q.N(e.model),
      coverUrlMap: e.imageUrlMap,
      coverCacheKey: e.imageCacheKey,
      blendModel: e.model,
    };
  }
  _updateBlendImageSettings(e) {
    this._imageGeneratorManager.updateAspectRatio(e.ratio);
    this._imageGeneratorManager.updateLargeImageInfo({
      width: e.generateWidth,
      height: e.generateHeight,
    });
    this._updateGenerateSizeFromBlendModel(e);
    if (e.isDimensionLocked !== undefined) {
      this._imageGeneratorManager.updateRatioLockState(e.isDimensionLocked);
    }
    if (this._imageGeneratorManager.data.isByteEdit) {
      this._imageGeneratorManager.adjustResolutionAndSizeByCurrentSelectedModel();
    }
  }
  _checkModelEttaSupport() {
    const { currentSelectedImageModel, prompt } =
      this._imageGeneratorManager.data;
    if (!J([f.Si.Etta], currentSelectedImageModel) && d_1(prompt)) {
      this._notificationService.warning(
        s.Ay.t(
          "web_web_t2i_toast_ref_not_support_draw_words",
          {},
          "上传参考图后，暂不支持文字效果增强",
        ),
      );
    }
  }
  _updateAbilityListAfterReferenceImageChange(e) {
    if (
      this._imageGeneratorManager.data.abilityList.find(
        (e) => e.blendModel.abilityName === E.DABlendAbilityName.StyleCode,
      )
    ) {
      return void this._imageGeneratorManager.setAbilityList(e);
    }
    const t = A_(this._imageGeneratorManager.data.prompt);
    if (!t) {
      return void this._imageGeneratorManager.setAbilityList(e);
    }
    const a = e.filter((e) => t_1.includes(e.blendModel.abilityName));
    if (a.length) {
      const i = a.map((e) => z.P(e.blendModel));
      this._notificationService.normal(
        s.Ay.t(
          "web_new_dre_t2i_style_code_conflict_with_notice",
          {
            reference: i.join("、"),
          },
          "风格代码暂不支持和{reference}一同使用",
        ),
      );
      this._imageGeneratorManager.setAbilityList(e);
      return;
    }
    const r = e.concat({
      id: x.uR(),
      coverUrl: "",
      blendModel: {
        abilityName: E.DABlendAbilityName.StyleCode,
        code: t,
      },
    });
    this._imageGeneratorManager.setAbilityList(r);
  }
  _updateReferenceImageModel(e) {
    const { abilityList } = this._imageGeneratorManager.data;
    const a = this._getAbilityListAfterUpdate(abilityList, e);
    this._updateAbilityListAfterReferenceImageChange(a);
  }
  _getAbilityListAfterUpdate(e, t) {
    return e.map((e) => {
      if (e.id === t.id) {
        return t;
      }
      if (
        e.blendModel.abilityName === E.DABlendAbilityName.ByteEdit &&
        t.blendModel.abilityName === E.DABlendAbilityName.ByteEdit
      ) {
        return n._(r._({}, e), {
          blendModel: n._(r._({}, e.blendModel), {
            strength: t.blendModel.strength,
          }),
        });
      }
      return e;
    });
  }
  _updateGenerateSizeFromBlendModel(e) {
    if (
      ((t = e.model) == null ? undefined : t.abilityName) ===
      E.DABlendAbilityName.ByteEdit
    ) {
      var t;
      const { width, height } = e.model.source;
      if (width && height) {
        const r = {
          minLength: h.z,
          maxLength: h.du,
          maxPixelNum: h.zt,
        };
        const { width: width_1, height: height_1 } = Z.F(width / height, r);
        this._imageGeneratorManager.updateBlendModelGenerateSize(
          width_1,
          height_1,
        );
      }
    }
  }
  _processImageValidationErrors(e, t) {
    const a = e.filter((e) => !e.ok);
    for (const i of a) {
      let r;
      let n;
      let o;
      const { code } = i;
      const failReason = this._getImageValidationToastMessage(code);
      this._imageGeneratorManager.reportManager.reportImportReferenceImageMaterial(
        {
          status: "fail",
          failReason,
          actionType:
            (r =
              t == null ||
              (o = t.reportParams) == null ||
              (n = o.importMaterialParams) == null
                ? undefined
                : n.actionType) != null
              ? r
              : "click",
        },
      );
    }
    for (const d of [
      ...new Set(a.map((e) => this._getImageValidationToastMessage(e.code))),
    ]) {
      this._notificationService.warning(d);
    }
  }
  _getImageValidationToastMessage(e) {
    const t = e in V.N ? e : Y.Mi.Unknown;
    return V.N[t];
  }
  _addImageSourceToBlendAbilityList(e, t) {
    const a = this._createByteEditBlendModel(e);
    const i = [...this._imageGeneratorManager.data.abilityList, a];
    this._imageGeneratorManager.setAbilityList(i, t);
  }
  _createByteEditBlendModel(e) {
    const t = e instanceof File ? URL.createObjectURL(e) : e.imageUrl;
    const source =
      e instanceof File
        ? {
            imageUrl: t,
          }
        : e;
    return {
      id: x.bz(),
      coverUrl: t != null ? t : "",
      blendModel: {
        abilityName: E.DABlendAbilityName.ByteEdit,
        strength: qG.default / qG.max,
        source,
      },
    };
  }
  constructor(e, t, a) {
    var r;
    super();
    r = this;
    this._imageGeneratorManager = e;
    this._containerService = t;
    this._notificationService = a;
    this.importBlendImageFromLocal = (e, t) =>
      i._(function* () {
        const { referenceSlotState } = r._imageGeneratorManager.metadata;
        if (referenceSlotState.atLimit) {
          return void r._notificationService.warning(
            s.Ay.t(
              "subject_panel_image_ref_limit_toast",
              {
                num: referenceSlotState.maxReferenceCount,
              },
              "最多使用 {num} 个参考图内容",
            ),
          );
        }
        const i = yield X.Z$(e);
        if (!i.ok) {
          let n;
          let o;
          let l;
          const d = r._getImageValidationToastMessage(i.code);
          r._imageGeneratorManager.reportManager.reportImportReferenceImageMaterial(
            {
              status: "fail",
              failReason: d,
              actionType:
                (n =
                  t == null ||
                  (l = t.reportParams) == null ||
                  (o = l.importMaterialParams) == null
                    ? undefined
                    : o.actionType) != null
                  ? n
                  : "click",
            },
          );
          r._notificationService.warning(d);
          return;
        }
        const { ModelIsSimpleImage } = r._imageGeneratorManager.metadata;
        if (ModelIsSimpleImage) {
          let c;
          let m;
          let u;
          const h = URL.createObjectURL(e);
          return r._handleSimpleImageAdd(
            {
              imageUrl: h,
            },
            {},
            (c =
              t == null ||
              (u = t.reportParams) == null ||
              (m = u.importMaterialParams) == null
                ? undefined
                : m.actionType) != null
              ? c
              : "click",
          );
        }
        r._openAddReferenceImageModal({
          image: {
            file: e,
          },
          options: t,
        });
      })();
    this.importMultipleBlendImagesFromLocal = (e, t) =>
      i._(function* () {
        let a;
        let i;
        let n;
        const o = yield Promise.all(e.map((e) => X.Z$(e)));
        r._processImageValidationErrors(o, t);
        let l = e.filter((e, t) => o[t].ok);
        const { availableReferenceUploadCount, maxReferenceCount } =
          r._imageGeneratorManager.metadata.referenceSlotState;
        if (l.length > availableReferenceUploadCount) {
          r._notificationService.warning(
            s.Ay.t(
              "subject_panel_image_ref_limit_toast",
              {
                num: maxReferenceCount,
              },
              "最多使用 {num} 个参考图内容",
            ),
          );
          l = l.slice(0, availableReferenceUploadCount);
        }
        if (l.length) {
          return r._handleSimpleImageBatchAdd(
            l,
            (a =
              t == null ||
              (n = t.reportParams) == null ||
              (i = n.importMaterialParams) == null
                ? undefined
                : i.actionType) != null
              ? a
              : "click",
          );
        }
        return [];
      })();
    this.appendBlendImageModels = (e, t) => {
      var a = e.map((e) => this._createBlendImageModel(e));
      this._imageGeneratorManager.setAbilityList(
        [...this._imageGeneratorManager.data.abilityList, ...a],
        t,
      );
      e.forEach((e) => {
        this._updateBlendImageSettings(e);
      });
      this._checkModelEttaSupport();
    };
    this.setBlendImageModel = (e) => {
      var t = this._createBlendImageModel(e);
      this._imageGeneratorManager.setAbilityList([t]);
      this._updateBlendImageSettings(e);
      this._checkModelEttaSupport();
    };
    this.deleteOtherReferenceImageParams = (e) => {
      var {
        data: { abilityList },
        reportManager: { referenceImageIds },
      } = this._imageGeneratorManager;
      var i = referenceImageIds.filter((t) => t !== e);
      if (abilityList.length > 0 && i.length > 0) {
        i.forEach((e) => {
          this._imageGeneratorManager.reportManager.deleteReferenceParams(e);
        });
      }
    };
    this.removeBlendImageModel = (e) => {
      var { abilityList } = this._imageGeneratorManager.data;
      var a = abilityList.find((t) => t.id === e);
      var i = M_1(a == null ? undefined : a.blendModel);
      this._imageGeneratorManager.removeAbilityById(e);
      this._imageGeneratorManager.reportManager.deleteReferenceParams(i);
      this._imageGeneratorManager.reportManager.reportDeleteUpload();
    };
    this.replaceBlendImageFromLocal = (e, targetId) =>
      i._(function* () {
        let a;
        const i = yield X.Z$(e);
        if (!i.ok) {
          const { code } = i;
          const o = code in V.N ? code : Y.Mi.Unknown;
          const s = V.N[o];
          r._imageGeneratorManager.reportManager.reportImportReferenceImageMaterial(
            {
              status: "fail",
              failReason: s,
              actionType: "drag",
            },
          );
          r._notificationService.warning(s);
          return;
        }
        const {
          abilityList,
          largeImageInfo,
          aspectRatio,
          isLockRatio,
          imageRangeConfig,
          aspectRatioImageSizeMap,
        } = r._imageGeneratorManager.data;
        const h = abilityList.find((e) => e.id === targetId);
        T.X3(h);
        const p = k.HO(h.blendModel);
        T.X3(p);
        const { ModelIsSimpleImage } = r._imageGeneratorManager.metadata;
        if (ModelIsSimpleImage) {
          const f = URL.createObjectURL(e);
          r._handleSimpleImageReplace(
            {
              imageUrl: f,
            },
            {
              targetId,
            },
            undefined,
            "drag",
          );
          return;
        }
        if (r._imageGeneratorManager.metadata.isModelSupportRefuseImage) {
          const y = r._createByteEditBlendModel(e);
          r._handleUpdateReferenceImage({
            id: h.id,
            coverUrl: y.coverUrl,
            blendModel: {
              model: y.blendModel,
              imageRangeConfig,
              aspectRatioImageSizeMap,
              generateWidth: largeImageInfo.width,
              generateHeight: largeImageInfo.height,
              ratio: aspectRatio,
              isDimensionLocked: isLockRatio,
            },
          });
          return;
        }
        const v = abilityList
          .map((e) => e.blendModel)
          .filter((e) => e !== h.blendModel);
        const {
          referenceImageModalDisplayAbilities,
          shouldDisabledReferenceImageAbilityConflict,
          referenceImageModalUiConfig,
        } = r._imageGeneratorManager.metadata;
        if ((a = r.createReferenceImageModal) != null) {
          a.call(r, {
            containerService: r._containerService,
            image: {
              file: e,
            },
            conflictParams: {
              existAbilityList: v,
              disabled: shouldDisabledReferenceImageAbilityConflict,
            },
            initialBlendParams: {
              model: p,
              imageRangeConfig: r._imageGeneratorManager.data.imageRangeConfig,
              aspectRatioImageSizeMap:
                r._imageGeneratorManager.data.aspectRatioImageSizeMap,
              isDimensionLocked: isLockRatio,
              generateWidth: largeImageInfo.width,
              generateHeight: largeImageInfo.height,
              ratio: aspectRatio,
            },
            displayAbilities: referenceImageModalDisplayAbilities,
            uiConfig: referenceImageModalUiConfig,
            onSave: (e) => {
              r._handleUpdateReferenceImage({
                id: h.id,
                coverUrl: e.model ? Q.N(e.model) : "",
                blendModel: e,
              });
            },
            onCancel: () => {
              F.V.info("onCancel drop from local");
            },
          });
        }
      })();
    this.openEditReferenceImageModal = (referenceId) =>
      i._(function* () {
        const { abilityList } = r._imageGeneratorManager.data;
        const a = abilityList.find((t) => t.id === referenceId);
        T.X3(a);
        const i = k.HO(a.blendModel);
        T.X3(i);
        const n = K.W(i);
        T.X3(n);
        if (!n.imageUri && n.imageUrl) {
          const file = yield O.h(n.imageUrl);
          r._openAddReferenceImageModal({
            image: {
              file,
            },
            referenceId,
          });
          return;
        }
        r._openEditReferenceImageModal(referenceId);
      })();
    this.reorderBlendImageModels = (e, t) => {
      var { abilityList } = this._imageGeneratorManager.data;
      if (
        !(e < 0) &&
        !(e >= abilityList.length) &&
        !(t < 0) &&
        !(t >= abilityList.length)
      ) {
        var i = [...abilityList];
        var [r] = i.splice(e, 1);
        i.splice(t, 0, r);
        this._imageGeneratorManager.setAbilityList(i);
      }
    };
    this.openDragReplaceReferenceImageModal = (e, t, visualIndex) => {
      var i;
      var r;
      var n;
      var o;
      var s;
      var l;
      var {
        abilityList,
        largeImageInfo,
        aspectRatio,
        isLockRatio,
        imageRangeConfig,
        aspectRatioImageSizeMap,
      } = this._imageGeneratorManager.data;
      if (this._imageGeneratorManager.metadata.isModelSupportRefuseImage) {
        var p = this._createByteEditBlendModel(e);
        var _ = {
          model: p.blendModel,
          imageRangeConfig,
          aspectRatioImageSizeMap,
          generateWidth: largeImageInfo.width,
          generateHeight: largeImageInfo.height,
          ratio: aspectRatio,
          isDimensionLocked: isLockRatio,
        };
        this._handleDragReplaceReferenceImage({
          visualIndex,
          coverUrl: Q.N(p.blendModel),
          blendModel: _,
          imageUrlMap: e.coverUrlMap,
          imageCacheKey: t,
        });
        return;
      }
      var f = abilityList.findIndex(
        (e) => e.blendModel.abilityName === E.DABlendAbilityName.StyleCode,
      );
      var y = visualIndex;
      if (f !== -1) {
        y = f > visualIndex ? visualIndex : visualIndex + 1;
      }
      var v = abilityList[y];
      if (v) {
        var b = k.HO(v.blendModel);
        var { ModelIsSimpleImage } = this._imageGeneratorManager.metadata;
        if (ModelIsSimpleImage) {
          return void this._handleSimpleImageReplace(
            {
              imageUrl: (l = e.imageUrl) != null ? l : "",
              width: e.width,
              height: e.height,
            },
            {
              targetIndex: y,
            },
            {
              coverUrlMap: e.coverUrlMap,
              coverCacheKey: t,
            },
          );
        }
        var M = abilityList
          .map((e) => e.blendModel)
          .filter((e) => e !== v.blendModel);
        var {
          referenceImageModalDisplayAbilities,
          shouldDisabledReferenceImageAbilityConflict,
          referenceImageModalUiConfig,
        } = this._imageGeneratorManager.metadata;
        if ((s = this.createReferenceImageModal) != null) {
          s.call(this, {
            containerService: this._containerService,
            image: {
              width: (i = e.width) != null ? i : 0,
              height: (r = e.height) != null ? r : 0,
              url: (n = e.imageUrl) != null ? n : "",
              uri: (o = e.imageUri) != null ? o : "",
            },
            conflictParams: {
              existAbilityList: M,
              disabled: shouldDisabledReferenceImageAbilityConflict,
            },
            initialBlendParams: {
              model: b,
              imageRangeConfig:
                this._imageGeneratorManager.data.imageRangeConfig,
              aspectRatioImageSizeMap:
                this._imageGeneratorManager.data.aspectRatioImageSizeMap,
              isDimensionLocked: isLockRatio,
              generateWidth: largeImageInfo.width,
              generateHeight: largeImageInfo.height,
              ratio: aspectRatio,
            },
            displayAbilities: referenceImageModalDisplayAbilities,
            uiConfig: referenceImageModalUiConfig,
            onSave: (a) => {
              this._handleDragReplaceReferenceImage({
                visualIndex: y,
                coverUrl: Q.N(a.model),
                blendModel: a,
                imageUrlMap: e.coverUrlMap,
                imageCacheKey: t,
              });
            },
            onCancel: () => {
              F.V.info("onCancel drag replace");
            },
          });
        }
      }
    };
    this.openAddReferenceImageModalFromImageInfo = (e, coverCacheKey, a) => {
      var i;
      var r;
      var n;
      var o;
      var s;
      var l;
      var d;
      var g;
      var c;
      var { ModelIsSimpleImage } = this._imageGeneratorManager.metadata;
      if (ModelIsSimpleImage) {
        return void this._handleSimpleImageAdd(
          {
            imageUrl: (c = e.imageUrl) != null ? c : "",
            width: e.width,
            height: e.height,
            title: e.title,
          },
          {
            coverUrlMap: e.coverUrlMap,
            coverCacheKey,
          },
          "click",
          a,
        );
      }
      var u = {
        width: (i = e.width) != null ? i : 0,
        height: (r = e.height) != null ? r : 0,
        imageUrl: (n = e.imageUrl) != null ? n : "",
        imageUri: (o = e.imageUri) != null ? o : "",
        aigcImage: e.aigcImage,
        title: e.title,
      };
      if (this._imageGeneratorManager.metadata.canUploadMultipleImages) {
        this._addImageSourceToBlendAbilityList(u, a);
      } else {
        this._openAddReferenceImageModal({
          image: {
            width: (s = e.width) != null ? s : 0,
            height: (l = e.height) != null ? l : 0,
            url: (d = e.imageUrl) != null ? d : "",
            uri: (g = e.imageUri) != null ? g : "",
          },
          options: a,
        });
      }
    };
    this._openEditReferenceImageModal = (e) => {
      var t;
      var a;
      var i;
      var r;
      var n;
      var { abilityList, largeImageInfo, aspectRatio, isLockRatio } =
        this._imageGeneratorManager.data;
      var g = abilityList.find((t) => t.id === e);
      T.X3(g);
      var c = k.HO(g.blendModel);
      T.X3(c);
      var m = K.W(c);
      T.X3(m);
      var u = abilityList
        .map((e) => e.blendModel)
        .filter((e) => e !== g.blendModel);
      var {
        referenceImageModalDisplayAbilities,
        shouldDisabledReferenceImageAbilityConflict,
        referenceImageModalUiConfig,
      } = this._imageGeneratorManager.metadata;
      if ((n = this.createReferenceImageModal) != null) {
        n.call(this, {
          containerService: this._containerService,
          image: {
            width: (t = m.width) != null ? t : 0,
            height: (a = m.height) != null ? a : 0,
            url: (i = m.imageUrl) != null ? i : "",
            uri: (r = m.imageUri) != null ? r : "",
          },
          conflictParams: {
            existAbilityList: u,
            disabled: shouldDisabledReferenceImageAbilityConflict,
          },
          initialBlendParams: {
            model: c,
            imageRangeConfig: this._imageGeneratorManager.data.imageRangeConfig,
            aspectRatioImageSizeMap:
              this._imageGeneratorManager.data.aspectRatioImageSizeMap,
            isDimensionLocked: isLockRatio,
            generateWidth: largeImageInfo.width,
            generateHeight: largeImageInfo.height,
            ratio: aspectRatio,
          },
          displayAbilities: referenceImageModalDisplayAbilities,
          uiConfig: referenceImageModalUiConfig,
          onSave: (e) => {
            this._handleUpdateReferenceImage({
              id: g.id,
              coverUrl: Q.N(e.model),
              blendModel: e,
            });
          },
          onCancel: () => {
            F.V.info("onCancel");
          },
        });
      }
    };
    this._openAddReferenceImageModal = (e) => {
      var t;
      var a;
      var i;
      var r;
      var n;
      var { image, referenceId, options } = e;
      var d =
        (t =
          options == null ||
          (i = options.reportParams) == null ||
          (a = i.importMaterialParams) == null
            ? undefined
            : a.actionType) != null
          ? t
          : "click";
      this._imageGeneratorManager.reportManager.reportReferencePopupShow();
      var {
        abilityList,
        largeImageInfo,
        aspectRatio,
        isLockRatio,
        imageRangeConfig,
        aspectRatioImageSizeMap,
      } = this._imageGeneratorManager.data;
      var _ = !!referenceId;
      var f = _
        ? (r = abilityList.find((e) => e.id === referenceId)) == null
          ? undefined
          : r.blendModel
        : undefined;
      var {
        referenceImageModalDisplayAbilities,
        shouldDisabledReferenceImageAbilityConflict,
        referenceImageModalUiConfig,
      } = this._imageGeneratorManager.metadata;
      if ((n = this.createReferenceImageModal) != null) {
        n.call(this, {
          containerService: this._containerService,
          image,
          displayAbilities: referenceImageModalDisplayAbilities,
          conflictParams: {
            existAbilityList: _ ? [] : abilityList.map((e) => e.blendModel),
            disabled: shouldDisabledReferenceImageAbilityConflict,
          },
          initialBlendParams: {
            model: f,
            imageRangeConfig,
            aspectRatioImageSizeMap,
            isDimensionLocked: isLockRatio,
            generateWidth: largeImageInfo.width,
            generateHeight: largeImageInfo.height,
            ratio: aspectRatio,
          },
          uiConfig: referenceImageModalUiConfig,
          onSave: (e) => {
            this._imageGeneratorManager.reportManager.reportReferencePopupConfirm();
            if (referenceId) {
              this._handleUpdateReferenceImage({
                id: referenceId,
                coverUrl: Q.N(e.model),
                blendModel: e,
              });
            } else {
              this._imageGeneratorManager.reportManager.reportImportReferenceImageMaterial(
                {
                  status: "success",
                  actionType: d,
                },
              );
              this._handleAddReferenceImage(e, options);
            }
          },
          onCancel: () => {
            F.V.info("onCancel");
            this._imageGeneratorManager.reportManager.reportImportReferenceImageMaterial(
              {
                status: "fail",
                failReason: "cancel",
                actionType: d,
              },
            );
          },
        });
      }
    };
  }
}
$ = o.Cg(
  [
    o.Qj(1, m._),
    o.Qj(2, c.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ImageGeneratorManager === "undefined"
        ? Object
        : ImageGeneratorManager,
      m._ === undefined ? Object : m._,
      c.Ot === undefined ? Object : c.Ot,
    ]),
  ],
  $,
);
class eh extends l.jG {
  applyPrompt(e) {
    this._imageGeneratorManager.setPrompt(e);
  }
  applyRichPrompt(e) {
    const t = {
      references: eo.I(this._containerService, e.resources, ["image"]),
      promptContents: [...e.promptContents],
    };
    const a = t.references.map((e) => {
      var t;
      var a;
      return {
        id: e.id,
        coverUrl: e.url,
        coverUrlMap:
          (t = e.remoteExtraInfo) == null ? undefined : t.resolutionUrlMap,
        coverCacheKey: (a = e.remoteExtraInfo) == null ? undefined : a.cacheKey,
        blendModel: {
          abilityName: E.DABlendAbilityName.ByteEdit,
          strength: qG.default / qG.max,
          source: es.q(e),
        },
      };
    });
    this._imageGeneratorManager.setAbilityList(a, {
      skipAudit: true,
    });
    this._imageGeneratorManager.unifiedEditManager.setData(t);
    this._refreshLatestSubjects(t.promptContents);
    return Promise.resolve(d.nj());
  }
  importReferencesInRecord(e, t) {
    if (!ee.A(e)) {
      return Promise.resolve(d.nj());
    }
    const a = this._getRecordReferenceBlendList(e, t);
    if (!a) {
      return Promise.resolve(d.nj());
    }
    const { modelInfo } = e;
    const { hasStyleCode } = this._imageGeneratorManager.data;
    if (
      hasStyleCode &&
      [
        E.DABlendAbilityName.ByteEdit,
        E.DABlendAbilityName.IpKeep,
        E.DABlendAbilityName.StyleReference,
      ].find((e) => a.some((t) => t.abilityName === e))
    ) {
      this._notificationService.warning(
        s.Ay.t(
          "web_new_dre_t2i_style_code_conflict_with_seededit_ip_style_notice",
          {},
          "当前记录有风格码，智能参考、角色特征、参考风格不可用",
        ),
      );
      return Promise.resolve(d.xz(-1, "style_code_conflict"));
    }
    this._imageGeneratorManager.setAbilityListByBlendList(a);
    this._imageGeneratorManager.setModelByKey(
      modelInfo == null ? undefined : modelInfo.modelReqKey,
    );
    return Promise.resolve(d.nj());
  }
  reeditGenerationDataInRecord(e) {
    if (!ee.A(e)) {
      return Promise.resolve(d.nj());
    }
    const {
      text2imageParams,
      prompt,
      modelInfo,
      generateType,
      blendImageInfo,
      unifiedEditInput,
    } = e;
    const {
      largeImageInfo,
      userNegativePrompt,
      sampleStrength,
      imageRatio,
      isIntelligentAspectRatio,
      quality,
      background,
      stylize,
    } = text2imageParams;
    const f = this._getOmniReferenceData(unifiedEditInput);
    const y = {
      prompt,
      negativePrompt: userNegativePrompt,
      model: modelInfo == null ? undefined : modelInfo.modelReqKey,
      generateType,
      imageRatio,
      largeImageInfo: r._({}, largeImageInfo),
      sampleStrength,
      abilityList: blendImageInfo != null ? blendImageInfo : [],
      isIntelligentAspectRatio,
      quality,
      backgroundMode: background,
      stylization: stylize,
      unifiedEditData: f,
    };
    this._imageGeneratorManager.setData(y);
    if (f) {
      this._refreshLatestSubjects(f.promptContents);
    }
    return Promise.resolve(d.nj());
  }
  importRecordAsReference(e, t, a) {
    const i = el.R(this._containerService, e, t);
    if (i) {
      return this.importReferenceResources([i], a);
    }
    return Promise.resolve(d.nj());
  }
  importWorkDetailAsReference(e) {
    if (!et.Y(e)) {
      return d.nj();
    }
    const { image, commonAttr } = e;
    const { coverUrlMap } = commonAttr;
    const n = e.commonAttr.id;
    const { largeImages } = image;
    if (!(largeImages == null ? undefined : largeImages.length)) {
      return d.nj();
    }
    const [s] = largeImages;
    const l = r._({}, s);
    if (!l.coverUrlMap) {
      l.coverUrlMap = coverUrlMap;
    }
    if (!this._tryAddReferenceImage(l, n)) {
      this._importImageAsReference(l, n);
    }
    return d.nj();
  }
  importImageAsReferenceInWorkDetailVideo(e) {
    if (!((t = e.aigcImageParams) == null ? undefined : t.text2videoParams)) {
      return d.nj();
    }
    var t;
    const { videoGenInputs } = e.aigcImageParams.text2videoParams;
    const i = videoGenInputs.find((e) => !!e.firstFrameImage);
    if (i == null ? undefined : i.firstFrameImage) {
      this._importImageAsReference(i.firstFrameImage, e.id);
    }
    return d.nj();
  }
  reeditGenerationDataInWorkDetail(e) {
    if (!et.Y(e)) {
      return d.nj();
    }
    let t;
    let a;
    const {
      aigcImageParams,
      text2imageParams,
      referencePrompt,
      unifiedEditInput,
    } = e;
    const prompt =
      referencePrompt != null ? referencePrompt : text2imageParams.prompt;
    const unifiedEditData = this._getOmniReferenceData(unifiedEditInput);
    const c = {
      prompt,
      negativePrompt: text2imageParams.userNegativePrompt,
      model: (a = e.modelInfo) == null ? undefined : a.modelReqKey,
      generateType:
        aigcImageParams == null ? undefined : aigcImageParams.generateType,
      imageRatio: text2imageParams.imageRatio,
      largeImageInfo: r._({}, text2imageParams.largeImageInfo),
      sampleStrength: text2imageParams.sampleStrength,
      isIntelligentAspectRatio: text2imageParams.isIntelligentAspectRatio,
      quality: text2imageParams.quality,
      backgroundMode: text2imageParams.background,
      stylization: text2imageParams.stylize,
      abilityList: (t = k.HO(e.blendImageInfo)) != null ? t : [],
      unifiedEditData,
    };
    this._imageGeneratorManager.setData(c);
    return d.nj();
  }
  reeditImageGenerationDataInWorkDetailVideo(e, t) {
    let a;
    const { contentGeneratorManager, reportManager } =
      this._imageGeneratorManager;
    const { activateContentGenerator, setContentGeneratorType } =
      contentGeneratorManager;
    setContentGeneratorType("image");
    reportManager.resetReferenceTemplateParams();
    reportManager.setResourceReportParams(
      r._({}, t == null ? undefined : t.reportParams, en.J(e)),
    );
    if (!e.firstFrameImageAigcParams) {
      return void activateContentGenerator();
    }
    const { text2imageParams, blendImageInfo, modelConfig } =
      e.firstFrameImageAigcParams;
    let Text2Image = f.ce.Text2Image;
    if (blendImageInfo == null ? undefined : blendImageInfo.length) {
      Text2Image = f.ce.Blend;
    }
    const m = {
      prompt: text2imageParams.prompt,
      negativePrompt: text2imageParams.userNegativePrompt,
      model: modelConfig == null ? undefined : modelConfig.modelReqKey,
      generateType: Text2Image,
      imageRatio: text2imageParams.imageRatio,
      largeImageInfo: r._({}, text2imageParams.largeImageInfo),
      sampleStrength: text2imageParams.sampleStrength,
      abilityList: (a = k.HO(blendImageInfo)) != null ? a : [],
      isIntelligentAspectRatio: text2imageParams.isIntelligentAspectRatio,
    };
    this._imageGeneratorManager.setData(m);
    activateContentGenerator();
  }
  importReferenceResources(e, t, a) {
    return i
      ._(function* () {
        yield this._importReferenceResources(e, t, a, false);
        return d.nj();
      })
      .call(this);
  }
  importReferenceResourcesWithResult(e, t, a) {
    return this._importReferenceResources(e, t, a, true);
  }
  replaceImageReferencesWithResult(e, t) {
    const _imageGeneratorManager = this._imageGeneratorManager;
    const i = new Set(_imageGeneratorManager.data.references.map((e) => e.id));
    _imageGeneratorManager.setAbilityList(
      _imageGeneratorManager.data.abilityList.filter((e) => !i.has(e.id)),
    );
    return this.importReferenceResourcesWithResult(e, undefined, t);
  }
  _importReferenceResources(e, t, a, o) {
    return i
      ._(function* () {
        const i = eo.I(this._containerService, e, ["image"]);
        if (o && i.length !== e.length) {
          return d.xz(Y.Mi.Type, V.N[Y.Mi.Type]);
        }
        if (!i.length) {
          return d.nj();
        }
        if (o && typeof t === "number" && i.length !== 1) {
          const l = s.Ay.t("upload_material_error", {}, "素材上传失败，请重试");
          this._notificationService.warning(l);
          return d.xz(-1, l);
        }
        const g = yield Promise.all(
          i.map((e) => this._validateImageResource(e)),
        );
        this._processImageValidationErrors(g);
        const c = g.find((e) => !e.ok);
        if (o && c) {
          return c;
        }
        const m = i.filter((e, t) => g[t].ok);
        if (!m.length) {
          return d.nj();
        }
        if (typeof t === "number") {
          let u;
          let h;
          const [p] = m;
          const _ = es.q(p);
          const f =
            (u = (h = p.remoteExtraInfo) == null ? undefined : h.cacheKey) !=
            null
              ? u
              : p.id;
          const { abilityList } = this._imageGeneratorManager.data;
          if (
            t >=
            abilityList.filter(
              (e) =>
                e.blendModel.abilityName !== E.DABlendAbilityName.StyleCode,
            ).length
          ) {
            const v = this._validateImageCountLimit(
              this._imageGeneratorManager.metadata.referenceImageCount + 1,
            );
            if (v.ok) {
              this._imageGeneratorManager.blendManager.openAddReferenceImageModalFromImageInfo(
                _,
                f,
              );
              ed.j([p], this._imageGeneratorManager.reportManager);
              return d.nj();
            }
            return v;
          }
          this._imageGeneratorManager.blendManager.openDragReplaceReferenceImageModal(
            _,
            f,
            t,
          );
          ed.j([p], this._imageGeneratorManager.reportManager);
          return d.nj();
        }
        const { referenceImageCount, referenceSlotState } =
          this._imageGeneratorManager.metadata;
        const M = this._validateImageCountLimit(referenceImageCount + m.length);
        if (o && !M.ok) {
          return M;
        }
        const referenceSlotState_availableReferenceUploadCount =
          referenceSlotState.availableReferenceUploadCount;
        if (referenceSlotState_availableReferenceUploadCount === 0) {
          return d.nj();
        }
        if (m.length === 1) {
          let P;
          let R;
          const [C] = m;
          const A = es.q(C);
          const B =
            (P = (R = C.remoteExtraInfo) == null ? undefined : R.cacheKey) !=
            null
              ? P
              : C.id;
          this._imageGeneratorManager.blendManager.openAddReferenceImageModalFromImageInfo(
            A,
            B,
            a,
          );
          ed.j([C], this._imageGeneratorManager.reportManager);
          return d.nj();
        }
        const w = m.slice(0, referenceSlotState_availableReferenceUploadCount);
        const G = w.map((e) =>
          n._(r._({}, es.q(e)), {
            id: e.id,
          }),
        );
        this._importImagesAsBlendModels(G, a);
        ed.j(w, this._imageGeneratorManager.reportManager);
        return d.nj();
      })
      .call(this);
  }
  switchToFreeModelBySceneOptions(e) {
    if (e && e.type === ea.AZ.Image) {
      const { contentGeneratorManager, metadata } = this._imageGeneratorManager;
      const { activateContentGenerator, setContentGeneratorType } =
        contentGeneratorManager;
      const { modelList } = metadata;
      setContentGeneratorType("image");
      if (modelList.length === 0) {
        return void activateContentGenerator();
      }
      const o = this._commercialFeatureLoaderService.getInstanceSync();
      if (!o) {
        return void activateContentGenerator();
      }
      const { commercialStrategyService } = o;
      for (const l of modelList) {
        if (this._tryToSwitchToFreeModel(l, commercialStrategyService)) {
          return void activateContentGenerator();
        }
      }
      activateContentGenerator();
    }
  }
  _tryToSwitchToFreeModel(e, t) {
    const a = ei.F(e, t, er.Sk.ImageBasicGenerate);
    return (
      !!a &&
      (this._imageGeneratorManager.switchModel(e.key, true),
      this._imageGeneratorManager.changeResolution(a),
      this._notificationService.normal(
        s.Ay.t(
          "web_new_dre_auto_match_model_toast",
          {},
          "已为您匹配至最佳模型",
        ),
      ),
      true)
    );
  }
  _importImagesAsBlendModels(e, t) {
    const {
      blendManager: { appendBlendImageModels },
    } = this._imageGeneratorManager;
    const i = [];
    e.forEach((e) => {
      var t = this._createBlendImageModel(e, e.id);
      i.push(t);
    });
    appendBlendImageModels(i, t);
  }
  _importImageAsReference(e, t) {
    const {
      blendManager: { setBlendImageModel },
    } = this._imageGeneratorManager;
    setBlendImageModel(this._createBlendImageModel(e, t));
    const i = eg.h(this._containerService, e);
    ed.j([i], this._imageGeneratorManager.reportManager);
  }
  _createBlendImageModel(e, imageCacheKey) {
    const {
      largeImageInfo,
      aspectRatio,
      imageRangeConfig,
      aspectRatioImageSizeMap,
    } = this._imageGeneratorManager.data;
    const o = {
      model: {
        abilityName: E.DABlendAbilityName.ByteEdit,
        source: e,
        strength: qG.default / qG.max,
      },
      imageUrlMap: e.coverUrlMap,
      imageCacheKey,
      generateWidth: largeImageInfo.width,
      generateHeight: largeImageInfo.height,
      ratio: aspectRatio,
      imageRangeConfig,
      aspectRatioImageSizeMap,
    };
    if (e.imageUri) {
      this._imageGeneratorManager.blendManager.deleteOtherReferenceImageParams(
        e.imageUri,
      );
    }
    return o;
  }
  _validateImageResource(e) {
    return i._(function* () {
      if (e.file) {
        return X.Z$(e.file);
      }
      try {
        const t =
          e.width > 0 && e.height > 0
            ? {
                width: e.width,
                height: e.height,
              }
            : yield e.resolveMetadata();
        if (!t) {
          return d.xz(Y.Mi.Unknown, "image size is not valid");
        }
        return X.Gp(t);
      } catch (error) {
        return d.xz(Y.Mi.Unknown, "image size is not valid", error);
      }
    })();
  }
  _processImageValidationErrors(e) {
    for (const t of [
      ...new Set(
        e
          .filter((e) => !e.ok)
          .map((e) => {
            var t = e.code in V.N ? e.code : Y.Mi.Unknown;
            return V.N[t];
          }),
      ),
    ]) {
      this._notificationService.warning(t);
    }
  }
  _validateImageCountLimit(blendImageCount) {
    const { promptSubjectCount, referenceSlotState } =
      this._imageGeneratorManager.metadata;
    const i = eu.Dd({
      blendImageCount,
      promptSubjectCount,
      maxReferenceCount: referenceSlotState.maxReferenceCount,
    });
    if (!i.ok) {
      this._notificationService.warning(i.msg);
    }
    return i;
  }
  _tryAddReferenceImage(e, t) {
    return (
      !!this._imageGeneratorManager.metadata.canUploadMultipleImages &&
      (!this._validateImageCountLimit(
        this._imageGeneratorManager.metadata.referenceImageCount + 1,
      ).ok ||
        (this._imageGeneratorManager.blendManager.openAddReferenceImageModalFromImageInfo(
          e,
          t,
        ),
        true))
    );
  }
  _getRecordReferenceBlendList(e, t) {
    if (!e.blendImageInfo || e.blendImageInfo.length < 1) {
      return null;
    }
    const a = e.blendImageInfo.filter(
      (e) => e.abilityName !== E.DABlendAbilityName.StyleCode,
    )[t];
    if (
      [
        E.DABlendAbilityName.StyleReference,
        E.DABlendAbilityName.FaceGan,
        E.DABlendAbilityName.ByteEdit,
      ].includes(a.abilityName)
    ) {
      return e.blendImageInfo.filter((e) => e.abilityName === a.abilityName);
    }
    return [a];
  }
  _refreshLatestSubjects(e) {
    const { unifiedEditManager } = this._imageGeneratorManager;
    ec.r(this._containerService, e, {
      setPromptContents: unifiedEditManager.setPromptContents,
      getCurrentPromptContents: () => unifiedEditManager.data.promptContents,
    });
  }
  _getOmniReferenceData(e) {
    if (e) {
      const { references, promptContents } = em.U(this._containerService, e, {
        acceptedResourceTypes: ["image"],
      });
      return {
        references,
        promptContents,
      };
    }
  }
  constructor(e, t, a, i) {
    super();
    this._imageGeneratorManager = e;
    this._containerService = t;
    this._notificationService = a;
    this._commercialFeatureLoaderService = i;
  }
}
eh = o.Cg(
  [
    o.Qj(1, m._),
    o.Qj(2, c.Ot),
    o.Qj(3, I.jV),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ImageGeneratorManager === "undefined"
        ? Object
        : ImageGeneratorManager,
      m._ === undefined ? Object : m._,
      c.Ot === undefined ? Object : c.Ot,
      I.jV === undefined ? Object : I.jV,
    ]),
  ],
  eh,
);
const ek = new Set(["1k", "1.5k", "2k", "4k", "8k"]);
function eE(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function eT(resolutionType) {
  return typeof resolutionType === "string" && ek.has(resolutionType);
}
function ex() {
  return {
    version: 1,
    byModel: {},
  };
}
function eF(e) {
  if (eE(e) && e.version === 1 && eE(e.byModel)) {
    return {
      version: 1,
      byModel: Object.fromEntries(
        Object.entries(e.byModel).filter((e) =>
          ((e) => {
            if (!eE(e)) {
              return false;
            }
            const { backgroundMode, dimension, quality, stylization } = e;
            return (
              (dimension === undefined ||
                ((e) => {
                  if (!eE(e)) {
                    return false;
                  }
                  const {
                    aspectRatio,
                    height,
                    isCustomResolution,
                    isLockRatio,
                    resolutionType,
                    width,
                  } = e;
                  return (
                    (typeof aspectRatio === "string" || aspectRatio === null) &&
                    typeof height === "number" &&
                    Number.isInteger(height) &&
                    height > 0 &&
                    typeof width === "number" &&
                    Number.isInteger(width) &&
                    width > 0 &&
                    typeof isCustomResolution === "boolean" &&
                    typeof isLockRatio === "boolean" &&
                    eT(resolutionType)
                  );
                })(dimension)) &&
              (quality === undefined ||
                (typeof quality === "string" && quality.length > 0)) &&
              (backgroundMode === undefined ||
                (typeof backgroundMode === "string" &&
                  backgroundMode.length > 0)) &&
              (stylization === undefined ||
                (typeof stylization === "number" &&
                  Number.isInteger(stylization)))
            );
          })(e[1]),
        ),
      ),
    };
  }
  return ex();
}
function eU(e, t) {
  return eF(e).byModel[t];
}
function eO(e, t, a) {
  const i = eF(e);
  return {
    version: 1,
    byModel: n._(r._({}, i.byModel), {
      [t]: a,
    }),
  };
}
function eK(e) {
  let t;
  if (
    (t =
      e == null
        ? undefined
        : e.filter((e) => {
            var { label, value } = e;
            return !!(label && value);
          })) != null
  ) {
    return t;
  }
  return [];
}
function eq(e, t) {
  let a;
  let i;
  for (
    var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2;
    o < r;
    o++
  ) {
    n[o - 2] = arguments[o];
  }
  const s = new Set(
    e.map((e) => {
      var { value } = e;
      return value;
    }),
  );
  if ((a = n.find((e) => !!(e && s.has(e)))) != null) {
    return a;
  }
  if (t && s.has(t)) {
    return t;
  }
  if ((i = e[0]) == null) {
    return undefined;
  }
  return i.value;
}
function eH(e) {
  if (
    e &&
    [e.min, e.max, e.step, e.defaultValue].every(Number.isInteger) &&
    !(e.min > e.max) &&
    !(e.step <= 0) &&
    !(e.defaultValue < e.min) &&
    !(e.defaultValue > e.max) &&
    (e.defaultValue - e.min) % e.step == 0
  ) {
    return e;
  }
}
function eV(e, t) {
  return !!(
    e !== undefined &&
    t &&
    Number.isInteger(e) &&
    e >= t.min &&
    e <= t.max &&
    (e - t.min) % t.step == 0
  );
}
function eQ(dimension, targetModel, a) {
  if (
    !dimension.isCustomResolution ||
    targetModel.supportCustomResolution === true
  ) {
    let i;
    const { resolutionMap } = targetModel;
    if (!resolutionMap || Object.keys(resolutionMap).length === 0) {
      return dimension;
    }
    if (dimension.isCustomResolution) {
      const s = ez.R7(dimension.width, dimension.height, resolutionMap);
      if (s) {
        return n._(r._({}, dimension), {
          resolutionType: s,
        });
      }
      return undefined;
    }
    const l = resolutionMap[dimension.resolutionType];
    if (
      l &&
      (!l.imageRangeConfig ||
        ez.Zh(dimension.width, dimension.height, l.imageRangeConfig))
    ) {
      const d = (i = dimension.aspectRatio) != null ? i : undefined;
      if (
        a.length === 0 ||
        a.some((e) => {
          var { disabled, value } = e;
          return !disabled && value === d;
        })
      ) {
        return dimension;
      }
      return undefined;
    }
  }
}
const eZ = n._(r._({}, eC.m), {
  abilityList: [],
  references: [],
});
function eX(generateCountByModel) {
  if (
    typeof generateCountByModel === "object" &&
    generateCountByModel !== null &&
    !Array.isArray(generateCountByModel) &&
    Object.values(generateCountByModel).every(ef.EZ)
  ) {
    return generateCountByModel;
  }
  if (
    typeof generateCountByModel !== "object" ||
    generateCountByModel === null ||
    Array.isArray(generateCountByModel)
  ) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(generateCountByModel).filter((e) => {
      var [, t] = e;
      return ef.EZ(t);
    }),
  );
}
class eJ {
  get prompt() {
    return this.promptContents
      .map((e) => {
        var t;
        if (e.type === "text") {
          return e.text;
        }
        if ((t = this.referenceIdToLabel[e.id]) != null) {
          return t;
        }
        return "";
      })
      .join("");
  }
  get isPristine() {
    return this.abilityList.length === 0 && this.prompt.trim() === "";
  }
  setReferences(e) {
    this.references = e;
  }
  setPromptContents(e) {
    this.promptContents = e;
  }
  get abilityList() {
    return this._buildAbilityList();
  }
  get referenceIdToLabel() {
    const e = Object.fromEntries(
      Object.values(Object.groupBy(this.references, (e) => e.type)).flatMap(
        (e) => e.map((e, t) => [e.id, t]),
      ),
    );
    const t = this.references.map((t) => {
      var a;
      return [
        t.id,
        (a = t.name) != null
          ? a
          : s.Ay.t(
              "video_unified_edit_".concat(t.type, "_index"),
              {
                string: e[t.id] + 1,
              },
              "".concat(ep.e[t.type], " ").concat(e[t.id] + 1),
            ),
      ];
    });
    const a = w
      .X(this.promptContents)
      .map((e) => [e.id, e.subject.content.name]);
    return Object.fromEntries([...t, ...a]);
  }
  get isPromptEmpty() {
    return !this.prompt.trim();
  }
  get promptMaxLength() {
    let e;
    let t;
    if (
      (e =
        (t = this.currentSelectedImageModel) == null
          ? undefined
          : t.maxPromptLength) != null
    ) {
      return e;
    }
    return ew.O({
      domesticTextLimit: 2000,
    });
  }
  get promptCharacterCount() {
    return [...this.prompt].length;
  }
  setInlinePromptLengthFeedbackEnabled(e) {
    this._inlinePromptLengthFeedbackEnabled = e;
  }
  get promptLengthErrorMessage() {
    if (this._inlinePromptLengthFeedbackEnabled) {
      return s.Ay.t(
        "octo_canvas_image_generator_prompt_limit_disabled_reason",
        {
          num: this.promptMaxLength,
        },
        "Prompt can't exceed {num} characters. Try making your prompt shorter.",
      );
    }
  }
  get validationResult() {
    if (this.promptContents.some((e) => e.type === "subject" && e.loading)) {
      return d.xz(
        -1,
        s.Ay.t(
          "web_agent_subject_material_updating",
          {},
          "Updating element...",
        ),
      );
    }
    return this.promptValidationResult;
  }
  get promptValidationResult() {
    const { unifiedEditValidationResult } = this._metadata;
    if (!unifiedEditValidationResult.ok) {
      return unifiedEditValidationResult;
    }
    const t = this.promptContents.some((e) => e.type === "subject");
    const allowEmpty = this.isByteEdit
      ? this.isByteEditSupportEmptyPrompt
      : this.abilityList.length > 0 || t;
    return e_.f(this.prompt, {
      allowEmpty,
      maxLength: this.promptMaxLength,
      maxLengthExceededErrorMessage: this.promptLengthErrorMessage,
    });
  }
  get submissionGenerateCount() {
    const { visibleContentGeneratorVariant } =
      this._imageGeneratorManager.contentGeneratorManager;
    if (visibleContentGeneratorVariant === "default") {
      return this.effectiveGenerateCount;
    }
  }
  get commercialSceneOptions() {
    return this._createCommercialSceneOptions(this.submissionGenerateCount);
  }
  _createCommercialSceneOptions(generateCount) {
    let t;
    let a;
    let benefitCount;
    let n;
    const o = ey.S(this.params.largeImageInfo.resolutionType);
    if (generateCount !== undefined) {
      benefitCount = ev.C({
        feats:
          (n = this.currentSelectedImageModel) == null ? undefined : n.feats,
        generateCount,
      });
    } else if (this._metadata.chargeByCount) {
      benefitCount = eG.y;
    }
    return eb.O({
      scene: er.Sk.ImageBasicGenerate,
      modelReqKey: this.params.model,
      generateType: this.generateType,
      resolutionType: o,
      quality: this.imageQuality,
      abilityList:
        (t = this.params.abilityList) == null
          ? undefined
          : t.map((e) => e.blendModel),
      imageInputNum: eI.m(
        (a = this.params.abilityList) == null
          ? undefined
          : a.map((e) => e.blendModel),
      ),
      benefitCount,
      reportParams: r._(
        {
          enterSource: eP.k.Generate,
          vipSource: eM.d.Generate,
          extraVipFunctionKey: ""
            .concat(this.params.model)
            .concat(o ? "-".concat(o) : ""),
          useVipFunctionDetailsReporterHoc: true,
        },
        eS.YQ(this._imageGeneratorManager.reportManager.resourceReportParams),
      ),
    });
  }
  get abilityListWithoutStyleCode() {
    return this.abilityList.filter(
      (e) => e.blendModel.abilityName !== E.DABlendAbilityName.StyleCode,
    );
  }
  get isByteEdit() {
    return (
      this.abilityList.length === 1 &&
      this.abilityList[0].blendModel.abilityName ===
        E.DABlendAbilityName.ByteEdit
    );
  }
  get isByteEditSupportEmptyPrompt() {
    return J([f.yo.ByteEditWithEmptyPrompt], this._selectedImageModel);
  }
  get isByteEditSupportCustomRatio() {
    return J([f.yo.ByteEditWithCustomRatio], this._selectedImageModel);
  }
  get ettaDisabled() {
    return !(
      this._selectedImageModel && J([f.Si.Etta], this._selectedImageModel)
    );
  }
  get ettaToolTip() {
    if (this.ettaDisabled) {
      return s.Ay.t(
        "web_web_t2i_hover_draw_words_conflict",
        {},
        "暂不支持文字效果增强",
      );
    }
    return s.Ay.t("web_web_t2i_draw_words_feature_hover", {}, "文字效果增强");
  }
  get currentSelectedImageModel() {
    return this._selectedImageModel;
  }
  get effectiveGenerateCount() {
    const { currentSelectedImageModel } = this;
    const t = eX(this.generateCountByModel);
    const selectedGenerateCount = currentSelectedImageModel
      ? t[currentSelectedImageModel.key]
      : undefined;
    return ef.id({
      generateCountOptions:
        currentSelectedImageModel == null
          ? undefined
          : currentSelectedImageModel.generateCountOptions,
      selectedGenerateCount,
      defaultGenerateCount:
        currentSelectedImageModel == null
          ? undefined
          : currentSelectedImageModel.defaultGenerateCount,
    });
  }
  get imageQualityOptions() {
    let e;
    let t;
    return eK(
      (t = this.currentSelectedImageModel) == null ||
        (e = t.generationParamConfig) == null
        ? undefined
        : e.qualityOptions,
    );
  }
  get imageQuality() {
    let e;
    let t;
    let a;
    const { defaultQuality } =
      (e =
        (t = this.currentSelectedImageModel) == null
          ? undefined
          : t.generationParamConfig) != null
        ? e
        : {};
    return eq(
      this.imageQualityOptions,
      defaultQuality,
      (a = this._getCurrentModelParameterHistory()) == null
        ? undefined
        : a.quality,
    );
  }
  get imageBackgroundModeOptions() {
    let e;
    let t;
    return eK(
      (t = this.currentSelectedImageModel) == null ||
        (e = t.generationParamConfig) == null
        ? undefined
        : e.backgroundOptions,
    );
  }
  get imageBackgroundMode() {
    let e;
    let t;
    let a;
    const { defaultBackground } =
      (e =
        (t = this.currentSelectedImageModel) == null
          ? undefined
          : t.generationParamConfig) != null
        ? e
        : {};
    return eq(
      this.imageBackgroundModeOptions,
      defaultBackground,
      (a = this._getCurrentModelParameterHistory()) == null
        ? undefined
        : a.backgroundMode,
    );
  }
  get imageStylizationRange() {
    let e;
    let t;
    return eH(
      (t = this.currentSelectedImageModel) == null ||
        (e = t.generationParamConfig) == null
        ? undefined
        : e.stylizeRange,
    );
  }
  get imageStylization() {
    let e;
    const imageStylizationRange = this.imageStylizationRange;
    const a =
      (e = this._getCurrentModelParameterHistory()) == null
        ? undefined
        : e.stylization;
    if (eV(a, imageStylizationRange)) {
      return a;
    }
    if (imageStylizationRange == null) {
      return undefined;
    }
    return imageStylizationRange.defaultValue;
  }
  get supportCustomResolution() {
    let e;
    return (
      ((e = this.currentSelectedImageModel) == null
        ? undefined
        : e.supportCustomResolution) === true
    );
  }
  get isCustomResolutionSelected() {
    let e;
    let t;
    let a;
    return (
      (e =
        (a = this._getCurrentModelParameterHistory()) == null ||
        (t = a.dimension) == null
          ? undefined
          : t.isCustomResolution) != null && e
    );
  }
  get resourceAuditPolicy() {
    let e;
    let t;
    if (
      (e =
        (t = this.currentSelectedImageModel) == null
          ? undefined
          : t.preAuditPolicy) != null
    ) {
      return e;
    }
    return "";
  }
  get subjectPreAuditPolicy() {
    let e;
    let t;
    if (
      (e =
        (t = this.currentSelectedImageModel) == null
          ? undefined
          : t.subjectPreAuditPolicy) != null
    ) {
      return e;
    }
    return "";
  }
  get referenceUploadVisible() {
    if (this._metadata.referenceSlotState.atLimit) {
      return false;
    }
    const e = this._metadata.canUseMultipleByteEditAbility
      ? [E.DABlendAbilityName.IpKeep]
      : [E.DABlendAbilityName.ByteEdit, E.DABlendAbilityName.IpKeep];
    if (this.abilityList.length === 1) {
      return !e.includes(this.abilityList[0].blendModel.abilityName);
    }
    if (this.abilityList.length && !this._selectedImageModel) {
      return false;
    }
    const candidateAbilities = eN.n(
      this._metadata.referenceImageModalDisplayAbilities,
    );
    return B_1({
      currentAbilities: this.abilityList,
      candidateAbilities,
      models: this._metadata.generateImageModelList,
      standaloneAbilities: this._metadata.canUseMultipleByteEditAbility
        ? [Y.gP.IpKeep]
        : [Y.gP.ByteEdit, Y.gP.IpKeep],
    });
  }
  get isIntelligentAspectRatio() {
    return this.aspectRatio === undefined;
  }
  get isAspectRatioAuto() {
    return (
      this.abilityList.length === 1 &&
      this.isByteEdit &&
      !this.isByteEditSupportCustomRatio
    );
  }
  get isDimensionDisabled() {
    return this.isIntelligentAspectRatio || this.isAspectRatioAuto;
  }
  get aspectRatioAutoToolTip() {
    return s.Ay.t(
      "web_custom_reference_change_ration",
      {},
      "Can't change the aspect ratio after selecting custom reference",
    );
  }
  get dimensionDisabledToolTip() {
    if (this.isIntelligentAspectRatio) {
      return s.Ay.t(
        "dreamina_image4_ratio_auto_toast",
        {},
        "Can't adjust size when auto aspect ratio is selected",
      );
    }
    return this.aspectRatioAutoToolTip;
  }
  get hasStyleCode() {
    return this.abilityList.some(
      (e) => e.blendModel.abilityName === E.DABlendAbilityName.StyleCode,
    );
  }
  get params() {
    let e;
    let t;
    const a = k.HO(this.abilityList);
    return {
      prompt: h9(this.prompt, a),
      generateCount: this.effectiveGenerateCount,
      generateType: this.generateType,
      model:
        (e =
          (t = this.currentSelectedImageModel) == null ? undefined : t.key) !=
        null
          ? e
          : "high_aes_general_v20:general_v2.0",
      negativePrompt: this.negativePrompt,
      largeImageInfo: r._({}, this.largeImageInfo),
      isIntelligentAspectRatio: this.aspectRatio === undefined,
      aspectRatio: this.aspectRatio,
      abilityList: a,
      references: this.references,
      mode: this.mode,
      isForceSingleGeneration: this.isForceSingleGeneration,
      quality: this.imageQuality,
      background: this.imageBackgroundMode,
      stylize: this.imageStylization,
    };
  }
  get resolutionOptions() {
    let e;
    let t;
    let a;
    const { resolutionMap } =
      (e = this.currentSelectedImageModel) != null ? e : {};
    if (!resolutionMap) {
      return [];
    }
    const r =
      (t = this.currentSelectedImageModel) == null
        ? undefined
        : t.feats.includes(f.Si.ThinkThenDraw);
    const n =
      ((a = this.currentSelectedImageModel) == null
        ? undefined
        : a.feats.includes(f.Si.ByteEdit2k)) || r;
    return Object.keys(resolutionMap).map((e) => {
      var t;
      var a;
      return {
        label:
          (t = (a = resolutionMap[e]) == null ? undefined : a.resolutionName) !=
          null
            ? t
            : "",
        value: e,
        disabled: (this.isByteEdit || false) && e === "2k" && !n,
      };
    });
  }
  get defaultResolutionType() {
    const { currentSelectedImageModel } = this;
    if (currentSelectedImageModel) {
      return this._getModelDefaultResolution(currentSelectedImageModel);
    }
    return "1k";
  }
  get aspectRatioImageSizeMap() {
    let e;
    const { resolutionMap } =
      (e = this.currentSelectedImageModel) != null ? e : {};
    const { resolutionType } = this.largeImageInfo;
    const i = ey.S(resolutionType);
    if (!i || !(resolutionMap == null ? undefined : resolutionMap[i])) {
      return {};
    }
    const { imageRatioSizes = [] } = resolutionMap[i];
    return imageRatioSizes.reduce((acc, imageRatioSize) => {
      if (imageRatioSize.ratioType) {
        var i;
        var r;
        acc[imageRatioSize.ratioType] = {
          width: (i = imageRatioSize.width) != null ? i : 0,
          height: (r = imageRatioSize.height) != null ? r : 0,
          resolutionType,
        };
      }
      return acc;
    }, {});
  }
  get aspectRatioSizeMap() {
    let e;
    let t;
    const { resolutionMap } =
      (e = this.currentSelectedImageModel) != null ? e : {};
    const i = ey.S(this.largeImageInfo.resolutionType);
    const r = i
      ? resolutionMap == null || (t = resolutionMap[i]) == null
        ? undefined
        : t.imageRatioSizes
      : undefined;
    return new Map(
      G._l(r != null ? r : []).flatMap((e) => {
        var { aspectRatio, width, height } = e;
        if (width && height) {
          return [
            [
              aspectRatio,
              {
                width,
                height,
                resolutionType: this.largeImageInfo.resolutionType,
              },
            ],
          ];
        }
        return [];
      }),
    );
  }
  get imageRangeConfig() {
    let e;
    let t;
    const { resolutionMap } =
      (e = this.currentSelectedImageModel) != null ? e : {};
    const { resolutionType } = this.largeImageInfo;
    const r = ey.S(resolutionType);
    if (this.isCustomResolutionSelected) {
      const n = ez.Md(resolutionMap);
      if (n) {
        return n;
      }
    }
    if (
      r &&
      (resolutionMap == null || (t = resolutionMap[r]) == null
        ? undefined
        : t.imageRangeConfig)
    ) {
      return resolutionMap[r].imageRangeConfig;
    }
    return {
      minLength: h.z,
      maxLength: h.du,
      maxPixelNum: h.zt,
    };
  }
  resolveCustomResolutionType(e, t) {
    let a;
    return ez.R7(
      e,
      t,
      (a = this.currentSelectedImageModel) == null
        ? undefined
        : a.resolutionMap,
    );
  }
  get aspectRatioOptions() {
    return this._getAspectRatioOptionsByResolution(
      this.largeImageInfo.resolutionType,
    );
  }
  _getAspectRatioOptionsByResolution(e) {
    let t;
    let a;
    let i;
    let r;
    const { resolutionMap } =
      (t = this.currentSelectedImageModel) != null ? t : {};
    const o = ey.S(e);
    return G.$_({
      intelligentAspectRatioOptionVisible:
        this._metadata.intelligentAspectRatioOptionVisible,
      feats:
        (a =
          (i = this.currentSelectedImageModel) == null ? undefined : i.feats) !=
        null
          ? a
          : [],
      imageRatioSizes: o
        ? resolutionMap == null || (r = resolutionMap[o]) == null
          ? undefined
          : r.imageRatioSizes
        : undefined,
    });
  }
  setSelectedImageModel(targetModel) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const _selectedImageModel = this._selectedImageModel;
    const dimension = this._getCurrentDimensionHistory();
    const effectiveGenerateCount = this.effectiveGenerateCount;
    const imageBackgroundMode = this.imageBackgroundMode;
    const imageQuality = this.imageQuality;
    const imageStylization = this.imageStylization;
    const targetHistory = targetModel
      ? this._getModelParameterHistory(targetModel.key)
      : undefined;
    let c = false;
    const m = this.aspectRatioOptions.some((e) => {
      var { value } = e;
      return value === this.aspectRatio;
    });
    this._selectedImageModel = targetModel;
    this._clearInvalidGenerateCountByModel();
    if (targetModel) {
      const u = ((e) => {
        let t;
        const {
          getAspectRatioOptions,
          previousParameters,
          targetHistory,
          targetModel,
        } = e;
        const {
          backgroundOptions,
          defaultBackground,
          defaultQuality,
          qualityOptions,
          stylizeRange,
        } = (t = targetModel.generationParamConfig) != null ? t : {};
        const c = eK(backgroundOptions);
        const m = eK(qualityOptions);
        const u = eH(stylizeRange);
        const h = eq(
          c,
          defaultBackground,
          previousParameters == null
            ? undefined
            : previousParameters.backgroundMode,
          targetHistory == null ? undefined : targetHistory.backgroundMode,
        );
        const p = eq(
          m,
          defaultQuality,
          previousParameters == null ? undefined : previousParameters.quality,
          targetHistory == null ? undefined : targetHistory.quality,
        );
        const _ = (function (e) {
          let t;
          for (
            var a = arguments.length, i = Array(a > 1 ? a - 1 : 0), r = 1;
            r < a;
            r++
          ) {
            i[r - 1] = arguments[r];
          }
          if ((t = i.find((t) => eV(t, e))) != null) {
            return t;
          }
          if (e == null) {
            return undefined;
          }
          return e.defaultValue;
        })(
          u,
          previousParameters == null
            ? undefined
            : previousParameters.stylization,
          targetHistory == null ? undefined : targetHistory.stylization,
        );
        const f = (
          previousParameters == null ? undefined : previousParameters.dimension
        )
          ? eQ(
              previousParameters.dimension,
              targetModel,
              getAspectRatioOptions(
                previousParameters.dimension.resolutionType,
              ),
            )
          : undefined;
        const y = (targetHistory == null ? undefined : targetHistory.dimension)
          ? eQ(
              targetHistory.dimension,
              targetModel,
              getAspectRatioOptions(targetHistory.dimension.resolutionType),
            )
          : undefined;
        const configuredParametersAdjusted = !!(
          previousParameters &&
          ((previousParameters.backgroundMode !== undefined &&
            previousParameters.backgroundMode !== h) ||
            (previousParameters.quality !== undefined &&
              previousParameters.quality !== p) ||
            (previousParameters.stylization !== undefined &&
              previousParameters.stylization !== _))
        );
        return {
          backgroundMode: h,
          configuredParametersAdjusted,
          dimension: f != null ? f : y,
          quality: p,
          stylization: _,
        };
      })({
        getAspectRatioOptions: (e) =>
          this._getAspectRatioOptionsByResolution(e),
        previousParameters: _selectedImageModel
          ? {
              backgroundMode: imageBackgroundMode,
              dimension,
              quality: imageQuality,
              stylization: imageStylization,
            }
          : undefined,
        targetHistory,
        targetModel,
      });
      c = u.configuredParametersAdjusted;
      let h = false;
      if (u.dimension) {
        const { isCustomResolution } = u.dimension;
        this._applyDimensionHistory(u.dimension);
        h = isCustomResolution;
      } else {
        this.adjustResolutionAndSizeByCurrentSelectedModel(m);
      }
      this._setModelParameterHistory(
        targetModel.key,
        n._(r._({}, targetHistory), {
          backgroundMode: u.backgroundMode,
          dimension: this._getCurrentDimensionHistory(h),
          quality: u.quality,
          stylization: u.stylization,
        }),
      );
    }
    const _ =
      _selectedImageModel !== undefined &&
      targetModel !== undefined &&
      JSON.stringify(dimension) !==
        JSON.stringify(this._getCurrentDimensionHistory());
    const f =
      _selectedImageModel !== undefined &&
      targetModel !== undefined &&
      effectiveGenerateCount !== undefined &&
      !ef.Nv(effectiveGenerateCount, targetModel.generateCountOptions);
    const y = _ || f || c;
    if (t) {
      this._clearAbilityListIfNotCompatible(this.abilityList);
    } else {
      this._switchToCompatibleModelIfNeeded(this.abilityList);
    }
    return y;
  }
  setMobileAvailableModelKeys(e) {
    this.mobileAvailableModelKeys = e;
  }
  setGenerateType(e) {
    this.generateType = e;
  }
  setNegativePrompt(e) {
    this.negativePrompt = e;
  }
  setAspectRatio(e) {
    this.aspectRatio = e;
  }
  setLockRatio(e) {
    this.isLockRatio = e;
  }
  setLargeImageInfo(e) {
    this.largeImageInfo = e;
  }
  setMode(e) {
    this.mode = e;
  }
  setIsInFreemiumStage(e) {
    this.isInFreemiumStage = e;
  }
  setAbilityList(e) {
    this._setAbilityListWithReferences(e);
    this._switchToCompatibleModelIfNeeded(e);
    if (
      e.some((e) => e.blendModel.abilityName === E.DABlendAbilityName.ByteEdit)
    ) {
      this.adjustResolutionAndSizeByCurrentSelectedModel();
    }
  }
  removeAbilityById(e) {
    const t = this.abilityList.filter((t) => t.id !== e);
    this.setAbilityList(t);
  }
  setGenerateCount(e) {
    const { currentSelectedImageModel } = this;
    if (
      currentSelectedImageModel &&
      ef.Nv(e, currentSelectedImageModel.generateCountOptions)
    ) {
      const a = eX(this.generateCountByModel);
      if (a[currentSelectedImageModel.key] === e) {
        if (a !== this.generateCountByModel) {
          this.generateCountByModel = a;
        }
        return;
      }
      this.generateCountByModel = n._(r._({}, a), {
        [currentSelectedImageModel.key]: e,
      });
    }
  }
  setImageQuality(e) {
    if (
      this.imageQualityOptions.some((t) => {
        var { value } = t;
        return value === e;
      })
    ) {
      this._updateCurrentModelParameterHistory({
        quality: e,
      });
    }
  }
  setImageBackgroundMode(e) {
    if (
      this.imageBackgroundModeOptions.some((t) => {
        var { value } = t;
        return value === e;
      })
    ) {
      this._updateCurrentModelParameterHistory({
        backgroundMode: e,
      });
    }
  }
  setImageStylization(e) {
    if (eV(e, this.imageStylizationRange)) {
      this._updateCurrentModelParameterHistory({
        stylization: e,
      });
    }
  }
  setCustomResolutionSelected(e) {
    this._updateCurrentModelParameterHistory({
      dimension: this._getCurrentDimensionHistory(
        e && this.supportCustomResolution,
      ),
    });
  }
  saveCurrentModelDimensionHistory() {
    this._updateCurrentModelParameterHistory({
      dimension: this._getCurrentDimensionHistory(
        this.isCustomResolutionSelected,
      ),
    });
  }
  _clearInvalidGenerateCountByModel() {
    const { currentSelectedImageModel } = this;
    const t = eX(this.generateCountByModel);
    if (!currentSelectedImageModel) {
      this.generateCountByModel = t;
      return;
    }
    const { key, generateCountOptions } = currentSelectedImageModel;
    const n = t[key];
    if (n === undefined || ef.Nv(n, generateCountOptions)) {
      this.generateCountByModel = t;
      return;
    }
    const o = r._({}, t);
    delete o[key];
    this.generateCountByModel = o;
  }
  setIsForceSingleGeneration(e) {
    this.isForceSingleGeneration = e;
  }
  updateLargeImageInfo(e) {
    this.largeImageInfo = r._({}, this.largeImageInfo, e);
  }
  updateBlendModelGenerateSize(width, height) {
    this.blendModelGenerateSize = {
      width,
      height,
    };
  }
  resetData() {
    this.negativePrompt = eZ.negativePrompt;
    this.generateType = eZ.generateType;
    this.mode = eZ.mode;
    this.aspectRatio = eZ.aspectRatio;
    this.largeImageInfo = eZ.largeImageInfo;
    this.promptContents = [];
    this.setAbilityListByBlendList([]);
    this.setSelectedImageModel(undefined);
  }
  resetByGeneratorData(e) {
    this.setPromptContents(
      e.prompt
        ? [
            {
              type: "text",
              text: e.prompt,
            },
          ]
        : [],
    );
    this.negativePrompt =
      (i = e.negativePrompt) != null ? i : eZ.negativePrompt;
    this.generateType = (o = e.generateType) != null ? o : eZ.generateType;
    if (e.abilityList !== undefined) {
      const t = this._createAbilityListFromGeneratorData(e);
      this.setAbilityList(t);
    }
    if (e.references !== undefined) {
      this.references = e.references;
    }
    this.mode = E.DAAIGCMode.workbench;
    if (
      e.model &&
      ((s = e.largeImageInfo) == null ? undefined : s.resolutionType)
    ) {
      this.updateModelResolutionCache(
        e.model,
        (l = e.largeImageInfo) == null ? undefined : l.resolutionType,
      );
    }
    this.setModelByKey(e.model);
    if (e.quality !== undefined) {
      this.setImageQuality(e.quality);
    }
    if (e.backgroundMode !== undefined) {
      this.setImageBackgroundMode(e.backgroundMode);
    }
    if (e.stylization !== undefined) {
      this.setImageStylization(e.stylization);
    }
    this.aspectRatio = undefined;
    if (e.imageRatio === undefined) {
      const a = e.largeImageInfo || eZ.largeImageInfo;
      this.largeImageInfo = a;
      if (!e.isIntelligentAspectRatio) {
        this.aspectRatio = "".concat(a.width, ":").concat(a.height);
      }
      this.isLockRatio = false;
    } else {
      var i;
      var o;
      var s;
      var l;
      let d;
      let g;
      let c;
      let m;
      const u =
        (d = (c = e.largeImageInfo) == null ? undefined : c.resolutionType) !=
        null
          ? d
          : "1k";
      const h = H(
        (g = ey.S(u)) != null ? g : "1k",
        (m = this.currentSelectedImageModel) == null
          ? undefined
          : m.resolutionMap,
        e.imageRatio,
      );
      this.aspectRatio = p.F(e.imageRatio);
      this.largeImageInfo = n._(r._({}, h), {
        resolutionType: u,
      });
      this.isLockRatio = true;
    }
    this.setCustomResolutionSelected(
      e.imageRatio === undefined && !e.isIntelligentAspectRatio,
    );
  }
  setAbilityListByBlendList(e) {
    const t = e.map((e) => ({
      id: x.uR(),
      coverUrl: Q.N(e),
      blendModel: e,
    }));
    this.setAbilityList(t);
  }
  setModelByKey(e) {
    let t = this._metadata.generateImageModelList.find((t) => t.key === e);
    if (!t) {
      t =
        this.abilityList.length > 0
          ? this._metadata.generateImageModelList.find((e) =>
              L(e, this.abilityList),
            )
          : this._metadata.defaultImageModel;
    }
    this.setSelectedImageModel(t);
  }
  adjustResolutionAndSizeByCurrentSelectedModel() {
    let e;
    let t;
    let a;
    const i =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : this.aspectRatioOptions.some((e) => {
            var { value } = e;
            return value === this.aspectRatio;
          });
    const r =
      arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const { currentSelectedImageModel, largeImageInfo, isByteEdit } = this;
    if (
      (currentSelectedImageModel == null
        ? undefined
        : currentSelectedImageModel.feats.includes(f.Si.EmptyRatioSizes)) &&
      (currentSelectedImageModel == null
        ? undefined
        : currentSelectedImageModel.feats.includes(f.Si.SmartScale))
    ) {
      this.updateLargeImageInfo({
        width: 1024,
        height: 1024,
      });
      this.setAspectRatio("1:1");
      return;
    }
    if (
      !(currentSelectedImageModel == null
        ? undefined
        : currentSelectedImageModel.resolutionMap)
    ) {
      return;
    }
    const l = Object.keys(currentSelectedImageModel.resolutionMap);
    if (l.length !== 0) {
      const d = this._getModelCachedResolution(currentSelectedImageModel.key);
      const g = d && l.includes(d) ? d : undefined;
      const c =
        g != null
          ? g
          : this._getModelDefaultResolution(currentSelectedImageModel);
      e = isByteEdit
        ? ((t = this.currentSelectedImageModel) == null
            ? undefined
            : t.feats.includes(f.Si.ThinkThenDraw)) && l.includes(c)
          ? c
          : "1k"
        : (a = l.find((e) => e === c)) != null
          ? a
          : l[0];
      if (!l.includes(e)) {
        e = l[0];
      }
      const { width, height } = largeImageInfo;
      const h = currentSelectedImageModel.resolutionMap[e];
      if (
        isByteEdit &&
        !this.isByteEditSupportCustomRatio &&
        this.blendModelGenerateSize
      ) {
        this.updateLargeImageInfo({
          width: this.blendModelGenerateSize.width,
          height: this.blendModelGenerateSize.height,
        });
        this.setAspectRatio(
          ""
            .concat(this.blendModelGenerateSize.width, ":")
            .concat(this.blendModelGenerateSize.height),
        );
        return;
      }
      if (h) {
        const p = i
          ? G.ju(this._getAspectRatioOptionsByResolution(e), this.aspectRatio)
          : this.aspectRatio;
        const _ = p !== this.aspectRatio;
        if (
          !(
            !r &&
            !_ &&
            e === largeImageInfo.resolutionType &&
            h.imageRangeConfig &&
            ez.Zh(width, height, h.imageRangeConfig)
          )
        ) {
          this.updateLargeImageInfo({
            resolutionType: e,
          });
          this.setAspectRatio(p);
          if (
            r &&
            p === undefined &&
            this._metadata.intelligentAspectRatioOptionVisible
          ) {
            return void this.adjustIntelligentRatioByCurrentSelectedModel();
          }
          const {
            width: width_1,
            height: height_1,
            resolutionType,
            aspectRatio,
          } = this._getLargeImageInfoByResolution(e);
          this.setLargeImageInfo({
            width: width_1,
            height: height_1,
            resolutionType,
          });
          this.setAspectRatio(aspectRatio);
        }
      }
    }
  }
  normalizeDimensionByCurrentModel() {
    this.adjustResolutionAndSizeByCurrentSelectedModel(true, true);
  }
  adjustIntelligentRatioByCurrentSelectedModel() {
    if (this._metadata.intelligentAspectRatioOptionVisible) {
      let e;
      let t;
      const a = (e = this.largeImageInfo.resolutionType) != null ? e : "2k";
      const i = this.aspectRatioImageSizeMap[UT];
      const r = (t = Uc[a]) != null ? t : FL;
      const n = i != null ? i : r;
      this.updateLargeImageInfo({
        width: n.width,
        height: n.height,
        resolutionType: a,
      });
    }
  }
  updateModelResolutionCache(e, t) {
    this._updateModelResolutionCache(e, t);
  }
  _setAbilityListWithoutResolutionAdjustment(e) {
    this._setAbilityListWithReferences(e);
    this._switchToCompatibleModelIfNeeded(e);
  }
  _switchToCompatibleModelIfNeeded(e) {
    if (!this._selectedImageModel) {
      this.setSelectedImageModel(this._metadata.defaultImageModel);
    }
    const { currentSelectedImageModel } = this;
    if (currentSelectedImageModel && !L(currentSelectedImageModel, e)) {
      const { generateImageModelList } = this._metadata;
      const i = generateImageModelList.find((t) => L(t, e));
      if (i) {
        this.setSelectedImageModel(i);
        this._notificationService.normal(
          s.Ay.t(
            "web_new_dre_auto_match_model_toast",
            {},
            "已为您匹配至最佳模型",
          ),
        );
      } else {
        this._selectedImageModel = undefined;
      }
    }
  }
  _clearAbilityListIfNotCompatible(e) {
    if (!this._selectedImageModel) {
      this.setSelectedImageModel(this._metadata.defaultImageModel);
    }
    const { currentSelectedImageModel } = this;
    if (currentSelectedImageModel && !L(currentSelectedImageModel, e)) {
      this.setAbilityList([]);
    }
  }
  _syncStyleCodeFromPrompt(e) {
    const t = A_(e);
    if (t) {
      for (const a of this.abilityList) {
        if (t_1.includes(a.blendModel.abilityName)) {
          return void this._notificationService.normal(
            s.Ay.t(
              "web_new_dre_t2i_style_code_conflict_with_notice",
              {
                reference: z.P(a.blendModel),
              },
              "风格代码暂不支持和{reference}一同使用",
            ),
          );
        }
      }
      const i = this.abilityList.find(
        (e) => e.blendModel.abilityName === E.DABlendAbilityName.StyleCode,
      );
      if (i) {
        const o = this.abilityList.map((e) => {
          if (e.id === i.id) {
            return n._(r._({}, e), {
              blendModel: n._(r._({}, e.blendModel), {
                code: t,
              }),
            });
          }
          return e;
        });
        this.setAbilityList(o);
      } else {
        const l = {
          abilityName: E.DABlendAbilityName.StyleCode,
          code: t,
        };
        const d = [
          ...this.abilityList,
          {
            id: x.uR(),
            coverUrl: "",
            blendModel: l,
          },
        ];
        this.setAbilityList(d);
      }
    } else {
      const g = this.abilityList.filter(
        (e) => e.blendModel.abilityName !== E.DABlendAbilityName.StyleCode,
      );
      this.setAbilityList(g);
    }
  }
  _setAbilityListWithReferences(e) {
    const t = new Map(this.references.map((e) => [e.id, e]));
    const a = [];
    const i = {};
    const r = [];
    for (const n of e) {
      if (n.blendModel.abilityName === E.DABlendAbilityName.StyleCode) {
        r.push(n);
        continue;
      }
      const o = n.id;
      i[o] = n.blendModel;
      a.push(this._createReferenceResourceFromAbility(n, t.get(o)));
    }
    this.references = a;
    this.blendModelByReferenceId = i;
    this.styleCodeAbilities = r;
  }
  _createAbilityListFromGeneratorData(e) {
    let t;
    let a = 0;
    return ((t = e.abilityList) != null ? t : []).map((t) => {
      var coverUrl = Q.N(t);
      return {
        id:
          t.abilityName === E.DABlendAbilityName.StyleCode
            ? x.uR()
            : this._resolveReferenceIdForAbility(t, coverUrl, a++, e),
        coverUrl,
        blendModel: t,
      };
    });
  }
  _resolveReferenceIdForAbility(e, t, a, i) {
    let r;
    let n;
    let o;
    let s;
    let l;
    let d;
    let g;
    let c;
    let m;
    let u;
    const h = K.W(e);
    const p = [
      ...((r = i.references) != null ? r : []),
      ...((n = (d = i.unifiedEditData) == null ? undefined : d.references) !=
      null
        ? n
        : []),
    ].find((e) => {
      if (
        ((h == null ? undefined : h.imageUri) && e.uri === h.imageUri) ||
        ((h == null || (a = h.aigcImage) == null ? undefined : a.itemId) &&
          ((i = e.remoteExtraInfo) == null ? undefined : i.aigcItemId) ===
            h.aigcImage.itemId)
      ) {
        return true;
      }
      var a;
      var i;
      var r = (h == null ? undefined : h.imageUrl) || t;
      return !!(r && e.url === r);
    });
    if (
      (o =
        (s =
          (l = p == null ? undefined : p.id) != null
            ? l
            : (c = i.references) == null || (g = c[a]) == null
              ? undefined
              : g.id) != null
          ? s
          : (u = i.unifiedEditData) == null || (m = u.references[a]) == null
            ? undefined
            : m.id) != null
    ) {
      return o;
    }
    return x.uR();
  }
  _buildAbilityList() {
    return [
      ...this.references.flatMap((e) => {
        var t;
        var a;
        var i = this.blendModelByReferenceId[e.id];
        if (i) {
          return [
            {
              id: e.id,
              coverUrl: e.url,
              coverUrlMap:
                (t = e.remoteExtraInfo) == null
                  ? undefined
                  : t.resolutionUrlMap,
              coverCacheKey:
                (a = e.remoteExtraInfo) == null ? undefined : a.cacheKey,
              blendModel: i,
            },
          ];
        }
        return [];
      }),
      ...this.styleCodeAbilities,
    ];
  }
  _createReferenceResourceFromAbility(e, t) {
    let a;
    let i;
    let o;
    let s;
    let l;
    let d;
    const g = K.W(e.blendModel);
    const url = (g == null ? undefined : g.imageUrl) || e.coverUrl;
    const m = (t == null ? undefined : t.url) === url;
    if (
      t &&
      m &&
      (!(g == null ? undefined : g.imageUri) || g.imageUri === t.uri) &&
      (!(g == null ? undefined : g.width) || g.width === t.width) &&
      (!(g == null ? undefined : g.height) || g.height === t.height) &&
      (!(g == null || (s = g.aigcImage) == null ? undefined : s.itemId) ||
        g.aigcImage.itemId ===
          ((l = t.remoteExtraInfo) == null ? undefined : l.aigcItemId))
    ) {
      return t;
    }
    const uri =
      (a = g == null ? undefined : g.imageUri) != null
        ? a
        : m
          ? t == null
            ? undefined
            : t.uri
          : undefined;
    const h =
      (i = g == null ? undefined : g.width) != null
        ? i
        : m
          ? t == null
            ? undefined
            : t.width
          : undefined;
    const p =
      (o = g == null ? undefined : g.height) != null
        ? o
        : m
          ? t == null
            ? undefined
            : t.height
          : undefined;
    return this._containerService.createInstance(
      eR.Vl,
      n._(
        r._(
          {
            id: e.id,
          },
          uri && {
            uri,
          },
          h &&
            p && {
              width: h,
              height: p,
            },
        ),
        {
          url,
          aigcItemId:
            g == null || (d = g.aigcImage) == null ? undefined : d.itemId,
          resolutionUrlMap:
            (g == null ? undefined : g.coverUrlMap) || e.coverUrlMap,
          cacheKey: e.coverCacheKey,
          name: g == null ? undefined : g.title,
        },
      ),
    );
  }
  _getLargeImageInfoByResolution(e) {
    const {
      aspectRatio,
      aspectRatioImageSizeMap,
      aspectRatioSizeMap,
      currentSelectedImageModel,
      largeImageInfo,
    } = this;
    const l = r._({}, largeImageInfo);
    let aspectRatio_1 = aspectRatio;
    l.resolutionType = e;
    const g = aspectRatio ? aspectRatioSizeMap.get(aspectRatio) : undefined;
    const c = aspectRatio && C.z(aspectRatio) ? u.i(aspectRatio) : undefined;
    if (g) {
      l.width = g.width;
      l.height = g.height;
    } else if (aspectRatio && c) {
      let m;
      const p = (m = aspectRatioImageSizeMap[c]) != null ? m : h.Pn[c];
      l.width = p.width;
      l.height = p.height;
    } else {
      let _;
      let f;
      const y = aspectRatio === undefined;
      const { maxPixelNum, minLength, maxLength } =
        (_ =
          (f = (
            currentSelectedImageModel != null ? currentSelectedImageModel : eA.K
          ).resolutionMap) == null
            ? undefined
            : f[e].imageRangeConfig) != null
          ? _
          : {
              minLength: h.z,
              maxLength: h.du,
              maxPixelNum: h.zt,
            };
      const { width, height } = $_1(
        largeImageInfo.width,
        largeImageInfo.height,
        minLength,
        maxLength,
        maxPixelNum,
      );
      l.width = width;
      l.height = height;
      aspectRatio_1 = y ? undefined : "".concat(width, ":").concat(height);
    }
    return n._(r._({}, l), {
      aspectRatio: aspectRatio_1,
    });
  }
  _getModelParameterHistory(e) {
    return eU(this.modelParameterHistory, e);
  }
  _getCurrentModelParameterHistory() {
    let e;
    const t = (e = this.currentSelectedImageModel) == null ? undefined : e.key;
    if (t) {
      return this._getModelParameterHistory(t);
    }
  }
  _setModelParameterHistory(e, t) {
    this.modelParameterHistory = eO(this.modelParameterHistory, e, t);
  }
  _updateCurrentModelParameterHistory(e) {
    let t;
    let a;
    const i = (a = this.currentSelectedImageModel) == null ? undefined : a.key;
    if (i) {
      this.modelParameterHistory =
        ((t = this.modelParameterHistory), eO(t, i, r._({}, eU(t, i), e)));
    }
  }
  _getCurrentDimensionHistory() {
    let e;
    const isCustomResolution =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : this.isCustomResolutionSelected;
    const { resolutionType } = this.largeImageInfo;
    if (eT(resolutionType)) {
      return {
        aspectRatio: (e = this.aspectRatio) != null ? e : null,
        height: this.largeImageInfo.height,
        isCustomResolution,
        isLockRatio: this.isLockRatio,
        resolutionType,
        width: this.largeImageInfo.width,
      };
    }
  }
  _applyDimensionHistory(e) {
    let t;
    this.largeImageInfo = n._(r._({}, this.largeImageInfo), {
      height: e.height,
      resolutionType: e.resolutionType,
      width: e.width,
    });
    this.aspectRatio = (t = e.aspectRatio) != null ? t : undefined;
    this.isLockRatio = e.isLockRatio;
  }
  _getModelDefaultResolution(e) {
    if (!e.resolutionMap || Object.keys(e.resolutionMap).length === 0) {
      return "1k";
    }
    let t;
    const a = Object.keys(e.resolutionMap);
    if (e.defaultResolutionType && a.includes(e.defaultResolutionType)) {
      return e.defaultResolutionType;
    }
    if ((t = a[0]) != null) {
      return t;
    }
    return "1k";
  }
  _getModelCachedResolution(e) {
    return this._modelResolutionCache.get(e);
  }
  _updateModelResolutionCache(e, t) {
    this._modelResolutionCache.set(e, t);
  }
  constructor(e, t, a, i) {
    this._metadata = e;
    this._notificationService = t;
    this._containerService = a;
    this._imageGeneratorManager = i;
    this._inlinePromptLengthFeedbackEnabled = false;
    this._selectedImageModel = undefined;
    this.generateType = eZ.generateType;
    this.generateCountByModel = {};
    this.modelParameterHistory = ex();
    this.mode = eZ.mode;
    this.negativePrompt = eZ.negativePrompt;
    this.largeImageInfo = eZ.largeImageInfo;
    this.blendModelGenerateSize = undefined;
    this._modelResolutionCache = new Map();
    this.references = [];
    this.promptContents = eZ.prompt
      ? [
          {
            type: "text",
            text: eZ.prompt,
          },
        ]
      : [];
    this.blendModelByReferenceId = {};
    this.styleCodeAbilities = [];
    this.isLockRatio = true;
    this.aspectRatio = eZ.aspectRatio;
    this.isInFreemiumStage = false;
    this.mobileAvailableModelKeys = [];
    this.isForceSingleGeneration = eZ.isForceSingleGeneration;
    k.l_(this);
  }
}
o.Cg(
  [eB.A(), o.Sn("design:type", Object)],
  eJ.prototype,
  "_selectedImageModel",
  undefined,
);
o.Cg(
  [eB.A(), o.Sn("design:type", Object)],
  eJ.prototype,
  "generateCountByModel",
  undefined,
);
o.Cg(
  [eB.A(), o.Sn("design:type", Object)],
  eJ.prototype,
  "modelParameterHistory",
  undefined,
);
o.Cg([eB.A()], eJ.prototype, "largeImageInfo", undefined);
o.Cg(
  [eB.A(), o.Sn("design:type", Object)],
  eJ.prototype,
  "blendModelGenerateSize",
  undefined,
);
o.Cg([eB.A()], eJ.prototype, "isLockRatio", undefined);
o.Cg([eB.A()], eJ.prototype, "aspectRatio", undefined);
eJ = o.Cg(
  [
    eB.L("image"),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof StoreData === "undefined" ? Object : StoreData,
      typeof INotificationService === "undefined"
        ? Object
        : INotificationService,
      typeof IContainerService === "undefined" ? Object : IContainerService,
      typeof ImageGeneratorManager === "undefined"
        ? Object
        : ImageGeneratorManager,
    ]),
  ],
  eJ,
);
const eY = require("./module-Nn9.js");
const e$ = require("EHr");
const e0 = require("kX");
class e1 {
  get modelList() {
    return this._imageModelList;
  }
  get generateImageModelList() {
    return this._imageModelList.filter((e) => e.feats.includes(f.yo.Default));
  }
  get defaultImageModel() {
    return this._defaultImageModel || this.generateImageModelList[0];
  }
  get normalizedGenerateCountOptions() {
    let e;
    let t;
    let a;
    if (
      (e = ef.PP(
        (a = this._data) == null || (t = a.currentSelectedImageModel) == null
          ? undefined
          : t.generateCountOptions,
      )) != null
    ) {
      return e;
    }
    return [];
  }
  get generateCountOptions() {
    return this.normalizedGenerateCountOptions.map((e) => ({
      label: String(e),
      value: e,
    }));
  }
  get generateCountVisible() {
    return this.normalizedGenerateCountOptions.length > 0;
  }
  get modelOptions() {
    let e;
    const { abilityList } = (e = this._data) != null ? e : {};
    return this.generateImageModelList.map((e) => {
      var { key, name, description, coverUrl, iconUrl } = e;
      var disabled = !!abilityList && !L(e, abilityList);
      var content = abilityList && disabled ? eY.Y(abilityList) : "";
      return {
        label: name,
        value: key,
        disabled,
        extra: {
          coverUrl,
          iconUrl,
          description,
          tag: this._getModelTag(e),
          tooltipProps: {
            content,
            disabled: !disabled,
          },
          commercial: {
            sceneOptions: eb.O({
              scene: er.Sk.ImageModelSwitch,
              modelReqKey: key,
              abilityList:
                abilityList == null
                  ? undefined
                  : abilityList.map((e) => e.blendModel),
              imageInputNum: eI.m(
                abilityList == null
                  ? undefined
                  : abilityList.map((e) => e.blendModel),
              ),
            }),
          },
        },
      };
    });
  }
  get placeholderKey() {
    let e;
    const { abilityList } = (e = this._data) != null ? e : {};
    if (this.isModelSupportSubject && (g.Fr, 1)) {
      if (abilityList == null ? undefined : abilityList.length) {
        return "image_prompt_subjectmodel_withref";
      }
      return "image_no_ref_hint";
    }
    if (!abilityList || abilityList.length === 0) {
      return "web_web_t2i_draw_words_placeholder_text";
    }
    if (abilityList.length === 1) {
      switch (abilityList[0].blendModel.abilityName) {
        case E.DABlendAbilityName.ByteEdit:
          return "web_new_image_reference_custom_description";
        case E.DABlendAbilityName.BgPaint:
          return "web_new_wimg2img_content_describemain";
        case E.DABlendAbilityName.FaceGan:
          return "web_new_wimg2img_content_describecharacter";
      }
    }
    return "web_new_tool_text_input_tostart";
  }
  get isModelSupportRefuseImage() {
    let e;
    let t;
    let a;
    return (
      (e =
        (a = this._data) == null || (t = a.currentSelectedImageModel) == null
          ? undefined
          : t.feats.includes(f.yo.RefuseImage)) != null && e
    );
  }
  get isModelSupportByteEdit() {
    let e;
    let t;
    let a;
    return (
      (e =
        (a = this._data) == null || (t = a.currentSelectedImageModel) == null
          ? undefined
          : t.feats.includes(f.yo.ByteEdit)) != null && e
    );
  }
  get isModelSupportSubject() {
    let e;
    let t;
    const { currentSelectedImageModel } = (e = this._data) != null ? e : {};
    if (
      !(currentSelectedImageModel == null
        ? undefined
        : currentSelectedImageModel.key)
    ) {
      return false;
    }
    const i = this.generateImageModelList.find(
      (e) => e.key === currentSelectedImageModel.key,
    );
    return (
      (t =
        i == null
          ? undefined
          : i.feats.some((e) => e === f.yo.SupportSubject)) != null && t
    );
  }
  get intelligentAspectRatioOptionVisible() {
    let e;
    let t;
    let a;
    return (
      (e =
        (a = this._data) == null || (t = a.currentSelectedImageModel) == null
          ? undefined
          : t.feats.includes(f.Si.SmartScale)) != null && e
    );
  }
  get hideCustomRatio() {
    let e;
    let t;
    let a;
    return (
      (e =
        (a = this._data) == null || (t = a.currentSelectedImageModel) == null
          ? undefined
          : t.feats.includes(f.Si.HideCustomRatio)) != null && e
    );
  }
  get disableChooseHighWidth() {
    let e;
    let t;
    let a;
    return (
      (e =
        (a = this._data) == null || (t = a.currentSelectedImageModel) == null
          ? undefined
          : t.feats.includes(f.Si.DisableChooseHighWidth)) != null && e
    );
  }
  get canUploadMultipleImages() {
    return this.isModelSupportRefuseImage;
  }
  get canUseMultipleByteEditAbility() {
    return this.isModelSupportRefuseImage;
  }
  get shouldDisabledReferenceImageAbilityConflict() {
    return this.isModelSupportRefuseImage;
  }
  get isByteEditSupportMask() {
    return this.isModelSupportRefuseImage;
  }
  get ModelIsSimpleImage() {
    let e;
    let t;
    let a;
    return (
      (e =
        (a = this._data) == null || (t = a.currentSelectedImageModel) == null
          ? undefined
          : t.feats.includes(f.Si.SimpleImage)) != null && e
    );
  }
  get isModelSupportAspectRatio() {
    let e;
    let t;
    return !((t = this._data) == null ||
    (e = t.currentSelectedImageModel) == null
      ? undefined
      : e.feats.includes(f.Si.EmptyRatioSizes));
  }
  get submitButtonDisabled() {
    let e;
    return !((e = this._data) == null ? undefined : e.validationResult.ok);
  }
  get submitButtonTooltipProps() {
    let e;
    return {
      content: (e = this._data) == null ? undefined : e.validationResult.msg,
    };
  }
  get referenceImageModalDisplayAbilities() {
    if (this.isModelSupportRefuseImage) {
      return [Y.gP.ByteEdit];
    }
    return eN.o;
  }
  get referenceImageModalUiConfig() {
    const { isModelSupportRefuseImage } = this;
    const modalTitle = isModelSupportRefuseImage
      ? s.Ay.t("web_reference_element_smart", {}, "Custom")
      : undefined;
    return {
      hideAbilityList: isModelSupportRefuseImage,
      showByteEditPaintEntry: isModelSupportRefuseImage,
      modalTitle,
    };
  }
  get chargeByCount() {
    let e;
    let t;
    let a;
    return (
      (e =
        (a = this._data) == null || (t = a.currentSelectedImageModel) == null
          ? undefined
          : t.feats.includes(f.Si.PerPiece)) != null && e
    );
  }
  get promptSubjectCount() {
    let e;
    let t;
    return new Set(
      ((e = (t = this._data) == null ? undefined : t.promptContents) != null
        ? e
        : []
      )
        .filter((e) => e.type === "subject")
        .map((e) => e.id),
    ).size;
  }
  get referenceImageCount() {
    let e;
    let t;
    return eI.m(
      (t = this._data) == null || (e = t.abilityList) == null
        ? undefined
        : e.map((e) => e.blendModel),
    );
  }
  get referenceSlotState() {
    let e;
    const maxReferenceCount = e0.p(
      (e = this._data) == null ? undefined : e.currentSelectedImageModel,
    );
    return eu.$e({
      blendImageCount: this.referenceImageCount,
      promptSubjectCount: this.promptSubjectCount,
      maxReferenceCount,
    });
  }
  get promptSubjectCountByType() {
    return {
      [v.yC.Image]: this.promptSubjectCount,
      [v.yC.Video]: 0,
      [v.yC.Audio]: 0,
    };
  }
  get unifiedEditValidationResult() {
    const { maxReferenceCount } = this.referenceSlotState;
    return eu.Dd({
      blendImageCount: this.referenceImageCount,
      promptSubjectCount: this.promptSubjectCount,
      maxReferenceCount,
    });
  }
  setDataStore(e) {
    this._data = e;
  }
  setImageModelList(e) {
    this._imageModelList = e;
  }
  setDefaultImageModel(e) {
    this._defaultImageModel = e;
  }
  setSubmitButtonLoading(e) {
    this.submitButtonLoading = e;
  }
  _getModelTag(e) {
    const { isNewModel } = e;
    if (isNewModel) {
      return "new";
    }
    if (e.feats.includes(f.Si.BetaModel)) {
      return "beta";
    }
  }
  constructor(e) {
    this._imageGeneratorManager = e;
    this._data = null;
    this._imageModelList = [eA.K];
    this._defaultImageModel = eA.K;
    this.submitButtonLoading = false;
    this.acceptedImageFileTypes = e$.j;
    k.l_(this);
  }
}
const e2 = require("MFW");
const e4 = require("ai0");
const e3 = require("JJ");
const e6 = require("nZ");
const e9 = require("./module-G1e.js");
const e5 = require("./module-bgf.js");
class e8 extends e6.j {
  get promptSource() {
    let e;
    if ((e = this.resourceReportParams.promptSource) != null) {
      return e;
    }
    return "custom";
  }
  reportImportReferenceImageMaterial(e) {
    const t = this._containerService.createInstance(e4.k);
    t.setParams(
      r._(
        {
          position: "generation",
          modal: "aigc_image",
          materialSource: "local",
          materialType: "image",
        },
        e,
      ),
    );
    t.report();
  }
  constructor(e, t) {
    super(t);
    this._imageGeneratorManager = e;
    this.reportActivatePrompt = () => {
      var e = this._containerService.createInstance(e9.v, this.commonParams);
      e.setParams({
        action: "activate",
      });
      e.report();
    };
    this.reportEnterPrompt = () => {
      var { isPromptEmpty } = this._imageGeneratorManager.data;
      if (!isPromptEmpty) {
        var t = this._containerService.createInstance(e9.v, this.commonParams);
        t.setParams({
          action: "enter_prompt",
        });
        t.report();
      }
    };
    this.reportClickUpload = () => {
      var e = this._containerService.createInstance(e9.v, this.commonParams);
      e.setParams({
        action: "click_upload",
      });
      e.report();
    };
    this.reportAddTempSubject = (e) => {
      var t;
      var a;
      var { subjectListShowFrom } = e3.m[e];
      var r = this._containerService.createInstance(e9.v, this.commonParams);
      var n =
        (t =
          (a = this._imageGeneratorManager.data.currentSelectedImageModel) ==
          null
            ? undefined
            : a.name) != null
          ? t
          : "";
      r.setParams({
        action: "add_temp_subject",
        subjectListShowFrom,
        modelName: n,
      });
      r.report();
    };
    this.reportAddSubject = (e, subjectId) => {
      var a;
      var i;
      var { subjectListShowFrom, assetPosition } = e3.m[e];
      var o = this._containerService.createInstance(e9.v, this.commonParams);
      var s =
        (a =
          (i = this._imageGeneratorManager.data.currentSelectedImageModel) ==
          null
            ? undefined
            : i.name) != null
          ? a
          : "";
      o.setParams({
        action: "add_subject",
        subjectListShowFrom,
        subjectId,
        modelName: s,
        assetPosition,
      });
      o.report();
    };
    this.reportDeleteUpload = () => {
      var e = this._containerService.createInstance(e9.v, this.commonParams);
      e.setParams({
        action: "delete_upload",
      });
      e.report();
    };
    this.reportSwitchModel = () => {
      var e;
      var t;
      var a =
        (e =
          (t = this._imageGeneratorManager.data.currentSelectedImageModel) ==
          null
            ? undefined
            : t.name) != null
          ? e
          : "";
      var i = this._containerService.createInstance(e9.v, this.commonParams);
      i.setParams({
        action: "switch_model",
        modelName: a,
      });
      i.report();
    };
    this.reportSwitchAspectRatio = () => {
      var aspectRatio = this._imageGeneratorManager.data.aspectRatio;
      var t = this._containerService.createInstance(e9.v, this.commonParams);
      t.setParams({
        action: "switch_aspect_ratio",
        ratio: aspectRatio === undefined ? "auto" : aspectRatio,
      });
      t.report();
    };
    this.reportSwitchDefinition = () => {
      var resolutionType =
        this._imageGeneratorManager.data.largeImageInfo.resolutionType;
      var t = this._containerService.createInstance(e9.v, this.commonParams);
      t.setParams({
        action: "switch_definition",
        definition: ey.S(resolutionType),
      });
      t.report();
    };
    this.reportSwitchGenerateCount = (generateNum) => {
      var t = this._containerService.createInstance(e9.v, this.commonParams);
      t.setParams({
        action: "switch_generate_number",
        generateNum,
      });
      t.report();
    };
    this.reportInputAspectRatio = () => {
      var e = this._containerService.createInstance(e9.v, this.commonParams);
      e.setParams({
        action: "input_aspect_ratio",
      });
      e.report();
    };
    this.reportClickQuotation = () => {
      var e = this._containerService.createInstance(e9.v, this.commonParams);
      e.setParams({
        action: "click_quotation",
      });
      e.report();
    };
    this.reportReferencePopupShow = () => {
      var e = this._containerService.createInstance(e5.f);
      e.setParams({
        action: "show",
      });
      e.report();
    };
    this.reportReferencePopupConfirm = () => {
      var e = this._containerService.createInstance(e5.f);
      e.setParams({
        action: "confirm",
      });
      e.report();
    };
    this.reportPasteUpload = (e) => {
      var t = this._containerService.createInstance(e9.v, this.commonParams);
      t.setParams({
        action: "paste_upload",
        uploadCnt: e.length,
      });
      t.report();
    };
    this.reportClickSettings = () => {
      var e = this._containerService.createInstance(e9.v, this.commonParams);
      e.setParams({
        action: "click_settings",
      });
      e.report();
    };
    this.reportAdPlacement = (e, pageFrom, action) => {
      var i = this._containerService.createInstance(e2.y, {
        action,
        pageFrom,
      });
      i.setRightTrackingDataBySceneOptios(e);
      i.report();
    };
    this.reportPasteReplace = () => {
      var e = this._containerService.createInstance(e9.v, this.commonParams);
      e.setParams({
        action: "paste_replace",
      });
      e.report();
    };
    this.reportAddImage = (e) => {
      var t = this._containerService.createInstance(e9.v, this.commonParams);
      t.setParams({
        action: "add_image",
        imageId: e == null ? undefined : e.imageId,
      });
      t.report();
    };
    this.reportAddVideo = (e) => {
      var t = this._containerService.createInstance(e9.v, this.commonParams);
      t.setParams({
        action: "add_video",
        videoId: e == null ? undefined : e.videoId,
      });
      t.report();
    };
    this.reportAddAudio = (e) => {
      var t = this._containerService.createInstance(e9.v, this.commonParams);
      t.setParams({
        action: "add_audio",
        audioId: e == null ? undefined : e.audioId,
      });
      t.report();
    };
  }
}
e8 = o.Cg(
  [
    o.Qj(1, m._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ImageGeneratorManager === "undefined"
        ? Object
        : ImageGeneratorManager,
      m._ === undefined ? Object : m._,
    ]),
  ],
  e8,
);
const e7 = require("wZz");
const te = require("rr");
const tt = require("btw");
class ta extends l.jG {
  _submit(e) {
    return i
      ._(function* () {
        const { environment } = e;
        const { variant } = environment;
        const {
          data: {
            params,
            commercialSceneOptions,
            isPromptEmpty,
            references,
            promptContents,
            resourceAuditPolicy,
            subjectPreAuditPolicy,
            submissionGenerateCount,
          },
          reportManager: {
            commonParams,
            promptSource,
            getReferenceAIGCItemIdReportParams,
          },
          referenceAuditManager,
        } = this._imageGeneratorManager;
        const f = n._(r._({}, params), {
          generateCount: submissionGenerateCount,
        });
        const subjectContents = w.X(promptContents);
        const metricsExtra = n._(
          r._(
            {},
            commonParams,
            getReferenceAIGCItemIdReportParams([
              ...references,
              ...this._imageGeneratorManager.unifiedEditManager.data.references,
            ]),
          ),
          {
            promptSource: isPromptEmpty ? undefined : promptSource,
            sceneOptions: JSON.stringify(commercialSceneOptions),
            isBoxSelect:
              (R = f.abilityList) == null
                ? undefined
                : R.some((e) => {
                    var t;
                    return (
                      e.blendModel.abilityName ===
                        E.DABlendAbilityName.ByteEdit &&
                      ((t = e.blendModel.extra) == null
                        ? undefined
                        : t.type) === "box_selection"
                    );
                  }),
            isCutout:
              (C = f.abilityList) == null
                ? undefined
                : C.some((e) => {
                    var t;
                    return (
                      e.blendModel.abilityName ===
                        E.DABlendAbilityName.ByteEdit &&
                      ((t = e.blendModel.extra) == null
                        ? undefined
                        : t.isCutout)
                    );
                  }),
            hasRejectedAudit: +!!referenceAuditManager.hasRejectedAudit({
              resources: references,
              preAuditPolicy: resourceAuditPolicy,
              subjectContents,
              subjectPreAuditPolicy,
            }),
          },
        );
        const mode =
          variant === "canvas" ? E.DAAIGCMode.canvas : E.DAAIGCMode.workbench;
        const conversationId = yield (A =
          this._imageGeneratorManager.agentInfoProvider) == null
          ? undefined
          : A.getCurrentConversationId();
        const M = yield this._workspaceService.ensureWorkspaceId();
        if (!M.ok) {
          return M;
        }
        const M_value = M.value;
        if (
          (B = this._imageGeneratorManager.infiniteCanvasExtendParams) == null
            ? undefined
            : B.draftId
        ) {
          infiniteCanvasExtend = {
            draftId:
              this._imageGeneratorManager.infiniteCanvasExtendParams.draftId,
          };
        }
        const P = this._getUnifiedEditInput();
        if (this._isImageToImageTask(f, P)) {
          var R;
          var C;
          var A;
          var B;
          var infiniteCanvasExtend;
          let N;
          const L =
            (N = f.abilityList) == null
              ? undefined
              : N.map((e) => e.blendModel);
          return this._submitImageToImageTask(
            n._(r._({}, f), {
              mode,
              metricsExtra,
              conversationId,
              workspaceId: M_value,
              infiniteCanvasExtend,
            }),
            L != null ? L : [],
            P,
          );
        }
        return this._submitTextToImageTask(
          n._(r._({}, f), {
            mode,
            metricsExtra,
            conversationId,
            workspaceId: M_value,
            infiniteCanvasExtend,
          }),
        );
      })
      .call(this);
  }
  _submitTextToImageTask(e) {
    return i
      ._(function* () {
        const t =
          yield this._contentGeneratorTaskFeatureContainerService.getInstance();
        if (
          this._imageGeneratorManager.isModelSupportPartialGenerate(e.model)
        ) {
          return t.createAIGCTextToImagePartialTask(
            n._(r._({}, e), {
              isRegenerate: false,
            }),
          );
        }
        return t.createAIGCTextToImageTask(
          n._(r._({}, e), {
            isRegenerate: false,
          }),
        );
      })
      .call(this);
  }
  _submitImageToImageTask(e, t, unifiedEditInput) {
    return i
      ._(function* () {
        const i = {
          prompt: e.prompt,
          model: e.model,
          abilityList: t,
          largeImageInfo: e.largeImageInfo,
          generateCount: e.generateCount,
          isRegenerate: false,
          metricsExtra: e.metricsExtra,
          mode: e.mode,
          isIntelligentAspectRatio: e.isIntelligentAspectRatio,
          quality: e.quality,
          background: e.background,
          stylize: e.stylize,
          conversationId: e.conversationId,
          unifiedEditInput,
          workspaceId: e.workspaceId,
          infiniteCanvasExtend: e.infiniteCanvasExtend,
        };
        const r =
          yield this._contentGeneratorTaskFeatureContainerService.getInstance();
        const n = this._imageGeneratorManager.isModelSupportPartialGenerate(
          e.model,
        );
        const o = this._preProcessBlendGenerateParams(i);
        if (n) {
          return r.createAIGCImageBlendPartialTask(o);
        }
        return r.createAIGCImageBlendTask(o);
      })
      .call(this);
  }
  _preProcessBlendGenerateParams(e) {
    if (
      this._imageGeneratorManager.metadata.isByteEditSupportMask ||
      !("abilityList" in e)
    ) {
      return e;
    }
    const t = e.abilityList.map((e) => {
      var t;
      if (
        e.abilityName !== E.DABlendAbilityName.ByteEdit ||
        ((t = e.extra) == null ? undefined : t.isCutout)
      ) {
        return e;
      }
      return n._(r._({}, e), {
        mask: undefined,
        extra: undefined,
      });
    });
    return n._(r._({}, e), {
      abilityList: t,
    });
  }
  _getUnifiedEditInput() {
    const { unifiedEditManager } = this._imageGeneratorManager;
    const {
      data: { references, promptContents },
    } = unifiedEditManager;
    if (!promptContents.every((e) => e.type === "text")) {
      const { unifiedEditInput } = tt.E(
        {
          references,
          promptContents,
        },
        {
          acceptedResourceTypes: ["image"],
        },
      );
      if (unifiedEditInput.metaList.length !== 0) {
        return unifiedEditInput;
      }
    }
  }
  _isImageToImageTask(e, t) {
    const { abilityList } = e;
    return (
      (!!abilityList && !!(abilityList.length > 0)) ||
      (!!t && !!(t.metaList.length > 0))
    );
  }
  constructor(e, t, a, r) {
    var n;
    super();
    n = this;
    this._imageGeneratorManager = e;
    this._contentGeneratorTaskFeatureContainerService = t;
    this._notificationService = a;
    this._workspaceService = r;
    this._isSubmitting = false;
    this.submit = (e) =>
      i._(function* () {
        if (n._isSubmitting) {
          return d.xz(-1, "submission is already in progress");
        }
        n._isSubmitting = true;
        let t = false;
        const { environment } = e;
        const { submitExternally, variant } = environment;
        try {
          if (submitExternally) {
            return d.xz(
              -1,
              "submission in canvas assets should not be handled internally",
              {
                submitExternally: true,
              },
            );
          }
          if (
            variant === "default" &&
            n._imageGeneratorManager.metadata.disableChooseHighWidth &&
            !n._imageGeneratorManager.data.supportCustomResolution
          ) {
            n._imageGeneratorManager.normalizeDimensionByCurrentModel();
          }
          const {
            data: { validationResult },
          } = n._imageGeneratorManager;
          if (!validationResult.ok) {
            n._notificationService.warning(validationResult.msg);
            return validationResult;
          }
          n._imageGeneratorManager.setSubmitButtonLoading(true);
          t = true;
          const s = yield n._submit(e);
          if (s.ok) {
            n._imageGeneratorManager.reportManager.resetResourceReportParams();
          }
          if (s.ok) {
            return d.TZ([s.value]);
          }
          return s;
        } finally {
          if (t) {
            n._imageGeneratorManager.setSubmitButtonLoading(false);
          }
          n._isSubmitting = false;
        }
      })();
  }
}
ta = o.Cg(
  [
    o.Qj(1, e7.L),
    o.Qj(2, c.Ot),
    o.Qj(3, te.D),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ImageGeneratorManager === "undefined"
        ? Object
        : ImageGeneratorManager,
      e7.L === undefined ? Object : e7.L,
      c.Ot === undefined ? Object : c.Ot,
      te.D === undefined ? Object : te.D,
    ]),
  ],
  ta,
);
const ti = require("htj");
const tr = require("Nyo");
class tn extends tr.Z {
  _createTextContent(e) {
    return {
      type: "text",
      text: e,
    };
  }
  constructor(e) {
    super();
    this._imageGeneratorManager = e;
    this.transformPromptContentToNodes = (e) => {
      if (e.type === "subject") {
        return [
          {
            type: ti.t.SubjectMentionTag,
            attrs: {
              id: e.id,
              subject: e.subject,
              loading: e.loading,
            },
          },
        ];
      }
      if (e.type === "image" || e.type === "video" || e.type === "audio") {
        return [
          {
            type: ti.t.ReferenceMentionTag,
            attrs: {
              id: e.id,
            },
          },
        ];
      }
      return super.transformPromptContentToNodes(e);
    };
    this.transformNodeToPromptContents = (e) => {
      if (e.type === ti.t.SubjectMentionTag) {
        var { subject, loading } = e.attrs;
        if (subject && v.uZ(subject) === v.yC.Image) {
          return [
            {
              type: "subject",
              id: y.K(subject),
              subject,
              loading: loading === true,
            },
          ];
        }
        return [];
      }
      if (e.type === ti.t.ReferenceMentionTag) {
        var { unifiedEditManager } = this._imageGeneratorManager;
        var { referenceResources } = unifiedEditManager;
        var { id } = e.attrs;
        var o = referenceResources.find((e) => e.id === id);
        if (typeof id === "string" && o) {
          return [
            {
              type: o.type,
              id,
            },
          ];
        }
        return [];
      }
      return super.transformNodeToPromptContents(e);
    };
  }
}
class to {
  get references() {
    return this._getReferences();
  }
  set references(e) {
    this._setReferences(e);
  }
  get promptContents() {
    return this._getPromptContents();
  }
  set promptContents(e) {
    this._setPromptContents(e);
  }
  setData(e) {
    this.references = e.references;
    this.promptContents = e.promptContents;
  }
  setReferences(e) {
    this.references = e;
  }
  addResources(e) {
    this.references = [...this.references, ...e];
  }
  setResource(e, t) {
    const a = [...this.references];
    a[t] = e;
    this.references = a;
  }
  removeResource(e) {
    this.references = this.references.filter((t) => t.id !== e);
  }
  reorderResources(e, t) {
    if (e !== t) {
      const a = [...this.references];
      const [i] = a.splice(e, 1);
      a.splice(t, 0, i);
      this.references = a;
    }
  }
  setPromptContents(e) {
    this.promptContents = e;
  }
  resetReferences() {
    this.references = [];
  }
  resetPromptContents() {
    this.promptContents = [];
  }
  constructor(e) {
    this._getReferences = e.getReferences;
    this._setReferences = e.setReferences;
    this._getPromptContents = e.getPromptContents;
    this._setPromptContents = e.setPromptContents;
    k.l_(this);
  }
}
class ts extends l.jG {
  get data() {
    return this._dataStore;
  }
  get editorDocument() {
    return this.promptEditorManager.transformPromptContentsToEditorDocument(
      this._dataStore.promptContents,
    );
  }
  get referenceResources() {
    return this._dataStore.references;
  }
  get referenceResourceOptions() {
    const { referenceIdToLabel } = this._imageGeneratorManager;
    return this.referenceResources.map((resource) => ({
      value: resource.id,
      label: referenceIdToLabel[resource.id],
      extra: {
        resource,
      },
    }));
  }
  get isModelSupportSubject() {
    return this._metadataStore.isModelSupportSubject;
  }
  validateSubjectAddition(e) {
    const t = y.K(e);
    if (
      this.data.promptContents.some(
        (e) => e.type === "subject" && e.id === t,
      ) ||
      v.uZ(e) !== v.yC.Image
    ) {
      return d.nj();
    }
    const { referenceImageCount, referenceSlotState } = this._metadataStore;
    return eu.Dd({
      blendImageCount: referenceImageCount,
      promptSubjectCount: this._metadataStore.promptSubjectCount + 1,
      maxReferenceCount: referenceSlotState.maxReferenceCount,
    });
  }
  reset(e) {
    let t;
    this._dataStore.setReferences(
      (t = e == null ? undefined : e.references) != null ? t : [],
    );
    if (e == null ? undefined : e.prompt) {
      this._dataStore.setPromptContents([
        {
          type: "text",
          text: e.prompt,
        },
      ]);
    } else {
      this._dataStore.resetPromptContents();
    }
  }
  constructor(e, t, a, i) {
    super();
    this._imageGeneratorManager = e;
    this._metadataStore = t;
    this._referenceAccessor = a;
    this._containerService = i;
    this.promptEditorManager = this._register(
      this._containerService.createInstance(tn, this._imageGeneratorManager),
    );
    this._dataStore = new to(this._referenceAccessor);
    this.restoreData = (e) => {
      this._dataStore.setData({
        references: e.references.map((e) =>
          this._containerService.createInstance(eR.Vl, e.resource),
        ),
        promptContents: e.promptContents,
      });
    };
    this.getData = () => ({
      feature: "unifiedEdit",
      references: this._dataStore.references.map((e) => ({
        type: e.type,
        resource: e.toJSON(),
      })),
      promptContents: this._dataStore.promptContents,
    });
    this.setData = (e) => {
      this._dataStore.setData(e);
      this.referenceResources.forEach((e) => {
        e.resolveUri();
        e.resolveMetadata();
      });
    };
    this.insertAbilitiesAsMentions = (e) => {
      if (e.length !== 0) {
        var { visibleContentGeneratorInstance } =
          this._imageGeneratorManager.contentGeneratorManager;
        var a =
          visibleContentGeneratorInstance == null
            ? undefined
            : visibleContentGeneratorInstance.elements.promptEditorRef;
        if (a == null ? undefined : a.current) {
          a.current.commands.insertContent(
            e.map((e) => ({
              type: ti.t.ReferenceMentionTag,
              attrs: {
                id: e.id,
              },
            })),
          );
          a.current.commands.focus();
        }
      }
    };
    this.setPromptContents = (e) => {
      this._dataStore.setPromptContents(e);
    };
    this.setReferences = (e) => {
      this._dataStore.setReferences(e);
      this.referenceResources.forEach((e) => {
        e.resolveUri();
        e.resolveMetadata();
      });
    };
    this.removeResourceById = (e) => {
      this._dataStore.removeResource(e);
    };
    this.removeReferenceFromPromptContent = (e) => {
      var t = new Set(Array.isArray(e) ? e : [e]);
      var a = this.data.promptContents.filter(
        (e) => e.type === "text" || !t.has(e.id),
      );
      this.setPromptContents(a);
    };
    this.replaceSubjectInPromptContent = (e, t) => {
      var a = y.K(t);
      var i = this.data.promptContents.map((i) => {
        if (i.type === "subject" && i.id === e) {
          return n._(r._({}, i), {
            id: a,
            subject: t,
          });
        }
        return i;
      });
      this.setPromptContents(i);
    };
    this.reorderResources = (e, t) => {
      this._dataStore.reorderResources(e, t);
    };
    this.downgradePromptContentToText = () => {
      var e = new Map(
        this.referenceResourceOptions.map((e) => [e.value, e.label]),
      );
      return this.data.promptContents
        .map((t) => {
          if (t.type === "text") {
            return t;
          }
          if (t.type === "subject") {
            return {
              type: "text",
              text: t.subject.content.name,
            };
          }
          var a = e.get(t.id);
          if (a) {
            return {
              type: "text",
              text: a,
            };
          }
        })
        .filter((e) => e !== undefined);
    };
    this.changeEditorDocument = (e) => {
      var t =
        this.promptEditorManager.transformEditorDocumentToPromptContents(e);
      this.setPromptContents(t);
    };
  }
}
ts = o.Cg(
  [
    o.Qj(3, m._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ImageGeneratorManager === "undefined"
        ? Object
        : ImageGeneratorManager,
      typeof ImageGeneratorMetadataStore === "undefined"
        ? Object
        : ImageGeneratorMetadataStore,
      typeof ImageGeneratorUnifiedEditReferencesAccessor === "undefined"
        ? Object
        : ImageGeneratorUnifiedEditReferencesAccessor,
      m._ === undefined ? Object : m._,
    ]),
  ],
  ts,
);
class tl extends l.jG {
  get metadata() {
    return this._metadataStore;
  }
  get data() {
    return this._dataStore;
  }
  get agentInfoProvider() {
    return this._agentInfoProvider;
  }
  get infiniteCanvasExtendParams() {
    return this._infiniteCanvasExtendParams;
  }
  get referenceIdToLabel() {
    return this._dataStore.referenceIdToLabel;
  }
  setAgentInfoProvider(e) {
    this._agentInfoProvider = e;
  }
  setInlinePromptLengthFeedbackEnabled(e) {
    this._dataStore.setInlinePromptLengthFeedbackEnabled(e);
  }
  setInfiniteCanvasExtendParams(e) {
    this._infiniteCanvasExtendParams = e;
  }
  setSubmitButtonLoading(e) {
    this._metadataStore.setSubmitButtonLoading(e);
  }
  syncModelConfig(e) {
    let t;
    const { data, loading } = e;
    if (!loading && (data == null ? undefined : data.ok)) {
      const {
        value: { modelList, firstSelectedModel, mobileAvailableModelKeys },
      } = data;
      this._dataStore.setMobileAvailableModelKeys(
        mobileAvailableModelKeys || [],
      );
      this._metadataStore.setImageModelList(modelList);
      if (
        (t =
          g.Fr &&
          (mobileAvailableModelKeys == null
            ? undefined
            : mobileAvailableModelKeys.length)
            ? modelList.find((e) => e.key === mobileAvailableModelKeys[0])
            : modelList.find((e) => e.key === firstSelectedModel.workbench))
      ) {
        this._metadataStore.setDefaultImageModel(t);
        const s = this._dataStore.currentSelectedImageModel;
        if (s) {
          const l = modelList.find((e) => e.key === s.key);
          if (l) {
            this._dataStore.setSelectedImageModel(l);
          } else {
            this._dataStore.setSelectedImageModel(t);
          }
        } else {
          this._dataStore.setSelectedImageModel(t);
          if (J([f.Si.SmartScale], t)) {
            this.updateAspectRatio();
            this.updateRatioLockState(false);
          }
        }
        this.auditPromptSubjects();
      }
    }
  }
  _warnPromptValidationError(e) {
    if (!(e.ok || e.msg === this._dataStore.promptLengthErrorMessage)) {
      this._notificationService.warning(e.msg);
    }
  }
  updateLargeImageInfoByRatio(e) {
    if (!e) {
      return void this._dataStore.adjustIntelligentRatioByCurrentSelectedModel();
    }
    let t;
    const a = this._dataStore.aspectRatioSizeMap.get(e);
    if (a) {
      return void this.updateLargeImageInfo(a);
    }
    const i = C.z(e) ? u.i(e) : undefined;
    if (!i) {
      return void this._dataStore.adjustResolutionAndSizeByCurrentSelectedModel();
    }
    const r =
      (t = this._dataStore.aspectRatioImageSizeMap[i]) != null ? t : h.Pn[i];
    this.updateLargeImageInfo(r);
  }
  _syncUnifiedEditReferencesFromAbilityList(e) {
    this._isSyncingAbilityReferences = true;
    this.unifiedEditManager.setReferences(this._dataStore.references);
    this._isSyncingAbilityReferences = false;
    if (!(e == null ? undefined : e.skipAudit)) {
      this.auditReferences();
    }
  }
  _importReferenceFilesFromLocal(e, t) {
    return i
      ._(function* () {
        let a;
        const { referenceUploadVisible, abilityList } = this._dataStore;
        const {
          isModelSupportRefuseImage,
          isModelSupportByteEdit,
          referenceImageCount,
          referenceSlotState,
        } = this._metadataStore;
        if (
          referenceSlotState.atLimit &&
          (t === "drag" || referenceImageCount === 0)
        ) {
          return void this._notificationService.warning(
            s.Ay.t(
              "subject_panel_image_ref_limit_toast",
              {
                num: referenceSlotState.maxReferenceCount,
              },
              "最多使用 {num} 个参考图内容",
            ),
          );
        }
        if (t === "paste" && !referenceUploadVisible) {
          if (
            !(yield (a = this.requestPasteReplaceConfirmation) == null
              ? undefined
              : a.call(this))
          ) {
            return;
          }
          this.setAbilityListByBlendList([]);
          this.reportManager.reportPasteReplace();
        }
        let g = [];
        const c =
          e.length > 1 ||
          isModelSupportRefuseImage ||
          (abilityList.length === 0 && isModelSupportByteEdit);
        if (c) {
          g = yield this.blendManager.importMultipleBlendImagesFromLocal(e, {
            reportParams: {
              importMaterialParams: {
                actionType: t,
              },
            },
          });
        } else {
          const m = yield this.blendManager.importBlendImageFromLocal(e[0], {
            reportParams: {
              importMaterialParams: {
                actionType: t,
              },
            },
          });
          if (m) {
            g = [m];
          }
        }
        if (t === "paste") {
          if (c) {
            this.reportManager.reportPasteUpload(e);
          } else {
            this.reportManager.reportPasteUpload(e.slice(0, 1));
          }
        }
        if (this._metadataStore.isModelSupportSubject) {
          this.unifiedEditManager.insertAbilitiesAsMentions(g);
        }
      })
      .call(this);
  }
  _initCommercialFeatureListener() {
    return i
      ._(function* () {
        const e = yield this._commercialFeatureLoaderService.getInstance();
        this._register(
          e.commercialStrategyService.onIsInFreemiumStageChange((e) => {
            this._dataStore.setIsInFreemiumStage(e);
          }),
        );
      })
      .call(this);
  }
  _initSubjectChangeListeners() {
    this._subjectFeatureContainerService.getInstance().then((e) => {
      this.referenceMentionManager.initSubjectSearch(e.subjectSearchManager);
      this._register(
        e.onSubjectDeleted((e) => {
          this.unifiedEditManager.removeReferenceFromPromptContent(y.K(e));
        }),
      );
      this._register(
        e.onSubjectUpdated((e) => {
          var { oldSubject, newSubject } = e;
          var i = y.K(oldSubject);
          this.unifiedEditManager.replaceSubjectInPromptContent(i, newSubject);
        }),
      );
    });
  }
  constructor(e, t, a, o, l, g) {
    var c;
    var m;
    super();
    c = this;
    m = this;
    this.contentGeneratorManager = e;
    this._containerService = t;
    this._notificationService = a;
    this._commercialFeatureLoaderService = o;
    this._dreaminaConfigurationService = l;
    this._subjectFeatureContainerService = g;
    this._metadataStore = this._containerService.createInstance(e1, this);
    this._dataStore = new eJ(
      this._metadataStore,
      this._notificationService,
      this._containerService,
      this,
    );
    this.dataAdapter = this._register(
      this._containerService.createInstance(eh, this),
    );
    this.reportManager = this._register(
      this._containerService.createInstance(e8, this),
    );
    this.referenceAuditManager = this._register(
      this._containerService.createInstance(P.K),
    );
    this.unifiedEditManager = this._register(
      this._containerService.createInstance(ts, this, this._metadataStore, {
        getReferences: () => this.data.references,
        setReferences: (e) => {
          this._dataStore.setReferences(e);
          if (!this._isSyncingAbilityReferences) {
            this.auditReferences();
          }
        },
        getPromptContents: () => this.data.promptContents,
        setPromptContents: (e) => {
          this._dataStore.setPromptContents(e);
          this.auditPromptSubjects(e);
        },
      }),
    );
    this.taskSubmissionManager = this._register(
      this._containerService.createInstance(ta, this),
    );
    this.blendManager = this._register(
      this._containerService.createInstance($, this),
    );
    this.referenceMentionManager = this._register(
      this._containerService.createInstance(R.Z, {
        getResourceOptions: () =>
          this.unifiedEditManager.referenceResourceOptions,
        validateSubjectAddition: (e) =>
          this.unifiedEditManager.validateSubjectAddition(e),
        validateSubjectEligibility: (e) =>
          A.W(e, {
            acceptedContentTypes: new Set([v.yC.Image]),
          }),
        reportManager: this.reportManager,
      }),
    );
    this._agentInfoProvider = null;
    this._isSyncingAbilityReferences = false;
    this.insertSubject = (e, t) => {
      if (!this._metadataStore.isModelSupportSubject) {
        return d.xz(
          -1,
          s.Ay.t(
            "subject_type_not_supported_in_mode",
            {},
            "当前模式不支持该类型主体",
          ),
        );
      }
      var a;
      var i;
      var r = y.K(e);
      var n = this.referenceMentionManager.validateSubjectEligibility(e);
      if (!n.ok) {
        return n;
      }
      var o =
        (i = this.contentGeneratorManager.visibleContentGeneratorInstance) ==
          null || (a = i.elements.promptEditorRef) == null
          ? undefined
          : a.current;
      if (!o) {
        return d.xz(-1, "");
      }
      var l = this.unifiedEditManager.validateSubjectAddition(e);
      if (!l.ok) {
        return l;
      }
      o.commands.insertContent(
        this.unifiedEditManager.promptEditorManager.transformPromptContentToNodes(
          {
            type: "subject",
            id: r,
            subject: e,
          },
        ),
      );
      o.commands.focus();
      var { entry } = t != null ? t : {};
      if (entry) {
        this.reportManager.reportAddSubject(entry, e.subjectId);
      }
      return d.nj();
    };
    this.getAllData = () => {
      var { params } = this._dataStore;
      return n._(r._({}, this.data.params), {
        references: params.references,
        unifiedEditData: {
          references: this.unifiedEditManager.data.references,
          promptContents: this.unifiedEditManager.data.promptContents,
        },
      });
    };
    this.changeDimension = (e, t) => {
      var a =
        e !== this._dataStore.largeImageInfo.width ||
        t !== this._dataStore.largeImageInfo.height;
      var i = this._dataStore.supportCustomResolution
        ? this._dataStore.resolveCustomResolutionType(e, t)
        : this._dataStore.largeImageInfo.resolutionType;
      if (!this._dataStore.supportCustomResolution || i) {
        this.updateLargeImageInfo({
          width: e,
          height: t,
          resolutionType: i,
        });
        if (!this._dataStore.isLockRatio && e > 0 && t > 0) {
          var r = "".concat(e, ":").concat(t);
          this._dataStore.setAspectRatio(r);
        }
        if (a) {
          this._dataStore.setCustomResolutionSelected(true);
        }
      }
    };
    this.changeAspectRatio = (e) => {
      var { defaultResolutionType, isCustomResolutionSelected } =
        this._dataStore;
      var i = e === undefined && isCustomResolutionSelected;
      this.updateAspectRatio(e);
      if (e) {
        this.updateRatioLockState(true);
      } else {
        this.updateRatioLockState(false);
      }
      if (i) {
        this.updateResolution(defaultResolutionType);
      }
      this._dataStore.setCustomResolutionSelected(false);
      this.reportManager.reportSwitchAspectRatio();
    };
    this.changeAspectRatioMaintain = (e) => {
      var { largeImageInfo } = this._dataStore;
      this.updateRatioLockState(e);
      if (e) {
        var a = largeImageInfo.width / largeImageInfo.height;
        var i = p.F(a);
        this._dataStore.setAspectRatio(
          C.z(i)
            ? i
            : ""
                .concat(largeImageInfo.width, ":")
                .concat(largeImageInfo.height),
        );
      } else {
        this._dataStore.setAspectRatio(
          "".concat(largeImageInfo.width, ":").concat(largeImageInfo.height),
        );
      }
      this._dataStore.saveCurrentModelDimensionHistory();
    };
    this.changeResolution = (e) => {
      var { currentSelectedImageModel } = this._dataStore;
      if (currentSelectedImageModel) {
        this._dataStore.updateModelResolutionCache(
          currentSelectedImageModel.key,
          e,
        );
      }
      this.updateResolution(e);
      this._dataStore.setCustomResolutionSelected(false);
      this.reportManager.reportSwitchDefinition();
    };
    this.switchModel = function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      const { generateImageModelList } = c._metadataStore;
      const i = generateImageModelList.find((t) => t.key === e);
      if (c._dataStore.setSelectedImageModel(i, t)) {
        c._notificationService.warning(
          s.Ay.t(
            "web_image_params_model_switch_partial_restored",
            {},
            "部分参数不受支持，已恢复此模型上次设置",
          ),
          {},
          {
            className: "image-generator-model-switch-warning-toast",
          },
        );
      }
      if (!c._metadataStore.isModelSupportSubject) {
        c.unifiedEditManager.setPromptContents(
          c.unifiedEditManager.downgradePromptContentToText(),
        );
      }
      if (d_1(c._dataStore.prompt) && !J([f.Si.Etta], i)) {
        c._notificationService.warning(
          s.Ay.t(
            "web_web_t2i_toast_model_not_support_draw_words",
            {},
            "该模型暂不支持文字效果增强",
          ),
        );
      }
      const { isPromptEmpty, promptValidationResult } = c._dataStore;
      if (!isPromptEmpty) {
        c._warnPromptValidationError(promptValidationResult);
      }
      c.reportManager.reportSwitchModel();
      c.auditReferences();
      c.auditPromptSubjects();
    };
    this.changePrompt = (e) => {
      this.setPrompt(e);
      var { isPromptEmpty, promptValidationResult } = this._dataStore;
      if (!isPromptEmpty) {
        this._warnPromptValidationError(promptValidationResult);
      }
      if (this.reportManager.promptSource === "template") {
        this.reportManager.updateResourceReportParams({
          promptSource: "template_edit",
        });
      }
    };
    this.setPrompt = (e) => {
      this.unifiedEditManager.setPromptContents([
        {
          type: "text",
          text: e,
        },
      ]);
    };
    this.updateLargeImageInfo = (e) => {
      this._dataStore.updateLargeImageInfo(e);
    };
    this.updateBlendModelGenerateSize = (e, t) => {
      this._dataStore.updateBlendModelGenerateSize(e, t);
    };
    this.adjustResolutionAndSizeByCurrentSelectedModel = () => {
      this._dataStore.adjustResolutionAndSizeByCurrentSelectedModel();
    };
    this.normalizeDimensionByCurrentModel = () => {
      this._dataStore.normalizeDimensionByCurrentModel();
      this._dataStore.setCustomResolutionSelected(false);
    };
    this.updateAspectRatio = (e) => {
      this._dataStore.setAspectRatio(e);
      this.updateLargeImageInfoByRatio(e);
    };
    this.updateRatioLockState = (e) => {
      this._dataStore.setLockRatio(e);
    };
    this.updateResolution = (e) => {
      var { largeImageInfo } = this._dataStore;
      var currentSelectedImageModel = this._dataStore.currentSelectedImageModel;
      var i = this._dataStore.aspectRatioOptions.some((e) => {
        var { value } = e;
        return value === this._dataStore.aspectRatio;
      });
      if (e !== largeImageInfo.resolutionType) {
        if (currentSelectedImageModel) {
          this._dataStore.updateModelResolutionCache(
            currentSelectedImageModel.key,
            e,
          );
        }
        this.updateLargeImageInfo({
          resolutionType: e,
        });
        var r = i
          ? G.ju(
              this._dataStore.aspectRatioOptions,
              this._dataStore.aspectRatio,
            )
          : this._dataStore.aspectRatio;
        if (r !== this._dataStore.aspectRatio) {
          this._dataStore.setAspectRatio(r);
          this._dataStore.setLockRatio(!!r);
        }
        if (!r) {
          var { maxPixelNum, minLength, maxLength } =
            this._dataStore.imageRangeConfig;
          var { width, height } = $_1(
            largeImageInfo.width,
            largeImageInfo.height,
            minLength,
            maxLength,
            maxPixelNum,
          );
          this.updateLargeImageInfo({
            width,
            height,
          });
          return;
        }
        this.updateLargeImageInfoByRatio(r);
      }
    };
    this.restoreDataByParams = (e) => {
      this.setPrompt(e.prompt);
      this._dataStore.setNegativePrompt(e.negativePrompt);
      this._dataStore.setGenerateType(e.generateType);
      this._dataStore.setModelByKey(e.model);
      this._dataStore.setAspectRatio(e.aspectRatio);
      this._dataStore.setLargeImageInfo(e.largeImageInfo);
      if (e.abilityList) {
        this._dataStore.setAbilityList(e.abilityList);
      }
      if (e.unifiedEditData) {
        this.unifiedEditManager.setData(e.unifiedEditData);
      } else {
        this.auditReferences();
      }
      this.auditPromptSubjects();
    };
    this.resetData = () => {
      this._dataStore.resetData();
      this.unifiedEditManager.reset();
      this.auditPromptSubjects();
    };
    this.setData = (e) => {
      this._dataStore.resetByGeneratorData(e);
      if (e.unifiedEditData) {
        var t = Array.isArray(e.unifiedEditData.references)
          ? e.unifiedEditData.references
          : [];
        this.unifiedEditManager.setData(
          n._(r._({}, e.unifiedEditData), {
            references: t.length ? t : this._dataStore.references,
          }),
        );
      } else {
        var { references } = this._dataStore;
        this.unifiedEditManager.reset({
          prompt: e.prompt,
          references,
        });
      }
      this.auditPromptSubjects();
    };
    this.setAbilityListByBlendList = (e) => {
      var t = new Set(this._dataStore.references.map((e) => e.id));
      this._dataStore.setAbilityListByBlendList(e);
      var a = new Set(this._dataStore.references.map((e) => e.id));
      var i = [...t].filter((e) => !a.has(e));
      this.unifiedEditManager.removeReferenceFromPromptContent(i);
      this._syncUnifiedEditReferencesFromAbilityList();
    };
    this.setModelByKey = (e) => {
      this._dataStore.setModelByKey(e);
    };
    this.setAbilityList = (e, t) => {
      var a = new Set(this._dataStore.references.map((e) => e.id));
      this._dataStore.setAbilityList(e);
      var i = new Set(this._dataStore.references.map((e) => e.id));
      var r = [...a].filter((e) => !i.has(e));
      this.unifiedEditManager.removeReferenceFromPromptContent(r);
      this._syncUnifiedEditReferencesFromAbilityList(t);
    };
    this.removeAbilityById = (e) => {
      this._dataStore.removeAbilityById(e);
      this.unifiedEditManager.removeReferenceFromPromptContent(e);
      this._syncUnifiedEditReferencesFromAbilityList();
    };
    this.setGenerateCount = (e) => {
      this._dataStore.setGenerateCount(e);
    };
    this.changeGenerateCount = (e) => {
      var t;
      this._dataStore.setGenerateCount(e);
      this.reportManager.reportSwitchGenerateCount(
        (t = this._dataStore.effectiveGenerateCount) != null ? t : e,
      );
    };
    this.changeImageQuality = (e) => {
      this._dataStore.setImageQuality(e);
    };
    this.changeImageBackgroundMode = (e) => {
      this._dataStore.setImageBackgroundMode(e);
    };
    this.changeImageStylization = (e) => {
      this._dataStore.setImageStylization(e);
    };
    this.changeCustomResolutionSelected = (e) => {
      this._dataStore.setCustomResolutionSelected(e);
    };
    this.setIsForceSingleGeneration = (e) => {
      this._dataStore.setIsForceSingleGeneration(e);
    };
    this.insertQuotesToInput = (e, t) => {
      var a = e == null ? undefined : e.current;
      var i = t == null ? undefined : t.current;
      if (a || i) {
        var r = [f.Si.Etta];
        if (!J(r, this._dataStore.currentSelectedImageModel)) {
          var n = this._metadataStore.generateImageModelList.find((e) =>
            J(r, e),
          );
          this._dataStore.setSelectedImageModel(n);
        }
        var o = s.Ay.t(N.K, {}, '"');
        var l = s.Ay.t(N.v, {}, '"');
        if (i) {
          var { from, to } = i.state.selection;
          var c = i.state.doc.textBetween(from, to);
          i.chain()
            .focus()
            .insertContentAt(
              {
                from,
                to,
              },
              o + c + l,
            )
            .setTextSelection(from + o.length + c.length)
            .run();
        } else if (a) {
          var { prompt } = this.data;
          var { selectionStart, selectionEnd, scrollTop } = a;
          var _ = ""
            .concat(prompt.slice(0, selectionStart))
            .concat(o)
            .concat(prompt.slice(selectionStart, selectionEnd))
            .concat(l)
            .concat(prompt.slice(selectionEnd));
          this.changePrompt(_);
          requestAnimationFrame(() => {
            a.focus();
            a.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
            a.scrollTop = scrollTop;
          });
        }
        this.reportManager.reportClickQuotation();
      }
    };
    this.dropAsReferences = (e) => {
      var t;
      var a;
      var { dataTransfer } = e;
      if (!dataTransfer) {
        return;
      }
      var { acceptedImageFileTypes } = this._metadataStore;
      var { acceptedFiles } = _.g(
        this._containerService,
        B.o(dataTransfer),
        acceptedImageFileTypes,
      );
      if (acceptedFiles.length !== 0) {
        var { visibleContentGeneratorInstance } = this.contentGeneratorManager;
        if (visibleContentGeneratorInstance) {
          var { promptEditorRef } = visibleContentGeneratorInstance.elements;
          var l =
            promptEditorRef == null || (t = promptEditorRef.current) == null
              ? undefined
              : t.view.posAtCoords({
                  left: e.clientX,
                  top: e.clientY,
                });
          if (l == null ? undefined : l.pos) {
            if (
              !(
                promptEditorRef == null || (a = promptEditorRef.current) == null
              )
            ) {
              a.commands.setTextSelection(l.pos);
            }
            e.preventDefault();
            this._importReferenceFilesFromLocal(acceptedFiles, "drag");
          }
        }
      }
    };
    this.pasteAsReferences = (e) =>
      i._(function* () {
        const { acceptedImageFileTypes } = m._metadataStore;
        if (e.clipboardData) {
          const { acceptedFiles } = _.g(
            m._containerService,
            B.o(e.clipboardData),
            acceptedImageFileTypes,
          );
          if (acceptedFiles.length !== 0) {
            e.preventDefault();
            yield m._importReferenceFilesFromLocal(acceptedFiles, "paste");
          }
        }
      })();
    this.auditReferences = () => {
      var e;
      return this.referenceAuditManager.auditResources(
        this._dataStore.references,
        {
          scene: M.EZ.ImageGenerate,
          modelKey:
            (e = this._dataStore.currentSelectedImageModel) == null
              ? undefined
              : e.key,
        },
      );
    };
    this.auditPromptSubjects = function () {
      let e;
      const t =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : c._dataStore.promptContents;
      return c.referenceAuditManager.auditSubjects(w.X(t), {
        scene: M.EZ.ImageGenerate,
        modelKey:
          (e = c._dataStore.currentSelectedImageModel) == null
            ? undefined
            : e.key,
      });
    };
    this.isModelSupportPartialGenerate = (e) => {
      var { modelList } = this.metadata;
      var a = modelList.find((t) => t.key === e);
      return !!a && a.feats.includes(f.Si.ThinkThenDraw);
    };
    this._metadataStore.setDataStore(this._dataStore);
    this._initCommercialFeatureListener();
    this._initSubjectChangeListeners();
  }
}
export { tl as O };
tl = o.Cg(
  [
    o.Qj(1, m._),
    o.Qj(2, c.Ot),
    o.Qj(3, I.jV),
    o.Qj(4, S.a),
    o.Qj(5, b.I),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ContentGeneratorManager === "undefined"
        ? Object
        : ContentGeneratorManager,
      m._ === undefined ? Object : m._,
      c.Ot === undefined ? Object : c.Ot,
      I.jV === undefined ? Object : I.jV,
      S.a === undefined ? Object : S.a,
      b.I === undefined ? Object : b.I,
    ]),
  ],
  tl,
);
