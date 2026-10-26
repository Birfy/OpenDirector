import i from "Ut";
import { O } from "./module-b1B.js";
import { Dd, PZ, lM } from "./module-r9E.js";
class o {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAImageUnifiedGenerateAbility();
    t.generateType = i.DAAIGCGenerateType.ettaPainting;
    t.coreParam = new i.DAGenCoreParam();
    t.coreParam.prompt = this._params.prompt;
    const r = new i.UnifiedAbility();
    const a = new i.AbilityParam();
    a.resource_list = [];
    a.option = new i.ImageInputOption();
    if (this._params.prompt) {
      const o = PZ({
        text: this._params.prompt,
        resourcePurpose: i.ResourcePurpose.PROMPT,
      });
      a.resource_list.push(o);
    }
    if (this._params.originUri) {
      const s = lM({
        imageResource: {
          name: "origin",
          uri: this._params.originUri,
        },
        resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
      });
      a.resource_list.push(s);
    }
    if (this._params.maskUri) {
      const m = lM({
        imageResource: {
          name: "mask",
          uri: this._params.maskUri,
        },
        resourcePurpose: i.ResourcePurpose.MASK_IMAGE,
      });
      a.resource_list.push(m);
    }
    const l = Dd({
      historyId: this._params.originHistoryId,
      itemId: this._params.itemId,
      resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
    });
    a.resource_list.push(l);
    t.unifiedAbilityList = [r];
    r.abilityParam = a;
    r.abilityCode = i.AbilityCode.InpaintingEtta;
    e.unifiedGenerate = t;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class d extends O {
  getComponent(e) {
    let t;
    const r = new i.DAImageBaseComponent();
    r.generateType = i.DAImageGenerateType.unifiedGenerate;
    r.aigcMode = (t = e.mode) != null ? t : i.DAAIGCMode.workbench;
    r.abilities = new o(e).convert();
    return r;
  }
}
