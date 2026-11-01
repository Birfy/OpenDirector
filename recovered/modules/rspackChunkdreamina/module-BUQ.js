import i from "Ut";
import { K } from "./module-Mn3.js";
import n from "po";
import { O } from "./module-b1B.js";
class s {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAGenCoreParam();
    const r = new i.DAImagePaintingAbility();
    const o = new i.DAPostEditParam();
    t.prompt = this._params.prompt;
    o.generateType = i.DAAIGCGenerateType.inPainting;
    o.itemId = this._params.itemId;
    o.originHistoryId = this._params.originHistoryId;
    o.originAgenticHistoryId = this._params.originAgenticHistoryId;
    o.historyOption = K(this._params.historyOption);
    o.canvasDraftImage = n.j(this._params.canvasDraftImage);
    r.coreParam = t;
    r.posteditParam = o;
    r.maskUri = this._params.maskUri;
    e.painting = r;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class p extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.painting;
    t.aigcMode = e.mode;
    t.abilities = new s(e).convert();
    return t;
  }
}
