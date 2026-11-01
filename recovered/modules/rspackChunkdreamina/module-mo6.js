import r from "oa";
import n from "bk";
import a from "z8";
import o from "Qey";
import s from "yw";
import { bp } from "./module-rL.js";
import c from "./module-Oo.js";
import { L } from "./module-eL_2.js";
const u = L(bp.GENERATE_VIDEO);
const m = L(bp.DREAMINA_LIP_SYNC);
const p = L(bp.GENERATE_AUDIO);
function h(e) {
  return {
    tooltipProps: {
      get content() {
        if (e) {
          return o.Ay.t("web_hovertip_feature_coming_soon", {}, "Coming soon");
        }
        return null;
      },
    },
  };
}
function v(e, t) {
  return n._(r._({}, e), {
    disabled: t,
    extra: h(t),
  });
}
export var lM = {
  agentic: {
    value: "agentic",
    get label() {
      return o.Ay.t("web_agent_mode", {}, "AI Agent");
    },
    icon: a.jsx(s.j$8, {}),
    disabled: false,
    extra: {
      tooltipProps: {
        get content() {
          return null;
        },
      },
    },
  },
  image: {
    value: "image",
    get label() {
      return o.Ay.t("web_home_tool_image_generator", {}, "图片生成");
    },
    icon: a.jsx(s.iHo, {}),
    disabled: false,
    extra: {
      tooltipProps: {
        get content() {
          return null;
        },
      },
    },
  },
  video: {
    value: "video",
    get label() {
      return o.Ay.t("web_home_carousel_video_generator", {}, "视频生成");
    },
    icon: a.jsx(s._MP, {}),
    disabled: u,
    extra: h(u),
  },
  digitalHuman: {
    value: "digitalHuman",
    get label() {
      return o.Ay.t("web_home_carousel_lip_sync", {}, "数字人");
    },
    icon: a.jsx(s.KPZ, {}),
    disabled: m,
    extra: h(m),
  },
  audio: {
    value: "audio",
    get label() {
      return o.Ay.t("web_audio_gen_feature_name", {}, "音频生成");
    },
    icon: a.jsx(s.Vic, {}),
    disabled: p,
    extra: h(p),
  },
  music: {
    value: "music",
    get label() {
      return o.Ay.t("ai_music_generator_title", {}, "音乐生成");
    },
    icon: a.jsx(s.lwq, {
      fill: "currentColor",
    }),
    disabled: false,
    extra: {
      tooltipProps: {
        get content() {
          return null;
        },
      },
    },
  },
  actionCopy: {
    value: "actionCopy",
    get label() {
      return o.Ay.t("web_home_tool_mimic_motion", {}, "动作模仿");
    },
    icon: a.jsx(s.YhM, {}),
    disabled: false,
    extra: {
      tooltipProps: {
        get content() {
          return null;
        },
      },
    },
  },
};
export function hK() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    isAudioGeneratorDisabled = p,
    isDigitalHumanGeneratorDisabled = m,
    isAgenticEnabled = c.Q,
    isVideoGeneratorDisabled = u,
  } = e;
  const l = [
    ...(isAgenticEnabled ? [lM.agentic] : []),
    lM.image,
    v(lM.video, isVideoGeneratorDisabled),
    lM.music,
    v(lM.audio, isAudioGeneratorDisabled),
    v(lM.digitalHuman, isDigitalHumanGeneratorDisabled),
    lM.actionCopy,
  ];
  if (e.appearance !== "mainFrame2026Oversea") {
    return l;
  }
  return l.map((e) =>
    n._(r._({}, e), {
      get label() {
        switch (e.value) {
          case "agentic":
            return o.Ay.t("web_home_generate_tab_agent", {}, "Agent");
          case "image":
            return o.Ay.t("web_home_generate_tab_image", {}, "Image");
          case "video":
            return o.Ay.t("web_home_generate_tab_video", {}, "Video");
          case "audio":
            return o.Ay.t("web_home_generate_tab_audio", {}, "Audio");
          default:
            return e.label;
        }
      },
    }),
  );
}
export var QV = hK();
