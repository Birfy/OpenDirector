"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2895],
  {
    68227(e, n, a) {
      var t = a(90561),
        r = a(24548),
        s = a(87429),
        o = a(47645),
        i = a(172),
        l = a(93998),
        d = a(60794),
        c = a(74780),
        u = a(7379);
      let p = `absolute inset-0 flex items-center justify-center overflow-hidden rounded-canvas-media-node-preview ${u.$o}`,
        v = (0, s.memo)(function (e) {
          let { writeChromeVisible: n } = (0, d.A1)(),
            {
              active: a,
              description: r,
              descriptionId: s,
              errorIcon: o,
              testIdPrefix: l,
              texts: p,
              title: v,
              resource: f,
              onRetry: h,
            } = e,
            b = g(f, v);
          if ((0, c.l5)(f)) return (0, t.jsx)(m, { ...e });
          if (!f) throw Error("Terminal media upload view requires a resource");
          let j = x(f, p),
            N = a || !0 === e.announceFailure,
            y = null;
          return (
            h &&
              n &&
              (y = (0, t.jsxs)(i.$nd, {
                "aria-label": p.retryNode(b),
                className:
                  "nodrag size-8 rounded-full bg-transparent p-0 text-dreamina-text-placeholder shadow-none hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-secondary",
                size: "icon",
                tabIndex: a ? void 0 : -1,
                type: "button",
                variant: "text",
                onClick: h,
                children: [
                  o,
                  (0, t.jsx)("span", {
                    className: "sr-only",
                    children: p.retry(),
                  }),
                ],
              })),
            (0, t.jsxs)("div", {
              "aria-label": r,
              className: `${e.surfaceClassName ?? u.S1} flex-col gap-octo-2`,
              "data-testid": `${l}-upload-error`,
              id: s,
              role: r ? "group" : void 0,
              children: [
                y,
                (0, t.jsx)("p", {
                  elementtiming: "canvas-initial-content",
                  "data-canvas-content-evidence": "element",
                  "data-canvas-content-state": "business_error",
                  className: `max-w-canvas-media-node-message ${u.ER}`,
                  children: j,
                }),
                (0, t.jsx)("span", {
                  "aria-label": N
                    ? p.statusAnnouncement({ title: b, message: j })
                    : void 0,
                  className: "sr-only",
                  role: N ? "alert" : void 0,
                  children: j,
                }),
              ],
            })
          );
        });
      function m(e) {
        var n, a, r, d, c, v, m, x, h, b, j, N;
        let y,
          C,
          w = (0, l.FY)(),
          [I, _] = (0, s.useState)(),
          A = (0, s.useRef)(),
          $ = e.active || !0 === e.announcePending,
          L = (function (e, n) {
            if ((null == e ? void 0 : e.progress) === void 0)
              return n.waiting();
            let a = e.progress;
            return a >= 100 ? n.processing() : f(e, n)(a);
          })(e.resource, e.texts),
          S =
            ((a = e.pendingSurface),
            (r = e.surfaceClassName),
            "result" === a ? p : (r ?? u.S1)),
          T = (null == (n = e.previewUrl) ? void 0 : n.trim()) || void 0,
          D = T && T !== I ? T : void 0,
          E = !!(D || e.previewContent),
          F =
            ((d = E),
            (c = e.visuallyHidePendingMessage),
            d || c ? "sr-only" : `max-w-canvas-media-node-message ${u.ER}`),
          P = e.texts.statusAnnouncement({
            title: g(e.resource, e.title),
            message:
              void 0 ===
                (y =
                  null ==
                  (m = (v = {
                    message: L,
                    resource: e.resource,
                    texts: e.texts,
                  }).resource)
                    ? void 0
                    : m.progress) || y >= 100
                ? v.message
                : f(v.resource, v.texts)(25 * Math.floor(y / 25)),
          }),
          R = null,
          z = e.icon;
        return (
          E &&
            ((R = (0, t.jsxs)("div", {
              className: "absolute inset-0",
              children: [
                e.previewContent ??
                  (0, t.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: "size-full object-cover",
                    src: D,
                    tabIndex: -1,
                    onError: () => {
                      var n, a;
                      A.current === D ||
                        ((A.current = D),
                        _(D),
                        e.nodeId &&
                          e.resourceId &&
                          (null == (a = w.featuresApi) ||
                            null == (n = a.app) ||
                            n.observability.facts.emit(o.Lo, {
                              nodeId: e.nodeId,
                              resourceId: e.resourceId,
                              renderMode: e.renderMode ?? "full",
                              selectionSource: "base",
                              surface: "upload-preview",
                              reason: "load",
                            })));
                    },
                  }),
                (0, t.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "pointer-events-none absolute inset-0 bg-canvas-media-upload-preview-mask",
                }),
              ],
            })),
            void 0 === e.pendingContent &&
              (z =
                void 0 !==
                  (C = null == (x = e.resource) ? void 0 : x.progress) &&
                C < 100
                  ? (0, t.jsx)(i.C8A, { size: 32, value: C })
                  : (0, t.jsx)(i.bQB, {
                      className: "size-8 text-dreamina-on-media-text-primary",
                    }))),
          (0, t.jsxs)("div", {
            "aria-atomic": $ ? "true" : void 0,
            "aria-busy": "true",
            "aria-label": $
              ? ((h = P), (b = e.description) ? `${h}. ${b}` : h)
              : e.description,
            className: `${S} flex-col`,
            "data-canvas-content-evidence": "frame_estimate",
            "data-canvas-content-state": "generating",
            "data-testid": `${e.testIdPrefix}-uploading`,
            id: e.descriptionId,
            role:
              ((j = $),
              (N = e.description),
              j ? "status" : N ? "group" : void 0),
            children: [
              R,
              (0, t.jsx)("div", {
                className:
                  "relative z-octo-base flex flex-col items-center gap-octo-2",
                children:
                  e.pendingContent ??
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      z,
                      (0, t.jsx)("p", { className: F, children: L }),
                    ],
                  }),
              }),
            ],
          })
        );
      }
      function g(e, n) {
        var a;
        return (null == e || null == (a = e.name) ? void 0 : a.trim()) || n;
      }
      function f(e, n) {
        var a;
        return (null == e || null == (a = e.nodeUpload) ? void 0 : a.stage) ===
          "preparing"
          ? n.preparing
          : n.progress;
      }
      function x(e, n) {
        return e.status === r.ao.canceled
          ? n.cancelled()
          : "fileTooLarge" === e.failureReason
            ? n.fileTooLarge()
            : "unsupportedType" === e.failureReason
              ? n.unsupportedType()
              : "uploadTimedOut" === e.failureReason
                ? n.timedOut()
                : n.failed();
      }
      a.d(n, { r: () => x }, { f: v });
    },
    26036(e, n, a) {
      var t = a(90561),
        r = a(24548),
        s = a(87429),
        o = a(66876),
        i = a(62799),
        l = a(93998),
        d = a(40627),
        c = a(18993),
        u = a(91229),
        p = a(68227),
        v = a(85817);
      let m = (0, s.memo)(function (e) {
        return e.data.resourceId
          ? (0, t.jsx)(g, { ...e, resourceId: e.data.resourceId })
          : (0, t.jsx)(h, { props: e, children: (0, t.jsx)(c.W, {}) });
      });
      function g(e) {
        return (0, l.FY)().isSessionNode(e.id)
          ? (0, t.jsx)(f, { ...e })
          : (0, t.jsx)(h, { props: e, children: (0, t.jsx)(c.W, {}) });
      }
      function f(e) {
        let n = (0, v.V)(e.id, e.selected),
          a = (0, d.cA)([e.resourceId])[0],
          s =
            (null == a ? void 0 : a.status) === r.ao.failed ||
            (null == a ? void 0 : a.status) === r.ao.canceled;
        return (0, t.jsx)(h, {
          errorCount: +!!s,
          pendingCount: +!s,
          props: e,
          resourceCount: 1,
          children: (0, t.jsx)(p.f, {
            active: n,
            announceFailure: !0,
            announcePending: !0,
            errorIcon: (0, t.jsx)(i.Yu, {}),
            icon: (0, t.jsx)(i.r2, {}),
            resource: a,
            testIdPrefix: "file-node",
            texts: x,
            title: e.data.title,
          }),
        });
      }
      let x = {
        waiting: o.hYA,
        processing: o.xEt,
        progress: o.F0w,
        preparing: o.bkw,
        cancelled: o.JsD,
        fileTooLarge: o.F22,
        unsupportedType: o.PLA,
        timedOut: o.$Gt,
        failed: o.VNs,
        retry: o.qdo,
        retryNode: o.y1g,
        statusAnnouncement: o.o_J,
      };
      function h(e) {
        let {
          children: n,
          errorCount: a = 0,
          pendingCount: r = 0,
          props: s,
          resourceCount: o = 0,
        } = e;
        return (0, t.jsx)(u.Jm, {
          connectable: s.isConnectable,
          connectionHandleDisabledReason: s.data.connectionHandleDisabledReason,
          dragging: s.dragging,
          multiSelectionConnection: s.data.multiSelectionConnection,
          nodeId: s.id,
          title: s.data.title,
          resourceCount: o,
          readyCount: 0,
          pendingCount: r,
          errorCount: a,
          selected: s.selected,
          tagPresentation: s.data.tagPresentation,
          children: n,
        });
      }
      a.d(n, {}, { FileFlowNode: m });
    },
    18993(e, n, a) {
      var t = a(90561);
      function r() {
        return (0, t.jsx)("div", {
          "aria-hidden": "true",
          className:
            "min-h-canvas-zero h-canvas-file-node-placeholder w-full flex-1 bg-dreamina-canvas-bg",
          "data-canvas-content-evidence": "frame_estimate",
          "data-testid": "file-flow-node-placeholder",
        });
      }
      a.d(n, { W: () => r });
    },
  },
]);
