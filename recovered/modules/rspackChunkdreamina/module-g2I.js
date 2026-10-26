import r from "NY";
import n from "QWK";
import a from "K8";
import o from "Kt";
import { R } from "./module-E0b_3.js";
import s from "oa";
import u from "bk";
import d from "cBI";
import c from "yF";
import m from "fg";
import p from "KC";
import v from "dR";
import f from "qN";
import g from "fm";
import h from "b5";
import y from "iN";
import _ from "Bh7";
import * as b from "./module-Np_3.js";
import { SQ, dj } from "./module-ff.js";
import { Vo, ax, wM, wW } from "./module-RF1.js";
class A {
  ensureCategoryId() {
    return r
      ._(function* () {
        if (this._cachedCategoryId !== undefined) {
          return this._cachedCategoryId;
        }
        const e = (() => {
          if (typeof window !== "undefined") {
            const e = window.__get_explore_params;
            return ax(e == null ? undefined : e.category_id);
          }
        })();
        if (e !== undefined) {
          this._cachedCategoryId = e;
          return e;
        }
        if (this._request == null) {
          this._request = this._fetchCategoryId().finally(() => {
            this._request = undefined;
          });
        }
        const t = yield this._request;
        this._cachedCategoryId = t;
        return t;
      })
      .call(this);
  }
  constructor(e) {
    this._fetchCategoryId = e;
  }
}
class S {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new p.LL().build(
          u._(s._({}, p.gh), {
            withCredentials: true,
          }),
        )),
        d.U(e, t),
        v.vo(t),
        f.Wh(t),
        c.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  get _overseasInspirationCategoryIdResolver() {
    if (this._overseasInspirationCategoryIdResolverInstance == null) {
      this._overseasInspirationCategoryIdResolverInstance = new A(() =>
        this._fetchOverseasInspirationCategoryId(),
      );
    }
    return this._overseasInspirationCategoryIdResolverInstance;
  }
  getCatalog(page, t) {
    return r
      ._(function* () {
        try {
          const i = m.w(
            s._(
              {
                page,
              },
              page === "home" && t
                ? {
                    enableHomeVisibilityFilter: true,
                  }
                : {},
            ),
            true,
          );
          const r = yield this._networkClient.post(
            this._getApi(b.n.GET_EXPLORE_CATEGORY_LIST),
            i,
          );
          return wM(m.o(r.data, g.Cb));
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  getExploreSceneList(e) {
    return r
      ._(function* () {
        if (
          !(
            Vo(e.sceneId) &&
            Number.isSafeInteger(e.offset) &&
            e.offset >= 0 &&
            Number.isSafeInteger(e.count) &&
            e.count > 0 &&
            dj(e.loadReason)
          ) ||
          (e.requestProfile !== undefined &&
            (t = e.requestProfile) !== "dynamic" &&
            t !== "dynamic-short-film" &&
            t !== "inspiration" &&
            t !== "short-film")
        ) {
          return a.xz(-1, "invalid Explore scene page query");
        }
        try {
          var t;
          const { requestProfile } = e;
          const { body, config } = yield r._(function* () {
            let t;
            const i = Number(e.sceneId);
            const categoryId = Number.isSafeInteger(i) ? i : e.sceneId;
            const n = (t = e.requestProfile) != null ? t : "dynamic";
            const workTypeList =
              n === "inspiration"
                ? ["video", "image", "canvas"]
                : n === "short-film" || n === "dynamic-short-film"
                  ? ["short_video"]
                  : undefined;
            return s._(
              {
                body: m.w(
                  s._(
                    {
                      categoryId,
                      offset: e.offset,
                      count: e.count,
                      feedRefer: SQ(e.loadReason),
                    },
                    workTypeList === undefined
                      ? {}
                      : {
                          filter: {
                            workTypeList,
                          },
                          imageInfo: yield _.u(),
                        },
                  ),
                  true,
                ),
              },
              n === "dynamic"
                ? {
                    config: {
                      params: {
                        web_entry: b.f,
                      },
                    },
                  }
                : {},
            );
          })();
          const l = this._getApi(b.n.GET_EXPLORE);
          const u = config
            ? yield this._networkClient.post(l, body, config)
            : yield this._networkClient.post(l, body);
          return this._normalizeScenePage(u);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  _normalizeScenePage(e) {
    return wW(m.o(e.data, g.Cb));
  }
  _fetchOverseasInspirationCategoryId() {
    return r
      ._(function* () {
        let e;
        const t = yield this._networkClient.post(
          this._getApi(b.n.GET_PANEL_INFO),
          {
            panel: "image_aigc",
          },
        );
        const i = m.o(t.data, g.Cb);
        const r = ax((e = i.categoryList[0]) == null ? undefined : e.id);
        if (r === undefined) {
          throw Error(
            "Failed to resolve overseas Explore Inspiration category id",
          );
        }
        return r;
      })
      .call(this);
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: y.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
  }
}
S = n.Cg(
  [
    n.Qj(0, y.r),
    n.Qj(1, o._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      y.r === undefined ? Object : y.r,
      o._ === undefined ? Object : o._,
    ]),
  ],
  S,
);
class C {
  getCatalog(e, t) {
    return r
      ._(function* () {
        const i = yield this._repository.getCatalog(e, t);
        if (i.ok) {
          return a.TZ(R(i.value));
        }
        return i;
      })
      .call(this);
  }
  getExploreSceneList(e) {
    return this._repository.getExploreSceneList(e);
  }
  constructor(e) {
    this._repository = e.createInstance(S);
  }
}
export { C as p };
C = n.Cg(
  [
    n.Qj(0, o._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  C,
);
