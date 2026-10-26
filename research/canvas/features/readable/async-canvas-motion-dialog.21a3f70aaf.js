"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [7575],
  {
    52636(e, r, a) {
      a.d(r, { CanvasMotionPickerBody: () => v });
      var l = a(90561),
        n = a(87429),
        i = a(172),
        t = a(74642),
        o = a(55793),
        s = a(77117),
        d = a(14864),
        c = a(27380),
        u = a(50018);
      let m = (0, n.memo)(function (e) {
          let {
              option: r,
              disabled: a = !1,
              playing: t = !1,
              selected: o = !1,
              previewSource: s,
              buttonRef: d,
              onSelect: m,
            } = e,
            [f, b] = (0, n.useState)(!1),
            [v, p] = (0, n.useState)(!1),
            h = t || (!a && (f || v)),
            y = (0, n.useCallback)(() => b(!0), []),
            g = (0, n.useCallback)(() => b(!1), []),
            x = (0, n.useCallback)(() => p(!0), []),
            k = (0, n.useCallback)(() => p(!1), []),
            j = (0, u.v)(r, s, h),
            w = (0, n.useMemo)(
              () => ({ ...r, previewUrl: j.url, coverUrl: j.coverUrl }),
              [r, j.url, j.coverUrl],
            ),
            C = (0, n.useCallback)(() => {
              a || m(r);
            }, [a, m, r]);
          return (0, l.jsxs)(i.$nd, {
            ref: d,
            variant: "text",
            size: "unframed",
            disabled: a,
            onClick: C,
            "aria-label": r.label,
            "aria-pressed": o,
            "data-motion-preset-id": r.id,
            onPointerEnter: y,
            onPointerLeave: g,
            onFocus: x,
            onBlur: k,
            className:
              "group flex w-full flex-col whitespace-normal rounded-dreamina-control-unframed font-dreamina-medium",
            style: { minWidth: 0, gap: 8, padding: 0 },
            children: [
              (0, l.jsxs)("span", {
                className:
                  "relative block aspect-square w-full rounded-dreamina-control",
                children: [
                  (0, l.jsx)("span", {
                    className:
                      "block size-full overflow-hidden rounded-dreamina-control",
                    children: (0, l.jsx)(c.u, {
                      option: w,
                      playing: h,
                      activation: f || t ? "pointer" : "focus",
                    }),
                  }),
                  (0, l.jsx)("span", {
                    "data-motion-hover-frame": !0,
                    "aria-hidden": "true",
                    className: (0, i.cn)(
                      "pointer-events-none absolute inset-0 rounded-dreamina-control border-2 border-dreamina-text-tertiary opacity-dreamina-media-action-hidden group-hover:opacity-dreamina-media-action-visible",
                      v && "opacity-dreamina-media-action-visible",
                    ),
                    children: (0, l.jsx)("span", {
                      className:
                        "absolute inset-0 rounded-dreamina-reference-chip border border-dreamina-bg-surface",
                    }),
                  }),
                  (0, l.jsx)("span", {
                    "data-motion-pressed-frame": !0,
                    "aria-hidden": "true",
                    className: (0, i.cn)(
                      "pointer-events-none absolute inset-0 rounded-dreamina-control border-2 border-dreamina-text-primary opacity-dreamina-media-action-hidden group-active:opacity-dreamina-media-action-visible",
                      (t || o) && "opacity-dreamina-media-action-visible",
                    ),
                    children: (0, l.jsx)("span", {
                      className:
                        "absolute inset-0 rounded-dreamina-reference-chip border border-dreamina-bg-surface",
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("span", {
                title: r.label,
                className: (0, i.cn)(
                  "block w-full truncate text-center text-dreamina-cn-12 text-dreamina-text-secondary group-hover:text-dreamina-text-primary",
                ),
                children: r.label,
              }),
            ],
          });
        }),
        f = (0, n.memo)(function () {
          return (0, l.jsxs)("div", {
            "aria-hidden": "true",
            className: "flex flex-col",
            style: { minWidth: 0, gap: 8 },
            children: [
              (0, l.jsx)("div", {
                className:
                  "aspect-square rounded-dreamina-control bg-dreamina-block-primary-default",
              }),
              (0, l.jsx)("div", {
                className:
                  "rounded-dreamina-control bg-dreamina-block-primary-default",
                style: { marginInline: 8, height: 20 },
              }),
            ],
          });
        }),
        b = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
        ],
        v = (0, n.memo)(function (e) {
          let {
              open: r,
              editable: a,
              options: c,
              previewSource: u,
              catalogStatus: v,
              value: p,
              onValueChange: h,
              onRetry: y,
              busy: g = !1,
            } = e,
            [x, k] = (0, n.useState)(null),
            j = (0, n.useRef)(!1),
            w = (0, n.useRef)(),
            C = (0, n.useMemo)(() => c.map((e) => e.id).join("\0"), [c]),
            N = !!(p && c.some((e) => e.id === p));
          (0, n.useLayoutEffect)(() => {
            var e;
            if (!r) {
              ((j.current = !1), (w.current = void 0));
              return;
            }
            (w.current !== C && (j.current = !1),
              "ready" === v &&
                !j.current &&
                N &&
                x &&
                (null == x ||
                  null == (e = x.scrollIntoView) ||
                  e.call(x, { block: "nearest" }),
                (j.current = !0),
                (w.current = C)));
          }, [N, v, r, C, x]);
          let U = (0, n.useCallback)(
              (e) => {
                a && r && !g && "ready" === v && h(e);
              },
              [a, r, g, v, h],
            ),
            S = "loading" === v ? (0, s.aL)() : null,
            E = "error" === v,
            L = "ready" === v && 0 === c.length;
          return (0, l.jsxs)(t.FE, {
            contentVersion: `${r}:${v}:${c.length}`,
            className: "overflow-x-hidden rounded-dreamina-control",
            style: { marginInline: 24 },
            "aria-busy": "loading" === v,
            "data-testid": "motion-picker-viewport",
            children: [
              S
                ? (0, l.jsx)("p", {
                    role: "status",
                    className: "sr-only",
                    children: S,
                  })
                : null,
              E
                ? (0, l.jsx)("div", {
                    className: "absolute inset-0",
                    children: (0, l.jsx)(d.V, { busy: g, onRetry: y }),
                  })
                : null,
              L
                ? (0, l.jsx)(i.ppr, { role: "status", title: (0, o.nY)() })
                : null,
              E || L
                ? null
                : (0, l.jsx)("div", {
                    className: "grid grid-cols-5",
                    style: { gap: 12, padding: 0 },
                    children:
                      "loading" === v
                        ? b.map((e) => (0, l.jsx)(f, {}, e))
                        : c.map((e) =>
                            (0, l.jsx)(
                              m,
                              {
                                option: e,
                                previewSource: u,
                                buttonRef: p === e.id ? k : void 0,
                                onSelect: U,
                                selected: p === e.id,
                                disabled: g,
                              },
                              e.id,
                            ),
                          ),
                  }),
            ],
          });
        });
    },
    27380(e, r, a) {
      var l = a(90561),
        n = a(87429),
        i = a(172),
        t = a(86971),
        o = a(70377);
      let s = (0, n.memo)(function (e) {
          let { src: r, fallbackSrc: a } = e;
          return (0, l.jsx)("span", {
            "aria-hidden": "true",
            className:
              "relative flex size-full items-center justify-center bg-dreamina-block-secondary-default",
            children: r || a ? (0, l.jsx)(d, { src: r, fallbackSrc: a }) : null,
          });
        }),
        d = (0, n.memo)(function (e) {
          let { src: r, fallbackSrc: a } = e,
            [t, o] = (0, n.useState)(),
            [s, d] = (0, n.useState)(),
            u = s && s.src === r && s.fallbackSrc === a ? s.urls : [],
            m = [r, a].find((e) => e && !u.includes(e)),
            f = (0, n.useCallback)((e) => o(e), []),
            b = (0, n.useCallback)(
              (e) => {
                (o((r) => (r === e ? void 0 : r)),
                  d((l) => ({
                    src: r,
                    fallbackSrc: a,
                    urls: [
                      ...new Set([
                        ...(l && l.src === r && l.fallbackSrc === a
                          ? l.urls
                          : []),
                        e,
                      ]),
                    ],
                  })));
              },
              [r, a],
            ),
            v = [...new Set([t, m].filter((e) => !!e))];
          return (0, l.jsxs)(l.Fragment, {
            children: [
              !t && m
                ? (0, l.jsx)(i.EAD, {
                    className:
                      "absolute inset-0 size-full from-dreamina-block-secondary-default via-dreamina-block-secondary-hover to-dreamina-block-secondary-default",
                  })
                : null,
              v.map((e) =>
                (0, l.jsx)(
                  c,
                  { src: e, visible: e === t, onReady: f, onFailed: b },
                  e,
                ),
              ),
            ],
          });
        }),
        c = (0, n.memo)(function (e) {
          let { src: r, visible: a, onReady: i, onFailed: t } = e,
            o = (0, n.useRef)(null),
            s = (0, n.useCallback)(() => t(r), [t, r]),
            d = (0, n.useCallback)(
              (e) => {
                let a = e.currentTarget,
                  l = () => {
                    o.current === a && (a.naturalWidth > 0 ? i(r) : t(r));
                  };
                "function" != typeof a.decode
                  ? l()
                  : a.decode().then(l, () => {
                      o.current === a && t(r);
                    });
              },
              [i, t, r],
            );
          return (0, l.jsx)("img", {
            ref: o,
            alt: "",
            crossOrigin: "anonymous",
            src: r,
            onError: s,
            onLoad: d,
            className: "absolute inset-0 size-full object-cover",
            style: { opacity: +!!a },
          });
        }),
        u = (0, n.memo)(function (e) {
          let {
              option: r,
              playing: a,
              activation: o = "pointer",
              onPlaybackError: d,
              onProgress: c,
            } = e,
            [u, f] = (0, n.useState)(() =>
              (0, i.Oeg)("u" < typeof window ? void 0 : window, !0),
            );
          (0, n.useEffect)(() => {
            let e = (0, i.T7S)(window, !0);
            if (!e) return;
            let r = () => f(e.matches);
            return (
              r(),
              e.addEventListener("change", r),
              () => e.removeEventListener("change", r)
            );
          }, []);
          let b = a && !u && (0, t.h)(o) && r.previewUrl;
          return (0, l.jsxs)("span", {
            "aria-hidden": "true",
            className:
              "relative flex size-full items-center justify-center bg-dreamina-block-secondary-default",
            children: [
              (0, l.jsx)(s, {
                src: r.coverUrl ?? r.thumbnailUrl,
                fallbackSrc: r.thumbnailUrl,
              }),
              b
                ? (0, l.jsx)(
                    m,
                    {
                      src: r.previewUrl,
                      poster: r.coverUrl ?? r.thumbnailUrl,
                      onPlaybackError: d,
                      onProgress: c,
                    },
                    r.previewUrl,
                  )
                : null,
            ],
          });
        });
      function m(e) {
        let { src: r, poster: a, onPlaybackError: i, onProgress: t } = e,
          s = (0, n.useRef)(null),
          [d, c] = (0, n.useState)("loading"),
          u = "failed" === d,
          m = (0, n.useCallback)(() => {
            (c("failed"), null == i || i());
          }, [i]),
          f = (0, n.useCallback)(() => {
            s.current &&
              "function" != typeof s.current.requestVideoFrameCallback &&
              c("playing");
          }, []),
          b = (0, n.useCallback)(() => {
            let e = s.current;
            e &&
              (null == t ||
                t(
                  Number.isFinite(e.duration) && e.duration > 0
                    ? e.currentTime / e.duration
                    : 0,
                ));
          }, [t]);
        return (
          (0, n.useEffect)(() => {
            let e,
              a = s.current;
            if (!a) return;
            let l = !1;
            return (
              "function" == typeof a.requestVideoFrameCallback &&
                (e = a.requestVideoFrameCallback(() => {
                  ((e = void 0), l || c("playing"));
                })),
              (a.src = r),
              a.play().catch(() => {
                l || m();
              }),
              () => {
                ((l = !0),
                  void 0 !== e && a.cancelVideoFrameCallback(e),
                  (0, o.BB)(a));
              }
            );
          }, [u, m, r]),
          u
            ? null
            : (0, l.jsx)("video", {
                ref: s,
                crossOrigin: "anonymous",
                src: r,
                poster: a,
                muted: !0,
                playsInline: !0,
                disablePictureInPicture: !0,
                loop: !0,
                preload: "metadata",
                onLoadedData: f,
                onTimeUpdate: b,
                onError: m,
                "aria-hidden": "true",
                className:
                  "pointer-events-none absolute inset-0 size-full object-cover",
                style: { opacity: +("playing" === d) },
              })
        );
      }
      a.d(r, {}, { d: s, u: u });
    },
    50018(e, r, a) {
      var l = a(87429);
      function n(e, r, a) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "camera_motion",
          i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          [t, o] = (0, l.useState)(0),
          s = (0, l.useRef)(),
          [d, c] = (0, l.useState)();
        (0, l.useEffect)(() => {
          if ((!a && !i) || !r || !e.hasPreviewVideo) return;
          let l = new AbortController(),
            t = !1,
            o = s.current === e;
          return (
            (s.current = void 0),
            r
              .resolveMetadata(e.id, { signal: l.signal, kind: n, fresh: o })
              .then(
                (a) => {
                  t ||
                    c({
                      option: e,
                      source: r,
                      kind: n,
                      ...a,
                      failed: !(null == a ? void 0 : a.url),
                    });
                },
                () => {
                  t || c({ option: e, source: r, kind: n, failed: !0 });
                },
              ),
            () => {
              ((t = !0), l.abort());
            }
          );
        }, [a, t, n, e, i, r]);
        let u = (0, l.useCallback)(
            async (a, l) => {
              if (!r) {
                if (e.previewUrl) return e.previewUrl;
                throw Error("Tool preset preview source unavailable");
              }
              let i = await r.resolveMetadata(e.id, {
                  signal: l.signal,
                  kind: n,
                  fresh: !0,
                }),
                t = null == i ? void 0 : i.url;
              if (!t) throw Error("Tool preset preview media unavailable");
              return (
                l.signal.aborted ||
                  c({ option: e, source: r, kind: n, ...i, failed: !1 }),
                t
              );
            },
            [n, e, r],
          ),
          m = (0, l.useCallback)(() => {
            ((s.current = e), c(void 0), o((e) => e + 1));
          }, [e]),
          f =
            (null == d ? void 0 : d.option) === e &&
            d.source === r &&
            d.kind === n
              ? d
              : void 0;
        return {
          retainedUrl: null == f ? void 0 : f.url,
          resolutionUrls: null == f ? void 0 : f.resolutionUrls,
          coverUrl: null == f ? void 0 : f.coverUrl,
          loading: (a || i) && !!(r && e.hasPreviewVideo) && !f,
          url: a ? (e.previewUrl ?? (null == f ? void 0 : f.url)) : void 0,
          failed: a && (null == f ? void 0 : f.failed) === !0,
          retry: m,
          recover: u,
        };
      }
      a.d(r, { v: () => n });
    },
  },
]);
