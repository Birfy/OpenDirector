import { $ } from "./module-Rs_2.js";
import { k } from "./module-Z6.js";
import a from "XS";
import { F } from "./module-JF.js";
import { a as a_1 } from "./module-GfJ.js";
import { w } from "./module-e9_2.js";
import d from "yMd";
import u from "Ut";
import { O } from "./module-Hf_3.js";
class c {
  convert() {
    let e;
    let t;
    let i;
    let u;
    const { abilities, ability, v2vOpt, textToVideoParams } = $();
    const f = k(this._params.input.videoGenInputs);
    textToVideoParams.videoGenInputs = [f];
    textToVideoParams.modelReqKey = this._params.input.modelReqKey;
    textToVideoParams.videoAspectRatio = this._params.input.videoAspectRatio;
    f.vid = (e = this._params.input.videoGenInputs) == null ? undefined : e.vid;
    f.originHistoryId = this._params.originHistoryId;
    f.originAgenticHistoryId = this._params.originAgenticHistoryId;
    f.v2vOpt = v2vOpt;
    v2vOpt.extend = a.S(
      (t = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : t.extend,
    );
    v2vOpt.avMix = F(
      (i = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : i.avMix,
    );
    ability.scene = d.Jv.VideoExtend;
    ability.videoTaskExtra = a_1(
      (u = this._params.taskPayload) == null ? undefined : u.taskExtra,
    );
    ability.videoRefParams = w(this._params);
    return abilities;
  }
  constructor(e) {
    this._params = e;
  }
}
class m extends O {
  getComponent(e) {
    const t = new u.DAVideoBaseComponent();
    t.generateType = u.DAVideoGenerateType.genVideo;
    t.aigcMode = e.mode;
    t.abilities = new c(e).convert();
    t.processType = u.DAVideoProcessType.Extend;
    return t;
  }
}
export { m as u };
