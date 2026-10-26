import r from "QWK";
import o from "Kt";
import n from "NY";
import a from "K8";
import s from "yF";
import c from "KC";
import l from "xy";
import u from "dR";
import d from "qN";
import h from "b5";
import v from "iN";
import _ from "WzM";
import p from "UH9";
import m from "Nxf";
import g from "GS";
import f from "hP";
import y from "oa";
import S from "fg";
import C from "Qxy";
class b {
  get _networkClient() {
    let e;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = new c.LL().build({
          headers: {
            "Content-Type": "application/json",
            ch: "online",
          },
          withCredentials: true,
        })),
        l.sc(e),
        _.GD(e),
        u.vo(e),
        d.Wh(e),
        s.P(e),
        e);
    }
    return this._networkClientInstance;
  }
  performTextToSpeech(e) {
    return n
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/tts_generate"),
            ((e) => {
              var { text, voice, speed = C.$w, emotion } = e;
              var { id, itemPlatform } = voice;
              var s = {
                text,
                idInfo: {
                  id,
                  itemPlatform,
                },
                audioConfig: y._(
                  {
                    format: "mp3",
                    pitchRate: 0,
                    sampleRate: 24000,
                    speechRate: Math.round((speed - 1) * 100),
                  },
                  emotion && {
                    emotion: emotion.type,
                    emotionScale: emotion.scale,
                  },
                ),
              };
              return S.w(s);
            })(e),
            {
              params: this._getRequestParams(),
            },
          );
          return a.TZ(
            ((e) => {
              var { data } = S.o(e.data);
              return data;
            })(t),
          );
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: v.X.DEFAULT,
      path,
    });
  }
  _getRequestParams() {
    return m.d({
      babiParam: g.OC({
        scenario: "audio_generation",
        featureKey: "text_to_speech",
        featureEntranceDetail: "".concat(p.F(), "-text_to_speech"),
        editType: "tool",
        toolId: f.M.AudioGeneration,
      }),
    });
  }
  constructor(e) {
    this._httpApiSettingService = e;
  }
}
b = r.Cg(
  [
    r.Qj(0, v.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [v.r === undefined ? Object : v.r]),
  ],
  b,
);
export class F {
  performTextToSpeech(e) {
    return this._textToSpeechRepository.performTextToSpeech(e);
  }
  constructor(e) {
    this._containerService = e;
    this._textToSpeechRepository = this._containerService.createInstance(b);
  }
}
F = r.Cg(
  [
    r.Qj(0, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  F,
);
