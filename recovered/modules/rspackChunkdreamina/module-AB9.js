import n from "Ut";
import { O } from "./module-Hf_3.js";
import { w } from "./module-e9_2.js";
import { F } from "./module-JF.js";
import s from "y3V";
class l {
  convert() {
    let e;
    let t;
    let i;
    let r;
    let l;
    let d;
    let u;
    const v = new n.DAVideoGenerateAbilities();
    const c = new n.DAVideoAudioEffectAbility();
    v.videoAudioEffect = c;
    const m = new n.DAVideoRefParam();
    m.generateType = n.DAAIGCGenerateType.videoAudioEffect;
    c.videoRefParams = m;
    m.originHistoryId =
      (e = this._params.videoAudioInput) == null
        ? undefined
        : e.originHistoryId;
    m.originAgenticHistoryId =
      (t = this._params.videoAudioInput) == null
        ? undefined
        : t.originAgenticHistoryId;
    m.itemId =
      (i = this._params.videoAudioInput) == null ? undefined : i.originItemId;
    c.originHistoryId =
      (r = this._params.videoAudioInput) == null
        ? undefined
        : r.originHistoryId;
    c.originItemId =
      (l = this._params.videoAudioInput) == null ? undefined : l.originItemId;
    c.videoResource = s.a(
      (d = this._params.videoAudioInput) == null
        ? undefined
        : d.originVideoDetail,
    );
    c.videoRefParams = w(this._params.videoAudioInput);
    c.avMix = F((u = this._params.v2vOpt) == null ? undefined : u.avMix);
    return v;
  }
  constructor(e) {
    this._params = e;
  }
}
export class x extends O {
  getComponent(e) {
    const t = new n.DAVideoBaseComponent();
    t.generateType = n.DAVideoGenerateType.videoAudioEffect;
    t.aigcMode = e.mode;
    t.abilities = new l(e).convert();
    t.processType = n.DAVideoProcessType.VideoAudioEffect;
    return t;
  }
}
