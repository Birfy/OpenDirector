import n from "NY";
import o from "QWK";
import a from "K8";
import l from "Kt";
import r from "fYz";
import d from "nL";
import u from "fg";
import s from "fm";
import c from "oa";
import m from "yF";
import f from "KC";
import v from "qN";
import p from "dR";
import h from "K6J";
import _ from "b5";
import C from "Ev";
import y from "iN";
import M from "cBI";
import { m as m_1 } from "./module-nqL.js";
function g(_preloadAGWInjectDataService, i) {
  const t = _preloadAGWInjectDataService.getData(
    {
      paramsVar: "__image_generate_model_params__",
      resultVar: "__image_generate_model_config__",
      paramsMatch: (e) => {
        var t;
        var n = (t = d.rq()) != null ? t : "";
        return (
          (e.team_id === n || (e.team_id === undefined && n === "")) &&
          e.need_cache === (i.needCache || true) &&
          e.need_refresh === (i.needRefresh || false) &&
          e.is_client_filter === (i.isClientFilter || false) &&
          e.need_beta_model === true
        );
      },
      resultFormat: (e) => u.o(e.data, s.Cb),
    },
    {
      burn: false,
    },
  );
  if (t.ok && Array.isArray(t.value.modelList) && t.value.firstSelectedModel) {
    return t;
  }
  return a.xz(-1, "read preload failed");
}
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
  getImageModelConfig(e) {
    return n
      ._(function* () {
        try {
          const {
            needRefresh,
            needCache = true,
            isClientFilter,
            needBetaModel,
          } = e;
          const l = yield this._networkClient.post(
            this._getUrl("/mweb/v1/get_common_config"),
            u.w({
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
          return a.TZ(u.o(l.data, s.Cb));
        } catch (error) {
          return _.r(error);
        }
      })
      .call(this);
  }
  getImagePrompt(e, i) {
    return n
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/get_image_description"),
            u.w(e),
            {
              params: c._({}, i),
            },
          );
          return a.TZ(u.o(t.data, s.Cb));
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
  constructor(e, i) {
    this._containerService = e;
    this._httpApiSettingService = i;
  }
}
S = o.Cg(
  [
    o.Qj(0, l._),
    o.Qj(1, y.r),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      l._ === undefined ? Object : l._,
      y.r === undefined ? Object : y.r,
    ]),
  ],
  S,
);
export class D {
  fetchImageModelConfigSync(e) {
    const i = g(this._preloadAGWInjectDataService, e);
    if (i.ok) {
      return a.TZ(m_1(i.value));
    }
    return i;
  }
  fetchImageModelConfig(e) {
    return n
      ._(function* () {
        let i = g(this._preloadAGWInjectDataService, e);
        if (!i.ok) {
          i = yield this._repository.getImageModelConfig(e);
        }
        if (i.ok) {
          return a.TZ(m_1(i.value));
        }
        return i;
      })
      .call(this);
  }
  getImagePrompt(e, i) {
    return this._repository.getImagePrompt(e, i);
  }
  constructor(e, i) {
    this._containerService = e;
    this._preloadAGWInjectDataService = i;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(S);
  }
}
D = o.Cg(
  [
    o.Qj(0, l._),
    o.Qj(1, r.G),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      l._ === undefined ? Object : l._,
      r.G === undefined ? Object : r.G,
    ]),
  ],
  D,
);
