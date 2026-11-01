import a from "NY";
import r from "QWK";
import s from "K8";
import l from "yF";
import n from "KC";
import o from "qN";
import d from "dR";
import c from "fg";
import u from "fm";
import _ from "b5";
import h from "iN";
import p from "Kt";
import k from "cBI";
import { WS, fN } from "./module-RLQ.js";
const S = "/mweb/v1/creation_agent/v2/get_conversation_creation_preference";
const v = "/mweb/v1/creation_agent/v2/update_conversation_creation_preference";
export class t {
  get _networkClient() {
    let t;
    let e;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((t = this._containerService),
        (e = new n.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        k.U(t, e),
        o.Wh(e),
        d.vo(e),
        l.P(e),
        e);
    }
    return this._networkClientInstance;
  }
  getDefaultCreationPreference() {
    return this._request(
      "/mweb/v1/creation_agent/v2/get_default_creation_preference",
      {},
    );
  }
  updateDefaultCreationPreference(t) {
    return this._request(
      "/mweb/v1/creation_agent/v2/update_default_creation_preference",
      {
        preference: WS(t),
      },
    );
  }
  getCanvasDefaultCreationPreference() {
    return this._request(
      "/mweb/v1/creation_agent/v2/get_canvas_default_creation_preference",
      {},
    );
  }
  updateCanvasDefaultCreationPreference(t) {
    return this._request(
      "/mweb/v1/creation_agent/v2/update_canvas_default_creation_preference",
      {
        preference: WS(t),
      },
    );
  }
  getConversationCreationPreference(t) {
    return this._request(S, {
      conversationId: t,
    });
  }
  updateConversationCreationPreference(t, e) {
    return this._request(v, {
      conversationId: t,
      preference: WS(e),
    });
  }
  getWorkspaceCreationPreference(t) {
    return this._request(S, {
      workspaceId: t,
    });
  }
  updateWorkspaceCreationPreference(t, e) {
    return this._request(v, {
      workspaceId: t,
      preference: WS(e),
    });
  }
  _request(t, e) {
    return a
      ._(function* () {
        try {
          const i = yield this._networkClient.post(this._getUrl(t), c.w(e));
          return s.TZ(fN(c.o(i.data, u.Cb)));
        } catch (error) {
          return _.r(error);
        }
      })
      .call(this);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: h.X.DEFAULT,
      path,
    });
  }
  constructor(t, e) {
    this._containerService = t;
    this._httpApiSettingService = e;
  }
}
t = r.Cg(
  [
    r.Qj(0, p._),
    r.Qj(1, h.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      p._ === undefined ? Object : p._,
      h.r === undefined ? Object : h.r,
    ]),
  ],
  t,
);
