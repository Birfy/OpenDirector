import i from "Ut";
import { K } from "./module-Mn3.js";
import { O } from "./module-b1B.js";
class o {
  convert() {
    let e;
    let t;
    const r = new i.DAImageGenerateAbilities();
    const n = new i.DAImageNormalHDAbility();
    const o = new i.DAPostEditParam();
    o.generateType = i.DAAIGCGenerateType.normalHD;
    o.historyOption = K(this._params.historyOption);
    const s = new i.DAImageResource();
    s.sourceFrom = i.DAResourceSourceFrom.upload;
    s.platformType = i.DAImageResourcePlatformType.imageX;
    s.uri = this._params.originUri;
    s.width = (e = this._params.originWidth) != null ? e : 0;
    s.height = (t = this._params.originHeight) != null ? t : 0;
    o.originImage = s;
    n.posteditParam = o;
    r.normalHD = n;
    return r;
  }
  constructor(e) {
    this._params = e;
  }
}
class s extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.normalHD;
    t.aigcMode = e.mode;
    t.abilities = new o(e).convert();
    return t;
  }
}
export { s as O };
