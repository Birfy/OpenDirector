import n from "oa";
import r from "Ut";
import a from "yMd";
import o from "BHo";
import s from "kb";
import l from "y3V";
import d from "yXq";
import { w } from "./module-e9_2.js";
import { Z } from "./module-s7.js";
import { V } from "./module-BE.js";
import { O } from "./module-Hf_3.js";
class p {
  convert() {
    const e =
      (f = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : f.lipSync;
    const t = e == null ? undefined : e.ttsInfo;
    const i = new r.DAVideoGenerateAbilities();
    const m = o.F(t);
    i.lipSync = m;
    m.referenceType = r.DALipSyncReferenceType.aiVideo;
    const p =
      (g = this._params.input.videoGenInputs.v2vOpt) == null
        ? undefined
        : g.avMix;
    if (p) {
      if (p.scene === r.DAGenerateVideoAudioScene.EFFECT) {
        m.videoEffectAudio = s.l(
          {
            videoId: (I = p.audioVid) != null ? I : "",
          },
          {
            sourceFrom: r.DAResourceSourceFrom.produced,
          },
        );
      } else {
        m.videoBgmAudio = s.l(
          {
            videoId: (_ = p.audioVid) != null ? _ : "",
          },
          {
            sourceFrom: r.DAResourceSourceFrom.produced,
          },
        );
      }
    }
    if (e) {
      m.audio = s.l(
        {
          videoId:
            (y = (S = e.originAudio) == null ? undefined : S.vid) != null
              ? y
              : "",
        },
        {
          sourceFrom:
            (t == null ? undefined : t.sourceType) === a.yA.LocalFile
              ? r.DAResourceSourceFrom.upload
              : r.DAResourceSourceFrom.produced,
          name: Z(t),
        },
      );
      m.video = l.a(e.originVideo);
      if (m.video) {
        m.video.sourceFrom = r.DAResourceSourceFrom.produced;
        m.video.aigcVideo = new r.DAAIGCVideo();
        m.video.aigcVideo.itemId = e.videoItemId;
      }
      m.audioBeforeConversion = s.l(
        n._(
          {
            videoId:
              (h = (A = e.audioBeforeConversion) == null ? undefined : A.vid) !=
              null
                ? h
                : "",
          },
          e.audioBeforeConversion,
        ),
      );
      var f;
      var g;
      var I;
      var _;
      var y;
      var h;
      let T;
      var S;
      var A;
      let b;
      const { videoMode } = this._params.input.videoGenInputs;
      m.mode = d.c.videoModeToLipSyncMode(videoMode);
      m.supportedModes =
        (b = (T = e.supportedModes) != null ? T : [videoMode]) == null
          ? undefined
          : b.map(d.c.videoModeToLipSyncMode).filter((e) => e !== undefined);
    }
    m.seed = V().toString();
    m.videoRefParams = w(this._params);
    return i;
  }
  constructor(e) {
    this._params = e;
  }
}
export class x extends O {
  getComponent(e) {
    const t = new r.DAVideoBaseComponent();
    t.generateType = r.DAVideoGenerateType.lipSync;
    t.aigcMode = e.mode;
    t.abilities = new p(e).convert();
    t.processType = r.DAVideoProcessType.LipSync;
    return t;
  }
}
