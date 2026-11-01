import i from "oa";
import s from "bk";
import a from "QWK";
import n from "Dm";
import o from "Kt";
import l from "kF";
import { v } from "./module-N3n.js";
import { l as l_1 } from "./module-a5E.js";
import u from "ymj";
class h extends l.v {
  constructor(...e) {
    super(...e);
    this.eventName = "agent_message_action";
  }
}
class p extends l.o {
  get params() {
    return this._params;
  }
  setParamsByAIGCAgenticData(e) {
    const { taskData, metricsExtra, idModel } = e;
    v(this, e);
    this._params.replyStatus = l_1(taskData);
    this._params.quoteTurnId = metricsExtra.quoteTurnId;
    this._params.lastPictureId = metricsExtra.lastPictureId;
    this._params.lastGenerateId = metricsExtra.lastGenerateId;
    this._params.isCreativeMode = +!!e.creativeModelEnabled;
    this._params.isInspirationSearch = +!!e.searchEnabled;
    this._params.skillId = metricsExtra.skillId;
    this._params.workspaceId =
      idModel.workspaceId !== null && idModel.workspaceId !== undefined
        ? String(idModel.workspaceId)
        : undefined;
    u.o(this, e.metricsExtra);
  }
  _getCollectorClass() {
    return h;
  }
  _reportBusinessEvent(e, t) {
    super._reportBusinessEvent(
      e,
      s._(i._({}, t), {
        immediately: true,
      }),
    );
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["action", "user_message_id", "prompt", "is_add_image"].forEach((t) => {
      n.F4(e[t], "[AgentMessageActionReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
export { p as s };
p = a.Cg(
  [
    a.Qj(1, o._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      o._ === undefined ? Object : o._,
    ]),
  ],
  p,
);
