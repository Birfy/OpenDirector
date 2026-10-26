import a from "NY";
import r from "QWK";
import i from "Kt";
import o from "fYz";
import l from "K8";
import s from "nL";
import c from "fg";
import u from "fm";
import d from "VhU";
import { C as C_1 } from "./module-ui_3.js";
import p from "yF";
import v from "KC";
import h from "qN";
import g from "dR";
import f from "K6J";
import b from "b5";
import _ from "Ev";
import y from "iN";
import x from "cBI";
class k {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new v.LL().build({
          headers: {
            "X-Platform": (_.Fr, "pc"),
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        x.U(e, t),
        h.Wh(t),
        g.vo(t),
        p.P(t),
        f.U(t),
        t);
    }
    return this._networkClientInstance;
  }
  fetchVideoModelConfig(e) {
    return a
      ._(function* () {
        try {
          const { scene, needCache } = e;
          const a = yield this._networkClient.post(
            this._getUrl("/mweb/v1/video_generate/get_common_config"),
            {
              scene,
              params: {
                needCache,
              },
            },
          );
          const r = this._transformVideoModelConfigs(c.o(a.data, u.Cb));
          return l.TZ(r);
        } catch (error) {
          return b.r(error);
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
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
k = r.Cg(
  [
    r.Qj(0, i._),
    r.Qj(1, y.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      i._ === undefined ? Object : i._,
      y.r === undefined ? Object : y.r,
    ]),
  ],
  k,
);
class C {
  fetchVideoModelConfig() {
    return a
      ._(function* () {
        let e;
        const t =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {
                needCache: true,
              };
        let n = ((e, t) => {
          let paramsVar = "__video_generate_model_params__";
          let resultVar = "__video_generate_model_config__";
          if (
            t.scene === d.kR.LipSyncImageGenerateVideo ||
            t.scene === d.kR.LipSyncVideoGenerateVideo
          ) {
            return l.xz(-1, "read preload failed");
          }
          if (t.scene === d.kR.ImitatorGenerateVideo) {
            paramsVar = "__imitator_generate_model_params__";
            resultVar = "__imitator_generate_model_config__";
          }
          const r = e.getData(
            {
              paramsVar,
              resultVar,
              paramsMatch: (e) => {
                var n;
                var a = (n = s.rq()) != null ? n : "";
                return (
                  (e.team_id === a || (e.team_id === undefined && a === "")) &&
                  e.need_cache === (t.needCache || true) &&
                  e.need_refresh === (t.needRefresh || false)
                );
              },
              resultFormat: (e) => {
                var t = c.o(e.data, u.Cb);
                return C_1(t);
              },
            },
            {
              burn: false,
            },
          );
          if (
            r.ok &&
            Array.isArray(r.value.modelList) &&
            r.value.defaultModel
          ) {
            return r;
          }
          return l.xz(-1, "read preload failed");
        })(this._preloadAGWInjectDataService, t);
        if (!((e = n).ok && "value" in e && e.value)) {
          n = yield this._repository.fetchVideoModelConfig(t);
        }
        return n;
      })
      .apply(this, arguments);
  }
  constructor(e, t) {
    this._containerService = e;
    this._preloadAGWInjectDataService = t;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(k);
  }
}
export { C as r };
C = r.Cg(
  [
    r.Qj(0, i._),
    r.Qj(1, o.G),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      i._ === undefined ? Object : i._,
      o.G === undefined ? Object : o.G,
    ]),
  ],
  C,
);
