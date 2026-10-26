"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [9026],
  {
    3347(e, t, r) {
      var a = r(87429),
        n = r(96783),
        o = r(50795);
      function i(e, t) {
        let r = null == e ? void 0 : e.canvas.storyboardImages,
          i = (0, a.useCallback)(
            (a) => {
              let n =
                  null == e ? void 0 : e.canvas.subscribeEditAvailability(a),
                o = null == r ? void 0 : r.subscribePendingUploads(t, a);
              return () => {
                (null == n || n(), null == o || o());
              };
            },
            [e, t, r],
          ),
          l = (0, a.useCallback)(() => {
            var e;
            let a = null == r ? void 0 : r.getState(t);
            return a
              ? a.available
                ? void 0
                : (a.message ??
                  ("permissionDenied" === (e = a.reason)
                    ? (0, n.yz)()
                    : "importPending" === e
                      ? (0, o.gs)()
                      : (0, n.IV)()))
              : (0, n.IV)();
          }, [t, r]);
        return (0, a.useSyncExternalStore)(i, l, l);
      }
      r.d(t, { l: () => i });
    },
    91133(e, t, r) {
      r.d(t, { GroupFlowNode: () => eu });
      var a = r(90561),
        n = r(70568),
        o = r(87429),
        i = r(66876),
        l = r(50795),
        s = r(8870),
        d = r(172),
        u = r(64607),
        c = r(8141),
        g = r(83399),
        b = r(73338),
        p = r(93998),
        v = r(60794),
        f = r(40885),
        h = r(38692),
        m = r(91229),
        y = r(5889),
        x = r(54020),
        w = r(27415);
      function k(e) {
        let { pointerChromeEnabled: t, visualState: r } = e,
          n =
            "resting" === r
              ? `text-dreamina-stroke-primary ${t ? "group-hover:text-dreamina-text-disabled" : ""}`
              : "text-dreamina-text-tertiary";
        return (0, a.jsx)("span", {
          "aria-hidden": "true",
          className: `pointer-events-none absolute inset-0 shadow-canvas-group-frame ${n}`,
          "data-testid": "group-frame",
        });
      }
      var C = r(42426),
        I = r(15882),
        S = r(15047);
      let j = "none",
        R = {
          borderRadius: 0,
          boxShadow: j,
          height: "100%",
          padding: 0,
          width: "100%",
        },
        P = {
          borderRadius: 0,
          boxShadow: j,
          height: 24,
          padding: 0,
          width: 24,
        },
        N = { borderRadius: 9999, height: 10, width: 10 },
        z = () => () => void 0,
        A = [
          "top-left",
          "top",
          "top-right",
          "right",
          "bottom-right",
          "bottom",
          "bottom-left",
          "left",
        ],
        D = {
          "top-left": "cursor-nwse-resize",
          top: "cursor-ns-resize",
          "top-right": "cursor-nesw-resize",
          right: "cursor-ew-resize",
          "bottom-right": "cursor-nwse-resize",
          bottom: "cursor-ns-resize",
          "bottom-left": "cursor-nesw-resize",
          left: "cursor-ew-resize",
        };
      function E(e) {
        var t, r, n;
        let i = (0, p.FY)(),
          l = (0, I.JY)(e.nodeId),
          s = (0, I.PF)(),
          d = null == (t = i.featuresApi) ? void 0 : t.canvas.actions,
          u = null == d ? void 0 : d.resizeGroup,
          c = (0, o.useSyncExternalStore)(
            (null == d ? void 0 : d.subscribe) ?? z,
            () => (null == u ? void 0 : u.getState(e.nodeId).available) ?? !1,
            () => (null == u ? void 0 : u.getState(e.nodeId).available) ?? !1,
          ),
          g = { height: e.height, width: e.width, x: e.x, y: e.y },
          b = (function (e) {
            var t;
            if (!e) return;
            let r = {
              height: e.measured.height ?? 0,
              width: e.measured.width ?? 0,
              x: e.internals.positionAbsolute.x,
              y: e.internals.positionAbsolute.y,
            };
            return Number.isFinite((t = r).x) &&
              Number.isFinite(t.y) &&
              Number.isFinite(t.width) &&
              Number.isFinite(t.height) &&
              t.width > 0 &&
              t.height > 0
              ? r
              : void 0;
          })(l),
          v =
            void 0 !== b &&
            ((r = b),
            (n = g),
            1 >= Math.abs(r.x - n.x) &&
              1 >= Math.abs(r.y - n.y) &&
              1 >= Math.abs(r.width - n.width) &&
              1 >= Math.abs(r.height - n.height));
        (0, o.useLayoutEffect)(() => {
          e.active && !v && s(e.nodeId);
        }, [g.height, g.width, g.x, g.y, v, e.active, e.nodeId, s]);
        let f = (function (e, t, r) {
          let [a, n] = (0, o.useState)(() => ({
              frame: t,
              nodeId: e,
              ready: r,
            })),
            i = (a.nodeId === e && K(a.frame, t) && a.ready) || r,
            { height: l, width: s, x: d, y: u } = t;
          return (
            (0, o.useLayoutEffect)(() => {
              let t = { height: l, width: s, x: d, y: u };
              n((a) =>
                a.nodeId === e && K(a.frame, t)
                  ? !a.ready && r
                    ? { ...a, ready: !0 }
                    : a
                  : { frame: t, nodeId: e, ready: r },
              );
            }, [l, e, r, s, d, u]),
            i
          );
        })(e.nodeId, g, v);
        return e.active && c && u && f
          ? (0, a.jsx)(F, { ...e, action: u })
          : null;
      }
      function F(e) {
        let { action: t, ...r } = e,
          n = (function (e, t) {
            var r, a;
            let n,
              l,
              s,
              d,
              [u, c] = (0, o.useState)(),
              g = { height: (r = e).height, width: r.width, x: r.x, y: r.y },
              b = (0, o.useCallback)(
                function (r) {
                  let a =
                      !(arguments.length > 1) ||
                      void 0 === arguments[1] ||
                      arguments[1],
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "user";
                  ("user" === n && c(void 0), t.preview(e.nodeId, r, a, n));
                },
                [t, e.nodeId],
              ),
              p = (0, o.useCallback)(
                async (r, a) => {
                  var n, o;
                  let l,
                    s = await t.execute(e.nodeId, r, "user");
                  (t.clearPreview(),
                    s.ok ||
                      (b(a, !1, "system"),
                      c(
                        (l =
                          null == (o = (n = s).message) ? void 0 : o.trim()) ||
                          ("permissionDenied" === n.reason
                            ? (0, i.zVe)()
                            : "notEditingReady" === n.reason
                              ? (0, i.lp6)()
                              : "groupUnavailable" === n.reason
                                ? (0, i.HRc)()
                                : (0, i._uf)()),
                      )));
                },
                [t, b, e.nodeId],
              ),
              v =
                ((a = e.onResizingChange),
                (n = (0, o.useRef)(null)),
                (l = (0, o.useRef)({})),
                (s = (0, o.useCallback)(
                  (e, t) => (
                    (l.current[e] = t),
                    () => {
                      l.current[e] === t && delete l.current[e];
                    }
                  ),
                  [],
                )),
                (d = (0, o.useCallback)(
                  (e) => {
                    var t, r;
                    let o = n.current;
                    o !== e &&
                      (o && (null == (t = (r = l.current)[o]) || t.call(r)),
                      (n.current = e),
                      o || a(!0));
                  },
                  [a],
                )),
                {
                  finish: (0, o.useCallback)(
                    (e, t) => {
                      if (n.current === e)
                        try {
                          t();
                        } finally {
                          ((n.current = null), a(!1));
                        }
                    },
                    [a],
                  ),
                  registerOwner: s,
                  start: d,
                }),
              f = (function (e, t, r, a) {
                let { finish: n, registerOwner: i, start: l } = a,
                  s = (0, o.useRef)(null),
                  d = (0, o.useRef)(null),
                  u = (0, o.useCallback)(() => {
                    let e = { preview: d.current, start: s.current };
                    return ((s.current = null), (d.current = null), e);
                  }, []),
                  c = (0, o.useCallback)(
                    (e) => {
                      let { start: r } = u();
                      r && t(r, !1, e);
                    },
                    [t, u],
                  );
                (0, o.useEffect)(
                  () => i("keyboard", () => c("system")),
                  [i, c],
                );
                let g = (0, o.useCallback)(() => {
                    s.current &&
                      n("keyboard", () => {
                        let { preview: e, start: t } = u();
                        e && t && r(e, t);
                      });
                  }, [u, r, n]),
                  b = (0, o.useCallback)(() => {
                    s.current && n("keyboard", () => c("user"));
                  }, [n, c]);
                (0, o.useEffect)(
                  () => () => {
                    s.current && n("keyboard", () => c("system"));
                  },
                  [n, c],
                );
                let p = (0, o.useCallback)(
                  (r, a) => {
                    var n, o, i, u;
                    let c, p, v, f, h, m, y, x, w;
                    if ("Escape" === r.key && s.current) {
                      (r.preventDefault(), r.stopPropagation(), b());
                      return;
                    }
                    if ("Enter" === r.key && s.current) {
                      (r.preventDefault(), r.stopPropagation(), g());
                      return;
                    }
                    if (r.altKey || r.ctrlKey || r.metaKey) return;
                    let k = d.current ?? e,
                      C =
                        ((n = k),
                        (o = a),
                        (i = r.key),
                        (u = r.shiftKey ? 10 : 1),
                        (c = n.x),
                        (p = n.y),
                        (v = n.x + n.width),
                        (f = n.y + n.height),
                        (h =
                          "left" === o ||
                          "top-left" === o ||
                          "bottom-left" === o),
                        (m =
                          "right" === o ||
                          "top-right" === o ||
                          "bottom-right" === o),
                        (y =
                          "top" === o || "top-left" === o || "top-right" === o),
                        (x =
                          "bottom" === o ||
                          "bottom-left" === o ||
                          "bottom-right" === o),
                        (w = !1),
                        (h && "ArrowLeft" === i
                          ? ((c -= u), (w = !0))
                          : h && "ArrowRight" === i
                            ? ((c += u), (w = !0))
                            : m && "ArrowLeft" === i
                              ? ((v -= u), (w = !0))
                              : m && "ArrowRight" === i
                                ? ((v += u), (w = !0))
                                : y && "ArrowUp" === i
                                  ? ((p -= u), (w = !0))
                                  : y && "ArrowDown" === i
                                    ? ((p += u), (w = !0))
                                    : x && "ArrowUp" === i
                                      ? ((f -= u), (w = !0))
                                      : x &&
                                        "ArrowDown" === i &&
                                        ((f += u), (w = !0)),
                        w)
                          ? (h && (c = Math.min(c, v - 1)),
                            y && (p = Math.min(p, f - 1)),
                            m && (v = Math.max(v, c + 1)),
                            x && (f = Math.max(f, p + 1)),
                            { height: f - p, width: v - c, x: c, y: p })
                          : null);
                    !C ||
                      (r.preventDefault(),
                      r.stopPropagation(),
                      K(k, C) ||
                        (s.current || ((s.current = e), l("keyboard")),
                        (d.current = C),
                        t(C)));
                  },
                  [t, b, e, g, l],
                );
                return { finishKeyboard: g, handleKeyboardResizeKeyDown: p };
              })(g, b, p, v),
              h = (function (e, t, r) {
                var a;
                let n,
                  i,
                  { finish: l, registerOwner: s, start: d } = r,
                  u = (0, o.useRef)(null),
                  { cancelPointerPreview: c, schedulePointerPreview: g } =
                    ((a = e),
                    (n = (0, o.useRef)(null)),
                    (i = (0, o.useRef)(null)),
                    {
                      cancelPointerPreview: (0, o.useCallback)(() => {
                        (null !== n.current &&
                          "function" == typeof window.cancelAnimationFrame &&
                          window.cancelAnimationFrame(n.current),
                          (n.current = null),
                          (i.current = null));
                      }, []),
                      schedulePointerPreview: (0, o.useCallback)(
                        (e) => {
                          if (((i.current = e), null === n.current)) {
                            if (
                              "function" != typeof window.requestAnimationFrame
                            ) {
                              ((i.current = null), a(e));
                              return;
                            }
                            n.current = window.requestAnimationFrame(() => {
                              n.current = null;
                              let e = i.current;
                              ((i.current = null), e && a(e));
                            });
                          }
                        },
                        [a],
                      ),
                    }),
                  b = (0, o.useCallback)(() => {
                    let t = u.current;
                    ((u.current = null), c(), t && e(t, !1, "system"));
                  }, [e, c]);
                (0, o.useEffect)(() => s("pointer", b), [s, b]);
                let p = (0, o.useCallback)(
                    (e, t) => {
                      (c(), (u.current = t));
                    },
                    [c],
                  ),
                  v = (0, o.useCallback)(
                    (e, t) => {
                      u.current && (d("pointer"), g(t));
                    },
                    [g, d],
                  ),
                  f = (0, o.useCallback)(
                    (e, r) => {
                      let a = u.current;
                      ((u.current = null),
                        c(),
                        a &&
                          l("pointer", () => {
                            t(r, a);
                          }));
                    },
                    [c, t, l],
                  );
                return (
                  (0, o.useEffect)(() => {
                    let t = () => {
                      let t = u.current;
                      ((u.current = null),
                        c(),
                        t &&
                          l("pointer", () => {
                            e(t, !1, "system");
                          }));
                    };
                    return (
                      window.addEventListener("pointercancel", t),
                      window.addEventListener("blur", t),
                      () => {
                        (window.removeEventListener("pointercancel", t),
                          window.removeEventListener("blur", t),
                          c());
                        let r = u.current;
                        ((u.current = null),
                          r &&
                            l("pointer", () => {
                              e(r, !1, "system");
                            }));
                      }
                    );
                  }, [e, c, l]),
                  {
                    handlePointerResize: v,
                    handlePointerResizeEnd: f,
                    handlePointerResizeStart: p,
                  }
                );
              })(b, p, v);
            return { failureMessage: u, ...f, ...h };
          })(r, t);
        return (0, a.jsxs)("div", {
          className: "pointer-events-none absolute inset-0",
          "data-group-resize-node-id": r.nodeId,
          "data-testid": "group-resize-overlay",
          children: [
            A.map((e) =>
              (0, a.jsx)(T, { nodeId: r.nodeId, position: e, session: n }, e),
            ),
            n.failureMessage
              ? (0, a.jsx)(d.W5n, {
                  className:
                    "pointer-events-none absolute left-1/2 top-full h-auto w-full -translate-x-1/2",
                  message: n.failureMessage,
                })
              : null,
          ],
        });
      }
      function T(e) {
        var t, r;
        let { nodeId: n, position: o, session: l } = e,
          s =
            "bottom" === (t = o) ||
            "left" === t ||
            "right" === t ||
            "top" === t,
          u =
            "left" === o || "right" === o
              ? "horizontal"
              : s
                ? "vertical"
                : void 0,
          c = `nodrag nopan border-0 bg-transparent hover:bg-transparent focus-visible:ring-1 focus-visible:ring-dreamina-stroke-secondary focus-visible:ring-offset-0 ${D[o]}`;
        return (
          s &&
            (c = `nodrag nopan h-full w-full border-0 bg-transparent focus-visible:ring-1 focus-visible:ring-dreamina-stroke-secondary focus-visible:ring-offset-0 ${D[o]}`),
          (0, a.jsx)(I.IE, {
            autoScale: !0,
            minHeight: 1,
            minWidth: 1,
            nodeId: n,
            position: o,
            resizeDirection: u,
            variant: s ? S.xN.Line : S.xN.Handle,
            className: "!pointer-events-auto !border-0 !bg-transparent",
            style:
              "top" === (r = o) || "bottom" === r
                ? { height: 10 }
                : "left" === r || "right" === r
                  ? { width: 10 }
                  : { height: 24, width: 24, zIndex: 1 },
            onResize: l.handlePointerResize,
            onResizeStart: l.handlePointerResizeStart,
            onResizeEnd: l.handlePointerResizeEnd,
            children: (0, a.jsx)(d.$nd, {
              "aria-label": (0, i.Sm7)(o),
              className: c,
              size: "icon",
              style: s ? R : P,
              variant: "text",
              onBlur: l.finishKeyboard,
              onClick: (e) => e.stopPropagation(),
              onKeyDown: (e) => l.handleKeyboardResizeKeyDown(e, o),
              children: s
                ? null
                : (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className:
                      "block border border-dreamina-text-primary bg-dreamina-bg-float",
                    style: N,
                  }),
            }),
          })
        );
      }
      function K(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      var $ = r(71394);
      let M = "none",
        L = {
          borderRadius: 0,
          boxShadow: M,
          height: 24,
          minWidth: 0,
          padding: 0,
        },
        B = {
          borderRadius: 6,
          boxShadow: M,
          height: 24,
          minWidth: 96,
          padding: "0 8px",
        },
        W = { minWidth: 0 },
        _ = { marginTop: 4, padding: "2px 8px" },
        Y = () => () => void 0;
      function G(e) {
        var t;
        let {
            nodeId: r,
            rightReservedWidth: n = 0,
            title: i,
            titleClassName: l,
          } = e,
          s = null == (t = (0, p.FY)().featuresApi) ? void 0 : t.canvas.actions,
          d = null == s ? void 0 : s.renameGroup,
          u = (0, o.useSyncExternalStore)(
            (null == s ? void 0 : s.subscribe) ?? Y,
            () => (null == d ? void 0 : d.getState(r).available) ?? !1,
            () => (null == d ? void 0 : d.getState(r).available) ?? !1,
          ),
          [c, g] = (0, o.useState)(!1),
          [b, v] = (0, o.useState)(i),
          [f, h] = (0, o.useState)(!1),
          m = (0, o.useRef)(null),
          y = (0, o.useRef)(null),
          x = (0, o.useId)();
        (0, o.useEffect)(() => {
          var e;
          c && (null == (e = m.current) || e.focus());
        }, [c]);
        let w = (0, o.useCallback)((e) => {
          (g(!1),
            h(!1),
            e &&
              queueMicrotask(() => {
                var e;
                return null == (e = y.current) ? void 0 : e.focus();
              }));
        }, []);
        (0, o.useEffect)(() => {
          !u && c && w(!0);
        }, [u, c, w]);
        let k = (0, o.useCallback)(
            async (e) => {
              var t;
              let a = (0, $.v)(i, b);
              a === i ||
              (null ==
              (t = await (null == d ? void 0 : d.execute(r, a, "user")))
                ? void 0
                : t.ok)
                ? w(e)
                : h(!0);
            },
            [d, b, w, r, i],
          ),
          C = (0, o.useCallback)((e) => e.stopPropagation(), []);
        return c
          ? (0, a.jsx)(U, {
              commit: k,
              draftTitle: b,
              errorId: x,
              finish: w,
              inputRef: m,
              saveFailed: f,
              setDraftTitle: v,
              setSaveFailed: h,
              stopCanvasPointer: C,
            })
          : (0, a.jsx)(q, {
              available: u,
              rightReservedWidth: n,
              title: i,
              titleClassName: l,
              triggerRef: y,
              onBegin: () => {
                (v(i), h(!1), g(!0));
              },
            });
      }
      function q(e) {
        return (0, a.jsx)(d.$nd, {
          ref: e.triggerRef,
          "aria-label": (0, i.gN0)(e.title),
          "data-flow-node-title": "true",
          [x.vK]: 20,
          [x.pv]: e.rightReservedWidth,
          className: (0, d.cn)(
            "octo-node-title-trigger min-w-canvas-zero max-w-full overflow-hidden whitespace-nowrap border-0 bg-transparent font-dreamina-regular text-dreamina-cn-13 hover:bg-transparent focus-visible:ring-1 focus-visible:ring-dreamina-stroke-secondary",
            e.titleClassName,
            y.wI,
            !e.available &&
              "disabled:text-dreamina-text-placeholder aria-disabled:text-dreamina-text-placeholder aria-disabled:hover:text-dreamina-text-placeholder aria-disabled:active:text-dreamina-text-placeholder",
          ),
          disabledReason: e.available ? void 0 : (0, i.Y5t)(),
          size: "sm",
          style: L,
          variant: "text",
          onClick: (t) => {
            0 === t.detail &&
              (t.preventDefault(),
              t.stopPropagation(),
              e.available && e.onBegin());
          },
          onDoubleClick: (t) => {
            (t.preventDefault(),
              t.stopPropagation(),
              e.available && e.onBegin());
          },
          onKeyDown: (t) => {
            ("Enter" === t.key || "F2" === t.key) &&
              e.available &&
              (t.preventDefault(), t.stopPropagation(), e.onBegin());
          },
          children: (0, a.jsx)("span", {
            ...s.rK,
            "data-node-title-text": "true",
            [x.ix]: e.title,
            children: e.title,
          }),
        });
      }
      function U(e) {
        return (0, a.jsxs)("span", {
          className: "relative flex items-center",
          style: W,
          children: [
            (0, a.jsx)(d.pde, {
              ref: e.inputRef,
              "aria-describedby": e.saveFailed ? e.errorId : void 0,
              "aria-invalid": e.saveFailed || void 0,
              className: (0, d.cn)(
                "nodrag nopan max-w-full border-dreamina-stroke-primary bg-dreamina-bg-float font-dreamina-medium text-dreamina-text-primary text-dreamina-cn-12 focus:border-dreamina-stroke-secondary focus-visible:ring-1 focus-visible:ring-dreamina-stroke-secondary",
                e.saveFailed &&
                  "border-dreamina-functional-error focus:border-dreamina-functional-error",
              ),
              label: (0, i.pMf)(),
              maxLength: 512,
              style: B,
              value: e.draftTitle,
              onBlur: () => void e.commit(!1),
              onChange: (t) => {
                (e.setDraftTitle(t.currentTarget.value), e.setSaveFailed(!1));
              },
              onClick: e.stopCanvasPointer,
              onKeyDown: (t) => {
                var r, a;
                return (
                  (r = t),
                  (a = e),
                  void (r.stopPropagation(),
                  "Escape" === r.key
                    ? (r.preventDefault(), a.finish(!0))
                    : "Enter" === r.key && (r.preventDefault(), a.commit(!0)))
                );
              },
              onPointerDown: e.stopCanvasPointer,
            }),
            e.saveFailed
              ? (0, a.jsx)("span", {
                  className:
                    "absolute left-0 top-full whitespace-nowrap rounded bg-dreamina-bg-float text-dreamina-cn-12 text-dreamina-functional-error",
                  id: e.errorId,
                  role: "alert",
                  style: _,
                  children: (0, i.qj6)(),
                })
              : null,
          ],
        });
      }
      var H = r(21727),
        O = r(3366),
        V = r(40627),
        X = r(61190),
        J = r(13519),
        Q = r(84488),
        Z = r(3347);
      let ee = (0, o.lazy)(() => r.e(9134).then(r.bind(r, 33805))),
        et = (0, g.kj)(),
        er = Object.freeze([]),
        ea = () => er;
      function en(e) {
        var t;
        let { data: r, id: n, active: i } = e,
          s = (0, p.FY)(),
          [u, c] = (0, o.useState)(!1),
          g = null == (t = s.featuresApi) ? void 0 : t.canvas.storyboardImages,
          b = (0, Z.l)(s.featuresApi, n),
          v = (0, o.useCallback)(
            (e) =>
              (null == g ? void 0 : g.subscribePendingUploads(n, e)) ??
              (() => void 0),
            [n, g],
          ),
          f = (0, o.useCallback)(
            () => (null == g ? void 0 : g.getPendingUploads(n)) ?? er,
            [n, g],
          ),
          h = (0, o.useSyncExternalStore)(v, f, ea),
          m = h.filter((e) => {
            var t;
            return !(null == (t = s.featuresApi)
              ? void 0
              : t.canvas.getObjectSnapshot(e.nodeId));
          }),
          y = (0, o.useRef)(null),
          x = (0, O.oy)(),
          [w, k] = (0, o.useState)(),
          C = (0, o.useRef)(null),
          I = (0, o.useRef)(null),
          S = r.storyboard,
          j = S ? Math.min(49, S.columns * S.rows) : 0,
          R = void 0 !== w && w >= r.memberCount && w < j ? w : r.memberCount;
        return ((0, o.useLayoutEffect)(() => {
          if ((i && I.current && (0, Q.Wo)(I.current), !i)) {
            C.current = null;
            return;
          }
          let e = C.current;
          !e ||
            e.isConnected ||
            e.ownerDocument.activeElement !== e.ownerDocument.body ||
            (r.memberCount < j && (0, Q.Yx)(e, R)) ||
            ((C.current = null),
            (0, O.BD)(x, null, { kind: "canvasNode", nodeId: n }));
        }, [i, r.memberCount, R, x, n, j]),
        S)
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                Array.from(
                  { length: Math.max(0, j - r.memberCount) },
                  (e, t) => {
                    let o = r.memberCount + t,
                      g = {
                        left: `${((o % S.columns) * 100) / S.columns}%`,
                        top: `${(100 * Math.floor(o / S.columns)) / S.rows}%`,
                        width: `${100 / S.columns}%`,
                        height: `${100 / S.rows}%`,
                      },
                      p = m[t],
                      v = (0, X.W)(o, S.columns, S.rows);
                    return (0, a.jsx)(
                      d.$nd,
                      {
                        ref: (e) => {
                          var t;
                          (e &&
                            u &&
                            !(null == (t = y.current)
                              ? void 0
                              : t.isConnected) &&
                            (y.current = e),
                            o === r.memberCount && (I.current = e));
                        },
                        variant: "text",
                        size: "unframed",
                        className: `nodrag nopan pointer-events-auto absolute overflow-hidden text-dreamina-text-secondary transition-none motion-safe:transition-none ${i ? "before:pointer-events-none before:absolute before:inset-0 before:content-[''] hover:bg-dreamina-canvas-bg hover:before:bg-dreamina-block-primary-hover active:bg-dreamina-canvas-bg active:before:bg-dreamina-block-primary-pressed disabled:before:bg-transparent aria-disabled:before:bg-transparent [&>span]:relative" : "hover:bg-transparent active:bg-transparent"} ${v}`,
                        "aria-label": p
                          ? (0, l.q8)(o + 1, p.title)
                          : (0, l.hl)(o + 1),
                        disabled: h.length > 0,
                        disabledReason: b,
                        title: b,
                        busy: !!p || void 0,
                        "data-testid": p ? "storyboard-upload-preview" : void 0,
                        "aria-keyshortcuts": i
                          ? "ArrowLeft ArrowRight ArrowUp ArrowDown"
                          : void 0,
                        tabIndex: i && 0 === h.length && o === R ? 0 : -1,
                        "data-storyboard-group-id": n,
                        "data-storyboard-empty-index": o,
                        "data-storyboard-cell-active": i || void 0,
                        onFocus: (e) => {
                          (k(o),
                            (C.current = e.currentTarget),
                            (0, Q.Wo)(e.currentTarget, !0));
                        },
                        onBlur: (e) => {
                          let t = e.relatedTarget;
                          t instanceof HTMLElement &&
                            t.dataset.storyboardGroupId !== n &&
                            (C.current = null);
                        },
                        onKeyDown: (e) => {
                          if (!i || h.length > 0) return;
                          let t = (0, Q.eu)(e.key, S.columns);
                          if (0 === t) return;
                          (e.preventDefault(), e.stopPropagation());
                          let r = o + t;
                          r >= 0 && r < j && (0, Q.Yx)(e.currentTarget, r);
                        },
                        style: g,
                        onClick: (e) => {
                          h.length > 0 ||
                            void 0 !== b ||
                            (s.selectionActions.replaceSelection([n], "user"),
                            i && ((y.current = e.currentTarget), c(!0)));
                        },
                        children: p
                          ? (0, a.jsx)(eo, {
                              upload: p,
                              renderMode: r.renderMode,
                            })
                          : (0, a.jsx)("span", {
                              "aria-hidden": "true",
                              "data-storyboard-empty-add-icon": "",
                              style: et,
                              children: (0, a.jsx)(d.REV, { size: 16 }),
                            }),
                      },
                      o,
                    );
                  },
                ),
                u && s.featuresApi
                  ? (0, a.jsx)(o.Suspense, {
                      fallback: null,
                      children: (0, a.jsx)(ee, {
                        api: s.featuresApi,
                        groupId: n,
                        anchorRef: y,
                        onClose: function () {
                          let e =
                            !(arguments.length > 0) ||
                            void 0 === arguments[0] ||
                            arguments[0];
                          (c(!1),
                            e &&
                              (0, O.BD)(x, y.current, {
                                kind: "canvasNode",
                                nodeId: n,
                              }));
                        },
                      }),
                    })
                  : null,
              ],
            })
          : null;
      }
      function eo(e) {
        let { upload: t, renderMode: r } = e,
          n = (0, V.cA)([t.resourceId])[0];
        return (0, a.jsx)(J.h, { resource: n, title: t.title, renderMode: r });
      }
      var ei = r(51064),
        el = r(85817);
      function es(e, t) {
        return (
          e instanceof Element &&
          (!t.contains(e) ||
            !!(
              e.closest("button") ||
              e.closest('[data-testid="group-title-hit-area"]') ||
              e.closest("[data-group-resize-node-id]")
            ))
        );
      }
      let ed = { boxShadow: (0, g.Am)("inset", 1) },
        eu = (0, o.memo)(function (e) {
          let t = (0, C.En)(e);
          return t
            ? (0, a.jsx)(eg, { props: e, targetId: t })
            : (0, a.jsx)(ec, { ...e });
        });
      function ec(e) {
        var t, r, s;
        let d,
          u,
          g,
          h,
          x,
          w,
          C,
          I,
          S,
          j,
          R,
          P,
          N,
          z,
          A,
          D = (0, p.FY)(),
          { writeChromeVisible: E } = (0, v.A1)(),
          [F, T] = (0, o.useState)(!1),
          [K, $] = (0, o.useState)(),
          M =
            ((d = void 0 !== e.data.marqueeChrome),
            (u = !0 === e.data.mediaResultExpanded),
            (g =
              !(r = {
                dragging: !!e.dragging,
                fullyContained: "contained" === e.data.marqueeChrome,
                lockPointerChrome: d,
                selected: !!e.selected && !u,
              }).dragging &&
              (!!r.fullyContained || (r.selected && !r.lockPointerChrome))),
            (x =
              (h = (0, el.V)(e.id, !!e.selected && !e.dragging && !d && !u)) &&
              !0 === e.data.isResizing),
            (t = {
              dragging: !!e.dragging,
              enabled: !!e.selected && !u,
              nodeId: e.id,
            }),
            (w = (0, p.FY)()),
            (C = (0, o.useRef)(null)),
            (I = (0, o.useRef)(!1)),
            (S = (0, o.useCallback)(() => {
              let e = w.canvasStore.getState().selectedNodeIds;
              return 1 === e.length && e[0] === t.nodeId;
            }, [w, t.nodeId])),
            (0, o.useEffect)(() => {
              t.dragging && ((C.current = null), (I.current = !1));
            }, [t.dragging]),
            (j = (0, o.useCallback)(
              (e) => {
                ((C.current = null),
                  (I.current = !1),
                  !t.enabled ||
                    t.dragging ||
                    0 !== e.button ||
                    es(e.target, e.currentTarget) ||
                    (S() &&
                      (C.current = {
                        pointerId: e.pointerId,
                        x: e.clientX,
                        y: e.clientY,
                      })));
              },
              [t.dragging, t.enabled, S],
            )),
            (R = (0, o.useCallback)((e) => {
              let t = C.current;
              if (!t || t.pointerId !== e.pointerId) return;
              let r = e.clientX - t.x,
                a = e.clientY - t.y;
              r * r + a * a > 16 && (C.current = null);
            }, [])),
            (P = (0, o.useCallback)(
              (e) => {
                let r = C.current;
                ((C.current = null),
                  !r ||
                    r.pointerId !== e.pointerId ||
                    t.dragging ||
                    es(e.target, e.currentTarget) ||
                    (S() && (I.current = !0)));
              },
              [t.dragging, S],
            )),
            (N = {
              onClickCapture: (0, o.useCallback)(
                (e) => {
                  let t = I.current;
                  ((I.current = !1),
                    t &&
                      S() &&
                      (e.stopPropagation(),
                      w.selectionActions.clearSelection("user")));
                },
                [w, S],
              ),
              onPointerDownCapture: j,
              onPointerMove: R,
              onPointerUp: P,
            }),
            (z = e.data.backgroundColor),
            void 0 !== e.data.backgroundColorPreview &&
              (z = e.data.backgroundColorPreview ?? void 0),
            {
              active: h,
              allowColorTransition:
                "resizing" !=
                  (A = (s = {
                    dragCandidate: "drag-candidate" === e.data.groupFeedback,
                    dragging: !!e.dragging,
                    resizing: x,
                    selected: g,
                  }).resizing
                    ? "resizing"
                    : s.dragging
                      ? "dragging"
                      : s.dragCandidate
                        ? "candidate"
                        : s.selected
                          ? "active"
                          : "resting") && !d,
              backgroundColor: z,
              lockPointerChrome: d,
              surfaceDeselect: N,
              visualState: A,
            }),
          L =
            "dragging" === M.visualState
              ? "pointer-events-none"
              : "pointer-events-auto",
          B = y.wI,
          W =
            void 0 === M.backgroundColor
              ? e.data.storyboard
                ? "bg-dreamina-canvas-bg before:pointer-events-none before:absolute before:inset-0 before:bg-dreamina-block-primary-default before:content-['']"
                : "bg-dreamina-canvas-bg bg-canvas-group-surface"
              : "bg-dreamina-canvas-bg bg-canvas-group-surface before:pointer-events-none before:absolute before:inset-0 before:opacity-canvas-group-color-fill before:content-[''] [&[data-group-background-color=gray]]:before:bg-dreamina-text-tertiary [&[data-group-background-color=red]]:before:bg-dreamina-functional-error [&[data-group-background-color=cyan]]:before:bg-dreamina-brand-teal [&[data-group-background-color=green]]:before:bg-dreamina-brand-teal [&[data-group-background-color=blue]]:before:bg-dreamina-brand-indigo [&[data-group-background-color=purple]]:before:bg-dreamina-brand-purple [&[data-group-background-color=orange]]:before:bg-dreamina-brand-orange [&[data-group-background-color=yellow]]:before:bg-dreamina-brand-yellow [&[data-group-background-color=white]]:before:bg-dreamina-text-primary",
          _ = M.allowColorTransition ? "transition-colors" : "",
          Y =
            void 0 === M.backgroundColor
              ? ""
              : "octo-canvas-group-color-surface",
          G =
            void 0 !== e.data.storyboard &&
            e.data.memberCount <
              e.data.storyboard.columns * e.data.storyboard.rows,
          q = () => {
            var t;
            let r = (0, ei.KP)();
            return (
              E &&
              G &&
              void 0 !== r &&
              r.groupId !== e.id &&
              (null == (t = D.featuresApi)
                ? void 0
                : t.canvas.actions.setStoryboardGroup.getState(e.id)
                    .available) === !0
            );
          },
          U = async (t) => {
            var r;
            let a = (0, ei.KP)(),
              o = null == (r = D.featuresApi) ? void 0 : r.canvas,
              i = null == o ? void 0 : o.getObjectSnapshot(e.id);
            if (
              !a ||
              a.groupId === e.id ||
              !o ||
              (null == i ? void 0 : i.type) !== "group" ||
              !i.data.storyboard
            )
              return;
            let s = o.getNodeIds().flatMap((e) => {
                let t = o.getObjectSnapshot(e);
                return t ? [t] : [];
              }),
              d = (0, n.II)(i, s).map((e) => e.id);
            if (d.length >= i.data.storyboard.columns * i.data.storyboard.rows)
              return void $((0, l.UR)());
            if (
              o.actions.setStoryboardGroup.getState(e.id).available &&
              o.actions.setStoryboardGroup.getState(a.groupId).available
            ) {
              a.claimDrop();
              try {
                let r = await o.actions.setStoryboardGroup.execute(
                  e.id,
                  { ...i.data.storyboard, orderedNodeIds: [...d, t] },
                  "user",
                );
                ($(r.ok ? void 0 : (0, l.aH)()),
                  r.ok ? a.finishRelease() : a.cancel());
              } catch {
                (a.cancel(), $((0, l.aH)()));
              }
            }
          };
        return (0, a.jsxs)("div", {
          className: `group relative h-full w-full pointer-events-auto [[data-canvas-pointer-tool=hand]_&]:pointer-events-none ${Y}`,
          "data-group-background-color": M.backgroundColor,
          "data-group-marquee-lock": M.lockPointerChrome ? "true" : void 0,
          "data-group-visual-state": M.visualState,
          "data-canvas-storyboard-drop-available": G ? "true" : void 0,
          "data-canvas-storyboard-drop-surface": e.data.storyboard
            ? "true"
            : void 0,
          "data-storyboard-cross-group-drop-active": F ? "true" : void 0,
          "data-testid": "group-flow-node",
          onDragEnter: (t) => {
            var r;
            t.dataTransfer.types.includes(H.I) &&
              q() &&
              (t.preventDefault(),
              t.stopPropagation(),
              null == (r = (0, ei.KP)()) || r.previewGroupTarget(e.id),
              T(!0));
          },
          onDragLeave: (e) => {
            var t;
            e.currentTarget.contains(e.relatedTarget) ||
              (null == (t = (0, ei.KP)()) || t.previewGroupTarget(), T(!1));
          },
          onDragOver: (t) => {
            var r;
            t.dataTransfer.types.includes(H.I) &&
              q() &&
              (t.preventDefault(),
              t.stopPropagation(),
              (t.dataTransfer.dropEffect = "move"),
              null == (r = (0, ei.KP)()) || r.previewGroupTarget(e.id),
              T(!0));
          },
          onDrop: (e) => {
            let t = e.dataTransfer.getData(H.I);
            t && q() && (e.preventDefault(), e.stopPropagation(), T(!1), U(t));
          },
          ...b.Bs,
          ...M.surfaceDeselect,
          children: [
            (0, a.jsx)("span", {
              "aria-hidden": "true",
              className: `octo-canvas-group-background pointer-events-none absolute inset-0 [.is-connecting_&]:opacity-canvas-group-connection-preview ${e.data.storyboard ? "overflow-hidden rounded-canvas-media-node-preview" : ""} ${_} ${W}`,
              "data-group-background-color": M.backgroundColor,
              "data-testid": "group-background",
            }),
            e.data.storyboard
              ? (0, a.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "pointer-events-none absolute inset-0 rounded-canvas-media-node-preview text-dreamina-stroke-secondary",
                  "data-testid": "storyboard-base-stroke",
                  style: ed,
                })
              : null,
            e.data.storyboard
              ? (0, a.jsx)(m.bK, {
                  dragging: "dragging" === M.visualState,
                  hidden: "candidate" === M.visualState || F,
                  hostBorderWidth: 0,
                  nodeId: e.id,
                  pressFeedback: !0,
                  selected:
                    "active" === M.visualState || "resizing" === M.visualState,
                })
              : (0, a.jsx)(k, {
                  pointerChromeEnabled: !M.lockPointerChrome,
                  visualState: M.visualState,
                }),
            (0, a.jsx)(f.p, {
              hostBorderWidth: 0,
              tagPresentation: e.data.tagPresentation,
            }),
            E && e.data.storyboard
              ? (0, a.jsx)(en, { id: e.id, data: e.data, active: M.active })
              : null,
            (0, a.jsx)(eb, {
              active: M.active,
              props: e,
              titleHitAreaClassName:
                "text-dreamina-text-placeholder hover:text-dreamina-text-placeholder",
              titleStateClassName: B,
              titlePointerClassName: L,
              visualState: M.visualState,
              writeChromeVisible: E,
            }),
            (0, a.jsx)("span", {
              className: "sr-only",
              id: (0, c.k)(e.id),
              children: (0, i.qNQ)({
                memberCount: e.data.memberCount,
                name: e.data.title,
                selected: e.selected,
              }),
            }),
            K
              ? (0, a.jsx)("span", {
                  role: "alert",
                  className: "sr-only",
                  children: K,
                })
              : null,
          ],
        });
      }
      function eg(e) {
        let { props: t, targetId: r } = e,
          n = (0, p.FY)(),
          i = (0, o.useCallback)(
            (e) => {
              n.actions.patchNodeRenderInteraction(
                r,
                { isResizing: e },
                "system",
              );
            },
            [n.actions, r],
          );
        return (
          (0, o.useEffect)(() => () => i(!1), [i]),
          (0, a.jsx)("div", {
            className: "pointer-events-none relative h-full w-full",
            "data-testid": "group-resize-chrome-node",
            children: (0, a.jsx)(E, {
              active: !0,
              height: t.height ?? 1,
              nodeId: r,
              onResizingChange: i,
              width: t.width ?? 1,
              x: t.positionAbsoluteX,
              y: t.positionAbsoluteY,
            }),
          })
        );
      }
      function eb(e) {
        var t, r, n, o;
        let {
            active: i,
            props: l,
            titleHitAreaClassName: s,
            titleStateClassName: c,
            titlePointerClassName: b,
            visualState: p,
            writeChromeVisible: v,
          } = e,
          f =
            28 +
            8 *
              Math.max(
                0,
                ((null == (t = l.data.tagPresentation)
                  ? void 0
                  : t.tagIds.length) ?? 0) - 1,
              );
        return (0, a.jsxs)("div", {
          className: `absolute left-0 flex w-full max-w-full items-center justify-between after:absolute after:inset-x-0 after:top-full after:h-canvas-group-title-gap after:content-[''] ${s} ${b}`,
          "data-testid": "group-title-hit-area",
          style: { height: 24, top: -28, zIndex: 10 },
          children: [
            (0, a.jsxs)("span", {
              className: `flex h-full origin-bottom-left items-center [&>[data-icon]]:shrink-0 ${c}`,
              "data-flow-node-title": "true",
              "data-node-title-dragging": "dragging" === p || void 0,
              "data-node-title-selected": "active" === p || void 0,
              "data-testid": "group-title-chrome",
              [x.vK]: 20,
              [x.pv]: f,
              style: {
                columnGap: 4,
                maxWidth: (0, w.qo)(f),
                minWidth: 0,
                ...(0, g.kF)(),
              },
              children: [
                l.data.storyboard
                  ? (0, a.jsx)(d.izk, {})
                  : (0, a.jsx)(u.B4, {}),
                ((r = i && v),
                (n = l),
                (o = f),
                r
                  ? (0, a.jsx)(G, {
                      nodeId: n.id,
                      rightReservedWidth: o,
                      title: n.data.title,
                      titleClassName: "text-inherit",
                    })
                  : (0, a.jsx)(ev, {
                      title: n.data.title,
                      titleClassName: "text-inherit",
                    })),
              ],
            }),
            (0, a.jsx)("span", {
              className: "origin-bottom-right shrink-0",
              "data-testid": "group-title-tag-chrome",
              style: (0, g.kF)(),
              children: (function (e, t, r) {
                if ("dragging" === t) return null;
                let n = e.data.tagPresentation;
                return null === n
                  ? null
                  : void 0 === n
                    ? r
                      ? (0, a.jsx)(ep, { visible: "resting" !== t })
                      : null
                    : (0, a.jsx)(h.e, {
                        nodeId: e.id,
                        placement: "inline",
                        selected: e.selected,
                        tagPresentation: n,
                      });
              })(l, p, v),
            }),
          ],
        });
      }
      function ep(e) {
        let { visible: t } = e;
        return (0, a.jsx)("span", {
          className: `flex shrink-0 items-center justify-center ${t ? "visible" : "invisible group-hover:visible"}`,
          "data-canvas-node-tag-visual-slot": "",
          "data-testid": "group-title-tag",
          style: { height: 24, width: 24 },
          children: (0, a.jsx)(u.Sf, {}),
        });
      }
      function ev(e) {
        let { title: t, titleClassName: r } = e;
        return (0, a.jsx)("span", {
          ...s.rK,
          "data-canvas-content-evidence": "element",
          className: `min-w-canvas-zero max-w-full overflow-hidden whitespace-nowrap font-dreamina-regular text-dreamina-cn-13 ${r}`,
          "data-node-title-text": "true",
          style: { minWidth: 0 },
          [x.ix]: t,
          children: t,
        });
      }
    },
  },
]);
