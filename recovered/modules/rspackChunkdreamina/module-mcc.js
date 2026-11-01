import i from "Ut";
import { K } from "./module-Mn3.js";
import { O } from "./module-b1B.js";
class o {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAGenCoreParam();
    const r = new i.DAImageSuperResolutionAbility();
    const n = new i.DAPostEditParam();
    n.generateType = i.DAAIGCGenerateType.superResolution;
    n.itemId = this._params.itemId;
    n.originHistoryId = this._params.originHistoryId;
    n.originAgenticHistoryId = this._params.originAgenticHistoryId;
    n.historyOption = K(this._params.historyOption);
    r.coreParam = t;
    r.posteditParam = n;
    e.superResolution = r;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class f extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.superResolution;
    t.aigcMode = e.mode;
    t.abilities = new o(e).convert();
    return t;
  }
}
