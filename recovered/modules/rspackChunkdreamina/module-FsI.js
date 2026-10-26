import * as o from "./module-Ut_2.js";
import { IDADraftBuilder } from "./module-VTK.js";
import a from "Rd";
let n = a.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
export class DALipSyncDraftReq extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.aigcGenType = undefined;
    this.aigcMode = undefined;
    this.metaData = undefined;
    this.refInfo = undefined;
    this.localMockData = undefined;
    this.lipSyncInfo = undefined;
    this.seed = undefined;
    this.video = undefined;
    this.image = undefined;
    this.audio = undefined;
  }
}
a.initMetadataFor(
  "class",
  DALipSyncDraftReq,
  "DALipSyncDraftReq",
  undefined,
  [n],
  "lip_sync_draft_builder",
);
export class DALipSyncInfo extends a.RTSDataClass {
  constructor() {
    super(...arguments);
    this.ttsContent = undefined;
    this.ttsToneEffectId = undefined;
    this.ttsToneResourceId = undefined;
    this.ttsToneName = undefined;
    this.referenceType = undefined;
    this.mode = undefined;
    this.supportedModes = undefined;
    this.faceImage = undefined;
    this.videoEffectAudio = undefined;
    this.prompt = undefined;
    this.modelReqKey = undefined;
    this.selectedFace = undefined;
    this.beforeSilenceMillisecond = undefined;
    this.afterSilenceMillisecond = undefined;
  }
}
export class DALipSyncDraftBuilder extends IDADraftBuilder {
  createComponent(e) {
    let t;
    let i;
    i = new o.DALipSyncAbility();
    if (e.lipSyncInfo != undefined) {
      i.ttsContent = e.lipSyncInfo.ttsContent;
      i.audioEffectId = e.lipSyncInfo.ttsToneEffectId;
      i.audioResourceId = e.lipSyncInfo.ttsToneResourceId;
      i.audioToneId = e.lipSyncInfo.ttsToneName;
      i.referenceType =
        (t = e.lipSyncInfo.referenceType) != null
          ? t
          : o.DALipSyncReferenceType.unknown;
      i.mode = e.lipSyncInfo.mode;
      i.supportedModes = e.lipSyncInfo.supportedModes;
      i.faceImage = e.lipSyncInfo.faceImage;
      i.videoEffectAudio = e.lipSyncInfo.videoEffectAudio;
      i.seed = e.seed;
      i.video = e.video;
      i.image = e.image;
      i.audio = e.audio;
      i.prompt = e.lipSyncInfo.prompt;
      i.modelReqKey = e.lipSyncInfo.modelReqKey;
      i.selectedFace = e.lipSyncInfo.selectedFace;
      i.beforeSilenceMillisecond = e.lipSyncInfo.beforeSilenceMillisecond;
      i.afterSilenceMillisecond = e.lipSyncInfo.afterSilenceMillisecond;
      i.videoRefParams = new o.DAVideoRefParam();
    }
    let r = i;
    let a = new o.DAVideoGenerateAbilities();
    a.lipSync = r;
    let n = new o.DAVideoBaseComponent();
    n.generateType = o.DAVideoGenerateType.lipSync;
    n.abilities = a;
    return n;
  }
}
