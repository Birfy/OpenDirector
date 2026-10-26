import i from "NY";
import a from "oa";
import o from "bk";
import n from "QWK";
import s from "dw4";
import l from "BDO";
import c from "Lg";
import d from "Y6";
import u from "KV";
import v from "lj";
import h from "tvS";
import p from "o7";
import m from "xi";
import g from "Kt";
import _ from "Egb";
import y from "Cc8";
import f from "HX";
import S from "m0R";
import k from "Ssw";
import { W as W_1 } from "./module-KC9.js";
import w from "d6P";
import I from "n3";
import C from "du";
import F from "kR";
import R from "cx";
import $ from "Gxu";
import T from "s6";
import N from "v1F";
import P from "Bu";
import W from "wH";
import { Gz, Uu, sJ, x_ } from "./module-wp_3.js";
import { yr } from "./module-Qpb_2.js";
import E from "E98";
import { Z1 as presets } from "./module-myQ_2.js";
import x from "cO";
import U from "ts";
import { P as P_1, Q } from "./module-jhM_2.js";
import Z from "iZ8";
let A = 0;
class O extends U.f {
  executor() {
    return i
      ._(function* () {
        if (!this.isDisposed) {
          this._image.crossOrigin = "anonymous";
          this._image.decoding = "async";
          this._image.fetchPriority = "low";
          this._image.src = x.m(this._url, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01ZEZsWE5Xa*FNbFo1WTNrNW$WcFh%blpp$np*c1ltM$NhR1JI-khaaWF%RnRXb*RX-TB4WE1Xa*li$$p1$2xoSmRscHRiSE5p$Xp*cFdWZE9jb*96%25aa1Z6$nJ%RmhDZ$ZwW*$IWlpWM%-wWk$kR2$tRj$O$EJqTWtaN$dqTldlZz09",
          });
          yield this._image.decode();
        }
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._url = e;
    this._image = t;
    this.key = `films-background:${++A}`;
    this.enqueueTime = Date.now();
    this.priority = "low";
  }
}
class z extends Z.D {
  tryPrev() {
    return this.tryJump(this._paginationStore.currentIndex - 1);
  }
  tryNext() {
    return this.tryJump(this._paginationStore.currentIndex + 1);
  }
  loadMore() {
    return Promise.resolve();
  }
  constructor({ list, currentItemId }) {
    var currentItem = list.find((e) => e.id === currentItemId);
    if (currentItem === undefined) {
      throw Error(
        "Recommendation feed item ".concat(
          currentItemId,
          " is not available in its section",
        ),
      );
    }
    super({
      preloadThreshold: 0,
      properties: {
        list: [...list],
        currentItem,
        hasMore: false,
        listStatus: "idle",
      },
    });
  }
}
const before = "default";
function H(e) {
  let t;
  let r;
  let i;
  return {
    hasFavorited: !!((r = e.statistic) == null ? undefined : r.hasFavorited),
    favoriteNum:
      (t = (i = e.statistic) == null ? undefined : i.favoriteNum) != null
        ? t
        : 0,
  };
}
var V = h.u1("create-recommendation-feed-manager");
export { V as Q };
function q(e) {
  return e.status === "loading" || e.status === "success";
}
class K extends p.jG {
  get categories() {
    return this._categories
      .filter(
        (e) =>
          !this.localizedHome ||
          e.sections.some((e) => {
            var { kind } = e;
            return kind === "inspiration";
          }),
      )
      .map((e) => {
        var { id, name, icon } = e;
        return a._(
          {
            id,
            name,
          },
          icon == null
            ? {}
            : {
                icon,
              },
        );
      });
  }
  get activeSections() {
    let e;
    const t = this._categories.find((e) => {
      var { id } = e;
      return id === this.activeCategoryId;
    });
    if (
      (e =
        t == null
          ? undefined
          : t.sections
              .filter((e) => !this.localizedHome || e.kind === "inspiration")
              .filter(q)) != null
    ) {
      return e;
    }
    return [];
  }
  get filmCategories() {
    return this._filmNavigation.categories;
  }
  get showFilmCategories() {
    return this._filmNavigation.showCategories;
  }
  get _filmNavigation() {
    return sJ(
      this._categories.map((e) => {
        var { name, showSubcategories, sections } = e;
        return {
          name,
          showSubcategories,
          scenes: sections.filter((e) => {
            var { kind } = e;
            return kind === "short-video";
          }),
        };
      }),
    );
  }
  get activeFilmSection() {
    return this._categories
      .flatMap((e) => {
        var { sections } = e;
        return sections;
      })
      .find((e) => e.id === this.activeFilmSceneId && e.kind === "short-video");
  }
  selectFilm(e) {
    const t = this._categories.find((t) => {
      var { sections } = t;
      return sections.some((t) => t.id === e && t.kind === "short-video");
    });
    const r =
      t == null
        ? undefined
        : t.sections.find((t) => t.id === e && t.kind === "short-video");
    if (
      t &&
      r &&
      (e !== this.activeFilmSceneId ||
        r.status === "error" ||
        r.status === "empty")
    ) {
      performance.mark(y.$7);
      if (r.status === "error" || r.status === "empty") {
        r.status = "idle";
      }
      this.activeFilmSceneId = e;
      this._reportSubcategoryEnter(t.name, e);
      this._ensureCategoryLoaded(t, "short-video");
    }
  }
  _openWorkDetail(e) {
    return i
      ._(function* (e) {
        const {
          workDetailData,
          source,
          selectedChild,
          reportParams,
          requestInfo,
        } = e;
        try {
          const n = yield this._workDetailFeatureLoaderService.getInstance();
          const paginationManager = this._createPaginationManager(source);
          n.openWorkDetailModal({
            workDetailData,
            modalLayer: l.S(workDetailData) ? "viewport" : undefined,
            selectedChild,
            paginationManager,
            reportUtil: {
              reportParams,
              getRequestInfoByUniqueId: (e) => {
                if (
                  paginationManager.data.list.some((t) => {
                    var { id } = t;
                    return id === e;
                  })
                ) {
                  return requestInfo;
                }
                return {};
              },
            },
          });
        } catch (error) {
          m.V.error(
            "[CreateRecommendationFeed] Failed to open work detail",
            error,
          );
        }
      })
      .apply(this, arguments);
  }
  load() {
    if (!this._loadPromise) {
      this.status = "loading";
      this._loadPromise = this._loadHome();
    }
    return this._loadPromise;
  }
  _loadHome() {
    return i
      ._(function* () {
        let e;
        const t = S.w();
        s.h5(() => {
          this.localizedHome = t === "v1" || t === "v2" || t === "v3";
        });
        const r = yr();
        const i =
          r && ((e = r.localizationVariant) != null ? e : "v0") === t
            ? this._loadSsrSnapshot(r)
            : this._loadCatalog();
        s.h5(() => {
          this.initialSnapshotRestored = true;
        });
        yield i;
      })
      .call(this);
  }
  selectCategory(e) {
    const t = this._categories.find((t) => {
      var { id } = t;
      return id === e;
    });
    if (
      t !== undefined &&
      this.categories.some((t) => {
        var { id } = t;
        return id === e;
      }) &&
      e !== this.activeCategoryId
    ) {
      const r = this.activeCategoryId;
      performance.mark(y.$7);
      this.activeCategoryId = e;
      this._reportCategoryEnter(r, e);
      this._ensureCategoryLoaded(t);
    }
  }
  _loadCatalog() {
    return i
      ._(function* () {
        try {
          const e = this.localizedHome
            ? yield this._exploreFeedDataService.getCatalog("home", true)
            : yield this._exploreFeedDataService.getCatalog("home");
          if (!e.ok) {
            return;
          }
          const t = e.value.categories.map((e) => this._toCategoryState(e));
          s.h5(() => {
            var e;
            var r;
            this._categories = t;
            this.activeCategoryId =
              (e = this.categories[0]) == null ? undefined : e.id;
            this.activeFilmSceneId = this.localizedHome
              ? (r = this.filmCategories[0]) == null
                ? undefined
                : r.id
              : undefined;
          });
          this._preloadFilmBackgrounds();
          if (this.activeCategoryId) {
            this._reportCategoryEnter(undefined, this.activeCategoryId);
          }
          const r = this._categories.find((e) => {
            var { id } = e;
            return id === this.activeCategoryId;
          });
          const i = this._categories.find((e) => {
            var { sections } = e;
            return sections.some((e) => {
              var { id, kind } = e;
              return id === this.activeFilmSceneId && kind === "short-video";
            });
          });
          yield Promise.allSettled([
            ...(r ? [this._ensureCategoryLoaded(r)] : []),
            ...(i ? [this._ensureCategoryLoaded(i, "short-video")] : []),
          ]);
        } catch (e) {
        } finally {
          s.h5(() => {
            this.status = "ready";
          });
          if (this._categories.length === 0) {
            this._loadPromise = undefined;
          }
        }
      })
      .call(this);
  }
  _loadSsrSnapshot(e) {
    return i
      ._(function* () {
        try {
          let t;
          let r;
          let i;
          const a = (e) => {
            const t = e.requestProfile ? Gz(e.requestProfile) : undefined;
            const r = i._categories
              .flatMap((e) => e.sections)
              .filter((r) => r.id === e.sceneId && (!t || r.kind === t));
            if (r.length === 0) {
              return "continue";
            }
            s.h5(() => {
              i._applySceneItems(r, e.items, ++i._dataVersion, e.requestId);
            });
            if (e.hasMore) {
              u.push(i._continueSeededScene(r, e));
            }
          };
          const o = e.catalog.categories.map((e) => this._toCategoryState(e));
          const [n] = o;
          const l =
            (t = o.find((t) => {
              var { id } = t;
              return id === e.activeCategoryId;
            })) != null
              ? t
              : n;
          s.h5(() => {
            this._categories = o;
            this.activeCategoryId = l == null ? undefined : l.id;
          });
          if (this.activeCategoryId) {
            this._reportCategoryEnter(undefined, this.activeCategoryId);
          }
          const c = this._categories.find((e) => {
            var { id } = e;
            return id === this.activeCategoryId;
          });
          s.h5(() => {
            this.activeFilmSceneId = this.localizedHome
              ? e.activeFilmSceneId
              : undefined;
          });
          this._preloadFilmBackgrounds();
          const d =
            (r = e.scenePages) != null ? r : e.scenePage ? [e.scenePage] : [];
          var u = [];
          for (const v of d) {
            i = this;
            a(v);
          }
          if (c) {
            u.push(this._ensureCategoryLoaded(c));
          }
          if (this.localizedHome && this.activeFilmSceneId) {
            const h = this._categories.find((e) => {
              var { sections } = e;
              return sections.some((e) => {
                var { id } = e;
                return id === this.activeFilmSceneId;
              });
            });
            if (h) {
              u.push(this._ensureCategoryLoaded(h, "short-video"));
            }
          }
          yield Promise.allSettled(u);
        } finally {
          s.h5(() => {
            this.status = "ready";
          });
          if (this._categories.length === 0) {
            this._loadPromise = undefined;
          }
        }
      })
      .call(this);
  }
  _preloadFilmBackgrounds() {
    let e;
    if (this.localizedHome && !this._store.isDisposed) {
      for (const t of this._categories.flatMap((e) => {
        var { sections } = e;
        return sections.flatMap((e) => {
          if (e.kind === "short-video") {
            return [e.backgroundLightUrl, e.backgroundDarkUrl];
          }
          return [];
        });
      })) {
        e = this;
        ((t) => {
          if (!(!t || e._filmBackgroundImages.has(t))) {
            const r = new Image();
            e._filmBackgroundImages.set(t, r);
            const i = new O(t, r);
            const a = e._resourcePreload.addTask(i);
            e._register({
              dispose: () => {
                a.dispose();
                i.dispose();
                r.removeAttribute("src");
              },
            });
          }
        })(t);
      }
      if (this._filmBackgroundImages.size > 0) {
        this._resourcePreload.start();
      }
    }
  }
  _continueSeededScene(e, t) {
    return i
      ._(function* () {
        const count = Math.max(
          0,
          this._getInitialSceneItemCount(e) - t.items.length,
        );
        if (count !== 0) {
          const i = ++this._dataVersion;
          try {
            const o = yield this._exploreFeedDataService.getExploreSceneList(
              a._(
                {
                  sceneId: t.sceneId,
                  offset: t.nextOffset,
                  count,
                  loadReason: "load-more",
                },
                t.requestProfile
                  ? {
                      requestProfile: t.requestProfile,
                    }
                  : {},
              ),
            );
            if (!o.ok) {
              return;
            }
            s.h5(() => {
              this._applySceneItems(
                e,
                o.value.items,
                i,
                o.value.requestId,
                true,
              );
            });
          } catch (e) {}
        }
      })
      .call(this);
  }
  _ensureCategoryLoaded(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "inspiration";
    return i
      ._(function* () {
        const r = e.sections.filter(
          (e) =>
            e.status === "idle" &&
            (!this.localizedHome ||
              (e.kind === t &&
                (t !== "short-video" || e.id === this.activeFilmSceneId))),
        );
        if (r.length !== 0) {
          s.h5(() => {
            for (var e of r) {
              e.status = "loading";
            }
          });
          const i = this._groupSectionsBySceneId(r);
          yield Promise.allSettled(i.map((e) => this._loadScene(e)));
        }
      })
      .call(this);
  }
  _loadScene(e) {
    return i
      ._(function* () {
        let t;
        const r = (t = e[0]) == null ? undefined : t.id;
        if (r !== undefined) {
          const i = ++this._dataVersion;
          try {
            let requestProfile;
            const n = yield this._exploreFeedDataService.getExploreSceneList(
              a._(
                {
                  sceneId: r,
                  offset: 0,
                  count: this._getInitialSceneItemCount(e),
                  loadReason: "initial",
                },
                requestProfile === undefined
                  ? {}
                  : {
                      requestProfile,
                    },
              ),
            );
            if (!n.ok) {
              return void s.h5(() => {
                this._markSectionsStatus(e, "error");
              });
            }
            const l = n.value.items;
            s.h5(() => {
              this._applySceneItems(e, l, i, n.value.requestId);
            });
          } catch (t) {
            s.h5(() => {
              this._markSectionsStatus(e, "error");
            });
          }
        }
      })
      .call(this);
  }
  _toCategoryState(e) {
    return o._(
      a._(
        {
          id: e.id,
          name: e.name,
        },
        e.iconUrl === undefined
          ? {}
          : {
              icon: e.iconUrl,
            },
      ),
      {
        showSubcategories: e.showSubcategories,
        sections: e.scenes.flatMap((t) =>
          this._toSectionStates(t).map((t) =>
            o._(a._({}, t), {
              showHeading: e.showSubcategories !== false,
            }),
          ),
        ),
      },
    );
  }
  _toSectionStates(e) {
    const t = o._(
      a._(
        {
          id: e.id,
          name: e.name,
        },
        e.description === undefined
          ? {}
          : {
              description: e.description,
            },
      ),
      {
        backgroundLightUrl: e.backgroundLightUrl,
        backgroundDarkUrl: e.backgroundDarkUrl,
        showMore: x_(e),
        status: "idle",
      },
    );
    return Uu(e).map((kind) => {
      if (kind === "short-video") {
        return o._(a._({}, t), {
          kind,
          items: [],
          requestIdByItemId: new Map(),
        });
      }
      return o._(a._({}, t), {
        kind,
        requestIdByItemId: new Map(),
        masonryStore: new W.v({
          presets,
          contentWidth: 0,
        }),
      });
    });
  }
  _groupSectionsBySceneId(e) {
    const t = [];
    const r = new Map();
    for (const i of e) {
      const a = r.get(i.id);
      if (a === undefined) {
        const o = [i];
        r.set(i.id, o);
        t.push(o);
        continue;
      }
      a.push(i);
    }
    return t;
  }
  _getInitialSceneItemCount(e) {
    return e.reduce(
      (acc, item) => Math.max(acc, item.kind === "inspiration" ? 50 : 10),
      0,
    );
  }
  _applySceneItems(e, t, r, i) {
    let a;
    const o = (e) => {
      if (e.kind === "inspiration") {
        const t = Q(s);
        a._updateSectionRequestIds(
          e,
          t.map((e) => {
            var { key } = e;
            return key;
          }),
          i,
          n,
        );
        if (n) {
          const r = new Set(
            e.masonryStore.list.map((e) => {
              var { key } = e;
              return key;
            }),
          );
          const o = t.filter((t) => {
            if (r.has(t.key)) {
              e.masonryStore.updateItem(t.key, t);
              return false;
            }
            r.add(t.key);
            return true;
          });
          e.masonryStore.push(...o);
        } else {
          e.masonryStore.setList(t);
        }
        e.status = e.masonryStore.list.length === 0 ? "empty" : "success";
        return "continue";
      }
      const l = P_1(s);
      a._updateSectionRequestIds(
        e,
        l.map((e) => {
          var { id } = e;
          return id;
        }),
        i,
        n,
      );
      if (n) {
        const c = new Map(e.items.map((e) => [e.id, e]));
        for (const d of l) {
          c.set(d.id, d);
        }
        e.items = Array.from(c.values());
      } else {
        e.items = l;
      }
      e.status = e.items.length === 0 ? "empty" : "success";
    };
    var n = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    var s = t.map((e) => this._resolveFavoriteState(e, r));
    for (const l of s) {
      const c = this._workDetailDataById.get(l.id);
      this._workDetailDataById.set(l.id, l);
      if (c !== undefined) {
        const d = H(c);
        const u = H(l);
        if (
          d.hasFavorited !== u.hasFavorited ||
          d.favoriteNum !== u.favoriteNum
        ) {
          this._updateInspirationPresentation(l);
        }
      }
    }
    for (const v of e) {
      a = this;
      o(v);
    }
  }
  _updateSectionRequestIds(e, t, r, i) {
    if (!i) {
      e.requestIdByItemId.clear();
    }
    for (const a of t) {
      if (!(i && e.requestIdByItemId.has(a))) {
        e.requestIdByItemId.set(a, r);
      }
    }
  }
  get _urlPath() {
    if (typeof location === "undefined") {
      return "";
    }
    return location.pathname;
  }
  _getWorkDetailRequestInfo(e, t) {
    const r = l.S(t);
    const i = this._categories.find((t) => {
      var { sections } = t;
      return sections.some((t) => {
        var { id, kind } = t;
        return id === e && (kind === "short-video") === r;
      });
    });
    const a =
      i == null
        ? undefined
        : i.sections.find((t) => {
            var { id, kind } = t;
            return id === e && (kind === "short-video") === r;
          });
    return {
      impressionId: a == null ? undefined : a.requestIdByItemId.get(t.id),
      category: i == null ? undefined : i.name,
      categoryId: i == null ? undefined : i.id,
      subcategory: a == null ? undefined : a.name,
      subcategoryId: a == null ? undefined : a.id,
    };
  }
  _createTemplateReportItem(e, t) {
    const context =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : this._getWorkDetailRequestInfo(t.sectionId, e);
    return {
      data: e,
      index: t.index,
      page: I.W.Create,
      urlPath: this._urlPath,
      tab: C.t2(this._containerService),
      context,
    };
  }
  _findTemplateReportSource(itemId) {
    for (const t of [
      ...this.activeSections,
      ...(this.activeFilmSection ? [this.activeFilmSection] : []),
    ]) {
      const index =
        t.kind === "short-video"
          ? t.items.findIndex((t) => {
              var { id } = t;
              return id === itemId;
            })
          : t.masonryStore.list.findIndex((t) => {
              var { key } = t;
              return key === itemId;
            });
      if (index >= 0) {
        return {
          sectionId: t.id,
          itemId,
          index,
        };
      }
    }
  }
  _withTemplateReportItem(e, t) {
    const r = this._workDetailDataById.get(e.itemId);
    if (r) {
      t(this._createTemplateReportItem(r, e));
    }
  }
  _reportCategoryEnter(e, t) {
    R.B(this._containerService, {
      before: e != null ? e : before,
      after: t,
      page: I.W.Create,
      urlPath: this._urlPath,
    });
  }
  _reportSubcategoryEnter(categoryName, t) {
    R.p(this._containerService, {
      before,
      after: t,
      categoryName,
      page: I.W.Create,
      urlPath: this._urlPath,
    });
  }
  _createFavoriteState(e, t) {
    let r;
    const i = H(e);
    const i_favoriteNum = i.favoriteNum;
    let favoriteNum = i_favoriteNum;
    if (i.hasFavorited !== t) {
      favoriteNum = t ? i_favoriteNum + 1 : Math.max(0, i_favoriteNum - 1);
    }
    return o._(a._({}, e), {
      statistic: o._(a._({}, (r = e.statistic) != null ? r : {}), {
        hasFavorited: t,
        favoriteNum,
      }),
    });
  }
  _resolveFavoriteState(e, t) {
    const r = this._favoriteStateVersionByItemId.get(e.id);
    if (this._pendingFavoriteItemIds.has(e.id) || (r !== undefined && t < r)) {
      const i = this._workDetailDataById.get(e.id);
      if (i === undefined) {
        return e;
      }
      return this._copyFavoriteState(e, i);
    }
    this._favoriteStateVersionByItemId.set(e.id, t);
    return e;
  }
  _copyFavoriteState(e, t) {
    let r;
    const i = H(t);
    return o._(a._({}, e), {
      statistic: o._(a._({}, (r = e.statistic) != null ? r : {}), {
        hasFavorited: i.hasFavorited,
        favoriteNum: i.favoriteNum,
      }),
    });
  }
  _syncFavoriteState(e, t) {
    const r = this._workDetailDataById.get(e);
    if (r !== undefined) {
      s.h5(() => {
        this._commitFavoriteState(e, this._copyFavoriteState(r, t));
      });
    }
  }
  _commitFavoriteState(e, t) {
    this._favoriteStateVersionByItemId.set(e, ++this._dataVersion);
    this._workDetailDataById.set(e, t);
    this._updateInspirationPresentation(t);
  }
  _updateInspirationPresentation(e) {
    const t = Q([e])[0];
    if (t !== undefined) {
      for (const r of this._categories) {
        for (const i of r.sections) {
          if (i.kind === "inspiration") {
            i.masonryStore.updateItem(e.id, t);
          }
        }
      }
    }
  }
  _createPaginationManager(e) {
    const { itemId, index } = e;
    const i = this._workDetailDataById.get(itemId);
    const a = i !== undefined && l.S(i);
    const o = this._categories
      .flatMap((e) => {
        var { sections } = e;
        return sections;
      })
      .find((i) => {
        var o;
        var n;
        return (
          i.id === e.sectionId &&
          (i.kind === "short-video"
            ? a && ((n = i.items[index]) == null ? undefined : n.id) === itemId
            : !a &&
              ((o = i.masonryStore.list[index]) == null ? undefined : o.key) ===
                itemId)
        );
      });
    const n =
      (o == null ? undefined : o.kind) === "short-video"
        ? o.items.map((e) => {
            var { id } = e;
            return id;
          })
        : o == null
          ? undefined
          : o.masonryStore.list.map((e) => {
              var { key } = e;
              return key;
            });
    return new z({
      list: (n != null ? n : [itemId]).flatMap((e) => {
        var t = this._workDetailDataById.get(e);
        if (t === undefined) {
          return [];
        }
        return [t];
      }),
      currentItemId: itemId,
    });
  }
  _markSectionsStatus(e, t) {
    for (const r of e) {
      r.status = t;
    }
  }
  constructor(e, t, r, n, u, v, h) {
    var p;
    super();
    p = this;
    this._exploreFeedDataService = e;
    this._workDetailFeatureLoaderService = t;
    this._dreaminaUiConfigurationService = r;
    this._containerService = n;
    this._workDetailOperatorDataService = u;
    this._domainModelChangeSyncService = v;
    this._resourcePreload = h;
    this.activeCategoryId = undefined;
    this.activeFilmSceneId = undefined;
    this.localizedHome = false;
    this.status = "idle";
    this.initialSnapshotRestored = false;
    this._categories = [];
    this._dataVersion = 0;
    this._workDetailDataById = new Map();
    this._favoriteStateVersionByItemId = new Map();
    this._pendingFavoriteItemIds = new Set();
    this._filmBackgroundImages = new Map();
    this.openFeedItemDetail = (source, selectedChild) =>
      i._(function* () {
        const { itemId, index } = source;
        const workDetailData = p._workDetailDataById.get(itemId);
        if (!workDetailData) {
          return void m.V.error(
            "[CreateRecommendationFeed] Missing work detail data",
            itemId,
          );
        }
        const requestInfo = p._getWorkDetailRequestInfo(
          source.sectionId,
          workDetailData,
        );
        const n = p._createTemplateReportItem(
          workDetailData,
          source,
          requestInfo,
        );
        $.nA(p._containerService, n);
        const reportParams = {
          enterScenario: c.ZU.Feed,
          eventPage: l.S(workDetailData) ? "story" : "inspiration",
          rank: index + 1,
          tab: C.t2(p._containerService),
        };
        yield p._openWorkDetail({
          workDetailData,
          source,
          selectedChild,
          reportParams,
          requestInfo,
        });
      })();
    this.openShortVideoCanvasPreview = (e) =>
      i._(function* () {
        let t;
        const r = p._workDetailDataById.get(e);
        if (r && E.x(r)) {
          const i = p._findTemplateReportSource(e);
          if (i) {
            $.hp(
              p._containerService,
              p._createTemplateReportItem(r, i),
              F.s((t = r.canvasInfo) == null ? undefined : t.canvasSourceType),
            );
          }
          try {
            (yield p._workDetailFeatureLoaderService.getInstance()).openShortVideoCanvasPreview(
              r,
            );
          } catch (error) {
            m.V.error(
              "[CreateRecommendationFeed] Failed to open short video canvas preview",
              error,
            );
          }
        }
      })();
    this.reportTemplateVisibilityChanged = (e, t, r) => {
      this._withTemplateReportItem(e, (e) => {
        if (t) {
          $.qq(this._containerService, e);
        } else {
          $._A(
            this._containerService,
            o._(a._({}, e), {
              urlPath: "".concat(_.Js).concat(_.ph[f.Du.Home]),
            }),
            r,
          );
        }
      });
    };
    this.reportTemplateHoverEnded = (e, t) => {
      this._withTemplateReportItem(e, (e) => {
        $.jN(this._containerService, e, t);
      });
    };
    this.reportTemplatePreviewEnded = (e, t) => {
      this._withTemplateReportItem(e, (e) => {
        $.xb(this._containerService, e, t);
        $.tS(this._containerService, e, t);
      });
    };
    this.toggleFavorite = (e, t) =>
      i._(function* () {
        const origin = p._workDetailDataById.get(e.key);
        const r = !!((n = e.statistic) == null ? undefined : n.hasFavorited);
        const i = origin !== undefined && H(origin).hasFavorited;
        if (
          !(origin === undefined || p._pendingFavoriteItemIds.has(e.key)) &&
          r === i
        ) {
          const a = !i;
          const o = p._createFavoriteState(origin, a);
          p._pendingFavoriteItemIds.add(e.key);
          s.h5(() => {
            p._workDetailDataById.set(e.key, o);
            p._updateInspirationPresentation(o);
          });
          try {
            var n;
            let l;
            const c = yield p._workDetailOperatorDataService.markFavorite({
              itemId: e.key,
              origin,
              hasFavorited: a,
            });
            const d = c.ok ? o : origin;
            const u = p._createFavoriteState(
              (l = p._workDetailDataById.get(e.key)) != null ? l : d,
              H(d).hasFavorited,
            );
            s.h5(() => {
              p._commitFavoriteState(e.key, u);
            });
            k.v(c);
          } catch (error) {
            let v;
            const h = p._createFavoriteState(
              (v = p._workDetailDataById.get(e.key)) != null ? v : origin,
              i,
            );
            s.h5(() => {
              p._commitFavoriteState(e.key, h);
            });
            m.V.error(
              "[CreateRecommendationFeed] Failed to update favorite",
              error,
            );
          } finally {
            p._pendingFavoriteItemIds.delete(e.key);
          }
        }
      })();
    this.openPersonal = (e, t) => {
      var r;
      var i;
      var secUid =
        (i = this._workDetailDataById.get(e.key)) == null ||
        (r = i.author) == null
          ? undefined
          : r.secUid;
      if (secUid) {
        this._dreaminaUiConfigurationService.navigate(f.Du.GuestPerson, {
          params: {
            secUid,
          },
          state: {
            hasBack: true,
          },
          replace: false,
        });
      }
    };
    this.viewMore = (e) => {
      var t = this._categories.find((t) => {
        var { id, sections } = t;
        return (
          (id === this.activeCategoryId ||
            (this.localizedHome && e === this.activeFilmSceneId)) &&
          sections.some((t) => t.id === e)
        );
      });
      if (t !== undefined) {
        this._reportSubcategoryEnter(t.name, e);
        W_1(this._dreaminaUiConfigurationService, {
          categoryId: t.id,
          sceneId: e,
        });
      }
    };
    s.Gn(this, {
      activeCategoryId: s.sH,
      activeFilmSceneId: s.sH,
      localizedHome: s.sH,
      initialSnapshotRestored: s.sH,
      filmCategories: s.EW,
      showFilmCategories: s.EW,
      activeFilmSection: s.EW,
      selectFilm: s.XI.bound,
      status: s.sH,
      _categories: s.sH,
      categories: s.EW,
      activeSections: s.EW,
      selectCategory: s.XI.bound,
      load: s.XI.bound,
    });
    this._register(
      this._domainModelChangeSyncService.registerDomainModelChangeListener({
        eventType: d.T.Update,
        modelType: d.$.WorkDetailData,
        callback: (e, t, r) => {
          if (r.scene === "favorite") {
            this._syncFavoriteState(e, t);
          }
        },
      }),
    );
    this._register({
      dispose: () => this._filmBackgroundImages.clear(),
    });
  }
}
export { K as $ };
K = n.Cg(
  [
    n.Qj(0, T.a),
    n.Qj(1, w.q),
    n.Qj(2, v.K),
    n.Qj(3, g._),
    n.Qj(4, N.v),
    n.Qj(5, u.j),
    n.Qj(6, P.d),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      T.a === undefined ? Object : T.a,
      typeof Pick === "undefined" ? Object : Pick,
      typeof Pick === "undefined" ? Object : Pick,
      g._ === undefined ? Object : g._,
      N.v === undefined ? Object : N.v,
      u.j === undefined ? Object : u.j,
      P.d === undefined ? Object : P.d,
    ]),
  ],
  K,
);
