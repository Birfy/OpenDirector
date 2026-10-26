"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [844],
  {
    67014(e, a, r) {
      var t = r(90561),
        n = r(87429),
        i = r(172);
      let o = (0, n.memo)(function (e) {
        let {
          src: a,
          className: r = "size-full object-cover",
          crossfade: n = !1,
        } = e;
        return n
          ? (0, t.jsx)(l, { src: a, className: r })
          : (0, t.jsx)(c, { src: a, className: r }, a ?? "");
      });
      function c(e) {
        let { src: a, className: r } = e,
          [i, o] = (0, n.useState)(!1);
        return !a || i
          ? null
          : (0, t.jsx)("img", {
              alt: "",
              crossOrigin: a.startsWith("http") ? "anonymous" : void 0,
              className: r,
              src: a,
              onError: () => o(!0),
            });
      }
      function l(e) {
        let { src: a, className: r } = e,
          [o, c] = (0, n.useState)({}),
          l = (0, n.useRef)(),
          d = (0, n.useCallback)(() => {
            (clearTimeout(l.current), (l.current = void 0));
          }, []);
        ((0, n.useLayoutEffect)(() => d, [d]),
          (0, n.useLayoutEffect)(() => {
            a
              ? c((e) =>
                  e.failedSrc && e.failedSrc !== a
                    ? { ...e, failedSrc: void 0 }
                    : e,
                )
              : (d(), c({}));
          }, [d, a]),
          (0, n.useLayoutEffect)(() => {
            a &&
              c((e) =>
                e.failedSrc && e.failedSrc !== a
                  ? { ...e, failedSrc: void 0 }
                  : e,
              );
          }, [a]));
        let u = (0, n.useCallback)(
            (e) => {
              if (e !== a || e === o.displayedSrc) return;
              if ((d(), !o.displayedSrc || (0, i.Oeg)(window)))
                return void c({ displayedSrc: e });
              let r = o.displayedSrc;
              (c({ displayedSrc: e, outgoingSrc: r }),
                (l.current = setTimeout(() => {
                  (c((e) =>
                    e.outgoingSrc === r ? { ...e, outgoingSrc: void 0 } : e,
                  ),
                    (l.current = void 0));
                }, 200)));
            },
            [d, a, o.displayedSrc],
          ),
          m = (0, n.useCallback)((e) => {
            c((a) => ({
              displayedSrc: a.displayedSrc === e ? void 0 : a.displayedSrc,
              outgoingSrc: a.outgoingSrc === e ? void 0 : a.outgoingSrc,
              failedSrc: e,
            }));
          }, []),
          v = a && a !== o.displayedSrc && a !== o.failedSrc ? a : void 0,
          g = [
            ...new Set([o.outgoingSrc, o.displayedSrc, v].filter((e) => !!e)),
          ],
          p = !!(o.displayedSrc && !(0, i.Oeg)(window));
        return g.map((e) =>
          (0, t.jsx)(
            s,
            {
              src: e,
              className: r,
              visible: e === o.displayedSrc,
              animate: p,
              onReady: u,
              onFailed: m,
            },
            e,
          ),
        );
      }
      let s = (0, n.memo)(function (e) {
        let {
            src: a,
            className: r,
            visible: i,
            animate: o,
            onReady: c,
            onFailed: l,
          } = e,
          s = (0, n.useRef)(null),
          [d, u] = (0, n.useState)(!1);
        (0, n.useLayoutEffect)(() => {
          d && c(a);
        }, [d, c, a]);
        let m = (0, n.useCallback)(() => l(a), [l, a]),
          v = (0, n.useCallback)(
            (e) => {
              let r = e.currentTarget,
                t = () => {
                  s.current === r && (r.naturalWidth > 0 ? u(!0) : l(a));
                };
              "function" != typeof r.decode
                ? t()
                : r.decode().then(t, () => {
                    s.current === r && l(a);
                  });
            },
            [l, a],
          );
        return (0, t.jsx)("img", {
          ref: s,
          alt: "",
          crossOrigin: a.startsWith("http") ? "anonymous" : void 0,
          className:
            r +
            " " +
            (o
              ? "absolute inset-0 motion-safe:transition-opacity motion-safe:duration-dreamina-element motion-safe:ease-dreamina-soft motion-reduce:transition-none"
              : "absolute inset-0 transition-none"),
          src: a,
          style: { opacity: +!!i },
          onError: m,
          onLoad: v,
        });
      });
      r.d(a, {}, { j: o });
    },
    92410(e, a, r) {
      r.d(a, { CanvasCameraSettingsBody: () => f });
      var t = r(90561),
        n = r(87429),
        i = r(172),
        o = r(96783),
        c = r(52310),
        l = r(63386),
        s = r(67014),
        d = r(14841),
        u = r(88313);
      let m = {
        model: r.p + "static/image/camera-auto-model.618ab5e438.png",
        lens: r.p + "static/image/camera-auto-lens.40fe1d0cd2.png",
        aperture: r.p + "static/image/camera-auto-aperture.52157e8ff6.png",
        focal: r.p + "static/image/camera-auto-focal.3437239f5f.png",
      };
      function v(e) {
        let { axis: a } = e;
        return (0, t.jsx)("span", {
          "aria-hidden": "true",
          "data-camera-auto-artwork": a,
          className: "absolute top-canvas-camera-compact size-14",
          children: (0, t.jsx)("img", {
            alt: "",
            className: "size-full object-contain",
            src: m[a],
          }),
        });
      }
      let g =
          r.p + "static/image/camera-option-background-light.741b86d80b.png",
        p = [-2, -1, 0, 1, 2],
        b = [0],
        f = (0, n.memo)(function (e) {
          let { runtime: a, catalog: r, previewUrl: i, previewSource: c } = e,
            m = (0, n.useSyncExternalStore)(
              a.subscribe,
              a.getSnapshot,
              a.getSnapshot,
            ),
            v = (0, n.useSyncExternalStore)(
              r.subscribe,
              r.getCatalog,
              r.getCatalog,
            ),
            g = m.selection,
            p = (0, d.q)({
              selection: i ? null : g,
              catalog: v,
              target: m.target,
              previewAxis: m.previewAxis,
              source: c,
            }),
            b =
              g && i
                ? i(g)
                : (null == c ? void 0 : c.resolveBatch)
                  ? p.url
                  : (0, u.$$)(g, v, m.target, m.previewAxis);
          return (0, t.jsxs)("div", {
            className:
              "min-h-canvas-camera-zero flex-1 overflow-y-auto px-canvas-camera-dialog-inset pt-canvas-camera-title-inset",
            children: [
              (0, t.jsxs)("div", {
                className:
                  "mx-auto flex w-canvas-camera-preview max-w-full flex-col overflow-hidden rounded-canvas-camera-card bg-dreamina-block-secondary-default",
                children: [
                  (0, t.jsx)("figure", {
                    "aria-busy": p.loading,
                    className:
                      "relative aspect-video w-full shrink-0 overflow-hidden rounded-canvas-camera-card bg-dreamina-block-secondary-default",
                    children: (0, t.jsx)(s.j, {
                      crossfade: !0,
                      src: b,
                      className:
                        "size-full rounded-canvas-camera-card object-cover",
                    }),
                  }),
                  (0, t.jsx)("p", {
                    "aria-atomic": "true",
                    "aria-live": "polite",
                    role: "status",
                    className: "sr-only",
                    children: p.loading ? (0, o.Y2)("image") : "",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className:
                  "mt-canvas-camera-wheel-start grid grid-cols-2 gap-canvas-camera-dialog-inset sm:grid-cols-4",
                children: l.pv.map((e) =>
                  (0, t.jsx)(
                    h,
                    {
                      axis: e,
                      busy: m.busy,
                      options: (
                        (null == v ? void 0 : v.options("camera")) ?? []
                      ).filter(
                        (a) =>
                          a.axis === e && (!m.target || (0, l.DW)(a, m.target)),
                      ),
                      value: (null == g ? void 0 : g[e]) ?? null,
                      onSelect: (r) => a.select(e, r),
                    },
                    e,
                  ),
                ),
              }),
            ],
          });
        }),
        h = (0, n.memo)(function (e) {
          var a, r, o, l;
          let s,
            d,
            m,
            f,
            h,
            x,
            y,
            { axis: k, busy: w, options: E, value: S, onSelect: A } = e,
            C = (0, i.DFZ)(),
            I =
              "light" === C
                ? g
                : "data:image/webp;base64,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",
            R = (0, n.useMemo)(
              () => [
                {
                  id: null,
                  label: (0, c.Rk)(),
                  imageUrl: void 0,
                  number: void 0,
                },
                ...E.map((e) => {
                  let a = (0, c.Uj)(e),
                    r =
                      "focal" === k ? void 0 : (0, u.MU)(e.id, e.thumbnailUrl);
                  return {
                    id: e.id,
                    label: a,
                    imageUrl: r,
                    number: r
                      ? void 0
                      : (function (e, a) {
                          let r = e.trim();
                          if ("aperture" === a) {
                            let e = r.replace(/\s/g, "").toLowerCase();
                            if (!e.startsWith("f")) return;
                            let a = e.slice(e.startsWith("f/") ? 2 : 1),
                              t = a.split(".");
                            if (
                              t.length > 2 ||
                              !t.every((e) => /^[0-9]+$/.test(e))
                            )
                              return;
                            return { value: `f${a}`, unit: "" };
                          }
                          if ("focal" !== a) return;
                          let t = r.toLowerCase().indexOf("mm");
                          if (t < 0) return;
                          let n = r.slice(0, t).trim(),
                            i = n.split(".");
                          if (
                            !(i.length > 2) &&
                            i.every((e) => /^[0-9]+$/.test(e))
                          )
                            return { value: n, unit: "mm" };
                        })(e.nameFallback ?? a, k),
                  };
                }),
              ],
              [k, E],
            ),
            J = Math.max(
              0,
              R.findIndex((e) => e.id === S),
            ),
            T = (0, n.useRef)(null),
            N = (0, n.useRef)(new Map()),
            [K, j] = (0, n.useState)(J),
            W = (0, n.useCallback)(
              (e) => ((e % R.length) + R.length) % R.length,
              [R.length],
            ),
            D = K;
          if (W(K) !== J) {
            let e = W(J - W(K));
            j((D += e > R.length / 2 ? e - R.length : e));
          }
          let Q = (0, n.useCallback)(
              (e) => {
                w || (j(e), A(R[W(e)].id));
              },
              [w, R, W, A],
            ),
            L = (0, n.useCallback)(
              (e) => {
                R.length < 2 || Q(D + e);
              },
              [D, R.length, Q],
            ),
            O =
              ((a = T),
              (r = !w && R.length > 1),
              (o = D),
              (l = Q),
              (s = (0, n.useRef)({ distance: 0, position: o })),
              (d = (0, n.useRef)()),
              (m = (0, n.useRef)()),
              ((f = (0, n.useRef)(l)).current = l),
              (h = (0, n.useCallback)(() => {
                (void 0 !== d.current && cancelAnimationFrame(d.current),
                  (d.current = void 0));
              }, [])),
              (x = (0, n.useCallback)(() => {
                (h(),
                  clearTimeout(m.current),
                  (m.current = void 0),
                  (s.current.distance = 0));
                let e = a.current;
                (null == e || e.removeAttribute("data-camera-wheel-active"),
                  null == e || e.style.removeProperty("--camera-wheel-offset"));
              }, [h, a])),
              (y = (0, n.useCallback)(() => {
                let e = a.current,
                  r = s.current.distance;
                if (!e || 0 === r || (0, i.Oeg)(window)) return void x();
                let t = performance.now(),
                  n = (a) => {
                    let i = Math.max(0, Math.min((a - t) / 220, 1));
                    ((s.current.distance = r * (1 - i) ** 3),
                      e.style.setProperty(
                        "--camera-wheel-offset",
                        `${s.current.distance}px`,
                      ),
                      i < 1 ? (d.current = requestAnimationFrame(n)) : x());
                  };
                d.current = requestAnimationFrame(n);
              }, [x, a])),
              (0, n.useLayoutEffect)(() => {
                s.current.position !== o && ((s.current.position = o), x());
              }, [o, x]),
              (0, n.useEffect)(() => {
                let e = a.current;
                if (!r || !e) return;
                let t = (a) => {
                  if (
                    a.ctrlKey ||
                    a.metaKey ||
                    Math.abs(a.deltaY) <= Math.abs(a.deltaX)
                  )
                    return;
                  (a.preventDefault(), a.stopPropagation());
                  let r =
                    a.deltaY *
                    (a.deltaMode === WheelEvent.DOM_DELTA_LINE
                      ? 16
                      : a.deltaMode === WheelEvent.DOM_DELTA_PAGE
                        ? 160
                        : 1);
                  h();
                  let t = s.current;
                  t.distance += r;
                  let n =
                    Math.sign(t.distance) *
                    Math.floor((Math.abs(t.distance) + 46) / 92);
                  ((t.distance -= 92 * n),
                    (t.position += n),
                    e.setAttribute("data-camera-wheel-active", "true"),
                    e.style.setProperty(
                      "--camera-wheel-offset",
                      `${t.distance}px`,
                    ),
                    0 !== n && f.current(t.position),
                    clearTimeout(m.current),
                    (m.current = setTimeout(y, 140)));
                };
                return (
                  e.addEventListener("wheel", t, { passive: !1 }),
                  () => {
                    (e.removeEventListener("wheel", t), x());
                  }
                );
              }, [r, x, y, h, a]),
              x),
            F = (0, n.useCallback)(
              (e) => {
                var a;
                let r = "ArrowUp" === e.key ? -1 : +("ArrowDown" === e.key);
                if (0 === r || w || R.length < 2) return;
                (e.preventDefault(), O());
                let t = D + r;
                (Q(t),
                  null == (a = N.current.get(t)) ||
                    a.focus({ preventScroll: !0 }));
              },
              [D, w, R.length, O, Q],
            ),
            H = R.length > 1 ? p : b;
          return (0, t.jsxs)("div", {
            className: "group relative min-w-canvas-camera-zero text-center",
            role: "group",
            "aria-label": (0, c.tJ)(k),
            children: [
              (0, t.jsx)("p", {
                className:
                  "mb-canvas-camera-label-gap truncate text-dreamina-cn-13-relaxed font-dreamina-medium text-dreamina-text-placeholder group-hover:text-dreamina-text-secondary",
                children: (0, c.tJ)(k),
              }),
              (0, t.jsxs)("div", {
                ref: T,
                className: "relative h-canvas-camera-wheel overflow-hidden",
                children: [
                  H.map((e) => {
                    let a = D + e,
                      r = R[W(a)];
                    return (0, t.jsx)(
                      "div",
                      {
                        className:
                          "absolute inset-x-0 top-0 [transform:translateY(calc(var(--camera-card-y)_-_var(--camera-wheel-offset,0px)))] motion-safe:transition-transform motion-safe:duration-canvas-camera-wheel motion-safe:ease-canvas-camera-wheel motion-safe:[[data-camera-wheel-active=true]_&]:transition-none",
                        style: { "--camera-card-y": `${36 + 92 * e}px` },
                        children: (0, t.jsxs)(i.$nd, {
                          ref: (e) => {
                            e ? N.current.set(a, e) : N.current.delete(a);
                          },
                          "data-camera-option-id": r.id ?? "auto",
                          "aria-pressed": 0 === e,
                          disabled: w,
                          tabIndex: 0 === e ? 0 : -1,
                          variant: "text",
                          className: `relative flex h-canvas-camera-card w-full min-w-canvas-camera-zero items-center justify-center overflow-hidden rounded-canvas-camera-card border-0 p-canvas-camera-zero text-dreamina-cn-12 font-dreamina-regular ${0 === e ? "text-dreamina-text-secondary" : "text-dreamina-text-disabled"} ${r.number ? "bg-dreamina-bg-mask-60 hover:bg-dreamina-bg-mask-60 active:bg-dreamina-bg-mask-60" : null === r.id ? "bg-dreamina-bg-body hover:bg-dreamina-bg-body active:bg-dreamina-bg-body" : r.imageUrl ? "bg-dreamina-bg-surface hover:bg-dreamina-bg-surface active:bg-dreamina-bg-surface" : "bg-dreamina-block-secondary-default hover:bg-dreamina-block-secondary-default active:bg-dreamina-block-secondary-default"}`,
                          style: {
                            backgroundImage: `url(${I})`,
                            backgroundSize: "cover",
                          },
                          onClick: () => {
                            (O(), Q(a));
                          },
                          onKeyDown: F,
                          children: [
                            null === r.id ? (0, t.jsx)(v, { axis: k }) : null,
                            r.imageUrl
                              ? (0, t.jsx)("img", {
                                  alt: "",
                                  crossOrigin: r.imageUrl.startsWith("http")
                                    ? "anonymous"
                                    : void 0,
                                  className:
                                    "absolute top-canvas-camera-compact size-14 object-contain",
                                  src: r.imageUrl,
                                })
                              : null,
                            r.number
                              ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)("span", {
                                      "aria-hidden": "true",
                                      className: `absolute inset-x-0 top-canvas-camera-number-top text-canvas-camera-number font-dreamina-medium ${"light" === C && 0 === e ? "text-dreamina-text-primary" : "text-dreamina-text-secondary"}`,
                                      "data-camera-focal-number": "",
                                      children: r.number.value,
                                    }),
                                    (0, t.jsx)("span", {
                                      "aria-hidden": "true",
                                      className:
                                        "absolute inset-x-0 bottom-0 truncate px-canvas-camera-compact py-canvas-camera-compact",
                                      children: r.number.unit,
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "sr-only",
                                      children: r.label,
                                    }),
                                  ],
                                })
                              : (0, t.jsx)("span", {
                                  className: `${r.imageUrl || null === r.id ? "absolute inset-x-0 bottom-0" : ""} truncate px-canvas-camera-compact py-canvas-camera-compact`,
                                  children: r.label,
                                }),
                          ],
                        }),
                      },
                      `${r.id ?? "auto"}:${a}`,
                    );
                  }),
                  (0, t.jsx)("div", {
                    className: `pointer-events-none absolute inset-x-0 top-0 flex h-canvas-camera-wheel-fade justify-center group-hover:h-canvas-camera-wheel-control-fade ${"light" === C ? "bg-canvas-camera-wheel-light-fade-top group-hover:bg-canvas-camera-wheel-light-control-fade-top" : "bg-canvas-camera-wheel-fade-top group-hover:bg-canvas-camera-wheel-control-fade-top"}`,
                    children: (0, t.jsx)(i.$nd, {
                      variant: "text",
                      size: "icon",
                      className:
                        "pointer-events-none h-canvas-camera-arrow w-canvas-camera-arrow-width rounded-canvas-camera-parameter bg-dreamina-block-secondary-default p-canvas-camera-zero text-dreamina-text-secondary opacity-canvas-camera-control-hidden hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-pressed group-hover:pointer-events-auto group-hover:opacity-canvas-camera-control-visible",
                      disabled: w || R.length < 2,
                      "aria-label": (0, c.h9)(k),
                      onClick: () => {
                        (O(), L(-1));
                      },
                      children: (0, t.jsx)(i.J27, { className: "size-3" }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: `pointer-events-none absolute inset-x-0 bottom-0 flex h-canvas-camera-wheel-fade items-end justify-center group-hover:h-canvas-camera-wheel-control-fade ${"light" === C ? "bg-canvas-camera-wheel-light-fade-bottom group-hover:bg-canvas-camera-wheel-light-control-fade-bottom" : "bg-canvas-camera-wheel-fade-bottom group-hover:bg-canvas-camera-wheel-control-fade-bottom"}`,
                    children: (0, t.jsx)(i.$nd, {
                      variant: "text",
                      size: "icon",
                      className:
                        "pointer-events-none h-canvas-camera-arrow w-canvas-camera-arrow-width rounded-canvas-camera-parameter bg-dreamina-block-secondary-default p-canvas-camera-zero text-dreamina-text-secondary opacity-canvas-camera-control-hidden hover:bg-dreamina-block-secondary-hover hover:text-dreamina-text-primary active:bg-dreamina-block-secondary-pressed group-hover:pointer-events-auto group-hover:opacity-canvas-camera-control-visible",
                      disabled: w || R.length < 2,
                      "aria-label": (0, c.Xk)(k),
                      onClick: () => {
                        (O(), L(1));
                      },
                      children: (0, t.jsx)(i.i_O, { className: "size-3" }),
                    }),
                  }),
                ],
              }),
            ],
          });
        });
    },
    14841(e, a, r) {
      var t = r(87429),
        n = r(8583),
        i = r(88313);
      function o(e) {
        let {
            selection: a,
            catalog: r,
            target: o,
            previewAxis: l,
            source: s,
          } = e,
          [d, u] = (0, t.useState)(),
          m = a ? (0, n.$5)(a) : void 0,
          v = (0, t.useMemo)(
            () =>
              a && r
                ? (0, n.Ph)(a, r, o).map((e) => ({
                    kind: "camera_preview",
                    id: e,
                  }))
                : [],
            [a, r, o],
          ),
          g = (0, i.$$)(a, r, o, l);
        (0, t.useEffect)(() => {
          var e, a;
          if (
            !m ||
            !(null == s ? void 0 : s.resolveBatch) ||
            !r ||
            0 === v.length
          )
            return void u(void 0);
          let t =
              null == (a = s.peekMetadata) ||
              null == (e = a.call(s, m, "camera_preview"))
                ? void 0
                : e.coverUrl,
            n = new AbortController(),
            { signal: i } = n,
            o = (e) => {
              i.aborted || u({ source: s, catalog: r, refs: v, url: e });
            },
            l = async () => {
              if (!i.aborted) {
                if (!g) return void o();
                try {
                  (await c(g, i), o(g));
                } catch {
                  o();
                }
              }
            },
            d = async (e) => {
              try {
                (await c(e, i), o(e));
              } catch {
                await l();
              }
            },
            p = async (e, a) => {
              try {
                var r, t;
                let n = await s.resolveBatch(e, { signal: i, priority: a });
                if ((i.throwIfAborted(), "background" === a)) return;
                let o =
                  null ==
                    (t = n.find(
                      (e) =>
                        "camera_preview" === e.preset.kind && e.preset.id === m,
                    )) || null == (r = t.media)
                    ? void 0
                    : r.coverUrl;
                if (!o) return void (await l());
                await d(o);
              } catch {
                "foreground" === a && (await l());
              }
            };
          t ? d(t) : p([{ kind: "camera_preview", id: m }], "foreground");
          let b =
            v.length > 1
              ? setTimeout(() => {
                  p(v.slice(1), "background");
                }, 150)
              : void 0;
          return () => {
            (clearTimeout(b), n.abort());
          };
        }, [m, v, g, r, s]);
        let p =
          a &&
          (null == d ? void 0 : d.source) === s &&
          (null == d ? void 0 : d.catalog) === r;
        return {
          url: p ? (null == d ? void 0 : d.url) : void 0,
          loading: !!(
            m &&
            (null == s ? void 0 : s.resolveBatch) &&
            r &&
            v.length > 0 &&
            (!p || (null == d ? void 0 : d.refs) !== v)
          ),
        };
      }
      function c(e, a) {
        return (
          a.throwIfAborted(),
          new Promise((r, t) => {
            let n = new Image(),
              i = (e) => {
                ((n.onload = null),
                  (n.onerror = null),
                  a.removeEventListener("abort", o),
                  n.removeAttribute("src"),
                  e ? t(e) : r());
              },
              o = () => i(a.reason);
            (a.addEventListener("abort", o, { once: !0 }),
              (n.onload = () => {
                n.decode().then(() => i(), i);
              }),
              (n.onerror = () => i(Error("Camera preview image unavailable"))),
              e.startsWith("http") && (n.crossOrigin = "anonymous"),
              (n.src = e));
          })
        );
      }
      r.d(a, { q: () => o });
    },
  },
]);
