"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2802],
  {
    39408(e, r, t) {
      var o = t(90561),
        a = t(87429),
        n = t(66876),
        i = t(172),
        s = t(60794),
        l = t(7379),
        d = t(37350);
      let u = (0, a.memo)(function (e) {
        var r;
        let t = e.surfaceClassName ?? l.S1;
        return (0, o.jsxs)("fieldset", {
          "aria-label": e.description,
          className: `${t} ${l.Ux}`,
          "data-state": "error",
          "data-testid": e.testId,
          id: e.descriptionId,
          children: [
            (0, o.jsx)("span", {
              "aria-hidden": "true",
              className: l._R,
              children: (0, o.jsx)(i.mo0, { size: 20 }),
            }),
            (0, o.jsx)("p", {
              elementtiming: "canvas-initial-content",
              "data-canvas-content-evidence": "element",
              "data-canvas-content-state": "business_error",
              className: l.ER,
              children: e.message,
            }),
            (r = e).action
              ? (0, o.jsx)(c, { action: r.action, selected: r.selected })
              : null,
            (0, o.jsx)("span", {
              "aria-label": e.selected && e.announce ? e.announcement : void 0,
              className: "sr-only",
              role: e.selected && e.announce ? "alert" : void 0,
              children: e.message,
            }),
          ],
        });
      });
      function c(e) {
        let { action: r, selected: t } = e,
          { writeChromeVisible: a } = (0, s.A1)(),
          u = (0, d.P)();
        if (r.requiresWriteChrome && !a) return null;
        let c = void 0 !== r.resourceId && u.pendingResourceId === r.resourceId,
          p = void 0 !== r.resourceId && u.pending;
        return (0, o.jsxs)(i.$nd, {
          "aria-label": r.label,
          busy: c || void 0,
          className: `relative z-canvas-media-result-failure-action ${l.Nu}`,
          disabledReason: p ? (0, n.COb)() : void 0,
          tabIndex: t ? void 0 : -1,
          type: "button",
          variant: "text",
          onClick: () => {
            p || r.onInvoke();
          },
          onPointerDown: p ? (e) => e.stopPropagation() : void 0,
          children: [
            c
              ? (0, o.jsx)(i.mPE, {
                  "aria-hidden": !0,
                  className: "animate-spin",
                  size: 16,
                })
              : null,
            c ? (0, n.COb)() : r.text,
          ],
        });
      }
      t.d(r, {}, { S: u });
    },
    87098(e, r, t) {
      function o(e) {
        let { batches: r, currentItemId: t, preferredKey: o } = e;
        if (0 === r.length) return -1;
        let a = void 0 === o ? -1 : r.findIndex((e) => e.key === o);
        return a >= 0
          ? a
          : void 0 === t
            ? 0
            : r.findIndex((e) => e.itemIds.includes(t));
      }
      t.d(r, { E: () => o });
    },
    73931(e, r, t) {
      var o = t(87429),
        a = t(47645),
        n = t(93998);
      let i = new Set();
      function s(e, r, t) {
        let s = (0, n.FY)(),
          [l, d] = (0, o.useState)(() => ({
            failedUrls: i,
            primaryResourceId: r,
            resourceBatches: t,
          })),
          u = (0, o.useRef)(l),
          c =
            l.primaryResourceId === r && l.resourceBatches === t
              ? l.failedUrls
              : i,
          p = (0, o.useCallback)(
            (o) => {
              var n, l;
              let c = u.current,
                p = i;
              if (
                (c.primaryResourceId === r &&
                  c.resourceBatches === t &&
                  (p = c.failedUrls),
                p.has(o.url))
              )
                return;
              let v = {
                failedUrls: new Set([...p, o.url]),
                primaryResourceId: r,
                resourceBatches: t,
              };
              ((u.current = v),
                d(v),
                void 0 !== e &&
                  (null == (l = s.featuresApi) ||
                    null == (n = l.app) ||
                    n.observability.facts.emit(a.Lo, {
                      nodeId: e,
                      resourceId: o.resourceId,
                      renderMode: o.renderMode,
                      selectionSource: o.selectionSource,
                      surface: o.surface,
                      reason: o.stage,
                    })));
            },
            [s, e, r, t],
          ),
          v = (0, o.useCallback)(() => {
            let e = u.current;
            if (
              e.primaryResourceId === r &&
              e.resourceBatches === t &&
              0 === e.failedUrls.size
            )
              return;
            let o = { failedUrls: i, primaryResourceId: r, resourceBatches: t };
            ((u.current = o), d(o));
          }, [r, t]);
        return (0, o.useMemo)(
          () => ({ clearFailedUrls: v, failedUrls: c, onUrlFailure: p }),
          [v, c, p],
        );
      }
      t.d(r, { W: () => s });
    },
    7402(e, r, t) {
      t.d(r, { b: () => d });
      var o = t(87429),
        a = t(66747),
        n = t(93998),
        i = t(40627);
      function s(e, r, t) {
        return {
          stage: t,
          url: e.url,
          resourceId: r,
          renderMode: "full",
          selectionSource: e.selectionSource,
          surface: "primary",
        };
      }
      function l(e, r, t) {
        return { resourceId: e, selectionSource: r, url: t };
      }
      function d(e) {
        let {
            presentation: r,
            previewFailures: t,
            resourceId: d,
            onReady: u,
            localUploadTargetUrl: c,
            renderMode: p = "full",
            ...v
          } = e,
          m = (function (e) {
            var r, t, a;
            let d = (0, n.FY)().imagePreviews,
              u = (0, o.useMemo)(
                () => l(e.resourceId, e.fallbackSelectionSource, e.fallbackUrl),
                [e.fallbackSelectionSource, e.fallbackUrl, e.resourceId],
              ),
              [c, p] = (0, o.useState)(() => ({
                current: u,
                renderRevision: 0,
              })),
              v =
                ((t = c.current),
                (a = e),
                t.resourceId !== a.resourceId ||
                  !a.candidates.some((e) => e.url === t.url)),
              m = (function (e, r) {
                if (!1 === e.enabled) return;
                let t = e.candidates.find(
                  (r) =>
                    r.url !== e.fallbackUrl &&
                    !e.previewFailures.failedUrls.has(r.url),
                );
                return !r ||
                  r.resourceId !== e.resourceId ||
                  e.previewFailures.failedUrls.has(r.url) ||
                  (r.url === e.fallbackUrl && t)
                  ? t
                  : e.candidates.find((e) => e.url === r.url);
              })(e, c.recovery),
              g = (function (e, r, t) {
                if (
                  (null == r ? void 0 : r.resourceId) === e &&
                  r.url === (null == t ? void 0 : t.url)
                )
                  return r;
              })(e.resourceId, c.recovery, m),
              h = (0, i.jF)(d, null == m ? void 0 : m.url),
              y = e.previewFailures.failedUrls.has(c.current.url),
              f = (function (e) {
                let {
                  currentPreview: r,
                  currentPreviewFailed: t,
                  fallbackPreview: a,
                  resourceId: n,
                  shouldReset: i,
                  targetCandidate: s,
                  targetLoadStatus: d,
                } = e;
                return (0, o.useMemo)(
                  () =>
                    "ready" === d && s ? l(n, s.source, s.url) : i || t ? a : r,
                  [r, t, a, n, i, s, d],
                );
              })({
                currentPreview: c.current,
                currentPreviewFailed: y,
                fallbackPreview: u,
                resourceId: e.resourceId,
                shouldReset: v,
                targetCandidate: m,
                targetLoadStatus: h.status,
              });
            ((0, o.useEffect)(() => {
              v && p({ current: u, renderRevision: 0 });
            }, [u, v]),
              (function (e) {
                let {
                    activeRecovery: r,
                    candidates: t,
                    fallbackPreview: a,
                    fallbackUrl: n,
                    loader: i,
                    previewFailures: d,
                    resourceId: u,
                    setState: c,
                    state: p,
                    targetCandidate: v,
                    targetLoad: m,
                  } = e,
                  g = null == v ? void 0 : v.url;
                (0, o.useEffect)(() => {
                  var e;
                  if ("ready" === m.status && v) {
                    let e = l(u, v.source, v.url);
                    c((t) => {
                      var o, a;
                      let n = ((o = t.current),
                        (a = e),
                        o.resourceId === a.resourceId &&
                          o.selectionSource === a.selectionSource &&
                          o.url === a.url)
                          ? t.current
                          : e,
                        i = !r && t.recovery ? void 0 : t.recovery,
                        s =
                          (null == r ? void 0 : r.url) === g
                            ? t.renderRevision + 1
                            : t.renderRevision;
                      return n === t.current &&
                        i === t.recovery &&
                        s === t.renderRevision
                        ? t
                        : { current: n, recovery: i, renderRevision: s };
                    });
                    return;
                  }
                  if ("failed" !== m.status || !v || d.failedUrls.has(v.url))
                    return;
                  let o = t.some(
                    (e) =>
                      e.url !== g && e.url !== n && !d.failedUrls.has(e.url),
                  );
                  (r ||
                    (null == (e = p.recovery) ? void 0 : e.url) !== n ||
                    o ||
                    i.recoverFromDisplayedFailure(p.recovery.url),
                    d.onUrlFailure(
                      s(
                        { selectionSource: v.source, url: v.url },
                        u,
                        m.failureStage ?? "load",
                      ),
                    ),
                    (null == r ? void 0 : r.url) === g &&
                      c((e) => ({
                        ...e,
                        current: g === n ? e.current : a,
                        recovery: void 0,
                      })));
                }, [
                  r,
                  t,
                  a,
                  n,
                  i,
                  d,
                  u,
                  c,
                  p.recovery,
                  v,
                  m.failureStage,
                  m.status,
                  g,
                ]);
              })({
                activeRecovery: g,
                candidates: e.candidates,
                fallbackPreview: u,
                fallbackUrl: e.fallbackUrl,
                loader: d,
                previewFailures: e.previewFailures,
                resourceId: e.resourceId,
                setState: p,
                state: c,
                targetCandidate: m,
                targetLoad: h,
              }));
            let b = (0, o.useCallback)(
                (r) => {
                  var t;
                  if (!1 !== e.enabled) {
                    if ((null == g ? void 0 : g.url) === r.url) {
                      if ("loading" === h.status) return;
                      "ready" === h.status &&
                        d.recoverFromDisplayedFailure(r.url);
                      return;
                    }
                    (null == (t = c.recovery) ? void 0 : t.url) !== r.url &&
                      ((r.url !== e.fallbackUrl || void 0 === m) &&
                        d.recoverFromDisplayedFailure(r.url),
                      p((e) => {
                        var t;
                        return (null == (t = e.recovery) ? void 0 : t.url) ===
                          r.url
                          ? e
                          : { ...e, recovery: r };
                      }));
                  }
                },
                [
                  null == g ? void 0 : g.url,
                  e.enabled,
                  e.fallbackUrl,
                  d,
                  null == (r = c.recovery) ? void 0 : r.url,
                  m,
                  h.status,
                ],
              ),
              I = (0, o.useCallback)(
                (e) => {
                  (null == g ? void 0 : g.url) === e.url &&
                    "ready" === h.status &&
                    p((e) =>
                      void 0 === e.recovery ? e : { ...e, recovery: void 0 },
                    );
                },
                [null == g ? void 0 : g.url, h.status],
              );
            return {
              ...f,
              onDisplayedUrlFailure: b,
              onDisplayedUrlLoad: I,
              renderRevision: c.renderRevision,
            };
          })({
            ...v,
            enabled: v.previewUpgradeEnabled,
            previewFailures: t,
            resourceId: d,
          }),
          g = (0, o.useRef)(!1),
          h = (0, o.useCallback)(
            (e) => {
              "decode" === e || g.current || !1 === v.previewUpgradeEnabled
                ? t.onUrlFailure(s(m, d, e))
                : m.onDisplayedUrlFailure(m);
            },
            [m, t, v.previewUpgradeEnabled, d],
          ),
          y = t.failedUrls.has(m.url),
          f = (0, o.useMemo)(() => {
            if (!y)
              return {
                candidateEnabled:
                  !1 !== v.previewUpgradeEnabled || m.url === v.fallbackUrl,
                localUploadTargetUrl: c,
                failureContext: {
                  renderMode: p,
                  resourceId: m.resourceId,
                  selectionSource: m.selectionSource,
                  url: m.url,
                },
                identity: {
                  renderRevision: m.renderRevision,
                  resourceId: m.resourceId,
                  url: m.url,
                },
                qualityOrderedUrls: v.candidates.map((e) => e.url),
                presentation: r,
                onCandidateFailure: h,
                onDisplayedFailure: (e) => m.onDisplayedUrlFailure(e),
                onReady: (e) => {
                  (m.onDisplayedUrlLoad(m), null == u || u(e));
                },
              };
          }, [
            r,
            h,
            u,
            c,
            p,
            m,
            y,
            v.fallbackUrl,
            v.candidates,
            v.previewUpgradeEnabled,
          ]),
          b = (0, a.I5)(f, d, void 0 !== c);
        return (
          (g.current = b.hasDisplayedPreview),
          { previewFailed: y, hasDisplayedPreview: b.hasDisplayedPreview }
        );
      }
    },
    73859(e, r, t) {
      var o = t(24548),
        a = t(66876),
        n = t(64534),
        i = t(68130),
        s = t(80699);
      function l(e) {
        if (0 === e.batches.length && void 0 === e.primaryPreview)
          return { type: "empty" };
        let r = (function (e) {
          if (void 0 !== e.viewingBatchKey) {
            let r = e.batches.find((r) => (0, s.V0)(r) === e.viewingBatchKey);
            if (r) return r;
          }
          let r = e.batches.find((e) => void 0 !== e.primaryResourceId);
          return (
            r ||
            (e.primaryPreview
              ? {
                  id: `primary:${e.primaryPreview.resourceId}`,
                  primaryResourceId: e.primaryPreview.resourceId,
                  resources: [e.primaryPreview],
                }
              : e.batches[0])
          );
        })(e);
        if (!r) return { type: "loading", appearance: "skeleton" };
        let t = (function (e, r, t) {
          let a = (0, s.dv)(e);
          if (
            !0 !== a.mediaTypeMismatch &&
            a.status === o.ao.success &&
            void 0 !== (0, s.NI)(a, "node")
          )
            return {
              type: "result",
              batchCount: t,
              currentBatch: e,
              batches: r,
            };
        })(r, e.batches, e.batchCount ?? e.batches.length);
        if (t && !e.requestPending) return t;
        let n = (0, i.j)(r.resources, e.generationQueueByResourceId);
        if (n) {
          var l, c, p;
          let e = {
              type: "queued",
              batch: r,
              resourceId: n.resourceId,
              queue: n.queue,
            },
            t =
              ((l = r),
              (c = n.resourceId),
              null == (p = l.resources.find((e) => e.resourceId === c))
                ? void 0
                : p.startedAtMs);
          return void 0 === t ? e : { ...e, startedAtMs: t };
        }
        return e.requestPending
          ? d(r)
          : (function (e, r, t) {
              let n = (0, s.dv)(e);
              if (
                !0 !== n.mediaTypeMismatch &&
                n.status === o.ao.success &&
                void 0 !== (0, s.NI)(n, "node")
              )
                return {
                  type: "result",
                  batchCount: t,
                  currentBatch: e,
                  batches: r,
                };
              if (
                e.resources.some(
                  (e) => void 0 === e.status || e.status === o.ao.running,
                )
              )
                return d(e);
              if (!0 !== n.mediaTypeMismatch && n.status === o.ao.success)
                return {
                  type: "error",
                  batch: e,
                  message: (0, a.UZY)(),
                  reason: "unavailable",
                  refreshResourceIds: [n.resourceId],
                };
              let i = e.resources
                .filter((e) => e.mediaTypeMismatch)
                .map((e) => e.resourceId);
              return i.length > 0
                ? {
                    type: "error",
                    batch: e,
                    message: (0, a.pj1)(),
                    reason: "typeMismatch",
                    refreshResourceIds: i,
                  }
                : {
                    type: "error",
                    batch: e,
                    message: (function (e) {
                      let r = e.resources.find((e) => e.status === o.ao.failed);
                      if (r) return u(r);
                      let t = e.resources.find(
                        (e) => e.status === o.ao.canceled,
                      );
                      return t ? u(t) : (0, a.GB6)();
                    })(e),
                    reason: e.resources.some((e) => e.status === o.ao.failed)
                      ? "failed"
                      : "canceled",
                    refreshResourceIds: [],
                  };
            })(r, e.batches, e.batchCount ?? e.batches.length);
      }
      function d(e) {
        let r = {
            type: "loading",
            appearance: e.resources.some((e) => e.status === o.ao.running)
              ? "progress"
              : "skeleton",
            batch: e,
          },
          t = e.resources.reduce(
            (e, r) =>
              r.status !== o.ao.running || void 0 === r.startedAtMs
                ? e
                : void 0 === e
                  ? r.startedAtMs
                  : Math.min(e, r.startedAtMs),
            void 0,
          );
        return void 0 === t ? r : { ...r, startedAtMs: t };
      }
      function u(e) {
        if (e.status === o.ao.failed) {
          var r;
          if (e.generationMode === o.xi.timelineRender) return (0, a.B0g)();
          let t = null == (r = e.errorMessage) ? void 0 : r.trim();
          if (t) return t;
          switch ((0, n.d)(e.errorCode)) {
            case "input_text_copyright":
              return (0, a.bYl)();
            case "content_safety":
              return (0, a.ciM)();
            case "generation_failed":
              return (0, a.GB6)();
          }
        }
        return e.status === o.ao.canceled ? (0, a.ApZ)() : (0, a.GB6)();
      }
      t.d(r, { R: () => u, t: () => l });
    },
    51362(e, r, t) {
      t.d(r, { VideoFlowNode: () => eM });
      var o = t(90561),
        a = t(87429),
        n = t(96103),
        i = t(39243),
        s = t(172),
        l = t(20663);
      let d = (0, a.memo)(function (e) {
        var r, t, d;
        let { session: u, source: c, canWrite: p, downloadVisible: v } = e,
          m = (0, i.QQ)(),
          g = (0, a.useRef)(),
          h = (0, a.useSyncExternalStore)(u.subscribe, () =>
            u.getSnapshot(c.resourceId),
          ),
          { nodeId: y, resourceId: f, vid: b } = c;
        (0, a.useEffect)(() => {
          v && u.observe({ nodeId: y, resourceId: f, vid: b });
        }, [u, y, f, b, v]);
        let I = "checking" === h.phase || "busy" === h.phase || h.downloading,
          R = I
            ? l.S.exportBusy()
            : "failed" === h.phase ||
                "unknown" === h.phase ||
                "error" === h.phase
              ? l.S.exportRetry()
              : l.S.download(),
          x =
            "unknown" === h.phase
              ? l.S.exportUnknown()
              : "failed" === h.phase
                ? (null == (r = h.task) ? void 0 : r.error_code) ===
                  n.OH.EXPORT_SOURCE_NOT_READY
                  ? l.S.exportSourceNotReady()
                  : l.S.exportFailed()
                : "error" === h.phase || h.error
                  ? l.S.exportError()
                  : void 0,
          w =
            v &&
            (p || (null == (t = h.task) ? void 0 : t.status) === "succeeded");
        return (
          (0, a.useEffect)(() => {
            w &&
              x &&
              g.current === f &&
              ((g.current = void 0),
              m({
                id: `gif-export-${f}`,
                status: "failure",
                presentation: "content-width",
                title: x,
              }));
          }, [w, x, m, f, null == (d = h.task) ? void 0 : d.request_id]),
          (0, o.jsx)(o.Fragment, {
            children:
              !!w &&
              "unavailable" !== h.phase &&
              (0, o.jsxs)(s.$nd, {
                variant: "mediaOverlay",
                size: null,
                className:
                  "nodrag nopan absolute right-1 top-1 h-canvas-dynamic-poster-control gap-dreamina-status-surface rounded-dreamina-control bg-dreamina-bg-mask-30 pl-canvas-dynamic-poster-download-start pr-canvas-dynamic-poster-download-end py-canvas-dynamic-poster-download-block font-dreamina-medium text-dreamina-cn-14 text-dreamina-on-media-text-primary backdrop-blur-dreamina-panel",
                "aria-label": R,
                loading: !!I,
                onPointerDown: (e) => e.stopPropagation(),
                onClick: (e) => {
                  (e.stopPropagation(), (g.current = f), u.activate(c));
                },
                children: [(0, o.jsx)(s.s3U, { size: 16 }), "Gif"],
              }),
          })
        );
      });
      var u = t(80699),
        c = t(19952),
        p = t(66876),
        v = t(60794);
      function m(e) {
        return e.session
          ? (0, o.jsx)(g, { nodeId: e.nodeId, session: e.session })
          : (0, o.jsx)(h, {});
      }
      function g(e) {
        let { nodeId: r, session: t } = e;
        (0, a.useSyncExternalStore)(t.subscribe, t.getRevision, t.getRevision);
        let { writeChromeVisible: n } = (0, v.A1)(),
          i = t.getSnapshot(),
          s =
            "running" === i.phase &&
            "canvas" === i.destination &&
            i.outputNodeId === r,
          l = s && "cancelling" === i.stage && !i.cancelFailed;
        return (0, o.jsx)(h, {
          cancelling: l,
          onCancel:
            s && n
              ? () => {
                  let e = t.getSnapshot(),
                    o = t.getCurrentTimelineId();
                  "running" === e.phase &&
                    "canvas" === e.destination &&
                    e.outputNodeId === r &&
                    o &&
                    t.cancel(o);
                }
              : void 0,
        });
      }
      function h(e) {
        let { cancelling: r, onCancel: t } = e;
        return (0, o.jsxs)("div", {
          className:
            "nodrag nopan absolute left-canvas-media-history-view-control-inset top-canvas-media-history-view-control-inset z-canvas-timeline-ruler flex items-center gap-canvas-timeline-output-status-gap rounded-canvas-timeline-preview-control bg-dreamina-component-generation-progress-bg backdrop-blur-dreamina-generation-progress py-canvas-timeline-output-status-block pl-canvas-timeline-output-status-start pr-canvas-timeline-output-status-end font-dreamina-medium text-dreamina-cn-12 text-dreamina-text-primary",
          "data-testid": "timeline-render-output-status",
          onPointerDown: (e) => e.stopPropagation(),
          children: [
            (0, o.jsx)("span", { children: (0, p.pTt)() }),
            t
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("span", {
                      "aria-hidden": "true",
                      className:
                        "flex h-canvas-timeline-output-status-divider-height w-canvas-timeline-output-status-divider-width shrink-0 items-center justify-center",
                      children: (0, o.jsx)("span", {
                        className:
                          "h-full w-canvas-timeline-panel-indicator bg-dreamina-stroke-secondary",
                      }),
                    }),
                    (0, o.jsx)(s.$nd, {
                      className:
                        "h-auto min-w-canvas-timeline-zero p-canvas-timeline-zero text-dreamina-cn-12 text-dreamina-text-placeholder hover:text-dreamina-text-tertiary active:text-dreamina-text-secondary",
                      disabled: r,
                      onClick: (e) => {
                        (e.stopPropagation(), t());
                      },
                      variant: "text",
                      size: "unframed",
                      children: (0, p.Cfy)(),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      var y = t(24548),
        f = t(7379),
        b = t(40026),
        I = t(93998),
        R = t(85871),
        x = t(37046);
      function w() {
        return !1;
      }
      function P(e, r) {
        let t = (0, a.useCallback)(
            (t) =>
              (null == e ? void 0 : e.subscribeSource(r, t)) ?? (() => void 0),
            [r, e],
          ),
          o = (0, a.useCallback)(
            () => (null == e ? void 0 : e.isSourceActive(r)) ?? !1,
            [r, e],
          );
        return (0, a.useSyncExternalStore)(t, o, C);
      }
      function C() {
        return !1;
      }
      function S() {
        return !1;
      }
      var _ = t(40627),
        k = t(74780),
        j = t(91229),
        B = t(11567),
        M = t(88023),
        U = t(87098),
        A = t(33713),
        E = t(37350),
        F = t(88081),
        D = t(7784),
        T = t(30962),
        q = t(36295),
        N = t(77730),
        L = t(77073),
        $ = t(9233),
        H = t(11157),
        W = t(51887),
        K = t(85817),
        z = t(63416),
        V = t(73859),
        O = t(94037),
        Y = t(52902),
        Z = t(62799),
        G = t(8349),
        Q = t(65004),
        J = t(39408),
        X = t(40962),
        ee = t(7386),
        er = t(93176),
        et = t(7352),
        eo = t(98046),
        ea = t(50647),
        en = t(12962),
        ei = t(8459),
        es = t(68227),
        el = t(54940),
        ed = t(91405),
        eu = t(7606),
        ec = t(39305),
        ep = t(55419);
      let ev = (0, a.memo)(function (e) {
        let {
          active: r,
          announceUploadLifecycle: t,
          logicalHeight: a,
          logicalWidth: n,
          nodeId: i,
          renderMode: s,
          state: l,
          title: d,
          uploadResource: u,
        } = e;
        return u
          ? u.status === y.ao.failed || u.status === y.ao.canceled
            ? (0, o.jsx)(eI, {
                active: r,
                announceFailure: t,
                nodeId: i,
                renderMode: s,
                resource: u,
                title: d,
              })
            : (0, o.jsx)(eg, {
                active: r,
                announcePending: t,
                renderMode: s,
                resource: u,
                title: d,
              })
          : (0, o.jsx)(em, {
              active: r,
              logicalHeight: a,
              logicalWidth: n,
              nodeId: i,
              renderMode: s,
              state: l,
              title: d,
            });
      });
      function em(e) {
        var r, t, a;
        let {
            active: n,
            logicalHeight: i,
            logicalWidth: s,
            renderMode: l,
            state: d,
            title: c,
          } = e,
          v = "result" === d.type ? (0, u.dv)(d.currentBatch) : void 0;
        if (v && (0, u.ey)(v))
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)(ep.D, {
              alt: (0, p.miN)(c),
              primary: !0,
              renderMode: l,
              resource: v,
              selected: n,
              testId: `video-node-${l}`,
              unavailable: (e) =>
                (0, o.jsx)(ey, {
                  active: n,
                  renderMode: l,
                  title: c,
                  onRetry: e,
                }),
              children: (0, o.jsx)(eu.x3, {
                className:
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              }),
            }),
          });
        if ("error" === d.type)
          return (0, o.jsx)(eh, {
            active: n,
            message: d.message,
            renderMode: l,
            title: c,
          });
        let m = (function (e, r, t) {
          let o;
          if ("result" === r.type)
            return { "aria-label": (0, p.cM2)(t), role: "img" };
          o =
            "error" === r.type
              ? r.message
              : "queued" === r.type
                ? (0, X.b)(r.queue, {
                    estimateLabel: p.AcJ,
                    positionLabel: p.j9W,
                  }).message
                : "loading" === r.type
                  ? "progress" === r.appearance
                    ? (0, p.Khs)()
                    : (0, p.kCx)()
                  : (0, p.XLb)();
          let a = (0, p.Zgh)({ message: o, title: t });
          return e
            ? "error" === r.type
              ? {
                  "aria-atomic": !0,
                  "aria-label": a,
                  "aria-live": "assertive",
                  role: "alert",
                }
              : "loading" === r.type || "queued" === r.type
                ? {
                    "aria-atomic": !0,
                    "aria-busy": !0,
                    "aria-label": a,
                    "aria-live": "polite",
                    role: "status",
                  }
                : { "aria-label": a, role: "img" }
            : { "aria-label": a, role: "img" };
        })(n, d, c);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              ...m,
              ...(0, Y.YR)(d, "no_poster"),
              className:
                "empty" === (r = d).type
                  ? f.S1
                  : `${er.fP} ${f.$o} ${"loading" === (t = r).type || "queued" === t.type ? er.vE : ""}`,
              "data-loading-appearance":
                "loading" === d.type ? d.appearance : void 0,
              "data-state": d.type,
              "data-testid": `video-node-${l}`,
              children: [
                "empty" === d.type ? ef : null,
                "result" === d.type ? (0, o.jsx)(eu.x3, {}) : null,
              ],
            }),
            "micro" !==
              (a = {
                logicalHeight: i,
                logicalWidth: s,
                renderMode: l,
                state: d,
              }).renderMode ||
            ("loading" !== a.state.type && "queued" !== a.state.type)
              ? null
              : (0, o.jsx)(G.m, {
                  animationMode: "extended",
                  hostBorderWidth: 1,
                  logicalHeight: a.logicalHeight,
                  logicalWidth: a.logicalWidth,
                  outset: 4,
                  startedAtMs: a.state.startedAtMs,
                }),
          ],
        });
      }
      function eg(e) {
        let r,
          {
            active: t,
            announcePending: a,
            renderMode: n,
            resource: i,
            title: l,
          } = e,
          d = i.progress ?? 0,
          u = t || a,
          c =
            void 0 === (r = i.progress)
              ? (0, p._Vy)()
              : r >= 100
                ? (0, p.aux)()
                : (0, p.cne)(25 * Math.floor(r / 25));
        return (0, o.jsx)("div", {
          "aria-atomic": u ? "true" : void 0,
          "aria-busy": "true",
          "aria-label": (0, p.Zgh)({ message: c, title: l }),
          className: `${f.S1} ${f.$o} flex items-center justify-center`,
          "data-state": "uploading",
          "data-testid": `video-node-${n}`,
          role: u ? "status" : void 0,
          children: (0, o.jsx)(s.C8A, { size: 32, value: d }),
        });
      }
      function eh(e) {
        let { active: r, message: t, renderMode: a, title: n } = e;
        return (0, o.jsx)(J.S, {
          announce: r,
          announcement: (0, p.Zgh)({ message: t, title: n }),
          description: (0, p.Zgh)({ message: t, title: n }),
          message: t,
          selected: r,
          surfaceClassName: f.S1,
          testId: `video-node-${a}`,
        });
      }
      function ey(e) {
        let { active: r, renderMode: t, title: a, onRetry: n } = e;
        return r
          ? (0, o.jsx)(s.$nd, {
              "aria-label": (0, p._m7)(a),
              className: `${er.fP} ${f.$o} nodrag rounded-canvas-media-node-preview text-dreamina-text-secondary`,
              ...(0, Y.s4)("element", "media_error"),
              "data-state": "error",
              "data-testid": `video-node-${t}`,
              size: null,
              tabIndex: 0,
              type: "button",
              variant: "text",
              onClick: (e) => {
                (e.stopPropagation(), n());
              },
              onPointerDown: (e) => e.stopPropagation(),
              children: (0, p.UZY)(),
            })
          : (0, o.jsx)("div", {
              "aria-label": (0, p.Zgh)({ message: (0, p.UZY)(), title: a }),
              className: `${er.fP} ${f.$o} rounded-canvas-media-node-preview text-dreamina-text-secondary`,
              ...(0, Y.s4)("element", "media_error"),
              "data-state": "error",
              "data-testid": `video-node-${t}`,
              role: "img",
              children: (0, p.UZY)(),
            });
      }
      let ef = (0, o.jsx)(O.ZO, {}),
        eb = {
          waiting: p._Vy,
          processing: p.aux,
          progress: p.cne,
          preparing: p.bkw,
          cancelled: p.YKZ,
          fileTooLarge: p.g7Q,
          unsupportedType: p.UCg,
          timedOut: p.$Gt,
          failed: p.EsO,
          retry: p.LN6,
          retryNode: p.bzc,
          statusAnnouncement: p.Zgh,
        },
        eI = (0, a.memo)(function (e) {
          var r, t;
          let { ...a } = e,
            n = (function (e) {
              if (
                (null == e ? void 0 : e.urls) &&
                "cover_url" in e.urls &&
                "string" == typeof e.urls.cover_url &&
                e.urls.cover_url.trim()
              )
                return e.urls.cover_url;
            })(a.resource);
          return (0, o.jsx)(es.f, {
            active: a.active,
            announceFailure: a.announceFailure,
            announcePending: a.announcePending,
            errorIcon: (0, o.jsx)(Z.Yu, {}),
            nodeId: a.nodeId,
            pendingContent: (0, o.jsx)(s.C8A, {
              size: 32,
              value: (null == (r = a.resource) ? void 0 : r.progress) ?? 0,
            }),
            previewUrl: n,
            renderMode: a.renderMode,
            resource: a.resource,
            resourceId: null == (t = a.resource) ? void 0 : t.resource_id,
            surfaceClassName: f.S1,
            testIdPrefix: "video-node",
            texts: eb,
            title: a.title,
            onRetry: a.onRetry,
          });
        }),
        eR = (0, a.memo)(function (e) {
          let r =
            e.statusLabel ??
            ("progress" === e.appearance ? (0, p.Khs)() : (0, p.kCx)());
          return (0, o.jsx)(er.De, {
            active: e.active,
            announcement: (0, p.Zgh)({ title: e.title, message: r }),
            appearance: e.appearance,
            logicalHeight: e.logicalHeight,
            logicalWidth: e.logicalWidth,
            message: r,
            processingBorder: {
              animationMode: "extended",
              hostBorderWidth: 1,
              startedAtMs: e.startedAtMs,
            },
            selected: e.selected,
            showMessage: !1,
            surfaceClassName: f.S1,
            testId: "video-node-loading",
          });
        }),
        ex = (0, a.memo)(function (e) {
          let {
              active: r,
              description: t,
              descriptionId: a,
              logicalHeight: n,
              logicalWidth: i,
              queue: s,
              resourceId: l,
              startedAtMs: d,
              title: u,
              onCancel: c,
            } = e,
            v = (0, X.b)(s, { estimateLabel: p.AcJ, positionLabel: p.j9W });
          return (0, o.jsx)(ee.T, {
            active: r,
            announcement: (0, p.Zgh)({ title: u, message: v.message }),
            cancelLabel: (0, p.cWO)(),
            description: t,
            descriptionId: a,
            estimate: v.estimate,
            logicalHeight: n,
            logicalWidth: i,
            position: v.position,
            processingBorder: {
              animationMode: "extended",
              hostBorderWidth: 1,
              startedAtMs: d,
            },
            resourceId: l,
            surfaceClassName: f.S1,
            testId: "video-node-queued",
            onCancel: c,
          });
        }),
        ew = (0, a.memo)(function (e) {
          let r;
          return (
            e.onRetry &&
              (r = {
                label: e.retryLabel ?? (0, p._m7)(e.title),
                resourceId: e.retryResourceId,
                requiresWriteChrome: !0,
                text:
                  void 0 !== e.retryResourceId ? (0, p.Gqs)() : (0, p.Cct)(),
                onInvoke: e.onRetry,
              }),
            (0, o.jsx)(J.S, {
              announce: e.announce,
              announcement: (0, p.Zgh)({ title: e.title, message: e.message }),
              action: r,
              message: e.message,
              selected: e.active,
              surfaceClassName: f.S1,
              testId: "video-node-error",
            })
          );
        }),
        eP = (0, a.memo)(function (e) {
          let r = (0, a.useId)(),
            t = `video-async-batch-panel-${r.replaceAll(":", "")}`;
          return (0, o.jsx)(eS, {
            batch: e.batch,
            collapsedContent: e.collapsedContent,
            collectionCount: e.collectionCount,
            controlsId: t,
            expanded: e.expanded,
            history: e.history,
            logicalHeight: e.logicalHeight,
            logicalWidth: e.logicalWidth,
            motion: e.motion,
            previewTier: e.previewTier,
            highlightedResourceId: e.highlightedResourceId,
            revealRequest: e.revealRequest,
            primaryResourceId: e.batch.primaryResourceId,
            regenerableResourceIds: e.regenerableResourceIds,
            showToggle: !0,
            toggleTabbable: e.active || e.expanded,
            viewportDecoration: e.viewportDecoration,
            onRegenerateResource: e.onRegenerateResource,
            onSelectResource: e.onSelectResource,
            onToggleExpansion: e.onToggleExpansion,
          });
        }),
        eC = (0, a.memo)(function (e) {
          let {
            collapsedContent: r,
            controlsId: t,
            currentBatch: n,
            galleryExpanded: i,
            showToggle: s,
          } = (function (e) {
            var r, t;
            let n,
              i,
              s,
              {
                active: l,
                expanded: d,
                fullscreenEnabled: c,
                hasIndependentPrimaryPreview: p,
                isSmallSurface: v,
                onPlaybackFailure: m,
                onPlaybackStarted: g,
                onPlaybackPaused: h,
                onRecoverPlaybackUrl: y,
                onRefreshResourceIds: f,
                onVideoElementChange: b,
                resultBrowsingAvailable: I,
                selected: R,
                state: x,
                title: w,
                trimActive: P = !1,
                inlinePlayerActionsVisible: C,
                squareCorners: S = !1,
              } = e,
              { currentBatch: _ } = x,
              k = (0, u.dv)(_),
              j = (0, a.useId)(),
              B = `video-batch-panel-${j.replaceAll(":", "")}`,
              { galleryExpanded: M, showToggle: U } =
                ((n =
                  (r = {
                    active: l,
                    currentBatch: _,
                    expanded: d,
                    hasIndependentPrimaryPreview: p,
                    resultBrowsingAvailable: I,
                    selected: R,
                    state: x,
                    trimActive: P,
                  }).expanded && !r.trimActive),
                (i =
                  !r.trimActive &&
                  (r.state.batchCount > 1 || r.hasIndependentPrimaryPreview)),
                (s =
                  r.resultBrowsingAvailable &&
                  !r.trimActive &&
                  (r.active || !r.selected || r.expanded) &&
                  ((0, u.YC)(r.currentBatch) > 1 || i || n)),
                { galleryExpanded: n, showToggle: s });
            return {
              collapsedContent:
                ((t = {
                  active: l,
                  fullscreenEnabled: c,
                  isSmallSurface: v,
                  mainResource: k,
                  onPlaybackFailure: m,
                  onPlaybackStarted: g,
                  onPlaybackPaused: h,
                  onRecoverPlaybackUrl: y,
                  onRefreshResourceIds: f,
                  onVideoElementChange: b,
                  title: w,
                  trimActive: P,
                  inlinePlayerActionsVisible: C,
                  squareCorners: S,
                  previewTargetBound:
                    e.previewTier ?? Math.max(e.logicalHeight, e.logicalWidth),
                }),
                (0, o.jsx)("div", {
                  className: "contents video-primary-player",
                  children: (0, o.jsx)(ek, {
                    active: t.active,
                    fullscreenEnabled: t.fullscreenEnabled,
                    hoverPlay: !t.trimActive && !t.isSmallSurface,
                    interactive: !0 === t.active && !t.isSmallSurface,
                    previewTargetBound: t.previewTargetBound,
                    resource: t.mainResource,
                    title: t.title,
                    trimActive: t.trimActive,
                    squareCorners: t.squareCorners,
                    inlinePlayerActionsVisible: t.inlinePlayerActionsVisible,
                    onPlaybackFailure: t.onPlaybackFailure,
                    onPlaybackStarted: t.onPlaybackStarted,
                    onPlaybackPaused: t.onPlaybackPaused,
                    onRecoverPlaybackUrl: t.onRecoverPlaybackUrl,
                    onRefreshResourceIds: t.onRefreshResourceIds,
                    onVideoElementChange: t.onVideoElementChange,
                  }),
                })),
              controlsId: B,
              currentBatch: _,
              galleryExpanded: M,
              showToggle: U,
            };
          })(e);
          return (0, o.jsx)(eS, {
            batch: n,
            collapsedContent: r,
            collectionCount: e.collectionCount,
            controlsId: t,
            expanded: i,
            fullscreenEnabled: i || e.fullscreenEnabled,
            history: e.history,
            logicalHeight: e.logicalHeight,
            logicalWidth: e.logicalWidth,
            motion: e.motion,
            previewTier: e.previewTier,
            highlightedResourceId: e.highlightedResourceId,
            revealRequest: e.revealRequest,
            primaryResourceId: n.primaryResourceId,
            regenerableResourceIds: e.regenerableResourceIds,
            showToggle: s,
            squareCorners: e.squareCorners,
            toggleTabbable: e.active || e.expanded,
            viewportDecoration: e.viewportDecoration,
            copyResourceDisabledReason: e.copyResourceDisabledReason,
            getDownloadResourceState: e.getDownloadResourceState,
            onCopyResource: e.onCopyResource,
            onDownloadResource: e.onDownloadResource,
            onRegenerateResource: e.onRegenerateResource,
            onPlaybackFailure: e.onPlaybackFailure,
            onPlaybackStarted: e.onPlaybackStarted,
            onPlaybackPaused: e.onPlaybackPaused,
            onRecoverPlaybackUrl: e.onRecoverPlaybackUrl,
            onRefreshResourceIds: e.onRefreshResourceIds,
            onSelectResource: e.onSelectResource,
            onToggleExpansion: e.onToggleExpanded,
          });
        });
      function eS(e) {
        var r, t, n;
        let i = e.collectionCount ?? (0, u.YC)(e.batch),
          s = (function (e, r) {
            let t = r ? "history" : (0, u.V0)(e),
              [o, n] = (0, a.useState)(() => ({ key: t })),
              i = (0, a.useRef)(new Set()),
              s = (0, a.useRef)(),
              l = (0, a.useRef)();
            o.key !== t &&
              (n({ key: t }),
              i.current.clear(),
              (s.current = l.current = void 0));
            let d = (0, a.useCallback)(
              (e) => {
                ((s.current = e), l.current || n({ key: t, resourceId: e }));
              },
              [t],
            );
            return {
              hover: d,
              play: (0, a.useCallback)(
                (e) => {
                  (i.current.delete(e), d(e));
                },
                [d],
              ),
              isPaused: (e) => i.current.has(e),
              pauseLock: (0, a.useCallback)((e, r) => {
                r ? i.current.add(e) : i.current.delete(e);
              }, []),
              seeking: (0, a.useCallback)(
                (e, r) => {
                  r
                    ? (l.current = e)
                    : l.current === e &&
                      ((l.current = void 0),
                      document.fullscreenElement ||
                        s.current === e ||
                        n({ key: t, resourceId: s.current }));
                },
                [t],
              ),
              playingResourceId: o.key === t ? o.resourceId : void 0,
              stop: (0, a.useCallback)(
                (e) => {
                  (s.current === e && (s.current = void 0),
                    l.current ||
                      document.fullscreenElement ||
                      n((r) =>
                        r.key === t && r.resourceId === e ? { key: t } : r,
                      ));
                },
                [t],
              ),
            };
          })(e.batch, e.expanded),
          l = (0, Q.PF)(),
          d = {
            copyResourceDisabledReason: e.copyResourceDisabledReason,
            getDownloadResourceState: e.getDownloadResourceState,
            playback: {
              fullscreenEnabled: e.fullscreenEnabled,
              previewTargetBound:
                e.previewTier ?? Math.max(e.logicalHeight, e.logicalWidth),
              onPlay: s.play,
              onHover: s.hover,
              surfacePreview: e.expanded,
              isPaused: s.isPaused,
              onPauseLockChange: s.pauseLock,
              onSeekingChange: s.seeking,
              onPlayButtonPressed: l.declarePlay,
              onStop: s.stop,
              onPlaybackFailure: e.onPlaybackFailure,
              onPlaybackStarted: e.onPlaybackStarted,
              onPlaybackPaused: e.onPlaybackPaused,
              onRecoverPlaybackUrl: e.onRecoverPlaybackUrl,
              onRefreshResourceIds: e.onRefreshResourceIds,
              playingResourceId: s.playingResourceId,
            },
            regenerableResourceIds: e.regenerableResourceIds,
            onCopyResource: e.onCopyResource,
            onDownloadResource: e.onDownloadResource,
            onRegenerateResource: e.onRegenerateResource,
          },
          v =
            ((r = e.batch),
            (t = d),
            r.resources.map((e, o) => e_(e, o, r.resources.length, t))),
          m = (0, u.dv)(e.batch),
          g = (0, c.B)(m.generationKind),
          h = e.showToggle && e.batch.resources.length > 0,
          y = (0, o.jsxs)(o.Fragment, {
            children: [
              e.collapsedContent,
              g ? (0, o.jsx)(c.b, { kind: m.generationKind }) : null,
            ],
          }),
          b = (0, el.O)({
            collapsedContent: y,
            collectionCount: i,
            items: v,
            primaryResourceId: e.primaryResourceId,
            showToggle: h,
            toggleTabbable: e.toggleTabbable,
            onToggleExpansion: e.onToggleExpansion,
          }),
          I = b.view;
        return (
          e.expanded &&
            (I = {
              type: "history",
              content: y,
              count: i,
              currentItem:
                "collapsed" === b.view.type ? b.view.currentItem : void 0,
              history: (function (e) {
                let {
                    batches: r,
                    primaryResourceId: t,
                    resourceById: o,
                  } = e.history,
                  a = (0, eo.fD)({
                    nodeType: "video",
                    primaryResourceId: t,
                    resourceBatches: r.map((e) => ({
                      id: e.id,
                      resourceIds: e.resources.map((e) => e.resourceId),
                    })),
                    resources: [...o.values()],
                  }),
                  n = new Map(
                    r.flatMap((e) => e.resources.map((e) => [e.resourceId, e])),
                  ),
                  i = [];
                a.items.forEach((r, t) => {
                  let o = n.get(r.id);
                  o &&
                    i.push({
                      ...e_(o, t, a.total, e.itemInput),
                      batchId: r.batchId,
                      ratio: r.ratio,
                      status: r.status,
                    });
                });
                let s =
                    void 0 === a.latestBatchId
                      ? 0
                      : i.filter((e) => e.batchId === a.latestBatchId).length,
                  l = {
                    items: i,
                    labels: {
                      currentItem: (0, p.IP9)(),
                      latestSection: (0, p.lMv)(s),
                      list: (0, p._jd)(),
                      pastSection: (0, p.ok3)(),
                    },
                  };
                return (
                  void 0 !== a.latestBatchId &&
                    (l.latestBatchId = a.latestBatchId),
                  void 0 !== a.primaryId && (l.primaryId = a.primaryId),
                  void 0 !== e.highlightedResourceId &&
                    (l.highlightedItemId = e.highlightedResourceId),
                  e.revealRequest && (l.revealRequest = e.revealRequest),
                  l
                );
              })({
                highlightedResourceId: e.highlightedResourceId,
                revealRequest: e.revealRequest,
                history: e.history,
                itemInput: d,
              }),
            }),
          (0, o.jsx)(ea.Ip, {
            collapsedSurfaceClassName: `relative flex h-full w-full items-center justify-center ${e.squareCorners ? "rounded-canvas-zero" : "rounded-canvas-media-node-preview"} ${f.$o} ${ed.kx}`,
            controlsId: e.controlsId,
            labels:
              ((n = i),
              {
                collapse: (0, p.H_1)(),
                expand: (0, p.cCU)(n),
                list: (0, p._jd)(),
                currentItem: (0, p.IP9)(),
              }),
            motion: e.motion,
            rootTestId: "video-node-result",
            testIdPrefix: "video",
            toggle: b.toggle,
            view: I,
            viewportDecoration: e.viewportDecoration,
            onSelectItem: e.onSelectResource,
          })
        );
      }
      function e_(e, r, t, a) {
        var n;
        let i,
          s,
          l = (0, p.n9O)(r);
        if (
          (null == (n = a.regenerableResourceIds)
            ? void 0
            : n.has(e.resourceId)) === !0 &&
          a.onRegenerateResource
        ) {
          let t = a.onRegenerateResource;
          i = (0, o.jsx)(ei.i, {
            label: (0, p.uop)((0, p.n9O)(r)),
            resourceId: e.resourceId,
            text: (0, p.Gqs)(),
            onInvoke: () => t(e.resourceId),
          });
        }
        if (e.status === y.ao.success && !0 !== e.mediaTypeMismatch) {
          let r;
          if (a.onCopyResource) {
            let t = a.onCopyResource;
            r = () => t(e.resourceId);
          }
          s = (0, en.zV)({
            copyDisabledReason: a.copyResourceDisabledReason,
            downloadUrl: e.downloadUrl,
            getDownloadResourceState: a.getDownloadResourceState,
            onCopyResource: r,
            onDownloadResource: a.onDownloadResource,
            resultLabel: l,
            resourceId: e.resourceId,
            suggestedFileName: e.name,
          });
        }
        return {
          actions: i,
          id: e.resourceId,
          label: l,
          position: r + 1,
          resourceActions: s,
          selectLabel: (0, p.IIe)(r),
          setSize: t,
          primaryLabel: (0, p.t0b)("video"),
          provenanceLabel: (0, c.B)(e.generationKind),
          ...(function (e, r, t) {
            let a,
              n = (0, p.n9O)(r),
              i = (0, u.Ri)(e, "node", {
                targetHeight: t && (0, u.qU)(e, t.previewTargetBound),
              }),
              s = null == i ? void 0 : i.url,
              l = null == t ? void 0 : t.onRecoverPlaybackUrl,
              d =
                e.status === y.ao.success &&
                void 0 !== s &&
                void 0 !== l &&
                void 0 !== t &&
                void 0 !== t.onRefreshResourceIds,
              c = d && e.resourceId === t.playingResourceId;
            d &&
              !c &&
              (a = (0, o.jsx)(eu.ZP, {
                label: (0, p.k9n)(n),
                testId: "video-batch-play",
                onClick: (r) => {
                  var o;
                  (r.stopPropagation(),
                    null == (o = t.onPlayButtonPressed) || o.call(t),
                    t.onPlay(e.resourceId));
                },
                onPointerDown: (e) => e.stopPropagation(),
              }));
            let v = (0, u.Oo)(e),
              m = (0, o.jsx)(ej, {
                showPoster: !0,
                resource: e,
                previewTargetBound: null == t ? void 0 : t.previewTargetBound,
              }),
              g = null;
            if (d && c) {
              var h;
              let r = t.surfacePreview ? i : (0, u.Ri)(e, "thumbnail"),
                a =
                  t.surfacePreview &&
                  (null == (h = t.isPaused) ? void 0 : h.call(t, e.resourceId));
              g = (0, o.jsx)(ec.L, {
                active: !0,
                autoPlay: !0,
                framePreview: {
                  mode: t.surfacePreview ? "surface" : "progress",
                  fullscreenOnly: !t.surfacePreview,
                  initiallyPaused: a,
                  onPauseLockChange: (r) => {
                    var o;
                    return null == (o = t.onPauseLockChange)
                      ? void 0
                      : o.call(t, e.resourceId, r);
                  },
                  onSeekingChange: (r) => {
                    var o;
                    return null == (o = t.onSeekingChange)
                      ? void 0
                      : o.call(t, e.resourceId, r);
                  },
                  source: {
                    url: (null == r ? void 0 : r.url) ?? s,
                    duration: (e.durationMs ?? 0) / 1e3,
                    recover: (t) =>
                      l(e.resourceId, {
                        signal: t,
                        resolution: null == r ? void 0 : r.resolution,
                      }),
                  },
                },
                initialPlaybackStatus: a ? "paused" : void 0,
                fullscreenEnabled: t.fullscreenEnabled,
                fullscreenPreviewUrl: (0, u.NI)(e, "fullscreen"),
                hoverPlay: !0,
                interactive: !0,
                posterUrl: v,
                renderPoster: () => null,
                previewResolution: null == i ? void 0 : i.resolution,
                previewUrl: s,
                subtitle: e.subtitle,
                resourceId: e.resourceId,
                title: n,
                onPlaybackFailure: t.onPlaybackFailure,
                onPlaybackStarted: t.onPlaybackStarted,
                onPlaybackPaused: t.onPlaybackPaused,
                onRecoverPlaybackUrl: l,
                onRefreshResourceIds: t.onRefreshResourceIds,
              });
            }
            return {
              centerAction: c ? void 0 : a,
              containInteractionClicks: c,
              interactiveSelectionSurface: d,
              content: (0, o.jsxs)("div", {
                className: "relative h-full w-full",
                children: [
                  m,
                  g
                    ? (0, o.jsx)("div", {
                        className: "absolute inset-0",
                        children: g,
                      })
                    : null,
                ],
              }),
              interactiveContent: d,
              onPointerEnter: d
                ? () => (t.onHover ?? t.onPlay)(e.resourceId)
                : void 0,
              onPointerLeave: d
                ? () => {
                    var r;
                    return null == (r = t.onStop)
                      ? void 0
                      : r.call(t, e.resourceId);
                  }
                : void 0,
            };
          })(e, r, a.playback),
        };
      }
      function ek(e) {
        let {
            active: r,
            fullscreenEnabled: t,
            hoverPlay: a = !1,
            interactive: n,
            previewTargetBound: i,
            resource: s,
            title: l,
            trimActive: d = !1,
            squareCorners: c = !1,
            inlinePlayerActionsVisible: v,
            onPlaybackFailure: m,
            onPlaybackStarted: g,
            onPlaybackPaused: h,
            onRecoverPlaybackUrl: y,
            onVideoElementChange: f,
            onRefreshResourceIds: b,
          } = e,
          I = (0, u.Ri)(s, "node", { targetHeight: (0, u.qU)(s, i) }),
          R = (0, u.Oo)(s),
          x = (0, u.Ri)(s, "thumbnail") ?? I;
        return (0, o.jsx)(
          ec.L,
          {
            active: r,
            framePreview:
              !d && !1 !== t && x
                ? {
                    mode: "progress",
                    fullscreenOnly: !0,
                    source: {
                      url: x.url,
                      duration: (s.durationMs ?? 0) / 1e3,
                      recover: (e) =>
                        y(s.resourceId, {
                          signal: e,
                          resolution: x.resolution,
                        }),
                    },
                  }
                : void 0,
            fullscreenEnabled: t,
            fullscreenPreviewUrl: (0, u.NI)(s, "fullscreen"),
            hoverPlay: a,
            interactive: n,
            posterUrl: R,
            renderPoster: (e) =>
              (0, o.jsx)(ep.D, {
                alt: (0, p.miN)(l),
                primary: !0,
                resource: s,
                selected: r,
                targetBound: i,
                testId: "video-passive-preview",
                unavailable: () => (0, o.jsx)(ej, { resource: s }),
                children: e,
              }),
            previewResolution: null == I ? void 0 : I.resolution,
            previewUrl: null == I ? void 0 : I.url,
            subtitle: s.subtitle,
            resourceId: s.resourceId,
            title: l,
            trimActive: d,
            squareCorners: c,
            inlinePlayerActionsVisible: v,
            onPlaybackFailure: m,
            onPlaybackStarted: g,
            onPlaybackPaused: h,
            onRecoverPlaybackUrl: y,
            onVideoElementChange: f,
            onRefreshResourceIds: b,
          },
          s.resourceId,
        );
      }
      function ej(e) {
        let { showPoster: r = !1, resource: t, previewTargetBound: a } = e;
        if (void 0 === t.status || t.status === y.ao.running)
          return (0, o.jsx)(et.z, {
            generatingLabel: (0, p.Khs)(),
            loadingLabel: (0, p.kCx)(),
            resourceId: t.resourceId,
            status: t.status,
            testId: "video-batch-resource-pending",
          });
        if (t.status === y.ao.failed || t.status === y.ao.canceled) {
          let e = (0, V.R)(t);
          return (0, o.jsx)(er.tQ, {
            active: !1,
            announcement: e,
            description: e,
            errorIcon: (0, o.jsx)(Z.Yu, {}),
            message: e,
            testId: "video-batch-resource-failed",
          });
        }
        return r && (0, u.ey)(t)
          ? (0, o.jsx)(ep.D, {
              alt: "",
              resource: t,
              targetBound: a,
              unavailable: () => (0, o.jsx)(ej, { resource: t }),
            })
          : (0, o.jsx)("div", {
              "aria-hidden": "true",
              className:
                "flex h-full w-full items-center justify-center bg-octo-workbench-canvas text-octo-text-secondary",
              "data-canvas-content-evidence": "frame_estimate",
              "data-canvas-content-state": (0, u.ey)(t)
                ? "media_error"
                : "no_poster",
              "data-testid": "video-batch-tile-unavailable",
              children: (0, o.jsx)(Z.eD, {}),
            });
      }
      let eB = (0, o.jsx)(s.LeW, { size: 16 }),
        eM = (0, a.memo)(function (e) {
          var r, t, n, i, s, l, c, m, g, h, C, B, U, A, H, O;
          let Y,
            Z,
            G,
            Q,
            J = (0, I.FY)(),
            { writeChromeVisible: X } = (0, v.A1)(),
            ee = J.isSessionNode(e.id),
            er =
              "imported" === e.data.source &&
              (0, M.ek)(
                e.data.source,
                (0, M.Y$)(e.data.resourceId, e.data.resourceBatches),
              ),
            et = (0, K.V)(e.id, e.selected),
            eo = er ? "full" : (e.data.renderMode ?? "full"),
            ea = "full" === eo,
            en = (function (e, r, t) {
              var o, n, i, s, l, d, u, c, p, v;
              let m,
                g,
                h,
                y,
                f,
                b = null == (o = r.featuresApi) ? void 0 : o.canvas,
                I = null == b ? void 0 : b.videoTrim,
                R =
                  ((g = (0, a.useCallback)(
                    (r) =>
                      (null == I ? void 0 : I.subscribeSource(e, r)) ??
                      (() => void 0),
                    [e, I],
                  )),
                  (h = (0, a.useCallback)(
                    () => (null == I ? void 0 : I.isSourceActive(e)) ?? !1,
                    [e, I],
                  )),
                  (0, a.useSyncExternalStore)(g, h, S)),
                x =
                  ((u = null == b ? void 0 : b.videoFrameCapture),
                  (y = (0, a.useCallback)(
                    (r) =>
                      (null == u ? void 0 : u.subscribeSource(e, r)) ??
                      (() => void 0),
                    [e, u],
                  )),
                  (f = (0, a.useCallback)(
                    () => (null == u ? void 0 : u.isSourceActive(e)) ?? !1,
                    [e, u],
                  )),
                  (0, a.useSyncExternalStore)(y, f, w)),
                C = P(
                  null == b || null == (n = b.videoPostEdit) ? void 0 : n.edit,
                  e,
                ),
                _ = P(
                  t
                    ? null == b || null == (i = b.videoPostEdit)
                      ? void 0
                      : i.crop
                    : void 0,
                  e,
                ),
                k = P(
                  null == b || null == (s = b.videoPostEdit)
                    ? void 0
                    : s.partialReshoot,
                  e,
                ),
                j = R || x || C || k || _,
                B =
                  ((c =
                    (null == b ||
                    null == (d = b.videoPostEdit) ||
                    null == (l = d.edit)
                      ? void 0
                      : l.sourceVideoElements) ??
                    (null == I ? void 0 : I.sourceVideoElements)),
                  (p = e),
                  (v = j),
                  (m = (0, a.useRef)(null)),
                  (0, a.useCallback)(
                    (e) => {
                      var r;
                      (null == (r = m.current) || r.call(m),
                        (m.current = v && e && c ? c.register(p, e) : null));
                    },
                    [v, p, c],
                  ));
              return {
                active: j,
                cropActive: _,
                inlinePlayerActionsVisible: !C && !_,
                onVideoElementChange: B,
              };
            })(e.id, J, ea && et),
            ei = (0, a.useMemo)(
              () =>
                (function (e, r, t) {
                  if (t) {
                    if (e) return e;
                    for (let e of r) {
                      let r = e.resourceIds.find(Boolean);
                      if (r) return r;
                    }
                  }
                })(e.data.resourceId, e.data.resourceBatches, !ea),
              [ea, e.data.resourceBatches, e.data.resourceId],
            ),
            el =
              ((i = ea && et),
              (s = en.active),
              { active: i && !s, suspended: s }),
            ed = (function (e, r, t, o) {
              var n,
                i,
                s,
                l,
                d,
                c,
                p,
                v,
                m,
                g,
                h,
                f,
                I,
                x,
                w,
                P,
                C,
                S,
                j,
                B,
                M,
                U,
                A,
                E,
                H,
                K,
                O,
                Y,
                Z,
                G,
                Q;
              let J,
                X,
                ee,
                er,
                et,
                eo,
                ea,
                en,
                ei,
                es,
                el,
                ed,
                eu,
                ec,
                ep,
                { resourceId: ev, title: em } = e.data,
                { active: eg, suspended: eh } = r,
                ey =
                  ((i = e),
                  (s = t),
                  (l = o),
                  (J =
                    ((c = i.data),
                    (p = l).full
                      ? !(
                          void 0 !== c.resourceId ||
                          c.resourceBatches.some(
                            (e) => e.resourceIds.length > 0,
                          )
                        )
                      : void 0 === p.lightResourceId)),
                  (ee = !!(
                    (X = (0, _.K_)(i.id, J)) &&
                    (X.status === y.ao.failed || X.status === y.ao.canceled) &&
                    (null == (d = X.nodeUpload) ? void 0 : d.retryable)
                  )),
                  (er = (0, k._N)(i.id, J && ee)),
                  (et = (0, a.useCallback)(() => {
                    er && s.uploadCommands.retry(i.id);
                  }, [s, er, i.id])),
                  { canRetry: ee && er, resource: X, retry: et }),
                ef =
                  ((v = e),
                  (m = eg),
                  (g = t),
                  (h = eh),
                  (f = o.full),
                  (eo = (0, a.useMemo)(() => {
                    var e, r;
                    return (
                      (e = v.data.resourceId),
                      (r = v.data.resourceBatches),
                      f ? eV({ primaryResourceId: e, resourceBatches: r }) : eK
                    );
                  }, [f, v.data.resourceBatches, v.data.resourceId])),
                  (ea = f && (0, q.Ao)(v.data.source)),
                  (en = (0, a.useMemo)(
                    () => (ea ? eo.map((e) => e.key) : []),
                    [eo, ea],
                  )),
                  (ei = (0, q.cl)({ availableKeys: en })),
                  (es = (0, $.h)({
                    active: m,
                    browsing: ei,
                    editor: g,
                    nodeId: v.id,
                    resultsAvailable: en.length > 0,
                    suspended: h,
                  })),
                  (0, T.M)({
                    editor: g,
                    expandOnClaim: !0,
                    expandFromCompletion: es.expandFromCompletion,
                    nodeId: v.id,
                    request: v.data.mediaResultAutoExpansionRequest,
                    resultsAvailable: en.length > 0,
                    suspended: h,
                  }),
                  {
                    batches: eo,
                    browsing: ei,
                    expansionControl: es,
                    resultBrowsingAvailable: ea,
                  }),
                {
                  batches: eb,
                  browsing: eI,
                  expansionControl: eR,
                  resultBrowsingAvailable: ex,
                } = ef,
                ew = eI.expanded && !eh,
                eP =
                  ((I = e),
                  (x = o),
                  (w = r),
                  (P = ef),
                  (C = ew),
                  (function (e) {
                    var r, t, o;
                    let { resourceId: n, resourceBatches: i } = e.data,
                      s = e.batches,
                      l =
                        ((r = e.fullMode),
                        (t = n),
                        (o = e.lightResourceId),
                        r ? t : o),
                      d = (0, a.useMemo)(
                        () =>
                          ez(s, {
                            active: e.active,
                            expanded: e.expanded,
                            primaryResourceId: l,
                            viewingBatchKey: e.viewingBatchKey,
                          }),
                        [s, e.active, e.expanded, e.viewingBatchKey, l],
                      ),
                      c = (0, a.useMemo)(() => {
                        var r;
                        return (r = {
                          active: e.active,
                          expanded: e.expanded,
                          fullMode: e.fullMode,
                          primaryResourceId: l,
                          resourceBatches: i,
                          viewingBatchKey: e.viewingBatchKey,
                        }).fullMode
                          ? (function (e) {
                              if (
                                void 0 !== e.primaryResourceId &&
                                !0 !== e.active &&
                                !e.expanded
                              )
                                return [e.primaryResourceId];
                              let r = eV({
                                primaryResourceId: e.primaryResourceId,
                                resourceBatches: e.resourceBatches,
                              });
                              if (e.expanded) {
                                let t = r.flatMap((e) => e.resourceIds);
                                return (
                                  void 0 === e.primaryResourceId ||
                                    t.includes(e.primaryResourceId) ||
                                    t.push(e.primaryResourceId),
                                  t
                                );
                              }
                              let t = ez(r, { ...e, expanded: e.expanded });
                              return t
                                ? t.resourceIds
                                : e.primaryResourceId
                                  ? [e.primaryResourceId]
                                  : [];
                            })({
                              active: r.active,
                              expanded: r.expanded,
                              primaryResourceId: r.primaryResourceId,
                              resourceBatches: r.resourceBatches,
                              viewingBatchKey: r.viewingBatchKey,
                            })
                          : r.primaryResourceId
                            ? [r.primaryResourceId]
                            : [];
                      }, [
                        e.active,
                        e.expanded,
                        e.fullMode,
                        e.viewingBatchKey,
                        l,
                        i,
                      ]),
                      p = (0, _.xO)(c),
                      v = p.resources,
                      m = (0, a.useMemo)(
                        () =>
                          new Map(
                            c.map((e, r) => [e, p.generationQueueStates[r]]),
                          ),
                        [p.generationQueueStates, c],
                      ),
                      g = (0, a.useMemo)(() => {
                        var e, r;
                        let t;
                        return (
                          (e = c),
                          (r = v),
                          (t = new Map()),
                          e.forEach((e, o) => {
                            t.set(e, r[o]);
                          }),
                          t
                        );
                      }, [c, v]),
                      h = (0, a.useMemo)(
                        () =>
                          c.map((e) =>
                            (0, u.nf)({ resourceId: e, resource: g.get(e) }),
                          ),
                        [g, c],
                      ),
                      y = (0, a.useMemo)(
                        () =>
                          (function (e, r, t) {
                            if (!e || 0 === r.length) return;
                            let o = (0, u.pQ)({
                              primaryResourceId: t,
                              resourceBatches: [
                                { id: e.key, resourceIds: e.resourceIds },
                              ],
                              resourceViews: r,
                            })[0];
                            return o
                              ? { ...o, candidateCount: e.resourceIds.length }
                              : void 0;
                          })(d, h, l),
                        [d, l, h],
                      ),
                      f = (0, a.useMemo)(
                        () =>
                          e.expanded
                            ? (function (e, r, t) {
                                if (0 === e.length || 0 === r.length) return [];
                                let o = new Map(
                                  e.map((e) => [e.key, e.resourceIds.length]),
                                );
                                return (0, u.pQ)({
                                  primaryResourceId: t,
                                  resourceBatches: e.map((e) => ({
                                    id: e.key,
                                    resourceIds: e.resourceIds,
                                  })),
                                  resourceViews: r,
                                }).map((e) => ({
                                  ...e,
                                  candidateCount:
                                    o.get(e.id) ?? e.resources.length,
                                }));
                              })(s, h, l)
                            : [],
                        [s, e.expanded, l, h],
                      ),
                      b = (0, a.useMemo)(
                        () =>
                          void 0 !== l &&
                          !s.some((e) => e.resourceIds.includes(l)),
                        [s, l],
                      ),
                      I = (0, a.useMemo)(
                        () =>
                          (function (e, r, t) {
                            if (e) return t.find((e) => e.resourceId === r);
                          })(b, l, h),
                        [b, l, h],
                      );
                    return {
                      batches: s,
                      currentBatch: y,
                      currentBatchDescriptor: d,
                      generationQueueByResourceId: m,
                      hasIndependentPrimaryPreview: b,
                      historyBatches: f,
                      primaryPreview: I,
                      requestPending: p.requestPending,
                      resourceById: g,
                      subscribedResourceIds: c,
                      subscribedResourceViews: h,
                    };
                  })({
                    active: w.active && !0 !== I.dragging,
                    batches: P.batches,
                    data: I.data,
                    expanded: C,
                    fullMode: x.full,
                    lightResourceId: x.lightResourceId,
                    viewingBatchKey: P.browsing.selectedKey,
                  })),
                eC =
                  ((S = eP),
                  (j = ey.resource),
                  (el = (0, a.useMemo)(
                    () =>
                      (function (e) {
                        var r;
                        if (
                          (null == e ? void 0 : e.status) === y.ao.running &&
                          (null == (r = e.nodeUpload) ? void 0 : r.origin) ===
                            "video-trim"
                        )
                          return (0, u.nf)({
                            resourceId: e.resource_id,
                            resource: e,
                          });
                      })(j),
                    [j],
                  )),
                  (function (e) {
                    let {
                      batchCount: r,
                      currentBatch: t,
                      generationQueueByResourceId: o,
                      primaryPreview: n,
                    } = e;
                    return (0, a.useMemo)(
                      () =>
                        (0, V.t)({
                          batchCount: r,
                          batches: t ? [t] : [],
                          generationQueueByResourceId: o,
                          primaryPreview: n,
                          requestPending: e.requestPending,
                        }),
                      [r, t, o, e.requestPending, n],
                    );
                  })({
                    batchCount: S.batches.length,
                    currentBatch: S.currentBatch,
                    generationQueueByResourceId: S.generationQueueByResourceId,
                    primaryPreview: S.primaryPreview ?? el,
                    requestPending: S.requestPending,
                  })),
                { asyncHistoryProjection: eS, resultCollectionCount: e_ } =
                  (function (e) {
                    var r;
                    let {
                        batches: t,
                        fullMode: o,
                        projection: n,
                        renderState: i,
                        resourceBatches: s,
                        resourceId: l,
                        resultBrowsingAvailable: d,
                      } = e,
                      c =
                        "result" === (r = i).type
                          ? r.currentBatch
                          : "empty" !== r.type
                            ? r.batch
                            : void 0;
                    return {
                      asyncHistoryProjection: (0, F.r)({
                        currentBatchKey: null == c ? void 0 : c.id,
                        currentResultCount: c ? (0, u.YC)(c) : 0,
                        enabled:
                          o &&
                          d &&
                          ("loading" === i.type ||
                            "queued" === i.type ||
                            "error" === i.type),
                        hasIndependentPrimaryPreview:
                          n.hasIndependentPrimaryPreview,
                        includeCurrentBatchSnapshot:
                          "loading" === i.type || "queued" === i.type,
                        isBrowsableResource: eW,
                        knownResourcesById: n.resourceById,
                        primaryResourceId: l,
                        resourceBatches: s,
                      }),
                      resultCollectionCount: (0, a.useMemo)(() => {
                        let e = {
                          batchResultCounts: t.map((e) => e.resourceIds.length),
                          hasIndependentPrimaryPreview:
                            n.hasIndependentPrimaryPreview,
                        };
                        return void 0 === l
                          ? (0, q.Zl)(e)
                          : (0, q.Zl)({ ...e, emptyFallbackCount: 1 });
                      }, [t, n.hasIndependentPrimaryPreview, l]),
                    };
                  })({
                    batches: eb,
                    fullMode: o.full,
                    projection: eP,
                    renderState: eC,
                    resourceBatches: e.data.resourceBatches,
                    resourceId: ev,
                    resultBrowsingAvailable: ex,
                  }),
                ek =
                  (0, q.Ao)(e.data.source) &&
                  (o.full ? ex : "result" === eC.type),
                ej = (function (e) {
                  var r, t;
                  let o,
                    {
                      browsing: n,
                      expansionControl: i,
                      resultBrowsingAvailable: s,
                      batches: l,
                    } = e.browsingState,
                    d =
                      ((r = {
                        active: e.active,
                        batches: l,
                        browsing: n,
                        editor: e.editor,
                        expansionControl: i,
                        nodeId: e.nodeId,
                        projection: e.projection,
                        renderState: e.renderState,
                        resultBrowsingAvailable: s,
                        resourceId: e.resourceId,
                        resourceRevealRequest: e.resourceRevealRequest,
                      }),
                      (o = (0, a.useMemo)(
                        () =>
                          (function (e) {
                            let r = 0,
                              t = 0,
                              o = 0;
                            for (let a of e)
                              a.mediaTypeMismatch
                                ? (o += 1)
                                : void 0 === a.status ||
                                    a.status === y.ao.running
                                  ? (t += 1)
                                  : a.status === y.ao.success &&
                                      void 0 !== (0, u.NI)(a, "node")
                                    ? (r += 1)
                                    : (o += 1);
                            return {
                              readyCount: r,
                              pendingCount: t,
                              errorCount: o,
                            };
                          })(r.projection.subscribedResourceViews),
                        [r.projection.subscribedResourceViews],
                      )),
                      {
                        currentBatchIndex:
                          ((t = r.projection),
                          (0, a.useMemo)(() => {
                            var e, r;
                            return (
                              (e = t.currentBatchDescriptor),
                              (r = t.batches),
                              e ? r.findIndex((r) => r.key === e.key) : -1
                            );
                          }, [t.batches, t.currentBatchDescriptor])),
                        resourceCounts: o,
                        resourceReveal: (function (e) {
                          let r = (0, a.useCallback)(
                            (r) => {
                              e.editor.actions.patchNodeRenderInteraction(
                                e.nodeId,
                                {
                                  mediaResourceReveal: null,
                                  ...(!r ? { isExpanded: !1 } : {}),
                                },
                                "system",
                              );
                            },
                            [e.editor, e.nodeId],
                          );
                          if (e.request)
                            return {
                              acknowledge: r,
                              batches: e.batches,
                              collapseFromLocation:
                                e.expansionControl.collapseFromLocation,
                              expandFromLocation:
                                e.expansionControl.expandFromLocation,
                              request: e.request,
                              selectAtIndex: e.browsing.selectAtIndex,
                            };
                        })({
                          batches: r.resultBrowsingAvailable ? r.batches : [],
                          browsing: r.browsing,
                          editor: r.editor,
                          expansionControl: r.expansionControl,
                          nodeId: r.nodeId,
                          request: r.resourceRevealRequest,
                        }),
                      });
                  (0, z.B)({
                    browsing: n,
                    displayedIndex: d.currentBatchIndex,
                  });
                  let c = (0, D.b6)(e.resourceRevealRequest, n.expanded);
                  return {
                    ...d,
                    highlightedResourceId: null == c ? void 0 : c.resourceId,
                    revealRequest: c,
                  };
                })({
                  active: eg,
                  browsingState: ef,
                  editor: t,
                  nodeId: e.id,
                  projection: eP,
                  renderState: eC,
                  resourceId: ev,
                  resourceRevealRequest: e.data.mediaResourceReveal,
                }),
                eB = (function (e, r, t, o) {
                  var n, i, s, l, d;
                  let u = (0, N.U)("video", r, t),
                    c = (0, L.t)("video", t),
                    { onDownloadResource: p } = c,
                    v = (0, a.useCallback)(
                      async (t) => {
                        var o, a;
                        (null == (a = e.featuresApi) ||
                          null == (o = a.canvas.gestures) ||
                          o.declare({
                            surface: "mediaResult",
                            mediaType: "video",
                            gesture: "download",
                            nodeId: r,
                            resourceId: t.resourceId,
                          }),
                          await (null == p ? void 0 : p(t)));
                      },
                      [e, r, p],
                    ),
                    m = (0, a.useCallback)(
                      (t) => {
                        var o, a;
                        null == (a = e.featuresApi) ||
                          null == (o = a.canvas.gestures) ||
                          o.declare({
                            surface: "mediaResult",
                            mediaType: "video",
                            gesture: "play_start",
                            nodeId: r,
                            resourceId: t,
                          });
                      },
                      [e, r],
                    ),
                    g = (0, a.useCallback)(
                      (t) => {
                        var o, a;
                        null == (a = e.featuresApi) ||
                          null == (o = a.canvas.gestures) ||
                          o.declare({
                            surface: "mediaResult",
                            mediaType: "video",
                            gesture: "pause",
                            nodeId: r,
                            resourceId: t,
                          });
                      },
                      [e, r],
                    );
                  return {
                    copyResourceDisabledReason: u.disabledReason,
                    getDownloadResourceState: c.getDownloadResourceState,
                    handleCopyResource: u.onCopyResource,
                    handleDownloadResource: p ? v : void 0,
                    handlePlaybackFailure:
                      ((n = e),
                      (i = r),
                      (0, a.useCallback)(
                        (e) => {
                          var r, t;
                          null == (t = n.featuresApi) ||
                            null == (r = t.app) ||
                            r.observability.facts.emit(b.W, {
                              nodeId: i,
                              resourceId: e.resourceId,
                              reason: e.reason,
                              retry: e.retry,
                            });
                        },
                        [n, i],
                      )),
                    handlePlaybackStarted: m,
                    handlePlaybackPaused: g,
                    handleSelectResource:
                      ((s = e),
                      (l = r),
                      (d = o),
                      (0, a.useCallback)(
                        async (e) => {
                          await d(async () => {
                            var r;
                            let t =
                              null == (r = s.featuresApi)
                                ? void 0
                                : r.canvas.actions.selectResourceCandidate;
                            return (
                              !!(null == t ? void 0 : t.getState().available) &&
                              (
                                await t.execute({
                                  nodeId: l,
                                  nodeType: "video",
                                  resourceId: e,
                                })
                              ).ok
                            );
                          });
                        },
                        [d, s, l],
                      )),
                  };
                })(t, e.id, ew, eR.collapseAfterSelection),
                eM = (0, W.a)(t),
                eU =
                  ((B = {
                    editor: t,
                    nodeId: e.id,
                    projection: eP,
                    renderState: eC,
                    resourceId: ev,
                  }),
                  (ed = (0, a.useMemo)(
                    () =>
                      (function (e, r, t) {
                        let o = r;
                        if (0 === o.length) {
                          let r;
                          ("result" === e.type
                            ? (r = e.currentBatch)
                            : "empty" !== e.type && (r = e.batch),
                            (o = r ? [r] : []));
                        }
                        return new Map(
                          o.flatMap((e) =>
                            e.resources.flatMap((e) => {
                              let r = t.get(e.resourceId);
                              return (0, R.dw)(r) ? [[e.resourceId, r]] : [];
                            }),
                          ),
                        );
                      })(
                        B.renderState,
                        B.projection.historyBatches,
                        B.projection.resourceById,
                      ),
                    [
                      B.projection.historyBatches,
                      B.projection.resourceById,
                      B.renderState,
                    ],
                  )),
                  (function (e) {
                    let {
                        editor: r,
                        nodeId: t,
                        regenerableResource: o,
                        regenerableResourcesById: n,
                        renderState: i,
                        resourceRegeneration: s,
                        subscribedResourceIds: l,
                      } = e,
                      d = (0, a.useMemo)(() => new Set(n.keys()), [n]),
                      u = (0, a.useMemo)(() => {
                        var e, r;
                        return (
                          (e = i),
                          (r = l),
                          "error" !== e.type || void 0 === e.batch
                            ? r
                            : e.refreshResourceIds
                        );
                      }, [i, l]),
                      c = (0, a.useCallback)(
                        (e) => {
                          r.refreshResourceIds(e);
                        },
                        [r],
                      ),
                      p = (0, a.useCallback)(
                        (e, t) => r.recoverMediaPlaybackUrl(e, t),
                        [r],
                      ),
                      v = (0, a.useCallback)(() => {
                        if (o && s) {
                          if (s.regenerate({ nodeId: t, resource: o })) {
                            var e, a;
                            null == (a = r.featuresApi) ||
                              null == (e = a.canvas.gestures) ||
                              e.declare({
                                surface: "mediaResult",
                                mediaType: "video",
                                gesture: "regenerate",
                                nodeId: t,
                                resourceId: o.resource_id,
                              });
                          }
                          return;
                        }
                        u.length > 0 && c(u);
                      }, [r, c, t, u, o, s]),
                      m = (0, a.useCallback)(
                        (e) => {
                          let o = n.get(e);
                          if (
                            o &&
                            s &&
                            s.regenerate({ nodeId: t, resource: o })
                          ) {
                            var a, i;
                            null == (i = r.featuresApi) ||
                              null == (a = i.canvas.gestures) ||
                              a.declare({
                                surface: "mediaResult",
                                mediaType: "video",
                                gesture: "regenerate",
                                nodeId: t,
                                resourceId: e,
                              });
                          }
                        },
                        [r, t, n, s],
                      );
                    return {
                      canRecoverCurrentBatch: !!(o && s) || u.length > 0,
                      handleCurrentBatchRetry: v,
                      handleRegenerateResource: m,
                      handleRefreshResourceIds: c,
                      handleRecoverPlaybackUrl: p,
                      regenerableResource: o,
                      regenerableResourceIds: d,
                      regenerableResourcesById: n,
                      resourceRegeneration: s,
                    };
                  })({
                    editor: B.editor,
                    nodeId: B.nodeId,
                    regenerableResource:
                      ((U = ed),
                      (A = B.resourceId),
                      (ec = (eu = [...U.values()]).find(
                        (e) => e.resource_id === A,
                      )) || (1 === eu.length ? eu[0] : void 0)),
                    regenerableResourcesById: ed,
                    renderState: B.renderState,
                    resourceRegeneration:
                      null == (M = B.editor.featuresApi)
                        ? void 0
                        : M.canvas.resourceRegeneration,
                    subscribedResourceIds: B.projection.subscribedResourceIds,
                  })),
                eA =
                  ((ep =
                    ((H = (E = {
                      isUploadSession: o.uploadSession,
                      projection: eP,
                      renderState: eC,
                      resourceId: ev,
                      uploadResource: ey.resource,
                    }).isUploadSession),
                    (K = E.resourceId),
                    (O = E.projection.resourceById),
                    (Y = E.uploadResource),
                    H ? (K ? O.get(K) : void 0) : Y)),
                  {
                    displayedBatchResources: (0, a.useMemo)(() => {
                      var e, r;
                      let t;
                      return (
                        (e = E.renderState),
                        (r = E.projection.resourceById),
                        ("result" === e.type
                          ? (t = e.currentBatch)
                          : ("loading" === e.type ||
                              "queued" === e.type ||
                              "error" === e.type) &&
                            (t = e.batch),
                        void 0 === t)
                          ? []
                          : t.resources.map((e) => r.get(e.resourceId))
                      );
                    }, [E.projection.resourceById, E.renderState]),
                    uploadResource: ep,
                  }),
                eE =
                  ((Z = e.id),
                  (G = t.viewport),
                  (0, a.useMemo)(
                    () => ({ nodeId: Z, viewportPresentation: G }),
                    [Z, G],
                  )),
                eF = (0, a.useMemo)(
                  () => ({
                    batches: eP.historyBatches,
                    primaryResourceId: ev,
                    resourceById: eP.resourceById,
                  }),
                  [eP.historyBatches, eP.resourceById, ev],
                );
              return {
                nodeId: e.id,
                timelineRenderSession:
                  null == (n = t.featuresApi)
                    ? void 0
                    : n.canvas.timelineRender,
                asyncHistoryProjection: eS,
                batches: eP.batches,
                history: eF,
                browsing: eI,
                canRetryUpload: ey.canRetry,
                ...ej,
                ...eA,
                expandedFromCompletion: eR.expandedFromCompletion,
                hasIndependentPrimaryPreview: eP.hasIndependentPrimaryPreview,
                ...eB,
                ...eM,
                handleToggleExpansion: eR.toggle,
                handleUploadRetry: ey.retry,
                isUploadSession: o.uploadSession,
                isSmallSurface:
                  (void 0 !== (Q = e).width && Q.width < 240) ||
                  (void 0 !== Q.height && Q.height < 160),
                mediaResultLayoutAvailable: ek,
                ...eU,
                renderState: eC,
                resultBrowsingAvailable: ex,
                resultCollectionCount: e_,
                resultExpanded: ew,
                queryResourceIds: eP.subscribedResourceIds,
                title: em,
                viewportDecoration: eE,
              };
            })(e, el, J, { full: ea, lightResourceId: ei, uploadSession: ee }),
            eu = (0, x.m)(ed.resourceRegeneration, e.id),
            ec = (function (e) {
              let { height: r, width: t } = e,
                o = e$(t),
                a = e$(r);
              return {
                explicit: o || a,
                height: a ? r : 225,
                width: o ? t : 400,
              };
            })(e),
            ep = (0, j.Bf)("video"),
            ev =
              !X &&
              ((null == (r = e.data.tagPresentation)
                ? void 0
                : r.tagIds.length) ?? 0) === 0,
            em =
              ((l = e),
              (c = ea),
              (m = er),
              (Z =
                (g = ed).resourceCounts.readyCount +
                g.resourceCounts.pendingCount +
                g.resourceCounts.errorCount +
                +!!m),
              (G = Math.max(l.data.totalResourceCount ?? 0, Z)),
              (c && Z === G) ||
                (Y = (0, p.SAB)({
                  previewStatus: (function (e, r) {
                    if (
                      r &&
                      (r.status === y.ao.failed || r.status === y.ao.canceled)
                    )
                      return (0, es.r)(r, eb);
                    return "result" === e.type
                      ? (0, p.zih)()
                      : "error" === e.type
                        ? e.message
                        : "queued" === e.type
                          ? (0, p.Khs)()
                          : "loading" === e.type
                            ? "progress" === e.appearance
                              ? (0, p.Khs)()
                              : (0, p.kCx)()
                            : (0, p.XLb)();
                  })(g.renderState, eF(g)),
                  resourceCount: G,
                  selected: l.selected,
                })),
              { accessibleDescription: Y, resourceCount: G }),
            eg =
              ((h = e.id),
              (Q = eD((C = ed), er) && (0, k.l5)(C.uploadResource)),
              (0, k.YV)(h, Q)),
            eh =
              ea && "result" === ed.renderState.type && !ed.resultExpanded
                ? ed.displayedBatchResources.find((r) => {
                    var t, o, a;
                    return (
                      (null == r ? void 0 : r.resource_id) ===
                        e.data.resourceId &&
                      (null == r ||
                      null == (a = r.video) ||
                      null == (o = a.gen) ||
                      null == (t = o.preset)
                        ? void 0
                        : t.id) === "one_click_gif"
                    );
                  })
                : void 0,
            ey = null == (t = J.featuresApi) ? void 0 : t.canvas.gifExport;
          return (0, o.jsx)(E.a, {
            state: eu,
            children: (0, o.jsxs)(j.Jm, {
              accessibleDescription: em.accessibleDescription,
              chromeSuppressed: !0 === e.data.isEditing,
              connectable: !!X && e.isConnectable,
              connectionHandleDisabledReason: X
                ? e.data.connectionHandleDisabledReason
                : void 0,
              connectionHandles: e.data.targetConnectable ? "both" : "source",
              handlesInteractive: !eg,
              handlesVisible: !eg,
              dragging: e.dragging,
              className:
                ((B = ec.explicit),
                (U = en.cropActive),
                `${B ? "!min-h-0 !min-w-0" : "min-h-[225px] min-w-[400px]"} ${U ? "rounded-canvas-zero [&_[data-testid=image-primary-preview-viewport]]:rounded-canvas-zero" : "rounded-[8px]"} ${f.JB}`),
              frame:
                "result" === ed.renderState.type
                  ? "overlay"
                  : "selection-border",
              multiSelectionConnection: X
                ? e.data.multiSelectionConnection
                : void 0,
              nodeId: e.id,
              readyCount: ed.resourceCounts.readyCount,
              pendingCount: ed.resourceCounts.pendingCount + +!!er,
              errorCount: ed.resourceCounts.errorCount,
              resourceCount: em.resourceCount,
              resultsExpanded: !!ea && ed.resultExpanded,
              title: ed.title,
              tagControlsSuppressed: ev,
              titleEditable: !!X && et,
              titleEditorOptions: ep,
              titleIcon: eB,
              titleVariant: "media",
              selected: e.selected,
              showHeader: !1,
              tagPresentation: e.data.tagPresentation,
              testId: "video-flow-node-surface",
              children: [
                (0, o.jsx)(eU, {
                  active: et,
                  fullscreenEnabled: X,
                  logicalSize: ec,
                  nodeId: e.id,
                  preferredResourceId: e.data.resourceId,
                  renderMode: eo,
                  resultInteraction: el,
                  selected: e.selected,
                  isImportedPlaceholder: er,
                  previewTier:
                    ((A = e.data),
                    el.active
                      ? null == (H = A.videoPreviewQuality)
                        ? void 0
                        : H.activeTier
                      : null == (O = A.videoPreviewQuality)
                        ? void 0
                        : O.normalTier),
                  previewUpgradeEnabled: !0 === e.data.mediaPreviewInViewport,
                  videoPostEdit: en,
                  viewModel: ed,
                  replacementVisible:
                    !!X &&
                    !ed.resultExpanded &&
                    void 0 !== e.data.resourceId &&
                    "uploaded" === e.data.source,
                }),
                (null == eh || null == (n = eh.video) ? void 0 : n.vid) !==
                  void 0 &&
                  void 0 !== ey &&
                  (0, o.jsx)(d, {
                    session: ey,
                    source: {
                      nodeId: e.id,
                      resourceId: eh.resource_id,
                      vid: eh.video.vid,
                    },
                    canWrite: !!X,
                    downloadVisible: J.isDirectDownloadVisible(),
                  }),
              ],
            }),
          });
        });
      function eU(e) {
        return (0, o.jsxs)(ep.G, {
          nodeId: e.nodeId,
          upgradeEnabled: e.previewUpgradeEnabled,
          enabled: "result" === e.viewModel.renderState.type,
          transparentCoverSourceUrl:
            "result" === e.viewModel.renderState.type
              ? (0, u.dv)(e.viewModel.renderState.currentBatch)
                  .transparentCoverSourceUrl
              : void 0,
          children: [
            (0, o.jsx)(eA, { ...e }),
            e.replacementVisible
              ? (0, o.jsx)(B.Q, {
                  handoffUnavailable: (function (e, r) {
                    if ("error" === e.type) return !0;
                    if ("result" !== e.type) return !1;
                    let t = (0, u.dv)(e.currentBatch);
                    return t.resourceId === r && !(0, u.ey)(t);
                  })(e.viewModel.renderState, e.preferredResourceId),
                  mediaKind: "video",
                  nodeId: e.nodeId,
                  resourceId: e.preferredResourceId,
                })
              : null,
          ],
        });
      }
      function eA(e) {
        let {
            active: r,
            fullscreenEnabled: t,
            isImportedPlaceholder: a,
            logicalSize: n,
            nodeId: i,
            preferredResourceId: s,
            renderMode: l,
            selected: d,
            viewModel: u,
          } = e,
          c = "full" === l,
          p = (0, H.A)({
            currentHeight: n.height,
            currentWidth: n.width,
            enabled: u.mediaResultLayoutAvailable,
            nodeId: i,
            nodeType: "video",
            preferredResourceId: s,
            resources: u.displayedBatchResources,
          }),
          v = eD(u, a);
        if (
          !(0, M.$S)({
            renderMode: l,
            stateType: u.renderState.type,
            uploadLifecycle: v,
          }) &&
          "full" !== l
        )
          return (0, o.jsx)(eE, { ...e, renderMode: l });
        let m = { ...p, explicit: n.explicit },
          g = "empty" === u.renderState.type && !v;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            u.resourceReveal ? (0, o.jsx)(D.fu, { ...u.resourceReveal }) : null,
            g ? (0, o.jsx)(O.aY, {}) : null,
            (0, o.jsx)(eH, {
              active: r,
              isImportedPlaceholder: a,
              nodeId: i,
              renderMode: l,
              visible: v,
              viewModel: u,
            }),
            (0, o.jsx)(eT, {
              active: r,
              logicalSize: m,
              previewTier: e.previewTier,
              selected: d,
              visible: !v,
              viewModel: u,
            }),
            (function (e) {
              if (!e.fullMode) return null;
              let {
                resultInteraction: r,
                selected: t,
                videoPostEdit: a,
                viewModel: n,
              } = e.props;
              return (0, o.jsx)(eL, {
                active: r.active,
                fullscreenEnabled: e.fullscreenEnabled,
                logicalSize: e.logicalSize,
                previewTier: e.props.previewTier,
                selected: t,
                videoPostEdit: a,
                viewModel: n,
                visible: !e.isUploadPlaceholder,
              });
            })({
              fullMode: c,
              fullscreenEnabled: t,
              isUploadPlaceholder: v,
              logicalSize: m,
              props: e,
            }),
          ],
        });
      }
      function eE(e) {
        var r;
        let {
          active: t,
          logicalSize: a,
          nodeId: n,
          preferredResourceId: i,
          renderMode: s,
          viewModel: l,
        } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(ev, {
              active: t,
              announceUploadLifecycle: l.isUploadSession,
              logicalHeight: a.height,
              logicalWidth: a.width,
              nodeId: n,
              renderMode: s,
              state: l.renderState,
              title: l.title,
              uploadResource: eF(l),
            }),
            (0, o.jsx)(c.b, {
              kind:
                null ==
                (r = l.displayedBatchResources.find(
                  (e) => (null == e ? void 0 : e.resource_id) === i,
                ))
                  ? void 0
                  : r.generation_kind,
            }),
          ],
        });
      }
      function eF(e) {
        var r;
        let t = e.uploadResource;
        if (
          (null == t || null == (r = t.nodeUpload) ? void 0 : r.origin) !==
            "video-trim" &&
          (e.isUploadSession || "empty" === e.renderState.type)
        )
          return t;
      }
      function eD(e, r) {
        return (
          !!r ||
          !!e.isUploadSession ||
          (!!e.uploadResource && "empty" === e.renderState.type)
        );
      }
      function eT(e) {
        var r, t, a, n, i, s, l, d;
        let {
            active: v,
            logicalSize: g,
            previewTier: h,
            selected: f,
            visible: b,
            viewModel: I,
          } = e,
          { renderState: R } = I;
        if (
          !b ||
          ("queued" !== R.type && "loading" !== R.type && "error" !== R.type)
        )
          return null;
        let x = (function (e) {
            var r, t;
            let a,
              { active: n, logicalSize: i, selected: s, viewModel: l } = e,
              { renderState: d } = l;
            if ("queued" === d.type)
              a = (0, o.jsx)(eN, {
                active: n,
                logicalSize: i,
                state: d,
                viewModel: l,
              });
            else if ("loading" === d.type) {
              let e =
                d.batch &&
                (null == (r = (0, u.dv)(d.batch))
                  ? void 0
                  : r.generationMode) === y.xi.timelineRender;
              a = (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(eR, {
                    active: n,
                    logicalHeight: i.height,
                    logicalWidth: i.width,
                    appearance: d.appearance,
                    selected: s,
                    startedAtMs: d.startedAtMs,
                    statusLabel: e ? (0, p.pTt)() : void 0,
                    title: l.title,
                  }),
                  e
                    ? (0, o.jsx)(m, {
                        nodeId: l.nodeId,
                        session: l.timelineRenderSession,
                      })
                    : null,
                ],
              });
            } else {
              let e;
              if ("error" !== d.type) return null;
              (l.regenerableResource &&
                l.resourceRegeneration &&
                (e = (0, p.uop)(l.title)),
                (a = (0, o.jsx)(ew, {
                  active: n,
                  announce: n,
                  message: d.message,
                  retryLabel: e,
                  retryResourceId:
                    null == (t = l.regenerableResource)
                      ? void 0
                      : t.resource_id,
                  title: l.title,
                  onRetry: l.canRecoverCurrentBatch
                    ? l.handleCurrentBatchRetry
                    : void 0,
                })));
            }
            return a;
          })({ active: v, logicalSize: g, selected: f, viewModel: I }),
          w = R.batch ? (0, u.dv)(R.batch) : void 0;
        return void 0 !== R.batch &&
          ((r = R),
          (t = I),
          (0, q.Jg)({
            pendingCollectionCount:
              "loading" === r.type || "queued" === r.type
                ? t.asyncHistoryProjection.collectionCount
                : 0,
            browsableBatchCount: t.asyncHistoryProjection.browsableBatchCount,
            browsableHistoryResultCount:
              t.asyncHistoryProjection.browsableHistoryResultCount,
            browsingAvailable: t.resultBrowsingAvailable,
            expandedFromCompletion: t.expandedFromCompletion,
            hasIndependentPrimaryPreview: t.hasIndependentPrimaryPreview,
            resultExpanded: t.resultExpanded,
            showFailureRecovery: eq(r),
          })) &&
          void 0 !== R.batch
          ? (0, o.jsx)(eP, {
              active: v,
              batch: R.batch,
              collapsedContent: x,
              collectionCount:
                ((a = R),
                (n = I),
                eq(a)
                  ? n.resultCollectionCount
                  : n.asyncHistoryProjection.collectionCount),
              expanded: I.resultExpanded,
              highlightedResourceId: I.highlightedResourceId,
              revealRequest: I.revealRequest,
              history: I.history,
              logicalHeight: g.height,
              logicalWidth: g.width,
              motion: I.browsing.motion,
              previewTier: h,
              regenerableResourceIds: I.regenerableResourceIds,
              viewportDecoration: I.viewportDecoration,
              onRegenerateResource: I.handleRegenerateResource,
              onSelectResource: I.handleSelectResource,
              onToggleExpansion: I.handleToggleExpansion,
            })
          : ((i = x),
            (s = R),
            (l = I.asyncHistoryProjection.collectionCount),
            (d = null == w ? void 0 : w.generationKind),
            ("loading" !== s.type && "queued" !== s.type) || l <= 1
              ? (0, o.jsxs)(o.Fragment, {
                  children: [i, (0, o.jsx)(c.b, { kind: d })],
                })
              : (0, o.jsxs)(A.z, {
                  count: l,
                  children: [i, (0, o.jsx)(c.b, { kind: d })],
                }));
      }
      function eq(e) {
        var r;
        return (
          "error" === e.type &&
          ((null == (r = e.batch) ? void 0 : r.resources.length) ?? 0) > 1
        );
      }
      function eN(e) {
        let r,
          { active: t, logicalSize: a, state: n, viewModel: i } = e,
          s = i.queuedGenerationCancellation;
        return (
          (null == s ? void 0 : s.getState(n.resourceId).available) &&
            (r = i.handleCancelQueuedResource),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(ex, {
                active: t,
                logicalHeight: a.height,
                logicalWidth: a.width,
                queue: n.queue,
                resourceId: n.resourceId,
                startedAtMs: n.startedAtMs,
                title: i.title,
                onCancel: r,
              }),
              i.cancellationFailureAlert,
            ],
          })
        );
      }
      function eL(e) {
        let {
          active: r,
          fullscreenEnabled: t,
          logicalSize: a,
          previewTier: n,
          selected: i,
          videoPostEdit: s,
          viewModel: l,
          visible: d,
        } = e;
        if (!d || "result" !== l.renderState.type) return null;
        let { browsing: u, resultExpanded: c } = l;
        return (0, o.jsx)(eC, {
          active: r,
          collectionCount: l.resultCollectionCount,
          expanded: c,
          fullscreenEnabled: t,
          motion: u.motion,
          hasIndependentPrimaryPreview: l.hasIndependentPrimaryPreview,
          highlightedResourceId: l.highlightedResourceId,
          revealRequest: l.revealRequest,
          history: l.history,
          isSmallSurface: l.isSmallSurface,
          logicalHeight: a.height,
          logicalWidth: a.width,
          previewTier: n,
          selected: i,
          resultBrowsingAvailable: l.resultBrowsingAvailable,
          state: l.renderState,
          title: l.title,
          viewportDecoration: l.viewportDecoration,
          trimActive: s.active,
          squareCorners: s.cropActive,
          inlinePlayerActionsVisible: s.inlinePlayerActionsVisible,
          regenerableResourceIds: l.regenerableResourceIds,
          copyResourceDisabledReason: l.copyResourceDisabledReason,
          getDownloadResourceState: l.getDownloadResourceState,
          onCopyResource: l.handleCopyResource,
          onDownloadResource: l.handleDownloadResource,
          onRegenerateResource: l.handleRegenerateResource,
          onPlaybackFailure: l.handlePlaybackFailure,
          onPlaybackStarted: l.handlePlaybackStarted,
          onPlaybackPaused: l.handlePlaybackPaused,
          onRecoverPlaybackUrl: l.handleRecoverPlaybackUrl,
          onVideoElementChange: s.onVideoElementChange,
          onRefreshResourceIds: l.handleRefreshResourceIds,
          onSelectResource: l.handleSelectResource,
          onToggleExpanded: l.handleToggleExpansion,
        });
      }
      function e$(e) {
        return void 0 !== e && Number.isFinite(e) && e > 0;
      }
      function eH(e) {
        let {
          active: r,
          isImportedPlaceholder: t,
          nodeId: a,
          renderMode: n,
          visible: i,
          viewModel: s,
        } = e;
        return i
          ? (0, o.jsx)(eI, {
              active: r,
              announceFailure: s.isUploadSession,
              announcePending: s.isUploadSession || t,
              nodeId: a,
              renderMode: n,
              resource: s.uploadResource,
              title: s.title,
              onRetry: s.canRetryUpload ? s.handleUploadRetry : void 0,
            })
          : null;
      }
      function eW(e) {
        if (e.status !== y.ao.success) return !1;
        let r = (0, u.nf)({ resourceId: e.resource_id, resource: e });
        return void 0 !== (0, u.NI)(r, "node");
      }
      let eK = [];
      function ez(e, r) {
        let t = !0 === r.active || r.expanded,
          o = (0, U.E)({
            batches: e.map((e) => ({ itemIds: e.resourceIds, key: e.key })),
            currentItemId: r.primaryResourceId,
            preferredKey: t ? r.viewingBatchKey : void 0,
          });
        return o >= 0 ? e[o] : void 0;
      }
      function eV(e) {
        let r = [],
          t = new Set();
        for (let o of e.resourceBatches) {
          let a = o.resourceIds.filter(
              (e) => !(!e || t.has(e)) && (t.add(e), !0),
            ),
            n = a[0];
          n &&
            r.push({
              key: o.id,
              ...(e.primaryResourceId && a.includes(e.primaryResourceId)
                ? { primaryResourceId: e.primaryResourceId }
                : {}),
              resourceIds: [n, ...a.slice(1)],
            });
        }
        return r;
      }
    },
    19952(e, r, t) {
      var o = t(90561),
        a = t(24548),
        n = t(11456);
      function i(e) {
        let { kind: r, placement: t = "overlay" } = e,
          a = s(r);
        return a
          ? (0, o.jsx)("span", {
              className: `pointer-events-none z-canvas-media-result-selection-surface flex h-canvas-video-sample-promotion-badge items-center px-canvas-video-sample-promotion-badge-inline py-canvas-video-sample-promotion-badge-block font-dreamina-cn font-dreamina-medium text-dreamina-cn-14 leading-canvas-video-sample-promotion-mode-label text-dreamina-on-media-text-primary [text-shadow:0_1px_1px_rgba(0,0,0,0.24)] ${"inline" === t ? "relative shrink-0" : "absolute left-canvas-media-history-view-control-inset top-canvas-media-history-view-control-inset"}`,
              children: a,
            })
          : null;
      }
      function s(e) {
        return e === a.y1.sample
          ? (0, n.rf)()
          : e === a.y1.finalFromSample
            ? (0, n.lh)()
            : void 0;
      }
      t.d(r, { B: () => s, b: () => i });
    },
    55419(e, r, t) {
      var o = t(90561),
        a = t(87429),
        n = t(93998),
        i = t(40627),
        s = t(66747),
        l = t(73931),
        d = t(7402);
      let u = (0, a.createContext)(void 0),
        c = [];
      function p(e) {
        let {
            children: r,
            nodeId: t,
            upgradeEnabled: l,
            enabled: d,
            transparentCoverSourceUrl: c,
          } = e,
          p = (0, n.FY)().imagePreviews,
          v = (0, i.jF)(p, c, "video-frame", d && l),
          m = (0, a.useMemo)(
            () => ({
              nodeId: t,
              upgradeEnabled: l,
              transparentCoverSourceUrl: c,
              transparentCover: v,
            }),
            [t, l, c, v],
          );
        return (0, o.jsx)(u.Provider, {
          value: m,
          children: (0, o.jsx)(s.EY, {
            clearDisplayed: !d,
            enabled: d,
            children: r,
          }),
        });
      }
      function v(e) {
        let r = (0, a.useContext)(u),
          t = (0, o.jsx)(m, { ...e });
        return e.primary && r
          ? t
          : (0, o.jsx)("div", {
              className: "relative h-full w-full",
              children: (0, o.jsx)(s.EY, {
                clearDisplayed: !1,
                enabled: !0,
                children: t,
              }),
            });
      }
      function m(e) {
        let r = (0, a.useContext)(u),
          { resource: t } = e,
          d = (0, n.FY)().imagePreviews,
          p = t.transparentCoverSourceUrl,
          v =
            void 0 !== p &&
            p === (null == r ? void 0 : r.transparentCoverSourceUrl)
              ? r.transparentCover
              : void 0,
          m = (0, i.jF)(
            d,
            v ? void 0 : p,
            "video-frame",
            (null == r ? void 0 : r.upgradeEnabled) ?? !0,
          ),
          h = v ?? m,
          y = (0, l.W)(null == r ? void 0 : r.nodeId, t.resourceId, c),
          f = p ? h.resolvedUrl : t.posterUrl,
          b = p ? void 0 : t.posterResolutionSource,
          I = (0, a.useMemo)(
            () => ({ cover_url: f, cover_resolution_source: b }),
            [f, b],
          ),
          R = (0, i.Km)(I),
          x = void 0 !== p && "failed" !== h.status && void 0 === h.resolvedUrl;
        (0, s._M)(x || "selected" === R.status);
        let w = () => {
          (y.clearFailedUrls(),
            p && d.recoverFromDisplayedFailure(p, "decode", "video-frame"));
        };
        return x
          ? e.children
          : "selected" !== R.status
            ? e.unavailable(w)
            : (0, o.jsx)(g, {
                ...e,
                unavailable: () => e.unavailable(w),
                fallback: R,
                failures: y,
                urls: I,
              });
      }
      function g(e) {
        let { fallback: r, failures: t, urls: o, ...n } = e,
          s = (0, a.useContext)(u),
          l = (0, a.useMemo)(
            () =>
              void 0 === n.targetBound
                ? [{ url: r.url, source: r.source }]
                : (0, i.Ev)(o, n.targetBound),
            [r.source, r.url, n.targetBound, o],
          ),
          c = (0, a.useMemo)(
            () => ({
              failedUrls: t.failedUrls,
              onUrlFailure: (e) =>
                t.onUrlFailure({
                  ...e,
                  renderMode: n.renderMode ?? "full",
                  surface: n.primary ? "primary" : "batch",
                }),
            }),
            [t, n.primary, n.renderMode],
          ),
          p = (0, d.b)({
            renderMode: n.renderMode,
            presentation: {
              alt: n.alt,
              fit: n.fit ?? "cover",
              selected: n.selected ?? !1,
              testId: n.testId,
            },
            candidates: l,
            fallbackSelectionSource: r.source,
            fallbackUrl: r.url,
            previewFailures: c,
            previewUpgradeEnabled:
              ((null == s ? void 0 : s.upgradeEnabled) ?? !0) &&
              (n.renderMode ?? "full") === "full",
            resourceId: n.resource.resourceId,
          });
        return p.previewFailed && !p.hasDisplayedPreview
          ? n.unavailable(t.clearFailedUrls)
          : n.children;
      }
      t.d(r, { D: () => v, G: () => p });
    },
    11456(e, r, t) {
      var o = t(78425),
        a = t(96783);
      function n() {
        return o.Ay.t("octo_video_sample_badge_label", {}, "Sample");
      }
      function i() {
        return o.Ay.t("octo_video_final_badge_label", {}, "Final");
      }
      function s() {
        return o.Ay.t(
          "octo_video_sample_promotion_sample_mode_label",
          {},
          "Edit sample 480P",
        );
      }
      function l() {
        return o.Ay.t(
          "octo_video_sample_promotion_sample_mode_action_label",
          {},
          "Edit sample",
        );
      }
      function d() {
        return o.Ay.t(
          "octo_video_sample_promotion_final_mode_label",
          {},
          "Generate final video 1080P",
        );
      }
      function u() {
        return o.Ay.t(
          "octo_video_sample_promotion_sample_mode_generate_final",
          {},
          "Full quality",
        );
      }
      function c() {
        return o.Ay.t(
          "octo_video_sample_promotion_action_group_label",
          {},
          "Sample and final video actions",
        );
      }
      function p() {
        return o.Ay.t(
          "web_generate_final_video_tip",
          {},
          "Upgrade this draft to a high-resolution final video without changing its content.",
        );
      }
      function v() {
        return o.Ay.t(
          "octo_video_sample_promotion_panel_label",
          {},
          "Final video settings",
        );
      }
      function m() {
        return o.Ay.t(
          "web_select_final_video_resolution",
          {},
          "Choose final video resolution",
        );
      }
      function g() {
        return o.Ay.t(
          "web_select_final_video_resolution_tip",
          {},
          "The final video will retain the content of your draft.",
        );
      }
      function h() {
        return o.Ay.t(
          "octo_video_sample_generation_toast_started",
          {},
          "Sample generation submitted. Samples are stored for up to 7 days and cannot be used to generate final videos after expiry.",
        );
      }
      function y(e, r) {
        if (void 0 === e)
          return o.Ay.t(
            "seedance_25_draft_gen_tooltips",
            {},
            "Samples are stored for up to 7 days and cannot be used to generate final videos after expiry.",
          );
        let t =
            "u" < typeof document
              ? void 0
              : document.documentElement.lang || void 0,
          a = new Intl.DateTimeFormat(t, {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
          }),
          n = a.format(e),
          i = a.resolvedOptions().locale.startsWith("zh")
            ? n
                .replace(/([\u6708\u65e5])/g, " $1 ")
                .replace(/\s+/g, " ")
                .trim()
            : n;
        return r
          ? o.Ay.t(
              "octo_video_sample_promotion_expired_at_notice",
              { time: i },
              "Samples are stored for up to 7 days. This sample expired on {time}.",
            )
          : o.Ay.t(
              "octo_video_sample_promotion_expires_at_notice",
              { time: i },
              "Samples are stored for up to 7 days. Generate a final video before {time}.",
            );
      }
      function f(e) {
        return e.toUpperCase();
      }
      function b(e) {
        return o.Ay.t(
          "octo_video_sample_promotion_resolution_a11y_label",
          { value: e.toUpperCase() },
          "{value} resolution",
        );
      }
      function I() {
        return o.Ay.t(
          "octo_video_sample_promotion_unavailable_resolution_reason",
          {},
          "Coming soon",
        );
      }
      function R() {
        return (0, a.bN)();
      }
      function x() {
        return o.Ay.t("web_new_task_is_generating", {}, "Generating...");
      }
      function w() {
        return o.Ay.t(
          "octo_video_sample_promotion_expired_message",
          {},
          "This sample has expired. Generate a new sample and try again.",
        );
      }
      function P() {
        return o.Ay.t(
          "octo_video_sample_promotion_failed_message",
          {},
          "Could not generate the final video. Try again.",
        );
      }
      function C() {
        return o.Ay.t("sd25_draft_resolution_label", {}, "Sample 480P");
      }
      function S() {
        return o.Ay.t(
          "sd25_draft_resolution_tip",
          {},
          "Generate a 480P draft first. Once confirmed, upgrade it to a high-resolution final video.",
        );
      }
      t.d(r, {
        $N: () => f,
        Bm: () => P,
        Db: () => m,
        Em: () => y,
        Gl: () => l,
        KE: () => g,
        NH: () => S,
        Wy: () => s,
        XA: () => v,
        ZF: () => x,
        _P: () => u,
        dz: () => w,
        f9: () => h,
        hk: () => b,
        lh: () => i,
        rf: () => n,
        s6: () => c,
        sw: () => C,
        uL: () => R,
        uw: () => d,
        vB: () => I,
        y5: () => p,
      });
    },
  },
]);
