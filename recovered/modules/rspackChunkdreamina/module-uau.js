import i from "Ut";
import { Dd, PZ, lM } from "./module-r9E.js";
import { O } from "./module-b1B.js";
class o {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAImageUnifiedGenerateAbility();
    t.generateType = i.DAAIGCGenerateType.ettaPainting;
    t.coreParam = new i.DAGenCoreParam();
    t.coreParam.prompt = this._params.prompt;
    const r = new i.UnifiedAbility();
    const n = new i.AbilityParam();
    n.resource_list = [];
    n.option = new i.ImageInputOption();
    if (this._params.originUri) {
      const o = lM({
        imageResource: {
          name: "origin",
          uri: this._params.originUri,
        },
        resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
      });
      n.resource_list.push(o);
    } else {
      const s = Dd({
        historyId: this._params.originHistoryId,
        itemId: this._params.itemId,
        resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
      });
      n.resource_list.push(s);
    }
    if (this._params.prompt) {
      const m = PZ({
        text: this._params.prompt,
        resourcePurpose: i.ResourcePurpose.PROMPT,
      });
      n.resource_list.push(m);
    }
    if (this._params.maskUri) {
      const l = lM({
        imageResource: {
          name: "mask",
          uri: this._params.maskUri,
        },
        resourcePurpose: i.ResourcePurpose.MASK_IMAGE,
      });
      n.resource_list.push(l);
    }
    t.unifiedAbilityList = [r];
    r.abilityParam = n;
    r.abilityCode = i.AbilityCode.InpaintingEtta;
    e.unifiedGenerate = t;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class X extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.unifiedGenerate;
    t.aigcMode = e.mode;
    t.abilities = new o(e).convert();
    return t;
  }
}
