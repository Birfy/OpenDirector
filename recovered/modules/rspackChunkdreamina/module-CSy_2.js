import i from "Ut";
import { O } from "./module-b1B.js";
const ImageResolutionType_2k = i.DAImageResolutionType.ImageResolutionType_2k;
class o {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAImageUnifiedGenerateAbilityV2();
    t.model = this._params.model;
    t.generateType = i.DAAIGCGenerateType.viewControl;
    t.renderConfig = this._createRenderConfig();
    t.genOption = this._createGenOption();
    const r = new i.UnifiedAbilityV2();
    r.abilityCode = i.AbilityCode.ViewControl;
    r.resourceList = [this._createOriginResource()];
    const a = new i.UnifiedAbilityOption();
    a.viewControl = this._params.viewControl;
    const n = new i.UnifiedAbilityPolicy();
    n.abilityOption = a;
    r.policy = n;
    t.unifiedAbilityList = [r];
    e.unifiedGenerateV2 = t;
    return e;
  }
  _createRenderConfig() {
    const e = new i.ImageRenderSpec();
    e.resolutionType = ImageResolutionType_2k;
    e.intelligentRatio = true;
    return e;
  }
  _createGenOption() {
    const e = new i.UnifiedGenOption();
    e.genCount = 1;
    e.genModelType = 2;
    return e;
  }
  _createOriginImageContent() {
    let e;
    const t = new i.ImageGenerationImageContent();
    t.imageUri = this._params.originUri;
    t.imageUrl = this._params.originUrl;
    t.width = this._params.originWidth;
    t.height = this._params.originHeight;
    if ("itemId" in (e = this._params) && "originHistoryId" in e) {
      t.historyId = this._params.originHistoryId;
      t.itemId = this._params.itemId;
      t.originAgenticHistoryId = this._params.originAgenticHistoryId;
    }
    return t;
  }
  _createOriginResource() {
    const e = new i.ImageGenerationInputResource();
    const t = new i.ImageGenerationResourceContent();
    e.resourceType = i.ResourceType.IMAGE;
    e.purpose = i.ResourcePurpose.ORIGINAL_IMAGE;
    t.image = this._createOriginImageContent();
    e.content = t;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class R extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.unifiedGenerateV2;
    t.aigcMode = e.mode;
    t.abilities = new o(e).convert();
    return t;
  }
}
