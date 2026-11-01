import p from "./module-Rd.js";
let o;
let r;
let a;
export var TMAIGCGenerateType;
export var TMImageRatioType;
export var TMAIGCStyleType;
const l =
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
o = TMAIGCGenerateType || (TMAIGCGenerateType = {});
o[(o.Undefined = 0)] = "Undefined";
o[(o.Text2Image = 1)] = "Text2Image";
o[(o.SuperResolution = 2)] = "SuperResolution";
o[(o.FineTunePromptWithText2Image = 3)] = "FineTunePromptWithText2Image";
o[(o.FineTunePromptWithSuperResolution = 4)] =
  "FineTunePromptWithSuperResolution";
o[(o.Text2CreativeTxet = 5)] = "Text2CreativeTxet";
o[(o.SpecialEffect = 6)] = "SpecialEffect";
o[(o.InPainting = 7)] = "InPainting";
o[(o.OutPainting = 8)] = "OutPainting";
o[(o.InPaintingRemove = 9)] = "InPaintingRemove";
o[(o.Text2Video = 10)] = "Text2Video";
o[(o.Blend = 12)] = "Blend";
o[(o.NormalHd = 13)] = "NormalHd";
o[(o.ImageCut = 14)] = "ImageCut";
o[(o.ImageFusion = 15)] = "ImageFusion";
o[(o.VideoBGM = 16)] = "VideoBGM";
o[(o.AudioVideoMix = 17)] = "AudioVideoMix";
o[(o.InstaDrag = 18)] = "InstaDrag";
o[(o.Image2Avatar = 20)] = "Image2Avatar";
o[(o.Video2Avatar = 21)] = "Video2Avatar";
o[(o.Text2Song = 22)] = "Text2Song";
o[(o.Text2Instrumental = 23)] = "Text2Instrumental";
o[(o.LipSync = 24)] = "LipSync";
o[(o.LipSyncImage = 25)] = "LipSyncImage";
o[(o.InPaintAndOutPaint = 26)] = "InPaintAndOutPaint";
o[(o.ByteEditPainting = 27)] = "ByteEditPainting";
r = TMImageRatioType || (TMImageRatioType = {});
r[(r.ImageRatioType_11 = 1)] = "ImageRatioType_11";
r[(r.ImageRatioType_34 = 2)] = "ImageRatioType_34";
r[(r.ImageRatioType_169 = 3)] = "ImageRatioType_169";
r[(r.ImageRatioType_43 = 4)] = "ImageRatioType_43";
r[(r.ImageRatioType_916 = 5)] = "ImageRatioType_916";
r[(r.ImageRatioType_23 = 6)] = "ImageRatioType_23";
r[(r.ImageRatioType_32 = 7)] = "ImageRatioType_32";
r[(r.ImageRatioType_219 = 8)] = "ImageRatioType_219";
export class TMAIGCEffectItem extends p.Serializable {
  constructor() {
    super(...arguments);
    this.image = undefined;
    this.common_attr = undefined;
  }
}
l(
  [p.serializable("image", () => TMAIGCEffectImage)],
  TMAIGCEffectItem.prototype,
  "image",
  undefined,
);
l(
  [p.serializable("common_attr", () => TMAIGCEffectCommonAttr)],
  TMAIGCEffectItem.prototype,
  "common_attr",
  undefined,
);
export class TMAIGCEffectImage extends p.Serializable {
  constructor() {
    super(...arguments);
    this.large_images = undefined;
  }
}
l(
  [p.serializable("large_images", () => TMAIGCImageInfo)],
  TMAIGCEffectImage.prototype,
  "large_images",
  undefined,
);
export class TMAIGCEffectCommonAttr extends p.Serializable {
  constructor() {
    super(...arguments);
    this.aspect_ratio = undefined;
  }
}
l(
  [p.serializable("aspect_ratio")],
  TMAIGCEffectCommonAttr.prototype,
  "aspect_ratio",
  undefined,
);
export class TMAIGCImageMetaData extends p.Serializable {
  constructor() {
    super(...arguments);
    this.generate_type = undefined;
    this.last_generate = undefined;
    this.first_generate_type = undefined;
    this.text2image_params = undefined;
    this.normal_hd_params = undefined;
    this.super_resolution_params = undefined;
    this.in_painting_params = undefined;
    this.in_painting_remove_params = undefined;
    this.out_painting_params = undefined;
    this.blend_params = undefined;
    this.byte_edit_params = undefined;
    this.aigc_mode = undefined;
  }
}
l(
  [p.serializable("generate_type")],
  TMAIGCImageMetaData.prototype,
  "generate_type",
  undefined,
);
l(
  [p.serializable("last_generate")],
  TMAIGCImageMetaData.prototype,
  "last_generate",
  undefined,
);
l(
  [p.serializable("first_generate_type")],
  TMAIGCImageMetaData.prototype,
  "first_generate_type",
  undefined,
);
l(
  [p.serializable("text2image_params", () => TMAIGCText2ImageParams)],
  TMAIGCImageMetaData.prototype,
  "text2image_params",
  undefined,
);
l(
  [p.serializable("normal_hd_params", () => TMAIGCNormalHdParams)],
  TMAIGCImageMetaData.prototype,
  "normal_hd_params",
  undefined,
);
l(
  [
    p.serializable(
      "super_resolution_params",
      () => TMAIGCSuperResolutionParams,
    ),
  ],
  TMAIGCImageMetaData.prototype,
  "super_resolution_params",
  undefined,
);
l(
  [p.serializable("in_painting_params", () => TMAIGCInPaintingParams)],
  TMAIGCImageMetaData.prototype,
  "in_painting_params",
  undefined,
);
l(
  [
    p.serializable(
      "in_painting_remove_params",
      () => TMAIGCInPaintingRemoveParams,
    ),
  ],
  TMAIGCImageMetaData.prototype,
  "in_painting_remove_params",
  undefined,
);
l(
  [p.serializable("out_painting_params", () => TMAIGCOutPaintingParams)],
  TMAIGCImageMetaData.prototype,
  "out_painting_params",
  undefined,
);
l(
  [p.serializable("blend_params", () => TMAIGCBlendParams)],
  TMAIGCImageMetaData.prototype,
  "blend_params",
  undefined,
);
l(
  [p.serializable("byte_edit_params", () => TMAIGCByteEditParams)],
  TMAIGCImageMetaData.prototype,
  "byte_edit_params",
  undefined,
);
l(
  [p.serializable("aigc_mode")],
  TMAIGCImageMetaData.prototype,
  "aigc_mode",
  undefined,
);
export class TMAIGCText2ImageParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.image_ratio = undefined;
    this.model_config = undefined;
    this.prompt = undefined;
    this.sample_steps = undefined;
    this.seed = undefined;
    this.user_negative_prompt = undefined;
    this.sample_strength = undefined;
    this.large_image_info = undefined;
  }
}
l(
  [p.serializable("image_ratio")],
  TMAIGCText2ImageParams.prototype,
  "image_ratio",
  undefined,
);
l(
  [p.serializable("model_config", () => TMModelConfig)],
  TMAIGCText2ImageParams.prototype,
  "model_config",
  undefined,
);
l(
  [p.serializable("prompt")],
  TMAIGCText2ImageParams.prototype,
  "prompt",
  undefined,
);
l(
  [p.serializable("sample_steps")],
  TMAIGCText2ImageParams.prototype,
  "sample_steps",
  undefined,
);
l(
  [p.serializable("seed")],
  TMAIGCText2ImageParams.prototype,
  "seed",
  undefined,
);
l(
  [p.serializable("user_negative_prompt")],
  TMAIGCText2ImageParams.prototype,
  "user_negative_prompt",
  undefined,
);
l(
  [p.serializable("sample_strength")],
  TMAIGCText2ImageParams.prototype,
  "sample_strength",
  undefined,
);
l(
  [p.serializable("large_image_info", () => TMAIGCReqImageInfo)],
  TMAIGCText2ImageParams.prototype,
  "large_image_info",
  undefined,
);
export class TMAIGCReqImageInfo extends p.Serializable {
  constructor() {
    super(...arguments);
    this.height = undefined;
    this.width = undefined;
    this.format = undefined;
    this.image_scene_list = undefined;
  }
}
l(
  [p.serializable("height")],
  TMAIGCReqImageInfo.prototype,
  "height",
  undefined,
);
l([p.serializable("width")], TMAIGCReqImageInfo.prototype, "width", undefined);
l(
  [p.serializable("format")],
  TMAIGCReqImageInfo.prototype,
  "format",
  undefined,
);
l(
  [p.serializable("image_scene_list", () => TMAIGCImageScene)],
  TMAIGCReqImageInfo.prototype,
  "image_scene_list",
  undefined,
);
export class TMAIGCImageScene extends p.Serializable {
  constructor() {
    super(...arguments);
    this.scene = undefined;
    this.height = undefined;
    this.width = undefined;
    this.format = undefined;
    this.uniq_key = undefined;
  }
}
l([p.serializable("scene")], TMAIGCImageScene.prototype, "scene", undefined);
l([p.serializable("height")], TMAIGCImageScene.prototype, "height", undefined);
l([p.serializable("width")], TMAIGCImageScene.prototype, "width", undefined);
l([p.serializable("format")], TMAIGCImageScene.prototype, "format", undefined);
l(
  [p.serializable("uniq_key")],
  TMAIGCImageScene.prototype,
  "uniq_key",
  undefined,
);
export class TMModelConfig extends p.Serializable {
  constructor() {
    super(...arguments);
    this.model_name = undefined;
    this.model_req_key = undefined;
  }
}
l(
  [p.serializable("model_name")],
  TMModelConfig.prototype,
  "model_name",
  undefined,
);
l(
  [p.serializable("model_req_key")],
  TMModelConfig.prototype,
  "model_req_key",
  undefined,
);
export class TMAIGCSuperResolutionParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.last_generate_type = undefined;
    this.origin_item_id = undefined;
    this.is_describe_prompt = undefined;
  }
}
l(
  [p.serializable("last_generate_type")],
  TMAIGCSuperResolutionParams.prototype,
  "last_generate_type",
  undefined,
);
l(
  [p.serializable("origin_item_id", undefined, "int64")],
  TMAIGCSuperResolutionParams.prototype,
  "origin_item_id",
  undefined,
);
l(
  [p.serializable("is_describe_prompt")],
  TMAIGCSuperResolutionParams.prototype,
  "is_describe_prompt",
  undefined,
);
export class TMAIGCInPaintingParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.mask_uri = undefined;
    this.origin_item_id = undefined;
    this.origin_prompt = undefined;
    this.mask_url = undefined;
  }
}
l(
  [p.serializable("mask_uri")],
  TMAIGCInPaintingParams.prototype,
  "mask_uri",
  undefined,
);
l(
  [p.serializable("origin_item_id", undefined, "int64")],
  TMAIGCInPaintingParams.prototype,
  "origin_item_id",
  undefined,
);
l(
  [p.serializable("origin_prompt")],
  TMAIGCInPaintingParams.prototype,
  "origin_prompt",
  undefined,
);
l(
  [p.serializable("mask_url")],
  TMAIGCInPaintingParams.prototype,
  "mask_url",
  undefined,
);
export class TMAIGCInPaintingRemoveParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.mask_uri = undefined;
    this.origin_item_id = undefined;
    this.origin_prompt = undefined;
    this.mask_url = undefined;
  }
}
l(
  [p.serializable("mask_uri")],
  TMAIGCInPaintingRemoveParams.prototype,
  "mask_uri",
  undefined,
);
l(
  [p.serializable("origin_item_id", undefined, "int64")],
  TMAIGCInPaintingRemoveParams.prototype,
  "origin_item_id",
  undefined,
);
l(
  [p.serializable("origin_prompt")],
  TMAIGCInPaintingRemoveParams.prototype,
  "origin_prompt",
  undefined,
);
l(
  [p.serializable("mask_url")],
  TMAIGCInPaintingRemoveParams.prototype,
  "mask_url",
  undefined,
);
export class TMAIGCOutPaintingParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.origin_item_id = undefined;
    this.up_scale = undefined;
    this.origin_prompt = undefined;
  }
}
l(
  [p.serializable("origin_item_id", undefined, "int64")],
  TMAIGCOutPaintingParams.prototype,
  "origin_item_id",
  undefined,
);
l(
  [p.serializable("up_scale", () => TMOutPaintingUpScale)],
  TMAIGCOutPaintingParams.prototype,
  "up_scale",
  undefined,
);
l(
  [p.serializable("origin_prompt")],
  TMAIGCOutPaintingParams.prototype,
  "origin_prompt",
  undefined,
);
export class TMAIGCByteEditParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.uri = undefined;
    this.strength = undefined;
    this.origin_item_id = undefined;
    this.origin_prompt = undefined;
  }
}
l([p.serializable("uri")], TMAIGCByteEditParams.prototype, "uri", undefined);
l(
  [p.serializable("strength")],
  TMAIGCByteEditParams.prototype,
  "strength",
  undefined,
);
l(
  [p.serializable("origin_item_id", undefined, "int64")],
  TMAIGCByteEditParams.prototype,
  "origin_item_id",
  undefined,
);
l(
  [p.serializable("origin_prompt")],
  TMAIGCByteEditParams.prototype,
  "origin_prompt",
  undefined,
);
export class TMOutPaintingUpScale extends p.Serializable {
  constructor() {
    super(...arguments);
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.top = undefined;
    this.max_size = undefined;
    this.image_ratio = undefined;
  }
}
l(
  [p.serializable("bottom")],
  TMOutPaintingUpScale.prototype,
  "bottom",
  undefined,
);
l([p.serializable("left")], TMOutPaintingUpScale.prototype, "left", undefined);
l(
  [p.serializable("right")],
  TMOutPaintingUpScale.prototype,
  "right",
  undefined,
);
l([p.serializable("top")], TMOutPaintingUpScale.prototype, "top", undefined);
l(
  [p.serializable("max_size")],
  TMOutPaintingUpScale.prototype,
  "max_size",
  undefined,
);
l(
  [p.serializable("image_ratio")],
  TMOutPaintingUpScale.prototype,
  "image_ratio",
  undefined,
);
export class TMAIGCNormalHdParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.last_generate_type = undefined;
    this.origin_item_id = undefined;
  }
}
l(
  [p.serializable("last_generate_type")],
  TMAIGCNormalHdParams.prototype,
  "last_generate_type",
  undefined,
);
l(
  [p.serializable("origin_item_id", undefined, "int64")],
  TMAIGCNormalHdParams.prototype,
  "origin_item_id",
  undefined,
);
export class TMAIGCBlendParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.ability_list = undefined;
    this.has_item_urls = undefined;
    this.model = undefined;
    this.sample_steps = undefined;
    this.extra = undefined;
    this.prompt_placeholder_info_list = undefined;
    this.style_reference = undefined;
    this.item_urls = undefined;
    this.sample_strength = undefined;
  }
}
l(
  [p.serializable("ability_list", () => TMAIGCBlendAbility)],
  TMAIGCBlendParams.prototype,
  "ability_list",
  undefined,
);
l(
  [p.serializable("has_item_urls")],
  TMAIGCBlendParams.prototype,
  "has_item_urls",
  undefined,
);
l([p.serializable("model")], TMAIGCBlendParams.prototype, "model", undefined);
l(
  [p.serializable("sample_steps")],
  TMAIGCBlendParams.prototype,
  "sample_steps",
  undefined,
);
l([p.serializable("extra")], TMAIGCBlendParams.prototype, "extra", undefined);
l(
  [
    p.serializable(
      "prompt_placeholder_info_list",
      () => TMAIGCBlendPromptPlaceHolderInfo,
    ),
  ],
  TMAIGCBlendParams.prototype,
  "prompt_placeholder_info_list",
  undefined,
);
l(
  [p.serializable("style_reference", () => TMAIGCStyleReference)],
  TMAIGCBlendParams.prototype,
  "style_reference",
  undefined,
);
l(
  [p.serializable("item_urls", () => Array)],
  TMAIGCBlendParams.prototype,
  "item_urls",
  undefined,
);
l(
  [p.serializable("sample_strength")],
  TMAIGCBlendParams.prototype,
  "sample_strength",
  undefined,
);
export class TMAIGCBlendAbility extends p.Serializable {
  constructor() {
    super(...arguments);
    this.name = undefined;
    this.large_image_list = undefined;
    this.cover_image_list = undefined;
    this.control_net_list = undefined;
    this.extra = undefined;
    this.strength = undefined;
    this.ip_keep_list = undefined;
    this.style_reference = undefined;
    this.mix_ip_keep_byte_edit = undefined;
  }
}
l([p.serializable("name")], TMAIGCBlendAbility.prototype, "name", undefined);
l(
  [p.serializable("large_image_list", () => TMAIGCImageInfo)],
  TMAIGCBlendAbility.prototype,
  "large_image_list",
  undefined,
);
l(
  [p.serializable("cover_image_list", () => TMAIGCImageInfo)],
  TMAIGCBlendAbility.prototype,
  "cover_image_list",
  undefined,
);
l(
  [p.serializable("control_net_list", () => TMAIGCControlNetParams)],
  TMAIGCBlendAbility.prototype,
  "control_net_list",
  undefined,
);
l([p.serializable("extra")], TMAIGCBlendAbility.prototype, "extra", undefined);
l(
  [p.serializable("strength")],
  TMAIGCBlendAbility.prototype,
  "strength",
  undefined,
);
l(
  [p.serializable("ip_keep_list", () => TMAIGCIpKeepParam)],
  TMAIGCBlendAbility.prototype,
  "ip_keep_list",
  undefined,
);
l(
  [p.serializable("style_reference", () => TMAIGCStyleReference)],
  TMAIGCBlendAbility.prototype,
  "style_reference",
  undefined,
);
l(
  [p.serializable("mix_ip_keep_byte_edit")],
  TMAIGCBlendAbility.prototype,
  "mix_ip_keep_byte_edit",
  undefined,
);
export class TMAIGCControlNetParams extends p.Serializable {
  constructor() {
    super(...arguments);
    this.name = undefined;
    this.strength = undefined;
    this.image_index = undefined;
    this.mask_index = undefined;
  }
}
l(
  [p.serializable("name")],
  TMAIGCControlNetParams.prototype,
  "name",
  undefined,
);
l(
  [p.serializable("strength")],
  TMAIGCControlNetParams.prototype,
  "strength",
  undefined,
);
l(
  [p.serializable("image_index")],
  TMAIGCControlNetParams.prototype,
  "image_index",
  undefined,
);
l(
  [p.serializable("mask_index")],
  TMAIGCControlNetParams.prototype,
  "mask_index",
  undefined,
);
export class TMAIGCIpKeepParam extends p.Serializable {
  constructor() {
    super(...arguments);
    this.param_description = undefined;
    this.character_id = undefined;
    this.character_name = undefined;
    this.ref_ip_weight = undefined;
    this.ref_id_weight = undefined;
  }
}
l(
  [p.serializable("description")],
  TMAIGCIpKeepParam.prototype,
  "param_description",
  undefined,
);
l(
  [p.serializable("character_id", undefined, "int64")],
  TMAIGCIpKeepParam.prototype,
  "character_id",
  undefined,
);
l(
  [p.serializable("character_name")],
  TMAIGCIpKeepParam.prototype,
  "character_name",
  undefined,
);
l(
  [p.serializable("ref_ip_weight")],
  TMAIGCIpKeepParam.prototype,
  "ref_ip_weight",
  undefined,
);
l(
  [p.serializable("ref_id_weight")],
  TMAIGCIpKeepParam.prototype,
  "ref_id_weight",
  undefined,
);
export class TMAIGCBlendPromptPlaceHolderInfo extends p.Serializable {
  constructor() {
    super(...arguments);
    this.ability_index = undefined;
  }
}
l(
  [p.serializable("ability_index")],
  TMAIGCBlendPromptPlaceHolderInfo.prototype,
  "ability_index",
  undefined,
);
export class TMAIGCStyleReference extends p.Serializable {
  constructor() {
    super(...arguments);
    this.style_weight = undefined;
    this.image = undefined;
    this.style_item_id = undefined;
    this.style_title = undefined;
    this.style_title_starling_key = undefined;
    this.style_type = undefined;
  }
}
l(
  [p.serializable("style_weight")],
  TMAIGCStyleReference.prototype,
  "style_weight",
  undefined,
);
l(
  [p.serializable("image", () => TMAIGCImageInfo)],
  TMAIGCStyleReference.prototype,
  "image",
  undefined,
);
l(
  [p.serializable("style_item_id")],
  TMAIGCStyleReference.prototype,
  "style_item_id",
  undefined,
);
l(
  [p.serializable("style_title")],
  TMAIGCStyleReference.prototype,
  "style_title",
  undefined,
);
l(
  [p.serializable("style_title_starling_key")],
  TMAIGCStyleReference.prototype,
  "style_title_starling_key",
  undefined,
);
l(
  [p.serializable("style_type", () => TMAIGCStyleType)],
  TMAIGCStyleReference.prototype,
  "style_type",
  undefined,
);
export class TMAIGCImageInfo extends p.Serializable {
  constructor() {
    super(...arguments);
    this.image_uri = undefined;
    this.image_url = undefined;
    this.width = undefined;
    this.height = undefined;
    this.format = undefined;
    this.origin_url = undefined;
    this.aigc_image = undefined;
  }
}
l(
  [p.serializable("image_uri")],
  TMAIGCImageInfo.prototype,
  "image_uri",
  undefined,
);
l(
  [p.serializable("image_url")],
  TMAIGCImageInfo.prototype,
  "image_url",
  undefined,
);
l([p.serializable("width")], TMAIGCImageInfo.prototype, "width", undefined);
l([p.serializable("height")], TMAIGCImageInfo.prototype, "height", undefined);
l([p.serializable("format")], TMAIGCImageInfo.prototype, "format", undefined);
l(
  [p.serializable("origin_url")],
  TMAIGCImageInfo.prototype,
  "origin_url",
  undefined,
);
l(
  [p.serializable("aigc_image", () => TMAIGCAigcImage)],
  TMAIGCImageInfo.prototype,
  "aigc_image",
  undefined,
);
export class TMAIGCAigcImage extends p.Serializable {
  constructor() {
    super(...arguments);
    this.item_id = undefined;
  }
}
l(
  [p.serializable("item_id", undefined, "int64")],
  TMAIGCAigcImage.prototype,
  "item_id",
  undefined,
);
a = TMAIGCStyleType || (TMAIGCStyleType = {});
a[(a.Default = 109)] = "Default";
a[(a.Customize = 214)] = "Customize";
