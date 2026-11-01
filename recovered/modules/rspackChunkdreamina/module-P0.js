import r from "NY";
import a from "QWK";
import n from "K8";
import s from "KC";
import o from "qN";
import l from "dR";
import c from "b5";
import u from "iN";
import d from "Kt";
import h from "cBI";
import * as g from "./module-Si_3.js";
import { Ir } from "./module-f3_3.js";
import {
  $N,
  WB,
  WK,
  X_,
  a5,
  g7,
  go,
  p5,
  w6,
  y2,
  yp,
  zm,
} from "./module-SW_4.js";
import { $L, AG, C1, FJ, Fl, Pw, Tr, Xe, ln, pJ, rd, ry } from "./module-KW.js";
const p = "/mweb/v1/creation_agent/v2/skill/batch_get";
function _(_containerService) {
  const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const i = new s.LL().build({
    headers: {
      "Content-Type": t ? undefined : "application/json",
    },
    withCredentials: true,
  });
  h.U(_containerService, i);
  o.Wh(i);
  l.vo(i);
  return i;
}
class k {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance = _(this._containerService);
    }
    return this._networkClientInstance;
  }
  uploadSkill(e) {
    return r
      ._(function* () {
        try {
          if (this._uploadClient == null) {
            this._uploadClient = _(this._containerService, true);
          }
          const t = new FormData();
          t.append("request_id", e.requestId);
          if (e.replacement) {
            t.append("skill_id", e.replacement.skillId);
            t.append("expected_content_id", e.replacement.expectedContentId);
          } else {
            t.append("status", String(Ir.Disabled));
            t.append("user_created_from", String(g.rL));
          }
          t.append("file", e.file);
          const i = yield this._uploadClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/upload"),
            t,
            {
              signal: e.signal,
              params: {
                device_platform: "web",
                region: this._httpApiSettingService.userLocationInfo.region,
              },
            },
          );
          return y2(i);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  createSkill(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/create"),
            C1(e),
          );
          return p5(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  fetchSkillLibrary(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/list"),
            Pw(e),
          );
          return a5(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  fetchMarketSkillCategories() {
    return r
      ._(function* () {
        try {
          const e = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/categories"),
          );
          return $N(e);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  fetchMarketSkills(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/market/list"),
            rd(e),
          );
          return WK(t, e.categoryId);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  likeMarketSkill(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/like"),
            pJ(e),
          );
          return w6(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  searchMarketSkills(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/market/search"),
            ry(e),
          );
          return WB(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  fetchUserLikedSkills(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/like/list"),
            FJ(e),
          );
          return yp(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  fetchMarketSkillsByIds(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(this._getUrl(p), AG(e));
          return X_(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  fetchSkillsByIds(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(this._getUrl(p), AG(e));
          return zm(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  publishSkill(e) {
    return r
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/publish"),
            Tr(e),
          );
          return n.nj();
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  updateSkill(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/update"),
            $L(e),
          );
          return g7(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  deleteSkill(e) {
    return r
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/delete"),
            ln(e),
          );
          return n.nj();
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  deleteSkillPublication(e) {
    return r
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/publish/delete"),
            Fl(e),
          );
          return n.nj();
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  fetchSkillPublications(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getUrl("/mweb/v1/creation_agent/v2/skill/publish/list"),
            Xe(e),
          );
          return go(t);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: u.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
export { k as c };
k = a.Cg(
  [
    a.Qj(0, d._),
    a.Qj(1, u.r),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      d._ === undefined ? Object : d._,
      u.r === undefined ? Object : u.r,
    ]),
  ],
  k,
);
