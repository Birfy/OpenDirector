import n from "oa";
import r from "Ut";
import a from "yMd";
import o from "BHo";
import s from "kb";
import l from "y3V";
import d from "yXq";
import u from "Tc1";
import v from "Mg";
import { Z } from "./module-s7.js";
import { V } from "./module-BE.js";
import { O } from "./module-Hf_3.js";
class f {
  convert() {
    const { v2vOpt, i2vOpt, videoMode, prompt } =
      this._params.input.videoGenInputs;
    const f = v2vOpt == null ? undefined : v2vOpt.lipSyncUserVideo;
    const g = i2vOpt == null ? undefined : i2vOpt.realmanAvatar;
    const I = f != null ? f : g;
    const _ = I == null ? undefined : I.ttsInfo;
    const y = o.F(_);
    const h = new r.DAVideoGenerateAbilities();
    h.lipSync = y;
    y.audio = s.l(
      {
        videoId:
          (S = I == null || (b = I.originAudio) == null ? undefined : b.vid) !=
          null
            ? S
            : "",
        duration:
          (A =
            I == null || (M = I.originAudio) == null
              ? undefined
              : M.duration) != null
            ? A
            : 0,
      },
      {
        sourceFrom:
          (_ == null ? undefined : _.sourceType) === a.yA.LocalFile
            ? r.DAResourceSourceFrom.upload
            : r.DAResourceSourceFrom.produced,
        name: Z(_),
      },
    );
    const { modelReqKey } = this._params.input;
    if (f) {
      var S;
      var A;
      var b;
      var M;
      let C;
      let k;
      const { audioBeforeConversion } = f;
      y.referenceType = r.DALipSyncReferenceType.video;
      y.video = l.a(f.originVideo);
      y.mode = d.c.videoModeToLipSyncMode(videoMode);
      y.supportedModes =
        (k = f.supportedModes) == null
          ? undefined
          : k.map(d.c.videoModeToLipSyncMode).filter((e) => e !== undefined);
      y.audioBeforeConversion = s.l(
        n._(
          {
            videoId:
              (C =
                audioBeforeConversion == null
                  ? undefined
                  : audioBeforeConversion.vid) != null
                ? C
                : "",
          },
          audioBeforeConversion,
        ),
      );
    }
    if (g) {
      let x;
      let w;
      let V;
      const { audioBeforeConversion, selectedFace } = g;
      y.referenceType = r.DALipSyncReferenceType.image;
      y.image = u.L3(g.originImage, u.$n(g.originImage));
      y.mode = d.c.videoModeToLipSyncMode(videoMode);
      y.audioBeforeConversion = s.l(
        n._(
          {
            videoId:
              (x =
                audioBeforeConversion == null
                  ? undefined
                  : audioBeforeConversion.vid) != null
                ? x
                : "",
          },
          audioBeforeConversion,
        ),
      );
      y.supportedModes =
        (V = (w = g.supportedModes) != null ? w : [videoMode]) == null
          ? undefined
          : V.map(d.c.videoModeToLipSyncMode).filter((e) => e !== undefined);
      y.selectedFace = v.o(selectedFace);
    }
    y.modelReqKey = modelReqKey;
    y.prompt = prompt;
    y.beforeSilenceMillisecond =
      I == null ? undefined : I.beforeSilenceMillisecond;
    y.afterSilenceMillisecond =
      I == null ? undefined : I.afterSilenceMillisecond;
    y.seed = V().toString();
    return h;
  }
  constructor(e) {
    this._params = e;
  }
}
export class C extends O {
  getComponent(e) {
    const t = new r.DAVideoBaseComponent();
    t.generateType = r.DAVideoGenerateType.lipSync;
    t.aigcMode = e.mode;
    t.abilities = new f(e).convert();
    return t;
  }
}
