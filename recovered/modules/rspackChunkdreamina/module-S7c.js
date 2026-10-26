import n from "oa";
let r;
export var yR = "transport_id";
const o = "__dreamina_dcc_import_focus_time__";
const s = "__dreamina_dcc_import_channel__:v1";
const c = /^[A-Za-z0-9_-]{12,160}$/;
function l(e) {
  return typeof e === "object" && e !== null;
}
function d(target) {
  return target === "generate" || target === "canvas";
}
function u(e) {
  return typeof e === "string" && c.test(e);
}
function h(e) {
  return typeof e === "string" && e.length > 0 && e.length <= 200;
}
function p(destinationUrl) {
  return (
    destinationUrl === undefined ||
    (typeof destinationUrl === "string" && destinationUrl.length <= 4096)
  );
}
function v() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return ""
    .concat(Date.now().toString(36), "-")
    .concat(Math.random().toString(36).slice(2, 12));
}
function m(e) {
  let t;
  if (
    l(e) &&
    e.version === 1 &&
    u(e.transportId) &&
    ((t = e.pluginSource) === "blender" || t === "maya") &&
    typeof e.thirdPartyId === "string" &&
    e.thirdPartyId.length !== 0 &&
    !(e.thirdPartyId.length > 4096) &&
    d(e.target) &&
    typeof e.createdAt === "number" &&
    Number.isFinite(e.createdAt)
  ) {
    return {
      version: 1,
      transportId: e.transportId,
      pluginSource: e.pluginSource,
      thirdPartyId: e.thirdPartyId,
      target: e.target,
      createdAt: e.createdAt,
    };
  }
}
export function _P(e) {
  let t;
  const createdAt =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : Date.now();
  const pluginSource = e.searchParams.get("channel");
  const thirdPartyId =
    (t = e.searchParams.get("thirdparty_id")) != null
      ? t
      : e.searchParams.get("third_party_id");
  const target = e.searchParams.get("target");
  return m({
    version: 1,
    transportId: e.searchParams.get(yR),
    pluginSource,
    thirdPartyId,
    target,
    createdAt,
  });
}
function f(e) {
  return `__dreamina_dcc_import_task__:`.concat(e);
}
function y(transportId) {
  return `__dreamina_dcc_import_completion__:`.concat(transportId);
}
export function _I(e) {
  try {
    sessionStorage.setItem(f(e.transportId), JSON.stringify(e));
  } catch (e) {}
}
export function t6(e) {
  if (u(e)) {
    try {
      const t = sessionStorage.getItem(f(e));
      if (t) {
        return m(JSON.parse(t));
      }
      return undefined;
    } catch (e) {
      return;
    }
  }
}
export function n3(e) {
  try {
    sessionStorage.removeItem(f(e));
  } catch (e) {}
}
export function z8(e) {
  try {
    globalThis.localStorage.setItem(y(e.transportId), JSON.stringify(e));
  } catch (e) {}
}
export function MM(transportId) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : Date.now();
  if (u(transportId)) {
    try {
      const i = globalThis.localStorage.getItem(y(transportId));
      if (!i) {
        return;
      }
      const r = JSON.parse(i);
      if (
        !l(r) ||
        r.version !== 1 ||
        r.transportId !== transportId ||
        !d(r.target) ||
        (r.status !== "completed" && r.status !== "failed") ||
        typeof r.completedAt !== "number" ||
        !Number.isFinite(r.completedAt) ||
        r.completedAt > t + 60000 ||
        t - r.completedAt > 1800000 ||
        (r.reason !== undefined && typeof r.reason !== "string") ||
        !p(r.destinationUrl)
      ) {
        return void globalThis.localStorage.removeItem(y(transportId));
      }
      return n._(
        {
          version: 1,
          transportId,
          target: r.target,
          status: r.status,
          completedAt: r.completedAt,
        },
        typeof r.reason === "string"
          ? {
              reason: r.reason,
            }
          : {},
        typeof r.destinationUrl === "string"
          ? {
              destinationUrl: r.destinationUrl,
            }
          : {},
      );
    } catch (e) {
      return;
    }
  }
}
export function Ye(e) {
  const t = new URL(e.toString());
  const i = t.searchParams.get(yR);
  const r = ["x-tt-env", "x-use-ppe", "env"]
    .map((e) => [e, t.searchParams.get(e)])
    .filter((e) => e[1] !== null);
  t.search = "";
  r.forEach((e) => {
    var [i, r] = e;
    return t.searchParams.set(i, r);
  });
  if (i) {
    t.searchParams.set(yR, i);
  }
  t.hash = "";
  return "".concat(t.pathname).concat(t.search);
}
function j(e, t, i) {
  const r = new URL(e, i.origin);
  ["x-tt-env", "x-use-ppe", "env"].forEach((e) => {
    var t = i.searchParams.get(e);
    if (t !== null) {
      r.searchParams.set(e, t);
    }
  });
  r.searchParams.set(yR, t.transportId);
  return r;
}
export function fS(e, t) {
  const i = j(
    e.target === "generate" ? "/ai-tool/home" : "/ai-tool/ai-canvas",
    e,
    t,
  );
  return "".concat(i.pathname).concat(i.search);
}
export function $b(e, t, i) {
  let r;
  if (i) {
    return fS(e, t);
  }
  (r = j("/ai-tool/home", e, t)).searchParams.set("need_login", "1");
  return "".concat(r.pathname).concat(r.search);
}
export function s1() {
  if (r == null) {
    r = v();
  }
  return r;
}
export function xY() {
  try {
    const e = Number(sessionStorage.getItem(o));
    if (Number.isFinite(e) && e > 0) {
      return e;
    }
    return Date.now();
  } catch (e) {
    return Date.now();
  }
}
export function IJ() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : Date.now();
  try {
    sessionStorage.setItem(o, String(e));
  } catch (e) {}
  return e;
}
export function n7(e, t, i) {
  const r = new Map();
  e.forEach((e) => {
    if (
      e.type === "candidate" &&
      e.transportId === t.transportId &&
      e.requesterTabId === i &&
      e.target === t.target
    ) {
      var n = r.get(e.tabId);
      if (!n || e.focusTime > n.focusTime) {
        r.set(e.tabId, e);
      }
    }
  });
  return [...r.values()].sort(
    (e, t) =>
      t.focusTime - e.focusTime ||
      Number(t.focused) - Number(e.focused) ||
      e.tabId.localeCompare(t.tabId),
  )[0];
}
export function n6() {
  let e;
  const t = new Set();
  if (typeof BroadcastChannel !== "undefined") {
    try {
      e = new BroadcastChannel("dreamina:dcc-import:v1");
    } catch (t) {
      e = undefined;
    }
  }
  const i = (e) => {
    if (
      l(e) &&
      e.version === 1 &&
      typeof e.type === "string" &&
      u(e.transportId) &&
      h(e.requesterTabId) &&
      (e.type === "discover"
        ? d(e.target) && typeof e.sentAt === "number"
        : e.type === "candidate"
          ? d(e.target) &&
            h(e.tabId) &&
            typeof e.focusTime === "number" &&
            typeof e.focused === "boolean"
          : e.type === "import"
            ? h(e.targetTabId) && m(e.task) !== undefined
            : e.type === "claimed"
              ? h(e.targetTabId) && d(e.target)
              : e.type === "completed"
                ? h(e.targetTabId) && d(e.target) && p(e.destinationUrl)
                : e.type === "declined"
                  ? h(e.targetTabId) &&
                    d(e.target) &&
                    (e.reason === "session_inactive" ||
                      e.reason === "unavailable")
                  : e.type === "failed" &&
                    h(e.targetTabId) &&
                    d(e.target) &&
                    typeof e.reason === "string" &&
                    e.reason.length <= 2000)
    ) {
      t.forEach((t) => t(e));
    }
  };
  const r = (e) => i(e.data);
  const n = (e) => {
    if (e.key === s && e.newValue) {
      try {
        var t = JSON.parse(e.newValue);
        if (l(t)) {
          i(t.message);
        }
      } catch (e) {}
    }
  };
  if (e != null) {
    e.addEventListener("message", r);
  }
  window.addEventListener("storage", n);
  return {
    post: (message) => {
      if (e != null) {
        e.postMessage(message);
      }
      try {
        var i = {
          nonce: v(),
          message,
        };
        globalThis.localStorage.setItem(s, JSON.stringify(i));
      } catch (e) {}
    },
    subscribe: (e) => {
      t.add(e);
      return () => t.delete(e);
    },
    close: () => {
      t.clear();
      if (e != null) {
        e.removeEventListener("message", r);
      }
      if (e != null) {
        e.close();
      }
      window.removeEventListener("storage", n);
    },
  };
}
Object.defineProperty(exports, "VJ", {
  enumerable: true,
  get: () => 1,
});
