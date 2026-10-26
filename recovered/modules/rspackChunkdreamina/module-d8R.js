import i from "Ut";
import { O } from "./module-b1B.js";
import { lM } from "./module-r9E.js";
class o {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAImageUnifiedGenerateAbility();
    t.generateType = i.DAAIGCGenerateType.inPaintingRemove;
    t.coreParam = new i.DAGenCoreParam();
    const r = new i.UnifiedAbility();
    const a = new i.AbilityParam();
    a.resource_list = [];
    if (this._params.originUri) {
      const o = lM({
        imageResource: {
          name: "origin",
          uri: this._params.originUri,
          width: this._params.originWidth,
          height: this._params.originHeight,
        },
        resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
      });
      a.resource_list.push(o);
    }
    if (this._params.maskUri) {
      const s = lM({
        imageResource: {
          name: "mask",
          uri: this._params.maskUri,
          width: this._params.maskWidth,
          height: this._params.maskHeight,
        },
        resourcePurpose: i.ResourcePurpose.MASK_IMAGE,
      });
      a.resource_list.push(s);
    }
    t.unifiedAbilityList = [r];
    r.abilityParam = a;
    r.abilityCode = i.AbilityCode.InpaintingRemove;
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
export { s as O };
