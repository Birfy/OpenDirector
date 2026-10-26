import { U } from "./module-Q0r.js";
import { G } from "./module-zp5.js";
import o from "Ut";
import l from "M8X";
import d from "nss";
import { G as G_1 } from "./module-vq_2.js";
import s from "Rb";
import { X } from "./module-LwL.js";
import m from "yMd";
import v from "H26";
import p from "Hd";
import f from "SI";
function r() {
  for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) {
    t[i] = arguments[i];
  }
  return t.find((e) => !!(e == null ? undefined : e.trim()));
}
export var i = {
  getAgentContextParams: function (e) {
    let t;
    return {
      isAgentMode: +!!U(e),
      conversationId:
        (t = e.agenticMetricsExtra) == null ? undefined : t.conversationId,
    };
  },
  getMusicLyricParams: function (e) {
    let t;
    let i;
    let a;
    let o;
    let l;
    let d;
    let u;
    let s;
    const c =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const m = c.itemId
      ? e.itemList.find((e) => {
          var { id } = e;
          return id === c.itemId;
        })
      : e.itemList[0];
    const lyric =
      (s = r(
        r(
          m == null ? undefined : m.lyrics,
          m == null || (i = m.audio) == null || (t = i.originAudio) == null
            ? undefined
            : t.lyrics,
        ),
        (
          (u =
            (d =
              (a = m == null ? undefined : m.captions) != null
                ? a
                : m == null ||
                    (l = m.audio) == null ||
                    (o = l.originAudio) == null
                  ? undefined
                  : o.captions) == null
              ? undefined
              : d
                  .map((e) => {
                    var { text } = e;
                    return text;
                  })
                  .filter(Boolean)
                  .join("\n")) == null
            ? undefined
            : u.trim()
        )
          ? u
          : undefined,
        c.allowAbilityLyricFallback === false
          ? undefined
          : ((e) => {
              let t;
              const { lyrics } = (t = e.songAbility) != null ? t : {};
              if (lyrics) {
                const a = G(lyrics)
                  .map((e) => {
                    var { content } = e;
                    return content;
                  })
                  .filter(Boolean)
                  .join("\n");
                if (a.trim()) {
                  return a;
                }
                return undefined;
              }
            })(e),
      )) != null
        ? s
        : "";
    return {
      lyric,
      lyricCnt: lyric.length,
    };
  },
  setAudioFunctionModeParams: function (e, t) {
    const { textToSpeechAbility } = t;
    if (textToSpeechAbility) {
      const a = (() => {
        switch (textToSpeechAbility.mode) {
          case o.DAGenerateTTSMode.UnifiedEdit:
            return "omni_dubbing";
          case o.DAGenerateTTSMode.AudioSeparation:
            return "voice_separate";
          case o.DAGenerateTTSMode.TTS:
            return "text_reading";
          default:
            return;
        }
      })();
      if (a) {
        const n = {};
        n.functionMode = a;
        e.setParams(n);
      }
    }
  },
  setAudioModelParams: function (e, t, i) {
    let a;
    let n;
    let r;
    const o = (a = t.textToSpeechAbility) == null ? undefined : a.modelReqKey;
    if (o) {
      const u = {};
      u.modelKey = o;
      u.modelName =
        (r = l.cQ(i, d.Y).getInstanceSync()) == null ||
        (n = r.getAudioModelConfig(o)) == null
          ? undefined
          : n.name;
      e.setParams(u);
    }
  },
  setAudioPromptParams: function (e, t) {
    let i;
    let a;
    let n;
    let r;
    const { textToSpeechAbility } = t;
    if (textToSpeechAbility) {
      switch (textToSpeechAbility.mode) {
        case o.DAGenerateTTSMode.UnifiedEdit:
          n = t.unifiedEditInput
            ? G_1(t.unifiedEditInput)
            : textToSpeechAbility.text;
          break;
        case o.DAGenerateTTSMode.AudioSeparation:
          n =
            (r = textToSpeechAbility.audioSeparationParam) == null
              ? undefined
              : r.prompt;
          break;
        case o.DAGenerateTTSMode.TTS:
          n = textToSpeechAbility.text;
          break;
        default:
          return;
      }
      const d = {};
      d.prompt = n;
      d.promptSource =
        ((i = t.agenticMetricsExtra) == null ? undefined : i.promptSource) ||
        ((a = t.metricsExtra) == null ? undefined : a.promptSource) ||
        "custom";
      e.setParams(d);
    }
  },
  setGenerateSourceParams: function (e, t) {
    let i;
    let a;
    const n = {};
    n.actionType = ((i = t.metricsExtra) == null ? undefined : i.isRegenerate)
      ? "regenerate"
      : "generate";
    n.isRandomInspiration = +(
      (a = t.metricsExtra) != null && !!a.isRandomInspiration
    );
    e.setParams(n);
  },
  setIdentifierParams: function (e, t, i) {
    const a = {};
    a.submitId = t.uniqueKey;
    a.musicId =
      t.statusModel.recordStatus === s.DMLGenRecordStatus.Succeed
        ? i
        : undefined;
    e.setParams(a);
  },
  setLyricsParams: function (e, t) {
    let i;
    let a;
    let n;
    const r = {};
    r.lyric = X(t);
    r.lyricCnt =
      (i = (a = t.metricsExtra) == null ? undefined : a.lyricCnt) != null
        ? i
        : 0;
    r.isAiLyric = +((n = t.metricsExtra) != null && !!n.isAiLyric);
    e.setParams(r);
  },
  setMusicContentParams: function (e, t, i) {
    let a;
    let n;
    let r;
    const o = {};
    o.musicType = t.generateType === m.ce.Text2Song ? "vocal" : "pure_music";
    const l =
      (r = t.itemList.find((e) => e.id === i)) == null || (n = r.audio) == null
        ? undefined
        : n.originAudio;
    const d = (a = l == null ? undefined : l.durationMs) != null ? a : 0;
    if (d) {
      o.musicDuration = d;
    }
    e.setParams(o);
  },
  setMusicDurationParams: function (e, t, i) {
    if (p.N(t.generateType)) {
      let a;
      let n;
      let r;
      let o;
      let l;
      const d = i
        ? t.itemList.find((e) => {
            var { id } = e;
            return id === i;
          })
        : t.itemList[0];
      const u =
        (r = (a = t.songAbility) != null ? a : t.instrumentalAbility) == null
          ? undefined
          : r.duration;
      const s = {};
      s.musicDuration =
        (n =
          d == null || (l = d.audio) == null || (o = l.originAudio) == null
            ? undefined
            : o.durationMs) != null
          ? n
          : typeof u === "number"
            ? u * v.K
            : undefined;
      e.setParams(s);
    }
  },
  setMusicModelParams: function (e, t, i) {
    if (p.N(t.generateType)) {
      let a;
      let n;
      const { modelReqKey } = (a = t.songAbility) != null ? a : {};
      const o = (modelReqKey == null ? undefined : modelReqKey.trim())
        ? modelReqKey
        : undefined;
      const u = o
        ? (n = l.cQ(i, d.Y).getInstanceSync()) == null
          ? undefined
          : n.getAudioModelConfig(o)
        : undefined;
      const s = {};
      s.modelKey = o;
      s.modelName = u == null ? undefined : u.name;
      e.setParams(s);
    }
  },
  setMusicPromptParams: function (e, t) {
    if (p.N(t.generateType)) {
      let i;
      let a;
      let n;
      let r;
      let o;
      let l;
      const d =
        (i =
          (a = (r = t.songAbility) == null ? undefined : r.prompt) != null
            ? a
            : (o = t.instrumentalAbility) == null
              ? undefined
              : o.prompt) != null
          ? i
          : "";
      const u = {};
      u.prompt = d;
      u.promptCnt = d.length;
      u.promptSource =
        (n = (l = t.metricsExtra) == null ? undefined : l.promptSource) != null
          ? n
          : "custom";
      e.setParams(u);
    }
  },
  setStyleParams: function (e, t) {
    let i;
    const a = {};
    if (
      t.generateType === m.ce.Text2Song &&
      ((i = t.songAbility) == null ? undefined : i.tags)
    ) {
      a.musicStyle = JSON.stringify(
        t.songAbility.tags.map((e) => ({
          type: e.type,
          key: e.key,
        })),
      );
    }
    e.setParams(a);
  },
  setTextToSpeechParams: function (e, t) {
    const { textToSpeechAbility } = t;
    if (textToSpeechAbility) {
      let a;
      let n;
      const r = {};
      r.scriptCnt = textToSpeechAbility.text.length;
      if (textToSpeechAbility.mode === o.DAGenerateTTSMode.TTS) {
        r.isVoiceClone = +(
          ((a = textToSpeechAbility.idInfo) == null
            ? undefined
            : a.itemPlatform) === o.CommonItemPlatform.Local
        );
        if (r.isVoiceClone === 0) {
          r.voiceId =
            (n = textToSpeechAbility.idInfo) == null ? undefined : n.id;
          r.voiceKey = textToSpeechAbility.voiceName;
        }
      }
      e.setParams(r);
    }
  },
  setUserSubscribeParams: function (e, t) {
    let i;
    const a = {};
    const n = (i = t.getInstanceSync()) == null ? undefined : i.vipService;
    if (n) {
      a.isVip = +!!n.isVip;
      a.userSubscribeType = f.PR[n.currentVipLevel];
    }
    e.setParams(a);
  },
};
