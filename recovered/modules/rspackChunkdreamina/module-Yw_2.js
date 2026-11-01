import n from "./module-Rd.js";
let o;
export var DAToServerFlowErrorCode;
const a =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
o = DAToServerFlowErrorCode || (DAToServerFlowErrorCode = {});
o[(o.NoError = 0)] = "NoError";
o[(o.UnknownError = -1)] = "UnknownError";
o[(o.DraftUpgradeError = -2)] = "DraftUpgradeError";
o[(o.ComponentUnsupport = -100)] = "ComponentUnsupport";
o[(o.ComponentMainIdNull = -101)] = "ComponentMainIdNull";
o[(o.FlowNodeUnsupport = -200)] = "FlowNodeUnsupport";
o[(o.AIGCModeUnsupport = -201)] = "AIGCModeUnsupport";
o[(o.ImgResSourceFromUnsupport = -300)] = "ImgResSourceFromUnsupport";
o[(o.VideoResSourceFromUnsupport = -301)] = "VideoResSourceFromUnsupport";
o[(o.AudioResSourceFromUnsupport = -302)] = "AudioResSourceFromUnsupport";
o[(o.ConvertTextInputWidgetNull = -400)] = "ConvertTextInputWidgetNull";
o[(o.ConvertTextInputWidgetInvalidType = -401)] =
  "ConvertTextInputWidgetInvalidType";
o[(o.ConvertImageInputWidgetNull = -500)] = "ConvertImageInputWidgetNull";
o[(o.ConvertImageInputWidgetInvalidType = -501)] =
  "ConvertImageInputWidgetInvalidType";
o[(o.ConvertTextGenerateWidgetNull = -600)] = "ConvertTextGenerateWidgetNull";
o[(o.ConvertTextGenerateWidgetInvalidType = -601)] =
  "ConvertTextGenerateWidgetInvalidType";
o[(o.ConvertImageToTextWidgetNull = -700)] = "ConvertImageToTextWidgetNull";
o[(o.ConvertImageToTextWidgetInvalidType = -701)] =
  "ConvertImageToTextWidgetInvalidType";
o[(o.ConvertImageToTextWidgetInvalidInput = -702)] =
  "ConvertImageToTextWidgetInvalidInput";
o[(o.ConvertImageGenerateWidgetNull = -800)] = "ConvertImageGenerateWidgetNull";
o[(o.ConvertImageGenerateWidgetInvalidType = -801)] =
  "ConvertImageGenerateWidgetInvalidType";
o[(o.ConvertImageGenerateControNetTypeUnsupport = -802)] =
  "ConvertImageGenerateControNetTypeUnsupport";
o[(o.ConvertStyleReferenceWidgetNull = -900)] =
  "ConvertStyleReferenceWidgetNull";
o[(o.ConvertStyleReferenceWidgetInvalidType = -901)] =
  "ConvertStyleReferenceWidgetInvalidType";
o[(o.ConvertStyleReferenceWidgetInvalidInput = -902)] =
  "ConvertStyleReferenceWidgetInvalidInput";
o[(o.ConvertFaceSwapWidgetNull = -1000)] = "ConvertFaceSwapWidgetNull";
o[(o.ConvertFaceSwapWidgetInvalidType = -1001)] =
  "ConvertFaceSwapWidgetInvalidType";
o[(o.ConvertFaceSwapWidgetInvalidInput = -1002)] =
  "ConvertFaceSwapWidgetInvalidInput";
o[(o.ConvertVideoGenrateWidgetNull = -1100)] = "ConvertVideoGenrateWidgetNull";
o[(o.ConvertVideoGenrateWidgetInvalidType = -1101)] =
  "ConvertVideoGenrateWidgetInvalidType";
o[(o.ConvertLivePhotoWidgetNull = -1200)] = "ConvertLivePhotoWidgetNull";
o[(o.ConvertLivePhotoWidgetInvalidType = -1201)] =
  "ConvertLivePhotoWidgetInvalidType";
o[(o.ConvertLivePhotoWidgetInvalidInput = -1202)] =
  "ConvertLivePhotoWidgetInvalidInput";
o[(o.VideoBaseComponentGenerateTypeUnsupport = -1300)] =
  "VideoBaseComponentGenerateTypeUnsupport";
o[(o.VideoBaseComponentWithoutAbilities = -1301)] =
  "VideoBaseComponentWithoutAbilities";
o[(o.VideoBaseComponentWithoutLipSync = -1302)] =
  "VideoBaseComponentWithoutLipSync";
o[(o.VideoBaseComponentWithoutGenVideo = -1303)] =
  "VideoBaseComponentWithoutGenVideo";
o[(o.VideoBaseComponentWithoutVideoAudioEffect = -1304)] =
  "VideoBaseComponentWithoutVideoAudioEffect";
o[(o.VideoBaseComponentWithoutVideoBGM = -1305)] =
  "VideoBaseComponentWithoutVideoBGM";
o[(o.VideoBaseComponentWithoutWorkflow = -1306)] =
  "VideoBaseComponentWithoutWorkflow";
o[(o.VideoBaseComponentWorkflowWithoutTemplateId = -1307)] =
  "VideoBaseComponentWorkflowWithoutTemplateId";
