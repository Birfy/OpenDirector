"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [1039],
  {
    49090(e, a, t) {
      t.d(a, { createCanvasCreationToolbarFeatureComponent: () => D });
      var l = t(90561),
        n = t(87429),
        i = t(90892),
        s = t(31327),
        o = t(66876),
        r = t(69335),
        c = t(2221),
        d = t(32273),
        u = t(29558),
        b = t(88914),
        v = t(92917),
        p = t(60872),
        m = t(55793),
        g = t(172),
        f = t(11347),
        x = t(60794),
        k = t(29671),
        S = t(74841),
        y = t(37692),
        C = t(83281),
        h = t(61210),
        j = t(14596),
        R = t(54713);
      let E = (0, n.lazy)(async () => ({
          default: (
            await Promise.all([
              t.e(1043),
              t.e(2269),
              t.e(1455),
              t.e(4382),
              t.e(8766),
            ]).then(t.bind(t, 12221))
          ).CanvasPaletteCreationPicker,
        })),
        A = (0, n.lazy)(async () => ({
          default: (
            await Promise.all([t.e(2269), t.e(1455), t.e(625)]).then(
              t.bind(t, 26589),
            )
          ).CanvasStylePickerDialog,
        })),
        w = (0, n.memo)(function (e) {
          let { canvas: a } = e,
            { writeChromeVisible: t } = (0, x.A1)(),
            n = (0, d.y)(t ? a.toolPresets : void 0),
            i = t && !0 === n,
            s = (0, S.Q)(a, i),
            o = (0, k.i)(a, i),
            r = (0, h.a)(a, i),
            c = (0, y.T)(a, i);
          return t && !1 !== n
            ? void 0 !== n && s
              ? (0, l.jsx)(F, {
                  canvas: a,
                  runtime: s,
                  cameraRuntime: r,
                  paletteRuntime: o,
                  motionRuntime: c,
                })
              : (0, l.jsx)(v.sT, {
                  icon: (0, l.jsx)(g.jT2, { size: 20, showIndicator: !1 }),
                })
            : null;
        }),
        F = (0, n.memo)(function (e) {
          let {
              canvas: a,
              runtime: t,
              cameraRuntime: i,
              paletteRuntime: s,
              motionRuntime: r,
            } = e,
            d = (0, u.u)(),
            [x, k] = (0, n.useState)(!1),
            [S, y] = (0, n.useState)(null),
            [h, w] = (0, n.useState)(!1),
            { isUnseen: F, markSeen: L } = (0, b.c$)({
              id: "cinema-studio",
              version: 1,
            }),
            N = (0, n.useRef)(null),
            T = (0, n.useSyncExternalStore)(
              t.subscribe,
              t.getSnapshot,
              t.getSnapshot,
            ),
            _ = (0, n.useSyncExternalStore)(
              (null == i ? void 0 : i.settings.subscribe) ?? P,
              i ? () => !!i.settings.getSnapshot().selection : U,
              U,
            ),
            O = (0, n.useSyncExternalStore)(
              (null == s ? void 0 : s.subscribe) ?? P,
              s ? () => !!s.getSnapshot().session : U,
              U,
            ),
            D = !!s,
            K = (0, n.useSyncExternalStore)(
              (null == r ? void 0 : r.subscribe) ?? P,
              r ? () => !!r.getSnapshot().session : U,
              U,
            ),
            V = !!r,
            I = !!i,
            M = (0, n.useCallback)(() => {
              var e;
              let t =
                null == (e = a.actions.addToolNode) ? void 0 : e.getState();
              return (null == t ? void 0 : t.available)
                ? "available"
                : ((null == t ? void 0 : t.reason) ?? "notEditingReady");
            }, [a.actions]),
            B = (0, n.useSyncExternalStore)(
              a.subscribeEditAvailability,
              M,
              () => "notEditingReady",
            ),
            z = "available" === B,
            Q = (0, n.useCallback)(() => "available" === M(), [M]),
            $ = (0, g.qwp)({
              activeValue: !!T.session || null,
              animateExit: z,
            }),
            H = (0, g.qwp)({ activeValue: !!O || null, animateExit: z }),
            W = (0, n.useCallback)(
              (e) => {
                (!e || Q()) &&
                  (k(e),
                  e || w(!1),
                  e &&
                    (L(),
                    x ||
                      null == d ||
                      d.declare({
                        surface: "creation",
                        gesture: "show",
                        menu: "cinemaStudio",
                        position: "side_bar",
                      })));
              },
              [Q, L, d, x],
            ),
            q = (0, n.useCallback)((e) => {
              0 !== e.button || e.ctrlKey || e.preventDefault();
            }, []),
            G = (0, n.useCallback)(
              (e) => {
                0 !== e.button || e.ctrlKey || W(!x);
              },
              [W, x],
            ),
            Z = z && (x || !!T.session || _ || O || K);
          (0, v.vZ)(Z, N);
          let J = (0, n.useCallback)(
              (e) => {
                ((null == i ? void 0 : i.settings.getSnapshot().selection) ||
                  t.getSnapshot().session ||
                  (null == s ? void 0 : s.getSnapshot().session) ||
                  (null == r ? void 0 : r.getSnapshot().session)) &&
                  e.preventDefault();
              },
              [t, i, s, r],
            ),
            X = (0, n.useCallback)(() => {
              (w(!1), y(null));
            }, []),
            Y = (0, n.useCallback)(() => {
              Q() &&
                (X(),
                null == d ||
                  d.declare({
                    surface: "creation",
                    gesture: "select",
                    position: "side_bar",
                    itemKind: "style",
                  }),
                t.open(a.getViewportCenter(), "sidebar"));
            }, [a, X, t, Q, d]),
            ee = (0, n.useCallback)(() => {
              Q() &&
                (X(),
                null == d ||
                  d.declare({
                    surface: "creation",
                    gesture: "select",
                    position: "side_bar",
                    itemKind: "palette",
                  }),
                null == s || s.open(a.getViewportCenter(), "sidebar"));
            }, [a, X, s, Q, d]),
            ea = (0, n.useCallback)(() => {
              Q() &&
                (X(),
                null == d ||
                  d.declare({
                    surface: "creation",
                    gesture: "select",
                    position: "side_bar",
                    itemKind: "camera",
                  }),
                null == i || i.open(a.getViewportCenter(), "sidebar"));
            }, [i, a, X, Q, d]),
            et = (0, n.useCallback)(() => {
              Q() &&
                r &&
                (X(),
                null == d ||
                  d.declare({
                    surface: "creation",
                    gesture: "select",
                    position: "side_bar",
                    itemKind: "camera_motion",
                  }),
                null == r || r.open(a.getViewportCenter(), "sidebar"));
            }, [r, a, X, Q, d]);
          return (
            (0, n.useEffect)(() => {
              z || k(!1);
            }, [z]),
            (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsxs)(p.rI, {
                  open: !!(x && z),
                  onOpenChange: W,
                  children: [
                    (0, l.jsx)(p.ty, {
                      asChild: !0,
                      onPointerDown: q,
                      onClick: G,
                      children: (0, l.jsx)(v.BO, {
                        ref: N,
                        value: "cinemaStudio",
                        label: (0, m.yr)(),
                        "aria-pressed": x || !!T.session || _ || O || K,
                        disabled: !z,
                        disabledReason: z
                          ? void 0
                          : "permissionDenied" === B
                            ? (0, o.mhw)()
                            : (0, o.CeR)(),
                        icon: (0, l.jsx)(g.jT2, { size: 20, showIndicator: F }),
                      }),
                    }),
                    (0, l.jsx)(g.Bcw, {
                      delayDuration: 0,
                      children: (0, l.jsxs)(g.m_M, {
                        open: !!(x && z && h),
                        disableHoverableContent: !0,
                        children: [
                          (0, l.jsx)(p.SQ, {
                            motion: "menu",
                            side: "right",
                            align: "start",
                            sideOffset: 8,
                            size: "medium",
                            appearance: "actionList",
                            onCloseAutoFocus: J,
                            children: (0, l.jsx)(g.k$k, {
                              asChild: !0,
                              children: (0, l.jsxs)("div", {
                                onPointerLeave: () => w(!1),
                                children: [
                                  (0, l.jsx)(p.lp, { children: (0, m.yr)() }),
                                  j.Sz.map((e) =>
                                    (0, l.jsxs)(
                                      p._2,
                                      {
                                        onPointerMove: () => {
                                          (y(e), w(!0));
                                        },
                                        onFocus: () => {
                                          (y(e), w(!0));
                                        },
                                        className:
                                          "text-dreamina-cn-13-relaxed",
                                        disabled:
                                          "style" !== e &&
                                          ("camera" === e
                                            ? !I
                                            : "palette" === e
                                              ? !D
                                              : "motion" !== e || !V),
                                        "aria-description":
                                          "style" === e ||
                                          ("camera" === e && I) ||
                                          ("palette" === e && D) ||
                                          ("motion" === e && V)
                                            ? void 0
                                            : (0, m._Q)(),
                                        onSelect:
                                          "style" === e
                                            ? Y
                                            : "camera" === e
                                              ? ea
                                              : "palette" === e
                                                ? ee
                                                : "motion" === e
                                                  ? et
                                                  : void 0,
                                        children: [
                                          (0, l.jsx)(j.MW, {
                                            kind: e,
                                            size: 16,
                                          }),
                                          (0, m.XG)(e),
                                        ],
                                      },
                                      e,
                                    ),
                                  ),
                                ],
                              }),
                            }),
                          }),
                          S
                            ? (0, l.jsx)(f.VL, {
                                alignOffset: -4,
                                ...(0, R.w)(S),
                                active: !!(x && z && h),
                                onEscapeKeyDown: () => w(!1),
                              })
                            : null,
                        ],
                      }),
                    }),
                  ],
                }),
                $.mounted
                  ? (0, l.jsx)(n.Suspense, {
                      fallback: null,
                      children: (0, l.jsx)(A, {
                        previewSource: a.toolPreviews,
                        runtime: t,
                        restoreFocusRef: N,
                        onCloseAutoFocus: $.completeExit,
                      }),
                    })
                  : null,
                s && H.mounted
                  ? (0, l.jsx)(n.Suspense, {
                      fallback: null,
                      children: (0, l.jsx)(E, {
                        runtime: s,
                        library: a.paletteLibrary,
                        canWrite: Q,
                        restoreFocusRef: N,
                        onCloseAutoFocus: H.completeExit,
                      }),
                    })
                  : null,
                r
                  ? (0, l.jsx)(C.S, {
                      previewSource: a.toolPreviews,
                      runtime: r,
                      restoreFocusRef: N,
                    })
                  : null,
                i && a.toolPresets
                  ? (0, l.jsx)(n.Suspense, {
                      fallback: null,
                      children: (0, l.jsx)(c.g, {
                        previewSource: a.toolPreviews,
                        runtime: i.settings,
                        catalog: a.toolPresets,
                        restoreFocusRef: N,
                      }),
                    })
                  : null,
              ],
            })
          );
        });
      function U() {
        return !1;
      }
      function P() {
        return () => void 0;
      }
      var L = t(65866),
        N = t(8621);
      let T = {
        assetLibrary: g.eun,
        audio: g.ck3,
        directorStage: g.QAx,
        image: g.d6D,
        localUploads: g.n4Y,
        subject: g.e2V,
        text: g.RiM,
        timeline: g.hu1,
        video: g.LeW,
      };
      function _(e) {
        let {
            announcement: a,
            assetLibraryTriggerRef: t,
            items: i,
            localUploadsTriggerRef: s,
          } = e,
          r = i
            .flatMap((e) => ("separator" === e.kind ? [] : [e.label]))
            .join("\0"),
          c = (0, n.useMemo)(
            () =>
              (function (e) {
                let {
                  announcement: a,
                  assetLibraryTriggerRef: t,
                  items: n,
                  labelMeasurementKey: i,
                  localUploadsTriggerRef: s,
                } = e;
                return (0, l.jsx)(v.QI, {
                  announcement: a,
                  defaultActiveValue: "text",
                  label: (0, o.Ug_)(),
                  labelMeasurementKey: i,
                  onWheelCapture: N.pE,
                  children: n.map((e) =>
                    (function (e, a, t) {
                      var n, i, s;
                      let o;
                      if ("separator" === e.kind)
                        return (0, l.jsx)(v.Js, {}, e.kind);
                      if ("cinemaStudio" === e.kind)
                        return (0, l.jsx)(
                          "span",
                          { className: "contents", children: e.content },
                          e.kind,
                        );
                      let r =
                          ((n = e.kind),
                          (i = a),
                          (s = t),
                          "assetLibrary" === n
                            ? i
                            : "localUploads" === n
                              ? s
                              : void 0),
                        c = ((o = T[e.kind]), (0, l.jsx)(o, {}));
                      if (e.nonOperational)
                        return (0, l.jsx)(
                          v.BO,
                          {
                            decorative: !0,
                            disabled: !0,
                            icon: c,
                            label: "",
                            value: e.kind,
                          },
                          e.kind,
                        );
                      let d = e.badge ? (0, l.jsx)(g.l18, {}) : void 0;
                      return e.filePicker
                        ? (0, l.jsx)(
                            v.BO,
                            {
                              ref: r,
                              "data-toolbar-item": e.kind,
                              badge: d,
                              disabled: e.disabled,
                              disabledReason: e.disabledReason,
                              filePicker: e.filePicker,
                              icon: c,
                              label: e.label,
                              value: e.kind,
                            },
                            e.kind,
                          )
                        : (0, l.jsx)(
                            v.BO,
                            {
                              ref: r,
                              "data-toolbar-item": e.kind,
                              badge: d,
                              disabled: e.disabled,
                              disabledReason: e.disabledReason,
                              dismissRevealOnClick: e.dismissRevealOnClick,
                              icon: c,
                              label: e.label,
                              nonOperational: e.nonOperational,
                              onClick: e.onClick,
                              preserveCollapsedOnFocusRestore:
                                e.preserveCollapsedOnFocusRestore,
                              type: "button",
                              value: e.kind,
                            },
                            e.kind,
                          );
                    })(e, t, s),
                  ),
                });
              })({
                announcement: a,
                assetLibraryTriggerRef: t,
                items: i,
                labelMeasurementKey: r,
                localUploadsTriggerRef: s,
              }),
            [a, t, i, r, s],
          );
        return ((0, v.V5)({ surface: c }), (0, v.fj)() ? null : c);
      }
      let O = "sidebar";
      function D(e) {
        let {
            assetLibraryConfig: a,
            assetLibraryService: t,
            creationEntryRuntime: c,
            localUploadsEnabled: d,
          } = e,
          b =
            c ??
            new L.q({ assetLibraryAvailable: !!t, localUploadsEnabled: d }),
          v = null;
        return (
          c ||
            (v = (0, r.createCanvasCreationEntryHostFeatureComponent)({
              assetLibraryConfig: a,
              assetLibraryService: t,
              runtime: b,
            })),
          function (e) {
            var a, t, r, c, d;
            let p,
              g,
              f,
              x,
              k,
              { api: S } = e,
              y = (0, n.useRef)(null),
              C = (0, n.useRef)(null),
              h = (0, n.useCallback)(
                () =>
                  b.openAssetLibrary({
                    focusTarget: y.current,
                    placement: S.canvas.getViewportCenter(),
                    canvasPlacement: { kind: "below_all" },
                  }),
                [S],
              );
            ((function (e) {
              let [, a] = (0, n.useState)(0);
              (0, n.useEffect)(() => e.subscribe(() => a((e) => e + 1)), [e]);
            })(S.canvas.actions),
              (a = S),
              (p = (0, n.useCallback)(
                (e) => a.canvas.subscribeEditAvailability(e),
                [a.canvas],
              )),
              (g = (0, n.useCallback)(() => {
                let e = a.canvas.getEditAvailability().local;
                return e.available ? "available" : e.reason;
              }, [a.canvas])),
              (0, n.useSyncExternalStore)(p, g, g));
            let j = (0, n.useSyncExternalStore)(
                S.canvas.creation.subscribe,
                S.canvas.creation.getCatalog,
                S.canvas.creation.getCatalog,
              ),
              R = (0, n.useSyncExternalStore)(
                b.subscribe,
                b.getSnapshot,
                b.getSnapshot,
              ),
              E = (function (e) {
                let {
                  api: a,
                  localUpload: t,
                  localUploadsEnabled: l,
                  triggerRef: i,
                } = e;
                return (0, n.useMemo)(() => {
                  let e = () =>
                    (function (e) {
                      if (!e.localUploadsEnabled)
                        return {
                          code: "fileUploadUnavailable",
                          message: (0, o.cT8)(),
                        };
                      let a =
                        e.api.canvas.actions.startLocalFileImports.getState();
                      return a.available
                        ? e.localUpload &&
                          "ready" === e.localUpload.policyStatus &&
                          e.localUpload.pickerPolicy
                          ? null
                          : {
                              code: "assetPolicyUnavailable",
                              message: (0, o.cT8)(),
                            }
                        : { code: a.reason, message: V(a.reason) };
                    })({ api: a, localUpload: t, localUploadsEnabled: l });
                  return {
                    getState: () => {
                      let a = e();
                      return a
                        ? {
                            available: !1,
                            reason: `canvas.${a.code}`,
                            result: "blocked",
                          }
                        : { available: !0 };
                    },
                    execute: () => {
                      let a = e();
                      if (a)
                        return {
                          message: a.message,
                          reason: `canvas.${a.code}`,
                          status: "blocked",
                        };
                      let t = i.current;
                      return t
                        ? (t.click(), { status: "executed" })
                        : {
                            reason: "canvas.filePickerUnavailable",
                            status: "blocked",
                          };
                    },
                    subscribe: K,
                  };
                }, [a, t, l, i]);
              })({
                api: S,
                localUpload: R.localUpload,
                localUploadsEnabled: R.localUploadsEnabled,
                triggerRef: C,
              });
            (0, s.lu)("canvas.addFile", E);
            let A =
                ((t = b),
                (f = (0, n.useRef)(!1)),
                (0, n.useLayoutEffect)(
                  () => (
                    (f.current = !0),
                    () => {
                      f.current = !1;
                    }
                  ),
                  [],
                ),
                (0, n.useCallback)(() => {
                  let e = t.createFailureMessageSession();
                  return (a) => {
                    f.current && e(a);
                  };
                }, [t])),
              F = S.canvas.gestures;
            (0, n.useEffect)(
              () =>
                null == F
                  ? void 0
                  : F.declare({
                      surface: "creation",
                      gesture: "show",
                      position: "side_bar",
                    }),
              [F],
            );
            let U = (k = (d = {
                actionAdapters:
                  ((r = S),
                  (c = A),
                  {
                    addImageNode: (x = (e) => {
                      let {
                        action: a,
                        commandFailedReason: t,
                        executeAction: l,
                      } = e;
                      return {
                        getState: () => a.getState(),
                        getDisabledReason: () => {
                          let e = a.getState();
                          if (!e.available) return V(e.reason);
                        },
                        execute: async () => {
                          let e = c(),
                            a = await l();
                          e(a.ok ? null : I(a.reason, t()));
                        },
                      };
                    })({
                      action: r.canvas.actions.addImageNode,
                      commandFailedReason: o.Ubn,
                      executeAction: () =>
                        r.canvas.actions.addImageNode.execute(
                          "user",
                          void 0,
                          O,
                        ),
                    }),
                    addSubjectNode: x({
                      action: r.canvas.actions.addSubjectNode,
                      commandFailedReason: o.Ubn,
                      executeAction: () =>
                        r.canvas.actions.addSubjectNode.execute(
                          {},
                          void 0,
                          "user",
                          void 0,
                          void 0,
                          O,
                        ),
                    }),
                    addTextNode: x({
                      action: r.canvas.actions.addTextNode,
                      commandFailedReason: o.CeR,
                      executeAction: () =>
                        r.canvas.actions.addTextNode.execute(
                          { title: "", text: "" },
                          void 0,
                          "user",
                          O,
                        ),
                    }),
                    addTimelineNode: x({
                      action: r.canvas.actions.addTimelineNode,
                      commandFailedReason: o.t4g,
                      executeAction: () =>
                        r.canvas.actions.addTimelineNode.execute(
                          void 0,
                          "user",
                          void 0,
                          O,
                        ),
                    }),
                    addVideoNode: x({
                      action: r.canvas.actions.addVideoNode,
                      commandFailedReason: o.xIM,
                      executeAction: () =>
                        r.canvas.actions.addVideoNode.execute(
                          "user",
                          void 0,
                          O,
                        ),
                    }),
                    addAudioNode: x({
                      action: r.canvas.actions.addAudioNode,
                      commandFailedReason: o.Qwb,
                      executeAction: () =>
                        r.canvas.actions.addAudioNode.execute(
                          "user",
                          void 0,
                          O,
                        ),
                    }),
                  }),
                api: S,
                assetLibraryAvailable: R.assetLibraryAvailable,
                catalog: j,
                localUploadsEnabled: R.localUploadsEnabled,
                localUpload: R.localUpload,
                openAssetLibrary: h,
                createFailureMessageSession: A,
                gestures: F,
              }).catalog.flatMap((e) => {
                if ("separator" === e.kind) return [{ kind: "separator" }];
                let a = (function (e, a) {
                  var t, l, n, s, r, c, d, u, b, v, p, m;
                  let g = (function (e) {
                    switch (e) {
                      case "text":
                        return { label: (0, o.dZB)() };
                      case "image":
                        return { label: (0, o.T30)() };
                      case "video":
                        return { label: (0, o.dbG)() };
                      case "subject":
                        return { label: (0, o.XK)() };
                      case "audio":
                        return { label: (0, o.wRR)() };
                      case "timeline":
                        return { label: (0, o.NBk)() };
                      case "directorStage":
                        return { badge: (0, o.vKJ)(), label: (0, o.lAD)() };
                      case "assetLibrary":
                        return { label: (0, o.dn)() };
                      case "localUploads":
                        return { label: (0, o.rMG)() };
                      default:
                        return (0, i.xb)(
                          e,
                          `Unsupported Canvas creation item: ${String(e)}`,
                        );
                    }
                  })(e.itemKind);
                  if (!g) return null;
                  if ("addExternalNode" === e.actionId) {
                    let i, s, r;
                    return (
                      (t = e),
                      (l = g),
                      (r = (s = (i = (n = a).api.canvas.actions
                        .addExternalNode).getState(t.externalType)).available
                        ? void 0
                        : V(s.reason)),
                      {
                        badge: l.badge,
                        kind: t.itemKind,
                        label: l.label,
                        dismissRevealOnClick: !0,
                        disabled: !!r,
                        disabledReason: r,
                        onClick: async () => {
                          let e = n.createFailureMessageSession(),
                            a = await i.execute(
                              { externalType: t.externalType, title: l.label },
                              void 0,
                              "user",
                              O,
                            );
                          e(a.ok ? null : I(a.reason, (0, o.Ubn)()));
                        },
                      }
                    );
                  }
                  if (e.actionId) {
                    let t, l;
                    return (
                      (s = e.itemKind),
                      (r = g),
                      (t = (c = a.actionAdapters[e.actionId]).getState()),
                      (l =
                        c.getDisabledReason() ??
                        (t.available ? void 0 : V(t.reason))),
                      {
                        kind: s,
                        label: r.label,
                        dismissRevealOnClick: !0,
                        disabled: !!l,
                        disabledReason: l,
                        onClick: c.execute,
                      }
                    );
                  }
                  if ("assetLibrary" === e.itemKind) {
                    let e, t;
                    return a.assetLibraryAvailable
                      ? ((d = g),
                        (e = (u = a).api.canvas.getEditAvailability().local),
                        (t =
                          ((b = u.assetLibraryAvailable),
                          (v = e),
                          b
                            ? v.available
                              ? void 0
                              : "notEditable" === v.reason
                                ? (0, o.mhw)()
                                : (0, o.CeR)()
                            : (0, o.xZ0)())),
                        {
                          kind: "assetLibrary",
                          label: d.label,
                          disabled: !!t,
                          disabledReason: t,
                          onClick: u.openAssetLibrary,
                          preserveCollapsedOnFocusRestore: !0,
                        })
                      : null;
                  }
                  if ("localUploads" === e.itemKind) {
                    let e, t, l, n, i, s, r;
                    return a.localUploadsEnabled
                      ? ((p = g),
                        (l = (m = a).localUpload),
                        (n =
                          m.api.canvas.actions.startLocalFileImports.getState())
                          .available || (e = V(n.reason)),
                        ((null == l ? void 0 : l.policyStatus) === "ready" &&
                          l.pickerPolicy) ||
                          (t = (0, o.cT8)()),
                        (i = e ?? t),
                        (s = null == l ? void 0 : l.pickerPolicy),
                        (r = {
                          kind: "localUploads",
                          label: p.label,
                          disabled: !!i,
                          disabledReason: i,
                        }),
                        s && l
                          ? {
                              ...r,
                              filePicker: {
                                accept: s.accept,
                                maxFileSize: s.maxFileSizeBytes,
                                multiple: !0,
                                onFilesChange: (e) =>
                                  l.select(e, m.api.canvas.getViewportCenter()),
                                onFileFiltered: l.notifyFileTooLarge,
                              },
                            }
                          : r)
                      : null;
                  }
                  return "directorStage" === e.itemKind
                    ? { kind: e.itemKind, label: g.label, nonOperational: !0 }
                    : null;
                })(e, d);
                return a
                  ? [
                      (function (e, a) {
                        if (!a) return e;
                        let t = () =>
                            a.declare({
                              surface: "creation",
                              gesture: "select",
                              position: "side_bar",
                              itemKind: e.kind,
                            }),
                          l = { ...e };
                        return (
                          e.onClick &&
                            (l.onClick = function () {
                              for (
                                var a,
                                  l = arguments.length,
                                  n = Array(l),
                                  i = 0;
                                i < l;
                                i++
                              )
                                n[i] = arguments[i];
                              return (
                                t(),
                                null == (a = e.onClick)
                                  ? void 0
                                  : a.call(e, ...n)
                              );
                            }),
                          e.filePicker &&
                            (l.filePicker = {
                              ...e.filePicker,
                              onFilesChange: (a) => {
                                var l;
                                (t(),
                                  null == (l = e.filePicker) ||
                                    l.onFilesChange(a));
                              },
                            }),
                          l
                        );
                      })(a, d.gestures),
                    ]
                  : [];
              })).filter((e, a) => {
                var t;
                return (
                  "separator" !== e.kind ||
                  (a > 0 &&
                    a < k.length - 1 &&
                    (null == (t = k[a - 1]) ? void 0 : t.kind) !== "separator")
                );
              }),
              P = U.findIndex(
                (e) => "directorStage" === e.kind || "separator" === e.kind,
              ),
              L = P < 0 ? U.length : P,
              N =
                S.canvas.actions.addToolNode && S.canvas.toolPresets
                  ? [
                      ...U.slice(0, L),
                      {
                        kind: "cinemaStudio",
                        label: (0, m.yr)(),
                        content: (0, l.jsx)(u.$, {
                          gestures: F,
                          children: (0, l.jsx)(w, { canvas: S.canvas }),
                        }),
                      },
                      ...U.slice(L),
                    ]
                  : U;
            return (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(_, {
                  announcement: R.announcement ?? "",
                  assetLibraryTriggerRef: y,
                  items: N,
                  localUploadsTriggerRef: C,
                }),
                v ? (0, l.jsx)(v, { api: S }) : null,
              ],
            });
          }
        );
      }
      function K() {
        return () => void 0;
      }
      function V(e) {
        return "experimentDisabled" === e
          ? (0, o.u7M)()
          : "permissionDenied" === e
            ? (0, o.mhw)()
            : (0, o.CeR)();
      }
      function I(e, a) {
        return "permissionDenied" === e
          ? (0, o.mhw)()
          : "commandFailed" === e
            ? a
            : "historyUnavailable" === e
              ? (0, o.oY9)()
              : (0, o.CeR)();
      }
    },
  },
]);
