import i from "oa";
import a from "bk";
import n from "Ut";
import o from "jp";
import { B } from "./module-aw.js";
import { K } from "./module-Mn3.js";
import { O } from "./module-b1B.js";
class p {
  convert() {
    let e;
    const t = new n.DAImageGenerateAbilities();
    const r = new n.DAGenCoreParam();
    const i = new n.DAImageGenerateAbility();
    const a = new n.DAImageGenerateOption();
    r.prompt = this._params.prompt;
    r.model = this._params.model;
    r.largeImageInfo = B(this._params.largeImageInfo);
    r.intelligentRatio = this._params.isIntelligentAspectRatio;
    r.imageRatio = this._params.isIntelligentAspectRatio
      ? undefined
      : (e = o.B(this._params.largeImageInfo)) != null
        ? e
        : n.DAImageRatioType.ImageRatioType_11;
    r.sampleStrength = this._params.sampleStrength;
    r.negativePrompt = this._params.negativePrompt;
    r.seed = this._params.seed;
    r.quality = this._params.quality;
    r.background = this._params.background;
    r.stylize = this._params.stylize;
    i.coreParam = r;
    i.historyOption = K(this._params.historyOption);
    a.generateAll = false;
    a.genCount = this._params.generateCount;
    a.isForceSingle = this._params.isForceSingleGeneration;
    t.generate = i;
    t.genOption = a;
    return t;
  }
  constructor(e) {
    this._params = e;
  }
}
export class T extends O {
  getComponent(e) {
    let t;
    const r = new n.DAImageBaseComponent();
    r.generateType = n.DAImageGenerateType.generate;
    r.aigcMode = (t = e.mode) != null ? t : n.DAAIGCMode.workbench;
    r.abilities = new p(e).convert();
    return r;
  }
  _getExtends(e) {
    const t = super._getExtends(e);
    return a._(i._({}, t), {
      turnId: this._params.turnId,
      conversationId: this._params.conversationId,
    });
  }
  constructor(e) {
    super(e);
    this._params = e;
  }
}
