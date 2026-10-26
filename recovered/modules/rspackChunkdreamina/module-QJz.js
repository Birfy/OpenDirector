import i from "Ut";
import { K } from "./module-Mn3.js";
import { O } from "./module-b1B.js";
class o {
  convert() {
    let e;
    let t;
    const r = new i.DAImageGenerateAbilities();
    const n = new i.DAImageProHDAbility();
    const o = new i.DAPostEditParam();
    o.generateType = i.DAAIGCGenerateType.proHD;
    o.historyOption = K(this._params.historyOption);
    const s = new i.DAImageResource();
    s.uri = this._params.originUri;
    s.sourceFrom = i.DAResourceSourceFrom.upload;
    s.platformType = i.DAImageResourcePlatformType.imageX;
    s.width = (e = this._params.originWidth) != null ? e : 0;
    s.height = (t = this._params.originHeight) != null ? t : 0;
    o.originImage = s;
    n.posteditParam = o;
    n.originalImageStrength = this._params.proHDParams.originalImageStrength;
    n.detailStrength = this._params.proHDParams.detailStrength;
    n.resolutionType = this._params.proHDParams.resolutionType;
    n.hdSceneType = this._params.proHDParams.sceneType;
    r.proHD = n;
    return r;
  }
  constructor(e) {
    this._params = e;
  }
}
export class T extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.proHD;
    t.aigcMode = e.mode;
    t.abilities = new o(e).convert();
    return t;
  }
}
