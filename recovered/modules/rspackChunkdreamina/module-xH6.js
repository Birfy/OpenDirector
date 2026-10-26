import o from "Ut";
import s from "VH";
let r;
let n;
r = {};
r[(r.Type = 1)] = "Type";
r[(r.Size = 2)] = "Size";
r[(r.Ratio = 3)] = "Ratio";
r[(r.Width = 4)] = "Width";
r[(r.Height = 5)] = "Height";
r[(r.Unknown = 6)] = "Unknown";
r[(r.TotalPixels = 7)] = "TotalPixels";
export var Mi = r;
n = {};
n[(n.ByteEdit = o.DABlendAbilityName.ByteEdit)] = "ByteEdit";
n[(n.FaceGan = o.DABlendAbilityName.FaceGan)] = "FaceGan";
n[(n.BgPaint = o.DABlendAbilityName.BgPaint)] = "BgPaint";
n[(n.IpKeep = o.DABlendAbilityName.IpKeep)] = "IpKeep";
n[(n.Unknown = o.DABlendAbilityName.Unknown)] = "Unknown";
n[(n.ControlNet = o.DABlendAbilityName.ControlNet)] = "ControlNet";
n[(n.ControlNetCanny = s._.Canny)] = "ControlNetCanny";
n[(n.ControlNetDepth = s._.Depth)] = "ControlNetDepth";
n[(n.ControlNetPose = s._.Pose)] = "ControlNetPose";
n[(n.StyleReference = o.DABlendAbilityName.StyleReference)] = "StyleReference";
n[(n.StyleCode = o.DABlendAbilityName.StyleCode)] = "StyleCode";
n[(n.T2I = o.DABlendAbilityName.T2I)] = "T2I";
n[(n.I2I = o.DABlendAbilityName.I2I)] = "I2I";
export var gP = n;
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
