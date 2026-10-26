"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2179],
  {
    96981(e, t, i) {
      i.d(t, { ToolFlowNode: () => es });
      var a = i(90561),
        s = i(10503),
        n = i(87429),
        l = i(52310),
        o = i(55793),
        r = i(172),
        d = i(93998),
        u = i(60794),
        c = i(88313),
        h = i(92939),
        v = i(96665),
        p = i(55865),
        m = i(2221),
        g = i(78125),
        f = i(40627),
        b = i(85817),
        y = i(91229),
        x = i(1509),
        C = i(96783),
        w = i(37052);
      let j = (0, n.memo)(function (e) {
        var t, i;
        let {
            runtime: s,
            restoreFocusRef: l,
            previewSource: o,
            onCloseAutoFocus: r,
          } = e,
          d = (0, n.useSyncExternalStore)(
            s.subscribe,
            s.getSnapshot,
            s.getSnapshot,
          ),
          u = (0, n.useMemo)(() => d.options.map(w.d), [d.options]),
          c = (0, n.useCallback)((e) => s.select(e.id), [s]),
          h = (0, n.useCallback)(
            (e) => {
              e || s.cancel();
            },
            [s],
          ),
          v = "commandFailed" === d.failure ? (0, C.eQ)() : void 0;
        return (0, a.jsx)(m.e, {
          previewSource: o,
          open: !!d.session,
          editable: !!d.session,
          busy: (null == (t = d.session) ? void 0 : t.status) === "submitting",
          options: u,
          value: (null == (i = d.session) ? void 0 : i.selectedId) ?? null,
          catalogStatus: d.catalogStatus,
          onRetry: s.canRetryCatalog
            ? () => {
                s.retryCatalog();
              }
            : void 0,
          restoreFocusRef: l,
          onOpenChange: h,
          onValueChange: c,
          onConfirm: () => void s.confirm((e) => (0, w.d)(e).label),
          onReset: () => s.resetCandidate(),
          feedback: v,
          onCloseAutoFocus: r,
        });
      });
      var k = i(66876),
        S = i(63386);
      class N {
        open(e) {
          return (
            !this.disposed &&
            !this.snapshot.session &&
            !!this.canWrite() &&
            (this.revision++,
            (this.savedId = e),
            (this.contextKey = this.input.getContextKey()),
            this.publish({
              session: { status: "editing", selectedId: e },
              options: this.readOptions(),
              catalogStatus: "ready",
              failure: null,
            }),
            this.input.catalog.getCatalog() ||
              (this.canRetryCatalog
                ? this.retryCatalog()
                : this.publish({ ...this.snapshot, catalogStatus: "error" })),
            !0)
          );
        }
        cancel() {
          (this.revision++,
            (this.contextKey = void 0),
            this.publish({ ...this.snapshot, session: null, failure: null }));
        }
        invalidate() {
          this.snapshot.session &&
            (!this.canWrite() ||
              this.contextKey !== this.input.getContextKey()) &&
            this.cancel();
        }
        get canRetryCatalog() {
          return !!this.input.catalog.refresh;
        }
        async retryCatalog() {
          var e;
          if (
            (this.invalidate(),
            this.disposed ||
              (null == (e = this.snapshot.session) ? void 0 : e.status) !==
                "editing" ||
              "loading" === this.snapshot.catalogStatus ||
              !this.input.catalog.refresh)
          )
            return;
          let t = this.revision;
          this.publish({
            ...this.snapshot,
            catalogStatus: "loading",
            failure: null,
          });
          let i = "ready";
          try {
            (await this.input.catalog.refresh(),
              this.input.catalog.getCatalog() || (i = "error"));
          } catch {
            i = "error";
          }
          this.isCurrent(t) &&
            this.publish({
              ...this.snapshot,
              options: this.readOptions(),
              catalogStatus: i,
            });
        }
        select(e) {
          var t;
          if (
            (this.invalidate(),
            this.disposed ||
              (null == (t = this.snapshot.session) ? void 0 : t.status) !==
                "editing" ||
              "ready" !== this.snapshot.catalogStatus)
          )
            return;
          let i = this.readOptions().find((t) => t.id === e);
          this.publish({
            ...this.snapshot,
            session: {
              status: "editing",
              selectedId: (null == i ? void 0 : i.id) ?? null,
            },
            failure: null,
          });
        }
        resetCandidate() {
          var e;
          (null == (e = this.snapshot.session) ? void 0 : e.status) ===
            "editing" &&
            this.publish({
              ...this.snapshot,
              session: { status: "editing", selectedId: null },
              failure: null,
            });
        }
        async confirm(e) {
          var t, i;
          this.invalidate();
          let a = null == (t = this.snapshot.session) ? void 0 : t.selectedId;
          if (
            this.disposed ||
            (null == (i = this.snapshot.session) ? void 0 : i.status) !==
              "editing" ||
            !a ||
            "ready" !== this.snapshot.catalogStatus
          )
            return;
          let s = this.readOptions().find((e) => e.id === a);
          if (!s) return void this.resetCandidate();
          if (a === this.savedId) return void this.cancel();
          let n = ++this.revision;
          this.publish({
            ...this.snapshot,
            session: { status: "submitting", selectedId: a },
            failure: null,
          });
          try {
            let t = await this.input.action.execute(this.input.nodeId, {
              key: s.id,
              title: (0, o.Rz)(e(s)),
            });
            if (!this.isCurrent(n)) return;
            t.ok
              ? this.cancel()
              : this.publish({
                  ...this.snapshot,
                  session: { status: "editing", selectedId: a },
                  failure: "commandFailed",
                });
          } catch {
            this.isCurrent(n) &&
              this.publish({
                ...this.snapshot,
                session: { status: "editing", selectedId: a },
                failure: "commandFailed",
              });
          }
        }
        dispose() {
          if (!this.disposed) {
            for (let e of (this.cancel(), (this.disposed = !0), this.cleanups))
              e();
            this.listeners.clear();
          }
        }
        canWrite() {
          var e, t;
          return (
            (null == (e = (t = this.input.catalog).getToolsAvailable)
              ? void 0
              : e.call(t)) === !0 &&
            this.input.action.getState(this.input.nodeId).available
          );
        }
        isCurrent(e) {
          return (
            !this.disposed &&
            e === this.revision &&
            this.canWrite() &&
            this.contextKey === this.input.getContextKey()
          );
        }
        readOptions() {
          var e;
          return (
            (null == (e = this.input.catalog.getCatalog())
              ? void 0
              : e
                  .options("camera_motion")
                  .filter((e) => (0, S.DW)(e, "video"))) ?? []
          );
        }
        publish(e) {
          if (!this.disposed)
            for (let t of ((this.snapshot = e), this.listeners)) t();
        }
        constructor(e) {
          ((this.input = e),
            (this.listeners = new Set()),
            (this.revision = 0),
            (this.savedId = null),
            (this.disposed = !1),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.snapshot = {
              session: null,
              options: this.readOptions(),
              catalogStatus: "ready",
              failure: null,
            }),
            (this.cleanups = [
              e.catalog.subscribe(() => {
                var e;
                (this.publish({
                  ...this.snapshot,
                  options: this.readOptions(),
                }),
                  (null == (e = this.snapshot.session) ? void 0 : e.status) !==
                    "editing" ||
                    this.input.catalog.getCatalog() ||
                    "ready" !== this.snapshot.catalogStatus ||
                    (this.canRetryCatalog
                      ? this.retryCatalog()
                      : this.publish({
                          ...this.snapshot,
                          catalogStatus: "error",
                        })));
              }),
              e.subscribeEditAvailability(() => this.invalidate()),
            ]));
        }
      }
      var _ = i(18091),
        I = i(27380);
      let E = ["start", "quarter", "middle", "three-quarter", "end"],
        A = [
          "perspective(160px) rotateY(30deg) scaleY(1.15)",
          "perspective(160px) rotateY(18deg)",
          "none",
          "perspective(160px) rotateY(-18deg)",
          "perspective(160px) rotateY(-30deg) scaleY(1.15)",
        ];
      function P(e) {
        let {
          option: t,
          playIndicator: i,
          poster: s = !0,
          posterUrl: n = t.thumbnailUrl,
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            s ? (0, a.jsx)(I.d, { src: n, fallbackSrc: t.thumbnailUrl }) : null,
            (0, a.jsx)("div", {
              "aria-hidden": "true",
              className:
                "absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-dreamina-bg-mask-80",
              style: { height: 220 },
            }),
            i
              ? (0, a.jsx)("div", {
                  className: "pointer-events-none absolute inset-x-0 top-0",
                  style: { height: "calc(100% - 56px)" },
                  children: i,
                })
              : null,
            t.frames
              ? (0, a.jsx)("div", {
                  "aria-hidden": "true",
                  "data-motion-frame-strip": !0,
                  className: "absolute inset-x-2 bottom-9 flex items-center",
                  style: { height: 96, gap: 4 },
                  children: t.frames.map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className:
                          "flex-1 overflow-hidden rounded-canvas-motion-frame",
                        style: {
                          minWidth: 0,
                          height: 2 === t ? 50 : 1 === t || 3 === t ? 66 : 82,
                          transform: A[t],
                        },
                        children: (0, a.jsx)(I.d, { src: e }),
                      },
                      E[t],
                    ),
                  ),
                })
              : null,
            (0, a.jsx)("div", {
              className: "absolute inset-x-2 bottom-6 text-center",
              children: (0, a.jsx)("p", {
                className:
                  "truncate text-dreamina-cn-14 font-dreamina-medium text-dreamina-on-media-text-secondary",
                children: t.label,
              }),
            }),
          ],
        });
      }
      var R = i(77117),
        z = i(70377),
        $ = i(50018),
        F = i(22674),
        T = i(7606);
      let K = (0, n.memo)(function (e) {
        let {
            option: t,
            kind: i,
            previewSource: s,
            previewTargetBound: l,
            selected: o = !1,
            renderPoster: u,
            playLabel: c,
            className: h,
            style: v,
          } = e,
          [p, m] = (0, n.useState)(!1),
          [g, b] = (0, n.useState)(!1),
          [y, x] = (0, n.useState)(!1),
          [C, w] = (0, n.useState)(!1),
          [j, k] = (0, n.useState)(!1),
          [S, N] = (0, n.useState)(),
          _ = (0, n.useContext)(d.Nf),
          I = (0, n.useRef)(),
          E = p || g || y,
          A = (0, $.v)(t, s, E, i),
          { retry: P, failed: R } = A,
          z =
            (null == S ? void 0 : S.option) === t && S.source === s
              ? S
              : void 0,
          K = (0, n.useCallback)(() => {
            (w(!1),
              k(!1),
              _ &&
                !I.current &&
                (I.current = (0, F.h)(_).acquire(() => {
                  ((I.current = void 0), w(!0));
                })));
          }, [_]);
        (0, n.useEffect)(
          () => () => {
            var e;
            return null == (e = I.current) ? void 0 : e.call(I);
          },
          [],
        );
        let L = (0, n.useCallback)(() => {
            (K(), m(!0));
          }, [K]),
          U = (0, n.useCallback)(() => {
            var e;
            (m(!1),
              b(!1),
              x(!1),
              w(!1),
              null == (e = I.current) || e.call(I),
              (I.current = void 0));
          }, []),
          W = (0, n.useCallback)(() => {
            (K(), b(!0));
          }, [K]),
          D = (0, n.useCallback)((e) => {
            e.currentTarget.contains(e.relatedTarget) || (b(!1), x(!1));
          }, []),
          M = (0, n.useCallback)(() => {
            (K(), x(!0), R && P());
          }, [K, R, P]),
          B = (0, n.useCallback)(() => w(!0), []),
          V = (0, n.useCallback)(() => {
            j ? w(!0) : (k(!0), P());
          }, [j, P]),
          q = (0, n.useCallback)(
            (e) => {
              let { videoWidth: i, videoHeight: a } = e.currentTarget;
              i > 0 &&
                a > 0 &&
                N((e) =>
                  (null == e ? void 0 : e.option) === t && e.source === s
                    ? e
                    : { option: t, source: s, width: i, height: a },
                );
            },
            [t, s],
          ),
          Y =
            "original" === l
              ? Number.MAX_VALUE
              : void 0 === l
                ? void 0
                : (0, f.qU)(z ?? {}, l),
          X =
            E && !C
              ? (0, f.NI)(
                  { previewUrl: A.url, resolutionUrls: A.resolutionUrls },
                  "node",
                  { targetHeight: Y },
                )
              : void 0,
          H = A.coverUrl ?? t.thumbnailUrl;
        return (0, a.jsxs)("div", {
          className: (0, r.cn)(
            "relative overflow-hidden rounded-dreamina-control [container-type:inline-size]",
            h,
          ),
          style: v,
          "data-tool-preset-preview": i,
          "data-active": o || E,
          onPointerEnter: L,
          onPointerLeave: U,
          onFocusCapture: W,
          onBlurCapture: D,
          children: [
            u(
              X
                ? null
                : (0, a.jsx)(T.x3, {
                    className:
                      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                  }),
              H,
            ),
            X
              ? (0, a.jsx)(
                  O,
                  {
                    url: X,
                    poster: H,
                    onEnded: B,
                    onFailure: V,
                    onLoadedMetadata: q,
                  },
                  X,
                )
              : null,
            (0, a.jsx)(r.$nd, {
              variant: "text",
              size: "unframed",
              "aria-label": c,
              onClick: M,
              className:
                "absolute inset-0 size-full rounded-dreamina-control-unframed",
              style: { padding: 0 },
            }),
          ],
        });
      });
      function O(e) {
        let {
            url: t,
            poster: i,
            onEnded: s,
            onFailure: l,
            onLoadedMetadata: o,
          } = e,
          { failed: r, reportPlaybackFailed: d, videoRef: u } = (0, z.KQ)(t),
          [c, h] = (0, n.useState)(!1);
        ((0, n.useEffect)(() => {
          r && l();
        }, [r, l]),
          (0, n.useEffect)(() => {
            let e = u.current;
            if (!e || "function" != typeof e.requestVideoFrameCallback) return;
            let t = e.requestVideoFrameCallback(() => {
              ((t = void 0), h(!0));
            });
            return () => {
              void 0 !== t && e.cancelVideoFrameCallback(t);
            };
          }, [t, u]));
        let v = (0, n.useCallback)(() => {
          var e;
          "function" !=
            typeof (null == (e = u.current)
              ? void 0
              : e.requestVideoFrameCallback) && h(!0);
        }, [u]);
        return (0, a.jsx)("video", {
          ref: u,
          src: t,
          poster: i,
          muted: !0,
          playsInline: !0,
          disablePictureInPicture: !0,
          crossOrigin: "anonymous",
          className:
            "pointer-events-none absolute inset-0 size-full object-cover",
          style: { opacity: +!!c },
          onLoadedData: v,
          onEnded: s,
          onError: d,
          onLoadedMetadata: o,
          "aria-hidden": "true",
        });
      }
      let L = (0, n.memo)(function (e) {
          let {
              option: t,
              selected: i = !1,
              embedded: s = !1,
              previewSource: l,
              previewTargetBound: d,
            } = e,
            u = (0, n.useCallback)(
              (e, i) =>
                (0, a.jsx)(P, { option: t, posterUrl: i, playIndicator: e }),
              [t],
            );
          return (0, a.jsxs)("div", {
            style: { width: 320 },
            "data-testid": "motion-node",
            children: [
              s
                ? null
                : (0, a.jsxs)("div", {
                    className:
                      "flex items-center text-dreamina-cn-13 text-dreamina-text-tertiary",
                    style: { marginBottom: 8, height: 20, gap: 4 },
                    children: [
                      (0, a.jsx)(r.EJX, { size: 16 }),
                      (0, o.XG)("motion"),
                    ],
                  }),
              (0, a.jsx)(
                K,
                {
                  kind: "camera_motion",
                  option: t,
                  selected: i,
                  previewSource: l,
                  previewTargetBound: d,
                  playLabel: (0, R.RO)(t.label),
                  renderPoster: u,
                  style: { width: 320, height: 320 },
                  className: (0, r.cn)(
                    !s &&
                      "data-[active=true]:ring-2 data-[active=true]:ring-offset-2 ring-offset-dreamina-bg-surface",
                    !s &&
                      (i
                        ? "ring-dreamina-canvas-media-frame-stroke-selected"
                        : "ring-dreamina-canvas-media-frame-stroke-hover"),
                  ),
                },
                t.id,
              ),
            ],
          });
        }),
        U = (0, n.memo)(function (e) {
          return e.previewSource && e.option.hasPreviewVideo
            ? (0, a.jsx)(L, { ...e, previewSource: e.previewSource })
            : (0, a.jsx)(W, { ...e });
        }),
        W = (0, n.memo)(function (e) {
          let { option: t, selected: i = !1, embedded: s = !1 } = e,
            [l, d] = (0, n.useState)(!1),
            [u, c] = (0, n.useState)(!1),
            [h, v] = (0, n.useState)(!1),
            p = l || u || h,
            m = (0, n.useCallback)(() => d(!0), []),
            g = (0, n.useCallback)(() => {
              (d(!1), v(!1));
            }, []),
            f = (0, n.useCallback)(() => c(!0), []),
            b = (0, n.useCallback)(() => {
              (c(!1), v(!1));
            }, []),
            y = (0, n.useCallback)(() => v(!0), []),
            x = (0, n.useCallback)((e) => {
              "Escape" === e.key && (v(!1), c(!1), e.stopPropagation());
            }, []);
          return (0, a.jsxs)("div", {
            style: { width: 320 },
            onPointerEnter: m,
            onPointerLeave: g,
            "data-testid": "motion-node",
            children: [
              s
                ? null
                : (0, a.jsxs)("div", {
                    className:
                      "flex items-center text-dreamina-cn-13 text-dreamina-text-tertiary",
                    style: { marginBottom: 8, height: 20, gap: 4 },
                    children: [
                      (0, a.jsx)(r.EJX, { size: 16 }),
                      (0, o.XG)("motion"),
                    ],
                  }),
              (0, a.jsxs)("div", {
                className: (0, r.cn)(
                  "relative overflow-hidden rounded-dreamina-control [container-type:inline-size]",
                  !s &&
                    (i || p) &&
                    "ring-2 ring-offset-2 ring-offset-dreamina-bg-surface",
                  !s && i
                    ? "ring-dreamina-canvas-media-frame-stroke-selected"
                    : !s &&
                        p &&
                        "ring-dreamina-canvas-media-frame-stroke-hover",
                ),
                style: { width: 320, height: 320 },
                children: [
                  (0, a.jsx)(I.u, { option: t, playing: p }),
                  p
                    ? null
                    : (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(P, {
                          option: t,
                          poster: !1,
                          playIndicator: (0, a.jsx)(T.x3, {
                            className:
                              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                          }),
                        }),
                      }),
                  (0, a.jsx)(r.$nd, {
                    variant: "text",
                    size: "unframed",
                    "aria-label": (0, R.RO)(t.label),
                    onClick: y,
                    onFocus: f,
                    onBlur: b,
                    onKeyDown: x,
                    className:
                      "absolute inset-0 size-full rounded-dreamina-control-unframed",
                    style: { padding: 0 },
                  }),
                ],
              }),
            ],
          });
        }),
        D = (0, n.memo)(function (e) {
          var t, i, s;
          let l = (0, x.py)(),
            o = (0, x.$7)(),
            c = (0, n.useContext)(d.Nf),
            h = (0, x.yd)(),
            v = (0, u.px)(),
            { writeChromeVisible: p } = (0, u.A1)(),
            m = null == c || null == (t = c.featuresApi) ? void 0 : t.canvas,
            g =
              null == m || null == (i = m.actions)
                ? void 0
                : i.setMotionToolNode,
            f = null == m ? void 0 : m.toolPresets,
            b =
              (null == (s = e.data.toolFields.find((e) => "key" === e.name))
                ? void 0
                : s.values[0]) ?? null,
            y = (0, _.P)(l, "camera_motion", b, "video"),
            C = (0, n.useMemo)(
              () => (y ? (0, w.d)(y) : { id: b ?? e.id, label: e.data.title }),
              [y, b, e.id, e.data.title],
            ),
            S = (0, n.useRef)(null),
            I = JSON.stringify([e.id, e.data.toolFields]),
            E = (0, n.useRef)(I);
          E.current = I;
          let [A, P] = (0, n.useState)(null),
            R = (0, r.qwp)({ activeValue: A, animateExit: v && !0 === h });
          ((0, n.useEffect)(
            () => () => (null == A ? void 0 : A.dispose()),
            [A],
          ),
            (0, n.useEffect)(
              () =>
                null == A
                  ? void 0
                  : A.subscribe(() => {
                      A.getSnapshot().session || P((e) => (e === A ? null : e));
                    }),
              [A],
            ),
            (0, n.useEffect)(
              () => (null == A ? void 0 : A.invalidate()),
              [A, I],
            ),
            (0, n.useEffect)(() => {
              !0 !== h && (null == A || A.cancel());
            }, [A, h]));
          let z = (0, n.useCallback)(() => {
              var t;
              if (
                !m ||
                !v ||
                !(null == g ? void 0 : g.getState(e.id).available) ||
                !f ||
                (null == (t = f.getToolsAvailable) ? void 0 : t.call(f)) !==
                  !0 ||
                A
              )
                return;
              let i = new N({
                nodeId: e.id,
                action: g,
                catalog: f,
                getContextKey: () => E.current,
                subscribeEditAvailability: m.subscribeEditAvailability,
              });
              i.open(b) ? P(i) : i.dispose();
            }, [m, v, g, e.id, f, A, b]),
            $ =
              v && (null == g ? void 0 : g.getState(e.id).available)
                ? void 0
                : (0, k.jyb)();
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: "group relative size-full",
                children: [
                  (0, a.jsx)(U, {
                    option: C,
                    selected: e.selected,
                    embedded: !0,
                    previewSource: o,
                    previewTargetBound: e.previewTargetBound,
                  }),
                  !0 === h && m && p
                    ? (0, a.jsx)(r.$nd, {
                        ref: S,
                        "aria-label": (0, k.XAY)(),
                        disabled: !!$,
                        disabledReason: $,
                        size: "icon",
                        variant: "text",
                        onClick: z,
                        className: `nodrag nopan absolute right-canvas-camera-compact top-canvas-camera-compact size-8 rounded-canvas-camera-control bg-dreamina-bg-mask-30 p-canvas-camera-zero text-dreamina-on-media-text-primary hover:bg-dreamina-bg-mask-60 active:bg-dreamina-bg-mask-60 motion-safe:transition-opacity motion-safe:duration-dreamina-element motion-safe:ease-dreamina-soft pointer-events-none opacity-dreamina-media-action-hidden group-hover:pointer-events-auto group-hover:opacity-dreamina-media-action-visible ${r.ero.withinGroupMediaActionInteractive}`,
                        children: (0, a.jsx)(r.olj, { size: 16 }),
                      })
                    : null,
                ],
              }),
              !0 === h && R.value
                ? (0, a.jsx)(j, {
                    previewSource: o,
                    runtime: R.value,
                    restoreFocusRef: S,
                    onCloseAutoFocus: R.completeExit,
                  })
                : null,
            ],
          });
        });
      var M = i(55879),
        B = i(60074),
        V = i(87289),
        q = i(24548),
        Y = i(85748);
      let X = [];
      class H {
        get catalog() {
          return this.input.catalog;
        }
        open() {
          if (this.disposed || this.snapshot.session || !this.canWrite())
            return !1;
          (this.revision++,
            (this.contextKey = this.input.getContextKey()),
            (this.controller = new AbortController()),
            (this.selectedByUser = !1));
          let e = this.readOptions(),
            t = this.findSavedSelection(e);
          return (
            this.publish({
              session: { status: "editing" },
              options: e,
              selectedId: t,
              failure: null,
            }),
            !0
          );
        }
        select(e) {
          var t, i;
          (this.invalidate(),
            (null == (t = this.snapshot.session) ? void 0 : t.status) ===
              "editing" &&
              (null == (i = this.input.catalog.getCatalog())
                ? void 0
                : i.find("palette", e)) &&
              ((this.selectedByUser = !0),
              this.publish({
                ...this.snapshot,
                selectedId: e,
                failure: null,
              })));
        }
        cancel() {
          var e;
          (null == (e = this.controller) || e.abort(),
            (this.controller = void 0),
            this.revision++,
            (this.contextKey = void 0),
            this.publish({
              ...this.snapshot,
              session: null,
              selectedId: null,
              failure: null,
            }));
        }
        resetCandidate() {
          var e;
          (this.invalidate(),
            this.disposed ||
              (null == (e = this.snapshot.session) ? void 0 : e.status) !==
                "editing" ||
              ((this.selectedByUser = !0),
              this.publish({
                ...this.snapshot,
                selectedId: null,
                failure: null,
              })));
        }
        invalidate() {
          this.snapshot.session &&
            (!this.canWrite() ||
              this.contextKey !== this.input.getContextKey()) &&
            this.cancel();
        }
        async confirm(e) {
          var t;
          this.invalidate();
          let { session: i, selectedId: a } = this.snapshot;
          if (this.disposed || (null == i ? void 0 : i.status) !== "editing")
            return null;
          let s = a
            ? null == (t = this.input.catalog.getCatalog())
              ? void 0
              : t.find("palette", a)
            : void 0;
          if (!s)
            return (
              this.publish({
                ...this.snapshot,
                selectedId: null,
                failure: null,
                options: this.readOptions(),
              }),
              null
            );
          let n = e(s);
          if (s.id === this.input.savedPaletteId)
            return (this.cancel(), this.input.nodeId);
          let l = ++this.revision;
          if (
            (this.publish({
              ...this.snapshot,
              session: { status: "submitting" },
              failure: null,
            }),
            !this.isCurrent(l))
          )
            return null;
          let r = this.controller;
          if (!r || r.signal.aborted) return null;
          try {
            if (
              await this.input.paletteNodes.replace(
                this.input.nodeId,
                s.id,
                (0, o.c8)(n),
                r.signal,
              )
            )
              return (this.isCurrent(l) && this.cancel(), this.input.nodeId);
            if (!this.isCurrent(l)) return null;
            return (this.showFailure(), null);
          } catch (e) {
            return (
              this.isCurrent(l) &&
                this.showFailure(e instanceof Y.p1 ? "limit" : "commandFailed"),
              null
            );
          }
        }
        dispose() {
          if (!this.disposed) {
            for (let e of (this.cancel(), (this.disposed = !0), this.cleanups))
              e();
            this.listeners.clear();
          }
        }
        findSavedSelection(e) {
          var t;
          return (
            (null == (t = e.find((e) => e.id === this.input.savedPaletteId))
              ? void 0
              : t.id) ?? null
          );
        }
        canWrite() {
          var e, t;
          return (
            (null == (e = (t = this.input.catalog).getToolsAvailable)
              ? void 0
              : e.call(t)) === !0 &&
            this.input.action.getState(this.input.nodeId).available
          );
        }
        isCurrent(e) {
          return (
            !this.disposed &&
            e === this.revision &&
            this.canWrite() &&
            this.contextKey === this.input.getContextKey()
          );
        }
        readOptions() {
          var e;
          return (
            (null == (e = this.input.catalog.getCatalog())
              ? void 0
              : e.options("palette")) ?? X
          );
        }
        showFailure() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "commandFailed";
          this.publish({
            ...this.snapshot,
            session: { status: "editing" },
            failure: e,
          });
        }
        publish(e) {
          if (!this.disposed)
            for (let t of ((this.snapshot = e), this.listeners)) t();
        }
        constructor(e) {
          ((this.input = e),
            (this.listeners = new Set()),
            (this.revision = 0),
            (this.selectedByUser = !1),
            (this.disposed = !1),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.scrollMemoryKey = e.nodeId),
            (this.snapshot = {
              session: null,
              options: this.readOptions(),
              selectedId: null,
              failure: null,
            }),
            (this.cleanups = [
              e.catalog.subscribe(() => {
                var e, t, i, a, s, n;
                let l,
                  o = this.readOptions(),
                  r = this.snapshot.session
                    ? ((a = this.snapshot.options),
                      (s = o),
                      (n = (e) => {
                        var t, i;
                        return (
                          (null == (i = this.input.catalog.getCatalog()) ||
                          null == (t = i.find("palette", e))
                            ? void 0
                            : t.id) ?? e
                        );
                      }),
                      (l = new Map(s.map((e) => [e.id, e]))),
                      [
                        ...a.flatMap((e) => {
                          let t = l.get(n(e.id));
                          return t ? (l.delete(t.id), [t]) : [];
                        }),
                        ...l.values(),
                      ])
                    : o,
                  d =
                    (null == (e = this.snapshot.session)
                      ? void 0
                      : e.status) !== "editing" || this.selectedByUser
                      ? this.snapshot.selectedId
                        ? ((null == (i = this.input.catalog.getCatalog()) ||
                          null ==
                            (t = i.find("palette", this.snapshot.selectedId))
                            ? void 0
                            : t.id) ?? null)
                        : null
                      : this.findSavedSelection(r);
                this.publish({ ...this.snapshot, options: r, selectedId: d });
              }),
              e.subscribeEditAvailability(() => this.invalidate()),
            ]));
        }
      }
      function G(e) {
        let { colors: t, label: i, previousLabel: s, nextLabel: l } = e,
          o = (0, n.useRef)(null),
          d = (0, n.useRef)(null),
          u = (0, n.useRef)(null),
          c = (0, n.useRef)(null),
          h = (0, n.useRef)(),
          v = (0, n.useRef)(),
          [p, m] = (0, n.useState)(0),
          g = t.join(","),
          f = () => {
            var e;
            let t = d.current;
            if (!t) return;
            let i = v.current ?? t.scrollLeft,
              a = i > 1,
              s = i + t.clientWidth < t.scrollWidth - 1,
              n = t.ownerDocument.activeElement;
            (((a || n !== u.current) && (s || n !== c.current)) ||
              null == (e = o.current) ||
              e.focus({ preventScroll: !0 }),
              m(!!a | (2 * !!s)));
          };
        (0, n.useLayoutEffect)(() => {
          var e;
          return (
            null == (e = h.current) || e.cancel(),
            (v.current = void 0),
            d.current && (d.current.scrollLeft = 0),
            f(),
            () => {
              var e;
              return null == (e = h.current) ? void 0 : e.cancel();
            }
          );
        }, [g]);
        let b = () => {
            var e;
            (null == (e = h.current) || e.cancel(), (v.current = void 0));
          },
          y = function (e) {
            var t;
            let i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = d.current;
            if (!a) return;
            let s = i ? a.scrollLeft : (v.current ?? a.scrollLeft),
              n = Math.max(0, Math.min(a.scrollWidth - a.clientWidth, s + e));
            (null == (t = h.current) || t.cancel(), (v.current = n), f());
            let l = new r.iYX(a, a.scrollLeft);
            ((h.current = l),
              l.moveTo(
                n,
                {
                  paint: (e, t) => {
                    ((a.scrollLeft = t), f());
                  },
                  clear: () => void 0,
                },
                {
                  duration: 240,
                  onComplete: () => {
                    ((v.current = void 0), f());
                  },
                },
              ));
          };
        return (0, a.jsxs)("div", {
          ref: o,
          role: "toolbar",
          "aria-label": i,
          tabIndex: p ? 0 : void 0,
          className: `group/palette-strip relative h-canvas-palette-row shrink-0 ${p ? "nodrag nopan nowheel" : ""}`,
          onKeyDown: (e) => {
            let t = d.current;
            if (!t) return;
            let i =
              "ArrowLeft" === e.key
                ? -40
                : "ArrowRight" === e.key
                  ? 40
                  : "Home" === e.key
                    ? -t.scrollLeft
                    : "End" === e.key
                      ? t.scrollWidth - t.clientWidth - t.scrollLeft
                      : void 0;
            void 0 !== i &&
              (e.preventDefault(),
              e.stopPropagation(),
              y(i, "Home" === e.key || "End" === e.key));
          },
          children: [
            (0, a.jsx)("div", {
              ref: d,
              onScroll: f,
              onWheel: b,
              onPointerDown: b,
              className: `flex h-full items-center gap-canvas-style-content-gap overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${t.length > 6 ? "overflow-x-auto" : "overflow-x-hidden"}`,
              children: t.map((e, i) =>
                (0, a.jsx)(
                  "span",
                  {
                    "data-palette-node-color": e,
                    className:
                      "box-border shrink-0 rounded-dreamina-capsule border-solid border-dreamina-stroke-primary",
                    style: {
                      backgroundColor: e,
                      height: 32,
                      width: i ? 32 : 64,
                      borderWidth: 0.5,
                    },
                  },
                  `${e}-${t.slice(0, i).filter((t) => t === e).length}`,
                ),
              ),
            }),
            [1, 2].map((e) =>
              p & e
                ? (0, a.jsxs)(
                    "div",
                    {
                      className: `pointer-events-none absolute inset-y-0 ${1 === e ? "left-0" : "right-0"}`,
                      style: { width: 46 },
                      children: [
                        (0, a.jsx)("span", {
                          "aria-hidden": "true",
                          className: `absolute -inset-y-px w-canvas-palette-fade bg-gradient-to-r from-transparent to-dreamina-canvas-frame to-90% ${1 === e ? "-left-px rotate-180" : "-right-px"}`,
                        }),
                        (0, a.jsx)("span", {
                          "aria-hidden": "true",
                          className: `absolute -inset-px bg-canvas-palette-hover-fade motion-safe:transition-opacity motion-safe:duration-dreamina-element opacity-dreamina-media-action-hidden group-hover/palette-strip:opacity-dreamina-media-action-visible ${r.ero.stripMediaActionInteractive} ${1 === e ? "rotate-180" : ""}`,
                        }),
                        (0, a.jsx)(r.$nd, {
                          ref: 1 === e ? u : c,
                          style: { width: 25 },
                          variant: "text",
                          size: "unframed",
                          "aria-label": 1 === e ? s : l,
                          className: `pointer-events-none absolute top-0 h-full rounded-dreamina-reference-chip bg-dreamina-block-secondary-default p-canvas-style-zero motion-safe:transition-opacity motion-safe:duration-dreamina-element opacity-dreamina-media-action-hidden hover:bg-dreamina-block-secondary-hover active:bg-dreamina-block-secondary-pressed group-hover/palette-strip:pointer-events-auto group-hover/palette-strip:opacity-dreamina-media-action-visible ${r.ero.stripMediaActionInteractive} ${1 === e ? "left-0" : "right-0"}`,
                          onClick: () => {
                            var t;
                            return y(
                              ((1 === e ? -1 : 1) *
                                ((null == (t = d.current)
                                  ? void 0
                                  : t.clientWidth) ?? 0)) /
                                2,
                            );
                          },
                          children: (0, a.jsx)(r.vKP, {
                            size: 12,
                            className: 1 === e ? "rotate-180" : void 0,
                          }),
                        }),
                      ],
                    },
                    e,
                  )
                : null,
            ),
          ],
        });
      }
      let J = (0, n.lazy)(async () => ({
          default: (
            await Promise.all([i.e(1043), i.e(1455), i.e(4382), i.e(654)]).then(
              i.bind(i, 12221),
            )
          ).CanvasPaletteCreationPicker,
        })),
        Q = (0, n.memo)(function (e) {
          var t, i, s, l, o, c, h, v, p, m;
          let g =
              null == (i = (0, n.useContext)(d.Nf)) ||
              null == (t = i.featuresApi)
                ? void 0
                : t.canvas,
            b = (0, x.yd)(),
            y = (0, u.px)(),
            { availability: w } = (0, x.vG)(),
            j = null == g ? void 0 : g.actions.setPaletteToolNode,
            S = e.data.resourceId,
            N = (0, f.iI)(S ? [S] : []),
            _ = N.resources[0],
            I = S
              ? ((null == (s = (0, f.$X)(S, _)) ? void 0 : s.fields) ?? [])
              : [],
            E = [
              ...((null == (l = I.find((e) => "main" === e.name))
                ? void 0
                : l.values) ?? []),
              ...((null == (o = I.find((e) => "swatches" === e.name))
                ? void 0
                : o.values) ?? []),
            ]
              .map(M.Yx)
              .filter((e) => !!e)
              .slice(0, 11),
            A = (null == _ ? void 0 : _.palette_state) === q.G9.deleted,
            P = (null == _ ? void 0 : _.palette_state) === q.G9.reviewPending,
            R =
              null == g ||
              null == (h = g.paletteLibrary) ||
              null == (c = h.getOwnerId)
                ? void 0
                : c.call(h),
            z =
              R && (null == _ ? void 0 : _.creator_user_id) === R
                ? ((null == (v = _.palette_ref) ? void 0 : v.palette_id) ??
                  null)
                : null,
            $ = (0, f.DX)(null == _ ? void 0 : _.urls, 1 / 0),
            F = "selected" === $.status ? $.url : void 0,
            [T, K] = (0, n.useState)(),
            [O, L] = (0, n.useState)(0),
            U = !!(null == _ || null == (p = _.palette)
              ? void 0
              : p.source_image_uri),
            W = !!(E.length && U && (!F || T === `${S}:${F}`)),
            D = JSON.stringify([e.id, e.data.title, S]),
            V = (0, n.useRef)(D);
          V.current = D;
          let X = (0, n.useRef)(null),
            [Q, ee] = (0, n.useState)(null),
            et = (0, r.qwp)({ activeValue: Q, animateExit: y && !0 === b });
          ((0, n.useEffect)(
            () => () => (null == Q ? void 0 : Q.dispose()),
            [Q],
          ),
            (0, n.useEffect)(
              () =>
                null == Q
                  ? void 0
                  : Q.subscribe(() => {
                      Q.getSnapshot().session ||
                        ee((e) => (e === Q ? null : e));
                    }),
              [Q],
            ),
            (0, n.useEffect)(
              () => (null == Q ? void 0 : Q.invalidate()),
              [Q, D, w],
            ),
            (0, n.useEffect)(() => {
              !0 !== b && (null == Q || Q.cancel());
            }, [Q, b]));
          let ei = () => {
              var t, i;
              if (
                !(null == g ? void 0 : g.toolPresets) ||
                !g.paletteNodes ||
                !j ||
                !y ||
                (null == (t = (i = g.toolPresets).getToolsAvailable)
                  ? void 0
                  : t.call(i)) !== !0
              )
                return;
              let a = new H({
                nodeId: e.id,
                savedPaletteId: z,
                action: j,
                paletteNodes: g.paletteNodes,
                catalog: new Y.uE(g.toolPresets, g.paletteLibrary),
                getContextKey: () => V.current,
                subscribeEditAvailability: g.subscribeEditAvailability,
              });
              a.open() ? ee(a) : a.dispose();
            },
            ea = "notEditingReady" === w,
            es = !!(
              !0 === b &&
              j &&
              (null == g ? void 0 : g.toolPresets) &&
              g.paletteNodes &&
              (y || ea)
            ),
            en = (0, B.C5)();
          return (0, a.jsxs)("div", {
            className:
              "group relative size-full overflow-hidden rounded-dreamina-control bg-dreamina-canvas-frame",
            "data-testid": "palette-tool-node-content",
            children: [
              A
                ? null
                : (0, a.jsx)(
                    Z,
                    { src: F, colors: E, onFailure: (e) => K(`${S}:${e}`) },
                    `${S}:${F}:${O}`,
                  ),
              A
                ? (0, a.jsxs)("div", {
                    className:
                      "absolute inset-0 flex flex-col items-center justify-center gap-canvas-style-content-gap px-canvas-style-inset text-center text-dreamina-cn-12 text-dreamina-text-secondary",
                    role: "status",
                    children: [
                      (0, a.jsx)(r.IJR, { size: 20 }),
                      (0, a.jsx)("span", { children: (0, B.Ei)() }),
                      es
                        ? (0, a.jsx)(r.$nd, {
                            ref: X,
                            variant: "secondary",
                            size: "sm",
                            className: "nodrag nopan",
                            onClick: ei,
                            disabled:
                              !y ||
                              !(null == j
                                ? void 0
                                : j.getState(e.id).available),
                            disabledReason: ea ? (0, k.jyb)() : void 0,
                            children: (0, B.Qk)(),
                          })
                        : null,
                    ],
                  })
                : null,
              A || (E.length && !W)
                ? null
                : (0, a.jsxs)("div", {
                    style: E.length ? { height: 180 } : void 0,
                    className:
                      "absolute inset-0 flex flex-col items-center justify-center gap-canvas-style-content-gap bg-dreamina-canvas-frame text-dreamina-cn-12 text-dreamina-text-secondary",
                    role: "status",
                    children: [
                      N.requestPending
                        ? (0, C.S_)()
                        : P
                          ? (0, B.Dq)()
                          : (0, C.OH)(),
                      !N.requestPending &&
                      S &&
                      (null == g ? void 0 : g.mediaPlayback)
                        ? (0, a.jsx)(r.$nd, {
                            variant: "secondary",
                            size: "sm",
                            className: "nodrag nopan",
                            onClick: () => {
                              var e;
                              (K(void 0),
                                L((e) => e + 1),
                                null == (e = g.mediaPlayback) ||
                                  e.refreshResourceIds([S]));
                            },
                            children: (0, C.M)(),
                          })
                        : null,
                    ],
                  }),
              A
                ? null
                : (0, a.jsxs)("div", {
                    className:
                      "flex flex-col gap-canvas-style-content-gap px-canvas-style-inset pb-canvas-style-inset pt-canvas-style-info-top text-dreamina-text-primary",
                    style: { height: 100 },
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex h-canvas-palette-row items-center justify-between gap-canvas-style-content-gap",
                        children: [
                          (0, a.jsxs)("span", {
                            className:
                              "truncate text-dreamina-cn-14 font-dreamina-medium",
                            children: [
                              en.main,
                              " ",
                              (0, a.jsx)("span", {
                                className: "font-dreamina-number",
                                children:
                                  null == (m = E[0]) ? void 0 : m.toUpperCase(),
                              }),
                            ],
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "shrink-0 text-dreamina-cn-12 text-dreamina-text-tertiary",
                            children: (0, B.Iu)(E.length),
                          }),
                        ],
                      }),
                      (0, a.jsx)(G, {
                        colors: E,
                        label: e.data.title,
                        previousLabel: en.previousColours,
                        nextLabel: en.nextColours,
                      }),
                    ],
                  }),
              es && !A
                ? (0, a.jsx)(r.$nd, {
                    ref: X,
                    variant: "mediaOverlay",
                    size: "icon",
                    "aria-label": (0, B.YT)(),
                    disabled:
                      !y || !(null == j ? void 0 : j.getState(e.id).available),
                    disabledReason: ea ? (0, k.jyb)() : void 0,
                    className: `nodrag nopan absolute right-canvas-style-content-gap top-canvas-style-content-gap size-8 rounded-dreamina-control bg-dreamina-bg-mask-30 p-canvas-style-zero backdrop-blur-dreamina-panel motion-safe:transition-none pointer-events-none opacity-dreamina-media-action-hidden group-hover:pointer-events-auto group-hover:opacity-dreamina-media-action-visible ${r.ero.withinGroupMediaActionInteractive}`,
                    onClick: ei,
                    children: (0, a.jsx)(r.olj, { size: 16 }),
                  })
                : null,
              !0 === b && et.value
                ? (0, a.jsx)(n.Suspense, {
                    fallback: null,
                    children: (0, a.jsx)(J, {
                      runtime: et.value,
                      library: null == g ? void 0 : g.paletteLibrary,
                      canWrite: () => {
                        var t, i;
                        return !!(
                          (null == g ||
                          null == (i = g.toolPresets) ||
                          null == (t = i.getToolsAvailable)
                            ? void 0
                            : t.call(i)) === !0 &&
                          (null == j ? void 0 : j.getState(e.id).available) &&
                          V.current === D
                        );
                      },
                      restoreFocusRef: X,
                      onCloseAutoFocus: et.completeExit,
                    }),
                  })
                : null,
            ],
          });
        });
      function Z(e) {
        let { src: t, colors: i, onFailure: s } = e;
        return (0, a.jsx)("div", {
          className: "w-full overflow-hidden rounded-dreamina-control",
          style: { height: 180 },
          onErrorCapture: () => {
            t && s(t);
          },
          children: (0, a.jsx)(V.b, { imageUrl: t, colors: i }),
        });
      }
      let ee = [];
      class et {
        get catalog() {
          return this.input.catalog;
        }
        open(e) {
          var t;
          return (
            !this.disposed &&
            !this.snapshot.session &&
            !!this.canWrite() &&
            (this.revision++,
            (this.contextKey = this.input.getContextKey()),
            (this.savedId = e),
            this.publish({
              session: { status: "editing" },
              options: this.readOptions(),
              selectedId:
                e ??
                (null ==
                (t = (0, _.P)(this.input.catalog.getCatalog(), "style", null))
                  ? void 0
                  : t.id) ??
                null,
              failure: null,
            }),
            this.refreshOptions(),
            !0)
          );
        }
        select(e) {
          var t, i;
          (this.invalidate(),
            (null == (t = this.snapshot.session) ? void 0 : t.status) ===
              "editing" &&
              (null == (i = this.input.catalog.getCatalog())
                ? void 0
                : i.find("style", e)) &&
              this.publish({ ...this.snapshot, selectedId: e, failure: null }));
        }
        cancel() {
          (this.revision++,
            (this.contextKey = void 0),
            this.publish({
              ...this.snapshot,
              session: null,
              selectedId: null,
              failure: null,
            }));
        }
        invalidate() {
          this.snapshot.session &&
            (!this.canWrite() ||
              this.contextKey !== this.input.getContextKey()) &&
            this.cancel();
        }
        async confirm(e) {
          this.invalidate();
          let { session: t, selectedId: i } = this.snapshot;
          if (this.disposed || (null == t ? void 0 : t.status) !== "editing")
            return;
          let a = (0, _.P)(this.input.catalog.getCatalog(), "style", i);
          if (!a) return void this.refreshOptions();
          if (i === this.savedId) return void this.cancel();
          let s = ++this.revision;
          this.publish({
            ...this.snapshot,
            session: { status: "submitting" },
            failure: null,
          });
          try {
            let t = await this.input.action.execute(this.input.nodeId, {
              key: a.id,
              title: e(a),
            });
            if (!this.isCurrent(s)) return;
            t.ok ? this.cancel() : this.showFailure();
          } catch {
            this.isCurrent(s) && this.showFailure();
          }
        }
        dispose() {
          if (!this.disposed) {
            for (let e of (this.cancel(), (this.disposed = !0), this.cleanups))
              e();
            this.listeners.clear();
          }
        }
        canWrite() {
          var e, t;
          return (
            (null == (e = (t = this.input.catalog).getToolsAvailable)
              ? void 0
              : e.call(t)) === !0 &&
            this.input.action.getState(this.input.nodeId).available
          );
        }
        isCurrent(e) {
          return (
            !this.disposed &&
            e === this.revision &&
            this.canWrite() &&
            this.contextKey === this.input.getContextKey()
          );
        }
        refreshOptions() {
          var e, t;
          let i = this.readOptions(),
            a =
              this.input.catalog.getCatalog() && this.snapshot.session
                ? (this.snapshot.selectedId ??
                  (null ==
                  (e = (0, _.P)(this.input.catalog.getCatalog(), "style", null))
                    ? void 0
                    : e.id) ??
                  null)
                : this.snapshot.selectedId,
            s =
              null !== a &&
              !(null == (t = this.input.catalog.getCatalog())
                ? void 0
                : t.find("style", a));
          this.publish({
            ...this.snapshot,
            options: i,
            selectedId: a,
            failure: s ? "unavailable" : null,
          });
        }
        readOptions() {
          var e;
          return (
            (null == (e = this.input.catalog.getCatalog())
              ? void 0
              : e.options("style")) ?? ee
          );
        }
        showFailure() {
          this.publish({
            ...this.snapshot,
            session: { status: "editing" },
            failure: "commandFailed",
          });
        }
        publish(e) {
          if (!this.disposed)
            for (let t of ((this.snapshot = e), this.listeners)) t();
        }
        constructor(e) {
          ((this.input = e),
            (this.listeners = new Set()),
            (this.revision = 0),
            (this.savedId = null),
            (this.disposed = !1),
            (this.canRetryCatalog = () => {
              var e;
              return (
                !this.disposed &&
                (null == (e = this.snapshot.session) ? void 0 : e.status) ===
                  "editing" &&
                this.canWrite() &&
                this.contextKey === this.input.getContextKey()
              );
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.snapshot = {
              session: null,
              options: this.readOptions(),
              selectedId: null,
              failure: null,
            }),
            (this.cleanups = [
              e.catalog.subscribe(() => this.refreshOptions()),
              e.subscribeEditAvailability(() => this.invalidate()),
            ]));
        }
      }
      let ei = (0, n.lazy)(() =>
          Promise.all([i.e(1455), i.e(3006)])
            .then(i.bind(i, 26589))
            .then((e) => ({ default: e.CanvasStylePickerDialog })),
        ),
        ea = (0, n.memo)(function (e) {
          var t, i, s, l;
          let c =
              "light" === (0, r.DFZ)()
                ? "bg-dreamina-canvas-frame"
                : "bg-dreamina-bg-surface",
            { catalog: h, availability: v } = (0, x.nX)(),
            p = (0, x.$7)(),
            m = (0, n.useContext)(d.Nf),
            g = (0, x.yd)(),
            f = (0, u.px)(),
            b = null == m || null == (t = m.featuresApi) ? void 0 : t.canvas,
            y =
              null == b || null == (i = b.actions)
                ? void 0
                : i.setStyleToolNode,
            C = null == b ? void 0 : b.toolPresets,
            w = (0, n.useRef)(null),
            j = JSON.stringify([e.id, e.data.toolFields]),
            S = (0, n.useRef)(j);
          S.current = j;
          let [N, E] = (0, n.useState)(null),
            A = (0, r.qwp)({ activeValue: N, animateExit: f && !0 === g });
          ((0, n.useEffect)(
            () => () => (null == N ? void 0 : N.dispose()),
            [N],
          ),
            (0, n.useEffect)(
              () =>
                null == N
                  ? void 0
                  : N.subscribe(() => {
                      N.getSnapshot().session || E((e) => (e === N ? null : e));
                    }),
              [N],
            ),
            (0, n.useEffect)(
              () => (null == N ? void 0 : N.invalidate()),
              [N, j],
            ),
            (0, n.useEffect)(() => {
              !0 !== g && (null == N || N.cancel());
            }, [N, g]));
          let P =
              (null == (l = e.data.toolFields) ||
              null == (s = l.find((e) => "key" === e.name))
                ? void 0
                : s.values[0]) ?? null,
            R = (0, _.P)(h, "style", P),
            z = (0, n.useMemo)(
              () => ({
                id: (null == R ? void 0 : R.id) ?? "",
                label: R ? (0, o.tN)(R) : e.data.title,
                thumbnailUrl: null == R ? void 0 : R.thumbnailUrl,
                hasPreviewVideo: null == R ? void 0 : R.hasPreviewVideo,
              }),
              [R, e.data.title],
            ),
            $ = (0, n.useCallback)(
              (e, t) =>
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(I.d, { src: t, fallbackSrc: z.thumbnailUrl }),
                    e
                      ? (0, a.jsx)(T.x3, {
                          className:
                            "absolute left-1/2 top-[calc(50%+4px)] -translate-x-1/2 -translate-y-1/2 [border-color:color-mix(in_srgb,currentColor_8%,transparent)] bg-dreamina-on-media-block-default",
                        })
                      : null,
                  ],
                }),
              [z.thumbnailUrl],
            ),
            F = (0, n.useMemo)(
              () => (0, o.XP)(null == R ? void 0 : R.tags),
              [null == R ? void 0 : R.tags],
            ),
            O = !!(!0 === g && b && (f || "notEditingReady" === v)),
            L =
              f && (null == y ? void 0 : y.getState(e.id).available)
                ? void 0
                : (0, k.jyb)(),
            U = `pointer-events-none opacity-dreamina-media-action-hidden group-hover:pointer-events-auto group-hover:opacity-dreamina-media-action-visible ${r.ero.withinGroupMediaActionInteractive}`,
            W = (0, n.useCallback)(() => {
              var t;
              if (
                !b ||
                !f ||
                !(null == y ? void 0 : y.getState(e.id).available) ||
                !C ||
                (null == (t = C.getToolsAvailable) ? void 0 : t.call(C)) !==
                  !0 ||
                N
              )
                return;
              let i = new et({
                nodeId: e.id,
                action: y,
                catalog: C,
                getContextKey: () => S.current,
                subscribeEditAvailability: b.subscribeEditAvailability,
              });
              i.open(P) ? E(i) : i.dispose();
            }, [y, f, b, C, e.id, N, P]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className: `group relative size-full overflow-hidden rounded-dreamina-control ${c}`,
                "data-testid": "style-tool-node-content",
                children: [
                  (0, a.jsx)(r.$8Q, {
                    theme: "dark",
                    children: (0, a.jsx)("div", {
                      className:
                        "flex aspect-video w-full items-center justify-center overflow-hidden rounded-dreamina-control bg-dreamina-bg-surface",
                      children:
                        z.hasPreviewVideo && p
                          ? (0, a.jsx)(
                              K,
                              {
                                kind: "style",
                                option: z,
                                selected: e.selected,
                                previewSource: p,
                                previewTargetBound: e.previewTargetBound,
                                playLabel: (0, k.k9n)(z.label),
                                renderPoster: $,
                                className: "size-full",
                              },
                              z.id,
                            )
                          : (0, a.jsx)(I.d, { src: z.thumbnailUrl }),
                    }),
                  }),
                  O
                    ? (0, a.jsx)(r.$nd, {
                        ref: w,
                        "aria-label": (0, o.Yh)(),
                        disabled: !!L,
                        disabledReason: L,
                        title: L,
                        className: `nodrag nopan absolute right-canvas-camera-compact top-canvas-camera-compact size-8 rounded-canvas-camera-control bg-dreamina-bg-mask-30 p-canvas-camera-zero text-dreamina-on-media-text-primary hover:bg-dreamina-bg-mask-60 active:bg-dreamina-bg-mask-60 ${U}`,
                        size: "icon",
                        variant: "text",
                        onClick: W,
                        children: (0, a.jsx)(r.olj, { size: 16 }),
                      })
                    : null,
                  (0, a.jsxs)("div", {
                    className: `flex h-canvas-style-info flex-col gap-canvas-style-content-gap ${c} px-canvas-style-inset pb-canvas-style-inset pt-canvas-style-info-top text-dreamina-text-primary`,
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "truncate text-dreamina-cn-14 font-dreamina-medium",
                        children: R ? (0, o.tN)(R) : e.data.title,
                      }),
                      F.length > 0 &&
                        (0, a.jsx)("div", {
                          className:
                            "flex min-w-canvas-style-zero gap-canvas-style-tag-gap overflow-hidden",
                          children: F.map((e) =>
                            (0, a.jsx)(
                              "span",
                              {
                                className:
                                  "shrink-0 rounded-canvas-style-tag bg-dreamina-block-primary-default px-canvas-style-tag-inline py-canvas-style-tag-block text-canvas-style-tag text-dreamina-text-secondary",
                                children: e.label,
                              },
                              e.key,
                            ),
                          ),
                        }),
                    ],
                  }),
                ],
              }),
              !0 === g && A.value
                ? (0, a.jsx)(n.Suspense, {
                    fallback: null,
                    children: (0, a.jsx)(ei, {
                      previewSource: p,
                      runtime: A.value,
                      restoreFocusRef: w,
                      failureLabel: (0, o.CR)(),
                      onCloseAutoFocus: A.completeExit,
                    }),
                  })
                : null,
            ],
          });
        }),
        es = (0, n.memo)(function (e) {
          return "palette" === e.data.toolKind
            ? (0, a.jsx)(en, { ...e })
            : (0, a.jsx)(el, { ...e, title: e.data.title });
        }),
        en = (0, n.memo)(function (e) {
          let { resources: t } = (0, f.iI)(
              e.data.resourceId ? [e.data.resourceId] : [],
            ),
            i = t[0],
            s = (0, g.E)(e.data.resourceId, i, e.data.title),
            l = (0, n.useMemo)(() => ({ ...e.data, title: s }), [e.data, s]);
          return (0, a.jsx)(el, { ...e, data: l, title: s });
        }),
        el = (0, n.memo)(function (e) {
          var t, i, l;
          let c = (0, n.useContext)(d.Nf),
            { writeChromeVisible: h } = (0, u.A1)(),
            v = (0, x.yd)(),
            p =
              h &&
              (!0 === v ||
                !(null == c || null == (t = c.featuresApi)
                  ? void 0
                  : t.canvas.toolPresets)),
            m = (0, b.V)(e.id, e.selected),
            g = "camera" === e.data.toolKind,
            f = "style" === e.data.toolKind,
            C = "palette" === e.data.toolKind,
            w = e.data.toolKind === s.xP,
            j = g || f || C || w,
            k =
              (m
                ? null == (i = e.data.videoPreviewQuality)
                  ? void 0
                  : i.activeTier
                : null == (l = e.data.videoPreviewQuality)
                  ? void 0
                  : l.normalTier) ??
              (Math.max(e.width ?? 0, e.height ?? 0) || void 0),
            S = (0, n.useCallback)(
              (t) => {
                var i;
                return (
                  (null == c || null == (i = c.viewInteractions)
                    ? void 0
                    : i.subscribeToolNodeConnectionGuide(e.id, t)) ??
                  (() => void 0)
                );
              },
              [c, e.id],
            ),
            N = (0, n.useCallback)(() => {
              var t;
              return (
                (null == c || null == (t = c.viewInteractions)
                  ? void 0
                  : t.getToolNodeConnectionGuide(e.id)) ?? null
              );
            }, [c, e.id]),
            _ = (0, n.useSyncExternalStore)(S, N, () => null),
            I = (0, n.useCallback)(() => {
              var t;
              return null == c || null == (t = c.viewInteractions)
                ? void 0
                : t.dismissToolNodeConnectionGuide(e.id);
            }, [c, e.id]);
          return (
            (0, n.useEffect)(() => {
              (p && e.selected) || !_ || I();
            }, [I, _, e.selected, p]),
            (0, n.useEffect)(() => {
              if (!(null == c ? void 0 : c.viewInteractions) || !_) return;
              let e = c.viewInteractions.subscribeBlankPaneClick(I),
                t = window.setTimeout(I, 5e3);
              return () => {
                (window.clearTimeout(t), e());
              };
            }, [I, c, _]),
            (0, a.jsx)(y.Jm, {
              connectionHandles: "source",
              handlesInteractive: p,
              handlesVisible: p,
              connectable: !!(e.isConnectable && e.data.sourceConnectable),
              dragging: e.dragging,
              multiSelectionConnection: e.data.multiSelectionConnection,
              nodeId: e.id,
              title: e.title,
              resourceCount: 0,
              readyCount: 0,
              pendingCount: 0,
              errorCount: 0,
              frame: j ? "overlay" : void 0,
              frameStrokeAppearance: j ? "media" : void 0,
              showHeader: !j,
              titleIcon: g
                ? (0, a.jsx)(r.d6l, { size: 16 })
                : f
                  ? (0, a.jsx)(r.jnK, { size: 16 })
                  : w
                    ? (0, a.jsx)(r.EJX, { size: 16 })
                    : C
                      ? (0, a.jsx)(r.ZPY, { size: 16 })
                      : void 0,
              titleEditable: !!(m && p),
              titleRenameActionName: "renameToolNode",
              titleVariant: j ? "media" : void 0,
              selected: e.selected,
              sourceConnectionGuide:
                _ && p && e.selected
                  ? { label: (0, o.No)(_.kind), onDismiss: I }
                  : void 0,
              tagPresentation: e.data.tagPresentation,
              children: C
                ? (0, a.jsx)(Q, { ...e })
                : g
                  ? (0, a.jsx)(eo, { ...e })
                  : f
                    ? (0, a.jsx)(ea, { ...e, previewTargetBound: k })
                    : w
                      ? (0, a.jsx)(D, { ...e, previewTargetBound: k })
                      : (0, a.jsx)("div", {
                          "aria-hidden": "true",
                          "data-canvas-content-evidence": "frame_estimate",
                          "data-testid": "tool-flow-node-placeholder",
                          "data-tool-kind": e.data.toolKind,
                        }),
            })
          );
        }),
        eo = (0, n.memo)(function (e) {
          var t;
          let i = (0, n.useContext)(d.Nf),
            s = (0, x.yd)(),
            o = (0, u.px)(),
            g = null == i || null == (t = i.featuresApi) ? void 0 : t.canvas,
            f = null == g ? void 0 : g.toolPresets,
            b = (0, x.mN)(),
            y = (0, n.useRef)(null),
            C = (0, n.useMemo)(
              () => (0, p.bT)(e.data.toolFields),
              [e.data.toolFields],
            ),
            w = JSON.stringify([e.id, e.data.toolFields]),
            j = (0, n.useRef)(w);
          j.current = w;
          let [k, S] = (0, n.useState)(null),
            N = (0, r.qwp)({ activeValue: k, animateExit: o && !0 === s });
          ((0, n.useEffect)(
            () => () => (null == k ? void 0 : k.dispose()),
            [k],
          ),
            (0, n.useEffect)(() => {
              if (k)
                return k.subscribe(() => {
                  k.getSnapshot().selection || S((e) => (e === k ? null : e));
                });
            }, [k]),
            (0, n.useEffect)(
              () => (null == k ? void 0 : k.invalidate()),
              [k, w],
            ),
            (0, n.useEffect)(() => {
              !0 !== s && (null == k || k.cancel());
            }, [k, s]));
          let _ = (0, c.lp)(C, b),
            I = C ? er("model", C.model, b) : void 0,
            E = null == g ? void 0 : g.getEditAvailability().local,
            A =
              (null == E ? void 0 : E.available) === !1 &&
              "notEditingReady" === E.reason,
            P = !!(!0 === s && i && g && f && (o || A)),
            R = `pointer-events-none opacity-dreamina-media-action-hidden group-hover:pointer-events-auto group-hover:opacity-dreamina-media-action-visible ${r.ero.mediaActionInteractive}`;
          return (0, a.jsxs)("div", {
            className:
              "group relative flex size-full min-h-canvas-camera-zero overflow-hidden rounded-canvas-camera-control bg-canvas-camera-node p-canvas-camera-card-gap",
            "data-testid": "camera-tool-node-content",
            "data-canvas-content-evidence": "frame_estimate",
            children: [
              (0, a.jsx)(h.X, {
                previewUrl: _,
                modelLabel: I,
                parameters: ["lens", "focal", "aperture"].map((e) => ({
                  axis: e,
                  label: er(e, (null == C ? void 0 : C[e]) ?? null, b),
                })),
              }),
              P
                ? (0, a.jsx)(r.$nd, {
                    ref: y,
                    "aria-label": (0, l.UX)(),
                    disabled: !o,
                    title: A ? (0, l._4)() : void 0,
                    className: `nodrag nopan absolute right-canvas-camera-compact top-canvas-camera-compact size-8 rounded-canvas-camera-control bg-dreamina-bg-mask-30 p-canvas-camera-zero text-dreamina-on-media-text-primary hover:bg-dreamina-bg-mask-60 active:bg-dreamina-bg-mask-60 ${R}`,
                    size: "icon",
                    variant: "text",
                    onClick: () => {
                      var t;
                      if (
                        !i ||
                        !g ||
                        !f ||
                        !f.getCatalog() ||
                        (null == (t = f.getToolsAvailable)
                          ? void 0
                          : t.call(f)) !== !0 ||
                        !o
                      )
                        return;
                      let a = (0, v.L5)({
                        catalog: f,
                        canWrite: () => {
                          var e;
                          return (
                            (null == (e = f.getToolsAvailable)
                              ? void 0
                              : e.call(f)) === !0 &&
                            g.getEditAvailability().local.available
                          );
                        },
                        getContextKey: () => j.current,
                        subscribeEditAvailability: g.subscribeEditAvailability,
                        setCameraToolNode: async (t) => {
                          let a = g.getObjectSnapshot(e.id),
                            s = await i.actions.setCameraToolNode(e.id, t),
                            n = g.getObjectSnapshot(e.id);
                          if (
                            s &&
                            (null == a ? void 0 : a.type) === "tool" &&
                            (null == n ? void 0 : n.type) === "tool" &&
                            JSON.stringify(a.data.tool.fields) !==
                              JSON.stringify(n.data.tool.fields)
                          ) {
                            var l;
                            null == (l = g.gestures) ||
                              l.declare({
                                surface: "node",
                                gesture: "change_tool_settings",
                                nodeId: e.id,
                              });
                          }
                          return s;
                        },
                      });
                      a.open(e.data.toolFields) ? S(a) : a.dispose();
                    },
                    children: (0, a.jsx)(r.sY9, { size: 16 }),
                  })
                : null,
              !0 === s && N.value && f
                ? (0, a.jsx)(m.g, {
                    runtime: N.value,
                    catalog: f,
                    previewSource: null == g ? void 0 : g.toolPreviews,
                    restoreFocusRef: y,
                    onCloseAutoFocus: N.completeExit,
                  })
                : null,
            ],
          });
        });
      function er(e, t, i) {
        if (null === t) return (0, l.Rk)();
        let a = null == i ? void 0 : i.find("camera", t);
        return (null == a ? void 0 : a.axis) === e ? (0, l.Uj)(a) : t;
      }
    },
    22674(e, t, i) {
      class a {
        acquire(e) {
          return (
            this.activeRelease &&
              this.activeRelease !== e &&
              this.activeRelease(),
            (this.activeRelease = e),
            () => {
              this.activeRelease === e && (this.activeRelease = void 0);
            }
          );
        }
      }
      let s = new WeakMap();
      function n(e) {
        let t = s.get(e);
        if (t) return t;
        let i = new a();
        return (s.set(e, i), i);
      }
      i.d(t, { h: () => n });
    },
    7606(e, t, i) {
      var a = i(90561),
        s = i(87429),
        n = i(172);
      let l = "inline-flex size-11 [&_svg]:size-[22px]",
        o =
          "rounded-canvas-video-play-overlay border border-transparent bg-dreamina-bg-mask-60 p-canvas-zero",
        r = `nodrag size-11 text-dreamina-on-media-text-primary ${o} hover:border-dreamina-stroke-secondary hover:bg-dreamina-bg-mask-80 active:border-dreamina-stroke-secondary active:bg-dreamina-bg-mask-80`,
        d = "size-[22px] shrink-0",
        u = (0, s.memo)(function (e) {
          return (0, a.jsx)("span", {
            "aria-hidden": "true",
            className: (0, n.cn)(
              "pointer-events-none items-center justify-center text-dreamina-on-media-text-primary",
              l,
              o,
              e.className,
            ),
            "data-testid": e.testId ?? "video-play-overlay-indicator",
            children: (0, a.jsx)(n.hHu, { className: d, size: 22 }),
          });
        }),
        c = (0, s.memo)(function (e) {
          return (0, a.jsx)("span", {
            className: `${l}${e.className ? ` ${e.className}` : ""}`,
            children: (0, a.jsx)(n.$nd, {
              ref: e.buttonRef,
              "aria-label": e.label,
              className: r,
              "data-testid": e.testId,
              size: "unframed",
              type: "button",
              variant: "text",
              onClick: e.onClick,
              onPointerDown: e.onPointerDown,
              onPointerEnter: e.onPointerEnter,
              onPointerLeave: e.onPointerLeave,
              children: (0, a.jsx)(n.hHu, { className: d, size: 22 }),
            }),
          });
        });
      i.d(t, {}, { ZP: c, x3: u });
    },
    77117(e, t, i) {
      var a = i(78425);
      function s() {
        return "Loading camera movements\u2026";
      }
      function n() {
        return a.Ay.t(
          "octo_canvas_motion_picker_clear_selection",
          {},
          "Clear selection",
        );
      }
      function l(e) {
        return `Play ${e} preview`;
      }
      function o(e) {
        return `${e} preview`;
      }
      function r() {
        return a.Ay.t(
          "octo_director_stage_camera_preset_failed",
          {},
          "Couldn't add camera move. Try again.",
        );
      }
      i.d(t, {
        IL: () => n,
        J7: () => r,
        RO: () => l,
        aL: () => s,
        bL: () => o,
      });
    },
    60074(e, t, i) {
      var a = i(78425),
        s = i(66876),
        n = i(96783);
      function l(e) {
        switch (e) {
          case "free":
            return a.Ay.t("octo_palette_mode_custom", {}, "Choose colors");
          case "analogous":
            return a.Ay.t(
              "octo_palette_mode_analogous",
              {},
              "Similar colors\n",
            );
          case "complementary":
            return a.Ay.t(
              "octo_palette_mode_complementary",
              {},
              "Complementary colors",
            );
          case "triad":
            return a.Ay.t("octo_palette_mode_triad", {}, "Triadic colors");
        }
      }
      function o(e) {
        return a.Ay.t(
          "octo_palette_untitled",
          { number: e },
          "Untitled palette {number}",
        );
      }
      function r() {
        return "Loading palettes\u2026";
      }
      function d(e) {
        return a.Ay.t(
          "octo_palette_color_count",
          { count: e, num: e },
          "{num, plural, one {{count} colour selected} other {{count} colours selected}}",
        );
      }
      function u(e) {
        return `Colour ${e + 1}`;
      }
      function c() {
        return {
          name: "Palette name",
          main: a.Ay.t("octo_palette_main", {}, "Primary"),
          add: "Add colour",
          remove: "Remove colour",
          hex: "Hex colour",
          hue: "Hue",
          saturationValue: "Saturation and brightness",
          wheel: "Colour wheel",
          wheelHint:
            "Use arrow keys to change colour. Alt + arrow keys reorder swatches.",
          replaceImage: "Replace image",
          replaceImageAction: (0, s.Dn)(),
          create: a.Ay.t("skill_button_create", {}, "Create"),
          save: a.Ay.t("skill_button_save", {}, "Save"),
          edit: a.Ay.t("octo_palette_edit_action", {}, "Edit"),
          delete: a.Ay.t("octo_palette_delete_action", {}, "Delete"),
          more: "Palette actions",
          previousColours: "Previous colours",
          nextColours: "Next colours",
          editColor: "Edit",
          eyedropper: "Pick a colour from the screen",
          eyedropperUnavailable:
            "Screen colour picking is unavailable in this browser.",
          libraryUnavailable: "Palette saving is not available yet.",
          libraryReadonly: "Palette editing is unavailable in this view.",
        };
      }
      function h() {
        return "Edit palette";
      }
      function v(e) {
        switch (e) {
          case "unconfirmed":
          case "save":
            return (0, n.eQ)();
          case "delete":
            return (0, n._y)();
          case "limit":
            return a.Ay.t(
              "octo_palette_library_limit",
              {},
              "You've reached the maximum number of palettes. Remove some before creating new ones.",
            );
        }
      }
      function p() {
        return a.Ay.t(
          "octo_palette_source_deleted",
          {},
          "The linked palette was deleted. Select another palette.",
        );
      }
      function m() {
        return a.Ay.t("octo_palette_select_action", {}, "Select palette");
      }
      function g() {
        return a.Ay.t(
          "web_new_feed_content_reviewing_notice",
          {},
          "Under review",
        );
      }
      function f() {
        return (0, n.vR)();
      }
      i.d(t, {
        B_: () => o,
        C5: () => c,
        Dq: () => g,
        Ei: () => p,
        Iu: () => d,
        Qk: () => m,
        RP: () => l,
        YT: () => h,
        f8: () => u,
        lI: () => r,
        xq: () => v,
        xr: () => f,
      });
    },
  },
]);
