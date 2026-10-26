"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [5713],
  {
    54221(e, t, a) {
      var n = a(90561),
        r = a(87429),
        i = a(172),
        s = a(93998);
      let d = (0, r.memo)(function (e) {
        let { fieldSize: t, logicalHeight: a, logicalWidth: r } = e,
          d = (0, s.FY)();
        return (0, n.jsx)(i.bJ1, {
          className:
            "pointer-events-none absolute inset-0 z-canvas-media-generating-star-field size-full text-dreamina-on-media-text-primary opacity-canvas-media-generating-field mix-blend-screen [[data-dreamina-theme=light]_&]:text-dreamina-text-primary [[data-dreamina-theme=light]_&]:mix-blend-normal",
          fieldSize: t,
          logicalHeight: a,
          logicalWidth: r,
          schedulerOwner: d,
          testId: "media-node-generating-canvas",
        });
      });
      a.d(t, {}, { W: d });
    },
    8349(e, t, a) {
      var n = a(90561),
        r = a(87429),
        i = a(172),
        s = a(83399);
      function d(e) {
        var t, a, d, o;
        let l,
          c,
          u = e.durationMs ?? i.djC[e.animationMode ?? "finite"].durationMs,
          h =
            ((t = e.startedAtMs),
            (a = e.animationMode),
            (d = u),
            (l = (0, r.useRef)()),
            void 0 !== t &&
              Number.isFinite(t) &&
              (null == (o = l.current) ? void 0 : o.startedAtMs) !== t &&
              (l.current = { observedAtMs: Date.now(), startedAtMs: t }),
            (c = l.current)
              ? {
                  begin: (function (e, t, a) {
                    if (void 0 === e || !Number.isFinite(e)) return;
                    let n = Math.min(a, Math.max(0, t - e));
                    return 0 === n ? "0s" : `-${n / 1e3}s`;
                  })(c.startedAtMs, c.observedAtMs, d),
                  finished: c.observedAtMs - c.startedAtMs >= d,
                  key: `${a ?? "finite"}:${d}:${c.startedAtMs}`,
                }
              : { key: `${a ?? "finite"}:${d}:pending` }),
          m = e.outset ?? 0,
          p = m > 0 ? (0, s.pK)(e.hostBorderWidth ?? 0) : void 0;
        return (0, n.jsx)(
          i.Vgh,
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
            frameGeometry: p,
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
            })(p),
          },
          h.key,
        );
      }
      a.d(t, { m: () => d });
    },
    64534(e, t, a) {
      var n = a(1774),
        r = a(96103);
      function i(e) {
        return e === r.OH.INPUT_TEXT_COPYRIGHT
          ? "input_text_copyright"
          : "content_safety" === (0, n.HH)(e)
            ? "content_safety"
            : "generation_failed";
      }
      a.d(t, { d: () => i });
    },
    93176(e, t, a) {
      var n = a(90561),
        r = a(87429),
        i = a(172),
        s = a(54221),
        d = a(8349),
        o = a(7379);
      let l = "bg-dreamina-bg-menu",
        c = `absolute bottom-[3.07692px] left-[2.1978px] right-[3.07692px] top-[2.1978px] flex items-center justify-center overflow-hidden rounded-[7.03297px] ${l}`,
        u = o.KR,
        h = (0, r.memo)(function (e) {
          var t, a, r, i, l, h, p;
          let g = e.active
              ? ((l = e.announcement), (h = e.description) ? `${l}. ${h}` : l)
              : e.description,
            v = e.surfaceClassName ?? c,
            x = (0, n.jsx)(d.m, {
              logicalHeight: e.logicalHeight,
              logicalWidth: e.logicalWidth,
              animationMode:
                null == (t = e.processingBorder) ? void 0 : t.animationMode,
              durationMs:
                null == (a = e.processingBorder) ? void 0 : a.durationMs,
              hostBorderWidth:
                null == (r = e.processingBorder) ? void 0 : r.hostBorderWidth,
              outset: 4,
              startedAtMs:
                null == (i = e.processingBorder) ? void 0 : i.startedAtMs,
            });
          if ("skeleton" === e.appearance)
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("div", {
                  "aria-busy": "true",
                  "aria-label": g,
                  className: `${v} ${o.aQ}`,
                  "data-canvas-content-evidence": "pending",
                  "data-canvas-content-state": "unresolved",
                  "data-loading-appearance": "skeleton",
                  "data-testid": e.testId,
                  id: e.descriptionId,
                  role: m(e.active, e.description),
                  children: (0, n.jsx)("span", {
                    "aria-hidden": "true",
                    className: `pointer-events-none absolute inset-0 ${u}`,
                  }),
                }),
                x,
              ],
            });
          let f = null;
          !1 !== e.showMessage &&
            (f = (0, n.jsx)("p", {
              className: `relative z-generation-prompt-placeholder max-w-canvas-media-node-message ${o.ER}`,
              children: e.message,
            }));
          let b = (p = e.progressOverlay)
            ? (0, n.jsx)("div", {
                className: "relative z-generation-prompt-placeholder",
                children: p,
              })
            : null;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                "aria-busy": "true",
                "aria-label": g,
                className: `${v} flex-col gap-canvas-media-node-gap`,
                "data-canvas-content-evidence": "frame_estimate",
                "data-canvas-content-state": "generating",
                "data-loading-appearance": "progress",
                "data-testid": e.testId,
                id: e.descriptionId,
                role: m(e.active, e.description),
                children: [
                  (0, n.jsx)("span", {
                    "aria-hidden": "true",
                    className:
                      "pointer-events-none absolute inset-0 bg-canvas-media-node-generating [[data-dreamina-theme=light]_&]:bg-canvas-media-node-generating-light",
                  }),
                  (0, n.jsx)("span", {
                    "aria-hidden": "true",
                    className:
                      "pointer-events-none absolute inset-[-1px] rounded-canvas-media-node-preview border-dreamina border-dreamina-stroke-secondary",
                  }),
                  (0, n.jsx)(s.W, {
                    fieldSize: e.generatingFieldSize,
                    logicalHeight: e.logicalHeight,
                    logicalWidth: e.logicalWidth,
                  }),
                  b,
                  f,
                ],
              }),
              x,
            ],
          });
        });
      function m(e, t) {
        return e ? "status" : t ? "group" : void 0;
      }
      let p = (0, r.memo)(function (e) {
        let t = e.action,
          a = (0, n.jsx)("span", {
            "aria-hidden": "true",
            className: "flex size-8 items-center justify-center",
            children: e.errorIcon,
          });
        return (
          t &&
            (a = (0, n.jsxs)(i.$nd, {
              "aria-label": t.label,
              className:
                "nodrag size-8 rounded-canvas-media-node-error-action bg-transparent p-0 text-dreamina-text-placeholder shadow-none hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-secondary",
              size: "icon",
              tabIndex: e.active ? void 0 : -1,
              type: "button",
              variant: "text",
              onClick: t.onInvoke,
              children: [
                e.errorIcon,
                t.text
                  ? (0, n.jsx)("span", {
                      className: "sr-only",
                      children: t.text,
                    })
                  : null,
              ],
            })),
          (0, n.jsxs)("div", {
            "aria-label": e.description,
            className: `${o.Pb} flex-col gap-2`,
            "data-testid": e.testId,
            id: e.descriptionId,
            role: e.description ? "group" : void 0,
            children: [
              a,
              (0, n.jsx)("p", {
                elementtiming: "canvas-initial-content",
                "data-canvas-content-evidence": "element",
                "data-canvas-content-state": "business_error",
                className: `max-w-canvas-media-node-message ${o.ER}`,
                children: e.message,
              }),
              (0, n.jsx)("span", {
                "aria-label": e.active ? e.announcement : void 0,
                className: "sr-only",
                role: e.active ? "alert" : void 0,
                children: e.message,
              }),
            ],
          })
        );
      });
      a.d(t, {}, { De: h, fP: c, gX: l, tQ: p, vE: u });
    },
    68130(e, t, a) {
      var n = a(24548);
      function r(e, t) {
        if (t)
          for (let a of e) {
            if (a.status !== n.ao.running) continue;
            let e = t.get(a.resourceId);
            if (e) return { queue: e, resourceId: a.resourceId };
          }
      }
      a.d(t, { j: () => r });
    },
    37350(e, t, a) {
      var n = a(90561),
        r = a(87429);
      let i = Object.freeze({ pending: !1, pendingResourceId: void 0 }),
        s = (0, r.createContext)(i);
      function d(e) {
        let { children: t, state: a } = e;
        return (0, n.jsx)(s.Provider, { value: a, children: t });
      }
      function o() {
        return (0, r.useContext)(s);
      }
      a.d(t, { P: () => o, a: () => d });
    },
    44904(e, t, a) {
      a.d(t, { StackFlowNode: () => y });
      var n = a(90561),
        r = a(87429),
        i = a(172),
        s = a(33222),
        d = a(93998),
        o = a(40627),
        l = a(8141),
        c = a(3264),
        u = a(29590),
        h = a(99585),
        m = a(63191),
        p = a(68830),
        g = a(6733),
        v = a(3507),
        x = a(64246),
        f = a(67857);
      let b = [],
        y = (0, r.memo)(function (e) {
          let t,
            a,
            o,
            m,
            {
              id: p,
              data: g,
              width: v,
              height: y,
              dragging: w,
              selected: j,
            } = e,
            I = (0, d.FY)(),
            M = I.featuresApi,
            N = I.stackPresentation,
            {
              hovered: $,
              draggedNodeId: _,
              inMotion: S,
            } = ((t = (0, r.useCallback)(
              (e) => N.subscribeStackPreview(p, e),
              [p, N],
            )),
            (a = (0, r.useSyncExternalStore)(
              t,
              (0, r.useCallback)(() => N.getToolbarTarget() === p, [p, N]),
              () => !1,
            )),
            (o = (0, r.useSyncExternalStore)(
              t,
              (0, r.useCallback)(() => N.getDraggedNodeId(p), [p, N]),
              () => null,
            )),
            (m = (0, r.useCallback)(() => N.isStackInMotion(p), [p, N])),
            {
              hovered: a,
              draggedNodeId: o,
              inMotion: (0, r.useSyncExternalStore)(t, m, () => !1),
            }),
            A = _ && g.nodeIds.includes(_) ? _ : null,
            F = (0, r.useContext)(u.GV),
            E = (0, h.hr)(),
            P = (0, r.useRef)(null),
            z = (0, r.useRef)(null),
            C = (0, r.useRef)(1),
            H = (0, r.useMemo)(() => {
              let e = g.previews ?? b;
              if (!A) return e;
              let t = [];
              for (let a = g.nodeIds.length - 1; a >= 0 && t.length < 5; a--) {
                let n = g.nodeIds[a];
                if (n === A) continue;
                let r = e.find((e) => e.nodeId === n);
                if (r) t.unshift(r);
                else {
                  let e = null == M ? void 0 : M.canvas.getObjectSnapshot(n);
                  e &&
                    t.unshift({
                      nodeId: n,
                      ...(0, c.OL)({ type: e.type, ...(0, x.Mm)(e) }),
                    });
                }
              }
              return t;
            }, [M, g.nodeIds, g.previews, A]),
            D = S ? 1 : !w && g.stackDropFeedback ? 2.35 : !w && $ ? 2 : 1;
          ((0, r.useLayoutEffect)(
            () => () => {
              (N.clearHoveredStack(p), N.setStackExpansion(p, void 0));
            },
            [p, N],
          ),
            (0, r.useLayoutEffect)(() => {
              w && N.clearHoveredStack(p);
            }, [w, p, N]),
            (0, r.useLayoutEffect)(() => {
              let e = P.current;
              if (!e) return;
              let t = {
                  x: 0,
                  y: 0,
                  width: v ?? Math.max(1, ...H.map((e) => e.width)),
                  height: y ?? Math.max(1, ...H.map((e) => e.height)),
                },
                a = (0, c.K3)(t, H),
                n = [...e.querySelectorAll("[data-stack-preview]")],
                r = [...g.nodeIds].sort(),
                s = (e, i) => {
                  ((C.current = i),
                    N.setStackExpansion(p, i),
                    n.forEach((e, t) => {
                      let a = (0, c.V9)(t, n.length, i);
                      e.style.transform = `translate(${a.x}px, ${a.y}px) rotate(${a.rotation}deg)`;
                    }));
                  let s = (0, c.zm)(t, H, i);
                  z.current &&
                    Object.assign(z.current.style, {
                      left: `${s.bounds.x}px`,
                      top: `${s.bounds.y}px`,
                      width: `${s.bounds.width}px`,
                      height: `${s.bounds.height}px`,
                      clipPath: s.clipPath,
                    });
                  let d = (0, c.K3)(t, H, i);
                  (null == F ||
                    F.setPaintBounds(p, {
                      x: d.x - a.x,
                      y: d.y - a.y,
                      width: d.width,
                      height: d.height,
                    }),
                    E.setStackPreview(
                      p,
                      new Map(
                        r.map((e) => {
                          let t = d.y - a.y + (d.height - a.height) / 2;
                          return [
                            e,
                            {
                              x: 0,
                              y: 0,
                              source: {
                                x: d.x + d.width - a.x - a.width,
                                y: t,
                              },
                              target: { x: d.x - a.x, y: t },
                            },
                          ];
                        }),
                      ),
                    ));
                };
              s(e, S ? 1 : C.current);
              let d = new i.iYX(e, C.current);
              return (
                C.current !== D &&
                  d.moveTo(
                    D,
                    { paint: s, clear: () => void 0 },
                    { duration: 340 },
                  ),
                () => {
                  (d.cancel(),
                    null == F || F.setPaintBounds(p, void 0),
                    E.setStackPreview(p, new Map()));
                }
              );
            }, [g.nodeIds, E, F, y, p, S, N, H, D, v]));
          let W = (0, r.useRef)({ x: 0, y: 0 }),
            B = (0, r.useRef)(!1);
          return (0, n.jsxs)("div", {
            ref: P,
            className: "pointer-events-none relative h-full w-full",
            "data-canvas-selection-preview-owner": "true",
            "data-testid": "stack-flow-node",
            "data-stack-drop": g.stackDropFeedback
              ? g.stackDropFeedback.blocked
                ? "blocked"
                : "accepted"
              : void 0,
            "data-stack-selected": j ? "true" : void 0,
            onPointerEnter: () => {
              w || N.hoverStack(p);
            },
            onPointerLeave: () => {
              N.leaveStack(p);
            },
            onFocusCapture: () => {
              w || B.current || N.hoverStack(p, "nodeFocus");
            },
            onBlurCapture: (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                ((B.current = !1), N.leaveStack(p, "nodeFocus"));
            },
            children: [
              (0, n.jsx)(i.$nd, {
                ref: z,
                variant: "text",
                "aria-label": (0, s.lH)(),
                className:
                  "pointer-events-auto absolute border-0 bg-transparent hover:bg-transparent",
                style: { padding: 0 },
                onPointerDown: (e) => {
                  ((B.current = !0),
                    N.leaveStack(p, "nodeFocus"),
                    (W.current = { x: e.clientX, y: e.clientY }));
                },
                onClick: (e) => {
                  e.shiftKey ||
                    e.metaKey ||
                    e.ctrlKey ||
                    e.altKey ||
                    (e.detail > 0 &&
                      Math.hypot(
                        e.clientX - W.current.x,
                        e.clientY - W.current.y,
                      ) > 3) ||
                    null == M ||
                    M.canvas.actions.openStackGallery.execute(p);
                },
              }),
              H.map((e, t) => {
                var a;
                let r = (0, c.V9)(t, H.length, C.current);
                return (0, n.jsx)(
                  f.a,
                  {
                    "aria-hidden": "true",
                    "data-stack-preview": e.nodeId,
                    className: "absolute",
                    selected: j,
                    receiving: !!g.stackDropFeedback,
                    shade: r.shade,
                    count:
                      t === H.length - 1
                        ? ((null == (a = g.stackDropFeedback)
                            ? void 0
                            : a.count) ?? g.nodeIds.length - !!A)
                        : void 0,
                    style: {
                      left: "50%",
                      top: "50%",
                      width: e.width,
                      height: e.height,
                      marginLeft: -e.width / 2,
                      marginTop: -e.height / 2,
                      visibility: S ? "hidden" : void 0,
                      transform: `translate(${r.x}px, ${r.y}px) rotate(${r.rotation}deg)`,
                    },
                    children: (0, n.jsx)(k, { preview: e }),
                  },
                  e.nodeId,
                );
              }),
              (0, n.jsx)("span", {
                className: "sr-only",
                id: (0, l.k)(p),
                children: (0, s.z8)(g.nodeIds.length),
              }),
            ],
          });
        });
      function k(e) {
        let { preview: t } = e,
          a = (0, d.FY)().featuresApi;
        return a ? (0, n.jsx)(w, { api: a, preview: t }) : null;
      }
      function w(e) {
        let { api: t, preview: a } = e,
          r = t.canvas.getObjectSnapshot(a.nodeId);
        return r ? (0, n.jsx)(j, { api: t, node: r, preview: a }) : null;
      }
      function j(e) {
        let { api: t, node: a, preview: r } = e,
          i = (0, v.d)(t, a),
          s = i.primary ? (0, o.yi)(i.primary) : void 0;
        return (0, n.jsx)(g.N, {
          node: i.node,
          width: r.width,
          height: r.height,
          children: (0, n.jsx)(m.m, {
            state: i,
            scene: "stack",
            image:
              i.primary && s
                ? (0, n.jsx)(p.l, {
                    node: i.node,
                    resourceId: i.primary.resource_id,
                    url: s,
                  })
                : void 0,
          }),
        });
      }
    },
    67857(e, t, a) {
      var n = a(90561);
      function r(e) {
        let {
          shade: t,
          count: a,
          selected: r,
          receiving: i,
          children: s,
          className: d = "",
          ...o
        } = e;
        return (0, n.jsxs)("div", {
          ...o,
          "data-stack-selected": r ? "true" : void 0,
          className: `pointer-events-none overflow-hidden rounded-dreamina-floating-surface border ${i ? "border-dreamina-text-placeholder" : "border-dreamina-stroke-secondary [.is-multi-node-selected_:where(&[data-stack-selected=true])]:border-dreamina-text-placeholder [[data-canvas-selection-preview=true]_&]:border-dreamina-text-placeholder [[data-canvas-selection-preview=false]_&]:border-dreamina-stroke-secondary"} bg-dreamina-bg-surface shadow-dreamina-canvas-float ${d}`,
          children: [
            s,
            (0, n.jsx)("span", {
              "aria-hidden": "true",
              "data-stack-preview-shade": "",
              className: "absolute inset-0 bg-dreamina-canvas-bg",
              style: { opacity: t },
            }),
            void 0 !== a
              ? (0, n.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "absolute bottom-2 right-2 flex size-10 items-center justify-center rounded-dreamina-capsule border border-dreamina-stroke-primary bg-dreamina-bg-float font-dreamina-number text-dreamina-cn-16 font-dreamina-medium text-dreamina-text-primary",
                  children: a,
                })
              : null,
          ],
        });
      }
      a.d(t, { a: () => r });
    },
  },
]);
