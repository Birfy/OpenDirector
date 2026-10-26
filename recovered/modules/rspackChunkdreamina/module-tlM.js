import * as o from "./module-Ut_2.js";
import r from "Edn";
import a from "uv";
import n from "gj";
import s from "Mx";
import d from "bKF";
import l from "u0";
import { IDADraftBuilder } from "./module-VTK.js";
import p from "Rd";
let u = p.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAAudioGenerateDraftReq extends p.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.generateType = n.AudioGenerateType.GenerateSong;
    this.prompt = undefined;
    this.duration = undefined;
    this.tags = undefined;
    this.title = undefined;
    this.lyrics = undefined;
    this.modelReqKey = undefined;
    this.refImage = undefined;
  }
}
p.initMetadataFor(
  "class",
  DAAudioGenerateDraftReq,
  "DAAudioGenerateDraftReq",
  undefined,
  [u],
  "audio_generate_draft_builder",
);
export class DAAudioGenerateDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i = new r.DAAudioBaseComponent();
    i.generateType = e.generateType;
    i.genType =
      (t = e.aigcGenType) != null ? t : this.defaultAigcGenType(e.generateType);
    i.abilities = this.createAudioGenerateAbilities(e);
    return i;
  }
  verifySelf(e, t) {
    if (e.componentList.length != 1) {
      t.appendError("Audio generation can only exist as the root node.");
    }
    return t;
  }
  createAudioGenerateAbilities(e) {
    let t;
    let i;
    let o = new a.DAAudioGenerateAbilities();
    switch (e.generateType) {
      case n.AudioGenerateType.GenerateSong: {
        let i = new l.DAGenerateSongAbility();
        i.prompt = e.prompt;
        i.duration = e.duration;
        i.tags = (t = e.tags) != null ? t : [];
        i.title = e.title;
        i.lyrics = e.lyrics;
        i.modelReqKey = e.modelReqKey;
        o.generateSong = i;
        break;
      }
      case n.AudioGenerateType.GenerateInstrumental: {
        let t = new d.DAGenerateInstrumentalAbility();
        t.prompt = e.prompt;
        t.duration = e.duration;
        t.title = e.title;
        o.generateInstrumental = t;
        break;
      }
      case n.AudioGenerateType.GenerateBackgroundMusic: {
        let t = new s.DAGenerateBackgroundMusicAbility();
        t.prompt = e.prompt;
        t.duration = e.duration;
        t.tags = (i = e.tags) != null ? i : [];
        t.refImage = e.refImage;
        o.generateBackgroundMusic = t;
      }
    }
    return o;
  }
  defaultAigcGenType(e) {
    switch (e) {
      case n.AudioGenerateType.GenerateSong:
        return o.DAAIGCGenerateType.text2Song;
      case n.AudioGenerateType.GenerateInstrumental:
        return o.DAAIGCGenerateType.text2Instrumental;
      case n.AudioGenerateType.GenerateTTS:
        return o.DAAIGCGenerateType.audioTTS;
      default:
        return o.DAAIGCGenerateType.none;
    }
  }
}
