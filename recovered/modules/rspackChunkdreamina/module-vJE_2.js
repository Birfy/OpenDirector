import a from "NY";
import r from "QWK";
import i from "K8";
import o from "Kt";
import l from "fYz";
import s from "nL";
import c from "fg";
import u from "fm";
import m from "oa";
import p from "yF";
import v from "KC";
import h from "qN";
import g from "dR";
import f from "K6J";
import b from "b5";
import _ from "Ev";
import y from "iN";
import x from "cBI";
import { m as m_1 } from "./module-nqL_2.js";
function d(_preloadAGWInjectDataService, t) {
  const n = _preloadAGWInjectDataService.getData(
    {
      paramsVar: "__image_generate_model_params__",
      resultVar: "__image_generate_model_config__",
      paramsMatch: (e) => {
        var n;
        var a = (n = s.rq()) != null ? n : "";
        return (
          (e.team_id === a || (e.team_id === undefined && a === "")) &&
          e.need_cache === (t.needCache || true) &&
          e.need_refresh === (t.needRefresh || false) &&
          e.is_client_filter === (t.isClientFilter || false) &&
          e.need_beta_model === true
        );
      },
      resultFormat: (e) => c.o(e.data, u.Cb),
    },
    {
      burn: false,
    },
  );
  if (n.ok && Array.isArray(n.value.modelList) && n.value.firstSelectedModel) {
    return n;
  }
  return i.xz(-1, "read preload failed");
}
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
  getImageModelConfig(e) {
    return a
      ._(function* () {
        try {
          const {
            needRefresh,
            needCache = true,
            isClientFilter,
            needBetaModel,
          } = e;
          const o = yield this._networkClient.post(
            this._getUrl("/mweb/v1/get_common_config"),
            c.w({
              isClientFilter,
              needBetaModel,
            }),
            {
              params: {
                needCache,
                needRefresh,
              },
            },
          );
          return i.TZ(c.o(o.data, u.Cb));
        } catch (error) {
          return b.r(error);
        }
      })
      .call(this);
  }
  getImagePrompt(e, t) {
    return a
      ._(function* () {
        try {
          const n = yield this._networkClient.post(
            this._getUrl("/mweb/v1/get_image_description"),
            c.w(e),
            {
              params: m._({}, t),
            },
          );
          return i.TZ(c.o(n.data, u.Cb));
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
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
k = r.Cg(
  [
    r.Qj(0, o._),
    r.Qj(1, y.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      y.r === undefined ? Object : y.r,
    ]),
  ],
  k,
);
export class D {
  fetchImageModelConfigSync(e) {
    const t = d(this._preloadAGWInjectDataService, e);
    if (t.ok) {
      return i.TZ(m_1(t.value));
    }
    return t;
  }
  fetchImageModelConfig(e) {
    return a
      ._(function* () {
        let t = d(this._preloadAGWInjectDataService, e);
        if (!t.ok) {
          t = yield this._repository.getImageModelConfig(e);
        }
        if (t.ok) {
          return i.TZ(m_1(t.value));
        }
        return t;
      })
      .call(this);
  }
  getImagePrompt(e, t) {
    return this._repository.getImagePrompt(e, t);
  }
  constructor(e, t) {
    this._containerService = e;
    this._preloadAGWInjectDataService = t;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(k);
  }
}
D = r.Cg(
  [
    r.Qj(0, o._),
    r.Qj(1, l.G),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      l.G === undefined ? Object : l.G,
    ]),
  ],
  D,
);
