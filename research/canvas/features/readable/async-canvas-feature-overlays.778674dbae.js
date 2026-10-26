"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [5752],
  {
    81901(e, t, n) {
      n.d(t, { CanvasFeatureOverlayHost: () => on });
      var a = n(90561),
        i = n(81926),
        r = n(87429),
        o = n(60794);
      let s = (0, r.lazy)(() =>
          Promise.all([n.e(999), n.e(3934), n.e(2851)])
            .then(n.bind(n, 54766))
            .then((e) => ({ default: e.PanoramaPreviewView })),
        ),
        l = { status: "inactive" },
        d = () => l,
        c = () => () => void 0;
      function u(e) {
        let { canvas: t, viewportPresentation: n, onSourceActivate: i } = e,
          l = null == t ? void 0 : t.panoramaPreview,
          u = (0, r.useSyncExternalStore)(
            (null == l ? void 0 : l.subscribe) ?? c,
            (null == l ? void 0 : l.getSnapshot) ?? d,
          ),
          m = "active" === u.status ? u.presentation.nodeId : void 0,
          v = (0, r.useSyncExternalStore)(
            m ? ((null == t ? void 0 : t.subscribeSelection) ?? c) : c,
            () =>
              void 0 !== m &&
              (null == t ? void 0 : t.getSelection().nodeIds.includes(m)) ===
                !0,
          ),
          p = (0, r.useSyncExternalStore)(
            "active" === u.status
              ? ((null == t ? void 0 : t.subscribeEditAvailability) ?? c)
              : c,
            () =>
              (null == t ? void 0 : t.getEditAvailability().local.available) ??
              !1,
          ),
          { writeChromeVisible: f } = (0, o.A1)();
        return l && "active" === u.status
          ? (0, a.jsx)(r.Suspense, {
              fallback: null,
              children: (0, a.jsx)(
                s,
                {
                  session: l,
                  presentation: u.presentation,
                  captureAvailable: p,
                  sourceSelected: v,
                  writeChromeVisible: f,
                  viewportPresentation: n,
                  onSourceActivate: () =>
                    null == i ? void 0 : i(u.presentation.nodeId),
                },
                `${u.presentation.nodeId}:${u.presentation.resourceId}`,
              ),
            })
          : null;
      }
      var m = n(66876),
        v = n(39243),
        p = n(15817),
        f = n(31327),
        h = n(93998),
        g = n(63074),
        b = n(76813),
        x = n(46505);
      let y = (0, r.memo)(function (e) {
        let { nodeId: t } = e,
          n = (0, h.FY)(),
          i = (0, r.useCallback)(
            (e) => n.subscribePresenceSurfaceEnabled(e),
            [n],
          ),
          o = (0, r.useCallback)(() => n.isPresenceEnabled(), [n]);
        return (0, r.useSyncExternalStore)(i, o, o)
          ? (0, a.jsx)(b.a, {
              surface: "fullscreen_overlay",
              children: (0, a.jsx)(w, { nodeId: t }),
            })
          : null;
      });
      function w(e) {
        let { nodeId: t } = e,
          n = (0, h.FY)(),
          i = (0, r.useCallback)(
            (e) => n.subscribePresenceSelectionStates(e),
            [n],
          ),
          o = (0, r.useCallback)(() => n.getPresenceSelectionSnapshot(), [n]),
          s = (0, r.useSyncExternalStore)(i, o, o),
          l = (0, r.useCallback)(
            (e) => n.subscribeCollaboratorDirectory(e),
            [n],
          ),
          d = (0, r.useCallback)(
            () => n.getCollaboratorDirectorySnapshot(),
            [n],
          ),
          c = (0, r.useSyncExternalStore)(l, d, d),
          u = (0, r.useMemo)(
            () => (0, x.pA)(s.peers, c, s.localSelection).get(t),
            [s, c, t],
          );
        return u
          ? (0, a.jsxs)("span", {
              className: "pointer-events-none min-w-canvas-presence-zero",
              "data-presence-fullscreen-node-id": t,
              style: { color: u.color },
              children: [
                (0, a.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "fixed inset-0 border-canvas-presence-fullscreen-frame border-current rounded-canvas-presence-fullscreen-frame shadow-canvas-presence-fullscreen-frame",
                }),
                (0, a.jsx)(x.vK, {
                  fullscreen: !0,
                  color: u.color,
                  nodeId: t,
                  text: u.text,
                }),
              ],
            })
          : null;
      }
      var k = n(21498),
        S = n(25592),
        j = n(51371),
        C = n(172),
        M = n(3366),
        R = n(23429);
      let I =
          "inline-flex w-canvas-media-trim-clock-separator shrink-0 justify-center",
        E = (0, r.memo)(function (e) {
          var t;
          let n,
            i,
            {
              appearance: r = "on-media",
              currentTime: o,
              disabled: s = !1,
              duration: l,
              testId: d,
            } = e,
            c =
              ((t = o),
              (n = l.split(":")),
              (i = t.split(":")),
              [...Array(Math.max(0, n.length - i.length)).fill("00"), ...i]
                .map((e, t) => {
                  var a;
                  return e.padStart(
                    (null == (a = n[t]) ? void 0 : a.length) ?? e.length,
                    "0",
                  );
                })
                .join(":"));
          return (0, a.jsxs)("output", {
            "aria-label": `${c} / ${l}`,
            "aria-live": "off",
            className: (0, C.cn)(
              "inline-flex h-canvas-media-trim-clock shrink-0 items-center gap-canvas-media-trim-clock-gap whitespace-nowrap font-dreamina-number text-dreamina-number-12 font-dreamina-medium tabular-nums [font-feature-settings:'tnum'_1]",
              "on-media" === r && "drop-shadow-dreamina-icon-text",
              "surface" === r
                ? s
                  ? "text-dreamina-text-disabled"
                  : "text-dreamina-text-secondary"
                : s
                  ? "text-dreamina-on-media-text-disabled"
                  : "text-dreamina-on-media-text-secondary",
            ),
            "data-testid": d,
            children: [
              (0, a.jsx)(P, { value: c }),
              (0, a.jsx)("span", {
                "aria-hidden": "true",
                className: I,
                "data-slot": "media-trim-clock-divider",
                children: " / ",
              }),
              (0, a.jsx)(P, { value: l }),
            ],
          });
        });
      function P(e) {
        let { value: t } = e;
        return (0, a.jsx)("span", {
          "aria-hidden": "true",
          className: "inline-flex shrink-0",
          "data-slot": "media-trim-clock-value",
          children: Array.from(t, (e, t) =>
            (0, a.jsx)(
              "span",
              {
                className:
                  ":" === e
                    ? I
                    : "inline-flex w-canvas-media-trim-clock-digit shrink-0 justify-center",
                "data-slot":
                  ":" === e
                    ? "media-trim-clock-separator"
                    : "media-trim-clock-digit",
                children: e,
              },
              `${t}-${e}`,
            ),
          ),
        });
      }
      var A = n(56839),
        T = n(46411),
        N = n(48214),
        D = n(86995),
        L = n(25063),
        F = n(34963),
        _ = n(11521);
      let z = { base: 0.2, selected: 0.5 },
        H = (0, r.memo)(function (e) {
          var t;
          let n,
            i,
            o,
            {
              durationMs: s,
              endMs: l,
              magnitudes: d,
              startMs: c,
              trackWidth: u,
            } = e,
            m = (0, C.DFZ)(),
            v = (0, r.useRef)(null),
            p = (0, r.useRef)(null),
            f = (0, r.useMemo)(
              () =>
                (function (e, t) {
                  var n;
                  if (!e || 0 === e.length) return [];
                  return Array.from(
                    { length: (n = Math.max(1, Math.floor($(t) / 2))) },
                    (t, a) => {
                      let i = Math.floor((a * e.length) / n),
                        r = Math.max(
                          i + 1,
                          Math.floor(((a + 1) * e.length) / n),
                        ),
                        o = 0;
                      for (let t = i; t < r && t < e.length; t += 1)
                        o = Math.max(o, e[t] ?? 0);
                      return Math.round(38 * Math.min(1, Math.max(0, o)));
                    },
                  );
                })(d, u),
              [d, u],
            );
          (0, r.useLayoutEffect)(() => {
            (O(v.current, f, "base", u), O(p.current, f, "selected", u));
          }, [f, m, u]);
          let h = (0, r.useMemo)(() => ({ height: 38, width: $(u) }), [u]);
          return (0, a.jsxs)("div", {
            "aria-hidden": "true",
            className: "absolute inset-0 overflow-hidden",
            "data-testid": "audio-trim-waveform",
            children: [
              (0, a.jsx)("canvas", {
                ref: v,
                className: "absolute bottom-0 left-0",
                "data-testid": "audio-trim-waveform-base",
                style: h,
              }),
              (0, a.jsx)("span", {
                className:
                  "absolute inset-0 overflow-hidden bg-dreamina-text-disabled",
                "data-testid": "audio-trim-waveform-selected",
                style: {
                  clipPath:
                    ((n =
                      (t = { durationMs: s, endMs: l, startMs: c }).durationMs >
                      0
                        ? t.durationMs
                        : 1),
                    (i = B((t.startMs / n) * 100)),
                    (o = B(100 - (t.endMs / n) * 100)),
                    `inset(0 ${o}% 0 ${i}%)`),
                },
                children: (0, a.jsx)("canvas", {
                  ref: p,
                  className: "absolute bottom-0 left-0",
                  "data-testid": "audio-trim-waveform-selected-canvas",
                  style: h,
                }),
              }),
            ],
          });
        });
      function O(e, t, n, a) {
        var i, r;
        let o;
        if (!e) return;
        let s = $(a),
          l = Math.max(1, globalThis.devicePixelRatio || 1);
        ((e.width = Math.round(s * l)), (e.height = Math.round(38 * l)));
        let d = e.getContext("2d");
        if (!d) return;
        (d.setTransform(l, 0, 0, l, 0, 0),
          d.clearRect(0, 0, s, 38),
          (d.globalAlpha = z[n]));
        let c = {
          end:
            (null ==
            (o =
              null == (r = (i = e).ownerDocument.defaultView)
                ? void 0
                : r.getComputedStyle(i))
              ? void 0
              : o.getPropertyValue("--dreamina-color-text-primary").trim()) ||
            "currentColor",
          start:
            (null == o
              ? void 0
              : o
                  .getPropertyValue("--dreamina-color-stroke-secondary")
                  .trim()) || "currentColor",
        };
        t.forEach((e, t) => {
          if (e <= 0) return;
          let n = 38 - e,
            a = d.createLinearGradient(0, n, 0, 38);
          (a.addColorStop(0, c.start),
            a.addColorStop(1, c.end),
            (d.fillStyle = a),
            d.fillRect(2 * t, n, 1, e));
        });
      }
      function $(e) {
        return Number.isFinite(e) && e > 0 ? e : 1;
      }
      function B(e) {
        return Number.isFinite(e) ? Math.min(100, Math.max(0, e)) : 0;
      }
      function V(e) {
        let t = (0, r.useRef)(null),
          n = (function (e, t) {
            let { durationTooltipOpen: n, setDurationTooltipHovered: a } =
                (function () {
                  let [e, t] = (0, r.useState)(!1),
                    n = (0, r.useRef)(new Set());
                  return {
                    durationTooltipOpen: e,
                    setDurationTooltipHovered: (e, a) => {
                      (a ? n.current.add(e) : n.current.delete(e),
                        t(n.current.size > 0));
                    },
                  };
                })(),
              [i, o] = (0, r.useState)(null),
              s = { end: (0, r.useRef)(null), start: (0, r.useRef)(null) },
              l = (function (e, t) {
                let n = (0, r.useRef)(null),
                  [a, i] = (0, r.useState)(null),
                  o = (0, R.K_)(e.onRangeChange, et),
                  s = (t, n) => {
                    let a = en(
                      t.clientX - n.grabOffsetPx,
                      n.trackRect,
                      e.durationMs,
                    );
                    return (0, D.qb)([a], n.initialRange, n.kind, e.durationMs);
                  },
                  l = (t, a) => {
                    var r;
                    let l = n.current;
                    if (!l || l.pointerId !== t.pointerId) return;
                    (t.preventDefault(), t.stopPropagation());
                    let d = a ? s(t, l) : l.lastRange;
                    (o.commit(d, l.kind),
                      l.captureTarget.hasPointerCapture(t.pointerId) &&
                        l.captureTarget.releasePointerCapture(t.pointerId),
                      (n.current = null),
                      i(null),
                      null == (r = e.onHandleDragEnd) || r.call(e, d, l.kind));
                  };
                return {
                  handleHandleDragCancel: (e) => l(e, !1),
                  handleHandleDragEnd: (e) => l(e, !0),
                  handleHandleDragLostCapture: (t) => {
                    var a;
                    let r = n.current;
                    (null == r ? void 0 : r.pointerId) === t.pointerId &&
                      ((n.current = null),
                      o.commit(r.lastRange, r.kind),
                      i(null),
                      null == (a = e.onHandleDragEnd) ||
                        a.call(e, r.lastRange, r.kind));
                  },
                  handleHandleDragMove: (e) => {
                    let t = n.current;
                    if (
                      !t ||
                      t.pointerId !== e.pointerId ||
                      !t.captureTarget.hasPointerCapture(e.pointerId)
                    )
                      return;
                    (e.preventDefault(), e.stopPropagation());
                    let a = s(e, t);
                    ((n.current = { ...t, lastRange: a }),
                      o.schedule(a, t.kind));
                  },
                  handleHandleDragStart: (a) => {
                    var r, s, l, d, c, u, m;
                    let v;
                    if (
                      e.disabled ||
                      0 !== a.button ||
                      !1 === a.isPrimary ||
                      null !== n.current
                    )
                      return;
                    let p =
                        "start" === a.currentTarget.dataset.handleKind
                          ? "start"
                          : "end",
                      f =
                        null == (r = a.currentTarget.parentElement)
                          ? void 0
                          : r.getBoundingClientRect(),
                      h = t[p].current;
                    f &&
                      !(f.width <= 0) &&
                      h &&
                      (a.preventDefault(),
                      a.stopPropagation(),
                      h.focus({ preventScroll: !0 }),
                      a.currentTarget.setPointerCapture(a.pointerId),
                      o.begin(),
                      (l = a),
                      (d = p),
                      (c = f),
                      (u = e.range),
                      (m = e.durationMs),
                      (v = "start" === d ? u.startMs : u.endMs),
                      (n.current = {
                        captureTarget: l.currentTarget,
                        grabOffsetPx: l.clientX - (c.left + (v / m) * c.width),
                        initialRange: u,
                        kind: d,
                        lastRange: u,
                        pointerId: l.pointerId,
                        trackRect: c,
                      }),
                      i(p),
                      null == (s = e.onHandleDragStart) || s.call(e, p));
                  },
                  draggingHandle: a,
                };
              })(e, s),
              d = (0, _.q)({
                disabled: e.disabled,
                durationMs: e.durationMs,
                getCurrentTimeMs: () => e.currentTimeMs,
                onSeek: e.onSeek,
                stepMs: 10,
              }),
              c = (function (e, t) {
                let n = (0, r.useRef)(null),
                  [a, i] = (0, r.useState)(!1),
                  o = (0, R.K_)(e.onRangeChange, et),
                  s = (t, a) => {
                    var r, s;
                    let l = n.current;
                    if (l && l.pointerId === t.pointerId) {
                      if (a && !l.moved) {
                        o.cancel();
                        let n =
                          null == (r = t.currentTarget.parentElement)
                            ? void 0
                            : r.getBoundingClientRect();
                        n &&
                          n.width > 0 &&
                          e.onSeek(en(t.clientX, n, e.durationMs));
                      }
                      if (
                        ((n.current = null),
                        l.captureTarget.hasPointerCapture(t.pointerId) &&
                          l.captureTarget.releasePointerCapture(t.pointerId),
                        l.moved)
                      ) {
                        let n = (function (e, t, n, a) {
                          if (!a) return e.lastRange;
                          let i = ((t - e.startClientX) / e.trackWidth) * n;
                          return (0, D.Z1)(e.initialRange, i, n);
                        })(l, t.clientX, e.durationMs, a);
                        (o.commit(n, "move"),
                          i(!1),
                          null == (s = e.onHandleDragEnd) ||
                            s.call(e, n, "move"));
                      }
                    }
                  };
                return {
                  handleRangeDragCancel: (e) => s(e, !1),
                  handleRangeDragEnd: (e) => s(e, !0),
                  handleRangeDragLostCapture: (t) => {
                    let a = n.current;
                    if (
                      (null == a ? void 0 : a.pointerId) === t.pointerId &&
                      ((n.current = null), a.moved)
                    ) {
                      var r;
                      (o.commit(a.lastRange, "move"),
                        i(!1),
                        null == (r = e.onHandleDragEnd) ||
                          r.call(e, a.lastRange, "move"));
                    }
                  },
                  handleRangeDragMove: (a) => {
                    let r = n.current;
                    if (
                      !r ||
                      r.pointerId !== a.pointerId ||
                      !r.captureTarget.hasPointerCapture(a.pointerId)
                    )
                      return;
                    let s =
                      ((a.clientX - r.startClientX) / r.trackWidth) *
                      e.durationMs;
                    if (!r.moved && Math.abs(a.clientX - r.startClientX) < ea)
                      return;
                    let l = (0, D.Z1)(r.initialRange, s, e.durationMs);
                    if (!r.moved) {
                      var d, c;
                      (null == (d = t.start.current) ||
                        d.focus({ preventScroll: !0 }),
                        null == (c = e.onHandleDragStart) || c.call(e, "move"),
                        i(!0));
                    }
                    ((n.current = { ...r, lastRange: l, moved: !0 }),
                      o.schedule(l, "move"));
                  },
                  handleRangeDragStart: (t) => {
                    var a;
                    if (
                      e.disabled ||
                      0 !== t.button ||
                      !1 === t.isPrimary ||
                      null !== n.current
                    )
                      return;
                    let i =
                      (null == (a = t.currentTarget.parentElement)
                        ? void 0
                        : a.getBoundingClientRect().width) ?? 0;
                    i <= 0 ||
                      (t.preventDefault(),
                      t.currentTarget.setPointerCapture(t.pointerId),
                      o.begin(),
                      (n.current = {
                        captureTarget: t.currentTarget,
                        initialRange: e.range,
                        lastRange: e.range,
                        moved: !1,
                        pointerId: t.pointerId,
                        startClientX: t.clientX,
                        trackWidth: i,
                      }));
                  },
                  rangeDragging: a,
                };
              })(e, s);
            return {
              endPercent: ee(e.range.endMs, e.durationMs),
              ...l,
              ...c,
              draggingKind:
                l.draggingHandle ?? (c.rangeDragging ? "move" : null),
              durationTooltipOpen: n,
              handlePlayheadDragCancel: d.onPointerCancel,
              handlePlayheadDragEnd: d.onPointerUp,
              handlePlayheadDragLostCapture: d.onLostPointerCapture,
              handlePlayheadDragMove: d.onPointerMove,
              handlePlayheadDragStart: d.onPointerDown,
              handlePlayheadKeyDown: d.onKeyDown,
              handleRangeKeyDown: (t) => {
                if (e.disabled || ("Home" !== t.key && "End" !== t.key)) return;
                let n =
                    t.target instanceof Element
                      ? t.target.closest('[role="slider"]')
                      : null,
                  a =
                    (null == n ? void 0 : n.dataset.testid) ===
                    "audio-trim-start-handle"
                      ? "start"
                      : (null == n ? void 0 : n.dataset.testid) ===
                          "audio-trim-end-handle"
                        ? "end"
                        : null;
                if (!a) return;
                (t.preventDefault(), t.stopPropagation());
                let i =
                  "start" === a
                    ? {
                        endMs: e.range.endMs,
                        startMs: "Home" === t.key ? 0 : e.range.endMs - 1e3,
                      }
                    : {
                        endMs:
                          "Home" === t.key
                            ? e.range.startMs + 1e3
                            : e.durationMs,
                        startMs: e.range.startMs,
                      };
                e.onRangeChange((0, D.tz)(i, e.durationMs), a);
              },
              handleSeek: (t) => {
                if (e.disabled) return;
                let n = t.currentTarget.getBoundingClientRect();
                if (n.width <= 0) return;
                let a = Math.min(
                  1,
                  Math.max(0, (t.clientX - n.left) / n.width),
                );
                e.onSeek(Math.round(a * e.durationMs));
              },
              handleValuesChange: (t) => {
                var n, a;
                let i,
                  r,
                  o =
                    ((n = t),
                    (a = e.range),
                    (i = n[0] ?? a.startMs),
                    (r = n[1] ?? a.endMs),
                    Math.abs(i - a.startMs) >= Math.abs(r - a.endMs)
                      ? "start"
                      : "end"),
                  s = (0, D.qb)(t, e.range, o, e.durationMs);
                e.onRangeChange(s, o);
              },
              hoveredHandle: i,
              playheadPercent: ee(e.currentTimeMs, e.durationMs),
              semanticHandleRefs: s,
              setDurationTooltipHovered: a,
              setHoveredHandle: o,
              startPercent: ee(e.range.startMs, e.durationMs),
              trackWidth: t,
            };
          })(
            e,
            (function (e) {
              let [t, n] = (0, r.useState)(ed);
              return (
                (0, r.useLayoutEffect)(() => {
                  let t = e.current;
                  if (!t) return;
                  let a = () => {
                    let e = t.getBoundingClientRect().width;
                    Number.isFinite(e) &&
                      !(e <= 0) &&
                      n((t) => (t === e ? t : e));
                  };
                  a();
                  let i =
                    "u" < typeof ResizeObserver ? null : new ResizeObserver(a);
                  return (
                    null == i || i.observe(t),
                    () => (null == i ? void 0 : i.disconnect())
                  );
                }, [e]),
                t
              );
            })(t),
          );
        return (0, a.jsxs)("fieldset", {
          ref: t,
          "aria-label": (0, j.Qr)(),
          className:
            "w-full h-[40px] relative min-w-0 p-0 m-0 select-none [border:0]",
          "data-testid": "audio-trim-range-track",
          children: [
            (0, a.jsx)("div", {
              className:
                "w-full h-[40px] absolute inset-0 flex overflow-hidden [cursor:crosshair] bg-dreamina-block-primary-default rounded-[8px]",
              "data-testid": "audio-trim-waveform-strip",
              onPointerDown: n.handleSeek,
              children: (0, a.jsx)(H, {
                durationMs: e.durationMs,
                endMs: e.range.endMs,
                magnitudes: e.magnitudes,
                startMs: e.range.startMs,
                trackWidth: n.trackWidth,
              }),
            }),
            (0, a.jsx)(W, { controller: n, props: e }),
          ],
        });
      }
      function W(e) {
        var t, n, i;
        let { controller: r, props: o } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(F.F1, {
              className:
                "pointer-events-none absolute inset-0 flex h-full touch-none items-center",
              disabled: o.disabled,
              max: o.durationMs,
              min: 0,
              minStepsBetweenThumbs: 100,
              step: 10,
              rangeClassName: "pointer-events-none absolute top-0 h-full",
              thumbClassName:
                "pointer-events-none relative z-canvas-video-trim-handle block h-canvas-video-trim-handle-track w-canvas-video-trim-handle-anchor outline-none before:absolute before:inset-y-0 before:w-canvas-video-trim-handle after:absolute after:top-1/2 after:h-canvas-video-trim-handle-grip-block after:w-canvas-video-trim-handle-grip-inline after:-translate-y-1/2 after:rounded-canvas-video-trim-handle-grip after:border after:border-dreamina-text-primary after:bg-dreamina-on-media-text-primary motion-safe:after:transition-[width,height] motion-safe:after:duration-canvas-video-trim-handle-hover motion-safe:after:ease-canvas-video-trim-handle-hover motion-reduce:after:transition-none",
              thumbs:
                ((t = o.range),
                (n = r.hoveredHandle),
                (i = r.semanticHandleRefs),
                [
                  {
                    ariaLabel: (0, j.le)(),
                    ariaValueText: (0, D.Lu)(t.startMs),
                    className: `before:right-0 before:rounded-l-canvas-video-trim-handle after:right-canvas-video-trim-handle-grip-inset ${"start" === n ? "after:h-canvas-video-trim-handle-grip-hover-block after:w-canvas-video-trim-handle-grip-hover-inline" : ""}`,
                    content: J("start", "start" === n),
                    testId: "audio-trim-start-handle",
                    thumbRef: i.start,
                  },
                  {
                    ariaLabel: (0, j.mZ)(),
                    ariaValueText: (0, D.Lu)(t.endMs),
                    className: `before:left-0 before:rounded-r-canvas-video-trim-handle after:left-canvas-video-trim-handle-grip-inset ${"end" === n ? "after:h-canvas-video-trim-handle-grip-hover-block after:w-canvas-video-trim-handle-grip-hover-inline" : ""}`,
                    content: J("end", "end" === n),
                    testId: "audio-trim-end-handle",
                    thumbRef: i.end,
                  },
                ]),
              trackClassName:
                "relative w-full h-full overflow-visible pointer-events-none rounded-[8px]",
              value: [o.range.startMs, o.range.endMs],
              onKeyDownCapture: r.handleRangeKeyDown,
              onValueChange: r.handleValuesChange,
            }),
            (0, a.jsx)(U, { controller: r, props: o }),
          ],
        });
      }
      function U(e) {
        let { controller: t, props: n } = e,
          i = ((t.endPercent - t.startPercent) / 100) * t.trackWidth,
          r = (0, j.YE)(n.range.endMs - n.range.startMs),
          o = (function (e, t) {
            if (t >= Array.from(e).reduce((e, t) => e + Y(t), 0) + 2 * ei)
              return { insetPx: ei, prefix: e, truncated: !1 };
            let n = Math.min(ei, Math.max(0, (t - es - Y(e[0] ?? "")) / 2)),
              a = t - 2 * n - es,
              i = "";
            for (let t of e) {
              let e = Y(t);
              if (a < e) break;
              ((i += t), (a -= e));
            }
            return {
              insetPx: n,
              prefix: i.endsWith(".") ? i.slice(0, -1) : i,
              truncated: !0,
            };
          })(r, i),
          s = o.truncated;
        return (0, a.jsxs)("div", {
          className: "absolute inset-0 h-[40px] pointer-events-none",
          children: [
            (0, a.jsx)(Q, {
              compactDuration: s,
              controller: t,
              currentTimeMs: n.currentTimeMs,
              disabled: n.disabled,
              durationMs: n.durationMs,
            }),
            (0, a.jsx)(q, {
              controller: t,
              durationPresentation: o,
              selectedDurationLabel: r,
            }),
            (0, a.jsx)(X, {
              compactDuration: s,
              controller: t,
              disabled: n.disabled,
              selectedDurationLabel: r,
            }),
            (0, a.jsx)(Z, {
              compactDuration: s,
              controller: t,
              disabled: n.disabled,
            }),
          ],
        });
      }
      function q(e) {
        var t;
        let n,
          {
            controller: i,
            durationPresentation: r,
            selectedDurationLabel: o,
          } = e;
        return (0, a.jsxs)("div", {
          "aria-hidden": "true",
          className:
            "pointer-events-none absolute inset-y-0 z-canvas-video-trim-selection overflow-visible rounded-canvas-video-trim-selection",
          "data-testid": "audio-trim-selection-presentation",
          style: {
            left: `${i.startPercent}%`,
            width: `${Math.max(0, i.endPercent - i.startPercent)}%`,
          },
          children: [
            (0, a.jsx)("span", {
              className:
                ((t = r.truncated),
                (n =
                  "absolute inset-0 flex min-w-canvas-zero items-center justify-end"),
                t ? n : `${n} px-canvas-video-trim-duration-inset`),
              style: (function (e) {
                if (e.truncated)
                  return { paddingLeft: e.insetPx, paddingRight: e.insetPx };
              })(r),
              children: (0, a.jsx)(K, { label: o, presentation: r }),
            }),
            (0, a.jsx)("span", {
              className:
                "absolute inset-0 rounded-canvas-video-trim-selection border border-dreamina-on-media-text-primary ring-1 ring-dreamina-text-primary",
              "data-testid": "audio-trim-selection-border",
            }),
          ],
        });
      }
      function K(e) {
        let { label: t, presentation: n } = e;
        return n.truncated
          ? (0, a.jsx)("span", {
              className:
                "pointer-events-none inline-flex w-full min-w-canvas-zero items-center justify-center overflow-hidden whitespace-nowrap font-dreamina-number text-dreamina-number-12 font-dreamina-medium tabular-nums text-dreamina-on-media-text-primary [font-feature-settings:'tnum'_1] drop-shadow-dreamina-icon-text",
              "data-testid": "audio-trim-selected-duration",
              children: (0, a.jsxs)("span", {
                className: "inline-flex shrink-0",
                "data-slot": "audio-trim-selected-duration-truncated-value",
                children: [
                  (0, a.jsx)("span", {
                    className: "contents",
                    "data-slot": "audio-trim-selected-duration-prefix",
                    children: G(n.prefix),
                  }),
                  (0, a.jsx)("span", {
                    className: "inline-flex shrink-0",
                    "data-slot": "audio-trim-selected-duration-ellipsis",
                    children: Array.from("...", (e, t) =>
                      (0, a.jsx)(
                        "span",
                        {
                          className:
                            "inline-flex w-canvas-media-trim-clock-separator shrink-0 justify-center",
                          "data-slot": "audio-trim-duration-ellipsis-dot",
                          children: e,
                        },
                        `${t}-${e}`,
                      ),
                    ),
                  }),
                ],
              }),
            })
          : (0, a.jsx)("span", {
              className:
                "pointer-events-none block min-w-canvas-zero overflow-hidden whitespace-nowrap font-dreamina-number text-dreamina-number-12 font-dreamina-medium tabular-nums text-dreamina-on-media-text-primary [font-feature-settings:'tnum'_1] drop-shadow-dreamina-icon-text",
              "data-testid": "audio-trim-selected-duration",
              children: (0, a.jsx)("span", {
                className: "contents",
                "data-slot": "audio-trim-selected-duration-value",
                children: G(t),
              }),
            });
      }
      function G(e) {
        return Array.from(e, (e, t) =>
          (0, a.jsx)(
            "span",
            {
              className:
                "." === e
                  ? "inline-flex w-canvas-media-trim-clock-separator shrink-0 justify-center"
                  : "inline-flex w-canvas-media-trim-clock-digit shrink-0 justify-center",
              "data-slot":
                "." === e
                  ? "audio-trim-duration-separator"
                  : "audio-trim-duration-character",
              children: e,
            },
            `${t}-${e}`,
          ),
        );
      }
      function Y(e) {
        return "." === e ? eo : er;
      }
      function X(e) {
        let {
            compactDuration: t,
            controller: n,
            disabled: i,
            selectedDurationLabel: r,
          } = e,
          o = (0, a.jsx)("div", {
            "aria-hidden": "true",
            className:
              "[&[data-disabled=true]]:pointer-events-none [&:active]:[cursor:grabbing] absolute [inset-block:0] z-canvas-video-trim-selection pointer-events-auto [cursor:grab]",
            "data-disabled": i || void 0,
            "data-duration-tooltip": t ? r : void 0,
            "data-testid": "audio-trim-selection-drag",
            style: {
              left: `${n.startPercent}%`,
              width: `${Math.max(0, n.endPercent - n.startPercent)}%`,
            },
            onLostPointerCapture: n.handleRangeDragLostCapture,
            onMouseEnter: () => n.setDurationTooltipHovered("selection", !0),
            onMouseLeave: () => n.setDurationTooltipHovered("selection", !1),
            onPointerCancel: n.handleRangeDragCancel,
            onPointerDown: n.handleRangeDragStart,
            onPointerMove: n.handleRangeDragMove,
            onPointerUp: n.handleRangeDragEnd,
          });
        return t
          ? (0, a.jsx)(L.Bc, {
              delayDuration: 0,
              children: (0, a.jsxs)(L.m_, {
                open: n.durationTooltipOpen,
                children: [
                  (0, a.jsx)(L.k$, { asChild: !0, children: o }),
                  (0, a.jsx)(L.ZI, { side: "top", children: r }),
                ],
              }),
            })
          : o;
      }
      function Q(e) {
        let {
          compactDuration: t,
          controller: n,
          currentTimeMs: i,
          disabled: r,
          durationMs: o,
        } = e;
        return (0, a.jsx)("span", {
          "aria-disabled": r || void 0,
          "aria-keyshortcuts":
            "ArrowLeft ArrowRight ArrowUp ArrowDown Home End PageUp PageDown",
          "aria-label": (0, m._up)(),
          "aria-orientation": "horizontal",
          "aria-valuemax": o,
          "aria-valuemin": 0,
          "aria-valuenow": i,
          "aria-valuetext": (0, D.Lu)(i),
          className: `${_.A} pointer-events-auto absolute -top-canvas-video-trim-playhead-overhang z-canvas-video-trim-playhead h-canvas-video-trim-playhead w-canvas-video-trim-playhead-width touch-none rounded-canvas-timeline-playhead bg-dreamina-brand-default focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-dreamina-on-media-text-primary data-[disabled=true]:pointer-events-none`,
          "data-disabled": r || void 0,
          "data-testid": "audio-trim-playhead",
          hidden: null !== n.draggingKind,
          role: "slider",
          style: { left: `calc(${n.playheadPercent}% - 0.75px)` },
          tabIndex: r ? -1 : 0,
          onKeyDown: n.handlePlayheadKeyDown,
          onLostPointerCapture: n.handlePlayheadDragLostCapture,
          onMouseEnter: () => {
            t && n.setDurationTooltipHovered("playhead", !0);
          },
          onMouseLeave: () => n.setDurationTooltipHovered("playhead", !1),
          onPointerCancel: n.handlePlayheadDragCancel,
          onPointerDown: n.handlePlayheadDragStart,
          onPointerMove: n.handlePlayheadDragMove,
          onPointerUp: n.handlePlayheadDragEnd,
        });
      }
      function Z(e) {
        let { compactDuration: t, controller: n, disabled: i } = e,
          r = {
            "data-disabled": i || void 0,
            onLostPointerCapture: n.handleHandleDragLostCapture,
            onPointerCancel: n.handleHandleDragCancel,
            onPointerDown: n.handleHandleDragStart,
            onPointerMove: n.handleHandleDragMove,
            onPointerUp: n.handleHandleDragEnd,
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("span", {
              ...r,
              "aria-hidden": "true",
              className:
                "[&[data-disabled=true]]:pointer-events-none absolute [inset-block:0] z-canvas-video-trim-handle pointer-events-auto cursor-ew-resize",
              "data-handle-kind": "start",
              "data-testid": "audio-trim-start-handle-hit-target",
              style: { left: `calc(${n.startPercent}% - ${el}px)`, width: el },
              onMouseEnter: () => {
                (n.setHoveredHandle("start"),
                  t && n.setDurationTooltipHovered("start", !0));
              },
              onMouseLeave: () => {
                (n.setHoveredHandle(null),
                  n.setDurationTooltipHovered("start", !1));
              },
            }),
            (0, a.jsx)("span", {
              ...r,
              "aria-hidden": "true",
              className:
                "[&[data-disabled=true]]:pointer-events-none absolute [inset-block:0] z-canvas-video-trim-handle pointer-events-auto cursor-ew-resize",
              "data-handle-kind": "end",
              "data-testid": "audio-trim-end-handle-hit-target",
              style: { left: `${n.endPercent}%`, width: el },
              onMouseEnter: () => {
                (n.setHoveredHandle("end"),
                  t && n.setDurationTooltipHovered("end", !0));
              },
              onMouseLeave: () => {
                (n.setHoveredHandle(null),
                  n.setDurationTooltipHovered("end", !1));
              },
            }),
          ],
        });
      }
      function J(e, t) {
        return (0, a.jsxs)("span", {
          "aria-hidden": "true",
          className: `pointer-events-none absolute top-canvas-video-trim-handle-dots-center z-canvas-video-trim-handle flex h-canvas-video-trim-handle-dots w-canvas-video-trim-handle-dot -translate-y-1/2 flex-col items-center justify-center gap-canvas-video-trim-handle-dot-gap motion-safe:transition-opacity motion-safe:duration-canvas-video-trim-handle-hover motion-safe:ease-canvas-video-trim-handle-hover motion-reduce:transition-none ${"start" === e ? "right-canvas-video-trim-handle-dots-offset" : "left-canvas-video-trim-handle-dots-offset"} ${t ? "opacity-canvas-video-trim-handle-dots-visible" : "opacity-canvas-video-trim-handle-dots-hidden"}`,
          "data-testid": `audio-trim-${e}-handle-grip`,
          children: [
            (0, a.jsx)("span", {
              className:
                "size-canvas-video-trim-handle-dot shrink-0 rounded-canvas-video-trim-handle-dot bg-canvas-video-trim-handle-dots",
            }),
            (0, a.jsx)("span", {
              className:
                "size-canvas-video-trim-handle-dot shrink-0 rounded-canvas-video-trim-handle-dot bg-canvas-video-trim-handle-dots",
            }),
            (0, a.jsx)("span", {
              className:
                "size-canvas-video-trim-handle-dot shrink-0 rounded-canvas-video-trim-handle-dot bg-canvas-video-trim-handle-dots",
            }),
          ],
        });
      }
      function ee(e, t) {
        return t > 0 ? Math.min(100, Math.max(0, (e / t) * 100)) : 0;
      }
      function et(e, t) {
        return e.startMs === t.startMs && e.endMs === t.endMs;
      }
      function en(e, t, n) {
        return Math.round(Math.min(1, Math.max(0, (e - t.left) / t.width)) * n);
      }
      let ea = 3,
        ei = 12,
        er = 7,
        eo = 4,
        es = 12,
        el = 22,
        ed = 546;
      var ec = n(66171);
      function eu(e) {
        return "active" !== e.snapshot.status
          ? null
          : (0, a.jsx)(
              em,
              { ...e, snapshot: e.snapshot },
              e.snapshot.sessionId,
            );
      }
      function em(e) {
        var t, n, i, o, s;
        let {
            nodeDragging: l,
            port: d,
            snapshot: c,
            viewport: u,
            viewportMoving: m,
            waveformService: v,
          } = e,
          p = (0, r.useRef)(null),
          f = (0, M.oy)(),
          h = (function (e, t) {
            var n, a, i, o, s, l, d, c;
            let u,
              m,
              v,
              p = (0, r.useRef)(null),
              f = (0, r.useRef)(!1),
              h = (0, r.useRef)(),
              g = (0, r.useRef)(),
              [b, x] = (0, r.useState)(() => (0, D.rO)(e.source.durationMs)),
              [y, w] = (0, r.useState)(0),
              [k, S] = (0, r.useState)(!1),
              j = ((n = b), ((u = (0, r.useRef)(n)).current = n), u),
              C = (function (e) {
                let {
                    audioRef: t,
                    pendingPlayRef: n,
                    pendingSeekMsRef: a,
                    playbackBoundaryMsRef: i,
                    rangeRef: o,
                    setCurrentTimeMs: s,
                    setPlaying: l,
                  } = e,
                  d = (0, r.useCallback)(() => {
                    let e = t.current;
                    if (!e) return;
                    if (e.paused)
                      return void s(
                        i.current ??
                          Math.max(0, Math.round(1e3 * e.currentTime)),
                      );
                    let n = o.current;
                    n && ev(e, n, i, s, l);
                  }, [t, i, o, s, l]),
                  c = (0, r.useCallback)(
                    (e) => {
                      var t, r, o, d;
                      let c;
                      ((i.current = void 0),
                        (t = e),
                        (r = a),
                        (o = s),
                        (d = l),
                        void 0 !== (c = r.current) &&
                          ((t.currentTime = c / 1e3), (r.current = void 0)),
                        o(Math.round(1e3 * t.currentTime)),
                        d(!t.paused),
                        n.current &&
                          ((n.current = !1), e.play().catch(() => l(!1))));
                    },
                    [n, a, i, s, l],
                  ),
                  u = (0, r.useCallback)(() => {
                    ((i.current = void 0), l(!0));
                  }, [i, l]),
                  m = (0, r.useCallback)(() => {
                    let e = t.current;
                    (e &&
                      s(
                        i.current ??
                          Math.max(0, Math.round(1e3 * e.currentTime)),
                      ),
                      l(!1));
                  }, [t, i, s, l]);
                return {
                  handleAudioBound: c,
                  handleEnded: (0, r.useCallback)(() => {
                    let e = o.current;
                    e && ((i.current = e.endMs), s(e.endMs), l(!1));
                  }, [i, o, s, l]),
                  handlePause: m,
                  handlePlay: u,
                  handleTimeUpdate: d,
                };
              })({
                audioRef: p,
                pendingPlayRef: f,
                pendingSeekMsRef: h,
                playbackBoundaryMsRef: g,
                rangeRef: j,
                setCurrentTimeMs: w,
                setPlaying: S,
              });
            ((function (e) {
              let {
                audioRef: t,
                handleAudioBound: n,
                handleEnded: a,
                handlePause: i,
                handlePlay: o,
                handleTimeUpdate: s,
                nodeId: l,
                port: d,
              } = e;
              (0, r.useEffect)(() => {
                let e = null,
                  r = () => {
                    var r, c;
                    let u = d.get(l);
                    u === e ||
                      (ep(e, {
                        handleEnded: a,
                        handlePause: i,
                        handlePlay: o,
                        handleTimeUpdate: s,
                      }),
                      (e = u),
                      (t.current = u),
                      u &&
                        ((r = u),
                        (c = {
                          handleEnded: a,
                          handlePause: i,
                          handlePlay: o,
                          handleTimeUpdate: s,
                        }),
                        r.addEventListener("ended", c.handleEnded),
                        r.addEventListener("pause", c.handlePause),
                        r.addEventListener("play", c.handlePlay),
                        r.addEventListener("timeupdate", c.handleTimeUpdate),
                        n(u)));
                  },
                  c = d.subscribe(l, r);
                return (
                  r(),
                  () => {
                    (c(),
                      ep(e, {
                        handleEnded: a,
                        handlePause: i,
                        handlePlay: o,
                        handleTimeUpdate: s,
                      }),
                      t.current === e && (t.current = null));
                  }
                );
              }, [t, n, a, i, o, s, l, d]);
            })({
              audioRef: p,
              ...C,
              nodeId: e.source.nodeId,
              port: t.sourceAudioElements,
            }),
              (a = k),
              (i = p),
              (o = g),
              (s = j),
              (l = w),
              (d = S),
              (0, r.useEffect)(() => {
                if (!a) return;
                let e = 0,
                  t = () => {
                    let n = i.current,
                      a = s.current;
                    n &&
                      !n.paused &&
                      a &&
                      ev(n, a, o, l, d) &&
                      (e = requestAnimationFrame(t));
                  };
                return (
                  (e = requestAnimationFrame(t)),
                  () => cancelAnimationFrame(e)
                );
              }, [a, o, s, l, d, i]));
            let M = (0, r.useCallback)(
                (t) => {
                  let n = Math.min(e.source.durationMs, Math.max(0, t));
                  if (((g.current = void 0), w(n), p.current)) {
                    p.current.currentTime = n / 1e3;
                    return;
                  }
                  h.current = n;
                },
                [e.source.durationMs],
              ),
              I =
                ((c = {
                  audioRef: p,
                  currentTimeMs: y,
                  pendingPlayRef: f,
                  playbackBoundaryMsRef: g,
                  range: b,
                  seek: M,
                  setCurrentTimeMs: w,
                  setRange: x,
                  setPlaying: S,
                }),
                (m = (0, R.NM)(c.currentTimeMs, {
                  mediaRef: c.audioRef,
                  pendingPlayRef: c.pendingPlayRef,
                  playbackTimePinMsRef: c.playbackBoundaryMsRef,
                  setCurrentTimeMs: c.setCurrentTimeMs,
                  setRange: c.setRange,
                  setPlaying: c.setPlaying,
                })),
                (v = (0, r.useCallback)((e) => m(e), [m])),
                (0, R.$Z)({
                  applyRangeChange: v,
                  mediaRef: c.audioRef,
                  pendingPlayRef: c.pendingPlayRef,
                  playbackTimePinMsRef: c.playbackBoundaryMsRef,
                  range: c.range,
                  seek: c.seek,
                  setPlaying: c.setPlaying,
                })),
              E = (0, r.useCallback)(
                () =>
                  (function (e, t) {
                    if (!e) {
                      ((t.playbackBoundaryMsRef.current = void 0),
                        (0, R.WR)(e, t.currentTimeMs, t.range) &&
                          ((t.pendingSeekMsRef.current = t.range.startMs),
                          t.setCurrentTimeMs(t.range.startMs)),
                        (t.pendingPlayRef.current = !t.pendingPlayRef.current));
                      return;
                    }
                    if (((t.pendingPlayRef.current = !1), !e.paused)) {
                      (e.pause(), t.setPlaying(!1));
                      return;
                    }
                    ((t.playbackBoundaryMsRef.current = void 0),
                      (0, R.WR)(e, t.currentTimeMs, t.range) &&
                        ((e.currentTime = t.range.startMs / 1e3),
                        t.setCurrentTimeMs(t.range.startMs)),
                      e.play().catch(() => t.setPlaying(!1)));
                  })(p.current, {
                    currentTimeMs: y,
                    pendingPlayRef: f,
                    pendingSeekMsRef: h,
                    playbackBoundaryMsRef: g,
                    range: b,
                    setCurrentTimeMs: w,
                    setPlaying: S,
                  }),
                [y, b],
              );
            return (function (e) {
              let {
                currentTimeMs: t,
                handleDragPlayback: n,
                playing: a,
                range: i,
                seek: o,
                togglePlayback: s,
              } = e;
              return (0, r.useMemo)(
                () => ({
                  currentTimeMs: t,
                  handleHandleDragEnd: n.onHandleDragEnd,
                  handleHandleDragStart: n.onHandleDragStart,
                  handleRangeChange: n.onRangeChange,
                  playing: a,
                  range: i,
                  seek: o,
                  togglePlayback: s,
                }),
                [
                  t,
                  n.onHandleDragEnd,
                  n.onHandleDragStart,
                  n.onRangeChange,
                  a,
                  i,
                  o,
                  s,
                ],
              );
            })({
              currentTimeMs: y,
              handleDragPlayback: I,
              playing: k,
              range: b,
              seek: M,
              togglePlayback: E,
            });
          })(c, d),
          g = (0, r.useMemo)(() => [c.source.nodeId], [c.source.nodeId]),
          b = (0, T.Ij)(g),
          x = (0, A.og)({ geometry: b, viewport: u }),
          y = "submitting" === c.submission.phase,
          w = "idle" !== c.submission.phase;
        return (
          (t = f),
          (n = d),
          (i = p),
          (o = h.togglePlayback),
          (s = w),
          (0, r.useLayoutEffect)(() => {
            var e;
            let n =
              document.activeElement instanceof HTMLElement
                ? document.activeElement
                : null;
            return (
              null == (e = i.current) || e.focus({ preventScroll: !0 }),
              () => {
                (0, M.BD)(t, n);
              }
            );
          }, [t, i]),
          (0, r.useEffect)(() => {
            let e = (e) => {
              var t;
              if ("Escape" === e.key) {
                (e.preventDefault(), e.stopPropagation(), n.close());
                return;
              }
              !(
                " " !== e.key ||
                e.metaKey ||
                e.ctrlKey ||
                e.altKey ||
                e.shiftKey ||
                ((t = e.target) instanceof Element &&
                  null !==
                    t.closest(
                      'button, input, select, textarea, a[href], [contenteditable]:not([contenteditable="false"]), [role="button"], [role="menuitem"], [role="option"], [role="slider"]',
                    ))
              ) &&
                (e.preventDefault(), e.stopPropagation(), e.repeat || s || o());
            };
            return (
              document.addEventListener("keydown", e, !0),
              () => document.removeEventListener("keydown", e, !0)
            );
          }, [s, n, o]),
          (0, a.jsx)(ef, {
            busy: y,
            boundaryShift: x,
            geometry: b,
            interactionActive: l || m,
            panelRef: p,
            playback: h,
            port: d,
            snapshot: c,
            viewport: u,
            waveformService: v,
          })
        );
      }
      function ev(e, t, n, a, i) {
        if (!e) return !1;
        let r = Math.round(1e3 * e.currentTime);
        return r < (0, R.b)(e, t)
          ? (a(r), !0)
          : ((n.current = t.endMs),
            e.paused || e.pause(),
            a(t.endMs),
            i(!1),
            !1);
      }
      function ep(e, t) {
        e &&
          (e &&
            (e.removeEventListener("ended", t.handleEnded),
            e.removeEventListener("pause", t.handlePause),
            e.removeEventListener("play", t.handlePlay),
            e.removeEventListener("timeupdate", t.handleTimeUpdate)),
          e.pause());
      }
      function ef(e) {
        let {
          boundaryShift: { shift: t, surfaceRefCallback: n },
          busy: i,
          geometry: r,
          interactionActive: o,
          panelRef: s,
          playback: l,
          port: d,
          snapshot: c,
          viewport: u,
          waveformService: m,
        } = e;
        return (0, a.jsx)(T.nJ, {
          "data-testid": "audio-trim-overlay",
          geometry: r,
          hideWhenAnchorOutsideViewport: !0,
          interactionActive: o,
          offset: ej,
          position: "bottom",
          preserveMountWhenAnchorOutsideViewport: !0,
          preserveVisibilityDuringInteraction: !0,
          viewport: u,
          zIndex: eC,
          children: (0, a.jsx)("div", {
            ref: n,
            style: {
              maxHeight: "calc(100vh - 32px)",
              maxWidth: "calc(100vw - 32px)",
              transform: `translate(${t.x}px, ${t.y}px)`,
            },
            children: (0, a.jsx)(eh, {
              busy: i,
              panelRef: s,
              playback: l,
              port: d,
              snapshot: c,
              waveformService: m,
            }),
          }),
        });
      }
      let eh = (0, r.memo)(function (e) {
        let {
            busy: t,
            panelRef: n,
            playback: i,
            port: o,
            snapshot: s,
            waveformService: l,
          } = e,
          d = (function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : ek,
              [a, i] = (0, r.useState)(eS);
            return (
              (0, r.useEffect)(() => {
                if (!t) return;
                let a = new AbortController();
                return (
                  n.prepare({ sourceUrl: e }, a.signal).then(
                    (e) => {
                      a.signal.aborted ||
                        i({ failed: !1, magnitudes: e.magnitudes });
                    },
                    (e) => {
                      var t, n;
                      a.signal.aborted ||
                        (i({ failed: !0, magnitudes: null }),
                        null == (t = (n = globalThis).reportError) ||
                          t.call(
                            n,
                            Error("Audio trim waveform extraction failed.", {
                              cause: e,
                            }),
                          ));
                    },
                  ),
                  () => a.abort()
                );
              }, [t, n, e]),
              a
            );
          })(s.source.sourceUrl, "idle" === s.submission.phase, l),
          c = (0, C.DFZ)();
        return (0, a.jsx)(C.$8Q, {
          theme: c,
          children: (0, a.jsxs)("section", {
            ref: n,
            "aria-label": (0, j.Zs)(),
            className: `${N.Ed} pointer-events-auto nodrag nopan nowheel flex h-canvas-audio-trim-panel w-canvas-audio-trim-panel max-w-canvas-audio-trim-panel flex-col gap-canvas-audio-trim-panel border-0 p-canvas-audio-trim-panel text-dreamina-text-primary ring-1 ring-inset ring-dreamina-stroke-primary`,
            "data-testid": "audio-trim-overlay-surface",
            tabIndex: -1,
            children: [
              (0, a.jsx)("div", {
                className: "w-full h-[40px]",
                children: (0, a.jsx)(eg, {
                  magnitudes: d.magnitudes,
                  playback: i,
                  snapshot: s,
                  waveformUnavailable: d.failed,
                }),
              }),
              (0, a.jsx)(ey, { busy: t, playback: i, port: o, snapshot: s }),
            ],
          }),
        });
      });
      function eg(e) {
        let {
            magnitudes: t,
            playback: n,
            snapshot: i,
            waveformUnavailable: r,
          } = e,
          { submission: o } = i;
        return "submitting" === o.phase
          ? (0, a.jsx)(eb, {})
          : "failed" === o.phase
            ? (0, a.jsx)(ex, { errorMessage: o.errorMessage })
            : (0, a.jsxs)("div", {
                className: "w-full h-[40px] relative",
                children: [
                  (0, a.jsx)(V, {
                    currentTimeMs: n.currentTimeMs,
                    disabled: !1,
                    durationMs: i.source.durationMs,
                    magnitudes: t,
                    range: n.range,
                    onHandleDragEnd: n.handleHandleDragEnd,
                    onHandleDragStart: n.handleHandleDragStart,
                    onRangeChange: n.handleRangeChange,
                    onSeek: n.seek,
                  }),
                  !0 === r &&
                    (0, a.jsx)("output", {
                      className:
                        "absolute right-0 bottom-full left-0 mb-[4px] text-dreamina-text-disabled [font-family:var(--dreamina-font-family-cn)] text-[var(--dreamina-font-size-cn-10)] font-[var(--dreamina-font-weight-regular)] leading-[var(--dreamina-line-height-cn-10)] text-center pointer-events-none",
                      "data-testid": "audio-trim-waveform-unavailable",
                      children: (0, j.kc)(),
                    }),
                ],
              });
      }
      function eb() {
        return (0, a.jsx)("output", {
          "aria-label": (0, j.dZ)(),
          className:
            "flex items-center justify-center w-full h-[40px] overflow-hidden [background:var(--dreamina-color-block-secondary-default)] rounded-[8px] [background-image:linear-gradient(_90deg,_var(--dreamina-color-block-secondary-default)_0%,_var(--dreamina-color-block-secondary-hover)_50%,_var(--dreamina-color-block-secondary-default)_100%_)]",
          "data-testid": "audio-trim-processing-track",
          children: (0, a.jsx)("span", {
            "aria-hidden": "true",
            className:
              "w-[14px] h-[14px] border-dreamina border-solid border-dreamina-text-placeholder border-t-dreamina-text-secondary rounded-full [animation:octo-audio-trim-spin_1s_linear_infinite] motion-reduce:animate-none",
            "data-testid": "audio-trim-processing-spinner",
          }),
        });
      }
      function ex(e) {
        let { errorMessage: t } = e;
        return (0, a.jsx)("div", {
          className:
            "flex items-center justify-center w-full h-[40px] overflow-hidden bg-dreamina-block-secondary-default rounded-[8px] gap-[4px] text-dreamina-text-placeholder [font-family:var(--dreamina-font-family-cn)] text-[var(--dreamina-font-size-cn-12)] font-[var(--dreamina-font-weight-regular)] leading-[var(--dreamina-line-height-cn-12)]",
          "data-testid": "audio-trim-failed-track",
          role: "alert",
          children: (0, a.jsx)("span", { children: t }),
        });
      }
      function ey(e) {
        let { busy: t, playback: n, port: i, snapshot: r } = e,
          o = t || "failed" === r.submission.phase;
        return (0, a.jsxs)("div", {
          className:
            "flex h-canvas-audio-trim-action items-center justify-between gap-[8px]",
          "data-testid": "audio-trim-playback-row",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex h-[20px] w-canvas-audio-trim-controls items-center gap-[4px]",
              "data-testid": "audio-trim-playback-controls",
              children: [
                (0, a.jsx)(C.$nd, {
                  "aria-label": n.playing ? (0, j.J2)() : (0, j.Hu)(),
                  className:
                    "after:absolute after:-inset-[8px] after:content-[''] relative flex-none w-[20px] min-w-[20px] h-[20px] p-0 text-dreamina-text-secondary hover:text-dreamina-text-primary disabled:text-dreamina-text-disabled [background:transparent] hover:[background:transparent] [border:0] rounded-[0] [box-shadow:none]",
                  disabled: o,
                  size: "icon",
                  variant: "text",
                  onClick: n.togglePlayback,
                  children: n.playing
                    ? (0, a.jsx)(C.E$n, { size: 20 })
                    : (0, a.jsx)(C.udU, { size: 20 }),
                }),
                (0, a.jsx)(E, {
                  appearance: "surface",
                  currentTime: (0, D.ST)(n.currentTimeMs),
                  disabled: o,
                  duration: (0, D.ST)(r.source.durationMs),
                  testId: "audio-trim-time",
                }),
              ],
            }),
            (0, a.jsx)(ew, {
              port: i,
              range: n.range,
              submission: r.submission,
            }),
          ],
        });
      }
      function ew(e) {
        let { port: t, range: n, submission: i } = e,
          r = "submitting" === i.phase;
        return (0, a.jsx)(C.$nd, {
          className:
            "[&:hover]:[color:var(--dreamina-color-button-primary-text)] [&:hover]:[background:var(--dreamina-color-button-primary-bg-hover)] [&:disabled]:[color:var(--dreamina-color-button-primary-text-disabled)] [&:disabled]:[background:var(--dreamina-color-button-primary-bg-disabled)] [&:disabled]:opacity-[1] h-canvas-audio-trim-action w-canvas-audio-trim-confirm p-[4px_16px] [color:var(--dreamina-color-button-primary-text)] text-[var(--dreamina-font-size-cn-13)] font-[var(--dreamina-font-weight-medium)] leading-[var(--dreamina-line-height-cn-13)] [background:var(--dreamina-color-button-primary-bg-default)] [border:0] rounded-[8px] [box-shadow:none]",
          "data-testid": "audio-trim-confirm",
          disabled: r,
          onClick: () => void t.submit(n),
          children: (0, j.BR)(),
        });
      }
      let ek = new (class {
          async prepare(e, t) {
            let n = new Float32Array(
                (await this.decoder.decode(e, t)).peakMagnitudes,
              ),
              a = 0;
            for (let e of n) e > a && (a = e);
            if (a > 0)
              for (let e = 0; e < n.length; e += 1) n[e] = (n[e] ?? 0) / a;
            return Object.freeze({ magnitudes: n });
          }
          constructor(e = new ec.S()) {
            this.decoder = e;
          }
        })(),
        eS = Object.freeze({ failed: !1, magnitudes: null }),
        ej = 19,
        eC = S.Xx;
      var eM = n(18377),
        eR = n(847),
        eI = n(81058),
        eE = n(72041),
        eP = n(82179),
        eA = n(45756);
      function eT(e, t) {
        let n = (0, r.useCallback)(
          (t) => {
            var n, a, i;
            let r;
            return (
              (n = t),
              (a = e),
              (null != (r = n.target instanceof Element ? n.target : null) &&
                !!r.closest(a)) ||
                !!(null == (i = document.elementFromPoint(n.clientX, n.clientY))
                  ? void 0
                  : i.closest(a))
            );
          },
          [e],
        );
        (0, eA.Vv)(n, t);
      }
      var eN = n(25734),
        eD = n(66139);
      function eL(e) {
        let {
            children: t,
            outputCount: n,
            audioScenario: i = "audioSeparation",
            referenceVideoDurationSeconds: o,
          } = e,
          s = (0, r.useMemo)(
            () =>
              (0, eD._)(n, {
                audioScenario: i,
                referenceVideoDurationSeconds: o,
              }),
            [i, n, o],
          );
        return (0, a.jsx)(eN.c2, {
          action: s,
          children: (e) => {
            let { state: n } = e;
            return t(
              (function (e) {
                var t;
                let n = "quote" in e ? e.quote : void 0;
                if (n)
                  return null ==
                    (t = (0, eN._j)(
                      (0, eN.kD)({ quote: n, formatCredits: String }),
                    ))
                    ? void 0
                    : t.actualText;
              })(n),
            );
          },
        });
      }
      var eF = n(10639),
        e_ = n(62028),
        ez = n(7837),
        eH = n(96103),
        eO = n(11456);
      function e$(e) {
        let { snapshot: t } = e,
          n = (0, v.Yi)();
        return (
          (0, r.useEffect)(() => {
            if ("failed" === t.status && n)
              return n({
                announcement: "assertive",
                closeLabel: (0, m.I7b)(),
                dismissible: !1,
                id: `canvas:resource-regeneration:${t.nodeId}:${t.resourceId}`,
                status: "warning",
                title:
                  t.errorCode === String(eH.OH.IMAGE_PRESET_UNAVAILABLE)
                    ? (0, m.iKq)()
                    : t.errorCode === String(eH.OH.VIDEO_SAMPLE_EXPIRED)
                      ? (0, eO.dz)()
                      : (0, m.uNP)(),
              });
          }, [n, t]),
          null
        );
      }
      var eB = n(22826),
        eV = n(96783),
        eW = n(20554),
        eU = n(74642);
      function eq(e) {
        let { snapshot: t, port: n, editAvailability: i } = e,
          o = (0, M.oy)(),
          s = (0, r.useRef)(null),
          l = (0, r.useRef)(!1),
          d =
            i.available &&
            "inactive" !== t.status &&
            "failed" !== t.status &&
            !!t.action;
        return ((0, r.useLayoutEffect)(() => {
          if (d && !l.current)
            ((l.current = !0),
              (s.current =
                document.activeElement instanceof HTMLElement &&
                document.activeElement !== document.body
                  ? document.activeElement
                  : null));
          else if (!d && l.current) {
            var t;
            ((l.current = !1),
              (0, M.BD)(
                o,
                (null == (t = s.current) ? void 0 : t.isConnected)
                  ? s.current
                  : e.fallbackFocusRef.current,
                { kind: "canvasRegion" },
              ));
          }
        }, [d, o, e.fallbackFocusRef]),
        (0, r.useEffect)(() => {
          i.available || null == n || n.cancelConfirmation();
        }, [i.available, n]),
        i.available &&
          "inactive" !== t.status &&
          "failed" !== t.status &&
          t.action)
          ? (0, a.jsx)(eK, {
              action: t.action,
              busy: "pending" === t.status,
              port: n,
            })
          : null;
      }
      function eK(e) {
        let { action: t, busy: n, port: i } = e,
          { state: o } = (0, eN.$t)(t),
          s = "quote" in o ? o.quote : void 0,
          l = (0, r.useId)();
        return (0, a.jsx)(eU.lG, {
          open: !0,
          onOpenChange: (e) => {
            e || n || null == i || i.cancelConfirmation();
          },
          children: (0, a.jsxs)(eU.Cf, {
            appearance: "spacious",
            "aria-describedby": l,
            "aria-busy": n || void 0,
            className:
              "w-dreamina-dialog-medium-width bg-dreamina-bg-surface text-dreamina-text-primary",
            overlayClassName: "bg-dreamina-bg-mask-60",
            "data-testid": "resource-regeneration-confirmation",
            onCloseAutoFocus: (e) => e.preventDefault(),
            children: [
              (0, a.jsxs)(eU.c7, {
                appearance: "spacious",
                children: [
                  (0, a.jsx)(eU.L3, { children: (0, eV.M)() }),
                  (0, a.jsx)(eU.De, {
                    disabled: n,
                    icon: (0, a.jsx)(C.gAK, { size: 20 }),
                    label: (0, m.I7b)(),
                  }),
                ],
              }),
              (0, a.jsx)(eU.rr, {
                id: l,
                children: (0, a.jsx)(eN.JD, {
                  itemLabel: (0, eW.eY)(),
                  presentation: (0, eN.kD)({ quote: s, formatCredits: eB.mX }),
                }),
              }),
              (0, a.jsxs)(eU.Es, {
                appearance: "spacious",
                children: [
                  (0, a.jsx)(C.$nd, {
                    variant: "secondary",
                    disabled: n,
                    onClick: () =>
                      null == i ? void 0 : i.cancelConfirmation(),
                    children: (0, eV.Mm)(),
                  }),
                  (0, a.jsx)(C.$nd, {
                    loading: n,
                    disabledReason:
                      n || "disabled" !== o.activation ? void 0 : (0, eV.sm)(),
                    onClick: (e) => {
                      (e.currentTarget.focus(), null == i || i.confirm(s));
                    },
                    children: (0, eV.M)(),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var eG = n(93576),
        eY = n(44600),
        eX = n(45218),
        eQ = n(53973),
        eZ = n(35623),
        eJ = n(64607),
        e0 = n(60872),
        e1 = n(62799),
        e2 = n(29558);
      function e3(e) {
        let {
            children: t,
            interceptionPoint: n,
            outputCount: i,
            resolution: o,
            restoreFocusFallback: s,
            trialSurfaceEnabled: l,
          } = e,
          d = (0, r.useMemo)(
            () =>
              (0, eX.J)({
                kind: "pro",
                mode: "image-hd",
                outputCount: i,
                resolution: o,
              }),
            [i, o],
          );
        return (0, a.jsx)(eN.sC, {
          action: d,
          capability: "image.pro-hd",
          interceptionPoint: n,
          restoreFocusFallback: s,
          trialSurfaceEnabled: l,
          vipFunctionDetails: {
            enterSource: "generate",
            surfaceKey: "image.post_edit.image-hd",
          },
          children: t,
        });
      }
      let e6 = { height: 32, marginInline: 4 },
        e4 = { minWidth: 0, paddingInline: 4 },
        e5 = { height: 12 },
        e8 = { height: 32, minWidth: 0, paddingInline: 8 },
        e9 =
          "h-canvas-selection-toolbar-control gap-canvas-selection-toolbar-control-gap rounded-canvas-selection-toolbar-control bg-transparent px-canvas-selection-toolbar-control-inline font-dreamina-medium text-dreamina-cn-13 leading-canvas-selection-toolbar-control text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary data-[state=open]:bg-dreamina-block-secondary-hover",
        e7 =
          "h-canvas-selection-toolbar-control shrink-0 gap-canvas-selection-toolbar-control-gap rounded-canvas-selection-toolbar-control border-0 px-canvas-image-hd-submit-inline font-dreamina-medium text-dreamina-cn-13 leading-canvas-selection-toolbar-control",
        te =
          "gap-canvas-selection-toolbar-control-gap rounded-canvas-selection-toolbar-control bg-transparent font-dreamina-number font-dreamina-medium text-dreamina-number-13 leading-canvas-selection-toolbar-control text-dreamina-text-secondary hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-hover active:text-dreamina-text-primary focus:outline-none focus-visible:bg-dreamina-block-secondary-hover focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 aria-pressed:bg-dreamina-block-secondary-hover aria-pressed:text-dreamina-text-primary aria-disabled:bg-transparent aria-disabled:text-dreamina-text-disabled aria-disabled:hover:bg-transparent aria-disabled:hover:text-dreamina-text-disabled aria-disabled:active:bg-transparent aria-disabled:active:text-dreamina-text-disabled aria-disabled:focus-visible:bg-transparent",
        tt = (0, r.memo)(function (e) {
          var t;
          let {
              commerceDisabledReason: n,
              creditPresentation: i,
              editAvailability: o,
              onClose: s,
              onDetailChange: l,
              onModeChange: d,
              onResolutionChange: c,
              onSubmit: u,
              restoreFocusFallback: m = tk,
              session: v,
            } = e,
            [p, f] = (0, r.useState)(!1),
            [h, g] = (0, r.useState)(!1),
            b = (0, r.useRef)(null),
            x = (0, r.useRef)(null);
          ((t = x),
            (0, r.useLayoutEffect)(() => {
              var e;
              null == (e = t.current) || e.focus({ preventScroll: !0 });
            }, [t]));
          let y = "submitting" === v.submitState;
          return (
            (0, r.useEffect)(() => {
              y && f(!1);
            }, [y]),
            (0, a.jsx)(L.Bc, {
              delayDuration: 0,
              children: (0, a.jsx)(tn, {
                commerceDisabledReason: n,
                creditPresentation: i,
                detailButtonRef: b,
                detailOpen: p,
                editDisabledReason: (function (e) {
                  if (!e.available)
                    return "notEditable" === e.reason
                      ? (0, eG.Al)()
                      : (0, eG.ST)();
                })(o),
                modeButtonRef: x,
                modeOpen: h,
                onDetailChange: l,
                onDetailOpenChange: f,
                onKeyDownCapture: (e) => {
                  if ("Escape" === e.key && !h) {
                    if ((e.preventDefault(), e.stopPropagation(), p)) {
                      var t;
                      (f(!1), null == (t = b.current) || t.focus());
                      return;
                    }
                    s();
                  }
                },
                onModeOpenChange: (e) => {
                  (e && f(!1), g(e));
                },
                onResolutionChange: c,
                onSelectMode: (e) => {
                  ("pro" !== e && f(!1), d(e));
                },
                onSubmit: u,
                restoreFocusFallback: m,
                session: v,
              }),
            })
          );
        });
      function tn(e) {
        let t = "pro" === e.session.mode && e.detailOpen,
          [n, i] = (0, r.useState)(null);
        return (0, a.jsx)(L.AM, {
          open: t,
          onOpenChange: e.onDetailOpenChange,
          children: (0, a.jsxs)("div", {
            ref: i,
            className: "nopan relative",
            "data-testid": "image-hd-toolbar-root",
            onKeyDownCapture: e.onKeyDownCapture,
            children: [
              (0, a.jsxs)(C.M7E, {
                className:
                  "nodrag nopan flex h-canvas-selection-toolbar w-fit max-w-[calc(100vw-32px)] items-center gap-canvas-selection-toolbar-gap rounded-canvas-selection-toolbar bg-dreamina-canvas-frame p-canvas-selection-toolbar-inset text-dreamina-text-primary",
                "data-testid": "image-hd-toolbar",
                defaultActiveValue: "mode",
                label: (0, eG.DF)(),
                orientation: "horizontal",
                children: [
                  (0, a.jsx)(ta, { session: e.session }),
                  (0, a.jsx)(ts, {
                    buttonRef: e.modeButtonRef,
                    open: e.modeOpen,
                    editDisabledReason: e.editDisabledReason,
                    portalContainer: n,
                    session: e.session,
                    onOpenChange: e.onModeOpenChange,
                    onSelectMode: e.onSelectMode,
                    restoreFocusFallback: e.restoreFocusFallback,
                  }),
                  (0, a.jsx)(C.lRU, { style: e5 }),
                  (0, a.jsx)(ti, { ...e }),
                ],
              }),
              (0, a.jsx)(ty, {
                anchorRef: e.detailButtonRef,
                open: t,
                portalContainer: n,
                session: e.session,
                onChange: e.onDetailChange,
                onOpenChange: e.onDetailOpenChange,
              }),
            ],
          }),
        });
      }
      function ta(e) {
        let { session: t } = e;
        return "batch" !== t.selectionKind
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(C.Sbi, {
                  className: "text-dreamina-cn-13 text-dreamina-text-tertiary",
                  "data-testid": "image-hd-batch-count",
                  children: (0, eG.mI)(t.sources.length),
                }),
                (0, a.jsx)(C.lRU, { style: e5 }),
              ],
            });
      }
      function ti(e) {
        let t = "pro" === e.session.mode;
        return (0, a.jsxs)("div", {
          className: "grid items-center [&>*]:col-start-1 [&>*]:row-start-1",
          "data-testid": "image-hd-mode-controls-stack",
          style: { minWidth: 0 },
          children: [
            (0, a.jsx)("div", {
              "aria-hidden": !t,
              className: (0, C.cn)(
                "flex items-center gap-canvas-selection-toolbar-gap",
                !t && "invisible",
              ),
              "data-testid": "image-hd-pro-controls-cell",
              children: (0, a.jsx)(tr, { ...e }),
            }),
            (0, a.jsx)("div", {
              "aria-hidden": t,
              className: (0, C.cn)(
                "flex items-center gap-canvas-selection-toolbar-gap",
                t && "invisible",
              ),
              "data-testid": "image-hd-normal-controls-cell",
              style: { minWidth: 0 },
              children: (0, a.jsx)(to, { ...e }),
            }),
          ],
        });
      }
      function tr(e) {
        return "pro" !== e.session.mode
          ? (0, a.jsx)(tp, {
              creditPresentation: e.creditPresentation,
              resolution: e.session.resolution,
            })
          : (0, a.jsx)(tv, {
              commerceDisabledReason: e.commerceDisabledReason,
              creditPresentation: e.creditPresentation,
              detailButtonRef: e.detailButtonRef,
              detailOpen: e.detailOpen,
              editDisabledReason: e.editDisabledReason,
              onResolutionChange: e.onResolutionChange,
              onSubmit: e.onSubmit,
              restoreFocusFallback: e.restoreFocusFallback,
              session: e.session,
            });
      }
      function to(e) {
        return "pro" === e.session.mode
          ? (0, a.jsx)(tf, {})
          : (0, a.jsx)(tb, {
              editDisabledReason: e.editDisabledReason,
              onSubmit: e.onSubmit,
              session: e.session,
            });
      }
      function ts(e) {
        var t, n, i, o;
        let {
            buttonRef: s,
            editDisabledReason: l,
            onOpenChange: d,
            onSelectMode: c,
            open: u,
            portalContainer: m,
            restoreFocusFallback: v,
            session: p,
          } = e,
          f = (0, r.useRef)(null),
          [h, g] = (0, r.useState)(!1);
        return (
          (t = s),
          (n = f),
          (i = u),
          (o = d),
          (0, r.useEffect)(() => {
            if (!i) return;
            let e = (e) => {
              var a, i;
              let r = e.target;
              !(r instanceof Node) ||
                (null == (a = t.current) ? void 0 : a.contains(r)) ||
                (null == (i = n.current) ? void 0 : i.contains(r)) ||
                (0, eN.mb)(r) ||
                o(!1);
            };
            return (
              document.addEventListener("pointerdown", e, !0),
              () => document.removeEventListener("pointerdown", e, !0)
            );
          }, [t, n, o, i]),
          (0, a.jsxs)(e0.rI, {
            modal: !1,
            open: u,
            onOpenChange: (e) => {
              (e && g(!1), d(e));
            },
            children: [
              (0, a.jsx)(e0.ty, {
                asChild: !0,
                children: (0, a.jsxs)(C.IBt, {
                  ref: s,
                  "aria-label": (0, eG.c5)(),
                  className: (0, C.cn)(
                    "h-canvas-selection-toolbar-control shrink-0 justify-between gap-canvas-selection-toolbar-control-gap rounded-canvas-selection-toolbar-control bg-transparent px-canvas-selection-toolbar-control-inline font-dreamina-medium text-dreamina-cn-13 leading-canvas-selection-toolbar-control text-dreamina-text-primary hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary data-[state=open]:bg-dreamina-block-secondary-hover",
                  ),
                  value: "mode",
                  variant: "text",
                  onPointerDown: () => {
                    u && g(!0);
                  },
                  children: [
                    (0, a.jsx)(tc, { mode: p.mode }),
                    (0, a.jsx)(e1.e9, {
                      className: (0, C.cn)(
                        "size-3 shrink-0 transition-transform duration-200",
                        u && "rotate-180",
                      ),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(tl, {
                contentRef: f,
                editDisabledReason: l,
                open: u,
                portalContainer: m,
                retainOnClose: h,
                restoreFocusFallback: v,
                session: p,
                onSelectMode: c,
              }),
            ],
          })
        );
      }
      function tl(e) {
        let {
          contentRef: t,
          editDisabledReason: n,
          onSelectMode: i,
          open: r,
          portalContainer: o,
          retainOnClose: s,
          restoreFocusFallback: l,
          session: d,
        } = e;
        return (0, a.jsxs)(e0.N1, {
          ref: t,
          align: "center",
          appearance: "solid",
          "aria-label": (0, eG.c5)(),
          className:
            "flex w-max min-w-canvas-feature-mode-menu-width flex-col justify-center gap-canvas-selection-toolbar-menu-gap rounded-canvas-selection-toolbar-menu border-0 bg-canvas-selection-toolbar-menu p-canvas-selection-toolbar-menu-inset shadow-canvas-feature-mode-menu",
          "data-image-hd-mode-menu-gap": 8,
          open: r,
          portalContainer: o,
          retainOnClose: s,
          sideOffset: 8,
          onEscapeKeyDown: tS,
          onFocusOutside: (e) => {
            tj(e, t) || tS(e);
          },
          onInteractOutside: tS,
          children: [
            (0, a.jsx)(tu, {
              active: "pro" === d.mode,
              commercialResolution: n ? void 0 : (0, eZ.Q)(d.resolution),
              disabledReasonText: n,
              label: (0, eG.r9)(),
              mode: "pro",
              onSelect: () => i("pro"),
              restoreFocusFallback: l,
            }),
            (0, a.jsx)(tu, {
              active: "normal" === d.mode,
              disabledReason: d.normalModeDisabledReason,
              label: (0, eG.Fu)(),
              mode: "normal",
              onSelect: () => i("normal"),
            }),
          ],
        });
      }
      function td(e) {
        let { mode: t } = e;
        return "pro" === t
          ? (0, a.jsx)(C.e2v, {
              className: "shrink-0",
              "data-testid": "image-hd-mode-icon-pro",
              size: 16,
            })
          : (0, a.jsx)(C.kDZ, {
              className: "shrink-0",
              "data-testid": "image-hd-mode-icon-normal",
              size: 16,
            });
      }
      function tc(e) {
        let { mode: t } = e;
        return (0, a.jsxs)("span", {
          className: "flex shrink-0 items-center gap-1",
          "data-testid": "image-hd-mode-leading",
          children: [
            (0, a.jsx)(td, { mode: t }),
            (0, a.jsxs)("span", {
              className: "grid [&>*]:col-start-1 [&>*]:row-start-1",
              "data-testid": "image-hd-mode-label-stack",
              children: [
                (0, a.jsx)("span", {
                  className: (0, C.cn)(
                    "whitespace-nowrap text-left",
                    "pro" !== t && "invisible",
                  ),
                  children: (0, eG.r9)(),
                }),
                (0, a.jsx)("span", {
                  className: (0, C.cn)(
                    "whitespace-nowrap text-left",
                    "normal" !== t && "invisible",
                  ),
                  children: (0, eG.Fu)(),
                }),
              ],
            }),
          ],
        });
      }
      function tu(e) {
        let {
            active: t,
            commercialResolution: n,
            disabledReason: i,
            disabledReasonText: o,
            label: s,
            mode: l,
            onSelect: d,
            restoreFocusFallback: c,
          } = e,
          u = (0, r.useId)(),
          m = o ?? (i ? tw(i) : void 0),
          v = (e) => {
            var n, i;
            return (0, a.jsxs)(e0._2, {
              ...(null == e ? void 0 : e.triggerProps),
              "aria-describedby": (null == e ? void 0 : e.accessibleDescription)
                ? u
                : void 0,
              "aria-current": t ? "true" : void 0,
              className:
                "h-canvas-feature-mode-menu-item gap-canvas-selection-toolbar-menu-item-gap rounded-canvas-selection-toolbar-menu-item px-canvas-selection-toolbar-menu-item-inline font-dreamina-regular text-dreamina-cn-13 leading-canvas-selection-toolbar-control text-dreamina-text-primary data-[highlighted]:bg-dreamina-block-secondary-hover data-[highlighted]:text-dreamina-text-primary aria-disabled:data-[highlighted]:text-dreamina-text-disabled",
              disabledReason: m,
              onSelect: (t) => {
                (!e || e.guardActivation(t)) && d();
              },
              preferExternalDisabledReasonDescription: !0,
              children: [
                (0, a.jsx)(tm, { mode: l }),
                (0, a.jsx)("span", {
                  className: "whitespace-nowrap",
                  children: s,
                }),
                null == e ? void 0 : e.mark,
                ((n = e),
                (i = u),
                (null == n ? void 0 : n.accessibleDescription)
                  ? (0, a.jsx)("span", {
                      className: "sr-only",
                      id: i,
                      children: n.accessibleDescription,
                    })
                  : null),
              ],
            });
          },
          p = v();
        return (
          n &&
            c &&
            (p = (0, a.jsx)(e3, {
              interceptionPoint: "configuration",
              outputCount: 1,
              resolution: n,
              restoreFocusFallback: c,
              trialSurfaceEnabled: !1,
              children: (e) => v(e),
            })),
          m
            ? (0, a.jsxs)(L.m_, {
                children: [
                  (0, a.jsx)(L.k$, { asChild: !0, children: p }),
                  (0, a.jsx)(L.ZI, { side: "right", children: m }),
                ],
              })
            : p
        );
      }
      function tm(e) {
        let { mode: t } = e;
        return "pro" === t
          ? (0, a.jsx)(C.e2v, {
              className: "shrink-0",
              "data-testid": "image-hd-menu-icon-pro",
              size: 16,
            })
          : (0, a.jsx)(C.kDZ, {
              className: "shrink-0",
              "data-testid": "image-hd-menu-icon-normal",
              size: 16,
            });
      }
      function tv(e) {
        let {
          commerceDisabledReason: t,
          creditPresentation: n,
          detailButtonRef: i,
          detailOpen: r,
          editDisabledReason: o,
          onResolutionChange: s,
          onSubmit: l,
          restoreFocusFallback: d,
          session: c,
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(L.Wv, {
              asChild: !0,
              children: (0, a.jsxs)(C.IBt, {
                ref: i,
                "aria-expanded": r,
                className: e9,
                "data-image-hd-detail-disclosure": "true",
                disabled: "submitting" === c.submitState,
                value: "detail",
                variant: "text",
                children: [
                  (0, a.jsx)(eJ.D$, { className: "shrink-0", size: 16 }),
                  (0, a.jsx)("span", { children: (0, eG.ld)() }),
                  (0, a.jsx)(e1.e9, {
                    className: (0, C.cn)(
                      "size-3 transition-transform duration-200",
                      r && "rotate-180",
                    ),
                  }),
                ],
              }),
            }),
            (0, a.jsx)(C.lRU, { style: e5 }),
            (0, a.jsx)(tg, {
              editDisabledReason: o,
              onResolutionChange: s,
              resolution: c.resolution,
              restoreFocusFallback: d,
            }),
            (0, a.jsx)(C.lRU, { style: e5 }),
            (0, a.jsx)(th, { presentation: n }),
            (0, a.jsx)(tx, {
              busy: "submitting" === c.submitState,
              commerceDisabledReason: t,
              disabledReason: c.submitDisabledReason,
              editDisabledReason: o,
              label: (0, eG.lu)(),
              onSubmit: l,
              proResolution: (0, eZ.Q)(c.resolution),
              restoreFocusFallback: d,
            }),
          ],
        });
      }
      function tp(e) {
        let { creditPresentation: t, resolution: n } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(C.IBt, {
              className: e9,
              disabled: !0,
              value: "detail",
              variant: "text",
              children: [
                (0, a.jsx)(eJ.D$, { className: "shrink-0", size: 16 }),
                (0, a.jsx)("span", { children: (0, eG.ld)() }),
                (0, a.jsx)("span", {
                  "aria-hidden": "true",
                  className: "size-3",
                }),
              ],
            }),
            (0, a.jsx)(C.lRU, { style: e5 }),
            (0, a.jsx)(C.$Qh, {
              className: "flex items-center gap-0.5",
              label: (0, eG.xH)(),
              style: { minWidth: 0 },
              children: eZ.Tz.map((e) =>
                (0, a.jsx)(
                  C.IBt,
                  {
                    "aria-label": (0, eG.KR)(e),
                    "aria-pressed": n === e,
                    className: te,
                    disabled: !0,
                    style: e8,
                    value: `resolution-${e}`,
                    variant: "toolbar",
                    children: e,
                  },
                  e,
                ),
              ),
            }),
            (0, a.jsx)(C.lRU, { style: e5 }),
            (0, a.jsx)(th, { presentation: t }),
            (0, a.jsx)(C.IBt, {
              className: e7,
              disabled: !0,
              value: "submit",
              variant: "primary",
              children: (0, a.jsx)("span", { children: (0, eG.lu)() }),
            }),
          ],
        });
      }
      function tf() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("span", {
              className:
                "flex-1 truncate text-[13px] text-dreamina-text-tertiary",
              style: e4,
              children: (0, eG.jB)(),
            }),
            (0, a.jsx)(C.IBt, {
              className: e7,
              disabled: !0,
              value: "submit",
              variant: "primary",
              children: (0, a.jsx)("span", { children: (0, eG.K)() }),
            }),
          ],
        });
      }
      function th(e) {
        let { presentation: t } = e;
        return t
          ? (0, a.jsx)("span", {
              className: "inline-flex items-center",
              "data-image-hd-credit-region": "",
              style: e6,
              children: (0, a.jsx)(eN.JD, {
                className:
                  "inline-flex items-center font-dreamina-number font-dreamina-medium text-dreamina-number-12 text-dreamina-text-secondary",
                itemLabel: (0, eG.DF)(),
                presentation: t,
              }),
            })
          : null;
      }
      function tg(e) {
        let {
          editDisabledReason: t,
          onResolutionChange: n,
          resolution: i,
          restoreFocusFallback: o,
        } = e;
        return (0, a.jsx)(C.$Qh, {
          className: "flex items-center gap-0.5",
          label: (0, eG.xH)(),
          style: { minWidth: 0 },
          children: eZ.Tz.map((e) => {
            let s = (a) =>
              (0, r.createElement)(C.IBt, {
                ...(null == a ? void 0 : a.triggerProps),
                key: e,
                "aria-label": (0, eG.KR)(e),
                "aria-pressed": i === e,
                className: te,
                disabledReason: t,
                style: e8,
                value: `resolution-${e}`,
                variant: "toolbar",
                onClick: () => n(e),
                children: [e, null == a ? void 0 : a.mark],
              });
            return t
              ? (0, a.jsxs)(
                  L.m_,
                  {
                    children: [
                      (0, a.jsx)(L.k$, { asChild: !0, children: s() }),
                      (0, a.jsx)(L.ZI, { side: "bottom", children: t }),
                    ],
                  },
                  e,
                )
              : (0, a.jsx)(
                  e3,
                  {
                    interceptionPoint: "configuration",
                    outputCount: 1,
                    resolution: (0, eZ.Q)(e),
                    restoreFocusFallback: o,
                    children: (e) => s(e),
                  },
                  e,
                );
          }),
        });
      }
      function tb(e) {
        let { editDisabledReason: t, onSubmit: n, session: i } = e,
          o = (0, r.useId)();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("span", {
              className:
                "flex-1 truncate text-[13px] text-dreamina-text-tertiary",
              id: o,
              style: e4,
              children: (0, eG.jB)(),
            }),
            (0, a.jsx)(tx, {
              ariaDescribedBy: o,
              busy: "submitting" === i.submitState,
              disabledReason: i.submitDisabledReason,
              editDisabledReason: t,
              label: (0, eG.K)(),
              onSubmit: n,
            }),
          ],
        });
      }
      function tx(e) {
        let {
            ariaDescribedBy: t,
            busy: n,
            commerceDisabledReason: i,
            disabledReason: r,
            editDisabledReason: o,
            label: s,
            onSubmit: l,
            proResolution: d,
            restoreFocusFallback: c,
          } = e,
          u = o ?? (r ? tw(r) : void 0) ?? i,
          m = (e) =>
            (0, a.jsx)(C.IBt, {
              ...(null == e ? void 0 : e.triggerProps),
              "aria-describedby": (function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return t.filter(Boolean).join(" ") || void 0;
              })(t, null == e ? void 0 : e.triggerProps["aria-describedby"]),
              className: e7,
              "data-testid": "image-hd-submit",
              disabledReason: u,
              loading: n,
              value: "submit",
              variant: "primary",
              onClick: l,
              children: (0, a.jsx)("span", { children: s }),
            }),
          v =
            d && c && !u && !n
              ? (0, a.jsx)(e3, {
                  outputCount: 1,
                  resolution: d,
                  restoreFocusFallback: c,
                  children: (e) => m(e),
                })
              : m();
        return u
          ? (0, a.jsxs)(L.m_, {
              children: [
                (0, a.jsx)(L.k$, { asChild: !0, children: v }),
                (0, a.jsx)(L.ZI, { side: "bottom", children: u }),
              ],
            })
          : v;
      }
      function ty(e) {
        var t;
        let n,
          {
            anchorRef: i,
            onChange: o,
            onOpenChange: s,
            open: l,
            portalContainer: d,
            session: c,
          } = e,
          u = (function (e) {
            let [t, n] = (0, r.useState)(e);
            return (
              (0, r.useEffect)(() => {
                if (e) return void n(!0);
                if (!t) return;
                let a = window.setTimeout(() => n(!1), 200);
                return () => window.clearTimeout(a);
              }, [t, e]),
              t
            );
          })(l),
          m = (0, r.useRef)(null),
          v = (0, r.useId)(),
          p =
            ((t = o),
            (n = (0, e2.u)()),
            (e) => {
              (t(e),
                null == n ||
                  n.declare({
                    surface: "imagePostEdit",
                    gesture: "hd_reference_level",
                  }));
            }),
          [f, h] = (function (e) {
            let [t, n] = (0, r.useState)(e);
            return (
              (0, r.useEffect)(() => {
                n(e);
              }, [e]),
              [t, n]
            );
          })(c.detail);
        return u
          ? (0, a.jsxs)(L.hl, {
              forceMount: !0,
              ref: m,
              align: "start",
              "aria-hidden": !l,
              "aria-labelledby": v,
              className: (0, C.cn)(
                "flex h-canvas-image-hd-detail-height w-canvas-image-hd-detail-width flex-col gap-canvas-selection-toolbar-menu-gap rounded-canvas-selection-toolbar-menu bg-canvas-selection-toolbar-menu px-canvas-selection-toolbar-menu-item-inline py-canvas-selection-toolbar-menu-item-block text-dreamina-text-primary shadow-canvas-image-hd-menu",
                !l && "pointer-events-none",
              ),
              "data-testid": "image-hd-detail-panel",
              "data-image-hd-detail-disclosure": "true",
              "data-image-hd-detail-gap": 8,
              motion: "toolbarDisclosure",
              portalContainer: d,
              side: "bottom",
              sideOffset: 8,
              onCloseAutoFocus: (e) => e.preventDefault(),
              onEscapeKeyDown: (e) => {
                var t;
                (e.preventDefault(),
                  s(!1),
                  null == (t = i.current) || t.focus({ preventScroll: !0 }));
              },
              onFocusOutside: (e) => tj(e, m),
              onOpenAutoFocus: (e) => e.preventDefault(),
              children: [
                (0, a.jsx)("div", {
                  className:
                    "w-full font-dreamina-medium text-dreamina-cn-14 leading-canvas-selection-toolbar-control text-dreamina-text-primary",
                  "data-testid": "image-hd-detail-label",
                  id: v,
                  children: (0, eG.ld)(),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex h-canvas-image-hd-detail-row-height w-full items-center gap-canvas-selection-toolbar-control-gap",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "relative flex h-5 w-canvas-image-hd-detail-track-width items-center",
                      children: (0, a.jsx)(F.KY, {
                        labelledBy: v,
                        "aria-valuetext": (0, eG.a_)(f),
                        className: "w-full",
                        disabled: !l || "submitting" === c.submitState,
                        max: 100,
                        min: 1,
                        step: 1,
                        tooltipTestId: "image-hd-detail-value-tooltip",
                        trackClassName: "shadow-canvas-video-player-track",
                        value: f,
                        onValueChange: h,
                        onValueCommit: p,
                      }),
                    }),
                    (0, a.jsx)("output", {
                      className:
                        "w-canvas-image-hd-detail-value-width text-center font-dreamina-number font-dreamina-medium text-dreamina-number-13 leading-canvas-selection-toolbar-control tabular-nums text-dreamina-text-primary",
                      children: f,
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      function tw(e) {
        if ("maximumSize" === e) return (0, eG.pe)();
      }
      function tk() {
        var e;
        null ==
          (e = document.querySelector('[data-toolbar-value="image-hd"]')) ||
          e.focus({ preventScroll: !0 });
      }
      function tS(e) {
        (0, eN.mb)(e.target) && e.preventDefault();
      }
      function tj(e, t) {
        var n;
        let a =
          null == (n = t.current)
            ? void 0
            : n.closest('[data-testid="image-hd-overlay"]');
        return (
          !!(null == a ? void 0 : a.hasAttribute("inert")) &&
          (e.preventDefault(), !0)
        );
      }
      function tC(e) {
        let {
          editAvailability: t,
          nodeDragging: n,
          port: i,
          snapshot: r,
          viewport: o,
          viewportMoving: s,
        } = e;
        return "active" !== r.status
          ? null
          : (0, a.jsx)(
              tM,
              {
                editAvailability: t,
                nodeDragging: n,
                port: i,
                snapshot: r,
                viewport: o,
                viewportMoving: s,
              },
              r.sessionId,
            );
      }
      function tM(e) {
        let {
            editAvailability: t,
            nodeDragging: n,
            port: i,
            snapshot: o,
            viewport: s,
            viewportMoving: l,
          } = e,
          d = (0, r.useMemo)(() => o.sources.map((e) => e.nodeId), [o.sources]),
          c = (0, T.Ij)(d),
          u = (0, r.useMemo)(() => {
            if ("batch" !== o.selectionKind || "normal" !== o.mode) return [];
            let e = new Set(
              o.sources.filter((e) => !(0, eZ.lr)(e)).map((e) => e.nodeId),
            );
            return c.filter((t) => e.has(t.id));
          }, [c, o.mode, o.selectionKind, o.sources]),
          m = (0, r.useMemo)(() => (0, eY.FU)(c, d.length), [c, d.length]),
          { shift: v, surfaceRefCallback: p } = (0, A.og)({
            geometry: m,
            viewport: s,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(tR, { geometry: u, viewport: s }),
            (0, a.jsx)(T.nJ, {
              "data-testid": "image-hd-overlay",
              geometry: m,
              hideWhenAnchorOutsideViewport: !0,
              interactionActive: n || l,
              offset: d.length > 1 ? 12 : 20,
              position: "bottom",
              preserveMountWhenAnchorOutsideViewport: !0,
              preserveVisibilityDuringInteraction: !0,
              viewport: s,
              zIndex: tN,
              children: (0, a.jsx)("div", {
                className: "pointer-events-auto nodrag nopan overflow-visible",
                "data-testid": "image-hd-overlay-surface",
                ref: p,
                style: {
                  maxHeight: "calc(100vh - 32px)",
                  maxWidth: "calc(100vw - 32px)",
                  transform: `translate(${v.x}px, ${v.y}px)`,
                },
                children: (0, a.jsx)(tI, {
                  editAvailability: t,
                  port: i,
                  snapshot: o,
                }),
              }),
            }),
          ],
        });
      }
      function tR(e) {
        let { geometry: t, viewport: n } = e,
          i = (0, eG.o8)();
        return t.map((e) =>
          (0, a.jsx)(
            T.af,
            {
              className: "pointer-events-none",
              "data-testid": "image-hd-unsupported-source-overlay",
              geometry: e,
              viewport: n,
              children: (0, a.jsx)("div", {
                "aria-label": i,
                className:
                  "flex size-full items-center justify-center overflow-hidden rounded-canvas-image-hd-unsupported-source bg-dreamina-bg-mask-30 p-canvas-image-hd-unsupported-source-inset font-dreamina-medium text-dreamina-cn-13 leading-canvas-image-hd-unsupported-source text-dreamina-on-media-text-tertiary opacity-canvas-image-hd-unsupported-source backdrop-blur-dreamina-small",
                role: "note",
                children: (0, a.jsx)("span", {
                  "aria-hidden": "true",
                  children: i,
                }),
              }),
            },
            e.id,
          ),
        );
      }
      function tI(e) {
        let { editAvailability: t, port: n, snapshot: i } = e,
          o = (0, eZ.Q)(i.resolution),
          s = t.available ? void 0 : t.reason,
          l = (0, r.useMemo)(() => {
            var e;
            return (e = s) ? { available: !1, reason: e } : { available: !0 };
          }, [s]),
          d = (0, r.useMemo)(
            () =>
              (0, eX.J)({
                kind: "pro",
                mode: "image-hd",
                outputCount: 1,
                resolution: o,
              }),
            [o],
          ),
          c = (0, r.useMemo)(
            () => ({
              editAvailability: l,
              onClose: n.close,
              onDetailChange: n.setDetail,
              onModeChange: n.setMode,
              onResolutionChange: n.setResolution,
              onSubmit: () =>
                void ("batch" === i.selectionKind
                  ? n.submitBatch()
                  : n.submit()),
              restoreFocusFallback: tk,
              session: i,
            }),
            [n, i, l],
          ),
          [u, m] = (0, r.useState)(void 0);
        return "pro" !== i.mode
          ? (0, a.jsx)(tt, { ...c, creditPresentation: u })
          : (0, a.jsx)(eN.c2, {
              action: d,
              vipFunctionDetails: {
                enterSource: "generate",
                surfaceKey: "image.post_edit.image-hd",
              },
              children: (e) => {
                let { state: t } = e;
                return (0, a.jsx)(tE, {
                  state: t,
                  toolbarProps: c,
                  onCreditPresentationChange: m,
                });
              },
            });
      }
      let tE = (0, r.memo)(function (e) {
        let { state: t, toolbarProps: n, onCreditPresentationChange: i } = e,
          o = (0, r.useMemo)(() => (0, eQ.w)(t), [t]),
          s = o.disabledReason;
        "unavailable" === t.status && (s = (0, m.$Lf)(t.reason));
        let l = o.creditPresentation;
        return (
          (0, r.useEffect)(() => {
            i(l);
          }, [l, i]),
          (0, a.jsx)(tt, {
            ...n,
            commerceDisabledReason: s,
            creditPresentation: l,
          })
        );
      });
      function tP(e) {
        let { notification: t, onDismiss: n } = e;
        return t
          ? "batchSubmitFailed" === t.kind
            ? (0, a.jsx)(tA, { notification: t, onDismiss: n })
            : (0, a.jsx)(tT, { notification: t, onDismiss: n })
          : null;
      }
      function tA(e) {
        let { notification: t, onDismiss: n } = e;
        return (0, a.jsxs)(v.tE, {
          label: (0, eG.$3)(),
          swipeDirection: "right",
          children: [
            (0, a.jsx)(v.HY, {
              announcement: "assertive",
              closeLabel: (0, eG.vE)(),
              dismissible: !0,
              duration: 6e3,
              open: !0,
              status: "warning",
              title: (0, eG.h$)(),
              onOpenChange: (e) => {
                e || n(t.id);
              },
            }),
            (0, a.jsx)(v.US, { label: (0, eG.K6)() }),
          ],
        });
      }
      function tT(e) {
        let { notification: t, onDismiss: n } = e;
        return (0, a.jsxs)(v.tE, {
          label: (0, eG.$3)(),
          swipeDirection: "right",
          children: [
            (0, a.jsx)(v.HY, {
              announcement: "assertive",
              closeLabel: (0, eG.vE)(),
              description: (0, eG.FJ)(),
              dismissible: !0,
              duration: 6e3,
              open: !0,
              status: "warning",
              title: (0, eG.PM)(),
              onOpenChange: (e) => {
                e || n(t.id);
              },
            }),
            (0, a.jsx)(v.US, { label: (0, eG.K6)() }),
          ],
        });
      }
      let tN = S.Xx;
      var tD = n(78296),
        tL = n(59078),
        tF = n(24548),
        t_ = n(40627),
        tz = n(51472),
        tH = n(77073),
        tO = n(49735),
        t$ = n(30531),
        tB = n(21765),
        tV = n(18650),
        tW = n(86072),
        tU = n(13363),
        tq = n(33657),
        tK = n(48216),
        tG = n(55452);
      let tY =
          "size-canvas-selection-toolbar-control rounded-canvas-selection-toolbar-control p-canvas-selection-toolbar-control-inline text-dreamina-text-primary hover:text-dreamina-text-primary active:text-dreamina-text-primary [&_svg]:size-4",
        tX = (0, r.memo)(function (e) {
          var t;
          let {
              board: n,
              download: i,
              editAvailability: r,
              fitCommand: o = "fit",
              fullscreen: s,
              items: l = [
                {
                  command: "rotate",
                  icon: (0, a.jsx)(C.Si9, { size: 16 }),
                  id: "rotate",
                  label: (0, tL.w3)(),
                },
                {
                  command: "flipHorizontal",
                  icon: (0, a.jsx)(eJ.V9, { size: 16 }),
                  id: "flip-horizontal",
                  label: (0, tL.Aj)(),
                },
                {
                  command: "flipVertical",
                  icon: (0, a.jsx)(eJ.vN, { size: 16 }),
                  id: "flip-vertical",
                  label: (0, tL.Yk)(),
                },
                {
                  command: "fit",
                  icon: (0, a.jsx)(C._06, { size: 16 }),
                  id: "fit",
                  label: (0, tL.d4)(),
                },
                {
                  command: "delete",
                  icon: (0, a.jsx)(C.k5t, { size: 16 }),
                  id: "delete",
                  label: (0, tL.Dy)(),
                  separatorBefore: !0,
                },
              ],
              onCommand: d,
              redraw: c,
              selection: u,
            } = e,
            v = !r.available && "notEditable" === r.reason;
          if (v && !i) return null;
          let p = (function (e) {
            if (!e.available)
              return "notEditable" === e.reason ? (0, tL.v2)() : (0, tL.$M)();
          })(r);
          return (0, a.jsx)(L.Bc, {
            delayDuration: 0,
            children: (0, a.jsxs)(C.M7E, {
              className:
                "nodrag nopan flex h-canvas-selection-toolbar w-fit items-center gap-canvas-selection-toolbar-gap rounded-canvas-selection-toolbar border-0 bg-dreamina-canvas-frame p-canvas-layer-board-toolbar-inset text-dreamina-text-primary shadow-dreamina-general ring-1 ring-inset ring-dreamina-stroke-secondary",
              "data-testid": "image-layer-board-layer-toolbar",
              defaultActiveValue: v
                ? "download"
                : ((null == (t = l[0]) ? void 0 : t.id) ?? "rotate"),
              label: (0, tL.RI)(),
              orientation: "horizontal",
              children: [
                v && i ? (0, a.jsx)(t0, { download: i }) : null,
                !v && c
                  ? (0, a.jsxs)(L.m_, {
                      children: [
                        (0, a.jsx)(L.k$, {
                          asChild: !0,
                          children: (0, a.jsx)(C.flD, {
                            className: tY,
                            "data-layer-command": "redraw",
                            disabledReason: c.disabledReason,
                            icon: (0, a.jsx)(tG.NL, { className: "size-4" }),
                            label: (0, m.Wxu)(),
                            value: "redraw",
                            variant: "toolbar",
                            onClick: c.onInvoke,
                          }),
                        }),
                        (0, a.jsx)(L.ZI, {
                          side: "top",
                          children: c.disabledReason ?? (0, m.Wxu)(),
                        }),
                      ],
                    })
                  : null,
                !v &&
                  l.map((e) => {
                    let t = "fit" === e.command ? o : e.command,
                      r =
                        "restoreFit" === t
                          ? { available: !0 }
                          : (0, tV.zl)(n, u, t),
                      l = p ?? (r.available ? void 0 : (0, tV.VO)(r.reason)),
                      c = "restoreFit" === t,
                      m = c ? (0, tL.UI)() : e.label,
                      v = c ? (0, a.jsx)(C.iRf, { size: 16 }) : e.icon,
                      f = (0, a.jsx)(C.flD, {
                        className: tY,
                        "data-layer-command": e.command,
                        disabledReason: l,
                        icon: v,
                        label: m,
                        value: e.id,
                        variant: "toolbar",
                        onClick: () => d(t),
                      });
                    return (0, a.jsx)(
                      tQ,
                      {
                        afterEntry:
                          e.separatorBefore && i
                            ? (0, a.jsx)(t0, { download: i })
                            : null,
                        beforeEntry:
                          e.separatorBefore && s
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(tZ, { fullscreen: s }),
                                  (0, a.jsx)(tJ, {}),
                                ],
                              })
                            : null,
                        separatorBefore: !0 === e.separatorBefore,
                        children: (0, a.jsxs)(L.m_, {
                          children: [
                            (0, a.jsx)(L.k$, { asChild: !0, children: f }),
                            (0, a.jsx)(L.ZI, { side: "top", children: l ?? m }),
                          ],
                        }),
                      },
                      e.id,
                    );
                  }),
                v || !s || l.some((e) => e.separatorBefore)
                  ? null
                  : (0, a.jsx)(tZ, { fullscreen: s }),
              ],
            }),
          });
        });
      function tQ(e) {
        let {
          afterEntry: t,
          beforeEntry: n,
          children: i,
          separatorBefore: r,
        } = e;
        return r
          ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(tJ, {}), n, i, t] })
          : i;
      }
      function tZ(e) {
        let { fullscreen: t } = e,
          n = (0, tL.p4)();
        return (0, a.jsxs)(C.IBt, {
          className:
            "h-canvas-selection-toolbar-control min-w-canvas-zero shrink-0 gap-canvas-selection-toolbar-control-gap rounded-canvas-selection-toolbar-control bg-transparent px-canvas-selection-toolbar-control-inline py-canvas-selection-toolbar-control-block font-dreamina-regular text-dreamina-cn-13 leading-canvas-selection-toolbar-control text-dreamina-text-primary transition-none motion-safe:transition-none hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-pressed active:text-dreamina-text-primary aria-disabled:bg-transparent aria-disabled:text-dreamina-text-disabled aria-disabled:hover:bg-transparent aria-disabled:hover:text-dreamina-text-disabled aria-disabled:active:bg-transparent aria-disabled:active:text-dreamina-text-disabled",
          "data-layer-command": "fullscreen",
          disabledReason: t.disabledReason,
          value: "fullscreen",
          variant: "text",
          onClick: t.onInvoke,
          children: [
            (0, a.jsx)(C.Gpr, { "aria-hidden": "true", size: 16 }),
            (0, a.jsx)("span", { children: n }),
          ],
        });
      }
      function tJ() {
        return (0, a.jsx)("span", {
          "aria-orientation": "vertical",
          className:
            "flex h-canvas-layer-board-toolbar-divider w-canvas-layer-board-toolbar-divider shrink-0 -rotate-180 items-center justify-center gap-canvas-layer-board-toolbar-divider-gap px-canvas-layer-board-toolbar-divider-inset",
          "data-testid": "image-layer-board-toolbar-separator",
          role: "separator",
          children: (0, a.jsx)("span", {
            "aria-hidden": "true",
            className:
              "h-canvas-layer-board-toolbar-divider-line w-canvas-layer-board-toolbar-divider-line shrink-0 bg-dreamina-stroke-primary",
            "data-testid": "image-layer-board-toolbar-separator-line",
          }),
        });
      }
      function t0(e) {
        let { download: t } = e,
          n = (0, m.z56)();
        return (0, a.jsxs)(L.m_, {
          children: [
            (0, a.jsx)(L.k$, {
              asChild: !0,
              children: (0, a.jsx)(C.flD, {
                className: tY,
                "data-layer-command": "download",
                disabledReason: t.disabledReason,
                icon: (0, a.jsx)(C.s3U, { size: 16 }),
                label: n,
                loading: t.loading,
                value: "download",
                variant: "toolbar",
                onClick: t.onInvoke,
              }),
            }),
            (0, a.jsx)(L.ZI, {
              side: "top",
              children: t.disabledReason ?? (t.loading ? (0, m.ImI)() : n),
            }),
          ],
        });
      }
      var t1 = n(40874),
        t2 = n(50526),
        t3 = n(51544);
      let t6 = (0, r.memo)(function (e) {
        let { snapshot: t } = e,
          n = (0, r.useMemo)(
            () =>
              "active" !== t.status ||
              t.dragging ||
              "layer" !== t.selection.kind
                ? void 0
                : { nodeId: t.nodeId, selection: t.selection },
            [t],
          ),
          a = n ? `${n.nodeId}:${n.selection.layerId}` : void 0,
          i = (0, tB.XT)({ activeKey: a, activeValue: n, retainOnExit: !0 });
        return void 0 === i.value || void 0 === i.phase
          ? null
          : (0, r.createElement)(t4, {
              ...e,
              key: i.key,
              motionPhase: i.phase,
              motionVisible: i.visible,
              nodeId: i.value.nodeId,
              onMotionComplete: i.completeMotion,
              selection: i.value.selection,
            });
      });
      function t4(e) {
        var t, n, i, s, l, d, c, u;
        let m,
          p,
          f,
          {
            api: h,
            editAvailability: g,
            nodeDragging: b,
            nodeId: x,
            motionPhase: y,
            motionVisible: w,
            onMotionComplete: k,
            selection: j,
            snapshot: C,
            viewport: M,
            viewportMoving: R,
          } = e,
          I = (0, v.QQ)(),
          { directDownloadVisible: E } = (0, o.A1)(),
          P = (0, r.useCallback)(
            (e) => h.canvas.subscribeObjectSnapshot(x, e),
            [h, x],
          ),
          A = (0, r.useCallback)(
            () => (0, t3.mf)(h.canvas.getObjectSnapshot(x)),
            [h, x],
          ),
          N = (0, r.useSyncExternalStore)(P, A, A),
          { layerId: D } = j,
          L = null == N ? void 0 : N.layers.find((e) => e.id === D),
          F = (0, r.useRef)(N && L ? { board: N, layer: L } : void 0);
        N && L && (F.current = { board: N, layer: L });
        let _ = N && L ? { board: N, layer: L } : F.current,
          z = null == _ ? void 0 : _.board,
          H = null == _ ? void 0 : _.layer,
          O = h.canvas.imageLayerBoard,
          $ = (null == O ? void 0 : O.subscribeFitRestoreCheckpoints) ?? t8,
          B = (0, r.useCallback)(() => {
            var e;
            return null == O || null == (e = O.getFitRestoreCheckpoint)
              ? void 0
              : e.call(O, x, D);
          }, [D, x, O]),
          V = (0, r.useSyncExternalStore)($, B, B),
          W = (0, r.useMemo)(() => [x], [x]),
          U = (0, T.Ij)(W),
          [q, K] = (0, r.useState)(),
          { setInlineSmartEditNodeId: G } = (0, eP.u)();
        (0, r.useLayoutEffect)(() => {
          if (q) return (G(x), () => G((e) => (e === x ? void 0 : e)));
        }, [q, x, G]);
        let Y = (0, r.useRef)(),
          X = (0, r.useRef)(),
          Q = (0, r.useRef)(),
          Z = (0, r.useRef)({ height: 0, width: 0 }),
          J = (0, r.useRef)(),
          ee = (0, r.useRef)(q);
        ee.current = q;
        let et = (0, r.useMemo)(
            () =>
              z && H
                ? U.map((e) => {
                    var t, n, a;
                    let i, r, o, s, l, d, c;
                    return (
                      (t = e),
                      (n = z),
                      (a = H),
                      (i = (0, tW.bC)(a)),
                      (r = t.width / n.width),
                      (o = t.height / n.height),
                      (s = Math.max(0, Math.min(t.width, i.x * r))),
                      (l = Math.max(0, Math.min(t.height, i.y * o))),
                      (d = Math.max(s, Math.min(t.width, (i.x + i.width) * r))),
                      (c = Math.max(
                        l,
                        Math.min(t.height, (i.y + i.height) * o),
                      )),
                      {
                        id: t.id,
                        x: t.x + s,
                        y: t.y + l,
                        width: d - s,
                        height: c - l,
                        z: t.z,
                      }
                    );
                  })
                : [],
            [U, z, H],
          ),
          en = (0, r.useCallback)(
            async (e) => {
              let t = await (0, tV.XI)(h, x, D, e);
              t.ok ||
                (0, t$.N)(I, {
                  durationMs: 4e3,
                  message: (0, tV.T0)(t),
                  status: "warning",
                });
            },
            [h, D, x, I],
          ),
          ea = (function (e, t, n, a) {
            let i = (0, r.useRef)(n);
            (0, r.useLayoutEffect)(() => {
              i.current = n;
            }, [n]);
            let o = e.canvas.materialExport,
              s = (0, r.useMemo)(() => (t ? [t.resourceId] : t5), [t]),
              [l] = (0, t_.cA)(s),
              d = (0, r.useCallback)((e) => (o ? o.subscribe(e) : t8()), [o]),
              c = (0, r.useCallback)(
                () =>
                  (null == o ? void 0 : o.getResourceDownloadRevision()) ?? 0,
                [o],
              );
            (0, r.useSyncExternalStore)(d, c, c);
            let u = (0, r.useMemo)(() => {
              var e;
              if (!t || (null == l ? void 0 : l.status) !== tF.ao.success)
                return;
              let n =
                  l.urls && "download_url" in l.urls
                    ? l.urls.download_url
                    : void 0,
                a = (0, tz.v)(n);
              if (!a) return;
              let i = (null == (e = t.name) ? void 0 : e.trim()) || l.name;
              return {
                downloadUrl: a,
                mediaType: "image",
                resourceId: t.resourceId,
                ...(i ? { suggestedFileName: i } : {}),
              };
            }, [t, l]);
            if (!u || !o || !n) return;
            let m = o.getResourceDownloadState(u);
            return {
              ...("unavailable" === m.phase
                ? { disabledReason: m.disabledReason }
                : {}),
              ...("queued" === m.phase || "transferring" === m.phase
                ? { loading: !0 }
                : {}),
              onInvoke: () => {
                i.current &&
                  o.downloadResource(u).catch((e) => {
                    (0, tH.S)(e) || a();
                  });
              },
            };
          })(
            h,
            H,
            !1 !== E,
            (0, r.useCallback)(() => {
              (0, t$.N)(I, {
                durationMs: 4e3,
                message: (0, eV._y)(),
                status: "warning",
              });
            }, [I]),
          ),
          ei =
            z && H
              ? (0, t1.q)({
                  board: z,
                  editDisabledReason: g.available
                    ? void 0
                    : "notEditable" === g.reason
                      ? (0, tL.v2)()
                      : (0, tL.$M)(),
                  multiSelected: "active" === C.status && C.members.length > 1,
                  selection: j,
                  target: (0, tU.PC)(z, H.resourceId, j),
                })
              : void 0,
          er = (0, r.useCallback)(() => {
            var e, t;
            let n = h.canvas.getObjectSnapshot(x),
              a = (0, t3.mf)(n),
              i = null == O ? void 0 : O.getSelection(x),
              r =
                (null == i ? void 0 : i.kind) === "layer"
                  ? null == a
                    ? void 0
                    : a.layers.find((e) => e.id === i.layerId)
                  : void 0;
            if (
              !a ||
              !r ||
              !h.canvas.imageLayerBoardRedraw ||
              !O ||
              !g.available
            )
              return;
            let o = (0, tU.PC)(a, r.resourceId, i);
            void 0 ===
              (0, t1.q)({
                board: a,
                editDisabledReason: void 0,
                multiSelected:
                  ((null == (e = O.getSelectedMembers(x))
                    ? void 0
                    : e.length) ?? 0) > 1,
                selection: i,
                target: o,
              }) &&
              (null == (t = Y.current) || t.cancel(),
              (Y.current = void 0),
              (X.current = void 0),
              (Q.current = void 0),
              void 0 !== J.current && clearTimeout(J.current),
              (J.current = void 0),
              K(o));
          }, [h, g.available, x, O]),
          eo = (0, r.useCallback)(
            (e, t) => {
              var n;
              let a = U[0];
              if (!h.canvas.viewport || !a) return;
              null == (n = Y.current) || n.cancel();
              let i = (0, tD.FX)(h.canvas.viewport);
              ((Y.current = i),
                (X.current = e),
                (Q.current = (0, tK.v)(t.height)),
                i.present({
                  kind: "rect",
                  rect: {
                    space: "canvas",
                    x: a.x,
                    y: a.y,
                    width: a.width,
                    height: a.height,
                  },
                  screenFixedBottomGuard: {
                    gap: 16,
                    height: t.height,
                    width: t.width,
                  },
                }));
            },
            [h.canvas.viewport, U],
          ),
          es = (0, r.useCallback)(
            (e) => {
              if (!q) return;
              Z.current = e;
              let t = (0, tK.v)(e.height);
              X.current !== q
                ? eo(q, e)
                : Q.current !== t &&
                  (void 0 !== J.current && clearTimeout(J.current),
                  (J.current = setTimeout(() => {
                    if (((J.current = void 0), ee.current !== q)) return;
                    let e = Z.current;
                    Q.current !== (0, tK.v)(e.height) && eo(q, e);
                  }, 50)));
            },
            [q, eo],
          ),
          el = (0, r.useCallback)(() => {
            var e;
            (void 0 !== J.current && clearTimeout(J.current),
              (J.current = void 0),
              null == (e = Y.current) || e.cancel(),
              (Y.current = void 0),
              (X.current = void 0),
              (Q.current = void 0),
              K(void 0));
          }, []);
        (0, r.useLayoutEffect)(
          () => () => {
            var e;
            (null == (e = Y.current) || e.cancel(),
              (Y.current = void 0),
              (X.current = void 0),
              (Q.current = void 0),
              void 0 !== J.current && clearTimeout(J.current),
              (J.current = void 0));
          },
          [],
        );
        let ed = (0, r.useMemo)(
            () =>
              h.canvas.imageLayerBoardRedraw && H
                ? { disabledReason: ei, onInvoke: er }
                : void 0,
            [h, er, ei, H],
          ),
          ec = h.canvas.actions.fullscreen,
          eu = (0, r.useCallback)(() => {
            if (!g.available) return (0, tL.$M)();
            let e = (0, t2.resolveFullscreenItemState)(ec.getState(x));
            return e.available ? void 0 : e.reason;
          }, [g, ec, x]),
          em = (0, r.useSyncExternalStore)(h.canvas.actions.subscribe, eu, eu),
          ev = g.available || "notEditingReady" === g.reason,
          [ep, ef] = (0, r.useState)(null);
        return ((0, tB.qL)({
          duration: 200,
          onComplete: k,
          origin: "top",
          surface: ep,
          visible: w,
        }),
        (t = ep),
        (n = x),
        (i = y),
        (m = (0, r.useCallback)(
          () =>
            (function (e, t) {
              let n = document.activeElement;
              if (
                !(n instanceof HTMLElement) ||
                !(null == e ? void 0 : e.contains(n))
              )
                return;
              let a =
                e.closest(".react-flow") ??
                document.querySelector(".octo-canvas-flow");
              if (!a) return;
              let i =
                  "u" > typeof CSS && "function" == typeof CSS.escape
                    ? CSS.escape(t)
                    : t.replace(/["\\]/g, "\\$&"),
                r = a.querySelector(`.react-flow__node[data-id="${i}"]`);
              (0, tO.wc)(r ?? void 0) || a.focus({ preventScroll: !0 });
            })(t, n),
          [n, t],
        )),
        (0, r.useLayoutEffect)(() => {
          "exiting" === i && m();
        }, [m, i]),
        (0, r.useLayoutEffect)(() => m, [m]),
        z)
          ? (0, a.jsx)(a.Fragment, {
              children:
                q && h.canvas.imageLayerBoardRedraw
                  ? (0, a.jsx)(T.af, {
                      className: "nodrag nopan",
                      "data-testid": "image-layer-board-inline-smart-edit",
                      geometry: U[0],
                      viewport: M,
                      children: (0, a.jsx)(tq.e, {
                        api: h,
                        board: z,
                        editDisabledReason: g.available ? void 0 : (0, tL.$M)(),
                        nodeId: x,
                        onClose: el,
                        onPointerEnter: () => void 0,
                        onSafeHotzoneGuardChange: () => void 0,
                        onToolbarSizeChange: es,
                        port: h.canvas.imageLayerBoardRedraw,
                        presentationScale: M.zoom,
                        safeHotzoneRootSelector:
                          "[data-testid='image-layer-board-inline-smart-edit']",
                        target: q,
                        toolbarStyle:
                          ((s = z),
                          (l = q),
                          (p = Number.isFinite((d = M.zoom)) && d > 0 ? d : 1),
                          {
                            ...((c =
                              "base" === (f = l.source).kind
                                ? {
                                    x: 0,
                                    y: 0,
                                    width: s.width,
                                    height: s.height,
                                  }
                                : (s.layers.find((e) => e.id === f.layerId) ??
                                  f.geometry)),
                            (u = s),
                            {
                              left: `${((c.x + c.width / 2) / u.width) * 100}%`,
                              top: `${((c.y + c.height) / u.height) * 100}%`,
                            }),
                            marginTop: 16 / p,
                            transform: `translateX(-50%) scale(${1 / p})`,
                            transformOrigin: "top center",
                          }),
                      }),
                    })
                  : (0, a.jsx)(T.nJ, {
                      "data-testid": "image-layer-board-layer-overlay",
                      geometry: et,
                      hideWhenAnchorOutsideViewport: !0,
                      interactionActive: b || R || "exiting" === y,
                      offset: 8,
                      position: "top",
                      preserveMountWhenAnchorOutsideViewport: !0,
                      preserveVisibilityDuringInteraction: !0,
                      viewport: M,
                      zIndex: S.Hd,
                      children: (0, a.jsx)("div", {
                        ...("present" === y ? {} : { inert: "" }),
                        "aria-hidden": "present" !== y || void 0,
                        className: `nodrag nopan ${(0, tB.FW)(y, "top", w)}`,
                        "data-canvas-node-overlay-presence": y,
                        "data-testid":
                          "image-layer-board-layer-overlay-surface",
                        ref: ef,
                        children: (0, a.jsx)(tX, {
                          board: z,
                          download: ea,
                          editAvailability: g,
                          fitCommand: (0, tV.fU)(z, D, V),
                          redraw: ed,
                          fullscreen: ev
                            ? {
                                ...(em ? { disabledReason: em } : {}),
                                onInvoke: () => {
                                  ec.execute(x);
                                },
                              }
                            : void 0,
                          selection: j,
                          onCommand: (e) => void en(e),
                        }),
                      }),
                    }),
            })
          : null;
      }
      let t5 = [],
        t8 = () => () => void 0,
        t9 = (0, r.lazy)(() =>
          Promise.all([n.e(3664), n.e(6562)])
            .then(n.bind(n, 96937))
            .then((e) => ({ default: e.ImageLayerBoardFullscreenEditor })),
        );
      function t7(e) {
        let {
            api: t,
            editAvailability: n,
            port: i,
            restoreNodeFocus: o,
            snapshot: s,
          } = e,
          l = (0, r.useMemo)(
            () =>
              "active" !== s.status
                ? null
                : {
                    execute: () => (i.close(), { status: "executed" }),
                    getState: () => ({ available: !0 }),
                    subscribe: () => () => void 0,
                  },
            [i, s.status],
          );
        (0, f.PK)("canvas.fullscreen", l);
        let d = (0, r.useCallback)(() => {
          "active" === s.status && i.restoreFocus(s, () => o(s.nodeId));
        }, [i, o, s]);
        return "active" !== s.status
          ? null
          : (0, a.jsx)(r.Suspense, {
              fallback: null,
              children: (0, a.jsx)(
                t9,
                {
                  api: t,
                  editAvailability: n,
                  initialTool: s.initialTool,
                  nodeId: s.nodeId,
                  onClose: i.close,
                  onCloseAutoFocus: d,
                },
                s.nodeId,
              ),
            });
      }
      var ne = n(86763),
        nt = n(88702),
        nn = n(75073),
        na = n(89899),
        ni = n(93812),
        nr = n(74198),
        no = n(92169),
        ns = n(15534),
        nl = n(72968);
      let nd = ["original", "21:9", "16:9", "4:3", "1:1", "3:4", "9:16"],
        nc = [1.5, 2, 3];
      function nu(e) {
        var t;
        let {
            confirmBusy: n = !1,
            confirmDisabledReason: i,
            interactionDisabledReason: o,
            mode: s,
            onClose: l,
            onConfirm: d,
            sources: c,
          } = e,
          [u, m] = (0, r.useState)("original"),
          [v, p] = (0, r.useState)(""),
          [f, h] = (0, r.useState)(1.5),
          g = (0, r.useRef)(void 0 !== o);
        g.current = void 0 !== o;
        let b = (0, r.useCallback)((e) => {
            g.current || m(e);
          }, []),
          x = (0, r.useCallback)((e) => {
            g.current || h(e);
          }, []),
          y = (0, r.useCallback)((e) => {
            g.current || p((0, ns.$)(e));
          }, []),
          w = (0, r.useCallback)(() => {
            if (g.current || !d) return;
            let e = c.map((e) => e.resourceId);
            "outpaint" === s
              ? d({
                  aspect: u,
                  mode: s,
                  prompt: v.trim(),
                  scale: f,
                  sourceResourceIds: e,
                  type: "batch-outpaint",
                })
              : d({ mode: s, sourceResourceIds: e, type: "batch-cutout" });
          }, [u, s, d, v, f, c]);
        return (
          (0, nl.k)(l),
          (0, a.jsx)("section", {
            "aria-label": (0, nn.Zb)(),
            className:
              "nodrag nopan nowheel pointer-events-auto absolute inset-0 z-30 flex items-end justify-center bg-dreamina-bg-black/10 pb-12",
            "data-testid": "batch-post-edit-panel",
            children: (0, a.jsxs)("div", {
              className:
                "flex max-w-[min(760px,80vw)] flex-col items-center gap-3",
              children: [
                (0, a.jsx)(nm, { sources: c }),
                "outpaint" !==
                (t = {
                  aspect: u,
                  interactionDisabledReason: o,
                  mode: s,
                  onAspectChange: b,
                  onScaleChange: x,
                  scale: f,
                }).mode
                  ? null
                  : (0, a.jsx)(nv, { ...t }),
                (0, a.jsx)(nf, {
                  confirmBusy: n,
                  confirmDisabledReason: o ?? i ?? (d ? void 0 : (0, nn.Uc)()),
                  interactionDisabledReason: o,
                  mode: s,
                  onConfirm: d ? w : void 0,
                  onPromptChange: y,
                  prompt: v,
                  sourceCount: c.length,
                }),
              ],
            }),
          })
        );
      }
      function nm(e) {
        let { sources: t } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex items-center gap-2 rounded-[14px] border border-dreamina-stroke-primary bg-dreamina-canvas-frame p-2 shadow-dreamina-dropdown backdrop-blur-dreamina-medium",
          children: [
            (0, a.jsx)("span", {
              className:
                "px-2 text-xs font-medium text-dreamina-text-secondary",
              children: (0, nn.Gh)(t.length),
            }),
            (0, a.jsx)("div", {
              className: "flex max-w-[420px] gap-1 overflow-x-auto",
              children: t.map((e) =>
                (0, a.jsx)(
                  "img",
                  {
                    alt: "",
                    className: "size-10 shrink-0 rounded-[6px] object-cover",
                    crossOrigin: "anonymous",
                    draggable: !1,
                    src: e.displayUrl,
                  },
                  e.nodeId,
                ),
              ),
            }),
          ],
        });
      }
      function nv(e) {
        let {
          aspect: t,
          interactionDisabledReason: n,
          onAspectChange: i,
          onScaleChange: r,
          scale: o,
        } = e;
        return (0, a.jsxs)(C.M7E, {
          className:
            "flex h-10 items-center gap-1 rounded-[16px] border border-dreamina-stroke-primary bg-dreamina-canvas-frame p-1 text-dreamina-text-primary shadow-dreamina-dropdown backdrop-blur-dreamina-medium",
          defaultActiveValue: "original",
          label: (0, nn.Zb)(),
          orientation: "horizontal",
          children: [
            (0, a.jsx)(np, {
              interactionDisabledReason: n,
              scale: o,
              onScaleChange: r,
            }),
            nd.map((e) =>
              (0, a.jsx)(
                C.IBt,
                {
                  "aria-pressed": t === e,
                  className:
                    "h-8 rounded-[10px] border-0 px-2 text-xs shadow-none",
                  disabledReason: n,
                  onClick: () => i(e),
                  size: "sm",
                  value: e,
                  variant: "toolbar",
                  children: "original" === e ? (0, nn.OO)() : e,
                },
                e,
              ),
            ),
          ],
        });
      }
      function np(e) {
        let { interactionDisabledReason: t, onScaleChange: n, scale: i } = e,
          r = (0, a.jsx)(C.IBt, {
            className: "h-8 rounded-[10px] border-0 px-2 text-xs shadow-none",
            disabledReason: t,
            size: "sm",
            value: "scale",
            variant: "toolbar",
            children: (0, nn.gp)(i),
          });
        return t
          ? r
          : (0, a.jsxs)(e0.rI, {
              children: [
                (0, a.jsx)(e0.ty, { asChild: !0, children: r }),
                (0, a.jsx)(e0.SQ, {
                  align: "start",
                  className: "min-w-[68px]",
                  side: "top",
                  children: nc.map((e) =>
                    (0, a.jsx)(
                      e0._2,
                      { onSelect: () => n(e), children: (0, nn.gp)(e) },
                      e,
                    ),
                  ),
                }),
              ],
            });
      }
      function nf(e) {
        let {
          confirmBusy: t,
          confirmDisabledReason: n,
          interactionDisabledReason: i,
          mode: r,
          onConfirm: o,
          onPromptChange: s,
          prompt: l,
          sourceCount: d,
        } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex h-10 w-[min(460px,70vw)] items-center gap-2 rounded-[14px] border border-dreamina-stroke-primary bg-dreamina-component-input-bg p-1 pl-3 text-dreamina-text-primary shadow-dreamina-dropdown backdrop-blur-dreamina-medium",
          children: [
            (function (e) {
              let {
                interactionDisabledReason: t,
                mode: n,
                onPromptChange: i,
                prompt: r,
                sourceCount: o,
              } = e;
              return "outpaint" !== n
                ? (0, a.jsx)("span", {
                    className:
                      "flex-1 px-1 text-xs text-dreamina-text-secondary",
                    children: (0, nn.Gh)(o),
                  })
                : (0, a.jsx)(C.TMX, {
                    label: (0, nn.X4)(),
                    className:
                      "h-8 min-h-0 flex-1 border-0 bg-transparent p-1 text-xs leading-6 text-dreamina-text-primary shadow-none placeholder:text-dreamina-text-placeholder focus:border-0",
                    disabled: void 0 !== t,
                    onChange: (e) => i(e.target.value),
                    placeholder: (0, nn.X4)(),
                    rows: 1,
                    value: r,
                  });
            })({
              interactionDisabledReason: i,
              mode: r,
              onPromptChange: s,
              prompt: l,
              sourceCount: d,
            }),
            (0, a.jsx)(C.$nd, {
              className:
                "h-8 rounded-[10px] border-0 bg-dreamina-button-primary-default px-3 text-xs text-dreamina-button-primary-text shadow-none hover:bg-dreamina-button-primary-hover active:bg-dreamina-button-primary-pressed",
              disabledReason: n,
              loading: t,
              onClick: o,
              size: "sm",
              children: (0, nn.rc)(d),
            }),
          ],
        });
      }
      var nh = n(52958),
        ng = n(57554),
        nb = n(84991),
        nx = n(81702);
      let ny = Object.freeze({
        mediaRoot: "mask-editor",
        toolbarHost: "mask-editor-node-toolbar-host",
        toolbarSurface: "mask-editor-node-toolbar-surface",
      });
      function nw(e) {
        let {
          editorLabel: t,
          interactionActive: n = !1,
          interactionBlocked: i,
          mediaSurface: r,
          nodeId: o,
          sourceSize: s,
          toolbar: l,
          viewportPresentation: d,
          viewportMoving: c,
        } = e;
        return (0, a.jsx)(nb.Y, {
          editorLabel: t,
          interactionBlocked: i,
          mediaSurface: r,
          nodeId: o,
          sourceSize: s,
          testIds: ny,
          toolbar: l,
          toolbarControlsSelector: "[data-mask-editor-controls]",
          toolbarHideWhenAnchorOutsideViewport: !0,
          toolbarInteractionActive: n,
          toolbarOffset: nx.u.toolbarOffset,
          toolbarSurfaceStyle: nk,
          viewportPresentation: d,
          viewportMoving: c,
        });
      }
      function nk(e) {
        let { mediaBounds: t, toolbarOffset: n, viewport: a } = e,
          i = nx.u.operationStatusInsetTop - n - t.height * a.zoom;
        return {
          "--mask-editor-operation-status-position": "absolute",
          "--mask-editor-operation-status-top": `${i}px`,
        };
      }
      var nS = n(45752),
        nj = n(21116);
      let nC = Object.freeze({
        mediaRoot: "smart-edit-node-editor",
        toolbarHost: "smart-edit-node-toolbar-host",
        toolbarSurface: "smart-edit-node-toolbar-surface",
      });
      function nM(e) {
        let {
            interactionActive: t = !1,
            nodeId: n,
            onToolbarHeightChange: i,
            regions: o,
            viewportPresentation: s,
            viewportMoving: l,
          } = e,
          d = (0, r.useRef)("compact"),
          c = (0, r.useRef)();
        (0, r.useEffect)(
          () => () => {
            void 0 !== c.current && clearTimeout(c.current);
          },
          [],
        );
        let u = (0, r.useCallback)(
          (e) => {
            (void 0 !== c.current && clearTimeout(c.current),
              (c.current = setTimeout(() => {
                c.current = void 0;
                let t = (0, tK.v)(e);
                t !== d.current && ((d.current = t), null == i || i());
              }, 50)));
          },
          [i],
        );
        return (0, a.jsx)(nb.Y, {
          editorLabel: o.editorLabel,
          interactionBlocked: o.interactionBlocked,
          mediaClassName: "nodrag nopan",
          mediaSurface: o.mediaSurface,
          nodeId: n,
          onToolbarHeightChange: u,
          sourceSize: o.sourceSize,
          testIds: nC,
          toolbar: o.toolbar,
          toolbarHideWhenAnchorOutsideViewport: !0,
          toolbarInteractionActive: t,
          toolbarOffset: tK.M.toolbarOffset,
          viewportPresentation: s,
          viewportMoving: l,
        });
      }
      let nR = "w-[min(420px,calc(100vw-32px))]",
        nI =
          "rounded-[16px] border-[0.5px] border-dreamina-stroke-primary bg-dreamina-bg-float px-5 py-4 font-dreamina-cn text-dreamina-cn-14 text-dreamina-text-primary shadow-dreamina-generator-float backdrop-blur-dreamina-medium",
        nE = (0, r.lazy)(() =>
          Promise.all([n.e(3068), n.e(9119), n.e(25), n.e(4593), n.e(6048)])
            .then(n.bind(n, 38019))
            .then((e) => ({ default: e.ImageAnnotationEditor })),
        ),
        nP = (0, r.lazy)(() => n.e(7427).then(n.bind(n, 4446))),
        nA = (0, r.lazy)(() =>
          n
            .e(5329)
            .then(n.bind(n, 45336))
            .then((e) => ({ default: e.MultiSizeEditorOverlay })),
        ),
        nT = (0, r.lazy)(() =>
          n
            .e(7019)
            .then(n.bind(n, 78630))
            .then((e) => ({ default: e.PanoramaEditorOverlay })),
        ),
        nN = (0, r.lazy)(() =>
          Promise.all([n.e(9494), n.e(3975)]).then(n.bind(n, 45978)),
        ),
        nD = (0, r.lazy)(() =>
          Promise.all([n.e(9494), n.e(9302)]).then(n.bind(n, 68085)),
        ),
        nL = (0, r.lazy)(() =>
          Promise.all([n.e(3068), n.e(683), n.e(835)])
            .then(n.bind(n, 27102))
            .then((e) => ({ default: e.SmartEditCommerceEditor })),
        ),
        nF = (0, r.lazy)(() =>
          n
            .e(1717)
            .then(n.bind(n, 97988))
            .then((e) => ({ default: e.ViewControlEditorOverlay })),
        ),
        n_ = (0, r.lazy)(() =>
          n
            .e(9587)
            .then(n.bind(n, 27230))
            .then((e) => ({ default: e.LightingCommerceOverlay })),
        ),
        nz = (0, r.lazy)(() =>
          Promise.all([n.e(683), n.e(7869)])
            .then(n.bind(n, 54732))
            .then((e) => ({ default: e.LayerDecomposeCommerceOverlay })),
        ),
        nH = (0, r.lazy)(() =>
          Promise.all([n.e(7057), n.e(5691)])
            .then(n.bind(n, 81222))
            .then((e) => ({ default: e.ImageCompositionEditor })),
        );
      function nO(e) {
        return "active" !== e.session.status
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(n$, { session: e.session }),
                (function (e) {
                  var t, n, i, o, s, l, d, c, u, m, v, p, f, h, g, b, x, y, w;
                  let k,
                    S,
                    j,
                    C,
                    M,
                    { session: R } = e,
                    I = (function (e) {
                      if (!e.available)
                        return "notEditable" === e.reason
                          ? (0, nn.Sp)()
                          : (0, nn.aq)();
                    })(e.editAvailability);
                  if ("product-replacement" === R.mode) {
                    let n = R.sources[0];
                    return n &&
                      (null == (t = e.port) ? void 0 : t.productReplacement) &&
                      (e.editAvailability.available ||
                        "notEditable" !== e.editAvailability.reason)
                      ? (0, a.jsx)(r.Suspense, {
                          fallback: null,
                          children: (0, a.jsx)(nB, {
                            owner: e.port.productReplacement,
                            api: e.featuresApi,
                            catalog: e.postEditCatalog,
                            source: n,
                            submission: R.submission,
                            port: e.port,
                            disabledReason: I,
                            viewportPresentation: e.viewportPresentation,
                            viewport: e.viewport,
                            viewportMoving: e.viewportMoving,
                          }),
                        })
                      : null;
                  }
                  if ("annotation" === R.mode)
                    return (null == (n = e.port) ? void 0 : n.annotation) &&
                      e.resources
                      ? (0, a.jsx)(r.Suspense, {
                          fallback: null,
                          children: (0, a.jsx)(
                            nE,
                            {
                              session: R,
                              port: e.port.annotation,
                              resources: e.resources,
                              interactionDisabledReason: I,
                              viewportPresentation: e.viewportPresentation,
                              viewport: e.viewport,
                              viewportMoving: e.viewportMoving,
                              viewportPanActive: e.viewportPanActive ?? !1,
                            },
                            R.sessionId,
                          ),
                        })
                      : null;
                  if ("composition" === R.mode)
                    return (function (e, t, n, i, r, o) {
                      let s =
                        arguments.length > 6 &&
                        void 0 !== arguments[6] &&
                        arguments[6];
                      return t && n
                        ? (0, a.jsx)(
                            nV,
                            {
                              interactionDisabledReason: r,
                              port: t,
                              resources: n,
                              session: e,
                              viewport: i,
                              viewportPresentation: o,
                              viewportPanActive: s,
                            },
                            e.sessionId,
                          )
                        : null;
                    })(
                      R,
                      e.port,
                      e.resources,
                      e.viewport,
                      I,
                      e.viewportPresentation,
                      e.viewportPanActive,
                    );
                  if (
                    "single" === R.selectionKind &&
                    "multi-size" === R.mode &&
                    R.sources[0]
                  )
                    return e.imageMultiSizeServices &&
                      e.commercial &&
                      e.canWrite
                      ? (0, a.jsx)(r.Suspense, {
                          fallback: null,
                          children: (0, a.jsx)(
                            nA,
                            {
                              catalog: e.postEditCatalog,
                              services: e.imageMultiSizeServices,
                              commercial: e.commercial,
                              source: R.sources[0],
                              editable: e.editAvailability.available,
                              canWrite: e.canWrite,
                              disabledReason: I,
                              onSubmit: e.onSubmit,
                              onClose: e.onClose,
                              viewport: e.viewport,
                              viewportPresentation: e.viewportPresentation,
                              nodeDragging: e.nodeDragging,
                              viewportMoving: e.viewportMoving,
                            },
                            R.sessionId,
                          ),
                        })
                      : null;
                  let E = { ...e, session: R };
                  if (
                    "single" === R.selectionKind &&
                    "panorama" === R.mode &&
                    R.sources[0]
                  )
                    return e.editAvailability.available ||
                      e.editAvailability.available ||
                      "notEditable" !== e.editAvailability.reason
                      ? (0, a.jsx)(r.Suspense, {
                          fallback: null,
                          children: (0, a.jsx)(
                            nT,
                            {
                              catalog: e.postEditCatalog,
                              interactionDisabledReason: I,
                              nodeDragging: e.nodeDragging,
                              onClose: e.onClose,
                              onSubmit: e.onSubmit,
                              source: R.sources[0],
                              submission: R.submission,
                              viewport: e.viewport,
                              viewportPresentation: e.viewportPresentation,
                              viewportMoving: e.viewportMoving,
                            },
                            R.sessionId,
                          ),
                        })
                      : null;
                  return "single" === R.selectionKind && "lighting" === R.mode
                    ? ((i = E),
                      (o = I),
                      (k = i.session.sources[0])
                        ? (0, a.jsx)(r.Suspense, {
                            fallback: null,
                            children: (0, a.jsx)(
                              n_,
                              {
                                catalog: i.postEditCatalog,
                                logger: i.logger,
                                interactionDisabledReason: o,
                                generateDisabledReason: o,
                                nodeDragging: i.nodeDragging,
                                onClose: i.onClose,
                                readLightingEditorMemory:
                                  i.readLightingEditorMemory,
                                writeLightingEditorMemory:
                                  i.writeLightingEditorMemory,
                                onSubmit: i.onSubmit,
                                source: k,
                                submission: i.session.submission,
                                viewport: i.viewport,
                                viewportPresentation: i.viewportPresentation,
                                viewportMoving: i.viewportMoving,
                              },
                              i.session.sessionId,
                            ),
                          })
                        : null)
                    : "single" === R.selectionKind &&
                        "layer-decompose" === R.mode
                      ? ((s = E),
                        (l = I),
                        (S = s.session.sources[0])
                          ? (0, a.jsx)(r.Suspense, {
                              fallback: null,
                              children: (0, a.jsx)(
                                nz,
                                {
                                  catalog: s.postEditCatalog,
                                  generateDisabledReason: l,
                                  interactionDisabledReason: l,
                                  initialViewportPresentation:
                                    s.session.initialViewportPresentation,
                                  nodeDragging: s.nodeDragging,
                                  onClose: s.onClose,
                                  onRequestViewportRefocus:
                                    null == (d = s.port) ? void 0 : d.refocus,
                                  onSubmit: s.onSubmit,
                                  sessionId: s.session.sessionId,
                                  source: S,
                                  submission: s.session.submission,
                                  viewport: s.viewport,
                                  viewportPresentation: s.viewportPresentation,
                                  viewportMoving: s.viewportMoving,
                                  viewportPanActive: s.viewportPanActive ?? !1,
                                },
                                s.session.sessionId,
                              ),
                            })
                          : null)
                      : "single" === R.selectionKind &&
                          "view-control" === R.mode
                        ? ((c = E),
                          (u = I),
                          (j = c.session.sources[0])
                            ? (0, a.jsx)(eN.c2, {
                                action: (0, eX.J)({ mode: "view-control" }),
                                vipFunctionDetails: {
                                  enterSource: "generate",
                                  surfaceKey: "image.post_edit.view-control",
                                },
                                children: (e) => {
                                  let { state: t } = e,
                                    n = (0, eQ.w)(t);
                                  return (0, a.jsx)(r.Suspense, {
                                    fallback: null,
                                    children: (0, a.jsx)(
                                      nF,
                                      {
                                        creditPresentation:
                                          n.creditPresentation,
                                        generateDisabledReason:
                                          u ?? n.disabledReason,
                                        interactionDisabledReason: u,
                                        nodeDragging: c.nodeDragging,
                                        onClose: c.onClose,
                                        onSubmit: c.onSubmit,
                                        source: j,
                                        submission: c.session.submission,
                                        viewport: c.viewport,
                                        viewportPresentation:
                                          c.viewportPresentation,
                                        viewportMoving: c.viewportMoving,
                                      },
                                      c.session.sessionId,
                                    ),
                                  });
                                },
                              })
                            : null)
                        : "batch" === R.selectionKind &&
                            ("outpaint" === R.mode || "cutout" === R.mode)
                          ? (function (e) {
                              let t,
                                {
                                  confirmPending: n,
                                  mode: i,
                                  onSubmitBatch: r,
                                  ...o
                                } = e;
                              return (
                                "cutout" === i &&
                                  (t = (e) => {
                                    "batch-cutout" === e.type && r(e);
                                  }),
                                (0, a.jsx)(nu, {
                                  ...o,
                                  confirmBusy: n,
                                  interactionDisabledReason:
                                    e.interactionDisabledReason,
                                  mode: i,
                                  onConfirm: t,
                                })
                              );
                            })({
                              confirmDisabledReason:
                                "submitting" === R.submission.status
                                  ? (0, nn.Qz)()
                                  : I,
                              confirmPending:
                                "submitting" === R.submission.status,
                              interactionDisabledReason: I,
                              mode: R.mode,
                              onClose: e.onClose,
                              onSubmitBatch: e.onSubmitBatch,
                              sources: R.sources,
                            })
                          : "single" === R.selectionKind &&
                              "outpaint" === R.mode
                            ? ((m = E),
                              (v = I),
                              (C = m.session.sources[0])
                                ? (0, a.jsx)(eN.c2, {
                                    action: (0, eX.J)({ type: "outpaint" }),
                                    vipFunctionDetails: {
                                      enterSource: "generate",
                                      surfaceKey: "image.post_edit.outpaint",
                                    },
                                    children: (e) => {
                                      let { state: t } = e;
                                      return (0, a.jsx)(r.Suspense, {
                                        fallback: null,
                                        children: (0, a.jsx)(
                                          nQ,
                                          {
                                            commerceView: (0, eQ.w)(t),
                                            editDisabledReason: v,
                                            interactionBlocked:
                                              m.nodeDragging ||
                                              m.viewportMoving,
                                            onClose: m.onClose,
                                            onSubmit: m.onSubmit,
                                            source: C,
                                            submission: m.session.submission,
                                            viewport: m.viewport,
                                            viewportPanActive:
                                              m.viewportPanActive ?? !1,
                                          },
                                          m.session.sessionId,
                                        ),
                                      });
                                    },
                                  })
                                : null)
                            : "single" === R.selectionKind &&
                                "cutout" === R.mode
                              ? ((p = E),
                                (f = I),
                                (0, a.jsx)(eN.c2, {
                                  action: (0, eX.J)({ type: "cutout" }),
                                  vipFunctionDetails: {
                                    enterSource: "generate",
                                    surfaceKey: "image.post_edit.cutout",
                                  },
                                  children: (e) => {
                                    var t;
                                    let n,
                                      { state: i } = e;
                                    return (n = (t = {
                                      commerceView: (0, eQ.w)(i),
                                      editDisabledReason: f,
                                      nodeDragging: p.nodeDragging,
                                      onCancelRecognition:
                                        p.onCancelCutoutRecognition,
                                      onClose: p.onClose,
                                      onFinishQuickSelect:
                                        p.onFinishCutoutQuickSelect,
                                      onRecognize: p.onRecognizeCutout,
                                      onRequestCanvasExit:
                                        p.onRequestCanvasExit,
                                      onSubmit: p.onSubmit,
                                      onUpdateDocument:
                                        p.onUpdateCutoutDocument,
                                      session: p.session,
                                      viewport: p.viewport,
                                      viewportPresentation:
                                        p.viewportPresentation,
                                      viewportMoving: p.viewportMoving,
                                    }).session.sources[0])
                                      ? (0, a.jsx)(r.Suspense, {
                                          fallback: null,
                                          children: (0, a.jsx)(nG, {
                                            ...t,
                                            source: n,
                                          }),
                                        })
                                      : null;
                                  },
                                }))
                              : "single" === R.selectionKind &&
                                  "inpainting-remove" === R.mode
                                ? ((h = E),
                                  (g = I),
                                  (0, a.jsx)(eN.c2, {
                                    action: (0, eX.J)({
                                      type: "inpainting-remove",
                                    }),
                                    vipFunctionDetails: {
                                      enterSource: "generate",
                                      surfaceKey:
                                        "image.post_edit.inpainting-remove",
                                    },
                                    children: (e) => {
                                      var t;
                                      let n,
                                        { state: i } = e;
                                      return (n = (t = {
                                        commerceView: (0, eQ.w)(i),
                                        editDisabledReason: g,
                                        nodeDragging: h.nodeDragging,
                                        onCancelRecognition:
                                          h.onCancelInpaintingRemoveRecognition,
                                        onClose: h.onClose,
                                        onFinishQuickSelect:
                                          h.onFinishInpaintingRemoveQuickSelect,
                                        onRecognize:
                                          h.onRecognizeInpaintingRemove,
                                        onRequestCanvasExit:
                                          h.onRequestCanvasExit,
                                        onSubmit: h.onSubmit,
                                        onUpdateDocument:
                                          h.onUpdateInpaintingRemoveDocument,
                                        session: h.session,
                                        viewport: h.viewport,
                                        viewportPresentation:
                                          h.viewportPresentation,
                                        viewportMoving: h.viewportMoving,
                                      }).session.sources[0])
                                        ? (0, a.jsx)(r.Suspense, {
                                            fallback: null,
                                            children: (0, a.jsx)(nY, {
                                              ...t,
                                              source: n,
                                            }),
                                          })
                                        : null;
                                    },
                                  }))
                                : "single" === R.selectionKind &&
                                    "smart-edit" === R.mode
                                  ? ((b = E),
                                    (x = I),
                                    (M = b.session.smartEdit)
                                      ? "preparing" === M.status
                                        ? (0, a.jsx)(nW, { onClose: b.onClose })
                                        : "failed" === M.status
                                          ? (0, a.jsx)(nU, {
                                              restartDisabledReason: x,
                                              onClose: b.onClose,
                                              onRestart:
                                                b.onRestartSmartEditFromCurrent,
                                            })
                                          : (0, a.jsx)(r.Suspense, {
                                              fallback: (0, a.jsx)(nW, {
                                                onClose: b.onClose,
                                              }),
                                              children: (0, a.jsx)(
                                                nq,
                                                {
                                                  editDisabledReason: x,
                                                  nodeDragging: b.nodeDragging,
                                                  onClose: b.onClose,
                                                  onExportFailure:
                                                    null == (y = b.port)
                                                      ? void 0
                                                      : y.recordSmartEditExportFailure,
                                                  onSubmit: b.onSubmit,
                                                  onToolbarHeightChange:
                                                    null == (w = b.port)
                                                      ? void 0
                                                      : w.refocus,
                                                  session: b.session,
                                                  snapshot: M,
                                                  viewport: b.viewport,
                                                  viewportPresentation:
                                                    b.viewportPresentation,
                                                  viewportMoving:
                                                    b.viewportMoving,
                                                },
                                                `${b.session.sessionId}:${M.documentIdentity}`,
                                              ),
                                            })
                                      : null)
                                  : null;
                })({ ...e, session: e.session }),
              ],
            });
      }
      function n$(e) {
        var t;
        let n,
          { session: a } = e,
          i = (0, v.Yi)(),
          o = a.submission,
          s =
            "failed" === o.status
              ? "failed" !== (n = (t = a).submission).status
                ? (0, nn.Qv)()
                : "selectionKind" in t && "batch" === t.selectionKind
                  ? (0, eV.zh)()
                  : n.failureReason
                    ? (0, no.Cp)(n.failureReason)
                    : "composition" === t.mode
                      ? (0, ni.OC)(n.message)
                      : "annotation" === t.mode
                        ? ((0, ni.tI)(n.message) ?? (0, na.Y)("failed"))
                        : (0, nn.Qv)()
              : "";
        return (
          (0, r.useEffect)(() => {
            if ("failed" === o.status && i)
              return i({
                announcement: "assertive",
                closeLabel: (0, nn.l2)(),
                dismissible: !0,
                id: `image-post-edit-submission-failed:${a.sessionId}`,
                status: "warning",
                title: s,
              });
          }, [s, i, a.sessionId, o.status]),
          null
        );
      }
      let nB = (0, r.lazy)(() =>
        Promise.all([n.e(3411), n.e(9494), n.e(6673), n.e(6073)])
          .then(n.bind(n, 4752))
          .then((e) => ({ default: e.ProductReplacementOverlay })),
      );
      function nV(e) {
        let {
            interactionDisabledReason: t,
            port: n,
            resources: i,
            session: o,
            viewport: s,
            viewportPresentation: l,
            viewportPanActive: d,
          } = e,
          c = (0, r.useMemo)(
            () => [o.intent.sourceNodeId],
            [o.intent.sourceNodeId],
          ),
          u = (0, T.Ij)(c)[0];
        return !u || u.width <= 0 || u.height <= 0
          ? null
          : (0, a.jsx)(nr.a, {
              children: (0, a.jsx)(r.Suspense, {
                fallback: null,
                children: (0, a.jsx)(nH, {
                  anchor: u,
                  interactionDisabledReason: t,
                  port: n,
                  resources: i,
                  session: o,
                  viewport: s,
                  viewportPresentation: l,
                  viewportPanActive: d,
                }),
              }),
            });
      }
      function nW(e) {
        let t,
          { onClose: n } = e;
        return (
          (t = (0, v.Yi)()),
          (0, r.useEffect)(() => {
            if (t)
              return t({
                id: "smart-edit-preparing",
                status: "loading",
                title: (0, nn.__)(),
              });
          }, [t]),
          (0, nl.k)(n),
          (0, a.jsx)(ng.r, {
            ariaBusy: !0,
            editorLabel: (0, nn.GS)().editor,
            liveStatus: (0, a.jsx)("p", {
              className: "sr-only",
              role: "status",
              children: (0, nn.__)(),
            }),
            onCancel: n,
            rootTestId: "smart-edit-preparation",
            toolbar: null,
          })
        );
      }
      function nU(e) {
        var t, n, i;
        let { onClose: r, onRestart: o, restartDisabledReason: s } = e;
        (0, nl.k)(r);
        let l = (0, nn.GS)();
        return (0, a.jsx)(ng.r, {
          editorLabel: l.editor,
          onCancel: r,
          rootTestId: "smart-edit-preparation",
          stageClassName: nR,
          stageTestId: "smart-edit-preparation-stage",
          toolbar:
            ((t = !0),
            (n = o),
            (i = s),
            t && n
              ? (0, a.jsx)(C.$nd, {
                  disabledReason: i,
                  onClick: n,
                  children: (0, nn.iY)(),
                })
              : null),
          children: (0, a.jsx)("div", {
            className: nI,
            role: "alert",
            children: (0, nn.BI)(),
          }),
        });
      }
      function nq(e) {
        let {
            editDisabledReason: t,
            nodeDragging: n,
            onClose: i,
            onExportFailure: o,
            onSubmit: s,
            onToolbarHeightChange: l,
            session: d,
            snapshot: c,
            viewport: u,
            viewportPresentation: m,
            viewportMoving: v,
          } = e,
          p = (0, r.useCallback)(
            (e) =>
              (0, a.jsx)(nM, {
                interactionActive: n || v,
                nodeId: c.source.nodeId,
                onToolbarHeightChange: l,
                regions: e,
                viewportPresentation: m,
                viewportMoving: v,
              }),
            [n, l, c.source.nodeId, v, m],
          ),
          f = nZ(t),
          h = (0, r.useCallback)(
            async (e) =>
              f.current
                ? { status: "idle" }
                : { status: (await s(e)).ok ? "accepted" : "idle" },
            [f, s],
          ),
          g = (0, r.useCallback)(
            (e) => {
              "composite-export-failed" === e.code && (null == o || o());
            },
            [o],
          );
        return (0, a.jsx)(nL, {
          initialDocument: c.document,
          initialModelName: c.modelName,
          initialOutputResolution: c.outputResolution,
          interactionDisabledReason: t,
          onCancel: i,
          onError: g,
          onSubmit: h,
          operationState:
            "submitting" === d.submission.status
              ? { kind: "busy", message: (0, nn.Qz)() }
              : { kind: "idle" },
          presentationScale: u.zoom,
          renderPresentation: p,
          renderResolutionUnavailable: (e) =>
            (0, a.jsx)(nK, { onClose: i, reason: e }),
          source: c.source,
        });
      }
      function nK(e) {
        let { onClose: t, reason: n } = e;
        return (
          (0, nl.k)(t),
          (0, a.jsx)(ng.r, {
            editorLabel: (0, nn.GS)().editor,
            onCancel: t,
            rootTestId: "smart-edit-resolution-unavailable",
            stageClassName: nR,
            stageTestId: "smart-edit-resolution-unavailable-stage",
            toolbar: null,
            children: (0, a.jsx)("div", {
              className: nI,
              role: "alert",
              children: n,
            }),
          })
        );
      }
      function nG(e) {
        var t;
        let {
            commerceView: n,
            editDisabledReason: i,
            nodeDragging: o,
            onCancelRecognition: s,
            onClose: l,
            onFinishQuickSelect: d,
            onRecognize: c,
            onRequestCanvasExit: u,
            onSubmit: m,
            onUpdateDocument: p,
            session: f,
            source: h,
            viewport: g,
            viewportPresentation: b,
            viewportMoving: x,
          } = e,
          y = nZ(i);
        ((0, r.useEffect)(() => {
          var e;
          (f.sessionId,
            (null == (e = f.cutout) ? void 0 : e.status) !== "idle" ||
              i ||
              c("initial"));
        }, [i, c, null == (t = f.cutout) ? void 0 : t.status, f.sessionId]),
          (function (e) {
            let { onCancel: t, onRequestCanvasExit: n, session: a } = e,
              i = (0, v.QQ)(),
              o = (0, r.useRef)(null);
            ((0, r.useEffect)(() => {
              var e, r;
              a.sessionId;
              let s = a.cutout,
                l = null == s ? void 0 : s.status;
              if ("recognizing" === l) {
                o.current = i({
                  action: { label: (0, nn.p_)(), onSelect: t },
                  durationMs: null,
                  id: nh.d,
                  status: "loading",
                  title: (0, nn.jM)(),
                });
                return;
              }
              if ("failed" === l) {
                (i({
                  announcement: "assertive",
                  closeLabel: (0, nn.l2)(),
                  dismissible: !0,
                  durationMs: null,
                  id: nh.d,
                  status: "warning",
                  title: (0, nn.x0)(),
                }),
                  (o.current = null),
                  n());
                return;
              }
              ((null == s ? void 0 : s.status) === "ready" &&
                ("empty" !== (r = s.document).initialMask.kind ||
                  r.strokes.some((e) => "eraser" !== e.tool))) ||
                (null == (e = o.current) || e.call(o), (o.current = null));
            }, [t, n, i, a.cutout, a.sessionId]),
              (0, r.useEffect)(
                () => () => {
                  var e;
                  return null == (e = o.current) ? void 0 : e.call(o);
                },
                [],
              ));
          })({ onCancel: l, onRequestCanvasExit: u, session: f }));
        let w = (0, r.useCallback)(
            (e) => {
              y.current || m(e);
            },
            [y, m],
          ),
          k = (0, r.useCallback)(
            (e) => {
              y.current || p(e);
            },
            [y, p],
          ),
          S = nX(h.nodeId, b, o, x),
          j = f.cutout;
        if (!j) return null;
        let C = "submitting" === f.submission.status;
        return (0, a.jsx)(nN, {
          confirmDisabledReason: C ? (0, nn.Qz)() : (i ?? n.disabledReason),
          confirmPending: C,
          creditPresentation: n.creditPresentation,
          interactionDisabledReason: i,
          onCancel: l,
          onCancelRecognition: s,
          onConfirm: w,
          onFinishQuickSelect: d,
          onMaskDocumentChange: k,
          onRequestInitialMask: () => {
            i || c("initial");
          },
          onRequestCanvasExit: u,
          onRequestQuickSelect: () => {
            i || c("quick-select");
          },
          presentationScale: g.zoom,
          recognitionDisabledReason: i,
          renderPresentation: S,
          snapshot: j,
          source: h,
        });
      }
      function nY(e) {
        let {
            commerceView: t,
            editDisabledReason: n,
            nodeDragging: i,
            onCancelRecognition: o,
            onClose: s,
            onFinishQuickSelect: l,
            onRecognize: d,
            onRequestCanvasExit: c,
            onSubmit: u,
            onUpdateDocument: m,
            session: v,
            source: p,
            viewport: f,
            viewportPresentation: h,
            viewportMoving: g,
          } = e,
          b = v.inpaintingRemove,
          x = nZ(n),
          y = (0, r.useCallback)(
            (e) => {
              x.current || u(e);
            },
            [x, u],
          ),
          w = (0, r.useCallback)(
            (e) => {
              x.current || m(e);
            },
            [x, m],
          ),
          k = nX(p.nodeId, h, i, g);
        if (!b) return null;
        let S = "submitting" === v.submission.status;
        return (0, a.jsx)(nD, {
          confirmBusy: S,
          confirmDisabledReason: n,
          creditPresentation: t.creditPresentation,
          editorSessionId: v.sessionId,
          generationDisabledReason: S ? (0, nn.Qz)() : (n ?? t.disabledReason),
          interactionDisabledReason: n,
          onCancel: s,
          onCancelRecognition: o,
          onConfirm: y,
          onFinishQuickSelect: l,
          onMaskDocumentChange: w,
          onRequestCanvasExit: c,
          onRequestQuickSelect: () => {
            n || d();
          },
          presentationScale: f.zoom,
          renderPresentation: k,
          snapshot: b,
          source: p,
        });
      }
      function nX(e, t, n, i) {
        return (0, r.useCallback)(
          (r) =>
            (0, a.jsx)(nw, {
              ...r,
              interactionActive: n || i,
              nodeId: e,
              viewportPresentation: t,
              viewportMoving: i,
            }),
          [n, e, i, t],
        );
      }
      function nQ(e) {
        let {
            commerceView: t,
            editDisabledReason: n,
            interactionBlocked: i,
            onClose: o,
            onSubmit: s,
            source: l,
            submission: d,
            viewport: c,
            viewportPanActive: u,
          } = e,
          m = (0, r.useMemo)(() => [l.nodeId], [l.nodeId]),
          v = (0, T.Ij)(m)[0],
          [p, f] = (0, r.useState)(() =>
            (0, nj.bT)({
              frame: (0, nS.XQ)({
                scale: 1.5,
                sourceHeight: l.height,
                sourceWidth: l.width,
                targetAspect: "original",
              }),
            }),
          ),
          h = "submitting" === d.status,
          g = nZ(i || void 0 !== n ? "blocked" : void 0),
          b = (0, r.useCallback)(
            (e) => {
              g.current || s(e);
            },
            [g, s],
          ),
          x = (0, r.useCallback)(
            (e) => {
              g.current || f(e);
            },
            [g],
          );
        return !v || v.width <= 0 || v.height <= 0
          ? null
          : (0, a.jsx)(nr.a, {
              children: (0, a.jsx)(nP, {
                anchor: v,
                confirmDisabledReason: h
                  ? (0, nn.Qz)()
                  : (n ?? t.disabledReason),
                confirmPending: h,
                creditPresentation: t.creditPresentation,
                interactionBlocked: i,
                interactionDisabledReason: n,
                onCancel: o,
                onChange: x,
                onConfirm: b,
                source: l,
                value: p,
                viewport: c,
                viewportPanActive: u,
              }),
            });
      }
      function nZ(e) {
        let t = (0, r.useRef)(void 0 !== e);
        return ((t.current = void 0 !== e), t);
      }
      var nJ = n(44286),
        n0 = n(13072),
        n1 = n(41180),
        n2 = n(6958),
        n3 = n(70446),
        n6 = n(56610),
        n4 = n(42944);
      let n5 = (e) => e.identity;
      var n8 = n(54325),
        n9 = n(24620),
        n7 = n(7606),
        ae = n(7379);
      let at = (0, r.memo)(function (e) {
          let { handoff: t, targetLabel: n } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              [t.displayed, t.candidate].map((e) => {
                var n, i;
                return e
                  ? (0, a.jsx)(
                      n4.g,
                      {
                        identity: e.identity,
                        src: e.src,
                        alt: e.alt,
                        hidden:
                          e.identity !==
                            (null == (n = t.displayed) ? void 0 : n.identity) ||
                          t.showPlaceholder,
                        crossOrigin: "anonymous",
                        decoding: "async",
                        draggable: !1,
                        className:
                          "absolute inset-0 block h-full w-full object-contain",
                        "data-testid":
                          e.identity ===
                          (null == (i = t.displayed) ? void 0 : i.identity)
                            ? "media-history-view-image"
                            : "media-history-view-image-candidate",
                        "data-media-history-resource-id": e.resourceId,
                        onReady: () => t.onReady(e),
                        onFailure: () => t.onFailure(e),
                      },
                      e.identity,
                    )
                  : null;
              }),
              t.showPlaceholder
                ? (0, a.jsxs)("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    "data-testid": "media-history-image-placeholder",
                    children: [
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        role: t.failed ? "alert" : "status",
                        children: t.failed ? (0, m.RJQ)(n) : (0, m.Omj)(n),
                      }),
                      t.failed
                        ? (0, a.jsx)(C.$nd, {
                            size: "sm",
                            variant: "secondary",
                            onClick: t.retry,
                            children: (0, eV.M)(),
                          })
                        : (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            className: `absolute inset-0 ${ae.aQ}`,
                            "data-loading-appearance": "skeleton",
                            "data-testid": "media-history-image-loading",
                            children: (0, a.jsx)("span", {
                              "aria-hidden": "true",
                              className: `pointer-events-none absolute inset-0 ${ae.KR}`,
                            }),
                          }),
                    ],
                  })
                : null,
            ],
          });
        }),
        an =
          "flex items-center gap-canvas-media-result-history-action-gap rounded-canvas-media-node-frame bg-dreamina-block-primary-default p-canvas-media-history-view-control-inset backdrop-blur-dreamina-small",
        aa = (0, C.cn)(
          "select-none h-canvas-media-history-view-control leading-canvas-selection-toolbar-control min-w-canvas-zero rounded-canvas-media-node-preview px-canvas-media-history-view-action-gap py-canvas-media-history-view-control-inset aria-pressed:active:bg-dreamina-block-secondary-pressed",
          n8.y,
        ),
        ai = 1e3 / 60,
        ar = { height: 900, width: 1440 },
        ao = "media-history-view-description",
        as = (0, r.memo)(function (e) {
          var t;
          let { writeChromeVisible: n } = (0, o.A1)(),
            i = (0, C.DFZ)(),
            s = (0, r.useRef)(null),
            [l, d] = (0, r.useState)(null),
            c = (0, r.useCallback)((e) => {
              ((s.current = e), d(e));
            }, []),
            u = (0, r.useRef)(e.onOpenChange);
          ((u.current = e.onOpenChange),
            (0, f.SX)(l, { contextId: "mediaFullscreen" }));
          let v = (0, r.useMemo)(
            () => ({
              getState: () => ({ available: !0 }),
              execute: () => (u.current(!1), { status: "executed" }),
              subscribe: () => () => void 0,
            }),
            [],
          );
          (0, f.PK)("canvas.fullscreen", v);
          let p = n && void 0 !== e.setPrimary,
            h = e.items.length > 1,
            g = e.items.find((t) => t.id === e.currentId) ?? e.items[0],
            b = (function (e, t, n) {
              var a, i;
              let [o, s] = (0, r.useState)(0),
                [l, d] = (0, r.useState)(),
                [c, u] = (0, r.useState)(!1),
                m = (0, r.useRef)(),
                v = (0, r.useRef)(),
                p = JSON.stringify([
                  null == e ? void 0 : e.id,
                  null == e || null == (a = e.imagePreview) ? void 0 : a.src,
                ]),
                [f, h] = (0, r.useState)(!1),
                [g, b] = (0, r.useState)(),
                x =
                  n &&
                  (null == e ? void 0 : e.status) === "ready" &&
                  ("image" === e.mediaType || void 0 !== e.imagePreview);
              ((0, r.useLayoutEffect)(() => {
                x || b(void 0);
              }, [x]),
                (0, r.useLayoutEffect)(() => {
                  v.current = void 0;
                }, [x, null == e ? void 0 : e.id]),
                (0, r.useLayoutEffect)(
                  () => (
                    u(!1),
                    () => {
                      var e;
                      (null == (e = m.current) || e.abort(),
                        (m.current = void 0));
                    }
                  ),
                  [x, p],
                ));
              let y =
                  null == e || null == (i = e.imagePreview)
                    ? void 0
                    : i.recover,
                w = (0, r.useCallback)(() => {
                  var t;
                  if (!x) return;
                  if (!y) return void s((e) => e + 1);
                  null == (t = m.current) || t.abort();
                  let n = new AbortController();
                  ((m.current = n),
                    (v.current = null == e ? void 0 : e.id),
                    u(!0),
                    (async () => {
                      try {
                        let e = await y(n.signal);
                        if (n.signal.aborted) return;
                        if (!e) throw Error("Recovered image URL unavailable");
                        (d({ key: p, url: e }), s((e) => e + 1));
                      } catch {
                        var e;
                        n.signal.aborted ||
                          b(null == (e = S.current) ? void 0 : e.identity);
                      } finally {
                        m.current !== n ||
                          n.signal.aborted ||
                          ((m.current = void 0), u(!1));
                      }
                    })());
                }, [x, y, p, null == e ? void 0 : e.id]),
                k = (0, r.useMemo)(() => {
                  if (!x || !(null == e ? void 0 : e.imagePreview)) return;
                  let t =
                    (null == l ? void 0 : l.key) === p
                      ? l.url
                      : e.imagePreview.src;
                  return {
                    src: t,
                    alt: e.imagePreview.alt,
                    identity: JSON.stringify([e.id, t, o]),
                    resourceId: e.id,
                    label: e.label,
                    ratio: e.ratio,
                  };
                }, [x, e, o, l, p]),
                S = (0, r.useRef)(k);
              S.current = k;
              let j = void 0 !== k && g === k.identity,
                {
                  displayed: C,
                  candidate: M,
                  promote: R,
                  discard: I,
                } = (0, n4.D)({
                  request: j || c ? void 0 : k,
                  available: x,
                  clearDisplayed: !x,
                  getIdentity: n5,
                }),
                E =
                  void 0 !== C &&
                  t.some((e) => e.id === C.resourceId && "ready" === e.status);
              (0, r.useLayoutEffect)(() => {
                C && !E && I(C);
              }, [I, C, E]);
              let P = E
                  ? C.identity === (null == k ? void 0 : k.identity)
                    ? k
                    : C
                  : void 0,
                A =
                  x &&
                  (c || !k || (null == P ? void 0 : P.identity) !== k.identity);
              (0, r.useLayoutEffect)(() => {
                if (!A) return void h(!1);
                if (j) return void h(!0);
                let e = setTimeout(() => h(!0), 150);
                return () => clearTimeout(e);
              }, [A, j]);
              let T = A && (!P || f || j);
              return {
                active: x,
                displayed: P,
                candidate: M,
                pending: A,
                showPlaceholder: T,
                presented: T ? void 0 : P,
                failed: j && !c,
                onReady: R,
                onFailure: (0, r.useCallback)(
                  (e) => {
                    var t;
                    ((null == (t = S.current) ? void 0 : t.identity) ===
                      e.identity &&
                      (b(e.identity), y && v.current !== e.resourceId && w()),
                      I(e));
                  },
                  [I, y, w],
                ),
                retry: w,
              };
            })(g, e.items, e.open && ("preview" === e.mode || !h)),
            x = (0, r.useCallback)(
              (t) => {
                var n, a, i;
                if (
                  !(
                    t.defaultPrevented ||
                    ((n = t.target) instanceof Element &&
                      null !==
                        n.closest('input, textarea, [contenteditable="true"]'))
                  )
                ) {
                  if ("preview" !== e.mode && ad(t, "canvas.fullscreen")) {
                    (t.preventDefault(),
                      t.stopPropagation(),
                      e.onModeChange("preview"));
                    return;
                  }
                  if (ad(t, "canvas.historyGrid")) {
                    if (!h) return;
                    (t.preventDefault(),
                      t.stopPropagation(),
                      e.onModeChange("grid"));
                    return;
                  }
                  if ("preview" === e.mode) {
                    if (
                      " " === t.key &&
                      (null == g ? void 0 : g.mediaType) === "video"
                    ) {
                      let e = t.target;
                      if (
                        e instanceof Element &&
                        e.closest('button, input, [role="slider"]')
                      )
                        return;
                      (t.preventDefault(),
                        t.stopPropagation(),
                        null == (i = s.current) ||
                          null ==
                            (a = i.querySelector(
                              '[data-testid="media-history-view-stage"] video',
                            )) ||
                          a.click());
                      return;
                    }
                    "ArrowDown" === t.key || "ArrowRight" === t.key
                      ? (t.preventDefault(), e.onStepCurrent(1))
                      : ("ArrowUp" === t.key || "ArrowLeft" === t.key) &&
                        (t.preventDefault(), e.onStepCurrent(-1));
                  }
                }
              },
              [null == g ? void 0 : g.mediaType, h, e],
            );
          return (0, a.jsx)(C.lGe, {
            open: e.open,
            onOpenChange: e.onOpenChange,
            children: (0, a.jsxs)(C.Cff, {
              ref: c,
              onOpenAutoFocus: (e) => {
                var t;
                (e.preventDefault(), null == (t = s.current) || t.focus());
              },
              appearance: "bare",
              "aria-describedby": ao,
              className: (0, C.cn)(
                "pointer-events-none block h-screen w-screen max-h-none max-w-none rounded-canvas-video-fullscreen-shell border-0 text-dreamina-text-primary shadow-canvas-media-history-view-shell",
                "light" === i
                  ? "bg-dreamina-bg-surface"
                  : "bg-dreamina-bg-black",
              ),
              "data-media-history-view-mode": e.mode,
              "data-testid": "media-history-view-dialog",
              onCloseAutoFocus: e.onCloseAutoFocus,
              onKeyDown: x,
              children: [
                (0, a.jsx)(C.L33, {
                  className: "sr-only",
                  children: (0, m.AgZ)(e.title),
                }),
                (0, a.jsx)(C.rrK, {
                  className: "sr-only",
                  id: ao,
                  children: (0, m.Qmz)(e.items.length),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "relative flex h-full w-full flex-col bg-dreamina-bg-body px-canvas-media-history-view-inset pb-canvas-media-history-view-bottom-inset pt-canvas-media-history-view-inset",
                  children: [
                    (0, a.jsx)(ac, {
                      gridActions:
                        "grid" === e.mode && h ? e.gridActions : void 0,
                      mediaType: null == g ? void 0 : g.mediaType,
                      gridAvailable: h,
                      mode: "grid" === e.mode && h ? "grid" : "preview",
                      writeChromeVisible: n,
                      onModeChange: e.onModeChange,
                    }),
                    "grid" === e.mode && h
                      ? (0, a.jsx)(af, {
                          currentId: e.currentId,
                          items: e.items,
                          primaryId: e.primaryId,
                          selectionAvailable: p,
                          selectionDisabledReason:
                            null == (t = e.setPrimary)
                              ? void 0
                              : t.disabledReason,
                          onSelectItem: (t) => {
                            var n;
                            return null == (n = e.setPrimary)
                              ? void 0
                              : n.onInvoke(t);
                          },
                          onPreviewItem: (t) => {
                            (e.onCurrentChange(t), e.onModeChange("preview"));
                          },
                        })
                      : (0, a.jsx)(av, {
                          imageHandoff: b,
                          currentId: e.currentId,
                          items: e.items,
                          primaryId: e.primaryId,
                          onCurrentChange: e.onCurrentChange,
                          onStepCurrent: e.onStepCurrent,
                        }),
                  ],
                }),
              ],
            }),
          });
        });
      function al(e) {
        return (0, f.G4)(e);
      }
      function ad(e, t) {
        if (
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          e.nativeEvent.isComposing
        )
          return !1;
        let n = e.key.toLowerCase();
        return al(t).displayLabels.some((e) => e.toLowerCase() === n);
      }
      function ac(e) {
        return (0, a.jsxs)("div", {
          className:
            "pointer-events-auto absolute inset-x-canvas-media-history-view-inset top-5 flex h-canvas-video-fullscreen-close items-center justify-between gap-canvas-media-history-view-toolbar-gap",
          "data-testid": "media-history-view-header",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex min-w-canvas-zero items-center gap-canvas-media-history-view-toolbar-gap",
              children: [
                (0, a.jsx)(L.Bc, {
                  delayDuration: 300,
                  children: (0, a.jsxs)("div", {
                    "aria-label": (0, m.yZ3)(),
                    className: an,
                    role: "group",
                    children: [
                      (0, a.jsx)(n2.f, {
                        actionId: "canvas.fullscreen",
                        label: (0, m.hJK)(),
                        showShortcut: "preview" !== e.mode,
                        children: (0, a.jsx)(C.$nd, {
                          "aria-keyshortcuts":
                            "preview" !== e.mode
                              ? al("canvas.fullscreen").ariaKeyShortcuts
                              : void 0,
                          "aria-label": (0, m.hJK)(),
                          "aria-pressed": "preview" === e.mode,
                          className: (0, C.cn)(
                            aa,
                            "w-canvas-media-history-view-control",
                          ),
                          "data-testid": "media-history-view-preview-mode",
                          size: "icon",
                          variant: "toolbar",
                          onClick: () => e.onModeChange("preview"),
                          children: (0, a.jsx)(C.E80, {
                            className: "pointer-events-none size-4",
                            size: 16,
                          }),
                        }),
                      }),
                      (0, a.jsx)(n2.f, {
                        actionId: "canvas.historyGrid",
                        label: (0, m.lNN)(),
                        showShortcut: e.gridAvailable,
                        children: (0, a.jsx)(C.$nd, {
                          "aria-keyshortcuts": e.gridAvailable
                            ? al("canvas.historyGrid").ariaKeyShortcuts
                            : void 0,
                          "aria-label": (0, m.lNN)(),
                          "aria-pressed": "grid" === e.mode && e.gridAvailable,
                          className: (0, C.cn)(
                            aa,
                            "w-canvas-media-history-view-control",
                          ),
                          "data-testid": "media-history-view-grid-mode",
                          disabledReason: e.gridAvailable
                            ? void 0
                            : (0, m.rA8)(),
                          size: "icon",
                          variant: "toolbar",
                          onClick: () => e.onModeChange("grid"),
                          children: (0, a.jsx)(C.vtc, {
                            className: "pointer-events-none size-4",
                            size: 16,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                e.gridActions
                  ? (0, a.jsxs)("div", {
                      className: an,
                      "data-testid": "media-history-view-grid-actions",
                      children: [
                        (0, a.jsx)(au, {
                          action: e.gridActions.downloadAll,
                          icon: (0, a.jsx)(C.s3U, {
                            className: "pointer-events-none size-4",
                            size: 16,
                          }),
                          label: (0, m.ZAZ)(),
                          testId: "media-history-view-download-all",
                        }),
                        e.writeChromeVisible
                          ? (0, a.jsx)(au, {
                              action: e.gridActions.applyAll,
                              icon:
                                "video" === e.mediaType
                                  ? (0, a.jsx)(C.CL5, {
                                      className: "pointer-events-none size-4",
                                      size: 16,
                                    })
                                  : (0, a.jsx)(C.uqk, {
                                      className: "pointer-events-none size-4",
                                      size: 16,
                                    }),
                              label: (0, m.XQy)(),
                              testId: "media-history-view-apply-all",
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "pointer-events-auto flex items-center gap-canvas-media-history-view-action-gap",
              children: (0, a.jsx)(C.HMX, {
                asChild: !0,
                children: (0, a.jsx)(C.$nd, {
                  "aria-label": (0, m.CLQ)(),
                  className:
                    "size-canvas-video-fullscreen-close min-w-canvas-video-fullscreen-close shrink-0 rounded-canvas-video-fullscreen-close bg-dreamina-block-primary-default p-canvas-video-fullscreen-close-padding text-dreamina-text-primary hover:bg-dreamina-block-primary-hover active:bg-dreamina-block-primary-pressed",
                  "data-testid": "media-history-view-close",
                  size: "icon",
                  variant: "text",
                  children: (0, a.jsx)(C.USm, { size: 20 }),
                }),
              }),
            }),
          ],
        });
      }
      function au(e) {
        let t = !!e.action.loading,
          n = (0, r.useRef)(!e.action.disabledReason && !e.action.loading);
        e.action.disabledReason || e.action.loading || (n.current = !0);
        let [i, o] = (0, r.useState)(t);
        (0, r.useEffect)(() => {
          if (!t) return void o(!1);
          let e = setTimeout(() => o(!0), 150);
          return () => clearTimeout(e);
        }, [t]);
        let s =
          (n.current &&
            !0 === e.action.transientUnavailable &&
            !e.action.loading) ||
          (t && !i);
        return (0, a.jsxs)(C.$nd, {
          busy: e.action.loading,
          "data-transient-grace": s || void 0,
          "data-testid": e.testId,
          disabled: e.action.loading,
          disabledReason: e.action.disabledReason,
          className: (0, C.cn)(
            aa,
            "gap-canvas-media-result-history-action-gap text-dreamina-cn-13 font-dreamina-medium",
            s &&
              "disabled:text-dreamina-text-primary aria-disabled:text-dreamina-text-primary [&:disabled_img]:opacity-dreamina-media-action-visible [&[aria-disabled=true]_img]:opacity-dreamina-media-action-visible",
          ),
          size: "sm",
          variant: "toolbar",
          onClick: () => void e.action.onInvoke(),
          children: [
            e.action.loading && i
              ? (0, a.jsx)(C.mPE, {
                  className:
                    "pointer-events-none size-4 motion-safe:animate-spin",
                  size: 16,
                })
              : e.icon,
            (0, a.jsx)("span", {
              className: "leading-canvas-selection-toolbar-control",
              children: e.label,
            }),
          ],
        });
      }
      function am() {
        var e, t, n;
        return (
          (null == (t = (n = window).matchMedia) ||
          null == (e = t.call(n, "(prefers-reduced-motion: reduce)"))
            ? void 0
            : e.matches) ?? !1
        );
      }
      function av(e) {
        var t, n;
        let { items: i, onCurrentChange: o } = e,
          s = Math.max(
            0,
            i.findIndex((t) => t.id === e.currentId),
          ),
          l = i[s],
          d = (0, r.useRef)(0),
          c = (0, r.useRef)(0),
          u = (0, r.useRef)(),
          v = (0, r.useRef)(() => void 0),
          p = (0, r.useRef)(),
          f = (0, r.useRef)(),
          h = (0, r.useRef)(),
          g = (0, r.useRef)(),
          b = (0, r.useRef)(),
          x = (0, r.useRef)(),
          y = (0, r.useRef)(null),
          w = (0, r.useCallback)(() => {
            void 0 !== f.current &&
              (window.clearTimeout(f.current), (f.current = void 0));
          }, []),
          k = (0, r.useCallback)(() => {
            void 0 === u.current &&
              (u.current = window.requestAnimationFrame((e) => {
                ((u.current = void 0), v.current(e));
              }));
          }, []),
          S = (0, r.useCallback)(() => {
            (w(),
              (f.current = window.setTimeout(() => {
                f.current = void 0;
                let e = Math.sign(d.current),
                  t = i[s + e];
                if (am()) {
                  var n;
                  ((d.current = 0),
                    null == (n = y.current) || n.applyTravel(0),
                    (p.current = void 0),
                    0 !== e && t && ((g.current = t.id), o(t.id)));
                  return;
                }
                ((h.current = {
                  from: d.current,
                  to: void 0 !== x.current ? 0 : 0 !== e && t ? 60 * e : 0,
                }),
                  (p.current = void 0),
                  k());
              }, 220)));
          }, [w, s, i, o, k]);
        ((v.current = (t) => {
          var n, a, r, l;
          let u = Math.min(
            32,
            Math.max(0, void 0 === p.current ? ai : t - p.current),
          );
          if (((p.current = t), void 0 !== h.current)) {
            let e = h.current;
            e.startedAt ?? (e.startedAt = t);
            let n = Math.min(1, Math.max(0, (t - e.startedAt) / 500)),
              l =
                e.from +
                (e.to - e.from) *
                  (function (e) {
                    if (e <= 0) return 0;
                    if (e >= 1) return 1;
                    let t = e;
                    for (let n = 0; n < 4; n += 1) {
                      let n = ((1.6 * t - 1.8) * t + 1.2) * t,
                        a = (4.8 * t - 3.6) * t + 1.2;
                      t -= (n - e) / a;
                    }
                    return t * t * (3 - 2 * t);
                  })(n);
            ((d.current = l), null == (a = y.current) || a.applyTravel(l));
            let c = e.to < 0 ? -1 : +(e.to > 0),
              u = i[s + c];
            if (n < 1) return void k();
            if (
              ((h.current = void 0),
              (p.current = void 0),
              void 0 === g.current && 0 !== c && u)
            ) {
              ((g.current = u.id), (b.current = c), (d.current = 0), o(u.id));
              return;
            }
            return (
              (d.current = 0),
              null == (r = y.current) || r.applyTravel(0),
              void (x.current = void 0)
            );
          }
          let m = c.current;
          if (0 === m) {
            ((p.current = void 0), 0 !== d.current && S());
            return;
          }
          let v = Math.sign(m) * Math.min(Math.abs(m), (1e3 * u) / 1e3),
            f = 0 === s ? 0 : -60,
            j = 60 * (s !== e.items.length - 1),
            C = v > 0 ? j - d.current : d.current - f;
          if (C <= 0) {
            ((c.current = 0), (p.current = void 0), 0 !== d.current && S());
            return;
          }
          let M = C - Math.abs(v) < 0.001 ? C : Math.abs(v),
            R = Math.sign(v) * M;
          c.current -= R;
          let I = d.current + R;
          d.current = I;
          let E = am();
          if ((E || null == (n = y.current) || n.applyTravel(I), !E)) {
            let t = x.current,
              n = void 0 !== t && (t > 0 ? I >= 0 : I <= 0);
            n && (x.current = void 0);
            let a =
                void 0 === t || (R > 0 ? 1 : -1) !== t || n ? Math.sign(I) : 0,
              i = 0 === a ? void 0 : e.items[s + a];
            if (void 0 === g.current && 0 !== a && i) {
              ((g.current = i.id),
                (b.current = a),
                (x.current = a),
                e.onCurrentChange(i.id));
              return;
            }
          }
          if (Math.abs(I) >= 60) {
            w();
            let t = I > 0 ? 1 : -1,
              n = e.items[s + t];
            if (!n) {
              ((c.current = 0),
                (d.current = 0),
                null == (l = y.current) || l.applyTravel(0),
                (p.current = void 0));
              return;
            }
            ((g.current = n.id),
              (b.current = t),
              (d.current = 0),
              (p.current = void 0),
              e.onCurrentChange(n.id));
            return;
          }
          0 !== c.current ? k() : ((p.current = void 0), S());
        }),
          (0, r.useLayoutEffect)(() => {
            var t, n;
            w();
            let a = g.current === e.currentId,
              i = b.current;
            if (
              ((g.current = void 0),
              (b.current = void 0),
              a && void 0 !== i && x.current === i)
            ) {
              let e = 60 * i,
                t = h.current;
              (void 0 !== t &&
                (h.current = {
                  from: t.from - e,
                  to: t.to - e,
                  startedAt: t.startedAt,
                }),
                (d.current -= e),
                null == (n = y.current) || n.applyTravel(d.current),
                void 0 !== h.current || 0 !== c.current ? k() : S());
              return;
            }
            (a || (c.current = 0),
              (x.current = void 0),
              (h.current = void 0),
              (d.current = 0),
              null == (t = y.current) || t.applyTravel(0),
              (p.current = void 0),
              a && 0 !== c.current && k());
          }, [w, e.currentId, e.items.length, k, S]),
          (0, r.useLayoutEffect)(
            () => () => {
              (void 0 !== u.current && window.cancelAnimationFrame(u.current),
                w());
            },
            [w],
          ));
        let j = (0, r.useCallback)(
          (t) => {
            if (
              e.items.length < 2 ||
              t.ctrlKey ||
              Math.abs(t.deltaX) >= Math.abs(t.deltaY)
            )
              return;
            t.preventDefault();
            let n =
              t.deltaMode === WheelEvent.DOM_DELTA_LINE
                ? 16 * t.deltaY
                : t.deltaMode === WheelEvent.DOM_DELTA_PAGE
                  ? 60 * t.deltaY
                  : t.deltaY;
            if (0 === n) return;
            (w(),
              (h.current = void 0),
              0 !== c.current &&
                Math.sign(n) !== Math.sign(c.current) &&
                (c.current = 0));
            let a = Math.max(0, 120 - Math.max(0, Math.sign(n) * d.current));
            ((c.current = Math.max(-a, Math.min(a, c.current + n))), k());
          },
          [w, e.items.length, k],
        );
        return (0, a.jsxs)("div", {
          className: "relative min-h-canvas-zero w-full flex-1",
          "data-testid": "media-history-view-preview",
          onWheelCapture: j,
          children: [
            (0, a.jsx)("div", {
              className:
                "grid h-full w-full place-items-center overflow-hidden rounded-canvas-video-fullscreen-media bg-dreamina-block-secondary-default [container-type:size]",
              children: l
                ? (0, a.jsxs)("div", {
                    "aria-label": (0, m.Aro)(
                      (null == (t = e.imageHandoff.presented)
                        ? void 0
                        : t.label) ?? l.label,
                    ),
                    className:
                      "group/media-history-preview pointer-events-auto relative aspect-[var(--canvas-media-aspect-ratio)] w-canvas-media-history-view-media overflow-hidden bg-dreamina-bg-body [&_img]:rounded-canvas-video-fullscreen-shell [&_video]:rounded-canvas-video-fullscreen-shell [&_[data-testid=image-primary-preview-viewport]]:rounded-canvas-video-fullscreen-shell",
                    "data-testid": "media-history-view-stage",
                    role: "group",
                    style: {
                      "--canvas-media-aspect-ratio": String(
                        (null == (n = e.imageHandoff.presented)
                          ? void 0
                          : n.ratio) ?? l.ratio,
                      ),
                    },
                    children: [
                      e.imageHandoff.active
                        ? (0, a.jsx)(at, {
                            handoff: e.imageHandoff,
                            targetLabel: l.label,
                          })
                        : l.preview,
                      e.items.length > 1
                        ? (0, a.jsx)(n9.Q, {
                            className: "left-4 top-3",
                            primaryLabel:
                              l.id === e.primaryId
                                ? (0, m.t0b)(l.mediaType)
                                : void 0,
                            provenanceLabel: l.provenanceLabel,
                          })
                        : null,
                      l.topRightLabel
                        ? (0, a.jsx)("div", {
                            className:
                              "pointer-events-none absolute right-2 top-2 z-canvas-media-result-action-chrome",
                            children: l.topRightLabel,
                          })
                        : null,
                    ],
                  })
                : null,
            }),
            e.items.length > 1
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)("span", {
                      className: "sr-only",
                      "data-testid": "media-history-view-position",
                      children: [s + 1, " / ", e.items.length],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "pointer-events-auto select-none absolute -right-16 inset-y-0 flex w-canvas-media-history-view-column flex-col items-center justify-center",
                      "data-testid": "media-history-view-navigation",
                      children: (0, a.jsx)(ap, {
                        currentId: e.currentId,
                        items: e.items,
                        motion: y,
                        primaryId: e.primaryId,
                        onCurrentChange: e.onCurrentChange,
                      }),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function ap(e) {
        let t = (0, r.useRef)(null),
          n = (0, r.useRef)(new Map()),
          i = (0, r.useRef)(null),
          o = (0, r.useRef)(null),
          [s, l] = (0, r.useState)(ar.height),
          d = (0, r.useRef)();
        (0, r.useLayoutEffect)(() => {
          let e = t.current;
          if (!e) return;
          let n = () => l(e.clientHeight || ar.height);
          if ((n(), "u" < typeof ResizeObserver)) return;
          let a = new ResizeObserver(n);
          return (a.observe(e), () => a.disconnect());
        }, []);
        let c = Math.max(
            0,
            e.items.findIndex((t) => t.id === e.currentId),
          ),
          u = (0, r.useCallback)(
            (t) =>
              (function (e) {
                let t = Math.max(0, e.count),
                  n = Math.max(0, Math.min(t - 1, e.currentIndex)),
                  a = e.direction < 0 ? -1 : +(e.direction > 0),
                  i = 0 === a ? 0 : Math.max(0, Math.min(1, e.progress)),
                  r = Math.max(0, Math.min(t - 1, n + a)),
                  o = Array.from({ length: t }, (e, t) =>
                    t === n ? 48 - 8 * i : 0 !== a && t === r ? 40 + 8 * i : 40,
                  ),
                  s = Array(t);
                t > 0 && (s[0] = 0);
                for (let e = 1; e < t; e += 1) s[e] = s[e - 1] + o[e - 1] + 8;
                let l = 0 === t ? 0 : s[t - 1] + o[t - 1],
                  d = Math.max(0, e.railHeight),
                  c = l > d,
                  u = (function (e, t, n, a, i, r) {
                    if (0 === t.length) return 0;
                    let o = e[n] + t[n] / 2;
                    return 0 === i || a === n
                      ? o
                      : o + (e[a] + t[a] / 2 - o) * r;
                  })(s, o, n, r, a, i),
                  m = Math.min(0, d - l),
                  v = c
                    ? Math.max(m, Math.min(0, d / 2 - u))
                    : Math.max(0, (d - l) / 2),
                  p = s.map((e) => e + v),
                  f = (function (e, t, n, a, i) {
                    let r = e.length,
                      o = 0;
                    for (let a = 0; a < e.length; a += 1) {
                      let i = e[a];
                      i + t[a] < -56 ||
                        i > n + 56 ||
                        ((r = Math.min(r, a)), (o = Math.max(o, a + 1)));
                    }
                    return (
                      e.length > 0 &&
                        ((r = Math.min(r, a, i)),
                        (o = Math.max(o, a + 1, i + 1))),
                      { end: o, start: Math.min(r, o) }
                    );
                  })(p, o, d, n, r);
                return {
                  itemTops: p,
                  overflowing: c,
                  sizes: o,
                  totalContentHeight: l,
                  trackOffset: v,
                  windowEnd: f.end,
                  windowStart: f.start,
                };
              })({
                count: e.items.length,
                currentIndex: c,
                direction: Math.sign(t),
                progress: Math.min(1, Math.abs(t) / 60),
                railHeight: s,
              }),
            [c, e.items.length, s],
          ),
          v = u(0),
          p = u(-60),
          f = u(60),
          h = Math.min(v.windowStart, p.windowStart, f.windowStart),
          g = Math.max(v.windowEnd, p.windowEnd, f.windowEnd),
          b = (0, r.useCallback)(
            (e) => {
              let t = u(e);
              n.current.forEach((e, n) => {
                let a = t.sizes[n] / 40;
                ((e.style.borderRadius = `${8 / a}px`),
                  (e.style.transform = `translateY(${t.itemTops[n]}px) scale(${a})`));
              });
              let a = t.overflowing
                  ? Math.min(1, Math.max(0, -t.trackOffset / 80))
                  : 0,
                r = Math.max(0, t.totalContentHeight + t.trackOffset - s),
                l = t.overflowing ? Math.min(1, r / 80) : 0;
              (i.current && (i.current.style.opacity = String(a)),
                o.current && (o.current.style.opacity = String(l)));
            },
            [s, u],
          );
        return (
          (0, r.useLayoutEffect)(() => {
            let t = e.motion,
              n = { applyTravel: b };
            return (
              (t.current = n),
              b(0),
              () => {
                t.current === n && (t.current = null);
              }
            );
          }, [b, e.motion]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                ref: t,
                "aria-label": (0, m.yZ3)(),
                className:
                  "relative h-full w-canvas-media-history-view-rail shrink overflow-hidden",
                "data-testid": "media-history-view-thumbnails",
                role: "listbox",
                onKeyDown: (t) => {
                  if ("Tab" === t.key) {
                    d.current = void 0;
                    return;
                  }
                  if (t.defaultPrevented) return;
                  let n =
                    "ArrowDown" === t.key || "ArrowRight" === t.key
                      ? 1
                      : "ArrowUp" === t.key || "ArrowLeft" === t.key
                        ? -1
                        : 0;
                  if (!n) return;
                  t.preventDefault();
                  let a =
                    e.items[Math.max(0, Math.min(e.items.length - 1, c + n))];
                  a &&
                    a.id !== e.currentId &&
                    ((d.current = {
                      id: a.id,
                      origin: t.currentTarget.ownerDocument.activeElement,
                    }),
                    e.onCurrentChange(a.id));
                },
                onBlurCapture: (e) => {
                  e.relatedTarget instanceof Node &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    (d.current = void 0);
                },
                children: e.items.slice(h, g).map((t, i) => {
                  let r = h + i,
                    o = v.sizes[r] / 40,
                    s = 8 / o,
                    l = t.id === e.currentId,
                    c = v.itemTops[r];
                  return (0, a.jsx)(
                    C.$nd,
                    {
                      ref: (a) => {
                        var i;
                        if (
                          (a
                            ? (n.current.set(r, a),
                              (a.style.borderRadius = `${s}px`))
                            : n.current.delete(r),
                          !a ||
                            (null == (i = d.current) ? void 0 : i.id) !==
                              t.id ||
                            t.id !== e.currentId)
                        )
                          return;
                        let o = a.ownerDocument.activeElement,
                          l = d.current.origin;
                        ((d.current = void 0),
                          (o !== l &&
                            (o !== a.ownerDocument.body ||
                              (null == l ? void 0 : l.isConnected))) ||
                            a.focus({ preventScroll: !0 }));
                      },
                      "aria-label": t.label,
                      "aria-selected": l,
                      className: (0, C.cn)(
                        "absolute right-0 block overflow-hidden bg-dreamina-bg-body p-canvas-zero",
                        l && "ring-1 ring-inset ring-dreamina-stroke-primary",
                      ),
                      "data-media-history-status": t.status,
                      "data-testid": "media-history-view-thumbnail",
                      role: "option",
                      size: "icon",
                      style: {
                        height: 40,
                        transform: `translateY(${c}px) scale(${o})`,
                        transformOrigin: "top right",
                        width: 40,
                      },
                      tabIndex: l ? 0 : -1,
                      type: "button",
                      variant: "text",
                      onClick: () => {
                        ((d.current = void 0), e.onCurrentChange(t.id));
                      },
                      children: (0, a.jsxs)("div", {
                        className: "relative h-full w-full overflow-hidden",
                        role: "presentation",
                        children: [
                          t.tile,
                          t.id === e.primaryId
                            ? (0, a.jsx)(C.ivD, {
                                className:
                                  "absolute left-px top-px size-4 text-dreamina-on-media-text-primary drop-shadow-dreamina-icon-text",
                                markClassName: "text-dreamina-bg-black",
                                size: 16,
                              })
                            : null,
                        ],
                      }),
                    },
                    t.id,
                  );
                }),
              }),
              (0, a.jsx)("span", {
                ref: i,
                "aria-hidden": "true",
                className:
                  "pointer-events-none absolute -inset-x-2 top-0 z-canvas-media-result-action-chrome h-canvas-media-history-view-inset rotate-180 bg-canvas-media-history-view-rail-mask opacity-dreamina-media-action-hidden",
                "data-media-history-view-rail-mask": "top",
              }),
              (0, a.jsx)("span", {
                ref: o,
                "aria-hidden": "true",
                className:
                  "pointer-events-none absolute -inset-x-2 bottom-0 z-canvas-media-result-action-chrome h-canvas-media-history-view-inset bg-canvas-media-history-view-rail-mask opacity-dreamina-media-action-hidden",
                "data-media-history-view-rail-mask": "bottom",
              }),
            ],
          })
        );
      }
      function af(e) {
        var t, n;
        let i,
          o = (0, r.useRef)(null),
          [s, l] = (0, r.useState)(null),
          d = (0, r.useMemo)(() => ({ current: s }), [s]),
          c = (function (e) {
            let [t, n] = (0, r.useState)(ar);
            return (
              (0, r.useLayoutEffect)(() => {
                let t = e.current;
                if (!t) return;
                let a = () => {
                  n((e) => {
                    let n = getComputedStyle(t),
                      a =
                        (Number.parseFloat(n.paddingLeft) || 0) +
                        (Number.parseFloat(n.paddingRight) || 0),
                      i =
                        (Number.parseFloat(n.paddingTop) || 0) +
                        (Number.parseFloat(n.paddingBottom) || 0),
                      r = Math.floor(t.clientWidth - a),
                      o = Math.floor(t.clientHeight - i),
                      s = r > 0 ? r : e.width,
                      l = o > 0 ? o : e.height;
                    return e.width === s && e.height === l
                      ? e
                      : { height: l, width: s };
                  });
                };
                if ((a(), "u" < typeof ResizeObserver)) return;
                let i = new ResizeObserver(a);
                return (i.observe(t), () => i.disconnect());
              }, [e]),
              t
            );
          })(o),
          u =
            ((t = e.items),
            (n = c),
            (i = t.map((e) => e.ratio.toFixed(4)).join(",")),
            (0, r.useMemo)(
              () =>
                (0, n3.dk)({
                  availableWidth: Math.max(12, n.width),
                  mode: "fullscreen",
                  ratios: "" === i ? [] : i.split(",").map(Number),
                  viewportHeight: n.height,
                }),
              [i, n.height, n.width],
            )),
          v = (0, n1.ON)({
            contentWidth: u.contentWidth,
            overscan: 2,
            paddingEnd: 9,
            paddingStart: 9,
            rows: u.rows,
            scrollMargin: 0,
            scrollRef: o,
            visibleHeight: c.height,
          }),
          [p, f] = (0, r.useState)(),
          h = (0, r.useRef)(new Set()),
          g = (0, r.useRef)(),
          b = (0, r.useRef)(),
          x = (0, r.useMemo)(
            () =>
              e.items.map((e) => {
                var t;
                let n,
                  i = {
                    ...((n = {
                      batchId: (t = e).batchId,
                      content: t.tile,
                      id: t.id,
                      label: t.label,
                      ratio: t.ratio,
                      selectLabel: t.selectLabel,
                      status: t.status,
                    }),
                    t.resourceActions &&
                      (n.resourceActions = t.resourceActions),
                    t.topRightLabel && (n.topRightLabel = t.topRightLabel),
                    (n.provenanceLabel = t.provenanceLabel),
                    (n.primaryLabel = (0, m.t0b)(t.mediaType)),
                    n),
                    content: e.gridTile ?? e.tile,
                  };
                return "image" === e.mediaType && e.gridPreview
                  ? { ...i, content: e.gridPreview }
                  : "video" === e.mediaType &&
                      "ready" === e.status &&
                      (e.gridPreview || e.renderGridVideo)
                    ? {
                        ...i,
                        content: (0, a.jsxs)("div", {
                          className: "relative h-full w-full",
                          children: [
                            e.gridTile ?? e.tile,
                            p === e.id
                              ? (0, a.jsx)("div", {
                                  className: "absolute inset-0",
                                  children: e.renderGridVideo
                                    ? e.renderGridVideo(
                                        h.current.has(e.id),
                                        (t) => {
                                          t
                                            ? h.current.add(e.id)
                                            : h.current.delete(e.id);
                                        },
                                        (t) => {
                                          t
                                            ? (b.current = e.id)
                                            : b.current === e.id &&
                                              ((b.current = void 0),
                                              g.current === e.id ||
                                                document.fullscreenElement ||
                                                f(g.current));
                                        },
                                      )
                                    : e.gridPreview,
                                })
                              : null,
                          ],
                        }),
                        onPointerEnter: (t) => {
                          !(
                            (null == t ? void 0 : t.pointerType) === "touch" ||
                            am()
                          ) && ((g.current = e.id), b.current || f(e.id));
                        },
                        onPointerLeave: () => {
                          (g.current === e.id && (g.current = void 0),
                            document.fullscreenElement ||
                              b.current === e.id ||
                              f((t) => (t === e.id ? void 0 : t)));
                        },
                        interactiveContent: !0,
                        containInteractionClicks: !0,
                        centerAction:
                          p === e.id
                            ? void 0
                            : (0, a.jsx)(n7.ZP, {
                                label: (0, m.k9n)(e.label),
                                testId: "media-history-grid-play",
                                onClick: (t) => {
                                  (t.stopPropagation(),
                                    (g.current = e.id),
                                    b.current || f(e.id));
                                },
                              }),
                      }
                    : i;
              }),
            [e.items, p],
          ),
          y = (0, r.useRef)(!1);
        (0, r.useLayoutEffect)(() => {
          if (y.current) return;
          let t = o.current;
          if (!t || v.totalHeight <= 0 || t.scrollHeight < v.totalHeight)
            return;
          let n = getComputedStyle(t),
            a =
              (Number.parseFloat(n.paddingLeft) || 0) +
              (Number.parseFloat(n.paddingRight) || 0),
            i =
              (Number.parseFloat(n.paddingTop) || 0) +
              (Number.parseFloat(n.paddingBottom) || 0),
            r = Math.floor(t.clientWidth - a),
            s = Math.floor(t.clientHeight - i);
          if ((r > 0 && r !== c.width) || (s > 0 && s !== c.height)) return;
          let l = e.primaryId ?? e.currentId,
            d = e.items.findIndex((e) => e.id === l),
            m = (0, n3.zy)({
              maxScroll: Math.max(0, t.scrollHeight - t.clientHeight),
              paddingStart: 9,
              rows: u.rows,
              strokeSpace: 4,
              targetIndex: d,
            });
          void 0 !== m && ((y.current = !0), (t.scrollTop = m));
        }, [
          u.rows,
          e.currentId,
          e.items,
          e.primaryId,
          c.height,
          c.width,
          v.totalHeight,
        ]);
        let w = (0, r.useMemo)(
            () =>
              new Map(
                e.items.map((t) => [
                  t.id,
                  {
                    mediaType: t.mediaType,
                    label: (0, m.S6g)(t.mediaType),
                    disabledReason: e.selectionDisabledReason,
                  },
                ]),
              ),
            [e.items, e.selectionDisabledReason],
          ),
          k = (0, r.useCallback)(
            (t, n, i) =>
              (0, a.jsx)(
                n0.V,
                {
                  current: t.id === e.primaryId,
                  currentItemLabel: t.primaryLabel ?? (0, m.t0b)(),
                  currentItemLabelAppearance: "compact",
                  height: i,
                  highlighted: !1,
                  hoverStroke: !1,
                  item: t,
                  selectionAvailable: e.selectionAvailable,
                  selectionMode: "button",
                  selectionAction: w.get(t.id),
                  width: n,
                  onSelectItem: e.onSelectItem,
                  onPreviewItem: e.onPreviewItem,
                },
                t.id,
              ),
            [
              w,
              e.onSelectItem,
              e.onPreviewItem,
              e.primaryId,
              e.selectionAvailable,
            ],
          );
        return (0, a.jsxs)("div", {
          ref: l,
          className:
            "relative min-h-canvas-zero min-w-canvas-zero w-full flex-1",
          children: [
            (0, a.jsx)("div", {
              ref: o,
              className: (0, C.cn)(
                "pointer-events-auto absolute -inset-canvas-media-history-anchor-safe box-border overflow-y-auto overflow-x-hidden p-canvas-media-history-anchor-safe [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                n6.tM,
              ),
              "data-testid": "media-history-view-grid",
              onScroll: () => {
                document.fullscreenElement || f(void 0);
              },
              children: (0, a.jsx)("ul", {
                "aria-label": (0, m.yZ3)(),
                className: "relative mx-auto",
                "data-media-history-grid-edge": u.targetEdge,
                "data-padding-start": 9,
                style: { height: v.totalHeight, width: u.contentWidth },
                children: v.items.map((e) => (0, n1.rW)(e, u.rows, x, k)),
              }),
            }),
            s
              ? (0, a.jsx)(nJ.Lw, {
                  contentVersion: v.totalHeight,
                  hostRef: d,
                  scrollRef: o,
                  overflowing: v.totalHeight > c.height,
                  rightOutset: 22,
                  variant: "history",
                  visibility: "persistent",
                })
              : null,
          ],
        });
      }
      let ah = () => () => void 0;
      var ag = n(39408),
        ab = n(7352),
        ax = n(12962),
        ay = n(77730),
        aw = n(69606),
        ak = n(66824),
        aS = n(19952),
        aj = n(80699),
        aC = n(55419),
        aM = n(39305);
      function aR(e) {
        let { port: t, snapshot: n } = e;
        return "active" !== n.status
          ? null
          : (0, a.jsx)(aI, {
              currentId: n.currentId,
              mode: n.mode,
              port: t,
              presentation: n.presentation,
              onRecoverPlaybackUrl: e.onRecoverPlaybackUrl,
              onRefreshResourceIds: e.onRefreshResourceIds,
            });
      }
      function aI(e) {
        var t, n;
        let i,
          s,
          l,
          d,
          c,
          u,
          p,
          { port: f, presentation: g } = e,
          { mediaType: b, nodeId: x } = g,
          { writeChromeVisible: y } = (0, o.A1)(),
          w = (0, r.useMemo)(() => g.items.map((e) => e.id), [g.items]),
          k = (0, t_.xO)(w),
          S = (0, t_.sK)(),
          j = (0, r.useCallback)(
            (t, n) => {
              var a;
              return (
                (a = e.onRefreshResourceIds),
                n.throwIfAborted(),
                new Promise((e, i) => {
                  let r = [t],
                    o = S.getResourceStates(r)[0],
                    s = !1,
                    l = !1,
                    d = () => void 0,
                    c = (t, a) => {
                      l ||
                        ((l = !0),
                        clearTimeout(m),
                        n.removeEventListener("abort", u),
                        d(),
                        t
                          ? i(t)
                          : a
                            ? e(a)
                            : i(Error("Refreshed image URL unavailable")));
                    },
                    u = () => c(n.reason),
                    m = setTimeout(
                      () => c(Error("Image resource refresh timed out")),
                      8e3,
                    ),
                    v = () => {
                      let e = S.isResourceRequestPending(r);
                      s || (s = e);
                      let t = S.getResourceStates(r)[0];
                      e ||
                        (!s && t === o) ||
                        c(
                          void 0,
                          (null == t ? void 0 : t.status) === tF.ao.success
                            ? ((0, t_.NL)(t.urls)[0] ?? (0, t_.PE)(t.urls))
                            : void 0,
                        );
                    };
                  ((d = S.subscribeResourceIds(r, v)),
                    n.addEventListener("abort", u, { once: !0 }));
                  try {
                    (a(r), v());
                  } catch (e) {
                    c(e);
                  }
                })
              );
            },
            [S, e.onRefreshResourceIds],
          ),
          C = (0, r.useMemo)(
            () => new Map(w.map((e, t) => [e, k.resources[t]])),
            [w, k.resources],
          ),
          M = f.getCopyBatch(),
          R = (0, r.useCallback)((e) => f.recordPlacedNode(e, M), [M, f]),
          I = (0, r.useCallback)((e) => R(e.groupId), [R]),
          E = (0, ay.U)(b, x, y, R, "inline", M),
          P = (0, r.useMemo)(() => {
            var e, t, n;
            let a, i, r;
            return (
              (e = b),
              (t = w),
              (n = k.resources),
              (a = "image" === e ? tF._x.image : tF._x.video),
              (i = []),
              (r = t.flatMap((e, t) => {
                let r = n[t];
                if (
                  (null == r ? void 0 : r.status) !== tF.ao.success ||
                  r.type !== a
                )
                  return [];
                i.push(e);
                let o = aE(r);
                if (!o) return [];
                let s = { downloadUrl: o, resourceId: e };
                return (
                  r.name && (s = { ...s, suggestedFileName: r.name }),
                  [s]
                );
              })),
              { archiveResourceIds: i, downloadInputs: r }
            );
          }, [b, w, k.resources]),
          A = (0, aw.y)({
            archiveResourceIds: P.archiveResourceIds,
            downloadInputs: P.downloadInputs,
            enabled: !0,
            mediaType: b,
            nodeId: x,
            onApplied: I,
          }),
          T =
            ((i = (0, h.FY)()),
            (s = (0, v.QQ)()),
            (d =
              null == (l = null == (t = i.featuresApi) ? void 0 : t.canvas) ||
              null == (n = l.actions)
                ? void 0
                : n.selectResourceCandidate),
            (c = (0, r.useCallback)(() => {
              if (!d) return "unavailable";
              let e = d.getState();
              return e.available ? "available" : e.reason;
            }, [d])),
            (u = (0, r.useSyncExternalStore)(
              (null == l ? void 0 : l.subscribeEditAvailability) ?? ah,
              c,
              c,
            )),
            (p = (0, r.useCallback)(
              async (e) =>
                !!(null == d ? void 0 : d.getState().available) &&
                !!(await d.execute({ nodeId: x, nodeType: b, resourceId: e }))
                  .ok &&
                (s({
                  id: `media-history-set-primary-${x}`,
                  status: "success",
                  title: (0, m.TC7)(b),
                }),
                !0),
              [d, b, x, s],
            )),
            (0, r.useMemo)(() => {
              if (d && "unavailable" !== u)
                return "available" === u
                  ? { onInvoke: p }
                  : {
                      disabledReason:
                        "permissionDenied" === u ? (0, m.PFW)() : (0, m.jyb)(),
                      onInvoke: p,
                    };
            }, [d, u, p])),
          N = (0, r.useCallback)(
            async (e) => {
              let t = (await (null == T ? void 0 : T.onInvoke(e))) ?? !1;
              return (t && M.active && f.getCopyBatch() === M && f.close(), t);
            },
            [M, f, T],
          ),
          D = (0, r.useMemo)(
            () => (y && T ? { ...T, onInvoke: N } : void 0),
            [N, T, y],
          ),
          L = (0, r.useMemo)(
            () => ({ applyAll: A.applyAll, downloadAll: A.downloadAll }),
            [A.applyAll, A.downloadAll],
          ),
          F = (0, r.useCallback)(
            (e) => {
              (e.preventDefault(), f.restoreFocus());
            },
            [f],
          ),
          _ = (0, r.useCallback)(
            (e) => {
              e || f.close();
            },
            [f],
          ),
          z = (0, r.useMemo)(
            () =>
              g.items.map((t, n) =>
                (function (e) {
                  let { index: t, item: n, mediaType: i, resource: r } = e,
                    o = "image" === i ? (0, m.rKI)(t) : (0, m.n9O)(t),
                    s = "image" === i ? (0, m.y6L)(t) : (0, m.IIe)(t),
                    l =
                      "image" === i
                        ? (function (e, t, n, i, r) {
                            if (
                              "ready" !== e.status ||
                              (null == t ? void 0 : t.status) !== tF.ao.success
                            )
                              return aT(
                                e,
                                t,
                                (0, m.wvr)(),
                                (0, m.YpW)(),
                                (0, m.aMq)(),
                                i,
                              );
                            let o = (0, t_.PE)(t.urls),
                              s = (0, t_.kd)(t.urls) ?? o,
                              l = (0, t_.NL)(t.urls)[0] ?? o,
                              d = (0, m.G5d)({ name: t.name, title: n });
                            return {
                              imagePreview: l
                                ? { src: l, alt: d, recover: r }
                                : void 0,
                              gridPreview: l
                                ? (0, a.jsx)(ak.o, {
                                    alt: d,
                                    resourceId: e.id,
                                    url: l,
                                  })
                                : void 0,
                              preview: l
                                ? null
                                : aT(
                                    e,
                                    t,
                                    (0, m.wvr)(),
                                    (0, m.YpW)(),
                                    (0, m.aMq)(),
                                    i,
                                  ).preview,
                              tile: s
                                ? (0, a.jsx)(ak.o, {
                                    alt: d,
                                    resourceId: e.id,
                                    url: s,
                                  })
                                : null,
                            };
                          })(n, r, e.title, o, (t) => e.recoverImage(n.id, t))
                        : (function (e, t, n, i, r) {
                            let o = (0, aj.nf)({
                                resourceId: e.id,
                                resource: t,
                              }),
                              s =
                                o.status === tF.ao.success
                                  ? (0, aj.Ri)(o, "fullscreen")
                                  : void 0,
                              l = null == s ? void 0 : s.url;
                            if (
                              "ready" !== e.status ||
                              o.mediaTypeMismatch ||
                              !l
                            )
                              return aT(
                                e,
                                t,
                                (0, m.kCx)(),
                                (0, m.Khs)(),
                                (0, m.GB6)(),
                                n,
                              );
                            let d = (0, aj.Oo)(o),
                              c =
                                (0, t_.NL)({
                                  url: o.posterUrl,
                                  resolution_source: o.posterResolutionSource,
                                })[0] ?? d,
                              u = (0, aj.Ri)(o, "node", { targetHeight: 360 }),
                              v = (0, aj.Ri)(o, "thumbnail"),
                              p = {
                                url: (null == v ? void 0 : v.url) ?? l,
                                duration: (o.durationMs ?? 0) / 1e3,
                                recover: (t) =>
                                  i(e.id, {
                                    signal: t,
                                    resolution:
                                      null == v ? void 0 : v.resolution,
                                  }),
                              },
                              f = {
                                url: (null == u ? void 0 : u.url) ?? l,
                                duration: (o.durationMs ?? 0) / 1e3,
                                recover: (t) =>
                                  i(e.id, {
                                    signal: t,
                                    resolution:
                                      null == u ? void 0 : u.resolution,
                                  }),
                              },
                              h = function (t) {
                                let d =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1],
                                  u =
                                    arguments.length > 2
                                      ? arguments[2]
                                      : void 0,
                                  v =
                                    arguments.length > 3
                                      ? arguments[3]
                                      : void 0,
                                  h = "grid" === t;
                                return (0, a.jsx)(
                                  aP,
                                  {
                                    active: !0,
                                    autoPlay: !0,
                                    initialPlaybackStatus: d
                                      ? "paused"
                                      : void 0,
                                    framePreview: {
                                      mode: h ? "surface" : "progress",
                                      source: h ? f : p,
                                      initiallyPaused: d,
                                      onPauseLockChange: u,
                                      onSeekingChange: v,
                                    },
                                    hoverPlay: h,
                                    controlsMode: h ? "node" : "fullscreen",
                                    fit: h ? "cover" : "contain",
                                    interactive: !0,
                                    posterUrl: h ? c : void 0,
                                    renderPoster: aA,
                                    previewPoster: h
                                      ? void 0
                                      : (0, a.jsx)(aC.D, {
                                          resource: o,
                                          targetBound: "original",
                                          fit: "contain",
                                          alt: (0, m.miN)(o.name ?? n),
                                          unavailable: aA,
                                          children: null,
                                        }),
                                    previewUrl: l,
                                    previewResolution:
                                      null == s ? void 0 : s.resolution,
                                    resourceId: e.id,
                                    title: n,
                                    onRecoverPlaybackUrl: i,
                                    onRefreshResourceIds: r,
                                  },
                                  `${t}:${e.id}`,
                                );
                              };
                            return {
                              preview: h("preview"),
                              gridTile: c
                                ? (0, a.jsx)(ak.o, {
                                    alt: (0, m.miN)(o.name ?? n),
                                    resourceId: e.id,
                                    url: c,
                                  })
                                : void 0,
                              renderGridVideo: (e, t, n) => h("grid", e, t, n),
                              tile: d
                                ? (0, a.jsx)("img", {
                                    alt: (0, m.miN)(o.name ?? n),
                                    className:
                                      "block h-full w-full object-cover",
                                    crossOrigin: "anonymous",
                                    decoding: "async",
                                    draggable: !1,
                                    loading: "lazy",
                                    src: d,
                                  })
                                : null,
                            };
                          })(
                            n,
                            r,
                            o,
                            e.onRecoverPlaybackUrl,
                            e.onRefreshResourceIds,
                          ),
                    d = {
                      batchId: n.batchId,
                      id: n.id,
                      label: o,
                      preview: l.preview,
                      mediaType: i,
                      ratio: n.ratio,
                      selectLabel: s,
                      status: n.status,
                      tile: l.tile,
                    };
                  if (
                    (l.gridTile && (d.gridTile = l.gridTile),
                    l.gridPreview && (d.gridPreview = l.gridPreview),
                    l.renderGridVideo &&
                      (d.renderGridVideo = l.renderGridVideo),
                    l.imagePreview && (d.imagePreview = l.imagePreview),
                    (null == r ? void 0 : r.status) === tF.ao.success)
                  ) {
                    let t = (0, ax.zV)({
                      copyDisabledReason: e.copy.disabledReason,
                      downloadUrl: aE(r),
                      getDownloadResourceState:
                        e.historyActions.getDownloadResourceState,
                      onCopyResource: e.copy.onCopyResource
                        ? () => {
                            var t, a;
                            return null == (t = (a = e.copy).onCopyResource)
                              ? void 0
                              : t.call(a, n.id);
                          }
                        : void 0,
                      onDownloadResource: e.historyActions.onDownloadResource,
                      resultLabel: o,
                      resourceId: n.id,
                      suggestedFileName: r.name,
                    });
                    t && (d.resourceActions = t);
                  }
                  return (
                    "video" === i &&
                      void 0 !== n.generationKind &&
                      (d.provenanceLabel = (0, aS.B)(n.generationKind)),
                    d
                  );
                })({
                  copy: E,
                  recoverImage: j,
                  historyActions: A,
                  index: n,
                  item: t,
                  mediaType: b,
                  resource: C.get(t.id),
                  title: g.title,
                  onRecoverPlaybackUrl: e.onRecoverPlaybackUrl,
                  onRefreshResourceIds: e.onRefreshResourceIds,
                }),
              ),
            [
              E,
              j,
              A,
              b,
              g.items,
              g.title,
              e.onRecoverPlaybackUrl,
              e.onRefreshResourceIds,
              C,
            ],
          );
        return (0, a.jsx)(as, {
          open: !0,
          currentId: e.currentId,
          gridActions: L,
          items: z,
          mode: e.mode,
          primaryId: g.primaryId,
          setPrimary: D,
          title: g.title,
          onCloseAutoFocus: F,
          onCurrentChange: f.setCurrentId,
          onModeChange: f.setMode,
          onOpenChange: _,
          onStepCurrent: f.stepCurrent,
        });
      }
      function aE(e) {
        let t =
          e.urls && "download_url" in e.urls ? e.urls.download_url : void 0;
        return (0, tz.v)(t);
      }
      let aP = (0, r.memo)(function (e) {
          let { framePreview: t, previewPoster: n, ...i } = e,
            {
              mode: o,
              fullscreenOnly: s,
              source: l,
              initiallyPaused: d,
              onPauseLockChange: c,
              onSeekingChange: u,
            } = t ?? {},
            m = (0, r.useMemo)(
              () =>
                o && l
                  ? {
                      mode: o,
                      fullscreenOnly: s,
                      source: l,
                      initiallyPaused: d,
                      onPauseLockChange: c,
                      onSeekingChange: u,
                    }
                  : void 0,
              [o, s, l, d, c, u],
            ),
            v = (0, a.jsx)(aM.L, { ...i, framePreview: m });
          return n
            ? (0, a.jsxs)("div", {
                className: "group/video-history relative h-full w-full",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 group-has-[video.visible]/video-history:invisible",
                    children: n,
                  }),
                  (0, a.jsx)("div", {
                    className: "absolute inset-0",
                    children: v,
                  }),
                ],
              })
            : v;
        }),
        aA = () => null;
      function aT(e, t, n, i, r, o) {
        if ("failed" === e.status) {
          let e = (e) =>
            (0, a.jsx)(ag.S, {
              announce: !1,
              announcement: `${o}: ${r}`,
              description: r,
              message: r,
              selected: !1,
              surfaceClassName: e,
              testId: "media-history-view-failed",
            });
          return {
            preview: e((0, C.cn)(ae.Pb, "bg-dreamina-bg-surface")),
            tile: e(ae.Pb),
          };
        }
        let s = (0, a.jsx)(ab.z, {
          generatingLabel: i,
          loadingLabel: n,
          resourceId: e.id,
          status: null == t ? void 0 : t.status,
          testId: "media-history-view-pending",
        });
        return { preview: s, tile: s };
      }
      var aN = n(31107);
      let aD = (0, r.lazy)(() =>
        n
          .e(9725)
          .then(n.bind(n, 94188))
          .then((e) => ({ default: e.DirectorStageWorkspace })),
      );
      function aL(e) {
        let { port: t } = e,
          n = (0, r.useSyncExternalStore)(
            t.subscribe,
            t.getSnapshot,
            t.getSnapshot,
          ),
          i = (0, o.px)(),
          s = (0, r.useCallback)(
            (e) => {
              e || (t.close(), t.restoreFocus());
            },
            [t],
          ),
          l = "active" === n.status ? n.presentation.nodeId : void 0,
          d = (0, r.useCallback)(
            (e, n) => (l ? t.adoptVersion(l, e, n) : Promise.resolve(!1)),
            [l, t],
          );
        return "active" !== n.status
          ? null
          : (0, a.jsx)(r.Suspense, {
              fallback: (0, a.jsx)(aN.Ay, {
                title: n.presentation.title,
                onOpenChange: s,
              }),
              children: (0, a.jsx)(
                aD,
                {
                  ...n.presentation,
                  authoringAllowed: i,
                  onAdoptVersion: d,
                  onOpenChange: s,
                },
                n.presentation.nodeId,
              ),
            });
      }
      var aF = n(17636),
        a_ = n(44393),
        az = n(15047),
        aH = n(39254),
        aO = n(52301);
      let a$ = (0, r.memo)(function (e) {
        let { hidden: t = !1, nodeIds: n, viewport: i, zIndex: o } = e,
          s = 1 === n.length ? n[0] : void 0,
          l = (0, r.useRef)(),
          d = t && void 0 !== s ? l.current : s;
        (0, r.useLayoutEffect)(() => {
          l.current = d;
        }, [d]);
        let c = (0, tB.XT)({ activeKey: d, activeValue: d, retainOnExit: !0 });
        return void 0 === c.value || void 0 === c.phase
          ? null
          : (0, a.jsx)(
              aB,
              {
                hidden: t,
                motionPhase: c.phase,
                motionVisible: c.visible,
                onMotionComplete: c.completeMotion,
                nodeId: c.value,
                viewport: i,
                zIndex: o,
              },
              c.value,
            );
      });
      function aB(e) {
        var t, n, i;
        let o,
          {
            hidden: s,
            motionPhase: l,
            motionVisible: d,
            onMotionComplete: c,
            nodeId: u,
            viewport: m,
            zIndex: v,
          } = e,
          p = (0, r.useMemo)(() => [u], [u]),
          f = (0, T.Ij)(p),
          b = (0, h.sL)((e) => e.resizingTextNodeId === u),
          x = (0, h.FY)(),
          y = (0, r.useRef)(!1),
          w = (0, aO.Pq)(u),
          [k, j] = (0, r.useState)(null),
          [C, M] = (0, r.useState)(null),
          R = (0, r.useRef)(new Map()),
          [I, E] = (0, r.useState)(!1),
          P = (0, r.useCallback)((e, t) => {
            let n = R.current;
            n.get(e) !== t && (t ? n.set(e, !0) : n.delete(e), E(n.size > 0));
          }, []),
          A = v ?? (I ? S.C$ : S.RB),
          N = "entering" !== l || "pending" !== w.status;
        return ((0, tB.qL)({
          surface: N ? C : null,
          visible: d,
          origin: "bottom",
          onComplete: c,
        }),
        (t = C),
        (n = u),
        (i = l),
        (o = (0, r.useCallback)(
          () =>
            (function (e, t) {
              var n;
              let a = document.activeElement;
              if (
                !(a instanceof HTMLElement) ||
                !(null == e ? void 0 : e.contains(a))
              )
                return;
              let i =
                e.closest(".react-flow") ??
                document.querySelector(".octo-canvas-flow");
              if (!i) return;
              let r =
                  ((n = t),
                  "u" > typeof CSS && "function" == typeof CSS.escape
                    ? CSS.escape(n)
                    : n.replace(/["\\]/g, "\\$&")),
                o = i.querySelector(`.react-flow__node[data-id="${r}"]`);
              (0, tO.wc)(o ?? void 0) || i.focus({ preventScroll: !0 });
            })(t, n),
          [n, t],
        )),
        (0, r.useLayoutEffect)(() => {
          "exiting" === i && o();
        }, [o, i]),
        (0, r.useLayoutEffect)(() => o, [o]),
        (0, g.NX)({
          enabled: !s && !b && "exiting" !== l,
          id: "node-toolbar",
          layoutRevision: f,
          nodeAnchor: "bottom",
          nodeId: u,
          role: "nodeToolbar",
          surfaceContentStatus: w.status,
          surface: (null == C ? void 0 : C.parentElement) ?? null,
          viewport: m,
          viewportPresentation: x.viewport,
        }),
        (0, r.useLayoutEffect)(() => {
          var e;
          if (
            s ||
            "present" !== l ||
            "content" !== w.status ||
            !C ||
            y.current ||
            !(null == (e = x.viewport) ? void 0 : e.begin)
          )
            return;
          let t = (0, tD.pu)(x.viewport);
          y.current = !0;
          let n = !1;
          return (
            t
              .present({ kind: "nodes", nodeIds: [u], nodeChromeInsets: aH.zM })
              .then(() => {
                n = !0;
              }),
            () => {
              (t.cancel(), n || (y.current = !1));
            }
          );
        }, [x.viewport, s, l, u, w.status, C]),
        b)
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(T.af, {
                  className: s
                    ? "invisible pointer-events-none"
                    : "pointer-events-none",
                  "data-testid": "node-feature-chrome-host",
                  geometry: f[0],
                  hostRef: j,
                  viewport: m,
                }),
                (0, a.jsx)(T.nJ, {
                  "data-testid": "node-toolbar",
                  geometry: f,
                  interactionActive: s || "exiting" === l,
                  offset: aW,
                  position: az.yX.Bottom,
                  preserveVisibilityDuringInteraction: "exiting" === l,
                  viewport: m,
                  zIndex: A,
                  children: (0, a.jsx)("div", {
                    ...("present" === l ? {} : { inert: "" }),
                    "aria-hidden": "present" !== l || void 0,
                    className: `nodrag nopan ${(0, tB.FW)(l, "bottom", d && N)}`,
                    "data-canvas-node-overlay-presence": l,
                    "data-testid": "node-toolbar-feature-host",
                    ref: M,
                    children: (0, a.jsx)(tB.rH.Provider, {
                      value: "present" === l && !s,
                      children: (0, a.jsx)(aV, {
                        nodeChromeSurface: k,
                        nodeId: u,
                        onNodeToolbarPopupSurfaceChange: P,
                        onSurfaceStatusChange: w.report,
                      }),
                    }),
                  }),
                }),
              ],
            });
      }
      let aV = (0, r.memo)(function (e) {
          let {
            nodeChromeSurface: t,
            nodeId: n,
            onNodeToolbarPopupSurfaceChange: i,
            onSurfaceStatusChange: r,
          } = e;
          return (0, a.jsx)(eF.x9, {
            nodeChromeSurface: t ?? void 0,
            nodeId: n,
            onNodeToolbarPopupSurfaceChange: i,
            onSurfaceStatusChange: r,
            slot: "nodeToolbar",
            surfaceRevision: n,
          });
        }),
        aW = 20;
      var aU = n(15882),
        aq = n(49350);
      let { useRef: aK } = r;
      function aG(e) {
        let t = aK();
        return (n) => {
          let a = e(n);
          return !(function (e, t) {
            if (Object.is(e, t)) return !0;
            if (
              "object" != typeof e ||
              null === e ||
              "object" != typeof t ||
              null === t
            )
              return !1;
            if (e instanceof Map && t instanceof Map) {
              if (e.size !== t.size) return !1;
              for (let [n, a] of e) if (!Object.is(a, t.get(n))) return !1;
              return !0;
            }
            if (e instanceof Set && t instanceof Set) {
              if (e.size !== t.size) return !1;
              for (let n of e) if (!t.has(n)) return !1;
              return !0;
            }
            let n = Object.keys(e);
            if (n.length !== Object.keys(t).length) return !1;
            for (let a of n)
              if (
                !Object.prototype.hasOwnProperty.call(t, a) ||
                !Object.is(e[a], t[a])
              )
                return !1;
            return !0;
          })(t.current, a)
            ? (t.current = a)
            : t.current;
        };
      }
      var aY = n(46686),
        aX = n(3264),
        aQ = n(6129),
        aZ = n(8782),
        aJ = n(2255),
        a0 = n(65013),
        a1 = n(76458),
        a2 = n(43667),
        a3 = n(27527),
        a6 = n(83945),
        a4 = n(54714),
        a5 = n(4246);
      function a8(e) {
        var t, n;
        let i,
          {
            editAvailability: s,
            enabled: l,
            hidden: d,
            nodeIds: c,
            preserveVisibilityDuringInteraction: u = !1,
            suppressed: m = !1,
            viewport: v,
            viewportMoving: p = !1,
          } = e,
          f = (0, h.FY)(),
          { writeChromeVisible: b } = (0, o.A1)(),
          x = c[0],
          y =
            ((t = c),
            (n = b),
            (i = (0, r.useMemo)(() => {
              let e = !1;
              return (a) => {
                let i =
                  !n &&
                  t.length > 0 &&
                  t.every((e) => {
                    var t;
                    let n = null == (t = a.nodeLookup.get(e)) ? void 0 : t.type;
                    return "text" === n || "video" === n || "stack" === n;
                  });
                return (e = i === e ? e : i);
              };
            }, [t, n])),
            (0, aU.Pj)(i)),
          w = (0, r.useRef)(!1),
          k = l && !y && w.current,
          S = (0, r.useMemo)(
            () => (l && !y && c.length > 0 ? c : void 0),
            [l, c, y],
          );
        (0, r.useLayoutEffect)(() => {
          S && (w.current = !m && (!d || u));
        }, [S, d, u, m]);
        let j = (0, r.useMemo)(() => (null == S ? void 0 : S.join("\0")), [S]),
          C = (0, tB.XT)({ activeKey: j, activeValue: S, retainOnExit: k }),
          M = void 0 === C.value || void 0 === C.phase;
        (0, g.zi)({
          id: "selection-context-toolbar-fallback",
          nodeId: l && (M || d || m) ? x : void 0,
          nodeIds: c.length > 1 ? c : void 0,
          role: "selectionContextToolbar",
          viewportPresentation: f.viewport,
        });
        let R = (0, r.useId)(),
          I = (0, r.useRef)(c),
          E = (0, r.useRef)(!1);
        return ((0, r.useLayoutEffect)(() => {
          let e = (e) => {
            e.target !== document.body &&
              e.target !== document.documentElement &&
              (E.current = ic(R));
          };
          return (
            document.addEventListener("focusin", e),
            () => document.removeEventListener("focusin", e)
          );
        }, [R]),
        (I.current = c),
        M)
          ? ((E.current = ic(R)), null)
          : (0, a.jsx)(
              a9,
              {
                editAvailability: s,
                focusOwnerId: R,
                focusTargetNodeIdsRef: I,
                interactionActive: d || m || "exiting" === C.phase,
                motionPhase: C.phase,
                motionVisible: C.visible,
                onMotionComplete: C.completeMotion,
                nodeIds: C.value,
                portaledFocusOwnedRef: E,
                preserveVisibilityDuringInteraction:
                  "exiting" === C.phase || (!!u && !m),
                viewport: v,
                viewportMoving: p,
              },
              C.key,
            );
      }
      function a9(e) {
        var t, n, i, s, l, d, c, u, m, v;
        let p,
          f,
          b,
          x,
          {
            editAvailability: y,
            focusOwnerId: w,
            focusTargetNodeIdsRef: k,
            interactionActive: j,
            motionPhase: C,
            motionVisible: R,
            onMotionComplete: I,
            nodeIds: E,
            portaledFocusOwnedRef: P,
            preserveVisibilityDuringInteraction: A,
            viewport: N,
          } = e,
          D = (0, h.FY)(),
          { writeChromeVisible: L, directDownloadVisible: F } = (0, o.A1)(),
          _ = (0, r.useMemo)(() => [...E], [E]),
          z = (0, r.useMemo)(() => _.join("\0"), [_]),
          { actionFacts: H, geometry: O } =
            ((t = _),
            (p = (0, r.useMemo)(() => {
              let e;
              return (n) => {
                var a, i;
                let r = [],
                  o = [];
                for (let [a, i] of t.entries()) {
                  let t = n.nodeLookup.get(i);
                  if (t) {
                    r.push(
                      (function (e, t) {
                        var n;
                        if ("image" === t.type && t.data.storyboardCell)
                          return {
                            activeBatchResourceIds: [],
                            id: e,
                            kind: "storyboard-member",
                            resourceIds: [],
                          };
                        if (
                          "image" !== t.type &&
                          "video" !== t.type &&
                          "audio" !== t.type
                        ) {
                          let n = {
                            activeBatchResourceIds: [],
                            id: e,
                            kind: t.type ?? "unknown",
                            resourceIds: [],
                          };
                          return "stack" === t.type
                            ? { ...n, stackNodeCount: t.data.nodeIds.length }
                            : "group" === t.type
                              ? void 0 === t.data.backgroundColor
                                ? {
                                    ...n,
                                    groupMemberCount: t.data.memberCount,
                                    storyboard: t.data.storyboard,
                                  }
                                : {
                                    ...n,
                                    groupBackgroundColor:
                                      t.data.backgroundColor,
                                    storyboard: t.data.storyboard,
                                    groupMemberCount: t.data.memberCount,
                                    nodeBackgroundColor: t.data.backgroundColor,
                                  }
                              : "text" === t.type &&
                                  void 0 !== t.data.backgroundColor
                                ? {
                                    ...n,
                                    nodeBackgroundColor: t.data.backgroundColor,
                                  }
                                : n;
                        }
                        let a = t.data.resourceId,
                          i = t.data.resourceBatches.flatMap(
                            (e) => e.resourceIds,
                          );
                        a && i.push(a);
                        let r = [...new Set(i)],
                          o = {
                            activeBatchResourceIds: a
                              ? ((null ==
                                (n = t.data.resourceBatches.find((e) =>
                                  e.resourceIds.includes(a),
                                ))
                                  ? void 0
                                  : n.resourceIds) ?? [a])
                              : r,
                            id: e,
                            kind: t.type,
                            primaryResourceId: a,
                            resourceIds: r,
                            title: t.data.title,
                          };
                        return "image" === t.type &&
                          void 0 !== t.data.layerBoard
                          ? { ...o, layerBoardPresent: !0 }
                          : o;
                      })(i, t),
                    );
                    let n = (0, T.D2)(i, t, null == e ? void 0 : e.geometry[a]);
                    o.push(
                      "stack" === t.type
                        ? { ...n, ...(0, aX.K3)(n, t.data.previews ?? []) }
                        : n,
                    );
                  }
                }
                let s =
                    e &&
                    ((a = e.actionFacts),
                    (i = r),
                    a.length === i.length &&
                      a.every((e, t) => {
                        let n = i[t];
                        return (
                          e.id === (null == n ? void 0 : n.id) &&
                          il(
                            e.activeBatchResourceIds,
                            n.activeBatchResourceIds,
                          ) &&
                          e.kind === n.kind &&
                          e.groupBackgroundColor === n.groupBackgroundColor &&
                          e.nodeBackgroundColor === n.nodeBackgroundColor &&
                          e.groupMemberCount === n.groupMemberCount &&
                          e.stackNodeCount === n.stackNodeCount &&
                          e.layerBoardPresent === n.layerBoardPresent &&
                          e.storyboard === n.storyboard &&
                          e.primaryResourceId === n.primaryResourceId &&
                          e.title === n.title &&
                          il(e.resourceIds, n.resourceIds)
                        );
                      }))
                      ? e.actionFacts
                      : r,
                  l = e && (0, T.i8)(e.geometry, o) ? e.geometry : o;
                return (null == e ? void 0 : e.actionFacts) === s &&
                  e.geometry === l
                  ? e
                  : (e = { actionFacts: s, geometry: l });
              };
            }, [t])),
            (0, aU.Pj)(p)),
          $ =
            ((n = O),
            (i = _.length),
            (0, r.useMemo)(() => (0, eY.FU)(n, i), [n, i])),
          B = (function (e) {
            var t,
              n,
              a,
              i,
              o,
              s,
              l,
              d,
              c,
              u,
              m,
              v,
              p,
              f,
              g,
              b,
              x,
              y,
              w,
              k,
              S,
              j,
              C,
              M,
              R,
              I,
              E,
              P,
              A,
              T,
              N,
              D,
              L,
              F,
              _,
              z,
              H,
              O,
              $,
              B,
              V,
              W,
              U,
              q,
              K,
              G,
              Y,
              X,
              Q,
              Z,
              J,
              ee;
            let et,
              en,
              ea,
              ei,
              er,
              eo,
              es,
              el,
              ed,
              ec,
              eu,
              em,
              ev,
              ep,
              ef,
              eh,
              eg,
              eb,
              ex,
              ey,
              ew,
              ek,
              eS,
              ej,
              eC,
              {
                directDownloadVisible: eM,
                editAvailability: eR,
                selectionFacts: eI,
                writeChromeVisible: eE,
              } = e,
              eP =
                ((et =
                  null == (a = (0, h.FY)().featuresApi)
                    ? void 0
                    : a.canvas.seedAudio15Availability),
                (0, r.useSyncExternalStore)(
                  (null == et ? void 0 : et.subscribe) ?? a7,
                  (null == et ? void 0 : et.getState) ?? ie,
                  (null == et ? void 0 : et.getState) ?? ie,
                )),
              eA =
                ((en =
                  null == (i = (0, h.FY)().featuresApi)
                    ? void 0
                    : i.canvas.postEditCatalog),
                (ea = (0, r.useCallback)(
                  () =>
                    (null == en
                      ? void 0
                      : en.getTool("video", "audio_extraction")) !== void 0,
                  [en],
                )),
                (0, r.useSyncExternalStore)(
                  (null == en ? void 0 : en.subscribe) ?? a7,
                  ea,
                  ea,
                )),
              eT =
                ((o = eI),
                (ei =
                  null == (s = (0, h.FY)().getGenerationFeatureRuntime())
                    ? void 0
                    : s.actions),
                (er = (0, r.useMemo)(
                  () =>
                    o.filter((e) => "image" === e.kind || "video" === e.kind),
                  [o],
                )),
                (eo = (0, r.useCallback)(
                  (e) => {
                    var t;
                    if (!ei) return () => void 0;
                    let n = er.map((t) =>
                        "image" === t.kind
                          ? ei.subscribeImageSubmissionState(t.id, e)
                          : ei.subscribeVideoSubmissionState(t.id, e),
                      ),
                      a =
                        null == (t = ei.subscribePendingGenerationAttemptState)
                          ? void 0
                          : t.call(ei, e);
                    return (
                      a && n.push(a),
                      () => {
                        for (let e of n) e();
                      }
                    );
                  },
                  [ei, er],
                )),
                (es = (0, r.useMemo)(() => {
                  var e, t;
                  let n;
                  return (
                    (e = ei),
                    (t = er),
                    (n = ia),
                    () => {
                      if (!e || 0 === t.length) return ia;
                      let a = [];
                      for (let n of t) {
                        var i, r;
                        if ("video" === n.kind) {
                          let t =
                            null == (i = e.getVideoSubmissionSnapshot)
                              ? void 0
                              : i.call(e, n.id);
                          t && a.push(...t.acceptedResourceIds);
                          continue;
                        }
                        let t = e.getImageSubmissionState(n.id);
                        if (
                          "settled" === t.status &&
                          ("acceptedResourceIds" in t.result &&
                            a.push(...t.result.acceptedResourceIds),
                          "ambiguous" === t.result.status)
                        ) {
                          let n = (null ==
                          (r = e.getPendingGenerationAttemptState)
                            ? void 0
                            : r.call(e, t.result.pendingAttempt)) ?? {
                            status: "unknown",
                          };
                          ("unknown" === n.status &&
                            a.push(...t.result.pendingAttempt.resourceIds),
                            "accepted" === n.status &&
                              (a.push(...n.acceptedResourceIds),
                              n.remainingAttempt &&
                                a.push(...n.remainingAttempt.resourceIds)));
                        }
                      }
                      let o = [...new Set(a)];
                      return il(n.resourceIds, o)
                        ? n
                        : (n = { resourceIds: o });
                    }
                  );
                }, [ei, er])),
                (0, r.useSyncExternalStore)(eo, es, es)),
              eN =
                ((l = eI),
                (d = eT.resourceIds),
                (el = (0, r.useMemo)(
                  () => [
                    ...new Set([...l.flatMap((e) => e.resourceIds), ...d]),
                  ],
                  [l, d],
                )),
                (ed = (0, t_.iI)(el)),
                (ec = (0, t_.wm)(el)),
                (eu = (0, r.useMemo)(
                  () =>
                    new Map(
                      ed.resources.flatMap((e) =>
                        e ? [[e.resource_id, e]] : [],
                      ),
                    ),
                  [ed.resources],
                )),
                (em = (0, r.useMemo)(
                  () => new Set(el.filter((e, t) => !0 === ec[t])),
                  [el, ec],
                )),
                (0, r.useMemo)(
                  () => ({ failedTrackingResourceIds: em, resourceById: eu }),
                  [em, eu],
                )),
              eD = 1 === eI.length ? eI[0] : void 0,
              eL = (null == eD ? void 0 : eD.primaryResourceId)
                ? eN.resourceById.get(eD.primaryResourceId)
                : void 0,
              eF = void 0 !== eL && (0, aZ.O)((0, aZ.F)(eL)),
              e_ = (0, h.FY)(),
              ez = (0, aq.Pj)(
                e_.canvasStore,
                aG((e) =>
                  eI
                    .filter(
                      (t) =>
                        ("image" === t.kind || "video" === t.kind) &&
                        e.sessionNodeIds.has(t.id),
                    )
                    .map((e) => e.id),
                ),
              ),
              eH =
                null == (t = e_.featuresApi) ? void 0 : t.canvas.textGeneration,
              eO =
                1 === eI.length &&
                (null == (n = eI[0]) ? void 0 : n.kind) === "text"
                  ? eI[0].id
                  : void 0,
              e$ = (0, r.useCallback)(
                (e) =>
                  eO
                    ? ((null == eH ? void 0 : eH.subscribe(eO, e)) ??
                      (() => void 0))
                    : () => void 0,
                [eO, eH],
              ),
              eB = (0, r.useCallback)(() => {
                let e = eO
                  ? null == eH
                    ? void 0
                    : eH.getSnapshot(eO)
                  : void 0;
                return (
                  void 0 !== e && ("ready" !== e.status || e.control.blocked)
                );
              }, [eO, eH]),
              eV = (0, r.useSyncExternalStore)(e$, eB, eB),
              eW = (0, r.useMemo)(() => new Set(ez), [ez]),
              eU =
                ((c = eI),
                (u = eN),
                (0, r.useMemo)(() => {
                  if (0 === c.length) return ir;
                  let e = !1;
                  for (let t of c) {
                    if ("image" !== t.kind) return ir;
                    let n = t.resourceIds.flatMap((e) => {
                        let t = u.resourceById.get(e);
                        return t ? [t] : [];
                      }),
                      a = (0, a0.Fx)({
                        nodeId: t.id,
                        primaryResourceId: t.primaryResourceId,
                        resources: n,
                        title: t.title ?? "",
                      });
                    if (!a) return ir;
                    (0, a0.Dp)(a) || (e = !0);
                  }
                  return { cutoutSourceExceedsLimit: e, ready: !0 };
                }, [u, c])),
              eq = it(eI, "image"),
              eK =
                ((m = eI),
                (v = eN),
                (0, r.useMemo)(() => {
                  if (1 !== m.length) return io;
                  let e = m[0];
                  if (!e || "image" !== e.kind) return io;
                  let t = e.resourceIds.flatMap((e) => {
                      let t = v.resourceById.get(e);
                      return t ? [t] : [];
                    }),
                    n = (0, a0.Fx)({
                      nodeId: e.id,
                      primaryResourceId: e.primaryResourceId,
                      resources: t,
                      title: e.title ?? "",
                    });
                  if (!(null == n ? void 0 : n.pixelSourceUrl)) return io;
                  let a = (0, a1.sR)(n);
                  return "available" !== a.status
                    ? { ready: !0 }
                    : {
                        defaultOutputResolution: a.defaultResolution,
                        ready: !0,
                      };
                }, [v, m])),
              eG =
                ((p = eI),
                (f = eN),
                (g = eT),
                (b = eW),
                (0, r.useMemo)(() => {
                  let e = p.filter(
                    (e) =>
                      ("image" === e.kind || "video" === e.kind) &&
                      !b.has(e.id),
                  );
                  if (0 === e.length) return !1;
                  let t = new Set(e.flatMap((e) => e.resourceIds));
                  return (
                    !!g.resourceIds.some((e) => {
                      if (t.has(e)) return !1;
                      let n = f.resourceById.get(e);
                      return n
                        ? n.status === tF.ao.running
                        : !f.failedTrackingResourceIds.has(e);
                    }) ||
                    e.some((e) => {
                      let t = e.primaryResourceId;
                      if (!t) return e.resourceIds.some((e) => ii(e, f));
                      if (ii(t, f)) return !0;
                      let n = f.resourceById.get(t);
                      return (
                        (null == n ? void 0 : n.status) !== tF.ao.success &&
                        e.activeBatchResourceIds.some(
                          (e) => e !== t && ii(e, f),
                        )
                      );
                    })
                  );
                }, [g, f, p, b])),
              eY =
                ((x = eI),
                (y = eN),
                (0, r.useMemo)(() => {
                  var e;
                  if (1 !== x.length) return !1;
                  let t = x[0];
                  return (
                    !!t &&
                    ("image" === t.kind || "video" === t.kind) &&
                    !!t.primaryResourceId &&
                    (null == (e = y.resourceById.get(t.primaryResourceId))
                      ? void 0
                      : e.status) === tF.ao.failed
                  );
                }, [y, x])),
              eX =
                ((w = eI),
                (k = eN),
                (ev =
                  null == (C = (0, h.FY)().featuresApi) ||
                  null == (j = C.canvas) ||
                  null == (S = j.videoPostEdit)
                    ? void 0
                    : S.edit),
                (ep = k.resourceById),
                (0, r.useMemo)(() => {
                  var e;
                  if (
                    1 === w.length &&
                    (null == (e = w[0]) ? void 0 : e.kind) === "video"
                  )
                    return (
                      (null == ev
                        ? void 0
                        : ev.getEntryCommerceAction([w[0].id])) ?? void 0
                    );
                }, [ep, w, ev])),
              eQ =
                ((M = eI),
                (R = eN),
                (I = eR),
                (ef =
                  null == (A = (0, h.FY)().featuresApi) ||
                  null == (P = A.canvas) ||
                  null == (E = P.actions)
                    ? void 0
                    : E.openVideoSubtitleErasure),
                (eh = R.resourceById),
                (0, r.useMemo)(() => {
                  var e;
                  if (
                    I.available &&
                    1 === M.length &&
                    (null == (e = M[0]) ? void 0 : e.kind) === "video"
                  )
                    return null == ef
                      ? void 0
                      : ef.getEntryCommerceAction({ nodeIds: [M[0].id] });
                }, [ef, I.available, eh, M])),
              eZ =
                ((T = eI),
                (N = eN),
                (eg =
                  null == (L = (0, h.FY)().featuresApi) ||
                  null == (D = L.canvas)
                    ? void 0
                    : D.videoExtend),
                (0, r.useMemo)(() => {
                  if (0 === T.length) return is;
                  let e = [];
                  for (let t of T) {
                    if ("video" !== t.kind) return is;
                    let n = t.resourceIds.flatMap((e) => {
                        let t = N.resourceById.get(e);
                        return t ? [t] : [];
                      }),
                      a = (0, a2.V2)({
                        nodeId: t.id,
                        primaryResourceId: t.primaryResourceId,
                        resources: n,
                        title: t.title ?? "",
                      });
                    if (!a) return is;
                    e.push(a);
                  }
                  let t = !1;
                  1 === e.length &&
                    "durationUnsupported" === (0, a2.xn)(e[0] ?? {}) &&
                    (t = "durationUnsupported");
                  let n = e[0];
                  if (!n) return is;
                  let a = (0, a2.GS)([n, ...e.slice(1)], a2.VL);
                  return {
                    editAtLimit: t,
                    source: 1 === e.length ? n : void 0,
                    interpolationEligibleSourceCount: a.eligibleSourceCount,
                    ready: !0,
                    upscaleEntryCommerceAction: (0, a2.mw)(e),
                    ...(0, a2.Q1)(e),
                    ...(0, a6.Y)(
                      1 === e.length ? n : null,
                      1 === e.length
                        ? ((null == eg
                            ? void 0
                            : eg.resolveTarget(n.modelName)) ?? null)
                        : null,
                    ),
                  };
                }, [N, T, eg])),
              eJ =
                ((F = eI),
                (_ = eN),
                (z = eZ),
                (H = eR),
                (ex =
                  null == (eb = (0, h.FY)().featuresApi) ||
                  null == ($ = eb.canvas) ||
                  null == (O = $.videoPostEdit)
                    ? void 0
                    : O.partialReshoot),
                (ew =
                  null ==
                  (ey =
                    null == eb ||
                    null == (W = eb.app) ||
                    null == (V = W.getPartialReshootGeneratorConfiguration) ||
                    null == (B = V.call(W))
                      ? void 0
                      : B.editSource)
                    ? void 0
                    : ey.minMs),
                (ek = (0, a3.f)(
                  z.ready && 1 === F.length ? (z.source ?? null) : null,
                  ey,
                )),
                (eS = _.resourceById),
                (0, r.useMemo)(() => {
                  var e;
                  let t;
                  return (
                    H.available &&
                      "available" === ek &&
                      1 === F.length &&
                      (null == (e = F[0]) ? void 0 : e.kind) === "video" &&
                      (t =
                        (null == ex
                          ? void 0
                          : ex.getEntryCommerceAction([F[0].id])) ?? void 0),
                    {
                      videoPartialReshootEligibility: ek,
                      videoPartialReshootMinDurationMs: ew,
                      videoPartialReshootEntryCommerceAction: t,
                    }
                  );
                }, [H.available, ek, ew, ex, eS, F])),
              e0 =
                ((U = eI),
                (q = eN),
                (K = eZ),
                (G = eR),
                (ej =
                  null == (X = (0, h.FY)().featuresApi) ||
                  null == (Y = X.canvas)
                    ? void 0
                    : Y.videoExtend),
                (eC = q.resourceById),
                (0, r.useMemo)(() => {
                  var e;
                  if (
                    G.available &&
                    !1 === K.videoExtendAtLimit &&
                    1 === U.length &&
                    (null == (e = U[0]) ? void 0 : e.kind) === "video"
                  )
                    return (
                      (null == ej
                        ? void 0
                        : ej.getEntryCommerceAction([U[0].id])) ?? void 0
                    );
                }, [G.available, eC, U, ej, K.videoExtendAtLimit])),
              e1 = it(eI, "video"),
              e2 =
                ((Q = eI),
                (Z = eN),
                (0, r.useMemo)(() => {
                  if (1 !== Q.length) return "unavailable";
                  let e = Q[0];
                  if (!e || "video" !== e.kind) return "unavailable";
                  let t = e.resourceIds.flatMap((e) => {
                      let t = Z.resourceById.get(e);
                      return t ? [t] : [];
                    }),
                    n = (0, a2.V2)({
                      nodeId: e.id,
                      primaryResourceId: e.primaryResourceId,
                      resources: t,
                      title: e.title ?? "",
                    });
                  return n
                    ? void 0 === n.durationMs
                      ? "durationUnavailable"
                      : n.durationMs < 1e3
                        ? "tooShort"
                        : "ready"
                    : "unavailable";
                }, [Z, Q])),
              {
                postEditReady: e3,
                trimReady: e6,
                trimTooShort: e4,
              } = ((J = eI),
              (ee = eN),
              (0, r.useMemo)(() => {
                if (0 === J.length)
                  return { postEditReady: !1, trimReady: !1, trimTooShort: !1 };
                let e = !0,
                  t = !1;
                for (let n of J) {
                  if ("audio" !== n.kind)
                    return {
                      postEditReady: !1,
                      trimReady: !1,
                      trimTooShort: !1,
                    };
                  let a = n.resourceIds.flatMap((e) => {
                      let t = ee.resourceById.get(e);
                      return t ? [t] : [];
                    }),
                    i = (0, aQ.oP)({
                      nodeId: n.id,
                      primaryResourceId: n.primaryResourceId,
                      resources: a,
                      title: n.title ?? "",
                    });
                  if (!i)
                    return {
                      postEditReady: !1,
                      trimReady: !1,
                      trimTooShort: !1,
                    };
                  ((0, aJ.W)(i) && (t = !0), (0, aJ.r)(i) || (e = !1));
                }
                return { postEditReady: !0, trimReady: e, trimTooShort: t };
              }, [ee, J]));
            return (0, r.useMemo)(() => {
              var e, t, n, a, i;
              return {
                audioPostEditReady: e3,
                audioTrimReady: e6,
                audioTrimTooShort: e4,
                audioSeparationDurationExceeded: eF,
                editAvailability: eR,
                groupBackgroundColor:
                  1 === eI.length
                    ? null == (e = eI[0])
                      ? void 0
                      : e.groupBackgroundColor
                    : void 0,
                nodeBackgroundColor:
                  1 === eI.length
                    ? null == (t = eI[0])
                      ? void 0
                      : t.nodeBackgroundColor
                    : void 0,
                groupMemberCount:
                  1 === eI.length
                    ? null == (n = eI[0])
                      ? void 0
                      : n.groupMemberCount
                    : void 0,
                stackNodeCount:
                  1 === eI.length
                    ? null == (a = eI[0])
                      ? void 0
                      : a.stackNodeCount
                    : void 0,
                storyboard:
                  1 === eI.length
                    ? null == (i = eI[0])
                      ? void 0
                      : i.storyboard
                    : void 0,
                imageCutoutSourceExceedsLimit: eU.cutoutSourceExceedsLimit,
                imageLayerBoardPresent: eI.some(
                  (e) => !0 === e.layerBoardPresent,
                ),
                imagePostEditReady: eU.ready,
                imagePreviewReady: eq,
                imageSmartEditDefaultOutputResolution:
                  eK.defaultOutputResolution,
                imageSmartEditReady: eK.ready,
                mediaGenerationPending: eG,
                mediaPrimaryFailed: eY,
                textContentBlocked: eV,
                kinds: eI.map((e) => e.kind),
                nodeIds: eI.map((e) => e.id),
                seedAudio15Enabled: eP,
                videoAudioExtractionEnabled: eA,
                ...eJ,
                videoEditAtLimit: eZ.editAtLimit,
                videoExtendAtLimit: eZ.videoExtendAtLimit,
                videoExtendMinSourceDurationMs:
                  eZ.videoExtendMinSourceDurationMs,
                videoExtendMaxSourceDurationMs:
                  eZ.videoExtendMaxSourceDurationMs,
                videoExtendSourceDurationMs: eZ.videoExtendSourceDurationMs,
                videoExtendEntryCommerceAction: e0,
                videoEditEntryCommerceAction: eX,
                videoSubtitleErasureEntryCommerceAction: eQ,
                videoInterpolationAtLimit: eZ.interpolationAtLimit,
                videoInterpolationEligibleSourceCount:
                  eZ.interpolationEligibleSourceCount,
                videoPostEditReady: eZ.ready,
                videoPreviewReady: e1,
                videoTrimDurationUnavailable: "durationUnavailable" === e2,
                videoTrimTooShort: "tooShort" === e2,
                videoUpscaleAtLimit: eZ.upscaleAtLimit,
                videoUpscaleEntryCommerceAction: eZ.upscaleEntryCommerceAction,
                videoUpscaleMaxDurationSeconds: eZ.upscaleMaxDurationSeconds,
                directDownloadVisible: eM,
                writeChromeVisible: eE,
              };
            }, [
              e3,
              e6,
              e4,
              eF,
              eM,
              eR,
              eU,
              eq,
              eK,
              eG,
              eY,
              eV,
              eI,
              eP,
              eA,
              eZ,
              eX,
              eQ,
              e0,
              eJ,
              e1,
              e2,
              eE,
            ]);
          })({
            directDownloadVisible: F,
            editAvailability: y,
            selectionFacts: H,
            writeChromeVisible: L,
          }),
          V = !!(B.mediaGenerationPending && 1 === _.length),
          W = 1 === B.nodeIds.length && !0 === B.imageLayerBoardPresent,
          U = j || V,
          q = (0, a4.R)(B),
          K = (0, aO.Pq)(q),
          G =
            ((s = $),
            (l = N.zoom),
            (f = (0, T.kz)(s)) ? (f.right - f.left) * l : 0),
          Y = (function (e) {
            let t = (0, r.useRef)(null),
              { attachToolbarSurface: n, surface: a } = (function (e) {
                let t = (0, h.FY)(),
                  [n, a] = (0, r.useState)(null),
                  { surfaceRef: i } = e,
                  o = (0, r.useCallback)(
                    (e) => {
                      ((i.current = e), t.viewport && a(e));
                    },
                    [t.viewport, i],
                  );
                return (
                  (0, g.NX)({
                    additionalSurfaceSelector:
                      "[data-canvas-viewport-decoration-overflow]",
                    enabled: e.enabled,
                    id: "selection-context-toolbar",
                    layoutRevision: e.layoutRevision,
                    nodeAnchor: "top",
                    nodeId: e.nodeId,
                    nodeIds: e.nodeIds,
                    role: "selectionContextToolbar",
                    screenFixedAnchorBounds: e.screenFixedAnchorBounds,
                    surfaceContentStatus: e.surfaceContentStatus,
                    surface: n,
                    viewport: e.viewport,
                    viewportPresentation: t.viewport,
                  }),
                  { attachToolbarSurface: o, surface: n }
                );
              })({
                enabled: e.enabled,
                layoutRevision: e.selectedNodeGeometry,
                nodeId: e.nodeIds[0],
                nodeIds: e.nodeIds.length > 1 ? e.nodeIds : void 0,
                screenFixedAnchorBounds:
                  e.nodeIds.length > 1
                    ? (function (e) {
                        let t = (0, T.kz)(e);
                        if (t)
                          return {
                            space: "canvas",
                            x: t.left,
                            y: t.top,
                            width: t.right - t.left,
                            height: t.bottom - t.top,
                          };
                      })(e.selectedNodeGeometry)
                    : void 0,
                surfaceContentStatus: e.surfaceContentStatus,
                surfaceRef: t,
                viewport: e.viewport,
              });
            return { attachToolbarSurface: n, surfaceRef: t, surface: a };
          })({
            enabled: !U && !W,
            nodeIds: _,
            selectedNodeGeometry: $,
            surfaceContentStatus: K.status,
            viewport: N,
          });
        ((0, tB.qL)({
          surface: Y.surface,
          visible: R,
          origin: "top",
          onComplete: I,
        }),
          (d = {
            focusTargetNodeIdsRef: k,
            interactionActive: U,
            releasePortaledFocus: "exiting" === C,
            selectionFocusKey: z,
            surfaceRef: Y.surfaceRef,
            portaledFocusOwnedRef: P,
          }),
          (b = (0, M.oy)()),
          (x = (0, r.useCallback)(
            () =>
              (function (e, t) {
                var n;
                let a,
                  i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                  o = arguments.length > 4 ? arguments[4] : void 0;
                if (
                  !e ||
                  (!i &&
                    ((n = e),
                    !(
                      ((a = document.activeElement) instanceof HTMLElement &&
                        n.contains(a)) ||
                      (a instanceof HTMLElement && iu(n, a))
                    )))
                )
                  return;
                let s = e.closest(".react-flow");
                if (s) {
                  if (i && !r)
                    return void queueMicrotask(() => {
                      let e = document.activeElement;
                      (e instanceof HTMLElement &&
                        e !== document.body &&
                        e !== document.documentElement &&
                        e.isConnected) ||
                        id(s, t, o);
                    });
                  id(s, t, o);
                }
              })(
                d.surfaceRef.current,
                d.focusTargetNodeIdsRef.current,
                d.portaledFocusOwnedRef.current,
                d.releasePortaledFocus,
                b,
              ),
            [
              b,
              d.focusTargetNodeIdsRef,
              d.portaledFocusOwnedRef,
              d.releasePortaledFocus,
              d.surfaceRef,
            ],
          )),
          (0, r.useLayoutEffect)(() => {
            d.interactionActive && x();
          }, [x, d.interactionActive]),
          (0, r.useLayoutEffect)(() => x, [x, d.selectionFocusKey]));
        let [X, Q] = (0, r.useState)(null),
          Z =
            ((c = _),
            (u = N.zoom),
            (0, aU.Pj)(
              aG(
                (0, r.useMemo)(
                  () => (e) => {
                    let t = 1 === c.length ? e.nodeLookup.get(c[0]) : void 0;
                    if ((null == t ? void 0 : t.type) !== "stack") return;
                    let n = (0, T.D2)(t.id, t),
                      a = (0, aX.K3)(n, t.data.previews ?? [], 2.35);
                    return {
                      width: Math.max(n.width, a.width) * u,
                      height: aY.l.offset,
                    };
                  },
                  [c, u],
                ),
              ),
            )),
          J = Z ? _[0] : void 0;
        (0, r.useEffect)(
          () => () => {
            if (J)
              for (let e of [
                "toolbarPointer",
                "toolbarFocus",
                "menuPointer",
                "menuFocus",
              ])
                D.stackPresentation.leaveStack(J, e);
          },
          [D, J],
        );
        let ee =
          ((m = D),
          (0, r.useCallback)(
            (e) => {
              var t, n;
              if (
                0 !== e.button ||
                ((t = e.target),
                (n = e.currentTarget),
                !(t instanceof Node && n.contains(t)) ||
                  (t instanceof Element &&
                    null !==
                      t.closest(
                        'a[href], button, input, select, textarea, [contenteditable="true"], [role="button"], [role="checkbox"], [role="menu"], [role="menuitem"], [role="radio"], [role="slider"], [role="switch"]',
                      )))
              )
                return;
              let a = m.featuresApi;
              if (!a) return;
              let i = a.canvas.getSelection(),
                r = a.canvas.actions.clearSelection;
              r.getState(i).available && r.execute(i, "user");
            },
            [m],
          ));
        return ((function (e) {
          let t = (0, e2.u)(),
            { interactionActive: n, nodeIds: a, selectionFocusKey: i } = e,
            o = 1 === a.length ? a[0] : void 0;
          (0, r.useEffect)(() => {
            n ||
              null == t ||
              t.declare({
                surface: "nodeEditBar",
                gesture: "shown",
                nodeId: o,
              });
          }, [o, t, n, i]);
        })({ interactionActive: U || W, nodeIds: _, selectionFocusKey: z }),
        V || W || 0 === O.length)
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(T.nJ, {
                  "data-testid": "selection-context-toolbar-popup-host",
                  geometry: $,
                  interactionActive: j,
                  offset: aY.l.offset,
                  position: "top",
                  preserveVisibilityDuringInteraction: A,
                  viewport: N,
                  zIndex: S.AN,
                  children: (0, a.jsx)("div", {
                    ref: Q,
                    className: "contents",
                    "data-selection-context-toolbar-popup-surface": !0,
                    onPointerEnter: () => {
                      J && D.stackPresentation.hoverStack(J, "menuPointer");
                    },
                    onPointerLeave: () => {
                      J && D.stackPresentation.leaveStack(J, "menuPointer");
                    },
                    onFocusCapture: () => {
                      J && D.stackPresentation.hoverStack(J, "menuFocus");
                    },
                    onBlurCapture: (e) => {
                      J &&
                        !e.currentTarget.contains(e.relatedTarget) &&
                        D.stackPresentation.leaveStack(J, "menuFocus");
                    },
                  }),
                }),
                (0, a.jsxs)(T.nJ, {
                  "data-testid": "node-toolbar",
                  avoidViewportEdges: void 0 !== Z,
                  className: "group/stack-toolbar",
                  geometry: $,
                  interactionActive: j,
                  offset: aY.l.offset,
                  position: "top",
                  preserveVisibilityDuringInteraction: A,
                  viewport: N,
                  zIndex: S.Hd,
                  children: [
                    Z && !U
                      ? (0, a.jsx)("div", {
                          "aria-hidden": "true",
                          className:
                            "nopan nodrag absolute left-1/2 top-full -translate-x-1/2 group-data-[overlay-position=bottom]/stack-toolbar:bottom-full group-data-[overlay-position=bottom]/stack-toolbar:top-auto",
                          "data-testid": "stack-toolbar-bridge",
                          style: {
                            width: Z.width,
                            minWidth: "100%",
                            height: Z.height,
                          },
                          onPointerEnter: () =>
                            D.stackPresentation.hoverStack(
                              _[0],
                              "toolbarPointer",
                            ),
                          onPointerLeave: () =>
                            D.stackPresentation.leaveStack(
                              _[0],
                              "toolbarPointer",
                            ),
                          onPointerDown: (e) => {
                            (e.preventDefault(), e.stopPropagation());
                          },
                          onPointerUp: (e) => {
                            (e.preventDefault(), e.stopPropagation());
                          },
                          onClick: (e) => {
                            (e.preventDefault(), e.stopPropagation());
                          },
                        })
                      : null,
                    (0, a.jsx)("div", {
                      ...("present" === C ? {} : { inert: "" }),
                      "aria-hidden": "present" !== C || void 0,
                      ref: Y.attachToolbarSurface,
                      className: `nopan relative ${(0, tB.FW)(C, "top", R)}`,
                      "data-canvas-node-overlay-presence": C,
                      "data-selection-context-toolbar-focus-owner": w,
                      "data-testid": "selection-context-toolbar-surface",
                      onPointerEnter: () => {
                        let e = 1 === _.length ? _[0] : void 0;
                        e &&
                          J &&
                          D.stackPresentation.hoverStack(e, "toolbarPointer");
                      },
                      onPointerLeave: () => {
                        J &&
                          D.stackPresentation.leaveStack(J, "toolbarPointer");
                      },
                      onFocusCapture: () => {
                        let e = 1 === _.length ? _[0] : void 0;
                        e &&
                          J &&
                          D.stackPresentation.hoverStack(e, "toolbarFocus");
                      },
                      onBlurCapture: (e) => {
                        e.currentTarget.contains(e.relatedTarget) ||
                          1 !== _.length ||
                          D.stackPresentation.leaveStack(_[0], "toolbarFocus");
                      },
                      onPointerUp: ee,
                      style:
                        ((v = G),
                        { "--canvas-selection-bounds-width": `${v}px` }),
                      children: (0, a.jsx)(a5.M, {
                        selection: B,
                        children: (0, a.jsx)(eF.x9, {
                          nodeChromeSurface: X ?? void 0,
                          onSurfaceStatusChange: K.report,
                          slot: "selectionContextToolbar",
                          surfaceRevision: q,
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
      let a7 = () => () => void 0,
        ie = () => !1;
      function it(e, t) {
        var n, a;
        let i =
          null == (a = (0, h.FY)().featuresApi) || null == (n = a.canvas)
            ? void 0
            : n.mediaHistoryView;
        return (
          void 0 !== i &&
          e.length > 0 &&
          e.every((e) => e.kind === t && i.canOpen(e.id))
        );
      }
      let ia = Object.freeze({ resourceIds: Object.freeze([]) });
      function ii(e, t) {
        let n = t.resourceById.get(e);
        return n
          ? n.status === tF.ao.running
          : !t.failedTrackingResourceIds.has(e);
      }
      let ir = Object.freeze({ cutoutSourceExceedsLimit: !1, ready: !1 }),
        io = Object.freeze({ ready: !1 }),
        is = Object.freeze({
          editAtLimit: !1,
          ...(0, a6.Y)(null),
          interpolationAtLimit: !1,
          ready: !1,
          upscaleAtLimit: !1,
        });
      function il(e, t) {
        return e.length === t.length && e.every((e, n) => e === t[n]);
      }
      function id(e, t, n) {
        let [a] = t.flatMap((t) => {
          let n =
              "u" > typeof CSS && "function" == typeof CSS.escape
                ? CSS.escape(t)
                : t.replace(/["\\]/g, "\\$&"),
            a = e.querySelector(`.react-flow__node[data-id="${n}"]`);
          return a ? [a] : [];
        });
        a ? (0, M.BD)(n, a) : e.focus();
      }
      function ic(e) {
        let t = document.activeElement;
        if (!(t instanceof HTMLElement)) return !1;
        let n = Array.from(
          document.querySelectorAll(
            "[data-selection-context-toolbar-focus-owner]",
          ),
        ).find((t) => t.dataset.selectionContextToolbarFocusOwner === e);
        return !!n && iu(n, t);
      }
      function iu(e, t) {
        return Array.from(e.querySelectorAll("[aria-controls]")).some((e) => {
          var n;
          let a = e.getAttribute("aria-controls");
          return (
            !!a &&
            (null == (n = document.getElementById(a))
              ? void 0
              : n.contains(t)) === !0
          );
        });
      }
      var im = n(69961),
        iv = n(70427),
        ip = n(69099),
        ih = n(72137),
        ig = n(27607),
        ib = n(95045),
        ix = n(48213);
      let iy = [
        "transform",
        "transform-origin",
        "transform-style",
        "transition",
        "will-change",
      ];
      class iw {
        hover(e, t) {
          if (this.confirmationArmed || this.terminalAnimation) return;
          let n = ik(e);
          if (!n) return void this.clear();
          if ((this.activate(n), this.pressed)) return;
          if ((iS(n, "hover"), iM(n))) {
            (this.cancelFrame(),
              (this.currentMotion = ib.Mr),
              (this.targetMotion = ib.Mr),
              this.restoreOwnedStyles());
            return;
          }
          let a = n.getBoundingClientRect();
          if (a.width <= 0 || a.height <= 0) return void this.clear();
          let { motion: i } = (0, ib.XV)({
            bounds: a,
            pointer: t,
            previewVelocityX: 0,
          });
          ((this.targetMotion = i),
            null === this.frameId && this.advanceMotion());
        }
        press(e) {
          if (this.confirmationArmed || this.terminalAnimation) return;
          let t = ik(e);
          if (!t) return;
          if (
            (this.activate(t),
            (this.pressed = !0),
            this.cancelFrame(),
            iS(t, "pressed"),
            iM(t))
          )
            return void this.restoreOwnedStyles();
          if ("function" != typeof t.animate) return;
          let n = t.style.transform || (0, ib.Fq)(this.currentMotion),
            a = (0, ib.hs)(t, n);
          (this.cancelPressAnimation(),
            (this.pressTerminalTransform = n),
            (this.pressAnimation = t.animate(a.keyframes, a.options)));
        }
        armConfirmation(e) {
          if (this.confirmationArmed || this.terminalAnimation) return !1;
          let t = ik(e);
          return (
            !t ||
            (this.activate(t),
            (this.confirmationArmed = !0),
            (this.confirmationNode = e),
            !0)
          );
        }
        settlePendingConfirmation() {
          let e = this.confirmationNode,
            t = null == e ? void 0 : e.dataset.canvasSourcePickerState;
          if (this.terminalAnimation) {
            if ("pending" === t || "activated" === t) return;
            this.clear();
            return;
          }
          if (this.confirmationArmed && "pending" !== t) {
            if ("activated" === t && e) return void this.confirm(e);
            this.clear();
          }
        }
        confirm(e) {
          var t;
          let n = ik(e);
          if (
            !this.confirmationArmed ||
            !n ||
            (null == (t = this.owned) ? void 0 : t.surface) !== n ||
            iM(n) ||
            ((this.confirmationArmed = !1),
            this.cancelFrame(),
            "function" != typeof n.animate)
          )
            return void this.clear();
          let a = null !== this.pressAnimation,
            i =
              this.pressTerminalTransform ??
              (n.style.transform || (0, ib.Fq)(this.currentMotion)),
            r = (0, ib.r4)(n, i, { initiallyPressed: a });
          this.cancelPressAnimation();
          let o = n.animate(r.keyframes, r.options);
          ((this.activatedOpacityAnimation = e.animate(
            (0, ix.ev)(),
            r.options,
          )),
            (this.animatedSurface = n),
            (this.terminalAnimation = o),
            (o.oncancel = () => this.finishTerminalAnimation(o, n)),
            (o.onfinish = () => this.finishTerminalAnimation(o, n)));
        }
        release(e, t) {
          if (!this.confirmationArmed && !this.terminalAnimation) {
            if (
              ((this.pressed = !1),
              e &&
                (0, ix.vg)(
                  e.dataset.canvasSourcePickerState,
                  e.getAttribute("aria-disabled"),
                ))
            )
              return void this.hover(e, t);
            this.clear();
          }
        }
        reconcileNode(e) {
          var t;
          if (
            this.settledOpacityNode === e &&
            ("pending" === e.dataset.canvasSourcePickerState ||
              (this.cancelSettledOpacityAnimation(),
              "activated" === e.dataset.canvasSourcePickerState))
          )
            return;
          let n = null == (t = this.owned) ? void 0 : t.surface;
          if (n && e.contains(n)) {
            if (this.terminalAnimation && this.animatedSurface === n) {
              if (
                "pending" === e.dataset.canvasSourcePickerState ||
                "activated" === e.dataset.canvasSourcePickerState
              )
                return;
              this.clear();
              return;
            }
            "activated" === e.dataset.canvasSourcePickerState
              ? this.confirm(e)
              : ("pending" === e.dataset.canvasSourcePickerState &&
                  this.confirmationArmed) ||
                ("eligible" !== e.dataset.canvasSourcePickerState &&
                  this.clear());
          }
        }
        clearPointerTracking() {
          this.confirmationArmed || this.terminalAnimation || this.clear();
        }
        clear() {
          (this.cancelFrame(),
            this.cancelPressAnimation(),
            this.cancelTerminalAnimation(),
            this.cancelSettledOpacityAnimation());
          let e = this.owned;
          ((this.owned = null),
            (this.confirmationArmed = !1),
            (this.confirmationNode = null),
            (this.pressed = !1),
            (this.currentMotion = ib.Mr),
            (this.targetMotion = ib.Mr),
            e &&
              (iC(e.surface, "canvasSourcePickerHover", e.hover),
              iC(e.surface, "canvasSourcePickerPressed", e.pressed),
              ij(e)));
        }
        dispose() {
          this.clear();
        }
        activate(e) {
          var t;
          (null == (t = this.owned) ? void 0 : t.surface) !== e &&
            (this.clear(),
            (this.currentMotion = ib.Mr),
            (this.targetMotion = ib.Mr),
            (this.owned = {
              hover: e.dataset.canvasSourcePickerHover,
              pressed: e.dataset.canvasSourcePickerPressed,
              properties: new Map(
                iy.map((t) => [
                  t,
                  {
                    priority: e.style.getPropertyPriority(t),
                    value: e.style.getPropertyValue(t),
                  },
                ]),
              ),
              surface: e,
            }));
        }
        advanceMotion() {
          var e, t, n, a, i;
          let r = null == (e = this.owned) ? void 0 : e.surface;
          r &&
            !this.pressed &&
            ((this.currentMotion =
              ((t = this.currentMotion),
              (n = this.targetMotion),
              {
                effectStrength: (function (e, t, n) {
                  return e + (t - e) * n;
                })(t.effectStrength, n.effectStrength, 0.2),
                rotateX: (function (e, t, n) {
                  return e + (t - e) * n;
                })(t.rotateX, n.rotateX, 0.2),
                rotateY: (function (e, t, n) {
                  return e + (t - e) * n;
                })(t.rotateY, n.rotateY, 0.2),
                rotateZ: (function (e, t, n) {
                  return e + (t - e) * n;
                })(t.rotateZ, n.rotateZ, 0.2),
                scale: (function (e, t, n) {
                  return e + (t - e) * n;
                })(t.scale, n.scale, 0.18),
                x: (function (e, t, n) {
                  return e + (t - e) * n;
                })(t.x, n.x, 0.18),
                y: (function (e, t, n) {
                  return e + (t - e) * n;
                })(t.y, n.y, 0.18),
                z: (function (e, t, n) {
                  return e + (t - e) * n;
                })(t.z, n.z, 0.16),
              })),
            iR(r, this.currentMotion),
            (a = this.currentMotion),
            (i = this.targetMotion),
            (0.01 >= Math.abs(a.effectStrength - i.effectStrength) &&
              0.08 >= Math.abs(a.x - i.x) &&
              0.08 >= Math.abs(a.y - i.y) &&
              0.08 >= Math.abs(a.z - i.z) &&
              0.08 >= Math.abs(a.rotateX - i.rotateX) &&
              0.08 >= Math.abs(a.rotateY - i.rotateY) &&
              0.08 >= Math.abs(a.rotateZ - i.rotateZ) &&
              0.002 >= Math.abs(a.scale - i.scale)) ||
              this.ensureFrame(r));
        }
        ensureFrame(e) {
          if (null !== this.frameId) return;
          let t = e.ownerDocument.defaultView;
          if (!(null == t ? void 0 : t.requestAnimationFrame)) {
            ((this.currentMotion = this.targetMotion),
              iR(e, this.currentMotion));
            return;
          }
          this.frameId = t.requestAnimationFrame(this.advanceFrame);
        }
        cancelFrame() {
          var e, t;
          null !== this.frameId &&
            (null == (t = this.owned) ||
              null == (e = t.surface.ownerDocument.defaultView) ||
              e.cancelAnimationFrame(this.frameId),
            (this.frameId = null));
        }
        cancelPressAnimation() {
          let e = this.pressAnimation;
          ((this.pressAnimation = null),
            (this.pressTerminalTransform = null),
            e && "idle" !== e.playState && e.cancel());
        }
        cancelTerminalAnimation() {
          let e = this.terminalAnimation,
            t = this.activatedOpacityAnimation;
          ((this.terminalAnimation = null),
            (this.activatedOpacityAnimation = null),
            (this.animatedSurface = null),
            e &&
              ((e.oncancel = null),
              (e.onfinish = null),
              "finished" !== e.playState &&
                "idle" !== e.playState &&
                e.cancel()),
            t && "idle" !== t.playState && t.cancel());
        }
        cancelSettledOpacityAnimation() {
          let e = this.settledOpacityAnimation;
          ((this.settledOpacityAnimation = null),
            (this.settledOpacityNode = null),
            e && "idle" !== e.playState && e.cancel());
        }
        finishTerminalAnimation(e, t) {
          if (this.terminalAnimation !== e || this.animatedSurface !== t)
            return;
          let n = this.confirmationNode,
            a =
              (null == n ? void 0 : n.dataset.canvasSourcePickerState) ===
              "pending";
          (this.cancelTerminalAnimation(),
            this.clear(),
            a &&
              n &&
              "function" == typeof n.animate &&
              ((this.settledOpacityNode = n),
              (this.settledOpacityAnimation = n.animate(
                { opacity: [0.4, 0.4] },
                { duration: 1, fill: "forwards" },
              ))));
        }
        restoreOwnedStyles() {
          this.owned && ij(this.owned);
        }
        constructor() {
          ((this.animatedSurface = null),
            (this.activatedOpacityAnimation = null),
            (this.confirmationArmed = !1),
            (this.confirmationNode = null),
            (this.currentMotion = ib.Mr),
            (this.frameId = null),
            (this.owned = null),
            (this.pressed = !1),
            (this.pressAnimation = null),
            (this.pressTerminalTransform = null),
            (this.targetMotion = ib.Mr),
            (this.terminalAnimation = null),
            (this.settledOpacityAnimation = null),
            (this.settledOpacityNode = null),
            (this.advanceFrame = () => {
              ((this.frameId = null), this.advanceMotion());
            }));
        }
      }
      function ik(e) {
        return e.querySelector("[data-canvas-flow-node-surface]");
      }
      function iS(e, t) {
        if ("hover" === t) {
          ((e.dataset.canvasSourcePickerHover = "true"),
            delete e.dataset.canvasSourcePickerPressed);
          return;
        }
        (delete e.dataset.canvasSourcePickerHover,
          (e.dataset.canvasSourcePickerPressed = "true"));
      }
      function ij(e) {
        for (let [t, n] of e.properties)
          n.value
            ? e.surface.style.setProperty(t, n.value, n.priority)
            : e.surface.style.removeProperty(t);
      }
      function iC(e, t, n) {
        void 0 === n ? delete e.dataset[t] : (e.dataset[t] = n);
      }
      function iM(e) {
        return (0, C.Oeg)(e.ownerDocument.defaultView ?? void 0);
      }
      function iR(e, t) {
        ((e.style.transform = (0, ib.Fq)(t)),
          (e.style.transformOrigin = "center"),
          (e.style.transition = "none"),
          (e.style.willChange = "transform"));
      }
      let iI = Object.freeze({ zIndex: ix.Nb }),
        iE = Object.freeze({ height: 44, paddingLeft: 14, paddingRight: 16 }),
        iP = Object.freeze({
          columnGap: 8,
          height: 44,
          paddingLeft: 14,
          paddingRight: 16,
        });
      function iA(e) {
        var t, n, i, o, s, l;
        let d,
          {
            interactionRootRef: c,
            locateVisible: u,
            locateNode: m,
            onEndSession: v,
            onSelectEligible: p,
            session: f,
          } = e,
          { overlay: h } = f,
          g = (0, r.useCallback)(() => v(f.sessionId), [v, f.sessionId]);
        return (
          (o = f.sessionId),
          (s = v),
          ((d = (0, r.useRef)(s)).current = s),
          (0, r.useEffect)(() => {
            let e = !1,
              t = (t) => {
                "Escape" !== t.key ||
                  t.altKey ||
                  t.ctrlKey ||
                  t.metaKey ||
                  t.shiftKey ||
                  (t.preventDefault(),
                  t.stopPropagation(),
                  e || ((e = !0), d.current(o)));
              };
            return (
              window.addEventListener("keydown", t, !0),
              window.addEventListener("keyup", t, !0),
              () => {
                (window.removeEventListener("keydown", t, !0),
                  window.removeEventListener("keyup", t, !0));
              }
            );
          }, [o]),
          (0, a.jsx)(iT, {
            activeLabel: h.activeLabel,
            blockedLabel: h.blockedLabel,
            blockedSelectionScope: JSON.stringify([
              [...((l = f).blockedSourceNodeIds ?? [])].sort(),
              Object.entries(l.blockedSourceNodeReasons ?? {}).sort((e, t) => {
                let [n] = e,
                  [a] = t;
                return n.localeCompare(a);
              }),
              l.overlay.blockedLabel ?? null,
            ]),
            closeLabel: h.closeLabel,
            failureDescription:
              null == (t = h.failure) ? void 0 : t.description,
            failureKey: null == (n = h.failure) ? void 0 : n.key,
            feedbackPlacement: h.feedbackPlacement,
            interactionRootRef: c,
            label: h.label,
            locateFailedLabel: h.locateFailedLabel,
            locateLabel: h.locateLabel,
            locateNode: m,
            locateVisible: u,
            onCancel: g,
            onSelectEligible: p,
            originBlockedReason:
              null == (i = f.blockedSourceNodeReasons)
                ? void 0
                : i[f.originNodeId],
            originNodeId: f.originNodeId,
            showCanvasFrame: !0 === h.showCanvasFrame,
            showReferenceIcon: !0 === h.showReferenceIcon,
            selectionSettlementScope: f,
            testIdPrefix: h.testIdPrefix,
          })
        );
      }
      function iT(e) {
        var t, n, i, o, s, l, d, c, u, m, v, p, f, h;
        let g,
          b,
          {
            activeLabel: x,
            blockedLabel: y,
            blockedSelectionScope: w = y ?? "",
            closeLabel: k,
            failureDescription: S,
            failureKey: j,
            feedbackPlacement: C = "canvas",
            interactionRootRef: M,
            label: R,
            locateFailedLabel: I,
            locateLabel: E,
            locateNode: P,
            locateVisible: A,
            onCancel: T,
            onSelectEligible: N,
            originBlockedReason: D,
            originNodeId: L,
            showCanvasFrame: F = !1,
            showReferenceIcon: _ = !1,
            selectionSettlementScope: z,
            testIdPrefix: H,
          } = e,
          O = (0, r.useRef)(null),
          $ = (0, r.useMemo)(() => new iw(), []),
          B = (0, ip.QM)(),
          [V, W] = (0, r.useState)(0);
        ((t = M),
          (n = T),
          ((g = (0, r.useRef)(n)).current = n),
          (0, r.useEffect)(() => {
            let e = t.current,
              n = null == e ? void 0 : e.ownerDocument;
            if (!e || !n) return;
            let a = !1,
              i = (t) => {
                !a &&
                  (function (e, t) {
                    if (
                      !(t instanceof Element) ||
                      !(0, iv.Gr)(t) ||
                      t.closest(
                        "[data-canvas-source-picker-overlay-control], [data-canvas-source-picker-preserve]",
                      )
                    )
                      return !1;
                    let n = t.closest(iH);
                    return (
                      !(n && e.contains(n)) ||
                      "origin" === n.dataset.canvasSourcePickerState
                    );
                  })(e, t.target) &&
                  ((a = !0), g.current());
              },
              r = (e) => {
                "Escape" === e.key ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  i(e);
              };
            return (
              n.addEventListener("pointerdown", i, !0),
              n.addEventListener("click", i, !0),
              n.addEventListener("keydown", r, !0),
              () => {
                (n.removeEventListener("pointerdown", i, !0),
                  n.removeEventListener("click", i, !0),
                  n.removeEventListener("keydown", r, !0));
              }
            );
          }, [t]),
          (i = M),
          (0, r.useEffect)(() => {
            let e = i.current;
            if (!e) return;
            let t = (e) => {
                if (e.matches(iH)) {
                  if ("origin" === e.dataset.canvasSourcePickerState)
                    return void ((e) => {
                      for (let t of e.children)
                        t instanceof HTMLElement &&
                          t.hasAttribute(iO) &&
                          (t.removeAttribute("inert"), t.removeAttribute(iO));
                    })(e);
                  for (let t of e.children)
                    !(t instanceof HTMLElement) ||
                      t.hasAttribute("inert") ||
                      (t.setAttribute("inert", ""), t.setAttribute(iO, ""));
                }
              },
              n = (e) => {
                var n;
                for (let n of (t(e), e.querySelectorAll(iH))) t(n);
                (null == (n = e.parentElement) ? void 0 : n.matches(iH)) &&
                  t(e.parentElement);
              };
            n(e);
            let a = new MutationObserver((e) => {
              for (let a of e) {
                if ("attributes" === a.type && a.target instanceof Element) {
                  t(a.target);
                  continue;
                }
                for (let e of a.addedNodes) e instanceof Element && n(e);
              }
            });
            return (
              a.observe(e, {
                attributeFilter: ["data-canvas-source-picker-state"],
                attributes: !0,
                childList: !0,
                subtree: !0,
              }),
              () => {
                for (let t of (a.disconnect(), e.querySelectorAll(`[${iO}]`)))
                  (t.removeAttribute("inert"), t.removeAttribute(iO));
              }
            );
          }, [i]),
          (o = M),
          (s = F),
          (l = B),
          (0, r.useLayoutEffect)(() => {
            let e = o.current;
            if (!e || !s) return;
            let t = e.querySelector(
              '[data-testid="canvas-source-picker-canvas-frame"]',
            );
            if (!t) return;
            let n = e.style.getPropertyValue(iN),
              a = t.style.getPropertyValue("right"),
              i = t.style.getPropertyValue("width"),
              r = new Map(iD.map((e) => [e, t.classList.contains(e)]));
            return (
              l.chromeMotionActive
                ? t.classList.add(...iD)
                : t.classList.remove(...iD),
              e.style.setProperty(iN, `${l.chromeRightInset}px`),
              (t.style.right = `var(${iN})`),
              (t.style.width = "auto"),
              () => {
                for (let [o, s] of (n
                  ? e.style.setProperty(iN, n)
                  : e.style.removeProperty(iN),
                a
                  ? t.style.setProperty("right", a)
                  : t.style.removeProperty("right"),
                i
                  ? t.style.setProperty("width", i)
                  : t.style.removeProperty("width"),
                r))
                  s ? t.classList.add(o) : t.classList.remove(o);
              }
            );
          }, [s, o, l.chromeMotionActive, l.chromeRightInset]),
          (d = M),
          (c = N),
          (u = $),
          ((b = (0, r.useRef)(c)).current = c),
          (0, r.useEffect)(() => {
            let e = d.current,
              t = null == e ? void 0 : e.ownerDocument;
            if (!e || !t) return;
            let n = (t) => {
                let n = t instanceof Element ? t : null,
                  a = null == n ? void 0 : n.closest(iH);
                return a && e.contains(a) && iW(a) ? a : null;
              },
              a = (e, t, n) => {
                if (!u.armConfirmation(t)) {
                  (e.preventDefault(), e.stopPropagation());
                  return;
                }
                b.current(n)
                  ? (u.confirm(t), e.preventDefault(), e.stopPropagation())
                  : u.settlePendingConfirmation();
              },
              i = (e) => {
                if (0 !== e.button) return;
                let t = n(e.target);
                t && (e.preventDefault(), e.stopPropagation(), u.press(t));
              },
              r = (e) => {
                u.release(n(e.target), e);
              },
              o = () => {
                u.clearPointerTracking();
              },
              s = (e) => {
                if (0 !== e.button) return;
                let t = n(e.target),
                  i = null == t ? void 0 : t.dataset.id;
                t && i && a(e, t, i);
              },
              l = (e) => {
                if ("Enter" !== e.key && " " !== e.key) return;
                let t = n(e.target),
                  i = null == t ? void 0 : t.dataset.id;
                t && i && a(e, t, i);
              };
            return (
              t.addEventListener("pointerdown", i, !0),
              t.addEventListener("pointerup", r, !0),
              t.addEventListener("pointercancel", o, !0),
              t.addEventListener("click", s, !0),
              t.addEventListener("keydown", l, !0),
              () => {
                (t.removeEventListener("pointerdown", i, !0),
                  t.removeEventListener("pointerup", r, !0),
                  t.removeEventListener("pointercancel", o, !0),
                  t.removeEventListener("click", s, !0),
                  t.removeEventListener("keydown", l, !0));
              }
            );
          }, [u, d]),
          (m = M),
          (v = O),
          (p = R),
          (f = y),
          (h = $),
          (0, r.useEffect)(() => {
            let e = m.current,
              t = v.current;
            if (!e || !t) return;
            let n = null,
              a = null,
              i = () => {
                n = null;
                let i = a;
                if (!i) return;
                let r = e.getBoundingClientRect(),
                  o = i.target instanceof Element ? i.target : null;
                if (
                  null == o
                    ? void 0
                    : o.closest("[data-canvas-source-picker-overlay-control]")
                ) {
                  (h.clearPointerTracking(), (t.hidden = !0));
                  return;
                }
                let s = null == o ? void 0 : o.closest(iH);
                if (i$(s, o)) {
                  (h.clearPointerTracking(), (t.hidden = !0));
                  return;
                }
                let l = null == s ? void 0 : s.dataset.canvasSourcePickerState,
                  d = iW(s);
                d && s ? h.hover(s, i) : h.clearPointerTracking();
                let c =
                    (null == s
                      ? void 0
                      : s.dataset.canvasSourcePickerBlockedReason) ??
                    ("blocked" === l ? f : void 0),
                  u = t.querySelector(
                    "[data-canvas-source-picker-pointer-label]",
                  );
                (u && (u.textContent = c ?? p),
                  (t.dataset.blocked = String(void 0 !== c)),
                  (t.dataset.eligible = String(d)),
                  (t.hidden = !1),
                  (t.style.transform = `translate3d(${i.clientX - r.left + 12}px, ${i.clientY - r.top + 12}px, 0)`));
              },
              r = (e) => {
                ((a = e), n ?? (n = window.requestAnimationFrame(i)));
              },
              o = () => {
                ((a = null),
                  null !== n && window.cancelAnimationFrame(n),
                  (n = null),
                  (t.hidden = !0),
                  h.clearPointerTracking());
              },
              s = new MutationObserver((e) => {
                for (let t of e)
                  t.target instanceof HTMLElement && h.reconcileNode(t.target);
              });
            return (
              s.observe(e, {
                attributeFilter: ["data-canvas-source-picker-state"],
                attributes: !0,
                subtree: !0,
              }),
              e.addEventListener("pointermove", r),
              e.addEventListener("pointerleave", o),
              () => {
                (s.disconnect(),
                  e.removeEventListener("pointermove", r),
                  e.removeEventListener("pointerleave", o),
                  null !== n && window.cancelAnimationFrame(n),
                  h.clear());
              }
            );
          }, [f, h, v, m, p]),
          (0, r.useLayoutEffect)(
            () => $.settlePendingConfirmation(),
            [$, j, z],
          ),
          (0, r.useEffect)(() => () => $.dispose(), [$]));
        let U = (0, r.useCallback)(() => {
          let e = null == P ? void 0 : P(L, "user", "preserveSelection");
          (null == e ? void 0 : e.ok) === !0 ? W(0) : W((e) => e + 1);
        }, [P, L]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i_, {
              closeLabel: k,
              label: R,
              locateLabel: E,
              onCancel: T,
              onLocate: U,
              locateVisible: A,
              showReferenceIcon: _,
              centerMotionActive: B.chromeMotionActive,
              visibleRightInset: B.chromeRightInset,
              testIdPrefix: H,
            }),
            (0, a.jsx)("output", {
              className: "sr-only",
              "aria-live": "polite",
              children: [x, y, D].filter(Boolean).join(" "),
            }),
            (0, a.jsx)(iB, { feedbackRef: O, label: R, testIdPrefix: H }),
            (0, a.jsx)(
              iL,
              {
                blockedLabel: y,
                failureDescription: S,
                failureKey: j,
                feedbackPlacement: C,
                interactionRootRef: M,
                locateFailedLabel: I,
                locateFailureRevision: V,
                originBlockedReason: D,
              },
              w,
            ),
          ],
        });
      }
      let iN = "--canvas-source-picker-visible-right-inset",
        iD = Object.freeze([
          "motion-safe:transition-[right]",
          "motion-safe:duration-dreamina-overlay",
          "motion-safe:ease-dreamina-soft",
          "motion-reduce:transition-none",
        ]);
      function iL(e) {
        var t, n, i, o, s, l;
        let d,
          {
            blockedLabel: c,
            failureDescription: u,
            failureKey: m,
            feedbackPlacement: v,
            interactionRootRef: p,
            locateFailedLabel: f,
            locateFailureRevision: h,
            originBlockedReason: g,
          } = e,
          [b, x] = (0, r.useState)();
        ((t = p),
          (n = void 0 !== c || void 0 !== g),
          (i = (e) => {
            x((t) => ({
              description: e || g || c || "",
              revision: ((null == t ? void 0 : t.revision) ?? 0) + 1,
            }));
          }),
          ((d = (0, r.useRef)(i)).current = i),
          (0, r.useEffect)(() => {
            let e = t.current;
            if (!e || !n) return;
            let a = (e) => {
                let t = e.target instanceof Element ? e.target : null,
                  n = null == t ? void 0 : t.closest(iH);
                !iV(n) ||
                  i$(n, t) ||
                  (e.preventDefault(),
                  e.stopPropagation(),
                  d.current(n.dataset.canvasSourcePickerBlockedReason ?? ""));
              },
              i = (e) => {
                if ("Enter" !== e.key && " " !== e.key) return;
                let t = e.target instanceof Element ? e.target : null,
                  n = null == t ? void 0 : t.closest(iH);
                !iV(n) ||
                  i$(n, t) ||
                  (e.preventDefault(),
                  e.stopPropagation(),
                  d.current(n.dataset.canvasSourcePickerBlockedReason ?? ""));
              };
            return (
              e.addEventListener("click", a, !0),
              e.addEventListener("keydown", i, !0),
              () => {
                (e.removeEventListener("click", a, !0),
                  e.removeEventListener("keydown", i, !0));
              }
            );
          }, [n, t]));
        let y = u,
          w = m;
        return (
          b && ((y = b.description), (w = `blocked:${b.revision}`)),
          h > 0 && ((y = f), (w = `locate:${h}`)),
          (o = y),
          (s = w),
          (l = v),
          o
            ? (0, a.jsx)(iF, {
                description: o,
                feedbackKey: s ?? o,
                placement: l,
              })
            : null
        );
      }
      function iF(e) {
        let { description: t, feedbackKey: n, placement: i } = e,
          o = (0, v.Yi)();
        return ((0, r.useEffect)(() => {
          if ("top-center" === i && o)
            return o({
              announcement: "assertive",
              closeLabel: (0, m.I7b)(),
              dismissible: !1,
              id: `canvas-source-picker:${n}`,
              status: "warning",
              title: t,
            });
        }, [t, n, i, o]),
        "top-center" === i && o)
          ? null
          : (0, a.jsx)(ig.Mp, { description: t }, n);
      }
      function i_(e) {
        var t;
        let {
            centerMotionActive: n,
            closeLabel: i,
            label: o,
            locateLabel: s,
            locateVisible: l,
            onCancel: d,
            onLocate: c,
            showReferenceIcon: u,
            visibleRightInset: m,
            testIdPrefix: v,
          } = e,
          p = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          var e;
          null == (e = p.current) || e.focus({ preventScroll: !0 });
        }, []);
        let f = null;
        return (
          l &&
            (f = (0, a.jsx)(C.K0, {
              className:
                "size-7 rounded-canvas-source-picker-locate bg-dreamina-on-media-block-default",
              "data-testid": `${v}-locate`,
              icon: (0, a.jsx)(C.Q2c, { size: 16 }),
              label: s,
              onClick: c,
              variant: "compact-on-media",
            })),
          (0, a.jsxs)("div", {
            ref: p,
            className: (0, im.A)(
              "absolute top-8 -translate-x-1/2",
              n &&
                "motion-safe:transition-[left] motion-safe:duration-dreamina-overlay motion-safe:ease-dreamina-soft motion-reduce:transition-none",
              "pointer-events-auto flex items-center gap-canvas-source-picker-chip-gap whitespace-nowrap rounded-canvas-source-picker-toast bg-dreamina-functional-success font-dreamina-cn font-dreamina-medium text-dreamina-cn-13-relaxed text-dreamina-on-media-text-primary shadow-dreamina-dropdown",
            ),
            "data-canvas-source-picker-overlay-control": !0,
            "data-testid": `${v}-chip`,
            style: {
              ...iI,
              ...iE,
              left: ((t = m), `calc((100% - ${Math.max(0, t)}px) / 2)`),
            },
            tabIndex: -1,
            children: [
              (0, a.jsxs)("span", {
                className:
                  "flex items-center gap-canvas-source-picker-chip-content-gap",
                children: [
                  u ? (0, a.jsx)(C.qTl, { size: 16 }) : null,
                  (0, a.jsx)("span", { children: o }),
                ],
              }),
              f,
              (0, a.jsx)(C.K0, {
                className: "-mr-canvas-source-picker-chip-close-offset",
                "data-testid": `${v}-close`,
                icon: (0, a.jsx)(C.USm, { size: 16 }),
                label: i,
                onClick: d,
                variant: "compact-on-media",
              }),
            ],
          })
        );
      }
      function iz(e) {
        let {
            interactionRootRef: t,
            locateVisible: n,
            locateNode: i,
            notice: o,
            onDismiss: s,
          } = e,
          l = (0, r.useRef)(null),
          { overlay: d } = o,
          c = (0, r.useRef)(s);
        c.current = s;
        let [u, m] = (0, r.useState)(0),
          v = "brief" === d.duration ? 3e3 : 6e3;
        (0, r.useEffect)(() => {
          let e = window.setTimeout(() => {
            var e, n, a;
            let i = document.activeElement;
            (i instanceof Element &&
              (null == (e = l.current) ? void 0 : e.contains(i)) &&
              (null == (a = t.current) ||
                null == (n = a.querySelector(".react-flow")) ||
                n.focus({ preventScroll: !0 })),
              c.current(o.noticeId));
          }, v);
          return () => window.clearTimeout(e);
        }, [v, t, o.noticeId]);
        let p = (0, r.useCallback)(() => {
            let e =
              null == i
                ? void 0
                : i(o.originNodeId, "user", "preserveSelection");
            (null == e ? void 0 : e.ok) === !0 ? m(0) : m((e) => e + 1);
          }, [i, o.originNodeId]),
          f = null;
        n &&
          (f = (0, a.jsxs)(C.$nd, {
            className:
              "h-canvas-source-picker-completion-locate rounded-canvas-source-picker-locate bg-dreamina-on-media-block-default px-canvas-source-picker-completion-locate-inset leading-dreamina-toast hover:bg-dreamina-on-media-block-hover active:bg-dreamina-on-media-block-pressed",
            contentSized: !0,
            "data-testid": `${d.testIdPrefix}-completion-locate`,
            onClick: p,
            size: "sm",
            variant: "mediaOverlay",
            children: [(0, a.jsx)(C.Q2c, { size: 16 }), d.locateLabel],
          }));
        let h = null;
        return (
          u > 0 &&
            (h = (0, a.jsx)(ig.Mp, { description: d.locateFailedLabel }, u)),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(L.Ae, {
                ref: l,
                "aria-atomic": "true",
                className: (0, im.A)(
                  "absolute top-8 -translate-x-1/2",
                  "rounded-canvas-source-picker-toast font-dreamina-medium leading-dreamina-toast",
                ),
                "data-canvas-source-picker-overlay-control": !0,
                "data-testid": `${d.testIdPrefix}-completion-chip`,
                role: "status",
                style: { ...iP, left: (0, ih.T0)() },
                variant: "status-success",
                children: [
                  (0, a.jsxs)("span", {
                    className:
                      "flex items-center gap-canvas-source-picker-chip-content-gap",
                    children: [
                      (0, a.jsx)(C.qTl, { size: 16 }),
                      (0, a.jsx)("span", { children: d.label }),
                    ],
                  }),
                  f,
                ],
              }),
              h,
            ],
          })
        );
      }
      let iH = ".react-flow__node[data-canvas-source-picker-state]",
        iO = "data-canvas-source-picker-owned-inert";
      function i$(e, t) {
        return (
          (null == e ? void 0 : e.dataset.canvasSourcePickerState) ===
            "origin" && (0, iv.Gr)(t)
        );
      }
      function iB(e) {
        let { feedbackRef: t, label: n, testIdPrefix: i } = e;
        return (0, a.jsx)(L.XE, {
          ref: t,
          "aria-hidden": "true",
          className:
            "absolute top-0 left-0 [&[data-eligible=false]_.octo-canvas-source-picker-add-badge]:hidden",
          "data-eligible": "false",
          "data-testid": `${i}-pointer-feedback`,
          hidden: !0,
          indicator: (0, a.jsx)(C.jIs, {}),
          indicatorProps: {
            className: "octo-canvas-source-picker-add-badge",
            "data-testid": `${i}-add-badge`,
          },
          style: iI,
          children: (0, a.jsx)("span", {
            "data-canvas-source-picker-pointer-label": !0,
            children: n,
          }),
        });
      }
      function iV(e) {
        return (
          !!e &&
          ("blocked" === e.dataset.canvasSourcePickerState ||
            (("origin" === e.dataset.canvasSourcePickerState ||
              "activated" === e.dataset.canvasSourcePickerState) &&
              void 0 !== e.dataset.canvasSourcePickerBlockedReason))
        );
      }
      function iW(e) {
        return (
          !!e &&
          (0, ix.vg)(
            e.dataset.canvasSourcePickerState,
            e.getAttribute("aria-disabled"),
          )
        );
      }
      let iU = Object.freeze([]),
        iq = Object.freeze({
          failureCode: void 0,
          pendingEdgeIds: iU,
          pendingNodeIds: iU,
          submitting: !1,
        }),
        iK = () => () => void 0;
      function iG(e) {
        let { fallbackFocusRef: t, port: n } = e,
          i = (0, M.oy)(),
          o = (0, r.useSyncExternalStore)(
            (null == n ? void 0 : n.subscribe) ?? iK,
            (null == n ? void 0 : n.getSnapshot) ?? iY,
            (null == n ? void 0 : n.getSnapshot) ?? iY,
          ),
          s = (0, r.useRef)(null),
          l = (0, r.useRef)(!1),
          d = o.pendingEdgeIds.length > 0;
        return (
          (0, r.useLayoutEffect)(() => {
            var e, n, a;
            let r, o;
            if (d && !l.current) {
              let e;
              ((l.current = !0),
                (s.current =
                  (e = document.activeElement) instanceof HTMLElement &&
                  e !== document.body
                    ? e
                    : null));
              return;
            }
            !d &&
              l.current &&
              ((l.current = !1),
              (e = i),
              (n = s.current),
              (r =
                (null == (a = t.current) ? void 0 : a.isConnected) === !0
                  ? a.matches('[role="application"], .react-flow')
                    ? a
                    : a.querySelector('[role="application"], .react-flow')
                  : null),
              (o = (null == n ? void 0 : n.isConnected) ? n : r),
              (0, M.BD)(e, o, { kind: "canvasRegion" }));
          }, [t, i, d]),
          (0, a.jsx)(iX, {
            errorCode: o.failureCode,
            onCancel: () => (null == n ? void 0 : n.cancel()),
            onConfirm: () => void (null == n || n.confirm()),
            open: d,
            pendingEdgeCount: o.pendingEdgeIds.length,
            pendingNodeCount: o.pendingNodeIds.length,
            submitting: o.submitting,
          })
        );
      }
      function iY() {
        return iq;
      }
      function iX(e) {
        let {
            errorCode: t,
            onCancel: n,
            onConfirm: i,
            open: o,
            pendingEdgeCount: s,
            pendingNodeCount: l,
            submitting: d,
          } = e,
          c = (0, r.useId)();
        return (0, a.jsx)(eU.lG, {
          open: o,
          onOpenChange: (e) => {
            e || d || n();
          },
          children: (0, a.jsx)(iQ, {
            descriptionId: c,
            errorCode: t,
            onCancel: n,
            onConfirm: i,
            open: o,
            pendingEdgeCount: s,
            pendingNodeCount: l,
            submitting: d,
          }),
        });
      }
      function iQ(e) {
        var t, n;
        let {
          descriptionId: i,
          errorCode: r,
          onCancel: o,
          onConfirm: s,
          open: l,
          pendingEdgeCount: d,
          pendingNodeCount: c,
          submitting: u,
        } = e;
        if (!l) return null;
        let v = ((t = c), (n = d), 0 === t ? (0, m.BOU)() : (0, m.Q8U)(t, n));
        return (0, a.jsxs)(eU.Cf, {
          appearance: "spacious",
          "aria-describedby": i,
          "aria-busy": u || void 0,
          className:
            "w-dreamina-dialog-medium-width bg-dreamina-bg-surface text-dreamina-text-primary",
          "data-testid": "subject-edge-delete-confirmation-dialog",
          overlayClassName: "bg-dreamina-bg-mask-60",
          onCloseAutoFocus: (e) => e.preventDefault(),
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-dreamina-dialog-title-group",
              children: [
                (0, a.jsxs)(eU.c7, {
                  appearance: "spacious",
                  children: [
                    (0, a.jsx)(eU.L3, {
                      className:
                        "text-dreamina-cn-16 font-dreamina-medium leading-dreamina-cn-16",
                      children: (0, m.jD6)(),
                    }),
                    (0, a.jsx)(eU.De, {
                      "data-testid": "subject-edge-delete-close",
                      disabled: u,
                      icon: (0, a.jsx)(C.gAK, { size: 20 }),
                      label: (0, m.X2c)(),
                    }),
                  ],
                }),
                (0, a.jsx)(eU.rr, {
                  className: "text-dreamina-cn-14 text-dreamina-text-secondary",
                  id: i,
                  children: v,
                }),
                (0, a.jsx)(iZ, { errorCode: r }),
              ],
            }),
            (0, a.jsxs)(eU.Es, {
              appearance: "spacious",
              children: [
                (0, a.jsx)(C.$nd, {
                  "data-testid": "subject-edge-delete-cancel",
                  disabled: u,
                  onClick: o,
                  variant: "secondary",
                  children: (0, m.dZ3)(),
                }),
                (0, a.jsx)(C.$nd, {
                  "data-testid": "subject-edge-delete-confirm",
                  loading: u,
                  onClick: s,
                  children: (0, m.ri2)(),
                }),
              ],
            }),
          ],
        });
      }
      function iZ(e) {
        let { errorCode: t } = e;
        return void 0 === t
          ? null
          : (0, a.jsx)("p", {
              className:
                "m-0 text-dreamina-cn-13 leading-dreamina-cn-13 text-dreamina-functional-error",
              "data-error-code": t,
              "data-testid": "subject-edge-delete-error",
              role: "alert",
              children: (0, m.Ud_)(),
            });
      }
      var iJ = n(99864);
      let i0 = (0, r.lazy)(() =>
        Promise.all([n.e(6807), n.e(1595), n.e(7946)])
          .then(n.bind(n, 54609))
          .then((e) => ({ default: e.TimelineFullscreenEditor })),
      );
      function i1(e) {
        let {
          addImportedAsset: t,
          actions: n,
          assetPanel: i,
          collaborationOverlay: o,
          data: s,
          editableProjectDownloadSession: l,
          exportSession: d,
          jianyingDraftGenerateSession: c,
          materialExportSession: u,
          pendingClips: m,
          port: v,
          restoreCanvasFocus: p,
          snapshot: h,
          sourcePicker: g,
          timelineRenderSession: b,
          uploadSession: x,
        } = e;
        (0, r.useEffect)(() => {
          "active" !== h.status ||
            s ||
            (null == v || v.close(), null == v || v.restoreFocus(h, p));
        }, [s, v, p, h]);
        let y = (0, r.useMemo)(
          () =>
            v && "active" === h.status
              ? {
                  getState: () => ({ available: !0 }),
                  execute: () => (v.close(), { status: "executed" }),
                  subscribe: () => () => void 0,
                }
              : null,
          [v, h.status],
        );
        return ((0, f.PK)("canvas.fullscreen", y),
        n && v && "active" === h.status && s)
          ? (0, a.jsx)(r.Suspense, {
              fallback: null,
              children: (0, a.jsx)(
                i0,
                {
                  addImportedAsset: t,
                  actions: n,
                  assetPanel: i,
                  backgroundPreview: h.preview,
                  collaborationOverlay: o,
                  data: s,
                  editableProjectDownloadSession: l,
                  exportSession: d,
                  jianyingDraftGenerateSession: c,
                  materialExportSession: u,
                  timelineRenderSession: b,
                  onCloseAutoFocus: () => v.restoreFocus(h, p),
                  onOpenChange: (e) => {
                    e || v.close();
                  },
                  open: !0,
                  pendingClips: m,
                  showTrigger: !1,
                  sourcePicker: g,
                  timelineId: h.timelineId,
                  ...(x ? { uploadSession: x } : {}),
                },
                h.timelineId,
              ),
            })
          : null;
      }
      var i2 = n(5312),
        i3 = n(32154),
        i6 = n(73046),
        i4 = n(17881),
        i5 = n(56);
      function i8(e) {
        return "active" !== e.snapshot.status
          ? null
          : (0, a.jsx)(
              i9,
              { ...e, snapshot: e.snapshot },
              e.snapshot.sessionId,
            );
      }
      function i9(e) {
        let {
            nodeDragging: t,
            port: n,
            snapshot: i,
            viewport: o,
            viewportMoving: s,
            viewportPresentation: l,
          } = e,
          [d, c] = (0, r.useState)(null),
          u = (0, M.oy)(),
          m = (0, r.useMemo)(() => [i.source.nodeId], [i.source.nodeId]),
          v = (0, T.Ij)(m),
          { shift: p, surfaceRefCallback: h } = (0, A.og)({
            geometry: v,
            viewport: o,
          }),
          [g, b] = (0, r.useState)(null),
          x = (0, r.useCallback)(
            (e) => {
              (b(e), h(e));
            },
            [h],
          );
        return (
          (0, i5.dh)({
            enabled: !t && !s,
            id: "video-frame-capture-toolbar",
            mediaGeometry: v,
            nodeId: i.source.nodeId,
            shift: p,
            surface: g,
            viewport: o,
            viewportPresentation: l,
          }),
          (function (e) {
            let {
              focusRestore: t,
              panelElement: n,
              playbackAvailable: a,
              playing: i,
              port: o,
              sourceNodeId: s,
            } = e;
            ((0, f.k5)(n, {
              actionId: "videoFrameCapture.togglePlayback",
              capability: {
                execute: () => (
                  i ? o.pause() : o.play(),
                  { status: "executed" }
                ),
                getState: () =>
                  a
                    ? { available: !0 }
                    : {
                        available: !1,
                        reason: "playbackBlocked",
                        result: "noop",
                      },
                subscribe: o.subscribe,
              },
              contextId: "videoFrameCapture",
            }),
              (0, f.C2)(!0, o.close),
              (0, r.useLayoutEffect)(() => {
                let e =
                  document.activeElement instanceof HTMLElement
                    ? document.activeElement
                    : null;
                return (
                  null == n || n.focus({ preventScroll: !0 }),
                  () => {
                    (0, M.BD)(t, e, { kind: "canvasNode", nodeId: s });
                  }
                );
              }, [t, n, s]),
              (0, r.useEffect)(() => {
                let e = (e) => {
                  let t = e.target;
                  if (
                    !(t instanceof HTMLElement) ||
                    (null == n ? void 0 : n.contains(t)) ||
                    t.closest(
                      '[data-testid="selection-context-toolbar"], [role="menu"]',
                    )
                  )
                    return;
                  let a = t.closest(".react-flow__node[data-id]");
                  (null == a ? void 0 : a.dataset.id) !== s && o.close();
                };
                return (
                  document.addEventListener("pointerdown", e),
                  () => document.removeEventListener("pointerdown", e)
                );
              }, [n, o, s]));
          })({
            focusRestore: u,
            panelElement: d,
            playbackAvailable: rm(i),
            playing: i.playing,
            port: n,
            sourceNodeId: i.source.nodeId,
          }),
          (0, a.jsx)(T.nJ, {
            "data-testid": "video-frame-capture-overlay",
            geometry: v,
            hideWhenAnchorOutsideViewport: !0,
            interactionActive: t || s,
            offset: rg,
            position: "bottom",
            preserveMountWhenAnchorOutsideViewport: !0,
            preserveVisibilityDuringInteraction: !0,
            viewport: o,
            zIndex: rb,
            children: (0, a.jsx)("div", {
              ref: x,
              style: {
                maxHeight: "calc(100vh - 32px)",
                maxWidth: "calc(100vw - 32px)",
                transform: `translate(${p.x}px, ${p.y}px)`,
              },
              children: (0, a.jsx)(i7, { panelRef: c, port: n, snapshot: i }),
            }),
          })
        );
      }
      let i7 = (0, r.memo)(function (e) {
        let { panelRef: t, port: n, snapshot: i } = e,
          [o, s] = (0, r.useState)(null),
          l = (0, r.useCallback)(
            (e) => {
              (s(e), t(e));
            },
            [t],
          ),
          d = (0, r.useRef)(null),
          c = (function (e) {
            let [t, n] = (0, r.useState)({ height: 48, width: 538 });
            return (
              (0, r.useLayoutEffect)(() => {
                let t = e.current;
                if (!t) return;
                let a = () => {
                  let e = t.getBoundingClientRect();
                  if (e.width <= 0 || e.height <= 0) return;
                  let a = {
                    height: Math.round(e.height),
                    width: Math.round(e.width),
                  };
                  n((e) =>
                    e.height === a.height && e.width === a.width ? e : a,
                  );
                };
                if ((a(), "u" < typeof ResizeObserver)) return;
                let i = new ResizeObserver(a);
                return (i.observe(t), () => i.disconnect());
              }, [e]),
              t
            );
          })(d),
          u = (0, r.useMemo)(
            () =>
              i.frameIndex
                ? (0, a2.Y2)({
                    frameIndex: i.frameIndex,
                    previewHeightPx: rx,
                    trackWidthPx: c.width,
                    videoHeight: i.source.height,
                    videoWidth: i.source.width,
                  })
                : rh,
            [i.frameIndex, i.source.height, i.source.width, c.width],
          ),
          m = `resource:${i.source.resourceId}`,
          v = (0, i6.pI)({
            diagnostics: { resourceId: i.source.resourceId, sourceKey: m },
            enabled: !0,
            sampleTimesMs: u.samples.map((e) => e.targetTimeMs),
            sourceIdentity: m,
            sourceUrl: i.source.sourceUrl,
            thumbnailHeight: rx,
            thumbnailWidth: Math.max(1, u.idealTileWidthPx),
          }),
          p = (function (e) {
            switch (e.submission.phase) {
              case "indexing":
                return (0, i3.nS)();
              case "capturing":
              case "idle":
                return null;
              case "submitting":
                return (0, i3.V9)();
              case "failed":
                var t = e.submission.reason;
                switch (t) {
                  case "capture":
                    return (0, i3.Tm)();
                  case "source":
                    return (0, i3.MQ)();
                }
                return;
            }
          })(i),
          f = (0, C.DFZ)(),
          h = (0, r.useCallback)(() => {
            null == o || o.focus({ preventScroll: !0 });
          }, [o]);
        return (0, a.jsx)(L.Bc, {
          delayDuration: 0,
          children: (0, a.jsx)(C.$8Q, {
            theme: f,
            children: (0, a.jsxs)("section", {
              ref: l,
              "aria-label": (0, i3.$R)(),
              className: `${N.Ed} [--canvas-frame-capture-thumbnail-radius:8px] [--canvas-frame-capture-thumbnail-inner-radius:7px] gap-[0.5rem] w-canvas-frame-capture-panel max-w-[calc(100vw_-_32px)] h-[116px] p-[0.75rem] pointer-events-auto nodrag nopan nowheel flex flex-col text-dreamina-text-primary`,
              "data-testid": "video-frame-capture-surface",
              tabIndex: -1,
              onKeyDownCapture: a2.yd,
              children: [
                (0, a.jsx)(re, {
                  onPointerInteractionComplete: h,
                  plan: u,
                  port: n,
                  snapshot: i,
                  status: p,
                  thumbnailState: v,
                  trackRef: d,
                }),
                (0, a.jsx)(rr, { panelElement: o, port: n, snapshot: i }),
              ],
            }),
          }),
        });
      });
      function re(e) {
        let t,
          n,
          {
            onPointerInteractionComplete: i,
            plan: o,
            port: s,
            snapshot: l,
            status: d,
            thumbnailState: c,
            trackRef: u,
          } = e,
          m = Math.max(1, l.source.durationMs),
          v = Math.min(100, Math.max(0, (l.currentTimeMs / m) * 100)),
          p = "degraded" === c.phase,
          f =
            ((t = (0, r.useRef)(!1)),
            (n = (0, r.useCallback)((e) => {
              e &&
                t.current &&
                ((t.current = !1), e.focus({ preventScroll: !0 }));
            }, [])),
            {
              onSliderBlur: (0, r.useCallback)(() => {
                t.current = !1;
              }, []),
              onSliderFocus: (0, r.useCallback)(() => {
                t.current = !0;
              }, []),
              retryButtonRef: n,
            }),
          h = p || !rm(l),
          g = (0, _.q)({
            disabled: h,
            durationMs: Math.max(1, l.source.durationMs),
            getCurrentTimeMs: () => l.currentTimeMs,
            onSeek: s.seek,
            stepMs: 1,
          });
        return (0, a.jsxs)("div", {
          ref: u,
          className: "h-[3rem] rounded-[4px] relative w-full overflow-visible",
          "data-testid": "video-frame-capture-track",
          children: [
            (0, a.jsx)(ra, {
              plan: o,
              retryButtonRef: f.retryButtonRef,
              thumbnailState: c,
            }),
            !!l.frameIndex &&
              !p &&
              (0, a.jsx)("span", {
                "aria-hidden": "true",
                className:
                  "z-[10] w-canvas-frame-capture-playhead-width h-canvas-frame-capture-playhead-height pointer-events-none absolute top-0.5 -translate-x-1/2 bg-dreamina-brand-default",
                "data-testid": "video-frame-capture-playhead",
                style: { left: `${v}%` },
              }),
            !p &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(F.Ap, {
                    "aria-valuetext": rf(rp(l.currentTimeMs)),
                    className:
                      "octo-frame-capture-slider z-canvas-frame-capture-interaction opacity-[0] absolute inset-x-0 -top-canvas-frame-capture-slider-hit-offset h-canvas-frame-capture-slider-hit-area w-full cursor-default",
                    disabled: h,
                    label: (0, i3.KO)(),
                    max: m,
                    min: 0,
                    step: 1,
                    value: Math.round(l.currentTimeMs),
                    onChange: (e) => s.seek(Number(e.currentTarget.value)),
                    onBlur: f.onSliderBlur,
                    onFocus: f.onSliderFocus,
                    onPointerDown: s.pause,
                    onPointerUp: i,
                  }),
                  (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: `${_.A} ${h ? "pointer-events-none" : "pointer-events-auto"} absolute -top-canvas-frame-capture-slider-hit-offset h-canvas-frame-capture-slider-hit-area z-canvas-frame-capture-interaction touch-none`,
                    "data-testid": "video-frame-capture-playhead-hit-target",
                    style: { left: `${v}%` },
                    onLostPointerCapture: g.onLostPointerCapture,
                    onPointerCancel: g.onPointerCancel,
                    onPointerDown: (e) => {
                      (s.pause(), g.onPointerDown(e));
                    },
                    onPointerMove: g.onPointerMove,
                    onPointerUp: (e) => {
                      (g.onPointerUp(e), i());
                    },
                  }),
                ],
              }),
            (0, a.jsx)(rt, { phase: l.submission.phase, status: d }),
          ],
        });
      }
      function rt(e) {
        var t;
        let { phase: n, status: i } = e;
        return i
          ? (0, a.jsx)("output", {
              className:
                "z-[30] bg-dreamina-bg-mask-30 pointer-events-none absolute inset-0 flex items-center justify-center text-dreamina-cn-12 text-dreamina-on-media-text-primary",
              "data-testid": "video-frame-capture-status",
              ...("failed" === (t = n)
                ? { role: "alert" }
                : "submitting" === t
                  ? { "aria-busy": !0, "aria-live": "off" }
                  : { "aria-live": "polite" }),
              children: i,
            })
          : null;
      }
      let rn =
        "h-[2.25rem] rounded-[3px] bg-dreamina-block-secondary-default absolute inset-x-0 top-1.5 flex overflow-hidden";
      function ra(e) {
        let { plan: t, retryButtonRef: n, thumbnailState: i } = e;
        return "degraded" === i.phase
          ? (0, a.jsx)("div", {
              className: rn,
              children: (0, a.jsx)(a2.tu, {
                alert: (0, i3.jw)(),
                retryButtonRef: n,
                retryLabel: (0, i3.MI)(),
                testId: "video-frame-capture-preview-failed-track",
                onRetry: i.retry,
              }),
            })
          : (0, a.jsx)("div", {
              "aria-hidden": "true",
              className: rn,
              children: (0, a.jsx)(ri, { plan: t, thumbnailState: i }),
            });
      }
      function ri(e) {
        let { plan: t, thumbnailState: n } = e;
        return (0, a.jsx)(a.Fragment, {
          children: t.samples.map((e, i) => {
            var r;
            let o =
                i === t.samples.length - 1
                  ? t.lastTileVisibleWidthPx
                  : t.renderedTileWidthPx,
              s = null == (r = n.tiles[i]) ? void 0 : r.url;
            return (0, a.jsx)(
              "span",
              {
                className:
                  "h-[2.25rem] bg-dreamina-block-secondary-default shrink-0 overflow-hidden",
                style: { width: o },
                children: s
                  ? (0, a.jsx)("img", {
                      alt: "",
                      className: "size-full object-cover",
                      draggable: !1,
                      src: s,
                    })
                  : null,
              },
              `${e.targetFrameIndex ?? e.index}:${e.targetTimeMs}`,
            );
          }),
        });
      }
      function rr(e) {
        let { panelElement: t, port: n, snapshot: i } = e,
          o = ru(i.submission),
          s = rp(i.currentTimeMs),
          l = rp(i.source.durationMs),
          d = (0, r.useMemo)(() => rf(s), [s]),
          c = (0, r.useMemo)(() => rf(l), [l]);
        return (0, a.jsxs)("div", {
          className:
            "[&>*]:min-w-0 min-w-0 h-[2.25rem] grid grid-cols-canvas-frame-capture-controls items-center",
          "data-testid": "video-frame-capture-control-row",
          children: [
            (0, a.jsxs)("div", {
              className:
                "gap-[0.25rem] min-w-0 h-[1.25rem] flex items-center overflow-hidden",
              children: [
                (0, a.jsx)(C.McC, {
                  ariaLabel: i.playing ? (0, i3.Js)() : (0, i3.Vt)(),
                  className: "text-dreamina-text-primary",
                  disabled: !rm(i),
                  playing: i.playing,
                  onClick: () => {
                    i.playing ? n.pause() : n.play();
                  },
                }),
                (0, a.jsxs)("output", {
                  "aria-label": `${d} / ${c}`,
                  className:
                    "gap-[0.25rem] h-[1.25rem] flex shrink-0 items-center whitespace-nowrap font-dreamina-number text-dreamina-number-12 font-dreamina-medium text-dreamina-text-primary tabular-nums [font-feature-settings:'tnum'_1]",
                  children: [
                    (0, a.jsx)(rl, { align: "right", value: d }),
                    (0, a.jsx)("span", {
                      className:
                        "inline-flex w-canvas-frame-capture-clock-separator shrink-0 justify-center text-center",
                      children: "/",
                    }),
                    (0, a.jsx)(rl, { align: "left", value: c }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "min-w-0 flex justify-center overflow-visible",
              children: (0, a.jsx)(i4.c, {
                captureLabel: (0, i3.By)(),
                captures: i.captures,
                disabled: o,
                loading: "capturing" === i.submission.phase,
                maxCount: 20,
                onCapture: () => void n.capture(),
                onCapturePointerActivation: () =>
                  null == t ? void 0 : t.focus({ preventScroll: !0 }),
                onRemove: n.remove,
                previewHeader: (e) =>
                  `${rf(rp(e.targetTimeMs))} ${(0, i3.By)()}`,
                previewSourceSize: i.source,
                railLabel: (0, i3.$R)(),
                removeLabel: i3.NK,
                testIdPrefix: "video-frame-capture",
                thumbnailDescription: (e, t) =>
                  (0, i3.it)(t, rf(rp(e.targetTimeMs))),
                thumbnailLabel: i3.et,
              }),
            }),
            (0, a.jsx)("div", {
              className: "flex justify-end overflow-hidden",
              children: (0, a.jsx)(rd, {
                captureCount: i.captures.length,
                disabled:
                  rv(i.submission) ||
                  ("failed" === i.submission.phase && !i.submission.retryable),
                loading: "submitting" === i.submission.phase,
                retryable:
                  "failed" === i.submission.phase && i.submission.retryable,
                tooltipContainer: t,
                onConfirm: () =>
                  void (0 === i.captures.length ? n.capture() : n.confirm()),
              }),
            }),
          ],
        });
      }
      let ro = {
          left: "grid w-canvas-frame-capture-clock grid-cols-canvas-frame-capture-clock shrink-0 justify-start",
          right:
            "grid w-canvas-frame-capture-clock grid-cols-canvas-frame-capture-clock shrink-0 justify-end",
        },
        rs =
          "inline-flex w-canvas-frame-capture-clock-digit shrink-0 justify-center",
        rl = (0, r.memo)(function (e) {
          let { align: t, value: n } = e;
          return (0, a.jsxs)("span", {
            "aria-hidden": "true",
            className: ro[t],
            children: [
              (0, a.jsx)("span", { className: rs, children: n[0] }),
              (0, a.jsx)("span", { className: rs, children: n[1] }),
              (0, a.jsx)("span", {
                className:
                  "inline-flex w-canvas-frame-capture-clock-separator shrink-0 justify-center",
                children: n[2],
              }),
              (0, a.jsx)("span", { className: rs, children: n[3] }),
              (0, a.jsx)("span", { className: rs, children: n[4] }),
            ],
          });
        });
      function rd(e) {
        let {
          captureCount: t,
          disabled: n,
          loading: i,
          onConfirm: r,
          retryable: o,
          tooltipContainer: s,
        } = e;
        return 0 !== t || o || i
          ? (0, a.jsx)(C.$nd, {
              className: rc,
              disabled: n,
              loading: i,
              size: "md",
              onClick: r,
              children: o ? (0, i3.Jq)() : (0, i3.Fr)(),
            })
          : (0, a.jsxs)(L.m_, {
              children: [
                (0, a.jsx)(L.k$, {
                  asChild: !0,
                  children: (0, a.jsx)(C.$nd, {
                    className: rc,
                    disabledReason: (0, i3.XG)(),
                    size: "md",
                    children: (0, i3.Fr)(),
                  }),
                }),
                (0, a.jsx)(L.ZI, {
                  portalContainer: s,
                  side: "top",
                  children: (0, i3.XG)(),
                }),
              ],
            });
      }
      let rc =
        "w-full min-w-0 max-w-canvas-frame-capture-confirm [box-shadow:none] border-0 text-dreamina-cn-13 font-dreamina-medium";
      function ru(e) {
        return rv(e) || "failed" === e.phase;
      }
      function rm(e) {
        return !ru(e.submission) && !!e.frameIndex;
      }
      function rv(e) {
        return (
          "indexing" === e.phase ||
          "capturing" === e.phase ||
          "submitting" === e.phase
        );
      }
      function rp(e) {
        return Math.max(0, Math.floor(e / 1e3));
      }
      function rf(e) {
        let t = Math.floor(e / 60);
        return `${String(t).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}`;
      }
      let rh = Object.freeze({
          idealTileWidthPx: 0,
          kind: "frame-domain",
          lastTileVisibleWidthPx: 0,
          renderedTileWidthPx: 0,
          sampleCount: 0,
          samples: Object.freeze([]),
        }),
        rg = 19,
        rb = S.Xx,
        rx = 36;
      var ry = n(48671),
        rw = n(45299),
        rk = n(14389),
        rS = n(88852);
      function rj(e) {
        var t;
        let { presentation: n } = e;
        return (0, a.jsx)(rS.W, {
          aspectRatio:
            void 0 !== (t = n).width &&
            void 0 !== t.height &&
            t.width > 0 &&
            t.height > 0
              ? t.width / t.height
              : 16 / 9,
          closeLabel: (0, m.neC)(),
          description: (0, m.lwk)(n.title),
          descriptionId: "video-fullscreen-description",
          dialogTestId: "video-fullscreen-dialog",
          layoutTestIds: {
            close: "video-fullscreen-close",
            closeRail: "video-fullscreen-close-rail",
            layout: "video-fullscreen-layout",
            mediaRegion: "video-fullscreen-media-region",
          },
          mediaTestId: "video-fullscreen-media",
          open: e.open,
          title: (0, m.cM2)(n.title),
          onCloseAutoFocus: e.onCloseAutoFocus,
          onOpenChange: e.onOpenChange,
          children: (0, a.jsx)(
            aM.L,
            {
              active: !0,
              autoPlay: !0,
              controlsMode: "fullscreen",
              fit: "contain",
              interactive: !0,
              initialPlaybackStatus: e.initialPlaybackStatus,
              posterUrl: n.posterUrl,
              previewUrl: n.previewUrl,
              subtitle: n.subtitle,
              resourceId: n.resourceId,
              title: n.title,
              onRecoverPlaybackUrl: e.onRecoverPlaybackUrl,
              onRefreshResourceIds: e.onRefreshResourceIds,
              onVideoElementChange: e.onVideoElementChange,
            },
            n.resourceId,
          ),
        });
      }
      let rC = [
        "play",
        "playing",
        "pause",
        "ended",
        "seeking",
        "seeked",
        "timeupdate",
      ];
      function rM(e) {
        var t, n;
        let i,
          s,
          l,
          d,
          { port: c, snapshot: u } = e,
          { writeChromeVisible: m } = (0, o.A1)(),
          v =
            ((n = c.playbackHandoffSource),
            (i = (0, r.useRef)(null)),
            (s = (0, r.useRef)(null)),
            (l = (0, r.useRef)(() => void 0)),
            (d = (0, r.useCallback)(
              (e) => {
                let t = i.current,
                  a = s.current;
                if (
                  (t && a && (s.current = rR(t, "element_change", a)),
                  l.current(),
                  (l.current = () => void 0),
                  (i.current = e),
                  !e || !n)
                )
                  return;
                s.current ??
                  (s.current = {
                    currentTime: n.currentTime,
                    status: n.status,
                  });
                let r = s.current,
                  o = () => rI(r, e),
                  d = (t) => {
                    let a = s.current;
                    if (!a) return;
                    let i = rR(e, t.type, a);
                    ((s.current = i), rI(i, n.video));
                  };
                (o(),
                  e.addEventListener("loadedmetadata", o),
                  rC.forEach((t) => e.addEventListener(t, d)),
                  (l.current = () => {
                    (e.removeEventListener("loadedmetadata", o),
                      rC.forEach((t) => e.removeEventListener(t, d)));
                  }));
              },
              [n],
            )),
            (0, r.useEffect)(
              () => () => {
                var e, t;
                let a =
                  ((e = i.current),
                  (t = s.current),
                  e && t ? rR(e, "cleanup", t) : t);
                ((function (e, t) {
                  if (e && t) {
                    if ((rI(t, e), "playing" !== t.status)) return e.pause();
                    try {
                      e.play().catch(() => e.pause());
                    } catch {
                      e.pause();
                    }
                  }
                })((null == n ? void 0 : n.video) ?? null, a),
                  l.current(),
                  (l.current = () => void 0),
                  (i.current = null),
                  (s.current = null));
              },
              [n],
            ),
            d);
        return ((0, r.useEffect)(() => {
          m || "active" !== u.status || c.close();
        }, [c, u.status, m]),
        m && "active" === u.status)
          ? (0, a.jsx)(rj, {
              open: !0,
              initialPlaybackStatus:
                null == (t = c.playbackHandoffSource) ? void 0 : t.status,
              presentation: u.presentation,
              onCloseAutoFocus: (e) => {
                (e.preventDefault(), c.restoreFocus());
              },
              onOpenChange: (e) => {
                e || c.close();
              },
              onRecoverPlaybackUrl: e.onRecoverPlaybackUrl,
              onRefreshResourceIds: e.onRefreshResourceIds,
              onVideoElementChange: v,
            })
          : null;
      }
      function rR(e, t, n) {
        let a = Number.isFinite(e.currentTime)
            ? Math.max(0, e.currentTime)
            : n.currentTime,
          i = n.status;
        return (
          "play" === t || "playing" === t
            ? (i = "playing")
            : "pause" === t
              ? (i = "paused")
              : ("ended" === t || e.ended) && (i = "ended"),
          { currentTime: a, status: i }
        );
      }
      function rI(e, t) {
        let { currentTime: n } = e;
        t &&
          Number.isFinite(n) &&
          !(t.readyState < HTMLMediaElement.HAVE_METADATA) &&
          t.currentTime !== n &&
          (t.currentTime = Math.max(0, n));
      }
      var rE = n(91902),
        rP = n(66661),
        rA = n(3217),
        rT = n(87902);
      function rN(e) {
        return "active" !== e.snapshot.status
          ? null
          : (0, a.jsx)(
              rD,
              { ...e, snapshot: e.snapshot },
              e.snapshot.sessionId,
            );
      }
      function rD(e) {
        let {
            nodeDragging: t,
            port: n,
            snapshot: i,
            viewport: o,
            viewportMoving: s,
            viewportPresentation: l,
          } = e,
          [d, c] = (0, r.useState)(null),
          u = (0, M.oy)(),
          m = (function (e, t) {
            var n, a, i, o, s, l, d, c, u, m, v, p, f, h, g, b, x, y;
            let w,
              k,
              S,
              j,
              C,
              M,
              I,
              E,
              P,
              A,
              T,
              N,
              D,
              L,
              F,
              _,
              z,
              H,
              O = (0, r.useRef)(null),
              $ = (0, r.useRef)(!1),
              B = (0, r.useRef)(),
              V = (0, r.useRef)(),
              [W, U] = (0, r.useState)(() => (0, rP.iI)(e.source.durationMs)),
              [q, K] = (0, r.useState)(0),
              [G, Y] = (0, r.useState)(!1),
              X = (0, r.useRef)(null),
              Q = (0, r.useCallback)((e) => {
                X.current = e;
              }, []),
              Z = (0, r.useCallback)(() => null !== X.current, []),
              J = ((n = W), ((w = (0, r.useRef)(n)).current = n), w),
              ee =
                ((a = e.source.durationMs),
                (i = q),
                (k = (0, r.useRef)(null)),
                (S = (0, r.useRef)(0)),
                (j = (0, r.useRef)(i)),
                (0, r.useLayoutEffect)(() => {
                  j.current = i;
                }, [i]),
                (C = (0, r.useCallback)(
                  (e) => {
                    ((j.current = e), r_(k.current, e, a, S.current));
                  },
                  [a],
                )),
                (M = (0, r.useCallback)(
                  (e, t) => {
                    ((k.current = e), (S.current = t), r_(e, j.current, a, t));
                  },
                  [a],
                )),
                (I = (0, r.useCallback)(() => j.current, [])),
                (0, r.useMemo)(
                  () => ({
                    getCurrentTimeMs: I,
                    onElementChange: M,
                    update: C,
                  }),
                  [I, M, C],
                )),
              et =
                ((o = e.source.durationMs),
                (s = B),
                (l = V),
                (d = K),
                (c = ee.update),
                (u = O),
                (E = (0, r.useRef)(null)),
                (P = (0, r.useRef)()),
                (A = (0, r.useRef)(!1)),
                (T = (0, r.useCallback)(
                  (e) => {
                    let t = u.current;
                    if (!t) {
                      s.current = e;
                      return;
                    }
                    let n = e / 1e3;
                    Math.abs(t.currentTime - n) <= 1 / 60 ||
                      ((t.currentTime = n), (A.current = t.seeking));
                  },
                  [s, u],
                )),
                (N = (0, r.useCallback)(() => {
                  A.current = !1;
                  let e = E.current;
                  ((E.current = null), null !== e && T(e));
                }, [T])),
                (D = (0, r.useCallback)(() => {
                  E.current = null;
                }, [])),
                (L = (0, r.useCallback)(
                  (e, t) => {
                    let n = Math.min(o, Math.max(0, e));
                    ((P.current = t ? n : void 0),
                      (l.current = void 0),
                      d(n),
                      c(n),
                      A.current ? (E.current = n) : T(n));
                  },
                  [T, o, l, d, c],
                )),
                (F = (0, r.useCallback)(() => {
                  let e = P.current;
                  return ((P.current = void 0), e);
                }, [])),
                (0, r.useMemo)(
                  () => ({
                    consumeRangeCorrection: F,
                    discardQueuedSeek: D,
                    handleSeeked: N,
                    seek: (e) => L(e, !1),
                    seekRangeBoundary: (e) => L(e, !0),
                  }),
                  [F, D, N, L],
                ));
            !(function (e) {
              var t,
                n,
                a,
                i,
                o,
                s,
                l,
                d,
                c,
                u,
                m,
                v,
                p,
                f,
                h,
                g,
                b,
                x,
                y,
                w,
                k,
                S;
              let j,
                C,
                M,
                I,
                E,
                {
                  rangeRef: P,
                  setCurrentTimeMs: A,
                  setPlaying: T,
                  updatePlayhead: N,
                  videoRef: D,
                } = e,
                L =
                  ((t = e.pendingPlayRef),
                  (n = e.pendingSeekMsRef),
                  (a = e.playbackBoundaryMsRef),
                  (i = P),
                  (o = A),
                  (s = T),
                  (l = N),
                  (d = D),
                  (j = (0, r.useCallback)(() => {
                    let e = d.current;
                    if (!e || !e.paused) return;
                    let t =
                      a.current ?? Math.max(0, Math.round(1e3 * e.currentTime));
                    (o(t), l(t));
                  }, [a, o, l, d])),
                  (C = (0, r.useCallback)(
                    (e) => {
                      var i, r, d, c;
                      let u;
                      ((a.current = void 0),
                        (i = e),
                        (r = n),
                        (d = o),
                        (c = s),
                        void 0 !== (u = r.current) &&
                          ((i.currentTime = u / 1e3), (r.current = void 0)),
                        d(Math.round(1e3 * i.currentTime)),
                        c(!i.paused),
                        l(Math.round(1e3 * e.currentTime)),
                        t.current &&
                          ((t.current = !1), e.play().catch(() => s(!1))));
                    },
                    [t, n, a, o, s, l],
                  )),
                  (M = (0, r.useCallback)(() => {
                    a.current = void 0;
                    let e = d.current,
                      t = i.current;
                    if (e && t) {
                      let n = Math.round(1e3 * e.currentTime);
                      ((0, R.PM)(n, t) || n >= (0, R.b)(e, t)) &&
                        ((e.currentTime = t.startMs / 1e3),
                        o(t.startMs),
                        l(t.startMs));
                    }
                    s(!0);
                  }, [a, i, o, s, l, d])),
                  (I = (0, r.useCallback)(() => {
                    let e = d.current;
                    if (e) {
                      let t =
                        a.current ??
                        Math.max(0, Math.round(1e3 * e.currentTime));
                      (o(t), l(t));
                    }
                    s(!1);
                  }, [a, o, s, l, d])),
                  (E = (0, r.useCallback)(() => {
                    let e = i.current;
                    e && ((a.current = e.endMs), o(e.endMs), l(e.endMs), s(!1));
                  }, [a, i, o, s, l])),
                  (0, r.useMemo)(
                    () => ({
                      handleEnded: E,
                      handlePause: I,
                      handlePlay: M,
                      handleTimeUpdate: j,
                      handleVideoBound: C,
                    }),
                    [E, I, M, j, C],
                  )),
                F =
                  ((c = D),
                  (u = e.playbackBoundaryMsRef),
                  (m = P),
                  (v = A),
                  (p = N),
                  (f = e.consumeRangeCorrection),
                  (h = e.handleQueuedSeek),
                  (0, r.useCallback)(() => {
                    let e = c.current;
                    if (e) {
                      u.current = void 0;
                      let t = f(),
                        n = (function (e, t, n) {
                          if (void 0 !== n) {
                            let t = n / 1e3;
                            return (
                              Math.abs(e.currentTime - t) > rL &&
                                (e.currentTime = t),
                              n
                            );
                          }
                          return e.paused
                            ? Math.max(0, Math.round(1e3 * e.currentTime))
                            : (function (e, t) {
                                let n = e.currentTime,
                                  a = Math.max(0, Math.round(1e3 * n));
                                if (!t) return a;
                                let i = (0, rP.U$)(a, t),
                                  r = i / 1e3;
                                return (
                                  Math.abs(n - r) > rL && (e.currentTime = r),
                                  i
                                );
                              })(e, t);
                        })(e, m.current, t);
                      (v(n), p(n));
                    }
                    h();
                  }, [f, h, u, m, v, p, c]));
              ((function (e) {
                let {
                  handleEnded: t,
                  handlePause: n,
                  handlePlay: a,
                  handleSeeked: i,
                  handleTimeUpdate: o,
                  handleVideoBound: s,
                  nodeId: l,
                  port: d,
                  videoRef: c,
                } = e;
                (0, r.useEffect)(() => {
                  let e = null,
                    r = () => {
                      var r, u;
                      let m = d.get(l);
                      m === e ||
                        (rF(e, {
                          handleEnded: t,
                          handlePause: n,
                          handlePlay: a,
                          handleSeeked: i,
                          handleTimeUpdate: o,
                        }),
                        (e = m),
                        (c.current = m),
                        m &&
                          ((r = m),
                          (u = {
                            handleEnded: t,
                            handlePause: n,
                            handlePlay: a,
                            handleSeeked: i,
                            handleTimeUpdate: o,
                          }),
                          r.addEventListener("ended", u.handleEnded),
                          r.addEventListener("pause", u.handlePause),
                          r.addEventListener("play", u.handlePlay),
                          r.addEventListener("seeked", u.handleSeeked),
                          r.addEventListener("timeupdate", u.handleTimeUpdate),
                          s(m)));
                    },
                    u = d.subscribe(l, r);
                  return (
                    r(),
                    () => {
                      (u(),
                        rF(e, {
                          handleEnded: t,
                          handlePause: n,
                          handlePlay: a,
                          handleSeeked: i,
                          handleTimeUpdate: o,
                        }),
                        c.current === e && (c.current = null));
                    }
                  );
                }, [t, n, a, i, o, s, l, d, c]);
              })({
                ...L,
                handleSeeked: F,
                nodeId: e.nodeId,
                port: e.sourceVideoElements,
                videoRef: D,
              }),
                (g = e.playing),
                (b = D),
                (x = e.playbackBoundaryMsRef),
                (y = P),
                (w = A),
                (k = T),
                (S = N),
                (0, r.useEffect)(() => {
                  if (!g) return;
                  let e = b.current;
                  if (!e) return;
                  let t = 0,
                    n = 0,
                    a = Math.floor(e.currentTime),
                    i = (r) => {
                      let o = y.current;
                      if (e.paused || !o) return;
                      let s = Math.round((r ?? e.currentTime) * 1e3);
                      if (s >= (0, R.b)(e, o)) {
                        (e &&
                          ((x.current = o.endMs),
                          e.paused || e.pause(),
                          w(o.endMs),
                          k(!1)),
                          S(o.endMs));
                        return;
                      }
                      S(s);
                      let l = Math.floor(s / 1e3);
                      (l !== a && ((a = l), w(s)),
                        "function" == typeof e.requestVideoFrameCallback
                          ? (n = e.requestVideoFrameCallback((e, t) =>
                              i(t.mediaTime),
                            ))
                          : (t = requestAnimationFrame(() => i())));
                    };
                  return (
                    i(),
                    () => {
                      (t && cancelAnimationFrame(t),
                        n &&
                          (null == e ? void 0 : e.cancelVideoFrameCallback) &&
                          e.cancelVideoFrameCallback(n));
                    }
                  );
                }, [g, x, y, w, k, S, b]));
            })({
              consumeRangeCorrection: et.consumeRangeCorrection,
              handleQueuedSeek: et.handleSeeked,
              nodeId: e.source.nodeId,
              pendingPlayRef: $,
              pendingSeekMsRef: B,
              playbackBoundaryMsRef: V,
              playing: G,
              rangeRef: J,
              setCurrentTimeMs: K,
              setPlaying: Y,
              sourceVideoElements: t.sourceVideoElements,
              updatePlayhead: ee.update,
              videoRef: O,
            });
            let en =
                ((m = {
                  currentTimeMs: q,
                  getCurrentTimeMs: ee.getCurrentTimeMs,
                  pendingPlayRef: $,
                  playbackBoundaryMsRef: V,
                  range: W,
                  seekController: et,
                  setCurrentTimeMs: K,
                  setRange: U,
                  setPlaying: Y,
                  videoRef: O,
                }),
                (z =
                  ((v = _ =
                    (0, R.NM)(m.currentTimeMs, {
                      mediaRef: m.videoRef,
                      pendingPlayRef: m.pendingPlayRef,
                      playbackTimePinMsRef: m.playbackBoundaryMsRef,
                      setCurrentTimeMs: m.setCurrentTimeMs,
                      setRange: m.setRange,
                      setPlaying: m.setPlaying,
                    })),
                  (p = m.seekController.discardQueuedSeek),
                  (f = m.getCurrentTimeMs),
                  (h = m.seekController.seekRangeBoundary),
                  (0, r.useCallback)(
                    (e) => {
                      let t = f();
                      (p(), v(e));
                      let n = (0, rP.U$)(t, e);
                      n !== t && h(n);
                    },
                    [v, p, f, h],
                  ))),
                (H =
                  ((g = _),
                  (b = m.seekController.discardQueuedSeek),
                  (x = m.getCurrentTimeMs),
                  (y = m.seekController.seekRangeBoundary),
                  (0, r.useCallback)(
                    (e) => {
                      let t = x();
                      (b(), g(e));
                      let n = (0, rP.U$)(t, e);
                      n !== t && y(n);
                    },
                    [g, b, x, y],
                  ))),
                {
                  ...(0, R.$Z)({
                    applyRangeChange: z,
                    mediaRef: m.videoRef,
                    pendingPlayRef: m.pendingPlayRef,
                    playbackTimePinMsRef: m.playbackBoundaryMsRef,
                    range: m.range,
                    seek: (e) => {
                      (m.seekController.discardQueuedSeek(),
                        m.seekController.seekRangeBoundary(e));
                    },
                    setPlaying: m.setPlaying,
                  }),
                  onRangeCommit: H,
                }),
              ea = (function (e) {
                let {
                  currentTimeMs: t,
                  discardQueuedSeek: n,
                  pendingPlayRef: a,
                  pendingSeekMsRef: i,
                  playbackBoundaryMsRef: o,
                  range: s,
                  setCurrentTimeMs: l,
                  setPlaying: d,
                  videoRef: c,
                } = e;
                return (0, r.useCallback)(() => {
                  (n(),
                    (function (e, t) {
                      if (!e) {
                        ((t.playbackBoundaryMsRef.current = void 0),
                          (0, R.WR)(e, t.currentTimeMs, t.range) &&
                            ((t.pendingSeekMsRef.current = t.range.startMs),
                            t.setCurrentTimeMs(t.range.startMs)),
                          (t.pendingPlayRef.current =
                            !t.pendingPlayRef.current));
                        return;
                      }
                      if (((t.pendingPlayRef.current = !1), !e.paused)) {
                        (e.pause(), t.setPlaying(!1));
                        return;
                      }
                      ((t.playbackBoundaryMsRef.current = void 0),
                        (0, R.WR)(e, t.currentTimeMs, t.range) &&
                          ((e.currentTime = t.range.startMs / 1e3),
                          t.setCurrentTimeMs(t.range.startMs)),
                        e.play().catch(() => t.setPlaying(!1)));
                    })(c.current, {
                      currentTimeMs: t,
                      pendingPlayRef: a,
                      pendingSeekMsRef: i,
                      playbackBoundaryMsRef: o,
                      range: s,
                      setCurrentTimeMs: l,
                      setPlaying: d,
                    }));
                }, [t, n, a, i, o, s, l, d, c]);
              })({
                currentTimeMs: q,
                discardQueuedSeek: et.discardQueuedSeek,
                pendingPlayRef: $,
                pendingSeekMsRef: B,
                playbackBoundaryMsRef: V,
                range: W,
                setCurrentTimeMs: K,
                setPlaying: Y,
                videoRef: O,
              });
            return (function (e) {
              let {
                currentTimeMs: t,
                handleRangeGestureChange: n,
                isRangeGestureActive: a,
                playhead: i,
                playing: o,
                range: s,
                rangeInteractions: l,
                seekController: d,
                togglePlayback: c,
              } = e;
              return (0, r.useMemo)(
                () => ({
                  currentTimeMs: t,
                  getCurrentTimeMs: i.getCurrentTimeMs,
                  handleHandleDragEnd: l.onHandleDragEnd,
                  handleHandleDragStart: l.onHandleDragStart,
                  handleRangeGestureChange: n,
                  handleRangeCommit: l.onRangeCommit,
                  handleRangeChange: l.onRangeChange,
                  onPlayheadElementChange: i.onElementChange,
                  playing: o,
                  range: s,
                  isRangeGestureActive: a,
                  seek: d.seek,
                  togglePlayback: c,
                }),
                [
                  t,
                  n,
                  a,
                  i.getCurrentTimeMs,
                  i.onElementChange,
                  o,
                  s,
                  l.onHandleDragEnd,
                  l.onHandleDragStart,
                  l.onRangeChange,
                  l.onRangeCommit,
                  d.seek,
                  c,
                ],
              );
            })({
              currentTimeMs: q,
              handleRangeGestureChange: Q,
              isRangeGestureActive: Z,
              playhead: ee,
              playing: G,
              range: W,
              rangeInteractions: en,
              seekController: et,
              togglePlayback: ea,
            });
          })(i, n),
          v = (0, r.useMemo)(() => [i.source.nodeId], [i.source.nodeId]),
          p = (0, T.Ij)(v),
          h = (0, A.og)({ geometry: p, viewport: o }),
          g = "submitting" === i.submission.phase;
        !(function (e) {
          let {
            busy: t,
            focusRestore: n,
            panelElement: a,
            playback: i,
            port: o,
          } = e;
          ((0, f.k5)(a, {
            actionId: "videoTrim.togglePlayback",
            allowEditableTargets: !0,
            capability: {
              execute: () => (i.togglePlayback(), { status: "executed" }),
              getState: () =>
                t
                  ? {
                      available: !1,
                      reason: "videoTrimSubmitting",
                      result: "noop",
                    }
                  : i.isRangeGestureActive()
                    ? {
                        available: !1,
                        reason: "videoTrimRangeGestureActive",
                        result: "noop",
                      }
                    : { available: !0 },
              subscribe: o.subscribe,
            },
            contextId: "videoTrim",
          }),
            (0, r.useLayoutEffect)(() => {
              let e =
                  document.activeElement instanceof HTMLElement
                    ? document.activeElement
                    : null,
                t = !1;
              return (
                queueMicrotask(() => {
                  !t &&
                    (null == a ? void 0 : a.isConnected) &&
                    (
                      a.querySelector(
                        '[role="slider"]:not([aria-disabled="true"])',
                      ) ?? a
                    ).focus({ preventScroll: !0 });
                }),
                () => {
                  ((t = !0), (0, M.BD)(n, e));
                }
              );
            }, [n, a]),
            (0, r.useEffect)(() => {
              let e = (e) => {
                "Escape" === e.key && (e.preventDefault(), o.close());
              };
              return (
                window.addEventListener("keydown", e),
                () => window.removeEventListener("keydown", e)
              );
            }, [o]));
        })({ busy: g, focusRestore: u, panelElement: d, playback: m, port: n });
        let b = (0, r.useCallback)(
          (e) => {
            e ||
              (function (e) {
                let t = null == e ? void 0 : e.ownerDocument.activeElement;
                if (!e || !(t instanceof HTMLElement) || !e.contains(t)) return;
                let n =
                  e.closest('[data-testid="canvas-main-region"]') ??
                  e.ownerDocument.querySelector(
                    '[data-testid="canvas-main-region"]',
                  );
                null == n || n.focus({ preventScroll: !0 });
              })(d);
          },
          [d],
        );
        return (0, a.jsx)(rz, {
          busy: g,
          boundaryShift: h,
          geometry: p,
          interactionActive: t || s,
          onAnchorVisibilityChange: b,
          panelRef: c,
          playback: m,
          port: n,
          snapshot: i,
          viewport: o,
          viewportPresentation: l,
        });
      }
      let rL = 1 / 60;
      function rF(e, t) {
        e &&
          (e.removeEventListener("ended", t.handleEnded),
          e.removeEventListener("pause", t.handlePause),
          e.removeEventListener("play", t.handlePlay),
          e.removeEventListener("seeked", t.handleSeeked),
          e.removeEventListener("timeupdate", t.handleTimeUpdate));
      }
      function r_(e, t, n, a) {
        if (!e) return;
        let i = Math.min(
          Math.max(0, Math.round(n)),
          Math.max(0, Math.round(t)),
        );
        if (
          (e.setAttribute("aria-valuenow", String(i)),
          e.setAttribute("aria-valuetext", (0, rP.aJ)(i)),
          n <= 0 || a <= 0)
        )
          return;
        let r = Math.min(1, Math.max(0, i / n));
        e.style.transform = `translate3d(${r * a - 0.5}px, 0, 0)`;
      }
      function rz(e) {
        let {
            boundaryShift: { shift: t, surfaceRefCallback: n },
            busy: i,
            geometry: o,
            interactionActive: s,
            onAnchorVisibilityChange: l,
            panelRef: d,
            playback: c,
            port: u,
            snapshot: m,
            viewport: v,
            viewportPresentation: p,
          } = e,
          [f, h] = (0, r.useState)(null),
          g = (0, r.useCallback)(
            (e) => {
              (h(e), n(e));
            },
            [n],
          );
        return (
          (0, i5.dh)({
            enabled: !s,
            id: "video-trim-toolbar",
            mediaGeometry: o,
            nodeId: m.source.nodeId,
            shift: t,
            surface: f,
            viewport: v,
            viewportPresentation: p,
          }),
          (0, a.jsx)(T.nJ, {
            "data-testid": "video-trim-overlay",
            geometry: o,
            hideWhenAnchorOutsideViewport: !0,
            interactionActive: s,
            offset: rW,
            onAnchorVisibilityChange: l,
            position: "bottom",
            preserveMountWhenAnchorOutsideViewport: !0,
            preserveVisibilityDuringInteraction: !0,
            viewport: v,
            zIndex: rU,
            children: (0, a.jsx)("div", {
              ref: g,
              style: {
                maxHeight: "calc(100vh - 32px)",
                maxWidth: "calc(100vw - 32px)",
                transform: `translate(${t.x}px, ${t.y}px)`,
              },
              children: (0, a.jsx)(rH, {
                busy: i,
                panelRef: d,
                playback: c,
                port: u,
                snapshot: m,
              }),
            }),
          })
        );
      }
      let rH = (0, r.memo)(function (e) {
        var t, n, i, o, s, l;
        let d,
          { busy: c, panelRef: u, playback: m, port: v, snapshot: p } = e,
          f = (0, r.useRef)(null),
          h = (function (e) {
            let [t, n] = (0, r.useState)(rV);
            return (
              (0, r.useLayoutEffect)(() => {
                let t = e.current;
                if (!t) return;
                let a = () => {
                  let e = t.getBoundingClientRect(),
                    a = Math.round(e.height),
                    i = Math.round(e.width);
                  i <= 0 ||
                    a <= 0 ||
                    n((e) =>
                      e.height === a && e.width === i
                        ? e
                        : Object.freeze({ height: a, width: i }),
                    );
                };
                if ((a(), "u" < typeof ResizeObserver)) return;
                let i = new ResizeObserver(a);
                return (i.observe(t), () => i.disconnect());
              }, [e]),
              t
            );
          })(f),
          g = (0, r.useMemo)(
            () =>
              (0, rT.l4)({
                durationMs: p.source.durationMs,
                trackHeight: h.height,
                trackWidth: h.width,
                videoHeight: p.source.height,
                videoWidth: p.source.width,
              }),
            [
              p.source.durationMs,
              p.source.height,
              p.source.width,
              h.height,
              h.width,
            ],
          ),
          b = `resource:${p.source.resourceId}:${p.source.vid}`,
          x =
            ((t = (0, i6.pI)({
              diagnostics: { resourceId: p.source.resourceId, sourceKey: b },
              enabled: "idle" === p.submission.phase && !m.playing,
              fallbackUrl: p.source.posterUrl,
              sampleTimesMs: g.sampleTimesMs,
              sourceIdentity: b,
              sourceUrl: p.source.sourceUrl,
              thumbnailHeight: g.tileHeight,
              thumbnailWidth: g.tileWidth,
            })),
            (n = g.sampleTimesMs.length),
            (i = p.source.posterUrl),
            (0, r.useMemo)(
              () => (0, i6.EN)(t, n, (0, i6.lg)(t, i)),
              [i, n, t],
            )),
          { confirmDisabled: y, controlsDisabled: w } =
            ((o = c),
            (s = p.submission.phase),
            (l = x),
            (d = "idle" === s && l.every((e) => !e)),
            { confirmDisabled: o || d, controlsDisabled: o }),
          k = (0, C.DFZ)();
        return (0, a.jsx)(C.$8Q, {
          theme: k,
          children: (0, a.jsxs)("section", {
            ref: u,
            "aria-label": (0, rE.gT)(),
            className: `${N.xZ} pointer-events-auto nodrag nopan nowheel flex h-[100px] w-[562px] max-w-[calc(100vw-32px)] flex-col gap-2 p-2 text-dreamina-text-primary`,
            "data-testid": "video-trim-overlay-surface",
            tabIndex: -1,
            onKeyDownCapture: a2.yd,
            children: [
              (0, a.jsx)("div", {
                ref: f,
                className: "h-10 w-full",
                children: (0, a.jsx)(rO, {
                  playback: m,
                  snapshot: p,
                  thumbnailPlan: g,
                  thumbnails: x,
                }),
              }),
              (0, a.jsx)(r$, {
                confirmDisabled: y,
                playback: m,
                playbackDisabled: w,
                port: v,
                snapshot: p,
              }),
            ],
          }),
        });
      });
      function rO(e) {
        let { playback: t, snapshot: n, thumbnailPlan: i, thumbnails: r } = e,
          { submission: o } = n;
        return "submitting" === o.phase
          ? (0, a.jsx)("output", {
              "aria-label": (0, rE.Wt)(),
              className:
                "flex h-10 w-full items-center justify-center overflow-hidden rounded-[8px] bg-white/[0.08] bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0.03)_100%)]",
              "data-testid": "video-trim-processing-track",
              children: (0, a.jsx)("span", {
                "aria-hidden": "true",
                className:
                  "size-[14px] animate-spin rounded-full border-[1.5px] border-white/30 border-t-white/70 motion-reduce:animate-none",
                "data-testid": "video-trim-processing-spinner",
              }),
            })
          : "failed" === o.phase
            ? (0, a.jsxs)("div", {
                className:
                  "flex h-10 w-full items-center justify-center gap-1 overflow-hidden rounded-[8px] bg-white/[0.06] font-['PingFang_SC',Arial,sans-serif] text-[12px] font-normal leading-5 text-white/50",
                "data-testid": "video-trim-failed-track",
                role: "alert",
                children: [
                  (0, a.jsx)(e1.p, {}),
                  (0, a.jsx)("span", { children: o.errorMessage }),
                ],
              })
            : (0, a.jsx)(rA.o, {
                currentTimeMs: t.currentTimeMs,
                durationMs: n.source.durationMs,
                getCurrentTimeMs: t.getCurrentTimeMs,
                range: t.range,
                thumbnailPlan: i,
                thumbnails: r,
                onHandleDragEnd: t.handleHandleDragEnd,
                onHandleDragStart: t.handleHandleDragStart,
                onGestureChange: t.handleRangeGestureChange,
                onPlayheadElementChange: t.onPlayheadElementChange,
                onRangeCommit: t.handleRangeCommit,
                onRangeChange: t.handleRangeChange,
                onSeek: t.seek,
              });
      }
      function r$(e) {
        let {
          confirmDisabled: t,
          playback: n,
          playbackDisabled: i,
          port: r,
          snapshot: o,
        } = e;
        return (0, a.jsxs)("div", {
          className: "flex h-9 items-center justify-between gap-2",
          children: [
            (0, a.jsxs)("div", {
              className: "flex h-5 min-w-[102px] items-center gap-1",
              children: [
                (0, a.jsx)(C.McC, {
                  ariaLabel: n.playing ? (0, rE.a4)() : (0, rE.CE)(),
                  className:
                    "text-dreamina-text-secondary hover:text-dreamina-text-primary disabled:text-dreamina-text-disabled aria-disabled:text-dreamina-text-disabled",
                  disabled: i,
                  playing: n.playing,
                  onClick: n.togglePlayback,
                }),
                (0, a.jsx)(E, {
                  appearance: "surface",
                  currentTime: (0, rP.HT)(n.currentTimeMs),
                  disabled: i,
                  duration: (0, rP.HT)(o.source.durationMs),
                  testId: "video-trim-time",
                }),
              ],
            }),
            (0, a.jsx)(rB, { disabled: t, port: r, range: n.range }),
          ],
        });
      }
      function rB(e) {
        let { disabled: t, port: n, range: i } = e;
        return (0, a.jsx)(C.$nd, {
          className: "min-w-[102px] leading-[22px] shadow-none",
          disabled: t,
          onClick: () => void n.submit(i),
          children: (0, rE._1)(),
        });
      }
      let rV = Object.freeze({ height: 0, width: 0 }),
        rW = 19,
        rU = S.Xx,
        rq = (0, r.lazy)(() =>
          Promise.all([n.e(4897), n.e(4805)])
            .then(n.bind(n, 21699))
            .then((e) => ({ default: e.TextEditorNodeSurface })),
        ),
        rK = { status: "inactive" },
        rG = { status: "inactive" },
        rY = { status: "inactive" },
        rX = { status: "inactive" },
        rQ = { status: "inactive" },
        rZ = { status: "inactive" },
        rJ = { status: "inactive" },
        r0 = { status: "inactive" },
        r1 = { status: "inactive" },
        r2 = { status: "inactive" },
        r3 = { status: "inactive" },
        r6 = { status: "inactive" },
        r4 = { status: "inactive" },
        r5 = { status: "inactive" },
        r8 = { status: "inactive" },
        r9 = Object.freeze({ available: !0 }),
        r7 = Object.freeze({ available: !1, reason: "notEditable" }),
        oe = Object.freeze({ available: !1, reason: "notEditingReady" }),
        ot = Object.freeze({ current: null });
      function on(e) {
        var t,
          n,
          i,
          o,
          s,
          l,
          d,
          c,
          u,
          p,
          f,
          g,
          b,
          x,
          y,
          w,
          k,
          j,
          C,
          R,
          I,
          E,
          P,
          A,
          T,
          N;
        let D,
          L,
          F,
          _,
          z,
          H,
          O,
          $,
          B = (0, h.FY)(),
          V =
            null == (n = B.featuresApi) || null == (t = n.canvas)
              ? void 0
              : t.focusRestore,
          W = (0, r.useCallback)(() => {
            (0, M.BD)(V, null, { kind: "canvasRegion" });
          }, [V]),
          U = oR(),
          {
            nodeAnchoredPanelEnabled: q,
            nodeToolbarEnabled: K,
            selectionContextToolbarEnabled: G,
          } = ((c = B),
          {
            nodeAnchoredPanelEnabled: (D = (0, r.useMemo)(
              () => new Set(c.features.map((e) => e.slot)),
              [c.features],
            )).has("nodeAnchoredPanel"),
            nodeToolbarEnabled: D.has("nodeToolbar"),
            selectionContextToolbarEnabled: D.has("selectionContextToolbar"),
          }),
          Y = (function (e, t, n, a, i) {
            var o,
              s,
              l,
              d,
              c,
              u,
              m,
              v,
              p,
              f,
              h,
              g,
              b,
              x,
              y,
              w,
              k,
              S,
              j,
              C,
              R,
              I;
            let E,
              P,
              A,
              T,
              N,
              D,
              L,
              F,
              _,
              z,
              H,
              O,
              $,
              B,
              V,
              W,
              U,
              q,
              K,
              G,
              Y,
              X,
              Q,
              Z,
              J,
              ee,
              et,
              en,
              ea,
              ei,
              er,
              eo,
              es,
              el,
              ed,
              ec,
              eu,
              em = null == (o = e.featuresApi) ? void 0 : o.canvas,
              ev = (0, r.useSyncExternalStore)(
                (null == em || null == (s = em.panoramaPreview)
                  ? void 0
                  : s.subscribe) ?? oD,
                (null == em || null == (l = em.panoramaPreview)
                  ? void 0
                  : l.getSnapshot) ?? (() => rK),
              ),
              ep = null == em ? void 0 : em.resourceRegeneration,
              ef = (0, r.useSyncExternalStore)(
                (null == ep ? void 0 : ep.subscribe) ?? oD,
                (null == ep ? void 0 : ep.getSnapshot) ?? oV,
                oV,
              ),
              eh =
                ((E = null == (u = em) ? void 0 : u.dynamicPoster),
                (P = (0, r.useSyncExternalStore)(
                  (null == E ? void 0 : E.subscribe) ?? oD,
                  (null == E ? void 0 : E.getSnapshot) ?? oE,
                  oE,
                )),
                (A = null == u ? void 0 : u.ecommerceMainImage),
                (T = (0, r.useCallback)(
                  () => (null == A ? void 0 : A.getSnapshot().open) ?? !1,
                  [A],
                )),
                (N = (0, r.useSyncExternalStore)(
                  (null == A ? void 0 : A.subscribe) ?? oD,
                  T,
                  T,
                )),
                (D = null == u ? void 0 : u.imagePostEdit),
                (L = (0, r.useSyncExternalStore)(
                  (null == D ? void 0 : D.subscribe) ?? oD,
                  (null == D ? void 0 : D.getSnapshot) ?? oF,
                  oF,
                )),
                (F = null == u ? void 0 : u.imageHD),
                (_ = (0, r.useSyncExternalStore)(
                  (null == F ? void 0 : F.subscribe) ?? oD,
                  (null == F ? void 0 : F.getSnapshot) ?? o_,
                  o_,
                )),
                (z = null == u ? void 0 : u.imageLayerBoard),
                (H = (0, r.useSyncExternalStore)(
                  (null == z ? void 0 : z.subscribe) ?? oD,
                  (null == z ? void 0 : z.getSnapshot) ?? oz,
                  oz,
                )),
                (O = null == z ? void 0 : z.fullscreen),
                ($ = (0, r.useSyncExternalStore)(
                  (null == O ? void 0 : O.subscribe) ?? oD,
                  (null == O ? void 0 : O.getSnapshot) ?? oH,
                  oH,
                )),
                {
                  dynamicPoster: E,
                  dynamicPosterSession: P,
                  ecommerceMainImageActive: N,
                  imagePostEdit: D,
                  imagePostEditSession: L,
                  imageHD: F,
                  imageHDSession: _,
                  imageLayerBoardSession: H,
                  imageLayerBoardFullscreen: O,
                  imageLayerBoardFullscreenSession: $,
                }),
              eg =
                ((B = null == (m = em) ? void 0 : m.videoPostEdit),
                (V = (0, r.useSyncExternalStore)(
                  (null == B ? void 0 : B.subscribe) ?? oD,
                  (null == B ? void 0 : B.getSnapshot) ?? oO,
                  oO,
                )),
                (W = null == m ? void 0 : m.videoFrameCapture),
                (U = (0, r.useSyncExternalStore)(
                  (null == W ? void 0 : W.subscribe) ?? oD,
                  (null == W ? void 0 : W.getSnapshot) ?? oU,
                  oU,
                )),
                (q = null == m ? void 0 : m.videoTrim),
                (K = (0, r.useSyncExternalStore)(
                  (null == q ? void 0 : q.subscribe) ?? oD,
                  (null == q ? void 0 : q.getSnapshot) ?? oq,
                  oq,
                )),
                (G =
                  null == m || null == (v = m.videoPostEdit)
                    ? void 0
                    : v.translation),
                (Y = (0, r.useSyncExternalStore)(
                  (null == G ? void 0 : G.subscribe) ?? oD,
                  (null == G ? void 0 : G.getSnapshot) ?? oG,
                  oG,
                )),
                {
                  videoFrameCapture: W,
                  videoFrameCaptureActive: "active" === U.status,
                  videoFrameCaptureSession: U,
                  videoPostEdit: B,
                  videoPostEditSession: V,
                  videoTrim: q,
                  videoTrimSession: K,
                  videoTranslation: G,
                  videoTranslationSession: Y,
                }),
              eb =
                ((d = eg.videoPostEditSession),
                "active" === d.status &&
                  "partial-reshoot" === d.mode &&
                  (null == i ? void 0 : i.adapterId) ===
                    "generationReference" &&
                  i.originNodeId === d.partialReshoot.source.nodeId),
              ex =
                ((X = null == (p = em) ? void 0 : p.audioTrim),
                (Q = (0, r.useSyncExternalStore)(
                  (null == X ? void 0 : X.subscribe) ?? oD,
                  (null == X ? void 0 : X.getSnapshot) ?? oK,
                  oK,
                )),
                (Z = null == p ? void 0 : p.audioSeparation),
                (J = (0, r.useSyncExternalStore)(
                  (null == Z ? void 0 : Z.subscribe) ?? oD,
                  (null == Z ? void 0 : Z.getSnapshot) ?? oY,
                  oY,
                )),
                {
                  audioTrim: X,
                  audioTrimSession: Q,
                  audioSeparation: Z,
                  audioSeparationSession: J,
                }),
              ey =
                ((ee = null == (f = em) ? void 0 : f.timelineFullscreen),
                (et = (0, r.useSyncExternalStore)(
                  (null == ee ? void 0 : ee.subscribe) ?? oD,
                  (null == ee ? void 0 : ee.getSnapshot) ?? oW,
                  oW,
                )),
                (en = null == f ? void 0 : f.videoPreview),
                (ea = (0, r.useSyncExternalStore)(
                  (null == en ? void 0 : en.subscribe) ?? oD,
                  (null == en ? void 0 : en.getSnapshot) ?? o$,
                  o$,
                )),
                (ei = null == f ? void 0 : f.mediaHistoryView),
                (er = (0, r.useSyncExternalStore)(
                  (null == ei ? void 0 : ei.subscribe) ?? oD,
                  (null == ei ? void 0 : ei.getSnapshot) ?? oB,
                  oB,
                )),
                {
                  mediaHistoryView: ei,
                  mediaHistoryViewSession: er,
                  timelineFullscreen: ee,
                  timelineFullscreenSession: et,
                  videoPreview: en,
                  videoPreviewSession: ea,
                }),
              { imagePostEdit: ew, imagePostEditSession: ek } = eh;
            (0, r.useEffect)(() => {
              let e = eh.dynamicPosterSession;
              if (
                "active" === e.status &&
                (1 !== t.length || t[0] !== e.source.nodeId)
              ) {
                var n;
                null == (n = eh.dynamicPoster) || n.close();
              }
            }, [eh.dynamicPoster, eh.dynamicPosterSession, t]);
            let eS = (null == em ? void 0 : em.textEditing) ?? iJ.w,
              ej = (0, r.useSyncExternalStore)(
                eS.subscribe,
                eS.getSnapshot,
                iJ.w.getSnapshot,
              ),
              eC = !["idle", "suspended"].includes(ej.status);
            return (
              (k = a),
              (S =
                ((h = t),
                (g = eh),
                (b = eg),
                (x = ex.audioTrimSession),
                (y = ej),
                (w = eb),
                (eo = (0, r.useMemo)(() => {
                  var e, t, n;
                  let a, i;
                  return (
                    (e = h),
                    (t = g.imagePostEditSession),
                    (n = g.imageHDSession),
                    (a = new Set()),
                    (i = (0, nt.J)(t)
                      ? [{ nodeId: t.intent.sourceNodeId }]
                      : "active" === t.status
                        ? t.sources
                        : void 0),
                    oT(
                      a,
                      e,
                      { ...t, sources: i },
                      { keepAliveWhileSubmitting: !0 },
                    ),
                    oT(a, e, n),
                    [...a]
                  );
                }, [g.imagePostEditSession, g.imageHDSession, h])),
                (es = (0, r.useMemo)(
                  () =>
                    (function (e, t, n, a) {
                      let i = new Set();
                      for (let a of (oT(i, e, t), oA(e, n))) i.add(a);
                      for (let t of oA(e, a)) i.add(t);
                      return [...i];
                    })(
                      w && "active" === b.videoPostEditSession.status
                        ? b.videoPostEditSession.sources.map((e) => {
                            let { nodeId: t } = e;
                            return t;
                          })
                        : h,
                      b.videoPostEditSession,
                      b.videoFrameCaptureSession,
                      b.videoTrimSession,
                    ),
                  [
                    h,
                    w,
                    b.videoFrameCaptureSession,
                    b.videoPostEditSession,
                    b.videoTrimSession,
                  ],
                )),
                (el = (0, r.useMemo)(() => oA(h, x), [x, h])),
                (ed =
                  ["idle", "suspended"].includes(y.status) ||
                  "node" !== y.presentation
                    ? void 0
                    : y.nodeId),
                (0, r.useMemo)(() => {
                  var e, t;
                  let n;
                  return (
                    (e = [...eo, ...es, ...el]),
                    (t = ed),
                    (n = [...new Set(e)]),
                    !t || n.includes(t) ? n : [...n, t]
                  );
                }, [el, eo, ed, es]))),
              (ec = (0, r.useRef)(new Set())),
              (0, r.useLayoutEffect)(() => {
                let e = ec.current,
                  t = new Set(S);
                (oN(k, e, t), (ec.current = t));
              }, [S, k]),
              (0, r.useLayoutEffect)(
                () => () => {
                  (oN(k, ec.current, new Set()), (ec.current = new Set()));
                },
                [k],
              ),
              (c = {
                active: eC,
                focusRestore: null == em ? void 0 : em.focusRestore,
                nodeId: ej.nodeId,
                selectedNodeIds: t,
              }),
              (eu = (0, r.useRef)(null)),
              (0, r.useEffect)(() => {
                if (c.active && c.nodeId) {
                  eu.current = c.nodeId;
                  return;
                }
                let e = eu.current;
                if (!e) return;
                eu.current = null;
                let t = !1;
                return (
                  queueMicrotask(() => {
                    let n;
                    if (
                      t ||
                      !(
                        !(
                          (n = document.activeElement) instanceof HTMLElement
                        ) ||
                        n === document.body ||
                        n === document.documentElement ||
                        !document.documentElement.contains(n)
                      )
                    )
                      return;
                    let a = c.selectedNodeIds[0];
                    (0, M.BD)(c.focusRestore, null, {
                      kind: "canvasNode",
                      nodeId: a ?? e,
                    });
                  }),
                  () => {
                    t = !0;
                  }
                );
              }, [c.active, c.focusRestore, c.nodeId, c.selectedNodeIds]),
              (0, r.useEffect)(() => {
                if ("active" === ek.status && ew) {
                  var e;
                  if ("submitting" === ek.submission.status) {
                    "smart-edit" === ek.mode &&
                      n.unselectedNodePressActive &&
                      ew.close();
                    return;
                  }
                  oP(
                    t,
                    ((e = ek),
                    (0, nt.J)(e)
                      ? [{ nodeId: e.intent.sourceNodeId }]
                      : e.sources),
                  ) || ew.close();
                }
              }, [ew, ek, n.unselectedNodePressActive, t]),
              (0, r.useEffect)(() => {
                "active" === eh.imageHDSession.status &&
                  eh.imageHD &&
                  (oP(t, eh.imageHDSession.sources) || eh.imageHD.close());
              }, [eh.imageHD, eh.imageHDSession, t]),
              (function (e, t, n) {
                let { videoPostEditSession: a, videoPostEdit: i } = e;
                (0, r.useEffect)(() => {
                  "active" === a.status &&
                    i &&
                    !n &&
                    (oP(t, a.sources) || i.close());
                }, [t, n, i, a]);
              })(eg, t, eb),
              (0, r.useEffect)(() => {
                "active" === eg.videoTrimSession.status &&
                  eg.videoTrim &&
                  (t.includes(eg.videoTrimSession.source.nodeId) ||
                    eg.videoTrim.close());
              }, [t, eg.videoTrim, eg.videoTrimSession]),
              (j = ex.audioTrim),
              (C = ex.audioTrimSession),
              (R = t),
              (0, r.useEffect)(() => {
                "active" === C.status &&
                  j &&
                  (R.includes(C.source.nodeId) || j.close());
              }, [j, C, R]),
              (0, r.useEffect)(() => {
                "active" !== eg.videoTranslationSession.status ||
                  !eg.videoTranslation ||
                  ("submitting" !==
                    eg.videoTranslationSession.submission.phase &&
                    (t.includes(eg.videoTranslationSession.source.nodeId) ||
                      eg.videoTranslation.close()));
              }, [t, eg.videoTranslation, eg.videoTranslationSession]),
              (0, r.useEffect)(() => {
                "active" === ex.audioSeparationSession.status &&
                  ex.audioSeparation &&
                  (t.includes(ex.audioSeparationSession.source.nodeId) ||
                    ex.audioSeparation.close());
              }, [ex.audioSeparation, ex.audioSeparationSession, t]),
              {
                ...eh,
                referenceSelectionActive: eb,
                panoramaActive: "active" === ev.status,
                panoramaNodeId:
                  "active" === ev.status ? ev.presentation.nodeId : void 0,
                imagePostEditActive:
                  "active" === eh.imagePostEditSession.status,
                imageHDActive: "active" === eh.imageHDSession.status,
                textEditing: eS,
                textEditActive: eC,
                textEditSession: ej,
                resourceRegeneration: ep,
                resourceRegenerationSession: ef,
                ...ey,
                ...eg,
                ...ex,
                videoTrimActive: "active" === eg.videoTrimSession.status,
                videoPostEditSuppressesDefaultOverlays:
                  "active" === (I = eg.videoPostEditSession).status &&
                  "sample-promotion" !== I.mode,
                audioTrimActive: "active" === ex.audioTrimSession.status,
              }
            );
          })(
            B,
            e.nodeIds,
            e.interaction,
            e.onPatchNodeRenderInteractions,
            e.sourcePicker,
          ),
          X = (function (e, t) {
            let n = (0, r.useRef)(e),
              a = (0, r.useRef)(t),
              i = t.join("\0"),
              [o, s] = (0, r.useState)(null);
            return (
              (0, r.useEffect)(() => {
                ((n.current = e), (a.current = t));
              }, [t, e]),
              (0, r.useEffect)(() => {
                null !== o && o !== i && s(null);
              }, [i, o]),
              (0, r.useEffect)(() => {
                let e = new Set(),
                  t = (e) => {
                    let t =
                      e.target instanceof Element
                        ? e.target.closest(".react-flow__node[data-id]")
                        : null;
                    (null == t ? void 0 : t.dataset.id) &&
                      a.current.includes(t.dataset.id) &&
                      s(null);
                  },
                  i = (t) => {
                    if ("Escape" !== t.key || t.isComposing || t.repeat) return;
                    let i = (function (e) {
                      let t = [
                          e.imagePostEdit,
                          e.dynamicPoster,
                          e.imageHD,
                          e.videoPostEdit,
                          e.videoFrameCapture,
                          e.videoTrim,
                          e.audioTrim,
                        ],
                        n = [];
                      for (let e of t)
                        (null == e ? void 0 : e.getSnapshot().status) ===
                          "active" && n.push(e);
                      return n;
                    })(n.current);
                    if (0 === i.length) return;
                    let r = [...a.current].join("\0"),
                      o = window.setTimeout(() => {
                        (e.delete(o),
                        i.some((e) => "active" !== e.getSnapshot().status))
                          ? s(r)
                          : s(null);
                      }, 0);
                    e.add(o);
                  };
                return (
                  window.addEventListener("keydown", i, !0),
                  window.addEventListener("pointerdown", t, !0),
                  () => {
                    for (let n of (window.removeEventListener("keydown", i, !0),
                    window.removeEventListener("pointerdown", t, !0),
                    e))
                      window.clearTimeout(n);
                  }
                );
              }, []),
              null !== o && o === i
            );
          })(Y, e.nodeIds);
        ((u = Y.textEditing),
          (L = (0, v.QQ)()),
          (0, r.useEffect)(
            () =>
              u.subscribeSerializationNotices(() => {
                L({
                  announcement: "polite",
                  description: (0, m.v5V)(),
                  dismissible: !0,
                  id: "canvas-text-save-degraded",
                  status: "warning",
                  title: (0, m.Uau)(),
                });
              }),
            [L, u],
          ),
          (p = U),
          (f = Y),
          (0, r.useEffect)(() => {
            var e;
            !p.available &&
              f.videoFrameCaptureActive &&
              (null == (e = f.videoFrameCapture) || e.abort());
          }, [p, f.videoFrameCapture, f.videoFrameCaptureActive]),
          (function (e, t, n) {
            let { videoFrameCapture: a, videoFrameCaptureSession: i } = t;
            (0, r.useEffect)(() => {
              if ("active" !== i.status || !a) return;
              let { source: t } = i,
                r = null == e ? void 0 : e.getObjectSnapshot(t.nodeId);
              (null == r ? void 0 : r.type) !== "video" ||
              r.data.resourceId !== t.resourceId
                ? a.abort()
                : n.includes(t.nodeId) || a.close();
            }, [e, n, a, i]);
          })(null == (i = B.featuresApi) ? void 0 : i.canvas, Y, e.nodeIds));
        let Q =
            ((g = Y),
            (b = e.nodeIds),
            !(
              g.panoramaActive &&
              void 0 !== g.panoramaNodeId &&
              b.includes(g.panoramaNodeId)
            ) &&
              !g.imagePostEditActive &&
              "active" !== g.dynamicPosterSession.status &&
              !g.imageHDActive &&
              !g.textEditActive &&
              !g.videoPostEditSuppressesDefaultOverlays &&
              !g.videoFrameCaptureActive &&
              !g.videoTrimActive &&
              "active" !== g.videoTranslationSession.status &&
              "active" !== g.audioSeparationSession.status &&
              !g.audioTrimActive),
          Z =
            ((x = e.sourcePicker),
            (y = e.nodeIds),
            (F =
              (null == x ? void 0 : x.defaultOverlayMode) === "suspend" &&
              y.length < 2),
            (_ = (null == x ? void 0 : x.defaultOverlayMode) === "unmount"),
            (z =
              F &&
              1 === y.length &&
              y[0] === (null == x ? void 0 : x.originNodeId)),
            (H = F && !z),
            (O = null != x && !H),
            {
              nodeToolbarHidden: H,
              nodeToolbarZIndex: O ? S.Qz : void 0,
              suspendsDefaultOverlays: F,
              unmountsDefaultOverlays: _,
            }),
          J = Q;
        (Z.unmountsDefaultOverlays && (J = !1),
          X && (J = !1),
          "active" === Y.timelineFullscreenSession.status &&
            ($ = Y.timelineFullscreenSession.timelineId));
        let ee =
          ((w = B),
          void 0 !== $
            ? null
            : (0, a.jsx)(i2.v, {
                editableProjectDownloadSession:
                  null == (j = w.featuresApi) || null == (k = j.canvas)
                    ? void 0
                    : k.editableProjectDownload,
                jianyingDraftGenerateSession:
                  null == (R = w.featuresApi) || null == (C = R.canvas)
                    ? void 0
                    : C.jianyingDraftGenerate,
                materialExportSession:
                  null == (E = w.featuresApi) || null == (I = E.canvas)
                    ? void 0
                    : I.materialExport,
                timelineExportSession:
                  null == (A = w.featuresApi) || null == (P = A.canvas)
                    ? void 0
                    : P.timelineExport,
                timelineRenderSession:
                  null == (N = w.featuresApi) || null == (T = N.canvas)
                    ? void 0
                    : T.timelineRender,
              }));
        return (0, a.jsx)(M.ad, {
          port: V,
          children: (0, a.jsxs)(eP.e, {
            menuOpen: !0 === e.menuOpen,
            children: [
              (0, a.jsx)(of, {
                editAvailability: U,
                interactionBlocked:
                  !e.defaultOverlaysEnabled || Z.suspendsDefaultOverlays,
                interaction: e.interaction,
                nodeAnchoredPanelEnabled: q,
                nodeAnchoredPanelViewportPolicy: Y.ecommerceMainImageActive
                  ? "local-shift"
                  : "adjust",
                nodeIds: e.nodeIds,
                nodeToolbarEnabled: !!K && !Y.ecommerceMainImageActive,
                nodeToolbarHidden: Z.nodeToolbarHidden,
                nodeToolbarZIndex: Z.nodeToolbarZIndex,
                onRequestViewportChange: e.onRequestViewportChange,
                selectionContextToolbarEnabled: G,
                selectionContextToolbarSuppressed: Z.suspendsDefaultOverlays,
                mounted: J,
                viewport: e.viewport,
              }),
              (0, a.jsx)(iG, {
                fallbackFocusRef: e.interactionRootRef ?? ot,
                port:
                  null == (s = B.featuresApi) || null == (o = s.canvas)
                    ? void 0
                    : o.subjectEdgeDeleteConfirmation,
              }),
              (0, a.jsx)(e$, { snapshot: Y.resourceRegenerationSession }),
              (0, a.jsx)(eq, {
                snapshot: Y.resourceRegenerationSession,
                port:
                  null == (d = B.featuresApi) || null == (l = d.canvas)
                    ? void 0
                    : l.resourceRegeneration,
                editAvailability: U,
                fallbackFocusRef: e.interactionRootRef ?? ot,
              }),
              ee,
              (0, a.jsx)(oa, {
                editor: B,
                interactionRootRef: e.interactionRootRef,
                sourcePicker: e.sourcePicker,
                sourcePickerCompletion: e.sourcePickerCompletion,
                sourcePickerCompletionLocateVisible:
                  e.sourcePickerCompletionLocateVisible,
                sourcePickerLocateVisible: e.sourcePickerLocateVisible,
              }),
              (0, a.jsx)(or, {
                editAvailability: U,
                editor: B,
                interaction: e.interaction,
                nodeIds: e.nodeIds,
                nodeOverlaysVisible: J,
                onRequestViewportChange: e.onRequestViewportChange,
                restoreCanvasFocus: W,
                sessions: Y,
                viewport: e.viewport,
                viewportPanActive: !0 === e.viewportPanActive,
              }),
            ],
          }),
        });
      }
      function oa(e) {
        var t, n, i;
        let o = e.sourcePickerCompletion ?? null,
          s = (0, r.useCallback)(
            (t) => {
              var n, a, i;
              return null == (a = e.editor.featuresApi) ||
                null == (n = (i = a.canvas.sourcePicker).dismissCompletion)
                ? void 0
                : n.call(i, t);
            },
            [e.editor],
          ),
          l = (0, r.useCallback)(
            (t) => {
              var n, a, i, r;
              let o = null == (n = e.sourcePicker) ? void 0 : n.sessionId;
              return (
                !!o &&
                (null == (i = e.editor.featuresApi) ||
                null == (a = (r = i.canvas.sourcePicker).selectEligibleSource)
                  ? void 0
                  : a.call(r, o, t)) === !0
              );
            },
            [e.editor, null == (t = e.sourcePicker) ? void 0 : t.sessionId],
          ),
          d = null;
        e.sourcePicker &&
          (d = (0, a.jsx)(iA, {
            interactionRootRef: e.interactionRootRef ?? ot,
            locateVisible: e.sourcePickerLocateVisible,
            locateNode:
              null == (n = e.editor.featuresApi)
                ? void 0
                : n.canvas.actions.locateNode.execute,
            onEndSession: (t) => {
              var n, a;
              return null == (a = e.editor.featuresApi)
                ? void 0
                : a.canvas.sourcePicker.close(t, {
                    completionPolicy:
                      null == (n = e.sourcePicker)
                        ? void 0
                        : n.userExitCompletionPolicy,
                    selectionPolicy: "restoreOrigin",
                  });
            },
            onSelectEligible: l,
            session: e.sourcePicker,
          }));
        let c = null;
        return (
          o &&
            (c = (0, a.jsx)(iz, {
              interactionRootRef: e.interactionRootRef ?? ot,
              locateVisible: e.sourcePickerCompletionLocateVisible ?? !1,
              locateNode:
                null == (i = e.editor.featuresApi)
                  ? void 0
                  : i.canvas.actions.locateNode.execute,
              notice: o,
              onDismiss: s,
            })),
          (0, a.jsxs)(a.Fragment, { children: [d, c] })
        );
      }
      let oi = (0, r.lazy)(() => n.e(9672).then(n.bind(n, 65531)));
      function or(e) {
        var t, n, i;
        let {
            editAvailability: o,
            editor: s,
            interaction: l,
            nodeIds: d,
            nodeOverlaysVisible: c,
            onRequestViewportChange: u,
            restoreCanvasFocus: m,
            sessions: v,
            viewport: p,
            viewportPanActive: f,
          } = e,
          h = !!(v.textEditActive && s.featuresApi);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            void 0 !== v.dynamicPoster &&
              "active" === v.dynamicPosterSession.status &&
              (0, a.jsx)(r.Suspense, {
                fallback: null,
                children: (0, a.jsx)(oi, {
                  port: v.dynamicPoster,
                  snapshot: v.dynamicPosterSession,
                  nodeDragging: l.draggedNodeIds.length > 0,
                  viewport: p,
                  viewportPresentation:
                    null == (n = s.featuresApi) || null == (t = n.canvas)
                      ? void 0
                      : t.viewport,
                  onRestoreFocus: m,
                }),
              }),
            (null == (i = s.featuresApi) ? void 0 : i.canvas.directorStage)
              ? (0, a.jsx)(aL, { port: s.featuresApi.canvas.directorStage })
              : null,
            (0, a.jsx)(oh, {
              editAvailability: o,
              interaction: l,
              onRequestViewportChange: u,
              port: v.imagePostEdit,
              session: v.imagePostEditSession,
              viewport: p,
              viewportPanActive: f,
            }),
            (0, a.jsx)(ob, {
              interaction: l,
              port: v.imageHD,
              snapshot: v.imageHDSession,
              viewport: p,
            }),
            (0, a.jsx)(oI, { port: v.imageHD, snapshot: v.imageHDSession }),
            (0, a.jsx)(ox, {
              editAvailability: o,
              editor: s,
              interaction: l,
              snapshot: v.imageLayerBoardSession,
              viewport: p,
            }),
            (0, a.jsx)(ne.Li, {
              api: s.featuresApi,
              editAvailability: o,
              nodeDragging: l.draggedNodeIds.length > 0,
              nodeIds: d,
              viewport: p,
              viewportMoving: l.viewportMoving,
              visible: c,
            }),
            (0, a.jsx)(ow, {
              editor: s,
              interaction: l,
              referenceSelectionActive: v.referenceSelectionActive,
              snapshot: v.videoPostEditSession,
              viewport: p,
              viewportPanActive: f,
            }),
            (0, a.jsx)(oo, { editor: s, restoreCanvasFocus: m, sessions: v }),
            (0, a.jsx)(oj, {
              editor: s,
              interaction: l,
              port: v.videoFrameCapture,
              snapshot: v.videoFrameCaptureSession,
              viewport: p,
            }),
            (0, a.jsx)(ok, {
              editor: s,
              interaction: l,
              port: v.videoTrim,
              snapshot: v.videoTrimSession,
              viewport: p,
            }),
            (0, a.jsx)(oS, {
              interaction: l,
              onRequestViewportChange: u,
              port: v.audioTrim,
              snapshot: v.audioTrimSession,
              viewport: p,
            }),
            (0, a.jsx)(oC, {
              interaction: l,
              port: v.videoTranslation,
              snapshot: v.videoTranslationSession,
              viewport: p,
            }),
            (0, a.jsx)(oM, {
              interaction: l,
              port: v.audioSeparation,
              snapshot: v.audioSeparationSession,
              viewport: p,
            }),
            (0, a.jsx)(op, {
              active: h,
              session: v.textEditing,
              snapshot: v.textEditSession,
              viewport: p,
              viewportMoving: l.viewportMoving,
            }),
          ],
        });
      }
      function oo(e) {
        var t;
        let { editor: n, restoreCanvasFocus: i, sessions: r } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(u, {
              canvas: null == (t = n.featuresApi) ? void 0 : t.canvas,
              viewportPresentation: n.viewport,
              onSourceActivate: (e) => n.selectionActions.selectOnly(e, "user"),
            }),
            (0, a.jsx)(od, {
              editor: n,
              port: r.mediaHistoryView,
              snapshot: r.mediaHistoryViewSession,
            }),
            (0, a.jsx)(oc, {
              editor: n,
              port: r.videoPreview,
              snapshot: r.videoPreviewSession,
            }),
            (0, a.jsx)(ou, {
              editor: n,
              port: r.timelineFullscreen,
              restoreCanvasFocus: i,
              snapshot: r.timelineFullscreenSession,
            }),
            (0, a.jsx)(os, {
              editor: n,
              port: r.imageLayerBoardFullscreen,
              snapshot: r.imageLayerBoardFullscreenSession,
            }),
          ],
        });
      }
      function os(e) {
        let { editor: t, port: n, snapshot: i } = e,
          r = t.featuresApi;
        return n && r && "active" === i.status
          ? (0, a.jsx)(ol, { api: r, port: n, snapshot: i })
          : null;
      }
      function ol(e) {
        let { api: t, port: n, snapshot: i } = e,
          o = oR(),
          s = t.canvas.focusRestore,
          l = (0, r.useCallback)(
            (e) => (0, M.BD)(s, null, { kind: "canvasNode", nodeId: e }),
            [s],
          );
        return (0, a.jsx)(t7, {
          api: t,
          editAvailability: o,
          port: n,
          restoreNodeFocus: l,
          snapshot: i,
        });
      }
      function od(e) {
        let { editor: t, port: n, snapshot: i } = e,
          o = (0, r.useCallback)(
            (e, n) => t.recoverMediaPlaybackUrl(e, n),
            [t],
          ),
          s = (0, r.useCallback)((e) => t.refreshResourceIds(e), [t]);
        return n && "active" === i.status
          ? (0, a.jsx)(aR, {
              onRecoverPlaybackUrl: o,
              onRefreshResourceIds: s,
              port: n,
              snapshot: i,
            })
          : null;
      }
      function oc(e) {
        let { editor: t, port: n, snapshot: i } = e,
          o = (0, r.useCallback)(
            (e, n) => t.recoverMediaPlaybackUrl(e, n),
            [t],
          ),
          s = (0, r.useCallback)((e) => t.refreshResourceIds(e), [t]);
        return n && "active" === i.status
          ? (0, a.jsx)(rM, {
              onRecoverPlaybackUrl: o,
              onRefreshResourceIds: s,
              port: n,
              snapshot: i,
            })
          : null;
      }
      function ou(e) {
        let { editor: t, port: n, restoreCanvasFocus: i, snapshot: r } = e;
        return n && "active" === r.status
          ? (0, a.jsx)(om, {
              editor: t,
              port: n,
              restoreCanvasFocus: i,
              snapshot: r,
            })
          : null;
      }
      function om(e) {
        var t, n, i, o, s, l, d, c, u, m, v, p, f, h, g, b;
        let x,
          w,
          S,
          j,
          { editor: C, port: M, restoreCanvasFocus: R, snapshot: I } = e,
          E =
            ((g = C),
            (b = I.timelineId),
            (x = (0, r.useCallback)(
              (e) =>
                g.canvasStore.subscribe((t, n) => {
                  t.projectionCache.nodeById.get(b) !==
                    n.projectionCache.nodeById.get(b) && e();
                }),
              [g.canvasStore, b],
            )),
            (w = (0, r.useCallback)(() => {
              let e = g.canvasStore.getState().projectionCache.nodeById.get(b);
              return (null == e ? void 0 : e.type) === "timeline" ? e : null;
            }, [g.canvasStore, b])),
            (0, r.useSyncExternalStore)(x, w, () => null)),
          P = (0, k.Se)(C, I.timelineId),
          A = (0, r.useMemo)(() => {
            var e;
            let t, n, a, i;
            return (
              (e = C),
              (t = null),
              (n = 0),
              (a = -1),
              (i = Object.freeze([])),
              {
                getSnapshot: () => {
                  let r =
                    e.canvasStore.getState().projectionCache
                      .mediaResourceIdByNodeId;
                  return r === t && a === n
                    ? i
                    : ((t = r),
                      (a = n),
                      (i = (0, k.de)(
                        r,
                        (t) => e.canvasTopology.getNode(t),
                        (t) => {
                          var n, a;
                          return null ==
                            (n = (a = e.resourceStates).getNodeRuntimeResource)
                            ? void 0
                            : n.call(a, t);
                        },
                      )));
                },
                subscribe: (a) => {
                  let i = ov(e, a, () => {
                      n += 1;
                    }),
                    r = e.canvasStore.subscribeSelector(
                      (e) => e.projectionCache.mediaResourceIdByNodeId,
                      () => {
                        ((t = null),
                          i(),
                          (i = ov(e, a, () => {
                            n += 1;
                          })),
                          a());
                      },
                    );
                  return () => {
                    (r(), i());
                  };
                },
              }
            );
          }, [C]);
        E &&
          ((S = (e, t) => {
            var n, i;
            return (0, a.jsx)(k.Su, {
              actions: null == (n = C.featuresApi) ? void 0 : n.canvas.actions,
              candidatePort: A,
              data: E.data,
              getCurrentTimeTick: e,
              importedAssets:
                null == (i = C.featuresApi)
                  ? void 0
                  : i.canvas.timelineImportedAssets,
              onClipAdded: t,
              timelineId: E.id,
            });
          }),
          (j = (0, a.jsx)(k.rN, {
            editor: C,
            historyTarget: "timeline",
            trackSlot: !0,
            timelineId: E.id,
            uploadSnapshot: P,
          })));
        let T = {},
          N =
            null == (t = C.featuresApi)
              ? void 0
              : t.canvas.timelineImportedAssets;
        N &&
          (T.addImportedAsset = async (e) => (await N.add(I.timelineId, e)).ok);
        let D = {},
          L =
            null == (n = C.featuresApi) ? void 0 : n.canvas.timelineClipUpload;
        return (
          L && (D.uploadSession = L),
          (0, a.jsx)(i1, {
            ...T,
            ...D,
            actions:
              null == (o = C.featuresApi) || null == (i = o.canvas)
                ? void 0
                : i.actions,
            assetPanel: S,
            collaborationOverlay: (0, a.jsx)(y, { nodeId: I.timelineId }),
            data: (null == E ? void 0 : E.data) ?? null,
            editableProjectDownloadSession:
              null == (l = C.featuresApi) || null == (s = l.canvas)
                ? void 0
                : s.editableProjectDownload,
            exportSession:
              null == (c = C.featuresApi) || null == (d = c.canvas)
                ? void 0
                : d.timelineExport,
            jianyingDraftGenerateSession:
              null == (m = C.featuresApi) || null == (u = m.canvas)
                ? void 0
                : u.jianyingDraftGenerate,
            materialExportSession:
              null == (p = C.featuresApi) || null == (v = p.canvas)
                ? void 0
                : v.materialExport,
            timelineRenderSession:
              null == (h = C.featuresApi) || null == (f = h.canvas)
                ? void 0
                : f.timelineRender,
            pendingClips: P.items,
            port: M,
            restoreCanvasFocus: R,
            snapshot: I,
            sourcePicker: j,
          })
        );
      }
      function ov(e, t, n) {
        let a = e.resourceStates.subscribeNodeRuntimeResource;
        if (!a) return () => void 0;
        let i =
            e.canvasStore.getState().projectionCache.mediaResourceIdByNodeId,
          r = [];
        for (let [o, s] of i)
          (null != s && s.trim()) ||
            r.push(
              a.call(e.resourceStates, o, () => {
                (n(), t());
              }),
            );
        return () => {
          for (let e of r) e();
        };
      }
      function op(e) {
        return e.active
          ? (0, a.jsx)(r.Suspense, {
              fallback: null,
              children: (0, a.jsx)(rq, {
                collaborationOverlay:
                  e.snapshot.nodeId && "fullscreen" === e.snapshot.presentation
                    ? (0, a.jsx)(y, { nodeId: e.snapshot.nodeId })
                    : void 0,
                session: e.session,
                snapshot: e.snapshot,
                viewport: e.viewport,
                viewportMoving: e.viewportMoving,
              }),
            })
          : null;
      }
      function of(e) {
        var t;
        let n,
          {
            editAvailability: i,
            interactionBlocked: s,
            interaction: l,
            nodeAnchoredPanelEnabled: d,
            nodeAnchoredPanelViewportPolicy: c,
            nodeIds: u,
            nodeToolbarEnabled: m,
            nodeToolbarHidden: v,
            nodeToolbarZIndex: p,
            onRequestViewportChange: f,
            selectionContextToolbarEnabled: b,
            selectionContextToolbarSuppressed: x,
            mounted: y,
            viewport: w,
          } = e,
          k = (0, h.FY)(),
          { writeChromeVisible: S } = (0, o.A1)(),
          j = (0, r.useSyncExternalStore)(
            k.stackPresentation.subscribeToolbarTarget,
            k.stackPresentation.getToolbarTarget,
            () => null,
          ),
          C = (0, r.useSyncExternalStore)(
            k.stackPresentation.subscribeMotionActive,
            k.stackPresentation.getMotionActive,
            () => !1,
          ),
          M = (0, h.sL)((e) => {
            var t;
            return (
              1 === u.length &&
              (null == (t = e.nodes[e.visibleNodeIndexById.get(u[0]) ?? -1])
                ? void 0
                : t.type) === "stack"
            );
          }),
          R = (0, r.useMemo)(
            () => (S && j && u.length < 2 ? [j] : M ? [] : u),
            [j, u, M, S],
          ),
          I = (function (e, t) {
            var n;
            let a,
              i,
              o =
                ((a = 1 === t.length ? t[0] : void 0),
                (i = (0, r.useCallback)(
                  (e) => {
                    var t;
                    if (!a) return !1;
                    let n = e.visibleNodeIndexById.get(a);
                    return (
                      void 0 !== n &&
                      (null == (t = e.nodes[n])
                        ? void 0
                        : t.data.mediaResultExpanded) === !0
                    );
                  },
                  [a],
                )),
                (0, h.sL)(i)),
              s = e.draggedNodeIds.length > 0,
              l =
                (n = e).unselectedNodePressActive ||
                n.draggedNodeIds.length > 0 ||
                n.selectionBoxActive;
            return {
              nodeDragging: s,
              nodeToolbarHidden: o || e.unselectedNodePressActive || s,
              selectionToolbarHidden: o || l,
              selectionToolbarPreservesVisibility: !o && l && !s,
            };
          })(l, u);
        if (
          ((n =
            1 ===
            (t = {
              editor: k,
              mounted: y,
              nodeIds: u,
              nodeToolbarEnabled: m,
              selectionContextToolbarEnabled:
                b && R.length === u.length && R.every((e, t) => e === u[t]),
            }).nodeIds.length
              ? t.nodeIds[0]
              : void 0),
          (0, g.zi)({
            id: "node-toolbar-fallback",
            nodeId: t.mounted && t.nodeToolbarEnabled ? void 0 : n,
            role: "nodeToolbar",
            viewportPresentation: t.editor.viewport,
          }),
          (0, g.zi)({
            id: "selection-context-toolbar-fallback",
            nodeId: t.mounted && t.selectionContextToolbarEnabled ? void 0 : n,
            role: "selectionContextToolbar",
            viewportPresentation: t.editor.viewport,
          }),
          !y || (!d && !m && !b))
        )
          return null;
        let E = (e) => {
            s && (e.preventDefault(), e.stopPropagation());
          },
          P = null;
        d &&
          (P = (0, a.jsx)(aF.hB, {
            nodeDragging: I.nodeDragging,
            nodeIds: u,
            onRequestViewportChange: f,
            viewport: w,
            viewportMoving: l.viewportMoving,
            viewportPolicy: c,
          }));
        let A = null;
        m &&
          (A = (0, a.jsx)(a$, {
            hidden: v || I.nodeToolbarHidden,
            nodeIds: u,
            viewport: w,
            zIndex: p,
          }));
        let T = (0, a.jsx)(a8, {
          editAvailability: i,
          enabled: b,
          hidden: I.selectionToolbarHidden,
          nodeIds: R,
          preserveVisibilityDuringInteraction:
            I.selectionToolbarPreservesVisibility,
          suppressed: x || C,
          viewport: w,
          viewportMoving: l.viewportMoving,
        });
        return (0, a.jsxs)("div", {
          className: "contents",
          "data-interaction-blocked": String(s),
          "data-testid": "default-feature-overlay-interaction-boundary",
          onClickCapture: E,
          onKeyDownCapture: E,
          onPointerDownCapture: E,
          children: [P, A, T],
        });
      }
      function oh(e) {
        return "active" === e.session.status && e.port
          ? (0, a.jsx)(og, {
              editAvailability: e.editAvailability,
              interaction: e.interaction,
              onRequestViewportChange: e.onRequestViewportChange,
              port: e.port,
              session: e.session,
              viewport: e.viewport,
              viewportPanActive: e.viewportPanActive,
            })
          : null;
      }
      function og(e) {
        let {
            editAvailability: t,
            interaction: n,
            onRequestViewportChange: i,
            port: o,
            session: s,
            viewport: l,
            viewportPanActive: d,
          } = e,
          c = (0, h.FY)(),
          u = (0, r.useCallback)(() => {
            (c.selectionActions.clearSelection("user"), o.close());
          }, [c, o]),
          m = c.featuresApi;
        if (!m)
          throw Error(
            "CanvasEditor.featuresApi is missing for the image post edit overlay",
          );
        return (0, a.jsx)(e_.L, {
          facts: m.app.observability.facts,
          children: (0, a.jsx)(nO, {
            featuresApi: m,
            postEditCatalog: m.canvas.postEditCatalog,
            imageMultiSizeServices: m.canvas.imageMultiSizeServices,
            commercial: m.app.commercial,
            canWrite: () => m.canvas.getEditAvailability().local.available,
            logger: m.app.observability.logger,
            editAvailability: t,
            nodeDragging: n.draggedNodeIds.length > 0,
            onCancelCutoutRecognition: o.cancelCutoutRecognition,
            onCancelInpaintingRemoveRecognition:
              o.cancelInpaintingRemoveRecognition,
            onClose: o.close,
            onFinishCutoutQuickSelect: o.finishCutoutQuickSelect,
            onFinishInpaintingRemoveQuickSelect:
              o.finishInpaintingRemoveQuickSelect,
            onRecognizeCutout: o.recognizeCutout,
            onRecognizeInpaintingRemove: o.recognizeInpaintingRemove,
            onRequestCanvasExit: u,
            onRequestViewportChange: i,
            onRestartSmartEditFromCurrent: o.restartSmartEditFromCurrent,
            readLightingEditorMemory: o.readLightingEditorMemory,
            writeLightingEditorMemory: o.writeLightingEditorMemory,
            onSubmit: o.submit,
            onSubmitBatch: o.submitBatch,
            onUpdateCutoutDocument: o.updateCutoutDocument,
            onUpdateInpaintingRemoveDocument: o.updateInpaintingRemoveDocument,
            port: o,
            resources: c.resourceStates,
            session: s,
            viewport: l,
            viewportPresentation: c.viewport,
            viewportMoving: n.viewportMoving,
            viewportPanActive: d,
          }),
        });
      }
      function ob(e) {
        let { interaction: t, port: n, snapshot: i, viewport: r } = e;
        return "active" === i.status && n
          ? (0, a.jsx)(oy, {
              interaction: t,
              port: n,
              snapshot: i,
              viewport: r,
            })
          : null;
      }
      function ox(e) {
        let {
            editAvailability: t,
            editor: n,
            interaction: i,
            snapshot: r,
            viewport: o,
          } = e,
          s = n.featuresApi;
        return s
          ? (0, a.jsx)(t6, {
              api: s,
              editAvailability: t,
              nodeDragging: i.draggedNodeIds.length > 0,
              snapshot: r,
              viewport: o,
              viewportMoving: i.viewportMoving,
            })
          : null;
      }
      function oy(e) {
        let { interaction: t, port: n, snapshot: i, viewport: r } = e,
          o = oR();
        return (0, a.jsx)(tC, {
          editAvailability: o,
          nodeDragging: t.draggedNodeIds.length > 0,
          port: n,
          snapshot: i,
          viewport: r,
          viewportMoving: t.viewportMoving,
        });
      }
      function ow(e) {
        let {
          editor: t,
          interaction: n,
          referenceSelectionActive: i,
          snapshot: o,
          viewport: s,
          viewportPanActive: l,
        } = e;
        !(function (e) {
          var t;
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = (0, r.useMemo)(
              () =>
                "active" === e.status ? e.sources.map((e) => e.nodeId) : [],
              [e],
            );
          (0, rk.jr)({
            active: "active" === e.status && "crop" !== e.mode && !n,
            sessionIdentity:
              "inactive" === (t = e).status
                ? "inactive"
                : "matting" === t.mode
                  ? `matting:${t.matting.input.source.nodeId}:${t.matting.input.source.resourceId}`
                  : "crop" === t.mode
                    ? `crop:${t.crop.source.nodeId}:${t.crop.source.resourceId}`
                    : "depth-capture" === t.mode
                      ? `depth-capture:${t.depthCapture.source.nodeId}:${t.depthCapture.source.resourceId}`
                      : "subtitle-erasure" === t.mode
                        ? `subtitle-erasure:${t.subtitleErasure.sessionId}`
                        : "partial-reshoot" === t.mode
                          ? `partial-reshoot:${t.partialReshoot.sessionId}`
                          : "edit" === t.mode
                            ? `edit:${t.edit.sessionId}`
                            : "frame-interpolation" === t.mode
                              ? `frame-interpolation:${t.frameInterpolation.sessionId}`
                              : "sample-promotion" === t.mode
                                ? `sample-promotion:${t.samplePromotion.sessionId}`
                                : `upscale:${t.upscale.sessionId}`,
            sourceNodeIds: a,
            confirmationMessage: (0, rw.c_)(),
            toastId: "video-post-edit-safe-area-exit-confirmation",
            controlSurfaceSelector:
              '[data-video-post-edit-control-surface="true"], [data-media-edit-control-surface="true"]',
            ownedSurfaceSelector: '[data-video-edit-owned="true"]',
          });
        })(o, i);
        let d = (0, a.jsx)(eF.x9, { slot: "overlay" }),
          c = t.getGenerationFeatureRuntime();
        return (
          "active" === o.status &&
            "partial-reshoot" === o.mode &&
            c &&
            t.featuresApi &&
            (d = (0, a.jsx)(ez.Cj, {
              api: t.featuresApi,
              runtime: c,
              children: d,
            })),
          (0, a.jsx)(ry.l, {
            referenceSelectionActive: i,
            nodeDragging: n.draggedNodeIds.length > 0,
            snapshot: o,
            viewport: s,
            viewportMoving: n.viewportMoving,
            viewportPanActive: l,
            viewportPresentation: t.viewport,
            children: d,
          })
        );
      }
      function ok(e) {
        let {
          editor: t,
          interaction: n,
          port: i,
          snapshot: r,
          viewport: o,
        } = e;
        return "active" === r.status && i
          ? (0, a.jsx)(rN, {
              nodeDragging: n.draggedNodeIds.length > 0,
              port: i,
              snapshot: r,
              viewport: o,
              viewportMoving: n.viewportMoving,
              viewportPresentation: t.viewport,
            })
          : null;
      }
      function oS(e) {
        let {
          interaction: t,
          onRequestViewportChange: n,
          port: i,
          snapshot: r,
          viewport: o,
        } = e;
        return "active" === r.status && i
          ? (0, a.jsx)(eu, {
              nodeDragging: t.draggedNodeIds.length > 0,
              onRequestViewportChange: n,
              port: i,
              snapshot: r,
              viewport: o,
              viewportMoving: t.viewportMoving,
            })
          : null;
      }
      function oj(e) {
        let {
          editor: t,
          interaction: n,
          port: i,
          snapshot: r,
          viewport: o,
        } = e;
        return "active" === r.status && i
          ? (0, a.jsx)(i8, {
              nodeDragging: n.draggedNodeIds.length > 0,
              port: i,
              snapshot: r,
              viewport: o,
              viewportMoving: n.viewportMoving,
              viewportPresentation: t.viewport,
            })
          : null;
      }
      function oC(e) {
        let { interaction: t, port: n, snapshot: i, viewport: o } = e,
          s = (0, h.FY)(),
          [l, d] = (0, r.useState)(null),
          c = "active" === i.status ? i.source.nodeId : void 0,
          u = (0, M.oy)(),
          m = (0, r.useCallback)(() => {
            (null == n || n.close(),
              (0, M.BD)(u, null, { kind: "canvasRegion" }));
          }, [u, n]);
        if (
          ((0, f.C2)("active" === i.status && !!n, m),
          (0, g.NX)({
            enabled: 0 === t.draggedNodeIds.length && !t.viewportMoving,
            id: "video-translation-panel",
            layoutRevision: c,
            nodeAnchor: "bottom",
            nodeId: c,
            role: "postEditToolbar",
            surface: l,
            viewport: o,
            viewportPresentation: s.viewport,
          }),
          eT('[data-testid="video-translation-panel"]', "active" === i.status),
          "active" !== i.status || !n)
        )
          return null;
        let v = "submitting" === i.submission.phase,
          p =
            "failed" === i.submission.phase
              ? i.submission.errorMessage
              : void 0;
        return (0, a.jsx)(eL, {
          audioScenario: "videoTranslation",
          outputCount: Math.max(1, i.selectedLanguageIds.length),
          referenceVideoDurationSeconds:
            void 0 === i.source.durationMs ? void 0 : i.source.durationMs / 1e3,
          children: (e) =>
            (0, a.jsx)(aF.mG, {
              nodeDragging: t.draggedNodeIds.length > 0,
              nodeId: i.source.nodeId,
              onSurfaceChange: d,
              overlayTestId: "video-translation-overlay",
              sizing: "content",
              surfaceTestId: "video-translation-surface",
              viewport: o,
              viewportPolicy: "preserve",
              viewportMoving: t.viewportMoving,
              children: (0, a.jsx)(eI.T, {
                clearLabel: (0, eE.mP)(),
                creditLabel: i.selectedLanguageIds.length > 0 ? e : void 0,
                languages: n.getLanguages(),
                onClear: () => n.clearSelection(),
                onSubmit: () => {
                  n.submit();
                },
                onToggleLanguage: (e) => n.toggleLanguage(e),
                panelLabel: (0, eE.rE)(),
                removeLanguageLabel: (e) => (0, eE.H9)(e),
                selectedCountLabel: eE.D3,
                selectedLanguageIds: i.selectedLanguageIds,
                sourceLanguageHint: (0, eE.TL)(),
                submitErrorMessage: p,
                submitLabel: (0, eE.BN)(),
                submitState: v ? "submitting" : "idle",
                title: (0, eE.V1)(),
              }),
            }),
        });
      }
      function oM(e) {
        let { interaction: t, port: n, snapshot: i, viewport: o } = e,
          s = "active" === i.status ? i.source.nodeId : void 0,
          l = (0, r.useMemo)(() => (s ? [s] : []), [s]),
          d = (0, M.oy)(),
          c = (0, r.useCallback)(() => {
            (null == n || n.close(),
              (0, M.BD)(d, null, { kind: "canvasRegion" }));
          }, [d, n]);
        if (
          ((0, f.C2)("active" === i.status && !!n, c),
          eT(
            '[data-testid="audio-separation-toolbar-root"]',
            "active" === i.status,
          ),
          "active" !== i.status || !n)
        )
          return null;
        let u = "submitting" === i.submission.phase,
          m =
            "failed" === i.submission.phase
              ? i.submission.errorMessage
              : void 0,
          v = (0, eR.rX)();
        return (0, a.jsx)(eL, {
          outputCount: 1,
          children: (e) =>
            (0, a.jsx)(a_.z, {
              nodeDragging: t.draggedNodeIds.length > 0,
              nodeIds: l,
              overlayTestId: "audio-separation-overlay",
              sizing: "content",
              surfaceTestId: "audio-separation-surface",
              viewport: o,
              viewportMoving: t.viewportMoving,
              children: (0, a.jsx)(eM.e, {
                creditHint: (0, p.gd)(),
                creditLabel: e,
                description: i.description,
                descriptionLabel: (0, eR.nJ)(),
                descriptionPlaceholder: (0, eR.S$)(),
                descriptionRequiredReason: (0, eR.io)(),
                mode: i.mode,
                modeLabels: v,
                onDescriptionChange: (e) => n.setDescription(e),
                onModeChange: (e) => n.setMode(e),
                onSubmit: () => {
                  n.submit();
                },
                panelLabel: (0, eR.po)(),
                submitErrorMessage: m,
                submitLabel: (0, eR.j7)(),
                submitState: u ? "submitting" : "idle",
                toolbarLabel: (0, eR.Kt)(),
              }),
            }),
        });
      }
      function oR() {
        var e;
        let t = null == (e = (0, h.FY)().featuresApi) ? void 0 : e.canvas,
          n = (0, r.useCallback)(() => {
            let e = (null == t ? void 0 : t.getEditAvailability().local) ?? oe;
            return e.available ? "available" : e.reason;
          }, [t]),
          a = (0, r.useSyncExternalStore)(
            (null == t ? void 0 : t.subscribeEditAvailability) ?? oD,
            n,
            oL,
          );
        return "available" === a ? r9 : "notEditable" === a ? r7 : oe;
      }
      function oI(e) {
        let { port: t, snapshot: n } = e;
        return t
          ? (0, a.jsx)(tP, {
              notification: n.notification,
              onDismiss: t.dismissNotification,
            })
          : null;
      }
      function oE() {
        return i.O;
      }
      function oP(e, t) {
        let n = new Set(e);
        return n.size === t.length && t.every((e) => n.has(e.nodeId));
      }
      function oA(e, t) {
        return "active" === t.status && t.source && e.includes(t.source.nodeId)
          ? [t.source.nodeId]
          : [];
      }
      function oT(e, t, n) {
        var a;
        let i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          r = n.sources,
          o = !!r && oP(t, r),
          s =
            i.keepAliveWhileSubmitting &&
            (null == (a = n.submission) ? void 0 : a.status) === "submitting";
        if ("active" === n.status && r && (o || s))
          for (let t of r) e.add(t.nodeId);
      }
      function oN(e, t, n) {
        let a = [];
        for (let e of t)
          n.has(e) || a.push({ nodeId: e, patch: { isEditing: !1 } });
        for (let e of n)
          t.has(e) || a.push({ nodeId: e, patch: { isEditing: !0 } });
        a.length > 0 && e(a);
      }
      function oD() {
        return () => void 0;
      }
      function oL() {
        return "notEditingReady";
      }
      function oF() {
        return rG;
      }
      function o_() {
        return rQ;
      }
      function oz() {
        return rZ;
      }
      function oH() {
        return rJ;
      }
      function oO() {
        return r0;
      }
      function o$() {
        return r1;
      }
      function oB() {
        return rY;
      }
      function oV() {
        return rX;
      }
      function oW() {
        return r2;
      }
      function oU() {
        return r3;
      }
      function oq() {
        return r6;
      }
      function oK() {
        return r4;
      }
      function oG() {
        return r5;
      }
      function oY() {
        return r8;
      }
    },
    62028(e, t, n) {
      var a = n(90561),
        i = n(87429);
      let r = (0, i.createContext)(void 0);
      function o(e) {
        let { children: t, facts: n } = e;
        return (0, a.jsx)(r.Provider, { value: n, children: t });
      }
      function s() {
        return (0, i.useContext)(r);
      }
      n.d(t, { L: () => o, b: () => s });
    },
    33657(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(59078),
        o = n(75073),
        s = n(30531),
        l = n(91878),
        d = n(76458),
        c = n(39243),
        u = n(86072);
      let m = (0, i.lazy)(() =>
          Promise.all([n.e(3068), n.e(683), n.e(835)])
            .then(n.bind(n, 27102))
            .then((e) => ({ default: e.SmartEditCommerceEditor })),
        ),
        v = (0, i.memo)(function (e) {
          var t;
          let n,
            v,
            {
              api: h,
              board: g,
              editDisabledReason: b,
              nodeId: x,
              onClose: y,
              onPointerEnter: w,
              onSafeHotzoneGuardChange: k,
              onToolbarSizeChange: S,
              port: j,
              presentationScale: C,
              safeHotzoneRootSelector:
                M = '[data-testid="image-layer-board-fullscreen-stage"]',
              target: R,
              toolbarMaxWidth: I,
              toolbarStyle: E,
            } = e,
            P = (0, c.QQ)(),
            A = (0, i.useRef)(0),
            T = (0, i.useRef)(),
            [N, D] = (0, i.useState)(),
            L = (0, i.useMemo)(
              () =>
                (function (e, t) {
                  if ("base" === t.source.kind)
                    return { x: 0, y: 0, width: e.width, height: e.height };
                  let n = t.source;
                  return e.layers.find((e) => e.id === n.layerId) ?? n.geometry;
                })(g, R),
              [g, R],
            ),
            F = (0, i.useMemo)(() => {
              let e = (function (e, t) {
                if ("base" === t.source.kind) return;
                let n = t.source;
                return e.layers.find((e) => e.id === n.layerId) ?? n.geometry;
              })(g, R);
              return e ? (0, u.bC)(e) : L;
            }, [g, L, R]),
            _ = (0, i.useCallback)(() => {
              var e;
              ((A.current += 1),
                null == (e = T.current) || e.abort(),
                (T.current = void 0),
                y());
            }, [y]);
          ((0, i.useEffect)(
            () => () => {
              var e;
              ((A.current += 1),
                null == (e = T.current) || e.abort(),
                (T.current = void 0));
            },
            [],
          ),
            (0, i.useEffect)(() => {
              let e = ++A.current;
              return (
                Promise.resolve(j.resolveSource(x, R))
                  .then((t) => {
                    if (e !== A.current) return;
                    if (!t) {
                      ((0, s.N)(P, {
                        durationMs: 4e3,
                        message: (0, r.Bp)(),
                        status: "warning",
                      }),
                        _());
                      return;
                    }
                    let n = (0, d.sR)(t.source);
                    if ("unavailable" === n.status) {
                      ((0, s.N)(P, {
                        durationMs: 4e3,
                        message:
                          "sourceExceedsMaximum" === n.reason
                            ? (0, o.fI)()
                            : (0, o.S2)(),
                        status: "warning",
                      }),
                        _());
                      return;
                    }
                    D(t);
                  })
                  .catch(() => {
                    e === A.current &&
                      ((0, s.N)(P, {
                        durationMs: 4e3,
                        message: (0, r.Bp)(),
                        status: "warning",
                      }),
                      _());
                  }),
                () => {
                  A.current === e && (A.current += 1);
                }
              );
            }, [_, x, j, P, R]));
          let z = (0, i.useCallback)(
              (e) => {
                e.ok ||
                  ("commercialBlocked" !== e.reason &&
                    (0, s.N)(P, {
                      durationMs: 4e3,
                      message: e.message ?? (0, r.Bp)(),
                      status: "warning",
                    }));
              },
              [P],
            ),
            H = (0, i.useCallback)(
              async (e) => {
                var t;
                if (void 0 !== b) return { status: "idle" };
                let n = new AbortController();
                (null == (t = T.current) || t.abort(), (T.current = n));
                let a = !1;
                try {
                  let t = await j.redraw(
                    { intent: e, nodeId: x, target: R },
                    {
                      onAccepted: () => {
                        a = !0;
                        let e = h.canvas.imageLayerBoard,
                          t = null == e ? void 0 : e.getSelection(x);
                        (("base" === R.source.kind
                          ? (null == t ? void 0 : t.kind) === "base"
                          : (null == t ? void 0 : t.kind) === "layer" &&
                            t.layerId === R.source.layerId) &&
                          (null == e || e.clear()),
                          (T.current = void 0),
                          _());
                      },
                      signal: n.signal,
                    },
                  );
                  return (
                    t.ok || n.signal.aborted || z(t),
                    { status: a ? "accepted" : "idle" }
                  );
                } catch {
                  return (
                    n.signal.aborted ||
                      z({ ok: !1, reason: "failed", message: (0, o.Qv)() }),
                    { status: "idle" }
                  );
                } finally {
                  T.current === n && (T.current = void 0);
                }
              },
              [h, _, b, x, j, z, R],
            ),
            O = (0, i.useCallback)(
              (e) => {
                (0, s.N)(P, {
                  durationMs: 4e3,
                  message: (0, o.Qv)(),
                  status: "warning",
                });
              },
              [P],
            ),
            $ =
              ((t = S),
              (n = (0, i.useRef)()),
              (v = (0, i.useRef)({ height: 0, width: 0 })),
              (0, i.useCallback)(
                (e) => {
                  var a;
                  if (
                    (null == (a = n.current) || a.disconnect(),
                    (n.current = void 0),
                    !e)
                  )
                    return;
                  let i = () => {
                    let n = e.getBoundingClientRect(),
                      a = { height: n.height, width: n.width };
                    a.height > 0 &&
                      a.width > 0 &&
                      (a.height !== v.current.height ||
                        a.width !== v.current.width) &&
                      ((v.current = a), t(a));
                  };
                  if ((i(), "u" < typeof ResizeObserver)) return;
                  let r = new ResizeObserver(i);
                  (r.observe(e), (n.current = r));
                },
                [t],
              )),
            B = (0, i.useMemo)(
              () => ({
                onGuardChange: k,
                rootSelector: M,
                sourceSurfaceSelector:
                  '[data-testid="image-layer-board-smart-edit-editor"]',
              }),
              [k, M],
            ),
            V = (0, i.useMemo)(
              () => (e) => {
                var t, n, i, r;
                let {
                  editorLabel: o,
                  interactionBlocked: s,
                  mediaSurface: l,
                  toolbar: d,
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      "aria-label": o,
                      className:
                        "pointer-events-auto absolute z-canvas-layer-board-handle",
                      "data-interaction-blocked": s || void 0,
                      "data-testid": "image-layer-board-smart-edit-editor",
                      role: "group",
                      style:
                        ((t = L),
                        (n = g),
                        {
                          height: `${(t.height / n.height) * 100}%`,
                          left: `${(t.x / n.width) * 100}%`,
                          top: `${(t.y / n.height) * 100}%`,
                          width: `${(t.width / n.width) * 100}%`,
                        }),
                      onContextMenu: f,
                      onPointerDown: p,
                      onPointerEnter: w,
                      onPointerMove: p,
                      onPointerOver: p,
                      children: (0, a.jsx)("div", {
                        className: "absolute inset-0 overflow-hidden",
                        "data-testid": "image-layer-board-smart-edit-media",
                        children: l,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "pointer-events-auto absolute z-canvas-layer-board-handle w-max max-w-canvas-layer-board-cutout-toolbar",
                      "data-media-edit-control-surface": "true",
                      "data-testid": "image-layer-board-smart-edit-toolbar",
                      ref: $,
                      style: {
                        ...(E ??
                          ((i = F),
                          (r = g),
                          {
                            left: `${((i.x + i.width / 2) / r.width) * 100}%`,
                            top: `${((i.y + i.height) / r.height) * 100}%`,
                          })),
                        ...(void 0 === I ? {} : { maxWidth: I }),
                      },
                      onContextMenu: f,
                      onPointerDown: p,
                      onPointerEnter: w,
                      onPointerMove: p,
                      onPointerOver: p,
                      onWheelCapture: p,
                      children: d,
                    }),
                  ],
                });
              },
              [g, L, w, I, $, E, F],
            );
          return N
            ? (0, a.jsx)(i.Suspense, {
                fallback: null,
                children: (0, a.jsx)(m, {
                  initialDocument: N.document ?? (0, l.Gf)(),
                  initialModelName: N.modelName,
                  initialOutputResolution: N.outputResolution,
                  interactionDisabledReason: b,
                  onCancel: _,
                  onError: O,
                  onSubmit: H,
                  presentationScale: C,
                  renderPresentation: V,
                  safeHotzoneGuardAdapter: B,
                  source: N.source,
                }),
              })
            : null;
        });
      function p(e) {
        e.stopPropagation();
      }
      function f(e) {
        (e.preventDefault(), e.stopPropagation());
      }
      n.d(t, {}, { e: v });
    },
    40874(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(59078),
        o = n(66876),
        s = n(172),
        l = n(55452),
        d = n(18650),
        c = n(13363),
        u = n(12760),
        m = n(43403);
      function v(e) {
        let {
          board: t,
          editDisabledReason: n,
          multiSelected: a,
          selection: i,
          target: o,
        } = e;
        if (void 0 !== n) return n;
        if (a) return (0, r.ln)();
        if (!o) return (0, r.AH)();
        if (!(0, u.qB)(t)) return (0, d.VO)("layerLimit");
        let s =
          (null == i ? void 0 : i.kind) === "layer"
            ? t.layers.find((e) => e.id === i.layerId)
            : void 0;
        if (s && ((s.rotation ?? 0) !== 0 || !0 === s.flipX || !0 === s.flipY))
          return (0, r.BM)();
      }
      let p = (0, i.memo)(function (e) {
        let {
            baseResourceId: t,
            board: n,
            editDisabledReason: i,
            multiSelected: d = !1,
            onStartInteractive: u,
            pending: p,
            selection: f,
          } = e,
          h = (0, c.PC)(n, t, f),
          g = v({
            board: n,
            editDisabledReason: i,
            multiSelected: d,
            selection: f,
            target: h,
          }),
          b = p ? (0, r.MP)() : (0, o.Wxu)();
        return (0, a.jsx)(m.w, {
          disabledReason: p ? void 0 : g,
          label: b,
          side: "top",
          children: (0, a.jsx)(s.flD, {
            "data-testid": "image-layer-board-redraw",
            disabled: p,
            disabledReason: p ? void 0 : g,
            icon: (0, a.jsx)(l.NL, { className: "size-4" }),
            label: b,
            value: "redraw",
            variant: "toolbar",
            onClick: () => {
              !p && void 0 === g && h && u(h);
            },
          }),
        });
      });
      n.d(t, { q: () => v }, { c: p });
    },
    53973(e, t, n) {
      var a = n(25734),
        i = n(75073);
      function r(e) {
        if ("checking" === e.status)
          return {
            creditPresentation: (0, a.kD)({
              quote: void 0,
              formatCredits: i.tt,
              formatDiscountAmount: i.tF,
            }),
            disabledReason: (0, i.xH)(),
          };
        if ("unavailable" === e.status)
          return {
            creditPresentation: (0, a.kD)({
              quote: void 0,
              quoteUnavailableReason: e.reason,
              formatCredits: i.tt,
              formatDiscountAmount: i.tF,
            }),
            disabledReason: (0, i.Xu)(),
          };
        let t = e.quote;
        return {
          creditPresentation: (0, a.kD)({
            quote: t,
            formatCredits: i.tt,
            formatDiscountAmount: i.tF,
          }),
          disabledReason: void 0,
        };
      }
      n.d(t, { w: () => r });
    },
    57554(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(3366);
      let o = Object.freeze({
        bottom: "var(--canvas-content-safe-area-bottom, 0px)",
        left: "var(--canvas-content-safe-area-left, 0px)",
        right: "var(--canvas-content-safe-area-right, 0px)",
        top: "var(--canvas-content-safe-area-top, 0px)",
      });
      function s(e) {
        var t, n, s, c, u, m, v, p, f;
        let {
            ariaBusy: h,
            blockedSelector: g,
            children: b,
            editorLabel: x,
            interactionBlocked: y,
            liveStatus: w,
            onCancel: k,
            rootTestId: S = "image-post-edit-editor-shell",
            safeAreaInsets: j,
            stageClassName: C,
            stageStyle: M,
            stageTestId: R = "image-post-edit-editor-stage",
            toolbar: I,
          } = e,
          E = (0, i.useRef)(null),
          P = (0, i.useRef)(null);
        ((t = (0, r.oy)()),
          (n = E),
          (0, i.useLayoutEffect)(() => {
            let e = n.current;
            if (!e) return;
            let a =
                document.activeElement instanceof HTMLElement &&
                document.activeElement !== document.body
                  ? document.activeElement
                  : null,
              i = (function (e) {
                let t = [],
                  n = e;
                for (; null == n ? void 0 : n.parentElement; ) {
                  let e = n.parentElement;
                  for (let a of e.children)
                    a instanceof HTMLElement &&
                      a !== n &&
                      (t.push({
                        ariaHidden: a.getAttribute("aria-hidden"),
                        element: a,
                        inert: a.hasAttribute("inert"),
                      }),
                      a.setAttribute("aria-hidden", "true"),
                      a.setAttribute("inert", ""));
                  if (e === document.body) break;
                  n = e;
                }
                return () => {
                  for (let e of t.reverse())
                    (null === e.ariaHidden
                      ? e.element.removeAttribute("aria-hidden")
                      : e.element.setAttribute("aria-hidden", e.ariaHidden),
                      e.element.toggleAttribute("inert", e.inert));
                };
              })(e);
            e.contains(document.activeElement) || d(e, "first");
            let o = (t) => {
              t.target instanceof Node &&
                !e.contains(t.target) &&
                d(e, "first");
            };
            return (
              document.addEventListener("focusin", o, !0),
              () => {
                (document.removeEventListener("focusin", o, !0),
                  i(),
                  (0, r.BD)(t, a));
              }
            );
          }, [t, n]),
          (s = E),
          (c = P),
          (u = y),
          (m = g),
          (0, i.useLayoutEffect)(() => {
            let e = c.current;
            if (!e) return;
            let t = [e];
            for (let n of (m && (t = Array.from(e.querySelectorAll(m))), t))
              n.toggleAttribute("inert", !!u);
            if (u && t.some((e) => e.contains(document.activeElement))) {
              var n;
              null == (n = s.current) || n.focus({ preventScroll: !0 });
            }
            return () => {
              for (let e of t) e.removeAttribute("inert");
            };
          }, [m, u, s, c]),
          (v = P),
          (0, i.useLayoutEffect)(() => {
            let e = v.current,
              t = requestAnimationFrame(() => {
                null == e ||
                  e.classList.add(
                    "dreamina-image-post-edit-shell-stage-entered",
                  );
              });
            return () => cancelAnimationFrame(t);
          }, [v]));
        let A = { ...o, ...j },
          T =
            ((p = k),
            (0, i.useCallback)(
              (e) => {
                e.target === e.currentTarget && p();
              },
              [p],
            )),
          N =
            ((f = E),
            (0, i.useCallback)(
              (e) => {
                if ("Tab" !== e.key) return;
                let t = f.current;
                if (!t) return;
                let n = l(t),
                  a = n[0],
                  i = n.at(-1),
                  r = document.activeElement;
                if (!a || !i) {
                  (e.preventDefault(), t.focus({ preventScroll: !0 }));
                  return;
                }
                if (e.shiftKey && (r === a || r === t || !t.contains(r))) {
                  (e.preventDefault(), i.focus({ preventScroll: !0 }));
                  return;
                }
                e.shiftKey ||
                  (r !== i && r !== t && t.contains(r)) ||
                  (e.preventDefault(), a.focus({ preventScroll: !0 }));
              },
              [f],
            ));
        return (0, a.jsxs)("section", {
          "aria-label": x,
          "aria-modal": "true",
          className:
            "nodrag nopan nowheel pointer-events-auto absolute inset-0 z-30 bg-dreamina-bg-black/15",
          "data-canvas-interaction-ignore": "true",
          "data-testid": S,
          onKeyDownCapture: N,
          onPointerDown: T,
          ref: E,
          role: "dialog",
          tabIndex: -1,
          children: [
            (0, a.jsx)("div", {
              "aria-busy": (h ?? y) || void 0,
              className: "absolute flex items-center justify-center",
              "data-testid": "image-post-edit-safe-area",
              style: {
                bottom: A.bottom,
                left: A.left,
                right: A.right,
                top: A.top,
              },
              onPointerDown: T,
              children: (0, a.jsxs)("div", {
                ref: P,
                className: [
                  "dreamina-image-post-edit-shell-stage flex max-h-[90%] max-w-[90%] scale-[0.98] flex-col items-center gap-[30px] opacity-0 transition-[opacity,transform] duration-dreamina-overlay ease-dreamina-soft motion-reduce:duration-dreamina-instant [&.dreamina-image-post-edit-shell-stage-entered]:scale-100 [&.dreamina-image-post-edit-shell-stage-entered]:opacity-100",
                  C,
                ]
                  .filter(Boolean)
                  .join(" "),
                "data-testid": R,
                style: M,
                children: [b, I],
              }),
            }),
            w,
          ],
        });
      }
      function l(e) {
        return Array.from(
          e.querySelectorAll(
            'a[href],audio[controls],button:not([disabled]),[contenteditable="true"],input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),[tabindex],video[controls]',
          ),
        ).filter(
          (e) =>
            e.tabIndex >= 0 &&
            !e.closest('[aria-hidden="true"], [hidden], [inert]') &&
            !e.matches(":disabled"),
        );
      }
      function d(e, t) {
        let n = l(e);
        (("first" === t ? n[0] : n.at(-1)) ?? e).focus({ preventScroll: !0 });
      }
      n.d(t, { r: () => s });
    },
    84991(e, t, n) {
      var a = n(56);
      n.d(t, { Y: () => a.$t });
    },
    15534(e, t, n) {
      function a(e) {
        return /^[\r\n]*$/u.test(e) ? "" : e;
      }
      n.d(t, { $: () => a });
    },
    81702(e, t, n) {
      let a = Object.freeze({
        operationStatusInsetTop: 8,
        toolbarHeight: 40,
        toolbarOffset: 24,
      });
      n.d(t, {}, { u: a });
    },
    45752(e, t, n) {
      function a(e) {
        (o(e.sourceWidth, "sourceWidth"), o(e.sourceHeight, "sourceHeight"));
        let t = e.sourceWidth / e.sourceHeight,
          n =
            "original" === e.targetAspect
              ? t
              : (function (e) {
                  let [t, n] = (function (e) {
                    let [t, n] = e.split(":").map(Number);
                    return [t, n];
                  })(e);
                  return t / n;
                })(e.targetAspect),
          a = Math.round(
            "original" === e.targetAspect
              ? e.sourceWidth * e.scale
              : t < n
                ? e.sourceHeight * n
                : e.sourceWidth,
          ),
          i = Math.round(
            "original" === e.targetAspect
              ? e.sourceHeight * e.scale
              : t < n
                ? e.sourceHeight
                : e.sourceWidth / n,
          ),
          r = (a - e.sourceWidth) / 2 / e.sourceWidth,
          s = (i - e.sourceHeight) / 2 / e.sourceHeight;
        return {
          bottom: s,
          left: r,
          outputHeight: i,
          outputWidth: a,
          right: r,
          top: s,
        };
      }
      function i(e) {
        if (void 0 !== e.horizontalEdge && void 0 !== e.verticalEdge) {
          var t;
          let n, a, i, r, o, l, d, u, m, v, p, f, h, g, b, x, y;
          return (
            (n =
              (t = {
                ...e,
                horizontalEdge: e.horizontalEdge,
                verticalEdge: e.verticalEdge,
              }).displayWidth > 0
                ? t.displayWidth
                : t.initial.outputWidth),
            (a =
              t.displayHeight > 0 ? t.displayHeight : t.initial.outputHeight),
            (i = "right" === t.horizontalEdge ? 1 : -1),
            (r = "bottom" === t.verticalEdge ? 1 : -1),
            (l =
              (o = n ** 2 + a ** 2) > 0
                ? (i * n * t.deltaX + r * a * t.deltaY) / o
                : 0),
            (d = 1 + t.initial.left + t.initial.right),
            (u = 1 + t.initial.top + t.initial.bottom),
            (m = t.initial[t.horizontalEdge]),
            (p = c(
              l,
              Math.max(-m / d, -(v = t.initial[t.verticalEdge]) / u),
              s(t.sourceWidth, t.sourceHeight) /
                Math.max(t.initial.outputWidth, t.initial.outputHeight) -
                1,
            )),
            (f = m + d * p),
            (h = v + u * p),
            (g = "left" === t.horizontalEdge ? f : t.initial.left),
            (b = "right" === t.horizontalEdge ? f : t.initial.right),
            (x = "top" === t.verticalEdge ? h : t.initial.top),
            {
              bottom: (y = "bottom" === t.verticalEdge ? h : t.initial.bottom),
              left: g,
              outputHeight: Math.round(t.sourceHeight * (1 + x + y)),
              outputWidth: Math.round(t.sourceWidth * (1 + g + b)),
              right: b,
              top: x,
            }
          );
        }
        let n =
            e.displayWidth > 0
              ? (e.deltaX / e.displayWidth) *
                (1 + e.initial.left + e.initial.right)
              : 0,
          a =
            e.displayHeight > 0
              ? (e.deltaY / e.displayHeight) *
                (1 + e.initial.top + e.initial.bottom)
              : 0,
          i = s(e.sourceWidth, e.sourceHeight),
          r = {
            bottom: e.initial.bottom,
            left: e.initial.left,
            right: e.initial.right,
            top: e.initial.top,
          };
        (void 0 !== e.horizontalEdge &&
          (r[e.horizontalEdge] = d({
            delta: n,
            direction: "right" === e.horizontalEdge ? 1 : -1,
            edge: e.horizontalEdge,
            initial: e.initial,
            maximumAxisMargin: i / e.sourceWidth - 1,
          })),
          void 0 !== e.verticalEdge &&
            (r[e.verticalEdge] = d({
              delta: a,
              direction: "bottom" === e.verticalEdge ? 1 : -1,
              edge: e.verticalEdge,
              initial: e.initial,
              maximumAxisMargin: i / e.sourceHeight - 1,
            })));
        let { bottom: o, left: l, right: u, top: m } = r;
        return {
          bottom: o,
          left: l,
          outputHeight: Math.round(e.sourceHeight * (1 + m + o)),
          outputWidth: Math.round(e.sourceWidth * (1 + l + u)),
          right: u,
          top: m,
        };
      }
      function r(e) {
        var t, n;
        (o(e.sourceWidth, "sourceWidth"), o(e.sourceHeight, "sourceHeight"));
        let a = e.initial.left + e.initial.right,
          i = e.initial.top + e.initial.bottom,
          r = e.displaySourceWidth > 0 ? e.deltaX / e.displaySourceWidth : 0,
          s = e.displaySourceHeight > 0 ? e.deltaY / e.displaySourceHeight : 0,
          l = ((t = e.initial.left - r), c(t, 0, a)),
          d = ((n = e.initial.top - s), c(n, 0, i));
        return {
          bottom: i - d,
          left: l,
          outputHeight: e.initial.outputHeight,
          outputWidth: e.initial.outputWidth,
          right: a - l,
          top: d,
        };
      }
      function o(e, t) {
        if (!Number.isFinite(e) || e <= 0)
          throw Error(`${t} must be a positive finite number.`);
      }
      function s(e, t) {
        return 3 * Math.max(e, t);
      }
      let l = Object.freeze({
        bottom: "top",
        left: "right",
        right: "left",
        top: "bottom",
      });
      function d(e) {
        var t, n;
        let a = e.initial[e.edge],
          i = e.initial[l[e.edge]];
        return (
          (t = a + e.direction * e.delta),
          (n = e.maximumAxisMargin - i),
          c(t, 0, Math.max(n, a, 0))
        );
      }
      function c(e, t, n) {
        return Math.min(n, Math.max(t, e));
      }
      n.d(t, { Df: () => r, G9: () => s, XQ: () => a, fR: () => i });
    },
    21116(e, t, n) {
      var a = n(34977),
        i = n(45752);
      function r(e) {
        return {
          candidateCount: 1,
          frame: e.frame,
          preset: e.preset ?? "original",
          prompt: "",
          scale: e.scale ?? 1.5,
        };
      }
      function o(e) {
        let t = (0, i.G9)(e.source.width, e.source.height),
          n = (function (e) {
            if (!(0, a.G)(e.sourceWidth) || !(0, a.G)(e.sourceHeight))
              return { error: "source-dimensions-invalid", ok: !1 };
            let t = [e.frame.top, e.frame.right, e.frame.bottom, e.frame.left];
            if (t.some((e) => !Number.isFinite(e)))
              return { error: "frame-non-finite", ok: !1 };
            if (t.some((e) => e < 0))
              return { error: "frame-negative", ok: !1 };
            if (t.every((e) => 0 === e))
              return { error: "frame-all-zero", ok: !1 };
            let n = Math.round(
                e.sourceWidth * (1 + e.frame.left + e.frame.right),
              ),
              i = Math.round(
                e.sourceHeight * (1 + e.frame.top + e.frame.bottom),
              );
            if (e.frame.outputWidth !== n || e.frame.outputHeight !== i)
              return { error: "output-dimensions-mismatch", ok: !1 };
            let r = Math.max(n, i);
            return void 0 !== e.maxLongestEdge && r > e.maxLongestEdge
              ? { error: "output-longest-edge-exceeded", ok: !1 }
              : { maxSize: r, ok: !0 };
          })({
            frame: e.options.frame,
            maxLongestEdge: Math.min(e.maxLongestEdge ?? t, t),
            sourceHeight: e.source.height,
            sourceWidth: e.source.width,
          });
        return n.ok
          ? {
              intent: {
                candidateCount: e.options.candidateCount,
                frame: e.options.frame,
                maxSize: n.maxSize,
                prompt: e.options.prompt.trim(),
                source: e.source,
                type: "outpaint",
              },
              ok: !0,
            }
          : n;
      }
      n.d(t, { Rm: () => o, bT: () => r });
    },
    48216(e, t, n) {
      let a = Object.freeze({
        compactToolbarHeight: 104,
        multilineToolbarHeight: 160,
        toolbarOffset: 24,
      });
      function i(e) {
        return e > a.compactToolbarHeight ? "multiline" : "compact";
      }
      n.d(t, { v: () => i }, { M: a });
    },
    17881(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(82530),
        o = n(172),
        s = n(25063);
      function l(e) {
        var t, n, l, x, y, w, k, S, j;
        let C,
          M,
          R,
          {
            captureLabel: I,
            captures: E,
            disabled: P,
            density: A = "panel",
            loading: T,
            maxCount: N,
            onCapture: D,
            onCapturePointerActivation: L,
            onRemove: F,
            previewHeader: _,
            previewSourceSize: z,
            railLabel: H,
            removeLabel: O,
            testIdPrefix: $,
            thumbnailDescription: B,
            thumbnailLabel: V,
          } = e,
          W = (0, i.useRef)(null),
          U = "toolbar" === A ? o.IBt : o.$nd,
          q = (0, i.useRef)(null),
          K = (function (e, t) {
            var n, a, r;
            let o,
              s,
              l,
              [d, c] = (0, i.useState)(),
              v = (0, i.useRef)(),
              p = (0, i.useRef)(),
              h =
                ((n = c),
                (a = e),
                (r = t),
                (o = (0, i.useRef)()),
                (s = (0, i.useCallback)(() => {
                  ((o.current = void 0),
                    n((e) => {
                      let t = e ? u(e.anchor, r.current) : null;
                      if (e && t) return { ...e, geometry: f(t, a) };
                    }));
                }, [a, n, r])),
                (l = (0, i.useCallback)(() => {
                  void 0 === o.current &&
                    (o.current = window.requestAnimationFrame(s));
                }, [s])),
                (0, i.useEffect)(
                  () => (
                    window.addEventListener("resize", l),
                    window.addEventListener("scroll", l, !0),
                    () => {
                      (window.removeEventListener("resize", l),
                        window.removeEventListener("scroll", l, !0),
                        void 0 !== o.current &&
                          window.cancelAnimationFrame(o.current),
                        (o.current = void 0));
                    }
                  ),
                  [l],
                ),
                l),
              g = (0, i.useRef)(e);
            (0, i.useEffect)(() => {
              g.current !== e && ((g.current = e), h());
            }, [e, h]);
            let b = (0, i.useCallback)(() => {
                void 0 !== p.current &&
                  (window.cancelAnimationFrame(p.current),
                  (p.current = void 0));
              }, []),
              x = (0, i.useCallback)(() => {
                p.current = void 0;
                let n = v.current,
                  a = n ? u(n.anchor, t.current) : null;
                n && a
                  ? c((t) => m(t, n.captureId, n.anchor, f(a, e), "pointer"))
                  : c((e) => {
                      var t;
                      return (null == (t = e) ? void 0 : t.pointerActive)
                        ? t.focusActive
                          ? { ...t, pointerActive: !1 }
                          : void 0
                        : t;
                    });
              }, [e, t]),
              y = (0, i.useCallback)(() => {
                void 0 === p.current &&
                  (p.current = window.requestAnimationFrame(x));
              }, [x]),
              w = (0, i.useCallback)(
                (e, t) => {
                  ((v.current = { anchor: t, captureId: e }), y());
                },
                [y],
              ),
              k = (0, i.useCallback)(
                (e) => {
                  var t;
                  ((null == (t = v.current) ? void 0 : t.captureId) === e &&
                    (v.current = void 0),
                    y());
                },
                [y],
              ),
              S = (0, i.useCallback)(
                (n, a) => {
                  ((v.current = void 0), b());
                  let i = u(a, t.current);
                  c((t) => (i ? m(t, n, a, f(i, e), "focus") : void 0));
                },
                [b, e, t],
              ),
              j = (0, i.useCallback)(
                (e) =>
                  c((t) =>
                    t && t.captureId === e
                      ? t.pointerActive
                        ? { ...t, focusActive: !1 }
                        : void 0
                      : t,
                  ),
                [],
              );
            return (
              (0, i.useEffect)(
                () => () => {
                  ((v.current = void 0), b());
                },
                [b],
              ),
              {
                activePreview: d,
                closeFocus: j,
                closePointer: k,
                openFocus: S,
                openPointer: w,
                reposition: h,
              }
            );
          })(
            (t = z).width <= 0 || t.height <= 0
              ? 100
              : Math.min(
                  Math.max(Math.round(b * (t.height / t.width)), 1),
                  320,
                ),
            q,
          ),
          [G, Y] = (0, i.useState)(() => new Set()),
          [X, Q] = (0, i.useState)({ atEnd: !0, atStart: !0 }),
          Z = E.length > 0 ? "compact" : "expanded",
          J = E.length > 4,
          ee =
            "panel" === A
              ? "h-canvas-frame-capture-control"
              : "h-canvas-selection-toolbar-control",
          et =
            "panel" === A
              ? "w-canvas-frame-capture-control min-w-canvas-frame-capture-control"
              : "w-canvas-selection-toolbar-control min-w-canvas-selection-toolbar-control",
          en =
            "panel" === A
              ? "bg-dreamina-block-secondary-default text-dreamina-text-primary shadow-canvas-post-edit-control hover:bg-dreamina-block-secondary-hover"
              : void 0;
        ((n = W),
          (l = Z),
          (C = (0, i.useRef)(null)),
          (M = (0, i.useRef)()),
          (R = (0, i.useRef)()),
          (0, i.useLayoutEffect)(() => {
            let e,
              t,
              a = n.current;
            if (!a) return;
            let i =
                (((e = a.cloneNode(!0)).style.position = "fixed"),
                (e.style.left = "-10000px"),
                (e.style.top = "0"),
                (e.style.visibility = "hidden"),
                (e.style.pointerEvents = "none"),
                (e.style.transition = "none"),
                document.body.append(e),
                (t = e.getBoundingClientRect().width),
                e.remove(),
                t),
              r = M.current,
              s = C.current
                ? a.getBoundingClientRect().width
                : (R.current ?? i);
            if (
              (d(C),
              (M.current = l),
              (R.current = i),
              void 0 === r ||
                r === l ||
                0.5 >= Math.abs(s - i) ||
                !a.animate ||
                (0, o.Oeg)(window, !0))
            )
              return;
            let c = a.animate([{ width: `${s}px` }, { width: `${i}px` }], {
              ...(0, o.FX6)(a),
              fill: "both",
            });
            ((C.current = c),
              (c.oncancel = () => {
                C.current === c && (C.current = null);
              }),
              (c.onfinish = () => {
                C.current === c && ((C.current = null), c.cancel());
              }));
          }, [n, l]),
          (0, i.useLayoutEffect)(
            () => () => {
              d(C);
            },
            [],
          ));
        let ea = (0, i.useCallback)(() => {
            var e;
            let t,
              n = q.current;
            if (!n) return;
            let a =
              ((t = p((e = n))),
              {
                atEnd: e.scrollLeft + e.clientWidth >= t - 1,
                atStart: e.scrollLeft <= 1,
              });
            Q((e) => (e.atEnd === a.atEnd && e.atStart === a.atStart ? e : a));
          }, []),
          ei = (0, i.useCallback)(() => {
            (ea(), K.reposition());
          }, [K, ea]);
        ((x = q),
          (y = J),
          (0, i.useEffect)(() => {
            let e = x.current;
            if (!y || !e) return;
            let t = (t) => {
              if (Math.abs(t.deltaY) <= Math.abs(t.deltaX)) return;
              let n =
                  t.deltaMode === WheelEvent.DOM_DELTA_LINE
                    ? 16
                    : t.deltaMode === WheelEvent.DOM_DELTA_PAGE
                      ? e.clientWidth
                      : 1,
                a = Math.min(
                  Math.max(0, p(e) - e.clientWidth),
                  Math.max(0, e.scrollLeft + t.deltaY * n),
                );
              a !== e.scrollLeft && (t.preventDefault(), (e.scrollLeft = a));
            };
            return (
              e.addEventListener("wheel", t, { passive: !1 }),
              () => e.removeEventListener("wheel", t)
            );
          }, [y, x]),
          (0, i.useEffect)(() => {
            let e = E.map((e) => e.captureId).filter((e) => !G.has(e));
            if (0 === e.length) return;
            let t = window.requestAnimationFrame(() => {
              Y((t) => {
                let n = new Set(t);
                for (let t of e) n.add(t);
                return n;
              });
            });
            return () => window.cancelAnimationFrame(t);
          }, [E, G]),
          (0, i.useLayoutEffect)(() => {
            let e = q.current;
            e &&
              0 !== E.length &&
              ((e.scrollLeft = J ? Math.max(0, p(e) - e.clientWidth) : 0),
              ea());
          }, [E.length, J, ea]));
        let er = K.activePreview
          ? E.find((e) => {
              var t;
              return (
                e.captureId ===
                (null == (t = K.activePreview) ? void 0 : t.captureId)
              );
            })
          : void 0;
        return (0, a.jsxs)("div", {
          className:
            "flex min-w-canvas-zero items-center gap-canvas-selection-toolbar-control-gap",
          children: [
            (0, a.jsxs)("div", {
              "aria-hidden": 0 === E.length || void 0,
              className: (0, o.cn)(
                `relative shrink-0 ${ee}`,
                "motion-safe:transition-[margin] motion-safe:duration-dreamina-element motion-safe:ease-dreamina-soft motion-reduce:transition-none",
                0 === E.length && "-mr-canvas-selection-toolbar-control-gap",
                J && "max-w-canvas-frame-capture-rail",
              ),
              "data-capture-state": Z,
              "data-testid": `${$}-rail-motion`,
              children: [
                (0, a.jsx)("section", {
                  ref: q,
                  "aria-label": H,
                  className: (0, o.cn)(
                    "relative box-border flex",
                    J &&
                      "[&::-webkit-scrollbar]:hidden max-w-canvas-frame-capture-rail overflow-x-auto overflow-y-hidden [scrollbar-width:none]",
                    !J && "overflow-visible",
                    (function (e) {
                      let { atEnd: t, atStart: n } = e;
                      return n || t
                        ? n
                          ? t
                            ? void 0
                            : "[clip-path:inset(0_1px_0_0)]"
                          : "[clip-path:inset(0_0_0_1px)]"
                        : "[clip-path:inset(0_1px)]";
                    })(X),
                  ),
                  "data-testid": `${$}-rail`,
                  style: h,
                  onScroll: ei,
                  children: E.map((e, t) =>
                    (0, a.jsx)(
                      c,
                      {
                        capture: e,
                        density: A,
                        description: B(e, t + 1),
                        disabled: P,
                        label: V(t + 1),
                        motionState: G.has(e.captureId)
                          ? "entered"
                          : "entering",
                        removeLabel: O(t + 1),
                        sequence: t + 1,
                        testIdPrefix: $,
                        onFocusPreviewClose: K.closeFocus,
                        onFocusPreviewOpen: K.openFocus,
                        onPointerPreviewClose: K.closePointer,
                        onPointerPreviewOpen: K.openPointer,
                        onRemove: F,
                      },
                      e.captureId,
                    ),
                  ),
                }),
                (0, a.jsx)(v, {
                  atEnd: X.atEnd,
                  atStart: X.atStart,
                  density: A,
                  overflow: J,
                  testIdPrefix: $,
                }),
              ],
            }),
            (0, a.jsxs)(U, {
              "aria-label": I,
              className: (0, o.cn)(
                ee,
                "rounded-canvas-selection-toolbar-control border-0 font-dreamina-medium text-dreamina-cn-13 motion-safe:transition-[min-width,padding,gap,background-color,color,border-color] motion-safe:duration-dreamina-element motion-safe:ease-dreamina-soft motion-reduce:transition-none",
                en,
                "compact" === Z
                  ? `${et} gap-canvas-zero p-canvas-zero`
                  : "w-auto shrink-0 whitespace-nowrap gap-canvas-selection-toolbar-control-gap pl-canvas-frame-capture-action-start-inset pr-canvas-frame-capture-action-end-inset",
              ),
              "data-capture-state": Z,
              "data-testid": `${$}-capture`,
              disabled: P || E.length >= N,
              loading: T,
              ref: W,
              size: "toolbar" === A ? "sm" : "md",
              variant: "toolbar" === A ? "secondary" : "text",
              value: `${$}-capture`,
              onClick: (e) => {
                (e.detail > 0 && (null == L || L()), D());
              },
              children: [
                (0, a.jsx)(o.fc4, { className: "size-4" }),
                (0, a.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "grid grid-cols-[1fr] opacity-canvas-frame-capture-action-visible motion-safe:transition-[grid-template-columns,opacity,transform] motion-safe:duration-dreamina-element motion-safe:ease-dreamina-soft data-[capture-state=compact]:grid-cols-[0fr] data-[capture-state=compact]:-translate-x-canvas-selection-toolbar-control-gap data-[capture-state=compact]:opacity-canvas-frame-capture-action-hidden motion-reduce:transition-none",
                  "data-capture-state": Z,
                  "data-testid": `${$}-capture-label`,
                  children: (0, a.jsx)("span", {
                    className: "min-w-canvas-zero overflow-hidden",
                    children: I,
                  }),
                }),
              ],
            }),
            er && K.activePreview
              ? ((w = er),
                (k = K.activePreview.geometry),
                (S = _(er, E.indexOf(er) + 1)),
                (j = $),
                "u" < typeof document
                  ? null
                  : (0, r.createPortal)(
                      (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: (0, o.cn)(
                          "pointer-events-none fixed origin-bottom overflow-hidden rounded-canvas-frame-capture-preview drop-shadow-dreamina-canvas-frame-capture-preview motion-safe:animate-dreamina-overlay-scale-enter motion-reduce:animate-none",
                          s.FR.overlay,
                        ),
                        "data-testid": `${j}-thumbnail-preview`,
                        style: k,
                        children: (0, a.jsxs)("span", {
                          className:
                            "absolute inset-0 overflow-hidden rounded-canvas-frame-capture-preview-media",
                          "data-slot": `${j}-preview-media`,
                          children: [
                            (0, a.jsx)("img", {
                              alt: "",
                              className: "size-full object-cover",
                              decoding: "async",
                              draggable: !1,
                              src: w.previewUrl,
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute inset-x-0 top-0 flex items-center justify-between bg-dreamina-canvas-frame-capture-preview-header font-dreamina-cn text-dreamina-cn-12 font-dreamina-medium text-dreamina-on-media-text-primary",
                              "data-slot": `${j}-preview-header`,
                              style: g,
                              children: (0, a.jsx)("span", {
                                className: "drop-shadow-dreamina-icon-text",
                                children: S,
                              }),
                            }),
                          ],
                        }),
                      }),
                      document.body,
                      w.captureId,
                    ))
              : null,
          ],
        });
      }
      function d(e) {
        let t = e.current;
        ((e.current = null), null == t || t.cancel());
      }
      let c = (0, i.memo)(function (e) {
        let {
            capture: t,
            description: n,
            density: r,
            disabled: s,
            label: l,
            motionState: d,
            onFocusPreviewClose: c,
            onFocusPreviewOpen: u,
            onPointerPreviewClose: m,
            onPointerPreviewOpen: v,
            onRemove: p,
            removeLabel: f,
            sequence: h,
            testIdPrefix: g,
          } = e,
          b = (0, i.useId)(),
          x = "toolbar" === r ? o.IBt : o.$nd;
        return (0, a.jsxs)("fieldset", {
          "aria-label": l,
          className: (0, o.cn)(
            "group relative m-canvas-zero min-w-canvas-zero shrink-0 overflow-visible rounded-canvas-frame-capture-thumbnail border border-dreamina-stroke-primary bg-canvas-frame-capture-thumbnail p-canvas-zero opacity-canvas-frame-capture-action-visible motion-safe:transition-[width,margin,opacity,transform] motion-safe:duration-dreamina-element motion-safe:ease-dreamina-soft motion-safe:data-[motion-state=entering]:w-canvas-zero motion-safe:data-[motion-state=entering]:translate-x-canvas-selection-toolbar-control-gap motion-safe:data-[motion-state=entering]:opacity-canvas-frame-capture-action-hidden motion-reduce:transition-none",
            "panel" === r
              ? "size-canvas-frame-capture-control"
              : "size-canvas-selection-toolbar-control",
            h > 1 && "ml-canvas-selection-toolbar-control-gap",
            h > 1 && "motion-safe:data-[motion-state=entering]:ml-canvas-zero",
          ),
          "data-motion-state": d,
          "data-testid": `${g}-thumbnail`,
          onBlur: (e) => {
            (e.relatedTarget instanceof Node &&
              e.currentTarget.contains(e.relatedTarget)) ||
              c(t.captureId);
          },
          onFocus: (e) => u(t.captureId, e.currentTarget),
          onPointerEnter: (e) => v(t.captureId, e.currentTarget),
          onPointerLeave: () => m(t.captureId),
          children: [
            (0, a.jsxs)("span", {
              className:
                "absolute inset-0 overflow-hidden rounded-canvas-frame-capture-thumbnail-inner",
              "data-testid": `${g}-thumbnail-content`,
              children: [
                (0, a.jsx)("img", {
                  alt: "",
                  className: "size-full object-cover",
                  draggable: !1,
                  src: t.previewUrl,
                }),
                (0, a.jsxs)("span", {
                  "aria-hidden": "true",
                  className:
                    "h-canvas-frame-capture-sequence-mask px-canvas-frame-capture-sequence-inset bg-canvas-frame-capture-sequence-mask absolute inset-x-0 bottom-0 flex items-center justify-start text-left font-dreamina-number text-dreamina-number-10 font-dreamina-regular text-dreamina-on-media-text-primary",
                  children: ["#", h],
                }),
              ],
            }),
            (0, a.jsx)(x, {
              "aria-describedby": b,
              "aria-label": f,
              className:
                "absolute right-[-3px] top-[-3px] z-canvas-frame-capture-interaction size-4 rounded-canvas-frame-capture-remove border border-dreamina-stroke-primary bg-dreamina-on-media-panel-bg p-canvas-selection-toolbar-control-block text-dreamina-on-media-text-primary opacity-canvas-frame-capture-action-hidden shadow-canvas-post-edit-control after:absolute after:-inset-1 after:content-[''] group-hover:opacity-canvas-frame-capture-action-visible group-focus-within:opacity-canvas-frame-capture-action-visible hover:bg-dreamina-on-media-panel-bg focus:opacity-canvas-frame-capture-action-visible motion-safe:transition-opacity motion-reduce:transition-none",
              disabled: s,
              size: "icon",
              variant: "text",
              value: `${g}-remove-${t.captureId}`,
              onClick: () => p(t.captureId),
              children: (0, a.jsx)(o.USm, {
                "aria-hidden": "true",
                className: "text-dreamina-on-media-text-primary",
                size: 8,
              }),
            }),
            (0, a.jsx)("span", { className: "sr-only", id: b, children: n }),
          ],
        });
      });
      function u(e, t) {
        if (!e.isConnected) return null;
        let n = e.getBoundingClientRect();
        if (
          n.right <= 0 ||
          n.bottom <= 0 ||
          n.left >= window.innerWidth ||
          n.top >= window.innerHeight
        )
          return null;
        if (!t || 0 === t.clientWidth || 0 === t.clientHeight) return n;
        let a = t.getBoundingClientRect();
        return n.right > a.left &&
          n.left < a.right &&
          n.bottom > a.top &&
          n.top < a.bottom
          ? n
          : null;
      }
      function m(e, t, n, a, i) {
        let r = (null == e ? void 0 : e.captureId) === t;
        return {
          anchor: n,
          captureId: t,
          focusActive:
            "focus" === i || !!(r && (null == e ? void 0 : e.focusActive)),
          geometry: a,
          pointerActive:
            "pointer" === i || !!(r && (null == e ? void 0 : e.pointerActive)),
        };
      }
      function v(e) {
        let {
          atEnd: t,
          atStart: n,
          density: i,
          overflow: r,
          testIdPrefix: s,
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            r && !n
              ? (0, a.jsx)("span", {
                  "aria-hidden": "true",
                  className: (0, o.cn)(
                    "z-canvas-frame-capture-interaction w-canvas-frame-capture-rail-fade pointer-events-none absolute inset-y-0 left-0",
                    "toolbar" === i
                      ? "bg-canvas-panorama-capture-rail-fade-left"
                      : "bg-canvas-frame-capture-rail-fade-left",
                  ),
                  "data-testid": `${s}-left-fade`,
                })
              : null,
            r && !t
              ? (0, a.jsx)("span", {
                  "aria-hidden": "true",
                  className: (0, o.cn)(
                    "z-canvas-frame-capture-interaction w-canvas-frame-capture-rail-fade pointer-events-none absolute inset-y-0 right-0",
                    "toolbar" === i
                      ? "bg-canvas-panorama-capture-rail-fade-right"
                      : "bg-canvas-frame-capture-rail-fade-right",
                  ),
                  "data-testid": `${s}-right-fade`,
                })
              : null,
          ],
        });
      }
      function p(e) {
        let t = e.lastElementChild;
        return t instanceof HTMLElement
          ? t.offsetLeft + t.offsetWidth
          : e.scrollWidth;
      }
      function f(e, t) {
        let n = Math.max(
            8,
            Math.min(
              e.left + e.width / 2 - b / 2,
              Math.max(8, window.innerWidth - b - 8),
            ),
          ),
          a = e.bottom - 43 - t,
          i = e.bottom + 8,
          r = a < 8 && i <= window.innerHeight - t - 8 ? i : a;
        return { height: t, left: n, top: r, width: b };
      }
      let h = { height: 46, paddingBlock: 5, top: -5 },
        g = { height: 40, padding: "8px 8px 8px 12px" },
        b = 180;
      n.d(t, { c: () => l });
    },
    14389(e, t, n) {
      var a = n(87429),
        i = n(172),
        r = n(39243),
        o = n(45756);
      let s = new WeakMap();
      function l(e) {
        let {
            active: t,
            sessionIdentity: n,
            sourceNodeIds: i,
            confirmationMessage: s,
            toastId: l,
            controlSurfaceSelector: m,
            includeControlSurfacesInFeedback: v = !1,
            ownedSurfaceSelector: p,
          } = e,
          f = (0, r.QQ)(),
          h = (0, a.useMemo)(() => new d(), []),
          g = (0, a.useRef)(n);
        (0, a.useLayoutEffect)(
          () => (
            (t && g.current === n) || ((g.current = n), h.clear()),
            () => h.clear()
          ),
          [h, n, t],
        );
        let b = (0, a.useCallback)(
          (e) => {
            let t =
              (e.target instanceof Element
                ? e.target
                : e.currentTarget
              ).closest(".react-flow") ??
              e.currentTarget.closest(".react-flow");
            if (!t) return !1;
            let n = h.resolvePointerSequence(e.type);
            if (null !== n) return n;
            let a = (function (e) {
              let {
                  point: t,
                  root: n,
                  sourceNodeIds: a,
                  controlSurfaceSelector: i,
                  includeControlSurfacesInFeedback: r = !1,
                  ownedSurfaceSelector: o,
                } = e,
                s = a.flatMap((e) => {
                  var t;
                  let a = n.querySelector(
                    `.react-flow__node[data-id="${((t = e), "u" > typeof CSS && "function" == typeof CSS.escape ? CSS.escape(t) : t.replaceAll("\\", "\\\\").replaceAll('"', '\\"'))}"]`,
                  );
                  return a ? [a] : [];
                }),
                l = n.querySelectorAll(i),
                d = (function (e) {
                  let t = [];
                  for (let n of e) {
                    let e = n.getBoundingClientRect();
                    e.width <= 0 ||
                      e.height <= 0 ||
                      t.push({
                        bottom: e.bottom,
                        left: e.left,
                        right: e.right,
                        top: e.top,
                      });
                  }
                  return t;
                })([...s, ...Array.from(l).flatMap(c)]),
                m = (function (e) {
                  let t = null;
                  for (let n of e) {
                    if (null === t) {
                      t = n;
                      continue;
                    }
                    t = {
                      bottom: Math.max(t.bottom, n.bottom),
                      left: Math.min(t.left, n.left),
                      right: Math.max(t.right, n.right),
                      top: Math.min(t.top, n.top),
                    };
                  }
                  return t;
                })(d);
              if (!m || !u(t, m, 40) || d.some((e) => u(t, e, 0))) return null;
              let v = s.flatMap((e) => {
                let t = e.querySelector(
                  '[data-canvas-flow-node-surface="true"]',
                );
                if (!t) return [];
                let n = Array.from(e.querySelectorAll(o)).filter(
                  (e) => !t.contains(e),
                );
                return [t, ...n];
              });
              return r ? [...new Set([...v, ...Array.from(l)])] : v;
            })({
              point: { x: e.clientX, y: e.clientY },
              root: t,
              sourceNodeIds: i,
              controlSurfaceSelector: m,
              includeControlSurfacesInFeedback: v,
              ownedSurfaceSelector: p,
            });
            return !!a && h.guard(e.type, a, f, s, l);
          },
          [f, h, i, s, l, m, v, p],
        );
        (0, o.Vv)(b, t);
      }
      class d {
        clear() {
          ((this.confirmationExpiresAt = null),
            (this.pointerDecision = null),
            this.clearShake(),
            this.clearToast());
        }
        resolvePointerSequence(e) {
          var t;
          if ("pointerdown" === e) return ((this.pointerDecision = null), null);
          let n = this.pointerDecision,
            a =
              ((t = n),
              "pointerdown" === e || null === t ? null : t.shouldGuard);
          return (
            null !== a &&
              queueMicrotask(() => {
                this.pointerDecision === n && (this.pointerDecision = null);
              }),
            a
          );
        }
        guard(e, t, n, a, i) {
          var r, o;
          let s =
            ((r = this.confirmationExpiresAt),
            (o = Date.now()),
            null !== r && o <= r
              ? { nextExpiresAt: null, shouldGuard: !1, shouldNotify: !1 }
              : { nextExpiresAt: o + 6e3, shouldGuard: !0, shouldNotify: !0 });
          return (
            (this.confirmationExpiresAt = s.nextExpiresAt),
            "pointerdown" === e &&
              (this.pointerDecision = { shouldGuard: s.shouldGuard }),
            s.shouldNotify
              ? this.notify(t, n, s.nextExpiresAt, a, i)
              : s.shouldGuard || (this.clearShake(), this.clearToast()),
            s.shouldGuard
          );
        }
        notify(e, t, n, a, r) {
          for (let t of (this.clearShake(), (this.shakeTargets = e), e))
            !(function (e) {
              var t;
              if ((0, i.Oeg)(globalThis)) return;
              null == (t = s.get(e)) || t.cancel();
              let n = "cubic-bezier(0.37, 0, 0.63, 1)",
                a = e.animate(
                  [
                    { easing: n, offset: 0, translate: "0 0" },
                    { easing: n, offset: 0.18, translate: "-5px 0" },
                    { easing: n, offset: 0.37, translate: "4px 0" },
                    { easing: n, offset: 0.56, translate: "-2.6px 0" },
                    { easing: n, offset: 0.73, translate: "1.4px 0" },
                    { easing: n, offset: 0.87, translate: "-0.6px 0" },
                    { offset: 1, translate: "0 0" },
                  ],
                  { duration: 640, easing: "linear" },
                );
              (s.set(e, a),
                a.addEventListener(
                  "finish",
                  () => {
                    s.get(e) === a && s.delete(e);
                  },
                  { once: !0 },
                ));
            })(t);
          (this.clearToast(),
            (this.dismissToast = t({
              announcement: "polite",
              dismissible: !1,
              durationMs: null,
              id: r,
              status: "neutral",
              title: a,
            })),
            (this.dismissToastTimer = setTimeout(() => {
              this.confirmationExpiresAt === n && this.clearToast();
            }, 6e3)));
        }
        clearToast() {
          var e;
          (null !== this.dismissToastTimer &&
            clearTimeout(this.dismissToastTimer),
            (this.dismissToastTimer = null),
            null == (e = this.dismissToast) || e.call(this),
            (this.dismissToast = null));
        }
        clearShake() {
          for (let e of this.shakeTargets)
            !(function (e) {
              let t = s.get(e);
              t && (s.delete(e), t.cancel());
            })(e);
          this.shakeTargets = [];
        }
        constructor() {
          ((this.confirmationExpiresAt = null),
            (this.pointerDecision = null),
            (this.shakeTargets = []),
            (this.dismissToast = null),
            (this.dismissToastTimer = null));
        }
      }
      function c(e) {
        let t = e.querySelectorAll(
          '[data-video-post-edit-control-region="true"], [data-media-edit-control-region="true"]',
        );
        return t.length > 0 ? Array.from(t) : [e];
      }
      function u(e, t, n) {
        return (
          e.x >= t.left - n &&
          e.x <= t.right + n &&
          e.y >= t.top - n &&
          e.y <= t.bottom + n
        );
      }
      n.d(t, { jr: () => l });
    },
    21765(e, t, n) {
      var a = n(87429),
        i = n(172);
      let r = (0, a.createContext)(!0);
      function o(e) {
        let { activeKey: t, activeValue: n, retainOnExit: a } = e,
          r = (0, i.qwp)({
            activeValue: void 0 !== t && void 0 !== n ? n : null,
            activeKey: t,
            animateExit: a,
          });
        return {
          key: r.key,
          value: r.value ?? void 0,
          phase: r.phase,
          visible: r.mounted && !r.exiting,
          completeMotion: r.exiting ? r.completeExit : r.completeEnter,
        };
      }
      function s(e, t, n) {
        let a =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "slide-fade",
          i =
            "transition-none motion-safe:transition-none motion-reduce:transition-none",
          r = "present" === e ? "pointer-events-auto" : "pointer-events-none";
        return "fade" === a
          ? `${i} ${r} ${n ? "opacity-dreamina-media-action-visible" : "opacity-dreamina-media-action-hidden"}`
          : n
            ? `${i} ${r} opacity-dreamina-media-action-visible [translate:0_0] [scale:1]`
            : `${i} ${r} opacity-dreamina-media-action-hidden ${"top" === t ? "[translate:0_16px]" : "[translate:0_-24px]"} [scale:1]`;
      }
      function l(e) {
        let {
            surface: t,
            visible: n,
            origin: r,
            onComplete: o,
            duration: s = 120,
            motion: l = "slide-fade",
            restartKey: d,
          } = e,
          c = (0, a.useMemo)(() => ({ current: t }), [t]),
          u = (0, a.useMemo)(
            () =>
              "fade" === l
                ? (0, i.LD3)()
                : (0, i.ulb)(0, "top" === r ? 16 : -24),
            [l, r],
          );
        (0, i.vut)({
          surfaceRef: c,
          recipe: u,
          restartKey: d,
          target: Number(n),
          duration: s,
          clearOnComplete: !0,
          onComplete: o,
        });
      }
      n.d(t, { FW: () => s, XT: () => o, qL: () => l }, { rH: r });
    },
    17636(e, t, n) {
      n.d(t, { hB: () => h, YM: () => x, mG: () => b });
      var a = n(90561),
        i = n(15047),
        r = n(87429),
        o = n(9952),
        s = n(93998),
        l = n(10639),
        d = n(46411),
        c = n(5586),
        u = n(25592),
        m = n(172);
      let v = () => () => void 0,
        p = { width: 1 / 0, height: 1 / 0 };
      var f = n(63074);
      let h = (0, r.memo)(function (e) {
        let {
            nodeDragging: t,
            nodeIds: n,
            onRequestViewportChange: i,
            viewport: r,
            viewportMoving: o,
            viewportPolicy: s = "adjust",
          } = e,
          l = 1 === n.length ? n[0] : void 0;
        return l
          ? (0, a.jsx)(g, {
              nodeDragging: t,
              nodeId: l,
              onRequestViewportChange: i,
              viewport: r,
              viewportMoving: o,
              viewportPolicy: s,
            })
          : null;
      });
      function g(e) {
        let {
          nodeDragging: t,
          nodeId: n,
          onRequestViewportChange: i,
          viewport: r,
          viewportMoving: o,
          viewportPolicy: s,
        } = e;
        return (0, a.jsx)(b, {
          nodeDragging: t,
          nodeId: n,
          onRequestViewportChange: i,
          viewport: r,
          viewportMoving: o,
          viewportPolicy: s,
          children: (0, a.jsx)(l.x9, { slot: "nodeAnchoredPanel" }),
        });
      }
      function b(e) {
        var t;
        let n,
          {
            children: i,
            interactionBlocked: l = !1,
            nodeDragging: d,
            nodeId: c,
            onRequestViewportChange: u,
            onSurfaceChange: m,
            overlayKind: v = "node_anchored_panel",
            overlayTestId: p = "node-anchored-panel",
            sizing: f = "constrained",
            surfaceClassName: h,
            surfaceTestId: g = "node-anchored-panel-feature-host",
            surfaceTabIndex: b,
            viewport: y,
            viewportPolicy: w = "adjust",
            viewportMoving: k,
          } = e,
          S =
            ((t = v),
            (n = (0, s.FY)()),
            (0, r.useCallback)(
              (e) => {
                var a, i, r, s;
                if ("blocked" === e.status) {
                  null == (s = n.featuresApi) ||
                    null == (r = s.app) ||
                    r.observability.facts.emit(o.wl, {
                      overlay: t,
                      reason: e.reason,
                    });
                  return;
                }
                null == (i = n.featuresApi) ||
                  null == (a = i.app) ||
                  a.observability.facts.emit(o.jF, {
                    overlay: t,
                    reason: e.reason,
                    targetX: e.viewport.x,
                    targetY: e.viewport.y,
                    targetZoom: e.viewport.zoom,
                  });
              },
              [n, t],
            ));
        return (0, a.jsx)(x, {
          nodeDragging: d,
          interactionBlocked: l,
          nodeId: c,
          onPlacementEvidence: S,
          onRequestViewportChange: u,
          onSurfaceChange: m,
          overlayTestId: p,
          sizing: f,
          surfaceTabIndex: b,
          surfaceClassName: h,
          surfaceTestId: g,
          viewport: y,
          viewportPolicy: w,
          viewportMoving: k,
          children: i,
        });
      }
      function x(e) {
        var t, n;
        let o,
          s,
          {
            children: l,
            viewportDecoration: u,
            interactionBlocked: h = !1,
            nodeDragging: g,
            nodeId: b,
            offset: x = 16,
            onPlacementEvidence: w,
            onRequestViewportChange: k,
            onSurfaceChange: S,
            overlayTestId: j = "node-anchored-panel",
            sizing: C = "constrained",
            preferredPosition: M = i.yX.Bottom,
            rightAlignment: R = "center",
            surfaceTestId: I = "node-anchored-panel-feature-host",
            surfaceClassName: E,
            surfaceTabIndex: P,
            viewport: A,
            viewportPolicy: T = "adjust",
            viewportMoving: N,
          } = e,
          { width: D, insets: L } =
            ((t = null == u ? void 0 : u.presentation),
            (o = (0, r.useRef)(p)),
            (s = (0, r.useCallback)(() => {
              var e, n, a, i, r, s, l, d;
              let c = (function (e, t) {
                  var n, a;
                  let i =
                    null == e || null == (n = (a = e.space).getSafeCanvasBounds)
                      ? void 0
                      : n.call(a);
                  if (!i || !e) return p;
                  let r = e.space.screenToCanvasPosition({ x: 0, y: 0 }),
                    o =
                      1 /
                      (e.space.screenToCanvasPosition({ x: 1, y: 0 }).x - r.x);
                  if (!Number.isFinite(o) || o <= 0) return p;
                  let s = (i.x - r.x) * o,
                    l = (i.y - r.y) * o;
                  return {
                    width: Math.floor(i.width * o),
                    height: Math.floor(i.height * o),
                    insets: {
                      left: Math.max(0, s),
                      right: Math.max(0, t.width - s - i.width * o),
                      top: Math.max(0, l),
                      bottom: Math.max(0, t.height - l - i.height * o),
                    },
                  };
                })(t, {
                  width: document.documentElement.clientWidth,
                  height: document.documentElement.clientHeight,
                }),
                u = o.current;
              return (
                (c.width !== u.width ||
                  c.height !== u.height ||
                  (null == (e = c.insets) ? void 0 : e.left) !==
                    (null == (n = u.insets) ? void 0 : n.left) ||
                  (null == (a = c.insets) ? void 0 : a.right) !==
                    (null == (i = u.insets) ? void 0 : i.right) ||
                  (null == (r = c.insets) ? void 0 : r.top) !==
                    (null == (s = u.insets) ? void 0 : s.top) ||
                  (null == (l = c.insets) ? void 0 : l.bottom) !==
                    (null == (d = u.insets) ? void 0 : d.bottom)) &&
                  (o.current = c),
                o.current
              );
            }, [t])),
            (0, r.useSyncExternalStore)(
              (null == t || null == (n = t.geometry) ? void 0 : n.subscribe) ??
                v,
              s,
              () => p,
            )),
          F = (0, r.useMemo)(() => [b], [b]),
          _ = (0, d.Ij)(F),
          z = "preserve" !== T,
          { layout: H, surfaceRefCallback: O } = (0, c.HA)({
            collisionUpdateMode: "local-shift" === T ? "continuous" : "settled",
            safeAreaInsets: L,
            geometry: _,
            layoutSuspended: g,
            offset: x,
            onPlacementEvidence: w,
            onRequestViewportChange: "adjust" === T ? k : void 0,
            positionStrategy:
              "local-shift" === T
                ? "clamp-preferred"
                : z
                  ? "adaptive"
                  : "preserve-preferred",
            preferredPosition: M,
            selectionGeometryMode: "anchoredGeometry",
            verticalCollisionMode: "local-shift" === T ? "clamp" : "constrain",
            viewport: A,
            viewportMoving: N,
          }),
          [$, B] = (0, r.useState)(null),
          V = (0, r.useMemo)(
            () => ({ x: H.shiftX, y: H.shiftY }),
            [H.shiftX, H.shiftY],
          ),
          W = (0, r.useMemo)(
            () => ({ geometry: _, offset: x, position: H.position }),
            [_, x, H.position],
          );
        (0, f.NX)({
          enabled: !!u,
          id: (null == u ? void 0 : u.id) ?? "node-anchored-panel",
          layoutRevision: W,
          nodeAnchor: H.position === i.yX.Top ? "top" : "bottom",
          nodeId: u ? b : void 0,
          role: "postEditToolbar",
          screenLocalPlacementOffset: V,
          surface: $,
          viewport: A,
          viewportPresentation: null == u ? void 0 : u.presentation,
        });
        let U = (0, r.useCallback)(
          (e) => {
            (O(e), B(e), null == S || S(e));
          },
          [S, O],
        );
        return (0, a.jsx)(d.nJ, {
          "data-testid": j,
          geometry: _,
          hideWhenAnchorOutsideViewport: z,
          interactionActive: h || g || N,
          offset: x,
          position: H.position,
          preserveMountWhenAnchorOutsideViewport: z,
          preserveVisibilityDuringInteraction: !0,
          rightAlignment: R,
          viewport: A,
          zIndex: y,
          children: (0, a.jsx)("div", {
            className: (0, m.cn)(
              "content" === C
                ? "pointer-events-auto nodrag nopan nowheel w-max overflow-visible"
                : (0, m.cn)(
                    "pointer-events-auto nodrag nopan nowheel",
                    z ? "overflow-auto" : "overflow-visible",
                  ),
              E,
            ),
            "data-testid": I,
            ref: U,
            style: {
              maxHeight:
                z && "constrained" === C
                  ? (H.maxHeight ?? "calc(100vh - 32px)")
                  : "none",
              maxWidth: z
                ? Number.isFinite(D)
                  ? Math.min(D, H.maxWidth ?? D)
                  : (H.maxWidth ?? "calc(100vw - 32px)")
                : "none",
              transform: z ? `translate(${H.shiftX}px, ${H.shiftY}px)` : "none",
            },
            tabIndex: P,
            onWheel: (e) => e.stopPropagation(),
            children: l,
          }),
        });
      }
      let y = u.Xx;
    },
    44393(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(56839),
        o = n(46411),
        s = n(25592),
        l = n(8621),
        d = n(44600);
      function c(e) {
        let {
            children: t,
            nodeDragging: n,
            nodeIds: s,
            overlayTestId: c,
            sizing: m = "constrained",
            surfaceTestId: v,
            viewport: p,
            viewportMoving: f,
          } = e,
          h = (0, o.Ij)(s),
          g = (0, i.useMemo)(() => (0, d.FU)(h, s.length), [h, s.length]),
          { shift: b, surfaceRefCallback: x } = (0, r.og)({
            geometry: g,
            viewport: p,
          });
        return (0, a.jsx)(o.nJ, {
          "data-testid": c,
          geometry: g,
          hideWhenAnchorOutsideViewport: !0,
          interactionActive: n || f,
          offset: s.length > 1 ? 12 : 20,
          position: "bottom",
          preserveMountWhenAnchorOutsideViewport: !0,
          preserveVisibilityDuringInteraction: !0,
          viewport: p,
          zIndex: u,
          children: (0, a.jsx)("div", {
            className:
              "content" === m
                ? "pointer-events-auto nodrag nopan nowheel w-max overflow-visible"
                : "pointer-events-auto nodrag nopan overflow-x-auto overflow-y-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "data-video-post-edit-control-surface": "true",
            "data-testid": v,
            ref: x,
            style: {
              maxHeight: "content" === m ? "none" : "calc(100vh - 32px)",
              maxWidth: "calc(100vw - 32px)",
              transform: `translate(${b.x}px, ${b.y}px)`,
            },
            onWheelCapture: l.pE,
            children: t,
          }),
        });
      }
      let u = s.Xx;
      n.d(t, { z: () => c });
    },
    48671(e, t, n) {
      var a = n(90561),
        i = n(87429);
      let r = (0, i.createContext)(null);
      function o(e) {
        let {
            children: t,
            referenceSelectionActive: n = !1,
            nodeDragging: o,
            snapshot: s,
            viewport: l,
            viewportMoving: d,
            viewportPanActive: c = !1,
            viewportPresentation: u,
          } = e,
          m = (0, i.useMemo)(
            () => ({
              referenceSelectionActive: n,
              nodeDragging: o,
              snapshot: s,
              viewport: l,
              viewportMoving: d,
              viewportPanActive: c,
              viewportPresentation: u,
            }),
            [n, o, s, l, d, c, u],
          );
        return (0, a.jsx)(r.Provider, { value: m, children: t });
      }
      function s() {
        return (0, i.useContext)(r);
      }
      n.d(t, { J: () => s, l: () => o });
    },
    88852(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(31327),
        o = n(172);
      let s = { pointerEvents: "none" };
      function l(e) {
        var t, n, l, d, c;
        let [u, m] = (0, i.useState)(null),
          v = (0, i.useRef)(null),
          p = (0, i.useRef)(e.onOpenChange);
        ((p.current = e.onOpenChange),
          (0, r.SX)(u, { contextId: "mediaFullscreen" }));
        let f = (0, i.useMemo)(
          () => ({
            getState: () => ({ available: !0 }),
            execute: () => (p.current(!1), { status: "executed" }),
            subscribe: () => () => void 0,
          }),
          [],
        );
        (0, r.PK)("canvas.fullscreen", f);
        let h = {
          "--canvas-media-aspect-ratio": String(
            Number.isFinite((c = e.aspectRatio)) && c > 0 ? c : 1,
          ),
        };
        return (0, a.jsx)(o.lGe, {
          open: e.open,
          onOpenChange: e.onOpenChange,
          children: (0, a.jsxs)(o.Cff, {
            "aria-describedby": e.descriptionId,
            className:
              "block h-screen w-screen max-h-none max-w-none rounded-canvas-video-fullscreen-shell border-0 bg-transparent text-dreamina-text-primary",
            "data-testid": e.dialogTestId,
            overlayClassName: "bg-canvas-video-fullscreen-backdrop",
            ref: m,
            style: s,
            theme: "dark",
            onCloseAutoFocus: e.onCloseAutoFocus,
            onOpenAutoFocus: (e) => {
              var t;
              (e.preventDefault(), null == (t = v.current) || t.focus());
            },
            children: [
              (0, a.jsx)(o.L33, { className: "sr-only", children: e.title }),
              (0, a.jsx)(o.rrK, {
                className: "sr-only",
                id: e.descriptionId,
                children: e.description,
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex h-full w-full py-canvas-video-fullscreen-block-inset pl-canvas-video-fullscreen-inline-inset pr-canvas-video-fullscreen-close-inset",
                "data-testid":
                  (null == (t = e.layoutTestIds) ? void 0 : t.layout) ??
                  "media-fullscreen-layout",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "flex min-w-canvas-video-fullscreen-shrinkable flex-1 items-center justify-center",
                    "data-testid":
                      (null == (n = e.layoutTestIds)
                        ? void 0
                        : n.mediaRegion) ?? "media-fullscreen-media-region",
                    children: (0, a.jsx)("div", {
                      className:
                        "pointer-events-auto relative aspect-[var(--canvas-media-aspect-ratio)] max-h-full max-w-full w-canvas-video-fullscreen-media overflow-hidden rounded-canvas-video-fullscreen-media",
                      "data-testid": e.mediaTestId,
                      style: h,
                      children: e.children,
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "flex h-full w-canvas-video-fullscreen-close-rail flex-none items-start pl-canvas-video-fullscreen-close-inset",
                    "data-testid":
                      (null == (l = e.layoutTestIds) ? void 0 : l.closeRail) ??
                      "media-fullscreen-close-rail",
                    children: (0, a.jsx)(o.HMX, {
                      asChild: !0,
                      children: (0, a.jsx)(o.$nd, {
                        "aria-label": e.closeLabel,
                        className:
                          "pointer-events-auto size-canvas-video-fullscreen-close min-w-canvas-video-fullscreen-close shrink-0 rounded-canvas-video-fullscreen-close bg-dreamina-component-float-bg-default p-canvas-video-fullscreen-close-padding text-dreamina-text-primary hover:bg-dreamina-component-float-bg-hover active:bg-dreamina-component-float-bg-pressed",
                        "data-testid":
                          (null == (d = e.layoutTestIds) ? void 0 : d.close) ??
                          "media-fullscreen-close",
                        ref: v,
                        size: "icon",
                        variant: "text",
                        children: (0, a.jsx)(o.USm, { size: 20 }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      n.d(t, { W: () => l });
    },
    7352(e, t, n) {
      var a = n(90561),
        i = n(24548),
        r = n(87429),
        o = n(66876),
        s = n(40627),
        l = n(40962),
        d = n(7386),
        c = n(93176);
      let u = [];
      function m(e) {
        let t = e.status === i.ao.running,
          n = (0, r.useMemo)(() => (t ? [e.resourceId] : u), [e.resourceId, t]),
          m = (0, s.xO)(n).generationQueueStates[0];
        if (t && m) {
          let t = (0, l.b)(m, { estimateLabel: o.AcJ, positionLabel: o.j9W });
          return (0, a.jsx)(d.T, {
            active: !1,
            announcement: t.message,
            cancelLabel: (0, o.cWO)(),
            estimate: t.estimate,
            logicalHeight: 135,
            logicalWidth: 240,
            position: t.position,
            resourceId: e.resourceId,
            testId: e.testId,
          });
        }
        return t
          ? (0, a.jsx)(c.De, {
              active: !1,
              announcement: e.generatingLabel,
              appearance: "progress",
              logicalHeight: 135,
              logicalWidth: 240,
              message: e.generatingLabel,
              selected: !1,
              showMessage: !1,
              testId: e.testId,
            })
          : (0, a.jsx)("div", {
              "aria-busy": "true",
              "aria-label": e.loadingLabel,
              className: `relative h-full w-full bg-dreamina-canvas-bg ${c.vE}`,
              "data-canvas-content-evidence": "pending",
              "data-canvas-content-state": "unresolved",
              "data-testid": e.testId,
              role: "img",
            });
      }
      n.d(t, { z: () => m });
    },
    39408(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(66876),
        o = n(172),
        s = n(60794),
        l = n(7379),
        d = n(37350);
      let c = (0, i.memo)(function (e) {
        var t;
        let n = e.surfaceClassName ?? l.S1;
        return (0, a.jsxs)("fieldset", {
          "aria-label": e.description,
          className: `${n} ${l.Ux}`,
          "data-state": "error",
          "data-testid": e.testId,
          id: e.descriptionId,
          children: [
            (0, a.jsx)("span", {
              "aria-hidden": "true",
              className: l._R,
              children: (0, a.jsx)(o.mo0, { size: 20 }),
            }),
            (0, a.jsx)("p", {
              elementtiming: "canvas-initial-content",
              "data-canvas-content-evidence": "element",
              "data-canvas-content-state": "business_error",
              className: l.ER,
              children: e.message,
            }),
            (t = e).action
              ? (0, a.jsx)(u, { action: t.action, selected: t.selected })
              : null,
            (0, a.jsx)("span", {
              "aria-label": e.selected && e.announce ? e.announcement : void 0,
              className: "sr-only",
              role: e.selected && e.announce ? "alert" : void 0,
              children: e.message,
            }),
          ],
        });
      });
      function u(e) {
        let { action: t, selected: n } = e,
          { writeChromeVisible: i } = (0, s.A1)(),
          c = (0, d.P)();
        if (t.requiresWriteChrome && !i) return null;
        let u = void 0 !== t.resourceId && c.pendingResourceId === t.resourceId,
          m = void 0 !== t.resourceId && c.pending;
        return (0, a.jsxs)(o.$nd, {
          "aria-label": t.label,
          busy: u || void 0,
          className: `relative z-canvas-media-result-failure-action ${l.Nu}`,
          disabledReason: m ? (0, r.COb)() : void 0,
          tabIndex: n ? void 0 : -1,
          type: "button",
          variant: "text",
          onClick: () => {
            m || t.onInvoke();
          },
          onPointerDown: m ? (e) => e.stopPropagation() : void 0,
          children: [
            u
              ? (0, a.jsx)(o.mPE, {
                  "aria-hidden": !0,
                  className: "animate-spin",
                  size: 16,
                })
              : null,
            u ? (0, r.COb)() : t.text,
          ],
        });
      }
      n.d(t, {}, { S: c });
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
            { onCancel: u, resourceId: m } = e,
            v = (0, i.useCallback)(() => (null == u ? void 0 : u(m)), [u, m]);
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
                    onCancel: e.onCancel ? v : void 0,
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
    77730(e, t, n) {
      var a = n(87429),
        i = n(66876),
        r = n(96783),
        o = n(39243),
        s = n(93998),
        l = n(30531);
      let d = () => () => void 0,
        c = () => "unavailable";
      function u(e, t, n, u) {
        var m, v;
        let p =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : "toast",
          f = arguments.length > 5 ? arguments[5] : void 0,
          h = (0, s.FY)(),
          g = (0, o.QQ)(),
          b = null == (m = h.featuresApi) ? void 0 : m.canvas,
          x =
            null == b || null == (v = b.actions)
              ? void 0
              : v.placeHistoryResource,
          y = (0, a.useCallback)(() => {
            if (!x) return "unavailable";
            let e = x.getState();
            return e.available ? "available" : e.reason;
          }, [x]),
          w = (0, a.useSyncExternalStore)(
            n ? ((null == b ? void 0 : b.subscribeEditAvailability) ?? d) : d,
            n ? y : c,
            n ? y : c,
          ),
          k = (0, a.useCallback)(
            (n) => {
              var a, o;
              let s = null == (a = h.featuresApi) ? void 0 : a.canvas,
                d =
                  null == s || null == (o = s.actions)
                    ? void 0
                    : o.placeHistoryResource;
              if (!d) return Promise.resolve(!1);
              let c = f
                ? { kind: "historyViewCopy", sourceNodeId: t, batch: f }
                : { kind: "expandedResultCopy", sourceNodeId: t };
              return d
                .execute(
                  { destination: c, mediaType: e, resourceId: n },
                  "user",
                )
                .then((e) =>
                  e.ok
                    ? ((!f || f.active) && (null == u || u(e.value.objectId)),
                      "toast" === p &&
                        (0, l.N)(g, {
                          durationMs: 3e3,
                          message: (0, i.zA_)(),
                          status: "success",
                        }),
                      !0)
                    : ((0, l.N)(g, {
                        durationMs: 6e3,
                        message: (0, r._y)(),
                        status: "warning",
                      }),
                      !1),
                )
                .catch(
                  () => (
                    (0, l.N)(g, {
                      durationMs: 6e3,
                      message: (0, r._y)(),
                      status: "warning",
                    }),
                    !1
                  ),
                );
            },
            [f, h, p, e, u, g, t],
          );
        return (0, a.useMemo)(
          () =>
            n && x
              ? "available" === w
                ? { onCopyResource: k }
                : {
                    disabledReason:
                      "permissionDenied" === w ? (0, i.PFW)() : (0, i.jyb)(),
                    onCopyResource: k,
                  }
              : {},
          [n, x, w, k],
        );
      }
      n.d(t, { U: () => u });
    },
    5312(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(66876),
        o = n(39243),
        s = n(99055),
        l = n(64315),
        d = n(75775),
        c = n(27056),
        u = n(75342);
      let m = (0, i.memo)(function (e) {
        let t = null;
        e.timelineRenderSession
          ? (t = (0, a.jsx)(g, {
              fullscreenTimelineId: e.fullscreenTimelineId,
              onViewCanvasOutput: e.onViewCanvasOutput,
              session: e.timelineRenderSession,
            }))
          : e.timelineExportSession &&
            (t = (0, a.jsx)(b, {
              fullscreenTimelineId: e.fullscreenTimelineId,
              session: e.timelineExportSession,
            }));
        let n = null;
        e.materialExportSession &&
          (n = (0, a.jsx)(v, {
            fullscreenTimelineId: e.fullscreenTimelineId,
            session: e.materialExportSession,
          }));
        let i = null;
        e.editableProjectDownloadSession &&
          (i = (0, a.jsx)(f, {
            fullscreenTimelineId: e.fullscreenTimelineId,
            session: e.editableProjectDownloadSession,
          }));
        let r = null;
        return (
          e.jianyingDraftGenerateSession &&
            (r = (0, a.jsx)(h, {
              fullscreenTimelineId: e.fullscreenTimelineId,
              session: e.jianyingDraftGenerateSession,
            })),
          (0, a.jsxs)(a.Fragment, { children: [t, n, i, r] })
        );
      });
      function v(e) {
        var t, n;
        let { fullscreenTimelineId: o, session: s } = e;
        (0, i.useSyncExternalStore)(
          s.subscribe,
          s.getResourceDownloadRevision,
          s.getResourceDownloadRevision,
        );
        let d = (
          (null == (t = s.getTimelineFeedbacks) ? void 0 : t.call(s)) ?? []
        )
          .filter((e) => e.input.timelineId !== o)
          .map((e) => {
            var t, n;
            let a, i;
            return (
              (t = s),
              "active" === (n = e).state &&
                (a = () => t.cancelTimeline(n.input)),
              (i = (0, r.rj)()),
              "failed" === n.state && (i = (0, r.mrN)()),
              {
                action: a,
                actionAltText: (0, r.GZo)(),
                actionLabel: (0, r.GZo)(),
                active: "active" === n.state,
                cancelling: !1,
                error: "failed" === n.state,
                id: `materials:${n.input.timelineId}`,
                text: i,
              }
            );
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(p, {
              session: s,
              tasks: (null == (n = s.getFeedbacks) ? void 0 : n.call(s)) ?? [],
            }),
            (0, a.jsx)(l.RM, { disablePortal: !1, statuses: d }),
          ],
        });
      }
      function p(e) {
        let { session: t, tasks: n } = e,
          a = (0, o.Yi)(),
          s = (0, i.useRef)(),
          l = (function (e, t) {
            let n,
              a = (0, i.useRef)(new Set()),
              [r, o] = (0, i.useState)(!1),
              s = t.filter((e) => "active" !== e.state),
              l = t.find((e) => "active" === e.state),
              d = s.find((e) => "failed" === e.state),
              c = void 0 !== l,
              u = (function (e, t) {
                let n = (0, i.useRef)(new Map()),
                  [, a] = (0, i.useState)(0);
                return (
                  (0, i.useEffect)(() => {
                    let t = new Set(
                      e
                        .filter((e) => "completed" === e.state)
                        .map((e) => e.taskId),
                    );
                    for (let [e, a] of n.current)
                      t.has(e) || (window.clearTimeout(a), n.current.delete(e));
                    for (let e of t)
                      n.current.has(e) ||
                        n.current.set(
                          e,
                          window.setTimeout(() => {
                            (n.current.set(e, void 0), a((e) => e + 1));
                          }, 500),
                        );
                  }, [e]),
                  (0, i.useEffect)(() => {
                    let e = n.current;
                    return () => {
                      for (let t of e.values()) window.clearTimeout(t);
                      e.clear();
                    };
                  }, []),
                  e.find(
                    (e) =>
                      "completed" === e.state &&
                      ((t.has(e.taskId) &&
                        "attachment" !== e.downloadDisposition) ||
                        (n.current.has(e.taskId) &&
                          void 0 === n.current.get(e.taskId))),
                  )
                );
              })(t, a.current);
            c ? r && (n = l) : (n = d ?? u);
            let m = null == l ? void 0 : l.taskId;
            return (
              (0, i.useEffect)(() => {
                if (!c) return void o(!1);
                o(!1);
                let t = window.setTimeout(() => {
                  var t;
                  let n =
                    (null == (t = e.getFeedbacks)
                      ? void 0
                      : t.call(e).filter((e) => "active" === e.state)) ?? [];
                  if (0 !== n.length) {
                    for (let e of n) a.current.add(e.taskId);
                    o(!0);
                  }
                }, 500);
                return () => window.clearTimeout(t);
              }, [c, e]),
              (0, i.useEffect)(() => {
                let e = new Set(t.map((e) => e.taskId));
                for (let t of a.current) e.has(t) || a.current.delete(t);
                r && m && a.current.add(m);
              }, [m, r, t]),
              n
            );
          })(t, n),
          d = (null == l ? void 0 : l.state) === "active" ? l.taskId : void 0,
          c = n
            .filter((e) => "active" !== e.state)
            .map((e) => e.taskId)
            .join("\0"),
          u = l
            ? (function (e, t) {
                let n,
                  a = (0, r.TCM)();
                if (
                  ("failed" === t.state && (a = (0, r.mrN)()),
                  "active" === t.state)
                ) {
                  n = () => e.cancel(t.taskId);
                  let { phase: i, progress: o } = t.snapshot;
                  a =
                    "preparing" === i
                      ? (0, r.GSc)()
                      : "packaging" === i
                        ? (0, r.rj)()
                        : "finalizing" === i
                          ? (0, r.$go)(
                              null == o ? void 0 : o.completedItems,
                              null == o ? void 0 : o.totalItems,
                            )
                          : o
                            ? (0, r.tUe)(o.completedItems, o.totalItems)
                            : (0, r.rkd)();
                }
                return {
                  action: n,
                  actionAltText: (0, r.GZo)(),
                  actionLabel: (0, r.GZo)(),
                  active: "active" === t.state,
                  cancelling: !1,
                  error: "failed" === t.state,
                  id: `materials:${t.taskId}`,
                  onDismiss:
                    "active" === t.state
                      ? void 0
                      : () => {
                          var n;
                          return null == (n = e.dismissFeedback)
                            ? void 0
                            : n.call(e, t.taskId);
                        },
                  text: a,
                };
              })(t, l).text
            : void 0,
          m =
            (null == l ? void 0 : l.state) === "failed" ? "warning" : "success";
        return (
          (0, i.useEffect)(() => {
            let e, n;
            if (!a || !u) {
              var i;
              (null == (i = s.current) || i.call(s), (s.current = void 0));
              return;
            }
            let o = c ? c.split("\0") : [];
            (d &&
              (e = {
                altText: (0, r.GZo)(),
                label: (0, r.GZo)(),
                onSelect: () => t.cancel(d),
              }),
              d ||
                (n = () => {
                  var e;
                  for (let n of o)
                    null == (e = t.dismissFeedback) || e.call(t, n);
                }),
              (s.current = a({
                action: e,
                announcement: "warning" === m ? "assertive" : "polite",
                dismissible: !d,
                durationMs: d ? null : void 0,
                id: "canvas:material-export",
                onDismiss: n,
                status: d ? "loading" : m,
                title: u,
              })));
          }, [d, a, t, m, c, u]),
          (0, i.useEffect)(
            () => () => {
              var e;
              (null == (e = s.current) || e.call(s), (s.current = void 0));
            },
            [],
          ),
          null
        );
      }
      function f(e) {
        let { fullscreenTimelineId: t, session: n } = e;
        (0, i.useSyncExternalStore)(n.subscribe, n.getRevision, n.getRevision);
        let r = n.getSnapshot(),
          o = n.getCurrentTimelineId(),
          s = (0, i.useCallback)(() => {
            o && n.cancel(o);
          }, [n, o]);
        return "idle" === r.phase || o === t
          ? null
          : (0, a.jsx)(l.RM, {
              disablePortal: !1,
              statuses: [
                {
                  action: "running" === r.phase ? s : void 0,
                  active: "running" === r.phase,
                  cancelling: !1,
                  error: "failed" === r.phase,
                  id: "editable-project",
                  text: (0, d.B)(r),
                },
              ],
            });
      }
      function h(e) {
        let { fullscreenTimelineId: t, session: n } = e;
        (0, i.useSyncExternalStore)(n.subscribe, n.getRevision, n.getRevision);
        let r = n.getSnapshot(),
          o = n.getCurrentTimelineId(),
          d = (0, i.useCallback)(() => {
            o && n.cancel(o);
          }, [n, o]);
        return "idle" === r.phase || o === t
          ? null
          : (0, a.jsx)(l.RM, {
              disablePortal: !1,
              statuses: [
                {
                  action: "running" === r.phase ? d : void 0,
                  active: "running" === r.phase,
                  cancelling: !1,
                  error: "failed" === r.phase,
                  id: "jianying",
                  text: (0, s.Qe)(r),
                },
              ],
            });
      }
      function g(e) {
        var t;
        let { fullscreenTimelineId: n, onViewCanvasOutput: s, session: d } = e;
        (0, i.useSyncExternalStore)(d.subscribe, d.getRevision, d.getRevision);
        let c = d.getSnapshot(),
          m = d.getCurrentTimelineId(),
          v = (0, i.useCallback)(() => {
            m && d.cancel(m);
          }, [d, m]),
          p =
            ((t = c),
            {
              action: "running" === c.phase ? v : void 0,
              actionLabel: (0, u.i)(),
              actionAltText: (0, u.i)(),
              active: "running" === t.phase,
              cancelling:
                "running" === t.phase &&
                "cancelling" === t.stage &&
                !t.cancelFailed,
              error:
                "failed" === t.phase ||
                ("succeeded" === t.phase && !0 === t.downloadFailed),
              id: "download",
              text: (0, u.Kx)(t),
            }),
          f = (0, o.Yi)(),
          h = "running" === c.phase && "canvas" === c.destination,
          g = h ? c.outputNodeId : void 0,
          b = (0, i.useCallback)(() => {
            let e = d.getSnapshot();
            "running" === e.phase &&
              "canvas" === e.destination &&
              e.outputNodeId &&
              d.getCurrentTimelineId() === n &&
              (null == s || s(e.outputNodeId));
          }, [n, s, d]);
        return ((0, i.useEffect)(() => {
          if (f && h && m === n && s)
            return f({
              id: "canvas:timeline-export-progress",
              status: "loading",
              title: (0, r._i9)(),
              durationMs: null,
              dismissible: !1,
              action: {
                label: (0, r.OJy)(),
                altText: (0, r.OJy)(),
                disabled: !g,
                onSelect: b,
              },
            });
        }, [h, n, s, g, f, m, b]),
        (0, i.useEffect)(() => {
          var e;
          !f ||
            "succeeded" !== c.phase ||
            "canvas" !== c.destination ||
            ((null == (e = d.claimCanvasSuccessNotification)
              ? void 0
              : e.call(d, c)) &&
              f({
                id: "canvas:timeline-export-success",
                status: "success",
                title: (0, u.Kx)(c),
              }));
        }, [f, d, c]),
        h ||
          ("succeeded" === c.phase && "canvas" === c.destination) ||
          ("idle" !== c.phase && m === n))
          ? null
          : (0, a.jsx)(l.RM, { disablePortal: !1, statuses: [p] });
      }
      function b(e) {
        var t;
        let { fullscreenTimelineId: n, session: r } = e;
        (0, i.useSyncExternalStore)(r.subscribe, r.getRevision, r.getRevision);
        let o = r.getCurrentSnapshot(),
          s = {
            action: (function (e, t) {
              let n = "idle" === t.phase ? null : t.timelineId,
                a = (0, i.useCallback)(() => {
                  n && e.cancel(n);
                }, [e, n]);
              if ("preparing" === t.phase || "exporting" === t.phase) return a;
            })(r, o),
            active:
              "preparing" === (t = o).phase ||
              "exporting" === t.phase ||
              "cancelling" === t.phase,
            cancelling: "cancelling" === t.phase,
            error: "failed" === t.phase,
            id: "download",
            text: (0, c.oJ)(t, !1).text,
          };
        return "idle" !== o.phase && o.timelineId === n
          ? null
          : (0, a.jsx)(l.RM, { disablePortal: !1, statuses: [s] });
      }
      n.d(t, {}, { v: m });
    },
    19952(e, t, n) {
      var a = n(90561),
        i = n(24548),
        r = n(11456);
      function o(e) {
        let { kind: t, placement: n = "overlay" } = e,
          i = s(t);
        return i
          ? (0, a.jsx)("span", {
              className: `pointer-events-none z-canvas-media-result-selection-surface flex h-canvas-video-sample-promotion-badge items-center px-canvas-video-sample-promotion-badge-inline py-canvas-video-sample-promotion-badge-block font-dreamina-cn font-dreamina-medium text-dreamina-cn-14 leading-canvas-video-sample-promotion-mode-label text-dreamina-on-media-text-primary [text-shadow:0_1px_1px_rgba(0,0,0,0.24)] ${"inline" === n ? "relative shrink-0" : "absolute left-canvas-media-history-view-control-inset top-canvas-media-history-view-control-inset"}`,
              children: i,
            })
          : null;
      }
      function s(e) {
        return e === i.y1.sample
          ? (0, r.rf)()
          : e === i.y1.finalFromSample
            ? (0, r.lh)()
            : void 0;
      }
      n.d(t, { B: () => s, b: () => o });
    },
    55419(e, t, n) {
      var a = n(90561),
        i = n(87429),
        r = n(93998),
        o = n(40627),
        s = n(66747),
        l = n(73931),
        d = n(7402);
      let c = (0, i.createContext)(void 0),
        u = [];
      function m(e) {
        let {
            children: t,
            nodeId: n,
            upgradeEnabled: l,
            enabled: d,
            transparentCoverSourceUrl: u,
          } = e,
          m = (0, r.FY)().imagePreviews,
          v = (0, o.jF)(m, u, "video-frame", d && l),
          p = (0, i.useMemo)(
            () => ({
              nodeId: n,
              upgradeEnabled: l,
              transparentCoverSourceUrl: u,
              transparentCover: v,
            }),
            [n, l, u, v],
          );
        return (0, a.jsx)(c.Provider, {
          value: p,
          children: (0, a.jsx)(s.EY, {
            clearDisplayed: !d,
            enabled: d,
            children: t,
          }),
        });
      }
      function v(e) {
        let t = (0, i.useContext)(c),
          n = (0, a.jsx)(p, { ...e });
        return e.primary && t
          ? n
          : (0, a.jsx)("div", {
              className: "relative h-full w-full",
              children: (0, a.jsx)(s.EY, {
                clearDisplayed: !1,
                enabled: !0,
                children: n,
              }),
            });
      }
      function p(e) {
        let t = (0, i.useContext)(c),
          { resource: n } = e,
          d = (0, r.FY)().imagePreviews,
          m = n.transparentCoverSourceUrl,
          v =
            void 0 !== m &&
            m === (null == t ? void 0 : t.transparentCoverSourceUrl)
              ? t.transparentCover
              : void 0,
          p = (0, o.jF)(
            d,
            v ? void 0 : m,
            "video-frame",
            (null == t ? void 0 : t.upgradeEnabled) ?? !0,
          ),
          h = v ?? p,
          g = (0, l.W)(null == t ? void 0 : t.nodeId, n.resourceId, u),
          b = m ? h.resolvedUrl : n.posterUrl,
          x = m ? void 0 : n.posterResolutionSource,
          y = (0, i.useMemo)(
            () => ({ cover_url: b, cover_resolution_source: x }),
            [b, x],
          ),
          w = (0, o.Km)(y),
          k = void 0 !== m && "failed" !== h.status && void 0 === h.resolvedUrl;
        (0, s._M)(k || "selected" === w.status);
        let S = () => {
          (g.clearFailedUrls(),
            m && d.recoverFromDisplayedFailure(m, "decode", "video-frame"));
        };
        return k
          ? e.children
          : "selected" !== w.status
            ? e.unavailable(S)
            : (0, a.jsx)(f, {
                ...e,
                unavailable: () => e.unavailable(S),
                fallback: w,
                failures: g,
                urls: y,
              });
      }
      function f(e) {
        let { fallback: t, failures: n, urls: a, ...r } = e,
          s = (0, i.useContext)(c),
          l = (0, i.useMemo)(
            () =>
              void 0 === r.targetBound
                ? [{ url: t.url, source: t.source }]
                : (0, o.Ev)(a, r.targetBound),
            [t.source, t.url, r.targetBound, a],
          ),
          u = (0, i.useMemo)(
            () => ({
              failedUrls: n.failedUrls,
              onUrlFailure: (e) =>
                n.onUrlFailure({
                  ...e,
                  renderMode: r.renderMode ?? "full",
                  surface: r.primary ? "primary" : "batch",
                }),
            }),
            [n, r.primary, r.renderMode],
          ),
          m = (0, d.b)({
            renderMode: r.renderMode,
            presentation: {
              alt: r.alt,
              fit: r.fit ?? "cover",
              selected: r.selected ?? !1,
              testId: r.testId,
            },
            candidates: l,
            fallbackSelectionSource: t.source,
            fallbackUrl: t.url,
            previewFailures: u,
            previewUpgradeEnabled:
              ((null == s ? void 0 : s.upgradeEnabled) ?? !0) &&
              (r.renderMode ?? "full") === "full",
            resourceId: r.resource.resourceId,
          });
        return m.previewFailed && !m.hasDisplayedPreview
          ? r.unavailable(n.clearFailedUrls)
          : r.children;
      }
      n.d(t, { D: () => v, G: () => m });
    },
    74198(e, t, n) {
      var a = n(90561),
        i = n(15882),
        r = n(87429),
        o = n(82530),
        s = n(25592);
      function l(e) {
        let { children: t } = e,
          n = (0, i.Pj)(d),
          l = (0, r.useMemo)(
            () =>
              (null == n ? void 0 : n.querySelector(".react-flow__renderer")) ??
              null,
            [n],
          );
        return l
          ? (0, o.createPortal)(
              (0, a.jsx)("div", {
                className: "pointer-events-none absolute inset-0",
                "data-testid": "canvas-renderer-overlay-host",
                style: { zIndex: s.Xx },
                children: t,
              }),
              l,
            )
          : null;
      }
      function d(e) {
        return e.domNode;
      }
      n.d(t, { a: () => l });
    },
    15817(e, t, n) {
      var a = n(78425),
        i = n(22826);
      function r() {
        return a.Ay.t(
          "web_audio_gen_seed_audio_1_5_cost_tooltips",
          {},
          "Billed by the final generated duration. Credit usage is approximately 10\u2013200 and varies with content complexity.",
        );
      }
      function o(e) {
        return (0, i.mX)(e);
      }
      function s(e) {
        return String(e);
      }
      n.d(t, { Lh: () => o, YP: () => s, gd: () => r });
    },
    89899(e, t, n) {
      var a = n(78425);
      let i = {
        editor: "Image annotation editor",
        toolbar: "Annotation tools",
        properties: "Shape properties",
        rectangle: ["seedance_25_edit_oblong", "Rectangle"],
        ellipse: ["octo_canvas_annotation_ellipse", "Ellipse"],
        arrow: ["web_inpaint_add_arrow", "Arrow"],
        line: ["web_inpaint_arrow_style_line", "Line"],
        brush: ["web_image_edit_tool_brush", "Brush"],
        text: ["web_inpaint_add_text", "Text"],
        marker: ["octo_canvas_annotation_marker", "Numbered marker"],
        eraser: ["web_image_edit_tool_eraser", "Eraser"],
        fill: ["octo_canvas_annotation_fill", "Fill"],
        stroke: ["octo_canvas_annotation_stroke", "Stroke"],
        style: ["octo_canvas_annotation_stroke_style", "Stroke style"],
        colorGroup: "Color",
        none: "None",
        solid: "Solid",
        dashed: "Dashed",
        dotted: "Dotted",
        thin: "Thin",
        medium: "Medium",
        thick: "Thick",
        width: "Stroke width",
        size: "Size",
        undo: "Undo",
        redo: "Redo",
        remove: "Delete label",
        empty: "Add an annotation first",
        noUndo: "Nothing to undo",
        noRedo: "Nothing to redo",
        styleDisabled: [
          "octo_canvas_annotation_stroke_style_disabled_reason",
          "Select a stroke color",
        ],
        instructions:
          "Drag to draw. Select an annotation to move or resize it. Double-click text to edit.",
        red: "Red",
        yellow: "Yellow",
        green: "Green",
        blue: "Blue",
        black: "Black",
        white: "White",
        exitConfirmation: [
          "octo_click_again_exit_edit_toast",
          "Click again to exit editing",
        ],
        failed: [
          "octo_canvas_annotation_failed",
          "Could not create the annotated image. Try again.",
        ],
      };
      function r(e) {
        let t = i[e];
        if ("string" == typeof t) return t;
        let [n, r] = t;
        return a.Ay.t(n, {}, r);
      }
      n.d(t, { Y: () => r });
    },
    93812(e, t, n) {
      var a = n(78425),
        i = n(96783);
      function r() {
        return a.Ay.t(
          "octo_image_composition_toolbar_label",
          {},
          "Composition settings",
        );
      }
      function o() {
        return a.Ay.t(
          "octo_image_composition_flip_horizontal_label",
          {},
          "Flip horizontally",
        );
      }
      function s() {
        return a.Ay.t(
          "octo_image_composition_flip_vertical_label",
          {},
          "Flip vertically",
        );
      }
      function l() {
        return a.Ay.t(
          "octo_image_composition_flip_horizontal_tooltip_label",
          {},
          "Flip horizontal",
        );
      }
      function d() {
        return a.Ay.t(
          "octo_image_composition_flip_vertical_tooltip_label",
          {},
          "Flip Vertical",
        );
      }
      function c() {
        return (0, i.kZ)();
      }
      function u() {
        return a.Ay.t(
          "octo_image_composition_editor_label",
          {},
          "Image composition editor",
        );
      }
      function m() {
        return (0, i.KE)();
      }
      function v() {
        return a.Ay.t(
          "octo_image_composition_move_area_label",
          {},
          "Move crop area",
        );
      }
      function p(e) {
        let t = (function (e) {
          switch (e) {
            case "topLeft":
              return a.Ay.t(
                "octo_image_composition_handle_top_left",
                {},
                "Top left",
              );
            case "top":
              return a.Ay.t("octo_image_composition_handle_top", {}, "Top");
            case "topRight":
              return a.Ay.t(
                "octo_image_composition_handle_top_right",
                {},
                "Top right",
              );
            case "right":
              return a.Ay.t("octo_image_composition_handle_right", {}, "Right");
            case "bottomRight":
              return a.Ay.t(
                "octo_image_composition_handle_bottom_right",
                {},
                "Bottom right",
              );
            case "bottom":
              return a.Ay.t(
                "octo_image_composition_handle_bottom",
                {},
                "Bottom",
              );
            case "bottomLeft":
              return a.Ay.t(
                "octo_image_composition_handle_bottom_left",
                {},
                "Bottom left",
              );
            case "left":
              return a.Ay.t("octo_image_composition_handle_left", {}, "Left");
          }
        })(e);
        return a.Ay.t(
          "octo_image_composition_crop_handle_label",
          { handle: t },
          "{handle} crop handle",
        );
      }
      function f(e, t) {
        return "horizontal" === t
          ? a.Ay.t(
              "octo_image_composition_crop_horizontal_axis_label",
              { control: e },
              "{control}, horizontal position",
            )
          : a.Ay.t(
              "octo_image_composition_crop_vertical_axis_label",
              { control: e },
              "{control}, vertical position",
            );
      }
      function h(e, t, n, i) {
        return a.Ay.t(
          "octo_image_composition_crop_value_text",
          { x: e, y: t, width: n, height: i },
          "Crop at {x}% horizontal, {y}% vertical; {width}% wide and {height}% high",
        );
      }
      function g() {
        return a.Ay.t(
          "octo_image_composition_crop_boundary_message",
          {},
          "The crop has reached the image boundary.",
        );
      }
      function b() {
        return a.Ay.t(
          "octo_image_composition_submitting_reason",
          {},
          "Composition is being confirmed.",
        );
      }
      function x() {
        return a.Ay.t(
          "octo_image_composition_submit_unavailable_reason",
          {},
          "Wait for the source preview to load.",
        );
      }
      function y(e) {
        return w(e) ?? (0, i._y)();
      }
      function w(e) {
        switch (e) {
          case "permissionDenied":
            return (0, i.sj)();
          case "notEditingReady":
            return (0, i.IV)();
          case "intentInvalid":
            return a.Ay.t(
              "octo_image_composition_failure_intent_invalid",
              {},
              "The composition settings are invalid.",
            );
          case "sessionUnavailable":
          case "sourceUnavailable":
          case "sourceChanged":
            return (0, i.KE)();
          case "operationPending":
            return a.Ay.t(
              "octo_image_composition_failure_operation_pending",
              {},
              "Another composition is still in progress.",
            );
          case "memoryLimitExceeded":
          case "outputTooLarge":
            return a.Ay.t(
              "octo_image_composition_failure_image_too_large",
              {},
              "This image is too large to process. Use a smaller image and try again.",
            );
          default:
            return;
        }
      }
      n.d(t, {
        $F: () => m,
        Cc: () => l,
        EO: () => v,
        Kz: () => c,
        Ln: () => u,
        NZ: () => r,
        OC: () => y,
        Qv: () => h,
        Sj: () => d,
        _D: () => x,
        f6: () => f,
        gB: () => b,
        lT: () => g,
        pR: () => o,
        qB: () => p,
        tI: () => w,
        xC: () => s,
      });
    },
  },
]);
