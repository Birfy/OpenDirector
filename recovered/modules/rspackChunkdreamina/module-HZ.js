import d from "VQv";
import l from "oN";
import p from "vi";
import u from "ox";
import c from "uR";
import m from "Ut";
import { FeaturesMinVersion } from "./module-ew.js";
import { MinFeatures } from "./module-xh.js";
import f from "./module-Rd.js";
let o;
let r;
export var DABlendAbilityName;
export var DAImageStyleStyleType;
const s =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
export class DAImageBlendAbility extends c.DANode {
  constructor() {
    super(...arguments);
    this.coreParam = undefined;
    this.abilityList = undefined;
    this.imageSize = undefined;
    this.historyOption = undefined;
    this.promptPlaceholderInfoList = undefined;
    this.posteditParam = undefined;
    this.unifiedEditInput = undefined;
  }
  calculateMinVersion() {
    let e;
    let t;
    if (this.abilityList != undefined) {
      if (
        this.abilityList.filter((e) => e.name === DABlendAbilityName.FaceGan)
          .length > 1
      ) {
        this.minVersion = FeaturesMinVersion.ImageBlendTwoFace;
      }
      let i =
        ((t = (e = this.coreParam) == null ? undefined : e.model) == null
          ? undefined
          : t.indexOf("high_aes_general_v30")) != -1;
      if (i) {
        this.minVersion = FeaturesMinVersion.ImageBlendModel30;
      }
      if (
        this.abilityList.filter(
          (e) =>
            e.name === DABlendAbilityName.IpKeep &&
            e.mixIpKeepByteEdit === true,
        ).length > 0
      ) {
        this.minVersion = FeaturesMinVersion.ImageBlendMixIpKeepByteEdit;
      }
      let o = this.abilityList.filter(
        (e) => e.name === DABlendAbilityName.ByteEdit,
      );
      if (o.length > 0 == true && i === true) {
        this.minVersion = FeaturesMinVersion.ImageModel30ByteEdit;
      }
      if (o.length > 1) {
        this.minVersion = FeaturesMinVersion.ImageBlendByteEditWithMask;
      }
      if (this.abilityList.filter((e) => e.byteEdit != undefined).length > 0) {
        this.minVersion = FeaturesMinVersion.ImageBlendByteEditWithMask;
      }
    }
    if (this.unifiedEditInput != undefined) {
      this.minVersion = FeaturesMinVersion.ImageBlendUnifiedEdit;
      if (this.unifiedEditInput.hasSubjectMaterial()) {
        this.minVersion = FeaturesMinVersion.UnifiedEditSubject;
      }
      if (this.unifiedEditInput.hasSubjectWithVideoOrAudio()) {
        this.minVersion = FeaturesMinVersion.UnifiedEditSubject_v2;
      }
    }
    return super.calculateMinVersion();
  }
  calculateMinFeatures() {
    let e = [];
    if (this.abilityList != undefined) {
      if (
        this.abilityList.filter((e) => e.name === DABlendAbilityName.FaceGan)
          .length > 1
      ) {
        e.push(MinFeatures.AIGC_BlendAbility_twoFace);
      }
      if (
        this.abilityList.filter((e) => e.name === DABlendAbilityName.StyleCode)
          .length > 0
      ) {
        e.push(MinFeatures.AIGC_BlendAbility_styleCode);
      }
      if (
        this.abilityList.filter(
          (e) => e.name === DABlendAbilityName.StyleReference,
        ).length > 1
      ) {
        e.push(MinFeatures.AIGC_BlendAbility_multiStyleReference);
      }
      if (
        this.abilityList.filter(
          (e) =>
            e.name === DABlendAbilityName.IpKeep &&
            e.mixIpKeepByteEdit === true,
        ).length > 0
      ) {
        e.push(MinFeatures.AIGC_BlendAbility_mixIpKeepByteEdit);
      }
    }
    if (this.unifiedEditInput != undefined) {
      e.push(MinFeatures.AIGC_Image_BlendUnifiedEdit);
      if (this.unifiedEditInput.hasSubjectMaterial()) {
        e.push(MinFeatures.AIGC_UnifiedEditSubject);
      }
      if (this.unifiedEditInput.hasSubjectWithVideoOrAudio()) {
        e.push(MinFeatures.AIGC_UnifiedEditSubject_v2);
      }
    }
    this.minFeatures = e;
    return super.calculateMinFeatures();
  }
  childNodes() {
    let e = [];
    let coreParam = this.coreParam;
    if (coreParam != undefined) {
      e.push(coreParam);
    }
    let abilityList = this.abilityList;
    if (abilityList != undefined) {
      abilityList.forEach((t) => {
        e.push(t);
      });
    }
    let historyOption = this.historyOption;
    if (historyOption != undefined) {
      e.push(historyOption);
    }
    let promptPlaceholderInfoList = this.promptPlaceholderInfoList;
    if (promptPlaceholderInfoList != undefined) {
      promptPlaceholderInfoList.forEach((t) => {
        e.push(t);
      });
    }
    let posteditParam = this.posteditParam;
    if (posteditParam != undefined) {
      e.push(posteditParam);
    }
    let unifiedEditInput = this.unifiedEditInput;
    if (unifiedEditInput != undefined) {
      e.push(unifiedEditInput);
    }
    return e;
  }
}
s(
  [f.serializable("core_param", () => l.DAGenCoreParam)],
  DAImageBlendAbility.prototype,
  "coreParam",
  undefined,
);
s(
  [f.serializable("ability_list", () => DAImageBlendAbilityItem)],
  DAImageBlendAbility.prototype,
  "abilityList",
  undefined,
);
s(
  [f.serializable("image_size")],
  DAImageBlendAbility.prototype,
  "imageSize",
  undefined,
);
s(
  [f.serializable("history_option", () => p.DAHistoryOption)],
  DAImageBlendAbility.prototype,
  "historyOption",
  undefined,
);
s(
  [
    f.serializable(
      "prompt_placeholder_info_list",
      () => DABlendPromptPlaceHolderInfo,
    ),
  ],
  DAImageBlendAbility.prototype,
  "promptPlaceholderInfoList",
  undefined,
);
s(
  [f.serializable("postedit_param", () => m.DAPostEditParam)],
  DAImageBlendAbility.prototype,
  "posteditParam",
  undefined,
);
s(
  [f.serializable("unified_edit_input", () => u.DAUnifiedEditInput)],
  DAImageBlendAbility.prototype,
  "unifiedEditInput",
  undefined,
);
export class DABlendPromptPlaceHolderInfo extends c.DANode {
  constructor() {
    super(...arguments);
    this.abilityIndex = undefined;
  }
}
s(
  [f.serializable("ability_index")],
  DABlendPromptPlaceHolderInfo.prototype,
  "abilityIndex",
  undefined,
);
export class DAImageBlendAbilityItem extends c.DANode {
  constructor() {
    super(...arguments);
    this.name = undefined;
    this.imageUriList = undefined;
    this.imageList = undefined;
    this.faceRecognizeList = undefined;
    this.imageWeightList = undefined;
    this.controlNetList = undefined;
    this.extra = undefined;
    this.strength = undefined;
    this.maskIndex = undefined;
    this.ipKeepList = undefined;
    this.styleReference = undefined;
    this.commonAsset = undefined;
    this.mixIpKeepByteEdit = undefined;
    this.byteEdit = undefined;
  }
  childNodes() {
    let e = [];
    let imageList = this.imageList;
    if (imageList != undefined) {
      imageList.forEach((t) => {
        e.push(t);
      });
    }
    let faceRecognizeList = this.faceRecognizeList;
    if (faceRecognizeList != undefined) {
      faceRecognizeList.forEach((t) => {
        t.forEach((t) => {
          e.push(t);
        });
      });
    }
    let controlNetList = this.controlNetList;
    if (controlNetList != undefined) {
      controlNetList.forEach((t) => {
        e.push(t);
      });
    }
    let ipKeepList = this.ipKeepList;
    if (ipKeepList != undefined) {
      ipKeepList.forEach((t) => {
        e.push(t);
      });
    }
    let styleReference = this.styleReference;
    if (styleReference != undefined) {
      e.push(styleReference);
    }
    let commonAsset = this.commonAsset;
    if (commonAsset != undefined) {
      e.push(commonAsset);
    }
    let byteEdit = this.byteEdit;
    if (byteEdit != undefined) {
      e.push(byteEdit);
    }
    return e;
  }
}
s(
  [f.serializable("name")],
  DAImageBlendAbilityItem.prototype,
  "name",
  undefined,
);
s(
  [f.serializable("image_uri_list")],
  DAImageBlendAbilityItem.prototype,
  "imageUriList",
  undefined,
);
s(
  [f.serializable("image_list", () => m.DAImageResource)],
  DAImageBlendAbilityItem.prototype,
  "imageList",
  undefined,
);
s(
  [f.serializable("face_recognize_list", () => DAImageFaceRecognize)],
  DAImageBlendAbilityItem.prototype,
  "faceRecognizeList",
  undefined,
);
s(
  [f.serializable("image_weight_list")],
  DAImageBlendAbilityItem.prototype,
  "imageWeightList",
  undefined,
);
s(
  [f.serializable("control_net_list", () => DAImageControlNet)],
  DAImageBlendAbilityItem.prototype,
  "controlNetList",
  undefined,
);
s(
  [f.serializable("extra")],
  DAImageBlendAbilityItem.prototype,
  "extra",
  undefined,
);
s(
  [f.serializable("strength")],
  DAImageBlendAbilityItem.prototype,
  "strength",
  undefined,
);
s(
  [f.serializable("mask_index")],
  DAImageBlendAbilityItem.prototype,
  "maskIndex",
  undefined,
);
s(
  [f.serializable("ip_keep_list", () => DAImageIpKeep)],
  DAImageBlendAbilityItem.prototype,
  "ipKeepList",
  undefined,
);
s(
  [f.serializable("style_reference", () => DAImageStyleReference)],
  DAImageBlendAbilityItem.prototype,
  "styleReference",
  undefined,
);
s(
  [f.serializable("common_asset", () => d.DACommonAssetResource)],
  DAImageBlendAbilityItem.prototype,
  "commonAsset",
  undefined,
);
s(
  [f.serializable("mix_ip_keep_byte_edit")],
  DAImageBlendAbilityItem.prototype,
  "mixIpKeepByteEdit",
  undefined,
);
s(
  [f.serializable("byte_edit", () => DAImageByteEdit)],
  DAImageBlendAbilityItem.prototype,
  "byteEdit",
  undefined,
);
o = DABlendAbilityName || (DABlendAbilityName = {});
o.Unknown = "unknown";
o.T2I = "text2image";
o.FaceGan = "face_gan";
o.BgPaint = "bg_paint";
o.I2I = "image2image";
o.ControlNet = "control_net";
o.IpKeep = "ip_keep";
o.StyleReference = "style_reference";
o.ByteEdit = "byte_edit";
o.StyleCode = "style_code";
export class DAImageIpKeep extends c.DANode {
  constructor() {
    super(...arguments);
    this.paramDescription = undefined;
    this.refIpWeight = undefined;
    this.refIdWeight = undefined;
    this.image = undefined;
    this.characterId = undefined;
    this.characterName = undefined;
  }
  childNodes() {
    let e = [];
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    return e;
  }
}
s(
  [f.serializable("description")],
  DAImageIpKeep.prototype,
  "paramDescription",
  undefined,
);
s(
  [f.serializable("ref_ip_weight")],
  DAImageIpKeep.prototype,
  "refIpWeight",
  undefined,
);
s(
  [f.serializable("ref_id_weight")],
  DAImageIpKeep.prototype,
  "refIdWeight",
  undefined,
);
s(
  [f.serializable("image", () => m.DAImageResource)],
  DAImageIpKeep.prototype,
  "image",
  undefined,
);
s(
  [f.serializable("character_id", undefined, "int64")],
  DAImageIpKeep.prototype,
  "characterId",
  undefined,
);
s(
  [f.serializable("character_name")],
  DAImageIpKeep.prototype,
  "characterName",
  undefined,
);
export class DAImageStyleReference extends c.DANode {
  constructor() {
    super(...arguments);
    this.styleWeight = undefined;
    this.image = undefined;
    this.styleItemId = undefined;
    this.styleTitle = undefined;
    this.styleTitleStarlingKey = undefined;
    this.styleType = undefined;
  }
  childNodes() {
    let e = [];
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    return e;
  }
}
s(
  [f.serializable("style_weight")],
  DAImageStyleReference.prototype,
  "styleWeight",
  undefined,
);
s(
  [f.serializable("image", () => m.DAImageResource)],
  DAImageStyleReference.prototype,
  "image",
  undefined,
);
s(
  [f.serializable("style_item_id")],
  DAImageStyleReference.prototype,
  "styleItemId",
  undefined,
);
s(
  [f.serializable("style_title")],
  DAImageStyleReference.prototype,
  "styleTitle",
  undefined,
);
s(
  [f.serializable("style_title_starling_key")],
  DAImageStyleReference.prototype,
  "styleTitleStarlingKey",
  undefined,
);
s(
  [f.serializable("style_type")],
  DAImageStyleReference.prototype,
  "styleType",
  undefined,
);
r = DAImageStyleStyleType || (DAImageStyleStyleType = {});
r[(r.Default = 109)] = "Default";
r[(r.Customize = 214)] = "Customize";
export class DAImageControlNet extends c.DANode {
  constructor() {
    super(...arguments);
    this.name = undefined;
    this.strength = undefined;
    this.canny = undefined;
    this.depth = undefined;
    this.pose = undefined;
    this.bgPaint = undefined;
    this.styleReference = undefined;
    this.imageIndex = undefined;
    this.maskIndex = undefined;
  }
  childNodes() {
    let e = [];
    let canny = this.canny;
    if (canny != undefined) {
      e.push(canny);
    }
    let depth = this.depth;
    if (depth != undefined) {
      e.push(depth);
    }
    let pose = this.pose;
    if (pose != undefined) {
      e.push(pose);
    }
    let bgPaint = this.bgPaint;
    if (bgPaint != undefined) {
      e.push(bgPaint);
    }
    let styleReference = this.styleReference;
    if (styleReference != undefined) {
      e.push(styleReference);
    }
    return e;
  }
}
s([f.serializable("name")], DAImageControlNet.prototype, "name", undefined);
s(
  [f.serializable("strength")],
  DAImageControlNet.prototype,
  "strength",
  undefined,
);
s(
  [f.serializable("canny", () => DAImageControlNetCanny)],
  DAImageControlNet.prototype,
  "canny",
  undefined,
);
s(
  [f.serializable("depth", () => DAImageControlNetDepth)],
  DAImageControlNet.prototype,
  "depth",
  undefined,
);
s(
  [f.serializable("pose", () => DAImageControlNetPose)],
  DAImageControlNet.prototype,
  "pose",
  undefined,
);
s(
  [f.serializable("bg_paint", () => DAImageControlNetBgPaint)],
  DAImageControlNet.prototype,
  "bgPaint",
  undefined,
);
s(
  [f.serializable("style_reference", () => DAImageControlStyleReference)],
  DAImageControlNet.prototype,
  "styleReference",
  undefined,
);
s(
  [f.serializable("image_index")],
  DAImageControlNet.prototype,
  "imageIndex",
  undefined,
);
s(
  [f.serializable("mask_index")],
  DAImageControlNet.prototype,
  "maskIndex",
  undefined,
);
export class DAImageControlNetCanny extends c.DANode {
  constructor() {
    super(...arguments);
    this.image = undefined;
    this.originImage = undefined;
    this.previewImage = undefined;
  }
  childNodes() {
    let e = [];
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    let originImage = this.originImage;
    if (originImage != undefined) {
      e.push(originImage);
    }
    let previewImage = this.previewImage;
    if (previewImage != undefined) {
      e.push(previewImage);
    }
    return e;
  }
}
s(
  [f.serializable("image", () => m.DAImageResource)],
  DAImageControlNetCanny.prototype,
  "image",
  undefined,
);
s(
  [f.serializable("origin_image", () => m.DAImageResource)],
  DAImageControlNetCanny.prototype,
  "originImage",
  undefined,
);
s(
  [f.serializable("preview_image", () => m.DAImageResource)],
  DAImageControlNetCanny.prototype,
  "previewImage",
  undefined,
);
export class DAImageControlNetDepth extends c.DANode {
  constructor() {
    super(...arguments);
    this.image = undefined;
    this.originImage = undefined;
    this.previewImage = undefined;
  }
  childNodes() {
    let e = [];
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    let originImage = this.originImage;
    if (originImage != undefined) {
      e.push(originImage);
    }
    let previewImage = this.previewImage;
    if (previewImage != undefined) {
      e.push(previewImage);
    }
    return e;
  }
}
s(
  [f.serializable("image", () => m.DAImageResource)],
  DAImageControlNetDepth.prototype,
  "image",
  undefined,
);
s(
  [f.serializable("origin_image", () => m.DAImageResource)],
  DAImageControlNetDepth.prototype,
  "originImage",
  undefined,
);
s(
  [f.serializable("preview_image", () => m.DAImageResource)],
  DAImageControlNetDepth.prototype,
  "previewImage",
  undefined,
);
export class DAImageControlNetPose extends c.DANode {
  constructor() {
    super(...arguments);
    this.image = undefined;
    this.originImage = undefined;
    this.previewImage = undefined;
  }
  childNodes() {
    let e = [];
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    let originImage = this.originImage;
    if (originImage != undefined) {
      e.push(originImage);
    }
    let previewImage = this.previewImage;
    if (previewImage != undefined) {
      e.push(previewImage);
    }
    return e;
  }
}
s(
  [f.serializable("image", () => m.DAImageResource)],
  DAImageControlNetPose.prototype,
  "image",
  undefined,
);
s(
  [f.serializable("origin_image", () => m.DAImageResource)],
  DAImageControlNetPose.prototype,
  "originImage",
  undefined,
);
s(
  [f.serializable("preview_image", () => m.DAImageResource)],
  DAImageControlNetPose.prototype,
  "previewImage",
  undefined,
);
export class DAImageControlNetBgPaint extends c.DANode {
  constructor() {
    super(...arguments);
    this.image = undefined;
    this.mask = undefined;
    this.originImage = undefined;
    this.originMask = undefined;
  }
  childNodes() {
    let e = [];
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    let mask = this.mask;
    if (mask != undefined) {
      e.push(mask);
    }
    let originImage = this.originImage;
    if (originImage != undefined) {
      e.push(originImage);
    }
    let originMask = this.originMask;
    if (originMask != undefined) {
      e.push(originMask);
    }
    return e;
  }
}
s(
  [f.serializable("image", () => m.DAImageResource)],
  DAImageControlNetBgPaint.prototype,
  "image",
  undefined,
);
s(
  [f.serializable("mask", () => m.DAImageResource)],
  DAImageControlNetBgPaint.prototype,
  "mask",
  undefined,
);
s(
  [f.serializable("origin_image", () => m.DAImageResource)],
  DAImageControlNetBgPaint.prototype,
  "originImage",
  undefined,
);
s(
  [f.serializable("origin_mask", () => m.DAImageResource)],
  DAImageControlNetBgPaint.prototype,
  "originMask",
  undefined,
);
export class DAImageControlStyleReference extends c.DANode {
  constructor() {
    super(...arguments);
    this.image = undefined;
  }
  childNodes() {
    let e = [];
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    return e;
  }
}
s(
  [f.serializable("image", () => m.DAImageResource)],
  DAImageControlStyleReference.prototype,
  "image",
  undefined,
);
export class DAImageFaceRecognize extends c.DANode {
  constructor() {
    super(...arguments);
    this.keypoint = undefined;
    this.faceRect = undefined;
    this.isSelected = undefined;
  }
}
s(
  [f.serializable("keypoint")],
  DAImageFaceRecognize.prototype,
  "keypoint",
  undefined,
);
s(
  [f.serializable("face_rect")],
  DAImageFaceRecognize.prototype,
  "faceRect",
  undefined,
);
s(
  [f.serializable("is_selected")],
  DAImageFaceRecognize.prototype,
  "isSelected",
  undefined,
);
export class DAImageByteEdit extends c.DANode {
  constructor() {
    super(...arguments);
    this.origin = undefined;
    this.mask = undefined;
  }
  childNodes() {
    let e = [];
    let origin = this.origin;
    if (origin != undefined) {
      e.push(origin);
    }
    let mask = this.mask;
    if (mask != undefined) {
      e.push(mask);
    }
    return e;
  }
}
s(
  [f.serializable("origin", () => m.DAImageResource)],
  DAImageByteEdit.prototype,
  "origin",
  undefined,
);
s(
  [f.serializable("mask", () => m.DAImageResource)],
  DAImageByteEdit.prototype,
  "mask",
  undefined,
);
