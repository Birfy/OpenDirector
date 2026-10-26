import { Z } from "./module-X8.js";
let i;
const r = "dreamina.embed-context.v1";
const o = "dreamina.ccpc.tab-source.v1";
const defaultPolicy = {
  shortDramaEnabled: false,
  collapseNovelSidebar: false,
};
const entries = new Map([
  ["dreamina_ai", defaultPolicy],
  [
    "dreamina_novel",
    {
      shortDramaEnabled: true,
      collapseNovelSidebar: true,
    },
  ],
]);
const d = {
  capcut_pc: {
    defaultPolicy,
    entries,
  },
  browser: {
    defaultPolicy: {
      shortDramaEnabled: true,
      collapseNovelSidebar: false,
    },
    entries: new Map(),
  },
};
let _ = false;
function u(e) {
  if (typeof e === "string" && /^[a-z][a-z0-9_]{0,63}$/.test(e)) {
    return e;
  }
  return null;
}
function c(e, t) {
  const a = e.getAll(t);
  if (a.length === 1) {
    return u(a[0]);
  }
  return null;
}
function m(e) {
  const t = new URLSearchParams(e);
  if (t.has("embed_host") || t.has("embed_entry")) {
    return {
      host: c(t, "embed_host"),
      entry: c(t, "embed_entry"),
    };
  }
  if (t.has("ccpc_source")) {
    return {
      host: "capcut_pc",
      entry: c(t, "ccpc_source"),
    };
  }
}
function g(e, t) {
  let a;
  let s;
  let l;
  if (e !== undefined) {
    s = m(e);
  } else if (typeof window !== "undefined") {
    s = _
      ? i
      : (l = m(window.location.search)) != null
        ? l
        : (() => {
            try {
              const e = window.sessionStorage.getItem(r);
              if (e !== null) {
                const t = JSON.parse(e);
                return {
                  host: u(
                    typeof t === "object" && t !== null && "host" in t
                      ? t.host
                      : null,
                  ),
                  entry: u(
                    typeof t === "object" && t !== null && "entry" in t
                      ? t.entry
                      : null,
                  ),
                };
              }
              const a = window.sessionStorage.getItem(o);
              if (a === null) {
                return undefined;
              }
              return {
                host: "capcut_pc",
                entry: u(a),
              };
            } catch (e) {
              return;
            }
          })();
  }
  return {
    host: Z(t) ? "capcut_pc" : "browser",
    entry: (a = s == null ? undefined : s.entry) != null ? a : "dreamina_ai",
  };
}
export function T() {
  if (typeof window !== "undefined" && !_) {
    i = g();
    _ = true;
    try {
      window.sessionStorage.setItem(r, JSON.stringify(i));
      window.sessionStorage.removeItem(o);
    } catch (e) {}
  }
}
export function Yu(e, t) {
  let a;
  const i = g(t, e);
  const { entries, defaultPolicy } = d[i.host];
  if ((a = entries.get(i.entry)) != null) {
    return a;
  }
  return defaultPolicy;
}
