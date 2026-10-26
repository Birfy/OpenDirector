import a from "oa";
import r from "bk";
import i from "z8";
import o from "Qey";
import l from "yw";
import s from "rL";
import c from "./module-Oo_2.js";
import u from "eL";
const d = u.L(s.bp.GENERATE_VIDEO);
const m = u.L(s.bp.DREAMINA_LIP_SYNC);
const p = u.L(s.bp.GENERATE_AUDIO);
function v(e) {
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
function h(e, t) {
  return r._(a._({}, e), {
    disabled: t,
    extra: v(t),
  });
}
export var lM = {
  agentic: {
    value: "agentic",
    get label() {
      return o.Ay.t("web_agent_mode", {}, "AI Agent");
    },
    icon: i.jsx(l.j$8, {}),
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
    icon: i.jsx(l.iHo, {}),
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
    icon: i.jsx(l._MP, {}),
    disabled: d,
    extra: v(d),
  },
  digitalHuman: {
    value: "digitalHuman",
    get label() {
      return o.Ay.t("web_home_carousel_lip_sync", {}, "数字人");
    },
    icon: i.jsx(l.KPZ, {}),
    disabled: m,
    extra: v(m),
  },
  audio: {
    value: "audio",
    get label() {
      return o.Ay.t("web_audio_gen_feature_name", {}, "音频生成");
    },
    icon: i.jsx(l.Vic, {}),
    disabled: p,
    extra: v(p),
  },
  music: {
    value: "music",
    get label() {
      return o.Ay.t("ai_music_generator_title", {}, "音乐生成");
    },
    icon: i.jsx(l.lwq, {
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
    icon: i.jsx(l.YhM, {}),
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
    isVideoGeneratorDisabled = d,
  } = e;
  const s = [
    ...(isAgenticEnabled ? [lM.agentic] : []),
    lM.image,
    h(lM.video, isVideoGeneratorDisabled),
    lM.music,
    h(lM.audio, isAudioGeneratorDisabled),
    h(lM.digitalHuman, isDigitalHumanGeneratorDisabled),
    lM.actionCopy,
  ];
  if (e.appearance !== "mainFrame2026Oversea") {
    return s;
  }
  return s.map((e) =>
    r._(a._({}, e), {
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
