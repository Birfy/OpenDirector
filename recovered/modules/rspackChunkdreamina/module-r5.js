import n from "oa";
import r from "Ut";
import a from "Rb";
import o from "I3";
import s from "fg";
import l from "fm";
import { x } from "./module-TSS_2.js";
import { f as f_1 } from "./module-KA.js";
import { W } from "./module-Uk.js";
import { a as a_1 } from "./module-Wqv.js";
import { r as r_1 } from "./module-SkF.js";
class p extends a_1 {
  constructor(e, t) {
    super(e, t);
    var i;
    var a;
    var instrumentalAbility_1;
    var songAbility_1;
    var textToSpeechAbility_1;
    var p;
    var f;
    if (
      (p = e.draft.findMainComponent()) instanceof r.DAAudioBaseComponent &&
      p.abilities
    ) {
      instrumentalAbility_1 = p.abilities.generateInstrumental;
      songAbility_1 = p.abilities.generateSong;
      textToSpeechAbility_1 = p.abilities.textToSpeech;
    }
    var { instrumentalAbility, songAbility, textToSpeechAbility } = {
      instrumentalAbility: instrumentalAbility_1,
      songAbility: songAbility_1,
      textToSpeechAbility: textToSpeechAbility_1,
    };
    this.instrumentalAbility = instrumentalAbility;
    this.songAbility = songAbility;
    this.textToSpeechAbility = textToSpeechAbility;
    this.prompt =
      (textToSpeechAbility == null ? undefined : textToSpeechAbility.mode) ===
      r.DAGenerateTTSMode.AudioSeparation
        ? (f = textToSpeechAbility.audioSeparationParam) == null
          ? undefined
          : f.prompt
        : e.wrapper.prompt;
    this.unifiedEditInput = f_1(e.draft, t.resources);
    this.sourceMaterial = x(e.draft, t.resources);
    this.resources = t.resources;
    this.failedItemList =
      (i = (a = t.failedItemList) == null ? undefined : a.map((e) => r_1(e))) !=
      null
        ? i
        : [];
    this.metricsExtra = ((e) => {
      const t = {
        promptSource: W.Custom,
        isAiLyric: false,
        lyricCnt: 0,
        isRandomInspiration: false,
        enterFrom: "click",
      };
      if (!e) {
        return t;
      }
      const i = o.j(e, t);
      return n._(
        {},
        t,
        Object.fromEntries(
          [
            "isAiLyric",
            "lyricCnt",
            "isRandomInspiration",
            "drawType",
            "enterFrom",
            "enterScenario",
            "impressionId",
            "isRegenerate",
            "promptSource",
            "replyMessageId",
            "searchId",
            "searchKeyword",
            "searchRequestId",
            "templateDuration",
            "templateFrom",
            "templateId",
            "templatePrompt",
            "templateStyleCode",
            "templateTypeId",
            "referenceTemplateCnt",
            "referenceTemplateId",
            "sceneOptions",
            "voiceId",
          ]
            .filter((e) => i[e] !== undefined)
            .map((e) => [e, i[e]]),
        ),
      );
    })(t.metricsExtra);
  }
}
export function N(e) {
  return new p(a.DMLAigcData.build(JSON.stringify(e)), s.o(e, l.Cb));
}
