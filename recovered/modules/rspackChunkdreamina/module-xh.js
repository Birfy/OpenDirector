import o from "pz";
import { currentDreaminaAgreementVersion } from "./module-GH.js";
export class MinFeatures {}
MinFeatures.AIGC_Image_GenerationParams = "AIGC_Image_GenerationParams";
MinFeatures.AIGC_GenerateType_inPaintingAndOutPainting =
  "AIGC_GenerateType_inPaintingAndOutPainting";
MinFeatures.AIGC_BlendAbility_twoFace = "AIGC_BlendAbility_twoFace";
MinFeatures.AIGC_GenerateType_AI_Effect = "AIGC_GenerateType_AI_Effect";
MinFeatures.AIGC_GenerateType_byteEditPainting =
  "AIGC_GenerateType_byteEditPainting";
MinFeatures.AIGC_GenerateType_byteEditPainting_v2 =
  "AIGC_GenerateType_byteEditPainting_v2";
MinFeatures.AIGC_BlendAbility_multiStyleReference =
  "AIGC_BlendAbility_multiStyleReference";
MinFeatures.AIGC_BlendAbility_styleCode = "AIGC_BlendAbility_styleCode";
MinFeatures.AIGC_LipSync_PostEdit = "AIGC_LipSync_PostEdit";
MinFeatures.AIGC_BlendAbility_mixIpKeepByteEdit =
  "AIGC_BlendAbility_mixIpKeepByteEdit";
MinFeatures.AIGC_GenerateType_VideoInsertFrame =
  "AIGC_GenerateType_VideoInsertFrame";
MinFeatures.AIGC_GenerateType_VideoSuperResolution =
  "AIGC_GenerateType_VideoSuperResolution";
MinFeatures.AIGC_GenerateType_LipSyncPersonalTone =
  "AIGC_GenerateType_LipSyncPersonalTone";
MinFeatures.AIGC_GenerateType_LipSyncToneEmotion =
  "AIGC_GenerateType_LipSyncToneEmotion";
MinFeatures.AIGC_GenerateType_AudioBaseComponent =
  "AIGC_GenerateType_AudioBaseComponent";
MinFeatures.AIGC_GenerateType_Text2SongSupportModel =
  "AIGC_GenerateType_Text2SongSupportModel";
MinFeatures.AIGC_GenerateType_ProHD = "AIGC_GenerateType_ProHD";
MinFeatures.AIGC_GenerateType_VideoMultiFrame =
  "AIGC_GenerateType_VideoMultiFrame";
MinFeatures.AIGC_GenerateType_VideoIdipFrame =
  "AIGC_GenerateType_VideoIdipFrame";
MinFeatures.AIGC_Ability_UnifiedGenerate = "AIGC_Ability_UnifiedGenerate";
MinFeatures.AIGC_Ability_ViewControl = "AIGC_GenerateType_ViewControl";
MinFeatures.AIGC_Ability_SmartEdit = "AIGC_GenerateType_SmartEdit";
MinFeatures.AIGC_Video_WorkFlow = "AIGC_Video_WorkFlow";
MinFeatures.AIGC_Video_SubtitleErase = "AIGC_Video_SubtitleErase";
MinFeatures.AIGC_Ability_removeBackground = "AIGC_Ability_removeBackground";
MinFeatures.AIGC_BlendAbility_cameraToolItemId =
  "AIGC_BlendAbility_cameraToolItemId";
MinFeatures.AIGC_GenerateType_VideoMultiFrame_v2 =
  "AIGC_GenerateType_VideoMultiFrame_v2";
MinFeatures.AIGC_Video_UnifiedEdit = "AIGC_Video_UnifiedEdit";
MinFeatures.AIGC_Image_BlendUnifiedEdit = "AIGC_Image_BlendUnifiedEdit";
MinFeatures.AIGC_UnifiedEditSubject = "AIGC_UnifiedEditSubject";
MinFeatures.AIGC_GenerateType_VideoSuperResolution2K4K =
  "AIGC_GenerateType_VideoSuperResolution2K4K";
MinFeatures.AIGC_UnifiedEditSubject_v2 = "AIGC_UnifiedEditSubject_v2";
MinFeatures.AIGC_GenerateType_VideoEdit = "AIGC_GenerateType_VideoEdit";
MinFeatures.AIGC_Video_Continuation = "AIGC_Video_Continuation";
MinFeatures.AIGC_Video_Seedance25ResultAction =
  "AIGC_Video_Seedance25ResultAction";
MinFeatures.AIGC_Video_WebLocalEditResultAction =
  "AIGC_Video_WebLocalEditResultAction";
