import i from "Ut";
import { O } from "./module-b1B.js";
import { PZ, lM } from "./module-r9E.js";
class o {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAImageUnifiedGenerateAbility();
    t.generateType = i.DAAIGCGenerateType.outPainting;
    t.coreParam = new i.DAGenCoreParam();
    t.coreParam.prompt = this._params.prompt;
    const r = new i.UnifiedAbility();
    const a = new i.AbilityParam();
    a.option = new i.ImageInputOption();
    const o = new i.ReqOutPaintingUpScale();
    if (this._params.upScale) {
      o.top = this._params.upScale.top;
      o.left = this._params.upScale.left;
      o.bottom = this._params.upScale.bottom;
      o.right = this._params.upScale.right;
      o.max_size = this._params.upScale.maxSize;
      o.image_ratio = this._params.upScale.imageRatio;
    }
    a.option.out_painting = o;
    a.resource_list = [];
    if (this._params.prompt) {
      const s = PZ({
        text: this._params.prompt,
        resourcePurpose: i.ResourcePurpose.PROMPT,
      });
      a.resource_list.push(s);
    }
    if (this._params.originUri) {
      const m = lM({
        imageResource: {
          name: "origin",
          uri: this._params.originUri,
          width: this._params.originWidth,
          height: this._params.originHeight,
        },
        resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
      });
      a.resource_list.push(m);
    }
    t.unifiedAbilityList = [r];
    r.abilityParam = a;
    r.abilityCode = i.AbilityCode.OutPainting;
    e.unifiedGenerate = t;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
class s extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.unifiedGenerate;
    t.aigcMode = e.mode;
    t.abilities = new o(e).convert();
    return t;
  }
}
export { s as o };
