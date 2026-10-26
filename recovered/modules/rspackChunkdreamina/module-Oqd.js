import i from "oa";
import a from "bk";
import n from "Ut";
import { O } from "./module-b1B.js";
import s from "qg";
const m = {
  "1k": n.DAImageResolutionType.ImageResolutionType_1k,
  "1.5k": n.DAImageResolutionType.ImageResolutionType_1_5k,
  "2k": n.DAImageResolutionType.ImageResolutionType_2k,
  "4k": n.DAImageResolutionType.ImageResolutionType_4k,
};
class l {
  convert() {
    const e = new n.DAImageGenerateAbilities();
    const t = new n.DAImageUnifiedGenerateAbilityV2();
    t.model = this._params.model;
    t.generateType = n.DAAIGCGenerateType.smartEdit;
    t.prompt = this._params.prompt;
    t.renderConfig = this._createRenderConfig();
    t.genOption = this._createGenOption();
    const r = new n.UnifiedAbilityV2();
    r.abilityCode = s.Q4;
    r.resourceList = this._createResourceList();
    r.extra = this._params.smartEditExtra;
    t.unifiedAbilityList = [r];
    e.unifiedGenerateV2 = t;
    return e;
  }
  _createRenderConfig() {
    let e;
    const t = new n.ImageRenderSpec();
    t.resolutionType =
      m[(e = this._params.outputResolution) != null ? e : s.aJ];
    t.intelligentRatio = true;
    return t;
  }
  _createGenOption() {
    const e = new n.UnifiedGenOption();
    e.genCount = 1;
    e.genModelType = 2;
    if (this._params.model === "high_aes_general_v50") {
      e.isForceSingle = true;
    }
    return e;
  }
  _createResourceList() {
    return [this._createOriginResource()];
  }
  _createOriginImageContent() {
    let e;
    const t = new n.ImageGenerationImageContent();
    t.imageUri = this._params.originUri;
    t.imageUrl = this._params.originUrl;
    t.width = this._params.originWidth;
    t.height = this._params.originHeight;
    if ("itemId" in (e = this._params) && "originHistoryId" in e) {
      t.historyId = this._params.originHistoryId;
      t.itemId = this._params.itemId;
    }
    return t;
  }
  _createOriginResource() {
    const e = new n.ImageGenerationInputResource();
    const t = new n.ImageGenerationResourceContent();
    e.resourceType = n.ResourceType.IMAGE;
    e.purpose = n.ResourcePurpose.ORIGINAL_IMAGE;
    t.image = this._createOriginImageContent();
    e.content = t;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class G extends O {
  getComponent(e) {
    const t = new n.DAImageBaseComponent();
    t.generateType = n.DAImageGenerateType.unifiedGenerateV2;
    t.aigcMode = e.mode;
    t.abilities = new l(e).convert();
    return t;
  }
  _getExtends(e) {
    let t;
    let r;
    const o = super._getExtends(e);
    const s = e.findMainComponent();
    const m =
      s instanceof n.DAImageBaseComponent
        ? (r = s.abilities) == null || (t = r.unifiedGenerateV2) == null
          ? undefined
          : t.model
        : undefined;
    return a._(i._({}, o), {
      rootModel: m != null ? m : o.rootModel,
    });
  }
}
