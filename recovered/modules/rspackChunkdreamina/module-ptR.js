import i from "oa";
import a from "bk";
import n from "Ut";
import { b } from "./module-hlf.js";
import { L } from "./module-U1t.js";
import { Y } from "./module-MkU.js";
class l extends b {
  _getExtends() {
    return a._(i._({}, super._getExtends()), {
      rootModel: this._modelReqKey,
    });
  }
  getComponent(e) {
    const t = new n.DAAudioBaseComponent();
    t.aigcMode = e.mode;
    const r = L(e.input);
    t.generateType = Y(r);
    const i = new n.DAAudioGenerateAbilities();
    i.textToSpeech = r;
    t.abilities = i;
    return t;
  }
  constructor(e) {
    var t = a._(i._({}, e), {
      createTime: new Date().toISOString(),
      createPlatform: n.DADraftCreatedPlatform.WEB,
    });
    super(t);
    this._modelReqKey = t.input.modelReqKey;
  }
}
export { l };
