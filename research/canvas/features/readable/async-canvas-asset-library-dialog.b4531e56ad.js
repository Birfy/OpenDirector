"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [6673],
  {
    77072(e, t, a) {
      let r = 0,
        s = new Set();
      function i() {
        for (let e of s) e();
      }
      function n() {
        return (
          (r += 1),
          i(),
          () => {
            ((r = Math.max(0, r - 1)), i());
          }
        );
      }
      function o(e) {
        return (
          s.add(e),
          () => {
            s.delete(e);
          }
        );
      }
      function l() {
        return r > 0;
      }
      a.d(t, { $f: () => l, h4: () => o, u$: () => n });
    },
    46252(e, t, a) {
      a.d(t, { AssetLibraryDialog: () => a0 });
      var r = a(90561),
        s = a(87429),
        i = a(82530),
        n = a(66876),
        o = a(60452),
        l = a(172),
        c = a(74642),
        d = a(25063),
        u = a(27607);
      function m(e) {
        return `canvas-asset-tab-${e}`;
      }
      function p(e) {
        return `canvas-asset-category-title-${e}`;
      }
      let h = {
        selectionMode: "multiple",
        tabs: {
          showPrimaryTabs: !0,
          groups: [
            {
              id: "assets",
              secondaryTabs: ["image", "video", "audio", "document"],
            },
            { id: "subjects", secondaryTabs: ["all"] },
          ],
        },
      };
      function v(e) {
        if (!e) return h;
        let t = {
            selectionMode: e.selectionMode ?? h.selectionMode,
            tabs: e.tabs ?? h.tabs,
          },
          a = (function (e) {
            if (!e) return;
            let t = {};
            for (let a of ["image", "video", "audio", "document"]) {
              let r = e[a];
              void 0 !== r && (t[a] = Math.max(0, Math.floor(r)));
            }
            return Object.keys(t).length > 0 ? t : void 0;
          })(e.maxSelectedCountByCategory),
          r = t;
        (void 0 !== e.maxSelectedCount &&
          (r = {
            ...r,
            maxSelectedCount: Math.max(0, Math.floor(e.maxSelectedCount)),
          }),
          void 0 !== e.maxSharedSelectedCount &&
            (r = {
              ...r,
              maxSharedSelectedCount: Math.max(
                0,
                Math.floor(e.maxSharedSelectedCount),
              ),
            }),
          void 0 !== e.maxSubjectSelectedCount &&
            (r = {
              ...r,
              maxSubjectSelectedCount: Math.max(
                0,
                Math.floor(e.maxSubjectSelectedCount),
              ),
            }),
          e.limitReachedLabels &&
            (r = { ...r, limitReachedLabels: e.limitReachedLabels }));
        let s = w(e.mutuallyExclusiveCategories);
        s && (r = { ...r, mutuallyExclusiveCategories: s });
        let i = (function (e) {
          if (!e || 0 === e.length) return;
          let t = [
            ...new Set(e.map((e) => e.trim()).filter((e) => e.length > 0)),
          ];
          if (0 !== t.length) return t;
        })(e.occupiedSelectionIds);
        return (
          e.mutuallyExclusiveCategoryGroups &&
            (r = {
              ...r,
              mutuallyExclusiveCategoryGroups: e.mutuallyExclusiveCategoryGroups
                .map(w)
                .filter((e) => void 0 !== e),
            }),
          i && (r = { ...r, occupiedSelectionIds: i }),
          a && (r = { ...r, maxSelectedCountByCategory: a }),
          r
        );
      }
      function g(e) {
        var t, a;
        let r =
          (null == (a = e.uploadSource) || null == (t = a.value)
            ? void 0
            : t.trim()) ?? "";
        return r.length > 0
          ? `resource:${r}`
          : "string" == typeof e.assetId && e.assetId.length > 0
            ? `asset:${e.assetId}`
            : void 0;
      }
      function b(e, t, a) {
        let r = new Set(),
          s = 0;
        for (let i of e) {
          if (t && !t(i)) continue;
          let e = g(i);
          if (void 0 === e) {
            s += 1;
            continue;
          }
          (null == a ? void 0 : a.has(e)) !== !0 && r.add(e);
        }
        return r.size + s;
      }
      function f(e, t, a) {
        let r = g(t);
        if (void 0 === r) return !1;
        if ((null == a ? void 0 : a.has(r)) === !0) return !0;
        for (let t of e) if (g(t) === r) return !0;
        return !1;
      }
      function y(e, t, a) {
        return b(e, (e) => e.category === t, a);
      }
      function x(e, t) {
        return b(
          e,
          (e) =>
            "audio" === e.category ||
            "image" === e.category ||
            "video" === e.category,
          t,
        );
      }
      function j(e, t, a) {
        let r = Array.from(t);
        return (
          !f(r, a, e.occupiedSelectionIds) &&
          (!!C(e, r, a.category) || void 0 !== S(e, r, a.category))
        );
      }
      function S(e, t, a) {
        var r;
        let s = Array.from(t),
          i = e.occupiedSelectionIds;
        if (
          void 0 !== e.maxSelectedCount &&
          b(s, void 0, i) >= e.maxSelectedCount
        )
          return "total";
        if (
          ("image" === a ||
            "audio" === a ||
            "video" === a ||
            "subject" === a) &&
          void 0 !== e.maxSharedSelectedCount &&
          x(s, i) + (e.externalSharedOccupancy ?? 0) >= e.maxSharedSelectedCount
        )
          return "shared";
        if ("image" !== a && "video" !== a && "audio" !== a && "document" !== a)
          return;
        let n = null == (r = e.maxSelectedCountByCategory) ? void 0 : r[a];
        return void 0 !== n && y(s, a, i) >= n ? "category" : void 0;
      }
      function C(e, t, a) {
        let r = [
            ...(e.mutuallyExclusiveCategoryGroups ?? []),
            e.mutuallyExclusiveCategories ?? [],
          ],
          s = Array.from(t);
        return r.some(
          (e) =>
            e.includes(a) &&
            s.some((t) => t.category !== a && e.includes(t.category)),
        );
      }
      function w(e) {
        if (!e) return;
        let t = ["image", "video", "audio", "document"],
          a = [...new Set(e.filter((e) => t.includes(e)))];
        return a.length > 1 ? a : void 0;
      }
      function M(e, t) {
        let a = e.tabs.groups.find((e) => e.id === t);
        if (!a) throw Error(`Asset library section "${t}" is not configured.`);
        return a;
      }
      function I(e) {
        return e.tabs.showPrimaryTabs && e.tabs.groups.length > 1;
      }
      function N(e, t) {
        let a = M(e, "assets");
        if ("assets" !== a.id)
          throw Error(
            "Asset library assets group resolved to an incompatible tab group.",
          );
        if (1 === a.secondaryTabs.length && !I(e)) {
          let e = a.secondaryTabs[0];
          return {
            category: e,
            containerRole: "region",
            kind: "title",
            labelledBy: p(e),
          };
        }
        return {
          category: t,
          containerRole: "tabpanel",
          kind: "tabs",
          labelledBy: m(t),
        };
      }
      var k = a(77072);
      function T(e) {
        if (!e.canvas)
          throw Error(
            "This Asset Library destination requires a Canvas runtime",
          );
        return e;
      }
      var A = a(38939),
        D = a(62283);
      let z = {
        importProgress: { completedCount: 0, totalCount: 0 },
        importStatus: "idle",
        lastImportResult: null,
      };
      class R {
        async importSelected() {
          var e, t, a, r, s, i, n, o, l, c, d, u;
          let m =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("importing" === this.snapshot.importStatus) return "failure";
          let p = this.assetActions.getSelectedAssetCount(),
            h =
              (null == (e = this.subjectSession)
                ? void 0
                : e.getSelectedSubjectCount()) ?? 0,
            v =
              (null == (t = this.canvasSession)
                ? void 0
                : t.getSelectedCount()) ?? 0,
            g = p + h + v;
          if (0 === g) return "failure";
          let b = Date.now(),
            f = { ...m, importStartedAtMs: b },
            y = [
              ...this.assetActions.getSelectedPlacementItems(),
              ...((null == (a = this.subjectSession)
                ? void 0
                : a.getSelectedPlacementItems()) ?? []),
            ];
          if (y.length !== p + h)
            throw Error(
              `Asset library placement item count ${y.length} does not match direct import count ${p + h}`,
            );
          let x = this.api.canvas
              ? this.assetActions.planCanvasBatchPlacements(
                  y,
                  this.importCenter ?? this.api.canvas.getViewportCenter(),
                )
              : { placementPolicy: "adjust", placements: [] },
            j = this.assetActions.beginImportPresentation();
          (j && (f = { ...f, presentation: j }),
            null == (s = this.api.canvas) ||
              null == (r = s.gestures) ||
              r.declare({
                surface: "assetImport",
                gesture: "confirmed",
                hasCanvasSelection: v > 0,
                revision: this.importRevision + 1,
              }));
          let S =
            v > 0
              ? ((null == (i = this.canvasSession)
                  ? void 0
                  : i.beginImport()) ?? null)
              : null;
          if (S && S.count !== v)
            throw (
              null == (n = this.canvasSession) || n.cancelImport(),
              null == (l = this.api.canvas) ||
                null == (o = l.gestures) ||
                o.declare({
                  surface: "assetImport",
                  gesture: "settled",
                  outcome: "failure",
                  revision: this.importRevision + 1,
                }),
              Error(
                `Canvas asset import count ${S.count} does not match frozen selection count ${v}`,
              )
            );
          let C = ++this.importRevision;
          (this.domainCompletedCounts.clear(),
            this.update({
              importProgress: { completedCount: 0, totalCount: g },
              importStatus: "importing",
              lastImportResult: null,
            }));
          let w = new AbortController();
          ((this.activeImportController = w),
            (this.activePresentation = j ?? null));
          let M = (0, D.o)({
              area: "canvas.asset_library",
              facts: this.api.app.observability.facts,
            }),
            I = "failure";
          try {
            return (I =
              (await M.tryRun(
                "importSelection",
                { mode: "async", fields: { itemCount: g }, signal: w.signal },
                (e) => this.executeImportSelection(e, p, h, v, g, C, x, f, S),
              )) ?? "failure");
          } finally {
            (this.activeImportController === w &&
              (this.activeImportController = null),
              null == j || j.cancel(),
              this.activePresentation === j && (this.activePresentation = null),
              M.dispose(),
              this.assetActions.refreshSpaceAfterImport(),
              null == (u = this.api.canvas) ||
                null == (d = u.gestures) ||
                d.declare({
                  surface: "assetImport",
                  gesture: "settled",
                  outcome: I,
                  revision: C,
                  reason: w.signal.aborted
                    ? "cancelled"
                    : null == (c = this.snapshot.lastImportResult)
                      ? void 0
                      : c.failureReason,
                }));
          }
        }
        async executeImportSelection(e, t, a, r, s, i, n, o, l) {
          var c, d, u, m;
          let p,
            h = { completed: !1 },
            v = this.createImportExecutions(t, a, r, i, n, e, o, h),
            g = await Promise.allSettled(
              v.map((e) => {
                let { promise: t } = e;
                return t;
              }),
            );
          if (i !== this.importRevision) return "failure";
          if ((this.recordRejectedImports(v, g, i, t, a, r), h.completed))
            return this.completeCanvasNodeHandoff(e, g, o, h);
          let b = v,
            f = g;
          if (r > 0) {
            let e = this.createDomainExecution(
                "canvas",
                r,
                i,
                async () => (
                  (p = l
                    ? await l.execute()
                    : { ok: !1, reason: "notEditingReady" }),
                  this.domainCompletedCounts.set("canvas", r),
                  this.incrementCompletedCount(r),
                  p.ok
                ),
              ),
              s = await Promise.allSettled([e.promise]);
            if (i !== this.importRevision) return "failure";
            (this.recordRejectedImports([e], s, i, t, a, r),
              (b = [...v, e]),
              (f = [...g, ...s]));
          }
          this.finalizeCrossDomainSelection(
            e,
            t,
            a,
            (null == p ? void 0 : p.ok) ? p.rootNodeIds : [],
            o.presentation,
          );
          let y =
              this.assetActions.getSelectedAssetCount() +
              ((null == (c = this.subjectSession)
                ? void 0
                : c.getSelectedSubjectCount()) ?? 0) +
              ((null == (d = this.canvasSession)
                ? void 0
                : d.getSelectedCount()) ?? 0),
            x = this.snapshot.importProgress.completedCount,
            j = Math.max(0, s - y);
          if (f.every((e) => "fulfilled" === e.status && e.value) && 0 === y)
            return (e.commit(() => this.update(z)), "fullSuccess");
          let S = t > 0 ? this.assetActions.getLastImportResult() : null,
            C = null == S ? void 0 : S.failureReason,
            w = null == S ? void 0 : S.guardReason,
            M =
              "canvasNotEditable" ===
              (m =
                a > 0
                  ? null == (u = this.subjectSession)
                    ? void 0
                    : u.getSnapshot().importFailure
                  : void 0)
                ? "notEditingReady"
                : "pageRefreshRequired" === m
                  ? "pageRefreshRequired"
                  : void 0,
            I = (function (e) {
              if (
                e &&
                !e.ok &&
                "cancelled" !== e.reason &&
                "commandFailed" !== e.reason
              )
                return e.reason;
            })(p),
            N = {
              failedCount: Math.max(0, x - j),
              successfulCount: j,
              uncompletedCount: Math.max(0, s - x),
            };
          ((C || M || I) && (N = { ...N, failureReason: C ?? M ?? I }),
            (null == S ? void 0 : S.failureDescription) &&
              (N = { ...N, failureDescription: S.failureDescription }),
            w && (N = { ...N, guardReason: w }));
          let k = f.some((e, t) => {
            if ("rejected" === e.status) return !0;
            if (e.value) return !1;
            let a = b[t];
            return (null == a ? void 0 : a.domain) !== "asset" || !w;
          });
          return 0 === j && w && !k
            ? (e.commit(() => {
                (e.facts.emit(A.cZ, { reason: w }),
                  this.update({
                    importProgress: { completedCount: 0, totalCount: 0 },
                    importStatus: "error",
                    lastImportResult: N,
                  }));
              }),
              "failure")
            : (e.fail(new P(), () => {
                this.update({
                  importProgress: { completedCount: 0, totalCount: 0 },
                  importStatus: "error",
                  lastImportResult: N,
                });
              }),
              j > 0 ? "partialSuccess" : "failure");
        }
        finalizeCrossDomainSelection(e, t, a, r, s) {
          var i;
          if ((0 === a && 0 === r.length) || e.signal.aborted) return;
          let n = [],
            o = [];
          if (t > 0) {
            let e = this.assetActions.getLastImportedCanvasNodes().map((e) => {
              let { nodeId: t } = e;
              return t;
            });
            (n.push(...e), o.push(...e));
          }
          for (let e of (null == (i = this.subjectSession)
            ? void 0
            : i.getLastImportedSubjects()) ?? [])
            (n.push(e.nodeId), e.reusedExistingNode || o.push(e.nodeId));
          if ((n.push(...r), o.push(...r), 0 !== n.length)) {
            if (s)
              return void s.complete({
                newContentNodeIds: o,
                selectionNodeIds: n,
              });
            T(this.api).canvas.actions.importAsset.finalizeSelection(n, "user");
          }
        }
        completeCanvasNodeHandoff(e, t, a, r) {
          var s, i, n, o;
          let l = r.summary;
          if (!l)
            return (e.fail((0, D.DN)("aborted"), () => void 0), "failure");
          let c =
            ((i = e),
            (n = t),
            (o = l),
            n.every((e) => "fulfilled" === e.status && e.value)
              ? (i.commit(() => void 0), "fullSuccess")
              : (i.fail(new P(), () => void 0),
                o.successfulCount > 0 ? "partialSuccess" : "failure"));
          return (
            null == (s = a.onCanvasNodeImportSettled) || s.call(a, c, l),
            c
          );
        }
        recordRejectedImports(e, t, a, r, s, i) {
          for (let [n, o] of t.entries()) {
            if ("rejected" !== o.status) continue;
            let t = e[n];
            t &&
              (this.recordRejectedDomain(t, a),
              this.api.app.observability.logger.error(
                "Asset library combined import failed",
                o.reason,
                {
                  assetCount: r,
                  domain: t.domain,
                  subjectCount: s,
                  ...(i > 0 ? { canvasCount: i } : {}),
                },
              ));
          }
        }
        cancelImport() {
          var e, t, a, r;
          let s = "importing" === this.snapshot.importStatus;
          s &&
            ((this.importRevision += 1),
            null == (a = this.activePresentation) || a.cancel(),
            null == (r = this.activeImportController) ||
              r.abort((0, D.DN)("aborted")));
          let i = this.assetActions.cancelImport(),
            n =
              (null == (e = this.subjectSession) ? void 0 : e.cancelImport()) ??
              !1,
            o =
              (null == (t = this.canvasSession) ? void 0 : t.cancelImport()) ??
              !1;
          return (s && this.update(z), s || i || n || o);
        }
        createImportExecutions(e, t, a, r, s, i, n, o) {
          let l;
          0 === t &&
            0 === a &&
            n.onCanvasNodeImportStarted &&
            (l = () => {
              if (this.assetActions.handoffActiveCanvasNodeImport()) {
                var e;
                ((o.completed = !0),
                  null == (e = n.onCanvasNodeImportStarted) || e.call(n));
              }
            });
          let c = [];
          if (e > 0) {
            let d = {
              importStartedAtMs: n.importStartedAtMs,
              onItemSettled: () => this.recordDomainItemSettled("asset", r),
              onBatchSettled: (e) => {
                o.summary = e;
              },
              parentOperation: i,
              placements: s.placements.slice(0, e),
            };
            (n.presentation && (d = { ...d, presentation: n.presentation }),
              "final" === s.placementPolicy &&
                (d = { ...d, placementPolicy: "final" }),
              (t > 0 || a > 0) && (d = { ...d, selectionPolicy: "defer" }),
              l && (d = { ...d, onBatchStarted: l }),
              c.push(
                this.createDomainExecution("asset", e, r, () =>
                  this.assetActions.importSelected(d),
                ),
              ));
          }
          let d = this.subjectSession;
          if (t > 0 && d) {
            let a = {
              importStartedAtMs: n.importStartedAtMs,
              onItemSettled: () => this.recordDomainItemSettled("subject", r),
              parentOperation: i,
              placements: s.placements.slice(e, e + t),
            };
            ((e > 0 || n.presentation) &&
              (a = { ...a, selectionPolicy: "defer" }),
              c.push(
                this.createDomainExecution("subject", t, r, () =>
                  d.importSelected(a),
                ),
              ));
          }
          return c;
        }
        createDomainExecution(e, t, a, r) {
          return (
            this.domainCompletedCounts.set(e, 0),
            { domain: e, itemCount: t, promise: r(), revision: a }
          );
        }
        recordDomainItemSettled(e, t) {
          t === this.importRevision &&
            "importing" === this.snapshot.importStatus &&
            (this.domainCompletedCounts.set(
              e,
              (this.domainCompletedCounts.get(e) ?? 0) + 1,
            ),
            this.incrementCompletedCount(1));
        }
        recordRejectedDomain(e, t) {
          if (e.revision !== t || t !== this.importRevision) return;
          let a = this.domainCompletedCounts.get(e.domain) ?? 0;
          this.incrementCompletedCount(Math.max(0, e.itemCount - a));
        }
        incrementCompletedCount(e) {
          0 !== e &&
            "importing" === this.snapshot.importStatus &&
            this.update({
              importProgress: {
                completedCount: Math.min(
                  this.snapshot.importProgress.completedCount + e,
                  this.snapshot.importProgress.totalCount,
                ),
                totalCount: this.snapshot.importProgress.totalCount,
              },
            });
        }
        update(e) {
          for (let t of ((this.snapshot = { ...this.snapshot, ...e }),
          [...this.listeners]))
            t();
        }
        constructor(e, t, a, r, s) {
          ((this.api = e),
            (this.assetActions = t),
            (this.subjectSession = a),
            (this.importCenter = r),
            (this.canvasSession = s),
            (this.snapshot = z),
            (this.listeners = new Set()),
            (this.domainCompletedCounts = new Map()),
            (this.activeImportController = null),
            (this.activePresentation = null),
            (this.importRevision = 0),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )));
        }
      }
      class P extends Error {
        constructor() {
          (super("Asset library combined import failed"),
            (this.code = "ASSET_LIBRARY_COMBINED_IMPORT_FAILED"),
            (this.name = "AssetLibraryCombinedImportError"));
        }
      }
      var F = a(49350),
        E = a(39243);
      function U() {
        let e = (0, E.QQ)();
        return (0, s.useCallback)(
          (t, a) => {
            e({
              status: a ? "failure" : "success",
              title: a ? (0, n.SjG)(t) : (0, n.Mxy)(t),
            });
          },
          [e],
        );
      }
      var L = a(80259),
        V = a(4081),
        Z = a(40627),
        B = a(3708),
        W = a(2153),
        Q = a(34160),
        _ = a(77780),
        O = a(25466);
      class Y {
        getFavoriteDisabledReason() {
          var e;
          return (
            null == (e = this.api.canvas)
              ? void 0
              : e.getPermissionSnapshot().canEdit
          )
            ? this.service.setFavorite && this.store.getState().space.available
              ? void 0
              : (0, n.yzb)()
            : (0, n.uIs)();
        }
        toggleFavorite(e) {
          !this.getFavoriteDisabledReason() &&
            e.favorite &&
            "importing" !== this.store.getState().importStatus &&
            this.favorites.toggle(
              e.favorite.key,
              e.favorite.isFavorite,
              async (t, a) => {
                var r, s;
                await (null == (r = (s = this.service).setFavorite)
                  ? void 0
                  : r.call(s, e, t, a));
              },
            );
        }
        get importTarget() {
          if (!this.canvasImportTarget)
            throw Error("Canvas import target is unavailable");
          return this.canvasImportTarget;
        }
        selectMember(e) {
          let t = this.store.getState();
          t.space.teamId &&
            "importing" !== t.importStatus &&
            t.memberUserId !== e &&
            ("0" === e || t.members.some((t) => t.userId === e)) &&
            (this.abortPages(),
            t.selectMember(e),
            this.selectedPresentationByAssetId.clear(),
            this.reloadActiveCategory());
        }
        async loadMembers() {
          var e, t, a;
          let r = this.store.getState();
          if (!this.running || !r.space.teamId || !this.service.listMembers)
            return;
          null == (e = this.membersRequest) || e.abort();
          let s = new AbortController();
          this.membersRequest = s;
          let i = r.space.key;
          r.setMembers("loading");
          try {
            let e = await this.service.listMembers(s.signal);
            this.running &&
              !s.signal.aborted &&
              i === this.store.getState().space.key &&
              this.store.getState().setMembers("ready", e);
          } catch (e) {
            this.running &&
              !s.signal.aborted &&
              i === this.store.getState().space.key &&
              (this.store.getState().setMembers("error"),
              null == (t = (a = globalThis).reportError) || t.call(a, e));
          }
        }
        abortPages() {
          for (let e of ((this.lifecycleRevision += 1),
          this.requestControllers))
            e.abort();
          this.requestControllers.clear();
        }
        refreshSpace(e) {
          var t, a, r;
          let s =
              null == (t = (a = this.service).readSpace) ? void 0 : t.call(a),
            i = this.store.getState().space;
          if (!s || s.key === i.key) return;
          if (
            (this.favorites.cancel(), this.preservesBlankProjectImport(i, s))
          ) {
            this.pendingSpaceRefresh = !0;
            return;
          }
          this.pendingSpaceRefresh = !1;
          let n =
            !this.commitTarget &&
            null !== this.activeImportBatch &&
            !this.activeImportBatch.blankProjectImport &&
            "canvas_node" === this.importTarget.resultKind;
          (this.abortPages(),
            this.clearSearchTimer(),
            n || this.cancelImport(),
            null == (r = this.membersRequest) || r.abort(),
            (this.membersRequest = null),
            this.selectedPresentationByAssetId.clear(),
            this.store.getState().resetSpace(s),
            e &&
              (s.teamId && this.loadMembers(),
              s.available &&
                "assets" === this.store.getState().activeSection &&
                this.reloadActiveCategory()));
        }
        preservesBlankProjectImport(e, t) {
          var a, r, s, i;
          return (
            (null == (a = this.activeImportBatch)
              ? void 0
              : a.blankProjectImport) === !0 &&
            (e.available && t.available
              ? e.teamId === t.teamId
              : !t.available &&
                (null == (s = this.api.canvas) ||
                null == (r = (i = s.actions.importAsset).isProjectMaterialized)
                  ? void 0
                  : r.call(i)) === !1)
          );
        }
        refreshSpaceAfterImport() {
          this.pendingSpaceRefresh &&
            this.running &&
            ((this.pendingSpaceRefresh = !1), this.refreshSpace(!0));
        }
        getQueryCapabilities() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.store.getState().activeCategory;
          return this.service.getQueryCapabilities(e);
        }
        start() {
          var e, t;
          if (this.running) return;
          ((this.running = !0),
            this.refreshSpace(!1),
            (this.unsubscribeSpace =
              (null == (e = (t = this.service).subscribeSpace)
                ? void 0
                : e.call(t, () => this.refreshSpace(!0))) ?? null),
            this.store.getState().space.teamId && this.loadMembers(),
            this.store
              .getState()
              .setImportActionState(this.getCommitActionState()));
          let a = this.commitTarget
            ? (e) => {
                var t, a, r;
                return (
                  (null == (a = this.commitTarget) || null == (t = a.subscribe)
                    ? void 0
                    : t.call(a, e)) ??
                  (null == (r = this.api.canvas)
                    ? void 0
                    : r.actions.subscribe(e))
                );
              }
            : (e) => this.importTarget.subscribe(e);
          this.unsubscribeCanvasActions =
            a(() => {
              var e;
              ((null == (e = this.api.canvas)
                ? void 0
                : e.getPermissionSnapshot().canEdit) || this.favorites.cancel(),
                this.store
                  .getState()
                  .setImportActionState(this.getCommitActionState()));
            }) ?? null;
          let r = this.store.getState();
          "assets" === r.activeSection &&
            this.ensureCategoryLoaded(r.activeCategory);
        }
        setActiveSection(e) {
          var t;
          let a = this.store.getState();
          if ("importing" === a.importStatus || a.activeSection === e) return;
          let r = a.activeSection;
          (a.setActiveSection(e),
          "canvas" !== e &&
            "canvas" !== r &&
            (null == (t = this.onPanelAction) ||
              t.call(this, {
                action: "switch_tab",
                afterTab: e,
                beforeTab: r,
              })),
          "assets" !== e)
            ? this.clearSearchTimer()
            : a.searchDraft.trim() !== a.committedKeyword
              ? this.commitSearch(a.searchDraft)
              : this.ensureCategoryLoaded(a.activeCategory);
        }
        setActiveCategory(e) {
          var t;
          let a = this.store.getState();
          if ("importing" === a.importStatus || a.activeCategory === e) return;
          let r = a.activeCategory;
          (a.setActiveCategory(e),
            null == (t = this.onPanelAction) ||
              t.call(this, {
                action: "switch_sub_tab",
                afterSubTab: e,
                beforeSubTab: r,
              }),
            this.api.app.observability.facts.emit(o.bj, { category: e }),
            this.ensureCategoryLoaded(e));
        }
        setSearchDraft(e) {
          let t = this.store.getState();
          "importing" !== t.importStatus &&
            (t.setSearchDraft(e),
            this.clearSearchTimer(),
            (this.searchTimer = setTimeout(() => this.commitSearch(e), 300)));
        }
        submitSearch() {
          "importing" !== this.store.getState().importStatus &&
            (this.clearSearchTimer(),
            this.commitSearch(this.store.getState().searchDraft));
        }
        clearSearch() {
          "importing" !== this.store.getState().importStatus &&
            (this.clearSearchTimer(),
            this.store.getState().setSearchDraft(""),
            this.commitSearch(""));
        }
        toggleFilter(e) {
          let t = this.store.getState();
          "importing" !== t.importStatus &&
            this.applyFilters((0, O.eg)(t.filters, e));
        }
        clearDetailFilterGroup(e) {
          let t = this.store.getState();
          "importing" !== t.importStatus &&
            this.applyFilters((0, O.kj)(t.filters, e));
        }
        clearDetailFilters() {
          let e = this.store.getState();
          "importing" !== e.importStatus &&
            this.applyFilters((0, O.WR)(e.filters));
        }
        clearTimeFilter() {
          let e = this.store.getState();
          "importing" !== e.importStatus &&
            this.applyFilters((0, O.kj)(e.filters, "time"));
        }
        setCustomTimeRange(e) {
          let t = this.store.getState();
          "importing" !== t.importStatus &&
            this.applyFilters((0, O.ZL)(t.filters, (0, O.sS)(e)));
        }
        applyFilters(e) {
          var t;
          let a = this.store.getState();
          "importing" === a.importStatus ||
            (0, O.lD)(e, a.filters) ||
            (a.setFilters(e),
            null == (t = this.onPanelAction) ||
              t.call(this, { action: "filter" }),
            this.api.app.observability.facts.emit(o.Gn, {
              category: a.activeCategory,
              filterCount: e.length,
            }),
            this.reloadActiveCategory());
        }
        retry() {
          "importing" !== this.store.getState().importStatus &&
            this.loadPage(this.store.getState().activeCategory, !0);
        }
        loadMore() {
          "importing" !== this.store.getState().importStatus &&
            this.loadPage(this.store.getState().activeCategory, !1);
        }
        setScrollOffset(e) {
          this.store
            .getState()
            .setScrollOffset(this.store.getState().activeCategory, e);
        }
        setSingleSelectionPeerClearer(e) {
          this.clearSingleSelectionPeer = e;
        }
        clearSelection() {
          "importing" !== this.store.getState().importStatus &&
            (this.store.getState().clearSelected(),
            this.selectedPresentationByAssetId.clear());
        }
        toggleAsset(e) {
          var t, a;
          let r = this.store.getState();
          if ("importing" === r.importStatus) return;
          let s = r.selectedAssets.has(e.assetId);
          if (!s && !this.isAssetSupported(e)) return;
          if (!s && this.isAssetAlreadyCommitted(e))
            return void r.reportSelectionBlocked("alreadyAdded");
          r.toggleSelected(e);
          let i = this.store.getState().selectedAssets.has(e.assetId);
          (s !== i &&
            (null == (t = this.onPanelAction) ||
              t.call(this, { action: i ? "select" : "unselect" })),
          s)
            ? this.selectedPresentationByAssetId.delete(e.assetId)
            : ("single" === r.selectionMode &&
                this.selectedPresentationByAssetId.clear(),
              this.store.getState().selectedAssets.has(e.assetId) &&
                (this.selectedPresentationByAssetId.set(
                  e.assetId,
                  e.presentation,
                ),
                "single" === r.selectionMode &&
                  (null == (a = this.clearSingleSelectionPeer) ||
                    a.call(this))));
        }
        addAssetsToSelection(e) {
          var t;
          let a = this.store.getState();
          if ("importing" === a.importStatus || "single" === a.selectionMode)
            return;
          let r = new Map(a.selectedAssets),
            s = e.filter(
              (e) =>
                !!this.isAssetSupported(e, [...r.values()]) &&
                (this.isAssetAlreadyCommitted(e) || r.set(e.assetId, e), !0),
            ),
            i = s.filter((e) => !this.isAssetAlreadyCommitted(e));
          i.length !== s.length && a.reportSelectionBlocked("alreadyAdded");
          let n = a.selectedAssets.size;
          (a.addSelected(i),
            this.store.getState().selectedAssets.size > n &&
              (null == (t = this.onPanelAction) ||
                t.call(this, { action: "select" })));
          let o = this.store.getState().selectedAssets;
          for (let e of i)
            o.has(e.assetId) &&
              this.selectedPresentationByAssetId.set(e.assetId, e.presentation);
        }
        setExternalSharedOccupancy(e) {
          this.store.getState().setExternalSharedOccupancy(e);
        }
        reportSelectionBlocked(e, t) {
          this.store.getState().reportSelectionBlocked(e, t);
        }
        isImportable(e) {
          return this.isAssetSupported(e);
        }
        getAssetUnsupportedReason(e) {
          var t, a;
          return null == (a = this.commitTarget) ||
            null == (t = a.getUnsupportedReason)
            ? void 0
            : t.call(a, e, this.getCandidateSelection());
        }
        reportUnsupportedAssetActivation(e) {
          var t, a;
          null == (a = this.commitTarget) ||
            null == (t = a.onUnsupportedActivate) ||
            t.call(a, e, this.getCandidateSelection());
        }
        getCandidateSelection() {
          let e = this.store.getState();
          return "single" === e.selectionMode
            ? []
            : [...e.selectedAssets.values()];
        }
        isAssetSupported(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.getCandidateSelection();
          if (this.commitTarget) return this.commitTarget.isSupported(e, t);
          let a = this.readSelectedPresentation(e);
          return (
            !!(0, Q.cT)(e, a) &&
            this.importTarget.supports(
              "document" === e.category ? "text" : e.uploadSource.kind,
            )
          );
        }
        isAssetAlreadyCommitted(e) {
          var t, a;
          return (
            (null == (a = this.commitTarget) ||
            null == (t = a.isAlreadyCommitted)
              ? void 0
              : t.call(a, e)) ?? !1
          );
        }
        getSelectedAssetCount() {
          return this.store.getState().selectedAssets.size;
        }
        getSelectedPlacementItems() {
          return [...this.store.getState().selectedAssets.entries()].map(
            (e) => {
              let [t, a] = e;
              return { key: `asset:${t}`, size: $(a) };
            },
          );
        }
        beginImportPresentation() {
          var e, t;
          return null == (t = this.canvasImportTarget) ||
            null == (e = t.beginPresentation)
            ? void 0
            : e.call(t);
        }
        planCanvasBatchPlacements(e, t) {
          var a;
          let r = () => {
            let a = (0, B.Y)(e, t);
            return {
              placementPolicy: e.length < 2 ? "adjust" : "final",
              placements: a,
            };
          };
          if (e.length < 2) return r();
          let s = null == (a = this.canvasImportTarget) ? void 0 : a.planBatch;
          if (!s) return r();
          let i = s(e, t);
          return i.ok && i.value.placements.length === e.length
            ? { placementPolicy: "final", placements: i.value.placements }
            : r();
        }
        getLastImportResult() {
          return this.store.getState().lastImportResult;
        }
        getLastImportedCanvasNodes() {
          return this.lastImportedCanvasNodes;
        }
        isBlankProjectCanvasImport() {
          var e, t, a;
          return (
            "canvas_node" === this.importTarget.resultKind &&
            (null == (t = this.api.canvas) ||
            null == (e = (a = t.actions.importAsset).isProjectMaterialized)
              ? void 0
              : e.call(a)) === !1
          );
        }
        async importSelected() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.lastImportedCanvasNodes = [];
          let a = this.store.getState();
          if ("importing" === a.importStatus) return !1;
          let r = [...a.selectedAssets.entries()];
          if (
            0 === r.length ||
            !r.every((e) => {
              let [, t] = e;
              return this.isAssetSupported(t);
            }) ||
            !this.getCommitActionState().available
          )
            return !1;
          if (
            (null == (e = this.onPanelAction) ||
              e.call(this, { action: "confirm" }),
            this.commitTarget)
          )
            return this.commitSelectedToTarget(r, t);
          let s = this.isBlankProjectCanvasImport(),
            i = r.map((e) => {
              let [t, a] = e;
              return { key: `asset:${t}`, size: $(a) };
            }),
            n = t.placements
              ? {
                  placementPolicy: t.placementPolicy ?? "adjust",
                  placements: (0, B.h)(t.placements, r.length),
                }
              : this.planCanvasBatchPlacements(
                  i,
                  T(this.api).canvas.getViewportCenter(),
                ),
            l = void 0 === t.presentation,
            c = t.presentation ?? this.beginImportPresentation(),
            d = c ? { ...t, presentation: c } : t,
            u = X(r.length, s);
          ((this.activeImportBatch = u), a.beginImport(r.length));
          let m = async (e) => {
              var a, s, i, l, c;
              let m;
              u.operation = e;
              let p =
                ((s = u.controller),
                (i = e.signal),
                (m = () => s.abort(i.reason ?? (0, D.DN)("aborted"))),
                i.aborted ? m() : i.addEventListener("abort", m, { once: !0 }),
                () => i.removeEventListener("abort", m));
              e.facts.emit(o.IG, { assetCount: r.length });
              let h = r.map(() => crypto.randomUUID()),
                v = r.map((e, t) => {
                  let [a, r] = e,
                    s = n.placements[t];
                  if (!s)
                    throw Error(
                      `Asset library placement is missing for asset ${a}`,
                    );
                  return [
                    a,
                    r,
                    this.selectedPresentationByAssetId.get(a),
                    h[t],
                    s,
                    "canvas_node" === this.importTarget.resultKind &&
                    "final" === n.placementPolicy
                      ? "final"
                      : void 0,
                  ];
                });
              return (
                "canvas_node" !== this.importTarget.resultKind &&
                  (null == (a = t.onBatchStarted) || a.call(t)),
                (u.deadlineTimer = setTimeout(
                  () => {
                    ((u.deadlineExceeded = !0), u.controller.abort(new ei()));
                  },
                  ((l = this.importTarget),
                  (c = r),
                  "timeline_clip" !== l.resultKind
                    ? 6e4
                    : Math.max(
                        6e4,
                        c.reduce((e, t) => {
                          let [, a] = t;
                          return e + K(a);
                        }, 0) + 15e3,
                      )),
                )),
                this.executeImportBatch(r, v, u, e, d).finally(p)
              );
            },
            p = { mode: "async", fields: { itemCount: r.length } },
            h =
              "canvas_node" === this.importTarget.resultKind
                ? this.importTarget.runBatch
                : void 0;
          try {
            return (
              (h
                ? await h(r.length, m)
                : t.parentOperation
                  ? await t.parentOperation.runChild("importAssets", p, m)
                  : await (0, D.o)({
                      area: "canvas.asset_library",
                      facts: this.api.app.observability.facts,
                    }).tryRun("importAssets", p, m)) ?? !1
            );
          } finally {
            l && (null == c || c.cancel());
          }
        }
        async executeImportBatch(e, t, a, r, s) {
          try {
            var i, n, l, c;
            let d,
              u = await H(
                this.importTarget,
                t,
                a.controller,
                this.activeImportExecutions,
                r,
                (e) => this.recordImportOutcome(a, e, s),
                (e) => this.finalizeCanvasNodePlaceholders(a, e, s),
                a.blankProjectImport,
              );
            a.blankProjectImport
              ? ((this.lastImportedCanvasNodes = J(e, u.successfulImports)),
                u.cancelled ||
                  this.finalizeImportedCanvasNodes(u.successfulObjectIds, s))
              : a.handedOffToCanvas ||
                (this.finalizeImportedCanvasNodes(u.successfulObjectIds, s),
                (this.lastImportedCanvasNodes = []),
                "canvas_node" === this.importTarget.resultKind &&
                  (this.lastImportedCanvasNodes = J(e, u.successfulImports)));
            let m = {
              failedCount: u.failures.length,
              successfulCount: u.successfulAssetIds.size,
              uncompletedCount: e.length - u.completedCount,
              ...((l = u.failures),
              (d = null == (c = l[0]) ? void 0 : c.reason) &&
              l.every((e) => e.reason === d)
                ? { failureReason: d }
                : {}),
            };
            if (
              ((a.handedOffToCanvas && u.cancelled && !a.deadlineExceeded) ||
                null == (i = s.onBatchSettled) ||
                i.call(s, m),
              a.handedOffToCanvas)
            )
              return this.finishHandedOffCanvasNodeImport(a, r, u, m);
            if (!this.isCurrentImportBatch(a)) return !1;
            if (u.cancelled) {
              if (a.deadlineExceeded)
                return (
                  this.finishImportFailure(
                    a,
                    r,
                    { ...m, failureReason: "requestTimeout" },
                    new ei(),
                    "timeout",
                  ),
                  !1
                );
              return this.finishCancelledImportBatch(
                a,
                r,
                u.successfulAssetIds,
                u.cancellationError,
              );
            }
            if (u.failures.length > 0) {
              let e =
                (null == (n = u.failures[0]) ? void 0 : n.error) ??
                Error("Asset import batch failed");
              return (
                this.finishImportFailure(
                  a,
                  r,
                  m,
                  e,
                  "requestTimeout" === m.failureReason
                    ? "timeout"
                    : "item_failure",
                ),
                !1
              );
            }
            return (
              this.store.getState().finishImport(u.successfulAssetIds),
              this.forgetSelectedPresentations(u.successfulAssetIds),
              r.facts.emit(o.Aw, {
                assetCount: e.length,
                nodeCount:
                  "canvas_node" === this.importTarget.resultKind
                    ? u.successfulAssetIds.size
                    : 0,
              }),
              (a.terminalFactEmitted = !0),
              !0
            );
          } finally {
            (a.deadlineTimer && clearTimeout(a.deadlineTimer),
              (a.deadlineTimer = null),
              this.activeImportBatch === a && (this.activeImportBatch = null));
          }
        }
        recordImportOutcome(e, t, a) {
          var r;
          !this.isCurrentImportBatch(e) ||
            ((e.completedCount += 1),
            "success" === t.status
              ? ((e.successfulCount += 1), e.successfulAssetIds.add(t.assetId))
              : (e.failedCount += 1),
            e.handedOffToCanvas ||
              (this.store.getState().recordImportCompletion(),
              null == (r = a.onItemSettled) || r.call(a)));
        }
        finalizeCanvasNodePlaceholders(e, t, a) {
          var r;
          0 === t.length ||
            ((!e.blankProjectImport ||
              (!e.controller.signal.aborted && this.isCurrentImportBatch(e))) &&
              ((this.lastImportedCanvasNodes = t),
              e.blankProjectImport ||
                this.finalizeImportedCanvasNodes(
                  t.map((e) => e.nodeId),
                  a,
                ),
              null == (r = a.onBatchStarted) || r.call(a)));
        }
        finalizeImportedCanvasNodes(e, t) {
          var a, r;
          if ("defer" !== t.selectionPolicy && 0 !== e.length) {
            if (t.presentation)
              return void t.presentation.complete({
                newContentNodeIds: e,
                selectionNodeIds: e,
              });
            null == (a = (r = this.importTarget).finalize) || a.call(r, e);
          }
        }
        finishHandedOffCanvasNodeImport(e, t, a, r) {
          if (a.cancelled) {
            if (e.deadlineExceeded) {
              let a = new ei();
              return (
                t.fail(a, () => {
                  (t.facts.emit(
                    o.U1,
                    {
                      assetCount: e.totalCount,
                      failedAssetCount: r.failedCount,
                      successfulAssetCount: r.successfulCount,
                      uncompletedAssetCount: r.uncompletedCount,
                      reason: "timeout",
                    },
                    a,
                  ),
                    (e.terminalFactEmitted = !0));
                }),
                !1
              );
            }
            let s = (0, D.DN)("aborted");
            return (
              (0, D.vh)(a.cancellationError) && (s = a.cancellationError),
              t.fail(s, () => this.emitImportCancelled(e)),
              !1
            );
          }
          if (a.failures.length > 0) {
            var s;
            let i =
              (null == (s = a.failures[0]) ? void 0 : s.error) ??
              Error("Asset import batch failed");
            return (
              t.fail(i, () => {
                (t.facts.emit(
                  o.U1,
                  {
                    assetCount: e.totalCount,
                    failedAssetCount: r.failedCount,
                    successfulAssetCount: r.successfulCount,
                    uncompletedAssetCount: r.uncompletedCount,
                    reason:
                      "requestTimeout" === r.failureReason
                        ? "timeout"
                        : "item_failure",
                  },
                  i,
                ),
                  (e.terminalFactEmitted = !0));
              }),
              !1
            );
          }
          return (
            t.commit(() => {
              (t.facts.emit(o.Aw, {
                assetCount: e.totalCount,
                nodeCount: a.successfulAssetIds.size,
              }),
                (e.terminalFactEmitted = !0));
            }),
            !0
          );
        }
        cancelImport() {
          var e;
          let t = this.activeImportBatch;
          return (
            !!t &&
            (t.controller.abort(),
            null == (e = t.operation) ||
              e.fail((0, D.DN)("aborted"), () => void 0),
            this.emitImportCancelled(t),
            t.deadlineTimer && clearTimeout(t.deadlineTimer),
            (t.deadlineTimer = null),
            (this.activeImportBatch = null),
            this.store.getState().resetInterruptedImport(t.successfulAssetIds),
            this.forgetSelectedPresentations(t.successfulAssetIds),
            !0)
          );
        }
        finishCancelledImportBatch(e, t, a, r) {
          let s = (0, D.DN)("aborted");
          return (
            (0, D.vh)(r) && (s = r),
            t.fail(s, () => void 0),
            this.store.getState().resetInterruptedImport(a),
            this.forgetSelectedPresentations(a),
            this.emitImportCancelled(e),
            !1
          );
        }
        async commitSelectedToTarget(e, t) {
          let a = this.commitTarget;
          if (!a) return !1;
          let r = X(e.length);
          ((this.activeImportBatch = r),
            this.store.getState().beginImport(e.length));
          let s = (s) => {
              var i;
              return (
                null == (i = t.onBatchStarted) || i.call(t),
                this.executeTargetCommit(a, e, r, s, t)
              );
            },
            i = { mode: "async", fields: { itemCount: e.length } };
          return (
            (t.parentOperation
              ? await t.parentOperation.runChild("importAssets", i, s)
              : await (0, D.o)({
                  area: "canvas.asset_library",
                  facts: this.api.app.observability.facts,
                }).tryRun("importAssets", i, s)) ?? !1
          );
        }
        async executeTargetCommit(e, t, a, r, s) {
          ((a.operation = r),
            r.facts.emit(o.IG, { assetCount: t.length }),
            (a.deadlineTimer = setTimeout(() => {
              ((a.deadlineExceeded = !0), a.controller.abort(new ei()));
            }, 6e4)));
          try {
            let i = await e.execute(
              t.map((e) => {
                let [, t] = e;
                return t;
              }),
              a.controller.signal,
              {
                importStartedAtMs: s.importStartedAtMs,
                presentationByAssetId: (function (e, t) {
                  let a = new Map();
                  for (let [, r] of e) {
                    let e = t.get(r.assetId);
                    e && a.set(r.assetId, e);
                  }
                  return a;
                })(t, this.selectedPresentationByAssetId),
              },
            );
            if (!this.isCurrentImportBatch(a)) return !1;
            if (a.controller.signal.aborted)
              return this.finishInterruptedTargetCommit(a, r);
            return i.ok
              ? this.finishSuccessfulTargetCommit(t, i.value.assetIds, a, r, s)
              : this.finishRejectedTargetCommit(t.length, i, a, r, s);
          } catch (e) {
            if (!this.isCurrentImportBatch(a)) return !1;
            if (a.controller.signal.aborted || en(e))
              return this.finishInterruptedTargetCommit(a, r);
            return (
              this.recordTargetCompletions(a, t.length, s.onItemSettled),
              (a.failedCount = t.length),
              this.finishImportFailure(
                a,
                r,
                {
                  failedCount: t.length,
                  successfulCount: 0,
                  uncompletedCount: 0,
                },
                e,
                "item_failure",
              ),
              !1
            );
          } finally {
            (a.deadlineTimer && clearTimeout(a.deadlineTimer),
              (a.deadlineTimer = null),
              this.activeImportBatch === a && (this.activeImportBatch = null));
          }
        }
        finishRejectedTargetCommit(e, t, a, r, s) {
          let i = t.guard;
          if (i) return this.finishGuardedTargetCommit(e, t, i, a, r, s);
          (this.recordTargetCompletions(a, e, s.onItemSettled),
            (a.failedCount = e));
          let n = et(t.reason).reason,
            o = { failedCount: e, successfulCount: 0, uncompletedCount: 0 };
          return (
            n && (o = { ...o, failureReason: n }),
            t.failureFeedback &&
              (o = { ...o, failureDescription: t.failureFeedback.description }),
            this.finishImportFailure(
              a,
              r,
              o,
              Error(t.message ?? `Asset commit target failed: ${t.reason}`),
              "item_failure",
            ),
            !1
          );
        }
        finishGuardedTargetCommit(e, t, a, r, s, i) {
          (this.recordTargetCompletions(r, e, i.onItemSettled),
            (r.failedCount = e));
          let n = {
            failedCount: e,
            successfulCount: 0,
            uncompletedCount: 0,
            guardReason: a.reason,
          };
          return (
            t.failureFeedback &&
              (n = { ...n, failureDescription: t.failureFeedback.description }),
            s.commit(() => {
              (this.store.getState().finishImport(r.successfulAssetIds, n),
                s.facts.emit(A.cZ, { reason: a.reason }),
                (r.terminalFactEmitted = !0));
            }),
            !1
          );
        }
        finishSuccessfulTargetCommit(e, t, a, r, s) {
          let i = new Set(
              e.map((e) => {
                let [t] = e;
                return t;
              }),
            ),
            n = new Set(t.filter((e) => i.has(e)));
          for (let t of ((a.completedCount = e.length),
          (a.successfulCount = n.size),
          (a.failedCount = e.length - n.size),
          n))
            a.successfulAssetIds.add(t);
          return (this.recordTargetCompletions(a, e.length, s.onItemSettled),
          n.size !== e.length)
            ? (this.finishImportFailure(
                a,
                r,
                {
                  failedCount: a.failedCount,
                  successfulCount: a.successfulCount,
                  uncompletedCount: 0,
                },
                Error("Asset commit target returned an incomplete success set"),
                "item_failure",
              ),
              !1)
            : (this.store.getState().finishImport(n),
              this.forgetSelectedPresentations(n),
              r.facts.emit(o.Aw, { assetCount: e.length, nodeCount: 0 }),
              (a.terminalFactEmitted = !0),
              !0);
        }
        recordTargetCompletions(e, t, a) {
          e.completedCount = t;
          for (let e = 0; e < t; e += 1)
            (this.store.getState().recordImportCompletion(), null == a || a());
        }
        finishInterruptedTargetCommit(e, t) {
          return (
            e.deadlineExceeded
              ? this.finishImportFailure(
                  e,
                  t,
                  {
                    failedCount: 0,
                    successfulCount: 0,
                    uncompletedCount: e.totalCount,
                    failureReason: "requestTimeout",
                  },
                  new ei(),
                  "timeout",
                )
              : t.fail((0, D.DN)("aborted"), () => {
                  (this.store
                    .getState()
                    .resetInterruptedImport(e.successfulAssetIds),
                    this.emitImportCancelled(e));
                }),
            !1
          );
        }
        handoffActiveCanvasNodeImport() {
          let e = this.activeImportBatch;
          return (
            !!e &&
            !this.commitTarget &&
            !0 === this.importTarget.handoffAfterPlaceholders &&
            ((e.handedOffToCanvas = !0), !0)
          );
        }
        stop() {
          var e, t, a;
          if (!this.running) return;
          this.favorites.cancel();
          let r = this.activeImportBatch;
          (null == r ? void 0 : r.blankProjectImport) === !0 &&
            (r.handedOffToCanvas = !0);
          let s = (null == r ? void 0 : r.handedOffToCanvas) === !0 ? r : null;
          for (let a of ((this.running = !1),
          null == (e = this.unsubscribeSpace) || e.call(this),
          (this.unsubscribeSpace = null),
          null == (t = this.membersRequest) || t.abort(),
          (this.membersRequest = null),
          (this.lifecycleRevision += 1),
          this.clearSearchTimer(),
          this.requestControllers))
            a.abort();
          (this.requestControllers.clear(),
            s || this.cancelImport(),
            null == (a = this.unsubscribeCanvasActions) || a.call(this),
            (this.unsubscribeCanvasActions = null),
            this.store.getState().resetInterruptedPageLoads(),
            s || this.store.getState().resetInterruptedImport());
        }
        isCurrentImportBatch(e) {
          return this.activeImportBatch === e;
        }
        finishImportFailure(e, t, a, r, s) {
          t.fail(r, () => {
            (this.store.getState().finishImport(e.successfulAssetIds, a),
              this.forgetSelectedPresentations(e.successfulAssetIds),
              t.facts.emit(
                o.U1,
                {
                  assetCount: e.totalCount,
                  failedAssetCount: a.failedCount,
                  successfulAssetCount: a.successfulCount,
                  uncompletedAssetCount: a.uncompletedCount,
                  reason: s,
                },
                r,
              ),
              (e.terminalFactEmitted = !0));
          });
        }
        emitImportCancelled(e) {
          var t;
          e.terminalFactEmitted ||
            ((e.terminalFactEmitted = !0),
            (
              (null == (t = e.operation) ? void 0 : t.facts) ??
              this.api.app.observability.facts
            ).emit(o.G4, {
              assetCount: e.totalCount,
              completedAssetCount: e.completedCount,
              failedAssetCount: e.failedCount,
              successfulAssetCount: e.successfulCount,
              uncompletedAssetCount: e.totalCount - e.completedCount,
            }));
        }
        commitSearch(e) {
          var t, a;
          if (
            !this.running ||
            "importing" === this.store.getState().importStatus
          )
            return;
          let r = e.trim();
          if (r === this.store.getState().committedKeyword) return;
          (this.store.getState().commitSearch(r),
            null == (t = this.onPanelAction) ||
              t.call(this, { action: "search" }));
          let s = this.store.getState().activeCategory;
          (this.api.app.observability.facts.emit(o.bh, {
            category: s,
            keywordPresent: !!r,
            keywordLengthBucket:
              0 === (a = r.length)
                ? "0"
                : a <= 10
                  ? "1-10"
                  : a <= 30
                    ? "11-30"
                    : "31+",
            filterCount: this.store.getState().filters.length,
          }),
            this.reloadActiveCategory());
        }
        reloadActiveCategory() {
          let e = this.store.getState().activeCategory;
          return this.loadPage(e, !0);
        }
        ensureCategoryLoaded(e) {
          let { queryKey: t } = this.readQuery(e),
            a = this.store.getState().pages[e];
          return a.queryKey === t && "idle" !== a.status
            ? Promise.resolve()
            : this.loadPage(e, !0);
        }
        async loadPage(e, t) {
          if (!this.running || !this.store.getState().space.available) return;
          let { criteria: a, queryKey: r } = this.readQuery(e),
            s = this.store.getState().pages[e],
            i = t || s.queryKey !== r || 0 === s.items.length;
          if (
            !i &&
            ("loading" === s.status ||
              "loading" === s.loadMoreStatus ||
              !s.hasMore)
          )
            return;
          let n = i ? void 0 : s.nextCursor,
            l = new AbortController();
          this.requestControllers.add(l);
          let c = (this.requestRevisions.get(e) ?? 0) + 1;
          this.requestRevisions.set(e, c);
          let d = this.lifecycleRevision;
          this.store.getState().beginPage(e, r, i);
          try {
            let t = await this.service.queryPage(
              { criteria: a, cursor: n, limit: 30 },
              l.signal,
            );
            if (!this.isCurrent(e, c, d)) return;
            (this.store.getState().resolvePage(e, r, t),
              this.api.app.observability.facts.emit(o.mL, {
                category: e,
                itemCount: t.items.length,
                hasMore: t.hasMore,
                keywordPresent: !!a.keyword,
                filterCount: a.filters.length,
                loadMore: !i,
              }));
          } catch (t) {
            if (en(t) || !this.isCurrent(e, c, d)) return;
            (this.store.getState().failPage(e, r, i),
              this.api.app.observability.facts.emit(
                o.hU,
                {
                  category: e,
                  keywordPresent: !!a.keyword,
                  filterCount: a.filters.length,
                  loadMore: !i,
                },
                t,
              ));
          } finally {
            this.requestControllers.delete(l);
          }
        }
        readQuery(e) {
          let t = this.store.getState(),
            a = {
              ...(0, O.zY)(
                e,
                t.committedKeyword,
                t.filters,
                this.service.getQueryCapabilities(e),
              ),
              ...(this.service.readSpace ? { spaceKey: t.space.key } : {}),
              ...(t.space.teamId ? { memberUserId: t.memberUserId } : {}),
            };
          return { criteria: a, queryKey: (0, O.p2)(a) };
        }
        isCurrent(e, t, a) {
          return (
            this.running &&
            this.lifecycleRevision === a &&
            this.requestRevisions.get(e) === t
          );
        }
        clearSearchTimer() {
          (this.searchTimer && clearTimeout(this.searchTimer),
            (this.searchTimer = null));
        }
        getCommitActionState() {
          var e;
          return (
            (null == (e = this.commitTarget) ? void 0 : e.getState()) ??
            this.importTarget.getState()
          );
        }
        readSelectedPresentation(e) {
          return "presentation" in e
            ? e.presentation
            : this.selectedPresentationByAssetId.get(e.assetId);
        }
        forgetSelectedPresentations(e) {
          for (let t of e) this.selectedPresentationByAssetId.delete(t);
        }
        constructor(e, t, a, r, s, i) {
          if (
            ((this.api = e),
            (this.service = t),
            (this.store = a),
            (this.onPanelAction = s),
            (this.onFavoriteSettled = i),
            (this.requestControllers = new Set()),
            (this.requestRevisions = new Map()),
            (this.activeImportBatch = null),
            (this.activeImportExecutions = new Set()),
            (this.favorites = new W.Q(
              () => {
                var e;
                return this.running &&
                  (null == (e = this.api.canvas)
                    ? void 0
                    : e.getPermissionSnapshot().canEdit) &&
                  this.store.getState().space.available
                  ? this.store.getState().space.key
                  : void 0;
              },
              (e) => {
                (this.store.getState().setFavorite(e),
                  e.committed &&
                    this.store
                      .getState()
                      .filters.some((e) => "favorite" === e.type && e.value) &&
                    this.reloadActiveCategory());
              },
              (e, t) => {
                var a;
                return null == (a = this.onFavoriteSettled)
                  ? void 0
                  : a.call(this, e, t);
              },
            )),
            (this.lastImportedCanvasNodes = []),
            (this.selectedPresentationByAssetId = new Map()),
            (this.searchTimer = null),
            (this.unsubscribeCanvasActions = null),
            (this.lifecycleRevision = 0),
            (this.unsubscribeSpace = null),
            (this.pendingSpaceRefresh = !1),
            (this.membersRequest = null),
            (this.running = !1),
            (this.clearSingleSelectionPeer = null),
            (this.commitTarget = r && G(r) ? r : void 0),
            (this.canvasImportTarget =
              r && !G(r) ? r : e.canvas ? (0, _.wq)(e) : void 0),
            !this.commitTarget && !this.canvasImportTarget)
          )
            throw Error(
              "An Asset Library without Canvas requires a commit target",
            );
        }
      }
      function G(e) {
        return "isSupported" in e;
      }
      function X(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return {
          controller: new AbortController(),
          totalCount: e,
          blankProjectImport: t,
          completedCount: 0,
          handedOffToCanvas: !1,
          deadlineExceeded: !1,
          failedCount: 0,
          successfulCount: 0,
          successfulAssetIds: new Set(),
          terminalFactEmitted: !1,
          deadlineTimer: null,
          operation: null,
        };
      }
      function J(e, t) {
        let a = new Map(
          e.map((e) => {
            var t;
            let [a, r] = e;
            return [a, (null == (t = r.title) ? void 0 : t.trim()) ?? ""];
          }),
        );
        return t.map((e) => ({
          name: a.get(e.assetId) ?? "",
          nodeId: e.objectId,
        }));
      }
      function $(e) {
        var t, a;
        return "image" === e.category &&
          (null == (t = e.uploadSource) ? void 0 : t.kind) === "image"
          ? (0, Z.Px)(e.uploadSource.width, e.uploadSource.height, "image")
          : "video" === e.category &&
              (null == (a = e.uploadSource) ? void 0 : a.kind) === "video"
            ? (0, Z.Px)(e.uploadSource.width, e.uploadSource.height, "video")
            : "audio" === e.category
              ? V.ZL.audio
              : "document" === e.category
                ? V.ZL.text
                : V.ZL[e.category];
      }
      function K(e) {
        return "video" === e.category ? 45e3 : 15e3;
      }
      async function H(e, t, a, r, s, i, n) {
        let o,
          l = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          c = new Set(),
          d = Array(t.length),
          u = Array(t.length),
          m = [],
          p = 0,
          h = 0,
          v = 0,
          g = Array(t.length),
          b = Array(t.length).fill(!1),
          f = (e, a) => {
            if (!b[e]) {
              if (((b[e] = !0), void 0 !== a)) {
                var r, s;
                g[e] = {
                  name:
                    (null == (s = t[e]) || null == (r = s[1].title)
                      ? void 0
                      : r.trim()) ?? "",
                  nodeId: a,
                };
              }
              (v += 1) === t.length && n(g.filter((e) => void 0 !== e));
            }
          },
          y = async () => {
            for (; !a.signal.aborted; ) {
              let n = p;
              p += 1;
              let v = t[n];
              if (!v) return;
              let g = !1,
                b = await q(
                  e,
                  v,
                  a.signal,
                  r,
                  s,
                  (e) => {
                    g || ((g = !0), f(n, e));
                  },
                  l,
                );
              if ((g || f(n), "cancelled" === b.status)) {
                o ?? (o = b.error);
                return;
              }
              ((h += 1),
                "success" === b.status
                  ? (c.add(b.assetId),
                    (d[n] = { assetId: b.assetId, objectId: b.objectId }),
                    (u[n] = b.objectId))
                  : m.push(b),
                i(b));
            }
          },
          x = Math.min(4, t.length);
        ("timeline_clip" === e.resultKind && (x = 1),
          await Promise.all(Array.from({ length: x }, () => y())));
        let j = {
          successfulAssetIds: c,
          successfulImports: d.filter((e) => void 0 !== e),
          successfulObjectIds: u.filter((e) => void 0 !== e),
          failures: m,
          completedCount: h,
          cancelled: a.signal.aborted || void 0 !== o,
        };
        return void 0 === o ? j : { ...j, cancellationError: o };
      }
      async function q(e, t, a, r, s, i) {
        let n,
          [o, l, c, d, u, m] = t,
          p = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          h =
            "canvas_node" === e.resultKind && !0 === e.handoffAfterPlaceholders;
        if (!e.runBatch)
          try {
            await ee(r, a);
          } catch (e) {
            if (a.aborted) return { status: "cancelled", error: e };
            return { status: "failure", assetId: o, error: e };
          }
        let v = new AbortController(),
          g = (0, L.O)(p && "document" === l.category ? [a] : [a, v.signal]),
          b = () => {
            n ?? (n = setTimeout(() => v.abort(new es()), K(l)));
          };
        p || b();
        try {
          var f;
          let t,
            a,
            n = (0, Q.uN)(l, c, d, u, g.signal, m);
          ((a = h
            ? e.execute(
                n,
                s,
                p && "document" === l.category
                  ? { onPlaceholderCreated: i }
                  : { onExecutionStarted: b, onPlaceholderCreated: i },
              )
            : e.execute(n, s)),
            (f = r),
            (t = a.then(
              () => void 0,
              () => void 0,
            )),
            f.add(t),
            t.then(() => f.delete(t)));
          let v = await ea(a, g.signal);
          if (v.ok)
            return {
              status: "success",
              assetId: o,
              objectId: v.value.objectId,
            };
          let y = Error(
            v.message ?? `Failed to import ${l.category} asset: ${v.reason}`,
          );
          return { status: "failure", assetId: o, error: y, ...et(v.reason) };
        } catch (e) {
          if (e instanceof es)
            return {
              status: "failure",
              assetId: o,
              error: e,
              reason: "requestTimeout",
            };
          if (a.aborted || (0, D.vh)(e))
            return { status: "cancelled", error: e };
          return { status: "failure", assetId: o, error: e };
        } finally {
          (n && clearTimeout(n), g.dispose());
        }
      }
      async function ee(e, t) {
        if (t.aborted) throw er(t);
        for (; e.size >= 4; ) await ea(Promise.race(e), t);
        if (t.aborted) throw er(t);
      }
      function et(e) {
        return "commandFailed" === e ||
          "invalidSelection" === e ||
          "metadataNotReady" === e
          ? {}
          : { reason: e };
      }
      function ea(e, t) {
        return t.aborted
          ? Promise.reject(er(t))
          : new Promise((a, r) => {
              let s = () => {
                  (i(), r(er(t)));
                },
                i = () => t.removeEventListener("abort", s);
              (t.addEventListener("abort", s, { once: !0 }),
                e.then(
                  (e) => {
                    (i(), a(e));
                  },
                  (e) => {
                    (i(), r(e));
                  },
                ));
            });
      }
      function er(e) {
        let t = e.reason;
        if (void 0 !== t) return t;
        let a = Error("The operation was aborted");
        return ((a.name = "AbortError"), a);
      }
      class es extends Error {
        constructor() {
          (super("Asset import request timed out"),
            (this.name = "AssetImportTimeoutError"));
        }
      }
      class ei extends Error {
        constructor() {
          (super("Asset import batch timed out"),
            (this.name = "AssetImportBatchTimeoutError"));
        }
      }
      function en(e) {
        return e instanceof Error && "AbortError" === e.name;
      }
      function eo(e, t) {
        let a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = { ...a };
        return (e && (r.nodeId = e), t && (r.source = t), r);
      }
      var el = a(70342),
        ec = a(15579);
      let ed = ["image", "video", "audio", "document"];
      function eu(e, t, a, r) {
        var s;
        let i =
            "limitReached" === t && a
              ? (r ?? S(e, e.selectedAssets.values(), a))
              : void 0,
          n = {
            reason: t,
            ...(i ? { limitScope: i } : {}),
            revision:
              ((null == (s = e.selectionBlockedFeedback)
                ? void 0
                : s.revision) ?? 0) + 1,
          };
        return "alreadyAdded" !== t && a
          ? { selectionBlockedFeedback: { ...n, target: a } }
          : { selectionBlockedFeedback: n };
      }
      let em = new Set();
      function ep(e) {
        let t = {
          assetId: e.assetId,
          category: e.category,
          historyId: e.historyId,
          sourceItemId: e.sourceItemId,
          ...(void 0 !== e.title ? { title: e.title } : {}),
          ...(void 0 !== e.uploadSource
            ? { uploadSource: e.uploadSource }
            : {}),
        };
        return (
          void 0 !== e.generationDraftSeed &&
            (t = { ...t, generationDraftSeed: e.generationDraftSeed }),
          t
        );
      }
      function eh(e, t) {
        let a;
        for (let r of t) e.has(r) && (a ?? (a = new Map(e)), a.delete(r));
        return a ?? e;
      }
      function ev(e) {
        let t = e.lastImportResult;
        return {
          importStatus: e.importStatus,
          completedCount: e.importProgress.completedCount,
          totalCount: e.importProgress.totalCount,
          remainingCount: Math.max(
            0,
            e.importProgress.totalCount - e.importProgress.completedCount,
          ),
          successfulCount: (null == t ? void 0 : t.successfulCount) ?? 0,
          failedCount: (null == t ? void 0 : t.failedCount) ?? 0,
          uncompletedCount: (null == t ? void 0 : t.uncompletedCount) ?? 0,
          failureReason: (null == t ? void 0 : t.failureReason) ?? null,
        };
      }
      function eg() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          items: [],
          hasMore: !0,
          status: "idle",
          loadMoreStatus: "idle",
          queryKey: e,
          scrollOffset: 0,
        };
      }
      function eb() {
        return Object.fromEntries(ed.map((e) => [e, eg()]));
      }
      function ef(e, t, a) {
        return { ...e, [t]: a(e[t]) };
      }
      let ey = (0, s.createContext)(null);
      function ex(e) {
        var t;
        let {
            api: a,
            assetLibraryService: i,
            children: o,
            commitTarget: l,
            config: c,
            importTarget: d,
            interactionSubjectNodeId: u,
            interactionSource: m,
            onPanelAction: p,
          } = e,
          g = U(),
          b = (0, s.useMemo)(() => {
            let e = a.app.observability.state,
              t = v(c);
            if (!a.canvas && t.tabs.groups.some((e) => "subjects" === e.id))
              throw Error(
                "A standalone Asset Library supports asset tabs only",
              );
            let r = (function () {
              var e;
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                a = t.config ?? h;
              return (0, ec.f)({
                contract: el.pH,
                state: t.state,
                initializer:
                  ((e = a),
                  (t) => {
                    var a, r, s, i, o;
                    let l, c;
                    return {
                      ...((c = {
                        favoritePendingIds: [],
                        favoriteNotice: void 0,
                        space: { key: "personal", available: !0 },
                        memberUserId: "0",
                        members: [],
                        membersStatus: "idle",
                        selectionMode: (a = e).selectionMode,
                        selectionBlockedFeedback: null,
                        activeSection: a.tabs.groups[0].id,
                        activeCategory:
                          (null ==
                          (l = a.tabs.groups.find((e) => "assets" === e.id))
                            ? void 0
                            : l.secondaryTabs[0]) ?? "image",
                        searchDraft: "",
                        committedKeyword: "",
                        filters: [],
                        pages: eb(),
                        selectedAssets: new Map(),
                        importStatus: "idle",
                        importProgress: { completedCount: 0, totalCount: 0 },
                        lastImportResult: null,
                        importActionState: { available: !0 },
                        externalSharedOccupancy: 0,
                        occupiedSelectionIds: new Set(
                          a.occupiedSelectionIds ?? [],
                        ),
                      }),
                      void 0 !== a.maxSelectedCount &&
                        (c = { ...c, maxSelectedCount: a.maxSelectedCount }),
                      void 0 !== a.maxSharedSelectedCount &&
                        (c = {
                          ...c,
                          maxSharedSelectedCount: a.maxSharedSelectedCount,
                        }),
                      a.maxSelectedCountByCategory &&
                        (c = {
                          ...c,
                          maxSelectedCountByCategory:
                            a.maxSelectedCountByCategory,
                        }),
                      a.mutuallyExclusiveCategories &&
                        (c = {
                          ...c,
                          mutuallyExclusiveCategories:
                            a.mutuallyExclusiveCategories,
                        }),
                      a.mutuallyExclusiveCategoryGroups &&
                        (c = {
                          ...c,
                          mutuallyExclusiveCategoryGroups:
                            a.mutuallyExclusiveCategoryGroups,
                        }),
                      c),
                      setFavorite(e) {
                        t(
                          (t) => {
                            let a = { ...t.pages };
                            for (let t of ed)
                              a[t] = {
                                ...a[t],
                                items: a[t].items.map((t) => {
                                  var a;
                                  return (null == (a = t.favorite)
                                    ? void 0
                                    : a.key) === e.key && t.favorite
                                    ? {
                                        ...t,
                                        favorite: {
                                          ...t.favorite,
                                          isFavorite: e.favorite,
                                        },
                                      }
                                    : t;
                                }),
                              };
                            return {
                              favoritePendingIds: e.pending,
                              favoriteNotice: e.failed
                                ? (0, n.SjG)(!e.favorite)
                                : void 0,
                              pages: a,
                            };
                          },
                          !1,
                          { type: "assetLibrary.setFavorite" },
                        );
                      },
                      resetSpace(e) {
                        t(
                          {
                            space: e,
                            memberUserId: "0",
                            members: [],
                            membersStatus: "idle",
                            pages: eb(),
                            selectedAssets: new Map(),
                            searchDraft: "",
                            committedKeyword: "",
                            filters: [],
                          },
                          !1,
                          { type: "assetLibrary.resetSpace" },
                        );
                      },
                      selectMember(e) {
                        t(
                          {
                            memberUserId: e,
                            pages: eb(),
                            selectedAssets: new Map(),
                          },
                          !1,
                          { type: "assetLibrary.selectMember" },
                        );
                      },
                      setMembers(e) {
                        let a =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : [];
                        t({ membersStatus: e, members: a }, !1, {
                          type: "assetLibrary.setMembers",
                        });
                      },
                      ...((r = t),
                      {
                        setActiveSection(e) {
                          r({ activeSection: e }, !1, {
                            type: "assetLibrary.setActiveSection",
                          });
                        },
                        setActiveCategory(e) {
                          r({ activeCategory: e }, !1, {
                            type: "assetLibrary.setActiveCategory",
                          });
                        },
                        setSearchDraft(e) {
                          r({ searchDraft: e }, !1, {
                            type: "assetLibrary.setSearchDraft",
                          });
                        },
                        commitSearch(e) {
                          r({ committedKeyword: e.trim() }, !1, {
                            type: "assetLibrary.commitSearch",
                          });
                        },
                        setFilters(e) {
                          r({ filters: e }, !1, {
                            type: "assetLibrary.setFilters",
                          });
                        },
                      }),
                      ...((s = t),
                      {
                        beginPage(e, t, a) {
                          s(
                            (r) => ({
                              pages: ef(r.pages, e, (e) => ({
                                ...(a || e.queryKey !== t ? eg(t) : e),
                                status: a ? "loading" : e.status,
                                loadMoreStatus: a ? "idle" : "loading",
                                queryKey: t,
                              })),
                            }),
                            !1,
                            { type: "assetLibrary.beginPage" },
                          );
                        },
                        resolvePage(e, t, a) {
                          s(
                            (r) => ({
                              pages: ef(r.pages, e, (e) =>
                                (function (e, t, a) {
                                  if (e.queryKey !== t) return e;
                                  let r = new Set(
                                      e.items.map((e) => e.assetId),
                                    ),
                                    s = a.items.filter(
                                      (e) =>
                                        !r.has(e.assetId) &&
                                        (r.add(e.assetId), !0),
                                    );
                                  return {
                                    ...e,
                                    items: [...e.items, ...s],
                                    nextCursor: a.nextCursor,
                                    hasMore: a.hasMore && !!a.nextCursor,
                                    status: "ready",
                                    loadMoreStatus: "idle",
                                  };
                                })(e, t, a),
                              ),
                            }),
                            !1,
                            { type: "assetLibrary.resolvePage" },
                          );
                        },
                        failPage(e, t, a) {
                          s(
                            (r) => ({
                              pages: ef(r.pages, e, (e) =>
                                e.queryKey !== t
                                  ? e
                                  : {
                                      ...e,
                                      status: a ? "error" : e.status,
                                      loadMoreStatus: a ? "idle" : "error",
                                    },
                              ),
                            }),
                            !1,
                            { type: "assetLibrary.failPage" },
                          );
                        },
                        resetInterruptedPageLoads() {
                          s(
                            (e) => {
                              let t = e.pages;
                              for (let e of ed) {
                                let a = t[e];
                                ("loading" === a.status ||
                                  "loading" === a.loadMoreStatus) &&
                                  (t = ef(t, e, (e) => ({
                                    ...e,
                                    status:
                                      "loading" === e.status
                                        ? "idle"
                                        : e.status,
                                    loadMoreStatus:
                                      "loading" === e.loadMoreStatus
                                        ? "idle"
                                        : e.loadMoreStatus,
                                  })));
                              }
                              return t === e.pages ? e : { pages: t };
                            },
                            !1,
                            { type: "assetLibrary.resetInterruptedPageLoads" },
                          );
                        },
                        setScrollOffset(e, t) {
                          s(
                            (a) => {
                              var r, s;
                              let i,
                                n =
                                  ((r = a.pages),
                                  (s = e),
                                  (i = Math.max(0, t)),
                                  r[s].scrollOffset === i
                                    ? r
                                    : ef(r, s, (e) => ({
                                        ...e,
                                        scrollOffset: i,
                                      })));
                              return n === a.pages ? a : { pages: n };
                            },
                            !1,
                            { type: "assetLibrary.setScrollOffset" },
                          );
                        },
                      }),
                      ...((i = t),
                      {
                        setExternalSharedOccupancy(e) {
                          var t;
                          let a;
                          ((t = i),
                            (a = Math.max(0, Math.floor(e))),
                            t(
                              (e) =>
                                e.externalSharedOccupancy === a
                                  ? e
                                  : { externalSharedOccupancy: a },
                              !1,
                              {
                                type: "assetLibrary.setExternalSharedOccupancy",
                              },
                            ));
                        },
                        toggleSelected(e) {
                          var t, a;
                          ((t = i),
                            (a = e),
                            t(
                              (e) => {
                                if ("importing" === e.importStatus) return e;
                                if ("single" === e.selectionMode)
                                  return {
                                    selectedAssets: e.selectedAssets.has(
                                      a.assetId,
                                    )
                                      ? new Map()
                                      : new Map([[a.assetId, ep(a)]]),
                                  };
                                let t = new Map(e.selectedAssets);
                                if (t.has(a.assetId)) t.delete(a.assetId);
                                else {
                                  if (C(e, t.values(), a.category))
                                    return eu(
                                      e,
                                      "mutuallyExclusiveCategory",
                                      a.category,
                                    );
                                  if (j(e, t.values(), a))
                                    return eu(e, "limitReached", a.category);
                                  t.set(a.assetId, ep(a));
                                }
                                return { selectedAssets: t };
                              },
                              !1,
                              { type: "assetLibrary.toggleSelected" },
                            ));
                        },
                        addSelected(e) {
                          var t, a;
                          ((t = i),
                            (a = e),
                            t(
                              (e) => {
                                let t, r;
                                if ("importing" === e.importStatus) return e;
                                if ("single" === e.selectionMode) {
                                  let t = a[0];
                                  return !t ||
                                    (1 === e.selectedAssets.size &&
                                      e.selectedAssets.has(t.assetId))
                                    ? e
                                    : {
                                        selectedAssets: new Map([
                                          [t.assetId, ep(t)],
                                        ]),
                                      };
                                }
                                let s = null,
                                  i = !1,
                                  n = !1;
                                for (let o of a)
                                  if (!(s ?? e.selectedAssets).has(o.assetId)) {
                                    if (
                                      C(
                                        e,
                                        (s ?? e.selectedAssets).values(),
                                        o.category,
                                      )
                                    ) {
                                      ((n = !0), t ?? (t = o.category));
                                      continue;
                                    }
                                    if (
                                      j(e, (s ?? e.selectedAssets).values(), o)
                                    ) {
                                      ((i = !0),
                                        r ??
                                          (r = S(
                                            e,
                                            (s ?? e.selectedAssets).values(),
                                            o.category,
                                          )),
                                        t ?? (t = o.category));
                                      continue;
                                    }
                                    (s ?? (s = new Map(e.selectedAssets)),
                                      s.set(o.assetId, ep(o)));
                                  }
                                return s || i || n
                                  ? s && (i || n)
                                    ? {
                                        selectedAssets: s,
                                        ...eu(
                                          e,
                                          n
                                            ? "mutuallyExclusiveCategory"
                                            : "limitReached",
                                          t,
                                          r,
                                        ),
                                      }
                                    : s
                                      ? { selectedAssets: s }
                                      : eu(
                                          e,
                                          n
                                            ? "mutuallyExclusiveCategory"
                                            : "limitReached",
                                          t,
                                          r,
                                        )
                                  : e;
                              },
                              !1,
                              { type: "assetLibrary.addSelected" },
                            ));
                        },
                        clearSelected() {
                          i(
                            (e) =>
                              "importing" === e.importStatus ||
                              0 === e.selectedAssets.size
                                ? e
                                : { selectedAssets: new Map() },
                            !1,
                            { type: "assetLibrary.clearSelected" },
                          );
                        },
                        reportSelectionBlocked(e, t) {
                          i((a) => eu(a, e, t), !1, {
                            type: "assetLibrary.reportSelectionBlocked",
                          });
                        },
                      }),
                      ...((o = t),
                      {
                        beginImport(e) {
                          o(
                            {
                              importStatus: "importing",
                              importProgress: {
                                completedCount: 0,
                                totalCount: e,
                              },
                              lastImportResult: null,
                            },
                            !1,
                            { type: "assetLibrary.beginImport" },
                          );
                        },
                        recordImportCompletion() {
                          o(
                            (e) =>
                              "importing" !== e.importStatus
                                ? e
                                : {
                                    importProgress: {
                                      completedCount: Math.min(
                                        e.importProgress.completedCount + 1,
                                        e.importProgress.totalCount,
                                      ),
                                      totalCount: e.importProgress.totalCount,
                                    },
                                  },
                            !1,
                            { type: "assetLibrary.recordImportCompletion" },
                          );
                        },
                        finishImport(e) {
                          let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null;
                          o(
                            (a) => ({
                              selectedAssets: eh(a.selectedAssets, e),
                              importStatus: t ? "error" : "idle",
                              importProgress: {
                                completedCount: 0,
                                totalCount: 0,
                              },
                              lastImportResult: t,
                            }),
                            !1,
                            { type: "assetLibrary.finishImport" },
                          );
                        },
                        resetInterruptedImport() {
                          let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : em;
                          o(
                            (t) =>
                              "importing" === t.importStatus
                                ? {
                                    selectedAssets: eh(t.selectedAssets, e),
                                    importStatus: "idle",
                                    importProgress: {
                                      completedCount: 0,
                                      totalCount: 0,
                                    },
                                    lastImportResult: null,
                                  }
                                : t,
                            !1,
                            { type: "assetLibrary.resetInterruptedImport" },
                          );
                        },
                        setImportActionState(e) {
                          o({ importActionState: e }, !1, {
                            type: "assetLibrary.setImportActionState",
                          });
                        },
                      }),
                    };
                  }),
                summarize: ev,
              });
            })({ config: t, ...(e ? { state: e } : {}) });
            return {
              actions: new Y(a, i, r, l ?? d, p, g),
              config: t,
              store: r,
            };
          }, [a, i, l, c, d, p, g]),
          f = null == (t = a.canvas) ? void 0 : t.gestures;
        (0, s.useEffect)(
          () => (
            b.actions.start(),
            () => {
              (b.actions.stop(), b.store.destroy());
            }
          ),
          [b],
        );
        let y = (0, s.useRef)(u);
        return (
          (y.current = u),
          (0, s.useEffect)(
            () =>
              (function (e, t, a, r) {
                if (!t) return () => void 0;
                t.declare({
                  surface: "assetPanel",
                  gesture: "show",
                  context: eo(a(), r),
                });
                let s = e.subscribe((e, s) => {
                  var i, n, o, l, c;
                  return (
                    (i = t),
                    (n = s),
                    (o = e),
                    (l = a()),
                    (c = r),
                    void (n.activeSection !== o.activeSection &&
                      i.declare({
                        surface: "assetPanel",
                        gesture: "switch_tab",
                        context: eo(l, c, {
                          beforeTab: n.activeSection,
                          afterTab: o.activeSection,
                        }),
                      }),
                    n.activeCategory !== o.activeCategory &&
                      i.declare({
                        surface: "assetPanel",
                        gesture: "switch_sub_tab",
                        context: eo(l, c, {
                          beforeSubTab: n.activeCategory,
                          afterSubTab: o.activeCategory,
                        }),
                      }),
                    n.committedKeyword !== o.committedKeyword &&
                      i.declare({
                        surface: "assetPanel",
                        gesture: "search",
                        context: eo(l, c),
                      }),
                    n.filters !== o.filters &&
                      i.declare({
                        surface: "assetPanel",
                        gesture: "filter",
                        context: eo(l, c),
                      }),
                    "idle" === n.importStatus &&
                      "importing" === o.importStatus &&
                      i.declare({
                        surface: "assetPanel",
                        gesture: "confirm",
                        context: eo(l, c),
                      }),
                    (function (e, t, a, r, s) {
                      if (
                        "idle" === t.importStatus &&
                        t.selectedAssets !== a.selectedAssets
                      ) {
                        if (a.selectedAssets.size < t.selectedAssets.size)
                          return e.declare({
                            surface: "assetPanel",
                            gesture: "unselect",
                            context: eo(r, s),
                          });
                        e.declare({
                          surface: "assetPanel",
                          gesture: "select",
                          context: eo(r, s),
                        });
                      }
                    })(i, n, o, l, c))
                  );
                });
                return () => {
                  (s(),
                    t.declare({
                      surface: "assetPanel",
                      gesture: "close",
                      context: eo(a(), r),
                    }));
                };
              })(b.store, f, () => y.current, m),
            [f, b, m],
          ),
          (0, r.jsx)(ey.Provider, { value: b, children: o })
        );
      }
      function ej() {
        return ew().actions;
      }
      function eS(e) {
        let t = ew();
        return (0, F.Pj)(t.store, e);
      }
      function eC() {
        return ew().config;
      }
      function ew() {
        let e = (0, s.useContext)(ey);
        if (!e)
          throw Error(
            "Asset library hooks must be used within AssetLibraryProvider.",
          );
        return e;
      }
      var eM = a(31935),
        eI = a(52272);
      let eN = [
          "image",
          "video",
          "audio",
          "text",
          "subject",
          "timeline",
          "other",
        ],
        ek = {
          favorite: !0,
          time: !0,
          statuses: [],
          resolutions: [],
          ratios: [],
          generationModes: [],
        };
      function eT(e, t) {
        let a = (0, O.iB)(e, ek),
          r = (0, O.I)(
            a.find((e) => "time" === e.type),
            t,
          ),
          s = {
            ...(a.some((e) => "favorite" === e.type && e.value)
              ? { only_favorite: !0 }
              : {}),
            ...((null == r ? void 0 : r.beginTimestamp) === void 0
              ? {}
              : { begin_time_ms: r.beginTimestamp }),
            ...((null == r ? void 0 : r.endTimestamp) === void 0
              ? {}
              : { end_time_ms: r.endTimestamp }),
          };
        return Object.keys(s).length ? s : void 0;
      }
      let eA = {
          1: eM.jJ.AR1x1,
          2: eM.jJ.AR3x4,
          3: eM.jJ.AR16x9,
          4: eM.jJ.AR4x3,
          5: eM.jJ.AR9x16,
          6: eM.jJ.AR2x3,
          7: eM.jJ.AR3x2,
          8: eM.jJ.AR21x9,
        },
        eD = { "1k": "1K", "2k": "2K", "4k": "4K", "8k": "8K" },
        ez = { "720p": "720p", "1080p": "1080p", "2k": "2K", "4k": "4K" };
      function eR(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return "image" === e || "video" === e || "audio" === e
          ? {
              ...(0, eI.O)(e),
              favorite: t,
              generationModes:
                "video" === e
                  ? [
                      "text_to_video",
                      "image_to_video",
                      "first_end_frame",
                      "omni",
                    ]
                  : "audio" === e
                    ? ["audio_tts", "music"]
                    : [],
            }
          : {
              favorite: t,
              time: !0,
              statuses: [],
              resolutions: [],
              ratios: [],
              generationModes: [],
            };
      }
      class eP {
        beginQuery() {
          return ((this.queryRevision += 1), this.queryRevision);
        }
        acceptQuery(e, t) {
          return (
            e === this.queryRevision &&
            Number.isSafeInteger(t.source_draft_version) &&
            t.source_draft_version >= 0
          );
        }
        select(e, t, a, r) {
          if (!this.acceptQuery(this.queryRevision, a) || !t.copyable)
            return !1;
          let s = this.versionByProjectId.get(e) ?? a.source_draft_version;
          return (
            s === a.source_draft_version &&
            (this.versionByProjectId.set(e, s),
            this.selectedByKey.set(eF(e, t.source_node_id), {
              selection: {
                sourceProjectId: e,
                nodeId: t.source_node_id,
                sourceDraftVersion: s,
              },
              category: r,
            }),
            !0)
          );
        }
        unselect(e, t) {
          (this.selectedByKey.delete(eF(e, t)),
            [...this.selectedByKey.values()].some((t) => {
              let { selection: a } = t;
              return a.sourceProjectId === e;
            }) || this.versionByProjectId.delete(e));
        }
        clear() {
          (this.selectedByKey.clear(),
            this.versionByProjectId.clear(),
            (this.queryRevision += 1));
        }
        getSelections() {
          return [...this.selectedByKey.values()].map((e) => {
            let { selection: t } = e;
            return t;
          });
        }
        getSnapshot() {
          let e = new Map();
          for (let {
            selection: t,
            category: a,
          } of this.selectedByKey.values()) {
            let r = e.get(t.sourceProjectId);
            (r || ((r = new Map()), e.set(t.sourceProjectId, r)),
              r.set(a, (r.get(a) ?? 0) + 1));
          }
          return {
            selections: this.getSelections(),
            selectedCountByProject: e,
          };
        }
        getSourceDraftVersion(e) {
          return this.versionByProjectId.get(e);
        }
        constructor() {
          ((this.selectedByKey = new Map()),
            (this.versionByProjectId = new Map()),
            (this.queryRevision = 0));
        }
      }
      function eF(e, t) {
        return JSON.stringify([e, t]);
      }
      var eE = a(27849);
      class eU {
        favoriteTargetAllowed(e) {
          var t, a;
          return (
            !0 !== e.is_template &&
            (this.input.store.getState().teamId
              ? (null == (t = e.permission) ? void 0 : t.can_write) === !0
              : (null == (a = e.permission) ? void 0 : a.can_manage) === !0)
          );
        }
        cancelFavorite(e) {
          let t = e
            ? [this.favoriteRequests.get(e)].filter((e) => void 0 !== e)
            : [...this.favoriteRequests.values()];
          if (0 === t.length) return;
          let a = new Map(t.map((e) => [e.projectId, e.previous]));
          for (let e of t)
            (e.controller.abort(), this.favoriteRequests.delete(e.projectId));
          let r = this.input.store.getState();
          r.update({
            favoritePendingProjectIds: [...this.favoriteRequests.keys()],
            projects: r.projects.map((e) =>
              a.has(e.project_id)
                ? { ...e, is_favorite: a.get(e.project_id) }
                : e,
            ),
          });
        }
        async executePreparedImport(e, t, a, r) {
          if (this.importController !== r || r.signal.aborted)
            return { ok: !1, reason: "cancelled" };
          try {
            let s = await e.execute(
              {
                selections: t,
                placement: this.input.placement,
                selectionPolicy: "defer",
              },
              r.signal,
            );
            if (r.signal.aborted || this.disposed || !this.isCurrentSpace(a))
              return { ok: !1, reason: "cancelled" };
            if (!s.ok) return s;
            return (
              this.selection.clear(),
              this.input.store
                .getState()
                .update({ ...this.selection.getSnapshot() }),
              { ok: !0, rootNodeIds: s.value.rootNodeIds ?? s.value.nodeIds }
            );
          } catch {
            return {
              ok: !1,
              reason: r.signal.aborted ? "cancelled" : "commandFailed",
            };
          } finally {
            this.finishPreparedImport(r);
          }
        }
        finishPreparedImport(e) {
          this.importController !== e ||
            ((this.importController = void 0),
            (this.blankProjectImport = !1),
            !this.disposed &&
              (this.input.store.getState().update({ importing: !1 }),
              this.pendingSpaceRefresh &&
                ((this.pendingSpaceRefresh = !1), this.refreshSpace(!0))));
        }
        async load(e) {
          var t, a;
          if (
            this.disposed ||
            this.input.store.getState().importing ||
            !this.input.store.getState().spaceAvailable
          )
            return;
          let r = this.input.api.app.canvasAssets;
          if (!r) return;
          this.nodeFavorites.cancel();
          let s = this.spaceKey;
          if (!this.isCurrentSpace(s)) return;
          (clearTimeout(this.searchTimer),
            null == (t = this.queryController) || t.abort());
          let i = new AbortController();
          this.queryController = i;
          let o = this.selection.beginQuery(),
            l = this.input.store.getState(),
            c = null == (a = l.activeProject) ? void 0 : a.project_id;
          l.update({
            loading: !0,
            error: void 0,
            ...(e
              ? {}
              : {
                  cursor: "",
                  hasMore: !1,
                  items: [],
                  previewUrls: new Map(),
                  playbackUrls: new Map(),
                  ...(c ? {} : { projects: [] }),
                }),
          });
          try {
            if (c) {
              let t = await r.listNodes(
                {
                  sourceProjectId: c,
                  category: l.category,
                  onlyFavorite:
                    l.nodeFavoriteSupported &&
                    l.filters.some((e) => "favorite" === e.type && e.value),
                  keyword: l.keyword,
                  filters: (function (e, t, a) {
                    let r = (0, O.iB)(t, eR(e));
                    if (0 === r.length) return;
                    let s = (0, O.I)(
                        r.find((e) => "time" === e.type),
                        a,
                      ),
                      i = r
                        .filter((e) => "status" === e.type)
                        .map((e) => e.value),
                      n = r
                        .filter((e) => "resolution" === e.type)
                        .flatMap((t) => {
                          let a =
                            "image" === e
                              ? eD[t.value]
                              : "video" === e
                                ? ez[t.value]
                                : void 0;
                          return void 0 === a ? [] : [a];
                        }),
                      o = r
                        .filter((e) => "ratio" === e.type)
                        .map((e) => eA[e.value]),
                      l = r
                        .filter((e) => "generationMode" === e.type)
                        .map((e) => e.value),
                      c = l.flatMap((e) =>
                        "omni" === e
                          ? [eM.wY.MultiModal]
                          : "first_end_frame" === e
                            ? [eM.wY.FirstLastFrame]
                            : "text_to_video" === e
                              ? [eM.wY.T2V]
                              : "image_to_video" === e
                                ? [eM.wY.I2V]
                                : [],
                      ),
                      d = l.flatMap((e) =>
                        "audio_tts" === e ? [1] : "music" === e ? [2] : [],
                      );
                    return {
                      ...(s
                        ? {
                            time: {
                              ...(void 0 === s.beginTimestamp
                                ? {}
                                : { begin_time_ms: s.beginTimestamp }),
                              ...(void 0 === s.endTimestamp
                                ? {}
                                : { end_time_ms: s.endTimestamp }),
                            },
                          }
                        : {}),
                      ...(i.length ? { statuses: i } : {}),
                      ...(n.length ? { resolutions: n } : {}),
                      ...(o.length ? { aspect_ratios: o } : {}),
                      ...(c.length
                        ? { generation_modes: { video: c } }
                        : d.length
                          ? { generation_modes: { audio: d } }
                          : {}),
                    };
                  })(l.category, l.filters, l.filterTimeAnchor),
                  cursor: e ? l.cursor : void 0,
                  sourceDraftVersion: this.selection.getSourceDraftVersion(c),
                },
                i.signal,
              );
              if (
                i.signal.aborted ||
                this.disposed ||
                !this.isCurrentSpace(s) ||
                !this.selection.acceptQuery(o, t)
              )
                return;
              let a = this.selection.getSourceDraftVersion(c);
              if (void 0 !== a && a !== t.source_draft_version)
                throw Error("Source selection version changed");
              ((this.nodePage = t),
                this.input.store
                  .getState()
                  .update({
                    items: e ? [...l.items, ...t.items] : t.items,
                    previewUrls: new Map([
                      ...(e ? l.previewUrls : []),
                      ...(0, eE.EZ)(t),
                    ]),
                    playbackUrls: new Map([
                      ...(e ? l.playbackUrls : []),
                      ...(0, eE.bL)(t),
                    ]),
                    cursor: t.cursor,
                    hasMore: t.has_more,
                    sourceDraftVersion: t.source_draft_version,
                    nodeFavoriteSupported: !0 === t.favorite_supported,
                  }));
            } else {
              let t,
                a = eT(l.filters, l.filterTimeAnchor),
                n = e ? l.cursor : void 0,
                o = new Set();
              do {
                if (
                  (n && o.add(n),
                  (t = await r.listProjects(
                    {
                      currentProjectId: this.input.api.canvas.getProjectId(),
                      creatorUid:
                        l.teamId && "0" !== l.memberUserId
                          ? l.memberUserId
                          : void 0,
                      ...(a ? { filters: a } : {}),
                      keyword: l.keyword,
                      cursor: n,
                    },
                    i.signal,
                  )),
                  i.signal.aborted ||
                    this.disposed ||
                    !this.isCurrentSpace(s) ||
                    this.queryController !== i)
                )
                  return;
                if (t.hasMore && (!t.cursor || o.has(t.cursor)))
                  throw Error("Canvas asset source cursor did not advance");
                n = t.cursor;
              } while (0 === t.projects.length && t.hasMore);
              this.input.store
                .getState()
                .update({
                  projects: (e
                    ? [...this.input.store.getState().projects, ...t.projects]
                    : t.projects
                  ).map((e) =>
                    this.favoriteRequests.has(e.project_id)
                      ? {
                          ...e,
                          is_favorite: this.favoriteRequests.get(e.project_id)
                            .desired,
                        }
                      : e,
                  ),
                  cursor: t.cursor,
                  hasMore: t.hasMore,
                });
            }
          } catch {
            i.signal.aborted ||
              this.disposed ||
              this.input.store.getState().update({ error: (0, n.Ilc)() });
          } finally {
            this.queryController !== i ||
              this.disposed ||
              this.input.store.getState().update({ loading: !1 });
          }
        }
        refreshSpace(e) {
          var t, a, r, s, i;
          let n = (null == (t = this.input.api.app.canvasAssets)
            ? void 0
            : t.readSpace()) ?? { available: !0, key: "personal" };
          if (
            n.key === this.spaceKey &&
            this.input.store.getState().teamId === n.teamId &&
            this.input.store.getState().spaceAvailable === n.available
          )
            return;
          let o = this.input.store.getState();
          if (
            this.importController &&
            this.blankProjectImport &&
            ((o.spaceAvailable && n.available && o.teamId === n.teamId) ||
              (!n.available &&
                (null ==
                (a = (r = this.input.api.canvas.actions.importAsset)
                  .isProjectMaterialized)
                  ? void 0
                  : a.call(r)) === !1))
          ) {
            this.pendingSpaceRefresh = !0;
            return;
          }
          ((this.pendingSpaceRefresh = !1),
            this.cancelFavorite(),
            this.nodeFavorites.cancel(),
            (this.spaceKey = n.key),
            null == (s = this.queryController) || s.abort(),
            this.cancelImport(),
            null == (i = this.membersController) || i.abort(),
            clearTimeout(this.searchTimer),
            this.selection.clear(),
            this.selection.beginQuery(),
            (this.nodePage = void 0),
            this.input.store
              .getState()
              .update({
                activeProject: void 0,
                category: "image",
                keyword: "",
                filters: [],
                filterTimeAnchor: Date.now(),
                spaceAvailable: n.available,
                teamId: n.teamId,
                memberUserId: "0",
                members: [],
                membersStatus: n.teamId ? "idle" : "ready",
                projects: [],
                items: [],
                previewUrls: new Map(),
                playbackUrls: new Map(),
                cursor: "",
                hasMore: !1,
                loading: !1,
                importing: !1,
                error: void 0,
                sourceDraftVersion: void 0,
                ...this.selection.getSnapshot(),
                notice: void 0,
              }),
            e &&
              n.available &&
              (n.teamId && this.loadMembers(), this.load(!1)));
        }
        isCurrentSpace(e) {
          return !this.disposed && e === this.spaceKey;
        }
        async loadMembers() {
          var e;
          let t = this.input.api.app.canvasAssets,
            a = this.input.store.getState();
          if (!t || !a.teamId) return;
          null == (e = this.membersController) || e.abort();
          let r = new AbortController();
          this.membersController = r;
          let s = this.spaceKey;
          a.update({ membersStatus: "loading" });
          try {
            let e = await t.listMembers(r.signal);
            !r.signal.aborted &&
              this.isCurrentSpace(s) &&
              this.input.store
                .getState()
                .update({ members: e, membersStatus: "ready" });
          } catch {
            !r.signal.aborted &&
              this.isCurrentSpace(s) &&
              this.input.store.getState().update({ membersStatus: "error" });
          } finally {
            this.membersController === r && (this.membersController = void 0);
          }
        }
        constructor(e) {
          ((this.input = e),
            (this.favoriteRequests = new Map()),
            (this.selection = new eP()),
            (this.blankProjectImport = !1),
            (this.pendingSpaceRefresh = !1),
            (this.spaceKey = "personal"),
            (this.started = !1),
            (this.disposed = !1),
            (this.nodeFavorites = new W.Q(
              () => {
                var e;
                return this.started &&
                  !this.disposed &&
                  this.input.api.canvas.getPermissionSnapshot().canEdit &&
                  this.input.store.getState().spaceAvailable
                  ? `${this.spaceKey}:${null == (e = this.input.store.getState().activeProject) ? void 0 : e.project_id}`
                  : void 0;
              },
              (e) => {
                let t = this.input.store.getState(),
                  a =
                    e.committed &&
                    !e.failed &&
                    !e.favorite &&
                    t.filters.some((e) => "favorite" === e.type && e.value);
                t.update({
                  favoritePendingNodeIds: e.pending,
                  notice: e.failed ? (0, n.SjG)(!e.favorite) : void 0,
                  items: t.items.flatMap((t) =>
                    t.source_node_id !== e.key
                      ? [t]
                      : a
                        ? []
                        : [{ ...t, is_favorite: e.favorite }],
                  ),
                });
              },
              (e, t) => {
                var a, r;
                return null == (a = (r = this.input).onFavoriteSettled)
                  ? void 0
                  : a.call(r, e, t);
              },
            )),
            (this.getNodeFavoriteDisabledReason = () => {
              var e;
              return this.input.api.canvas.getPermissionSnapshot().canEdit
                ? this.input.store.getState().nodeFavoriteSupported &&
                  (null == (e = this.input.api.app.canvasAssets)
                    ? void 0
                    : e.batchFavoriteNodes) &&
                  this.input.store.getState().spaceAvailable
                  ? void 0
                  : (0, n.yzb)()
                : (0, n.uIs)();
            }),
            (this.toggleNodeFavorite = (e) => {
              let t = this.input.store.getState(),
                a = this.input.api.app.canvasAssets;
              if (
                this.getNodeFavoriteDisabledReason() ||
                t.importing ||
                t.loading ||
                !t.activeProject ||
                !(null == a ? void 0 : a.batchFavoriteNodes) ||
                !t.items.some((t) => t.source_node_id === e.source_node_id)
              )
                return;
              let r = t.activeProject.project_id,
                s = a.batchFavoriteNodes.bind(a);
              this.nodeFavorites.toggle(
                e.source_node_id,
                !0 === e.is_favorite,
                (t, a) =>
                  s(
                    {
                      projectId: r,
                      nodeIds: [e.source_node_id],
                      isFavorite: t,
                    },
                    a,
                  ),
              );
            }),
            (this.start = () => {
              var e;
              ((this.disposed = !1),
                this.refreshAvailability(),
                this.started ||
                  this.disposed ||
                  ((this.started = !0),
                  this.refreshSpace(!1),
                  (this.unsubscribeSpace =
                    null == (e = this.input.api.app.canvasAssets)
                      ? void 0
                      : e.subscribeSpace(() => this.refreshSpace(!0))),
                  this.input.store.getState().teamId && this.loadMembers(),
                  this.input.store.getState().spaceAvailable && this.load(!1)));
            }),
            (this.refreshAvailability = () => {
              var e, t;
              let a =
                this.input.api.canvas.getPermissionSnapshot().canEdit &&
                !!(null == (e = this.input.api.app.canvasAssets)
                  ? void 0
                  : e.batchFavoriteProjects);
              (a || this.cancelFavorite(),
                this.input.api.canvas.getPermissionSnapshot().canEdit ||
                  this.nodeFavorites.cancel());
              let r =
                  null == (t = this.input.api.canvas.importCanvasNodes)
                    ? void 0
                    : t.getState(),
                s = (null == r ? void 0 : r.available) === !0;
              (s || this.cancelImport(),
                this.input.store
                  .getState()
                  .update({
                    importAvailable: s,
                    favoriteAvailable: a,
                    importDisabledReason: s
                      ? void 0
                      : (null == r ? void 0 : r.reason) === "permissionDenied"
                        ? (0, n.uIs)()
                        : (0, n.yzb)(),
                  }));
            }),
            (this.dispose = () => {
              var e, t, a;
              (this.cancelFavorite(),
                this.nodeFavorites.cancel(),
                (this.disposed = !0),
                (this.started = !1),
                null == (e = this.queryController) || e.abort(),
                this.cancelImport(),
                null == (t = this.membersController) || t.abort(),
                null == (a = this.unsubscribeSpace) || a.call(this),
                (this.unsubscribeSpace = void 0),
                clearTimeout(this.searchTimer),
                this.selection.clear(),
                (this.blankProjectImport = !1),
                (this.pendingSpaceRefresh = !1),
                this.input.store
                  .getState()
                  .update({ ...this.selection.getSnapshot(), importing: !1 }));
            }),
            (this.getProjectFavoriteDisabledReason = (e) => {
              var t;
              let a = this.input.store.getState(),
                r = a.projects.find((t) => t.project_id === e);
              return this.input.api.canvas.getPermissionSnapshot().canEdit
                ? (null == r ? void 0 : r.permission)
                  ? this.favoriteTargetAllowed(r)
                    ? (null == (t = this.input.api.app.canvasAssets)
                        ? void 0
                        : t.batchFavoriteProjects) && a.spaceAvailable
                      ? void 0
                      : (0, n.yzb)()
                    : (0, n.uIs)()
                  : (0, n.yzb)()
                : (0, n.uIs)();
            }),
            (this.toggleProjectFavorite = (e) => {
              let t = this.input.store.getState();
              if (
                this.disposed ||
                !this.started ||
                t.loading ||
                t.importing ||
                this.favoriteRequests.has(e) ||
                this.getProjectFavoriteDisabledReason(e)
              )
                return;
              let a = t.projects.find((t) => t.project_id === e),
                r = this.input.api.app.canvasAssets;
              if (!a || !(null == r ? void 0 : r.batchFavoriteProjects)) return;
              let s = {
                  projectId: e,
                  previous: !0 === a.is_favorite,
                  desired: !0 !== a.is_favorite,
                  controller: new AbortController(),
                  spaceKey: this.spaceKey,
                },
                i = r.batchFavoriteProjects.bind(r);
              (this.favoriteRequests.set(e, s),
                t.update({
                  favoritePendingProjectIds: [...this.favoriteRequests.keys()],
                  notice: void 0,
                  projects: t.projects.map((t) =>
                    t.project_id === e ? { ...t, is_favorite: s.desired } : t,
                  ),
                }),
                (async () => {
                  var t, a, r, o, l, c, d;
                  try {
                    if (
                      (await i(
                        { projectIds: [e], isFavorite: s.desired },
                        s.controller.signal,
                      ),
                      this.favoriteRequests.get(e) !== s ||
                        s.controller.signal.aborted ||
                        this.disposed ||
                        !this.isCurrentSpace(s.spaceKey))
                    )
                      return;
                    if (!this.input.api.canvas.getPermissionSnapshot().canEdit)
                      return void this.cancelFavorite();
                    this.favoriteRequests.delete(e);
                    let n = this.input.store.getState(),
                      c =
                        null == (t = eT(n.filters, n.filterTimeAnchor))
                          ? void 0
                          : t.only_favorite;
                    (n.update({
                      favoritePendingProjectIds: [
                        ...this.favoriteRequests.keys(),
                      ],
                      ...(c && !s.desired && !n.activeProject
                        ? {
                            projects: n.projects.filter(
                              (t) => t.project_id !== e,
                            ),
                          }
                        : {}),
                    }),
                      null ==
                        (a = (r = this.input).onProjectFavoriteSucceeded) ||
                        a.call(r, s.desired),
                      null == (o = (l = this.input).onFavoriteSettled) ||
                        o.call(l, s.desired, !1));
                  } catch {
                    if (
                      this.favoriteRequests.get(e) !== s ||
                      s.controller.signal.aborted ||
                      this.disposed
                    )
                      return;
                    (this.cancelFavorite(e),
                      this.input.store
                        .getState()
                        .update({ notice: (0, n.SjG)(s.desired) }),
                      null == (c = (d = this.input).onFavoriteSettled) ||
                        c.call(d, s.desired, !0));
                  }
                })());
            }),
            (this.back = () => {
              (this.nodeFavorites.cancel(),
                this.input.store.getState().importing ||
                  (this.input.store
                    .getState()
                    .update({
                      activeProject: void 0,
                      keyword: "",
                      category: "image",
                      filters: [],
                      filterTimeAnchor: Date.now(),
                      items: [],
                      previewUrls: new Map(),
                      playbackUrls: new Map(),
                      cursor: "",
                      hasMore: !1,
                      sourceDraftVersion: void 0,
                    }),
                  (this.nodePage = void 0),
                  this.load(!1)));
            }),
            (this.openProject = (e) => {
              this.nodeFavorites.cancel();
              let t = this.input.store.getState();
              if (t.importing) return;
              let a = t.projects.find((t) => t.project_id === e);
              a &&
                (t.update({
                  activeProject: a,
                  keyword: "",
                  category: "image",
                  filters: [],
                  filterTimeAnchor: Date.now(),
                  items: [],
                  previewUrls: new Map(),
                  playbackUrls: new Map(),
                  cursor: "",
                  hasMore: !1,
                  sourceDraftVersion: void 0,
                }),
                (this.nodePage = void 0),
                this.load(!1));
            }),
            (this.setCategory = (e) => {
              if (this.input.store.getState().importing) return;
              let t = this.input.store.getState();
              (t.update({
                category: e,
                filters: (0, O.iB)(t.filters, eR(e, t.nodeFavoriteSupported)),
              }),
                this.load(!1));
            }),
            (this.setFilters = (e) => {
              if (this.input.store.getState().importing) return;
              let t = this.input.store.getState();
              (t.update({
                filters: (0, O.iB)(
                  e,
                  t.activeProject
                    ? eR(t.category, t.nodeFavoriteSupported)
                    : ek,
                ),
                filterTimeAnchor: Date.now(),
                cursor: "",
                hasMore: !1,
                items: [],
                previewUrls: new Map(),
                playbackUrls: new Map(),
              }),
                this.load(!1));
            }),
            (this.setKeyword = (e) => {
              var t;
              this.input.store.getState().importing ||
                (null == (t = this.queryController) || t.abort(),
                this.selection.beginQuery(),
                (this.nodePage = void 0),
                this.input.store
                  .getState()
                  .update({
                    keyword: e,
                    cursor: "",
                    hasMore: !1,
                    items: [],
                    loading: !0,
                  }),
                clearTimeout(this.searchTimer),
                (this.searchTimer = setTimeout(() => {
                  this.load(!1);
                }, 250)));
            }),
            (this.selectMember = (e) => {
              var t;
              let a = this.input.store.getState();
              !a.importing &&
                a.teamId &&
                a.memberUserId !== e &&
                ("0" === e || a.members.some((t) => t.userId === e)) &&
                (null == (t = this.queryController) || t.abort(),
                this.selection.beginQuery(),
                (this.nodePage = void 0),
                a.update({
                  memberUserId: e,
                  activeProject: void 0,
                  category: "image",
                  filters: a.activeProject ? [] : a.filters,
                  items: [],
                  previewUrls: new Map(),
                  playbackUrls: new Map(),
                  projects: [],
                  cursor: "",
                  hasMore: !1,
                  sourceDraftVersion: void 0,
                }),
                this.load(!1));
            }),
            (this.loadMore = () => {
              let e = this.input.store.getState();
              !e.hasMore || e.loading || e.importing || this.load(!0);
            }),
            (this.reload = () => {
              this.load(!1);
            }),
            (this.reloadMembers = () => {
              this.loadMembers();
            }),
            (this.toggle = (e) => {
              let t = this.input.store.getState();
              if (
                t.importing ||
                t.loading ||
                !t.activeProject ||
                !this.nodePage ||
                !t.items.some((t) => t.asset_key === e.asset_key)
              )
                return;
              let a = t.activeProject.project_id,
                r = t.selections.some(
                  (t) =>
                    t.sourceProjectId === a && t.nodeId === e.source_node_id,
                );
              r || t.importAvailable
                ? !r &&
                  void 0 !== this.input.maxSelectedCount &&
                  t.selections.length >= this.input.maxSelectedCount
                  ? t.update({ notice: (0, n.bgw)() })
                  : (r
                      ? this.selection.unselect(a, e.source_node_id)
                      : this.selection.select(a, e, this.nodePage, t.category),
                    t.update({
                      ...this.selection.getSnapshot(),
                      notice: void 0,
                    }),
                    r &&
                      void 0 === this.selection.getSourceDraftVersion(a) &&
                      this.load(!1))
                : t.update({ notice: t.importDisabledReason });
            }),
            (this.addItemsToSelection = (e) => {
              var t;
              let a = this.input.store.getState();
              if (
                this.disposed ||
                a.importing ||
                a.loading ||
                !a.activeProject ||
                !this.nodePage ||
                !a.importAvailable ||
                (null == (t = this.input.api.canvas.importCanvasNodes)
                  ? void 0
                  : t.getState().available) !== !0
              )
                return;
              let r = a.activeProject.project_id,
                s = new Set(e),
                i = new Set(
                  a.selections
                    .filter((e) => e.sourceProjectId === r)
                    .map((e) => e.nodeId),
                ),
                o = a.selections.length,
                l = !1;
              for (let e of a.items)
                if (
                  !(
                    !s.has(e.asset_key) ||
                    !e.copyable ||
                    i.has(e.source_node_id)
                  )
                ) {
                  if (
                    void 0 !== this.input.maxSelectedCount &&
                    o >= this.input.maxSelectedCount
                  ) {
                    l = !0;
                    break;
                  }
                  this.selection.select(r, e, this.nodePage, a.category) &&
                    (i.add(e.source_node_id), (o += 1));
                }
              (o !== a.selections.length || l) &&
                a.update({
                  ...this.selection.getSnapshot(),
                  notice: l ? (0, n.bgw)() : void 0,
                });
            }),
            (this.getSelectedCount = () =>
              this.input.store.getState().selections.length),
            (this.beginImport = () => {
              var e, t;
              let a = this.input.api.canvas.importCanvasNodes,
                r = this.input.store.getState();
              if (
                this.disposed ||
                !this.started ||
                !a ||
                !a.getState().available ||
                r.importing ||
                0 === r.selections.length
              )
                return null;
              let s = new AbortController(),
                i = this.spaceKey,
                n = [...this.selection.getSelections()];
              return (
                (this.importController = s),
                (this.blankProjectImport =
                  (null ==
                  (e = (t = this.input.api.canvas.actions.importAsset)
                    .isProjectMaterialized)
                    ? void 0
                    : e.call(t)) === !1),
                r.update({ importing: !0, error: void 0 }),
                {
                  count: n.length,
                  execute: () => this.executePreparedImport(a, n, i, s),
                }
              );
            }),
            (this.cancelImport = () => {
              let e = this.importController;
              return !!e && (e.abort(), this.finishPreparedImport(e), !0);
            }));
        }
      }
      var eL = a(98191),
        eV = a(96783);
      let eZ = {
          onlyFavorite: !1,
          favoritePendingIds: [],
          favoriteNotice: void 0,
          createActionState: { available: !0 },
          hasMore: !1,
          importFailure: null,
          importStatus: "idle",
          keyword: "",
          loadPhase: "loading",
          loadMorePhase: "idle",
          nextCursor: null,
          selectedSubjectIds: [],
          subjects: [],
        },
        eB = () => () => void 0,
        eW = () => eZ,
        eQ = "canvas-asset-library-import-failure";
      function e_(e) {
        let { children: t } = e;
        return (0, r.jsx)("footer", {
          className:
            "col-start-1 row-start-3 flex h-[76px] shrink-0 items-center justify-between gap-canvas-asset-library-footer-gap bg-dreamina-bg-surface px-6 pb-canvas-asset-library-footer-bottom pt-canvas-asset-library-footer-top font-dreamina-cn text-dreamina-cn-13 leading-canvas-asset-library-primary-tab",
          "data-testid": "canvas-asset-library-footer",
          style: {
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          },
          children: t,
        });
      }
      function eO(e) {
        var t, a, i, o, l, c, d;
        let {
            canvasImportActionState: u,
            canvasNotice: m,
            canvasSelectionCount: p,
            coordinator: h,
            onClose: v,
            onImportStarted: g,
            onImported: f,
            onImportedNodes: y,
            onImportedSubjects: x,
            renderImportFailureToast: j,
            renderImportSuccessToast: S,
            subjectImportSession: C,
          } = e,
          w = ej(),
          M = eS((e) => e.selectedAssets),
          I = eS((e) => e.occupiedSelectionIds),
          N = eS((e) => e.selectionMode),
          k = eS((e) => e.importActionState),
          T = (0, s.useSyncExternalStore)(
            (null == C ? void 0 : C.subscribe) ?? eB,
            (null == C ? void 0 : C.getSnapshot) ?? eW,
            (null == C ? void 0 : C.getSnapshot) ?? eW,
          ),
          A = (0, s.useSyncExternalStore)(
            h.subscribe,
            h.getSnapshot,
            h.getSnapshot,
          ),
          D = b(M.values(), void 0, I),
          z = M.size,
          R = T.selectedSubjectIds.length,
          P = z + R + p,
          F = [...M.values()].some((e) => !w.isAssetSupported(e)),
          E = (function (e) {
            var t, a;
            let {
              assetActionState: r,
              assetCount: s,
              canvasActionState: i,
              canvasCount: o,
              selectedCount: l,
              subjectActionState: c,
              subjectCount: d,
              unsupportedAssetSelected: u,
            } = e;
            return 0 === l
              ? (0, n.Xfy)()
              : s > 0 && !r.available
                ? "permissionDenied" === (t = r.reason)
                  ? (0, n.uIs)()
                  : "importPending" === t
                    ? (0, n.HIs)()
                    : (0, n.yzb)()
                : d > 0 && !c.available
                  ? "permissionDenied" === (a = c.reason)
                    ? (0, n.uIs)()
                    : "notEditingReady" === a
                      ? (0, n.yzb)()
                      : (0, n._3t)()
                  : o > 0 && (null == i ? void 0 : i.available) === !1
                    ? (i.disabledReason ?? (0, n.yzb)())
                    : u
                      ? (0, n.Eq0)()
                      : void 0;
          })({
            assetActionState: k,
            assetCount: z,
            canvasActionState: u,
            canvasCount: p,
            selectedCount: P,
            subjectActionState: T.createActionState,
            subjectCount: R,
            unsupportedAssetSelected: F,
          }),
          U =
            ((t = A),
            (0, n.wF9)(
              t.importProgress.completedCount,
              t.importProgress.totalCount,
            )),
          L = (function (e, t) {
            let [a, r] = (0, s.useState)(""),
              i = (0, s.useRef)(null),
              n = (0, s.useRef)(""),
              o = (0, s.useRef)(null);
            return (
              (0, s.useEffect)(() => {
                if ("importing" !== e) {
                  (o.current && clearTimeout(o.current),
                    (o.current = null),
                    (n.current = ""),
                    (i.current = null),
                    r(""));
                  return;
                }
                if (t === a) return;
                let s = Date.now(),
                  l = null === i.current ? 1 / 0 : s - i.current;
                if (l >= 500) {
                  (o.current && clearTimeout(o.current),
                    (o.current = null),
                    (n.current = ""),
                    (i.current = s),
                    r(t));
                  return;
                }
                ((n.current = t),
                  o.current ||
                    (o.current = setTimeout(() => {
                      ((o.current = null),
                        (i.current = Date.now()),
                        r(n.current),
                        (n.current = ""));
                    }, 500 - l)));
              }, [a, e, t]),
              (0, s.useEffect)(
                () => () => {
                  o.current && clearTimeout(o.current);
                },
                [],
              ),
              a
            );
          })(A.importStatus, U),
          V =
            ((a = "single" === N),
            (i = D),
            (o = R),
            (l = p) > 0
              ? { kind: "count", segments: (0, n.cPv)(i + o + l) }
              : a && 0 === o
                ? { kind: "count", segments: (0, n.pAY)() }
                : 0 === i && 0 === o
                  ? { kind: "count", segments: (0, n.LU7)(0) }
                  : i > 0 && o > 0
                    ? { kind: "count", segments: (0, n.LU7)(i + o) }
                    : o > 0
                      ? { kind: "count", segments: (0, n._Us)(o) }
                      : { kind: "count", segments: (0, n.cPv)(i) }),
          Z = (function (e, t) {
            var a;
            if (
              !e ||
              "error" !== t.importStatus ||
              (null == (a = t.lastImportResult)
                ? void 0
                : a.successfulCount) !== 0
            )
              return null;
            let s = t.lastImportResult.failureReason,
              i = (0, eV.zh)();
            return (
              s && (i = (0, n.TQ_)(s)),
              (0, r.jsx)(eY, {
                title: t.lastImportResult.failureDescription ?? i,
              })
            );
          })(j, A),
          B =
            ((c = A.importStatus),
            (d = V),
            "importing" === c
              ? null
              : (0, r.jsx)("span", {
                  "aria-live": "polite",
                  children: (0, r.jsx)(eJ, { model: d }),
                }));
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(e_, {
              children: [
                (0, r.jsxs)("div", {
                  className: "min-w-0 text-dreamina-text-tertiary",
                  children: [
                    B,
                    m
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            " ",
                            (0, r.jsx)("output", { children: m }),
                          ],
                        })
                      : null,
                    (0, r.jsx)("output", {
                      className: "sr-only",
                      "data-testid": "canvas-asset-library-import-status",
                      children: L,
                    }),
                  ],
                }),
                (0, r.jsx)(eX, {
                  coordinator: h,
                  disabledReason: E,
                  importSnapshot: A,
                  onClose: v,
                  onImportStarted: g,
                  onImported: f,
                  onImportedNodes: y,
                  onImportedSubjects: x,
                  renderImportFailureToast: j,
                  renderImportSuccessToast: S,
                  showDisabledReasonTooltip: 0 === P || F,
                  subjectImportSession: C,
                }),
              ],
            }),
            Z,
          ],
        });
      }
      function eY(e) {
        let { title: t } = e,
          a = (0, E.QQ)();
        return ((0, s.useEffect)(() => eG(a, t), [a, t]), null);
      }
      function eG(e, t) {
        return e({
          announcement: "assertive",
          dismissible: !1,
          id: eQ,
          status: "warning",
          title: t,
        });
      }
      function eX(e) {
        let {
            coordinator: t,
            disabledReason: a,
            importSnapshot: s,
            onClose: i,
            onImportStarted: o,
            onImported: c,
            onImportedNodes: u,
            onImportedSubjects: m,
            renderImportFailureToast: p,
            renderImportSuccessToast: h,
            showDisabledReasonTooltip: v,
            subjectImportSession: g,
          } = e,
          b = ej(),
          f = (0, E.QQ)(),
          y = "leading-canvas-asset-library-primary-tab";
        if ("importing" === s.importStatus)
          return (0, r.jsx)(l.$nd, {
            "aria-label": (0, n.Pjv)(),
            className: y,
            onClick: i,
            size: "md",
            children: (0, r.jsx)(l.mPE, {
              "aria-hidden": "true",
              className: "size-4 animate-spin motion-reduce:animate-none",
              size: 16,
            }),
          });
        let x = (0, r.jsx)(l.$nd, {
          className: y,
          disabledReason: a,
          onClick: () => {
            var e;
            let a;
            return (
              (a = !1),
              void (e = {
                actions: b,
                coordinator: t,
                onClose: i,
                onImported: c,
                onImportedNodes: u,
                onImportedSubjects: m,
                onImportStarted: o,
                publishGlobalToast: f,
                renderImportFailureToast: p,
                renderImportSuccessToast: h,
                subjectImportSession: g,
              }).coordinator
                .importSelected({
                  onCanvasNodeImportStarted: () => {
                    ((a = !0), e.onImportStarted());
                  },
                  onCanvasNodeImportSettled: (t) => {
                    var a;
                    let r = e.actions.getLastImportedCanvasNodes();
                    (r.length > 0 &&
                      (null == (a = e.onImportedNodes) || a.call(e, r)),
                      (function (e, t, a, r) {
                        if ("fullSuccess" === t) {
                          r &&
                            e({
                              announcement: "polite",
                              dismissible: !1,
                              id: eQ,
                              status: "success",
                              title: (0, n.wvs)(),
                            });
                          return;
                        }
                        a &&
                          e({
                            announcement: "assertive",
                            dismissible: !1,
                            id: eQ,
                            status: "warning",
                            title:
                              "partialSuccess" === t
                                ? (0, n.Ecj)()
                                : (0, eV.zh)(),
                          });
                      })(
                        e.publishGlobalToast,
                        t,
                        e.renderImportFailureToast,
                        e.renderImportSuccessToast,
                      ));
                  },
                })
                .then((t) => {
                  if (!a && "failure" !== t) {
                    var r, s;
                    let a;
                    if (
                      ((r = e.subjectImportSession),
                      (s = e.onImportedSubjects),
                      0 !==
                        (a =
                          (null == r ? void 0 : r.getLastImportedSubjects()) ??
                          []).length &&
                        (null == s || s(a)),
                      "fullSuccess" === t)
                    ) {
                      (e.renderImportSuccessToast &&
                        e.publishGlobalToast({
                          announcement: "polite",
                          dismissible: !1,
                          id: eQ,
                          status: "success",
                          title: (0, n.wvs)(),
                        }),
                        e.onImported());
                      return;
                    }
                    (e.renderImportFailureToast &&
                      eG(e.publishGlobalToast, (0, n.Ecj)()),
                      e.onClose());
                  }
                })
            );
          },
          size: "md",
          preferExternalDisabledReasonDescription: v,
          children: (0, n.Ifq)(),
        });
        return a && v
          ? (0, r.jsx)(d.Bc, {
              delayDuration: 0,
              children: (0, r.jsxs)(d.m_, {
                children: [
                  (0, r.jsx)(d.k$, {
                    asChild: !0,
                    onFocus: (e) => e.preventDefault(),
                    children: x,
                  }),
                  (0, r.jsx)(d.ZI, { side: "top", children: a }),
                ],
              }),
            })
          : x;
      }
      function eJ(e) {
        let { model: t } = e;
        if ("plain" === t.kind) return t.label;
        let { after: a, before: s, countText: i, label: n } = t.segments;
        return null === i
          ? n
          : (0, r.jsxs)(r.Fragment, {
              children: [
                s,
                (0, r.jsx)("span", {
                  "data-asset-library-selected-count": !0,
                  children: i,
                }),
                a,
              ],
            });
      }
      let e$ =
          "h-9 rounded-lg text-dreamina-cn-13 leading-canvas-asset-library-primary-tab",
        eK = `${e$} px-4`,
        eH = (0, s.memo)(function (e) {
          let { children: t, className: a, disabled: i = !1 } = e,
            o = (0, s.useRef)(null),
            c = (0, s.useRef)(null),
            [d, u] = (0, s.useState)({ previous: !1, next: !1 }),
            m = (0, s.useCallback)(() => {
              let e = o.current;
              if (!e) return;
              let t = e.scrollLeft > 1,
                a = e.scrollLeft + e.clientWidth < e.scrollWidth - 1;
              u((e) =>
                e.previous === t && e.next === a ? e : { previous: t, next: a },
              );
            }, []);
          (0, s.useLayoutEffect)(() => {
            if ((m(), "u" < typeof ResizeObserver)) return;
            let e = new ResizeObserver(m);
            return (
              o.current && e.observe(o.current),
              c.current && e.observe(c.current),
              () => e.disconnect()
            );
          }, [m]);
          let p = (0, s.useCallback)((e) => {
              let t = o.current;
              t &&
                t.scrollBy({
                  left: e * Math.max(96, 0.6 * t.clientWidth),
                  behavior: (0, l.Oeg)(window) ? "auto" : "smooth",
                });
            }, []),
            h = (0, s.useCallback)(() => p(-1), [p]),
            v = (0, s.useCallback)(() => p(1), [p]);
          return (0, r.jsxs)("div", {
            className: (0, l.cn)(
              "group relative h-canvas-asset-library-filter-control min-w-canvas-zero",
              a,
            ),
            children: [
              (0, r.jsx)("div", {
                "aria-label": (0, n.IpH)(),
                className:
                  "flex h-full min-w-canvas-zero items-center overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                onKeyDown: e5,
                onScroll: m,
                ref: o,
                role: "tablist",
                tabIndex: -1,
                children: (0, r.jsx)("div", {
                  className: "flex min-w-full shrink-0 items-center",
                  ref: c,
                  children: t,
                }),
              }),
              d.previous
                ? (0, r.jsx)(eq, {
                    direction: "previous",
                    disabled: i,
                    onClick: h,
                  })
                : null,
              d.next
                ? (0, r.jsx)(eq, { direction: "next", disabled: i, onClick: v })
                : null,
            ],
          });
        }),
        eq = (0, s.memo)(function (e) {
          let { direction: t, disabled: a, onClick: s } = e,
            i = "previous" === t;
          return (0, r.jsxs)("div", {
            className: (0, l.cn)(
              "pointer-events-none absolute inset-y-0 flex w-canvas-asset-library-navigation-mask-fade items-center group-hover:w-canvas-asset-library-navigation-fade group-focus-within:w-canvas-asset-library-navigation-fade group-active:w-canvas-asset-library-navigation-fade",
              i ? "left-0" : "right-0",
            ),
            children: [
              (0, r.jsxs)("span", {
                "aria-hidden": !0,
                className: (0, l.cn)(
                  "flex h-full w-full",
                  i && "flex-row-reverse",
                ),
                children: [
                  (0, r.jsx)("span", {
                    className: (0, l.cn)(
                      "h-full flex-1 from-dreamina-bg-surface to-transparent",
                      i ? "bg-gradient-to-r" : "bg-gradient-to-l",
                    ),
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "h-full w-canvas-zero shrink-0 bg-dreamina-bg-surface group-hover:w-canvas-asset-library-navigation-mask-solid group-focus-within:w-canvas-asset-library-navigation-mask-solid group-active:w-canvas-asset-library-navigation-mask-solid",
                  }),
                ],
              }),
              (0, r.jsx)(l.K0, {
                label: i ? (0, n.vg5)() : (0, n.RXs)(),
                className: (0, l.cn)(
                  "pointer-events-auto absolute top-1/2 -translate-y-1/2 size-6 rounded-canvas-asset-library-navigation-button bg-dreamina-block-secondary-default hover:bg-dreamina-block-secondary-hover active:bg-dreamina-block-secondary-pressed p-dreamina-compact-icon-button [&_svg]:size-canvas-asset-library-navigation-icon",
                  i
                    ? "left-canvas-asset-library-navigation-button-edge"
                    : "right-canvas-asset-library-navigation-button-edge",
                ),
                disabled: a,
                onClick: s,
                variant: "contextual",
                icon: (0, r.jsx)("span", {
                  "aria-hidden": !0,
                  className: (0, l.cn)("inline-flex", !i && "scale-x-[-1]"),
                  children: (0, r.jsx)(l.Ks$, { size: 12 }),
                }),
              }),
            ],
          });
        });
      function e0(e) {
        let { interactionLocked: t = !1 } = e,
          a = eC(),
          s = eS((e) => e.activeSection),
          i = eS((e) => "importing" === e.importStatus),
          o = ej();
        return I(a)
          ? (0, r.jsx)("div", {
              "aria-label": (0, n.EfD)(),
              className:
                "flex items-center gap-canvas-asset-library-primary-tab-gap",
              onKeyDown: e5,
              role: "tablist",
              tabIndex: -1,
              children: a.tabs.groups.map((e) => {
                let a,
                  { id: c } = e,
                  d = s === c;
                return (0, r.jsx)(
                  l.$nd,
                  {
                    "aria-controls": `canvas-asset-section-panel-${c}`,
                    "aria-selected": d,
                    className:
                      ((a = ""),
                      ((i || t) &&
                        (a =
                          "disabled:text-dreamina-text-placeholder disabled:hover:text-dreamina-text-placeholder disabled:active:text-dreamina-text-placeholder"),
                      d)
                        ? `${eK} bg-dreamina-block-primary-default text-dreamina-text-primary hover:bg-dreamina-block-primary-default hover:text-dreamina-text-primary active:bg-dreamina-block-primary-default active:text-dreamina-text-primary ${a}`
                        : `${eK} text-dreamina-text-secondary hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-pressed active:text-dreamina-text-primary ${a}`),
                    contentSized: !0,
                    id: `canvas-asset-section-tab-${c}`,
                    disabled: i || t,
                    onClick: () => o.setActiveSection(c),
                    role: "tab",
                    tabIndex: d ? 0 : -1,
                    variant: "text",
                    children: (0, n.dAd)(c),
                  },
                  c,
                );
              }),
            })
          : null;
      }
      function e1(e) {
        let { interactionLocked: t = !1, selectedAllCount: a = 0 } = e,
          i = eC(),
          o = eS((e) => e.activeSection),
          c = eS((e) => e.activeCategory),
          d = eS((e) => "importing" === e.importStatus),
          u = eS((e) => e.selectedAssets),
          p = eS((e) => e.occupiedSelectionIds),
          h = ej(),
          v = M(i, o).secondaryTabs,
          g = (0, s.useMemo)(() => {
            let e = new Map();
            for (let t of ["audio", "document", "image", "video"]) {
              let a = y(u.values(), t, p);
              a > 0 && e.set(t, a);
            }
            return e;
          }, [p, u]);
        return (0, r.jsx)(eH, {
          disabled: d || t,
          children: v.map((e) => {
            let s = "all" === e || c === e,
              o = "all" === e ? (0, n.ww8)() : (0, n.ieq)(e),
              u = 0;
            "all" === e
              ? (u = a)
              : "multiple" === i.selectionMode && (u = g.get(e) ?? 0);
            let p = o;
            return (
              u > 0 && (p = (0, n.k1y)({ category: o, count: u })),
              (0, r.jsx)(
                l.$nd,
                {
                  "aria-controls": `canvas-asset-panel-${e}`,
                  "aria-label": p,
                  "aria-selected": s,
                  className: e3(s, d || t),
                  contentSized: !0,
                  id: "all" === e ? "canvas-asset-tab-all" : m(e),
                  disabled: d || t,
                  onClick: () => {
                    "all" !== e && h.setActiveCategory(e);
                  },
                  role: "tab",
                  tabIndex: s ? 0 : -1,
                  variant: "text",
                  children: (0, r.jsxs)("span", {
                    className:
                      "flex items-center gap-canvas-asset-library-primary-tab-gap",
                    children: [
                      (0, r.jsx)("span", {
                        "data-asset-library-tab-label": !0,
                        children: o,
                      }),
                      e4(u),
                    ],
                  }),
                },
                e,
              )
            );
          }),
        });
      }
      function e2(e) {
        let { category: t } = e;
        return (0, r.jsx)("h2", {
          className:
            "flex h-9 items-center font-dreamina-cn text-dreamina-cn-13 font-dreamina-medium leading-canvas-asset-library-primary-tab text-dreamina-text-primary",
          "data-testid": "canvas-asset-library-category-title",
          id: p(t),
          children: (0, n.ieq)(t),
        });
      }
      function e4(e) {
        return e <= 0
          ? null
          : (0, r.jsx)("span", {
              className:
                "font-dreamina-number text-dreamina-number-13 font-dreamina-medium",
              "data-asset-library-tab-count": !0,
              children: e,
            });
      }
      function e3(e, t) {
        let a = `${e$} relative shrink-0 px-canvas-asset-library-category-tab-inline hover:bg-transparent active:bg-transparent`,
          r = "";
        if (
          (t &&
            (r =
              "disabled:text-dreamina-text-placeholder disabled:hover:text-dreamina-text-placeholder"),
          !e)
        )
          return `${a} text-dreamina-text-secondary hover:text-dreamina-text-primary ${r}`;
        let s = "";
        return (
          t && (s = "disabled:after:bg-dreamina-text-placeholder"),
          `${a} text-dreamina-text-primary hover:text-dreamina-text-primary after:absolute after:bottom-1 after:left-1/2 after:h-canvas-asset-library-tab-indicator after:w-canvas-asset-library-tab-indicator after:-translate-x-1/2 after:bg-dreamina-text-primary ${r} ${s}`
        );
      }
      function e5(e) {
        var t, a;
        let r = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
          s = r.indexOf(e.target);
        if (s < 0) return;
        let i = null;
        ("ArrowRight" === e.key && (i = (s + 1) % r.length),
          "ArrowLeft" === e.key && (i = (s - 1 + r.length) % r.length),
          "Home" === e.key && (i = 0),
          "End" === e.key && (i = r.length - 1),
          null !== i &&
            (e.preventDefault(),
            null == (t = r[i]) || t.focus(),
            null == (a = r[i]) || a.click()));
      }
      function e9(e) {
        let {
            children: t,
            interactionLocked: a = !1,
            onClose: s,
            visibleTitle: i,
          } = e,
          o = (0, r.jsx)(c.L3, {
            className: "sr-only",
            id: "canvas-asset-library-dialog-title",
            children: (0, n.EfD)(),
          }),
          d =
            t ??
            (0, r.jsx)("div", {
              className: "flex-1",
              style: { minWidth: 0 },
              children: (0, r.jsx)(e0, { interactionLocked: a }),
            });
        return (
          i &&
            ((o = (0, r.jsx)(c.L3, {
              className:
                "flex items-center px-canvas-asset-library-category-tab-inline font-dreamina-cn text-dreamina-cn-13 font-dreamina-medium leading-canvas-asset-library-primary-tab text-dreamina-text-primary",
              "data-testid": "canvas-asset-library-primary-title",
              id: "canvas-asset-library-primary-title",
              style: { minWidth: 0 },
              children: i,
            })),
            (d =
              t ??
              (0, r.jsx)("div", {
                className: "flex-1",
                style: { minWidth: 0 },
              }))),
          (0, r.jsxs)("header", {
            className: "flex items-center",
            style: { gap: 8, height: 36, minWidth: 0 },
            children: [
              o,
              (0, r.jsx)(c.rr, {
                className: "sr-only",
                id: "canvas-asset-library-description",
                children: (0, n.ULu)(),
              }),
              d,
              (0, r.jsx)(l.$nd, {
                "aria-label": (0, n.CWg)(),
                className:
                  "shrink-0 rounded-canvas-asset-library-close text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-pressed active:text-dreamina-text-primary",
                onClick: s,
                size: "icon",
                variant: "text",
                children: (0, r.jsx)(l.gAK, { size: 16 }),
              }),
            ],
          })
        );
      }
      var e8 = a(73513),
        e6 = a(60872),
        e7 = a(8621),
        te = a(44286);
      function tt(e) {
        let { disabled: t } = e,
          a = ej(),
          s = eS((e) => e.space.teamId),
          i = eS((e) => e.members),
          n = eS((e) => e.membersStatus),
          o = eS((e) => e.memberUserId);
        if (!s) return null;
        let c = (0, e8.G)(),
          d = i.find((e) => e.userId === o);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("span", {
              "aria-hidden": "true",
              className:
                "shrink-0 rounded-dreamina-capsule bg-dreamina-stroke-secondary",
              "data-asset-library-member-divider": !0,
              style: { height: 12, width: 1 },
            }),
            (0, r.jsxs)(e6.rI, {
              children: [
                (0, r.jsx)(e6.ty, {
                  asChild: !0,
                  children: (0, r.jsxs)(l.$nd, {
                    variant: "text",
                    size: "md",
                    contentSized: !0,
                    disabled: t,
                    "aria-label": c.filter,
                    className:
                      "group text-dreamina-text-secondary hover:text-dreamina-text-primary active:text-dreamina-text-primary data-[state=open]:text-dreamina-text-primary",
                    style: { maxWidth: 160, paddingInlineEnd: 12 },
                    children: [
                      (0, r.jsx)("span", {
                        className: "truncate",
                        children: d
                          ? `${d.name || d.userId}${d.removed ? ` (${c.removed})` : ""}`
                          : c.all,
                      }),
                      (0, r.jsx)(l.L5W, {
                        className:
                          "transition-transform duration-dreamina-element ease-dreamina-soft motion-reduce:transition-none group-data-[state=open]:rotate-180",
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(e6.SQ, {
                  appearance: "actionList",
                  align: "center",
                  className:
                    "w-canvas-asset-library-member-menu min-w-canvas-asset-library-member-menu overflow-hidden",
                  motion: "toolbarDisclosure",
                  sideOffset: 8,
                  size: "medium",
                  children: (0, r.jsxs)(ta, {
                    contentVersion: `${n}:${i.length}`,
                    children: [
                      (0, r.jsxs)(e6._2, {
                        role: "menuitemradio",
                        "aria-checked": "0" === o,
                        className:
                          "h-canvas-asset-library-member-option min-h-canvas-asset-library-member-option max-h-canvas-asset-library-member-option justify-between",
                        style: { paddingInlineEnd: 12, paddingInlineStart: 8 },
                        onSelect: () => a.selectMember("0"),
                        children: [
                          (0, r.jsxs)("span", {
                            className:
                              "flex min-w-workspace-chrome-zero flex-1 items-center gap-canvas-asset-library-filter-option-gap",
                            children: [
                              (0, r.jsx)("span", {
                                className:
                                  "flex size-7 shrink-0 items-center justify-center rounded-dreamina-capsule bg-dreamina-block-primary-default",
                                children: (0, r.jsx)(l.M1s, {
                                  className: "text-dreamina-text-secondary",
                                  size: 14,
                                }),
                              }),
                              (0, r.jsx)("span", {
                                className: "truncate",
                                children: c.all,
                              }),
                            ],
                          }),
                          "0" === o &&
                            (0, r.jsx)(l.Srz, {
                              className:
                                "ml-auto shrink-0 text-dreamina-text-primary",
                            }),
                        ],
                      }),
                      i.map((e) =>
                        (0, r.jsxs)(
                          e6._2,
                          {
                            role: "menuitemradio",
                            "aria-checked": o === e.userId,
                            className:
                              "h-canvas-asset-library-member-option min-h-canvas-asset-library-member-option max-h-canvas-asset-library-member-option justify-between",
                            style: {
                              paddingInlineEnd: 12,
                              paddingInlineStart: 8,
                            },
                            onSelect: () => a.selectMember(e.userId),
                            children: [
                              (0, r.jsxs)("span", {
                                className:
                                  "flex min-w-workspace-chrome-zero flex-1 items-center gap-canvas-asset-library-filter-option-gap",
                                children: [
                                  (0, r.jsx)(l.euF, {
                                    className: "size-7",
                                    src: e.avatar,
                                    name: e.name,
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "truncate",
                                    style: { minWidth: 0 },
                                    children: e.name || e.userId,
                                  }),
                                  !!e.removed &&
                                    (0, r.jsx)("span", {
                                      className:
                                        "shrink-0 whitespace-nowrap text-dreamina-cn-12 text-dreamina-text-tertiary",
                                      children: c.removed,
                                    }),
                                ],
                              }),
                              o === e.userId &&
                                (0, r.jsx)(l.Srz, {
                                  className:
                                    "ml-auto shrink-0 text-dreamina-text-primary",
                                }),
                            ],
                          },
                          e.userId,
                        ),
                      ),
                      "loading" === n &&
                        (0, r.jsx)(e6._2, {
                          disabled: !0,
                          children: c.loading,
                        }),
                      "error" === n &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("p", {
                              role: "alert",
                              className: "text-dreamina-cn-12",
                              style: { padding: 8 },
                              children: c.failed,
                            }),
                            (0, r.jsx)(e6._2, {
                              onSelect: () => void a.loadMembers(),
                              children: c.retry,
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function ta(e) {
        let { children: t, contentVersion: a } = e,
          i = (0, s.useRef)(null),
          n = (0, s.useRef)(null),
          o = (0, te._l)({ contentVersion: a, hostRef: n });
        return (0, r.jsxs)("div", {
          className: "group/canvas-panel-scrollbar relative w-full",
          "data-testid": "canvas-asset-library-member-scroll",
          ref: i,
          children: [
            (0, r.jsx)("div", {
              className: (0, l.cn)(
                "flex flex-col gap-canvas-asset-library-filter-gap overflow-y-auto overscroll-y-none",
                (0, te.G9)({ lane: "none", overflowing: o }),
              ),
              "data-asset-library-member-scroll": !0,
              "data-canvas-panel-overflow": o ? "vertical" : "none",
              onWheelCapture: (e) => (0, e7.TG)(e, e.currentTarget),
              ref: n,
              style: { maxHeight: 240 },
              children: t,
            }),
            (0, r.jsx)(te.Lw, {
              contentVersion: a,
              edgeInset: 8,
              hostRef: i,
              overflowing: o,
              scrollRef: n,
              variant: "model-menu",
              visibility: "persistent",
            }),
          ],
        });
      }
      var tr = a(78357);
      function ts(e) {
        let {
            id: t,
            label: a,
            maxDate: i,
            minDate: n,
            nextMonthLabel: o,
            nextYearLabel: l,
            onSelect: c,
            previousMonthLabel: d,
            previousYearLabel: u,
            selectedDate: m,
          } = e,
          [p, h] = (0, s.useState)(() => {
            var e;
            return new Date((e = m ?? i).getFullYear(), e.getMonth(), 1);
          });
        return (0, r.jsxs)("div", {
          "aria-label": a,
          className:
            "w-full px-canvas-asset-library-calendar-inset pb-canvas-asset-library-calendar-inset pt-canvas-asset-library-filter-gap",
          "data-ui-date-calendar": !0,
          id: t,
          role: "region",
          children: [
            (0, r.jsx)(ti, {
              maxDate: i,
              minDate: n,
              nextMonthLabel: o,
              nextYearLabel: l,
              onMonthChange: h,
              previousMonthLabel: d,
              previousYearLabel: u,
              visibleMonth: p,
            }),
            (0, r.jsx)(to, {}),
            (0, r.jsx)(tl, {
              maxDate: i,
              minDate: n,
              onSelect: c,
              selectedDate: m,
              visibleMonth: p,
            }),
          ],
        });
      }
      function ti(e) {
        var t;
        let {
            maxDate: a,
            minDate: s,
            nextMonthLabel: i,
            nextYearLabel: n,
            onMonthChange: o,
            previousMonthLabel: l,
            previousYearLabel: c,
            visibleMonth: d,
          } = e,
          u = td(d, -12),
          m = td(d, -1),
          p = td(d, 1),
          h = td(d, 12);
        return (0, r.jsxs)("div", {
          className:
            "flex h-canvas-asset-library-calendar-control w-full items-center justify-between",
          children: [
            (0, r.jsxs)("div", {
              className: "flex items-center",
              children: [
                (0, r.jsx)(tn, {
                  disabled: !tu(u, s, a),
                  direction: "previous-year",
                  label: c,
                  onClick: () => o(u),
                }),
                (0, r.jsx)(tn, {
                  disabled: !tu(m, s, a),
                  direction: "previous-month",
                  label: l,
                  onClick: () => o(m),
                }),
              ],
            }),
            (0, r.jsx)("span", {
              className:
                "text-dreamina-cn-13 font-dreamina-regular leading-canvas-asset-library-primary-tab text-dreamina-text-primary",
              children:
                ((t = d),
                new Intl.DateTimeFormat(tm(), {
                  month: "long",
                  year: "numeric",
                }).format(t)),
            }),
            (0, r.jsxs)("div", {
              className: "flex items-center",
              children: [
                (0, r.jsx)(tn, {
                  disabled: !tu(p, s, a),
                  direction: "next-month",
                  label: i,
                  onClick: () => o(p),
                }),
                (0, r.jsx)(tn, {
                  disabled: !tu(h, s, a),
                  direction: "next-year",
                  label: n,
                  onClick: () => o(h),
                }),
              ],
            }),
          ],
        });
      }
      function tn(e) {
        let { disabled: t, direction: a, label: s, onClick: i } = e;
        return (0, r.jsx)(l.$nd, {
          "aria-label": s,
          className:
            "size-canvas-asset-library-calendar-control rounded-canvas-asset-library-calendar-day text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-pressed active:text-dreamina-text-primary disabled:bg-transparent disabled:text-dreamina-text-disabled disabled:hover:bg-transparent disabled:hover:text-dreamina-text-disabled disabled:active:bg-transparent disabled:active:text-dreamina-text-disabled",
          disabled: t,
          onClick: i,
          size: "unframed",
          variant: "text",
          children: (function (e) {
            switch (e) {
              case "previous-year":
                return (0, r.jsx)(l.LkR, { size: 12 });
              case "previous-month":
                return (0, r.jsx)(l.Ks$, { size: 12 });
              case "next-month":
                return (0, r.jsx)(l.Ks$, { className: "rotate-180", size: 12 });
              case "next-year":
                return (0, r.jsx)(l.LkR, { className: "rotate-180", size: 12 });
              default:
                throw Error(`Unhandled calendar navigation: ${e}`);
            }
          })(a),
        });
      }
      function to() {
        let e, t;
        return (0, r.jsx)("div", {
          "aria-hidden": "true",
          className:
            "flex w-full items-center justify-between text-center text-dreamina-cn-12 font-dreamina-regular leading-canvas-asset-library-filter-section text-dreamina-text-tertiary",
          children: ((e = new Date(2021, 7, 1)),
          (t = new Intl.DateTimeFormat(tm(), { weekday: "narrow" })),
          Array.from({ length: 7 }, (a, r) => {
            let s = new Date(e.getFullYear(), e.getMonth(), e.getDate() + r);
            return { key: tp(s), label: t.format(s) };
          })).map((e) =>
            (0, r.jsx)(
              "span",
              {
                className:
                  "flex size-canvas-asset-library-calendar-control shrink-0 items-center justify-center",
                children: e.label,
              },
              e.key,
            ),
          ),
        });
      }
      function tl(e) {
        let {
            maxDate: t,
            minDate: a,
            onSelect: s,
            selectedDate: i,
            visibleMonth: n,
          } = e,
          o = i ? tp(i) : "",
          l = a ? tp(a) : "",
          c = tp(t);
        return (0, r.jsx)("div", {
          className: "flex w-full flex-col",
          "data-ui-date-calendar-grid": !0,
          children: (function (e) {
            let t,
              a =
                ((t = new Date(e.getFullYear(), e.getMonth(), 1 - e.getDay())),
                Array.from(
                  { length: 42 },
                  (e, a) =>
                    new Date(t.getFullYear(), t.getMonth(), t.getDate() + a),
                ));
            return Array.from({ length: 6 }, (e, t) =>
              a.slice(7 * t, 7 * t + 7),
            );
          })(n).map((e) =>
            (0, r.jsx)(
              "div",
              {
                className: "flex w-full items-center justify-between",
                children: e.map((e) => {
                  let t = tp(e);
                  return (0, r.jsx)(
                    tc,
                    {
                      date: e,
                      disabled: t < l || t > c,
                      onSelect: s,
                      outsideMonth: e.getMonth() !== n.getMonth(),
                      selected: t === o,
                      value: t,
                    },
                    t,
                  );
                }),
              },
              tp(e[0] ?? n),
            ),
          ),
        });
      }
      function tc(e) {
        var t;
        let {
          date: a,
          disabled: s,
          onSelect: i,
          outsideMonth: n,
          selected: o,
          value: c,
        } = e;
        return (0, r.jsx)(l.$nd, {
          "aria-label":
            ((t = a),
            new Intl.DateTimeFormat(tm(), { dateStyle: "long" }).format(t)),
          "aria-pressed": o,
          className:
            "group size-canvas-asset-library-calendar-control shrink-0 overflow-hidden rounded-canvas-asset-library-calendar-day bg-transparent p-canvas-asset-library-calendar-control-padding text-dreamina-cn-12 font-dreamina-regular leading-canvas-asset-library-filter-section hover:bg-transparent active:bg-transparent focus-visible:ring-2 focus-visible:ring-dreamina-text-primary",
          "data-date-value": c,
          "data-outside-month": n || void 0,
          disabled: s,
          onClick: () => i(a),
          size: "unframed",
          variant: "text",
          children: (0, r.jsx)("span", {
            className: (function (e) {
              let { disabled: t, outsideMonth: a, selected: r } = e,
                s =
                  "flex size-full items-center justify-center rounded-canvas-asset-library-calendar-day";
              return r
                ? (0, l.cn)(
                    s,
                    "bg-dreamina-button-primary-default text-dreamina-button-primary-text group-hover:bg-dreamina-button-primary-hover group-active:bg-dreamina-button-primary-pressed",
                  )
                : t
                  ? (0, l.cn)(s, "text-dreamina-text-disabled")
                  : (0, l.cn)(
                      s,
                      "text-dreamina-text-primary group-hover:bg-dreamina-block-secondary-hover group-active:bg-dreamina-block-secondary-pressed",
                      a && "text-dreamina-text-tertiary",
                    );
            })({ disabled: s, outsideMonth: n, selected: o }),
            "data-asset-library-calendar-day-visual": !0,
            children: a.getDate(),
          }),
        });
      }
      function td(e, t) {
        return new Date(e.getFullYear(), e.getMonth() + t, 1);
      }
      function tu(e, t, a) {
        let r = tp(e),
          s = tp(new Date(e.getFullYear(), e.getMonth() + 1, 0));
        return r <= tp(a) && (!t || s >= tp(t));
      }
      function tm() {
        if ("u" > typeof document)
          return document.documentElement.lang.trim() || void 0;
      }
      function tp(e) {
        return `${e.getFullYear()}-${th(e.getMonth() + 1)}-${th(e.getDate())}`;
      }
      function th(e) {
        return String(e).padStart(2, "0");
      }
      let tv = ["last7", "last30", "last90"];
      function tg(e) {
        var t;
        let {
            activeFilter: a,
            disabled: i,
            open: o,
            onClear: l,
            onCustomChange: c,
            onOpenChange: u,
            onPresetSelect: m,
            triggerClassName: p,
          } = e,
          h = (0, s.useId)(),
          v = (0, s.useRef)(null),
          g = (0, s.useRef)(!1),
          b = (0, s.useCallback)(
            (e) => {
              (e || !g.current) && u(e);
            },
            [u],
          ),
          f = (0, s.useCallback)(() => u(!1), [u]);
        (0, s.useEffect)(() => {
          i && f();
        }, [f, i]);
        let y =
            (null == a ? void 0 : a.value) === "custom"
              ? (0, n.ytd)()
              : (0, n.fVH)(null == a ? void 0 : a.value),
          x = (0, r.jsx)(ty, {
            activeFilter: a,
            onClear: l,
            onCustomChange: c,
            onNestedEscape: () => {
              ((g.current = !0),
                queueMicrotask(() => {
                  g.current = !1;
                }));
            },
            onOpenChange: b,
            onPresetSelect: m,
            panelId: h,
            portalContainer:
              (null == (t = v.current)
                ? void 0
                : t.closest('[data-testid="canvas-asset-library-dialog"]')) ??
              null,
          });
        return (0, r.jsxs)(d.AM, {
          modal: !1,
          onOpenChange: b,
          open: o,
          children: [
            (0, r.jsx)(tb, {
              active: void 0 !== a,
              disabled: i,
              open: o,
              panelId: h,
              triggerRef: v,
              triggerClassName: p,
              triggerLabel: y,
            }),
            o ? x : null,
          ],
        });
      }
      function tb(e) {
        let {
          active: t,
          disabled: a,
          open: s,
          panelId: i,
          triggerRef: o,
          triggerClassName: c,
          triggerLabel: u,
        } = e;
        return (0, r.jsx)(tf, {
          disabled: a,
          label: (0, n.fVH)(),
          open: s,
          children: (0, r.jsx)(d.Wv, {
            asChild: !0,
            children: (0, r.jsxs)(l.$nd, {
              ref: o,
              "aria-controls": i,
              "aria-expanded": s,
              "aria-label": u,
              className: (0, l.cn)(
                c,
                "hover:bg-dreamina-block-secondary-hover active:bg-dreamina-block-secondary-pressed data-[active=true]:bg-dreamina-block-primary-default data-[active=true]:hover:bg-dreamina-block-primary-default data-[state=open]:bg-dreamina-block-primary-default",
              ),
              "data-active": t,
              disabled: a,
              size: "icon",
              variant: "text",
              children: [
                (0, r.jsx)("span", {
                  className: "flex size-4 items-center justify-center",
                  children: (0, r.jsx)(l.cWB, {}),
                }),
                (0, r.jsx)("span", { className: "sr-only", children: u }),
              ],
            }),
          }),
        });
      }
      function tf(e) {
        let {
            children: t,
            className: a,
            disabled: i,
            focusOpen: n = !1,
            label: o,
            open: c,
          } = e,
          u = (0, s.useRef)(!1),
          [m, p] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            ((u.current = !1), p(!1));
          }, [c]),
          (0, r.jsx)(d.Bc, {
            delayDuration: 0,
            children: (0, r.jsx)("span", {
              className: (0, l.cn)("inline-flex", a),
              onBlur: (e) => {
                u.current || e.currentTarget.contains(e.relatedTarget) || p(!1);
              },
              onFocus: (e) => {
                if (i) return;
                let t = e.currentTarget.querySelector(
                  "[data-asset-library-filter-option-label]",
                );
                p(!t || t.scrollWidth > t.clientWidth);
              },
              onPointerLeave: () => {
                ((u.current = !1), p(!1));
              },
              onPointerMove: (e) => {
                if (i) return;
                u.current = !0;
                let t = e.currentTarget.querySelector(
                  "[data-asset-library-filter-option-label]",
                );
                p(!t || t.scrollWidth > t.clientWidth);
              },
              children: (0, r.jsxs)(d.m_, {
                disableHoverableContent: !0,
                open: n || m,
                children: [
                  (0, r.jsx)(d.k$, {
                    asChild: !0,
                    onFocus: (e) => e.preventDefault(),
                    children: (0, r.jsx)("span", {
                      className: (0, l.cn)("inline-flex", a),
                      children: t,
                    }),
                  }),
                  (0, r.jsx)(d.ZI, {
                    align: "center",
                    avoidCollisions: !1,
                    side: "bottom",
                    sideOffset: 12,
                    children: o,
                  }),
                ],
              }),
            }),
          })
        );
      }
      function ty(e) {
        let {
            activeFilter: t,
            onClear: a,
            onCustomChange: i,
            onNestedEscape: o,
            onOpenChange: c,
            onPresetSelect: u,
            panelId: m,
            portalContainer: p,
          } = e,
          h = (0, s.useRef)(!1),
          v = (function (e) {
            let { customFilter: t, onCustomChange: a } = e,
              [r, i] = (0, s.useState)(null),
              o = (0, s.useRef)(null),
              l = (0, s.useRef)(null),
              c = (0, s.useId)(),
              d = tD(Date.now()),
              u = tD(null == t ? void 0 : t.beginTimestamp),
              m = tD(null == t ? void 0 : t.endTimestamp),
              p = (function (e, t, a, r) {
                if (e)
                  return "begin" === e
                    ? {
                        field: e,
                        label: (0, n.a6B)(),
                        maxDate: tP(a || r),
                        selectedDate: tR(t),
                      }
                    : {
                        field: e,
                        label: (0, n.HuV)(),
                        maxDate: tP(r),
                        minDate: tR(t),
                        selectedDate: tR(a),
                      };
              })(r, u, m, d),
              h = (0, s.useCallback)((e) => {
                var t;
                null == (t = ("begin" === e ? o : l).current) || t.focus();
              }, []),
              v = (0, s.useCallback)(
                (e) => {
                  (i(null), h(e));
                },
                [h],
              ),
              g = (0, s.useCallback)((e) => {
                i((t) => (t === e ? null : e));
              }, []),
              b = (0, s.useCallback)(
                (e) => {
                  ("begin" === r
                    ? tk(e, null == t ? void 0 : t.endTimestamp, a)
                    : "end" === r &&
                      tT(e, null == t ? void 0 : t.beginTimestamp, a),
                    r && v(r));
                },
                [r, v, t, a],
              ),
              f = (0, s.useCallback)((e) => b(tD(e.getTime())), [b]),
              y = (0, s.useCallback)(
                (e) => {
                  (("begin" === e ? u : m) &&
                    ("begin" === e &&
                      tk("", null == t ? void 0 : t.endTimestamp, a),
                    "end" === e &&
                      tT("", null == t ? void 0 : t.beginTimestamp, a)),
                    v(e));
                },
                [u, v, t, m, a],
              );
            return {
              activeDateField: r,
              beginDateRef: o,
              beginValue: u,
              calendarConfig: p,
              calendarId: c,
              closeDateDisclosure: v,
              endDateRef: l,
              endValue: m,
              handleCalendarSelect: f,
              handleDateFieldClear: y,
              handleDateFieldToggle: g,
              today: d,
            };
          })({
            customFilter:
              (null == t ? void 0 : t.value) === "custom" ? t : void 0,
            onCustomChange: i,
          });
        return (0, r.jsx)(d.hl, {
          align: "center",
          "aria-label": (0, n.fVH)(),
          className: (0, l.cn)(
            l.Pxm,
            "flex w-[280px] flex-col gap-canvas-asset-library-filter-gap overflow-hidden p-canvas-asset-library-filter-gap font-dreamina-cn text-dreamina-text-primary",
            v.calendarConfig && "h-canvas-asset-library-time-calendar",
          ),
          collisionPadding: 8,
          "data-asset-library-time-calendar": v.calendarConfig
            ? "open"
            : void 0,
          id: m,
          motion: "toolbarDisclosure",
          portalContainer: p,
          onCloseAutoFocus: (e) => {
            var t;
            if ((e.preventDefault(), h.current)) {
              h.current = !1;
              return;
            }
            null ==
              (t = document.querySelector(`button[aria-controls="${m}"]`)) ||
              t.blur();
          },
          onEscapeKeyDown: (e) => {
            var t;
            if ((e.preventDefault(), e.stopPropagation(), v.activeDateField)) {
              (o(), v.closeDateDisclosure(v.activeDateField));
              return;
            }
            ((h.current = !0),
              c(!1),
              null ==
                (t = document.querySelector(`button[aria-controls="${m}"]`)) ||
                t.focus());
          },
          sideOffset: 12,
          children: (0, r.jsx)(tx, {
            activeFilter: t,
            controller: v,
            onClear: a,
            onPresetSelect: u,
          }),
        });
      }
      function tx(e) {
        let {
          activeFilter: t,
          controller: a,
          onClear: s,
          onPresetSelect: i,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(tC, {
              activeField: a.activeDateField,
              beginDateRef: a.beginDateRef,
              beginValue: a.beginValue,
              calendarId: a.calendarId,
              endDateRef: a.endDateRef,
              endValue: a.endValue,
              maxDate: a.today,
              onFieldClear: a.handleDateFieldClear,
              onFieldToggle: a.handleDateFieldToggle,
            }),
            (0, r.jsx)(tj, {
              activeFilter: t,
              calendarConfig: a.calendarConfig,
              calendarId: a.calendarId,
              onCalendarSelect: a.handleCalendarSelect,
              onClear: s,
              onPresetSelect: i,
            }),
          ],
        });
      }
      function tj(e) {
        let {
          activeFilter: t,
          calendarConfig: a,
          calendarId: s,
          onCalendarSelect: i,
          onClear: o,
          onPresetSelect: l,
        } = e;
        return a
          ? (0, r.jsx)(
              ts,
              {
                id: s,
                label: a.label,
                maxDate: a.maxDate,
                minDate: a.minDate,
                nextMonthLabel: (0, n.lL9)(),
                nextYearLabel: (0, n.Ivq)(),
                onSelect: i,
                previousMonthLabel: (0, n.BzK)(),
                previousYearLabel: (0, n.Yj$)(),
                selectedDate: a.selectedDate,
              },
              a.field,
            )
          : (0, r.jsx)(tS, { activeFilter: t, onClear: o, onPresetSelect: l });
      }
      function tS(e) {
        let { activeFilter: t, onClear: a, onPresetSelect: s } = e;
        return (0, r.jsxs)("fieldset", {
          "aria-label": (0, n.fVH)(),
          className:
            "m-0 flex min-w-0 flex-col gap-canvas-asset-library-filter-gap border-0 p-0",
          children: [
            (0, r.jsx)(tN, { checked: !t, label: (0, n.kqG)(), onClick: a }),
            tv.map((e) =>
              (0, r.jsx)(
                tN,
                {
                  checked: (null == t ? void 0 : t.value) === e,
                  label: (0, n.n$$)(e),
                  onClick: () => s({ type: "time", value: e }),
                },
                e,
              ),
            ),
          ],
        });
      }
      function tC(e) {
        let {
          activeField: t,
          beginDateRef: a,
          beginValue: s,
          calendarId: i,
          endDateRef: o,
          endValue: l,
          maxDate: c,
          onFieldClear: d,
          onFieldToggle: u,
        } = e;
        return (0, r.jsxs)("div", {
          className:
            "flex h-canvas-asset-library-date-row w-full min-w-dreamina-control-unframed items-center p-canvas-asset-library-filter-option-gap",
          "data-asset-library-time-range": !0,
          children: [
            (0, r.jsx)(tI, {
              buttonRef: a,
              calendarId: i,
              clearLabel: (0, n.xy2)(),
              displayValue: s ? tz(s) : (0, n.a6B)(),
              expanded: "begin" === t,
              label: (0, n.a6B)(),
              max: l || c,
              muted: !s,
              numbered: !!s,
              onClear: () => d("begin"),
              onToggle: () => u("begin"),
              value: s,
            }),
            (0, r.jsx)("span", {
              "aria-hidden": "true",
              className:
                "flex w-4 shrink-0 items-center justify-center text-dreamina-cn-12 leading-canvas-asset-library-date-separator text-dreamina-text-placeholder",
              children: "\u2212",
            }),
            (0, r.jsx)(tI, {
              buttonRef: o,
              calendarId: i,
              clearLabel: (0, n.wuA)(),
              displayValue: tz(l || c),
              expanded: "end" === t,
              label: (0, n.HuV)(),
              max: c,
              min: s || void 0,
              muted: !l,
              numbered: !0,
              onClear: () => d("end"),
              onToggle: () => u("end"),
              value: l,
            }),
          ],
        });
      }
      function tw() {
        return (0, r.jsx)("span", {
          "aria-hidden": "true",
          className:
            "flex size-4 shrink-0 items-center justify-center text-dreamina-text-placeholder",
          "data-asset-library-date-calendar-icon": !0,
          children: (0, r.jsx)(l.cWB, {}),
        });
      }
      function tM(e) {
        let { clearLabel: t, onClear: a } = e;
        return (0, r.jsx)(l.$nd, {
          "aria-label": t,
          className:
            "group absolute right-canvas-asset-library-date-clear-hit-end top-1/2 flex size-canvas-asset-library-date-clear-hit -translate-y-1/2 items-center justify-center bg-transparent p-canvas-zero text-dreamina-text-primary hover:bg-transparent active:bg-transparent focus-visible:ring-1 focus-visible:ring-dreamina-text-primary",
          onClick: (e) => {
            (e.stopPropagation(), a());
          },
          size: "unframed",
          variant: "text",
          children: (0, r.jsx)("span", {
            "aria-hidden": "true",
            className:
              "absolute right-canvas-asset-library-date-clear-visual-end flex size-4 items-center justify-center rounded-canvas-asset-library-calendar-control bg-dreamina-block-secondary-default group-hover:bg-dreamina-block-secondary-hover group-active:bg-dreamina-block-secondary-pressed",
            "data-asset-library-date-clear-visual": !0,
            children: (0, r.jsx)(l.USm, { "aria-hidden": "true", size: 12 }),
          }),
        });
      }
      function tI(e) {
        let {
            buttonRef: t,
            calendarId: a,
            clearLabel: s,
            displayValue: i,
            expanded: n,
            label: o,
            max: c,
            min: d,
            muted: u,
            numbered: m,
            onClear: p,
            onToggle: h,
            value: v,
          } = e,
          g = (0, r.jsx)(tw, {}),
          b = null;
        return (
          n &&
            ((g = (0, r.jsx)("span", {
              "aria-hidden": "true",
              className: "size-4 shrink-0",
            })),
            (b = (0, r.jsx)(tM, { clearLabel: s, onClear: p }))),
          (0, r.jsxs)("div", {
            className:
              "group relative flex min-w-dreamina-control-unframed max-w-canvas-asset-library-date-field flex-1",
            "data-asset-library-date-field": n ? "clear" : "calendar",
            children: [
              (0, r.jsxs)(l.$nd, {
                ref: t,
                "aria-controls": n ? a : void 0,
                "aria-expanded": n,
                "aria-label": o,
                className: (0, l.cn)(
                  "h-canvas-asset-library-filter-control w-full cursor-pointer justify-between overflow-hidden rounded-lg bg-dreamina-block-secondary-default py-[5px] pl-3 pr-canvas-asset-library-date-field-end font-dreamina-cn text-dreamina-cn-13 font-dreamina-regular leading-[22px] hover:bg-dreamina-block-secondary-hover active:bg-dreamina-block-secondary-pressed focus-visible:outline focus-visible:outline-1 focus-visible:outline-dreamina-stroke-primary",
                  n && "bg-dreamina-block-secondary-hover",
                  u
                    ? "text-dreamina-text-placeholder"
                    : "text-dreamina-text-primary",
                ),
                "data-date-max": c,
                "data-date-min": d,
                "data-date-value": v,
                onClick: h,
                size: "unframed",
                variant: "text",
                children: [
                  (0, r.jsx)("span", {
                    "aria-hidden": "true",
                    className: (0, l.cn)(
                      "pointer-events-none min-w-dreamina-control-unframed flex-1 truncate text-left",
                      m && "font-dreamina-number tabular-nums",
                    ),
                    "data-asset-library-date-value": !0,
                    children: i,
                  }),
                  g,
                ],
              }),
              b,
            ],
          })
        );
      }
      function tN(e) {
        let { checked: t, label: a, onClick: s } = e;
        return (0, r.jsxs)(l.$nd, {
          "aria-pressed": t,
          className:
            "h-canvas-asset-library-filter-control w-full cursor-pointer justify-between gap-canvas-asset-library-filter-option-gap rounded-lg px-3 py-canvas-asset-library-filter-option-block font-dreamina-cn text-dreamina-cn-13 font-dreamina-regular leading-[22px] text-dreamina-text-primary shadow-none hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-pressed",
          onClick: s,
          variant: "text",
          children: [
            (0, r.jsx)("span", { children: a }),
            (0, r.jsx)("span", {
              "aria-hidden": "true",
              className: "flex size-4 shrink-0 items-center justify-center",
              children: t ? (0, r.jsx)(l.Srz, { className: "size-4" }) : null,
            }),
          ],
        });
      }
      function tk(e, t, a) {
        let r = tA(e, "start");
        a({
          ...(void 0 !== r ? { beginTimestamp: r } : {}),
          ...(void 0 !== t && (void 0 === r || r <= t)
            ? { endTimestamp: t }
            : {}),
        });
      }
      function tT(e, t, a) {
        let r = tA(e, "end");
        a({
          ...(void 0 !== t && (void 0 === r || t <= r)
            ? { beginTimestamp: t }
            : {}),
          ...(void 0 !== r ? { endTimestamp: r } : {}),
        });
      }
      function tA(e, t) {
        let [a, r, s] = e.split("-"),
          i = Number(a),
          n = Number(r),
          o = Number(s);
        if (
          !Number.isInteger(i) ||
          !Number.isInteger(n) ||
          !Number.isInteger(o)
        )
          return;
        let l = new Date(i, n - 1, o);
        if (
          l.getFullYear() === i &&
          l.getMonth() === n - 1 &&
          l.getDate() === o
        )
          return (
            l.setHours(
              23 * ("end" === t),
              59 * ("end" === t),
              59 * ("end" === t),
              999 * ("end" === t),
            ),
            l.getTime()
          );
      }
      function tD(e) {
        if (void 0 === e) return "";
        let t = new Date(e);
        return Number.isNaN(t.getTime())
          ? ""
          : `${t.getFullYear()}-${tF(t.getMonth() + 1)}-${tF(t.getDate())}`;
      }
      function tz(e) {
        return 10 === e.length ? e.slice(2) : e;
      }
      function tR(e) {
        let t = tA(e, "start");
        return void 0 === t ? void 0 : new Date(t);
      }
      function tP(e) {
        let t = tR(e);
        if (!t) throw Error(`Invalid internal calendar date: ${e}`);
        return t;
      }
      function tF(e) {
        return String(e).padStart(2, "0");
      }
      let tE =
        "size-7 rounded-md p-0 text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-pressed data-[state=open]:bg-dreamina-block-primary-default data-[state=open]:text-dreamina-text-primary";
      function tU(e) {
        let { interactionLocked: t = !1 } = e,
          a = ej(),
          s = eS((e) => e.activeCategory),
          i = eS((e) => e.searchDraft),
          o = eS((e) => e.filters),
          l = eS((e) => "importing" === e.importStatus),
          c = a.getQueryCapabilities(s),
          d = (0, O.zY)(s, "", o, c).filters,
          u = d.filter((e) => "time" !== e.type),
          m = d.find((e) => "time" === e.type),
          p = l || t;
        return (0, r.jsx)(tL, {
          config: {
            actions: (0, r.jsx)(tV, {
              activeFilters: u,
              capabilities: c,
              disabled: p,
              timeFilter: m,
              onClearDetailFilters: () => a.clearDetailFilters(),
              onClearDetailFilterGroup: (e) => a.clearDetailFilterGroup(e),
              onClearTimeFilter: () => a.clearTimeFilter(),
              onCustomTimeChange: (e) => a.setCustomTimeRange(e),
              onToggleFilter: (e) => a.toggleFilter(e),
            }),
            search: {
              disabled: p,
              label: (0, n.ayc)(),
              onChange: (e) => a.setSearchDraft(e),
              onClear: () => a.clearSearch(),
              onSubmit: () => a.submitSearch(),
              value: i,
            },
          },
        });
      }
      function tL(e) {
        let { config: t } = e,
          a = t.search.onSubmit,
          s = null;
        return (
          t.search.value &&
            (s = (0, r.jsx)(tr.E, {
              className: "absolute right-1 top-1",
              disabled: t.search.disabled,
              label: (0, n.N3X)(),
              onClick: t.search.onClear,
            })),
          (0, r.jsxs)("div", {
            className: "ml-auto flex min-w-0 items-center justify-end gap-1",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "relative w-canvas-asset-library-query-narrow min-w-0 max-w-[40vw] shrink-0",
                children: [
                  (0, r.jsx)("span", {
                    className: (0, l.cn)(
                      "pointer-events-none absolute left-1 top-1 flex size-7 items-center justify-center",
                      t.search.disabled
                        ? "text-dreamina-text-placeholder"
                        : "text-dreamina-text-secondary",
                    ),
                    children: (0, r.jsx)(l.VdZ, { size: 16 }),
                  }),
                  (0, r.jsx)(l.pde, {
                    className: (0, l.cn)(
                      "h-9 overflow-hidden whitespace-nowrap rounded-lg border border-dreamina-stroke-secondary bg-transparent pl-9 text-ellipsis text-dreamina-cn-13 leading-canvas-asset-library-primary-tab text-dreamina-text-primary caret-dreamina-brand-default placeholder:text-dreamina-text-placeholder focus:border-dreamina-stroke-secondary disabled:text-dreamina-text-placeholder disabled:placeholder:text-dreamina-text-placeholder",
                      t.search.value
                        ? "pr-9"
                        : "pr-canvas-asset-library-search-inline-end",
                    ),
                    disabled: t.search.disabled,
                    disabledAppearance: "undimmed",
                    label: t.search.label,
                    placeholder: (0, n.DOR)(),
                    value: t.search.value,
                    onChange: (e) => t.search.onChange(e.currentTarget.value),
                    onKeyDown: a
                      ? (e) => {
                          var t, r;
                          return (
                            (t = e),
                            (r = a),
                            void (
                              "Enter" === t.key && (t.preventDefault(), r())
                            )
                          );
                        }
                      : void 0,
                  }),
                  s,
                ],
              }),
              t.actions,
            ],
          })
        );
      }
      function tV(e) {
        let {
            activeFilters: t,
            capabilities: a,
            disabled: i,
            onClearDetailFilters: n,
            onClearDetailFilterGroup: o,
            onClearTimeFilter: l,
            onCustomTimeChange: c,
            onToggleFilter: d,
            timeFilter: u,
          } = e,
          [m, p] = (0, s.useState)(null),
          h = tY(a).length > 0;
        if (
          ((0, s.useEffect)(() => {
            i && p(null);
          }, [i]),
          !a.time && !h)
        )
          return null;
        let v = null;
        a.time &&
          (v = (0, r.jsx)(tg, {
            activeFilter: u,
            disabled: i,
            open: "time" === m,
            onClear: l,
            onCustomChange: c,
            onOpenChange: (e) => p((t) => tG(t, "time", e)),
            onPresetSelect: d,
            triggerClassName: tE,
          }));
        let g = null;
        return (
          a.time &&
            h &&
            (g = (0, r.jsx)("span", {
              "aria-hidden": "true",
              className:
                "h-4 w-px shrink-0 scale-y-75 bg-dreamina-stroke-secondary",
              "data-asset-library-query-divider": !0,
            })),
          (0, r.jsxs)("div", {
            className:
              "flex h-9 shrink-0 items-center gap-1 rounded-lg border border-dreamina-stroke-secondary bg-transparent px-1",
            "data-testid": "canvas-asset-library-query-action-group",
            children: [
              v,
              g,
              (0, r.jsx)(tB, {
                activeFilters: t,
                capabilities: a,
                disabled: i,
                open: "detail" === m,
                onClearAll: n,
                onClearGroup: o,
                onOpenChange: (e) => p((t) => tG(t, "detail", e)),
                onToggle: d,
              }),
            ],
          })
        );
      }
      function tZ(e) {
        let {
            inline: t = !1,
            interactionLocked: a = !1,
            showCategoryTabs: i = !0,
            session: o,
          } = e,
          l = (0, s.useSyncExternalStore)(
            o.subscribe,
            o.getSnapshot,
            o.getSnapshot,
          ),
          [c, d] = (0, s.useState)(!1),
          [u, m] = (0, s.useState)(l.keyword);
        (0, s.useEffect)(() => m(l.keyword), [l.keyword]);
        let p = a || "importing" === l.importStatus,
          h = "multiple" === o.selectionMode ? l.selectedSubjectIds.length : 0,
          v = null;
        return (
          i &&
            (v = (0, r.jsx)(e1, { interactionLocked: a, selectedAllCount: h })),
          (0, r.jsxs)("div", {
            className: "flex flex-1 items-center justify-between",
            style: { marginTop: 8 * !t },
            children: [
              v,
              (0, r.jsx)(tL, {
                config: {
                  actions: (0, r.jsx)(tB, {
                    activeFilters: l.onlyFavorite
                      ? [{ type: "favorite", value: !0 }]
                      : [],
                    capabilities: {
                      favorite: !0,
                      time: !1,
                      statuses: [],
                      resolutions: [],
                      ratios: [],
                      generationModes: [],
                    },
                    disabled: p,
                    open: c,
                    onOpenChange: d,
                    onClearAll: () => o.setOnlyFavorite(!1),
                    onClearGroup: () => o.setOnlyFavorite(!1),
                    onToggle: () => o.setOnlyFavorite(!l.onlyFavorite),
                  }),
                  search: {
                    disabled: p,
                    label: (0, n.kzb)(),
                    onChange: m,
                    onClear: () => {
                      (m(""), o.submitSearch(""));
                    },
                    onSubmit: () => o.submitSearch(u),
                    value: u,
                  },
                },
              }),
            ],
          })
        );
      }
      function tB(e) {
        let {
            activeFilters: t,
            capabilities: a,
            disabled: i,
            open: o,
            onClearAll: c,
            onClearGroup: d,
            onOpenChange: u,
            onToggle: m,
          } = e,
          p = (0, s.useRef)(null),
          h = tY(a);
        if (0 === h.length) return null;
        let v = (0, n.exK)(),
          g = t.length > 0 ? (0, n.kkJ)(t.length) : v,
          b = null;
        return (
          t.length > 0 &&
            (b = (0, r.jsx)(tW, {
              disabled: i,
              onClear: () => {
                var e;
                (null == (e = p.current) || e.focus(), u(!1), c());
              },
              onRestoreFocus: () => {
                var e;
                return null == (e = p.current) ? void 0 : e.focus();
              },
            })),
          (0, r.jsxs)(e6.rI, {
            modal: !1,
            onOpenChange: u,
            open: o,
            children: [
              (0, r.jsxs)("span", {
                className:
                  "group/asset-library-detail-filter-trigger relative inline-flex",
                children: [
                  (0, r.jsx)(tf, {
                    disabled: i,
                    label: g,
                    open: o,
                    children: (0, r.jsx)(e6.ty, {
                      asChild: !0,
                      children: (0, r.jsxs)(l.$nd, {
                        ref: p,
                        "aria-label": g,
                        "aria-pressed": t.length > 0,
                        className: (0, l.cn)(
                          tE,
                          "aria-pressed:bg-dreamina-block-primary-default aria-pressed:hover:bg-dreamina-block-primary-default",
                        ),
                        disabled: i,
                        size: "icon",
                        variant: "text",
                        children: [
                          (0, r.jsx)(l.tuK, {}),
                          (0, r.jsx)("span", {
                            className: "sr-only",
                            children: v,
                          }),
                        ],
                      }),
                    }),
                  }),
                  b,
                ],
              }),
              (0, r.jsx)(e6.SQ, {
                align: "center",
                appearance: "actionList",
                className:
                  "overflow-hidden p-canvas-zero py-canvas-asset-library-filter-gap pl-canvas-asset-library-filter-gap",
                collisionPadding: 8,
                motion: "toolbarDisclosure",
                motionOrigin: "topCenter",
                sideOffset: 12,
                size: "medium",
                children: (0, r.jsx)(tQ, {
                  children: h.map((e, a) =>
                    (0, r.jsx)(
                      t_,
                      {
                        activeFilters: t,
                        group: e,
                        onClear: d,
                        onToggle: m,
                        showSeparator: a > 0,
                      },
                      e.type,
                    ),
                  ),
                }),
              }),
            ],
          })
        );
      }
      function tW(e) {
        let { disabled: t, onClear: a, onRestoreFocus: s } = e;
        return (0, r.jsx)(l.K0, {
          className:
            "group/asset-library-detail-filter-clear pointer-events-none absolute -right-2 top-[-7px] size-6 rounded-dreamina-capsule border-0 bg-transparent p-canvas-zero text-dreamina-text-primary opacity-dreamina-media-action-hidden group-hover/asset-library-detail-filter-trigger:pointer-events-auto group-hover/asset-library-detail-filter-trigger:opacity-dreamina-media-action-visible group-focus-within/asset-library-detail-filter-trigger:pointer-events-auto group-focus-within/asset-library-detail-filter-trigger:opacity-dreamina-media-action-visible hover:bg-transparent active:bg-transparent [&_svg]:size-2",
          "data-asset-library-clear-detail-filters": !0,
          disabled: t,
          icon: (0, r.jsx)("span", {
            className:
              "flex size-3 items-center justify-center rounded-dreamina-capsule bg-dreamina-block-primary-default text-dreamina-on-media-text-primary ring-2 ring-dreamina-bg-surface backdrop-blur-dreamina-medium group-hover/asset-library-detail-filter-clear:bg-dreamina-block-primary-hover group-active/asset-library-detail-filter-clear:bg-dreamina-block-primary-pressed",
            "data-asset-library-clear-detail-filters-visual": !0,
            children: (0, r.jsx)(l.USm, { size: 8 }),
          }),
          label: (0, n.Cku)(),
          onClick: (e) => {
            (e.stopPropagation(), a());
          },
          onPointerDown: (e) => {
            (e.preventDefault(), e.stopPropagation(), s());
          },
        });
      }
      function tQ(e) {
        let { children: t } = e,
          a = (0, s.useRef)(null),
          i = (0, s.useRef)(null),
          n = (0, s.useRef)(null),
          o = (function (e) {
            let [t, a] = (0, s.useState)(436);
            return (
              (0, s.useLayoutEffect)(() => {
                let t = e.current;
                if (!t) return;
                let r = () => {
                  t.offsetHeight <= 0 || a(Math.min(t.offsetHeight, 436));
                };
                if ((r(), "u" < typeof ResizeObserver)) return;
                let s = new ResizeObserver(r);
                return (s.observe(t), () => s.disconnect());
              }, [e]),
              t
            );
          })(n),
          c = (0, te._l)({ contentVersion: o, hostRef: i });
        return (0, r.jsxs)("div", {
          className: "group/canvas-panel-scrollbar relative w-full",
          "data-testid": "canvas-asset-library-filter-scroll",
          ref: a,
          style: { height: o, minHeight: 0 },
          children: [
            (0, r.jsx)("div", {
              className: (0, l.cn)(
                "relative w-full overflow-y-auto overscroll-y-none",
                (0, te.G9)({ overflowing: c, variant: "asset-library-filter" }),
              ),
              "data-asset-library-filter-scroll": !0,
              "data-canvas-panel-overflow": c ? "vertical" : "none",
              onWheelCapture: (e) => (0, e7.TG)(e, e.currentTarget),
              ref: i,
              style: { height: o },
              children: (0, r.jsx)("div", { ref: n, children: t }),
            }),
            (0, r.jsx)(te.Lw, {
              contentVersion: o,
              edgeInset: 12,
              hostRef: a,
              overflowing: c,
              scrollRef: i,
              variant: "asset-library-filter",
              visibility: "persistent",
            }),
          ],
        });
      }
      function t_(e) {
        let {
            activeFilters: t,
            group: a,
            onClear: i,
            onToggle: o,
            showSeparator: l,
          } = e,
          c = (0, s.useRef)(null),
          d = t.some((e) => e.type === a.type),
          u = a.options.length > 1,
          m = null;
        l &&
          (m = (0, r.jsx)("span", {
            "aria-orientation": "horizontal",
            className:
              "mb-canvas-asset-library-filter-section-start block h-canvas-asset-library-filter-gap shrink-0 border-t border-dreamina-stroke-secondary",
            role: "separator",
          }));
        let p = null;
        return (
          d &&
            u &&
            (p = (0, r.jsx)(e6._2, {
              "aria-label": `${(0, n.Cku)()} \xb7 ${(0, n.va7)(a.type)}`,
              className:
                "pointer-events-none absolute -right-canvas-asset-library-filter-section-inline top-1/2 -translate-y-1/2 text-dreamina-cn-12 text-dreamina-text-placeholder opacity-dreamina-media-action-hidden data-[highlighted]:bg-transparent data-[highlighted]:text-dreamina-text-primary group-hover/asset-library-filter-group:pointer-events-auto group-hover/asset-library-filter-group:opacity-dreamina-media-action-visible group-focus-within/asset-library-filter-group:pointer-events-auto group-focus-within/asset-library-filter-group:opacity-dreamina-media-action-visible",
              "data-asset-library-filter-group-clear": !0,
              onSelect: (e) => {
                var t;
                e.preventDefault();
                let r =
                  null == (t = c.current)
                    ? void 0
                    : t.querySelector('[role="menuitemcheckbox"]');
                (i(a.type),
                  queueMicrotask(() => {
                    (null == r ? void 0 : r.isConnected) && r.focus();
                  }));
              },
              children: (0, n.Cku)(),
            })),
          (0, r.jsxs)("fieldset", {
            ref: c,
            className:
              "group/asset-library-filter-group m-0 flex flex-col gap-canvas-asset-library-filter-gap border-0 p-0",
            "data-asset-library-filter-group": a.type,
            children: [
              (0, r.jsxs)("legend", {
                className:
                  "w-full px-canvas-asset-library-filter-section-inline pb-canvas-asset-library-filter-gap pt-canvas-asset-library-filter-section-start font-dreamina-cn text-dreamina-cn-12 font-dreamina-regular leading-canvas-asset-library-filter-section text-dreamina-text-placeholder",
                children: [
                  m,
                  (0, r.jsxs)("span", {
                    className: "relative flex items-center justify-between",
                    children: [(0, n.va7)(a.type), p],
                  }),
                ],
              }),
              a.options.map((e) =>
                (0, r.jsx)(
                  tO,
                  { activeFilters: t, filter: e, onToggle: o },
                  `${e.type}:${String(e.value)}`,
                ),
              ),
            ],
          })
        );
      }
      function tO(e) {
        var t, a;
        let { activeFilters: i, filter: o, onToggle: c } = e,
          [d, u] = (0, s.useState)(!1),
          m =
            ((t = i),
            (a = o),
            t.some((e) => e.type === a.type && e.value === a.value)),
          p = (0, n.n$$)("favorite" === o.type ? "favorite" : o.value),
          h = null;
        return (
          m &&
            (h = (0, r.jsx)(l.$nG, {
              className: "text-dreamina-text-primary",
            })),
          (0, r.jsxs)(e6._2, {
            "aria-checked": m,
            className: "group/asset-library-filter-option justify-between",
            onBlur: () => u(!1),
            onFocus: (e) => {
              let t = e.currentTarget.querySelector(
                "[data-asset-library-filter-option-label]",
              );
              u(!!(t && t.scrollWidth > t.clientWidth));
            },
            onSelect: (e) => {
              (e.preventDefault(), c(o));
            },
            role: "menuitemcheckbox",
            children: [
              (0, r.jsx)(tf, {
                className: "min-w-canvas-zero flex-1 overflow-hidden",
                disabled: !1,
                focusOpen: d,
                label: p,
                open: !1,
                children: (0, r.jsx)("span", {
                  className:
                    "block min-w-canvas-zero flex-1 truncate whitespace-nowrap text-left",
                  "data-asset-library-filter-option-label": !0,
                  children: p,
                }),
              }),
              (0, r.jsx)("span", {
                "aria-hidden": "true",
                className: (0, l.cn)(
                  "flex size-5 shrink-0 items-center justify-center text-dreamina-text-primary",
                  {
                    "opacity-dreamina-media-action-visible": m,
                    "opacity-dreamina-media-action-hidden group-hover/asset-library-filter-option:opacity-dreamina-media-action-visible group-focus-within/asset-library-filter-option:opacity-dreamina-media-action-visible":
                      !m,
                  },
                ),
                "data-asset-library-filter-checkbox": !0,
                children: (0, r.jsx)("span", {
                  className:
                    "flex size-4 items-center justify-center rounded-canvas-asset-library-filter-checkbox border border-current",
                  children: h,
                }),
              }),
            ],
          })
        );
      }
      function tY(e) {
        return [
          ...(e.favorite
            ? [{ type: "favorite", options: [{ type: "favorite", value: !0 }] }]
            : []),
          ...(e.statuses.length
            ? [
                {
                  type: "status",
                  options: e.statuses.map((e) => ({
                    type: "status",
                    value: e,
                  })),
                },
              ]
            : []),
          ...(e.resolutions.length
            ? [
                {
                  type: "resolution",
                  options: e.resolutions.map((e) => ({
                    type: "resolution",
                    value: e,
                  })),
                },
              ]
            : []),
          ...(e.ratios.length
            ? [
                {
                  type: "ratio",
                  options: e.ratios.map((e) => ({ type: "ratio", value: e })),
                },
              ]
            : []),
          ...(e.generationModes.length
            ? [
                {
                  type: "generationMode",
                  options: e.generationModes.map((e) => ({
                    type: "generationMode",
                    value: e,
                  })),
                },
              ]
            : []),
        ];
      }
      function tG(e, t, a) {
        return a ? t : e === t ? null : e;
      }
      function tX(e) {
        var t, a, i, o, l, c;
        let { onSelectionBlocked: d } = e,
          m = eS((e) => e.activeCategory),
          p = eS((e) => e.activeSection),
          h = eS((e) =>
            "canvas" === e.activeSection ? null : e.selectionBlockedFeedback,
          ),
          v =
            ((t = null == h ? void 0 : h.target),
            (a = "subjects" === p ? "subjects" : "assets"),
            (i = m),
            t || ("subjects" === a ? "subject" : i)),
          g = (function (e, t, a) {
            var r;
            let s = eC(),
              i = eS((e) => e.selectedAssets),
              o = eS((e) => e.maxSharedSelectedCount),
              l = eS((e) => e.maxSelectedCountByCategory),
              c = eS((e) => e.externalSharedOccupancy),
              d = eS((e) => e.occupiedSelectionIds);
            if ("alreadyAdded" === t) return (0, n.o9k)();
            if ("mutuallyExclusiveCategory" === t) return (0, n.Duy)();
            let u = x(i.values(), d) + c;
            return (r = {
              fallback: (0, n.bgw)(),
              labels: s.limitReachedLabels,
              sharedLimitReached: a
                ? "total" === a || "shared" === a
                : void 0 !== o && "document" !== e && u >= o,
              typeLimitReached: a
                ? "category" === a
                : (function (e) {
                    var t;
                    if ("subject" === e.target)
                      return (
                        void 0 !== e.maxSubjectSelectedCount &&
                        e.selectedSubjectCount >= e.maxSubjectSelectedCount
                      );
                    let a =
                      null == (t = e.maxSelectedCountByCategory)
                        ? void 0
                        : t[e.target];
                    return (
                      void 0 !== a &&
                      y(e.selectedAssets, e.target, e.occupiedSelectionIds) >= a
                    );
                  })({
                    maxSelectedCountByCategory: l,
                    maxSubjectSelectedCount: s.maxSubjectSelectedCount,
                    occupiedSelectionIds: d,
                    selectedAssets: i.values(),
                    selectedSubjectCount: c,
                    target: e,
                  }),
              target: e,
            }).labels
              ? r.sharedLimitReached && "document" !== r.target
                ? r.labels.shared
                : r.typeLimitReached
                  ? r.labels[r.target]
                  : r.fallback
              : r.fallback;
          })(
            v,
            null == h ? void 0 : h.reason,
            null == h ? void 0 : h.limitScope,
          );
        return ((o = h),
        (l = v),
        (c = d),
        (0, s.useEffect)(() => {
          o &&
            c &&
            (o.limitScope ? c(o.reason, l, o.limitScope) : c(o.reason, l));
        }, [o, c, l]),
        !h || d)
          ? null
          : (0, r.jsx)(u.Mp, { description: g, dismissible: !1 }, h.revision);
      }
      var tJ = a(17342),
        t$ = a(62799),
        tK = a(23784);
      let tH = tK.Ot,
        tq = tK.Bu,
        t0 = (0, s.forwardRef)(function (e, t) {
          var a, o, l, c;
          let d,
            u,
            m,
            p,
            h,
            v,
            g,
            {
              durationMs: b,
              onBlur: f,
              onFocus: y,
              onPointerEnter: x,
              onPointerLeave: j,
              onRequestClose: S,
              playbackUrl: C,
              session: w,
              title: M,
              toggleButtonRef: I,
            } = e,
            N =
              ((a = w.anchorRect),
              (d = (null == (o = w.containerRect) ? void 0 : o.left) ?? 0),
              (u = (null == o ? void 0 : o.top) ?? 0),
              (m = (null == o ? void 0 : o.width) ?? window.innerWidth),
              (p = (null == o ? void 0 : o.height) ?? window.innerHeight),
              (h = Math.max(8, m - tH - 8)),
              (v =
                ((l = a.left - d + (a.width - tH) / 2),
                Math.min(h, Math.max(8, l)))),
              {
                left: v,
                top:
                  (g = a.bottom - u + 8) + tq <= p - 8
                    ? g
                    : Math.max(8, a.top - u - tq - 8),
              });
          return (
            (c = S),
            (0, s.useEffect)(
              () => (
                window.addEventListener("resize", c),
                window.addEventListener("scroll", c, !0),
                () => {
                  (window.removeEventListener("resize", c),
                    window.removeEventListener("scroll", c, !0));
                }
              ),
              [c],
            ),
            (0, i.createPortal)(
              (0, r.jsx)("div", {
                "aria-label": (0, n.O3y)(M),
                className: `${w.containerRect ? "absolute" : "fixed"} pointer-events-auto z-[140] h-[84px] w-[180px] rounded-canvas-asset-library-audio-preview-panel border-0 bg-dreamina-bg-menu p-canvas-zero text-dreamina-text-primary shadow-dreamina-dropdown before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-['']`,
                "data-testid": "canvas-asset-library-audio-preview",
                onBlur: f,
                onFocus: y,
                onPointerEnter: x,
                onPointerLeave: j,
                ref: t,
                role: "group",
                style: N,
                children: (0, r.jsx)("div", {
                  className:
                    "size-full overflow-hidden rounded-canvas-asset-library-audio-preview-panel",
                  children: (0, r.jsx)(tK.hj, {
                    autoPlay: w.autoPlay,
                    durationSeconds: void 0 === b ? void 0 : b / 1e3,
                    ownSemanticGroup: !1,
                    playbackUrl: C,
                    title: M,
                    toggleButtonRef: I,
                    toggleTestId: "canvas-asset-library-audio-preview-toggle",
                    visibleTitle: (0, n.ieq)("audio"),
                  }),
                }),
              }),
              w.portalContainer,
            )
          );
        }),
        t1 = "asset-library-box-selection-started";
      class t2 {
        synchronizeCommittedInputs(e, t, a, r) {
          let s = void 0 !== this.scopeKey && this.scopeKey !== r,
            i = !0 === this.enabled && !t;
          ((this.candidateIds = e),
            (this.enabled = t),
            (this.onCommit = a),
            (this.scopeKey = r),
            (s || i) && this.reset());
        }
        reset() {
          (this.cancelSession(),
            (this.suppressClick = !1),
            null !== this.suppressClickTimer &&
              window.clearTimeout(this.suppressClickTimer),
            (this.suppressClickTimer = null));
        }
        dispose() {
          this.reset();
        }
        connectDialogBackdrop() {
          return (
            window.addEventListener(
              "mousedown",
              this.handleBackdropMouseDownCapture,
              !0,
            ),
            window.addEventListener("click", this.handleWindowClickCapture, !0),
            () => {
              (window.removeEventListener(
                "mousedown",
                this.handleBackdropMouseDownCapture,
                !0,
              ),
                window.removeEventListener(
                  "click",
                  this.handleWindowClickCapture,
                  !0,
                ));
            }
          );
        }
        startCandidateSession(e, t) {
          if (!this.enabled || 0 !== e.button) return;
          let a = this.rootRef.current;
          a &&
            0 !== this.candidateIds.length &&
            (t && e.preventDefault(),
            this.cancelSession(),
            (this.session = {
              active: !1,
              currentX: e.clientX,
              currentY: e.clientY,
              previousCursor: a.style.cursor,
              startX: e.clientX,
              startY: e.clientY,
            }),
            this.attachWindowListeners());
        }
        consumeTrailingClick(e) {
          ((this.suppressClick = !1),
            null !== this.suppressClickTimer &&
              window.clearTimeout(this.suppressClickTimer),
            (this.suppressClickTimer = null),
            e.preventDefault(),
            e.stopPropagation());
        }
        attachWindowListeners() {
          this.windowListenersAttached ||
            ((this.windowListenersAttached = !0),
            window.addEventListener("mousemove", this.handleWindowMouseMove, {
              capture: !0,
              passive: !1,
            }),
            window.addEventListener("mouseup", this.handleWindowMouseUp, {
              capture: !0,
              passive: !1,
            }),
            window.addEventListener(
              "pointercancel",
              this.handleWindowPointerCancel,
              !0,
            ),
            window.addEventListener("blur", this.handleWindowBlur));
        }
        detachWindowListeners() {
          this.windowListenersAttached &&
            ((this.windowListenersAttached = !1),
            window.removeEventListener(
              "mousemove",
              this.handleWindowMouseMove,
              !0,
            ),
            window.removeEventListener("mouseup", this.handleWindowMouseUp, !0),
            window.removeEventListener(
              "pointercancel",
              this.handleWindowPointerCancel,
              !0,
            ),
            window.removeEventListener("blur", this.handleWindowBlur));
        }
        activateSession() {
          let e = this.rootRef.current;
          e &&
            this.session &&
            !this.session.active &&
            ((this.session.active = !0),
            e.setAttribute("data-box-selecting", "true"),
            (e.style.cursor = "crosshair"),
            e.dispatchEvent(new CustomEvent(t1, { bubbles: !0 })),
            this.updateSelection());
        }
        commitSession(e) {
          (this.cancelUpdateFrame(), this.updateSelection());
          let t = new Set(this.previewElements.keys()),
            a = this.candidateIds.filter((e) => t.has(e));
          ((this.session = null),
            this.detachWindowListeners(),
            this.hideOverlay(e),
            this.armTrailingClickSuppression(),
            this.onCommit(a),
            this.schedulePreviewCleanup());
        }
        cancelSession() {
          let e = this.session;
          ((this.session = null),
            this.cancelUpdateFrame(),
            this.detachWindowListeners(),
            this.hideOverlay(e),
            this.clearPreview());
        }
        scheduleSelectionUpdate() {
          null === this.updateFrame &&
            (this.updateFrame = t4(this.updateSelection));
        }
        cancelUpdateFrame() {
          null !== this.updateFrame &&
            (t3(this.updateFrame), (this.updateFrame = null));
        }
        hideOverlay(e) {
          this.overlayRef.current && (this.overlayRef.current.hidden = !0);
          let t = this.rootRef.current;
          t &&
            (t.removeAttribute("data-box-selecting"),
            e && (t.style.cursor = e.previousCursor));
        }
        armTrailingClickSuppression() {
          ((this.suppressClick = !0),
            null !== this.suppressClickTimer &&
              window.clearTimeout(this.suppressClickTimer),
            (this.suppressClickTimer = window.setTimeout(() => {
              ((this.suppressClick = !1), (this.suppressClickTimer = null));
            }, 0)));
        }
        schedulePreviewCleanup() {
          (null !== this.previewCleanupFrame && t3(this.previewCleanupFrame),
            (this.previewCleanupFrame = t4(() => {
              ((this.previewCleanupFrame = null), this.clearPreview());
            })));
        }
        clearPreview() {
          for (let e of (null !== this.previewCleanupFrame &&
            t3(this.previewCleanupFrame),
          (this.previewCleanupFrame = null),
          this.previewElements.values()))
            e.removeAttribute("data-box-selected");
          this.previewElements = new Map();
        }
        constructor(e, t) {
          ((this.rootRef = e),
            (this.overlayRef = t),
            (this.candidateIds = []),
            (this.onCommit = () => void 0),
            (this.session = null),
            (this.previewElements = new Map()),
            (this.updateFrame = null),
            (this.previewCleanupFrame = null),
            (this.suppressClick = !1),
            (this.suppressClickTimer = null),
            (this.windowListenersAttached = !1),
            (this.handleMouseDownCapture = (e) => {
              var t;
              if (!this.enabled || 0 !== e.button) return;
              let a = e.target instanceof Element ? e.target : null;
              !a ||
                (!(t = a).closest("[data-asset-card]") &&
                  t.closest(
                    'a,button,input,select,textarea,[role="button"],[role="menuitem"]',
                  )) ||
                this.startCandidateSession(e, !a.closest("[data-asset-card]"));
            }),
            (this.handleBackdropMouseDownCapture = (e) => {
              let t = this.rootRef.current,
                a = t
                  ? (function (e) {
                      let t = e.previousElementSibling;
                      for (; t; ) {
                        if (
                          t instanceof HTMLElement &&
                          t.hasAttribute("data-dialog-overlay")
                        )
                          return t;
                        t = t.previousElementSibling;
                      }
                      return null;
                    })(t)
                  : null,
                r = e.target;
              a instanceof HTMLElement &&
                r instanceof Node &&
                a.contains(r) &&
                this.startCandidateSession(e, !0);
            }),
            (this.handleWindowClickCapture = (e) => {
              this.suppressClick && this.consumeTrailingClick(e);
            }),
            (this.handleClickCapture = (e) => {
              this.suppressClick && this.consumeTrailingClick(e);
            }),
            (this.handleDragStartCapture = (e) => {
              this.session && e.preventDefault();
            }),
            (this.handleScrollCapture = () => {
              var e;
              this.enabled &&
                (null == (e = this.session) ? void 0 : e.active) &&
                this.scheduleSelectionUpdate();
            }),
            (this.handleWindowMouseMove = (e) => {
              let t = this.session;
              if (t) {
                if (!this.enabled) return void this.cancelSession();
                if (
                  ((t.currentX = e.clientX), (t.currentY = e.clientY), t.active)
                )
                  this.scheduleSelectionUpdate();
                else {
                  if (
                    4 > Math.hypot(e.clientX - t.startX, e.clientY - t.startY)
                  )
                    return;
                  this.activateSession();
                }
                e.preventDefault();
              }
            }),
            (this.handleWindowMouseUp = (e) => {
              let t = this.session;
              if (t && 0 === e.button) {
                if (
                  !this.enabled ||
                  ((t.currentX = e.clientX),
                  (t.currentY = e.clientY),
                  !t.active)
                )
                  return void this.cancelSession();
                (e.preventDefault(), this.commitSession(t));
              }
            }),
            (this.handleWindowPointerCancel = () => this.cancelSession()),
            (this.handleWindowBlur = () => this.cancelSession()),
            (this.updateSelection = () => {
              var e, t, a, r;
              this.updateFrame = null;
              let s = this.rootRef.current,
                i = this.overlayRef.current;
              if (!s || !i || !(null == (e = this.session) ? void 0 : e.active))
                return;
              let n = Array.from(
                  s.querySelectorAll("[data-asset-card][data-asset-id]"),
                ).flatMap((e) => {
                  let t = e.dataset.assetId;
                  return t
                    ? [
                        {
                          assetId: t,
                          element: e,
                          rect: e.getBoundingClientRect(),
                        },
                      ]
                    : [];
                }),
                o = {
                  bottom: Math.max((t = this.session).startY, t.currentY),
                  left: Math.min(t.startX, t.currentX),
                  right: Math.max(t.startX, t.currentX),
                  top: Math.min(t.startY, t.currentY),
                };
              ((i.hidden = !1),
                (i.style.transform = `translate3d(${o.left}px, ${o.top}px, 0)`),
                (i.style.width = `${o.right - o.left}px`),
                (i.style.height = `${o.bottom - o.top}px`));
              let l = new Map();
              for (let e of n) {
                ((a = o),
                  (r = e.rect),
                  a.left < r.right &&
                    a.right > r.left &&
                    a.top < r.bottom &&
                    a.bottom > r.top &&
                    l.set(e.assetId, e.element));
              }
              ((function (e, t) {
                for (let [a, r] of e)
                  t.get(a) !== r && r.removeAttribute("data-box-selected");
                for (let [a, r] of t)
                  e.get(a) !== r && r.setAttribute("data-box-selected", "true");
              })(this.previewElements, l),
                (this.previewElements = l));
            }));
        }
      }
      function t4(e) {
        return "function" == typeof window.requestAnimationFrame
          ? window.requestAnimationFrame(e)
          : window.setTimeout(() => e(performance.now()), 16);
      }
      function t3(e) {
        "function" == typeof window.cancelAnimationFrame
          ? window.cancelAnimationFrame(e)
          : window.clearTimeout(e);
      }
      let t5 = (0, s.createContext)(null);
      function t9(e) {
        let { children: t } = e,
          a = (function () {
            let e = (0, s.useRef)(null),
              t = (0, s.useRef)(null),
              a = (0, s.useRef)(),
              r = (0, s.useRef)(),
              i = (0, s.useRef)(null),
              n = (0, s.useRef)(!1),
              o = (0, s.useRef)(!1),
              l = (0, s.useRef)(!1),
              c = (0, s.useRef)(!1),
              [d, u] = (0, s.useState)(null),
              m = (0, s.useCallback)(() => {
                void 0 !== a.current &&
                  (window.clearTimeout(a.current), (a.current = void 0));
              }, []),
              p = (0, s.useCallback)(() => {
                ((n.current = !1),
                  (o.current = !1),
                  (l.current = !1),
                  (c.current = !1));
              }, []),
              { close: h, closeCurrent: v } = (function (e) {
                let {
                    activeAssetIdRef: t,
                    clearCloseTimer: a,
                    clearInteractionState: r,
                    dialogRootRef: i,
                    setPreview: n,
                  } = e,
                  o = (0, s.useCallback)(() => {
                    (a(),
                      (t.current = void 0),
                      (i.current = null),
                      r(),
                      n(null));
                  }, [t, a, r, i, n]);
                return {
                  close: (0, s.useCallback)(
                    (e) => {
                      t.current === e && o();
                    },
                    [t, o],
                  ),
                  closeCurrent: o,
                };
              })({
                activeAssetIdRef: r,
                clearCloseTimer: m,
                clearInteractionState: p,
                dialogRootRef: i,
                setPreview: u,
              }),
              g = (function (e) {
                let {
                  activeAssetIdRef: t,
                  closeTimerRef: a,
                  clearCloseTimer: r,
                  focusInCardRef: i,
                  focusInPreviewRef: n,
                  pointerInCardRef: o,
                  pointerInPreviewRef: l,
                  setPreview: c,
                } = e;
                return (0, s.useCallback)(
                  (e) => {
                    (r(),
                      (a.current = window.setTimeout(() => {
                        ((a.current = void 0),
                          t.current !== e ||
                            o.current ||
                            l.current ||
                            i.current ||
                            n.current ||
                            ((t.current = void 0), c(null)));
                      }, 100)));
                  },
                  [t, a, r, i, n, o, l, c],
                );
              })({
                activeAssetIdRef: r,
                closeTimerRef: a,
                clearCloseTimer: m,
                focusInCardRef: l,
                focusInPreviewRef: c,
                pointerInCardRef: n,
                pointerInPreviewRef: o,
                setPreview: u,
              }),
              b = (0, s.useCallback)(
                (e, t, a, s) => {
                  (m(),
                    (i.current =
                      t.closest(
                        '[data-testid="canvas-asset-library-dialog"]',
                      ) ?? document.body),
                    r.current !== e.assetId && p(),
                    (r.current = e.assetId),
                    "pointer" === s ? (n.current = !0) : (l.current = !0),
                    u((r) => {
                      var s, i, n, o;
                      let l;
                      return (
                        (s = e),
                        (i = t),
                        (n = a),
                        (o = r),
                        (l = i.closest(
                          '[data-testid="canvas-asset-library-dialog"]',
                        )),
                        {
                          ...s,
                          session: {
                            anchorRect: i.getBoundingClientRect(),
                            autoPlay:
                              n ||
                              ((null == o ? void 0 : o.assetId) === s.assetId &&
                                o.session.autoPlay),
                            containerRect:
                              null == l ? void 0 : l.getBoundingClientRect(),
                            portalContainer: l ?? document.body,
                          },
                        }
                      );
                    }));
                },
                [m, p],
              );
            return (
              (0, s.useEffect)(() => () => m(), [m]),
              {
                activeAssetIdRef: r,
                clearCloseTimer: m,
                close: h,
                closeCurrent: v,
                dialogRootRef: i,
                focusInCardRef: l,
                focusInPreviewRef: c,
                open: b,
                pointerInCardRef: n,
                pointerInPreviewRef: o,
                preview: d,
                previewRef: e,
                previewToggleRef: t,
                scheduleClose: g,
              }
            );
          })();
        !(function (e) {
          let { closeCurrent: t, dialogRootRef: a } = e;
          (0, s.useEffect)(() => {
            let e = (e) => {
              e.target === a.current && t();
            };
            return (
              window.addEventListener(t1, e),
              () => window.removeEventListener(t1, e)
            );
          }, [t, a]);
        })(a);
        let i = (function (e) {
          let {
              activeAssetIdRef: t,
              focusInCardRef: a,
              open: r,
              pointerInCardRef: i,
              previewRef: n,
              previewToggleRef: o,
              scheduleClose: l,
            } = e,
            c = (0, s.useCallback)(
              (e, t) => {
                "touch" === t.pointerType ||
                  t.currentTarget.closest('[data-box-selecting="true"]') ||
                  r(e, t.currentTarget, !0, "pointer");
              },
              [r],
            ),
            d = (0, s.useCallback)(
              (e) => {
                t.current === e.assetId && ((i.current = !1), l(e.assetId));
              },
              [t, i, l],
            ),
            u = (0, s.useCallback)(
              (e, a) => {
                (t.current === e.assetId && i.current) ||
                  r(e, a.currentTarget, !1, "focus");
              },
              [t, r, i],
            ),
            m = (0, s.useCallback)(
              (e, r) => {
                var s;
                t.current !== e.assetId ||
                  ((a.current = !1),
                  (r.relatedTarget instanceof Node &&
                    (null == (s = n.current)
                      ? void 0
                      : s.contains(r.relatedTarget))) ||
                    l(e.assetId));
              },
              [t, a, n, l],
            ),
            p = (0, s.useCallback)(
              (e, a) => {
                t.current === e.assetId &&
                  "Tab" === a.key &&
                  !a.shiftKey &&
                  o.current &&
                  (a.preventDefault(), a.stopPropagation(), o.current.focus());
              },
              [t, o],
            );
          return (0, s.useMemo)(
            () => ({
              onBlur: m,
              onFocus: u,
              onKeyDown: p,
              onPointerEnter: c,
              onPointerLeave: d,
            }),
            [m, u, p, c, d],
          );
        })(a);
        return (0, r.jsxs)(t5.Provider, {
          value: i,
          children: [t, (0, r.jsx)(t8, { runtime: a })],
        });
      }
      function t8(e) {
        let { runtime: t } = e,
          {
            clearCloseTimer: a,
            close: s,
            focusInCardRef: i,
            focusInPreviewRef: n,
            pointerInCardRef: o,
            pointerInPreviewRef: l,
            preview: c,
            previewRef: d,
            previewToggleRef: u,
            scheduleClose: m,
          } = t;
        return c
          ? (0, r.jsx)(t0, {
              durationMs: c.durationMs,
              onBlur: (e) => {
                n.current = !1;
                let t =
                  e.relatedTarget instanceof Element
                    ? e.relatedTarget.closest("[data-asset-card]")
                    : null;
                (null == t ? void 0 : t.dataset.assetId) !== c.assetId &&
                  m(c.assetId);
              },
              onFocus: () => {
                ((n.current = !0), a());
              },
              onPointerEnter: () => {
                ((l.current = !0), a());
              },
              onPointerLeave: () => {
                ((l.current = !1), o.current || i.current || n.current)
                  ? m(c.assetId)
                  : s(c.assetId);
              },
              onRequestClose: () => s(c.assetId),
              playbackUrl: c.playbackUrl,
              ref: d,
              session: c.session,
              title: c.title,
              toggleButtonRef: u,
            })
          : null;
      }
      function t6(e) {
        let {
            selected: t,
            pending: a,
            disabledReason: s,
            onToggle: i,
            inline: o,
            lightTextPrimary: c = !1,
          } = e,
          u = (0, n.r8m)(t);
        return (0, r.jsx)(d.Bc, {
          children: (0, r.jsxs)(d.m_, {
            children: [
              (0, r.jsx)(d.k$, {
                asChild: !0,
                children: (0, r.jsx)(l.K0, {
                  "aria-pressed": t,
                  busy: a,
                  disabledReason: s,
                  "data-asset-favorite": "",
                  label: u,
                  icon: (0, r.jsx)(l.OEz, { filled: t, size: 16 }),
                  onClick: (e) => {
                    (e.stopPropagation(),
                      !a &&
                        (i(),
                        o && t && e.detail > 0 && e.currentTarget.blur()));
                  },
                  onPointerEnter: (e) => e.stopPropagation(),
                  onKeyDown: (e) => {
                    ("Enter" === e.key || " " === e.key) && e.stopPropagation();
                  },
                  variant: "compact-on-media",
                  className: (0, l.cn)(
                    "absolute cursor-pointer z-canvas-asset-library-card-overlay border-0 bg-transparent aria-pressed:bg-transparent hover:bg-transparent active:bg-transparent aria-pressed:hover:bg-transparent aria-pressed:active:bg-transparent",
                    o
                      ? "right-canvas-asset-library-document-inset top-1/2 -translate-y-1/2"
                      : "right-canvas-asset-library-card-favorite-inset top-canvas-asset-library-card-favorite-inset hover:bg-transparent aria-pressed:hover:bg-transparent",
                    t
                      ? "text-dreamina-functional-warning"
                      : (0, l.cn)(
                          o && "text-dreamina-text-primary",
                          c &&
                            "[[data-dreamina-theme=light]_&]:text-dreamina-text-primary",
                          "opacity-dreamina-media-action-hidden group-hover/favorite:opacity-dreamina-media-action-visible group-focus-within/favorite:opacity-dreamina-media-action-visible",
                        ),
                  ),
                }),
              }),
              (0, r.jsx)(d.ZI, { children: s ?? u }),
            ],
          }),
        });
      }
      let t7 = "absolute z-10";
      function ae(e) {
        var t, a, i;
        let {
            "aria-describedby": n,
            assetCategory: o,
            favorite: c,
            assetId: d,
            children: u,
            className: m,
            disabledReason: p,
            label: h,
            onBlur: v,
            onClick: g,
            onDisabledActivate: b,
            onFocus: f,
            onKeyDown: y,
            onPointerEnter: x,
            onPointerLeave: j,
            selected: S,
            selectionFrame: C = "border",
            selectionMode: w,
            selectionIndicatorClassName: M = "left-[8px] top-[8px]",
            style: I,
            surface: N = "default",
          } = e,
          k = !!p && !S,
          T = (0, s.useCallback)(() => {
            if (k) {
              null == b || b();
              return;
            }
            g();
          }, [k, g, b]),
          A = (0, s.useCallback)(
            (e) => {
              (null == y || y(e),
                e.defaultPrevented ||
                  ("Enter" !== e.key && " " !== e.key) ||
                  (e.preventDefault(), T()));
            },
            [T, y],
          ),
          D = null;
        p && (D = (0, r.jsx)(at, {}));
        let z = null;
        "multiple" === w && (z = (0, r.jsx)(aa, { className: M, selected: S }));
        let R = (function (e, t, a) {
            if ("background" === e || "none" === e) return "border-0";
            if ("border" === e)
              return `border-2 data-[box-selected=true]:border-white ${t ? "border-white" : "border-transparent"}`;
            let r = "";
            return (
              t && (r = "after:shadow-canvas-asset-library-selection-frame"),
              t ||
                a ||
                (r =
                  "hover:after:shadow-canvas-asset-library-selection-frame focus-visible:after:shadow-canvas-asset-library-selection-frame"),
              `border-0 after:pointer-events-none after:absolute after:inset-0 after:z-canvas-asset-library-card-overlay after:rounded-canvas-asset-library-selection-frame after:content-[''] data-[box-selected=true]:after:shadow-canvas-asset-library-selection-frame ${r}`
            );
          })(C, S, !!p),
          P =
            ((t = C),
            (a = S),
            (i = N),
            "background" === t
              ? `${a ? "bg-dreamina-block-primary-default" : "bg-transparent"} data-[box-selected=true]:bg-dreamina-block-primary-default`
              : "secondary" === i
                ? "bg-dreamina-block-secondary-default"
                : "!bg-white/[0.07]"),
          F = (function (e, t, a, r, s) {
            return t
              ? "cursor-not-allowed"
              : s && "background" === e && !a
                ? "cursor-pointer"
                : `cursor-pointer ${"background" === e ? `${a ? "hover:bg-dreamina-block-primary-default" : "hover:bg-dreamina-block-secondary-hover"} active:bg-dreamina-block-primary-default` : "secondary" === r ? "" : "hover:!bg-white/[0.09]"}`;
          })(C, k, S, N, (null == c ? void 0 : c.inline) === !0),
          E = (0, r.jsxs)("div", {
            "aria-describedby": n,
            "aria-disabled": !!k || void 0,
            "aria-label": p ? `${h}. ${p}` : h,
            "aria-selected": S,
            className: `group relative box-border flex items-center justify-center overflow-hidden p-0 text-left whitespace-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-dreamina-text-primary ${P} ${R} ${F} ${m} ${c ? `h-full ${"none" === C ? "" : "group-focus-within/favorite:after:shadow-canvas-asset-library-selection-frame"}` : ""} ${(null == c ? void 0 : c.inline) ? "pr-canvas-asset-library-card-favorite-space" : ""} ${c && !p && "inset-ring" === C ? "group-hover/favorite:after:shadow-canvas-asset-library-selection-frame" : ""}`,
            "data-asset-card": o,
            "data-asset-id": d,
            "data-selected": S || void 0,
            onBlur: v,
            onClick: T,
            onFocus: f,
            onKeyDown: A,
            onPointerEnter: x,
            onPointerLeave: j,
            role: "option",
            style: I,
            tabIndex: 0,
            children: [u, D, z],
          });
        return c
          ? (0, r.jsxs)("div", {
              className: (0, l.cn)(
                m,
                "group/favorite relative overflow-hidden bg-transparent",
                c.inline &&
                  "hover:rounded-canvas-asset-library-document-card hover:bg-dreamina-block-secondary-hover",
              ),
              children: [
                E,
                !c.inline &&
                  !1 !== c.overlay &&
                  (0, r.jsx)("span", {
                    "aria-hidden": "true",
                    className: `pointer-events-none absolute inset-x-0 top-0 h-canvas-asset-library-card-favorite-gradient rotate-180 bg-canvas-asset-library-subject-duration ${c.selected ? "" : "opacity-dreamina-media-action-hidden group-hover/favorite:opacity-dreamina-media-action-visible group-focus-within/favorite:opacity-dreamina-media-action-visible"}`,
                  }),
                (0, r.jsx)(t6, { ...c }),
              ],
            })
          : E;
      }
      function at() {
        return (0, r.jsx)("span", {
          "aria-hidden": "true",
          className: `${t7} bg-black/45 pointer-events-none inset-0`,
          "data-asset-disabled-overlay": !0,
        });
      }
      function aa(e) {
        let { className: t, selected: a } = e;
        return (0, r.jsx)("span", {
          "aria-hidden": "true",
          className: `${t7} flex size-4 items-center justify-center rounded-[4px] border border-dreamina-on-media-text-placeholder bg-dreamina-bg-mask-60 backdrop-blur-dreamina-medium ${t}`,
          "data-asset-selection-indicator": !0,
          children: (0, r.jsx)(l.y4r, {
            className: `size-3 text-dreamina-on-media-text-primary ${a ? "opacity-100" : "opacity-0 group-data-[box-selected=true]:opacity-100"}`,
          }),
        });
      }
      var ar = a(13739);
      let as = (0, s.memo)(function (e) {
        let { timeMs: t, showGradient: a = !0 } = e,
          s = void 0 === t ? void 0 : Math.max(0, Math.round(t / 1e3)),
          i =
            void 0 === s
              ? "--:--"
              : `${Math.floor(s / 60)
                  .toString()
                  .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
        return (0, r.jsx)("span", {
          className: (0, l.cn)(
            "pointer-events-none absolute inset-x-0 bottom-0 z-canvas-asset-library-card-overlay flex h-canvas-asset-library-subject-duration items-end pb-canvas-asset-library-subject-duration-inset pl-canvas-asset-library-subject-duration-inset pr-canvas-asset-library-subject-duration-edge pt-canvas-asset-library-subject-duration-edge font-dreamina-number text-dreamina-number-12 font-dreamina-regular leading-canvas-asset-library-subject-duration text-dreamina-on-media-text-primary tabular-nums",
            a &&
              "bg-canvas-asset-library-subject-duration group-has-[[data-asset-preview-status=error]]:bg-none",
          ),
          "data-asset-duration": !0,
          "data-testid": "canvas-asset-library-duration",
          children: i,
        });
      });
      function ai(e) {
        var t;
        let a,
          {
            asset: i,
            favorite: o,
            disabledReason: l,
            selected: c,
            onDisabledActivate: d,
            onToggle: u,
            selectionMode: m,
          } = e,
          p =
            (null == (t = i.title) ? void 0 : t.trim()) || (0, n.ieq)("audio"),
          h = (0, n.evv)(i.category, p),
          v = "audio" === i.presentation.kind ? i.presentation : void 0,
          g = null == v ? void 0 : v.musicCard,
          b = null == v ? void 0 : v.playbackUrl,
          f = (0, s.useContext)(t5);
        !l &&
          b &&
          f &&
          (a = {
            assetId: i.assetId,
            durationMs: null == v ? void 0 : v.durationMs,
            playbackUrl: b,
            title: p,
          });
        let y =
          (null == v ? void 0 : v.durationMs) === void 0
            ? null
            : (0, r.jsx)(as, { timeMs: v.durationMs });
        return (0, r.jsxs)("div", {
          className:
            "flex flex-col items-start gap-canvas-asset-library-audio pb-canvas-asset-library-audio-card-bottom",
          children: [
            (0, r.jsxs)(ae, {
              favorite: o,
              assetCategory: i.category,
              assetId: i.assetId,
              className:
                "aspect-square w-full rounded-canvas-asset-library-audio-preview",
              disabledReason: l,
              label: h,
              onBlur: a ? (e) => (null == f ? void 0 : f.onBlur(a, e)) : void 0,
              onClick: () => u(i),
              onDisabledActivate: d,
              onFocus: a
                ? (e) => (null == f ? void 0 : f.onFocus(a, e))
                : void 0,
              onKeyDown: a
                ? (e) => (null == f ? void 0 : f.onKeyDown(a, e))
                : void 0,
              onPointerEnter: a
                ? (e) => (null == f ? void 0 : f.onPointerEnter(a, e))
                : void 0,
              onPointerLeave: a
                ? () => (null == f ? void 0 : f.onPointerLeave(a))
                : void 0,
              selected: c,
              selectionFrame: "inset-ring",
              selectionMode: m,
              children: [
                (0, r.jsx)(an, {
                  fallbackCoverUrl: null == v ? void 0 : v.fallbackCoverUrl,
                  musicCard: g,
                }),
                y,
              ],
            }),
            (0, r.jsx)("span", {
              className:
                "max-h-canvas-asset-library-audio-title w-full truncate text-center font-dreamina-cn text-dreamina-cn-12 font-dreamina-medium leading-canvas-asset-library-audio-title text-dreamina-text-primary",
              "data-asset-audio-title": !0,
              title: p,
              children: p,
            }),
          ],
        });
      }
      function an(e) {
        let { fallbackCoverUrl: t, musicCard: a } = e;
        return a
          ? (0, r.jsxs)("span", {
              className: "relative block h-full w-full",
              "data-testid": "canvas-asset-library-audio-music-card",
              children: [
                (0, r.jsx)(ar.X, {
                  alt: "",
                  className: "h-full w-full object-cover",
                  "data-audio-music-base": !0,
                  decoding: "async",
                  loading: "lazy",
                  src: a.baseUrl,
                }),
                (0, r.jsx)("span", {
                  className:
                    "absolute inset-0 flex items-center justify-center",
                  children: (0, r.jsx)("span", {
                    className:
                      "h-[64%] w-[64%] overflow-hidden rounded-full bg-white/[0.07] shadow-[0_8px_24px_rgb(0_0_0/0.45)]",
                    children: (0, r.jsx)(ar.X, {
                      alt: "",
                      className: "h-full w-full object-cover",
                      "data-audio-music-cover": !0,
                      decoding: "async",
                      loading: "lazy",
                      src: a.coverUrl,
                    }),
                  }),
                }),
              ],
            })
          : t
            ? (0, r.jsx)(ar.X, {
                alt: "",
                className: "h-full w-full object-cover",
                decoding: "async",
                loading: "lazy",
                src: t,
              })
            : (0, r.jsx)("span", {
                className:
                  "flex h-full w-full items-center justify-center text-octo-workbench-text-secondary",
                children: (0, r.jsx)(t$.tz, {}),
              });
      }
      function ao(e) {
        let t,
          {
            asset: a,
            favorite: s,
            disabledReason: i,
            mediaWallCornerClassName: o,
            selected: l,
            onDisabledActivate: c,
            onToggle: d,
            selectionMode: u,
          } = e,
          m = (0, n.evv)(a.category, a.title),
          p = "document" === a.presentation.kind ? a.presentation : void 0,
          h =
            (null == p ? void 0 : p.updatedAtMs) ??
            (null == p ? void 0 : p.createdAtMs),
          v = null;
        return (
          void 0 !== h &&
            (v = (0, r.jsx)("span", {
              className:
                "font-dreamina-number text-dreamina-number-12 font-dreamina-regular leading-canvas-asset-library-document-metadata text-dreamina-text-tertiary",
              "data-asset-document-date": !0,
              children: Number.isNaN((t = new Date(h)).getTime())
                ? ""
                : (0, n.Av0)(t.getFullYear(), t.getMonth() + 1, t.getDate()),
            })),
          (0, r.jsx)(ae, {
            favorite: s ? { ...s, inline: !0 } : void 0,
            assetCategory: a.category,
            assetId: a.assetId,
            className: `h-canvas-asset-library-document-card w-[374px] rounded-canvas-asset-library-card data-[box-selected=true]:rounded-canvas-asset-library-document-card hover:rounded-canvas-asset-library-document-card active:rounded-canvas-asset-library-document-card ${o ?? ""}`,
            disabledReason: i,
            label: m,
            onClick: () => d(a),
            onDisabledActivate: c,
            selected: l,
            selectionFrame: "background",
            selectionMode: u,
            children: (0, r.jsxs)("span", {
              className:
                "flex h-full min-w-0 flex-1 items-center gap-canvas-asset-library-document-content-gap py-canvas-asset-library-document-inset pl-canvas-asset-library-document-inset pr-canvas-asset-library-document-edge",
              "data-asset-document-card": !0,
              children: [
                (0, r.jsx)("span", {
                  className:
                    "relative flex size-10 shrink-0 items-center justify-center",
                  "data-asset-document-icon": !0,
                  children: (0, r.jsx)("img", {
                    alt: "",
                    className: "block size-10 max-w-none",
                    "data-asset-document-thumbnail": !0,
                    draggable: !1,
                    height: 40,
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yNjkxNV8yMjU2NzQpIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0idXJsKCNwYXR0ZXJuMF8yNjkxNV8yMjU2NzQpIi8+CjwvZz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMF8yNjkxNV8yMjU2NzQiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwXzI2OTE1XzIyNTY3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xMjUpIHNjYWxlKDAuMDEwNDE2NykiLz4KPC9wYXR0ZXJuPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzI2OTE1XzIyNTY3NCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxpbWFnZSBpZD0iaW1hZ2UwXzI2OTE1XzIyNTY3NCIgd2lkdGg9IjcyIiBoZWlnaHQ9Ijk2IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVnQUFBQmdDQVlBQUFDK0VqUWNBQUFBQ1hCSVdYTUFBQllsQUFBV0pRRkpVaVR3QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBQU9kRVZZZEZOdlpuUjNZWEpsQUVacFoyMWhuckdXWXdBQUNpWkpSRUZVZUFIdFhUdU1KVWNWdmRYejhZenRsY2FTNVpVMzJSbHZnSVN3a1NBQkVYbHRNaVJJU0x3QkVXUkdKb01JQW5MekNZbVF3QkVTT045UEFvTEVCRmhZY2pBNzYyU3RXY25lTjU2WmZXOW4vTHBjdDdwdTllM2IxVjNWN3pQdk44ZnFmZjEvVmFmUFBYV3JxdDlZZ1VHLzMvLzFjRGg4UnltMUEvT1BCMW1XdmI2OXZmMEFMZ0RxeVpNbjcycXQzNEVGZ25tUUQ4eHlJU1NwMDlQVHgrWnpFWlFqOGVEOC9Qem16czdPQVV3UlNKQ21qZjFIV3pBTzhFYXF3LzZ1ZUdaZHc3V2RNOGd5WCtTcGgxdkdON1FXU3k3M2FiZnc3Zkk0MUk3ei9hRjd1YzljSjN3dndPQmN3ZUVYRzd6SXUzbXU3eGtQM1RYblRPSVoxTEJlSVFnTEtrNVFPblNaYmxnZlk1L1c0VU9LNzFCZ0NKSDNNT1RBdmFPandVMUQwb0h4SnBnVThNRlVDTXBGSWZITGRMQmk4a1o0THR1bTYxdk9vZk5Vd3pGL05TK1Rydk5ZbktKM056Zmg3bUF3ZU4wYy84UVdld0xBK29zUUszV042N2xkU3FtSDF1bUI1cnBjaXJBU1lRWVFDRDIzRHRYN1VWalZ2dCtjZVo2SDY0NGtZYmdkSGZVbUZtNVlob0FIYVYvNG9uU0JDckVLQXp2R0Y5MWhBWEdmeXY3Y2VWUmVyT2ZEdHJycjNZMk5UVlRTZFpoTXU2Q3l3RDYyYWdQQWZ0UVdnUEQrQ1M3VjRuQVcyNENlWkkzN09vd0pFMkk2Q3g5QTZwUXJxSm82RWVGRnVUSW9SbEthdVdDNElVbTlYbjhQeGxUU09nVFpLVmVMVDZzWHVGaG9jUHExbitnL0dQN0RQUEZxWjl4R1NUZTN0cllQekI2RmlvQU9xSGtRd2ovQkREOHprNVJsTTFLUjh0OXJTK21lVmlwQlJKTFcrVjFqM0hzd0FtcXRXQ2xuVmZ5WFVKR3M0LzZtYytycnhZWWxTUmNxVWlPbzJJakFHdmZSMGRFdWpCQUdnaUJ3NXF1OENkdVRuQmZRSjErb0V2d2N1NTZGenc5ZEcxbzN3dldrQWYrRVVZQ3QyOGJkWHE5N0NsQTNhVldhTTBEcFAvd3pXRmwyRGwvYUNHb2xEd1J4VEQ5ZHdvekJlRktSQXFTU0ZQU2dLa1o3WHBNRUw0RjJXM2srb281c01wbmZ3M0JMSmFtVklQS0VtVUcwT1Y2ZzQ4RW5rekdTc05tTEtDZ2hMNXNpcUs5V0pXWVNUOHkyYnZkY3h0MTZZak5CczQ4dVM0eTBtMGtWQzFzM0pDbVdURFlUcENkYm9GRWh2eDlIRjg2SE1CRWdTWnVidVduZGl2RWtHWEpSazZhZTlueGhzbytzSUVsYlQ4Sk1tNU5VU3hSclJWRnpFV2tXUGorYlFvR29kVE41MHA3c2pzUk5HdVlKUldtK25NN29xa3NtKzN0Y1JWR0M1a1ZCQkR0RU5GcWltQUliYmtXM3hKS2tGczZEc05TOUU1Z2FpbEVBVkpKTkp2WENlQkFCSDlqcFV3V1BldE1yR1hWd2pYSHZyVGVlcGR4Z2VqWkhxVFNVRCt6UUVQVFpGd0RQYmJtcEpudDZnOTZWR3dsUTVZaUE3L2ZSdXBISzJwcUNGNThmdW5rM3ZUc2M2cit2dDVVcm5tZFBHMWg4bDAvVHFodENVellmVXZENXNhNk9tWWZ1b3VpNjhsYkZhS1hKY3h3NXhiZ1hRUDlzQTY2L2VFYlhmWE85c1Z4ZU9CcG1HV2lLbEF6VTVjQWFGdVBrZUlBcURaR1NLcnFaMjlCT2JmWmZuS2gwcmZ2Z3JIcUg1aENiTFM4ZVJBNHBRN2t3MFpqRVlWZUVpWXpBeitmN1Fsc1VtZ1ZoeXM2Z2NMUjZFRkFCWjBpVVZSQ3R1NUhGVEdrYk1OZ1FXeHR3NFZVaE1ucGZsblE2bFlLcUV4dFYwRXlIT3l4S2lhQm4yQzN5RFYza1JCU0dwTGJVKzlvNUVrVzJyVzNxSTJlU20wMmF4ZjVNUTQyWDE0V1hIYmZPZVBncE4rRTVTa0ZMWHdyVmM3MzFValVIVnVTYlp1M0RIY254bzRwck9LaFA1SFROYkwxMi9MYU1tSFdJM1dJT2pKcWcyQk1qQlZHMnIwanFMaFdnZjBQRkwvY1RRYzNFUmdtYWk2WU15R2VLSmg2OW91aDBPMjN4SXRxS3BwZlo4MEx2SkFnMDUwR1ZXOHdEU2NxYmNhR2UwanQ0eXNaMk4wYWJLay8zdVZSQmZwa2ZFYUlLbW5Vekw4RmZrQ3FIYmxUb0k5N1VRMEZNYnB0Q1hZaFRuQlAzSUpoUHFFcUNXSHFUb24zeXN3bW9JRldhdFh3OVlzRUd6QVQ0ZEllVVRRY1orUjZJNzgrVWlNNXF6Rk40VFF0ZWJBRTFSR2MxVmdGZWJBRXh4RWNVVjRBb3FxSi83WTlodnFlZUx3Z1ZCWW42em54SWJKN1F6WU5XQ0h5c1NXTGxDWXFsU2ZHK1dJZWV4aS8vZEFJZjN2L1NiLy9vZTgvQVQzK3dQZloxUC8vak1ldy9MQ2ZrYjF4Ymc1TytodWUybFJtMFYvQ2FtWHQ0OVpWaTZRb2NsUnkyTkVUeFdZME9KbjMvWWZXdGdwTkJ2QWxFWWpnNWlKZGVxQXA3WDl6M0QyOWY4ZGZlL3VBTS9ucG5BSEFINEtxNTdxMDN0dUROYjI5Q0tpcER1bDA5aUE5M3huQnF5RGdWaER4NkhKOEN4UXBLdlBMeW1sKy8vK213OFJncTVoYy9maForNXRSMmFMN3YzYjg5Z2JlTjRnNGZKMDYvMHRBeWhFbWFXS0lvMVlPSUZSS1AzLzV2Z0tCckpRbW4vV3BCbnQrdVMvcUhKaVF4TEhsWmZ2dVhVMGdDdTczeS81U0l6ODBuaGxpSW9KTitPOHZ2M1I3VTlxRkMwRmVhN3NzVnhQSFdtMXUxNjBMM2IwS0lITVRFWHNINzhLRHdrYXZNUDBKaFJ5RDE4RW9ocFA4ODZsVlZ1TmRBa0RWcllkSWhkWGJGeEY3Qm80cklscVJKUmZSMHYvdjF5aThJNFlZZ1lGOTQwTlVYbW9zczFZVVBJZG1MR2hCL0JTK1JLR3hwOENtK0txYjdRMFpONnNIS3lrcEpnbXNoZGkyc29DYWtOQlM2dGxJaXFxQ1VFS05tR3ZNVGFhS2hKMGpxd1NhWlFwTlFNV2dSb3ZnQVpFaU9pNG9BQXVPMFlZSUN2ZG8yRUFtb25wcUhDSUs0ZWpCZjRSNGpDWkRxdVJGUlQraGhQQnNobEF0QUI1TGlNRUVxdU5xSUErY1RHQjd5Q1V1VDV1ckJZekpEYnJ1MnFRVWpIUGJxQk4zb0VKSXFXVUgyYkVpZWh5TWp4ZkNRSnNxemFhbWVXQk11ajcvVVl0Qklwc3pJWDB2c2V2aFpqbVFGMmJPaE1sN2JCcXdJVnByVTB4UW1YRDN5R09JYnd1RGJzbWlKZi8vL3ZMYnZqVytsZFRsRzY4Mm5Kb2ltRXZqMGVIN0NqWnJDUktvSElRMDZsZ08xK2NsN2Q2cEpJZitlR0NvS0VtaFZVRW9MUmliTTh4ZGVVVEpPU3RwSVBmWmFRWUQwaS8xRWs4YituRFJvL2oycDZPWkJEakdTS0V4NC9uSjFwM3JiL3hsdnVQTkJWVDNTb0d2K2t4aGVTSXhVejYyT1Bmb0t1dlRGVXNhazd6T0Ric0w3LzNwcUs4S2ZhaXdCbEozVWtFSGpQWDlseHBLNGVwQWM3SmQxUVNXckVZSVllK29adzBSMk1HVkw5cCtQem11ZTBMVUY0eUdNNnZ1SElmMzlmejcxSG9jdEZqNkFVUWJOS25QMVhWNS9zUzhLdEpCRFlmSWQwWjhLUFczcENiVU1XaEFrL1FuVEJmUWF2QTViTFB4dUpQMzdoblQ4L2xHSUliUk4rNHoxQWhWMlJHOEZuaHBXOXBZZ1JIb0NWb3FUSWtOc0wzQVBiQkF3VzhjT0xoNXY2N2ltZ21aNjhISFEyeU9WNC93UExIMzhjTFA0dGJKL3diSDQ5WEhucnYwQ0lhYy81dUwrTkJCdWYrM2xjcGlrdFprUE5YdkxobGdWTCtmRkdDNG5EbFBRTlZGY2hjbjUwZDd1OEFObVMyNUNFbDE2OHl2QmpSSjVrRUMwcTdIc2lJbWdlY2gxUldEL3dneXdsOUdUVEpvUHVTNjdqTFRvTFhUcHpmczdMREg0MjhLWGVWQURpS1NwREpndE9tb09NcTJYRnhZVnVRNzhOSVZoNVZzeEZka1JiY1ZXS3BIdU9qZGZETGN1ZVl5TlBEY1BOTUsyM0JLcStVL1hFRnQyVlA2QVM2ZG1ucWxvMlRIYXpHckxSY3VHeXR4OGx6eW8ydy8xRnhkdGRWenNYeHhPRUUzMXpHSVhMSDB6NzlCVXk2enRnbFZvNWl2TUJLcTZ5UC9ybW90QUw4dnovUGR3aVNCTTlQelpDdXo0K1BoM1daYjlCQzZWUk9paGNLNWN1ZkticndEQ2RYVnJFWGgrZXdBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KPC9kZWZzPgo8L3N2Zz4K",
                    width: 40,
                  }),
                }),
                (0, r.jsxs)("span", {
                  className: "flex min-w-0 flex-1 flex-col items-start",
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "w-full truncate font-dreamina-cn text-dreamina-cn-12 font-dreamina-medium leading-canvas-asset-library-document-metadata text-dreamina-text-primary",
                      "data-asset-document-title": !0,
                      children: a.title || m,
                    }),
                    v,
                  ],
                }),
              ],
            }),
          })
        );
      }
      var al = a(39580);
      function ac(e) {
        let {
            fit: t = "contain",
            onElapsedTimeChange: a,
            playbackUrl: i,
            posterUrl: n,
          } = e,
          o = (0, s.useRef)(null),
          l = (0, s.useRef)(null),
          [c, d] = (0, s.useState)(!1),
          u = (0, s.useCallback)(
            (e) => {
              let t = 1e3 * Math.max(0, Math.floor(e / 1e3));
              l.current !== t && ((l.current = t), a(t));
            },
            [a],
          );
        return (
          (0, s.useEffect)(() => {
            let e = o.current;
            if (e)
              return (
                (l.current = null),
                (e.currentTime = 0),
                (e.muted = !0),
                u(0),
                e.play().catch(() => {
                  o.current === e && ((0, al.BB)(e), d(!1));
                }),
                () => {
                  (0, al.BB)(e);
                }
              );
          }, [i, u]),
          (0, r.jsx)("video", {
            "aria-hidden": "true",
            autoPlay: !0,
            className: `pointer-events-none absolute inset-0 z-[5] h-full w-full bg-dreamina-bg-mask-80 ${"contain" === t ? "object-contain" : "object-cover"} transition-opacity duration-100 ${c ? "opacity-100" : "opacity-0"}`,
            crossOrigin: "anonymous",
            "data-testid": "canvas-asset-library-video-preview",
            muted: !0,
            onPlaying: () => d(!0),
            onTimeUpdate: (e) => {
              u(1e3 * e.currentTarget.currentTime);
            },
            playsInline: !0,
            poster: n,
            preload: "metadata",
            ref: o,
            src: i,
            tabIndex: -1,
          })
        );
      }
      function ad(e, t) {
        let [a, r] = (0, s.useState)(),
          [i, n] = (0, s.useState)(0),
          o = (0, s.useCallback)(
            (t) => {
              e &&
                "touch" !== t.pointerType &&
                (0, al.hd)("pointer") &&
                (n(0), r(e));
            },
            [e],
          ),
          l = (0, s.useCallback)(() => {
            r(void 0);
          }, []),
          c = !!e && a === e;
        return {
          active: c,
          onPointerEnter: o,
          onPointerLeave: l,
          setElapsedTimeMs: n,
          visibleTimeMs: c ? i : t,
        };
      }
      function au(e) {
        var t, a;
        let {
            asset: s,
            favorite: i,
            disabledReason: o,
            mediaWallCornerClassName: l,
            selected: c,
            onDisabledActivate: d,
            onToggle: u,
            selectionMode: m,
          } = e,
          p = (0, n.evv)(s.category, s.title),
          h = s.presentation,
          v = "image" === h.kind || "video" === h.kind ? h.previewUrl : void 0,
          g = "video" === h.kind ? h.durationMs : void 0,
          b = o || "video" !== h.kind ? void 0 : h.playbackUrl,
          f = ad(b, g),
          y =
            void 0 === f.visibleTimeMs
              ? null
              : (0, r.jsx)(as, { timeMs: f.visibleTimeMs }),
          x = (0, r.jsxs)(ae, {
            favorite: i,
            assetCategory: s.category,
            assetId: s.assetId,
            className: `aspect-square w-full rounded-canvas-asset-library-card ${l ?? ""}`,
            disabledReason: o,
            label: p,
            onClick: () => u(s),
            onDisabledActivate: d,
            selected: c,
            selectionFrame: "inset-ring",
            selectionMode: m,
            children: [
              ((t = h),
              (a = p),
              "image" === t.kind
                ? t.previewUrl
                  ? (0, r.jsx)(ar.X, {
                      alt: "",
                      className: "h-full w-full object-cover",
                      decoding: "async",
                      loading: "lazy",
                      src: t.previewUrl,
                    })
                  : (0, r.jsx)(am, { category: "image", label: a })
                : "video" === t.kind
                  ? t.previewUrl
                    ? (0, r.jsx)(ar.X, {
                        alt: "",
                        className:
                          "h-full w-full bg-dreamina-bg-mask-80 object-contain",
                        decoding: "async",
                        loading: "lazy",
                        src: t.previewUrl,
                      })
                    : (0, r.jsx)(am, { category: "video", label: a })
                  : null),
              y,
            ],
          });
        if (!b) return x;
        let j = null;
        return (
          f.active &&
            (j = (0, r.jsx)(ac, {
              onElapsedTimeChange: f.setElapsedTimeMs,
              playbackUrl: b,
              posterUrl: v,
            })),
          (0, r.jsxs)("div", {
            className: "relative aspect-square w-full",
            "data-testid": "canvas-asset-library-video-card",
            onPointerEnter: f.onPointerEnter,
            onPointerLeave: f.onPointerLeave,
            children: [x, j],
          })
        );
      }
      function am(e) {
        let { category: t, label: a } = e;
        return (0, r.jsxs)("span", {
          className:
            "flex h-full w-full flex-col items-center justify-center gap-2 text-octo-workbench-text-secondary",
          children: [
            "image" === t ? (0, r.jsx)(l.kZC, {}) : (0, r.jsx)(t$.eD, {}),
            (0, r.jsx)("span", {
              className: "max-w-[85%] truncate text-xs",
              children: a,
            }),
          ],
        });
      }
      let ap = (0, s.memo)(function (e) {
          return "audio" === e.asset.category
            ? (0, r.jsx)(ai, { ...e })
            : "document" === e.asset.category
              ? (0, r.jsx)(ao, { ...e })
              : (0, r.jsx)(au, { ...e });
        }),
        ah = Array.from(
          { length: 24 },
          (e, t) => `asset-library-skeleton-${t + 1}`,
        );
      function av(e) {
        let { announcement: t, category: a, columnCount: s } = e,
          i = "document" === a,
          o = "audio" === a,
          c = i ? 6 : 4,
          d = i || o ? 8 : 2;
        return (0, r.jsxs)("div", {
          className: "h-full overflow-hidden",
          "data-testid": "canvas-asset-library-skeleton",
          children: [
            (0, r.jsx)("output", {
              className: "sr-only",
              children: t ?? (0, n.Ae$)(a),
            }),
            (0, r.jsx)("div", {
              "aria-hidden": "true",
              className: (0, l.cn)(
                "grid",
                !i &&
                  !o &&
                  "overflow-hidden rounded-canvas-asset-library-media-wall",
              ),
              style: {
                columnGap: d,
                gridTemplateColumns: `repeat(${s}, minmax(0, 1fr))`,
                rowGap: d,
              },
              children: ah
                .slice(0, s * c)
                .map((e) =>
                  (0, r.jsx)(ag, { category: a, documentLayout: i }, e),
                ),
            }),
          ],
        });
      }
      function ag(e) {
        let { category: t, documentLayout: a } = e;
        return a
          ? (0, r.jsx)("div", {
              className:
                "flex h-canvas-asset-library-document-card w-full items-center pl-canvas-asset-library-document-inset pr-canvas-asset-library-document-edge",
              "data-asset-skeleton-card": !0,
              children: (0, r.jsxs)("div", {
                className:
                  "flex w-full gap-canvas-asset-library-document-content-gap",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "size-10 shrink-0 rounded-canvas-asset-library-document-card bg-dreamina-block-secondary-default",
                    "data-asset-document-skeleton-preview": !0,
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "flex-1 rounded-canvas-asset-library-document-card bg-dreamina-block-secondary-default",
                    "data-asset-document-skeleton-title": !0,
                  }),
                ],
              }),
            })
          : "audio" === t
            ? (0, r.jsxs)("div", {
                className:
                  "flex flex-col items-start gap-canvas-asset-library-audio pb-canvas-asset-library-audio-card-bottom",
                "data-asset-skeleton-card": !0,
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "aspect-square w-full rounded-canvas-asset-library-audio-preview bg-dreamina-block-secondary-default",
                    "data-asset-skeleton-cover": !0,
                  }),
                  (0, r.jsx)(ab, {
                    insetClassName: "px-canvas-asset-library-audio",
                  }),
                ],
              })
            : (0, r.jsx)("div", {
                className:
                  "aspect-square w-full rounded-canvas-asset-library-card bg-dreamina-block-secondary-default",
                "data-asset-skeleton-card": !0,
              });
      }
      function ab(e) {
        let { insetClassName: t } = e;
        return (0, r.jsx)("div", {
          className: (0, l.cn)("w-full", t),
          children: (0, r.jsx)("div", {
            className:
              "h-canvas-asset-library-skeleton-line w-full rounded-canvas-asset-library-skeleton-line bg-dreamina-block-secondary-default",
            "data-asset-skeleton-title": !0,
          }),
        });
      }
      function af() {
        return (0, r.jsx)("output", {
          "aria-label": (0, n.$6d)(),
          className:
            "flex h-14 items-center justify-center text-dreamina-text-placeholder",
          "data-testid": "canvas-asset-library-load-more-spinner",
          children: (0, r.jsx)(l.bQB, { className: "size-5" }),
        });
      }
      function ay() {
        return (0, r.jsxs)("div", {
          "data-testid": "canvas-project-library-skeleton",
          id: "canvas-assets-project-grid",
          children: [
            (0, r.jsx)("output", {
              className: "sr-only",
              children: (0, eV.S_)(),
            }),
            (0, r.jsx)("div", {
              "aria-hidden": "true",
              className:
                "grid min-w-canvas-zero grid-cols-4 gap-canvas-asset-library-project-column",
              children: ah
                .slice(0, 12)
                .map((e) =>
                  (0, r.jsx)(
                    "div",
                    {
                      className:
                        "flex min-w-canvas-zero flex-col gap-canvas-asset-library-browser-card",
                      "data-canvas-project-skeleton-card": !0,
                      children: (0, r.jsx)("div", {
                        className:
                          "h-canvas-asset-library-project-skeleton-cover w-full rounded-dreamina-control bg-dreamina-block-secondary-default",
                        "data-canvas-project-skeleton-cover": !0,
                      }),
                    },
                    e,
                  ),
                ),
            }),
          ],
        });
      }
      let ax = '[data-testid="canvas-asset-library-virtual-list"]',
        aj =
          "right-[3px] group-hover/canvas-panel-scrollbar-overlay:right-[2px] group-data-[dragging=true]/canvas-panel-scrollbar-overlay:right-[2px]";
      function aS(e) {
        var t, a, i, n, o;
        let l,
          c,
          d,
          u,
          m,
          p,
          h,
          v,
          { interactionLocked: g = !1 } = e,
          f = eC(),
          j = eS((e) => e.activeCategory),
          S = eS((e) => e.pages[e.activeCategory]),
          w = eS((e) => e.selectedAssets),
          M = eS((e) => e.maxSelectedCount),
          I = eS((e) => e.maxSelectedCountByCategory),
          k = eS((e) => e.maxSharedSelectedCount),
          T = eS((e) => e.mutuallyExclusiveCategories),
          A = eS((e) => e.mutuallyExclusiveCategoryGroups),
          D = eS((e) => e.externalSharedOccupancy),
          z = eS((e) => e.occupiedSelectionIds),
          R = eS((e) => e.selectionMode),
          P = eS((e) => "importing" === e.importStatus),
          F = N(f, j),
          E =
            ((t = j),
            (l = ej()),
            (c = (0, s.useCallback)(() => l.loadMore(), [l])),
            (d = (0, s.useCallback)(() => l.retry(), [l])),
            (u = (0, s.useCallback)((e) => l.isAssetAlreadyCommitted(e), [l])),
            (m = (0, s.useCallback)((e) => l.isImportable(e), [l])),
            (p = (0, s.useCallback)(
              (e) => l.getAssetUnsupportedReason(e),
              [l],
            )),
            (h = (0, s.useCallback)(
              (e) => {
                l.setScrollOffset(e);
              },
              [l],
            )),
            (v = (0, s.useCallback)(
              (e) => {
                l.toggleAsset(e);
              },
              [l],
            )),
            {
              getUnsupportedReason: p,
              handleDisabledActivate: (0, s.useCallback)(
                (e) => {
                  l.reportSelectionBlocked(e, t);
                },
                [l, t],
              ),
              handleLoadMore: c,
              handleRetry: d,
              handleScrollEnd: h,
              handleToggle: v,
              handleUnsupportedActivate: (0, s.useCallback)(
                (e) => l.reportUnsupportedAssetActivation(e),
                [l],
              ),
              isAlreadyCommitted: u,
              isImportable: m,
            }),
          {
            getUnsupportedReason: U,
            handleDisabledActivate: L,
            handleLoadMore: V,
            handleRetry: Z,
            handleScrollEnd: B,
            handleToggle: W,
            isAlreadyCommitted: Q,
            isImportable: _,
          } = E,
          O = [...w.values()],
          Y = void 0 !== k && "document" !== j && x(O, z) + D >= k,
          G =
            (void 0 !== M && b(O, void 0, z) >= M) ||
            Y ||
            ((a = O),
            (i = j),
            (n = null == I ? void 0 : I[j]),
            (o = z),
            void 0 !== n && y(a, i, o) >= n),
          X = C(
            {
              mutuallyExclusiveCategories: T,
              mutuallyExclusiveCategoryGroups: A,
            },
            O,
            j,
          ),
          J = {
            category: F.category,
            categoryContainerRole: F.containerRole,
            categoryLabelledBy: F.labelledBy,
            interactionLocked: P || g,
            onLoadMore: V,
            onRetry: Z,
            onScrollEnd: B,
            onToggle: W,
            onUnsupportedActivate: E.handleUnsupportedActivate,
            page: S,
            isAlreadyCommitted: Q,
            isImportable: _,
            getUnsupportedReason: U,
            onDisabledActivate: L,
            selectedAssets: w,
            selectionCategoryMutuallyExcluded: X,
            selectionLimitReached: G,
            selectionMode: R,
          },
          $ = eS((e) => e.favoriteNotice);
        return (0, r.jsxs)("div", {
          className: "relative h-full",
          children: [
            $
              ? (0, r.jsx)("p", {
                  role: "alert",
                  className:
                    "absolute bottom-0 z-canvas-asset-library-card-overlay text-dreamina-text-primary",
                  children: $,
                })
              : null,
            (0, r.jsx)(aC, { ...J }),
          ],
        });
      }
      function aC(e) {
        let t = (0, s.useRef)(null),
          a = (function (e, t) {
            let [a, r] = (0, s.useState)(() => ({
                category: t,
                columnCount: aN(null, t),
              })),
              i = (0, s.useRef)(a),
              n = a.category === t ? a.columnCount : aN(null, t);
            return (
              (0, s.useLayoutEffect)(() => {
                let a = e.current;
                if (!a) return;
                let s = (e) => {
                  let a = aN(Math.round(e), t),
                    s = i.current;
                  if (s.category === t && s.columnCount === a) return;
                  let n = { category: t, columnCount: a };
                  ((i.current = n), r(n));
                };
                if (
                  (a.clientWidth > 0 && s(a.clientWidth),
                  "u" < typeof ResizeObserver)
                )
                  return;
                let n = new ResizeObserver((e) => {
                  let [t] = e;
                  s(
                    (null == t ? void 0 : t.contentRect.width) ?? a.clientWidth,
                  );
                });
                return (n.observe(a), () => n.disconnect());
              }, [t, e]),
              n
            );
          })(t, e.category);
        return (0, r.jsx)(aw, { ...e, columnCount: a, containerRef: t });
      }
      function aw(e) {
        let { columnCount: t, containerRef: a, ...s } = e,
          {
            category: i,
            categoryContainerRole: n,
            categoryLabelledBy: o,
            interactionLocked: c,
            page: d,
          } = s,
          u = `${i}:${d.queryKey}:${d.items.length}:${d.loadMoreStatus}`,
          m = (0, te._l)({ contentVersion: u, hostRef: a, scrollSelector: ax }),
          p = "ready" === d.status && d.items.length > 0 && m;
        return (0, r.jsxs)("div", {
          "aria-labelledby": o,
          "aria-busy": c || void 0,
          className: (0, l.cn)(
            "relative h-full min-h-0 select-none overflow-hidden px-6 pb-canvas-asset-library-content-bottom pt-canvas-asset-library-content-top",
            "group/canvas-panel-scrollbar",
          ),
          "data-asset-library-scroll": !0,
          "data-testid": "canvas-asset-library-viewport",
          id: `canvas-asset-panel-${i}`,
          ref: a,
          role: n,
          tabIndex: -1,
          children: [
            (0, r.jsx)(aM, { ...s, columnCount: t }),
            (0, r.jsx)(te.Lw, {
              contentVersion: u,
              edgeRef: a,
              hostRef: a,
              overflowing: p,
              scrollSelector: ax,
              thumbClassName: aj,
            }),
          ],
        });
      }
      function aM(e) {
        let {
          category: t,
          categoryLabelledBy: a,
          columnCount: s,
          getUnsupportedReason: i,
          interactionLocked: o,
          isAlreadyCommitted: c,
          isImportable: d,
          onDisabledActivate: u,
          onLoadMore: m,
          onRetry: p,
          onScrollEnd: h,
          onToggle: v,
          onUnsupportedActivate: g,
          page: b,
          selectedAssets: f,
          selectionCategoryMutuallyExcluded: y,
          selectionLimitReached: x,
          selectionMode: j,
        } = e;
        return "idle" === b.status || "loading" === b.status
          ? (0, r.jsx)(av, { category: t, columnCount: s })
          : "error" === b.status
            ? (0, r.jsx)(l.W5n, {
                className: "!text-red-300",
                message: (0, r.jsxs)("span", {
                  className: "flex flex-col items-center gap-3",
                  children: [
                    (0, r.jsx)("span", { children: (0, n.Ilc)() }),
                    (0, r.jsx)(l.$nd, {
                      onClick: p,
                      size: "sm",
                      variant: "secondary",
                      children: (0, n.cvC)(),
                    }),
                  ],
                }),
              })
            : 0 === b.items.length
              ? (0, r.jsx)(l.ppr, {
                  "aria-atomic": "true",
                  "aria-live": "polite",
                  className: "text-dreamina-text-placeholder",
                  role: "status",
                  title: (0, r.jsx)("span", {
                    className: "text-dreamina-text-placeholder",
                    children: (0, n.fWt)(t),
                  }),
                })
              : (0, r.jsx)(
                  aI,
                  {
                    category: t,
                    categoryLabelledBy: a,
                    columnCount: s,
                    getUnsupportedReason: i,
                    interactionLocked: o,
                    isAlreadyCommitted: c,
                    isImportable: d,
                    onDisabledActivate: u,
                    onLoadMore: m,
                    onScrollEnd: h,
                    onToggle: v,
                    onUnsupportedActivate: g,
                    page: b,
                    selectedAssets: f,
                    selectionCategoryMutuallyExcluded: y,
                    selectionLimitReached: x,
                    selectionMode: j,
                  },
                  `${t}:${b.queryKey}`,
                );
      }
      function aI(e) {
        var t, a, i, n, o;
        let c,
          {
            category: d,
            categoryLabelledBy: u,
            columnCount: m,
            getUnsupportedReason: p,
            interactionLocked: h,
            isAlreadyCommitted: v,
            isImportable: g,
            onDisabledActivate: b,
            onLoadMore: f,
            onScrollEnd: y,
            onToggle: x,
            onUnsupportedActivate: j,
            page: S,
            selectedAssets: C,
            selectionCategoryMutuallyExcluded: w,
            selectionLimitReached: M,
            selectionMode: I,
          } = e,
          N = (0, s.useRef)(null),
          k = (0, s.useRef)(null),
          T = (0, s.useId)();
        ((t = N),
          (a = S.scrollOffset),
          (c = (0, s.useRef)(a)),
          (0, s.useLayoutEffect)(() => {
            var e;
            null == (e = t.current) || e.scrollTo(c.current);
          }, [t]));
        let A = (0, s.useCallback)(() => {
          var e;
          y((null == (e = N.current) ? void 0 : e.scrollOffset) ?? 0);
        }, [y]);
        ((i = k),
          (n = h),
          (0, s.useEffect)(() => {
            let e = i.current;
            if (e)
              return (
                n ? e.setAttribute("inert", "") : e.removeAttribute("inert"),
                () => e.removeAttribute("inert")
              );
          }, [i, n]));
        let D = (0, s.useMemo)(
            () =>
              (function (e, t) {
                let a = [];
                for (let r = 0; r < e.length; r += t) a.push(e.slice(r, r + t));
                return a;
              })(S.items, m),
            [m, S.items],
          ),
          z = (0, r.jsx)("div", {
            ...{
              className:
                "h-full overflow-hidden rounded-canvas-asset-library-media-wall",
              "data-testid": "canvas-asset-library-media-wall-clip",
            },
            ref: k,
            children: (0, r.jsxs)(tJ.x8, {
              "aria-labelledby": u,
              "aria-multiselectable": "multiple" === I || void 0,
              className: (0, l.cn)(
                "h-full overflow-x-hidden",
                "document" === d && "rounded-canvas-asset-library-media-wall",
                (0, te.G9)({ lane: "none", overflowing: !1 }),
              ),
              "data-column-count": m,
              "data-layout": "document" === d ? "document-list" : "media-grid",
              "data-testid": "canvas-asset-library-virtual-list",
              id: T,
              itemSize: "document" === (o = d) ? 68 : "audio" === o ? 159 : 126,
              onScrollEnd: A,
              overscan: 3,
              ref: N,
              role: "listbox",
              tabIndex: 0,
              children: [
                D.map((e, t) => {
                  var a;
                  return (0, r.jsx)(
                    ak,
                    {
                      category: d,
                      columnCount: m,
                      getUnsupportedReason: p,
                      isAlreadyCommitted: v,
                      isImportable: g,
                      onDisabledActivate: b,
                      onToggle: x,
                      onUnsupportedActivate: j,
                      row: e,
                      rowCount: D.length,
                      rowIndex: t,
                      selectedAssets: C,
                      selectionCategoryMutuallyExcluded: w,
                      selectionLimitReached: M,
                      selectionMode: I,
                    },
                    null == (a = e[0]) ? void 0 : a.assetId,
                  );
                }),
                (0, r.jsx)(aA, {
                  hasMore: S.hasMore,
                  loading: "loading" === S.loadMoreStatus,
                  loadMoreError: "error" === S.loadMoreStatus,
                  onLoadMore: f,
                  scrollRootId: T,
                }),
              ],
            }),
          });
        return "audio" === d ? (0, r.jsx)(t9, { children: z }) : z;
      }
      function aN(e, t) {
        var a;
        let r = "document" === (a = t) ? 374 : "audio" === a ? 119 : 124,
          s = aT(t),
          i = "document" === t ? 2 : 6;
        return null === e
          ? i
          : Math.max(
              1,
              Math.min(i, Math.floor((e + s + +("document" !== t)) / (r + s))),
            );
      }
      function ak(e) {
        var t, a;
        let {
            category: s,
            columnCount: i,
            getUnsupportedReason: o,
            isAlreadyCommitted: l,
            isImportable: c,
            onDisabledActivate: d,
            onToggle: u,
            onUnsupportedActivate: m,
            row: p,
            rowCount: h,
            rowIndex: v,
            selectedAssets: g,
            selectionCategoryMutuallyExcluded: b,
            selectionLimitReached: y,
            selectionMode: x,
          } = e,
          j = eS((e) => e.occupiedSelectionIds),
          S = aT(s);
        return (0, r.jsx)("div", {
          className: "grid",
          style: {
            columnGap: S,
            gridTemplateColumns:
              ((t = s),
              (a = i),
              "document" === t
                ? `repeat(${a}, 374px)`
                : `repeat(${a}, minmax(0, 1fr))`),
            paddingBottom: S,
          },
          children: p.map((e, t) => {
            var a;
            let i = g.has(e.assetId),
              S = l(e),
              C = c(e),
              w = y && !f(g.values(), e, j),
              M = o(e),
              I = (a = {
                alreadyCommitted: S,
                importable: C,
                mutuallyExclusiveCategory: b,
                unsupportedReason: M,
                selected: i,
                selectionLimitReached: w,
              }).alreadyCommitted
                ? (0, n.o9k)()
                : a.importable
                  ? a.mutuallyExclusiveCategory && !a.selected
                    ? (0, n.Duy)()
                    : a.selectionLimitReached && !a.selected
                      ? (0, n.bgw)()
                      : void 0
                  : a.unsupportedReason || (0, n.zoM)(),
              N = (function (e) {
                if (e.alreadyCommitted) return "alreadyAdded";
                if (e.importable) {
                  if (e.mutuallyExclusiveCategory && !e.selected)
                    return "mutuallyExclusiveCategory";
                  if (e.selectionLimitReached && !e.selected)
                    return "limitReached";
                }
              })({
                alreadyCommitted: S,
                importable: C,
                mutuallyExclusiveCategory: b,
                selected: i,
                selectionLimitReached: w,
              });
            return (0, r.jsx)(
              aD,
              {
                asset: e,
                disabledReason: I,
                mediaWallCornerClassName: (function (e) {
                  let {
                    category: t,
                    columnIndex: a,
                    rowCount: r,
                    rowIndex: s,
                    rowLength: i,
                  } = e;
                  if ("audio" === t) return;
                  let n = [];
                  return (
                    0 === s &&
                      0 === a &&
                      n.push("rounded-tl-canvas-asset-library-media-wall"),
                    0 === s &&
                      a === i - 1 &&
                      n.push("rounded-tr-canvas-asset-library-media-wall"),
                    s === r - 1 &&
                      0 === a &&
                      n.push("rounded-bl-canvas-asset-library-media-wall"),
                    s === r - 1 &&
                      a === i - 1 &&
                      n.push("rounded-br-canvas-asset-library-media-wall"),
                    n.length > 0 ? n.join(" ") : void 0
                  );
                })({
                  category: s,
                  columnIndex: t,
                  rowIndex: v,
                  rowCount: h,
                  rowLength: p.length,
                }),
                onDisabledActivate: N
                  ? () => d(N)
                  : !C && M
                    ? () => m(e)
                    : void 0,
                onToggle: u,
                selected: i,
                selectionMode: x,
              },
              e.assetId,
            );
          }),
        });
      }
      function aT(e) {
        return "document" === e ? 4 : "audio" === e ? 8 : 2;
      }
      function aA(e) {
        let {
            disabled: t = !1,
            hasMore: a,
            loading: i,
            loadMoreError: o,
            onLoadMore: c,
            scrollRootId: d,
          } = e,
          u = (0, s.useRef)(null);
        return ((0, s.useEffect)(() => {
          let e = u.current;
          if (!e || t || !a || i || o || "u" < typeof IntersectionObserver)
            return;
          let r = e.ownerDocument.getElementById(d);
          if (!r) return;
          let s = new IntersectionObserver(
            (e) => {
              let [t] = e;
              (null == t ? void 0 : t.isIntersecting) && c();
            },
            { root: r, rootMargin: "160px 0px" },
          );
          return (s.observe(e), () => s.disconnect());
        }, [t, a, o, i, c, d]),
        i)
          ? (0, r.jsx)(af, {})
          : o
            ? (0, r.jsx)(l.W5n, {
                className: "h-16",
                message: (0, r.jsx)(l.$nd, {
                  disabled: t,
                  onClick: c,
                  size: "sm",
                  variant: "secondary",
                  children: (0, n.cvC)(),
                }),
              })
            : a
              ? (0, r.jsx)("div", {
                  className: "flex min-h-8 items-center justify-center",
                  ref: u,
                  children: (0, r.jsx)(l.$nd, {
                    className: "sr-only",
                    disabled: t,
                    onClick: c,
                    size: "sm",
                    variant: "text",
                    children: (0, n.$6d)(),
                  }),
                })
              : null;
      }
      function aD(e) {
        let { asset: t, ...a } = e,
          s = ej(),
          i = eS((e) => {
            var a;
            return e.favoritePendingIds.includes(
              (null == (a = t.favorite) ? void 0 : a.key) ?? "",
            );
          });
        return (
          eS((e) => e.importActionState),
          (0, r.jsx)(ap, {
            ...a,
            asset: t,
            favorite: t.favorite
              ? {
                  selected: t.favorite.isFavorite,
                  pending: i,
                  disabledReason: s.getFavoriteDisabledReason(),
                  onToggle: () => s.toggleFavorite(t),
                }
              : void 0,
          })
        );
      }
      var az = a(22817),
        aR = a(47169),
        aP = a(49559);
      function aF(e) {
        let {
            disabled: t,
            members: a,
            selected: s,
            status: i,
            onSelect: o,
            onRetry: c,
          } = e,
          d = (0, e8.G)(),
          u = a.find((e) => e.userId === s);
        return (0, r.jsxs)(e6.rI, {
          children: [
            (0, r.jsx)(e6.ty, {
              asChild: !0,
              children: (0, r.jsxs)(l.$nd, {
                "aria-label": (0, n.kLi)(),
                className:
                  "group shrink-0 gap-canvas-asset-library-filter-gap pl-canvas-asset-library-category-tab-inline pr-canvas-asset-library-navigation-back-end text-dreamina-text-secondary hover:text-dreamina-text-primary active:text-dreamina-text-primary data-[state=open]:text-dreamina-text-primary",
                contentSized: !0,
                disabled: t,
                size: "md",
                style: { maxWidth: 160 },
                variant: "text",
                children: [
                  (0, r.jsx)("span", {
                    className: "truncate",
                    children: u
                      ? `${u.name || u.userId}${u.removed ? ` (${d.removed})` : ""}`
                      : d.all,
                  }),
                  (0, r.jsx)(l.L5W, {
                    className: "group-data-[state=open]:rotate-180",
                  }),
                ],
              }),
            }),
            (0, r.jsxs)(e6.SQ, {
              appearance: "actionList",
              align: "center",
              className:
                "w-canvas-asset-library-member-menu min-w-canvas-asset-library-member-menu",
              motion: "toolbarCompactMenu",
              sideOffset: 8,
              size: "medium",
              children: [
                (0, r.jsxs)(e6._2, {
                  "aria-checked": "0" === s,
                  className:
                    "h-canvas-asset-library-member-option justify-between",
                  onSelect: () => o("0"),
                  role: "menuitemradio",
                  children: [
                    (0, r.jsxs)("span", {
                      className:
                        "flex min-w-workspace-chrome-zero flex-1 items-center gap-canvas-asset-library-filter-option-gap",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "flex size-8 shrink-0 items-center justify-center rounded-dreamina-capsule bg-dreamina-block-secondary-default",
                          children: (0, r.jsx)(l.M1s, { size: 16 }),
                        }),
                        (0, r.jsx)("span", {
                          className: "truncate",
                          children: d.all,
                        }),
                      ],
                    }),
                    "0" === s
                      ? (0, r.jsx)(l.$nG, {
                          className:
                            "ml-auto shrink-0 text-dreamina-text-primary",
                          size: 16,
                        })
                      : null,
                  ],
                }),
                a.map((e) =>
                  (0, r.jsxs)(
                    e6._2,
                    {
                      "aria-checked": s === e.userId,
                      className:
                        "h-canvas-asset-library-member-option justify-between",
                      onSelect: () => o(e.userId),
                      role: "menuitemradio",
                      children: [
                        (0, r.jsxs)("span", {
                          className:
                            "flex min-w-workspace-chrome-zero flex-1 items-center gap-canvas-asset-library-filter-option-gap",
                          children: [
                            (0, r.jsx)(l.euF, {
                              className: "size-6",
                              name: e.name,
                              src: e.avatar,
                            }),
                            (0, r.jsx)("span", {
                              className: "truncate",
                              children: e.name || e.userId,
                            }),
                            e.removed
                              ? (0, r.jsx)("span", {
                                  className:
                                    "shrink-0 whitespace-nowrap text-dreamina-cn-12 text-dreamina-text-tertiary",
                                  children: d.removed,
                                })
                              : null,
                          ],
                        }),
                        s === e.userId
                          ? (0, r.jsx)(l.$nG, {
                              className:
                                "ml-auto shrink-0 text-dreamina-text-primary",
                              size: 16,
                            })
                          : null,
                      ],
                    },
                    e.userId,
                  ),
                ),
                "loading" === i
                  ? (0, r.jsx)(e6._2, { disabled: !0, children: d.loading })
                  : null,
                "error" === i
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-dreamina-cn-12",
                          role: "alert",
                          style: { padding: 8 },
                          children: d.failed,
                        }),
                        (0, r.jsx)(e6._2, { onSelect: c, children: d.retry }),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      var aE = a(15792);
      function aU(e) {
        let { assetKey: t, preview: a, previewUrls: s } = e,
          i = a.items.map((e) => {
            var a;
            let r = s.get((0, eE.xX)(t, e.source_node_id));
            return {
              nodeId: e.source_node_id,
              kind: (0, aR.bi)(e.node_type) ? e.node_type : "file",
              title: e.name,
              textBody: e.text_preview,
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height,
              hasAudioContent: "audio" === e.node_type && !!e.preview,
              preview: r
                ? {
                    kind: (null == (a = e.preview) ? void 0 : a.video)
                      ? "video"
                      : "image",
                    previewUrl: r,
                  }
                : void 0,
            };
          }),
          n = Math.max(a.width, a.height),
          o = Number.isFinite(n) && a.width > 0 && a.height > 0;
        return (0, r.jsx)("span", {
          "aria-hidden": "true",
          className:
            "relative flex size-full items-center justify-center overflow-hidden rounded-dreamina-control",
          "data-canvas-asset-group-preview": "",
          children: (0, r.jsx)("span", {
            className: "block",
            style: {
              width: o ? `${(a.width / n) * 100}%` : "100%",
              height: o ? `${(a.height / n) * 100}%` : "100%",
            },
            children: (0, r.jsx)(aE.a$, {
              groupHeight: o ? a.height : 0,
              groupWidth: o ? a.width : 0,
              items: i,
              transparentBackground: !0,
            }),
          }),
        });
      }
      let aL = {
          image: "image",
          video: "video",
          audio: "audio",
          text: "document",
          subject: "audio",
          timeline: "audio",
          other: "audio",
        },
        aV = (0, s.memo)(function (e) {
          var t;
          let { actions: a, state: i } = e,
            o = (0, s.useRef)(null),
            c = (0, s.useRef)(null),
            d = (0, s.useId)(),
            u = `${(null == (t = i.activeProject) ? void 0 : t.project_id) ?? ""}:${i.projects.length}:${i.items.length}`,
            m = (0, te._l)({
              contentVersion: u,
              hostRef: c,
              scrollSelector: "[data-canvas-assets-scroll]",
            }),
            p = (0, s.useMemo)(
              () =>
                new Set(
                  i.selections.map((e) =>
                    JSON.stringify([e.sourceProjectId, e.nodeId]),
                  ),
                ),
              [i.selections],
            ),
            h = i.activeProject
              ? i.selectedCountByProject.get(i.activeProject.project_id)
              : void 0,
            v = i.filters,
            g = i.loading && !i.activeProject && 0 === i.projects.length,
            b = i.loading && void 0 !== i.activeProject && 0 === i.items.length,
            f =
              i.spaceAvailable &&
              !i.loading &&
              !i.error &&
              !i.hasMore &&
              (i.activeProject
                ? 0 === i.items.length
                : 0 === i.projects.length),
            y = i.activeProject ? i.items.length > 0 : i.projects.length > 0,
            x = !!i.error && y && i.hasMore,
            j = a.setFilters;
          return (0, r.jsxs)("section", {
            "aria-labelledby": "canvas-asset-section-tab-canvas",
            "aria-busy": i.loading || i.importing,
            className:
              "col-start-1 row-start-2 flex min-h-canvas-zero min-w-canvas-zero flex-col overflow-hidden",
            id: "canvas-asset-section-panel-canvas",
            ref: o,
            role: "tabpanel",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "flex h-canvas-asset-library-filter-control min-w-canvas-zero shrink-0 items-center gap-canvas-asset-library-navigation-actions px-canvas-asset-library-content-inline",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex min-w-canvas-zero flex-1 items-center gap-canvas-asset-library-navigation-group",
                    children: [
                      i.activeProject
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsxs)(l.$nd, {
                                className:
                                  "min-w-canvas-zero shrink-0 pl-canvas-asset-library-navigation-back-start pr-canvas-asset-library-navigation-back-end text-dreamina-text-secondary hover:text-dreamina-text-primary active:text-dreamina-text-primary",
                                disabled: i.importing,
                                onClick: a.back,
                                variant: "text",
                                children: [
                                  (0, r.jsx)(l.Ks$, { size: 16 }),
                                  (0, n.NGq)(),
                                ],
                              }),
                              (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                className:
                                  "h-canvas-asset-library-navigation-divider w-canvas-asset-library-navigation-divider-stroke shrink-0 bg-dreamina-stroke-secondary",
                              }),
                            ],
                          })
                        : null,
                      i.activeProject
                        ? (0, r.jsx)(eH, {
                            className: "flex-1",
                            disabled: i.importing,
                            children: eN.map((e) =>
                              (0, r.jsx)(
                                aZ,
                                {
                                  category: e,
                                  selected: i.category === e,
                                  selectedCount:
                                    (null == h ? void 0 : h.get(e)) ?? 0,
                                  disabled: i.importing,
                                  actions: a,
                                  panelId: "canvas-assets-node-grid",
                                },
                                e,
                              ),
                            ),
                          })
                        : (0, r.jsx)(eH, {
                            disabled: i.importing,
                            children: (0, r.jsx)(l.$nd, {
                              "aria-controls": "canvas-assets-project-grid",
                              "aria-selected": !0,
                              className: e3(!0, i.importing),
                              contentSized: !0,
                              disabled: i.importing,
                              role: "tab",
                              variant: "text",
                              children: (0, n.ww8)(),
                            }),
                          }),
                      i.teamId && !i.activeProject
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                className:
                                  "h-canvas-asset-library-navigation-divider w-canvas-asset-library-navigation-divider-stroke shrink-0 bg-dreamina-stroke-secondary",
                              }),
                              (0, r.jsx)(aF, {
                                disabled: i.importing,
                                members: i.members,
                                selected: i.memberUserId,
                                status: i.membersStatus,
                                onSelect: a.selectMember,
                                onRetry: a.reloadMembers,
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, r.jsx)(tL, {
                    config: {
                      search: {
                        disabled: i.importing,
                        label: (0, n.kFb)(
                          i.activeProject ? "nodes" : "projects",
                        ),
                        value: i.keyword,
                        onChange: a.setKeyword,
                        onClear: () => a.setKeyword(""),
                      },
                      actions: (0, r.jsx)(tV, {
                        activeFilters: v.filter((e) => "time" !== e.type),
                        timeFilter: v.find((e) => "time" === e.type),
                        capabilities: i.activeProject
                          ? eR(i.category, i.nodeFavoriteSupported)
                          : ek,
                        disabled: i.importing,
                        onClearDetailFilters: () => j((0, O.WR)(v)),
                        onClearDetailFilterGroup: (e) => j((0, O.kj)(v, e)),
                        onClearTimeFilter: () => j((0, O.kj)(v, "time")),
                        onCustomTimeChange: (e) =>
                          j((0, O.ZL)(v, (0, O.sS)(e))),
                        onToggleFilter: (e) => j((0, O.eg)(v, e)),
                      }),
                    },
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "relative mx-canvas-asset-library-content-inline mt-canvas-asset-library-content-top min-h-canvas-zero flex-1",
                children: (0, r.jsxs)("div", {
                  className:
                    "group/canvas-panel-scrollbar absolute inset-canvas-zero overflow-hidden rounded-dreamina-control",
                  ref: c,
                  children: [
                    (0, r.jsxs)("div", {
                      className: (0, l.cn)(
                        "h-full min-w-canvas-zero overflow-x-hidden overflow-y-auto p-canvas-asset-library-project-metadata-bottom",
                        (0, te.G9)({ lane: "none", overflowing: !1 }),
                      ),
                      "data-canvas-assets-scroll": "",
                      id: d,
                      children: [
                        i.error && !x
                          ? (0, r.jsx)(l.W5n, {
                              className: (0, l.cn)(
                                "text-dreamina-cn-13 text-dreamina-text-placeholder",
                                y && "h-auto py-dreamina-empty-state-block",
                              ),
                              message: (0, r.jsxs)("span", {
                                className:
                                  "flex flex-col items-center gap-canvas-asset-library-state-action",
                                children: [
                                  (0, r.jsx)("span", { children: i.error }),
                                  (0, r.jsx)(l.$nd, {
                                    className:
                                      "min-w-dreamina-empty-state-action",
                                    disabled: i.importing,
                                    onClick: a.reload,
                                    size: "sm",
                                    variant: "secondary",
                                    children: (0, n.cvC)(),
                                  }),
                                ],
                              }),
                            })
                          : null,
                        f
                          ? (0, r.jsx)(l.ppr, {
                              "aria-atomic": "true",
                              "aria-live": "polite",
                              className: "text-dreamina-text-placeholder",
                              "data-canvas-library-empty": "",
                              id: i.activeProject
                                ? "canvas-assets-node-grid"
                                : "canvas-assets-project-grid",
                              role: "status",
                              title: (0, r.jsx)("span", {
                                className: "text-dreamina-text-placeholder",
                                children: (0, n.pNw)(
                                  i.activeProject ? "nodes" : "projects",
                                  !!(i.keyword.trim() || i.filters.length),
                                ),
                              }),
                            })
                          : null,
                        g ? (0, r.jsx)(ay, {}) : null,
                        b
                          ? (0, r.jsx)("div", {
                              className: "h-full",
                              id: "canvas-assets-node-grid",
                              children: (0, r.jsx)(av, {
                                announcement: (0, eV.S_)(),
                                category: aL[i.category],
                                columnCount: "text" === i.category ? 2 : 6,
                              }),
                            })
                          : null,
                        f || b
                          ? null
                          : i.activeProject
                            ? (0, r.jsx)("div", {
                                "aria-label": (0, n.IpH)(),
                                "aria-multiselectable": "true",
                                className:
                                  "grid min-w-canvas-zero grid-cols-6 gap-canvas-asset-library-browser-card",
                                id: "canvas-assets-node-grid",
                                role: "listbox",
                                tabIndex: 0,
                                children: i.items.map((e) => {
                                  var t;
                                  return (0, r.jsx)(
                                    aW,
                                    {
                                      item: e,
                                      favoritePending:
                                        i.favoritePendingNodeIds.includes(
                                          e.source_node_id,
                                        ),
                                      favoriteSupported:
                                        i.nodeFavoriteSupported,
                                      selected: p.has(
                                        JSON.stringify([
                                          null == (t = i.activeProject)
                                            ? void 0
                                            : t.project_id,
                                          e.source_node_id,
                                        ]),
                                      ),
                                      previewUrl: i.previewUrls.get(
                                        e.asset_key,
                                      ),
                                      previewUrls: i.previewUrls,
                                      playbackUrl: i.playbackUrls.get(
                                        e.asset_key,
                                      ),
                                      actions: a,
                                    },
                                    e.asset_key,
                                  );
                                }),
                              })
                            : g
                              ? null
                              : (0, r.jsx)("ul", {
                                  className:
                                    "grid min-w-canvas-zero grid-cols-4 gap-canvas-asset-library-project-column",
                                  id: "canvas-assets-project-grid",
                                  children: i.projects.map((e) =>
                                    (0, r.jsx)(
                                      aB,
                                      {
                                        project: e,
                                        actions: a,
                                        disabled: i.loading || i.importing,
                                        favoritePending:
                                          i.favoritePendingProjectIds.includes(
                                            e.project_id,
                                          ),
                                        favoriteDisabledReason:
                                          a.getProjectFavoriteDisabledReason(
                                            e.project_id,
                                          ),
                                      },
                                      e.project_id,
                                    ),
                                  ),
                                }),
                        (0, r.jsx)(aA, {
                          disabled: i.importing,
                          hasMore: !!(i.hasMore && (y || !i.error)),
                          loading: !(g || b) && i.loading,
                          loadMoreError: x,
                          onLoadMore: a.loadMore,
                          scrollRootId: d,
                        }),
                      ],
                    }),
                    (0, r.jsx)(te.Lw, {
                      contentVersion: u,
                      edgeRef: o,
                      hostRef: c,
                      overflowing: m,
                      scrollSelector: "[data-canvas-assets-scroll]",
                      thumbClassName: aj,
                    }),
                  ],
                }),
              }),
            ],
          });
        }),
        aZ = (0, s.memo)(function (e) {
          let {
              actions: t,
              category: a,
              selected: i,
              selectedCount: o,
              disabled: c,
              panelId: d,
            } = e,
            u = (0, s.useCallback)(() => {
              i || t.setCategory(a);
            }, [t, a, i]),
            m = (0, n.wWG)(a),
            p = o > 0 ? (0, n.k1y)({ category: m, count: o }) : m;
          return (0, r.jsx)(l.$nd, {
            "aria-label": p,
            "aria-controls": d,
            "aria-selected": i,
            className: e3(i, c),
            contentSized: !0,
            disabled: c,
            onClick: u,
            role: "tab",
            tabIndex: i ? 0 : -1,
            variant: "text",
            children: (0, r.jsxs)("span", {
              className:
                "flex items-center gap-canvas-asset-library-primary-tab-gap",
              children: [
                (0, r.jsx)("span", {
                  "data-asset-library-tab-label": !0,
                  children: m,
                }),
                e4(o),
              ],
            }),
          });
        }),
        aB = (0, s.memo)(function (e) {
          var t, a;
          let {
              actions: i,
              project: o,
              disabled: c,
              favoritePending: u,
              favoriteDisabledReason: m,
            } = e,
            p = (0, s.useCallback)(
              () => i.openProject(o.project_id),
              [i, o.project_id],
            ),
            h = o.name || (0, az.wB)(),
            v = (0, s.useId)(),
            g = !0 === o.is_favorite,
            b = (0, n.r8m)(g),
            f = (0, s.useCallback)(
              () => i.toggleProjectFavorite(o.project_id),
              [i, o.project_id],
            );
          return (0, r.jsxs)("li", {
            className: "group/project-card relative min-w-canvas-zero",
            children: [
              (0, r.jsxs)(l.$nd, {
                className:
                  "relative isolate h-auto min-w-canvas-zero w-full flex-col items-stretch justify-start gap-canvas-asset-library-browser-card text-left",
                disabled: c,
                onClick: p,
                size: "unframed",
                variant: "text",
                children: [
                  (0, r.jsx)("span", {
                    "aria-hidden": "true",
                    className:
                      "pointer-events-none absolute -inset-canvas-asset-library-project-metadata-bottom -z-canvas-asset-library-card-overlay rounded-canvas-asset-library-project-hover bg-transparent group-hover/project-card:bg-dreamina-block-secondary-hover",
                    "data-canvas-project-hover": "",
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "aspect-video w-full shrink-0 overflow-hidden rounded-dreamina-control bg-dreamina-block-primary-default",
                    "data-canvas-project-cover": "",
                    children: (0, r.jsx)(aP.G, {
                      url:
                        null == (a = o.cover) || null == (t = a.url_pack)
                          ? void 0
                          : t.url,
                    }),
                  }),
                  (0, r.jsxs)("span", {
                    className:
                      "flex min-w-canvas-zero w-full flex-col px-canvas-asset-library-browser-card pb-canvas-asset-library-project-metadata-bottom",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "block w-full truncate text-dreamina-cn-12 font-dreamina-medium text-dreamina-text-primary",
                        id: v,
                        children: h,
                      }),
                      (0, r.jsx)("span", {
                        "aria-hidden": void 0 === o.asset_count,
                        className:
                          "block text-dreamina-cn-12 font-dreamina-regular text-dreamina-text-placeholder",
                        children:
                          void 0 !== o.asset_count
                            ? (0, n.gbe)(o.asset_count)
                            : (0, r.jsx)("br", {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(d.Bc, {
                children: (0, r.jsxs)(d.m_, {
                  children: [
                    (0, r.jsx)(d.k$, {
                      asChild: !0,
                      children: (0, r.jsx)(l.K0, {
                        "aria-describedby": v,
                        "aria-pressed": g,
                        busy: u,
                        className: (0, l.cn)(
                          "absolute right-canvas-asset-library-project-favorite-edge top-canvas-asset-library-project-favorite-edge z-canvas-asset-library-card-overlay size-canvas-asset-library-project-favorite-control rounded-canvas-asset-library-navigation-button border-0 bg-dreamina-on-media-panel-bg aria-pressed:bg-dreamina-on-media-panel-bg aria-pressed:hover:bg-dreamina-on-media-panel-bg aria-pressed:active:bg-dreamina-on-media-panel-bg p-canvas-zero text-dreamina-on-media-text-primary hover:bg-dreamina-on-media-panel-bg active:bg-dreamina-on-media-panel-bg [&_svg]:size-canvas-asset-library-project-favorite-icon",
                          g
                            ? "text-dreamina-functional-warning"
                            : "pointer-events-none opacity-dreamina-media-action-hidden group-hover/project-card:pointer-events-auto group-hover/project-card:opacity-dreamina-media-action-visible group-focus-within/project-card:pointer-events-auto group-focus-within/project-card:opacity-dreamina-media-action-visible",
                        ),
                        "data-canvas-project-favorite": "",
                        disabled: c,
                        disabledReason: m,
                        icon: (0, r.jsx)(l.OEz, { filled: g, size: 16 }),
                        label: b,
                        onClick: f,
                      }),
                    }),
                    (0, r.jsx)(d.ZI, { children: b }),
                  ],
                }),
              }),
            ],
          });
        }),
        aW = (0, s.memo)(function (e) {
          var t, a, i, o, c, d;
          let {
              actions: u,
              item: m,
              selected: p,
              previewUrl: h,
              previewUrls: v,
              playbackUrl: g,
              favoritePending: b,
              favoriteSupported: f,
            } = e,
            y = (0, s.useCallback)(() => u.toggle(m), [u, m]),
            x = f
              ? {
                  selected: !0 === m.is_favorite,
                  pending: b,
                  disabledReason: u.getNodeFavoriteDisabledReason(),
                  onToggle: () => u.toggleNodeFavorite(m),
                }
              : void 0,
            j = "external" === m.node_type || "group" === m.node_type,
            S = x
              ? {
                  ...x,
                  inline: "text" === m.node_type,
                  lightTextPrimary: j,
                  overlay: !j,
                }
              : void 0,
            C = m.name || (0, n.Zy5)(),
            w =
              "audio" === m.node_type ||
              "video" === m.node_type ||
              ("subject" === m.node_type &&
                (null == (t = m.preview) ? void 0 : t.video) !== void 0),
            M =
              "audio" === m.node_type
                ? null == (i = m.preview) || null == (a = i.audio)
                  ? void 0
                  : a.duration
                : null == (c = m.preview) || null == (o = c.video)
                  ? void 0
                  : o.duration,
            I = void 0 !== M && Number.isFinite(M) && M >= 0 ? 1e3 * M : void 0,
            N = ad(m.copyable ? g : void 0, I);
          return "text" === m.node_type
            ? (0, r.jsx)(ae, {
                favorite: S,
                assetCategory: m.node_type,
                assetId: m.asset_key,
                className: (0, l.cn)(
                  "col-span-3 h-canvas-asset-library-document-card min-w-canvas-zero w-full rounded-canvas-asset-library-card data-[box-selected=true]:rounded-canvas-asset-library-document-card hover:rounded-canvas-asset-library-document-card active:rounded-canvas-asset-library-document-card",
                  p && "rounded-canvas-asset-library-document-card",
                ),
                disabledReason: m.copyable ? void 0 : (0, n.Eq0)(),
                label: C,
                onClick: y,
                selected: p,
                selectionFrame: "background",
                selectionMode: "multiple",
                children: (0, r.jsxs)("span", {
                  className:
                    "flex h-full min-w-canvas-zero flex-1 items-center gap-canvas-asset-library-browser-card py-canvas-asset-library-document-inset pl-canvas-asset-library-document-inset pr-canvas-asset-library-document-edge",
                  children: [
                    (0, r.jsx)("img", {
                      alt: "",
                      className: "size-10 shrink-0 object-contain",
                      draggable: !1,
                      height: 64,
                      src: "data:image/svg+xml;base64,PCEtLSBBc3NldCBsaWJyYXJ5IFRYVCB0aHVtYm5haWwuIEZpZ21hIDEyNjMxOjEzMTMyOTsgb3JpZ2luYWwgNDh4NjQgY2FudmFzIGFuZCB2ZWN0b3IgY29vcmRpbmF0ZXMgcmV0YWluZWQuIC0tPgo8c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDQ4IDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Zm9yZWlnbk9iamVjdCB4PSItNDAiIHk9Ii00MCIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxNDQiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJiYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KTtjbGlwLXBhdGg6dXJsKCN0ZXh0LWZpbGUtYmFja2dyb3VuZCk7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJSI+PC9kaXY+PC9mb3JlaWduT2JqZWN0PjxnPgo8ZyBjbGlwLXBhdGg9InVybCgjdGV4dC1maWxlLWRvY3VtZW50KSI+CjxwYXRoIGQ9Ik0wIDEuMzMzMzNDMCAwLjU5Njk1MiAwLjU5Njk1NCAwIDEuMzMzMzMgMEwyOS4xNjIgMEMyOS41MTU2IDAgMjkuODU0OCAwLjE0MDQ3NiAzMC4xMDQ4IDAuMzkwNTI0TDQ3LjYwOTUgMTcuODk1MkM0Ny44NTk1IDE4LjE0NTIgNDggMTguNDg0NCA0OCAxOC44MzhWNjIuNjY2N0M0OCA2My40MDMgNDcuNDAzIDY0IDQ2LjY2NjcgNjRIMS4zMzMzM0MwLjU5Njk1MSA2NCAwIDYzLjQwMyAwIDYyLjY2NjdMMCAxLjMzMzMzWiIgZmlsbD0iI0FBRTFGMiIvPgo8ZyBmaWx0ZXI9InVybCgjdGV4dC1maWxlLXNoYWRvdykiPgo8cGF0aCBkPSJNMjkuMjk2OSAwLjAwNjgzNTk0QzI5LjMxIDAuMDA4MTY4NzMgMjkuMzIyOSAwLjAxMDk3ODEgMjkuMzM1OSAwLjAxMjY5NTNDMjkuNDIwOSAwLjAyNDE3MTIgMjkuNTA0MyAwLjA0MzAyMjMgMjkuNTg1IDAuMDcwMzEyNUwyOS43MTc4IDAuMTIzMDQ3QzI5Ljg2MDEgMC4xODg0MDggMjkuOTkxNiAwLjI3Nzc1NiAzMC4xMDQ1IDAuMzkwNjI1TDQ3LjYwOTQgMTcuODk1NUM0Ny43MjMzIDE4LjAwOTUgNDcuODEzNCAxOC4xNDIzIDQ3Ljg3ODkgMTguMjg2MUM0Ny45MzMzIDE4LjQwNTYgNDcuOTY4NyAxOC41MzMgNDcuOTg2MyAxOC42NjQxQzQ3Ljk5MzkgMTguNzIxNSA0OCAxOC43NzkzIDQ4IDE4LjgzNzlWNjIuNjY3QzQ3Ljk5OTggNjMuNDAzMSA0Ny40MDMxIDYzLjk5OTggNDYuNjY3IDY0SDEuMzMzMDFDMC41OTY4ODQgNjMuOTk5OCAwLjAwMDE3NDM3NSA2My40MDMxIDAgNjIuNjY3VjEuMzMzMDFDMC4wMDAxNzUyMTMgMC41OTY4ODYgMC41OTY4ODYgMC4wMDAxNzU5MTYgMS4zMzMwMSAwSDI5LjE2MjFDMjkuMjA3MyAzLjYxMjY2ZS0wNiAyOS4yNTIzIDAuMDAyMTgzMjQgMjkuMjk2OSAwLjAwNjgzNTk0Wk0yIDYySDQ2VjE5LjExNDNMNDUuMTcxOSAxOC4yODYxSDMyLjUwMkMzMS4yNjc0IDE4LjI4NjEgMzAuMjU1NCAxNy4zMDUzIDMwLjIxNjggMTYuMDcxM0wyOS44MDU3IDIuOTE5OTJMMjguODg1NyAySDJWNjJaIiBmaWxsPSIjRjVGNUY1Ii8+CjwvZz4KPHBhdGggZD0iTTMwLjY4NzUgMzIuNDM4M0wzMC43MzU1IDMyLjA3MDNIMzkuMjYzNUwzOS4yMTU1IDMyLjQzODNIMzUuOTgzNUwzNC40OTU1IDQyLjk5ODNIMzIuNDMxNUwzMy45MTk1IDMyLjQzODNIMzAuNjg3NVoiIGZpbGw9IiMwODdGQjIiLz4KPHBhdGggZD0iTTIxLjAxNTQgMzIuMDcwM0gyMy4xMTE0TDI0LjcyNzQgMzYuMjQ2M0wyNy44NjM0IDMyLjA3MDNIMjguNzQzNEwyNS4wMzE0IDM2Ljk4MjNMMjcuMzUxNCA0Mi45OTgzSDI1LjIzOTRMMjMuNjIzNCAzOC44MjIzTDIwLjQ3MTQgNDIuOTk4M0gxOS42MDc0TDIzLjMzNTQgMzguMDg2M0wyMS4wMTU0IDMyLjA3MDNaIiBmaWxsPSIjMDg3RkIyIi8+CjxwYXRoIGQ9Ik0xMC41OTc3IDMyLjQzODNMMTAuNjQ1NyAzMi4wNzAzSDE5LjE3MzdMMTkuMTI1NyAzMi40MzgzSDE1Ljg5MzdMMTQuNDA1NyA0Mi45OTgzSDEyLjM0MTdMMTMuODI5NyAzMi40MzgzSDEwLjU5NzdaIiBmaWxsPSIjMDg3RkIyIi8+CjxwYXRoIGQ9Ik0zOS41NjY0IDMxLjgwNDdMMzkuNTI2NCAzMi4xMDU1TDM5LjQ0ODIgMzIuNzA2MUgzNi4yMTM5TDM0LjcyNjYgNDMuMjY1NkgzMi4xMjNMMzMuNjExMyAzMi43MDYxSDMwLjM4MjhMMzAuNSAzMS44MDQ3SDM5LjU2NjRaTTMwLjczNDQgMzIuMDcxM0wzMC42ODY1IDMyLjQzOTVIMzMuOTE4TDMyLjQzMDcgNDIuOTk5SDM0LjQ5NDFMMzUuOTgyNCAzMi40Mzk1SDM5LjIxMzlMMzkuMjYyNyAzMi4wNzEzSDMwLjczNDRaIiBmaWxsPSIjMDA3REIzIi8+CjxwYXRoIGQ9Ik0yMy4yOTQ5IDMxLjgwNDdMMjMuMzYwNCAzMS45NzQ2TDI0LjgwMjcgMzUuNzAyMUwyNy43MzA1IDMxLjgwNDdIMjkuMjc5M0wyNS4zMzMgMzcuMDI1NEwyNy43NDAyIDQzLjI2NTZIMjUuMDU3NkwyNC45OTEyIDQzLjA5NTdMMjMuNTQ3OSAzOS4zNjUyTDIwLjY4NDYgNDMuMTYwMkwyMC42MDQ1IDQzLjI2NTZIMTkuMDcwM0wyMy4wMzMyIDM4LjA0MzlMMjAuNzY3NiAzMi4xNjdMMjAuNjI3IDMxLjgwNDdIMjMuMjk0OVpNMjEuMDE1NiAzMi4wNzEzTDIzLjMzNTkgMzguMDg2OUwxOS42MDg0IDQyLjk5OUgyMC40NzE3TDIzLjYyNCAzOC44MjMyTDI1LjI0MDIgNDIuOTk5SDI3LjM1MTZMMjUuMDMyMiAzNi45ODM0TDI4Ljc0NDEgMzIuMDcxM0gyNy44NjQzTDI0LjcyNzUgMzYuMjQ3MUwyMy4xMTIzIDMyLjA3MTNIMjEuMDE1NloiIGZpbGw9IiMwMDdEQjMiLz4KPHBhdGggZD0iTTE5LjQ3NjYgMzEuODA0N0wxOS40Mzc1IDMyLjEwNTVMMTkuMzg4NyAzMi40NzM2TDE5LjM1ODQgMzIuNzA2MUgxNi4xMjVMMTQuNjM2NyA0My4yNjU2SDEyLjAzNDJMMTIuMDc2MiA0Mi45NjE5TDEzLjUyMTUgMzIuNzA2MUgxMC4yOTNMMTAuNDEwMiAzMS44MDQ3SDE5LjQ3NjZaTTEwLjY0NDUgMzIuMDcxM0wxMC41OTY3IDMyLjQzOTVIMTMuODI5MUwxMi4zNDA4IDQyLjk5OUgxNC40MDQzTDE1Ljg5MjYgMzIuNDM5NUgxOS4xMjVMMTkuMTcyOSAzMi4wNzEzSDEwLjY0NDVaIiBmaWxsPSIjMDA3REIzIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJ0ZXh0LWZpbGUtYmFja2dyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAgNDApIj48cGF0aCBkPSJNMCAyQzAgMC44OTU0MzEgMC44OTU0MzEgMCAyIDBINDZDNDcuMTA0NiAwIDQ4IDAuODk1NDMxIDQ4IDJWNjJDNDggNjMuMTA0NiA0Ny4xMDQ2IDY0IDQ2IDY0SDJDMC44OTU0MzEgNjQgMCA2My4xMDQ2IDAgNjJWMloiLz4KPC9jbGlwUGF0aD48ZmlsdGVyIGlkPSJ0ZXh0LWZpbGUtc2hhZG93IiB4PSItNC41NzE0MyIgeT0iMCIgd2lkdGg9IjU3LjE0MjkiIGhlaWdodD0iNzMuMTQyOSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR5PSI0LjU3MTQzIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuMjg1NzEiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMTQ1MzE2IDAgMCAwIDAgMC4xNzgwNjcgMCAwIDAgMCAwLjUzODMzIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0idGV4dC1maWxlLXNoYWRvdy1yZXN1bHQiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJ0ZXh0LWZpbGUtc2hhZG93LXJlc3VsdCIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGNsaXBQYXRoIGlkPSJ0ZXh0LWZpbGUtZG9jdW1lbnQiPgo8cGF0aCBkPSJNMCAyQzAgMC44OTU0MzEgMC44OTU0MzEgMCAyIDBINDZDNDcuMTA0NiAwIDQ4IDAuODk1NDMxIDQ4IDJWNjJDNDggNjMuMTA0NiA0Ny4xMDQ2IDY0IDQ2IDY0SDJDMC44OTU0MzEgNjQgMCA2My4xMDQ2IDAgNjJWMloiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
                      width: 48,
                    }),
                    (0, r.jsx)("span", {
                      className:
                        "min-w-canvas-zero flex-1 truncate font-dreamina-cn text-dreamina-cn-12 font-dreamina-medium leading-canvas-asset-library-document-metadata text-dreamina-text-primary",
                      children: C,
                    }),
                  ],
                }),
              })
            : (0, r.jsxs)("div", {
                className:
                  "flex min-w-canvas-zero flex-col gap-canvas-asset-library-browser-card pb-canvas-asset-library-audio-card-bottom",
                children: [
                  (0, r.jsxs)(ae, {
                    favorite: S,
                    assetCategory: m.node_type,
                    assetId: m.asset_key,
                    className:
                      "aspect-square w-full rounded-dreamina-control bg-dreamina-block-secondary-default",
                    disabledReason: m.copyable ? void 0 : (0, n.Eq0)(),
                    label: C,
                    onClick: y,
                    onPointerEnter: N.onPointerEnter,
                    onPointerLeave: N.onPointerLeave,
                    selected: p,
                    selectionFrame: j ? "none" : "inset-ring",
                    selectionMode: "multiple",
                    surface: "secondary",
                    children: [
                      "group" === m.node_type && m.group_preview
                        ? (0, r.jsx)(aU, {
                            assetKey: m.asset_key,
                            preview: m.group_preview,
                            previewUrls: v,
                          })
                        : h
                          ? (0, r.jsx)(ar.X, {
                              alt: "",
                              className: (0, l.cn)(
                                "h-full w-full",
                                (null == (d = m.preview) ? void 0 : d.video)
                                  ? "object-contain"
                                  : "object-cover",
                              ),
                              decoding: "async",
                              loading: "lazy",
                              fallback:
                                "audio" === m.node_type
                                  ? (0, r.jsx)(tK.F3, { variant: "history" })
                                  : void 0,
                              src: h,
                            })
                          : "audio" === m.node_type
                            ? (0, r.jsx)(tK.F3, { variant: "history" })
                            : (0, r.jsx)(tK.y5, {
                                kind: (0, aR.bi)(m.node_type)
                                  ? m.node_type
                                  : "file",
                                transparent: !0,
                              }),
                      N.active && g
                        ? (0, r.jsx)(ac, {
                            playbackUrl: g,
                            posterUrl: h,
                            onElapsedTimeChange: N.setElapsedTimeMs,
                          })
                        : null,
                      w || N.active
                        ? (0, r.jsx)(as, {
                            showGradient: "audio" === m.node_type || !!h,
                            timeMs: N.visibleTimeMs,
                          })
                        : null,
                    ],
                  }),
                  (0, r.jsx)("span", {
                    className:
                      "block truncate px-canvas-asset-library-browser-card-inline text-center text-dreamina-cn-12 font-dreamina-medium text-dreamina-text-primary",
                    title: C,
                    children: C,
                  }),
                ],
              });
        });
      var aQ = a(56098);
      let a_ = Array.from(
          { length: 18 },
          (e, t) => `subject-import-skeleton-${t + 1}`,
        ),
        aO =
          "h-full overflow-hidden pb-canvas-asset-library-content-bottom pt-canvas-asset-library-content-top";
      function aY(e) {
        var t, a, i;
        let o,
          {
            api: c,
            interactionLocked: d = !1,
            onSelectionLimitReached: u,
            session: m,
          } = e,
          p = (0, s.useMemo)(() => new aQ.i(c), [c]),
          h = m ?? p,
          v = (0, s.useSyncExternalStore)(
            h.subscribe,
            h.getSnapshot,
            h.getSnapshot,
          ),
          g = (0, s.useId)(),
          b = d || "importing" === v.importStatus,
          f = (0, s.useCallback)(() => h.loadMore(), [h]),
          y =
            ((t = void 0 === m),
            (a = b),
            (i = h),
            (o = (0, s.useRef)(null)),
            (0, s.useEffect)(() => {
              if (t) return (i.start(), () => i.stop());
            }, [t, i]),
            (0, s.useEffect)(() => {
              let e = o.current;
              if (e)
                return (
                  a ? e.setAttribute("inert", "") : e.removeAttribute("inert"),
                  () => e.removeAttribute("inert")
                );
            }, [a]),
            o),
          x = (0, s.useMemo)(
            () => new Set(v.selectedSubjectIds),
            [v.selectedSubjectIds],
          ),
          j = (0, s.useMemo)(
            () =>
              (function (e) {
                let t = [];
                for (let a = 0; a < e.length; a += 6) t.push(e.slice(a, a + 6));
                return t;
              })(v.subjects),
            [v.subjects],
          );
        return h.importSupported
          ? "loading" === v.loadPhase
            ? (0, r.jsx)("div", {
                "aria-busy": !0,
                className: (0, l.cn)(
                  aO,
                  "px-canvas-asset-library-content-inline",
                ),
                "data-testid": "canvas-subject-import-list",
                style: { minHeight: 0 },
                children: (0, r.jsx)(aG, {}),
              })
            : "error" === v.loadPhase
              ? (0, r.jsx)(a$, {
                  interactionLocked: b,
                  onRetry: () => h.retryLoad(),
                })
              : 0 === v.subjects.length
                ? (0, r.jsx)(l.ppr, {
                    className: "text-dreamina-text-placeholder",
                    "data-testid": "canvas-subject-import-empty",
                    title: (0, n.hP3)(),
                  })
                : (0, r.jsxs)("div", {
                    "aria-busy": b || void 0,
                    className: aO,
                    "data-testid": "canvas-subject-import-list",
                    ref: y,
                    style: { minHeight: 0 },
                    children: [
                      v.favoriteNotice
                        ? (0, r.jsx)("p", {
                            role: "alert",
                            children: v.favoriteNotice,
                          })
                        : null,
                      (0, r.jsxs)(aX, {
                        edgeRef: y,
                        keyword: v.keyword,
                        scrollRootId: g,
                        selectionMode: h.selectionMode,
                        children: [
                          j.map((e, t) => {
                            var a;
                            return (0, r.jsx)(
                              aJ,
                              {
                                session: h,
                                locked: b,
                                maxSelectedCount: v.maxSelectedCount,
                                onSelectionLimitReached: u,
                                onToggle: h.toggleSelection,
                                row: e,
                                rowCount: j.length,
                                rowIndex: t,
                                selectedCount: v.selectedSubjectIds.length,
                                selectedSubjectIds: x,
                                selectionMode: h.selectionMode,
                              },
                              null == (a = e[0]) ? void 0 : a.subject_id,
                            );
                          }),
                          (0, r.jsx)(aH, {
                            disabled: b,
                            hasMore: v.hasMore,
                            loading: "loading" === v.loadMorePhase,
                            loadMoreError: "error" === v.loadMorePhase,
                            onLoadMore: f,
                            scrollRootId: g,
                          }),
                        ],
                      }),
                    ],
                  })
          : (0, r.jsx)(aq, { children: (0, n._3t)() });
      }
      function aG() {
        return (0, r.jsxs)("div", {
          className:
            "h-full w-full overflow-hidden rounded-canvas-asset-library-media-wall",
          "data-testid": "canvas-asset-library-skeleton",
          children: [
            (0, r.jsx)("output", {
              className: "sr-only",
              children: (0, n.Woq)(),
            }),
            (0, r.jsx)("div", {
              "aria-hidden": "true",
              className:
                "grid grid-cols-[repeat(6,minmax(0,1fr))] gap-x-2 gap-y-canvas-asset-library-subject",
              children: a_.map((e) =>
                (0, r.jsxs)(
                  "div",
                  {
                    className:
                      "flex flex-col items-start gap-canvas-asset-library-subject pb-canvas-asset-library-subject-card-bottom",
                    "data-asset-skeleton-card": !0,
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "aspect-square w-full rounded-canvas-asset-library-subject-preview bg-dreamina-block-secondary-default",
                        "data-asset-skeleton-cover": !0,
                      }),
                      (0, r.jsx)(ab, {
                        insetClassName: "px-canvas-asset-library-subject",
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        });
      }
      function aX(e) {
        let {
            children: t,
            edgeRef: a,
            keyword: i,
            scrollRootId: o,
            selectionMode: c,
          } = e,
          d = (0, s.useRef)(null),
          u = (0, te._l)({
            contentVersion: i,
            hostRef: d,
            scrollSelector: "[data-subject-import-scroll]",
          });
        return (0, r.jsxs)("div", {
          className:
            "group/canvas-panel-scrollbar relative h-full px-canvas-asset-library-content-inline",
          "data-subject-import-scroll-host": !0,
          ref: d,
          style: { minHeight: 0 },
          children: [
            (0, r.jsx)(
              tJ.x8,
              {
                "aria-label": (0, n.dAd)("subjects"),
                "aria-multiselectable": "multiple" === c || void 0,
                className: (0, l.cn)(
                  "h-full overflow-x-hidden rounded-canvas-asset-library-media-wall",
                  (0, te.G9)({ lane: "none", overflowing: !1 }),
                ),
                "data-column-count": 6,
                "data-subject-import-scroll": "",
                "data-testid": "canvas-subject-import-virtual-list",
                id: o,
                itemSize: 159,
                overscan: 3,
                role: "listbox",
                tabIndex: 0,
                children: t,
              },
              i,
            ),
            (0, r.jsx)(te.Lw, {
              contentVersion: i,
              edgeRef: a,
              hostRef: d,
              overflowing: u,
              scrollSelector: "[data-subject-import-scroll]",
              thumbClassName: aj,
            }),
          ],
        });
      }
      function aJ(e) {
        let {
            session: t,
            locked: a,
            maxSelectedCount: s,
            onSelectionLimitReached: i,
            onToggle: n,
            row: o,
            rowCount: l,
            rowIndex: c,
            selectedCount: d,
            selectedSubjectIds: u,
            selectionMode: m,
          } = e,
          p = void 0 !== s && d >= s;
        return (0, r.jsx)("div", {
          className: "grid grid-cols-[repeat(6,minmax(0,1fr))] gap-x-2",
          "data-subject-import-row": !0,
          style: { paddingBottom: 8 },
          children: o.map((e, s) => {
            var d;
            return (0, r.jsx)(
              aK,
              {
                favorite: {
                  selected:
                    (null == (d = e.subject_control)
                      ? void 0
                      : d.is_favorite) === !0,
                  pending: t
                    .getSnapshot()
                    .favoritePendingIds.includes(e.subject_id),
                  disabledReason: t.getFavoriteDisabledReason(),
                  onToggle: () => t.toggleFavorite(e.subject_id),
                },
                locked: a,
                mediaWallCornerClassName: (function (e) {
                  let {
                      columnIndex: t,
                      rowCount: a,
                      rowIndex: r,
                      rowLength: s,
                    } = e,
                    i = [];
                  return (
                    0 === r &&
                      0 === t &&
                      i.push("rounded-tl-canvas-asset-library-media-wall"),
                    0 === r &&
                      t === s - 1 &&
                      i.push("rounded-tr-canvas-asset-library-media-wall"),
                    r === a - 1 &&
                      0 === t &&
                      i.push("rounded-bl-canvas-asset-library-media-wall"),
                    r === a - 1 &&
                      t === s - 1 &&
                      i.push("rounded-br-canvas-asset-library-media-wall"),
                    i.length > 0 ? i.join(" ") : void 0
                  );
                })({
                  columnIndex: s,
                  rowCount: l,
                  rowIndex: c,
                  rowLength: o.length,
                }),
                onSelectionLimitReached: i,
                selected: u.has(e.subject_id),
                selectionLimitReached: p,
                selectionMode: m,
                subject: e,
                onToggle: n,
              },
              e.subject_id,
            );
          }),
        });
      }
      function a$(e) {
        let { interactionLocked: t, onRetry: a } = e;
        return (0, r.jsxs)("div", {
          className:
            "flex h-full flex-col items-center justify-center font-dreamina-cn text-dreamina-cn-14 text-dreamina-text-secondary",
          role: "alert",
          style: { gap: 12, padding: "0 24px" },
          children: [
            (0, r.jsx)("p", { children: (0, n.fEZ)() }),
            (0, r.jsx)(l.$nd, {
              disabled: t,
              size: "sm",
              variant: "secondary",
              onClick: a,
              children: (0, n.Kjy)(),
            }),
          ],
        });
      }
      function aK(e) {
        var t, a;
        let s,
          {
            favorite: i,
            locked: o,
            mediaWallCornerClassName: c,
            onSelectionLimitReached: d,
            onToggle: u,
            selected: m,
            selectionLimitReached: p,
            selectionMode: h,
            subject: v,
          } = e,
          g =
            (null == (a = v.content) || null == (t = a.name)
              ? void 0
              : t.trim()) || v.subject_id,
          b = (function (e, t) {
            var a, s, i, n;
            let o,
              c,
              { interactionLocked: d } = t,
              u = null == (a = e.content) ? void 0 : a.main_image,
              m = null == (s = e.content) ? void 0 : s.video_info,
              p =
                (null == u ? void 0 : u.image_url) ??
                (null == u ? void 0 : u.origin_url) ??
                ((i = null == u ? void 0 : u.cover_url_map)
                  ? Object.values(i).find((e) => e.trim().length > 0)
                  : void 0) ??
                (null == m ? void 0 : m.cover_url) ??
                void 0;
            ((null == m ? void 0 : m.duration) !== void 0 &&
              (o = 1e3 * m.duration),
              d ||
                (c =
                  (null == (n = null == m ? void 0 : m.video_url)
                    ? void 0
                    : n.trim()) || void 0));
            let h = ad(c, o),
              v = "size-full object-cover";
            m && (v = "size-full bg-dreamina-bg-mask-80 object-contain");
            let g = (0, r.jsx)(l.kZC, {});
            m && (g = (0, r.jsx)(l.eDg, {}));
            let b = (0, r.jsx)("span", {
              className:
                "flex size-full items-center justify-center text-dreamina-text-secondary",
              children: g,
            });
            p &&
              (b = (0, r.jsx)("img", {
                alt: "",
                className: v,
                crossOrigin: "anonymous",
                decoding: "async",
                loading: "lazy",
                src: p,
              }));
            let f = null;
            c &&
              h.active &&
              (f = (0, r.jsx)(ac, {
                fit: "contain",
                onElapsedTimeChange: h.setElapsedTimeMs,
                playbackUrl: c,
                posterUrl: p,
              }));
            let y = null;
            return (
              void 0 !== h.visibleTimeMs &&
                (y = (0, r.jsx)(as, { timeMs: h.visibleTimeMs })),
              {
                content: (0, r.jsxs)(r.Fragment, { children: [b, f, y] }),
                onPointerEnter: h.onPointerEnter,
                onPointerLeave: h.onPointerLeave,
              }
            );
          })(v, { interactionLocked: o });
        return (
          !m && p && (s = (0, n.bgw)()),
          (0, r.jsxs)("article", {
            className:
              "flex flex-col items-start gap-canvas-asset-library-subject pb-canvas-asset-library-subject-card-bottom",
            style: { minWidth: 0 },
            children: [
              (0, r.jsx)(ae, {
                favorite: i,
                assetCategory: "subject",
                assetId: v.subject_id,
                className: `aspect-square w-full rounded-canvas-asset-library-subject-preview ${c ?? ""}`,
                disabledReason: s,
                label: (0, n.CwV)(g),
                onClick: () => {
                  o || u(v.subject_id);
                },
                onDisabledActivate: s ? d : void 0,
                onPointerEnter: b.onPointerEnter,
                onPointerLeave: b.onPointerLeave,
                selected: m,
                selectionFrame: "inset-ring",
                selectionMode: h,
                children: b.content,
              }),
              (0, r.jsx)("h3", {
                className:
                  "max-h-canvas-asset-library-subject-title w-full truncate text-center font-dreamina-cn text-dreamina-cn-12 font-dreamina-medium leading-canvas-asset-library-subject-title text-dreamina-text-primary",
                title: g,
                children: g,
              }),
            ],
          })
        );
      }
      function aH(e) {
        let {
          disabled: t,
          hasMore: a,
          loading: s,
          loadMoreError: i,
          onLoadMore: n,
          scrollRootId: o,
        } = e;
        return a || s || i
          ? (0, r.jsx)(aA, {
              disabled: t,
              hasMore: a,
              loading: s,
              loadMoreError: i,
              onLoadMore: n,
              scrollRootId: o,
            })
          : null;
      }
      function aq(e) {
        let { busy: t = !1, children: a } = e;
        return t
          ? (0, r.jsx)(l.GuX, { message: a })
          : (0, r.jsx)(l.ppr, { title: a });
      }
      function a0(e) {
        let {
            api: t,
            assetLibraryService: a,
            commitTarget: i,
            config: n,
            enableCanvas: o = !1,
            canvasImportPlacement: l,
            importTarget: c,
            importCenter: d,
            interactionSubjectNodeId: u,
            interactionSource: m,
            onClose: p,
            onImportCancelled: h,
            onImportCompleted: g,
            onImportedNodes: b,
            onImportedSubjects: f,
            onSelectionBlocked: y,
            onPanelAction: x,
            open: j = !0,
            restoreFocusRef: S,
            subjectImportAdditionalTarget: C,
            subjectImportTarget: w,
          } = e,
          M = (function (e, t) {
            let [a, r] = (0, s.useState)(!1),
              [i, n] = (0, s.useState)(!1),
              o = (0, s.useRef)(e),
              l = (0, s.useRef)(e),
              c = (0, s.useRef)(!1),
              d = (0, s.useRef)(null),
              u = e && !o.current,
              m = !e && o.current && l.current;
            (e && (l.current = !0),
              u && (a || i) && (r(!1), n(!1), (c.current = !1)),
              !m || a || i || c.current || (r(!0), n(!0)),
              (o.current = e));
            let p = (0, s.useCallback)(() => {
                (r(!0), n(!0));
              }, []),
              h = i || (m && !a && !c.current);
            (0, s.useEffect)(() => {
              if (h && !c.current)
                return (function (e, t, a) {
                  var r;
                  let s = () => {
                      t.current || ((t.current = !0), a());
                    },
                    i = e ? window.getComputedStyle(e) : void 0,
                    n = (null == i ? void 0 : i.animationName) ?? "",
                    o =
                      (r = null == i ? void 0 : i.animationDuration) &&
                      "none" !== r
                        ? r.split(",").reduce((e, t) => {
                            var a;
                            let r = (a = t.trim()).endsWith("ms")
                              ? Number.parseFloat(a)
                              : a.endsWith("s")
                                ? 1e3 * Number.parseFloat(a)
                                : 0;
                            return Number.isFinite(r) ? Math.max(e, r) : e;
                          }, 0)
                        : 0;
                  if (!e || !n || "none" === n || 0 === o) return void s();
                  let l = window.setTimeout(s, o),
                    c = (t) => {
                      t.target === e && s();
                    };
                  return (
                    e.addEventListener("animationend", c),
                    () => {
                      (window.clearTimeout(l),
                        e.removeEventListener("animationend", c));
                    }
                  );
                })(d.current, c, () => {
                  (t(), n(!1));
                });
            }, [h, t]);
            let v = e && (!a || u);
            return {
              contentRef: d,
              presented: v,
              requestClose: p,
              visible: v || h,
            };
          })(j, p);
        (0, s.useEffect)(() => {
          if (M.visible) return (0, k.u$)();
        }, [M.visible]);
        let I = (0, s.useMemo)(
          () =>
            o
              ? (function (e) {
                  let t = v(e);
                  if (t.tabs.groups.some((e) => "canvas" === e.id)) return t;
                  let [a, ...r] = t.tabs.groups;
                  return {
                    ...t,
                    tabs: {
                      showPrimaryTabs: !0,
                      groups: [
                        a,
                        ...r,
                        { id: "canvas", secondaryTabs: ["all"] },
                      ],
                    },
                  };
                })(n)
              : n,
          [n, o],
        );
        return M.visible
          ? (0, r.jsx)(ex, {
              api: t,
              assetLibraryService: a,
              commitTarget: i,
              config: I,
              importTarget: c,
              interactionSubjectNodeId: u,
              interactionSource: m,
              onPanelAction: x,
              children: (0, r.jsx)(a1, {
                api: t,
                contentRef: M.contentRef,
                importCenter: d,
                canvasImportPlacement: l,
                onClose: M.requestClose,
                onImportCancelled: h,
                onImportCompleted: g,
                onImportedNodes: b,
                onImportedSubjects: f,
                onSelectionBlocked: y,
                open: M.presented,
                renderImportFailureToast:
                  (null == i ? void 0 : i.errorFeedbackOwner) !== "target",
                restoreFocusRef: S,
                subjectImportAdditionalTarget: C,
                subjectImportTarget: w,
              }),
            })
          : null;
      }
      function a1(e) {
        var t, a, i, n, l, c, d, u, m, p, h;
        let v,
          g,
          b,
          f,
          y,
          j,
          S,
          C,
          {
            api: w,
            contentRef: M,
            importCenter: N,
            canvasImportPlacement: k,
            onClose: A,
            onImportCancelled: D,
            onImportCompleted: z,
            onImportedNodes: P,
            onImportedSubjects: F,
            onSelectionBlocked: E,
            open: L,
            renderImportFailureToast: V,
            restoreFocusRef: Z,
            subjectImportAdditionalTarget: B,
            subjectImportTarget: W,
          } = e,
          Q = ej(),
          _ = eC(),
          O = eS((e) => e.activeSection),
          Y = I(_),
          G =
            "canvas" === O ||
            (!Y &&
              (null == (t = _.tabs.groups.find((e) => e.id === O))
                ? void 0
                : t.secondaryTabs.length) === 1),
          X =
            ((a = w),
            (i = Q),
            (n = O),
            (l = _.tabs.groups.some((e) => "subjects" === e.id)),
            (c = _.selectionMode),
            (d = B),
            (u = W),
            (v = U()),
            (g = (0, s.useMemo)(() => {
              if (!l) return null;
              let e = T(a),
                t = (e) => {
                  "single" === c && e.length > 0 && i.clearSelection();
                };
              return u
                ? new aQ.i(e, {
                    additionalTarget: d,
                    onFavoriteSettled: v,
                    onSelectionChange: t,
                    selectionMode: c,
                    target: u,
                  })
                : new aQ.i(e, {
                    onFavoriteSettled: v,
                    onSelectionChange: t,
                    selectionMode: c,
                  });
            }, [i, d, a, l, c, u, v])),
            (0, s.useEffect)(() => {
              if ("single" === c && g)
                return (
                  i.setSingleSelectionPeerClearer(() => g.clearSelection()),
                  () => i.setSingleSelectionPeerClearer(null)
                );
            }, [i, c, g]),
            (0, s.useEffect)(() => {
              "subjects" === n && g && g.start();
            }, [n, g]),
            (0, s.useEffect)(() => () => (null == g ? void 0 : g.stop()), [g]),
            g);
        ((m = X),
          (p = _),
          (f = ej()),
          (y = eS((e) => e.selectedAssets)),
          (j = eS((e) => e.occupiedSelectionIds)),
          (S = (0, s.useSyncExternalStore)(
            (null == m ? void 0 : m.subscribe) ?? a8,
            () => (null == m ? void 0 : m.getSelectedSubjectCount()) ?? 0,
            () => (null == m ? void 0 : m.getSelectedSubjectCount()) ?? 0,
          )),
          (C =
            ((b =
              void 0 ===
              (h = {
                maxSharedSelectedCount: p.maxSharedSelectedCount,
                maxSubjectSelectedCount: p.maxSubjectSelectedCount,
                selectedSharedAssetCount: x(y.values(), j),
              }).maxSharedSelectedCount
                ? void 0
                : Math.max(
                    0,
                    h.maxSharedSelectedCount - h.selectedSharedAssetCount,
                  )),
            void 0 === h.maxSubjectSelectedCount
              ? b
              : void 0 === b
                ? h.maxSubjectSelectedCount
                : Math.min(h.maxSubjectSelectedCount, b))),
          (0, s.useEffect)(() => {
            null == m || m.setMaxSelectedCount(C);
          }, [m, C]),
          (0, s.useEffect)(() => {
            f.setExternalSharedOccupancy(S);
          }, [f, S]));
        let J = (0, s.useCallback)(() => {
            (null == z || z(), A());
          }, [A, z]),
          $ = _.tabs.groups.some((e) => "canvas" === e.id),
          K = U(),
          H = (0, s.useMemo)(() => {
            if (!$) return;
            let e = T(w),
              t = (0, eL.y)((e) => ({
                activeProject: void 0,
                category: "image",
                keyword: "",
                filters: [],
                filterTimeAnchor: Date.now(),
                spaceAvailable: !0,
                teamId: void 0,
                memberUserId: "0",
                members: [],
                membersStatus: "idle",
                projects: [],
                items: [],
                previewUrls: new Map(),
                playbackUrls: new Map(),
                cursor: "",
                hasMore: !1,
                loading: !1,
                importing: !1,
                error: void 0,
                sourceDraftVersion: void 0,
                selections: [],
                selectedCountByProject: new Map(),
                importAvailable: !1,
                favoriteAvailable: !1,
                nodeFavoriteSupported: !1,
                favoritePendingNodeIds: [],
                favoritePendingProjectIds: [],
                importDisabledReason: void 0,
                notice: void 0,
                update: (t) => e(t),
              })),
              a = k ?? {
                kind: "point",
                point: N ?? e.canvas.getViewportCenter(),
              };
            return {
              store: t,
              actions: new eU({
                api: e,
                store: t,
                placement: a,
                onFavoriteSettled: K,
                maxSelectedCount: _.maxSelectedCount,
              }),
            };
          }, [w, k, _.maxSelectedCount, $, N, K]),
          q = (0, s.useMemo)(
            () => new R(w, Q, X, N, null == H ? void 0 : H.actions),
            [Q, w, H, N, X],
          ),
          ee =
            "importing" ===
            (0, s.useSyncExternalStore)(
              q.subscribe,
              q.getSnapshot,
              q.getSnapshot,
            ).importStatus,
          et = (0, s.useSyncExternalStore)(
            (null == H ? void 0 : H.store.subscribe) ?? a8,
            () => (null == H ? void 0 : H.store.getState()),
            () => (null == H ? void 0 : H.store.getState()),
          ),
          ea = ee || (null == et ? void 0 : et.importing) === !0,
          er = (0, s.useRef)(() => void 0);
        ((0, s.useEffect)(() => {
          if (!H) return;
          let e = (function (e, t) {
            if (!t) return () => void 0;
            let a = new Map(),
              r = (e) => JSON.stringify([e.sourceProjectId, e.nodeId]);
            for (let t of e.getState().selections)
              a.set(r(t), e.getState().category);
            return e.subscribe((e, s) => {
              var i, n, o, l, c;
              if (
                (null == (i = e.activeProject) ? void 0 : i.project_id) ===
                  (null == (n = s.activeProject) ? void 0 : n.project_id) &&
                e.category === s.category &&
                e.selections === s.selections &&
                e.importing === s.importing
              )
                return;
              let d = null == (o = e.activeProject) ? void 0 : o.project_id;
              (void 0 !== d &&
                d !== (null == (l = s.activeProject) ? void 0 : l.project_id) &&
                t.declare({
                  surface: "assetPanel",
                  gesture: "select_canvas",
                  context: { projectId: d },
                }),
                void 0 === d ||
                  d !==
                    (null == (c = s.activeProject) ? void 0 : c.project_id) ||
                  e.category === s.category ||
                  s.importing ||
                  e.importing ||
                  t.declare({
                    surface: "assetPanel",
                    gesture: "switch_sub_tab",
                    context: {
                      projectId: d,
                      beforeSubTab: s.category,
                      afterSubTab: e.category,
                    },
                  }));
              let u = new Set(s.selections.map(r)),
                m = new Set(e.selections.map(r));
              for (let i of e.selections)
                !u.has(r(i)) &&
                  (a.set(r(i), e.category),
                  s.importing ||
                    e.importing ||
                    t.declare({
                      surface: "assetPanel",
                      gesture: "select",
                      context: {
                        projectId: i.sourceProjectId,
                        category: e.category,
                      },
                    }));
              for (let i of s.selections) {
                if (m.has(r(i))) continue;
                let n = a.get(r(i));
                (s.importing ||
                  e.importing ||
                  void 0 === n ||
                  t.declare({
                    surface: "assetPanel",
                    gesture: "unselect",
                    context: { projectId: i.sourceProjectId, category: n },
                  }),
                  a.delete(r(i)));
              }
              if (s.importing || !e.importing) return;
              let p = new Set();
              for (let s of e.selections) {
                let e = a.get(r(s));
                if (void 0 === e)
                  throw Error(
                    "Accepted canvas selection has no gesture category",
                  );
                let i = JSON.stringify([s.sourceProjectId, e]);
                p.has(i) ||
                  (p.add(i),
                  t.declare({
                    surface: "assetPanel",
                    gesture: "confirm",
                    context: { projectId: s.sourceProjectId, category: e },
                  }));
              }
            });
          })(H.store, T(w).canvas.gestures);
          er.current = e;
          let t = T(w).canvas.subscribeEditAvailability(
            H.actions.refreshAvailability,
          );
          return () => {
            (e(), t(), H.actions.dispose());
          };
        }, [w, H]),
          (0, s.useEffect)(() => {
            "canvas" === O && (null == H || H.actions.start());
          }, [O, H]));
        let es = (0, s.useCallback)(() => {
            (er.current(),
              null == H || H.actions.dispose(),
              q.cancelImport() && (null == D || D()),
              A());
          }, [H, q, A, D]),
          ei = (0, s.useCallback)(() => A(), [A]);
        return (
          (0, s.useEffect)(() => {
            w.app.observability.facts.emit(o.jB, {});
          }, [w.app.observability.facts]),
          (0, r.jsx)(a2, {
            activeSection: O,
            api: w,
            config: _,
            contentRef: M,
            importCoordinator: q,
            interactionLocked: ea,
            onClose: es,
            onImported: J,
            onImportedNodes: P,
            onImportedSubjects: F,
            onImportStarted: ei,
            onSelectionBlocked: E,
            open: L,
            renderImportFailureToast: V,
            renderImportSuccessToast: $,
            restoreFocusRef: Z,
            singleRowLayout: G,
            subjectImportSession: X,
            canvasBrowser: H && et ? { actions: H.actions, state: et } : void 0,
          })
        );
      }
      function a2(e) {
        var t, a, i, n, o;
        let {
            activeSection: d,
            config: m,
            contentRef: p,
            interactionLocked: h,
            open: v,
            onClose: g,
            restoreFocusRef: b,
            singleRowLayout: f,
          } = e,
          {
            api: y,
            importCoordinator: x,
            onImported: j,
            onImportedNodes: S,
            onImportedSubjects: C,
            onImportStarted: w,
          } = e,
          {
            onSelectionBlocked: M,
            renderImportFailureToast: N,
            renderImportSuccessToast: k,
            subjectImportSession: T,
          } = e,
          A = (function (e) {
            var t;
            let {
                activeSection: a,
                canvasBrowser: r,
                contentRef: i,
                interactionLocked: n,
                open: o,
                subjectImportSession: l,
              } = e,
              c = ej(),
              d = eS((e) => e.activeCategory),
              u = eS((e) => e.pages[e.activeCategory]),
              m = eS((e) => e.selectionMode),
              p = (null == l ? void 0 : l.subscribe) ?? a8,
              h = (0, s.useSyncExternalStore)(
                p,
                () => (null == l ? void 0 : l.getSnapshot().subjects) ?? a6,
                () => (null == l ? void 0 : l.getSnapshot().subjects) ?? a6,
              ),
              v = (0, s.useSyncExternalStore)(
                p,
                () => (null == l ? void 0 : l.getSnapshot().keyword) ?? "",
                () => (null == l ? void 0 : l.getSnapshot().keyword) ?? "",
              ),
              g = (0, s.useMemo)(
                () =>
                  "canvas" === a
                    ? ((null == r
                        ? void 0
                        : r.state.items
                            .filter((e) => e.copyable)
                            .map((e) => e.asset_key)) ?? [])
                    : "subjects" === a
                      ? h.map((e) => e.subject_id)
                      : u.items.map((e) => e.assetId),
                [a, null == r ? void 0 : r.state.items, u.items, h],
              ),
              b = (0, s.useCallback)(
                (e) => {
                  if ("canvas" === a) {
                    null == r || r.actions.addItemsToSelection(e);
                    return;
                  }
                  let t = new Set(e);
                  if ("subjects" === a) {
                    let e =
                      null == l
                        ? void 0
                        : l.addSubjectsToSelection(
                            h.filter((e) => t.has(e.subject_id)),
                          );
                    (null == e ? void 0 : e.selectionLimitReached) &&
                      c.reportSelectionBlocked("limitReached", "subject");
                    return;
                  }
                  c.addAssetsToSelection(
                    u.items.filter((e) => t.has(e.assetId)),
                  );
                },
                [c, a, null == r ? void 0 : r.actions, u.items, l, h],
              ),
              f =
                ("canvas" !== a ||
                  !!(null == r ? void 0 : r.state.activeProject)) &&
                "multiple" === m &&
                ("subjects" !== a || null !== l),
              y =
                "canvas" !== a ||
                !!(
                  (null == r ? void 0 : r.state.importAvailable) &&
                  !r.state.loading &&
                  !r.state.importing
                );
            return {
              ...(function (e) {
                let {
                    candidateIds: t,
                    enabled: a,
                    onCommit: r,
                    rootRef: i,
                    scopeKey: n,
                  } = e,
                  o = (0, s.useRef)(null),
                  l = (0, s.useRef)(null);
                l.current ?? (l.current = new t2(i, o));
                let c = l.current;
                return (
                  (0, s.useLayoutEffect)(
                    () => c.synchronizeCommittedInputs(t, a, r, n),
                    [t, a, c, r, n],
                  ),
                  (0, s.useLayoutEffect)(() => c.connectDialogBackdrop(), [c]),
                  (0, s.useEffect)(() => () => c.dispose(), [c]),
                  {
                    onClickCapture: c.handleClickCapture,
                    onDragStartCapture: c.handleDragStartCapture,
                    onMouseDownCapture: c.handleMouseDownCapture,
                    onScrollCapture: c.handleScrollCapture,
                    overlayRef: o,
                  }
                );
              })({
                candidateIds: g,
                enabled: o && !n && f && y,
                onCommit: b,
                rootRef: i,
                scopeKey:
                  "canvas" === a
                    ? JSON.stringify([
                        "canvas",
                        null == r || null == (t = r.state.activeProject)
                          ? void 0
                          : t.project_id,
                        null == r ? void 0 : r.state.category,
                        null == r ? void 0 : r.state.keyword,
                        null == r ? void 0 : r.state.filters,
                        null == r ? void 0 : r.state.filterTimeAnchor,
                        null == r ? void 0 : r.state.memberUserId,
                        null == r ? void 0 : r.state.teamId,
                        null == r ? void 0 : r.state.sourceDraftVersion,
                      ])
                    : "subjects" === a
                      ? `subjects:${v}`
                      : `assets:${d}:${u.queryKey}`,
              }),
              renderOverlay: f,
            };
          })({
            activeSection: d,
            canvasBrowser: e.canvasBrowser,
            contentRef: p,
            interactionLocked: h,
            open: v,
            subjectImportSession: T,
          });
        return (0, r.jsx)(c.lG, {
          open: v,
          onOpenChange: (e) => {
            e || g();
          },
          children: (0, r.jsx)(c.Cf, {
            ...(function (e) {
              let { boxSelection: t, restoreFocusRef: a } = e;
              return {
                onClick: (e) => e.stopPropagation(),
                onClickCapture: t.onClickCapture,
                onCloseAutoFocus: (e) => {
                  (null == a ? void 0 : a.current) &&
                    (e.preventDefault(), a.current.focus());
                },
                onDragStartCapture: t.onDragStartCapture,
                onEscapeKeyDown: (e) => {
                  let t = e.target;
                  t instanceof Element &&
                    (t.closest("[data-ui-date-calendar-grid]") ||
                      t.closest('[role="dialog"][aria-label="Time"]')) &&
                    e.preventDefault();
                },
                onMouseDownCapture: t.onMouseDownCapture,
                onOpenAutoFocus: (e) => {
                  (e.preventDefault(),
                    e.currentTarget instanceof HTMLElement &&
                      e.currentTarget.focus());
                },
                onPointerDownOutside: (e) => e.preventDefault(),
                onScrollCapture: t.onScrollCapture,
                style: {
                  transformOrigin: (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {
                            height: globalThis.innerHeight,
                            width: globalThis.innerWidth,
                          };
                    if (!e) return "0 50%";
                    let a = Math.min(801, Math.max(0, t.width - 32)),
                      r = Math.min(620, Math.max(0, t.height - 32)),
                      s = t.width / 2 - a / 2,
                      i = t.height / 2 - r / 2,
                      n = e.getBoundingClientRect(),
                      o = n.left + n.width / 2 - s,
                      l = n.top + n.height / 2 - i;
                    return `${o}px ${l}px`;
                  })(null == a ? void 0 : a.current),
                },
              };
            })({ boxSelection: A, restoreFocusRef: b }),
            ref: p,
            "aria-describedby": "canvas-asset-library-description",
            "aria-labelledby":
              ((i = d),
              (n = I(m)),
              (o = f),
              n || (o && "assets" === i)
                ? "canvas-asset-library-dialog-title"
                : "canvas-asset-library-primary-title"),
            className: (0, l.cn)(
              "h-[min(620px,calc(100vh-32px))] max-h-[calc(100vh-32px)] w-[min(801px,calc(100vw-32px))] max-w-none overflow-visible border-0 bg-dreamina-bg-surface text-octo-workbench-text-primary shadow-canvas-asset-library-dialog outline-none motion-safe:data-[state=closed]:animate-dreamina-dialog-exit motion-safe:data-[state=open]:animate-dreamina-dialog-enter",
              "canvas" === d && "w-canvas-asset-library-dialog",
              l.ero.surfaceOutlineNone,
            ),
            forceMount: !0,
            "data-testid": "canvas-asset-library-dialog",
            overlayClassName:
              "bg-dreamina-bg-mask-60 motion-safe:data-[state=closed]:animate-dreamina-dialog-overlay-exit motion-safe:data-[state=open]:animate-dreamina-dialog-overlay-enter",
            children: (0, r.jsxs)(u.yF, {
              children: [
                (0, r.jsxs)(c.mX, {
                  className: (0, l.cn)(
                    "grid size-full grid-cols-[minmax(0,1fr)]",
                    f
                      ? "grid-rows-[68px_minmax(0,476px)_76px]"
                      : "grid-rows-[104px_minmax(0,440px)_76px]",
                  ),
                  "data-testid": "canvas-asset-library-surface",
                  children: [
                    (0, r.jsx)(a3, {
                      activeSection: d,
                      interactionLocked: h,
                      onClose: g,
                      showPrimaryTabs: I(m),
                      singleRowLayout: f,
                      subjectImportSession: T,
                    }),
                    "canvas" === d && e.canvasBrowser
                      ? (0, r.jsx)(aV, { ...e.canvasBrowser })
                      : (0, r.jsx)(a5, {
                          activeSection: d,
                          api: y,
                          config: m,
                          interactionLocked: h,
                          subjectImportSession: T,
                        }),
                    (0, r.jsx)(tX, { onSelectionBlocked: M }),
                    (0, r.jsx)(eO, {
                      canvasImportActionState: e.canvasBrowser
                        ? {
                            available: e.canvasBrowser.state.importAvailable,
                            disabledReason: e.canvasBrowser.state
                              .importAvailable
                              ? void 0
                              : e.canvasBrowser.state.importDisabledReason,
                          }
                        : void 0,
                      canvasNotice:
                        null == (t = e.canvasBrowser) ? void 0 : t.state.notice,
                      canvasSelectionCount:
                        (null == (a = e.canvasBrowser)
                          ? void 0
                          : a.state.selections.length) ?? 0,
                      coordinator: x,
                      onClose: g,
                      onImported: j,
                      onImportedNodes: S,
                      onImportedSubjects: C,
                      onImportStarted: w,
                      renderImportFailureToast: N,
                      renderImportSuccessToast: k,
                      subjectImportSession: T,
                    }),
                  ],
                }),
                A.renderOverlay
                  ? (0, r.jsx)(a4, { overlayRef: A.overlayRef })
                  : null,
              ],
            }),
          }),
        });
      }
      function a4(e) {
        let { overlayRef: t } = e;
        return "u" < typeof document
          ? null
          : (0, i.createPortal)(
              (0, r.jsx)("div", {
                "aria-hidden": "true",
                className: (0, l.cn)(
                  "pointer-events-none fixed left-0 top-0 box-border border border-dreamina-on-media-text-tertiary bg-dreamina-block-secondary-default",
                  d.FR.floating,
                ),
                "data-testid": "canvas-asset-library-box-selection",
                hidden: !0,
                ref: t,
              }),
              document.body,
            );
      }
      function a3(e) {
        let {
            activeSection: t,
            interactionLocked: a,
            onClose: s,
            showPrimaryTabs: i,
            singleRowLayout: o,
            subjectImportSession: l,
          } = e,
          c = null,
          d = null;
        return (
          o && "canvas" !== t
            ? (c = (0, r.jsx)(a9, {
                activeSection: t,
                inline: !0,
                interactionLocked: a,
                subjectImportSession: l,
              }))
            : "canvas" !== t &&
              (d = (0, r.jsx)(a9, {
                activeSection: t,
                interactionLocked: a,
                subjectImportSession: l,
              })),
          (0, r.jsxs)("div", {
            className: "px-6 pt-6",
            "data-testid": "canvas-asset-library-operation-area",
            style: { paddingBottom: 8 * !!o },
            children: [
              (0, r.jsx)(e9, {
                interactionLocked: a,
                onClose: s,
                visibleTitle: (function (e, t, a) {
                  if (!t && ("subjects" === e || !a)) return (0, n.dAd)(e);
                })(t, i, o),
                children: c,
              }),
              d,
            ],
          })
        );
      }
      function a5(e) {
        let {
            activeSection: t,
            api: a,
            config: i,
            interactionLocked: n,
            subjectImportSession: o,
          } = e,
          l = ej(),
          c = (0, s.useCallback)(() => {
            l.reportSelectionBlocked("limitReached", "subject");
          }, [l]);
        if ("assets" === t) {
          let e = I(i),
            t = "canvas-asset-library-primary-title";
          return (
            e && (t = "canvas-asset-section-tab-assets"),
            (0, r.jsx)("section", {
              "aria-labelledby": t,
              className: "col-start-1 row-start-2 min-h-0",
              id: "canvas-asset-section-panel-assets",
              role: e ? "tabpanel" : void 0,
              children: (0, r.jsx)(aS, { interactionLocked: n }),
            })
          );
        }
        let d = I(i),
          u = d
            ? "canvas-asset-section-tab-subjects"
            : "canvas-asset-library-primary-title";
        return (0, r.jsx)("section", {
          "aria-labelledby": u,
          className: "col-start-1 row-start-2 min-h-0",
          id: "canvas-asset-section-panel-subjects",
          role: d ? "tabpanel" : void 0,
          children: (0, r.jsx)("div", {
            "aria-labelledby": d ? "canvas-asset-tab-all" : u,
            className: "h-full",
            "data-testid": "canvas-asset-library-subjects-panel",
            id: "canvas-asset-panel-all",
            role: d ? "tabpanel" : "region",
            tabIndex: -1,
            children: o
              ? (0, r.jsx)(aY, {
                  api: T(a),
                  interactionLocked: n,
                  onSelectionLimitReached: c,
                  session: o,
                })
              : null,
          }),
        });
      }
      function a9(e) {
        var t, a;
        let {
            activeSection: s,
            inline: i = !1,
            interactionLocked: n,
            subjectImportSession: o,
          } = e,
          c = eC(),
          d = eS((e) => e.activeCategory);
        return "canvas" === s
          ? null
          : "subjects" === s
            ? o
              ? (0, r.jsx)(tZ, {
                  inline: i,
                  interactionLocked: n,
                  session: o,
                  showCategoryTabs: I(c),
                })
              : null
            : (0, r.jsxs)("div", {
                className: (0, l.cn)(
                  "flex h-9 min-w-0 flex-1 items-center justify-between gap-4",
                  i ? null : "mt-2",
                ),
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex shrink-0 items-center",
                    "data-testid": "canvas-asset-library-navigation-controls",
                    style: { gap: 2, minWidth: 0 },
                    children: [
                      ((t = N(c, d)),
                      (a = n),
                      "title" === t.kind
                        ? (0, r.jsx)(e2, { category: t.category })
                        : (0, r.jsx)(e1, { interactionLocked: a })),
                      (0, r.jsx)(tt, { disabled: n }),
                    ],
                  }),
                  (0, r.jsx)(tU, { interactionLocked: n }),
                ],
              });
      }
      let a8 = () => () => void 0,
        a6 = [];
    },
    49559(e, t, a) {
      var r = a(90561),
        s = a(87429),
        i = a(172),
        n = a(13739);
      let o = (0, s.memo)(function (e) {
        let { url: t, size: a = 20 } = e,
          s = (0, r.jsx)("span", {
            className: "flex h-full w-full items-center justify-center",
            children: (0, r.jsx)(i.QqB, {
              className: "text-dreamina-text-placeholder",
              "data-canvas-project-placeholder": "",
              size: a,
            }),
          });
        return t
          ? (0, r.jsx)(
              n.X,
              {
                alt: "",
                className: "h-full w-full object-contain",
                fallback: s,
                loading: "lazy",
                src: t,
              },
              t,
            )
          : s;
      });
      a.d(t, {}, { G: o });
    },
    13739(e, t, a) {
      var r = a(90561),
        s = a(87429);
      function i(e) {
        let {
            alt: t,
            className: a,
            fallback: i,
            onError: n,
            onLoad: o,
            ...l
          } = e,
          [c, d] = (0, s.useState)("loading");
        return (0, r.jsxs)("span", {
          className:
            "relative block h-full w-full overflow-hidden bg-dreamina-block-secondary-default",
          "data-asset-preview-status": c,
          children: [
            "error" === c && i
              ? (0, r.jsx)("span", {
                  className: "absolute inset-0",
                  children: i,
                })
              : null,
            "error" !== c
              ? (0, r.jsx)("img", {
                  ...l,
                  alt: t,
                  className: `${a ?? ""} transition-opacity duration-150 ${"ready" === c ? "opacity-100" : "opacity-0"}`,
                  crossOrigin: "anonymous",
                  draggable: !1,
                  onError: (e) => {
                    (d("error"), null == n || n(e));
                  },
                  onLoad: (e) => {
                    (d("ready"), null == o || o(e));
                  },
                })
              : null,
          ],
        });
      }
      a.d(t, { X: () => i });
    },
    39580(e, t, a) {
      var r = a(93980);
      a.d(t, { BB: () => r.BB, KQ: () => r.KQ, hd: () => r.hd });
    },
    17994(e, t, a) {
      var r = a(90561),
        s = a(172),
        i = a(23784);
      function n(e, t, a) {
        if ("tool" === e) {
          if ("camera" === a) return (0, r.jsx)(s.d6l, {});
          if ("palette" === a) return (0, r.jsx)(s.ZPY, {});
          if ("style" === a) return (0, r.jsx)(s.jnK, {});
          if ("camera_motion" === a) return (0, r.jsx)(s.EJX, {});
        }
        return (0, i.W2)(e, t);
      }
      a.d(t, { H: () => n });
    },
    78357(e, t, a) {
      var r = a(90561),
        s = a(172);
      function i(e) {
        let {
          className: t,
          disabled: a,
          label: i,
          onClick: n,
          onMouseDown: o,
        } = e;
        return (0, r.jsx)(s.K0, {
          className: (0, s.cn)(
            "group h-canvas-search-clear-hit w-canvas-search-clear-hit border-transparent bg-transparent p-canvas-search-clear-hit text-dreamina-button-secondary-text hover:bg-transparent hover:text-dreamina-text-primary active:bg-transparent active:text-dreamina-text-primary [&_svg]:h-canvas-search-clear-icon [&_svg]:w-canvas-search-clear-icon",
            t,
          ),
          disabled: a,
          icon: (0, r.jsx)("span", {
            className:
              "flex size-4 items-center justify-center rounded-canvas-search-clear bg-dreamina-block-secondary-default p-canvas-search-clear-visual group-hover:bg-dreamina-block-secondary-hover group-active:bg-dreamina-block-secondary-pressed",
            "data-canvas-search-clear-visual": !0,
            children: (0, r.jsx)(s.USm, { size: 12 }),
          }),
          label: i,
          onClick: n,
          onMouseDown: o,
        });
      }
      a.d(t, { E: () => i });
    },
    15792(e, t, a) {
      var r = a(90561),
        s = a(87429),
        i = a(43300),
        n = a(17994),
        o = a(76625),
        l = a(23784),
        c = a(63499),
        d = a(39995);
      let u = (0, s.lazy)(async () => ({
          default: (
            await Promise.all([a.e(2269), a.e(1607), a.e(9905)]).then(
              a.bind(a, 21656),
            )
          ).CanvasToolSearchArtwork,
        })),
        m = (0, s.lazy)(async () => ({
          default: (
            await Promise.all([a.e(2269), a.e(1607), a.e(9905)]).then(
              a.bind(a, 21656),
            )
          ).CanvasToolSearchPreview,
        }));
      function p(e) {
        let {
            intent: t,
            model: a,
            onFocusEnter: n,
            onFocusLeave: u,
            onPointerEnter: p,
            onPointerLeave: g,
            testId: b,
          } = e,
          f = (0, d.vP)();
        if (!(0, d.fA)()) return null;
        let y = a.preview;
        if ("tool" === y.kind) {
          let e = (0, o.Iq)(
            "camera" === y.toolKind
              ? { width: y.width ?? 400, height: y.height ?? 230 }
              : { width: "palette" === y.toolKind ? 270 : 320, height: 180 },
          );
          return (0, r.jsx)(o.YR, {
            accessible: !0,
            label: y.title,
            interactionOwner: f,
            ...e,
            intent: t,
            onPointerEnter: p,
            onPointerLeave: g,
            onFocusEnter: n,
            onFocusLeave: u,
            testId: b,
            children: (0, r.jsx)(s.Suspense, {
              fallback: (0, r.jsx)(h, { kind: "tool" }),
              children: (0, r.jsx)(
                m,
                { preview: y, anchorElement: t.anchorElement },
                t.value,
              ),
            }),
          });
        }
        if ("group" === y.kind) {
          let e = (0, o.Iq)(y);
          return (0, r.jsx)(o.YR, {
            ...e,
            intent: t,
            onPointerEnter: p,
            onPointerLeave: g,
            testId: b,
            children: (0, r.jsx)(v, {
              groupHeight: y.height,
              groupWidth: y.width,
              items: y.items,
            }),
          });
        }
        let x =
          "text" === y.kind
            ? { ...y, textBody: (0, i.b7)(y.textBody ?? "") }
            : y;
        return (0, r.jsx)(l.m7, {
          renderer: c.Ag,
          children: (0, r.jsx)(l.PQ, {
            intent: t,
            onFocusEnter: n,
            onFocusLeave: u,
            onPointerEnter: p,
            onPointerLeave: g,
            testId: b,
            interactionOwner: f,
            model: { ...a, preview: x },
          }),
        });
      }
      function h(e) {
        let { icon: t, kind: a, transparent: s = !1 } = e;
        return (0, r.jsx)(l.y5, { icon: t, kind: a, transparent: s });
      }
      function v(e) {
        let {
          groupHeight: t,
          groupWidth: a,
          items: s,
          transparentBackground: i = !1,
        } = e;
        return 0 === s.length || a <= 0 || t <= 0
          ? (0, r.jsx)(h, { kind: "group", transparent: i })
          : (0, r.jsx)("span", {
              className: `relative block size-full ${i ? "bg-transparent" : "bg-dreamina-bg-menu"}`,
              "data-canvas-group-preview-surface": "",
              children: s.map((e) => {
                let s = {
                  height: `${100 * Math.max(0, e.height / t)}%`,
                  left: `${100 * Math.max(0, e.x / a)}%`,
                  top: `${100 * Math.max(0, e.y / t)}%`,
                  width: `${100 * Math.max(0, e.width / a)}%`,
                };
                return (0, r.jsx)(
                  "span",
                  {
                    className:
                      "absolute overflow-hidden rounded-canvas-hover-preview-item border border-dreamina-stroke-primary bg-dreamina-block-secondary-default text-dreamina-text-secondary [&>svg]:size-4",
                    style: s,
                    children: (0, r.jsx)(g, { item: e }),
                  },
                  e.nodeId,
                );
              }),
            });
      }
      function g(e) {
        var t;
        let { item: a } = e,
          o = null == (t = a.preview) ? void 0 : t.previewUrl,
          [c, d] = (0, s.useState)();
        return o && c !== o
          ? (0, r.jsx)("img", {
              alt: "",
              className: "size-full object-cover",
              crossOrigin: "anonymous",
              decoding: "async",
              draggable: !1,
              onError: () => d(o),
              src: o,
            })
          : a.toolPreview
            ? (0, r.jsx)(s.Suspense, {
                fallback: (0, r.jsx)("span", {
                  className: "flex size-full items-center justify-center",
                  children: (0, n.H)(a.kind, void 0, a.toolKind),
                }),
                children: (0, r.jsx)(u, { preview: a.toolPreview }),
              })
            : a.hasAudioContent
              ? (0, r.jsx)(l.F3, {})
              : "text" === a.kind && a.textBody
                ? (0, r.jsx)("span", {
                    className:
                      "block size-full overflow-hidden p-canvas-hover-preview-child-inset text-canvas-hover-preview-item",
                    children: (0, i.b7)(a.textBody),
                  })
                : (0, r.jsx)("span", {
                    className: "flex size-full items-center justify-center",
                    children: (0, n.H)(a.kind),
                  });
      }
      a.d(t, { VZ: () => p, a$: () => v });
    },
    73513(e, t, a) {
      var r = a(78425);
      function s() {
        return {
          all: r.Ay.t("web_team_all_members", {}, "All members"),
          filter: r.Ay.t("octo_team_member_filter", {}, "Filter by member"),
          removed: r.Ay.t("octo_team_member_removed", {}, "Left team"),
          unknown: r.Ay.t("octo_team_member_unknown", {}, "Unknown member"),
          loading: r.Ay.t(
            "octo_team_members_loading",
            {},
            "Loading members...",
          ),
          failed: r.Ay.t(
            "octo_team_members_failed",
            {},
            "Unable to load member profiles.",
          ),
          retry: r.Ay.t("octo_team_members_retry", {}, "Reload members"),
        };
      }
      function i(e, t) {
        return t
          ? r.Ay.t(
              "web_canvas_credit_detail_agent_name",
              { name: e },
              "{name}'s agent",
            )
          : e;
      }
      a.d(t, { G: () => s, t: () => i });
    },
  },
]);
