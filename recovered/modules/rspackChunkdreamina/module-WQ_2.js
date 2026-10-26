import n from "Ut";
import a from "yMd";
export var L = {
  [n.DAVideoGenerateType.subtitleErase]: n.DAVideoProcessType.SubtitleErase,
  [n.DAVideoGenerateType.genVideo]: n.DAVideoProcessType.VideoGen,
  [n.DAVideoGenerateType.lipSync]: n.DAVideoProcessType.LipSync,
  [n.DAVideoGenerateType.videoTemplate]: n.DAVideoProcessType.VideoTemplate,
  [n.DAVideoGenerateType.videoBgm]: n.DAVideoProcessType.VideoBGM,
  [n.DAVideoGenerateType.videoAudioEffect]:
    n.DAVideoProcessType.VideoAudioEffect,
  [n.DAVideoGenerateType.none]: n.DAVideoProcessType.VideoGen,
  [n.DAVideoGenerateType.workflow]: n.DAVideoProcessType.VideoGen,
  [n.DAVideoGenerateType.mergeVideo]: n.DAVideoProcessType.VideoGen,
};
export var q = {
  [n.DAVideoGenerateType.subtitleErase]: a.ce.Text2Video,
  [n.DAVideoGenerateType.none]: a.ce.Text2Video,
  [n.DAVideoGenerateType.lipSync]: a.ce.LipSync,
  [n.DAVideoGenerateType.genVideo]: a.ce.Text2Video,
  [n.DAVideoGenerateType.videoAudioEffect]: a.ce.VideoAudioEffect,
  [n.DAVideoGenerateType.videoTemplate]: a.ce.VideoTemplate,
  [n.DAVideoGenerateType.videoBgm]: a.ce.VideoBGM,
  [n.DAVideoGenerateType.workflow]: a.ce.Text2Video,
  [n.DAVideoGenerateType.mergeVideo]: a.ce.CloudRenderVideo,
};
