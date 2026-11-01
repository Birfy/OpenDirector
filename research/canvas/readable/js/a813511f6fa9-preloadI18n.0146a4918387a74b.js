(!(function () {
  var e = "OCTO_DOMESTIC_ACCENT_FONTS";
  if (!document.getElementById(e)) {
    for (
      var r =
          "https://lf6-lv-buz." +
          String.fromCharCode(
            118,
            108,
            97,
            98,
            115,
            116,
            97,
            116,
            105,
            99,
            46,
            99,
            111,
            109,
          ) +
          "/obj/image-lvweb-buz/common/font/",
        t = [
          ["Montserrat", "Montserrat-Regular.20250416.subset.ttf", "400"],
          ["Montserrat", "Montserrat-Medium.20250416.subset.ttf", "500"],
          ["Montserrat", "Montserrat-SemiBold.20250416.subset.ttf", "600"],
          [
            '"Founder Yashi Black"',
            "FZYASHJW-Regular.20260902.subset.woff",
            "400",
          ],
          [
            '"Founder Yashi Black"',
            "FZYASHJW-Demibold.20260902.subset.woff",
            "600",
          ],
        ],
        n = "",
        o = 0;
      o < t.length;
      o += 1
    )
      n +=
        "@font-face{font-family:" +
        t[o][0] +
        ';src:url("' +
        r +
        t[o][1] +
        '");font-display:swap;font-style:normal;font-weight:' +
        t[o][2] +
        ";}";
    var i = document.createElement("style");
    ((i.id = e), (i.textContent = n));
    var a = document.currentScript;
    (a && a.nonce && (i.nonce = a.nonce), document.head.append(i));
  }
})(),
  (function () {
    var e = "DREAMINA_MAIN_FRAME_2026_THEME";
    function r(e) {
      return "light" === e || "dark" === e ? e : void 0;
    }
    var t =
      (function () {
        try {
          return r(window.localStorage && window.localStorage.getItem(e));
        } catch (e) {
          return;
        }
      })() ||
      (function () {
        try {
          for (
            var t = e + "=", n = (document.cookie || "").split(";"), o = 0;
            o < n.length;
            o += 1
          ) {
            var i = n[o].trim();
            if (0 === i.indexOf(t))
              return r(decodeURIComponent(i.slice(t.length)));
          }
        } catch (e) {}
      })() ||
      "dark";
    (document.documentElement.setAttribute("data-dreamina-theme", t),
      document.documentElement.setAttribute(
        "data-octo-surface",
        "light" === t ? "light" : "workbench",
      ));
  })());
