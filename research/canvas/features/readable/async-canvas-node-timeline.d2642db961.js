"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [3570],
  {
    72361(e, t, i) {
      i.d(t, { TimelineFlowNode: () => eh });
      var n = i(90561),
        a = i(29348),
        l = i(20438),
        r = i(56958),
        o = i(64246),
        s = i(52902),
        d = i(24548),
        c = i(15882),
        u = i(31327),
        p = i(62330),
        m = i(1265),
        v = i(87429),
        f = i(78296),
        h = i(63074),
        x = i(66876),
        g = i(172),
        k = i(39243),
        b = i(93998),
        w = i(60794),
        C = i(30531),
        P = i(56483),
        y = i(22635),
        I = i(40627),
        T = i(8621),
        S = i(91229),
        j = i(85817),
        A = i(4030),
        E = i(80699),
        R = i(14567),
        D = i(14633),
        M = i(335),
        V = i(24771),
        N = i(93420),
        O = i(46471),
        L = i(63098),
        z = i(86986),
        B = i(21248),
        _ = i(39767),
        W = i(93400);
      function F(e) {
        return Number.isFinite(e)
          ? Math.min(2400, Math.max(720, e ?? W.CP))
          : W.CP;
      }
      let $ = (0, v.memo)(function (e) {
        var t, i, a, l, r, o, s, d;
        let u,
          p,
          m,
          f,
          h,
          k,
          w,
          C,
          P,
          y = null == (t = (0, b.FY)().featuresApi) ? void 0 : t.canvas.actions,
          I = null == y ? void 0 : y.resizeTimelineNode,
          T =
            ((i = y),
            (a = I),
            (u = (0, v.useCallback)(
              (e) => (null == i ? void 0 : i.subscribe(e)) ?? (() => void 0),
              [i],
            )),
            (p = (0, v.useCallback)(
              () => (null == a ? void 0 : a.getState().available) === !0,
              [a],
            )),
            (0, v.useSyncExternalStore)(u, p, p)),
          S = (0, v.useRef)(null),
          j = (0, c.kW)(),
          A = (function (e, t, i) {
            let n,
              a,
              l,
              r,
              o,
              s = (0, v.useRef)(null),
              {
                applyPreview: d,
                cancelScheduledPreview: c,
                queuePreview: u,
              } = ((n = (0, v.useRef)(null)),
              (a = (0, v.useRef)(null)),
              (l = (0, v.useCallback)(
                (i) => {
                  null == t || t.preview(e, i);
                },
                [t, e],
              )),
              (r = (0, v.useCallback)(() => {
                (null !== a.current && window.cancelAnimationFrame(a.current),
                  (a.current = null),
                  (n.current = null));
              }, [])),
              (o = (0, v.useCallback)(
                (e) => {
                  ((n.current = e),
                    null === a.current &&
                      (a.current = requestAnimationFrame(() => {
                        a.current = null;
                        let e = n.current;
                        ((n.current = null), null !== e && l(e));
                      })));
                },
                [l],
              )),
              { applyPreview: l, cancelScheduledPreview: r, queuePreview: o }),
              p = (0, v.useCallback)(
                () => (null == t ? void 0 : t.restoreAuthority(e)),
                [t, e],
              ),
              m = (0, v.useCallback)(
                (i) => {
                  let n = s.current;
                  if (!n) return;
                  if (
                    ((s.current = null),
                    c(),
                    !i || n.lastWidth === n.startWidth)
                  )
                    return void p();
                  d(n.lastWidth);
                  let a = null == t ? void 0 : t.execute(e, n.lastWidth);
                  a
                    ? a.then((e) => {
                        e.ok || p();
                      })
                    : p();
                },
                [t, d, c, e, p],
              );
            return (
              (0, v.useEffect)(() => {
                i || m(!1);
              }, [i, m]),
              (0, v.useEffect)(
                () => () => {
                  let e = s.current;
                  ((s.current = null), c(), e && p());
                },
                [c, p],
              ),
              (0, v.useMemo)(
                () => ({ finishSession: m, queuePreview: u, sessionRef: s }),
                [m, u],
              )
            );
          })(e.nodeId, I, T),
          E =
            ((l = e.width),
            (r = A),
            (m = (0, v.useCallback)(() => {
              let e = r.sessionRef.current;
              if (e) return e;
              let t = { lastWidth: l, startWidth: l };
              return ((r.sessionRef.current = t), t);
            }, [r.sessionRef, l])),
            (f = (0, v.useCallback)(
              (e) => {
                if ("Escape" === e.key || "Enter" === e.key) {
                  (e.preventDefault(),
                    e.stopPropagation(),
                    r.finishSession("Enter" === e.key));
                  return;
                }
                if ("ArrowLeft" !== e.key && "ArrowRight" !== e.key) return;
                (e.preventDefault(), e.stopPropagation());
                let t = m(),
                  i = "ArrowLeft" === e.key ? -8 : 8;
                ((t.lastWidth = F(t.lastWidth + i)),
                  r.queuePreview(t.lastWidth));
              },
              [r, m],
            )),
            (h = (0, v.useCallback)(
              (e) => {
                ("ArrowLeft" === e.key || "ArrowRight" === e.key) &&
                  r.finishSession(!0);
              },
              [r],
            )),
            {
              onBlur: (0, v.useCallback)(() => r.finishSession(!0), [r]),
              onKeyDown: f,
              onKeyUp: h,
            }),
          R =
            ((o = e.width),
            (s = j.zoom),
            (d = A),
            (k = (0, v.useCallback)(
              (e) => {
                var t;
                let i,
                  n = d.sessionRef.current;
                return (null == n ? void 0 : n.pointerId) === e.pointerId &&
                  void 0 !== n.startClientX &&
                  Number.isFinite(e.clientX)
                  ? ((i =
                      Number.isFinite(
                        (t = {
                          currentClientX: e.clientX,
                          startClientX: n.startClientX,
                          startWidth: n.startWidth,
                          viewportZoom: s,
                        }).viewportZoom,
                      ) && t.viewportZoom > 0
                        ? t.viewportZoom
                        : 1),
                    (n.lastWidth = F(
                      t.startWidth + (t.currentClientX - t.startClientX) / i,
                    )),
                    n)
                  : null;
              },
              [d.sessionRef, s],
            )),
            (w = (0, v.useCallback)(
              (e) => {
                var t, i;
                0 !== e.button ||
                  d.sessionRef.current ||
                  (e.preventDefault(),
                  e.stopPropagation(),
                  null == (t = (i = e.currentTarget).setPointerCapture) ||
                    t.call(i, e.pointerId),
                  (d.sessionRef.current = {
                    lastWidth: o,
                    pointerId: e.pointerId,
                    startClientX: e.clientX,
                    startWidth: o,
                  }));
              },
              [d.sessionRef, o],
            )),
            (C = (0, v.useCallback)(
              (e) => {
                let t = k(e);
                t &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  d.queuePreview(t.lastWidth));
              },
              [d, k],
            )),
            (P = (0, v.useCallback)(
              (e) => {
                k(e) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  d.finishSession(!0));
              },
              [d, k],
            )),
            {
              onLostPointerCapture: (0, v.useCallback)(
                (e) => {
                  var t;
                  (null == (t = d.sessionRef.current)
                    ? void 0
                    : t.pointerId) === e.pointerId && d.finishSession(!1);
                },
                [d],
              ),
              onPointerCancel: (0, v.useCallback)(
                () => d.finishSession(!1),
                [d],
              ),
              onPointerDown: w,
              onPointerMove: C,
              onPointerUp: P,
            });
        return T
          ? (0, n.jsx)(g.$nd, {
              ref: S,
              ...E,
              ...R,
              "aria-keyshortcuts": "ArrowLeft ArrowRight",
              "aria-label": (0, x.s7R)(),
              "aria-orientation": "vertical",
              "aria-valuemax": 2400,
              "aria-valuemin": 720,
              "aria-valuenow": e.width,
              className:
                "nodrag nopan absolute z-40 top-0 right-[-6px] w-canvas-timeline-node-resize-hit min-w-canvas-timeline-node-resize-hit h-full p-0 cursor-ew-resize bg-transparent border-0 rounded-none hover:bg-transparent active:bg-transparent focus-visible:bg-transparent after:absolute after:top-canvas-timeline-node-drag-placeholder-inset after:bottom-canvas-timeline-node-drag-placeholder-inset after:left-canvas-timeline-node-resize-indicator after:w-canvas-timeline-node-resize-indicator after:content-[''] after:bg-dreamina-text-primary after:rounded-canvas-timeline-node-resize-indicator after:opacity-0 after:[transition:opacity_var(--dreamina-motion-duration-element)_var(--dreamina-motion-easing-soft)] hover:after:opacity-100 active:after:opacity-100 focus-visible:after:opacity-100",
              "data-testid": "timeline-node-resize-handle",
              role: "separator",
              size: "icon",
              type: "button",
              variant: "text",
            })
          : null;
      });
      var X = i(87975),
        q = i(15243),
        H = i(78033),
        Y = i(74251),
        U = i(24994),
        G = i(14179),
        K = i(28091),
        J = i(48438),
        Z = i(81472),
        Q = i(21498),
        ee = i(10899),
        et = i(9191),
        ei = i(95474),
        en = i(20666),
        ea = i(7696),
        el = i(79253),
        er = i(76622),
        eo = i(1402),
        es = i(81719),
        ed = i(39554),
        ec = i(68648),
        eu = i(41131),
        ep = i(76992),
        em = i(73936);
      let ev = (0, n.jsx)(g.hu1, { size: 16 }),
        ef =
          "relative z-canvas-timeline-track-gutter flex-none w-canvas-timeline-node-track-gutter h-full bg-dreamina-canvas-frame",
        eh = (0, v.memo)(function (e) {
          var t, i, a, r, o, s, c, u, p, m, h, g, k, C;
          let T,
            R,
            D,
            M,
            V,
            N,
            O,
            L,
            z,
            W,
            $,
            X = (0, b.FY)(),
            { writeChromeVisible: q } = (0, w.A1)(),
            H = (0, j.V)(e.id, e.selected),
            Y = (0, y.RN)(e.data),
            U =
              H || !0 === e.data.renderInteractionActive || Y
                ? "full"
                : (e.data.renderMode ?? "full"),
            G = "full" !== U || (void 0 !== e.data.renderMode && !H && !Y),
            J = (0, v.useRef)(null),
            Z = null == (t = X.featuresApi) ? void 0 : t.canvas.actions,
            ee = (0, S.Bf)("timeline"),
            ei = F(e.width),
            en =
              ((T = (0, v.useRef)()),
              {
                save: (0, v.useCallback)((e) => {
                  T.current = e;
                }, []),
                snapshot: T.current,
              }),
            ea = (function (e, t, i, n) {
              var a, l, r;
              let o,
                [s, d] = (0, v.useState)(!1);
              return (
                (0, v.useEffect)(() => {
                  if (!t) return void d(!1);
                  if (n.consumeTimelinePreviewActivation(i)) return void d(!0);
                  let a = e.current,
                    l = null == a ? void 0 : a.closest(".react-flow__node");
                  l instanceof HTMLElement &&
                    l ===
                      (null == a ? void 0 : a.ownerDocument.activeElement) &&
                    d(!0);
                }, [t, i, e, n]),
                (0, v.useEffect)(() => {
                  if (t)
                    return n.subscribeTimelinePreviewActivation((e) => {
                      e === i && n.consumeTimelinePreviewActivation(i) && d(!0);
                    });
                }, [t, i, n]),
                (a = e),
                (l = s),
                (r = (0, v.useCallback)(() => d(!0), [])),
                (o = (0, v.useRef)(null)),
                (0, v.useEffect)(() => {
                  if (l) return;
                  let e = a.current;
                  if (!e) return;
                  let t = e.ownerDocument.defaultView;
                  if (!t) return;
                  let i = !1,
                    n = () => {
                      i &&
                        ((i = !1),
                        (o.current = null),
                        t.removeEventListener("pointercancel", d),
                        t.removeEventListener("pointermove", c),
                        t.removeEventListener("pointerup", u));
                    };
                  function s(a) {
                    0 !== a.button ||
                      !a.isPrimary ||
                      ek(a.target, e) ||
                      (n(),
                      (o.current = {
                        pointerId: a.pointerId,
                        startX: a.clientX,
                        startY: a.clientY,
                      }),
                      (i = !0),
                      t.addEventListener("pointercancel", d),
                      t.addEventListener("pointermove", c),
                      t.addEventListener("pointerup", u));
                  }
                  function d(e) {
                    var t;
                    (null == (t = o.current) ? void 0 : t.pointerId) ===
                      e.pointerId && n();
                  }
                  function c(e) {
                    let t = o.current;
                    (null == t ? void 0 : t.pointerId) !== e.pointerId ||
                      (Math.hypot(e.clientX - t.startX, e.clientY - t.startY) >
                        5 &&
                        n());
                  }
                  function u(e) {
                    let t = o.current;
                    if ((null == t ? void 0 : t.pointerId) !== e.pointerId)
                      return;
                    let i = Math.hypot(
                      e.clientX - t.startX,
                      e.clientY - t.startY,
                    );
                    (n(), i <= 5 && r());
                  }
                  function p(t) {
                    0 !== t.detail || ek(t.target, e) || r();
                  }
                  return (
                    e.addEventListener("pointerdown", s),
                    e.addEventListener("click", p),
                    () => {
                      (n(),
                        e.removeEventListener("pointerdown", s),
                        e.removeEventListener("click", p));
                    }
                  );
                }, [r, l, a]),
                t && s
              );
            })(J, H && !G, e.id, X.viewInteractions);
          ((i = X),
            (a = e.id),
            (r = ea),
            (0, v.useEffect)(() => {
              if (!r) return;
              let e = (0, f.s$)(i.viewport);
              return (
                e.present({ kind: "nodes", nodeIds: [a] }),
                () => {
                  e.cancel();
                }
              );
            }, [i.viewport, a, r]));
          let el =
              ((o = e.data),
              (s = e.id),
              (c = ei),
              (u = !G && H && void 0 !== Z),
              (R = (0, ec.GU)(o.clips[0])),
              (D = (function (e, t, i) {
                let n = (0, _.S)(i),
                  a = (0, v.useCallback)(() => n("stretch"), [n]),
                  {
                    commitPendingScroll: r,
                    handleWheel: o,
                    pixelsPerSecond: s,
                  } = (0, em.k1)(32.1, 11, t, a),
                  d = (0, v.useMemo)(() => (0, l.g)(e, s), [s, e]);
                return {
                  commitPendingScroll: r,
                  handleWheel: o,
                  pixelsPerSecond: s,
                  scale: d,
                };
              })(o.totalDurationTick, R, s)),
              (M = (0, v.useMemo)(
                () => (0, et.jB)(o.clips, D.scale),
                [o.clips, D.scale],
              )),
              (V = (0, v.useRef)(null)),
              (N = Math.max(1, c - 3 - 66)),
              (O = (0, ed.d)(V, u, N)),
              (L = (0, ec.ZL)({
                headroomTick: R,
                pixelsPerSecond: D.pixelsPerSecond,
                syncViewport: O.sync,
                viewportRef: V,
              })),
              (z = 11 + (0, ec.IZ)(R, D.pixelsPerSecond)),
              (W = (0, v.useMemo)(
                () => (0, B.L1)(O.viewport, z, 0),
                [z, O.viewport],
              )),
              ($ = (0, v.useMemo)(
                () =>
                  (0, et.A9)({
                    majorStepTick: M.majorStepTick,
                    minorStepTick: M.minorStepTick,
                    pixelsPerTick: M.pixelsPerTick,
                    rulerDurationTick: M.rulerDurationTick,
                    viewport: W,
                  }),
                [M, W],
              )),
              {
                contentOffsetPixels: z,
                geometry: M,
                onScroll: L,
                ref: O.ref,
                rulerViewport: O.viewport,
                scrollViewportRef: V,
                ticks: $,
                viewport: W,
                zoom: D,
              }),
            er =
              ((p = G || H),
              (m = e.data.clips.length),
              (h = el),
              (0, v.useMemo)(
                () =>
                  p
                    ? { endIndex: m, startIndex: 0 }
                    : (0, et.id)(h.geometry.clips, h.viewport),
                [m, p, h.geometry.clips, h.viewport],
              )),
            eo = (function (e, t, i, n, a, l, r) {
              let o = (0, v.useMemo)(
                  () => e.clips.slice(a.startIndex, a.endIndex),
                  [e.clips, a.endIndex, a.startIndex],
                ),
                s = (0, v.useMemo)(
                  () =>
                    r
                      ? (e.audioTracks ?? []).flatMap((e) => {
                          if (i || t) return [e];
                          if (e.muted) return [];
                          let n = e.clips.filter(
                            (e) => !e.muted && e.volume > 0,
                          );
                          return 0 === n.length ? [] : [{ ...e, clips: n }];
                        })
                      : [],
                  [i, e.audioTracks, r, t],
                ),
                c = (0, v.useMemo)(
                  () => ({ clips: o, audioTracks: s }),
                  [s, o],
                ),
                {
                  data: u,
                  requestPending: p,
                  resourceById: m,
                  resources: f,
                  resolvedResourceIdBySourceNodeId: h,
                  audioOutputIndexBySourceNodeId: x,
                } = (0, K.A)(c, n, !0),
                g = (0, v.useMemo)(
                  () =>
                    (0, P.DL)(e, h, {
                      preserveExistingResolution: !0,
                      audioOutputIndexBySourceNodeId: x,
                    }),
                  [e, h, x],
                ),
                k = (0, v.useMemo)(
                  () => g.clips.slice(a.startIndex, a.endIndex),
                  [g.clips, a.endIndex, a.startIndex],
                );
              return {
                data: g,
                errorCount: f.filter(
                  (e) =>
                    (null == e ? void 0 : e.status) === d.ao.failed ||
                    (null == e ? void 0 : e.status) === d.ao.canceled,
                ).length,
                mainTrackProps: {
                  aspectRatio: g.aspectRatio,
                  audioTracks: g.audioTracks,
                  clips: g.clips,
                  layout: l,
                  resourceById: m,
                  trackPresentation: (function (e) {
                    let t = (e.audioTracks ?? []).reduce(
                        (e, t) => e + t.clips.length,
                        0,
                      ),
                      i = [
                        ...e.visibleClips.map((t) => ({
                          clip: t,
                          resource: (0, P.GJ)(t, e.resourceById),
                        })),
                        ...e.subscribedAudioTracks.flatMap((t) =>
                          t.clips.map((t) => ({
                            clip: t,
                            resource: (0, P.GJ)(t, e.resourceById),
                          })),
                        ),
                      ],
                      n = !1,
                      a = !1,
                      l = !1;
                    for (let t of i) {
                      var r, o;
                      let { clip: i, resource: s } = t;
                      if (!s) {
                        e.requestPending && (a = !0);
                        continue;
                      }
                      if (
                        s.status === d.ao.failed ||
                        s.status === d.ao.canceled
                      ) {
                        l = !0;
                        continue;
                      }
                      if (
                        e.requestPending &&
                        !(function (e) {
                          var t;
                          let i = e.urls;
                          return (
                            !!i &&
                            (!!(
                              ("url" in i &&
                                (null == (t = i.url) ? void 0 : t.trim())) ||
                              (0, I.xX)(i) ||
                              ("resolution_urls" in i &&
                                Object.values(i.resolution_urls ?? {}).some(
                                  (e) => e.trim(),
                                ))
                            ) ||
                              ("resolution_source" in i &&
                                Object.values(i.resolution_source ?? {}).some(
                                  (e) => e.url.trim(),
                                )))
                          );
                        })(s)
                      ) {
                        a = !0;
                        continue;
                      }
                      if (
                        s.status === d.ao.success ||
                        ((r = i),
                        (o = s) &&
                          "audio" !== r.kind &&
                          ("image" === r.kind
                            ? o.type === d._x.image &&
                              void 0 !== (0, A.RB)(o.urls)
                            : void 0 !==
                              (0, E.nf)({
                                resource: o,
                                resourceId: o.resource_id,
                              }).posterUrl))
                      ) {
                        n = !0;
                        continue;
                      }
                      a = !0;
                    }
                    return i.length > 0 && a && !n && !l
                      ? "loading"
                      : t > 0
                        ? "expanded"
                        : "compact";
                  })({
                    audioTracks: g.audioTracks,
                    requestPending: p,
                    subscribedAudioTracks: u.audioTracks ?? [],
                    visibleClips: k,
                    resourceById: m,
                  }),
                  totalDurationTick: g.totalDurationTick,
                  visualTrackMuted: g.visualTrackMuted ?? !1,
                  visibleClipStartIndex: a.startIndex,
                  visibleClips: k,
                },
                pendingCount: f.filter(
                  (e) => (null == e ? void 0 : e.status) === d.ao.running,
                ).length,
                readyCount: f.filter(
                  (e) => (null == e ? void 0 : e.status) === d.ao.success,
                ).length,
                resourceCount: f.length,
                resourceRequestPending: p,
              };
            })(
              e.data,
              ea,
              !G && H,
              H || !0 === e.data.sourcePreviewInViewport,
              er,
              el,
              "full" === U,
            ),
            es = (function (e, t, i) {
              let [n, a] = (0, v.useState)(eg),
                l = (0, Q.Se)(e, t, i || n.active);
              (0, v.useEffect)(() => {
                !n.active ||
                  n.pendingAdmissionCount > 0 ||
                  l.items.length > 0 ||
                  a(eg);
              }, [l.items.length, n.active, n.pendingAdmissionCount]);
              let r = (0, v.useCallback)(
                  () =>
                    a((e) => ({
                      active: !0,
                      pendingAdmissionCount: e.pendingAdmissionCount + 1,
                    })),
                  [],
                ),
                o = (0, v.useCallback)(
                  () =>
                    a((e) => ({
                      active: !0,
                      pendingAdmissionCount: Math.max(
                        0,
                        e.pendingAdmissionCount - 1,
                      ),
                    })),
                  [],
                );
              return {
                observation: (0, v.useMemo)(
                  () => ({ settleAdmission: o, start: r }),
                  [o, r],
                ),
                snapshot: l,
              };
            })(X, e.id, !G && e.selected && void 0 !== Z),
            eu =
              ((g = e),
              (k = eo.mainTrackProps.trackPresentation),
              (0, x.Et5)({
                audioTrackCount:
                  (null == (C = g.data.audioTracks) ? void 0 : C.length) ?? 0,
                clipCount:
                  g.data.clips.length +
                  (g.data.audioTracks ?? []).reduce(
                    (e, t) => e + t.clips.length,
                    0,
                  ),
                loading: "loading" === k,
                selected: g.selected,
              }));
          return (0, n.jsx)(ex, {
            accessibleDescription: eu,
            actions: Z,
            editor: X,
            interactive: H,
            passivePresentation: G,
            presentation: eo,
            previewSnapshotSession: en,
            props: e,
            renderMode: U,
            rootRef: J,
            titleEditorOptions: ee,
            upload: es,
            width: ei,
            writeChromeVisible: q,
            previewActive: ea,
          });
        });
      function ex(e) {
        var t, i;
        let {
            accessibleDescription: a,
            actions: l,
            editor: r,
            interactive: d,
            passivePresentation: c,
            presentation: u,
            previewSnapshotSession: p,
            props: m,
            renderMode: v,
            rootRef: f,
            titleEditorOptions: h,
            upload: x,
            width: g,
            writeChromeVisible: k,
            previewActive: b,
          } = e,
          w = (0, ep.Ge)({
            audioTracks: "full" === v ? u.mainTrackProps.audioTracks : void 0,
            interactive: !c && d,
            resourceById: u.mainTrackProps.resourceById,
            resourceRequestPending: u.resourceRequestPending,
            timelineId: m.id,
            totalDurationTick: u.mainTrackProps.totalDurationTick,
          }),
          C = "full" === v && "loading" === u.mainTrackProps.trackPresentation,
          P = C && u.resourceCount > 0 && u.pendingCount === u.resourceCount,
          y = (C && !P) || w.pending,
          I = y ? "unresolved" : P ? "generating" : w.state,
          T = (t = {
            actions: l,
            editor: r,
            interactive: d,
            presentation: u,
            previewSnapshotSession: p,
            passivePresentation: c,
            props: m,
            renderMode: v,
            rootRef: f,
            upload: x,
            waveform: w.waveform,
            writeChromeVisible: k,
            previewActive: b,
          }).passivePresentation
            ? "full" === t.renderMode
              ? (0, n.jsx)(eb, {
                  ...t.presentation.mainTrackProps,
                  actions: t.actions,
                  data: t.presentation.data,
                  editor: t.editor,
                  timelineId: t.props.id,
                  uploadObservation: t.upload.observation,
                  uploadSnapshot: t.upload.snapshot,
                  waveform: t.waveform,
                  writeChromeVisible: t.writeChromeVisible,
                })
              : (0, n.jsx)(ew, {
                  ...t.presentation.mainTrackProps,
                  timelineId: t.props.id,
                  uploadSnapshot: t.upload.snapshot,
                  writeChromeVisible: t.writeChromeVisible,
                })
            : (0, n.jsx)(ey, {
                actions: t.actions,
                data: t.presentation.data,
                editor: t.editor,
                interactive: t.interactive,
                keyboardScopeRef: t.rootRef,
                mainTrackProps: t.presentation.mainTrackProps,
                previewActive: t.previewActive,
                previewSnapshot: t.previewSnapshotSession.snapshot,
                resourceRequestPending: t.presentation.resourceRequestPending,
                timelineId: t.props.id,
                uploadObservation: t.upload.observation,
                uploadSnapshot: t.upload.snapshot,
                waveform: t.waveform,
                onPreviewSnapshotChange: t.previewSnapshotSession.save,
                writeChromeVisible: t.writeChromeVisible,
              }),
          j = null;
        return (
          !m.dragging &&
            !c &&
            d &&
            k &&
            (j = (0, n.jsx)($, { nodeId: m.id, width: g })),
          (0, n.jsxs)(S.Jm, {
            accessibleDescription: a,
            className:
              "octo-timeline-node-shell w-full p-0 bg-dreamina-canvas-frame rounded-canvas-timeline-node-surface after:content-none",
            metadataSuppressed: b,
            connectable: !!k && m.isConnectable,
            dragging: m.dragging,
            errorCount: u.errorCount,
            frame: "overlay",
            fillParentHeight: !1,
            nodeId: m.id,
            pendingCount: u.pendingCount,
            readyCount: u.readyCount,
            resourceCount: u.resourceCount,
            selected: m.selected,
            connectionHandles: "target",
            showHeader: !1,
            style: {
              height: (0, o.Qz)(u.mainTrackProps.trackPresentation),
              width: g,
            },
            surfaceRef: f,
            tagPresentation:
              ((i = m.data.tagPresentation), k || void 0 !== i ? i : null),
            contentPresentation: (0, s.s4)(y ? "pending" : "frame_estimate", I),
            testId: "timeline-flow-node",
            title: m.data.title,
            titleEditable: !!k && d,
            titleEditorOptions: h,
            titleIcon: ev,
            titleOverlayMode: "always",
            titleRenameActionName: "renameTimelineNode",
            titleVariant: "media",
            children: [T, j],
          })
        );
      }
      let eg = { active: !1, pendingAdmissionCount: 0 };
      function ek(e, t) {
        return (
          !(
            !(e instanceof Element) ||
            e === t ||
            e.closest('[data-timeline-clip-surface="visual"]')
          ) &&
          !!e.closest(
            'button, a, input, select, textarea, [contenteditable="true"], [role="slider"], [role="separator"], [data-flow-node-title="true"], [data-timeline-preview-activation-excluded="true"]',
          )
        );
      }
      let eb = (0, v.memo)(function (e) {
          var t, i, l, r, o, s, d;
          let c,
            u = eN(!1),
            p = e$(),
            m = eq(e.actions, e.timelineId, e.writeChromeVisible, u.active),
            f = eX(e.actions, e.timelineId, e.writeChromeVisible, p),
            h = (0, v.useMemo)(() => eV(e.uploadSnapshot), [e.uploadSnapshot]),
            x =
              ((t = e),
              (i = h),
              (c = (0, n.jsx)(eL, {
                editor: t.editor,
                timelineId: t.timelineId,
                viewOnly: !t.writeChromeVisible,
              })),
              t.writeChromeVisible
                ? {
                    downloadAction: (0, n.jsx)(N.n, {
                      data: t.data,
                      deferSubscriptions: !0,
                      editableProjectDownloadSession:
                        null == (l = t.editor.featuresApi)
                          ? void 0
                          : l.canvas.editableProjectDownload,
                      exportSession:
                        null == (r = t.editor.featuresApi)
                          ? void 0
                          : r.canvas.timelineExport,
                      jianyingDraftGenerateSession:
                        null == (o = t.editor.featuresApi)
                          ? void 0
                          : o.canvas.jianyingDraftGenerate,
                      materialExportSession:
                        null == (s = t.editor.featuresApi)
                          ? void 0
                          : s.canvas.materialExport,
                      showFeedback: !1,
                      timelineId: t.timelineId,
                      timelineRenderSession:
                        null == (d = t.editor.featuresApi)
                          ? void 0
                          : d.canvas.timelineRender,
                    }),
                    fullscreenAction: c,
                    sourcePicker: (0, n.jsx)(Q.rN, {
                      deferSubscriptions: !0,
                      editor: t.editor,
                      empty: 0 === t.clips.length,
                      nodeDragHotZone: !0,
                      onUploadObservationSettled:
                        t.uploadObservation.settleAdmission,
                      onUploadObservationStart: t.uploadObservation.start,
                      showNotifications: !1,
                      timelineId: t.timelineId,
                      uploadSnapshot: i,
                    }),
                  }
                : { fullscreenAction: c, sourcePicker: null }),
            g = eO(e.audioTracks, e.totalDurationTick),
            k = (0, a.x1)(e.layout),
            b = eK(g, k.geometry.pixelsPerTick, k.viewport),
            w = (0, v.useMemo)(
              () => ({
                ...e.data,
                clips: e.clips,
                audioTracks: e.audioTracks,
                totalDurationTick: e.totalDurationTick,
                visualTrackMuted: e.visualTrackMuted,
              }),
              [
                e.data,
                e.clips,
                e.audioTracks,
                e.totalDurationTick,
                e.visualTrackMuted,
              ],
            );
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(a.Vs, {
                data: w,
                resourceById: e.resourceById,
                width: k.rulerViewport.widthPixels + 3 + 66,
                layout: k,
                trackPresentation: e.trackPresentation,
                frame: {
                  currentTimeTick: 0,
                  downloadAction: x.downloadAction,
                  fullscreenAction: x.fullscreenAction,
                  onBlurCapture: u.onBlurCapture,
                  onFocusCapture: u.onFocusCapture,
                  onPointerEnter: u.onPointerEnter,
                  onPointerLeave: u.onPointerLeave,
                  writeChromeVisible: e.writeChromeVisible,
                },
                muteControl: (0, n.jsx)(eJ, {
                  active: !!(e.writeChromeVisible && e.actions),
                  audioTracks: e.audioTracks,
                  editAvailable: m,
                  onToggleMuted: f,
                  visualTrackMuted: e.visualTrackMuted,
                }),
                lane: (0, n.jsx)(eZ, {
                  audioTrackDurationTick: g,
                  clips: e.clips,
                  layout: k,
                  muteControl: null,
                  pendingClips: h.items,
                  resourceById: e.resourceById,
                  sourcePicker: x.sourcePicker,
                  timelineId: e.timelineId,
                  trackPresentation: e.trackPresentation,
                  visibleClipStartIndex: e.visibleClipStartIndex,
                  visibleClips: e.visibleClips,
                  waveform: e.waveform,
                  active: !1,
                  announcePendingClips: !1,
                  clipInteractionActive: !1,
                  currentTimeTick: 0,
                  sourcePickerPlacement: "absolute-clamped",
                  sourcePreviewInViewport: !1,
                  thumbnailPreparation: "eager",
                  waveformPathWindow: b,
                }),
              }),
              (0, n.jsx)(eP, { snapshot: e.uploadSnapshot }),
            ],
          });
        }),
        ew = (0, v.memo)(function (e) {
          let { geometry: t } = e.layout,
            i = eV(e.uploadSnapshot).items,
            a = (0, v.useMemo)(
              () =>
                0 === e.layout.viewport.scrollLeftPixels
                  ? e.layout.viewport
                  : { ...e.layout.viewport, scrollLeftPixels: 0 },
              [e.layout.viewport],
            );
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                "aria-hidden": "true",
                className:
                  "relative size-full overflow-hidden bg-dreamina-canvas-frame rounded-canvas-timeline-node-surface",
                "data-render-mode": "micro",
                "data-testid": "timeline-micro-track",
                children:
                  ej(e) && 0 === i.length
                    ? (0, n.jsx)(eC, { ...e, viewport: a })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "pointer-events-none absolute inset-x-0 top-0 flex h-canvas-timeline-node-toolbar items-center justify-center gap-canvas-timeline-node-playback-gap",
                            "data-testid": "timeline-micro-playback-summary",
                            children: (0, n.jsx)(H.H, {
                              currentTimeTick: 0,
                              playing: !1,
                              totalDurationTick: e.totalDurationTick,
                              variant: "node",
                            }),
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "absolute h-canvas-timeline-node-visual-clip",
                            "data-testid": "timeline-micro-track-canvas",
                            style: {
                              marginInlineStart: e7(78.5),
                              top: e7(99),
                              width: e7(
                                Math.max(
                                  t.rulerWidthPixels,
                                  t.contentEndPixels,
                                ),
                              ),
                            },
                            children: [
                              ej(e) && 0 === i.length
                                ? (0, n.jsx)(z.ex, {
                                    contentOffsetPixels:
                                      e.layout.contentOffsetPixels,
                                    viewport: a,
                                  })
                                : null,
                              e.visibleClips.map((i, l) => {
                                let r = e.visibleClipStartIndex + l,
                                  o = t.clips[r];
                                if (!o) return null;
                                let s = (0, M.pl)(o.durationPixels),
                                  d = (0, el.s)(o.startPixels, s, a);
                                return (0, n.jsx)(
                                  "div",
                                  {
                                    className: `octo-timeline-visual-clip absolute top-0 h-canvas-timeline-node-visual-clip ${M.Tp}`,
                                    "data-timeline-light-clip-id": i.clipId,
                                    style: {
                                      left: e7(o.startPixels),
                                      width: e7(s),
                                    },
                                    children: (0, n.jsx)(V.A, {
                                      clip: i,
                                      clipWidthPixels: s,
                                      deferExtractionUntilVisible: !1,
                                      extractionEnabled: !0,
                                      previewHeightPixels: 84,
                                      resource: (0, P.GJ)(i, e.resourceById),
                                      timelineId: e.timelineId,
                                      viewportStartPixels:
                                        null == d ? void 0 : d.startPixels,
                                      viewportWidthPixels:
                                        null == d ? void 0 : d.widthPixels,
                                    }),
                                  },
                                  i.clipId,
                                );
                              }),
                              (0, n.jsx)(eQ, {
                                announce: !1,
                                contentEndPixels: t.contentEndPixels,
                                items: i,
                                previewVisible: !1,
                                viewport: a,
                              }),
                            ],
                          }),
                        ],
                      }),
              }),
              (0, n.jsx)(eP, { snapshot: e.uploadSnapshot }),
            ],
          });
        });
      function eC(e) {
        return (0, n.jsx)(r.O, {
          totalDurationTick: 0,
          writeChromeVisible: e.writeChromeVisible,
          children: (0, n.jsxs)("div", {
            className: "relative flex items-end w-full h-full overflow-visible",
            children: [
              (0, n.jsxs)("div", {
                className: ef,
                "data-testid": "timeline-track-gutter",
                children: [
                  (0, n.jsx)("span", {
                    className: `absolute top-[54px] inset-x-0 mx-auto flex items-center justify-center w-canvas-timeline-node-control h-canvas-timeline-node-control ${e.writeChromeVisible ? "text-dreamina-text-primary" : "text-dreamina-text-tertiary"}`,
                    children: (0, n.jsx)(en.H, {
                      muted: e.visualTrackMuted,
                      placement: "node-control",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className:
                      "absolute top-0 right-0 bottom-0 w-canvas-timeline-node-track-divider bg-canvas-timeline-node-track-divider pointer-events-none",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "relative self-start [flex:1_1_0] min-w-0 w-full h-full overflow-hidden",
                children: (0, n.jsxs)("div", {
                  className:
                    "relative flex flex-col min-w-full min-h-full gap-canvas-timeline-node-track-gap",
                  style: {
                    marginInlineStart: e7(e.layout.contentOffsetPixels),
                    minWidth: `calc(100% - ${e7(11)})`,
                    width: e7(e.layout.geometry.rulerWidthPixels),
                  },
                  children: [
                    (0, n.jsx)(J.i, {
                      geometry: e.layout.geometry,
                      ticks: e.layout.ticks,
                    }),
                    (0, n.jsx)(z.ex, {
                      contentOffsetPixels: e.layout.contentOffsetPixels,
                      viewport: e.viewport,
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function eP(e) {
        var t;
        let i,
          { snapshot: a } = e,
          l = (i = (t = a).items.at(-1))
            ? (0, X.T)(i)
            : t.failure
              ? (0, x.SxA)(t.failure.fileName)
              : null;
        return l
          ? (0, n.jsx)("span", {
              "aria-atomic": "true",
              "aria-label": l,
              "aria-live": "polite",
              className: "sr-only",
              "data-testid": "timeline-light-upload-status",
              role: "status",
            })
          : null;
      }
      function ey(e) {
        var t, i, a;
        let l,
          r,
          o =
            ((t = e.editor),
            (i = e.timelineId),
            (l =
              null == (a = t.featuresApi)
                ? void 0
                : a.canvas.timelineFullscreen),
            (r = (0, v.useCallback)(() => {
              let e = null == l ? void 0 : l.getSnapshot();
              return (
                (null == e ? void 0 : e.status) === "active" &&
                e.timelineId === i
              );
            }, [l, i])),
            (0, v.useSyncExternalStore)(
              (null == l ? void 0 : l.subscribe) ?? eE,
              r,
              eR,
            )),
          [s, d] = (0, v.useState)(null);
        if (
          ((0, v.useEffect)(() => {
            e.writeChromeVisible || d(null);
          }, [e.writeChromeVisible]),
          !e.interactive || !e.actions)
        )
          return (0, n.jsx)(eD, {
            ...e.mainTrackProps,
            actions: e.actions,
            data: e.data,
            editor: e.editor,
            fullscreenActive: o,
            interactive: !1,
            keyboardScopeRef: e.keyboardScopeRef,
            preview: null,
            requestedSelectedClipId: s,
            setRequestedSelectedClipId: d,
            showFeedback: !1,
            showUploadNotifications: !1,
            timelineId: e.timelineId,
            uploadObservation: e.uploadObservation,
            uploadSnapshot: e.uploadSnapshot,
            waveform: e.waveform,
            writeChromeVisible: e.writeChromeVisible,
          });
        let c = e.actions;
        return e.previewActive
          ? (0, n.jsx)(eI, {
              actions: c,
              content: e,
              fullscreenActive: o,
              requestedSelectedClipId: s,
              setRequestedSelectedClipId: d,
            })
          : (0, n.jsx)(eD, {
              ...e.mainTrackProps,
              actions: c,
              data: e.data,
              editor: e.editor,
              fullscreenActive: o,
              interactive: !0,
              keyboardScopeRef: e.keyboardScopeRef,
              preview: null,
              requestedSelectedClipId: s,
              setRequestedSelectedClipId: d,
              showFeedback: !o,
              showUploadNotifications: !o,
              timelineId: e.timelineId,
              uploadObservation: e.uploadObservation,
              uploadSnapshot: e.uploadSnapshot,
              waveform: e.waveform,
              writeChromeVisible: e.writeChromeVisible,
            });
      }
      function eI(e) {
        let { content: t } = e,
          i = ej(t.mainTrackProps),
          [a, l] = (0, v.useState)(null);
        return (0, n.jsx)(Z.x_, {
          aspectRatio: t.mainTrackProps.aspectRatio,
          audioTracks: t.mainTrackProps.audioTracks,
          clips: t.mainTrackProps.clips,
          resourceById: t.mainTrackProps.resourceById,
          resourceRequestPending: t.resourceRequestPending,
          initialSnapshot: t.previewSnapshot,
          onSnapshotChange: t.onPreviewSnapshotChange,
          publishToFullscreenSession: !0,
          timelineId: t.timelineId,
          totalDurationTick: t.mainTrackProps.totalDurationTick,
          visualTrackMuted: t.mainTrackProps.visualTrackMuted,
          surfaceRef: l,
          ...(i ? { renderSurface: eA } : {}),
          children: (l) =>
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(eT, {
                  editor: t.editor,
                  enabled: !i,
                  surface: a,
                  timelineId: t.timelineId,
                }),
                (0, n.jsx)(eD, {
                  ...t.mainTrackProps,
                  actions: e.actions,
                  data: t.data,
                  editor: t.editor,
                  fullscreenActive: e.fullscreenActive,
                  interactive: !0,
                  keyboardScopeRef: t.keyboardScopeRef,
                  preview: i ? null : l,
                  requestedSelectedClipId: e.requestedSelectedClipId,
                  setRequestedSelectedClipId: e.setRequestedSelectedClipId,
                  showFeedback: !0,
                  showUploadNotifications: !0,
                  timelineId: t.timelineId,
                  uploadObservation: t.uploadObservation,
                  uploadSnapshot: t.uploadSnapshot,
                  waveform: t.waveform,
                  writeChromeVisible: t.writeChromeVisible,
                }),
              ],
            }),
        });
      }
      function eT(e) {
        let t = (0, c.Pj)(eS);
        return (
          (0, h.rO)({
            enabled: e.enabled,
            id: `timeline-preview:${e.timelineId}`,
            layoutRevision: t,
            nodeAnchor: "top",
            nodeId: e.timelineId,
            role: "timelinePreview",
            surface: e.surface,
            viewportZoom: t,
            viewportPresentation: e.editor.viewport,
          }),
          null
        );
      }
      function eS(e) {
        return e.transform[2];
      }
      function ej(e) {
        var t;
        return (
          0 === e.clips.length &&
          !(null == (t = e.audioTracks)
            ? void 0
            : t.some((e) => e.clips.length > 0))
        );
      }
      function eA() {
        return null;
      }
      function eE() {
        return () => void 0;
      }
      function eR() {
        return !1;
      }
      let eD = (0, v.memo)(function (e) {
          var t, i, a, l;
          let r =
            e.fullscreenActive || null == (t = e.preview)
              ? void 0
              : t.togglePlayback;
          ((i = e.editor),
            (a = e.timelineId),
            (l = r),
            (0, v.useEffect)(() => {
              if (l)
                return i.viewInteractions.registerTimelinePreviewPlayback(a, l);
            }, [i.viewInteractions, a, l]));
          let o = e.interactive && void 0 !== e.actions;
          return (0, n.jsx)(eM, { ...e, active: o });
        }),
        eM = (0, v.memo)(function (e) {
          var t, i, a, l, o, s;
          let d,
            c,
            p,
            m,
            f,
            h = e.actions,
            g = e.active && void 0 !== h,
            k = void 0 !== h && e.writeChromeVisible,
            b = eN(g),
            w = eO(e.audioTracks, e.totalDurationTick),
            C = (0, v.useMemo)(() => eV(e.uploadSnapshot), [e.uploadSnapshot]),
            P =
              ((l = e),
              (o = C),
              l.clips.length > 0 ||
                o.items.length > 0 ||
                ((null == (s = l.audioTracks)
                  ? void 0
                  : s.some((e) => e.clips.length > 0)) ??
                  !1)),
            y = (function (e, t, i, n) {
              var a,
                l,
                r,
                o,
                s,
                d,
                c,
                u,
                p,
                m,
                f,
                h,
                g,
                k,
                b,
                w,
                C,
                P,
                y,
                I,
                T,
                S,
                j,
                A,
                E,
                R,
                D,
                M,
                V;
              let N,
                O,
                L,
                z = e$(),
                {
                  actions: B,
                  preview: W,
                  requestedSelectedClipId: F,
                  setRequestedSelectedClipId: $,
                  timelineId: X,
                  visibleClips: q,
                } = e,
                H =
                  ((a = q),
                  (l = F),
                  i && t && null !== l && a.some((e) => e.clipId === l)
                    ? l
                    : null),
                Y =
                  ((r = B),
                  (o = X),
                  (s = H),
                  (d = t),
                  (c = n),
                  (N = (0, v.useCallback)(
                    (e) => (c && r ? r.subscribe(e) : () => void 0),
                    [r, c],
                  )),
                  (O = (0, v.useCallback)(() => {
                    if (!d || !r) return "invalidSelection";
                    let e = r.removeTimelineClips.getState(
                      o,
                      null === s ? [] : [s],
                    );
                    return e.available ? "available" : e.reason;
                  }, [r, d, s, o])),
                  (0, v.useSyncExternalStore)(N, O, O)),
                U =
                  ((L = (0, _.S)(X)),
                  (0, v.useCallback)(
                    (e) => {
                      (null !== e && L("select"), $(e));
                    },
                    [L, $],
                  )),
                G =
                  ((u = B),
                  (p = X),
                  (m = H),
                  (f = t),
                  (h = $),
                  (g = z),
                  (0, v.useCallback)(async () => {
                    f &&
                      u &&
                      null !== m &&
                      ((await u.removeTimelineClips.execute(p, [m], "user")).ok
                        ? h(null)
                        : g("remove"));
                  }, [u, f, g, m, h, p])),
                K =
                  ((k = B),
                  (b = X),
                  (w = t),
                  (C = $),
                  (P = z),
                  (0, v.useCallback)(
                    async (e, t) => {
                      if (!w || !k) return !1;
                      let i = await k.moveTimelineClip.execute(b, e, t, "user");
                      return (i.ok ? C(e) : P("reorder"), i.ok);
                    },
                    [k, w, P, C, b],
                  )),
                J =
                  ((y = B),
                  (I = X),
                  (T = t),
                  (S = null == W ? void 0 : W.pausePlayback),
                  (j = $),
                  (A = z),
                  (0, v.useCallback)(
                    async (e) => {
                      if (!T || !y || null === e) return;
                      null == S || S();
                      let t = await y.splitTimelineClip.execute(
                        I,
                        e.clipId,
                        e.offsetTick,
                        "user",
                      );
                      t.ok
                        ? j("selection" === e.origin ? t.value.newClipId : null)
                        : A("split");
                    },
                    [y, T, S, A, j, I],
                  ));
              return {
                handleMoveClip: K,
                handleRemoveClip: G,
                handleSelectClip: $,
                handleSelectClipGesture: U,
                handleSetSelectedClip: $,
                handleSplitClip: J,
                handleToggleAllTracksMuted: eX(B, X, t, z),
                handleTrimClip:
                  ((E = B),
                  (R = X),
                  (D = t),
                  (M = z),
                  (0, v.useCallback)(
                    async (e, t) => {
                      if (!D || !E) return !1;
                      let i = await E.timelineEdit.execute(
                        R,
                        {
                          kind: "trimClip",
                          clipId: e,
                          sourceRange: {
                            startTick: t.rangeStartTick,
                            durationTick: t.rangeDurationTick,
                          },
                        },
                        "user",
                      );
                      return (i.ok || M("trim"), i.ok);
                    },
                    [E, D, M, R],
                  )),
                observeActionState: n,
                removeDisabledReason:
                  "permissionDenied" === (V = Y)
                    ? (0, x.CBm)()
                    : "notEditingReady" === V
                      ? (0, x.uK6)()
                      : "invalidSelection" === V
                        ? (0, x.ka2)()
                        : void 0,
                removeState: Y,
                selectedClipId: H,
              };
            })(e, k, g, b.active),
            I = eq(h, e.timelineId, k, b.active),
            T = (function (e, t) {
              var i, n;
              let [a, l] = (0, v.useState)(null);
              return {
                layout:
                  ((i = t),
                  (n = (0, v.useMemo)(() => (0, et.Xr)(e, a), [e, a])),
                  (0, v.useMemo)(() => {
                    let e = (0, et.Xx)(i.geometry, n);
                    if (e === i.geometry) return i;
                    let t = (0, et.A9)({
                      majorStepTick: e.majorStepTick,
                      minorStepTick: e.minorStepTick,
                      pixelsPerTick: e.pixelsPerTick,
                      rulerDurationTick: e.rulerDurationTick,
                      viewport: i.viewport,
                    });
                    return { ...i, geometry: e, ticks: t };
                  }, [i, n])),
                updatePreview: (0, v.useCallback)((e, t) => {
                  l((i) =>
                    null === t
                      ? (null == i ? void 0 : i.clipId) === e
                        ? null
                        : i
                      : { clipId: e, endTick: t },
                  );
                }, []),
              };
            })(e.clips, e.layout);
          ((d = (function (e) {
            let { actions: t, preview: i } = e,
              n = (0, v.useCallback)(
                () =>
                  (0, U.$H)({
                    audioTracks: e.audioTracks ?? [],
                    currentTimeTick:
                      (null == i ? void 0 : i.getSnapshot().currentTimeTick) ??
                      0,
                    selectedClipId: e.selectedClipId,
                    visualClips: e.clips,
                  }),
                [e.audioTracks, e.clips, e.selectedClipId, i],
              ),
              a = (0, v.useCallback)((e) => void 0, []),
              l = (0, v.useCallback)(() => {
                null == i || i.pausePlayback();
              }, [i]),
              r = (0, v.useCallback)(
                async () =>
                  t
                    ? (0, es.Mp)({
                        action: t.splitTimelineClip,
                        pausePlayback: l,
                        setEditFailure: a,
                        setSelectedClipId: e.setSelectedClipId,
                        target: n(),
                        timelineId: e.timelineId,
                      })
                    : { reason: "timeline.splitUnavailable", status: "noop" },
                [t, e.setSelectedClipId, e.timelineId, l, n, a],
              );
            return {
              executeSplit: r,
              executeTrimLeft: (0, v.useCallback)(
                async () =>
                  t
                    ? (0, es.yH)({
                        action: t.timelineEdit,
                        pausePlayback: l,
                        setEditFailure: a,
                        side: "left",
                        target: n(),
                        timelineId: e.timelineId,
                      })
                    : { reason: "timeline.trimUnavailable", status: "noop" },
                [t, e.timelineId, l, n, a],
              ),
              executeTrimRight: (0, v.useCallback)(
                async () =>
                  t
                    ? (0, es.yH)({
                        action: t.timelineEdit,
                        pausePlayback: l,
                        setEditFailure: a,
                        side: "right",
                        target: n(),
                        timelineId: e.timelineId,
                      })
                    : { reason: "timeline.trimUnavailable", status: "noop" },
                [t, e.timelineId, l, n, a],
              ),
              resolvePlayheadTarget: n,
            };
          })(
            (a = {
              actions: h,
              audioTracks: e.audioTracks,
              clips: e.clips,
              editAvailable: I,
              enabled: e.writeChromeVisible && g && !e.fullscreenActive,
              preview: e.preview,
              selectedClipId: y.selectedClipId,
              setSelectedClipId: y.handleSelectClip,
              timelineId: e.timelineId,
            }),
          )),
            (c = (function (e, t) {
              let { actions: i, preview: n } = e,
                a = (0, v.useCallback)(
                  (e) => {
                    if (!i) return () => void 0;
                    let t = i.subscribe(e),
                      a = null == n ? void 0 : n.subscribe(e);
                    return () => {
                      (t(), null == a || a());
                    };
                  },
                  [i, n],
                ),
                l = (0, v.useMemo)(
                  () =>
                    i
                      ? (0, es.yJ)({
                          editAvailable: e.editAvailable,
                          executeSplit: t.executeSplit,
                          resolvePlayheadTarget: t.resolvePlayheadTarget,
                          splitAction: i.splitTimelineClip,
                          subscribe: a,
                          timelineId: e.timelineId,
                        })
                      : null,
                  [
                    i,
                    t.executeSplit,
                    t.resolvePlayheadTarget,
                    e.editAvailable,
                    e.timelineId,
                    a,
                  ],
                );
              return {
                split: l,
                trimLeft: (0, v.useMemo)(
                  () =>
                    i
                      ? (0, es.mX)({
                          editAvailable: e.editAvailable,
                          executeTrim: t.executeTrimLeft,
                          resolvePlayheadTarget: t.resolvePlayheadTarget,
                          side: "left",
                          subscribe: a,
                        })
                      : null,
                  [
                    i,
                    t.executeTrimLeft,
                    t.resolvePlayheadTarget,
                    e.editAvailable,
                    a,
                  ],
                ),
                trimRight: (0, v.useMemo)(
                  () =>
                    i
                      ? (0, es.mX)({
                          editAvailable: e.editAvailable,
                          executeTrim: t.executeTrimRight,
                          resolvePlayheadTarget: t.resolvePlayheadTarget,
                          side: "right",
                          subscribe: a,
                        })
                      : null,
                  [
                    i,
                    t.executeTrimRight,
                    t.resolvePlayheadTarget,
                    e.editAvailable,
                    a,
                  ],
                ),
              };
            })(a, d)),
            (p = a.enabled ? c.split : null),
            (m = a.enabled ? c.trimLeft : null),
            (f = a.enabled ? c.trimRight : null),
            (0, u.bO)("timeline.splitClip", p),
            (0, u.bO)("timeline.trimLeft", m),
            (0, u.bO)("timeline.trimRight", f));
          let S = (function (e, t, i, a, l) {
            var r, o, s, d, c;
            if (!t) return { sourcePicker: null };
            let u = (0, n.jsx)(eL, {
              editor: e.editor,
              timelineId: e.timelineId,
              viewOnly: !e.writeChromeVisible,
            });
            if (!e.writeChromeVisible)
              return { fullscreenAction: u, sourcePicker: null };
            let p = (0, n.jsx)(N.n, {
                data: e.data,
                deferSubscriptions: !i,
                editableProjectDownloadSession:
                  null == (r = e.editor.featuresApi)
                    ? void 0
                    : r.canvas.editableProjectDownload,
                exportSession:
                  null == (o = e.editor.featuresApi)
                    ? void 0
                    : o.canvas.timelineExport,
                jianyingDraftGenerateSession:
                  null == (s = e.editor.featuresApi)
                    ? void 0
                    : s.canvas.jianyingDraftGenerate,
                materialExportSession:
                  null == (d = e.editor.featuresApi)
                    ? void 0
                    : d.canvas.materialExport,
                showDownloadFeedback: !1,
                showEditableProjectFeedback: !1,
                showFeedback: e.showFeedback,
                showJianyingFeedback: !1,
                showMaterialFeedback: !1,
                timelineId: e.timelineId,
                timelineRenderSession:
                  null == (c = e.editor.featuresApi)
                    ? void 0
                    : c.canvas.timelineRender,
              }),
              m = (0, n.jsx)(Q.rN, {
                deferSubscriptions: !e.active,
                editor: e.editor,
                empty: 0 === e.clips.length,
                historyTarget: e.fullscreenActive ? "timeline" : void 0,
                nodeDragHotZone: !0,
                onUploadObservationSettled: e.uploadObservation.settleAdmission,
                onUploadObservationStart: e.uploadObservation.start,
                showNotifications: e.showUploadNotifications,
                timelineId: e.timelineId,
                uploadSnapshot: l,
              });
            return {
              action: (0, n.jsx)(eF, { editing: a }),
              downloadAction: p,
              fullscreenAction: u,
              leadingAction: (0, n.jsx)(eB, {
                actions: t,
                clips: e.clips,
                editing: a,
                preview: e.preview,
                timelineId: e.timelineId,
              }),
              sourcePicker: m,
            };
          })(e, h, b.active, y, C);
          return (0, n.jsx)(r.O, {
            action: S.action,
            currentTimeTick: 0,
            downloadAction: S.downloadAction,
            fullscreenAction: S.fullscreenAction,
            leadingAction: S.leadingAction,
            onBlurCapture: b.onBlurCapture,
            onFocusCapture: b.onFocusCapture,
            onPointerEnter: b.onPointerEnter,
            onPointerLeave: b.onPointerLeave,
            preview: g ? e.preview : null,
            totalDurationTick:
              (null == (t = e.preview) ? void 0 : t.totalDurationTick) ??
              e.totalDurationTick,
            writeChromeVisible: e.writeChromeVisible,
            children: (0, n.jsx)(e4, {
              active: g,
              announcePendingClips: !e.fullscreenActive,
              audioTrackDurationTick: w,
              clipInteractionActive: g,
              clips: e.clips,
              currentTimeTick: 0,
              editable: I,
              layout: T.layout,
              onMoveClip: y.handleMoveClip,
              onEditStart: null == (i = e.preview) ? void 0 : i.pausePlayback,
              onModifierWheel: g && P ? e.layout.zoom.handleWheel : void 0,
              onRemoveClip:
                g && e.writeChromeVisible ? y.handleRemoveClip : void 0,
              onSelectClip: k && g ? y.handleSelectClipGesture : void 0,
              onSetSelectedClip: y.handleSetSelectedClip,
              onTrimClip: y.handleTrimClip,
              onTrimPreviewEndTickChange: T.updatePreview,
              pendingClips: C.items,
              resourceById: e.resourceById,
              trackPresentation: e.trackPresentation,
              selectedClipId: y.selectedClipId,
              playhead: g ? (0, eu.E)(e.preview) : null,
              muteControl: (0, n.jsx)(eJ, {
                active: k,
                audioTracks: e.audioTracks,
                editAvailable: I,
                onToggleMuted: y.handleToggleAllTracksMuted,
                visualTrackMuted: e.visualTrackMuted,
              }),
              sourcePicker: S.sourcePicker,
              sourcePreviewInViewport: !0 === e.data.sourcePreviewInViewport,
              timelineId: e.timelineId,
              visibleClipStartIndex: e.visibleClipStartIndex,
              visibleClips: e.visibleClips,
              waveform: e.waveform,
            }),
          });
        });
      function eV(e) {
        let t = e.items.filter(
          (e) => void 0 === e.target || "visual" === e.target.kind,
        );
        return t.length === e.items.length ? e : { ...e, items: t };
      }
      function eN(e) {
        let [t, i] = (0, v.useState)(!1),
          [n, a] = (0, v.useState)(!1),
          l = (0, v.useCallback)((e) => {
            let t = e.relatedTarget;
            (t instanceof Node && e.currentTarget.contains(t)) || i(!1);
          }, []),
          r = (0, v.useCallback)(() => i(!0), []);
        return {
          active: e || t || n,
          onBlurCapture: l,
          onFocusCapture: r,
          onPointerEnter: (0, v.useCallback)(() => a(!0), []),
          onPointerLeave: (0, v.useCallback)(() => a(!1), []),
        };
      }
      function eO(e, t) {
        return !Number.isSafeInteger(t) || t <= 0
          ? 0
          : (null == e ? void 0 : e.some((e) => e.clips.length > 0))
            ? t
            : 0;
      }
      function eL(e) {
        var t, i;
        let a =
            null == (t = e.editor.featuresApi)
              ? void 0
              : t.canvas.timelineFullscreen,
          l = null == (i = e.editor.featuresApi) ? void 0 : i.canvas.gestures;
        return (0, n.jsx)(ez, {
          disabled: !a || e.viewOnly,
          disabledReason: e.viewOnly ? (0, x.NoI)() : void 0,
          onActivate: () => {
            (null == a ? void 0 : a.open({ timelineId: e.timelineId })) &&
              (null == l ||
                l.declare({
                  surface: "timeline",
                  gesture: "full_screen",
                  nodeId: e.timelineId,
                }));
          },
          viewOnly: e.viewOnly,
        });
      }
      function ez(e) {
        let t = e.viewOnly ? (0, x.EV$)() : (0, x.VnM)(),
          i = e.viewOnly ? (0, x.jVK)() : (0, x.ayE)();
        return (0, n.jsx)(R.P, {
          disabled: !!e.disabledReason,
          label: t,
          shortcutActionId: e.disabledReason ? void 0 : "canvas.fullscreen",
          children: (0, n.jsxs)(g.$nd, {
            "aria-label": t,
            "aria-keyshortcuts": e.disabledReason
              ? void 0
              : (0, u.G4)("canvas.fullscreen").ariaKeyShortcuts,
            className:
              "w-auto h-canvas-timeline-node-control min-w-canvas-timeline-zero px-canvas-timeline-node-control-inset py-canvas-timeline-zero gap-canvas-timeline-node-track-gap text-dreamina-text-primary hover:text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover",
            disabled: e.disabled,
            disabledReason: e.disabledReason,
            onClick: (t) => {
              var i;
              (t.stopPropagation(), null == (i = e.onActivate) || i.call(e));
            },
            size: "icon",
            variant: "text",
            children: [
              (0, n.jsx)(g.P7m, { size: 24 }),
              (0, n.jsx)("span", {
                className:
                  "font-dreamina-cn text-canvas-timeline-node-label font-dreamina-regular",
                children: i,
              }),
            ],
          }),
        });
      }
      function eB(e) {
        return e.preview
          ? (0, n.jsx)(e_, { ...e, preview: e.preview })
          : (0, n.jsx)(eW, { ...e, currentTimeTick: 0 });
      }
      function e_(e) {
        let t = (0, Z.nX)(e.preview);
        return (0, n.jsx)(eW, { ...e, currentTimeTick: t.currentTimeTick });
      }
      function eW(e) {
        var t, i, a, l, r, o;
        let s,
          d,
          c = (0, U.$H)({
            currentTimeTick: e.currentTimeTick,
            selectedClipId: e.editing.selectedClipId,
            visualClips: e.clips,
          }),
          p = null !== c && (0, U.lG)(c),
          m = (null == c ? void 0 : c.clipId) ?? e.editing.selectedClipId,
          f =
            ((t = e.actions),
            (i = e.timelineId),
            (a = m),
            (l = p ? c.offsetTick : null),
            (r = e.editing.observeActionState),
            (s = (0, v.useCallback)(
              (e) => (r ? t.subscribe(e) : () => void 0),
              [t, r],
            )),
            (d = (0, v.useCallback)(() => {
              if (null === a) return "invalidSelection";
              if (null === l) return "invalidSplitPoint";
              let e = t.splitTimelineClip.getState(i, a, l);
              return e.available ? "available" : e.reason;
            }, [t, a, l, i])),
            (0, v.useSyncExternalStore)(s, d, d));
        return (0, n.jsx)(R.P, {
          label: (0, x.SFo)(),
          shortcutActionId: "timeline.splitClip",
          children: (0, n.jsx)(g.$nd, {
            "aria-label": (0, x.SFo)(),
            "aria-keyshortcuts": (0, u.G4)("timeline.splitClip")
              .ariaKeyShortcuts,
            className:
              "w-canvas-timeline-node-control h-canvas-timeline-node-control min-w-canvas-timeline-zero p-canvas-timeline-zero text-dreamina-text-primary disabled:text-dreamina-text-disabled aria-disabled:text-dreamina-text-disabled hover:text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover",
            disabled: !p || "available" !== f,
            disabledReason:
              null === m
                ? void 0
                : "permissionDenied" === (o = f)
                  ? (0, x.Aib)()
                  : "notEditingReady" === o
                    ? (0, x.Oi$)()
                    : "invalidSelection" === o || "invalidSplitPoint" === o
                      ? (0, x.f6D)()
                      : void 0,
            onClick: () => e.editing.handleSplitClip(c),
            size: "icon",
            variant: "text",
            children: (0, n.jsx)(g.fYC, { size: 24 }),
          }),
        });
      }
      function eF(e) {
        let { editing: t } = e;
        return (0, n.jsx)(R.P, {
          label: (0, x.oAM)(),
          shortcutActionId: "canvas.deleteSelection",
          children: (0, n.jsx)(g.$nd, {
            "aria-label": (0, x.oAM)(),
            "aria-keyshortcuts": (0, u.G4)("canvas.deleteSelection")
              .ariaKeyShortcuts,
            className:
              "w-canvas-timeline-node-control h-canvas-timeline-node-control min-w-canvas-timeline-zero p-canvas-timeline-zero text-dreamina-text-primary disabled:text-dreamina-text-disabled aria-disabled:text-dreamina-text-disabled hover:text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover",
            disabled:
              null === t.selectedClipId || "available" !== t.removeState,
            disabledReason:
              null === t.selectedClipId ? void 0 : t.removeDisabledReason,
            onClick: t.handleRemoveClip,
            size: "icon",
            variant: "text",
            children: (0, n.jsx)(g.oH7, { size: 24 }),
          }),
        });
      }
      function e$() {
        let e = (0, k.QQ)();
        return (0, v.useCallback)(
          (t) => {
            var i;
            (0, C.N)(e, {
              durationMs: 6e3,
              message:
                "mute" === (i = t)
                  ? (0, x.L7U)()
                  : "remove" === i
                    ? (0, x.tI8)()
                    : "reorder" === i
                      ? (0, x.GTb)()
                      : "split" === i
                        ? (0, x.tKP)()
                        : (0, x.HV6)(),
              status: "warning",
            });
          },
          [e],
        );
      }
      function eX(e, t, i, n) {
        return (0, v.useCallback)(
          async (a) => {
            i &&
              e &&
              ((
                await e.timelineEdit.execute(
                  t,
                  {
                    kind: "setAudioSettings",
                    target: { kind: "all-tracks", muted: a },
                  },
                  "user",
                )
              ).ok ||
                n("mute"));
          },
          [e, i, n, t],
        );
      }
      function eq(e, t, i, n) {
        let a = (0, v.useCallback)(
            (t) => (n && e ? e.subscribe(t) : () => void 0),
            [e, n],
          ),
          l = (0, v.useCallback)(
            () =>
              !!(
                i && (null == e ? void 0 : e.timelineEdit.getState(t).available)
              ),
            [e, i, t],
          );
        return (0, v.useSyncExternalStore)(a, l, l);
      }
      function eH(e) {
        let t = e.target;
        (t instanceof Element &&
          t.closest('[data-timeline-node-drag-hot-zone="true"]')) ||
          e.stopPropagation();
      }
      let eY = (0, v.memo)(function (e) {
        var t, i;
        let a,
          l,
          { geometry: r } = e.layout;
        (0, em.UZ)(e.layout.zoom.commitPendingScroll);
        let o = eK(
            e.audioTrackDurationTick,
            r.pixelsPerTick,
            e.layout.viewport,
          ),
          s = (null == (t = e.pendingClips) ? void 0 : t.length) ?? 0,
          d = Math.max(
            r.rulerWidthPixels,
            r.contentEndPixels + 87 * s + 0 + 84 + 6,
          ),
          c = e7(e.layout.contentOffsetPixels),
          u =
            ((i = e.timelineId),
            (a = (0, _.S)(i ?? "")),
            (l = (0, v.useCallback)(() => a("hover_preview_needle"), [a])),
            i ? l : void 0),
          p = (0, eu.Y)({
            declareHoverPreview: u,
            onSelectClip: e.onSelectClip,
            pixelsPerSecond: 12e4 * r.pixelsPerTick,
            playhead: e.playhead,
          });
        return (
          (0, em.h4)(
            e.layout.scrollViewportRef,
            e.onModifierWheel,
            p.syncPreviewAnchor,
          ),
          (0, n.jsxs)("div", {
            className:
              "relative flex items-end w-full h-full gap-0 overflow-visible",
            "data-testid": "timeline-visual-track",
            children: [
              (0, n.jsxs)("div", {
                className: ef,
                "data-testid": "timeline-track-gutter",
                children: [
                  e.muteControl,
                  (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className:
                      "absolute top-0 right-0 bottom-0 w-canvas-timeline-node-track-divider bg-canvas-timeline-node-track-divider pointer-events-none",
                    "data-testid": "timeline-node-track-divider",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "[&::-webkit-scrollbar]:hidden relative self-start [flex:1_1_0] box-content -mt-canvas-timeline-node-toolbar-padding pt-canvas-timeline-node-toolbar-padding min-w-0 w-full h-full overflow-x-auto overflow-y-hidden [scrollbar-width:none]",
                "data-canvas-modifier-wheel-owner": e.onModifierWheel
                  ? "timeline"
                  : void 0,
                "data-timeline-scroll-viewport": "true",
                "data-testid": "timeline-track-scroll",
                onPointerDown: e.active ? eH : void 0,
                onScroll: e.layout.onScroll,
                onWheelCapture: e.active ? T.pE : void 0,
                ref: e.layout.ref,
                children: (0, n.jsxs)("div", {
                  className:
                    "octo-timeline-track-canvas relative flex flex-col min-w-full min-h-full gap-canvas-timeline-node-track-gap",
                  "data-timeline-track-canvas": "true",
                  "data-testid": "timeline-track-canvas",
                  onPointerCancel: p.cancel,
                  onPointerDown: p.handlePointerDown,
                  onPointerDownCapture: p.preparePointerDown,
                  onPointerLeave: p.cancel,
                  onPointerMove: p.preview,
                  style: {
                    marginInlineStart: c,
                    minWidth: `calc(100% - ${e7(11)})`,
                    width: e7(d),
                  },
                  children: [
                    (0, n.jsx)(J.i, { geometry: r, ticks: e.layout.ticks }),
                    (0, n.jsx)(eZ, { ...e, waveformPathWindow: o }),
                    (0, n.jsx)(eG, {
                      enabled:
                        !!e.playhead && "loading" !== e.trackPresentation,
                      lineRef: p.lineRef,
                    }),
                    (0, n.jsx)(eU, { geometry: r, trackProps: e }),
                  ],
                }),
              }),
            ],
          })
        );
      });
      function eU(e) {
        return "loading" === e.trackProps.trackPresentation
          ? null
          : e.trackProps.playhead
            ? (0, n.jsx)(Y.uR, {
                ...e.trackProps.playhead,
                geometry: e.geometry,
                presentation: "node",
              })
            : 0 === e.trackProps.clips.length
              ? null
              : (0, n.jsx)(Y.cb, {
                  active: e.trackProps.active,
                  positionPixels: (0, et.Gh)(
                    e.geometry,
                    e.trackProps.currentTimeTick,
                  ),
                  presentation: "node",
                });
      }
      function eG(e) {
        return e.enabled
          ? (0, n.jsx)("span", {
              ref: e.lineRef,
              "aria-hidden": "true",
              className:
                "absolute z-canvas-timeline-playhead-preview top-canvas-timeline-node-drag-placeholder-inset bottom-0 w-canvas-timeline-node-ruler-tick -translate-x-1/2 bg-dreamina-text-tertiary opacity-canvas-timeline-hover-hidden pointer-events-none [&[data-visible=true]]:opacity-canvas-timeline-hover-visible",
              "data-testid": "timeline-hover-playhead",
            })
          : null;
      }
      function eK(e, t, i) {
        let n = (0, er.Rh)(e * t, i),
          a = null == n ? void 0 : n.fullWidthPixels,
          l = null == n ? void 0 : n.startPixels,
          r = null == n ? void 0 : n.widthPixels;
        return (0, v.useMemo)(() => {
          if (void 0 !== a && void 0 !== l && void 0 !== r)
            return { fullWidthPixels: a, startPixels: l, widthPixels: r };
        }, [a, l, r]);
      }
      let eJ = (0, v.memo)(function (e) {
        let {
            active: t,
            audioTracks: i,
            editAvailable: a,
            onToggleMuted: l,
            visualTrackMuted: r,
          } = e,
          o = (0, v.useMemo)(() => (0, ei.j)(r, i), [i, r]),
          s = (0, v.useCallback)(() => {
            l(!o.muted);
          }, [o.muted, l]);
        return t
          ? (0, n.jsx)(R.P, {
              label: (0, x.eoL)(),
              side: "top",
              triggerClassName:
                "absolute top-[54px] inset-x-0 mx-auto w-canvas-timeline-node-control h-canvas-timeline-node-control",
              children: (0, n.jsx)(g.$nd, {
                "aria-label": (0, x.eoL)(),
                "aria-pressed": o.muted,
                className:
                  "disabled:text-dreamina-text-disabled aria-disabled:text-dreamina-text-disabled hover:text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover w-full min-w-0 h-full p-0 text-dreamina-text-primary bg-transparent rounded-canvas-timeline-node-clip",
                "data-muted": o.muted,
                "data-testid": "timeline-mute-button",
                disabled: !a,
                onClick: s,
                size: "icon",
                variant: "text",
                children: (0, n.jsx)(en.H, {
                  muted: o.muted,
                  placement: "node-control",
                }),
              }),
            })
          : (0, n.jsx)(en.H, {
              muted: o.muted,
              placement: "node-indicator",
              testId: "timeline-mute-icon",
            });
      });
      function eZ(e) {
        var t, i;
        let { geometry: l } = e.layout,
          r = (0, b.uq)(),
          o = "loading" === e.trackPresentation,
          s = e.pendingClips ?? [],
          d = o
            ? null
            : ((t = e),
              (i = r),
              0 === t.clips.length
                ? null
                : t.visibleClips.flatMap((e, a) => {
                    let l = t.visibleClipStartIndex + a,
                      r = t.layout.geometry.clips[l];
                    if (!r) {
                      let e = { clipIndex: l, reason: "missing_clip_geometry" },
                        n = t.timelineId
                          ? { ...e, timelineId: t.timelineId }
                          : e;
                      return (
                        (0, m.JW)(i, p.aH, `missing_clip_geometry:${l}`, n),
                        []
                      );
                    }
                    return [
                      (0, n.jsx)(
                        e8,
                        {
                          clip: e,
                          geometry: r,
                          index: l,
                          interactionActive: t.clipInteractionActive,
                          onSelect: t.onSelectClip,
                          onRemove: t.onRemoveClip,
                          onEditStart: t.onEditStart,
                          onTrimClip: t.onTrimClip,
                          onTrimPreviewEndTickChange:
                            t.onTrimPreviewEndTickChange,
                          playhead: t.playhead,
                          reorder: t.reorder,
                          resource: (0, P.GJ)(e, t.resourceById),
                          selected: t.selectedClipId === e.clipId,
                          thumbnailPreparation: t.thumbnailPreparation,
                          ...(t.timelineId ? { timelineId: t.timelineId } : {}),
                          viewport: t.layout.viewport,
                        },
                        e.clipId,
                      ),
                    ];
                  }));
        return (0, n.jsxs)(a.AW, {
          presentation: e.trackPresentation,
          viewport: e.layout.rulerViewport,
          contentOffsetPixels: e.layout.contentOffsetPixels,
          children: [
            d,
            o
              ? null
              : (0, n.jsx)(eQ, {
                  announce: e.announcePendingClips,
                  contentEndPixels: l.contentEndPixels,
                  items: s,
                  previewVisible: e.active || e.sourcePreviewInViewport,
                  viewport: e.layout.viewport,
                }),
            (0, n.jsx)(e0, {
              clipCount: e.clips.length,
              contentOffsetPixels: e.layout.contentOffsetPixels,
              contentEndPixels: l.contentEndPixels,
              pendingClipCount: s.length,
              sourcePicker: e.sourcePicker,
              sourcePickerPlacement: e.sourcePickerPlacement,
              viewport: e.layout.rulerViewport,
            }),
            o
              ? null
              : (0, n.jsx)(eo.Q, {
                  durationTick: e.audioTrackDurationTick,
                  pathWindow: e.waveformPathWindow,
                  pixelsPerTick: l.pixelsPerTick,
                  waveform: e.waveform,
                }),
          ],
        });
      }
      function eQ(e) {
        return e.items.map((t, i) => {
          let a = e.contentEndPixels + 87 * i;
          return (0, n.jsx)(
            e1,
            {
              announce: e.announce,
              item: t,
              left: a,
              showPreview: !!e.previewVisible && (0, q.o)(a, e.viewport),
            },
            t.id,
          );
        });
      }
      function e0(e) {
        if (!e.sourcePicker)
          return 0 === e.clipCount && 0 === e.pendingClipCount
            ? (0, n.jsx)(z.ex, {
                contentOffsetPixels: e.contentOffsetPixels,
                viewport: e.viewport,
              })
            : null;
        let t = e.contentEndPixels + 87 * e.pendingClipCount,
          i = "timeline-source-picker-slot";
        return (
          "absolute-clamped" === e.sourcePickerPlacement &&
            (i = "timeline-passive-source-picker-slot"),
          (0, n.jsx)(ee.F, {
            contentOffsetPixels: e.contentOffsetPixels,
            empty: 0 === e.clipCount && 0 === e.pendingClipCount,
            offsetPixels: t,
            placement: e.sourcePickerPlacement,
            sourcePicker: e.sourcePicker,
            surface: "node",
            testId: i,
            trailingInsetPixels: 6,
            viewport: e.viewport,
          })
        );
      }
      let e1 = (0, v.memo)(function (e) {
          return (0, n.jsx)(X.k, {
            announce: e.announce,
            className:
              "absolute top-0 w-canvas-timeline-node-visual-clip h-canvas-timeline-node-visual-clip border-r-2 border-dreamina-canvas-frame",
            item: e.item,
            showPreview: e.showPreview,
            style: { left: e7(e.left) },
            testId: "timeline-pending-clip",
          });
        }),
        e4 = (0, v.memo)(function (e) {
          var t;
          let i,
            a,
            {
              active: l,
              clipInteractionActive: r,
              editable: o,
              onMoveClip: s,
              onSetSelectedClip: d,
              timelineId: c,
              ...u
            } = e,
            p =
              ((i = (function (e) {
                let {
                    clips: t,
                    enabled: i,
                    geometry: n,
                    onEditStart: a,
                    onMoveClip: l,
                    onSetSelectedClip: r,
                    visibleClipCount: o,
                  } = e,
                  s = (0, b.uq)(),
                  d = (0, v.useRef)(null),
                  c = (0, v.useRef)(0);
                ((0, v.useEffect)(() => () => e6(d), []),
                  (0, v.useEffect)(() => {
                    i || e6(d);
                  }, [i]));
                let u = (0, v.useCallback)(
                    (e, t) => {
                      var n, a;
                      let o = d.current;
                      !o ||
                        o.pointerId !== e.pointerId ||
                        ((d.current = null),
                        (null == (n = (a = e.currentTarget).hasPointerCapture)
                          ? void 0
                          : n.call(a, e.pointerId)) &&
                          e.currentTarget.releasePointerCapture(e.pointerId),
                        e9(o),
                        o.didDrag &&
                          ((c.current = e.timeStamp + 100),
                          t && i && o.targetIndex !== o.draggedIndex
                            ? l(o.clipId, o.targetIndex)
                            : t && i && r(o.clipId)));
                    },
                    [i, l, r],
                  ),
                  p = (0, v.useCallback)(
                    (e) => {
                      var a, l;
                      if (!i || null !== d.current) return;
                      let r = (function (e, t, i, n, a) {
                        var l;
                        if (
                          !e.isPrimary ||
                          0 !== e.button ||
                          (e.target instanceof Element &&
                            e.target.closest(
                              '[data-testid="timeline-trim-handle"]',
                            ))
                        )
                          return null;
                        let r = e3(e.target, e.currentTarget),
                          o = null == r ? void 0 : r.dataset.timelineClipId;
                        if (!r || !o) return null;
                        let s = t.map((e) => e.clipId),
                          d = s.indexOf(o);
                        if (d < 0 || d >= n) return null;
                        let c = r.closest(
                            '[data-testid="timeline-clip-track"]',
                          ),
                          u = new Map();
                        for (let e of (null == c
                          ? void 0
                          : c.querySelectorAll("[data-timeline-clip-id]")) ??
                          []) {
                          let t = e.dataset.timelineClipId;
                          t && u.set(t, e);
                        }
                        let p = r.closest(
                            '[data-testid="timeline-track-scroll"]',
                          ),
                          m = null == p ? void 0 : p.getBoundingClientRect(),
                          v = r.getBoundingClientRect(),
                          f = (0, G.Cj)(
                            r,
                            (null == (l = i.clips[d])
                              ? void 0
                              : l.durationPixels) ?? 0,
                          );
                        return {
                          clipId: o,
                          clipIds: s,
                          draggedElement: r,
                          draggedIndex: d,
                          elementByClipId: u,
                          facts: a,
                          geometry: i.clips.slice(0, n),
                          pointerId: e.pointerId,
                          pointerLocalScale: f,
                          startClientX: e.clientX,
                          startClientY: e.clientY,
                          startScrollLeft:
                            (null == p ? void 0 : p.scrollLeft) ?? 0,
                          scrollViewport: p,
                          autoScroll: null,
                          didDrag: !1,
                          latestClientX: e.clientX,
                          latestClientY: e.clientY,
                          targetIndex: d,
                          verticalBounds: {
                            clipBottom: v.bottom / f,
                            clipTop: v.top / f,
                            viewportBottom:
                              ((null == m ? void 0 : m.bottom) ?? 0) / f,
                            viewportTop:
                              ((null == m ? void 0 : m.top) ?? 0) / f,
                          },
                        };
                      })(e, t, n, o, s);
                      r &&
                        (r.scrollViewport &&
                          (r.autoScroll = (0, L.v)({
                            onScroll: () => e2(r),
                            viewport: r.scrollViewport,
                          })),
                        (d.current = r),
                        null == (a = (l = e.currentTarget).setPointerCapture) ||
                          a.call(l, e.pointerId));
                    },
                    [t, i, s, n, o],
                  ),
                  m = (0, v.useCallback)(
                    (e) => {
                      var t, i, n, l, o;
                      let s,
                        c,
                        u = d.current;
                      u &&
                        u.pointerId === e.pointerId &&
                        ((t = e),
                        (i = u),
                        (n = a),
                        (l = r),
                        (i.latestClientX = t.clientX),
                        (i.latestClientY = t.clientY),
                        (s = t.clientX - i.startClientX),
                        (c = t.clientY - i.startClientY),
                        (!i.didDrag && 5 >= Math.hypot(s, c)) ||
                          (i.didDrag || (l(i.clipId), null == n || n()),
                          (i.didDrag = !0),
                          null == (o = i.autoScroll) ||
                            o.updatePointer(t.clientX),
                          e2(i),
                          t.preventDefault()));
                    },
                    [a, r],
                  );
                return {
                  bindings: {
                    onClickCapture: (0, v.useCallback)((e) => {
                      e.timeStamp > c.current ||
                        ((c.current = 0),
                        e.preventDefault(),
                        e.stopPropagation());
                    }, []),
                    onLostPointerCapture: (e) => u(e, !1),
                    onPointerCancel: (e) => u(e, !1),
                    onPointerDown: p,
                    onPointerMove: m,
                    onPointerUp: (e) => u(e, !0),
                  },
                };
              })(
                (t = {
                  clips: e.clips,
                  enabled: r && o,
                  geometry: e.layout.geometry,
                  onMoveClip: s,
                  onEditStart: e.onEditStart,
                  onSetSelectedClip: d,
                  timelineId: c,
                  visibleClipCount: e.visibleClips.length,
                }),
              )),
              (a = (function (e) {
                let {
                  clips: t,
                  enabled: i,
                  onEditStart: n,
                  onMoveClip: a,
                  onSetSelectedClip: l,
                  visibleClipCount: r,
                } = e;
                return (0, v.useCallback)(
                  (e) => {
                    if (
                      !i ||
                      !e.shiftKey ||
                      ("ArrowLeft" !== e.key && "ArrowRight" !== e.key)
                    )
                      return;
                    let o = e3(e.target, e.currentTarget),
                      s = null == o ? void 0 : o.dataset.timelineClipId,
                      d = s ? t.findIndex((e) => e.clipId === s) : -1;
                    if (
                      (e.preventDefault(),
                      e.stopPropagation(),
                      e.repeat || !s || d < 0)
                    )
                      return;
                    let c = d + ("ArrowLeft" === e.key ? -1 : 1);
                    c < 0 || c >= r || (l(s), null == n || n(), a(s, c));
                  },
                  [t, i, n, a, l, r],
                );
              })(t)),
              {
                bindings: {
                  ...i.bindings,
                  descriptionId: `timeline-${t.timelineId}-clip-reorder-hint`,
                  onKeyDown: a,
                },
              }),
            m = null;
          return (
            r &&
              o &&
              (m = (0, n.jsx)("span", {
                className: "sr-only",
                id: p.bindings.descriptionId,
                children: (0, x.m95)(),
              })),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(eY, {
                  ...u,
                  active: l,
                  clipInteractionActive: r,
                  clips: e.clips,
                  layout: e.layout,
                  onTrimClip: l && o ? e.onTrimClip : void 0,
                  reorder: r && o ? p.bindings : void 0,
                  thumbnailPreparation: l ? "live" : "eager",
                  timelineId: c,
                  visibleClips: e.visibleClips,
                }),
                m,
              ],
            })
          );
        });
      function e6(e) {
        let t = e.current;
        ((e.current = null), t && e9(t));
      }
      function e2(e) {
        var t, i, n;
        let a, l, r;
        if (!e.didDrag) return;
        let o =
            (0, G.Ye)(e.latestClientX - e.startClientX, e.pointerLocalScale) +
            (((null == (t = e.scrollViewport) ? void 0 : t.scrollLeft) ??
              e.startScrollLeft) -
              e.startScrollLeft),
          s =
            ((i = (0, G.Ye)(
              e.latestClientY - e.startClientY,
              e.pointerLocalScale,
            )),
            (n = e.verticalBounds),
            (a = Math.max(-40, Math.min(40, i))),
            (l = n.viewportBottom - n.viewportTop),
            (r = n.clipBottom - n.clipTop),
            l <= 0 || r <= 0
              ? a
              : Math.max(
                  Math.max(-40, n.viewportTop - n.clipTop),
                  Math.min(Math.min(40, n.viewportBottom - n.clipBottom), a),
                )),
          d = (0, D.df)(e.geometry, e.draggedIndex, o);
        if (d !== e.targetIndex) {
          let t = e.targetIndex;
          ((e.targetIndex = d),
            (function (e, t) {
              let i = Math.min(e.draggedIndex, t, e.targetIndex),
                n = Math.max(e.draggedIndex, t, e.targetIndex),
                a = e.geometry[e.draggedIndex];
              if (!a)
                return (0, m.JW)(
                  e.facts,
                  p.aH,
                  `missing_clip_geometry:${e.draggedIndex}`,
                  {
                    clipIndex: e.draggedIndex,
                    reason: "missing_clip_geometry",
                  },
                );
              let l = a.durationPixels;
              for (let t = i; t <= n; t += 1) {
                if (t === e.draggedIndex) continue;
                let i = e.clipIds[t],
                  n = i ? e.elementByClipId.get(i) : void 0;
                if (!n) continue;
                let a =
                  e.targetIndex > e.draggedIndex &&
                  t > e.draggedIndex &&
                  t <= e.targetIndex
                    ? -l
                    : e.targetIndex < e.draggedIndex &&
                        t >= e.targetIndex &&
                        t < e.draggedIndex
                      ? l
                      : 0;
                0 === a
                  ? n.style.removeProperty("transform")
                  : (n.style.transform = `translateX(${a}px)`);
              }
            })(e, t));
        }
        ((e.draggedElement.dataset.timelineDragging = "true"),
          (e.draggedElement.style.cursor = "grabbing"),
          (0, O.A)([e.draggedElement]),
          (e.draggedElement.style.transform = `translate(${o}px, ${s}px)`),
          (e.draggedElement.style.zIndex = "30"));
      }
      function e9(e) {
        var t;
        null == (t = e.autoScroll) || t.stop();
        let i = [...e.elementByClipId.values()];
        for (let e of ((0, O.A)(i), i)) e.style.removeProperty("transform");
        (delete e.draggedElement.dataset.timelineDragging,
          e.draggedElement.style.removeProperty("cursor"),
          e.draggedElement.style.removeProperty("z-index"),
          (0, O.m)(i));
      }
      function e3(e, t) {
        if (!(e instanceof Element)) return null;
        let i = e.closest("[data-timeline-clip-id]");
        return i && (t.contains(i) || i.contains(t)) ? i : null;
      }
      let e8 = (0, v.memo)(function (e) {
        var t, i, a;
        let {
            clip: l,
            geometry: r,
            index: o,
            interactionActive: s,
            onRemove: d,
            onEditStart: c,
            onSelect: u,
            onTrimClip: p,
            onTrimPreviewEndTickChange: m,
            playhead: f,
            reorder: h,
            resource: x,
            selected: g,
            thumbnailPreparation: k,
            timelineId: b,
            viewport: w,
          } = e,
          C = (0, v.useCallback)(
            () => (null == u ? void 0 : u(l.clipId)),
            [l.clipId, u],
          ),
          P = (0, v.useCallback)(
            (e) => (null == p ? void 0 : p(l.clipId, e)) ?? !1,
            [l.clipId, p],
          ),
          y =
            ((t = d),
            (i = h),
            (a = g),
            (0, v.useCallback)(
              (e) => {
                if (a && t && ("Delete" === e.key || "Backspace" === e.key)) {
                  (e.preventDefault(), e.stopPropagation(), t());
                  return;
                }
                null == i || i.onKeyDown(e);
              },
              [t, i, a],
            )),
          I = (0, v.useCallback)(
            (e) => (null == m ? void 0 : m(l.clipId, e)),
            [l.clipId, m],
          ),
          T = void 0 !== u,
          S = s && T;
        return (0, n.jsx)(ea.T, {
          ariaDescribedBy: S ? (null == h ? void 0 : h.descriptionId) : void 0,
          ariaHidden: !S || void 0,
          ariaKeyShortcuts:
            S && h ? "Shift+ArrowLeft Shift+ArrowRight" : void 0,
          clip: l,
          dataTestId: `timeline-${l.kind}-clip`,
          geometry: r,
          index: o,
          interactive: S,
          onClick: T ? C : void 0,
          onClickCapture: S ? (null == h ? void 0 : h.onClickCapture) : void 0,
          onEditStart: c,
          onKeyDown: S ? y : void 0,
          onLostPointerCapture: S
            ? null == h
              ? void 0
              : h.onLostPointerCapture
            : void 0,
          onPointerCancel: S
            ? null == h
              ? void 0
              : h.onPointerCancel
            : void 0,
          onPointerDown: S ? (null == h ? void 0 : h.onPointerDown) : void 0,
          onPointerMove: S ? (null == h ? void 0 : h.onPointerMove) : void 0,
          onPointerUp: S ? (null == h ? void 0 : h.onPointerUp) : void 0,
          onTrim: p ? P : void 0,
          onTrimPreviewEndTickChange: I,
          playhead: f,
          presentation: "node",
          resource: x,
          selected: g,
          tabIndex: S ? void 0 : -1,
          thumbnailPreparation: k,
          timelineId: b,
          viewport: w,
        });
      });
      function e7(e) {
        return `${e}px`;
      }
    },
    29348(e, t, i) {
      i.d(t, { AW: () => P, Vs: () => C, x1: () => w });
      var n = i(90561),
        a = i(87429),
        l = i(172),
        r = i(56958);
      function o(e) {
        let { offset: t, width: i, mute: a, children: l } = e;
        return (0, n.jsxs)("div", {
          className: "relative flex items-end w-full h-full overflow-visible",
          "data-testid": "timeline-full-passive-track",
          children: [
            (0, n.jsxs)("div", {
              className:
                "relative z-canvas-timeline-track-gutter flex-none w-canvas-timeline-node-track-gutter h-full bg-dreamina-canvas-frame",
              "data-testid": "timeline-track-gutter",
              children: [
                a,
                (0, n.jsx)("div", {
                  "aria-hidden": "true",
                  className:
                    "absolute top-0 right-0 bottom-0 w-canvas-timeline-node-track-divider bg-canvas-timeline-node-track-divider pointer-events-none",
                  "data-testid": "timeline-node-track-divider",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className:
                "relative self-start [flex:1_1_0] min-w-canvas-zero w-full h-full overflow-hidden",
              "data-testid": "timeline-passive-track-viewport",
              children: (0, n.jsx)("div", {
                className:
                  "octo-timeline-track-canvas relative flex flex-col min-w-full min-h-full gap-canvas-timeline-node-track-gap",
                "data-timeline-track-canvas": "true",
                "data-testid": "timeline-track-canvas",
                style: {
                  marginInlineStart: `${t}px`,
                  minWidth: "calc(100% - 11px)",
                  width: `${i}px`,
                },
                children: l,
              }),
            }),
          ],
        });
      }
      var s = i(48438),
        d = i(86986),
        c = i(64448),
        u = i(79253),
        p = i(335),
        m = i(66876),
        v = i(50308),
        f = i(20666),
        h = i(1402),
        x = i(20438),
        g = i(9191),
        k = i(66060),
        b = i(95474);
      function w(e) {
        let t = Math.max(0, e.contentOffsetPixels - 11),
          i = Math.max(e.rulerViewport.scrollLeftPixels, t);
        return i === e.rulerViewport.scrollLeftPixels
          ? e
          : {
              ...e,
              rulerViewport: { ...e.rulerViewport, scrollLeftPixels: i },
            };
      }
      let C = (0, a.memo)(function (e) {
        var t;
        let { data: i } = e,
          l = w(
            (0, a.useMemo)(() => {
              if (e.layout) return e.layout;
              let t = {
                  scrollLeftPixels: 0,
                  widthPixels: Math.max(0, e.width - 3 - 66),
                },
                n = t.widthPixels - 11 - 6,
                a = (0, g.jB)(
                  i.clips,
                  (0, x.g)(i.totalDurationTick, void 0, n),
                );
              return {
                geometry: a,
                viewport: t,
                rulerViewport: t,
                ticks: (0, g.A9)({ ...a, viewport: t }),
                contentOffsetPixels: 11,
              };
            }, [i, e.layout, e.width]),
          ),
          { geometry: k, viewport: C } = l,
          y = (0, g.id)(k.clips, C),
          I =
            (null == (t = i.audioTracks)
              ? void 0
              : t.some((e) => e.clips.length > 0)) ?? !1,
          T = e.trackPresentation ?? (I ? "expanded" : "compact"),
          S = (0, b.j)(i.visualTrackMuted ?? !1, i.audioTracks);
        return (0, n.jsx)(r.O, {
          writeChromeVisible: !1,
          fullscreenAction: (0, n.jsx)(n.Fragment, {}),
          ...e.frame,
          totalDurationTick: i.totalDurationTick,
          children: (0, n.jsxs)(o, {
            offset: l.contentOffsetPixels - l.rulerViewport.scrollLeftPixels,
            width: Math.max(k.rulerWidthPixels, k.contentEndPixels + 6),
            mute:
              e.muteControl ??
              (0, n.jsx)(f.H, { muted: S.muted, placement: "node-indicator" }),
            children: [
              (0, n.jsx)(s.i, { geometry: k, ticks: l.ticks }),
              e.lane ??
                (0, n.jsxs)(P, {
                  presentation: T,
                  viewport: l.rulerViewport,
                  contentOffsetPixels: l.contentOffsetPixels,
                  children: [
                    i.clips.slice(y.startIndex, y.endIndex).map((t, i) => {
                      let a = y.startIndex + i,
                        {
                          preview: l,
                          renderWidthPixels: r,
                          thumbnail: o,
                        } = (0, u.q)({
                          clip: t,
                          geometry: k.clips[a],
                          presentation: "node",
                          viewport: C,
                        });
                      return (0, n.jsx)(
                        p.ZC,
                        {
                          clipId: t.clipId,
                          presentation: "node",
                          interactive: !1,
                          selected: !1,
                          trimming: !1,
                          startPixels: l.startPixels,
                          widthPixels: l.widthPixels,
                          children: (0, n.jsx)("div", {
                            role: "img",
                            "aria-label": (0, m.waA)({
                              durationSeconds: (0, v.i$)(l.durationTick),
                              index: a + 1,
                              kind: t.kind,
                            }),
                            className: `${p.Tp} ${(0, p.aI)("node", !1)}`,
                            "data-testid": `timeline-${t.kind}-clip`,
                            style: { width: r },
                            children: (0, n.jsx)(c.N, {
                              clip: t,
                              ...o,
                              durationTick: l.durationTick,
                              extractionEnabled: !1,
                              selected: !1,
                              presentation: "node",
                              resource: t.resolvedResourceId
                                ? e.resourceById.get(t.resolvedResourceId)
                                : void 0,
                            }),
                          }),
                        },
                        t.clipId,
                      );
                    }),
                    0 === i.clips.length
                      ? (0, n.jsx)(d.ex, {
                          viewport: l.rulerViewport,
                          contentOffsetPixels: l.contentOffsetPixels,
                        })
                      : null,
                    (0, n.jsx)(h.Q, {
                      durationTick: I ? i.totalDurationTick : 0,
                      pixelsPerTick: k.pixelsPerTick,
                      waveform: null,
                    }),
                  ],
                }),
            ],
          }),
        });
      });
      function P(e) {
        let t = "loading" === e.presentation,
          i =
            "compact" === e.presentation
              ? "h-canvas-timeline-node-visual-clip"
              : "h-canvas-timeline-node-visual-track";
        return (0, n.jsxs)(n.Fragment, {
          children: [
            t
              ? (0, n.jsx)(l.EAD, {
                  className: `${k.t} block overflow-hidden rounded-canvas-timeline-clip motion-safe:animate-pulse motion-reduce:animate-none ${i}`,
                  "data-testid": "timeline-node-loading-track",
                  style: (0, k.D)(e.viewport, e.contentOffsetPixels),
                })
              : null,
            (0, n.jsx)("div", {
              className: `relative ${t ? "hidden" : "flex"} items-start min-w-canvas-timeline-zero overflow-visible [touch-action:pan-y] ${i}`,
              "data-testid": "timeline-clip-track",
              hidden: t,
              children: e.children,
            }),
          ],
        });
      }
    },
    20438(e, t, i) {
      var n = i(9191);
      function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 32.1,
          i = arguments.length > 2 ? arguments[2] : void 0,
          a = (0, n.KL)(t / 1.5),
          l = Math.max(e, 36e5),
          r = {
            ...a,
            pixelsPerSecond: t,
            rulerDurationTick: Math.ceil(l / a.majorStepTick) * a.majorStepTick,
          };
        if (void 0 === i) return r;
        let o = Math.min(
          r.pixelsPerSecond,
          (12e4 * Math.max(1, i - 72)) / r.rulerDurationTick,
        );
        return { ...r, ...(0, n.KL)(o / 1.5), pixelsPerSecond: o };
      }
      i.d(t, { g: () => a });
    },
    56958(e, t, i) {
      var n = i(90561),
        a = i(87429),
        l = i(66876),
        r = i(172),
        o = i(78033);
      function s(e) {
        let { children: t, labeled: i = !1, primary: a = !1 } = e,
          l = "text-dreamina-button-secondary-text-disabled";
        return (
          a && (l = "text-dreamina-text-primary"),
          (0, n.jsx)("span", {
            "aria-hidden": "true",
            className: `flex h-canvas-timeline-node-control items-center justify-center ${i ? "w-auto px-canvas-timeline-node-control-inset gap-canvas-timeline-node-track-gap" : "w-canvas-timeline-node-control"} ${l}`,
            children: t,
          })
        );
      }
      let d = (0, a.memo)(function (e) {
        var t;
        let i = !1 !== e.writeChromeVisible,
          a =
            ((t = e),
            i
              ? {
                  action:
                    t.action ??
                    (0, n.jsx)(s, {
                      children: (0, n.jsx)(r.oH7, { size: 24 }),
                    }),
                  download:
                    t.downloadAction ??
                    (0, n.jsx)(s, {
                      primary: !0,
                      children: (0, n.jsx)(r.s3U, { size: 24 }),
                    }),
                  leading:
                    t.leadingAction ??
                    (0, n.jsx)(s, {
                      children: (0, n.jsx)(r.fYC, { size: 24 }),
                    }),
                }
              : { action: null, download: null, leading: null });
        return (0, n.jsxs)("div", {
          className:
            "flex flex-col w-full min-h-canvas-timeline-zero h-full overflow-hidden bg-dreamina-canvas-frame text-dreamina-text-disabled border-canvas-timeline-node-stroke border-dreamina-stroke-secondary rounded-canvas-timeline-node-surface",
          "data-testid": "timeline-flow-node-main-track",
          onBlurCapture: e.onBlurCapture,
          onFocusCapture: e.onFocusCapture,
          onPointerEnter: e.onPointerEnter,
          onPointerLeave: e.onPointerLeave,
          children: [
            (0, n.jsxs)("div", {
              className:
                "relative flex flex-none items-center justify-between h-canvas-timeline-node-toolbar p-canvas-timeline-node-toolbar-padding",
              "data-testid": "timeline-toolbar",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex items-center gap-canvas-timeline-node-track-gap",
                  children: [a.leading, a.action],
                }),
                (0, n.jsx)("div", {
                  className:
                    "absolute top-[50%] left-[50%] flex items-center h-canvas-timeline-node-playback gap-canvas-timeline-node-playback-gap [transform:translate(-50%,_-50%)]",
                  children: e.preview
                    ? (0, n.jsx)(o.R, {
                        preview: e.preview,
                        totalDurationTick: e.totalDurationTick,
                        variant: "node",
                      })
                    : (0, n.jsx)(o.H, {
                        currentTimeTick: e.currentTimeTick ?? 0,
                        onTogglePlayback: e.onTogglePlayback,
                        playing: e.playing ?? !1,
                        status: e.playbackStatus,
                        totalDurationTick: e.totalDurationTick,
                        variant: "node",
                      }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex items-center gap-canvas-timeline-node-track-gap",
                  children: [
                    a.download,
                    e.fullscreenAction ??
                      (0, n.jsxs)(s, {
                        labeled: !0,
                        primary: i,
                        children: [
                          (0, n.jsx)(r.P7m, { size: 24 }),
                          (0, n.jsx)("span", {
                            className:
                              "font-dreamina-cn text-canvas-timeline-node-label font-dreamina-regular",
                            children: i ? (0, l.ayE)() : (0, l.jVK)(),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "min-h-canvas-timeline-zero flex-1",
              children: e.children,
            }),
          ],
        });
      });
      i.d(t, {}, { O: d });
    },
    34963(e, t, i) {
      var n = i(4159);
      i.d(t, { Ap: () => n.Ap, F1: () => n.F1, KY: () => n.KY });
    },
  },
]);
