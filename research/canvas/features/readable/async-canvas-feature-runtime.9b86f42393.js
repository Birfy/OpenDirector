"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ =
  globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [5917],
  {
    2974(e, t, i) {
      var s = i(24548);
      function n(e) {
        var t, i, n, o, r, a, l, d, u;
        let c =
            null == e || null == (i = e.audio) || null == (t = i.gen)
              ? void 0
              : t.audio_model,
          h = null == e || null == (n = e.reference_sources) ? void 0 : n[0],
          p = null == c || null == (o = c.materials) ? void 0 : o[0];
        return (
          (null == e ? void 0 : e.type) === s._x.audio &&
          e.status === s.ao.failed &&
          (null == (a = e.audio) || null == (r = a.gen) ? void 0 : r.mode) ===
            1 &&
          (null == c ? void 0 : c.model_name) === "seed_audio_v1_5" &&
          4 === c.scenario &&
          !!c.prompt.trim() &&
          (null == (l = e.reference_sources) ? void 0 : l.length) === 1 &&
          (null == h ? void 0 : h.material_idx) === 0 &&
          !!(h.node_id.trim() && h.resource_id.trim()) &&
          (null == (d = c.materials) ? void 0 : d.length) === 1 &&
          (null == p ? void 0 : p.role) === 4 &&
          (4 === p.type || 3 === p.type) &&
          !!(null == (u = p.vid) ? void 0 : u.trim())
        );
      }
      i.d(t, { I: () => n });
    },
    50744(e, t, i) {
      function s(e) {
        return [...e].sort((e, t) => {
          let i = o(e),
            s = o(t);
          return i || s ? (i ? (s ? s.value - i.value : -1) : 1) : 0;
        });
      }
      function n(e) {
        var t;
        return (null == (t = o(e)) ? void 0 : t.value) ?? null;
      }
      function o(e) {
        var t, i;
        let s = e.split(":");
        if (2 !== s.length) return null;
        let n = Number(null == (t = s[0]) ? void 0 : t.trim()),
          o = Number(null == (i = s[1]) ? void 0 : i.trim());
        if (!(n > 0) || !(o > 0) || !Number.isFinite(n) || !Number.isFinite(o))
          return null;
        let r = n / o;
        return r > 0 && Number.isFinite(r) ? { value: r } : null;
      }
      i.d(t, { C: () => n, i: () => s });
    },
    10621(e, t, i) {
      var s = i(66876);
      function n(e, t) {
        return !Number.isSafeInteger(e) || e < 1
          ? {
              defaultValue: 1,
              getLabel: () => (0, s.Qsr)(),
              maxValue: 1,
              minValue: 1,
              reason: (0, s.Qsr)(),
              status: "unavailable",
            }
          : {
              defaultValue: 1,
              getLabel: (t) =>
                !Number.isSafeInteger(t) || t < 1 || t > e
                  ? (0, s.Qsr)()
                  : String(t),
              maxValue: e,
              minValue: 1,
              status: "ready",
            };
      }
      i.d(t, { Z: () => n });
    },
    41764(e, t, i) {
      var s = i(66876);
      function n(e, t, i) {
        let n =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : (0, s.Jvv)();
        return e.map((e) => o(e, t, i(e) ? void 0 : n));
      }
      function o(e, t, i) {
        let s = t.getModelConfig(e),
          n = { label: s.displayName, value: e };
        return (
          s.description && (n.description = s.description),
          i && (n.disabledReason = i),
          s.icon && (n.icon = s.icon),
          s.source && (n.source = s.source),
          s.tag && (n.tag = s.tag),
          n
        );
      }
      i.d(t, { N: () => n, m: () => o });
    },
    89513(e, t, i) {
      var s = i(11456),
        n = i(66869);
      function o(e, t) {
        let i = 1 === t;
        return {
          ...(0, n.eF)(
            e.resolutionDefault,
            e.resolutions.map((e) => ({
              label: i ? (0, s.sw)() : e.toUpperCase(),
              value: e,
            })),
          ),
          ...(i ? { description: (0, s.NH)() } : {}),
        };
      }
      i.d(t, { G: () => o });
    },
    62010(e, t, i) {
      var s = i(31935),
        n = i(50744),
        o = i(10621),
        r = i(41764),
        a = i(89513),
        l = i(81693),
        d = i(66869);
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.wY.T2V,
          i = e.listModels(),
          u = (i) => !!e.getModeConfig(i, t),
          c = i.filter(u),
          h = e.getDefaultModel(t);
        if (!h || !c.includes(h)) return (0, d.d_)();
        let p = c.flatMap((i) => {
          let r = (function (e, t, i) {
            let r = i.getModeConfig(e, t);
            if (!r) return null;
            let u = m
                .flatMap((t) => {
                  let s = i.getModeConfig(e, t);
                  return s ? [s.materials] : [];
                })
                .reduce(
                  (e, t) => (t.maxCount > e.maxCount ? t : e),
                  r.materials,
                ),
              c = u.maxCount;
            return (
              void 0 !== i.getDefaultModel(s.wY.FirstLastFrame) &&
                (c = Math.max(u.maxCount, f)),
              {
                aspectRatio: (0, d.eF)(
                  r.aspectRatioDefault,
                  (0, n.i)(r.aspectRatios).map((e) => ({ label: e, value: e })),
                ),
                count: (0, o.Z)(r.count.maxValue, "first/last-frame"),
                duration: (0, l.M)(r.duration),
                longVideo: r.longVideo,
                materials: {
                  acceptedTypes: [2],
                  allowDuplicates: !0,
                  allowRemove: !0,
                  maxCount: c,
                  minCount: 0,
                  requiresRole: u.requiresRole,
                  status: "ready",
                },
                promptMaxCharacters: r.promptMaxCharacters,
                resolution: (0, a.G)(r, i.getModelConfig(e).generationKind),
              }
            );
          })(i, t, e);
          return r ? [[i, r]] : [];
        });
        if (0 === p.length) return (0, d.d_)();
        let b = (0, r.N)(i, e, u);
        return { byModel: Object.fromEntries(p), model: (0, d.eF)(h, b) };
      }
      function c(e, t) {
        return e.byModel[t];
      }
      function h(e) {
        let t = e.options.at(-1);
        if (void 0 === t || t <= 0) return e.options;
        let i = Math.max(5, 5 * Math.ceil(t / 6 / 5)),
          s = [];
        for (let e = 0; e < t; e += i) s.push(e);
        return (s.push(t), s);
      }
      function p(e, t) {
        return t <= 0 ? 0 : ((e - 0) / (t - 0)) * 100;
      }
      let m = [s.wY.T2V, s.wY.I2V, s.wY.FirstLastFrame],
        f = 2;
      function b(e) {
        return m.some((t) => t === e);
      }
      i.d(t, {
        E5: () => p,
        WX: () => h,
        gH: () => b,
        gQ: () => u,
        jP: () => c,
      });
    },
    1462(e, t, i) {
      var s = i(72562);
      function n(e) {
        return (0, s.Fc)({
          connected: !!e.referenceSource,
          feedback: e.connectedReferenceFeedback,
        });
      }
      i.d(t, { S: () => n });
    },
    81693(e, t, i) {
      var s = i(66876);
      function n(e) {
        let t = e.defaultMs / 1e3,
          i = e.valuesMs.map((e) => e / 1e3);
        return i.length > 0
          ? { defaultSeconds: t, options: i, status: "ready" }
          : {
              defaultSeconds: t,
              options: i,
              reason: (0, s.Dx2)(),
              status: "unavailable",
            };
      }
      i.d(t, { M: () => n });
    },
    66869(e, t, i) {
      var s = i(66876);
      function n(e, t) {
        return 0 === t.length
          ? o(e)
          : {
              defaultValue: e,
              getLabel: (e) => {
                var i;
                return (
                  (null == (i = t.find((t) => Object.is(t.value, e)))
                    ? void 0
                    : i.label) ?? (0, s.Qsr)()
                );
              },
              options: t,
              status: "ready",
            };
      }
      function o(e) {
        let t = (0, s.Qsr)();
        return {
          defaultValue: e,
          getLabel: () => t,
          options: [],
          reason: t,
          status: "unavailable",
        };
      }
      function r() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return { byModel: {}, model: o(e) };
      }
      function a(e) {
        return "ready" === e.model.status && e.model.options.length > 0;
      }
      i.d(t, { d_: () => r, eA: () => a, eF: () => n });
    },
    72471(e, t, i) {
      var s = i(23104),
        n = i(99154);
      let o = Object.freeze([
        { dotSize: 6, name: "thin", width: 2 },
        { dotSize: 8, name: "medium", width: 4 },
        { dotSize: 12, name: "thick", width: 8 },
      ]);
      function r() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { width: 720, height: 720 };
        if (
          !Number.isFinite(e.width) ||
          !Number.isFinite(e.height) ||
          e.width <= 0 ||
          e.height <= 0
        )
          throw Error(
            "Image annotation requires positive finite source dimensions",
          );
        let t = (720 * e.width) / Math.max(e.width, e.height);
        return {
          sizeBase: t,
          ...(0, s.f2)(),
          activeTool: "rectangle",
          rememberEditedToolOptions: !0,
          draft: {
            annotation: {
              elements: [],
              frameTimeMs: 0,
              toolOptions: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 720,
                  t = (0, s.iP)(e),
                  i = {
                    color: n.pr,
                    fill: null,
                    lineStyle: "solid",
                    strokeWidth: 4 / e,
                  };
                return {
                  ...t,
                  brush: { ...t.brush, size: 4 / e },
                  text: { ...t.text, fontSize: 16 / e },
                  rectangle: { ...i },
                  ellipse: { ...i },
                  arrow: { ...t.arrow, size: 4 / e, lineStyle: "solid" },
                  marker: { color: n.v, size: 64 / e },
                };
              })(t),
            },
          },
        };
      }
      function a(e, t) {
        let i = (0, s.Vy)(e, t);
        return i === e ? e : { ...i, sizeBase: e.sizeBase };
      }
      i.d(t, { aU: () => r, q1: () => a }, { mY: o });
    },
    2138(e, t, i) {
      var s = i(24548),
        n = i(4030),
        o = i(86072),
        r = i(51544);
      function a(e) {
        let t = (0, r.mf)(e);
        return t &&
          (null == e ? void 0 : e.type) === "image" &&
          e.data.resourceId
          ? [e.data.resourceId, ...(0, o.Wy)(t.layers).map((e) => e.resourceId)]
          : [];
      }
      function l(e, t) {
        let i = (0, r.mf)(e);
        if (
          !i ||
          (null == e ? void 0 : e.type) !== "image" ||
          !e.data.resourceId
        )
          return;
        let s = d(t[0]);
        if (!s) return;
        let n = (0, o.Wy)(i.layers),
          a = [];
        for (let [e, i] of n.entries()) {
          let s = d(t[e + 1]);
          if (!s) return;
          a.push({
            urls: [s],
            x: i.x,
            y: i.y,
            width: i.width,
            height: i.height,
            ...(i.rotation ? { rotation: i.rotation } : {}),
            ...(i.flipX ? { flipX: !0 } : {}),
            ...(i.flipY ? { flipY: !0 } : {}),
          });
        }
        return { width: i.width, height: i.height, baseUrls: [s], layers: a };
      }
      function d(e) {
        if (
          (null == e ? void 0 : e.status) === s.ao.success &&
          e.type === s._x.image
        )
          return (0, n.gn)(e.urls);
      }
      i.d(t, { o: () => l, p: () => a });
    },
    85570(e, t, i) {
      function s(e) {
        return "base" === e.source.kind
          ? `base:${e.resourceId}`
          : `layer:${e.source.layerId}:${e.resourceId}`;
      }
      i.d(t, { H: () => s });
    },
    53764(e, t, i) {
      function s(e) {
        return {
          height: e.height,
          initialMask: { kind: "empty" },
          revision: 0,
          strokes: [],
          width: e.width,
        };
      }
      function n(e) {
        let { document: t, documentIdentity: i, source: s } = e;
        return t.width !== s.width || t.height !== s.height
          ? { error: "mask-dimensions-mismatch", ok: !1 }
          : !Number.isSafeInteger(t.revision) || t.revision < 0
            ? { error: "mask-revision-invalid", ok: !1 }
            : "empty" === t.initialMask.kind && 0 === t.strokes.length
              ? { error: "mask-selection-empty", ok: !1 }
              : {
                  intent: {
                    document: t,
                    documentIdentity: i,
                    source: s,
                    type: "inpainting-remove",
                  },
                  ok: !0,
                };
      }
      i.d(t, { A: () => s, m: () => n });
    },
    18662(e, t, i) {
      function s(e) {
        return Math.hypot(e.endX - e.startX, e.endY - e.startY) >= 4;
      }
      function n(e) {
        var t, i, s, n;
        let { bounds: o } = e;
        if (!(o.width > 0) || !(o.height > 0)) return;
        let r = ((t = Math.min(e.startX, e.endX) - o.left), u(t / o.width)),
          a = ((i = Math.max(e.startX, e.endX) - o.left), u(i / o.width)),
          l = ((s = Math.min(e.startY, e.endY) - o.top), u(s / o.height)),
          d = ((n = Math.max(e.startY, e.endY) - o.top), u(n / o.height)),
          c = h(a - r),
          p = h(d - l);
        if (!(c <= 0) && !(p <= 0))
          return { x: h(r), y: h(l), width: c, height: p };
      }
      function o(e, t) {
        let { bounds: i } = t;
        if (
          !(i.width > 0) ||
          !(i.height > 0) ||
          !Number.isFinite(t.deltaX) ||
          !Number.isFinite(t.deltaY)
        )
          return a(e);
        let s = h(Math.min(1, Math.max(0, e.width))),
          n = h(Math.min(1, Math.max(0, e.height)));
        return {
          x: h(c(e.x + t.deltaX / i.width, 0, 1 - s)),
          y: h(c(e.y + t.deltaY / i.height, 0, 1 - n)),
          width: s,
          height: n,
        };
      }
      function r(e, t, i) {
        let { bounds: s } = i;
        if (!(s.width > 0) || !(s.height > 0)) return a(e);
        let n = a(e);
        if (
          !Number.isFinite(i.clientX) ||
          !Number.isFinite(i.clientY) ||
          !Number.isFinite(i.startClientX) ||
          !Number.isFinite(i.startClientY)
        )
          return n;
        let o = n.x,
          r = n.y,
          l = h(n.x + n.width),
          d = h(n.y + n.height),
          u = t.endsWith("left")
            ? o + (i.clientX - i.startClientX) / s.width
            : l + (i.clientX - i.startClientX) / s.width,
          p = t.startsWith("top")
            ? r + (i.clientY - i.startClientY) / s.height
            : d + (i.clientY - i.startClientY) / s.height,
          m = t.endsWith("left") ? c(u, 0, l - 0.01) : o,
          f = t.endsWith("right") ? c(u, o + 0.01, 1) : l,
          b = t.startsWith("top") ? c(p, 0, d - 0.01) : r,
          g = t.startsWith("bottom") ? c(p, r + 0.01, 1) : d;
        return { x: h(m), y: h(b), width: h(f - m), height: h(g - b) };
      }
      function a(e) {
        let t = h(u(e.x)),
          i = h(u(e.y)),
          s = h(u(e.x + e.width)),
          n = h(u(e.y + e.height));
        return {
          x: t,
          y: i,
          width: h(Math.max(0, s - t)),
          height: h(Math.max(0, n - i)),
        };
      }
      function l(e, t) {
        let i,
          s,
          n,
          o = e.trim();
        if (!t) return o;
        let r =
          ((i = a(t)),
          (s = `${d(i.x)}\u{2013}${d(i.x + i.width)}`),
          (n = `${d(i.y)}\u{2013}${d(i.y + i.height)}`),
          `\u{53EA}\u{62C6}\u{5206}\u{4F4D}\u{4E8E}\u{56FE}\u{7247}\u{533A}\u{57DF}\u{5185}\u{7684}\u{5143}\u{7D20}\u{FF1A}\u{6A2A}\u{5411} ${s}\u{FF0C}\u{7EB5}\u{5411} ${n}\u{FF08}\u{4EE5}\u{5DE6}\u{4E0A}\u{89D2}\u{4E3A}\u{539F}\u{70B9}\u{FF09}`);
        return o
          ? `${o}
${r}`
          : r;
      }
      function d(e) {
        return `${Math.round(100 * e)}%`;
      }
      function u(e) {
        return Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0;
      }
      function c(e, t, i) {
        return Math.min(i, Math.max(t, e));
      }
      function h(e) {
        return Math.round(100 * e) / 100;
      }
      i.d(t, {
        Cj: () => r,
        VE: () => n,
        f: () => l,
        jr: () => s,
        k_: () => o,
      });
    },
    36285(e, t, i) {
      var s = i(41340),
        n = i(68115),
        o = i(84826);
      class r {
        read() {
          return this.snapshot;
        }
        write(e) {
          this.snapshot = e;
        }
      }
      function a(e, t, i) {
        if (!e) return {};
        let { value: r, presetId: a } = e,
          l =
            Number.isFinite(r.keyLight.yaw) && Number.isFinite(r.keyLight.pitch)
              ? (0, s.XZ)(r.keyLight)
              : t.defaults.keyLight;
        return {
          initialValue: {
            keyLight: (0, o.g1)(l) ? l : t.defaults.keyLight,
            brightness: t.brightnessSteps.includes(r.brightness)
              ? r.brightness
              : t.defaults.brightness,
            texture: t.textures.includes(r.texture)
              ? r.texture
              : t.defaults.texture,
            lightColor: (0, n.Px)(r.lightColor)
              ? r.lightColor
              : t.defaults.lightColor,
          },
          ...(null !== a && (null == i ? void 0 : i.some((e) => e.id === a))
            ? { initialPresetId: a }
            : {}),
        };
      }
      i.d(t, { d: () => r, h: () => a });
    },
    99154(e, t, i) {
      function s(e) {
        return `#${e.toString(16).padStart(6, "0").toUpperCase()}`;
      }
      let n = Object.freeze([
          s(0xff3355),
          s(0xffc944),
          s(6739573),
          s(4107775),
          s(1118481),
          s(0xffffff),
        ]),
        o = n[0],
        r = s(40698),
        a = n[5],
        l = n[4],
        d = n[5];
      function u(e, t) {
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return { anchorX: 12, anchorY: 23.04, scale: i, tipX: e, tipY: t };
      }
      function c(e, t, i) {
        let s = u(e.x * t, e.y * i),
          n = s.tipX + (12 - s.anchorX) * s.scale,
          o = s.tipY + (12 - s.anchorY) * s.scale;
        return { bottom: o + 20, left: n - 20, right: n + 20, top: o - 20 };
      }
      function h(e, t, i) {
        return { x: p(e.x, t, 20, 0), y: p(e.y, i, 20, -11.04) };
      }
      function p(e, t, i, s) {
        if (!Number.isFinite(t) || t <= 0) return 0.5;
        let n = i - s,
          o = t - i - s;
        return Math.min(
          1,
          Math.max(
            0,
            (o >= n ? Math.min(o, Math.max(n, e * t)) : t / 2 - s) / t,
          ),
        );
      }
      function m(e, t, i) {
        return [
          e.tipX + (t - e.anchorX) * e.scale,
          e.tipY + (i - e.anchorY) * e.scale,
        ];
      }
      function f(e, t, i, s) {
        e.moveTo(...m(t, i, s));
      }
      function b(e, t, i, s) {
        e.lineTo(...m(t, i, s));
      }
      function g(e, t, i, s, n, o, r, a) {
        e.bezierCurveTo(...m(t, i, s), ...m(t, n, o), ...m(t, r, a));
      }
      function v(e, t) {
        (e.beginPath(),
          f(e, t, 17.3934, 5.23381),
          g(e, t, 15.9629, 3.80336, 14.0226, 3, 11.9996, 3),
          g(e, t, 9.97668, 3, 8.03633, 3.80336, 6.60588, 5.23381),
          g(e, t, 5.17544, 6.66426, 4.37207, 8.60461, 4.37207, 10.6276),
          g(e, t, 4.37207, 13.7102, 6.25155, 16.4555, 7.98391, 18.3503),
          g(e, t, 9.18456, 19.6635, 10.5351, 20.8191, 11.9996, 21.8264),
          g(e, t, 13.4642, 20.8191, 14.8147, 19.6635, 16.0154, 18.3503),
          g(e, t, 17.7477, 16.4555, 19.6272, 13.7102, 19.6272, 10.6276),
          g(e, t, 19.6272, 8.60461, 18.8238, 6.66426, 17.3934, 5.23381),
          e.closePath());
      }
      function I(e, t) {
        (e.beginPath(),
          f(e, t, 12, 2),
          g(e, t, 14.2879, 2.0001, 16.4826, 2.90846, 18.1006, 4.52637),
          g(e, t, 19.7187, 6.14443, 20.627, 8.33988, 20.627, 10.6279),
          g(e, t, 20.6268, 14.0977, 18.5293, 17.0824, 16.7529, 19.0254),
          g(e, t, 15.4973, 20.3987, 14.0885, 21.6034, 12.5664, 22.6504),
          b(e, t, 12, 23.04),
          b(e, t, 11.4326, 22.6504),
          g(e, t, 9.9105, 21.6034, 8.50169, 20.3987, 7.24609, 19.0254),
          g(e, t, 5.4697, 17.0824, 3.37222, 14.0977, 3.37207, 10.6279),
          g(e, t, 3.37207, 8.33988, 4.28037, 6.14443, 5.89844, 4.52637),
          g(e, t, 7.5165, 2.9083, 9.71195, 2, 12, 2),
          e.closePath());
      }
      function S(e) {
        let t = String(Math.abs(Math.trunc(e))).length;
        return t <= 1 ? 28 : 2 === t ? 21 : 16;
      }
      function y(e) {
        let t = String(Math.abs(Math.trunc(e))).length;
        return t <= 1 ? 12 : 2 === t ? 9 : 7;
      }
      function E(e, t, i, s) {
        var n;
        let o =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : "point",
          r = (n = s) && Number.isFinite(n) && n > 0 ? 1 / n : 1,
          a = e.x * t,
          l = e.y * i;
        if ("image-label" === o) {
          let e = 16 * r;
          return {
            height: 16,
            left: A(a + 2 * r + -7 * r, t, e),
            scale: r,
            top: A(l - 2 * r - 11 * r, i, e),
            width: 16,
          };
        }
        if ("box" === o) {
          let e = 16 * r;
          return {
            height: 16,
            left: A(a - 8 * r, t, e),
            scale: r,
            top: A(l - 6 * r, i, e),
            width: 16,
          };
        }
        let d = 16 * r;
        return {
          height: 16,
          left: A(a + 4 * r, t, d),
          scale: r,
          top: A(l - 29.04 * r, i, d),
          width: 16,
        };
      }
      function w(e, t, i) {
        let s = Math.atan2(i.y - t.y, i.x - t.x),
          n = 5 * Math.max(1, e.lineWidth);
        (e.beginPath(),
          e.moveTo(i.x, i.y),
          e.lineTo(
            i.x - n * Math.cos(s - Math.PI / 4),
            i.y - n * Math.sin(s - Math.PI / 4),
          ),
          e.moveTo(i.x, i.y),
          e.lineTo(
            i.x - n * Math.cos(s + Math.PI / 4),
            i.y - n * Math.sin(s + Math.PI / 4),
          ));
      }
      function A(e, t, i) {
        return Math.min(Math.max(0, t - i), Math.max(0, e));
      }
      i.d(
        t,
        {
          A5: () => v,
          Tf: () => S,
          az: () => y,
          iP: () => u,
          kh: () => c,
          pQ: () => E,
          sV: () => I,
          wV: () => h,
          wk: () => w,
        },
        {
          $B: "nodrag nopan pointer-events-auto absolute min-h-canvas-zero min-w-canvas-zero resize-none overflow-hidden break-all border-0 bg-transparent p-canvas-zero text-transparent caret-transparent outline-none selection:bg-dreamina-brand-main-block-default [-webkit-text-fill-color:transparent] focus:border-transparent disabled:pointer-events-none disabled:opacity-dreamina-media-action-hidden",
          QE: d,
          YR: "pointer-events-none absolute inset-0 size-full overflow-hidden",
          c$: "absolute inset-0 size-full touch-none outline-none",
          in: { height: 12, marginInline: 3.5 },
          ld: n,
          pr: o,
          qy: "relative size-full overflow-hidden",
          tH: "absolute z-canvas-video-edit-marker-delete flex size-4 cursor-pointer items-center justify-center rounded-canvas-video-edit-color-swatch border-0 bg-dreamina-on-media-text-primary p-canvas-zero text-dreamina-dialog-text-primary drop-shadow-dreamina-icon-text hover:bg-dreamina-on-media-text-primary hover:text-dreamina-dialog-text-primary active:bg-dreamina-on-media-text-primary active:text-dreamina-dialog-text-primary [&_svg]:pointer-events-none [&_svg]:block [&_svg]:size-4",
          uF: a,
          v: r,
          xo: l,
        },
      );
    },
    96552(e, t, i) {
      (i.r(t),
        i.d(t, {
          AudioSeparationSessionService: () => S,
          AudioTrimSessionService: () => H,
          BrowserAudioTrimMaterializer: () => P,
          BrowserRemoteMaskSelectionService: () => t0,
          BrowserVideoFrameMaterializer: () => ia.O,
          BrowserVideoTrimMaterializer: () => nw,
          ImageHDSessionService: () => $,
          ImageLayerBoardCutoutService: () => ec,
          ImageLayerBoardMergeService: () => ew,
          ImageLayerBoardRedrawService: () => eT,
          ImagePostEditSessionService: () => ty,
          LocalArtifactResultNodeOwner: () => k,
          PartialReshootGenerationHandoffService: () => sr,
          TextEditSessionService: () => ie,
          UnavailableMaskRecognitionService: () => tJ,
          VideoAudioExtractionService: () => np,
          VideoEditGenerationHandoffService: () => iB,
          VideoEditingSessionCoordinator: () => sl,
          VideoFrameCaptureSessionService: () => ih,
          VideoPostEditSessionService: () => nu,
          VideoPostEditSourceVideoElements: () => nc,
          VideoTranslationSessionService: () => ny,
          VideoTrimSessionService: () => nT,
          createGenerationCommerceRefreshCoordinator: () => u.zm,
          createVideoFrameIndexService: () => ir.uh,
        }));
      var s = i(25734),
        n = i(24548),
        o = i(847),
        r = i(96783),
        a = i(78296),
        l = i(40627),
        d = i(9976),
        u = i(37663),
        c = i(66139),
        h = i(22194),
        p = i(60665),
        m = i(8782),
        f = i(2974),
        b = i(70983);
      let g = "seed_audio_v1_5",
        v = Object.freeze({ status: "inactive" }),
        I = 0;
      class S {
        abortPendingWork(e) {
          var t;
          for (let i of (null == (t = this.signalController) || t.abort(e),
          this.activeSubmissionControllers))
            i.abort(e);
          (this.activeSubmissionControllers.clear(),
            (this.signalController = null));
        }
        getSubmissionAvailability() {
          if (this.disposed)
            return {
              code: "SESSION_DISPOSED",
              ok: !1,
              reason: "commandFailed",
            };
          let e = this.dependencies.getEditAvailability().local;
          return e.available
            ? this.dependencies.modelAvailability &&
              !this.dependencies.modelAvailability.getState()
              ? {
                  code: "MODEL_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                  message: (0, r.sm)(),
                }
              : void 0
            : {
                code:
                  "notEditable" === e.reason
                    ? "PERMISSION_DENIED"
                    : "NOT_EDITING_READY",
                ok: !1,
                reason:
                  "notEditable" === e.reason
                    ? "permissionDenied"
                    : "notEditingReady",
              };
        }
        async dispatchSeparation(e, t, i) {
          let n = await this.dependencies.commercial.execute(
            (0, c._)(),
            async (n) => {
              let o = (0, s.pt)(n, i.signal);
              try {
                return await this.dispatchAuthorizedSeparation(
                  e,
                  t,
                  o.options.signal,
                  { benefit_type: n.selection.benefitType },
                  o.options,
                  i,
                );
              } finally {
                o.dispose();
              }
            },
          );
          if ("executed" === n.status) return n.value;
          if ("error" === n.status && "operation" === n.phase) throw n.error;
          return {
            ok: !1,
            code:
              "blocked" === n.status
                ? "COMMERCIAL_BLOCKED"
                : "cancelled" === n.status
                  ? "SUBMIT_CANCELLED"
                  : "COMMERCIAL_UNAVAILABLE",
            reason: "commandFailed",
            ...("blocked" === n.status || "cancelled" === n.status
              ? {}
              : { message: (0, r.sm)() }),
          };
        }
        resolveCurrentSource(e) {
          let t = this.dependencies.getObjectSnapshot(e.nodeId);
          if (
            (null == t ? void 0 : t.type) !== "audio" &&
            (null == t ? void 0 : t.type) !== "video"
          )
            return null;
          let i = y({
            audioOutputIndex:
              "audio" === t.type ? t.data.audioOutputIndex : void 0,
            nodeId: t.id,
            primaryResourceId: t.data.resourceId,
            resources: this.dependencies.getResourceBindings(t.id),
            title: t.data.title,
          });
          return (null == i ? void 0 : i.resourceId) === e.resourceId &&
            i.vid === e.vid
            ? i
            : null;
        }
        async dispatchAuthorizedSeparation(e, t, i, s, l, c) {
          var p, f, b;
          i.throwIfAborted();
          let v = this.getSubmissionAvailability();
          if (v) return v;
          let I = this.resolveCurrentSource(e);
          if (!I)
            return {
              ok: !1,
              code: "SOURCE_RESOURCE_UNAVAILABLE",
              reason: "commandFailed",
            };
          if ((0, m.O)(I.durationMs))
            return {
              ok: !1,
              code: "SOURCE_DURATION_EXCEEDED",
              reason: "commandFailed",
              message: (0, o.Ad)(),
            };
          if (this.dependencies.seedAudioCompliance) {
            if (
              !(await this.dependencies.seedAudioCompliance.requestConfirmation(
                i,
                () => this.dependencies.getEditAvailability().local.available,
              ))
            )
              return {
                code: "CONFIRMATION_CANCELLED",
                ok: !1,
                reason: "commandFailed",
              };
            i.throwIfAborted();
            let t = this.getSubmissionAvailability();
            if (t) return t;
            if (
              this.dependencies.modelAvailability &&
              !this.dependencies.modelAvailability.getState()
            )
              return {
                code: "MODEL_UNAVAILABLE",
                ok: !1,
                reason: "commandFailed",
                message: (0, r.sm)(),
              };
            if (!this.resolveCurrentSource(e))
              return {
                code: "SOURCE_RESOURCE_UNAVAILABLE",
                ok: !1,
                reason: "commandFailed",
              };
          }
          if (
            (i.throwIfAborted(),
            this.dependencies.modelAvailability &&
              !this.dependencies.modelAvailability.getState())
          )
            return {
              code: "MODEL_UNAVAILABLE",
              ok: !1,
              reason: "commandFailed",
              message: (0, r.sm)(),
            };
          let S =
              null == (p = (f = this.dependencies).getSelectionSnapshot)
                ? void 0
                : p.call(f),
            y = this.selectionEpoch,
            E = (function (e) {
              let {
                  source: t,
                  prompt: i,
                  getProjectId: s,
                  createNodeId: r,
                  createResourceId: a,
                  createSubmitId: l,
                  commerceSelection: u,
                } = e,
                c = r ?? d.XG,
                h = a ?? d.ve,
                p = l ?? d.pf,
                m = "video" === t.mediaType ? 3 : 4,
                f = {
                  output_node_id: c(),
                  output_title: (0, o.Us)(t.title, 0),
                  source_node_id: t.nodeId,
                  source_resource_id: t.resourceId,
                  output_type: n._x.audio,
                  item: {
                    ...(u ? { commerce_selection: u } : {}),
                    type: 3,
                    resource_id: h(),
                    reference_sources: [
                      {
                        material_idx: 0,
                        node_id: t.nodeId,
                        resource_id: t.resourceId,
                      },
                    ],
                    params: {
                      audio_params: {
                        mode: 1,
                        audio_model: {
                          model_name: g,
                          scenario: 4,
                          prompt: i,
                          materials: [{ type: m, role: 4, vid: t.vid }],
                        },
                      },
                    },
                  },
                };
              return {
                project_id: s(),
                op: 3,
                post_edit: {
                  submit_id: p(),
                  source_node_id: t.nodeId,
                  source_resource_id: t.resourceId,
                  items: Object.freeze([f]),
                },
              };
            })({
              source: e,
              prompt: t,
              getProjectId: this.dependencies.getProjectId,
              createNodeId: this.dependencies.createNodeId,
              createResourceId: this.dependencies.createResourceId,
              createSubmitId: this.dependencies.createSubmitId,
              commerceSelection: s,
            }),
            w = this.dependencies.viewport
              ? (0, a.sO)(this.dependencies.viewport)
              : null;
          w && this.resultPresentations.add(w);
          try {
            let t;
            for (let e of E.post_edit.items)
              this.dependencies.trackSubmittedResource(e.item.resource_id);
            let s = E.post_edit.items.map((e) => e.item.resource_id),
              n = await (0, h.Ud)({
                generationHistorySubmissionPort:
                  this.dependencies.generationHistorySubmissionPort,
                onRegistered: (e) => {
                  t = e;
                },
                generate: async () => {
                  (i.throwIfAborted(),
                    this.transportedSubmissionControllers.add(c));
                  let e = await (0, u.nX)({
                    coordinator: this.dependencies.commerceRefreshCoordinator,
                    submitId: E.post_edit.submit_id,
                    resourceIds: s,
                    generate: () =>
                      this.dependencies.generator.nodeGenerate(E, l),
                  });
                  return (i.throwIfAborted(), e);
                },
                mediaType: "audio",
                postEditScenario: "audioSeparation",
                modelName: g,
                name: (0, o.dG)(),
                nodeId: e.nodeId,
                resourceIds: s,
                submitId: E.post_edit.submit_id,
              }),
              a = n.results
                .filter((e) => 2 !== e.state)
                .map((e) => e.resource_id);
            if (0 === a.length)
              return (
                this.cancelResultPresentation(w),
                {
                  code: "ALL_ITEMS_REJECTED",
                  ok: !1,
                  reason: "commandFailed",
                  message: (0, r._y)(),
                }
              );
            return (
              await this.beginSeparationReconciliation(
                e.nodeId,
                null == (b = E.post_edit.items[0]) ? void 0 : b.output_node_id,
                a[0],
                n.results,
                t,
                S,
                y,
                w,
              ),
              { ok: !0, value: { submittedResourceIds: Object.freeze(a) } }
            );
          } catch (e) {
            throw (this.cancelResultPresentation(w), e);
          }
        }
        async beginSeparationReconciliation(e, t, i, s, o, r, a, l) {
          var d, u, c, h;
          let p,
            m = this.dependencies.reconcileSeparationSiblings;
          if (!m || !t || !i) return void this.cancelResultPresentation(l);
          let f = !1,
            b = !1,
            g = async () => {
              var d, u, c, h, g, v, I, S, y;
              if (this.disposed) return (this.cancelResultPresentation(l), !0);
              let E = await m({
                sourceNodeId: e,
                primaryOutputNodeId: t,
                primaryResourceId: i,
              });
              if (this.disposed) return (this.cancelResultPresentation(l), !0);
              let w =
                  (null == (d = (u = this.dependencies).getResourceById)
                    ? void 0
                    : d.call(u, i)) ??
                  this.dependencies
                    .getResourceBindings(t)
                    .find((e) => e.resource_id === i),
                A =
                  (null == w ? void 0 : w.status) === n.ao.success ||
                  (null == w ? void 0 : w.status) === n.ao.failed ||
                  (null == w ? void 0 : w.status) === n.ao.canceled;
              o &&
                (E.children.length > 1 || A) &&
                o.settle(
                  s,
                  E.children.map((e) => ({
                    childKey: e.childKey,
                    ...(e.childLabel ? { childLabel: e.childLabel } : {}),
                    childIndex: e.childIndex,
                  })),
                );
              let C = E.nodeIds[0];
              (C &&
                !b &&
                (void 0 !== r &&
                a === this.selectionEpoch &&
                (null == (c = (h = this.dependencies).getSelectionSnapshot)
                  ? void 0
                  : c.call(h)) === r &&
                this.dependencies.getEditAvailability().local.available
                  ? ((null == (g = this.dependencies.viewport)
                      ? void 0
                      : g.geometry) &&
                      "unknown" ===
                        this.dependencies.viewport.geometry.getNodeContainment(
                          C,
                        )) ||
                    ((b = !0), this.presentResultNodes(l, E.nodeIds))
                  : ((b = !0), this.cancelResultPresentation(l)),
                b && (null == p || p(), (p = void 0))),
                (null == w ? void 0 : w.status) === n.ao.success &&
                  E.complete &&
                  !f &&
                  ((f = !0),
                  void 0 !== r &&
                    a === this.selectionEpoch &&
                    (null == (v = (I = this.dependencies).getSelectionSnapshot)
                      ? void 0
                      : v.call(I)) === r &&
                    this.dependencies.getEditAvailability().local.available &&
                    (null == (S = (y = this.dependencies).selectOutputNodes) ||
                      S.call(y, E.nodeIds))));
              let R =
                A &&
                ((null == w ? void 0 : w.status) !== n.ao.success ||
                  E.complete) &&
                (b || 0 === E.nodeIds.length);
              return (R && !b && this.cancelResultPresentation(l), R);
            };
          try {
            if (await g()) return;
          } catch (e) {
            null == (d = (u = this.dependencies).onReconciliationError) ||
              d.call(u, e);
          }
          let v = this.dependencies.subscribeResourceState;
          if (!v) return void this.cancelResultPresentation(l);
          let I = !1,
            S = !1,
            y = !1,
            E = () => void 0,
            w = () => {
              I ||
                ((I = !0),
                E(),
                null == p || p(),
                this.reconciliationReleases.delete(w));
            },
            A = () => {
              if (!I) {
                if (S) {
                  y = !0;
                  return;
                }
                ((S = !0),
                  g()
                    .then((e) => {
                      e && w();
                    })
                    .catch((e) => {
                      var t, i;
                      return null ==
                        (t = (i = this.dependencies).onReconciliationError)
                        ? void 0
                        : t.call(i, e);
                    })
                    .finally(() => {
                      ((S = !1), y && !I && ((y = !1), A()));
                    }));
              }
            };
          ((E = v(i, A)),
            b ||
              (p =
                null == (h = this.dependencies.viewport) ||
                null == (c = h.geometry)
                  ? void 0
                  : c.subscribe(A)),
            this.reconciliationReleases.add(w),
            A());
        }
        presentResultNodes(e, t) {
          if (!e) return;
          let [i, ...s] = t;
          i
            ? e.present({ kind: "nodes", nodeIds: [i, ...s] }).then(
                () => this.resultPresentations.delete(e),
                (t) => {
                  var i, s;
                  (this.resultPresentations.delete(e),
                    null ==
                      (i = (s = this.dependencies).onReconciliationError) ||
                      i.call(s, t));
                },
              )
            : this.cancelResultPresentation(e);
        }
        cancelResultPresentation(e) {
          e && (this.resultPresentations.delete(e), e.cancel());
        }
        commit(e) {
          ((this.snapshot = Object.freeze(e)), this.notify());
        }
        publishSubmission(e, t) {
          "active" === this.snapshot.status &&
            this.snapshot.sessionId === e &&
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              submission: Object.freeze(t),
            })),
            this.notify());
        }
        notify() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          var t, i, s;
          ((this.dependencies = e),
            (this.disposed = !1),
            (this.selectionEpoch = 0),
            (this.activeSubmissionControllers = new Set()),
            (this.transportedSubmissionControllers = new WeakSet()),
            (this.retryingResourceIds = new Set()),
            (this.listeners = new Set()),
            (this.snapshot = v),
            (this.signalController = null),
            (this.reconciliationReleases = new Set()),
            (this.resultPresentations = new Set()),
            (this.close = () => {
              "inactive" !== this.snapshot.status &&
                (this.signalController &&
                  !this.transportedSubmissionControllers.has(
                    this.signalController,
                  ) &&
                  this.signalController.abort("session closed"),
                (this.signalController = null),
                (this.snapshot = v),
                this.notify());
            }),
            (this.dispose = () => {
              var e, t, i;
              if (!this.disposed) {
                for (let s of ((this.disposed = !0),
                null == (e = this.releaseSelection) || e.call(this),
                null == (t = this.releaseEditAvailability) || t.call(this),
                null == (i = this.releaseModelAvailability) || i.call(this),
                this.abortPendingWork("session disposed"),
                this.retryingResourceIds.clear(),
                (this.snapshot = v),
                this.notify(),
                this.reconciliationReleases))
                  s();
                for (let e of (this.reconciliationReleases.clear(),
                this.resultPresentations))
                  e.cancel();
                this.resultPresentations.clear();
              }
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.isSourceActive = (e) =>
              "active" === this.snapshot.status &&
              this.snapshot.source.nodeId === e),
            (this.open = (e) => {
              var t, i, s;
              let { nodeIds: n } = e,
                r = this.getSubmissionAvailability();
              if (r) return r;
              let a = 1 === n.length ? n[0] : void 0;
              if (!a)
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let l = this.dependencies.getObjectSnapshot(a);
              if (
                (null == l ? void 0 : l.type) !== "audio" &&
                (null == l ? void 0 : l.type) !== "video"
              )
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let d = y({
                audioOutputIndex:
                  "audio" === l.type ? l.data.audioOutputIndex : void 0,
                nodeId: l.id,
                primaryResourceId: l.data.resourceId,
                resources: this.dependencies.getResourceBindings(l.id),
                title: l.data.title,
              });
              if (!d)
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if ((0, m.O)(d.durationMs))
                return {
                  ok: !1,
                  code: "SOURCE_DURATION_EXCEEDED",
                  reason: "commandFailed",
                  message: (0, o.Ad)(),
                };
              (this.signalController &&
                !this.transportedSubmissionControllers.has(
                  this.signalController,
                ) &&
                this.signalController.abort("session replaced"),
                (this.signalController = new AbortController()));
              let u =
                null == (t = (i = this.dependencies).getLastSubmittedSettings)
                  ? void 0
                  : t.call(i, d.nodeId);
              return (
                (this.snapshot = Object.freeze({
                  sessionId:
                    "function" ==
                    typeof (null == (s = globalThis.crypto)
                      ? void 0
                      : s.randomUUID)
                      ? globalThis.crypto.randomUUID()
                      : ((I += 1), `audio-separation-${I}`),
                  source: d,
                  status: "active",
                  mode: (null == u ? void 0 : u.mode) ?? "voice",
                  description: (null == u ? void 0 : u.description) ?? "",
                  submission: Object.freeze({ phase: "idle" }),
                })),
                this.notify(),
                { ok: !0, value: { sessionId: this.snapshot.sessionId } }
              );
            }),
            (this.setMode = (e) => {
              "active" === this.snapshot.status &&
                this.commit({ ...this.snapshot, mode: e });
            }),
            (this.setDescription = (e) => {
              "active" === this.snapshot.status &&
                this.commit({ ...this.snapshot, description: e });
            }),
            (this.submit = async () => {
              if ("active" !== this.snapshot.status)
                return {
                  code: "SESSION_NOT_ACTIVE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if ("submitting" === this.snapshot.submission.phase)
                return {
                  code: "SUBMIT_IN_PROGRESS",
                  ok: !1,
                  reason: "commandFailed",
                };
              let e = this.getSubmissionAvailability();
              if (e) return e;
              if (
                "description" === this.snapshot.mode &&
                0 === this.snapshot.description.trim().length
              )
                return (
                  this.publishSubmission(this.snapshot.sessionId, {
                    phase: "failed",
                    errorMessage: (0, o.io)(),
                  }),
                  {
                    code: "DESCRIPTION_REQUIRED",
                    ok: !1,
                    reason: "commandFailed",
                  }
                );
              let t = this.snapshot.source,
                i = this.snapshot.sessionId,
                s = this.signalController;
              if (!s)
                return {
                  code: "SESSION_NOT_ACTIVE",
                  ok: !1,
                  reason: "commandFailed",
                };
              (this.activeSubmissionControllers.add(s),
                this.publishSubmission(i, { phase: "submitting" }));
              try {
                let e = await this.dispatchSeparation(
                  t,
                  (0, b.Z)(
                    this.snapshot.mode,
                    this.snapshot.description.trim(),
                  ),
                  s,
                );
                if (!e.ok) {
                  if ((0, p.s)(e.code))
                    return (this.publishSubmission(i, { phase: "idle" }), e);
                  return (
                    this.publishSubmission(i, {
                      phase: "failed",
                      errorMessage: e.message ?? (0, r._y)(),
                    }),
                    e
                  );
                }
                return (
                  "active" === this.snapshot.status &&
                    this.snapshot.sessionId === i &&
                    this.close(),
                  e
                );
              } catch (t) {
                let e = (0, p.b)(t, s.signal);
                return (
                  this.publishSubmission(
                    i,
                    "SUBMIT_CANCELLED" === e.code
                      ? { phase: "idle" }
                      : { phase: "failed", errorMessage: e.message },
                  ),
                  { ...e, ok: !1, reason: "commandFailed" }
                );
              } finally {
                this.activeSubmissionControllers.delete(s);
              }
            }),
            (this.retryFailedResource = async (e) => {
              var t, i, s, n, o, r, a, l;
              let { nodeId: d, resourceId: u } = e,
                c = this.getSubmissionAvailability();
              if (c) return c;
              if (this.retryingResourceIds.has(u))
                return {
                  code: "RETRY_IN_PROGRESS",
                  ok: !1,
                  reason: "commandFailed",
                };
              let h = this.dependencies.getObjectSnapshot(d),
                m = this.dependencies
                  .getResourceBindings(d)
                  .find((e) => e.resource_id === u);
              if (
                (null == h ? void 0 : h.type) !== "audio" ||
                h.data.resourceId !== u ||
                !m ||
                !(0, f.I)(m)
              )
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let b =
                  null == (t = m.reference_sources)
                    ? void 0
                    : t.find((e) => 0 === e.material_idx),
                g =
                  null == (o = m.audio) ||
                  null == (n = o.gen) ||
                  null == (s = n.audio_model) ||
                  null == (i = s.materials)
                    ? void 0
                    : i[0],
                v = b && this.dependencies.getObjectSnapshot(b.node_id),
                I =
                  v && ("audio" === v.type || "video" === v.type)
                    ? y({
                        audioOutputIndex:
                          "audio" === v.type ? v.data.audioOutputIndex : void 0,
                        nodeId: v.id,
                        primaryResourceId: b.resource_id,
                        resources: this.dependencies.getResourceBindings(v.id),
                        title: v.data.title,
                      })
                    : null;
              if (
                !I ||
                I.vid !== (null == g ? void 0 : g.vid) ||
                ("audio" === I.mediaType ? 4 : 3) !==
                  (null == g ? void 0 : g.type)
              )
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let S =
                null == (l = m.audio) ||
                null == (a = l.gen) ||
                null == (r = a.audio_model)
                  ? void 0
                  : r.prompt;
              if (!S)
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              this.retryingResourceIds.add(u);
              let E = new AbortController();
              this.activeSubmissionControllers.add(E);
              try {
                return await this.dispatchSeparation(I, S, E);
              } catch (e) {
                return {
                  ...(0, p.b)(e, E.signal),
                  ok: !1,
                  reason: "commandFailed",
                };
              } finally {
                (this.retryingResourceIds.delete(u),
                  this.activeSubmissionControllers.delete(E));
              }
            }),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.releaseSelection =
              null == (t = e.subscribeSelection)
                ? void 0
                : t.call(e, () => {
                    this.selectionEpoch += 1;
                  })),
            (this.releaseEditAvailability =
              null == (i = e.subscribeEditAvailability)
                ? void 0
                : i.call(e, () => {
                    e.getEditAvailability().local.available ||
                      ((this.selectionEpoch += 1),
                      this.abortPendingWork("editing unavailable"),
                      this.close());
                  })),
            (this.releaseModelAvailability =
              null == (s = e.modelAvailability)
                ? void 0
                : s.subscribe(() => {
                    var t;
                    if (null == (t = e.modelAvailability) || !t.getState()) {
                      for (let e of this.activeSubmissionControllers)
                        this.transportedSubmissionControllers.has(e) ||
                          e.abort("model unavailable");
                      this.close();
                    }
                  })));
        }
      }
      function y(e) {
        let {
          audioOutputIndex: t,
          nodeId: i,
          primaryResourceId: s,
          resources: o,
          title: r,
        } = e;
        for (let e of s ? o.filter((e) => e.resource_id === s) : o) {
          var a, d;
          if (e.status !== n.ao.success) continue;
          let s = (0, l.a0)(e, t),
            o = null == s ? void 0 : s.vid,
            u =
              null == (d = e.video) || null == (a = d.vid) ? void 0 : a.trim(),
            c = o ?? u;
          if (!c) continue;
          let h = o ? "audio" : "video",
            p =
              (null == s ? void 0 : s.urls) ??
              ("video" === h ? e.urls : void 0),
            f =
              (p && "url" in p && "string" == typeof p.url && p.url.trim()) ||
              void 0;
          return Object.freeze({
            nodeId: i,
            resourceId: e.resource_id,
            title: r,
            vid: c,
            ...(f ? { sourceUrl: f } : {}),
            mediaType: h,
            durationMs:
              "audio" === h ? (null == s ? void 0 : s.durationMs) : (0, m.F)(e),
          });
        }
        return null;
      }
      var E = i(28194),
        w = i(50075);
      class A extends Error {
        constructor(e, t) {
          (super(e, t), (this.name = "LocalArtifactPermanentFailure"));
        }
      }
      var C = i(24007);
      let R = "canvas.local_artifact_result.pipeline_step";
      class k {
        getState() {
          return this.input.editAvailability.getState();
        }
        async createAndPresentResultNodes(e, t) {
          let i = (0, a._D)(this.input.viewport);
          try {
            let s = await this.createResultNodes(e, t);
            if (!s.ok) return (i.cancel(), s);
            let [n, ...o] = s.value.nodeIds;
            if (!n)
              return (
                i.cancel(),
                { ok: !1, reason: "placeholderCreateFailed" }
              );
            return (i.present({ kind: "nodes", nodeIds: [n, ...o] }), s);
          } catch (e) {
            throw (i.cancel(), e);
          }
        }
        cancelAttempt(e) {
          var t, i;
          (this.stopWatchingNode(e),
            null == (t = e.stopAbortWatch) || t.call(e),
            (e.stopAbortWatch = void 0),
            e.controller.abort());
          try {
            this.input.canvas.uploads.release(e.nodeId);
          } catch (t) {
            null == (i = this.input.logger) ||
              i.warn(R, {
                nodeId: e.nodeId,
                result: "upload_release_failed",
                message: O(t),
              });
          }
        }
        abortAttempt(e) {
          this.attemptByNodeId.get(e.nodeId) === e &&
            (this.attemptByNodeId.delete(e.nodeId),
            this.cancelAttempt(e),
            this.getState().available && this.discardResultNode(e));
        }
        stopWatchingNode(e) {
          var t;
          (null == (t = e.stopNodeWatch) || t.call(e),
            (e.stopNodeWatch = void 0));
        }
        watchNodeRemoval(e) {
          e.stopNodeWatch = this.input.canvas.subscribeNode(e.nodeId, () => {
            this.attemptByNodeId.get(e.nodeId) !== e ||
              this.input.canvas.isNodePresent(e.nodeId) ||
              (this.attemptByNodeId.delete(e.nodeId), this.cancelAttempt(e));
          });
        }
        async createResultNodes(e, t) {
          let i;
          if (
            this.disposed ||
            this.input.canvas.isDisposed() ||
            !this.input.operations
          )
            return { ok: !1, reason: "runtimeUnavailable" };
          let s = this.input.editAvailability.getState();
          if (!s.available) return { ok: !1, reason: s.reason };
          if (null == t ? void 0 : t.aborted)
            return { ok: !1, reason: "sourceUnavailable" };
          let n = this.permissionGeneration,
            o = [],
            r = "placement";
          try {
            for (let s of ((r = "create_node"), e)) {
              let e = this.getState();
              if (
                !e.available ||
                (null == t ? void 0 : t.aborted) ||
                n !== this.permissionGeneration
              )
                return (
                  await this.rollbackAttempts(o),
                  {
                    ok: !1,
                    reason: e.available
                      ? n !== this.permissionGeneration
                        ? "permissionDenied"
                        : "sourceUnavailable"
                      : e.reason,
                  }
                );
              let r = await this.createResultNode(s);
              if (!r)
                return (
                  await this.rollbackAttempts(o),
                  { ok: !1, reason: "placeholderCreateFailed" }
                );
              (o.push(r), (i = r.nodeId));
              let a = this.getState();
              if (
                !a.available ||
                (null == t ? void 0 : t.aborted) ||
                this.disposed ||
                n !== this.permissionGeneration
              )
                return (
                  await this.rollbackAttempts(o),
                  {
                    ok: !1,
                    reason: a.available
                      ? n !== this.permissionGeneration
                        ? "permissionDenied"
                        : "sourceUnavailable"
                      : a.reason,
                  }
                );
            }
            for (let e of ((r = "begin_preparation"), o)) {
              if (((i = e.nodeId), this.attemptByNodeId.set(e.nodeId, e), t)) {
                let i = () => this.abortAttempt(e);
                (t.addEventListener("abort", i, { once: !0 }),
                  (e.stopAbortWatch = () => t.removeEventListener("abort", i)));
              }
              (this.watchNodeRemoval(e),
                this.input.canvas.uploads.beginNodeUploadPreparation(
                  e.nodeId,
                  e.origin,
                ));
            }
          } catch (t) {
            var a;
            let e = {
              result: "placeholder_create_failed",
              stage: r,
              message: O(t),
            };
            return (
              i && (e.nodeId = i),
              null == (a = this.input.logger) || a.warn(R, e),
              await this.rollbackAttempts(o),
              { ok: !1, reason: "placeholderCreateFailed" }
            );
          }
          return (
            this.enqueuePipelines(o),
            { ok: !0, value: { nodeIds: o.map((e) => e.nodeId) } }
          );
        }
        enqueuePipelines(e) {
          (this.pendingPipelines.push(...e), this.fillPipelineSlots());
        }
        fillPipelineSlots() {
          for (; this.activePipelineCount < 5 && !this.disposed; ) {
            let e = this.pendingPipelines.shift();
            if (!e) return;
            this.attemptByNodeId.get(e.nodeId) === e &&
              ((this.activePipelineCount += 1),
              this.runPipeline(e)
                .catch((t) => {
                  var i;
                  null == (i = this.input.logger) ||
                    i.warn(R, {
                      nodeId: e.nodeId,
                      result: "pipeline_queue_failed",
                      message: O(t),
                    });
                })
                .finally(() => {
                  ((this.activePipelineCount -= 1), this.fillPipelineSlots());
                }));
          }
        }
        async createResultNode(e) {
          let t = (
              this.input.createNodeId ?? (() => this.createResultNodeId())
            )(),
            i = (
              this.input.createResourceId ??
              function () {
                return crypto.randomUUID();
              }
            )(),
            s = {
              connection: {
                edgeType: "post_edit_provenance",
                createdNodeRole: "target",
                sourceNodeIds: [e.sourceNodeId],
              },
              node: {
                initialTitle: e.nodeTitle,
                kind: e.mediaKind,
                source: "post_edit_generated",
              },
              createdFrom: "generation",
              postEditCapability: e.postEditCapability,
              placement: e.placement,
              placementCollision: { kind: "rightward-free", gap: 80 },
            },
            n = {};
          void 0 !== t && ((s = { ...s, nodeId: t }), (n.subjectId = t));
          let o = await this.runOperation(
            "createLocalArtifactResultNode",
            n,
            (e) => this.input.canvas.actions.createConnectedNode(s, e),
          );
          if (!o || (void 0 !== t && o.nodeId !== t)) return null;
          let r = o.nodeId;
          return {
            attemptCount: 0,
            controller: new AbortController(),
            generation: Symbol(r),
            nodeId: r,
            origin: e.origin,
            receipt: o,
            request: e,
            resourceId: i,
          };
        }
        async rollbackAttempts(e) {
          for (let t of e)
            (this.attemptByNodeId.delete(t.nodeId),
              await this.discardResultNode(t));
        }
        async runPipeline(e) {
          let t;
          e.attemptCount += 1;
          try {
            var i;
            (this.assertAttemptCurrent(e),
              (t = await this.produce(e)),
              this.assertAttemptCurrent(e),
              await this.uploadAndBind(e, t.file),
              this.assertAttemptCurrent(e),
              this.attemptByNodeId.delete(e.nodeId),
              this.stopWatchingNode(e),
              null == (i = e.stopAbortWatch) || i.call(e),
              (e.stopAbortWatch = void 0),
              this.logPipeline(e, "pipeline_completion"));
          } catch (t) {
            await this.settleFailure(e, t);
          } finally {
            await _(t, this.input.logger);
          }
        }
        async produce(e) {
          return this.runOperation(
            "materializeLocalArtifact",
            { subjectId: e.nodeId, attempt: e.attemptCount },
            async () =>
              e.request.produce({
                signal: e.controller.signal,
                reportProgress: (t) => {
                  this.attemptByNodeId.get(e.nodeId) === e &&
                    this.input.canvas.uploads.reportNodeUploadPreparationProgress(
                      e.nodeId,
                      t,
                    );
                },
              }),
          );
        }
        async uploadAndBind(e, t) {
          await this.runOperation(
            "uploadLocalArtifact",
            { subjectId: e.nodeId, attempt: e.attemptCount },
            async () => {
              let i = this.input.canvas.uploads.start(
                e.nodeId,
                t,
                (t, i) =>
                  t === e.nodeId &&
                  this.attemptByNodeId.get(t) === e &&
                  !e.controller.signal.aborted &&
                  !!this.getState().available &&
                  this.input.canvas.actions.confirmConnectedNodeResourceBinding(
                    e.receipt,
                    i,
                  ),
                e.resourceId,
              );
              await i.completion;
            },
          );
        }
        async settleFailure(e, t) {
          var i;
          if (this.attemptByNodeId.get(e.nodeId) !== e) return;
          let s = this.resolveDisposition(e, t);
          (null == (i = this.input.logger) ||
            i.warn(R, {
              nodeId: e.nodeId,
              origin: e.origin,
              attempt: e.attemptCount,
              result: "failure",
              disposition: s,
              editable: this.input.editAvailability.getState().available,
              message: O(t),
            }),
            !("retryable" === s && this.presentRetryableFailure(e)) &&
              (await this.discardResultNode(e)) &&
              this.attemptByNodeId.delete(e.nodeId));
        }
        presentRetryableFailure(e) {
          try {
            return (
              this.input.canvas.uploads.failNodeUploadPreparation(
                e.nodeId,
                () => {
                  this.retryFailedAttempt(e.nodeId);
                },
              ),
              !0
            );
          } catch (i) {
            var t;
            return (
              null == (t = this.input.logger) ||
                t.warn(R, {
                  nodeId: e.nodeId,
                  result: "failure_presentation_failed",
                  message: O(i),
                }),
              !1
            );
          }
        }
        resolveDisposition(e, t) {
          if (
            this.disposed ||
            this.input.canvas.isDisposed() ||
            e.controller.signal.aborted
          )
            return "discard";
          let i = this.getState();
          return (i.available || "permissionDenied" !== i.reason) &&
            this.input.canvas.isNodePresent(e.nodeId)
            ? t instanceof A
              ? "discard"
              : "retryable"
            : "discard";
        }
        async retryFailedAttempt(e) {
          let t = this.attemptByNodeId.get(e);
          if (t && !this.disposed) {
            if (
              !this.input.editAvailability.getState().available ||
              !this.input.canvas.isNodePresent(e)
            ) {
              (this.attemptByNodeId.delete(e), await this.discardResultNode(t));
              return;
            }
            try {
              this.input.canvas.uploads.beginNodeUploadPreparation(e, t.origin);
            } catch (e) {
              await this.settleFailure(t, e);
              return;
            }
            this.enqueuePipelines([t]);
          }
        }
        async discardResultNode(e) {
          var t, i, s, n;
          (this.stopWatchingNode(e),
            null == (t = e.stopAbortWatch) || t.call(e),
            (e.stopAbortWatch = void 0));
          try {
            this.input.canvas.uploads.release(e.nodeId);
          } catch (t) {
            null == (i = this.input.logger) ||
              i.warn(R, {
                nodeId: e.nodeId,
                result: "upload_release_failed",
                message: O(t),
              });
          }
          if (!this.input.canvas.isNodePresent(e.nodeId)) return !0;
          let o = this.getState();
          if (!o.available && "permissionDenied" === o.reason) return !1;
          let r = e.receipt ?? this.recoverReceipt(e);
          try {
            if (await this.input.canvas.actions.discardConnectedNode(r))
              return !0;
            null == (s = this.input.logger) ||
              s.warn(R, {
                nodeId: e.nodeId,
                result: "topology_changed_before_discard",
              });
          } catch (t) {
            null == (n = this.input.logger) ||
              n.warn(R, {
                nodeId: e.nodeId,
                result: "discard_failed",
                message: O(t),
              });
          }
          return !1;
        }
        recoverReceipt(e) {
          return this.input.canvas.actions.recoverConnectedNodeReceipt({
            edgeIds: [],
            nodeId: e.nodeId,
            nodeType: e.request.mediaKind,
            sourceNodeIds: [e.request.sourceNodeId],
          });
        }
        assertAttemptCurrent(e) {
          if (
            this.attemptByNodeId.get(e.nodeId) !== e ||
            e.controller.signal.aborted
          )
            throw new DOMException(
              "Local artifact attempt is no longer current",
              "AbortError",
            );
          if (!this.getState().available)
            throw Error("Local artifact editing is unavailable");
        }
        logPipeline(e, t) {
          var i;
          null == (i = this.input.logger) ||
            i.info(R, {
              nodeId: e.nodeId,
              origin: e.origin,
              attempt: e.attemptCount,
              stage: t,
              result: "success",
            });
        }
        createResultNodeId() {
          return (0, C.aY)((e) => this.input.canvas.isNodePresent(e));
        }
        runOperation(e, t, i) {
          let s = this.input.operations;
          if (!s)
            throw Error(
              "LocalArtifactResultNodeOwner requires an OperationScope",
            );
          return s.run(e, { mode: "async", fields: t }, i);
        }
        constructor(e) {
          ((this.input = e),
            (this.attemptByNodeId = new Map()),
            (this.pendingPipelines = []),
            (this.activePipelineCount = 0),
            (this.disposed = !1),
            (this.permissionGeneration = 0),
            (this.launch = async (e, t) => {
              let i = await this.createAndPresentResultNodes([e], t);
              if (!i.ok) return i;
              let s = i.value.nodeIds[0];
              return void 0 === s
                ? { ok: !1, reason: "placeholderCreateFailed" }
                : { ok: !0, value: { nodeId: s } };
            }),
            (this.launchMany = async (e) => {
              let [t, ...i] = e;
              return t
                ? this.createAndPresentResultNodes([t, ...i])
                : { ok: !0, value: { nodeIds: [] } };
            }),
            (this.dispose = () => {
              if (!this.disposed)
                for (let e of ((this.disposed = !0),
                this.stopAvailabilityWatch(),
                (this.pendingPipelines.length = 0),
                [...this.attemptByNodeId.values()]))
                  (this.attemptByNodeId.delete(e.nodeId),
                    this.cancelAttempt(e));
            }),
            (this.stopAvailabilityWatch = e.editAvailability.subscribe(() => {
              let e = this.getState();
              if (!e.available && "permissionDenied" === e.reason)
                for (let e of ((this.permissionGeneration += 1),
                [...this.attemptByNodeId.values()]))
                  this.abortAttempt(e);
            })));
        }
      }
      async function _(e, t) {
        if (null == e ? void 0 : e.dispose)
          try {
            await e.dispose();
          } catch (e) {
            null == t ||
              t.warn(R, { result: "product_dispose_failed", message: O(e) });
          }
      }
      function O(e) {
        return e instanceof Error ? e.message : String(e);
      }
      class P {
        async materialize(e, t, s) {
          (t.throwIfAborted(), await (0, E.wg)(t), t.throwIfAborted());
          let {
            ALL_FORMATS: n,
            BlobSource: o,
            canEncodeAudio: r,
            Conversion: a,
            Input: l,
            Mp4OutputFormat: d,
            Output: u,
            StreamTarget: c,
          } = await Promise.all([i.e(7140), i.e(4244), i.e(1771)]).then(
            i.bind(i, 58047),
          );
          t.throwIfAborted();
          let h = null,
            p = null,
            m = null,
            f = null,
            b = () => {
              (null == m || m.dispose(), f && f.cancel());
            };
          t.addEventListener("abort", b, { once: !0 });
          try {
            let i;
            ((h = await T(e.outputName, t)),
              (p = await (0, E.yd)(e.sourceUrl, t, (e) =>
                null == s ? void 0 : s({ progress: e, stage: "downloading" }),
              )),
              t.throwIfAborted());
            let b = new o(await p.handle.getFile());
            m = new l({ formats: n, source: b });
            let g = await m.getPrimaryAudioTrack();
            t.throwIfAborted();
            let v = await N(r, g),
              I = new u({
                format: new d({ fastStart: !1 }),
                target: new c(h.stream, { chunked: !0 }),
              });
            ((f = await a.init({
              input: m,
              output: I,
              showWarnings: !1,
              trim: { start: e.range.startMs / 1e3, end: e.range.endMs / 1e3 },
              video: { discard: !0 },
              audio: {
                codec: "aac",
                bitrate: 192e3,
                forceTranscode: !0,
                numberOfChannels: v.numberOfChannels,
                sampleRate: v.sampleRate,
              },
            })),
              await D(f, t, s));
            let S = await h.handle.getFile();
            return {
              file: new File(
                [S],
                (i = e.outputName.trim() || "trimmed-audio")
                  .toLowerCase()
                  .endsWith(".m4a")
                  ? i
                  : `${i}.m4a`,
                { lastModified: Date.now(), type: "audio/mp4" },
              ),
              dispose: h.dispose,
            };
          } catch (e) {
            throw (
              await (null == h ? void 0 : h.abort(e).catch(() => void 0)),
              await (null == h ? void 0 : h.dispose().catch(() => void 0)),
              e instanceof w.X ? new A(e.message) : e
            );
          } finally {
            (t.removeEventListener("abort", b),
              null == m || m.dispose(),
              await (null == p ? void 0 : p.dispose().catch(() => void 0)));
          }
        }
      }
      async function D(e, t, i) {
        var s;
        let n;
        if (!e.isValid)
          throw Error(
            "The source audio cannot be converted to AAC/M4A in this browser.",
          );
        let o =
          ((s = (e) =>
            null == i ? void 0 : i({ progress: e, stage: "converting" })),
          (n = -1),
          (e) => {
            let t = Math.min(100, Math.max(0, Math.round(e)));
            t !== n && ((n = t), s(t));
          });
        (i && (e.onProgress = (e) => o(100 * e)),
          o(0),
          t.throwIfAborted(),
          await e.execute(),
          t.throwIfAborted(),
          o(100));
      }
      async function N(e, t) {
        let i = { numberOfChannels: 2, sampleRate: 48e3 },
          s = U(null == t ? void 0 : t.numberOfChannels),
          n = U(null == t ? void 0 : t.sampleRate);
        if (void 0 !== s && void 0 !== n) {
          let t = { numberOfChannels: s, sampleRate: n };
          if (await e("aac", { ...t, bitrate: 192e3 })) return t;
        }
        if (await e("aac", { ...i, bitrate: 192e3 })) return i;
        throw new A("AAC audio encoding is unavailable in this browser.");
      }
      function U(e) {
        return void 0 !== e && Number.isInteger(e) && e > 0 ? e : void 0;
      }
      async function T(e, t) {
        let i = await (0, E.DH)(e),
          s = await (0, w.n)(i, t),
          n = new WritableStream({
            abort: (e) => s.abort(e),
            close: () => s.close(),
            write: (e) => s.write(e.data, e.position),
          }),
          o = async (e) => {
            try {
              await s.abort(e);
            } catch (e) {
              if (
                !(e instanceof DOMException && "InvalidStateError" === e.name)
              )
                throw e;
            }
          };
        return { ...i, abort: o, stream: n };
      }
      var M = i(51371),
        x = i(89008),
        F = i(4081),
        j = i(6129),
        L = i(2255),
        z = i(86995);
      class B {
        notify(e) {
          for (let t of this.listeners.get(e) ?? []) t();
        }
        constructor() {
          ((this.elements = new Map()),
            (this.listeners = new Map()),
            (this.get = (e) => {
              var t;
              return (
                (null == (t = this.elements.get(e)) ? void 0 : t.audio) ?? null
              );
            }),
            (this.register = (e, t) => {
              let i = Symbol(e);
              return (
                this.elements.set(e, { audio: t, registration: i }),
                this.notify(e),
                () => {
                  var t;
                  (null == (t = this.elements.get(e))
                    ? void 0
                    : t.registration) === i &&
                    (this.elements.delete(e), this.notify(e));
                }
              );
            }),
            (this.subscribe = (e, t) => {
              let i = this.listeners.get(e) ?? new Set();
              return (
                i.add(t),
                this.listeners.set(e, i),
                () => {
                  (i.delete(t), 0 === i.size && this.listeners.delete(e));
                }
              );
            }));
        }
      }
      let q = Object.freeze({ status: "inactive" }),
        V = 0;
      class H {
        async launchResultNode(e, t) {
          let i = (0, M.Y6)(e.source.title),
            s = e.source.sourceUrl,
            n = await this.dependencies.resultNodeOwner.launch({
              mediaKind: "audio",
              nodeTitle: i,
              origin: "audio-trim",
              postEditCapability: "audioTrim",
              placement: this.resolveResultPlacement(e.source.nodeId),
              sourceNodeId: e.source.nodeId,
              produce: async (e) => {
                let { reportProgress: n, signal: o } = e,
                  r = await this.dependencies.materializer.materialize(
                    { outputName: `${i}.m4a`, range: t, sourceUrl: s },
                    o,
                    (e) => {
                      let { progress: t } = e;
                      null !== t && n(t);
                    },
                  ),
                  a = this.readSubmitBlockReason();
                if (a)
                  throw (
                    await r.dispose(),
                    Error(
                      `Audio trim materialization blocked before upload: ${a}.`,
                    )
                  );
                return { file: r.file, dispose: r.dispose };
              },
            });
          return this.isActiveSession(e.sessionId)
            ? n.ok
              ? (this.completeSuccessfulSession(), { nodeId: n.value.nodeId })
              : (this.dependencies.logger.error(
                  "audio trim result node launch failed",
                  n.reason,
                  { nodeId: e.source.nodeId },
                ),
                this.publishSubmission(e.sessionId, {
                  phase: "failed",
                  errorMessage: (0, M.E4)(),
                }),
                null)
            : null;
        }
        resolveResultPlacement(e) {
          let t = this.dependencies.getObjectSnapshot(e);
          return {
            x:
              (t && Number.isFinite(t.layout.x)
                ? t.layout.x + t.layout.width
                : 0) + 80,
            y: t && Number.isFinite(t.layout.y) ? t.layout.y : 0,
            ...F.ZL.audio,
          };
        }
        completeSuccessfulSession() {
          ((this.snapshot = q), this.notify());
        }
        publishSubmission(e, t) {
          this.isActiveSession(e) &&
            "active" === this.snapshot.status &&
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              submission: Object.freeze(t),
            })),
            this.notify());
        }
        isActiveSession(e) {
          return (
            "active" === this.snapshot.status && this.snapshot.sessionId === e
          );
        }
        readSubmitBlockReason() {
          let e = this.dependencies.resultNodeOwner.getState();
          return e.available ? null : e.reason;
        }
        publishFailedSubmission(e, t) {
          (this.publishSubmission(e, {
            phase: "failed",
            errorMessage: (0, M.E4)(),
          }),
            this.dependencies.logger.warn(
              "audio trim submit blocked before creating the result node",
              { reason: t },
            ));
        }
        notify() {
          let e =
            "active" === this.snapshot.status
              ? this.snapshot.source.nodeId
              : null;
          if (this.notifiedSourceNodeId !== e) {
            let t = this.notifiedSourceNodeId;
            if (((this.notifiedSourceNodeId = e), t))
              for (let e of this.sourceListeners.get(t) ?? []) e();
            if (e) for (let t of this.sourceListeners.get(e) ?? []) t();
          }
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.sourceAudioElements = new B()),
            (this.listeners = new Set()),
            (this.notifiedSourceNodeId = null),
            (this.pending = null),
            (this.snapshot = q),
            (this.sourceListeners = new Map()),
            (this.close = () => {
              "inactive" !== this.snapshot.status &&
                ((this.pending = null), (this.snapshot = q), this.notify());
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.isSourceActive = (e) =>
              "active" === this.snapshot.status &&
              this.snapshot.source.nodeId === e),
            (this.open = (e) => {
              var t;
              let { nodeIds: i } = e,
                s = this.readSubmitBlockReason();
              if (s) return { ok: !1, reason: s };
              let n = 1 === i.length ? i[0] : void 0;
              if (!n)
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let o = this.dependencies.getObjectSnapshot(n);
              if ((null == o ? void 0 : o.type) !== "audio")
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let r = (0, j.oP)({
                nodeId: n,
                audioOutputIndex: o.data.audioOutputIndex,
                primaryResourceId: o.data.resourceId,
                resources: this.dependencies.getResourceBindings(n),
                title: o.data.title,
              });
              if (!(0, L.r)(r))
                return {
                  code: (0, L.W)(r)
                    ? "DURATION_TOO_SHORT"
                    : "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let a = Object.freeze({
                ...r,
                durationMs: r.durationMs,
                sourceUrl: r.sourceUrl,
              });
              return (
                (this.snapshot = Object.freeze({
                  sessionId:
                    "function" ==
                    typeof (null == (t = globalThis.crypto)
                      ? void 0
                      : t.randomUUID)
                      ? globalThis.crypto.randomUUID()
                      : ((V += 1), `audio-trim-${V}`),
                  source: a,
                  status: "active",
                  submission: Object.freeze({ phase: "idle" }),
                })),
                this.dependencies.facts.emit(x.q, {
                  durationMs: a.durationMs,
                  sourceNodeId: a.nodeId,
                }),
                this.notify(),
                { ok: !0, value: { sessionId: this.snapshot.sessionId } }
              );
            }),
            (this.submit = async (e) => {
              var t, i;
              if (this.pending) return this.pending;
              if (
                "active" !== this.snapshot.status ||
                !(0, z.k8)(e, this.snapshot.source.durationMs)
              )
                return null;
              let s = this.readSubmitBlockReason();
              if (s)
                return (
                  this.publishFailedSubmission(this.snapshot.sessionId, s),
                  null
                );
              let n = this.snapshot;
              (null == (t = (i = this.dependencies).reportPostEditAction) ||
                t.call(i, n.source.nodeId, "click_cut"),
                this.publishSubmission(n.sessionId, { phase: "submitting" }));
              let o = this.launchResultNode(n, e)
                .catch(
                  (e) => (
                    this.dependencies.logger.error(
                      "audio trim result node launch failed",
                      e,
                      { nodeId: n.source.nodeId },
                    ),
                    this.publishSubmission(n.sessionId, {
                      phase: "failed",
                      errorMessage: (0, M.E4)(),
                    }),
                    null
                  ),
                )
                .finally(() => {
                  this.pending === o && (this.pending = null);
                });
              return ((this.pending = o), o);
            }),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.subscribeSource = (e, t) => {
              let i = this.sourceListeners.get(e) ?? new Set();
              return (
                i.add(t),
                this.sourceListeners.set(e, i),
                () => {
                  (i.delete(t), 0 === i.size && this.sourceListeners.delete(e));
                }
              );
            }));
        }
      }
      var W = i(35623);
      let G = Object.freeze({ status: "inactive" }),
        K = 0;
      class $ {
        openSession(e, t) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (
            !("batch" === e ? t.length >= 2 && t.length <= 20 : 1 === t.length)
          )
            return {
              code:
                0 === t.length ? "EMPTY_SELECTION" : "UNSUPPORTED_SELECTION",
              ok: !1,
              reason: "commandFailed",
            };
          let s =
            "batch" === e
              ? this.dependencies.imagePostEdit.openBatch({
                  mode: "image-hd",
                  nodeIds: t,
                })
              : this.dependencies.imagePostEdit.open({
                  ...i,
                  mode: "image-hd",
                  nodeIds: t,
                });
          if (!s.ok) return s;
          let n = this.dependencies.imagePostEdit.getSnapshot();
          if (
            "active" !== n.status ||
            "image-hd" !== n.mode ||
            n.sources.length !== t.length ||
            n.selectionKind !== e
          )
            return (
              this.dependencies.imagePostEdit.close(),
              {
                code: "INVALID_POST_EDIT_SESSION",
                ok: !1,
                reason: "commandFailed",
              }
            );
          let o = Object.freeze({
              detail: 50,
              mode: "pro",
              resolution: "4k",
              selectionKind: e,
              sessionId: s.value.sessionId,
              sources: Object.freeze(n.sources),
            }),
            r = this.snapshot.notification;
          return (
            (this.pendingSubmissionSessionId = void 0),
            (this.snapshot = this.createActiveSnapshot(o, "idle", r)),
            this.notify(),
            s
          );
        }
        async submitSession(e) {
          if ("active" !== this.snapshot.status)
            return {
              code: "INACTIVE_SESSION",
              ok: !1,
              reason: "commandFailed",
            };
          if (this.snapshot.selectionKind !== e)
            return {
              code: "UNSUPPORTED_SESSION",
              ok: !1,
              reason: "commandFailed",
            };
          if ("submitting" === this.snapshot.submitState)
            return {
              code: "ALREADY_SUBMITTING",
              ok: !1,
              reason: "commandFailed",
            };
          if ("maximumSize" === this.snapshot.submitDisabledReason)
            return { code: "MAXIMUM_SIZE", ok: !1, reason: "commandFailed" };
          let t = this.snapshot;
          if (0 === t.sources.length)
            return {
              code: "SOURCE_RESOURCE_UNAVAILABLE",
              ok: !1,
              reason: "commandFailed",
            };
          let i =
            "normal" === t.mode
              ? t.sources.filter((e) => (0, W.lr)(e)).map((e) => e.nodeId)
              : t.sources.map((e) => e.nodeId);
          ((this.pendingSubmissionSessionId = t.sessionId),
            (this.snapshot = this.createActiveSnapshot(X(t), "submitting")),
            this.notify());
          let s =
              "normal" === t.mode
                ? { kind: "normal", mode: "image-hd", sourceNodeIds: i }
                : {
                    detailStrength: t.detail / 100,
                    kind: "pro",
                    mode: "image-hd",
                    resolution: (function (e) {
                      switch (e) {
                        case "2k":
                          return "2K";
                        case "4k":
                          return "4K";
                        case "8k":
                          return "8K";
                      }
                    })(t.resolution),
                    sourceNodeIds: i,
                  },
            n =
              "batch" === e
                ? await this.dependencies.imagePostEdit.submitBatch(s)
                : await this.dependencies.imagePostEdit.submit(s);
          if (this.pendingSubmissionSessionId !== t.sessionId) {
            var o;
            return n.ok
              ? { ok: !0, value: { submittedNodeIds: i } }
              : "permissionDenied" === (o = n.reason) || "notEditingReady" === o
                ? { ok: !1, reason: o }
                : { code: "SUBMIT_FAILED", ok: !1, reason: "commandFailed" };
          }
          if (((this.pendingSubmissionSessionId = void 0), n.ok)) {
            this.dependencies.exitEditingContext();
            let e = "submittedNodeIds" in n ? (n.submittedNodeIds ?? i) : i;
            return (
              (this.snapshot = G),
              this.notify(),
              { ok: !0, value: { submittedNodeIds: e } }
            );
          }
          return "permissionDenied" === n.reason ||
            "notEditingReady" === n.reason
            ? ((this.snapshot = this.createActiveSnapshot(X(t), "idle")),
              this.notify(),
              { ok: !1, reason: n.reason })
            : ((this.snapshot = this.createActiveSnapshot(X(t), "failed", {
                id: (K += 1),
                kind: "batch" === e ? "batchSubmitFailed" : "submitFailed",
              })),
              this.notify(),
              { code: "SUBMIT_FAILED", ok: !1, reason: "commandFailed" });
        }
        createActiveSnapshot(e, t, i) {
          let s = e.sources.filter((e) => (0, W.lr)(e)).length,
            n = 0 === s ? "maximumSize" : void 0,
            o = "normal" === e.mode ? n : void 0;
          return Object.freeze({
            ...e,
            eligibleCount: "normal" === e.mode ? s : e.sources.length,
            ...(i ? { notification: i } : {}),
            ...(n ? { normalModeDisabledReason: n } : {}),
            skippedCount: "normal" === e.mode ? e.sources.length - s : 0,
            status: "active",
            ...(o ? { submitDisabledReason: o } : {}),
            submitState: t,
          });
        }
        notify() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.listeners = new Set()),
            (this.snapshot = G),
            (this.close = () => {
              var e;
              (this.dependencies.imagePostEdit.close(),
                (this.pendingSubmissionSessionId = void 0),
                "inactive" !== this.snapshot.status &&
                  ((this.snapshot = (e = this.snapshot.notification)
                    ? Object.freeze({ notification: e, status: "inactive" })
                    : G),
                  this.notify()));
            }),
            (this.dismissNotification = (e) => {
              var t;
              (null == (t = this.snapshot.notification) ? void 0 : t.id) ===
                e &&
                ((this.snapshot =
                  "active" === this.snapshot.status
                    ? this.createActiveSnapshot(
                        X(this.snapshot),
                        this.snapshot.submitState,
                      )
                    : G),
                this.notify());
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.open = (e) => this.openSession("single", e.nodeIds, e)),
            (this.openBatch = (e) => {
              let { nodeIds: t } = e;
              return this.openSession("batch", t);
            }),
            (this.setDetail = (e) => {
              if (
                "active" !== this.snapshot.status ||
                "submitting" === this.snapshot.submitState
              )
                return;
              let t = Math.min(100, Math.max(1, Math.round(e)));
              t !== this.snapshot.detail &&
                ((this.snapshot = this.createActiveSnapshot(
                  { ...X(this.snapshot), detail: t },
                  "idle",
                )),
                this.notify());
            }),
            (this.setMode = (e) => {
              "active" !== this.snapshot.status ||
                "submitting" === this.snapshot.submitState ||
                this.snapshot.mode === e ||
                ("normal" === e && this.snapshot.normalModeDisabledReason) ||
                ((this.snapshot = this.createActiveSnapshot(
                  { ...X(this.snapshot), mode: e },
                  "idle",
                )),
                this.notify());
            }),
            (this.setResolution = (e) => {
              "active" === this.snapshot.status &&
                "submitting" !== this.snapshot.submitState &&
                this.snapshot.resolution !== e &&
                ((this.snapshot = this.createActiveSnapshot(
                  { ...X(this.snapshot), resolution: e },
                  "idle",
                )),
                this.notify());
            }),
            (this.submit = () => this.submitSession("single")),
            (this.submitBatch = () => this.submitSession("batch")),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.dependencies = e));
        }
      }
      function X(e) {
        return {
          detail: e.detail,
          mode: e.mode,
          resolution: e.resolution,
          selectionKind: e.selectionKind,
          sessionId: e.sessionId,
          sources: e.sources,
        };
      }
      var Q = i(52958);
      class Y {
        async exportAsset(e) {
          ((function (e) {
            if (
              e.selection.width !== e.source.width ||
              e.selection.height !== e.source.height
            )
              throw Error(
                "Cutout selection dimensions must match the source image.",
              );
          })(e),
            ee(e.signal));
          let t = null,
            i = null;
          try {
            var s, n;
            let o = e.source.pixelSourceUrl;
            if (!o) throw Error("Cutout source pixel URL is unavailable.");
            let r = await this.readSource(o, e.signal);
            if (
              (ee(e.signal),
              (t = await this.decodeSource(r)),
              ee(e.signal),
              t.width !== e.source.width || t.height !== e.source.height)
            )
              throw Error(
                "Decoded Cutout source dimensions must match the source image.",
              );
            (((i = this.createCanvas()).width = e.source.width),
              (i.height = e.source.height));
            let a = i.getContext("2d", { willReadFrequently: !0 });
            if (!a)
              throw Error("Cutout PNG export requires a readable 2D canvas.");
            a.drawImage(t.canvasSource, 0, 0, e.source.width, e.source.height);
            let l = a.getImageData(0, 0, e.source.width, e.source.height);
            if (
              ((function (e, t) {
                if (e.length !== 4 * t.length)
                  throw Error(
                    "Cutout source pixels and selection coverage must contain the same pixel count.",
                  );
                for (let i = 0; i < t.length; i += 1) {
                  let s = 4 * i + 3,
                    n = e[s] ?? 0,
                    o = t[i] ?? 0;
                  e[s] = Math.round((n * o) / 255);
                }
              })(l.data, e.selection.alpha),
              this.requireVisiblePixels &&
                !l.data.some((e, t) => t % 4 == 3 && e > 0))
            )
              throw Error("The selected product contains no visible pixels.");
            (a.putImageData(l, 0, 0), ee(e.signal));
            let d = await ((s = i),
            (n = e.signal),
            new Promise((e, t) => {
              let i = () =>
                t(
                  new DOMException(
                    "Cutout PNG export was canceled.",
                    "AbortError",
                  ),
                );
              (n.addEventListener("abort", i, { once: !0 }),
                s.toBlob((s) => {
                  (n.removeEventListener("abort", i),
                    n.aborted
                      ? t(
                          new DOMException(
                            "Cutout PNG export was canceled.",
                            "AbortError",
                          ),
                        )
                      : s && "image/png" === s.type
                        ? e(s)
                        : t(
                            Error(
                              "Cutout PNG export returned an invalid image.",
                            ),
                          ));
                }, "image/png"));
            }));
            return new File(
              [d],
              `cutout-${e.source.resourceId ?? "product"}.png`,
              { type: "image/png" },
            );
          } finally {
            (null == t || t.close(), i && ((i.width = 0), (i.height = 0)));
          }
        }
        constructor(e = {}) {
          ((this.identity = "cutout-transparent-png:v1"),
            (this.outputKind = "CUTOUT_IMAGE"),
            (this.requireVisiblePixels = e.requireVisiblePixels ?? !1),
            (this.createCanvas =
              e.createCanvas ?? (() => document.createElement("canvas"))),
            (this.decodeSource = e.decodeSource ?? Z),
            (this.readSource = e.readSource ?? J));
        }
      }
      async function J(e, t) {
        let i = await fetch(e, { mode: "cors", signal: t });
        if (!i.ok) throw Error("Cutout source image is unreadable.");
        return i.blob();
      }
      async function Z(e) {
        if ("function" != typeof createImageBitmap)
          throw Error("Cutout source decoding is unavailable.");
        let t = await createImageBitmap(e);
        return {
          canvasSource: t,
          close: () => t.close(),
          height: t.height,
          width: t.width,
        };
      }
      function ee(e) {
        if (e.aborted)
          throw new DOMException(
            "Cutout PNG export was canceled.",
            "AbortError",
          );
      }
      var et = i(74236);
      class ei extends Error {
        constructor(e, t) {
          (super(`Mask asset preparation failed during ${e}.`, {
            cause: t.cause,
          }),
            (this.name = "MaskAssetPreparationError"),
            (this.retryable = t.retryable),
            (this.stage = e));
        }
      }
      class es {
        async execute(e, t) {
          er(t.signal);
          let i = await this.export(e, t.signal);
          er(t.signal);
          let s = await this.upload(i, t);
          return {
            attemptIdentity: en(e),
            outputKind: e.adapter.outputKind,
            storageKey: s,
          };
        }
        async export(e, t) {
          if (
            e.document.width !== e.source.width ||
            e.document.height !== e.source.height
          )
            throw new ei("export", { retryable: !1 });
          let i = await eo(
            this.replayDocument(e.document, { signal: t }),
            t,
            (e) => e.release(),
          );
          try {
            er(t);
            let s = Object.freeze({
                alpha: i.pixels,
                height: i.height,
                width: i.width,
              }),
              n = await eo(
                e.adapter.exportAsset({
                  selection: s,
                  signal: t,
                  source: e.source,
                }),
                t,
              );
            if ((er(t), !(n instanceof File)))
              throw new ei("export", { retryable: !1 });
            return n;
          } catch (e) {
            if (e instanceof ei || ea(e)) throw e;
            throw new ei("export", { cause: e, retryable: !1 });
          } finally {
            i.release();
          }
        }
        async upload(e, t) {
          try {
            er(t.signal);
            let i = await eo(
              this.mediaUploadService.upload(
                { file: e, validationProfile: "post-edit-image" },
                {
                  ...(t.onProgress ? { onProgress: t.onProgress } : {}),
                  signal: t.signal,
                },
              ),
              t.signal,
            );
            if ((er(t.signal), "image" !== i.mediaType))
              throw new ei("upload", { retryable: !1 });
            let s = i.storageKey.trim();
            if (!s) throw new ei("upload", { retryable: !1 });
            return s;
          } catch (e) {
            if (e instanceof ei || ea(e)) throw e;
            throw new ei("upload", { cause: e, retryable: !0 });
          }
        }
        constructor(e) {
          if (
            ((this.mediaUploadService = e.mediaUploadService), e.replayDocument)
          )
            this.replayDocument = e.replayDocument;
          else {
            const t = e.loadRemoteSelection;
            if (!t)
              throw Error(
                "Mask asset preparation requires a remote selection loader.",
              );
            this.replayDocument = (e, i) =>
              (0, et.RF)(e, { loadRemoteSelection: t, signal: i.signal });
          }
        }
      }
      function en(e) {
        let t = e.adapter.identity.trim(),
          i = e.documentIdentity.trim(),
          s = e.sessionId.trim();
        if (!t || !i || !s)
          throw Error("Mask asset attempt identity must be non-empty.");
        return Object.freeze({
          adapterIdentity: t,
          documentIdentity: i,
          documentRevision: e.document.revision,
          outputKind: e.adapter.outputKind,
          sessionId: s,
          source: Object.freeze({
            height: e.source.height,
            imageUri: e.source.imageUri,
            nodeId: e.source.nodeId,
            resourceId: e.source.resourceId,
            width: e.source.width,
          }),
        });
      }
      function eo(e, t, i) {
        return t.aborted
          ? (i && e.then(i, () => void 0),
            Promise.reject(
              new DOMException(
                "Mask asset preparation was canceled.",
                "AbortError",
              ),
            ))
          : new Promise((s, n) => {
              let o = "pending",
                r = () => {
                  "pending" === o &&
                    ((o = "aborted"),
                    n(
                      new DOMException(
                        "Mask asset preparation was canceled.",
                        "AbortError",
                      ),
                    ));
                };
              (t.addEventListener("abort", r, { once: !0 }),
                e.then(
                  (e) => {
                    if ((t.removeEventListener("abort", r), "aborted" === o)) {
                      null == i || i(e);
                      return;
                    }
                    "settled" !== o && ((o = "settled"), s(e));
                  },
                  (e) => {
                    (t.removeEventListener("abort", r),
                      "pending" === o && ((o = "settled"), n(e)));
                  },
                ));
            });
      }
      function er(e) {
        if (e.aborted)
          throw new DOMException(
            "Mask asset preparation was canceled.",
            "AbortError",
          );
      }
      function ea(e) {
        return e instanceof DOMException && "AbortError" === e.name;
      }
      var el = i(65013),
        ed = i(47539),
        eu = i(90962);
      class ec {
        async cutout(e, t) {
          let i = await this.recognize(e, { action: "initial" }, t);
          if ("initial" !== i.output.action)
            throw (ep(i.output), new ed.v("failed"));
          let s = (0, Q.V)({
            document: i.output.document,
            documentIdentity: `${ed.L}:${e.resourceId}`,
            source: i.source,
          });
          if (!s.ok) throw new ed.v("failed");
          return this.materialize(s.intent, t);
        }
        async recognize(e, t, i) {
          let s = this.resolveSource(e);
          ((function (e, t) {
            if ("quick-select" === t.action && !t.currentDocument)
              throw new ed.v("failed");
            t.currentDocument && eh(t.currentDocument, e);
          })(s, t),
            ef(i));
          let n = await this.run(() =>
            this.dependencies.recognition.recognize({
              action: t.action,
              ...(t.currentDocument
                ? { currentDocument: t.currentDocument }
                : {}),
              signal: i.signal,
              source: s,
            }),
          );
          try {
            return (
              ef(i),
              (function (e, t, i) {
                if (e.action !== t.action)
                  throw Error(
                    "Layer cutout recognition returned an unexpected action.",
                  );
                if ("initial" === e.action) {
                  if (
                    (eh(e.document, i),
                    t.currentDocument &&
                      e.document.revision <= t.currentDocument.revision)
                  )
                    throw Error(
                      "Replacement layer cutout document must advance its revision.",
                    );
                  return;
                }
                if (
                  e.candidates.width !== i.width ||
                  e.candidates.height !== i.height ||
                  e.candidates.count < 1
                )
                  throw Error(
                    "Layer cutout candidates do not match the source image.",
                  );
              })(n, t, s),
              { output: n, source: s }
            );
          } catch (e) {
            if ((ep(n), e instanceof ed.v || (0, eu.z)(e))) throw e;
            throw new ed.v("failed", { cause: e });
          }
        }
        async materialize(e, t) {
          ef(t);
          let i = this.resolveSource({ resourceId: e.source.resourceId });
          var s = e,
            n = i;
          let o = (0, Q.V)({
            document: s.document,
            documentIdentity: s.documentIdentity,
            source: s.source,
          });
          if (
            !o.ok ||
            o.intent.revision !== s.revision ||
            o.intent.modified !== s.modified ||
            !s.documentIdentity.trim() ||
            s.source.nodeId !== ed.L ||
            s.source.resourceId !== n.resourceId ||
            s.source.imageUri !== n.imageUri ||
            s.source.pixelSourceUrl !== n.pixelSourceUrl ||
            s.source.width !== n.width ||
            s.source.height !== n.height
          )
            throw new ed.v("failed");
          let r = await this.run(() =>
            this.exporter.export(
              {
                adapter: this.adapter,
                document: e.document,
                documentIdentity: e.documentIdentity,
                sessionId: crypto.randomUUID(),
                source: i,
              },
              t.signal,
            ),
          );
          ef(t);
          let a = await this.run(() =>
            (this.dependencies.measureCoverage ?? em)(r),
          );
          if ((ef(t), a < 0.005)) throw new ed.v("noSubject");
          let l = await this.run(() =>
            this.dependencies.upload.upload(r, {
              ...t,
              validationProfile: "post-edit-image",
              resourceOrigin: t.resourceOrigin ?? "layer_cutout",
              sourceResourceId: t.sourceResourceId ?? e.source.resourceId,
            }),
          );
          return (
            ef(t),
            { resourceId: l.resourceId, width: l.width, height: l.height }
          );
        }
        resolveSource(e) {
          let t = (0, el.Fx)({
            nodeId: ed.L,
            primaryResourceId: e.resourceId,
            resources: this.dependencies
              .getResourceStates([e.resourceId])
              .filter((e) => void 0 !== e),
            title: "",
          });
          if (!(null == t ? void 0 : t.pixelSourceUrl))
            throw new ed.v("sourceUnavailable");
          if (!(0, el.Dp)(t)) throw new ed.v("sourceTooLarge");
          return t;
        }
        async run(e) {
          try {
            return await e();
          } catch (e) {
            if (e instanceof ed.v || (0, eu.z)(e)) throw e;
            if (e instanceof eu.f && "notWritable" === e.reason)
              throw new ed.v("notWritable", { cause: e });
            throw new ed.v("failed", { cause: e });
          }
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.adapter = e.adapter ?? new Y()),
            (this.exporter =
              e.exporter ??
              new es({
                loadRemoteSelection: e.loadRemoteSelection,
                mediaUploadService: e.mediaUploadService,
              })));
        }
      }
      function eh(e, t) {
        if (
          e.width !== t.width ||
          e.height !== t.height ||
          !Number.isSafeInteger(e.revision) ||
          e.revision < 0 ||
          ("remote" === e.initialMask.kind &&
            (!e.initialMask.uri.trim() || !e.initialMask.url.trim()))
        )
          throw new ed.v("failed");
      }
      function ep(e) {
        "quick-select" === e.action && e.candidates.dispose();
      }
      async function em(e) {
        let t = await createImageBitmap(e),
          i = document.createElement("canvas");
        try {
          ((i.width = t.width), (i.height = t.height));
          let e = i.getContext("2d", { willReadFrequently: !0 });
          if (!e) throw Error("Cutout coverage check requires a 2D canvas.");
          e.drawImage(t, 0, 0);
          let s = e.getImageData(0, 0, t.width, t.height).data,
            n = 0;
          for (let e = 3; e < s.length; e += 4) (s[e] ?? 0) >= 128 && (n += 1);
          return n / Math.max(1, t.width * t.height);
        } finally {
          (t.close(), (i.width = 0), (i.height = 0));
        }
      }
      function ef(e) {
        if (e.signal.aborted)
          throw e.signal.reason ?? new DOMException("Aborted", "AbortError");
        if (!e.canWrite()) throw new ed.v("notWritable");
      }
      var eb = i(59078),
        eg = i(93054);
      async function ev(e, t) {
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!(e.width > 0) || !(e.height > 0))
          throw new A("Layer board has no drawable size.");
        let s = i.loadBitmap ?? eS,
          n = [];
        try {
          var o;
          let r = await eI(e.baseUrls, t, s);
          n.push(r);
          let a = [];
          for (let i of e.layers) {
            let e = await eI(i.urls, t, s);
            (n.push(e), a.push(e));
          }
          ey(t);
          let l = i.maxOutputPixels ?? eg.Mo,
            d = Math.min(1, Math.sqrt(l / (e.width * e.height))),
            u = Math.max(1, Math.round(e.width * d)),
            c = Math.max(1, Math.round(e.height * d)),
            h = (
              i.createCanvas ??
              function () {
                return document.createElement("canvas");
              }
            )();
          ((h.width = u), (h.height = c));
          let p = h.getContext("2d");
          if (!p) throw new A("2D canvas is unavailable.");
          return (
            p.drawImage(r, 0, 0, u, c),
            e.layers.forEach((e, t) => {
              let i = a[t];
              if (!i) return;
              let s = e.width * d,
                n = e.height * d;
              (p.save(),
                p.translate((e.x + e.width / 2) * d, (e.y + e.height / 2) * d),
                e.rotation && p.rotate((e.rotation * Math.PI) / 180),
                p.scale(e.flipX ? -1 : 1, e.flipY ? -1 : 1),
                p.drawImage(i, -s / 2, -n / 2, s, n),
                p.restore());
            }),
            await ((o = h),
            new Promise((e, t) => {
              o.toBlob((i) => {
                i ? e(i) : t(new A("Merged layer board could not be encoded."));
              }, "image/png");
            }))
          );
        } finally {
          for (let e of n) e.close();
        }
      }
      async function eI(e, t, i) {
        let s = new A("Layer image has no source url.");
        for (let n of e) {
          ey(t);
          try {
            return await i(n, t);
          } catch (e) {
            if (t.aborted) throw e;
            s = e;
          }
        }
        throw s;
      }
      async function eS(e, t) {
        let i = await fetch(e, {
          credentials: "omit",
          mode: "cors",
          signal: t,
        });
        if (!i.ok) throw Error(`Layer image request failed with ${i.status}.`);
        return createImageBitmap(await i.blob());
      }
      function ey(e) {
        if (e.aborted)
          throw e.reason instanceof Error
            ? e.reason
            : new DOMException("Aborted", "AbortError");
      }
      var eE = i(2138);
      class ew {
        async merge(e) {
          let t = this.dependencies.getObjectSnapshot(e),
            i = this.dependencies.getResourceStates((0, eE.p)(t)),
            s = (0, eE.o)(t, i),
            n = this.dependencies.getSourceBounds(e);
          if (!s || !n || (null == t ? void 0 : t.type) !== "image")
            return { ok: !1, reason: "nodeUnavailable" };
          let o = (0, l.Px)(s.width, s.height, "image"),
            r = this.dependencies.rasterizer;
          return this.dependencies.resultNodeOwner.launch({
            mediaKind: "image",
            nodeTitle: (0, eb.st)(t.data.title),
            origin: "image-layer-merge",
            postEditCapability: "imageLayerMerge",
            placement: {
              x: n.x + n.width + 64,
              y: n.y,
              width: o.width,
              height: o.height,
            },
            sourceNodeId: e,
            produce: async (e) => {
              let { signal: i } = e;
              return {
                file: new File(
                  [await ev(s, i, r)],
                  `${(0, eb.st)(t.data.title)}.png`,
                  { type: "image/png" },
                ),
              };
            },
          });
        }
        constructor(e) {
          this.dependencies = e;
        }
      }
      var eA = i(32166),
        eC = i(45218),
        eR = i(75073),
        ek = i(76458),
        e_ = i(91878);
      function eO(e, t, i) {
        if (
          !(0, ek.g$)(e.modelName) ||
          (e.modelName === ek.uO && "2K" !== e.outputResolution)
        )
          throw Error("Smart Edit model and resolution are incompatible.");
        if (
          e.source.nodeId !== t.nodeId ||
          e.source.resourceId !== t.resourceId ||
          e.source.originResourceId !== t.originResourceId ||
          e.source.displayUrl !== t.displayUrl ||
          e.source.width !== t.width ||
          e.source.height !== t.height
        )
          throw Error(
            "Smart Edit intent source does not match the active session.",
          );
        if (
          "png" !== e.composite.format ||
          "image/png" !== i.type ||
          i.size <= 0 ||
          e.composite.width !== t.width ||
          e.composite.height !== t.height
        )
          throw Error(
            "Smart Edit composite must be a non-empty source-sized PNG.",
          );
        let s = (0, e_.rp)(e.document);
        if (!s.ok) throw Error(`Smart Edit document is invalid: ${s.code}.`);
        if (
          !s.canonicalDocument.prompt_contents.some(
            (e) => 1 === e.type && e.text.trim().length > 0,
          )
        )
          throw Error("Smart Edit prompt text is required.");
        if (e.protocolPrompt !== (0, e_.OW)(s.canonicalDocument))
          throw Error(
            "Smart Edit protocol prompt does not match the document.",
          );
        return (eD(e.outputResolution), s.canonicalDocument);
      }
      function eP(e, t, i) {
        return {
          mode: 9,
          model_name: e.modelName,
          prompt:
            e.protocolPrompt + (e.modelName === ek.uO ? (0, eR.e0)() : ""),
          resolution: eD(e.outputResolution),
          materials: [{ type: 2, image_uri: i, role: 4 }],
          smart_edit: { extra: (0, e_.op)(e.source.originResourceId, t) },
        };
      }
      function eD(e) {
        switch (e) {
          case "1K":
            return "1K";
          case "1.5K":
            return "1.5K";
          case "2K":
            return "2K";
          case "4K":
            return "4K";
        }
      }
      i(44503);
      var eN = i(13363),
        eU = i(85570);
      class eT {
        getPendingTargets(e) {
          var t;
          return [
            ...((null == (t = this.pending.get(e)) ? void 0 : t.values()) ??
              []),
          ];
        }
        getFocusedPendingTarget(e) {
          var t;
          let i = this.focusedPendingTargetKeys.get(e);
          return i
            ? null == (t = this.pending.get(e))
              ? void 0
              : t.get(i)
            : void 0;
        }
        clearFocusedPendingTarget(e) {
          this.focusedPendingTargetKeys.delete(e) && this.notify();
        }
        async resolveSource(e, t) {
          var i;
          let s = (0, el.Fx)({
            nodeId: e,
            primaryResourceId: t.resourceId,
            resources: this.dependencies
              .getResourceStates([t.resourceId])
              .filter((e) => void 0 !== e),
            title: t.label,
          });
          if (!(null == s ? void 0 : s.pixelSourceUrl)) return;
          let n = Object.freeze({
              displayUrl: s.pixelSourceUrl,
              height: s.height,
              nodeId: e,
              originResourceId: t.resourceId,
              resourceId: t.resourceId,
              width: s.width,
            }),
            o = s.smartEdit,
            r = o ? (0, e_.Xj)(o.extra) : { ok: !1 };
          if (!r.ok) return o ? void 0 : Object.freeze({ source: n });
          if (!o)
            throw Error(
              "Smart Edit restore descriptor disappeared after parsing.",
            );
          let a = o.modelName ?? ek.U8,
            l = o.outputResolution;
          if (
            (0, ek.g$)(a) &&
            (void 0 === l ||
              "1K" === (i = l) ||
              "1.5K" === i ||
              "2K" === i ||
              "4K" === i) &&
            (a !== ek.uO || void 0 === l || "2K" === l)
          )
            return Object.freeze({
              document: r.document,
              modelName: a,
              ...(l ? { outputResolution: l } : {}),
              source: n,
            });
        }
        subscribe(e) {
          return this.disposed
            ? () => void 0
            : (this.listeners.add(e), () => this.listeners.delete(e));
        }
        async redraw(e, t) {
          var i;
          if (this.disposed || (null == t ? void 0 : t.signal.aborted))
            return { ok: !1, reason: "failed" };
          let s =
              "base" === (i = e.target).source.kind
                ? { resourceId: i.resourceId, source: { kind: "base" } }
                : {
                    resourceId: i.resourceId,
                    source: { kind: "layer", layerId: i.source.layerId },
                  },
            n = (0, eU.H)(s),
            o = this.inFlightTargetKeys.get(e.nodeId) ?? new Set();
          if (o.has(n)) return { ok: !1, reason: "failed" };
          let r = {
              accepted: !1,
              controller: new AbortController(),
              permissionGeneration: this.permissionGeneration,
            },
            a = () => {
              r.accepted ||
                r.controller.abort(null == t ? void 0 : t.signal.reason);
            };
          (null == t || t.signal.addEventListener("abort", a, { once: !0 }),
            this.activeTasks.add(r),
            o.add(n),
            this.inFlightTargetKeys.set(e.nodeId, o));
          try {
            return await this.run(e, r, () => {
              ((r.accepted = !0),
                null == t || t.signal.removeEventListener("abort", a),
                null == t || t.onAccepted());
              let i = this.pending.get(e.nodeId) ?? new Map();
              (i.set(n, s),
                this.pending.set(e.nodeId, i),
                this.focusedPendingTargetKeys.set(e.nodeId, n),
                this.notify());
            });
          } catch (t) {
            let e = this.readTaskInvalidation(r);
            if (e) return e;
            return {
              ok: !1,
              reason: "failed",
              message: t instanceof Error ? t.message : void 0,
            };
          } finally {
            (this.activeTasks.delete(r),
              null == t || t.signal.removeEventListener("abort", a),
              o.delete(n),
              0 === o.size && this.inFlightTargetKeys.delete(e.nodeId));
            let i = this.pending.get(e.nodeId),
              s = (null == i ? void 0 : i.delete(n)) ?? !1,
              l = this.focusedPendingTargetKeys.get(e.nodeId) === n;
            (l && this.focusedPendingTargetKeys.delete(e.nodeId),
              (null == i ? void 0 : i.size) === 0 &&
                this.pending.delete(e.nodeId),
              (s || l) && this.notify());
          }
        }
        dispose() {
          if (!this.disposed) {
            for (let e of ((this.disposed = !0),
            this.releaseEditAvailability(),
            this.activeTasks))
              e.controller.abort();
            (this.inFlightTargetKeys.clear(),
              this.pending.clear(),
              this.focusedPendingTargetKeys.clear(),
              this.notify(),
              this.listeners.clear());
          }
        }
        async run(e, t, i) {
          var s, n;
          let o = this.readTaskInvalidation(t);
          if (o) return o;
          let r = await this.resolveSource(e.nodeId, e.target);
          if (
            !r ||
            ((s = e.intent.source),
            (n = r.source),
            s.nodeId !== n.nodeId ||
              s.resourceId !== n.resourceId ||
              s.originResourceId !== n.originResourceId ||
              s.width !== n.width ||
              s.height !== n.height)
          )
            return { ok: !1, reason: "sourceUnavailable" };
          let a = await Promise.resolve(e.intent.composite.blob);
          if ((o = this.readTaskInvalidation(t))) return o;
          let l = eO(e.intent, e.intent.source, a),
            d = new File([a], `smart-edit-${crypto.randomUUID()}.png`, {
              type: "image/png",
            }),
            u = await this.dependencies.mediaUploadService.upload(
              { file: d },
              { signal: t.controller.signal },
            );
          if ((o = this.readTaskInvalidation(t))) return o;
          if ("image" !== u.mediaType || !u.storageKey.trim())
            return { ok: !1, reason: "failed" };
          let c = await this.submit(e, l, u.storageKey.trim(), t);
          if (!c.ok) return c.result;
          i();
          let h = await this.waitForGeneration(
            c.resourceId,
            t.controller.signal,
          );
          if ((o = this.readTaskInvalidation(t))) return o;
          if (!h) return { ok: !1, reason: "generationFailed" };
          let p = await this.dependencies.cutout.cutout(
            { resourceId: c.resourceId },
            {
              canWrite: () => void 0 === this.readTaskInvalidation(t),
              signal: t.controller.signal,
              resourceOrigin: "layer_redraw",
              sourceResourceId: e.target.resourceId,
            },
          );
          if ((o = this.readTaskInvalidation(t))) return o;
          let m = await (0, eN.Hg)(this.dependencies.api, e.nodeId, {
            name: (0, eA.MF)(e.target.label, "image.smart-edit"),
            resourceId: p.resourceId,
            selectResult: !1,
            source: e.target.source,
            gesture: "redraw_layer",
          });
          return m.ok
            ? { ok: !0, layerId: m.layerId }
            : {
                ok: !1,
                reason: "notWritable",
                ...("message" in m && m.message ? { message: m.message } : {}),
              };
        }
        async submit(e, t, i, n) {
          let o = this.dependencies.createId ?? (() => crypto.randomUUID()),
            r = o(),
            a = o(),
            l = (0, eC.J)({
              modelName: e.intent.modelName,
              outputResolution: e.intent.outputResolution,
              type: "smart-edit",
            }),
            d = await this.dependencies.commercial.execute(
              l,
              async (o) => {
                var l;
                if (this.readTaskInvalidation(n)) return !1;
                let d = {
                    commerce_selection: {
                      benefit_type: (l = {
                        benefitType: o.selection.benefitType,
                        imageParams: eP(e.intent, t, i),
                        resourceId: r,
                      }).benefitType,
                    },
                    resource_id: l.resourceId,
                    type: 1,
                    params: { image_params: l.imageParams },
                  },
                  { options: u, dispose: c } = (0, s.pt)(
                    o,
                    n.controller.signal,
                  );
                try {
                  let t = await this.dependencies.generator.nodeGenerate(
                    {
                      project_id: this.dependencies.getProjectId(),
                      op: 4,
                      detached: {
                        source_node_id: e.nodeId,
                        source_resource_id: e.target.resourceId,
                        submit_id: a,
                        items: [d],
                      },
                    },
                    u,
                  );
                  if (this.readTaskInvalidation(n)) return !1;
                  return t.results.some(
                    (e) => e.resource_id === r && 1 === e.state,
                  );
                } finally {
                  c();
                }
              },
              {
                enterSource: "generate",
                surfaceKey: "image_layer_board.redraw",
                isUseSuccess: (e) => e,
              },
            ),
            u = this.readTaskInvalidation(n);
          return u
            ? { ok: !1, result: u }
            : "blocked" === d.status || "cancelled" === d.status
              ? { ok: !1, result: { ok: !1, reason: "commercialBlocked" } }
              : "executed" !== d.status
                ? { ok: !1, result: { ok: !1, reason: "failed" } }
                : d.value
                  ? (this.dependencies.trackSubmittedResource(r),
                    { ok: !0, resourceId: r })
                  : {
                      ok: !1,
                      result: this.readTaskInvalidation(n) ?? {
                        ok: !1,
                        reason: this.canWrite() ? "failed" : "notWritable",
                      },
                    };
        }
        waitForGeneration(e, t) {
          return new Promise((i) => {
            let s,
              o = !1,
              r = () => void 0,
              a = () => void 0,
              l = (e) => {
                o ||
                  ((o = !0),
                  void 0 !== s && clearTimeout(s),
                  r(),
                  t.removeEventListener("abort", a),
                  i(e));
              };
            a = () => l(!1);
            let d = () => {
              var t;
              let i =
                null == (t = this.dependencies.getResourceStates([e])[0])
                  ? void 0
                  : t.status;
              i === n.ao.success
                ? l(!0)
                : (i === n.ao.failed || i === n.ao.canceled) && l(!1);
            };
            ((s = setTimeout(() => l(!1), this.dependencies.timeoutMs ?? 6e5)),
            (r = this.dependencies.subscribeResourceIds([e], d)),
            t.addEventListener("abort", a, { once: !0 }),
            t.aborted)
              ? l(!1)
              : d();
          });
        }
        canWrite() {
          return this.dependencies.api.canvas.actions.updateImageLayerBoard.getState()
            .available;
        }
        isPermissionDenied() {
          let e =
            this.dependencies.api.canvas.actions.updateImageLayerBoard.getState();
          return !e.available && "permissionDenied" === e.reason;
        }
        readTaskInvalidation(e) {
          return this.disposed
            ? { ok: !1, reason: "failed" }
            : e.permissionGeneration !== this.permissionGeneration
              ? { ok: !1, reason: "notWritable" }
              : e.controller.signal.aborted
                ? { ok: !1, reason: "failed" }
                : this.canWrite()
                  ? void 0
                  : { ok: !1, reason: "notWritable" };
        }
        notify() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.listeners = new Set()),
            (this.inFlightTargetKeys = new Map()),
            (this.pending = new Map()),
            (this.focusedPendingTargetKeys = new Map()),
            (this.activeTasks = new Set()),
            (this.disposed = !1),
            (this.permissionDenied = !1),
            (this.permissionGeneration = 0),
            (this.dependencies = e),
            (this.permissionDenied = this.isPermissionDenied()),
            (this.releaseEditAvailability = e.subscribeEditAvailability(() => {
              let e = this.isPermissionDenied();
              if (e && !this.permissionDenied)
                for (let e of ((this.permissionGeneration += 1),
                this.activeTasks))
                  e.controller.abort();
              this.permissionDenied = e;
            })));
        }
      }
      var eM = i(71804),
        ex = i(58879),
        eF = i(96103),
        ej = i(90892),
        eL = i(72471),
        ez = i(36285);
      class eB {
        check(e) {
          if (
            (e.throwIfAborted(),
            !this.canvas.getEditAvailability().local.available)
          )
            throw new DOMException("Editing is unavailable.", "AbortError");
        }
        constructor(e, t) {
          ((this.canvas = e),
            (this.assets = t),
            (this.resolve = async (e, t) => {
              var i;
              if ((this.check(t), "canvas" === e.kind)) {
                let t = this.canvas.getObjectSnapshot(e.nodeId);
                if ((null == t ? void 0 : t.type) !== "image")
                  throw Error("Select an image node.");
                let i = (0, el.Fx)({
                  nodeId: t.id,
                  primaryResourceId: t.data.resourceId,
                  title: t.data.title,
                  resources: this.canvas.getResourceBindings(t.id),
                });
                if (!(null == i ? void 0 : i.pixelSourceUrl))
                  throw Error("Original image pixels are unavailable.");
                return {
                  imageUri: i.imageUri,
                  pixelSourceUrl: i.pixelSourceUrl,
                  width: i.width,
                  height: i.height,
                };
              }
              if (!(null == (i = this.assets) ? void 0 : i.getOriginalImageUrl))
                throw Error("Asset original image service is unavailable.");
              let s = await this.assets.getOriginalImageUrl(e.imageUri, t);
              this.check(t);
              let n = await fetch(s, { mode: "cors", signal: t });
              if (!n.ok) throw Error("Original asset image could not be read.");
              let o = await createImageBitmap(await n.blob());
              try {
                return (
                  this.check(t),
                  {
                    imageUri: e.imageUri,
                    pixelSourceUrl: s,
                    width: o.width,
                    height: o.height,
                  }
                );
              } finally {
                o.close();
              }
            }));
        }
      }
      var eq = i(31433);
      let eV = Object.freeze({
        status: "inactive",
        sceneStatus: "idle",
        quickSelectStatus: "idle",
        sceneSelectionError: !1,
        selectionPending: !1,
        sceneResetEpoch: 0,
        sceneEditing: !1,
        product: { status: "empty" },
        preparing: !1,
        prompt: "",
      });
      class eH {
        open(e, t) {
          (this.close(),
            (this.lifetime = new AbortController()),
            (this.source = e),
            (this.sessionId = t),
            this.publish({
              ...eV,
              status: "active",
              sceneDocument: {
                width: e.width,
                height: e.height,
                selectionMode: "replace-initial",
                initialMask: { kind: "empty" },
                strokes: [],
                revision: 0,
              },
            }),
            this.recognizeScene("initial"));
        }
        publish(e) {
          for (let t of ((this.snapshot = Object.freeze(e)), this.listeners))
            t();
        }
        check() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.lifetime.signal;
          if (
            (e.throwIfAborted(),
            this.lifetime.signal.throwIfAborted(),
            "active" !== this.snapshot.status || !this.dependencies.canEdit())
          )
            throw new DOMException("Editing is unavailable.", "AbortError");
        }
        signal(e, t) {
          return AbortSignal.any([
            this.lifetime.signal,
            e.signal,
            ...(t ? [t] : []),
          ]);
        }
        invalidatePreparation() {
          var e;
          (null == (e = this.preparation) || e.abort(),
            (this.prepared = void 0),
            (this.pending = void 0),
            (this.pendingKey = void 0));
        }
        publishScene(e) {
          var t;
          let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (e &&
            "replace-initial" !== e.selectionMode &&
            (e = { ...e, selectionMode: "replace-initial" }),
            null == (t = this.selectionAttempt) || t.abort(),
            this.invalidatePreparation(),
            this.sceneVersion++);
          let s = new AbortController();
          this.selectionAttempt = s;
          let n = this.signal(s);
          this.publish({
            ...this.snapshot,
            confirmedSceneBboxes: void 0,
            ...i,
            sceneDocument: e,
            sceneBboxes: void 0,
            selectionPending: !!e,
          });
          let o = (async () => {
            if (e)
              try {
                let t = await (0, eq.f5)(e, {
                  loadRemoteSelection: this.dependencies.loadRemoteSelection,
                  signal: n,
                });
                (this.check(n),
                  this.publish({
                    ...this.snapshot,
                    sceneBboxes: t,
                    selectionPending: !1,
                  }));
              } catch (e) {
                if (
                  n.aborted ||
                  (e instanceof DOMException && "AbortError" === e.name) ||
                  !this.dependencies.canEdit()
                )
                  return;
                this.publish({
                  ...this.snapshot,
                  sceneBboxes: void 0,
                  selectionPending: !1,
                  sceneSelectionError: !0,
                });
              }
          })();
          return ((this.selectionReady = o), o);
        }
        releaseCandidates() {
          var e;
          null == (e = this.snapshot.candidates) || e.dispose();
        }
        get canUndoInitialScene() {
          var e, t;
          return (
            (null == (e = this.snapshot.sceneDocument)
              ? void 0
              : e.initialMask.kind) !== "empty" &&
            (null == (t = this.snapshot.sceneDocument)
              ? void 0
              : t.strokes.length) === 0
          );
        }
        get canRedoInitialScene() {
          return !!this.undoneScene;
        }
        async importProduct(e, t, i, s) {
          var n;
          if (
            !this.dependencies.canEdit() ||
            "active" !== this.snapshot.status ||
            this.snapshot.preparing
          )
            return !1;
          (null == (n = this.productAttempt) || n.abort(),
            this.invalidatePreparation());
          let o = new AbortController();
          this.productAttempt = o;
          let r = this.signal(o, i),
            a = [...this.urls],
            l = new Set(),
            d = (e) => {
              let t = this.keepUrl(e);
              return (l.add(t), t);
            },
            u =
              "uploading" === this.snapshot.product.status ||
              "recognizing" === this.snapshot.product.status
                ? eV.product
                : this.snapshot.product,
            c = "ready" === u.status,
            h = this.productFile;
          ((this.productFile = void 0), this.productVersion++);
          let p = t ? "upload" : "recognition";
          try {
            let i =
              "string" == typeof s ? s.trim() || void 0 : s ? d(s) : void 0;
            (this.publish({
              ...this.snapshot,
              product: {
                status: t ? "uploading" : "recognizing",
                ...(i ? { previewUrl: i } : {}),
                ...(c ? { replacing: !0 } : {}),
              },
              preparationError: void 0,
            }),
              this.check(r));
            let n = await e(r, i);
            if (
              (this.check(r),
              !n.imageUri.trim() ||
                !n.pixelSourceUrl ||
                !Number.isInteger(n.width) ||
                !Number.isInteger(n.height) ||
                0 >= Math.min(n.width, n.height) ||
                Math.max(n.width, n.height) > 8192)
            )
              throw Error("Product source pixels are unavailable.");
            ((p = "recognition"),
              this.publish({
                ...this.snapshot,
                product: {
                  status: "recognizing",
                  previewUrl: i ?? n.pixelSourceUrl,
                  ...(c ? { replacing: !0 } : {}),
                },
              }));
            let o = await this.dependencies.recognition.recognize({
              action: "initial",
              source: n,
              signal: r,
            });
            try {
              this.check(r);
            } catch (e) {
              throw ("quick-select" === o.action && o.candidates.dispose(), e);
            }
            if ("initial" !== o.action)
              throw (
                o.candidates.dispose(),
                Error("Expected product subject recognition.")
              );
            p = "export";
            let l = await this.exportDocument(
              o.document,
              n,
              this.productAdapter,
              r,
              !0,
            );
            (this.check(r), (this.productFile = l));
            let u = d(l);
            for (let e of a) this.releaseUrl(e);
            return (
              this.publish({
                ...this.snapshot,
                product: {
                  status: "ready",
                  source: n,
                  document: o.document,
                  previewUrl: u,
                },
              }),
              !0
            );
          } catch (e) {
            if (r.aborted) {
              if (
                this.productAttempt === o &&
                "active" === this.snapshot.status
              ) {
                for (let e of ((this.productFile = h), l)) this.releaseUrl(e);
                this.publish({ ...this.snapshot, product: u });
              }
              return !1;
            }
            if (!this.dependencies.canEdit()) return !1;
            for (let e of l) this.releaseUrl(e);
            return (
              this.publish({
                ...this.snapshot,
                product: { status: "failed", stage: p },
              }),
              !1
            );
          } finally {
            this.productAttempt === o && (this.productAttempt = void 0);
          }
        }
        keepUrl(e) {
          let t = URL.createObjectURL(e);
          return (this.urls.add(t), t);
        }
        releaseUrl(e) {
          this.urls.delete(e) && URL.revokeObjectURL(e);
        }
        async exportDocument(e, t, i, s) {
          let n =
            arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if ((this.check(s), t.width !== e.width || t.height !== e.height))
            throw Error("Selection dimensions must match its source.");
          let o = await (0, et.RF)(e, {
            loadRemoteSelection: this.dependencies.loadRemoteSelection,
            signal: s,
          });
          try {
            this.check(s);
            let e = { alpha: o.pixels, width: o.width, height: o.height };
            if (!(0, eq.hI)(e)) throw Error("Product subject is empty.");
            if (n && !o.pixels.some((e) => e < 255))
              throw Error("Product background was not recognized.");
            return await i.exportAsset({ selection: e, source: t, signal: s });
          } finally {
            o.release();
          }
        }
        currentKey(e, t) {
          var i, s, n, o, r;
          return JSON.stringify([
            this.sessionId,
            null == (i = this.source) ? void 0 : i.imageUri,
            null == (s = this.source) ? void 0 : s.resourceId,
            null == (n = this.source) ? void 0 : n.width,
            null == (o = this.source) ? void 0 : o.height,
            this.snapshot.confirmedSceneBboxes ?? this.snapshot.sceneBboxes,
            "ready" === this.snapshot.product.status
              ? this.snapshot.product.source.imageUri
              : void 0,
            this.snapshot.sceneResetEpoch,
            this.sceneVersion,
            null == (r = this.snapshot.sceneDocument) ? void 0 : r.revision,
            this.productVersion,
            e,
            t,
            this.snapshot.prompt.trim(),
          ]);
        }
        async runPreparation(e, t, i) {
          var s;
          this.check();
          let { source: n, productFile: o } = this,
            {
              sceneStatus: r,
              sceneEditing: a,
              product: l,
              confirmedSceneBboxes: d,
            } = this.snapshot;
          if (
            !n ||
            (!d && "ready" !== r) ||
            this.snapshot.sceneSelectionError ||
            a ||
            "ready" !== l.status ||
            !o
          )
            throw Error(
              "Select the scene product and add a replacement first.",
            );
          null == (s = this.preparation) || s.abort();
          let u = new AbortController();
          this.preparation = u;
          let c = this.signal(u);
          this.publish({
            ...this.snapshot,
            preparing: !0,
            preparationError: void 0,
          });
          try {
            (await this.selectionReady, this.check(c));
            let s =
              this.snapshot.confirmedSceneBboxes ?? this.snapshot.sceneBboxes;
            if (
              !(null == s ? void 0 : s.length) ||
              this.snapshot.sceneSelectionError
            )
              throw Error("Scene selection is unavailable.");
            for (let e of s) (0, eq.TF)(e, n.width, n.height);
            i = this.currentKey(e, t);
            let r = await this.dependencies.upload.upload(
              { file: o },
              { signal: c },
            );
            if (
              (this.check(c), "image" !== r.mediaType || !r.storageKey.trim())
            )
              throw Error("Prepared image upload failed.");
            if (i !== this.currentKey(e, t))
              throw new DOMException("Preparation changed.", "AbortError");
            return (
              (this.prepared = Object.freeze({
                mode: "product-replacement",
                modelName: e,
                resolution: t,
                preparationKey: i,
                bboxes: Object.freeze(s.map((e) => Object.freeze([...e]))),
                productImageUri: r.storageKey,
                ...(this.snapshot.prompt.trim()
                  ? { prompt: this.snapshot.prompt.trim() }
                  : {}),
              })),
              this.publish({ ...this.snapshot, preparing: !1 }),
              this.prepared
            );
          } catch (e) {
            throw (
              this.preparation === u &&
                "active" === this.snapshot.status &&
                this.publish({
                  ...this.snapshot,
                  preparing: !1,
                  ...(!c.aborted && this.dependencies.canEdit()
                    ? { preparationError: "upload" }
                    : {}),
                }),
              e
            );
          }
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.snapshot = eV),
            (this.sessionId = ""),
            (this.lifetime = new AbortController()),
            (this.productVersion = 0),
            (this.sceneVersion = 0),
            (this.urls = new Set()),
            (this.listeners = new Set()),
            (this.getSnapshot = () => this.snapshot),
            (this.setPrompt = (e) => {
              "active" !== this.snapshot.status ||
                !this.dependencies.canEdit() ||
                this.snapshot.preparing ||
                (e !== this.snapshot.prompt &&
                  (this.invalidatePreparation(),
                  this.publish({ ...this.snapshot, prompt: e })));
            }),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => {
                this.listeners.delete(e);
              }
            )),
            (this.close = () => {
              var e, t, i, s;
              for (let n of (this.lifetime.abort(),
              null == (e = this.sceneAttempt) || e.abort(),
              null == (t = this.productAttempt) || t.abort(),
              null == (i = this.selectionAttempt) || i.abort(),
              (this.selectionReady = void 0),
              this.invalidatePreparation(),
              null == (s = this.snapshot.candidates) || s.dispose(),
              [...this.urls]))
                this.releaseUrl(n);
              ((this.productFile = void 0),
                (this.source = void 0),
                (this.undoneScene = void 0),
                (this.sceneBeforeEditing = void 0),
                this.publish(eV));
            }),
            (this.suspendForTransientUnavailability = () => {
              var e, t, i;
              "active" === this.snapshot.status &&
                (null == (e = this.sceneAttempt) || e.abort(),
                null == (t = this.productAttempt) || t.abort(),
                null == (i = this.selectionAttempt) || i.abort(),
                this.invalidatePreparation(),
                this.publish({
                  ...this.snapshot,
                  preparing: !1,
                  sceneStatus:
                    "recognizing" === this.snapshot.sceneStatus
                      ? "idle"
                      : this.snapshot.sceneStatus,
                  quickSelectStatus:
                    "recognizing" === this.snapshot.quickSelectStatus
                      ? "idle"
                      : this.snapshot.quickSelectStatus,
                }));
            }),
            (this.resumeAfterTransientUnavailability = () => {
              var e;
              "active" === this.snapshot.status &&
                this.dependencies.canEdit() &&
                this.snapshot.selectionPending &&
                (null == (e = this.selectionAttempt)
                  ? void 0
                  : e.signal.aborted) &&
                this.snapshot.sceneDocument &&
                this.publishScene(this.snapshot.sceneDocument, {
                  confirmedSceneBboxes: this.snapshot.confirmedSceneBboxes,
                });
            }),
            (this.cancelRecognition = () => {
              var e, t;
              this.dependencies.canEdit() &&
                !this.snapshot.preparing &&
                (null == (e = this.sceneAttempt) || e.abort(),
                "recognizing" === this.snapshot.sceneStatus &&
                  (null == (t = this.selectionAttempt) || t.abort()),
                this.releaseCandidates(),
                this.publish({
                  ...this.snapshot,
                  selectionPending: !1,
                  sceneStatus:
                    "recognizing" === this.snapshot.sceneStatus
                      ? "idle"
                      : this.snapshot.sceneStatus,
                  quickSelectStatus: "idle",
                  candidates: void 0,
                }));
            }),
            (this.finishQuickSelect = () => {
              var e;
              ("recognizing" === this.snapshot.quickSelectStatus &&
                (null == (e = this.sceneAttempt) || e.abort()),
                this.releaseCandidates(),
                this.publish({
                  ...this.snapshot,
                  candidates: void 0,
                  quickSelectStatus: "idle",
                }));
            }),
            (this.beginSceneSelection = () => {
              var e;
              !this.dependencies.canEdit() ||
                this.snapshot.preparing ||
                this.snapshot.sceneEditing ||
                (null == (e = this.sceneAttempt) || e.abort(),
                this.invalidatePreparation(),
                (this.sceneBeforeEditing = {
                  sceneDocument: this.snapshot.sceneDocument,
                  sceneStatus:
                    "recognizing" === this.snapshot.sceneStatus
                      ? "idle"
                      : this.snapshot.sceneStatus,
                  undoneScene: this.undoneScene,
                  confirmedSceneBboxes: this.snapshot.confirmedSceneBboxes,
                  sceneSelectionError: this.snapshot.sceneSelectionError,
                }),
                this.finishQuickSelect(),
                this.publish({
                  ...this.snapshot,
                  sceneStatus:
                    "recognizing" === this.snapshot.sceneStatus
                      ? "idle"
                      : this.snapshot.sceneStatus,
                  sceneEditing: !0,
                  confirmedSceneBboxes: void 0,
                }));
            }),
            (this.cancelSceneSelection = () => {
              var e, t, i, s, n, o;
              this.dependencies.canEdit() &&
                !this.snapshot.preparing &&
                this.snapshot.sceneEditing &&
                (null == (e = this.sceneAttempt) || e.abort(),
                this.finishQuickSelect(),
                (this.undoneScene =
                  null == (t = this.sceneBeforeEditing)
                    ? void 0
                    : t.undoneScene),
                this.publishScene(
                  null == (i = this.sceneBeforeEditing)
                    ? void 0
                    : i.sceneDocument,
                  {
                    sceneStatus:
                      (null == (s = this.sceneBeforeEditing)
                        ? void 0
                        : s.sceneStatus) ?? "idle",
                    confirmedSceneBboxes:
                      null == (n = this.sceneBeforeEditing)
                        ? void 0
                        : n.confirmedSceneBboxes,
                    sceneResetEpoch: this.snapshot.sceneResetEpoch + 1,
                    sceneEditing: !1,
                    sceneSelectionError:
                      (null == (o = this.sceneBeforeEditing)
                        ? void 0
                        : o.sceneSelectionError) ?? !1,
                  },
                ),
                (this.sceneBeforeEditing = void 0));
            }),
            (this.confirmSceneSelection = async () => {
              var e, t, i;
              if (
                !this.dependencies.canEdit() ||
                this.snapshot.preparing ||
                !this.snapshot.sceneEditing ||
                "recognizing" === this.snapshot.sceneStatus ||
                "recognizing" === this.snapshot.quickSelectStatus ||
                this.snapshot.sceneSelectionError ||
                !(null == (e = this.source) ? void 0 : e.imageUri.trim())
              )
                return !1;
              this.resumeAfterTransientUnavailability();
              let s = this.snapshot.sceneDocument,
                n = new AbortController();
              (this.invalidatePreparation(), (this.preparation = n));
              let o = this.signal(n);
              this.publish({ ...this.snapshot, preparing: !0 });
              try {
                if (
                  (await this.selectionReady,
                  this.check(o),
                  s !== this.snapshot.sceneDocument ||
                    this.snapshot.sceneSelectionError)
                )
                  throw Error("Scene selection is unavailable.");
                let e = this.source,
                  n = this.snapshot.sceneBboxes ?? [[0, 0, e.width, e.height]];
                for (let t of n) (0, eq.TF)(t, e.width, e.height);
                return (
                  null == (t = this.sceneAttempt) || t.abort(),
                  null == (i = this.selectionAttempt) || i.abort(),
                  this.finishQuickSelect(),
                  (this.sceneBeforeEditing = void 0),
                  this.publish({
                    ...this.snapshot,
                    confirmedSceneBboxes: n,
                    sceneEditing: !1,
                  }),
                  !0
                );
              } catch (e) {
                return (
                  !o.aborted &&
                    !(e instanceof DOMException && "AbortError" === e.name) &&
                    this.dependencies.canEdit() &&
                    this.publish({ ...this.snapshot, sceneSelectionError: !0 }),
                  !1
                );
              } finally {
                this.preparation === n &&
                  "active" === this.snapshot.status &&
                  this.publish({ ...this.snapshot, preparing: !1 });
              }
            }),
            (this.updateSceneDocument = (e) => {
              var t;
              if (
                this.dependencies.canEdit() &&
                !this.snapshot.preparing &&
                this.source
              ) {
                if (
                  e.width !== this.source.width ||
                  e.height !== this.source.height
                )
                  throw Error("Scene selection coordinate space changed.");
                (("recognizing" === this.snapshot.sceneStatus ||
                  "recognizing" === this.snapshot.quickSelectStatus) &&
                  (null == (t = this.sceneAttempt) || t.abort()),
                  (this.undoneScene = void 0),
                  this.publishScene(e, {
                    sceneStatus: "ready",
                    quickSelectStatus:
                      "recognizing" === this.snapshot.quickSelectStatus
                        ? "idle"
                        : this.snapshot.quickSelectStatus,
                    preparationError: void 0,
                    sceneSelectionError: !1,
                  }));
              }
            }),
            (this.undoInitialScene = () => {
              if (
                !this.canUndoInitialScene ||
                !this.dependencies.canEdit() ||
                this.snapshot.preparing
              )
                return;
              this.undoneScene = this.snapshot.sceneDocument;
              let e = this.snapshot.sceneDocument;
              this.publishScene(
                {
                  ...e,
                  initialMask: { kind: "empty" },
                  strokes: [],
                  revision: e.revision + 1,
                },
                { sceneResetEpoch: this.snapshot.sceneResetEpoch + 1 },
              );
            }),
            (this.redoInitialScene = () => {
              if (
                !this.undoneScene ||
                !this.dependencies.canEdit() ||
                this.snapshot.preparing
              )
                return;
              let e = this.undoneScene;
              ((this.undoneScene = void 0),
                this.publishScene(e, {
                  sceneResetEpoch: this.snapshot.sceneResetEpoch + 1,
                }));
            }),
            (this.recognizeScene = async (e) => {
              var t;
              if (
                !this.source ||
                !this.dependencies.canEdit() ||
                this.snapshot.preparing
              )
                return;
              (null == (t = this.sceneAttempt) || t.abort(),
                this.releaseCandidates());
              let i = new AbortController();
              this.sceneAttempt = i;
              let s = this.signal(i),
                n = this.source,
                o = this.snapshot.sceneDocument;
              this.publish({
                ...this.snapshot,
                candidates: void 0,
                sceneSelectionError: !1,
                ...("initial" === e
                  ? { sceneStatus: "recognizing", quickSelectStatus: "idle" }
                  : { quickSelectStatus: "recognizing" }),
              });
              try {
                let t = "initial" === e ? 2 : 1;
                for (let i = 0; i < t; i += 1) {
                  this.check(s);
                  try {
                    let r = await this.dependencies.recognition.recognize({
                      action: e,
                      ...("quick-select" === e
                        ? { projectId: this.dependencies.getProjectId() }
                        : {}),
                      source: n,
                      currentDocument: o,
                      signal: s,
                    });
                    try {
                      this.check(s);
                    } catch (e) {
                      throw (
                        "quick-select" === r.action && r.candidates.dispose(),
                        e
                      );
                    }
                    if (r.action !== e)
                      throw (
                        "quick-select" === r.action && r.candidates.dispose(),
                        Error(
                          "Scene recognition result does not match its request.",
                        )
                      );
                    if ("initial" === r.action) {
                      if (
                        r.document.width !== n.width ||
                        r.document.height !== n.height
                      )
                        throw Error("Scene recognition dimensions changed.");
                      (this.invalidatePreparation(),
                        (this.undoneScene = void 0),
                        await this.publishScene(r.document, {
                          sceneResetEpoch: this.snapshot.sceneResetEpoch + 1,
                          sceneSelectionError: !1,
                        }),
                        this.check(s));
                      let e =
                        this.snapshot.sceneSelectionError ||
                        !this.snapshot.sceneBboxes;
                      if (e && i + 1 < t) {
                        await eW(s);
                        continue;
                      }
                      this.publish({
                        ...this.snapshot,
                        sceneStatus: e ? "failed" : "ready",
                      });
                    } else
                      this.publish({
                        ...this.snapshot,
                        quickSelectStatus: "selecting",
                        candidates: r.candidates,
                      });
                    return;
                  } catch (e) {
                    if (
                      i + 1 >= t ||
                      s.aborted ||
                      (e instanceof DOMException && "AbortError" === e.name) ||
                      !this.dependencies.canEdit()
                    )
                      throw e;
                    await eW(s);
                  }
                }
              } catch (t) {
                if (
                  s.aborted ||
                  (t instanceof DOMException && "AbortError" === t.name) ||
                  !this.dependencies.canEdit()
                )
                  return;
                this.publish({
                  ...this.snapshot,
                  ...("initial" === e
                    ? { sceneStatus: "failed" }
                    : { quickSelectStatus: "failed" }),
                });
              }
            }),
            (this.upload = async (e) => {
              await this.importProduct(
                async (t, i) => {
                  this.check(t);
                  let s = await this.dependencies.upload.upload(
                    { file: e, validationProfile: "subject-image" },
                    { signal: t },
                  );
                  if (
                    (this.check(t),
                    "image" !== s.mediaType || !s.storageKey.trim())
                  )
                    throw Error("Product image upload failed.");
                  let n = await createImageBitmap(e);
                  try {
                    if ((this.check(t), !i))
                      throw Error("Product preview is unavailable.");
                    return {
                      imageUri: s.storageKey,
                      pixelSourceUrl: i,
                      width: n.width,
                      height: n.height,
                    };
                  } finally {
                    n.close();
                  }
                },
                !0,
                void 0,
                e,
              );
            }),
            (this.importSelection = (e, t) =>
              this.importProduct(
                async (t) => {
                  if ((this.check(t), !this.dependencies.resolveImage))
                    throw Error("Product source resolution is unavailable.");
                  return this.dependencies.resolveImage(e, t);
                },
                !1,
                t,
                e.previewUrl,
              )),
            (this.importImage = (e, t) =>
              this.importProduct(async () => e, !1, t)),
            (this.prepare = (e, t) => {
              var i;
              try {
                this.check();
              } catch (e) {
                return Promise.reject(e);
              }
              this.resumeAfterTransientUnavailability();
              let s = this.currentKey(e, t);
              if (this.pending && this.pendingKey === s) return this.pending;
              if (
                (this.pending && this.invalidatePreparation(),
                (null == (i = this.prepared) ? void 0 : i.preparationKey) === s)
              )
                return Promise.resolve(this.prepared);
              let n = this.runPreparation(e, t, s);
              return (
                (this.pending = n),
                (this.pendingKey = s),
                n
                  .finally(() => {
                    this.pending === n && (this.pending = void 0);
                  })
                  .catch(() => void 0),
                n
              );
            }),
            (this.ownsIntent = (e) =>
              this.prepared === e &&
              e.preparationKey === this.currentKey(e.modelName, e.resolution) &&
              this.dependencies.canEdit()),
            (this.productAdapter =
              e.productAdapter ?? new Y({ requireVisiblePixels: !0 })));
        }
      }
      function eW(e) {
        return new Promise((t, i) => {
          let s = () =>
            i(
              e.reason instanceof Error
                ? e.reason
                : new DOMException("Recognition canceled.", "AbortError"),
            );
          if (e.aborted) return void s();
          let n = setTimeout(() => {
              (e.removeEventListener("abort", o), t());
            }, 250),
            o = () => {
              (clearTimeout(n), e.removeEventListener("abort", o), s());
            };
          e.addEventListener("abort", o, { once: !0 });
        });
      }
      var eG = i(70912),
        eK = i(6868),
        e$ = i(62283),
        eX = i(92169),
        eQ = i(89254),
        eY = i(14892),
        eJ = i(27943),
        eZ = i(73904);
      class e0 {
        async run(e, t, i) {
          let s = Array(e.length),
            n = 0,
            o = async () => {
              for (; n < e.length; ) {
                if (null == i ? void 0 : i.aborted) return;
                let o = n;
                n += 1;
                let r = e[o];
                try {
                  s[o] = { ok: !0, value: await t(r, o) };
                } catch (e) {
                  s[o] = { error: e, ok: !1 };
                }
              }
            };
          await Promise.all(
            Array.from({ length: Math.min(this.concurrency, e.length) }, o),
          );
          let r =
            (null == i ? void 0 : i.reason) ??
            new DOMException("Batch post-edit was canceled.", "AbortError");
          return e.map((e, t) => s[t] ?? { error: r, ok: !1 });
        }
        constructor(e = 1) {
          if (!Number.isInteger(e) || e < 1)
            throw Error(
              "Batch post-edit concurrency must be a positive integer.",
            );
          this.concurrency = e;
        }
      }
      class e1 {
        async prepare(e, t) {
          let i = await this.coordinator.run(
              e.sources,
              async (i, s) => {
                t.signal.throwIfAborted();
                let n = await this.dependencies.recognition.recognize({
                  action: "initial",
                  signal: t.signal,
                  source: i,
                });
                if (
                  (t.signal.aborted && e2(n),
                  t.signal.throwIfAborted(),
                  "initial" !== n.action)
                )
                  throw (
                    e2(n),
                    Error(
                      "Batch Cutout recognition returned an unexpected result.",
                    )
                  );
                if (
                  n.document.width !== i.width ||
                  n.document.height !== i.height
                )
                  throw Error(
                    "Batch Cutout recognition dimensions do not match the source.",
                  );
                let o = await this.assetExecutionGate.acquire(t.signal);
                try {
                  return {
                    asset: await this.dependencies.executor.execute(
                      {
                        adapter: this.dependencies.adapter,
                        document: n.document,
                        documentIdentity: `${e.sessionId}:batch-cutout:${String(s)}:${String(n.document.revision)}`,
                        sessionId: e.sessionId,
                        source: i,
                      },
                      { signal: t.signal },
                    ),
                    source: i,
                  };
                } finally {
                  o.release();
                }
              },
              t.signal,
            ),
            s = [],
            n = [];
          for (let [t, o] of i.entries()) {
            let i = e.sources[t];
            i &&
              (o.ok ? s.push(o.value) : n.push({ error: o.error, source: i }));
          }
          return { failed: Object.freeze(n), prepared: Object.freeze(s) };
        }
        constructor(e) {
          ((this.coordinator = new e0(2)),
            (this.assetExecutionGate = new eZ.i(1)),
            (this.dependencies = e));
        }
      }
      function e2(e) {
        "quick-select" === e.action && e.candidates.dispose();
      }
      var e3 = i(88702);
      let e4 = Object.freeze({ top: 4 }),
        e5 = Object.freeze({ top: 24 });
      var e6 = i(31935),
        e8 = i(58504),
        e7 = i(68115),
        e9 = i(41340),
        te = i(25880),
        tt = i(18662);
      let ti = "seedream_5.0_lite";
      function ts(e) {
        return "type" in e && "batch-cutout" === e.type
          ? "cutout"
          : "type" in e && e.type
            ? e.type
            : e.mode;
      }
      function tn(e, t) {
        if (1 !== e.length) throw Error(`${t} only supports one source.`);
        let i = e[0];
        if (!i) throw Error("Image post-edit source is unavailable.");
        return i;
      }
      let to = new (class {
        prepare(e, t) {
          let i = ts(e),
            s = this.adapters.get(i);
          if (!s) throw Error(`Image post-edit adapter is unavailable: ${i}`);
          return s.prepare(e, t);
        }
        constructor(e) {
          for (const t of ((this.adapters = new Map()), e)) {
            if (this.adapters.has(t.mode))
              throw Error(`Duplicate image post-edit adapter: ${t.mode}`);
            this.adapters.set(t.mode, t);
          }
        }
      })([
        new (class {
          prepare(e, t) {
            if (!("mode" in e) || e.mode !== this.mode)
              throw Error("Panorama adapter received incompatible input.");
            let i = tn(t, this.mode);
            if (!e.modelName.trim())
              throw Error("Panorama model is unavailable.");
            return {
              mode: this.mode,
              signature: JSON.stringify([
                this.mode,
                e.modelName,
                e.resolution,
                e.prompt,
              ]),
              sources: [i],
              createImageParams: () => ({
                mode: 11,
                model_name: e.modelName,
                resolution: e.resolution,
                aspect_ratio: e6.jJ.AR2x1,
                prompt: e.prompt,
              }),
            };
          }
          constructor() {
            this.mode = "panorama";
          }
        })(),
        new (class {
          prepare(e, t) {
            if (!("mode" in e) || "product-replacement" !== e.mode)
              throw Error("Product replacement received incompatible input.");
            let i = tn(t, this.mode);
            if (!e.modelName.trim() || !["2K", "4K"].includes(e.resolution))
              throw Error("Invalid product replacement capability.");
            if (
              ![i.imageUri, e.productImageUri].every(
                (e) => e.trim() && !/^(?:https?:|blob:|data:)/i.test(e),
              )
            )
              throw Error(
                "Product replacement requires canonical storage URIs.",
              );
            if (!e.bboxes.length)
              throw Error(
                "Select a valid product region in the original scene.",
              );
            for (let t of e.bboxes) (0, eq.TF)(t, i.width, i.height);
            return {
              mode: this.mode,
              sources: [i],
              signature: JSON.stringify([
                e.preparationKey,
                e.modelName,
                e.resolution,
                i.imageUri,
                e.bboxes,
                e.productImageUri,
                e.prompt,
              ]),
              createImageParams: (t) => {
                var i;
                return {
                  mode: 14,
                  model_name: e.modelName,
                  resolution: e.resolution,
                  product_replacement: { bboxes: e.bboxes.map((e) => [...e]) },
                  ...((null == (i = e.prompt) ? void 0 : i.trim())
                    ? { prompt: e.prompt.trim() }
                    : {}),
                  materials: [
                    { type: 2, role: 4, image_uri: t.imageUri },
                    { type: 2, role: 3, image_uri: e.productImageUri },
                  ],
                };
              },
            };
          }
          constructor() {
            this.mode = "product-replacement";
          }
        })(),
        new (class {
          prepare(e, t) {
            if ("outpaint" !== e.type)
              throw Error("Outpaint adapter received incompatible input.");
            let i = tn(t, this.mode);
            return (
              (function (e, t) {
                if (
                  e.source.nodeId !== t.nodeId ||
                  e.source.resourceId !== t.resourceId ||
                  e.source.imageUri !== t.imageUri ||
                  e.source.displayUrl !== t.displayUrl ||
                  e.source.width !== t.width ||
                  e.source.height !== t.height
                )
                  throw Error(
                    "Outpaint intent source must match the active image post-edit session.",
                  );
                let i = [
                  e.frame.top,
                  e.frame.bottom,
                  e.frame.left,
                  e.frame.right,
                ];
                if (
                  i.some((e) => !Number.isFinite(e) || e < 0) ||
                  i.every((e) => 0 === e)
                )
                  throw Error(
                    "Outpaint frame ratios must be finite, non-negative, and not all zero.",
                  );
                if (
                  !Number.isFinite(e.maxSize) ||
                  e.maxSize <= 0 ||
                  1 !== e.candidateCount
                )
                  throw Error(
                    "Outpaint intent size or candidate count is invalid.",
                  );
                if (
                  !Number.isSafeInteger(e.frame.outputWidth) ||
                  !Number.isSafeInteger(e.frame.outputHeight) ||
                  e.frame.outputWidth <= 0 ||
                  e.frame.outputHeight <= 0 ||
                  e.maxSize !==
                    Math.max(e.frame.outputWidth, e.frame.outputHeight)
                )
                  throw Error(
                    "Outpaint max size must match the validated output dimensions.",
                  );
              })(e, i),
              {
                mode: this.mode,
                signature: [
                  e.type,
                  e.source.nodeId,
                  e.source.resourceId,
                  e.prompt,
                  e.frame.top,
                  e.frame.bottom,
                  e.frame.left,
                  e.frame.right,
                  e.frame.outputWidth,
                  e.frame.outputHeight,
                  e.maxSize,
                  e.candidateCount,
                ].join(":"),
                sources: [i],
                createImageParams: (t) => ({
                  mode: 3,
                  prompt: e.prompt,
                  model_name: ti,
                  resolution: "2K",
                  materials: [{ type: 2, image_uri: t.imageUri, role: 4 }],
                  outpaint_params: {
                    top: e.frame.top,
                    bottom: e.frame.bottom,
                    left: e.frame.left,
                    right: e.frame.right,
                    max_size: e.maxSize,
                  },
                }),
              }
            );
          }
          constructor() {
            this.mode = "outpaint";
          }
        })(),
        new (class {
          prepare(e, t) {
            if (!("mode" in e) || "view-control" !== e.mode)
              throw Error("View-control adapter received incompatible input.");
            let i = tn(t, this.mode);
            if (!Number.isFinite(e.yaw) || !Number.isFinite(e.pitch))
              throw Error(
                "Image post-edit view-control angles must be finite.",
              );
            let s = {
              distance: e.distance,
              yaw: (0, e8.G)(Math.round(e.yaw)),
              pitch: Math.round(e.pitch),
            };
            return {
              mode: this.mode,
              signature: `${this.mode}:${s.yaw}:${s.pitch}:${s.distance}`,
              sources: [i],
              createImageParams: () => ({
                mode: 5,
                model_name: ti,
                resolution: "2K",
                view_control: s,
              }),
            };
          }
          constructor() {
            this.mode = "view-control";
          }
        })(),
        new (class {
          prepare(e, t) {
            if (!("mode" in e) || "lighting" !== e.mode)
              throw Error("Lighting adapter received incompatible input.");
            let i = tn(t, this.mode);
            if (!e.modelName.trim())
              throw Error("Image post-edit lighting model name is missing.");
            if (
              !Number.isInteger(e.keyLight.yaw) ||
              !Number.isInteger(e.keyLight.pitch)
            )
              throw Error(
                "Image post-edit lighting key light must use integer degrees.",
              );
            if (!Number.isInteger(e.brightness))
              throw Error(
                "Image post-edit lighting brightness must be an integer.",
              );
            if (!(0, e9.YH)(e.texture))
              throw Error("Image post-edit lighting texture is unknown.");
            if (!(0, e7.Px)(e.lightColor))
              throw Error(
                "Image post-edit lighting colour must be lowercase #rrggbb.",
              );
            if (void 0 !== e.presetId && !e.presetId.trim())
              throw Error(
                "Image post-edit lighting preset id must not be blank.",
              );
            let s = (0, e9.XZ)(e.keyLight),
              n = {
                key_light: s,
                brightness: e.brightness,
                texture: e.texture,
                light_color: e.lightColor,
                ...(void 0 !== e.presetId ? { preset_id: e.presetId } : {}),
              };
            return {
              mode: this.mode,
              signature: [
                this.mode,
                e.modelName,
                s.yaw,
                s.pitch,
                n.brightness,
                n.texture,
                n.light_color,
                n.preset_id ?? "",
              ].join(":"),
              sources: [i],
              createImageParams: () => ({
                mode: 10,
                model_name: e.modelName,
                resolution: "2K",
                lighting: n,
              }),
            };
          }
          constructor() {
            this.mode = "lighting";
          }
        })(),
        new (class {
          prepare(e, t) {
            if (!("mode" in e) || "layer-decompose" !== e.mode)
              throw Error(
                "Layer-decompose adapter received incompatible input.",
              );
            let i = tn(t, this.mode);
            if (!(0, te.Th)(i.format))
              throw Error("Layer decompose only accepts PNG or JPEG sources.");
            if (!(0, te.jU)(i))
              throw Error(
                "Layer decompose source must contain at least 262,144 pixels.",
              );
            if (!(0, te.hO)(e.resolution))
              throw Error("Layer decompose resolution must be auto.");
            let s = (0, tt.f)(e.prompt ?? "", e.region);
            return {
              mode: this.mode,
              signature: [
                this.mode,
                i.nodeId,
                i.resourceId,
                e.resolution,
                s,
              ].join(":"),
              sources: [i],
              createImageParams: () => ({
                mode: 12,
                ...(s ? { prompt: s } : {}),
                model_name: e6.Qk,
                resolution: e.resolution,
              }),
            };
          }
          constructor() {
            this.mode = "layer-decompose";
          }
        })(),
        new (class {
          prepare(e, t) {
            if (!("mode" in e) || "image-hd" !== e.mode)
              throw Error("Image-HD adapter received incompatible input.");
            let i = (function (e, t) {
              if (e.length < 1 || e.length > 20)
                throw Error("Image HD requires between 1 and 20 sources.");
              if (new Set(e).size !== e.length)
                throw Error("Image HD source node IDs must be unique.");
              let i = new Map(t.map((e) => [e.nodeId, e]));
              return Object.freeze(
                e.map((e) => {
                  let t = i.get(e);
                  if (!t)
                    throw Error(
                      "Image HD source is not part of the frozen session.",
                    );
                  return t;
                }),
              );
            })(e.sourceNodeIds, t);
            if (
              "pro" === e.kind &&
              (!Number.isFinite(e.detailStrength) ||
                e.detailStrength < 0.01 ||
                e.detailStrength > 1)
            )
              throw Error(
                "Image Pro HD detail strength must be between 0.01 and 1.",
              );
            let s =
                "normal" === e.kind
                  ? { mode: 6 }
                  : {
                      mode: 7,
                      resolution: e.resolution,
                      strength: e.detailStrength,
                    },
              n = e.sourceNodeIds.join(",");
            return {
              mode: this.mode,
              signature:
                "normal" === e.kind
                  ? `${this.mode}:${e.kind}:${n}`
                  : `${this.mode}:${e.kind}:${e.resolution}:${e.detailStrength}:${n}`,
              sources: i,
              createImageParams: () => s,
            };
          }
          constructor() {
            this.mode = "image-hd";
          }
        })(),
      ]);
      var tr = i(15671);
      class ta {
        async encode(e) {
          ((function (e) {
            if (
              e.selection.width !== e.source.width ||
              e.selection.height !== e.source.height
            )
              throw Error(
                "InpaintingRemove selection dimensions must match the source image.",
              );
          })(e),
            tc(e.signal),
            tl(e.selection),
            (function (e) {
              for (let t = 0; t < e.alpha.length; t += 1)
                if ((e.alpha[t] ?? 0) > 0) return;
              throw Error("InpaintingRemove selection is empty.");
            })(e.selection));
          let t = null,
            i = null,
            s = null,
            n = null;
          try {
            var o, r, a;
            let l =
                (null == (o = e.source.pixelSourceUrl) ? void 0 : o.trim()) ||
                e.source.displayUrl,
              d = await this.readSource(l, e.signal);
            if (
              (tc(e.signal),
              (t = await this.decodeSource(d)),
              tc(e.signal),
              t.width !== e.source.width || t.height !== e.source.height)
            )
              throw Error(
                "Decoded InpaintingRemove source dimensions must match the source image.",
              );
            (((n = this.createCanvas()).width = e.source.width),
              (n.height = e.source.height));
            let u = n.getContext("2d", { willReadFrequently: !0 });
            if (!u)
              throw Error(
                "InpaintingRemove WebP export requires a readable 2D canvas.",
              );
            (u.drawImage(t.canvasSource, 0, 0, e.source.width, e.source.height),
              (i = u.getImageData(0, 0, e.source.width, e.source.height).data),
              (s = (function (e, t) {
                tl(e);
                let i = e.width * e.height;
                if (t && t.length !== 4 * i)
                  throw Error(
                    "InpaintingRemove source pixels and selection coverage must contain the same pixel count.",
                  );
                let s = !1;
                for (let n = 0; n < i; n += 1) {
                  let i = e.alpha[n];
                  if (!Number.isInteger(i) || i < 0 || i > 255)
                    throw Error(
                      "InpaintingRemove selection coverage must be an 8-bit integer.",
                    );
                  let o = (null == t ? void 0 : t[4 * n + 3]) ?? 255;
                  s || (s = i > 0 && o > 0);
                }
                if (!s) throw Error("InpaintingRemove selection is empty.");
                let n = new Uint8ClampedArray(4 * i);
                for (let s = 0; s < i; s += 1) {
                  let i = e.alpha[s] ?? 0,
                    o = Math.round(
                      (i * ((null == t ? void 0 : t[4 * s + 3]) ?? 255)) / 255,
                    ),
                    r = 4 * s;
                  ((n[r] = o),
                    (n[r + 1] = o),
                    (n[r + 2] = o),
                    (n[r + 3] = 255));
                }
                return n;
              })(e.selection, i)));
            let c = u.createImageData(e.source.width, e.source.height);
            (c.data.set(s), u.putImageData(c, 0, 0), tc(e.signal));
            let h = await ((r = n),
            (a = e.signal),
            new Promise((e, t) => {
              let i = !1,
                s = (e) => {
                  i || ((i = !0), a.removeEventListener("abort", n), e());
                },
                n = () =>
                  s(() =>
                    t(
                      new DOMException(
                        "InpaintingRemove WebP export was canceled.",
                        "AbortError",
                      ),
                    ),
                  );
              if ((a.addEventListener("abort", n, { once: !0 }), a.aborted))
                return void n();
              try {
                r.toBlob((i) => {
                  a.aborted
                    ? n()
                    : i && "image/webp" === i.type
                      ? s(() => e(i))
                      : s(() =>
                          t(
                            Error(
                              "InpaintingRemove WebP export returned an invalid image.",
                            ),
                          ),
                        );
                }, "image/webp");
              } catch (e) {
                s(() => t(e));
              }
            }));
            return new File(
              [h],
              `inpainting-mask-${e.source.resourceId}.webp`,
              { type: "image/webp" },
            );
          } finally {
            (null == t || t.close(),
              null == i || i.fill(0),
              null == s || s.fill(0),
              n && ((n.width = 0), (n.height = 0)));
          }
        }
        constructor(e = {}) {
          ((this.identity =
            "jimeng-compatible-source-alpha-clipped-grayscale-webp:v2"),
            (this.createCanvas =
              e.createCanvas ?? (() => document.createElement("canvas"))),
            (this.decodeSource = e.decodeSource ?? tu),
            (this.readSource = e.readSource ?? td));
        }
      }
      function tl(e) {
        let t = e.width * e.height;
        if (
          !Number.isSafeInteger(e.width) ||
          !Number.isSafeInteger(e.height) ||
          e.width <= 0 ||
          e.height <= 0 ||
          e.alpha.length !== t
        )
          throw Error(
            "InpaintingRemove selection dimensions or coverage length are invalid.",
          );
        for (let i = 0; i < t; i += 1) {
          let t = e.alpha[i];
          if (!Number.isInteger(t) || t < 0 || t > 255)
            throw Error(
              "InpaintingRemove selection coverage must be an 8-bit integer.",
            );
        }
      }
      async function td(e, t) {
        let i = await fetch(e, { mode: "cors", signal: t });
        if (!i.ok) throw Error("InpaintingRemove source image is unreadable.");
        return i.blob();
      }
      async function tu(e) {
        if ("function" != typeof createImageBitmap)
          throw Error("InpaintingRemove source decoding is unavailable.");
        let t = await createImageBitmap(e);
        return {
          canvasSource: t,
          close: () => t.close(),
          height: t.height,
          width: t.width,
        };
      }
      function tc(e) {
        if (e.aborted)
          throw new DOMException(
            "InpaintingRemove WebP export was canceled.",
            "AbortError",
          );
      }
      var th = i(53764);
      class tp {
        exportAsset(e) {
          return this.encoder.encode(e);
        }
        constructor(e) {
          ((this.outputKind = "MASK_IMAGE"),
            (this.encoder = e.encoder),
            (this.identity = `inpainting-remove:${e.encoder.identity}`));
        }
      }
      class tm {
        prepare(e) {
          var t, i;
          let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.assertActive();
          let n = en(e),
            o = this.current;
          if (
            o &&
            !o.invalidation &&
            ((t = o.identity),
            (i = n),
            t.adapterIdentity === i.adapterIdentity &&
              t.documentIdentity === i.documentIdentity &&
              t.documentRevision === i.documentRevision &&
              t.outputKind === i.outputKind &&
              t.sessionId === i.sessionId &&
              t.source.height === i.source.height &&
              t.source.imageUri === i.source.imageUri &&
              t.source.nodeId === i.source.nodeId &&
              t.source.resourceId === i.source.resourceId &&
              t.source.width === i.source.width)
          ) {
            if (o.inFlight)
              return (this.registerCallerAbort(o, s.signal), o.inFlight);
            if (o.lastResult) return Promise.resolve(o.lastResult);
          }
          o && this.invalidateAttempt(o, "superseded");
          let r = {
            abortController: new AbortController(),
            adapter: e.adapter,
            callerAbortDetachers: new Set(),
            document: e.document,
            file: null,
            identity: n,
            inFlight: null,
            invalidation: null,
            lastResult: null,
            source: e.source,
          };
          return ((this.current = r), this.startAttempt(r, s.signal));
        }
        retryIfFailed() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.assertActive();
          let t = this.current;
          return t &&
            !t.inFlight &&
            t.lastResult &&
            !t.lastResult.ok &&
            "failed" === t.lastResult.reason &&
            t.lastResult.error.retryable
            ? ((t.abortController = new AbortController()),
              (t.invalidation = null),
              (t.lastResult = null),
              this.startAttempt(t, e.signal))
            : null;
        }
        cancel() {
          !this.disposed &&
            this.current &&
            this.invalidateAttempt(this.current, "canceled");
        }
        reset() {
          if (this.disposed) return;
          let e = this.current;
          (e || "idle" !== this.snapshot.status) &&
            ((this.current = null),
            e && this.invalidateAttempt(e, "canceled"),
            this.setSnapshot({ status: "idle" }));
        }
        dispose() {
          if (this.disposed) return;
          let e = this.current;
          ((this.disposed = !0),
            (this.current = null),
            this.listeners.clear(),
            e && this.invalidateAttempt(e, "canceled"));
        }
        startAttempt(e, t) {
          this.registerCallerAbort(e, t);
          let i = Promise.resolve()
            .then(() => this.runAttempt(e))
            .finally(() => {
              (this.detachCallerAborts(e),
                e.inFlight === i && (e.inFlight = null));
            });
          return ((e.inFlight = i), i);
        }
        registerCallerAbort(e, t) {
          var i, s;
          t &&
            e.callerAbortDetachers.add(
              ((i = t),
              (s = () => this.invalidateAttempt(e, "canceled")),
              i.aborted
                ? (s(), () => void 0)
                : (i.addEventListener("abort", s, { once: !0 }),
                  () => i.removeEventListener("abort", s))),
            );
        }
        detachCallerAborts(e) {
          for (let t of e.callerAbortDetachers) t();
          e.callerAbortDetachers.clear();
        }
        async runAttempt(e) {
          let t = e.file ? "upload" : "export";
          try {
            (e.file || (e.file = await this.exportAttemptFile(e)),
              (t = "upload"));
            let i = await this.uploadAttemptFile(e),
              s = {
                attemptIdentity: e.identity,
                outputKind: e.identity.outputKind,
                storageKey: i,
              };
            e.file = null;
            let n = { asset: s, ok: !0 };
            return (
              (e.lastResult = n),
              this.setCurrentSnapshot(e, {
                asset: s,
                attemptIdentity: e.identity,
                status: "ready",
              }),
              n
            );
          } catch (o) {
            var i;
            if (!this.isCurrent(e) || e.invalidation)
              return this.invalidatedResult(e);
            if (
              ((i = o) instanceof DOMException && "AbortError" === i.name) ||
              e.abortController.signal.aborted
            ) {
              e.invalidation = "canceled";
              let t = { ok: !1, reason: "canceled" };
              return (
                (e.lastResult = t),
                this.setCurrentSnapshot(e, {
                  attemptIdentity: e.identity,
                  status: "canceled",
                }),
                t
              );
            }
            let s =
                o instanceof ei
                  ? o
                  : new ei(t, { cause: o, retryable: "upload" === t }),
              n = { error: s, ok: !1, reason: "failed" };
            return (
              (e.lastResult = n),
              this.setCurrentSnapshot(e, {
                attemptIdentity: e.identity,
                error: s,
                status: "failed",
              }),
              n
            );
          }
        }
        async exportAttemptFile(e) {
          if (
            (this.setCurrentSnapshot(e, {
              attemptIdentity: e.identity,
              status: "exporting",
            }),
            e.document.width !== e.source.width ||
              e.document.height !== e.source.height)
          )
            throw new ei("export", { retryable: !1 });
          let t = e.abortController.signal,
            i = await this.executor.export(
              {
                adapter: e.adapter,
                document: e.document,
                documentIdentity: e.identity.documentIdentity,
                sessionId: e.identity.sessionId,
                source: e.source,
              },
              t,
            );
          return (this.assertCurrentAttempt(e), i);
        }
        async uploadAttemptFile(e) {
          if ((this.assertCurrentAttempt(e), !e.file))
            throw new ei("export", { retryable: !1 });
          this.setCurrentSnapshot(e, {
            attemptIdentity: e.identity,
            progress: 0,
            status: "uploading",
          });
          let t = e.abortController.signal,
            i = await this.executor.upload(e.file, {
              onProgress: (t) => this.updateProgress(e, t),
              signal: t,
            });
          return (this.assertCurrentAttempt(e), i);
        }
        assertCurrentAttempt(e) {
          if (!this.isCurrent(e))
            throw new DOMException(
              "Mask asset attempt is no longer current.",
              "AbortError",
            );
        }
        invalidateAttempt(e, t) {
          e.invalidation ||
            ((e.invalidation = t),
            (e.lastResult = { ok: !1, reason: t }),
            (e.file = null),
            e.abortController.abort(),
            "canceled" === t &&
              this.current === e &&
              this.setSnapshot({
                attemptIdentity: e.identity,
                status: "canceled",
              }));
        }
        invalidatedResult(e) {
          return { ok: !1, reason: e.invalidation ?? "superseded" };
        }
        isCurrent(e) {
          return this.current === e && !e.invalidation && !this.disposed;
        }
        updateProgress(e, t) {
          if (!this.isCurrent(e) || "uploading" !== this.snapshot.status)
            return;
          let i = Math.min(100, Math.max(0, t));
          this.snapshot.progress !== i &&
            this.setSnapshot({
              attemptIdentity: e.identity,
              progress: i,
              status: "uploading",
            });
        }
        setCurrentSnapshot(e, t) {
          this.isCurrent(e) && this.setSnapshot(t);
        }
        setSnapshot(e) {
          for (let t of ((this.snapshot = e), [...this.listeners])) t();
        }
        assertActive() {
          if (this.disposed)
            throw Error("MaskAssetPreparationService is disposed.");
        }
        constructor(e) {
          ((this.listeners = new Set()),
            (this.current = null),
            (this.disposed = !1),
            (this.snapshot = { status: "idle" }),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) => (
              this.assertActive(),
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.executor = new es(e)));
        }
      }
      let tf = Object.freeze({ status: "inactive" }),
        tb = Object.freeze({ status: "idle" }),
        tg = 0;
      function tv(e) {
        return "smart-edit" === e
          ? "smart_edit"
          : "cutout" === e || "inpainting-remove" === e
            ? "quick_select"
            : "outpaint" === e
              ? "outpaint_ratio"
              : "view-control" === e
                ? "click_multi_angles"
                : "product-replacement" !== e &&
                    "lighting" !== e &&
                    "layer-decompose" !== e &&
                    "panorama" !== e &&
                    "multi-size" !== e
                  ? "hd_auto"
                  : void 0;
      }
      let tI = Object.freeze({
        "2K": "image.pro-hd-2k",
        "4K": "image.pro-hd-4k",
        "8K": "image.pro-hd-8k",
      });
      class tS extends Error {
        constructor(e) {
          (super(e.message),
            (this.name = "BatchCommercialAuthorizationError"),
            (this.result = e));
        }
      }
      class ty {
        finishClose(e, t) {
          var i, s;
          if (
            (this.cancelFocusPresentation(),
            null == (i = this.productReplacement) || i.close(),
            "inactive" === this.snapshot.status)
          ) {
            (null == (s = this.maskAssetPreparation) || s.reset(),
              "confirm" !== e && this.resultPresentation.cancel());
            return;
          }
          let n = this.snapshot;
          (this.releaseSessionTransientState(),
            ("confirm" !== e &&
              !this.disposed &&
              this.detachSubmittedSmartEdit(n)) ||
              this.cancelActiveAttempt(
                "cancel" === e ? "canceled" : "superseded",
                "confirm" === e,
              ),
            (this.pendingCompositionSubmission = null),
            (this.snapshot = tf),
            this.notify());
          let o = this.restoreSessionView(n, e, t);
          "confirm" === e && (null == t ? void 0 : t.resultNodeId)
            ? this.resultPresentation
                .settle(n.sessionId, [{ nodeId: t.resultNodeId }])
                .then((e) => {
                  "completed" === e.status && (null == o || o());
                })
            : null == o || o();
        }
        openSourceSession(e) {
          var t;
          let { mode: i, nodeIds: s, selectionKind: n } = e;
          if (
            new Set(s).size !== s.length ||
            (("view-control" === i ||
              "lighting" === i ||
              "layer-decompose" === i ||
              "panorama" === i ||
              "product-replacement" === i ||
              "multi-size" === i ||
              "inpainting-remove" === i) &&
              "single" !== n)
          )
            return {
              code: "UNSUPPORTED_SELECTION",
              ok: !1,
              reason: "commandFailed",
            };
          let o = tO(this.dependencies, i, s);
          if (!o.ok) return o;
          let r = o.sources,
            a = tW();
          (this.close("supersede"), (this.documentMutationSequence = 0));
          let l = 1 === r.length ? r[0] : void 0,
            d =
              "smart-edit" === i && l
                ? (function (e, t) {
                    if (t.smartEdit)
                      return Object.freeze({ status: "preparing" });
                    let i = (0, e_.tH)({
                      documentIdentity: `${e}:new`,
                      source: tE(t, t, t.resourceId),
                    });
                    return i.ok
                      ? i.snapshot
                      : Object.freeze({
                          reason: "documentUnavailable",
                          status: "failed",
                        });
                  })(a, l)
                : void 0;
          return (
            (this.snapshot = Object.freeze({
              ...("cutout" === i ? { cutout: { status: "idle" } } : {}),
              ...("inpainting-remove" === i && l
                ? {
                    inpaintingRemove: Object.freeze({
                      document: tq((0, th.A)(l)),
                      documentIdentity: tX(a, 0),
                      quickSelect: Object.freeze({ status: "idle" }),
                    }),
                  }
                : {}),
              ...(d ? { smartEdit: d } : {}),
              ...("layer-decompose" === i
                ? { initialViewportPresentation: "pending" }
                : {}),
              mode: i,
              selectionKind: n,
              sessionId: a,
              sources: Object.freeze(r),
              status: "active",
              submission: tb,
            })),
            this.startSourceEnvironmentWatch(a),
            "product-replacement" === i &&
              l &&
              (null == (t = this.productReplacement) || t.open(l, a)),
            "layer-decompose" === i || "product-replacement" === i
              ? (this.notify(), this.focusActiveSource())
              : (this.focusActiveSource(), this.notify()),
            "smart-edit" === i &&
              (null == l ? void 0 : l.smartEdit) &&
              !t_(this.dependencies) &&
              this.prepareRestoredSmartEditSession(a, l),
            { ok: !0, value: { sessionId: a } }
          );
        }
        openComposition(e, t) {
          var i;
          let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "composition",
            n = t[0];
          if (!n)
            return { code: "EMPTY_SELECTION", ok: !1, reason: "commandFailed" };
          if (1 !== t.length)
            return {
              code: "UNSUPPORTED_SELECTION",
              ok: !1,
              reason: "commandFailed",
            };
          let o = this.dependencies.getObjectSnapshot(n);
          if ((null == o ? void 0 : o.type) !== "image")
            return {
              code: "UNSUPPORTED_SELECTION",
              ok: !1,
              reason: "commandFailed",
            };
          let r = (0, el.Fx)({
            nodeId: n,
            primaryResourceId: o.data.resourceId,
            resources: this.dependencies.getResourceBindings(n),
            title: o.data.title,
          });
          if (!r)
            return {
              code: "SOURCE_RESOURCE_UNAVAILABLE",
              ok: !1,
              reason: "commandFailed",
            };
          let a = this.dependencies.getProjectId();
          if (!a.trim())
            return {
              code: "RUNTIME_IDENTITY_UNAVAILABLE",
              ok: !1,
              reason: "commandFailed",
            };
          let l = tW(),
            d = tK({
              cropPreset: "free",
              horizontalFlipped: !1,
              normalizedCrop: { height: 1, width: 1, x: 0, y: 0 },
              runtimeIdentity: Object.freeze({ projectId: a }),
              sessionId: l,
              sourceNodeId: r.nodeId,
              sourceResourceId: r.resourceId,
              verticalFlipped: !1,
            });
          (this.close("supersede"),
            (this.viewRestoreSnapshot =
              (null == (i = this.dependencies.viewRestore)
                ? void 0
                : i.capture()) ?? null));
          let u = {
              intent: d,
              selectionKind: "single",
              sessionId: l,
              status: "active",
              submission: tb,
            },
            c =
              "annotation" === s
                ? Object.freeze({ ...u, mode: s, annotation: (0, eL.aU)(r) })
                : Object.freeze({ ...u, mode: s });
          return (
            (this.snapshot = c),
            this.startCompositionEnvironmentWatch(c),
            this.notify(),
            this.focusActiveSource(),
            { ok: !0, value: { sessionId: l } }
          );
        }
        submitLocalImage(e, t) {
          var i;
          if (this.pendingCompositionSubmission)
            return this.pendingCompositionSubmission;
          let s = this.snapshot;
          if (!(0, e3.J)(s))
            return Promise.resolve({ ok: !1, reason: "sessionUnavailable" });
          if (
            !(
              Number.isSafeInteger(null == (i = e) ? void 0 : i.width) &&
              i.width > 0 &&
              Number.isSafeInteger(null == i ? void 0 : i.height) &&
              i.height > 0
            )
          )
            return Promise.resolve({ ok: !1, reason: "intentInvalid" });
          let n = t_(this.dependencies);
          if (n)
            return (
              this.isCompositionEnvironmentRetained(s) ||
                this.close("supersede"),
              Promise.resolve({ ok: !1, reason: n.reason })
            );
          if (!this.isCompositionEnvironmentRetained(s))
            return (
              this.close("supersede"),
              Promise.resolve({ ok: !1, reason: "sessionUnavailable" })
            );
          if (!this.isCompositionSourceAvailable(s))
            return (
              this.close("supersede"),
              Promise.resolve({ ok: !1, reason: "sourceUnavailable" })
            );
          let o = this.dependencies.compositionSubmit;
          if (!o)
            return (
              this.publishSubmissionFailure(
                s.sessionId,
                "Image composition is unavailable.",
              ),
              Promise.resolve({ ok: !1, reason: "runtimeUnavailable" })
            );
          this.beginResultPresentation(s.sessionId);
          let r = new AbortController();
          ((this.abortController = r),
            this.publishSubmissionState(s.sessionId, { status: "submitting" }));
          let a = Object.freeze({
              ...(t ? { annotation: t } : {}),
              confirmedSourceSize: Object.freeze({ ...e }),
              intent: tK(s.intent),
            }),
            l = o
              .submit(a, r.signal)
              .then(
                (e) => (
                  "active" !== this.snapshot.status ||
                    this.snapshot.sessionId !== s.sessionId ||
                    (e.ok
                      ? this.finishClose("confirm", {
                          resultNodeId: e.resultNodeId,
                        })
                      : this.publishSubmissionFailure(s.sessionId, e.reason)),
                  e
                ),
              )
              .catch(() => {
                let e = {
                  ok: !1,
                  reason: r.signal.aborted ? "canceled" : "runtimeUnavailable",
                };
                return (
                  "active" === this.snapshot.status &&
                    this.snapshot.sessionId === s.sessionId &&
                    this.publishSubmissionFailure(s.sessionId, e.reason),
                  e
                );
              })
              .finally(() => {
                (this.pendingCompositionSubmission === l &&
                  (this.pendingCompositionSubmission = null),
                  this.abortController === r && (this.abortController = null));
              });
          return ((this.pendingCompositionSubmission = l), l);
        }
        async prepareRestoredSmartEditSession(e, t) {
          var i;
          null == (i = this.preparationAbortController) || i.abort();
          let s = t.smartEdit,
            n = s ? (0, e_.Xj)(s.extra) : { ok: !1 };
          if (!n.ok || !this.dependencies.loadResourceStatesByIds)
            return void this.publishSmartEditPreparationFailure(
              e,
              "documentUnavailable",
            );
          let o = (null == s ? void 0 : s.modelName) ?? ek.U8,
            r = null == s ? void 0 : s.outputResolution;
          if (
            !(0, ek.g$)(o) ||
            (void 0 !== r &&
              "1K" !== r &&
              "1.5K" !== r &&
              "2K" !== r &&
              "4K" !== r) ||
            (o === ek.uO && void 0 !== r && "2K" !== r)
          )
            return void this.publishSmartEditPreparationFailure(
              e,
              "documentUnavailable",
            );
          let a = new AbortController();
          this.preparationAbortController = a;
          try {
            let i = tM(
                this.dependencies.getProjectId(),
                "Smart Edit project id is missing.",
              ),
              s = { signal: a.signal, traceId: e };
            if (!tF(this.dependencies, t))
              return void this.publishSmartEditPreparationFailure(
                e,
                "sourceChanged",
              );
            let l = await this.dependencies.loadResourceStatesByIds(
              i,
              [t.resourceId],
              s,
            );
            if (a.signal.aborted || this.preparationAbortController !== a)
              return;
            if (!tF(this.dependencies, t))
              return void this.publishSmartEditPreparationFailure(
                e,
                "sourceChanged",
              );
            let d = l.filter((e) => !("kind" in e)),
              u = (0, el.Fx)({
                nodeId: t.nodeId,
                primaryResourceId: t.resourceId,
                resources: d,
                title: t.title,
              });
            if (!(null == u ? void 0 : u.pixelSourceUrl))
              return void this.publishSmartEditPreparationFailure(
                e,
                "originUnavailable",
              );
            let c = (0, e_.tH)({
              document: n.document,
              documentIdentity: `${t.resourceId}:extra`,
              source: tE(t, u, t.resourceId),
            });
            if (!c.ok)
              return void this.publishSmartEditPreparationFailure(
                e,
                "documentUnavailable",
              );
            if (
              a.signal.aborted ||
              t_(this.dependencies) ||
              "active" !== this.snapshot.status ||
              this.snapshot.sessionId !== e ||
              "smart-edit" !== this.snapshot.mode
            )
              return;
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              smartEdit: Object.freeze({
                ...c.snapshot,
                modelName: o,
                outputResolution: r,
              }),
            })),
              this.notify(),
              this.focusActiveSource());
          } catch (i) {
            let t;
            a.signal.aborted ||
              tH(i) ||
              t_(this.dependencies) ||
              (this.publishSmartEditPreparationFailure(
                e,
                "documentUnavailable",
              ),
              (t = Error("Smart Edit document restore failed.", { cause: i })),
              "function" == typeof globalThis.reportError
                ? globalThis.reportError(t)
                : queueMicrotask(() => {
                    throw t;
                  }));
          } finally {
            this.preparationAbortController === a &&
              (this.preparationAbortController = null);
          }
        }
        publishSmartEditPreparationFailure(e, t) {
          t_(this.dependencies) ||
            "active" !== this.snapshot.status ||
            this.snapshot.sessionId !== e ||
            "smart-edit" !== this.snapshot.mode ||
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              smartEdit: Object.freeze({ reason: t, status: "failed" }),
            })),
            this.notify());
        }
        async runRecognition(e) {
          (this.invalidateRecognition("superseded"),
            this.releaseQuickSelectCandidates());
          let t = {
            action: e.action,
            controller: new AbortController(),
            documentMutationSequence: this.documentMutationSequence,
            invalidation: null,
            mode: e.mode,
            sequence: ++this.recognitionSequence,
            sessionId: e.session.sessionId,
          };
          ((this.recognitionAttempt = t),
            this.publishRecognitionProgress(
              e.session,
              e.mode,
              e.action,
              e.currentDocument,
            ));
          try {
            let i = await this.dependencies.recognition.recognize({
              action: e.action,
              currentDocument: e.currentDocument,
              signal: t.controller.signal,
              source: e.source,
            });
            if (
              !this.isCurrentRecognition(t) ||
              this.documentMutationSequence !== t.documentMutationSequence
            )
              return (
                tB(i),
                { ok: !1, reason: t.invalidation ?? "superseded" }
              );
            let s = t_(this.dependencies);
            if (s)
              return (
                tB(i),
                (this.recognitionAttempt = null),
                { ...s, ok: !1 }
              );
            return (
              (function (e, t, i, s) {
                if (e.action !== t)
                  throw (
                    tB(e),
                    Error(
                      "Mask recognition returned an unexpected action result.",
                    )
                  );
                if ("initial" === e.action) return tz(e.document, i, s);
                if (
                  e.candidates.width !== i.width ||
                  e.candidates.height !== i.height ||
                  e.candidates.count < 1
                )
                  throw (
                    e.candidates.dispose(),
                    Error(
                      "Quick Select candidates do not match the source image.",
                    )
                  );
              })(i, e.action, e.source, e.currentDocument),
              this.acceptRecognitionOutput(
                e.session,
                e.mode,
                e.currentDocument,
                i,
              ),
              (this.recognitionAttempt = null),
              this.notify(),
              { ok: !0 }
            );
          } catch (o) {
            let i = t.invalidation;
            if (i || t.controller.signal.aborted || tH(o))
              return { ok: !1, reason: i ?? "canceled" };
            if (
              !this.isCurrentRecognition(t) ||
              this.documentMutationSequence !== t.documentMutationSequence
            )
              return { ok: !1, reason: "superseded" };
            let s = t_(this.dependencies);
            if (s) return ((this.recognitionAttempt = null), { ...s, ok: !1 });
            let n = tL(o);
            return (
              this.publishRecognitionFailure(
                e.session,
                e.mode,
                e.action,
                e.currentDocument,
                n,
              ),
              (this.recognitionAttempt = null),
              { message: n, ok: !1, reason: "failed" }
            );
          }
        }
        submitMultiSize(e, t) {
          var i, s;
          let n = (0, eM.R)(this.dependencies.postEditCatalog),
            o = new ex.k(n).getSelection(
              t.map((e, t) => ({
                ...e,
                source: "custom",
                id: String(t),
                name: "",
              })),
            ),
            r = () => ({
              ok: !1,
              reason: "commercialUnavailable",
              message: (0, eR.Qv)(),
            });
          if (!o) return Promise.resolve(r());
          let a = tx(e.sources, 0, "Multi-size source is missing."),
            l = o.targets.map((e) =>
              (0, eC.J)({
                mode: "multi-size",
                modelName: o.modelName,
                resolution: e.commercialResolution,
              }),
            ),
            d = this.dependencies.getProjectId(),
            u = this.dependencies.getDraftId(),
            c = () =>
              (0, eM.R)(this.dependencies.postEditCatalog) === n &&
              this.dependencies.getProjectId() === d &&
              this.dependencies.getDraftId() === u &&
              tF(this.dependencies, a),
            h =
              null == (i = (s = this.dependencies.commercial).quoteActions)
                ? void 0
                : i.call(
                    s,
                    l.map((e, t) => ({ id: String(t), action: e })),
                  );
          return (null == h ? void 0 : h.status) === "available" && c()
            ? this.startSubmission(e, e.sessionId, t.length, (t, i) =>
                this.executeBatchCommercialSubmission(
                  e,
                  l,
                  t,
                  i,
                  async (s) => {
                    if (!c()) return r();
                    let n = this.prepareBatchAttempt(
                      e,
                      JSON.stringify(o.targets.map((e) => [e.width, e.height])),
                      o.targets.map((e, t) => ({
                        source: a,
                        benefitType: tx(
                          s,
                          t,
                          "Multi-size commerce context is missing.",
                        ).selection.benefitType,
                        imageParams: {
                          mode: 2,
                          target_size: { width: e.width, height: e.height },
                        },
                      })),
                    );
                    this.activateAttempt(n);
                    let l = await this.executeBatchAttempt(n, t, i);
                    if (!l.ok || "nodeId" in l) return l;
                    throw Error(
                      "Multi-size submission did not return an accepted output.",
                    );
                  },
                  c,
                ),
              )
            : Promise.resolve(r());
        }
        submitSingleImagePostEdit(e, t) {
          var i, s;
          let n;
          if (1 !== e.sources.length)
            return Promise.resolve({
              message:
                "Single-editor image post-edit requires exactly one source.",
              ok: !1,
              reason: "commandFailed",
            });
          let o = t_(this.dependencies);
          if (o) return Promise.resolve({ ...o, ok: !1 });
          if (!e.sources.every((e) => tF(this.dependencies, e)))
            return (
              this.close(),
              Promise.resolve({
                message: "Image post-edit source changed before submission.",
                ok: !1,
                reason: "commandFailed",
              })
            );
          if ("mode" in t && "multi-size" === t.mode)
            return this.submitMultiSize(e, t.targets);
          if ("cutout" === t.type || "inpainting-remove" === t.type)
            return this.submitMaskPostEdit(e, t);
          if ("smart-edit" === t.type) return this.submitSmartEdit(e, t);
          if (
            "mode" in t &&
            "layer-decompose" === t.mode &&
            (null == (s = e.sources[0]) || null == (i = s.format)
              ? void 0
              : i.trim().toLowerCase()) === "webp"
          )
            return this.startSubmission(e, e.sessionId, 1, async (i, s) => {
              let n;
              try {
                tP(this.dependencies);
                let s = await this.refreshLayerDecomposeWebpSource(e, i.signal);
                n = to.prepare(t, s);
              } catch (i) {
                let t = tL(i);
                return (
                  this.publishSubmissionFailure(e.sessionId, t),
                  { message: t, ok: !1, reason: "commandFailed" }
                );
              }
              return this.executeCommercialSubmission(
                e,
                tR(t),
                i,
                s,
                async (t) => {
                  let o = this.getOrCreateAttempt(
                    e,
                    n,
                    t.selection.benefitType,
                  );
                  return this.executeAttempt(o, i, s);
                },
              );
            });
          try {
            (tP(this.dependencies), (n = to.prepare(t, e.sources)));
          } catch (i) {
            let t = tL(i);
            return (
              this.publishSubmissionFailure(e.sessionId, t),
              Promise.resolve({ message: t, ok: !1, reason: "commandFailed" })
            );
          }
          return tC(t)
            ? this.startSubmission(e, e.sessionId, 1, async (t, i) => {
                var s, o;
                let r =
                    null ==
                    (s = (o = this.dependencies.generator).captureConsumption)
                      ? void 0
                      : s.call(o),
                  a = () => {
                    let s = this.getOrCreateAttempt(e, n);
                    return this.executeAttempt(s, t, i);
                  };
                try {
                  return r ? await this.withConsumption(r, t, a) : await a();
                } finally {
                  null == r || r.dispose();
                }
              })
            : this.startSubmission(e, e.sessionId, 1, async (i, s) => {
                if ("layer-decompose" === e.mode) {
                  try {
                    await this.dependencies.ensureImageLayerBoardDataVersion(
                      i.signal,
                    );
                  } catch (n) {
                    if (i.signal.aborted) return tT();
                    let t = tL(n);
                    return (
                      this.publishFailure(s, n, e.sessionId, t),
                      { message: t, ok: !1, reason: "commandFailed" }
                    );
                  }
                  let t = this.rejectSubmissionWriteIfUnavailable(
                    e.sessionId,
                    i,
                  );
                  if (t) return t;
                }
                return this.executeCommercialSubmission(
                  e,
                  tR(t),
                  i,
                  s,
                  async (t) => {
                    let o = this.getOrCreateAttempt(
                      e,
                      n,
                      t.selection.benefitType,
                    );
                    return this.executeAttempt(o, i, s);
                  },
                );
              });
        }
        async refreshLayerDecomposeWebpSource(e, t) {
          let i = e.sources[0],
            s = this.dependencies.loadResourceStatesByIds;
          if (!i || !s) return e.sources;
          let n = tM(
              this.dependencies.getProjectId(),
              "Image post-edit project id is missing.",
            ),
            o = await s(n, [i.resourceId], { signal: t, traceId: e.sessionId });
          if ((t.throwIfAborted(), !tF(this.dependencies, i)))
            throw Error("Image post-edit source changed before submission.");
          let r = o.filter((e) => !("kind" in e)),
            a = (0, el.Fx)({
              nodeId: i.nodeId,
              primaryResourceId: i.resourceId,
              resources: r,
              title: i.title,
            });
          return a ? Object.freeze([a]) : e.sources;
        }
        submitBatchSession(e, t) {
          let i = t_(this.dependencies);
          if (i) return Promise.resolve({ ...i, ok: !1 });
          if (!e.sources.every((e) => tF(this.dependencies, e)))
            return (
              this.close(),
              Promise.resolve({
                message: "Image post-edit source changed before submission.",
                ok: !1,
                reason: "commandFailed",
              })
            );
          if ("batch-cutout" === t.type)
            return this.submitActiveBatchCutout(e, t);
          if (tC(t)) return this.submitBatchNormalHD(e, t);
          if ("mode" in t && "image-hd" === t.mode && "pro" === t.kind) {
            let i;
            try {
              (tP(this.dependencies), (i = to.prepare(t, e.sources)));
            } catch (i) {
              let t = tL(i);
              return (
                this.publishSubmissionFailure(e.sessionId, t),
                Promise.resolve({ message: t, ok: !1, reason: "commandFailed" })
              );
            }
            return this.startSubmission(
              e,
              e.sessionId,
              i.sources.length,
              (s, n) =>
                this.executeBatchCommercialSubmission(
                  e,
                  i.sources.map(() => (0, eC.J)(tR(t))),
                  s,
                  n,
                  (t) => {
                    if (t.length !== i.sources.length)
                      throw Error(
                        "Batch image post-edit commerce authorization count does not match source count.",
                      );
                    let o = this.prepareBatchAttempt(
                      e,
                      i.signature,
                      i.sources.map((e, s) => ({
                        benefitType: tx(
                          t,
                          s,
                          "Batch image post-edit commerce context is missing.",
                        ).selection.benefitType,
                        imageParams: i.createImageParams(e),
                        source: e,
                      })),
                    );
                    return (
                      this.activateAttempt(o),
                      this.executeBatchAttempt(o, s, n)
                    );
                  },
                ),
            );
          }
          return Promise.resolve({
            message: "Batch post-edit submission is not supported.",
            ok: !1,
            reason: "unsupportedBatch",
          });
        }
        restoreSessionView(e, t, i) {
          var s, n, o;
          let r = this.viewRestoreSnapshot;
          if (
            ((this.viewRestoreSnapshot = null),
            !(0, e3.J)(e) ||
              !r ||
              (null == (s = (n = this.dependencies).isEditorDisposed)
                ? void 0
                : s.call(n)) ||
              this.dependencies.getProjectId() !==
                e.intent.runtimeIdentity.projectId)
          )
            return;
          if (
            (null == (o = this.dependencies.viewRestore) || o.restoreView(r),
            "annotation" === e.mode &&
              "cancel" === t &&
              (null == i ? void 0 : i.trigger) === "escape")
          )
            return () => {
              var e;
              return null == (e = this.dependencies.viewRestore)
                ? void 0
                : e.restoreFocus(r, { kind: "canvasRegion" });
            };
          let a =
            "confirm" === t ? (null == i ? void 0 : i.resultNodeId) : void 0;
          if (a)
            return () => {
              var e;
              return null == (e = this.dependencies.viewRestore)
                ? void 0
                : e.restoreFocus(r, { kind: "canvasNode", nodeId: a });
            };
        }
        startSubmission(e, t, i, s) {
          let n = new AbortController();
          this.abortController = n;
          let o = this.abortOnSubmissionEditUnavailable(n),
            r = (t) => {
              let i = this.rejectSubmissionWriteIfUnavailable(e.sessionId, n);
              return i ? Promise.resolve(i) : s(n, t);
            },
            a = (
              this.dependencies.operations
                ? this.dependencies.operations.run(
                    "submitImagePostEdit",
                    {
                      fields: {
                        itemCount: i,
                        relatedId: t,
                        subjectType: e.mode,
                      },
                      mode: "async",
                      signal: n.signal,
                    },
                    r,
                  )
                : r()
            )
              .catch((t) => {
                let i = this.rejectSubmissionWriteIfUnavailable(e.sessionId, n);
                if (i) return i;
                if ((0, e$.vh)(t)) return tT();
                throw t;
              })
              .finally(() => {
                (o(),
                  this.detachedSubmissionControllers.delete(n),
                  this.dispatchedSubmissionControllers.delete(n),
                  this.pendingSubmission === a &&
                    (this.pendingSubmission = null),
                  this.abortController === n && (this.abortController = null));
              });
          return (
            (this.pendingSubmission = a),
            this.publishSubmissionState(e.sessionId, { status: "submitting" }),
            a
          );
        }
        async withConsumption(e, t, i) {
          var n, o, r, a, l, d, u, c;
          (0, s.pt)(e, t.signal).dispose();
          let h = this.consumptionBySubmission.get(t);
          if (
            h &&
            ((null == (n = h.consumption) ? void 0 : n.userId) !==
              (null == (o = e.consumption) ? void 0 : o.userId) ||
              (null == (r = h.consumption) ? void 0 : r.teamId) !==
                (null == (a = e.consumption) ? void 0 : a.teamId) ||
              (null == (l = h.consumption) ? void 0 : l.revision) !==
                (null == (d = e.consumption) ? void 0 : d.revision))
          )
            throw Error(
              "Image post-edit consumption changed during batch authorization",
            );
          h || this.consumptionBySubmission.set(t, e);
          let p = () => t.abort();
          null == (u = e.signal) ||
            u.addEventListener("abort", p, { once: !0 });
          try {
            return await i();
          } finally {
            (null == (c = e.signal) || c.removeEventListener("abort", p),
              h || this.consumptionBySubmission.delete(t));
          }
        }
        async executeCommercialSubmission(e, t, i, s, n) {
          let o;
          try {
            o = await this.dependencies.commercial.execute(
              (0, eC.J)(t),
              (t) => {
                let s = this.rejectSubmissionWriteIfUnavailable(e.sessionId, i);
                if (!s && i.signal.aborted) return Promise.resolve(tT());
                if (!s && !e.sources.every((e) => tF(this.dependencies, e))) {
                  let t = (0, eR.Qv)();
                  return (
                    this.publishSubmissionFailure(e.sessionId, t),
                    Promise.resolve({
                      message: t,
                      ok: !1,
                      reason: "commandFailed",
                    })
                  );
                }
                return s
                  ? Promise.resolve(s)
                  : this.withConsumption(t, i, () => n(t));
              },
              {
                enterSource: "generate",
                surfaceKey: `image.post_edit.${e.mode}`,
                isUseSuccess: (e) => e.ok,
              },
            );
          } catch (i) {
            let t = (0, eR.Qv)();
            return (
              this.publishFailure(s, i, e.sessionId, t),
              { message: t, ok: !1, reason: "commercialUnavailable" }
            );
          }
          return this.resolveCommercialExecution(e, s, o);
        }
        async executeBatchCommercialSubmission(e, t, i, s, n) {
          var o, r, a, l;
          let d =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : () => !0,
            u = tx(t, 0, "Batch image post-edit requires a commercial action."),
            c = {
              enterSource: "generate",
              surfaceKey: `image.post_edit.${e.mode}`,
            };
          null ==
            (o = (r = this.dependencies.commercial).reportVipFunctionDetails) ||
            o.call(r, { action: u, behavior: "click", ...c });
          let h = [],
            p = async (o) => {
              let r;
              if (!d())
                return {
                  ok: !1,
                  reason: "commercialUnavailable",
                  message: (0, eR.Qv)(),
                };
              let a = this.rejectSubmissionWriteIfUnavailable(e.sessionId, i);
              if (a) return a;
              if (o === t.length) return n(Object.freeze([...h]));
              try {
                r = await this.dependencies.commercial.execute(
                  tx(t, o, "Batch commerce action is missing."),
                  async (t) => {
                    if (!d())
                      return {
                        ok: !1,
                        reason: "commercialUnavailable",
                        message: (0, eR.Qv)(),
                      };
                    let s = this.rejectSubmissionWriteIfUnavailable(
                      e.sessionId,
                      i,
                    );
                    if (s) return s;
                    h.push(t);
                    let n = await this.withConsumption(t, i, () => p(o + 1));
                    if (
                      !n.ok &&
                      ("commercialBlocked" === n.reason ||
                        "commercialUnavailable" === n.reason ||
                        "canceled" === n.reason)
                    )
                      throw new tS(n);
                    return n;
                  },
                );
              } catch (i) {
                if (i instanceof tS) return i.result;
                let t = (0, eR.Qv)();
                return (
                  this.publishFailure(s, i, e.sessionId, t),
                  { message: t, ok: !1, reason: "commercialUnavailable" }
                );
              }
              return this.resolveCommercialExecution(e, s, r);
            },
            m = await p(0);
          return (
            m.ok &&
              (null ==
                (a = (l = this.dependencies.commercial)
                  .reportVipFunctionDetails) ||
                a.call(l, { action: u, behavior: "use", ...c })),
            m
          );
        }
        resolveCommercialExecution(e, t, i) {
          if ("executed" === i.status) return i.value;
          if ("blocked" === i.status)
            return (
              this.publishSubmissionState(e.sessionId, tb),
              { message: (0, eR.Qv)(), ok: !1, reason: "commercialBlocked" }
            );
          if ("unavailable" === i.status) {
            let t = (0, eR.Qv)();
            return (
              this.publishSubmissionFailure(e.sessionId, t),
              { message: t, ok: !1, reason: "commercialUnavailable" }
            );
          }
          if ("cancelled" === i.status)
            return (
              this.publishSubmissionState(e.sessionId, tb),
              {
                message: "Image post-edit submission was canceled.",
                ok: !1,
                reason: "canceled",
              }
            );
          if (i.error instanceof tS) return i.error.result;
          let s = "commerce" === i.phase ? (0, eR.Qv)() : tL(i.error);
          return (
            this.publishFailure(t, i.error, e.sessionId, s),
            {
              message: s,
              ok: !1,
              reason:
                "commerce" === i.phase
                  ? "commercialUnavailable"
                  : "commandFailed",
            }
          );
        }
        getOrCreateAttempt(e, t, i) {
          let s = this.attempt;
          return (null == s ? void 0 : s.kind) === "single" &&
            s.inputSignature === t.signature
            ? s
            : (s && this.discardPreparedAttempt(),
              this.activateAttempt(this.prepareAttempt(e, t, i)));
        }
        isCompositionEnvironmentCurrent(e) {
          return (
            !t_(this.dependencies) && this.isCompositionEnvironmentRetained(e)
          );
        }
        isCompositionEnvironmentRetained(e) {
          var t, i, s;
          return (
            (null == (t = t_(this.dependencies)) ? void 0 : t.reason) !==
              "permissionDenied" &&
            !(null == (i = (s = this.dependencies).isEditorDisposed)
              ? void 0
              : i.call(s)) &&
            this.dependencies.getProjectId() ===
              e.intent.runtimeIdentity.projectId
          );
        }
        isCompositionSourceAvailable(e) {
          let t = this.dependencies.getObjectSnapshot(e.intent.sourceNodeId);
          return (
            (null == t ? void 0 : t.type) === "image" &&
            ("annotation" !== e.mode ||
              t.data.resourceId === e.intent.sourceResourceId)
          );
        }
        notify() {
          for (let e of this.listeners) e();
        }
        releaseSessionTransientState() {
          var e;
          for (let t of (null == (e = this.gestureCleanup) || e.call(this),
          (this.gestureCleanup = null),
          this.environmentStops.splice(0).reverse()))
            t();
        }
        startCompositionEnvironmentWatch(e) {
          let t = () => {
            let t = this.snapshot;
            (0, e3.J)(t) &&
              t.sessionId === e.sessionId &&
              ((this.isCompositionEnvironmentRetained(t) &&
                this.isCompositionSourceAvailable(t)) ||
                this.close("supersede"));
          };
          this.environmentStops = [
            this.dependencies.subscribeEditAvailability(t),
            this.dependencies.subscribeObjectSnapshot(e.intent.sourceNodeId, t),
          ];
        }
        startSourceEnvironmentWatch(e) {
          let t = !0,
            i = () => {
              var i, s, n, o, r;
              let a = this.snapshot;
              if (
                "active" !== a.status ||
                "composition" === a.mode ||
                "annotation" === a.mode ||
                a.sessionId !== e
              )
                return;
              let l = t_(this.dependencies),
                d = !l;
              if (d === t) return;
              if (((t = d), !d)) {
                if ("product-replacement" === a.mode) {
                  if ((null == l ? void 0 : l.reason) === "notEditingReady") {
                    null == (o = this.productReplacement) ||
                      o.suspendForTransientUnavailability();
                    return;
                  }
                  (null == (s = this.productReplacement) || s.close(),
                    ((null == (n = this.attempt) ? void 0 : n.kind) !==
                      "single" ||
                      "ambiguous" !== this.attempt.state) &&
                      this.close("supersede"));
                  return;
                }
                this.cancelUnavailableSourcePreparation();
                return;
              }
              let u = this.snapshot;
              if ("active" === u.status && "product-replacement" === u.mode) {
                null == (r = this.productReplacement) ||
                  r.resumeAfterTransientUnavailability();
                return;
              }
              if ("active" !== u.status || "smart-edit" !== u.mode) return;
              let c = u.sources[0];
              (null == (i = u.smartEdit) ? void 0 : i.status) === "preparing" &&
                (null == c ? void 0 : c.smartEdit) &&
                this.prepareRestoredSmartEditSession(u.sessionId, c);
            };
          ((this.environmentStops = [
            this.dependencies.subscribeEditAvailability(i),
          ]),
            i());
        }
        cancelUnavailableSourcePreparation() {
          var e, t, i, s, n;
          (null == (e = this.preparationAbortController) || e.abort(),
            (this.preparationAbortController = null),
            this.recognitionAttempt && this.invalidateRecognition("canceled"),
            this.releaseQuickSelectCandidates());
          let o = this.snapshot;
          if (!("active" !== o.status || (0, e3.J)(o))) {
            if (
              "inpainting-remove" === o.mode &&
              ((null == (t = o.inpaintingRemove)
                ? void 0
                : t.quickSelect.status) === "recognizing" ||
                (null == (i = o.inpaintingRemove)
                  ? void 0
                  : i.quickSelect.status) === "selecting")
            ) {
              ((this.snapshot = Object.freeze({
                ...o,
                inpaintingRemove: Object.freeze({
                  ...o.inpaintingRemove,
                  quickSelect: Object.freeze({ status: "idle" }),
                }),
              })),
                this.notify());
              return;
            }
            if ("cutout" === o.mode) {
              if (
                (null == (s = o.cutout) ? void 0 : s.status) === "recognizing"
              ) {
                ((this.snapshot = Object.freeze({
                  ...o,
                  cutout: Object.freeze({ status: "idle" }),
                })),
                  this.notify());
                return;
              }
              (null == (n = o.cutout) ? void 0 : n.status) === "ready" &&
                ("recognizing" === o.cutout.recognition.status ||
                  "selecting" === o.cutout.recognition.status) &&
                ((this.snapshot = Object.freeze({
                  ...o,
                  cutout: Object.freeze({
                    ...o.cutout,
                    recognition: Object.freeze({ status: "idle" }),
                  }),
                })),
                this.notify());
            }
          }
        }
        submitBatchNormalHD(e, t) {
          let i;
          try {
            (tP(this.dependencies), (i = to.prepare(t, e.sources)));
          } catch (i) {
            let t = tL(i);
            return (
              this.publishSubmissionFailure(e.sessionId, t),
              Promise.resolve({ message: t, ok: !1, reason: "commandFailed" })
            );
          }
          return this.startSubmission(
            e,
            e.sessionId,
            i.sources.length,
            async (t, s) => {
              var n, o;
              let r =
                  null ==
                  (n = (o = this.dependencies.generator).captureConsumption)
                    ? void 0
                    : n.call(o),
                a = () => {
                  let n = this.prepareBatchAttempt(
                    e,
                    i.signature,
                    i.sources.map((e) => ({
                      imageParams: i.createImageParams(e),
                      source: e,
                    })),
                  );
                  return (
                    this.activateAttempt(n),
                    this.executeBatchAttempt(n, t, s)
                  );
                };
              try {
                return r ? await this.withConsumption(r, t, a) : await a();
              } finally {
                null == r || r.dispose();
              }
            },
          );
        }
        prepareAttempt(e, t, i) {
          let { signature: s, sources: n } = t,
            o = n[0];
          if (!o || 1 !== n.length)
            throw Error("Image post-edit requires exactly one source.");
          let r = tM(
              this.dependencies.getProjectId(),
              "Image post-edit project id is missing.",
            ),
            a = (this.dependencies.createSubmitId ?? d.pf)(),
            l = (this.dependencies.createNodeId ?? d.XG)(),
            u = (this.dependencies.createResourceId ?? d.ve)(),
            c = tw({
              benefitType: i,
              imageParams: t.createImageParams(o),
              nodeId: l,
              projectId: r,
              resourceId: u,
              source: o,
              submitId: a,
            });
          return (
            this.beginResultPresentation(a),
            {
              inputSignature: s,
              items: Object.freeze([{ nodeId: l, resourceId: u, source: o }]),
              kind: "single",
              nodeId: l,
              request: c,
              resourceId: u,
              sessionId: e.sessionId,
              state: "prepared",
              submitId: a,
            }
          );
        }
        submitSmartEdit(e, t) {
          var i;
          if ((null == (i = e.smartEdit) ? void 0 : i.status) !== "ready") {
            let t = "Smart Edit preparation must finish before submitting.";
            return (
              this.publishSubmissionFailure(e.sessionId, t),
              Promise.resolve({ message: t, ok: !1, reason: "commandFailed" })
            );
          }
          let s = Promise.resolve(t.composite.blob);
          return (
            s.catch(() => void 0),
            this.startSubmission(e, e.sessionId, 1, async (i, n) => {
              let o;
              try {
                o = await s;
              } catch (s) {
                let t = this.rejectSubmissionWriteIfUnavailable(e.sessionId, i);
                if (t) return t;
                if (i.signal.aborted || tH(s)) return tT();
                return (
                  n
                    ? n.fail(s, () =>
                        this.publishSubmissionState(e.sessionId, tb),
                      )
                    : this.publishSubmissionState(e.sessionId, tb),
                  { message: (0, eR.Qv)(), ok: !1, reason: "commandFailed" }
                );
              }
              let r = this.rejectSubmissionWriteIfUnavailable(e.sessionId, i);
              return (
                r ||
                (i.signal.aborted
                  ? tT()
                  : this.executeCommercialSubmission(e, t, i, n, (s) =>
                      this.prepareAndExecuteSmartEdit(
                        e,
                        t,
                        o,
                        s.selection.benefitType,
                        i,
                        n,
                      ),
                    ))
              );
            })
          );
        }
        async prepareAndExecuteSmartEdit(e, t, i, s, n, o) {
          try {
            var r, a, l, d;
            let u = this.rejectSubmissionWriteIfUnavailable(e.sessionId, n);
            if (u) return u;
            if (
              (tP(this.dependencies),
              "smart-edit" !== e.mode ||
                (null == (r = e.smartEdit) ? void 0 : r.status) !== "ready")
            )
              throw Error("Smart Edit session is not ready.");
            let c = { document: eO(t, e.smartEdit.source, i) },
              h =
                ((a = t),
                (l = c.document),
                (d = i),
                [
                  a.type,
                  a.source.nodeId,
                  a.source.resourceId,
                  a.source.originResourceId,
                  a.modelName,
                  a.outputResolution,
                  d.size,
                  JSON.stringify(l),
                ].join(":")),
              p = this.attempt;
            if (
              (null == p ? void 0 : p.sessionId) === e.sessionId &&
              "single" === p.kind &&
              p.inputSignature === h
            )
              return this.executeAttempt(p, n, o);
            (null == p ? void 0 : p.sessionId) === e.sessionId &&
              this.discardPreparedAttempt();
            let m = this.dependencies.mediaUploadService;
            if (!m)
              throw Error(
                "Smart Edit composite upload service is unavailable.",
              );
            let f = new File([i], `smart-edit-${e.sessionId}.png`, {
                type: "image/png",
              }),
              b = await m.upload({ file: f }, { signal: n.signal }),
              g = this.rejectSubmissionWriteIfUnavailable(e.sessionId, n);
            if (g) return g;
            if (n.signal.aborted) return tT();
            let v = tM(
              b.storageKey,
              "Smart Edit composite upload returned no storage key.",
            );
            if ("image" !== b.mediaType)
              throw Error(
                "Smart Edit composite upload returned a non-image asset.",
              );
            let I = this.detachedSubmissionControllers.has(n),
              S = this.prepareSmartEditAttempt(e, t, c.document, h, v, s, {
                presentResult: !I,
              });
            return (I || this.activateAttempt(S), this.executeAttempt(S, n, o));
          } catch (s) {
            let t = this.rejectSubmissionWriteIfUnavailable(e.sessionId, n);
            if (t) return t;
            if (n.signal.aborted || tH(s)) return tT();
            let i = tL(s);
            return (
              this.publishFailure(o, s, e.sessionId, i),
              { message: i, ok: !1, reason: "commandFailed" }
            );
          }
        }
        discardPreparedAttempt() {
          var e;
          (null == (e = this.nodeArrivalCancel) || e.call(this),
            (this.nodeArrivalCancel = null),
            (this.attempt = null));
        }
        prepareSmartEditAttempt(e, t, i, s, n, o, r) {
          var a;
          let l = e.sources[0];
          if (!l || !tF(this.dependencies, l))
            throw Error("Smart Edit source changed during composite upload.");
          let u = tM(
              this.dependencies.getProjectId(),
              "Smart Edit project id is missing.",
            ),
            c = (this.dependencies.createNodeId ?? d.XG)(),
            h = (this.dependencies.createResourceId ?? d.ve)(),
            p = (this.dependencies.createSubmitId ?? d.pf)(),
            m = {
              project_id: (a = {
                benefitType: o,
                imageParams: eP(t, i, n),
                nodeId: c,
                projectId: u,
                resourceId: h,
                source: l,
                submitId: p,
              }).projectId,
              op: 3,
              post_edit: {
                source_node_id: a.source.nodeId,
                source_resource_id: a.source.resourceId,
                submit_id: a.submitId,
                items: [
                  {
                    output_node_id: a.nodeId,
                    output_title: (0, eA.MF)(
                      a.source.title,
                      "image.smart-edit",
                    ),
                    item: {
                      commerce_selection: { benefit_type: a.benefitType },
                      params: { image_params: a.imageParams },
                      resource_id: a.resourceId,
                      type: 1,
                    },
                  },
                ],
              },
            };
          return (
            r.presentResult && this.beginResultPresentation(p),
            {
              inputSignature: s,
              items: Object.freeze([{ nodeId: c, resourceId: h, source: l }]),
              kind: "single",
              nodeId: c,
              request: m,
              resourceId: h,
              sessionId: e.sessionId,
              state: "prepared",
              submitId: p,
            }
          );
        }
        prepareBatchAttempt(e, t, i) {
          if (i.length < 1 || i.length > 20)
            throw Error(
              "Batch image post-edit requires between 1 and 20 prepared items.",
            );
          let s = tM(
              this.dependencies.getProjectId(),
              "Image post-edit project id is missing.",
            ),
            n = (this.dependencies.createSubmitId ?? d.pf)(),
            o = i.map((e) => {
              let { benefitType: t, imageParams: i, source: s } = e;
              return {
                benefitType: t,
                imageParams: i,
                nodeId: (this.dependencies.createNodeId ?? d.XG)(),
                resourceId: (this.dependencies.createResourceId ?? d.ve)(),
                source: s,
              };
            }),
            r = tk({ items: o, projectId: s, submitId: n });
          return (
            this.beginResultPresentation(n),
            {
              inputSignature: t,
              items: Object.freeze(
                o.map((e) => {
                  let { nodeId: t, resourceId: i, source: s } = e;
                  return Object.freeze({ nodeId: t, resourceId: i, source: s });
                }),
              ),
              kind: "batch",
              request: r,
              sessionId: e.sessionId,
              submitId: n,
            }
          );
        }
        submitActiveBatchCutout(e, t) {
          return this.startSubmission(
            e,
            e.sessionId,
            e.sources.length,
            (i, s) => this.executeBatchCutoutSubmission(e, t, i, s),
          );
        }
        submitDirectBatchCutout(e, t) {
          let i = this.directBatchCutoutIdentity(e),
            s = this.directBatchCutoutSubmissions.get(i);
          if (s) return s;
          let n = new AbortController();
          this.directBatchCutoutControllers.add(n);
          let o = this.abortOnSubmissionEditUnavailable(n),
            r = (s) => {
              let o = this.rejectSubmissionWriteIfUnavailable(e.sessionId, n);
              if (o) return Promise.resolve(o);
              let r = this.directBatchCutoutAttempts.get(i);
              return r
                ? this.executeBatchAttempt(r, n, s)
                : this.executeBatchCutoutSubmission(e, t, n, s);
            },
            a = (
              this.dependencies.operations
                ? this.dependencies.operations.run(
                    "submitImagePostEdit",
                    {
                      fields: {
                        itemCount: e.sources.length,
                        relatedId: e.sessionId,
                        subjectType: e.mode,
                      },
                      mode: "async",
                      signal: n.signal,
                    },
                    r,
                  )
                : r()
            )
              .catch((t) => {
                let i = this.rejectSubmissionWriteIfUnavailable(e.sessionId, n);
                if (i) return i;
                if (n.signal.aborted || (0, e$.vh)(t)) return tT();
                throw t;
              })
              .finally(() => {
                var e;
                this.directBatchCutoutSubmissions.delete(i);
                let t = this.directBatchCutoutAttempts.get(i);
                (((null == t || null == (e = t.recovery)
                  ? void 0
                  : e.uncertain.size) &&
                  !n.signal.aborted) ||
                  this.directBatchCutoutAttempts.delete(i),
                  o(),
                  this.dispatchedSubmissionControllers.delete(n),
                  this.directBatchCutoutControllers.delete(n));
              });
          return (this.directBatchCutoutSubmissions.set(i, a), a);
        }
        directBatchCutoutIdentity(e) {
          return JSON.stringify([
            this.dependencies.getProjectId(),
            this.dependencies.getDraftId(),
            e.sources.map((e) => [e.nodeId, e.resourceId]),
          ]);
        }
        executeBatchCutoutSubmission(e, t, i, s) {
          if (
            t.sourceResourceIds.length !== e.sources.length ||
            t.sourceResourceIds.some((t, i) => {
              var s;
              return t !== (null == (s = e.sources[i]) ? void 0 : s.resourceId);
            })
          )
            return Promise.resolve({
              message: "Batch Cutout sources do not match the frozen session.",
              ok: !1,
              reason: "commandFailed",
            });
          if (!this.batchCutoutPreparation)
            return Promise.resolve({
              message: "Batch Cutout preparation is unavailable.",
              ok: !1,
              reason: "commandFailed",
            });
          let n = this.batchCutoutPreparation;
          return (async () => {
            tP(this.dependencies);
            let t = () =>
                n.prepare(
                  { sessionId: e.sessionId, sources: e.sources },
                  { signal: i.signal },
                ),
              o = s
                ? await s.runChild(
                    "prepareBatchCutout",
                    {
                      fields: {
                        itemCount: e.sources.length,
                        subjectType: "cutout",
                      },
                      mode: "async",
                      signal: i.signal,
                    },
                    t,
                  )
                : await t(),
              r = this.rejectSubmissionWriteIfUnavailable(e.sessionId, i);
            return (
              r ||
              (i.signal.aborted
                ? tT()
                : this.submitPreparedBatchCutout(e, o, i, s))
            );
          })();
        }
        submitPreparedBatchCutout(e, t, i, s) {
          if (0 === t.prepared.length) {
            let t = "Batch Cutout did not prepare any source for submission.";
            return (
              this.publishSubmissionFailure(e.sessionId, t),
              Promise.resolve({ message: t, ok: !1, reason: "commandFailed" })
            );
          }
          return this.executeBatchCommercialSubmission(
            e,
            t.prepared.map(() => (0, eC.J)({ type: "cutout" })),
            i,
            s,
            (n) => {
              let o = this.rejectSubmissionWriteIfUnavailable(e.sessionId, i);
              if (o) return Promise.resolve(o);
              if (n.length !== t.prepared.length)
                throw Error(
                  "Batch Cutout commerce authorization count does not match prepared source count.",
                );
              let r = this.prepareBatchAttempt(
                e,
                JSON.stringify([
                  "batch-cutout",
                  t.prepared.map((e) => [
                    e.source.nodeId,
                    e.source.resourceId,
                    e.asset.storageKey,
                  ]),
                ]),
                t.prepared.map((e, t) => {
                  let { asset: i, source: s } = e;
                  return {
                    benefitType: tx(
                      n,
                      t,
                      "Batch Cutout commerce context is missing.",
                    ).selection.benefitType,
                    imageParams: tA(s, i.storageKey),
                    source: s,
                  };
                }),
              );
              return (
                this.directBatchCutoutControllers.has(i)
                  ? this.directBatchCutoutAttempts.set(
                      this.directBatchCutoutIdentity(e),
                      r,
                    )
                  : this.activateAttempt(r),
                this.executeBatchAttempt(r, i, s)
              );
            },
          );
        }
        submitMaskPostEdit(e, t) {
          return this.recognitionAttempt
            ? Promise.resolve({
                message: `Finish ${tQ(t.type)} recognition before submitting.`,
                ok: !1,
                reason: "commandFailed",
              })
            : this.startSubmission(e, e.sessionId, 1, (i, s) =>
                this.executeCommercialSubmission(e, tR(t), i, s, (n) =>
                  this.prepareAndExecuteMaskPostEdit(
                    e,
                    t,
                    n.selection.benefitType,
                    i,
                    s,
                  ),
                ),
              );
        }
        async prepareAndExecuteMaskPostEdit(e, t, i, s, n) {
          let o = tQ(t.type);
          try {
            var r, a, l, d, u, c, h;
            let p = this.rejectMaskSubmissionWriteIfUnavailable(e.sessionId, s);
            if (p) return p;
            (tP(this.dependencies),
              (r = e),
              (a = t),
              "cutout" === a.type
                ? (function (e, t) {
                    var i;
                    if ("cutout" !== e.mode || "single" !== e.selectionKind)
                      throw Error(
                        "Cutout submission requires one active Cutout source.",
                      );
                    let s = e.sources[0];
                    if (!s || !tY(s, t.source))
                      throw Error(
                        "Cutout intent source must match the active image post-edit session.",
                      );
                    if (
                      (null == (i = e.cutout) ? void 0 : i.status) !==
                        "ready" ||
                      e.cutout.documentIdentity !== t.documentIdentity ||
                      e.cutout.document.revision !== t.document.revision
                    )
                      throw Error(
                        "Cutout intent must use the current recognized mask document.",
                      );
                    if (
                      (tz(t.document, s, void 0),
                      t.revision !== t.document.revision ||
                        t.modified !== t.document.strokes.length > 0)
                    )
                      throw Error(
                        "Cutout intent metadata must match its mask document.",
                      );
                  })(r, a)
                : (function (e, t) {
                    if (
                      "inpainting-remove" !== e.mode ||
                      "single" !== e.selectionKind
                    )
                      throw Error(
                        "InpaintingRemove submission requires one active source.",
                      );
                    let i = e.sources[0];
                    if (!i || !tY(i, t.source))
                      throw Error(
                        "InpaintingRemove intent source must match the active image post-edit session.",
                      );
                    if (
                      !e.inpaintingRemove ||
                      e.inpaintingRemove.documentIdentity !==
                        t.documentIdentity ||
                      e.inpaintingRemove.document.revision !==
                        t.document.revision
                    )
                      throw Error(
                        "InpaintingRemove intent must use the current mask document.",
                      );
                    tz(t.document, i, void 0);
                  })(r, a));
            let m = this.getMaskAssetAdapter(t.type),
              f =
                ((l = t),
                (d = m),
                JSON.stringify([
                  l.type,
                  d.identity,
                  d.outputKind,
                  l.documentIdentity,
                  ...("cutout" === l.type ? [l.revision, l.modified] : []),
                  l.document.revision,
                  l.document.initialMask.kind,
                  ((u = l.document),
                  "remote" === u.initialMask.kind
                    ? u.initialMask.uri
                    : u.initialMask.kind),
                  l.source.nodeId,
                  l.source.resourceId,
                  l.source.imageUri,
                  l.source.displayUrl,
                  l.source.pixelSourceUrl,
                  l.source.width,
                  l.source.height,
                ])),
              b = this.attempt;
            if (
              (null == b ? void 0 : b.kind) === "single" &&
              b.inputSignature === f
            )
              return this.executeAttempt(b, s, n);
            if (
              (b && this.discardPreparedAttempt(), !this.maskAssetPreparation)
            )
              throw Error(`${o} asset upload service is unavailable.`);
            let g = {
                adapter: m,
                document: t.document,
                documentIdentity: t.documentIdentity,
                sessionId: e.sessionId,
                source: t.source,
              },
              v = this.maskAssetPreparation.getSnapshot(),
              I = null;
            "failed" === v.status &&
              ((c = v.attemptIdentity),
              (h = g),
              c.adapterIdentity === h.adapter.identity &&
                c.documentIdentity === h.documentIdentity &&
                c.outputKind === h.adapter.outputKind &&
                c.documentRevision === h.document.revision &&
                c.sessionId === h.sessionId &&
                c.source.height === h.source.height &&
                c.source.imageUri === h.source.imageUri &&
                c.source.nodeId === h.source.nodeId &&
                c.source.resourceId === h.source.resourceId &&
                c.source.width === h.source.width) &&
              (I = this.maskAssetPreparation.retryIfFailed({
                signal: s.signal,
              }));
            let S = await (I ??
              this.maskAssetPreparation.prepare(g, { signal: s.signal }));
            if (!S.ok) {
              if ("failed" === S.reason) throw S.error;
              let t = this.rejectMaskSubmissionWriteIfUnavailable(
                e.sessionId,
                s,
              );
              if (t) return t;
              return {
                message: `${o} asset preparation was canceled.`,
                ok: !1,
                reason: "canceled",
              };
            }
            if (
              s.signal.aborted ||
              "active" !== this.snapshot.status ||
              this.snapshot.sessionId !== e.sessionId
            )
              return {
                message: `${o} submission was canceled.`,
                ok: !1,
                reason: "canceled",
              };
            let y = this.rejectMaskSubmissionWriteIfUnavailable(e.sessionId, s);
            if (y) return y;
            let E = this.prepareMaskPostEditAttempt(
              e,
              t,
              f,
              S.asset.storageKey,
              i,
            );
            return (this.activateAttempt(E), this.executeAttempt(E, s, n));
          } catch (r) {
            let t = this.rejectMaskSubmissionWriteIfUnavailable(e.sessionId, s);
            if (t) return t;
            if (s.signal.aborted || tH(r))
              return {
                message: `${o} submission was canceled.`,
                ok: !1,
                reason: "canceled",
              };
            let i = tL(r);
            return (
              this.publishFailure(n, r, e.sessionId, i),
              { message: i, ok: !1, reason: "commandFailed" }
            );
          }
        }
        prepareMaskPostEditAttempt(e, t, i, s, n) {
          let o = e.sources[0],
            r = tQ(t.type);
          if (!o) throw Error(`${r} source image is missing.`);
          let a = tM(
              this.dependencies.getProjectId(),
              "Image post-edit project id is missing.",
            ),
            l = (this.dependencies.createNodeId ?? d.XG)(),
            u = (this.dependencies.createResourceId ?? d.ve)(),
            c = (this.dependencies.createSubmitId ?? d.pf)(),
            h = tw({
              benefitType: n,
              imageParams:
                "cutout" === t.type
                  ? tA(o, s)
                  : {
                      materials: [
                        { image_uri: o.imageUri, role: 4, type: 2 },
                        {
                          image_uri: tM(s, `${r} mask storage key is missing.`),
                          role: 6,
                          type: 2,
                        },
                      ],
                      mode: 8,
                      model_name: "seedream_5.0_lite",
                      prompt: "",
                      resolution: "2K",
                    },
              nodeId: l,
              projectId: a,
              resourceId: u,
              source: o,
              submitId: c,
            });
          return (
            this.beginResultPresentation(c),
            {
              inputSignature: i,
              items: Object.freeze([{ nodeId: l, resourceId: u, source: o }]),
              kind: "single",
              nodeId: l,
              request: h,
              resourceId: u,
              sessionId: e.sessionId,
              state: "prepared",
              submitId: c,
            }
          );
        }
        getMaskAssetAdapter(e) {
          return "cutout" === e
            ? this.cutoutAssetAdapter
            : this.inpaintingRemoveAssetAdapter;
        }
        abortOnSubmissionEditUnavailable(e) {
          let t = () => {
              if (this.dispatchedSubmissionControllers.has(e)) return;
              let t = t_(this.dependencies);
              t && (this.submissionWriteFailures.set(e, t), e.abort());
            },
            i = this.dependencies.subscribeEditAvailability(t);
          return (t(), i);
        }
        rejectSubmissionWriteIfUnavailable(e, t) {
          var i;
          let s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = this.readSubmissionWriteFailure(t);
          return n
            ? (s.resetMaskAsset &&
                (null == (i = this.maskAssetPreparation) || i.reset()),
              this.publishSubmissionState(e, tb),
              { ...n, ok: !1 })
            : null;
        }
        readSubmissionWriteFailure(e) {
          let t = this.submissionWriteFailures.get(e);
          return (
            t ||
            (this.dispatchedSubmissionControllers.has(e)
              ? null
              : t_(this.dependencies))
          );
        }
        rejectMaskSubmissionWriteIfUnavailable(e, t) {
          return this.rejectSubmissionWriteIfUnavailable(e, t, {
            resetMaskAsset: !0,
          });
        }
        async executeAttempt(e, t, i) {
          let s = this.rejectAttemptDispatchIfUnavailable(e, t);
          return s || this.executeSingleAttempt(e, t, i);
        }
        async executeBatchAttempt(e, t, i) {
          var s, n, o, r, a;
          try {
            let r = this.rejectAttemptDispatchIfUnavailable(e, t);
            if (r) return r;
            if (t.signal.aborted) return this.finishCanceledAttempt(e);
            if (!e.recovery) {
              e.recovery = {
                accepted: new Set(),
                tracked: new Set(),
                uncertain: new Set(e.items.map((e) => e.resourceId)),
              };
              try {
                let s = () => this.dispatchAttempt(e, t),
                  n = i
                    ? await i.runChild(
                        "dispatchBatchImagePostEdit",
                        {
                          fields: {
                            itemCount: e.items.length,
                            relatedId: e.submitId,
                            subjectType: "image-post-edit",
                          },
                          mode: "async",
                          signal: t.signal,
                        },
                        s,
                      )
                    : await s(),
                  o = (0, eQ.lK)(n);
                for (let t of "acceptedResourceIds" in o
                  ? o.acceptedResourceIds
                  : [])
                  e.recovery.uncertain.delete(t) && e.recovery.accepted.add(t);
                for (let t of "failedItems" in o ? o.failedItems : [])
                  e.recovery.uncertain.delete(t.resourceId);
              } catch (s) {
                let i = this.rejectAttemptDispatchIfUnavailable(e, t);
                if (i) return i;
                if (t.signal.aborted || tH(s))
                  return this.finishCanceledAttempt(e);
                e.recovery.cause = s;
              }
            }
            if (t.signal.aborted) return this.finishCanceledAttempt(e);
            let a = e.recovery,
              l = () => {
                for (let e of a.accepted)
                  a.tracked.has(e) ||
                    (this.dependencies.trackSubmittedResource(e),
                    a.tracked.add(e));
                this.dependencies.commerceRefreshCoordinator.register({
                  submitId: e.submitId,
                  acceptedResourceIds: [...a.accepted],
                  recoveryState: a.uncertain.size ? "pending" : "complete",
                });
              };
            if ((l(), a.uncertain.size)) {
              let s = e.items
                .filter((e) => a.uncertain.has(e.resourceId))
                .map((e) => ({
                  item: e,
                  arrival: tD(
                    this.dependencies,
                    e.nodeId,
                    e.resourceId,
                    t.signal,
                    this.dependencies.reconciliationDeadlineMs ?? 15e3,
                  ),
                }));
              try {
                await Promise.all(
                  s.map(async (e) => {
                    let { item: t, arrival: i } = e;
                    (await i.promise) === "arrived" &&
                      (a.uncertain.delete(t.resourceId),
                      a.accepted.add(t.resourceId));
                  }),
                );
              } finally {
                for (let { arrival: e } of s) e.cancel();
              }
              let n = this.rejectAttemptDispatchIfUnavailable(e, t);
              if (n) return n;
              if (t.signal.aborted) return this.finishCanceledAttempt(e);
              if ((l(), a.uncertain.size)) {
                let t = "Submission state is still being confirmed.";
                return (
                  this.publishFailure(i, tU(a.cause), e.sessionId, t),
                  { message: t, ok: !1, reason: "ambiguous" }
                );
              }
            }
            let d = e.items.filter((e) => a.accepted.has(e.resourceId));
            if (0 === d.length) {
              this.discardAttemptPresentation(e);
              let t = Error("Batch image post-edit generation was rejected.");
              return (
                this.publishFailure(i, t, e.sessionId, t.message),
                { message: t.message, ok: !1, reason: "commandFailed" }
              );
            }
            return (
              this.resultPresentation.settle(
                e.submitId,
                d.map((e) => ({ nodeId: e.nodeId, resourceId: e.resourceId })),
              ),
              this.finishAcceptedAttempt(e),
              {
                ok: !0,
                ...((
                  null == (o = e.request.post_edit) ||
                  null == (n = o.items[0]) ||
                  null == (s = n.item.params.image_params)
                    ? void 0
                    : s.target_size
                )
                  ? { nodeId: d[0].nodeId, resourceId: d[0].resourceId }
                  : {}),
                submittedNodeIds: d.map((e) => e.source.nodeId),
                submitId: e.submitId,
              }
            );
          } catch (o) {
            let s = this.rejectAttemptDispatchIfUnavailable(e, t);
            if (s) return s;
            if (t.signal.aborted || tH(o)) return this.finishCanceledAttempt(e);
            if (null == (r = e.recovery) ? void 0 : r.uncertain.size) {
              let t = "Submission state is still being confirmed.";
              return (
                this.publishFailure(i, o, e.sessionId, t),
                { message: t, ok: !1, reason: "ambiguous" }
              );
            }
            (null == (a = e.history) || a.reject(eF.OH.MATRIX_ERROR),
              this.discardAttemptPresentation(e));
            let n = tL(o);
            return (
              this.publishFailure(i, o, e.sessionId, n),
              { message: n, ok: !1, reason: "commandFailed" }
            );
          }
        }
        rejectAttemptDispatchIfUnavailable(e, t) {
          let i = this.rejectSubmissionWriteIfUnavailable(e.sessionId, t, {
            resetMaskAsset: !0,
          });
          return i ? (this.discardAttemptPresentation(e), i) : null;
        }
        async executeSingleAttempt(e, t, i) {
          var s, o, r, a;
          let l,
            { signal: d } = t,
            u = this.detachedSubmissionControllers.has(t);
          u || null == (s = this.nodeArrivalCancel) || s.call(this);
          let c = this.waitForAttemptNode(e, d);
          u || (this.nodeArrivalCancel = c.cancel);
          try {
            let s = this.rejectAttemptDispatchIfUnavailable(e, t);
            if (s) return s;
            if ("prepared" === e.state) {
              e.state = "ambiguous";
              try {
                let s = await this.dispatchAttempt(e, t),
                  n = (0, eQ.lK)(s),
                  o =
                    "acceptedResourceIds" in n &&
                    n.acceptedResourceIds.includes(e.resourceId),
                  r =
                    "ambiguous" === n.status &&
                    n.ambiguousResourceIds.includes(e.resourceId);
                if (
                  "failedItems" in n &&
                  n.failedItems.some((t) => t.resourceId === e.resourceId)
                ) {
                  this.discardAttemptPresentation(e);
                  let t = Error("Image post-edit generation was rejected.");
                  return (
                    this.publishFailure(i, t, e.sessionId, t.message),
                    { message: t.message, ok: !1, reason: "commandFailed" }
                  );
                }
                o ||
                  (l = Error(
                    r
                      ? "Image post-edit generation state is unknown."
                      : "Image post-edit generation response did not identify the requested resource.",
                  ));
              } catch (r) {
                let s = this.rejectAttemptDispatchIfUnavailable(e, t);
                if (s) return s;
                if (d.aborted) return this.finishCanceledAttempt(e);
                let n = (0, eX.fG)(r);
                if (
                  n &&
                  !tN(
                    this.dependencies.getObjectSnapshot(e.nodeId),
                    e.resourceId,
                  )
                ) {
                  (null == (o = e.history) ||
                    o.reject(
                      "rejected" === n
                        ? eF.OH.RISK_CONTROL_REJECTED
                        : eF.OH.RISK_CONTROL_TOO_FREQUENT,
                    ),
                    this.discardAttemptPresentation(e));
                  let t = (0, eR.Qv)();
                  return (
                    this.publishFailure(i, r, e.sessionId, t),
                    { message: t, ok: !1, reason: "commandFailed" }
                  );
                }
                l = r;
              }
            }
            let u = await c.promise;
            if ("aborted" === u) return this.finishCanceledAttempt(e);
            if ("deadline" === u && this.dependencies.loadResourceStatesByIds) {
              let t = await this.dependencies.loadResourceStatesByIds(
                e.request.project_id,
                [e.resourceId],
                { signal: d, traceId: e.submitId },
              );
              if (d.aborted) return this.finishCanceledAttempt(e);
              if (
                tN(this.dependencies.getObjectSnapshot(e.nodeId), e.resourceId)
              )
                u = "arrived";
              else if (
                t.some(
                  (t) =>
                    !("kind" in t) &&
                    t.resource_id === e.resourceId &&
                    t.status === n.ao.failed,
                )
              ) {
                (null == (r = e.history) || r.reject(eF.OH.MATRIX_ERROR),
                  this.discardAttemptPresentation(e));
                let t = (0, eR.Qv)();
                return (
                  this.publishSubmissionFailure(e.sessionId, t),
                  { message: t, ok: !1, reason: "commandFailed" }
                );
              }
            }
            if ("deadline" === u) {
              let t = tU(l),
                s = "Submission state is still being confirmed.";
              return (
                this.publishFailure(i, t, e.sessionId, s),
                { message: s, ok: !1, reason: "ambiguous" }
              );
            }
            return (
              this.registerAcceptedAttempt(e, [e.resourceId]),
              this.settleAttemptHistory(e, [e.resourceId]),
              this.resultPresentation.settle(e.submitId, [
                { nodeId: e.nodeId, resourceId: e.resourceId },
              ]),
              this.finishAcceptedAttempt(e),
              (a = e),
              {
                ok: !0,
                nodeId: a.nodeId,
                resourceId: a.resourceId,
                submitId: a.submitId,
              }
            );
          } catch (r) {
            let s = this.rejectAttemptDispatchIfUnavailable(e, t);
            if (s) return s;
            if (d.aborted) return this.finishCanceledAttempt(e);
            let n = "ambiguous" === e.state;
            n || this.discardAttemptPresentation(e);
            let o = n ? "Submission state is still being confirmed." : tL(r);
            return (
              this.publishFailure(i, r, e.sessionId, o),
              { message: o, ok: !1, reason: n ? "ambiguous" : "commandFailed" }
            );
          } finally {
            (c.cancel(),
              u ||
                this.nodeArrivalCancel !== c.cancel ||
                (this.nodeArrivalCancel = null));
          }
        }
        waitForAttemptNode(e, t) {
          return tD(
            this.dependencies,
            e.nodeId,
            e.resourceId,
            t,
            this.dependencies.reconciliationDeadlineMs ?? 15e3,
          );
        }
        async dispatchAttempt(e, t) {
          t.signal.throwIfAborted();
          let i = this.consumptionBySubmission.get(t),
            { options: n, dispose: o } = i
              ? (0, s.pt)(i, t.signal)
              : { options: { signal: t.signal }, dispose: () => {} };
          try {
            let s = JSON.stringify(
              (null == i ? void 0 : i.consumption) ?? null,
            );
            if (void 0 !== e.consumptionKey && e.consumptionKey !== s)
              throw Error(
                "The original post-edit attempt belongs to another consumption context",
              );
            ((e.consumptionKey = s),
              this.dispatchedSubmissionControllers.add(t));
            let o = e.items[0];
            if (!o)
              throw Error(
                "Image post-edit attempt requires at least one item.",
              );
            return await (0, h.Ud)({
              generationHistorySubmissionPort:
                this.dependencies.generationHistorySubmissionPort,
              mediaType: "image",
              modelName: (0, h.vN)(e.request),
              name: (0, h.nA)(e.request),
              nodeId: "single" === e.kind ? e.nodeId : o.nodeId,
              onRegistered: (t) => {
                e.history = t;
              },
              resourceIds: e.items.map((e) => e.resourceId),
              submitId: e.submitId,
              generate: () =>
                this.dependencies.generator.nodeGenerate(e.request, {
                  ...n,
                  traceId: e.submitId,
                }),
            });
          } finally {
            o();
          }
        }
        activateAttempt(e) {
          return ((this.attempt = e), e);
        }
        discardAttempt(e) {
          this.attempt === e && (this.attempt = null);
        }
        discardAttemptPresentation(e) {
          (this.discardAttempt(e), this.resultPresentation.cancel(e.submitId));
        }
        finishCanceledAttempt(e) {
          return (
            (0, h.XQ)(e.history),
            this.discardAttemptPresentation(e),
            tT()
          );
        }
        settleAttemptHistory(e, t) {
          var i;
          null == (i = e.history) || i.settle((0, h.Vy)(t));
        }
        registerAcceptedAttempt(e, t) {
          for (let e of t) this.dependencies.trackSubmittedResource(e);
          this.dependencies.commerceRefreshCoordinator.register({
            acceptedResourceIds: t,
            recoveryState: "complete",
            submitId: e.submitId,
          });
        }
        cancelActiveAttempt() {
          var e, t, i, s;
          let n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "superseded",
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          (this.attempt && (0, h.XQ)(this.attempt.history),
            null == (e = this.preparationAbortController) || e.abort(),
            (this.preparationAbortController = null),
            null == (t = this.abortController) || t.abort(),
            (this.abortController = null),
            null == (i = this.nodeArrivalCancel) || i.call(this),
            (this.nodeArrivalCancel = null),
            (this.attempt = null),
            (this.pendingSubmission = null),
            null == (s = this.maskAssetPreparation) || s.reset(),
            this.invalidateRecognition(n),
            this.releaseQuickSelectCandidates(),
            o || this.resultPresentation.cancel());
        }
        detachSubmittedSmartEdit(e) {
          var t;
          let i = this.abortController,
            s = this.attempt;
          return (
            "smart-edit" === e.mode &&
            !!i &&
            !!this.pendingSubmission &&
            (null === s || s.sessionId === e.sessionId) &&
            (this.detachedSubmissionControllers.add(i),
            (this.abortController = null),
            (this.nodeArrivalCancel = null),
            this.attempt === s && (this.attempt = null),
            (this.pendingSubmission = null),
            null == (t = this.maskAssetPreparation) || t.reset(),
            this.releaseQuickSelectCandidates(),
            s && this.resultPresentation.cancel(s.submitId),
            !0)
          );
        }
        invalidateRecognition(e) {
          let t = this.recognitionAttempt;
          t &&
            !t.invalidation &&
            ((t.invalidation = e),
            t.controller.abort(),
            (this.recognitionAttempt = null));
        }
        isCurrentRecognition(e) {
          return (
            this.recognitionAttempt === e &&
            !e.invalidation &&
            "active" === this.snapshot.status &&
            this.snapshot.sessionId === e.sessionId &&
            this.snapshot.mode === e.mode
          );
        }
        releaseQuickSelectCandidates() {
          var e, t;
          "active" === this.snapshot.status &&
            "composition" !== this.snapshot.mode &&
            "annotation" !== this.snapshot.mode &&
            ((null == (e = this.snapshot.cutout) ? void 0 : e.status) ===
              "ready" &&
              "selecting" === this.snapshot.cutout.recognition.status &&
              this.snapshot.cutout.recognition.candidates.dispose(),
            (null == (t = this.snapshot.inpaintingRemove)
              ? void 0
              : t.quickSelect.status) === "selecting" &&
              this.snapshot.inpaintingRemove.quickSelect.candidates.dispose());
        }
        acceptRecognitionOutput(e, t, i, s) {
          var n, o;
          let r = this.snapshot;
          if (
            "active" !== r.status ||
            r.mode !== t ||
            r.sessionId !== e.sessionId
          )
            return void tB(s);
          if ("inpainting-remove" === t) {
            if ("quick-select" !== s.action || !i || !r.inpaintingRemove)
              throw (
                tB(s),
                Error(
                  "Quick Select requires a ready InpaintingRemove document.",
                )
              );
            this.snapshot = Object.freeze({
              ...r,
              inpaintingRemove: Object.freeze({
                ...r.inpaintingRemove,
                quickSelect: Object.freeze({
                  candidates: s.candidates,
                  status: "selecting",
                }),
              }),
            });
            return;
          }
          if ("initial" === s.action) {
            this.documentMutationSequence += 1;
            let e =
              i && (null == (o = r.cutout) ? void 0 : o.status) === "ready"
                ? r.cutout.editorResetEpoch + 1
                : 1;
            this.snapshot = Object.freeze({
              ...r,
              cutout: Object.freeze({
                document: tq(s.document),
                documentIdentity: t$(
                  r.sessionId,
                  this.documentMutationSequence,
                ),
                editorResetEpoch: e,
                recognition: Object.freeze({ status: "idle" }),
                status: "ready",
              }),
            });
            return;
          }
          if (!i || (null == (n = r.cutout) ? void 0 : n.status) !== "ready")
            throw (
              tB(s),
              Error("Quick Select requires a ready Cutout document.")
            );
          this.snapshot = Object.freeze({
            ...r,
            cutout: Object.freeze({
              ...r.cutout,
              recognition: Object.freeze({
                action: "quick-select",
                candidates: s.candidates,
                status: "selecting",
              }),
            }),
          });
        }
        publishRecognitionFailure(e, t, i, s, n) {
          var o;
          let r = this.snapshot;
          if (
            "active" === r.status &&
            r.mode === t &&
            r.sessionId === e.sessionId
          ) {
            if ("inpainting-remove" === t) {
              if (!r.inpaintingRemove) return;
              ((this.snapshot = Object.freeze({
                ...r,
                inpaintingRemove: Object.freeze({
                  ...r.inpaintingRemove,
                  quickSelect: Object.freeze({ reason: n, status: "failed" }),
                }),
              })),
                this.notify());
              return;
            }
            ((this.snapshot = Object.freeze({
              ...r,
              cutout:
                s && (null == (o = r.cutout) ? void 0 : o.status) === "ready"
                  ? Object.freeze({
                      ...r.cutout,
                      recognition: Object.freeze({
                        action: i,
                        reason: n,
                        status: "failed",
                      }),
                    })
                  : Object.freeze({ reason: n, status: "failed" }),
            })),
              this.notify());
          }
        }
        publishRecognitionProgress(e, t, i, s) {
          var n;
          let o = this.snapshot;
          if (
            "active" === o.status &&
            o.mode === t &&
            o.sessionId === e.sessionId
          ) {
            if ("inpainting-remove" === t) {
              if (!o.inpaintingRemove) return;
              ((this.snapshot = Object.freeze({
                ...o,
                inpaintingRemove: Object.freeze({
                  ...o.inpaintingRemove,
                  quickSelect: Object.freeze({ status: "recognizing" }),
                }),
              })),
                this.notify());
              return;
            }
            ((this.snapshot = Object.freeze({
              ...o,
              cutout:
                s && (null == (n = o.cutout) ? void 0 : n.status) === "ready"
                  ? Object.freeze({
                      ...o.cutout,
                      recognition: Object.freeze({
                        action: i,
                        status: "recognizing",
                      }),
                    })
                  : Object.freeze({ action: i, status: "recognizing" }),
            })),
              this.notify());
          }
        }
        finishAcceptedAttempt(e) {
          var t, i, s;
          "active" !== this.snapshot.status ||
            this.snapshot.sessionId !== e.sessionId ||
            (this.attempt && this.attempt !== e) ||
            (null == (t = this.nodeArrivalCancel) || t.call(this),
            (this.nodeArrivalCancel = null),
            this.discardAttempt(e),
            "product-replacement" === this.snapshot.mode &&
              (null == (i = this.productReplacement) || i.close()),
            this.releaseQuickSelectCandidates(),
            this.releaseSessionTransientState(),
            null == (s = this.maskAssetPreparation) || s.reset(),
            (this.snapshot = tf),
            this.notify());
        }
        publishSubmissionFailure(e, t, i) {
          var s, n;
          let o;
          this.publishSubmissionState(
            e,
            ((s = t),
            (n = i),
            (o = { message: s, status: "failed" }),
            n ? { ...o, failureReason: n } : o),
          );
        }
        publishFailure(e, t, i, s) {
          let n = (0, eX.fG)(t) ?? void 0;
          e
            ? e.fail(t, () => this.publishSubmissionFailure(i, s, n))
            : this.publishSubmissionFailure(i, s, n);
        }
        publishSubmissionState(e, t) {
          "active" === this.snapshot.status &&
            this.snapshot.sessionId === e &&
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              submission: t,
            })),
            this.notify());
        }
        focusActiveSource() {
          var e;
          this.cancelFocusPresentation();
          let t = this.snapshot;
          if ("active" !== t.status || "single" !== t.selectionKind)
            return Promise.resolve();
          let i = (0, e3.J)(t)
            ? t.intent.sourceNodeId
            : 1 === t.sources.length
              ? null == (e = t.sources[0])
                ? void 0
                : e.nodeId
              : void 0;
          if (!i) return Promise.resolve();
          let s = (0, e3.J)(t)
              ? void 0
              : 1 === t.sources.length
                ? t.sources[0]
                : void 0,
            n = (function (e, t, i) {
              if (
                (function (e) {
                  switch (e) {
                    case "annotation":
                    case "composition":
                    case "cutout":
                    case "inpainting-remove":
                    case "smart-edit":
                    case "view-control":
                    case "product-replacement":
                    case "panorama":
                    case "multi-size":
                    case "lighting":
                    case "layer-decompose":
                      return !0;
                    case "image-hd":
                    case "outpaint":
                      return !1;
                  }
                })(e)
              )
                return {
                  kind: "nodes",
                  nodeIds: [t],
                  attachedInsets: e4,
                  nodeChromeInsets: e5,
                  ...("product-replacement" === e && i && i.height > i.width
                    ? { preferredMinimumNodeScreenWidth: 180 }
                    : {}),
                };
            })(t.mode, i, s);
          if (!n) return Promise.resolve();
          let o = (0, a.FX)(this.dependencies.viewport);
          this.focusPresentation = o;
          let r =
            "layer-decompose" === t.mode &&
            "pending" === t.initialViewportPresentation;
          return o.present(n).then(() => {
            if (!r || this.focusPresentation !== o) return;
            let e = this.snapshot;
            "active" !== e.status ||
              e.sessionId !== t.sessionId ||
              ("pending" === e.initialViewportPresentation &&
                ((this.snapshot = Object.freeze({
                  ...e,
                  initialViewportPresentation: "settled",
                })),
                this.notify()));
          });
        }
        cancelFocusPresentation() {
          var e;
          (null == (e = this.focusPresentation) || e.cancel(),
            (this.focusPresentation = null));
        }
        beginResultPresentation(e) {
          (this.cancelFocusPresentation(), this.resultPresentation.begin(e));
        }
        constructor(e) {
          var t = this;
          if (
            ((this.lightingEditorMemory = new ez.d()),
            (this.abortController = null),
            (this.attempt = null),
            (this.directBatchCutoutControllers = new Set()),
            (this.directBatchCutoutAttempts = new Map()),
            (this.directBatchCutoutSubmissions = new Map()),
            (this.detachedSubmissionControllers = new Set()),
            (this.consumptionBySubmission = new WeakMap()),
            (this.dispatchedSubmissionControllers = new WeakSet()),
            (this.submissionWriteFailures = new WeakMap()),
            (this.documentMutationSequence = 0),
            (this.environmentStops = []),
            (this.gestureCleanup = null),
            (this.listeners = new Set()),
            (this.viewRestoreSnapshot = null),
            (this.disposed = !1),
            (this.focusPresentation = null),
            (this.nodeArrivalCancel = null),
            (this.pendingCompositionSubmission = null),
            (this.pendingSubmission = null),
            (this.preparationAbortController = null),
            (this.recognitionAttempt = null),
            (this.recognitionSequence = 0),
            (this.snapshot = tf),
            (this.annotation = {
              dispatch: (e, t) => {
                let i = this.snapshot;
                if (
                  "active" !== i.status ||
                  "annotation" !== i.mode ||
                  i.sessionId !== e ||
                  "submitting" === i.submission.status ||
                  !this.isCompositionEnvironmentCurrent(i) ||
                  !this.isCompositionSourceAvailable(i)
                )
                  return;
                let s = (0, eL.q1)(i.annotation, t);
                s !== i.annotation &&
                  ((this.snapshot = Object.freeze({
                    ...i,
                    annotation: s,
                    submission: tb,
                  })),
                  this.notify());
              },
              cancel: (e, t) => {
                "active" === this.snapshot.status &&
                  "annotation" === this.snapshot.mode &&
                  this.snapshot.sessionId === e &&
                  this.finishClose("cancel", { trigger: t });
              },
              submit: (e, t, i) => {
                var s;
                let n = this.snapshot;
                if (
                  "active" !== n.status ||
                  "annotation" !== n.mode ||
                  n.sessionId !== e
                )
                  return Promise.resolve({
                    ok: !1,
                    reason: "sessionUnavailable",
                  });
                let o =
                  (null == (s = n.annotation.draft.annotation)
                    ? void 0
                    : s.elements) ?? [];
                return 0 === o.length
                  ? Promise.resolve({ ok: !1, reason: "intentInvalid" })
                  : ((this.snapshot = Object.freeze({
                      ...n,
                      annotation: (0, eL.q1)(n.annotation, {
                        type: "select-element",
                      }),
                    })),
                    this.submitLocalImage(t, { elements: o, presentation: i }));
              },
            }),
            (this.cancelComposition = (e) => {
              (0, e3.J)(this.snapshot) &&
                this.finishClose("cancel", { trigger: e });
            }),
            (this.cancelCutoutRecognition = () => {
              var e;
              let t = this.snapshot;
              "active" === t.status &&
                "cutout" === t.mode &&
                (null == (e = t.cutout) ? void 0 : e.status) === "ready" &&
                "recognizing" === t.cutout.recognition.status &&
                (this.invalidateRecognition("canceled"),
                (this.snapshot = Object.freeze({
                  ...t,
                  cutout: Object.freeze({
                    ...t.cutout,
                    recognition: Object.freeze({ status: "idle" }),
                  }),
                })),
                this.notify());
            }),
            (this.cancelInpaintingRemoveRecognition = () => {
              var e;
              let t = this.snapshot;
              "active" === t.status &&
                "inpainting-remove" === t.mode &&
                (null == (e = t.inpaintingRemove)
                  ? void 0
                  : e.quickSelect.status) === "recognizing" &&
                (this.invalidateRecognition("canceled"),
                (this.snapshot = Object.freeze({
                  ...t,
                  inpaintingRemove: Object.freeze({
                    ...t.inpaintingRemove,
                    quickSelect: Object.freeze({ status: "idle" }),
                  }),
                })),
                this.notify());
            }),
            (this.close = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "cancel";
              t.finishClose(e);
            }),
            (this.dispose = () => {
              if (!this.disposed) {
                for (let e of ((this.disposed = !0),
                this.directBatchCutoutControllers))
                  e.abort();
                for (let e of (this.directBatchCutoutControllers.clear(),
                this.directBatchCutoutAttempts.clear(),
                this.directBatchCutoutSubmissions.clear(),
                this.detachedSubmissionControllers))
                  e.abort();
                (this.detachedSubmissionControllers.clear(),
                  this.close("supersede"),
                  this.resultPresentation.dispose(),
                  this.listeners.clear());
              }
            }),
            (this.readLightingEditorMemory = () =>
              this.lightingEditorMemory.read()),
            (this.writeLightingEditorMemory = (e) => {
              this.lightingEditorMemory.write(e);
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.open = (e) => {
              var t, i, s, n;
              let { focusOrigin: o, mode: r, nodeIds: a } = e;
              if (this.disposed)
                return {
                  code: "SESSION_DISPOSED",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (!(0, tr.F)(e, a, this.dependencies.getObjectSnapshot))
                return {
                  code: "SOURCE_CHANGED",
                  ok: !1,
                  reason: "sourceUnavailable",
                };
              if (
                "product-replacement" === r &&
                (!this.productReplacement ||
                  !(0, eG.ih)(this.dependencies.postEditCatalog))
              )
                return {
                  code: "PRODUCT_REPLACEMENT_UNAVAILABLE",
                  ok: !1,
                  reason: "featureNotReady",
                };
              if (
                "multi-size" === r &&
                !(0, eM.R)(this.dependencies.postEditCatalog)
              )
                return {
                  code: "MULTI_SIZE_UNAVAILABLE",
                  ok: !1,
                  reason: "featureNotReady",
                };
              if (
                "panorama" === r &&
                !(0, eK.u)(this.dependencies.postEditCatalog)
              )
                return {
                  code: "PANORAMA_UNAVAILABLE",
                  ok: !1,
                  reason: "featureNotReady",
                };
              if ("smart-edit" === r && !this.dependencies.smartEditEnabled)
                return {
                  code: "SMART_EDIT_EXPERIMENT_DISABLED",
                  message: "Smart Edit is not enabled.",
                  ok: !1,
                  reason: "experimentDisabled",
                };
              let l = t_(this.dependencies);
              if (l) return { ok: !1, reason: l.reason };
              if ((0, e3.m)(r)) {
                let e = this.openComposition(o, a, r);
                if (e.ok && "composition" === r) {
                  let e = { isBatchEdit: +(a.length > 1) };
                  for (let s of a)
                    null ==
                      (t = (i = this.dependencies).reportPostEditAction) ||
                      t.call(i, s, "composition", e);
                }
                return e;
              }
              if (0 === a.length)
                return {
                  code: "EMPTY_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (1 !== a.length)
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let d = this.openSourceSession({
                  mode: r,
                  nodeIds: a,
                  selectionKind: "single",
                }),
                u = tv(r);
              return (
                d.ok &&
                  a[0] &&
                  u &&
                  (null == (s = (n = this.dependencies).reportPostEditAction) ||
                    s.call(n, a[0], u, { isBatchEdit: 0 })),
                d
              );
            }),
            (this.openBatch = (e) => {
              let { mode: t, nodeIds: i } = e;
              if (this.disposed)
                return {
                  code: "SESSION_DISPOSED",
                  ok: !1,
                  reason: "commandFailed",
                };
              let s = t_(this.dependencies);
              if (s) return { ok: !1, reason: s.reason };
              if (0 === i.length)
                return {
                  code: "EMPTY_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (i.length < 2 || i.length > 20)
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let n = this.openSourceSession({
                  mode: t,
                  nodeIds: i,
                  selectionKind: "batch",
                }),
                o = tv(t);
              if (n.ok && o)
                for (let e of i) {
                  var r, a;
                  null == (r = (a = this.dependencies).reportPostEditAction) ||
                    r.call(a, e, o, { isBatchEdit: 1 });
                }
              return n;
            }),
            (this.registerCompositionGestureCleanup = (e) => {
              var t;
              return (0, e3.J)(this.snapshot)
                ? (null == (t = this.gestureCleanup) || t.call(this),
                  (this.gestureCleanup = e),
                  () => {
                    this.gestureCleanup === e && (this.gestureCleanup = null);
                  })
                : () => void 0;
            }),
            (this.submitComposition = (e) =>
              "active" !== this.snapshot.status ||
              "composition" !== this.snapshot.mode
                ? Promise.resolve({ ok: !1, reason: "sessionUnavailable" })
                : this.submitLocalImage(e)),
            (this.updateCompositionIntent = (e) => {
              if (t_(this.dependencies)) return;
              let t = this.snapshot;
              "active" !== t.status ||
                "composition" !== t.mode ||
                ((!e.normalizedCrop || (0, eY.$I)(e.normalizedCrop)) &&
                  ((this.snapshot = Object.freeze({
                    ...t,
                    intent: tK({ ...t.intent, ...e }),
                    submission: tb,
                  })),
                  this.notify()));
            }),
            (this.refocus = () => this.focusActiveSource()),
            (this.recognizeCutout = async (e) => {
              var t;
              let i = t_(this.dependencies);
              if (i) return { ...i, ok: !1 };
              let s = this.snapshot;
              if (
                "active" !== s.status ||
                "cutout" !== s.mode ||
                "single" !== s.selectionKind ||
                1 !== s.sources.length
              )
                return {
                  message: "A single-image Cutout session is required.",
                  ok: !1,
                  reason: "failed",
                };
              let n = s.sources[0];
              if (!n)
                return {
                  message: "Cutout source image is missing.",
                  ok: !1,
                  reason: "failed",
                };
              let o =
                (null == (t = s.cutout) ? void 0 : t.status) === "ready"
                  ? s.cutout.document
                  : void 0;
              return "quick-select" !== e || o
                ? this.runRecognition({
                    action: e,
                    currentDocument: o,
                    mode: "cutout",
                    session: s,
                    source: n,
                  })
                : {
                    message:
                      "Quick Select requires a recognized mask document.",
                    ok: !1,
                    reason: "failed",
                  };
            }),
            (this.recognizeInpaintingRemove = async () => {
              let e = t_(this.dependencies);
              if (e) return { ...e, ok: !1 };
              let t = this.snapshot;
              if (
                "active" !== t.status ||
                "inpainting-remove" !== t.mode ||
                "single" !== t.selectionKind ||
                1 !== t.sources.length ||
                !t.inpaintingRemove
              )
                return {
                  message:
                    "A single-image InpaintingRemove session is required.",
                  ok: !1,
                  reason: "failed",
                };
              let i = t.sources[0];
              return i
                ? this.runRecognition({
                    action: "quick-select",
                    currentDocument: t.inpaintingRemove.document,
                    mode: "inpainting-remove",
                    session: t,
                    source: i,
                  })
                : {
                    message: "InpaintingRemove source image is missing.",
                    ok: !1,
                    reason: "failed",
                  };
            }),
            (this.recordSmartEditExportFailure = () => {
              let e = this.snapshot,
                t = this.dependencies.operations;
              if ("active" !== e.status || "smart-edit" !== e.mode || !t)
                return;
              let i = new tG();
              try {
                t.run(
                  "exportSmartEditComposite",
                  {
                    fields: {
                      itemCount: 1,
                      relatedId: e.sessionId,
                      subjectType: e.mode,
                    },
                    mode: "sync",
                  },
                  () => {
                    throw i;
                  },
                );
              } catch (e) {
                if (e !== i) throw e;
              }
            }),
            (this.finishCutoutQuickSelect = () => {
              var e;
              let t = this.snapshot;
              "active" === t.status &&
                "cutout" === t.mode &&
                (null == (e = t.cutout) ? void 0 : e.status) === "ready" &&
                "selecting" === t.cutout.recognition.status &&
                (t.cutout.recognition.candidates.dispose(),
                (this.snapshot = Object.freeze({
                  ...t,
                  cutout: Object.freeze({
                    ...t.cutout,
                    recognition: Object.freeze({ status: "idle" }),
                  }),
                })),
                this.notify());
            }),
            (this.finishInpaintingRemoveQuickSelect = () => {
              var e;
              let t = this.snapshot;
              "active" === t.status &&
                "inpainting-remove" === t.mode &&
                (null == (e = t.inpaintingRemove)
                  ? void 0
                  : e.quickSelect.status) === "selecting" &&
                (t.inpaintingRemove.quickSelect.candidates.dispose(),
                (this.snapshot = Object.freeze({
                  ...t,
                  inpaintingRemove: Object.freeze({
                    ...t.inpaintingRemove,
                    quickSelect: Object.freeze({ status: "idle" }),
                  }),
                })),
                this.notify());
            }),
            (this.updateCutoutDocument = (e) => {
              var t;
              if (t_(this.dependencies)) return;
              let i = this.snapshot;
              if (
                "active" !== i.status ||
                "cutout" !== i.mode ||
                "single" !== i.selectionKind ||
                (null == (t = i.cutout) ? void 0 : t.status) !== "ready"
              )
                return;
              let s = i.sources[0];
              s &&
                (tz(e, s, i.cutout.document),
                this.invalidateRecognition("superseded"),
                (this.documentMutationSequence += 1),
                (this.snapshot = Object.freeze({
                  ...i,
                  cutout: Object.freeze({
                    ...i.cutout,
                    document: tq(e),
                    documentIdentity: t$(
                      i.sessionId,
                      this.documentMutationSequence,
                    ),
                    recognition:
                      "selecting" === i.cutout.recognition.status
                        ? i.cutout.recognition
                        : Object.freeze({ status: "idle" }),
                  }),
                })),
                this.notify());
            }),
            (this.updateInpaintingRemoveDocument = (e) => {
              if (t_(this.dependencies)) return;
              let t = this.snapshot;
              if (
                "active" !== t.status ||
                "inpainting-remove" !== t.mode ||
                "single" !== t.selectionKind ||
                !t.inpaintingRemove
              )
                return;
              let i = t.sources[0];
              i &&
                (tz(e, i, t.inpaintingRemove.document),
                this.invalidateRecognition("superseded"),
                (this.documentMutationSequence += 1),
                (this.snapshot = Object.freeze({
                  ...t,
                  inpaintingRemove: Object.freeze({
                    ...t.inpaintingRemove,
                    document: tq(e),
                    documentIdentity: tX(
                      t.sessionId,
                      this.documentMutationSequence,
                    ),
                    quickSelect:
                      "selecting" === t.inpaintingRemove.quickSelect.status
                        ? t.inpaintingRemove.quickSelect
                        : Object.freeze({ status: "idle" }),
                  }),
                })),
                this.notify());
            }),
            (this.restartSmartEditFromCurrent = () => {
              var e, t;
              if (t_(this.dependencies)) return;
              let i = this.snapshot;
              if (
                "active" !== i.status ||
                "smart-edit" !== i.mode ||
                "single" !== i.selectionKind ||
                (null == (e = i.smartEdit) ? void 0 : e.status) !== "failed"
              )
                return;
              let s = i.sources[0],
                n = s ? tj(this.dependencies, s.nodeId) : null;
              if (!(null == n ? void 0 : n.pixelSourceUrl)) return;
              (null == (t = this.preparationAbortController) || t.abort(),
                (this.preparationAbortController = null));
              let o = (0, e_.tH)({
                documentIdentity: `${i.sessionId}:current-source`,
                source: tE(n, n, n.resourceId),
              });
              o.ok &&
                ((this.snapshot = Object.freeze({
                  ...i,
                  smartEdit: o.snapshot,
                  sources: Object.freeze([n]),
                })),
                this.notify(),
                this.focusActiveSource());
            }),
            (this.submit = (e) => {
              var t, i;
              if ("mode" in e && "panorama" === e.mode) {
                let t = (0, eK.u)(this.dependencies.postEditCatalog);
                if (
                  !t ||
                  t.modelName !== e.modelName ||
                  !t.resolutions.includes(e.resolution) ||
                  e.prompt.length > t.maxPromptLength
                )
                  return Promise.resolve({
                    ok: !1,
                    reason: "commandFailed",
                    message: "Panorama capability changed. Reopen the editor.",
                  });
              }
              let s = this.snapshot;
              if ("active" !== s.status)
                return Promise.resolve({
                  message: "Image post-edit session is not active.",
                  ok: !1,
                  reason: "notActive",
                });
              if ((0, e3.J)(s))
                return Promise.resolve({
                  message: "Source image post-edit session is not active.",
                  ok: !1,
                  reason: "notActive",
                });
              if ("single" !== s.selectionKind)
                return Promise.resolve({
                  message: "Batch image post-edit must use submitBatch.",
                  ok: !1,
                  reason: "unsupportedBatch",
                });
              if (this.pendingSubmission) return this.pendingSubmission;
              let n = this.attempt;
              if (
                (null == n ? void 0 : n.kind) === "single" &&
                "ambiguous" === n.state &&
                n.sessionId === s.sessionId
              )
                return this.startSubmission(s, n.submitId, 1, (e, t) =>
                  this.executeSingleAttempt(n, e, t),
                );
              if ("mode" in e && "product-replacement" === e.mode) {
                let t = (0, eG.ih)(this.dependencies.postEditCatalog);
                if (
                  !t ||
                  t.modelName !== e.modelName ||
                  !t.resolutions.includes(e.resolution) ||
                  !(0, eG.cY)(t, e.prompt ?? "") ||
                  !(null == (i = this.productReplacement)
                    ? void 0
                    : i.ownsIntent(e))
                )
                  return Promise.resolve({
                    ok: !1,
                    reason: "commandFailed",
                    message:
                      "Product replacement preparation or capability changed.",
                  });
              }
              let o = ts(e);
              if ("smart-edit" === o && !this.dependencies.smartEditEnabled)
                return Promise.resolve({
                  message: "Smart Edit is not enabled.",
                  ok: !1,
                  reason: "experimentDisabled",
                });
              if (o !== s.mode) {
                let e =
                  "Image post-edit submit mode does not match the active session.";
                return (
                  this.publishSubmissionFailure(s.sessionId, e),
                  Promise.resolve({
                    message: e,
                    ok: !1,
                    reason: "commandFailed",
                  })
                );
              }
              if (
                (null == (t = this.attempt) ? void 0 : t.kind) === "batch" &&
                this.attempt.recovery &&
                this.attempt.sessionId === s.sessionId
              ) {
                let e = this.attempt;
                return this.startSubmission(
                  s,
                  s.sessionId,
                  e.items.length,
                  (t, i) => this.executeBatchAttempt(e, t, i),
                );
              }
              return this.submitSingleImagePostEdit(s, e);
            }),
            (this.submitBatch = (e) => {
              var t;
              let i = this.snapshot;
              if ("active" !== i.status || (0, e3.J)(i))
                return Promise.resolve({
                  message: "Batch image post-edit session is not active.",
                  ok: !1,
                  reason: "notActive",
                });
              if ("batch" !== i.selectionKind)
                return Promise.resolve({
                  message: "Single-image post-edit must use submit.",
                  ok: !1,
                  reason: "unsupportedBatch",
                });
              if (this.pendingSubmission) return this.pendingSubmission;
              if (ts(e) !== i.mode) {
                let e =
                  "Batch image post-edit submit mode does not match the active session.";
                return (
                  this.publishSubmissionFailure(i.sessionId, e),
                  Promise.resolve({
                    message: e,
                    ok: !1,
                    reason: "commandFailed",
                  })
                );
              }
              if (
                (null == (t = this.attempt) ? void 0 : t.kind) === "batch" &&
                this.attempt.recovery &&
                this.attempt.sessionId === i.sessionId
              ) {
                let e = this.attempt;
                return this.startSubmission(
                  i,
                  i.sessionId,
                  e.items.length,
                  (t, i) => this.executeBatchAttempt(e, t, i),
                );
              }
              return this.submitBatchSession(i, e);
            }),
            (this.submitBatchCutout = (e) => {
              if (this.disposed) return Promise.resolve(tT());
              if (e.length < 2 || e.length > 20 || new Set(e).size !== e.length)
                return Promise.resolve({
                  message:
                    "Batch Cutout requires between 2 and 20 unique image nodes.",
                  ok: !1,
                  reason: "unsupportedBatch",
                });
              let t = t_(this.dependencies);
              if (t) return Promise.resolve({ ...t, ok: !1 });
              let i = tO(this.dependencies, "cutout", e);
              if (!i.ok)
                return Promise.resolve({
                  message: "Batch Cutout source resources are unavailable.",
                  ok: !1,
                  reason: "commandFailed",
                });
              let s = Object.freeze({
                mode: "cutout",
                selectionKind: "batch",
                sessionId: tW(),
                sources: i.sources,
                status: "active",
                submission: tb,
              });
              return this.submitDirectBatchCutout(s, {
                mode: "cutout",
                sourceResourceIds: s.sources.map((e) => e.resourceId),
                type: "batch-cutout",
              });
            }),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.dependencies = e),
            e.mediaUploadService &&
              e.loadRemoteSelection &&
              (this.productReplacement = new eH({
                getProjectId: e.getProjectId,
                upload: e.mediaUploadService,
                resolveImage: new eB(e, e.productImageAssets).resolve,
                recognition: e.recognition,
                loadRemoteSelection: e.loadRemoteSelection,
                canEdit: () => {
                  let t = this.snapshot;
                  return (
                    !this.disposed &&
                    !t_(e) &&
                    "active" === t.status &&
                    !(0, e3.J)(t) &&
                    "product-replacement" === t.mode &&
                    "submitting" !== t.submission.status &&
                    t.sources.every((t) => tF(e, t))
                  );
                },
              })),
            (this.resultPresentation = new eJ.w({
              deadlineMs: e.reconciliationDeadlineMs ?? 15e3,
              getObjectSnapshot: e.getObjectSnapshot,
              subscribeObjectSnapshot: e.subscribeObjectSnapshot,
              viewport: e.viewport,
            })),
            (this.cutoutAssetAdapter = e.cutoutAssetAdapter ?? new Y()),
            (this.inpaintingRemoveAssetAdapter =
              e.inpaintingRemoveAssetAdapter ?? new tp({ encoder: new ta() })),
            e.mediaUploadService && !e.loadRemoteSelection)
          )
            throw Error(
              "Mask asset preparation requires a remote selection loader.",
            );
          ((this.maskAssetPreparation =
            e.mediaUploadService && e.loadRemoteSelection
              ? new tm({
                  loadRemoteSelection: e.loadRemoteSelection,
                  mediaUploadService: e.mediaUploadService,
                })
              : null),
            (this.batchCutoutPreparation =
              e.mediaUploadService && e.loadRemoteSelection
                ? new e1({
                    adapter: this.cutoutAssetAdapter,
                    executor: new es({
                      loadRemoteSelection: e.loadRemoteSelection,
                      mediaUploadService: e.mediaUploadService,
                    }),
                    recognition: e.recognition,
                  })
                : null));
        }
      }
      function tE(e, t, i) {
        return Object.freeze({
          displayUrl: tM(
            t.pixelSourceUrl ?? "",
            "Smart Edit requires an original-size image URL.",
          ),
          height: t.height,
          nodeId: e.nodeId,
          originResourceId: i,
          resourceId: e.resourceId,
          width: t.width,
        });
      }
      function tw(e) {
        return tk({
          items: [
            {
              benefitType: e.benefitType,
              imageParams: e.imageParams,
              nodeId: e.nodeId,
              resourceId: e.resourceId,
              source: e.source,
            },
          ],
          projectId: e.projectId,
          submitId: e.submitId,
        });
      }
      function tA(e, t) {
        return {
          materials: [
            { image_uri: e.imageUri, role: 4, type: 2 },
            {
              image_uri: tM(t, "Cutout asset storage key is missing."),
              role: 5,
              type: 2,
            },
          ],
          mode: 4,
        };
      }
      function tC(e) {
        return "mode" in e && "image-hd" === e.mode && "normal" === e.kind;
      }
      function tR(e) {
        if ("batch-cutout" === e.type) return { type: "cutout" };
        if (
          "outpaint" === e.type ||
          "cutout" === e.type ||
          "inpainting-remove" === e.type
        )
          return { type: e.type };
        if ("smart-edit" === e.type)
          return {
            modelName: e.modelName,
            outputResolution: e.outputResolution,
            type: "smart-edit",
          };
        if ("view-control" === e.mode) return { mode: e.mode };
        if ("product-replacement" === e.mode)
          return {
            mode: e.mode,
            modelName: e.modelName,
            resolution: e.resolution,
          };
        if ("multi-size" === e.mode)
          throw Error("Multi-size requires per-target commerce actions.");
        return "panorama" === e.mode
          ? { mode: e.mode, modelName: e.modelName, resolution: e.resolution }
          : "lighting" === e.mode || "layer-decompose" === e.mode
            ? { mode: e.mode }
            : {
                kind: e.kind,
                mode: e.mode,
                outputCount: 1,
                resolution: e.resolution,
              };
      }
      function tk(e) {
        let t = e.items[0],
          i = e.items.length > 1;
        return {
          project_id: e.projectId,
          op: 3,
          post_edit: {
            source_node_id: (null == t ? void 0 : t.source.nodeId) ?? "",
            source_resource_id:
              (null == t ? void 0 : t.source.resourceId) ?? "",
            submit_id: e.submitId,
            items: e.items.map((e) => {
              var t;
              let s =
                ((null == (t = e.imageParams.materials) ? void 0 : t.length) ??
                  0) > 0;
              return {
                output_node_id: e.nodeId,
                output_title: (function (e, t) {
                  if (t.target_size) {
                    let { width: i, height: s } = t.target_size;
                    if (![i, s].every((e) => Number.isSafeInteger(e) && e > 0))
                      throw Error(
                        "Multi-size output title requires positive integer pixels.",
                      );
                    let n = i,
                      o = s;
                    for (; 0 !== o; ) {
                      let e = n % o;
                      ((n = o), (o = e));
                    }
                    return (0, eA.xO)(e, `${i / n}:${s / n}`);
                  }
                  return (0, eA.MF)(
                    e,
                    (function (e) {
                      let t = e.mode;
                      switch (t) {
                        case 14:
                          return "image.product-replacement";
                        case 2:
                          throw Error(
                            "Multi-size post-edit output requires target pixels.",
                          );
                        case 11:
                          return "image.panorama";
                        case 4:
                          return "image.cutout";
                        case 8:
                          return "image.inpainting-remove";
                        case 6:
                          return "image.normal-hd";
                        case 3:
                          return "image.outpaint";
                        case 7:
                          return tI[e.resolution];
                        case 9:
                          return "image.smart-edit";
                        case 5:
                          return "image.view-control";
                        case 13:
                          return "image.ecommerce-main-image";
                        case 10:
                          return "image.lighting";
                        case 12:
                          return "image.layer-decompose";
                        default:
                          return (0, ej.xb)(
                            t,
                            `Unsupported image post-edit output title mode: ${String(t)}`,
                          );
                      }
                    })(t),
                  );
                })(e.source.title, e.imageParams),
                ...(i
                  ? {
                      source_node_id: e.source.nodeId,
                      source_resource_id: e.source.resourceId,
                    }
                  : {}),
                item: {
                  ...(e.benefitType
                    ? { commerce_selection: { benefit_type: e.benefitType } }
                    : {}),
                  resource_id: e.resourceId,
                  type: 1,
                  params: { image_params: e.imageParams },
                  ...(s
                    ? {
                        reference_sources: [
                          {
                            material_idx: 0,
                            node_id: e.source.nodeId,
                            resource_id: e.source.resourceId,
                          },
                        ],
                      }
                    : {}),
                },
              };
            }),
          },
        };
      }
      function t_(e) {
        let t = e.getEditAvailability().local;
        return t.available
          ? null
          : "notEditable" === t.reason
            ? {
                message: "Canvas edit permission is required.",
                reason: "permissionDenied",
              }
            : {
                message: `Canvas editing is not ready: ${t.reason}.`,
                reason: "notEditingReady",
              };
      }
      function tO(e, t, i) {
        let s = [];
        for (let n of i) {
          let i = e.getObjectSnapshot(n);
          if ((null == i ? void 0 : i.type) !== "image")
            return {
              code: "UNSUPPORTED_SELECTION",
              ok: !1,
              reason: "commandFailed",
            };
          let o = (0, el.Fx)({
            nodeId: i.id,
            primaryResourceId: i.data.resourceId,
            resources: e.getResourceBindings(n),
            title: i.data.title,
          });
          if (
            !o ||
            (("product-replacement" === t ||
              "cutout" === t ||
              "inpainting-remove" === t ||
              "smart-edit" === t) &&
              !o.pixelSourceUrl)
          )
            return {
              code: "SOURCE_RESOURCE_UNAVAILABLE",
              ok: !1,
              reason: "commandFailed",
            };
          if (("cutout" === t || "product-replacement" === t) && !(0, el.Dp)(o))
            return {
              code: "SOURCE_SIZE_UNSUPPORTED",
              ok: !1,
              reason: "commandFailed",
            };
          s.push(o);
        }
        return { ok: !0, sources: Object.freeze(s) };
      }
      function tP(e) {
        var t;
        if (!(null == (t = e.getDraftId()) ? void 0 : t.trim()))
          throw Error("Image post-edit draft id is missing.");
      }
      function tD(e, t, i, s, n) {
        if (tN(e.getObjectSnapshot(t), i))
          return { cancel: () => void 0, promise: Promise.resolve("arrived") };
        let o = () => void 0;
        return {
          cancel: () => o(),
          promise: new Promise((r, a) => {
            let l,
              d,
              u = !1,
              c = () => {
                (void 0 !== l && clearTimeout(l), (l = void 0));
                let e = d;
                ((d = void 0), null == e || e());
              },
              h = (e) => {
                u || ((u = !0), s.removeEventListener("abort", p), c(), r(e));
              },
              p = () => h("aborted");
            ((o = () => h("aborted")),
              s.addEventListener("abort", p, { once: !0 }),
              (l = setTimeout(() => h("deadline"), Math.max(0, n))));
            try {
              if (s.aborted) return void p();
              let n = e.subscribeObjectSnapshot(t, () => {
                tN(e.getObjectSnapshot(t), i) && h("arrived");
              });
              if (u) return void n();
              ((d = n), tN(e.getObjectSnapshot(t), i) && h("arrived"));
            } catch (e) {
              if (u) return;
              ((u = !0), s.removeEventListener("abort", p), c(), a(e));
            }
          }),
        };
      }
      function tN(e, t) {
        return (
          (null == e ? void 0 : e.type) === "image" &&
          (e.data.resourceId === t ||
            e.data.resourceBatches.some((e) => e.resourceIds.includes(t)))
        );
      }
      function tU(e) {
        return e instanceof Error
          ? e
          : Error(
              "Timed out waiting for the authoritative image post-edit output.",
            );
      }
      function tT() {
        return {
          message: "Image post-edit submission was canceled.",
          ok: !1,
          reason: "canceled",
        };
      }
      function tM(e, t) {
        if (!e.trim()) throw Error(t);
        return e;
      }
      function tx(e, t, i) {
        let s = e[t];
        if (void 0 === s) throw Error(i);
        return s;
      }
      function tF(e, t) {
        let i = tj(e, t.nodeId);
        return (
          (null == i ? void 0 : i.resourceId) === t.resourceId &&
          i.imageUri === t.imageUri &&
          i.width === t.width &&
          i.height === t.height
        );
      }
      function tj(e, t) {
        let i = e.getObjectSnapshot(t);
        return (null == i ? void 0 : i.type) !== "image"
          ? null
          : (0, el.Fx)({
              nodeId: i.id,
              primaryResourceId: i.data.resourceId,
              resources: e.getResourceBindings(i.id),
              title: i.data.title,
            });
      }
      function tL(e) {
        return e instanceof Error && e.message.trim() ? e.message : String(e);
      }
      function tz(e, t, i) {
        if (e.width !== t.width || e.height !== t.height)
          throw Error("Mask document dimensions must match the source image.");
        if (!Number.isSafeInteger(e.revision) || e.revision < 0)
          throw Error(
            "Mask document revision must be a non-negative safe integer.",
          );
        if (i && e.revision <= i.revision)
          throw Error("Replacement mask document must advance its revision.");
        "remote" === e.initialMask.kind &&
          (tM(e.initialMask.uri, "Mask document URI is missing."),
          tM(e.initialMask.url, "Mask document URL is missing."));
      }
      function tB(e) {
        "quick-select" === e.action && e.candidates.dispose();
      }
      function tq(e) {
        return Object.freeze({
          ...e,
          initialMask: Object.freeze({ ...e.initialMask }),
          strokes: Object.freeze(e.strokes.map(tV)),
        });
      }
      function tV(e) {
        return "quick-select" === e.tool
          ? Object.freeze({ ...e })
          : Object.freeze({
              ...e,
              points: Object.freeze(
                e.points.map((e) => Object.freeze({ ...e })),
              ),
            });
      }
      function tH(e) {
        return e instanceof DOMException && "AbortError" === e.name;
      }
      function tW() {
        var e;
        return "function" ==
          typeof (null == (e = globalThis.crypto) ? void 0 : e.randomUUID)
          ? globalThis.crypto.randomUUID()
          : ((tg += 1), `image-post-edit-${tg}`);
      }
      class tG extends Error {
        constructor() {
          (super("Smart Edit composite export failed."),
            (this.name = "SmartEditCompositeExportFailure"));
        }
      }
      function tK(e) {
        return Object.freeze({
          ...e,
          normalizedCrop: Object.freeze({ ...e.normalizedCrop }),
          runtimeIdentity: Object.freeze({ ...e.runtimeIdentity }),
        });
      }
      function t$(e, t) {
        return `${e}:cutout-document:${t}`;
      }
      function tX(e, t) {
        return `${e}:inpainting-remove-document:${t}`;
      }
      function tQ(e) {
        return "cutout" === e ? "Cutout" : "InpaintingRemove";
      }
      function tY(e, t) {
        return (
          e.nodeId === t.nodeId &&
          e.resourceId === t.resourceId &&
          e.imageUri === t.imageUri &&
          e.displayUrl === t.displayUrl &&
          e.pixelSourceUrl === t.pixelSourceUrl &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      class tJ {
        async recognize(e) {
          throw Error("Mask recognition service is unavailable.");
        }
      }
      class tZ extends Error {
        constructor(e, t) {
          (super(`Remote mask selection failed: ${e}.`, t),
            (this.name = "RemoteMaskSelectionError"),
            (this.reason = e));
        }
      }
      class t0 {
        async readAsset(e) {
          try {
            return await this.readRemoteAsset(e.descriptor.url, e.signal);
          } catch (t) {
            if (e.signal.aborted || t4(t))
              throw new tZ("canceled", { cause: t });
            if (t instanceof tZ) throw t;
            throw new tZ("remote-unreadable", { cause: t });
          }
        }
        async decodeAsset(e, t) {
          try {
            var i, s;
            return (
              t3(t),
              await ((i = this.decodeImage(e, t)),
              (s = t),
              new Promise((e, t) => {
                let n = !1,
                  o = () => {
                    n ||
                      ((n = !0),
                      s.removeEventListener("abort", o),
                      t(
                        new DOMException(
                          "Remote mask image decode canceled.",
                          "AbortError",
                        ),
                      ));
                  };
                (s.addEventListener("abort", o, { once: !0 }),
                  i.then(
                    (t) => {
                      n
                        ? t.close()
                        : ((n = !0), s.removeEventListener("abort", o), e(t));
                    },
                    (e) => {
                      n || ((n = !0), s.removeEventListener("abort", o), t(e));
                    },
                  ),
                  s.aborted && o());
              }))
            );
          } catch (e) {
            if (t.aborted || t4(e)) throw new tZ("canceled", { cause: e });
            if (e instanceof tZ) throw e;
            throw new tZ("decode-failed", { cause: e });
          }
        }
        constructor(e = {}) {
          ((this.load = async (e) => {
            t3(e.signal);
            let t = null,
              i = null;
            try {
              let n,
                o = await this.readAsset(e);
              if (
                (t3(e.signal),
                (t = await this.decodeAsset(o, e.signal)),
                t3(e.signal),
                t.width !== e.width || t.height !== e.height)
              )
                throw new tZ("dimension-mismatch");
              (((i = this.createCanvas()).width = e.width),
                (i.height = e.height));
              let r = i.getContext("2d", { willReadFrequently: !0 });
              if (!r) throw new tZ("canvas-unavailable");
              try {
                (r.drawImage(t.canvasSource, 0, 0, e.width, e.height),
                  (n = r.getImageData(0, 0, e.width, e.height).data));
              } catch (e) {
                var s;
                if (
                  (s = e) instanceof DOMException &&
                  "SecurityError" === s.name
                )
                  throw new tZ("canvas-tainted", { cause: e });
                throw new tZ("decode-failed", { cause: e });
              }
              let a = new Uint8ClampedArray(e.width * e.height);
              for (let e = 0; e < a.length; e += 1) a[e] = n[4 * e + 3] ?? 0;
              return a;
            } finally {
              (null == t || t.close(), i && ((i.width = 0), (i.height = 0)));
            }
          }),
            (this.createCanvas =
              e.createCanvas ?? (() => document.createElement("canvas"))),
            (this.decodeImage = e.decodeImage ?? t2),
            (this.readRemoteAsset = e.readRemoteAsset ?? t1));
        }
      }
      async function t1(e, t) {
        let i = await fetch(e, { mode: "cors", signal: t });
        if (!i.ok) throw new tZ("remote-unreadable");
        return i.blob();
      }
      async function t2(e, t) {
        if ("function" != typeof createImageBitmap)
          throw new tZ("decode-failed");
        let i = await createImageBitmap(e);
        return {
          canvasSource: i,
          close: () => i.close(),
          height: i.height,
          width: i.width,
        };
      }
      function t3(e) {
        if (e.aborted) throw new tZ("canceled");
      }
      function t4(e) {
        return e instanceof DOMException && "AbortError" === e.name;
      }
      var t5 = i(78554),
        t6 = i(1196),
        t8 = i(15461),
        t7 = i(99864);
      class t9 {
        readAnchor(e) {
          return this.anchors.get(e);
        }
        read(e) {
          return this.scrollTopByNodeId.get(e) ?? 0;
        }
        remember(e, t, i) {
          if (Number.isFinite(t) && !(t < 0)) {
            if (
              (i &&
              Number.isInteger(i.blockIndex) &&
              i.blockIndex >= 0 &&
              Number.isFinite(i.offset)
                ? this.anchors.set(e, i)
                : this.anchors.delete(e),
              0 === t)
            )
              return void this.scrollTopByNodeId.delete(e);
            this.scrollTopByNodeId.set(e, t);
          }
        }
        clear() {
          (this.scrollTopByNodeId.clear(), this.anchors.clear());
        }
        constructor() {
          ((this.anchors = new Map()), (this.scrollTopByNodeId = new Map()));
        }
      }
      class ie {
        async open(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.openSession(e, t);
        }
        async openOwned(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = this.openRequestToken + 1,
            s = await this.openSession(e, { presentation: "fullscreen" }, t);
          return s.ok
            ? this.isOpenRequestCurrent(i)
              ? {
                  ok: !0,
                  value: {
                    nodeId: e,
                    session: {
                      close: () => {
                        this.isOpenRequestCurrent(i) &&
                          (this.snapshot.dirty &&
                            this.snapshot.nodeId &&
                            this.recoveryDocuments.set(
                              this.snapshot.nodeId,
                              this.snapshot.document,
                            ),
                          this.discardUnconfirmedChanges());
                      },
                    },
                  },
                }
              : it()
            : s;
        }
        restoreFocus() {
          let e = this.fullscreenSource;
          return (
            !!e &&
            (queueMicrotask(() => {
              var t, i;
              if (this.fullscreenSource === e && !this.disposed) {
                for (let t of [e.restoreFocusTarget, e.restoreFocusFallback])
                  if (
                    (null == t ? void 0 : t.isConnected) &&
                    (t.focus({ preventScroll: !0 }),
                    t.ownerDocument.activeElement === t)
                  )
                    return;
                null == (i = globalThis.document) ||
                  null == (t = i.querySelector(".octo-canvas-flow")) ||
                  t.focus({ preventScroll: !0 });
              }
            }),
            !0)
          );
        }
        async openSession(e, t, i) {
          var s, n;
          if (
            this.disposed ||
            (null == i || null == (s = i.signal) ? void 0 : s.aborted)
          )
            return it();
          let o = ++this.openRequestToken,
            r = this.input.canvas.actions.updateTextContent.getState();
          if (!r.available && !i) return { ok: !1, reason: r.reason };
          if (this.isContentBlocked(e) && !i)
            return { ok: !1, reason: "notEditingReady" };
          let a = t.presentation ?? "node";
          if (this.snapshot.nodeId === e && this.isSessionOpen()) {
            ((this.fullscreenReadable = void 0 !== i),
              (this.fullscreenSource = i),
              i ? this.syncWriteCapability() : this.resume());
            let e = i ? (this.snapshot.readOnly ?? !1) : void 0;
            if (
              this.snapshot.presentation !== a ||
              this.snapshot.readOnly !== e
            ) {
              let { readOnly: t, ...i } = this.snapshot;
              this.publish({
                ...i,
                presentation: a,
                ...(void 0 === e ? {} : { readOnly: e }),
              });
            }
            return { ok: !0, value: {} };
          }
          return this.isSessionOpen() &&
            (await this.saveAndClose(),
            !this.isOpenRequestCurrent(o) ||
              (null == i || null == (n = i.signal) ? void 0 : n.aborted) ||
              "idle" !== this.snapshot.status)
            ? it()
            : this.openCurrentNode(e, o, a, t.initialCaret, i);
        }
        setTitle(e) {
          this.isWritableSnapshot() &&
            e !== this.snapshot.title &&
            ((this.titleRevision += 1),
            (this.unsafeLocalChangesRevision += 1),
            this.publishLocalEdit({ ...this.snapshot, title: e }),
            this.syncDebouncedFlush());
        }
        setDocument(e) {
          !this.isWritableSnapshot() ||
            this.snapshot.contentBlocked ||
            this.snapshot.historyPending ||
            e === this.snapshot.document ||
            ((this.pendingRedoDocument = null),
            (this.documentRevision += 1),
            (this.unsafeLocalChangesRevision += 1),
            this.publishLocalEdit({ ...this.snapshot, document: e }),
            this.syncDebouncedFlush());
        }
        setAutoHeight(e) {
          if (
            !this.isWritableSnapshot() ||
            this.snapshot.contentBlocked ||
            "node" !== this.snapshot.presentation ||
            !0 !== this.snapshot.autoHeightEnabled ||
            !this.snapshot.nodeId ||
            !Number.isFinite(e) ||
            e <= 0
          )
            return;
          let t = this.input.canvas.getObjectSnapshot(this.snapshot.nodeId);
          if (
            (null == t ? void 0 : t.type) !== "text" ||
            "autoHeight" !== (0, t6.Ri)(t.data)
          )
            return void this.disableAutoHeight();
          let i = Math.min(450, Math.ceil(e));
          i <= Math.max(t.layout.height ?? 0, this.pendingAutoHeight ?? 0) ||
            ((this.pendingAutoHeight = i),
            (this.autoHeightRevision += 1),
            (this.unsafeLocalChangesRevision += 1),
            this.input.canvas.previewTextNodeAutoHeight(t.id, i),
            this.publishLocalEdit(this.snapshot),
            this.syncDebouncedFlush());
        }
        flush(e) {
          if (this.snapshot.readOnly)
            return (e.closeAfter && this.forceFinish(), Promise.resolve());
          if (!this.isWritableSnapshot()) return Promise.resolve();
          if (
            (this.clearDebounceTimer(),
            (this.flushRequested = !0),
            this.closeAfterRequested ||
              (this.closeAfterRequested = e.closeAfter),
            this.flushPromise)
          )
            return this.flushPromise;
          let t = this.runFlushLoop();
          return (
            (this.flushPromise = t),
            t.finally(() => {
              this.flushPromise === t &&
                ((this.flushPromise = null),
                this.flushRequested &&
                  this.isWritableSnapshot() &&
                  this.flush({ closeAfter: this.closeAfterRequested }));
            })
          );
        }
        saveAndClose() {
          return this.flush({ closeAfter: !0 });
        }
        undo() {
          return this.runHistory("undo");
        }
        redo() {
          return this.runHistory("redo");
        }
        async runHistory(e) {
          let t = this.snapshot;
          if (
            !t.nodeId ||
            !this.isWritableSnapshot() ||
            t.contentBlocked ||
            t.historyPending ||
            (this.clearDebounceTimer(),
            this.flushPromise && (await this.flushPromise),
            !this.isCurrent(t.generation, t.sessionId) ||
              !this.isWritableSnapshot() ||
              this.snapshot.contentBlocked ||
              this.snapshot.historyPending)
          )
            return;
          if ("redo" === e && null !== this.pendingRedoDocument) {
            let e = this.pendingRedoDocument;
            this.setDocument(e);
            return;
          }
          let i =
              "undo" === e && this.isDocumentDirty()
                ? this.snapshot.document
                : null,
            s = this.input.canvas.actions[e],
            n = { textNodeId: t.nodeId };
          if (null === i && !s.getState(n).available) return;
          let o = this.documentRevision;
          this.publish({ ...this.snapshot, historyPending: !0 });
          try {
            if (
              null === i &&
              ((this.pendingRedoDocument = null), !(await s.execute(n)).ok)
            )
              return;
            let e = this.input.canvas.getObjectSnapshot(t.nodeId);
            if ((null == e ? void 0 : e.type) !== "text") return;
            let r = e.data.text ?? "",
              a = await this.input.canvas.readTextContent(t.nodeId, r);
            if (
              "ready" !== a.status ||
              !this.isCurrent(t.generation, t.sessionId) ||
              !this.isWritableSnapshot() ||
              this.snapshot.contentBlocked ||
              this.documentRevision !== o
            )
              return;
            ((this.pendingRedoDocument = i),
              (this.lastObservedStorageText = r),
              this.documentRevision++,
              (this.savedDocumentRevision = this.documentRevision),
              (this.overLimitDocumentRevision = null),
              this.serializedDocumentByRevision.clear(),
              (this.savedAutoHeightRevision = this.autoHeightRevision),
              (this.pendingAutoHeight = void 0),
              this.input.canvas.restoreTextNodeResizeAuthority(t.nodeId),
              this.publishLocalEdit({
                ...this.snapshot,
                document: a.document,
                remoteContentDeferred: !1,
              }));
          } catch (e) {
            (this.emitSaveFailure(t.nodeId, "historyFailed", e),
              this.isCurrent(t.generation, t.sessionId) &&
                this.publish({
                  ...this.snapshot,
                  status: "error",
                  errorCode: "SAVE_FAILED",
                }));
          } finally {
            this.isCurrent(t.generation, t.sessionId) &&
              (this.publish({ ...this.snapshot, historyPending: !1 }),
              this.syncDebouncedFlush());
          }
        }
        suspend() {
          if (!this.isSessionOpen()) return;
          let e = this.input.canvas.actions.updateTextContent.getState();
          this.fullscreenReadable && !e.available
            ? this.enterReadonlyFullscreen()
            : e.available || "permissionDenied" !== e.reason
              ? "suspended" !== this.snapshot.status &&
                ((this.openRequestToken += 1),
                (this.writeEpoch += 1),
                this.clearDebounceTimer(),
                (this.flushRequested = !1),
                (this.closeAfterRequested = !1),
                this.publish({
                  ...this.snapshot,
                  status: "suspended",
                  errorCode: void 0,
                }))
              : this.discardUnconfirmedChanges();
        }
        resume() {
          if (
            this.fullscreenReadable &&
            this.snapshot.readOnly &&
            !this.disposed
          ) {
            this.input.canvas.actions.updateTextContent.getState().available &&
              this.refreshReadonlyFullscreen();
            return;
          }
          if (
            "suspended" !== this.snapshot.status ||
            this.disposed ||
            !this.input.canvas.actions.updateTextContent.getState().available
          )
            return;
          let e = this.snapshot.nodeId
            ? this.input.canvas.getObjectSnapshot(this.snapshot.nodeId)
            : null;
          this.nodeUnavailable = (null == e ? void 0 : e.type) !== "text";
          let t = this.getCurrentContentError();
          (this.publish({
            ...this.snapshot,
            status: t ? "error" : "editing",
            errorCode: t,
          }),
            this.syncDebouncedFlush());
        }
        recordMarkdownDownloadFailed(e, t) {
          let i = this.snapshot.nodeId;
          i &&
            this.isSessionOpen() &&
            this.input.featureObservability.emit(
              t5.sp,
              { nodeId: i, reason: e },
              t instanceof Error ? t : Error(e),
            );
        }
        recordMarkdownDownloadDegraded(e) {
          var t;
          let i = this.snapshot.nodeId;
          if (
            !i ||
            !this.isSessionOpen() ||
            (0 === e.issues.length && 0 === e.omittedIssueCount)
          )
            return;
          let s = ii(i, e);
          (null == (t = this.input.logger) ||
            t.warn("text edit Markdown download degraded", s),
            this.input.featureObservability.emit(t5.Fh, s));
        }
        hasUnsafeLocalChanges() {
          return this.snapshot.dirty;
        }
        getUnsafeLocalChangesRevision() {
          return this.unsafeLocalChangesRevision;
        }
        dispose() {
          if (!this.disposed) {
            for (let e of ((this.disposed = !0),
            (this.openRequestToken += 1),
            this.forceFinish(),
            (this.fullscreenSource = void 0),
            this.scrollMemory.clear(),
            this.environmentStops))
              e();
            (this.listeners.clear(),
              this.serializationNoticeListeners.clear(),
              this.recoveryDocuments.clear());
          }
        }
        async openCurrentNode(e, t, i, s, n) {
          var o;
          let r = this.input.canvas.getObjectSnapshot(e),
            a = (null == r ? void 0 : r.type) === "text" ? r : null;
          if (!a) return it("NODE_UNAVAILABLE");
          let l = a.data.title ?? "",
            d = a.data.text ?? "",
            u = await this.readContent(e, d);
          if (
            !this.isOpenRequestCurrent(t) ||
            (null == n || null == (o = n.signal) ? void 0 : o.aborted)
          )
            return it();
          let c = this.input.canvas.getObjectSnapshot(e);
          if (!c || "text" !== c.type) return it("NODE_UNAVAILABLE");
          if ((c.data.title ?? "") !== l || (c.data.text ?? "") !== d)
            return this.openCurrentNode(e, t, i, s, n);
          let h = this.input.canvas.actions.updateTextContent.getState();
          if (!h.available && !n) return { ok: !1, reason: h.reason };
          if (this.isContentBlocked(e) && !n)
            return { ok: !1, reason: "notEditingReady" };
          if ("ready" !== u.status) return it("CONTENT_UNAVAILABLE");
          (this.forceFinish(),
            (this.fullscreenReadable = void 0 !== n),
            (this.fullscreenSource = n),
            (this.lastObservedTitle = l),
            (this.lastObservedStorageText = d),
            (this.overLimitDocumentRevision = null),
            (this.nodeUnavailable = !1),
            (this.documentRevision = 0),
            (this.savedDocumentRevision = 0),
            (this.autoHeightRevision = 0),
            (this.savedAutoHeightRevision = 0),
            (this.pendingAutoHeight = void 0),
            (this.titleRevision = 0),
            (this.savedTitleRevision = 0),
            this.serializedDocumentByRevision.clear(),
            s && this.scrollMemory.remember(e, s.scrollTop, s.blockAnchor));
          let p = this.snapshot.generation + 1,
            m = {
              status: "editing",
              nodeId: e,
              title: l,
              document: u.document,
              dirty: !1,
              remoteContentDeferred: !1,
              sessionId: crypto.randomUUID(),
              generation: p,
              presentation: i,
              ...(n ? { readOnly: !h.available } : {}),
              autoHeightEnabled: "autoHeight" === (0, t6.Ri)(c.data),
              ...(s ? { initialCaret: s } : {}),
            };
          return (
            void 0 !== c.data.backgroundColor &&
              (m = { ...m, backgroundColor: c.data.backgroundColor }),
            !0 === c.data.containsAiGeneratedContent &&
              (m = { ...m, containsAiGeneratedContent: !0 }),
            this.publish(m),
            this.watchObject(e),
            this.watchContentControl(e),
            { ok: !0, value: {} }
          );
        }
        async readContent(e, t) {
          try {
            return await this.input.canvas.readTextContent(e, t);
          } catch (e) {
            var i, s;
            return (
              (i = e),
              "function" == typeof globalThis.reportError
                ? globalThis.reportError(i)
                : ((s = i),
                  queueMicrotask(() => {
                    throw s;
                  })),
              { status: "invalid", reason: "invalidMarkdown" }
            );
          }
        }
        async runFlushLoop() {
          for (; this.flushRequested && this.isWritableSnapshot(); ) {
            let e = this.closeAfterRequested;
            if (
              ((this.flushRequested = !1),
              (this.closeAfterRequested = !1),
              "blocked" === (await this.flushOnce(e)))
            ) {
              ((this.flushRequested = !1), (this.closeAfterRequested = !1));
              return;
            }
          }
        }
        async flushOnce(e) {
          let t = this.snapshot;
          if (!t.nodeId || !this.isWritableSnapshot()) return "stale";
          let i = this.getCurrentContentError();
          if (i)
            return (
              ("error" !== t.status || t.errorCode !== i) &&
                this.publish({ ...t, status: "error", errorCode: i }),
              "blocked"
            );
          if (!t.dirty) return this.completeWithoutWrite(t, e);
          let s = this.documentRevision,
            n = this.autoHeightRevision,
            o = this.titleRevision,
            r = this.writeEpoch,
            a = await this.preparePendingWrite(t, t.nodeId, e, s, n, o, r);
          return "string" == typeof a
            ? a
            : this.isCurrentWrite(a) && this.isWritableSnapshot()
              ? this.executePendingWrite(a, e)
              : "stale";
        }
        async preparePendingWrite(e, t, i, s, n, o, r) {
          let a,
            l = this.isDocumentDirty(),
            d = this.isAutoHeightDirty(),
            u = this.isTitleDirty();
          if (
            (l && (a = this.serializedDocumentByRevision.get(s)),
            l && void 0 === a)
          )
            try {
              a = await this.prepareSerializedDocument(t, s, e.document);
            } catch (a) {
              var c;
              if (
                (null == (c = this.input.logger) ||
                  c.error("text edit Markdown codec load failed", a, {
                    nodeId: t,
                  }),
                !this.isCurrent(e.generation, e.sessionId) ||
                  r !== this.writeEpoch)
              )
                return "stale";
              if (
                this.documentRevision !== s ||
                this.autoHeightRevision !== n ||
                this.titleRevision !== o
              )
                return (
                  i &&
                    ((this.flushRequested = !0),
                    (this.closeAfterRequested = !0)),
                  "completed"
                );
              return (
                this.publish({
                  ...this.snapshot,
                  status: "error",
                  errorCode: "SAVE_FAILED",
                }),
                this.emitSaveFailure(t, "serializationFailed", a),
                "blocked"
              );
            }
          if (
            !this.isCurrent(e.generation, e.sessionId) ||
            r !== this.writeEpoch ||
            !this.isWritableSnapshot()
          )
            return "stale";
          if (
            this.documentRevision !== s ||
            this.autoHeightRevision !== n ||
            this.titleRevision !== o
          )
            return (
              i &&
                ((this.flushRequested = !0), (this.closeAfterRequested = !0)),
              "completed"
            );
          if (void 0 !== a && a.text.length > t8.g) {
            let e = this.overLimitDocumentRevision === s;
            return (
              (this.overLimitDocumentRevision = s),
              this.publish({
                ...this.snapshot,
                status: "error",
                errorCode: "CONTENT_TOO_LONG",
              }),
              e ||
                this.emitSaveFailure(
                  t,
                  "contentTooLong",
                  Error("contentTooLong"),
                ),
              "blocked"
            );
          }
          return e.dirty
            ? {
                ...(d && void 0 !== this.pendingAutoHeight
                  ? { autoHeight: this.pendingAutoHeight }
                  : {}),
                autoHeightRevision: n,
                documentRevision: s,
                generation: e.generation,
                nodeId: t,
                serializedDocument: a,
                sessionId: e.sessionId,
                ...(u ? { title: e.title } : {}),
                titleRevision: o,
                writeEpoch: r,
              }
            : this.completeWithoutWrite(e, i);
        }
        async prepareSerializedDocument(e, t, i) {
          let s,
            n = await this.getCodec(),
            o = n.encodeRichTextDocumentWithIssues(i);
          if (o.issues.length > 0 || o.omittedIssueCount > 0) {
            var r, a;
            if (o.text.length <= t8.g)
              try {
                let e = n.decodeTextContent(o.text);
                "ready" === e.status && (s = e.document);
              } catch (t) {
                null == (a = this.input.logger) ||
                  a.warn("text edit Markdown degradation reconcile skipped", {
                    errorName: t instanceof Error ? t.name : "unknown",
                    nodeId: e,
                  });
              }
            null == (r = this.input.logger) ||
              r.warn("text edit Markdown serialization degraded", ii(e, o));
          }
          let l = o;
          return (
            s && (l = { ...o, reconciledDocument: s }),
            this.serializedDocumentByRevision.set(t, l),
            this.pruneSerializedDocuments(),
            l
          );
        }
        completeWithoutWrite(e, t) {
          return (
            t
              ? this.forceFinish()
              : ("editing" !== e.status || e.errorCode) &&
                this.publish({ ...e, status: "editing", errorCode: void 0 }),
            "completed"
          );
        }
        async executePendingWrite(e, t) {
          if (!this.input.canvas.actions.updateTextContent.getState().available)
            return (this.suspend(), "stale");
          let i = this.input.canvas.getObjectSnapshot(e.nodeId),
            s =
              (null == i ? void 0 : i.type) === "text" &&
              "autoHeight" === (0, t6.Ri)(i.data);
          (void 0 === e.autoHeight || s || this.disableAutoHeight(),
            this.publish({
              ...this.snapshot,
              status: "saving",
              errorCode: void 0,
            }));
          let n = s ? this.buildUpdateOptions(e) : void 0,
            o = this.buildUpdatePatch(e);
          if (void 0 === n && void 0 === o.title && void 0 === o.text)
            return this.completeWithoutWrite(this.snapshot, t);
          let r = await Promise.resolve(
            void 0 === n
              ? this.input.canvas.actions.updateTextContent.execute(e.nodeId, o)
              : this.input.canvas.actions.updateTextContent.execute(
                  e.nodeId,
                  o,
                  n,
                ),
          );
          if (!this.isCurrentWrite(e) || !this.isWritableSnapshot())
            return "stale";
          if (!r.ok) {
            let i = this.input.canvas.actions.updateTextContent.getState();
            return "permissionDenied" === r.reason
              ? (this.discardUnconfirmedChanges(), "stale")
              : i.available
                ? (this.publish({
                    ...this.snapshot,
                    status: "error",
                    errorCode: "SAVE_FAILED",
                  }),
                  this.emitSaveFailure(e.nodeId, r.reason, Error(r.reason)),
                  this.documentRevision !== e.documentRevision ||
                    this.autoHeightRevision !== e.autoHeightRevision ||
                    this.titleRevision !== e.titleRevision)
                  ? ((this.flushRequested = !0),
                    this.closeAfterRequested || (this.closeAfterRequested = t),
                    "completed")
                  : "blocked"
                : (this.suspend(), "stale");
          }
          return (
            void 0 !== e.serializedDocument &&
              ((this.lastObservedStorageText = e.serializedDocument.text),
              (this.savedDocumentRevision = e.documentRevision)),
            void 0 !== e.title &&
              ((this.lastObservedTitle = e.title),
              (this.savedTitleRevision = e.titleRevision)),
            (null == n ? void 0 : n.autoHeight) !== void 0 &&
              this.autoHeightRevision === e.autoHeightRevision &&
              ((this.savedAutoHeightRevision = e.autoHeightRevision),
              (this.pendingAutoHeight = void 0)),
            this.completeSuccessfulWrite(e, t)
          );
        }
        completeSuccessfulWrite(e, t) {
          let i,
            s = this.documentRevision === e.documentRevision,
            n =
              void 0 !== e.serializedDocument &&
              (e.serializedDocument.issues.length > 0 ||
                e.serializedDocument.omittedIssueCount > 0);
          if (s && !t) {
            var o;
            i =
              null == (o = e.serializedDocument)
                ? void 0
                : o.reconciledDocument;
          }
          this.overLimitDocumentRevision = null;
          let r = this.isContentDirty();
          if (
            (n &&
              this.input.featureObservability.emit(
                t5.ny,
                ii(e.nodeId, e.serializedDocument),
              ),
            n &&
              s &&
              this.emitSerializationNotice(e.nodeId, e.serializedDocument),
            t && !r)
          )
            return (this.forceFinish(), "completed");
          let a = {
            ...this.snapshot,
            status: "editing",
            dirty: r,
            errorCode: void 0,
          };
          return (
            i && (a = { ...a, document: i }),
            this.publish(a),
            t &&
              r &&
              (this.clearDebounceTimer(),
              (this.flushRequested = !0),
              (this.closeAfterRequested = !0)),
            "completed"
          );
        }
        buildUpdatePatch(e) {
          let t = {};
          return (
            void 0 !== e.title && (t.title = e.title),
            void 0 !== e.serializedDocument &&
              (t.text = e.serializedDocument.text),
            t
          );
        }
        buildUpdateOptions(e) {
          return void 0 === e.autoHeight
            ? void 0
            : { autoHeight: e.autoHeight };
        }
        getRecoveryDocument(e) {
          return this.recoveryDocuments.get(e);
        }
        watchContentControl(e) {
          let t = this.input.contentControl;
          t &&
            ((this.contentControlStop = t.subscribe(e, () =>
              this.syncContentControl(e),
            )),
            this.syncContentControl(e));
        }
        isContentBlocked(e) {
          var t;
          let i =
            null == (t = this.input.contentControl) ? void 0 : t.getSnapshot(e);
          return void 0 !== i && ("ready" !== i.status || i.control.blocked);
        }
        syncContentControl(e) {
          if (!this.disposed && this.snapshot.nodeId === e) {
            if (this.isContentBlocked(e)) {
              if ((this.controlReadEpoch++, this.snapshot.contentBlocked))
                return;
              (this.writeEpoch++,
                this.clearDebounceTimer(),
                (this.flushRequested = !1),
                (this.closeAfterRequested = !1),
                this.isDocumentDirty() &&
                  this.recoveryDocuments.set(e, this.snapshot.document),
                (this.savedDocumentRevision = this.documentRevision));
              let t =
                this.isAutoHeightDirty() || void 0 !== this.pendingAutoHeight;
              ((this.savedAutoHeightRevision = this.autoHeightRevision),
                (this.pendingAutoHeight = void 0),
                t && this.input.canvas.restoreTextNodeResizeAuthority(e),
                this.serializedDocumentByRevision.clear(),
                (this.overLimitDocumentRevision = null),
                this.publishLocalEdit({ ...this.snapshot, contentBlocked: !0 }),
                this.syncDebouncedFlush());
              return;
            }
            this.snapshot.contentBlocked &&
              this.reloadControlledContent(e, ++this.controlReadEpoch);
          }
        }
        async reloadControlledContent(e, t) {
          let i = this.input.canvas.getObjectSnapshot(e);
          if ((null == i ? void 0 : i.type) !== "text") return;
          let s = i.data.text ?? "",
            n = await this.readContent(e, s);
          if (
            this.disposed ||
            this.snapshot.nodeId !== e ||
            t !== this.controlReadEpoch
          )
            return;
          let o = this.input.canvas.getObjectSnapshot(e);
          if ((null == o ? void 0 : o.type) === "text") {
            if ((o.data.text ?? "") !== s)
              return void this.syncContentControl(e);
            if ("ready" !== n.status)
              return void this.publish({
                ...this.snapshot,
                status: "error",
                errorCode: "SAVE_FAILED",
              });
            ((this.lastObservedStorageText = s),
              this.documentRevision++,
              (this.savedDocumentRevision = this.documentRevision),
              this.serializedDocumentByRevision.clear(),
              this.publishLocalEdit({
                ...this.snapshot,
                document: n.document,
                contentBlocked: !1,
                remoteContentDeferred: !1,
              }),
              this.syncDebouncedFlush());
          }
        }
        watchObject(e) {
          var t;
          for (let e of (null == (t = this.objectStop) || t.call(this),
          this.historyStops))
            e();
          let i = { textNodeId: e },
            s = () => {
              this.snapshot.nodeId === e && this.publish(this.snapshot);
            };
          ((this.historyStops = [
            this.input.canvas.actions.undo.subscribe(i, s),
            this.input.canvas.actions.redo.subscribe(i, s),
          ]),
            (this.objectStop = this.input.canvas.subscribeObjectSnapshot(
              e,
              () => {
                let t = this.input.canvas.getObjectSnapshot(e);
                t && "text" === t.type
                  ? this.isSessionOpen() &&
                    this.snapshot.nodeId === e &&
                    ((this.nodeUnavailable = !1),
                    this.observeRemoteSizingMode(t),
                    this.observeRemoteBackgroundColor(t),
                    this.observeRemoteAiGeneratedContent(t),
                    this.observeRemoteTitle(t),
                    this.observeRemoteText(t))
                  : this.snapshot.dirty
                    ? ((this.nodeUnavailable = !0),
                      this.clearDebounceTimer(),
                      this.publish({
                        ...this.snapshot,
                        status: "error",
                        errorCode: "NODE_UNAVAILABLE",
                      }))
                    : this.forceFinish();
              },
            )));
        }
        observeRemoteSizingMode(e) {
          let t = "autoHeight" === (0, t6.Ri)(e.data);
          if (t !== (!0 === this.snapshot.autoHeightEnabled)) {
            if (!t) return void this.disableAutoHeight();
            this.publish({ ...this.snapshot, autoHeightEnabled: !0 });
          }
        }
        observeRemoteBackgroundColor(e) {
          if (e.data.backgroundColor === this.snapshot.backgroundColor) return;
          let { backgroundColor: t, ...i } = this.snapshot;
          void 0 === e.data.backgroundColor
            ? this.publish(i)
            : this.publish({ ...i, backgroundColor: e.data.backgroundColor });
        }
        observeRemoteAiGeneratedContent(e) {
          if (
            e.data.containsAiGeneratedContent ===
            this.snapshot.containsAiGeneratedContent
          )
            return;
          let { containsAiGeneratedContent: t, ...i } = this.snapshot;
          !0 === e.data.containsAiGeneratedContent
            ? this.publish({ ...i, containsAiGeneratedContent: !0 })
            : this.publish(i);
        }
        disableAutoHeight() {
          let e = this.snapshot.nodeId,
            t = this.isAutoHeightDirty() || void 0 !== this.pendingAutoHeight;
          ((this.savedAutoHeightRevision = this.autoHeightRevision),
            (this.pendingAutoHeight = void 0),
            t && e && this.input.canvas.restoreTextNodeResizeAuthority(e),
            !1 !== this.snapshot.autoHeightEnabled &&
              this.publishLocalEdit({
                ...this.snapshot,
                autoHeightEnabled: !1,
              }));
        }
        observeRemoteTitle(e) {
          let t = e.data.title ?? "";
          if (t === this.lastObservedTitle) return;
          let i = this.isTitleDirty();
          ((this.lastObservedTitle = t),
            i ||
              ((this.titleRevision += 1),
              (this.savedTitleRevision = this.titleRevision),
              this.publishLocalEdit({ ...this.snapshot, title: t })));
        }
        observeRemoteText(e) {
          let t = e.data.text ?? "";
          if (t === this.lastObservedStorageText) {
            "NODE_UNAVAILABLE" === this.snapshot.errorCode &&
              this.publishLocalEdit(this.snapshot);
            return;
          }
          ((this.lastObservedStorageText = t), this.snapshot.readOnly)
            ? this.refreshReadonlyFullscreen()
            : this.snapshot.remoteContentDeferred ||
              this.publish({ ...this.snapshot, remoteContentDeferred: !0 });
        }
        publishLocalEdit(e) {
          let t = this.getCurrentContentError();
          this.publish({
            ...e,
            status:
              "suspended" === e.status
                ? "suspended"
                : t
                  ? "error"
                  : "saving" === e.status
                    ? "saving"
                    : "editing",
            dirty: this.isContentDirty(),
            errorCode: t,
          });
        }
        isDocumentDirty() {
          return this.documentRevision !== this.savedDocumentRevision;
        }
        isTitleDirty() {
          return this.titleRevision !== this.savedTitleRevision;
        }
        isAutoHeightDirty() {
          return this.autoHeightRevision !== this.savedAutoHeightRevision;
        }
        isContentDirty() {
          return (
            this.isTitleDirty() ||
            this.isDocumentDirty() ||
            this.isAutoHeightDirty()
          );
        }
        getCurrentContentError() {
          return this.nodeUnavailable
            ? "NODE_UNAVAILABLE"
            : this.isDocumentDirty() &&
                this.documentRevision === this.overLimitDocumentRevision
              ? "CONTENT_TOO_LONG"
              : void 0;
        }
        syncDebouncedFlush() {
          (this.clearDebounceTimer(),
            !(
              !this.snapshot.dirty ||
              this.snapshot.historyPending ||
              this.getCurrentContentError()
            ) &&
              this.isWritableSnapshot() &&
              (this.debounceTimer = setTimeout(() => {
                ((this.debounceTimer = null), this.flush({ closeAfter: !1 }));
              }, 500)));
        }
        clearDebounceTimer() {
          null !== this.debounceTimer &&
            (clearTimeout(this.debounceTimer), (this.debounceTimer = null));
        }
        syncWriteCapability() {
          this.input.canvas.actions.updateTextContent.getState().available
            ? this.resume()
            : this.suspend();
        }
        enterReadonlyFullscreen() {
          if (this.snapshot.readOnly) return;
          let e = this.snapshot.nodeId;
          (this.snapshot.dirty &&
            e &&
            this.recoveryDocuments.set(e, this.snapshot.document),
            (this.writeEpoch += 1),
            this.clearDebounceTimer(),
            (this.flushRequested = !1),
            (this.closeAfterRequested = !1),
            (this.savedDocumentRevision = this.documentRevision),
            (this.savedTitleRevision = this.titleRevision),
            this.disableAutoHeight(),
            (this.pendingRedoDocument = null),
            this.serializedDocumentByRevision.clear(),
            this.publish({
              ...this.snapshot,
              status: "editing",
              readOnly: !0,
              dirty: !1,
              historyPending: !1,
              errorCode: void 0,
            }),
            this.refreshReadonlyFullscreen());
        }
        async refreshReadonlyFullscreen() {
          let { nodeId: e, generation: t, sessionId: i } = this.snapshot;
          if (!e || !this.snapshot.readOnly || !this.fullscreenReadable) return;
          let s = ++this.controlReadEpoch,
            n = this.input.canvas.getObjectSnapshot(e);
          if ((null == n ? void 0 : n.type) !== "text") return;
          let o = n.data.text ?? "",
            r = await this.readContent(e, o);
          if (
            !this.isCurrent(t, i) ||
            s !== this.controlReadEpoch ||
            !this.snapshot.readOnly
          )
            return;
          let a = this.input.canvas.getObjectSnapshot(e);
          (null == a ? void 0 : a.type) !== "text" ||
            ((a.data.text ?? "") !== o
              ? this.refreshReadonlyFullscreen()
              : "ready" === r.status &&
                ((this.lastObservedStorageText = o),
                (this.lastObservedTitle = a.data.title ?? ""),
                this.publish({
                  ...this.snapshot,
                  document: r.document,
                  title: this.lastObservedTitle,
                  readOnly:
                    !this.input.canvas.actions.updateTextContent.getState()
                      .available,
                  remoteContentDeferred: !1,
                })));
        }
        isSessionOpen() {
          return "idle" !== this.snapshot.status;
        }
        isWritableSnapshot() {
          return (
            !this.disposed &&
            !this.snapshot.readOnly &&
            ["editing", "saving", "error"].includes(this.snapshot.status) &&
            this.input.canvas.actions.updateTextContent.getState().available
          );
        }
        isCurrent(e, t) {
          return (
            !this.disposed &&
            this.snapshot.generation === e &&
            this.snapshot.sessionId === t
          );
        }
        isCurrentWrite(e) {
          return (
            this.isCurrent(e.generation, e.sessionId) &&
            e.writeEpoch === this.writeEpoch
          );
        }
        isOpenRequestCurrent(e) {
          return !this.disposed && e === this.openRequestToken;
        }
        discardUnconfirmedChanges() {
          ((this.openRequestToken += 1),
            (this.writeEpoch += 1),
            this.forceFinish());
        }
        forceFinish() {
          var e, t;
          this.fullscreenReadable = !1;
          let i = this.snapshot.nodeId,
            s = this.isAutoHeightDirty() || void 0 !== this.pendingAutoHeight;
          for (let t of (this.clearDebounceTimer(),
          null == (e = this.objectStop) || e.call(this),
          (this.objectStop = null),
          this.historyStops))
            t();
          ((this.historyStops = []),
            (this.pendingRedoDocument = null),
            null == (t = this.contentControlStop) || t.call(this),
            (this.contentControlStop = null),
            this.controlReadEpoch++,
            (this.flushRequested = !1),
            (this.closeAfterRequested = !1),
            (this.lastObservedTitle = ""),
            (this.lastObservedStorageText = ""),
            (this.overLimitDocumentRevision = null),
            (this.nodeUnavailable = !1),
            (this.documentRevision = 0),
            (this.savedDocumentRevision = 0),
            (this.autoHeightRevision = 0),
            (this.savedAutoHeightRevision = 0),
            (this.pendingAutoHeight = void 0),
            (this.titleRevision = 0),
            (this.savedTitleRevision = 0),
            this.serializedDocumentByRevision.clear(),
            s && i && this.input.canvas.restoreTextNodeResizeAuthority(i),
            "idle" !== this.snapshot.status &&
              this.publish({
                ...t7.d,
                generation: this.snapshot.generation + 1,
              }));
        }
        getCodec() {
          return (
            this.codecPromise ??
              (this.codecPromise = Promise.resolve()
                .then(i.bind(i, 5824))
                .then((e) => {
                  let {
                    decodeTextContent: t,
                    encodeRichTextDocumentWithIssues: i,
                  } = e;
                  return {
                    decodeTextContent: t,
                    encodeRichTextDocumentWithIssues: i,
                  };
                })),
            this.codecPromise
          );
        }
        pruneSerializedDocuments() {
          if (!(this.serializedDocumentByRevision.size <= 2))
            for (let e of this.serializedDocumentByRevision.keys())
              e !== this.documentRevision &&
                e !== this.savedDocumentRevision &&
                this.serializedDocumentByRevision.delete(e);
        }
        publish(e) {
          let t = e.nodeId ? { textNodeId: e.nodeId } : void 0,
            i =
              void 0 !== t &&
              !e.readOnly &&
              !e.contentBlocked &&
              !e.historyPending &&
              ["editing", "saving", "error"].includes(e.status) &&
              this.input.canvas.actions.updateTextContent.getState().available;
          for (let s of ((this.snapshot = {
            ...e,
            canUndo:
              i &&
              (this.isDocumentDirty() ||
                this.input.canvas.actions.undo.getState(t).available),
            canRedo:
              i &&
              !this.isDocumentDirty() &&
              (null !== this.pendingRedoDocument ||
                this.input.canvas.actions.redo.getState(t).available),
          }),
          [...this.listeners]))
            s();
        }
        emitSaveFailure(e, t, i) {
          this.input.featureObservability.emit(
            t5.y8,
            { nodeId: e, reason: t },
            i instanceof Error ? i : Error(t),
          );
        }
        emitSerializationNotice(e, t) {
          let i = {
            id: ++this.serializationNoticeSequence,
            issueCount: t.issues.length + t.omittedIssueCount,
            nodeId: e,
          };
          for (let e of [...this.serializationNoticeListeners]) e(i);
        }
        constructor(e) {
          ((this.input = e),
            (this.snapshot = t7.d),
            (this.listeners = new Set()),
            (this.serializationNoticeListeners = new Set()),
            (this.contentControlStop = null),
            (this.controlReadEpoch = 0),
            (this.recoveryDocuments = new Map()),
            (this.historyStops = []),
            (this.pendingRedoDocument = null),
            (this.objectStop = null),
            (this.debounceTimer = null),
            (this.flushPromise = null),
            (this.flushRequested = !1),
            (this.closeAfterRequested = !1),
            (this.disposed = !1),
            (this.lastObservedTitle = ""),
            (this.lastObservedStorageText = ""),
            (this.overLimitDocumentRevision = null),
            (this.nodeUnavailable = !1),
            (this.documentRevision = 0),
            (this.savedDocumentRevision = 0),
            (this.autoHeightRevision = 0),
            (this.savedAutoHeightRevision = 0),
            (this.titleRevision = 0),
            (this.savedTitleRevision = 0),
            (this.unsafeLocalChangesRevision = 0),
            (this.writeEpoch = 0),
            (this.openRequestToken = 0),
            (this.serializedDocumentByRevision = new Map()),
            (this.serializationNoticeSequence = 0),
            (this.scrollMemory = new t9()),
            (this.codecPromise = null),
            (this.fullscreenReadable = !1),
            (this.readNodeScrollTop = (e) => this.scrollMemory.read(e)),
            (this.readNodeScrollAnchor = (e) =>
              this.scrollMemory.readAnchor(e)),
            (this.rememberNodeScrollTop = (e, t, i) => {
              this.scrollMemory.remember(e, t, i);
            }),
            (this.recordToolAction = (e) => {
              var t, i;
              this.snapshot.nodeId &&
                (null == (t = (i = this.input).reportToolAction) ||
                  t.call(i, this.snapshot.nodeId, e));
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.subscribeSerializationNotices = (e) => (
              this.serializationNoticeListeners.add(e),
              () => this.serializationNoticeListeners.delete(e)
            )),
            (this.environmentStops = [
              e.canvas.actions.subscribe(() => this.syncWriteCapability()),
            ]));
        }
      }
      function it(e) {
        return { ok: !1, reason: "commandFailed", ...(e ? { code: e } : {}) };
      }
      function ii(e, t) {
        return {
          documentEllipsisCount: is(
            t.issues,
            (e) => "documentEllipsis" === e.fallback,
          ),
          documentPlainTextCount: is(
            t.issues,
            (e) => "documentPlainText" === e.fallback,
          ),
          ellipsisCount: is(t.issues, (e) => "ellipsis" === e.fallback),
          invalidMarkdownCount: is(
            t.issues,
            (e) => "invalidMarkdown" === e.reason,
          ),
          issueCount: t.issues.length + t.omittedIssueCount,
          nodeId: e,
          omittedIssueCount: t.omittedIssueCount,
          plainTextCount: is(t.issues, (e) => "plainText" === e.fallback),
          tablePlaceholderCount: is(
            t.issues,
            (e) => "tablePlaceholder" === e.fallback,
          ),
          tableTooLargeCount: is(t.issues, (e) => "tableTooLarge" === e.reason),
          tooDeepCount: is(t.issues, (e) => "tooDeep" === e.reason),
          unexpectedCount: is(t.issues, (e) => "unexpected" === e.reason),
          unsupportedContentCount: is(
            t.issues,
            (e) => "unsupportedContent" === e.reason,
          ),
        };
      }
      function is(e, t) {
        let i = 0;
        for (let s of e) t(s) && (i += 1);
        return i;
      }
      var io = i(32154),
        ir = i(43667),
        ia = i(32312);
      let il = {
          first: "video-first-frame-capture",
          last: "video-last-frame-capture",
        },
        id = Object.freeze({ status: "inactive" }),
        iu = new Set(["corsDenied", "sourceUnavailable"]),
        ic = 0;
      class ih {
        async buildFrameIndex(e) {
          try {
            var t;
            let i = await this.runWithSourceUrlRecovery(e, (t) =>
              this.dependencies.frameIndexService.build(
                {
                  generation: e.generation,
                  sourceResourceId: e.source.resourceId,
                  sourceUrl: t,
                },
                e.controller.signal,
              ),
            );
            if (this.session !== e || e.controller.signal.aborted) return;
            ((e.frameIndex = i),
              (e.currentTimeMs =
                (null == (t = i.frames[0]) ? void 0 : t.timestampMs) ?? 0),
              this.seek(e.currentTimeMs),
              this.publishActive(e, { phase: "idle" }));
          } catch (t) {
            if (this.session !== e || e.controller.signal.aborted) return;
            (this.dependencies.logger.error(
              "video frame index build failed",
              t,
              { sessionId: e.sessionId, stage: "frame_index" },
            ),
              this.publishActive(e, {
                phase: "failed",
                reason: "capture",
                retryable: !0,
              }));
          } finally {
            e.indexPending = void 0;
          }
        }
        async launchResultNodes(e) {
          var t, i;
          let s = this.resolveFreshSource(e.source.nodeId);
          if (
            !s ||
            ((t = e.source),
            (i = s),
            t.nodeId !== i.nodeId ||
              t.resourceId !== i.resourceId ||
              t.durationMs !== i.durationMs ||
              t.width !== i.width ||
              t.height !== i.height)
          )
            return (
              e.viewAttached &&
                this.publishActive(e, {
                  phase: "failed",
                  reason: "source",
                  retryable: !1,
                }),
              !1
            );
          let n = this.ensurePlan(e);
          if (!n || 0 === n.length) return !1;
          e.viewAttached && this.publishActive(e, { phase: "submitting" });
          let o = e.source.sourceUrl,
            r = await this.dependencies.resultNodeOwner.launchMany(
              n.map((t) => {
                var i;
                return {
                  mediaKind: "image",
                  nodeTitle: t.title,
                  origin: il[e.resultMode] ?? "video-frame-capture",
                  postEditCapability:
                    "first" === (i = e.resultMode)
                      ? "videoFrameFirst"
                      : "last" === i
                        ? "videoFrameLast"
                        : "videoFrameCustom",
                  placement: t.placement,
                  sourceNodeId: e.source.nodeId,
                  produce: async (e) => {
                    let { signal: i } = e,
                      s = await ig(
                        this.dependencies.materializer,
                        {
                          outputName: `${t.title}.jpg`,
                          sourceUrl: o,
                          targetTimeMs: t.capture.targetTimeMs,
                        },
                        i,
                      );
                    if (!this.dependencies.resultNodeOwner.getState().available)
                      throw Error(
                        "Video frame materialization blocked before upload.",
                      );
                    return { file: s.file };
                  },
                };
              }),
            );
          return (
            !!r.ok ||
            (this.dependencies.logger.error(
              "video frame capture result nodes were not created",
              r.reason,
              {
                itemCount: n.length,
                sessionId: e.sessionId,
                stage: "result_node_launch",
              },
            ),
            !1)
          );
        }
        ensurePlan(e) {
          let t = e.frozenPlan;
          if (!t) {
            let t = this.freezePlan(e);
            return (t && (e.frozenPlan = t), t);
          }
          let i = new Set(t.map((e) => e.capture.captureId)),
            s = e.captures.filter((e) => !i.has(e.captureId));
          if (0 === s.length) return t;
          let n = this.freezePlan(e, s, t.length);
          return n ? ((e.frozenPlan = [...t, ...n]), e.frozenPlan) : t;
        }
        freezePlan(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e.captures,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            s =
              "custom" === e.resultMode
                ? this.dependencies.getFrameSequenceStart(e.source.nodeId)
                : 0,
            n = this.dependencies.getSourceBounds(e.source.nodeId);
          if (!n) return null;
          let o = (0, l.Px)(e.source.width, e.source.height, "image");
          return t.map((t, r) => {
            var a, l, d;
            let u = i + r;
            return {
              capture: t,
              placement: {
                x: n.x + n.width + 64 + u * (o.width + 64),
                y: n.y,
                width: o.width,
                height: o.height,
              },
              title:
                ((a = e.source.title),
                (l = e.resultMode),
                (d = s + u),
                "first" === l
                  ? (0, io.Ls)(a)
                  : "last" === l
                    ? (0, io.bK)(a)
                    : (0, io.P_)(a, d)),
            };
          });
        }
        createSession(e, t, i) {
          let s = ++this.generation;
          return {
            captures: [],
            controller: new AbortController(),
            currentTimeMs: 0,
            generation: s,
            playing: !1,
            resultMode: i,
            sessionId: `video-frame-capture-${s}`,
            source: e,
            sourceUrlRecoveryAttempted: !1,
            viewAttached: t,
          };
        }
        async runWithSourceUrlRecovery(e, t) {
          try {
            return await t(e.source.sourceUrl);
          } catch (n) {
            let i = this.dependencies.recoverSourceUrl;
            if (
              e.sourceUrlRecoveryAttempted ||
              !i ||
              e.controller.signal.aborted
            )
              throw n;
            e.sourceUrlRecoveryAttempted = !0;
            let s = (await i(e.source.resourceId, e.controller.signal)).trim();
            if (!s) throw n;
            return (
              (e.source = Object.freeze({ ...e.source, sourceUrl: s })),
              e.viewAttached && this.publishActive(e, ib(this.snapshot)),
              t(s)
            );
          }
        }
        attachSourcePlayback(e) {
          let t = this.dependencies.sourceVideoElements;
          if (!t || !e.viewAttached) return;
          let i = () => {
            var i;
            let s;
            (null == (i = e.unbindSourcePlayback) || i.call(e),
              (e.unbindSourcePlayback = void 0));
            let n = t.get(e.source.nodeId);
            if (!n) return;
            let o = () => {
                void 0 !== s && (cancelAnimationFrame(s), (s = void 0));
              },
              r = () => {
                this.session === e &&
                  e.viewAttached &&
                  ((e.currentTimeMs = iI(
                    1e3 * n.currentTime,
                    0,
                    e.source.durationMs,
                  )),
                  (e.playing = !n.paused && !n.ended),
                  this.publishActive(e, ib(this.snapshot)));
              },
              a = () => {
                (o(),
                  n.paused ||
                    n.ended ||
                    (s = requestAnimationFrame(() => {
                      ((s = void 0), r(), a());
                    })));
              },
              l = () => {
                (r(), a());
              },
              d = () => {
                (o(), r());
              };
            (n.addEventListener("ended", d),
              n.addEventListener("pause", d),
              n.addEventListener("play", l),
              n.addEventListener("seeked", r),
              n.addEventListener("timeupdate", r),
              (n.currentTime =
                iI(e.currentTimeMs, 0, e.source.durationMs) / 1e3),
              r(),
              (e.unbindSourcePlayback = () => {
                (o(),
                  n.removeEventListener("ended", d),
                  n.removeEventListener("pause", d),
                  n.removeEventListener("play", l),
                  n.removeEventListener("seeked", r),
                  n.removeEventListener("timeupdate", r));
              }));
          };
          ((e.unsubscribeSourceVideo = t.subscribe(e.source.nodeId, i)), i());
        }
        detachSourcePlayback(e) {
          var t, i, s, n;
          (null == (i = this.dependencies.sourceVideoElements) ||
            null == (t = i.get(e.source.nodeId)) ||
            t.pause(),
            null == (s = e.unbindSourcePlayback) || s.call(e),
            null == (n = e.unsubscribeSourceVideo) || n.call(e),
            (e.unbindSourcePlayback = void 0),
            (e.unsubscribeSourceVideo = void 0),
            (e.playing = !1));
        }
        resolveSource(e) {
          let t = this.dependencies.resultNodeOwner.getState();
          if (!t.available) return { ok: !1, reason: t.reason };
          let i = 1 === e.length ? e[0] : void 0;
          if (!i) return im("UNSUPPORTED_SELECTION");
          let s = this.resolveFreshSource(i);
          return s ? { ok: !0, value: s } : im("SOURCE_RESOURCE_UNAVAILABLE");
        }
        resolveFreshSource(e) {
          let t = this.dependencies.getObjectSnapshot(e);
          if ((null == t ? void 0 : t.type) !== "video") return null;
          let i = (0, ir.V2)({
            nodeId: e,
            primaryResourceId: t.data.resourceId,
            resources: this.dependencies.getResourceBindings(e),
            title: t.data.title,
          });
          return (null == i ? void 0 : i.sourceUrl) &&
            i.durationMs &&
            i.width &&
            i.height
            ? Object.freeze({
                durationMs: i.durationMs,
                height: i.height,
                nodeId: i.nodeId,
                ...(i.posterUrl ? { posterUrl: i.posterUrl } : {}),
                resourceId: i.resourceId,
                sourceUrl: i.sourceUrl,
                title: i.title,
                width: i.width,
              })
            : null;
        }
        stopPlaybackWhenSubmissionBlocksControls(e, t) {
          var i, s;
          "idle" !== t.phase &&
            (null == (s = this.dependencies.sourceVideoElements) ||
              null == (i = s.get(e.source.nodeId)) ||
              i.pause(),
            (e.playing = !1));
        }
        publishActive(e, t) {
          e.viewAttached &&
            (this.stopPlaybackWhenSubmissionBlocksControls(e, t),
            (this.snapshot = Object.freeze({
              captures: this.projectCaptureDrafts(e.captures),
              currentTimeMs: e.currentTimeMs,
              ...(e.frameIndex ? { frameIndex: e.frameIndex } : {}),
              playing: e.playing,
              sessionId: e.sessionId,
              source: e.source,
              status: "active",
              submission: Object.freeze({ ...t }),
            })),
            this.notify());
        }
        projectCaptureDrafts(e) {
          return (
            this.captureDraftsSource !== e &&
              ((this.captureDraftsSource = e),
              (this.captureDrafts = Object.freeze(e.map(ip)))),
            this.captureDrafts
          );
        }
        publishInactive() {
          ((this.snapshot = id), this.notify());
        }
        beginFocusPresentation(e) {
          ((this.focusPresentation = (0, a.FX)(this.dependencies.viewport)),
            this.focusPresentation.present((0, ir.XZ)(e)));
        }
        cancelFocusPresentation() {
          var e;
          (null == (e = this.focusPresentation) || e.cancel(),
            (this.focusPresentation = null));
        }
        releaseCapturePreviews(e) {
          for (let t of e) t.previewUrl && URL.revokeObjectURL(t.previewUrl);
        }
        notify() {
          var e;
          let t =
            (null == (e = this.session) ? void 0 : e.viewAttached) === !0
              ? this.session.source.nodeId
              : null;
          if (this.notifiedSourceNodeId !== t) {
            let e = this.notifiedSourceNodeId;
            if (((this.notifiedSourceNodeId = t), e))
              for (let t of [...(this.sourceListeners.get(e) ?? [])]) t();
            if (t) for (let e of [...(this.sourceListeners.get(t) ?? [])]) e();
          }
          for (let e of [...this.listeners]) e();
        }
        constructor(e) {
          var t = this;
          ((this.dependencies = e),
            (this.listeners = new Set()),
            (this.sourceListeners = new Map()),
            (this.notifiedSourceNodeId = null),
            (this.focusPresentation = null),
            (this.session = null),
            (this.snapshot = id),
            (this.generation = 0),
            (this.captureSequence = 0),
            (this.captureDraftsSource = null),
            (this.captureDrafts = Object.freeze([])),
            (this.abort = () => {
              var e, t;
              let i = this.session;
              i &&
                (this.cancelFocusPresentation(),
                i.controller.abort(),
                this.detachSourcePlayback(i),
                this.releaseCapturePreviews(i.captures),
                null == (e = (t = this.dependencies.materializer).dispose) ||
                  e.call(t),
                (this.session = null),
                this.publishInactive());
            }),
            (this.close = () => {
              let e = this.session;
              if (e) {
                if (e.pending) {
                  (this.cancelFocusPresentation(),
                    (e.viewAttached = !1),
                    this.detachSourcePlayback(e),
                    this.releaseCapturePreviews(e.captures),
                    this.publishInactive());
                  return;
                }
                this.abort();
              }
            }),
            (this.dispose = () => {
              var e, t;
              (this.abort(),
                this.dependencies.frameIndexService.clear(),
                null == (e = (t = this.dependencies.materializer).dispose) ||
                  e.call(t),
                this.listeners.clear(),
                this.sourceListeners.clear());
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.isSourceActive = (e) => {
              var t;
              return (
                (null == (t = this.session) ? void 0 : t.viewAttached) === !0 &&
                this.session.source.nodeId === e
              );
            }),
            (this.open = function (e) {
              var i, s, n, o, r;
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if (!(0, tr.F)(a, e, t.dependencies.getObjectSnapshot))
                return im("SOURCE_CHANGED");
              if (null == (i = t.session) ? void 0 : i.pending)
                return im("CAPTURE_BUSY");
              let l = t.resolveSource(e);
              if (!l.ok) return l;
              t.abort();
              let d = t.createSession(l.value, !0, "custom");
              return (
                (t.session = d),
                t.attachSourcePlayback(d),
                t.beginFocusPresentation(d.source.nodeId),
                null == (s = (n = t.dependencies).onOpened) || s.call(n),
                null == (o = (r = t.dependencies).reportPostEditAction) ||
                  o.call(r, d.source.nodeId, "frame_extraction"),
                t.publishActive(d, { phase: "indexing" }),
                (d.indexPending = t.buildFrameIndex(d)),
                { ok: !0, value: { sessionId: d.sessionId } }
              );
            }),
            (this.captureQuick = async (e, t) => {
              var i, s, n, o, r, a, l;
              if (null == (i = this.session) ? void 0 : i.pending)
                return im("CAPTURE_BUSY");
              let d = this.resolveSource(t);
              if (!d.ok) return d;
              this.abort();
              let u = this.createSession(d.value, !1, e);
              ((this.session = u),
                null == (s = (n = this.dependencies).onOpened) || s.call(n),
                null == (o = (r = this.dependencies).reportPostEditAction) ||
                  o.call(
                    r,
                    u.source.nodeId,
                    "first" === e
                      ? "capture_first_frame"
                      : "capture_last_frame",
                  ));
              try {
                let t = await this.runWithSourceUrlRecovery(u, (e) =>
                  this.dependencies.frameIndexService.build(
                    {
                      generation: u.generation,
                      sourceResourceId: u.source.resourceId,
                      sourceUrl: e,
                    },
                    u.controller.signal,
                  ),
                );
                u.frameIndex = t;
                let i = "first" === e ? 0 : t.totalFrameCount - 1,
                  s = t.frames[i];
                if (!s) return im("FRAME_INDEX_UNAVAILABLE");
                return (
                  (u.captures = [
                    {
                      captureId: this.createCaptureId(),
                      capturedSequence: ++this.captureSequence,
                      previewUrl: "",
                      targetFrameIndex: i,
                      targetTimeMs: s.timestampMs,
                    },
                  ]),
                  (await this.launchResultNodes(u))
                    ? { ok: !0, value: {} }
                    : im("FRAME_UPLOAD_FAILED")
                );
              } catch (e) {
                return im("FRAME_CAPTURE_FAILED", e);
              } finally {
                this.session === u &&
                  (u.controller.abort(),
                  this.detachSourcePlayback(u),
                  this.releaseCapturePreviews(u.captures),
                  null == (a = (l = this.dependencies.materializer).dispose) ||
                    a.call(l),
                  (this.session = null));
              }
            }),
            (this.capture = async () => {
              var e, t;
              let i = this.session;
              if (
                !(null == i ? void 0 : i.viewAttached) ||
                i.pending ||
                i.captures.length >= 20 ||
                (null == (e = (t = this.dependencies).reportPostEditAction) ||
                  e.call(t, i.source.nodeId, "capture_frame"),
                !i.frameIndex &&
                  (await (i.indexPending ??
                    (i.indexPending = this.buildFrameIndex(i))),
                  this.session !== i || !i.frameIndex))
              )
                return;
              this.publishActive(i, { phase: "capturing" });
              let s = (function (e, t) {
                  let i = 0,
                    s = e.frames.length - 1,
                    n = 0;
                  for (; i <= s; ) {
                    var o;
                    let r = Math.floor((i + s) / 2);
                    ((null == (o = e.frames[r]) ? void 0 : o.timestampMs) ??
                      1 / 0) <= t
                      ? ((n = r), (i = r + 1))
                      : (s = r - 1);
                  }
                  return n;
                })(i.frameIndex, i.currentTimeMs),
                n = i.frameIndex.frames[s];
              if (!n)
                return void this.publishActive(i, {
                  phase: "failed",
                  reason: "capture",
                  retryable: !0,
                });
              let o = this.createCaptureId();
              try {
                let e = await this.runWithSourceUrlRecovery(i, (e) =>
                  this.dependencies.materializer.materialize(
                    {
                      maxEdgePx: 360,
                      outputName: `frame-${o}.jpg`,
                      sourceUrl: e,
                      targetTimeMs: n.timestampMs,
                    },
                    i.controller.signal,
                  ),
                );
                if (this.session !== i || i.controller.signal.aborted) return;
                let t = URL.createObjectURL(e.file);
                ((i.captures = [
                  ...i.captures,
                  {
                    captureId: o,
                    capturedSequence: ++this.captureSequence,
                    previewUrl: t,
                    targetFrameIndex: s,
                    targetTimeMs: n.timestampMs,
                  },
                ]),
                  this.publishActive(i, { phase: "idle" }));
              } catch (e) {
                if (this.session !== i || i.controller.signal.aborted) return;
                (this.dependencies.logger.error(
                  "video frame capture materialize failed",
                  e,
                  {
                    captureId: o,
                    sessionId: i.sessionId,
                    stage: "frame_capture",
                  },
                ),
                  this.publishActive(i, {
                    phase: "failed",
                    reason: "capture",
                    retryable: !0,
                  }));
              }
            }),
            (this.remove = (e) => {
              let t = this.session;
              if (!(null == t ? void 0 : t.viewAttached) || t.pending) return;
              let i = t.captures.find((t) => t.captureId === e);
              i &&
                (i.previewUrl && URL.revokeObjectURL(i.previewUrl),
                (t.captures = t.captures.filter((t) => t.captureId !== e)),
                t.frozenPlan &&
                  (t.frozenPlan = t.frozenPlan.filter(
                    (t) => t.capture.captureId !== e,
                  )),
                this.publishActive(t, { phase: "idle" }));
            }),
            (this.confirm = async () => {
              var e, t, i, s;
              let n = this.session;
              if (
                !(null == n ? void 0 : n.viewAttached) ||
                0 === n.captures.length
              )
                return;
              if (n.pending) return void (await n.pending);
              this.cancelFocusPresentation();
              let o = this.launchResultNodes(n);
              n.pending = o;
              try {
                let i = await o;
                if (this.session !== n) return;
                if (i) {
                  (this.cancelFocusPresentation(),
                    this.detachSourcePlayback(n),
                    this.releaseCapturePreviews(n.captures),
                    null ==
                      (e = (t = this.dependencies.materializer).dispose) ||
                      e.call(t),
                    (this.session = null),
                    this.publishInactive());
                  return;
                }
                n.viewAttached &&
                  (this.beginFocusPresentation(n.source.nodeId),
                  this.publishActive(n, {
                    phase: "failed",
                    reason: "capture",
                    retryable: !0,
                  }));
              } catch (e) {
                (this.dependencies.logger.error(
                  "video frame capture result node launch failed",
                  e,
                  { sessionId: n.sessionId, stage: "session_submit" },
                ),
                  this.session === n &&
                    n.viewAttached &&
                    (this.beginFocusPresentation(n.source.nodeId),
                    this.publishActive(n, {
                      phase: "failed",
                      reason: "capture",
                      retryable: !0,
                    })));
              } finally {
                (n.pending === o && (n.pending = void 0),
                  n.viewAttached ||
                    this.session !== n ||
                    (null ==
                      (i = (s = this.dependencies.materializer).dispose) ||
                      i.call(s),
                    (this.session = null)));
              }
            }),
            (this.play = async () => {
              var e;
              let t = this.session;
              if (!(null == t ? void 0 : t.viewAttached) || t.pending) return;
              let i =
                null == (e = this.dependencies.sourceVideoElements)
                  ? void 0
                  : e.get(t.source.nodeId);
              i &&
                ((i.ended || 1e3 * i.currentTime >= t.source.durationMs - 1) &&
                  ((i.currentTime = 0), (t.currentTimeMs = 0)),
                await i.play(),
                (t.playing = !0),
                this.publishActive(t, { phase: "idle" }));
            }),
            (this.pause = () => {
              var e, t;
              let i = this.session;
              i &&
                (null == (t = this.dependencies.sourceVideoElements) ||
                  null == (e = t.get(i.source.nodeId)) ||
                  e.pause(),
                (i.playing = !1),
                i.viewAttached && this.publishActive(i, ib(this.snapshot)));
            }),
            (this.seek = (e) => {
              var t;
              let i = this.session;
              if (
                !(null == i ? void 0 : i.viewAttached) ||
                i.pending ||
                !Number.isFinite(e)
              )
                return;
              this.pause();
              let s = iI(e, 0, Math.max(0, i.source.durationMs - 1));
              i.currentTimeMs = s;
              let n =
                null == (t = this.dependencies.sourceVideoElements)
                  ? void 0
                  : t.get(i.source.nodeId);
              (n && (n.currentTime = s / 1e3),
                this.publishActive(i, { phase: "idle" }));
            }),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.subscribeSource = (e, t) => {
              let i = this.sourceListeners.get(e) ?? new Set();
              return (
                i.add(t),
                this.sourceListeners.set(e, i),
                () => {
                  (i.delete(t), 0 === i.size && this.sourceListeners.delete(e));
                }
              );
            }),
            (this.createCaptureId = e.createCaptureId ?? iv));
        }
      }
      function ip(e) {
        return Object.freeze({ ...e });
      }
      function im(e, t) {
        if (void 0 !== t) {
          var i, s;
          null == (i = (s = globalThis).reportError) ||
            i.call(
              s,
              Error("Video frame capture command failed.", { cause: t }),
            );
        }
        return { code: e, ok: !1, reason: "commandFailed" };
      }
      function ib(e) {
        return "active" === e.status ? e.submission : { phase: "idle" };
      }
      async function ig(e, t, i) {
        try {
          return await e.materialize(t, i);
        } catch (e) {
          if (e instanceof ia.U && iu.has(e.reason))
            throw new A(e.message, { cause: e });
          throw e;
        }
      }
      function iv() {
        return "function" == typeof crypto.randomUUID
          ? crypto.randomUUID()
          : `video-frame-capture-${Date.now()}-${++ic}`;
      }
      function iI(e, t, i) {
        return Math.min(i, Math.max(t, e));
      }
      var iS = i(82646),
        iy = i(61685),
        iE = i(55953),
        iw = i(38687),
        iA = i(25104),
        iC = i(68591),
        iR = i(45008);
      function ik(e, t, i, s) {
        if (t.every((t) => i_(e.getObjectSnapshot(t.nodeId), t.resourceId)))
          return { cancel: () => void 0, promise: Promise.resolve("arrived") };
        let n = () => void 0;
        return {
          cancel: () => n(),
          promise: new Promise((o, r) => {
            let a,
              l = !1,
              d = [],
              u = () => {
                var e;
                for (
                  void 0 !== a && clearTimeout(a), a = void 0;
                  d.length > 0;
                )
                  null == (e = d.pop()) || e();
              },
              c = (e) => {
                l || ((l = !0), i.removeEventListener("abort", h), u(), o(e));
              },
              h = () => c("aborted");
            ((n = () => c("aborted")),
              i.addEventListener("abort", h, { once: !0 }),
              (a = setTimeout(() => c("deadline"), Math.max(0, s))));
            try {
              if (i.aborted) return void h();
              let s = () => {
                t.every((t) =>
                  i_(e.getObjectSnapshot(t.nodeId), t.resourceId),
                ) && c("arrived");
              };
              for (let i of t) {
                let t = e.subscribeObjectSnapshot(i.nodeId, s);
                if (l) return void t();
                d.push(t);
              }
              s();
            } catch (e) {
              if (l) return;
              ((l = !0), i.removeEventListener("abort", h), u(), r(e));
            }
          }),
        };
      }
      function i_(e, t) {
        return (
          (null == e ? void 0 : e.type) === "video" &&
          (e.data.resourceId === t ||
            e.data.resourceBatches.some((e) => e.resourceIds.includes(t)))
        );
      }
      var iO = i(80841),
        iP = i(92871),
        iD = i(63332);
      let iN = { 2: "image", 3: "video", 4: "audio", 5: "subject" },
        iU = "VIDEO_EDIT_SUBMIT_CANCELLED",
        iT = "VIDEO_EDIT_COMMERCE_UNAVAILABLE",
        iM = "VIDEO_EDIT_GENERATION_CONFIG_UNAVAILABLE",
        ix = "VIDEO_EDIT_PROJECT_UNAVAILABLE",
        iF = "VIDEO_EDIT_REFERENCE_DURATION_UNAVAILABLE",
        ij = "VIDEO_EDIT_REFERENCE_METADATA_UNAVAILABLE",
        iL = "VIDEO_EDIT_REFERENCE_UPLOAD_INVALID";
      class iz extends Error {
        constructor(e) {
          (super(e),
            (this.reason = e),
            (this.name = "VideoEditPreparationError"));
        }
      }
      class iB {
        getState(e) {
          let t = this.readEditBlockReason();
          return t
            ? i2(t)
            : this.dependencies.getProjectId().trim()
              ? this.resolveDefaults(e)
                ? { available: !0 }
                : i2(iM)
              : i2(ix);
        }
        getReferenceConstraint(e) {
          let t = this.resolveDefaults(e);
          if (t)
            return (0, iD.sZ)(
              this.dependencies.referenceConstraints.getVideoConstraintForModel(
                t.modelName,
                e6.wY.MultiModal,
              ),
            );
        }
        getCommerceAction(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "edit";
          if (!(0, iP.b)(e.prompt)) return null;
          let i = this.resolveDefaults("edit" === t ? e.source : void 0);
          if (!i) return null;
          try {
            let t = iq(e),
              s = iX(e, t.length + 1),
              n = this.resolveSubjectMaterialSnapshots(s),
              o = n
                .filter((e) => void 0 !== e)
                .map((e) => {
                  let { fact: t } = e;
                  return t;
                });
            if ((0, iD.SN)(t, o)) return null;
            let r = [
              { role: 4, type: 3, vid: e.source.vid },
              ...t.map((e) => ({ role: 3, type: iZ(e.type) })),
              ...s.map(i$),
            ];
            return (0, iC.jR)(
              {
                duration_ms: (0, iO.pq)(e.source.durationMs),
                materials: r,
                mode: e6.wY.MultiModal,
                model_name: i.modelName,
                outputCount: 1,
                resolution: (0, iO.N)({
                  supportedResolutions: i.resolutions,
                  declaredResolution: e.source.resolution,
                  fallback: i.resolution,
                }),
              },
              iJ(
                (function (e, t) {
                  let i = iY(e.source.durationMs / 1e3);
                  for (let e of t)
                    if ("video" === e.type) {
                      if (void 0 === e.durationMs) throw new iz(iF);
                      i += iY(e.durationMs / 1e3);
                    }
                  return i;
                })(e, t),
                n.map((e) => (null == e ? void 0 : e.fact)),
              ),
            );
          } catch (e) {
            if (e instanceof iy.aU || e instanceof iz) return null;
            throw e;
          }
        }
        async submit(e, t, i) {
          var n, o, r, a, l;
          let d, u;
          if (i.aborted) return i0(iU);
          let c = this.readEditBlockReason();
          if (c) return i0(c);
          let h = this.dependencies.getProjectId().trim();
          if (!h) return i0(ix);
          let p = this.resolveDefaults(e.source);
          if (!p) return i0(iM);
          if (!(0, iP.b)(e.prompt)) return i0("VIDEO_EDIT_PROMPT_TOO_LONG");
          if (!this.getCommerceAction(e))
            return i0("VIDEO_EDIT_QUOTE_UNAVAILABLE");
          try {
            let s = iq(e),
              o = this.resolveReferencePlan(e, t, p, s),
              u =
                ((r = e),
                (a = s),
                (l = o.subjectMaterials),
                JSON.stringify([
                  [
                    r.source.nodeId,
                    r.source.resourceId,
                    r.source.vid,
                    r.source.title,
                    r.source.durationMs,
                    r.source.width,
                    r.source.height,
                    r.source.generationKind,
                    r.source.modelName,
                  ],
                  r.prompt,
                  a,
                  l,
                ]));
            d =
              (null == (n = this.ambiguousAttempt) ? void 0 : n.signature) === u
                ? this.ambiguousAttempt.generation
                : await this.prepareGeneration(e, p, o, u, i);
          } catch (e) {
            if (i.aborted) return i0(iU);
            if (e instanceof iz) return i0(e.reason);
            return i0("VIDEO_EDIT_REFERENCE_UPLOAD_UNAVAILABLE");
          }
          if (i.aborted) return i0(iU);
          if (
            "invalid" ===
            this.dependencies.configStore.validate(d.params).status
          )
            return i0("VIDEO_EDIT_GENERATION_CONFIG_INVALID");
          try {
            let t = (0, iC.jR)(
              {
                ...d.params,
                duration_ms: (0, iO.pq)(e.source.durationMs),
                outputCount: 1,
              },
              d.commerceContext,
            );
            u = await this.dependencies.commercial.execute(t, async (t) => {
              let { options: n, dispose: o } = (0, s.pt)(t, i);
              try {
                if (n.signal.aborted) return i0(iU);
                let i = this.readEditBlockReason();
                if (i) return i0(i);
                let s = t.selection.benefitType.trim();
                if (!s) return i0(iT);
                let o = this.prepareAttempt(d, s, t);
                if (o.rejection) return o.rejection;
                let r = o.attempt;
                if (!r) return i0(iT);
                return await this.submitAttempt(h, e, r, n.signal, t);
              } finally {
                o();
              }
            });
          } catch (e) {
            if (i.aborted) return i0(iU);
            return (
              null == (o = this.dependencies.logger) ||
                o.error("canvas.video_edit.commerce_execute_failed", e),
              i0(iT)
            );
          }
          switch (u.status) {
            case "executed":
              return u.value;
            case "blocked":
              return i1("VIDEO_EDIT_COMMERCE_BLOCKED");
            case "cancelled":
              return i1(iU);
            case "error":
            case "unavailable":
              return i0(iT);
          }
        }
        readEditBlockReason() {
          let e = this.dependencies.getEditAvailability().local;
          return e.available
            ? null
            : "notEditable" === e.reason
              ? "VIDEO_EDIT_PERMISSION_DENIED"
              : "VIDEO_EDIT_NOT_EDITING_READY";
        }
        resolveDefaults(e) {
          return (0, iO.qR)(this.dependencies, e);
        }
        resolveSubjectMaterialSnapshots(e) {
          return e.map((e) => {
            let { subjectNodeId: t } = e,
              i = this.dependencies.getObjectSnapshot(t);
            if ((null == i ? void 0 : i.type) !== "subject" || !i.data.main)
              return;
            let s = (0, iR.O)(i.data.main, {
              getNode: this.dependencies.getObjectSnapshot,
            });
            if ("resolved" !== s.kind) return;
            let n = (0, iA.mA)(i, {
              getNode: this.dependencies.getObjectSnapshot,
              getResource: (e, t) =>
                this.dependencies
                  .getResourceBindings(t)
                  .find((t) => t.resource_id === e),
            });
            return n
              ? { fact: n, resourceId: s.resourceId, subjectNodeId: t }
              : void 0;
          });
        }
        async prepareGeneration(e, t, i, s, n) {
          var o, r, a;
          let l,
            d,
            u = await this.uploadReferences(i.localReferences, n);
          iK(
            [
              iH(e),
              ...u.map(iG),
              ...i.subjectMaterials.map((e) => {
                let { fact: t } = e;
                return t;
              }),
            ],
            i.constraint,
          );
          let c = [
              { role: 4, type: 3, vid: e.source.vid },
              ...u.map(iV),
              ...i.subjects.map(i$),
            ],
            h =
              ((o = e),
              (r = u),
              (a = i.subjects),
              (l = new Map(r.map((e) => [e.metadata.id, e]))),
              (d = new Map(a.map((e) => [e.subjectNodeId, e]))),
              o.prompt.map((e) => {
                if ("text" === e.type) return { text: e.text, type: 1 };
                if ("reference" === e.type) {
                  let t = l.get(e.referenceId);
                  if (!t) throw new iz(ij);
                  return {
                    material_idx: t.materialIndex,
                    type: t.mediaType,
                    ...(function (e) {
                      if (2 !== e.mediaType) return {};
                      let { frameTimeMs: t } = e.metadata;
                      return void 0 === t
                        ? {}
                        : {
                            source_info: {
                              source_material_idx: 0,
                              timestamp_ms: t,
                            },
                          };
                    })(t),
                  };
                }
                let t = d.get(e.subjectNodeId);
                if (!t) throw new iz(ij);
                return { material_idx: t.materialIndex, type: 5 };
              })),
            p = {
              aspect_ratio: t.aspectRatio,
              duration_ms: t.durationMs,
              materials: c,
              meta_list: h,
              mode: e6.wY.MultiModal,
              model_name: t.modelName,
              prompt: h
                .map((e) => {
                  if (1 === e.type) return (0, iE.mh)(e.text ?? "");
                  if (6 === e.type || void 0 === e.material_idx)
                    throw new iz(ij);
                  return (0, iE.wG)(iN[e.type], e.material_idx);
                })
                .join(""),
              resolution: (0, iO.N)({
                supportedResolutions: t.resolutions,
                declaredResolution: e.source.resolution,
                fallback: t.resolution,
              }),
              seed: Math.floor(0x100000000 * Math.random()),
            };
          return {
            commerceContext: iJ(
              (function (e, t) {
                let i = iY(e.source.durationMs / 1e3);
                for (let e of t) {
                  if (3 !== e.mediaType) continue;
                  let t = iQ(e);
                  if (void 0 === t) throw new iz(iF);
                  i += iY(t);
                }
                return i;
              })(e, u),
              i.subjectMaterials.map((e) => {
                let { fact: t } = e;
                return t;
              }),
            ),
            params: p,
            referenceSources: i.localReferences.flatMap((e) => {
              let { asset: t, materialIndex: i } = e;
              return t.referenceSource
                ? [(0, iS.hy)(i, t.referenceSource)]
                : [];
            }),
            signature: s,
          };
        }
        resolveReferencePlan(e, t, i, s) {
          let n = s.map((e, i) => {
              let s = t.get(e.id);
              if (!s || s.referenceId !== e.id) throw new iz(ij);
              return {
                asset: s,
                materialIndex: i + 1,
                mediaType: iZ(e.type),
                metadata: e,
              };
            }),
            o = iX(e, n.length + 1),
            r = this.resolveSubjectMaterialSnapshots(o).filter(
              (e) => void 0 !== e,
            );
          if (r.length !== o.length) throw new iz(ij);
          let a = (0, iD.sZ)(
            this.dependencies.referenceConstraints.getVideoConstraintForModel(
              i.modelName,
              e6.wY.MultiModal,
            ),
          );
          return (
            iK(
              [
                iH(e),
                ...n.map(iW),
                ...r.map((e) => {
                  let { fact: t } = e;
                  return t;
                }),
              ],
              a,
            ),
            {
              constraint: a,
              localReferences: n,
              subjectMaterials: r,
              subjects: o,
            }
          );
        }
        async uploadReferences(e, t) {
          let i = [];
          for (let n of e) {
            var s;
            if (t.aborted) throw new iz(iU);
            let { asset: e, materialIndex: o, mediaType: r, metadata: a } = n,
              l =
                e.ready ??
                (await this.dependencies.upload.upload(
                  { file: e.file, validationProfile: "video-edit-reference" },
                  { signal: t },
                ));
            if (l.mediaType !== a.type || !l.storageKey.trim())
              throw new iz(iL);
            i.push({
              fileSizeBytes:
                (null == (s = e.file) ? void 0 : s.size) ?? e.fileSizeBytes,
              materialIndex: o,
              mediaType: r,
              metadata: a,
              upload: l,
            });
          }
          return i;
        }
        prepareAttempt(e, t, i) {
          let s = this.ambiguousAttempt;
          return (null == s ? void 0 : s.signature) === e.signature
            ? s.benefitType !== t ||
              JSON.stringify(s.consumption) !== JSON.stringify(i.consumption)
              ? { rejection: i0("VIDEO_EDIT_SUBMIT_SELECTION_CHANGED") }
              : { attempt: s }
            : (s && (this.ambiguousAttempt = null),
              {
                attempt: {
                  consumption: i.consumption,
                  benefitType: t,
                  generation: e,
                  nodeId: (this.dependencies.createNodeId ?? d.XG)(),
                  resourceId: (this.dependencies.createResourceId ?? d.ve)(),
                  signature: e.signature,
                  submitId: (this.dependencies.createSubmitId ?? d.pf)(),
                },
              });
        }
        async submitAttempt(e, t, i, s, n) {
          var o, r, a, l, d, u;
          let c = ik(
            this.dependencies,
            [{ nodeId: i.nodeId, resourceId: i.resourceId }],
            s,
            this.dependencies.reconciliationDeadlineMs ?? 15e3,
          );
          try {
            let o =
                ((a = e),
                (l = t),
                (d = i.generation.params),
                (u = i),
                {
                  op: 3,
                  post_edit: {
                    items: [
                      {
                        item: {
                          commerce_selection: { benefit_type: u.benefitType },
                          params: { video_params: d },
                          reference_sources: [
                            {
                              material_idx: 0,
                              node_id: l.source.nodeId,
                              resource_id: l.source.resourceId,
                            },
                            ...u.generation.referenceSources,
                          ],
                          resource_id: u.resourceId,
                          type: 2,
                        },
                        output_node_id: u.nodeId,
                        output_title: (0, eA.MF)(l.source.title, "video.edit"),
                        source_node_id: l.source.nodeId,
                        source_resource_id: l.source.resourceId,
                      },
                    ],
                    source_node_id: l.source.nodeId,
                    source_resource_id: l.source.resourceId,
                    submit_id: u.submitId,
                  },
                  project_id: a,
                }),
              r = (
                await (0, h.Ud)({
                  generationHistorySubmissionPort:
                    this.dependencies.generationHistorySubmissionPort,
                  generate: () =>
                    this.dependencies.generator.nodeGenerate(o, {
                      signal: s,
                      ...((null == n ? void 0 : n.consumption)
                        ? { consumption: n.consumption }
                        : {}),
                    }),
                  mediaType: "video",
                  modelName: i.generation.params.model_name,
                  nodeId: i.nodeId,
                  onRegistered: (e) => {
                    i.history = e;
                  },
                  resourceIds: [i.resourceId],
                  submitId: i.submitId,
                })
              ).results.find((e) => e.resource_id === i.resourceId);
            if ((null == r ? void 0 : r.state) === 1)
              return (c.cancel(), this.acceptAttempt(i));
            if ((null == r ? void 0 : r.state) === 2)
              return (
                c.cancel(),
                this.ambiguousAttempt === i && (this.ambiguousAttempt = null),
                i0("VIDEO_EDIT_SUBMIT_REJECTED")
              );
          } catch (e) {
            if (s.aborted) return (c.cancel(), (0, h.XQ)(i.history), i0(iU));
            null == (r = this.dependencies.logger) ||
              r.error("canvas.video_edit.node_generate_failed", e);
          }
          let p = await c.promise;
          return "arrived" === p
            ? this.acceptAttempt(i)
            : "aborted" === p || s.aborted
              ? ((0, h.XQ)(i.history), i0(iU))
              : (null == (o = i.history) || o.reject(eF.OH.MATRIX_ERROR),
                (this.ambiguousAttempt = i),
                i0("VIDEO_EDIT_SUBMIT_AMBIGUOUS"));
        }
        acceptAttempt(e) {
          var t;
          return (
            this.ambiguousAttempt === e && (this.ambiguousAttempt = null),
            null == (t = e.history) || t.settle((0, h.Vy)([e.resourceId])),
            this.dependencies.trackSubmittedResource(e.resourceId),
            this.dependencies.commerceRefreshCoordinator.register({
              acceptedResourceIds: [e.resourceId],
              recoveryState: "complete",
              submitId: e.submitId,
            }),
            {
              status: "accepted",
              submittedNodeId: e.nodeId,
              submittedResourceId: e.resourceId,
            }
          );
        }
        constructor(e) {
          ((this.dependencies = e), (this.ambiguousAttempt = null));
        }
      }
      function iq(e) {
        let t = new Map(e.references.map((e) => [e.id, e])),
          i = new Set();
        for (let s of e.prompt)
          if ("reference" === s.type) {
            if (!t.has(s.referenceId)) throw new iz(ij);
            i.add(s.referenceId);
          }
        return e.references.filter((e) => {
          let { id: t } = e;
          return i.has(t);
        });
      }
      function iV(e) {
        switch (e.mediaType) {
          case 2:
            return { image_uri: e.upload.storageKey.trim(), role: 3, type: 2 };
          case 3:
            return { role: 3, type: 3, vid: e.upload.storageKey.trim() };
          case 4:
            return { role: 3, type: 4, vid: e.upload.storageKey.trim() };
        }
      }
      function iH(e) {
        return {
          durationSeconds: e.source.durationMs / 1e3,
          height: e.source.height,
          sourceId: `video-edit-source:${e.source.resourceId}`,
          type: 3,
          width: e.source.width,
        };
      }
      function iW(e) {
        var t;
        let { asset: i, mediaType: s, metadata: n } = e,
          o = {
            fileSizeBytes:
              (null == (t = i.file) ? void 0 : t.size) ?? i.fileSizeBytes,
            sourceId: `video-edit-reference:${n.id}`,
            type: s,
          };
        return (
          void 0 !== n.durationMs && (o.durationSeconds = n.durationMs / 1e3),
          void 0 !== n.height && (o.height = n.height),
          void 0 !== n.width && (o.width = n.width),
          o
        );
      }
      function iG(e) {
        let t = iQ(e),
          i = {
            fileSizeBytes: e.fileSizeBytes,
            sourceId: `video-edit-reference:${e.metadata.id}`,
            type: e.mediaType,
          };
        return (
          void 0 !== t && (i.durationSeconds = t),
          void 0 !== e.upload.height && (i.height = e.upload.height),
          void 0 !== e.upload.width && (i.width = e.upload.width),
          i
        );
      }
      function iK(e, t) {
        let i = e.find((e) => e.sourceId.startsWith("video-edit-source:"));
        if (!i) {
          if (!(0, iw.o)({ constraint: t, materials: e }).submission.allowed)
            throw new iz(iL);
          return;
        }
        let s = e.filter((e) => e !== i),
          n = {
            ...t,
            maxTotalAudioDurationSeconds: void 0,
            maxTotalCount: (function (e) {
              if (void 0 !== e) return Math.max(e - 1, 0);
            })(t.maxTotalCount),
            maxTotalVideoDurationSeconds: void 0,
            requiredAnyOf: [],
          };
        if (!(0, iw.o)({ constraint: n, materials: s }).referenceSet.allowed)
          throw new iz(iL);
        let o = {
          acceptedTypes: t.acceptedTypes,
          maxTotalAudioDurationSeconds: t.maxTotalAudioDurationSeconds,
          maxTotalVideoDurationSeconds: t.maxTotalVideoDurationSeconds,
          perType: {},
          requiredAnyOf: t.requiredAnyOf,
        };
        if (
          !(0, iw.o)({ constraint: o, materials: [i, ...s] }).submission.allowed
        )
          throw new iz(iL);
      }
      function i$(e) {
        return { role: 3, subject_node_id: e.subjectNodeId, type: 5 };
      }
      function iX(e, t) {
        let i = new Set(),
          s = [];
        for (let n of e.prompt)
          "subject" !== n.type ||
            i.has(n.subjectNodeId) ||
            (i.add(n.subjectNodeId),
            s.push({
              materialIndex: t + s.length,
              subjectNodeId: n.subjectNodeId,
            }));
        return s;
      }
      function iQ(e) {
        return void 0 === e.metadata.durationMs
          ? e.upload.durationSeconds
          : e.metadata.durationMs / 1e3;
      }
      function iY(e) {
        if (!Number.isFinite(e) || e < 0) throw new iz(iF);
        return (0, iC.h8)(e);
      }
      function iJ(e, t) {
        let i = e;
        for (let e of t) {
          if (!e) throw new iz(ij);
          if (3 !== e.type) continue;
          let t = e.durationSeconds;
          if (void 0 === t) throw new iz(iF);
          i += iY(t);
        }
        if (!Number.isFinite(i)) throw new iz(iF);
        return { hasInputVideo: !0, inputVideoDurationMs: i };
      }
      function iZ(e) {
        switch (e) {
          case "image":
            return 2;
          case "video":
            return 3;
          case "audio":
            return 4;
        }
      }
      function i0(e) {
        return { reason: e, status: "rejected" };
      }
      function i1(e) {
        return { guided: !0, reason: e, status: "rejected" };
      }
      function i2(e) {
        return { available: !1, reason: e };
      }
      var i3 = i(1774),
        i4 = i(80259),
        i5 = i(75615),
        i6 = i(27527),
        i8 = i(45299),
        i7 = i(17498),
        i9 = i(51689),
        se = i(50519),
        st = i(96348),
        si = i(87846),
        ss = i(72390);
      function sn(e) {
        throw new iy.aU(e);
      }
      class so extends Error {
        constructor(e) {
          (super(e), (this.reason = e));
        }
      }
      class sr {
        getCommerceAction(e) {
          try {
            return this.prepare(e).projection.commerceAction;
          } catch (e) {
            if (e instanceof so || e instanceof iy.aU) return null;
            throw e;
          }
        }
        async submit(e, t) {
          if (this.disposed || t.aborted) return sa("cancelled");
          if (this.active) return sa("busy");
          let i = new AbortController();
          this.active = i;
          let s = (0, i4.O)([i.signal, t]),
            n = s.signal;
          try {
            let t = this.prepare(e);
            if (this.attempt) {
              if (this.attempt.prepared.signature !== t.signature)
                return sa("ambiguous");
              return this.attempt.accepted
                ? this.accept(this.attempt)
                : await this.reconcile(this.attempt, i.signal);
            }
            let s = await this.dependencies.commercial.execute(
              t.projection.commerceAction,
              (s) =>
                this.submitAllowed(
                  e,
                  t,
                  s.selection.benefitType,
                  s.consumption,
                  n,
                  i.signal,
                ),
            );
            if ("executed" === s.status) return s.value;
            if ("blocked" === s.status || "cancelled" === s.status)
              return { status: "rejected", reason: s.status, guided: !0 };
            return sa("commerceUnavailable");
          } catch (t) {
            return this.rejectPreparation(t, n, e);
          } finally {
            (s.dispose(), (this.active = null));
          }
        }
        async submitAllowed(e, t, i, s, n, o) {
          try {
            if ((this.assertCurrent(e, t, n), !i.trim()))
              return sa("commerceUnavailable");
            let r = (this.dependencies.createSubmitId ?? d.pf)();
            (await this.finalizeReferences(e, t, r, n),
              this.assertCurrent(e, t, n));
            let a = this.createAttempt(e, t, i.trim(), r);
            return ((this.attempt = a), await this.dispatch(e, a, s, o, n));
          } catch (t) {
            return this.rejectPreparation(t, n, e);
          }
        }
        rejectPreparation(e, t, i) {
          return (0, e$.vh)(e) || e === t.reason
            ? sa("cancelled")
            : e instanceof so
              ? sa(e.reason)
              : e instanceof iy.aU
                ? sa("invalidInput")
                : (this.dependencies.generationAttempts.fail({
                    nodeId: i.source.nodeId,
                    resourceId: i.source.resourceId,
                    error: e,
                  }),
                  sa("preparationFailed"));
        }
        dispose() {
          var e, t;
          ((this.disposed = !0),
            null == (e = this.active) || e.abort(),
            (0, h.XQ)(null == (t = this.attempt) ? void 0 : t.history));
        }
        prepare(e) {
          var t;
          if (this.disposed) throw new so("cancelled");
          let i = this.dependencies.getEditAvailability().local;
          if (!i.available)
            throw new so(
              "notEditable" === i.reason
                ? "permissionDenied"
                : "notEditingReady",
            );
          let s = this.dependencies.getSessionSnapshot();
          if (
            "active" !== s.status ||
            s.sessionId !== e.sessionId ||
            s.source.nodeId !== e.source.nodeId ||
            s.source.resourceId !== e.source.resourceId ||
            s.source.vid !== e.source.vid ||
            s.range.startMs !== e.range.startMs ||
            s.range.endMs !== e.range.endMs
          )
            throw new so("sourceChanged");
          let n = (0, i5.F)(this.dependencies, [e.source]);
          if (!n.ok) throw new so("sourceChanged");
          let o = n.value.sources[0];
          if ((0, i6.L)(o) !== e.source.durationMs)
            throw new so("sourceChanged");
          let r = this.dependencies
              .getResourceBindings(o.nodeId)
              .find((e) => e.resource_id === o.resourceId),
            a = this.dependencies.getProjectId().trim();
          if (!a || !r) throw new so("sourceChanged");
          let l = this.readSubjects(e),
            d = (function (e) {
              let { source: t, range: i, prompt: s, references: n } = e,
                {
                  config: o,
                  mode: r,
                  aspectRatio: a,
                  resolution: l,
                } = (function (e) {
                  var t;
                  let { source: i, range: s } = e,
                    n = (0, si.Z)(e),
                    o = (0, iO.qR)(e),
                    r =
                      o &&
                      e.configStore.getModeConfig(
                        o.modelName,
                        e6.wY.MultiModal,
                      );
                  (n && o && (null == r ? void 0 : r.editSource)) ||
                    sn("Partial-reshoot configuration is unavailable.");
                  let a = (0, i6.f)(i, r.editSource);
                  ("aspectRatioUnsupported" === a && sn((0, i8.IM)()),
                    "sourceUnavailable" === a &&
                      sn("Partial-reshoot source metadata is unavailable."));
                  let { minMs: l, maxMs: d } = r.editSource,
                    u = s.endMs - s.startMs;
                  (!Number.isSafeInteger(l) ||
                    l <= 0 ||
                    !Number.isSafeInteger(d) ||
                    d < l ||
                    !Number.isSafeInteger(i.durationMs) ||
                    i.durationMs > 0x7fffffff ||
                    !Number.isSafeInteger(s.startMs) ||
                    !Number.isSafeInteger(s.endMs) ||
                    s.startMs < 0 ||
                    s.endMs > i.durationMs ||
                    u < l ||
                    u > d ||
                    !i.vid.trim()) &&
                    sn("Partial-reshoot source or range is invalid.");
                  let c = (0, st.bi)(r.aspectRatios, `${i.width}:${i.height}`),
                    h = (0, iO.N)({
                      supportedResolutions: r.resolutions,
                      declaredResolution: i.resolution,
                      generationResolution:
                        null == (t = e.sourceGeneration)
                          ? void 0
                          : t.resolution,
                      fallback: o.resolution,
                    });
                  return (
                    (void 0 !== c &&
                      (0, e6.uu)(c) &&
                      r.aspectRatios.includes(c) &&
                      r.resolutions.includes(h)) ||
                      sn(
                        "Partial-reshoot source output format is unsupported.",
                      ),
                    { config: n, mode: r, aspectRatio: c, resolution: h }
                  );
                })(e),
                d = i.endMs - i.startMs;
              s.materials.some(
                (e) => "video" === e.kind && e.vid.trim() === t.vid.trim(),
              ) &&
                sn(
                  "Partial-reshoot prompt must not reference the source video.",
                );
              let u = (function (e, t, i) {
                  t.some((e) => !(0, se.D)(e)) &&
                    sn("Partial-reshoot references are not ready.");
                  let s = [];
                  for (let n of e.materials) {
                    if (
                      ("motion" === n.kind &&
                        sn("Partial-reshoot does not accept motion tools."),
                      "subject" === n.kind)
                    ) {
                      let e = i.get(n.subjectNodeId);
                      ((n.subjectNodeId.trim() && e) ||
                        sn("Partial-reshoot subject metadata is unavailable."),
                        s.push({
                          ...e,
                          sourceId: `prompt-subject:${n.subjectNodeId}`,
                        }));
                      continue;
                    }
                    t.find((e) => {
                      var t, i;
                      return (
                        (!n.draftSlotId || e.id === n.draftSlotId) &&
                        ("image" === n.kind
                          ? 2 === e.type &&
                            (null == (t = e.image_uri) ? void 0 : t.trim()) ===
                              n.imageUri.trim()
                          : e.type === ("video" === n.kind ? 3 : 4) &&
                            (null == (i = e.vid) ? void 0 : i.trim()) ===
                              n.vid.trim())
                      );
                    }) ||
                      sn(
                        "Partial-reshoot prompt references an unavailable material.",
                      );
                  }
                  return s;
                })(s, n, e.subjectFacts),
                c = (0, i9.iJ)(s, n, u);
              (c.materialFacts.length !== c.materials.length ||
                c.materialFacts.some((e) => void 0 !== e.metadataState)) &&
                sn("Partial-reshoot reference metadata is unavailable.");
              let h = (0, ss.u)({
                constraint: o.referenceConstraint,
                source: t,
                range: i,
                references: c.materialFacts,
              });
              ("available" !== h.status ||
                !h.assessment.submission.allowed ||
                c.materials.length + 1 > r.materials.maxCount) &&
                sn("Partial-reshoot reference limits are not satisfied.");
              let p = (0, iE.PC)(s)
                .map((e) => {
                  if (1 === e.type) return (0, iE.mh)(e.text ?? "");
                  let t = e.material_idx,
                    i = void 0 === t ? void 0 : s.materials[t];
                  return (
                    (void 0 !== t && i && "motion" !== i.kind) ||
                      sn("Partial-reshoot prompt material is unavailable."),
                    (0, iE.wG)(i.kind, t + 1)
                  );
                })
                .join("");
              ((0, i7.ld)(s, "video") > o.promptMaxCharacters ||
                (0, iE.zG)(s)) &&
                sn("Partial-reshoot prompt is invalid.");
              let m = {
                  mode: e6.wY.MultiModal,
                  model_name: o.modelName,
                  aspect_ratio: a,
                  resolution: l,
                  duration_ms: t.durationMs,
                  edit_range: { start_ms: i.startMs, end_ms: i.endMs },
                  prompt: p,
                  materials: [
                    { role: 4, type: 3, vid: t.vid.trim() },
                    ...c.materials.map((e) => ({ ...e, role: 3 })),
                  ],
                  meta_list: c.metaList.map((e) =>
                    void 0 === e.material_idx
                      ? e
                      : { ...e, material_idx: e.material_idx + 1 },
                  ),
                },
                f = [
                  (0, iS.hy)(0, { nodeId: t.nodeId, resourceId: t.resourceId }),
                  ...c.referenceSources.map((e) => ({
                    ...e,
                    material_idx: e.material_idx + 1,
                  })),
                ],
                b = (0, iC.UJ)(d),
                g = d;
              for (let e of c.materialFacts)
                3 === e.type &&
                  ((void 0 === e.durationSeconds ||
                    !Number.isFinite(e.durationSeconds) ||
                    e.durationSeconds <= 0) &&
                    sn(
                      "Partial-reshoot reference video duration is unavailable.",
                    ),
                  (g += (0, iC.h8)(e.durationSeconds)));
              let v = (0, iC.jR)(
                { ...m, duration_ms: 1e3 * b, outputCount: 1 },
                { hasInputVideo: !0, inputVideoDurationMs: g },
              );
              return {
                videoGenParams: m,
                referenceSources: f,
                commerceAction: v,
                outputCount: 1,
              };
            })({
              ...this.dependencies,
              ...e,
              sourceGeneration: null == (t = r.video) ? void 0 : t.gen,
              subjectFacts: l.facts,
            });
          return {
            projection: d,
            projectId: a,
            signature: JSON.stringify({
              sessionId: e.sessionId,
              projectId: a,
              projection: d,
              subjects: l.bindings,
            }),
          };
        }
        readSubjects(e) {
          let t = new Map(),
            i = [];
          for (let s of e.prompt.materials) {
            if ("subject" !== s.kind) continue;
            let e = this.dependencies.getObjectSnapshot(s.subjectNodeId);
            if ((null == e ? void 0 : e.type) !== "subject" || !e.data.main)
              throw new so("subjectUnavailable");
            let n = (0, iR.O)(e.data.main, {
                getNode: this.dependencies.getObjectSnapshot,
              }),
              o = (0, iA.mA)(e, {
                getNode: this.dependencies.getObjectSnapshot,
                getResource: (e, t) =>
                  this.dependencies
                    .getResourceBindings(t)
                    .find((t) => t.resource_id === e),
              });
            if ("resolved" !== n.kind || !o) throw new so("subjectUnavailable");
            (i.push([s.subjectNodeId, n.resourceId]),
              t.set(s.subjectNodeId, o));
          }
          return { facts: t, bindings: i };
        }
        assertCurrent(e, t, i) {
          if ((i.throwIfAborted(), this.prepare(e).signature !== t.signature))
            throw new so("sourceChanged");
        }
        async finalizeReferences(e, t, i, s) {
          for (let n of e.references)
            if (2 !== n.type && !n.referenceSource) {
              if (
                (this.assertCurrent(e, t, s),
                !this.dependencies.finalizeUpload || !n.vid)
              )
                throw new so("referenceUnavailable");
              await this.dependencies.finalizeUpload({
                signal: s,
                traceId: i,
                uploaded: {
                  mediaType: 3 === n.type ? "video" : "audio",
                  storageKey: n.vid,
                },
              });
            }
        }
        createAttempt(e, t, i, s) {
          let n = (this.dependencies.createNodeId ?? d.XG)(),
            o = (this.dependencies.createResourceId ?? d.ve)(),
            r = {
              project_id: t.projectId,
              op: 3,
              post_edit: {
                source_node_id: e.source.nodeId,
                source_resource_id: e.source.resourceId,
                submit_id: s,
                items: [
                  {
                    output_node_id: n,
                    output_title: (0, eA.RT)(e.source.title, e.range),
                    source_node_id: e.source.nodeId,
                    source_resource_id: e.source.resourceId,
                    item: {
                      resource_id: o,
                      type: 2,
                      commerce_selection: { benefit_type: i },
                      reference_sources: t.projection.referenceSources,
                      params: {
                        video_params: {
                          ...t.projection.videoGenParams,
                          seed: Math.floor(0x100000000 * Math.random()),
                        },
                      },
                    },
                  },
                ],
              },
            };
          return {
            prepared: t,
            request: r,
            submitId: s,
            nodeId: n,
            resourceId: o,
            accepted: !1,
          };
        }
        async dispatch(e, t, i, s, n) {
          let o = !1;
          try {
            let r = await (0, h.Ud)({
              generationHistorySubmissionPort:
                this.dependencies.generationHistorySubmissionPort,
              generate: () => (
                this.assertCurrent(e, t.prepared, n),
                (o = !0),
                this.dependencies.generator.nodeGenerate(t.request, {
                  signal: s,
                  ...(i ? { consumption: i } : {}),
                })
              ),
              mediaType: "video",
              modelName: t.prepared.projection.videoGenParams.model_name,
              nodeId: t.nodeId,
              resourceIds: [t.resourceId],
              submitId: t.submitId,
              onRegistered: (e) => {
                t.history = e;
              },
            });
            if (this.disposed) return sa("cancelled");
            let a = r.results.find((e) => e.resource_id === t.resourceId);
            if ((null == a ? void 0 : a.state) === 1) return this.accept(t);
            if (a && (2 === a.state || (0, i3.Xt)(a.error_code)))
              return (
                (this.attempt = null),
                {
                  status: "rejected",
                  reason: "submitRejected",
                  errorCode: a.error_code,
                }
              );
          } catch (e) {
            var r;
            if (!o) throw ((this.attempt = null), (0, h.XQ)(t.history), e);
            null == (r = this.dependencies.logger) ||
              r.error("canvas.partial_reshoot.node_generate_failed", e);
          }
          return this.reconcile(t, s);
        }
        async reconcile(e, t) {
          let i = ik(
              this.dependencies,
              [e],
              t,
              this.dependencies.reconciliationDeadlineMs ?? 15e3,
            ),
            s = await i.promise;
          return "arrived" === s
            ? this.accept(e)
            : sa("aborted" === s ? "cancelled" : "ambiguous");
        }
        accept(e) {
          if (!e.accepted) {
            var t;
            ((e.accepted = !0),
              null == (t = e.history) || t.settle((0, h.Vy)([e.resourceId])),
              this.dependencies.trackSubmittedResource(e.resourceId),
              this.dependencies.commerceRefreshCoordinator.register({
                submitId: e.submitId,
                acceptedResourceIds: [e.resourceId],
                recoveryState: "complete",
              }));
          }
          return {
            status: "accepted",
            submittedNodeId: e.nodeId,
            submittedResourceId: e.resourceId,
          };
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.disposed = !1),
            (this.active = null),
            (this.attempt = null));
        }
      }
      function sa(e) {
        return { status: "rejected", reason: e };
      }
      class sl {
        register(e, t) {
          return (
            this.participants.set(e, t),
            () => {
              this.participants.get(e) === t && this.participants.delete(e);
            }
          );
        }
        activate(e) {
          for (let [t, i] of this.participants) t !== e && i();
        }
        dispose() {
          for (let e of this.participants.values()) e();
          this.participants.clear();
        }
        constructor() {
          this.participants = new Map();
        }
      }
      var sd = i(66230),
        su = i(53826),
        sc = i(45242),
        sh = i(35812),
        sp = i(63823);
      let sm = Object.freeze({ status: "inactive" });
      class sf {
        dispose() {
          var e, t, i;
          ((this.disposed = !0),
            this.close(),
            null == (e = this.unsubscribePermission) || e.call(this),
            (this.unsubscribePermission = void 0),
            null == (t = this.unsubscribeCatalog) || t.call(this),
            (this.unsubscribeCatalog = void 0),
            null == (i = this.resultPresentation) || i.dispose(),
            this.listeners.clear(),
            this.sourceListeners.clear());
        }
        prepareAttempt(e, t) {
          let i = (0, d.XG)(),
            s = (0, d.ve)(),
            n = (0, d.pf)();
          return (
            this.resultPresentation ??
              (this.resultPresentation = (0, su.g)({
                viewport: this.dependencies.viewport,
                resourceTracking: this.dependencies.resourceTracking,
              })),
            this.resultPresentation.begin({
              submitId: n,
              targetNodeId: i,
              prepare: () => {
                var e, t;
                !this.disposed &&
                  this.dependencies.getEditAvailability().local.available &&
                  (null == (e = (t = this.dependencies).onResultArrived) ||
                    e.call(t, i));
              },
            }),
            {
              nodeId: i,
              resourceId: s,
              submitId: n,
              request: (0, sp.XN)({
                source: e,
                crop: (0, sh.RJ)(t, (0, sp.Qu)(e)),
                projectId: this.dependencies.getProjectId(),
                submitId: n,
                outputNodeId: i,
                outputResourceId: s,
                outputTitle: this.dependencies.getOutputTitle(e),
              }),
            }
          );
        }
        async execute(e, t, i) {
          let n;
          if (!this.isCurrent(t)) return { ok: !1, reason: "permissionDenied" };
          let o = ik(
            this.dependencies,
            [e],
            t.signal,
            this.dependencies.reconciliationDeadlineMs ?? 15e3,
          );
          try {
            var r, a, l, d, u, c;
            let p,
              m,
              f = !1,
              b = !1;
            try {
              let o = (
                await (0, h.Ud)({
                  deferBusinessErrorRejection: !0,
                  deferSettlement: i,
                  generationHistorySubmissionPort:
                    this.dependencies.generationHistorySubmissionPort,
                  mediaType: "video",
                  name: (0, h.nA)(e.request),
                  nodeId: e.nodeId,
                  resourceIds: [e.resourceId],
                  submitId: e.submitId,
                  onRegistered: (t) => {
                    e.history = t;
                  },
                  generate: async () => {
                    var i, o;
                    if (!this.isCurrent(t))
                      throw new DOMException("Cancelled", "AbortError");
                    let r = (n =
                      null ==
                      (i = (o = this.dependencies.generator).captureConsumption)
                        ? void 0
                        : i.call(o))
                      ? (0, s.pt)(n, t.signal)
                      : void 0;
                    try {
                      return await this.dependencies.generator.nodeGenerate(
                        e.request,
                        (null == r ? void 0 : r.options) ?? {
                          signal: t.signal,
                        },
                      );
                    } finally {
                      null == r || r.dispose();
                    }
                  },
                })
              ).results.find((t) => t.resource_id === e.resourceId);
              if (
                ((f = (null == o ? void 0 : o.state) === 1),
                (b = (null == o ? void 0 : o.state) === 2),
                (p = null == o ? void 0 : o.error_code),
                b && !i)
              ) {
                if (!this.isCurrent(t))
                  return { ok: !1, reason: "permissionDenied" };
                return (this.clearAttempt(), this.fail("SUBMIT_REJECTED"));
              }
            } catch (e) {
              if (!this.isCurrent(t))
                return { ok: !1, reason: "permissionDenied" };
              if (
                ((m = e), e instanceof DOMException && "AbortError" === e.name)
              )
                return this.fail("SUBMIT_CANCELLED");
            }
            if (!this.isCurrent(t))
              return { ok: !1, reason: "permissionDenied" };
            f && this.dependencies.trackSubmittedResource(e.resourceId);
            let g = await o.promise;
            if (!this.isCurrent(t))
              return { ok: !1, reason: "permissionDenied" };
            if ("arrived" !== g && !f) {
              if (b || m instanceof sd.uz)
                return (
                  b
                    ? null == (l = e.history) || l.reject(p)
                    : m instanceof sd.uz &&
                      (null == (d = e.history) || d.reject(m.serviceCode)),
                  this.clearAttempt(),
                  this.fail("SUBMIT_REJECTED")
                );
              return (
                null == (a = e.history) || a.reject(eF.OH.MATRIX_ERROR),
                this.fail("SUBMIT_UNCERTAIN")
              );
            }
            return (
              f
                ? i &&
                  (null == (c = e.history) ||
                    c.settle((0, h.Vy)([e.resourceId])))
                : (null == (u = e.history) ||
                    u.settle((0, h.Vy)([e.resourceId])),
                  this.dependencies.trackSubmittedResource(e.resourceId)),
              "arrived" === g && (this.attempt = void 0),
              this.close(),
              "arrived" === g &&
                (null == (r = this.resultPresentation) ||
                  r.register({
                    submitId: e.submitId,
                    acceptedResourceIds: [e.resourceId],
                    recoveryState: "complete",
                  })),
              { ok: !0, value: { submittedNodeIds: [e.nodeId] } }
            );
          } finally {
            (null == n || n.dispose(), o.cancel());
          }
        }
        isCurrent(e) {
          return (
            this.activeRequest === e &&
            !e.signal.aborted &&
            this.dependencies.getEditAvailability().local.available
          );
        }
        clearAttempt() {
          var e, t;
          ((0, h.XQ)(null == (e = this.attempt) ? void 0 : e.history),
            this.attempt &&
              (null == (t = this.resultPresentation) ||
                t.cancel(this.attempt.submitId)),
            (this.attempt = void 0));
        }
        fail(e) {
          return (
            "active" === this.snapshot.status &&
              (this.snapshot = {
                ...this.snapshot,
                submitState: "failed",
                failureCode: e,
              }),
            this.publish(),
            { ok: !1, reason: "commandFailed", code: e }
          );
        }
        notifySource(e) {
          for (let t of this.sourceListeners.get(e) ?? []) t();
        }
        publish() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          var t;
          ((this.dependencies = e),
            (this.snapshot = sm),
            (this.listeners = new Set()),
            (this.sourceListeners = new Map()),
            (this.disposed = !1),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.isSourceActive = (e) =>
              "active" === this.snapshot.status &&
              this.snapshot.source.nodeId === e),
            (this.subscribeSource = (e, t) => {
              if (this.disposed) return () => void 0;
              let i = this.sourceListeners.get(e) ?? new Set();
              return (
                i.add(t),
                this.sourceListeners.set(e, i),
                () => {
                  (i.delete(t), 0 === i.size && this.sourceListeners.delete(e));
                }
              );
            }),
            (this.open = (e) => {
              if (this.disposed)
                return { ok: !1, reason: "commandFailed", code: "DISPOSED" };
              if (!(0, tr.F)(e, e.nodeIds, this.dependencies.getObjectSnapshot))
                return {
                  ok: !1,
                  reason: "sourceUnavailable",
                  code: "SOURCE_CHANGED",
                };
              if (1 !== e.nodeIds.length)
                return {
                  ok: !1,
                  reason: "commandFailed",
                  code: "UNSUPPORTED_SELECTION",
                };
              let t = (0, i5.q)(this.dependencies, e);
              if (!t.ok) return t;
              let i = t.value.sources[0],
                s = (0, sc.G)(this.dependencies.catalog);
              if (!s) return { ok: !1, reason: "sourceUnavailable" };
              let n = (0, sp.it)(i, s);
              return n
                ? { ok: !1, reason: "commandFailed", code: n }
                : (this.close(),
                  (this.snapshot = {
                    status: "active",
                    source: i,
                    capability: s,
                    crop: (0, sh.qS)(sh.HU, (0, sp.Qu)(i)),
                    ratio: "free",
                    submitState: "idle",
                  }),
                  this.publish(),
                  this.notifySource(i.nodeId),
                  (this.focusPresentation = (0, a.FX)(
                    this.dependencies.viewport,
                  )),
                  this.focusPresentation.present({
                    kind: "nodes",
                    nodeIds: [i.nodeId],
                  }),
                  { ok: !0, value: {} });
            }),
            (this.setCrop = (e) => {
              "active" === this.snapshot.status &&
                !this.activeRequest &&
                !this.attempt &&
                this.dependencies.getEditAvailability().local.available &&
                (0, sh.c2)(e) &&
                ((this.snapshot = {
                  ...this.snapshot,
                  crop: (0, sh.qS)(
                    e,
                    (0, sp.Qu)(this.snapshot.source),
                    this.snapshot.crop,
                  ),
                  submitState: "idle",
                  failureCode: void 0,
                }),
                this.publish());
            }),
            (this.setRatio = (e) => {
              "active" !== this.snapshot.status ||
                this.activeRequest ||
                this.attempt ||
                !this.dependencies.getEditAvailability().local.available ||
                ((this.snapshot = {
                  ...this.snapshot,
                  ratio: e,
                  crop: (0, sh.qS)(
                    (0, sh.B4)(
                      this.snapshot.crop,
                      (0, sp.Qu)(this.snapshot.source),
                      e,
                    ),
                    (0, sp.Qu)(this.snapshot.source),
                  ),
                }),
                this.publish());
            }),
            (this.reset = () => {
              "active" !== this.snapshot.status ||
                this.activeRequest ||
                this.attempt ||
                !this.dependencies.getEditAvailability().local.available ||
                ((this.snapshot = {
                  ...this.snapshot,
                  ratio: "free",
                  crop: (0, sh.qS)(sh.HU, (0, sp.Qu)(this.snapshot.source)),
                  submitState: "idle",
                  failureCode: void 0,
                }),
                this.publish());
            }),
            (this.close = () => {
              var e, t;
              if (
                (null == (e = this.focusPresentation) || e.cancel(),
                (this.focusPresentation = void 0),
                null == (t = this.activeRequest) || t.abort(),
                (this.activeRequest = void 0),
                (this.pending = void 0),
                this.clearAttempt(),
                "inactive" === this.snapshot.status)
              )
                return;
              let i = this.snapshot.source.nodeId;
              ((this.snapshot = sm), this.publish(), this.notifySource(i));
            }),
            (this.submit = () => {
              if (this.pending) return this.pending;
              let e = this.dependencies.getEditAvailability().local;
              if (!e.available)
                return Promise.resolve({
                  ok: !1,
                  reason:
                    "notEditable" === e.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                });
              if (
                "active" !== this.snapshot.status ||
                "submitting" === this.snapshot.submitState
              )
                return Promise.resolve({ ok: !1, reason: "commandFailed" });
              let t = (0, i5.F)(this.dependencies, [this.snapshot.source]);
              if (!t.ok) return (this.close(), Promise.resolve(t));
              let i = t.value.sources[0],
                s = this.attempt,
                n = void 0 !== s;
              if (!s) {
                let e = (0, sc.G)(this.dependencies.catalog);
                if (!e)
                  return Promise.resolve({
                    ok: !1,
                    reason: "sourceUnavailable",
                  });
                let t = (0, sp.it)(i, e);
                if (t)
                  return Promise.resolve({
                    ok: !1,
                    reason: "commandFailed",
                    code: t,
                  });
                let n = (0, sh.RJ)(this.snapshot.crop, (0, sp.Qu)(i));
                if (!(0, sp.ae)(n))
                  return Promise.resolve({
                    ok: !1,
                    reason: "commandFailed",
                    code: "outputTooSmall",
                  });
                s = this.prepareAttempt(i, this.snapshot.crop);
              }
              this.attempt = s;
              let o = new AbortController();
              ((this.activeRequest = o),
                (this.snapshot = {
                  ...this.snapshot,
                  source: i,
                  submitState: "submitting",
                  failureCode: void 0,
                }),
                this.publish());
              let r = this.execute(s, o, n).finally(() => {
                this.activeRequest === o &&
                  ((this.activeRequest = void 0), (this.pending = void 0));
              });
              return (this.activeRequest === o && (this.pending = r), r);
            }),
            (this.unsubscribeCatalog =
              null == (t = e.catalog)
                ? void 0
                : t.subscribe(() => {
                    if ("active" !== this.snapshot.status || this.attempt)
                      return;
                    let t = (0, sc.G)(e.catalog);
                    t
                      ? ((this.snapshot = { ...this.snapshot, capability: t }),
                        this.publish())
                      : this.close();
                  })),
            (this.unsubscribePermission = e.subscribeEditAvailability(() => {
              var t;
              e.getEditAvailability().local.available ||
                (this.close(),
                null == (t = this.resultPresentation) || t.dispose(),
                (this.resultPresentation = void 0));
            })));
        }
      }
      var sb = i(59694);
      let sg = Object.freeze({ status: "inactive" });
      class sv {
        dispose() {
          ((this.disposed = !0), this.close(), this.listeners.clear());
        }
        prepareAttempt(e, t) {
          let i = (0, d.XG)(),
            s = (0, d.ve)(),
            n = (0, d.pf)();
          return {
            nodeId: i,
            resourceId: s,
            submitId: n,
            request: (0, sb.O)({
              source: e,
              resolution: t,
              projectId: this.dependencies.getProjectId(),
              submitId: n,
              outputNodeId: i,
              outputResourceId: s,
              outputTitle: this.dependencies.getOutputTitle(e),
            }),
          };
        }
        async execute(e, t) {
          let i;
          if (!this.isCurrent(t)) return { ok: !1, reason: "permissionDenied" };
          let n = ik(
            this.dependencies,
            [e],
            t.signal,
            this.dependencies.reconciliationDeadlineMs ?? 15e3,
          );
          try {
            var o, r, a, l, d;
            let u,
              c = !1;
            try {
              let n = (
                await (0, h.Ud)({
                  deferBusinessErrorRejection: !0,
                  generationHistorySubmissionPort:
                    this.dependencies.generationHistorySubmissionPort,
                  mediaType: "video",
                  name: (0, h.nA)(e.request),
                  nodeId: e.nodeId,
                  resourceIds: [e.resourceId],
                  submitId: e.submitId,
                  onRegistered: (t) => {
                    e.history = t;
                  },
                  generate: async () => {
                    var n, o;
                    if (!this.isCurrent(t))
                      throw new DOMException("Cancelled", "AbortError");
                    let r = (i =
                      null ==
                      (n = (o = this.dependencies.generator).captureConsumption)
                        ? void 0
                        : n.call(o))
                      ? (0, s.pt)(i, t.signal)
                      : void 0;
                    try {
                      return await this.dependencies.generator.nodeGenerate(
                        e.request,
                        (null == r ? void 0 : r.options) ?? {
                          signal: t.signal,
                        },
                      );
                    } finally {
                      null == r || r.dispose();
                    }
                  },
                })
              ).results.find((t) => t.resource_id === e.resourceId);
              if (
                ((c = (null == n ? void 0 : n.state) === 1),
                (null == n ? void 0 : n.state) === 2)
              ) {
                if (!this.isCurrent(t))
                  return { ok: !1, reason: "permissionDenied" };
                return ((this.attempt = void 0), this.fail("SUBMIT_REJECTED"));
              }
            } catch (e) {
              if (!this.isCurrent(t))
                return { ok: !1, reason: "permissionDenied" };
              if (
                ((u = e), e instanceof DOMException && "AbortError" === e.name)
              )
                return this.fail("SUBMIT_CANCELLED");
            }
            if (!this.isCurrent(t))
              return { ok: !1, reason: "permissionDenied" };
            c && this.dependencies.trackSubmittedResource(e.resourceId);
            let p = await n.promise;
            if (!this.isCurrent(t))
              return { ok: !1, reason: "permissionDenied" };
            if ("arrived" !== p && !c) {
              if (u instanceof sd.uz)
                return (
                  null == (l = e.history) || l.reject(u.serviceCode),
                  (this.attempt = void 0),
                  this.fail("SUBMIT_REJECTED")
                );
              return (
                null == (a = e.history) || a.reject(eF.OH.MATRIX_ERROR),
                this.fail("SUBMIT_UNCERTAIN")
              );
            }
            return (
              c ||
                (null == (d = e.history) || d.settle((0, h.Vy)([e.resourceId])),
                this.dependencies.trackSubmittedResource(e.resourceId)),
              "arrived" === p &&
                (null == (o = (r = this.dependencies).onResultArrived) ||
                  o.call(r, e.nodeId)),
              this.close(),
              { ok: !0, value: { submittedNodeIds: [e.nodeId] } }
            );
          } finally {
            (null == i || i.dispose(), n.cancel());
          }
        }
        isCurrent(e) {
          return (
            this.activeRequest === e &&
            !e.signal.aborted &&
            this.dependencies.getEditAvailability().local.available
          );
        }
        fail(e) {
          return (
            "active" === this.snapshot.status &&
              (this.snapshot = {
                ...this.snapshot,
                submitState: "failed",
                failureCode: e,
              }),
            this.publish(),
            { ok: !1, reason: "commandFailed", code: e }
          );
        }
        publish() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.snapshot = sg),
            (this.listeners = new Set()),
            (this.disposed = !1),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.open = (e) => {
              if (this.disposed)
                return { ok: !1, reason: "commandFailed", code: "DISPOSED" };
              if (!(0, tr.F)(e, e.nodeIds, this.dependencies.getObjectSnapshot))
                return {
                  ok: !1,
                  reason: "sourceUnavailable",
                  code: "SOURCE_CHANGED",
                };
              if (1 !== e.nodeIds.length)
                return {
                  ok: !1,
                  reason: "commandFailed",
                  code: "UNSUPPORTED_SELECTION",
                };
              let t = (0, i5.q)(this.dependencies, e);
              if (!t.ok) return t;
              let i = t.value.sources[0],
                s = (0, sb.m)(i, "480p");
              return s
                ? { ok: !1, reason: "commandFailed", code: s }
                : (this.close(),
                  (this.snapshot = {
                    status: "active",
                    source: i,
                    resolution: "480p",
                    submitState: "idle",
                  }),
                  (this.unsubscribePermission =
                    this.dependencies.subscribeEditAvailability(() => {
                      this.dependencies.getEditAvailability().local.available ||
                        this.close();
                    })),
                  this.publish(),
                  { ok: !0, value: {} });
            }),
            (this.setResolution = (e) => {
              "active" !== this.snapshot.status ||
                this.activeRequest ||
                this.attempt ||
                !this.dependencies.getEditAvailability().local.available ||
                (0, sb.m)(this.snapshot.source, e) ||
                ((this.snapshot = { ...this.snapshot, resolution: e }),
                this.publish());
            }),
            (this.close = () => {
              var e, t, i;
              (null == (e = this.activeRequest) || e.abort(),
                (this.activeRequest = void 0),
                (this.pending = void 0),
                null == (t = this.unsubscribePermission) || t.call(this),
                (this.unsubscribePermission = void 0),
                (0, h.XQ)(null == (i = this.attempt) ? void 0 : i.history),
                (this.attempt = void 0),
                "inactive" !== this.snapshot.status &&
                  ((this.snapshot = sg), this.publish()));
            }),
            (this.submit = () => {
              if (this.pending) return this.pending;
              let e = this.dependencies.getEditAvailability().local;
              if (!e.available)
                return Promise.resolve({
                  ok: !1,
                  reason:
                    "notEditable" === e.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                });
              if (
                "active" !== this.snapshot.status ||
                "submitting" === this.snapshot.submitState
              )
                return Promise.resolve({ ok: !1, reason: "commandFailed" });
              let t = (0, i5.F)(this.dependencies, [this.snapshot.source]);
              if (!t.ok) return (this.close(), Promise.resolve(t));
              let i = t.value.sources[0],
                s = (0, sb.m)(i, this.snapshot.resolution);
              if (s)
                return Promise.resolve({
                  ok: !1,
                  reason: "commandFailed",
                  code: s,
                });
              let n =
                this.attempt ??
                this.prepareAttempt(i, this.snapshot.resolution);
              this.attempt = n;
              let o = new AbortController();
              ((this.activeRequest = o),
                (this.snapshot = {
                  ...this.snapshot,
                  source: i,
                  submitState: "submitting",
                  failureCode: void 0,
                }),
                this.publish());
              let r = this.execute(n, o).finally(() => {
                this.activeRequest === o &&
                  ((this.activeRequest = void 0), (this.pending = void 0));
              });
              return (this.activeRequest === o && (this.pending = r), r);
            }));
        }
      }
      var sI = i(93895);
      let sS = Object.freeze({ status: "inactive" }),
        sy = Object.freeze({ available: !1, reason: "unavailable" });
      class sE {
        isCurrent() {
          return (
            !this.disposed &&
            "active" === this.snapshot.status &&
            this.dependencies.getEditAvailability().local.available &&
            this.dependencies.getProjectId() === this.projectId &&
            void 0 !== this.currentSource()
          );
        }
        currentSource() {
          if ("active" !== this.snapshot.status) return;
          let e = (0, i5.F)(this.dependencies, [this.snapshot.source]);
          return e.ok ? e.value.sources[0] : void 0;
        }
        isRequestCurrent(e) {
          return (
            this.request === e &&
            !e.signal.aborted &&
            (!!this.isCurrent() || (this.close(), !1))
          );
        }
        update(e, t) {
          "active" === this.snapshot.status &&
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              submitState: e,
              capability: t ?? this.snapshot.capability,
            })),
            this.publish());
        }
        failedResult() {
          return { ok: !1, reason: "commandFailed" };
        }
        publish() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.snapshot = sS),
            (this.listeners = new Set()),
            (this.releases = []),
            (this.projectId = ""),
            (this.sequence = 0),
            (this.disposed = !1),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e),
                  () => {
                    this.listeners.delete(e);
                  })),
            (this.open = (e) => {
              var t, i, s, n, o;
              if (this.disposed)
                return { ok: !1, reason: "commandFailed", code: "DISPOSED" };
              let r = (0, sI.M)(this.dependencies, e);
              if (!r.ok) return r;
              let a = r.value.sources[0],
                l =
                  (null == (t = this.dependencies.integration)
                    ? void 0
                    : t.getCapability(a)) ?? sy;
              if (!l.available)
                return {
                  ok: !1,
                  reason: "commandFailed",
                  code: "SOURCE_INELIGIBLE",
                };
              (this.close(),
                (this.projectId = this.dependencies.getProjectId()));
              let d = `video-subtitle-erasure-${++this.sequence}`;
              ((this.snapshot = Object.freeze({
                status: "active",
                sessionId: d,
                source: a,
                capability: l,
                submitState: "idle",
              })),
                this.releases.push(
                  this.dependencies.subscribeObjectSnapshot(
                    a.nodeId,
                    this.revalidate,
                  ),
                ));
              let u =
                  null ==
                  (i = (s = this.dependencies).subscribeResourceBindings)
                    ? void 0
                    : i.call(s, a.nodeId, this.revalidate),
                c =
                  null ==
                  (n = (o = this.dependencies).subscribeEditAvailability)
                    ? void 0
                    : n.call(o, this.revalidate);
              return (
                u && this.releases.push(u),
                c && this.releases.push(c),
                this.publish(),
                { ok: !0, value: { sessionId: d } }
              );
            }),
            (this.close = () => {
              var e;
              for (let t of (null == (e = this.request) || e.abort(),
              (this.request = void 0),
              this.releases))
                t();
              ((this.releases = []),
                "inactive" !== this.snapshot.status &&
                  ((this.snapshot = sS), this.publish()));
            }),
            (this.dispose = () => {
              this.disposed ||
                ((this.disposed = !0), this.close(), this.listeners.clear());
            }),
            (this.submit = async () => {
              if (!this.isCurrent() || "active" !== this.snapshot.status)
                return (this.close(), this.failedResult());
              if (!["idle", "failed"].includes(this.snapshot.submitState))
                return this.failedResult();
              let e = this.currentSource();
              if (!e) return (this.close(), this.failedResult());
              let t = this.dependencies.integration,
                i = (null == t ? void 0 : t.getCapability(e)) ?? sy;
              if (!t || !i.available)
                return (
                  this.update("idle", i),
                  {
                    ok: !1,
                    reason: "commandFailed",
                    code: "SUBTITLE_ERASURE_UNAVAILABLE",
                  }
                );
              let n = new AbortController();
              ((this.request = n), this.update("checking", i));
              let o = !1;
              try {
                if (!this.isRequestCurrent(n)) return this.failedResult();
                let e = await this.dependencies.commercial.execute(
                  i.action,
                  async (e) => {
                    if (!this.isRequestCurrent(n)) return this.failedResult();
                    let r = this.currentSource();
                    if (!r) return this.failedResult();
                    let a = t.getCapability(r);
                    if (
                      !a.available ||
                      !e.selection.benefitType.trim() ||
                      JSON.stringify(a.action) !== JSON.stringify(i.action)
                    )
                      return (this.update("idle", a), this.failedResult());
                    let l = (0, s.pt)(e, n.signal);
                    try {
                      var d, u;
                      if (
                        (this.update("submitting"), !this.isRequestCurrent(n))
                      )
                        return this.failedResult();
                      (l.options.signal.throwIfAborted(), (o = !0));
                      let i = await t.submit(
                        {
                          projectId: this.projectId,
                          source: r,
                          selection: e.selection,
                        },
                        {
                          ...l.options,
                          ...(this.dependencies.generationHistorySubmissionPort
                            ? {
                                generationHistorySubmissionPort:
                                  this.dependencies
                                    .generationHistorySubmissionPort,
                              }
                            : {}),
                        },
                      );
                      if (
                        (l.options.signal.throwIfAborted(),
                        !this.isRequestCurrent(n))
                      )
                        return this.failedResult();
                      return (
                        this.update(
                          "rejected" === i.status ? "failed" : i.status,
                        ),
                        "accepted" === i.status &&
                          this.isRequestCurrent(n) &&
                          (null == (d = (u = this.dependencies).onAccepted) ||
                            d.call(u, i)),
                        { ok: !0, value: i }
                      );
                    } finally {
                      l.dispose();
                    }
                  },
                );
                if (!this.isRequestCurrent(n)) return this.failedResult();
                if ("executed" === e.status) {
                  if (
                    (e.value.ok || this.update("idle"),
                    e.value.ok && "accepted" === e.value.value.status)
                  ) {
                    let t = ik(
                      this.dependencies,
                      [e.value.value],
                      n.signal,
                      this.dependencies.reconciliationDeadlineMs ?? 15e3,
                    );
                    try {
                      if ((await t.promise, !this.isRequestCurrent(n)))
                        return this.failedResult();
                      this.close();
                    } finally {
                      t.cancel();
                    }
                  }
                  return e.value;
                }
                if ("error" === e.status) throw e.error;
                return (this.update("idle"), this.failedResult());
              } catch (e) {
                return (
                  this.isRequestCurrent(n) &&
                    this.update(
                      !o || e instanceof sd.uz ? "failed" : "unknown",
                    ),
                  this.failedResult()
                );
              } finally {
                this.request === n && (this.request = void 0);
              }
            }),
            (this.revalidate = () => {
              var e;
              if (!this.isCurrent()) return void this.close();
              if ("active" !== this.snapshot.status) return;
              let t = this.currentSource();
              if (!t) return void this.close();
              let i =
                (null == (e = this.dependencies.integration)
                  ? void 0
                  : e.getCapability(t)) ?? sy;
              i.available
                ? (JSON.stringify(i) !==
                    JSON.stringify(this.snapshot.capability) ||
                    JSON.stringify(t) !==
                      JSON.stringify(this.snapshot.source)) &&
                  ((this.snapshot = Object.freeze({
                    ...this.snapshot,
                    source: t,
                    capability: i,
                  })),
                  this.publish())
                : this.close();
            }));
        }
      }
      var sw = i(63597),
        sA = i(84901);
      let sC = Object.freeze({ status: "inactive" }),
        sR = 0;
      class sk {
        presentAcceptedResult(e, t, i) {
          this.resultPresentation
            .settle(e.identity, [{ nodeId: t, resourceId: i }], () => {
              var i, s;
              this.activeSubmission === e &&
                !this.disposed &&
                this.dependencies.getEditAvailability().local.available &&
                (null == (i = (s = this.dependencies).activateResultNode) ||
                  i.call(s, t));
            })
            .then(() => {
              this.activeSubmission === e && (this.activeSubmission = void 0);
            });
        }
        getHandoff() {
          var e, t;
          return (
            this.handoff ??
              (this.handoff =
                null == (e = (t = this.dependencies).createHandoff)
                  ? void 0
                  : e.call(t, this.getSnapshot)),
            this.handoff
          );
        }
        readSubmissionDraft(e) {
          let t = this.snapshot;
          return "active" === t.status &&
            this.dependencies.getEditAvailability().local.available &&
            "available" ===
              (0, i6.f)(t.source, this.dependencies.getEditSource())
            ? { ...e, source: t.source, range: t.range, sessionId: t.sessionId }
            : null;
        }
        notify() {
          for (let e of this.listeners) e();
        }
        notifySource(e) {
          for (let t of this.sourceListeners.get(e) ?? []) t();
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.disposed = !1),
            (this.focusPresentation = null),
            (this.listeners = new Set()),
            (this.sourceListeners = new Map()),
            (this.snapshot = sC),
            (this.sourceSubscription = null),
            (this.pendingHandoffs = new Set()),
            (this.lifetime = null),
            (this.submissionSequence = 0),
            (this.open = (e) => {
              var t, i, s;
              let { nodeIds: n } = e;
              if (this.disposed)
                return { code: "DISPOSED", ok: !1, reason: "commandFailed" };
              let o = (0, i5.q)(this.dependencies, e);
              if (!o.ok) return o;
              if (1 !== n.length)
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let r = o.value.sources[0],
                l = this.dependencies.getEditSource();
              if (!l)
                return {
                  code: "SPEC_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let d = (0, i6.L)(r),
                u = (0, i6.f)(r, l);
              if ("sourceUnavailable" === u)
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if ("aspectRatioUnsupported" === u)
                return {
                  code: "ASPECT_RATIO_UNSUPPORTED",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (void 0 === d || "available" !== u)
                return {
                  code: "DURATION_UNSUPPORTED",
                  ok: !1,
                  reason: "commandFailed",
                };
              (this.close(),
                this.resultPresentation.cancel(),
                (this.activeSubmission = void 0));
              let c =
                "function" ==
                typeof (null == (s = globalThis.crypto) ? void 0 : s.randomUUID)
                  ? globalThis.crypto.randomUUID()
                  : ((sR += 1), `partial-reshoot-${sR}`);
              return (
                (this.snapshot = Object.freeze({
                  editSource: Object.freeze({ ...l }),
                  range: Object.freeze({ startMs: 0, endMs: l.minMs }),
                  sessionId: c,
                  source: Object.freeze({ ...r, durationMs: d }),
                  status: "active",
                })),
                (this.lifetime = new AbortController()),
                (this.sourceSubscription =
                  this.dependencies.subscribeObjectSnapshot(
                    r.nodeId,
                    this.handleSourceChange,
                  )),
                (this.focusPresentation = (0, a.FX)(
                  this.dependencies.viewport,
                )),
                this.focusPresentation.present((0, sA.X)(r.nodeId)),
                null == (t = (i = this.dependencies).onOpened) || t.call(i),
                this.notify(),
                this.notifySource(r.nodeId),
                { ok: !0, value: { sessionId: c } }
              );
            }),
            (this.getCommerceAction = (e) => {
              var t;
              let i = this.readSubmissionDraft(e);
              return i
                ? ((null == (t = this.getHandoff())
                    ? void 0
                    : t.getCommerceAction(i)) ?? null)
                : null;
            }),
            (this.submit = async (e, t) => {
              var i;
              if (t.aborted) return { status: "rejected", reason: "cancelled" };
              let s = this.readSubmissionDraft(e);
              if (!s || !this.lifetime)
                return { status: "rejected", reason: "sessionUnavailable" };
              let n = this.getHandoff();
              if (!n)
                return { status: "rejected", reason: "handoffUnavailable" };
              let o = this.lifetime;
              if (null == (i = this.activeSubmission) ? void 0 : i.pending)
                return { status: "rejected", reason: "busy" };
              let r = {
                identity: `${s.sessionId}:submission:${++this.submissionSequence}`,
                accepted: !1,
                pending: !0,
              };
              ((this.activeSubmission = r),
                this.pendingHandoffs.add(n),
                this.resultPresentation.begin(r.identity));
              let a = (0, i4.O)([t, o.signal]);
              try {
                let e = await n.submit(s, a.signal);
                if (this.disposed)
                  return (
                    this.resultPresentation.cancel(r.identity),
                    { status: "rejected", reason: "cancelled" }
                  );
                return (
                  "accepted" === e.status
                    ? ((r.accepted = !0),
                      this.presentAcceptedResult(
                        r,
                        e.submittedNodeId,
                        e.submittedResourceId,
                      ))
                    : this.resultPresentation.cancel(r.identity),
                  e
                );
              } catch (e) {
                throw (this.resultPresentation.cancel(r.identity), e);
              } finally {
                (a.dispose(),
                  (r.pending = !1),
                  this.pendingHandoffs.delete(n),
                  this.disposed || this.handoff === n || n.dispose());
              }
            }),
            (this.setRange = (e) => {
              let t = this.snapshot;
              if ("active" !== t.status)
                return {
                  code: "INACTIVE_SESSION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let i = this.dependencies.getEditAvailability().local;
              if (!i.available)
                return {
                  ok: !1,
                  reason:
                    "notEditable" === i.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                };
              let s = (0, i5.F)(this.dependencies, [t.source]);
              if (!s.ok) return (this.close(), s);
              let n = this.dependencies.getEditSource();
              if (!n)
                return {
                  code: "SPEC_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let o = (function (e, t, i) {
                if (!Number.isFinite(e.startMs) || !Number.isFinite(e.endMs))
                  return null;
                let s = Math.floor(t);
                if (!Number.isFinite(s) || s < i.minMs) return null;
                let n = Math.min(
                    Math.max(0, Math.round(e.startMs)),
                    s - i.minMs,
                  ),
                  o = Math.min(s, n + i.maxMs),
                  r = Math.min(Math.max(Math.round(e.endMs), n + i.minMs), o);
                return Object.freeze({ startMs: n, endMs: r });
              })(e, t.source.durationMs, n);
              return o
                ? o.startMs === t.range.startMs &&
                  o.endMs === t.range.endMs &&
                  n.minMs === t.editSource.minMs &&
                  n.maxMs === t.editSource.maxMs
                  ? { ok: !0, value: t.range }
                  : ((this.snapshot = Object.freeze({
                      ...t,
                      editSource: Object.freeze({ ...n }),
                      range: o,
                    })),
                    this.notify(),
                    { ok: !0, value: o })
                : { code: "INVALID_RANGE", ok: !1, reason: "commandFailed" };
            }),
            (this.close = () => {
              var e, t, i, s, n;
              if ("inactive" === this.snapshot.status) return;
              let o = this.snapshot.source.nodeId;
              ((null == (e = this.activeSubmission) ? void 0 : e.accepted) ||
                (null == (t = this.activeSubmission) ? void 0 : t.pending) ||
                (this.resultPresentation.cancel(),
                (this.activeSubmission = void 0)),
                null == (i = this.lifetime) || i.abort(),
                (this.lifetime = null),
                this.handoff &&
                  !this.pendingHandoffs.has(this.handoff) &&
                  this.handoff.dispose(),
                (this.handoff = void 0),
                null == (s = this.sourceSubscription) || s.call(this),
                (this.sourceSubscription = null),
                null == (n = this.focusPresentation) || n.cancel(),
                (this.focusPresentation = null),
                (this.snapshot = sC),
                this.notify(),
                this.notifySource(o));
            }),
            (this.dispose = () => {
              if (!this.disposed) {
                for (let e of ((this.disposed = !0),
                this.resultPresentation.dispose(),
                (this.activeSubmission = void 0),
                this.close(),
                this.pendingHandoffs))
                  e.dispose();
                (this.pendingHandoffs.clear(),
                  this.listeners.clear(),
                  this.sourceListeners.clear());
              }
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.isSourceActive = (e) =>
              "active" === this.snapshot.status &&
              this.snapshot.source.nodeId === e),
            (this.subscribeSource = (e, t) => {
              if (this.disposed) return () => void 0;
              let i = this.sourceListeners.get(e) ?? new Set();
              return (
                i.add(t),
                this.sourceListeners.set(e, i),
                () => {
                  (i.delete(t), 0 === i.size && this.sourceListeners.delete(e));
                }
              );
            }),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.handleSourceChange = () => {
              "active" !== this.snapshot.status ||
                (0, i5.F)(this.dependencies, [this.snapshot.source]).ok ||
                this.close();
            }),
            (this.resultPresentation = new eJ.w({
              deadlineMs: 15e3,
              getObjectSnapshot: e.getObjectSnapshot,
              subscribeObjectSnapshot: e.subscribeObjectSnapshot,
              viewport: e.viewport,
            })));
        }
      }
      var s_ = i(85711),
        sO = i(41072);
      let sP = Object.freeze({ status: "inactive" }),
        sD = 0;
      class sN {
        notify() {
          for (let e of this.listeners) e();
        }
        notifySource(e) {
          for (let t of this.sourceListeners.get(e) ?? []) t();
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.listeners = new Set()),
            (this.sourceListeners = new Map()),
            (this.focusPresentation = null),
            (this.disposed = !1),
            (this.sourceSubscription = null),
            (this.submissionAbortController = null),
            (this.snapshot = sP),
            (this.source = null),
            (this.submissionSequence = 0),
            (this.close = () => {
              var e, t;
              if ("inactive" === this.snapshot.status) return;
              let i = this.snapshot.source.nodeId;
              (null == (e = this.sourceSubscription) || e.call(this),
                (this.sourceSubscription = null),
                null == (t = this.focusPresentation) || t.cancel(),
                (this.focusPresentation = null),
                (this.source = null),
                (this.snapshot = sP),
                this.notify(),
                this.notifySource(i));
            }),
            (this.dispose = () => {
              var e;
              this.disposed ||
                ((this.disposed = !0),
                null == (e = this.submissionAbortController) || e.abort(),
                (this.submissionAbortController = null),
                this.resultPresentation.dispose(),
                this.close(),
                this.listeners.clear(),
                this.sourceListeners.clear());
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.getCommerceAction = (e) => {
              var t;
              return (
                (null == (t = this.dependencies.handoff)
                  ? void 0
                  : t.getCommerceAction(e)) ?? null
              );
            }),
            (this.getSourceVideoElement = () => {
              let e =
                "active" === this.snapshot.status
                  ? this.snapshot.source.nodeId
                  : null;
              return e ? this.sourceVideoElements.get(e) : null;
            }),
            (this.isSourceActive = (e) =>
              "active" === this.snapshot.status &&
              this.snapshot.source.nodeId === e),
            (this.open = (e) => {
              var t, i, s, n, o;
              let { nodeIds: r } = e;
              if (this.disposed)
                return { code: "DISPOSED", ok: !1, reason: "commandFailed" };
              if (1 !== r.length)
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let l = (0, i5.q)(this.dependencies, e);
              if (!l.ok) return l;
              let d = l.value.sources[0],
                u = (0, sO.f)(d);
              if (!u)
                return {
                  code: "SOURCE_METADATA_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if ("durationUnsupported" === (0, s_.xn)(d))
                return {
                  code: "VIDEO_EDIT_DURATION_UNSUPPORTED",
                  ok: !1,
                  reason: "commandFailed",
                };
              this.close();
              let c = ((sD += 1), `video-edit-${sD}`);
              return (
                (this.source = d),
                (this.snapshot = Object.freeze({
                  handoff: (null == (t = this.dependencies.handoff)
                    ? void 0
                    : t.getState(u)) ?? {
                    available: !1,
                    reason: "HANDOFF_UNAVAILABLE",
                  },
                  referenceConstraint:
                    null == (s = this.dependencies.handoff) ||
                    null == (i = s.getReferenceConstraint)
                      ? void 0
                      : i.call(s, u),
                  sessionId: c,
                  source: u,
                  status: "active",
                  submission: { status: "idle" },
                })),
                (this.sourceSubscription =
                  this.dependencies.subscribeObjectSnapshot(
                    d.nodeId,
                    this.handleSourceChange,
                  )),
                (this.focusPresentation = (0, a.FX)(
                  this.dependencies.viewport,
                )),
                this.focusPresentation.present((0, sA.X)(d.nodeId)),
                null == (n = (o = this.dependencies).onOpened) || n.call(o),
                this.notify(),
                this.notifySource(d.nodeId),
                { ok: !0, value: { sessionId: c } }
              );
            }),
            (this.submit = async (e, t) => {
              var i, s, n, o;
              let r = this.snapshot,
                a = this.dependencies.handoff;
              if ("active" !== r.status)
                return {
                  code: "INACTIVE_SESSION",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (!a || !r.handoff.available)
                return {
                  code: "HANDOFF_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (
                ((s = e),
                (n = r.source),
                s.source.nodeId !== n.nodeId ||
                  s.source.resourceId !== n.resourceId ||
                  s.source.vid !== n.vid)
              )
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let l = new AbortController(),
                d = `${r.sessionId}:submission:${++this.submissionSequence}`;
              (null == (i = this.submissionAbortController) || i.abort(),
                (this.submissionAbortController = l),
                this.resultPresentation.begin(d),
                (this.snapshot = Object.freeze({
                  ...r,
                  submission: { status: "submitting" },
                })),
                this.notify());
              try {
                let i = await a.submit(e, t, l.signal);
                if (l.signal.aborted)
                  return (
                    this.resultPresentation.cancel(d),
                    {
                      code: "SUBMIT_CANCELLED",
                      ok: !1,
                      reason: "commandFailed",
                    }
                  );
                let s =
                  "active" === this.snapshot.status &&
                  this.snapshot.sessionId === r.sessionId;
                if ("rejected" === i.status) {
                  if ((this.resultPresentation.cancel(d), s)) {
                    let e = (o = i).guided
                      ? { status: "idle" }
                      : { message: o.reason, status: "failed" };
                    ((this.snapshot = Object.freeze({
                      ...this.snapshot,
                      submission: e,
                    })),
                      this.notify());
                  }
                  return {
                    code: "HANDOFF_REJECTED",
                    message: i.reason,
                    ok: !1,
                    reason: "commandFailed",
                  };
                }
                return (
                  this.resultPresentation.settle(
                    d,
                    [
                      {
                        nodeId: i.submittedNodeId,
                        resourceId: i.submittedResourceId,
                      },
                    ],
                    () => {
                      var e, t;
                      !this.disposed &&
                        this.dependencies.getEditAvailability().local
                          .available &&
                        (null ==
                          (e = (t = this.dependencies).activateResultNode) ||
                          e.call(t, i.submittedNodeId));
                    },
                  ),
                  s &&
                    ((this.snapshot = Object.freeze({
                      ...this.snapshot,
                      submission: { status: "idle" },
                    })),
                    this.notify()),
                  { ok: !0, value: { status: "accepted" } }
                );
              } catch (t) {
                if ((this.resultPresentation.cancel(d), l.signal.aborted))
                  return {
                    code: "SUBMIT_CANCELLED",
                    ok: !1,
                    reason: "commandFailed",
                  };
                let e =
                  t instanceof Error ? t.message : "Video edit handoff failed.";
                return (
                  "active" === this.snapshot.status &&
                    this.snapshot.sessionId === r.sessionId &&
                    ((this.snapshot = Object.freeze({
                      ...this.snapshot,
                      submission: { message: e, status: "failed" },
                    })),
                    this.notify()),
                  {
                    code: "HANDOFF_FAILED",
                    message: e,
                    ok: !1,
                    reason: "commandFailed",
                  }
                );
              } finally {
                this.submissionAbortController === l &&
                  (this.submissionAbortController = null);
              }
            }),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.subscribeSource = (e, t) => {
              if (this.disposed) return () => void 0;
              let i = this.sourceListeners.get(e) ?? new Set();
              return (
                i.add(t),
                this.sourceListeners.set(e, i),
                () => {
                  (i.delete(t), 0 === i.size && this.sourceListeners.delete(e));
                }
              );
            }),
            (this.subscribeSourceVideoElement = (e) => {
              let t =
                "active" === this.snapshot.status
                  ? this.snapshot.source.nodeId
                  : null;
              return t
                ? this.sourceVideoElements.subscribe(t, e)
                : () => void 0;
            }),
            (this.handleSourceChange = () => {
              var e;
              let t = this.source;
              !t ||
                (0, i5.F)(this.dependencies, [t]).ok ||
                (null == (e = this.submissionAbortController) || e.abort(),
                (this.submissionAbortController = null),
                this.close());
            }),
            (this.sourceVideoElements = e.sourceVideoElements),
            (this.resultPresentation = new eJ.w({
              deadlineMs: 15e3,
              getObjectSnapshot: e.getObjectSnapshot,
              subscribeObjectSnapshot: e.subscribeObjectSnapshot,
              viewport: e.viewport,
            })));
        }
      }
      var sU = i(40894),
        sT = i(1748),
        sM = i(74694),
        sx = i(23551);
      let sF = Object.freeze({ status: "inactive" });
      Object.freeze({
        code: "FRAME_INTERPOLATION_UNAVAILABLE",
        message: "Frame interpolation is not available.",
        ok: !1,
        reason: "experimentDisabled",
      });
      let sj = 0;
      class sL {
        refreshActiveSession(e) {
          let t = (0, i5.F)(this.dependencies, e.sources);
          if (!t.ok) return t;
          let i = sB({
            sessionId: e.sessionId,
            sources: t.value.sources,
            submitState: "idle",
            targetFPS: e.targetFPS,
          });
          return (
            (this.snapshot = i),
            this.notify(),
            { ok: !0, value: { session: i } }
          );
        }
        async executeSubmit(e, t, i, s, n) {
          let o;
          try {
            o = await this.dependencies.commercial.execute(
              (0, sM.q)(t.length),
              (o) => this.executeAllowedSubmit(e, t, o, i, s, n),
              {
                enterSource: "generate",
                surfaceKey: "video.post_edit.frame_interpolation",
                isUseSuccess: (e) => e.ok,
              },
            );
          } catch (t) {
            if (i.aborted || this.pendingSubmissionToken !== s)
              return {
                code: "SUBMIT_CANCELLED",
                ok: !1,
                reason: "commandFailed",
              };
            return (
              this.publishCommerceUnavailable(n, t, e.sessionId),
              {
                code: "COMMERCIAL_UNAVAILABLE",
                ok: !1,
                reason: "commandFailed",
              }
            );
          }
          return "executed" === o.status
            ? o.value
            : "blocked" === o.status
              ? (this.publishSubmitIdle(e.sessionId),
                { code: "COMMERCIAL_BLOCKED", ok: !1, reason: "commandFailed" })
              : "unavailable" === o.status
                ? (this.publishCommerceUnavailable(
                    n,
                    Error(o.state.reason),
                    e.sessionId,
                  ),
                  {
                    code: "COMMERCIAL_UNAVAILABLE",
                    ok: !1,
                    reason: "commandFailed",
                  })
                : "cancelled" === o.status
                  ? (this.publishSubmitIdle(e.sessionId),
                    {
                      code: "SUBMIT_CANCELLED",
                      ok: !1,
                      reason: "commandFailed",
                    })
                  : (this.publishCommerceUnavailable(n, o.error, e.sessionId),
                    {
                      code: "COMMERCIAL_UNAVAILABLE",
                      ok: !1,
                      reason: "commandFailed",
                    });
        }
        async executeAllowedSubmit(e, t, i, n, o, r) {
          let { options: a, dispose: l } = (0, s.pt)(i, n);
          try {
            let s;
            if ((n = a.signal).aborted || this.pendingSubmissionToken !== o)
              return {
                code: "SUBMIT_CANCELLED",
                ok: !1,
                reason: "commandFailed",
              };
            let l = sz(this.dependencies);
            if (l)
              return (
                this.publishSubmitIdle(e.sessionId),
                { ok: !1, reason: l }
              );
            try {
              s = this.getOrCreateAttempt(e, t, i.selection.benefitType, i);
            } catch (t) {
              return (
                this.publishFailure(r, t, e.sessionId),
                { code: "SUBMIT_UNAVAILABLE", ok: !1, reason: "commandFailed" }
              );
            }
            return await this.executePreparedSubmit(s, n, o, r, i);
          } finally {
            l();
          }
        }
        getOrCreateAttempt(e, t, i, s) {
          let n, o, r, a;
          var l,
            u,
            c,
            h,
            p,
            m,
            f,
            b = this.dependencies;
          if (!(null == (l = b.getDraftId()) ? void 0 : l.trim()))
            throw Error("Video frame interpolation draft id is missing.");
          if (!b.getProjectId().trim())
            throw Error("Video frame interpolation project id is missing.");
          let g = JSON.stringify([
            s.consumption,
            e.targetFPS,
            t.map((e) => [e.nodeId, e.resourceId, e.vid]),
          ]);
          if (this.attempt && this.attempt.inputSignature !== g) {
            if (this.attempt.ambiguityOpen)
              throw Error(
                "Resolve the original ambiguous submission before changing consumption",
              );
            this.clearAttempt();
          }
          if (this.attempt && this.attempt.benefitType !== i) {
            if (this.attempt.ambiguityOpen)
              throw Error(
                "Video frame interpolation commerce selection changed after an ambiguous submission.",
              );
            this.clearAttempt();
          }
          let v =
            this.attempt ??
            ((u = this.dependencies),
            (c = e),
            (h = t),
            (p = g),
            (m = i),
            (o = h.map((e) =>
              Object.freeze({
                nodeId: (u.createNodeId ?? d.XG)(),
                resourceId: (u.createResourceId ?? d.ve)(),
                source: e,
              }),
            )),
            (r = (u.createSubmitId ?? d.pf)()),
            (a = [
              {
                acceptedItems: Object.freeze([]),
                completed: !1,
                items: Object.freeze(o),
                rejectedItems: Object.freeze([]),
                request:
                  ((n = (f = {
                    benefitType: m,
                    items: o,
                    projectId: u.getProjectId(),
                    submitId: r,
                    targetFPS: c.targetFPS,
                  }).items[0]),
                  {
                    project_id: f.projectId,
                    op: 3,
                    post_edit: {
                      source_node_id:
                        (null == n ? void 0 : n.source.nodeId) ?? "",
                      source_resource_id:
                        (null == n ? void 0 : n.source.resourceId) ?? "",
                      submit_id: f.submitId,
                      items: f.items.map((e) => ({
                        output_node_id: e.nodeId,
                        output_title: (0, eA.MF)(
                          e.source.title,
                          "video.frame-interpolation",
                        ),
                        source_node_id: e.source.nodeId,
                        source_resource_id: e.source.resourceId,
                        item: {
                          commerce_selection: { benefit_type: f.benefitType },
                          params: {
                            video_params: {
                              fps: f.targetFPS,
                              mode: e6.wY.InsertFrame,
                              materials: [
                                { role: 4, type: 3, vid: e.source.vid },
                              ],
                            },
                          },
                          reference_sources: [
                            {
                              material_idx: 0,
                              node_id: e.source.nodeId,
                              resource_id: e.source.resourceId,
                            },
                          ],
                          resource_id: e.resourceId,
                          type: 2,
                        },
                      })),
                    },
                  }),
                submitId: r,
              },
            ]),
            {
              ambiguityOpen: !1,
              benefitType: m,
              batches: Object.freeze(a),
              inputSignature: p,
              sessionId: c.sessionId,
              targetFPS: c.targetFPS,
            });
          if (null === this.attempt)
            for (let e of v.batches) this.resultPresentation.begin(e.submitId);
          return ((this.attempt = v), v);
        }
        async executePreparedSubmit(e, t, i, s, n) {
          for (let r of e.batches) {
            if (r.completed) continue;
            let a = await this.executePreparedBatch(r, t, i, n),
              l = sz(this.dependencies);
            if (l)
              return (
                this.publishSubmitIdle(e.sessionId),
                { ok: !1, reason: l }
              );
            if ("cancelled" === a.status)
              return {
                code: "SUBMIT_CANCELLED",
                ok: !1,
                reason: "commandFailed",
              };
            if ("ambiguous" === a.status) {
              var o;
              return (
                null == (o = r.history) || o.reject(eF.OH.MATRIX_ERROR),
                (e.ambiguityOpen = !0),
                this.publishFailure(s, a.error, e.sessionId),
                { code: "SUBMIT_FAILED", ok: !1, reason: "commandFailed" }
              );
            }
            if ("blocked" === a.status)
              return (
                this.publishSubmitIdle(e.sessionId),
                { ok: !1, reason: a.reason }
              );
            ((r.acceptedItems = a.acceptedItems),
              (r.rejectedItems = a.rejectedItems),
              (r.completed = !0),
              this.registerAcceptedItems(r, a.acceptedItems),
              this.settleResultPresentation(r, a.acceptedItems));
          }
          let r = e.batches.flatMap((e) => e.acceptedItems),
            a = e.batches.flatMap((e) => e.rejectedItems);
          if (a.length > 0)
            return r.length > 0
              ? (this.finishAcceptedAttempt(e), sq(r))
              : (this.finishRejectedAttempt(e, a, s),
                {
                  code: "SUBMIT_FAILED",
                  message: (0, sU.g3)(),
                  ok: !1,
                  reason: "commandFailed",
                });
          if (0 === r.length) {
            for (let t of e.batches) this.resultPresentation.cancel(t.submitId);
            return (
              this.publishFailure(
                s,
                Error("Video frame interpolation was not accepted."),
                e.sessionId,
              ),
              { code: "SUBMIT_FAILED", ok: !1, reason: "commandFailed" }
            );
          }
          return (this.finishAcceptedAttempt(e), sq(r));
        }
        async executePreparedBatch(e, t, i, s) {
          var n, o;
          null == (n = this.nodeArrivalCancel) || n.call(this);
          let r = sz(this.dependencies);
          if (r) return { reason: r, status: "blocked" };
          let a = ik(
            this.dependencies,
            e.items,
            t,
            this.dependencies.reconciliationDeadlineMs ?? 15e3,
          );
          this.nodeArrivalCancel = a.cancel;
          try {
            try {
              let n = e.items[0];
              if (!n)
                throw Error(
                  "Video frame interpolation batch requires at least one item.",
                );
              let o = await (0, h.Ud)({
                generationHistorySubmissionPort:
                  this.dependencies.generationHistorySubmissionPort,
                mediaType: "video",
                modelName: (0, h.vN)(e.request),
                name: (0, h.nA)(e.request),
                nodeId: n.nodeId,
                onRegistered: (t) => {
                  e.history = t;
                },
                resourceIds: e.items.map((e) => e.resourceId),
                submitId: e.submitId,
                generate: () =>
                  this.dependencies.generator.nodeGenerate(e.request, {
                    signal: t,
                    ...((null == s ? void 0 : s.consumption)
                      ? { consumption: s.consumption }
                      : {}),
                  }),
              });
              if (this.isSubmissionCancelled(t, i))
                return ((0, h.XQ)(e.history), { status: "cancelled" });
              let r = sz(this.dependencies);
              if (r) return { reason: r, status: "blocked" };
              return (
                a.cancel(),
                this.nodeArrivalCancel === a.cancel &&
                  (this.nodeArrivalCancel = null),
                this.resolveBatchResponse(e, o.results, t, i)
              );
            } catch (r) {
              if (this.isSubmissionCancelled(t, i))
                return ((0, h.XQ)(e.history), { status: "cancelled" });
              let s = await a.promise,
                n = sz(this.dependencies);
              if (n) return { reason: n, status: "blocked" };
              if ("arrived" === s)
                return {
                  acceptedItems: e.items,
                  rejectedItems: Object.freeze([]),
                  status: "complete",
                };
              return (
                null == (o = e.history) || o.reject(eF.OH.MATRIX_ERROR),
                { error: r, status: "ambiguous" }
              );
            }
          } finally {
            (a.cancel(),
              this.nodeArrivalCancel === a.cancel &&
                (this.nodeArrivalCancel = null));
          }
        }
        async resolveBatchResponse(e, t, i, s) {
          let n = [],
            o = [],
            r = [],
            a = [];
          e.items.forEach((e, i) => {
            var s;
            let l = null == (s = t[i]) ? void 0 : s.state;
            (1 === l && n.push(e),
              3 === l && o.push(e),
              2 === l && r.push(e),
              void 0 === l && a.push(e));
          });
          let l = [...o, ...a];
          if (0 === l.length)
            return { acceptedItems: n, rejectedItems: r, status: "complete" };
          let d = ik(
            this.dependencies,
            l,
            i,
            this.dependencies.reconciliationDeadlineMs ?? 15e3,
          );
          this.nodeArrivalCancel = d.cancel;
          try {
            let t = await d.promise,
              o = sz(this.dependencies);
            if (o) return { reason: o, status: "blocked" };
            if ("arrived" !== t)
              return {
                error: Error("Video frame interpolation status is ambiguous."),
                status: "ambiguous",
              };
            if (this.isSubmissionCancelled(i, s))
              return ((0, h.XQ)(e.history), { status: "cancelled" });
            return {
              acceptedItems: [...n, ...l],
              rejectedItems: r,
              status: "complete",
            };
          } finally {
            (d.cancel(),
              this.nodeArrivalCancel === d.cancel &&
                (this.nodeArrivalCancel = null));
          }
        }
        isSubmissionCancelled(e, t) {
          return e.aborted || this.pendingSubmissionToken !== t;
        }
        registerAcceptedItems(e, t) {
          let i = t.map((e) => e.resourceId);
          for (let e of i) this.dependencies.trackSubmittedResource(e);
          this.dependencies.commerceRefreshCoordinator.register({
            acceptedResourceIds: i,
            recoveryState: "complete",
            submitId: e.submitId,
          });
        }
        settleResultPresentation(e, t) {
          var i;
          0 === t.length
            ? this.resultPresentation.cancel(e.submitId)
            : (null == (i = e.history) ||
                i.settle((0, h.Vy)(t.map((e) => e.resourceId))),
              this.resultPresentation.settle(
                e.submitId,
                t.map((e) => {
                  let { nodeId: t, resourceId: i } = e;
                  return { nodeId: t, resourceId: i };
                }),
              ));
        }
        finishAcceptedAttempt(e) {
          (this.clearAttempt(),
            "active" === this.snapshot.status &&
              this.snapshot.sessionId === e.sessionId &&
              ((this.snapshot = sF), this.notify()));
        }
        finishRejectedAttempt(e, t, i) {
          let s = t.map((e) => e.source);
          if (!s[0]) return;
          let n = Object.freeze(s),
            o = () => {
              (this.clearAttempt(),
                "active" === this.snapshot.status &&
                  this.snapshot.sessionId === e.sessionId &&
                  ((this.snapshot = sB({
                    sessionId: e.sessionId,
                    sources: n,
                    submitErrorMessage: (0, sU.g3)(),
                    submitState: "failed",
                    targetFPS: e.targetFPS,
                  })),
                  this.notify()));
            },
            r = Error("Video frame interpolation rejected some batch items.");
          i ? i.fail(r, o) : o();
        }
        clearAttempt() {
          var e;
          (null == (e = this.nodeArrivalCancel) || e.call(this),
            (this.nodeArrivalCancel = null),
            (this.attempt = null));
        }
        cancelActiveAttempt() {
          var e;
          if (this.attempt)
            for (let e of this.attempt.batches) (0, h.XQ)(e.history);
          (null == (e = this.pendingSubmissionAbortController) || e.abort(),
            (this.pendingSubmissionAbortController = null),
            (this.pendingSubmission = null),
            (this.pendingSubmissionToken = null),
            this.clearAttempt(),
            this.resultPresentation.cancel());
        }
        publishSubmitIdle(e) {
          if (
            "active" !== this.snapshot.status ||
            this.snapshot.sessionId !== e
          )
            return;
          let { failureReason: t, submitErrorMessage: i, ...s } = this.snapshot;
          ((this.snapshot = Object.freeze({ ...s, submitState: "idle" })),
            this.notify());
        }
        publishSourceUnavailable(e) {
          this.publishFailedSnapshot(e, (0, sU.GA)());
        }
        publishCommerceUnavailable(e, t, i) {
          e
            ? e.fail(t, () => this.publishFailedSnapshot(i, (0, sU.Ai)()))
            : this.publishFailedSnapshot(i, (0, sU.Ai)());
        }
        publishFailure(e, t, i) {
          let s = (0, eX.fG)(t) ?? void 0,
            n = (0, sU.kG)();
          ("active" === this.snapshot.status &&
            "batch" === this.snapshot.mode &&
            (n = (0, sU.g3)()),
          e)
            ? e.fail(t, () => this.publishFailedSnapshot(i, n, s))
            : this.publishFailedSnapshot(i, n, s);
        }
        publishFailedSnapshot(e, t, i) {
          if (
            "active" !== this.snapshot.status ||
            this.snapshot.sessionId !== e
          )
            return;
          let { failureReason: s, ...n } = this.snapshot,
            o = { ...n, submitErrorMessage: t, submitState: "failed" };
          (i
            ? (this.snapshot = Object.freeze({ ...o, failureReason: i }))
            : (this.snapshot = Object.freeze(o)),
            this.notify());
        }
        notify() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.listeners = new Set()),
            (this.attempt = null),
            (this.nodeArrivalCancel = null),
            (this.pendingSubmission = null),
            (this.pendingSubmissionAbortController = null),
            (this.pendingSubmissionToken = null),
            (this.snapshot = sF),
            (this.disposed = !1),
            (this.close = () => {
              (this.cancelActiveAttempt(),
                "inactive" !== this.snapshot.status &&
                  ((this.snapshot = sF), this.notify()));
            }),
            (this.dispose = () => {
              this.disposed ||
                ((this.disposed = !0),
                this.cancelActiveAttempt(),
                this.resultPresentation.dispose(),
                (this.snapshot = sF),
                this.listeners.clear());
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.open = (e) => {
              var t;
              if (this.disposed)
                return { code: "DISPOSED", ok: !1, reason: "commandFailed" };
              let i = (0, i5.q)(this.dependencies, e);
              if (!i.ok) return i;
              this.cancelActiveAttempt();
              let s = sB({
                sessionId:
                  "function" ==
                  typeof (null == (t = globalThis.crypto)
                    ? void 0
                    : t.randomUUID)
                    ? globalThis.crypto.randomUUID()
                    : ((sj += 1), `video-frame-interpolation-${sj}`),
                sources: i.value.sources,
                submitState: "idle",
                targetFPS: 30,
              });
              return (
                (this.snapshot = s),
                this.notify(),
                { ok: !0, value: { sessionId: s.sessionId } }
              );
            }),
            (this.setTargetFPS = (e) => {
              if (
                "active" !== this.snapshot.status ||
                this.snapshot.targetFPS === e ||
                "submitting" === this.snapshot.submitState ||
                !this.snapshot.enabledTargetFPS.includes(e)
              )
                return;
              this.snapshot = sB({
                ...this.snapshot,
                targetFPS: e,
                submitState: "idle",
              });
              let t = { isBatchEdit: +(this.snapshot.sources.length > 1) };
              for (let n of this.snapshot.sources) {
                var i, s;
                null == (i = (s = this.dependencies).reportPostEditAction) ||
                  i.call(
                    s,
                    n.nodeId,
                    30 === e
                      ? "frame_interpolation_30fps"
                      : "frame_interpolation_60fps",
                    t,
                  );
              }
              this.notify();
            }),
            (this.submit = async () => {
              var e, t;
              if (this.pendingSubmission) return this.pendingSubmission;
              if ("active" !== this.snapshot.status)
                return {
                  code: "INACTIVE_SESSION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let i = this.dependencies.getEditAvailability().local;
              if (!i.available)
                return {
                  ok: !1,
                  reason:
                    "notEditable" === i.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                };
              let s = this.snapshot,
                n = this.refreshActiveSession(s);
              if (!n.ok) return (this.publishSourceUnavailable(s.sessionId), n);
              let o = n.value.session;
              if (
                o.modeDisabledReason ||
                !o.enabledTargetFPS.includes(o.targetFPS)
              )
                return {
                  code: "TARGET_FPS_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let r = (t = o).sources.filter((e) => (0, sx.nt)(e, t.targetFPS));
              if (0 === r.length)
                return {
                  code: "TARGET_FPS_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (!(0, sT.m4)(r.length)) return (0, sT.bF)();
              let { failureReason: a, submitErrorMessage: l, ...d } = o;
              ((this.snapshot = Object.freeze({
                ...d,
                submitState: "submitting",
              })),
                this.notify());
              let u = new AbortController(),
                c = {};
              ((this.pendingSubmissionAbortController = u),
                (this.pendingSubmissionToken = c));
              let h = (
                this.dependencies.operations
                  ? this.dependencies.operations
                      .run(
                        "submitVideoFrameInterpolation",
                        {
                          fields: {
                            itemCount: r.length,
                            subjectId:
                              (null == (e = r[0]) ? void 0 : e.nodeId) ?? "",
                            subjectType: "video-frame-interpolation",
                          },
                          mode: "async",
                          signal: u.signal,
                        },
                        (e) => this.executeSubmit(o, r, u.signal, c, e),
                      )
                      .catch((e) => {
                        if ((0, e$.vh)(e))
                          return {
                            code: "SUBMIT_CANCELLED",
                            ok: !1,
                            reason: "commandFailed",
                          };
                        throw e;
                      })
                  : this.executeSubmit(o, r, u.signal, c)
              ).finally(() => {
                this.pendingSubmission === h &&
                  ((this.pendingSubmission = null),
                  (this.pendingSubmissionAbortController = null),
                  (this.pendingSubmissionToken = null));
              });
              return ((this.pendingSubmission = h), h);
            }),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.dependencies = e),
            (this.resultPresentation = new eJ.w({
              deadlineMs: e.reconciliationDeadlineMs ?? 15e3,
              getObjectSnapshot: e.getObjectSnapshot,
              subscribeObjectSnapshot: e.subscribeObjectSnapshot,
              viewport: e.viewport,
            })));
        }
      }
      function sz(e) {
        let t = e.getEditAvailability().local;
        return t.available
          ? null
          : "notEditable" === t.reason
            ? "permissionDenied"
            : "notEditingReady";
      }
      function sB(e) {
        var t, i;
        let s,
          n,
          o = e.sources.length > 1 ? "batch" : "single",
          r = (0, sx.GS)(e.sources, e.targetFPS),
          a = r.targetFPS,
          l = (0, sx.px)(e.sources),
          d = r.modeDisabledReason;
        return (
          Object.keys(r.disabledTargetFPSReasons).length > 0 &&
            (n = r.disabledTargetFPSReasons),
          Object.freeze({
            ...(l.length > 0 ? { disabledSources: l } : {}),
            eligibleSourceCount: r.eligibleSourceCount,
            enabledTargetFPS: r.enabledTargetFPS,
            mode: o,
            sessionId: e.sessionId,
            sources: e.sources,
            status: "active",
            ...(void 0 === e.submitErrorMessage
              ? {}
              : { submitErrorMessage: e.submitErrorMessage }),
            submitState: e.submitState,
            targetFPS: a,
            ...(void 0 === d ? {} : { modeDisabledReason: d }),
            ...(void 0 === n ? {} : { disabledTargetFPSReasons: n }),
            ...((t = e.sources),
            (i = a),
            (s = (0, sx.Wh)(t, i)) ? { sourceWarning: s } : {}),
          })
        );
      }
      function sq(e) {
        return {
          ok: !0,
          value: { submittedNodeIds: e.map((e) => e.source.nodeId) },
        };
      }
      var sV = i(30043),
        sH = i(69668),
        sW = i(11473);
      let sG = Object.freeze({ status: "inactive" }),
        sK = 0,
        s$ = ["2k", "4k"];
      class sX {
        refreshActiveSession(e) {
          let t = (0, i5.F)(this.dependencies, e.sources);
          if (!t.ok) return t;
          let i = sJ({
            resolution: e.resolution,
            sessionId: e.sessionId,
            sources: t.value.sources,
            submitState: "idle",
          });
          return (
            (this.snapshot = i),
            this.notify(),
            { ok: !0, value: { session: i } }
          );
        }
        getOrCreateAttempt(e, t, i, s) {
          var n,
            o,
            r,
            a,
            l,
            d = this.dependencies;
          if (!(null == (r = d.getDraftId()) ? void 0 : r.trim()))
            throw Error("Video upscale draft id is missing.");
          if (!d.getProjectId().trim())
            throw Error("Video upscale project id is missing.");
          let u = JSON.stringify([
            ((a = e),
            (l = t),
            JSON.stringify([
              a.resolution,
              l.map((e) => [e.nodeId, e.resourceId, e.vid]),
            ])),
            s.consumption,
          ]);
          if (this.attempt && this.attempt.inputSignature !== u) {
            if (this.attempt.ambiguityOpen)
              throw Error(
                "Resolve the original ambiguous submission before changing consumption",
              );
            (null == (n = this.nodeArrivalCancel) || n.call(this),
              (this.nodeArrivalCancel = null),
              (this.attempt = null));
          }
          if (this.attempt && this.attempt.benefitType !== i) {
            if (this.attempt.ambiguityOpen)
              throw Error(
                "Video upscale commerce selection changed after an ambiguous submission.",
              );
            (null == (o = this.nodeArrivalCancel) || o.call(this),
              (this.nodeArrivalCancel = null),
              (this.attempt = null));
          }
          let c = this.attempt ?? this.prepareAttempt(e, t, u, i);
          return ((this.attempt = c), c);
        }
        prepareAttempt(e, t, i, s) {
          var n;
          let o,
            r,
            a = (this.dependencies.createSubmitId ?? d.pf)(),
            l = t.map((e) =>
              Object.freeze({
                nodeId: (this.dependencies.createNodeId ?? d.XG)(),
                resourceId: (this.dependencies.createResourceId ?? d.ve)(),
                source: e,
              }),
            ),
            u =
              ((o = (n = {
                benefitType: s,
                projectId: this.dependencies.getProjectId(),
                resolution: e.resolution,
                items: l,
                submitId: a,
              }).items[0]),
              (r = (function (e) {
                switch (e) {
                  case "2k":
                    return "video.upscale-2k";
                  case "4k":
                    return "video.upscale-4k";
                }
              })(n.resolution)),
              {
                project_id: n.projectId,
                op: 3,
                post_edit: {
                  source_node_id: (null == o ? void 0 : o.source.nodeId) ?? "",
                  source_resource_id:
                    (null == o ? void 0 : o.source.resourceId) ?? "",
                  submit_id: n.submitId,
                  items: n.items.map((e) => ({
                    output_node_id: e.nodeId,
                    output_title: (0, eA.MF)(e.source.title, r),
                    source_node_id: e.source.nodeId,
                    source_resource_id: e.source.resourceId,
                    item: {
                      commerce_selection: { benefit_type: n.benefitType },
                      resource_id: e.resourceId,
                      type: 2,
                      reference_sources: [
                        {
                          material_idx: 0,
                          node_id: e.source.nodeId,
                          resource_id: e.source.resourceId,
                        },
                      ],
                      params: {
                        video_params: {
                          mode: e6.wY.Upscale,
                          resolution: "2k" === n.resolution ? "2K" : "4K",
                          materials: [{ role: 4, type: 3, vid: e.source.vid }],
                        },
                      },
                    },
                  })),
                },
              });
          return (
            this.resultPresentation.begin(a),
            {
              ambiguityOpen: !1,
              benefitType: s,
              inputSignature: i,
              items: Object.freeze(l),
              request: u,
              sessionId: e.sessionId,
              submitId: a,
            }
          );
        }
        async executeSubmit(e, t, i, s, n) {
          let o;
          try {
            o = await this.dependencies.commercial.execute(
              (0, sH.ep)({
                benefitAmount: (function (e) {
                  let t = e.benefitAmountByResolution[e.resolution];
                  if (void 0 === t)
                    throw Error(
                      "Video upscale billing duration is unavailable.",
                    );
                  return t;
                })(e),
                outputCount: t.length,
                resolution: e.resolution,
              }),
              (o) => this.executeAllowedSubmit(e, t, o, i, s, n),
              {
                enterSource: "generate",
                surfaceKey: "video.post_edit.upscale",
                isUseSuccess: (e) => e.ok,
              },
            );
          } catch (t) {
            if (i.aborted || this.pendingSubmissionToken !== s)
              return {
                code: "SUBMIT_CANCELLED",
                ok: !1,
                reason: "commandFailed",
              };
            return (
              this.publishCommerceUnavailable(n, t, e.sessionId),
              {
                code: "COMMERCIAL_UNAVAILABLE",
                ok: !1,
                reason: "commandFailed",
              }
            );
          }
          return "executed" === o.status
            ? o.value
            : "blocked" === o.status
              ? (this.publishSubmitIdle(e.sessionId),
                { code: "COMMERCIAL_BLOCKED", ok: !1, reason: "commandFailed" })
              : "unavailable" === o.status
                ? (this.publishCommerceUnavailable(
                    n,
                    Error(o.state.reason),
                    e.sessionId,
                  ),
                  {
                    code: "COMMERCIAL_UNAVAILABLE",
                    ok: !1,
                    reason: "commandFailed",
                  })
                : "cancelled" === o.status
                  ? (this.publishSubmitIdle(e.sessionId),
                    {
                      code: "SUBMIT_CANCELLED",
                      ok: !1,
                      reason: "commandFailed",
                    })
                  : (this.publishCommerceUnavailable(n, o.error, e.sessionId),
                    {
                      code: "COMMERCIAL_UNAVAILABLE",
                      ok: !1,
                      reason: "commandFailed",
                    });
        }
        async executeAllowedSubmit(e, t, i, n, o, r) {
          let { options: a, dispose: l } = (0, s.pt)(i, n);
          try {
            let s;
            if ((n = a.signal).aborted || this.pendingSubmissionToken !== o)
              return {
                code: "SUBMIT_CANCELLED",
                ok: !1,
                reason: "commandFailed",
              };
            let l = sY(this.dependencies);
            if (l)
              return (
                this.publishSubmitIdle(e.sessionId),
                { ok: !1, reason: l }
              );
            try {
              s = this.getOrCreateAttempt(e, t, i.selection.benefitType, i);
            } catch (t) {
              return (
                this.publishFailure(r, t, e.sessionId),
                { code: "SUBMIT_UNAVAILABLE", ok: !1, reason: "commandFailed" }
              );
            }
            return await this.executePreparedSubmit(s, n, o, r, i);
          } finally {
            l();
          }
        }
        async executePreparedSubmit(e, t, i, s, n) {
          var o;
          null == (o = this.nodeArrivalCancel) || o.call(this);
          let r = sY(this.dependencies);
          if (r)
            return (this.publishSubmitIdle(e.sessionId), { ok: !1, reason: r });
          let a = ik(
            this.dependencies,
            e.items,
            t,
            this.dependencies.reconciliationDeadlineMs ?? 15e3,
          );
          this.nodeArrivalCancel = a.cancel;
          try {
            try {
              return await this.dispatchPreparedSubmit(e, t, i, a, s, n);
            } catch (n) {
              return await this.recoverPreparedSubmitTransportError(
                e,
                n,
                t,
                i,
                a,
                s,
              );
            }
          } catch (n) {
            if (t.aborted || this.pendingSubmissionToken !== i)
              return (
                (0, h.XQ)(e.history),
                { code: "SUBMIT_CANCELLED", ok: !1, reason: "commandFailed" }
              );
            return (
              this.publishFailure(s, n, e.sessionId),
              { code: "SUBMIT_FAILED", ok: !1, reason: "commandFailed" }
            );
          } finally {
            (a.cancel(),
              this.nodeArrivalCancel === a.cancel &&
                (this.nodeArrivalCancel = null));
          }
        }
        async dispatchPreparedSubmit(e, t, i, s, n, o) {
          let r = e.items[0];
          if (!r)
            throw Error("Video upscale attempt requires at least one item.");
          let a = await (0, h.Ud)({
            generationHistorySubmissionPort:
              this.dependencies.generationHistorySubmissionPort,
            mediaType: "video",
            modelName: (0, h.vN)(e.request),
            name: (0, h.nA)(e.request),
            nodeId: r.nodeId,
            onRegistered: (t) => {
              e.history = t;
            },
            resourceIds: e.items.map((e) => e.resourceId),
            submitId: e.submitId,
            generate: () =>
              this.dependencies.generator.nodeGenerate(e.request, {
                signal: t,
                ...((null == o ? void 0 : o.consumption)
                  ? { consumption: o.consumption }
                  : {}),
              }),
          });
          if (t.aborted || this.pendingSubmissionToken !== i)
            return (
              (0, h.XQ)(e.history),
              { code: "SUBMIT_CANCELLED", ok: !1, reason: "commandFailed" }
            );
          let l = sY(this.dependencies);
          return l
            ? (this.publishSubmitIdle(e.sessionId), { ok: !1, reason: l })
            : (s.cancel(),
              this.nodeArrivalCancel === s.cancel &&
                (this.nodeArrivalCancel = null),
              await this.settleGeneratorResponse(e, a, t, i, n));
        }
        async recoverPreparedSubmitTransportError(e, t, i, s, n, o) {
          var r;
          if (i.aborted || this.pendingSubmissionToken !== s)
            return (
              (0, h.XQ)(e.history),
              { code: "SUBMIT_CANCELLED", ok: !1, reason: "commandFailed" }
            );
          let a = await n.promise,
            l = sY(this.dependencies);
          return l
            ? (this.publishSubmitIdle(e.sessionId), { ok: !1, reason: l })
            : "arrived" === a
              ? (this.registerAcceptedItems(e, e.items, "complete"),
                this.settleResultPresentation(e, e.items),
                this.finishAcceptedAttempt(e),
                sQ(e.items))
              : ((e.ambiguityOpen = !0),
                null == (r = e.history) || r.reject(eF.OH.MATRIX_ERROR),
                this.publishFailure(o, t, e.sessionId),
                { code: "SUBMIT_FAILED", ok: !1, reason: "commandFailed" });
        }
        async settleGeneratorResponse(e, t, i, s, n) {
          let o = await this.resolveAcceptedItems(e, t, i, s);
          if (i.aborted || this.pendingSubmissionToken !== s)
            return (
              (0, h.XQ)(e.history),
              { code: "SUBMIT_CANCELLED", ok: !1, reason: "commandFailed" }
            );
          let r = sY(this.dependencies);
          if (r)
            return (this.publishSubmitIdle(e.sessionId), { ok: !1, reason: r });
          let a = o.acceptedItems;
          if (0 === a.length) {
            this.resultPresentation.cancel();
            let t = Error("Video upscale generation was not accepted.");
            return (
              o.unresolvedUnknownItems.length > 0 &&
                ((e.ambiguityOpen = !0),
                (t = Error("Video upscale status is ambiguous."))),
              this.publishFailure(n, t, e.sessionId),
              { code: "SUBMIT_FAILED", ok: !1, reason: "commandFailed" }
            );
          }
          return (
            this.registerAcceptedItems(e, a, "complete"),
            this.settleResultPresentation(e, a),
            this.finishAcceptedAttempt(e),
            sQ(a)
          );
        }
        async resolveAcceptedItems(e, t, i, s) {
          let n = [],
            o = [];
          if (
            (e.items.forEach((e, i) => {
              let s = t.results[i];
              (null == s ? void 0 : s.state) === 1
                ? n.push(e)
                : (null == s ? void 0 : s.state) === 3 && o.push(e);
            }),
            0 === o.length)
          )
            return {
              acceptedItems: Object.freeze(n),
              unresolvedUnknownItems: Object.freeze([]),
            };
          let r = ik(
            this.dependencies,
            o,
            i,
            this.dependencies.reconciliationDeadlineMs ?? 15e3,
          );
          this.nodeArrivalCancel = r.cancel;
          try {
            let e = await r.promise;
            if (i.aborted || this.pendingSubmissionToken !== s)
              return {
                acceptedItems: Object.freeze(n),
                unresolvedUnknownItems: Object.freeze(o),
              };
            if ("arrived" === e)
              return (
                n.push(...o),
                {
                  acceptedItems: Object.freeze(n),
                  unresolvedUnknownItems: Object.freeze([]),
                }
              );
            return {
              acceptedItems: Object.freeze(n),
              unresolvedUnknownItems: Object.freeze(o),
            };
          } finally {
            (r.cancel(),
              this.nodeArrivalCancel === r.cancel &&
                (this.nodeArrivalCancel = null));
          }
        }
        registerAcceptedItems(e, t, i) {
          let s = t.map((e) => e.resourceId);
          for (let e of s) this.dependencies.trackSubmittedResource(e);
          this.dependencies.commerceRefreshCoordinator.register({
            acceptedResourceIds: s,
            recoveryState: i,
            submitId: e.submitId,
          });
        }
        cancelActiveAttempt() {
          var e, t;
          (this.attempt && (0, h.XQ)(this.attempt.history),
            null == (e = this.pendingSubmissionAbortController) || e.abort(),
            (this.pendingSubmissionAbortController = null),
            (this.pendingSubmission = null),
            (this.pendingSubmissionToken = null),
            null == (t = this.nodeArrivalCancel) || t.call(this),
            (this.nodeArrivalCancel = null),
            (this.attempt = null),
            this.resultPresentation.cancel());
        }
        finishAcceptedAttempt(e) {
          var t;
          (null == (t = this.nodeArrivalCancel) || t.call(this),
            (this.nodeArrivalCancel = null),
            this.attempt === e && (this.attempt = null),
            "active" === this.snapshot.status &&
              this.snapshot.sessionId === e.sessionId &&
              ((this.snapshot = sG), this.notify()));
        }
        settleResultPresentation(e, t) {
          var i;
          (null == (i = e.history) ||
            i.settle((0, h.Vy)(t.map((e) => e.resourceId))),
            this.resultPresentation.settle(
              e.submitId,
              t.map((e) => ({ nodeId: e.nodeId, resourceId: e.resourceId })),
            ));
        }
        publishSubmitFailed(e, t) {
          if (
            "active" !== this.snapshot.status ||
            this.snapshot.sessionId !== e
          )
            return;
          let { failureReason: i, ...s } = this.snapshot,
            n = {
              ...s,
              submitErrorMessage:
                "batch" === this.snapshot.mode ? (0, sV.Y3)() : (0, sV.Q6)(),
              submitState: "failed",
            };
          (t
            ? (this.snapshot = Object.freeze({ ...n, failureReason: t }))
            : (this.snapshot = Object.freeze(n)),
            this.notify());
        }
        publishSubmitIdle(e) {
          if (
            "active" !== this.snapshot.status ||
            this.snapshot.sessionId !== e
          )
            return;
          let { failureReason: t, submitErrorMessage: i, ...s } = this.snapshot;
          ((this.snapshot = Object.freeze({ ...s, submitState: "idle" })),
            this.notify());
        }
        publishSourceUnavailable(e) {
          if (
            "active" !== this.snapshot.status ||
            this.snapshot.sessionId !== e
          )
            return;
          let { failureReason: t, ...i } = this.snapshot;
          ((this.snapshot = Object.freeze({
            ...i,
            submitErrorMessage: (0, sV.If)(),
            submitState: "failed",
          })),
            this.notify());
        }
        publishCommerceUnavailable(e, t, i) {
          e
            ? e.fail(t, () => this.publishCommerceUnavailableAlert(i))
            : this.publishCommerceUnavailableAlert(i);
        }
        publishCommerceUnavailableAlert(e) {
          "active" === this.snapshot.status &&
            this.snapshot.sessionId === e &&
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              submitErrorMessage: (0, sV.wK)(),
              submitState: "failed",
            })),
            this.notify());
        }
        publishFailure(e, t, i) {
          let s = (0, eX.fG)(t) ?? void 0;
          e
            ? e.fail(t, () => this.publishSubmitFailed(i, s))
            : this.publishSubmitFailed(i, s);
        }
        notify() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.attempt = null),
            (this.listeners = new Set()),
            (this.nodeArrivalCancel = null),
            (this.pendingSubmissionAbortController = null),
            (this.pendingSubmission = null),
            (this.pendingSubmissionToken = null),
            (this.snapshot = sG),
            (this.disposed = !1),
            (this.close = () => {
              (this.cancelActiveAttempt(),
                "inactive" !== this.snapshot.status &&
                  ((this.snapshot = sG), this.notify()));
            }),
            (this.dispose = () => {
              this.disposed ||
                ((this.disposed = !0),
                this.cancelActiveAttempt(),
                this.resultPresentation.dispose(),
                (this.snapshot = sG),
                this.listeners.clear());
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.open = (e) => {
              var t;
              if (this.disposed)
                return { code: "DISPOSED", ok: !1, reason: "commandFailed" };
              let i = (0, i5.q)(this.dependencies, e);
              return i.ok
                ? (this.cancelActiveAttempt(),
                  (this.snapshot = sJ({
                    resolution: "4k",
                    sessionId:
                      "function" ==
                      typeof (null == (t = globalThis.crypto)
                        ? void 0
                        : t.randomUUID)
                        ? globalThis.crypto.randomUUID()
                        : ((sK += 1), `video-upscale-${sK}`),
                    sources: i.value.sources,
                    submitState: "idle",
                  })),
                  this.notify(),
                  { ok: !0, value: { sessionId: this.snapshot.sessionId } })
                : i;
            }),
            (this.setResolution = (e) => {
              if (
                "active" !== this.snapshot.status ||
                this.snapshot.resolution === e ||
                "submitting" === this.snapshot.submitState ||
                !this.snapshot.enabledResolutions.includes(e)
              )
                return;
              this.snapshot = sJ({
                ...this.snapshot,
                resolution: e,
                submitState: "idle",
              });
              let t = { isBatchEdit: +(this.snapshot.sources.length > 1) };
              for (let n of this.snapshot.sources) {
                var i, s;
                null == (i = (s = this.dependencies).reportPostEditAction) ||
                  i.call(s, n.nodeId, "2k" === e ? "hd_2k" : "hd_4k", t);
              }
              this.notify();
            }),
            (this.submit = async () => {
              var e, t;
              if (this.pendingSubmission) return this.pendingSubmission;
              if ("active" !== this.snapshot.status)
                return {
                  code: "INACTIVE_SESSION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let i = sY(this.dependencies);
              if (i) return { ok: !1, reason: i };
              let s = this.snapshot,
                n = this.refreshActiveSession(s);
              if (!n.ok) return (this.publishSourceUnavailable(s.sessionId), n);
              let o = n.value.session;
              if (o.modeDisabledReason)
                return {
                  code: (function (e) {
                    switch (e) {
                      case "durationExceeded":
                        return "SOURCE_DURATION_EXCEEDED";
                      case "frameCountExceeded":
                        return "SOURCE_FRAME_COUNT_EXCEEDED";
                      case "frameCountUnavailable":
                        return "SOURCE_FRAME_COUNT_UNAVAILABLE";
                      case "maximumSize":
                        return "SOURCE_ALREADY_4K";
                      case "resolutionUnavailable":
                        return "SOURCE_RESOLUTION_UNAVAILABLE";
                    }
                  })(o.modeDisabledReason),
                  ok: !1,
                  reason: "commandFailed",
                };
              if (!o.enabledResolutions.includes(o.resolution))
                return {
                  code: "TARGET_RESOLUTION_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let r = (t = o).sources.filter((e) => sZ(e, t.resolution));
              if (0 === r.length)
                return {
                  code: "TARGET_RESOLUTION_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (!(0, sT.m4)(r.length)) return (0, sT.bF)();
              let { failureReason: a, submitErrorMessage: l, ...d } = o;
              ((this.snapshot = Object.freeze({
                ...d,
                submitState: "submitting",
              })),
                this.notify());
              let u = new AbortController(),
                c = {};
              ((this.pendingSubmissionAbortController = u),
                (this.pendingSubmissionToken = c));
              let h = (
                this.dependencies.operations
                  ? this.dependencies.operations
                      .run(
                        "submitVideoUpscale",
                        {
                          fields: {
                            itemCount: r.length,
                            subjectId:
                              (null == (e = r[0]) ? void 0 : e.nodeId) ?? "",
                            subjectType: "video-upscale",
                          },
                          mode: "async",
                          signal: u.signal,
                        },
                        (e) => this.executeSubmit(o, r, u.signal, c, e),
                      )
                      .catch((e) => {
                        if ((0, e$.vh)(e))
                          return {
                            code: "SUBMIT_CANCELLED",
                            ok: !1,
                            reason: "commandFailed",
                          };
                        throw e;
                      })
                  : this.executeSubmit(o, r, u.signal, c)
              ).finally(() => {
                this.pendingSubmission === h &&
                  ((this.pendingSubmission = null),
                  (this.pendingSubmissionAbortController = null),
                  (this.pendingSubmissionToken = null));
              });
              return ((this.pendingSubmission = h), h);
            }),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.dependencies = e),
            (this.resultPresentation = new eJ.w({
              deadlineMs: e.reconciliationDeadlineMs ?? 15e3,
              getObjectSnapshot: e.getObjectSnapshot,
              subscribeObjectSnapshot: e.subscribeObjectSnapshot,
              viewport: e.viewport,
            })));
        }
      }
      function sQ(e) {
        return { ok: !0, value: { submittedNodeIds: e.map((e) => e.nodeId) } };
      }
      function sY(e) {
        let t = e.getEditAvailability().local;
        return t.available
          ? null
          : "notEditable" === t.reason
            ? "permissionDenied"
            : "notEditingReady";
      }
      function sJ(e) {
        var t, i, s, n;
        let o,
          r,
          a,
          l,
          d,
          u,
          c = e.sources.length > 1 ? "batch" : "single",
          h =
            ((t = e.sources),
            (o = s$.filter((e) => t.some((t) => sZ(t, e)))),
            (r = Object.fromEntries(
              s$.flatMap((e) => {
                var i, s;
                return o.includes(e)
                  ? []
                  : [
                      [
                        e,
                        ((i = t),
                        (s = e),
                        1 === i.length
                          ? ((0, sW.OA)(i[0]).disabledResolutionReasons[s] ??
                            "resolutionUnavailable")
                          : i.some(sW.Qx)
                            ? "durationExceeded"
                            : i.some(sW.Ry)
                              ? "frameCountUnavailable"
                              : i.some(sW.wb)
                                ? "frameCountExceeded"
                                : "2k" === s && i.every((e) => s0(e) >= 2048)
                                  ? "allAlready2k"
                                  : i.some(sW.eV)
                                    ? "maximumSize"
                                    : (i
                                        .map(
                                          (e) =>
                                            (0, sW.OA)(e)
                                              .disabledResolutionReasons[s],
                                        )
                                        .find((e) => void 0 !== e) ??
                                      "resolutionUnavailable")),
                      ],
                    ];
              }),
            )),
            (a =
              0 === o.length
                ? (i = t).some(sW.Qx)
                  ? "durationExceeded"
                  : i.some(sW.Ry)
                    ? "frameCountUnavailable"
                    : i.some(sW.wb)
                      ? "frameCountExceeded"
                      : i.some(sW.eV)
                        ? "maximumSize"
                        : "resolutionUnavailable"
                : void 0),
            (l = t.filter(sW.wb)),
            (d = (0, sW.D$)(l)),
            (u = {}),
            void 0 !== d && (u.maxDurationSeconds = d),
            {
              disabledResolutionReasons: r,
              enabledResolutions: o,
              ...u,
              ...(void 0 === a ? {} : { modeDisabledReason: a }),
              ...(function (e) {
                let t = e.filter(sW.Qx).length;
                if (t > 0)
                  return {
                    sourceWarning: { count: t, reason: "durationExceeded" },
                  };
                let i = e.filter(sW.wb),
                  s = (0, sW.D$)(i);
                if (i.length > 0 && void 0 !== s)
                  return {
                    sourceWarning: {
                      count: i.length,
                      maxDurationSeconds: s,
                      reason: "frameCountExceeded",
                    },
                  };
                let n = e.filter(sW.Ry).length;
                if (n > 0)
                  return {
                    sourceWarning: {
                      count: n,
                      reason: "frameCountUnavailable",
                    },
                  };
                let o = e.filter((e) => s0(e) >= 3840).length;
                if (o > 0)
                  return { sourceWarning: { count: o, resolution: "4k" } };
                let r = e.filter((e) => s0(e) >= 2048).length;
                return r > 0
                  ? { sourceWarning: { count: r, resolution: "2k" } }
                  : {};
              })(t),
            }),
          p =
            ((s = h),
            (n = e.resolution),
            s.enabledResolutions.includes(n)
              ? n
              : (s.enabledResolutions[0] ?? n)),
          m = Object.freeze(
            Object.fromEntries(
              s$.map((t) => [t, e.sources.filter((e) => sZ(e, t)).length]),
            ),
          ),
          f = Object.freeze(
            Object.fromEntries(
              s$.flatMap((t) => {
                let i = (0, sH.zd)(e.sources.filter((e) => sZ(e, t)));
                return void 0 === i ? [] : [[t, i]];
              }),
            ),
          ),
          b =
            Object.keys(h.disabledResolutionReasons).length > 0
              ? h.disabledResolutionReasons
              : void 0,
          g = {};
        return (
          void 0 !== h.modeDisabledReason &&
            (g.modeDisabledReason = h.modeDisabledReason),
          void 0 !== h.maxDurationSeconds &&
            (g.maxDurationSeconds = h.maxDurationSeconds),
          void 0 !== b && (g.disabledResolutionReasons = b),
          void 0 !== h.sourceWarning && (g.sourceWarning = h.sourceWarning),
          Object.freeze({
            benefitAmountByResolution: f,
            enabledResolutions: h.enabledResolutions,
            eligibleSourceCountByResolution: m,
            mode: c,
            resolution: p,
            sessionId: e.sessionId,
            ...g,
            sources: e.sources,
            status: "active",
            submitState: e.submitState,
          })
        );
      }
      function sZ(e, t) {
        return (0, sW.my)((0, sW.OA)(e), t);
      }
      function s0(e) {
        return Math.max(e.width ?? 0, e.height ?? 0);
      }
      var s1 = i(35389),
        s2 = i(93502),
        s3 = i(82175),
        s4 = i(11456);
      let s5 = Object.freeze({ status: "inactive" }),
        s6 = 0;
      class s8 {
        publishExpired() {
          let e = String(eF.OH.VIDEO_SAMPLE_EXPIRED),
            t = (0, s4.dz)();
          return (
            (this.activeRequest = void 0),
            "active" === this.snapshot.status &&
              ((this.snapshot = Object.freeze({
                ...this.snapshot,
                failureCode: e,
                failureMessage: t,
                submitState: "failed",
              })),
              this.publish()),
            { code: e, message: t, ok: !1, reason: "commandFailed" }
          );
        }
        publishCommerceUnavailable() {
          return (
            (this.activeRequest = void 0),
            "active" === this.snapshot.status &&
              ((this.snapshot = Object.freeze({
                ...this.snapshot,
                failureCode: "COMMERCIAL_UNAVAILABLE",
                failureMessage: (0, s2.Zr)(),
                submitState: "failed",
              })),
              this.publish()),
            { code: "COMMERCIAL_UNAVAILABLE", ok: !1, reason: "commandFailed" }
          );
        }
        async submitAllowed(e, t, i, s, n) {
          var o, r, a, l;
          let u =
            null == (o = (r = this.dependencies).beginResultPresentation)
              ? void 0
              : o.call(r);
          try {
            let o = await this.dependencies.gateway.promote(
              {
                project_id: this.dependencies.getProjectId(),
                op: 3,
                post_edit: {
                  source_node_id: e.nodeId,
                  source_resource_id: e.resourceId,
                  submit_id: (0, d.pf)(),
                  items: [
                    {
                      output_node_id: (0, d.XG)(),
                      output_title: (0, eA.AJ)(
                        this.dependencies.getSourceTitle(e),
                      ),
                      item: {
                        resource_id: (0, d.ve)(),
                        commerce_selection: {
                          benefit_type: n.selection.benefitType,
                        },
                        type: 2,
                        params: {
                          video_params: {
                            mode: e6.wY.GenerateFromDraft,
                            resolution: t,
                          },
                        },
                      },
                    },
                  ],
                },
              },
              { signal: s.signal },
            );
            if (!this.isCurrentRequest(i, s))
              return { ok: !1, reason: "commandFailed" };
            this.dependencies.trackSubmittedResource(o.outputResourceId);
            let r = await this.dependencies.waitForResult(o, s.signal);
            if (!this.isCurrentRequest(i, s) || "aborted" === r)
              return { ok: !1, reason: "commandFailed" };
            return (
              "arrived" === r &&
                (null == (a = (l = this.dependencies).activateResultNode) ||
                  a.call(l, o.outputNodeId)),
              this.close(),
              "arrived" === r &&
                (await (null == u
                  ? void 0
                  : u.present({ kind: "nodes", nodeIds: [o.outputNodeId] }))),
              { ok: !0, value: o }
            );
          } finally {
            null == u || u.cancel();
          }
        }
        dispose() {
          (this.close(), this.listeners.clear());
        }
        isCurrentRequest(e, t) {
          return (
            !t.signal.aborted &&
            this.dependencies.getEditAvailability().local.available &&
            "active" === this.snapshot.status &&
            this.snapshot.sessionId === e &&
            this.activeRequest === t
          );
        }
        publish() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          var t = this;
          ((this.dependencies = e),
            (this.listeners = new Set()),
            (this.snapshot = s5),
            (this.close = () => {
              var e;
              (null == (e = this.activeRequest) || e.abort(),
                (this.activeRequest = void 0),
                "inactive" !== this.snapshot.status &&
                  ((this.snapshot = s5), this.publish()));
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.selectResolution = (e) => {
              "active" === this.snapshot.status &&
                "submitting" !== this.snapshot.submitState &&
                "checking" !== this.snapshot.submitState &&
                this.dependencies.getEditAvailability().local.available &&
                this.dependencies
                  .getResolutions(this.snapshot.source)
                  .includes(e) &&
                ((this.snapshot = Object.freeze({
                  ...this.snapshot,
                  targetResolution: e,
                })),
                this.publish());
            }),
            (this.open = (e) => {
              var t, i;
              let s = this.dependencies.getEditAvailability().local;
              if (!s.available)
                return {
                  ok: !1,
                  reason:
                    "notEditable" === s.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                };
              if (!this.dependencies.isCurrentSample(e))
                return { ok: !1, reason: "commandFailed" };
              let n = this.dependencies.getResolutions(e)[0];
              if (!n) return { ok: !1, reason: "commandFailed" };
              (null == (t = this.activeRequest) || t.abort(),
                (this.activeRequest = void 0));
              let o =
                "function" ==
                typeof (null == (i = globalThis.crypto) ? void 0 : i.randomUUID)
                  ? globalThis.crypto.randomUUID()
                  : ((s6 += 1), `video-sample-promotion-${s6}`);
              return (
                (this.snapshot = Object.freeze({
                  sessionId: o,
                  source: e,
                  status: "active",
                  submitState: "idle",
                  targetResolution: n,
                })),
                this.publish(),
                { ok: !0, value: { sessionId: o } }
              );
            }),
            (this.submit = async function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                i = arguments.length > 1 ? arguments[1] : void 0;
              if (
                "active" !== t.snapshot.status ||
                "submitting" === t.snapshot.submitState ||
                "checking" === t.snapshot.submitState
              )
                return { ok: !1, reason: "commandFailed" };
              let s = t.dependencies.getEditAvailability().local;
              if (!s.available)
                return {
                  ok: !1,
                  reason:
                    "notEditable" === s.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                };
              if (!t.dependencies.isCurrentSample(t.snapshot.source))
                return (t.close(), { ok: !1, reason: "commandFailed" });
              let n = t.snapshot.targetResolution;
              if (!t.dependencies.getResolutions(t.snapshot.source).includes(n))
                return (t.close(), { ok: !1, reason: "commandFailed" });
              let o = t.snapshot.sessionId,
                r = t.snapshot.source,
                a = new AbortController();
              ((t.activeRequest = a),
                (t.snapshot = Object.freeze({
                  sessionId: o,
                  source: r,
                  status: "active",
                  targetResolution: n,
                  submitState: "checking",
                })),
                t.publish());
              let l = !1,
                d = !1;
              try {
                let s = await t.dependencies.loadSourceResource(r, a.signal, o);
                if (
                  !t.isCurrentRequest(o, a) ||
                  !t.dependencies.isCurrentSample(r)
                )
                  return (
                    t.activeRequest === a && t.close(),
                    { ok: !1, reason: "commandFailed" }
                  );
                if (!s) throw Error("Sample source resource unavailable");
                let u = (0, sw.Lt)(s);
                if (
                  ((t.snapshot = Object.freeze({
                    ...t.snapshot,
                    expiresAtMs: u,
                  })),
                  t.publish(),
                  (0, sw.$)(u))
                )
                  return t.publishExpired();
                d = !0;
                let c = t.dependencies.getSourceParams(r),
                  h = (null == i ? void 0 : i(c)) ?? [],
                  p = (0, s3.Y)(n, c, e, h);
                if (!p) return t.publishCommerceUnavailable();
                let m = s7(h),
                  f = await t.dependencies.commercial.execute(p, async (s) => {
                    if (
                      !t.isCurrentRequest(o, a) ||
                      !t.dependencies.isCurrentSample(r) ||
                      !t.dependencies.getResolutions(r).includes(n)
                    )
                      return (
                        t.activeRequest === a && t.close(),
                        { ok: !1, reason: "commandFailed" }
                      );
                    if ((0, sw.$)(u)) return t.publishExpired();
                    if (!s.selection.benefitType.trim())
                      return t.publishCommerceUnavailable();
                    let d = t.dependencies.getSourceParams(r),
                      c = (null == i ? void 0 : i(d)) ?? [],
                      h = (0, s3.Y)(n, d, e, c);
                    return s7(c) !== m ||
                      JSON.stringify(h) !== JSON.stringify(p)
                      ? t.publishCommerceUnavailable()
                      : ((t.snapshot = Object.freeze({
                          sessionId: o,
                          source: r,
                          status: "active",
                          targetResolution: n,
                          expiresAtMs: u,
                          submitState: "submitting",
                        })),
                        t.publish(),
                        (l = !0),
                        t.submitAllowed(r, n, o, a, s));
                  });
                if ("executed" === f.status) return f.value;
                if (!t.isCurrentRequest(o, a))
                  return { ok: !1, reason: "commandFailed" };
                if ("blocked" === f.status || "cancelled" === f.status)
                  return (
                    (t.activeRequest = void 0),
                    (t.snapshot = Object.freeze({
                      sessionId: o,
                      source: r,
                      status: "active",
                      targetResolution: n,
                      expiresAtMs: u,
                      submitState: "idle",
                    })),
                    t.publish(),
                    {
                      code:
                        "blocked" === f.status
                          ? "COMMERCIAL_BLOCKED"
                          : "SUBMIT_CANCELLED",
                      ok: !1,
                      reason: "commandFailed",
                    }
                  );
                if ("unavailable" === f.status)
                  return t.publishCommerceUnavailable();
                throw f.error;
              } catch (s) {
                let e;
                if (!t.isCurrentRequest(o, a))
                  return { ok: !1, reason: "commandFailed" };
                if (d && !l) return t.publishCommerceUnavailable();
                let i =
                  (e = (function (e) {
                    if (e instanceof sd.uz)
                      return void 0 === e.serviceCode
                        ? e.errorCode
                        : String(e.serviceCode);
                    if ("object" != typeof e || null === e || !("code" in e))
                      return;
                    let t = e.code;
                    return "string" == typeof t && t.trim().length > 0
                      ? t
                      : void 0;
                  })(s)) === String(eF.OH.INSUFFICIENT_BALANCE)
                    ? { code: e, message: (0, s1.nR)("insufficient_balance") }
                    : e === String(eF.OH.VIDEO_SAMPLE_EXPIRED)
                      ? { code: e, message: (0, s4.dz)() }
                      : {
                          code: e ?? "VIDEO_SAMPLE_PROMOTION_FAILED",
                          message: (0, s4.Bm)(),
                        };
                return (
                  (t.activeRequest = void 0),
                  (t.snapshot = Object.freeze({
                    ...t.snapshot,
                    failureCode: i.code,
                    failureMessage: i.message,
                    submitState: "failed",
                  })),
                  t.publish(),
                  {
                    code: i.code,
                    message: i.message,
                    ok: !1,
                    reason: "commandFailed",
                  }
                );
              }
            }),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )));
        }
      }
      function s7(e) {
        return JSON.stringify(
          e.map((e) => {
            var t, i;
            let { subjectNodeId: s, resourceId: n, resource: o } = e;
            return [
              s,
              n,
              null == o ? void 0 : o.resource_id,
              null == o ? void 0 : o.type,
              null == o ? void 0 : o.status,
              null == o || null == (t = o.video) ? void 0 : t.vid,
              null == o || null == (i = o.video) ? void 0 : i.duration,
            ];
          }),
        );
      }
      var s9 = i(81136),
        ne = i(74584);
      let nt = Object.freeze({ status: "inactive" });
      class ni {
        dispose() {
          ((this.disposed = !0),
            this.close(),
            this.unregister(),
            this.listeners.clear());
        }
        checkPermission() {
          let e = this.dependencies.getEditAvailability().local;
          return e.available
            ? { ok: !0, value: {} }
            : {
                ok: !1,
                reason:
                  "notEditable" === e.reason
                    ? "permissionDenied"
                    : "notEditingReady",
              };
        }
        readCurrent() {
          if (this.disposed) return nn("DISPOSED");
          let e = this.checkPermission();
          if (!e.ok) return e;
          let t = this.snapshot;
          if ("editing" !== t.status) return nn("INACTIVE_SESSION");
          if (t.projectId !== this.dependencies.getProjectId())
            return nn("PROJECT_CHANGED");
          let i = (0, ne.g)(this.dependencies.catalog);
          if (!i || !i.backgrounds.includes(t.background))
            return nn("CAPABILITY_UNAVAILABLE");
          let s = (0, i5.F)(this.dependencies, [t.source]);
          if (!s.ok) return s;
          let n = s.value.sources[0],
            o = (0, ne.m)(n, i);
          return o
            ? { ok: !1, reason: "commandFailed", ...o }
            : {
                ok: !0,
                value: {
                  source: n,
                  capability: i,
                  projectId: t.projectId,
                  background: t.background,
                },
              };
        }
        publish() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.snapshot = nt),
            (this.listeners = new Set()),
            (this.subscriptions = []),
            (this.disposed = !1),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.open = (e) => {
              if (this.disposed) return nn("DISPOSED");
              let t = this.checkPermission();
              if (!t.ok) return t;
              if (1 !== e.nodeIds.length) return nn("UNSUPPORTED_SELECTION");
              let i = (0, ne.g)(this.dependencies.catalog);
              if (!i) return nn("CAPABILITY_UNAVAILABLE");
              let s = (0, i5.q)(this.dependencies, e);
              if (!s.ok) return s;
              let n = s.value.sources[0],
                o = (0, ne.m)(n, i);
              if (o) return { ok: !1, reason: "commandFailed", ...o };
              let r = this.dependencies.getProjectId();
              return r.trim()
                ? (this.close(),
                  this.dependencies.coordinator.activate("matting"),
                  (this.snapshot = Object.freeze({
                    status: "editing",
                    source: n,
                    capability: i,
                    projectId: r,
                    background: i.defaultBackground,
                  })),
                  this.subscriptions.push(
                    this.dependencies.subscribeEditAvailability(
                      this.revalidate,
                    ),
                    this.dependencies.catalog.subscribe(this.revalidate),
                    this.dependencies.subscribeObjectSnapshot(
                      n.nodeId,
                      this.revalidate,
                    ),
                    this.dependencies.subscribeResourceBindings(
                      n.nodeId,
                      this.revalidate,
                    ),
                  ),
                  this.publish(),
                  { ok: !0, value: {} })
                : nn("PROJECT_UNAVAILABLE");
            }),
            (this.setBackground = (e) => {
              let t = this.readCurrent();
              return t.ok
                ? t.value.capability.backgrounds.includes(e)
                  ? "editing" !== this.snapshot.status
                    ? nn("INACTIVE_SESSION")
                    : (this.snapshot.background === e ||
                        ((this.captured = void 0),
                        (this.snapshot = Object.freeze({
                          ...this.snapshot,
                          background: e,
                        })),
                        this.publish()),
                      { ok: !0, value: {} })
                  : nn("BACKGROUND_UNAVAILABLE")
                : t;
            }),
            (this.capture = () => {
              let e = this.readCurrent();
              if (!e.ok) return e;
              let t = (0, s9.z)(
                e.value.source,
                e.value.capability.commerceEnabled,
              );
              return t
                ? ((this.captured = Object.freeze({
                    ...e.value,
                    commerceAction: t,
                  })),
                  { ok: !0, value: this.captured })
                : nn("sourceFactsUnavailable");
            }),
            (this.validate = (e) => {
              let t = this.readCurrent();
              return t.ok
                ? e === this.captured && ns(e, t.value)
                  ? { ok: !0, value: e }
                  : nn("PREPARATION_CHANGED")
                : t;
            }),
            (this.close = () => {
              var e;
              for (this.captured = void 0; this.subscriptions.length; )
                null == (e = this.subscriptions.pop()) || e();
              "inactive" !== this.snapshot.status &&
                ((this.snapshot = nt), this.publish());
            }),
            (this.revalidate = () => {
              let e = this.readCurrent();
              if (!e.ok) {
                if (((this.captured = void 0), "notEditingReady" === e.reason))
                  return;
                this.close();
                return;
              }
              "editing" !== this.snapshot.status ||
                ns(this.snapshot, e.value) ||
                ((this.captured = void 0),
                (this.snapshot = Object.freeze({
                  status: "editing",
                  ...e.value,
                })),
                this.publish());
            }),
            (this.unregister = e.coordinator.register("matting", this.close)));
        }
      }
      function ns(e, t) {
        return (
          e.projectId === t.projectId &&
          e.background === t.background &&
          e.capability === t.capability &&
          e.source.nodeId === t.source.nodeId &&
          e.source.resourceId === t.source.resourceId &&
          e.source.vid === t.source.vid &&
          e.source.durationMs === t.source.durationMs &&
          e.source.width === t.source.width &&
          e.source.height === t.source.height &&
          e.source.fps === t.source.fps &&
          e.source.resolution === t.source.resolution
        );
      }
      function nn(e) {
        return { ok: !1, reason: "commandFailed", code: e };
      }
      let no = Object.freeze({ status: "inactive" });
      class nr {
        dispose() {
          var e;
          this.disposed ||
            ((this.disposed = !0),
            null == (e = this.preparationAbort) || e.abort(),
            this.lifetime.abort(),
            this.releasePreparation(),
            this.preparation.dispose(),
            this.presentation.dispose(),
            (this.snapshot = no),
            this.listeners.clear());
        }
        get deadlineMs() {
          return this.dependencies.reconciliationDeadlineMs ?? 15e3;
        }
        async runSubmit(e, t, i) {
          try {
            let s = await this.dependencies.commercial.execute(
              e.commerceAction,
              async (s) => {
                var n;
                let o = this.preparation.validate(e);
                return o.ok
                  ? i.aborted || (null == (n = s.signal) ? void 0 : n.aborted)
                    ? nl("SUBMIT_CANCELLED")
                    : e.capability.commerceEnabled
                      ? void 0 !== t && na(s.quote)
                        ? s.quote.credits !== t
                          ? nl("QUOTE_CHANGED")
                          : s.selection.benefitType.trim()
                            ? this.send(e, s, i)
                            : nl("QUOTE_UNAVAILABLE")
                        : nl("QUOTE_UNAVAILABLE")
                      : this.send(e, s, i)
                  : o;
              },
            );
            if ("executed" === s.status) {
              if (
                !s.value.ok &&
                ((this.errorCode = s.value.code),
                "QUOTE_CHANGED" === s.value.code)
              ) {
                let e =
                  await this.dependencies.commercial.refreshBenefitStrategy({
                    source: "generation_quote_changed",
                  });
                if ("success" !== e.status)
                  return (
                    (this.errorCode = "COMMERCE_UNAVAILABLE"),
                    nl("COMMERCE_UNAVAILABLE")
                  );
              }
              return s.value;
            }
            let n =
              "cancelled" === s.status
                ? "SUBMIT_CANCELLED"
                : "COMMERCE_UNAVAILABLE";
            return ((this.errorCode = n), nl(n));
          } catch {
            var s;
            if (null == (s = this.attempt) ? void 0 : s.sent)
              return this.markUncertain(this.attempt);
            return ((this.errorCode = "SUBMIT_FAILED"), nl("SUBMIT_FAILED"));
          }
        }
        async send(e, t, i) {
          let n;
          try {
            var o, r, a;
            let l = (0, s.pt)(t, i);
            n = l.dispose;
            let u = this.preparation.validate(e);
            if (!u.ok) return u;
            if (l.options.signal.aborted) return nl("SUBMIT_CANCELLED");
            let c = (this.dependencies.createNodeId ?? d.XG)(),
              p = (this.dependencies.createResourceId ?? d.ve)(),
              m = (this.dependencies.createSubmitId ?? d.pf)(),
              f = {
                input: e,
                nodeId: c,
                resourceId: p,
                submitId: m,
                sent: !1,
                request: (function (e) {
                  let { source: t } = e,
                    i = (function (e) {
                      switch (e) {
                        case "BLACK":
                          return 1;
                        case "GREEN":
                          return 2;
                        case "TRANSPARENT":
                          return 3;
                        default:
                          throw Error("Unsupported video matting background");
                      }
                    })(e.background);
                  return {
                    project_id: e.projectId,
                    op: 3,
                    post_edit: {
                      source_node_id: t.nodeId,
                      source_resource_id: t.resourceId,
                      submit_id: e.submitId,
                      items: [
                        {
                          output_node_id: e.outputNodeId,
                          output_title: e.outputTitle,
                          source_node_id: t.nodeId,
                          source_resource_id: t.resourceId,
                          item: {
                            resource_id: e.outputResourceId,
                            type: 2,
                            reference_sources: [
                              {
                                material_idx: 0,
                                node_id: t.nodeId,
                                resource_id: t.resourceId,
                              },
                            ],
                            ...(e.commerce
                              ? {
                                  commerce_selection: {
                                    benefit_type: e.commerce.benefitType,
                                    quote_precondition: { ...e.commerce.quote },
                                  },
                                }
                              : {}),
                            params: {
                              video_params: {
                                mode: e6.wY.Matting,
                                matting_params: { background_color: i },
                                materials: [{ type: 3, role: 4, vid: t.vid }],
                              },
                            },
                          },
                        },
                      ],
                    },
                  };
                })({
                  source: e.source,
                  background: e.background,
                  projectId: e.projectId,
                  submitId: m,
                  outputNodeId: c,
                  outputResourceId: p,
                  outputTitle: this.dependencies.getOutputTitle(e.source.title),
                  ...(e.capability.commerceEnabled
                    ? {
                        commerce: {
                          benefitType: t.selection.benefitType,
                          quote: {
                            expected_benefit_amount:
                              e.commerceAction.options.benefitAmount,
                            expected_credits_amount: t.quote.credits,
                          },
                        },
                      }
                    : {}),
                }),
              };
            ((this.attempt = f),
              this.presentation.begin(m),
              (this.state = "submitting"),
              this.publish());
            try {
              let t = await (0, h.Ud)({
                generationHistorySubmissionPort:
                  this.dependencies.generationHistorySubmissionPort,
                deferSettlement: !0,
                mediaType: "video",
                name:
                  null == (r = f.request.post_edit) || null == (o = r.items[0])
                    ? void 0
                    : o.output_title,
                nodeId: c,
                resourceIds: [p],
                submitId: m,
                onRegistered: (e) => {
                  f.history = e;
                },
                generate: () => {
                  if (
                    !this.preparation.validate(e).ok ||
                    l.options.signal.aborted
                  )
                    throw new DOMException(
                      "Submission preparation changed",
                      "AbortError",
                    );
                  return (
                    (f.sent = !0),
                    this.dependencies.generator.nodeGenerate(
                      f.request,
                      l.options,
                    )
                  );
                },
              });
              return this.resolveResponse(f, t);
            } catch (e) {
              if (!f.sent)
                return (
                  (0, h.XQ)(f.history),
                  this.clearAttempt(f),
                  nl("SUBMIT_CANCELLED")
                );
              if (
                e instanceof sd.uz &&
                (e.serviceCode === eF.OH.GENERATION_QUOTE_CHANGED ||
                  (0, i3.Xt)(e.serviceCode))
              )
                return (
                  null == (a = f.history) || a.reject(e.serviceCode),
                  this.clearAttempt(f),
                  nl(
                    e.serviceCode === eF.OH.GENERATION_QUOTE_CHANGED
                      ? "QUOTE_CHANGED"
                      : "SUBMIT_REJECTED",
                  )
                );
              return await this.reconcile(f);
            }
          } finally {
            null == n || n();
          }
        }
        resolveResponse(e, t) {
          let i = 1 === t.results.length ? t.results[0] : void 0;
          if ((null == i ? void 0 : i.resource_id) === e.resourceId) {
            if (1 === i.state) return this.accept(e);
            if (2 === i.state || (0, i3.Xt)(i.error_code)) {
              var s;
              return (
                null == (s = e.history) || s.settle(t.results),
                this.clearAttempt(e),
                nl(
                  i.error_code === eF.OH.GENERATION_QUOTE_CHANGED
                    ? "QUOTE_CHANGED"
                    : "SUBMIT_REJECTED",
                )
              );
            }
          }
          return this.reconcile(e);
        }
        async reconcile(e) {
          if (this.disposed) return nl("DISPOSED");
          let t = ik(
            this.dependencies,
            [e],
            this.lifetime.signal,
            this.deadlineMs,
          );
          try {
            let i = await t.promise;
            if ("arrived" === i) return this.accept(e);
            return this.markUncertain(e);
          } finally {
            t.cancel();
          }
        }
        accept(e) {
          var t;
          if (
            (null == (t = e.history) || t.settle((0, h.Vy)([e.resourceId])),
            !this.disposed && this.attempt === e)
          ) {
            (this.dependencies.trackSubmittedResource(e.resourceId),
              e.input.capability.commerceEnabled &&
                this.dependencies.commerceRefreshCoordinator.register({
                  submitId: e.submitId,
                  acceptedResourceIds: [e.resourceId],
                  recoveryState: "complete",
                }),
              this.presentation.settle(e.submitId, [e]),
              (this.attempt = void 0),
              (this.closingAcceptedPreparation = !0));
            try {
              this.preparation.close();
            } finally {
              this.closingAcceptedPreparation = !1;
            }
          }
          return { ok: !0, value: { submittedNodeIds: [e.nodeId] } };
        }
        markUncertain(e) {
          var t;
          return (
            null == (t = e.history) ||
              t.settle([
                { resource_id: e.resourceId, state: 3, error_code: 0 },
              ]),
            (this.state = "uncertain"),
            this.publish(),
            nl("SUBMISSION_UNCERTAIN")
          );
        }
        clearAttempt(e) {
          (this.attempt === e && (this.attempt = void 0),
            this.presentation.cancel(e.submitId),
            (this.state = "ready"));
        }
        publish() {
          if (this.disposed) return;
          let e = this.preparation.getSnapshot(),
            t =
              "editing" === e.status
                ? (0, s9.z)(e.source, e.capability.commerceEnabled)
                : void 0;
          for (let i of ((this.snapshot =
            "editing" === e.status && t
              ? Object.freeze({
                  status: "active",
                  input: e,
                  commerceAction: t,
                  state: this.state,
                  ...(this.errorCode ? { errorCode: this.errorCode } : {}),
                })
              : no),
          this.listeners))
            i();
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.listeners = new Set()),
            (this.lifetime = new AbortController()),
            (this.snapshot = no),
            (this.state = "ready"),
            (this.pending = null),
            (this.disposed = !1),
            (this.closingAcceptedPreparation = !1),
            (this.getSnapshot = () => this.snapshot),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e), () => this.listeners.delete(e))),
            (this.open = (e) => {
              if (this.disposed) return nl("DISPOSED");
              if (this.pending) return nl("SUBMISSION_UNRESOLVED");
              if (this.attempt) {
                let t = this.attempt.input;
                if (
                  1 !== e.nodeIds.length ||
                  e.nodeIds[0] !== t.source.nodeId ||
                  t.projectId !== this.dependencies.getProjectId()
                )
                  return nl("SUBMISSION_UNRESOLVED");
                let i = this.preparation.open(e);
                if (!i.ok) return i;
                let s = this.preparation.capture();
                if (
                  !s.ok ||
                  s.value.source.resourceId !== t.source.resourceId ||
                  s.value.source.vid !== t.source.vid
                )
                  return (
                    this.preparation.close(),
                    nl("SUBMISSION_UNRESOLVED")
                  );
                let n = this.preparation.setBackground(t.background);
                return n.ok
                  ? ((this.state = "uncertain"),
                    (this.errorCode = void 0),
                    this.publish(),
                    i)
                  : (this.preparation.close(), n);
              }
              return (
                (this.state = "ready"),
                (this.errorCode = void 0),
                this.preparation.open(e)
              );
            }),
            (this.setBackground = (e) =>
              this.pending || this.attempt
                ? nl("SUBMISSION_UNRESOLVED")
                : this.preparation.setBackground(e)),
            (this.submit = (e) => {
              if (this.pending) return this.pending;
              if ("quoting" === this.state || "submitting" === this.state)
                return Promise.resolve(nl("SUBMIT_PENDING"));
              if (this.attempt)
                return Promise.resolve(nl("SUBMISSION_UNCERTAIN"));
              let t = this.preparation.capture();
              if (!t.ok) return Promise.resolve(t);
              if (t.value.capability.commerceEnabled && e && !na(e))
                return Promise.resolve(nl("QUOTE_UNAVAILABLE"));
              let i = null == e ? void 0 : e.credits;
              ((this.preparationAbort = new AbortController()),
                (this.state = t.value.capability.commerceEnabled
                  ? "quoting"
                  : "preparing"),
                (this.errorCode = void 0),
                this.publish());
              let s = this.runSubmit(t.value, i, this.preparationAbort.signal);
              this.pending = s;
              let n = () => {
                this.pending === s &&
                  ((this.pending = null),
                  (this.preparationAbort = void 0),
                  this.attempt || (this.state = "ready"),
                  this.publish());
              };
              return (s.then(n, n), s);
            }),
            (this.checkSubmission = () => {
              if (this.disposed) return Promise.resolve(nl("DISPOSED"));
              if (this.pending) return this.pending;
              let e = this.attempt;
              if (!e || !e.sent) return Promise.resolve(nl("NO_SUBMISSION"));
              if (e.input.projectId !== this.dependencies.getProjectId())
                return Promise.resolve(nl("PROJECT_CHANGED"));
              let t = this.reconcile(e);
              this.pending = t;
              let i = () => {
                this.pending === t && (this.pending = null);
              };
              return (t.then(i, i), t);
            }),
            (this.close = () => {
              (this.preparation.close(), this.presentation.cancel());
            }),
            (this.onPreparationChanged = () => {
              if (
                "inactive" === this.preparation.getSnapshot().status &&
                !this.closingAcceptedPreparation
              ) {
                var e, t;
                ((null == (e = this.attempt) ? void 0 : e.sent) ||
                  null == (t = this.preparationAbort) ||
                  t.abort(),
                  this.presentation.cancel());
              }
              this.publish();
            }),
            (this.preparation = new ni(e)),
            (this.presentation = new eJ.w({
              ...e,
              deadlineMs: this.deadlineMs,
            })),
            (this.releasePreparation = this.preparation.subscribe(
              this.onPreparationChanged,
            )));
        }
      }
      function na(e) {
        return (
          Number.isSafeInteger(e.credits) &&
          e.credits >= 0 &&
          "unavailable" !== e.priceDisplayStatus
        );
      }
      function nl(e) {
        return { ok: !1, reason: "commandFailed", code: e };
      }
      let nd = Object.freeze({ status: "inactive" });
      class nu {
        createFrameInterpolationPort(e, t) {
          return {
            close: e.close,
            getSnapshot: e.getSnapshot,
            open: (i) => {
              let s = e.open(i);
              if (s.ok) {
                var n, o, r, a;
                (null == (n = this.mattingSession) || n.close(),
                  null == (o = this.depthCaptureSession) || o.close(),
                  null == (r = this.cropSession) || r.close(),
                  this.partialReshootSession.close(),
                  this.editSession.close(),
                  null == (a = this.samplePromotionSession) || a.close(),
                  this.upscaleSession.close(),
                  this.subtitleErasureSession.close(),
                  null == t || t("frame-interpolation"));
              }
              return s;
            },
            setTargetFPS: e.setTargetFPS,
            submit: e.submit,
            subscribe: e.subscribe,
          };
        }
        constructor(e) {
          ((this.lastMattingSnapshot = null),
            (this.lastCropSnapshot = null),
            (this.lastDepthSnapshot = null),
            (this.lastPartialReshootSnapshot = null),
            (this.lastSubtitleErasureSnapshot = null),
            (this.disposed = !1),
            (this.lastEditSnapshot = null),
            (this.lastFrameInterpolationSnapshot = null),
            (this.lastUpscaleSnapshot = null),
            (this.lastSamplePromotionSnapshot = null),
            (this.listeners = new Set()),
            (this.snapshot = nd),
            (this.close = () => {
              var e, t, i, s;
              (null == (e = this.mattingSession) || e.close(),
                null == (t = this.depthCaptureSession) || t.close(),
                null == (i = this.cropSession) || i.close(),
                this.partialReshootSession.close(),
                this.editSession.close(),
                this.frameInterpolationSession.close(),
                null == (s = this.samplePromotionSession) || s.close(),
                this.upscaleSession.close(),
                this.subtitleErasureSession.close());
            }),
            (this.dispose = () => {
              var e, t, i, s;
              if (!this.disposed) {
                for (let e of ((this.disposed = !0), this.unsubscribeChildren))
                  e();
                (null == (e = this.mattingSession) || e.dispose(),
                  null == (t = this.depthCaptureSession) || t.dispose(),
                  null == (i = this.cropSession) || i.dispose(),
                  this.partialReshootSession.dispose(),
                  this.editSession.dispose(),
                  this.frameInterpolationSession.dispose(),
                  null == (s = this.samplePromotionSession) || s.dispose(),
                  this.upscaleSession.dispose(),
                  this.subtitleErasureSession.dispose(),
                  (this.snapshot = nd),
                  this.notify(),
                  this.listeners.clear());
              }
            }),
            (this.getSnapshot = () => {
              var e, t, i, s;
              let n =
                  (null == (e = this.mattingSession)
                    ? void 0
                    : e.getSnapshot()) ?? nd,
                o =
                  (null == (t = this.cropSession) ? void 0 : t.getSnapshot()) ??
                  nd,
                r =
                  (null == (i = this.depthCaptureSession)
                    ? void 0
                    : i.getSnapshot()) ?? nd,
                a = this.partialReshootSession.getSnapshot(),
                l = this.editSession.getSnapshot(),
                d = this.frameInterpolationSession.getSnapshot(),
                u =
                  (null == (s = this.samplePromotionSession)
                    ? void 0
                    : s.getSnapshot()) ?? nd,
                c = this.upscaleSession.getSnapshot(),
                h = this.subtitleErasureSession.getSnapshot();
              return (
                (Object.is(n, this.lastMattingSnapshot) &&
                  Object.is(o, this.lastCropSnapshot) &&
                  Object.is(r, this.lastDepthSnapshot) &&
                  Object.is(a, this.lastPartialReshootSnapshot) &&
                  Object.is(l, this.lastEditSnapshot) &&
                  Object.is(d, this.lastFrameInterpolationSnapshot) &&
                  Object.is(u, this.lastSamplePromotionSnapshot) &&
                  Object.is(c, this.lastUpscaleSnapshot) &&
                  Object.is(h, this.lastSubtitleErasureSnapshot)) ||
                  (((this.lastCropSnapshot = o),
                  (this.lastDepthSnapshot = r),
                  (this.lastMattingSnapshot = n),
                  (this.lastPartialReshootSnapshot = a),
                  (this.lastEditSnapshot = l),
                  (this.lastFrameInterpolationSnapshot = d),
                  (this.lastSamplePromotionSnapshot = u),
                  (this.lastUpscaleSnapshot = c),
                  (this.lastSubtitleErasureSnapshot = h),
                  "active" === n.status)
                    ? (this.snapshot = Object.freeze({
                        status: "active",
                        mode: "matting",
                        matting: n,
                        sources: [n.input.source],
                      }))
                    : "active" === o.status
                      ? (this.snapshot = Object.freeze({
                          status: "active",
                          mode: "crop",
                          crop: o,
                          sources: [o.source],
                        }))
                      : "active" === r.status
                        ? (this.snapshot = Object.freeze({
                            status: "active",
                            mode: "depth-capture",
                            depthCapture: r,
                            sources: [r.source],
                          }))
                        : "active" === h.status
                          ? (this.snapshot = Object.freeze({
                              status: "active",
                              mode: "subtitle-erasure",
                              sources: [h.source],
                              subtitleErasure: h,
                            }))
                          : "active" === a.status
                            ? (this.snapshot = Object.freeze({
                                partialReshoot: a,
                                mode: "partial-reshoot",
                                sources: [a.source],
                                status: "active",
                              }))
                            : "active" === l.status
                              ? (this.snapshot = Object.freeze({
                                  edit: l,
                                  mode: "edit",
                                  sources: [l.source],
                                  status: "active",
                                }))
                              : "active" === d.status
                                ? (this.snapshot = Object.freeze({
                                    frameInterpolation: d,
                                    mode: "frame-interpolation",
                                    sources: d.sources,
                                    status: "active",
                                  }))
                                : "active" === c.status
                                  ? (this.snapshot = Object.freeze({
                                      mode: "upscale",
                                      sources: c.sources,
                                      status: "active",
                                      upscale: c,
                                    }))
                                  : "active" === u.status
                                    ? (this.snapshot = Object.freeze({
                                        mode: "sample-promotion",
                                        samplePromotion: u,
                                        sources: [u.source],
                                        status: "active",
                                      }))
                                    : (this.snapshot = nd)),
                this.snapshot
              );
            }),
            (this.subscribe = (e) =>
              this.disposed
                ? () => void 0
                : (this.listeners.add(e),
                  () => {
                    this.listeners.delete(e);
                  })),
            (this.notify = () => {
              for (let e of this.listeners) e();
            }));
          const t = e.loadResourceStatesByIds;
          if (e.samplePromotionGateway && !t)
            throw Error("Sample promotion requires the resource query loader");
          const {
              activateResultNode: i,
              handoff: s,
              onModeOpened: n,
              operations: o,
              samplePromotionGateway: r,
              sourceVideoElements: l,
              ...d
            } = e,
            u = new sN({
              ...d,
              activateResultNode: i,
              handoff: s,
              onOpened: () => (null == n ? void 0 : n("edit")),
              sourceVideoElements: l,
              viewport: e.viewport,
            }),
            c = null == o ? void 0 : o.child("frame-interpolation"),
            h = new sL({ ...d, ...(c ? { operations: c } : {}) }),
            p = null == o ? void 0 : o.child("upscale"),
            m = new sX({ ...d, ...(p ? { operations: p } : {}) }),
            f = e.matting ? new nr({ ...d, ...e.matting }) : void 0;
          this.mattingSession = f;
          const b = new sE({
              ...d,
              integration: e.subtitleErasureIntegration,
              onAccepted: (t) => {
                (e.trackSubmittedResource(t.resourceId),
                  e.commerceRefreshCoordinator.register({
                    submitId: t.submitId,
                    acceptedResourceIds: [t.resourceId],
                    recoveryState: "complete",
                  }));
              },
            }),
            g =
              r && t
                ? new s8({
                    activateResultNode: i,
                    gateway: r,
                    commercial: e.commercial,
                    getSourceTitle: (t) => {
                      let i = e.getObjectSnapshot(t.nodeId);
                      return (null == i ? void 0 : i.type) === "video"
                        ? i.data.title
                        : "";
                    },
                    getSourceParams: (t) => {
                      let i = (0, sw.sN)(
                        e.getObjectSnapshot(t.nodeId),
                        e.getResourceBindings(t.nodeId),
                      );
                      return (null == i ? void 0 : i.source.resourceId) ===
                        t.resourceId
                        ? i.params
                        : void 0;
                    },
                    loadSourceResource: async (i, s, n) => {
                      let o = (
                        await t(e.getProjectId(), [i.resourceId], {
                          signal: s,
                          traceId: n,
                        })
                      ).find((e) => e.resource_id === i.resourceId);
                      if (o && "kind" in o) throw o.error;
                      return o;
                    },
                    getResolutions: (t) => {
                      var i, s, n;
                      let o = e
                          .getResourceBindings(t.nodeId)
                          .find((e) => e.resource_id === t.resourceId),
                        r =
                          null == o ||
                          null == (s = o.video) ||
                          null == (i = s.gen)
                            ? void 0
                            : i.model_name;
                      return r
                        ? ((null == (n = e.getSamplePromotionResolutions)
                            ? void 0
                            : n.call(e, r)) ?? [])
                        : [];
                    },
                    beginResultPresentation: () => (0, a.sO)(e.viewport),
                    isCurrentSample: (t) => {
                      var i;
                      return (
                        (null ==
                        (i = (0, sw.sN)(
                          e.getObjectSnapshot(t.nodeId),
                          e.getResourceBindings(t.nodeId),
                        ))
                          ? void 0
                          : i.source.resourceId) === t.resourceId
                      );
                    },
                    waitForResult: async (t, i) => {
                      let s = ik(
                        e,
                        [
                          {
                            nodeId: t.outputNodeId,
                            resourceId: t.outputResourceId,
                          },
                        ],
                        i,
                        15e3,
                      );
                      return await s.promise;
                    },
                    getEditAvailability: e.getEditAvailability,
                    getProjectId: e.getProjectId,
                    trackSubmittedResource: e.trackSubmittedResource,
                  })
                : void 0,
            v = e.depthCapture
              ? new sv({ ...d, ...e.depthCapture, onResultArrived: i })
              : void 0;
          this.depthCaptureSession = v;
          const I = e.crop
            ? new sf({ ...d, ...e.crop, onResultArrived: i })
            : void 0;
          this.cropSession = I;
          const S = new sk({
            ...d,
            activateResultNode: i,
            createHandoff: e.createPartialReshootHandoff,
            onOpened: () => {
              (null == f || f.close(),
                null == v || v.close(),
                null == I || I.close(),
                u.close(),
                h.close(),
                null == g || g.close(),
                m.close(),
                b.close(),
                null == n || n("partial-reshoot"));
            },
          });
          ((this.partialReshootSession = S), (this.partialReshoot = S));
          const y = [
            ...(f ? [f] : []),
            u,
            h,
            m,
            S,
            b,
            ...(g ? [g] : []),
            ...(v ? [v] : []),
            ...(I ? [I] : []),
          ];
          ((this.crop = I
            ? {
                close: I.close,
                getSnapshot: I.getSnapshot,
                subscribe: I.subscribe,
                isSourceActive: I.isSourceActive,
                subscribeSource: I.subscribeSource,
                setCrop: I.setCrop,
                setRatio: I.setRatio,
                reset: I.reset,
                submit: I.submit,
                open: (e) => {
                  let t = I.open(e);
                  if (t.ok) {
                    for (let e of y) e !== I && e.close();
                    null == n || n("crop");
                  }
                  return t;
                },
              }
            : void 0),
            (this.unsubscribeChildren = y.map((e) => e.subscribe(this.notify))),
            (this.editSession = u),
            (this.frameInterpolationSession = h),
            (this.upscaleSession = m),
            (this.subtitleErasureSession = b),
            (this.samplePromotionSession = g),
            (this.matting = f
              ? {
                  close: f.close,
                  getSnapshot: f.getSnapshot,
                  subscribe: f.subscribe,
                  setBackground: f.setBackground,
                  submit: f.submit,
                  checkSubmission: f.checkSubmission,
                  open: (e) => {
                    let t = f.open(e);
                    return (
                      t.ok &&
                        (null == v || v.close(),
                        null == I || I.close(),
                        S.close(),
                        u.close(),
                        h.close(),
                        null == g || g.close(),
                        m.close(),
                        b.close()),
                      t
                    );
                  },
                }
              : void 0),
            (this.edit = {
              close: u.close,
              getCommerceAction: u.getCommerceAction,
              getSnapshot: u.getSnapshot,
              getSourceVideoElement: u.getSourceVideoElement,
              isSourceActive: u.isSourceActive,
              open: (e) => {
                let t = u.open(e);
                return (
                  t.ok &&
                    (null == f || f.close(),
                    null == v || v.close(),
                    null == I || I.close(),
                    S.close(),
                    h.close(),
                    null == g || g.close(),
                    m.close(),
                    b.close()),
                  t
                );
              },
              sourceVideoElements: u.sourceVideoElements,
              submit: u.submit,
              subscribe: u.subscribe,
              subscribeSource: u.subscribeSource,
              subscribeSourceVideoElement: u.subscribeSourceVideoElement,
            }),
            (this.depthCapture = v
              ? {
                  close: v.close,
                  getSnapshot: v.getSnapshot,
                  subscribe: v.subscribe,
                  setResolution: v.setResolution,
                  submit: v.submit,
                  open: (e) => {
                    let t = v.open(e);
                    return (
                      t.ok &&
                        (null == f || f.close(),
                        null == I || I.close(),
                        S.close(),
                        u.close(),
                        h.close(),
                        m.close(),
                        null == g || g.close(),
                        b.close(),
                        null == n || n("depth-capture")),
                      t
                    );
                  },
                }
              : void 0),
            (this.frameInterpolation = this.createFrameInterpolationPort(h, n)),
            (this.upscale = {
              close: m.close,
              getSnapshot: m.getSnapshot,
              open: (e) => {
                let t = m.open(e);
                return (
                  t.ok &&
                    (null == f || f.close(),
                    null == v || v.close(),
                    null == I || I.close(),
                    S.close(),
                    u.close(),
                    h.close(),
                    null == g || g.close(),
                    b.close(),
                    null == n || n("upscale")),
                  t
                );
              },
              setResolution: m.setResolution,
              submit: m.submit,
              subscribe: m.subscribe,
            }),
            (this.subtitleErasure = {
              close: b.close,
              getSnapshot: b.getSnapshot,
              subscribe: b.subscribe,
              submit: b.submit,
              open: (e) => {
                let t = b.open(e);
                return (
                  t.ok &&
                    (null == f || f.close(),
                    null == v || v.close(),
                    null == I || I.close(),
                    S.close(),
                    u.close(),
                    h.close(),
                    null == g || g.close(),
                    m.close(),
                    null == n || n("subtitle-erasure")),
                  t
                );
              },
            }),
            (this.samplePromotion = g
              ? {
                  close: g.close,
                  getSnapshot: g.getSnapshot,
                  selectResolution: g.selectResolution,
                  open: (e) => {
                    let t = g.open(e);
                    return (
                      t.ok &&
                        (null == f || f.close(),
                        null == v || v.close(),
                        null == I || I.close(),
                        S.close(),
                        u.close(),
                        h.close(),
                        m.close(),
                        b.close(),
                        null == n || n("sample-promotion")),
                      t
                    );
                  },
                  submit: g.submit,
                  subscribe: g.subscribe,
                }
              : void 0));
        }
      }
      class nc {
        notify(e) {
          for (let t of this.listeners.get(e) ?? []) t();
        }
        constructor() {
          ((this.elements = new Map()),
            (this.listeners = new Map()),
            (this.get = (e) => {
              var t;
              return (
                (null == (t = this.elements.get(e)) ? void 0 : t.video) ?? null
              );
            }),
            (this.register = (e, t) => {
              let i = Symbol(e);
              return (
                this.elements.set(e, { registration: i, video: t }),
                this.notify(e),
                () => {
                  var t;
                  (null == (t = this.elements.get(e))
                    ? void 0
                    : t.registration) === i &&
                    (this.elements.delete(e), this.notify(e));
                }
              );
            }),
            (this.subscribe = (e, t) => {
              let i = this.listeners.get(e) ?? new Set();
              return (
                i.add(t),
                this.listeners.set(e, i),
                () => {
                  (i.delete(t), 0 === i.size && this.listeners.delete(e));
                }
              );
            }));
        }
      }
      var nh = i(9098);
      class np {
        resolveSource(e) {
          let t = 1 === e.length ? e[0] : void 0;
          if (!t) return null;
          let i = this.dependencies.getObjectSnapshot(t);
          if ((null == i ? void 0 : i.type) !== "video") return null;
          let s = this.dependencies.getResourceBindings(t);
          for (let e of i.data.resourceId
            ? s.filter((e) => e.resource_id === i.data.resourceId)
            : s) {
            var o;
            if (e.type !== n._x.video || e.status !== n.ao.success) continue;
            let s = null == (o = e.video) ? void 0 : o.duration,
              r =
                "number" == typeof s && Number.isFinite(s) && s > 0
                  ? 1e3 * s
                  : void 0;
            return Object.freeze({
              ...(void 0 === r ? {} : { durationMs: r }),
              nodeId: t,
              resourceId: e.resource_id,
              title: i.data.title,
            });
          }
          return null;
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.execute = async (e) => {
              let t,
                i,
                o,
                { nodeIds: r } = e;
              if (!this.dependencies.isEnabled())
                return {
                  code: "CAPABILITY_UNAVAILABLE",
                  ok: !1,
                  reason: "featureNotReady",
                };
              let a = this.dependencies.getEditAvailability().local;
              if (!a.available)
                return {
                  code:
                    "notEditable" === a.reason
                      ? "PERMISSION_DENIED"
                      : "NOT_EDITING_READY",
                  ok: !1,
                  reason:
                    "notEditable" === a.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                };
              let l = this.resolveSource(r);
              if (!l)
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (void 0 !== l.durationMs && l.durationMs > 36e4)
                return {
                  code: "SOURCE_DURATION_EXCEEDED",
                  message: (0, nh.CB)(),
                  ok: !1,
                  reason: "commandFailed",
                };
              let u = new AbortController(),
                c = !1,
                m = () => {
                  if (t) return t;
                  if (c) return;
                  let e = this.dependencies.getEditAvailability().local;
                  if (!e.available)
                    return (
                      (t =
                        "notEditable" === e.reason
                          ? {
                              code: "PERMISSION_DENIED",
                              ok: !1,
                              reason: "permissionDenied",
                            }
                          : {
                              code: "NOT_EDITING_READY",
                              ok: !1,
                              reason: "notEditingReady",
                            }),
                      u.abort(
                        new DOMException("Editing unavailable", "AbortError"),
                      ),
                      t
                    );
                },
                f = () => {
                  if (m()) throw u.signal.reason;
                },
                b = this.dependencies.subscribeEditAvailability(() => {
                  m();
                });
              try {
                var g, v;
                ((i =
                  null ==
                  (g = (v = this.dependencies.generator).captureConsumption)
                    ? void 0
                    : g.call(v)),
                  f(),
                  (o = i ? (0, s.pt)(i, u.signal) : void 0));
                let e = (function (e) {
                    let {
                        source: t,
                        getProjectId: i,
                        createNodeId: s,
                        createResourceId: o,
                        createSubmitId: r,
                      } = e,
                      a = s ?? d.XG,
                      l = o ?? d.ve,
                      u = r ?? d.pf,
                      c = {
                        output_node_id: a(),
                        output_title: (0, nh.oR)(t.title),
                        source_node_id: t.nodeId,
                        source_resource_id: t.resourceId,
                        output_type: n._x.audio,
                        item: {
                          type: 3,
                          resource_id: l(),
                          params: { audio_params: { mode: 3 } },
                        },
                      };
                    return {
                      project_id: i(),
                      op: 3,
                      post_edit: {
                        submit_id: u(),
                        source_node_id: t.nodeId,
                        source_resource_id: t.resourceId,
                        items: Object.freeze([c]),
                      },
                    };
                  })({
                    source: l,
                    getProjectId: this.dependencies.getProjectId,
                    createNodeId: () => (
                      f(),
                      (this.dependencies.createNodeId ?? d.XG)()
                    ),
                    createResourceId: () => (
                      f(),
                      (this.dependencies.createResourceId ?? d.ve)()
                    ),
                    createSubmitId: () => (
                      f(),
                      (this.dependencies.createSubmitId ?? d.pf)()
                    ),
                  }),
                  t = e.post_edit.items.map((e) => e.item.resource_id),
                  r = this.dependencies.generationHistorySubmissionPort,
                  a = (
                    await (0, h.Ud)({
                      generationHistorySubmissionPort: r
                        ? {
                            register: (e) => {
                              (f(), r.register(e));
                            },
                            reject: (e) => r.reject(e),
                            settle: (e) => r.settle(e),
                          }
                        : void 0,
                      generate: () => {
                        (f(), (c = !0));
                        let i = this.dependencies.generator.nodeGenerate(
                          e,
                          (null == o ? void 0 : o.options) ?? {
                            signal: u.signal,
                          },
                        );
                        for (let e of t)
                          this.dependencies.trackSubmittedResource(e);
                        return i;
                      },
                      mediaType: "audio",
                      name: (0, nh.fi)(),
                      nodeId: l.nodeId,
                      resourceIds: t,
                      submitId: e.post_edit.submit_id,
                    })
                  ).results
                    .filter((e) => 2 !== e.state)
                    .map((e) => e.resource_id);
                if (0 === a.length)
                  return {
                    code: "ALL_ITEMS_REJECTED",
                    message: (0, nh.tq)(),
                    ok: !1,
                    reason: "commandFailed",
                  };
                return {
                  ok: !0,
                  value: { submittedResourceIds: Object.freeze(a) },
                };
              } catch (s) {
                let e = t ?? m();
                if (e) return e;
                return {
                  ...(0, p.b)(
                    s,
                    (null == o ? void 0 : o.options.signal) ??
                      (null == i ? void 0 : i.signal),
                    (0, nh.tq)(),
                  ),
                  ok: !1,
                  reason: "commandFailed",
                };
              } finally {
                (b(), null == o || o.dispose(), null == i || i.dispose());
              }
            }));
        }
      }
      var nm = i(66876),
        nf = i(72041),
        nb = i(57713);
      let ng = "seed_audio_v1_5";
      function nv(e) {
        return void 0 !== e && e > 36e4;
      }
      let nI = Object.freeze({ status: "inactive" }),
        nS = 0;
      class ny {
        abortPendingWork(e) {
          var t;
          for (let i of (null == (t = this.signalController) || t.abort(e),
          this.activeSubmissionControllers))
            i.abort(e);
          (this.activeSubmissionControllers.clear(),
            (this.signalController = null));
        }
        abortUntransportedWork(e) {
          for (let t of (this.signalController &&
            !this.transportedSubmissionControllers.has(this.signalController) &&
            this.signalController.abort(e),
          this.activeSubmissionControllers))
            this.transportedSubmissionControllers.has(t) || t.abort(e);
        }
        closeUnavailableSession() {
          for (let e of this.activeSubmissionControllers)
            this.transportedSubmissionControllers.has(e) ||
              e.abort("capability unavailable");
          this.close();
        }
        cancelFocusPresentation() {
          var e;
          (null == (e = this.focusPresentation) || e.cancel(),
            (this.focusPresentation = null));
        }
        resolveCurrentSource(e) {
          let t = this.dependencies.getObjectSnapshot(e.nodeId);
          if ((null == t ? void 0 : t.type) !== "video") return null;
          let i = (0, nb.V)({
            nodeId: t.id,
            primaryResourceId: t.data.resourceId,
            resources: this.dependencies.getResourceBindings(t.id),
            title: t.data.title,
          });
          return (null == i ? void 0 : i.resourceId) === e.resourceId &&
            i.vid === e.vid
            ? i
            : null;
        }
        updateLanguages() {
          let e = this.dependencies.languageCatalog.getLanguages();
          if (
            (e.length === this.languages.length &&
              e.every((e, t) => {
                var i, s;
                return (
                  e.id === (null == (i = this.languages[t]) ? void 0 : i.id) &&
                  e.label ===
                    (null == (s = this.languages[t]) ? void 0 : s.label)
                );
              })) ||
            ((this.languages = e), "active" !== this.snapshot.status)
          )
            return;
          if (0 === e.length) return void this.closeUnavailableSession();
          let t = new Set(e.map((e) => e.id));
          this.commit({
            ...this.snapshot,
            selectedLanguageIds: Object.freeze(
              this.snapshot.selectedLanguageIds.filter((e) => t.has(e)),
            ),
          });
        }
        commit(e) {
          ((this.snapshot = Object.freeze(e)), this.notify());
        }
        publishSubmission(e, t) {
          "active" === this.snapshot.status &&
            this.snapshot.sessionId === e &&
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              submission: Object.freeze(t),
            })),
            this.notify());
        }
        notify() {
          for (let e of this.listeners) e();
        }
        constructor(e) {
          var t;
          ((this.dependencies = e),
            (this.activeSubmissionControllers = new Set()),
            (this.transportedSubmissionControllers = new WeakSet()),
            (this.listeners = new Set()),
            (this.disposed = !1),
            (this.snapshot = nI),
            (this.signalController = null),
            (this.focusPresentation = null),
            (this.close = () => {
              (this.cancelFocusPresentation(),
                "inactive" !== this.snapshot.status &&
                  (this.signalController &&
                    !this.transportedSubmissionControllers.has(
                      this.signalController,
                    ) &&
                    this.signalController.abort("session closed"),
                  (this.signalController = null),
                  (this.snapshot = nI),
                  this.notify()));
            }),
            (this.dispose = () => {
              var e;
              this.disposed ||
                ((this.disposed = !0),
                this.cancelFocusPresentation(),
                this.unsubscribeEditAvailability(),
                this.unsubscribeLanguageCatalog(),
                null == (e = this.unsubscribeModelAvailability) || e.call(this),
                this.abortPendingWork("session disposed"),
                (this.snapshot = nI),
                this.notify());
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.getLanguages = () => this.languages),
            (this.isSourceActive = (e) =>
              "active" === this.snapshot.status &&
              this.snapshot.source.nodeId === e),
            (this.open = (e) => {
              var t, i;
              let { nodeIds: s } = e;
              if (this.disposed)
                return {
                  code: "SESSION_DISPOSED",
                  ok: !1,
                  reason: "notEditingReady",
                };
              if (
                this.dependencies.modelAvailability &&
                !this.dependencies.modelAvailability.getState()
              )
                return {
                  code: "MODEL_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                  message: (0, r.sm)(),
                };
              if (0 === this.languages.length)
                return {
                  code: "LANGUAGE_CATALOG_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let n = this.dependencies.getEditAvailability().local;
              if (!n.available)
                return {
                  code:
                    "notEditable" === n.reason
                      ? "PERMISSION_DENIED"
                      : "NOT_EDITING_READY",
                  ok: !1,
                  reason:
                    "notEditable" === n.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                };
              let o = 1 === s.length ? s[0] : void 0;
              if (!o)
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let l = this.dependencies.getObjectSnapshot(o);
              if ((null == l ? void 0 : l.type) !== "video")
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let d = (0, nb.V)({
                nodeId: l.id,
                primaryResourceId: l.data.resourceId,
                resources: this.dependencies.getResourceBindings(l.id),
                title: l.data.title,
              });
              if (!d)
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (nv(d.durationMs))
                return {
                  code: "SOURCE_DURATION_EXCEEDED",
                  ok: !1,
                  reason: "commandFailed",
                  message: (0, nf.eB)(),
                };
              if (
                (this.cancelFocusPresentation(),
                this.signalController &&
                  !this.transportedSubmissionControllers.has(
                    this.signalController,
                  ))
              ) {
                null == (t = this.signalController) ||
                  t.abort("session replaced");
              }
              ((this.signalController = new AbortController()),
                (this.snapshot = Object.freeze({
                  sessionId:
                    "function" ==
                    typeof (null == (i = globalThis.crypto)
                      ? void 0
                      : i.randomUUID)
                      ? globalThis.crypto.randomUUID()
                      : ((nS += 1), `video-translation-${nS}`),
                  source: d,
                  status: "active",
                  selectedLanguageIds: Object.freeze([]),
                  submission: Object.freeze({ phase: "idle" }),
                })),
                this.notify());
              let u = (0, a.FX)(this.dependencies.viewport);
              return (
                (this.focusPresentation = u),
                u.present({ kind: "nodes", nodeIds: [d.nodeId] }),
                { ok: !0, value: { sessionId: this.snapshot.sessionId } }
              );
            }),
            (this.toggleLanguage = (e) => {
              if (
                "active" !== this.snapshot.status ||
                "submitting" === this.snapshot.submission.phase ||
                !this.languages.some((t) => t.id === e)
              )
                return;
              let t = this.snapshot.selectedLanguageIds,
                i = t.includes(e)
                  ? t.filter((t) => t !== e)
                  : Object.freeze([...t, e]);
              this.commit({ ...this.snapshot, selectedLanguageIds: i });
            }),
            (this.setSelectedLanguageIds = (e) => {
              if (
                "active" !== this.snapshot.status ||
                "submitting" === this.snapshot.submission.phase
              )
                return;
              let t = new Set(this.languages.map((e) => e.id));
              this.commit({
                ...this.snapshot,
                selectedLanguageIds: Object.freeze([
                  ...new Set(e.filter((e) => t.has(e))),
                ]),
              });
            }),
            (this.clearSelection = () => {
              "active" === this.snapshot.status &&
                "submitting" !== this.snapshot.submission.phase &&
                this.commit({
                  ...this.snapshot,
                  selectedLanguageIds: Object.freeze([]),
                });
            }),
            (this.submit = async () => {
              if ("active" !== this.snapshot.status)
                return {
                  code: "SESSION_NOT_ACTIVE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (
                this.dependencies.modelAvailability &&
                !this.dependencies.modelAvailability.getState()
              )
                return {
                  code: "MODEL_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                  message: (0, r.sm)(),
                };
              let e = this.dependencies.getEditAvailability().local;
              if (!e.available)
                return {
                  code:
                    "notEditable" === e.reason
                      ? "PERMISSION_DENIED"
                      : "NOT_EDITING_READY",
                  ok: !1,
                  reason:
                    "notEditable" === e.reason
                      ? "permissionDenied"
                      : "notEditingReady",
                };
              if ("submitting" === this.snapshot.submission.phase)
                return {
                  code: "SUBMISSION_IN_PROGRESS",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (0 === this.snapshot.selectedLanguageIds.length)
                return {
                  code: "NO_TARGET_LANGUAGE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let t = this.resolveCurrentSource(this.snapshot.source);
              if (!t)
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (nv(t.durationMs))
                return {
                  code: "SOURCE_DURATION_EXCEEDED",
                  ok: !1,
                  reason: "commandFailed",
                  message: (0, nf.eB)(),
                };
              let i = this.snapshot.selectedLanguageIds,
                o = this.snapshot.sessionId,
                l = this.signalController;
              if (!l)
                return {
                  code: "SESSION_NOT_ACTIVE",
                  ok: !1,
                  reason: "commandFailed",
                };
              let m = l.signal;
              (this.cancelFocusPresentation(),
                this.publishSubmission(o, { phase: "submitting" }),
                this.activeSubmissionControllers.add(l));
              try {
                let e = await this.dependencies.commercial.execute(
                  (0, c._)(i.length, {
                    audioScenario: "videoTranslation",
                    referenceVideoDurationSeconds:
                      void 0 === t.durationMs ? void 0 : t.durationMs / 1e3,
                  }),
                  async (e) => {
                    let c = (0, s.pt)(e, m),
                      f = c.options.signal,
                      b = null;
                    try {
                      (f.throwIfAborted(),
                        (b = (0, a.sO)(this.dependencies.viewport)),
                        await this.dependencies.languageCatalog.refresh(),
                        f.throwIfAborted());
                      let s = new Set(
                        this.dependencies.languageCatalog
                          .getLanguages()
                          .map((e) => e.id),
                      );
                      if (i.some((e) => !s.has(e))) {
                        let e = (0, nf.LH)();
                        return (
                          this.publishSubmission(o, {
                            phase: "failed",
                            errorMessage: e,
                          }),
                          {
                            code: "LANGUAGE_CATALOG_UNAVAILABLE",
                            ok: !1,
                            reason: "commandFailed",
                            message: e,
                          }
                        );
                      }
                      let p = this.resolveCurrentSource(t);
                      if (!p)
                        return (
                          this.publishSubmission(o, { phase: "idle" }),
                          {
                            code: "SOURCE_RESOURCE_UNAVAILABLE",
                            ok: !1,
                            reason: "commandFailed",
                          }
                        );
                      if (nv(p.durationMs))
                        return (
                          this.publishSubmission(o, { phase: "idle" }),
                          {
                            code: "SOURCE_DURATION_EXCEEDED",
                            ok: !1,
                            reason: "commandFailed",
                            message: (0, nf.eB)(),
                          }
                        );
                      if (this.dependencies.seedAudioCompliance) {
                        if (
                          !(await this.dependencies.seedAudioCompliance.requestConfirmation(
                            f,
                            () =>
                              this.dependencies.getEditAvailability().local
                                .available,
                          ))
                        )
                          return (
                            this.publishSubmission(o, { phase: "idle" }),
                            {
                              code: "CONFIRMATION_CANCELLED",
                              ok: !1,
                              reason: "commandFailed",
                            }
                          );
                        if (
                          (f.throwIfAborted(),
                          !this.dependencies.getEditAvailability().local
                            .available)
                        )
                          return (
                            this.publishSubmission(o, { phase: "idle" }),
                            {
                              code: "PERMISSION_DENIED",
                              ok: !1,
                              reason: "permissionDenied",
                            }
                          );
                        if (
                          this.dependencies.modelAvailability &&
                          !this.dependencies.modelAvailability.getState()
                        ) {
                          let e = (0, r.sm)();
                          return (
                            this.publishSubmission(o, {
                              phase: "failed",
                              errorMessage: e,
                            }),
                            {
                              code: "MODEL_UNAVAILABLE",
                              ok: !1,
                              reason: "commandFailed",
                              message: e,
                            }
                          );
                        }
                      }
                      if (
                        (f.throwIfAborted(),
                        !this.dependencies.getEditAvailability().local
                          .available)
                      )
                        return (
                          this.publishSubmission(o, { phase: "idle" }),
                          {
                            code: "PERMISSION_DENIED",
                            ok: !1,
                            reason: "permissionDenied",
                          }
                        );
                      let m = this.resolveCurrentSource(t);
                      if (!m)
                        return (
                          this.publishSubmission(o, { phase: "idle" }),
                          {
                            code: "SOURCE_RESOURCE_UNAVAILABLE",
                            ok: !1,
                            reason: "commandFailed",
                          }
                        );
                      if (nv(m.durationMs))
                        return (
                          this.publishSubmission(o, { phase: "idle" }),
                          {
                            code: "SOURCE_DURATION_EXCEEDED",
                            ok: !1,
                            reason: "commandFailed",
                            message: (0, nf.eB)(),
                          }
                        );
                      if (
                        this.dependencies.modelAvailability &&
                        !this.dependencies.modelAvailability.getState()
                      ) {
                        let e = (0, r.sm)();
                        return (
                          this.publishSubmission(o, {
                            phase: "failed",
                            errorMessage: e,
                          }),
                          {
                            code: "MODEL_UNAVAILABLE",
                            ok: !1,
                            reason: "commandFailed",
                            message: e,
                          }
                        );
                      }
                      let g = (function (e) {
                          let {
                              source: t,
                              languageIds: i,
                              languageLabels: s,
                              getProjectId: o,
                              createNodeId: r,
                              createResourceId: a,
                              createSubmitId: l,
                              commerceSelection: u,
                            } = e,
                            c = r ?? d.XG,
                            h = a ?? d.ve,
                            p = l ?? d.pf,
                            m = { type: 3, role: 4, vid: t.vid },
                            f = i.map((e) => {
                              let i =
                                (null == s ? void 0 : s.get(e)) ??
                                (0, nf.V9)(e);
                              return {
                                output_node_id: c(),
                                output_title: `${t.title.trim() || "video"}_${i}`,
                                source_node_id: t.nodeId,
                                source_resource_id: t.resourceId,
                                output_type: n._x.video,
                                item: {
                                  ...(u ? { commerce_selection: u } : {}),
                                  type: 3,
                                  resource_id: h(),
                                  reference_sources: [
                                    {
                                      material_idx: 0,
                                      node_id: t.nodeId,
                                      resource_id: t.resourceId,
                                    },
                                  ],
                                  params: {
                                    audio_params: {
                                      mode: 1,
                                      audio_model: {
                                        model_name: ng,
                                        scenario: 3,
                                        prompt: "",
                                        materials: [m],
                                        target_language: e,
                                      },
                                    },
                                  },
                                },
                              };
                            });
                          return {
                            project_id: o(),
                            op: 3,
                            post_edit: {
                              submit_id: p(),
                              source_node_id: t.nodeId,
                              source_resource_id: t.resourceId,
                              items: Object.freeze(f),
                            },
                          };
                        })({
                          source: m,
                          languageIds: i,
                          languageLabels: new Map(
                            this.dependencies.languageCatalog
                              .getLanguages()
                              .map((e) => [e.id, e.label]),
                          ),
                          getProjectId: this.dependencies.getProjectId,
                          createNodeId: this.dependencies.createNodeId,
                          createResourceId: this.dependencies.createResourceId,
                          createSubmitId: this.dependencies.createSubmitId,
                          commerceSelection: {
                            benefit_type: e.selection.benefitType,
                          },
                        }),
                        v = await this.dependencies.prepareOutputNodes(g, f);
                      if (
                        (f.throwIfAborted(),
                        !this.dependencies.getEditAvailability().local
                          .available)
                      )
                        throw Error("Editing unavailable");
                      let I = this.resolveCurrentSource(m);
                      if (!I)
                        throw (
                          await v.removeUnchangedNodes(
                            g.post_edit.items.map((e) => e.output_node_id),
                          ),
                          Error("Translation source changed")
                        );
                      if (nv(I.durationMs))
                        return (
                          await v.removeUnchangedNodes(
                            g.post_edit.items.map((e) => e.output_node_id),
                          ),
                          this.publishSubmission(o, { phase: "idle" }),
                          {
                            code: "SOURCE_DURATION_EXCEEDED",
                            ok: !1,
                            reason: "commandFailed",
                            message: (0, nf.eB)(),
                          }
                        );
                      let [S, ...y] = g.post_edit.items;
                      if (!S) throw Error("Translation output unavailable");
                      (b.present({
                        kind: "nodes",
                        nodeIds: [
                          S.output_node_id,
                          ...y.map((e) => e.output_node_id),
                        ],
                      }),
                        (b = null));
                      let E = g.post_edit.items.map((e) => e.item.resource_id),
                        w = i.map((e, t) => {
                          var i;
                          return {
                            childKey: e,
                            childLabel:
                              (null ==
                              (i = this.languages.find((t) => t.id === e))
                                ? void 0
                                : i.label) ?? (0, nf.V9)(e),
                            childIndex: t,
                          };
                        }),
                        A = await (0, h.Ud)({
                          generationHistorySubmissionPort: this.dependencies
                            .generationHistorySubmissionPort
                            ? {
                                register: (e) => {
                                  var t;
                                  if (
                                    f.aborted ||
                                    !this.dependencies.getEditAvailability()
                                      .local.available
                                  )
                                    throw new DOMException(
                                      "Translation submission cancelled before history registration",
                                      "AbortError",
                                    );
                                  null ==
                                    (t =
                                      this.dependencies
                                        .generationHistorySubmissionPort) ||
                                    t.register(e);
                                },
                                reject: (e) => {
                                  var t;
                                  return null ==
                                    (t =
                                      this.dependencies
                                        .generationHistorySubmissionPort)
                                    ? void 0
                                    : t.reject(e);
                                },
                                settle: (e) => {
                                  var t;
                                  return null ==
                                    (t =
                                      this.dependencies
                                        .generationHistorySubmissionPort)
                                    ? void 0
                                    : t.settle(e);
                                },
                              }
                            : void 0,
                          generate: () => {
                            if (
                              f.aborted ||
                              !this.dependencies.getEditAvailability().local
                                .available
                            )
                              throw new DOMException(
                                "Translation submission cancelled before transport",
                                "AbortError",
                              );
                            return (
                              this.transportedSubmissionControllers.add(l),
                              (0, u.nX)({
                                coordinator:
                                  this.dependencies.commerceRefreshCoordinator,
                                submitId: g.post_edit.submit_id,
                                resourceIds: E,
                                generate: () => {
                                  let e =
                                    this.dependencies.generator.nodeGenerate(
                                      g,
                                      c.options,
                                    );
                                  for (let e of E)
                                    this.dependencies.trackSubmittedResource(e);
                                  return e;
                                },
                              })
                            );
                          },
                          mediaType: "video",
                          postEditScenario: "videoTranslation",
                          modelName: ng,
                          name: (0, nf.DO)(),
                          nodeId: t.nodeId,
                          resourceIds: E,
                          submitId: g.post_edit.submit_id,
                          children: w,
                        }),
                        C = new Set(
                          A.results
                            .filter(
                              (e) =>
                                2 === e.state && !1 === e.resource_persisted,
                            )
                            .map((e) => e.resource_id),
                        ),
                        R = g.post_edit.items
                          .filter((e) => {
                            let { item: t } = e;
                            return C.has(t.resource_id);
                          })
                          .map((e) => e.output_node_id);
                      R.length > 0 &&
                        !this.disposed &&
                        !f.aborted &&
                        this.dependencies.getEditAvailability().local
                          .available &&
                        (await v.removeUnchangedNodes(R));
                      let k = A.results
                          .filter((e) => 2 !== e.state)
                          .map((e) => e.resource_id),
                        _ = A.results.some((e) => 2 === e.state);
                      if (0 === k.length) {
                        let e = (0, r._y)();
                        return (
                          this.publishSubmission(o, {
                            phase: "failed",
                            errorMessage: e,
                          }),
                          {
                            code: "ALL_ITEMS_REJECTED",
                            ok: !1,
                            reason: "commandFailed",
                            message: e,
                          }
                        );
                      }
                      return (
                        "active" === this.snapshot.status &&
                          this.snapshot.sessionId === o &&
                          this.close(),
                        {
                          ok: !0,
                          value: { submittedResourceIds: Object.freeze(k) },
                          ...(_
                            ? {
                                message: (0, nm.tVc)(
                                  k.length,
                                  A.results.length - k.length,
                                ),
                              }
                            : {}),
                        }
                      );
                    } catch (t) {
                      let e = (0, p.b)(t, f);
                      return (
                        this.publishSubmission(
                          o,
                          "SUBMIT_CANCELLED" === e.code
                            ? { phase: "idle" }
                            : { phase: "failed", errorMessage: e.message },
                        ),
                        { ...e, ok: !1, reason: "commandFailed" }
                      );
                    } finally {
                      (null == b || b.cancel(), c.dispose());
                    }
                  },
                );
                if ("executed" === e.status) return e.value;
                if ("blocked" === e.status || "cancelled" === e.status)
                  return (
                    this.publishSubmission(o, { phase: "idle" }),
                    {
                      code:
                        "blocked" === e.status
                          ? "COMMERCIAL_BLOCKED"
                          : "SUBMIT_CANCELLED",
                      ok: !1,
                      reason: "commandFailed",
                    }
                  );
                return (
                  this.publishSubmission(o, {
                    phase: "failed",
                    errorMessage: (0, r.sm)(),
                  }),
                  {
                    code: "COMMERCIAL_UNAVAILABLE",
                    ok: !1,
                    reason: "commandFailed",
                  }
                );
              } catch {
                if (l.signal.aborted)
                  return (
                    this.publishSubmission(o, { phase: "idle" }),
                    {
                      code: "SUBMIT_CANCELLED",
                      ok: !1,
                      reason: "commandFailed",
                    }
                  );
                let e = (0, r.sm)();
                return (
                  this.publishSubmission(o, {
                    phase: "failed",
                    errorMessage: e,
                  }),
                  {
                    code: "COMMERCIAL_UNAVAILABLE",
                    ok: !1,
                    reason: "commandFailed",
                    message: e,
                  }
                );
              } finally {
                (this.activeSubmissionControllers.delete(l),
                  this.disposed ||
                    "active" !== this.snapshot.status ||
                    this.snapshot.sessionId !== o ||
                    this.signalController !== l ||
                    (this.signalController = new AbortController()));
              }
            }),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.languages = e.languageCatalog.getLanguages()),
            (this.unsubscribeLanguageCatalog = e.languageCatalog.subscribe(() =>
              this.updateLanguages(),
            )),
            (this.unsubscribeEditAvailability = e.subscribeEditAvailability(
              () => {
                e.getEditAvailability().local.available ||
                  (this.abortUntransportedWork("editing unavailable"),
                  this.close());
              },
            )),
            (this.unsubscribeModelAvailability =
              null == (t = e.modelAvailability)
                ? void 0
                : t.subscribe(() => {
                    var t;
                    (null == (t = e.modelAvailability)
                      ? void 0
                      : t.getState()) || this.closeUnavailableSession();
                  })));
        }
      }
      let nE = "octo-video-trim";
      class nw {
        async materialize(e, t, s) {
          (t.throwIfAborted(), await nA(t), t.throwIfAborted());
          let {
            ALL_FORMATS: n,
            BlobSource: o,
            Conversion: r,
            Input: a,
            Mp4OutputFormat: l,
            Output: d,
            StreamTarget: u,
          } = await Promise.all([i.e(7140), i.e(4244), i.e(1771)]).then(
            i.bind(i, 58047),
          );
          t.throwIfAborted();
          let c = null,
            h = null,
            p = null,
            m = null,
            f = () => {
              (null == p || p.dispose(), m && m.cancel());
            };
          t.addEventListener("abort", f, { once: !0 });
          try {
            var b;
            let i, f;
            ((c = await nC(e.outputName, t)),
              (h = await nk(e.sourceUrl, t, (e) =>
                null == s ? void 0 : s({ progress: e, stage: "downloading" }),
              )),
              t.throwIfAborted());
            let g = new o(await h.handle.getFile());
            p = new a({ formats: n, source: g });
            let v = ["AudioDecoder", "AudioEncoder"].some(
              (e) => "function" != typeof Reflect.get(globalThis, e),
            )
              ? await p.getPrimaryAudioTrack()
              : null;
            t.throwIfAborted();
            let I = (e.range.endMs - e.range.startMs) / 1e3,
              S = new d({
                format: new l({
                  fastStart: !1,
                  maximumPresentationDuration: I,
                }),
                target: new u(c.stream, { chunked: !0 }),
              });
            if (
              !(m = await r.init({
                input: p,
                output: S,
                showWarnings: !1,
                ...(v ? { audio: { packetTrim: "aac-edit-list" } } : {}),
                tracks: "primary",
                trim: {
                  start: e.range.startMs / 1e3,
                  end: e.range.endMs / 1e3,
                },
              })).isValid ||
              (v && !m.utilizedTracks.includes(v))
            )
              throw new A(
                "The source video cannot be converted to MP4 in this browser.",
              );
            let y =
              ((b = (e) =>
                null == s ? void 0 : s({ progress: e, stage: "converting" })),
              (i = -1),
              (e) => {
                let t = Math.min(100, Math.max(0, Math.round(e)));
                t !== i && ((i = t), b(t));
              });
            (s && (m.onProgress = (e) => y(100 * e)),
              y(0),
              t.throwIfAborted(),
              await m.execute(),
              t.throwIfAborted(),
              y(100));
            let E = await c.handle.getFile();
            return {
              file: new File(
                [E],
                (f = e.outputName.trim() || "trimmed-video")
                  .toLowerCase()
                  .endsWith(".mp4")
                  ? f
                  : `${f}.mp4`,
                { lastModified: Date.now(), type: "video/mp4" },
              ),
              dispose: c.dispose,
            };
          } catch (e) {
            throw (
              await (null == c ? void 0 : c.abort(e).catch(() => void 0)),
              await (null == c ? void 0 : c.dispose().catch(() => void 0)),
              e instanceof w.X ? new A(e.message) : e
            );
          } finally {
            (t.removeEventListener("abort", f),
              null == p || p.dispose(),
              await (null == h ? void 0 : h.dispose().catch(() => void 0)));
          }
        }
      }
      async function nA(e) {
        let t = await navigator.storage.getDirectory(),
          i = await t.getDirectoryHandle(nE, { create: !0 }),
          s = i.entries;
        if (!s) return;
        let n = Date.now() - 864e5;
        for await (let [t, o] of s.call(i)) {
          let s;
          if ((e.throwIfAborted(), "file" === o.kind)) {
            try {
              s = await o.getFile();
            } catch (e) {
              if (nO(e)) continue;
              throw e;
            }
            if (!(s.lastModified > n))
              try {
                await i.removeEntry(t);
              } catch (e) {
                if (!nO(e)) throw e;
              }
          }
        }
      }
      async function nC(e, t) {
        let i = await nR(e),
          s = await (0, w.n)(i, t),
          n = new WritableStream({
            abort: (e) => s.abort(e),
            close: () => s.close(),
            write: (e) => s.write(e.data, e.position),
          }),
          o = async (e) => {
            try {
              await s.abort(e);
            } catch (e) {
              if (
                !(e instanceof DOMException && "InvalidStateError" === e.name)
              )
                throw e;
            }
          };
        return { ...i, abort: o, stream: n };
      }
      async function nR(e) {
        let t = await navigator.storage.getDirectory(),
          i = await t.getDirectoryHandle(nE, { create: !0 }),
          s = `${crypto.randomUUID()}-${e.replaceAll(/[^a-zA-Z0-9._-]/g, "_").slice(-120)}`,
          n = await i.getFileHandle(s, { create: !0 }),
          o = !1;
        return {
          dispose: async () => {
            if (!o) {
              o = !0;
              try {
                await i.removeEntry(s);
              } catch (e) {
                if (!nO(e)) throw e;
              }
            }
          },
          handle: n,
          path: [nE, s],
        };
      }
      async function nk(e, t, i) {
        let s = await nR("source-video.media"),
          n = null,
          o = null;
        try {
          var r;
          let a,
            l = await fetch(e, { signal: t });
          if (!l.ok)
            throw Error(`Source video download failed with HTTP ${l.status}.`);
          if (!l.body)
            throw Error("Source video response has no readable body.");
          let d = (function (e) {
            let t = e.get("content-length");
            if (null === t) return null;
            let i = Number(t);
            return Number.isSafeInteger(i) && i > 0 ? i : null;
          })(l.headers);
          (await n_(d), t.throwIfAborted());
          let u =
            ((r = i),
            (e) => {
              let t =
                null === e ? null : Math.min(100, Math.max(0, Math.round(e)));
              t !== a && ((a = t), null == r || r(t));
            });
          (u(null === d ? null : 0),
            (n = await (0, w.n)(s, t)),
            (o = l.body.getReader()));
          let c = 0;
          for (;;) {
            t.throwIfAborted();
            let e = await o.read();
            if (e.done) break;
            let i = new Uint8Array(e.value.byteLength);
            (i.set(e.value),
              await n.write(i),
              (c += i.byteLength),
              null !== d && u(Math.min(99, (c / d) * 100)));
          }
          return (await n.close(), u(100), s);
        } catch (e) {
          throw (
            await (null == o ? void 0 : o.cancel(e).catch(() => void 0)),
            await (null == n ? void 0 : n.abort(e).catch(() => void 0)),
            await s.dispose().catch(() => void 0),
            e
          );
        } finally {
          null == o || o.releaseLock();
        }
      }
      async function n_(e) {
        let t;
        if (null === e || "function" != typeof navigator.storage.estimate)
          return;
        try {
          t = await navigator.storage.estimate();
        } catch {
          return;
        }
        let { quota: i, usage: s = 0 } = t;
        if (!Number.isFinite(i) || !Number.isFinite(s) || void 0 === i) return;
        let n = Math.max(0, i - s);
        if (!(e <= n))
          throw Error(
            `Source video requires ${e} bytes but only ${n} bytes of browser storage are available.`,
          );
      }
      function nO(e) {
        return e instanceof DOMException && "NotFoundError" === e.name;
      }
      var nP = i(91902),
        nD = i(66661);
      let nN = Object.freeze({ status: "inactive" }),
        nU = 0;
      class nT {
        async launchResultNode(e, t) {
          let i = (0, nP.Vu)(e.source.title),
            s = e.source.sourceUrl,
            n = await this.dependencies.resultNodeOwner.launch({
              mediaKind: "video",
              nodeTitle: i,
              origin: "video-trim",
              postEditCapability: "videoTrim",
              placement: this.resolveResultPlacement(e.source),
              sourceNodeId: e.source.nodeId,
              produce: async (e) => {
                let { reportProgress: n, signal: o } = e,
                  r = await this.dependencies.materializer.materialize(
                    { outputName: `${i}.mp4`, range: t, sourceUrl: s },
                    o,
                    (e) => {
                      let { progress: t } = e;
                      null !== t && n(t);
                    },
                  ),
                  a = this.readSubmitBlockReason();
                if (a)
                  throw (
                    await r.dispose(),
                    Error(
                      `Video trim materialization blocked before upload: ${a}.`,
                    )
                  );
                return { file: r.file, dispose: r.dispose };
              },
            });
          return this.isActiveSession(e.sessionId)
            ? n.ok
              ? (this.completeSuccessfulSession(), { nodeId: n.value.nodeId })
              : (this.dependencies.logger.error(
                  "video trim result node launch failed",
                  n.reason,
                  { nodeId: e.source.nodeId },
                ),
                this.restoreFocusPresentation(e),
                this.publishSubmission(e.sessionId, {
                  phase: "failed",
                  errorMessage: (0, nP.jx)(),
                }),
                null)
            : null;
        }
        resolveResultPlacement(e) {
          let t = this.dependencies.getObjectSnapshot(e.nodeId),
            i =
              t && Number.isFinite(t.layout.x)
                ? t.layout.x + t.layout.width
                : 0,
            s = t && Number.isFinite(t.layout.y) ? t.layout.y : 0,
            n = (0, l.Px)(e.width, e.height, "video");
          return { x: i + 80, y: s, width: n.width, height: n.height };
        }
        completeSuccessfulSession() {
          (this.cancelFocusPresentation(), (this.snapshot = nN), this.notify());
        }
        beginFocusPresentation(e) {
          ((this.focusPresentation = (0, a.FX)(this.dependencies.viewport)),
            this.focusPresentation.present((0, ir.XZ)(e)));
        }
        restoreFocusPresentation(e) {
          this.isActiveSession(e.sessionId) &&
            this.beginFocusPresentation(e.source.nodeId);
        }
        cancelFocusPresentation() {
          var e;
          (null == (e = this.focusPresentation) || e.cancel(),
            (this.focusPresentation = null));
        }
        publishSubmission(e, t) {
          this.isActiveSession(e) &&
            "active" === this.snapshot.status &&
            ((this.snapshot = Object.freeze({
              ...this.snapshot,
              submission: Object.freeze(t),
            })),
            this.notify());
        }
        isActiveSession(e) {
          return (
            "active" === this.snapshot.status && this.snapshot.sessionId === e
          );
        }
        readSubmitBlockReason() {
          let e = this.dependencies.resultNodeOwner.getState();
          return e.available ? null : e.reason;
        }
        publishFailedSubmission(e, t) {
          (this.publishSubmission(e, {
            phase: "failed",
            errorMessage: (0, nP.jx)(),
          }),
            this.dependencies.logger.warn(
              "video trim submit blocked before creating the result node",
              { reason: t },
            ));
        }
        notify() {
          let e =
            "active" === this.snapshot.status
              ? this.snapshot.source.nodeId
              : null;
          if (this.notifiedSourceNodeId !== e) {
            let t = this.notifiedSourceNodeId;
            if (((this.notifiedSourceNodeId = e), t))
              for (let e of this.sourceListeners.get(t) ?? []) e();
            if (e) for (let t of this.sourceListeners.get(e) ?? []) t();
          }
          for (let e of this.listeners) e();
        }
        constructor(e) {
          ((this.dependencies = e),
            (this.listeners = new Set()),
            (this.notifiedSourceNodeId = null),
            (this.focusPresentation = null),
            (this.pending = null),
            (this.snapshot = nN),
            (this.sourceListeners = new Map()),
            (this.close = () => {
              "inactive" !== this.snapshot.status &&
                (this.cancelFocusPresentation(),
                (this.pending = null),
                (this.snapshot = nN),
                this.notify());
            }),
            (this.getSnapshot = () => this.snapshot),
            (this.isSourceActive = (e) =>
              "active" === this.snapshot.status &&
              this.snapshot.source.nodeId === e),
            (this.open = (e) => {
              var t, i, s, n, o;
              let { nodeIds: r } = e;
              if (!(0, tr.F)(e, r, this.dependencies.getObjectSnapshot))
                return {
                  code: "SOURCE_CHANGED",
                  ok: !1,
                  reason: "commandFailed",
                };
              let a = this.readSubmitBlockReason();
              if (a) return { ok: !1, reason: a };
              let l = 1 === r.length ? r[0] : void 0;
              if (!l)
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let d = this.dependencies.getObjectSnapshot(l);
              if ((null == d ? void 0 : d.type) !== "video")
                return {
                  code: "UNSUPPORTED_SELECTION",
                  ok: !1,
                  reason: "commandFailed",
                };
              let u = (0, ir.V2)({
                nodeId: l,
                primaryResourceId: d.data.resourceId,
                resources: this.dependencies.getResourceBindings(l),
                title: d.data.title,
              });
              if (!(null == u ? void 0 : u.durationMs) || !u.sourceUrl)
                return {
                  code: "SOURCE_RESOURCE_UNAVAILABLE",
                  ok: !1,
                  reason: "commandFailed",
                };
              if (u.durationMs < 1e3)
                return {
                  code: "DURATION_TOO_SHORT",
                  ok: !1,
                  reason: "commandFailed",
                };
              this.close();
              let c = Object.freeze({
                ...u,
                durationMs: u.durationMs,
                sourceUrl: u.sourceUrl,
              });
              return (
                (this.snapshot = Object.freeze({
                  sessionId:
                    "function" ==
                    typeof (null == (o = globalThis.crypto)
                      ? void 0
                      : o.randomUUID)
                      ? globalThis.crypto.randomUUID()
                      : ((nU += 1), `video-trim-${nU}`),
                  source: c,
                  status: "active",
                  submission: Object.freeze({ phase: "idle" }),
                })),
                this.beginFocusPresentation(c.nodeId),
                null == (t = (i = this.dependencies).onOpened) || t.call(i),
                null == (s = (n = this.dependencies).reportPostEditAction) ||
                  s.call(n, c.nodeId, "click_cut"),
                this.notify(),
                { ok: !0, value: { sessionId: this.snapshot.sessionId } }
              );
            }),
            (this.submit = async (e) => {
              if (this.pending) return this.pending;
              if (
                "active" !== this.snapshot.status ||
                !(0, nD.xs)(e, this.snapshot.source.durationMs)
              )
                return null;
              let t = this.readSubmitBlockReason();
              if (t)
                return (
                  this.publishFailedSubmission(this.snapshot.sessionId, t),
                  null
                );
              let i = this.snapshot;
              (this.publishSubmission(i.sessionId, { phase: "submitting" }),
                this.cancelFocusPresentation());
              let s = this.launchResultNode(i, e)
                .catch(
                  (e) => (
                    this.dependencies.logger.error(
                      "video trim result node launch failed",
                      e,
                      { nodeId: i.source.nodeId },
                    ),
                    this.restoreFocusPresentation(i),
                    this.publishSubmission(i.sessionId, {
                      phase: "failed",
                      errorMessage: (0, nP.jx)(),
                    }),
                    null
                  ),
                )
                .finally(() => {
                  this.pending === s && (this.pending = null);
                });
              return ((this.pending = s), s);
            }),
            (this.subscribe = (e) => (
              this.listeners.add(e),
              () => this.listeners.delete(e)
            )),
            (this.subscribeSource = (e, t) => {
              let i = this.sourceListeners.get(e) ?? new Set();
              return (
                i.add(t),
                this.sourceListeners.set(e, i),
                () => {
                  (i.delete(t), 0 === i.size && this.sourceListeners.delete(e));
                }
              );
            }),
            (this.sourceVideoElements = e.sourceVideoElements ?? new nc()));
        }
      }
    },
    32312(e, t, i) {
      var s = i(80259);
      class n extends Error {
        constructor(e, t) {
          (super(t),
            (this.reason = e),
            (this.name = "VideoFrameMaterializationError"));
        }
      }
      class o {
        async materialize(e, t) {
          var i;
          if (
            (t.throwIfAborted(),
            !e.sourceUrl.trim() ||
              !Number.isFinite(e.targetTimeMs) ||
              e.targetTimeMs < 0)
          )
            throw new n(
              "sourceUnavailable",
              "Video frame source or target time is unavailable",
            );
          let s = await this.runExclusive(() => this.decodeFrame(e, t)),
            o = await ((i = s.canvas),
            new Promise((e, t) => {
              i.toBlob(
                (i) => {
                  i
                    ? e(i)
                    : t(
                        new n(
                          "encodeFailed",
                          "Video frame JPEG encoding failed",
                        ),
                      );
                },
                "image/jpeg",
                0.92,
              );
            }));
          return (
            t.throwIfAborted(),
            Object.freeze({
              actualMediaTimeMs: s.actualMediaTimeMs,
              file: new File([o], e.outputName, { type: "image/jpeg" }),
              format: "jpeg",
              height: s.height,
              width: s.width,
            })
          );
        }
        async decodeFrame(e, t) {
          let i = new AbortController(),
            o = (0, s.O)([t, i.signal]),
            l = setTimeout(
              () =>
                i.abort(
                  new n(
                    "timedOut",
                    "Video frame decoding exceeded its time budget",
                  ),
                ),
              15e3,
            );
          try {
            var d, u, c, h, p;
            let t = await this.acquireLoadedVideo(e.sourceUrl, o.signal),
              i = t.videoWidth,
              s = t.videoHeight;
            if (!a(i) || !a(s))
              throw (
                this.releaseDecodeElement(),
                new n("decodeFailed", "Video dimensions are unavailable")
              );
            await ((d = t),
            (u = e.targetTimeMs / 1e3),
            (c = o.signal),
            d.currentTime === u
              ? Promise.resolve()
              : r(d, "seeked", c, () => {
                  d.currentTime = u;
                }));
            let l = await ((h = t),
              (p = o.signal),
              new Promise((e, t) => {
                let i, s, n;
                if (p.aborted)
                  return void t(
                    p.reason ?? new DOMException("Aborted", "AbortError"),
                  );
                let o = !1,
                  r = () => {
                    (p.removeEventListener("abort", a),
                      null == i || i(),
                      (i = void 0),
                      void 0 !== s && (cancelAnimationFrame(s), (s = void 0)),
                      void 0 !== n && (clearTimeout(n), (n = void 0)));
                  },
                  a = () => {
                    o ||
                      ((o = !0),
                      r(),
                      t(p.reason ?? new DOMException("Aborted", "AbortError")));
                  };
                p.addEventListener("abort", a, { once: !0 });
                let l = (t) => {
                    o || ((o = !0), r(), e(1e3 * t));
                  },
                  d = (e) =>
                    !(h.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) &&
                    (l(e), !0);
                if ("function" == typeof h.requestVideoFrameCallback) {
                  let e = h.requestVideoFrameCallback((e, t) => l(t.mediaTime));
                  if (
                    (o ||
                      "function" != typeof h.cancelVideoFrameCallback ||
                      (i = () => h.cancelVideoFrameCallback(e)),
                    o)
                  )
                    return;
                }
                let u = () => {
                  let e = !0,
                    t = requestAnimationFrame(() => {
                      ((e = !1), (s = void 0), !o && (d(h.currentTime) || u()));
                    });
                  e && !o && (s = t);
                };
                if ((u(), o)) return;
                let c = () => {
                  n = setTimeout(() => {
                    ((n = void 0), !o && (d(h.currentTime) || c()));
                  }, 250);
                };
                c();
              })),
              { width: m, height: f } = (function (e, t, i) {
                if (!a(i ?? 0)) return { width: e, height: t };
                let s = Math.max(e, t);
                if (s <= i) return { width: e, height: t };
                let n = i / s;
                return {
                  width: Math.max(1, Math.round(e * n)),
                  height: Math.max(1, Math.round(t * n)),
                };
              })(i, s, e.maxEdgePx),
              b = document.createElement("canvas");
            ((b.width = m), (b.height = f));
            let g = b.getContext("2d");
            if (!g)
              throw new n("decodeFailed", "Canvas 2D context is unavailable");
            let v = () => {
              try {
                g.drawImage(t, 0, 0, m, f);
              } catch (e) {
                throw new n(
                  "corsDenied",
                  e instanceof Error
                    ? e.message
                    : "Video frame drawing was blocked",
                );
              }
            };
            for (
              v();
              !(function (e, t, i) {
                let s = [0, i >> 1, i - 1];
                try {
                  for (let i of [0, t >> 1, t - 1])
                    for (let t of s)
                      if (0 !== e.getImageData(i, t, 1, 1).data[3]) return !0;
                } catch (e) {
                  if (e instanceof DOMException && "SecurityError" === e.name)
                    return !0;
                  throw e;
                }
                return !1;
              })(g, m, f);
            )
              (await (function (e) {
                return new Promise((t, i) => {
                  let s, n;
                  if (e.aborted)
                    return void i(
                      e.reason ?? new DOMException("Aborted", "AbortError"),
                    );
                  let o = () => {
                    (e.removeEventListener("abort", r),
                      void 0 !== s && cancelAnimationFrame(s),
                      void 0 !== n && clearTimeout(n));
                  };
                  function r() {
                    (o(),
                      i(e.reason ?? new DOMException("Aborted", "AbortError")));
                  }
                  let a = () => {
                    (o(), t());
                  };
                  (e.addEventListener("abort", r, { once: !0 }),
                    (s = requestAnimationFrame(() => {
                      ((s = void 0), a());
                    })),
                    (n = setTimeout(() => {
                      ((n = void 0), a());
                    }, 250)));
                });
              })(o.signal),
                v());
            return { actualMediaTimeMs: l, canvas: b, height: f, width: m };
          } catch (t) {
            let e;
            throw (
              this.releaseDecodeElement(),
              ((e = i.signal.reason) instanceof n ? e : void 0) ?? t
            );
          } finally {
            (clearTimeout(l), o.dispose());
          }
        }
        runExclusive(e) {
          this.pendingDecodes += 1;
          let t = async () => {
              try {
                return await e();
              } finally {
                ((this.pendingDecodes -= 1),
                  0 === this.pendingDecodes &&
                    this.releaseRequested &&
                    this.releaseDecodeElement());
              }
            },
            i = this.decodeQueue.then(t, t);
          return (
            (this.decodeQueue = i.then(
              () => void 0,
              () => void 0,
            )),
            i
          );
        }
        dispose() {
          if (this.pendingDecodes > 0) {
            this.releaseRequested = !0;
            return;
          }
          this.releaseDecodeElement();
        }
        releaseDecodeElement() {
          this.releaseRequested = !1;
          let e = this.decodeElement;
          ((this.decodeElement = null),
            (this.loadedSourceUrl = null),
            e && (e.pause(), e.removeAttribute("src"), e.load()));
        }
        async acquireLoadedVideo(e, t) {
          let i = this.decodeElement;
          if (i && this.loadedSourceUrl === e) return i;
          this.releaseDecodeElement();
          let s = document.createElement("video");
          ((s.crossOrigin = "anonymous"),
            (s.muted = !0),
            (s.playsInline = !0),
            (s.preload = "metadata"),
            (s.src = e),
            (this.decodeElement = s),
            (this.loadedSourceUrl = e));
          try {
            await r(s, "loadeddata", t, () => s.load());
          } catch (e) {
            throw (this.releaseDecodeElement(), e);
          }
          return s;
        }
        constructor() {
          ((this.decodeElement = null),
            (this.loadedSourceUrl = null),
            (this.decodeQueue = Promise.resolve()),
            (this.pendingDecodes = 0),
            (this.releaseRequested = !1));
        }
      }
      function r(e, t, i, s) {
        return new Promise((o, r) => {
          if (i.aborted)
            return void r(
              i.reason ?? new DOMException("Aborted", "AbortError"),
            );
          let a = () => {
              (e.removeEventListener(t, l),
                e.removeEventListener("error", d),
                i.removeEventListener("abort", u));
            },
            l = () => {
              (a(), o());
            },
            d = () => {
              (a(), r(new n("decodeFailed", "Video frame decoding failed")));
            },
            u = () => {
              (a(), r(i.reason ?? new DOMException("Aborted", "AbortError")));
            };
          (e.addEventListener(t, l, { once: !0 }),
            e.addEventListener("error", d, { once: !0 }),
            i.addEventListener("abort", u, { once: !0 }));
          try {
            s();
          } catch (e) {
            (a(), r(e));
          }
        });
      }
      function a(e) {
        return Number.isFinite(e) && e > 0;
      }
      i.d(t, { O: () => o, U: () => n });
    },
    92871(e, t, i) {
      function s(e) {
        return (
          2e3 >=
          e.reduce(
            (e, t) => e + ("text" === t.type ? Array.from(t.text).length : 4),
            0,
          )
        );
      }
      i.d(t, { b: () => s });
    },
    63332(e, t, i) {
      var s = i(69792),
        n = i(38687),
        o = i(24281);
      let r = Object.freeze({ audio: 10, image: 30, video: 9 }),
        a = Object.freeze({ audio: 0, image: 0, video: 0 }),
        l = Object.freeze([2, 3, 4]),
        d = ["image", "video", "audio"],
        u = Object.freeze({
          acceptedTypes: l,
          maxTotalCount: 50,
          maxTotalAudioDurationSeconds: 30.2,
          maxTotalVideoDurationSeconds: 30.2,
          perType: Object.freeze({
            2: Object.freeze({
              maxCount: r.image,
              maxFileSizeBytes: s.Y9,
              maxHeight: 6e3,
              maxWidth: 6e3,
              minHeight: 300,
              minWidth: 300,
            }),
            3: Object.freeze({
              maxCount: r.video,
              maxDurationSeconds: 30.2,
              maxFileSizeBytes: s.e9,
              maxHeight: 6e3,
              maxWidth: 6e3,
              minHeight: 300,
              minWidth: 300,
              minDurationSeconds: 1.8,
            }),
            4: Object.freeze({
              maxCount: r.audio,
              maxDurationSeconds: 30.2,
              maxFileSizeBytes: s.vS,
              minDurationSeconds: 1.8,
            }),
          }),
          requiredAnyOf: Object.freeze([]),
        });
      function c(e) {
        let t = e ?? u;
        return {
          ...t,
          acceptedTypes: l,
          maxTotalCount: 50,
          maxTotalAudioDurationSeconds: 30.2,
          maxTotalVideoDurationSeconds: 30.2,
          perType: {
            ...t.perType,
            2: {
              ...t.perType[2],
              maxFileSizeBytes: s.Y9,
              maxHeight: 6e3,
              maxWidth: 6e3,
              minHeight: 300,
              minWidth: 300,
            },
            3: {
              ...t.perType[3],
              maxDurationSeconds: 30.2,
              maxFileSizeBytes: s.e9,
              maxHeight: 6e3,
              maxWidth: 6e3,
              minHeight: 300,
              minWidth: 300,
              minDurationSeconds: 1.8,
            },
            4: {
              ...t.perType[4],
              maxDurationSeconds: 30.2,
              maxFileSizeBytes: s.vS,
              minDurationSeconds: 1.8,
            },
          },
        };
      }
      function h(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          i = (0, o.y$)([...e.map(b), ...t]),
          s = { ...a };
        for (let e of i) {
          var n;
          let t =
            2 === (n = e.type)
              ? "image"
              : 3 === n
                ? "video"
                : 4 === n
                  ? "audio"
                  : void 0;
          t && (s[t] += 1);
        }
        return s;
      }
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          i = h(e, t);
        return d.every((e) => i[e] >= r[e]);
      }
      function m(e, t, i) {
        var s, o, r;
        let a,
          l,
          d,
          c = [...e.map(b), ...t];
        i && c.push(i);
        let h = (0, n.o)({
          constraint:
            ((a = null == (s = u.perType[2]) ? void 0 : s.maxCount),
            (l = null == (o = u.perType[3]) ? void 0 : o.maxCount),
            (d = null == (r = u.perType[4]) ? void 0 : r.maxCount),
            {
              ...u,
              maxTotalCount: 49,
              maxTotalAudioDurationSeconds: void 0,
              maxTotalVideoDurationSeconds: void 0,
              perType: {
                2: void 0 === a ? {} : { maxCount: a },
                3: void 0 === l ? {} : { maxCount: l },
                4: void 0 === d ? {} : { maxCount: d },
              },
            }),
          materials: c,
        }).referenceSet;
        return h.allowed ? null : h.violation;
      }
      function f(e) {
        var t, i, s;
        let o = [
            ...e.references.map(b),
            ...e.subjectMaterialFacts,
            e.candidate,
          ],
          r = (0, n.o)({
            constraint: {
              ...(t = e.runtimeConstraint ?? u),
              maxTotalAudioDurationSeconds: void 0,
              maxTotalCount: (function (e) {
                if (void 0 !== e) return Math.max(e - 1, 0);
              })(t.maxTotalCount),
              maxTotalVideoDurationSeconds: void 0,
            },
            materials: o,
          }).referenceSet;
        if (!r.allowed) return r.violation;
        let a = (0, n.o)({
          constraint: {
            acceptedTypes: (i = e.runtimeConstraint ?? u).acceptedTypes,
            maxTotalAudioDurationSeconds: i.maxTotalAudioDurationSeconds,
            maxTotalVideoDurationSeconds: i.maxTotalVideoDurationSeconds,
            perType: {},
            requiredAnyOf: [],
          },
          materials: [
            {
              durationSeconds: (s = e.source).durationMs / 1e3,
              height: s.height,
              sourceId: `video-edit-source:${s.resourceId}`,
              type: 3,
              width: s.width,
            },
            ...o,
          ],
        }).referenceSet;
        return a.allowed ? null : a.violation;
      }
      function b(e, t) {
        var i;
        let s = {
          sourceId: `video-edit-reference:${e.id}`,
          type: "image" === (i = e.type) ? 2 : "video" === i ? 3 : 4,
        };
        return (
          void 0 !== e.durationMs && (s.durationSeconds = e.durationMs / 1e3),
          void 0 !== t && (s.fileSizeBytes = t),
          void 0 !== e.height && (s.height = e.height),
          void 0 !== e.width && (s.width = e.width),
          s
        );
      }
      i.d(
        t,
        {
          MV: () => p,
          SN: () => m,
          aG: () => f,
          aJ: () => h,
          sZ: () => c,
          vc: () => b,
        },
        { Eu: a, KK: r },
      );
    },
    72390(e, t, i) {
      var s = i(38687);
      function n(e) {
        let { constraint: t, range: i } = e,
          s = o({ ...e, references: [] });
        if (
          !t ||
          void 0 === t.maxTotalCount ||
          "available" !== s.status ||
          !s.assessment.referenceSet.allowed
        )
          return;
        let n = t.perType[3];
        return {
          ...t,
          maxTotalCount: Math.max(0, t.maxTotalCount - 1),
          maxTotalVideoDurationSeconds:
            void 0 === t.maxTotalVideoDurationSeconds
              ? void 0
              : Math.max(
                  0,
                  t.maxTotalVideoDurationSeconds - (i.endMs - i.startMs) / 1e3,
                ),
          perType: {
            ...t.perType,
            3: {
              ...n,
              maxCount:
                (null == n ? void 0 : n.maxCount) === void 0
                  ? void 0
                  : Math.max(0, n.maxCount - 1),
            },
          },
          requiredAnyOf: t.requiredAnyOf.includes(3) ? [] : t.requiredAnyOf,
        };
      }
      function o(e) {
        var t, i, n, o;
        let { constraint: r, range: a, references: l, source: d } = e;
        if (!r)
          return { status: "unavailable", reason: "configurationUnavailable" };
        if (
          !Number.isFinite(d.durationMs) ||
          !Number.isFinite(a.startMs) ||
          !Number.isFinite(a.endMs) ||
          a.startMs < 0 ||
          a.startMs >= a.endMs ||
          a.endMs > d.durationMs
        )
          return { status: "unavailable", reason: "invalidRange" };
        let u = (0, s.o)({
            constraint: {
              ...(t = r),
              perType: {
                2: {
                  maxCount: null == (i = t.perType[2]) ? void 0 : i.maxCount,
                },
                3: {
                  maxCount: null == (n = t.perType[3]) ? void 0 : n.maxCount,
                },
                4: {
                  maxCount: null == (o = t.perType[4]) ? void 0 : o.maxCount,
                },
              },
            },
            materials: [
              {
                sourceId: "source",
                type: 3,
                durationSeconds: (a.endMs - a.startMs) / 1e3,
              },
              ...l.map((e) => ({ ...e, sourceId: `reference:${e.sourceId}` })),
            ],
          }),
          c = (0, s.o)({
            constraint: { ...r, requiredAnyOf: [] },
            materials: l,
          });
        return {
          status: "available",
          assessment: {
            attachment: u.attachment.allowed ? c.attachment : u.attachment,
            referenceSet: u.referenceSet.allowed
              ? c.referenceSet
              : u.referenceSet,
            submission: u.submission.allowed ? c.submission : u.submission,
            materialWarnings: c.materialWarnings,
          },
        };
      }
      i.d(t, { Y: () => n, u: () => o });
    },
    4030(e, t, i) {
      var s = i(94139),
        n = i(40627);
      function o(e, t) {
        if (!t) return (0, n.PE)(e);
        let i = a(e, (0, s.Qt)(t));
        return "selected" === i.status ? i.url : void 0;
      }
      function r(e) {
        let t = a(e, "original");
        return "selected" === t.status ? t.url : void 0;
      }
      function a(e, t) {
        return void 0 === t ? (0, n.yw)(e, "full") : (0, n.A0)(e, t);
      }
      function l(e, t) {
        if (void 0 === t) {
          let t = (0, n.yw)(e, "full");
          return "selected" === t.status
            ? [{ source: t.source, url: t.url }]
            : [];
        }
        return (0, n.wA)(e, t);
      }
      function d(e) {
        return (0, n.yw)(e, "compact");
      }
      function u(e, t) {
        let i = a(e, t);
        return "selected" !== i.status ||
          "smallest_variant" === i.reason ||
          "largest_variant_fallback" === i.reason
          ? null
          : i.url;
      }
      function c(e) {
        return (0, n.DX)(e, 1 / 0);
      }
      i.d(t, {
        Ho: () => d,
        RB: () => o,
        U3: () => a,
        gn: () => r,
        l8: () => u,
        qq: () => l,
        xw: () => c,
      });
    },
    11456(e, t, i) {
      var s = i(78425),
        n = i(96783);
      function o() {
        return s.Ay.t("octo_video_sample_badge_label", {}, "Sample");
      }
      function r() {
        return s.Ay.t("octo_video_final_badge_label", {}, "Final");
      }
      function a() {
        return s.Ay.t(
          "octo_video_sample_promotion_sample_mode_label",
          {},
          "Edit sample 480P",
        );
      }
      function l() {
        return s.Ay.t(
          "octo_video_sample_promotion_sample_mode_action_label",
          {},
          "Edit sample",
        );
      }
      function d() {
        return s.Ay.t(
          "octo_video_sample_promotion_final_mode_label",
          {},
          "Generate final video 1080P",
        );
      }
      function u() {
        return s.Ay.t(
          "octo_video_sample_promotion_sample_mode_generate_final",
          {},
          "Full quality",
        );
      }
      function c() {
        return s.Ay.t(
          "octo_video_sample_promotion_action_group_label",
          {},
          "Sample and final video actions",
        );
      }
      function h() {
        return s.Ay.t(
          "web_generate_final_video_tip",
          {},
          "Upgrade this draft to a high-resolution final video without changing its content.",
        );
      }
      function p() {
        return s.Ay.t(
          "octo_video_sample_promotion_panel_label",
          {},
          "Final video settings",
        );
      }
      function m() {
        return s.Ay.t(
          "web_select_final_video_resolution",
          {},
          "Choose final video resolution",
        );
      }
      function f() {
        return s.Ay.t(
          "web_select_final_video_resolution_tip",
          {},
          "The final video will retain the content of your draft.",
        );
      }
      function b() {
        return s.Ay.t(
          "octo_video_sample_generation_toast_started",
          {},
          "Sample generation submitted. Samples are stored for up to 7 days and cannot be used to generate final videos after expiry.",
        );
      }
      function g(e, t) {
        if (void 0 === e)
          return s.Ay.t(
            "seedance_25_draft_gen_tooltips",
            {},
            "Samples are stored for up to 7 days and cannot be used to generate final videos after expiry.",
          );
        let i =
            "u" < typeof document
              ? void 0
              : document.documentElement.lang || void 0,
          n = new Intl.DateTimeFormat(i, {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
          }),
          o = n.format(e),
          r = n.resolvedOptions().locale.startsWith("zh")
            ? o
                .replace(/([\u6708\u65e5])/g, " $1 ")
                .replace(/\s+/g, " ")
                .trim()
            : o;
        return t
          ? s.Ay.t(
              "octo_video_sample_promotion_expired_at_notice",
              { time: r },
              "Samples are stored for up to 7 days. This sample expired on {time}.",
            )
          : s.Ay.t(
              "octo_video_sample_promotion_expires_at_notice",
              { time: r },
              "Samples are stored for up to 7 days. Generate a final video before {time}.",
            );
      }
      function v(e) {
        return e.toUpperCase();
      }
      function I(e) {
        return s.Ay.t(
          "octo_video_sample_promotion_resolution_a11y_label",
          { value: e.toUpperCase() },
          "{value} resolution",
        );
      }
      function S() {
        return s.Ay.t(
          "octo_video_sample_promotion_unavailable_resolution_reason",
          {},
          "Coming soon",
        );
      }
      function y() {
        return (0, n.bN)();
      }
      function E() {
        return s.Ay.t("web_new_task_is_generating", {}, "Generating...");
      }
      function w() {
        return s.Ay.t(
          "octo_video_sample_promotion_expired_message",
          {},
          "This sample has expired. Generate a new sample and try again.",
        );
      }
      function A() {
        return s.Ay.t(
          "octo_video_sample_promotion_failed_message",
          {},
          "Could not generate the final video. Try again.",
        );
      }
      function C() {
        return s.Ay.t("sd25_draft_resolution_label", {}, "Sample 480P");
      }
      function R() {
        return s.Ay.t(
          "sd25_draft_resolution_tip",
          {},
          "Generate a 480P draft first. Once confirmed, upgrade it to a high-resolution final video.",
        );
      }
      i.d(t, {
        $N: () => v,
        Bm: () => A,
        Db: () => m,
        Em: () => g,
        Gl: () => l,
        KE: () => f,
        NH: () => R,
        Wy: () => a,
        XA: () => p,
        ZF: () => E,
        _P: () => u,
        dz: () => w,
        f9: () => b,
        hk: () => I,
        lh: () => r,
        rf: () => o,
        s6: () => c,
        sw: () => C,
        uL: () => y,
        uw: () => d,
        vB: () => S,
        y5: () => h,
      });
    },
  },
]);
