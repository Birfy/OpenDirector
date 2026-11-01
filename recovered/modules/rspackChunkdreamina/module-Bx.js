import n from "Ut";
import { $ } from "./module-Rs_2.js";
import { k } from "./module-Z6.js";
import o from "qU";
import { F } from "./module-JF.js";
import { a } from "./module-GfJ.js";
import { w } from "./module-e9_2.js";
import u from "yMd";
import { O } from "./module-Hf_3.js";
class c {
  convert() {
    let e;
    let t;
    let i;
    let n;
    const { abilities, ability, v2vOpt, textToVideoParams } = $();
    const f = k(this._params.input.videoGenInputs);
    textToVideoParams.videoGenInputs = [f];
    textToVideoParams.modelReqKey = this._params.input.modelReqKey;
    textToVideoParams.videoAspectRatio = this._params.input.videoAspectRatio;
    f.vid = (e = this._params.input.videoGenInputs) == null ? undefined : e.vid;
    f.originHistoryId = this._params.originHistoryId;
    f.originAgenticHistoryId = this._params.originAgenticHistoryId;
    f.v2vOpt = v2vOpt;
    v2vOpt.insertFrame = o.k(
      (t = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : t.insertFrame,
    );
    v2vOpt.avMix = F(
      (i = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : i.avMix,
    );
    ability.scene = u.Jv.InsertFrame;
    ability.videoTaskExtra = a(
      (n = this._params.taskPayload) == null ? undefined : n.taskExtra,
    );
    ability.videoRefParams = w(this._params);
    return abilities;
  }
  constructor(e) {
    this._params = e;
  }
}
export class j extends O {
  getComponent(e) {
    const t = new n.DAVideoBaseComponent();
    t.generateType = n.DAVideoGenerateType.genVideo;
    t.aigcMode = e.mode;
    t.abilities = new c(e).convert();
    t.processType = n.DAVideoProcessType.InsertFrame;
    return t;
  }
}
