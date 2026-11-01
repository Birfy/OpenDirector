import r from "Rb";
import n from "yMd";
import a from "CQ";
import o from "xi";
import s from "l3";
function taskModelSupportThink(e) {
  const window___image_generate_model_config__ =
    window.__image_generate_model_config__;
  if (window___image_generate_model_config__) {
    let i;
    const { model_list } = window___image_generate_model_config__.data;
    const a = model_list.find((t) => t.model_req_key === e);
    if (a == null || (i = a.feats) == null) {
      return undefined;
    }
    return i.includes(n.Si.ThinkThenDraw);
  }
  return e === "high_aes_general_v40";
}
export class K extends a.G {
  _executePhase(e, t) {
    if (t === "Start") {
      this._initDMLEnv();
      this._registerDraftConsumers();
    }
  }
  _initDMLEnv() {
    r.DMLEnv.initialize({
      platform: () => r.ClientPlatform.Web,
      appId: () => String(s.y.OVERSEA_APP_ID),
      taskModelSupportThink,
      log: () => ({
        debug: (e, t) => {
          o.V.debug("[DMLEnv_init]", e, t);
        },
        info: (e, t) => {
          o.V.log("[DMLEnv_init]", e, t);
        },
        error: (e, t) => {
          o.V.error("[DMLEnv_init]", e, t);
        },
      }),
    });
  }
  _registerDraftConsumers() {}
  constructor(...e) {
    super(...e);
    this._name = "register-draft-consumer";
  }
}
