import i from "oa";
import a from "bk";
import n from "Ut";
import { b } from "./module-hlf.js";
class s {
  convert() {
    const e = new n.DAAudioGenerateAbilities();
    const { prompt, duration, modelReqKey } = this._params.input;
    const a = new n.DAGenerateSongAbility();
    a.prompt = prompt;
    a.duration = duration;
    a.modelReqKey = modelReqKey;
    a.tags = [];
    e.generateSong = a;
    return e;
  }
  constructor(e) {
    this._params = e;
  }
}
export class M extends b {
  _getExtends() {
    return a._(i._({}, super._getExtends()), {
      rootModel: this._modelReqKey,
    });
  }
  getComponent(e) {
    const t = new n.DAAudioBaseComponent();
    t.aigcMode = e.mode;
    t.generateType = n.AudioGenerateType.GenerateSong;
    t.abilities = new s(e).convert();
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
