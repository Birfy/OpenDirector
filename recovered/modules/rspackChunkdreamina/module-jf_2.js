let t;
let n;
let i;
let r;
t = {};
t[(t.Image = 1)] = "Image";
t[(t.Video = 2)] = "Video";
t[(t.Story = 3)] = "Story";
t[(t.Canvas = 4)] = "Canvas";
t[(t.VideoBGM = 5)] = "VideoBGM";
t[(t.Audio = 6)] = "Audio";
t[(t.VideoAudioEffect = 7)] = "VideoAudioEffect";
t[(t.LipSync = 8)] = "LipSync";
t[(t.ActionCopy = 9)] = "ActionCopy";
t[(t.CreationAgent = 10)] = "CreationAgent";
t[(t.Document = 12)] = "Document";
export var Qu = t;
export function $j(e) {
  return [1, 2, 5, 6, 7, 8, 9, 10, ...(e ? [12] : [])];
}
n = {};
n[(n.PageUp = 1)] = "PageUp";
n[(n.PageDown = 2)] = "PageDown";
export var _z = n;
i = {};
i[(i.Default = 0)] = "Default";
i[(i.SuperResolution = 1)] = "SuperResolution";
i[(i.Favorited = -1)] = "Favorited";
i[(i.OnlySuccess = -2)] = "OnlySuccess";
i[(i.Agentic = -3)] = "Agentic";
i[(i.FrameInterpolation = -4)] = "FrameInterpolation";
export var ln = i;
r = {};
r[(r.CreateTime = 0)] = "CreateTime";
r[(r.UpdateTime = 1)] = "UpdateTime";
r[(r.GeneratedTime = 2)] = "GeneratedTime";
export var ql = r;
export var Iw = {
  AssetPage: "asset_page",
  GenerateSidebar: "generate_sidebar",
};
