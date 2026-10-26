import type { Preset, Skill } from "../domain/types";

/** Original demo copy/art directions. No captured account or feed data. */
export const CATEGORIES = [
  "精选",
  "短剧漫剧",
  "影视作品",
  "动画动漫",
  "广告营销",
  "平面设计",
  "电商",
];

export const SKILLS: Skill[] = [
  {
    id: "long-shot",
    label: "电影级长镜头",
    prompt: "设计一段连贯的电影长镜头，说明运镜、光线和场景变化。",
  },
  {
    id: "storyboard",
    label: "创作分镜",
    prompt: "把以下创意拆成四个分镜，分别描述景别、动作和镜头时长：",
  },
  {
    id: "style",
    label: "风格大师",
    prompt: "为以下主题提出三种不同的视觉风格，并给出配色和构图建议：",
  },
  {
    id: "short-film",
    label: "叙事短片",
    prompt: "构思一个有起承转合的短片，包含开场、转折与收尾：",
  },
  {
    id: "character",
    label: "角色设定",
    prompt: "设计一个原创角色，描述外貌、服装、性格和三个代表性动作：",
  },
  {
    id: "ad",
    label: "创意广告",
    prompt: "围绕以下产品设计一则简洁有记忆点的广告，包含主视觉和一句文案：",
  },
];

export const PRESETS: Preset[] = [
  {
    id: "moon",
    title: "月球上的最后一家花店",
    description: "一间花店，一场跨越星海的相遇",
    category: "短剧漫剧",
    mode: "video",
    art: "orbit",
    tag: "故事灵感",
    prompt:
      "月球上的花店在傍晚亮起暖灯，镜头缓慢推进，一位宇航员停在窗前。四个分镜，温柔的科幻短片。",
  },
  {
    id: "room",
    title: "让光走进房间",
    description: "光影与家具之间的安静对话",
    category: "电商",
    mode: "image",
    art: "chair",
    tag: "产品摄影",
    prompt:
      "一把原创现代扶手椅置于空旷房间，午后斜射的阳光落在木地板上，柔和阴影，产品摄影，干净构图。",
  },
  {
    id: "mountain",
    title: "去山的另一边",
    description: "把一段旅途变成电影",
    category: "影视作品",
    mode: "video",
    art: "landscape",
    tag: "长镜头",
    prompt:
      "镜头沿着山间公路缓慢向前，晨雾散开，远处山峰渐渐显露，宁静公路电影，宽银幕。",
  },
  {
    id: "form",
    title: "形状的自由练习",
    description: "几何、留白与一抹鲜明的色彩",
    category: "平面设计",
    mode: "image",
    art: "poster",
    tag: "视觉设计",
    prompt:
      "设计一张原创几何海报，使用椭圆、拱形和细线，奶油白背景，橘红与深紫配色，大面积留白。",
  },
  {
    id: "astronaut",
    title: "小小探险家",
    description: "从角色设定开始一场新冒险",
    category: "动画动漫",
    mode: "agent",
    art: "portrait",
    tag: "角色设计",
    prompt:
      "创造一个圆润可爱的原创小机器人探险家，背着小背包，在陌生星球收集声音，规划角色设定和三个场景。",
  },
  {
    id: "sound",
    title: "听见一片海",
    description: "为画面写下声音的想象",
    category: "广告营销",
    mode: "audio",
    art: "wave",
    tag: "声音灵感",
    prompt: "写一段适合海边日落画面的旁白，短句，轻盈自然，最后留一点余韵。",
  },
];
