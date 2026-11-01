import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DAVideoAudioEffectDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.videoResource = undefined;
    this.lastHistoryId = undefined;
    this.lastItemId = undefined;
  }
}
a.initMetadataFor(
  "class",
  DAVideoAudioEffectDraftReq,
  "DAVideoAudioEffectDraftReq",
  undefined,
  [n],
  "video_audio_draft_builder",
);
export class DAVideoAudioEffectDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t = new o.DAVideoAudioEffectAbility();
    t.originHistoryId = e.lastHistoryId;
    t.originItemId = e.lastItemId;
    t.videoResource = e.videoResource;
    t.videoRefParams = new o.DAVideoRefParam();
    let i = new o.DAVideoGenerateAbilities();
    i.videoAudioEffect = t;
    let r = new o.DAVideoBaseComponent();
    r.generateType = o.DAVideoGenerateType.videoAudioEffect;
    r.abilities = i;
    return r;
  }
}
