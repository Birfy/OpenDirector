import n from "Qey";
export var wU = {
  Unsupported: "unsupported",
  Aborted: "aborted",
  NoSpeech: "no-speech",
  NotAllowed: "not-allowed",
  ServiceNotAllowed: "service-not-allowed",
  AudioCapture: "audio-capture",
  Unknown: "unknown",
  NotLoggedIn: "not_logged_in",
  InvalidParams: "invalid_params",
  TokenFetchFailed: "token_fetch_failed",
  HotwordsFetchFailed: "hotwords_fetch_failed",
  InternalServerError: "internal_server_error",
  VoiceInputServerError: "voice_input_server_error",
};
const o = {
  100001: "not_logged_in",
  100002: "invalid_params",
  200001: "token_fetch_failed",
  200002: "hotwords_fetch_failed",
  5e5: "internal_server_error",
};
export function Gr(t) {
  let e;
  if ((e = o[t]) != null) {
    return e;
  }
  return "unknown";
}
export function _U() {
  return n.Ay.t("voice_input_no_microphone", {}, "未检测到可用麦克风");
}
export function zD() {
  return n.Ay.t(
    "voice_input_browser_unsupported",
    {},
    "当前浏览器暂不支持语音输入",
  );
}
export function wf() {
  return n.Ay.t("voice_input_network_error", {}, "网络错误，请重试");
}
export function e() {
  return n.Ay.t("voice_input_no_text_detected", {}, "未识别到文字");
}
export function r7() {
  return n.Ay.t("voice_input_server_error", {}, "服务错误，请重试");
}
