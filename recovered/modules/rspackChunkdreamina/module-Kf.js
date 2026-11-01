import r from "NY";
import s from "oa";
import n from "QWK";
import o from "dw4";
import a from "nO";
import { LQ, wN } from "./module-BNQ.js";
import { QO } from "./module-IFN.js";
import { R as R_1 } from "./module-BOb.js";
import { b as b_1 } from "./module-vB_2.js";
function h(filters) {
  let t;
  return !!(filters == null || (t = filters.statusFilters) == null
    ? undefined
    : t.length);
}
function v(filters) {
  let t;
  let i;
  let r;
  return !!(
    (filters == null || (t = filters.resolutionList) == null
      ? undefined
      : t.length) ||
    (filters == null || (i = filters.ratioTypeList) == null
      ? undefined
      : i.length) ||
    (filters == null || (r = filters.generationModeList) == null
      ? undefined
      : r.length)
  );
}
function _(filters) {
  let t;
  let i;
  return (
    (filters == null || (t = filters.timeRange) == null
      ? undefined
      : t.beginTimestamp) !== undefined ||
    (filters == null || (i = filters.timeRange) == null
      ? undefined
      : i.endTimestamp) !== undefined
  );
}
function p(e) {
  return !!e.query || h(e.filters) || v(e.filters) || _(e.filters);
}
function g(e) {
  let t;
  return ((t = e.filters) == null ? undefined : t.onlyFavorited) === true;
}
function m(e, t) {
  let i;
  let r;
  let s;
  let n;
  const { query, filters } = t;
  return (
    !(
      query ||
      ((filters == null ? undefined : filters.onlyFavorited) && !e.favorited) ||
      h(filters) ||
      v(filters) ||
      _(filters)
    ) &&
    ((s = (i = t.filters) == null ? undefined : i.workspaceId) === undefined ||
      ((r = e.sourceRef) == null ? undefined : r.workspaceId) === s) &&
    (t.subjectSource === undefined ||
      (((n = e.summaryData) == null ? undefined : n.assetType) === "subject"
        ? e.summaryData.subjectSource
        : undefined) === t.subjectSource)
  );
}
function f(e) {
  return e.isCurrent && g(e) && p(e);
}
function y(e) {
  const {
    scope,
    assetType,
    workspaceId,
    teamId,
    teamMemberUserId,
    query,
    filters,
    subjectSource,
    sort,
  } = e;
  const d = teamId
    ? ""
        .concat(teamId, ":")
        .concat(teamMemberUserId != null ? teamMemberUserId : "")
    : "";
  return ""
    .concat(scope, "\0")
    .concat(assetType, "\0")
    .concat(
      scope === "session"
        ? workspaceId != null
          ? workspaceId
          : "none"
        : "all",
      "\0",
    )
    .concat(d, "\0")
    .concat(query != null ? query : "", "\0")
    .concat(
      ((e) => {
        if (!e) {
          return "";
        }
        let t;
        let i;
        let r;
        let s;
        let n;
        let o;
        let a;
        let u;
        const l = [];
        if (e.onlyFavorited) {
          l.push("favorited");
        }
        if ((t = e.filterTags) == null ? undefined : t.length) {
          l.push("tags:".concat([...e.filterTags].sort().join(",")));
        }
        if ((i = e.resolutionList) == null ? undefined : i.length) {
          l.push("resolutions:".concat([...e.resolutionList].sort().join(",")));
        }
        if ((r = e.ratioTypeList) == null ? undefined : r.length) {
          l.push(
            "ratios:".concat(
              [...e.ratioTypeList].sort((e, t) => e - t).join(","),
            ),
          );
        }
        if ((s = e.generationModeList) == null ? undefined : s.length) {
          l.push("modes:".concat([...e.generationModeList].sort().join(",")));
        }
        if (
          ((n = e.timeRange) == null ? undefined : n.beginTimestamp) !==
            undefined ||
          ((o = e.timeRange) == null ? undefined : o.endTimestamp) !== undefined
        ) {
          l.push(
            "time:"
              .concat((a = e.timeRange.beginTimestamp) != null ? a : "", "-")
              .concat((u = e.timeRange.endTimestamp) != null ? u : ""),
          );
        }
        return l.join("|");
      })(filters),
      "\0",
    )
    .concat(sort ? "".concat(sort.field, ":").concat(sort.order) : "", "\0")
    .concat(subjectSource != null ? subjectSource : "");
}
const S = require("tvS").u1("shared-asset-detail-navigation-service");
function I(e) {
  let t;
  let i;
  const query = (i = e.query) == null ? undefined : i.trim();
  const filters = ((e) => {
    if (e) {
      let t;
      let i;
      let r;
      let n;
      let o;
      let a;
      const u = {};
      if (e.onlyFavorited) {
        u.onlyFavorited = true;
      }
      if ((t = e.filterTags) == null ? undefined : t.length) {
        u.filterTags = [...e.filterTags];
      }
      if ((i = e.resolutionList) == null ? undefined : i.length) {
        u.resolutionList = [...e.resolutionList];
      }
      if ((r = e.ratioTypeList) == null ? undefined : r.length) {
        u.ratioTypeList = [...e.ratioTypeList];
      }
      if ((n = e.generationModeList) == null ? undefined : n.length) {
        u.generationModeList = [...e.generationModeList];
      }
      if (
        ((o = e.timeRange) == null ? undefined : o.beginTimestamp) !==
          undefined ||
        ((a = e.timeRange) == null ? undefined : a.endTimestamp) !== undefined
      ) {
        u.timeRange = s._(
          {},
          e.timeRange.beginTimestamp !== undefined
            ? {
                beginTimestamp: e.timeRange.beginTimestamp,
              }
            : {},
          e.timeRange.endTimestamp !== undefined
            ? {
                endTimestamp: e.timeRange.endTimestamp,
              }
            : {},
        );
      }
      if (Object.keys(u).length > 0) {
        return u;
      }
      return undefined;
    }
  })(e.filters);
  const sort = (t = e.sort)
    ? {
        field: t.field,
        order: t.order,
      }
    : undefined;
  return s._(
    {
      scope: e.scope,
      assetType: e.assetType,
    },
    e.workspaceId !== undefined
      ? {
          workspaceId: e.workspaceId,
        }
      : {},
    e.teamId !== undefined
      ? {
          teamId: e.teamId,
        }
      : {},
    e.teamMemberUserId !== undefined
      ? {
          teamMemberUserId: e.teamMemberUserId,
        }
      : {},
    query
      ? {
          query,
        }
      : {},
    e.subjectSource !== undefined
      ? {
          subjectSource: e.subjectSource,
        }
      : {},
    filters
      ? {
          filters,
        }
      : {},
    sort
      ? {
          sort,
        }
      : {},
  );
}
const b = {
  super_resolution: "super_resolution",
  frame_interpolation: "frame_interpolation",
};
class T {
  get _disposed() {
    return this._queryContext.disposed;
  }
  get entities() {
    return this._queryContext.entities;
  }
  get loading() {
    return this._queryContext.loading;
  }
  get loadingMore() {
    return this._queryContext.loadingMore;
  }
  get errorText() {
    return this._queryContext.errorText;
  }
  get hasMore() {
    return this._queryContext.hasMore;
  }
  get canSearchDeeper() {
    return this._queryContext.canSearchDeeper;
  }
  get pageSize() {
    return this._queryContext.pageSize;
  }
  activate() {
    this._queryContext.markCurrentStale();
    this._queryIfActive();
  }
  deactivate() {
    if (this._externalMutationHandle !== undefined) {
      clearTimeout(this._externalMutationHandle);
      this._externalMutationHandle = undefined;
    }
    this._queryContext.cancelInflight();
    this.loadMoreErrorText = undefined;
  }
  notifyCriteriaChanged() {
    const e = this._criteria();
    if (e.query || e.filters) {
      if (this._isActive()) {
        this._queryContext.queryCurrent();
      }
      return;
    }
    this._queryIfActive();
  }
  notifyWorkspaceChanged() {
    const e = this._criteria();
    this._queryContext.evictSessionsForWorkspace(e.workspaceId);
    if (e.scope === "session") {
      this._queryIfActive();
    }
  }
  markCurrentStale() {
    this._queryContext.markCurrentStale();
  }
  refresh() {
    return this._queryContext.queryCurrent();
  }
  loadMore() {
    return r
      ._(function* () {
        this.loadMoreErrorText = undefined;
        yield this._queryContext.loadMore();
      })
      .call(this);
  }
  searchDeeper() {
    return r
      ._(function* () {
        this.loadMoreErrorText = undefined;
        yield this._queryContext.searchDeeper();
      })
      .call(this);
  }
  prefetch(e, t) {
    const i = I(e);
    const cacheKey = y(i);
    this._queryContext.prefetch({
      cacheKey,
      queryInput: this._buildQueryInput(i),
      scope: i.scope,
      assetType: i.assetType,
      subjectSource: i.subjectSource,
      workspaceId: i.workspaceId,
      maxPages: t == null ? undefined : t.maxPages,
    });
  }
  favorite(e) {
    return this._domainManager.favorite(e);
  }
  download(e) {
    return this._domainManager.download(e);
  }
  delete(e) {
    return this._domainManager.delete(e);
  }
  openDetail(e, t) {
    return this._detailNavigationService.openDetail(e, t);
  }
  dispose() {
    if (!this._disposed) {
      this.deactivate();
      this._disposables.dispose();
      this._queryContext.dispose();
    }
  }
  _criteria() {
    return I(this._options.getCriteria());
  }
  _currentKey() {
    return y(this._criteria());
  }
  _isActive() {
    let e;
    let t;
    let i;
    return (
      (e =
        (t = (i = this._options).isActive) == null ? undefined : t.call(i)) ==
        null || e
    );
  }
  _requiresPendingWorkspace() {
    const e = this._criteria();
    return e.scope === "session" && e.workspaceId === undefined;
  }
  _queryIfActive() {
    if (this._isActive()) {
      this._queryContext.queryCurrentIfUncached();
    }
  }
  _handleExternalMutation() {
    this._queryContext.markAllStale();
    if (!(!this._isActive() || this._requiresPendingWorkspace())) {
      if (this._externalMutationHandle === undefined) {
        this._externalMutationHandle = setTimeout(() => {
          this._externalMutationHandle = undefined;
          if (!(!this._isActive() || this._requiresPendingWorkspace())) {
            this._queryContext.queryCurrent();
          }
        }, 120);
      }
    }
  }
  _handleGeneratedEntities(e) {
    let t;
    const i = (e) => {
      t._queryContext.prependToMatchingCaches(e, (t) => {
        if (t.isCurrent && p(t)) {
          r = true;
        }
        return m(e, t);
      });
    };
    if (e.length !== 0) {
      var r = false;
      for (const s of e) {
        t = this;
        i(s);
      }
      if (r) {
        return void this._handleExternalMutation();
      }
      const n = new Set(e.map((e) => e.assetType));
      this._queryContext.markStaleByAssetTypes(n);
    }
  }
  _handleEntityUpsertChanges(e) {
    let t;
    const i = (e) => {
      if (!e.previous) {
        return "continue";
      }
      const i = e.previous.favorited === true;
      const n = e.entity.favorited === true;
      if (i === n) {
        return "continue";
      }
      s.add(e.entity.assetType);
      if (n) {
        t._queryContext.prependToMatchingCaches(e.entity, (t) => {
          var i;
          if (f(t)) {
            r = true;
          }
          i = e.entity;
          return g(t) && m(i, t);
        });
        return "continue";
      }
      t._queryContext.removeFromMatchingCaches([e.entity.assetId], (e) => {
        if (f(e)) {
          r = true;
        }
        return g(e);
      });
    };
    if (e.length !== 0) {
      var r = false;
      var s = new Set();
      for (const n of e) {
        t = this;
        i(n);
      }
      if (s.size !== 0) {
        if (r) {
          return void this._handleExternalMutation();
        }
        this._queryContext.markStaleByAssetTypes(s);
      }
    }
  }
  _handleRemovedEntities(e) {
    if (e.length !== 0) {
      this._queryContext.removeFromMatchingCaches(e);
      this._handleExternalMutation();
    }
  }
  _buildQueryInput(e) {
    let t;
    let i;
    let r;
    let n;
    let o;
    let a;
    let l;
    let d;
    let c;
    let h;
    let v;
    let _;
    let p;
    const g = {
      assetType: e.assetType,
      pagination: {
        pageSize: this.pageSize,
      },
    };
    if (e.query) {
      g.query = e.query;
    }
    if (e.subjectSource !== undefined) {
      g.subjectSource = e.subjectSource;
    }
    if (e.sort) {
      g.sort = e.sort;
    }
    const m = {};
    if (e.scope === "session" && e.workspaceId !== undefined) {
      m.workspaceId = e.workspaceId;
    }
    if (e.teamId !== undefined) {
      m.teamId = e.teamId;
    }
    if (e.teamMemberUserId !== undefined) {
      m.teamMemberUserId = e.teamMemberUserId;
    }
    if (
      (i = e.filters) == null || (t = i.filterTags) == null
        ? undefined
        : t.length
    ) {
      const f = wN(
        e.assetType,
        e.filters.filterTags.map((e) => b[e]),
        e.query ? "search" : "browse",
      );
      if (f.length) {
        m.statusFilters = f;
      }
    }
    if (
      ((r = e.filters) == null ? undefined : r.onlyFavorited) &&
      LQ(e.assetType, e.query ? "search" : "browse")
    ) {
      m.onlyFavorited = true;
    }
    if (
      (o = e.filters) == null || (n = o.resolutionList) == null
        ? undefined
        : n.length
    ) {
      m.resolutionList = [...e.filters.resolutionList];
    }
    if (
      (l = e.filters) == null || (a = l.ratioTypeList) == null
        ? undefined
        : a.length
    ) {
      m.ratioTypeList = [...e.filters.ratioTypeList];
    }
    if (
      (c = e.filters) == null || (d = c.generationModeList) == null
        ? undefined
        : d.length
    ) {
      m.generationModeList = [...e.filters.generationModeList];
    }
    if (
      ((v = e.filters) == null || (h = v.timeRange) == null
        ? undefined
        : h.beginTimestamp) !== undefined ||
      ((p = e.filters) == null || (_ = p.timeRange) == null
        ? undefined
        : _.endTimestamp) !== undefined
    ) {
      m.timeRange = s._(
        {},
        e.filters.timeRange.beginTimestamp !== undefined
          ? {
              beginTimestamp: e.filters.timeRange.beginTimestamp,
            }
          : {},
        e.filters.timeRange.endTimestamp !== undefined
          ? {
              endTimestamp: e.filters.timeRange.endTimestamp,
            }
          : {},
      );
    }
    if (Object.keys(m).length > 0) {
      g.filters = m;
    }
    if (e.scope === "session") {
      g.hideStoryAgentResult = true;
    }
    return g;
  }
  constructor(e, t, i) {
    var r;
    this._domainManager = e;
    this._detailNavigationService = t;
    this._options = i;
    this._disposables = new a.C();
    this.loadMoreErrorText = undefined;
    this._queryContext = e.createQueryContext({
      getCacheKey: () => this._currentKey(),
      buildQueryInput: () => this._buildQueryInput(this._criteria()),
      getScope: () => this._criteria().scope,
      getAssetType: () => this._criteria().assetType,
      getWorkspaceId: () => this._criteria().workspaceId,
      isWorkspaceScope: (e) => e === "session",
      shouldDeferQuery: () => this._requiresPendingWorkspace(),
      shouldRetryPendingQuery: () =>
        !this._disposed &&
        this._isActive() &&
        !this._requiresPendingWorkspace(),
      onBeforeQuery: () => {
        o.h5(() => {
          this.loadMoreErrorText = undefined;
        });
      },
      onLoadMoreError: (e) => {
        if (QO(e)) {
          return true;
        }
        o.h5(() => {
          this.loadMoreErrorText = R_1();
        });
      },
      onQueryComplete: i.onSearchComplete
        ? (e) => {
            var t;
            var keyword = (t = e.queryInput) == null ? undefined : t.query;
            if (keyword) {
              i.onSearchComplete({
                searchId: e.searchId,
                keyword,
                resultCount: e.resultCount,
                error: e.error,
              });
            }
          }
        : undefined,
      pageSize: i.pageSize,
      logTag: (r = i.logTag) != null ? r : "AssetBrowser",
    });
    o.l_(this, {
      _domainManager: false,
      _detailNavigationService: false,
      _options: false,
      _externalMutationHandle: false,
      _disposables: false,
      _queryContext: false,
    });
    this._disposables.add(
      this._domainManager.onEntitiesUpsert(() =>
        this._queryContext.invalidateEntityCache(),
      ),
    );
    this._disposables.add(
      this._domainManager.onEntitiesUpsertChange((e) =>
        this._handleEntityUpsertChanges(e),
      ),
    );
    this._disposables.add(
      this._domainManager.onGeneratedEntitiesUpsert((e) =>
        this._handleGeneratedEntities(e),
      ),
    );
    this._disposables.add(
      this._domainManager.onEntitiesRemove((e) =>
        this._handleRemovedEntities(e),
      ),
    );
  }
}
class C {
  createSession(e) {
    return new T(this._domainManager, this._detailNavigationService, e);
  }
  constructor(e, t) {
    this._domainManager = e;
    this._detailNavigationService = t;
  }
}
C = n.Cg(
  [
    n.Qj(0, b_1),
    n.Qj(1, S),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      b_1 === undefined ? Object : b_1,
      S === undefined ? Object : S,
    ]),
  ],
  C,
);
const D = require("./module-O8m.js");
const M = require("./module-jjM.js");
const L = require("./module-mNu.js");
class R {
  openDetail(e, t) {
    return r
      ._(function* () {
        const i = yield this._assetDetailResolverService.resolveDetail(e);
        if (i) {
          return this._assetDetailOpenerService.openDetail(i, t);
        }
      })
      .call(this);
  }
  constructor(e, t) {
    this._assetDetailResolverService = e;
    this._assetDetailOpenerService = t;
  }
}
export function G(e) {
  let t;
  const i =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  e.register(S, (t = i.detailNavigationService) != null ? t : R);
  e.register(D.h, C);
}
R = n.Cg(
  [
    n.Qj(0, M.U),
    n.Qj(1, L.z),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      M.U === undefined ? Object : M.U,
      L.z === undefined ? Object : L.z,
    ]),
  ],
  R,
);
