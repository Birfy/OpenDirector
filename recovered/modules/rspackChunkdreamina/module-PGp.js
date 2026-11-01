import a from "z8";
import i from "Qey";
import n from "yw";
export var H = [
  {
    value: "omniDubbing",
    icon: a.jsx(n.keY, {}),
    get label() {
      return i.Ay.t("web_audio_gen_mode_omni_voiceover", {}, "全能配音");
    },
  },
  {
    value: "textReading",
    icon: a.jsx(n.g8k, {}),
    get label() {
      return i.Ay.t("web_audio_gen_mode_text_reading", {}, "文本朗读");
    },
  },
  {
    value: "videoTranslation",
    icon: a.jsx(n.kKb, {}),
    get label() {
      return i.Ay.t("web_audio_gen_mode_video_translation", {}, "视频翻译");
    },
  },
  {
    value: "audioSeparation",
    icon: a.jsx(n._9K, {}),
    get label() {
      return i.Ay.t("web_audio_gen_mode_audio_separation", {}, "音频分离");
    },
  },
];
