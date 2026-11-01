import n from "Ut";
import r from "yMd";
import { $ } from "./module-Rs_2.js";
import o from "J1";
import { a } from "./module-GfJ.js";
import { O } from "./module-Hf_3.js";
class d {
  convert() {
    let e;
    let t;
    const { abilities, ability, v2vOpt, textToVideoParams } = $();
    textToVideoParams.seed = this._params.input.seed;
    textToVideoParams.modelReqKey = this._params.input.modelReqKey;
    v2vOpt.videoTemplate = o.q(
      (e = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : e.videoTemplate,
    );
    ability.scene = r.Jv.VideoTemplate;
    ability.videoTaskExtra = a(
      (t = this._params.taskPayload) == null ? undefined : t.taskExtra,
    );
    return abilities;
  }
  constructor(e) {
    this._params = e;
  }
}
export class I extends O {
  getComponent(e) {
    const t = new n.DAVideoBaseComponent();
    t.generateType = n.DAVideoGenerateType.videoTemplate;
    t.aigcMode = e.mode;
    t.abilities = new d(e).convert();
    t.processType = n.DAVideoProcessType.VideoTemplate;
    return t;
  }
}
