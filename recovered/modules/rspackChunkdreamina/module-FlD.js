import n from "NaK";
import { F } from "./module-JF.js";
import { w } from "./module-e9_2.js";
import o from "Ut";
import { O } from "./module-Hf_3.js";
class l {
  convert() {
    let e;
    let t;
    const i = new o.DAVideoGenerateAbilities();
    const s = new o.DAVideoBGMAbility();
    s.duration = this._params.input.duration;
    s.tags =
      (e = this._params.input.tags) == null
        ? undefined
        : e.map((e) => {
            var t = new o.DAAudioTag();
            t.key = e.key;
            t.name = e.name;
            return t;
          });
    s.originHistoryId = this._params.input.originHistoryId;
    s.originAgenticHistoryId = this._params.input.originAgenticHistoryId;
    s.originItemId = this._params.input.originItemId;
    s.firstFrameImage = n.c(this._params.input.firstFrameImage);
    s.avMix = F((t = this._params.v2vOpt) == null ? undefined : t.avMix);
    s.videoRefParams = w(this._params.input);
    i.videoBGM = s;
    return i;
  }
  constructor(e) {
    this._params = e;
  }
}
export class a extends O {
  getComponent(e) {
    const t = new o.DAVideoBaseComponent();
    t.generateType = o.DAVideoGenerateType.videoBgm;
    t.aigcMode = e.mode;
    t.abilities = new l(e).convert();
    t.processType = o.DAVideoProcessType.VideoBGM;
    return t;
  }
}
