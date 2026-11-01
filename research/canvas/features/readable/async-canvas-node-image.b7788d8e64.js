"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [8364],
  {
    49080(e, r, t) {
      var a = t(66876),
        o = t(71540),
        n = t(18650),
        i = t(12760);
      async function s(e, r, t) {
        var o;
        if (
          !(null == (o = e.canvas.imageLayerBoard) ? void 0 : o.copyLayer(r, t))
        )
          return { ok: !1, reason: "unsupportedSelection" };
        let n = e.canvas.imageLayerBoard.getCopiedLayerToken(),
          i = {
            imageLayerId: t,
            ...(n ? { imageLayerClipboardToken: n } : {}),
          };
        return e.canvas.actions.copy.getState([r], "image", i).available
          ? e.canvas.actions.copy.execute([r], "image", i)
          : { ok: !0, message: (0, a.yvs)(), value: {} };
      }
      function l(e, r) {
        var t;
        let a =
          null == (t = e.canvas.imageLayerBoard)
            ? void 0
            : t.getCopiedLayerToken();
        return void 0 !== a && r.includes((0, o.bA)(a));
      }
      function d(e, r) {
        var t;
        if (
          !(null == (t = e.canvas.imageLayerBoard)
            ? void 0
            : t.getCopiedLayer())
        )
          return { available: !1, reason: "clipboardEmpty" };
        let a = (0, n.xC)(e, r);
        return a && !(0, i.qB)(a)
          ? { available: !1, reason: "layerLimit" }
          : { available: !0 };
      }
      async function u(e, r) {
        var t;
        let a = e.canvas.actions.updateImageLayerBoard.getState();
        if (!a.available) return { ok: !1, reason: a.reason };
        let o = (0, n.xC)(e, r);
        if (!o) return { ok: !1, reason: "nodeUnavailable" };
        let s =
          null == (t = e.canvas.imageLayerBoard) ? void 0 : t.getCopiedLayer();
        if (!s) return { ok: !1, reason: "invalidSelection" };
        let l = (0, i.u1)(o, s);
        return l
          ? (0, n.c_)(
              e,
              r,
              { board: l.board, selectLayerId: l.layerId },
              "paste_layer",
            )
          : { ok: !1, reason: "invalidSelection" };
      }
      t.d(r, { Fx: () => u, J5: () => d, Oj: () => l, fy: () => s });
    },
    85570(e, r, t) {
      function a(e) {
        return "base" === e.source.kind
          ? `base:${e.resourceId}`
          : `layer:${e.source.layerId}:${e.resourceId}`;
      }
      t.d(r, { H: () => a });
    },
    72311(e, r, t) {
      var a = t(90561),
        o = t(172),
        n = t(73338);
      let i = {
          "top-left": "left-0 top-0",
          "top-right": "right-0 top-0",
          "bottom-left": "bottom-0 left-0",
          "bottom-right": "bottom-0 right-0",
        },
        s = {
          "top-left": "cursor-nwse-resize",
          "top-right": "cursor-nesw-resize",
          "bottom-left": "cursor-nesw-resize",
          "bottom-right": "cursor-nwse-resize",
        };
      function l(e) {
        let {
          anchorClassName: r,
          className: t,
          corner: l,
          label: d,
          screenFixed: u = !1,
          ...c
        } = e;
        return (0, a.jsx)("span", {
          ...(u ? n.Bs : {}),
          className: (0, o.cn)(
            "pointer-events-none absolute size-canvas-zero",
            i[l],
            r,
          ),
          style: u
            ? { scale: `var(${n.mX}, 1)`, transformOrigin: "center" }
            : void 0,
          children: (0, a.jsx)(o.K0, {
            ...c,
            className: (0, o.cn)(
              "nodrag nopan nowheel pointer-events-auto absolute -left-2.5 -top-2.5 size-5 rounded-canvas-zero border-0 bg-transparent p-canvas-selection-handle-inset hover:bg-transparent active:bg-transparent",
              s[l],
              t,
            ),
            icon: (0, a.jsx)("span", {
              className:
                "pointer-events-none block size-canvas-selection-handle rounded-canvas-selection-handle border border-dreamina-brand-default bg-dreamina-on-media-text-primary shadow-dreamina-icon-text",
              "data-canvas-selection-handle-visual": l,
            }),
            label: d,
          }),
        });
      }
      t.d(r, { z: () => l });
    },
    42729(e, r, t) {
      t.d(r, { ImageFlowNode: () => rU });
      var a = t(90561),
        o = t(96408),
        n = t(83441),
        i = t(86197),
        s = t(172),
        l = t(25063),
        d = t(87429);
      let u = () => () => void 0;
      function c(e, r, t) {
        let a = (0, d.useCallback)(() => {
            let t = null == e ? void 0 : e.getSnapshot();
            return (
              (null == t ? void 0 : t.status) === "active" &&
              t.presentation.nodeId === r
            );
          }, [r, e]),
          o = t || (null == e ? void 0 : e.canOpen(r)) === !0,
          n = (0, d.useCallback)(
            (t) => {
              let a = null == e ? void 0 : e.getSnapshot();
              return o ||
                ((null == a ? void 0 : a.status) === "active" &&
                  a.presentation.nodeId === r)
                ? ((null == e ? void 0 : e.subscribeActiveNode(r, t)) ?? u())
                : u();
            },
            [r, o, e],
          );
        return (0, d.useSyncExternalStore)(n, a);
      }
      function v(e) {
        let { nodeId: r, session: t } = e;
        return (null == t ? void 0 : t.canOpen(r))
          ? (0, a.jsx)(p, { nodeId: r, session: t })
          : null;
      }
      function p(e) {
        let { nodeId: r, session: t } = e;
        return c(t, r, !0)
          ? null
          : (0, a.jsx)("div", {
              className:
                "nodrag nopan absolute right-2 top-2 z-canvas-media-result-action-chrome",
              children: (0, a.jsx)(l.Bc, {
                delayDuration: 0,
                children: (0, a.jsxs)(l.m_, {
                  children: [
                    (0, a.jsx)(l.k$, {
                      asChild: !0,
                      children: (0, a.jsx)(s.K0, {
                        variant: "on-media-toolbar",
                        className:
                          "size-8 rounded-canvas-selection-toolbar-control border-dreamina border-dreamina-stroke-primary bg-dreamina-bg-mask-60 hover:bg-dreamina-bg-mask-80 active:bg-dreamina-bg-mask-60 [&_svg]:size-4",
                        icon: (0, a.jsx)(s.p$_, { size: 16 }),
                        label: (0, i.iU)(),
                        onPointerDown: (e) => e.stopPropagation(),
                        onClick: (e) => {
                          (e.stopPropagation(),
                            t.open({
                              nodeId: r,
                              restoreFocusTarget: e.currentTarget,
                            }));
                        },
                      }),
                    }),
                    (0, a.jsx)(l.ZI, { side: "top", children: (0, i.wz)() }),
                  ],
                }),
              }),
            });
      }
      var g = t(66876),
        m = t(50795),
        y = t(24548),
        h = t(70568),
        b = t(8141),
        f = t(83399),
        I = t(93998),
        w = t(60794),
        x = t(40627),
        R = t(91229),
        C = t(51472),
        S = t(12962),
        B = t(73931),
        M = t(36295),
        k = t(77730),
        j = t(77073),
        P = t(9233),
        A = t(76902),
        L = t(69700),
        F = t(1265),
        D = t(62799),
        T = t(8349),
        E = t(66747),
        U = t(7352),
        H = t(98046),
        q = t(39408),
        _ = t(7379),
        N = t(40962),
        z = t(7386),
        W = t(93176),
        $ = t(50647),
        O = t(8459),
        V = t(68227),
        Y = t(54940),
        K = t(7402),
        G = t(61216),
        X = t(66824),
        Q = t(19730),
        J = t(4030);
      let Z = {
          waiting: g.KCn,
          processing: g.GZO,
          progress: g.E0_,
          preparing: g.bkw,
          cancelled: g.i4w,
          fileTooLarge: g.MEo,
          unsupportedType: g.mIh,
          timedOut: g.$Gt,
          failed: g.Gwg,
          retry: g.NpQ,
          retryNode: g.vsi,
          statusAnnouncement: g.Rnq,
        },
        ee = (0, d.memo)(function (e) {
          var r, t, o, n, i, l, u;
          let c,
            { ...v } = e,
            p =
              !!(null == (i = v.resource) ? void 0 : i.nodeUpload) &&
              er.has(i.nodeUpload.origin) &&
              ((l = i).status === y.ao.running || l.status === y.ao.success),
            g = (
              null ==
              (c =
                (null == (u = v.resource) ? void 0 : u.urls) && "url" in u.urls
                  ? u.urls.url
                  : void 0)
                ? void 0
                : c.startsWith("blob:")
            )
              ? c
              : void 0,
            m = null == (r = v.resource) ? void 0 : r.resource_id,
            h = (0, d.useMemo)(
              () =>
                (function (e) {
                  if (e.previewUrl && e.previewResourceId)
                    return {
                      failureContext: {
                        renderMode: "full",
                        resourceId: e.previewResourceId,
                        selectionSource: "base",
                        url: e.previewUrl,
                      },
                      identity: {
                        renderRevision: 0,
                        resourceId: e.previewResourceId,
                        url: e.previewUrl,
                      },
                      presentation: {
                        alt: e.title,
                        fit: "cover",
                        selected: e.active,
                        testId: "image-node-upload-preview",
                      },
                      onCandidateFailure: () => void 0,
                      onDisplayedFailure: () => void 0,
                      onReady: () => void 0,
                    };
                })({
                  active: v.active,
                  previewResourceId: m,
                  previewUrl: g,
                  title: v.title,
                }),
              [m, g, v.active, v.title],
            );
          ((0, E._M)(!!g || void 0), (0, E.I5)(h, m));
          let b = null;
          return (
            p &&
              (b = (0, a.jsx)(T.m, {
                logicalHeight: v.logicalHeight,
                logicalWidth: v.logicalWidth,
                startedAtMs:
                  null == (n = v.resource) || null == (o = n.nodeUpload)
                    ? void 0
                    : o.startedAtMs,
              })),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(V.f, {
                  active: v.active,
                  announceFailure: v.announceFailure,
                  announcePending: v.announcePending,
                  description: v.description,
                  descriptionId: v.descriptionId,
                  errorIcon: (0, a.jsx)(D.Yu, {}),
                  icon: (0, a.jsx)(s.d6D, { className: Q.FG, size: 24 }),
                  nodeId: v.nodeId,
                  pendingSurface: g ? "result" : void 0,
                  previewUrl: g,
                  renderMode: v.renderMode,
                  resource: v.resource,
                  resourceId: null == (t = v.resource) ? void 0 : t.resource_id,
                  surfaceClassName: Q.zl,
                  testIdPrefix: "image-node",
                  texts: Z,
                  title: v.title,
                  visuallyHidePendingMessage: p,
                  onRetry: v.onRetry,
                }),
                b,
              ],
            })
          );
        }),
        er = new Set([
          "image-composition",
          "image-annotation",
          "image-crop",
          "image-flip",
        ]),
        et = (0, d.memo)(function (e) {
          let {
              selected: r,
              announce: t,
              description: o,
              descriptionId: n,
              logicalHeight: i,
              logicalWidth: s,
              appearance: l,
              processingDurationMs: d,
              processingMode: u,
              startedAtMs: c,
              title: v,
            } = e,
            p = "progress" === l ? (0, g.YpW)() : (0, g.wvr)(),
            m = !!(r && t);
          return (0, a.jsx)(W.De, {
            active: m,
            announcement: (0, g.Rnq)({ title: v, message: p }),
            appearance: l,
            description: o,
            descriptionId: n,
            logicalHeight: i,
            logicalWidth: s,
            message: p,
            processingBorder: {
              animationMode: u,
              startedAtMs: c,
              durationMs: d,
            },
            selected: r,
            showMessage: !1,
            surfaceClassName: Q.zl,
            testId: "image-node-loading",
          });
        }),
        ea = (0, d.memo)(function (e) {
          let {
              active: r,
              description: t,
              descriptionId: o,
              logicalHeight: n,
              logicalWidth: i,
              processingMode: s,
              queue: l,
              processingDurationMs: d,
              resourceId: u,
              startedAtMs: c,
              title: v,
              onCancel: p,
            } = e,
            m = (0, N.b)(l, { estimateLabel: g.AcJ, positionLabel: g.j9W });
          return (0, a.jsx)(z.T, {
            active: r,
            announcement: (0, g.Rnq)({ title: v, message: m.message }),
            cancelLabel: (0, g.cWO)(),
            description: t,
            descriptionId: o,
            estimate: m.estimate,
            logicalHeight: n,
            logicalWidth: i,
            position: m.position,
            processingBorder: {
              animationMode: s,
              startedAtMs: c,
              durationMs: d,
            },
            resourceId: u,
            surfaceClassName: Q.zl,
            testId: "image-node-queued",
            onCancel: p,
          });
        }),
        eo = (0, d.memo)(function (e) {
          let r,
            {
              selected: t,
              announce: o,
              description: n,
              descriptionId: i,
              message: s,
              acknowledgement: l,
              historyPreview: d,
              previewFailures: u,
              retryLabel: c,
              retryResourceId: v,
              title: p,
              onRetry: m,
              onRetryResourceIds: y,
            } = e,
            h = null;
          return (
            d &&
              u &&
              y &&
              (h = (0, a.jsx)(eu, {
                previewFailures: u,
                selected: !1,
                testId: "image-node-copyright-history-preview",
                title: p,
                view: d,
                onRetryResourceIds: y,
              })),
            l
              ? (r = {
                  label: l.label,
                  text: l.text,
                  onInvoke: l.onAcknowledge,
                })
              : m &&
                (r = {
                  label: c ?? (0, g.SP8)(p),
                  resourceId: v,
                  requiresWriteChrome: !0,
                  text: void 0 !== v ? (0, g.Gqs)() : (0, g.w8d)(),
                  onInvoke: m,
                }),
            (0, a.jsxs)(a.Fragment, {
              children: [
                h,
                (0, a.jsx)(q.S, {
                  announce: o,
                  announcement: (0, g.Rnq)({ title: p, message: s }),
                  action: r,
                  description: n,
                  descriptionId: i,
                  message: s,
                  selected: t,
                  surfaceClassName: Q.zl,
                  testId: "image-node-error",
                }),
              ],
            })
          );
        }),
        en = (0, d.memo)(function (e) {
          let r = (0, d.useId)(),
            t = `image-async-batch-panel-${r.replaceAll(":", "")}`;
          return (0, a.jsx)("div", {
            className: "relative h-full w-full",
            children: (0, a.jsx)(el, {
              batch: e.batch,
              batches: e.batches,
              collapsedContent: e.collapsedContent,
              collectionCount: e.collectionCount,
              controlsId: t,
              expanded: e.expanded,
              highlightedResourceId: e.highlightedResourceId,
              revealRequest: e.revealRequest,
              logicalHeight: e.logicalHeight,
              logicalWidth: e.logicalWidth,
              motion: e.motion,
              previewFailures: ei,
              regenerableResourceIds: e.regenerableResourceIds,
              showToggle: !0,
              title: e.title,
              viewportDecoration: e.viewportDecoration,
              toggleTabbable: e.active || e.expanded,
              onRegenerateResource: e.onRegenerateResource,
              onSelectResource: e.onSelectResource,
              onToggleExpansion: e.onToggleExpansion,
            }),
          });
        }),
        ei = { failedUrls: new Set(), onUrlFailure: () => void 0 },
        es = (0, d.memo)(function (e) {
          var r, t, o, n;
          let i = (function (e, r) {
              if (void 0 !== r) {
                var t;
                let a = e.resources.find((e) => e.resourceId === r);
                if (
                  (null == a || null == (t = a.resource)
                    ? void 0
                    : t.status) === y.ao.success
                )
                  return a;
              }
              return (
                e.resources.find((e) => {
                  var r;
                  return (
                    (null == (r = e.resource) ? void 0 : r.status) ===
                    y.ao.success
                  );
                }) ?? e.resources[0]
              );
            })(e.state.currentBatch, e.primaryResourceId),
            { expanded: s, onToggleExpansion: l } = e,
            u = (0, d.useId)(),
            c = `image-batch-panel-${u.replaceAll(":", "")}`,
            v = e.state.batches.length > 1 || e.hasIndependentPrimaryPreview,
            p =
              e.resultBrowsingAvailable &&
              (e.active || !e.selected || s) &&
              (e.state.currentBatch.resources.length > 1 || v || s);
          if (!e.active && !s && !p) {
            return (
              (r = e),
              (t = i)
                ? (0, a.jsx)(eu, {
                    description: r.description,
                    descriptionId: r.descriptionId,
                    previewFailures: r.previewFailures,
                    previewTier: r.previewTier,
                    previewUpgradeEnabled: r.previewUpgradeEnabled,
                    selected: !1,
                    testId: "image-node-result",
                    title: r.title,
                    view: t,
                    onReady: r.onPrimaryPreviewReady,
                    onRetryResourceIds: r.onRetryResourceIds,
                  })
                : (0, a.jsx)("div", {
                    "aria-label": r.description,
                    className: "h-full w-full bg-octo-workbench-canvas",
                    "data-testid": "image-node-result",
                    id: r.descriptionId,
                    role: "group",
                  })
            );
          }
          let g =
            ((o = e),
            (n = i)
              ? (0, a.jsx)(eu, {
                  previewFailures: o.previewFailures,
                  previewTier: o.previewTier,
                  previewUpgradeEnabled: o.previewUpgradeEnabled,
                  selected: o.active,
                  title: o.title,
                  view: n,
                  onReady: o.onPrimaryPreviewReady,
                  onRetryResourceIds: o.onRetryResourceIds,
                })
              : (0, a.jsx)("div", {
                  "aria-hidden": !0,
                  className: "h-full w-full bg-octo-workbench-canvas",
                }));
          return (0, a.jsx)("fieldset", {
            "aria-label": e.description,
            className:
              "relative m-0 flex h-full min-w-0 w-full shrink-0 border-0 p-0",
            "data-testid": "image-node-result",
            id: e.descriptionId,
            children: (0, a.jsx)(el, {
              batch: e.state.currentBatch,
              batches: e.state.batches,
              collapsedContent: g,
              collectionCount: e.collectionCount,
              controlsId: c,
              expanded: s,
              motion: e.motion,
              copyrightHistoryPreview: e.copyrightHistoryPreview,
              logicalHeight: e.logicalHeight,
              logicalWidth: e.logicalWidth,
              highlightedResourceId: e.highlightedResourceId,
              revealRequest: e.revealRequest,
              primaryResourceId: e.primaryResourceId,
              previewFailures: e.previewFailures,
              regenerableResourceIds: e.regenerableResourceIds,
              showToggle: p,
              toggleTabbable: e.active || s,
              title: e.title,
              viewportDecoration: e.viewportDecoration,
              copyResourceDisabledReason: e.copyResourceDisabledReason,
              getDownloadResourceState: e.getDownloadResourceState,
              onCopyResource: e.onCopyResource,
              onCopyrightAcknowledgement: e.onCopyrightAcknowledgement,
              onDownloadResource: e.onDownloadResource,
              onRegenerateResource: e.onRegenerateResource,
              onRetryResourceIds: e.onRetryResourceIds,
              onSelectResource: e.onSelectResource,
              onToggleExpansion: l,
            }),
          });
        });
      function el(e) {
        var r, t;
        let o,
          n,
          i,
          s,
          l,
          {
            batch: d,
            batches: u,
            collapsedContent: c,
            collapsedSurfaceClassName: v,
            collectionCount: p = d.resources.length,
            controlsId: m,
            expanded: y,
            motion: h,
            highlightedResourceId: b,
            revealRequest: f,
            primaryResourceId: I,
            previewFailures: w,
            regenerableResourceIds: x,
            copyResourceDisabledReason: R,
            getDownloadResourceState: C,
            onCopyResource: S,
            copyrightHistoryPreview: B,
            onDownloadResource: M,
            showToggle: k,
            toggleTabbable: j,
            title: P,
            viewportDecoration: A,
            onRegenerateResource: L,
            onCopyrightAcknowledgement: F,
            onRetryResourceIds: D,
            onSelectResource: T,
            onToggleExpansion: E,
          } = e,
          U = {
            batch: d,
            previewFailures: w,
            regenerableResourceIds: x,
            title: P,
            copyResourceDisabledReason: R,
            getDownloadResourceState: C,
            onCopyResource: S,
            copyrightHistoryPreview: B,
            onDownloadResource: M,
            onRegenerateResource: L,
            onCopyrightAcknowledgement: F,
            onRetryResourceIds: D,
            failureActionsActive: j,
          },
          q = (r = U).batch.resources.map((e, t) =>
            ed(r, e, t, r.batch.resources.length),
          ),
          _ = (0, Y.O)({
            collapsedContent: c,
            collectionCount: p,
            items: q,
            primaryResourceId: I,
            showToggle: k,
            toggleTabbable: j,
            onToggleExpansion: E,
          }),
          { toggle: N } = _,
          z = _.view;
        return (
          y &&
            (z = {
              type: "history",
              content: c,
              count: p,
              currentItem: _.view.currentItem,
              history:
                ((t = {
                  batches: u,
                  highlightedResourceId: b,
                  revealRequest: f,
                  itemsInput: U,
                  primaryResourceId: I,
                }),
                (o = (0, H.fD)({
                  nodeType: "image",
                  primaryResourceId: t.primaryResourceId,
                  resourceBatches: t.batches.map((e) => ({
                    id: e.id,
                    resourceIds: e.resources.map((e) => e.resourceId),
                  })),
                  resources: t.batches.flatMap((e) =>
                    e.resources.map((e) => e.resource),
                  ),
                })),
                (n = new Map(
                  t.batches.flatMap((e) =>
                    e.resources.map((e) => [e.resourceId, e]),
                  ),
                )),
                (i = []),
                o.items.forEach((e, r) => {
                  let a = n.get(e.id);
                  a &&
                    i.push({
                      ...ed(t.itemsInput, a, r, o.total),
                      batchId: e.batchId,
                      ratio: e.ratio,
                      status: e.status,
                    });
                }),
                (s =
                  void 0 === o.latestBatchId
                    ? 0
                    : i.filter((e) => e.batchId === o.latestBatchId).length),
                (l = {
                  items: i,
                  labels: {
                    currentItem: (0, g.MS0)(),
                    latestSection: (0, g.lMv)(s),
                    list: (0, g.a6G)(),
                    pastSection: (0, g.ok3)(),
                  },
                }),
                void 0 !== o.latestBatchId &&
                  (l.latestBatchId = o.latestBatchId),
                void 0 !== o.primaryId && (l.primaryId = o.primaryId),
                void 0 !== t.highlightedResourceId &&
                  (l.highlightedItemId = t.highlightedResourceId),
                t.revealRequest && (l.revealRequest = t.revealRequest),
                l),
            }),
          (0, a.jsx)($.Ip, {
            collapsedSurfaceClassName: v,
            controlsId: m,
            labels: {
              collapse: (0, g.iYW)(),
              expand: (0, g.oP7)(p),
              list: (0, g.a6G)(),
              currentItem: (0, g.MS0)(),
            },
            motion: h,
            testIdPrefix: "image",
            toggle: N,
            view: z,
            viewportDecoration: A,
            onSelectItem: T,
          })
        );
      }
      function ed(e, r, t, o) {
        {
          var n, i, s;
          let l = (0, g.rKI)(t),
            d = (0, G.Iw)(r),
            u =
              (null == d ? void 0 : d.failureReason) ===
                "input_text_copyright" &&
              void 0 !== e.copyrightHistoryPreview &&
              void 0 !== e.onCopyrightAcknowledgement,
            c =
              ((n = e),
              (i = r),
              (s = d),
              u && n.onCopyrightAcknowledgement
                ? {
                    label: (0, g.z76)(n.title),
                    text: (0, g.Djo)(),
                    onInvoke: n.onCopyrightAcknowledgement,
                  }
                : (null == s ? void 0 : s.reason) === "typeMismatch" &&
                    n.onRetryResourceIds
                  ? {
                      label: (0, g.SP8)(n.title),
                      requiresWriteChrome: !0,
                      text: (0, g.w8d)(),
                      onInvoke: () => {
                        var e;
                        return null == (e = n.onRetryResourceIds)
                          ? void 0
                          : e.call(n, [i.resourceId]);
                      },
                    }
                  : void 0),
            v = void 0 !== c;
          return {
            actions: c
              ? void 0
              : (function (e, r, t) {
                  var o;
                  let n = e.onRegenerateResource;
                  if (
                    (null == (o = e.regenerableResourceIds)
                      ? void 0
                      : o.has(r.resourceId)) === !0 &&
                    n
                  )
                    return (0, a.jsx)(O.i, {
                      label: (0, g.YSX)((0, g.rKI)(t)),
                      resourceId: r.resourceId,
                      text: (0, g.Gqs)(),
                      onInvoke: () => n(r.resourceId),
                    });
                })(e, r, t),
            content: (0, a.jsx)(ep, {
              action: c,
              failure: d,
              failureActionsActive: e.failureActionsActive,
              copyrightHistoryPreview: u ? e.copyrightHistoryPreview : void 0,
              previewFailures: e.previewFailures,
              title: e.title,
              view: r,
            }),
            id: r.resourceId,
            interactiveContent: v,
            interactiveSelectionSurface: v,
            label: l,
            position: t + 1,
            resourceActions: (function (e, r, t) {
              var a;
              let o;
              if (
                (null == (a = r.resource) ? void 0 : a.status) !== y.ao.success
              )
                return;
              r.resource.urls &&
                "download_url" in r.resource.urls &&
                (o = r.resource.urls.download_url);
              let n = e.onCopyResource
                ? () => {
                    var t;
                    return null == (t = e.onCopyResource)
                      ? void 0
                      : t.call(e, r.resourceId);
                  }
                : void 0;
              return (0, S.zV)({
                copyDisabledReason: e.copyResourceDisabledReason,
                downloadUrl: (0, C.v)(o),
                getDownloadResourceState: e.getDownloadResourceState,
                onCopyResource: n,
                onDownloadResource: e.onDownloadResource,
                resultLabel: t,
                resourceId: r.resourceId,
                suggestedFileName: r.resource.name,
              });
            })(e, r, l),
            selectLabel: (function (e, r) {
              var t, a;
              let o = (0, g.y6L)(r);
              if (void 0 === e.resource || e.resource.status === y.ao.running)
                return ((t = (0, g.YpW)()), `${o}. ${t}`);
              let n = (0, G.Iw)(e);
              return n ? ((a = n.message), `${o}. ${a}`) : o;
            })(r, t),
            setSize: o,
          };
        }
      }
      function eu(e) {
        let r,
          {
            description: t,
            descriptionId: o,
            previewFailures: n,
            selected: i,
            previewTier: s,
            previewUpgradeEnabled: l,
            testId: d,
            title: u,
            view: c,
            onReady: v,
            onRetryResourceIds: p,
          } = e,
          m = (0, I.uq)(),
          h = (0, E.pM)(),
          b = c.resource;
        if (
          ((null == b ? void 0 : b.status) === y.ao.success &&
            b.type === y._x.image &&
            (r = (0, J.U3)(b.urls, s)),
          (0, E._M)(h || (null == r ? void 0 : r.status) === "selected"),
          (null == b ? void 0 : b.status) !== y.ao.success)
        )
          return (0, a.jsx)("div", {
            "aria-hidden": void 0 === t ? "true" : void 0,
            "aria-label": t,
            className: "h-full w-full bg-octo-workbench-canvas",
            "data-testid": d,
            id: o,
            role: void 0 === t ? void 0 : "group",
          });
        if ((null == r ? void 0 : r.status) !== "selected")
          return h
            ? null
            : (0, a.jsx)(ev, {
                description: t,
                descriptionId: o,
                resourceId: c.resourceId,
                selected: i,
                title: u,
                onRetryResourceIds: p,
              });
        void 0 === t ||
          o ||
          (0, F.JW)(m, L.O, "missing_description_id", {
            reason: "missing_description_id",
          });
        let f = void 0 !== t && o ? { description: t, descriptionId: o } : {},
          w = (0, J.Ho)(b.urls),
          x = (0, J.qq)(b.urls, s);
        return (0, a.jsx)(ec, {
          alt: (0, g.G5d)({ title: u, name: b.name }),
          ...f,
          candidates: x,
          localUploadTargetUrl: (0, J.l8)(b.urls, s),
          previewUpgradeEnabled: l,
          previewFailures: n,
          selected: i,
          resourceId: c.resourceId,
          fallbackSelectionSource:
            "selected" === w.status ? w.source : r.source,
          fallbackUrl: "selected" === w.status ? w.url : r.url,
          testId: d,
          title: u,
          onReady: v,
          onRetryResourceIds: p,
        });
      }
      function ec(e) {
        let {
            alt: r,
            description: t,
            descriptionId: o,
            previewFailures: n,
            selected: i,
            resourceId: s,
            testId: l,
            title: d,
            onReady: u,
            onRetryResourceIds: c,
            ...v
          } = e,
          { previewFailed: p, hasDisplayedPreview: g } = (0, K.b)({
            ...v,
            presentation: {
              alt: r,
              description: t,
              descriptionId: o,
              fit: "cover",
              selected: i,
              testId: l,
            },
            previewFailures: n,
            resourceId: s,
            onReady: u,
          });
        return p && !g
          ? (0, a.jsx)(ev, {
              description: t,
              descriptionId: o,
              resourceId: s,
              selected: i,
              title: d,
              onRetryResourceIds: c,
            })
          : null;
      }
      function ev(e) {
        let r,
          {
            description: t,
            descriptionId: o,
            resourceId: i,
            selected: l,
            title: d,
            onRetryResourceIds: u,
          } = e,
          { writeChromeVisible: c } = (0, w.A1)();
        return (
          c &&
            (r = (0, a.jsx)(s.$nd, {
              "aria-label": (0, g.SP8)(d),
              className: "nodrag",
              size: "sm",
              tabIndex: l ? void 0 : -1,
              onClick: () => u([i]),
              children: (0, g.w8d)(),
            })),
          (0, a.jsx)(n.b, { action: r, description: t, descriptionId: o })
        );
      }
      function ep(e) {
        let {
            action: r,
            copyrightHistoryPreview: t,
            failure: o,
            failureActionsActive: n,
            previewFailures: i,
            title: s,
            view: l,
          } = e,
          d = l.resource,
          u =
            (null == d ? void 0 : d.type) === y._x.image
              ? (0, J.xw)(d.urls)
              : void 0;
        return o
          ? (0, a.jsx)(eg, {
              action: r,
              failure: o,
              failureActionsActive: n,
              historyPreview: t,
              previewFailures: i,
              title: s,
            })
          : void 0 === d || d.status === y.ao.running
            ? (0, a.jsx)(U.z, {
                generatingLabel: (0, g.YpW)(),
                loadingLabel: (0, g.wvr)(),
                resourceId: l.resourceId,
                status: null == d ? void 0 : d.status,
                testId: "image-batch-resource-pending",
              })
            : d.status !== y.ao.success ||
                (null == u ? void 0 : u.status) !== "selected"
              ? (0, a.jsx)("div", {
                  "aria-hidden": "true",
                  className: "h-full w-full bg-octo-workbench-canvas",
                  "data-canvas-content-evidence": "frame_estimate",
                  "data-canvas-content-state": "media_error",
                  "data-testid": "image-batch-tile-unavailable",
                })
              : (0, a.jsx)(em, {
                  alt: (0, g.G5d)({ title: s, name: d.name }),
                  previewFailures: i,
                  resourceId: l.resourceId,
                  selectionSource: u.source,
                  url: u.url,
                });
      }
      function eg(e) {
        let {
          action: r,
          failure: t,
          failureActionsActive: o,
          historyPreview: n,
          previewFailures: i,
          title: s,
        } = e;
        return (0, a.jsxs)("div", {
          className: "relative h-full w-full",
          "data-testid":
            "typeMismatch" === t.reason
              ? "image-batch-resource-type-mismatch"
              : "image-batch-resource-failed",
          children: [
            (function (e, r, t, o) {
              if (
                "input_text_copyright" !== e.failureReason ||
                !(null == r ? void 0 : r.resource)
              )
                return;
              let n = (0, J.xw)(r.resource.urls);
              if ("selected" === n.status)
                return (0, a.jsx)(em, {
                  alt: (0, g.G5d)({ title: o, name: r.resource.name }),
                  previewFailures: t,
                  resourceId: r.resourceId,
                  selectionSource: n.source,
                  url: n.url,
                });
            })(t, n, i, s),
            (0, a.jsx)(q.S, {
              action: r,
              announce: o,
              announcement: (0, g.Rnq)({ title: s, message: t.message }),
              message: t.message,
              selected: o,
              surfaceClassName: _.Pb,
              testId: "image-batch-resource-failure-message",
            }),
          ],
        });
      }
      function em(e) {
        let {
            alt: r,
            previewFailures: t,
            resourceId: o,
            selectionSource: n,
            url: i,
          } = e,
          s = (0, I.FY)().imagePreviews,
          l = t.failedUrls.has(i),
          u = (0, x.jF)(s, l ? void 0 : i),
          [c, v] = (0, d.useState)(),
          [p, g] = (0, d.useState)(),
          m = (0, d.useCallback)(
            (e) => {
              t.onUrlFailure({
                stage: e,
                url: i,
                resourceId: o,
                renderMode: "full",
                selectionSource: n,
                surface: "batch",
              });
            },
            [t, o, n, i],
          ),
          y = (0, d.useCallback)(
            (e) => {
              "failed" === s.getSnapshot(i).status
                ? m(e)
                : (v(i), g(void 0), s.recoverFromDisplayedFailure(i, e));
            },
            [s, m, i],
          );
        (0, d.useEffect)(() => {
          "failed" === u.status && p !== i && m(u.failureStage ?? "load");
        }, [u.failureStage, u.status, m, p, i]);
        let h = (0, d.useCallback)(() => g(i), [i]);
        return l
          ? (0, a.jsx)("div", {
              "aria-hidden": "true",
              className: "h-full w-full bg-octo-workbench-canvas",
              "data-canvas-content-evidence": "frame_estimate",
              "data-canvas-content-state": "media_error",
              "data-testid": "image-batch-tile-unavailable",
            })
          : c === i && "ready" !== u.status
            ? (0, a.jsx)(X.K, {})
            : (0, a.jsx)(
                X.o,
                { alt: r, resourceId: o, url: i, onDecoded: h, onFailure: y },
                i,
              );
      }
      var ey = t(61190),
        eh = t(84488),
        eb = t(21727),
        ef = t(22635),
        eI = t(13519);
      function ew(e) {
        let {
          localUploadTargetUrl: r,
          description: t,
          nodeId: a,
          onCandidateFailure: o,
          onReady: n,
          preview: i,
          previewAlreadyFailed: s,
          previewFailures: l,
          previewReady: d,
          renderMode: u,
          selected: c,
        } = e;
        if (void 0 === i || s || !d) return;
        let { resourceId: v } = i,
          { source: p, url: g } = i.decision;
        return {
          localUploadTargetUrl: r,
          failureContext: {
            renderMode: u,
            resourceId: v,
            selectionSource: p,
            url: g,
          },
          identity: { renderRevision: 0, resourceId: v, url: g },
          presentation: {
            alt: t ?? "",
            description: t,
            descriptionId: void 0 === t ? void 0 : (0, b.k)(a),
            fit: "cover",
            selected: c,
            testId: `image-node-${u}`,
          },
          onCandidateFailure: o,
          onDisplayedFailure: (e) =>
            l.onUrlFailure({ ...e, stage: "load", surface: "primary" }),
          onReady: n,
        };
      }
      function ex(e, r, t) {
        let a = (0, I.FY)(),
          o = null == e ? void 0 : e.decision.url,
          n = void 0 !== o && r.failedUrls.has(o),
          i = (0, x.jF)(a.imagePreviews, n ? void 0 : o);
        return (
          (0, d.useEffect)(() => {
            "failed" === i.status &&
              void 0 !== e &&
              r.onUrlFailure({
                stage: i.failureStage ?? "load",
                url: e.decision.url,
                resourceId: e.resourceId,
                renderMode: t,
                selectionSource: e.decision.source,
                surface: "primary",
              });
          }, [e, r, i.failureStage, i.status, t]),
          i
        );
      }
      function eR(e) {
        let r = (0, I.FY)();
        return (0, d.useCallback)(
          (t) => r.releaseLocalUploadImagePreview(e, t.resourceId),
          [r, e],
        );
      }
      function eC(e) {
        let r = (0, I.FY)(),
          [t, o] = (0, d.useState)(() =>
            r.getLocalUploadImagePreviewResourceId(e.nodeId),
          ),
          n = (0, x.cA)(t ? [t] : [])[0],
          { onStatusChange: i } = e,
          [s, l] = (0, d.useState)("pending"),
          u = (0, d.useCallback)(
            (e) => {
              (l(e), i(e));
            },
            [i],
          ),
          c = (0, ef.CQ)(e.renderMode),
          v = eR(e.nodeId),
          { resourceId: p } = e,
          g = (0, d.useCallback)(
            (e) => {
              (v(e), e.resourceId === p && o(void 0));
            },
            [v, p],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(E.EY, {
              enabled: !0,
              clearDisplayed: !e.resourceId,
              unframed: !0,
              children:
                "full" === c
                  ? (0, a.jsx)(eS, { ...e, onReady: g, onStatusChange: u })
                  : (0, a.jsx)(eM, {
                      ...e,
                      renderMode: c,
                      onReady: g,
                      onStatusChange: u,
                    }),
            }),
            n
              ? (0, a.jsx)(eI.h, {
                  resource: n,
                  title: "",
                  failed: "unavailable" === s,
                  renderMode: c,
                })
              : null,
          ],
        });
      }
      function eS(e) {
        let r = (0, B.W)(e.nodeId, e.resourceId, e.resourceBatches),
          t = e.resource,
          o =
            (null == t ? void 0 : t.type) === y._x.image &&
            t.status === y.ao.success
              ? (0, J.U3)(t.urls, e.previewTier)
              : void 0;
        if (
          ((0, E._M)((null == o ? void 0 : o.status) === "selected"),
          (null == o ? void 0 : o.status) !== "selected" || !t)
        )
          return (0, a.jsx)(ej, {
            pending: (null == t ? void 0 : t.status) === y.ao.running,
            onStatusChange: e.onStatusChange,
          });
        let n = (0, J.Ho)(t.urls);
        return (0, a.jsx)(eB, {
          resourceId: t.resource_id,
          candidates: (0, J.qq)(t.urls, e.previewTier),
          fallbackUrl: "selected" === n.status ? n.url : o.url,
          fallbackSelectionSource:
            "selected" === n.status ? n.source : o.source,
          previewFailures: r,
          previewUpgradeEnabled: e.previewUpgradeEnabled,
          onReady: e.onReady,
          onStatusChange: e.onStatusChange,
        });
      }
      function eB(e) {
        let { onStatusChange: r, ...t } = e,
          { previewFailed: o, hasDisplayedPreview: n } = (0, K.b)({
            ...t,
            presentation: {
              alt: "",
              fit: "cover",
              selected: !1,
              testId: "storyboard-image-preview",
            },
          });
        return (
          ek(n ? "ready" : o ? "unavailable" : "pending", r),
          o && !n ? (0, a.jsx)(ej, {}) : null
        );
      }
      function eM(e) {
        let r = (0, B.W)(e.nodeId, e.resourceId, e.resourceBatches),
          t = e.resource,
          o = (0, d.useMemo)(() => {
            if (
              (null == t ? void 0 : t.type) !== y._x.image ||
              t.status !== y.ao.success
            )
              return;
            let e = (0, J.Ho)(t.urls);
            return "selected" === e.status
              ? { decision: e, resourceId: t.resource_id }
              : void 0;
          }, [t]);
        (0, E._M)(void 0 !== o);
        let n = ex(o, r, e.renderMode),
          i = (0, d.useCallback)(
            (t) => {
              o &&
                r.onUrlFailure({
                  stage: t,
                  url: o.decision.url,
                  resourceId: o.resourceId,
                  renderMode: e.renderMode,
                  selectionSource: o.decision.source,
                  surface: "primary",
                });
            },
            [r, o, e.renderMode],
          ),
          s = (0, d.useMemo)(
            () =>
              ew({
                nodeId: e.nodeId,
                selected: !1,
                renderMode: e.renderMode,
                preview: o,
                previewAlreadyFailed:
                  void 0 !== o && r.failedUrls.has(o.decision.url),
                previewReady: "ready" === n.status,
                previewFailures: r,
                onCandidateFailure: i,
                onReady: e.onReady,
              }),
            [e.nodeId, e.renderMode, e.onReady, o, r, n.status, i],
          ),
          l = (0, E.I5)(s, e.resourceId),
          u =
            (null == t ? void 0 : t.status) === y.ao.running ||
            (void 0 !== o &&
              "failed" !== n.status &&
              !r.failedUrls.has(o.decision.url));
        return (ek(
          l.hasDisplayedPreview ? "ready" : u ? "pending" : "unavailable",
          e.onStatusChange,
        ),
        l.hasDisplayedPreview || s)
          ? null
          : (0, a.jsx)(ej, { pending: u });
      }
      function ek(e, r) {
        (0, d.useEffect)(() => {
          null == r || r(e);
        }, [e, r]);
      }
      function ej(e) {
        let { pending: r = !1, onStatusChange: t } = e;
        return (
          ek(r ? "pending" : "unavailable", t),
          (0, a.jsx)("span", {
            className: "text-dreamina-cn-12 text-dreamina-text-secondary",
            children: r ? (0, m.gs)() : (0, m.RD)(),
          })
        );
      }
      var eP = t(51064);
      let eA = { ...(0, f.kj)(), transformOrigin: "left bottom" },
        eL = { boxShadow: (0, f.Am)("inset", 1) },
        eF = (0, d.memo)(function (e) {
          var r, t, o;
          let n = e.data.storyboardCell;
          if (!n) throw Error("Storyboard image cell metadata is required");
          let i = (0, ey.W)(n.index, n.columns, n.rows),
            l = (0, I.FY)(),
            { writeChromeVisible: u, directDownloadVisible: c } = (0, w.A1)(),
            v = (0, x.nk)(e.data),
            { resources: p } = (0, x.xO)(v ? [v] : []),
            g = p[0],
            [f, S] = (0, d.useState)(),
            [B, k] = (0, d.useState)(!1),
            [j, P] = (0, d.useState)(!1),
            [A, L] = (0, d.useState)(),
            F = (0, d.useRef)(null);
          (0, d.useLayoutEffect)(() => {
            F.current &&
              (n.active ? (0, eh.Wo)(F.current) : (F.current.tabIndex = -1));
          }, [n.active, n.index]);
          let [D, T] = (0, d.useState)(!1),
            E = (0, d.useRef)(void 0),
            U = (0, d.useRef)(!1),
            [H, q] = (0, d.useState)();
          ((0, d.useEffect)(() => {
            let r = F.current;
            return () => {
              var t;
              null == (t = E.current) || t.release();
              let a = (0, eP.KP)();
              r &&
                (null == a ? void 0 : a.sourceId) === e.id &&
                a.ownsCell(r) &&
                a.cancel();
            };
          }, [e.id]),
            (0, d.useLayoutEffect)(() => {
              let r = (0, eP.KP)();
              F.current &&
                (null == r ? void 0 : r.sourceId) === e.id &&
                r.ownsCell(F.current) &&
                r.groupId !== n.groupId &&
                !r.dropClaimed() &&
                r.cancel();
            }, [n.groupId, e.id]),
            (0, d.useLayoutEffect)(() => {
              H && (H.finish(), q(void 0));
            }, [H]));
          let [_, N] = (0, d.useState)(),
            z = (0, d.useCallback)(
              (e) => {
                N((r) =>
                  (null == r ? void 0 : r.resourceId) === v &&
                  (null == r ? void 0 : r.status) === e
                    ? r
                    : { resourceId: v, status: e },
                );
              },
              [v],
            ),
            W =
              u &&
              (null == (r = l.featuresApi)
                ? void 0
                : r.canvas.actions.setStoryboardGroup.getState(n.groupId)
                    .available) === !0,
            $ =
              (null == _ ? void 0 : _.resourceId) === v
                ? null == _
                  ? void 0
                  : _.status
                : "pending",
            O =
              (null == g ? void 0 : g.type) === y._x.image &&
              g.status === y.ao.success
                ? (0, C.v)(null == (t = g.urls) ? void 0 : t.download_url)
                : void 0,
            V =
              (0, M.Zl)({
                batchResultCounts: e.data.resourceBatches.map(
                  (e) => e.resourceIds.length,
                ),
              }) > 1,
            Y = () => {
              var e;
              let r = null == (e = l.featuresApi) ? void 0 : e.canvas;
              if (!r) return;
              let t = r.getObjectSnapshot(n.groupId);
              if (
                (null == t ? void 0 : t.type) !== "group" ||
                !t.data.storyboard
              )
                return;
              let a = r.getNodeIds().flatMap((e) => {
                let t = r.getObjectSnapshot(e);
                return t ? [t] : [];
              });
              return {
                api: r,
                storyboard: t.data.storyboard,
                ordered: (0, h.II)(t, a).map((e) => e.id),
              };
            },
            K = async (e, r, t) => {
              var a;
              let o = Y();
              if (
                !o ||
                !o.api.actions.setStoryboardGroup.getState(n.groupId).available
              )
                return !1;
              let i = (0, eP.vE)(o.ordered, e, r);
              if (!i) return !1;
              let s = await o.api.actions.setStoryboardGroup.execute(
                n.groupId,
                { ...o.storyboard, orderedNodeIds: i },
                "user",
              );
              return (
                S(s.ok ? void 0 : (0, m.aH)()),
                s.ok &&
                  t &&
                  F.current ===
                    (null == (a = F.current)
                      ? void 0
                      : a.ownerDocument.activeElement) &&
                  L(
                    (0, m.bk)(
                      i.indexOf(e) + 1,
                      o.storyboard.columns * o.storyboard.rows,
                    ),
                  ),
                s.ok
              );
            },
            G = function (e, r) {
              let t =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                a = arguments.length > 3 ? arguments[3] : void 0;
              K(e, r, t)
                .then((e) => {
                  var r;
                  a &&
                    (e &&
                    (null == (r = F.current) ? void 0 : r.isConnected) &&
                    a.ownsCell(F.current)
                      ? q(a)
                      : a.cancel());
                })
                .catch(() => {
                  (null == a || a.cancel(), S((0, m.aH)()));
                });
            };
          return (0, a.jsxs)("div", {
            className: `relative h-full w-full bg-transparent ${i}`,
            "data-testid": "storyboard-image-cell",
            onPointerEnter: () => k(!0),
            onPointerLeave: () => k(!1),
            onFocusCapture: () => P(!0),
            onBlurCapture: (e) => {
              e.currentTarget.contains(e.relatedTarget) || (P(!1), L(void 0));
            },
            children: [
              (0, a.jsx)(R.BF, {
                nodeId: e.id,
                title: e.data.title,
                selected: !1,
                connectable: !1,
                handlesInteractive: !1,
                handlesVisible: !1,
                chromeSuppressed: !0,
                tagControlsSuppressed: !0,
              }),
              (0, a.jsx)(eD, {
                actionsVisible: !!((B || j) && !D),
                active: n.active,
                cornerClassName: i,
                collapsedContent: (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)(s.$nd, {
                      ref: F,
                      variant: "text",
                      size: "unframed",
                      className: `group/storyboard-cell nodrag nopan relative h-full w-full overflow-hidden ${i}`,
                      "aria-label": (0, m.q8)(n.index + 1, e.data.title),
                      "aria-describedby": (0, b.k)(e.id),
                      "aria-keyshortcuts": W
                        ? "Shift+ArrowLeft Shift+ArrowRight"
                        : void 0,
                      tabIndex: n.active && 0 === n.index ? 0 : -1,
                      "data-storyboard-group-id": n.groupId,
                      "data-storyboard-node-id": e.id,
                      "data-storyboard-index": n.index,
                      "data-storyboard-cell-active": n.active || void 0,
                      onFocus: (e) => (0, eh.Wo)(e.currentTarget, !0),
                      draggable: W,
                      onClick: (e) => {
                        (e.stopPropagation(),
                          l.selectionActions.replaceSelection(
                            [n.groupId],
                            "user",
                          ));
                      },
                      onMouseDown: (e) => e.stopPropagation(),
                      onPointerDown: (e) => e.stopPropagation(),
                      onDragStart: (r) => {
                        var t, a;
                        (
                          null == (t = l.featuresApi)
                            ? void 0
                            : t.canvas.actions.setStoryboardGroup.getState(
                                n.groupId,
                              ).available
                        )
                          ? (r.stopPropagation(),
                            T(!0),
                            k(!1),
                            (U.current = !1),
                            null == (a = E.current) || a.release(),
                            (E.current = (0, eb.r)(r.currentTarget, r)),
                            (0, eP.LG)(r.currentTarget, n.groupId, e.id),
                            r.dataTransfer.setData(eb.I, e.id),
                            (r.dataTransfer.effectAllowed = "move"),
                            l.selectionActions.replaceSelection(
                              [n.groupId],
                              "user",
                            ))
                          : r.preventDefault();
                      },
                      onDragEnd: (r) => {
                        (T(!1), k(!1));
                        let t = (0, eP.KP)(),
                          a =
                            (null == t ? void 0 : t.sourceId) === e.id &&
                            t.ownsCell(r.currentTarget)
                              ? t
                              : void 0,
                          o = E.current,
                          i = r.currentTarget.ownerDocument.defaultView;
                        if (((E.current = void 0), !a)) {
                          (null == o || o.release(), (U.current = !1));
                          return;
                        }
                        if (null == a ? void 0 : a.dropClaimed())
                          null == o || o.release();
                        else if (U.current) null == o || o.release();
                        else {
                          let t = ((r, t) => {
                            if (
                              (0 === r && 0 === t) ||
                              !l.isScreenPositionInCanvasViewport({
                                x: r,
                                y: t,
                              })
                            )
                              return;
                            let a = Y();
                            if (
                              !a ||
                              !a.api.actions.setStoryboardGroup.getState(
                                n.groupId,
                              ).available
                            )
                              return;
                            let o = document.querySelector(
                                `.react-flow__node[data-id="${CSS.escape(n.groupId)}"]`,
                              ),
                              i =
                                null == o ? void 0 : o.getBoundingClientRect();
                            if (
                              i &&
                              r >= i.left &&
                              r < i.right &&
                              t >= i.top &&
                              t < i.bottom
                            )
                              return;
                            for (let e of document.querySelectorAll(
                              '[data-canvas-storyboard-drop-surface="true"]',
                            )) {
                              var s;
                              if (
                                (null ==
                                (s = e.closest(".react-flow__node[data-id]"))
                                  ? void 0
                                  : s.dataset.id) === n.groupId
                              )
                                continue;
                              let a = e.getBoundingClientRect();
                              if (
                                r >= a.left &&
                                r < a.right &&
                                t >= a.top &&
                                t < a.bottom
                              )
                                return;
                            }
                            let d = l.screenToCanvasPosition({ x: r, y: t }),
                              u = a.ordered.filter((r) => r !== e.id);
                            if (u.length !== a.ordered.length)
                              return a.api.actions.setStoryboardGroup
                                .execute(
                                  n.groupId,
                                  { ...a.storyboard, orderedNodeIds: u },
                                  "user",
                                  {
                                    nodeId: e.id,
                                    x: d.x - n.originalLayout.width / 2,
                                    y: d.y - n.originalLayout.height / 2,
                                  },
                                )
                                .then(
                                  (e) => (S(e.ok ? void 0 : (0, m.aH)()), e.ok),
                                );
                          })(r.clientX, r.clientY);
                          t
                            ? (null == a || a.beginRelease(),
                              t
                                .then((e) => {
                                  e
                                    ? (null == a || a.finishRelease(),
                                      (function (e, r) {
                                        if (!e) return;
                                        if (!r) return e.release();
                                        let t = !1,
                                          a = 0,
                                          o = () => {
                                            t ||
                                              ((t = !0),
                                              r.clearTimeout(a),
                                              e.release());
                                          };
                                        ((a = r.setTimeout(o, 500)),
                                          r.requestAnimationFrame(() =>
                                            r.requestAnimationFrame(o),
                                          ));
                                      })(o, i))
                                    : (null == a || a.cancel(),
                                      null == o || o.release());
                                })
                                .catch(() => {
                                  (null == a || a.cancel(),
                                    null == o || o.release(),
                                    S((0, m.aH)()));
                                }))
                            : (null == a || a.cancel(),
                              null == o || o.release());
                        }
                        U.current = !1;
                      },
                      onDragOver: (r) => {
                        var t, a, o, i;
                        r.dataTransfer.types.includes(eb.I) &&
                          (null == (t = (0, eP.KP)()) ? void 0 : t.groupId) ===
                            n.groupId &&
                          (null == (a = (0, eP.KP)())
                            ? void 0
                            : a.ownsCell(r.currentTarget)) &&
                          (null == (o = l.featuresApi)
                            ? void 0
                            : o.canvas.actions.setStoryboardGroup.getState(
                                n.groupId,
                              ).available) &&
                          (r.preventDefault(),
                          r.stopPropagation(),
                          (r.dataTransfer.dropEffect = "move"),
                          null == (i = (0, eP.KP)()) || i.preview(e.id));
                      },
                      onDrop: (r) => {
                        let t = (0, eP.KP)(),
                          a = r.dataTransfer.getData(eb.I);
                        a &&
                          (null == t ? void 0 : t.groupId) === n.groupId &&
                          t.ownsCell(r.currentTarget) &&
                          (r.preventDefault(),
                          r.stopPropagation(),
                          (U.current = !0),
                          t.claimReorder(),
                          G(a, e.id, !1, t));
                      },
                      onKeyDown: (r) => {
                        let t = (0, eh.eu)(r.key, n.columns);
                        if (0 === t) return;
                        if (
                          (r.preventDefault(),
                          r.stopPropagation(),
                          !(
                            r.shiftKey &&
                            ("ArrowLeft" === r.key || "ArrowRight" === r.key)
                          ))
                        )
                          return void (0, eh.Yx)(r.currentTarget, n.index + t);
                        let a = Y();
                        if (!a) return;
                        let o = a.ordered.indexOf(e.id),
                          i = a.ordered[o + ("ArrowRight" === r.key ? 1 : -1)];
                        i && G(e.id, i, !0);
                      },
                      children: [
                        (0, a.jsx)("div", {
                          "data-storyboard-drag-visual": "",
                          className: `pointer-events-none absolute inset-0 overflow-hidden ${i}`,
                          children: (0, a.jsx)(eC, {
                            nodeId: e.id,
                            resource: g,
                            resourceId: v,
                            resourceBatches: e.data.resourceBatches,
                            renderMode: e.data.renderMode,
                            previewTier:
                              (null == (o = e.data.imagePreviewQuality)
                                ? void 0
                                : o.normalTier) ?? 720,
                            previewUpgradeEnabled:
                              !0 === e.data.mediaPreviewInViewport,
                            onStatusChange: z,
                          }),
                        }),
                        (0, a.jsx)("span", {
                          "aria-hidden": "true",
                          className: `pointer-events-none absolute inset-0 z-canvas-node-interaction-stroke opacity-canvas-storyboard-drop-outline-hidden text-dreamina-text-primary ${i}`,
                          "data-storyboard-drop-outline": "",
                          style: eL,
                        }),
                        n.showNumbers
                          ? (0, a.jsx)("span", {
                              style: eA,
                              className:
                                "pointer-events-none absolute bottom-2 left-2 font-dreamina-number text-dreamina-number-12 text-dreamina-on-media-text-primary",
                              children: String(n.index + 1).padStart(2, "0"),
                            })
                          : null,
                      ],
                    }),
                    (B || j) && !D && v
                      ? (0, a.jsx)(eT, {
                          directDownloadVisible: c,
                          historyAvailable: V,
                          nodeId: e.id,
                          resourceId: v,
                          downloadUrl: O,
                          title: e.data.title,
                          writeChromeVisible: u,
                        })
                      : null,
                  ],
                }),
                logicalHeight: e.height ?? 0,
                logicalWidth: e.width ?? 0,
                groupId: n.groupId,
                historyAvailable: V,
                nodeId: e.id,
                primaryResourceId: v,
                resourceBatches: e.data.resourceBatches,
                title: e.data.title,
              }),
              (0, a.jsxs)("span", {
                className: "sr-only",
                id: (0, b.k)(e.id),
                children: [
                  (0, a.jsxs)("span", {
                    role: j ? "status" : void 0,
                    children: [
                      A
                        ? (0, a.jsxs)(a.Fragment, { children: [A, " "] })
                        : null,
                      "ready" === $
                        ? (0, m.KD)()
                        : "unavailable" === $
                          ? (0, m.RD)()
                          : (0, m.gs)(),
                    ],
                  }),
                  " ",
                  W ? (0, m.qA)() : (0, m.r3)(),
                ],
              }),
              f
                ? (0, a.jsx)("span", {
                    role: "alert",
                    className:
                      "absolute inset-x-0 bottom-0 bg-dreamina-bg-menu text-dreamina-cn-12 text-dreamina-functional-error",
                    children: f,
                  })
                : null,
            ],
          });
        });
      function eD(e) {
        let r = (0, d.useMemo)(
            () =>
              (0, A.Pc)({ resourceBatches: e.resourceBatches, resources: [] }),
            [e.resourceBatches],
          ),
          t = (0, d.useMemo)(
            () => (e.historyAvailable ? r.map((e) => (0, A.lv)(e)) : []),
            [e.historyAvailable, r],
          ),
          o = (0, M.cl)({ availableKeys: t }),
          n = (0, I.FY)(),
          i = (0, d.useMemo)(
            () => [e.groupId, e.nodeId],
            [e.groupId, e.nodeId],
          ),
          s = (0, P.h)({
            active: e.active,
            browsing: o,
            editor: n,
            interactionNodeIds: i,
            nodeId: e.groupId,
            restoreSelectionAfterCollapse: !0,
            resultsAvailable: t.length > 0,
          }),
          l = (0, d.useMemo)(
            () =>
              e.active || o.expanded
                ? Array.from(
                    new Set([
                      ...(e.primaryResourceId ? [e.primaryResourceId] : []),
                      ...e.resourceBatches.flatMap((e) => e.resourceIds),
                    ]),
                  )
                : e.primaryResourceId
                  ? [e.primaryResourceId]
                  : [],
            [o.expanded, e.active, e.primaryResourceId, e.resourceBatches],
          ),
          { resources: u } = (0, x.xO)(l),
          c = (0, d.useMemo)(
            () =>
              (0, A.Pc)({ resourceBatches: e.resourceBatches, resources: u }),
            [e.resourceBatches, u],
          ),
          v = (0, A.Sp)({
            batches: c,
            preferredBatchKey: o.selectedKey,
            primaryResourceId: e.primaryResourceId,
          }),
          p = c[v] ?? c[0],
          g = (0, M.Zl)({
            batchResultCounts: r.map((e) => e.resources.length),
          }),
          m = (0, d.useId)(),
          y = (0, B.W)(e.nodeId, e.primaryResourceId, e.resourceBatches),
          h = (0, d.useCallback)(
            async (r) => {
              var t;
              let a =
                null == (t = n.featuresApi)
                  ? void 0
                  : t.canvas.actions.selectResourceCandidate;
              return (
                !!(null == a ? void 0 : a.getState().available) &&
                (
                  await a.execute({
                    nodeId: e.nodeId,
                    nodeType: "image",
                    resourceId: r,
                  })
                ).ok
              );
            },
            [n, e.nodeId],
          );
        return p && e.historyAvailable && !(g <= 1)
          ? (0, a.jsx)(el, {
              batch: p,
              batches: c,
              collapsedContent: e.collapsedContent,
              collapsedSurfaceClassName: `relative flex h-full w-full items-center justify-center ${e.cornerClassName}`,
              collectionCount: g,
              controlsId: m,
              expanded: o.expanded,
              logicalHeight: e.logicalHeight,
              logicalWidth: e.logicalWidth,
              motion: o.motion,
              primaryResourceId: e.primaryResourceId,
              previewFailures: y,
              showToggle: e.actionsVisible,
              title: e.title,
              toggleTabbable: e.actionsVisible,
              onSelectResource: h,
              onToggleExpansion: s.toggle,
            })
          : e.collapsedContent;
      }
      function eT(e) {
        let r = (0, k.U)("image", e.nodeId, e.writeChromeVisible),
          t = (0, j.t)(
            "image",
            !1 !== e.directDownloadVisible && void 0 !== e.downloadUrl,
            e.nodeId,
          ),
          o = (0, S.Ps)(
            (0, S.zV)({
              copyDisabledReason: r.disabledReason,
              copyLabel: (0, g.U3L)(),
              onCopyResource: r.onCopyResource
                ? () => {
                    var t;
                    return null == (t = r.onCopyResource)
                      ? void 0
                      : t.call(r, e.resourceId);
                  }
                : void 0,
              ...t,
              resourceId: e.resourceId,
              downloadUrl: e.downloadUrl,
              resultLabel: e.title,
            }),
            e.writeChromeVisible,
            e.directDownloadVisible,
          );
        return o
          ? (0, a.jsx)("span", {
              className: `nodrag nopan absolute top-2 z-canvas-media-result-action-chrome ${S.h9} ${e.historyAvailable ? "right-16" : "right-2"}`,
              "data-testid": "storyboard-resource-actions",
              children: (0, a.jsx)(S.wi, { actions: o }),
            })
          : null;
      }
      var eE = t(1279),
        eU = t(85871),
        eH = t(37046),
        eq = t(59078),
        e_ = t(31327),
        eN = t(39243),
        ez = t(72311),
        eW = t(30531),
        e$ = t(49080),
        eO = t(18650),
        eV = t(12760),
        eY = t(86072),
        eK = t(7091),
        eG = t(20251),
        eX = t(51544);
      function eQ(e, r, t) {
        return {
          execute: () => {
            if (!e || !r)
              return {
                reason: "imageLayerBoard.historyUnavailable",
                status: "noop",
              };
            let t = r.execute();
            return t.ok
              ? { status: "executed" }
              : "historyUnavailable" === t.reason
                ? { reason: `canvas.${t.reason}`, status: "noop" }
                : "commandFailed" === t.reason
                  ? { reason: `canvas.${t.reason}`, status: "failed" }
                  : { reason: `canvas.${t.reason}`, status: "blocked" };
          },
          getState: () => {
            if (!e || !r)
              return {
                available: !1,
                reason: "imageLayerBoard.historyUnavailable",
                result: "noop",
              };
            let t = r.getState();
            return t.available
              ? t
              : {
                  available: !1,
                  reason: `canvas.${t.reason}`,
                  result:
                    "historyUnavailable" === t.reason ? "noop" : "blocked",
                };
          },
          subscribe: t ?? (() => () => void 0),
        };
      }
      var eJ = t(29716);
      let eZ = { scale: `var(${f.r_}, 1)`, transformOrigin: "left bottom" },
        e0 = (0, d.memo)(function (e) {
          let {
              api: r,
              layerBoard: t,
              nodeId: o,
              resolveLayerImage: n,
              resolveLayerPendingOverlay: i,
            } = e,
            s = null == r ? void 0 : r.canvas,
            l = null == s ? void 0 : s.imageLayerBoard,
            u = null == s ? void 0 : s.actions.updateImageLayerBoard,
            c = (0, w.px)(),
            v = (0, d.useSyncExternalStore)(
              (null == s ? void 0 : s.actions.subscribe) ?? e2,
              () => (null == u ? void 0 : u.getState().available) === !0,
              () => !1,
            ),
            p = (0, d.useSyncExternalStore)(
              (null == l ? void 0 : l.subscribe) ?? e2,
              () => (null == l ? void 0 : l.getSelection(o)),
              () => void 0,
            ),
            g = null == s ? void 0 : s.gestures,
            m = null == s ? void 0 : s.actions.copy,
            y = (0, d.useMemo)(
              () =>
                s && l && u && m
                  ? {
                      canvas: {
                        actions: { copy: m, updateImageLayerBoard: u },
                        getObjectSnapshot: (e) => s.getObjectSnapshot(e),
                        imageLayerBoard: l,
                        ...(g ? { gestures: g } : {}),
                      },
                    }
                  : void 0,
              [u, s, m, g, l],
            ),
            h = (0, d.useMemo)(
              () =>
                s
                  ? {
                      redo: (0, eG.v)(s.actions.redo, g, o, "redo"),
                      undo: (0, eG.v)(s.actions.undo, g, o, "undo"),
                    }
                  : void 0,
              [s, g, o],
            ),
            b = null == s ? void 0 : s.actions.detachImageLayer,
            f = null == s ? void 0 : s.screenToCanvasPosition,
            I = (0, d.useMemo)(
              () =>
                b && f && s
                  ? {
                      action: b,
                      screenToCanvasPosition: (e) =>
                        s.screenToCanvasPosition(e),
                    }
                  : void 0,
              [s, b, f],
            );
          return c && v && y && l && s
            ? (0, a.jsx)(e1, {
                api: y,
                detach: I,
                history: h,
                layerBoard: t,
                nodeId: o,
                resolveLayerImage: n,
                resolveLayerPendingOverlay: i,
                selection: p,
                session: l,
                subscribeHistory: s.actions.subscribe,
              })
            : null;
        });
      function e1(e) {
        var r, t;
        let o,
          n,
          {
            api: i,
            detach: l,
            history: u,
            layerBoard: c,
            nodeId: v,
            resolveLayerImage: p,
            resolveLayerPendingOverlay: g,
            selection: m,
            session: y,
            subscribeHistory: h,
          } = e,
          b = (0, eN.QQ)(),
          [f, I] = (0, d.useState)(null),
          w = (0, d.useRef)(null),
          x = (0, d.useRef)(null),
          R = (0, d.useRef)(void 0),
          C = (0, d.useRef)(() => void 0),
          S = (0, d.useRef)((e) => {
            "Escape" === e.key &&
              R.current &&
              (e.preventDefault(), e.stopImmediatePropagation(), C.current());
          }),
          B = (0, d.useRef)(c);
        B.current = c;
        let M = (0, d.useRef)(!0),
          k = (null == m ? void 0 : m.kind) === "layer" ? m.layerId : void 0,
          j = (null == m ? void 0 : m.kind) === "base",
          P = c.layers.findIndex((e) => e.id === k),
          A = P >= 0 ? c.layers[P] : void 0,
          {
            clearHoverOutline: L,
            hitLayer: F,
            onHoverPointerMove: D,
            outlineRef: T,
            surfaceRef: E,
          } = (0, eK.Cl)({
            excludedLayerId: k,
            isSuspended: () => void 0 !== R.current,
            layerBoard: c,
            resolveLayerImage: p,
          });
        (0, d.useEffect)(() => {
          M.current = !0;
          let e = S.current,
            r = E.current,
            t = w.current;
          return () => {
            M.current = !1;
            let a = R.current;
            if (a) {
              var o;
              (void 0 !== a.frame && cancelAnimationFrame(a.frame),
                null == r || r.classList.remove("nodrag", "nopan"),
                (null == r || null == (o = r.hasPointerCapture)
                  ? void 0
                  : o.call(r, a.pointerId)) &&
                  r.releasePointerCapture(a.pointerId),
                e8(a, !1, r, t),
                y.endDrag(),
                e6(B.current, p, g, t, a.layer.id),
                e3(null, a, !0));
            }
            ((R.current = void 0),
              window.removeEventListener("keydown", e, !0));
          };
        }, [p, g, y, E]);
        let U = (0, d.useCallback)(
            (e) => {
              ((E.current = e), I(e));
            },
            [E],
          ),
          H = (0, d.useCallback)((e, r, t) => {
            let a = B.current;
            return {
              x: t.width > 0 ? ((e - t.left) / t.width) * a.width : 0,
              y: t.height > 0 ? ((r - t.top) / t.height) * a.height : 0,
            };
          }, []),
          q = (0, d.useCallback)(
            (e) => {
              !e.ok &&
                M.current &&
                (0, eW.N)(b, {
                  durationMs: 4e3,
                  message: (0, eO.T0)(e),
                  status: "warning",
                });
            },
            [b],
          ),
          _ = (0, d.useCallback)(
            async (e, r) => {
              let t = await i.canvas.actions.updateImageLayerBoard.execute(
                v,
                e,
              );
              if (!t.ok) {
                (e6(B.current, p, g, w.current, k), q(t));
                return;
              }
              (0, eG.C)(i.canvas.gestures, v, r);
            },
            [i, v, q, p, g, k],
          ),
          N = (0, d.useCallback)(
            async (e, r) => {
              let t = e.layer.id;
              if (!l) return void e3(x.current, e, !0);
              let a = await l.action.execute({
                boardNodeId: v,
                layerId: t,
                placement: r,
              });
              if (!a.ok) {
                (e6(B.current, p, g, w.current, t), e3(x.current, e, !0), q(a));
                return;
              }
              e3(x.current, e, !1);
            },
            [l, v, q, p, g],
          ),
          z = (0, d.useCallback)(async () => {
            k && q(await (0, eO.XI)(i, v, k, "delete"));
          }, [i, v, q, k]),
          W = (0, d.useCallback)(() => y.clear(), [y]),
          $ = void 0 !== A || j;
        ((0, e_.C2)($, W),
          (function (e) {
            let {
                commands: r,
                contextElement: t,
                deleteBlockedReason: a,
                enabled: o,
                history: n,
                onDeleteSelection: i,
                subscribeHistory: s,
              } = e,
              l = (0, d.useMemo)(() => {
                var e, r, t;
                return (
                  (e = o),
                  (r = a),
                  (t = i),
                  {
                    execute: async () =>
                      e
                        ? void 0 !== r
                          ? {
                              message: r,
                              reason: "imageLayerBoard.baseLocked",
                              status: "blocked",
                            }
                          : (await t(), { status: "executed" })
                        : {
                            reason: "imageLayerBoard.noSelection",
                            status: "noop",
                          },
                    getState: () =>
                      e
                        ? void 0 !== r
                          ? {
                              available: !1,
                              message: r,
                              reason: "imageLayerBoard.baseLocked",
                              result: "blocked",
                            }
                          : { available: !0 }
                        : {
                            available: !1,
                            reason: "imageLayerBoard.noSelection",
                            result: "noop",
                          },
                    subscribe: () => () => void 0,
                  }
                );
              }, [a, o, i]),
              u = (0, d.useMemo)(
                () => eQ(o, null == n ? void 0 : n.undo, s),
                [o, null == n ? void 0 : n.undo, s],
              ),
              c = (0, d.useMemo)(
                () => eQ(o, null == n ? void 0 : n.redo, s),
                [o, null == n ? void 0 : n.redo, s],
              ),
              v = (0, d.useMemo)(() => {
                let e = (e) => {
                  var t, a;
                  let n;
                  return (
                    (t = o),
                    (a = null == r ? void 0 : r[e]),
                    {
                      execute: async () => {
                        let e = n();
                        return e.available
                          ? ((await (null == a ? void 0 : a.run())) ?? {
                              status: "executed",
                            })
                          : {
                              reason: e.reason,
                              status: e.result,
                              ...(e.message ? { message: e.message } : {}),
                            };
                      },
                      getState: (n = () => {
                        if (!t || !a)
                          return {
                            available: !1,
                            reason: "imageLayerBoard.noSelection",
                            result: "noop",
                          };
                        let e = a.getBlockedReason();
                        return void 0 !== e
                          ? {
                              available: !1,
                              message: e,
                              reason: "imageLayerBoard.commandBlocked",
                              result: "blocked",
                            }
                          : { available: !0 };
                      }),
                      subscribe: () => () => void 0,
                    }
                  );
                };
                return {
                  bringToFront: e("imageLayerBoard.bringToFront"),
                  copyImage: e("imageLayerBoard.copyImage"),
                  duplicate: e("imageLayerBoard.duplicate"),
                  moveDown: e("imageLayerBoard.moveDown"),
                  moveUp: e("imageLayerBoard.moveUp"),
                  paste: e("imageLayerBoard.paste"),
                  sendToBack: e("imageLayerBoard.sendToBack"),
                };
              }, [r, o]);
            ((0, e_.SX)(t, { active: o, contextId: "imageLayerBoard" }),
              (0, e_.lu)("imageLayerBoard.deleteSelection", l),
              (0, e_.lu)("imageLayerBoard.copyImage", v.copyImage),
              (0, e_.lu)("imageLayerBoard.paste", v.paste),
              (0, e_.lu)("imageLayerBoard.duplicate", v.duplicate),
              (0, e_.lu)("imageLayerBoard.moveUp", v.moveUp),
              (0, e_.lu)("imageLayerBoard.moveDown", v.moveDown),
              (0, e_.lu)("imageLayerBoard.bringToFront", v.bringToFront),
              (0, e_.lu)("imageLayerBoard.sendToBack", v.sendToBack),
              (0, e_.lu)("imageLayerBoard.undo", u),
              (0, e_.lu)("imageLayerBoard.redo", c));
          })({
            commands: (0, d.useMemo)(
              () =>
                (function (e, r, t) {
                  let a = () => {
                      let r = e.canvas.actions.updateImageLayerBoard.getState();
                      return r.available
                        ? void 0
                        : (0, eO.T0)({ ok: !1, reason: r.reason });
                    },
                    o = () => (0, eX.mf)(e.canvas.getObjectSnapshot(r)),
                    n = {
                      "imageLayerBoard.copyImage": {
                        getBlockedReason: () => {
                          var e;
                          return (null == (e = t.getSelection(r))
                            ? void 0
                            : e.kind) === "base"
                            ? (0, eq.OX)()
                            : void 0;
                        },
                        run: async () => {
                          let a = t.getSelectedLayerId(r);
                          if (!a)
                            return {
                              reason: "imageLayerBoard.noSelection",
                              status: "noop",
                            };
                          let o = await (0, e$.fy)(e, r, a);
                          return o.ok
                            ? {
                                status: "executed",
                                ...(o.message ? { message: o.message } : {}),
                              }
                            : {
                                reason: `canvas.${o.reason}`,
                                status: "failed",
                                ...(o.message ? { message: o.message } : {}),
                              };
                        },
                      },
                      "imageLayerBoard.paste": {
                        getBlockedReason: () => {
                          let t = (0, e$.J5)(e, r);
                          return t.available
                            ? a()
                            : "layerLimit" === t.reason
                              ? (0, eO.VO)("layerLimit")
                              : (0, eq.hC)();
                        },
                        run: async () => e9(await (0, e$.Fx)(e, r)),
                      },
                    };
                  for (let [i, s] of e5)
                    n[i] = {
                      getBlockedReason: () => {
                        let e = o(),
                          n = t.getSelection(r);
                        if (!e || !n) return;
                        let i = (0, eO.zl)(e, n, s);
                        return i.available ? a() : (0, eO.VO)(i.reason);
                      },
                      run: async () => {
                        let a = t.getSelectedLayerId(r);
                        return a
                          ? e9(await (0, eO.XI)(e, r, a, s))
                          : {
                              reason: "imageLayerBoard.noSelection",
                              status: "noop",
                            };
                      },
                    };
                  return n;
                })(i, v, y),
              [i, v, y],
            ),
            contextElement: f,
            ...(j ? { deleteBlockedReason: (0, eq.OX)() } : {}),
            enabled: $,
            history: u,
            onDeleteSelection: z,
            subscribeHistory: h,
          }));
        let O = (0, d.useCallback)(
            (e, r, t, a) => {
              let o = E.current;
              if (!o || R.current) return;
              L();
              let n = e.surfaceRect,
                i = n
                  ? new DOMRect(n.x, n.y, n.width, n.height)
                  : o.getBoundingClientRect();
              ((R.current = {
                corner: a,
                detaching: !1,
                frame: void 0,
                ghostSource: void 0,
                nodeWorldRect:
                  "move" === t
                    ? (function (e, r) {
                        if (
                          !e ||
                          !(r.width > 0) ||
                          !(r.height > 0) ||
                          !e.action.getState().available
                        )
                          return;
                        let t = e.screenToCanvasPosition({
                            x: r.left,
                            y: r.top,
                          }),
                          a = e.screenToCanvasPosition({
                            x: r.right,
                            y: r.bottom,
                          }),
                          o = a.x - t.x,
                          n = a.y - t.y;
                        if (o > 0 && n > 0)
                          return { x: t.x, y: t.y, width: o, height: n };
                      })(l, i)
                    : void 0,
                kind: t,
                latestClient: { x: e.clientX, y: e.clientY },
                layer: r,
                moved: !1,
                pointerId: e.pointerId,
                preview: void 0,
                startClient: { x: e.clientX, y: e.clientY },
                startPoint: H(e.clientX, e.clientY, i),
                surfaceRect: i,
              }),
                window.addEventListener("keydown", S.current, !0),
                o.classList.add("nodrag", "nopan"),
                "function" == typeof o.setPointerCapture &&
                  o.setPointerCapture(e.pointerId),
                o.focus({ preventScroll: !0 }));
            },
            [L, l, E, H],
          ),
          V = (0, d.useCallback)(
            (e, r, t, a) => {
              (O(e, r, t, a), e.preventDefault());
            },
            [O],
          );
        (0, d.useLayoutEffect)(() => {
          var e;
          if (!f || !A) return;
          let r =
            null == (e = y.consumePointerHandoff) ? void 0 : e.call(y, v, A.id);
          r && O(r, A, "move");
        }, [v, A, y, O, f]);
        let Y = (0, d.useCallback)(() => {
            var e, r, t, a, o;
            let n,
              i = R.current;
            if (!i) return;
            i.frame = void 0;
            let s = Math.hypot(
              i.latestClient.x - i.startClient.x,
              i.latestClient.y - i.startClient.y,
            );
            if (!i.moved && s < 3) return;
            let d = H(i.latestClient.x, i.latestClient.y, i.surfaceRect),
              u = B.current,
              c =
                "move" === i.kind
                  ? (0, eV.ss)(u, i.layer.id, {
                      x: d.x - i.startPoint.x,
                      y: d.y - i.startPoint.y,
                    })
                  : i.corner
                    ? (0, eV.oQ)(u, i.layer.id, i.corner, d)
                    : void 0;
            if (!c) return;
            (e8(
              i,
              ((e = i),
              (r = l),
              "move" === e.kind &&
                !!e.nodeWorldRect &&
                !!r &&
                (0, eJ.IS)(
                  e.nodeWorldRect,
                  r.screenToCanvasPosition(e.latestClient),
                )),
              E.current,
              w.current,
            ),
              i.moved ||
                ((i.moved = !0),
                y.beginDrag(v, i.layer.id),
                "move" === i.kind &&
                  ((t = x.current),
                  (a = i),
                  (n =
                    (null == (o = p(i.layer.id)) ? void 0 : o.currentSrc) ||
                    (null == o ? void 0 : o.src)),
                  t &&
                    o &&
                    n &&
                    (null === o.crossOrigin
                      ? t.removeAttribute("crossorigin")
                      : (t.crossOrigin = o.crossOrigin),
                    (t.src = n),
                    (t.style.transform = o.style.transform),
                    (t.dataset.active = "true"),
                    (o.style.visibility = "hidden"),
                    (a.ghostSource = o)))),
              (i.preview = c));
            let m = c.layers.find((e) => e.id === i.layer.id);
            if (
              (m && y.updateDragPreview((0, eY.bC)(m)),
              e6(c, p, g, w.current, i.layer.id),
              i.ghostSource)
            ) {
              let e = {
                ...i.layer,
                x: i.layer.x + d.x - i.startPoint.x,
                y: i.layer.y + d.y - i.startPoint.y,
              };
              (x.current && Object.assign(x.current.style, e7(e, c)),
                w.current &&
                  Object.assign(w.current.style, e7((0, eY.bC)(e), c)));
            }
          }, [l, v, p, g, y, E, H]),
          K = (0, d.useCallback)(
            (e) => {
              var r;
              let t = E.current;
              (void 0 !== e.frame && cancelAnimationFrame(e.frame),
                (R.current = void 0),
                window.removeEventListener("keydown", S.current, !0),
                null == t || t.classList.remove("nodrag", "nopan"),
                t &&
                  "function" == typeof t.releasePointerCapture &&
                  (null == (r = t.hasPointerCapture)
                    ? void 0
                    : r.call(t, e.pointerId)) &&
                  t.releasePointerCapture(e.pointerId),
                e8(e, !1, t, w.current),
                y.endDrag());
            },
            [y, E],
          );
        C.current = (0, d.useCallback)(() => {
          let e = R.current;
          e &&
            (K(e),
            e6(B.current, p, g, w.current, e.layer.id),
            e3(x.current, e, !0));
        }, [p, g, K]);
        let G = (0, d.useCallback)(
            (e, r) => {
              let t = R.current;
              if (!t || t.pointerId !== e.pointerId) return;
              let a = H(e.clientX, e.clientY, t.surfaceRect);
              !r &&
                (t.moved || a.x !== t.startPoint.x || a.y !== t.startPoint.y) &&
                (void 0 !== t.frame && cancelAnimationFrame(t.frame),
                (t.latestClient = { x: e.clientX, y: e.clientY }),
                Y());
              let o = t.detaching;
              if ((K(t), !r && t.moved && o && t.nodeWorldRect)) {
                let e = H(t.latestClient.x, t.latestClient.y, t.surfaceRect),
                  r = (0, eJ.N4)(
                    B.current,
                    t.layer,
                    { x: e.x - t.startPoint.x, y: e.y - t.startPoint.y },
                    t.nodeWorldRect,
                  );
                N(t, r);
                return;
              }
              if (r || !t.moved || !t.preview) {
                (e6(B.current, p, g, w.current, t.layer.id),
                  e3(x.current, t, !0));
                return;
              }
              (e3(x.current, t, !0), _(t.preview, t.kind));
            },
            [_, N, Y, p, g, K, H],
          ),
          X = (0, d.useCallback)(
            (e) => {
              if (0 !== e.button || R.current) return;
              L();
              let r = F(e.clientX, e.clientY);
              if (!r) {
                var t;
                (y.selectBase(v),
                  null == (t = E.current) || t.focus({ preventScroll: !0 }));
                return;
              }
              (y.select(v, r.id), V(e, r, "move"));
            },
            [V, L, F, v, y, E],
          ),
          Q = (0, d.useCallback)(
            (e, r) => {
              (e.stopPropagation(), 0 === e.button && A && V(e, A, "scale", r));
            },
            [V, A],
          ),
          J = (0, d.useCallback)(
            (e) => {
              let r = R.current;
              if (r) {
                if (r.pointerId !== e.pointerId) return;
                ((r.latestClient = { x: e.clientX, y: e.clientY }),
                  void 0 === r.frame && (r.frame = requestAnimationFrame(Y)));
                return;
              }
              D(e);
            },
            [D, Y],
          ),
          Z = (0, d.useCallback)((e) => G(e, !1), [G]),
          ee = (0, d.useCallback)((e) => G(e, !0), [G]),
          er = (0, d.useCallback)(
            (e) => {
              let r = F(e.clientX, e.clientY);
              r ? y.select(v, r.id) : y.selectBase(v);
            },
            [F, v, y],
          ),
          et = (0, d.useCallback)(
            (e, r) => {
              if (!A) return;
              let t = "ArrowUp" === e.key || "ArrowRight" === e.key,
                a = "ArrowDown" === e.key || "ArrowLeft" === e.key;
              if (!t && !a) return;
              (e.preventDefault(), e.stopPropagation());
              let o = (0, eY.bC)(A),
                n = {
                  x: r.endsWith("right") ? o.x : o.x + o.width,
                  y: r.startsWith("bottom") ? o.y : o.y + o.height,
                },
                i = {
                  x: r.endsWith("right") ? o.x + o.width : o.x,
                  y: r.startsWith("bottom") ? o.y + o.height : o.y,
                },
                s = 1 + (t ? 0.05 : -0.05),
                l = (0, eV.oQ)(B.current, A.id, r, {
                  x: n.x + (i.x - n.x) * s,
                  y: n.y + (i.y - n.y) * s,
                });
              l && _(l, "scale");
            },
            [_, A],
          ),
          ea = (0, d.useMemo)(
            () =>
              A
                ? e7((0, eY.bC)(A), c)
                : j
                  ? e7({ x: 0, y: 0, width: c.width, height: c.height }, c)
                  : void 0,
            [j, c, A],
          ),
          eo = A
            ? (null == (r = A.name) ? void 0 : r.trim()) ||
              ("string" ==
                typeof (o =
                  (null == (t = i.canvas.getObjectSnapshot(v))
                    ? void 0
                    : t.type) === "image"
                    ? t.data.title
                    : void 0) && o.trim()
                ? o
                : void 0)
            : void 0;
        return (
          A
            ? (n = (0, eq.D1)((0, eq.sJ)(A.name, P)))
            : j && (n = (0, eq.D1)((0, eq.$3)())),
          (0, a.jsxs)("div", {
            "aria-label": (0, eq.Sj)(),
            className:
              "pointer-events-auto absolute inset-0 touch-none outline-none",
            "data-selected-layer-id": null == A ? void 0 : A.id,
            "data-selection-kind": null == m ? void 0 : m.kind,
            "data-testid": "image-layer-board-editor-surface",
            ref: U,
            role: "group",
            tabIndex: -1,
            onContextMenu: er,
            onPointerCancel: ee,
            onPointerDown: X,
            onPointerLeave: L,
            onPointerMove: J,
            onPointerUp: Z,
            children: [
              (0, a.jsx)("img", {
                alt: "",
                "aria-hidden": "true",
                className:
                  "pointer-events-none absolute hidden max-w-none select-none object-fill data-[active=true]:block",
                "data-testid": "image-layer-board-drag-ghost",
                decoding: "async",
                draggable: !1,
                ref: x,
              }),
              (0, a.jsx)(eK.h8, { ref: T }),
              ea
                ? (0, a.jsxs)("div", {
                    "aria-label": n,
                    className: `pointer-events-none absolute shadow-canvas-layer-board-selection data-[detaching=true]:shadow-canvas-layer-board-handle ${j ? "rounded-canvas-layer-board-row" : "rounded-canvas-layer-board-selection"}`,
                    "data-testid": "image-layer-board-selection",
                    ref: w,
                    role: "group",
                    style: ea,
                    children: [
                      eo
                        ? (0, a.jsxs)("div", {
                            "aria-hidden": "true",
                            className:
                              "pointer-events-none absolute bottom-full left-0 hidden items-center gap-canvas-layer-board-detach-title-gap whitespace-nowrap pb-canvas-layer-board-detach-title-offset font-dreamina-cn font-dreamina-regular text-dreamina-cn-13 text-dreamina-text-secondary data-[detaching=true]:flex",
                            "data-layer-detach-title": "",
                            "data-testid": "image-layer-board-detach-title",
                            style: eZ,
                            children: [(0, a.jsx)(s.d6D, { size: 16 }), eo],
                          })
                        : null,
                      A
                        ? eV.BS.map((e) =>
                            (0, a.jsx)(
                              ez.z,
                              {
                                anchorClassName: "z-canvas-layer-board-handle",
                                corner: e,
                                "data-layer-handle": e,
                                label: (0, eq.XM)(e),
                                screenFixed: !0,
                                onKeyDown: (r) => et(r, e),
                                onPointerDown: (r) => Q(r, e),
                              },
                              e,
                            ),
                          )
                        : null,
                    ],
                  })
                : null,
            ],
          })
        );
      }
      function e2() {
        return () => void 0;
      }
      function e7(e, r) {
        let t = (0, eY.vR)(e, r);
        return {
          left: `${t.left}%`,
          top: `${t.top}%`,
          width: `${t.width}%`,
          height: `${t.height}%`,
        };
      }
      function e6(e, r, t, a, o) {
        if (!o) return;
        let n = e.layers.find((e) => e.id === o);
        if (!n) return;
        let i = r(o),
          s = e7(n, e);
        i && Object.assign(i.style, s);
        let l = null == t ? void 0 : t(o);
        (l && Object.assign(l.style, s),
          a && Object.assign(a.style, e7((0, eY.bC)(n), e)));
      }
      function e3(e, r, t) {
        let a = r.ghostSource;
        !a ||
          ((r.ghostSource = void 0),
          t && (a.style.visibility = ""),
          e && (delete e.dataset.active, e.removeAttribute("src")));
      }
      function e8(e, r, t, a) {
        if (e.detaching === r) return;
        e.detaching = r;
        let o =
          (null == a ? void 0 : a.querySelector("[data-layer-detach-title]")) ??
          null;
        for (let e of [t, a, o])
          e &&
            (r ? (e.dataset.detaching = "true") : delete e.dataset.detaching);
      }
      let e5 = [
        ["imageLayerBoard.duplicate", "duplicate"],
        ["imageLayerBoard.moveUp", "moveUp"],
        ["imageLayerBoard.moveDown", "moveDown"],
        ["imageLayerBoard.bringToFront", "bringToFront"],
        ["imageLayerBoard.sendToBack", "sendToBack"],
      ];
      function e9(e) {
        return e.ok
          ? { status: "executed" }
          : {
              message: (0, eO.T0)(e),
              reason: `imageLayerBoard.${e.reason}`,
              status: "failed",
            };
      }
      var e4 = t(43298),
        re = t(47980);
      let rr = (0, d.memo)(function () {
        let e = (0, eq.XH)();
        return (0, a.jsx)("span", {
          className: "sr-only",
          "data-testid": "image-layer-board-locked-status",
          role: "note",
          children: e,
        });
      });
      var rt = t(86763),
        ra = t(85570);
      let ro = (0, d.memo)(function (e) {
          let r,
            t,
            {
              controls: o,
              editing: n,
              layerBoard: i,
              nodeActive: l = void 0 !== n,
              previewTier: u,
              visible: c = !0,
            } = e,
            v = (0, d.useMemo)(() => (0, eY.Wy)(i.layers), [i.layers]),
            p = (0, d.useMemo)(() => v.map((e) => e.resourceId), [v]),
            g = (0, x.cA)(p),
            m = (null == n ? void 0 : n.api) ?? (null == o ? void 0 : o.api),
            y =
              (null == n ? void 0 : n.nodeId) ??
              (null == o ? void 0 : o.nodeId),
            h = null == m ? void 0 : m.canvas.imageLayerBoardRedraw,
            b = (0, d.useCallback)(
              (e) => (null == h ? void 0 : h.subscribe(e)) ?? rd(),
              [h],
            ),
            f = (0, d.useCallback)(() => {
              var e;
              if (void 0 === y) return "";
              let r = (null == h ? void 0 : h.getPendingTargets(y)) ?? rl,
                t =
                  null == h || null == (e = h.getFocusedPendingTarget)
                    ? void 0
                    : e.call(h, y);
              return `${r.map(ra.H).join("\n")}
focused:${t ? (0, ra.H)(t) : ""}`;
            }, [y, h]),
            I = (0, d.useSyncExternalStore)(b, f, f),
            w = (0, d.useMemo)(
              () =>
                void 0 !== y && I.length > 0
                  ? ((null == h ? void 0 : h.getPendingTargets(y)) ?? rl)
                  : rl,
              [y, I, h],
            ),
            R = (0, d.useMemo)(() => {
              var e;
              return void 0 === y ||
                0 === I.length ||
                null == h ||
                null == (e = h.getFocusedPendingTarget)
                ? void 0
                : e.call(h, y);
            }, [y, I, h]),
            C = null == m ? void 0 : m.canvas.imageLayerBoard,
            S = (0, d.useCallback)(
              (e) => {
                var r;
                return l && R && void 0 !== y
                  ? ((null == C || null == (r = C.subscribeSelection)
                      ? void 0
                      : r.call(C, y, e)) ??
                      (null == C ? void 0 : C.subscribe(e)) ??
                      rd())
                  : rd();
              },
              [R, l, y, C],
            ),
            B = (0, d.useCallback)(
              () =>
                !!l &&
                !!R &&
                void 0 !== y &&
                (null == C ? void 0 : C.getSelection(y)) !== void 0,
              [R, l, y, C],
            ),
            M = (0, d.useSyncExternalStore)(S, B, () => !1);
          (0, d.useEffect)(() => {
            var e;
            R &&
              void 0 !== y &&
              (!l || M) &&
              (null == h ||
                null == (e = h.clearFocusedPendingTarget) ||
                e.call(h, y));
          }, [R, l, y, h, M]);
          let k = (0, d.useRef)(new Map()),
            j = (0, d.useRef)(new Map()),
            P = (0, d.useCallback)((e, r) => {
              r ? k.current.set(e, r) : k.current.delete(e);
            }, []),
            A = (0, d.useCallback)((e) => k.current.get(e), []),
            L = (0, d.useCallback)((e, r) => {
              r ? j.current.set(e, r) : j.current.delete(e);
            }, []),
            F = (0, d.useCallback)((e) => j.current.get(e), []),
            D = void 0 === n && void 0 !== o,
            [T, E] = (0, d.useState)(!1),
            U = (0, d.useCallback)(
              (e) => {
                var r, t, a, n;
                if ((E(e), e)) {
                  (null == o ||
                  null == (n = o.api.canvas.imageLayerBoard) ||
                  null == (a = n.requestLayerListDisclosure)
                    ? void 0
                    : a.call(n, o.nodeId)) && o.activateNode();
                  return;
                }
                null == o ||
                  null == (t = o.api.canvas.imageLayerBoard) ||
                  null == (r = t.clearLayerListDisclosure) ||
                  r.call(t, o.nodeId);
              },
              [o],
            );
          return (
            (0, d.useLayoutEffect)(() => {
              var e, r;
              !c &&
                T &&
                (E(!1),
                null == o ||
                  null == (r = o.api.canvas.imageLayerBoard) ||
                  null == (e = r.clearLayerListDisclosure) ||
                  e.call(r, o.nodeId));
            }, [o, T, c]),
            (0, a.jsxs)("div", {
              className: (0, s.cn)(
                "pointer-events-none absolute inset-0",
                !c && "invisible",
              ),
              "data-testid": "image-layer-board-stack",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "absolute inset-0 overflow-hidden rounded-canvas-media-node-preview",
                  "data-testid": "image-layer-board-stack-clip",
                  children: [
                    v.map((e, r) => {
                      let t = (0, e4.r)(g[r], u);
                      return 0 === t.length
                        ? null
                        : (0, a.jsx)(
                            rc,
                            { board: i, layer: e, urls: t, onImageRef: P },
                            e.id,
                          );
                    }),
                    w.some((e) => "base" === e.source.kind)
                      ? (0, a.jsx)(ru, {})
                      : null,
                    v.flatMap((e) =>
                      w.some(
                        (r) =>
                          "layer" === r.source.kind &&
                          r.source.layerId === e.id &&
                          r.resourceId === e.resourceId,
                      )
                        ? [
                            (0, a.jsx)(
                              ru,
                              { board: i, layer: e, onOverlayRef: L },
                              e.id,
                            ),
                          ]
                        : [],
                    ),
                  ],
                }),
                l && (null == R ? void 0 : R.source.kind) === "layer" && !M
                  ? ((r = R.source),
                    (t = i.layers.find((e) => e.id === r.layerId))
                      ? (0, a.jsx)(eK.h8, {
                          board: i,
                          layer: t,
                          testId: "image-layer-board-pending-outline",
                        })
                      : null)
                  : l && (null == R ? void 0 : R.source.kind) === "base" && !M
                    ? (0, a.jsx)("div", {
                        "aria-hidden": "true",
                        className:
                          "pointer-events-none absolute inset-0 rounded-canvas-media-node-preview shadow-canvas-layer-board-hover",
                        "data-testid": "image-layer-board-pending-outline",
                      })
                    : null,
                c && void 0 === n
                  ? (0, a.jsx)(rn, {
                      controls: o,
                      layerBoard: i,
                      resolveLayerImage: A,
                    })
                  : null,
                c && void 0 !== n
                  ? (0, a.jsx)(e0, {
                      api: n.api,
                      layerBoard: i,
                      nodeId: n.nodeId,
                      resolveLayerImage: A,
                      resolveLayerPendingOverlay: F,
                    })
                  : null,
                c ? (0, a.jsx)(rr, {}) : null,
                c && void 0 === n
                  ? (0, a.jsxs)("div", {
                      className:
                        "pointer-events-none absolute right-0 top-0 flex items-center gap-canvas-layer-board-corner-control-gap p-canvas-layer-board-overlay-inset",
                      "data-testid": "image-layer-board-corner-controls",
                      children: [
                        D && o.writeChromeVisible
                          ? (0, a.jsx)("div", {
                              className: "nodrag nopan pointer-events-auto",
                              "data-testid":
                                "image-layer-board-hover-edit-entry",
                              children: (0, a.jsx)(rt.lb, {
                                api: o.api,
                                nodeId: o.nodeId,
                                readEditAvailability: o.readEditAvailability,
                              }),
                            })
                          : null,
                        (0, a.jsx)("div", {
                          className: (0, s.cn)(
                            D && "nodrag nopan pointer-events-auto",
                          ),
                          "data-testid": D
                            ? "image-layer-board-hover-layer-count-entry"
                            : void 0,
                          children: D
                            ? (0, a.jsx)(rt.yH, {
                                api: o.api,
                                baseResourceId: o.baseResourceId,
                                board: i,
                                editAvailability: o.writeChromeVisible
                                  ? ri
                                  : rs,
                                nodeId: o.nodeId,
                                onOpenChange: U,
                                readEditAvailability: o.readEditAvailability,
                                triggerTabIndex: -1,
                              })
                            : (0, a.jsx)(re.$, { count: i.layers.length + 1 }),
                        }),
                      ],
                    })
                  : null,
                c
                  ? (0, a.jsx)("div", {
                      "aria-hidden": "true",
                      className:
                        "pointer-events-none absolute inset-0 hidden rounded-canvas-media-node-preview shadow-canvas-layer-board-selection data-[active=true]:block",
                      "data-layer-board-attach-highlight": "",
                      "data-testid": "image-layer-board-attach-highlight",
                    })
                  : null,
              ],
            })
          );
        }),
        rn = (0, d.memo)(function (e) {
          let { controls: r, layerBoard: t, resolveLayerImage: o } = e,
            {
              clearHoverOutline: n,
              hitLayer: i,
              onHoverPointerMove: s,
              outlineRef: l,
              surfaceRef: u,
            } = (0, eK.Cl)({ layerBoard: t, resolveLayerImage: o }),
            c = (0, d.useCallback)(
              (e) => {
                var t;
                if (
                  0 !== e.button ||
                  !1 === e.isPrimary ||
                  !(null == r ? void 0 : r.writeChromeVisible) ||
                  !r.readEditAvailability().available
                )
                  return;
                let a = i(e.clientX, e.clientY);
                if (
                  !a ||
                  !(null == (t = r.api.canvas.imageLayerBoard)
                    ? void 0
                    : t.select(r.nodeId, a.id))
                )
                  return;
                let o = e.currentTarget.getBoundingClientRect(),
                  s = r.api.canvas.imageLayerBoard.beginPointerHandoff;
                (!s ||
                  s(r.nodeId, a.id, {
                    clientX: e.clientX,
                    clientY: e.clientY,
                    pointerId: e.pointerId,
                    surfaceRect: {
                      x: o.left,
                      y: o.top,
                      width: o.width,
                      height: o.height,
                    },
                  })) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  e.currentTarget.classList.add("nodrag", "nopan"),
                  r.activateNode(),
                  n());
              },
              [n, r, i],
            ),
            v = (0, d.useCallback)(
              (e) => {
                var t, a;
                (null == r ||
                  null == (a = r.api.canvas.imageLayerBoard) ||
                  null == (t = a.cancelPointerHandoff) ||
                  t.call(a, e.pointerId),
                  e.currentTarget.classList.remove("nodrag", "nopan"));
              },
              [r],
            );
          return (0, a.jsx)("div", {
            "aria-hidden": "true",
            className: "pointer-events-auto absolute inset-0",
            "data-testid": "image-layer-board-idle-hover-surface",
            ref: u,
            onPointerCancelCapture: v,
            onPointerDownCapture: c,
            onPointerLeave: n,
            onPointerMove: s,
            onPointerUpCapture: v,
            children: (0, a.jsx)(eK.h8, {
              ref: l,
              testId: "image-layer-board-idle-hover-outline",
            }),
          });
        }),
        ri = { available: !0 },
        rs = { available: !1, reason: "notEditable" },
        rl = Object.freeze([]);
      function rd() {
        return () => void 0;
      }
      let ru = (0, d.memo)(function (e) {
          let { board: r, layer: t, onOverlayRef: o } = e,
            n = (0, d.useCallback)(
              (e) => {
                t && (null == o || o(t.id, e));
              },
              [t, o],
            );
          return (0, a.jsx)("div", {
            "aria-label": (0, eq.MP)(),
            className: (0, s.cn)(
              "pointer-events-none absolute flex items-center justify-center overflow-hidden bg-dreamina-bg-mask-30 text-dreamina-on-media-text-primary",
              t
                ? "rounded-canvas-layer-board-selection"
                : "inset-0 rounded-canvas-media-node-preview",
            ),
            "data-layer-id": null == t ? void 0 : t.id,
            "data-testid": "image-layer-board-pending-layer",
            role: "status",
            ref: n,
            style: t && r ? rv(t, r) : void 0,
            children: (0, a.jsx)(s.bQB, { className: "size-6" }),
          });
        }),
        rc = (0, d.memo)(function (e) {
          let { board: r, layer: t, onImageRef: o, urls: n } = e,
            i = (0, d.useCallback)((e) => o(t.id, e), [t.id, o]),
            s = (0, d.useMemo)(() => rv(t, r), [r, t]);
          return (0, a.jsx)(e4.a, {
            alt: t.name ?? "",
            className: "absolute max-w-none select-none object-fill",
            "data-layer-id": t.id,
            "data-testid": "image-layer-board-layer",
            decoding: "async",
            draggable: !1,
            ref: i,
            style: s,
            urls: n,
          });
        });
      function rv(e, r) {
        let t = (0, eY.vR)(e, r),
          a = (0, eY.gG)(e);
        return {
          left: `${t.left}%`,
          top: `${t.top}%`,
          width: `${t.width}%`,
          height: `${t.height}%`,
          ...(void 0 === a ? {} : { transform: a }),
        };
      }
      var rp = t(74780),
        rg = t(98341),
        rm = t(88023),
        ry = t(11567),
        rh = t(33713),
        rb = t(37350),
        rf = t(88081),
        rI = t(7784),
        rw = t(30962),
        rx = t(11157),
        rR = t(51887),
        rC = t(85817),
        rS = t(63416),
        rB = t(52902);
      let rM = (0, d.memo)(function (e) {
        let r = (0, d.useMemo)(
          () =>
            (function (e, r) {
              let t = new Set();
              for (let a of (void 0 !== e && t.add(e), r))
                for (let e of a.resourceIds) t.add(e);
              return t.size;
            })(e.primaryResourceId, e.resourceBatches),
          [e.primaryResourceId, e.resourceBatches],
        );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(rj, {
              logicalHeight: e.logicalHeight,
              logicalWidth: e.logicalWidth,
              mediaResultLayoutAvailable: e.mediaResultLayoutAvailable,
              active: e.active,
              isUploadSession: e.isUploadSession,
              renderMode: e.renderMode,
              materializationState: e.materializationState,
              nodeId: e.nodeId,
              primaryResourceId: e.primaryResourceId,
              previewTier: e.previewTier,
              resourceBatches: e.resourceBatches,
              resourceCount: r,
              queuedGenerationCancellation: e.queuedGenerationCancellation,
              selected: e.selected,
              tagPresentation: e.tagPresentation,
              title: e.title,
              uploadResource: e.uploadResource,
              onUploadRetry: e.onUploadRetry,
            }),
            (0, a.jsx)(rk, { ...e, resourceCount: r }),
          ],
        });
      });
      function rk(e) {
        return e.resourceCount <= 1 || !e.mediaResultLayoutAvailable
          ? null
          : (0, a.jsx)($.z, {
              count: e.resourceCount,
              countMotionEnabled: !1,
              label: (0, g.oP7)(e.resourceCount),
              tabbable: !1,
              onInvoke: e.onSelectFromHistory,
            });
      }
      let rj = (0, d.memo)(function (e) {
        var r, t, o, n;
        let i,
          s = (0, E.pM)(),
          l = eR(e.nodeId),
          u = (function (e) {
            var r, t, a, o;
            let n =
                ((r = e),
                (0, x.nk)({
                  resourceId: r.primaryResourceId,
                  resourceBatches: r.resourceBatches,
                })),
              i = (0, x.xO)(void 0 === n ? [] : [n]),
              [s] = i.resources,
              [l] = i.generationQueueStates,
              d =
                ((t = n),
                (a = s),
                (o = e.materializationState),
                void 0 === t
                  ? rL(o)
                  : void 0 === a || a.status === y.ao.running
                    ? "loading"
                    : a.type === y._x.image && a.status === y.ao.success
                      ? "result"
                      : "error");
            return (
              "loading" === d && l && (d = "queued"),
              {
                appearance:
                  (null == s ? void 0 : s.status) === y.ao.running
                    ? "progress"
                    : "skeleton",
                description: rA(
                  e,
                  (function (e, r, t) {
                    if (void 0 === e) {
                      let e = rL(t);
                      return "error" === e ? "failed" : e;
                    }
                    return void 0 === r
                      ? "loading"
                      : r.status === y.ao.running
                        ? "generating"
                        : r.type === y._x.image && r.status === y.ao.success
                          ? "ready"
                          : "failed";
                  })(n, s, e.materializationState),
                ),
                errorMessage: (function (e, r) {
                  if (void 0 === e) return (0, g.zth)();
                  let t = (0, G.Iw)({ resource: r, resourceId: e });
                  return (null == t ? void 0 : t.message) ?? (0, g.zth)();
                })(n, s),
                resource: s,
                resourceId: n,
                queue: l,
                state: d,
              }
            );
          })(e);
        ((t = e),
          (o = u),
          (i = c(
            null == (n = (0, I.FY)().featuresApi)
              ? void 0
              : n.canvas.panoramaPreview,
            t.nodeId,
            t.selected,
          )),
          (0, rx.A)({
            currentHeight: t.logicalHeight,
            currentWidth: t.logicalWidth,
            enabled: t.mediaResultLayoutAvailable || i,
            displayAspectRatio: i ? 16 / 9 : void 0,
            nodeId: t.nodeId,
            nodeType: "image",
            preferredResourceId: o.resourceId,
            previewTransitionPace: i ? "immersive-enter" : "element",
            resources: [o.resource],
          }));
        let v = (0, B.W)(e.nodeId, e.primaryResourceId, e.resourceBatches),
          p = (function (e) {
            var r;
            if (
              "result" !== e.state ||
              void 0 === e.resourceId ||
              (null == (r = e.resource) ? void 0 : r.type) !== y._x.image
            )
              return;
            let t = (0, J.Ho)(e.resource.urls);
            return "selected" === t.status
              ? { decision: t, resourceId: e.resourceId }
              : void 0;
          })(u),
          m = ex(p, v, e.renderMode),
          h = void 0 !== p && v.failedUrls.has(p.decision.url);
        (0, E._M)(s || ("result" === u.state && void 0 !== p));
        let f = (0, d.useCallback)(
            (r) => {
              void 0 !== p &&
                v.onUrlFailure({
                  stage: r,
                  url: p.decision.url,
                  resourceId: p.resourceId,
                  renderMode: e.renderMode,
                  selectionSource: p.decision.source,
                  surface: "primary",
                });
            },
            [p, v, e.renderMode],
          ),
          w = (0, d.useMemo)(() => {
            var r;
            return ew({
              description: u.description,
              nodeId: e.nodeId,
              onCandidateFailure: f,
              onReady: l,
              preview: p,
              previewAlreadyFailed: h,
              previewFailures: v,
              previewReady: "ready" === m.status,
              localUploadTargetUrl: (0, J.l8)(
                null == (r = u.resource) ? void 0 : r.urls,
                e.previewTier,
              ),
              renderMode: e.renderMode,
              selected: e.selected,
            });
          }, [
            f,
            l,
            p,
            h,
            m.status,
            v,
            e.renderMode,
            e.nodeId,
            e.selected,
            u.description,
            null == (r = u.resource) ? void 0 : r.urls,
            e.previewTier,
          ]),
          R = (0, E.I5)(
            w,
            (null == p ? void 0 : p.resourceId) ?? u.resourceId,
            !0,
          ),
          C = (function (e, r) {
            let t =
              "runtime-loading" === e.materializationState ||
              "runtime-error" === e.materializationState;
            if (
              !(0, rm.$S)({
                renderMode: e.renderMode,
                stateType: r.state,
                uploadLifecycle: t,
              }) ||
              "compact" !== e.renderMode
            )
              return null;
            let o = (0, b.k)(e.nodeId);
            if (t)
              return (0, a.jsx)(ee, {
                active: e.active,
                announceFailure: e.isUploadSession,
                announcePending: e.isUploadSession,
                description: r.description,
                descriptionId: o,
                logicalHeight: e.logicalHeight,
                logicalWidth: e.logicalWidth,
                nodeId: e.nodeId,
                renderMode: e.renderMode,
                resource: e.uploadResource,
                title: e.title,
                onRetry: e.onUploadRetry,
              });
            if ("queued" === r.state && r.queue && r.resourceId) {
              var n;
              let t,
                i = e.queuedGenerationCancellation;
              return (
                (null == (n = i.queuedGenerationCancellation)
                  ? void 0
                  : n.getState(r.resourceId).available) &&
                  (t = i.handleCancelQueuedResource),
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(ea, {
                      active: e.active,
                      description: r.description,
                      descriptionId: o,
                      logicalHeight: e.logicalHeight,
                      logicalWidth: e.logicalWidth,
                      queue: r.queue,
                      processingDurationMs: (0, G.n$)(r.resource),
                      resourceId: r.resourceId,
                      processingMode: (0, G.Wd)(r.resource),
                      startedAtMs: (0, G.Cv)(r.resource),
                      title: e.title,
                      onCancel: t,
                    }),
                    i.cancellationFailureAlert,
                  ],
                })
              );
            }
            return "loading" !== r.state
              ? null
              : (0, a.jsx)(et, {
                  announce: e.active,
                  appearance: r.appearance,
                  processingDurationMs: (0, G.n$)(r.resource),
                  description: r.description,
                  descriptionId: o,
                  logicalHeight: e.logicalHeight,
                  logicalWidth: e.logicalWidth,
                  selected: e.selected,
                  processingMode: (0, G.Wd)(r.resource),
                  startedAtMs: (0, G.Cv)(r.resource),
                  title: e.title,
                });
          })(e, u);
        return (
          C ||
          (function (e) {
            var r, t, o, n, i, s, l, d;
            let u,
              {
                handoffHasDisplayedPreview: c,
                preview: v,
                previewAlreadyFailed: p,
                previewLoadStatus: g,
                props: m,
                summary: y,
              } = e;
            if (
              (void 0 !== v && !p && "ready" === g) ||
              ("result" === y.state && c)
            )
              return null;
            let h = void 0 !== v && !p && "failed" !== g,
              f = h ? "loading" : y.state,
              I = h ? rA(m, "loading") : y.description;
            if ("error" === f)
              return (0, a.jsx)(rP, {
                description: I,
                message: y.errorMessage,
                props: m,
              });
            let w =
              ((r = f),
              (t = m.selected),
              (o = !1),
              t
                ? {
                    "aria-atomic": !0,
                    "aria-busy": "loading" === r,
                    "aria-live": "error" === r ? "assertive" : "polite",
                    role: o ? void 0 : "error" === r ? "alert" : "status",
                  }
                : {});
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  ...w,
                  ...(p || "failed" === g
                    ? (0, rB.s4)("frame_estimate", "media_error")
                    : (0, rB.YR)({
                        type: "result" === f ? "loading" : f,
                        appearance: h ? "skeleton" : y.appearance,
                      })),
                  className: `${((u = "bg-[#22252a]"), "error" === (n = f) ? (u = W.gX) : "loading" === n && (u = "bg-white/[0.08]"), `h-full w-full rounded-[7px] ${_.$o} ${u}`)} ${"loading" === f ? Q.jC : ""} text-[0px] leading-none text-transparent`,
                  "data-loading-appearance":
                    "loading" === f ? "skeleton" : void 0,
                  "data-state": f,
                  "data-testid":
                    "compact" === m.renderMode
                      ? "image-node-compact-static"
                      : "image-node-micro",
                  id: (0, b.k)(m.nodeId),
                  children: I,
                }),
                ((i = m),
                (s = y),
                "micro" !== i.renderMode ||
                ("loading" !== s.state && "queued" !== s.state)
                  ? null
                  : (0, a.jsx)(T.m, {
                      logicalHeight: i.logicalHeight,
                      logicalWidth: i.logicalWidth,
                      outset: 4,
                      animationMode: (0, G.Wd)(s.resource),
                      startedAtMs:
                        (0, G.Cv)(s.resource) ??
                        (null == (d = i.uploadResource) ||
                        null == (l = d.nodeUpload)
                          ? void 0
                          : l.startedAtMs),
                      durationMs: (0, G.n$)(s.resource),
                    })),
              ],
            });
          })({
            handoffHasDisplayedPreview: R.hasDisplayedPreview,
            preview: p,
            previewAlreadyFailed: h,
            previewLoadStatus: m.status,
            props: e,
            summary: u,
          })
        );
      });
      function rP(e) {
        let { description: r, message: t, props: o } = e;
        return (0, a.jsx)(q.S, {
          announce: o.selected,
          announcement: r,
          description: r,
          descriptionId: (0, b.k)(o.nodeId),
          message: t,
          selected: o.selected,
          surfaceClassName: Q.zl,
          testId:
            "compact" === o.renderMode
              ? "image-node-compact-static"
              : "image-node-micro",
        });
      }
      function rA(e, r) {
        return (0, eE.HT)(
          (0, g.Bgz)({
            resourceCount: e.resourceCount,
            selected: e.selected,
            status: r,
          }),
          e.tagPresentation,
        );
      }
      function rL(e) {
        return "runtime-loading" === e
          ? "loading"
          : "runtime-error" === e || "failed" === e
            ? "error"
            : "empty";
      }
      let rF = (0, a.jsx)(s.d6D, { size: 16 }),
        rD = { error: 0, pending: 0, ready: 0 },
        rT = { available: !1, reason: "notEditable" };
      function rE(e) {
        let { children: r } = e;
        return (0, a.jsx)("div", {
          className: `${rg.IM} group/image-layer-board-node relative h-full w-full overflow-visible rounded-canvas-media-node-preview`,
          "data-canvas-flow-node-surface": "true",
          children: r,
        });
      }
      let rU = (0, d.memo)(function (e) {
          return e.data.storyboardCell
            ? (0, a.jsx)(eF, { ...e })
            : (0, a.jsx)(rH, { ...e });
        }),
        rH = (0, d.memo)(function (e) {
          var r, t, o, i, s, l, u, c, v, p;
          let g,
            m,
            h,
            f,
            C,
            S,
            B = (0, I.FY)(),
            { writeChromeVisible: k } = (0, w.A1)(),
            j = (0, eH.m)(
              null == (r = B.featuresApi)
                ? void 0
                : r.canvas.resourceRegeneration,
              e.id,
            ),
            P = B.isSessionNode(e.id),
            A = (0, rm.Y$)(e.data.resourceId, e.data.resourceBatches),
            D = (0, rm.ek)(e.data.source, A),
            T = P || D ? "full" : (e.data.renderMode ?? "full"),
            U = (0, x.K_)(e.id, !A),
            H =
              ((i = e),
              (s = A),
              (l = U),
              (g = (0, I.FY)()),
              (m = !!(
                l &&
                (l.status === y.ao.failed || l.status === y.ao.canceled) &&
                (null == (u = l.nodeUpload) ? void 0 : u.retryable)
              )),
              (h = (0, rp._N)(i.id, !s && m)),
              (f = (0, d.useCallback)(() => {
                h && g.uploadCommands.retry(i.id);
              }, [g, i.id, h])),
              { canRetry: m && h, retry: f, resource: l }),
            q = (0, rR.a)(B),
            _ = (c = {
              source: e.data.source,
              hasResourceManifest: A,
              runtimeStatus: null == U ? void 0 : U.status,
            }).hasResourceManifest
              ? "resource"
              : void 0 !== c.runtimeStatus
                ? c.runtimeStatus === y.ao.failed ||
                  c.runtimeStatus === y.ao.canceled
                  ? "runtime-error"
                  : "runtime-loading"
                : "post_edit_generated" === c.source
                  ? "failed"
                  : "empty",
            N = "empty" === _ && !D,
            z = P || D || "runtime-loading" === _ || "runtime-error" === _,
            W = (0, rp.YV)(e.id, z && (0, rp.l5)(U)),
            $ = rQ(e),
            O = (0, rC.V)(e.id, e.selected),
            V = (0, R.Bf)("image"),
            [Y, K] = (0, d.useState)(!1),
            [G, X] = (0, d.useState)(!0),
            Q = (0, d.useCallback)(
              () => B.selectionActions.selectOnly(e.id, "user"),
              [B.selectionActions, e.id],
            );
          ((0, d.useLayoutEffect)(() => {
            N &&
              B.actions.restoreMediaResultDisplaySizeAuthority(e.id, "system");
          }, [B.actions, N, e.id]),
            $ ||
              (0, F.JW)(B.facts, L.O, e.id, {
                nodeId: e.id,
                reason: "missing_logical_dimensions",
              }));
          let J = (0, d.useMemo)(() => {
              var r;
              if (
                (null == (r = B.featuresApi)
                  ? void 0
                  : r.canvas.imageLayerBoard) &&
                void 0 !== e.data.layerBoard &&
                void 0 !== e.data.resourceId
              )
                return {
                  activateNode: () =>
                    B.selectionActions.selectOnly(e.id, "user"),
                  api: B.featuresApi,
                  baseResourceId: e.data.resourceId,
                  nodeId: e.id,
                  readEditAvailability: k
                    ? () => {
                        var e;
                        return (
                          (null == (e = B.featuresApi)
                            ? void 0
                            : e.canvas.getEditAvailability().local) ?? rT
                        );
                      }
                    : () => rT,
                  writeChromeVisible: k,
                };
            }, [
              B.featuresApi,
              B.selectionActions,
              e.data.layerBoard,
              e.data.resourceId,
              e.id,
              k,
            ]),
            Z =
              ((v = {
                active: O,
                isDefaultEmpty: N,
                isImportedPlaceholder: D,
                isUploadSession: P,
                logicalSize: $,
                materializationState: _,
                onSelectFromLightHistory: Q,
                onResultsExpandedChange: K,
                onResultVisibilityChange: X,
                props: e,
                queuedGenerationCancellation: q,
                renderMode: T,
                upload: H,
                uploadResource: U,
              }),
              (C = (0, b.k)(v.props.id)),
              (S = rK(v.props, rD, v.materializationState)),
              v.logicalSize
                ? v.isDefaultEmpty
                  ? (0, a.jsx)(n.K, { description: S, descriptionId: C })
                  : "full" === v.renderMode
                    ? (0, a.jsx)(r_, {
                        active: v.active,
                        isImportedPlaceholder: v.isImportedPlaceholder,
                        isUploadSession: v.isUploadSession,
                        materializationState: v.materializationState,
                        nodeProps: v.props,
                        onResultsExpandedChange: v.onResultsExpandedChange,
                        onResultVisibilityChange: v.onResultVisibilityChange,
                        queuedGenerationCancellation:
                          v.queuedGenerationCancellation,
                        upload: v.upload,
                      })
                    : (0, a.jsx)(rM, {
                        active: v.active,
                        isUploadSession: v.isUploadSession,
                        logicalHeight: v.logicalSize.height,
                        logicalWidth: v.logicalSize.width,
                        mediaResultLayoutAvailable: (0, M.Ao)(
                          v.props.data.source,
                        ),
                        nodeId: v.props.id,
                        primaryResourceId: v.props.data.resourceId,
                        previewTier:
                          null == (p = v.props.data.imagePreviewQuality)
                            ? void 0
                            : p.normalTier,
                        renderMode: v.renderMode,
                        resourceBatches: v.props.data.resourceBatches,
                        selected: v.props.selected,
                        materializationState: v.materializationState,
                        queuedGenerationCancellation:
                          v.queuedGenerationCancellation,
                        tagPresentation: v.props.data.tagPresentation,
                        title: v.props.data.title,
                        onSelectFromHistory: v.onSelectFromLightHistory,
                        onUploadRetry: v.upload.canRetry
                          ? v.upload.retry
                          : void 0,
                        uploadResource: v.uploadResource,
                      })
                : (0, a.jsx)("span", {
                    className: "sr-only",
                    id: C,
                    children: S,
                  })),
            ee = e.data.layerBoard,
            er =
              null !== $ &&
              void 0 !== ee &&
              "resource" === _ &&
              "micro" !== T &&
              !0 === e.data.mediaPreviewInViewport,
            et = ("full" !== T || G) && !Y,
            ea =
              "compact" === T
                ? 360
                : O || !0 === e.data.isEditing || !0 === e.data.isResizing
                  ? null == (t = e.data.imagePreviewQuality)
                    ? void 0
                    : t.activeTier
                  : null == (o = e.data.imagePreviewQuality)
                    ? void 0
                    : o.normalTier,
            eo = (0, d.useMemo)(() => {
              var r;
              if (
                "full" === T &&
                O &&
                (null == (r = B.featuresApi)
                  ? void 0
                  : r.canvas.imageLayerBoard)
              )
                return { api: B.featuresApi, nodeId: e.id };
            }, [O, B.featuresApi, e.id, T]),
            en = !0 === e.data.isEditing;
          return (0, a.jsx)(rb.a, {
            state: j,
            children: (0, a.jsx)(rE, {
              children: (0, a.jsxs)(E.EY, {
                clearDisplayed: N || !$,
                enabled: !N && null !== $,
                children: [
                  Z,
                  er
                    ? (0, a.jsx)(ro, {
                        controls: "compact" === T && O ? void 0 : J,
                        editing: eo,
                        layerBoard: ee,
                        nodeActive: O,
                        previewTier: ea,
                        visible: et,
                      })
                    : null,
                  k && !Y && !en && A && "uploaded" === e.data.source
                    ? (0, a.jsx)(ry.Q, {
                        mediaKind: "image",
                        nodeId: e.id,
                        resourceId: e.data.resourceId,
                      })
                    : null,
                  (0, a.jsx)(rq, {
                    active: O,
                    postEditActive: en,
                    props: e,
                    resultsExpanded: "full" === T && Y,
                    titleEditorOptions: V,
                    uploadPending: W,
                    writeChromeVisible: k,
                  }),
                ],
              }),
            }),
          });
        }),
        rq = (0, d.memo)(function (e) {
          let {
            active: r,
            postEditActive: t,
            props: o,
            resultsExpanded: n,
            titleEditorOptions: i,
            uploadPending: s,
            writeChromeVisible: l,
          } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(R.bK, {
                candidateOutlineOwner: "surface",
                dragging: o.dragging,
                hidden: n || t,
                nodeId: o.id,
                pressFeedback: !0,
                selected: o.selected,
              }),
              (0, a.jsx)(R.BF, {
                chromeSuppressed: t,
                connectable: o.isConnectable,
                connectionHandleDisabledReason:
                  o.data.connectionHandleDisabledReason,
                connectionHandles: o.data.targetConnectable ? "both" : "source",
                dragging: o.dragging,
                editableTitleNodeId: o.id,
                handlesInteractive: !!(l && !s && !t),
                handlesVisible: !!(l && !s && !t),
                nodeId: o.id,
                multiSelectionConnection: o.data.multiSelectionConnection,
                resultsExpanded: n,
                selected: o.selected,
                showTitleWhenUnselected: !0,
                tagControlsSuppressed: !l && void 0 === o.data.tagPresentation,
                tagPresentation: o.data.tagPresentation,
                title: o.data.title,
                titleEditorOptions: i,
                titleIcon: rF,
                titleEditingActive: r,
                titleVariant: "media",
              }),
            ],
          });
        }),
        r_ = (0, d.memo)(function (e) {
          var r, t, n, i, s, l, u;
          let v,
            p,
            m,
            h,
            f,
            w,
            {
              active: R,
              isImportedPlaceholder: C,
              isUploadSession: S,
              materializationState: D,
              nodeProps: T,
              onResultsExpandedChange: E,
              onResultVisibilityChange: U,
              queuedGenerationCancellation: H,
              upload: q,
            } = e,
            _ = (0, B.W)(T.id, T.data.resourceId, T.data.resourceBatches),
            N =
              ((r = R),
              (v = !0 === T.data.isEditing),
              { active: r && !v, suspended: v }),
            z = (function (e, r, t, a, n, i) {
              var s, l, u, c, v;
              let p,
                g,
                m,
                h,
                b,
                f,
                w,
                R,
                C,
                S,
                B,
                L,
                F,
                D,
                T,
                { active: E, suspended: U } = r,
                { resourceId: H, resourceBatches: q, title: _ } = e.data,
                N = (0, M.Ao)(e.data.source),
                z = (0, d.useMemo)(
                  () => (0, A.Pc)({ resourceBatches: q, resources: [] }),
                  [q],
                ),
                W = (0, d.useMemo)(
                  () => (N ? z.map((e) => (0, A.lv)(e)) : []),
                  [z, N],
                ),
                $ = (0, M.cl)({ availableKeys: W }),
                O = $.expanded && !U,
                V = (0, rI.b6)(e.data.mediaResourceReveal, O),
                Y = E && !0 !== e.dragging,
                K =
                  ((s = {
                    batchViewState: (0, d.useMemo)(
                      () => ({
                        active: Y,
                        expanded: O,
                        preferredBatchKey: $.selectedKey,
                      }),
                      [Y, $.selectedKey, O],
                    ),
                    resourceId: H,
                    resourceBatches: q,
                  }),
                  (p = (0, d.useMemo)(
                    () =>
                      (0, G.Ec)({
                        primaryResourceId: s.resourceId,
                        resourceBatches: s.resourceBatches,
                        active: s.batchViewState.active,
                        preferredBatchKey: s.batchViewState.preferredBatchKey,
                        expanded: s.batchViewState.expanded,
                      }),
                    [s.batchViewState, s.resourceBatches, s.resourceId],
                  )),
                  (g = (0, x.xO)(p)),
                  (m = (0, d.useMemo)(
                    () =>
                      new Map(p.map((e, r) => [e, g.generationQueueStates[r]])),
                    [g.generationQueueStates, p],
                  )),
                  (h = (0, d.useMemo)(
                    () => r2(p, g.resources),
                    [p, g.resources],
                  )),
                  (b = (0, d.useMemo)(
                    () =>
                      (0, G.k3)({
                        primaryResourceId: s.resourceId,
                        resourceBatches: s.resourceBatches,
                        resourceById: h,
                        generationQueueByResourceId: m,
                        requestPending: g.requestPending,
                        batchViewState: s.batchViewState,
                      }),
                    [
                      m,
                      s.batchViewState,
                      s.resourceBatches,
                      s.resourceId,
                      h,
                      g.requestPending,
                    ],
                  )),
                  (l = {
                    batchViewState: s.batchViewState,
                    currentRenderModel: b,
                    currentResourceById: h,
                    generationQueueByResourceId: m,
                    requestPending: g.requestPending,
                    resourceBatches: s.resourceBatches,
                    resourceId: s.resourceId,
                  }),
                  (f = (0, d.useMemo)(
                    () =>
                      (function (e, r) {
                        let t = rZ(e);
                        if (!t) return [];
                        let a = new Set();
                        for (let o of e.batches)
                          if (o.id !== t.id)
                            for (let e of o.resources)
                              e.resourceId !== r && a.add(e.resourceId);
                        return [...a];
                      })(l.currentRenderModel, l.resourceId),
                    [l.currentRenderModel, l.resourceId],
                  )),
                  (w = (0, x.cA)(f)),
                  (R = (0, d.useMemo)(
                    () =>
                      0 === f.length
                        ? l.currentResourceById
                        : new Map([...l.currentResourceById, ...r2(f, w)]),
                    [f, w, l.currentResourceById],
                  )),
                  (C = (0, d.useMemo)(
                    () =>
                      0 === f.length
                        ? l.currentRenderModel
                        : (0, G.k3)({
                            primaryResourceId: l.resourceId,
                            resourceBatches: l.resourceBatches,
                            resourceById: R,
                            generationQueueByResourceId:
                              l.generationQueueByResourceId,
                            requestPending: l.requestPending,
                            batchViewState: l.batchViewState,
                          }),
                    [
                      f,
                      l.currentRenderModel,
                      l.generationQueueByResourceId,
                      l.batchViewState,
                      l.resourceBatches,
                      l.resourceId,
                      l.requestPending,
                      R,
                    ],
                  )),
                  (S = (0, d.useMemo)(
                    () =>
                      (function (e, r) {
                        var t;
                        let a = rZ(e);
                        if (a)
                          return null ==
                            (t = e.batches
                              .filter((e) => e.id !== a.id)
                              .flatMap((e) => e.resources)
                              .find((e) => {
                                var t, a;
                                let o;
                                return (
                                  (t = e),
                                  (a = r),
                                  (o = t.resource),
                                  t.resourceId !== a &&
                                    (null == o ? void 0 : o.status) ===
                                      y.ao.success &&
                                    o.type === y._x.image &&
                                    "selected" === (0, J.U3)(o.urls).status
                                );
                              }))
                            ? void 0
                            : t.resourceId;
                      })(C, l.resourceId),
                    [l.resourceId, C],
                  )),
                  (B = (0, d.useMemo)(() => {
                    if (S)
                      return C.batches
                        .flatMap((e) => e.resources)
                        .find((e) => e.resourceId === S);
                  }, [S, C.batches])),
                  {
                    copyrightHistoryBatchIndex: (0, d.useMemo)(() => {
                      if (!S) return;
                      let e = C.batches.findIndex((e) =>
                        e.resources.some((e) => e.resourceId === S),
                      );
                      return e >= 0 ? e : void 0;
                    }, [S, C.batches]),
                    copyrightHistoryPreview: B,
                    renderModel: C,
                    resourceById: R,
                  }),
                { renderModel: X } = K,
                Q = (0, d.useMemo)(() => {
                  var e;
                  return "empty" === (e = X).state.type
                    ? new Map()
                    : new Map(
                        e.batches.flatMap((e) =>
                          e.resources.flatMap((e) =>
                            (0, eU.dw)(e.resource)
                              ? [[e.resourceId, e.resource]]
                              : [],
                          ),
                        ),
                      );
                }, [X]),
                Z = (0, d.useMemo)(() => new Set(Q.keys()), [Q]),
                ee = (0, d.useMemo)(() => {
                  var e, r;
                  let t, a;
                  return (
                    (e = Q),
                    (r = H),
                    (a = (t = [...e.values()]).find(
                      (e) => e.resource_id === r,
                    )) || (1 === t.length ? t[0] : void 0)
                  );
                }, [Q, H]),
                er = (function (e) {
                  var r, t, a, n, i;
                  let s,
                    l,
                    u,
                    c = (0, I.FY)(),
                    {
                      browsing: v,
                      clearFailedUrls: p,
                      refreshResourceIds: g,
                      regenerableResource: m,
                      regenerableResourcesById: y,
                    } = e,
                    { id: h } = e.props,
                    b = (0, d.useMemo)(
                      () => ({ nodeId: h, viewportPresentation: c.viewport }),
                      [c.viewport, h],
                    ),
                    f = (0, P.h)({
                      active: e.active,
                      browsing: v,
                      editor: c,
                      nodeId: h,
                      resultsAvailable: e.resultsAvailable,
                      suspended: e.resultInteractionSuspended,
                    });
                  (0, rw.M)({
                    editor: c,
                    expandOnClaim: !0,
                    expandFromCompletion: f.expandFromCompletion,
                    nodeId: h,
                    request: e.props.data.mediaResultAutoExpansionRequest,
                    resultsAvailable: e.resultsAvailable,
                    suspended: e.resultInteractionSuspended,
                  });
                  let w = (function (e) {
                      var r, t;
                      let {
                          clearFailedUrls: a,
                          editor: n,
                          nodeId: i,
                          refreshResourceIds: s,
                          regenerableResource: l,
                          regenerableResourcesById: u,
                        } = e,
                        c =
                          null == (r = n.featuresApi)
                            ? void 0
                            : r.canvas.resourceRegeneration,
                        v =
                          null == (t = n.featuresApi)
                            ? void 0
                            : t.canvas.gestures,
                        p = (0, d.useCallback)(
                          (e) => {
                            var r, t, a, n;
                            let s =
                              null == c
                                ? void 0
                                : c.regenerate({ nodeId: i, resource: e });
                            (s &&
                              (0, o.A)(
                                null == (r = e.image) ? void 0 : r.gen,
                              ) &&
                              (null == v ||
                                v.declare({
                                  surface: "imagePostEdit",
                                  gesture: "product_replacement_retry",
                                  target: { nodeIds: [i] },
                                })),
                              s &&
                                !(0, o.A)(
                                  null == (t = e.image) ? void 0 : t.gen,
                                ) &&
                                (null == (n = e.image) || null == (a = n.gen)
                                  ? void 0
                                  : a.mode) === 13 &&
                                (null == v ||
                                  v.declare({
                                    surface: "ecommerceMainImage",
                                    gesture: "ecommerce_retry_generate",
                                    target: { nodeIds: [i] },
                                    sourceResourceId: e.resource_id,
                                  })));
                          },
                          [c, i, v],
                        ),
                        g = (0, d.useCallback)(
                          (e) => {
                            (a(), n.refreshResourceIds(e));
                          },
                          [a, n],
                        );
                      return {
                        handleCurrentBatchRetry: (0, d.useCallback)(() => {
                          l && c ? p(l) : s.length > 0 && g(s);
                        }, [g, s, l, c, p]),
                        handleRegenerateResource: (0, d.useCallback)(
                          (e) => {
                            let r = u.get(e);
                            r && c && p(r);
                          },
                          [u, c, p],
                        ),
                        handleRetryResourceIds: g,
                        resourceRegeneration: c,
                      };
                    })({
                      clearFailedUrls: p,
                      editor: c,
                      nodeId: h,
                      refreshResourceIds: g,
                      regenerableResource: m,
                      regenerableResourcesById: y,
                    }),
                    x =
                      ((r = c),
                      (t = h),
                      (a = e.resultExpanded),
                      (n = f.collapseAfterSelection),
                      (s = (0, k.U)("image", t, a)),
                      (l = (0, j.t)("image", a, t)),
                      (u = (0, d.useCallback)(
                        async (e) => {
                          await n(async () => {
                            var a;
                            let o =
                              null == (a = r.featuresApi)
                                ? void 0
                                : a.canvas.actions.selectResourceCandidate;
                            return (
                              !!(null == o ? void 0 : o.getState().available) &&
                              (
                                await o.execute({
                                  nodeId: t,
                                  nodeType: "image",
                                  resourceId: e,
                                })
                              ).ok
                            );
                          });
                        },
                        [n, r, t],
                      )),
                      {
                        copyResourceDisabledReason: s.disabledReason,
                        getDownloadResourceState: l.getDownloadResourceState,
                        handleCopyResource: s.onCopyResource,
                        handleDownloadResource: l.onDownloadResource,
                        handleSelectResource: u,
                      });
                  (0, rS.B)({
                    browsing: v,
                    displayedIndex: e.displayedBatchIndex,
                  });
                  let R =
                      ((i = {
                        browsing: v,
                        historyBatchIndex: e.copyrightHistoryBatchIndex,
                      }),
                      (0, d.useCallback)(() => {
                        void 0 !== i.historyBatchIndex &&
                          i.browsing.selectAtIndex({
                            expandWhenCollapsed: !1,
                            index: i.historyBatchIndex,
                          });
                      }, [i.browsing, i.historyBatchIndex])),
                    C = (function (e) {
                      let r = (0, d.useCallback)(
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
                        ),
                        t = (0, d.useMemo)(
                          () =>
                            e.request
                              ? e.resourceBatches.map((e) => ({
                                  key: (0, A.lv)(e),
                                  resourceIds: e.resources.map((e) => {
                                    let { resourceId: r } = e;
                                    return r;
                                  }),
                                }))
                              : [],
                          [e.request, e.resourceBatches],
                        );
                      if (e.request)
                        return {
                          acknowledge: r,
                          batches: t,
                          collapseFromLocation:
                            e.expansionControl.collapseFromLocation,
                          expandFromLocation:
                            e.expansionControl.expandFromLocation,
                          request: e.request,
                          selectAtIndex: e.browsing.selectAtIndex,
                        };
                    })({
                      browsing: v,
                      editor: c,
                      expansionControl: f,
                      nodeId: h,
                      request: e.props.data.mediaResourceReveal,
                      resourceBatches: e.resultsAvailable ? e.batchViews : [],
                    });
                  return {
                    expandedFromCompletion: f.expandedFromCompletion,
                    handleCopyrightAcknowledgement: R,
                    ...x,
                    ...e.queuedGenerationCancellation,
                    handleToggleExpansion: f.toggle,
                    ...w,
                    resourceReveal: C,
                    viewportDecoration: b,
                  };
                })({
                  active: E,
                  browsing: $,
                  clearFailedUrls: t,
                  copyrightHistoryBatchIndex: K.copyrightHistoryBatchIndex,
                  displayedBatchIndex: X.displayedBatchIndex,
                  props: e,
                  queuedGenerationCancellation: n,
                  refreshResourceIds:
                    "error" === X.state.type ? X.state.refreshResourceIds : [],
                  regenerableResource: ee,
                  regenerableResourcesById: Q,
                  batchViews: z,
                  resultsAvailable: W.length > 0,
                  resultInteractionSuspended: U,
                  resultExpanded: O,
                }),
                {
                  asyncHistoryProjection: et,
                  hasIndependentPrimaryPreview: ea,
                  resultCollectionCount: eo,
                } = ((L = r0(
                  (u = {
                    batchViews: z,
                    renderModel: X,
                    resourceBatches: q,
                    resourceById: K.resourceById,
                    resourceId: H,
                    resultBrowsingAvailable: N,
                  }).renderModel,
                )),
                (F =
                  ((c = u.resourceId),
                  (v = u.renderModel.batches),
                  void 0 !== c &&
                    v.length > 0 &&
                    !v.some((e) =>
                      e.resources.some((e) => e.resourceId === c),
                    ))),
                (D = (0, rf.r)({
                  currentBatchKey: null == L ? void 0 : L.id,
                  currentResultCount:
                    (null == L ? void 0 : L.resources.length) ?? 0,
                  enabled:
                    u.resultBrowsingAvailable &&
                    ("loading" === u.renderModel.state.type ||
                      "queued" === u.renderModel.state.type ||
                      "error" === u.renderModel.state.type),
                  hasIndependentPrimaryPreview: F,
                  includeCurrentBatchSnapshot:
                    "loading" === u.renderModel.state.type ||
                    "queued" === u.renderModel.state.type,
                  isBrowsableResource: rJ,
                  knownResourcesById: u.resourceById,
                  primaryResourceId: u.resourceId,
                  resourceBatches: u.resourceBatches,
                })),
                (T = (0, d.useMemo)(() => {
                  let e = {
                    batchResultCounts: u.batchViews.map(
                      (e) => e.resources.length,
                    ),
                    hasIndependentPrimaryPreview: F,
                  };
                  return void 0 === u.resourceId
                    ? (0, M.Zl)(e)
                    : (0, M.Zl)({ ...e, emptyFallbackCount: 1 });
                }, [F, u.batchViews, u.resourceId])),
                {
                  asyncHistoryProjection: D,
                  hasIndependentPrimaryPreview: F,
                  resultCollectionCount: T,
                }),
                en = H ? K.resourceById.get(H) : void 0;
              return {
                ...er,
                browsing: $,
                asyncHistoryProjection: et,
                canRetryUpload: i.canRetry,
                copyrightHistoryBatchIndex: K.copyrightHistoryBatchIndex,
                copyrightHistoryPreview: K.copyrightHistoryPreview,
                handleUploadRetry: i.retry,
                hasIndependentPrimaryPreview: ea,
                highlightedResourceId: null == V ? void 0 : V.resourceId,
                revealRequest: V,
                isUploadSession: a,
                regenerableResource: ee,
                regenerableResourceIds: Z,
                regenerableResourcesById: Q,
                renderModel: X,
                resultBrowsingAvailable: N,
                resultCollectionCount: eo,
                resultExpanded: O,
                title: _,
                uploadResource: a ? en : i.resource,
              };
            })(T, N, _.clearFailedUrls, S, H, q);
          ((t = z.browsing.expanded),
            (n = E),
            (0, d.useLayoutEffect)(() => (n(t), () => n(!1)), [t, n]));
          let W = z.renderModel.state,
            $ = S && "result" !== W.type,
            O = C || $ || "runtime-loading" === D || "runtime-error" === D;
          ((i = "result" === W.type && !O),
            (s = U),
            (0, d.useLayoutEffect)(() => s(i), [s, i]));
          let V =
              ((l = {
                nodeProps: T,
                renderModel: z.renderModel,
                resultBrowsingAvailable: z.resultBrowsingAvailable,
                resultExpanded: z.resultExpanded,
              }),
              (p = (0, I.uq)()),
              (m = c(
                null == (u = (0, I.FY)().featuresApi)
                  ? void 0
                  : u.canvas.panoramaPreview,
                l.nodeProps.id,
                l.nodeProps.selected,
              )),
              (h = rQ(l.nodeProps)),
              (f = (0, d.useMemo)(
                () =>
                  (function (e) {
                    if (void 0 === e.primaryResourceId) return [];
                    for (let r of e.renderModel.batches)
                      for (let t of r.resources)
                        if (t.resourceId === e.primaryResourceId)
                          return [t.resource];
                    var r,
                      t = e.renderModel;
                    return "result" === t.state.type
                      ? t.state.currentBatch.resources.map((e) => e.resource)
                      : "loading" === t.state.type ||
                          "queued" === t.state.type ||
                          "error" === t.state.type
                        ? ((null == (r = t.state.batch)
                            ? void 0
                            : r.resources.map((e) => e.resource)) ?? [])
                        : [];
                  })({
                    primaryResourceId: l.nodeProps.data.resourceId,
                    renderModel: l.renderModel,
                  }),
                [l.nodeProps.data.resourceId, l.renderModel],
              )),
              (w = (0, rx.A)({
                currentHeight: (null == h ? void 0 : h.height) ?? 0,
                currentWidth: (null == h ? void 0 : h.width) ?? 0,
                enabled: null !== h && (l.resultBrowsingAvailable || m),
                displayAspectRatio: m ? 16 / 9 : void 0,
                nodeId: l.nodeProps.id,
                nodeType: "image",
                preferredResourceId: l.nodeProps.data.resourceId,
                previewTransitionPace: m ? "immersive-enter" : "element",
                resources: f,
              })),
              h
                ? w
                : ((0, F.JW)(p, L.O, l.nodeProps.id, {
                    nodeId: l.nodeProps.id,
                    reason: "missing_logical_dimensions",
                  }),
                  null)),
            Y = (0, b.k)(T.id),
            K = rK(T, z.renderModel.counts, D);
          if (!V)
            return (0, a.jsx)("span", {
              className: "sr-only",
              id: Y,
              children: K,
            });
          let X = "empty" === W.type && "failed" === D,
            Q = "empty" === W.type && "empty" === D && !C,
            { canRecover: Z, retryLabel: ee } = (function (e) {
              let { viewModel: r } = e,
                { state: t } = r.renderModel,
                a =
                  r.regenerableResource && r.resourceRegeneration
                    ? (0, g.YSX)(r.title)
                    : void 0;
              return {
                canRecover:
                  void 0 !== a ||
                  ("error" === t.type && t.refreshResourceIds.length > 0),
                retryLabel: a,
              };
            })({ viewModel: z });
          return (0, a.jsxs)(a.Fragment, {
            children: [
              z.resourceReveal
                ? (0, a.jsx)(rI.fu, { ...z.resourceReveal })
                : null,
              (0, a.jsx)(rN, {
                active: R,
                resultInteractionActive: N.active,
                canRecover: Z,
                description: K,
                descriptionId: Y,
                isEmpty: Q,
                isUnrecoverablePostEditFailure: X,
                isUploadPlaceholder: O,
                logicalSize: V,
                nodeProps: T,
                previewFailures: _,
                retryLabel: ee,
                state: W,
                viewModel: z,
              }),
            ],
          });
        });
      function rN(e) {
        let {
          active: r,
          resultInteractionActive: t,
          canRecover: o,
          description: n,
          descriptionId: i,
          isEmpty: s,
          isUnrecoverablePostEditFailure: l,
          isUploadPlaceholder: d,
          logicalSize: u,
          nodeProps: c,
          previewFailures: v,
          retryLabel: p,
          state: g,
          viewModel: m,
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(rW, {
              active: r,
              description: n,
              descriptionId: i,
              isEmpty: s,
              isUnrecoverablePostEditFailure: l,
              logicalSize: u,
              nodeProps: c,
              viewModel: m,
              isUploadPlaceholder: d,
            }),
            (0, a.jsx)(rz, {
              active: r,
              canRecover: o,
              description: n,
              descriptionId: i,
              logicalSize: u,
              nodeProps: c,
              previewFailures: v,
              retryLabel: p,
              state: g,
              viewModel: m,
              visible: !d,
            }),
            (0, a.jsx)(rG, {
              active: t,
              description: n,
              descriptionId: i,
              logicalSize: u,
              nodeProps: c,
              previewFailures: v,
              viewModel: m,
              visible: !d,
            }),
          ],
        });
      }
      function rz(e) {
        let {
          active: r,
          canRecover: t,
          description: o,
          descriptionId: n,
          logicalSize: i,
          nodeProps: s,
          previewFailures: l,
          retryLabel: d,
          state: u,
          viewModel: c,
          visible: v,
        } = e;
        return v &&
          ("loading" === u.type || "queued" === u.type || "error" === u.type)
          ? (0, a.jsx)(r$, {
              active: r,
              canRecover: t,
              description: o,
              descriptionId: n,
              logicalSize: i,
              nodeProps: s,
              previewFailures: l,
              retryLabel: d,
              state: u,
              viewModel: c,
            })
          : null;
      }
      function rW(e) {
        let {
            active: r,
            description: t,
            descriptionId: o,
            isEmpty: i,
            isUnrecoverablePostEditFailure: s,
            isUploadPlaceholder: l,
            logicalSize: d,
            nodeProps: u,
            viewModel: c,
          } = e,
          v = null;
        return (
          s &&
            (v = (0, a.jsx)(eo, {
              announce: r,
              description: t,
              descriptionId: o,
              message: (0, g.aMq)(),
              selected: u.selected,
              title: c.title,
            })),
          (0, a.jsxs)(a.Fragment, {
            children: [
              i ? (0, a.jsx)(n.K, { description: t, descriptionId: o }) : null,
              v,
              (0, a.jsx)(rX, {
                active: r,
                description: t,
                descriptionId: o,
                logicalHeight: d.height,
                logicalWidth: d.width,
                nodeId: u.id,
                viewModel: c,
                visible: l,
              }),
            ],
          })
        );
      }
      function r$(e) {
        var r, t, o, n, i, s, l, d, u;
        let c,
          {
            active: v,
            canRecover: p,
            description: g,
            descriptionId: m,
            logicalSize: h,
            nodeProps: b,
            previewFailures: f,
            retryLabel: I,
            state: w,
            viewModel: x,
          } = e;
        if ("queued" === w.type)
          c = (0, a.jsx)(rY, {
            active: v,
            description: g,
            descriptionId: m,
            logicalSize: h,
            state: w,
            viewModel: x,
          });
        else if ("loading" === w.type) {
          c = (0, a.jsx)(et, {
            announce: v,
            description: g,
            descriptionId: m,
            logicalHeight: h.height,
            logicalWidth: h.width,
            appearance: w.appearance,
            processingDurationMs: (0, G.n$)(
              null == (t = w.batch) ||
                null ==
                  (r = t.resources.find((e) => {
                    var r;
                    return (
                      (null == (r = e.resource) ? void 0 : r.status) ===
                      y.ao.running
                    );
                  }))
                ? void 0
                : r.resource,
            ),
            selected: b.selected,
            processingMode: w.processingMode,
            startedAtMs: w.startedAtMs,
            title: x.title,
          });
        } else
          c = (0, a.jsx)(rV, {
            announce: v,
            canRecover: p,
            description: g,
            descriptionId: m,
            nodeProps: b,
            previewFailures: f,
            retryLabel: I,
            state: w,
            viewModel: x,
          });
        return void 0 !== w.batch &&
          ((o = w),
          (n = x),
          (0, M.Jg)({
            pendingCollectionCount:
              "loading" === o.type || "queued" === o.type
                ? n.asyncHistoryProjection.collectionCount
                : 0,
            browsableBatchCount: n.asyncHistoryProjection.browsableBatchCount,
            browsableHistoryResultCount:
              n.asyncHistoryProjection.browsableHistoryResultCount,
            browsingAvailable: n.resultBrowsingAvailable,
            expandedFromCompletion: n.expandedFromCompletion,
            hasIndependentPrimaryPreview: n.hasIndependentPrimaryPreview,
            resultExpanded: n.resultExpanded,
            showFailureRecovery: rO(o),
          })) &&
          void 0 !== w.batch
          ? (0, a.jsx)(en, {
              active: v,
              batch: w.batch,
              batches: x.renderModel.batches,
              collapsedContent: c,
              collectionCount:
                ((i = w),
                (s = x),
                rO(i)
                  ? s.resultCollectionCount
                  : s.asyncHistoryProjection.collectionCount),
              expanded: x.resultExpanded,
              highlightedResourceId: x.highlightedResourceId,
              revealRequest: x.revealRequest,
              logicalHeight: h.height,
              logicalWidth: h.width,
              motion: x.browsing.motion,
              regenerableResourceIds: x.regenerableResourceIds,
              title: x.title,
              viewportDecoration: x.viewportDecoration,
              onRegenerateResource: x.handleRegenerateResource,
              onSelectResource: x.handleSelectResource,
              onToggleExpansion: x.handleToggleExpansion,
            })
          : ((l = c),
            (d = w),
            (u = x.asyncHistoryProjection.collectionCount),
            ("loading" !== d.type && "queued" !== d.type) || u <= 1
              ? l
              : (0, a.jsx)(rh.z, { count: u, children: l }));
      }
      function rO(e) {
        var r;
        return (
          "error" === e.type &&
          ((null == (r = e.batch) ? void 0 : r.resources.length) ?? 0) > 1
        );
      }
      function rV(e) {
        let r,
          t,
          o,
          n,
          i,
          s,
          {
            announce: l,
            canRecover: d,
            description: u,
            descriptionId: c,
            nodeProps: v,
            previewFailures: p,
            retryLabel: m,
            state: y,
            viewModel: h,
          } = e,
          b = (function (e, r) {
            if (
              "input_text_copyright" === e.failureReason &&
              r.copyrightHistoryPreview
            )
              return { label: (0, g.z76)(r.title), text: (0, g.Djo)() };
          })(y, h);
        if (
          (b && (r = { ...b, onAcknowledge: h.handleCopyrightAcknowledgement }),
          r)
        )
          ((t = h.copyrightHistoryPreview),
            (o = p),
            (s = h.handleRetryResourceIds));
        else if (d) {
          var f;
          ((n = h.handleCurrentBatchRetry),
            (i = null == (f = h.regenerableResource) ? void 0 : f.resource_id));
        }
        return (0, a.jsx)(eo, {
          acknowledgement: r,
          announce: l,
          description: u,
          descriptionId: c,
          historyPreview: t,
          message: y.message,
          previewFailures: o,
          retryLabel: m,
          retryResourceId: i,
          selected: v.selected,
          title: h.title,
          onRetry: n,
          onRetryResourceIds: s,
        });
      }
      function rY(e) {
        var r, t;
        let o,
          {
            active: n,
            description: i,
            descriptionId: s,
            logicalSize: l,
            state: d,
            viewModel: u,
          } = e,
          c = u.queuedGenerationCancellation;
        return (
          (null == c ? void 0 : c.getState(d.resourceId).available) &&
            (o = u.handleCancelQueuedResource),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(ea, {
                active: n,
                description: i,
                descriptionId: s,
                logicalHeight: l.height,
                logicalWidth: l.width,
                queue: d.queue,
                processingDurationMs: (0, G.n$)(
                  null == (t = d.batch) ||
                    null ==
                      (r = t.resources.find(
                        (e) => e.resourceId === d.resourceId,
                      ))
                    ? void 0
                    : r.resource,
                ),
                resourceId: d.resourceId,
                processingMode: d.processingMode,
                startedAtMs: d.startedAtMs,
                title: u.title,
                onCancel: o,
              }),
              u.cancellationFailureAlert,
            ],
          })
        );
      }
      function rK(e, r, t) {
        return (0, eE.HT)(
          (function (e) {
            if ("failed" === e.materializationState)
              return (0, g.Bgz)({
                resourceCount: 0,
                selected: e.selected,
                status: "failed",
              });
            let { counts: r, selected: t } = e;
            return (0, g.rHd)({
              errorCount: r.error,
              pendingCount: r.pending,
              readyCount: r.ready,
              resourceCount: r.ready + r.pending + r.error,
              selected: t,
            });
          })({ counts: r, materializationState: t, selected: e.selected }),
          e.data.tagPresentation,
        );
      }
      function rG(e) {
        var r;
        let {
            active: t,
            description: o,
            descriptionId: n,
            logicalSize: i,
            nodeProps: s,
            previewFailures: l,
            viewModel: d,
            visible: u,
          } = e,
          c =
            null == (r = (0, I.FY)().featuresApi)
              ? void 0
              : r.canvas.panoramaPreview,
          p = eR(s.id);
        if (!u || "result" !== d.renderModel.state.type) return null;
        let { browsing: g, resultExpanded: m } = d,
          y = s.data.imagePreviewQuality,
          h =
            t || m || !0 === s.data.isEditing || !0 === s.data.isResizing
              ? null == y
                ? void 0
                : y.activeTier
              : null == y
                ? void 0
                : y.normalTier;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(es, {
              copyrightHistoryPreview: d.copyrightHistoryPreview,
              collectionCount: d.resultCollectionCount,
              description: o,
              descriptionId: n,
              active: t,
              expanded: m,
              motion: g.motion,
              hasIndependentPrimaryPreview: d.hasIndependentPrimaryPreview,
              highlightedResourceId: d.highlightedResourceId,
              revealRequest: d.revealRequest,
              logicalHeight: i.height,
              logicalWidth: i.width,
              primaryResourceId: s.data.resourceId,
              previewFailures: l,
              regenerableResourceIds: d.regenerableResourceIds,
              previewTier: h,
              previewUpgradeEnabled: !0 === s.data.mediaPreviewInViewport,
              resultBrowsingAvailable: d.resultBrowsingAvailable,
              selected: s.selected,
              state: d.renderModel.state,
              title: d.title,
              viewportDecoration: d.viewportDecoration,
              copyResourceDisabledReason: d.copyResourceDisabledReason,
              getDownloadResourceState: d.getDownloadResourceState,
              onCopyResource: d.handleCopyResource,
              onCopyrightAcknowledgement: d.handleCopyrightAcknowledgement,
              onDownloadResource: d.handleDownloadResource,
              onRegenerateResource: d.handleRegenerateResource,
              onRetryResourceIds: d.handleRetryResourceIds,
              onSelectResource: d.handleSelectResource,
              onPrimaryPreviewReady: p,
              onToggleExpansion: d.handleToggleExpansion,
            }),
            m ? null : (0, a.jsx)(v, { nodeId: s.id, session: c }),
          ],
        });
      }
      function rX(e) {
        let {
          active: r,
          description: t,
          descriptionId: o,
          logicalHeight: n,
          logicalWidth: i,
          nodeId: s,
          viewModel: l,
          visible: d,
        } = e;
        return d
          ? (0, a.jsx)(ee, {
              active: r,
              announceFailure: l.isUploadSession,
              announcePending: l.isUploadSession,
              description: t,
              descriptionId: o,
              logicalHeight: n,
              logicalWidth: i,
              nodeId: s,
              renderMode: "full",
              resource: l.uploadResource,
              title: l.title,
              onRetry: l.canRetryUpload ? l.handleUploadRetry : void 0,
            })
          : null;
      }
      function rQ(e) {
        return void 0 === e.width || void 0 === e.height
          ? null
          : { width: e.width, height: e.height };
      }
      function rJ(e) {
        return (
          e.status === y.ao.success &&
          e.type === y._x.image &&
          "selected" === (0, J.U3)(e.urls).status
        );
      }
      function rZ(e) {
        var r, t;
        let a = r0(e);
        if (a) {
          if (
            (null ==
            (r = (function (e) {
              let r = r0(e);
              if (r) return r1(r);
            })(e))
              ? void 0
              : r.failureReason) === "input_text_copyright"
          )
            return a;
          for (let r = e.batches.length - 1; r >= 0; r -= 1) {
            let a = e.batches[r];
            if (
              a &&
              (null == (t = r1(a)) ? void 0 : t.failureReason) ===
                "input_text_copyright"
            )
              return a;
          }
        }
      }
      function r0(e) {
        let r = e.state;
        return "result" === r.type
          ? r.currentBatch
          : "loading" === r.type || "queued" === r.type || "error" === r.type
            ? r.batch
            : void 0;
      }
      function r1(e) {
        let r = e.resources.flatMap((e) => {
          let r = (0, G.Iw)(e);
          return r ? [r] : [];
        });
        return (
          r.find((e) => "typeMismatch" === e.reason) ??
          r.find((e) => "failed" === e.reason) ??
          r.find((e) => "canceled" === e.reason)
        );
      }
      function r2(e, r) {
        let t = new Map();
        return (
          e.forEach((e, a) => {
            t.set(e, r[a]);
          }),
          t
        );
      }
    },
    4030(e, r, t) {
      var a = t(94139),
        o = t(40627);
      function n(e, r) {
        if (!r) return (0, o.PE)(e);
        let t = s(e, (0, a.Qt)(r));
        return "selected" === t.status ? t.url : void 0;
      }
      function i(e) {
        let r = s(e, "original");
        return "selected" === r.status ? r.url : void 0;
      }
      function s(e, r) {
        return void 0 === r ? (0, o.yw)(e, "full") : (0, o.A0)(e, r);
      }
      function l(e, r) {
        if (void 0 === r) {
          let r = (0, o.yw)(e, "full");
          return "selected" === r.status
            ? [{ source: r.source, url: r.url }]
            : [];
        }
        return (0, o.wA)(e, r);
      }
      function d(e) {
        return (0, o.yw)(e, "compact");
      }
      function u(e, r) {
        let t = s(e, r);
        return "selected" !== t.status ||
          "smallest_variant" === t.reason ||
          "largest_variant_fallback" === t.reason
          ? null
          : t.url;
      }
      function c(e) {
        return (0, o.DX)(e, 1 / 0);
      }
      t.d(r, {
        Ho: () => d,
        RB: () => n,
        U3: () => s,
        gn: () => i,
        l8: () => u,
        qq: () => l,
        xw: () => c,
      });
    },
  },
]);
