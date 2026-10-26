import i from "Ut";
import { K } from "./module-Mn3.js";
import n from "NaK";
import { O } from "./module-b1B.js";
class s {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAImageProHDAbility();
    const r = new i.DAPostEditParam();
    r.generateType = i.DAAIGCGenerateType.proHD;
    r.itemId = this._params.itemId;
    r.originHistoryId = this._params.originHistoryId;
    r.originAgenticHistoryId = this._params.originAgenticHistoryId;
    r.historyOption = K(this._params.historyOption);
    r.originImage = n.c(this._params.proHDParams.originImage);
    t.posteditParam = r;
    t.originalImageStrength = this._params.proHDParams.originalImageStrength;
    t.detailStrength = this._params.proHDParams.detailStrength;
    t.resolutionType = this._params.proHDParams.resolutionType;
    t.hdSceneType = this._params.proHDParams.sceneType;
    e.proHD = t;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class B extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.proHD;
    t.aigcMode = e.mode;
    t.abilities = new s(e).convert();
    return t;
  }
}
