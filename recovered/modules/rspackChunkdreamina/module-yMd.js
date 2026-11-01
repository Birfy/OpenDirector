let r;
let n;
let s;
let l;
let c;
let d;
let u;
let p;
let g;
let b;
let y;
let _;
let x;
let w;
let T;
let R;
let N;
let A;
let S;
let E;
let W;
let M;
let I;
let j;
let H;
r = {};
r[(r.Unknown = -1)] = "Unknown";
r[(r.Text2Image = 1)] = "Text2Image";
r[(r.SuperResolution = 2)] = "SuperResolution";
r[(r.FineTunePromptWithText2Image = 3)] = "FineTunePromptWithText2Image";
r[(r.FineTunePromptWithSuperResolution = 4)] =
  "FineTunePromptWithSuperResolution";
r[(r.Text2CreativeText = 5)] = "Text2CreativeText";
r[(r.SpecialEffect = 6)] = "SpecialEffect";
r[(r.InPaint = 7)] = "InPaint";
r[(r.OutPaint = 8)] = "OutPaint";
r[(r.InPaintRemove = 9)] = "InPaintRemove";
r[(r.Text2Video = 10)] = "Text2Video";
r[(r.Blend = 12)] = "Blend";
r[(r.SuperDefinition = 13)] = "SuperDefinition";
r[(r.Matting = 14)] = "Matting";
r[(r.Fusion = 15)] = "Fusion";
r[(r.VideoBGM = 16)] = "VideoBGM";
r[(r.AudioVideoMix = 17)] = "AudioVideoMix";
r[(r.InstaDrag = 18)] = "InstaDrag";
r[(r.Image2Avatar = 20)] = "Image2Avatar";
r[(r.Video2Avatar = 21)] = "Video2Avatar";
r[(r.Text2Song = 22)] = "Text2Song";
r[(r.Text2Instrumental = 23)] = "Text2Instrumental";
r[(r.LipSync = 24)] = "LipSync";
r[(r.InPaintAndOutPaint = 26)] = "InPaintAndOutPaint";
r[(r.ByteEditPainting = 27)] = "ByteEditPainting";
r[(r.EttaPainting = 28)] = "EttaPainting";
r[(r.VideoTemplate = 29)] = "VideoTemplate";
r[(r.AIEffectWorkImage = 30)] = "AIEffectWorkImage";
r[(r.AIEffectWorkVideo = 31)] = "AIEffectWorkVideo";
r[(r.VideoAudioEffect = 32)] = "VideoAudioEffect";
r[(r.VideoAudioEffectMix = 33)] = "VideoAudioEffectMix";
r[(r.ProHD = 35)] = "ProHD";
r[(r.CreationAgent = 36)] = "CreationAgent";
r[(r.Cutout = 38)] = "Cutout";
r[(r.AdjustImage = 39)] = "AdjustImage";
r[(r.TTSGenerateAudio = 44)] = "TTSGenerateAudio";
r[(r.CloudRenderVideo = 45)] = "CloudRenderVideo";
r[(r.Document = 46)] = "Document";
r[(r.GuiEditText = 51)] = "GuiEditText";
r[(r.ViewControl = 100)] = "ViewControl";
r[(r.SmartEdit = 101)] = "SmartEdit";
r[(r.VideoDubbing = 103)] = "VideoDubbing";
export var ce = r;
n = {};
n[(n.Unknown = -1)] = "Unknown";
n[(n.Init = 0)] = "Init";
n[(n.PreTnsCheckNotPass = 10)] = "PreTnsCheckNotPass";
n[(n.SubmitOk = 20)] = "SubmitOk";
n[(n.FinalGenerateFail = 30)] = "FinalGenerateFail";
n[(n.PostTnsCheckNotPass = 40)] = "PostTnsCheckNotPass";
n[(n.HistoryStatusThinking = 42)] = "HistoryStatusThinking";
n[(n.HistoryStatusPartialSuccess = 45)] = "HistoryStatusPartialSuccess";
n[(n.FinalSuccess = 50)] = "FinalSuccess";
n[(n.Deleted = 100)] = "Deleted";
export var ZA = n;
export var Dn = {
  Random: "random",
  Template: "template",
  Reedit: "custom",
  Custom: "custom",
  TemplateEdit: "template_edit",
  Regenerate: "regenerate",
  Clip: "clip",
  Default: "",
};
export var LB = {
  Home: "home",
  Explore: "explore",
  Community: "community",
  PersonalPage: "personal_page",
  OthersProfile: "others_profile",
  AIGCImage: "aigc_image",
  Message: "message",
  ActivityDetail: "activity_detail",
  WorkDetail: "entry_url",
  Default: "",
};
s = {};
s[(s.Unknown = 0)] = "Unknown";
s[(s.NoWatermark = 1)] = "NoWatermark";
s[(s.BusinessWatermark = 2)] = "BusinessWatermark";
s[(s.AIGCWatermark = 3)] = "AIGCWatermark";
s[(s.BusinessAIGCWatermark = 4)] = "BusinessAIGCWatermark";
s[(s.DouyinShareWatermark = 5)] = "DouyinShareWatermark";
s[(s.UserWatermark = 6)] = "UserWatermark";
s[(s.BusinessUserWatermark = 7)] = "BusinessUserWatermark";
s[(s.AIGCUserWatermark = 8)] = "AIGCUserWatermark";
s[(s.BusinessAIGCUserWatermark = 9)] = "BusinessAIGCUserWatermark";
export var aL = s;
l = {};
l[(l.Landscape = 1)] = "Landscape";
l[(l.Portrait = 2)] = "Portrait";
l[(l.Square = 3)] = "Square";
export var jl = l;
c = {};
c[(c.None = 0)] = "None";
c[(c.Like = 1)] = "Like";
c[(c.Unlike = 2)] = "Unlike";
export var gy = c;
d = {};
d[(d.Normal = 0)] = "Normal";
d[(d.Relax = 1)] = "Relax";
export var Hi = d;
u = {};
u[(u.Transcoding = 0)] = "Transcoding";
u[(u.Transcoded = 1)] = "Transcoded";
u[(u.Failed = 2)] = "Failed";
export var FU = u;
export var Jv = {
  LipSync: "lip_sync",
  InsertFrame: "insert_frame",
  VideoExtend: "video_extend",
  SuperResolution: "super_resolution",
  LipSyncImage: "lip_sync_image",
  LipSyncUserVideo: "lip_sync_user_video",
  VideoTemplate: "video_template",
  VideoBGM: "video_bgm",
  VideoAudioEffect: "video_audio_effect",
};
p = {};
p[(p.Pending = -1)] = "Pending";
p[(p.Ok = 200000)] = "Ok";
p[(p.InputInvalid = 201000)] = "InputInvalid";
p[(p.NoFace = 204001)] = "NoFace";
p[(p.FaceMouthOcclude = 204003)] = "FaceMouthOcclude";
p[(p.MultiFace = 204006)] = "MultiFace";
p[(p.InternalError = 200001)] = "InternalError";
p[(p.StarFaceAuditError = 100)] = "StarFaceAuditError";
export var QI = p;
export var KH = {
  StillShot: "Still",
  ZoomIn: "ZoomIn",
  ZoomOut: "ZoomOut",
  RotateClockwise: "RotateClockwise",
  RotateAnticlockwise: "RotateAnticlockwise",
  PanLeft: "PanLeft",
  PanRight: "PanRight",
  TiltUp: "TiltUp",
  TiltDown: "TiltDown",
  HorizontalLeft: "HorizontalLeft",
  HorizontalRight: "HorizontalRight",
  VerticalUp: "VerticalUp",
  VerticalDown: "VerticalDown",
  Default: "",
};
export var nJ = {
  Low: "Low",
  Moderate: "Moderate",
  High: "High",
};
g = {};
g[(g.Normal = 8)] = "Normal";
g[(g.Fluency = 12)] = "Fluency";
g[(g.Cinematic = 24)] = "Cinematic";
export var Bg = g;
export var $_ = {
  Low: "0",
  Moderate: "1",
  High: "2",
};
b = {};
b[(b.Second3 = 3000)] = "Second3";
b[(b.Second4 = 4000)] = "Second4";
b[(b.Second5 = 5000)] = "Second5";
b[(b.Second6 = 6000)] = "Second6";
b[(b.Second8 = 8000)] = "Second8";
b[(b.Second9 = 9000)] = "Second9";
b[(b.Second10 = 10000)] = "Second10";
b[(b.Second12 = 12000)] = "Second12";
export var IC = b;
y = {};
y[(y.Hard = 1)] = "Hard";
y[(y.Soft = 2)] = "Soft";
export var oV = y;
_ = {};
_[(_.Normal = 1)] = "Normal";
_[(_.Deleted = 2)] = "Deleted";
export var y7 = _;
x = {};
x[(x.Default = 109)] = "Default";
x[(x.Customize = 214)] = "Customize";
export var zW = x;
w = {};
w[(w.Unknown = 0)] = "Unknown";
w[(w.Tag = 1)] = "Tag";
w[(w.FirstFrame = 2)] = "FirstFrame";
export var B$ = w;
T = {};
T[(T.Deleted = 22)] = "Deleted";
T[(T.Offline = 23)] = "Offline";
T[(T.Banned = 25)] = "Banned";
T[(T.Internal = 101)] = "Internal";
T[(T.Online = 102)] = "Online";
T[(T.HomepageOnline = 103)] = "HomepageOnline";
T[(T.TemplateUse = 104)] = "TemplateUse";
T[(T.Private = 140)] = "Private";
T[(T.Reviewing = 141)] = "Reviewing";
T[(T.SlefView = 144)] = "SlefView";
export var aC = T;
export var jK = {
  Png: "png",
  Jpeg: "jpeg",
  Webp: "webp",
};
R = {};
R[(R.Single = 9)] = "Single";
R[(R.Collection = 109)] = "Collection";
R[(R.ImageMaterial = 8015)] = "ImageMaterial";
R[(R.DreaminaAiVideo = 53)] = "DreaminaAiVideo";
R[(R.Canvas = 211)] = "Canvas";
R[(R.ShortVideo = 210)] = "ShortVideo";
R[(R.Voice = 209)] = "Voice";
R[(R.ClonedVoice = 218)] = "ClonedVoice";
R[(R.DreaminaAiAudio = 80)] = "DreaminaAiAudio";
R[(R.ActionTemplate = 217)] = "ActionTemplate";
R[(R.DreaminaTTSAudio = 8007)] = "DreaminaTTSAudio";
R[(R.Document = 8016)] = "Document";
export var NB = R;
N = {};
N[(N.Deleted = 22)] = "Deleted";
N[(N.Offline = 23)] = "Offline";
N[(N.Banned = 25)] = "Banned";
N[(N.Online = 102)] = "Online";
N[(N.Reviewing = 141)] = "Reviewing";
N[(N.SlefView = 144)] = "SlefView";
N[(N.HomepageOnline = 103)] = "HomepageOnline";
N[(N.Internal = 101)] = "Internal";
N[(N.TemplateUse = 104)] = "TemplateUse";
export var YG = N;
A = {};
A[(A.Reviewing = 2)] = "Reviewing";
A[(A.Rejected = 4)] = "Rejected";
A[(A.Approved = 100)] = "Approved";
export var jz = A;
S = {};
S[(S.Normal = 1)] = "Normal";
S[(S.Test = 2)] = "Test";
export var AQ = S;
E = {};
E[(E.Init = 0)] = "Init";
E[(E.Processing = 1)] = "Processing";
E[(E.Fail = 2)] = "Fail";
E[(E.Success = 3)] = "Success";
export var QH = E;
W = {};
W[(W.Uploading = 1)] = "Uploading";
W[(W.UploadFailed = 2)] = "UploadFailed";
W[(W.WaitingForUploading = 3)] = "WaitingForUploading";
W[(W.UploadSuccess = 4)] = "UploadSuccess";
W[(W.EncodeSuccess = 10)] = "EncodeSuccess";
W[(W.EncodeFailed = 20)] = "EncodeFailed";
W[(W.Encoding = 30)] = "Encoding";
W[(W.NonExist = 40)] = "NonExist";
export var HG = W;
M = {};
M[(M.Init = 0)] = "Init";
M[(M.Processing = 1)] = "Processing";
M[(M.Fail = 2)] = "Fail";
M[(M.Success = 3)] = "Success";
export var qd = M;
export var Qg = {
  Normal: "normal",
  Loss: "loss",
  SmartCrop: "smart_crop",
};
export var yA = {
  TextToSpeech: "text-to-speech",
  LocalFile: "local-file",
};
I = {};
I[(I.Generating = 1)] = "Generating";
I[(I.Success = 2)] = "Success";
I[(I.Fail = 3)] = "Fail";
export var M8 = I;
j = {};
j[(j.ToneLimitExceeded = 3001)] = "ToneLimitExceeded";
j[(j.AudioAuditFailed = 2044)] = "AudioAuditFailed";
j[(j.TextSecurityBlock = 2038)] = "TextSecurityBlock";
j[(j.ToneRegistrationFailed = 3002)] = "ToneRegistrationFailed";
j[(j.ToneSaveFailed = 3003)] = "ToneSaveFailed";
j[(j.ToneMigrationFailed = 3004)] = "ToneMigrationFailed";
export var Fm = j;
export var lY = {
  Template: "template",
  Reedit: "custom",
  Custom: "custom",
  TemplateEdit: "template_edit",
  Agent: "agent",
};
export var pH = {
  InputMediaType: "input_media_type",
  Fps: "fps",
  LensMotionType: "lens_motion_type",
  CameraStrength: "camera_strength",
  VideoAspectRatio: "video_aspect_ratio",
  Boximator: "boximator",
  MotionSpeed: "motion_speed",
  SupportExtend: "support_extend",
  Frames: "frames",
  FramesSlideBar: "frames_slide_bar",
  Resolution: "resolution",
  LensRecipe: "lens_recipe",
  MultiFrames: "multi_frames",
  AudioOption: "audio_option",
  UnifiedEdit: "unified_edit",
  ExtendConfig: "extend_config",
  LongVideo: "long_video",
  EditConfig: "edit_config",
  GenerateFromDraftConfig: "generate_from_draft_config",
  FirstFrameConfig: "first_frame_config",
  EndFrameConfig: "end_frame_config",
};
export var cE = {
  Resolution: "resolution",
  LensRecipe: "lens_recipe",
  UnifiedEditInputMaterialType: "unified_edit.input_material_type",
};
export var yo = {
  FaceWrap: "face_swap",
  BgPaint: "bg_paint",
  Canny: "canny",
  Depth: "depth",
  Pose: "pose",
  IpKeep: "ip_keep",
  Character: "character",
  StyleReference: "style_reference",
  ByteEdit: "byte_edit",
  ByteEditWithCustomRatio: "byte_edit_with_custom_ratio",
  ByteEditWithEmptyPrompt: "byte_edit_with_empty_prompt",
  ImageToImage: "i2i",
  Default: "default_scene",
  StyleCode: "style_code",
  Etta: "etta",
  RefuseImage: "refuse_image",
  SupportSubject: "support_subject",
};
export var Si = {
  BetaModel: "beta_model",
  NewModel: "new_model",
  HideCustomRatio: "hide_custom_ratio",
  DisableChooseHighWidth: "disable_choose_high_width",
  GPTImageModel: "gpt_image_model",
  ReadOnlySampleStrength: "read_only_sample_steps",
  ReadOnlySize: "read_only_size",
  ReadOnlyRatio: "read_only_ratio",
  ThirdParty: "third_party",
  Etta: "etta",
  SmartScale: "smart_scale",
  PerPiece: "per_piece",
  ThinkThenDraw: "think_then_draw",
  ByteEdit2k: "byte_edit_2k",
  SimpleImage: "simple_image",
  EmptyRatioSizes: "empty_ratio_sizes",
};
export var Lr = {
  LimitTimeDiscount: "limit_time_discout",
};
H = {};
H[(H.Unknown = 0)] = "Unknown";
H[(H.Image = 1)] = "Image";
H[(H.Video = 2)] = "Video";
H[(H.Audio = 3)] = "Audio";
export var Mt = H;
