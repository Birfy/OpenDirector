import r from "NY";
import o from "QWK";
import n from "yI";
import a from "FAB";
import s from "R3";
import c from "o7";
import l from "K8";
import u from "aEB";
import d from "Kt";
import h from "Qxy";
import v from "rGr";
import { s as s_1 } from "./module-jLS.js";
import p from "dw4";
import m from "Qey";
import g from "b3";
class f {
  get isTextEmpty() {
    return !this.text.trim();
  }
  get textValidationResult() {
    const {
      metadata: { maxTextLength },
    } = this._textToSpeechManager;
    return g.f(this.text, {
      allowEmpty: true,
      maxLength: maxTextLength,
      maxLengthExceededErrorMessage: m.Ay.t(
        "web_avatar_toast_talking_content_length_limit",
        {
          number0: maxTextLength,
        },
        "说话内容达到 {number0} 字上限",
      ),
    });
  }
  setData(e) {
    const { text } = e;
    this.text = text;
  }
  setText(e) {
    this.text = e;
  }
  constructor(e) {
    this._textToSpeechManager = e;
    this.text = "";
    p.l_(this);
  }
}
class y {
  setMaxTextLength(e) {
    this.maxTextLength = e;
  }
  constructor() {
    this.maxTextLength = 0;
    p.l_(this);
  }
}
export class W extends c.jG {
  get metadata() {
    return this._textToSpeechMetadataStore;
  }
  get data() {
    return this._textToSpeechDataStore;
  }
  setData(e) {
    const { switchToTextToSpeech } = this._voiceManager;
    this._textToSpeechDataStore.setData(e);
    switchToTextToSpeech(this);
  }
  setMaxTextLength(e) {
    this._textToSpeechMetadataStore.setMaxTextLength(e);
  }
  _loadSpeechAudio() {
    this._voiceManager.loadSpeechAudio();
  }
  constructor(e, t, i, o, c) {
    super();
    u = this;
    this._voiceManager = e;
    this._options = t;
    this._containerService = i;
    this._textToSpeechDataService = o;
    this._notificationService = c;
    this._speechAudioResourceCache = new s.q(h.wy);
    this._audioResourceParamsMap = new WeakMap();
    this._textToSpeechMetadataStore = new y();
    this._textToSpeechDataStore = new f(this);
    this.updateText = (e) => {
      if (e !== this._textToSpeechDataStore.text) {
        this._textToSpeechDataStore.setText(e);
        this._voiceManager.disposeSpeechAudio();
        this._loadSpeechAudio();
      }
    };
    this.fetchSpeechAudioResource = (e) =>
      r._(function* () {
        let t;
        const { voice, speed, emotion } = e;
        const { preferVoiceAudio } = u._options;
        if (preferVoiceAudio == null ? undefined : preferVoiceAudio()) {
          const s = u._voiceManager.getVoiceAudioResource(voice);
          if (s) {
            return l.TZ(s);
          }
        }
        const { text, textValidationResult } = u._textToSpeechDataStore;
        if (!textValidationResult.ok) {
          u._notificationService.warning(textValidationResult.msg);
          return textValidationResult;
        }
        const { fallbackText, getSpeechText } = u._options;
        const m = {
          text:
            (t =
              getSpeechText == null
                ? undefined
                : getSpeechText(text, fallbackText)) != null
              ? t
              : text.trim() || fallbackText,
          voice,
          speed,
          emotion,
        };
        const g = JSON.stringify(m);
        const f = u._speechAudioResourceCache.get(g);
        if (f) {
          return f;
        }
        const { promise, resolve } = Promise.withResolvers();
        u._speechAudioResourceCache.put(g, promise);
        const C = yield u._textToSpeechDataService.performTextToSpeech(m);
        if (!C.ok) {
          const { code } = C;
          const V = code in h.Yl ? code : h.Yf.ServiceError;
          u._notificationService.warning(h.Yl[V]);
          u._speechAudioResourceCache.remove(g);
          resolve(C);
          return promise;
        }
        const file = new File(
          [a.z(C.value, h.rX)],
          "".concat(voice.name, ".mp3"),
          {
            type: h.rX,
          },
        );
        const T = u._containerService.createInstance(v.e, {
          file,
        });
        u._audioResourceParamsMap.set(T, m);
        resolve(l.TZ(T));
        return promise;
      })();
    this.isUsingFallbackText = (e) => {
      var t = this._audioResourceParamsMap.get(e);
      var { fallbackText } = this._options;
      return (t == null ? undefined : t.text) === fallbackText;
    };
    var u;
    var { maxTextLength } = this._options;
    if (typeof maxTextLength === "number") {
      this.setMaxTextLength(maxTextLength);
    }
    this._loadSpeechAudio = n.A(this._loadSpeechAudio, h.j2, {
      leading: true,
      trailing: true,
    });
  }
}
W = o.Cg(
  [
    o.Qj(2, d._),
    o.Qj(3, s_1),
    o.Qj(4, u.Ot),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ContentGeneratorVoiceManager === "undefined"
        ? Object
        : ContentGeneratorVoiceManager,
      typeof ContentGeneratorTextToSpeechOptions === "undefined"
        ? Object
        : ContentGeneratorTextToSpeechOptions,
      d._ === undefined ? Object : d._,
      s_1 === undefined ? Object : s_1,
      u.Ot === undefined ? Object : u.Ot,
    ]),
  ],
  W,
);
