import r from "QWK";
import o from "Dm";
import n from "Kt";
import a from "kF";
class s extends a.v {
  constructor(...e) {
    super(...e);
    this.eventName = "voice_select_panel";
  }
}
export class y extends a.o {
  _getCollectorClass() {
    return s;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
    this._validateAction(e);
  }
  _validateRequiredFields(e) {
    ["action", "modal"].forEach((t) => {
      o.F4(e[t], "[VoiceSelectPanelReporter] ".concat(t, " is required"));
    });
  }
  _validateAction(e) {
    switch (e.action) {
      case "change_audio_speed":
        o.F4(
          e.audio_speed,
          "[LipSyncAdjustParamReporter] audio_speed is required",
        );
        break;
      case "click_emotion":
        o.F4(e.emotion, "[LipSyncAdjustParamReporter] emotion is required");
        break;
      case "choose_voice_category":
        o.F4(
          e.voice_category_key,
          "[VoiceSelectPanelReporter] voice_category_key is required",
        );
        break;
      case "click_voice":
      case "collect_voice":
        o.F4(
          e.voice_category_key,
          "[VoiceSelectPanelReporter] voice_category_key is required",
        );
        o.F4(e.voice_key, "[VoiceSelectPanelReporter] voice_key is required");
        o.F4(e.voice_id, "[VoiceSelectPanelReporter] voice_id is required");
        break;
      case "click_filter":
        o.F4(
          e.filter_name,
          "[VoiceSelectPanelReporter] filter_name is required",
        );
    }
  }
  constructor(e) {
    super({}, e);
    this._containerService = e;
  }
}
y = r.Cg(
  [
    r.Qj(0, n._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  y,
);