try {
  !(function () {
    var e,
      r,
      t,
      n,
      o,
      i,
      a = "__octoInitialResourceBatchPrefetch",
      c =
        "https://jimeng." +
        String.fromCharCode(
          106,
          105,
          97,
          110,
          121,
          105,
          110,
          103,
          46,
          99,
          111,
          109,
        );
    function s(e) {
      return null !== e && "object" == typeof e && !Array.isArray(e);
    }
    function d(e, r, t) {
      if ("string" == typeof t) {
        var n = t.trim();
        !n || r.has(n) || (r.add(n), e.push(n));
      }
    }
    function u(e, r, t) {
      s(t) && "resource_snapshot" === t.refType && d(e, r, t.resourceId);
    }
    function f(e) {
      var r = "".trim();
      return (
        r || (r = (e.get("x-tt-env") || "").trim()),
        /^(?:ppe|boe)_[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/.test(r) ? r : ""
      );
    }
    if (
      window[a] ||
      "function" != typeof window.fetch ||
      "function" != typeof AbortController
    )
      return;
    var l = (function () {
      var e = /^\/ai-tool\/ai-canvas\/([^/]+)$/.exec(window.location.pathname);
      if (!e || !e[1] || "project-copy" === e[1]) return "";
      try {
        return decodeURIComponent(e[1]).trim();
      } catch (e) {
        return "";
      }
    })();
    if (!l) return;
    try {
      e = new URLSearchParams(window.location.search);
    } catch (e) {
      return;
    }
    if (
      (function (e) {
        if ("readonly" === e.get("support")) return !0;
        try {
          return new URLSearchParams(
            window.location.hash.replace(/^#/, ""),
          ).has("octo_readonly_token");
        } catch (e) {
          return !0;
        }
      })(e) ||
      f(e) ||
      /(?:^|;\s*)env=1(?:;|$)/.test(document.cookie || "")
    )
      return;
    var p =
      window.localStorage &&
      window.localStorage.getItem("dreamina_current_team_id");
    if (!("string" == typeof p && /^[1-9][0-9]*$/.test(p.trim()))) {
      var m = document.getElementById("__GTW_AI_CANVAS_DRAFT_DATA__");
      if (m && m.textContent) {
        try {
          if (
            ((n = JSON.parse(m.textContent)),
            !s(n) ||
              !(o = (function (e, r, t) {
                var n,
                  o = r.get("scene"),
                  i =
                    "review" === o ||
                    ("readonly" === o && "false" !== r.get("public")) ||
                    "true" === r.get("public"),
                  a = r.getAll("draftVersion");
                if (
                  !(a.length > 1) &&
                  (!i || !(a.length > 0)) &&
                  (1 !== a.length ||
                    (/^(0|[1-9][0-9]*)$/.test(a[0]) &&
                      Number.isSafeInteger((n = Number(a[0])))))
                ) {
                  var c = e.__aiCanvasDraftRequest;
                  if (void 0 === c) {
                    if (i || void 0 !== n) return;
                    return {
                      project_id: t,
                      draft_version: 0,
                      need_draft_json: !0,
                    };
                  }
                  if (
                    s(c) &&
                    1 === c.schemaVersion &&
                    "POST" === c.method &&
                    "/octo_api/v1/project/draft/get" === c.path
                  ) {
                    var d = c.body;
                    if (
                      s(d) &&
                      d.project_id === t &&
                      !0 === d.need_draft_json &&
                      d.public === (!!i || void 0) &&
                      d.exact_draft_version === (void 0 !== n || void 0) &&
                      d.draft_version === (void 0 === n ? 0 : n)
                    )
                      return d;
                  }
                }
              })(n, e, l)) ||
              ((r = (function (e) {
                if (s(e)) {
                  var r = e.__aiCanvasDraftBffResponse;
                  return void 0 !== r &&
                    s(r) &&
                    "string" == typeof r.ret &&
                    "string" == typeof r.errmsg &&
                    "string" == typeof r.systime &&
                    "string" == typeof r.logid
                    ? "0" === r.ret && s(r.data)
                      ? r.data
                      : void 0
                    : e.__aiCanvasDraftAndResourcesResult;
                }
              })(n)),
              !s(r) ||
                !s(r.project) ||
                r.project.project_id !== l ||
                !Number.isSafeInteger(r.draft_version) ||
                (!0 === o.exact_draft_version &&
                  r.draft_version !== o.draft_version) ||
                "string" != typeof r.data_version ||
                !r.data_version.trim() ||
                "string" != typeof r.draft_json))
          )
            return;
          t = JSON.parse(r.draft_json);
        } catch (e) {
          return;
        }
        var v = (function (e) {
          if (!s(e) || !Array.isArray(e.nodes)) return [];
          var r,
            t,
            n,
            o,
            i,
            a,
            c,
            f,
            l = [],
            p = new Set();
          for (r = 0; r < e.nodes.length; r += 1)
            if (s((i = e.nodes[r])) && s(i.data)) {
              if (
                ((a = i.data),
                "image" === i.type ||
                  "video" === i.type ||
                  "audio" === i.type ||
                  "file" === i.type)
              ) {
                (!(function (e, r, t) {
                  var n, o, i;
                  if (Array.isArray(t)) {
                    for (n = 0; n < t.length; n += 1)
                      if (s((i = t[n])) && Array.isArray(i.resourceIds))
                        for (o = 0; o < i.resourceIds.length; o += 1)
                          d(e, r, i.resourceIds[o]);
                  }
                })(l, p, a.resourceBatches),
                  d(l, p, a.resourceId));
                continue;
              }
              if ("timeline" === i.type && Array.isArray(a.tracks)) {
                for (t = 0; t < a.tracks.length; t += 1)
                  if (s((c = a.tracks[t])) && Array.isArray(c.clips))
                    for (n = 0; n < c.clips.length; n += 1)
                      s((f = c.clips[n])) &&
                        s(f.source) &&
                        "resource" === f.source.kind &&
                        d(l, p, f.source.resourceId);
                continue;
              }
              if ("subject" === i.type) {
                if ((u(l, p, a.main), Array.isArray(a.auxiliaries)))
                  for (o = 0; o < a.auxiliaries.length; o += 1)
                    u(l, p, a.auxiliaries[o]);
                u(l, p, a.voice);
              }
            }
          return l;
        })(t);
        if (0 !== v.length) {
          var _ = { "content-type": "application/json", appid: String(513695) },
            g = "string" == typeof window.__lng ? window.__lng.trim() : "";
          (!g &&
            document.documentElement &&
            (g = (document.documentElement.lang || "").trim()),
            g && (_.lan = g));
          var h = f(e);
          h &&
            ((_["x-tt-env"] = h),
            (_[0 === h.indexOf("ppe_") ? "x-use-ppe" : "x-use-boe"] = "1"));
          var y = [],
            w = [],
            I = 0,
            b = !1,
            A = Math.ceil(v.length / 100);
          window.addEventListener("pagehide", k, { once: !0 });
          for (var S = 0; S < v.length; S += 100)
            y.push(
              (function (e) {
                var r,
                  t,
                  n,
                  s = new AbortController(),
                  d = !1,
                  u = !1,
                  f = !1,
                  p = new Promise(function (e) {
                    t = e;
                  }),
                  m = Object.assign({}, _);
                function v() {
                  d ||
                    ((d = !0),
                    h(),
                    0 == (A -= 1) &&
                      (window.removeEventListener("pagehide", k),
                      window[a] === i && delete window[a]));
                }
                function g() {
                  (s.abort(),
                    y({ status: "failure", error: s.signal.reason }),
                    v());
                }
                function h() {
                  void 0 !== r && (window.clearTimeout(r), (r = void 0));
                }
                function y(e) {
                  f || ((f = !0), u && (I -= 1), h(), t(e), M());
                }
                window.crypto &&
                  "function" == typeof window.crypto.randomUUID &&
                  ((n = [
                    "canvas-resource-batch-",
                    window.crypto.randomUUID(),
                  ].join("")),
                  (m["x-octo-trace-id"] = n));
                var b = {
                  resourceIds: e,
                  traceId: n,
                  result: p,
                  abort: g,
                  release: v,
                  start: function () {
                    var t;
                    if (!u && !f && !d) {
                      ((u = !0), (I += 1), (r = window.setTimeout(g, 3e3)));
                      try {
                        t = window.fetch(
                          new URL(
                            "/octo_api/v1/resource/batch_get",
                            c,
                          ).toString(),
                          {
                            method: "POST",
                            credentials: "include",
                            headers: m,
                            body: JSON.stringify(
                              Object.assign(
                                { project_id: l, resource_ids: e },
                                !0 === o.public ? { public: !0 } : {},
                              ),
                            ),
                            signal: s.signal,
                          },
                        );
                      } catch (e) {
                        t = Promise.reject(e);
                      }
                      Promise.resolve(t)
                        .then(function (e) {
                          return e
                            .clone()
                            .arrayBuffer()
                            .then(function () {
                              return e;
                            });
                        })
                        .then(
                          function (e) {
                            y({ status: "response", response: e });
                          },
                          function (e) {
                            (y({ status: "failure", error: e }), v());
                          },
                        );
                    }
                  },
                  prioritize: function () {
                    var e = w.indexOf(b);
                    e <= 0 || (w.splice(e, 1), w.unshift(b));
                  },
                };
                return b;
              })(v.slice(S, S + 100)),
            );
          ((i = {
            version: 4,
            draftRequest: o,
            projectId: l,
            draftVersion: r.draft_version,
            dataVersion: r.data_version,
            batches: y,
            abort: k,
          }),
            (window[a] = i),
            (w = y.slice()));
          for (var j = new Set(), E = 0; E < t.nodes.length; E += 1) {
            var C = t.nodes[E];
            if (s(C) && s(C.data)) {
              if ("string" == typeof C.data.resourceId && C.data.resourceId) {
                j.add(C.data.resourceId);
                continue;
              }
              if (
                "image" === C.type ||
                "video" === C.type ||
                "audio" === C.type ||
                "file" === C.type
              ) {
                var R = C.data.resourceBatches;
                if (Array.isArray(R))
                  for (var O = 0; O < R.length; O += 1) {
                    var x = R[O];
                    if (
                      s(x) &&
                      Array.isArray(x.resourceIds) &&
                      0 !== x.resourceIds.length
                    ) {
                      for (var N = 0; N < x.resourceIds.length; N += 1) {
                        var T = x.resourceIds[N];
                        "string" == typeof T && T && j.add(T);
                      }
                      break;
                    }
                  }
              }
            }
          }
          (w.sort(function (e, r) {
            return (
              Number(
                r.resourceIds.some(function (e) {
                  return j.has(e);
                }),
              ) -
              Number(
                e.resourceIds.some(function (e) {
                  return j.has(e);
                }),
              )
            );
          }),
            M());
        }
      }
    }
    function k() {
      b = !0;
      for (var e = 0; e < y.length; e += 1) y[e].abort();
    }
    function M() {
      for (; !b && I < 4 && w.length > 0; ) w.shift().start();
    }
  })();
} catch (e) {}
!(function () {
  var e = (function () {
      var e = { url: window.__injectedI18nUrl },
        r = document.getElementById("__GTW_PRELOAD_I18N__");
      if (!r || !r.textContent) return e;
      try {
        var t = JSON.parse(r.textContent);
        return { url: e.url || t.__injectedI18nUrl };
      } catch (r) {
        return e;
      }
    })(),
    r = "string" == typeof e.url ? e.url.trim() : "";
  if (r) {
    var t,
      n,
      o = (n = /\/([^/?]+)\.[a-f0-9]{16}\.js(?:[?#]|$)/i.exec(r)) ? n[1] : "en";
    ((window.__injectedI18nUrl = r),
      (window.__lng = o),
      (document.documentElement.lang = o));
    var i = !1;
    ((window.pI18nResult = new Promise(function (e) {
      t = function () {
        i || ((i = !0), e());
      };
    })),
      (window.pI18n = t),
      (window.pI18nReject = t));
    var a = document.createElement("script");
    ((a.id = "OCTO_I18N_PRELOAD_RESOURCE"),
      (a.async = !0),
      (a.crossOrigin = "anonymous"),
      (a.fetchPriority = "high"),
      (a.src = r),
      a.addEventListener("load", t, { once: !0 }),
      a.addEventListener("error", t, { once: !0 }));
    var c = document.currentScript;
    (c && c.nonce && (a.nonce = c.nonce),
      document.head.append(a),
      window.setTimeout(t, 3e3));
  }
})();
