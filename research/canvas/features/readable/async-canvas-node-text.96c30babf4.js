"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [6294],
  {
    54221(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(172),
        o = n(93998);
      let s = (0, i.memo)(function (e) {
        let { fieldSize: t, logicalHeight: n, logicalWidth: i } = e,
          s = (0, o.FY)();
        return (0, a.jsx)(r.bJ1, {
          className:
            "pointer-events-none absolute inset-0 z-canvas-media-generating-star-field size-full text-dreamina-on-media-text-primary opacity-canvas-media-generating-field mix-blend-screen [[data-dreamina-theme=light]_&]:text-dreamina-text-primary [[data-dreamina-theme=light]_&]:mix-blend-normal",
          fieldSize: t,
          logicalHeight: n,
          logicalWidth: i,
          schedulerOwner: s,
          testId: "media-node-generating-canvas",
        });
      });
      n.d(t, {}, { W: s });
    },
    8349(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(172),
        o = n(83399);
      function s(e) {
        var t, n, s, l;
        let d,
          c,
          u = e.durationMs ?? r.djC[e.animationMode ?? "finite"].durationMs,
          h =
            ((t = e.startedAtMs),
            (n = e.animationMode),
            (s = u),
            (d = (0, i.useRef)()),
            void 0 !== t &&
              Number.isFinite(t) &&
              (null == (l = d.current) ? void 0 : l.startedAtMs) !== t &&
              (d.current = { observedAtMs: Date.now(), startedAtMs: t }),
            (c = d.current)
              ? {
                  begin: (function (e, t, n) {
                    if (void 0 === e || !Number.isFinite(e)) return;
                    let a = Math.min(n, Math.max(0, t - e));
                    return 0 === a ? "0s" : `-${a / 1e3}s`;
                  })(c.startedAtMs, c.observedAtMs, s),
                  finished: c.observedAtMs - c.startedAtMs >= s,
                  key: `${n ?? "finite"}:${s}:${c.startedAtMs}`,
                }
              : { key: `${n ?? "finite"}:${s}:pending` }),
          m = e.outset ?? 0,
          v = m > 0 ? (0, o.pK)(e.hostBorderWidth ?? 0) : void 0;
        return (0, a.jsx)(
          r.Vgh,
          {
            animationBegin: h.begin,
            animationFinished: h.finished,
            animationMode: e.animationMode,
            durationMs: u,
            className:
              m > 0
                ? "pointer-events-none absolute z-canvas-node-processing-border overflow-visible text-dreamina-on-media-text-primary [[data-dreamina-theme=light]_&]:text-dreamina-text-primary"
                : "pointer-events-none absolute left-0 top-0 z-canvas-node-processing-border h-full w-full overflow-visible text-dreamina-on-media-text-primary [[data-dreamina-theme=light]_&]:text-dreamina-text-primary",
            "data-canvas-node-processing-border": "true",
            "data-testid": "canvas-node-processing-border",
            frameGeometry: v,
            logicalHeight: e.logicalHeight,
            logicalWidth: e.logicalWidth,
            outset: m,
            style: (function (e) {
              if (e)
                return {
                  borderRadius: e.borderRadius,
                  height: e.height,
                  inset: e.inset,
                  strokeWidth: e.strokeWidth,
                  width: e.width,
                };
            })(v),
          },
          h.key,
        );
      }
      n.d(t, { m: () => s });
    },
    64534(e, t, n) {
      var a = n(1774),
        i = n(96103);
      function r(e) {
        return e === i.OH.INPUT_TEXT_COPYRIGHT
          ? "input_text_copyright"
          : "content_safety" === (0, a.HH)(e)
            ? "content_safety"
            : "generation_failed";
      }
      n.d(t, { d: () => r });
    },
    40962(e, t, n) {
      var a = n(35389);
      function i(e, t) {
        if (!e.rank) {
          let e = (0, a.ub)();
          return { message: e, position: e };
        }
        let n = t.positionLabel(e.rank.position, e.rank.total);
        if (e.rank.estimatedWaitMs <= 0) return { message: n, position: n };
        let i = t.estimateLabel(e.rank.estimatedWaitMs);
        return { estimate: i, message: `${n}. ${i}`, position: n };
      }
      n.d(t, { b: () => i });
    },
    7386(e, t, n) {
      n.d(t, { T: () => d });
      var a = n(90561),
        i = n(87429),
        r = n(8349),
        o = n(7379),
        s = n(172);
      let l = (0, i.memo)(function (e) {
          let {
            label: t,
            description: n,
            cancelLabel: i,
            cancelDisabled: r = !1,
            active: l = !0,
            onCancel: d,
          } = e;
          return (0, a.jsxs)("div", {
            className:
              "flex w-full flex-col items-center gap-canvas-media-node-gap",
            "data-testid": "node-generation-task-card",
            children: [
              (0, a.jsx)(s.osr, {
                "aria-hidden": !0,
                className: o.q1,
                size: 20,
              }),
              (0, a.jsxs)("div", {
                className: o.bD,
                children: [
                  (0, a.jsxs)("p", {
                    elementtiming: "canvas-initial-content",
                    "data-canvas-content-evidence": "element",
                    "data-canvas-content-state": "queued",
                    className: o.gJ,
                    children: [
                      t,
                      void 0 !== n
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("br", {}), n],
                          })
                        : null,
                    ],
                  }),
                  d
                    ? (0, a.jsx)(s.$nd, {
                        "aria-label": i,
                        className: `${o.Nu} ${o.xx}`,
                        disabled: r,
                        tabIndex: l ? void 0 : -1,
                        type: "button",
                        variant: "text",
                        onClick: d,
                        children: i,
                      })
                    : null,
                ],
              }),
            ],
          });
        }),
        d = (0, i.memo)(function (e) {
          var t, n, s, d;
          let c = e.surfaceClassName ?? o.S1,
            { onCancel: u, resourceId: h } = e,
            m = (0, i.useCallback)(() => (null == u ? void 0 : u(h)), [u, h]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                "aria-busy": "true",
                "aria-label": e.active
                  ? `${e.announcement}. ${e.description ?? ""}`.trim()
                  : e.description,
                className: `${c} ${o.Ux}`,
                "data-testid": e.testId,
                id: e.descriptionId,
                role: e.active ? "status" : "group",
                children: [
                  (0, a.jsx)(l, {
                    active: e.active,
                    label: e.position,
                    description: e.estimate,
                    cancelLabel: e.cancelLabel,
                    cancelDisabled: e.cancelDisabled,
                    onCancel: e.onCancel ? m : void 0,
                  }),
                  (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: o.po,
                  }),
                ],
              }),
              (0, a.jsx)(r.m, {
                logicalHeight: e.logicalHeight,
                logicalWidth: e.logicalWidth,
                animationMode:
                  null == (t = e.processingBorder) ? void 0 : t.animationMode,
                durationMs:
                  null == (n = e.processingBorder) ? void 0 : n.durationMs,
                hostBorderWidth:
                  null == (s = e.processingBorder) ? void 0 : s.hostBorderWidth,
                outset: 4,
                startedAtMs:
                  null == (d = e.processingBorder) ? void 0 : d.startedAtMs,
              }),
            ],
          });
        });
    },
    42921(e, t, n) {
      n.d(t, { TextFlowNode: () => eu });
      var a = n(90561),
        i = n(96783),
        r = n(31327),
        o = n(1279),
        s = n(66876),
        l = n(19747),
        d = n(172),
        c = n(24548),
        u = n(4081),
        h = n(87429),
        m = n(8141),
        v = n(83399),
        f = n(93998),
        p = n(60794),
        g = n(99864),
        x = n(24009),
        b = n(22635),
        y = n(72246),
        w = n(98341),
        R = n(44286),
        k = n(54221),
        M = n(91229),
        A = n(64534),
        C = n(7379),
        j = n(40962),
        N = n(7386);
      let $ = (0, h.memo)(function (e) {
        let {
          label: t,
          cancelLabel: n,
          cancelDisabled: i = !1,
          onCancel: r,
        } = e;
        return (0, a.jsx)("div", {
          className:
            "pointer-events-none absolute inset-x-0 top-0 z-canvas-media-result-action-chrome flex flex-col items-start gap-canvas-node-generation-badge-gap px-canvas-node-generation-status-inline py-canvas-node-generation-status-block font-dreamina-cn text-dreamina-cn-12",
          "data-testid": "node-generation-status-bar",
          children: (0, a.jsxs)("div", {
            className:
              "pointer-events-auto flex h-canvas-node-generation-badge max-w-full items-center gap-canvas-node-generation-badge-gap rounded-canvas-node-generation-badge bg-dreamina-block-primary-default py-canvas-node-generation-badge-block pl-canvas-node-generation-status-inline pr-canvas-node-generation-badge-end text-dreamina-text-primary",
            children: [
              (0, a.jsx)("span", {
                elementtiming: "canvas-initial-content",
                "data-canvas-content-evidence": "element",
                "data-canvas-content-state": "generating",
                className: "min-w-canvas-zero truncate",
                title: t,
                children: t,
              }),
              r
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className:
                          "mx-canvas-node-generation-badge-gap h-canvas-node-generation-separator-height w-canvas-node-generation-separator-width shrink-0 bg-dreamina-stroke-secondary",
                      }),
                      (0, a.jsx)(d.$nd, {
                        "aria-label": n,
                        className:
                          "nodrag min-h-canvas-media-node-text-action shrink-0 p-canvas-media-node-text-action-inset text-dreamina-cn-12 text-dreamina-text-tertiary hover:text-dreamina-text-primary",
                        disabled: i,
                        type: "button",
                        variant: "text",
                        size: "unframed",
                        onClick: r,
                        children: n,
                      }),
                    ],
                  })
                : null,
            ],
          }),
        });
      });
      var I = n(85817),
        E = n(26972);
      class L {
        register(e, t) {
          return (
            this.measurements.set(e, t),
            this.attachFontListener(),
            () => {
              this.measurements.get(e) === t &&
                (this.measurements.delete(e),
                this.pending.delete(e),
                this.cancelEmptyFrame(),
                this.detachFontListenerIfUnused());
            }
          );
        }
        schedule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.measurements.has(e)) return;
          let n = !0 === t.force;
          (this.pending.set(e, n || !0 === this.pending.get(e)),
            this.ensureFrame());
        }
        cancel(e) {
          (this.pending.delete(e), this.cancelEmptyFrame());
        }
        ensureFrame() {
          0 !== this.pending.size &&
            void 0 === this.frameHandle &&
            (this.frameHandle = this.requestFrame(this.flushFrame));
        }
        cancelEmptyFrame() {
          this.pending.size > 0 ||
            void 0 === this.frameHandle ||
            (this.cancelFrame(this.frameHandle), (this.frameHandle = void 0));
        }
        attachFontListener() {
          this.fontSet &&
            !this.isFontListenerAttached &&
            (this.fontSet.addEventListener(
              "loadingdone",
              this.handleFontsLoaded,
            ),
            (this.isFontListenerAttached = !0));
        }
        detachFontListenerIfUnused() {
          this.fontSet &&
            this.isFontListenerAttached &&
            !(this.measurements.size > 0) &&
            (this.fontSet.removeEventListener(
              "loadingdone",
              this.handleFontsLoaded,
            ),
            (this.isFontListenerAttached = !1));
        }
        constructor(e = {}) {
          ((this.measurements = new Map()),
            (this.pending = new Map()),
            (this.isFontListenerAttached = !1),
            (this.flushFrame = () => {
              for (let [t, n] of ((this.frameHandle = void 0),
              [...this.pending.entries()].slice(
                0,
                this.maxMeasurementsPerFrame,
              ))) {
                var e;
                (this.pending.delete(t),
                  null == (e = this.measurements.get(t)) || e(n));
              }
              this.ensureFrame();
            }),
            (this.handleFontsLoaded = () => {
              for (let e of this.measurements.keys())
                this.schedule(e, { force: !0 });
            }),
            (this.cancelFrame =
              e.cancelFrame ?? ((e) => cancelAnimationFrame(e))),
            (this.fontSet = e.fontSet),
            (this.maxMeasurementsPerFrame = e.maxMeasurementsPerFrame ?? 4),
            (this.requestFrame =
              e.requestFrame ?? ((e) => requestAnimationFrame(e))));
        }
      }
      let F = new WeakMap();
      var z = n(15882),
        S = n(16475),
        P = n(54934);
      let H = `calc(-12px - ${(0, v.pI)(4)})`,
        T = (0, v.kj)(),
        W = {
          "top-left": { ...T, left: H, top: H },
          "top-right": { ...T, right: H, top: H },
          "bottom-right": { ...T, bottom: H, right: H },
          "bottom-left": { ...T, bottom: H, left: H },
        },
        _ = `calc(${(0, v.pI)(10)})`,
        D = `calc(-${(0, v.pI)(9)})`,
        Y = {
          top: { height: _, top: D },
          right: { right: D, width: _ },
          bottom: { bottom: D, height: _ },
          left: { left: D, width: _ },
        },
        q = [
          "top-left",
          "top",
          "top-right",
          "right",
          "bottom-right",
          "bottom",
          "bottom-left",
          "left",
        ],
        B = (0, h.memo)(function (e) {
          let t = (function (e) {
            var t, n, a, i, r, o, s, l, d, c, m, v, p, g, x;
            let b,
              y,
              w,
              R,
              k,
              M,
              A,
              C,
              j,
              N = (0, f.FY)(),
              $ = (0, S.e)(),
              { nodeId: I } = e,
              E = (0, z.kW)(),
              L =
                null == (t = N.featuresApi)
                  ? void 0
                  : t.canvas.actions.resizeTextNode,
              F = (0, f.ZG)(I, e.parentId, e.rect),
              P =
                ((a = null == (n = N.featuresApi) ? void 0 : n.canvas.actions),
                (i = L),
                (r = I),
                (b = (0, h.useCallback)(
                  (e) =>
                    (null == a ? void 0 : a.subscribe(e)) ?? (() => void 0),
                  [a],
                )),
                (y = (0, h.useCallback)(
                  () => (null == i ? void 0 : i.getState(r).available) === !0,
                  [i, r],
                )),
                (0, h.useSyncExternalStore)(b, y, y) && void 0 !== F),
              H = F ?? e.rect,
              T = (0, h.useRef)(null),
              W = (0, h.useCallback)(
                (e) => {
                  N.actions.setTextNodeResizing(I, e, e ? "user" : "system");
                },
                [N, I],
              ),
              {
                applyPreview: _,
                cancelScheduledPreview: D,
                queuePreview: Y,
              } = ((o = N),
              (s = I),
              (w = (0, h.useRef)(null)),
              (R = (0, h.useRef)(null)),
              (k = (0, h.useCallback)(
                (e) => {
                  o.actions.previewTextNodeResize(s, e, "user");
                },
                [o, s],
              )),
              (M = (0, h.useCallback)(() => {
                (null !== R.current && window.cancelAnimationFrame(R.current),
                  (R.current = null),
                  (w.current = null));
              }, [])),
              (A = (0, h.useCallback)(
                (e) => {
                  ((w.current = e),
                    null === R.current &&
                      (R.current = requestAnimationFrame(() => {
                        R.current = null;
                        let e = w.current;
                        ((w.current = null), e && k(e));
                      })));
                },
                [k],
              )),
              { applyPreview: k, cancelScheduledPreview: M, queuePreview: A }),
              q = (0, h.useCallback)(() => {
                N.actions.restoreTextNodeResizeAuthority(I, "system");
              }, [N, I]),
              {
                resolveSnappedRect: B,
                startSnapping: K,
                stopSnapping: X,
              } = ((l = e),
              (d = $),
              (C = (0, h.useCallback)(
                () => (null == d ? void 0 : d.stop()),
                [d],
              )),
              (j = (0, h.useCallback)(
                (e) => {
                  if (!d) return;
                  let t = { nodeId: l.nodeId, startRect: e.startRect };
                  l.parentId
                    ? d.start({ ...t, parentId: l.parentId })
                    : d.start(t);
                },
                [l.nodeId, l.parentId, d],
              )),
              {
                resolveSnappedRect: (0, h.useCallback)(
                  (e, t, n, a) => {
                    let i = V(e, t, n);
                    return d
                      ? d.adjust({
                          bypassed: "primary" === d.bypassModifier && a,
                          delta: { x: e.deltaX, y: e.deltaY },
                          handle: e.handle,
                          keepAspectRatio: t,
                          rawRect: i,
                          resolveRect: (a) =>
                            V({ ...e, deltaX: a.x, deltaY: a.y }, t, n),
                        })
                      : i;
                  },
                  [d],
                ),
                startSnapping: j,
                stopSnapping: C,
              });
            ((c = $),
              (0, h.useEffect)(() => {
                if (!c || "none" === c.bypassModifier) return;
                let e = (e) => {
                  c.setBypassed(e.metaKey || e.ctrlKey);
                };
                return (
                  window.addEventListener("keydown", e),
                  window.addEventListener("keyup", e),
                  () => {
                    (window.removeEventListener("keydown", e),
                      window.removeEventListener("keyup", e));
                  }
                );
              }, [c]));
            let O = (0, h.useCallback)(
                (e) =>
                  (function (e) {
                    let t = e.sessionRef.current;
                    if (!t) return void e.stopSnapping();
                    if (
                      ((e.sessionRef.current = null),
                      e.stopSnapping(),
                      e.cancelScheduledPreview(),
                      e.commit && Q(t.lastRect, t.startRect))
                    ) {
                      (e.restoreAuthority(), e.publishResizing(!1));
                      return;
                    }
                    if (e.commit) {
                      var n;
                      e.applyPreview(t.lastRect);
                      let a =
                        null == (n = e.action)
                          ? void 0
                          : n.execute(e.nodeId, t.lastRect, "user");
                      a
                        ? a.then(
                            (t) => {
                              t.ok || e.restoreAuthority();
                            },
                            () => e.restoreAuthority(),
                          )
                        : e.restoreAuthority();
                    } else e.restoreAuthority();
                    e.publishResizing(!1);
                  })({
                    action: L,
                    applyPreview: _,
                    cancelScheduledPreview: D,
                    commit: e,
                    nodeId: I,
                    publishResizing: W,
                    restoreAuthority: q,
                    sessionRef: T,
                    stopSnapping: X,
                  }),
                [L, _, D, I, W, q, X],
              ),
              U =
                ((m = L),
                (v = I),
                (p = H),
                (g = q),
                (0, h.useCallback)(
                  (e) => {
                    let t = (function (e, t) {
                      let n = u.ZL.text;
                      switch (t) {
                        case "left":
                          return {
                            ...e,
                            x: e.x + e.width - n.width,
                            width: n.width,
                          };
                        case "right":
                          return { ...e, width: n.width };
                        case "top":
                          return {
                            ...e,
                            y: e.y + e.height - n.height,
                            height: n.height,
                          };
                        case "bottom":
                          return { ...e, height: n.height };
                        default:
                          return e;
                      }
                    })(p, e);
                    if (Q(t, p)) return;
                    let n = null == m ? void 0 : m.execute(v, t, "user");
                    n
                      ? n.then((e) => {
                          e.ok || g();
                        }, g)
                      : g();
                  },
                  [m, v, p, g],
                ));
            return (
              (x = O),
              (0, h.useEffect)(() => {
                let e = () => x(!1);
                return (
                  window.addEventListener("blur", e),
                  () => {
                    (window.removeEventListener("blur", e), e());
                  }
                );
              }, [x]),
              {
                available: P,
                finishSession: O,
                publishResizing: W,
                queuePreview: Y,
                rect: H,
                resetEdgeDimension: U,
                resolveSnappedRect: B,
                sessionRef: T,
                startSnapping: K,
                viewportZoom: E.zoom,
              }
            );
          })(e);
          return t.available
            ? (0, a.jsx)("div", {
                "aria-hidden": "false",
                className:
                  "octo-text-node-resize-controls absolute z-[20] inset-0 pointer-events-none",
                "data-testid": "text-node-resize-controls",
                children: q.map((e) =>
                  (0, a.jsx)(X, { controller: t, handle: e }, e),
                ),
              })
            : null;
        });
      function K() {
        return (0, a.jsx)(d.yf$, {
          "aria-hidden": "true",
          className:
            "absolute left-[-10px] top-[-10px] size-4 pointer-events-auto",
          "data-testid": "textarea-resize-affordance",
        });
      }
      function X(e) {
        var t, n, i, r, o, l, c;
        let u,
          { controller: h, handle: m } = e,
          v =
            ((t = h),
            (n = m),
            {
              onDoubleClick(e) {
                (e.preventDefault(),
                  e.stopPropagation(),
                  J(n) && t.resetEdgeDimension(n));
              },
              ...((i = t),
              (r = n),
              {
                onKeyDown(e) {
                  if (
                    "Enter" === e.key &&
                    J(r) &&
                    null === i.sessionRef.current
                  ) {
                    (e.preventDefault(),
                      e.stopPropagation(),
                      i.resetEdgeDimension(r));
                    return;
                  }
                  if ("Escape" === e.key || "Enter" === e.key) {
                    (e.preventDefault(), i.finishSession("Enter" === e.key));
                    return;
                  }
                  let t = Z(e, r);
                  if (!t) return;
                  (e.preventDefault(), e.stopPropagation());
                  let n =
                    i.sessionRef.current ?? G({ handle: r, startRect: i.rect });
                  (i.sessionRef.current ||
                    ((i.sessionRef.current = n),
                    i.startSnapping(n),
                    i.publishResizing(!0)),
                    (n.deltaX += t.x),
                    (n.deltaY += t.y),
                    (n.lastRect = i.resolveSnappedRect(
                      n,
                      e.shiftKey,
                      e.altKey,
                      e.metaKey || e.ctrlKey,
                    )),
                    i.queuePreview(n.lastRect));
                },
                onKeyUp(e) {
                  Z(e, r) && i.finishSession(!0);
                },
              }),
              ...((o = t),
              (l = n),
              {
                onLostPointerCapture(e) {
                  var t;
                  (null == (t = o.sessionRef.current)
                    ? void 0
                    : t.pointerId) === e.pointerId && o.finishSession(!1);
                },
                onPointerCancel() {
                  o.finishSession(!1);
                },
                onPointerDown(e) {
                  var t, n;
                  0 !== e.button ||
                    o.sessionRef.current ||
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null == (t = (n = e.currentTarget).setPointerCapture) ||
                      t.call(n, e.pointerId),
                    (o.sessionRef.current = G({
                      handle: l,
                      pointerId: e.pointerId,
                      startClientX: e.clientX,
                      startClientY: e.clientY,
                      startRect: o.rect,
                    })),
                    o.startSnapping(o.sessionRef.current),
                    o.publishResizing(!0));
                },
                onPointerMove(e) {
                  let t = O(o.sessionRef.current, e.pointerId);
                  t && (U(o, t, e), o.queuePreview(t.lastRect));
                },
                onPointerUp(e) {
                  let t = O(o.sessionRef.current, e.pointerId);
                  t && (U(o, t, e), o.finishSession(!0));
                },
              }),
            }),
          f = (0, s.sYs)(m),
          p =
            "top-left" === (c = m) ||
            "top-right" === c ||
            "bottom-left" === c ||
            "bottom-right" === c,
          g = "",
          x = null;
        p
          ? ((g = "w-[24px] h-[24px]"),
            (u = W[m]),
            "bottom-right" === m && (x = (0, a.jsx)(K, {})))
          : (u = Y[m]);
        let b = "";
        return (
          "bottom-right" === m &&
            (b =
              "text-dreamina-text-disabled hover:text-dreamina-text-placeholder active:text-dreamina-text-disabled"),
          (0, a.jsx)(d.$nd, {
            ...v,
            "aria-keyshortcuts": J(m) ? "Enter" : void 0,
            "aria-label": J(m) ? `${f}. ${(0, s.$yb)()}` : f,
            className: `nodrag nopan [&:hover]:[background:transparent] absolute flex min-w-0 p-0 pointer-events-auto [touch-action:none] [background:transparent] [border:0] rounded-[0] ${g} ${(function (
              e,
            ) {
              switch (e) {
                case "top-left":
                case "bottom-right":
                  return "[cursor:nwse-resize]";
                case "top":
                case "bottom":
                  return "right-[12px] left-[12px] w-auto [cursor:ns-resize]";
                case "top-right":
                case "bottom-left":
                  return "[cursor:nesw-resize]";
                case "right":
                case "left":
                  return "top-[12px] bottom-[12px] h-auto [cursor:ew-resize]";
              }
            })(m)} ${b}`,
            "data-testid": `text-node-resize-${m}`,
            size: "icon",
            style: u,
            type: "button",
            variant: "text",
            onBlur: () => h.finishSession(!0),
            children: x,
          })
        );
      }
      function O(e, t) {
        return (null == e ? void 0 : e.pointerId) === t &&
          void 0 !== e.startClientX &&
          void 0 !== e.startClientY
          ? e
          : null;
      }
      function U(e, t, n) {
        Number.isFinite(n.clientX) &&
          Number.isFinite(n.clientY) &&
          ((t.deltaX =
            (n.clientX - (t.startClientX ?? n.clientX)) / e.viewportZoom),
          (t.deltaY =
            (n.clientY - (t.startClientY ?? n.clientY)) / e.viewportZoom),
          (t.lastRect = e.resolveSnappedRect(
            t,
            n.shiftKey,
            n.altKey,
            n.metaKey || n.ctrlKey,
          )));
      }
      function G(e) {
        return { ...e, deltaX: 0, deltaY: 0, lastRect: e.startRect };
      }
      function Q(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function V(e, t, n) {
        return (function (e) {
          let t,
            n,
            a =
              e.handle.endsWith("left") || "left" === e.handle
                ? -1
                : e.handle.endsWith("right") || "right" === e.handle
                  ? 1
                  : 0,
            i = e.handle.startsWith("top")
              ? -1
              : +!!e.handle.startsWith("bottom"),
            r = e.resizeFromCenter ? 2 : 1,
            o =
              0 === a
                ? e.startRect.width
                : e.startRect.width + a * e.delta.x * r,
            s =
              0 === i
                ? e.startRect.height
                : e.startRect.height + i * e.delta.y * r,
            l = P.I.layoutSizeMaximum;
          if (e.keepAspectRatio) {
            let r = o / e.startRect.width,
              d = s / e.startRect.height,
              c =
                0 === a
                  ? d
                  : 0 === i || Math.abs(r - 1) >= Math.abs(d - 1)
                    ? r
                    : d,
              u = Math.max(
                e.minWidth / e.startRect.width,
                e.minHeight / e.startRect.height,
              ),
              h = Math.min(
                Math.min(l / e.startRect.width, l / e.startRect.height),
                Math.max(u, c),
              );
            ((t = Math.min(l, e.startRect.width * h)),
              (n = Math.min(l, e.startRect.height * h)));
          } else
            ((t = Math.max(e.minWidth, o)),
              (n = Math.max(e.minHeight, s)),
              0 !== a && (t = Math.min(l, t)),
              0 !== i && (n = Math.min(l, n)));
          return {
            x:
              e.resizeFromCenter || 0 === a
                ? e.startRect.x + (e.startRect.width - t) / 2
                : a < 0
                  ? e.startRect.x + e.startRect.width - t
                  : e.startRect.x,
            y:
              e.resizeFromCenter || 0 === i
                ? e.startRect.y + (e.startRect.height - n) / 2
                : i < 0
                  ? e.startRect.y + e.startRect.height - n
                  : e.startRect.y,
            width: t,
            height: n,
          };
        })({
          delta: { x: e.deltaX, y: e.deltaY },
          handle: e.handle,
          keepAspectRatio: t,
          minHeight: 80,
          minWidth: 160,
          resizeFromCenter: n,
          startRect: e.startRect,
        });
      }
      function Z(e, t) {
        let n = "left" === t || "right" === t,
          a = "top" === t || "bottom" === t;
        switch (e.key) {
          case "ArrowLeft":
            return a ? null : { x: -8, y: 0 };
          case "ArrowRight":
            return a ? null : { x: 8, y: 0 };
          case "ArrowUp":
            return n ? null : { x: 0, y: -8 };
          case "ArrowDown":
            return n ? null : { x: 0, y: 8 };
          default:
            return null;
        }
      }
      function J(e) {
        return "top" === e || "right" === e || "bottom" === e || "left" === e;
      }
      var ee = n(67860),
        et = n(57489),
        en = n(76609),
        ea = n(48080),
        ei = n(5264),
        er = n(39243);
      let eo = Object.freeze({ status: "unknown" }),
        es = (0, v.Cw)(0),
        el = (0, a.jsx)(d.RiM, { size: 16 }),
        ed = (0, a.jsx)(d.mPE, {
          "aria-hidden": !0,
          className: "motion-safe:animate-spin motion-reduce:animate-none",
          size: 20,
        }),
        ec = { hostBorderWidth: 0, visualFrameOutset: 0 },
        eu = (0, h.memo)(function (e) {
          var t, n, l, d, v, x, y, R, k, A, C, j, N, $, E, L;
          let F,
            z,
            S,
            P,
            H,
            T,
            W,
            _,
            D,
            Y,
            { writeChromeVisible: q } = (0, p.A1)(),
            K = (0, b.CQ)(e.data.renderMode),
            X = q && !0 === e.data.isEditing,
            O = q && !0 === e.data.isResizing,
            U = (0, I.V)(e.id, e.selected, !X),
            G = q && U && !e.dragging,
            Q = U && !O,
            V = (0, f.FY)(),
            Z =
              null == (n = V.featuresApi) || null == (t = n.canvas)
                ? void 0
                : t.textGeneration,
            J =
              ((k = e.id),
              (S = (0, h.useCallback)(
                (e) =>
                  (null == Z ? void 0 : Z.subscribeResourceState(k, e)) ??
                  (() => void 0),
                [Z, k],
              )),
              (P = (0, h.useCallback)(
                () => (null == Z ? void 0 : Z.getResourceSnapshot(k)) ?? eo,
                [Z, k],
              )),
              (0, h.useSyncExternalStore)(S, P, P));
          ((H = (0, er.QQ)()),
            (T =
              "ready" === J.status
                ? null == (A = J.resource)
                  ? void 0
                  : A.resource_id
                : void 0),
            (W =
              "error" === J.status ||
              ("full" === K &&
                "ready" === J.status &&
                (null == (C = J.queue) ? void 0 : C.status) === "error")),
            (0, h.useEffect)(() => {
              W &&
                H({
                  id: "canvas:text-generation:status-unavailable",
                  announcement: "assertive",
                  status: "warning",
                  durationMs: 6e3,
                  title: (0, i._y)(),
                });
            }, [H, W, T]));
          let ee =
              ((j = e.id),
              (_ = null == Z ? void 0 : Z.commands),
              (D = (0, h.useCallback)(
                (e) =>
                  (null == _ ? void 0 : _.subscribe(j, e)) ?? (() => void 0),
                [_, j],
              )),
              (Y = (0, h.useCallback)(
                () => (null == _ ? void 0 : _.getSubmissionError(j)),
                [_, j],
              )),
              (0, h.useSyncExternalStore)(D, Y, Y)),
            et = "ready" === J.status ? J.resource : void 0,
            en = "ready" === J.status && !0 === J.awaitingBody,
            ea = (null == et ? void 0 : et.status) === c.ao.running || en,
            eu = !!(Z && "ready" !== J.status),
            ev =
              "ready" === J.status &&
              (null == et ? void 0 : et.status) === c.ao.failed &&
              !J.failureAcknowledged,
            ex =
              (null == (d = V.featuresApi) || null == (l = d.canvas)
                ? void 0
                : l.textEditing) ?? g.w;
          ((N = {
            active: q && U && !X && !O && !ea && !eu,
            editor: V,
            nodeId: e.id,
            session: ex,
          }),
            (F = (0, h.useMemo)(() => {
              var e;
              let t;
              return (
                (e = {
                  getEditAvailability: () => {
                    var e, t;
                    return (
                      (null == (t = N.editor.featuresApi) ||
                      null == (e = t.canvas)
                        ? void 0
                        : e.getEditAvailability().local) ?? {
                        available: !1,
                        reason: "notEditingReady",
                      }
                    );
                  },
                  nodeId: N.nodeId,
                  open: (e, t) => N.session.open(e, t),
                  subscribe: (e) => {
                    var t, n;
                    return (
                      (null == (n = N.editor.featuresApi) ||
                      null == (t = n.canvas)
                        ? void 0
                        : t.actions.subscribe(e)) ?? (() => void 0)
                    );
                  },
                }),
                {
                  getState: (t = () => {
                    let t = e.getEditAvailability();
                    return t.available
                      ? { available: !0 }
                      : {
                          available: !1,
                          reason:
                            "notEditingReady" === t.reason
                              ? "canvas.notEditingReady"
                              : "canvas.permissionDenied",
                          result: "blocked",
                        };
                  }),
                  async execute() {
                    let n = t();
                    if (!n.available)
                      return { reason: n.reason, status: "blocked" };
                    let a = await e.open(e.nodeId, {
                      presentation: "fullscreen",
                    });
                    return a.ok
                      ? { status: "executed" }
                      : {
                          reason: `canvas.${a.reason}`,
                          status:
                            "notEditingReady" === a.reason
                              ? "blocked"
                              : "failed",
                        };
                  },
                  subscribe: e.subscribe,
                }
              );
            }, [N.editor, N.nodeId, N.session])),
            (0, r.PK)("canvas.fullscreen", N.active ? F : null));
          let eb = !!(q && !X && !O);
          X || O || (z = e.id);
          let ey = {
              aiGeneratedContentLabel: (function (e) {
                if (
                  !(
                    !0 !== e.containsAiGeneratedContent ||
                    "invalid" === e.content.status ||
                    (0, ei.eI)(e.content)
                  )
                )
                  return (0, s.SKe)();
              })(e.data),
              backgroundColor:
                void 0 === ($ = e.data).backgroundColorPreview
                  ? $.backgroundColor
                  : ($.backgroundColorPreview ?? void 0),
              captureBodyWheel: e.selected || !q,
              content: e.data.content,
              description: (0, o.HT)(
                (0, s.rHd)({
                  resourceCount: 0,
                  readyCount: 0,
                  pendingCount: 0,
                  errorCount: 0,
                  selected: e.selected,
                }),
                e.data.tagPresentation,
              ),
              descriptionId: (0, m.k)(e.id),
              scrollbarVisible: !0,
              scrollMemoryWritable: !0,
              selected: e.selected,
            },
            ew = !(0, ei.eI)(ey.content);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              !ea && (ee || ev)
                ? (0, a.jsx)(em, {
                    errorCode:
                      (null == ee ? void 0 : ee.serviceCode) ??
                      (null == et ? void 0 : et.error_code),
                    renderMode: K,
                    onAcknowledge: () => {
                      null == Z || Z.acknowledgeFailure(e.id);
                    },
                  })
                : eu
                  ? (0, a.jsxs)("div", {
                      className: `${w.IM} octo-text-node-surface ${ei.t$} ${(0, ei.yA)(ey.backgroundColor, !0).className} relative flex size-full flex-col overflow-hidden rounded-dreamina-control`,
                      "data-testid": "text-flow-node-restoring",
                      children: [
                        ew
                          ? (0, a.jsx)("div", {
                              className: "relative min-h-canvas-zero flex-1",
                              children: ep({
                                isResizing: !1,
                                modeProps: { ...ey, scrollMemoryWritable: !1 },
                                nodeHeight: e.height,
                                nodeId: e.id,
                                nodeWidth: e.width,
                                renderMode: K,
                                scrollMemory: ex,
                                sizingMode: "manual",
                              }),
                            })
                          : null,
                        "error" !== J.status
                          ? (0, a.jsx)("span", {
                              "aria-busy": "true",
                              "aria-label": (0, i.S_)(),
                              className: ew
                                ? "sr-only"
                                : "pointer-events-none absolute inset-0 flex items-center justify-center text-dreamina-text-placeholder",
                              role: "status",
                              children: ew ? null : ed,
                            })
                          : null,
                      ],
                    })
                  : et && ea
                    ? (0, a.jsx)(
                        eh,
                        {
                          resource: et,
                          awaitingBody: en,
                          queue:
                            "ready" === J.status &&
                            (null == (v = J.queue) ? void 0 : v.status) ===
                              "ready"
                              ? J.queue.value
                              : void 0,
                          queueFailed:
                            "ready" === J.status &&
                            (null == (x = J.queue) ? void 0 : x.status) ===
                              "error",
                          width: e.width ?? u.ZL.text.width,
                          height: e.height ?? u.ZL.text.height,
                          renderMode: K,
                          canCancel: !!(
                            (null == (R = V.featuresApi) ||
                            null == (y = R.canvas)
                              ? void 0
                              : y.getEditAvailability().local.available) &&
                            (null == Z ? void 0 : Z.commands)
                          ),
                          onCancel: async () => {
                            var e, t;
                            (null == (t = V.featuresApi) ||
                            null == (e = t.canvas)
                              ? void 0
                              : e.getEditAvailability().local.available) &&
                              (null == Z ? void 0 : Z.commands) &&
                              (await Z.commands.cancel(et));
                          },
                        },
                        et.resource_id,
                      )
                    : (E = {
                          isEditing: X,
                          isResizing: O,
                          modeProps: ey,
                          nodeHeight: e.height,
                          nodeId: e.id,
                          nodeWidth: e.width,
                          renderMode: K,
                          scrollMemory: ex,
                          sizingMode: e.data.sizingMode,
                        }).isEditing
                      ? (0, a.jsx)(eg, { input: E })
                      : ep(E),
              ((L = e),
              G && "number" == typeof L.width && "number" == typeof L.height
                ? (0, a.jsx)(B, {
                    nodeId: L.id,
                    parentId: L.parentId,
                    rect: {
                      x: L.positionAbsoluteX,
                      y: L.positionAbsoluteY,
                      width: L.width,
                      height: L.height,
                    },
                  })
                : null),
              (function (e) {
                let { dragging: t, editing: n, selected: i } = e;
                return !i || n || t
                  ? null
                  : (0, a.jsx)("div", {
                      "aria-hidden": "true",
                      className:
                        "absolute pointer-events-none rounded-canvas-selection-toolbar text-dreamina-text-tertiary",
                      "data-canvas-flow-node-frame-stroke": "true",
                      "data-testid": "text-node-selection-outline",
                      style: es,
                    });
              })({ dragging: !!e.dragging, editing: X, selected: e.selected }),
              !X || ea || eu
                ? null
                : (0, a.jsx)(ef, { nodeId: e.id, session: ex }),
              (0, a.jsx)(M.BF, {
                connectable: !!(q && e.isConnectable),
                connectionHandleDisabledReason: q
                  ? e.data.connectionHandleDisabledReason
                  : void 0,
                connectionHandles: Z ? "both" : "source",
                dragging: e.dragging,
                editableTitleNodeId: z,
                multiSelectionConnection: q
                  ? e.data.multiSelectionConnection
                  : void 0,
                handlesInteractive: eb,
                handlesVisible: eb,
                titleIcon: el,
                nodeId: e.id,
                selected: e.selected,
                showTitleWhenUnselected: !0,
                tagPresentation:
                  q || void 0 !== e.data.tagPresentation
                    ? e.data.tagPresentation
                    : null,
                title: e.data.title,
                titleEditingActive: Q,
                titleGeometry: Z ? ec : void 0,
                titleRenameActionName: "renameTextNodeTitle",
                titleVariant: "text",
              }),
            ],
          });
        });
      function eh(e) {
        let {
            resource: t,
            awaitingBody: n,
            queue: r,
            queueFailed: o,
            width: d,
            height: u,
            renderMode: m,
            canCancel: v,
            onCancel: f,
          } = e,
          [p, g] = (0, h.useState)(!1),
          [x, b] = (0, h.useState)(!1),
          y =
            t.status === c.ao.running &&
            void 0 !== r &&
            "processing" !== r.stage &&
            !n,
          R = (0, j.b)(r ?? {}, { estimateLabel: s.AcJ, positionLabel: s.j9W }),
          M = (0, l.kX)(y ? "queued" : "running");
        x && (M = (0, l.kX)("canceling"));
        let A =
          v && !n
            ? () => {
                x ||
                  (b(!0),
                  g(!1),
                  f().catch(() => {
                    (b(!1), g(!0));
                  }));
              }
            : void 0;
        if ("full" !== m) {
          let e = o ? (0, i._y)() : M;
          return (0, a.jsx)("div", {
            "aria-label": e,
            className: `${w.IM} octo-text-node-surface ${ei.t$} ${(0, ei.yA)(void 0, !0).className} flex size-full items-center justify-center overflow-hidden rounded-dreamina-control px-canvas-node-generation-status-inline font-dreamina-cn text-dreamina-cn-12 text-dreamina-text-placeholder`,
            "data-testid": "text-flow-node-generating",
            role: o ? "alert" : "status",
            children: (0, a.jsx)("span", {
              className: "truncate",
              children: e,
            }),
          });
        }
        return (0, a.jsxs)("div", {
          "aria-label": M,
          className: `${w.IM} octo-text-node-surface ${ei.t$} ${(0, ei.yA)(void 0, !0).className} relative isolate flex size-full flex-col items-center justify-center gap-canvas-media-node-gap overflow-hidden rounded-dreamina-control px-canvas-text-node-content-inline py-canvas-text-node-content-block font-dreamina-cn text-center`,
          "data-testid": "text-flow-node-generating",
          role: y ? void 0 : "status",
          children: [
            y ? null : (0, a.jsx)(k.W, { logicalWidth: d, logicalHeight: u }),
            y
              ? (0, a.jsx)(N.T, {
                  active: !0,
                  announcement: x ? M : R.message,
                  position: x ? M : R.position,
                  estimate: x ? void 0 : R.estimate,
                  logicalWidth: d,
                  logicalHeight: u,
                  resourceId: t.resource_id,
                  testId: "text-flow-node-queued",
                  surfaceClassName:
                    "absolute inset-0 flex size-full items-center justify-center rounded-dreamina-control",
                  cancelLabel: (0, l.zl)(),
                  cancelDisabled: x,
                  onCancel: A,
                })
              : (0, a.jsx)($, {
                  label: M,
                  cancelLabel: (0, l.zl)(),
                  cancelDisabled: x,
                  onCancel: A,
                }),
            p
              ? (0, a.jsx)("span", {
                  role: "alert",
                  className:
                    "relative z-canvas-media-result-action-chrome mt-canvas-node-generation-badge",
                  children: (0, l.kX)("unavailable"),
                })
              : null,
          ],
        });
      }
      function em(e) {
        let { errorCode: t, renderMode: n, onAcknowledge: i } = e,
          r = (0, A.d)(t),
          o = (0, l.mb)(
            "input_text_copyright" === r
              ? "copyright"
              : "content_safety" === r
                ? "content"
                : "general",
          );
        return (0, a.jsxs)("div", {
          className: `${w.IM} octo-text-node-surface ${ei.t$} ${(0, ei.yA)(void 0, !0).className} relative flex size-full flex-col items-center justify-center gap-canvas-media-node-gap overflow-hidden rounded-dreamina-control px-canvas-text-node-content-inline py-canvas-text-node-content-block font-dreamina-cn text-center`,
          "data-testid": "text-flow-node-generation-error",
          role: "alert",
          children: [
            "full" === n
              ? (0, a.jsx)(d.mo0, {
                  "aria-hidden": !0,
                  className: "shrink-0 text-dreamina-text-placeholder",
                  size: 20,
                })
              : null,
            (0, a.jsx)("span", {
              className: (0, d.cn)(
                "w-full text-dreamina-cn-12 leading-canvas-media-node-message text-dreamina-text-placeholder",
                "full" !== n && "truncate",
              ),
              children: o,
            }),
            "full" === n
              ? (0, a.jsx)(d.$nd, {
                  className: `${C.Nu} text-dreamina-text-secondary hover:text-dreamina-text-primary`,
                  type: "button",
                  variant: "text",
                  onClick: i,
                  children: (0, l.$9)(),
                })
              : null,
          ],
        });
      }
      let ev = "pointer-events-auto absolute cursor-move",
        ef = (0, h.memo)(function (e) {
          let { nodeId: t, session: n } = e,
            i = (0, f.FY)(),
            r = (0, h.useRef)(null);
          (0, h.useLayoutEffect)(
            () => () => {
              var e;
              null == (e = r.current) || e.call(r);
            },
            [],
          );
          let o = (0, h.useCallback)(
            (e) => {
              var a;
              if (0 !== e.button || !1 === e.isPrimary) return;
              null == (a = r.current) || a.call(r);
              let o = e.currentTarget,
                s = () => {
                  (o.hasPointerCapture(e.pointerId) &&
                    o.releasePointerCapture(e.pointerId),
                    o.removeEventListener("pointerup", l),
                    o.removeEventListener("pointercancel", d),
                    o.removeEventListener("lostpointercapture", d),
                    (r.current = null));
                },
                l = (a) => {
                  a.pointerId === e.pointerId &&
                    (s(),
                    n.saveAndClose(),
                    i.selectionActions.selectOnly(t, "user"));
                },
                d = (t) => {
                  t.pointerId === e.pointerId && s();
                };
              (o.setPointerCapture(e.pointerId),
                o.addEventListener("pointerup", l),
                o.addEventListener("pointercancel", d),
                o.addEventListener("lostpointercapture", d),
                (r.current = s));
            },
            [i, t, n],
          );
          return (0, a.jsxs)("div", {
            "aria-hidden": "true",
            className:
              "pointer-events-none absolute -inset-canvas-text-editing-hotspot rounded-canvas-selection-toolbar",
            "data-testid": "text-node-editing-hotspot",
            children: [
              (0, a.jsx)("div", {
                className: `${ev} top-0 right-0 left-0 h-canvas-text-editing-hotspot rounded-t-canvas-selection-toolbar`,
                "data-text-editing-hotspot-edge": "top",
                onPointerDown: o,
              }),
              (0, a.jsx)("div", {
                className: `${ev} right-0 bottom-0 left-0 h-canvas-text-editing-hotspot rounded-b-canvas-selection-toolbar`,
                "data-text-editing-hotspot-edge": "bottom",
                onPointerDown: o,
              }),
              (0, a.jsx)("div", {
                className: `${ev} top-canvas-text-editing-hotspot bottom-canvas-text-editing-hotspot left-0 w-canvas-text-editing-hotspot`,
                "data-text-editing-hotspot-edge": "left",
                onPointerDown: o,
              }),
              (0, a.jsx)("div", {
                className: `${ev} top-canvas-text-editing-hotspot right-0 bottom-canvas-text-editing-hotspot w-canvas-text-editing-hotspot`,
                "data-text-editing-hotspot-edge": "right",
                onPointerDown: o,
              }),
            ],
          });
        });
      function ep(e) {
        return "micro" === e.renderMode
          ? (0, a.jsx)(ex, { ...e.modeProps })
          : "compact" === e.renderMode
            ? (0, a.jsx)(en.Q, { ...e.modeProps })
            : (0, a.jsx)(eb, {
                ...e.modeProps,
                isResizing: e.isResizing,
                nodeHeight: e.nodeHeight,
                nodeId: e.nodeId,
                nodeWidth: e.nodeWidth,
                scrollMemory: e.scrollMemory,
                sizingMode: e.sizingMode,
              });
      }
      let eg = (0, h.memo)(function (e) {
          let { input: t } = e,
            { description: n, descriptionId: i } = t.modeProps,
            r = {
              ...t,
              modeProps: {
                ...t.modeProps,
                captureBodyWheel: !1,
                descriptionId: `${i}-editing-fallback`,
                scrollbarVisible: !1,
                scrollMemoryWritable: !1,
                selected: !1,
              },
              sizingMode: "manual",
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("span", { className: "sr-only", id: i, children: n }),
              (0, a.jsx)("div", {
                "aria-hidden": "true",
                className: "pointer-events-none h-full w-full",
                "data-testid": "text-flow-node-editing-underlay",
                children: ep(r),
              }),
            ],
          });
        }),
        ex = (0, h.memo)(function (e) {
          let {
              aiGeneratedContentLabel: t,
              backgroundColor: n,
              content: i,
              description: r,
              descriptionId: o,
            } = e,
            l = (0, ei.eI)(i),
            c = "invalid" === i.status,
            u = (0, ei.yA)(n, l),
            h =
              "octo-text-node-surface relative h-full w-full rounded-octo-ui-control before:absolute before:left-6 before:top-6 before:h-octo-2 before:w-octo-content-line-long before:rounded before:bg-octo-ui-control-hover before:content-[''] after:absolute after:left-6 after:top-11 after:h-octo-2 after:w-octo-content-line-short after:rounded after:bg-octo-ui-control-hover after:content-['']";
          (c || l) &&
            (h = (0, d.cn)(
              "octo-text-node-surface h-full w-full overflow-hidden rounded-octo-ui-control font-dreamina-cn text-octo-ui-copy",
              c
                ? "px-octo-4 py-octo-3 text-octo-ui-text-tertiary"
                : "px-canvas-text-node-content-inline py-canvas-text-node-content-block text-dreamina-text-tertiary",
            ));
          let m = (0, ei.tg)(r, t);
          return (
            c
              ? (m = `${(0, s.MDM)()}. ${r}`)
              : l && (m = `${(0, s.mi5)()}. ${r}`),
            (0, a.jsx)("div", {
              "aria-label": m,
              className: `${w.IM} ${h} ${u.className} ${ei.t$}`,
              "data-text-background-color": n,
              elementtiming: c || l ? "canvas-initial-content" : void 0,
              "data-canvas-content-evidence":
                c || l ? "element" : "frame_estimate",
              "data-canvas-content-state": l
                ? "empty"
                : c
                  ? "business_error"
                  : "content",
              "data-testid": "text-flow-node-micro",
              id: o,
              role: "group",
              children: c ? (0, ei.Ph)(i) : l ? (0, s.eQw)() : null,
            })
          );
        }),
        eb = (0, h.memo)(function (e) {
          let {
              content: t,
              isResizing: n,
              nodeHeight: i,
              nodeId: r,
              nodeWidth: o,
              sizingMode: s,
            } = e,
            l =
              "ready" === t.status &&
              t.document.content.length >= 24 &&
              "autoHeight" !== s &&
              !!(o && i),
            d = (0, h.useRef)(null),
            c = (0, h.useRef)(null),
            u = (function (e) {
              let {
                  content: t,
                  isResizing: n,
                  nodeHeight: a,
                  nodeId: i,
                  nodeWidth: r,
                  scrollMemory: o,
                  scrollMemoryWritable: s,
                  selected: l,
                  virtualViewRef: d,
                  virtualized: c,
                } = e,
                u = (0, h.useRef)(null),
                m = (0, h.useRef)(null),
                [v, f] = (0, h.useState)(!1),
                p = (0, h.useCallback)(
                  (e) => {
                    let t = u.current;
                    if (
                      (t &&
                        t !== e &&
                        !n &&
                        s &&
                        o.rememberNodeScrollTop(i, t.scrollTop, (0, y.m2)(t)),
                      (u.current = e),
                      e)
                    ) {
                      var a;
                      ((e.scrollTop = m.current ?? o.readNodeScrollTop(i)),
                        null == (a = d.current) || a.refresh());
                    }
                  },
                  [n, i, o, s, d],
                ),
                g = (0, h.useCallback)(
                  (e) => {
                    if (null !== m.current)
                      e.currentTarget.scrollTop = m.current;
                    else if (s) {
                      var t;
                      o.rememberNodeScrollTop(
                        i,
                        e.currentTarget.scrollTop,
                        null == (t = d.current) ? void 0 : t.anchor(),
                      );
                    }
                  },
                  [i, o, s, d],
                );
              (0, h.useLayoutEffect)(() => {
                var e;
                let t = u.current,
                  n =
                    null == (e = o.readNodeScrollAnchor)
                      ? void 0
                      : e.call(o, i);
                d.current && n
                  ? d.current.restore(n)
                  : t && (t.scrollTop = o.readNodeScrollTop(i));
              }, [i, o, l, d]);
              let x = (0, h.useCallback)(() => {
                let e = u.current,
                  t = !!(e && e.scrollHeight > e.clientHeight + 1);
                f((e) => (e === t ? e : t));
              }, []);
              return (
                (0, h.useLayoutEffect)(x, [t, n, a, r, x]),
                (function (e) {
                  let {
                      isResizing: t,
                      nodeHeight: n,
                      nodeId: a,
                      nodeWidth: i,
                      resizingScrollTopRef: r,
                      scrollMemory: o,
                      surfaceRef: s,
                    } = e,
                    l = (0, h.useRef)(null);
                  ((0, h.useLayoutEffect)(() => {
                    let e = s.current;
                    if (t) {
                      (null !== l.current &&
                        (window.cancelAnimationFrame(l.current),
                        (l.current = null)),
                        r.current ??
                          (r.current =
                            (null == e ? void 0 : e.scrollTop) ??
                            o.readNodeScrollTop(a)));
                      return;
                    }
                    let n = r.current;
                    null !== n &&
                      (e && (e.scrollTop = n),
                      o.rememberNodeScrollTop(a, n),
                      null !== l.current &&
                        window.cancelAnimationFrame(l.current),
                      (l.current = window.requestAnimationFrame(() => {
                        l.current = window.requestAnimationFrame(() => {
                          l.current = null;
                          let e = s.current,
                            t = r.current;
                          null !== t &&
                            (e && (e.scrollTop = t),
                            (r.current = null),
                            o.rememberNodeScrollTop(
                              a,
                              (null == e ? void 0 : e.scrollTop) ?? t,
                            ));
                        });
                      })));
                  }, [t, a, r, o, s]),
                    (0, h.useLayoutEffect)(
                      () => () => {
                        null !== l.current &&
                          window.cancelAnimationFrame(l.current);
                      },
                      [],
                    ),
                    (0, h.useLayoutEffect)(() => {
                      if (!t) return;
                      let e = s.current,
                        n = r.current;
                      e && null !== n && (e.scrollTop = n);
                    }, [t, n, i, r, s]));
                })({
                  isResizing: n && !c,
                  nodeHeight: a,
                  nodeId: i,
                  nodeWidth: r,
                  resizingScrollTopRef: m,
                  scrollMemory: o,
                  surfaceRef: u,
                }),
                {
                  overflowing: v,
                  rememberScrollTop: g,
                  setSurfaceRef: p,
                  surfaceRef: u,
                  refreshOverflow: x,
                }
              );
            })({ ...e, virtualViewRef: d, virtualized: l });
          !(function (e) {
            var t, n;
            let {
                content: a,
                currentHeight: i,
                enabled: r,
                nodeId: o,
                nodeWidth: s,
                surfaceRef: l,
              } = e,
              d = (0, f.FY)(),
              c = (function (e) {
                let t = F.get(e);
                if (t) return t;
                let n = new L({
                  fontSet:
                    "u" > typeof document && document.fonts
                      ? {
                          addEventListener: (e, t) =>
                            document.fonts.addEventListener("loadingdone", t),
                          removeEventListener: (e, t) =>
                            document.fonts.removeEventListener(
                              "loadingdone",
                              t,
                            ),
                        }
                      : void 0,
                });
                return (F.set(e, n), n);
              })(d),
              u =
                null == (n = d.featuresApi) || null == (t = n.canvas)
                  ? void 0
                  : t.textNodeAutoHeight,
              m = (0, h.useRef)(null),
              v = (0, h.useRef)(() => void 0);
            ((v.current = (e) => {
              if (!r || void 0 === i || i <= 0) return;
              let t = m.current;
              if (
                !e &&
                (null == t ? void 0 : t.content) === a &&
                t.currentHeight === i &&
                t.nodeWidth === s
              )
                return;
              let n = l.current;
              if (!n) return;
              m.current = { content: a, currentHeight: i, nodeWidth: s };
              let d = (0, x.s)({
                clientHeight: n.clientHeight,
                currentHeight: i,
                scrollHeight: n.scrollHeight,
              });
              null !== d && (null == u || u.apply(o, d));
            }),
              (0, h.useLayoutEffect)(
                () => (
                  r || null == u || u.cancel(o),
                  () => (null == u ? void 0 : u.cancel(o))
                ),
                [r, o, u],
              ),
              (0, h.useLayoutEffect)(() => {
                if (r) return c.register(o, (e) => v.current(e));
              }, [r, o, c]),
              (0, h.useLayoutEffect)(
                () =>
                  !r || void 0 === i || i <= 0
                    ? void c.cancel(o)
                    : (c.schedule(o), () => c.cancel(o)),
                [a, i, r, o, s, c],
              ));
          })({
            content: t,
            currentHeight: i,
            enabled:
              !n &&
              "autoHeight" === s &&
              ("ready" === t.status || "degraded" === t.status),
            nodeId: r,
            nodeWidth: o,
            surfaceRef: u.surfaceRef,
          });
          let { rememberScrollTop: m, refreshOverflow: v } = u,
            p = (0, h.useCallback)(
              (e) => {
                var t, n;
                (null == (t = d.current) || t.refresh(),
                  m(e),
                  null == (n = c.current) || n.refreshLayout());
              },
              [m],
            ),
            g = (0, h.useCallback)(() => {
              var e;
              (v(), null == (e = c.current) || e.refreshLayout());
            }, [v]);
          return (
            (0, h.useLayoutEffect)(g, [t, i, o, g]),
            (function (e, t) {
              var n, i, r, o, s;
              let {
                  aiGeneratedContentLabel: l,
                  backgroundColor: d,
                  captureBodyWheel: c,
                  content: u,
                  description: h,
                  descriptionId: m,
                  nodeHeight: v,
                  nodeId: f,
                  nodeWidth: p,
                  scrollMemory: g,
                  scrollbarVisible: x,
                } = e,
                {
                  overflowing: b,
                  setSurfaceRef: y,
                  surfaceRef: w,
                  virtualViewRef: k,
                  scrollbarRef: M,
                  handleScroll: A,
                  virtualized: C,
                  refreshScrollbar: j,
                } = t;
              return (0, a.jsx)(et.q, {
                content: u,
                backgroundColor: d,
                description: h,
                descriptionId: m,
                aiGeneratedContentLabel: l,
                captureBodyWheel: c,
                contentRef: y,
                onScroll: A,
                onKeyDown: c ? ee.pf : void 0,
                onWheelCapture: c ? ee.ri : void 0,
                tabIndex: c && b ? 0 : void 0,
                controls: x
                  ? ((i = f),
                    (r = b),
                    (o = M),
                    (s = w),
                    r
                      ? (0, a.jsx)(R.Lw, {
                          contentVersion: i,
                          hostRef: s,
                          layoutOwner: "host",
                          overflowing: !0,
                          ref: o,
                          scrollRef: s,
                          variant: "text-node",
                          visibility: "persistent",
                        })
                      : null)
                  : null,
                children: (0, ea.R)(
                  u,
                  (0, ei.eI)(u),
                  C
                    ? {
                        ref: k,
                        hostRef: w,
                        width: (p ?? 240) - 48,
                        viewportHeight: v ?? 240,
                        initialScrollTop: g.readNodeScrollTop(f),
                        initialAnchor:
                          null == (n = g.readNodeScrollAnchor)
                            ? void 0
                            : n.call(g, f),
                        onLayout: j,
                      }
                    : void 0,
                  ey,
                ),
              });
            })(e, {
              ...u,
              virtualViewRef: d,
              scrollbarRef: c,
              handleScroll: p,
              virtualized: l,
              refreshScrollbar: g,
            })
          );
        });
      function ey(e, t) {
        return (0, a.jsx)(E.DM, { nodeId: e }, t);
      }
    },
    76609(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(66876),
        o = n(98341),
        s = n(5264);
      let l = (0, i.memo)(function (e) {
        var t;
        let n,
          {
            aiGeneratedContentLabel: i,
            backgroundColor: l,
            content: d,
            description: c,
            descriptionId: u,
          } = e,
          h = (0, s.eI)(d),
          m = (0, s.yA)(l, h),
          v = "invalid" === d.status;
        n = v
          ? (0, s.Ph)(d)
          : h
            ? (0, r.eQw)()
            : (t = "deferred" === d.status ? d.previewText : d.plainText)
                  .length <= 240
              ? t
              : `${t.slice(0, 239).trimEnd()}\u{2026}`;
        let f = c;
        (v
          ? (f = `${(0, r.MDM)()}. ${c}`)
          : h
            ? (f = `${(0, r.mi5)()}. ${c}`)
            : n && (f = `${n}. ${c}`),
          (f = (0, s.tg)(f, i)));
        let p = s.EJ;
        return (
          v
            ? (p = "text-dreamina-text-tertiary")
            : h && (p = "text-dreamina-text-tertiary"),
          (0, a.jsx)("div", {
            "aria-label": f,
            className: `${o.IM} octo-text-node-surface ${m.className} h-full w-full overflow-hidden rounded-dreamina-control px-canvas-text-node-content-inline py-canvas-text-node-content-block whitespace-pre-wrap font-dreamina-cn text-canvas-text-node-body ${s.t$} ${p}`,
            "data-text-background-color": l,
            elementtiming: "canvas-initial-content",
            "data-canvas-content-evidence": "element",
            "data-canvas-content-state": h
              ? "empty"
              : v
                ? "business_error"
                : "content",
            "data-testid": "text-flow-node-compact",
            id: u,
            role: "group",
            children: n,
          })
        );
      });
      n.d(t, {}, { Q: l });
    },
  },
]);