o[(o.VideoBaseComponentWorkflowWithoutImageList = -1308)] =
  "VideoBaseComponentWorkflowWithoutImageList";
o[(o.VideoBaseComponentWithoutMergeVideo = -1309)] =
  "VideoBaseComponentWithoutMergeVideo";
o[(o.VideoBaseComponentLipSyncRefTypeUnsupport = -1401)] =
  "VideoBaseComponentLipSyncRefTypeUnsupport";
o[(o.VideoBaseComponentLipSyncVideoWithoutVideo = -1402)] =
  "VideoBaseComponentLipSyncVideoWithoutVideo";
o[(o.VideoBaseComponentLipSyncVideoWithoutAudio = -1403)] =
  "VideoBaseComponentLipSyncVideoWithoutAudio";
o[(o.VideoBaseComponentLipSyncImageWithoutImage = -1404)] =
  "VideoBaseComponentLipSyncImageWithoutImage";
o[(o.VideoBaseComponentLipSyncImageWithoutAudio = -1405)] =
  "VideoBaseComponentLipSyncImageWithoutAudio";
o[(o.AudioBaseComponentGenerateTypeUnsupport = -1501)] =
  "AudioBaseComponentGenerateTypeUnsupport";
o[(o.AudioBaseConponentAudioTypeUnsupport = -1502)] =
  "AudioBaseConponentAudioTypeUnsupport";
o[(o.ConvertVideoInputWidgetNull = -1600)] = "ConvertVideoInputWidgetNull";
o[(o.ConvertVideoInputWidgetInvalidType = -1601)] =
  "ConvertVideoInputWidgetInvalidType";
o[(o.ConvertLipSyncWidgetNull = -1700)] = "ConvertLipSyncWidgetNull";
o[(o.ConvertLipSyncWidgetInvalidType = -1701)] =
  "ConvertLipSyncWidgetInvalidType";
o[(o.ConvertLipSyncWidgetRefTypeUnsupport = -1702)] =
  "ConvertLipSyncWidgetRefTypeUnsupport";
o[(o.ConvertLipSyncWidgetInvalidReferImageSource = -1703)] =
  "ConvertLipSyncWidgetInvalidReferImageSource";
o[(o.ConvertLipSyncWidgetInvalidReferVideoSource = -1704)] =
  "ConvertLipSyncWidgetInvalidReferVideoSource";
o[(o.ConvertLipSyncWidgetInvalidAudio = -1705)] =
  "ConvertLipSyncWidgetInvalidAudio";
o[(o.ImageBaseComponentGenerateTypeUnsupport = -1800)] =
  "ImageBaseComponentGenerateTypeUnsupport";
o[(o.ImageBaseComponentWithoutAbilities = -1801)] =
  "ImageBaseComponentWithoutAbilities";
o[(o.ImageBaseComponentWithoutGenerateReq = -1802)] =
  "ImageBaseComponentWithoutGenerateReq";
o[(o.ImageBaseComponentWithoutBlendReq = -1803)] =
  "ImageBaseComponentWithoutBlendReq";
o[(o.ImageBaseComponentWithoutMixBlendReq = -1804)] =
  "ImageBaseComponentWithoutMixBlendReq";
o[(o.ImageBaseComponentWithoutPaintingReq = -1805)] =
  "ImageBaseComponentWithoutPaintingReq";
o[(o.ImageBaseComponentWithoutSuperResolutionReq = -1806)] =
  "ImageBaseComponentWithoutSuperResolutionReq";
o[(o.ImageBaseComponentWithoutNormalHD = -1807)] =
  "ImageBaseComponentWithoutNormalHD";
o[(o.ImageBaseComponentWithoutProHDReq = -1808)] =
  "ImageBaseComponentWithoutProHDReq";
o[(o.ImageBaseComponentWithoutUnifiedGenerateReq = -1809)] =
  "ImageBaseComponentWithoutUnifiedGenerateReq";
o[(o.ImageBaseComponentWithoutUnifiedGenerateV2Req = -1810)] =
  "ImageBaseComponentWithoutUnifiedGenerateV2Req";
o[(o.AIEffectBaseComponentWithoutGenerate = -1901)] =
  "AIEffectBaseComponentWithoutGenerate";
o[(o.AIEffectBaseComponentWithoutEffectID = -1902)] =
  "AIEffectBaseComponentWithoutEffectID";
o[(o.AudioBaseComponentWithoutGenerateSong = -2001)] =
  "AudioBaseComponentWithoutGenerateSong";
o[(o.AudioBaseComponentWithoutGenerateInstrumental = -2002)] =
  "AudioBaseComponentWithoutGenerateInstrumental";
o[(o.AudioBaseComponentWithoutGenerateBackgroundMusic = -2003)] =
  "AudioBaseComponentWithoutGenerateBackgroundMusic";
o[(o.AudioBaseComponentWithoutTextToSpeech = -2004)] =
  "AudioBaseComponentWithoutTextToSpeech";
export class DAToServerFlowError extends n.Serializable {
  constructor(e, t) {
    super();
    this.code = e;
    this.message = t;
  }
}
a([n.serializable("code")], DAToServerFlowError.prototype, "code", undefined);
a(
  [n.serializable("message")],
  DAToServerFlowError.prototype,
  "message",
  undefined,
);
