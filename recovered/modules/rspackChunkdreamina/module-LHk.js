import r from "cX";
import a from "eQY";
import n from "PjO";
import s from "te";
import d from "qY3";
import { DAAICameraAbility } from "./module-src.js";
import { DAImageBlendAbility } from "./module-HZ.js";
import { DAImageGenerateAbility } from "./module-t5.js";
import { DAImageNormalHDAbility } from "./module-ud.js";
import { DAImagePaintingAbility } from "./module-EO.js";
import { DAImageProHDAbility } from "./module-fV1.js";
import { DAImageSuperResolutionAbility } from "./module-Am.js";
import { DAImageUnifiedGenerateAbility } from "./module-Nz.js";
import y from "./module-Rd.js";
const o =
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
export class ServerImageGenerationImageContent extends y.Serializable {
  constructor() {
    super(...arguments);
    this.imageUri = undefined;
    this.imageUrl = undefined;
    this.width = undefined;
    this.height = undefined;
    this.format = undefined;
    this.itemId = undefined;
    this.historyId = undefined;
    this.originAgenticHistoryId = undefined;
  }
  afterToJSON() {
    let e = super.afterToJSON();
    let t = ServerImageGenerationImageContent.serializedID(this.itemId);
    if (t != undefined) {
      e.set("item_id", t);
    }
    let i = ServerImageGenerationImageContent.serializedID(this.historyId);
    if (i != undefined) {
      e.set("history_id", i);
    }
    return e;
  }
  static serializedID(e) {
    if (e === undefined || e === "") {
      return;
    }
    let t = y.Int64.parse(e);
    if (t !== undefined) {
      return `Int64(${t})`;
    }
  }
}
o(
  [y.serializable("image_uri")],
  ServerImageGenerationImageContent.prototype,
  "imageUri",
  undefined,
);
o(
  [y.serializable("image_url")],
  ServerImageGenerationImageContent.prototype,
  "imageUrl",
  undefined,
);
o(
  [y.serializable("width")],
  ServerImageGenerationImageContent.prototype,
  "width",
  undefined,
);
o(
  [y.serializable("height")],
  ServerImageGenerationImageContent.prototype,
  "height",
  undefined,
);
o(
  [y.serializable("format")],
  ServerImageGenerationImageContent.prototype,
  "format",
  undefined,
);
o(
  [y.serializable("origin_agentic_history_id")],
  ServerImageGenerationImageContent.prototype,
  "originAgenticHistoryId",
  undefined,
);
export class ServerImageGenerationResourceContent extends y.Serializable {
  constructor() {
    super(...arguments);
    this.text = undefined;
    this.image = undefined;
  }
}
o(
  [y.serializable("text", () => a.ImageGenerationTextContent)],
  ServerImageGenerationResourceContent.prototype,
  "text",
  undefined,
);
o(
  [y.serializable("image", () => ServerImageGenerationImageContent)],
  ServerImageGenerationResourceContent.prototype,
  "image",
  undefined,
);
export class ServerImageGenerationInputResource extends y.Serializable {
  constructor() {
    super(...arguments);
    this.content = undefined;
    this.resourceType = undefined;
    this.purpose = undefined;
  }
}
o(
  [y.serializable("content", () => ServerImageGenerationResourceContent)],
  ServerImageGenerationInputResource.prototype,
  "content",
  undefined,
);
o(
  [y.serializable("resource_type")],
  ServerImageGenerationInputResource.prototype,
  "resourceType",
  undefined,
);
o(
  [y.serializable("purpose")],
  ServerImageGenerationInputResource.prototype,
  "purpose",
  undefined,
);
export class ServerUnifiedAbilityV2 extends y.Serializable {
  constructor() {
    super(...arguments);
    this.abilityCode = undefined;
    this.resourceList = undefined;
    this.policy = undefined;
    this.extra = undefined;
  }
}
o(
  [y.serializable("ability_code")],
  ServerUnifiedAbilityV2.prototype,
  "abilityCode",
  undefined,
);
o(
  [y.serializable("resource_list", () => ServerImageGenerationInputResource)],
  ServerUnifiedAbilityV2.prototype,
  "resourceList",
  undefined,
);
o(
  [y.serializable("policy", () => s.UnifiedAbilityPolicy)],
  ServerUnifiedAbilityV2.prototype,
  "policy",
  undefined,
);
o(
  [y.serializable("extra")],
  ServerUnifiedAbilityV2.prototype,
  "extra",
  undefined,
);
export class ServerUnifiedGenerateV2Input extends y.Serializable {
  constructor() {
    super(...arguments);
    this.stylize = undefined;
    this.model = undefined;
    this.prompt = undefined;
    this.generateType = undefined;
    this.unifiedAbilityList = undefined;
    this.renderConfig = undefined;
    this.genOption = undefined;
  }
}
o(
  [y.serializable("stylize")],
  ServerUnifiedGenerateV2Input.prototype,
  "stylize",
  undefined,
);
o(
  [y.serializable("model")],
  ServerUnifiedGenerateV2Input.prototype,
  "model",
  undefined,
);
o(
  [y.serializable("prompt")],
  ServerUnifiedGenerateV2Input.prototype,
  "prompt",
  undefined,
);
o(
  [y.serializable("generate_type")],
  ServerUnifiedGenerateV2Input.prototype,
  "generateType",
  undefined,
);
o(
  [y.serializable("unified_ability_list", () => ServerUnifiedAbilityV2)],
  ServerUnifiedGenerateV2Input.prototype,
  "unifiedAbilityList",
  undefined,
);
o(
  [y.serializable("render_config", () => n.ImageRenderSpec)],
  ServerUnifiedGenerateV2Input.prototype,
  "renderConfig",
  undefined,
);
o(
  [y.serializable("gen_option", () => d.UnifiedGenOption)],
  ServerUnifiedGenerateV2Input.prototype,
  "genOption",
  undefined,
);
export class ServerGenerateImageInput extends y.Serializable {
  constructor() {
    super(...arguments);
    this.api = undefined;
    this.generateReq = undefined;
    this.normalHDReq = undefined;
    this.blendReq = undefined;
    this.paintingReq = undefined;
    this.superResolutionReq = undefined;
    this.proHDReq = undefined;
    this.aiCamera = undefined;
    this.genOption = undefined;
    this.unifiedGenerateReq = undefined;
    this.unifiedGenerateV2Input = undefined;
  }
}
o(
  [y.serializable("api")],
  ServerGenerateImageInput.prototype,
  "api",
  undefined,
);
o(
  [y.serializable("generate_req", () => DAImageGenerateAbility)],
  ServerGenerateImageInput.prototype,
  "generateReq",
  undefined,
);
o(
  [y.serializable("normal_hd_req", () => DAImageNormalHDAbility)],
  ServerGenerateImageInput.prototype,
  "normalHDReq",
  undefined,
);
o(
  [y.serializable("blend_req", () => DAImageBlendAbility)],
  ServerGenerateImageInput.prototype,
  "blendReq",
  undefined,
);
o(
  [y.serializable("painting_req", () => DAImagePaintingAbility)],
  ServerGenerateImageInput.prototype,
  "paintingReq",
  undefined,
);
o(
  [y.serializable("super_resolution_req", () => DAImageSuperResolutionAbility)],
  ServerGenerateImageInput.prototype,
  "superResolutionReq",
  undefined,
);
o(
  [y.serializable("pro_hd_req", () => DAImageProHDAbility)],
  ServerGenerateImageInput.prototype,
  "proHDReq",
  undefined,
);
o(
  [y.serializable("ai_camera_input", () => DAAICameraAbility)],
  ServerGenerateImageInput.prototype,
  "aiCamera",
  undefined,
);
o(
  [y.serializable("gen_option", () => r.DAImageGenerateOption)],
  ServerGenerateImageInput.prototype,
  "genOption",
  undefined,
);
o(
  [y.serializable("unified_generate_req", () => DAImageUnifiedGenerateAbility)],
  ServerGenerateImageInput.prototype,
  "unifiedGenerateReq",
  undefined,
);
o(
  [
    y.serializable(
      "unified_generate_v2_input",
      () => ServerUnifiedGenerateV2Input,
    ),
  ],
  ServerGenerateImageInput.prototype,
  "unifiedGenerateV2Input",
  undefined,
);
