import i from "Ut";
import { K } from "./module-Mn3.js";
import { O } from "./module-b1B.js";
class o {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAImageNormalHDAbility();
    const r = new i.DAPostEditParam();
    r.generateType = i.DAAIGCGenerateType.normalHD;
    r.itemId = this._params.itemId;
    r.originHistoryId = this._params.originHistoryId;
    r.originAgenticHistoryId = this._params.originAgenticHistoryId;
    r.historyOption = K(this._params.historyOption);
    t.posteditParam = r;
    e.normalHD = t;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class M extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.normalHD;
    t.aigcMode = e.mode;
    t.abilities = new o(e).convert();
    return t;
  }
}
