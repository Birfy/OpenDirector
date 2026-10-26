import a from "Qey";
import n from "Ut";
import s from "yMd";
import o from "fHC";
import { a as a_1 } from "./module-UuA_2.js";
let r;
export var MG = "all";
export var yW = "cloned";
export var Jq = "favorite";
export var y3 = {
  id: -1,
  get name() {
    return a.Ay.t("web_generator_audio_window_all", {}, "全部音色");
  },
  categoryKey: MG,
};
export var oT = {
  id: -2,
  get name() {
    return a.Ay.t("web_generator_audio_window_mine", {}, "我的音色");
  },
  categoryKey: yW,
};
export var rJ = {
  id: -3,
  get name() {
    return a.Ay.t("web_generator_audio_window_collection", {}, "收藏");
  },
  categoryKey: Jq,
};
export var rX = "audio/mpeg";
export var wy = 50;
export var j2 = 500;
export var $w = 1;
export var _3 = "tts_model_v3";
export var hs = "";
export var Jn = {
  id: hs,
  get name() {
    return a.Ay.t("web_new_ai_avatar_original_audio", {}, "音频原声");
  },
  isFavorite: false,
  effectType: s.NB.ClonedVoice,
  itemPlatform: n.CommonItemPlatform.Local,
  voiceCloning: {
    status: o.$Q.Success,
  },
};
export var o_ = {
  id: "",
  get name() {
    return a.Ay.t("web_new_ai_avatar_template_original_audio", {}, "模版音色");
  },
  isFavorite: false,
  effectType: s.NB.ClonedVoice,
  itemPlatform: n.CommonItemPlatform.Template,
  voiceCloning: {
    status: o.$Q.Success,
  },
};
r = {};
r[(r.VipRequired = 3012)] = "VipRequired";
r[(r.TextInappropriate = 3013)] = "TextInappropriate";
r[(r.NotSupported = 3014)] = "NotSupported";
r[(r.ServiceError = 3010)] = "ServiceError";
r[(r.InputInvalidError = 1006)] = "InputInvalidError";
export var Yf = r;
export var Yl = {
  get 3012() {
    return a.Ay.t(
      "web_dreamina_tts_result_error_vip_required",
      {},
      "你的配音使用了 VIP 音色，请开通 VIP，或者使用免费音色",
    );
  },
  get 3013() {
    return a.Ay.t(
      "web_dreamina_tts_result_error_text_inappropriate",
      {},
      "你输入的文字包含不合适内容，请返回修改后重新配音",
    );
  },
  get 3014() {
    return a.Ay.t(
      "web_dreamina_tts_result_error_text_language_not_supported",
      {},
      "你输入的文字可能包含不支持的语言或其他内容，请返回修改后重新配音",
    );
  },
  get 3010() {
    return a.Ay.t(
      "web_dreamina_tts_result_error_service_error",
      {},
      "配音服务发生错误，请稍后重试",
    );
  },
  get 1006() {
    return a.Ay.t(
      "web_character_toast_invalid_tts_input",
      {},
      "所选音色不支持您输入的语言，或输入中包含无效内容",
    );
  },
};
export var w8 = 5;
export var $s = {
  get [a_1.NotPass]() {
    return a.Ay.t(
      "character_toast_sensitive_text",
      {},
      "你输入的文字包含不合适内容，请返回修改。",
    );
  },
  get [a_1.CommonError]() {
    return a.Ay.t("character_toast_operation_invalid", {}, "操作异常，请重试");
  },
};