MinFeatures.AIGC_GenerateType_LongVideo = "long_video";
export class ClientType {}
ClientType.ios = "ios";
ClientType.android = "android";
ClientType.web = "web";
export class SupportFeatureItem {
  constructor(e, t, i) {
    this.featureKey = e;
    this.clientSupportType = t;
    this.clientSupportVersion = i;
  }
}
export class SupportFeatures {
  static getSupportFeatures(e, t) {
    let i = [];
    for (let r = 0; r < SupportFeatures.supportFeatureList.length; r++) {
      let a = SupportFeatures.supportFeatureList[r];
      if (
        a.clientSupportType === e &&
        o.DAUtils.compareSemVersion(t, a.clientSupportVersion) >= 0
      ) {
        i.push(a.featureKey);
      }
    }
    return i;
  }
  static checkSupportAllFeature(e, t) {
    let i = SupportFeatures.getSupportFeatures(
      e,
      currentDreaminaAgreementVersion,
    );
    for (let e = 0; e < t.length; e++) {
      let o = t[e];
      if (i.indexOf(o) === -1) {
        return false;
      }
    }
    return true;
  }
}
SupportFeatures.supportFeatureList = [
  new SupportFeatureItem(
    MinFeatures.AIGC_Image_GenerationParams,
    "web",
    "3.3.32",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_inPaintingAndOutPainting,
    "web",
    "3.0.8",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_byteEditPainting,
    "web",
    "3.0.8",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_BlendAbility_twoFace, "web", "3.0.9"),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_twoFace,
    "android",
    "3.0.9",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_BlendAbility_twoFace, "ios", "3.0.9"),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_AI_Effect,
    "android",
    "3.1.0",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_AI_Effect,
    "ios",
    "3.1.0",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_byteEditPainting,
    "android",
    "3.1.1",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_byteEditPainting,
    "ios",
    "3.1.1",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_byteEditPainting_v2,
    "android",
    "3.1.1",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_byteEditPainting_v2,
    "ios",
    "3.1.1",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_multiStyleReference,
    "web",
    "3.1.3",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_multiStyleReference,
    "android",
    "3.1.3",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_multiStyleReference,
    "ios",
    "3.1.3",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_styleCode,
    "web",
    "3.1.3",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_styleCode,
    "android",
    "3.1.3",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_styleCode,
    "ios",
    "3.1.3",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_LipSync_PostEdit, "ios", "3.1.2"),
  new SupportFeatureItem(MinFeatures.AIGC_LipSync_PostEdit, "android", "3.1.2"),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_mixIpKeepByteEdit,
    "ios",
    "3.1.9",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_mixIpKeepByteEdit,
    "android",
    "3.1.9",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_VideoInsertFrame,
    "web",
    "3.2.0",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_VideoSuperResolution,
    "web",
    "3.2.0",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_AudioBaseComponent,
    "web",
    "3.2.3",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_Text2SongSupportModel,
    "web",
    "3.3.20",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_Text2SongSupportModel,
    "android",
    "3.3.20",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_Text2SongSupportModel,
    "ios",
    "3.3.20",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_GenerateType_ProHD, "web", "3.2.8"),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_ProHD,
    "android",
    "3.3.6",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_GenerateType_ProHD, "ios", "3.3.6"),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_VideoMultiFrame,
    "web",
    "3.2.9",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_VideoIdipFrame,
    "web",
    "3.2.8",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_Ability_UnifiedGenerate,
    "web",
    "3.3.1",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_Ability_ViewControl, "web", "3.3.19"),
  new SupportFeatureItem(MinFeatures.AIGC_Ability_SmartEdit, "web", "3.3.21"),
  new SupportFeatureItem(MinFeatures.AIGC_Video_WorkFlow, "android", "3.3.2"),
  new SupportFeatureItem(MinFeatures.AIGC_Video_WorkFlow, "ios", "3.3.2"),
  new SupportFeatureItem(
    MinFeatures.AIGC_Ability_removeBackground,
    "ios",
    "3.3.4",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_Ability_removeBackground,
    "android",
    "3.3.4",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_cameraToolItemId,
    "ios",
    "3.3.4",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_BlendAbility_cameraToolItemId,
    "android",
    "3.3.4",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_VideoMultiFrame_v2,
    "web",
    "3.3.7",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_Video_UnifiedEdit, "web", "3.3.9"),
  new SupportFeatureItem(MinFeatures.AIGC_Video_SubtitleErase, "web", "3.3.29"),
  new SupportFeatureItem(
    MinFeatures.AIGC_Video_UnifiedEdit,
    "android",
    "3.3.18",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_Video_UnifiedEdit, "ios", "3.3.18"),
  new SupportFeatureItem(
    MinFeatures.AIGC_Image_BlendUnifiedEdit,
    "web",
    "3.3.11",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_UnifiedEditSubject, "web", "3.3.12"),
  new SupportFeatureItem(
    MinFeatures.AIGC_UnifiedEditSubject_v2,
    "web",
    "3.3.16",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_VideoSuperResolution2K4K,
    "web",
    "3.3.15",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_VideoEdit,
    "web",
    "3.3.21",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_VideoEdit,
    "android",
    "3.3.21",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_Video_WebLocalEditResultAction,
    "web",
    "3.3.21",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_Video_Continuation, "web", "3.3.21"),
  new SupportFeatureItem(
    MinFeatures.AIGC_Video_Continuation,
    "android",
    "3.3.21",
  ),
  new SupportFeatureItem(MinFeatures.AIGC_Video_Continuation, "ios", "3.3.21"),
  new SupportFeatureItem(
    MinFeatures.AIGC_Video_Seedance25ResultAction,
    "android",
    "3.3.21",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_Video_Seedance25ResultAction,
    "ios",
    "3.3.21",
  ),
  new SupportFeatureItem(
    MinFeatures.AIGC_GenerateType_LongVideo,
    "web",
    "3.3.21",
  ),
];
