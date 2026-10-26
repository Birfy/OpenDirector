import r from "NY";
import s from "oa";
import n from "bk";
import o from "dw4";
import a from "Qey";
import * as u from "./module-NP_2.js";
export function R() {
  return a.Ay.t(
    "genetate_sidebar_asset_load_failed_toast",
    {},
    "资产加载失败，请稍后重试",
  );
}
function d(filters) {
  if (filters) {
    return s._(
      {},
      filters,
      filters.statusFilters
        ? {
            statusFilters: [...filters.statusFilters],
          }
        : {},
      filters.resolutionList
        ? {
            resolutionList: [...filters.resolutionList],
          }
        : {},
      filters.ratioTypeList
        ? {
            ratioTypeList: [...filters.ratioTypeList],
          }
        : {},
      filters.generationModeList
        ? {
            generationModeList: [...filters.generationModeList],
          }
        : {},
      filters.timeRange
        ? {
            timeRange: s._(
              {},
              filters.timeRange.beginTimestamp !== undefined
                ? {
                    beginTimestamp: filters.timeRange.beginTimestamp,
                  }
                : {},
              filters.timeRange.endTimestamp !== undefined
                ? {
                    endTimestamp: filters.timeRange.endTimestamp,
                  }
                : {},
            ),
          }
        : {},
    );
  }
}
export class z {
  get loading() {
    this._loadingVersion;
    const e = this._config.getCacheKey();
    return this._inflightKeys.has(e) || this._pendingKeys.has(e);
  }
  get loadingMore() {
    this._loadingVersion;
    return this._isLoadingMore(this._config.getCacheKey());
  }
  get pageSize() {
    let e;
    if ((e = this._config.pageSize) != null) {
      return e;
    }
    return u.yQ;
  }
  get disposed() {
    return this._disposed;
  }
  get entities() {
    this._entityVersion;
    const e = this._cache.get(this._config.getCacheKey());
    if (e) {
      return e.assetIds
        .map((e) => this._entityStore.get(e))
        .filter((e) => e !== undefined);
    }
    return [];
  }
  get hasMore() {
    let e;
    let t;
    return (
      (e =
        (t = this._cache.get(this._config.getCacheKey())) == null
          ? undefined
          : t.hasMore) != null && e
    );
  }
  get canSearchDeeper() {
    let e;
    let t;
    return (
      (e =
        (t = this._cache.get(this._config.getCacheKey())) == null
          ? undefined
          : t.canSearchDeeper) != null && e
    );
  }
  queryCurrentIfUncached() {
    let e;
    let t;
    const i = this._config.getCacheKey();
    const r = this._cache.get(i);
    if (r && !r.stale) {
      if (this.errorText !== undefined) {
        o.h5(() => {
          this.errorText = undefined;
        });
      }
      return;
    }
    if ((e = (t = this._config).shouldDeferQuery) == null || !e.call(t)) {
      if (this._inflightKeys.has(i)) {
        this._pendingKeys.add(i);
        this._bumpLoadingVersion();
        return;
      }
      this.queryCurrent();
    }
  }
  queryCurrent() {
    return r
      ._(function* () {
        if (
          (u = (c = this._config).shouldDeferQuery) == null
            ? undefined
            : u.call(c)
        ) {
          return void o.h5(() => {
            this.errorText = undefined;
            this._bumpLoadingVersion();
          });
        }
        const e = this._config.getCacheKey();
        const scope = this._config.getScope();
        const assetType = this._config.getAssetType();
        const workspaceId = this._config.getWorkspaceId();
        const a = ++this._runToken;
        this._bumpLoadMoreToken(e);
        this._inflightKeys.add(e);
        if ((h = (v = this._config).onBeforeQuery) != null) {
          h.call(v);
        }
        o.h5(() => {
          this._endLoadingMore(e);
          this._bumpLoadingVersion();
          this.errorText = undefined;
        });
        try {
          var u;
          var c;
          var h;
          var v;
          let _;
          let p;
          var queryInput = this._config.buildQueryInput();
          const m = yield this._sessionService.query(queryInput);
          if (a !== this._runToken || e !== this._config.getCacheKey()) {
            return void this._sessionService.disposeSession(m.sessionId);
          }
          o.h5(() => {
            var o;
            var a = this._cache.get(e);
            if (
              (a == null ? undefined : a.sessionId) &&
              a.sessionId !== m.sessionId
            ) {
              this._sessionService.disposeSession(a.sessionId);
            }
            this._cache.set(
              e,
              n._(
                s._(
                  {
                    scope,
                    assetType,
                    workspaceId,
                  },
                  (queryInput == null
                    ? undefined
                    : queryInput.subjectSource) !== undefined
                    ? {
                        subjectSource: queryInput.subjectSource,
                      }
                    : {},
                  (queryInput == null ? undefined : queryInput.query)
                    ? {
                        query: queryInput.query,
                      }
                    : {},
                  (queryInput == null ? undefined : queryInput.filters)
                    ? {
                        filters: d(queryInput.filters),
                      }
                    : {},
                ),
                {
                  sessionId: m.sessionId,
                  assetIds: [...m.snapshot.assetIds],
                  hasMore: this._resolveHasMore(m.sessionId),
                  canSearchDeeper: (o = m.canSearchDeeper) != null && o,
                },
              ),
            );
            this._evictSuperseded(
              e,
              scope,
              assetType,
              workspaceId,
              queryInput == null ? undefined : queryInput.subjectSource,
            );
          });
          if ((_ = (p = this._config).onQueryComplete) != null) {
            _.call(p, {
              resultCount: m.snapshot.assetIds.length,
              searchId: m.searchId,
              queryInput,
            });
          }
        } catch (error) {
          if (a !== this._runToken || e !== this._config.getCacheKey()) {
            return;
          }
          o.h5(() => {
            this.errorText = this._config.onQueryError
              ? this._config.onQueryError(error)
              : R();
          });
          if ((y = (S = this._config).onQueryComplete) != null) {
            y.call(
              S,
              s._(
                {
                  resultCount: 0,
                  error,
                },
                queryInput
                  ? {
                      queryInput,
                    }
                  : {},
              ),
            );
          }
          let f;
          var y;
          var S;
          const I = (f = this._config.logTag) != null ? f : "AssetQueryEngine";
          console.error("[".concat(I, "] query failed"), error);
        } finally {
          this._inflightKeys.delete(e);
          this._retryPending(e);
          o.h5(() => {
            this._bumpLoadingVersion();
          });
        }
      })
      .call(this);
  }
  loadMore() {
    return r
      ._(function* () {
        const e = this._config.getCacheKey();
        const t = this._cache.get(e);
        if (
          !(
            !(t == null ? undefined : t.sessionId) ||
            !t.hasMore ||
            this.loading ||
            this._isLoadingMore(e)
          )
        ) {
          const { sessionId } = t;
          const r = this._bumpLoadMoreToken(e);
          o.h5(() => {
            this._beginLoadingMore(e);
          });
          try {
            const a = yield this._sessionService.loadMore(sessionId);
            if (r !== this._getLoadMoreToken(e)) {
              return;
            }
            if (
              o.h5(() => {
                var t;
                var r = this._cache.get(e);
                if (!r || r.sessionId !== sessionId) {
                  this._endLoadingMore(e);
                  return false;
                }
                var length = r.assetIds.length;
                var canSearchDeeper =
                  (t = a.canSearchDeeper) != null ? t : r.canSearchDeeper;
                if (
                  a.snapshot.assetIds.length <= length &&
                  canSearchDeeper &&
                  length > 0
                ) {
                  this._endLoadingMore(e);
                  return true;
                }
                this._cache.set(
                  e,
                  n._(s._({}, r), {
                    sessionId: a.sessionId,
                    assetIds: [...a.snapshot.assetIds],
                    hasMore: this._resolveHasMore(a.sessionId),
                    canSearchDeeper,
                  }),
                );
                this._endLoadingMore(e);
                return false;
              }) &&
              this._config.getCacheKey() === e
            ) {
              this.searchDeeper();
            }
          } catch (error) {
            if (r !== this._getLoadMoreToken(e)) {
              return;
            }
            o.h5(() => {
              this._endLoadingMore(e);
            });
            if (
              !((u = (l = this._config).onLoadMoreError) == null
                ? undefined
                : u.call(l, error))
            ) {
              var u;
              var l;
              let d;
              const c =
                (d = this._config.logTag) != null ? d : "AssetQueryEngine";
              console.error("[".concat(c, "] loadMore failed"), error);
            }
          }
        }
      })
      .call(this);
  }
  searchDeeper() {
    return r
      ._(function* () {
        const e = this._config.getCacheKey();
        const t = this._cache.get(e);
        if (
          !(
            !(t == null ? undefined : t.sessionId) ||
            !t.canSearchDeeper ||
            this.loading ||
            this._isLoadingMore(e)
          )
        ) {
          const { sessionId } = t;
          const r = t.assetIds.length === 0;
          const a = this._bumpLoadMoreToken(e);
          if (r) {
            this._inflightKeys.add(e);
          }
          o.h5(() => {
            if (r) {
              this._bumpLoadingVersion();
            } else {
              this._beginLoadingMore(e);
            }
          });
          const u = () => {
            if (r) {
              this._inflightKeys.delete(e);
              this._bumpLoadingVersion();
            } else {
              this._endLoadingMore(e);
            }
          };
          try {
            const l = yield this._sessionService.searchDeeper(sessionId);
            if (a !== this._getLoadMoreToken(e)) {
              return;
            }
            o.h5(() => {
              var t;
              var r = this._cache.get(e);
              if (r && r.sessionId === sessionId) {
                this._cache.set(
                  e,
                  n._(s._({}, r), {
                    sessionId: l.sessionId,
                    assetIds: [...l.snapshot.assetIds],
                    hasMore: this._resolveHasMore(l.sessionId),
                    canSearchDeeper:
                      (t = l.canSearchDeeper) != null ? t : r.canSearchDeeper,
                  }),
                );
              }
              u();
            });
          } catch (error) {
            if (a !== this._getLoadMoreToken(e)) {
              return;
            }
            o.h5(u);
            if (
              !((d = (c = this._config).onLoadMoreError) == null
                ? undefined
                : d.call(c, error))
            ) {
              var d;
              var c;
              let h;
              const v =
                (h = this._config.logTag) != null ? h : "AssetQueryEngine";
              console.error("[".concat(v, "] searchDeeper failed"), error);
            }
          }
        }
      })
      .call(this);
  }
  prefetch(e) {
    const { cacheKey, maxPages = 1 } = e;
    const r = this._cache.get(cacheKey);
    if (!((r && !r.stale) || this._inflightKeys.has(cacheKey))) {
      this._executePrefetch(e, maxPages);
    }
  }
  markAllStale() {
    this._cache.forEach((e) => {
      e.stale = true;
    });
  }
  markStaleByAssetTypes(e) {
    this._cache.forEach((t) => {
      if (e.has(t.assetType)) {
        t.stale = true;
      }
    });
  }
  markCurrentStale() {
    const e = this._cache.get(this._config.getCacheKey());
    if (e) {
      e.stale = true;
    }
  }
  prependToMatchingCaches(e, t) {
    let i;
    let r;
    const s =
      (i = (r = e.sourceRef) == null ? undefined : r.workspaceId) != null
        ? i
        : this._config.getWorkspaceId();
    const n = this._config.getCacheKey();
    this._cache.forEach((i, r) => {
      if (
        !(
          i.assetType !== e.assetType ||
          (this._isWorkspaceScope(i.scope) && i.workspaceId !== s) ||
          (t &&
            !t({
              scope: i.scope,
              query: i.query,
              filters: i.filters,
              subjectSource: i.subjectSource,
              isCurrent: r === n,
            })) ||
          i.assetIds.includes(e.assetId)
        )
      ) {
        i.assetIds.unshift(e.assetId);
      }
    });
  }
  removeFromMatchingCaches(e, t) {
    if (e.length) {
      const i = new Set(e);
      const r = this._config.getCacheKey();
      this._cache.forEach((e, s) => {
        if (
          !t ||
          t({
            scope: e.scope,
            query: e.query,
            filters: e.filters,
            subjectSource: e.subjectSource,
            isCurrent: s === r,
          })
        ) {
          e.assetIds = e.assetIds.filter((e) => !i.has(e));
        }
      });
    }
  }
  evictSessionsForWorkspace(e) {
    this._cache.forEach((t, i) => {
      if (this._isWorkspaceScope(t.scope) && t.workspaceId !== e) {
        if (t.sessionId) {
          this._sessionService.disposeSession(t.sessionId);
        }
        this._deleteCacheEntry(i);
      }
    });
  }
  invalidateEntityCache() {
    this._entityVersion += 1;
  }
  cancelInflight() {
    this._runToken += 1;
    this._cancelAllLoadMore();
    this._prefetchToken += 1;
    this._inflightKeys.clear();
    this._pendingKeys.clear();
    this._bumpLoadingVersion();
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._runToken += 1;
      this._cancelAllLoadMore();
      this._prefetchToken += 1;
      this._inflightKeys.clear();
      this._pendingKeys.clear();
      this._cache.forEach((e) => {
        if (e.sessionId) {
          this._sessionService.disposeSession(e.sessionId);
        }
      });
      this._cache.clear();
    }
  }
  _bumpLoadingVersion() {
    this._loadingVersion++;
  }
  _isLoadingMore(e) {
    let t;
    return (
      ((t = this._cache.get(e)) == null ? undefined : t.loadingMore) === true
    );
  }
  _getLoadMoreToken(e) {
    let t;
    let i;
    if (
      (t = (i = this._cache.get(e)) == null ? undefined : i.loadMoreToken) !=
      null
    ) {
      return t;
    }
    return 0;
  }
  _bumpLoadMoreToken(e) {
    const t = ++this._loadMoreTokenSeed;
    const i = this._cache.get(e);
    if (i) {
      i.loadMoreToken = t;
    }
    return t;
  }
  _beginLoadingMore(e) {
    const t = this._cache.get(e);
    if (t) {
      t.loadingMore = true;
      this._bumpLoadingVersion();
    }
  }
  _endLoadingMore(e) {
    const t = this._cache.get(e);
    if (t == null ? undefined : t.loadingMore) {
      t.loadingMore = false;
      this._bumpLoadingVersion();
    }
  }
  _cancelAllLoadMore() {
    this._loadMoreTokenSeed++;
    let e = false;
    this._cache.forEach((t) => {
      if (t.loadingMore) {
        e = true;
      }
      t.loadingMore = false;
      t.loadMoreToken = undefined;
    });
    if (e) {
      this._bumpLoadingVersion();
    }
  }
  _deleteCacheEntry(e) {
    const t = this._cache.get(e);
    if (t) {
      const i = this._inflightKeys.delete(e);
      const r = this._pendingKeys.delete(e);
      this._cache.delete(e);
      if (t.loadingMore || i || r) {
        this._bumpLoadingVersion();
      }
    }
  }
  _isWorkspaceScope(e) {
    let t;
    let i;
    let r;
    return (
      (t =
        (i = (r = this._config).isWorkspaceScope) == null
          ? undefined
          : i.call(r, e)) != null && t
    );
  }
  _resolveHasMore(e) {
    if (this._config.hasMore) {
      return this._config.hasMore(e);
    }
    return this._sessionService.hasMore(e);
  }
  _evictSuperseded(e, t, i, r, s) {
    this._cache.forEach((n, o) => {
      if (o !== e) {
        if (
          n.scope === t &&
          n.assetType === i &&
          n.workspaceId === r &&
          n.subjectSource === s
        ) {
          if (n.sessionId) {
            this._sessionService.disposeSession(n.sessionId);
          }
          this._deleteCacheEntry(o);
        }
      }
    });
  }
  _retryPending(e) {
    if (
      !(
        !this._pendingKeys.delete(e) ||
        this._disposed ||
        (this._config.shouldRetryPendingQuery &&
          !this._config.shouldRetryPendingQuery())
      )
    ) {
      if (this._config.getCacheKey() === e) {
        this.queryCurrentIfUncached();
      }
    }
  }
  _executePrefetch(e, t) {
    return r
      ._(function* () {
        const { cacheKey, queryInput, scope, assetType, workspaceId } = e;
        const subjectSource =
          (_ = e.subjectSource) != null ? _ : queryInput.subjectSource;
        const _prefetchToken = this._prefetchToken;
        const v = (p = this._config.logTag) != null ? p : "AssetQueryEngine";
        try {
          var _;
          var p;
          let g;
          const m = function* () {
            const e = g._cache.get(cacheKey);
            if (
              !(e == null ? undefined : e.hasMore) ||
              !e.sessionId ||
              _prefetchToken !== g._prefetchToken ||
              g._disposed
            ) {
              return "break";
            }
            const t = yield g._sessionService.loadMore(e.sessionId);
            if (_prefetchToken !== g._prefetchToken || g._disposed) {
              return "break";
            }
            const r = g._cache.get(cacheKey);
            if (!r || r.sessionId !== e.sessionId) {
              return "break";
            }
            o.h5(() => {
              var e;
              g._cache.set(
                cacheKey,
                n._(s._({}, r), {
                  sessionId: t.sessionId,
                  assetIds: [...t.snapshot.assetIds],
                  hasMore: g._resolveHasMore(t.sessionId),
                  canSearchDeeper:
                    (e = t.canSearchDeeper) != null ? e : r.canSearchDeeper,
                }),
              );
            });
            S++;
          };
          const f = yield this._sessionService.query(queryInput);
          if (_prefetchToken !== this._prefetchToken || this._disposed) {
            return void this._sessionService.disposeSession(f.sessionId);
          }
          const y = this._cache.get(cacheKey);
          if (y && !y.stale) {
            return void this._sessionService.disposeSession(f.sessionId);
          }
          o.h5(() => {
            var e;
            if (
              (y == null ? undefined : y.sessionId) &&
              y.sessionId !== f.sessionId
            ) {
              this._sessionService.disposeSession(y.sessionId);
            }
            this._cache.set(
              cacheKey,
              n._(
                s._(
                  {
                    scope,
                    assetType,
                    workspaceId,
                  },
                  subjectSource !== undefined
                    ? {
                        subjectSource,
                      }
                    : {},
                  queryInput.query
                    ? {
                        query: queryInput.query,
                      }
                    : {},
                  queryInput.filters
                    ? {
                        filters: d(queryInput.filters),
                      }
                    : {},
                ),
                {
                  sessionId: f.sessionId,
                  assetIds: [...f.snapshot.assetIds],
                  hasMore: this._resolveHasMore(f.sessionId),
                  canSearchDeeper: (e = f.canSearchDeeper) != null && e,
                },
              ),
            );
          });
          for (var S = 1; S < t;) {
            g = this;
            const I = yield* m();
            if (I === "break") {
              break;
            }
          }
        } catch (error) {
          if (_prefetchToken !== this._prefetchToken || this._disposed) {
            return;
          }
          console.warn(
            "[".concat(v, "] prefetch failed for key=").concat(cacheKey),
            error,
          );
        }
      })
      .call(this);
  }
  constructor(e, t, i) {
    this._sessionService = e;
    this._entityStore = t;
    this._config = i;
    this.errorText = undefined;
    this._entityVersion = 0;
    this._loadingVersion = 0;
    this._cache = new Map();
    this._runToken = 0;
    this._loadMoreTokenSeed = 0;
    this._prefetchToken = 0;
    this._disposed = false;
    this._inflightKeys = new Set();
    this._pendingKeys = new Set();
    o.l_(this, {
      _sessionService: false,
      _entityStore: false,
      _config: false,
      _runToken: false,
      _loadMoreTokenSeed: false,
      _prefetchToken: false,
      _disposed: false,
      _inflightKeys: false,
      _pendingKeys: false,
    });
  }
}
