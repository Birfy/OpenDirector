import i from "Ut";
import { lM } from "./module-r9E.js";
import { O } from "./module-b1B.js";
class o {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAImageUnifiedGenerateAbility();
    t.generateType = i.DAAIGCGenerateType.cutout;
    t.coreParam = new i.DAGenCoreParam();
    const r = new i.UnifiedAbility();
    const n = new i.AbilityParam();
    n.resource_list = [];
    if (this._params.originUri) {
      const o = lM({
        imageResource: {
          name: "origin",
          uri: this._params.originUri,
        },
        resourcePurpose: i.ResourcePurpose.ORIGINAL_IMAGE,
      });
      n.resource_list.push(o);
    }
    if (this._params.maskUri) {
      const s = lM({
        imageResource: {
          name: "mask",
          uri: this._params.maskUri,
        },
        resourcePurpose: i.ResourcePurpose.CUTOUT_IMAGE,
      });
      n.resource_list.push(s);
    }
    t.unifiedAbilityList = [r];
    r.abilityParam = n;
    r.abilityCode = i.AbilityCode.Cutout;
    e.unifiedGenerate = t;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class Y extends O {
  getComponent(e) {
    let t;
    const r = new i.DAImageBaseComponent();
    r.generateType = i.DAImageGenerateType.unifiedGenerate;
    r.aigcMode = (t = e.mode) != null ? t : i.DAAIGCMode.workbench;
    r.abilities = new o(e).convert();
    return r;
  }
}
