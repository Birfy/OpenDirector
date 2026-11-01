"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [9725],
  {
    96572(e, r, t) {
      var n = t(94133);
      function a(e, r) {
        return { x: e.x - r.width / 2, y: e.y - r.height / 2 };
      }
      function i(e, r, t) {
        let a = (0, n._)(r.width, r.height).find((e) => e.type === t);
        if (!a || void 0 === a.width || void 0 === a.height)
          throw Error(`Missing ${t} Canvas node handle geometry`);
        return { x: e.x - a.x - a.width / 2, y: e.y - a.y - a.height / 2 };
      }
      t.d(r, { c: () => i, x: () => a });
    },
    94188(e, r, t) {
      var n = t(90561),
        a = t(87429),
        i = t(77094),
        o = t(90169),
        d = t(31107),
        l = t(74111),
        s = t(4081),
        u = t(96572),
        c = t(28065),
        g = t(93998),
        p = t(40627),
        m = t(44722),
        h = t(4030);
      let f = (0, a.lazy)(d.Qo);
      function v(e) {
        var r, t, i;
        let {
            authoringAllowed: o,
            currentVersionId: s,
            nodeId: u,
            onAdoptVersion: c,
            onOpenChange: p,
            projectId: m,
            title: h,
          } = e,
          v = (0, a.useContext)(g.Nf),
          y = (0, a.useMemo)(() => {
            var e;
            let r =
              null == v || null == (e = v.getCanvasReporting())
                ? void 0
                : e.analytics;
            return r
              ? (e) => {
                  r.reportDirectorStageInteraction(e);
                }
              : void 0;
          }, [v]);
        return (0, n.jsx)(a.Suspense, {
          fallback: (0, n.jsx)(d.Ay, { title: h, onOpenChange: p }),
          children: (0, n.jsx)(I, {
            children: (0, n.jsx)(w, {
              sourceNodeId: u,
              children: (0, n.jsx)(d.V8, {
                facts: null == v ? void 0 : v.facts,
                projectId: m,
                nodeId: u,
                children: (0, n.jsx)(f, {
                  logger:
                    null == v ||
                    null == (i = v.featuresApi) ||
                    null == (t = i.app) ||
                    null == (r = t.observability)
                      ? void 0
                      : r.logger,
                  canEdit: o,
                  nodeId: u,
                  onAdoptVersion: c,
                  onOpenChange: p,
                  open: !0,
                  projectId: m,
                  readContext:
                    "u" < typeof window
                      ? l.K1
                      : (0, l.mW)(new URLSearchParams(window.location.search)),
                  title: h,
                  versionId: s,
                  onInteraction: y,
                }),
              }),
            }),
          }),
        });
      }
      function I(e) {
        let { children: r } = e;
        return null === (0, a.useContext)(g.Nf)
          ? (0, n.jsx)(n.Fragment, { children: r })
          : (0, n.jsx)(y, { children: r });
      }
      function y(e) {
        let { children: r } = e,
          t = (0, g.FY)(),
          i = (0, a.useMemo)(
            () => ({
              createSession() {
                let e = t.featuresApi;
                if (!e)
                  throw Error(
                    "Canvas features must be ready before opening Director Stage",
                  );
                let r = e.canvas.search.createSession();
                return (r.setActive(!0), r.selectTab("image"), r);
              },
            }),
            [t],
          ),
          o = (0, g.sL)(M),
          l = (0, a.useMemo)(() => o.filter(D), [o]),
          s = (0, a.useMemo)(() => l.map((e) => e.data.resourceId ?? ""), [l]),
          u = (0, p.cA)(s),
          c = (0, a.useMemo)(
            () =>
              (0, d.o7)(
                l.map((e, r) => {
                  var t, n, a, i, o, d, l, s;
                  return (
                    (t = e),
                    (n = u[r]),
                    {
                      nodeId: t.id,
                      title: t.data.title,
                      resourceId: t.data.resourceId,
                      storageUri:
                        null == n || null == (a = n.image) ? void 0 : a.uri,
                      url: (0, h.gn)(null == n ? void 0 : n.urls),
                      backgroundMode:
                        (null == n ||
                        null == (o = n.image) ||
                        null == (i = o.gen)
                          ? void 0
                          : i.mode) === 11
                          ? "panorama"
                          : "plane",
                      thumbnailUrl:
                        (0, p.kd)(null == n ? void 0 : n.urls) ?? void 0,
                      format:
                        null == n || null == (d = n.image) ? void 0 : d.format,
                      width:
                        null == n || null == (l = n.image) ? void 0 : l.width,
                      height:
                        null == n || null == (s = n.image) ? void 0 : s.height,
                    }
                  );
                }),
              ),
            [l, u],
          );
        return (0, n.jsx)(d.yi, {
          value: i,
          children: (0, n.jsx)(d.pm, { value: c, children: r }),
        });
      }
      function w(e) {
        let { children: r, sourceNodeId: t } = e;
        return null === (0, a.useContext)(g.Nf)
          ? (0, n.jsx)(n.Fragment, { children: r })
          : (0, n.jsx)(x, { sourceNodeId: t, children: r });
      }
      function x(e) {
        let { children: r, sourceNodeId: t } = e,
          i = (0, g.FY)(),
          o = (0, a.useMemo)(() => {
            var e;
            return (
              (e = { editor: i, sourceNodeId: t }),
              {
                saveCaptures: (r) => k({ ...e, files: r, mediaKind: "image" }),
                writeVideos: (r) => k({ ...e, files: r, mediaKind: "video" }),
                placeCaptures: (r) => b({ ...e, captures: r }),
              }
            );
          }, [i, t]);
        return (0, n.jsx)(d.L5, { value: o, children: r });
      }
      async function k(e) {
        let r, t, n;
        if (0 === e.files.length) return [];
        let a = (0, c.IW)(e.editor);
        if (!a.available) return _(e.files.length, (0, d.IH)(a.reason));
        try {
          r = await (0, m.oq)(
            e.files.map((r) => ({ file: r, mediaKind: e.mediaKind })),
          );
        } catch {
          return _(e.files.length, "failed");
        }
        let i = (0, c.IW)(e.editor);
        if (!i.available) return _(e.files.length, (0, d.IH)(i.reason));
        let o = "video" === e.mediaKind ? C(e.editor, e.sourceNodeId, r) : [];
        try {
          t = e.editor.startDeferredMediaUploads(
            e.files.map((t, n) => ({
              file: t,
              layoutSize: r[n] ?? s.ZL[e.mediaKind],
              mediaKind: e.mediaKind,
              placement: o[n] ?? e.editor.getCanvasViewportCenter(),
            })),
            "user",
          );
        } catch {
          return _(e.files.length, "failed");
        }
        let l = t.map((e) => {
          let { nodeId: r } = e;
          return r;
        });
        try {
          let r = (n = await Promise.all(
            t.map((e) => {
              let { terminal: r } = e;
              return r;
            }),
          )).flatMap((e, r) =>
            "succeeded" === e.status && l[r] ? [l[r]] : [],
          );
          if (0 === r.length)
            return n.map((e) =>
              "succeeded" === e.status
                ? { ok: !1, reason: "unresolved" }
                : { ok: !1, reason: (0, d.Er)(e.status) },
            );
          let a = (0, c.IW)(e.editor);
          if (!a.available)
            return (
              e.editor.releaseDeferredMediaUploads(r),
              _(e.files.length, (0, d.IH)(a.reason))
            );
          let i = e.editor.readDeferredMediaUploadsReady(r).flatMap((r) => {
              var t, n, a, i;
              let o =
                "image" === e.mediaKind
                  ? (0, d.Y1)({
                      resourceId: r.resource.resource_id,
                      storageUri:
                        null == (t = r.resource.image) ? void 0 : t.uri,
                      url: (0, h.gn)(r.resource.urls),
                      width: null == (n = r.resource.image) ? void 0 : n.width,
                      height:
                        null == (a = r.resource.image) ? void 0 : a.height,
                    })
                  : (0, d.rD)({
                      nodeId: r.nodeId,
                      resourceId: r.resource.resource_id,
                      videoId: null == (i = r.resource.video) ? void 0 : i.vid,
                    });
              return o ? [{ asset: o, item: r }] : [];
            }),
            o = i.map((e) => {
              let { item: r } = e;
              return r.nodeId;
            }),
            s = r.filter((e) => !o.includes(e));
          if ((e.editor.releaseDeferredMediaUploads(s), 0 === i.length))
            return n.map((e) =>
              "succeeded" === e.status
                ? { ok: !1, reason: "unresolved" }
                : { ok: !1, reason: (0, d.Er)(e.status) },
            );
          if ("video" === e.mediaKind) {
            let r = await e.editor.actions.createConnectedNodes({
                items: i.map((r) => {
                  let { item: t } = r;
                  return {
                    nodeId: t.nodeId,
                    connection: {
                      edgeType: "post_edit_provenance",
                      createdNodeRole: "target",
                      sourceNodeIds: [e.sourceNodeId],
                    },
                    node: {
                      initialTitle: t.title,
                      kind: t.mediaKind,
                      resourceId: t.resource.resource_id,
                      source: "post_edit_generated",
                    },
                    placement: { ...t.placement, ...t.layoutSize },
                    createdFrom: "generation",
                  };
                }),
              }),
              t = (0, c.IW)(e.editor);
            if (!t.available)
              return (
                e.editor.releaseDeferredMediaUploads(o),
                _(e.files.length, (0, d.IH)(t.reason))
              );
            if (!r || r.length !== i.length)
              return (
                e.editor.releaseDeferredMediaUploads(o),
                n.map((e) =>
                  "succeeded" === e.status
                    ? { ok: !1, reason: "connection-failed" }
                    : { ok: !1, reason: (0, d.Er)(e.status) },
                )
              );
          }
          e.editor.acceptDeferredMediaUploads(o);
          let u = new Map(
            i.map((e) => {
              let { asset: r, item: t } = e;
              return [t.nodeId, r];
            }),
          );
          return n.map((e, r) => {
            if ("succeeded" !== e.status)
              return { ok: !1, reason: (0, d.Er)(e.status) };
            let t = u.get(l[r] ?? "");
            return t
              ? ("nodeId" in t, { ok: !0, asset: t })
              : { ok: !1, reason: "unresolved" };
          });
        } catch (r) {
          var u, g;
          if (
            (e.editor.releaseDeferredMediaUploads(l),
            null == (u = (g = globalThis).reportError) || u.call(g, r),
            !n)
          )
            return _(e.files.length, "connection-failed");
          return n.map((e) =>
            "succeeded" === e.status
              ? { ok: !1, reason: "connection-failed" }
              : { ok: !1, reason: (0, d.Er)(e.status) },
          );
        }
      }
      function _(e, r) {
        return Array.from({ length: e }, () => ({ ok: !1, reason: r }));
      }
      function C(e, r, t) {
        var n;
        let a = e.canvasStore.getState(),
          l = a.projectionCache.nodeById.get(r),
          c = l
            ? (0, d.sg)({
                x: l.position.x,
                y: l.position.y,
                width:
                  (null == (n = l.measured) ? void 0 : n.width) ??
                  l.width ??
                  s.ZL.image.width,
              })
            : (0, u.x)(e.getCanvasViewportCenter(), t[0] ?? s.ZL.image);
        return (0, i.xK)({
          anchor: { align: "top-left", point: c },
          items: t.map((e, r) => ({
            key: `director-stage-writeback-${String(r)}`,
            size: e,
          })),
          obstacles: (0, o.Y)(a),
        }).items.map((e) => {
          let { rect: r } = e;
          return { x: r.x, y: r.y };
        });
      }
      async function b(e) {
        if (0 === e.captures.length) return { ok: !0, captureIds: [] };
        let r = (0, c.IW)(e.editor);
        if (!r.available) return { ok: !1, reason: (0, d.IH)(r.reason) };
        let t = e.captures.map((e) => (0, p.Px)(e.width, e.height, "image")),
          n = C(e.editor, e.sourceNodeId, t),
          a = (0, c.IW)(e.editor);
        if (!a.available) return { ok: !1, reason: (0, d.IH)(a.reason) };
        try {
          let r = await e.editor.actions.createConnectedNodes({
              items: e.captures.map((r, a) => ({
                connection: {
                  edgeType: "post_edit_provenance",
                  createdNodeRole: "target",
                  sourceNodeIds: [e.sourceNodeId],
                },
                node: {
                  initialTitle: r.name,
                  kind: "image",
                  resourceId: r.assetId,
                  source: "post_edit_generated",
                },
                placement: {
                  ...(n[a] ?? e.editor.getCanvasViewportCenter()),
                  ...t[a],
                },
                createdFrom: "generation",
              })),
            }),
            a = (0, c.IW)(e.editor);
          if (!a.available) return { ok: !1, reason: (0, d.IH)(a.reason) };
          if (!r || r.length !== e.captures.length)
            return { ok: !1, reason: "failed" };
          return {
            ok: !0,
            captureIds: e.captures.map((e) => {
              let { captureId: r } = e;
              return r;
            }),
          };
        } catch {
          return { ok: !1, reason: "failed" };
        }
      }
      function M(e) {
        return e.nodes;
      }
      function D(e) {
        return "image" === e.type;
      }
      t.d(r, { DirectorStageWorkspace: () => v });
    },
  },
]);
