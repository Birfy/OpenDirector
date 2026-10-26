import "./module-B_2_5.js";
import "./module-n_2_5.js";
import s from "./module-LWt.js";
import { S4 } from "./module-SmR.js";
import { Yk } from "./module-Ex_20.js";
import { a } from "./module-l_2_4.js";
import h from "./module-jN_3.js";
let n;
let o;
function v(t) {
  return typeof t === "object" && t !== null;
}
const p = [
  "agentic",
  "image",
  "video",
  "music",
  "audio",
  "digitalHuman",
  "actionCopy",
];
const d = [
  "agentic",
  "video",
  "image",
  "music",
  "audio",
  "digitalHuman",
  "actionCopy",
];
function g(t) {
  if (t === "v4") {
    return d;
  }
  return p;
}
function y(t) {
  return true;
}
const m = [
  /^(\/ai-tool\/work-detail)(?:\/(.*))?$/,
  /^(\/ai-tool\/personal)(?:\/(.*))?$/,
];
function b(t) {
  try {
    const r = new URL(t).pathname.replace(/\/+$/, "");
    for (const e of m) {
      const n = r.match(e);
      if (n) {
        if (n[2]) {
          return "".concat(n[1], "/:id");
        } else {
          return n[1];
        }
      }
    }
    return r;
  } catch (error) {
    console.warn("parse pid failed:", error);
    return t;
  }
}
const w = [
  {
    regexp: /^\/ai-tool\/novel\/?$/,
    rootSelector: "#dreamina-ui-configuration-content-wrapper > :first-child",
    threshold: 2,
    partialShot: false,
  },
  {
    regexp: /^(\/ai-tool\/home)(?:\/)?$/,
    rootSelector: "#csr-root",
    threshold: 4,
    partialShot: false,
  },
  {
    regexp: /^(\/ai-tool\/asset)(?:\/)?$/,
    rootSelector: "#csr-root",
    threshold: 2,
    partialShot: false,
  },
  {
    regexp: /^(\/ai-tool\/generate)(?:\/)?$/,
    rootSelector: "#csr-root",
    threshold: 2,
    partialShot: false,
  },
  {
    regexp: /^(\/ai-tool\/login)(?:\/)?$/,
    rootSelector: `#csr-root .login-main`,
    threshold: 3,
    partialShot: false,
  },
  {
    regexp: /^(\/ai-tool\/work-detail)(?:\/(.*))?$/,
    rootSelector: `#csr-root .detail-main`,
    threshold: 3.5,
    partialShot: false,
  },
  {
    regexp: /^(\/ai-tool\/personal)(?:\/(.*))?$/,
    rootSelector: "#csr-root .masonry-layout",
    threshold: 4,
    partialShot: false,
  },
];
function A(t) {
  if (!t) {
    return "";
  }
  let r;
  const e = t.id ? "#".concat(t.id) : "";
  const n = ((r = t.className) == null ? undefined : r.trim)
    ? ".".concat(t.className.trim().replace(/\s+/g, "."))
    : "";
  return (t.tagName || "unknown").toLowerCase() + e + n;
}
let env = "production";
try {
  if (
    /^\w+\.web\.bytedance\.net$/.test(window.location.host) ||
    /^\S+?boe\.bytedance\.net$/.test(window.location.host) ||
    window.location.host.endsWith(".boe.goofy.app") ||
    window.location.host.includes("localhost") ||
    window.location.hostname === "127.0.0.1" ||
    /^[\d.]+$/.test(window.location.hostname)
  ) {
    env = "test";
  } else if (/^\S+?\.bytedance\.net$/.test(window.location.host)) {
    env = "test";
  }
} catch (t) {}
const sessionId = window.__agw_log_id || undefined;
function E(t, r) {
  try {
    const e = JSON.parse(t != null ? t : "{}");
    if (
      e.ret !== "0" &&
      e.status_code !== 0 &&
      e.code !== 0 &&
      e.e !== 0 &&
      (!e.BaseResp || e.BaseResp.StatusCode !== 0) &&
      e.message !== "success"
    ) {
      let n;
      const logId = e.log_id || "";
      const msg = (e.message || e.errmsg || "").slice(0, 50);
      return {
        ret:
          e.ret ||
          ((n = e.BaseResp) == null ? undefined : n.StatusCode) ||
          e.status_code ||
          e.code ||
          e.e ||
          "",
        msg,
        logId,
      };
    }
  } catch (t) {}
  return false;
}
let O = null;
if (window.location.pathname.replace(/\/+$/, "") === "/ai-tool/generate") {
  let R;
  const M = ((t) => {
    if (!v(t)) {
      return false;
    }
    const t_scene_config = t.scene_config;
    if (!v(t_scene_config)) {
      return false;
    }
    const r_creation_agent_v31 = t_scene_config.creation_agent_v31;
    return (
      v(r_creation_agent_v31) &&
      r_creation_agent_v31.scene === "creation_agent_v33"
    );
  })(window._libra_server_abtest);
  const I = ((t) => {
    if (!v(t)) {
      return false;
    }
    const t_dreamina_inspiration_button = t.dreamina_inspiration_button;
    return (
      !!v(t_dreamina_inspiration_button) &&
      typeof t_dreamina_inspiration_button.enable === "boolean" &&
      !t_dreamina_inspiration_button.enable
    );
  })(window._libra_server_abtest);
  document.documentElement.setAttribute(
    "data-generate-inspiration-search-offline",
    I ? "true" : "false",
  );
  document.documentElement.setAttribute(
    "data-generate-agentic-advanced-layout",
    M ? "true" : "false",
  );
  if ((R = document.querySelector(".dreamina-side-menu-container")) != null) {
    R.classList.toggle("dreamina-side-menu-conversation-expanded", M);
  }
  const _ = document.querySelector("#ssr-generate-new-conversation-title");
  if (_ != null) {
    _.setAttribute(h.Wj, "true");
  }
}
(() => {
  const t = (t) => {
    const r = b.find((r) =>
      r.querySelector('[data-mode-tab-icon="'.concat(t, '"]')),
    );
    if (r && y(t)) {
      r.dataset.modeTabActive = String(t === a.initialType);
      r.setAttribute("aria-pressed", String(t === a.initialType));
      o.append(r);
    } else if (r != null) {
      r.remove();
    }
  };
  let r = document.querySelector("#root #ssr-home-input-mode-tabs");
  const e =
    (s =
      (f = window._libra_server_abtest) == null ||
      (u = f.dreamina_home_input_mode_tabs) == null
        ? undefined
        : u.variant) === "v0" ||
    s === "v1" ||
    s === "v2" ||
    s === "v3" ||
    s === "v4"
      ? s
      : undefined;
  let n = r == null ? undefined : r.parentElement;
  var o = r == null ? undefined : r.content.firstElementChild;
  if (r && n && o instanceof HTMLElement && e && e !== "v0") {
    const i = g(e).filter(y);
    var a = ((variant, r, e, n) => {
      let o;
      const types = g(variant).filter((t) => r.includes(t));
      const a = e === "image" || e === "video" ? e : undefined;
      const s = types.find((t) => t === n);
      const c =
        (o = a != null ? a : s) != null
          ? o
          : {
              v0: "agentic",
              v1: "agentic",
              v2: "image",
              v3: "image",
              v4: "video",
            }[variant];
      const initialType = types.includes(c) ? c : types[0];
      if (initialType) {
        return {
          variant,
          modeTabs: variant !== "v0",
          types,
          initialType,
        };
      }
    })(
      e,
      i,
      new URLSearchParams(window.location.search).get("type"),
      (() => {
        try {
          let t;
          let r;
          let e;
          let n;
          t = document.cookie;
          r = `dreamina_content_generator_last_type=`;
          const o =
            (n = (
              typeof t === "string"
                ? t
                : (e = t == null ? undefined : t.join("; ")) != null
                  ? e
                  : ""
            )
              .split(";")
              .map((t) => t.trim())
              .find((t) => t.startsWith(r))) == null
              ? undefined
              : n.slice(r.length);
          if (o) {
            return decodeURIComponent(o);
          }
          return undefined;
        } catch (t) {
          return;
        }
      })(),
    );
    if (a) {
      if (r.dataset.initialType !== a.initialType) {
        var s;
        var c;
        var u;
        var f;
        var l;
        var h;
        let v;
        let p;
        const d = document.querySelector(
          '#root template[data-home-generator-fallback="'.concat(
            a.initialType,
            '"]',
          ),
        );
        const m =
          d == null ||
          (p = d.content.querySelector("#ssr-home-input-mode-tabs")) == null ||
          (v = p.parentElement) == null
            ? undefined
            : v.cloneNode(true);
        if (
          m instanceof HTMLElement &&
          (n.replaceWith(m),
          (o =
            (r = (n = m).querySelector("#ssr-home-input-mode-tabs")) == null
              ? undefined
              : r.content.firstElementChild),
          !r || !(o instanceof HTMLElement))
        ) {
          return;
        }
      }
      var b = Array.from(o.querySelectorAll("[data-mode-tab-active]"));
      for (const w of g(e)) {
        t(w);
      }
      n.classList.add(
        ...((c = r.dataset.generatorClassName) != null ? c : "")
          .split(" ")
          .filter(Boolean),
      );
      if (
        (l = n.querySelector("[data-static-content-generator-type-select]")) !=
        null
      ) {
        l.remove();
      }
      r.replaceWith(o);
      const A =
        (h = n.closest("[data-create-chat-area]")) == null
          ? undefined
          : h.querySelector('[data-create-mode-auxiliary="recommendations"]');
      if (A) {
        let x;
        let S;
        x = a.modeTabs;
        S = a.initialType;
        const E = !x || S === "agentic";
        A.style.display = E ? "" : "none";
        A.setAttribute("aria-hidden", String(!E));
        A.toggleAttribute("inert", !E);
      }
      for (const O of document.querySelectorAll(
        "[data-home-generator-fallback]",
      )) {
        O.remove();
      }
      const R = () => {
        var t;
        var r;
        var e;
        var n;
        var i;
        e = (t = o).getBoundingClientRect();
        i =
          (n = t.querySelector('[data-mode-tab-active="true"]')) &&
          getComputedStyle(n).visibility !== "hidden"
            ? n.getBoundingClientRect()
            : undefined;
        var a = ((t) => {
          var { width, height, fullHeight = height + 24, selected } = t;
          if (!(width <= 0) && !(height <= 0)) {
            const i =
              selected !== undefined &&
              selected.left + selected.width >= width - 1;
            const a = `M 0 ${height + 24} Q 0 `
              .concat(height, " ")
              .concat(24, " ")
              .concat(height);
            const s = i
              ? ""
              : `H ${width - 24} Q `
                  .concat(width, " ")
                  .concat(height, " ")
                  .concat(width, " ")
                  .concat(height + 24);
            let c = "".concat(a, " ").concat(s);
            let u = "";
            let f = "";
            const l = selected !== undefined && selected.left < 1;
            if (selected) {
              const { left } = selected;
              const v = i ? width : left + selected.width;
              const p = Math.max(0.75, selected.top);
              const d = Math.min(12, 0.5 * selected.height);
              const g = l ? 24 - p : d;
              const y = l && selected.leadingTab ? 16 : d;
              const m = i ? 24 - p : y;
              const b = height - 10;
              const w = Math.max(b, p + g);
              const A = l
                ? "A "
                    .concat(g, " ")
                    .concat(g, " 0 0 1 ")
                    .concat(left + g, " ")
                    .concat(p)
                : "Q "
                    .concat(left, " ")
                    .concat(p, " ")
                    .concat(left + g, " ")
                    .concat(p);
              const x = l ? 0.75 : left;
              const S = l
                ? "A "
                    .concat(g, " ")
                    .concat(g, " 0 0 1 ")
                    .concat(x + g, " ")
                    .concat(p)
                : A;
              const E = i
                ? "A "
                    .concat(m, " ")
                    .concat(m, " 0 0 1 ")
                    .concat(v, " ")
                    .concat(p + m)
                : "Q "
                    .concat(v, " ")
                    .concat(p, " ")
                    .concat(v, " ")
                    .concat(p + m);
              const O = i ? v - 0.75 : v;
              const R = i
                ? "A "
                    .concat(m, " ")
                    .concat(m, " 0 0 1 ")
                    .concat(O, " ")
                    .concat(p + m)
                : E;
              const M = i ? height + 24 : b;
              const I = i
                ? ""
                : "Q "
                    .concat(v, " ")
                    .concat(height, " ")
                    .concat(v + 10, " ")
                    .concat(height);
              const _ = `H ${v - m} `.concat(E, " V ").concat(M, " ").concat(I);
              f = `<path fill="none" stroke="white" stroke-width="${1.5}" d="M `
                .concat(x, " ")
                .concat(w, "\n      V ")
                .concat(p + g, " ")
                .concat(S, "\n      H ")
                .concat(O - m, " ")
                .concat(R, " V ")
                .concat(M, '"/>');
              const k = "Q "
                .concat(left, " ")
                .concat(height, " ")
                .concat(left, " ")
                .concat(w, "\n      V ")
                .concat(p + g, " ")
                .concat(A, "\n      ")
                .concat(_);
              u = `M ${left - 10} `.concat(height, " ").concat(k, " Z");
              const T = l
                ? `M ${0.75} ${height + 24} V ${p + g}\n        A `
                    .concat(g, " ")
                    .concat(g, " 0 0 1 ")
                    .concat(g + 0.75, " ")
                    .concat(p)
                : ""
                    .concat(a, " H ")
                    .concat(left - 10, " ")
                    .concat(k);
              c = l
                ? "".concat(T, " ").concat(_, " ").concat(s)
                : "".concat(T, " ").concat(s);
            }
            const j = height + 24;
            const N = l
              ? ""
              : "M 0 "
                  .concat(height, " H ")
                  .concat(24, " Q 0 ")
                  .concat(height, " 0 ")
                  .concat(j, " Z");
            const D = i
              ? ""
              : `M ${width - 24} `
                  .concat(height, " H ")
                  .concat(width, " V ")
                  .concat(j, " Q ")
                  .concat(width, " ")
                  .concat(height, " ")
                  .concat(width - 24, " ")
                  .concat(height, " Z");
            const P = '<svg xmlns="http://www.w3.org/2000/svg" width="'
              .concat(width, '" height="')
              .concat(
                j,
                '"><defs><mask id="header" maskUnits="userSpaceOnUse" x="0" y="0" width="',
              )
              .concat(width, '" height="')
              .concat(
                j,
                '" style="mask-type:luminance"><rect width="100%" height="',
              )
              .concat(height, '" fill="white"/><path fill="black" d="')
              .concat(u, '"/><path fill="white" d="')
              .concat(N, " ")
              .concat(
                D,
                '"/></mask></defs><rect width="100%" height="100%" fill="white" mask="url(#header)"/></svg>',
              );
            const C = '<path fill="none" stroke="white" stroke-width="1" d="'
              .concat(c, '"/>')
              .concat(f);
            const F = '<svg xmlns="http://www.w3.org/2000/svg" width="'
              .concat(width, '" height="')
              .concat(fullHeight, '" viewBox="0 0 ')
              .concat(width, " ")
              .concat(fullHeight, '"><rect x="')
              .concat(0.5, '" y="')
              .concat(0.5, '" width="')
              .concat(Math.max(0, width - 1), '" height="')
              .concat(Math.max(0, fullHeight - 1), '" rx="')
              .concat(23.5, '" fill="none" stroke="white" stroke-width="')
              .concat(1, '"/>')
              .concat(C, "</svg>");
            return {
              "--content-generator-mode-tab-header-mask":
                'url("data:image/svg+xml,'.concat(encodeURIComponent(P), '")'),
              "--content-generator-mode-tab-header-outline":
                'url("data:image/svg+xml,'.concat(encodeURIComponent(F), '")'),
              "--content-generator-mode-tab-outline-height": "".concat(
                fullHeight,
                "px",
              ),
            };
          }
        })({
          width: e.width,
          height: e.height,
          fullHeight:
            (r = t.parentElement) == null
              ? undefined
              : r.getBoundingClientRect().height,
          selected: i
            ? {
                left: i.left - e.left,
                top: i.top - e.top,
                width: i.width,
                height: i.height,
                leadingTab: n === t.querySelector("[data-mode-tab-active]"),
              }
            : undefined,
        });
        for (var [s, c] of Object.entries(a != null ? a : {})) {
          o.style.setProperty(s, String(c));
        }
      };
      R();
      const M =
        typeof ResizeObserver === "undefined"
          ? undefined
          : new ResizeObserver(R);
      if (M != null) {
        M.observe(n);
      }
      if (M != null) {
        M.observe(o);
      }
      for (const I of o.querySelectorAll("[data-mode-tab-active]")) {
        if (M != null) {
          M.observe(I);
        }
      }
      const _ = document.getElementById("root");
      if (_ == null ? undefined : _.parentElement) {
        var k = new MutationObserver(() => {
          if (!_.isConnected) {
            if (M != null) {
              M.disconnect();
            }
            k.disconnect();
          }
        });
        k.observe(_.parentElement, {
          childList: true,
        });
      }
    }
  }
})();
const k = {
  bid: a.SLARDAR.bid,
  release: (window.gfdatav1 || {}).ver,
  env,
  ...(a.SLARDAR.domain
    ? {
        domain: a.SLARDAR.domain,
      }
    : {}),
  pluginPathPrefix: a.SLARDAR.pluginPathPrefix,
  ...(sessionId
    ? {
        sessionId,
      }
    : {}),
  plugins: {
    pageview: {
      extractPid: (t) => b(t),
      fetch: {
        extraExtractor: (t, r) => E(t, r),
      },
      ajax: {
        extraExtractor: (t, r) => E(t, r),
      },
    },
    jsError: {
      ignoreErrors: [
        "/ChunkLoadError/i",
        "/Loading chunk/i",
        "/Illegal invocation/i",
        "/Failed to fetch/i",
        "/ResizeObserver loop completed with undelivered notifications/i",
      ],
      onunhandledrejection: false,
    },
  },
  integrations: [
    S4({
      pure: true,
      types: ["click"],
      ignoreUrls: [],
    }),
    Yk(
      (() => {
        const t = b(window.location.href);
        for (const r of w) {
          const { regexp, ...rest } = r;
          if (regexp.test(t)) {
            return rest;
          }
        }
        return {
          rootSelector: "#csr-root",
          threshold: 2,
          partialShot: false,
        };
      })(),
    ),
    {
      name: "refreshPreStartContext",
      setup(t) {
        t.on("start", () => {
          for (
            var r = t.getPreStartQueue(),
              e = (t.context && t.context.toString()) || {},
              n = 0;
            n < r.length;
            ++n
          ) {
            r[n].overrides = r[n].overrides || {};
            r[n].overrides.context = e;
          }
        });
      },
    },
    s.imageReport({
      debug: false,
      sampleRate: 0.1,
      ignoreUrls: [],
    }),
  ],
};
let T = false;
function j() {
  if (document.visibilityState === "hidden") {
    window.__DreaminaSlardar("context.set", "hasHidden", "true");
  }
  if (O != null) {
    O();
  }
}
window.__DreaminaSlardar("on", "report", function (t) {
  if (
    !(
      T ||
      (t.ev_type !== "js_error" &&
        t.ev_type !== "blank_screen" &&
        t.ev_type !== "resource_error")
    )
  ) {
    T = true;
    window.__DreaminaSlardar("start");
  }
  return t;
});
window.__DreaminaSlardar(
  "setFilter",
  "resource",
  (t) =>
    !(
      t.name.includes("get_unread_count") ||
      t.name.includes("user_credit_history") ||
      t.name.includes("monitor_browser/collect/batch") ||
      t.name.includes(a.SLARDAR.teaReportFilterUrl)
    ),
);
window.__DreaminaSlardar("on", "beforeSend", (t) => {
  try {
    var r;
    var e;
    var n;
    if (t.ev_type === "blank_screen") {
      r = window.__DreaminaSlardar;
      e = null;
      n = () => {
        var t;
        var n;
        if (e) {
          clearTimeout(e);
        }
        r("sendEvent", {
          type: "event",
          name: "blank_screen_query_path",
          metrics: {},
          categories: {
            dom_show: JSON.stringify(
              (() => {
                const { innerHeight, innerWidth } = window;
                const e = [200, 0.33 * innerHeight];
                const n = [0.67 * innerWidth, 0.33 * innerHeight];
                const o = [200, 0.67 * innerHeight];
                const i = [0.67 * innerWidth, 0.67 * innerHeight];
                const a = document.elementsFromPoint(e[0], e[1]);
                const s = document.elementsFromPoint(n[0], n[1]);
                const c = document.elementsFromPoint(o[0], o[1]);
                const u = document.elementsFromPoint(i[0], i[1]);
                return [a.map(A), s.map(A), u.map(A), c.map(A)];
              })(),
            ),
          },
        });
        if (!((n = r.getSender) == null || (t = n.call(r)) == null)) {
          t.flush();
        }
      };
      e = setTimeout(() => {
        window.removeEventListener("beforeunload", n);
        n();
      }, 8000);
      window.addEventListener("beforeunload", n);
    }
  } catch (t) {}
  return t;
});
window.__DreaminaSlardar("on", "init", () => {
  var t;
  var r;
  if ((t = window.__DreaminaSlardar.getSender()) != null) {
    t.setWait(5000);
  }
  if ((r = window.__DreaminaSlardar.getSender()) != null) {
    r.setSize(50);
  }
});
if (window.gfdatav1) {
  window.__DreaminaSlardar("context.set", "idc", window.gfdatav1.idc);
}
if (window._currentBranch) {
  window.__DreaminaSlardar("context.set", "branch", window._currentBranch);
}
if (window._currentBranch) {
  window.__DreaminaSlardar(
    "context.set",
    "ssrRenderLevel",
    "".concat(
      (n = (o = window._SSR_DATA) == null ? undefined : o.renderLevel) != null
        ? n
        : 0,
    ),
  );
}
window.__DreaminaSlardar(
  "context.set",
  "hasHidden",
  `${!!(document.visibilityState === "hidden" && !document.prerendering)}`,
);
const N = ["visibilitychange", "prerenderingchange"];
for (const D of N) {
  window.addEventListener(D, j);
}
O = () => {
  for (var t of N) {
    window.removeEventListener(t, j);
  }
};
window.__DreaminaSlardar("on", "beforeBuild", function (t) {
  if (t.ev_type === "action" && t.payload.target.path) {
    t.payload.target.path = (function (t) {
      const r =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ">";
      if (!t) {
        return t;
      }
      const e = RegExp("s*".concat(r, "s*"), "g");
      const n = t.split(e);
      const o = [];
      for (const i of n) {
        const a = i.trim().match(/\.[\w_-]+/g);
        if (a == null ? undefined : a.length) {
          const s = {};
          for (const c of a) {
            const u = ((t) => {
              const r = t.replace(/-[\w+=_/]{5,7}$/, "");
              if (r.length < 3) {
                return t;
              }
              return r;
            })(c);
            if (u !== c) {
              s[c] = u;
            }
          }
          let f = i;
          for (const [l, h] of Object.entries(s)) {
            f = f.replace(l, h);
          }
          o.push(f.trim());
        } else {
          o.push(i.trim());
        }
      }
      return o.join(" ".concat(r, " "));
    })(t.payload.target.path);
  }
  return t;
});
window.__DreaminaSlardar("on", "provide", function (t) {
  let r;
  let e;
  if (
    t === "performanceSend" &&
    ((e = window.__DreaminaSlardar.pp) == null || (r = e.entries) == null
      ? undefined
      : r.length)
  ) {
    for (const n of window.__DreaminaSlardar.pp.entries.filter(
      (t) => (t == null ? undefined : t.entryType) === "longtask",
    )) {
      window.__DreaminaSlardar.report({
        ev_type: "performance_longtask",
        payload: {
          type: "perf",
          longtasks: [n],
        },
      });
    }
  }
});
window.__DreaminaSlardar("init", k);
const { customServerMetrics, serverTimingParams } = (() => {
  const serverTimingParams_1 = {
    timing: {},
    description: {},
  };
  const customServerMetrics_1 = [];
  try {
    for (const e of performance
      .getEntriesByType("navigation")
      .reduce((acc, item) => {
        if (item && item.serverTiming) {
          acc.push(...item.serverTiming);
        }
        return acc;
      }, [])) {
      var n;
      var o;
      const { name, description, duration } = e;
      if (e.name) {
        serverTimingParams_1.timing["".concat(name, "_duration")] = duration;
        if (description) {
          serverTimingParams_1.description["".concat(name, "_description")] =
            description;
        }
        if (name.startsWith("bd-")) {
          customServerMetrics_1.push({
            name,
            value: duration,
            type: "perf",
            extra: description
              ? {
                  description,
                }
              : undefined,
          });
        }
      }
    }
    window._serverTimingParams = serverTimingParams_1;
    const f = "cc-ssr-render_cache_status_description";
    serverTimingParams_1.description = {
      ...serverTimingParams_1.description,
      log_id: "".concat((n = window.__agw_log_id) != null ? n : "N/A"),
      ...(window.__ssr_render
        ? {
            ssr_render: window.__ssr_render,
            [f]: window.__ssr_cache,
          }
        : {}),
    };
    window.__DreaminaSlardar(
      "context.set",
      "renderCacheStatus",
      (o = serverTimingParams_1.description[f]) != null ? o : "N/A",
    );
  } catch (error) {
    console.error("[Slardar] failed to handle server timings", error);
  }
  return {
    serverTimingParams: serverTimingParams_1,
    customServerMetrics: customServerMetrics_1,
  };
})();
for (const F of customServerMetrics) {
  window.__DreaminaSlardar("sendCustomPerfMetric", F);
}
window.__DreaminaSlardar("sendEvent", {
  name: "navigation_server_timing",
  metrics: serverTimingParams.timing,
  categories: serverTimingParams.description,
});
