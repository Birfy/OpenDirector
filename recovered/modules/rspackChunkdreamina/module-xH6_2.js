import o from "Ut";
import l from "VH";
let i;
let r;
i = {};
i[(i.Type = 1)] = "Type";
i[(i.Size = 2)] = "Size";
i[(i.Ratio = 3)] = "Ratio";
i[(i.Width = 4)] = "Width";
i[(i.Height = 5)] = "Height";
i[(i.Unknown = 6)] = "Unknown";
i[(i.TotalPixels = 7)] = "TotalPixels";
export var Mi = i;
r = {};
r[(r.ByteEdit = o.DABlendAbilityName.ByteEdit)] = "ByteEdit";
r[(r.FaceGan = o.DABlendAbilityName.FaceGan)] = "FaceGan";
r[(r.BgPaint = o.DABlendAbilityName.BgPaint)] = "BgPaint";
r[(r.IpKeep = o.DABlendAbilityName.IpKeep)] = "IpKeep";
r[(r.Unknown = o.DABlendAbilityName.Unknown)] = "Unknown";
r[(r.ControlNet = o.DABlendAbilityName.ControlNet)] = "ControlNet";
r[(r.ControlNetCanny = l._.Canny)] = "ControlNetCanny";
r[(r.ControlNetDepth = l._.Depth)] = "ControlNetDepth";
r[(r.ControlNetPose = l._.Pose)] = "ControlNetPose";
r[(r.StyleReference = o.DABlendAbilityName.StyleReference)] = "StyleReference";
r[(r.StyleCode = o.DABlendAbilityName.StyleCode)] = "StyleCode";
r[(r.T2I = o.DABlendAbilityName.T2I)] = "T2I";
r[(r.I2I = o.DABlendAbilityName.I2I)] = "I2I";
export var gP = r;
export var Gj = {
  Success: "success",
  Cancelled: "cancelled",
  Empty: "empty",
  DownloadImageError: "downloadImageError",
  FacePredictError: "facePredictError",
  NoSegmentObjectFoundError: "noSegmentObjectFoundError",
  SegmentFailedError: "segmentFailedError",
  NetworkError: "networkError",
  PoseDetectError: "poseDetectError",
  SafetyCheckError: "safetyCheckError",
  IpKeepMultipySubject: "ipKeepMultipySubject",
  IpKeepNoSubject: "ipKeepNoSubject",
  ImageIPIsBlocked: "imageIpIsBlocked",
  Timeout: "timeout",
  Failed: "failed",
};
