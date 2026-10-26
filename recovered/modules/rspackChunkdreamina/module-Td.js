import i from "Ut";
import { K } from "./module-Mn3.js";
import n from "po";
import o from "Z7";
import { O } from "./module-b1B.js";
class m {
  convert() {
    const e = new i.DAImageGenerateAbilities();
    const t = new i.DAGenCoreParam();
    const r = new i.DAImagePaintingAbility();
    const s = new i.DAPostEditParam();
    t.prompt = this._params.prompt;
    s.generateType = i.DAAIGCGenerateType.outPainting;
    s.itemId = this._params.itemId;
    s.originHistoryId = this._params.originHistoryId;
    s.originAgenticHistoryId = this._params.originAgenticHistoryId;
    s.historyOption = K(this._params.historyOption);
    s.canvasDraftImage = n.j(this._params.canvasDraftImage);
    r.coreParam = t;
    r.posteditParam = s;
    r.upScale = o.g(this._params.upScale);
    e.painting = r;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class c extends O {
  getComponent(e) {
    const t = new i.DAImageBaseComponent();
    t.generateType = i.DAImageGenerateType.painting;
    t.aigcMode = e.mode;
    t.abilities = new m(e).convert();
    return t;
  }
}
