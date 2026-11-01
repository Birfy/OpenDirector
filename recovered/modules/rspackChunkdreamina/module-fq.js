import i from "Ut";
import { O } from "./module-b1B.js";
import { Dd, PZ, lM } from "./module-r9E.js";
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
    if (
      this._params.originUri &&
      this._params.originWidth !== undefined &&
      this._params.originWidth !== null &&
      this._params.originHeight !== undefined &&
      this._params.originHeight !== null
    ) {
      const s = lM({
        imageResource: {
          name: "origin",
          uri: this._params.originUri,
          width: this._params.originWidth,
          height: this._params.originHeight,
        },
        resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
      });
      a.resource_list.push(s);
    } else {
      const m = Dd({
        historyId: this._params.originHistoryId,
        itemId: this._params.itemId,
        resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
      });
      a.resource_list.push(m);
    }
    if (this._params.prompt) {
      const l = PZ({
        text: this._params.prompt,
        resourcePurpose: i.ResourcePurpose.PROMPT,
      });
      a.resource_list.push(l);
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
export class x extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.unifiedGenerate;
    t.aigcMode = e.mode;
    t.abilities = new o(e).convert();
    return t;
  }
}
