import r from "QWK";
import o from "Kt";
import n from "NY";
import a from "K8";
import s from "yF";
import c from "KC";
import l from "xy";
import u from "dR";
import d from "qN";
import h from "b5";
import v from "iN";
import _ from "cBI";
import p from "fHC";
import { Ez, JP, NJ, WP, e as e_1, hZ, pG, ts } from "./module-kuK.js";
import { Dn, ME, M_, NE, bm, qp, sJ } from "./module-ctt.js";
import { F } from "./module-EAp.js";
import { K } from "./module-VuN.js";
import V from "oa";
import I from "bk";
import { m as m_1 } from "./module-OoR.js";
const m = "/mweb/v1/voice/submit_task";
class y {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new c.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        _.U(e, t),
        l.sc(t),
        u.vo(t),
        d.Wh(t),
        s.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  fetchClonedVoices(e) {
    return n
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/get_user_local_item_list"),
            NJ(e),
          );
          return ME(t);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  submitVoiceCloningTask(e) {
    return n
      ._(function* () {
        try {
          const t = Ez(e);
          const i = yield this._networkClient.post(this._getUrl(m), t);
          return Dn(i);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  submitVoiceConversionTask(e) {
    return n
      ._(function* () {
        try {
          const t = yield this._networkClient.post(this._getUrl(m), e_1(e));
          if (t.data.status === p.k_.Fail) {
            return a.xz(Number(t.data.fail_code || -1), "");
          }
          return NE(t);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  fetchClonedVoiceById(e) {
    return n
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/get_local_item_list"),
            WP(e),
          );
          return bm(t);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  queryVoiceTasks(e) {
    return n
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/voice/query_task"),
            JP(e),
          );
          return qp(t);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  updateClonedVoice(e) {
    return n
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/voice/update"),
            hZ(e),
          );
          return M_(t);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  deleteClonedVoice(e) {
    return n
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getUrl("/mweb/v1/voice/delete"),
            ts(e),
          );
          return a.nj();
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  favoriteVoice(e) {
    return n
      ._(function* (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        try {
          const { signal } = t;
          yield this._networkClient.post(
            this._getUrl("/mweb/v1/simple_favorite_item"),
            pG(e),
            {
              signal,
            },
          );
          return a.nj();
        } catch (error) {
          return h.r(error);
        }
      })
      .apply(this, arguments);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: v.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
y = r.Cg(
  [
    r.Qj(0, o._),
    r.Qj(1, v.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      v.r === undefined ? Object : v.r,
    ]),
  ],
  y,
);
class b extends F {
  getRequestData() {
    return {
      panel: K.LokiVoice,
      panelSource: "loki",
      appId: 1775,
    };
  }
}
class M extends m_1 {
  parseHeycanResponseDataToResources(e) {
    return sJ(e);
  }
  getRequestData(e) {
    return I._(V._({}, e), {
      panel: K.DmopVoice,
      panelSource: "dmop",
      categoryKey: "default",
      appId: 1775,
      packItemOpt: {
        needFavoriteInfo: true,
      },
    });
  }
}
export class x {
  fetchVoiceCategories() {
    return this._voiceCategoryRepository.fetchCategories();
  }
  fetchIntrinsicVoices(e) {
    return this._voiceResourceRepository.fetchResources(e);
  }
  fetchClonedVoices(e) {
    return this._voiceRepository.fetchClonedVoices(e);
  }
  submitVoiceCloningTask(e) {
    return this._voiceRepository.submitVoiceCloningTask(e);
  }
  submitVoiceConversionTask(e) {
    return this._voiceRepository.submitVoiceConversionTask(e);
  }
  fetchClonedVoiceById(e) {
    return this._voiceRepository.fetchClonedVoiceById(e);
  }
  queryVoiceTasks(e) {
    return this._voiceRepository.queryVoiceTasks(e);
  }
  updateClonedVoice(e) {
    return this._voiceRepository.updateClonedVoice(e);
  }
  deleteClonedVoice(e) {
    return this._voiceRepository.deleteClonedVoice(e);
  }
  favoriteVoice(e, t) {
    return this._voiceRepository.favoriteVoice(e, t);
  }
  constructor(e) {
    this._containerService = e;
    this._voiceRepository = this._containerService.createInstance(y);
    this._voiceCategoryRepository = this._containerService.createInstance(b);
    this._voiceResourceRepository = this._containerService.createInstance(M);
  }
}
x = r.Cg(
  [
    r.Qj(0, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  x,
);
