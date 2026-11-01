import n from "NY";
import o from "QWK";
import a from "Kt";
import l from "fYz";
import r from "K8";
import d from "nL";
import u from "fg";
import s from "fm";
import g from "VhU";
import { C as C_1 } from "./module-ui.js";
import m from "yF";
import f from "KC";
import v from "qN";
import p from "dR";
import h from "K6J";
import _ from "b5";
import C from "Ev";
import y from "iN";
import M from "cBI";
class S {
  get _networkClient() {
    let e;
    let i;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (i = new f.LL().build({
          headers: {
            "X-Platform": (C.Fr, "pc"),
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        M.U(e, i),
        v.Wh(i),
        p.vo(i),
        m.P(i),
        h.U(i),
        i);
    }
    return this._networkClientInstance;
  }
  fetchVideoModelConfig(e) {
    return n
      ._(function* () {
        try {
          const { scene, needCache } = e;
          const n = yield this._networkClient.post(
            this._getUrl("/mweb/v1/video_generate/get_common_config"),
            {
              scene,
              params: {
                needCache,
              },
            },
          );
          const o = this._transformVideoModelConfigs(u.o(n.data, s.Cb));
          return r.TZ(o);
        } catch (error) {
          return _.r(error);
        }
      })
      .call(this);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: y.X.DEFAULT,
      path,
    });
  }
  _transformVideoModelConfigs(e) {
    return C_1(e);
  }
  constructor(e, i) {
    this._containerService = e;
    this._httpApiSettingService = i;
  }
}
S = o.Cg(
  [
    o.Qj(0, a._),
    o.Qj(1, y.r),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      a._ === undefined ? Object : a._,
      y.r === undefined ? Object : y.r,
    ]),
  ],
  S,
);
class D {
  fetchVideoModelConfig() {
    return n
      ._(function* () {
        let e;
        const i =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {
                needCache: true,
              };
        let t = ((e, i) => {
          let paramsVar = "__video_generate_model_params__";
          let resultVar = "__video_generate_model_config__";
          if (
            i.scene === g.kR.LipSyncImageGenerateVideo ||
            i.scene === g.kR.LipSyncVideoGenerateVideo
          ) {
            return r.xz(-1, "read preload failed");
          }
          if (i.scene === g.kR.ImitatorGenerateVideo) {
            paramsVar = "__imitator_generate_model_params__";
            resultVar = "__imitator_generate_model_config__";
          }
          const o = e.getData(
            {
              paramsVar,
              resultVar,
              paramsMatch: (e) => {
                var t;
                var n = (t = d.rq()) != null ? t : "";
                return (
                  (e.team_id === n || (e.team_id === undefined && n === "")) &&
                  e.need_cache === (i.needCache || true) &&
                  e.need_refresh === (i.needRefresh || false)
                );
              },
              resultFormat: (e) => {
                var i = u.o(e.data, s.Cb);
                return C_1(i);
              },
            },
            {
              burn: false,
            },
          );
          if (
            o.ok &&
            Array.isArray(o.value.modelList) &&
            o.value.defaultModel
          ) {
            return o;
          }
          return r.xz(-1, "read preload failed");
        })(this._preloadAGWInjectDataService, i);
        if (!((e = t).ok && "value" in e && e.value)) {
          t = yield this._repository.fetchVideoModelConfig(i);
        }
        return t;
      })
      .apply(this, arguments);
  }
  constructor(e, i) {
    this._containerService = e;
    this._preloadAGWInjectDataService = i;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(S);
  }
}
export { D as r };
D = o.Cg(
  [
    o.Qj(0, a._),
    o.Qj(1, l.G),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      a._ === undefined ? Object : a._,
      l.G === undefined ? Object : l.G,
    ]),
  ],
  D,
);
