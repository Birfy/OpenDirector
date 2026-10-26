import { $ } from "./module-Rs_2.js";
import r from "w7";
import { F } from "./module-JF.js";
import { a } from "./module-GfJ.js";
import { w } from "./module-e9_2.js";
import l from "Ut";
import { O } from "./module-Hf_3.js";
class u {
  convert() {
    let e;
    let t;
    let i;
    let l;
    const { abilities, ability, v2vOpt, videoGenInput } = $();
    videoGenInput.vid =
      (e = this._params.input.videoGenInputs) == null ? undefined : e.vid;
    v2vOpt.labSr = r.C(
      (t = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : t.labSr,
    );
    v2vOpt.avMix = F(
      (i = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : i.avMix,
    );
    ability.scene = this._params.scene;
    ability.videoTaskExtra = a(
      (l = this._params.taskPayload) == null ? undefined : l.taskExtra,
    );
    ability.videoRefParams = w(this._params);
    return abilities;
  }
  constructor(e) {
    this._params = e;
  }
}
export class q extends O {
  getComponent(e) {
    const t = new l.DAVideoBaseComponent();
    t.generateType = l.DAVideoGenerateType.genVideo;
    t.aigcMode = e.mode;
    t.abilities = new u(e).convert();
    t.processType = l.DAVideoProcessType.LabSR;
    return t;
  }
}
